const cartSchema = require('../Models/Cart');

//POST
//POST
const createCart = (cart) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Cart = new cartSchema(cart);
      console.log(cart);
      await Cart .save(function(err,result){ 
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
const getOneItem = (cart ,callback)  =>{
  cartSchema.findOne(cart, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}

//GET One
const getOneItemAndUpdate = (cart ,callback)  =>{
  cartSchema.findOneAndUpdate(cart, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}

const getItemById = (cart ,callback)  =>{
  cartSchema.findById(cart, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}

const deleteItem = (cart ,callback)  =>{
  cartSchema.findByIdAndRemove(cart, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}

module.exports = { createCart,getOneItemAndUpdate,getOneItem,getItemById,deleteItem

}
