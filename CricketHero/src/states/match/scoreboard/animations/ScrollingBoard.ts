/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class ScrollingBoard extends DisplayAnimation {

        private leftLabel: Phaser.BitmapText;
        private rightLabel: Phaser.BitmapText;
        
        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.SCROLLING_BOARD_STATE);

            this.leftLabel = new Phaser.BitmapText(this. game, -130, 65, "freshman", "BEST SCORE :  " + GameVars.gameData.score + "   ", 18);
            this.leftLabel.anchor.y = .5;
            this.leftLabel.scale.set(5, 5);
            this.content.add(this.leftLabel);

            this.rightLabel = new Phaser.BitmapText(this. game, this.leftLabel.x + this.leftLabel.width, 65, "freshman", "BEST SCORE : " + GameVars.gameData.score + "   ", 18);
            this.rightLabel.anchor.y = .5;
            this.rightLabel.scale.set(5, 5);
            this.content.add(this.rightLabel);
        }

        public update(): void {

            super.update();

            if (this.framesCounter === 4) {

                this.framesCounter = 0;

                const speed = 10;

                this.leftLabel.x -= speed;
                this.rightLabel.x -= speed;

                if (this.leftLabel.x < -150 - this.leftLabel.width) {
                    // dar el cambiazo
                    this.leftLabel.x = this.rightLabel.x + this.rightLabel.width;

                    const tmpLabel = this.leftLabel;
                    this.leftLabel = this.rightLabel;
                    this.rightLabel = tmpLabel;                
                }
            }

            this.framesCounter ++;
        }

        protected animationAppeared(): void {

            super.animationAppeared();
        }

        protected animationDisAppeared(): void {

            super.animationDisappeared();
        }
    }
}
