const quizController = require('../../../controllers/quizzesController')
const Quiz = require('../../../models/Quiz');
const { update } = require('../../../controllers/quizzesController'); 

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('quiz controller', () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('index', () => {
    test('it returns quizzes with a 200 status code', async () => {
      let testQuizzes = ['q1', 'q2']
      jest.spyOn(Quiz, 'find')
        .mockResolvedValue(testQuizzes);
      await quizController.index(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(testQuizzes);
    })
  });

  describe('show', () => {
    test('it returns a quiz with a 200 status code', async () => {
      let testQuiz = {
        id: "6500dfa0e8e1ebcbfc8ca26e", title: "test",  questions: []
      }
      jest.spyOn(Quiz, 'findById')
        .mockResolvedValue(new Quiz(testQuiz));

      const mockReq = { params: { id: "6500dfa0e8e1ebcbfc8ca26e" } }
    
      await quizController.show(mockReq, mockRes);
     
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new Quiz(testQuiz));
    })
  });

  describe('create', () => {
    test('it returns a new quiz with a 201 status code', async () => {
      let testQuiz = {
        _id: "6500eb7da719489ec05b7bf5",

        title: "Test quiz1",
        questions: [
          {
            "_id": "6500ec4688fbd43acfb20025",
            type: "multiple",
            difficulty: "hard",
            question:
              "Test Question",
            correct_answer: "Test Answer",
            answer_choices: [
              "Tests Choice",
              "Tests Choice",
              "Tests Choice",
              "Test Answer",
            ],
          }]}
      jest.spyOn(Quiz, 'create')
        .mockResolvedValue(new Quiz(testQuiz));


      const mockReq = { _id: "6500eb7da719489ec05b7bf5", body: testQuiz }
      await quizController.create(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith(new Quiz(testQuiz));
    })
  });


  it('updates a quiz with a 200 status code', async () => {
    // Mock Quiz.findById to return a quiz
    const quizToUpdate = {
      _id: "6502216f0cc0aba5d5a78b95",
      title: 'Old Title',
      questions: [],
    };
    jest.spyOn(Quiz, 'findById').mockResolvedValue(new Quiz(quizToUpdate));

    // Mock the save method of the found quiz
    const saveMock = jest.fn().mockResolvedValue(new Quiz(quizToUpdate));
    quizToUpdate.save = saveMock;

    // Mock the request object
    const mockReq = {
      params: { id: '6502216f0cc0aba5d5a78b95' },
      body: { title: 'New Title', questions: [] },
    };

    // Call the update function
    await update(mockReq, mockRes);

    // Assertions
    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith(new Quiz(quizToUpdate));

    // Ensure that Quiz.findById was called with the correct ID
    expect(Quiz.findById).toHaveBeenCalledWith('6502216f0cc0aba5d5a78b95');

    // Ensure that the quiz's save method was called with the updated data
    expect(saveMock).toHaveBeenCalledWith();
    expect(quizToUpdate.title).toBe('New Title');
  });

  

})
