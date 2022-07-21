'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('stocks', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    codAtivo: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'cod_ativo',
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    qtdeOferta: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'qtde_oferta',
    },
    valorUnit: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
      field: 'valor_unit',
    },
   });   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('stocks');
  }
};
