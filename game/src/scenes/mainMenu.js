import Phaser from 'phaser'

var exit;

class MainMenu extends Phaser.Scene
{
	preload()
    {
        this.load.image('main', 'assets/sprites/menu/main.jpg');
        this.load.image('logo', 'assets/sprites/menu/logo.png');
        this.load.image('start', 'assets/sprites/menu/startButton.png');
        this.load.image('logo2', 'assets/sprites/menu/logo2.png')
        this.load.audio('bread', ['assets/SFX/bread.mp3'])
    }

    create()
    {
        this.add.image(520, 380, 'main');
        this.add.image(950, 700, 'logo2').setScale(0.2);
        this.add.image(520, 350, 'logo');
        this.add.image(500, 600, 'start');
        //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        //var text = this.add.text(315, 600, "~Press Any Key for Start~", style);
        //text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        var music = this.sound.add('bread');
        this.sound.pauseOnBlur = false;
        //music.play();
    }

    update()
    {
        this.input.keyboard.on('keyup', function (e) {
            if (e.key == 0 && exit != 1) {
              exit = 1;
              this.scene.start("gamescene");
            }
          }, this);
    }
}

export default MainMenu