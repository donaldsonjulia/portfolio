angular
    .module('portfolio')
    .component('jdNav', {
      bindings: {},
      templateUrl: './app/components/navigation/navigation.view.html',
      controller: NavCtrl
    });

    function NavCtrl() {

        this.open = function() {
          document.getElementById("js-nav").style.width = "250px";
          document.getElementById("js-content").style.marginLeft = "250px";
 };

        this.close = function() {
          document.getElementById("js-nav").style.width = "0";
          document.getElementById("js-content").style.marginLeft = "0";
 };
    }
