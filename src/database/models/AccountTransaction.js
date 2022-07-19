const sequelize = require("sequelize");

const createAccountTransactions = (sequelize, DataTypes) => {
  const AccountTransactions = sequelize.define('AccountTransactions', {
    accountId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL,
    type: DataTypes.STRING,    
  }, {
    tableName: 'accountTransactions',
    underscored: true,
  });

  return AccountTransactions;
};     

module.exports = createAccountTransactions;