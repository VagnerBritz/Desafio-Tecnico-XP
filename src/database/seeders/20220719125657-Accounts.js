'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts', [{
      id:1,
      'user_id': 1,
      balance: 0.00,
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id:2,
      'user_id': 2,
      balance: 0.00,
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
