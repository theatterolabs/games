namespace CricketHero {

    export class RectangleWithRadius extends Phaser.Group {

        public static readonly TOP_CONFIGURATION = "top";
        public static readonly BOTTOM_CONFIGURATION = "botton";
        public static readonly NORMAL_CONFIGURATION = "normal";

        constructor ( game: Phaser.Game, x: number, y: number, width: number,
                      height: number, r: number, color: string, alpha?: number,
                      configuration?: string, blendMode?: number) {

            super( game, null, "rectangle_with_radius", false);

            if (typeof configuration === "undefined") {
                configuration = RectangleWithRadius.NORMAL_CONFIGURATION;
            }

            if (typeof blendMode === "undefined") {
                blendMode = 0;
            }

            if (typeof alpha === "undefined") {
                alpha = 1;
            }

            let deltaY: number = 0;
            if (configuration === RectangleWithRadius.BOTTOM_CONFIGURATION) {
                deltaY = -r;
            }

            // central
            let reusableBmd: Phaser.BitmapData =  game.add.bitmapData( 100, 100);
            reusableBmd.ctx.beginPath();
            reusableBmd.ctx.rect(0, 0, 100,  100);
            reusableBmd.ctx.fillStyle = color;
            reusableBmd.ctx.fill();

            let rectangle: Phaser.Sprite = new Phaser.Sprite(game, x + r, y + r + deltaY, reusableBmd);
            rectangle.scale.setTo( (width - 2 * r) / 100 , (height - 2 * r) / 100 );
            rectangle.alpha = alpha;
            rectangle.blendMode = blendMode;
            this.add(rectangle);

            // arriba
            if ( configuration === RectangleWithRadius.NORMAL_CONFIGURATION || configuration === RectangleWithRadius.TOP_CONFIGURATION) {
                rectangle = new Phaser.Sprite(game, x + r, y , reusableBmd);
                rectangle.scale.setTo( (width - 2 * r) / 100 , r / 100 + deltaY);
                rectangle.alpha = alpha;
                rectangle.blendMode = blendMode;
                this.add(rectangle);
            }

            // derecha
            rectangle = new Phaser.Sprite(game, x + width - r, y + r  + deltaY, reusableBmd);
            rectangle.scale.setTo( r / 100 , (height - 2 * r) / 100 );
            rectangle.alpha = alpha;
            rectangle.blendMode = blendMode;
            this.add(rectangle);

            // abajo
            if ( configuration === RectangleWithRadius.NORMAL_CONFIGURATION || configuration === RectangleWithRadius.BOTTOM_CONFIGURATION) {
                rectangle = new Phaser.Sprite(game, x + r, y  + height -  r + deltaY , reusableBmd);
                rectangle.scale.setTo( (width - 2 * r) / 100 , r / 100 );
                rectangle.alpha = alpha;
                rectangle.blendMode = blendMode;
                this.add(rectangle);
            }

            rectangle = new Phaser.Sprite(game, x, y + r  + deltaY, reusableBmd);
            rectangle.scale.setTo( r / 100 , ( height - 2 * r) / 100);
            rectangle.alpha = alpha;
            rectangle.blendMode = blendMode;
            this.add(rectangle);

            // LAS ESQUINAS
            let cornerBmd: Phaser.BitmapData =  game.add.bitmapData(r,  r);
            cornerBmd.ctx.beginPath();
            cornerBmd.ctx.arc(0, 0, r, 0, Math.PI);
            cornerBmd.ctx.fillStyle = color;
            cornerBmd.ctx.fill();

            let corner: Phaser.Sprite;
            // superiores
            if ( configuration === RectangleWithRadius.NORMAL_CONFIGURATION || configuration === RectangleWithRadius.TOP_CONFIGURATION) {
                corner = new Phaser.Sprite(game, x + r, y  + r + deltaY, cornerBmd);
                corner.alpha = alpha;
                corner.angle = 180;
                corner.blendMode = blendMode;
                this.add(corner);

                corner = new Phaser.Sprite(game, x + width - r, y + r + deltaY, cornerBmd);
                corner.alpha = alpha;
                corner.angle = 270;
                corner.blendMode = blendMode;
                this.add(corner);
            }

            // inferiores
            if ( configuration === RectangleWithRadius.NORMAL_CONFIGURATION || configuration === RectangleWithRadius.BOTTOM_CONFIGURATION) {
                corner = new Phaser.Sprite(game, x + r, y + height - r + deltaY, cornerBmd);
                corner.alpha = alpha;
                corner.angle = 90;
                corner.blendMode = blendMode;
                this.add(corner);

                corner = new Phaser.Sprite(game, x + width - r, y + height - r + deltaY, cornerBmd);
                corner.alpha = alpha;
                corner.angle = 0;
                corner.blendMode = blendMode;
                this.add(corner);
            }
        }
    }
}
