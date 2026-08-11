const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.headers);
  console.log(request.url);
  const { join } = require("path");
  const url = request.url === "/" ? "/index.html" : request.url;
  response.end(url, "utf-8");
  const filePath = join("public", url);
});

server.listen(3001);