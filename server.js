var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    console.log('hello from server');
    res.render('./public/index.html');
});

app.listen(port);
console.log('Server listening at port' + port);