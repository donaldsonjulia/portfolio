angular
    .module('portfolio', ['ui.router'])
    .config(function($locationProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);

        });
