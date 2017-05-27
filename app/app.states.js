angular
    .module('portfolio')
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            views: {
              nav: {},
              content: {component: 'jdHome'}
            }
        });
    });
