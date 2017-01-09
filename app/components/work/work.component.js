angular
    .module('portfolio')
    .component('jdWork', {
      bindings: {
        work: '<'
      },
      templateUrl:'./app/components/work/work.view.html',
      controller: WorkController
    });

function WorkController(){

    console.log('work component controller!');

}
