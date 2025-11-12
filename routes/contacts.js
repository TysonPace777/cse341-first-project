const express = require('express');
const router = express.Router();
const utilities = require('../utilities/index');
const validate = require('../utilities/contact');

const contactsController = require('../controllers/contacts');

router.get('/', utilities.handleErrors(contactsController.getAll));

router.get('/:id', utilities.handleErrors(contactsController.getSingle));

router.post('/', validate.checkContactCreate, utilities.handleErrors(contactsController.createContact));

router.put('/:id', validate.checkContactCreate, utilities.handleErrors(contactsController.updateContact));

router.delete('/:id', utilities.handleErrors(contactsController.deleteContact));

module.exports = router;