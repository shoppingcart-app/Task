const mongoose=require('mongoose');
const userLogin=mongoose.model('userLogin',new mongoose.Schema({
    userName:String,
    password:String
    })
);
module.exports=userLogin;