const mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

  
const productSchema = require('../Models/Product');

//POST
router.route('/products').post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

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

//GET one
// router.route('/products/:id').get((req, res) => {
//   productSchema.findById(req.params.id, (error, data) => {
    
//       res.json(data)
//     })
  
// })

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


module.exports = router;