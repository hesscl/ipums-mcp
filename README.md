# ipums-mcp

A Model Context Protocol (MCP) server that exposes the [IPUMS API](https://developer.ipums.org) as tools for LLM clients. Supports IPUMS microdata collections (USA, CPS, IPUMSI, etc.) and NHGIS aggregate/GIS data.

## Prerequisites

- Node.js 18+
- An [IPUMS API key](https://account.ipums.org/api_keys)

## Setup

```bash
git clone <this-repo>
cd ipums-mcp
npm install
npm run build
```

**Never commit your API key.** Store it only in environment variables or your MCP client config (see below). The file `ipums_api_key.txt` is in `.gitignore` for a reason.

## Claude Desktop Configuration

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ipums": {
      "command": "node",
      "args": ["/absolute/path/to/ipums-mcp/dist/index.js"],
      "env": {
        "IPUMS_API_KEY": "your-key-here"
      }
    }
  }
}
```

Restart Claude Desktop after editing.

## Tools

### Microdata (USA, CPS, IPUMSI, ACS, NHIS, MEPS, …)

| Tool | Description |
|------|-------------|
| `microdata_list_extracts` | List recent extracts for a collection |
| `microdata_get_extract` | Get status and download links for an extract |
| `microdata_create_extract` | Submit a new extract request |
| `microdata_download_extract` | Download completed extract files to disk, with SHA-256 verification |

**Create extract — samples and variables use array syntax:**

```json
{
  "collection": "usa",
  "dataFormat": "csv",
  "dataStructure": { "rectangular": { "on": "P" } },
  "description": "2022 ACS veterans",
  "samples": [{ "id": "us2022a" }],
  "variables": [
    { "name": "VETSTAT" },
    { "name": "AGE" },
    { "name": "SEX" },
    { "name": "STATEFIP" }
  ]
}
```

The server converts these to the keyed-object format the IPUMS API v2 requires.

**Download a completed extract:**

```json
{
  "collection": "usa",
  "extractNumber": 42,
  "outputDir": "/data/ipums",
  "fileTypes": ["data", "ddiCodebook"]
}
```

Available `fileTypes`: `data`, `ddiCodebook`, `basicCodebook`, `rCommandFile`, `spssCommandFile`, `stataCommandFile`, `sasCommandFile`.

Returns `{ downloaded: [...], errors: [...] }`. Each downloaded entry includes `localPath`, `bytes`, and `sha256Verified`.

### NHGIS (Aggregate & GIS Data)

| Tool | Description |
|------|-------------|
| `nhgis_list_datasets` | Browse available datasets |
| `nhgis_get_dataset` | Get tables and geographic levels for a dataset |
| `nhgis_list_data_tables` | List all data tables |
| `nhgis_get_data_table` | Get variables in a data table |
| `nhgis_list_time_series_tables` | List time series tables |
| `nhgis_get_time_series_table` | Get detail for a time series table |
| `nhgis_list_shapefiles` | List available shapefiles |
| `nhgis_list_extracts` | List recent NHGIS extracts |
| `nhgis_get_extract` | Get NHGIS extract status and download links |
| `nhgis_create_extract` | Submit a new NHGIS extract |

## Workflow: Jupyter MCP + ipumsr

This server pairs naturally with a [Jupyter MCP server](https://github.com/dsp-shp/jupyter-mcp-server) to form a complete data pipeline — from browsing IPUMS metadata to live analysis in a notebook — without leaving your LLM client.

### Full pipeline example

**Step 1 — Browse and submit (via MCP tools in Claude)**

```
1. nhgis_list_datasets          → find the dataset you want
2. nhgis_get_dataset            → confirm tables and geo levels
3. nhgis_create_extract         → submit the extract
4. nhgis_get_extract            → poll until status = "completed"
```

Or for microdata:

```
1. microdata_create_extract     → submit
2. microdata_get_extract        → poll for "completed"
3. microdata_download_extract   → download data + DDI codebook
```

**Step 2 — Analyze in Jupyter with ipumsr (R kernel)**

Once `microdata_download_extract` has saved files locally, use the Jupyter MCP server to run R in a notebook:

```r
library(ipumsr)

# Point at the DDI codebook downloaded by microdata_download_extract
ddi  <- read_ipums_ddi("/data/ipums/usa_00042.xml")
data <- read_ipums_micro(ddi)

# Variable labels and value labels are attached automatically
head(data)
attr(data$VETSTAT, "labels")
```

For Python notebooks:

```python
import pandas as pd

# CSV data file downloaded by microdata_download_extract
df = pd.read_csv("/data/ipums/usa_00042.csv.gz")
df.head()
```

For NHGIS data (already CSV, no DDI needed):

```r
library(ipumsr)

# read_nhgis reads the CSV and attaches codebook metadata
tbl <- read_nhgis("/data/ipums/nhgis0007_csv.zip", data_layer = 1)
```

### Suggested Claude Desktop + Jupyter MCP config

```json
{
  "mcpServers": {
    "ipums": {
      "command": "node",
      "args": ["/path/to/ipums-mcp/dist/index.js"],
      "env": { "IPUMS_API_KEY": "your-key-here" }
    },
    "jupyter": {
      "command": "uvx",
      "args": ["jupyter-mcp-server"],
      "env": { "JUPYTER_TOKEN": "your-jupyter-token" }
    }
  }
}
```

With both servers running you can tell Claude: *"Submit a 2022 ACS extract for VETSTAT, AGE, SEX, STATEFIP, download it when ready, then open a Jupyter notebook and plot veteran counts by state with ggplot2."*

## Security Notes

- **API key**: Pass via `IPUMS_API_KEY` env var only. Never hard-code it or commit it to source control.
- **Download URL validation**: `microdata_download_extract` validates that each download URL uses HTTPS and resolves to an `*.ipums.org` host before sending your API key. URLs that fail this check are skipped and reported in `errors`.
- **Output directory**: `microdata_download_extract` accepts any absolute path. Restrict access to the MCP server process if running in a shared environment.
- **SHA-256 verification**: Every downloaded file is verified against the checksum provided by the API. A mismatch is reported in `errors` but the file is kept so you can inspect it.

## Development

```bash
npm run dev       # run via tsx (no build step)
npm run build     # compile TypeScript → dist/
```

Source layout:

```
src/
  index.ts          entry point
  client.ts         shared HTTP client (ipumsRequest, getApiKey)
  types.ts          Zod schemas
  tools/
    microdata.ts    microdata tools (list, get, create, download)
    nhgis.ts        NHGIS tools
```
