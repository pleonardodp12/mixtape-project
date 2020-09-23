'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Mixtape = sequelize.define('Mixtape', {
    name: DataTypes.STRING,
    songs: DataTypes.ARRAY,
    userId: DataTypes.NUMBER,
    image_url: DataTypes.STRING
  },{});
  Mixtape.associate = (models) => {
    Mixtape.belongsTo(models.User, {
      foreignKey: userId,
      as: 'mixtape',
      onDelete: 'SET_NULL',
    });
  };
  return Mixtape;
};