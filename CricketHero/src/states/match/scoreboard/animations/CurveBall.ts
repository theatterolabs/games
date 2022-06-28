/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class CurveBall extends DisplayAnimation {

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.CURVE_BALL_STATE);

            const curveAnimation = this.content.create(0, 0, "texture_atlas_2", "fx_curve_ball_01.png");
            curveAnimation.anchor.set(.5);
            curveAnimation.scale.set(5);
            curveAnimation.smoothed = false;
            curveAnimation.animations.add("animation", Phaser.Animation.generateFrameNames("fx_curve_ball_", 1, 9, ".png", 2));
            curveAnimation.animations.play("animation", 10, true);

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
