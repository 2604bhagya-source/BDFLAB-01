// Import Node.js's built-in HTTP module.
const http = require("http");

// Create a server that responds to every request with plain text.
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello");
});

// Listen on port 3000 and print a message when the server is ready.
server.listen(3000, () => {
  console.log("Basic HTTP server is running at http://localhost:3000");
});
