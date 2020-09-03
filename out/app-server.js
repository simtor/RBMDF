var express = require('express');
var app = express();
var port = 2480;
app.get('/', function (req, res) {
    res.send('Welcome to the Drug finder!');
});
app.set("title", "Food finder");
app.set("view engine", "pug");
app.set("view", "./out/view");
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app-server.js.map