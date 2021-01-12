


constproductSchema = require('../Models/Product');

//POST
constcreateProduct = (product) => {
  returnnewPromise(async (resolve, reject) => {
    constProduct = newproductSchema(product);
    awaitProduct.save(function (error) {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
    /* productSchema.save(product, (error, data) => {​​​​​​​​
        if (error) {​​​​​​​​
          reject (error)
        }​​​​​​​​ else {​​​​​​​​
           resolve (data)
        }​​​​​​​​
      }​​​​​​​​) */
  })
}

//GET ALL
constgetAllProduct = (product, callback) => {
  productSchema.find(product, (error, data) => {
    if (error) {
      returncallback(error)
    } else {
      returncallback(null, data)
    }
  })
}

//GET One
constgetOneProduct = (product, callback) => {
  productSchema.findById(product, (error, data) => {
    if (error) {
      returncallback(error)
    } else {
      returncallback(null, data)
    }
  })
}

constupdateProduct = (product, callback) => {
  productSchema.findByIdAndUpdate(product, (error, data) => {
    if (error) {
      returncallback(error)
    } else {
      returncallback(null, data)
    }
  })
}

constdeleteProduct = (product, callback) => {
  productSchema.findByIdAndRemove(product, (error, data) => {
    if (error) {
      returncallback(error)
    } else {
      returncallback(null, data)
    }
  })
}

module.exports = {
  createProduct, getAllProduct, getOneProduct, getAllProduct, updateProduct, deleteProduct

}

