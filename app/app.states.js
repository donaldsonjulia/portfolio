angular
    .module('portfolio')
    .config(function($stateProvider){
            $stateProvider.state('work', {
              url: '/work',
              component: 'jdWork',
            resolve: {
              work: function(workService) {
                return workService.getWork();
              }
            }
          }).state('home', {
            url: '/',
            component: 'jdHome'
          });
        });
