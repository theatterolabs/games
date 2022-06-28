namespace CricketHero {

    export class MatchManager {

        // TODO: descomentar esto para sacar al arbitro
        // private static refereeAdded = false;

        private static readonly BALLS_STREAK = 10; // era 10
        private static game: Phaser.Game;
        private static nextStageState: string;

        public static init(game: Phaser.Game): void {

            MatchManager.game = game;
            MatchManager.nextStageState = null;

            GameVars.paused = false;
            GameVars.currentBall = null;
            GameVars.explosion = false;
            GameVars.gameOver = false;
            GameVars.ballsStreak = 0;
            GameVars.isPlayerOnFire = false;
            GameVars.stopAction = false;
            GameVars.refereeJustHit = false;
            GameVars.twoCirclesTutorialJustShown = false;
            GameVars.homerunMode = false;
            GameVars.coinsFrenzy = false;
            GameVars.justHadCoinsFrenzy = false;
            GameVars.homerunShown = false;
            GameVars.newRecord = false;
            GameVars.relevantRecord = false;
            GameVars.homeRunType = GameConstants.HOMERUN_6;
            GameVars.showReferee = Math.random() > .65 ? true : false;
            GameVars.thrownItemsToShowFairy = 15 + Math.floor(8 * Math.random());
            GameVars.justHadStrike = false;
            GameVars.justSetOnFire = false;

            BallsManager.init(game);
            StageStateManager.init(game);

            if (GameVars.enterGameDirectly) {
                
                MatchManager.game.time.events.add(150, function(): void {

                    // DisplayManager.setState(DisplayManager.AFTER_AD_STATE);
                    // MatchManager.throwItem();
                    // MatchState.currentInstance.countdownEnded();
                    // MatchManager.resumeGameAfterAd();
                    StageContainer.currentInstance.startMatch();
                    
                }, this);
            }

            GameVars.gameData.matchesPlayed ++;
            GameManager.writeGameData();
        }   

        public static pauseGame(): void {

            if (!GameVars.playing) {
                return;
            }

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                PokiSDK.gameplayStop();
            }
        
            GameVars.paused = true;

            MatchManager.game.time.events.pause();

            MatchState.currentInstance.pauseGame();
        }

        public static resumeGame(): void {

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                PokiSDK.gameplayStart();
            }
    
            GameVars.paused = false;

            MatchManager.game.time.events.resume();

            MatchState.currentInstance.resumeGame();
        }

        public static showHowToHitBallTutorial(): void {

            GameVars.paused = true;

            MatchManager.game.time.events.pause();

            MatchState.currentInstance.showHowToHitBallTutorial();

            GameVars.gameData.hitTutorialShown = true;
            GameManager.writeGameData();
        }

        public static removeHowToHitBallTutorial(): void {

            GameVars.paused = false;

            MatchManager.game.time.events.resume();

            MatchState.currentInstance.removeHowToHitBallTutorial();
        }

        public static countdownEnded(): void {

            MatchManager.throwItem();

            MatchState.currentInstance.countdownEnded();
        }

        public static setTargetCircleSide(side: string): void  {
            
            GameVars.activatedCircleSide = side;

            StageContainer.currentInstance.activateTargetCircle();
        }

        public static playerHits(): string {

            const ball = GameVars.currentBall; 

            if (!ball) {
                return null;
            }

            let ballHit = false;
            let collisionData = MatchManager.isBallInsideTargetCircle();
            
            if (ball && ball.movingTowardsCenter && !ball.hit) {

                if (collisionData.insideCircle) {
                    
                    ballHit = true;
                    ball.hit = true;

                    GameVars.gameData.ballsHit ++;
                } 
            }

            let itemHit = null;

            if (ballHit) {

                if (GameVars.matchData.targetCircles === 2) {
                    if (GameVars.activatedCircleSide === GameVars.matchData.heroSide) {
                        itemHit = MatchManager.itemHit(collisionData.d);
                    }
                } else {
                    itemHit = MatchManager.itemHit(collisionData.d);
                }
            } 

            return itemHit;
        }

        public static isBallInsideTargetCircle(): {insideCircle: boolean, d: number} {

            const ball = GameVars.currentBall; 

            let targetCirclePosition = StageContainer.currentInstance.targetCirclesContainer.getTargetCircleWorldPosition();
            let ballPosition = ball.itemSprite.worldPosition; 

            let dx = targetCirclePosition.x - ballPosition.x;
            let dy = targetCirclePosition.y - ballPosition.y;

            let d = Math.sqrt(dx * dx + dy * dy);
            
            let checkRadius: number;

            if (GameVars.gameData.hitTutorialShown) {
                checkRadius = .965 * TargetCircle.radiusOuterCircle;
            } else {
                checkRadius = .6 * TargetCircle.radiusOuterCircle;
            }   

            if (d < checkRadius) {
                return {insideCircle: true, d: d};
            } else {
                return  {insideCircle: false, d: d};
            }
        }

        public static playerHitsInCoinsFrenzyMode(): void {

            // mirar que monedas estan dentro del circulo
            if (GameVars.matchData.targetCircles === 2 && GameVars.activatedCircleSide !== GameVars.matchData.heroSide) {
               return;
            } 

            for (let i = 0; i < BallsManager.frenzyCoinsPool.length; i ++) {

                let coin = BallsManager.frenzyCoinsPool[i];
                
                if (!coin.trajectory.disappearing && coin.movingTowardsCenter) {

                    let coin_px = coin.itemSprite.x;
                    let coin_py = coin.itemSprite.y;

                    const d = Math.sqrt((coin_px * coin_px) + (coin_py - StageContainer.CIRCLE_PY) * (coin_py - StageContainer.CIRCLE_PY));

                    if (d < 1.1 * TargetCircle.radiusOuterCircle) {
                        coin.coinHit();
                        GameVars.gameData.credits ++;
                    } 
                }
            }
        }

        public static hitFrenzyCoinReachedHUD(): void {

            HUD.currentInstance.updateCredits();
        }

        public static missedBallHitGround(): void {

            if (!GameVars.currentBall) {
                return;
            }

            GameVars.gameData.ballsMissed ++;

            MatchManager.checkBallStreak(false);

            if (!(GameVars.currentBall.ballType === BallsManager.BALL && GameVars.matchData.missedBalls === 3)) { // eran 3

                MatchManager.throwItem();
            }

            GameVars.currentBall = null;
        }

        public static hitBallLeftStage(): void {

            if (GameVars.currentBall && GameVars.currentBall.ballType === BallsManager.COIN) {
                HUD.currentInstance.updateCredits();
            }

            GameVars.currentBall = null;  

            MatchManager.throwItem();
        }

        public static ballReachedCenter(): void {

            StageContainer.currentInstance.ballReachedCenter();

            if (GameVars.currentBall.ballType === BallsManager.BALL) {

                GameVars.matchData.missedBalls ++;
                GameVars.justHadStrike = true;

                // por el tema del referee es conveniente actualizar el contador de bolas
                if (ScoreAndBalls.currentInstance ) {
                    ScoreAndBalls.currentInstance.updateStrikes();
                }

                if (GameVars.matchData.missedBalls === 3) { // eran 3

                    MatchManager.gameOver();
                }
            }
        }

        public static onDownFairy(): void {

            GameVars.matchData.missedBalls --;

            GameVars.refereeJustHit = true;
           
            DisplayManager.fairyPressed();

            AchievementsManager.onRefereeSmashed();
        }

        public static ballScheduled(): void {

            GameVars.refereeJustHit = false;
        }

        public static coinsFrenzyStarts(): void {

            GameVars.coinsFrenzyShown = true;

            let delay = 0;
            if (GameVars.homerun) {
                delay = 3000;
            } 

            GameVars.homerun = false;

            MatchManager.game.time.events.add(delay, function(): void {
                
                StageContainer.currentInstance.coinsFrenzyStarts();

                MatchManager.game.time.events.add(1500, function(): void {
                    
                    GameVars.coinsFrenzy = true;

                    MatchManager.game.time.events.add(4000, function(): void {
                        
                        GameVars.coinsFrenzy = false;
                        
                        StageContainer.currentInstance.coinsFrenzyEnds();
                        GameVars.justHadCoinsFrenzy = true;
                        BallsManager.throwItem();

                    }, this);

                }, this);

            }, this);
        }

        public static breakStarts(duration: number): void {

            if (GameVars.homerun) {
                duration += 3500;
            }
            
            StageContainer.currentInstance.breakStarts(duration);

            MatchManager.game.time.events.add(duration, function(): void {
                StageContainer.currentInstance.breakEnds();
                BallsManager.throwItem();
            }, this);
        }

        public static resumeGameAfterContinue(): void {

            if (!GameVars.gameData.muted) {
                this.game.sound.mute = false;
            }

            GameVars.explosion = false;
            GameVars.stopAction = true;
            GameVars.newRecord = false;
            GameVars.relevantRecord = false;
            GameVars.gameOver = false;
            GameVars.homerunMode = false;

            // se continua con 1 bola siempre
            GameVars.matchData.missedBalls = 2;

            MatchState.currentInstance.resumeGameAfterContinue();
        }

        public static resumeGameAfterBreak(): void {

            GameVars.enterGameDirectly = false;

            MatchState.currentInstance.resumeGameAfterBreak();
        }

        public static throwBallAfterBreak(): void {

            GameVars.stopAction = false;
            MatchManager.throwItem();
        }

        public static ballThrown(ball: Ball): void {

            GameVars.homerun = false;
            GameVars.currentBall = ball;
            GameVars.twoCirclesTutorialJustShown = false;
            GameVars.justHadCoinsFrenzy = false;
    
            if (this.nextStageState !== StageStateManager.SAME_AS_BEFORE) {

                switch (this.nextStageState) {

                    case StageStateManager.SCALE_UP:
                        
                        if (GameVars.gameData.twoCirclesTutorialShown) {
                            GameVars.matchData.upscaled = true;
                            StageContainer.currentInstance.scaleUp();
                        }
                       
                        break;

                    case StageStateManager.SCALE_DOWN:
                    
                        GameVars.matchData.upscaled = false;
                        StageContainer.currentInstance.scaleDown();
                        break;
                
                    default:
                        break;
                }
            }
        }

        public static resumeAction():  void {

            GameVars.stopAction = false;
            GameVars.twoCirclesTutorialJustShown = true;
            GameVars.gameData.twoCirclesTutorialShown = true;

            // grabar en local storage que se ha visto el tutorial
            GameManager.writeGameData();
            
            MatchState.currentInstance.removeTwoCirclesTutorialLayer();

            MatchManager.game.time.events.add(Phaser.Timer.SECOND, MatchManager.throwItem, MatchManager);
        }

        public static respawnPlayer(): void {

            StageContainer.currentInstance.respawnPlayer();
        }

        public static setHeroSide(side: string): void {

            GameVars.matchData.heroSide = side;
        }

        public static playerSetBurnt(): void {
            
            GameVars.matchData.burnt = true;
        }

        private static itemHit(d: number): string {

            MatchManager.checkBallStreak(true);

            GameVars.currentBall.hit = true;

            const ballType = GameVars.currentBall.ballType;

            switch (ballType) {
                
                case BallsManager.EGG:

                    GameVars.gameData.tomatoesSmashed ++;

                    GameVars.currentBall.tomatoHit();
                    MatchState.currentInstance.tomatoHit();

                    AchievementsManager.onEggSmashed();

                    break;

                case BallsManager.BOMB:

                    GameVars.gameData.bombsSmashed ++;

                    GameVars.explosion = true;
                    GameVars.currentBall.bombHit();
                    MatchState.currentInstance.bombHit();

                    AchievementsManager.onBombSmashed();
                    
                    MatchManager.gameOver();

                    break;

                case BallsManager.BALL:

                    GameVars.currentBall.ballHit();

                    let points = 1;
                   
                    if (GameVars.homerunMode && d < 15) {

                        // aqui decidimos si es un 4 o un 6
                        if (GameVars.homeRunType === GameConstants.HOMERUN_6) {
                            points = 6;
                        } else {
                            points = 4;
                        }
                           
                        GameVars.homerun = true;
                        GameVars.homerunMode = false;
                        GameVars.homerunShown = true;
                        StageContainer.currentInstance.homerun();
                    }
                    
                    if (GameVars.isPlayerOnFire) {
                        points *= 2;
                    } 

                    GameVars.matchData.score += points;
                    
                    MatchState.currentInstance.ballHit();

                    break;

                case BallsManager.COIN:

                    GameVars.gameData.credits ++;
                    GameVars.currentBall.coinHit();
                    MatchState.currentInstance.coinHit();
                    GameManager.writeGameData();

                    break;
            
                default:
                    break;
            }  
            
            return ballType;
        }

        private static throwItem(): void {

            GameVars.matchData.itemsThrown ++;

            this.nextStageState = StageStateManager.getNextState();

            if (this.nextStageState !== StageStateManager.SAME_AS_BEFORE) {

                switch (this.nextStageState) {

                    case StageStateManager.ACTIVATE_HOME_RUN:
                    
                        if (!GameVars.isPlayerOnFire && !GameVars.homerunShown) {
                            GameVars.homerunMode = true;
                        }

                    break;
            
                    case StageStateManager.DEACTIVATE_HOME_RUN:

                        GameVars.homerunMode = false;
                        StageContainer.currentInstance.deactivateHomeRun();
                        break;

                    case StageStateManager.SMALL_TARGET_CIRCLE:

                        StageContainer.currentInstance.smallTargetCircle();
                        break;

                    case StageStateManager.NORMAL_TARGET_CIRCLE:
                    
                        StageContainer.currentInstance.restoreTargetCircleSize();
                        break;

                    case StageStateManager.ACTIVATE_TWO_CIRCLES:
                       
                        if (GameVars.matchData.targetCircles !== 2) {
                            GameVars.matchData.targetCircles = 2;
                            StageContainer.currentInstance.activate2CirclesMode();
                        }   

                        if (!GameVars.gameData.twoCirclesTutorialShown) {
                            GameVars.stopAction = true;
                        }

                        break;

                    case StageStateManager.ACTIVATE_ONE_CIRCLE:
                    
                        if (GameVars.matchData.targetCircles !== 1) {
                            GameVars.matchData.targetCircles = 1;
                            StageContainer.currentInstance.activate1CircleMode();
                        }
                        break;

                    default:
                        break;
                }
            }
            
            if (GameVars.stopAction) {
                MatchManager.stopAction();
            } else {
                BallsManager.throwItem();
            }

            if (this.nextStageState === StageStateManager.ACTIVATE_HOME_RUN) {
                
                if (!GameVars.isPlayerOnFire && !GameVars.homerunShown) {

                    if (Math.random() > .85) {
                        GameVars.homeRunType = GameConstants.HOMERUN_6;
                    } else {
                        GameVars.homeRunType = GameConstants.HOMERUN_4;
                    } 

                    StageContainer.currentInstance.activateHomeRun();
                }
            }

            GameVars.justHadStrike = false;

            if (GameVars.justSetOnFire) {
                StageContainer.currentInstance.startStreak();
                GameVars.isPlayerOnFire = true;
                GameVars.justSetOnFire = false;
                AchievementsManager.onFireSet();
            }
            
            if (GameVars.showReferee && GameVars.matchData.missedBalls > 0 && GameVars.matchData.itemsThrown > GameVars.thrownItemsToShowFairy && !GameVars.matchData.fairyShown) {
                GameVars.matchData.fairyShown = true;
                StageContainer.currentInstance.addReferee();
            }

            // TODO: DESCOMENTAR ESTO PARA SACAR AL ARBITRO
            // if (!MatchManager.refereeAdded) {
            //     MatchManager.refereeAdded = true;
            //     StageContainer.currentInstance.addReferee();
            // }
        }

        // private static refereeAdded = false;

        private static stopAction(): void {

            MatchState.currentInstance.addTwoCirclesTutorialLayer();
        }

        private static gameOver(): void {

            GameVars.gameOver = true;

            GameManager.gameOver();
        }
        
        private static checkBallStreak(hit: boolean): void {

            if (hit) {

                switch (GameVars.currentBall.ballType) {
                
                    case BallsManager.EGG:
    
                        GameVars.ballsStreak = 0;

                        if (GameVars.isPlayerOnFire) {
                            GameVars.isPlayerOnFire = false;
                            StageContainer.currentInstance.endStreak();
                        }
    
                        break;
    
                    case BallsManager.BOMB:
                        
                        // esto en realidad no hace falta
                        GameVars.ballsStreak = 0;

                        if (GameVars.isPlayerOnFire) {
                            GameVars.isPlayerOnFire = false;
                            StageContainer.currentInstance.endStreak();
                        }
    
                        break;
    
                    case BallsManager.BALL:
    
                        GameVars.ballsStreak ++;

                        if (GameVars.ballsStreak === MatchManager.BALLS_STREAK && GameVars.gameData.twoCirclesTutorialShown) {
                            GameVars.justSetOnFire = true;
                        }
    
                        break;
    
                    default:
                        break;
                }  

            } else {
                
                if (GameVars.currentBall.ballType === BallsManager.BALL) {

                    GameVars.ballsStreak = 0;

                    if (GameVars.isPlayerOnFire) {
                        GameVars.isPlayerOnFire = false;
                        StageContainer.currentInstance.endStreak();
                    }
                }
            }
        }
    }
}
