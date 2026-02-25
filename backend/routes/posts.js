// Post routes
const express = require('express');
const router = express.Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
  const posts = await Post.findAll({ where: { published: true } });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});

module.exports = router;
