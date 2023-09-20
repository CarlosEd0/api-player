'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Avaliacao.init({
    idJogo: DataTypes.INTEGER,
    idJogador: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    dataAvaliacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avaliacao',
  });
  return Avaliacao;
};