namespace CricketHero {
    
    export class StartLayer extends Phaser.Group {

        public static currentInstance: StartLayer = null;

        private tapToStartImage: Phaser.Image;
        private framesCounter: number;
        private framesVisibleInvisible: number;
        private buttonsContainer: Phaser.Group;
        private gameTitle: GameTitle;
        private frame: Frame;
        private lastAndBestContainer: LastAndBestScoreContainer;
       
        constructor(game: Phaser.Game) {
    
            super(game, null, "start-layer");

            StartLayer.currentInstance = this;

            const transparentLayer = <Phaser.Sprite> this.create(0, 0, this.game.cache.getBitmapData(GameConstants.WHITE_SQUARE));
            transparentLayer.scale.set(GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE);
            transparentLayer.alpha = 0;
            transparentLayer.inputEnabled = true;
            transparentLayer.events.onInputDown.add(this.disappear, this);
        
            this.framesCounter = 0;
            this.framesVisibleInvisible = 25;

            this.tapToStartImage = new Phaser.Image(this.game, GameConstants.GAME_WIDTH / 2, 430, "texture_atlas_4", this.game.device.touch ? "tap_to_start_" + GameVars.gameData.language + ".png" : "click_to_start_" + GameVars.gameData.language + ".png");
            this.tapToStartImage.anchor.set(.5);
            this.tapToStartImage.scale.y = GameVars.scaleY;
            this.add(this.tapToStartImage);

            if (GameVars.gameData.language === GameConstants.LANGUAGE_HI) {
                this.tapToStartImage.scale.set(.85, .85 * GameVars.scaleY);
            } else if (GameVars.gameData.language === GameConstants.LANGUAGE_PT) {
                this.tapToStartImage.scale.set(.75, .75 * GameVars.scaleY);
            }

            this.frame = new Frame(this.game);
            this.add(this.frame);

            this.buttonsContainer = new Phaser.Group(this.game);
            this.add(this.buttonsContainer);

            if (!GameVars.gameData.handIconOnStartShown) {

                const handCursor = new Phaser.Image(this.game, GameConstants.GAME_WIDTH / 2 - 35, 450, "texture_atlas_1", "hand-cursor.png");
                handCursor.anchor.x = 1;
                handCursor.scale.y = GameVars.scaleY;
                this.add(handCursor);

                this.game.add.tween(handCursor.scale)
                    .to({x: 1.1, y: 1.1 * GameVars.scaleY}, 350, Phaser.Easing.Cubic.Out, true, 0, -1, true);
            }

            if (GameVars.replayed) {

                this.gameTitle = null;
                DisplayManager.setState(DisplayManager.PLAYER_AHEAD_STATE);

                this.lastAndBestContainer = new LastAndBestScoreContainer(this.game);
                this.add(this.lastAndBestContainer);

            } else {

                this.gameTitle = new GameTitle(this.game);
                this.add(this.gameTitle);

                this.lastAndBestContainer = null;
            }

            const languageSelectionButtonsContainer = new LanguageSelectionButtonsContainer(this.game);
            languageSelectionButtonsContainer.x = 100;
            languageSelectionButtonsContainer.y = GameConstants.GAME_HEIGHT - 40 * GameVars.scaleY;
            this.buttonsContainer.add(languageSelectionButtonsContainer);

            const audioButton = new AudioButton(this.game);
            audioButton.x = 40;
            audioButton.y = GameConstants.GAME_HEIGHT - 40 * GameVars.scaleY;
            audioButton.scale.y = GameVars.scaleY;
            this.buttonsContainer.add(audioButton);

            if (!GameVars.replayed && GameConstants.SPONSOR !== GameConstants.SPONSOR_FUNO) {
                AudioManager.playSound("splash_title_temp");
            }

            const gameText = this.game.cache.getJSON("game-text") [GameVars.gameData.language];

            if (GameConstants.SPONSOR !== GameConstants.SPONSOR_FUNO) {
                const copyRightLabel = new Phaser.Text(this.game, GameConstants.GAME_WIDTH - 18, GameConstants.GAME_HEIGHT - 10 * GameVars.scaleY, gameText.MADE_BY, {font: "20px Arial", fill: "#FFFFFF"});
                copyRightLabel.anchor.set(1);
                copyRightLabel.scale.y = GameVars.scaleY;
                this.buttonsContainer.add(copyRightLabel);
            }  
        }

        public destroy(destroyChildren?: boolean, soft?: boolean): void {

            StartLayer.currentInstance = null;

            AudioManager.stopSound("splash_title_temp", true);

            super.destroy(destroyChildren, soft);
        }

        public update(): void {

            super.update();

            this.framesCounter ++;

            if (this.framesCounter === this.framesVisibleInvisible) {
                this.framesCounter = 0;
                this.framesVisibleInvisible = this.framesVisibleInvisible === 18 ? 40 : 18;
                this.tapToStartImage.visible = !this.tapToStartImage.visible;
            }
        }

        private disappear() {

            if (this.gameTitle) {
                this.gameTitle.disappear();
            }

            if (this.lastAndBestContainer) {
                this.lastAndBestContainer.disappear();
            }
            
            this.frame.disappear();

            this.game.add.tween(this.buttonsContainer)
                .to ({ y: 100 * GameVars.scaleY }, 300, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    GameManager.startMatch();
                    this.destroy();
                }, this);
        }
    }
}
