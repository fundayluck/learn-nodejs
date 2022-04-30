const path = require("path");

const express = require("express");

const navigatePath = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(navigatePath, "views", "shop.html"));
});

module.exports = router;
