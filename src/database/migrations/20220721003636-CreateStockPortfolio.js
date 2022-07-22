'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('stockPortfolio', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      }
    },
    codAtivo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'cod_ativo',
      references: {
        model: 'stocks',
        key: 'id',
      }
    }, 
    qtde: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valorCompra: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
      field: 'valor_compra',
    },
    registroId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'registro_id',
      references: {
        model: 'accountTransactions',
        key: 'id',
      },
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'created_at', 
    },
   });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('stockPortfolio');
  }
};
