const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    maxlength: 100,
    required: true
  },
  email: {
    type: String,
    maxlength: 100,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  mobile: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  addresses: [
    {
      id: Schema.Types.ObjectId,
      description: String,
      city: String,
      pincode: String
    }
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;