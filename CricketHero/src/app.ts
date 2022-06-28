

window.onload = () => {

    const game = new CricketHero.Game();

    if (CricketHero.GameConstants.SPONSOR === CricketHero.GameConstants.SPONSOR_GAMEPIX) {

        GamePix.on.pause = function (): void {
            game.paused = true;
        };

        GamePix.on.resume = function (): void {
            game.paused = false;
        };

        GamePix.on.soundOn = function (): void {
            if (!CricketHero.GameVars.gameData.muted) {
                game.sound.mute = false;
            }
        };

        GamePix.on.soundOff = function (): void {
            game.sound.mute = true;
        };
    }

    window.addEventListener("orientationchange", onOrientationChange, false);
};

function onOrientationChange(): void {

    setTimeout(() => {

        const w = window.innerWidth;
        const h = window.innerHeight;
        
        let isPortrait = w < h;

        if (isPortrait ) {

            if (CricketHero.Boot.bootedInWrongOrientation) {
                CricketHero.Boot.bootedInWrongOrientation = false;
                CricketHero.GameManager.init(CricketHero.Boot.currentInstance.game);
            }
           
            document.getElementById("orientation").style.display = "none";
            document.getElementById("canvas").style.display = "block"; 
            
        } else {
            document.getElementById("orientation").style.display = "block";
            document.getElementById("canvas").style.display = "none"; 
        }
    }, 250);
}
