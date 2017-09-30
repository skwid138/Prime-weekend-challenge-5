var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingsSchema = new Schema({

}); // end Schema

var Listing = mongoose.model('listings', listingsSchema);

// export
module.exports = Listing;