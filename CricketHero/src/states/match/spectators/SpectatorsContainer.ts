namespace CricketHero {

    export class SpectatorsContainer extends Phaser.Group {

        public static coinsFrenzy: boolean;

        private static SPECTATORS_POSITION: { x: number, y: number }[] = [

            { x: -205, y: -164 },
            { x: -252, y: -164 },
            { x: -220, y: -102 },
            { x: -210, y: -38 },
            { x: -260, y: -38 },
            { x: -215, y: 5 },

            { x: 230, y: -164 },
            { x: 220, y: -102 },
            { x: 270, y: -102 },
            { x: 240, y: -38 },
            { x: 210, y: 5 },
            { x: 265, y: 5 }

        ];

        private spectators: Spectator[];

        private framesCounter: number;

        constructor(game: Phaser.Game) {

            super(game, null, "spectators-container");

            this.framesCounter = 0;

            SpectatorsContainer.coinsFrenzy = false;

            const background = new Phaser.Image(this.game, 0, 15, "texture_atlas_4", "bg_stadium.png");
            background.anchor.set(.5, 1);
            this.add(background);

            this.spectators = [];

            for (let i = 0; i < SpectatorsContainer.SPECTATORS_POSITION.length; i++) {
                const spectator = new Spectator(this.game, SpectatorsContainer.SPECTATORS_POSITION[i], i);
                this.add(spectator);
                this.spectators.push(spectator);
            }
        }

        public update(): void {

            super.update();

            if (GameVars.paused) {
                return;
            }

            this.framesCounter++;

            if (this.framesCounter === 75) {

                this.framesCounter = 0;

                // animate random spectator
                if (!GameVars.gameOver && !SpectatorsContainer.coinsFrenzy) {
                    let i = Math.floor(Math.random() * this.spectators.length);
                    let spectator = this.spectators[i];
                    spectator.bounce();
                }
            }
        }

        public coinsFrenzyStarts(): void {

            SpectatorsContainer.coinsFrenzy = true;

            for (let i = 0; i < this.spectators.length; i++) {
                this.spectators[i].setToCelebrate();
            }
        }

        public coinsFrenzyEnds(): void {

            SpectatorsContainer.coinsFrenzy = false;

            for (let i = 0; i < this.spectators.length; i++) {
                this.spectators[i].setIdle();
            }
        }

        public celebrate(): void {

            for (let i = 0; i < this.spectators.length; i++) {

                if (Math.random() > .15) {
                    this.spectators[i].setToCelebrate();
                }
            }

            let rnd = Math.floor(Math.random() * 4) + 1;
            AudioManager.playSound("celebration_" + rnd);
        }

        public strike(): void {

            if (GameVars.gameOver) {
                return;
            }

            for (let i = 0; i < this.spectators.length; i++) {

                if (Math.random() > .15) {
                    this.spectators[i].setSad();
                }
            }

            AudioManager.playSound("crowd_fail");
        }

        public gameOver(): void {

            for (let i = 0; i < this.spectators.length; i++) {
                this.spectators[i].gameOver();
            }
        }

        public onAdShown(): void {

            for (let i = 0; i < this.spectators.length; i++) {
                this.spectators[i].continue();
            }
        }
    }
}
