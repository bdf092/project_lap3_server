require('dotenv').config() // Make sure you are importing from .env file

const app = require('./app')
const port = process.env.PORT 

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})
