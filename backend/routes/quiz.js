const express = require('express');
const quizRouter = express.Router();
const quizController = require('../controllers/QuizController');

// Create Quiz Route
quizRouter.post('/create', quizController.createQuiz)

// Read Quiz Route
quizRouter.get('/:quiz_id', quizController.getQuiz)

// Update Quiz Route
quizRouter.put('/:quiz_id', quizController.updateQuiz)

// Delete Quiz Route
quizRouter.delete('/:quiz_id', quizController.deleteQuiz)

module.exports = quizRouter;