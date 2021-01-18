const productSchema = require('../Models/Product');

//POST
const createProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Product = new productSchema(product);
      console.log(product);
      await Product.save(function(err,result){ 
        if (err){ 
          console(err);
          reject(err);
        } 
        else{ 
          console.log(result);
          resolve(result);
        } 
    })
      
    } catch (err) {
      console.log(err)
      reject(err);
    }
  })
}

//GET ALL
const getAllProduct = (product, callback) => {
  productSchema.find(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null, data)
    }
  })
}

//GET One
const getOneProduct = (product, callback) => {
  productSchema.findById(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null, data)
    }
  })
}

const updateProduct = (product, callback) => {
  productSchema.findByIdAndUpdate(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null, data)
    }
  })
}

const deleteProduct = (product, callback) => {
  productSchema.findByIdAndRemove(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null, data)
    }
  })
}

module.exports = {
  createProduct, getAllProduct, getOneProduct, getAllProduct, updateProduct, deleteProduct

}

