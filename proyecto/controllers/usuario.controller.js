const Usuario = require('../models/usuario');

// Crear usuario
exports.crearUsuario = async (req, res) => {
    const { nombreEmpleado, email, area, usuario, contraseña } = req.body;
    try {
        const nuevoUsuario = new Usuario({
            nombreEmpleado, email, area, usuario, contraseña
        });
        await nuevoUsuario.save();
        res.status(201).json({
            message: `Usuario ${nuevoUsuario} creado correctamente`//prueba
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el usuario'
        });
    }    
};

// Consultar usuarios
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: 'Error al consultar los usarios'
        });
    }
};

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status().json({
            message: 'Error al actualizar el usuario'
        });
    }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: 'Usuario eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el usuario'
        });
    }
};
