// class SceneSelectionScene extends Phaser.Scene {
//   constructor(args) {
//     super();
//   }
//   preload() {}
//   create() {
//     var newHeight = this.game.config.height;
//     var newWidth = this.game.config.width;
//     let background = this.add.video(0, 0, 'background');
//     background.setOrigin(0, 0);
//     background.setSize(newWidth, newHeight);
//     background.setScale(newWidth / 1080);
//     background.play(true);
//     // Add 6 images to the spinning scene
// for (var i = 0; i < 6; i++) {
//   var image = new Phaser.Sprite({
//     key: 'image' + i,
//     x: 0,
//     y: 0,
//     src: 'assets/images/image' + i + '.png'
//   });

//   spinningScene.add(image);
// }

// // Add a rotation tween to each image
// for (var i = 0; i < 6; i++) {
//   var image = spinningScene.get(i);
//   var tween = image.tween({
//     angle: 0,
//     angleMax: 360,
//     duration: Math.random() * 1000
//   });

//   tween.onComplete.add(function() {
//     // When the tween completes, select the image
//     var selectedImage = image;
//     console.log('The selected image is', selectedImage.key);
//   });
// }
// var timer = new Phaser.Timer();

// // Start the timer
// timer.start(function() {
//   // Rotate each image by a random amount
//   for (var i = 0; i < 6; i++) {
//     images[i].rotation += Math.random() * 360;
//   }

//   // Check if the timer has reached its maximum value
//   if (timer.time >= 1000) {
//     // Stop the timer
//     timer.stop();

//     // Select the image that is currently facing the camera
//     var selectedImage = images[0];

//     for (var i = 1; i < 6; i++) {
//       if (images[i].rotation < selectedImage.rotation) {
//         selectedImage = images[i];
//       }
//     }

//     // Do something with the selected image
//     console.log('The selected image is:', selectedImage.key);
//   }
// });
// this.spinningGroup = this.add.group();

// // Create six spinning sprites and add them to the group
// for (let i = 0; i < 3; i++) {
//     let xPos = Phaser.Math.Between(100, 500);
//     let yPos = Phaser.Math.Between(100, 500);
//     let imageKey = 'front' + (i + 1);

//     let spinningSprite = this.add.sprite(xPos, yPos, imageKey);
//     spinningSprite.setOrigin(0.5);
//     spinningSprite.setDepth(i);
//     spinningSprite.spinSpeed = Phaser.Math.Between(1, 5);
//     this.spinningGroup.add(spinningSprite);
// }

// // Call the spin method to rotate the group
// this.spin();
// spin() {
//   // Rotate the group of spinning sprites for a random amount of time
//   let spinTime = Phaser.Math.Between(2000, 4000);
//   let spinTween = this.tweens.add({
//       targets: this.spinningGroup.getChildren(),
//       scaleX: { value: 0, duration: 1000, yoyo: true },
//                 texture: { value: 'front', duration: 0, delay: 1000 },
//       angle: 360,
//       duration: spinTime,
//       repeat: 0,
//       ease: 'Linear',
//       onComplete: () => {
//           // Select a random spinning sprite to stop on
//           let selectedIndex = Phaser.Math.Between(0, 5);
//           let selectedSprite = this.spinningGroup.getChildren()[selectedIndex];

//           // Change the image of the selected sprite
//           // selectedSprite.setTexture('back');
//           console.log(selectedSprite);
//           // Call the spin method again to start a new spin
//           this.spin();
//       }
//   });
// }
//   }
// }
// export default SceneSelectionScene;
