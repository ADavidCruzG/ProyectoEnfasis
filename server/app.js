'use strict';

const express = require('express');

// Constants
const PORT = 3003;

// App
const app = express();
app.get('/', (req, res) => {
    console.log('Hola Docker en back-end');
    res.send('¡Aplicación back-end arriba!');
});

app.listen(PORT);
console.log(`Aplicación back-end corriendo por el puerto ${PORT}`);
