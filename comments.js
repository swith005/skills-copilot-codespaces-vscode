// Create web server
// Load HTTP module
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile("./index.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/comments") {
    fs.readFile("./comments.json", function (error, data) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/comments.js") {
    fs.readFile("./comments.js", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});