namespace CricketHero {
    
    export class ContinueButtonContainer extends Phaser.Group {

        public static currentInstance: GameOverLayer;

        private buttonsContainer: Phaser.Group;
        private countDownNumber: Phaser.Image;
        private seconds: number;
        private timerEvent: Phaser.TimerEvent;
        private continueButton: Phaser.Button;
        private replayButton: Phaser.Button;
        private continuePriceLabel: Phaser.BitmapText;
        private coinIcon: Phaser.Image;

        constructor(game: Phaser.Game) {
    
            super(game, null, "continue-button-container");

            this.y = 160 * GameVars.scaleY;

            this.seconds = 5;

            const buttonFX = new Phaser.Image(this.game, 0, 80, "texture_atlas_1", "coin_fx_extra.png");
            buttonFX.anchor.set(.5);
            buttonFX.scale.set(0);
            this.add(buttonFX);

            this.game.add.tween(buttonFX.scale)
                .to ({ x: 1, y: 1}, 400, Phaser.Easing.Cubic.Out, true, 350, 0, true);

            this.countDownNumber = new Phaser.Image(this.game, 0, -10, "texture_atlas_1", "countdown_0005.png");
            this.countDownNumber.anchor.set(.5);
            this.countDownNumber.scale.set(.6, .4);
            this.add(this.countDownNumber);

            this.continueButton = new Phaser.Button(this.game, 0, 70, "texture_atlas_4", this.onContinueButtonClicked, this);
            this.continueButton.setFrames("button_continue_" + GameVars.gameData.language + "_on.png", "button_continue_" + GameVars.gameData.language + "_off.png", "button_continue_" + GameVars.gameData.language + "_on.png",);
            this.continueButton.anchor.set(.5);
            this.add(this.continueButton);

            this.continuePriceLabel = new Phaser.BitmapText(this. game, -25, 90, "04b03_white", GameConstants.PRICE_CONTINUE.toString(), 28);
            this.continuePriceLabel.anchor.set(.5);
            this.add(this.continuePriceLabel);

            this.coinIcon = new Phaser.Image(this.game, 10, 86, "texture_atlas_1", "coin_icon.png");
            this.coinIcon.anchor.set(.5);
            this.coinIcon.scale.set(.65);
            this.add(this.coinIcon);

            this.replayButton = new Phaser.Button(this.game, 0, 70, "texture_atlas_1", this.onReplayClicked, this);
            this.replayButton.setFrames("button_home_on.png", "button_home_off.png", "button_home_on.png");
            this.replayButton.anchor.set(.5);
            this.replayButton.visible = false;
            this.replayButton.onInputUp.add( this.onReplayButtonUp, this);
            this.add(this.replayButton);

            this.game.add.tween(this.countDownNumber.scale)
                .to ({x: 1, y: 1 }, 150, Phaser.Easing.Cubic.Out, true);
            
            if (GameVars.gameData.credits >= GameConstants.PRICE_CONTINUE) {

                this.timerEvent = this.game.time.events.loop(1000, this.onSecondPassed, this);

            } else {

                this.timerEvent = null;
                this.continueButton.y = 0;
                this.continuePriceLabel.y = 20;
                this.coinIcon.y = 16;

                this.continueButton.alpha = .4;
                this.continueButton.inputEnabled = false;
                this.continuePriceLabel.alpha = .45;
                this.coinIcon.alpha = .45;

                this.countDownNumber.visible = false;

                this.replayButton.visible = true;
            }
        }

        public destroy(destroyChildren?: boolean, soft?: boolean): void {
            
            if (this.timerEvent) {
                this.timerEvent.pendingDelete = true;
            }
            
            super.destroy(destroyChildren, soft);
        }

        private onSecondPassed(): void {

            this.seconds --;

            if (this.seconds === 0) {

                this.timerEvent.pendingDelete = true;

                this.countDownNumber.visible = false;
                this.continueButton.visible = false;
                this.continuePriceLabel.visible = false;
                this.coinIcon.visible = false;

                this.game.time.events.add(500, function(): void {
                    this.replayButton.visible = true;
                }, this);

            } else {

                this.countDownNumber.frameName =  "countdown_000" + this.seconds + ".png";
                this.countDownNumber.scale.set(.6, .4);
                this.game.add.tween(this.countDownNumber.scale)
                    .to ({x: 1, y: 1 }, 150, Phaser.Easing.Cubic.Out, true);
            }
        }

        private onContinueButtonClicked(b: Phaser.Button): void {

            b.clearFrames();

            GameManager.continueButtonPressed();
                
            AudioManager.playSound("click");
        }

        private onReplayButtonUp(b: Phaser.Button): void {

            b.clearFrames();

            if (GameVars.editingLevels) {
                GameManager.goToSequenceSelectionScene();
            } else {
                GameManager.replay();
            }

            AudioManager.playSound("click");
        }

        private onReplayClicked(b: Phaser.Button): void {
           //
        }
    }
}
