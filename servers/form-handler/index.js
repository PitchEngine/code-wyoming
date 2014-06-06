var app = require('express')();
var bodyParser = require('body-parser');

// parse application/json and application/x-www-form-urlencoded
app.use(bodyParser());

app.get('/', function (req, res) {
    res.send(req.query);
});

app.post('/', function (req, res) {
    res.send(req.body);
});

app.listen(1337, function () {
    console.log('listening on port 1337');
});
