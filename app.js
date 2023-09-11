const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require("mongoose")
const userRouter = require("./routers/userRouter")
const app = express()
mongoose.connect('mongodb://localhost:27017/revision_app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use("/users", userRouter)
app.get('/', (req,res) => {
    res.json({
        name: "Revision API",
        description: "Welcome to the revision API"
    })
})

module.exports = app
