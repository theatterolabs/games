namespace CricketHero {
    
    export class Frame extends Phaser.Group {

        constructor(game: Phaser.Game) {
    
            super(game, null, "frame");

            this.x = GameConstants.GAME_WIDTH / 2;
            this.y = GameConstants.GAME_HEIGHT / 2;

            const top = new Phaser.Image(this.game, 0, - GameConstants.GAME_HEIGHT / 2, "texture_atlas_1", "frame_top.png");
            top.anchor.x = .5;
            top.scale.y = GameVars.scaleY;
            this.add(top);

            const bottom = new Phaser.Image(this.game, 0, GameConstants.GAME_HEIGHT / 2, "texture_atlas_1", "frame_top.png");
            bottom.anchor.x = .5;
            bottom.angle = 180;
            bottom.scale.y = GameVars.scaleY;
            this.add(bottom); 

            const left =  new Phaser.Image(this.game, -GameConstants.GAME_WIDTH / 2, 0, "texture_atlas_1", "frame_side.png");
            left.anchor.y = .5;
            left.scale.y = (GameConstants.GAME_HEIGHT - 2 * top.height) / left.height;
            this.add(left);

            const right =  new Phaser.Image(this.game, GameConstants.GAME_WIDTH / 2, 0, "texture_atlas_1", "frame_side.png");
            right.anchor.y = .5;
            right.angle = 180;
            right.scale.y = (GameConstants.GAME_HEIGHT - 2 * top.height) / right.height;
            this.add(right);
        }

        public disappear(): void {
            
            this.game.add.tween(this.scale)
                .to ({ x: 1.065, y: 1.065 }, 300, Phaser.Easing.Cubic.Out, true);
        }
    }
}
