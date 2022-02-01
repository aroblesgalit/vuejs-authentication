const express = require('express')

app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

const port = process.envPORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
