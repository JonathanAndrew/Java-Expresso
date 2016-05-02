var express = require('express');
var router = express.Router();
var db = require('../models');

router.get("/", function(req,res){
	res.render("signup.ejs")
})

router.post("/", function(req,res){
	console.log(req.body);
	if(req.body.password == req.body.confirmPassword){
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
				req.session.user = user.id;
				res.send('success', 'You are logged in');
				res.redirect("/favorites");
				// res.redirect("/");
			}else{
				res.send("This user was already created")
			}
		}).catch(function(err){
			res.send("Password must be 8-20 characters")
		});
		}else{
			res.render("error.ejs");
		}
	
	});


module.exports = router;