const assert = require('assert');
const Order = require('../src/models/order');

describe('Order:', () => {
  it('creates order', (done) => {
    Order.create({
      user: '5abbfa7fac7a871c10151261',
      products: [
        '5abbfa7eac7a871c10151260'
      ],
      price_total: 200,
      shipping_address: 'Roorkee'
    }, (err, order) => {
      if(err) {
        done(err);
      } else {
        done();
      }
    });
  });
});