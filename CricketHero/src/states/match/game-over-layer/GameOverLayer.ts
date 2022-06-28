namespace CricketHero {
    
    export class GameOverLayer extends Phaser.Group {

        public static currentInstance: GameOverLayer = null;

        private buttonsContainer: Phaser.Group;
        private replayButton: Phaser.Button;
        private continueButtonContainer: ContinueButtonContainer;

        constructor(game: Phaser.Game) {
    
            super(game, null, "start-layer");

            GameOverLayer.currentInstance = this;
            GameVars.playing = false;

            this.x = GameConstants.GAME_WIDTH / 2;
            this.y = GameConstants.GAME_HEIGHT / 2;
  
            const transparentLayer = <Phaser.Sprite> this.create(0, 0, this.game.cache.getBitmapData(GameConstants.WHITE_SQUARE));
            transparentLayer.scale.set(GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE);
            transparentLayer.anchor.set(.5);
            transparentLayer.alpha = 0;
            transparentLayer.inputEnabled = true;
            transparentLayer.events.onInputDown.add(this.onClickTransparentLayer, this);
        
            this.buttonsContainer = new Phaser.Group(this.game);
            this.buttonsContainer.scale.y = GameVars.scaleY;
            this.add(this.buttonsContainer);

            if ( GameVars.matchData.continued ) {

                this.replayButton =  new Phaser.Button(this.game, 0, 240, "texture_atlas_1", this.onReplayClicked, this);
                this.replayButton.setFrames("button_home_on.png", "button_home_off.png", "button_home_on.png");
                this.replayButton.anchor.set(.5);
                this.replayButton.onInputUp.add( this.onReplayButtonUp, this);
                this.buttonsContainer.add( this.replayButton);

                this.continueButtonContainer = null;

            } else {

                this.replayButton = null;

                this.continueButtonContainer = new ContinueButtonContainer(this.game);
                this.buttonsContainer.add(this.continueButtonContainer);
            }
           
            const audioButton = new AudioButton(this.game);
            audioButton.x = 35 - GameConstants.GAME_WIDTH / 2;
            audioButton.y = (GameConstants.GAME_HEIGHT / 2 - 35) / GameVars.scaleY;
            this.buttonsContainer.add(audioButton);
        }

        public destroy(destroyChildren?: boolean, soft?: boolean): void {

            GameOverLayer.currentInstance = null;

            super.destroy(destroyChildren, soft);
        }

        private onReplayButtonUp(): void {

            GameManager.replay();

            AudioManager.playSound("click");
        }

        private onReplayClicked(): void {
            //
        }

        private onClickTransparentLayer(): void {
            // nada
        }
    }
}
