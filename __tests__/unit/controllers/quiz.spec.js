const quizController = require('../../../controllers/quizzesController')
const Quiz = require('../../../models/Quiz');

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

  describe('update', () => {
    test('it returns a quiz with a 200 status code', async () => {
      let testQuiz = {
        _id: "6500dfa0e8e1ebcbfc8ca26e", title: "test",  questions: []
      }
      jest.spyOn(Quiz, 'findById')
        .mockResolvedValue(new Quiz(testQuiz));

        const saveMock = jest.fn().mockResolvedValue(new Quiz(testQuiz));

        testQuiz.save = saveMock;

      const mockReq = { params: { _id: "6500dfa0e8e1ebcbfc8ca26e" }, body : { title: "New Title", questions: []} }
    
      await quizController.update(mockReq, mockRes);
     
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new Quiz(testQuiz));
    })
  });

  

})
