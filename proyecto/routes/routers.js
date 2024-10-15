const express = require('express')
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const productContrller = require('../controllers/producto.controller')

// Rutas para clientes
router.post('/clientes', clienteController.crearCliente); // Ruta crear cliente
router.get('/clientes', clienteController.obtenerClientes); // Ruta listado de clientes
router.put('/clientes:/id', clienteController.actualizarCliente); // Ruta Actualizar clientes
router.delete('/clientes/:id', clienteController.eliminarCliente); // Ruta eliminar clientes

// Rutas producto (inventario)
router.post('/productos', productContrller.crearProducto);
router.get('/productos', productContrller.obtenerProductos);
router.put('/productos/:id', productContrller.actualizarProductos);
router.delete('/productos/:id', productContrller.eliminarProducto);


module.exports = router;