const Producto = require('../models/producto');

// Crear un producto
exports.crearProducto = async (req, res) => {
    const { codigo, nombre, cantidad, precio } = req.body;
    try {
        const nuevoProducto = new Producto({ codigo, nombre, cantidad, precio });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el producto'
        });
    }
};

// Consultar listado de productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los productos'
        });
    }
};

// Actualizar producto
exports.actualizarProductos = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el producto'
        });
    }    
};

// Eliminar producto
exports.eliminarProducto = async (req, res) => {
    try {
        await Producto.findOneAndDelete(req-params.id);
        res.json({
            message: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el producto'
        });
    }
};
