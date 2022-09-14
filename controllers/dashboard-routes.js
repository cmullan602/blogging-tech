const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route "/dashboard"
router.get('/', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
       where: {
           user_id: req.session.user_id
       }
      });
  
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );

      console.log(posts);

      res.render('logged-in-posts', {
        layout: 'dashboard',
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Route "/dashboard/new"
  router.get('/new', (req, res) => {
    res.render('new-post', {
        layout: 'dashboard'
    });
  });
  
  
  // Route "/dashboard/edit/:id"
  router.get('edit/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id);

      if(dbPostData){
        const post = dbPostData.get({ plain: true });
        res.render('post-edit', {
            layout: 'dashboard',
            post
        });
    }else{
        res.status(404).end();
    }
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  module.exports = router;