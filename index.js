import HomeScene from './src/scenes/HomeScene.js';
import Preloader from './src/scenes/Preloader.js';
import FightScene from './src/scenes/FightScene.js';
import CharacterSelectionScene from './src/scenes/CharacterSelectionScene.js';
import SceneSelectionScene from './src/scenes/SceneSelectionScene.js';

var newHeight = window.innerHeight;
var newWidth = window.innerWidth - 25;

class Game extends Phaser.Game {
  constructor() {
    super(config);
    let fightScene = new FightScene({
      rightChar: 'Karrigan',
      leftChar: 'Lillith',
    });
    this.scene.add('HomeScene', HomeScene);
    this.scene.add('Preloader', Preloader);
    this.scene.add('CharacterSelectionScene', CharacterSelectionScene);
    this.scene.add('SceneSelectionScene', SceneSelectionScene);
    this.scene.add('FightScene', fightScene);
    this.scene.start('Preloader');
  }
}
Game.srx = Math.max(window.innerWidth, window.innerHeight);
Game.sry = Math.min(window.innerWidth, window.innerHeight);

Game.logicWidth = 480;
Game.logicHeight = 320;
var r = Game.logicWidth / Game.logicHeight;
if (Game.srx >= 360) {
  Game.screen = 'small';
  Game.gameWidth = 360;
}
if (Game.srx >= 480) {
  Game.screen = 'normal';
  Game.gameWidth = 480;
}
if (Game.srx >= 720) {
  Game.screen = 'large';
  Game.gameWidth = 720;
}
if (Game.srx >= 960) {
  Game.screen = 'xlarge';
  Game.gameWidth = 960;
}
if (Game.srx >= 1440) {
  Game.screen = 'xxlarge';
  Game.gameWidth = 1440;
}

Game.gameHeight = Game.gameWidth / r;
//We need these methods later to convert the logical game position to display position, So convertWidth(logicWidth) will be right edge for all screens
Game.convertWidth = function (value) {
  return (value / Game.logicWidth) * Game.gameWidth;
};
Game.convertHeight = function (value) {
  return (value / Game.logicHeight) * Game.gameHeight;
};
var config = {
  type: Phaser.AUTO,
  parent: 'gatorCamp',
  width: Game.gameWidth,
  height: Game.gameHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
window.onload = function () {
  window.game = new Game();
};
