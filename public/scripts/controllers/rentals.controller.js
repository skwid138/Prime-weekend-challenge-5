myApp.controller('RentalsController', function (ListingService) {
    console.log('in RentalsController');
    var vm = this;

    vm.showRentals = function() {
        ListingService.getRentals(); 
    }; // end showRentals
    
}); // end controller