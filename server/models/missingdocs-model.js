/**
 * Created by David Cruz on 04/08/2017.
 */
'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;

let missingdocsSchema = new Schema(
    {	
    	docid: {type: Number, required: true, unique:true, index: true},
    	doctype: {type: String, required: true},
        summary: {type: String, required: true},
        city: {type: String, required: true},
        place: {type: String, required: true},
        contactnumber: {type: Number, required: true},
        contactemail: {type: String, required: true},
        date: {type: Date, required: true},
        found: {type: Boolean, required: true}
    }
);

module.exports = mongoose.model('Missingdocs', missingdocsSchema);