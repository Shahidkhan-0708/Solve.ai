# BeautifulSoup Web Scraper & Internet Search MCP Server

This MCP (Model Context Protocol) server allows AI assistants and client applications to search the live web and scrape clean, structured study materials from public websites using **BeautifulSoup**.

## Available Tools

1. **`search_internet`**: Search the web via DuckDuckGo for articles, docs, or explanations.
   - Arguments: `query` (string), `max_results` (optional int, default 5)
2. **`scrape_website`**: Fetch any public URL and parse readable content using BeautifulSoup (removes ads, navigation, and boilerplate).
   - Arguments: `url` (string), `css_selector` (optional string), `max_length` (optional int)
3. **`search_and_scrape`**: One-step tool that searches for a topic and scrapes the top educational websites into clean markdown passages.
   - Arguments: `query` (string), `num_sources` (optional int, default 3)

## Configuration

### Antigravity IDE / Workspace
Configured in:
- `.agents/plugins/beautifulsoup-scraper/mcp_config.json`
- `.agents/mcp_config.json`

### Claude Desktop
Add to `%APPDATA%\Claude\claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "beautifulsoup-scraper": {
      "command": "python",
      "args": [
        "c:/Users/HP/OneDrive/Documents/webd/task/Solve.ai/mcp_servers/beautifulsoup_server.py"
      ]
    }
  }
}
```
