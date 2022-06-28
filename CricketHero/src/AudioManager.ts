// audiosprite --e "mp3" --o ../assets/audio/audiosprite *.mp3
namespace CricketHero {

    export class AudioManager {

        private static game: Phaser.Game;
        private static audioSprite: Phaser.AudioSprite;
        private static loopPlayingKey: string;
        private static lastEffectPlayed: string;
        private static timeLastEffectPlayed: number;

        public static init(game: Phaser.Game): void {

            AudioManager.game = game;

            AudioManager.timeLastEffectPlayed = 0;
            AudioManager.lastEffectPlayed = null;

            AudioManager.loopPlayingKey = null;
            AudioManager.audioSprite = AudioManager.game.add.audioSprite("audio-sprite");
            AudioManager.game.sound.mute = GameVars.gameData.muted;
        }

        public static mute(): void {

            GameVars.gameData.muted = true;

            AudioManager.game.sound.mute = GameVars.gameData.muted;

            GameManager.writeGameData();
        }

        public static unmute(): void {

            GameVars.gameData.muted = false;
            
            AudioManager.game.sound.mute = GameVars.gameData.muted;
            
            GameManager.writeGameData(); 
        }

        public static playSound(key: string, loop?: boolean, volume?: number): void {

            loop = loop || false;

            if (loop) {

                if (AudioManager.loopPlayingKey && (AudioManager.loopPlayingKey !== key)) {
                    AudioManager.stopSound(AudioManager.loopPlayingKey, false, true);
                }

                if (AudioManager.loopPlayingKey !== key) {
                    try {
                        AudioManager.audioSprite.play(key, volume);
                    } catch (error) {
                        GameManager.log("Audio no encontrado:" + key, error);
                    }
                }

                AudioManager.loopPlayingKey = key;
                
            } else {

                if (AudioManager.lastEffectPlayed === key) {
                    
                    if (AudioManager.game.time.time - AudioManager.timeLastEffectPlayed > 200) {

                        AudioManager.timeLastEffectPlayed = AudioManager.game.time.time;

                        try {
                            AudioManager.audioSprite.play(key, volume);
                        } catch (error) {
                            GameManager.log("Audio no encontrado:" + key, error);
                        }
                    }

                } else {

                    AudioManager.timeLastEffectPlayed = AudioManager.game.time.time;
                    AudioManager.lastEffectPlayed = key;
    
                    try {
                        AudioManager.audioSprite.play(key, volume);
                    } catch (error) {
                        GameManager.log("Audio no encontrado:" + key, error);
                    }
                }
            }
        }

        public static stopSound(key: string, fade?: boolean, loop?: boolean): void {

            if (key === null || typeof key === "undefined") {
                return;
            }

            if (fade) {
                const sound = this.audioSprite.get(key);
                sound.fadeOut(850);
            } else {
                AudioManager.audioSprite.stop(key);
            }

            if (loop) {
                AudioManager.loopPlayingKey = null;
            }
        }
    }
}
