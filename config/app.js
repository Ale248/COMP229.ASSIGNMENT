/**
 * Filename: app.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let session = require('express-session');
let passport = require('passport');
let flash = require('connect-flash');

var indexRouter = require('../routes/index');
var contactsRouter = require('../routes/contacts.router');
var usersRouter = require('../routes/users.router');

var app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// Sets up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', indexRouter);
app.use('/contacts', contactsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
