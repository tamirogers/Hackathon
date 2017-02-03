(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('travelFactory', travelFactory);

    travelFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function travelFactory($http, $q) {
        var service = {
            getOther: getOther,
            getLocation: getLocation
        };
        return service;

        //////////////// the findLocation needs to be the same as params, it's a placeholder

        function getLocation(findLocation) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                // url:  'https://skedgo-tripgo-v1.p.mashape.com/docs',
                // url: "https://webcamstravel.p.mashape.com/",

                url: "https://trailapi-trailapi.p.mashape.com",

                headers: { 'X-Mashape-Key': 'MpyHqgXWYVmsh1RAvTe31yUW2EWgp1g7tX7jsns15v5nNBm9Pw' },

                params: { 'q[city_cont]': findLocation }
                // lat: findLocation

                // params:  { country: findLocation }
                // url: ("https://trailapi-trailapi.p.mashape.com/?lat=34.1&limit=25&lon=-105.2/" + findLocation,{

            })

            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                    }
                },

                function(error) {
                    console.log(error);
                    defer.reject(error);

                });
            return defer.promise;
        }





        function getOther(otherId) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: "https://sun.p.mashape.com/api/sun/",
                    headers: { 'X-Mashape-Key': 'Orq0VygS0VmshL4xqc1mMAHsdTw9p1gdE6ZjsnfpnZ1ieBPxyf',
                    'Accept': 'application/json'},
                    params: { 'city': otherId }



                    // 'Authorization': 'Basic Og==',
                    // 'Authorization': 'Basic Ok1weUhxZ1hXWVZtc2gxUkF2VGUzMXlVVzJFV2dwMWc3dFg3anNuczE1djVuTkJtOVB3'}
// /networks.json
                    // params: { 'q[city_cont]': findLocation }

                })

                .then(function(response) {
                        if (typeof response.data === "object") {
                            defer.resolve(response);
                        } else {
                            defer.reject(response);
                        }
                    },

                    function(error) {
                        console.log(error);
                        defer.reject(error);

                    });
            return defer.promise;
        }
    }
})();
