const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  specification: Schema.Types.Mixed,
  price: {
    mrp: {
      type: Number,
      required: true
    },
    selling_price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      enum: ['INR', 'USD'],
      default: 'INR'
    }
  },
  listing_status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE'
  },
  inventory: {
    type: Number,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  imgUrls: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;