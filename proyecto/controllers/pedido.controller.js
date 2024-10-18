const Pedido = require('../models/pedido');
const Cliente = require('../models/cliente');

// Crear un nuevo pedido
exports.crearPedido = async (req, res) => {
    const { cliente, numero_pedido, productos, total } = req.body;
    try {
        // Verifica si el cliente existe
        const clienteExistente = await Cliente.findById(cliente);
        if (!clienteExistente) {
            return res.status(404).json({
                message: 'Cliente no encontrado'
            });
        }

        // Crear el nuevo pedido
        const nuevoPedido = new Pedido({
            cliente, // Cliente ID
            numero_pedido,
            productos,
            total,
            estado: "Pendiente" // Estado inicial del pedido
        });    
        await nuevoPedido.save();
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(500).json({
            message: `Error al crear el pedido: ${error.message}`
        });
    }
};

// Consultar todos los pedidos
exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate("cliente"); // Obtiene pedidos y detalles de clientes
        res.json(pedidos); 
    } catch (error) {
        res.status(500).json({
            message: `Error al obtener los pedidos ${error.message}`
        });
    }
};

// Consultar un pedido por ID
exports.obtenerPedidoId = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id).populate("cliente"); // Detalles del cliente incluido
        if (!pedido) {
            return res.status(404).json({
                message: 'Pedido no encontrado'
            });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({
            message: `Error al obtener el pedido ${error.message}`
        });
    }
};

// Actualizar un pedido por ID
exports.actualizarPedido = async (req, res) => {
    try {
        const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pedidoActualizado) {
            return res.status(404).json({
                message: 'Pedido no encontrado'
            });
        }
        res.json(pedidoActualizado);
    } catch (error) {
        res.status(500).json({
            message: `Error al actualizar el pedido ${error.message}`
        });
    }
};

// Eliminar un pedido por ID
exports.eliminarPedido = async (req, res) => {
    try {
        const pedidoEliminar = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedidoEliminar) {
            return res.status(404).json({
                message: 'Pedido no encontrado'
            });
        }
        res.json({ message: 'Pedido eliminado correctamente' });
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar el pedido ${error.message}`
        });
    }
};