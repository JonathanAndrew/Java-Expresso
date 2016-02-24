var express = require('express');
var router = express.Router();
var db = require('../models');

router.get("/", function(req,res){
	res.render("signup.ejs")
})

router.post("/", function(req,res){
	console.log(req.body);
	db.user.findOrCreate({

		where : {
			name : req.body.name,
			email : req.body.email,
			

			},
		defaults: {
			password : req.body.password
		}
		}).spread(function(user, created){
			if(created){
				res.redirect("/");
			}else{
				res.send("This user was already created")
			}
		}).catch(function(err){
			res.send("Password must be 8-20 characters")
		});
	});




module.exports = router;