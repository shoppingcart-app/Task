const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for product schema
 const productSchema = new Schema({
       
    
    title : {
        type:String
    },
    price : {
        type:String
    },
    description : {
        type:String
    },
    imageUrl : {
        type:String
    },
 },{
    collection: 'products'
    },'product');
    const userproduct=mongoose.model('userproduct',productSchema);
module.exports=userproduct;
