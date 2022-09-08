const User = require('./User');
const FoodItem = require('./FoodItem');

// Create associations
User.hasMany(FoodItem, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});

FoodItem.belongsTo(FoodItem, {
  foreignKey: 'id'
});

module.exports = { User, FoodItem };
