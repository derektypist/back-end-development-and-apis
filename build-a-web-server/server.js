const http = require("http");
const { join } = require("path");
const { readFile } = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.headers);
  console.log(request.url);
  const url = request.url === "/" ? "/index.html" : request.url;
  const filePath = join("public", url);

  readFile(filePath, (error, file) => {
    if (error) {
      console.error(error);
      readFile("public/404.html", (error, file) => {
        response.end(file, "utf-8");
        response.writeHead(404);
      });
      return;
    }
    response.end(file, "utf-8");
    response.writeHead(200);
  });
});

server.listen(3001);