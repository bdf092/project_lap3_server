const Quiz = require("../models/Quiz");
const mongoose = require("mongoose");
require("dotenv").config();

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
        answer_choices: ["Digester", "Primary", "Herbivore", "Producer"],
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
        answer_choices: ["Fish", "Reptiles", "Amphibians", "Birds"],
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
        answer_choices: ["Grouper", "Surgeonfish", "Piranha", "Stonefish"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question:
          "What do eukaryotic organisms have that prokaryotic organisms lack?",
        correct_answer: "A nucleus",
        answer_choices: ["Skin", "A cell wall", "Chloroplast", "A nucleus"],
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
        answer_choices: ["Oxygen", "Nitrogen", "Methane", "Carbon dioxide"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        question: "What is the largest organ in the human body?",
        correct_answer: "Skin",
        answer_choices: ["Brain", "Liver", "Heart", "Skin"],
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
        answer_choices: ["Skin", "A cell wall", "Chloroplast", "A nucleus"],
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
        answer_choices: ["A", "AB", "A", "O"],
      },
    ],
  },
  {
    title: "Quiz 3",
    questions: [
      {
        type: "multiple_choice",
        difficulty: "medium",
        question: "Which vitamin is water-soluble as opposed to fat-soluble?",
        correct_answer: "Vitamin C",
        answer_choices: ["Vitamin E", "Vitamin D", "Vitamin A", "Vitamin C"],
      },
      {
        type: "multiple_choice",
        difficulty: "hard",
        question:
          "Which do not reproduce via parthenogenesis (reproduction without fertilization)?",
        correct_answer: "Butterflies",
        answer_choices: ["Aphids", "Honeybees", "Butterflies", "Water fleas"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question: "What is the history of the evolution of a species or group?",
        correct_answer: "Phylogeny",
        answer_choices: ["Phylogeny", "Biology", "Genetics", "Relativity"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Which group of organisms shares certain morphological and physiological characteristics with animals, plants, or both?",
        correct_answer: "Protists",
        answer_choices: ["Mollusks", "Monerans", "Protists", "Jellyfishes"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question: "People get sick from eating salmonella, but what is it?",
        correct_answer: "Bacteria",
        answer_choices: [
          "Bacteria",
          "An industrial chemical",
          "An insect",
          "A fish",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Which continent are the only two species of venomous lizards found on?",
        correct_answer: "North America",
        answer_choices: [
          "Africa",
          "Australia",
          "South America",
          "North America",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "hard",
        question:
          "What are produced in response to foreign substances called antigens?",
        correct_answer: "Antibodies",
        answer_choices: ["Toxins", "Antiglobulin", "Lymphocytes", "Antibodies"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question: "What are the building blocks of proteins?",
        correct_answer: "Carbohydrates",
        answer_choices: [
          "Nucleic acids",
          "Amino acids",
          "Enzymes",
          "Carbohydrates",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Which American biologist popularized sociobiology, the study of the genetic basis of the social behavior of all animals, including humans?",
        correct_answer: "Edward O. Wilson",
        answer_choices: [
          "Jacques Loeb",
          "Rachel Carson",
          "Edward O. Wilson",
          "Carl Richard Moore",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "easy",
        question:
          "What substance acts as a catalyst for biological reactions in living organisms?",
        correct_answer: "Enzyme",
        answer_choices: ["RNA", "Enzyme", "Insulin", "DNA"],
      },
    ],
  },
  {
    title: "Quiz 4",
    questions: [
      {
        type: "multiple_choice",
        difficulty: "medium",
        question: "Which animal is a carnivorous scavenger?",
        correct_answer: "Hyena",
        answer_choices: ["Hyena", "Gaur", "Dolphin", "Elephant"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "In which biological laboratory technique are fragments of tissue from an animal or plant transferred to an artificial environment where they can continue to survive and function?",
        correct_answer: "Tissue culture",
        answer_choices: [
          "Cytogenesis",
          "Cytoplasmic streaming",
          "Fermentation",
          "Tissue culture",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "What is the name of the dormant state in which an animal’s body temperature decreases and heartbeat and breathing rate slow down?",
        correct_answer: "Hibernation",
        answer_choices: [
          "Hidrosis",
          "Sleep apnea",
          "Adolescence",
          "Hibernation",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Some flagellates are animal-like and some are plantlike, but all belong to which group of organisms?",
        correct_answer: "Protozoans",
        answer_choices: ["Protozoans", "Viruses", "Bacteria", "Fungi"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "A scientist comparing the shape of a whale’s flippers to a fish’s fins is engaged in the same specialized branch of biology as the scientist comparing the wings of birds to the wings of bats. What is the name of this biological specialty?",
        correct_answer: "Morphology",
        answer_choices: ["Morphology", "Cytology", "Ethology", "Histology"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Chlorella algae has been studied as a food source because it is rich in which nutrients?",
        correct_answer: "Proteins",
        answer_choices: ["Vitamin D", "Carbohydrates", "Fats", "Proteins"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question: "How many pairs of chromosomes are found in the human body?",
        correct_answer: "23 pairs",
        answer_choices: ["23 pairs", "24 pairs", "22 pairs", "21 pairs"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Which of these amino acids, first isolated from gelatin, is the simplest?",
        correct_answer: "Glycine",
        answer_choices: ["Alanine", "Tryptophan", "Glycine", "Tyrosine"],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "Which American biologist and geneticist deduced that the sex of an individual is determined by a particular chromosome?",
        correct_answer: "Nettie Maria Stevens",
        answer_choices: [
          "A.D. Hershey",
          "Daniel Mazia",
          "Nettie Maria Stevens",
          "Theodor Schwann",
        ],
      },
      {
        type: "multiple_choice",
        difficulty: "medium",
        question:
          "The name of which life-form is derived from the Latin word for “mushroom” but also applies to yeast and mold?",
        correct_answer: "Fungus",
        answer_choices: ["Alga", "Fungus", "Virus", "Protozoan"],
      },
    ],
  },
  // {
  //   title: "Quiz 5",
  //   questions: [
  //     {
  //       type: "multiple_choice",
  //       difficulty: "easy",
  //       question: "A voyage on which ship inspired Darwin to write *On the Origin of Species by Means of Natural Selection* (1859)?",
  //       correct_answer: "HMS *Beagle*",
  //       answer_choices: [
  //         "HMS *Beagle*",
  //         "HMS *Poodle*",
  //         "HMS *Terrier*",
  //         "HMS *Spaniel*"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "medium",
  //       question: "What is another name for the so-called sea wasp, which can be extremely dangerous to humans?",
  //       correct_answer: "Box jellyfish",
  //       answer_choices: [
  //         "Stingray",
  //         "Cuttlefish",
  //         "Box jellyfish",
  //         "Dragonfish"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "medium",
  //       question: "Which of these crabs is largest?",
  //       correct_answer: "Tasmanian crab",
  //       answer_choices: [
  //         "Alaskan king crab",
  //         "Hermit crab",
  //         "Robber crab",
  //         "Tasmanian crab"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "easy",
  //       question: "Which lizard jumps into water to escape predators?",
  //       correct_answer: "Iguana",
  //       answer_choices: [
  //         "Gecko",
  //         "Chameleon",
  //         "Iguana",
  //         "Anole"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "medium",
  //       question: "What is a cowrie?",
  //       correct_answer: "A marine snail",
  //       answer_choices: [
  //         "A species of sponge",
  //         "A small cow",
  //         "A flower",
  //         "A marine snail"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "medium",
  //       question: "What is a sea cucumber?",
  //       correct_answer: "A marine invertebrate",
  //       answer_choices: [
  //         "A type of vegetable",
  //         "A marine invertebrate",
  //         "A fish",
  //         "A seaweed"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "hard",
  //       question: "What is the largest geographic biotic unit?",
  //       correct_answer: "Biome",
  //       answer_choices: [
  //         "Taxon",
  //         "Biota",
  //         "Biome",
  //         "Region"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "medium",
  //       question: "What is the maintenance of a relatively constant internal environment known as?",
  //       correct_answer: "Homeostasis",
  //       answer_choices: [
  //         "Thermofibrillation",
  //         "Osteopathy",
  //         "Homeostasis",
  //         "Homing instinct"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "easy",
  //       question: "Embryos grow into the shape of a complete organism via the differentiation of cells, tissues, and organs. What is this process called?",
  //       correct_answer: "Morphogenesis",
  //       answer_choices: [
  //         "Morphogenesis",
  //         "Teratogenesis",
  //         "Orthogenesis",
  //         "Embryogenesis"
  //       ],
  //     },
  //     {
  //       type: "multiple_choice",
  //       difficulty: "hard",
  //       question: "A squid and an octopus are both cephalopods with eight arms, but how is a squid different from an octopus?",
  //       correct_answer: "A squid has two long tentacles in addition to the eight arms",
  //       answer_choices: [
  //         "A squid has no mouth",
  //         "A squid has two long tentacles in addition to the eight arms",
  //         "A squid has only six arms instead of eight",
  //         "A squid has a shell"
  //       ],
  //     }
  //   ]
  // }
  
];

const mongoDBUri = process.env.DB_URI;
console.log(mongoDBUri);
mongoose
  .connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const clearCollections = async () => {
  try {
    await Quiz.deleteMany({});
    console.log("Collections cleared successfully.");
  } catch (error) {
    console.error("Error clearing collections:", error);
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
};

clearCollections();
seedQuizzes();

module.exports = { Quiz: seedQuizzes };
