// Conexión a la Base de Datos MogoDB Atlas
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then((res) => {console.log('Conexion con la base de datos exitosa')})
.catch((error) => {console.log(`No se pudo realizar la conexión con la base de datos ${error}`)});

 module.exports = mongoose;
