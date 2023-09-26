'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneroJogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneroJogo.init({
    idGenero: DataTypes.INTEGER,
    idJogo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GeneroJogo',
  });
  return GeneroJogo;
};