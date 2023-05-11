class HomeScene extends Phaser.Scene {
  constructor(args) {
    super();
  }
  preload() {}
  create() {
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    let background = this.add.video(0, 0, "background");
    background.setOrigin(0, 0);
    background.setSize(newWidth, newHeight);
    background.setScale(newWidth / 1080);
    background.play(true);
    var logo = this.add.image(newWidth / 2, 0, "logo");
    logo.setOrigin(0.5, 0);
    logo.setScale(newWidth / 2560);
    var menuContainer = this.add
      .container(newWidth / 2, newHeight / 2.25)
      .setSize("30vw", "60vh");
    var button1Container = this.add
      .container(0, 0)
      .setSize(newWidth / 3.5, newHeight / 5.5);

    var button2Container = this.add
      .container(0, newHeight / 5.5)
      .setSize(newWidth / 3.5, newHeight / 5.5);

    var button = this.add.image(0, 0, "button").setInteractive();
    button.setScale(newWidth / 1000);
    var button1Text = this.add
      .text(0, 0, `Start`, {
        fontFamily: '"Sedgwick Ave Display"',
        fontSize: "3vh",
      })
      .setOrigin(0.5);
    button.on("pointerdown", function (pointer) {
      this.setTint(11843512);
      button1Text.setFontSize("3.5vh");
      this.scene.scene.start("CharacterSelectionScene");
    });
    button.on("pointerover", function (pointer) {
      this.setTint(11843512);
      button1Text.setFontSize("3.5vh");
      this.scene.tweens.chain({
        targets: button,
        tweens: [
          {
            scale: newWidth / 900,
            ease: "Bounce.easeIn",
            delay: 0,
            duration: 200,
          },
          {
            scale: newWidth / 1000,
            ease: "Bounce.easeOut",
            delay: 0,
            duration: 200,
          },
        ],
      });
    });
    button.on("pointerout", function (pointer) {
      this.clearTint();
      button1Text.setFontSize("3vh");
    });

    button.on("pointerup", function (pointer) {
      this.clearTint();
      button1Text.setFontSize("3vh");
    });
    var button2Text = this.add
      .text(0, 0, `Store`, {
        fontFamily: '"Sedgwick Ave Display"',
        fontSize: "2.5vh",
      })
      .setOrigin(0.5);

    var button2 = this.add.image(0, 0, "button").setInteractive();
    button2.setScale(newWidth / 1000);
    button2.on("pointerdown", function (pointer) {
      this.setTint(11843512);
      button2Text.setFontSize("3vh");
      this.scene.scene.start("FightScene");
    });
    button2.on("pointerover", function (pointer) {
      this.setTint(11843512);
      button2Text.setFontSize("3vh");
      this.scene.tweens.chain({
        targets: button2,
        tweens: [
          {
            scale: newWidth / 900,
            ease: "Bounce.easeIn",
            delay: 0,
            duration: 200,
          },
          {
            scale: newWidth / 1000,
            ease: "Bounce.easeOut",
            delay: 0,
            duration: 200,
          },
        ],
      });
    });
    button2.on("pointerout", function (pointer) {
      this.clearTint();
      button2Text.setFontSize("2.5vh");
    });

    button2.on("pointerup", function (pointer) {
      this.clearTint();
      button2Text.setFontSize("2.5vw");
    });
    button1Container.add(button).add(button1Text);
    button2Container.add(button2).add(button2Text);
    menuContainer.add(button1Container).add(button2Container);
  }
}
export default HomeScene;
