'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      email: 'daenerysTargaryen@gmail.com',
      password: '123456',
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      email: 'ariaStark@gmail.com',
      password: 'agulha',
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});    
  }
};
