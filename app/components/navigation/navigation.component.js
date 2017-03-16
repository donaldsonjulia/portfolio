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
