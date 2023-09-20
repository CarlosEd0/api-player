'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conquista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conquista.init({
    nomeConquista: DataTypes.STRING,
    descricaoConquista: DataTypes.STRING,
    pontuacao: DataTypes.STRING,
    idJogo: DataTypes.INTEGER,
    idJogador: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Conquista',
  });
  return Conquista;
};