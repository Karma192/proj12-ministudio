var zombs = [];
var dude;
var scene;

class Scene1 extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image('cara', 'assets/cara.png');
    this.load.image('zomb', 'assets/zomb.png');

    this.load.audio('bread', [
      'assets/sound/bread.mp3'
    ]);
  }

  create() {
    scene = this;
    dude = this.add.existing(new Dude(this, 400, 400));
    for (let i = 0; i < 20; i++) {
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          var posx = Phaser.Math.Between(0, 800);
          var posy = Phaser.Math.Between(0, 800);
          zombs.push(this.add.existing(new Zomb(this, posx, posy, 5, dude)));
        },
      })

    }

    this.sound.pauseOnBlur = false;

    var music = this.sound.add('bread');

    music.play();
  }

  update() {

    dude.update();

    zombs.forEach(function (zomb) {
      zomb.update();
    });
  }
}