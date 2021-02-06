'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  item_comment.init({
    item_comment_id: DataTypes.INTEGER,
    person: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    id_item: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item_comment',
  });
  return item_comment;
};