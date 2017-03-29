angular
    .module('portfolio')
    .component('jdAbout', {
      templateUrl: './app/components/about/about.view.html',
      controller: AboutController
    });

function AboutController(){
    this.bio = "Hi! I'm Julia Donaldson, and I'm a web/fashion/graphic designer and developer. After 12 years in New York City working within the fashion industry, I recently relocated to the Los Angeles area to pursue my interest in web development and design. I love red lipstick, blue jeans, and mint ice cream.";
}
