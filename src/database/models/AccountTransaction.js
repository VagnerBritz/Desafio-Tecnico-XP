const sequelize = require("sequelize");

const createAccountTransactions = (sequelize, DataTypes) => {
  const AccountTransactions = sequelize.define('AccountTransactions', {
    accountId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10,2),
    type: DataTypes.STRING,    
  },
  {
    tableName: 'accountTransactions',
    underscored: true,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  });

  return AccountTransactions;
};     

module.exports = createAccountTransactions;