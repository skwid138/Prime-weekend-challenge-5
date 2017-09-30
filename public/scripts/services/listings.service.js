myApp.service('ListingService', function($http) {
    console.log('in ListingService');
    var self = this;
    
    self.sales = {list: []};
    self.rentals = {list: []};

    // GET sales from server
    self.getSales = function() {
        console.log('in service getSales');
        $http({
            method: 'GET',
            url: '/listings/sales'
        }).then(function(response) {
            self.sales.list = response.data;
            console.log('getSales response ->', self.sales.list);
        }); // end $http
    }; // end getSales

    // GET rentals from server
    self.getRentals = function() {
        console.log('inservice getRentals');
        $http({
            method: 'GET',
            url: '/listings/rentals'
        }).then(function(response){
            self.rentals.list = response.data;
            console.log('getRentals ->', self.rentals.list);
        }); // end $http
    }; // end getRentals

}); // end service