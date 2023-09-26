'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvaliacaoJogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AvaliacaoJogo.init({
    idJogo: DataTypes.INTEGER,
    idJogador: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    dataAvaliacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AvaliacaoJogo',
  });
  return AvaliacaoJogo;
};