// src/index.ts
import http from "http";

// Example handler, unused variables prefixed with `_` to satisfy ESLint
const _handler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!\n");
};

// Create server (you can replace _req, _res with actual usage if needed)
const server = http.createServer((_req, _res) => {
  // Nothing needed here for now
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
