const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Route "/"
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
     
      logged_in: req.session.logged_in,
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

module.exports = router;


// Route "/dashboard"
router.get('/dashboard', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User
        },
        {
          model: Comment
        }
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route "/dashboard/new"
router.get('/dashboard/new', (req, res) => {
  res.render('dashboard/new'
    );
})

// Route "/dashboard/edit/:id"
router.get('/dashboard/edit/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk({
      include: [
        {
          model: User
        },
        {
          model: Comment
        }
      ],
    });

    const post = dbPostData.get({ plain: true });
    res.render('dashboard_post_edit', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Route "/post/:id"

router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
        {
          model: Comment
        }
      ],
    });

    const post = dbPostData.get({ plain: true });
    res.render('post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
