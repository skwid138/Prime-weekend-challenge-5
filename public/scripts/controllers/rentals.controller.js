myApp.controller('RentalsController', function (ListingService) {
    console.log('in RentalsController');
    var vm = this;

    // sets vm.rentals to the object self.rentals with a prop of list
    vm.rentals = ListingService.rentals;
    
    vm.showRentals = function() {
        ListingService.getRentals();
        console.log('vm.rentals.list', vm.rentals);
    }; // end showRentals

    // https://github.com/daniel-nagy/md-data-table
    // refenced the example code here

    vm.limit = 10;
    vm.page = 1;

    // vm.selected = [];
    // vm.query = {
    //     order: 'name',
    //     limit: 5,
    //     page: 1
    // };
    // vm.success = function (rentals) {
    //     vm.allRentals = rentals;
    // }; // end success
    // vm.getHomes = function() {
    //     vm.promise = ListingService.getRentals((vm.query, success).$promise;
    // }; // end getHomes
    
}); // end controller