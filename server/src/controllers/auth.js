const router = require('express').Router();
const User = require('../models/user');
const Product = require('../models/product');

router.post('/signup', (req, res) => {
  res.end('Hello');
});

module.exports = router;