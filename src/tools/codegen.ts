import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ipumsRequest } from "../client.js";
import { MicrodataCollectionSchema } from "../types.js";

type MicrodataCollection = z.infer<typeof MicrodataCollectionSchema>;

// ── Small helpers ─────────────────────────────────────────────────────────────

function pyStr(s: string): string {
  return JSON.stringify(s);
}

function pyList(items: string[]): string {
  if (items.length === 0) return "[]";
  return `[${items.map(pyStr).join(", ")}]`;
}

function camelToSnake(str: string): string {
  return str.replace(/([A-Z])/g, (c) => `_${c.toLowerCase()}`);
}

function rStr(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function rVec(items: string[]): string {
  if (items.length === 0) return "c()";
  return `c(${items.map(rStr).join(", ")})`;
}

// ── Collection → language mappings ────────────────────────────────────────────

function collectionToRFn(collection: MicrodataCollection): string {
  switch (collection) {
    case "usa":
    case "acs":
    case "prcs":
      return "define_extract_usa";
    case "cps":
      return "define_extract_cps";
    case "atus":
      return "define_extract_atus";
    case "nhis":
      return "define_extract_nhis";
    case "meps":
      return "define_extract_meps";
    case "ipumsi":
      return "define_extract_ipumsi";
    default:
      return "define_extract_micro";
  }
}

function collectionToPyClass(collection: MicrodataCollection): {
  cls: string;
  note?: string;
} {
  switch (collection) {
    case "usa":
    case "acs":
    case "prcs":
      return { cls: "UsaExtract" };
    case "cps":
      return { cls: "CpsExtract" };
    default:
      return {
        cls: "MicrodataExtract",
        note: `# Note: verify the correct ipumspy class for collection '${collection}'`,
      };
  }
}

// ── Microdata R code generator ────────────────────────────────────────────────

function buildMicrodataR(
  collection: MicrodataCollection,
  extract: Record<string, unknown>
): string {
  const rFn = collectionToRFn(collection);
  const rawSamples = (extract.samples ?? {}) as Record<string, unknown>;
  const rawVars = (extract.variables ?? {}) as Record<
    string,
    Record<string, unknown>
  >;
  const dataFormat = extract.dataFormat as string | undefined;
  const dataStructure = extract.dataStructure as
    | Record<string, unknown>
    | undefined;
  const caseSelectWho = extract.caseSelectWho as string | undefined;
  const description = extract.description as string | undefined;

  const lines: string[] = ["library(ipumsr)", ""];

  // Decide whether any variable needs var_spec()
  const needsVarSpec = Object.values(rawVars).some((opts) => {
    const cs = opts.caseSelections as Record<string, string[]> | undefined;
    return (
      (cs && Object.keys(cs).length > 0) ||
      opts.dataQualityFlags === true ||
      ((opts.attachedCharacteristics as string[] | undefined)?.length ?? 0) > 0
    );
  });

  let variablesDef: string;
  if (!needsVarSpec) {
    variablesDef = `  variables = ${rVec(Object.keys(rawVars))}`;
  } else {
    const varParts = Object.entries(rawVars).map(([name, opts]) => {
      const cs = opts.caseSelections as Record<string, string[]> | undefined;
      const dqf = opts.dataQualityFlags as boolean | undefined;
      const ac = opts.attachedCharacteristics as string[] | undefined;
      if (
        (cs && Object.keys(cs).length > 0) ||
        dqf === true ||
        (ac?.length ?? 0) > 0
      ) {
        const specParts: string[] = [rStr(name)];
        if (cs && Object.keys(cs).length > 0) {
          const csStr = Object.entries(cs)
            .map(([k, v]) => `${rStr(k)} = ${rVec(v)}`)
            .join(", ");
          specParts.push(`case_selections = list(${csStr})`);
        }
        if (dqf === true) specParts.push("data_quality_flags = TRUE");
        if (ac && ac.length > 0)
          specParts.push(`attached_characteristics = ${rVec(ac)}`);
        return `    var_spec(${specParts.join(", ")})`;
      }
      return `    ${rStr(name)}`;
    });
    variablesDef = `  variables = list(\n${varParts.join(",\n")}\n  )`;
  }

  const defLines: string[] = [
    `  samples = ${rVec(Object.keys(rawSamples))}`,
    variablesDef,
  ];
  if (dataFormat) defLines.push(`  data_format = "${dataFormat}"`);
  if (caseSelectWho) defLines.push(`  case_select_who = "${caseSelectWho}"`);
  if (dataStructure?.rectangular) {
    defLines.push(`  data_structure = "rectangular"`);
  } else if (dataStructure?.hierarchical) {
    defLines.push(`  data_structure = "hierarchical"`);
  }
  if (description)
    defLines.push(`  description = ${JSON.stringify(description)}`);

  lines.push(`extract <- ${rFn}(`);
  lines.push(defLines.join(",\n"));
  lines.push(")");
  lines.push("");
  lines.push("extract <- submit_extract(extract)");
  lines.push("extract <- wait_for_extract(extract)");
  lines.push("path    <- download_extract(extract)");
  lines.push("");
  lines.push("ddi  <- read_ipums_ddi(path$ddi)");
  lines.push("data <- read_ipums_micro(ddi)");

  return lines.join("\n");
}

// ── Microdata Python code generator ──────────────────────────────────────────

function buildMicrodataPython(
  collection: MicrodataCollection,
  extract: Record<string, unknown>
): string {
  const { cls, note } = collectionToPyClass(collection);
  const samples = Object.keys((extract.samples ?? {}) as Record<string, unknown>);
  const varNames = Object.keys(
    (extract.variables ?? {}) as Record<string, unknown>
  );
  const dataFormat = extract.dataFormat as string | undefined;
  const caseSelectWho = extract.caseSelectWho as string | undefined;
  const description = extract.description as string | undefined;

  const importLine =
    cls === "UsaExtract"
      ? "from ipumspy import IpumsApiClient, UsaExtract"
      : cls === "CpsExtract"
      ? "from ipumspy import IpumsApiClient, CpsExtract"
      : "from ipumspy import IpumsApiClient, MicrodataExtract";

  const lines: string[] = [importLine, "import os", ""];
  if (note) lines.push(note, "");
  lines.push(`client = IpumsApiClient(api_key=os.environ["IPUMS_API_KEY"])`, "");

  const ctorArgs: string[] = [
    `    samples=${pyList(samples)}`,
    `    variables=${pyList(varNames)}`,
  ];
  if (dataFormat) ctorArgs.push(`    data_format=${pyStr(dataFormat)}`);
  if (caseSelectWho) ctorArgs.push(`    case_select_who=${pyStr(caseSelectWho)}`);
  if (description) ctorArgs.push(`    description=${pyStr(description)}`);

  lines.push(`extract = ${cls}(`);
  lines.push(ctorArgs.join(",\n"));
  lines.push(")");
  lines.push("");
  lines.push("extract = client.submit_extract(extract)");
  lines.push("client.wait_for_extract(extract)");
  lines.push(`client.download_extract(extract, download_dir="./downloads")`);

  return lines.join("\n");
}

// ── NHGIS R code generator ────────────────────────────────────────────────────

function buildNhgisR(extract: Record<string, unknown>): string {
  const datasets = (extract.datasets ?? {}) as Record<
    string,
    Record<string, unknown>
  >;
  const tsts = (extract.timeSeriesTables ?? {}) as Record<
    string,
    Record<string, unknown>
  >;
  const shapefiles = (extract.shapefiles ?? []) as string[];
  const geographicExtents = (extract.geographicExtents ?? []) as string[];
  const dataFormat = extract.dataFormat as string | undefined;
  const description = extract.description as string | undefined;

  const lines: string[] = ["library(ipumsr)", ""];
  const defArgs: string[] = [];

  if (Object.keys(datasets).length > 0) {
    const dsSpecLines = Object.entries(datasets).map(([name, spec]) => {
      const dataTables = (spec.dataTables ?? []) as string[];
      const geogLevels = (spec.geogLevels ?? []) as string[];
      const breakdownValues = (spec.breakdownValues ?? []) as string[];
      const years = (spec.years ?? []) as string[];
      const specArgs: string[] = [
        `    ${JSON.stringify(name)}`,
        `    data_tables = ${rVec(dataTables)}`,
        `    geog_levels = ${rVec(geogLevels)}`,
      ];
      if (breakdownValues.length > 0)
        specArgs.push(`    breakdown_values = ${rVec(breakdownValues)}`);
      if (years.length > 0) specArgs.push(`    years = ${rVec(years)}`);
      return `  ds_spec(\n${specArgs.join(",\n")}\n  )`;
    });
    defArgs.push(`  datasets = list(\n${dsSpecLines.join(",\n")}\n  )`);
  }

  if (Object.keys(tsts).length > 0) {
    const tstSpecLines = Object.entries(tsts).map(([name, spec]) => {
      const geogLevels = (spec.geogLevels ?? []) as string[];
      const years = (spec.years ?? []) as string[];
      const specArgs: string[] = [
        `    ${JSON.stringify(name)}`,
        `    geog_levels = ${rVec(geogLevels)}`,
      ];
      if (years.length > 0) specArgs.push(`    years = ${rVec(years)}`);
      return `  tst_spec(\n${specArgs.join(",\n")}\n  )`;
    });
    defArgs.push(
      `  time_series_tables = list(\n${tstSpecLines.join(",\n")}\n  )`
    );
  }

  if (shapefiles.length > 0)
    defArgs.push(`  shapefiles = ${rVec(shapefiles)}`);
  if (geographicExtents.length > 0)
    defArgs.push(`  geographic_extents = ${rVec(geographicExtents)}`);
  if (dataFormat) defArgs.push(`  data_format = ${JSON.stringify(dataFormat)}`);
  if (description)
    defArgs.push(`  description = ${JSON.stringify(description)}`);

  lines.push("extract <- define_extract_nhgis(");
  lines.push(defArgs.join(",\n"));
  lines.push(")");
  lines.push("");
  lines.push("extract <- submit_extract(extract)");
  lines.push("extract <- wait_for_extract(extract)");
  lines.push("path    <- download_extract(extract)");
  lines.push("");
  lines.push("data <- read_nhgis(path)");

  return lines.join("\n");
}

// ── NHGIS Python code generator ───────────────────────────────────────────────

function buildNhgisPython(extract: Record<string, unknown>): string {
  const datasets = (extract.datasets ?? {}) as Record<
    string,
    Record<string, unknown>
  >;
  const tsts = (extract.timeSeriesTables ?? {}) as Record<
    string,
    Record<string, unknown>
  >;
  const shapefiles = (extract.shapefiles ?? []) as string[];
  const geographicExtents = (extract.geographicExtents ?? []) as string[];
  const dataFormat = extract.dataFormat as string | undefined;
  const description = extract.description as string | undefined;

  const lines: string[] = [
    "from ipumspy import IpumsApiClient, NhgisExtract",
    "import os",
  ];
  if (shapefiles.length > 0)
    lines.push("import geopandas as gpd  # for shapefiles");
  lines.push("import pandas as pd", "");
  lines.push(`client = IpumsApiClient(api_key=os.environ["IPUMS_API_KEY"])`, "");

  const ctorArgs: string[] = [];

  if (Object.keys(datasets).length > 0) {
    const dsLines: string[] = [];
    for (const [name, spec] of Object.entries(datasets)) {
      const snakeSpec: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(spec)) snakeSpec[camelToSnake(k)] = v;
      const innerEntries = Object.entries(snakeSpec).map(
        ([k, v]) => `            ${pyStr(k)}: ${JSON.stringify(v)}`
      );
      dsLines.push(
        `        ${pyStr(name)}: {\n${innerEntries.join(",\n")},\n        }`
      );
    }
    ctorArgs.push(`    datasets={\n${dsLines.join(",\n")},\n    }`);
  }

  if (Object.keys(tsts).length > 0) {
    const tstLines: string[] = [];
    for (const [name, spec] of Object.entries(tsts)) {
      const snakeSpec: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(spec)) snakeSpec[camelToSnake(k)] = v;
      const innerEntries = Object.entries(snakeSpec).map(
        ([k, v]) => `            ${pyStr(k)}: ${JSON.stringify(v)}`
      );
      tstLines.push(
        `        ${pyStr(name)}: {\n${innerEntries.join(",\n")},\n        }`
      );
    }
    ctorArgs.push(
      `    time_series_tables={\n${tstLines.join(",\n")},\n    }`
    );
  }

  if (shapefiles.length > 0)
    ctorArgs.push(`    shapefiles=${pyList(shapefiles)}`);
  if (geographicExtents.length > 0)
    ctorArgs.push(`    geographic_extents=${pyList(geographicExtents)}`);
  if (dataFormat) ctorArgs.push(`    data_format=${pyStr(dataFormat)}`);
  if (description) ctorArgs.push(`    description=${pyStr(description)}`);

  lines.push("extract = NhgisExtract(");
  lines.push(ctorArgs.join(",\n"));
  lines.push(")");
  lines.push("");
  lines.push("extract = client.submit_extract(extract)");
  lines.push("client.wait_for_extract(extract)");
  lines.push(`client.download_extract(extract, download_dir="./downloads")`);
  lines.push("");
  lines.push("# Read the data");
  lines.push(`data = pd.read_csv("./downloads/<data_file>.csv")`);
  if (shapefiles.length > 0) {
    lines.push("# Shapefiles:");
    lines.push(`# gdf = gpd.read_file("./downloads/<shapefile>.shp")`);
  }

  return lines.join("\n");
}

// ── Citation database ─────────────────────────────────────────────────────────

interface CitationInfo {
  title: string;
  authors: string;
  doi: string;
  citationUrl: string;
}

const CITATIONS: Record<string, CitationInfo> = {
  usa: {
    title: "IPUMS USA",
    authors:
      "Steven Ruggles, Sarah Flood, Matthew Sobek, Daniel Backman, Annie Chen, Grace Cooper, Stephanie Richards, Renae Rogers, Megan Schouweiler, and Jonathan Schroeder",
    doi: "https://doi.org/10.18128/D010",
    citationUrl: "https://usa.ipums.org/usa/cite.shtml",
  },
  acs: {
    title: "IPUMS USA",
    authors:
      "Steven Ruggles, Sarah Flood, Matthew Sobek, Daniel Backman, Annie Chen, Grace Cooper, Stephanie Richards, Renae Rogers, Megan Schouweiler, and Jonathan Schroeder",
    doi: "https://doi.org/10.18128/D010",
    citationUrl: "https://usa.ipums.org/usa/cite.shtml",
  },
  prcs: {
    title: "IPUMS USA",
    authors:
      "Steven Ruggles, Sarah Flood, Matthew Sobek, Daniel Backman, Annie Chen, Grace Cooper, Stephanie Richards, Renae Rogers, Megan Schouweiler, and Jonathan Schroeder",
    doi: "https://doi.org/10.18128/D010",
    citationUrl: "https://usa.ipums.org/usa/cite.shtml",
  },
  cps: {
    title: "IPUMS CPS",
    authors:
      "Sarah Flood, Miriam King, Renae Rogers, Steven Ruggles, J. Robert Warren, Daniel Backman, Annie Chen, Grace Cooper, Stephanie Richards, Megan Schouweiler, and Michael Westberry",
    doi: "https://doi.org/10.18128/D030",
    citationUrl: "https://cps.ipums.org/cps/cite.shtml",
  },
  atus: {
    title: "IPUMS ATUS",
    authors:
      "Sandra L. Hofferth, Sarah M. Flood, Matthew Sobek, and Daniel Backman",
    doi: "https://doi.org/10.18128/D060",
    citationUrl: "https://www.atusdata.org/atus/cite.shtml",
  },
  ahtus: {
    title: "IPUMS AHTUS",
    authors: "Sandra Hofferth, Sarah Flood, and Matthew Sobek",
    doi: "https://doi.org/10.18128/D061",
    citationUrl: "https://www.atusdata.org/ahtus/cite.shtml",
  },
  mtus: {
    title: "IPUMS MTUS",
    authors: "Jonathan Gershuny and Kimberly Fisher",
    doi: "https://doi.org/10.18128/D062",
    citationUrl: "https://www.atusdata.org/mtus/cite.shtml",
  },
  nhis: {
    title: "IPUMS NHIS",
    authors:
      "Lynn A. Blewett, Julia A. Rivera Drew, Miriam L. King, and Kari C.W. Williams",
    doi: "https://doi.org/10.18128/D070",
    citationUrl: "https://nhis.ipums.org/nhis/cite.shtml",
  },
  meps: {
    title: "IPUMS MEPS",
    authors:
      "Lynn A. Blewett, Julia A. Rivera Drew, Miriam L. King, Kari C.W. Williams, and Daniel Backman",
    doi: "https://doi.org/10.18128/D071",
    citationUrl: "https://meps.ipums.org/meps/cite.shtml",
  },
  ipumsi: {
    title: "IPUMS International",
    authors: "Minnesota Population Center",
    doi: "https://doi.org/10.18128/D020",
    citationUrl: "https://international.ipums.org/international/cite.shtml",
  },
  higher_ed: {
    title: "IPUMS Higher Ed",
    authors: "Minnesota Population Center",
    doi: "https://doi.org/10.18128/D100",
    citationUrl: "https://highered.ipums.org/highered/cite.shtml",
  },
  nhgis: {
    title: "IPUMS NHGIS",
    authors:
      "Steven Manson, Jonathan Schroeder, David Van Riper, Katherine Knowles, Tracy Kugler, Finn Roberts, and Steven Ruggles",
    doi: "https://doi.org/10.18128/D050",
    citationUrl: "https://www.nhgis.org/citation-and-use-nhgis-data",
  },
};

// ── Register tools ────────────────────────────────────────────────────────────

export function registerCodegenTools(server: McpServer): void {
  server.tool(
    "microdata_extract_to_code",
    "Generate ready-to-run R (ipumsr) and/or Python (ipumspy) code to reproduce a microdata extract. Fetches the extract definition by number and emits code that re-submits the same request. Use this after microdata_create_extract to capture a reproducible workflow.",
    {
      collection: MicrodataCollectionSchema.describe(
        "IPUMS microdata collection (e.g. 'usa', 'cps')"
      ),
      extractNumber: z
        .number()
        .int()
        .positive()
        .describe("Extract number to generate code for"),
      language: z
        .enum(["r", "python", "both"])
        .optional()
        .default("both")
        .describe(
          "Output language(s): 'r', 'python', or 'both' (default: 'both')"
        ),
    },
    async ({ collection, extractNumber, language = "both" }) => {
      const extract = (await ipumsRequest(`/extracts/${extractNumber}`, {
        params: { collection, version: "v2" },
      })) as Record<string, unknown>;

      const sections: string[] = [];
      if (language === "r" || language === "both") {
        const code = buildMicrodataR(collection, extract);
        sections.push(
          language === "both"
            ? `## R (ipumsr)\n\n\`\`\`r\n${code}\n\`\`\``
            : code
        );
      }
      if (language === "python" || language === "both") {
        const code = buildMicrodataPython(collection, extract);
        sections.push(
          language === "both"
            ? `## Python (ipumspy)\n\n\`\`\`python\n${code}\n\`\`\``
            : code
        );
      }
      return { content: [{ type: "text", text: sections.join("\n\n") }] };
    }
  );

  server.tool(
    "nhgis_extract_to_code",
    "Generate ready-to-run R (ipumsr) and/or Python (ipumspy) code to reproduce an NHGIS extract. Fetches the extract definition by number and emits code that re-submits the same request. Use this after nhgis_create_extract to capture a reproducible workflow.",
    {
      extractNumber: z
        .number()
        .int()
        .positive()
        .describe("NHGIS extract number to generate code for"),
      language: z
        .enum(["r", "python", "both"])
        .optional()
        .default("both")
        .describe(
          "Output language(s): 'r', 'python', or 'both' (default: 'both')"
        ),
    },
    async ({ extractNumber, language = "both" }) => {
      const extract = (await ipumsRequest(`/extracts/${extractNumber}`, {
        params: { collection: "nhgis", version: "v1" },
      })) as Record<string, unknown>;

      const sections: string[] = [];
      if (language === "r" || language === "both") {
        const code = buildNhgisR(extract);
        sections.push(
          language === "both"
            ? `## R (ipumsr)\n\n\`\`\`r\n${code}\n\`\`\``
            : code
        );
      }
      if (language === "python" || language === "both") {
        const code = buildNhgisPython(extract);
        sections.push(
          language === "both"
            ? `## Python (ipumspy)\n\n\`\`\`python\n${code}\n\`\`\``
            : code
        );
      }
      return { content: [{ type: "text", text: sections.join("\n\n") }] };
    }
  );

  const CitationCollectionSchema = z.enum([
    "usa",
    "acs",
    "prcs",
    "cps",
    "atus",
    "ahtus",
    "mtus",
    "nhis",
    "meps",
    "ipumsi",
    "higher_ed",
    "nhgis",
  ]);

  server.tool(
    "generate_ipums_citation",
    "Return a formatted citation template for an IPUMS dataset. Includes the standard author list, DOI, and a direct link to the official citation page where the current version number is always listed. The version number also appears on your extract page and in the README included with each download.",
    {
      collection: CitationCollectionSchema.describe(
        "IPUMS collection to cite (e.g. 'usa', 'cps', 'nhgis')"
      ),
    },
    async ({ collection }) => {
      const info = CITATIONS[collection];
      if (!info) {
        return {
          content: [
            {
              type: "text",
              text: `No citation template found for '${collection}'.`,
            },
          ],
        };
      }
      const text = [
        `**${info.title} — Citation Template**`,
        "",
        `${info.authors}. *${info.title}* [dataset]. Minneapolis, MN: IPUMS, [YEAR]. ${info.doi}.VX.`,
        "",
        "Replace **[YEAR]** with the current year and **VX** with the current version number.",
        "The version number appears on your extract page and in the README included with the download.",
        "",
        `**Official citation page:** ${info.citationUrl}`,
        "",
        "> Author lists and version numbers change with new data releases.",
        "> Always verify at the official page before publishing.",
      ].join("\n");
      return { content: [{ type: "text", text }] };
    }
  );
}
