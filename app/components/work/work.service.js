angular.module('portfolio').service('workService', workService);

function workService() {

  this.getWork = function() {
    console.log('getting work via workService');
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
    heroUrl: 'assets/img/all-is-well/hero.png',
    heroAlt: 'project screenshot',
    text: 'Blue bottle jean shorts williamsburg lyft franzen, helvetica vaporware pork belly. Slow-carb master cleanse flannel, crucifix lumbersexual bitters lo-fi venmo viral direct trade neutra health goth marfa subway tile retro.',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-All-Is-Well',
      projectSite: 'https://all-is-well.herokuapp.com/'
    },
    tools: [tools.javascript, tools.css, tools.sass, tools.html, tools.rails]
  };
  var project2 = {
    title: 'Wedding',
    heroUrl: 'assets/img/wedding/hero.png',
    heroAlt: 'project screenshot',
    text: 'Bushwick pop-up cliche, banh mi gentrify small batch fam. Pinterest chambray ennui, next level williamsburg bespoke subway tile. Lyft kale chips selvage, whatever jean shorts poke distillery. Pug pork belly fixie leggings. Squid air plant iceland pork belly chia street art.',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/caroline-wedding',
      projectSite: 'http://www.carolineandephraim.com/'
    },
    tools: [tools.html, tools.css, tools.sass, tools.bem, tools.foundation, tools.javascript]
  };
  var project3 = {
    title: 'Gif Search',
    heroUrl: 'assets/img/gif-search/hero.png',
    heroAlt: 'project screenshot',
    text: 'Post-ironic gentrify shabby chic swag, everyday carry man bun microdosing iceland offal chia vice chambray. Wayfarers selfies lyft, slow-carb before they sold out umami gluten-free tofu polaroid banjo occupy neutra.',
    linkUrls: {
      github: 'https://github.com/donaldsonjulia/TIY-GIFSearch',
      projectSite: 'https://donaldsonjulia.github.io/TIY-GIFSearch/'
    },
    tools: [tools.html, tools.css, tools.sass, tools.handlebars, tools.javascript]
  };
  this.projects = [project1, project2, project3];

}
