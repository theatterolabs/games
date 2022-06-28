namespace CricketHero {
    
    export class GameTitle extends Phaser.Group {

        private batTitle: Phaser.Image;
        private cricketTitle: Phaser.Image;
        private heroTitle: Phaser.Image;
        private star: Phaser.Image;
        private launchTweensWithDelay: boolean;
        private framesCounter: number;
    
        constructor(game: Phaser.Game) {
    
            super(game, null, "game-title");
            
            this.framesCounter = 0;

            this.x = GameConstants.GAME_WIDTH / 2;
            this.y = 145;
            this.scale.y = GameVars.scaleY;

            if (this.game.scale.aspectRatio >= .745) {
                this.scale.set(.825, .825 * GameVars.scaleY);
                this.y = 102;
            } else if (this.game.scale.aspectRatio >= .65) {
                this.scale.set(.875, .875 * GameVars.scaleY);
                this.y = 95;
            } else if (this.game.scale.aspectRatio >= .625) {
                this.scale.set(.875, .875 * GameVars.scaleY);
                this.y = 90;
            } else {
                this.y = 110;
            }

            this.star = new Phaser.Image(this.game, -80, -48, "texture_atlas_1", "title_star.png");
            this.star.anchor.set(.5);
            this.star.alpha = 0;
            this.star.visible = false;
            this.add(this.star);

            this.batTitle = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "title_bat.png");
            this.batTitle.anchor.set(.5);
            this.batTitle.alpha = 0;
            this.add(this.batTitle);
            
            this.heroTitle = new Phaser.Image(this.game, 30, 37, "texture_atlas_1", GameVars.gameData.language === GameConstants.LANGUAGE_HI ? "title_gunda.png" : "title_hero.png");
            this.heroTitle.anchor.set(.5);
            this.heroTitle.alpha = 0;
            this.add(this.heroTitle);

            this.cricketTitle = new Phaser.Image(this.game, -30, -50, "texture_atlas_1", "title_cricket.png");
            this.cricketTitle.anchor.set(.5);
            this.cricketTitle.alpha = 0;
            this.add(this.cricketTitle);

            if (GameVars.replayed) {

                this.launchTweensWithDelay = false;

                // sin tweens
                this.batTitle.alpha = 1;
                this.cricketTitle.alpha = 1;
                this.heroTitle.alpha = 1;
                this.star.alpha = 1;
                this.star.visible = true;
            
            } else {

                this.launchTweensWithDelay = true;
            }
        }

        public update(): void {

            super.update();

            this.framesCounter ++;

            if (this.launchTweensWithDelay && this.framesCounter === 10) {

                this.launchTweensWithDelay = false;

                this.game.add.tween(this.cricketTitle)
                    .to ({alpha: 1}, 300, Phaser.Easing.Cubic.Out, true, 250);

                this.game.add.tween(this.heroTitle)
                    .to ({alpha: 1}, 300, Phaser.Easing.Cubic.Out, true, 500);

                this.game.add.tween(this.batTitle)
                    .to ({alpha: 1}, 300, Phaser.Easing.Cubic.Out, true, 750);

                this.star.visible = true;
                this.game.add.tween(this.star)
                    .to ({alpha: 1}, 300, Phaser.Easing.Cubic.Out, true, 1000);
            }

            if (this.star.visible) {
                this.star.rotation += .02;
            }
        }

        public disappear(): void {

            this.game.add.tween(this)
                .to ({alpha: 0, y: -100}, 300, Phaser.Easing.Cubic.Out, true);
        }
    }
}
