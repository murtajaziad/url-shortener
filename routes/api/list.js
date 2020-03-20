const express = require("express");
const router = express.Router();
const URL = require("../../models/url");

router.get("/", async (req, res) => {
	let urls = await URL.find({}, "-_id url shortURL clicks");
	await res.json(urls)
});

module.exports = router;