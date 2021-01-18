const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for product schema
const productSchema = new Schema({
    title: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
});

module.exports = mongoose.model('Product', productSchema);;
