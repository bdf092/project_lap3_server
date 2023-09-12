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

async function create(req, res) {
    try {
        if (!req.body.question && ! req.body.answer) {
            throw new Error('You need a question and answer to create quiz.')
        }
        const newQuestion = await Question.create(req.body)
        res.status(201).send(newQuestion)
    } catch (err) {
        res.status(422).send({error: err.message})
    }
}

async function update(req,res) {
    // if (req.body._id) {
    //     res.status(422).send({error: "you need to specify which question you want to update"})
    // }
    try {
        const id = paraseInt(req.params._id)
        const data = req.body
        const questionToUpdate = await Question.findById(id)
        const updatedQuestion = await sharkToUpdate.update(data)
        res.send(updatedQuestion)
    } catch (err) {
        res.send(404).send({error: err.message})
    }
}


module.exports = {
    index,
    show,
    create,
    update
}
