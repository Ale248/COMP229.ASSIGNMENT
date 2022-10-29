/**
 * Filename: db.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */
let atlasdb = "mongodb+srv://dbuser:D1E0WgJVUer0hldI@cluster005.hyd2sxj.mongodb.net/comp229?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function() {

    // Connect to the database
    mongoose.connect(atlasdb);

    // to monitor connection
    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', () => {
        console.log('===== Connected to MongoDB =====');
    });

    return mongodb;
}