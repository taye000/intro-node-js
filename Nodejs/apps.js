//create server
const express = require("express");
const http = require("http");
const url = require("url");
const app = express();

const server = http.createServer((req, res) => {
  res.end("hello");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on port 3000");
});
