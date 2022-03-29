class Zomb extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'zomb');

        this.startX = x;
        this.startY = y;

        this.speed = 0.01;
    }

    preload() {
        this.load.audio('scream', [
            'assets/screamsZ.mp3'
        ]);
    }

    update() {
        this.x += (dude.x - this.x) * this.speed;
        this.y += (dude.y - this.y) * this.speed;
        /*var scr = Phaser.Math.Between(0, 25);
        if (scr >= 20) {
            var scream = this.sound.add('scream');
            scream.play();
        }*/
    }

    damaged() {
        this.x -= (dude.x - this.x) * (this.speed * 2);
        this.y -= (dude.y - this.y) * (this.speed * 2);
    }
}