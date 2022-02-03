const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../model/user')

// Register a user
router.post('/', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
      username: req.body.username,
      password: hashedPassword
    })

    const result = await user.save()

    const { password, ...data } = await result.toJSON()

    res.send(data)
  } catch (err) {
    console.log('Error: ', err)
  }
})

// Login a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      return res.status(404).send({ message: 'User not found' })
    }

    if (!(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).send({
        message: 'Invalid credentials'
      })
    }

    // Generate a jwt token with user's ID
    const token = jwt.sign({ _id: user._id }, 'secret')

    res.send(user)
  } catch (err) {
    console.log('Error: ', err)
  }
})

module.exports = router
