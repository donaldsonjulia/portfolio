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
