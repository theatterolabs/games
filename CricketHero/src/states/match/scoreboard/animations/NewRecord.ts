/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class NewRecord extends DisplayAnimation {

        private recordAnimation: Phaser.Sprite;
        private scoreLabel: Phaser.BitmapText;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.NEW_RECORD_STATE);

            let fontSize: number;

            if (GameVars.relevantRecord) {

                this.recordAnimation = this.content.create(0, 0, "texture_atlas_2", "display_new_record_01.png");
                this.recordAnimation.anchor.set(.5);
                this.recordAnimation.scale.set(5);
                this.recordAnimation.smoothed = false;
                this.recordAnimation.visible = false;
                this.recordAnimation.animations.add("animation", Phaser.Animation.generateFrameNames("display_new_record_", 1, 9, ".png", 2));
                this.content.add(this.recordAnimation);

                if (GameVars.gameData.score < 100) {
                    fontSize = 46;
                } else if (GameVars.gameData.score < 200) {
                    fontSize = 44;
                } else {
                    fontSize = 42;
                }

                this.scoreLabel = new Phaser.BitmapText(this. game, 0, 25, "freshman_white", GameVars.matchData.score.toString(), fontSize);
                this.scoreLabel.anchor.set(.5);
                this.scoreLabel.scale.set(5, 5);
                this.scoreLabel.tint = 0xFFD675;
                this.scoreLabel.visible = false;
                this.content.add(this.scoreLabel);

                this.game.time.events.add(1750, function(): void {
                    this.recordAnimation.visible = true;
                    this.recordAnimation.animations.play("animation", 5, false)
                        .onComplete.add(function(): void {
                            this.game.time.events.add(800, function(): void {
                                this.recordAnimation.visible = false;
                                
                                this.game.time.events.add(300, function(): void {
                                    this.scoreLabel.visible = true;
                                }, this);

                            }, this);
                        }, this);
                }, this);

            } else {

                this.recordAnimation = this.content.create(0, 0, "texture_atlas_2", "display_record_01.png");
                this.recordAnimation.anchor.set(.5);
                this.recordAnimation.scale.set(5);
                this.recordAnimation.smoothed = false;
                this.recordAnimation.animations.add("animation", Phaser.Animation.generateFrameNames("display_record_", 1, 6, ".png", 2));
                this.content.add(this.recordAnimation);

                this.recordAnimation.animations.play("animation", 5, true);

                this.scoreLabel = new Phaser.BitmapText(this. game, -2, 62, "freshman", GameVars.matchData.score.toString(), 31);
                this.scoreLabel.anchor.set(.5);
                this.scoreLabel.scale.set(5, 5);
                this.content.add(this.scoreLabel);
            }
        }
    }
}
