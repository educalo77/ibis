'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  item.init({
    item_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    categoy_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.REAL,
    img: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};