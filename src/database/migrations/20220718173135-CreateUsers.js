'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
     await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Users');
    
  }
};
