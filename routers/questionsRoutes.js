const { Router } = require('express')
const router = Router()

const questionsController = require('../controllers/questionsController')

router.get('/', questionsController.index)
router.get('/:id', questionsController.show)


module.exports = router
