'use strict';
global.emailEq = 'test@test.com';
global.docEq = 'A-1';
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

let dummyDoc = (sameId) => {
    let docId = '';
    if (sameId) {
        docId = docEq;
    } else {
        docId = faker.random.uuid();
    }
    return {
        docId: docId,
        docType: 'CC',
        summary: 'Descripcion',
        city: 'Londres',
        place: 'Stamford Bridge',
        contactNumber: '423423',
        contactEmail: 'test@test.com',
        dateFound: '2018/12/17'
    };
};

/* USUARIO */

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
        body: dummyUser(false),
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

/* DOCUMENTOS PERDIDOS */

// Crea un nuevo documento perdido
it('should return an missing doc after created it', function (done) {
    let options = {
        method: 'post',
        body: dummyDoc(true),
        json: true,
        url: 'http://localhost:3003/api/missingdocs'
    };
    request.post(options, function (error, response, body) {
        expect(response.request.body).to.equal(JSON.stringify(dummyDoc(true)));
        done();
    });
});

// Crea un nuevo documento perdido (STATUS)
it('should return an missing doc after created it - STATUS', function (done) {
    let options = {
        method: 'post',
        body: dummyDoc(false),
        json: true,
        url: 'http://localhost:3003/api/missingdocs'
    };
    request.post(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

// Retorna un docuemnto existente por id
it('should return an user searched by email', function (done) {
    let docId = '1234567890';
    request.get('http://localhost:3003/api/missingdocs/' + docId, function (error, response, body) {
        let missingDoc = JSON.parse(body);
        expect(missingDoc.docId).to.equal(docId);
        done();
    });
});

// Retorna un docuemnto existente por id (STATUS)
it('should return an user searched by email - STATUS', function (done) {
    let docId = '1234567890';
    request.get('http://localhost:3003/api/missingdocs/' + docId, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});