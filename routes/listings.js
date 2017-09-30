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
}); // end rentals GET

router.get('/sales', function(req, res) {
    Listing.find({cost:{$exists:true}}, function(err, obj) {
        if(err) {
            console.log('Sales Find Error ->', err);
            res.sendStatus(500);
        } else {
            console.log('Sales Find Results ->', obj);
            res.send(obj);
        } // end else
    }); // end Find
}); // end sales GET

// export
module.exports = router;