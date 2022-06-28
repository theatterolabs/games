/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class AfterBreak extends DisplayAnimation {

        private label: Phaser.BitmapText;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.AFTER_BREAK_STATE);

            this.label = new Phaser.BitmapText(this. game, -2, 10, "freshman", "READY?", 18);
            this.label.anchor.set(.5);
            this.label.scale.set(0, 0);
            this.content.add(this.label);

            this.game.add.tween(this.label.scale)
                .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true, 250);  
        }

        public go(): void {
            
            this.label.scale.set(0, 0);
            this.label.fontSize = 42;
            this.label.x = -10;
            this.label.y = 25;

            this.label.text = "GO!";

            this.game.add.tween(this.label.scale)
                .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.timerEvent = this.game.time.events.add(850, this.animationEnded, this);
                }, this);

            AudioManager.playSound("countdown_final");
        }
    }
}
