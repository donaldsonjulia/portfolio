angular
    .module('portfolio')
    .component('jdContact', {
      templateUrl: './app/components/contact/contact.view.html',
      controller: ContactController
    });

function ContactController($http){

    this.formData = {
    };

    this.testClick = function() {
      formData = this.formData;
      console.log(formData);
    };



}
