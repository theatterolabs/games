namespace CricketHero {
    
    export class ZeppelinAeroplane extends Phaser.Group {

        private static px = -250;

        private zeppelin: Phaser.Image;
        private aeroplane: Phaser.Sprite;

        constructor(game: Phaser.Game) {
    
            super(game, null, "zeppelin-aeroplane");

            const px = ZeppelinAeroplane.px === -250 ? -250 : ZeppelinAeroplane.px;

            if (GameVars.isZeppelin) {

                this.aeroplane = null;

                this.zeppelin = new Phaser.Image(this.game, px, 12 * GameVars.scaleY, "texture_atlas_1", "zeppelin.png");
                this.zeppelin.scale.y = GameVars.scaleY;
                this.add(this.zeppelin);

            } else {

                this.aeroplane = this.create(px, 12 * GameVars.scaleY, "texture_atlas_4", "plane_ravalmatic0001.png");
                this.aeroplane.scale.y = GameVars.scaleY;

                switch (GameVars.gameData.language) {
                    case GameConstants.LAGUANGE_EN:
                        this.aeroplane.animations.add("fly", Phaser.Animation.generateFrameNames("plane_ravalmatic", 1, 10, ".png", 4));
                        break;
                    case GameConstants.LANGUAGE_HI:
                        this.aeroplane.animations.add("fly", Phaser.Animation.generateFrameNames("hindi_plane_", 1, 10, ".png", 2));
                        break;
                    case GameConstants.LANGUAGE_PT:
                        this.aeroplane.animations.add("fly", Phaser.Animation.generateFrameNames("pt_plane_", 1, 10, ".png", 2));
                        break;
                    default:
                        break;
                }
                
                this.add(this.aeroplane);

                this.aeroplane.animations.play("fly", 16, true);
                
                this.zeppelin = null;
            }
        }

        public update(): void {

            super.update();

            ZeppelinAeroplane.px += .175;

            if (this.zeppelin) {
                this.zeppelin.x = ZeppelinAeroplane.px;
            } else {
                this.aeroplane.x = ZeppelinAeroplane.px;
            }
            
            if (ZeppelinAeroplane.px > GameConstants.GAME_WIDTH) {
                GameManager.zeppelinAeroplaneShown();
                this.destroy();
            }
        }
    }
}
