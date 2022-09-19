const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    content: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        refreences:{
          model: 'user',
          key: 'id'
        }
  
      },
      post_id: {
        type: DataTypes.INTEGER,
        allownull: false,
        references:{
          model: 'user',
          key: 'id'
        }
  
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
