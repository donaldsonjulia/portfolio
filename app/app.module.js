angular
    .module('portfolio', ['ui.router', 'ngAnimate'])
    .config(function($locationProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            // $locationProvider.html5Mode(true);

        });
