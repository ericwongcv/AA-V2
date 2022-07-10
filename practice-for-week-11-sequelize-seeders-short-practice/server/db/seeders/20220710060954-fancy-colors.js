'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Colors', [
    {
      name: 'light-blue',
      createdAt: new Date(2018, 12, 24, 10, 33, 30),
      updatedAt: new Date(2022, 8, 19, 23, 33, 30)
    },
    {
      name: 'purple',
      createdAt: new Date(2019, 12, 24, 10, 33, 30),
      updatedAt: new Date(2021, 8, 19, 23, 33, 30)
    },
    {
      name: 'green',
      createdAt: new Date(2020, 12, 24, 10, 33, 30),
      updatedAt: new Date(2023, 8, 19, 23, 33, 30)
    }
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Colors', {
      name: ['light-blue', 'purple', 'green']
    });
  }
};
