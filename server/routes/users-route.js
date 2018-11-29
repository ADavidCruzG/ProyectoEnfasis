
'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

/* CREATE user. */
router.post('/', userController.createUser);

/* GET user by email. */
router.get('/:email', userController.getUserByEmail);

/* GET user by email with decrypted password. */
router.post('/:login', userController.getLogin);

module.exports = router;