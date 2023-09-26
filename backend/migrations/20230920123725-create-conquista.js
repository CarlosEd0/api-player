'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conquista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeConquista: {
        type: Sequelize.STRING
      },
      descricaoConquista: {
        type: Sequelize.STRING
      },
      pontuacao: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Conquista');
  }
};