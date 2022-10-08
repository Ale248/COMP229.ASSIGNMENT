var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// About me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
