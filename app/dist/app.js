angular
    .module('portfolio', ['ui.router', 'ngAnimate'])
    .config(function($locationProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);

        });
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
angular
    .module('portfolio')
    .component('jdAbout', {
      templateUrl: './app/components/about/about.view.html',
      controller: AboutController
    });

function AboutController(){
    this.bio = "Hi! I'm Julia Donaldson, and I'm a web/fashion/graphic designer and developer. After 12 years in New York City working within the fashion industry, I recently relocated to the Los Angeles area to pursue my interest in web development and design. I love red lipstick, blue jeans, and mint ice cream.";
}
angular
    .module('portfolio')
    .component('jdContact', {
      templateUrl: './app/components/contact/contact.view.html',
      controller: ContactController
    });

function ContactController($http){

    var contactCtrl = this;

    this.formMessage = null;

    this.formError = false;

    this.spinnerActive = false;

    this.formData = {
    };



    this.testClick = function() {
      formData = this.formData;
      console.log(formData);
      messageSent();
    };

    function messageSent() {
      contactCtrl.spinnerActive = false;
      contactCtrl.formData = {};
      contactCtrl.contactForm.$setPristine();
      contactCtrl.formMessage = "Message sent! Thanks for reaching out!";
    }

    function messageError() {
      contactCtrl.spinnerActive = false;
      contactCtrl.formError = true;
      contactCtrl.formMessage = "Oops! There was an error sending your message!";
    }



    this.submitForm = function() {
      contactCtrl.spinnerActive = true;

      $http({
        method: 'POST',
        url: 'https://formspree.io/julia.donaldson@gmail.com',
        data: {
          name: this.formData.name,
          _replyto: this.formData.replyTo,
          message: this.formData.message,
          _subject: 'New message from portfolio site!'
        }
      }).then(function successCallback(response) {
            messageSent();
      }, function errorCallback(response) {
            messageError();
      });
    };


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
    .component('jdMenu', {
      bindings: {
        modifier: '@'
      },
      templateUrl: './app/components/menu/menu.view.html',
      controller: HomeMenuCtrl
    });

    function HomeMenuCtrl() {
    }
angular
    .module('portfolio')
    .component('jdNav', {
      templateUrl: './app/components/navigation/navigation.view.html',
      controller: NavCtrl
    });

    function NavCtrl() {

        this.open = function() {
          document.getElementById("js-nav").style.width = "250px";
 };

        this.close = function() {
          document.getElementById("js-nav").style.width = "0";
 };

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
  
}
angular
    .module('portfolio')
    .component('jdSocialMedia', {
      bindings: {
        modifier: '@'
      },
      templateUrl: './app/components/social-media/social-media.view.html',
      controller: SocialMediaCtrl
    });

    function SocialMediaCtrl() {
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
    return this.projects;
  };

  var tools = {
    html: {
      name: 'HTML',
      classname: 'html'
    },
    css: {
      name: 'CSS',
      classname: 'css'
    },
    sass: {
      name: 'Sass',
      classname: 'sass'
    },
    javascript: {
      name: 'Javascript',
      classname: 'js'
    },
    rails: {
      name: 'Ruby On Rails',
      classname: 'rails'
    },
    foundation: {
      name: 'Foundation',
      classname: 'foundation'
    },
    angular1: {
      name: 'Angular v1',
      classname: 'angular'
    },
    angular2: {
      name: 'Angular v2',
      classname: 'angular'
    },
    bem: {
      name: 'BEM',
      classname: 'bem'
    },
    handlebars: {
      name: 'Handlebars',
      classname: 'handlebars'
    }
  };

  var project1 = {
    title: 'All Is Well',
    heroUrl: 'assets/img/all-is-well/hero.png',
    heroAlt: 'project screenshot',
    text: 'A web app that connects therapists with their clients and helps to diagnose behavioral patterns in between appointments',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-All-Is-Well',
      projectSite: 'https://all-is-well.herokuapp.com/'
    },
    tools: [tools.javascript, tools.css, tools.sass, tools.html, tools.rails]
  };
  var project2 = {
    title: "Caroline & Ephraim's Wedding",
    heroUrl: 'assets/img/wedding/hero.png',
    heroAlt: 'project screenshot',
    text: "A clean and simple landing page for my sister's upcoming wedding.",
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/caroline-wedding',
      projectSite: 'http://www.carolineandephraim.com/'
    },
    tools: [tools.html, tools.css, tools.sass, tools.bem, tools.foundation, tools.javascript]
  };
  var project3 = {
    title: 'Gif Search',
    heroUrl: 'assets/img/gif-search/hero.png',
    heroAlt: 'project screenshot',
    text: 'A basic web app to search and view GIF images via the Giphy API.',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-GIFSearch',
      projectSite: 'https://donaldsonjulia.github.io/TIY-GIFSearch/'
    },
    tools: [tools.html, tools.css, tools.sass, tools.handlebars, tools.javascript]
  };
  var project4 = {
    title: 'Shopular2.0',
    heroUrl: 'assets/img/shopular/hero.png',
    heroAlt: 'project screenshot',
    text: 'An shop inventory management app built with Angular v1.5',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-Shopular2.0',
      projectSite: 'https://donaldsonjulia.github.io/TIY-Shopular2.0/'
    },
    tools: [tools.angular1, tools.javascript, tools.html, tools.css, tools.sass]
  };
  var project5 = {
    title: 'Potter Quest',
    heroUrl: 'assets/img/shopular/hero.png',
    heroAlt: 'project screenshot',
    text: 'A ',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-Shopular2.0',
      projectSite: 'https://donaldsonjulia.github.io/TIY-Shopular2.0/'
    },
    tools: [tools.angular1, tools.javascript, tools.html, tools.css, tools.sass]
  };



  this.projects = [project1, project2, project3, project4];

}
