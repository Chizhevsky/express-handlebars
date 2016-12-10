var express = require("express");
var aboutCtrl = require("./lib/controllerForAbout.js");

var app = express();

var handlebars = require("express-handlebars")
  .create({defaultLayout: "main"});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home", {name: "Alexey"});
});

app.get("/about", function(req, res) {
  res.render("about", {words: aboutCtrl.getWords()});
});

app.listen(3000, function() {
  console.log("Server is working on localhost:3000");
});
