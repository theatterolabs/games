namespace CricketHero {

    export class BallsManager {

        public static readonly BALL = "ball";
        public static readonly EGG = "egg";
        public static readonly BOMB = "bomb";
        public static readonly COIN = "coin";
        public static readonly BREAK = "break";
        public static readonly FRENZY_COIN = "coins_frenzy";

        public static currentShotsSequence: number;
        public static nextShotsSequence: number;
        public static frenzyCoinsPool: FrenzyCoin[];
        public static frenzyCoinIndex: number;

        private static readonly FRENZY_COINS_NUMBER = 50;

        private static ball: Ball;
        private static game: Phaser.Game;
        private static shotsData: ShotSequence[];
        private static i: number;
        private static firstBallAfterContinue: boolean;
        private static firstRoundSequences: number[];
        private static secondRoundSequences: number[];
        private static currenShot: ShotData;
        private static launchBallTimerEvent: Phaser.TimerEvent;
        
        public static init(game: Phaser.Game): void {

            BallsManager.game = game;
            BallsManager.shotsData = BallsManager.game.cache.getJSON("shots-data");
            BallsManager.i = 0;
            BallsManager.ball = new Ball(this.game);
            BallsManager.firstBallAfterContinue = true;
            BallsManager.currenShot = null;
            BallsManager.launchBallTimerEvent = null;

            BallsManager.frenzyCoinsPool = [];
            BallsManager.frenzyCoinIndex = 0;

            for (let i = 0; i < BallsManager.FRENZY_COINS_NUMBER; i ++) {
                BallsManager.frenzyCoinsPool.push(new FrenzyCoin(this.game));
            }

            if (!GameVars.editingLevels) {

                const shotsData = this.game.cache.getJSON("shots-data");

                BallsManager.firstRoundSequences = [];
                BallsManager.secondRoundSequences = [];
    
                for (let i = 0; i < shotsData.length; i ++) {
                    
                    let shotSequence: ShotSequence = shotsData[i];
    
                    if (shotSequence.firstRound) {
                        BallsManager.firstRoundSequences.push(shotSequence.sequenceId);
                    } else {
                        BallsManager.secondRoundSequences.push(shotSequence.sequenceId);
                    }
                }

                BallsManager.firstRoundSequences = Phaser.ArrayUtils.shuffle(BallsManager.firstRoundSequences);
                BallsManager.secondRoundSequences = Phaser.ArrayUtils.shuffle(BallsManager.secondRoundSequences);

                if (GameVars.matchData.itemsThrown < 10) {
                    BallsManager.currentShotsSequence = BallsManager.firstRoundSequences[0];
                } else {
                    BallsManager.currentShotsSequence = BallsManager.secondRoundSequences[0];
                }
            } 
        }

        public static update(): void{

            if (GameVars.coinsFrenzy) {
                
                if (Math.random() > .78 && BallsManager.frenzyCoinIndex < BallsManager.FRENZY_COINS_NUMBER) {
                
                    const ballsContainer = StageContainer.currentInstance.ballsContainerFront;
                    const frenzyCoin = BallsManager.frenzyCoinsPool[BallsManager.frenzyCoinIndex];

                    if (GameVars.matchData.targetCircles === 2) {

                        if (GameVars.activatedCircleSide === GameConstants.LEFT) {
                            frenzyCoin.x = -TargetCircle.CIRCLE_DX;
                        } else {
                            frenzyCoin.x = TargetCircle.CIRCLE_DX;
                        }
                    }

                    ballsContainer.add(frenzyCoin);
                    frenzyCoin.launch();

                    BallsManager.frenzyCoinIndex ++;
                }
            }
        }

        public static pause(): void {

            if (GameVars.currentBall) {
                GameVars.currentBall.pause();
            } else {
                if (BallsManager.launchBallTimerEvent) {
                    BallsManager.game.time.events.pause();
                }
            }
        }

        public static resume(): void {

            if (GameVars.currentBall) {
                GameVars.currentBall.resume();
            } else {
                BallsManager.game.time.events.resume();
            }
        }

        public static throwItem(): void {

            const shotData = BallsManager.getShotData();

            BallsManager.currenShot = shotData.currentShot;
            const nextShot = shotData.nextShot;

            if (BallsManager.currenShot.itemType === BallsManager.BREAK) {

                MatchManager.breakStarts(BallsManager.currenShot.delay);

                // cambiar los circulos si estamos en modo de 2 teniendo en cuenta la siguiente bola
                if (GameVars.matchData.targetCircles === 2) {

                    let nextSide = nextShot.targetCircleSide;

                    // TRAS EL TUTORIAL LO FORZAMOS
                    if (GameVars.twoCirclesTutorialJustShown) {
                        nextSide = GameVars.matchData.heroSide;
                    }

                    MatchManager.setTargetCircleSide(nextSide);
                } 

            } else if (BallsManager.currenShot.itemType === BallsManager.FRENZY_COIN) {
                
                MatchManager.coinsFrenzyStarts();

                AudioManager.playSound("coins_frenzy");

            } else {

                if (GameVars.matchData.targetCircles === 2) {
    
                    let side = BallsManager.currenShot.targetCircleSide;

                    // TRAS EL TUTORIAL LO FORZAMOS
                    if (GameVars.twoCirclesTutorialJustShown) {
                        side = GameVars.matchData.heroSide;
                    }
    
                    if (side === GameConstants.LEFT) {
                        BallsManager.ball.x = -TargetCircle.CIRCLE_DX;
                    } else {
                        BallsManager.ball.x = TargetCircle.CIRCLE_DX;
                    }
    
                    MatchManager.setTargetCircleSide(side);

                } else {
                    
                    BallsManager.ball.x = 0;
                }

                BallsManager.ball.y = 0;
                
                // TODO: LOS TEMAS DEL DISPLAY LOS PODRIA GESTIONAR EL STAGE MANAGER
                if (BallsManager.currenShot.trajectoryType === Trajectory.CURVE_TRAJECTORY) {
                    DisplayManager.setState(DisplayManager.CURVE_BALL_STATE);
                } 
               
                if (BallsManager.currenShot.itemType === BallsManager.BOMB) {
                    DisplayManager.setState(DisplayManager.BOMB_STATE);
                } else if (BallsManager.currenShot.itemType === BallsManager.EGG) {
                    DisplayManager.setState(DisplayManager.TOMATO_STATE);
                }

                let delay = BallsManager.getDelay(BallsManager.currenShot);

                BallsManager.launchBallTimerEvent = BallsManager.game.time.events.add(delay, function(): void {

                    const ballsContainer = StageContainer.currentInstance.ballsContainerFront;
                    ballsContainer.add(BallsManager.ball);

                    BallsManager.ball.reset(BallsManager.currenShot.itemType);
                    BallsManager.ball.launch(BallsManager.currenShot);
                    MatchManager.ballThrown(BallsManager.ball);

                    BallsManager.launchBallTimerEvent = null;

                }, this);

                MatchManager.ballScheduled();
            }
        }

        public static getDelay(currentShot: ShotData): number {

            let delay: number;

            if ( GameVars.matchData.continued && BallsManager.firstBallAfterContinue) {
                BallsManager.firstBallAfterContinue = false;
                delay = currentShot.delay + 1000;
            } else {
                delay = currentShot.delay;
            }

            // TODO: ir acelerandolo segun el numero de items ya lanzados
            if (GameVars.matchData.itemsThrown > 30) {
                delay *= .65;
            } else if (GameVars.matchData.itemsThrown > 15) {
                delay *= .85;
            }

            if (GameVars.isPlayerOnFire && currentShot.itemType === BallsManager.BALL) {
                delay *= .75;
            }

            if (GameVars.justHadStrike || GameVars.justSetOnFire || GameVars.justHadCoinsFrenzy) {
                delay += 850;
            }

            if (GameVars.refereeJustHit) {
                delay += 1500;
            } else if (Referee.currentInstance !== null) {
                delay *= 1.25;
            }

            if (GameVars.ballsStreak > 8) {
                delay *= .85;
            }

            if (GameVars.homerun) {
                delay += 2400;
            }

            if (!this.game.device.touch) {
                delay *= .95;
            }

            return delay;
        }

        private static getShotData(): {currentShot: ShotData, nextShot: ShotData} {

            const currentShotSequenceData = BallsManager.shotsData[BallsManager.currentShotsSequence];

            let shotData = currentShotSequenceData.shots[BallsManager.i];

            let nextShotData: ShotData;

            BallsManager.i = BallsManager.i < currentShotSequenceData.shots.length - 1 ? BallsManager.i + 1 : 0;

            if (BallsManager.i === currentShotSequenceData.shots.length - 1) {

                if (GameVars.editingLevels) {
                    BallsManager.nextShotsSequence = BallsManager.currentShotsSequence;
                } else {
                    BallsManager.nextShotsSequence = Phaser.ArrayUtils.getRandomItem(BallsManager.secondRoundSequences);
                }

                nextShotData = BallsManager.shotsData[BallsManager.nextShotsSequence].shots[0];

            } else if (BallsManager.i === 0) {

                // VOLTEAR TODOS LOS ELEMENTOS UNA VEZ SE HA CONSUMIDO UNA SECUENCIA PARA AUMENTAR LA VARIEDAD DENTRO DE UNA
                // MISMA SESION DE JUEGO
                for (let i = 0; i < BallsManager.shotsData[BallsManager.currentShotsSequence].shots.length; i++) {

                    if (BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].side === Trajectory.FROM_THE_LEFT_SIDE) {
                        BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].side = Trajectory.FROM_THE_RIGHT_SIDE;
                    } else if (BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].side === Trajectory.FROM_THE_RIGHT_SIDE) {
                        BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].side = Trajectory.FROM_THE_LEFT_SIDE;
                    }
                    
                    if (BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].targetCircleSide === GameConstants.RIGHT) {
                        BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].targetCircleSide = GameConstants.LEFT;
                    } else {
                        BallsManager.shotsData[BallsManager.currentShotsSequence].shots[i].targetCircleSide = GameConstants.RIGHT;
                    }
                }

                BallsManager.currentShotsSequence = BallsManager.nextShotsSequence;

                nextShotData = BallsManager.shotsData[BallsManager.currentShotsSequence].shots[0];

            } else {

                nextShotData = BallsManager.shotsData[BallsManager.currentShotsSequence].shots[BallsManager.i];
            }

            // tratar los casos de la moneda o que sucede durante el modo HOME RUN o tras el
            // cuando se esta en HOME RUN se lanzan solamente bolas
            if (GameVars.homerunMode) {
                
                shotData = {
                    delay: shotData.delay > 1000 ? 1000 : shotData.delay, // para el caso de que se sustituya un BREAK
                    itemType: BallsManager.BALL,
                    trajectoryType: Trajectory.PARABOLIC_TRAJECTORY,
                    side: shotData.side,
                    targetCircleSide: shotData.targetCircleSide
                };

            } else if (BallsManager.shouldCoinBeLaunched()) {
                        
                shotData = {
                    delay:  shotData.delay > 1000 ? 1000 : shotData.delay, // para el caso de que se sustituya un BREAK
                    itemType: BallsManager.COIN,
                    trajectoryType: Trajectory.STRAIGHT_TRAJECTORY,
                    side: shotData.side,
                    targetCircleSide: shotData.targetCircleSide
                };

            } else if ((GameVars.homerun || GameVars.isPlayerOnFire) && shotData.itemType === BallsManager.BREAK || (shotData.itemType === BallsManager.FRENZY_COIN && GameVars.coinsFrenzyShown) || (GameVars.homerunMode || GameVars.isPlayerOnFire) && shotData.itemType === BallsManager.FRENZY_COIN ) {
                // justo tras un HOME RUN o durante ON FIRE no puede haber un BREAK
                // o se quiere mostrar un COINS FRENZY y ya se mostro en esta sesion
                shotData = {
                    delay: shotData.delay > 1000 ? 1000 : shotData.delay, 
                    itemType: BallsManager.BALL,
                    trajectoryType: Math.random() > .5 ? Trajectory.PARABOLIC_TRAJECTORY : Trajectory.STRAIGHT_TRAJECTORY,
                    side: shotData.side,
                    targetCircleSide: shotData.targetCircleSide
                };
                
            } else if (shotData.itemType === BallsManager.FRENZY_COIN  &&  (Math.random() > .15 || GameVars.gameData.matchesPlayed < 5)) {

                // solo 15 de cada 100 veces que hay COINS FRENZY planeada se ejecutara
                // siempre y cuando se hayan jugado mas de 6 partidas
                shotData = {
                    delay: shotData.delay, 
                    itemType: BallsManager.BALL,
                    trajectoryType: shotData.trajectoryType,
                    side: shotData.side,
                    targetCircleSide: shotData.targetCircleSide
                };
            }

            return {currentShot: shotData, nextShot: nextShotData};
        }

        private static shouldCoinBeLaunched(): boolean {

            let ret = false;

            if (GameVars.matchData.itemsThrown > 5 && Math.random() > .95) { 
                ret = true;
            }

            return ret;
        }
    }
}
