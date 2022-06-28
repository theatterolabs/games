/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class ScoreAndBalls extends DisplayAnimation {

        public static currentInstance: ScoreAndBalls;

        private scoreLabelLeft: Phaser.BitmapText;
        private scoreLabelRight: Phaser.BitmapText;
        private scoreContainer: Phaser.Group;
        private firstBall: Phaser.Sprite;
        private secondBall: Phaser.Sprite;
        private thirdBall: Phaser.Sprite;
        private dancer: Phaser.Sprite;
        private dancer_dx: number;
        private displayingBreak: boolean;
        private onFire: Phaser.Sprite;
        private extraBallLabel: Phaser.BitmapText;
        private ballsContainer: Phaser.Group;
        private lightOrangeLayer: Phaser.Sprite;
        private x2: Phaser.Image;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.SCORE_AND_BALLS_STATE);

            ScoreAndBalls.currentInstance = this;

            this.displayingBreak = false;
            this.dancer_dx = 0;

            this.scoreContainer = new Phaser.Group(this.game);
            this.content.add(this.scoreContainer);

            this.extraBallLabel = null;
            this.lightOrangeLayer = null;

            this.onFire = new Phaser.Sprite(this.game, 0, 0, "texture_atlas_2", "display_fire_01.png");
            this.onFire.animations.add("animation", Phaser.Animation.generateFrameNames("display_fire_", 1, 7, ".png", 2));
            this.onFire.anchor.set(.5);
            this.onFire.scale.set(5);
            this.onFire.visible = false;
            this.onFire.smoothed = false;
            this.content.add(this.onFire);

            this.dancer = new Phaser.Sprite(this.game, -150, -40, "texture_atlas_2", "display_dance_01.png");
            this.dancer.animations.add("dance", Phaser.Animation.generateFrameNames("display_dance_", 1, 3, ".png", 2));
            this.dancer.anchor.set(.5);
            this.dancer.scale.set(5);
            this.dancer.visible = false;
            this.dancer.smoothed = false;
            this.content.add(this.dancer);

            this.x2 = new Phaser.Image(this.game, -145, -95, "texture_atlas_2", "2x.png");
            this.x2.scale.set(5);
            this.x2.smoothed = false;
            this.x2.visible = false;
            this.content.add(this.x2);

            this.scoreLabelLeft = new Phaser.BitmapText(this. game, -8, -26, "freshman", "0", 30);
            this.scoreLabelLeft.anchor.set(.5);
            this.scoreLabelLeft.scale.set(5, 5);
            this.scoreLabelLeft.visible = false;
            this.scoreLabelLeft.smoothed = false;
            this.scoreContainer.add(this.scoreLabelLeft);

            this.scoreLabelRight = new Phaser.BitmapText(this. game, -8, -26, "freshman", "", 30);
            this.scoreLabelRight.anchor.set(0, .5);
            this.scoreLabelRight.scale.set(5, 5);
            this.scoreLabelRight.visible = false;
            this.scoreLabelRight.smoothed = false;
            this.scoreContainer.add(this.scoreLabelRight);

            const divisoryLine = new Phaser.Graphics(this.game);
            divisoryLine.lineStyle(5, 0x00A2F2);
            divisoryLine.moveTo(-130, 17);
            divisoryLine.lineTo(130, 17);
            this.content.add(divisoryLine);

            this.ballsContainer = new Phaser.Group(this.game);
            this.content.add(this.ballsContainer);

            this.firstBall = new Phaser.Sprite(this.game, -90, 60, "texture_atlas_2", "display_ball_01.png");
            this.firstBall.animations.add("spin", Phaser.Animation.generateFrameNames("display_ball_", 1, 11, ".png", 2));
            this.firstBall.anchor.set(.5);
            this.firstBall.scale.set(5);
            this.firstBall.smoothed = false;
            this.ballsContainer.add(this.firstBall);

            this.secondBall = new Phaser.Sprite(this.game, 0, 60, "texture_atlas_2", "display_ball_01.png");
            this.secondBall.animations.add("spin", Phaser.Animation.generateFrameNames("display_ball_", 1, 11, ".png", 2));
            this.secondBall.anchor.set(.5);
            this.secondBall.scale.set(5);
            this.secondBall.smoothed = false;
            this.ballsContainer.add(this.secondBall);

            this.thirdBall = new Phaser.Sprite(this.game, 90, 60, "texture_atlas_2", "display_ball_01.png");
            this.thirdBall.animations.add("spin", Phaser.Animation.generateFrameNames("display_ball_", 1, 11, ".png", 2));
            this.thirdBall.anchor.set(.5);
            this.thirdBall.scale.set(5);
            this.thirdBall.smoothed = false;
            this.ballsContainer.add(this.thirdBall);

            this.updateScore(true);
            this.updateStrikes();

            if (DisplayManager.currentState === DisplayManager.HOMERUN_STATE) {
        
                this.game.add.tween(this.scoreContainer.scale)
                    .to ({x: 0, y: .8}, 100, Phaser.Easing.Cubic.Out, true, 450)
                    .onComplete.add(function(): void {
                        
                        this.updateScore(true);

                        this.game.add.tween(this.scoreContainer.scale)
                            .to ({x: 1, y: 1}, 100, Phaser.Easing.Cubic.Out, true);
                            
                    }, this);
            }
        }

        public destroy(destryChildren?: boolean, soft?: boolean): void {

            ScoreAndBalls.currentInstance = null;

            super.destroy(destryChildren, soft);
        }

        public update(): void {

            super.update();

            if (GameVars.paused) {
                return;
            }

            if (this.displayingBreak) {
                
                this.framesCounter ++;

                if (this.framesCounter % 4 === 0) {
                    this.dancer.x += 4 * this.dancer_dx;
                }
            }

            if (this.dancer.visible || this.onFire.visible) {
                this.x2.visible = false;
                if (this.extraBallLabel) {
                    this.extraBallLabel.visible = false;
                }
            } else {
                this.x2.visible = GameVars.isPlayerOnFire;
            }
        }

        public addExtraBall(): void {

            this.lightOrangeLayer = new Phaser.Sprite(this.game, 0, 0, this.game.cache.getBitmapData(GameConstants.DARK_ORANGE_SQUARE));
            this.lightOrangeLayer.scale.set(5 * 60 / GameConstants.BITMAP_SIZE, 5 * 40 / GameConstants.BITMAP_SIZE);
            this.lightOrangeLayer.anchor.set(.5);
            this.content.addAt(this.lightOrangeLayer, 0);

            this.scoreLabelLeft.visible = false;
            this.scoreLabelRight.visible = false;

            this.extraBallLabel = new Phaser.BitmapText(this. game, 0, -28, "freshman", "EXTRA BALL", 11);
            this.extraBallLabel.anchor.set(.5);
            this.extraBallLabel.scale.set(5, 5);
            this.extraBallLabel.smoothed = false;
            this.scoreContainer.add(this.extraBallLabel);

            this.updateStrikes();

            this.game.time.events.add(1650, this.onExtraBallShown, this);
        }

        public onExtraBallShown(): void {

            DisplayManager.unBlockAnimations();

            this.game.add.tween(this.lightOrangeLayer)
                .to ({alpha: 0}, 250, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.lightOrangeLayer.destroy();
                }, this);

            this.scoreLabelLeft.visible = true;

            if (GameVars.matchData.score > 9) {
                this.scoreLabelRight.visible = true;
            }

            this.extraBallLabel.destroy();

            this.updateScore(true);
        }

        public setOnFire(): void {
            
            this.scoreLabelLeft.visible = false;
            this.scoreLabelRight.visible = false;

            this.onFire.visible = true;
            this.onFire.alpha = 1;

            this.onFire.animations.play("animation", 6, true);

            this.game.time.events.add(1000, this.removeOnFire, this);
        }

        public removeOnFire(): void {

            this.game.add.tween(this.onFire)
                .to ({alpha: 0}, 250, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(function(): void {
                    this.onFire.visible = false;
                }, this);

            if (!this.displayingBreak) {

                this.scoreLabelLeft.visible = true;

                if (GameVars.matchData.score > 9) {
                    this.scoreLabelRight.visible = true;
                }
    
                this.updateScore(true);
            }

            DisplayManager.onFireRemoved();
        }

        public startBreak(duration: number): void {

            this.displayingBreak = true;
            
            this.dancer.visible = true;
            this.dancer.x = -175;
            this.dancer.animations.play("dance", 5, true);

            this.dancer_dx = 350 / (duration * 60 / 1000);

            this.scoreLabelLeft.visible = false;
            this.scoreLabelRight.visible = false;

            if (GameConstants.SCOREBOARD_DEVELOPMENT) {
                this.game.time.events.add(duration, this.stopBreak, this);
            }
        }

        public stopBreak(): void {

            this.displayingBreak = false;

            this.dancer.visible = false;
            this.dancer.animations.stop();
                    
            this.scoreLabelLeft.visible = true;

            if (GameVars.matchData.score > 9) {
                this.scoreLabelRight.visible = true;
            }

            this.updateScore(true);
        }

        public updateScore(withoutTween?: boolean): void {

            if (this.onFire.visible) {
                return;
            }

            let score = GameVars.matchData.score;

            if (DisplayManager.currentState === DisplayManager.HOMERUN_STATE) {

                if (GameVars.homeRunType === GameConstants.HOMERUN_6) {
                    score -= 6;
                } else {
                    score -= 4;
                }
            }

            if (score > 99) {
                
                this.scoreLabelLeft.visible = true;
                this.scoreLabelLeft.x = -8;
                this.scoreLabelLeft.anchor.set(.5);
                this.scoreLabelLeft.text = score.toString();
                this.scoreLabelLeft.fontSize = 18.5;
                this.scoreLabelRight.visible = false;

            } else if (score > 9) {

                this.scoreLabelLeft.anchor.x = 1;
                this.scoreLabelLeft.visible = true;
                this.scoreLabelLeft.text = Math.floor(score / 10).toString();

                this.scoreLabelRight.visible = true;
                this.scoreLabelRight.text = (score % 10).toString();

            } else {

                this.scoreLabelLeft.visible = true;
                this.scoreLabelLeft.text = score.toString();
                this.scoreLabelRight.visible = false;
            }

            // un pequeño tween
            if (!withoutTween) {
                this.scoreContainer.scale.y = .8;
                this.game.add.tween(this.scoreContainer.scale)
                    .to ({y: 1 }, 100, Phaser.Easing.Cubic.Out, true);
            }
        }

        public updateStrikes(): void {

            const currentFrame = this.thirdBall.animations.currentAnim.frame;

            switch (GameVars.matchData.missedBalls) {

                case 0:

                    this.firstBall.animations.play("spin", 8, true);
                    this.secondBall.animations.play("spin", 8, true);
                    this.thirdBall.animations.play("spin", 8, true);

                    this.firstBall.animations.currentAnim.setFrame(currentFrame);
                    this.secondBall.animations.currentAnim.setFrame(currentFrame);
                    this.thirdBall.animations.currentAnim.setFrame(currentFrame);

                    break;
                
                case 1:

                    this.firstBall.frameName = "display_missed_ball.png";
                    this.secondBall.animations.play("spin", 8, true);
                    this.thirdBall.animations.play("spin", 8, true);

                    this.secondBall.animations.currentAnim.setFrame(currentFrame);
                    this.thirdBall.animations.currentAnim.setFrame(currentFrame);

                    break;

                case 2:

                    this.firstBall.frameName = "display_missed_ball.png";
                    this.secondBall.frameName = "display_missed_ball.png";
                    this.thirdBall.animations.play("spin", 8, true);
                    break;

                case 3:

                    this.firstBall.frameName = "display_missed_ball.png";
                    this.secondBall.frameName = "display_missed_ball.png";
                    this.thirdBall.frameName = "display_missed_ball.png";

                    this.timerEvent = this.game.time.events.add(1000, this.animationEnded, this);
                    break;
            
                default:
                    break;
            }
        }
    }
}
