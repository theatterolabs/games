namespace CricketHero {

    export class GameManager {
      
        private static game: Phaser.Game;
      
        public static init(game: Phaser.Game): void {

            GameManager.game = game;

            GameVars.randomGenerator = new Phaser.RandomDataGenerator([game.time.time]);
            GameVars.showZeppelinOrAeroplane = Math.random() > .85;
            GameVars.zeppelinOrAeroplaneShown = false;
            GameVars.isZeppelin = false; // en esta version del juego solo sale el avion
            GameVars.replayed = false;
            GameVars.editingLevels = false;
            GameVars.coinsFrenzyShown = false;
            GameVars.avatarsLoaded = false;
            GameVars.gameDistributionPreRollAdShown = null;
            GameVars.enterGameDirectly = false;

            // mientras desarrollamos necesitamos un roomdata por si entramos directamente en el ordenador
            if (GameVars.enterGameDirectly) {

                GameVars.matchData = { 
                    credits: 275,
                    score: 25,
                    itemsThrown: 0,
                    missedBalls: 1,
                    upscaled: false,
                    ballsStreak: 0,
                    fairyShown: false,
                    burnt: false,
                    continued: false,
                    heroSide: GameConstants.CENTER,
                    targetCircles: 1,
                    eventsData: {
                        eventsSet: [
                                        {ball_number: 12, state: "activate_home_run"},
                                        {ball_number: 14, state: "deactivate_home_run"},
                                        {ball_number: 20, state: "scale_up"},
                                        {ball_number: 25, state: "scale_down"},
                                        {ball_number: 38, state: "scale_up"}
                                     ],
                        i: 0,
                        deltaItems: 0,
                        rounds: 1
                    }
                };

            } else {

                GameVars.matchData = { 
                    credits: 0,
                    score: 0,
                    itemsThrown: 0,
                    missedBalls: 0,
                    upscaled: false,
                    ballsStreak: 0,
                    fairyShown: false,
                    burnt: false,
                    continued: false,
                    heroSide: GameConstants.CENTER,
                    targetCircles: 1,
                    eventsData: {
                        eventsSet: [
                                        {ball_number: 8, state: "activate_2_circles"},
                                        {ball_number: 12, state: "activate_home_run"},
                                        {ball_number: 14, state: "deactivate_home_run"},
                                        {ball_number: 20, state: "scale_up"},
                                        {ball_number: 25, state: "scale_down"},
                                        {ball_number: 38, state: "scale_up"}
                                     ],
                        i: 0,
                        deltaItems: 0,
                        rounds: 1
                    }
                };
            }
   
            GameManager.readGameData();
        }  

        public static readGameData(): void {

            GameManager.getStorageData(
                
                GameConstants.GAME_DATA,
                            
                            function(data: string): void {

                                if (data) {

                                    GameVars.gameData = JSON.parse(data);
                                    GameVars.gameData.totalSessions ++;
                                    GameManager.writeGameData();
                                    
                                } else {
                                    
                                    GameVars.gameData = {
                                        muted: false,
                                        credits: 10,
                                        score: 0,
                                        lastScore: 0,
                                        nextRelevantRecord: 20,
                                        twoCirclesTutorialShown: false,
                                        hitTutorialShown: false,
                                        handIconOnStartShown: false,
                                        matchesPlayed: 0,
                                        totalSessions: 1, 
                                        ballsHit: 0,
                                        ballsMissed: 0,
                                        tomatoesSmashed: 0,
                                        bombsSmashed: 0,
                                        language: GameConstants.LAGUANGE_EN
                                    };
                                }

                                if (GameConstants.DEVELOPMENT) {
                                    GameVars.gameData.credits = 100;
                                }

                                if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                                    PokiSDK.gameLoadingStart();
                                }

                                GameManager.game.state.start("PreLoader", true, false);
                            },
                            function(error: Error): void {
                                GameManager.log("error retriving saved game data.", error);
                            }
            );
        }

        public static onGameAssetsLoaded(): void {

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                PokiSDK.gameLoadingFinished();
            }

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIX) {
                
                GamePix.game.gameLoaded(function (): void {

                    AudioManager.init(GameManager.game);
                    AchievementsManager.init(GameManager.game);
                    
                    GameManager.game.state.start("MatchState", true, false);
                });
                
            } else {
                AudioManager.init(GameManager.game);
                AchievementsManager.init(GameManager.game);
                
                GameManager.game.state.start("MatchState", true, false);
            }
        }

        public static changeLanguege(language: string) {
            
            GameVars.gameData.language = language;

            GameManager.game.state.start("MatchState", true, false);
        }

        public static startMatch(): void {

            GameVars.playing = true;
            GameVars.matchData.continued = false;

            if (!GameVars.gameData.handIconOnStartShown) {
                GameVars.gameData.handIconOnStartShown = true;
                GameManager.writeGameData();
            }

            GameVars.matchData = { 
                    credits: GameVars.gameData.credits,
                    score: 0,
                    itemsThrown: 0,
                    missedBalls: 0,
                    upscaled: false,
                    ballsStreak: 0,
                    fairyShown: false,
                    burnt: false,
                    continued: false,
                    heroSide: GameConstants.CENTER,
                    targetCircles: 1,
                    eventsData: {
                        eventsSet: [
                                        {ball_number: 8, state: "activate_2_circles"},
                                        {ball_number: 12, state: "activate_home_run"},
                                        {ball_number: 14, state: "deactivate_home_run"},
                                        {ball_number: 20, state: "scale_up"},
                                        {ball_number: 25, state: "scale_down"},
                                        {ball_number: 38, state: "scale_up"}
                                    ],
                        i: 0,
                        deltaItems: 0,
                        rounds: 1
                    }
                };
                
            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                
                PokiSDK.gameplayStart();

                GameManager.game.paused = true;

                PokiSDK.commercialBreak()
                .then(
                    () => { 

                        GameManager.game.paused = false;
                        MatchState.currentInstance.startMatch(); 
                    }
                );

                return;
            }

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAME_DISTRIBUTION && GameVars.gameDistributionPreRollAdShown === false) {

                GameVars.gameDistributionPreRollAdShown = true; 

                if (typeof gdsdk !== "undefined" && typeof gdsdk.showBanner !== "undefined") {
                    gdsdk.showBanner();
                }
            }

            AchievementsManager.onGameStart();

            MatchState.currentInstance.startMatch();

            GameManager.log("START MATCH");
        }

        public static zeppelinAeroplaneShown(): void {
            
            GameVars.zeppelinOrAeroplaneShown = true;
        }

        public static playSelectelBallSequence(seq: number): void {

            GameVars.editingLevels = true;

            BallsManager.currentShotsSequence = seq;

            GameVars.enterGameDirectly = true;

            GameManager.game.state.start("MatchState", true, false);
        }

        public static goToSequenceSelectionScene(): void {

            GameManager.game.state.start("LevelSelectionState", true, false);
        }

        public static replay(): void {

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {

                GameManager.game.paused = true;

                PokiSDK.commercialBreak()
                .then(
                    () => { 
                       
                        GameManager.game.paused = false;
                    }
                );
            }

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIX) {

                GamePix.game.ping("level_complete", { score: GameVars.gameData.score, level: 0, achievements: {/*INSERT HERE IF AVAILABLE*/ } });
            }
            
            GameVars.replayed = true;

            GameManager.game.time.events.resume();

            GameManager.game.state.start("MatchState", true, false);
        }

        public static gameOver(): void {

            GameVars.newRecord = false;
            GameVars.relevantRecord = false;

            // el tema de los records
            if (GameVars.matchData.score > GameVars.gameData.score) {

                if (GameConstants.SPONSOR === GameConstants.SPONSOR_LAGGED) {

                    let boardinfo: any = {};
                    
                    boardinfo.score = GameVars.matchData.score;
                    boardinfo.board = "cricket_hero_gmhsrdd";
                    
                    LaggedAPI.Scores.save(boardinfo, function(response: any) {

                        if (response.success) {
                            console.log("high score saved");
                        } else {
                            console.log(response.errormsg);
                        }
                    });
                }

                if (GameVars.gameData.score !== 0) {
    
                    GameVars.newRecord = true;
    
                    if (GameVars.matchData.score >= GameVars.gameData.nextRelevantRecord ) {
    
                        GameVars.gameData.nextRelevantRecord = Math.floor(GameVars.gameData.nextRelevantRecord  / 10) * 10 + 10;
                        GameVars.relevantRecord = true;
                            
                    } else {

                        GameVars.relevantRecord = false;
                    }
                }
    
                GameVars.gameData.score = GameVars.matchData.score;
            }
    
            GameVars.gameData.lastScore = GameVars.matchData.score;

            AchievementsManager.onGameOver();
    
            GameManager.writeGameData();
            
            MatchState.currentInstance.gameOver();

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_LAGGED) {

                GameManager.game.time.events.add(300, function(): void {

                    if (typeof prerollStart === "undefined") {
                        GameManager.log("skip ad, prerollStart not found");
                    } else {
    
                        GameManager.game.paused = true;
    
                        LaggedAPI.APIAds.show("interstitial", "cricket-hero", "cricket-hero-game.jpg", function(response: any): void {
                            
                            if (response.success) {
                                GameManager.game.paused = false;
                                GameManager.log("ad done");
                            } else {
                                GameManager.game.paused = false;
                                GameManager.log("ad error, continue");
                            }
                        });
                    }
                }); 
            }

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {

                PokiSDK.gameplayStop();

                if (GameVars.relevantRecord) {

                    let intensity: number;
    
                    if (GameVars.gameData.score > 50) {
                        intensity = 1;
                    } else if (GameVars.gameData.score > 30) {
                        intensity = .5;
                    } else {
                        intensity = .25;
                    }
    
                    PokiSDK.happyTime(intensity);
                }
            } 

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAME_DISTRIBUTION) {

                if (typeof gdsdk !== "undefined" && typeof gdsdk.showBanner !== "undefined") {
                    gdsdk.showBanner();
                }
            }
        }

        public static continueButtonPressed(): void {

            GameVars.matchData.continued = true;

            GameVars.gameData.credits -= GameConstants.PRICE_CONTINUE;

            MatchState.currentInstance.removeGameOverLayer();

            AchievementsManager.onGameStart();

            MatchManager.resumeGameAfterContinue();

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_POKI) {
                
                PokiSDK.gameplayStart();
            }
        }

        public static onPause(): void {
            
            GameManager.game.sound.mute = true;
        }

        public static onResume(): void {

            if (!GameVars.gameData.muted) {
                GameManager.game.sound.mute = false;
            }   
        }

        public static log(text: string, error?: Error): void {
            
            if (!GameConstants.VERBOSE) {
                return;
            }
            
            if (error) {
                console.error(text + ":",  error);
            } else {
                console.log(text);
            }
        }

        public static writeGameData(): void {
            
            GameManager.setStorageData(
                GameConstants.GAME_DATA, 
                GameVars.gameData,
                function(): void {
                    // GameManager.log("game data successfully saved");
                },
                function(error: Error): void {
                    // GameManager.log("error saving game data", error);
                }
            );
        }

        public static getStorageData(key: string, successCb: Function, failureCb: Function): void {
            
            let data: string;

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIX) {
                data = GamePix.localStorage.getItem(key);
            } else {
                data = localStorage.getItem(key);
            }

            successCb(data);
        }

        public static setStorageData(key: string, value: any, successCb: Function, failureCb: Function): void {
            
            if (GameConstants.SPONSOR === GameConstants.SPONSOR_GAMEPIX) {
                GamePix.localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
    }
}
