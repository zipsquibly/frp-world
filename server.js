var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
    res.send('Hello World');
});

app.use(express.static(__dirname + '/public'));
app.use(express.static('/components', __dirname + '/components'));
var PORT = process.env.FRP_PORT || 3000;
app.listen(PORT);
console.log('listening on %d', PORT);

