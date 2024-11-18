const Factura = require('../models/factura');
const Pedido = require('../models/pedido')

// Crear factura
exports.crearFactura = async (req, res) => {
    const { pedido, numero_factura, fecha_emision, metodo_pago} = req.body;
    try {
        // Verificar si la orden de compra
        const pedidoExiste = await Pedido.findById(pedido);
        if(!pedidoExiste) {
            return res.status(404).json({
                message: "Pedido no encontrado"
            });
        }
        // Crear la factura
        const nuevaFactura = new Factura ({
            pedido, 
            numero_factura, 
            fecha_emision, 
            metodo_pago, 
            total: pedido.total, // Total facturado se toma del pedido
            estado: 'Pendiente' // Estado inicial de la factura
        });
        await nuevaFactura.save();
        res.status(201).json(nuevaFactura);
    } catch (error) {
        res.status(500).json({
            message: `Error al crear la factura ${error}`
        });
    }
};


// Consultar factura
exports.obtenerFacturas = async (req, res) => {
    try {
        const facturasObtenidas = await Factura.find().populate("pedido");
        res.json(facturasObtenidas);
    } catch (error) {
        res.status(500).json({
            message: `Error al consultar las facturas ${error}`
        });
    }
};

// Actualizar factura
exports.actualizarFacturas = async (req, res) => {
    try {
        const facturaActualizada = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!facturaActualizada) {
            return res.status(404).json({
                message: "Factura no encontrada"
            });
        }
        res.json(facturaActualizada);
    } catch (error) {
        res.status(500).json({
            message: `Error al actualizar la factura ${error}`
        });
    }
};

// Eliminar factura
exports.eliminarFactura = async (req, res) => {
    try {
        const facturaEliminada = await Factura.findByIdAndDelete(req.params.id);
        if(!facturaEliminada) {
            return res.status(404).jason({
                message: "Factura no encontrada"
            });
        }
        res.json({ message: "Factura eliminada correctamente"});

    } catch (error) {
        res.status(500).jason({
            message: `Error al eliminar la factura ${error}`
        });
    }
};

