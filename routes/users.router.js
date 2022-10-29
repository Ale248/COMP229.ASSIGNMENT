/**
 * Filename: users.router.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */

let express = require('express');
let router = express.Router();
let usersController = require('../controllers/users.controller');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
