/**
 * Filename: passport.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */

const passport = require('passport');
const User = require('../models/user.model');

module.exports = function() {
  
  passport.serializeUser((user, done) => {
    console.log('=====> serializeUser');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({_id: id}, '-password -salt', (err, user) => {
      console.log('=====> deserializeUser');
      done(err, user);
    });
  });

  require('./local')();
};