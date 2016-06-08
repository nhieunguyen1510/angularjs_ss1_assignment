var express = require("express");
var bodyParser = require("body-parser")
var path = require("path")

var productRoute = require('./routes/productRoute');
var categoryRoute = require('./routes/categoryRoute');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// allow cross domain
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Cache-Control')
    next();
});

console.log(__dirname);

app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/categories/', categoryRoute);
app.use('/api/products/', productRoute);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);   
    console.log(err);
    res.json({ "error": err.message });
});

app.listen(3000, function () {
    console.log('port: ' + 3000);
});