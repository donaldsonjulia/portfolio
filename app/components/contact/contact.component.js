angular
    .module('portfolio')
    .component('jdContact', {
      templateUrl: './app/components/contact/contact.view.html',
      controller: ContactController
    });

function ContactController($http){

    var contactCtrl = this;

    this.formMessage = null;

    this.formError = false;

    this.spinnerActive = false;

    this.formData = {
    };



    this.testClick = function() {
      formData = this.formData;
      console.log(formData);
      messageSent();
    };

    function messageSent() {
      contactCtrl.spinnerActive = false;
      contactCtrl.formData = {};
      contactCtrl.contactForm.$setPristine();
      contactCtrl.formMessage = "Message sent! Thanks for reaching out!";
    }

    function messageError() {
      contactCtrl.spinnerActive = false;
      contactCtrl.formError = true;
      contactCtrl.formMessage = "Oops! There was an error sending your message!";
    }



    this.submitForm = function() {
      contactCtrl.spinnerActive = true;

      $http({
        method: 'POST',
        url: 'https://formspree.io/julia.donaldson@gmail.com',
        data: {
          name: this.formData.name,
          _replyto: this.formData.replyTo,
          message: this.formData.message,
          _subject: 'New message from portfolio site!'
        }
      }).then(function successCallback(response) {
            messageSent();
      }, function errorCallback(response) {
            messageError();
      });
    };


}
