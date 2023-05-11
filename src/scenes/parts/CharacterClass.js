class CharacterClass extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    var newHeight = this.scene.game.config.height;
    var newWidth = this.scene.game.config.width;
    this.scene[texture] = this.anims.generateFrameNames(texture, {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: texture + "Idle_",
      suffix: ".png",
    });
    this.scene.sys.updateList.add(this);
    this.scene.sys.displayList.add(this);
    this.setScale(newWidth / 1200);
    this.setOrigin(0, 0);
    return this;
  }
}
export default CharacterClass;
