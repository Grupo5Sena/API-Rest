const mongoose = require('mongoose');
const {Schema} = mongoose;


const PedidosSchema = new Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', require: true },
    products: [{ nombre: String, cantidad: Number, precios: Number }],
    total: { type: Number, require: true },
    estado: { type: String, default: 'pendiente'}
});

module.exports = mongoose.model('Pedido', PedidosSchema);
