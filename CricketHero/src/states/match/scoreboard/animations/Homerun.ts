/// <reference path="DisplayAnimation.ts"/>
namespace CricketHero {
    
    export class Homerun extends DisplayAnimation {

        private onImage: Phaser.Image;
        private offImage: Phaser.Image;

        constructor(game: Phaser.Game) {
    
            super(game, DisplayManager.HOMERUN_STATE);

            let onImageName: string;
            let offImageName: string;

            if (GameVars.homeRunType === GameConstants.HOMERUN_4) {
                onImageName = "four_01.png";
                offImageName = "four_02.png";
            } else {
                onImageName = "six_01.png";
                offImageName = "six_01.png";
            }
            
            this.onImage = new Phaser.Image(this.game, 0, 0, "texture_atlas_2", onImageName);
            this.onImage.anchor.set(.5);
            this.onImage.scale.set(5);
            this.onImage.smoothed = false;
            this.content.add(this.onImage);

            this.offImage = new Phaser.Image(this.game, 0, 0, "texture_atlas_2", offImageName);
            this.offImage.anchor.set(.5);
            this.offImage.scale.set(5);
            this.offImage.smoothed = false;
            this.offImage.visible = false;
            this.content.add(this.offImage);
        }

        public update(): void{

            super.update();

            this.framesCounter ++;

            if (this.framesCounter % 30 === 0 && this.framesCounter < 180) {

                this.onImage.visible = !this.onImage.visible;
                this.offImage.visible = !this.offImage.visible;

            } else if (this.framesCounter === 180) {

                this.animationEnded();
            }
         }
    }
}
