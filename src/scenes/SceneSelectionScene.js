class SceneSelectionScene extends Phaser.Scene {
  constructor(args) {
    super();
  }
  init(data) {
    console.log('init', data);
    this.chosenId = data.chosenId;
    this.chosenName = data.chosenName;
    // debugger;
  }
  preload() {}
  create() {
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    let background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setSize(newWidth, newHeight);
    background.setScale(newWidth / 1080);
    var scene1 = this.add
      .image(newWidth / 2, newHeight / 2, 'scene1')
      .setOrigin(0.5);
    var r = Math.floor(Math.random() * 20);
    this.tweens.add({
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
        // debugger;
      },
      ease: 'Linear',
      onComplete: (tween, targets) => {
        scene1.setTexture(targets[0].texture.key);
        this.newTexture = targets[0].texture.key;
        this.tweens.add({
          targets: scene1,
          scaleX: 3,
          scaleY: 3,
          onComplete: (tween, targets) => {
            this.scene.start('FightScene', {
              chosenId: this.chosenId,
              chosenName: this.chosenName,
              newScene: this.newTexture,
            });
          },
        });
        // debugger;
      },
    });

    console.log('hello');
  }
}
export default SceneSelectionScene;
