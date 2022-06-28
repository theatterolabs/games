/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class CoinsFrenzy extends DisplayAnimation {

        private coinsFrenzyAnimation: Phaser.Sprite;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.COINS_FRENZY_STATE);

            this.coinsFrenzyAnimation = this.content.create(0, 0, "texture_atlas_2", "coin_frenzy_01.png");
            this.coinsFrenzyAnimation.anchor.set(.5);
            this.coinsFrenzyAnimation.scale.set(5);
            this.coinsFrenzyAnimation.smoothed = false;
            this.coinsFrenzyAnimation.animations.add("animation", Phaser.Animation.generateFrameNames("coin_frenzy_", 1, 8, ".png", 2));

            this.coinsFrenzyAnimation.animations.play("animation", 12, true);
        }
    }
}
