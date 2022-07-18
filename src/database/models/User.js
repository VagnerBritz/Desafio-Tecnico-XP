const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    
  }, {
    tableName: 'users',
    underscored: true,
  });

  // User.associate = (db) => {
  //   User.hasOne(db.Account, { as: 'accounts', foreignKey: 'userId' });
  // }

  return User;
};

module.exports = createUser;