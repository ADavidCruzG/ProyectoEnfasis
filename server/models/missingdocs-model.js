/**
 * Created by David Cruz on 04/08/2017.
 */
'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;

let missingDocsSchema = new Schema(
    {
        docId: {type: String, required: true, unique: true, index: true},
        docType: {type: String, required: true},
        summary: {type: String},
        city: {type: String, required: true},
        place: {type: String},
        contactNumber: {type: Number, required: true},
        contactEmail: {type: String, required: true},
        dateFound: {type: Date, required: true},
        found: {type: Boolean, required: true, default: false}
    }
);

module.exports = mongoose.model('MissingDocs', missingDocsSchema);