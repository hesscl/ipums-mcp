# 📊 ipums-mcp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that exposes the [IPUMS API](https://developer.ipums.org) as tools for LLM clients. Supports IPUMS microdata collections (USA, CPS, IPUMSI, etc.) and NHGIS aggregate/GIS data.

## 📋 Prerequisites

- Node.js 18+
- An [IPUMS API key](https://account.ipums.org/api_keys)
- Any MCP-compatible client (Claude Desktop, Claude Code, Cursor, Windsurf, etc.)

## 🛠️ Installation

**1. Clone and build**

```bash
git clone https://github.com/hesscl/ipums-mcp
cd ipums-mcp
npm install
npm run build
```

**2. Configure your MCP client**

All MCP clients use the same server entry point — only the config file location differs. Set `IPUMS_API_KEY` as an environment variable; never hard-code it.

The server command is always:

```
node /absolute/path/to/ipums-mcp/dist/index.js
```

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "ipums": {
      "command": "node",
      "args": ["/absolute/path/to/ipums-mcp/dist/index.js"],
      "env": { "IPUMS_API_KEY": "your-key-here" }
    }
  }
}
```

Restart Claude Desktop after saving.

### Claude Code (CLI)

```bash
claude mcp add ipums node /absolute/path/to/ipums-mcp/dist/index.js \
  -e IPUMS_API_KEY=your-key-here
```

Or add manually to `.claude/settings.json`:

```json
{
  "mcpServers": {
    "ipums": {
      "command": "node",
      "args": ["/absolute/path/to/ipums-mcp/dist/index.js"],
      "env": { "IPUMS_API_KEY": "your-key-here" }
    }
  }
}
```

### Cursor / Windsurf

Add to your editor's MCP settings (typically under Settings → MCP or a `mcp.json` file):

```json
{
  "mcpServers": {
    "ipums": {
      "command": "node",
      "args": ["/absolute/path/to/ipums-mcp/dist/index.js"],
      "env": { "IPUMS_API_KEY": "your-key-here" }
    }
  }
}
```

### Other MCP clients

Any client that supports the [MCP stdio transport](https://modelcontextprotocol.io/docs/concepts/transports) works. Provide:
- **Command:** `node`
- **Args:** `["/absolute/path/to/ipums-mcp/dist/index.js"]`
- **Env:** `IPUMS_API_KEY=your-key-here`

## 🔧 Tools

### 🧬 Microdata (USA, CPS, IPUMSI, ACS, NHIS, MEPS, …)

| Tool | Description |
|------|-------------|
| `microdata_search_variables` | Search the offline variable database by name, label, group, or sample (no API key needed) |
| `microdata_list_samples` | List available samples for a collection (use to find sample IDs by year/survey) |
| `microdata_list_extracts` | List recent extracts for a collection |
| `microdata_get_extract` | Get status and download links for an extract |
| `microdata_create_extract` | Submit a new extract request |
| `microdata_wait_for_extract` | Poll until extract completes, with automatic bail-out for large extracts |
| `microdata_download_extract` | Download completed extract files to disk, with SHA-256 verification |

#### Variable search

`microdata_search_variables` queries a local database of **827 harmonized IPUMS USA variables** scraped from [usa.ipums.org](https://usa.ipums.org/usa-action/variables/group) — no API key or network request needed.

Each result includes:
- `name` — variable mnemonic (e.g. `INCTOT`)
- `label` — short description (e.g. `"Total personal income"`)
- `type` — `"H"` (household-level) or `"P"` (person-level)
- `groups` — thematic category (e.g. `"Person: Income"`)
- `samples` — representative IPUMS USA sample IDs where the variable is available (e.g. `["us2024a", "us2023a", ..., "us1850a"]`)

Filter by any combination of `query`, `type`, `group`, and `sample`:

```
microdata_search_variables({ query: "income", type: "P", sample: "us2024a" })
microdata_search_variables({ group: "Education" })
microdata_search_variables({ query: "veteran", sample: "us1990a" })
```

> The `samples` field lists the representative display columns from usa.ipums.org — a subset of all available samples. Cross-reference with `microdata_list_samples` for the complete list.

#### Create extract

Samples and variables use array syntax:

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

The response includes a **size advisory** based on `samples × variables` to help decide whether to poll immediately or check back later:

| Complexity | Advisory |
|---|---|
| ≤ 200 | Small — `microdata_wait_for_extract` is fine (1–3 min) |
| ≤ 2,000 | Medium — consider asking the user (3–15 min) |
| > 2,000 | Large — recommend checking back with `microdata_get_extract` (20–60+ min) |

#### Wait for extract

`microdata_wait_for_extract` defaults to a **90-second timeout**. If the extract is still processing when the timeout is reached, the tool returns early with:

```json
{
  "status": "still_processing",
  "message": "Extract 42 is still queued after 90s (6 check(s)). Ask the user if they would like to wait longer, or tell them to check back later using: microdata_get_extract({ collection: \"usa\", extractNumber: 42 })",
  "extract": { ... }
}
```

This keeps the conversation responsive — the user gets the extract number and can ask to resume polling or check back manually at their convenience. Pass a higher `timeoutSeconds` only if the user explicitly agrees to wait.

#### Download a completed extract

```json
{
  "collection": "usa",
  "extractNumber": 42,
  "outputDir": "/data/ipums",
  "fileTypes": ["data", "ddiCodebook"]
}
```

Available `fileTypes`: `data`, `ddiCodebook`, `basicCodebook`, `rCommandFile`, `spssCommandFile`, `stataCommandFile`, `stsCommandFile`, `sasCommandFile`.

> **Note:** The IPUMS API returns `stsCommandFile` (not `stataCommandFile`) for Stata syntax files in some collections. Include both if unsure.

Returns `{ downloaded: [...], errors: [...] }`. Each entry includes `localPath`, `bytes`, and `sha256Verified`.

### 🗺️ NHGIS (Aggregate & GIS Data)

| Tool | Description |
|------|-------------|
| `nhgis_search_datasets` | Search all datasets by keyword (name, census group, description) |
| `nhgis_search_data_tables` | Search data tables by keyword, optionally scoped to a dataset |
| `nhgis_search_time_series_tables` | Search all time series tables by keyword |
| `nhgis_list_datasets` | Browse available datasets (paginated) |
| `nhgis_get_dataset` | Get tables and geographic levels for a dataset |
| `nhgis_list_data_tables` | List all data tables (paginated) |
| `nhgis_get_data_table` | Get variables in a data table |
| `nhgis_list_time_series_tables` | List time series tables (paginated) |
| `nhgis_get_time_series_table` | Get detail for a time series table |
| `nhgis_list_shapefiles` | List available shapefiles |
| `nhgis_list_extracts` | List recent NHGIS extracts |
| `nhgis_get_extract` | Get NHGIS extract status and download links |
| `nhgis_create_extract` | Submit a new NHGIS extract |

#### Table search

Three tools enable natural-language discovery of NHGIS data, complementing the `nhgis_list_*` and `nhgis_get_*` tools:

**`nhgis_search_datasets`** — fetches all ~253 datasets in one call and returns those matching the keyword in their `name`, `group` (e.g. `"2020 Census"`, `"2019 ACS"`), or `description`. Best first step when you know a topic or census year.

**`nhgis_search_time_series_tables`** — fetches all ~400 time series tables (which span multiple census years with consistent geographic definitions) and filters by keyword in `name` or `description`. Ideal for longitudinal analysis.

**`nhgis_search_data_tables`** — searches source data tables by keyword against `description` and `universe`:
- With `dataset` parameter: fetches **all** tables for that dataset comprehensively.
- Without `dataset`: scans the first 2,500 tables across all datasets (limited coverage — see note in response).

Recommended workflow:

```
nhgis_search_datasets("poverty")
  → pick a dataset (e.g. "2019_ACS5a")
nhgis_get_dataset("2019_ACS5a")
  → confirm available tables and geographic levels
nhgis_search_data_tables("poverty", dataset="2019_ACS5a")
  → pick a table (e.g. "B17001")
nhgis_create_extract(...)
```

> The NHGIS public API does not support server-side filtering. The search tools fetch full metadata pages and filter client-side.

## 🚀 Workflow: Jupyter MCP + ipumsr

This server pairs naturally with a [Jupyter MCP server](https://github.com/datalayer/jupyter-mcp-server) to form a complete data pipeline — from browsing IPUMS metadata to live analysis in a notebook — without leaving your LLM client.

### Full pipeline example

**Step 1 — Browse and submit (via MCP tools in Claude) 🤖**

```
1. nhgis_search_datasets        → find datasets by keyword (topic, year, census program)
2. nhgis_search_data_tables     → narrow to specific tables (scope to dataset for full coverage)
3. nhgis_get_dataset            → confirm tables and geo levels
4. nhgis_create_extract         → submit the extract
5. nhgis_get_extract            → poll until status = "completed"
```

Or for microdata:

```
1. microdata_search_variables     → find variable names by keyword or group
2. microdata_list_samples         → confirm the right sample ID ("2022 ACS" → us2022a)
3. microdata_create_extract       → submit (size advisory tells you whether to wait or check back)
4. microdata_wait_for_extract     → poll up to 90s; bail out gracefully for large extracts
5. microdata_download_extract     → download data + DDI codebook
```

> 💡 **Variable discovery:** Use `microdata_search_variables` to look up mnemonics from natural language — search `"income"`, `"veteran"`, `"race"` — rather than relying on memorized variable names. Filter by `sample` to confirm a variable is available in your target year. For NHGIS, use `nhgis_search_datasets` and `nhgis_search_data_tables` to find tables by keyword, then `nhgis_get_data_table` to see all variables within a table.

**Step 2 — Analyze in Jupyter with ipumsr (R kernel) 📓**

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

For Python notebooks 🐍:

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

### Suggested config with Jupyter MCP

Add both servers to your MCP client config:

```json
{
  "mcpServers": {
    "ipums": {
      "command": "node",
      "args": ["/absolute/path/to/ipums-mcp/dist/index.js"],
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

With both servers running you can prompt your LLM client: *"Submit a 2022 ACS extract for VETSTAT, AGE, SEX, STATEFIP, download it when ready, then open a Jupyter notebook and plot veteran counts by state with ggplot2."* 🎯

## 🔒 Security Notes

- **API key**: Pass via `IPUMS_API_KEY` env var only. Never hard-code it or commit it to source control.
- **Download URL validation**: `microdata_download_extract` validates that each download URL uses HTTPS and resolves to an `*.ipums.org` host before sending your API key. URLs that fail this check are skipped and reported in `errors`.
- **Output directory**: `microdata_download_extract` accepts any absolute path. Restrict access to the MCP server process if running in a shared environment.
- **SHA-256 verification**: Every downloaded file is verified against the checksum provided by the API. A mismatch is reported in `errors` but the file is kept so you can inspect it.

## 💻 Development

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
  data/
    usa-variables.ts  offline DB — 827 harmonized IPUMS USA variables
  tools/
    microdata.ts    microdata tools (search vars, list, get, create, wait, download)
    nhgis.ts        NHGIS tools (search datasets/tables/TSTs + list/get/create/extract)
```

## 📄 License

[MIT](LICENSE) — © 2026 hesscl
