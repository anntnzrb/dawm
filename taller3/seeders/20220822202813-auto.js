'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    for (let i = 0; i < 20; i++) {
      await queryInterface.bulkInsert('auto', [{
        modelo: 'auto ' + i,
        puertas: Math.floor(Math.random() * (6 - 4 + 1)) + 4,
        fechaDeCompra: new Date(),
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('auto', null, {});
  }
};
