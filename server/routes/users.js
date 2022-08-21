var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/usertest", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/userposttest", function (req, res, next) {
  const username = req.body;
  console.log(username);
});

module.exports = router;
