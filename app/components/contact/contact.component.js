angular
    .module('portfolio')
    .component('jdContact', {
      templateUrl: './app/components/contact/contact.view.html',
      controller: ContactController
    });

function ContactController(){
    this.testClick = function() {
      console.log('testing click');
    };
}
