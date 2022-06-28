namespace CricketHero {
    
    export class StageContainer extends Phaser.Group {
    
        public static CIRCLE_PY = 110;
        public static SCALE_SMALL = .857;

        public static currentInstance: StageContainer;

        public hero: Hero;
        public targetCirclesContainer: TargetCirclesContainer;
        public ballsContainerBack: Phaser.Group;
        public ballsContainerFront: Phaser.Group;
        public debugObjectsContainer: DebugObjectsContainer;
        public spectatorsContainer: SpectatorsContainer;
        public referee: Referee;
        public fieldBackgroundContainer: FieldBackgroundContainer;
        public twoCirclesTutorialLayer: TwoCirclesTutorialLayer;
        
        private darkLayer: DarkLayer;
        private transparentLayer: Phaser.Sprite;
        private hitTutorialLayer: HitTutorialLayer;
        private heroContainer: Phaser.Group;
        private fieldPatchesContainer: Phaser.Group;
        private wickets: Wickets;
        private upArrowKey: Phaser.Key;
        private leftArrowKey: Phaser.Key;
        private rightArrowKey: Phaser.Key;
        
        constructor(game: Phaser.Game) {
    
            super(game, null, "stage-container");

            StageContainer.currentInstance = this;

            this.x = GameConstants.GAME_WIDTH / 2;
            this.y = this.game.device.touch ? 290 : GameConstants.GAME_HEIGHT / 2;

            this.scale.y = GameVars.scaleY;

            this.referee = null;
            this.darkLayer = null;

            // TODO: pensar en como se resuelve el tema del desktop
            this.transparentLayer = this.create(0, 0, this.game.cache.getBitmapData(GameConstants.WHITE_SQUARE));
            this.transparentLayer.anchor.set(.5);
            this.transparentLayer.scale.set(1.25 * GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, 1.25 * GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE / GameVars.scaleY);
            this.transparentLayer.alpha = 0;
            this.transparentLayer.inputEnabled = true;
            this.transparentLayer.events.onInputDown.add(this.onDownTransparentLayer, this);

            this.spectatorsContainer = new SpectatorsContainer(this.game);
            this.add(this.spectatorsContainer);

            DisplayManager.init(this.game);
            this.add(DisplayManager.display);

            this.fieldBackgroundContainer = new FieldBackgroundContainer(this.game);
            this.add(this.fieldBackgroundContainer);

            this.ballsContainerBack = new Phaser.Group(this.game);
            this.add(this.ballsContainerBack);

            this.wickets = new Wickets(this.game);
            this.add(this.wickets);

            this.heroContainer = new Phaser.Group(this.game);
            this.add(this.heroContainer);

            this.hero = new Hero(this.game);
            this.heroContainer.add(this.hero);

            this.fieldPatchesContainer = new Phaser.Group(this.game);
            this.add(this.fieldPatchesContainer);

            this.fieldBackgroundContainer.addPatches(this.fieldPatchesContainer, this.heroContainer);

            if (GameVars.gameData.hitTutorialShown) {
                this.hitTutorialLayer = null;
            } else {
                this.hitTutorialLayer = new HitTutorialLayer(this.game);
                this.add(this.hitTutorialLayer);
            }

            this.targetCirclesContainer = new TargetCirclesContainer(this.game);
            this.targetCirclesContainer.visible = false;
            this.add(this.targetCirclesContainer);

            this.ballsContainerFront = new Phaser.Group(this.game);
            this.add(this.ballsContainerFront);

            // los cursores
            if (!this.game.device.touch) {
                this.upArrowKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
                this.leftArrowKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
                this.rightArrowKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            }
            
            if (GameConstants.DEBUG) {
                this.debugObjectsContainer = new DebugObjectsContainer(this.game);
                this.add(this.debugObjectsContainer);
            } else {
                this.debugObjectsContainer = null;
            }
        }

        public update(): void {

            super.update();

            BallsManager.update();

            if (!this.game.device.touch && !GameVars.gameOver) {

                if (this.upArrowKey.justDown) {
                    this.hero.onDownInScene(GameConstants.GAME_WIDTH / 2);
                }

                if (this.leftArrowKey.justDown) {
                    this.hero.onDownInScene(10);
                }

                if (this.rightArrowKey.justDown) {
                    this.hero.onDownInScene(GameConstants.GAME_WIDTH);
                }
            }
        }

        public startMatch(): void {

            if (GameVars.enterGameDirectly) {

                DisplayManager.setState(DisplayManager.AFTER_BREAK_STATE);
                
                if (!GameVars.matchData.upscaled) {

                    this.scale.set(StageContainer.SCALE_SMALL, StageContainer.SCALE_SMALL * GameVars.scaleY);
                }

            } else {
                
                DisplayManager.setState(DisplayManager.COUNTDOWN_STATE);
                this.scaleDown();
            }

            this.hero.startMatch();

            this.targetCirclesContainer.visible = true;
        }

        public homerun(): void {

            this.targetCirclesContainer.homerun();
            this.hero.homerun();

            DisplayManager.setState(DisplayManager.HOMERUN_STATE);
        }

        public respawnPlayer(): void {

            this.game.time.events.add(200, function(): void {
                this.hero = new Hero(this.game);
                this.hero.appear();
                this.heroContainer.add(this.hero);
            }, this);
        }

        public pause(): void {

            this.hero.pause();

            BallsManager.pause();
            DisplayManager.pause();
        }

        public resumeGame(): void {

            this.hero.resume();

            BallsManager.resume();
            DisplayManager.resume();
        }

        public activateTargetCircle(): void {

            this.targetCirclesContainer.activateCircle();
            this.fieldBackgroundContainer.animateLine();
        }

        public ballReachedCenter(): void {

            if (GameVars.currentBall.ballType === BallsManager.BALL ) {
                
                DisplayManager.setState(DisplayManager.STRIKE_STATE);
                
                switch (GameVars.matchData.missedBalls) {

                    case 1:
                        AudioManager.playSound("first_foul");
                        break;

                    case 2:
                        AudioManager.playSound("second_foul");
                        break;

                    case 3:
                        AudioManager.playSound("last_foul");
                        break;
                
                    default:
                        break;
                }

                this.hero.strike();
                this.spectatorsContainer.strike();
                this.wickets.hit();
            }

            this.targetCirclesContainer.ballReachedCenter();
        }

        public addReferee(): void {

            this.referee = new Referee(this.game);
            DisplayManager.display.add(this.referee);
        }

        public ballHit(): void {

            DisplayManager.updateScore();
            this.spectatorsContainer.celebrate();

            this.game.camera.shake(0.02, 85);
        }

        public coinHit(): void {

            this.game.camera.shake(0.0025, 75);
        }

        public bombHit(): void {

            DisplayManager.explosion();

            const explosion = <Phaser.Sprite> this.create(GameVars.currentBall.itemSprite.x, GameVars.currentBall.itemSprite.y, "texture_atlas_3");
            explosion.anchor.set(.5);
            explosion.scale.set(1.25);
            explosion.animations.add("explode", Phaser.Animation.generateFrameNames("explosion_", 1, 26, ".png", 2));
            explosion.animations.play("explode", 22, false, true);

            this.fieldBackgroundContainer.explosion();

            this.game.camera.shake(0.025, 400);

            AudioManager.playSound("hit_explode");
        }

        public breakStarts(duration: number): void {
            
            DisplayManager.startBreak(duration);
        }

        public breakEnds(): void {
            
            DisplayManager.stopBreak();
        }

        public coinsFrenzyStarts(): void {

            DisplayManager.coinsFrenzyStarted();

            this.spectatorsContainer.coinsFrenzyStarts();

            this.swap(DisplayManager.display, this.fieldBackgroundContainer);

            const i = this.getIndex(this.fieldBackgroundContainer);

            this.darkLayer = new DarkLayer(this.game, .45);
            this.addAt(this.darkLayer, i + 1);
        }

        public coinsFrenzyEnds(): void {
            
            DisplayManager.coinsFrenzyEnds();

            this.spectatorsContainer.coinsFrenzyEnds();

            if (this.darkLayer) {
                this.darkLayer.destroy();
                this.darkLayer = null;
            }
           
            this.swap(DisplayManager.display, this.fieldBackgroundContainer);
        }

        public activateHomeRun(): void {

            this.targetCirclesContainer.activateHomerunMode();
        }

        public deactivateHomeRun(): void {

            this.targetCirclesContainer.deactivateHomerunMode();
        }

        public scaleUp(): void {
            
            this.game.add.tween(this.scale)
                .to ({x: 1, y: 1 * GameVars.scaleY}, 300, Phaser.Easing.Cubic.Out, true);
        }

        public scaleDown(): void {

            let tweenDuration = GameVars.explosion ? 850 : 300;
            
            this.game.add.tween(this.scale)
                .to ({x: StageContainer.SCALE_SMALL, y: StageContainer.SCALE_SMALL * GameVars.scaleY}, tweenDuration, Phaser.Easing.Cubic.Out, true);
        }

        public smallTargetCircle(): void {

            this.targetCirclesContainer.makeSmall();
        }

        public restoreTargetCircleSize(): void {

            this.targetCirclesContainer.restoreSize();
        }

        public activate2CirclesMode(): void {

            this.targetCirclesContainer.activate2CirclesMode();
            this.hero.activate2CirclesMode();

            DisplayManager.setState(DisplayManager.TWO_CIRCLES_STATE);
        }

        public activate1CircleMode(): void {

            this.targetCirclesContainer.activate1CircleMode();
          
            DisplayManager.setState(DisplayManager.ONE_CIRCLE_STATE);
        }

        public startStreak(): void {

            this.hero.streakStart();

            this.swap(DisplayManager.display, this.fieldBackgroundContainer);

            const i = this.getIndex(this.fieldBackgroundContainer);

            this.darkLayer = new DarkLayer(this.game, .65);
            this.addAt(this.darkLayer, i + 1);

            DisplayManager.setOnFire(); 
        }

        public endStreak(): void {
            
            if (this.darkLayer) {
                this.darkLayer.destroy();
                this.darkLayer = null;
            }
    
            this.swap(DisplayManager.display, this.fieldBackgroundContainer);

            this.hero.streakEnd();
        }

        public onHoleOpened(): void {

            if (this.darkLayer) {
                this.darkLayer.destroy();
                this.darkLayer = null;
            }
        }

        public gameOver(): void {

            if (this.referee !== null) {
                this.referee.removeFromStage();
            }

            this.hero.gameOver();
            this.spectatorsContainer.gameOver();
            this.targetCirclesContainer.gameOver();

            if (GameVars.explosion) {
                DisplayManager.setState(DisplayManager.GAME_OVER_STATE);
            }
        }

        public resumeGameAfterContinue(): void {

            DisplayManager.onAdShown();

            DisplayManager.setState(DisplayManager.AFTER_BREAK_STATE);

            this.hero.resumeAfterContinue();

            this.targetCirclesContainer.onAdShown();

            this.spectatorsContainer.onAdShown();

            if (this.referee) {
                this.referee.destroy();
                this.referee = null;
            }
        }

        public resumeGameAfterBreak(): void {

            DisplayManager.go();
        }

        public addTwoCirclesTutorialLayer(): void {

            this.transparentLayer.inputEnabled = false;

            let i = this.getIndex(this.targetCirclesContainer);

            this.twoCirclesTutorialLayer = new TwoCirclesTutorialLayer(this.game);
            this.addAt(this.twoCirclesTutorialLayer, i);

            this.bringToTop(DisplayManager.display);
        }

        public removeTwoCirclesTutorialLayer(): void {

            DisplayManager.stateAnimationEnded();

            this.transparentLayer.inputEnabled = true;

            this.twoCirclesTutorialLayer.destroy();
            this.twoCirclesTutorialLayer = null;

            const i = this.getIndex( this.spectatorsContainer);

            this.remove(DisplayManager.display, false);

            this.addAt(DisplayManager.display, i + 1);
        }

        public showHowToHitTutorialLayer(): void {

            this.transparentLayer.inputEnabled = false;
            this.hitTutorialLayer.activate();
        }

        public removeHowToHitTutorialLayer(): void {

            this.transparentLayer.inputEnabled = true;
            
            this.hitTutorialLayer.destroy();

            this.hero.onDownInScene();
        }

        private onDownTransparentLayer(sprite: Phaser.Sprite, pointer: Phaser.Pointer): void {
           
            this.hero.onDownInScene(pointer.x);
        }
    }
}
