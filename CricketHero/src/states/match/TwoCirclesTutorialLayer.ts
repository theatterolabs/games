namespace CricketHero {
    
    export class TwoCirclesTutorialLayer extends Phaser.Group {

        private tapToContinueImage: Phaser.Image;
        private handCursorContainer: Phaser.Group;
        private transparentLayer: Phaser.Sprite;
        private sideLayer: Phaser.Sprite;
        private tapLeftLabel: any;
      
        constructor(game: Phaser.Game) {
    
            super(game, null, "two-circles-tutorial-layer");

            this.transparentLayer = this.create(0, 0, this.game.cache.getBitmapData(GameConstants.DARK_BLUE_SQUARE));
            this.transparentLayer.anchor.set(.5);
            this.transparentLayer.alpha = 0;
            this.transparentLayer.scale.set(1.5 * GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, 1.5 * GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE / GameVars.scaleY);

            this.sideLayer = this.create(0, 0, this.game.cache.getBitmapData(GameConstants.DARK_BLUE_SQUARE));
            this.sideLayer.anchor.y = .5;
            this.sideLayer.alpha = .3;
            this.sideLayer.scale.set(1.5 * GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, 1.5 * GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE / GameVars.scaleY);

            this.tapToContinueImage = new Phaser.Image(this.game, 0, 260, "texture_atlas_4", this.game.device.touch ? "tap_to_continue_" + GameVars.gameData.language + ".png" : "click_to_continue_" + GameVars.gameData.language + ".png");
            this.tapToContinueImage.anchor.set(.5);
            this.tapToContinueImage.visible = false;
            this.add(this.tapToContinueImage);

            if (GameVars.gameData.language === GameConstants.LANGUAGE_HI) {
                this.tapToContinueImage.scale.set(.8, GameVars.scaleY * .8);
            } else if (GameVars.gameData.language === GameConstants.LANGUAGE_PT) {
                this.tapToContinueImage.scale.set(.75, GameVars.scaleY * .75);
            }

            this.game.add.tween(this.tapToContinueImage)
                .to ({ alpha: .75 }, 350, Phaser.Easing.Cubic.Out, true, 0, -1, true);

            // HACK!
            this.game.cache.getBitmapFont("alfa_slab_one").font.lineHeight = 32;

            let tapLeftStr: string;

            const gameText = this.game.cache.getJSON("game-text") [GameVars.gameData.language];

            if (this.game.device.touch) {
                tapLeftStr = gameText.TAP_LEFT_SIDE;
            } else {
                tapLeftStr = gameText.CLICK_LEFT_SIDE;
            }

            if (GameVars.gameData.language === GameConstants.LANGUAGE_HI) {
                this.tapLeftLabel = new Phaser.Text(this.game, 0, 330, tapLeftStr, {font: "32px Arial", fill: "#FFFFFF"});
                this.tapLeftLabel.fontWeight = "bold";
                this.tapLeftLabel.wordWrap = true;
                this.tapLeftLabel.wordWrapWidth = 480;
            } else {
                this.tapLeftLabel = new Phaser.BitmapText(this. game, 0, 315, "alfa_slab_one", tapLeftStr, 28);
                this.tapLeftLabel.maxWidth = 480;
            }
 
            this.tapLeftLabel.visible = false;
            this.tapLeftLabel.anchor.set(.5);
            this.tapLeftLabel.align = "center";
            this.add(this.tapLeftLabel);

            this.handCursorContainer = new Phaser.Group(this.game);
            this.handCursorContainer.x = -125;
            this.handCursorContainer.y = 120;
            this.add(this.handCursorContainer);

            const handCursor = new Phaser.Image(this.game, -65, 10, "texture_atlas_1", "hand-cursor.png");
            handCursor.anchor.x = 1;
            handCursor.scale.x = -1;
            this.handCursorContainer.add(handCursor);
    
            this.game.add.tween(handCursor.scale)
                .to ({x: -1.1, y: 1.1}, 350, Phaser.Easing.Cubic.Out, true, 0, -1, true);

            this.game.time.events.add(1250, this.activateTransparentLayer, this);

            this.game.add.tween(this.transparentLayer)
                .to ({ alpha: .35 }, 850, Phaser.Easing.Cubic.Out, true);
        }

        private activateTransparentLayer(): void {

            this.handCursorContainer.visible = true;
        
            this.game.time.events.add(1750, function(): void {

                this.tapToContinueImage.visible = true;
                this.tapLeftLabel.visible = true;

                this.transparentLayer.inputEnabled = true;
                this.transparentLayer.events.onInputDown.add(this.onDownTransparentLayer, this);

            }, this);
        }

        private onDownTransparentLayer(sprite: Phaser.Sprite, p: Phaser.Pointer): void {

            if (p.x > GameConstants.GAME_WIDTH / 2) {
                return;
            }

            StageContainer.currentInstance.hero.changeHeroSide(GameConstants.LEFT);
            MatchManager.resumeAction();
        }
    }
}
