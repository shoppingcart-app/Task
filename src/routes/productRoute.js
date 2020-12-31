const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/products').post((req, res, next) => {
  productController.createProduct(req.body, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      console.log(data)
      res.json(data)
    }
  });
}).get((req, res, next) => {
  productController.getAllProduct(req.body, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      console.log(data)
      res.json(data)
    }
  });
})

router.route('/products/:id').get((req, res, next) => {
  productController.getOneProduct(req.body, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      console.log(data)
      res.json(data)
    }
  });
})

router.route('/products/:id').put((req, res, next) => {
  productController.updateProduct(req.body, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      console.log(data)
      res.json(data)
    }
  });
})

router.route('/products/:id').delete((req, res, next) => {
  productController.deleteProduct(req.body, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      console.log(data)
      res.json(data)
    }
  });
})


module.exports = router;