angular
    .module('portfolio')
    .component('jdSocialMedia', {
      bindings: {
        modifier: '@'
      },
      templateUrl: './app/components/social-media/social-media.view.html',
      controller: SocialMediaCtrl
    });

    function SocialMediaCtrl() {
    }
