module.exports = (sequelize, DataTypes) => {
  const Mixtape = sequelize.define(
    'Mixtape',
    {
      name: DataTypes.STRING,
      songs: DataTypes.ARRAY(DataTypes.STRING),
      image_url: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isNumeric: true,
        },
      },
    },
    {}
  );
  Mixtape.associate = (models) => {
    Mixtape.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'Mixtape',
    });
  };
  return Mixtape;
};
