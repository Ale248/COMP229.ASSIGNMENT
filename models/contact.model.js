/**
 * Filename: contact.model.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */

let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        number: Number,
        email: {
            type: String,
            // match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
        },
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model('Contact', contactModel);