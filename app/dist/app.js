angular
    .module('portfolio', ['ui.router', 'ngAnimate'])
    .config(function($locationProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);

        });
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
angular
    .module('portfolio')
    .controller('AboutController', AboutController);

function AboutController(){
    
}
angular
    .module('portfolio')
    .component('jdHomeMenu', {
      bindings: {},
      templateUrl: './app/components/home-menu/home-menu.view.html',
      controller: HomeMenuCtrl
    });

    function HomeMenuCtrl() {
    }
angular
    .module('portfolio')
    .component('jdHome', {
      bindings: {},
      templateUrl: './app/components/home/home.view.html',
      controller: HomeController
    });

    function HomeController(){


    }
angular
    .module('portfolio')
    .component('jdProject', {
      bindings: {
        project: '<'
      },
      templateUrl: './app/components/project/project.view.html',
      controller: ProjectController
});

function ProjectController() {
  console.log('project contoller');
}
angular
    .module('portfolio')
    .component('jdWork', {
      bindings: {
        work: '<'
      },
      templateUrl:'./app/components/work/work.view.html',
      controller: WorkController
    });

function WorkController() {
    console.log('work component controller!');
}
angular.module('portfolio').service('workService', workService);

function workService() {

  this.getWork = function() {
    console.log('getting work via workService');
    return this.projects;
  };

  var project1 = {
    title: 'project1',
    heroUrl: 'assets/img/' + this.title + '/hero.jpg',
    heroAlt: 'project1 image alt',
    text: 'project1 text'
  };
  var project2 = {
    title: 'project2',
    heroUrl: 'assets/img/' + this.title + '/hero.jpg',
    heroAlt: 'project2 image alt',
    text: 'project2 text'
  };
  var project3 = {
    title: 'project3',
    heroUrl: 'assets/img/' + this.title + '/hero.jpg',
    heroAlt: 'project3 image alt',
    text: 'project3 text'
  };
  this.projects = [project1, project2, project3];

}
