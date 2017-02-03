(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('LocationController', LocationController);

    LocationController.$inject = ['travelFactory', 'toastr'];

    /* @ngInject */
    function LocationController(travelFactory, toastr) {
        var vm = this;
        vm.title = 'LocationController';


        //////////////// Search is a parameter from API.  places is the name of the array in the api data

        vm.locationPicked = function(placePick) {
            travelFactory.getLocation(placePick).then(
                function(response) {
                    vm.locationResults = response.data.places;
                    console.log(vm.locationResults);

                    toastr.success('Take a look at these trails.');

                },

                function(error) {
                    if (error.data) {
                        toastr.error('there was an error' + error.data);

                    } else {
                        toastr.info('no data');
                    }
                }
            )
            vm.placePick ='';
        };
    
}
})();