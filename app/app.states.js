angular
    .module('portfolio')
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            views: {
              nav: {},
              content: {component: 'jdHome'}
            }
        }).state('work', {
            url: '/work',
            views: {
              nav: { component: 'jdNav' },
              content: { component: 'jdWork' }
            },
            resolve: {
                work: function(workService) {
                    return workService.getWork();
                }
            }
        }).state('about', {
            url: '/about',
            views: {
              nav: {component: 'jdNav'},
              content: {component: 'jdAbout'}
            }
        }).state('contact', {
            url:'/contact',
            views: {
              nav: {component: 'jdNav'},
              content: {component: 'jdContact'}
            }
        });
    });
