const { Router } = require('express')
const quizzesRouter = Router();

const quizzesController = require('../controllers/quizzesController')

quizzesRouter.get('/', quizzesController.index)
quizzesRouter.get('/:id', quizzesController.show)
quizzesRouter.post('/', quizzesController.create)
quizzesRouter.patch('/:id', quizzesController.update)
quizzesRouter.delete('/:id', quizzesController.destroy)


module.exports = quizzesRouter
