namespace CricketHero {

    export class Trajectory {

        public static readonly STRAIGHT_TRAJECTORY = "straight";
        public static readonly STRAIGHT_WITH_EFFECT_TRAJECTORY = "straight_with_effect";
        public static readonly  PARABOLIC_TRAJECTORY = "parabolic";
        public static readonly CURVE_TRAJECTORY = "curve";
        public static readonly BOUNCING_TRAJECTORY = "bouncing";

        public static readonly FROM_THE_LEFT_SIDE = "from_left_side";
        public static readonly FROM_THE_RIGHT_SIDE = "from_right_side";
        public static readonly FROM_THE_BOTTOM = "from_bottom";
        
        public x: number;
        public y: number;
        public angle: number;
        public scale: number;
        public alpha: number;
        public disappearing: boolean;

        protected game: Phaser.Game;
        protected item: any;
        protected framesCounter: number;
        protected dx: number;
        protected dy: number;
        protected hit: boolean;
        protected tweenXAndScaleData: {x: number, scale: number} [];
        protected tweenYData: {y: number} [];
        protected tweenIndex: number;
        protected bouncingImpactFrame: number;
        protected frameCenterReached: number;
        protected extraFrames: number;

        constructor(game: Phaser.Game, item: any) {
            
            this.game = game;
            this.item = item; 
            this.alpha = 1; 
            this.scale = 1.75;
            this.angle = 0;
            this.disappearing = false;
            this.framesCounter = 0;
            this.dx = 0;
            this.dy = 0;
            this.hit = false;
            this.tweenYData = [];
            this.tweenXAndScaleData = [];
            this.tweenIndex = 0;
            this.bouncingImpactFrame = 0;
            this.frameCenterReached = 0;
            this.extraFrames = 0;
            this.x = 1e5;
            this.y = 1e5;

            if (this.item.ballType === BallsManager.EGG) {
               
                this.angle = -70;
                this.game.add.tween(this)
                    .to ({angle: 0}, 350, Phaser.Easing.Linear.None, true);
            }
        }

        public update(): void {

            if (GameVars.paused || this.hit) {
                return;
            }
           
            this.x = this.tweenXAndScaleData[this.tweenIndex].x;
            this.scale = this.tweenXAndScaleData[this.tweenIndex].scale;
            this.y = this.tweenYData[this.tweenIndex].y;

            this.tweenIndex++;

            if (this.tweenIndex === this.frameCenterReached) {
                this.disappearing = true;
            }

            if (this.disappearing) {
            
                this.framesCounter ++;
                this.alpha = (1.5 * this.extraFrames  - this.framesCounter) / this.extraFrames ;

                if (this.framesCounter === 4) { // era 5
                    this.item.ballReachedCenter();
                }
    
                if (this.framesCounter === this.extraFrames) { // 30 va bien para la lineal
                    this.hit = true;
                    this.alpha = .2;
                    this.item.ballHitGround();
                }
            }
            
            if (GameConstants.DEBUG) {
                const debugObjectsContainer = StageContainer.currentInstance.debugObjectsContainer;
                debugObjectsContainer.drawBallTrajectoryPoint(new Phaser.Point(this.x + this.item.x, this.y + this.item.y), DebugObjectsContainer.RED);
            }
        }

        public ballHit(): void {

            this.hit = true;
            
            this.alpha = 1;

            // la sacamos fuera
            let t = 160;
            let px = Math.random() > .5 ? -320 : 320;
            let py = StageContainer.CIRCLE_PY + 175 - 350 * Math.random();
 
            this.game.add.tween(this)
                .to ({x: px, y: py, scale: 1.4}, t, Phaser.Easing.Linear.None, true)
                .onComplete.add(function(): void {
                    this.item.hitBallLeftStage();
                }, this);
        }

        public coinHit(): void {

            this.hit = true;
            
            let px = HUD.currentInstance.x - GameConstants.GAME_WIDTH / 2;
            px -= this.item.x;
            px /= StageContainer.currentInstance.scale.x;

            let py = -GameConstants.GAME_HEIGHT / 2 + HUD.currentInstance.y;
            py /= StageContainer.currentInstance.scale.x;
            py /= GameVars.scaleY;

            let delay = GameVars.coinsFrenzy ? 0 : 250;
            
            this.game.add.tween(this)
                .to ({x: px, y: py }, 350, Phaser.Easing.Cubic.Out, true, delay )
                .onComplete.add(function(): void {

                    if(this.item.name === BallsManager.FRENZY_COIN) {
                        this.item.hitFrenzyCoinReachedHUD();
                    } else {
                        this.item.hitBallLeftStage();
                    }
                    
                }, this); 
        }
    }
}
