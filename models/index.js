const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


User.hasMany(Post, {
    onDelete: 'cascade',
    foreignkey: 'id'
});

User.hasMany(Comment, {
    onDelete: 'cascade',
    foreignKey: 'id'
})

Post.hasMany(Comment, {
    foreignkey: 'post_id'
});

Post.belongsTo(User, {
    foreignkey: 'user_id'
});

Comment.belongsTo(User,{
    foreignkey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'id'
})


module.exports = { User, Comment, Post };
