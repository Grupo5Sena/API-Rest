const Empleado = require('../models/empleado');

// Crear empleado
exports.crearEmpleado = async (req, res) => {
    const { nombre, direccion, ciudad, telefono, Area, cargo, fechaIngreso } = req.body;
    try {
        const nuevoEmpleado = new Empleado ({
            nombre, 
            direccion, 
            ciudad, 
            telefono, 
            Area, 
            cargo, 
            fechaIngreso
        });
        await nuevoEmpleado.save();
        return res.status(201).json(nuevoEmpleado);
    } catch (error) {
        res.status(500).json({
            message: `Error al crear el empleado ${error}`
        });
    }
};

// Consultar empleados
exports.obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados)
    } catch (error) {
        res.status(500).json({
            message: `Error al consultar los empleados ${error}`
        });
    }
};

// Actualizar empleado
exports.actualizarEmplado = async (req, res) => {
    try {
        const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!empleadoActualizado) {
            return res.status(404).json({
                message: "Empleado no encontrado"
            });
        }
        res.json(empleadoActualizado);
    } catch (error) {
        res.status(500).json({
            message: `Error al actualizar el empleado ${error}`
        });
    }
};

// Eliminar empleado
exports.eliminarEmpleado = async (req, res) => {
    try {
        const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
        if(!empleadoEliminado) {
            return res.status(404).json({
                message: "Empleado no encontrado"
            });
        }
        res.json({ message: "Empleado eliminado correctamente" });
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar el empleado ${error}`
        });
    }
};
