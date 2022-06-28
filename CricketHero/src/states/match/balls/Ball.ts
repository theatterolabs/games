namespace CricketHero {
    
    export class Ball extends Phaser.Group {

        public ballType: string;
        public itemSprite: Phaser.Sprite;
        public ballRadius: number;
        public movingTowardsCenter: boolean;
        public trajectory: Trajectory;
        public impact: Phaser.Sprite;
        public hit: boolean;
        
        private trail: Trail;
        private bouncingImpact: Phaser.Graphics;
        private smoke: Phaser.Sprite;
        private coinHitEffect: Phaser.Sprite;
        private glow: Phaser.Image;
       
        constructor(game: Phaser.Game) {
    
            super(game, null, "ball");

            this.glow = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "glow.png");
            this.glow.anchor.set(.5);
            this.glow.alpha = 0;
            this.glow.visible = false;
            this.add(this.glow);

            this.impact = <Phaser.Sprite> this.create(0, 0, "texture_atlas_1", "impact_a_0001.png");
            this.impact.anchor.set(.5);
            this.impact.animations.add("hit", Phaser.Animation.generateFrameNames("impact_a_", 1, 11, ".png", 4));
            this.impact.visible = false;

            this.coinHitEffect = <Phaser.Sprite> this.create(0, 0, "texture_atlas_1", "coin_hit_fx_01.png");
            this.coinHitEffect.anchor.set(.5);
            this.coinHitEffect.animations.add("hit", Phaser.Animation.generateFrameNames("coin_hit_fx_", 1, 14, ".png", 2));
            this.coinHitEffect.visible = false;

            this.itemSprite = this.create(0, 0, "texture_atlas_1");
            this.itemSprite.anchor.set(.5);

            this.itemSprite.animations.add("spin-ball", Phaser.Animation.generateFrameNames("ball_", 1, 13, ".png", 2));
            this.itemSprite.animations.add("spin-basket-ball", Phaser.Animation.generateFrameNames("ball_basket_", 1, 13, ".png", 4));
            this.itemSprite.animations.add("spin-coin", Phaser.Animation.generateFrameNames("coin_", 1, 8, ".png", 4));
            this.itemSprite.animations.add("spin-bomb", Phaser.Animation.generateFrameNames("bomb_", 1, 3, ".png", 2));

            this.bouncingImpact = new Phaser.Graphics(this.game);
            this.bouncingImpact.beginFill(0xFFFFFF, .75);
            this.bouncingImpact.drawCircle(0, 0, 40);
            this.bouncingImpact.visible = false;
            this.bouncingImpact.scale.set(0, 0);
            this.addAt(this.bouncingImpact, 0);

            this.smoke = <Phaser.Sprite> this.create(0, 0, "texture_atlas_1", "smoke_00.png");
            this.smoke.anchor.set(.5);
            this.smoke.animations.add("explode", Phaser.Animation.generateFrameNames("smoke_", 1, 13, ".png", 2));
            this.smoke.visible = false;

            this.trail = new Trail(this.game, this);
            this.add(this.trail);
        }

        public update(): void {

            if (this.trajectory === null) {
                return;
            }

            this.trajectory.update();

            this.itemSprite.x = this.trajectory.x;
            this.itemSprite.y = this.trajectory.y;
            this.itemSprite.angle = this.trajectory.angle;
            this.itemSprite.scale.set(this.trajectory.scale);
            this.itemSprite.alpha = this.trajectory.alpha;

            if (!GameVars.gameData.hitTutorialShown && !GameVars.editingLevels) {

                let collisionData = MatchManager.isBallInsideTargetCircle();

                if (!GameVars.paused && collisionData.insideCircle) {
                    MatchManager.showHowToHitBallTutorial();
                }
            }

            super.update();
        }

        public reset(ballType: string): void {

            this.itemSprite.tint = 0xffffff;

            this.ballType = ballType;
            this.movingTowardsCenter = false;
            this.ballRadius = 37.5;
            this.smoke.visible = false;
            this.trajectory = null;
            this.trail.visible = true;
            this.glow.visible = false;
            this.impact.visible = false;
            this.coinHitEffect.visible = false;
            this.hit = false;
           
            let trailColor: number;

            switch (this.ballType) {

                case BallsManager.BALL:
                    
                    trailColor = 0xFDFA9C;
                    this.itemSprite.animations.play("spin-ball", 16, true);
                    break;

                case BallsManager.EGG:
                    trailColor = 0xaad3d0;
                    this.itemSprite.animations.stop();
                    this.itemSprite.frameName = "huevo.png";
                    break;
                case BallsManager.BOMB:
                    trailColor = 0x000000;
                    this.itemSprite.animations.stop();
                    this.itemSprite.animations.play("spin-bomb", 14, true);
                    break;
                case BallsManager.COIN:
                    trailColor = 0xFDFA9C;
                    this.itemSprite.animations.play("spin-coin", 10, true);
                    break;
                default:
                    break;
            }

            this.trail.reset(trailColor);
        }

        public launch(itemThrowingData: ShotData): void {

            this.visible = true;
            this.movingTowardsCenter = true;
            this.itemSprite.worldPosition.set(1e5, 1e5); 

            switch (itemThrowingData.trajectoryType) {
                
                case Trajectory.STRAIGHT_TRAJECTORY:
                    this.trajectory = new StraightTrajectory(this.game, itemThrowingData, this);
                    break;

                case Trajectory.STRAIGHT_WITH_EFFECT_TRAJECTORY:
                    this.trajectory = new StraightWithEffectTrajectory(this.game, itemThrowingData, this);
                    break;
                
                case Trajectory.PARABOLIC_TRAJECTORY:
                    this.trajectory = new ParabollicTrajectory(this.game, itemThrowingData, this);
                    break;
                
                case Trajectory.BOUNCING_TRAJECTORY:
                    this.trajectory = new BouncingTrajectory(this.game, itemThrowingData, this);
                    break;

                case Trajectory.CURVE_TRAJECTORY:
                    this.trajectory = new CurveTrajectory(this.game, itemThrowingData, this);
                    break;

                default:
            }

            if (GameConstants.DEBUG) {
                const debugObjectsContainer = StageContainer.currentInstance.debugObjectsContainer;
                debugObjectsContainer.clearBallGraphics();
            }   

            if (itemThrowingData.trajectoryType === Trajectory.CURVE_TRAJECTORY) {
                AudioManager.playSound("temp_curve_ball");
            } else {
                let rnd = Math.floor(Math.random() * 4) + 1;
                AudioManager.playSound("swish_0" + rnd);
            }
        }

        public pause(): void {

            if (this.ballType === BallsManager.BALL || this.ballType === BallsManager.BOMB || this.ballType === BallsManager.COIN) {
                this.itemSprite.animations.stop();
            } 
        }

        public resume(): void {

            switch (this.ballType) {

                case BallsManager.BALL:
                    this.itemSprite.animations.play("spin-ball", 16, true);
                    break;

                case BallsManager.BOMB:
                    this.itemSprite.animations.stop();
                    this.itemSprite.animations.play("spin-bomb", 14, true);
                    break;

                case BallsManager.COIN:
                    this.itemSprite.animations.play("spin-coin", 10, true);
                    break;
                default:
                    break;
            }
        }

        public hitBallLeftStage(): void {

            MatchManager.hitBallLeftStage();
            
            if (this.parent) {
                this.parent.removeChild(this);
            }
        }

        public ballHitGround(): void {
           
            // TODO: de momento esto al respecto de la bola
            this.itemSprite.animations.stop();
            this.trail.visible = false;
            this.smoke.visible = true;
           
            this.smoke.position = this.itemSprite.position.clone();
            this.smoke.position.y += 8;
            this.smoke.animations.play("explode", 30, false)
                .onComplete.add(function(): void {

                    this.visible = false;

                    MatchManager.missedBallHitGround();

                }, this);

            AudioManager.playSound("ball_disappear");
        }

        public ballReachedCenter(): void {

            this.movingTowardsCenter = false;
            
            StageContainer.currentInstance.ballsContainerBack.add(this);

            MatchManager.ballReachedCenter();
        }

        public ballHit(): void {

            this.hit = true;

            this.movingTowardsCenter = false;

            this.trajectory.ballHit();

            const ballPosition = this.itemSprite.position.clone();

            this.glow.visible = true;
            this.glow.position = ballPosition;
            this.game.add.tween(this.glow)
                .to ({alpha: 1}, 120, Phaser.Easing.Cubic.Out, true, 0, 0, true);
            
            this.impact.visible = true;
            this.impact.position = ballPosition;
            this.impact.animations.play("hit", 30, false);
        }

        public coinHit(): void {

            this.movingTowardsCenter = false;

            this.itemSprite.animations.stop("spin");
            this.itemSprite.frameName = "coin_0001.png";

            let currentScale = this.itemSprite.scale.x;

            this.game.add.tween(this.itemSprite.scale)
                .to ({x: 1.1 * currentScale, y: 1.1 * currentScale}, 200, Phaser.Easing.Cubic.Out, true, 0, 0, true);

            this.coinHitEffect.visible = true;
            this.coinHitEffect.position = this.itemSprite.position.clone();
            this.coinHitEffect.animations.play("hit", 30, false);

            // hacerla viajar hasta el HUD
            this.trajectory.coinHit();

            AudioManager.playSound("hit_coin");
        }

        public bombHit(): void {

            if (this.parent) {
                this.parent.removeChild(this);
            }           
        }

        public tomatoHit(): void {

            this.movingTowardsCenter = false;

            MatchManager.hitBallLeftStage();
            this.parent.removeChild(this);
        }

        public addBouncingImpact(): void {

            this.bouncingImpact.position = new Phaser.Point(this.itemSprite.position.x, this.itemSprite.position.y + this.itemSprite.height / 2);
            this.bouncingImpact.visible = true;
            this.bouncingImpact.alpha = .75;

            this.game.add.tween(this.bouncingImpact.scale)
                .to ({x: 1.2, y: .48}, 250, Phaser.Easing.Cubic.Out, true);

            this.game.add.tween(this.bouncingImpact)
                .to ({alpha: 0}, 200, Phaser.Easing.Cubic.Out, true, 125)
                .onComplete.add(function(): void {
                    this.bouncingImpact.visible = false;
                }, this);

            AudioManager.playSound("bounce_ground");
        }
    }
}
