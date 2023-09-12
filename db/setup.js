const dotenv = require('dotenv');
const mongoose = require('mongoose');
const {Quiz} = require('./seed')

dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
}


module.exports = { connectDB };
