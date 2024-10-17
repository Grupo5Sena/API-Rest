const mongoose = require('mongoose');
const {Schema} = mongoose;

// Dato para almacenar los usuarios
const UsuarioSchema = new Schema ({
    nombreEmpleado: { type: String, require: true },
    email: { type: String, require: true },
    area: { type: String, require: true },
    usuario: { type: String, require: true },
    contraseña: { type: String, require: true },
});

module.exports = mongoose.model('usuario', UsuarioSchema);