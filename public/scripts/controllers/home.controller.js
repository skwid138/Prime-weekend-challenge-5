myApp.controller('HomeController', function (ListingService) {
    var vm = this;
    vm.log = true;
    if(vm.log) console.log('in HomeController');

    ListingService.getRentals();
    ListingService.getSales();

    vm.limit = 10;
    vm.page = 1;

    vm.rentals = ListingService.rentals; // sets vm.rentals to the object self.rentals with a prop of list
    vm.sales = ListingService.sales; // sets vm.rentals to the object self.rentals with a prop of list
    vm.currentNavItem = 'home'; // for navbar

    vm.showAll = function () {
        ListingService.getRentals();
        ListingService.getSales();
    }; // end showAll


}); // end controller

