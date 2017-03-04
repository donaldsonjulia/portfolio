angular
    .module('portfolio')
    .component('jdNav', {
      bindings: {},
      templateUrl: './app/components/navigation/navigation.view.html',
      controller: NavCtrl
    });

    function NavCtrl($state) {

      console.log($state.current);



      this.viewable = false;

      if ($state.current.name !== "home") {
        console.log('in if statement');
        this.viewable = true;
      }

      console.log(this.viewable);

    }
