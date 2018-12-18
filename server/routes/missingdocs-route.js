/**
 * Created by David Cruz on 04/08/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();
//const moment = require('moment');

const userController = require('../controllers/missingdocs-controller');

//let missingDocModel = require('../models/missingdocs-model');

/* CREATE missing document. */
router.post('/', userController.createMissingDoc);

/* GET missing document by docId. */
router.get('/:docid', userController.getMissingDoc);

/* UPDATE found flag. */
router.put('/:docid', userController.updateMissingDoc );

module.exports = router;