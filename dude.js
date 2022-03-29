class Dude extends Phaser.GameObjects.Image {
    constructor(scene, x, y){
      super(scene, x, y, 'cara');
    
      this.startX = x;
      this.startY = y;
    }
  
    update() {
      this.x += 1;
      this.y += 1;
    }
  
  }