var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
// var Router = require("./controllers");
app.use(bodyParser.urlencoded({extended: false}));
var ejsLayouts = require("express-ejs-layouts");
var session = require("express-session");
var db = require("./models");

app.use(ejsLayouts);
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/static'));
app.use(session({
  secret: 'Super secrettttt',
  resave: false,
  saveUninitialized: true
}));

app.get("/",function(req,res){
	res.render("index.ejs");
});

app.get("/users",function(req,res){
	res.render("users.ejs");
});

app.get("/showMap/:id", function(req, res){
	var id = req.params.id
	db.favorite.findById(id).then(function(favorite){
	res.render("showMap.ejs", {favorite : favorite});	
	});
	
});

app.use("./router.js", require("./controllers/router.js"));
app.use("/coffee", require("./controllers/coffee.js"));
app.use("/favorites", require("./controllers/favorites.js"));
app.use("/users", require("./controllers/users.js"));
app.use("/signup", require("./controllers/signup.js"));
   			

// var port = 3000;
// app.listen("Listening to the smooth sounds of port " + port);

app.listen(process.env.PORT || 3000)
