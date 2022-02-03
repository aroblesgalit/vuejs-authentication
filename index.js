const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
// const User = require('./model/user')

// Initialize app with express
app = express()

app.use(express.json())

// Middle ware
app.use(cors())

const users = require('./routes/api/users')
app.use('/api/users', users)

const port = process.env.PORT || 5000

// Connect to database
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('MongoDB database connection established successfully.')
  }
)

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
