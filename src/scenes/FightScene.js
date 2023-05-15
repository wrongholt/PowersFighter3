import CharacterClass from './parts/CharacterClass.js';
class FightScene extends Phaser.Scene {
  constructor(args) {
    super({ key: 'FightScene' });
  }
  init(data) {
    console.log('init', data);
    this.chosenId = data.chosenId;
    this.chosenName = data.chosenName;
    this.newScene = data.newScene;
    // debugger;
  }
  preload() {
    if (this.newScene === 'scene1') {
      this.newScene = 'sky';
    } else if (this.newScene === 'scene2') {
      this.newScene = 'streets';
    } else if (this.newScene === 'scene3') {
      this.newScene = 'space';
    } else if (this.newScene === 'scene4') {
      this.newScene = 'palace';
    }
    console.log('Loading');
    this.load.video(
      'videoBackground',
      'https://d1ofwchetll7ui.cloudfront.net/' + this.newScene + '.mp4'
    );
  }

  create() {
    const charArray = [
      'Argus',
      'Charity',
      'Edge',
      'ElectricMean',
      'Karrigan',
      'LarsThundersquat',
      'Lillith',
      'Randell',
      'SharpySharp',
      'Elkeema',
      'CaptainNemo',
      'DejahThoris',
      'JohnCarter',
    ];
    var pickOne = charArray[Math.floor(Math.random() * charArray.length)];
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;

    let background = this.add.video(0, 0, 'videoBackground');
    background.setOrigin(0, 0);
    background.setSize(this.game.config.width, this.game.config.height);
    background.setScale(newWidth / 1080);
    background.play(true);

    this.leftChar = new CharacterClass(
      this,
      -newWidth / 9.9,
      50,
      this.chosenId,
      this.chosenId + 'Idle_000.png'
    );

    this.rightChar = new CharacterClass(
      this,
      newWidth / 2.1,
      50,
      pickOne,
      pickOne + 'Idle_000.png'
    ).setData({ name: 'Grandpa Gator', id: pickOne });
    this.rightChar.flipX = true;

    this.anims.create({
      key: 'character1animation',
      frames: this[this.chosenId],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'character2animation',
      frames: this[pickOne],
      frameRate: 8,
      repeat: -1,
    });

    this.leftChar.anims.play('character1animation');
    this.rightChar.anims.play('character2animation');
  }
  characterClicked(character) {
    character.on('pointerdown', function (pointer) {
      this.setTint(11843512);
      var theCharacterData = this.getData('id');
      console.log(theCharacterData);
      this.scene.scene.start('GatorCampScene', { id: theCharacterData });
    });
    character.on('pointerout', function (pointer) {
      this.clearTint();
    });

    character.on('pointerup', function (pointer) {
      this.clearTint();
    });
  }
}

export default FightScene;
