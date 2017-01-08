angular
    .module('portfolio', ['ui.router'])
    .config(function($locationProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/work');

            $locationProvider.html5Mode(true);

        });
