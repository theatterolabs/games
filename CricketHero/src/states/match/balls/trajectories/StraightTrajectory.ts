/// <reference path="Trajectory.ts"/>
namespace CricketHero {

    export class StraightTrajectory extends Trajectory {
        
        public static readonly BALL_SPEED = .55; 

        constructor(game: Phaser.Game, itemThrowingData: ShotData, item: any, isFrenzyCoin?: boolean) {
            
            super(game, item);

            this.scale = 3; 

            if (itemThrowingData.side === Trajectory.FROM_THE_LEFT_SIDE || itemThrowingData.side === Trajectory.FROM_THE_RIGHT_SIDE) {

                if (itemThrowingData.side === Trajectory.FROM_THE_LEFT_SIDE) {
                    this.x = -GameConstants.GAME_WIDTH / 2 - 125;
                } else {
                    this.x = GameConstants.GAME_WIDTH / 2 + 125;
                }
    
                this.y = GameVars.randomGenerator.realInRange(0, (320 + 40) / GameVars.scaleY);

            } else {

                // SALE POR DEBAJO
                this.x = Math.round(GameVars.randomGenerator.realInRange(-240, 240));
                this.y = 500 / GameVars.scaleY;
            }

            let t: number;

            if (isFrenzyCoin) {

                t = 250;

            } else {

                let d = Math.sqrt(this.x * this.x + (this.y - StageContainer.CIRCLE_PY) * (this.y -  StageContainer.CIRCLE_PY));
                t = d / StraightTrajectory.BALL_SPEED;

                if (GameVars.isPlayerOnFire && this.item.ballType === BallsManager.BALL) {
                    t *= .85;
                }

                if (GameVars.matchData.itemsThrown > 30) {
                    t *= .75;
                } else if (GameVars.matchData.itemsThrown > 15) {
                    t *= .875;
                }

                if (!this.game.device.touch) {
                    t *= .95;
                }
            }

            let tween = this.game.add.tween(this)
                .to ({x: 0, y: StageContainer.CIRCLE_PY, scale: .325}, t, Phaser.Easing.Quartic.Out);

            let tweenData: {x: number, y: number, scale: number} [] = tween.generateData(60);

            // cortar un porcentaje de los frames
            let framesCut = Math.round(tweenData.length * .2); // era .2
            tweenData.splice(tweenData.length - framesCut, framesCut);
            
            for (let i = 0; i < tweenData.length; i ++) {
                this.tweenXAndScaleData.push({x: tweenData[i].x, scale: tweenData[i].scale});
                this.tweenYData.push({y: tweenData[i].y});
            }

            this.frameCenterReached = this.tweenXAndScaleData.length - 1;

            this.item.x -= this.tweenXAndScaleData[this.frameCenterReached].x;
            this.item.y = StageContainer.CIRCLE_PY - this.tweenYData[this.frameCenterReached].y;

            // empalmamos linealmente
            let dx = -this.x;
            let dy = StageContainer.CIRCLE_PY - this.y;

            let px: number;
            let py: number;

            if (itemThrowingData.side === Trajectory.FROM_THE_LEFT_SIDE || itemThrowingData.side === Trajectory.FROM_THE_RIGHT_SIDE) {
                px = this.x > 0 ? -35 : 35;
                py = px * dy / dx + StageContainer.CIRCLE_PY;
            } else {
                px = -25 * dx / dy;
                py = StageContainer.CIRCLE_PY - 25;
            }

            this.x = 0;
            this.y = StageContainer.CIRCLE_PY;
            this.scale = .25;

            tween = this.game.add.tween(this)
                .to ({x: px, y: py, scale: .25}, t * .375, Phaser.Easing.Linear.None);

            tweenData = tween.generateData(60);

            this.extraFrames = tweenData.length;

            for (let i = 0; i < tweenData.length; i ++) {
                this.tweenXAndScaleData.push({x: tweenData[i].x, scale: tweenData[i].scale});
                this.tweenYData.push({y: tweenData[i].y});
            }
        }
    }
}
