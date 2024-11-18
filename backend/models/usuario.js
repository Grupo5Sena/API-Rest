const mongoose = require('mongoose');
const {Schema} = mongoose;

// Dato para almacenar los usuarios
const UsuarioSchema = new Schema ({
    nombre: { type: String, require: true },
    email: { type: String, require: true },
    area: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
});

module.exports = mongoose.model('usuario', UsuarioSchema);