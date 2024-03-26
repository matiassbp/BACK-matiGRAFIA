const express = require('express');
const router = express.Router();
const { getExercises, saveExerciseText } = require('../controller/exerciseController');

router.get('/exercises', getExercises);
router.post('/save-text', saveExerciseText);

module.exports = router;
