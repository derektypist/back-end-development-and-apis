const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.headers);
  console.log(request.url);
  response.end("Data to send back to the client");
});

server.listen(3001);