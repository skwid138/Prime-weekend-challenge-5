myApp.controller('SalesController', function (ListingService) {
    console.log('in SalesController');
    var vm = this;

    // sets vm.rentals to the object self.rentals with a prop of list
    vm.sales = ListingService.sales;

    vm.limit = 10;
    vm.page = 1;

    vm.showSales = function () {
        ListingService.getSales();
    }; // end showSales
    
}); // end controller