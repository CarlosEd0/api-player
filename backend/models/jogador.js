'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jogador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_de_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Jogador',
  });
  return Jogador;
};