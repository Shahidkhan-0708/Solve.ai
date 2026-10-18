#!/usr/bin/env python3
"""
BeautifulSoup Web Scraper & Internet Search MCP Server
Provides tools to search the internet and scrape clean educational content from public websites.
Protocol: Model Context Protocol (MCP) JSON-RPC 2.0 over stdio.
"""

import sys
import json
import logging
import re
import socket
import ipaddress
from urllib.parse import urlparse, parse_qs, unquote
from typing import Dict, Any, List

import httpx
from bs4 import BeautifulSoup

# Configure logging to stderr so stdout remains clean for MCP JSON-RPC
logging.basicConfig(level=logging.INFO, stream=sys.stderr, format="[BS4-MCP] %(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("beautifulsoup-mcp")

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 SolveAI/1.0"


def is_safe_public_url(url: str) -> bool:
    """Validate that the URL is public and not an internal/private/loopback address (SSRF guard)."""
    try:
        parsed = urlparse(url)
        if parsed.scheme not in ("http", "https"):
            return False
        if not parsed.hostname or parsed.username or parsed.password:
            return False
        
        # Check IP address resolution
        port = parsed.port or (443 if parsed.scheme == "https" else 80)
        addr_info = socket.getaddrinfo(parsed.hostname, port, type=socket.SOCK_STREAM)
        for addr in addr_info:
            ip = ipaddress.ip_address(addr[4][0])
            if not ip.is_global or ip.is_loopback or ip.is_private or ip.is_link_local:
                return False
        return True
    except Exception as e:
        logger.warning(f"URL validation failed for {url}: {e}")
        return False


def clean_html_with_bs4(html_content: str, css_selector: str = None, max_length: int = 15000) -> Dict[str, Any]:
    """Parse HTML with BeautifulSoup, removing boilerplate and extracting clean structured text."""
    soup = BeautifulSoup(html_content, "html.parser")
    
    title = soup.title.get_text(strip=True) if soup.title else ""
    
    # Remove unwanted tags
    for tag in soup(["script", "style", "nav", "footer", "header", "form", "iframe", "noscript", "svg", "button", "aside"]):
        tag.decompose()
        
    # Extract targeted container or main content
    target = None
    if css_selector:
        target = soup.select_one(css_selector)
    if not target:
        target = soup.find("article") or soup.find("main") or soup.find("div", {"id": re.compile(r"(content|article|main|bodyContent)", re.I)}) or soup.body or soup

    # Extract headings and paragraphs
    structured_blocks = []
    for el in target.find_all(["h1", "h2", "h3", "h4", "p", "ul", "ol", "pre", "blockquote"]):
        name = el.name
        text = el.get_text(" ", strip=True)
        if not text or len(text) < 10:
            continue
        if name in ("h1", "h2", "h3", "h4"):
            level = "#" * int(name[1])
            structured_blocks.append(f"\n{level} {text}\n")
        elif name in ("ul", "ol"):
            items = [li.get_text(" ", strip=True) for li in el.find_all("li") if li.get_text(" ", strip=True)]
            for item in items[:15]:
                structured_blocks.append(f"- {item}")
        elif name == "pre":
            structured_blocks.append(f"```\n{text}\n```")
        elif name == "blockquote":
            structured_blocks.append(f"> {text}")
        else:
            structured_blocks.append(text)

    cleaned_text = "\n\n".join(structured_blocks)
    if not cleaned_text.strip():
        cleaned_text = target.get_text("\n", strip=True)

    if len(cleaned_text) > max_length:
        cleaned_text = cleaned_text[:max_length] + "\n\n... [Content truncated to maximum length]"

    return {
        "title": title,
        "text": cleaned_text,
        "length": len(cleaned_text)
    }


def search_duckduckgo(query: str, max_results: int = 5) -> List[Dict[str, str]]:
    """Search DuckDuckGo HTML endpoint and parse results with BeautifulSoup."""
    results = []
    headers = {"User-Agent": USER_AGENT, "Accept-Language": "en-US,en;q=0.9"}
    try:
        with httpx.Client(timeout=12.0, follow_redirects=True) as client:
            resp = client.post("https://html.duckduckgo.com/html/", data={"q": query}, headers=headers)
            if resp.status_code != 200:
                logger.warning(f"DuckDuckGo returned status {resp.status_code}")
                return results

            soup = BeautifulSoup(resp.text, "html.parser")
            for el in soup.select(".result"):
                title_el = el.select_one(".result__title a")
                snippet_el = el.select_one(".result__snippet")
                if not title_el or not snippet_el:
                    continue

                raw_href = title_el.get("href", "")
                url = raw_href
                if "uddg=" in raw_href:
                    try:
                        parsed_query = parse_qs(urlparse(raw_href).query)
                        url = unquote(parsed_query.get("uddg", [raw_href])[0])
                    except Exception:
                        url = raw_href

                title = title_el.get_text(" ", strip=True)
                snippet = snippet_el.get_text(" ", strip=True)
                # Skip ad redirects or tracker URLs
                if "duckduckgo.com/y.js" in url or "ad_provider=" in url or "bing.com/aclick" in url:
                    continue
                if url.startswith("http") and is_safe_public_url(url):
                    results.append({
                        "title": title,
                        "url": url,
                        "snippet": snippet
                    })
                if len(results) >= max_results:
                    break
    except Exception as e:
        logger.error(f"Error performing DuckDuckGo search for '{query}': {e}")
    return results


def tool_search_internet(query: str, max_results: int = 5) -> str:
    """Execute search_internet tool."""
    results = search_duckduckgo(query, max_results=max_results)
    if not results:
        return f"No search results found for query: '{query}'."
    
    output = [f"Found {len(results)} search results for '{query}':\n"]
    for i, res in enumerate(results, 1):
        output.append(f"{i}. **{res['title']}**\n   URL: {res['url']}\n   Snippet: {res['snippet']}\n")
    return "\n".join(output)


def tool_scrape_website(url: str, css_selector: str = None, max_length: int = 15000) -> str:
    """Execute scrape_website tool."""
    if not is_safe_public_url(url):
        return f"Error: The URL '{url}' is invalid or resolves to a private/local IP address."
    
    headers = {"User-Agent": USER_AGENT, "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"}
    try:
        with httpx.Client(timeout=15.0, follow_redirects=True) as client:
            resp = client.get(url, headers=headers)
            if resp.status_code != 200:
                return f"Error: HTTP {resp.status_code} while fetching {url}."
            
            content_type = resp.headers.get("content-type", "").lower()
            if "text/html" not in content_type and "xml" not in content_type and "plain" not in content_type:
                return f"Error: Unsupported content type: {content_type}. Only HTML and text pages can be scraped."
            
            parsed = clean_html_with_bs4(resp.text, css_selector=css_selector, max_length=max_length)
            return (
                f"# Scraped Page: {parsed['title'] or url}\n"
                f"**URL**: {url}\n"
                f"**Extracted Characters**: {parsed['length']}\n\n"
                f"--- Extracted Content ---\n\n"
                f"{parsed['text']}"
            )
    except httpx.TimeoutException:
        return f"Error: Request timed out while trying to reach {url}."
    except Exception as e:
        return f"Error scraping {url}: {str(e)}"


def tool_search_and_scrape(query: str, num_sources: int = 3) -> str:
    """Search for topic and scrape top websites with BeautifulSoup."""
    num_sources = min(max(1, num_sources), 5)
    search_results = search_duckduckgo(query, max_results=num_sources + 2)
    if not search_results:
        return f"No search results found for query: '{query}'."

    scraped_sources = []
    for res in search_results:
        url = res["url"]
        try:
            with httpx.Client(timeout=10.0, follow_redirects=True) as client:
                resp = client.get(url, headers={"User-Agent": USER_AGENT})
                if resp.status_code == 200:
                    parsed = clean_html_with_bs4(resp.text, max_length=6000)
                    if len(parsed["text"].strip()) >= 100:
                        scraped_sources.append({
                            "title": parsed["title"] or res["title"],
                            "url": url,
                            "snippet": res["snippet"],
                            "content": parsed["text"]
                        })
        except Exception as e:
            logger.warning(f"Failed to scrape {url}: {e}")
            continue

        if len(scraped_sources) >= num_sources:
            break

    if not scraped_sources:
        return f"Found search results for '{query}', but could not scrape full content from the pages."

    output = [f"# Web Scraping Research: {query}\n", f"Successfully scraped {len(scraped_sources)} educational source(s) using BeautifulSoup:\n"]
    for i, src in enumerate(scraped_sources, 1):
        output.append(
            f"## Source {i}: {src['title']}\n"
            f"- **URL**: {src['url']}\n"
            f"- **Summary**: {src['snippet']}\n\n"
            f"### Extracted Material:\n"
            f"{src['content']}\n\n"
            f"---\n"
        )
    return "\n".join(output)


# Tool Definitions for MCP
TOOLS = [
    {
        "name": "search_internet",
        "description": "Search the internet for websites, educational materials, articles, and documentation on any topic using DuckDuckGo.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Search query or topic to search on the web"
                },
                "max_results": {
                    "type": "integer",
                    "description": "Maximum number of search results to return (default: 5, max: 10)",
                    "default": 5
                }
            },
            "required": ["query"]
        }
    },
    {
        "name": "scrape_website",
        "description": "Fetch a public webpage and parse its HTML content using BeautifulSoup. Removes scripts, ads, and navigation boilerplate, returning clean structured text, headings, and metadata.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "description": "Full HTTP or HTTPS URL of the webpage to scrape"
                },
                "css_selector": {
                    "type": "string",
                    "description": "Optional CSS selector to target specific content (e.g. 'article', 'main', '.content')"
                },
                "max_length": {
                    "type": "integer",
                    "description": "Maximum character length of extracted text (default: 15000)",
                    "default": 15000
                }
            },
            "required": ["url"]
        }
    },
    {
        "name": "search_and_scrape",
        "description": "Search the internet for an educational topic and automatically scrape the top websites using BeautifulSoup, returning clean combined study material.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Topic or educational goal to search and scrape from the internet"
                },
                "num_sources": {
                    "type": "integer",
                    "description": "Number of top websites to scrape (default: 3, max: 5)",
                    "default": 3
                }
            },
            "required": ["query"]
        }
    }
]


def handle_message(msg: Dict[str, Any]) -> Dict[str, Any]:
    """Process incoming JSON-RPC 2.0 messages according to the MCP protocol."""
    method = msg.get("method")
    msg_id = msg.get("id")

    # Client initialize request
    if method == "initialize":
        return {
            "jsonrpc": "2.0",
            "id": msg_id,
            "result": {
                "protocolVersion": "2024-11-05",
                "capabilities": {
                    "tools": {}
                },
                "serverInfo": {
                    "name": "beautifulsoup-scraper",
                    "version": "1.0.0"
                }
            }
        }

    # Notification after initialization
    if method == "notifications/initialized":
        return None

    # Ping
    if method == "ping":
        return {"jsonrpc": "2.0", "id": msg_id, "result": {}}

    # List available tools
    if method == "tools/list":
        return {
            "jsonrpc": "2.0",
            "id": msg_id,
            "result": {
                "tools": TOOLS
            }
        }

    # Call a tool
    if method == "tools/call":
        params = msg.get("params", {})
        tool_name = params.get("name")
        args = params.get("arguments", {})

        try:
            if tool_name == "search_internet":
                result_text = tool_search_internet(
                    query=args.get("query", ""),
                    max_results=int(args.get("max_results", 5))
                )
            elif tool_name == "scrape_website":
                result_text = tool_scrape_website(
                    url=args.get("url", ""),
                    css_selector=args.get("css_selector"),
                    max_length=int(args.get("max_length", 15000))
                )
            elif tool_name == "search_and_scrape":
                result_text = tool_search_and_scrape(
                    query=args.get("query", ""),
                    num_sources=int(args.get("num_sources", 3))
                )
            else:
                return {
                    "jsonrpc": "2.0",
                    "id": msg_id,
                    "error": {
                        "code": -32601,
                        "message": f"Method/Tool '{tool_name}' not found"
                    }
                }

            return {
                "jsonrpc": "2.0",
                "id": msg_id,
                "result": {
                    "content": [
                        {
                            "type": "text",
                            "text": result_text
                        }
                    ],
                    "isError": False
                }
            }
        except Exception as e:
            logger.error(f"Error executing tool {tool_name}: {e}")
            return {
                "jsonrpc": "2.0",
                "id": msg_id,
                "result": {
                    "content": [
                        {"type": "text", "text": f"Execution error: {str(e)}"}
                    ],
                    "isError": True
                }
            }

    # Unknown method
    if msg_id is not None:
        return {
            "jsonrpc": "2.0",
            "id": msg_id,
            "error": {
                "code": -32601,
                "message": f"Method '{method}' not supported"
            }
        }
    return None


def main():
    """Main loop reading JSON-RPC requests from stdin and responding on stdout."""
    logger.info("BeautifulSoup MCP Server starting on stdio...")
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            req = json.loads(line)
            resp = handle_message(req)
            if resp is not None:
                sys.stdout.write(json.dumps(resp) + "\n")
                sys.stdout.flush()
        except json.JSONDecodeError:
            logger.error(f"Invalid JSON received: {line[:100]}")
        except Exception as e:
            logger.error(f"Unexpected error handling message: {e}")


if __name__ == "__main__":
    main()
