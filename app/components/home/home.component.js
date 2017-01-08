angular
    .module('portfolio')
    .component('jdHome', {
      bindings: {},
      templateUrl: '.app/components/home/home.view.html',
      controller: HomeController
    });

    function HomeController(){
          console.log('hello home!!');
    }
