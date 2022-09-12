const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
    foreignkey: 'user_id'
});

User.hasMany(Comment, {
    foreignkey: 'user_id'
});

Post.hasMany(Comment, {
    foreignkey: 'post_id'
});

Post.belongsTo(User, {
    foreignkey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignkey: 'post_id'
});

Comment.belongsTo(User,{
    foreignkey: 'user_id'
})


module.exports = { User, Comment, Post };
