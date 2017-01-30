angular
    .module('portfolio')
    .component('jdProject', {
      bindings: {
        project: '<'
      },
      templateUrl: './portfolio/app/components/project/project.view.html',
      controller: ProjectController
});

function ProjectController() {
  console.log('project contoller');
}
