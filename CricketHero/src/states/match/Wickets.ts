namespace CricketHero {
    
    export class Wickets extends Phaser.Group {

        private wickets: Spriter.SpriterGroup;

        constructor(game: Phaser.Game) {
    
            super(game, null, "wickets");

            const spriterFile: any = new Spriter.SpriterXml(this.game.cache.getXML("wickets"), { imageNameType: Spriter.eImageNameType.ORIGINAL });
            const spriterLoader: any = new Spriter.Loader();
            const spriterData: any = spriterLoader.load(spriterFile);

            this.wickets = new Spriter.SpriterGroup(this.game, spriterData, "texture_atlas_3", "wickets", 0, 2);
            this.wickets.onLoop.add(this.onLoop, this);
            this.wickets.y = 65;
            this.wickets.playAnimationByName("idle"); 
            this.add(this.wickets);
        }

        public update(): void {

            super.update();

            if (GameVars.paused) {
                return;
            }

            this.wickets.updateAnimation();
        }

        public hit(): void {

            this.wickets.setAnimationSpeedPercent(4);

            if (Math.random() > .5) {
                this.wickets.playAnimationByName("anim_01"); 
            } else {
                this.wickets.playAnimationByName("anim_02"); 
            }
        }

        private onLoop(): void {
            
            if (this.wickets.currentAnimationName === "anim_01") {

                this.wickets.setAnimationSpeedPercent(8);
                this.wickets.playAnimationByName("anim_01_back"); 
            
            } else if (this.wickets.currentAnimationName === "anim_02") {

                this.wickets.setAnimationSpeedPercent(8);
                this.wickets.playAnimationByName("anim_02_back");

            } else if (this.wickets.currentAnimationName === "anim_01_back" || this.wickets.currentAnimationName === "anim_02_back") {

                this.wickets.playAnimationByName("idle"); 
            } 
        }
    }
}
