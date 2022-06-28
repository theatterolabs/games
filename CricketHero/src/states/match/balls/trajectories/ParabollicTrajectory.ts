/// <reference path="Trajectory.ts"/>
namespace CricketHero {

    export class ParabollicTrajectory extends Trajectory {
        
        public static readonly BALL_SPEED = .435;

        constructor(game: Phaser.Game, itemThrowingData: ShotData, ball: Ball) {
            
            super(game, ball);

            if (itemThrowingData.side === Trajectory.FROM_THE_LEFT_SIDE) {
                this.x = -GameConstants.GAME_WIDTH / 2 - 165;
            } else {
                this.x = GameConstants.GAME_WIDTH / 2 + 165;
            }

            this.y = GameVars.randomGenerator.realInRange(0, (320 + 60) / GameVars.scaleY);

            let d = Math.sqrt(this.x * this.x + (this.y - StageContainer.CIRCLE_PY) * (this.y - StageContainer.CIRCLE_PY));
            let t = d / ParabollicTrajectory.BALL_SPEED;

            if (GameVars.isPlayerOnFire && this.item.ballType === BallsManager.BALL || GameVars.homerunMode) {
                t *= .875;
            }

            if (GameVars.matchData.itemsThrown > 30) {
                t *= .75;
            } else if (GameVars.matchData.itemsThrown > 15) {
                t *= .85;
            }

            if (!this.game.device.touch) {
                t *= .95;
            }

            let deltaY: number;
            let t1: number;
            let t2: number;

            if (this.y > 300) {
                deltaY = GameVars.randomGenerator.realInRange(260, 350);
                t1 = .61 * t;
                t2 = .39 * t;
            } else if (this.y > 200) {
                deltaY = GameVars.randomGenerator.realInRange(140, 180);
                t1 = .65 * t;
                t2 = .35 * t;
            } else if (this.y > 100) {
                deltaY = GameVars.randomGenerator.realInRange(125, 250);
                t1 = .625 * t;
                t2 = .475 * t;
            } else {
                deltaY = 180;
                t1 = .48 * t;
                t2 = .52 * t;
            }
                
            let y1 = (this.y * GameVars.scaleY + StageContainer.CIRCLE_PY) / 2 - deltaY;

            const tween = this.game.add.tween(this)
                .to ({x: 0, scale: .25}, t, Phaser.Easing.Linear.None, false);

            this.tweenXAndScaleData = tween.generateData(60);
    
            // los tweens en Y
            const tweenA = this.game.add.tween(this)
                .to ({y: y1}, t1, Phaser.Easing.Quadratic.Out);
            
            this.tweenYData = tweenA.generateData(60);

            this.y = this.tweenYData[this.tweenYData.length - 1].y;

            const tweenB = this.game.add.tween(this)
                .to ({y: StageContainer.CIRCLE_PY}, t2, Phaser.Easing.Quadratic.In);

            this.tweenYData = this.tweenYData.concat(tweenB.generateData(60));

            let deltaElementsArrays = this.tweenYData.length -  this.tweenXAndScaleData.length;

            for (let i = 0; i < deltaElementsArrays; i ++) {
                this.tweenYData.shift();
            }

            this.extraFrames = Math.round (this.tweenXAndScaleData.length / 8.5);
            this.frameCenterReached = this.tweenXAndScaleData.length - this.extraFrames;

            this.item.x -= this.tweenXAndScaleData[this.frameCenterReached].x;
            this.item.y = StageContainer.CIRCLE_PY - this.tweenYData[this.frameCenterReached].y;
        }
    }
}
