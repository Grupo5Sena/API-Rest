const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datos para orden de compra
const OrdenCompraSchema = new Schema ({
    proveedor: { type: mongoose.Schema.ObjectId, ref: "Proveedor", require: true },
    numeroOC: { type: String, require: true },
    fecha: { type: Date, require: true },
    productos: [{ nombre: String, cantidad: Number, precio: Number }],
    total: { type: Number, require: true }
});


module.exports = mongoose.model('Ordencompra', OrdenCompraSchema);