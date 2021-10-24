
class CodeDeLam extends Phaser.Physics.Arcade.ArcadePhysics{
    constructor(){

    }
    preload(){

    }
    update(){
        player.runNow();
        if (player.touchEnemies()){
            player.dead();
        }
    }
}