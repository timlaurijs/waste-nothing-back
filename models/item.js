"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      item.belongsTo(models.user);
      item.hasOne(models.category);
      item.belongsToMany(models.tag, {
        through: "itemTags",
        foreignKey: "itemId",
      });
    }
  }
  item.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      imageSource: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
