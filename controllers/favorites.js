var express = require('express');
var router = express.Router();


router.get("/favorites/:name", function(req,res){
	console.log(req.body);
	res.send("hello");
})

module.exports = router;