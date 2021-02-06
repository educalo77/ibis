"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class password_admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  password_admin.init(
    {
      password_admin_id: DataTypes.INTEGER,
      ps_code: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "password_admin",
    }
  );
  return password_admin;
};
