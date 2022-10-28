/**
 * Filename: index.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 8, 2022
 */

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* GET Home page. */
router.get('/', indexController.home);

/* GET Projects page. */
router.get('/projects', indexController.projects);

/* GET Services page. */
router.get('/services', indexController.services);

/* GET About Me page. */
router.get('/about', indexController.about);

/* GET Contact page. */
router.get('/contact', indexController.contact);

module.exports = router;
