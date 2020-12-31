const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userRegSchema=new Schema({
    firstName:{required:true,type:String},
    lastName:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phnNo:{type:Number,required:true},
    address:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    pincode:{type:Number,required:true}
});
const userReg=mongoose.model('userReg',userRegSchema);
module.exports=userReg;