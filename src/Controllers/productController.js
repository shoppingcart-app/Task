const productSchema = require('../Models/Product');

//POST
const createProduct = (product ,callback)  =>{
  productSchema.create(product, (error, data) => {
    if (error) {
      return callback(error)
    } else {
      return callback(null,data)
    }
  })
}


//GET all
router.route('/products').get((req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})


router.route('/products/:id').get((req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//UPDATE
router.route('/products/:id').put((req, res, next) => {
  productSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, data) {
    if (err) return next(err);
    res.send('Product udpated.');
});
})

// Delete Product
router.route('/products/:id').delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
})
})


module.exports = { createProduct

}