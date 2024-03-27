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
      console.log('Texto recibido:', text); // Verifica si el texto se recibe correctamente
      let exercise = new Exercise({ text });
      console.log('Nuevo ejercicio:', exercise); // Verifica el nuevo ejercicio antes de guardarlo
      await exercise.save();
      console.log('Ejercicio guardado exitosamente'); // Verifica si el ejercicio se guarda correctamente
      res.status(201).json({ message: 'Texto guardado exitosamente' });
    } catch (error) {
      console.error('Error al guardar el texto:', error);
      res.status(500).json({ error: 'Error al guardar el texto' });
    }
  }
  
module.exports = { getExercises, saveExerciseText };
