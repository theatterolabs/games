/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class OneCircle extends DisplayAnimation {

        private leftCircleTween: Phaser.Tween;
        private rightCircleTween: Phaser.Tween;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.ONE_CIRCLE_STATE);

            const leftCircle = new Phaser.Image(this.game, -40, 0, "texture_atlas_2", "circle.png");
            leftCircle.anchor.set(.5);
            leftCircle.scale.set(5);
            leftCircle.smoothed = false;
            this.content.add(leftCircle);

            const rightCircle = new Phaser.Image(this.game, 40, 0, "texture_atlas_2", "circle.png");
            rightCircle.anchor.set(.5);
            rightCircle.scale.set(5);
            rightCircle.smoothed = false;
            this.content.add(rightCircle);

            this.leftCircleTween = this.game.add.tween(leftCircle)
                .to ({x: 0}, 400, Phaser.Easing.Cubic.Out, true, 500);
            
            this.leftCircleTween.onComplete.add(function(): void {
                    this.game.time.events.add(950, this.animationEnded, this);
                }, this);

            this.rightCircleTween = this.game.add.tween(rightCircle)
                .to ({x: 0}, 400, Phaser.Easing.Cubic.Out, true, 500);

            const twoCirclesLabel = new Phaser.BitmapText(this. game, 0, 8, "freshman", "1 CIRCLE", 15);
            twoCirclesLabel.anchor.set(.5);
            twoCirclesLabel.scale.set(5, 5);
            this.content.add(twoCirclesLabel);
        }

        public pause(): void{

            super.pause();

            this.leftCircleTween.pause();
            this.rightCircleTween.pause();
        }

        public resume(): void {

            super.resume();

            this.leftCircleTween.resume();
            this.rightCircleTween.resume();
        }
    }
}
