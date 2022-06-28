namespace CricketHero {

    export class Trail extends Phaser.Group {
        
        private static DELTAS_MAIN_TRACK = [12, 12, 9, 9, 8, 8, 7, 7, 6, 5, 4, 2, 0, 0, 0, 0]; // 12 elementos
        private static DELTAS_TRANSPARENT_TRACK = [14, 14, 14, 14, 13, 12, 12, 10, 9, 9, 7, 7, 6, 5, 4, .6]; // 16 elementos

        private trailGraphics: Phaser.Graphics;
        private item: any;
        private trailPoints: Phaser.Point[];
        private trailColor: number;
    
        constructor(game: Phaser.Game, item: any) {
    
            super(game, null, "trail");

            this.item = item;
            
            this.trailPoints = [];

            this.trailGraphics = new Phaser.Graphics(this.game);
            this.add(this.trailGraphics);
        }

        public reset(trailColor: number): void {
            
            this.trailColor = trailColor;
            this.trailPoints.length = 0;
            this.trailGraphics.clear();
        }

        public preUpdate(): void {

            super.preUpdate();

            if (!this.item.trajectory) {
                return;
            }

            this.trailGraphics.clear();

            this.trailPoints.unshift(this.item.itemSprite.position.clone());

            if (this.trailPoints.length === 18) {
                this.trailPoints.pop();
            }

            let v1 = [];
            let v2 = [];

            let v3 = [];
            let v4 = [];

            if (this.trailPoints.length <= 17 && this.trailPoints.length > 2) {

                for (let i = 0; i < this.trailPoints.length - 1; i ++) {
                    
                    if (this.trailPoints[i].x !== 0) {
                                
                        let p1 = new Vector2D(this.trailPoints[i].x, this.trailPoints[i].y);
                        let p2 = new Vector2D(this.trailPoints[i + 1].x, this.trailPoints[i + 1].y);
    
                        let delta = p2.minus(p1).normalize();
      
                        let p3 = delta.getLeftNormal().times(Trail.DELTAS_MAIN_TRACK[i] * this.item.itemSprite.scale.x).plus(p1);
                        let p4 = delta.getRightNormal().times(Trail.DELTAS_MAIN_TRACK[i] * this.item.itemSprite.scale.x).plus(p1);
                        
                        if (p3.magnitudeSquared > 1 && p4.magnitudeSquared > 1) {
                            v1.push(p3);
                            v2.push(p4);
                        }

                        // esta es la estela exterior que se pone por debajo
                        p3 = delta.getLeftNormal().times(Trail.DELTAS_TRANSPARENT_TRACK[i] * this.item.itemSprite.scale.x).plus(p1);
                        p4 = delta.getRightNormal().times(Trail.DELTAS_TRANSPARENT_TRACK[i] * this.item.itemSprite.scale.x).plus(p1);

                        if (p3.magnitudeSquared > 1 && p4.magnitudeSquared > 2 ) {
                            v3.push(p3);
                            v4.push(p4);
                        }
                    }
                }
            }

            let vertices = [];

            for (let i = 0; i < v3.length; i ++) {
                vertices.push(new Phaser.Point(v3[i].x, v3[i].y));
            }

            for (let i = v4.length - 1; i >= 0; i --) {
                vertices.push(new Phaser.Point(v4[i].x, v4[i].y));
            }

            let alphaTrail = (this.item.trajectory.disappearing || this.item.trajectory === null)  ? .075 : .15; 
            
            if(this.item.hit) {
                alphaTrail *= 2;
            }

            this.trailGraphics.beginFill(this.trailColor, alphaTrail);
            this.trailGraphics.drawPolygon(vertices);
            this.trailGraphics.endFill();

            vertices.length = 0;

            for (let i = 0; i < v1.length; i ++) {
                vertices.push(new Phaser.Point(v1[i].x, v1[i].y));
            }

            for (let i = v2.length - 1; i >= 0; i --) {
                vertices.push(new Phaser.Point(v2[i].x, v2[i].y));
            }

            alphaTrail = (this.item.trajectory.disappearing || this.item.trajectory === null) ? .175 : .35; 

            if (this.item.hit) {
                alphaTrail *= 1.5;
            }

            this.trailGraphics.beginFill(this.trailColor, alphaTrail);
            this.trailGraphics.drawPolygon(vertices);
            this.trailGraphics.endFill();        
        }
    }
}
