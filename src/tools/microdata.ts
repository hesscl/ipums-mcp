import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { createWriteStream, mkdirSync } from "fs";
import { createHash } from "crypto";
import { pipeline } from "stream/promises";
import { Readable, PassThrough } from "stream";
import path from "path";
import { ipumsRequest, getApiKey } from "../client.js";
import {
  MicrodataCollectionSchema,
  MicrodataExtractSchema,
  PaginationSchema,
  PathParamSchema,
} from "../types.js";

export function registerMicrodataTools(server: McpServer): void {
  // List recent extracts for a microdata collection
  server.tool(
    "microdata_list_extracts",
    "List recent extracts for an IPUMS microdata collection (e.g. usa, cps, ipumsi). Returns extract numbers, status, and basic metadata.",
    {
      collection: MicrodataCollectionSchema.describe(
        "IPUMS microdata collection (e.g. 'usa', 'cps', 'ipumsi')"
      ),
      version: z.string().optional().default("v2").describe("API version (default: v2)"),
      ...PaginationSchema.shape,
    },
    async ({ collection, version = "v2", pageNumber, pageSize }) => {
      const params: Record<string, string | number> = {
        collection,
        version,
      };
      if (pageNumber !== undefined) params.pageNumber = pageNumber;
      if (pageSize !== undefined) params.pageSize = pageSize;

      const result = await ipumsRequest("/extracts", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Get a specific microdata extract by number
  server.tool(
    "microdata_get_extract",
    "Get the status and details of a specific IPUMS microdata extract by its number. Includes download links when the extract is complete.",
    {
      collection: MicrodataCollectionSchema.describe(
        "IPUMS microdata collection (e.g. 'usa', 'cps')"
      ),
      extractNumber: z
        .number()
        .int()
        .positive()
        .describe("Extract number to retrieve"),
      version: z.string().optional().default("v2").describe("API version (default: v2)"),
    },
    async ({ collection, extractNumber, version = "v2" }) => {
      const result = await ipumsRequest(`/extracts/${extractNumber}`, {
        params: { collection, version },
      });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Create a new microdata extract
  server.tool(
    "microdata_create_extract",
    "Submit a new IPUMS microdata extract request. Specify the collection, samples, variables, and output format. Returns the new extract number and initial status.",
    {
      collection: MicrodataCollectionSchema.describe(
        "IPUMS microdata collection (e.g. 'usa', 'cps')"
      ),
      description: z
        .string()
        .optional()
        .describe("Human-readable description of this extract"),
      dataFormat: MicrodataExtractSchema.shape.dataFormat,
      dataStructure: MicrodataExtractSchema.shape.dataStructure,
      samples: MicrodataExtractSchema.shape.samples,
      variables: MicrodataExtractSchema.shape.variables,
      caseSelectWho: MicrodataExtractSchema.shape.caseSelectWho,
      version: z.string().optional().default("v2").describe("API version (default: v2)"),
    },
    async ({
      collection,
      description,
      dataFormat,
      dataStructure,
      samples,
      variables,
      caseSelectWho,
      version = "v2",
    }) => {
      const extractBody: Record<string, unknown> = {};
      if (description !== undefined) extractBody.description = description;
      if (dataFormat !== undefined) extractBody.dataFormat = dataFormat;
      if (dataStructure !== undefined) extractBody.dataStructure = dataStructure;
      if (samples !== undefined) {
        // API expects { "sampleId": {} }, not [{ id: "sampleId" }]
        extractBody.samples = Object.fromEntries(samples.map(({ id }) => [id, {}]));
      }
      if (variables !== undefined) {
        // API expects { "VARNAME": { opts } }, not [{ name: "VARNAME", ...opts }]
        extractBody.variables = Object.fromEntries(
          variables.map(({ name, ...opts }) => [name, opts])
        );
      }
      if (caseSelectWho !== undefined) extractBody.caseSelectWho = caseSelectWho;

      const result = await ipumsRequest("/extracts", {
        method: "POST",
        params: { collection, version },
        body: extractBody,
      });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Download completed microdata extract files to a local directory
  server.tool(
    "microdata_download_extract",
    "Download completed IPUMS microdata extract files to a local directory. Verifies SHA-256 checksums. Returns local file paths and verification status.",
    {
      collection: MicrodataCollectionSchema.describe(
        "IPUMS microdata collection (e.g. 'usa', 'cps')"
      ),
      extractNumber: z
        .number()
        .int()
        .positive()
        .describe("Extract number to download"),
      outputDir: z
        .string()
        .describe("Local directory path to save downloaded files (created if it does not exist)"),
      fileTypes: z
        .array(
          z.enum([
            "data",
            "ddiCodebook",
            "basicCodebook",
            "rCommandFile",
            "spssCommandFile",
            "stataCommandFile",
            "stsCommandFile",   // actual key returned by API for Stata syntax
            "sasCommandFile",
          ])
        )
        .optional()
        .default(["data", "ddiCodebook"])
        .describe("File types to download (default: data and ddiCodebook)"),
      version: z.string().optional().default("v2").describe("API version (default: v2)"),
    },
    async ({
      collection,
      extractNumber,
      outputDir,
      fileTypes = ["data", "ddiCodebook"],
      version = "v2",
    }) => {
      // Fetch extract metadata to get status and downloadLinks
      const extract = (await ipumsRequest(`/extracts/${extractNumber}`, {
        params: { collection, version },
      })) as Record<string, unknown>;

      const status = extract.status as string | undefined;
      if (status !== "completed") {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                error: `Extract ${extractNumber} is not completed (status: ${status ?? "unknown"})`,
              }),
            },
          ],
        };
      }

      type DownloadLink = { url: string; bytes: number; sha256: string };
      const downloadLinks = extract.downloadLinks as
        | Record<string, DownloadLink>
        | undefined;

      if (!downloadLinks) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: "No downloadLinks found in extract response" }),
            },
          ],
        };
      }

      mkdirSync(outputDir, { recursive: true });

      const apiKey = getApiKey();
      const downloaded: Array<{
        fileType: string;
        localPath: string;
        bytes: number;
        sha256Verified: boolean;
      }> = [];
      const errors: Array<{ fileType: string; error: string }> = [];

      for (const fileType of fileTypes) {
        const link = downloadLinks[fileType];
        if (!link) {
          errors.push({ fileType, error: "Not available in this extract" });
          continue;
        }

        // Validate URL is HTTPS on an ipums.org host before sending credentials
        let parsedUrl: URL;
        try {
          parsedUrl = new URL(link.url);
        } catch {
          errors.push({ fileType, error: `Invalid download URL: ${link.url}` });
          continue;
        }
        if (
          parsedUrl.protocol !== "https:" ||
          !parsedUrl.hostname.endsWith(".ipums.org")
        ) {
          errors.push({
            fileType,
            error: `Refusing to send credentials to unexpected host: ${parsedUrl.hostname}`,
          });
          continue;
        }

        const filename = path.basename(parsedUrl.pathname);
        const localPath = path.join(outputDir, filename);

        try {
          const response = await fetch(link.url, {
            headers: { Authorization: apiKey },
          });

          if (!response.ok) {
            errors.push({
              fileType,
              error: `HTTP ${response.status} ${response.statusText}`,
            });
            continue;
          }

          const hash = createHash("sha256");
          const pass = new PassThrough();
          pass.on("data", (chunk: Buffer) => hash.update(chunk));

          await pipeline(
            Readable.fromWeb(response.body as Parameters<typeof Readable.fromWeb>[0]),
            pass,
            createWriteStream(localPath)
          );

          const actualSha256 = hash.digest("hex");
          const sha256Verified = actualSha256 === link.sha256;

          downloaded.push({ fileType, localPath, bytes: link.bytes, sha256Verified });

          if (!sha256Verified) {
            errors.push({
              fileType,
              error: `SHA-256 mismatch: expected ${link.sha256}, got ${actualSha256}`,
            });
          }
        } catch (err) {
          errors.push({ fileType, error: String(err) });
        }
      }

      return {
        content: [
          { type: "text", text: JSON.stringify({ downloaded, errors }, null, 2) },
        ],
      };
    }
  );

  // Poll until an extract reaches a terminal status
  server.tool(
    "microdata_wait_for_extract",
    "Poll a microdata extract until it completes (or fails). Returns the final extract object including downloadLinks when done. Use after microdata_create_extract to avoid manual status checks.",
    {
      collection: MicrodataCollectionSchema.describe(
        "IPUMS microdata collection (e.g. 'usa', 'cps')"
      ),
      extractNumber: z
        .number()
        .int()
        .positive()
        .describe("Extract number to wait for"),
      pollIntervalSeconds: z
        .number()
        .int()
        .min(5)
        .max(120)
        .optional()
        .default(15)
        .describe("Seconds between status checks (default: 15, min: 5)"),
      timeoutSeconds: z
        .number()
        .int()
        .min(30)
        .max(3600)
        .optional()
        .default(600)
        .describe("Maximum seconds to wait before giving up (default: 600)"),
      version: z.string().optional().default("v2").describe("API version (default: v2)"),
    },
    async ({
      collection,
      extractNumber,
      pollIntervalSeconds = 15,
      timeoutSeconds = 600,
      version = "v2",
    }) => {
      const TERMINAL = new Set(["completed", "failed", "cancelled"]);
      const deadline = Date.now() + timeoutSeconds * 1000;
      let attempts = 0;

      while (true) {
        const extract = (await ipumsRequest(`/extracts/${extractNumber}`, {
          params: { collection, version },
        })) as Record<string, unknown>;

        attempts++;
        const status = extract.status as string | undefined;

        if (status && TERMINAL.has(status)) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  { attempts, waitedSeconds: attempts * pollIntervalSeconds, extract },
                  null,
                  2
                ),
              },
            ],
          };
        }

        if (Date.now() + pollIntervalSeconds * 1000 > deadline) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  error: `Timed out after ${timeoutSeconds}s (${attempts} checks). Last status: ${status ?? "unknown"}`,
                  extract,
                }),
              },
            ],
          };
        }

        await new Promise((r) => setTimeout(r, pollIntervalSeconds * 1000));
      }
    }
  );
}
