namespace CricketHero {
    
    export class SmashedEgg extends Phaser.Group {
    
        private smashedEgg: Phaser.Image;
        private eggEffect: EggEffect;
        
        constructor(game: Phaser.Game, eggEffect: EggEffect) {
    
            super(game, null, "smashed-tomato");

            this.eggEffect = eggEffect;
            this.visible = false;
           
            this.smashedEgg = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", Math.random() > .5 ? "egg_stain_01.png" : "egg_stain_02.png");
            this.smashedEgg.anchor.x = .5;
            
            if (Math.random() > .5) {
                this.smashedEgg.angle = 90;
                this.smashedEgg.x = this.smashedEgg.height / 2;
                this.smashedEgg.y = this.smashedEgg.width / 2;
            }

            this.smashedEgg.scale.set(.75 + .25 * Math.random());    
            this.add(this.smashedEgg);
        }

        public appear(delay?: number): void {

            delay = delay || 0;
        
            const s = 1.25 * this.smashedEgg.scale.x;

            this.game.add.tween(this.smashedEgg.scale)
                .to ({x: s, y: s }, 125, Phaser.Easing.Cubic.Out, true, delay)
                .onStart.add(function(): void {
                    this.visible = true;
                }, this);
        }

        public disappear(delay?: number): void {

            delay = delay || 0;
            
            this.game.add.tween(this)
                .to ({ alpha: 0 }, 900, Phaser.Easing.Cubic.Out, true, 300);

            this.game.add.tween(this)
                .to ({ y: this.y + 30 }, 1300, Phaser.Easing.Cubic.Out, true, delay);

            this.game.add.tween(this.scale)
                .to ({ y: 1.25 }, 1300, Phaser.Easing.Cubic.Out, true, delay)
                .onComplete.add(function(): void {
                    this.eggEffect.onStainDisappeared();
                }, this);
        }
    }
}
