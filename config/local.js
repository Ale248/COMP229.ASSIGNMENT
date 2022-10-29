/**
 * Filename: local.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

module.exports = function() {
    passport.use(new LocalStrategy((username, password, done)=>{
        
        User.findOne({username: username}, (err, user)=>{
            console.log('=====> LocalStrategy');
            
            if (err) {
                return done(err);
            }
            
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
    
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            
            return done(null, user);
        });
    }));
};