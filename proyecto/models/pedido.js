const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datos para crear pedidos
const PedidosSchema = new Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", require: true },
    numero_pedido: { type: Number, require: true },
    fecha: { type: Date, require: true },
    productos: [{ nombre: String, cantidad: Number, precio: Number }],
    total: { type: Number, require: true },
    estado: { type: String, default: "pendiente"}
});

module.exports = mongoose.model("Pedido", PedidosSchema);
