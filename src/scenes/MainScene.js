export default class MainScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'MAINSCENE'
        });
    }
    //Nơi để load các assets trước khi chúng được sử dụng
    //THAY DOI
    preload(){
        this.load.image('Background', 'assets/BG_final.png');
        this.load.image('Female', 'assets/Female_character.png');
        this.load.image('Male', 'assets/Male_character.png');
        this.load.image('Text_1', 'assets/Text_Image.png');
        this.load.image('Text_2', 'assets/Text_Image_1.png');
        this.load.image('Logo', 'assets/pixel logo.png')
        this.load.audio('Bg_sound', 'assets/background_sound.mp3');
        this.load.audio('Male_sound', 'assets/male_sound.mp3');
        this.load.audio('Female_sound', 'assets/female_sound.mp3');
    }
    //Nơi để thêm ra các đối tượng như image, text,... cần có trong Scene này
    create(){
        var background = this.add.image(0, 0, 'Background').setDisplayOrigin(0,0).setScale(0.7, 0.7);
        var male = this.add.image(200, 500, 'Male').setDepth(1).setScale(0.05, 0.05);
        var female = this.add.image(500, 500, 'Female').setDepth(1).setScale(0.05, 0.05);
        var text_1 = this.add.image(500, 310, 'Text_1').setScale(0.7, 0.7).setVisible(false);
        var text_2 = this.add.image(175, 300, 'Text_2').setScale(0.7, 0.7).setVisible(false);
        var logo = this.add.image(350, 120, 'Logo').setScale(0.2, 0.2).setVisible(false);
        var background_sound = this.sound.add('Bg_sound',{
            volume: 0.3,
            loop: true
        }).play();
        var male_sound = this.sound.add('Male_sound', {volume: 0.2});
        var female_sound = this.sound.add('Female_sound', {volume: 0.2});
        female.setInteractive();
        female.on('pointerdown', () => {
            if(text_2.visible && !male_sound.isPlaying){
                if(!female_sound.isPlaying){
                    female_sound.play();
                }
                text_1.setVisible(true);
            }
        })

        male.setInteractive();
        male.on('pointerdown', () => {
            text_2.setVisible(true);
            if(!male_sound.isPlaying){
                male_sound.play();
            }
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