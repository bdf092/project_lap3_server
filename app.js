const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const questionsRoutes = require('./routers/questionsRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req,res) => {
    res.json({
        name: "Revision API",
        description: "Welcome to the revision API"
    })
})

app.use('/questions', questionsRoutes)

module.exports = app
