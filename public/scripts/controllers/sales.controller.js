myApp.controller('SalesController', function (ListingService) {
    console.log('in SalesController');
    var vm = this;

    vm.showSales = function () {
        ListingService.getSales();
    }; // end showSales
    
}); // end controller