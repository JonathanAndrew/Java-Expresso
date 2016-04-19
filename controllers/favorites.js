var express = require('express');
var router = express.Router();
var db = require('../models');



router.get("/", function(req,res){
	if(req.session.user){
		db.user.findById(req.session.user).then(function(user){
			user.getFavorites().then(function(favorites){
			res.render("favorites", {favorites:favorites});
			});	
		});
	} else {
		res.redirect("/login");
	}
});

router.post("/", function(req,res){
	console.log(req.body);
	if(req.session.user){
		db.user.findById(req.session.user).then(function(user){
			db.favorite.findOrCreate({
				where : {
					name : req.body.name,
					address : req.body.address,
					phone_number : req.body.phone_number,
					is_closed : req.body.is_closed,
					yelp_url : req.body.url,
					image_url : req.body.image_url,
					rating_img_url_large : req.body.rating_img_url_large,
					lng : req.body.lng,
					lat : req.body.lat
				}
			}).spread(function(favorite, created){
				db.usersFavorites.findOrCreate({
					where : {
						userId : user.id,
						favoriteId : favorite.id
					}
				}).spread(function(userFavorite, created){
					if (created){
						res.redirect("/favorites");
					} else {
						res.send("This is already a favorite");
					}
				}).catch(function(err){
					res.send(err);
				});
			}).catch(function(err){
				res.send(err);
			});
		});
	} else {
		res.redirect("/login");
	}
});

router.delete("/:id", function(req,res){
	var id = req.params.id;
	db.favorite.destroy({
		where: {id:id}
	}).then(function(err){
		res.send("destroyed");
	});
})
// router.get("/delete/:id",function(req,res){
// 	console.log("TINPGWNEP"+req.session.user);
// 	var id = parseInt(req.params.id);
// 	db.favorite.find({where : {id: id}}).then(function(favorite){
// 		console.log("TINPGWNEP"+req.session.user);
// 		if(id >= 0 && id < favorite.length){
// 			favorite.destroy();
// 			res.send("Favorite has been deteted");
// 			res.redirect("/favorites");
// 		} else {
// 			res.status(404).send("Favorite does not exist")
// 		}
// 	});
// });

module.exports = router;