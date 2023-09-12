const Quiz = require("../models/Quiz");
const mongoose = require("mongoose");
require("dotenv").config()

const quizData = [
  {
    title: "Quiz 1",
    questions: [
      {
        type: "multiple",
        difficulty: "hard",
        question:
          "The biggest distinction between a eukaryotic cell and a prokaryotic cell is:",
        correct_answer: "The presence or absence of a nucleus",
        answer_choices: [
          "The overall size",
          "The presence or absence of certain organelles",
          "The mode of reproduction",
          "The presence or absence of a nucleus", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which one of these terms describes the lowest member of the food chain?",
        correct_answer: "Producer",
        answer_choices: [
          "Digester",
          "Primary",
          "Herbivore",
          "Producer", 
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "Domain, Kingdom, and Phylum are all examples of what?",
        correct_answer: "Taxonomic Rank",
        answer_choices: [
          "Class",
          "Classification level",
          "Biological classification",
          "Taxonomic Rank", 
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "Which scientist was the first to describe classical conditioning after experimenting on his dogs?",
        correct_answer: "Ivan Pavlov",
        answer_choices: [
          "Mikhail Lomonosov",
          "Ignaz Semmelweis",
          "Dmitri Mendeleev",
          "Ivan Pavlov", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Ornithology is the study of what?",
        correct_answer: "Birds",
        answer_choices: [
          "Fish",
          "Reptiles",
          "Amphibians",
          "Birds", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Why do most biologists argue that viruses are not living organisms?",
        correct_answer: "Because they cannot reproduce without a host",
        answer_choices: [
          "Because they are not sentient",
          "Because they do not need to feed to survive",
          "Because they do not excrete",
          "Because they cannot reproduce without a host", 
        ],
      },
      {
        type: "multiple",
        difficulty: "hard",
        question: "Which of the following fish are poisonous?",
        correct_answer: "Stonefish",
        answer_choices: [
          "Grouper",
          "Surgeonfish",
          "Piranha",
          "Stonefish", 
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "What do eukaryotic organisms have that prokaryotic organisms lack?",
        correct_answer: "A nucleus",
        answer_choices: [
          "Skin",
          "A cell wall",
          "Chloroplast",
          "A nucleus", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Karl Landsteiner was awarded the 1930 Nobel Prize in biology for which discovery?",
        correct_answer: "Blood groups",
        answer_choices: [
          "Insulin",
          "Stem cells",
          "Homo Erectus",
          "Blood groups", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which of the following diseases are caused by bacterial infection?",
        correct_answer: "Lyme Disease",
        answer_choices: [
          "Chickenpox",
          "Giardia",
          "Cystic fibrosis",
          "Lyme Disease", 
        ],
      },
    ],
  },
  {
    title: "Quiz 2",
    questions: [
      {
        type: "multiple",
        difficulty: "hard",
        question:
          "What is the primary function of the heart in the circulatory system?",
        correct_answer: "Pumping blood",
        answer_choices: [
          "Filtering blood",
          "Digesting food",
          "Producing hormones",
          "Pumping blood", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which organelle is responsible for protein synthesis in a cell?",
        correct_answer: "Endoplasmic reticulum",
        answer_choices: [
          "Mitochondria",
          "Nucleus",
          "Golgi apparatus",
          "Endoplasmic reticulum", 
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "Which gas do plants absorb from the atmosphere during photosynthesis?",
        correct_answer: "Carbon dioxide",
        answer_choices: [
          "Oxygen",
          "Nitrogen",
          "Methane",
          "Carbon dioxide", 
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "What is the largest organ in the human body?",
        correct_answer: "Skin",
        answer_choices: [
          "Brain",
          "Liver",
          "Heart",
          "Skin", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which process is responsible for the release of energy from glucose in cells?",
        correct_answer: "Respiration",
        answer_choices: [
          "Fermentation",
          "Photosynthesis",
          "Digestion",
          "Respiration", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "What is the main function of the ribosomes in a cell?",
        correct_answer: "Protein synthesis",
        answer_choices: [
          "Energy production",
          "Storage of genetic material",
          "Lipid synthesis",
          "Protein synthesis", 
        ],
      },
      {
        type: "multiple",
        difficulty: "hard",
        question: "What is the powerhouse of the cell?",
        correct_answer: "Mitochondria",
        answer_choices: [
          "Nucleus",
          "Ribosome",
          "Golgi apparatus",
          "Mitochondria", 
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "What do eukaryotic organisms have that prokaryotic organisms lack?",
        correct_answer: "A nucleus",
        answer_choices: [
          "Skin",
          "A cell wall",
          "Chloroplast",
          "A nucleus", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which of the following is NOT a function of the skeletal system?",
        correct_answer: "Blood circulation",
        answer_choices: [
          "Protection of internal organs",
          "Support for the body",
          "Storage of minerals",
          "Blood circulation", 
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Which blood type is considered the universal donor?",
        correct_answer: "O",
        answer_choices: [
          "A",
          "AB",
          "A",
          "O", 
        ],
      },
    ],
  },
];


const mongoDBUri = process.env.DB_URI; 
console.log(mongoDBUri)
mongoose
  .connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const clearCollections = async () => {
  try {
    await Quiz.deleteMany({});
    console.log('Collections cleared successfully.');
  } catch (error) {
    console.error('Error clearing collections:', error);
  }
};

const seedQuizzes = async () => {
  try {
    console.log("----------------------------------");
    await Quiz.insertMany(quizData); 
    console.log("Data inserted successfully.");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.connection.close();
    console.log("Connection Closed");
  }
}


clearCollections();
seedQuizzes();


module.exports = { Quiz: seedQuizzes };
