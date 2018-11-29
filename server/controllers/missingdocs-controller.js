const missingDocModel = require('../models/missingdocs-model');

const missingDocCtrl = {};


//Crear documento perdido
missingDocModel.createMissingDoc = async (req, res, next) => {

    let missingDoc = req.body;

    // //Date format
    // let formatedDateFound = missingDoc.dateFound;

    await missingDocModel.create(missingDoc, (err, missingDocCreated) => {
        if (err) {
            return next(err);
        }
        res.json(missingDocCreated);
    });
}


//Consultar documento perdido por id
missingDocModel.getMissingDoc = async (req, res, next) => {
    await missingDocModel.findOne({docId: req.params.docid}, (err, misssingDoc) => {
        if (err) {
            return next(err);
        }
        res.json(misssingDoc);
    });
}

//Actualizar marca 'encontrado'
missingDocModel.updateMissingDoc = async (req, res, next) => {
    await missingDocModel.findOneAndUpdate({docId: req.params.docid}, {found: true}, {new: true}, (err, updatedMissingDoc) => {
        if (err) {
            return next(err);
        }
        res.json(updatedMissingDoc);
    });
}


module.exports = missingDocCtrl;

