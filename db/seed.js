const Question = require('../models/Question');
const mongoose = require('mongoose');

// const { connectDB } = require('./setup');

// Establish the MongoDB connection
// connectDB();

const questionsData = [
  { type: "multiple", difficulty: "hard", question: "The biggest distinction between a eukaryotic cell and a prokaryotic cell is:", correct_answer: "The presence or absence of a nucleus", incorrect_answer1: "The overall size", incorrect_answer2: "The presence or absence of certain organelles", incorrect_answer3: "The mode of reproduction" },
  { type: "multiple", difficulty: "easy", question: "trial", correct_answer: "trialanswer", incorrect_answer1: "Trialanswerwrong", incorrect_answer2: "Trialanswer2", incorrect_answer3: "trialanswer3" }
];


const seedQuestions = async () => {
  try {
    await Question.insertMany(questionsData);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
    console.log('Connection Closed');
  }
};

module.exports = { Quiz: seedQuestions };
