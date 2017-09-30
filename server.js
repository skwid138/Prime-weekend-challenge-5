// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var port = process.env.PORT || 6660;

// Database
mongoose.connect('mongodb://localhost:27017/realestate');

//uses
app.use(bodyParser.json());
app.use(express.static('public'));

//route vars
app.get('/', function(req, res) {
    console.log('In base route.');
    res.sendFile(path.resolve('public/views/index.html'));
}); // end base route
// var listingsRouter = require('./routes/listings');

// route uses
// app.use('/listings', listingsRouter); // end listings use

// listening
app.listen(port, function( ) {
    console.log('listening on ', port);
}); // end listen