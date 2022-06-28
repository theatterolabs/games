namespace CricketHero {

    export class Spectator extends Phaser.Image {

        public id: number;

        private pulseTween: Phaser.Tween;
        private leftSide: boolean;
        private framesCounter: number;
        private celebrating: boolean;
        private isSetToCelebrate: boolean;
        private framesWatitingForCelebration: number;
        private framesCelebrating: number;
        private framesSad: number;
        private isSad: boolean;

        constructor(game: Phaser.Game, position: { x: number, y: number }, id: number) {

            super(game, position.x, position.y, "texture_atlas_1", "spectator_idle.png");

            this.id = id;
            this.celebrating = false;
            this.framesCounter = 0;
            this.isSetToCelebrate = false;
            this.framesWatitingForCelebration = 0;
            this.framesCelebrating = 0;
            this.framesSad = 0;
            this.pulseTween = null;
            this.leftSide = position.x < 0;
            this.isSad = false;
            this.anchor.set(.5, 1);
            this.scale.x = this.leftSide ? 1 : -1;
        }

        public update(): void {

            super.update();

            if (this.isSetToCelebrate) {

                this.framesCounter++;

                if (this.framesCounter === this.framesWatitingForCelebration) {
                    this.celebrate();
                }
            }

            if (this.celebrating && !SpectatorsContainer.coinsFrenzy) {

                this.framesCounter++;

                if (this.framesCounter === this.framesCelebrating) {
                    this.setIdle();
                }
            }

            if (this.isSad) {

                this.framesCounter++;

                if (this.framesCounter === this.framesSad) {
                    this.setIdle();
                }
            }
        }

        public setSad(): void {

            if (this.pulseTween) {
                this.pulseTween.pendingDelete = true;
            }

            let scaleX = this.scale.x < 0 ? -1 : 1;
            this.scale.set(scaleX, 1);

            this.isSad = true;

            this.framesCounter = 0;
            this.framesSad = Math.round(55 + Math.random() * 25);

            this.frameName = "spectator_depressed.png";
        }

        public setToCelebrate(): void {

            if (this.pulseTween) {
                this.pulseTween.pendingDelete = true;
            }

            let scaleX = this.scale.x < 0 ? -1 : 1;
            this.scale.set(scaleX, 1);

            this.isSetToCelebrate = true;
            this.celebrating = false;
            this.framesCounter = 0;
            this.framesWatitingForCelebration = Math.round(Math.random() * 10);
        }

        public bounce(): void {

            if (this.isSad) {
                return;
            }

            let scaleX = this.scale.x;

            this.pulseTween = this.game.add.tween(this.scale);
            this.pulseTween.to({ x: 1.01 * scaleX, y: .99 * GameVars.scaleY }, 300, Phaser.Easing.Linear.None, true, 0, 0, true);
        }

        public gameOver(): void {

            if (this.pulseTween) {
                this.pulseTween.pendingDelete = true;
            }

            let scaleX = this.scale.x < 0 ? -1 : 1;
            this.scale.set(scaleX, 1);

            this.isSad = false;

            this.frameName = "spectator_depressed.png";
        }

        public continue(): void {

            this.frameName = "spectator_idle.png";
        }

        public setIdle(): void {

            this.celebrating = false;
            this.isSad = false;

            this.frameName = "spectator_idle.png";
        }

        private celebrate(): void {

            this.isSetToCelebrate = false;
            this.celebrating = true;
            this.isSad = false;
            this.framesCounter = 0;

            this.framesCelebrating = Math.round(22 + Math.random() * 12);

            this.frameName = "spectator_celebrate.png";
        }
    }
}
