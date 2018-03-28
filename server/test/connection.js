const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/shopping-cart');
  mongoose.connection.once('open', () => {
    console.log('Connected to database');
    done();
  }).on('error', (err) => {
    console.log('Connection error');
  })
})