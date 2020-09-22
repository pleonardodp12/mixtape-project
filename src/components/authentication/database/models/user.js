'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Mixtape, {
      foreignKey: 'mixtapeId',
      as: 'mixtapes',
      onDelete: 'SET_NULL',
    });
  };
  return User;
};