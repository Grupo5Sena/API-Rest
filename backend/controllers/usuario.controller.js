const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const SECRET_KEY = "supersecreto123";

// Autenticación de usuarios
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar usuario por nombre de usuario
        const usuario = await Usuario.findOne({ username });
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Verificar la contraseña
        const isPasswordValid = await bcrypt.compare(password, usuario.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        // Generar un token JWT
        const token = jwt.sign(
            { id: usuario._id, username: usuario.username, area: usuario.area }, 
            SECRET_KEY, 
            { expiresIn: '1h' } // El token expira en 1 hora
        );

        res.status(200).json({ message: "Login exitoso", token });
    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};



// Crear usuario
exports.crearUsuario = async (req, res) => {
    const { nombre, email, area, username, password } = req.body;

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            area,
            username,
            password: hashedPassword,
        });

        await nuevoUsuario.save();
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ message: "Error en el servidor" });
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
        if(!usuarioActualizado) {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }
        res.json(usuarioActualizado);
    } catch (error) {
        res.status().json({
            message: `Error al actualizar el usuario ${error}`
        });
    }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if(!usuarioEliminado) {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }
        res.json({ message: "Usuario eliminado correctamente"});
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar el usuario ${error}`
        });
    }
};
