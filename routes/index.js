var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

// Services page
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

// About me page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

// Contact page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
