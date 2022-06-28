module CricketHero {

    export class LevelSelectionButton extends Phaser.Group {

        constructor(game: Phaser.Game, index: number, boss?: boolean) {

            super(game, null, "dev-level-button" + index, false);

            const button =  new Phaser.Button(this.game, 0, 0, "texture_atlas_0", this.onClickButton);
            button.setFrames("button_level_selection_on.png", "button_level_selection_off.png", "button_level_selection_on.png");
            button.anchor.set(.5);
            button.name = index.toString();
            this.add(button);

            const levelLabel = new Phaser.Text(this.game, 0, 0, index.toString(), { font: "20px Arial", fill: "#FF0000"});
            levelLabel.anchor.set(.5, .4);
            this.add(levelLabel);

            this.scale.y = GameVars.scaleY;
        }

        private onClickButton (b: Phaser.Button): void {

            GameManager.playSelectelBallSequence(parseInt(b.name));
        }
    }
}
