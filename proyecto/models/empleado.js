const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datos para crear empledos
const EmpleadoSchema = new Schema ({
    nombre: { type: String, require: true },
    direccion: { type: String, require: true },
    ciudad: { type: String, require: true },
    telefono: { type: String, require: true },
    Area: { type: String, require: true },
    cargo: { type: String, require: true },
    fechaIngreso: { type: Date, require: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);