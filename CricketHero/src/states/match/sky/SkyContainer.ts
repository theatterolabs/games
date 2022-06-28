namespace CricketHero {
    
    export class SkyContainer extends Phaser.Group {

        private clouds: {image: Phaser.Image, speed: number}[];
        private zeppelinOrAeroplane: ZeppelinAeroplane;

        constructor(game: Phaser.Game) {
    
            super(game, null, "sky-container");

            const background = this.create(0, 0, this.game.cache.getBitmapData("gradient-sky"));
            background.scale.set(GameConstants.GAME_WIDTH / 16, .2 / GameVars.scaleY * GameConstants.GAME_HEIGHT / 128);

            this.clouds = [];
            
            let cloud = new Phaser.Image(this.game, 300, 10, "texture_atlas_3", "cloud_01.png");
            cloud.anchor.x = 1;
            cloud.scale.y = GameVars.scaleY;
            this.add(cloud);
            this.clouds.push({image: cloud, speed: .05});
            
            cloud = new Phaser.Image(this.game, 700, 20, "texture_atlas_3", "cloud_02.png");
            cloud.anchor.x = 1;
            cloud.scale.y = GameVars.scaleY;
            this.add(cloud);
            this.clouds.push({image: cloud, speed: .085});
            
            cloud = new Phaser.Image(this.game, 1100, 40, "texture_atlas_3", "cloud_01.png");
            cloud.anchor.x = 1;
            cloud.scale.y = GameVars.scaleY;
            this.add(cloud);
            this.clouds.push({image: cloud, speed: .045});
            
            cloud = new Phaser.Image(this.game, 1700, 30, "texture_atlas_3", "cloud_02.png");
            cloud.anchor.x = 1;
            cloud.scale.y = GameVars.scaleY;
            this.add(cloud);
            this.clouds.push({image: cloud, speed: .065});

            if (GameVars.showZeppelinOrAeroplane && !GameVars.zeppelinOrAeroplaneShown) {
                this.zeppelinOrAeroplane = new ZeppelinAeroplane(this.game);
                this.add(this.zeppelinOrAeroplane);
            } else {
                this.zeppelinOrAeroplane = null;
            }
        }

        public update(): void {
            
            super.update();

            if (GameVars.paused) {
                return;
            }
            
            for (let i = 0, ln = this.clouds.length; i < ln; i++) {
                this.clouds[i].image.x -= this.clouds[i].speed;
                if (this.clouds[i].image.x < 0) {
                    this.clouds[i].image.x = 1200 + Math.random() * 750;
                    this.clouds[i].speed = .05 + .035 * Math.random();
                }
            }
        }
    }
}
