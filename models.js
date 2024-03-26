//models.js
const mongoose = require('mongoose');

// Modelo de usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Modelo de ejercicio de mecanografía
const exerciseSchema = new mongoose.Schema({
  text: { type: String, required: true }
}, { timestamps: true });


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = { User, Exercise };
