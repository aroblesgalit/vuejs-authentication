const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../model/user')

// Register a user
router.post('/api/user', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    })
    await User.create(user)
    res.send('User added.')
  } catch (err) {
    console.log('Error: ', err)
  }
})

module.exports = router
