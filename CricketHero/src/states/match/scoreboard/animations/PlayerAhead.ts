/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class PlayerAhead extends DisplayAnimation {

        private playerAvatar: Phaser.Image;
        private leftPlayerNameLabel: Phaser.BitmapText;
        private rightPlayerNameLabel: Phaser.BitmapText;
        private labelsContainer: Phaser.Group;
        private avatarContainer: Phaser.Group;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.PLAYER_AHEAD_STATE);

            let playerName: string;

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_LAGGED) {
                playerName = "lagged.com";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "lagged-logo.png");
            } else if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                playerName = "CRICKET HERO";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "logo-poki.png");
            } else if (GameConstants.SPONSOR === GameConstants.SPONSOR_MINIJUEGOS) {
                playerName = "minijuegos.com";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "minijuegos-logo.png");
            } else if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEZOP) {
                playerName = "ravalmatic";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "logo-ravalmatic.png");
            } else if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIND) {
                playerName = "gamepind";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "cricketer_avatar.png");
            }  else if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEZOP) {
                playerName = "ravalmatic.com";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "logo-ravalmatic.png");
            } else if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIX) {
                playerName = "gamepix";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "logo-gamepix.png");
            }  else if (GameConstants.SPONSOR === GameConstants.SPONSOR_FUNO) {
                playerName = "CRICKET HERO";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "cricketer_avatar.png");
            } else {
                playerName = "ravalmatic.com";
                this.playerAvatar = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "logo-ravalmatic.png");
            }

            this.avatarContainer = new Phaser.Group(this.game);
            this.content.add(this.avatarContainer);

            this.playerAvatar.anchor.set(.5);
            this.playerAvatar.width = 200,
            this.playerAvatar.height = 200;
            this.playerAvatar.smoothed = false;
            this.avatarContainer.add(this.playerAvatar);  

            const leftStarsAnim = new Phaser.Sprite(this.game, -150, -100, "texture_atlas_2", "display_stars_01.png");
            leftStarsAnim.scale.set(5);
            leftStarsAnim.animations.add("scroll", Phaser.Animation.generateFrameNames("display_stars_", 1, 10, ".png", 2));
            leftStarsAnim.animations.play("scroll", 6, true);
            this.avatarContainer.add(leftStarsAnim);

            const rightStarsAnim = new Phaser.Sprite(this.game, 150 - leftStarsAnim.width + 5, -100, "texture_atlas_2", "display_stars_01.png");
            rightStarsAnim.scale.set(5);
            rightStarsAnim.animations.add("scroll", Phaser.Animation.generateFrameNames("display_stars_", 1, 10, ".png", 2));
            rightStarsAnim.animations.play("scroll", 6, true);
            this.avatarContainer.add(rightStarsAnim);

            this.labelsContainer = new Phaser.Group(this.game);
            this.labelsContainer.visible = false;
            this.content.add(this.labelsContainer);

            let infoLabeStr: string;

            if (GameVars.gameData.score < 15) {
                infoLabeStr = "TRY HARDER";
            } else if (GameVars.gameData.score < 30) {
                infoLabeStr = "NOT TOO BAD";
            } else if (GameVars.gameData.score < 50) {
                infoLabeStr = "WELL DONE";
            } else if (GameVars.gameData.score < 90) {
                infoLabeStr = "GREAT JOB";
            } else {
                infoLabeStr = "YOU ARE THE BOSS";
            }

            const infoLabel = new Phaser.BitmapText(this. game, 0, -82, "alfa_slab_one", infoLabeStr, 4.15);
            infoLabel.anchor.set(.5);
            infoLabel.scale.set(5, 5);
            infoLabel.tint = 0x00A2F2;
            this.labelsContainer.add(infoLabel);
            
            let nameStr = "";

            for (let i = 0; i < 4; i++ ) {
                nameStr += playerName;
                nameStr += "   ";
            }

            this.leftPlayerNameLabel = new Phaser.BitmapText(this. game, -100, -52, "alfa_slab_one", nameStr, 6);
            this.leftPlayerNameLabel.anchor.y = .5;
            this.leftPlayerNameLabel.scale.set(5, 5);
            this.leftPlayerNameLabel.tint = 0xFE0E42;
            this.labelsContainer.add(this.leftPlayerNameLabel);

            this.rightPlayerNameLabel = new Phaser.BitmapText(this. game, this.leftPlayerNameLabel.x + this.leftPlayerNameLabel.width, -52, "alfa_slab_one", nameStr, 6);
            this.rightPlayerNameLabel.anchor.y = .5;
            this.rightPlayerNameLabel.scale.set(5, 5);
            this.rightPlayerNameLabel.tint = 0xFE0E42;
            this.labelsContainer.add(this.rightPlayerNameLabel);

            let scoreTintColor = 0x00A2F2;
            let score = GameVars.gameData.score;

            let fontSize: number;
            let px: number;

            if (score < 100) {
                fontSize = 36;
                px = -8;
            } else if (score < 200) {
                fontSize = 30;
                px = 8;
            } else {
                fontSize = 26;
                px = 0;
            }

            const playerScore = new Phaser.BitmapText(this. game, px, 48, "freshman_white", score.toString(), fontSize);
            playerScore.anchor.set(.5);
            playerScore.scale.set(5, 5);
            playerScore.tint = scoreTintColor;
            this.labelsContainer.add(playerScore);

            this.game.time.events.loop(2000, this.setLabelsVisibility, this);
        }

        public update(): void {

            super.update();

            if (this.framesCounter % 4 === 0) {

                const speed = 10;

                this.leftPlayerNameLabel.x -= speed;
                this.rightPlayerNameLabel.x -= speed;

                if (this.leftPlayerNameLabel.x < -150 - this.leftPlayerNameLabel.width) {
                    // dar el cambiazo
                    this.leftPlayerNameLabel.x = this.rightPlayerNameLabel.x + this.rightPlayerNameLabel.width;

                    const tmpLabel = this.leftPlayerNameLabel;
                    this.leftPlayerNameLabel = this.rightPlayerNameLabel;
                    this.rightPlayerNameLabel = tmpLabel;                
                }
            }

            this.framesCounter ++;
        }

        private setLabelsVisibility(): void {
            
            this.labelsContainer.visible = !this.labelsContainer.visible;
            this.avatarContainer.visible = !this.avatarContainer.visible;
        }
    }
}
