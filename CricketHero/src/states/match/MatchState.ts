namespace CricketHero {

    export class MatchState extends Phaser.State {

        public static currentInstance: MatchState;  

        public pauseLayer: PauseLayer;

        private hud: HUD;
        private gui: GUI;
        private stageContainer: StageContainer;
        private startLayer: StartLayer;
        private gameOverLayer: GameOverLayer;
       
        public init(args?: any): void {
            
            MatchState.currentInstance = this;

            MatchManager.init(this.game);

            this.pauseLayer = null;
        }
        
        public create(): void {

            const skyContainer = new SkyContainer(this.game);
            this.add.existing(skyContainer);

            this.stageContainer = new StageContainer(this.game);
            this.add.existing(this.stageContainer);

            if (GameVars.enterGameDirectly) {
                this.startLayer = null;
            } else {
                this.startLayer = new StartLayer(this.game);
                this.add.existing(this.startLayer);
            }
            
            this.hud = new HUD(this.game);
            this.add.existing(this.hud);

            this.gui = new GUI(this.game);
            this.add.existing(this.gui);

            if (Math.random() > .995) {
                let bug = new Bug(this.game);
                this.add.existing(bug);
            }

            if (GameVars.replayed) {
                this.game.camera.flash(0x203161, 400);
            }

            AudioManager.playSound("stadium_loop", true);
        }

        public shutdown(): void {
            
            MatchState.currentInstance = null;
            
            super.shutdown();
        }

        public startMatch(): void {

            this.hud.startMatch();
            this.stageContainer.startMatch();
        }

        public countdownEnded(): void {

            this.gui.countdownEnded();
        }

        public addTwoCirclesTutorialLayer(): void {

            this.gui.pause();

            this.stageContainer.addTwoCirclesTutorialLayer();
        }

        public removeTwoCirclesTutorialLayer(): void {

            this.gui.resume();

            this.stageContainer.removeTwoCirclesTutorialLayer();
        }

        public pauseGame(): void {

            this.gui.pause();
            this.stageContainer.pause();

            this.pauseLayer = new PauseLayer(this.game);
            this.add.existing(this.pauseLayer);
        }

        public resumeGame(): void {

            this.gui.resume();
            this.stageContainer.resumeGame();

            this.pauseLayer.destroy();
            this.pauseLayer = null;
        }

        public showHowToHitBallTutorial(): void {

            this.stageContainer.showHowToHitTutorialLayer();
        }

        public removeHowToHitBallTutorial(): void {

            this.gui.resume();

            this.stageContainer.removeHowToHitTutorialLayer();
        }

        public resumeGameAfterBreak(): void {

            this.gui.resume();
            this.stageContainer.resumeGameAfterBreak();
        }

        public gameOver(): void {

            this.gui.pause();

            if (GameVars.matchData.upscaled) {
                this.stageContainer.scaleDown();
            }

            StageContainer.currentInstance.gameOver();   

            let delay: number;

            if (GameVars.relevantRecord) {
                delay = 5500;
            } else {
                delay = 1250;

                if (GameVars.explosion) {
                    delay += 1750;
                }
            }

            this.game.time.events.add(delay, function(): void {

                this.gameOverLayer = new GameOverLayer(this.game);
                this.add.existing(this.gameOverLayer);

            }, this);      
        }

        public addGameOverLayerAfterAdError(): void {
            
            this.gameOverLayer = new GameOverLayer(this.game);
            this.add.existing(this.gameOverLayer);
        }

        public ballHit(): void {

            this.stageContainer.ballHit();
        }

        public bombHit(): void {

            this.stageContainer.bombHit();
        }

        public coinHit(): void {

            this.stageContainer.coinHit();
        }

        public tomatoHit(): void {

            const tomatoEffect = new EggEffect(this.game);
            this.add.existing(tomatoEffect);
        }

        public removeGameOverLayer(): void {
            
            if (this.gameOverLayer !== null) {
                this.gameOverLayer.destroy();
                this.gameOverLayer = null;
            }
        }

        public resumeGameAfterContinue(): void {

            this.hud.updateCredits();

            this.stageContainer.resumeGameAfterContinue();
        }

        public removeWaitingLayer(): void {

            this.game.time.events.add(950, function(): void {
                this.waitingLayer.destroy();
            }, this);
        }
    }
}
