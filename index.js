const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

// Initialize app with express
app = express()

// Middle ware
app.use(cors())

const port = process.env.PORT || 5000

// Connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully.')
})

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
