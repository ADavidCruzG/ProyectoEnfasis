
'use strict';

let express = require('express');
let router = express.Router();
const missingDocController = require('../controllers/users-controller');
//const moment = require('moment');

/* CREATE missing document. */
router.post('/', missingDocController.createMissingDoc);

/* GET missing document by docId. */
router.get('/:docid', missingDocController.getMissingDoc);

/* UPDATE found flag. */
router.put('/:docid', missingDocController.updateMissingDoc);

module.exports = router;