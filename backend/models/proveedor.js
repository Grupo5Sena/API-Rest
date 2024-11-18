const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datro para crear proveedores
const ProveedorSchema = new Schema ({
    nombre: { type: String, require: true },
    direccion: { type: String, require: true },
    ciudad: { type: String, require: true },
    telefono: { type: String, require: true },
    email: { type: String, require: true },
    fecha: { type: Date, require: true }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);