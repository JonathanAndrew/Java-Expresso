var express = require('express');
var router = express.Router();
var db = require('../models');

//login in
router.post('/', function(req,res){
	db.user.authenticate(req.body.email,req.body.password, function(err, user){
		if(!err && user){
			req.session.user = user.id;
			res.redirect("/favorites");
		}else {
			res.send("Password/Email don't match!")
		}
	});
});

router.get("/logout", function(req,res){
	req.session.destroy();
	res.redirect("/");
})

module.exports = router;