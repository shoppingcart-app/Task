var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [
    {
      products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: Number
    }
  ]
});

var usercart=mongoose.model('usercart',cartSchema);
module.exports=usercart;