const userController = require('../../../controllers/userController')
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('user controller', () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('getAllUsers', () => {
    test('it returns users with a 200 status code', async () => {
      let testUsers = ['u1', 'u2']
      jest.spyOn(User, 'find')
        .mockResolvedValue(testUsers);
      await userController.getAllUsers(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(testUsers);
    })
  });

  describe('getUser', () => {
    test('it returns an user with a 200 status code', async () => {
      let testUser = {
        _id: "6501fd1d5a9366b89794b8f6", username: "test", roles: { User: 2001}, password: "test"
      }
      jest.spyOn(User, 'findOne')
        .mockResolvedValue(new User(testUser));
        
      const mockReq = { params: { _id: "6501fd1d5a9366b89794b8f6" } }
        
    
      await userController.getUser(mockReq, mockRes);
      
     
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new User(testUser));
    })
  });

  describe('deleteUser', () => {
    test('it returns a 200 status code on successful deletion', async () => {
      jest.spyOn(User.prototype, 'deleteOne')
        .mockResolvedValue('Deleted');

      const mockReq = { body: {_id: "6501fd1d5a9366b89794b8f6" } }
      await userController.deleteUser(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
    })
  });
  

})
