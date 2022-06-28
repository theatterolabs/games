namespace CricketHero {
    
    export class HitTutorialLayer extends Phaser.Group {
      
        private transparentLayer: Phaser.Sprite;
        private handCursor: Phaser.Image;
        private hitBallLabel: Phaser.Image;
        private tapAnywhereLabel: any;
      
        constructor(game: Phaser.Game) {
    
            super(game, null, "hit-tutorial-layer");

            this.visible = false;

            this.transparentLayer = this.create(0, 0, this.game.cache.getBitmapData(GameConstants.DARK_BLUE_SQUARE));
            this.transparentLayer.anchor.set(.5);
            this.transparentLayer.alpha = 0;
            this.transparentLayer.scale.set(1.5 * GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, 1.5 * GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE / GameVars.scaleY);
          
            this.hitBallLabel = new Phaser.Image(this. game, 0, 240, "texture_atlas_4", "hit_the_ball_" + GameVars.gameData.language + ".png");
            this.hitBallLabel.anchor.set(.5);
            this.hitBallLabel.visible = false;
            this.add(this.hitBallLabel);

            // HACK!
            this.game.cache.getBitmapFont("alfa_slab_one").font.lineHeight = 32;

            const gameText = this.game.cache.getJSON("game-text") [GameVars.gameData.language];

            let tapAnywhereStr: string;
            
            if (this.game.device.touch) {
                tapAnywhereStr = gameText.TAP_ANYWHERE;
            } else {
                tapAnywhereStr = gameText.CLICK_ANYWHERE;
            }

            if (GameVars.gameData.language === GameConstants.LANGUAGE_HI) {
                this.tapAnywhereLabel = new Phaser.Text(this.game, 0, this.hitBallLabel.y + 80, tapAnywhereStr, {font: "32px Arial", fill: "#FFFFFF"});
                this.tapAnywhereLabel.fontWeight = "bold";
                this.tapAnywhereLabel.wordWrap = true;
                this.tapAnywhereLabel.wordWrapWidth = 480;
            } else {
                this.tapAnywhereLabel = new Phaser.BitmapText(this. game, 0, this.hitBallLabel.y + 80, "alfa_slab_one", tapAnywhereStr, 28);   
                this.tapAnywhereLabel.maxWidth = 480;
            }

            this.tapAnywhereLabel.visible = false;
            this.tapAnywhereLabel.anchor.set(.5);
            this.tapAnywhereLabel.align = "center";
            this.add(this.tapAnywhereLabel);

            this.handCursor = new Phaser.Image(this.game, -150, 140, "texture_atlas_1", "hand-cursor.png");
            this.handCursor.anchor.x = 1;
            this.handCursor.visible = false;
            this.handCursor.alpha = 0;
            this.add(this.handCursor);
        }

        public activate(): void {

            this.visible = true;

            this.hitBallLabel.visible = true;
            this.tapAnywhereLabel.visible = true;

            this.handCursor.visible = true;

            this.game.add.tween(this.handCursor)
                .to ({alpha: 1}, 350, Phaser.Easing.Cubic.Out, true, 600);

            this.game.add.tween(this.handCursor.scale)
                .to ({x: 1.1, y: 1.1}, 350, Phaser.Easing.Cubic.Out, true, 0, -1, true);

            this.game.add.tween(this.transparentLayer)
                .to ({ alpha: .35 }, 850, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.transparentLayer.inputEnabled = true;
                    this.transparentLayer.events.onInputDown.add(this.onDownTransparentLayer, this);
                }, this);
        }

        private onDownTransparentLayer(sprite: Phaser.Sprite, p: Phaser.Pointer): void {

            MatchManager.removeHowToHitBallTutorial();
        }
    }
}
