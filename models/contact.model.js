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