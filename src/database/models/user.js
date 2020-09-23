module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  Users.associate = function (models) {
    Users.hasMany(models.Mixtape, {
      foreignKey: 'userId',
      as: 'Mixtapes',
      onDelete: 'SET NULL',
    });
  };
  return Users;
};
