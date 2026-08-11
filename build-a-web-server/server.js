const http = require("http");
const { join } = require("path");
const { readFile } = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.headers);
  console.log(request.url);
  const url = request.url === "/" ? "/index.html" : request.url;
  const filePath = join("public", url);

  const mimeTypes = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".html": "text/html",
    ".png": "image/png"
  }
  readFile(filePath, (error, file) => {
    if (error) {
      console.error(error);
      readFile("public/404.html", (error, file) => {
        response.writeHead(404);
        response.end(file, "utf-8");
      });
      return;
    }
    response.writeHead(200);
    response.end(file, "utf-8");
  });
});

server.listen(3001);