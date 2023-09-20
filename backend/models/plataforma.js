'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plataforma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plataforma.init({
    nomePlataforma: DataTypes.STRING,
    descricaoPlataforma: DataTypes.STRING,
    idJogo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Plataforma',
  });
  return Plataforma;
};