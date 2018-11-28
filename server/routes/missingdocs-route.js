/**
 * Created by David Cruz on 04/08/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();
//const moment = require('moment');

let missingDocModel = require('../models/missingdocs-model');

/* CREATE missing document. */
router.post('/', (req, res, next) => {

    let missingDoc = req.body;

    // //Date format
    // let formatedDateFound = missingDoc.dateFound;


    missingDocModel.create(missingDoc, (err, missingDocCreated) => {
        if (err) {
            return next(err);
        }
        res.json(missingDocCreated);
    });
});

/* GET missing document by docId. */
router.get('/:docid', (req, res, next) => {
    missingDocModel.findOne({docId: req.params.docid}, (err, misssingDoc) => {
        if (err) {
            return next(err);
        }
        res.json(misssingDoc);
    });
});

/* UPDATE found flag. */
router.put('/:docid', (req, res, next) => {
    missingDocModel.findOneAndUpdate({docId: req.params.docid}, {found: true}, {new: true}, (err, updatedMissingDoc) => {
        if (err) {
            return next(err);
        }
        res.json(updatedMissingDoc);
    });
});

module.exports = router;