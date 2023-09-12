const Quiz = require("../models/Quiz");

async function index(req, res) {
  try {
    const quizzes = await Quiz.getAll();
    console.log(quizzes);
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const quiz = await Quiz.findById(id);
    res.send(quiz);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}

async function create(req, res) {
  try {
    if (!req.body.quiz && !req.body.answer) {
      throw new Error("You need a Quiz and answer to create quiz.");
    }
    const newQuiz = await Quiz.create(req.body);
    res.status(201).send(newQuiz);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
}

async function update(req, res) {
  // if (req.body._id) {
  //     res.status(422).send({error: "you need to specify which quiz you want to update"})
  // }
  try {
    const id = paraseInt(req.params.id);
    const data = req.body;
    const quizToUpdate = await Quiz.findById(id);
    const updatedQuiz = await quizToUpdate.update(data);
    res.send(updatedQuiz);
  } catch (err) {
    res.send(404).send({ error: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
};
