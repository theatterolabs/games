namespace CricketHero {
    
    export class EggEffect extends Phaser.Group {
    
        private static STAINS_COORDINATES = [
                                                {x: 0, y: 0},
                                                {x: 50, y: -100},
                                                {x: -50, y: 100},
                                                {x: 70, y: -300},
                                                {x: -50, y: 200}
                                            ];
        private framesCounter: number;

        private stains: SmashedEgg[];
        private stainsCounter: number;

        constructor(game: Phaser.Game) {
    
            super(game, null, "tomato-effect");

            this.framesCounter = 0;
            this.stainsCounter = 0;

            this.x = GameConstants.GAME_WIDTH / 2;
            this.y = GameConstants.GAME_HEIGHT / 2;

            this.stains = [];

            for (let i = 0; i < 4; i++) {
                
                let smashedEgg = new SmashedEgg(this.game, this);

                if (i === 0) {
                    smashedEgg.x = EggEffect.STAINS_COORDINATES[i].x;
                    smashedEgg.y = EggEffect.STAINS_COORDINATES[i].y;
                } else {
                    smashedEgg.x = EggEffect.STAINS_COORDINATES[i].x + 75 - 150 * Math.random();
                    smashedEgg.y = EggEffect.STAINS_COORDINATES[i].y + 50 - 100 * Math.random();;
                }
                
                this.add(smashedEgg);
                this.stains.push(smashedEgg);
            }
        }

        public update(): void {

            super.update();

            this.framesCounter ++;

            if (this.framesCounter === 25) {
                this.appear();
            }

            if (this.framesCounter === 110) {
                this.disappear();
            }
        }

        public onStainDisappeared(): void {
            
            this.stainsCounter ++;

            if (this.stainsCounter === 4) {
                this.destroy();
            }
        }

        private appear(): void {

            for (let i = 0; i < this.stains.length; i ++) {
                this.stains[i].appear(75 * Math.random());
            }
        }

        private disappear(): void {
            
            for (let i = 0; i < this.stains.length; i ++) {
                this.stains[i].disappear(150 * Math.random());
            }
        }
    }
}
