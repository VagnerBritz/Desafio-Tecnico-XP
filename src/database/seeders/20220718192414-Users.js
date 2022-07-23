'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      email: 'daenerysTargaryen@gmail.com',
      password: '$2b$10$7ylSCh94WC1utAf8rV.ILeBu4KGiuB7cyNFId9dptq/kDR/F25ilK',
      active: true,
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      email: 'ariaStark@gmail.com',
      password: '$2b$10$vSuW6vL8cKrNJ5d6ukTiO.gnC4woVPHNOFDdIrAnSk5LtBU/QISZG',
      active: true,
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});    
  }
};
