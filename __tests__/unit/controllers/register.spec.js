const registerController = require('../../../controllers/registerController')
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('register controller', () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('handleNewUser', () => {
    test('it returns new user registered with a 201 status code', async () => {
      let testUser = {
            id: "6501fd1d5a9366b89794b8f6", user: "test", pwd: "test"
          }
          jest.spyOn(User, 'create')
          .mockResolvedValue(new User(testUser));
          
        const mockReq = { body: {id: "6501fd1d5a9366b89794b8f6", user: "test", pwd: "test"} }
          
      
        await registerController.handleNewUser(mockReq, mockRes);
        
       
        expect(mockStatus).toHaveBeenCalledWith(201);
        expect(mockJson).toHaveBeenCalledWith(new User(testUser));
    })
  });

  
  

})
