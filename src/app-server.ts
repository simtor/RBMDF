const express = require('express')
const app = express()
const port = 2480

app.get('/', (req, res) => {
  res.send('Welcome to the Drug finder!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})