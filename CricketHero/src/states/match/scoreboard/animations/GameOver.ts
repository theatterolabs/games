/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class GameOver extends DisplayAnimation {

        private blueGameOverLabel: Phaser.BitmapText;
        private redGameOverLabel: Phaser.BitmapText;
       
        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.GAME_OVER_STATE);

            this.blueGameOverLabel = new Phaser.BitmapText(this. game, 0, -40, "freshman", "GAME OVER", 11.5);
            this.blueGameOverLabel.anchor.set(.5);
            this.blueGameOverLabel.scale.set(5, 5);
            this.blueGameOverLabel.visible = false;
            this.content.add(this.blueGameOverLabel);

            this.redGameOverLabel = new Phaser.BitmapText(this. game, 0, -40, "freshman-red", "GAME OVER", 12.25);
            this.redGameOverLabel.anchor.set(.5);
            this.redGameOverLabel.scale.set(5, 5);
            this.content.add(this.redGameOverLabel);

            const scoreLabel = new Phaser.BitmapText(this. game, 0, 52, "freshman", "SCORE: " + GameVars.matchData.score, 13);
            scoreLabel.anchor.set(.5);
            scoreLabel.scale.set(5, 5);
            this.content.add(scoreLabel);
        }

        public update(): void {

            super.update();

            this.framesCounter ++;

            if (this.framesCounter === 45) {
                this.framesCounter = 0;
                this.blueGameOverLabel.visible = !this.blueGameOverLabel.visible;
                this.redGameOverLabel.visible = !this.redGameOverLabel.visible;
            }
        }
    }
}
