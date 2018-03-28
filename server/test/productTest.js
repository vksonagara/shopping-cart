const assert = require('assert');
const Product = require('../src/models/product');

describe('Product:', () => {
  it('creates product', (done) => {
    Product.create({
      title: 'Chocolate',
      price: {
        mrp: 5,
        selling_price: 4.5
      },
      inventory: 100,
      specification: {
        brand: 'Dairy Milk',
        flavor: 'Chocalate'
      }
    }, (err, product) => {
      if(err) {
        done(err);
      } else {
        done();
      }
    });
  });
});