namespace CricketHero {
    
    export class Bug extends Phaser.Group {

        private bug: Phaser.Sprite;
        private bugContainer: Phaser.Group;

        constructor(game: Phaser.Game) {
    
            super(game, null, "bug");

            this.scale.y = GameVars.scaleY;

            this.bugContainer = new Phaser.Group(this.game);
            this.bugContainer.x = GameConstants.GAME_WIDTH + 30;
            this.bugContainer.y = 0;
            this.add(this.bugContainer);

            this.bug = this.bugContainer.create(0, 125, "texture_atlas_1", "bug_0001.png");
            this.bug.angle = -90;
            this.bug.scale.set(1.35);

            this.bug.animations.add("walk", Phaser.Animation.generateFrameNames("bug_", 1, 15, ".png", 4));
            this.bug.animations.play("walk", 20, true);

            this.game.add.tween(this.bugContainer)
                .to ({angle: 120}, 10000, Phaser.Easing.Linear.None, true, 2500)
                .onComplete.add(function(): void {
                    this.destroy();
                }, this);
        }
    }
}
