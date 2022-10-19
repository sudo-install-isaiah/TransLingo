var express = require("express");
var router = express.Router();

const users = ["Bob", "Alex", "Will", "Tristan"];

/* GET users listing. */
router.get("/", function (req, res) {
	res.json(users);
});

module.exports = router;
