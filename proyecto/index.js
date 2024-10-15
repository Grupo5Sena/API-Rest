// Inicio del módulo express, inicio del servidor
const express = require('express'); // Se importa el paquete express
const morgan = require('morgan'); // Se importa el paquete morgan
const cors = require('cors'); // permite o restringe las solicitudes HTTP entre diferentes dominios
const {mongose} = require('./database'); // conexion con la base de datos

// Inicializar la app
const app = express();
// Definir puerto
const PORT = process.env.PORT || 10000;

app.use(morgan('dev'));
app.use(express.json());

// Se crean las rutas
app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.use('/api', require('./routes/routers'));

// Configuracion para iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
