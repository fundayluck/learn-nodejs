const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("the product middleware is running");
  res.send("<h1>Product Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("the middleware is running");
  res.send("<h1>Hello World</h1>");
});

app.listen(3000);
