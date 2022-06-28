namespace CricketHero {
    
    export class HUD extends Phaser.Group {

        public static currentInstance: HUD;

        private fpsLabel: Phaser.Text;
        private creditsLabel: Phaser.BitmapText;
        private coinIcon: Phaser.Image;
        private coinTweening: boolean;
    
        constructor(game: Phaser.Game) {
    
            super(game, null, "hud");

            HUD.currentInstance = this;

            this.coinTweening = false;

            this.x = 455;
            this.y = -100 * GameVars.scaleY;
            this.scale.y = GameVars.scaleY;

            this.coinIcon = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "coin_icon.png");
            this.coinIcon.anchor.set(.5);
            this.add(this.coinIcon);

            this.creditsLabel = new Phaser.BitmapText(this. game, -25, 8, "04b03_white", GameVars.gameData.credits.toString(), 42);
            this.creditsLabel.anchor.set(1, .5);
            this.add(this.creditsLabel);

            if (GameConstants.DEVELOPMENT) {

                this.fpsLabel = new Phaser.Text(this.game, 5 - this.x, -30, "60", { font: "20px Arial", fill: "#ffff00", align: "center"});
                this.add(this.fpsLabel);
            }

            if (GameVars.enterGameDirectly) {
                this.y = 30 * GameVars.scaleY;
            }
        }

        public update(): void {

            super.update();

            if (GameConstants.DEVELOPMENT) {
                this.fpsLabel.text = "" + this.game.time.fps;
            }
        }

        public updateCredits(): void {

            this.creditsLabel.text = GameVars.gameData.credits.toString();

            if (!this.coinTweening) {

                this.coinTweening = true;

                let t = GameVars.coinsFrenzy ? 80 : 200;

                this.game.add.tween(this.coinIcon.scale)
                    .to ({x: 1.1, y: 1.1}, t, Phaser.Easing.Cubic.Out, true, 0, 0, true)
                    .onComplete.add(function(): void {
                        this.coinTweening = false;
                    }, this);
            }
        }

        public startMatch(): void {

            this.game.add.tween(this)
                .to ({y: 30 * GameVars.scaleY}, 300, Phaser.Easing.Linear.None, true);
        }
    }
}
