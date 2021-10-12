//Import các Scene cần dùng
import MainScene from "./scenes/MainScene.js";

//Cài đặt các thông số cho Game của mình
const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 700,
    backgroundColor: '#ffffff',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [MainScene]
};

//Khởi tạo game và runnnnnnnnnnnnn
var game = new Phaser.Game(config);

