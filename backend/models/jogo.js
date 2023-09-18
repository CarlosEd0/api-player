'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jogo.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    genero: DataTypes.STRING,
    plataformas: DataTypes.STRING,
    midiaDoJogo: DataTypes.STRING,
    desenvolvedora: DataTypes.STRING,
    data_lancamento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Jogo',
  });
  return Jogo;
};