'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AccountTransactions', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'account_id',
        references: {
          model: 'Accounts',
          key: 'id',
        }
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,        
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at', 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at', 
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('AccountTransactions');
  }
};
