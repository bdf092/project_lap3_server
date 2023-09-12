const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  type: String,
  difficulty: String,
  question: String,
  answer_choices: [String], 
  correct_answer: String, 
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

quizSchema.statics.getAll = async function () {
  try {
    const quizzes = await this.find();
    return quizzes;
  } catch (error) {
    throw new Error("Error fetching quizzes: " + error.message);
  }
};

quizSchema.statics.getById = async function (id) {
  try {
    const quiz = await this.findById(id);
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    return quiz;
  } catch (error) {
    throw new Error("Error finding quiz: " + error.message);
  }
};

quizSchema.statics.createQuiz = async function (data) {
  try {
    const newQuiz = new this(data);
    await newQuiz.save();
    return newQuiz;
  } catch (error) {
    throw new Error("Error creating quiz: " + error.message);
  }
};


quizSchema.statics.updateQuiz = async function (id, data) {
  try {
    const quizToUpdate = await this.findById(id);

    if (!quizToUpdate) {
      throw new Error("Quiz not found");
    }

    if (data.title) quizToUpdate.title = data.title;
    if (data.questions) quizToUpdate.questions = data.questions;

    await quizToUpdate.save();
    return quizToUpdate;
  } catch (error) {
    throw new Error("Error updating quiz: " + error.message);
  }
};

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
