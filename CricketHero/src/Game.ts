namespace CricketHero {

    export class Game extends Phaser.Game {

        public static currentInstance: Phaser.Game;

        public static pause(): void {

            if (typeof Game.currentInstance !== "undefined" ) {
                Game.currentInstance.paused = true;
            }
        }

        public static resume(): void {
            
            if (typeof Game.currentInstance !== "undefined" ) {
                Game.currentInstance.paused = false;
            }
        }

        constructor() {

            let renderer: number;
            let ua = navigator.userAgent;
    
            if (ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/iPod/i) || /Kindle/i.test(ua) || /Silk/i.test(ua) || /KFTT/i.test(ua) || /KFOT/i.test(ua) || /KFJWA/i.test(ua) || /KFJWI/i.test(ua) || /KFSOWI/i.test(ua) || /KFTHWA/i.test(ua) || /KFTHWI/i.test(ua) || /KFAPWA/i.test(ua) || /KFAPWI/i.test(ua)) {
                renderer = Phaser.CANVAS;
            } else {
                renderer = Phaser.AUTO;
            }

            super(GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT, renderer, "canvas", null, false, true);

            Game.currentInstance = this;

            this.state.add("Boot", Boot, true);
            this.state.add("PreLoader", PreLoader, false); 
            this.state.add("MatchState", MatchState, false);
            this.state.add("DisplayDevelopmentState", DisplayDevelopmentState, false);
            this.state.add("LevelSelectionState", LevelSelectionState, false);
 
            this.state.start("Boot");
        }
    }
}
