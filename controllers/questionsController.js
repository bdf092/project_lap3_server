const Question = require('../models/Question')

async function index(req,res) {

    try {
        const questions = await Question.getAll()
        res.status(200).json(questions)
        
    } catch (error) {
        res.status(502).json({error:error.message})
        
    }
}

async function show(req,res) {
    try {
        const id = req.params._id
        const question = await Question.findById(id)
        res.send(question)
    } catch (err) {
        res.status(404).send({error: err.message})
    }
}


module.exports = {
    index,
    show
}
