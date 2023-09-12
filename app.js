const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require("mongoose")
const userRouter = require("./routers/userRouter")
const app = express()

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
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
