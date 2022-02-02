const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
// const User = require('./model/user')

// Initialize app with express
app = express()

// app.use(express.json())

// Middle ware
app.use(cors())

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

// const connection = mongoose.connection
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully.')
// })

// app.get('/api/users', async (req, res) => {
//   await User.find({}, (err, result) => {
//     console.log('Users from db: ', result)
//     res.send(result)
//   })
// })

// app.post('/api/user', async (req, res) => {
//   try {
//     console.log('req.body: ', req.body)
//     const newUser = new User({
//       username: req.body.username,
//       password: req.body.password
//     })
//     await User.create(newUser)
//     res.send('User added.')
//   } catch (err) {
//     console.log('Error: ', err)
//   }
// })

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
