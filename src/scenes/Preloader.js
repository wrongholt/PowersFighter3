import WebFontFile from '../helpers/webfont.js';
class BootScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {
    var arrayVideo = ['streets', 'sky', 'palace', 'space'];
    var pickOne = arrayVideo[Math.floor(Math.random() * arrayVideo.length)];
    this.load.crossOrigin = 'Anonymous';
    this.load.addFile(
      new WebFontFile(this.load, ['Sedgwick Ave Display', 'Lato', 'Caveat'])
    );
    this.load.image(
      'background',
      'https://d1ofwchetll7ui.cloudfront.net/' + pickOne + '.jpg'
    );
    this.load.image('scene1', 'assets/sky.jpg');
    this.load.image('scene2', 'assets/streets.jpg');
    this.load.image('scene3', 'assets/space.jpg');
    this.load.image('scene4', 'assets/palace.jpg');

    this.load.image(
      'logo',
      'https://d1ofwchetll7ui.cloudfront.net/powerslogo.png'
    );
    this.load.image(
      'button',
      'https://d1ofwchetll7ui.cloudfront.net/button.png'
    );

    this.load.image(
      'button_hover',
      'https://d1ofwchetll7ui.cloudfront.net/button_hover.png'
    );
    this.load.image('CharityAvatar', 'assets/CharityAvatar.png');
    this.load.image('ArgusAvatar', 'assets/ArgusAvatar.png');
    this.load.image('CaptainNemoAvatar', 'assets/CaptainNemoAvatar.png');
    this.load.image('DejahThorisAvatar', 'assets/DejahThorisAvatar.png');
    this.load.image('EdgeAvatar', 'assets/EdgeAvatar.png');
    this.load.image('ElectricMeanAvatar', 'assets/ElectricMeanAvatar.png');
    this.load.image('ElkeemaAvatar', 'assets/ElkeemaAvatar.png');
    this.load.image('JohnCarterAvatar', 'assets/JohnCarterAvatar.png');
    this.load.image('KarriganAvatar', 'assets/KarriganAvatar.png');
    this.load.image(
      'LarsThundersquatAvatar',
      'assets/LarsThundersquatAvatar.png'
    );
    this.load.image('LillithAvatar', 'assets/LillithAvatar.png');
    this.load.image('RandellAvatar', 'assets/RandellAvatar.png');
    this.load.image('SharpySharpAvatar', 'assets/SharpySharpAvatar.png');

    this.load.multiatlas(
      'Charity',
      'https://d1ofwchetll7ui.cloudfront.net/Charity.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Argus',
      'https://d1ofwchetll7ui.cloudfront.net/Argus.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'CaptainNemo',
      'https://d1ofwchetll7ui.cloudfront.net/CaptainNemo.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'DejahThoris',
      'https://d1ofwchetll7ui.cloudfront.net/DejahThoris.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Edge',
      'https://d1ofwchetll7ui.cloudfront.net/Edge.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'ElectricMean',
      'https://d1ofwchetll7ui.cloudfront.net/ElectricMean.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Elkeema',
      'https://d1ofwchetll7ui.cloudfront.net/Elkeema.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'JohnCarter',
      'https://d1ofwchetll7ui.cloudfront.net/JohnCarter.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Karrigan',
      'https://d1ofwchetll7ui.cloudfront.net/Karrigan.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'LarsThundersquat',
      'https://d1ofwchetll7ui.cloudfront.net/LarsThundersquat.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Lillith',
      'https://d1ofwchetll7ui.cloudfront.net/Lillith.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Randell',
      'https://d1ofwchetll7ui.cloudfront.net/Randell.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'SharpySharp',
      'https://d1ofwchetll7ui.cloudfront.net/SharpySharp.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
  }

  create() {
    this.scene.start('HomeScene');
  }
}

export default BootScene;
