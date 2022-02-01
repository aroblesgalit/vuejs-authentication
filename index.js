const express = require('express')

// Initialize app with express
app = express()

// Route
app.get('/', (req, res) => {
  res.send('Hello')
})

// Port
const port = process.envPORT || 5000

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
