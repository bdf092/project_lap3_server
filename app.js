const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const questionsRoutes = require('./routers/questionsRoutes')
const userRouter = require('./routers/userRouter')
const { connectDB } = require('./db/setup')
// const mongoose = require('mongoose')

const app = express()
connectDB()

// mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@revision-app.evyi5jx.mongodb.net/`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Connected to MongoDB Atlas');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
// });


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

app.use('/questions', questionsRoutes)

module.exports = app
