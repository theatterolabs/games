/// <reference path="Trajectory.ts"/>
namespace CricketHero {

    export class StraightWithEffectTrajectory extends Trajectory {
        
        public static readonly BALL_SPEED = .5;

        constructor(game: Phaser.Game, itemThrowingData: ShotData, ball: Ball) {
            
            super(game, ball);

            // this.scale = 15;

            if (itemThrowingData.side === Trajectory.FROM_THE_LEFT_SIDE) {
                this.x = -GameConstants.GAME_WIDTH / 2 - 100;
            } else {
                this.x = GameConstants.GAME_WIDTH / 2 + 100;
            }
    
            this.y = GameVars.randomGenerator.realInRange(200, 400);

            let d = Math.sqrt(this.x * this.x + (this.y - StageContainer.CIRCLE_PY) * (this.y - StageContainer.CIRCLE_PY));
            let t = d / StraightWithEffectTrajectory.BALL_SPEED;

            if (GameVars.isPlayerOnFire && this.item.ballType === BallsManager.BALL) {
                t *= .875;
            }

            if (GameVars.matchData.itemsThrown > 30) {
                t *= .75;
            } else if (GameVars.matchData.itemsThrown > 15) {
                t *= .85;
            }
           
            let tween = this.game.add.tween(this)
                .to ({x: 0, y: StageContainer.CIRCLE_PY, scale: .315}, t, Phaser.Easing.Quartic.Out);

            let tweenData: {x: number, y: number, scale: number} [] = tween.generateData(60);
           
            for (let i = 0; i < tweenData.length; i ++) {
                this.tweenXAndScaleData.push({x: tweenData[i].x, scale: tweenData[i].scale});
                this.tweenYData.push({y: tweenData[i].y});
            }

            tween = this.game.add.tween(this)
                        .to ({dyParabolicEffect: 0}, t * .64, Phaser.Easing.Cubic.InOut);
                      
            let tweenDataParabollicEffect: {dyParabolicEffect: number} [] = tween.generateData(60);

            for (let i = 0; i < tweenDataParabollicEffect.length; i ++) {
                
                this.tweenYData[i].y += tweenDataParabollicEffect[i].dyParabolicEffect;
            }

            this.frameCenterReached = this.tweenXAndScaleData.length - 1;

            let dx = -this.x;
            let dy = StageContainer.CIRCLE_PY - this.y;

            let px = this.x > 0 ? -35 : 35;

            this.x = 0;
            this.y = StageContainer.CIRCLE_PY;
            this.scale = .315;

            tween = this.game.add.tween(this)
                .to ({x: px, y: px * dy / dx + StageContainer.CIRCLE_PY, scale: .25}, 300, Phaser.Easing.Linear.None);

            tweenData = tween.generateData(60);

            this.extraFrames = tweenData.length;

            for (let i = 0; i < tweenData.length; i ++) {
                this.tweenXAndScaleData.push({x: tweenData[i].x, scale: tweenData[i].scale});
                this.tweenYData.push({y: tweenData[i].y});
            }
        }
    }
}
