const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require("mongoose")
const userRouter = require("./routers/userRouter")
const quizzesRouter = require("./routers/quizzesRouter")
//const { connectDB } = require('./db/setup')
const app = express()
//connectDB()
console.log(process.env.DB_URI)
console.log(process.env.PORT)


app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use("/users", userRouter)
app.use("/quizzes", quizzesRouter)
app.get('/', (req,res) => {
    res.json({
        name: "Revision API",
        description: "Welcome to the revision API"
    })
})


module.exports = app
