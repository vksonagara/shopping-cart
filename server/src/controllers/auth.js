const router = require('express').Router();
const User = require('../models/user');
const Product = require('../models/product');
const bcrypt = require('bcrypt');
const { isEmail, isEmpty, isMobile } = require('../helpers/validator');

router.post('/signup', (req, res) => {
  let errors = [];
  if(!isEmail(req.body.email)) {
    errors.push({ message: 'Invalid email'});
  }
  if(isEmpty(req.body.name)) {
    errors.push({ message: 'Name is empty'});
  }
  if(isEmpty(req.body.password)) {
    errors.push({ message: 'Password is empty'});
  }
  if(!isMobile(req.body.mobile)) {
    errors.push({ message: 'Invalid mobile number'});
  }
  if(errors.length) {
    res.send({errors: errors});
  } else {
    let password = bcrypt.hashSync(req.body.password, 10);
    let hash = bcrypt.hashSync(req.body.email, 10);
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password,
      mobile: req.body.mobile,
      hash
    });
    user.save((err) => {
      if(err) {
        res.send({error: 'Email already exists'});
      } else {
        res.send(user);
      }
    });
  }
});

module.exports = router;