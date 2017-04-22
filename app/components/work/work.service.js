angular.module('portfolio').service('workService', workService);

function workService() {

  this.getWork = function() {
    return this.projects;
  };

  var tools = {
    html: {
      name: 'HTML',
      classname: 'html'
    },
    css: {
      name: 'CSS',
      classname: 'css'
    },
    sass: {
      name: 'Sass',
      classname: 'sass'
    },
    javascript: {
      name: 'Javascript',
      classname: 'js'
    },
    rails: {
      name: 'Ruby On Rails',
      classname: 'rails'
    },
    foundation: {
      name: 'Foundation',
      classname: 'foundation'
    },
    angular1: {
      name: 'Angular v1',
      classname: 'angular'
    },
    angular2: {
      name: 'Angular v2',
      classname: 'angular'
    },
    bem: {
      name: 'BEM',
      classname: 'bem'
    },
    handlebars: {
      name: 'Handlebars',
      classname: 'handlebars'
    }
  };

  var project1 = {
    title: 'All Is Well',
    heroUrl: './assets/img/all-is-well/hero.png',
    heroAlt: 'project screenshot',
    text: 'A web app that connects therapists with their clients and helps to diagnose behavioral patterns in between appointments',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-All-Is-Well',
      projectSite: 'https://all-is-well.herokuapp.com/'
    },
    tools: [tools.javascript, tools.css, tools.sass, tools.html, tools.rails]
  };
  var project2 = {
    title: "Caroline & Ephraim's Wedding",
    heroUrl: './assets/img/wedding/hero.png',
    heroAlt: 'project screenshot',
    text: "A clean and simple landing page for my sister's upcoming wedding.",
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/caroline-wedding',
      projectSite: 'http://www.carolineandephraim.com/'
    },
    tools: [tools.html, tools.css, tools.sass, tools.bem, tools.foundation, tools.javascript]
  };
  var project3 = {
    title: 'Gif Search',
    heroUrl: './assets/img/gif-search/hero.png',
    heroAlt: 'project screenshot',
    text: 'A basic web app to search and view GIF images via the Giphy API.',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-GIFSearch',
      projectSite: 'https://donaldsonjulia.github.io/TIY-GIFSearch/'
    },
    tools: [tools.html, tools.css, tools.sass, tools.handlebars, tools.javascript]
  };
  var project4 = {
    title: 'Shopular2.0',
    heroUrl: './assets/img/shopular/hero.png',
    heroAlt: 'project screenshot',
    text: 'An shop inventory management app built with Angular v1.5',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-Shopular2.0',
      projectSite: 'https://donaldsonjulia.github.io/TIY-Shopular2.0/'
    },
    tools: [tools.angular1, tools.javascript, tools.html, tools.css, tools.sass]
  };
  var project5 = {
    title: 'Potter Quest',
    heroUrl: './assets/img/shopular/hero.png',
    heroAlt: 'project screenshot',
    text: 'A ',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-Shopular2.0',
      projectSite: 'https://donaldsonjulia.github.io/TIY-Shopular2.0/'
    },
    tools: [tools.angular1, tools.javascript, tools.html, tools.css, tools.sass]
  };



  this.projects = [project1, project3, project4];

}
