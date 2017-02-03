(function() {
    'use strict';
    //this is where states are defined
    angular
        .module('myApp', ['ui.router', 'toastr'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/search");


            $stateProvider
            //state params ('main') are used to pass data inbetween controllers
                .state('main', {
                url: "/main",
                templateUrl: "app/partials/main.html",

            })

            //state params ('search') are used to pass data inbetween controllers
            .state('search', {
                //url extends on to main url in factory 
                url: "/search",
                templateUrl: "app/partials/search.html",
                controller: 'LocationController',
                controllerAs: 'vm'
            })



            .state('other', {
                // I wrote in detailing
                url: '/other/:movieDetailId', //state param and property name that I'm sending throw router
                templateUrl: 'app/partials/other.html',
                controller: 'OtherController',
                controllerAs: 'vm'

            })
        })

})();