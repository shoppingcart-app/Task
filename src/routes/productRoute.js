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
}).get

module.exports = router;
