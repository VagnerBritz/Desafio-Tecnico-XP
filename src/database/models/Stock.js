const sequelize = require("sequelize");

const createStock = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    codAtivo: DataTypes.STRING,
    nome: DataTypes.STRING,
    qtdeOferta: DataTypes.INTEGER,
    valorUnit: DataTypes.DECIMAL(10,2),
    
  }, {
    underscored: true,
    tableName: 'stocks',
    timestamps: false,
  });
  
  return Stock;
};

module.exports = createStock;