const Quiz = require('../../../models/Quiz');


const mongoose = require("mongoose");
jest.mock('mongoose');

const db = require('../../../db/seed');

describe('Dog', () => {
  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())

  describe('getAll', () => {
    test('it resolves with quizzes on successful db query', async () => {

      jest.spyOn(db, 'find')
        .mockResolvedValueOnce({ title: "Quiz 1" }, {title: "Quiz 2"});

      const all = await Quiz.all;

      expect(all).toHaveLength(2)
    })
  });

//   describe('findById', () => {
//     test('it resolves with quiz on successful db query', async () => {
//       let dogData = { id: 1, name: 'Test Dog' }
//       jest.spyOn(db, 'query')
//         .mockResolvedValueOnce({ rows: [dogData] });

//       const result = await Dog.findById(1);
//       console.log(result)

//       expect(result).toBeInstanceOf(Dog)
//       // expect(result.owner_id).toBe("e")
//     })
//   });

//   describe('create', () => {
//     test('it resolves with dog on successful db query', async () => {
//       let dogData = { name: 'Test Dog', age: 3 }

//       jest.spyOn(db, 'query')
//         .mockResolvedValueOnce({ rows: [{ ...dogData, id: 1 }] });

//       const result = await Dog.create(dogData);
//       expect(result).toHaveProperty('name')
//     })
//   });

})
