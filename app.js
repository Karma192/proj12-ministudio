const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  backgroundColor: '#ababab',
  parent : 'phase-example',
  scene: [ Scene1 ]
};

const game = new Phaser.Game(config);