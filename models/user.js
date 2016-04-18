'use strict';
var bcrypt = require('bcrypt');


module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,

    email : {
      type : DataTypes.STRING,

      validate : {

        isEmail : true

      }
    }, 

    password: {

      type : DataTypes.STRING,

      validate : {

        len : [8,20]

      } 
    },
  },
    {

    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.belongsToMany(models.favorite, {through : 'usersFavorites'})
      },
      authenticate: function(email, password, callback){
        this.find({
          where : {email: email}
        }).then(function(user){
          if(!user) return callback(null, false);
          bcrypt.compare(password, user.password, function
            (err, result){
            if(err) return callback(err);
            callback(null, result ? user: false);
          });
        });
      }
    },
    hooks : {
      beforeCreate: function(user, options, callback){
        if(user.password){
          bcrypt.hash(user.password, 10, function(err, 
            hash){
            if(err) return callback(err);
            user.password = hash;
            callback(null, user);
          });
        } else {
          callback(null, user);
        }
      }
    }
    
  });
  return user;
};