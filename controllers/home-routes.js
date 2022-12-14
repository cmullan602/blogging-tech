const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const {withAuth} = require('../utils/auth');


// Route "/"
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'username']
      }
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    
    console.log(posts)
    res.render('homepage', {

      posts,

      logged_in: req.session.logged_in
     
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

//sign-up route
router.get('/sign-up', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('sign-up');
})



// Route "/post/:id"

router.get('/post/:id', async (req, res) => {
  Post.findByPk(req.params.id, {
       include: [
       User,
         {
           model: Comment,
           include: [User]
         },
         
       ],
     })
     .then((dbPostData) => {
       if (dbPostData) {
         const post = dbPostData.get({ plain: true });

         console.log(post)
 
         res.render("post", { 
           post,
           logged_in: req.session.logged_in });
       } else {
         res.status(404).end();
       }
     })
     .catch((err) => {
       res.status(500).json(err);
     });
 });
 
 
 
 
 
 
 
 
 
 
 
 
 

module.exports = router;