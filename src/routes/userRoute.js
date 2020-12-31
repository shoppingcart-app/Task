const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
router.route('/userReg').post((req, res, next) => {
  userController.createUser(req.body, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      console.log(data)
      res.json(data)
    }
  });
})
 
router.route('/userLogin').post((req, res, next) => {
    userController.userLogin(req.body, (error, data) => {
      if (error) {
        res.status(500).send(error)
      } else {
        console.log(data)
        res.json(data)
      }
    });
  })
 
  router.route('/getUser/:name').get((req, res, next) => {
    userController.getAllUser(req.body, (error, data) => {
      if (error) {
        res.status(500).send(error)
      } else {
        console.log(data)
        res.json(data)
      }
    });
  })
 
  router.route('/updateUser').put((req, res, next) => {
    userController.updateUser(req.body, (error, data) => {
      if (error) {
        res.status(500).send(error)
      } else {
        console.log(data)
        res.json(data)
      }
    });
  })

 