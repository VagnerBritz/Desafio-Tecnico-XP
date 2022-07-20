const sequelize = require("sequelize");

const createAccount = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    userId: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL(10,2),
    
  }, {
    tableName: 'accounts',
    underscored: true,
  });
  
  return Account;
};

module.exports = createAccount;