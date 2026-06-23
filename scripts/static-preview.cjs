const fs = require("fs");
const http = require("http");
const path = require("path");
const { URL } = require("url");

const root = path.resolve(__dirname, "..");
const appDir = path.join(root, ".next", "server", "app");
const staticDir = path.join(root, ".next", "static");
const publicDir = path.join(root, "public");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"]
]);

function sendFile(response, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "content-type": mimeTypes.get(path.extname(filePath)) || "application/octet-stream"
    });
    response.end(data);
  });
}

function safeJoin(base, requestPath) {
  const resolved = path.resolve(base, requestPath.replace(/^\/+/, ""));
  if (!resolved.startsWith(base)) {
    return null;
  }
  return resolved;
}

function appHtmlPath(pathname) {
  if (pathname === "/") {
    return path.join(appDir, "index.html");
  }

  const clean = pathname.replace(/^\/+|\/+$/g, "");
  return path.join(appDir, `${clean}.html`);
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith("/_next/static/")) {
    const filePath = safeJoin(staticDir, pathname.replace("/_next/static/", ""));
    return filePath ? sendFile(response, filePath) : sendFile(response, "");
  }

  if (pathname === "/_next/image") {
    const imageUrl = url.searchParams.get("url") || "";
    const filePath = safeJoin(publicDir, imageUrl);
    return filePath ? sendFile(response, filePath) : sendFile(response, "");
  }

  if (pathname.startsWith("/images/")) {
    const filePath = safeJoin(publicDir, pathname);
    return filePath ? sendFile(response, filePath) : sendFile(response, "");
  }

  if (pathname === "/robots.txt") {
    return sendFile(response, path.join(appDir, "robots.txt.body"));
  }

  if (pathname === "/sitemap.xml") {
    return sendFile(response, path.join(appDir, "sitemap.xml.body"));
  }

  return sendFile(response, appHtmlPath(pathname));
});

server.listen(port, host, () => {
  console.log(`Static preview ready on http://${host}:${port}`);
});
