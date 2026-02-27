import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerMicrodataTools } from "./tools/microdata.js";
import { registerNhgisTools } from "./tools/nhgis.js";

const server = new McpServer({
  name: "ipums-mcp",
  version: "0.1.0",
});

registerMicrodataTools(server);
registerNhgisTools(server);

const transport = new StdioServerTransport();
await server.connect(transport);
