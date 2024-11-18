const mongoose = require('mongoose');
const {Schema} = mongoose;

// Datos para crear facturas
const FacturaSchema = new Schema({
    pedido: { type: mongoose.Schema.Types.ObjectId, ref: "Pedido", require: true }, // Referencia al pedido
    numero_factura: { type: Number, require: true, unique: true }, // Número único para la factura
    fecha_emision: { type: Date, default: Date.now }, // Fecha de emisión de la factura
    metodo_pago: { type: String, require: true }, // Método de pago (tarjeta, efectivo, etc.)
    total: { type: Number, require: true }, // Total facturado, puede ser el mismo que en el pedido
    estado: { type: String, default: "Pendiente" } // Estado de la factura
});

module.exports = mongoose.model("Factura", FacturaSchema);