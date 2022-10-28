let Contacts = require('../models/contact.model');

exports.contactList = function(req, res, next) {
    Contacts.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('contacts/list', {
                title: 'Contact List',
                ContactList: contactList
            })
        }
    });
}

exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Contacts({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        email: req.body.email
    });

    // console.log(updatedItem);

    Contacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the contact list
            res.redirect('/contacts/list');
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    let newItem = Contacts();

    res.render('contacts/add_edit', {
        title: 'Add a new Item',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = Contacts({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        email: req.body.email
    });

    Contacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            // console.log(item);
            res.redirect('/contacts/list');
        }
    });

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}