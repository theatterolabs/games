/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class Tomato extends DisplayAnimation {

        private tomatoAnimation: Phaser.Sprite;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.TOMATO_STATE);

            this.tomatoAnimation = this.content.create(0, 0, "texture_atlas_2", "display_chicken_01.png");
            this.tomatoAnimation.anchor.set(.5);
            this.tomatoAnimation.scale.set(5);
            this.tomatoAnimation.smoothed = false;
            this.tomatoAnimation.animations.add("animation", Phaser.Animation.generateFrameNames("display_chicken_", 1, 10, ".png", 2));
            
            let f: number;

            if (GameVars.matchData.itemsThrown > 30) {
                f = 10;
            } else if (GameVars.matchData.itemsThrown > 15) {
                f = 8;
            } else {
                f = 6;
            }
            
            this.tomatoAnimation.animations.play("animation", f, false)
                .onComplete.add(this.animationEnded, this);
        }

        public pause(): void {

            super.pause();

            if (!this.hasAnimationEnded) {
                this.tomatoAnimation.animations.paused = true;
            } 
        }

        public resume(): void {

            super.resume();
            
            if (!this.hasAnimationEnded) {
                this.tomatoAnimation.animations.paused = false;
            }
        }
    }
}
