angular
    .module('portfolio')
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            views: {
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
        });
    });
