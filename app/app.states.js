angular
    .module('portfolio')
    .config(function($stateProvider){
            $stateProvider.state('work', {
              url: '/work',
              component: 'jdWork'
            // resolve: {
            //   work: function(workService) {
            //     return workService.getWork();
            //   }
            // }

            });
        });

        //
        // angular
        //     .module('portfolio')
        //     .config(function($stateProvider){
        //             $stateProvider.state('main', {
        //               url: '/',
        //               abstract: true,
        //               template: '<ui-view></ui-view>'
        //             }).state('main.home', {
        //               url: 'home',
        //               templateUrl: './app/components/home/home.view.html',
        //               controller: 'HomeController as home'
        //             }).state('main.about', {
        //               url: 'about',
        //               templateUrl: './app/components/about/about.view.html',
        //               controller: 'AboutController as about'
        //             }).state('main.work', {
        //               url: 'work',
        //               templateUrl: './app/components/work/work.view.html',
        //               controller: 'WorkController as work'
        //             });
        //         });
