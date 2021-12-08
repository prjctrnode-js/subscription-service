module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subscriptions', [
      {
        userId: 1,
        subscriptionId: 1,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        userId: 2,
        subscriptionId: 2,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Subscriptions', null, {});
  }
};
