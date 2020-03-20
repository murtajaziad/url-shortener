const express = require("express");
const router = express.Router();
const URL = require("../../models/url");
const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.delete("/:shortURL", async (req, res) => {
	let shortURL = req.params.shortURL;
	if(!shortURL) return res.sendStatus(400);
	await URL.findOneAndDelete({ shortURL: shortURL }).catch(_ => res.sendStatus(404));
	await res.redirect("/list");
});

module.exports = router;