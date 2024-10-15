const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema ({
    nombre: { type: String, require: true },
    cantidad: { type: Number, require: true },
    precio: { type: Number, require: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);
