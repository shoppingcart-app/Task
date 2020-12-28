var express=require('express');
var bodyParser=require('body-parser');

var router=express.Router();
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
var Cart = require('../Models/Cart');
var requireLogin = require('../middleware/requireLogin');
var jsonParser=bodyParser.json();


router.post('/cart', requireLogin, jsonParser, (req, res) => {
  const user = req.body.user;
  const item = {
    product: req.body.product,
    quantity: req.body.quantity
  };

  Cart.findOne({ user: user })
    .then((foundCart) => {
      if (foundCart) {
        let products = foundCart.items.map((item) => item.product + '');
        if (products.includes(item.product)) {
          Cart.findOneAndUpdate({
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
        Cart.create({
          user: user,
          items: [item]
        })
          .then(() => res.end());
      }
    });
});

router.get('/cart', requireLogin, (req, res) => {
  Cart.findOne({ user: req.user.id })
  .populate('items.product')
  .exec((err, cart) => {
    if (!cart) {
      return res.send(null);
    }

    res.send(cart);
  });
});

router.put('/cart/:productId', requireLogin, jsonParser, (req, res) => {
  Cart.findById(req.body.cartId)
    .then((foundCart) => {
      foundCart.items = foundCart.items.filter((item) => item._id != req.body.itemId);
      foundCart.save(() => res.end());
    });
});

router.delete('/cart/:productId', requireLogin, (req, res) => {
  Cart.findByIdAndRemove(req.query.id)
    .then(() => res.end())
    .catch((err) => res.send(err));
});

module.exports = router;