myApp.controller('HomeController', function (ListingService) {
    var vm = this;
    vm.log = true;
    if(vm.log) console.log('in HomeController');

    vm.rentals = ListingService.getRentals(); // sets vm.rentals to the object self.rentals with a prop of list
    console.log('ListingService.getRentals(); ->', ListingService.getRentals());
    
    vm.sales = ListingService.sales; // sets vm.rentals to the object self.rentals with a prop of list
    vm.currentNavItem = 'home'; // for navbar

    // empty array for smaller arrays
    vm.rentalsLists = [];
    vm.salesLists = [];

    // break up rentals into groups of 5
    // vm.rentalGroups = function() {
    //     if (vm.log) console.log('in rentalGroups');
        
    //     ListingService.getSales();
    //     if (vm.log) console.log('ListingService.rentals :', ListingService.rentals);
    //     if (vm.log) console.log('vm.rentals :', vm.rentals);

    //     console.log('vm.rentals.list', vm.rentals);
    //     for (var i = 0; i < vm.rentals.length; i += 5) {
    //         console.log('for loop');
            
    //     } // end for
    // }; // end rentalGroups
    // vm.rentalGroups();

}); // end controller