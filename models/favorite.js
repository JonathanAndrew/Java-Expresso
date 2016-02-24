'use strict';
module.exports = function(sequelize, DataTypes) {
  var favorite = sequelize.define('favorite', {
    name: DataTypes.STRING,

    address: DataTypes.STRING,

    phone_number: DataTypes.STRING,

    image_url: {

      type : DataTypes.STRING,

      validate : {

        isUrl : true

      }
    },

    yelp_url: {

      type : DataTypes.STRING,

      validate : {

        isUrl : true

      }
    },

    rating_img_url_large : {

      type : DataTypes.STRING,

      validate : {

        isUrl : true

      }
    },

    is_closed: DataTypes.BOOLEAN

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.favorite.belongsToMany(models.user, {through : 'usersFavorites'})
      }
    }
  });
  return favorite;
};