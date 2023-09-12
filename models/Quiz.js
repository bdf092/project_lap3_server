const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({

  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answer1: String,
  incorrect_answer2: String,
  incorrect_answer3: String,
});

// Define the 'getAll' method as a static method on the schema
quizSchema.statics.getAll = async function () {
  try {
    const quizzes = await this.find();
    console.log(quizzes)
    return quizzes;
  } catch (error) {
    throw new Error("Error fetching quizzes: " + error.message);
  }
};

// Define the 'findById' method as a static method on the schema
quizSchema.statics.findById = async function (id) {
  try {
    const quiz = await this.findOne({ id });
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    return quiz;
  } catch (error) {
    throw new Error("Error finding quiz: " + error.message);
  }
};

quizSchema.statics.create = async function (data) {
  try {
    const { question, correct_answer } = data;

    if (!question || !correct_answer) {
      throw new Error("You need a question and answer to create quiz.");
    }
    const newQuiz = new this({ question, correct_answer });
    await newQuiz.save();
    return newQuiz;
  } catch (error) {
    throw new Error(error.message);
  }
};

quizSchema.statics.update = async function (data) {
  const { question, correct_answer } = data;
  const findQuizz = await this.findOne({ id });
  if (findQuizz) {
    if (findQuizz.question) findQuizz.question = question;
    if (findQuizz.correct_answer)
      findQuizz.correct_answer = correct_answer;
    return new this();
  }
};

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
