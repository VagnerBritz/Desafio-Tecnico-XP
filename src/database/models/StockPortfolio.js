const sequelize = require("sequelize");

const createStockPortfolio = (sequelize, DataTypes) => {
  const StockPortfolios = sequelize.define('StockPortfolio', {
    userId: DataTypes.INTEGER,
    codAtivo: DataTypes.INTEGER,
    qtde: DataTypes.INTEGER,
    valorCompra: DataTypes.DECIMAL(10,2),
    registroId: DataTypes.INTEGER,
  }, {
    tableName: 'stockPortfolio',
    underscored: true,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  });

  return StockPortfolios;
};     

module.exports = createStockPortfolio;