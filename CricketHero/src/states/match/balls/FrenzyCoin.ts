namespace CricketHero {
    
    export class FrenzyCoin extends Phaser.Group {

        public static fxAnimationPlaying = false;

        public itemSprite: Phaser.Sprite;
        public movingTowardsCenter: boolean;
        public trajectory: Trajectory;
        
        private trail: Trail;
        private exploding: boolean;
        private coinHitEffect: Phaser.Sprite;
        
        constructor(game: Phaser.Game) {
    
            super(game, null, "ball");

            this.name = BallsManager.FRENZY_COIN;

            this.movingTowardsCenter = false;

            this.itemSprite = this.create(-2 * GameConstants.GAME_WIDTH, -100, "texture_atlas_1");
            this.itemSprite.anchor.set(.5);

            this.itemSprite.animations.add("spin-coin", Phaser.Animation.generateFrameNames("coin_", 1, 8, ".png", 4));
          
            this.trail = new Trail(this.game, this);
            this.trail.reset( 0xFDFA9C);
            this.add(this.trail);

            let side: string;
            let rnd = Math.random();

            if(rnd > .65) {
                side = Trajectory.FROM_THE_LEFT_SIDE;
            } else if(rnd > .35) {
                side = Trajectory.FROM_THE_RIGHT_SIDE;
            } else {
                side = Trajectory.FROM_THE_BOTTOM;
            }
            
            let itemThrowingData = {
                delay: 0,
                itemType: BallsManager.COIN,
                trajectoryType: Trajectory.STRAIGHT_TRAJECTORY,
                side: side,
                targetCircleSide: Math.random() ? GameConstants.RIGHT : GameConstants.LEFT
            }
            
            this.trajectory = new StraightTrajectory(this.game, itemThrowingData, this, true);

            this.coinHitEffect = <Phaser.Sprite> this.create(0, StageContainer.CIRCLE_PY, "texture_atlas_1", "coin_hit_fx_01.png");
            this.coinHitEffect.anchor.set(.5);
            this.coinHitEffect.animations.add("hit", Phaser.Animation.generateFrameNames("coin_hit_fx_", 1, 14, ".png", 2));
            this.coinHitEffect.visible = false;
        }

        public update(): void {

            super.update();
        
            if (!this.trajectory) {
                return;
            }

            this.trajectory.update();
            
            this.itemSprite.x = this.trajectory.x;
            this.itemSprite.y = this.trajectory.y;
            this.itemSprite.angle = this.trajectory.angle;
            this.itemSprite.scale.set(this.trajectory.scale);
            this.itemSprite.alpha = this.trajectory.alpha;
        }

        public pause(): void{

            this.itemSprite.animations.stop();
        }

        public resume(): void{

            this.itemSprite.animations.play("spin-coin", 10, true);
        }

        public launch(): void {
        
            this.visible = true;
            this.movingTowardsCenter = true;

            let frameRate = 15 + Math.floor(Math.random() * 6);

            this.itemSprite.animations.play("spin-coin", frameRate, true);
        }

        public ballHitGround(): void {

            this.destroy();
        }

        public ballReachedCenter(): void {
            
            this.movingTowardsCenter = false;
        }

        public coinHit(): void {

            this.movingTowardsCenter = false;

            // hacerla viajar hasta el HUD
            this.trajectory.coinHit();

            if(!FrenzyCoin.fxAnimationPlaying) {

                FrenzyCoin.fxAnimationPlaying = true;

                this.coinHitEffect.scale.set(1 + .65 * Math.random());

                this.coinHitEffect.visible = true;
                this.coinHitEffect.animations.play("hit")
                    .onComplete.add(function(): void {
                        FrenzyCoin.fxAnimationPlaying = false;
                        this.coinHitEffect.visible = false;
                    }, this);
            }

            AudioManager.playSound("hit_coin");
        }

        public hitFrenzyCoinReachedHUD(): void {
            
            MatchManager.hitFrenzyCoinReachedHUD();
            
            this.destroy();           
        }

        public bombHit(): void {

            if (this.parent) {
                this.parent.removeChild(this);
            }           
        }
    }
}
