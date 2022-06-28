namespace CricketHero {
    
    export class TargetCirclesContainer extends Phaser.Group {

        private centralTargetCircle: TargetCircle;
        private leftTargetCircle: TargetCircle;
        private rightTargetCircle: TargetCircle;
        private homerunStar: Phaser.Image;

        constructor(game: Phaser.Game) {
    
            super(game, null, "target-circles-container");

            this.homerunStar = new Phaser.Image(this.game, 0, StageContainer.CIRCLE_PY, "texture_atlas_1", "homerun_4_star.png");
            this.homerunStar.anchor.set(.5);
            this.homerunStar.visible = false;
            this.add(this.homerunStar);

            if (GameVars.matchData.targetCircles === 1 || !GameVars.enterGameDirectly) {

                this.centralTargetCircle = new TargetCircle(this.game, GameConstants.CENTER);
                this.add(this.centralTargetCircle);

                this.leftTargetCircle = null;
                this.rightTargetCircle = null;

            } else if (GameVars.matchData.targetCircles === 2) {

                this.centralTargetCircle = null;

                this.leftTargetCircle = new TargetCircle(this.game, GameConstants.LEFT);
                this.add(this.leftTargetCircle);

                this.rightTargetCircle = new TargetCircle(this.game, GameConstants.RIGHT);
                this.add(this.rightTargetCircle);
            }
        }

        public activateHomerunMode(): void {

            let star_px: number;

            this.homerunStar.visible = true;
            this.homerunStar.angle = 0;
            this.homerunStar.alpha = 1;
            this.homerunStar.scale.set(1);
            this.homerunStar.x = 300;

            if (GameVars.matchData.targetCircles === 1) {

                star_px = 0;

            } else {
               
                if (GameVars.activatedCircleSide === GameConstants.RIGHT) {
                    star_px = TargetCircle.CIRCLE_DX;
                } else {
                    star_px = -TargetCircle.CIRCLE_DX;
                }
            }  

            this.game.add.tween(this.homerunStar)
                .to ({x: star_px}, 500, Phaser.Easing.Bounce.Out, true);

            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.activateHomerunMode();
            } else if (GameVars.matchData.targetCircles === 2) {
                this.leftTargetCircle.activateHomerunMode();
                this.rightTargetCircle.activateHomerunMode();
            }     
        }

        public deactivateHomerunMode(): void {

            if (!GameVars.homerun) {
                this.game.add.tween(this.homerunStar)
                    .to ({x: -300}, 250, Phaser.Easing.Cubic.Out, true);
            }

            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.deactivateHomerunMode();
            } else if (GameVars.matchData.targetCircles === 2) {
                this.leftTargetCircle.deactivateHomerunMode();
                this.rightTargetCircle.deactivateHomerunMode();
            }      
        }

        public homerun(): void {

            if (GameVars.homeRunType === GameConstants.HOMERUN_4) {
                this.homerunStar.frameName = "homerun_4_star.png";
            } else {
                this.homerunStar.frameName = "homerun_6_star.png";
            }

            this.game.add.tween(this.homerunStar.scale)
                .to ({x: 5, y: 5}, 550, Phaser.Easing.Cubic.Out, true);
            
            this.game.add.tween(this.homerunStar)
                .to ({alpha: 0, angle: 25}, 450, Phaser.Easing.Cubic.Out, true, 300)
                .onComplete.add(function(): void{
                    this.homerunStar.visible = false;
                }, this);

            this.deactivateHomerunMode();
        }

        public activate2CirclesMode(): void {
        
            this.centralTargetCircle.destroy();
            this.centralTargetCircle = null;

            this.leftTargetCircle = new TargetCircle(this.game, GameConstants.LEFT);
            this.add(this.leftTargetCircle);

            this.rightTargetCircle = new TargetCircle(this.game, GameConstants.RIGHT);
            this.add(this.rightTargetCircle);
        }

        public activate1CircleMode(): void {

            this.centralTargetCircle = new TargetCircle(this.game, GameConstants.CENTER);
            this.add(this.centralTargetCircle);

            this.leftTargetCircle.destroy();
            this.rightTargetCircle.destroy();
        }

        public ballReachedCenter(): void {

            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.ballReachedCenter();
            } else if (GameVars.matchData.targetCircles === 2) {

                if (GameVars.activatedCircleSide === GameConstants.LEFT) {
                    this.leftTargetCircle.ballReachedCenter();
                } else {
                    this.rightTargetCircle.ballReachedCenter();
                }
            }            
        }

        public activateCircle(tutorialMode?: boolean, tutorialSide?: string): void {

            if (tutorialMode) {
                
                if (tutorialSide === GameConstants.LEFT) {
                    this.leftTargetCircle.activate();
                    this.rightTargetCircle.deactivate();
                } else {
                    this.leftTargetCircle.deactivate();
                    this.rightTargetCircle.activate();
                }

            } else {

                if (GameVars.activatedCircleSide === GameConstants.LEFT) {

                    this.leftTargetCircle.activate();
                    this.rightTargetCircle.deactivate();

                    if (GameVars.homerunMode) {
                        this.homerunStar.x = -TargetCircle.CIRCLE_DX;
                    }

                } else {

                    this.leftTargetCircle.deactivate();
                    this.rightTargetCircle.activate();

                    if (GameVars.homerunMode) {
                        this.homerunStar.x = TargetCircle.CIRCLE_DX;
                    }
                }
            }
        }

        public makeSmall(): void {

            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.makeSmall();
            } else if (GameVars.matchData.targetCircles === 2) {
                this.leftTargetCircle.makeSmall();  
                this.rightTargetCircle.makeSmall();      
            } 
        }

        public restoreSize(): void {

            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.restoreSize();
            } else if (GameVars.matchData.targetCircles === 2) {
                this.leftTargetCircle.restoreSize();  
                this.rightTargetCircle.restoreSize();      
            }
        }

        public gameOver(): void {

            this.homerunStar.visible = false;
            
            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.gameOver();
            } else if (GameVars.matchData.targetCircles === 2) {
                this.leftTargetCircle.gameOver();  
                this.rightTargetCircle.gameOver();      
            }   
        }

        public onAdShown(): void {
            
            if (GameVars.matchData.targetCircles === 1) {
                this.centralTargetCircle.continue();
            } else if (GameVars.matchData.targetCircles === 2) {
                this.leftTargetCircle.continue();  
                this.rightTargetCircle.continue();      
            }   

            this.deactivateHomerunMode();
        }

        public getTargetCircleWorldPosition(): PIXI.Point {

            let p: PIXI.Point;

            if (GameVars.matchData.targetCircles === 1) {
                p = this.centralTargetCircle.getTargetCircleWorldPosition();
            } else if (GameVars.matchData.targetCircles === 2) {

                if (GameVars.activatedCircleSide === GameConstants.LEFT) {
                    p = this.leftTargetCircle.getTargetCircleWorldPosition();
                } else {
                   p = this.rightTargetCircle.getTargetCircleWorldPosition();
                }
            }   

            return p;
        }
    }
}
