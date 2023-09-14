const Quiz = require("../models/Quiz");

async function index(req, res) {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const quiz = await Quiz.findById(id);
    res.status(200).json(quiz);
    console.log('Debug Barbara')
    console.log(quiz)
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { title, questions } = req.body;
    const hasCorrectAnswer = questions.some((question) => question.correct_answer);
    if (!title || !questions || !hasCorrectAnswer) {
      return res.status(422).send({ error: "You need a title, questions, and at least one question with a correct answer to create a quiz." });
    }
    const newQuiz = await Quiz.create(req.body);
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
}

async function update(req, res) {
  try {

    
    const id = req.params.id;
    const data = req.body;
    
    const quizToUpdate = await Quiz.findById(id);

    console.log(quizToUpdate)
   
    if (!quizToUpdate) {
      return res.status(404).send({ error: "Quiz not found" });
    }
    
    if (data.title) quizToUpdate.title = data.title;

    if (data.questions) quizToUpdate.questions = data.questions;
    

   

    await quizToUpdate.save();

    console.log(quizToUpdate)
    res.status(200).json(quizToUpdate);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
};
