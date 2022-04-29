const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("the middleware is running");
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("the another middleware is running");
  res.send("<h1>Hello World</h1>");
});

app.listen(3000);
