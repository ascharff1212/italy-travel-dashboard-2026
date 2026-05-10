import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number.parseInt(process.env.PORT || "4177", 10);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
};

function fileFor(urlPath) {
  const requested = decodeURIComponent(urlPath.split("?")[0]);
  const clean = normalize(requested === "/" ? "/index.html" : requested).replace(/^(\.\.[/\\])+/, "");
  const resolved = resolve(join(root, clean));
  return resolved.startsWith(root) ? resolved : join(root, "index.html");
}

createServer((request, response) => {
  const filePath = fileFor(request.url || "/");

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": types[extname(filePath)] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Italy travel dashboard preview: http://localhost:${port}`);
});
