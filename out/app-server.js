"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var port = 2480;
app.get('/', function (req, res) {
    res.send('Welcome to the Drug finder!');
});
app.get('/file', function (req, res) {
    res.render("index", { title: "I'm using pug", message: "Wow lovely" });
});
// app.get("/search/:product",(req, res) => {
//   res.send{products.findProduct(req.params.product.toUpperCase())}
// })
app.set("title", "Drug finder");
app.set("view engine", "pug");
app.set("views", "./out/views");
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app-server.js.map