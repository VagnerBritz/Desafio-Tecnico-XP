const sequelize = require("sequelize");

const createAccount = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    userId: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL,
    
  }, {
    tableName: 'accounts',
    underscored: true,
  });

  // User.associate = (db) => {
  //   User.hasOne(db.Account, { as: 'accounts', foreignKey: 'userId' });
  // }

  return Account;
};

module.exports = createAccount;