const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }]
}, {timestamps: true});

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;