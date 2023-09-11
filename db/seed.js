let db = connect("localhost:27017/revision_app");

db.quizzes.insertMany([
  {
    title: "Quiz 1",
    questions: [
      {
        type: "multiple",
        difficulty: "hard",
        question:
          "The biggest distinction between a eukaryotic cell and a prokaryotic cell is:",
        correct_answer: "The presence or absence of a nucleus",
        incorrect_answer1: "The overall size",
        incorrect_answer2: "The presence or absence of certain organelles",
        incorrect_answer3: "The mode of reproduction",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which one of these terms describes the lowest member of the food chain?",
        correct_answer: "Producer",
        incorrect_answer1: "Digester",
        incorrect_answer2: "Primary",
        incorrect_answer3: "Herbivore ",
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "Domain, Kingdom and Phylum are all examples of what?",
        correct_answer: "Taxonomic Rank",
        incorrect_answer1: "Class",
        incorrect_answer2: "Classification level",
        incorrect_answer3: "Biological classification",
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "Which scientist was the first to describe classical conditioning after experimenting on his dogs?",
        correct_answer: "Ivan Pavlov",
        incorrect_answer1: "Mikhail Lomonosov",
        incorrect_answer2: "Ignaz Semmelweis",
        incorrect_answer3: "Dmitri Mendeleev",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Ornithology is the study of what?",
        correct_answer: "Birds",
        incorrect_answer1: "Fish",
        incorrect_answer2: "Reptiles",
        incorrect_answer3: "Amphibians",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Why do most biologists argue that viruses are not living organisms?",
        correct_answer: "Because they cannot reproduce without a host",
        incorrect_answer1: "Because they are not sentient",
        incorrect_answer2: "Because they do not need to feed to survive",
        incorrect_answer3: "Because they do not excrete",
      },
      {
        type: "multiple",
        difficulty: "hard",
        question: "Which of the following fish are poisonous?",
        correct_answer: "Stonefish",
        incorrect_answer1: "Grouper",
        incorrect_answer2: "Surgeonfish",
        incorrect_answer3: "Piranha",
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "What do eukaryotic organisms have that prokaryotic organisms lack?",
        correct_answer: "A nucleus ",
        incorrect_answer1: "Skin",
        incorrect_answer2: "A cell wall",
        incorrect_answer3: "Chloroplast",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Karl Landsteiner was awarded the 1930 Nobel Prize in biology for which discovery?",
        correct_answer: "Blood groups",
        incorrect_answer1: "Insulin",
        incorrect_answer2: "Stem cells",
        incorrect_answer3: "Homo Erectus",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following diseases are caused by bacterial infection?",
        correct_answer: "Lyme Disease",
        incorrect_answer1: "Chickenpox",
        incorrect_answer2: "Giardia",
        incorrect_answer3: "Cystic fibrosis",
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
        incorrect_answer1: "Filtering blood",
        incorrect_answer2: "Digesting food",
        incorrect_answer3: "Producing hormones",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "Which organelle is responsible for protein synthesis in a cell?",
        correct_answer: "Endoplasmic reticulum",
        incorrect_answer1: "Mitochondria",
        incorrect_answer2: "Nucleus",
        incorrect_answer3: "Golgi apparatus",
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        correct_answer: "Carbon dioxide",
        incorrect_answer1: "Oxygen",
        incorrect_answer2: "Nitrogen",
        incorrect_answer3: "Methane",
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "What is the largest organ in the human body?",
        correct_answer: "Skin",
        incorrect_answer1: "Brain",
        incorrect_answer2: "Liver",
        incorrect_answer3: "Heart",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Which process is responsible for the release of energy from glucose in cells?",
        correct_answer: "Respiration",
        incorrect_answer1: "Fermentation",
        incorrect_answer2: "Photosynthesis",
        incorrect_answer3: "Digestion",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the main function of the ribosomes in a cell?",
        correct_answer: "Protein synthesis",
        incorrect_answer1: "Energy production",
        incorrect_answer2: "Storage of genetic material",
        incorrect_answer3: "Lipid synthesis",
      },
      {
        type: "multiple",
        difficulty: "hard",
        question: "What is the powerhouse of the cell?",
        correct_answer: "Mitochondria",
        incorrect_answer1: "Nucleus",
        incorrect_answer2: "Ribosome",
        incorrect_answer3: "Golgi apparatus",
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "What do eukaryotic organisms have that prokaryotic organisms lack?",
        correct_answer: "A nucleus ",
        incorrect_answer1: "Skin",
        incorrect_answer2: "A cell wall",
        incorrect_answer3: "Chloroplast",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is NOT a function of the skeletal system?",
        correct_answer: "Blood circulation",
        incorrect_answer1: "Protection of internal organs",
        incorrect_answer2: "Support for the body",
        incorrect_answer3: "Storage of minerals",
      },
      {
        type: "multiple",
        difficulty: "easy",
        question: "Which blood type is considered the universal donor?",
        correct_answer: "O",
        incorrect_answer1: "A",
        incorrect_answer2: "AB",
        incorrect_answer3: "A",
      },
    ],
  },
]);


db.users.insertMany([
  { username: 'bcollin', email: "bobcollin@hotmail.com", password: "endlessendless456"},
  { username: 'lucadan', email: "lucadanello176@gmail.com", password: "sjdhsffsoi3428"},
  { username: 'linda87', email: "linda827@yahoo.com", password: "alsaasof712"}

])
