const { Router } = require('express')
const router = Router()

const questionsController = require('../controllers/questionsController')

router.get('/', questionsController.index)


module.exports = router
