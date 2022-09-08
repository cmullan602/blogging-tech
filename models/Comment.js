const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FoodItem extends Model {}

FoodItem.init(
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    quantity: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'food_item',
  }
);

module.exports = FoodItem;
