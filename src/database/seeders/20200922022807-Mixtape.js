module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Mixtape', [
    {
      name: '123',
      songs: ['musica1', 'musca2', 'musica3', 'musica4', 'musica5'],
      userId: 1,
      image_url: 'teste',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Mixtape', null, {})
};
