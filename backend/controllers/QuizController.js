const Quiz = require('../models/quiz.model');
const Question = require('../models/question.model');
const Answer = require('../models/answer.model');

exports.createQuiz = (req, res) => {
  /* STRUCTURE */
  /* {
    quiz: {
      name: <Quiz Title>,
      questions: [{
        question: <Question>,
        answers: [{
          answer: <Answer>,
          correct: <true/false> // Have check only one can be true
        }]
      }]
    }
  } */

  var quiz_obj = req.body.quiz;

  var items_to_save = [];
  var newQuiz = new Quiz({ name: quiz_obj.name, questions: [] });
  for (var q of quiz_obj.questions) {
    var question = new Question({quiz_id:newQuiz, question: q.question, answers:[]});
    for (var a of q.answers) {
      var answer = new Answer({quiz_id:newQuiz, question_id:question, answer:a.answer, correct:a.correct});
      question.answers.push(answer)
      items_to_save.push(answer);
    }
    items_to_save.push(question)
    newQuiz.questions.push(question);
  }
  items_to_save.push(newQuiz);
  Promise.all(items_to_save.map((item) => {
    item.save();
  }))
    .then(values => {
      res.json({error: false, msg: "New quiz successfully created", quiz:newQuiz})
    })
    .catch(err => {
      res.json({error: true, msg: "Something went wrong!"})
    })
}

exports.getQuiz = (req, res) => {
  res.json(`QUIZ ${req.params.quiz_id} RETRIEVED`);
}

exports.updateQuiz = (req, res) => {
  res.json(`QUIZ ${req.params.quiz_id} UPDATED`);
}

exports.deleteQuiz = (req, res) => {
  res.json(`QUIZ ${req.params.quiz_id} DELETED`);
}
