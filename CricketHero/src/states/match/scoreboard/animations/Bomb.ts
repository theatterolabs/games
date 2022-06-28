/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class Bomb extends DisplayAnimation {

        private bomb: Phaser.Sprite;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.BOMB_STATE);

            this.bomb = this.content.create(0, 0, "texture_atlas_2", "display_bomb_01.png");
            this.bomb.anchor.set(.5);
            this.bomb.scale.set(5);
            this.bomb.smoothed = false;
            this.bomb.animations.add("animation", Phaser.Animation.generateFrameNames("display_bomb_", 1, 3, ".png", 2));
            this.bomb.animations.play("animation", 6, true);

            let t = 1350;

            if (GameVars.matchData.itemsThrown > 30) {
                t *= .75;
            } else if (GameVars.matchData.itemsThrown > 15) {
                t *= .85;
            }

            this.timerEvent = this.game.time.events.add(t, this.animationEnded, this);
        }
    }
}
