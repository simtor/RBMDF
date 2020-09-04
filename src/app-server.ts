const express = require('express')
const app = express()
const port = 2480

app.get('/', (req, res) => {
  res.send('Welcome to the Drug finder!')
})

app.get('/', (req, res) => {
  res.render("index",{title: "I'm using pug", message:"Wow lovely" })
})



app.set("title","Food finder")

app.set("view engine", "pug")
app.set("view", "./out/view")


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})