const userModel = require('../models/users-model.js');
const randomString = require('randomstring');
const userUtil = require('../util/user-util');

const userCtrl = {};

//Crear usuario
userCtrl.createUser = (req, res, next) => {
    // Acá se encripta la contraseña antes de guardar
    let user = req.body;

    user.salt = randomString.generate(17);
    user.password = userUtil.encryptUserPassword(user.salt, user.password);

    userModel.create(req.body, (err, userCreated) => {
        if (err) {
            return next(err);
        }
        console.log("usuario creado");
        res.json(userCreated);
    });
}

//Consultar usuario por medio del email
userCtrl.getUserByEmail = (req, res, next) => {
    userModel.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            return next(err);
        }
        console.log("email encontrado");
        res.json(user);
    });
}

//Consultar usuario (login)
userCtrl.getLogin = (req, res, next) => {

    userModel.findOne({email: req.body.email}, (err, user) => {
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