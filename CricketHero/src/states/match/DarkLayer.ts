namespace CricketHero {
    
    export class DarkLayer extends Phaser.Sprite {

        constructor(game: Phaser.Game, alpha: number) {
    
            super(game, 0, 0, game.cache.getBitmapData(GameConstants.DARK_BLUE_SQUARE));

            this.anchor.set(.5);
            this.alpha = 0;
            this.scale.set(1.5 * GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, 1.5 * GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE / GameVars.scaleY);

            this.game.add.tween(this)
                .to ({ alpha: alpha }, 850, Phaser.Easing.Cubic.Out, true);
        }
    }
}
