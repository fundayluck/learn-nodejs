const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("the middleware is running");
  next(); // Allows the request to continue to the next middleware or the endpoint
});

app.use((req, res, next) => {
  console.log("the another middleware is running");
});

const server = http.createServer(app);

server.listen(3000);
