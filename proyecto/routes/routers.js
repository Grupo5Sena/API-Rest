const express = require('express')
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const productContrller = require('../controllers/producto.controller');
const pedidoContrller = require('../controllers/pedido.controller');


// Rutas para clientes
router.post('/clientes', clienteController.crearCliente); // Ruta crear cliente
router.get('/clientes', clienteController.obtenerClientes); // Ruta listado de clientes
router.get('/clientes/:id', clienteController.obtenerClienteId), // Ruta cliente por id
router.put('/clientes/:id', clienteController.actualizarCliente); // Ruta Actualizar clientes
router.delete('/clientes/:id', clienteController.eliminarCliente); // Ruta eliminar clientes

// Rutas producto (inventario)
router.post('/productos', productContrller.crearProducto); // Ruta crear Productos
router.get('/productos', productContrller.obtenerProductos); // Ruta listado de productos
router.put('/productos/:id', productContrller.actualizarProductos); // Ruta actualizar producto
router.delete('/productos/:id', productContrller.eliminarProducto); // Ruta eliminar producto

// Rutas pedidos
router.post('/pedidos', pedidoContrller.crearPedido); // Ruta crear pedido
router.get('/pedidos', pedidoContrller.obtenerPedidos); // Ruta listado de pedidos
router.get('/pedidos/:id', pedidoContrller.obtenerPedidoId); // Ruta ver pedido por id
router.put('/pedidos/:id', pedidoContrller.actualizarPedido); // Ruta actualizar pedido
router.delete('/pedidos/:id', pedidoContrller.eliminarPedido); // Ruta eliminar pedido


module.exports = router;