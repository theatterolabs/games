namespace CricketHero {

    export class LevelSelectionState extends Phaser.State {

        public static currentInstance: LevelSelectionState;

        private firstRoundSequences: number[];
        private secondRoundSequences: number[];

        public init(): void {

            LevelSelectionState.currentInstance = this;

            const shotsData = this.game.cache.getJSON("shots-data");

            this.firstRoundSequences = [];
            this.secondRoundSequences = [];

            for (let i = 0; i < shotsData.length; i ++) {
                
                let shotSequence: ShotSequence = shotsData[i];

                if (shotSequence.firstRound) {
                    this.firstRoundSequences.push(shotSequence.sequenceId);
                } else {
                    this.secondRoundSequences.push(shotSequence.sequenceId);
                }
            }
        }

        public create(): void {

            const darkBackground: Phaser.Sprite = new Phaser.Sprite(this.game, 0, 0, this.game.cache.getBitmapData(GameConstants.DARK_BLUE_SQUARE));
            darkBackground.scale.set(GameConstants.GAME_WIDTH / GameConstants.BITMAP_SIZE, GameConstants.GAME_HEIGHT / GameConstants.BITMAP_SIZE);
            this.add.existing(darkBackground);
          
            const sceneTitle = this.add.text(GameConstants.GAME_WIDTH / 2, 5, "BALLS SEQUENCE SELECTION", { font: "25px Arial", fill: "#FFFFFF"});
            sceneTitle.anchor.x = .5;
            sceneTitle.scale.y = GameVars.scaleY;

            const firstRoundSeqLabel = this.add.text(GameConstants.GAME_WIDTH / 2, 45 * GameVars.scaleY, "FIRST ROUND SEQUENCES", { font: "20px Arial", fill: "#FFFF00"});
            firstRoundSeqLabel.anchor.x = .5;
            firstRoundSeqLabel.scale.y = GameVars.scaleY;

            let button: LevelSelectionButton;

            for (let i = 0; i < 4; i++) {
                
                for (let j = 0; j < 5; j++) {

                    if (typeof this.firstRoundSequences[5 * i + j] !== "undefined") {
                        button = new LevelSelectionButton(this.game, this.firstRoundSequences[5 * i + j]);
                        button.x = GameConstants.GAME_WIDTH / 2 - 60 * (2 - j);
                        button.y = (100 + 50 * i) * GameVars.scaleY;
                        this.add.existing(button);
                    }
                }
            }

            const secondRoundSeqLabel = this.add.text(GameConstants.GAME_WIDTH / 2, 350 * GameVars.scaleY, "SECOND ROUND SEQUENCES", { font: "20px Arial", fill: "#FFFF00"});
            secondRoundSeqLabel.anchor.x = .5;
            secondRoundSeqLabel.scale.y = GameVars.scaleY;

            for (let i = 0; i < 4; i++) {
                
                for (let j = 0; j < 5; j++) {

                    if (typeof this.secondRoundSequences[5 * i + j] !== "undefined") {
                        button = new LevelSelectionButton(this.game, this.secondRoundSequences[5 * i + j]);
                        button.x = GameConstants.GAME_WIDTH / 2 - 60 * (2 - j);
                        button.y = (405 + 50 * i) * GameVars.scaleY;
                        this.add.existing(button);
                    }
                }
            }

            // this.game.sound.mute = true;
        }

        public shutdown(): void {

            LevelSelectionState.currentInstance = null;

            super.shutdown();
        }
    }
}
