namespace CricketHero {

    export class Boot extends Phaser.State {

        public static currentInstance: Boot;
        public static bootedInWrongOrientation: boolean;

        public init(): void {

            Boot.currentInstance = this;

            this.input.maxPointers = 1;

            this.game.stage.disableVisibilityChange = true;

            // por el problema del stock browser
            this.game.stage.backgroundColor = "#0C9ED0";

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            if (this.game.device.desktop) {

                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                GameVars.scaleY = 1;

                
            } else {

                this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
                GameVars.scaleY = (4 / 3) / (window.innerHeight / window.innerWidth);

                if (GameConstants.SPONSOR !== GameConstants.SPONSOR_GAMEPIX) {
                    this.game.scale.isPortrait = false;
                    this.game.scale.forceOrientation(true, false);
                }
            }

            this.game.onBlur.add(function(): void {
                Game.currentInstance.sound.mute = true;
                MatchManager.pauseGame();
            }, this);

            this.game.onFocus.add(function(): void {
                if (!GameVars.gameData.muted) {
                    Game.currentInstance.sound.mute = false;
                }
            }, this);

            if ( GameConstants.DEVELOPMENT ) {
                // para poder medir las fps
                this.game.time.advancedTiming = true;
            }

        }

        public preload(): void {

            this.load.crossOrigin = "anonymous";

            this.load.bitmapFont("04b03_white", "assets/fonts/04b03_white.png", "assets/fonts/04b03_white.xml");

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_LAGGED) {
                this.load.image("sponsor-logo", "assets/lagged-logo.png");
            }            
        }

        public create(): void {

            if (!this.game.device.desktop) {

                const w = window.innerWidth;
                const h = window.innerHeight;
    
                if (w < h) {
                    Boot.bootedInWrongOrientation = false;
                    GameManager.init(this.game);
                } else {
                    Boot.bootedInWrongOrientation = true;
    
                    document.getElementById("orientation").style.display = "block";
                    document.getElementById("canvas").style.display = "none"; 
                }  
            } else {
                GameManager.init(this.game);
            }
        }

        public shutdown(): void {

            Boot.currentInstance = null;
            super.shutdown();
        }
    }
}
