const express = require("express");
const router = express.Router();
const URL = require("../models/url");

router.use("/api", require("./api/index"));
router.use("/list", require("./list"));

router.get("/", (req, res) => {
	res.render("index")
});

router.get("/:shortURL", async (req, res) => {
	let shortURL = req.params.shortURL;
	if(!shortURL) return res.redirect("/");
	let inDatabaseInfo = await URL.findOne({ shortURL: shortURL });
	if(!inDatabaseInfo) return res.redirect("/");
	inDatabaseInfo.clicks++
	await inDatabaseInfo.save();
	res.redirect(inDatabaseInfo.url)
});

module.exports = router;