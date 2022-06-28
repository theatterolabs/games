/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class Strike extends DisplayAnimation {

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.STRIKE_STATE);

            const strikeImage = new Phaser.Image(this.game, 0, 0, "texture_atlas_2", "display_strike_cross.png");
            strikeImage.anchor.set(.5);
            strikeImage.scale.set(5);
            strikeImage.smoothed = false;
            this.content.add(strikeImage);

            const strikeLabel = new Phaser.BitmapText(this. game, 0, 15, "freshman", "OUT", 26);
            strikeLabel.anchor.set(.5);
            strikeLabel.scale.set(5, 5);
            this.content.add(strikeLabel);

            let t = 650; // era 650

            if (GameVars.matchData.itemsThrown > 30) {
                t *= .75;
            } else if (GameVars.matchData.itemsThrown > 15) {
                t *= .85;
            }

            this.timerEvent = this.game.time.events.add(t, this.animationEnded, this);
        }
    }
}
