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
      const { text } = req.body;
      const exercise = new Exercise({ text });
      await exercise.save();
      res.status(201).json({ message: 'Texto guardado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al guardar el texto' });
    }
  }
  

module.exports = { getExercises, saveExerciseText };
