namespace CricketHero {
    
    export class LastAndBestScoreContainer extends Phaser.Group {

        constructor(game: Phaser.Game) {
    
            super(game, null, "last-best-score-container");

            this.x = GameConstants.GAME_WIDTH / 2;
            this.y = 485;

            this.scale.y = GameVars.scaleY;

            const lastBestTab = new Phaser.Image(this.game, 0, 0, "texture_atlas_4", "tab_last_best_" + GameVars.gameData.language + ".png");
            lastBestTab.anchor.x = .5;
            this.add(lastBestTab);

            let fontSize: number;

            if (GameVars.gameData.lastScore < 10) {
                fontSize = 46;
            } else if (GameVars.gameData.lastScore < 100) {
                fontSize = 42;
            } else {
                fontSize = 32;
            }

            const lastScoreLabel = new Phaser.BitmapText(this. game, -38, 54, "freshman_white", GameVars.gameData.lastScore.toString(), fontSize);
            lastScoreLabel.anchor.set(.5);
            this.add(lastScoreLabel);

            if (GameVars.gameData.score < 10) {
                fontSize = 46;
            } else if (GameVars.gameData.score < 100) {
                fontSize = 42;
            } else {
                fontSize = 32;
            }

            const bestScoreLabel = new Phaser.BitmapText(this. game, 38, 54, "freshman_white", GameVars.gameData.score.toString(), fontSize);
            bestScoreLabel.anchor.set(.5);
            this.add(bestScoreLabel);
        }

        public disappear(): void {

            this.game.add.tween(this)
                .to ({alpha: 0, y: GameConstants.GAME_HEIGHT / 2 - 25}, 300, Phaser.Easing.Cubic.Out, true);
        }
    }
}