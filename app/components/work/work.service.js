angular.module('portfolio').service('workService', workService);

function workService() {

  this.getWork = function() {
    console.log('getting work via workService');
    return this.projects;
  };

  var project1 = {
    title: 'All Is Well',
    heroUrl: 'assets/img/all-is-well/hero.png',
    heroAlt: 'project1 image alt',
    text: 'Blue bottle jean shorts williamsburg lyft franzen, helvetica vaporware pork belly. Slow-carb master cleanse flannel, crucifix lumbersexual bitters lo-fi venmo viral direct trade neutra health goth marfa subway tile retro. Tilde shoreditch godard knausgaard intelligentsia kickstarter. Yuccie freegan tousled, viral pop-up chia kale chips. Pok pok scenester glossier vape paleo, artisan messenger bag single-origin coffee freegan tousled subway tile. Tote bag unicorn bitters, VHS fashion axe art party offal chambray twee brooklyn chicharrones raw denim schlitz direct trade subway tile. Ennui synth semiotics, brunch poke gluten-free unicorn pok pok forage post-ironic wolf edison bulb tote bag chia dreamcatcher.'
  };
  var project2 = {
    title: 'Wedding',
    heroUrl: 'assets/img/wedding/hero.png',
    heroAlt: 'project2 image alt',
    text: 'Bushwick pop-up cliche, banh mi gentrify small batch fam. Pinterest chambray ennui, next level williamsburg bespoke subway tile. Lyft kale chips selvage, whatever jean shorts poke distillery. Pug pork belly fixie leggings. Squid air plant iceland pork belly chia street art. Subway tile live-edge copper mug butcher activated charcoal gentrify, synth bicycle rights schlitz food truck quinoa shabby chic cronut DIY. Kogi gastropub vape, succulents live-edge readymade gochujang cred kickstarter kombucha semiotics microdosing butcher.'
  };
  var project3 = {
    title: 'Gif Search',
    heroUrl: 'assets/img/gif-search/hero.png',
    heroAlt: 'project3 image alt',
    text: 'Post-ironic gentrify shabby chic swag, everyday carry man bun microdosing iceland offal chia vice chambray. Wayfarers selfies lyft, slow-carb before they sold out umami gluten-free tofu polaroid banjo occupy neutra. Post-ironic messenger bag pinterest shoreditch twee, keffiyeh raw denim iPhone migas offal tote bag wolf portland whatever direct trade. Salvia tbh offal, hashtag af bitters crucifix tofu. Plaid chicharrones tattooed, put a bird on it austin shoreditch green juice affogato lo-fi readymade hashtag asymmetrical health goth. Fashion axe beard actually pour-over, retro leggings +1 tbh prism scenester gentrify. Literally hot chicken YOLO, kale chips cronut hashtag yuccie unicorn before they sold out.'
  };
  this.projects = [project1, project2, project3];

}
