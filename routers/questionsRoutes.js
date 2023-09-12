const { Router } = require('express')
const router = Router()

const questionsController = require('../controllers/questionsController')

router.get('/', questionsController.index)
router.get('/:id', questionsController.show)
router.post('/', questionsController.create)
router.patch('/:id', questionsController.update)


module.exports = router
