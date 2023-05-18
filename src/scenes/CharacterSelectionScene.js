import CharacterClass from './parts/CharacterClass.js';
class CharacterSelectionScene extends Phaser.Scene {
  constructor(args) {
    super();
  }
  preload() {}
  create() {
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    let background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setSize(newWidth, newHeight);
    background.setScale(newWidth / 1080);

    var title = this.add
      .text(newWidth / 2, 50, `Select Your Fighter`, {
        fontFamily: '"Sedgwick Ave Display"',
        fontSize: '5vh',
      })
      .setOrigin(0.5);
    var characterContainer = this.add
      .container(-150, 0)
      .setSize(newWidth / 3, newHeight);
    var charTitle = this.add
      .text(newWidth / 3.4, newHeight / 4.7, 'char', {
        fontFamily: '"Sedgwick Ave Display"',
        fontSize: '4vh',
      })
      .setOrigin(0.5)
      .setVisible(false);
    characterContainer.add(charTitle);
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
    for (var i = 0; i < charArray.length; ) {
      this['characterAnim' + charArray[i]] = new CharacterClass(
        this,
        0,
        0,
        charArray[i],
        charArray[i] + 'Idle_000.png'
      );
      this['characterAnim' + charArray[i]].setVisible(false);

      i++;
    }

    var newChar = characterTokens(this);
    Phaser.Actions.GridAlign(newChar, {
      width: 5,
      height: 3,
      cellWidth: newWidth / 8,
      cellHeight: newWidth / 8,
      x: newWidth / 7,
      y: -newWidth / 8,
    });
    var button1Container3 = this.add.container(newWidth / 2, newHeight / 1.2);
    // .setSize(newWidth / 3.5, newHeight / 5.5);

    var button3 = this.add.image(0, 0, 'button').setInteractive();
    button3.setScale(newWidth / 1200);
    var button1Text3 = this.add
      .text(0, 0, `Fight`, {
        fontFamily: '"Sedgwick Ave Display"',
        fontSize: '3vh',
      })
      .setOrigin(0.5);
    button3
      .on('pointerdown', function (pointer) {
        this.setTint(11843512);
        button1Text3.setFontSize('3.5vh');

        this.scene.scene.start('SceneSelectionScene', {
          chosenId: this.scene.charId,
          chosenName: this.scene.name,
        });
      })
      .on('pointerover', function (pointer) {
        this.setTint(11843512);
        button1Text3.setFontSize('3.5vh');
        this.scene.tweens.chain({
          targets: button3,
          tweens: [
            {
              scale: newWidth / 1000,
              ease: 'Bounce.easeIn',
              delay: 0,
              duration: 200,
            },
            {
              scale: newWidth / 1200,
              ease: 'Bounce.easeOut',
              delay: 0,
              duration: 200,
            },
          ],
        });
      })
      .on('pointerout', function (pointer) {
        this.clearTint();
        button1Text3.setFontSize('3vh');
      })
      .on('pointerup', function (pointer) {
        this.clearTint();
        button1Text3.setFontSize('3vh');
      });

    button1Container3.add(button3).add(button1Text3).setVisible(false);
    this.input
      .on('pointerdown', function (pointer, gameObject) {
        // console.log(gameObject);
        if (
          gameObject &&
          gameObject[0].hasOwnProperty('texture') &&
          gameObject[0].texture.key !== 'button'
        ) {
          this.scene.charId = gameObject[0].getData('charId');
          this.scene.name = gameObject[0].getData('name');
          // debugger;
          button1Container3.setVisible(true);
          gameObject[0].setTint(11843512);

          if (this.theLastCharacter) {
            this.theLastCharacter.setVisible(false);
          }
          this.theLastCharacter =
            this.scene['characterAnim' + this.scene.charId];
          this.scene['characterAnim' + this.scene.charId].setVisible(true);
          charTitle.setText(this.scene.name).setVisible(true);
          characterContainer
            .add(this.scene['characterAnim' + this.scene.charId])
            .add(charTitle);
          this.scene.anims.create({
            key: this.scene.charId + 'animation',
            frames: this.scene[this.scene.charId],
            frameRate: 8,
            repeat: -1,
          });

          this.scene['characterAnim' + this.scene.charId].anims.play(
            this.scene.charId + 'animation'
          );
        } else {
          return;
        }
      })
      .on('pointerover', function (pointer, gameObject) {
        // console.log(gameObject);
        if (gameObject[0].texture.key !== 'button') {
          // this.scene.charId = gameObject[0].getData("charId");
          gameObject[0].setTint(11843512);
          this.scene.tweens.chain({
            targets: gameObject[0],
            tweens: [
              {
                scale: 0.22,
                ease: 'Bounce.easeIn',
                delay: 0,
                duration: 200,
              },
              {
                scale: 0.2,
                ease: 'Bounce.easeOut',
                delay: 0,
                duration: 200,
              },
            ],
          });
        } else {
          return;
        }
      })
      .on('pointerout', function (pointer, gameObject) {
        if (gameObject) {
          gameObject[0].clearTint();
        }
      })
      .on('pointerup', function (pointer, gameObject) {
        if (gameObject) {
          gameObject[0].clearTint();
        }
      });
  }
}

function characterTokens(scene) {
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
  const charNames = [
    'Argus',
    'Charity',
    'Edge',
    'Electric Mean',
    'Karrigan',
    'Lars Thundersquat',
    'Lillith',
    'Randell',
    'Sharpy Sharp',
    'Elkeema',
    'Captain Nemo',
    'Dejah Thoris',
    'John Carter',
  ];
  var newChar = [];
  for (var i = 0; i < charArray.length; ) {
    var character = charArray[i];
    // console.log(character);

    scene[window[character + 'token']] = scene.add
      .image(0, 0, character + 'Avatar')
      .setScale(0.2)
      .setData({ name: charNames[i], charId: charArray[i] })
      .setInteractive();

    newChar.push(scene[window[character + 'token']]);
    i++;
  }
  // console.log('NEW CHAR ARRAY!!!!!!!', newChar);

  return newChar;
}
export default CharacterSelectionScene;
