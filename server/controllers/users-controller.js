const userModel = require('../models/users-model.js');
const randomString = require('randomstring');
const userUtil = require('../util/user-util');

const userCtrl = {};


//Crear usuario
userCtrl.createUser = async (req, res, next) => {

    // Acá se encripta la contraseña antes de guardar
    let user = req.body;

    user.salt = randomString.generate(17);
    user.password = userUtil.encryptUserPassword(user.salt, user.password);

    await userModel.create(req.body, (err, userCreated) => {
        if (err) {
            return next(err);
        }
        res.json(userCreated);
    });
}


//Consultar usuario por medio del email
userCtrl.getUserByEmail = async (req, res, next) => {
    await userModel.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            return next(err);
        }
        res.json(user);
    });
}

//Consultar usuario (login)
userCtrl.getLogin = async (req, res, next) => {

    await userModel.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return next(err);
        }

        if (user === 'undefined' || user === null) {
            res.json({message: 'User does not exists', status: 404});
        } else {
            // Acá se desencripta y compara la contraseña antes de retornar
            user.password = userUtil.decryptUserPassword(user.salt, user.password);

            if (user.password === req.body.password) {
                res.json({message: 'Password Match', status: 200, user: user});
            } else {
                res.json({message: 'Wrong Password', status: 4041});
            }
        }
    });
}


module.exports = userCtrl;
