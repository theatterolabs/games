/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class Pause extends DisplayAnimation {

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.PAUSE_STATE);

            const pauseLabel = new Phaser.BitmapText(this. game, -5, 15, "freshman", "PAUSE", 20);
            pauseLabel.anchor.set(.5);
            pauseLabel.scale.set(5, 5);
            this.content.add(pauseLabel);

            this.game.add.tween(pauseLabel)
                .to ({alpha: .55}, 400, Phaser.Easing.Cubic.Out, true, 0, -1, true);
        }
    }
}
