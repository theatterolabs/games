namespace CricketHero {

    export class DisplayManager {

        public static readonly SCROLLING_BOARD_STATE = "scrolling board state";
        public static readonly COUNTDOWN_STATE = "countdown state";
        public static readonly SCORE_AND_BALLS_STATE = "score and balls state";
        public static readonly GAME_OVER_STATE = "game over state";
        public static readonly TOMATO_STATE = "tomato state";
        public static readonly BOMB_STATE = "bomb state";
        public static readonly CURVE_BALL_STATE = "curve ball state";
        public static readonly STRIKE_STATE = "strike state";
        public static readonly TWO_CIRCLES_STATE = "two circles state";
        public static readonly ONE_CIRCLE_STATE = "one circle state";
        public static readonly BREAK_STATE = "break state";

        public static readonly PLAYER_AHEAD_STATE = "player ahead";
        public static readonly NEW_RECORD_STATE = "new record state";
        public static readonly AFTER_BREAK_STATE = "after break state";
        public static readonly PAUSE_STATE = "pause state";
        public static readonly HOMERUN_STATE = "homerun state";
        public static readonly COINS_FRENZY_STATE = "coins frenzy state";

        public static APPEAR_FROM_THE_BOTTOM = "appear from the bottom";
        public static APPEAR_FROM_THE_TOP = "appear from the top";
        public static APPEAR_FROM_THE_LEFT = "appear from the left";
        public static APPEAR_FROM_THE_RIGHT = "appear from the right";
        public static APPEAR_INSTANTLY = "appear instantly";

        public static display: Display;
        public static currentState: string;
        public static scheduledState: string;
        public static breakDuration: number;
        public static timeAtWhichStateWasScheduled: number;
        
        private static isOnFire: boolean;
        private static animationsBlocked: boolean;
        private static game: Phaser.Game;
        
        public static init(game: Phaser.Game): void {

            DisplayManager.game = game;
            DisplayManager.currentState = null;
            DisplayManager.scheduledState = null;
            DisplayManager.display = new Display(this.game);
            DisplayManager.isOnFire = false;
            DisplayManager.animationsBlocked = false;

            if (!GameVars.enterGameDirectly) {
                DisplayManager.setState(DisplayManager.SCROLLING_BOARD_STATE);
            }
        }  
        
        public static pause(): void {
            
            DisplayManager.display.pause();
        }

        public static resume(): void {
            
            DisplayManager.display.resume();
        }

        public static blockAnimations(): void {

            DisplayManager.animationsBlocked = true;
        }

        public static unBlockAnimations(): void {

            DisplayManager.animationsBlocked = false;
        }

        public static onAdShown(): void {

            DisplayManager.display.onAdShwon();
        }

        public static setState(nextState: string, appearInstantly?: boolean): DisplayAnimation {

            // el GAME OVER TIENE PRIODIDAD SOBRE TODO
            if ((DisplayManager.isOnFire || DisplayManager.animationsBlocked) && nextState !== DisplayManager.GAME_OVER_STATE) {
                return null;
            }

            let animation: DisplayAnimation;
            let animationSkipped = false;

            switch (nextState) {

                case DisplayManager.GAME_OVER_STATE:

                    if (DisplayManager.currentState === DisplayManager.NEW_RECORD_STATE) {
                        
                        animation = new GameOver(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_LEFT);

                    } else {

                        if (GameVars.newRecord) {

                            animation = new NewRecord(this.game);
                            DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_BOTTOM);

                            if (GameVars.relevantRecord) {
                                DisplayManager.display.addReferee();
                            }

                            nextState = DisplayManager.NEW_RECORD_STATE;
        
                        } else {
                                
                            animation = new GameOver(this.game);
                            DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_LEFT);

                            nextState = DisplayManager.GAME_OVER_STATE;
                        }
                    }

                    break;

                case DisplayManager.COINS_FRENZY_STATE:
                    
                    animation = new CoinsFrenzy(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_BOTTOM);
                    break;

                case DisplayManager.HOMERUN_STATE:
                    
                    animation = new Homerun(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_TOP);
                    break;

                case DisplayManager.AFTER_BREAK_STATE:
                    
                    animation = new AfterBreak(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_INSTANTLY);
                    break;

                case DisplayManager.SCROLLING_BOARD_STATE:
                    
                    animation = new ScrollingBoard(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_TOP);
                    break;

                case DisplayManager.COUNTDOWN_STATE:
                    
                    animation = new Countdown(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_BOTTOM);
                    break;

                case DisplayManager.SCORE_AND_BALLS_STATE:

                    let direction: string;

                    switch (DisplayManager.currentState) {

                        case DisplayManager.CURVE_BALL_STATE:
                            direction = DisplayManager.APPEAR_FROM_THE_LEFT;
                            break;

                        case DisplayManager.STRIKE_STATE:
                            direction = DisplayManager.APPEAR_FROM_THE_TOP;
                            break;
                        
                        case DisplayManager.TWO_CIRCLES_STATE:
                            direction = DisplayManager.APPEAR_FROM_THE_BOTTOM;
                            break;

                        case DisplayManager.COINS_FRENZY_STATE:
                            direction = DisplayManager.APPEAR_FROM_THE_TOP;
                            break;

                        default:
                            direction = DisplayManager.APPEAR_FROM_THE_RIGHT;
                            break;
                    }

                    if (appearInstantly) {
                        direction = DisplayManager.APPEAR_INSTANTLY;
                    }
  
                    animation = new ScoreAndBalls(this.game);
                    DisplayManager.display.addAnimation(animation, direction);
                    break;

                case DisplayManager.STRIKE_STATE:
                    
                    animation = new Strike(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_BOTTOM);
                    break;

                case DisplayManager.TOMATO_STATE:

                    if (DisplayManager.currentState === DisplayManager.HOMERUN_STATE) {
                        DisplayManager.scheduleState(DisplayManager.TOMATO_STATE);
                        animationSkipped = true;
                    } else if (DisplayManager.currentState !== DisplayManager.STRIKE_STATE && DisplayManager.currentState !== DisplayManager.TOMATO_STATE) {
                        animation = new Tomato(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_LEFT);
                    } else {
                        animationSkipped = true;
                    }

                    break;

                case DisplayManager.BOMB_STATE:
                    
                    if (DisplayManager.currentState === DisplayManager.STRIKE_STATE || DisplayManager.currentState === DisplayManager.HOMERUN_STATE) {
                        DisplayManager.scheduleState(DisplayManager.BOMB_STATE);
                        animationSkipped = true;
                    } else {
                        animation = new Bomb(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_LEFT);
                    }
                    
                    break;

                case DisplayManager.CURVE_BALL_STATE:
                    
                    if (DisplayManager.currentState === DisplayManager.HOMERUN_STATE) {
                        DisplayManager.scheduleState(DisplayManager.CURVE_BALL_STATE);
                        animationSkipped = true;
                    } else if (DisplayManager.currentState !== DisplayManager.STRIKE_STATE ) {
                        animation = new CurveBall(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_RIGHT);
                    } else {
                        animationSkipped = true;
                    }

                    break;

                case DisplayManager.TWO_CIRCLES_STATE:
                    
                    if (DisplayManager.currentState !== DisplayManager.HOMERUN_STATE && DisplayManager.currentState !== DisplayManager.STRIKE_STATE) {
                        animation = new TwoCircles(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_TOP);
                    } else {
                        animationSkipped = true;
                    }

                    break;

                case DisplayManager.ONE_CIRCLE_STATE:

                    if (DisplayManager.currentState !== DisplayManager.HOMERUN_STATE && DisplayManager.currentState !== DisplayManager.STRIKE_STATE) {
                        animation = new OneCircle(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_TOP);
                    } else {
                        animationSkipped = true;
                    }

                    break;
                
                case DisplayManager.NEW_RECORD_STATE: 

                    animation = new NewRecord(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_BOTTOM);

                    if (GameVars.relevantRecord) {
                        DisplayManager.display.addReferee();
                    }
                    
                    break;

                case DisplayManager.PLAYER_AHEAD_STATE: 

                    animation = new PlayerAhead(this.game);
                    DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_RIGHT);
                    break;
            
                default:
                
                    break;
            }

            if (!animationSkipped) {
                DisplayManager.currentState = nextState;
            }
            
            return animation;
        }

        public static stateAnimationEnded(): void {
            
            if (DisplayManager.scheduledState) {

                let animation: DisplayAnimation;

                switch (DisplayManager.scheduledState) {

                    case DisplayManager.BREAK_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);

                        const dt = DisplayManager.game.time.time - DisplayManager.timeAtWhichStateWasScheduled;
                        DisplayManager.startBreak(DisplayManager.breakDuration - dt);
                        
                        break;

                    case DisplayManager.BOMB_STATE:

                        animation = new Bomb(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_RIGHT);
                        
                        break;
                    
                    case DisplayManager.TOMATO_STATE:

                        animation = new Tomato(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_RIGHT);

                        break;
                    
                    case DisplayManager.CURVE_BALL_STATE:

                        animation = new CurveBall(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_RIGHT);

                        break;

                    case DisplayManager.TWO_CIRCLES_STATE:

                        animation = new TwoCircles(this.game);
                        DisplayManager.display.addAnimation(animation, DisplayManager.APPEAR_FROM_THE_RIGHT);

                        break;

                    default:
                }

                DisplayManager.scheduledState = null;

            } else {

                switch (DisplayAnimation.currentAnimation.name) {

                    case DisplayManager.HOMERUN_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        break;

                    case DisplayManager.SCORE_AND_BALLS_STATE:

                        // TODO: hack pq parece q despues de un strike o bomba salta el game over
                        if (GameVars.matchData.missedBalls === 3) {

                            if (GameVars.newRecord) {

                                DisplayManager.setState(DisplayManager.NEW_RECORD_STATE);
                                
                            } else {

                                DisplayManager.setState(DisplayManager.GAME_OVER_STATE);
                            }
                        }
                       
                        break;

                    case DisplayManager.COUNTDOWN_STATE:
                        
                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        if (!GameConstants.SCOREBOARD_DEVELOPMENT) {
                            MatchManager.countdownEnded();
                        }
                        
                        break;

                    case DisplayManager.AFTER_BREAK_STATE:
                        
                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        
                        // avisar al match manager de que el juego puede continuar
                        if (!GameConstants.SCOREBOARD_DEVELOPMENT) {
                            MatchManager.throwBallAfterBreak();
                        }
                        break;

                    case DisplayManager.TOMATO_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        break;

                    case DisplayManager.ONE_CIRCLE_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        break;

                    case DisplayManager.TWO_CIRCLES_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        break;

                    case DisplayManager.CURVE_BALL_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        break;

                    case DisplayManager.STRIKE_STATE:

                        if (GameVars.stopAction) {
                            // para el caso de q se muestra el tutorial
                            DisplayManager.setState(DisplayManager.TWO_CIRCLES_STATE);
                        } else {
                            DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);
                        }
                        
                        break;
                
                    case DisplayManager.BOMB_STATE:

                        DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE);

                        break;
                    
                    default:
                        break;
                }
            }
        }

        public static go(): void {

            if (DisplayManager.currentState === DisplayManager.AFTER_BREAK_STATE) {

                const currentAnimation = DisplayManager.display.currentAnimation;
                const scoreAndBalls = <AfterBreak> currentAnimation;
                scoreAndBalls.go();
            }
        }

        public static setOnFire(): void {

            if (DisplayManager.currentState === DisplayManager.SCORE_AND_BALLS_STATE) {

                const currentAnimation = DisplayManager.display.currentAnimation;
                const scoreAndBalls = <ScoreAndBalls> currentAnimation;
                scoreAndBalls.setOnFire();

                DisplayManager.isOnFire = true;
            }
        }

        public static onFireRemoved(): void {

            DisplayManager.isOnFire = false;

            if (GameVars.stopAction) {
                DisplayManager.setState(DisplayManager.TWO_CIRCLES_STATE);
            }
        }

        public static startBreak(duration: number): void {

            if (DisplayManager.animationsBlocked) {
                return;
            }

            if (DisplayManager.currentState === DisplayManager.SCORE_AND_BALLS_STATE) {

                const currentAnimation = DisplayManager.display.currentAnimation;
                const scoreAndBalls = <ScoreAndBalls> currentAnimation;
                scoreAndBalls.startBreak(duration);
                
            } else {
                // meter la animacion en cuanto se pueda
                DisplayManager.breakDuration = duration;

                DisplayManager.timeAtWhichStateWasScheduled = DisplayManager.game.time.time;
                DisplayManager.scheduleState(DisplayManager.BREAK_STATE);
            }
        }

        public static stopBreak(): void {
 
            if (DisplayManager.currentState === DisplayManager.SCORE_AND_BALLS_STATE) {

                const currentAnimation = DisplayManager.display.currentAnimation;
                const scoreAndBalls = <ScoreAndBalls> currentAnimation;
                scoreAndBalls.stopBreak();
            }
        }

        public static coinsFrenzyStarted(): void {
            
            DisplayManager.setState(DisplayManager.COINS_FRENZY_STATE)
        }

        public static coinsFrenzyEnds(): void{
            
            DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE)
        }

        public static fairyPressed(): void {

            if (DisplayManager.currentState !== DisplayManager.SCORE_AND_BALLS_STATE) {

                DisplayManager.setState(DisplayManager.SCORE_AND_BALLS_STATE, true);
            }

            DisplayManager.display.extraBall();
        }

        public static updateScore(): void {

            if (DisplayManager.animationsBlocked) {
                return;
            }

            if (DisplayManager.currentState === DisplayManager.SCORE_AND_BALLS_STATE) {

                const currentAnimation = DisplayManager.display.currentAnimation;
                const scoreAndBalls = <ScoreAndBalls> currentAnimation;
                scoreAndBalls.updateScore();
            }
        }

        public static updateMissedBalls(): void {

            const currentAnimation = DisplayManager.display.currentAnimation;

            if (currentAnimation.name === DisplayManager.SCORE_AND_BALLS_STATE) {

                const scoreAndBalls = <ScoreAndBalls> currentAnimation;
                scoreAndBalls.updateStrikes();
            }
        }

        public static explosion(): void {

            DisplayManager.display.explosion();
        }

        private static scheduleState(scheduledAnimation: string): void {
            
            DisplayManager.scheduledState = scheduledAnimation;
        }
    }
}

