const bcrypt = require('bcrypt');
const { User } = require('../models');

async function registerUser(req, res) {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}

async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        // Buscar usuario en la base de datos
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }
        // Verificar la contraseña hasheada
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }
        // Si las credenciales son válidas, enviar una respuesta de éxito
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}



const ping = (req, res) => {
    res.send('pong');
};



module.exports = { registerUser, loginUser, ping };
