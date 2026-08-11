const http = require("http");
const { join, extname } = require("path");
const { readFile } = require("fs");

const server = http.createServer((request, response) => {
  const { extname } = require("path");
  console.log(request.headers);
  console.log(request.url);
  const url = request.url === "/" ? "/index.html" : request.url;
  const filePath = join("public", url);
  const ext = extname(filePath);
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".png": "image/png",
    ".js": "text/javascript",
  };

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