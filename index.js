const express = require('express')
const mongodb = require('mongodb')
require('dotenv').config()

// Connect to database
async function loadDatabase () {
  const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  return client.db('auth')
}

// Initialize app with express
app = express()

// Route
app.get('/', async (req, res) => {
  const data = await loadDatabase()
  res.send(await data.find({}).toArray())
})

// Port
const port = process.envPORT || 5000

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
