const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

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

// Initialize app with express
app = express()
app.use(express.json())
app.use(cookieParser())

// Middle ware
app.use(cors({ credentials: true, origin: ['http://localhost:8080'] }))

const users = require('./routes/api/users')
app.use('/api/users', users)

const port = process.env.PORT || 5000

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
