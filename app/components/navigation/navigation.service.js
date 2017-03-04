angular.module('portfolio').service('navService', navService);

function navService() {

  this.navOn = false;

  this.turnOn = function() {
    this.navOn = true;
  };

  this.turnOff = function() {
    this.navOn = false;
  };

  this.getNavStatus = function() {
    return this.navOn;
  };

}
