const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/index.js"));

app.listen(5000, () => console.log("Listening.."));


mongoose.connect(require("./config").db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let con = mongoose.connection;

con.once("open", function() {
  console.log("Successfully connected to the database!");
});

con.on("error", console.error.bind(console, "Connection Error:"));
