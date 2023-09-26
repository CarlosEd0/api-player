'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Avaliacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idJogo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Jogos', key: 'id'},
        onDelete: 'CASCADE'
      },
      idJogador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Jogadors', key: 'id'},
        onDelete: 'CASCADE'
      },
      comentario: {
        type: Sequelize.STRING
      },
      dataAvaliacao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Avaliacaos');
  }
};