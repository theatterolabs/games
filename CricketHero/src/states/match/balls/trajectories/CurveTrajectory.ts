/// <reference path="Trajectory.ts"/>
namespace CricketHero {

    export class CurveTrajectory extends Trajectory {

        private r: number;
        private a: number;
        private direction: number;
        private angleFactor: number;
        private radiusFactor: number;
        private lastBallPositions: {x: number, y: number} [];
        
        constructor(game: Phaser.Game, itemThrowingData: ShotData, ball: Ball) {
            
            super(game, ball);

            this.lastBallPositions = [];

            this.r = 300;
            this.a = Math.PI * Math.random();

            this.direction = Math.random() > .5 ? -1 : 1;

            this.x = -this.r;
            this.y = 0;

            // ajustes dependiendo de si esta on fire y/o del numero de bolas que han sido lanzadas
            let angleFactor: number;
            let radiusFactor: number;

            if (GameVars.matchData.itemsThrown > 30) {
                this.angleFactor = .3;
                this.radiusFactor = 6;
            } else if (GameVars.matchData.itemsThrown > 15) {
                this.angleFactor = .275;
                this.radiusFactor = 5.5;
            } else {
                this.angleFactor = .25;
                this.radiusFactor = 5;
            }

            if (GameVars.isPlayerOnFire && this.item.ballType === BallsManager.BALL) {
                this.angleFactor *= 1.25;
                this.radiusFactor *= 1.25;
            }
        }

        public update(): void {

            if (GameVars.paused || this.hit) {
                return;
            }

            if (this.disappearing) {

                this.x += this.dx;
                this.y += this.dy;
                    
                this.scale *= .975;
                this.alpha = this.scale;
        
                this.framesCounter ++;
        
                if (this.framesCounter === 4) { // era 5
                    this.item.ballReachedCenter();
                }
        
                if (this.framesCounter === 20) { 
                    this.hit = true;
                    this.item.ballHitGround();
                }

            } else {

                // hacer lo que corresponda con la x e la y
                this.x = this.r * Math.cos(this.a);
                this.y = this.r * Math.sin(this.a) + StageContainer.CIRCLE_PY;

                this.a += (this.direction * this.angleFactor);
                this.r -= this.radiusFactor;
            
                this.scale *= .976;

                this.lastBallPositions.unshift({x: this.x, y: this.y});
            
                if (this.lastBallPositions.length === 6) {
                    this.lastBallPositions.shift();
                }

                if (Phaser.Math.fuzzyEqual(0, this.x, 2.5) && Phaser.Math.fuzzyEqual(StageContainer.CIRCLE_PY, this.y, 2.5)) {
                    this.ballReachedCenter();
                }
            }            
        }

        private ballReachedCenter(): void {

            this.disappearing = true;

            this.dx = (this.lastBallPositions[1].x - this.lastBallPositions[0].x) * .045;
            this.dy = (this.lastBallPositions[1].y - this.lastBallPositions[0].y) * .045;
        }
    }
}
