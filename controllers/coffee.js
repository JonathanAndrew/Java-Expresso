var express = require("express");
var router = express("Router");

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
});

// See http://www.yelp.com/developers/documentation/v2/search_api


router.get("/",function(req,res){
yelp.search({ term: 'coffee', location: req.query.location })
.then(function (data) {
	// res.send(data);
  res.render("coffee.ejs", {coffeeShop : data});
})
.catch(function (err) {
  res.send(err);
});


})



module.exports = router;