const cartSchema = require('../Models/Cart');

//POST
const createItem = (cart ,callback)  =>{
  cartSchema.create(cart, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
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

module.exports = { createItem,getOneItemAndUpdate,getOneItem,getItemById,deleteItem

}
