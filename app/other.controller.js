(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('OtherController', OtherController);

//$stateParams is injected to this controller to share data on another controller
    OtherController.$inject = ['travelFactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function OtherController(travelFactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'OtherController';
        // vm2.details = '$stateParams.imdbID';



                function getOtherData() {
            travelFactory.getOther($stateParams.movieDetailId).then(
                function(response) {
                    vm.otherResults = response.data;
                    console.log(vm.otherResults);

                    toastr.success('Sunrise and Sunset.');
                },
                function(error) {
                    if (error.data) {
                        toastr.error("there was a problem: " + error.data);
                    } else {
                        toastr.info('no data found.');
                    }
                }

            )
        };
        getOtherData();

}

       
})();