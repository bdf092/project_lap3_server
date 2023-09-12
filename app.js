const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require("mongoose")
const userRouter = require("./routers/userRouter")
const questionRouter = require("./routers/questionRouter")
//const { connectDB } = require('./db/setup')
const app = express()
//connectDB()
console.log(process.env.DB_URI)
console.log(process.env.PORT)

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use("/users", userRouter)
app.use("/questions", questionRouter)
app.get('/', (req,res) => {
    res.json({
        name: "Revision API",
        description: "Welcome to the revision API"
    })
})


module.exports = app
