const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datos para almacenar los clientes
const ClienteSchema = new Schema ({
    nombre: { type: String, require: true },
    direccion: { type: String, require: true },
    ciudad: { type: String, required: true },
    sucursal: { type: String, require: true },
    zona: { type: String, require: true },
    telefono: { type: String, require: true },
    email: { type: String, require: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
