const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

async function getRoutes() {
	let dir = await fs.readdirSync(__dirname);
	await dir.forEach(async file => {
		if(file != "index.js") await router.use(("/" + file.split(".js").join("")), require(path.join(__dirname, file)))
	})
}

getRoutes()

module.exports = router;