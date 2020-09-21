const express = require('express')
const app = express()
const port = 2480
// import productInfo from "./services/productInfo"
import products from "./repositories/medicineInfo"


app.get('/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  // res.send('Welcome to the Drug finder!')
  res.send({'Welcome to the Drug finder!'})
  
})

app.get('/file', (req, res) => {
  res.render("index",{title: "I'm using pug", message:"Wow lovely" })
})

// app.get("/search/:product",(req, res) => {
//   res.send{products.findProduct(req.params.product.toUpperCase())}
// })


app.set("title","Drug finder")

app.set("view engine", "pug")
app.set("views", "./out/views")


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})