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
