const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');
const requireLogin = require('../middleware/requireLogin');
const jsonParser = bodyParser.json();

router.route('/cart').post( requireLogin, jsonParser, (req, res) => {
    const user = req.body.user;
    const item = {
      product: req.body.product,
      quantity: req.body.quantity
    };
  
    CartController.getOneItem({ user: user })
      .then((foundCart) => {
        if (foundCart) {
          let products = foundCart.items.map((item) => item.product + '');
          if (products.includes(item.product)) {
            CartController.getOneItemAndUpdate({
              user: user,
              items: {
                $elemMatch: { product: item.product }
              }
            },
              {
                $inc: { 'items.$.quantity': item.quantity }
              })
              .exec()
              .then(() => res.end());
          } else {
            foundCart.items.push(item);
            foundCart.save().then(() => res.end());
          }
        } else {
          CartController.createItem({
            user: user,
            items: [item]
          })
            .then(() => res.end());
        }
      });
  });
  
  router.route('/cart').get( requireLogin, (req, res) => {
    CartController.getOneItem({ user: req.user.id })
    .populate('items.product')
    .exec((err, cart) => {
      if (!cart) {
        return res.send(null);
      }
  
      res.send(cart);
    });
  });
  
  router.route('/cart/:productId').put( requireLogin, jsonParser, (req, res) => {
    CartController.getItemById(req.body.cartId)
      .then((foundCart) => {
        foundCart.items = foundCart.items.filter((item) => item._id != req.body.itemId);
        foundCart.save(() => res.end());
      });
  });
  
  router.route('/cart/:productId').delete( requireLogin, (req, res) => {
    CartController.deleteItem(req.query.id)
      .then(() => res.end())
      .catch((err) => res.send(err));
  });
  
  module.exports = router;