const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  price_total: {
    type: Number,
    required: true
  },
  shipping_address: {
    type: String,
    required: true
  },
  delivery_status: {
    type: String,
    enum: ['CANCELED', 'DELIVERED', 'NOT_DELIVERED'],
    default: 'NOT_DELIVERED'
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;