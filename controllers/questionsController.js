const Question = require('../models/Question')

async function index(req,res) {

    try {
        const questions = await Question.getAll()
        res.status(200).json(questions)
        
    } catch (error) {
        res.status(502).json({error:error.message})
        
    }
}


module.exports = {
    index
}
