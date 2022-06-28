namespace CricketHero {

    export class AudioButton extends Phaser.Group {

        private button: Phaser.Button;

        constructor(game: Phaser.Game) {

            super(game, null, "audio-button");

            this.button = new Phaser.Button(this.game, 0, 0, "texture_atlas_1", this.onAudioButtonClicked, this);

            if (GameVars.gameData.muted) {
                this.button.setFrames("button_audio_off_on.png", "button_audio_off_off.png", "button_audio_off_on.png");
            } else {
                this.button.setFrames("button_audio_on_on.png", "button_audio_on_off.png", "button_audio_on_on.png");
            }

            this.button.anchor.set(.5);
            this.button.forceOut = true; 

            this.add(this.button);
        }

        private onAudioButtonClicked(b: Phaser.Button): void {

            b.clearFrames();

            if (GameVars.gameData.muted) {
                AudioManager.unmute();
                this.button.setFrames("button_audio_on_on.png", "button_audio_on_off.png", "button_audio_on_on.png");
            } else {
                AudioManager.mute();
                this.button.setFrames("button_audio_off_on.png", "button_audio_off_off.png", "button_audio_off_on.png");
            }

            this.button.clearFrames();
        }
    }
}
