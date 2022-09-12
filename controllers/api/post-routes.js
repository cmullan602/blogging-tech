const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// The `/api/products` endpoint


//create new post
router.post('/', async (req, res) => {
    try {
      const postData = await Post.create(req.body);
      res.status(200).json(PostData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //edit post 
  router.put('/:id', async (req, res) => {
    // edit post by its `id` value
    try {
      const postData = await Post.update(req.body,{
        where: {
          id: req.params.id
        }
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });