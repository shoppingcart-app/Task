const { async } = require('asyncawait');
const productSchema = require('../Models/Product');
 
//POST
const createProduct = (product)  =>{
  return new Promise(async(resolve,reject)=>{
    const Product = new productSchema(product);
    await Product.save(function (error,data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
})
}
 
//GET ALL
const getAllProduct = (product ,callback)  =>{
  productSchema.find(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}
 
//GET One
const getOneProduct = (product ,callback)  =>{
  productSchema.findById(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}
 
const updateProduct = (product ,callback)  =>{
  productSchema.findByIdAndUpdate(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}
 
const deleteProduct = (product ,callback)  =>{
  productSchema.findByIdAndRemove(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}
 
module.exports = { createProduct,getAllProduct,getOneProduct,getAllProduct,updateProduct,deleteProduct
 
}