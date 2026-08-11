const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.headers);
  console.log(request.url);
  response.end(request.url);
});

server.listen(3001);