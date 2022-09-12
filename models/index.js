const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Post.hasMany(Comment, {
    foreignkey: 'post_id'
});

Post.belongsTo(User, {
    foreignkey: 'user_id'
});

Comment.belongsTo(User,{
    foreignkey: 'user_id'
})


module.exports = { User, Comment, Post };
