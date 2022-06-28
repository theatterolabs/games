namespace CricketHero {
    
    export class Referee extends Phaser.Group {

        public static currentInstance: Referee = null;

        private static readonly PY = -50;

        public referee: Phaser.Sprite;

        private a: number;
        private disappearing: boolean;
    
        constructor(game: Phaser.Game) {
    
            super(game, null, "referee");

            Referee.currentInstance = this;

            this.a = 0;
            this.disappearing = false;
            
            this.referee = this.create(400, Referee.PY, "texture_atlas_1", "arbitro_01.png");
            this.referee.animations.add("fly", Phaser.Animation.generateFrameNames("arbitro_", 1, 8, ".png", 2));
            this.referee.animations.play("fly", 16, true);
            this.referee.inputEnabled = true;
            this.referee.events.onInputDown.add(this.onDownReferee, this);
            this.referee.anchor.set(.5);
            this.add(this.referee);
        }

        public update(): void {

            super.update();

            if (GameVars.paused) {
                return;
            }
        
            if (!this.disappearing) {

                this.referee.x -= .75;
                this.referee.y = Referee.PY + 65 * Math.cos(this.a);
                this.a += .05;
    
                if (this.x < -280) {
                    this.destroy();
                }
            }
        }

        public destroy(destroyChildren?: boolean, soft?: boolean): void {

            Referee.currentInstance = null;

            super.destroy(destroyChildren, soft);
        }

        public removeFromStage(): void {

            this.game.add.tween(this.referee)
                .to({alpha: 0}, 350, Phaser.Easing.Cubic.Out, true)
                .onComplete.add(this.destroy, this);
        }

        private onDownReferee(): void {

            if (GameVars.paused || this.disappearing || GameVars.gameOver) {
                return;
            }

            this.disappearing = true;

            this.referee.animations.stop();
            this.referee.frameName = "arbitro_smashed.png";
            
            this.game.add.tween(this.referee)
                .to ({alpha: 0}, 500, Phaser.Easing.Cubic.Out, true, 500)
                .onComplete.add(this.destroy, this);

            if (GameConstants.SCOREBOARD_DEVELOPMENT) {
                DisplayDevelopmentState.currentInstance.onDownFairy();
            } else {
                MatchManager.onDownFairy();
            }
            
            AudioManager.playSound("fairy_squish");
        }
    }
}
