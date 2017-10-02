// toggle console.logs on and off
var log = false;

myApp.service('ListingService', function($http) {
    if(log) console.log('in ListingService');
    var self = this;
    
    self.sales = {list: []};
    self.rentals = {list: []};

    // GET sales from server
    self.getSales = function() {
        if(log) console.log('in service getSales');
        $http({
            method: 'GET',
            url: '/listings/sales'
        }).then(function(response) {
            self.sales.list = response.data;
            if(log) console.log('getSales response ->', self.sales.list);
            return self.sales;
        }); // end $http
    }; // end getSales

    // GET rentals from server
    self.getRentals = function() {
        if(log) console.log('inservice getRentals');
        $http({
            method: 'GET',
            url: '/listings/rentals'
        }).then(function(response){
            self.rentals.list = response.data;
            if(log) console.log('getRentals ->', self.rentals.list);
        }); // end $http
    }; // end getRentals


}); // end service