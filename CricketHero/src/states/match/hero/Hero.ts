namespace CricketHero {
    
    export class Hero extends Phaser.Group {

        private static PX_WITH_2_CIRCLES = 155;

        private hero: Spriter.SpriterGroup;
        private streakAnimation: Phaser.Sprite;
        private eggAnimation: Phaser.Sprite;
        private volumeHitEffect: number;
        private burnt: boolean;
        private framesCounter: number;
        private heroHitInCoinsFrenzy: boolean;
        private outOfTheScreen: boolean;
        private setToFall: boolean;
        private canBat: boolean;

        constructor(game: Phaser.Game) {
    
            super(game, null, "hero");

            this.framesCounter = 0;
            this.heroHitInCoinsFrenzy = false;
            this.canBat = true;

            this.burnt = false;
            this.outOfTheScreen = false;
            this.setToFall = false;

            this.x = 125;
            this.y = 40;

            this.volumeHitEffect = 1;

            this.streakAnimation = this.create(0, 155, "texture_atlas_1", "fx_hit_streak_01.png");
            this.streakAnimation.anchor.set(.5, 1);
            this.streakAnimation.animations.add("flame", Phaser.Animation.generateFrameNames("fx_hit_streak_", 1, 4, ".png", 2));
            this.streakAnimation.visible = false;

            let spriterFile: any = new Spriter.SpriterXml(this.game.cache.getXML("cricket-player"), { imageNameType: Spriter.eImageNameType.ORIGINAL });
            let spriterLoader: any = new Spriter.Loader();
            let spriterData: any = spriterLoader.load(spriterFile);

            this.hero = new Spriter.SpriterGroup(this.game, spriterData, "texture_atlas_3", "cricket-player", 0, 5);
            this.hero.onLoop.add(this.onLoop, this);

            if (GameVars.enterGameDirectly) {
                
                this.hero.playAnimationByName("afterAd"); 
                this.hero.setAnimationSpeedPercent(3);

                if (GameVars.matchData.burnt) {
                    this.hero.pushCharMap("burnt");
                }

                this.changeHeroSide(GameVars.matchData.heroSide);

            } else {
                this.hero.playAnimationByName("idle01"); 
            }

            this.add(this.hero);

            this.eggAnimation = this.create(0, 0, "texture_atlas_1");
            this.eggAnimation.anchor.set(.5);
            this.eggAnimation.animations.add("smash", Phaser.Animation.generateFrameNames("huevo_", 1, 14, ".png", 2));
            this.eggAnimation.visible = false;
        }

        public update(): void {

            super.update();

            if (this.outOfTheScreen) {
                return;
            }

            if (!GameVars.paused) {
                this.hero.updateAnimation();
            }

            if (GameVars.coinsFrenzy) {

                if (this.heroHitInCoinsFrenzy) {

                    this.framesCounter ++;
                    
                    if (this.framesCounter === 2) {
                        this.heroHitInCoinsFrenzy = false;
                    }

                    MatchManager.playerHitsInCoinsFrenzyMode();
                }
            }
        }

        public appear(): void {
            
            this.canBat = false;

            this.changeHeroSide(GameVars.matchData.heroSide);

            // TODO: apañar el tema del lado 
            this.hero.y = -650;

            this.hero.playAnimationByName("fall"); 

            this.game.add.tween(this.hero)
                .to ({y: 0}, 750, Phaser.Easing.Cubic.In, true, 200)
                .onComplete.add(function(): void {
                    this.canBat = true;
                    this.hero.playAnimationByName("idle01");
                }, this);
        }

        public startMatch(): void {

            if (!GameVars.enterGameDirectly) {

                this.initialJump();
            } 
        }

        public homerun(): void {
            
            this.hero.playAnimationByName("hit_homerun"); 
        }

        public strike(): void {

            this.setToFall = true;

            if (GameVars.matchData.missedBalls === 2) {
               // de momento nada
            } else {
                if (!this.burnt && !GameVars.gameOver && this.hero.currentAnimationName !== "fail") {
                    this.fall();
                }
            }
        }

        public pause(): void {

            // de momento nada
        }

        public resume(): void {
            
            // de momento nada
        }

        public streakStart(): void {

            this.streakAnimation.visible = true;
            this.streakAnimation.animations.play("flame", 18, true);

            this.streakAnimation.alpha = 0;
            this.streakAnimation.scale.set(2, 1.4);

            this.game.add.tween(this.streakAnimation)
                .to ({alpha: 1}, 750, Phaser.Easing.Cubic.Out, true);

            this.game.add.tween(this.streakAnimation.scale)
                .to ({y: 2}, 750, Phaser.Easing.Cubic.Out, true);

            AudioManager.playSound("on_fire_start");

            this.game.time.events.add(500, function(): void {
                AudioManager.playSound("on_fire_loop");
            }, this);
        }

        public streakEnd(): void {

            this.streakAnimation.visible = false;
            this.streakAnimation.animations.stop("flame");

            AudioManager.playSound("on_fire_end");
            AudioManager.stopSound("on_fire_loop", false, true);
        }

        public gameOver(): void {

            if (GameVars.explosion) {

                if (this.hero.currentAnimationName !== "bomb") {
                    this.hero.playAnimationByName("bomb"); 
                    this.hero.setAnimationSpeedPercent(6);
                }

            } else {
                
                if (GameVars.matchData.continued) {

                    this.hero.playAnimationByName("gameover_def"); 
                    this.hero.setAnimationSpeedPercent(5);

                } else {

                    this.hero.playAnimationByName("gameover"); 
                    this.hero.setAnimationSpeedPercent(5);
                    AudioManager.playSound("gameover_scream");
                }
            }

            AudioManager.stopSound("on_fire_loop", false, true);
        }
        
        public onDownInScene(px?: number): void {
    
            if (GameVars.enterGameDirectly || !this.canBat || (!GameVars.gameData.hitTutorialShown && !GameVars.editingLevels) || (GameVars.gameOver && !GameVars.currentBall) || GameVars.paused || StartLayer.currentInstance || GameVars.stopAction || (this.hero.currentAnimationName === "hit" && !GameVars.coinsFrenzy) || this.hero.currentAnimationName === "fail") {
               
                if (this.hero.currentAnimationName === "afterAd") {
                    this.initialJump();
                }

                return;
            }

            if (px && GameVars.matchData.targetCircles === 2) {

                if (px > GameConstants.GAME_WIDTH / 2) {
                    this.changeHeroSide(GameConstants.RIGHT);
                } else {
                    this.changeHeroSide(GameConstants.LEFT);
                }

            } else {

                MatchManager.setHeroSide(GameConstants.CENTER);
            }

            if (GameVars.coinsFrenzy) {

                if (GameVars.matchData.targetCircles === 2 && GameVars.activatedCircleSide !== GameVars.matchData.heroSide) {
                    
                    this.hero.playAnimationByName("fail"); 
                    this.hero.setAnimationSpeedPercent(6);
                    AudioManager.playSound("hit_miss");

                } else {
                    this.hero.playAnimationByName("hit"); 
                    this.hero.setAnimationSpeedPercent(6);
                }

                this.heroHitInCoinsFrenzy = true;
                this.framesCounter = 0;

            } else {

                const itemHit = MatchManager.playerHits();

                if (itemHit === null) {
    
                    this.hero.playAnimationByName("fail"); 
                    this.hero.setAnimationSpeedPercent(6);
                    
                    AudioManager.playSound("hit_miss");
    
                } else {
    
                    switch (itemHit) {
    
                        case BallsManager.BALL:
    
                            if (GameVars.homerun) {
    
                                this.hero.setAnimationSpeedPercent(3);
                                this.hero.playAnimationByName("hit_racha"); 

                                AudioManager.playSound("hit_02_alt");
                                
                            } else {
    
                                this.hero.setAnimationSpeedPercent(6);
                                this.hero.playAnimationByName("hit"); 

                                if (Math.random() > .5) {
                                    AudioManager.playSound("hit_01_alt");
                                } else {
                                    AudioManager.playSound("hit_02_alt");
                                }
                            }
    
                            break;
                    
                        case BallsManager.BOMB:

                            if (GameVars.matchData.burnt) {
                                this.hero.playAnimationByName("gameover_def"); 
                                this.hero.setAnimationSpeedPercent(4);
                            } else {
                                this.burnt = true;
                                this.hero.playAnimationByName("bomb"); 
                                this.hero.setAnimationSpeedPercent(6);
                                this.hero.pushCharMap("burnt");

                                MatchManager.playerSetBurnt();
                            }
    
                            break;
    
                        case BallsManager.EGG:
    
                            // TODO: FALTA LA ANIMACION DEL TOMATE
                            this.hero.playAnimationByName("hit"); 
                            this.hero.setAnimationSpeedPercent(6);
    
                            this.eggAnimation.visible = true;
                            this.eggAnimation.angle = 360 * Math.random();
                            this.eggAnimation.animations.play("smash", 20, false)
                                .onComplete.add(function(): void {
                                    this.eggAnimation.visible = false;
                                }, this);
            
                            AudioManager.playSound("hit_tomato");
    
                            break;
    
                        case BallsManager.COIN:
    
                            this.hero.playAnimationByName("hit"); 
                            this.hero.setAnimationSpeedPercent(6);
                            break;
                    
                        default:
                            break;
                    }
                }
            }
        }

        public changeHeroSide(side: string): void {

            MatchManager.setHeroSide(side);

            if (GameVars.matchData.heroSide === GameConstants.RIGHT) {
                this.scale.x = 1;
                this.x = Hero.PX_WITH_2_CIRCLES;
            } else if (GameVars.matchData.heroSide === GameConstants.LEFT) {
                this.scale.x = -1;
                this.x = -Hero.PX_WITH_2_CIRCLES;
            }
        }

        public activate2CirclesMode(): void {
            
            if (GameVars.matchData.heroSide === GameConstants.CENTER) {

                this.game.add.tween(this)
                    .to ({x: Hero.PX_WITH_2_CIRCLES}, 250, Phaser.Easing.Cubic.Out, true);

            } else if (GameVars.matchData.heroSide === GameConstants.LEFT) {

                if (this.x !== -Hero.PX_WITH_2_CIRCLES ) {
                    this.game.add.tween(this)
                        .to ({x: -Hero.PX_WITH_2_CIRCLES}, 250, Phaser.Easing.Cubic.Out, true);
                }

            } else {

                if (this.x !== Hero.PX_WITH_2_CIRCLES ) {
                    this.game.add.tween(this)
                        .to ({x: -Hero.PX_WITH_2_CIRCLES}, 250, Phaser.Easing.Cubic.Out, true);
                }
            }
        }

        public resumeAfterContinue(): void {

            this.setToFall = false;

            this.hero.playAnimationByName("afterAd"); 
            this.hero.setAnimationSpeedPercent(3);
        }

        private initialJump(): void {
            
            this.hero.playAnimationByName("startGame"); 
            this.hero.setAnimationSpeedPercent(4);

            this.game.time.events.add(200, function(): void {
                AudioManager.playSound("bat_throw_air");
            }, this);
        }

        private fall(): void {
            
            this.canBat = false;

            MatchManager.respawnPlayer();

            StageContainer.currentInstance.fieldBackgroundContainer.openHole();

            this.hero.playAnimationByName("startFall"); 

            this.streakAnimation.visible = false; // por si estaba activada
        }

        private onLoop(): void {

            if (this.hero.currentAnimationName.indexOf("idle") !== -1 
            || this.hero.currentAnimationName === "hit" 
            || this.hero.currentAnimationName === "tomato"
            || this.hero.currentAnimationName === "hit_racha") {

                if (GameVars.gameOver) {
                    
                    this.gameOver();

                } else {

                    let rnd = Math.floor(Math.random() * 7) +  1;
                    this.hero.playAnimationByName("idle0" + rnd);

                    this.hero.setAnimationSpeedPercent(4);
                }
            
            } else if (this.hero.currentAnimationName === "bomb") {

                this.hero.playAnimationByName("bomb_loop"); 
                this.hero.setAnimationSpeedPercent(6);

            } else if (this.hero.currentAnimationName === "gameover") {

                this.hero.playAnimationByName("gameover_loop"); 
                this.hero.setAnimationSpeedPercent(5);

            } else if (this.hero.currentAnimationName === "gameover_def") {
                
                this.hero.playAnimationByName("gameover_def_loop"); 
                this.hero.setAnimationSpeedPercent(3);

            } else if (this.hero.currentAnimationName === "startGame") {

                let rnd = Math.floor(Math.random() * 7) +  1;
                this.hero.playAnimationByName("idle0" + rnd);

                rnd = Math.floor(Math.random() * 5) +  3;
                this.hero.setAnimationSpeedPercent(4);

                if ( GameVars.matchData.continued || GameVars.enterGameDirectly) {
                    MatchManager.resumeGameAfterBreak();
                }
                
            } else if (this.hero.currentAnimationName === "gameover_loop") {

                AudioManager.playSound("hit_gameover", false, this.volumeHitEffect);

                this.volumeHitEffect *= .8;

                if (this.volumeHitEffect < .15) {
                    this.volumeHitEffect = .15;
                }
                
            } else if (this.hero.currentAnimationName === "fail" ) {

                if (GameVars.gameOver) {
                    
                    this.gameOver();

                } else {

                    if (this.setToFall) {
                        this.fall();
                    } else {
                        let rnd = Math.floor(Math.random() * 7) +  1;
                        this.hero.playAnimationByName("idle0" + rnd);

                        this.hero.setAnimationSpeedPercent(4);
                    }
                }
            } else if (this.hero.currentAnimationName === "startFall") {

                this.hero.playAnimationByName("fall"); 

                StageContainer.currentInstance.fieldBackgroundContainer.closeHole();

                this.game.add.tween(this.hero)
                    .to ({y: this.hero.y + 750}, 750, Phaser.Easing.Cubic.Out, true, 250)
                    .onComplete.add(function(): void {
                        this.outOfTheScreen = true;
                        StageContainer.currentInstance.fieldBackgroundContainer.hidePatch();
                        this.destroy();
                    }, this);
            }
        }
    }
}
