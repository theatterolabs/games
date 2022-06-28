namespace CricketHero {
    
    export class TargetCircle extends Phaser.Group {
    
        public static readonly DEFAULT_TARGET_RADIUS = 65;
        public static readonly SMALL_TARGET_RADIUS = 45;

        public static readonly CIRCLE_DX = 30;
        public static radiusOuterCircle: number;

        private targetType: string;
        private outerCircle: Phaser.Sprite;
        private innerShape: Phaser.Graphics;
        private activated: boolean;
        private coinsFrenzyEffect: Phaser.Image;
        private innerCircle: Phaser.Graphics;
        
        constructor(game: Phaser.Game, targetType: string) {
    
            super(game, null, "target-circle");

            TargetCircle.radiusOuterCircle = TargetCircle.DEFAULT_TARGET_RADIUS;

            this.y = StageContainer.CIRCLE_PY;
            this.targetType = targetType;
            this.activated = true;

            switch (this.targetType) {
                case GameConstants.CENTER:
                    this.x = 0;
                    break;
                case GameConstants.LEFT:
                    this.x = -TargetCircle.CIRCLE_DX;
                    break;
                case GameConstants.RIGHT:
                    this.x = TargetCircle.CIRCLE_DX;
                    break;
            
                default:
                    break;
            }

            this.coinsFrenzyEffect = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "coin_fx_extra.png");
            this.coinsFrenzyEffect.anchor.set(.5);
            this.coinsFrenzyEffect.visible = false;
            this.add(this.coinsFrenzyEffect);

            this.innerCircle = new Phaser.Graphics(this.game);
            this.innerCircle.lineStyle(1.5, 0xFF0000, .65);
            this.innerCircle.drawCircle(0, 0, 22);
            this.add(this.innerCircle);

            this.outerCircle = new Phaser.Sprite(this.game, 0, 0, "texture_atlas_1", "circle_hit.png");
            this.outerCircle.anchor.set(.5);
            this.outerCircle.width = 2 * TargetCircle.DEFAULT_TARGET_RADIUS;
            this.outerCircle.height = 2 * TargetCircle.DEFAULT_TARGET_RADIUS;
            this.outerCircle.animations.add("homerun", Phaser.Animation.generateFrameNames("circle_hit_homerun_", 1, 10, ".png", 2));
            this.add(this.outerCircle);

            this.innerShape = new Phaser.Graphics(this.game);
            this.innerShape.beginFill(0xFF0000, .5);
            this.innerShape.drawCircle(0, 0, 22);
            this.innerShape.visible = false;
            this.add( this.innerShape);

            // un tween inicial
            this.outerCircle.scale.set(0);
            this.game.add.tween(this.outerCircle)
                .to ({width: 2 * TargetCircle.DEFAULT_TARGET_RADIUS, height: 2 * TargetCircle.DEFAULT_TARGET_RADIUS}, 850, Phaser.Easing.Elastic.Out, true);
        }

        public update(): void {

            super.update();

            // para el caso de que se hagan tweens sobre el circulo exterior
            this.outerCircle.width = 2 * TargetCircle.radiusOuterCircle;
            this.outerCircle.height = 2 * TargetCircle.radiusOuterCircle;

            if (this.activated && GameVars.coinsFrenzy) {

                this.coinsFrenzyEffect.visible = true;

                if (Math.random() > .7) {
                    this.coinsFrenzyEffect.scale.set(.35 + .75 * Math.random());
                }

                if (Math.random() > .7) {
                    this.coinsFrenzyEffect.alpha = .5 + .5 * Math.random();
                }
            }

            if (!GameVars.coinsFrenzy) {
                this.coinsFrenzyEffect.visible = false;
            }
        }

        public gameOver(): void {

            this.game.add.tween(this.scale)
                .to ({x: 0, y: 0}, 850, Phaser.Easing.Elastic.In, true)
                .onComplete.add(function(): void {
                    this.visible = false;
                }, this);
        }

        public continue(): void {
            
            this.visible = true;

            this.game.add.tween(this.scale)
                .to ({x: 1, y: 1}, 350, Phaser.Easing.Elastic.In, true);
        }

        public activate(): void {

            this.activated = true;

            if (GameVars.homerunMode) {
                this.outerCircle.play("homerun", 12, false);
            }

            if (this.innerCircle.visible) {
                this.innerCircle.alpha = 1;
            }
            
            this.outerCircle.frameName = "circle_hit.png";
        }

        public deactivate(): void {

            this.activated = false;

            if (GameVars.homerunMode) {
                this.outerCircle.animations.stop();
                this.outerCircle.frameName = "circle_hit.png";
            }

            if (this.innerCircle.visible) {
                this.innerCircle.alpha = .4;
            }
          
            this.outerCircle.frameName = "circle_inactive.png";
        }

        public activateHomerunMode(): void {

            if (GameVars.matchData.targetCircles === 1) {

                this.outerCircle.play("homerun", 12, false);
                
            } else if (GameVars.matchData.targetCircles === 2) {

                if (this.targetType === GameVars.activatedCircleSide) {
                    
                    this.outerCircle.play("homerun", 12, false);

                } else {

                    this.outerCircle.frameName = "circle_inactive.png";
                }
            }   

            this.innerCircle.visible = false;
        }

        public deactivateHomerunMode(homerun?: boolean): void{
            
            this.outerCircle.animations.stop();
            this.outerCircle.frameName = "circle_hit.png";

            this.innerCircle.visible = true;
        }

        public ballReachedCenter(): void {

            this.innerShape.visible = true;

            this.game.add.tween(this.innerShape.scale)
                .to ({x: 1.75, y: 1.75 }, 100, Phaser.Easing.Cubic.Out, true, 0, 0, true)
                .onComplete.add(function(): void {
                    this.innerShape.visible = false;
                }, this);
        }

        public makeSmall(): void {

            this.game.add.tween(TargetCircle)
                .to ({radiusOuterCircle: TargetCircle.SMALL_TARGET_RADIUS}, 350, Phaser.Easing.Cubic.Out, true);
        }

        public restoreSize(): void {
            
            this.game.add.tween(TargetCircle)
                .to ({radiusOuterCircle: TargetCircle.DEFAULT_TARGET_RADIUS}, 350, Phaser.Easing.Cubic.Out, true);
        }

        public getTargetCircleWorldPosition(): PIXI.Point {

            return this.outerCircle.worldPosition;
        }
    }
}
