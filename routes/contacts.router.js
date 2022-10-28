/**
 * Filename: contacts.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * Date: Oct 27, 2022
 */

var express = require('express');
var router = express.Router();
let contactsController = require('../controllers/contacts.controller');

/* GET List page. */
router.get('/list', contactsController.contactList);
 
// Routers for edit
router.get('/edit/:id', contactsController.displayEditPage);
router.post('/edit/:id', contactsController.processEditPage);

// Routers for add
router.get('/add', contactsController.displayAddPage);
router.post('/add', contactsController.processAddPage);

// Router for Delete
router.get('/delete/:id', contactsController.performDelete);

module.exports = router;
 