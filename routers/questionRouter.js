const { Router } = require('express')
const questionRouter = Router();

const questionsController = require('../controllers/questionsController')

questionRouter.get('/', questionsController.index)
questionRouter.get('/:id', questionsController.show)
questionRouter.post('/', questionsController.create)
questionRouter.patch('/:id', questionsController.update)


module.exports = questionRouter
