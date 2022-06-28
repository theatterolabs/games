namespace CricketHero {
    
    export class DebugObjectsContainer extends Phaser.Group {
    
        public static WHITE = 0xFFFFFF;
        public static RED = 0xFF0000;
        public static GREEN = 0x00FF00;
        public static BLUE = 0x0000FF;
        public static YELLOW = 0xFFFF00;

        private graphics: Phaser.Graphics;
        private ballTrajectoryGraphics: Phaser.Graphics;

        constructor(game: Phaser.Game) {
    
            super(game, null, "debug-objects-container");    

            this.graphics = new Phaser.Graphics(this.game);
            this.add(this.graphics);

            this.ballTrajectoryGraphics = new Phaser.Graphics(this.game);
            this.add(this.ballTrajectoryGraphics);
        }

        public drawCircle(p: Phaser.Point, radius: number, color: number): void {

            this.graphics.lineStyle(1, color);
            this.graphics.drawCircle(p.x, p.y, 2 * radius);
        }

        public clearBallGraphics(): void {
            
            this.ballTrajectoryGraphics.clear();
        }

        public drawBallTrajectoryPoint(p: Phaser.Point, color: number, radius?: number): void {
            
            let r = radius || 3.5;

            this.ballTrajectoryGraphics.lineStyle(1, color, 1);
            this.ballTrajectoryGraphics.beginFill(color, 1);
            this.ballTrajectoryGraphics.drawCircle(p.x, p.y, r);
            this.ballTrajectoryGraphics.endFill();
        }

        public drawPoint(p: Phaser.Point, color: number): void {
            
            this.graphics.lineStyle(1, color, 1);
            this.graphics.beginFill(color, 1);
            this.graphics.drawCircle(p.x, p.y, 5);
            this.graphics.endFill();
        }

        public drawLine(p1: Phaser.Point, p2: Phaser.Point, color: number): void {
            
            this.graphics.lineStyle(1, color, 1);
            this.graphics.moveTo(p1.x, p1.y);
            this.graphics.lineTo(p2.x, p2.y);
        }
    }
}
