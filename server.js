var express = require('express');
var app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"index.html"));
})

var server = app.listen(8080, function () {
    console.log("Express App running at http://localhost:8080/");
})
