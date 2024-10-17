const Proveedor = require('../models/proveedor');

// Crear proveedor
exports.crearProveedor = async (req, res) => {
    const { nombre, direccion, ciudad, telefono, email, fecha } = req.body;
    try {
        const  nuevoProveedor = new Proveedor ({
            nombre, direccion, ciudad, telefono, email, fecha
        }); 
        await nuevoProveedor.save();
        return res.status(201).json(nuevoProveedor);  
    } catch (error) {
        res.status(500).json({
            message: `Error al crea el proveedor ${error}`
        });
    }
};

// COnsultar porveedores
exports.obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({
            message: `Error al consultar los proveedores ${error}`
        });
    }
};


// Actulaizar proveedor
exports.actualizarProveedor = async (req, res) => {
    try {
        const proveedorActualizado = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { now: true });
        if(proveedorActualizado) {
            return res.status(404).json({
                message: "Proveedor no encontrado"
            });
        }
        res.json(proveedorActualizado);
    } catch (error) {
        res.status(500).json({
            message: `Error al actializar el proveedor ${error}`
        });
    }
};

// Eliminar proveedor
exports.eliminarProveedor = async (req, res) => {
    try {
        const proveedorEliminado = await Proveedor.findByIdAndDelete(req.params.id);
        if(!proveedorEliminado) {
            return res.status(404).json({
                message: "Proveedor no encontrado"
            });
        }
        res.json({ message: "Proveedor eliminado correctamente"});
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar el proveedor ${error}`
        });
    }
};