var router = require('express').Router();
var Listing = require('../models/realestate.schema.js');

router.get('/rentals', function(req, res) {
    Listing.find({rent:{$exists: true}}, function(err, obj) {
        if(err) {
            console.log('Rentals Find Error ->', err);
            res.sendStatus(500);
        } else {
            console.log('Rentals Find Results ->', obj);
            res.send(obj);
        } // end else
    }); // end Find
}); // end GET

module.exports = router;