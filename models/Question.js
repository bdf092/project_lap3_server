
const db = require('../db/seed')

class Question {

    constructor(data) {
        this.id = data.id
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answer1 = data.incorrect_answer1
        this.incorrect_answer2 = data.incorrect_answer2
        this.incorrect_answer3 = data.incorrect_answer3

    }

    static async getAll() {
        const response = await db.query('db.questions.find()')
        return response.rows.map (q => new Question(q))
    }






}

module.exports= Question;
