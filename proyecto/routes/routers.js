const express = require('express')
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const productContrller = require('../controllers/producto.controller');
const pedidoContrller = require('../controllers/pedido.controller');
const usuarioController = require('../controllers/usuario.controller');
const empleadoContrller = require('../controllers/empledo.controller');
const facturaController = require('../controllers/factura.controller');
const ordenCompraController = require('../controllers/ordencompra.controller');
const proveedorController = require('../controllers/proveedor.controller');


// Rutas para clientes
router.post('/clientes', clienteController.crearCliente); // Ruta crear cliente
router.get('/clientes', clienteController.obtenerClientes); // Ruta consultar clientes
router.get('/clientes/:id', clienteController.obtenerClienteId), // Ruta consultar cliente por id
router.put('/clientes/:id', clienteController.actualizarCliente); // Ruta Actualizar clientes
router.delete('/clientes/:id', clienteController.eliminarCliente); // Ruta eliminar clientes

// Rutas producto (inventario)
router.post('/productos', productContrller.crearProducto); // Ruta crear Productos
router.get('/productos', productContrller.obtenerProductos); // Ruta consultar productos
router.put('/productos/:id', productContrller.actualizarProductos); // Ruta actualizar producto
router.delete('/productos/:id', productContrller.eliminarProducto); // Ruta eliminar producto

// Rutas pedidos
router.post('/pedidos', pedidoContrller.crearPedido); // Ruta crear pedido
router.get('/pedidos', pedidoContrller.obtenerPedidos); // Ruta consultar pedidos
router.get('/pedidos/:id', pedidoContrller.obtenerPedidoId); // Ruta consultar pedido por id
router.put('/pedidos/:id', pedidoContrller.actualizarPedido); // Ruta actualizar pedido
router.delete('/pedidos/:id', pedidoContrller.eliminarPedido); // Ruta eliminar pedido


// Rutas usuarios
router.post('/usuarios', usuarioController.crearUsuario); // Ruta crear usuario
router.get('/usuarios', usuarioController.obtenerUsuarios); // Ruta consultar usuario
router.put('/usuarios/:id', usuarioController.actualizarUsuario); // Ruta actualizar usuario
router.delete('/usuarios/:id', usuarioController.eliminarUsuario); // Ruta eliminar usuario

// Rutas empleados
router.post('/empleado', empleadoContrller.crearEmpleado); // Ruta crear empleados
router.get('/empleado', empleadoContrller.obtenerEmpleados); // Ruta consultar empleados
router.put('/empleado/:id', empleadoContrller.actualizarEmplado); // Ruta Actualizar empleados
router.delete('/empleado/:id', empleadoContrller.eliminarEmpleado); // Ruta eliminar empleados

// Rutas facturas
router.post('/factura', facturaController.crearFactura); // Ruta crear facturas
router.get('/factura', facturaController.obtenerFacturas); // Ruta consultar facturas
router.put('/factura/:id', facturaController.actualizarFacturas); // Ruta Actualizar facturas
router.delete('/factura/:id', facturaController.eliminarFactura); // Ruta eliminar facturas

// Rutas ordenes de compra
router.post('/ordencompra', ordenCompraController.crearOrdenCompra); // Ruta crear ordenes de compra
router.get('/ordencompra', ordenCompraController.ontenerOrdenCompra); // Ruta consultar ordenes de compra
router.put('/ordencompra/:id', ordenCompraController.actualizarOrdenCompra); // Ruta Actualizar ordenes de compra
router.delete('/ordencompra/:id', ordenCompraController.eliminarOrdenCompra); // Ruta eliminar ordenes de compra

// Rutas proveedores
router.post('/proveedor', proveedorController.crearProveedor); // Ruta crear proveedores
router.get('/proveedor', proveedorController.obtenerProveedores); // Ruta consultar proveedores
router.put('/proveedor/:id', proveedorController.actualizarProveedor); // Ruta Actualizar proveedores
router.delete('/proveedor/:id', proveedorController.eliminarProveedor); // Ruta eliminar proveedores

module.exports = router;