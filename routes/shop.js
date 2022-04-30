const path = require("path");

const express = require("express");

const navigatePath = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(navigatePath, "views", "shop.html"));
});

module.exports = router;
