class SceneSelectionScene extends Phaser.Scene {
  constructor(args) {
    super();
  }
  preload() {}
  create() {
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    let background = this.add.video(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setSize(newWidth, newHeight);
    background.setScale(newWidth / 1080);
    background.play(true);
    var scene1 = this.add
      .image(newWidth / 2, newHeight / 2, 'scene1')
      .setOrigin(0.5);

    var r = Math.floor(Math.random() * 20);
    var image = `scene${r}`;
    var i = 2;
    var tween = this.tweens.add({
      targets: scene1,
      props: {
        scaleX: { value: 0, duration: 100, yoyo: true },
        texture: {
          value: 'scene' + [Math.floor(Math.random() * 4) + 1],
          duration: 0,
          delay: 1500,
        },
      },
      repeat: r,
      onRepeat: (tween, target) => {
        var texture = 'scene' + [Math.floor(Math.random() * 4) + 1];
        target.setTexture(texture);
        console.log('TEXTURES', this.texture);
        // debugger;
      },
      ease: 'Linear',
      onComplete: (tween, targets, param) => {
        scene1.setTexture(targets[0].texture.key);
        this.newTexture = targets[0].texture.key;
        this.tweens.add({
          targets: scene1,

          scaleX: 3,
          scaleY: 3,
        });
        // debugger;
      },
    });
    tween.on('repeat', function () {
      this.texture = 'scene' + [Math.floor(Math.random() * 5)];
      if (i < 5) {
        i++;
      } else {
        i = 1;
      }
    });
    console.log('hello');
  }
}
export default SceneSelectionScene;
