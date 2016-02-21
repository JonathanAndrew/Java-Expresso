var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
// var Router = require("./controllers");
app.use(bodyParser.urlencoded({extened: false}));
var ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/static"));

app.get("/",function(req,res){
	res.render("index.ejs");
});

app.use("./router.js", require("./controllers/router.js"));




// var port = 3000;
// app.listen("Listening to the smooth sounds of port " + port);

app.listen(3000);
