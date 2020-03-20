const mongoose = require("mongoose");
const shortid = require("shortid");

let urlSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true
	},
	shortURL: {
		type: String,
		required: true,
		default: shortid.generate
	},
	clicks: {
		type: Number,
		required: true,
		default: 0
	}
})

module.exports = mongoose.model("URL", urlSchema)