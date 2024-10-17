const OrdenCompra = require('../models/ordencompra');
const Proveedor = require('../models/proveedor');

// Crear orden de compra
exports.crearOrdenCompra = async (req, res) => {
    const  { proveedor, numeroOC, fecha, productos, total } = req.body;
    try {
        // Verificar si el proveedor existe
        const proveedorExistente = await Proveedor.findById(proveedor);
        if (!proveedorExistente) {
            return res.status(404).json({
                message: 'Proveedor no encontrado'
            });
        }
        // crear la orden de compra
        const nuevaOrdenCompra = new OrdenCompra({
            proveedor,
            numeroOC,
            fecha,
            productos,
            total
        });
        await nuevaOrdenCompra.save();
        res.status(201).json(nuevaOrdenCompra);
    } catch (error) {
        res.status(500).json({
            message: `Error al crear la orden de compra: ${error}`
        });
    }
};

// Consultar orden de compra
exports.ontenerOrdenCompra = async (req, res) => {
    try {
        const ordenesCompra = await OrdenCompra.find();
        res.json(ordenesCompra);
    } catch (error) {
        res.status(500).json({
            message: `Error la consultar la orden de compra ${error}`
        });
    }
};

// Acutalizar orden de compra
exports.actualizarOrdenCompra = async (req, res) => {
    try {
        const ordenCompraActualizada = await OrdenCompra.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!ordenCompraActualizada) {
            return res.status(404).json({
                message: "Orden de compora no encontrada"
            });
        }
        res.json(ordenCompraActualizada);       
    } catch (error) {
        res.status(500).json({
            message: `Error al acutalizar la orden de compra ${error}`
        });
    }
};

// Eliminar orden de compra
exports.eliminarOrdenCompra = async (req, res) => {
    try {
        const ordenCompraEliminada = await OrdenCompra.findByIdAndDelete(req.params.id);
        if (!ordenCompraEliminada) {
            return res.status(404).json({
                message: 'Orden de compra no encontrado'
            });
        }
        res.json({ message: 'Orden de compra eliminada correctamente' });
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar la orden de compra ${error}`
        });
    }
};
