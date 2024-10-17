const Cliente = require('../models/cliente');

// Crear un cliente nuevo
exports.crearCliente = async (req, res) => {
    const { nombre, direccion, ciudad, sucursal, zona, telefono, email } = req.body;
    try {
        const nuevoCliente = new Cliente({
            nombre, direccion, ciudad, sucursal, zona, telefono, email
        });
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);        
    } catch (error) {
        res.status(500).json({ message: `Error al crear el cliente ${error}` });
    }
};

// Consultar clientes
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

// Consultar cliente por id
exports.obtenerClienteId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id); 
        if (!cliente) {
            return res.status(404).json({
                message: 'Cliente no encontrado'
            });
        }
        res.json(cliente); 
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el cliente',
            error: error.message 
        });
    }
};

// Actualizar cliente
exports.actualizarCliente = async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(clienteActualizado) {
            return res.status(404).json({
                message: "Clinete no encontrado"
            });
        }
        res.json(clienteActualizado);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el cliente'
        });
    }
};

// Eliminar cliente
exports.eliminarCliente = async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
        if(!clienteEliminado) {
            return res.status(404).json({
                message: "Cliente no encontrado"
            });
        }
        res.json({ message: "Cliente eliminado correctamente"});
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar el Cliente ${error}`
        });
    }
};