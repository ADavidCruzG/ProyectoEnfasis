'use strict';

const express = require('express');

// Constants
const PORT = 4002;

// App
const app = express();
app.get('/', (req, res) => {
    console.log('Hola Docker en front-end');
    res.send('¡Aplicación front-end arriba!');
});

app.listen(PORT);
console.log(`Aplicación front-end corriendo por el puerto ${PORT}`);
