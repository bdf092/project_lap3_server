const Question = require('../models/Question');
const { connectDB } = require('./setup');

// Establish the MongoDB connection
connectDB();

// Insert data into MongoDB
const questionsData = [
  { type: "multiple", difficulty: "hard", question: "The biggest distinction between a eukaryotic cell and a prokaryotic cell is:", correct_answer: "The presence or absence of a nucleus", incorrect_answer1: "The overall size", incorrect_answer2: "The presence or absence of certain organelles", incorrect_answer3: "The mode of reproduction" },
  { type: "multiple", difficulty: "easy", question: "trial", correct_answer: "trialanswer", incorrect_answer1: "Trialanswerwrong", incorrect_answer2: "Trialanswer2", incorrect_answer3: "trialanswer3" },
  { type: "multiple", difficulty: "easy", question: "trial", correct_answer: "trialanswer", incorrect_answer1: "Trialanswerwrong", incorrect_answer2: "Trialanswer2", incorrect_answer3: "trialanswer3" }
];

// Create documents using the Question model and insert them into the collection
Question.create(questionsData)
  .then(() => {
    console.log('Data inserted successfully.');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });
