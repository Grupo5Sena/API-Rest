const Cliente = require('../models/cliente');

// Crear un cliente nuevo
exports.crearCliente = async (req, res) => {
    const { nombre, direccion, ciudad, susursal, zona, telefono, email } = req.body;
    try {
        const nuevoCliente = new Cliente({
            nombre, direccion, ciudad, susursal, zona, telefono, email
        });
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);        
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente' });
    }
};

// Obtener listado de clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los clientes'
        });
    }
};

// Actualizar cliente
exports.actualizarCliente = async (req, res) => {
    try {
        const clieteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(clieteActualizado);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el cliente'
        });
    }
};

// Eliminar cliente
exports.eliminarCliente = async (req, res) => {
    try {
        await Cliente.findOneAndDelete(req.params.id);
        res.json({
            message: 'Cliente eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el cliente'
        });
    }
};