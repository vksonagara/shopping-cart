const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/shopping-cart');
  mongoose.connection.collections.users.drop();
  mongoose.connection.collections.products.drop();
  mongoose.connection.collections.orders.drop();
  mongoose.connection.once('open', () => {
    console.log('Connected to database');
    done();
  }).on('error', (err) => {
    console.log('Connection error');
  })
})