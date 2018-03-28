const assert = require('assert');
const User = require('../src/models/user');

describe('User:', () => {
  it('creates user', (done) => {
    User.create({
      name: 'Vinod',
      email: 'vksonaga@hotmail.com',
      password: '1234',
      mobile: '7060334254',
      hash: '1234'
    }, (err, user) => {
      if(err) {
        done(err);
      } else {
        done();
      }
    });
  });
});