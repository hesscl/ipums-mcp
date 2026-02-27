import { z } from "zod";

// Path parameter safety: alphanumeric, underscores, hyphens, dots only
export const PathParamSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\.]+$/, "Invalid path parameter: must be alphanumeric with _ - . only");

// Known microdata collections
export const MicrodataCollectionSchema = z.enum([
  "usa",
  "cps",
  "atus",
  "ipumsi",
  "acs",
  "prcs",
  "ahtus",
  "mtus",
  "nhis",
  "meps",
  "higher_ed",
]);

export type MicrodataCollection = z.infer<typeof MicrodataCollectionSchema>;

// Pagination params
export const PaginationSchema = z.object({
  pageNumber: z.number().int().positive().optional().describe("Page number (1-based)"),
  pageSize: z.number().int().positive().max(500).optional().describe("Results per page"),
});

// Microdata extract definition
export const MicrodataExtractSchema = z.object({
  collection: MicrodataCollectionSchema.describe("IPUMS microdata collection identifier"),
  description: z.string().optional().describe("Human-readable description of the extract"),
  dataFormat: z
    .enum(["fixed_width", "csv", "stata", "spss", "sas9"])
    .optional()
    .describe("Output file format"),
  dataStructure: z
    .object({
      rectangular: z
        .object({ on: z.string().describe("Record type to rectangularize on") })
        .optional(),
      hierarchical: z.record(z.unknown()).optional(),
    })
    .optional()
    .describe("Data structure specification"),
  samples: z
    .array(z.object({ id: z.string() }))
    .optional()
    .describe("Sample IDs to include"),
  variables: z
    .array(
      z.object({
        name: z.string(),
        preselected: z.boolean().optional(),
        caseSelections: z.record(z.array(z.string())).optional(),
        attachedCharacteristics: z.array(z.string()).optional(),
        dataQualityFlags: z.boolean().optional(),
      })
    )
    .optional()
    .describe("Variables to include"),
  caseSelectWho: z
    .enum(["individuals", "households"])
    .optional()
    .describe("Who to select cases for"),
  version: z.string().optional().default("v2").describe("API version (default: v2)"),
});

export type MicrodataExtract = z.infer<typeof MicrodataExtractSchema>;

// NHGIS dataset request specification
export const NhgisDatasetSchema = z.object({
  name: z.string().describe("Dataset identifier"),
  dataTables: z.array(z.string()).describe("Data table identifiers to include"),
  geogLevels: z.array(z.string()).describe("Geographic level identifiers"),
  breakdownValues: z
    .array(z.string())
    .optional()
    .describe("Breakdown value identifiers (for multi-dimensional datasets)"),
  years: z
    .array(z.string())
    .optional()
    .describe("Year filters for time-series datasets"),
});

export type NhgisDataset = z.infer<typeof NhgisDatasetSchema>;

// NHGIS time series table request specification
export const NhgisTimeSeriesTableSchema = z.object({
  name: z.string().describe("Time series table identifier"),
  geogLevels: z.array(z.string()).describe("Geographic level identifiers"),
  years: z.array(z.string()).optional().describe("Year filters"),
});

export type NhgisTimeSeriesTable = z.infer<typeof NhgisTimeSeriesTableSchema>;

// Full NHGIS extract definition
export const NhgisExtractSchema = z.object({
  description: z.string().optional().describe("Human-readable description of the extract"),
  dataFormat: z
    .enum(["csv_no_header", "csv_header"])
    .optional()
    .describe("Output data format"),
  datasets: z
    .record(NhgisDatasetSchema.omit({ name: true }))
    .optional()
    .describe("Map of dataset name to dataset specification"),
  timeSeriesTables: z
    .record(NhgisTimeSeriesTableSchema.omit({ name: true }))
    .optional()
    .describe("Map of time series table name to specification"),
  shapefiles: z
    .array(z.string())
    .optional()
    .describe("Shapefile identifiers to include"),
  geographicExtents: z
    .array(z.string())
    .optional()
    .describe("Geographic extents to filter by"),
});

export type NhgisExtract = z.infer<typeof NhgisExtractSchema>;
