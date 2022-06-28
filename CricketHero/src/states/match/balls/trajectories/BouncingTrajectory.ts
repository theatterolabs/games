/// <reference path="Trajectory.ts"/>
namespace CricketHero {

    export class BouncingTrajectory extends Trajectory {
        
        public static readonly BALL_SPEED = .275;

        constructor(game: Phaser.Game, itemThrowingData: ShotData, ball: Ball) {
            
            super(game, ball);

            this.scale = 1.5;

            if (itemThrowingData.side === Trajectory.FROM_THE_LEFT_SIDE) {
                this.x = GameVars.randomGenerator.realInRange(-250, -450);
            } else {
                this.x = GameVars.randomGenerator.realInRange(250, 450);
            }

            this.y = 465 / GameVars.scaleY; // era 450

            const d = Math.sqrt(this.x * this.x + (this.y - StageContainer.CIRCLE_PY) * (this.y -  StageContainer.CIRCLE_PY));
            let t = d / BouncingTrajectory.BALL_SPEED;

            let y1 = GameVars.randomGenerator.realInRange(-50, -75); 

            let y2 = GameVars.randomGenerator.realInRange(200, 250); 

            const y3 = y1 + 20; // era 30

            if (GameVars.isPlayerOnFire && this.item.ballType === BallsManager.BALL) {
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

            const t1 = .375 * t;
            const t2 = .275 * t;
            const t3 = .20 * t;
            const t4 = .15 * t;

            // EL TWEEN EN X Y ESCALA 
            const tween = this.game.add.tween(this)
                .to ({x: 0, scale: .325}, t, Phaser.Easing.Linear.None);
           
            this.tweenXAndScaleData = tween.generateData(60);

            // LOS TWEENS QUE COMPONEN EL MOVIMIENTO EN Y
            let tweenA = this.game.add.tween(this)
                .to ({y: y1}, t1, Phaser.Easing.Quadratic.Out);

            this.tweenYData = tweenA.generateData(60);

            this.y = this.tweenYData[this.tweenYData.length - 1].y;

            let tweenB = this.game.add.tween(this)
                .to ({y: y2}, t2, Phaser.Easing.Quadratic.In);

            this.tweenYData = this.tweenYData.concat(tweenB.generateData(60));

            this.bouncingImpactFrame = this.tweenYData.length - 1;

            this.y = this.tweenYData[this.tweenYData.length - 1].y;

            let tweenC = this.game.add.tween(this)
                .to ({y: y3}, t3, Phaser.Easing.Quadratic.Out);

            this.tweenYData = this.tweenYData.concat(tweenC.generateData(60));

            this.y = this.tweenYData[this.tweenYData.length - 1].y;

            let tweenD = this.game.add.tween(this)
                .to ({y: StageContainer.CIRCLE_PY}, t4, Phaser.Easing.Quadratic.In);

            this.tweenYData = this.tweenYData.concat(tweenD.generateData(60));

            let deltaElementsArrays = this.tweenYData.length - this.tweenXAndScaleData.length;

            for (let i = 0; i < deltaElementsArrays; i ++) {
                this.tweenYData.shift();
            }

            this.bouncingImpactFrame -= deltaElementsArrays;

            this.extraFrames = Math.round (this.tweenXAndScaleData.length / 15); 
            this.frameCenterReached = this.tweenXAndScaleData.length - this.extraFrames;

            this.item.x -= this.tweenXAndScaleData[this.frameCenterReached].x;
            this.item.y = StageContainer.CIRCLE_PY - this.tweenYData[this.frameCenterReached].y;
        }

        public update(): void {

            super.update();

            if (this.tweenIndex === this.bouncingImpactFrame) {
                this.item.addBouncingImpact();
            }
        }
    }
}
