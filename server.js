// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var port = process.env.PORT;

// Database
mongoose.connect(process.env.MONGOLAB_URI);

//uses
app.use(bodyParser.json());
app.use(express.static('public'));

//route vars
app.get('/', function(req, res) {
    console.log('In base route.');
    res.sendFile(path.resolve('public/views/index.html'));
}); // end base route
var listingsRouter = require('./routes/listings');

// route uses
app.use('/listings', listingsRouter);

// listening
app.listen(port, function( ) {
    console.log('listening on ', port);
}); // end listen