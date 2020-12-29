var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 
 // List of columns for product schema
 var productSchema = new Schema({
       
    
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
    var userproduct=mongoose.model('userproduct',productSchema);
module.exports=userproduct;
