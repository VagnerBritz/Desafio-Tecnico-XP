'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('accountTransactions', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'account_id',
        references: {
          model: 'accounts',
          key: 'id',
        }
      },
      value: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false      
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at', 
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('accountTransactions');
  }
};
