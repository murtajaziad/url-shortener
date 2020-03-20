const express = require("express");
const router = express.Router();
const URL = require("../../models/url");

router.post("/", async (req, res) => {
	let url = req.body.url;
	if(!url) return res.sendStatus(400);
	let Url = new URL({ url: url });
	await Url.save();
	await res.redirect("/list")
});

module.exports = router;