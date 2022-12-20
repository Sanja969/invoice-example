const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const itemsSchema = new mongoose.Schema({
  itemNumber: {
    type: Number,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    default: new Date(),
  },
  price: {
    type: Float,
    required: true,
  },
});

module.exports = new mongoose.model('Item', itemsSchema);