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

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
