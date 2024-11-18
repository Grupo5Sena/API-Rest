// Inicio del módulo express, inicio del servidor
const express = require('express'); // Se importa el paquete express
const morgan = require('morgan'); // Se importa el paquete morgan
const cors = require('cors'); // permite o restringe las solicitudes HTTP entre diferentes dominios
const {mongose} = require('./database'); // conexion con la base de datos

// Inicializar la app
const app = express();

// Configuración de CROS
app.use(cors({
    origin: 'http://localhost:4200', // Permitir peticiones desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['content-type', 'Authorization'] // Headers permitidos
}));

app.use(morgan('dev'));
app.use(express.json());

// Se crean las rutas
app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.use('/api', require('./routes/routers'));

// Configuracion para iniciar el servidor
// Definir puerto
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
