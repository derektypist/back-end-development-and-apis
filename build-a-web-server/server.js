const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.headers);
});

server.listen(3001);