export default class MainScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'MAINSCENE'
        });
    }
    //Nơi để load các assets trước khi chúng được sử dụng
    preload(){
        this.load.image('Background', 'assets/BG final.png');
        this.load.image('Female', 'assets/Female_character.png');
        this.load.image('Male', 'assets/Male_character.png');
        this.load.image('Text_1', 'assets/Text_Image.png');
        this.load.image('Text_2', 'assets/Text_Image_1.png');
        this.load.image('Logo', 'assets/pixel logo.png')
    }
    //Nơi để thêm ra các đối tượng như image, text,... cần có trong Scene này
    create(){
        var background = this.add.image(0, 0, 'Background').setDisplayOrigin(0,0).setScale(0.7, 0.7);
        var male = this.add.image(200, 500, 'Male').setDepth(1).setScale(0.05, 0.05);
        var female = this.add.image(500, 500, 'Female').setDepth(1).setScale(0.05, 0.05);
        var text_1 = this.add.image(500, 310, 'Text_1').setScale(0.7, 0.7).setVisible(false);
        var text_2 = this.add.image(175, 300, 'Text_2').setScale(0.7, 0.7).setVisible(false);
        var logo = this.add.image(350, 120, 'Logo').setScale(0.2, 0.2).setVisible(false);

        female.setInteractive();
        female.on('pointerdown', () => {
            text_1.setVisible(true);
        })

        male.setInteractive();
        male.on('pointerdown', () => {
            text_2.setVisible(true);
        })
        
        background.setInteractive();
        background.on('pointerdown', () => {
            logo.setVisible(true);
        })
        
    }
    //Phương thức update sẽ được gọi mỗi lần cho mỗi frame của Scene
    //Đây cũng là nơi để bạn thực hiện hoá các ý tưởng của mình vào game
    update(){

    }
}