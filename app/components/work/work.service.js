angular.module('portfolio').service('workService', workService);

function workService() {

  this.getWork = function() {
    console.log('getting work via workService');
    return this.projects;
  };

  var project1 = {
    title: 'project1',
    heroUrl: 'assets/img/' + this.title + '/hero.jpg',
    heroAlt: 'project1 image alt',
    text: 'project1 text'
  };
  var project2 = {
    title: 'project2',
    heroUrl: 'assets/img/' + this.title + '/hero.jpg',
    heroAlt: 'project2 image alt',
    text: 'project2 text'
  };
  var project3 = {
    title: 'project3',
    heroUrl: 'assets/img/' + this.title + '/hero.jpg',
    heroAlt: 'project3 image alt',
    text: 'project3 text'
  };
  this.projects = [project1, project2, project3];

}
