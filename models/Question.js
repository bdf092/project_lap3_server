const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: Number,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answer1: String,
  incorrect_answer2: String,
  incorrect_answer3: String,
});

// Define the 'getAll' method as a static method on the schema
questionSchema.statics.getAll = async function () {
  try {
    const questions = await this.find();
    return questions;
  } catch (error) {
    throw new Error('Error fetching questions: ' + error.message);
  }
};

// Define the 'findById' method as a static method on the schema
questionSchema.statics.findById = async function (id) {
  try {
    const question = await this.findOne({ id });
    if (!question) {
      throw new Error('Question not found');
    }
    return question;
  } catch (error) {
    throw new Error('Error finding question: ' + error.message);
  }
};

questionSchema.statics.create = async function (data) {
  try {
  const { question, correct_answer } = data

    if (!question || !correct_answer) {
        throw new Error('You need a question and answer to create quiz.')
    }
    const newQuestion = new this({ question, correct_answer })
    await newQuestion.save();
    return newQuestion
  } catch (error) {
    throw new Error(error.message)
  }
}

questionSchema.statics.update = async function(data) {
  const { question, correct_answer } = data
  const findQuestion = await this.findOne({ id });
  if (findQuestion) {
    if (findQuestion.question) findQuestion.question = question
    if (findQuestion.correct_answer) findQuestion.correct_answer = correct_answer
    return new this
  }
}

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
