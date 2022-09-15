const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const {withAuth} = require('../../utils/auth');


//create new comment
router.post('/', withAuth, async (req, res) => {
 
    try {
      const commentData = await Comment.create({...req.body, userId: req.session.userId});
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router