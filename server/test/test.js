'use strict';
global.emailEq = 'test@test.com';
const expect = require('chai').expect;
const request = require('request');
const faker = require('faker');
let dummyUser = (sameEmail) => {
    let email = '';
    if (sameEmail) {
        email = emailEq;
    } else {
        email = faker.internet.email();
    }
    return {
        firstName: 'Dummy',
        lastName: 'Dum',
        email: email,
        password: '12345'
    };
};

/* EXITOSAS */

// Crea un nuevo usuario
it('should return an user after created it', function (done) {
    let options = {
        method: 'post',
        body: dummyUser(true),
        json: true,
        url: 'http://localhost:3003/api/users'
    };
    request.post(options, function (error, response, body) {
        expect(response.request.body).to.equal(JSON.stringify(dummyUser(true)));
        done();
    });
});

// Crea un nuevo usuario (STATUS)
it('should return an user after created it - STATUS', function (done) {
    let options = {
        method: 'post',
        body: dummyUser(),
        json: true,
        url: 'http://localhost:3003/api/users'
    };
    request.post(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

// Retorna un usuario existente por email
it('should return an user searched by email', function (done) {
    let correo = 'agcruzgo@poligran.edu.co';
    request.get('http://localhost:3003/api/users/' + correo, function (error, response, body) {
        let user = JSON.parse(body);
        expect(user.email).to.equal(correo);
        done();
    });
});

// Retorna un usuario existente por email (STATUS)
it('should return an user searched by email - STATUS', function (done) {
    let correo = 'agcruzgo@poligran.edu.co';
    request.get('http://localhost:3003/api/users/' + correo, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

// Login de un usuario
it('should to do login process', function (done) {
    let options = {
        method: 'post',
        body: {email: 'agcruzgo@poligran.edu.co', password: '1234567'},
        json: true,
        url: 'http://localhost:3003/api/users/login'
    };
    request.post(options, function (error, response, body) {
        console.log(response.body);
        expect(response.body.message).to.equal('Password Match');
        expect(response.body.user.email).to.equal(options.body.email);
        done();
    });
});

// Login de un usuario (STATUS)
it('should to do login process - STATUS', function (done) {
    let options = {
        method: 'post',
        body: {email: 'agcruzgo@poligran.edu.co', password: '1234567'},
        json: true,
        url: 'http://localhost:3003/api/users/login'
    };
    request.post(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

/* FALLIDAS */