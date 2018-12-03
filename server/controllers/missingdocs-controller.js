
const missingDocModel = require('../models/missingdocs-model.js');
const missingDocCtrl = {};


missingDocCtrl.createMissingDoc = (req, res, next) => {

    let missingDoc = req.body;

    // //Date format
    // let formatedDateFound = missingDoc.dateFound;
    missingDocModel.create(missingDoc, (err, missingDocCreated) => {
        if (err) {
            return next(err);
        }
        console.log("documento creado.");
        res.json(missingDocCreated);
    });
}

//Consultar documento perdido por id
missingDocCtrl.getMissingDoc = (req, res, next) => {
    missingDocModel.findOne({docId: req.params.docid}, (err, misssingDoc) => {
        if (err) {
            return next(err);
        }
        console.log("documento encontrado.");
        res.json(misssingDoc);
    });
}


//Actualizar marca 'encontrado'
missingDocCtrl.updateMissingDoc = (req, res, next) => {
    missingDocModel.findOneAndUpdate({docId: req.params.docid}, {found: true}, {new: true}, (err, updatedMissingDoc) => {
        if (err) {
            return next(err);
        }
        res.json(updatedMissingDoc);
    });
}


module.exports = missingDocCtrl;

