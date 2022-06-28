namespace CricketHero {
    
    export class PauseLayer extends Phaser.Group {

        constructor(game: Phaser.Game) {
    
            super(game, null, "two-circles-tutorial-layer");

            const transparentLayer = <Phaser.Sprite> this.create(0, 0, this.game.cache.getBitmapData(GameConstants.DARK_BLUE_SQUARE));
            transparentLayer.alpha = .25;
            transparentLayer.scale.set(GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE);
            transparentLayer.inputEnabled = true;
            transparentLayer.events.onInputDown.add(this.onDownTransparentLayer, this);

            const closeButton = new Phaser.Button(this.game, 5, 5 * GameVars.scaleY, "texture_atlas_1", this.onBackButtonClicked, this);
            closeButton.setFrames("button_close_on.png", "button_close_off.png", "button_close_on.png");
            closeButton.scale.y = GameVars.scaleY;
            this.add(closeButton);

            const resetButton = new Phaser.Button(this.game, GameConstants.GAME_WIDTH / 2, GameConstants.GAME_HEIGHT / 2 + 190 * GameVars.scaleY, "texture_atlas_4", this.oResetButtonClicked, this);
            resetButton.setFrames("button_reset_" + GameVars.gameData.language + "_on.png", "button_reset_" + GameVars.gameData.language + "_off.png", "button_reset_" + GameVars.gameData.language + "_on.png");
            resetButton.anchor.set(.5);
            resetButton.scale.y = GameVars.scaleY;
            this.add(resetButton); 

            const audioButton = new AudioButton(this.game);
            audioButton.x = 35;
            audioButton.y = GameConstants.GAME_HEIGHT - 35 * GameVars.scaleY;
            audioButton.scale.y = GameVars.scaleY;
            this.add(audioButton);        
        }

        private onDownTransparentLayer(): void {

            MatchManager.resumeGame();

            AudioManager.playSound("click");
        }

        private onBackButtonClicked(b?: Phaser.Button): void {

            b.clearFrames();
            
            MatchManager.resumeGame();

            AudioManager.playSound("click");
        }

        private oResetButtonClicked(b: Phaser.Button): void {

            b.clearFrames();

            GameManager.replay();

            if (GameVars.isPlayerOnFire) {
                AudioManager.stopSound("on_fire_loop", false, true);
            }

            AudioManager.playSound("click");
        }
    }
}
