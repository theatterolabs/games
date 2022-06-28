/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class Countdown extends DisplayAnimation {

        private label: Phaser.BitmapText;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.COUNTDOWN_STATE);

            this.label = new Phaser.BitmapText(this. game, 0, 15, "freshman", "READY?", 18);
            this.label.anchor.set(.5);
            this.label.scale.set(0, 0);
            this.content.add(this.label);

            this.startMatch();
        }

        private startMatch(): void {

            this.game.add.tween(this.label.scale)
                .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true, 500)
                .onComplete.add(function(): void {

                    if (!this.game) {
                        return;
                    }

                    this.game.time.events.add(450, function(): void {

                        this.label.scale.set(0, 0);
                        this.label.text = "3";
                        this.label.fontSize = 48;
                        this.label.x = -10;
                        this.label.y = 30;
        
                        AudioManager.playSound("countdown");
                        this.game.add.tween(this.label.scale)
                            .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true)
                            .onComplete.add(function(): void {

                                this.game.time.events.add(225, function(): void {

                                    this.label.scale.set(0, 0);
                                    this.label.text = "2";
                    
                                    AudioManager.playSound("countdown");
                                    this.game.add.tween(this.label.scale)
                                        .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true)
                                        .onComplete.add(function(): void {

                                            this.game.time.events.add(225, function(): void {

                                                this.label.scale.set(0, 0);
                                                this.label.text = "1";
                                
                                                AudioManager.playSound("countdown");
                                                this.game.add.tween(this.label.scale)
                                                    .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true)
                                                    .onComplete.add(function(): void {

                                                        this.game.time.events.add(225, function(): void {

                                                            this.label.scale.set(0, 0);
                                                            this.label.text = "GO!";
                                                            this.label.x = -14;
                                            
                                                            AudioManager.playSound("countdown_final");
                                                            this.game.add.tween(this.label.scale)
                                                                .to ({x: 5, y: 5 }, 200, Phaser.Easing.Cubic.Out, true)
                                                                .onComplete.add(function(): void {
                                                                    this.game.time.events.add(300, function(): void {
                                                                        this.animationEnded();
                                                                    }, this);
                                                                }, this);
                                                            }, this);
                                                    }, this);
                                            }, this);
                                        }, this);
                                }, this);
                            }, this);
                    }, this);
                }, this);
        }
    }
}
