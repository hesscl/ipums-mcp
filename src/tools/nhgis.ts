import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ipumsRequest } from "../client.js";
import {
  NhgisExtractSchema,
  PaginationSchema,
  PathParamSchema,
} from "../types.js";

const NHGIS_VERSION = "v1";

function buildPaginationParams(
  pageNumber?: number,
  pageSize?: number
): Record<string, string | number> {
  const params: Record<string, string | number> = { version: NHGIS_VERSION };
  if (pageNumber !== undefined) params.pageNumber = pageNumber;
  if (pageSize !== undefined) params.pageSize = pageSize;
  return params;
}

/** Fetch all pages from a paginated NHGIS metadata endpoint. */
async function fetchAllPages(
  path: string,
  extraParams: Record<string, string | number> = {},
  maxPages = 20
): Promise<unknown[]> {
  const results: unknown[] = [];
  let pageNumber = 1;

  while (pageNumber <= maxPages) {
    const params = { version: NHGIS_VERSION, pageSize: 500, pageNumber, ...extraParams };
    const page = (await ipumsRequest(path, { params })) as {
      data?: unknown[];
      links?: { nextPage?: string };
    };

    const items = page?.data ?? [];
    results.push(...items);

    if (!page?.links?.nextPage || items.length === 0) break;
    pageNumber++;
  }

  return results;
}

/** Case-insensitive keyword match across multiple string fields of an object. */
function matchesKeyword(item: Record<string, unknown>, keyword: string, fields: string[]): boolean {
  const kw = keyword.toLowerCase();
  return fields.some((f) => {
    const val = item[f];
    return typeof val === "string" && val.toLowerCase().includes(kw);
  });
}

export function registerNhgisTools(server: McpServer): void {
  // List available NHGIS datasets
  server.tool(
    "nhgis_list_datasets",
    "Browse available NHGIS datasets. Returns paginated list of dataset identifiers, names, years, and geographic levels available.",
    {
      ...PaginationSchema.shape,
    },
    async ({ pageNumber, pageSize }) => {
      const params = buildPaginationParams(pageNumber, pageSize);
      const result = await ipumsRequest("/metadata/nhgis/datasets", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Get full details for a specific NHGIS dataset
  server.tool(
    "nhgis_get_dataset",
    "Get full details for a specific NHGIS dataset including available data tables, geographic levels, breakdown values, and years.",
    {
      dataset: PathParamSchema.describe(
        "Dataset identifier (e.g. '2000_SF1a', '2015_2019_ACS5a')"
      ),
    },
    async ({ dataset }) => {
      const result = await ipumsRequest(`/metadata/nhgis/datasets/${dataset}`, {
        params: { version: NHGIS_VERSION },
      });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // List all NHGIS data tables
  server.tool(
    "nhgis_list_data_tables",
    "List all available NHGIS data tables across all datasets. Returns paginated list of table identifiers, descriptions, and universe.",
    {
      ...PaginationSchema.shape,
    },
    async ({ pageNumber, pageSize }) => {
      const params = buildPaginationParams(pageNumber, pageSize);
      const result = await ipumsRequest("/metadata/nhgis/data_tables", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Get a specific NHGIS data table
  server.tool(
    "nhgis_get_data_table",
    "Get detailed information about a specific NHGIS data table within a dataset, including all variable descriptions.",
    {
      dataset: PathParamSchema.describe("Dataset identifier (e.g. '2000_SF1a')"),
      dataTable: PathParamSchema.describe(
        "Data table identifier (e.g. 'NP001A')"
      ),
    },
    async ({ dataset, dataTable }) => {
      const result = await ipumsRequest(
        `/metadata/nhgis/datasets/${dataset}/data_tables/${dataTable}`,
        { params: { version: NHGIS_VERSION } }
      );
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // List time series tables
  server.tool(
    "nhgis_list_time_series_tables",
    "List all available NHGIS time series tables. These span multiple census years with consistent geographic definitions.",
    {
      ...PaginationSchema.shape,
    },
    async ({ pageNumber, pageSize }) => {
      const params = buildPaginationParams(pageNumber, pageSize);
      const result = await ipumsRequest("/metadata/nhgis/time_series_tables", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Get a specific time series table
  server.tool(
    "nhgis_get_time_series_table",
    "Get full details for a specific NHGIS time series table including available years, geographic levels, and variable descriptions.",
    {
      table: PathParamSchema.describe(
        "Time series table identifier (e.g. 'CL8', 'B18')"
      ),
    },
    async ({ table }) => {
      const result = await ipumsRequest(
        `/metadata/nhgis/time_series_tables/${table}`,
        { params: { version: NHGIS_VERSION } }
      );
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // List available shapefiles
  server.tool(
    "nhgis_list_shapefiles",
    "List all available NHGIS shapefiles (boundary files). Returns identifiers for census geographies that can be included in extracts.",
    {
      ...PaginationSchema.shape,
    },
    async ({ pageNumber, pageSize }) => {
      const params = buildPaginationParams(pageNumber, pageSize);
      const result = await ipumsRequest("/metadata/nhgis/shapefiles", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // List NHGIS extracts
  server.tool(
    "nhgis_list_extracts",
    "List recent NHGIS extract requests. Returns extract numbers, status, and submission timestamps.",
    {
      ...PaginationSchema.shape,
    },
    async ({ pageNumber, pageSize }) => {
      const params: Record<string, string | number> = {
        collection: "nhgis",
        version: NHGIS_VERSION,
      };
      if (pageNumber !== undefined) params.pageNumber = pageNumber;
      if (pageSize !== undefined) params.pageSize = pageSize;

      const result = await ipumsRequest("/extracts", { params });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Get a specific NHGIS extract
  server.tool(
    "nhgis_get_extract",
    "Get the status and details of a specific NHGIS extract by its number. Includes download links when the extract is complete.",
    {
      extractNumber: z
        .number()
        .int()
        .positive()
        .describe("Extract number to retrieve"),
    },
    async ({ extractNumber }) => {
      const result = await ipumsRequest(`/extracts/${extractNumber}`, {
        params: { collection: "nhgis", version: NHGIS_VERSION },
      });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Create a new NHGIS extract
  server.tool(
    "nhgis_create_extract",
    "Submit a new NHGIS extract request. Specify datasets (with data tables and geographic levels), time series tables, shapefiles, and output format. Returns the new extract number and initial status. Once submitted, use nhgis_extract_to_code to generate reproducible R or Python code for the extract.",
    {
      description: NhgisExtractSchema.shape.description,
      dataFormat: NhgisExtractSchema.shape.dataFormat,
      datasets: NhgisExtractSchema.shape.datasets,
      timeSeriesTables: NhgisExtractSchema.shape.timeSeriesTables,
      shapefiles: NhgisExtractSchema.shape.shapefiles,
      geographicExtents: NhgisExtractSchema.shape.geographicExtents,
    },
    async ({
      description,
      dataFormat,
      datasets,
      timeSeriesTables,
      shapefiles,
      geographicExtents,
    }) => {
      const extractBody: Record<string, unknown> = {};
      if (description !== undefined) extractBody.description = description;
      if (dataFormat !== undefined) extractBody.dataFormat = dataFormat;
      if (datasets !== undefined) extractBody.datasets = datasets;
      if (timeSeriesTables !== undefined)
        extractBody.timeSeriesTables = timeSeriesTables;
      if (shapefiles !== undefined) extractBody.shapefiles = shapefiles;
      if (geographicExtents !== undefined)
        extractBody.geographicExtents = geographicExtents;

      const result = await ipumsRequest("/extracts", {
        method: "POST",
        params: { collection: "nhgis", version: NHGIS_VERSION },
        body: extractBody,
      });
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // Search NHGIS datasets by keyword
  server.tool(
    "nhgis_search_datasets",
    "Search NHGIS datasets by keyword. Fetches all available datasets and returns those whose name, group (e.g. '2020 Census'), or description match the keyword. Use this to find which datasets cover a topic or census year before drilling into specific data tables.",
    {
      keyword: z.string().max(200).describe("Search term to match against dataset name, group, and description (case-insensitive)"),
    },
    async ({ keyword }) => {
      const all = await fetchAllPages("/metadata/nhgis/datasets") as Record<string, unknown>[];
      const matches = all.filter((d) =>
        matchesKeyword(d, keyword, ["name", "group", "description"])
      );
      return {
        content: [
          {
            type: "text",
            text:
              matches.length === 0
                ? `No datasets found matching "${keyword}".`
                : `Found ${matches.length} dataset(s) matching "${keyword}":\n\n${JSON.stringify(matches, null, 2)}`,
          },
        ],
      };
    }
  );

  // Search NHGIS data tables by keyword, optionally scoped to a dataset
  server.tool(
    "nhgis_search_data_tables",
    "Search NHGIS data tables by keyword. If a dataset is specified, searches all tables within that dataset (comprehensive). Without a dataset, scans up to 2,500 tables across all datasets — recommend using nhgis_search_datasets first to find a relevant dataset, then scoping the search here. Matches against table description and universe.",
    {
      keyword: z.string().max(200).describe("Search term to match against table description and universe (case-insensitive)"),
      dataset: PathParamSchema
        .optional()
        .describe("Optional dataset identifier to scope the search (e.g. '2019_ACS5a'). Strongly recommended for comprehensive results."),
    },
    async ({ keyword, dataset }) => {
      let all: Record<string, unknown>[];
      let note = "";

      if (dataset) {
        all = (await fetchAllPages(
          `/metadata/nhgis/datasets/${dataset}/data_tables`
        )) as Record<string, unknown>[];
      } else {
        // Scan first 5 pages (up to 2,500 tables) across the full corpus
        all = (await fetchAllPages("/metadata/nhgis/data_tables", {}, 5)) as Record<string, unknown>[];
        note =
          `\n\n⚠️ Searched the first ${all.length} tables across all datasets. ` +
          `For comprehensive results, use nhgis_search_datasets("${keyword}") to find a relevant dataset, ` +
          `then call nhgis_search_data_tables again with the dataset parameter.`;
      }

      const matches = all.filter((t) =>
        matchesKeyword(t, keyword, ["description", "universe", "nhgisCode"])
      );

      return {
        content: [
          {
            type: "text",
            text:
              matches.length === 0
                ? `No data tables found matching "${keyword}"${dataset ? ` in dataset "${dataset}"` : ""}.${note}`
                : `Found ${matches.length} data table(s) matching "${keyword}"${dataset ? ` in dataset "${dataset}"` : ""}:\n\n${JSON.stringify(matches, null, 2)}${note}`,
          },
        ],
      };
    }
  );

  // Search NHGIS time series tables by keyword
  server.tool(
    "nhgis_search_time_series_tables",
    "Search NHGIS time series tables by keyword. Fetches all ~400 time series tables (which span multiple census years with consistent geographic definitions) and returns those matching the keyword in their name or description.",
    {
      keyword: z.string().max(200).describe("Search term to match against time series table name and description (case-insensitive)"),
    },
    async ({ keyword }) => {
      const all = (await fetchAllPages("/metadata/nhgis/time_series_tables")) as Record<string, unknown>[];
      const matches = all.filter((t) =>
        matchesKeyword(t, keyword, ["name", "description", "sequence"])
      );
      return {
        content: [
          {
            type: "text",
            text:
              matches.length === 0
                ? `No time series tables found matching "${keyword}".`
                : `Found ${matches.length} time series table(s) matching "${keyword}":\n\n${JSON.stringify(matches, null, 2)}`,
          },
        ],
      };
    }
  );
}
