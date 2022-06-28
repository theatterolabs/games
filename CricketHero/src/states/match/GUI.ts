namespace CricketHero {
    
    export class GUI extends Phaser.Group {

        private pauseButton: Phaser.Button;
    
        constructor(game: Phaser.Game) {
    
            super(game, null, "gui");

            this.pauseButton = new Phaser.Button(this.game, 5, 5, "texture_atlas_1", this.onPauseButtonClicked, this);
            this.pauseButton.setFrames("button_pause_on.png", "button_pause_off.png", "button_pause_on.png");
            this.pauseButton.scale.y = GameVars.scaleY;
            this.pauseButton.forceOut = true;
            this.pauseButton.visible = false;
            this.add(this.pauseButton);
        }

        public countdownEnded(): void {

            if (GameVars.gameData.hitTutorialShown) {
                this.pauseButton.visible = true;
            }
        }

        public pause(): void {

            this.pauseButton.visible = false;
        }

        public resume(): void {

            if (!GameVars.gameOver) {
                this.pauseButton.visible = true;
            }
        }

        private onPauseButtonClicked(): void {
            
            MatchManager.pauseGame();

            AudioManager.playSound("click");
        }
    }
}
