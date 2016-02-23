'use strict';
module.exports = function(sequelize, DataTypes) {
  var favorite = sequelize.define('favorite', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    image: DataTypes.STRING,
    yelp_url: DataTypes.STRING,
    open_or_closed: DataTypes.BOOLEAN
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