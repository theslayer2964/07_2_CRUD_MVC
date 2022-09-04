var express = require("express");
var router = express.Router();

router.get("/cookie", (req, res, next) => {
  res.cookie("user-id", "12345");
  res.send("Hello");
});

module.exports = router;
