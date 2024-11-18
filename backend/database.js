// Conexión a la Base de Datos MogoDB Atlas
const mongoose = require('mongoose');
require('dotenv').config(); // Paquete dotenv para variables de entorno

mongoose.connect(process.env.MONGODB_URI) // Llamado a la variable de entorno - URL
.then((res) => {console.log('Conexion con la base de datos exitosa')})
.catch((error) => {console.log(`No se pudo realizar la conexión con la base de datos ${error}`)});

module.exports = mongoose;
