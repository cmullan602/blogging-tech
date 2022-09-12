const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Route "/"
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {

      posts,
     
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route "/login"
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/sign-up', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('sign-up');
})



// Route "/post/:id"

router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
        {
          model: Comment,
          include: [User]
        }
      ],
    });
    if (dbPostData){
      const post = dbPostData.get({ plain: true });
    res.render('post', { post });
    }else {res.status(404).end()}
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;