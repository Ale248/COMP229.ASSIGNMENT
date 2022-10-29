/**
 * Filename: contacts.router.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 29, 2022
 */

var express = require('express');
var router = express.Router();
let contactsController = require('../controllers/contacts.controller');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET List page. */
router.get('/list', contactsController.contactList);
 
// Routers for edit
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

// Routers for add
router.get('/add', requireAuth, contactsController.displayAddPage);
router.post('/add', requireAuth, contactsController.processAddPage);

// Router for Delete
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;
 