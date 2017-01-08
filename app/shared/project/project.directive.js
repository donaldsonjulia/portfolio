angular
    .module('portfolio')
    .directive('jdProject', jdProject);

function jdProject() {
    return {
      restrict: 'A',
      scope: {
        projectInfo: '=info'
      },
      controller: function() {

      },
      controllerAs: 'project',
      templateUrl: './app/shared/project/project.view.html'
    };
}
