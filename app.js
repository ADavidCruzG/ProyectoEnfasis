'use strict';

const express = require('express');

// Constants
const PORT = 3003;
const ENV = process.env.APP_ENV;

// App
const app = express();
app.get('/', (req, res) => {
    console.log('Hola Docker en ambiente de ' + ENV);
    res.send('¡Backend arriba en ' + ENV +'!');
});

app.listen(PORT);
console.log(`Backend corriendo por el puerto ${PORT}`);
