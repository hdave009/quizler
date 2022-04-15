const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  },
  correct: {
    type: Boolean,
    required: true
  }
}, {timestamps: true});

const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;