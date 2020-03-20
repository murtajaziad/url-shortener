const express = require("express");
const router = express.Router();
const URL = require("../models/url");

router.get("/", async (req, res) => {
	let urls = await URL.find()
	res.render("list", { urls: urls });
});

module.exports = router;