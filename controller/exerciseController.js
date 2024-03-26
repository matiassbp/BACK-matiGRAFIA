const { Exercise } = require('../models');

async function getExercises(req, res) {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ejercicios' });
  }
}

async function saveExerciseText(req, res) {
  try {
    // código de guardar ejercicio aquí...
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el texto' });
  }
}

module.exports = { getExercises, saveExerciseText };
