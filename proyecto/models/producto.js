const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datos para crear Productos
const ProductoSchema = new Schema ({
    codigo: { type: Number, require: true },
    nombre: { type: String, require: true },
    cantidad: { type: Number, require: true },
    precio: { type: Number, require: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);
