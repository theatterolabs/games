namespace CricketHero {

    export class PreLoader extends Phaser.State {

        public static currentInstance: PreLoader;

        private preloadBar: Phaser.Sprite;
        private loadingPercentagelabel: Phaser.BitmapText;
       
        public init(): void {
            
            PreLoader.currentInstance = this;
        }
        
        public preload(): void {

            Phaser.Canvas.setBackgroundColor(this.game.canvas, "#000000");

            this.generateBitmapData();
            this.composeScene();
            this.loadAssets();
        }

        public create(): void {

            this.loadingPercentagelabel.fontSize = 52;
            this.loadingPercentagelabel.text = "GAME LOADED";

            GameManager.onGameAssetsLoaded();
        }
        
        public shutdown(): void {
            
            PreLoader.currentInstance = this;
            
            super.shutdown();
        }

        private updateLoadedPercentage(): void {

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                PokiSDK.gameLoadingProgress({percentageDone: this.load.progress});
            }

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIX) {

                GamePix.game.gameLoading(this.load.progress);
            }

            this.loadingPercentagelabel.text = this.load.progress < 10 ? "0" + this.load.progress : this.load.progress.toString();
        }

        private generateBitmapData(): void {

            let bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.BLACK_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#000000";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( 16 , 128, "gradient-sky", true);
            let grd: CanvasGradient = bmd.ctx.createLinearGradient(0, 0 , 0, 128);
            grd.addColorStop(0, "#0C9ED0"); // sets the first color
            grd.addColorStop(1, "#14CCE2"); // sets the second color
            bmd.ctx.fillStyle = grd;
            bmd.ctx.fillRect(0, 0, 16, 128);

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.BLUE_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#0000FF";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.GRAY_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#333333";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.LIGHT_GRAY_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#555555";
            bmd.ctx.fill();
            
            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.WHITE_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#FFFFFF";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.RED_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#FF0000";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.DARK_ORANGE_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#b25902";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.DARK_BLUE_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#222E3E";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.YELLOW_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#FFFF00";
            bmd.ctx.fill();

            bmd = this.game.add.bitmapData( GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE, GameConstants.GREEN_SQUARE, true);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, GameConstants.BITMAP_SIZE, GameConstants.BITMAP_SIZE);
            bmd.ctx.fillStyle = "#00FF00";
            bmd.ctx.fill();
        }

        private composeScene(): void {

            const background = this.add.sprite(0, 0, this.game.cache.getBitmapData("gradient-sky"));
            background.scale.set(GameConstants.GAME_WIDTH / 16, GameConstants.GAME_HEIGHT / 128);

            const scaledItemsContainer = this.add.group();
            scaledItemsContainer.x = GameConstants.GAME_WIDTH / 2;
            scaledItemsContainer.y = GameConstants.GAME_HEIGHT / 2;
            scaledItemsContainer.scale.y = GameVars.scaleY;

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_LAGGED) {
            
                const sponsorLogo = new Phaser.Image(this.game, 0, -80, "sponsor-logo");
                sponsorLogo.anchor.set(.5);
                scaledItemsContainer.add(sponsorLogo);

                const presentsLabel = new Phaser.BitmapText(this. game, 0, 20, "04b03_white", "PRESENTS", 34);
                presentsLabel.anchor.set(.5);
                scaledItemsContainer.add(presentsLabel);
            }

            this.loadingPercentagelabel = new Phaser.BitmapText(this. game, 0, 235, "04b03_white", "00", 68);
            this.loadingPercentagelabel.anchor.set(.5);
            scaledItemsContainer.add(this.loadingPercentagelabel);
        }
        
        private loadAssets(): void {

            this.game.load.crossOrigin = "Anonymous";

            // los textos del juego
            this.load.json("game-text", "assets/config/game-text.json");


            // la secuencia de las bolas
            this.load.json("shots-data", "assets/config/shotsData.json");

            // la secuencia de los estados del stage
            this.load.json("stage-state-data", "assets/config/stageStateData.json");

            // bitmap fonts
            this.load.bitmapFont("freshman", "assets/fonts/freshman.png", "assets/fonts/freshman.xml");
            this.load.bitmapFont("freshman-red", "assets/fonts/freshman-red.png", "assets/fonts/freshman-red.xml");
            this.load.bitmapFont("freshman_white", "assets/fonts/freshman_white.png", "assets/fonts/freshman_white.xml");
            this.load.bitmapFont("alfa_slab_one", "assets/fonts/alfa_slab_one.png", "assets/fonts/alfa_slab_one.xml");

            if (GameConstants.DEVELOPMENT) {
                this.load.atlas("texture_atlas_0", "assets/texture_atlas_0.png", "assets/texture_atlas_0.json");
            }
            
            this.load.atlas("texture_atlas_1", "assets/texture_atlas_1.png", "assets/texture_atlas_1.json");
            this.load.atlas("texture_atlas_2", "assets/texture_atlas_2.png", "assets/texture_atlas_2.json");
            this.load.atlas("texture_atlas_4", "assets/texture_atlas_4.png", "assets/texture_atlas_4.json");

            // las animaciones
            this.load.atlas("texture_atlas_3", "assets/texture_atlas_3.png", "assets/texture_atlas_3.json");
            this.load.xml("cricket-player", "assets/spriter-animations/cricket-player.xml");
            this.load.xml("wickets", "assets/spriter-animations/wickets.xml");

            // AUDIO
            this.load.audiosprite("audio-sprite", ["assets/audio/audiosprite.mp3", "assets/audio/audiosprite.ogg"], "assets/audio/audiosprite.json");

            this.load.onFileComplete.add(this.updateLoadedPercentage, this);
        }
    }
}
