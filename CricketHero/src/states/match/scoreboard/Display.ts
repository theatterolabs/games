namespace CricketHero {
    
    export class Display extends Phaser.Group {

        private static readonly NUM_VERT_LINES = 60;
        private static readonly NUM_HOR_LINES = 40;

        public currentAnimation: DisplayAnimation;
        public disappearingAnimation: DisplayAnimation;

        private rotationContainer: Phaser.Group;
        private contentContainer: Phaser.Group;
        private boardMask: Phaser.Graphics;
        private upperDarkeningLayer: Phaser.Image;
        private lowerDarkeningLayer: Phaser.Image;
        private pauseAnimation: Pause;
        private referee: Phaser.Sprite;
        
        constructor(game: Phaser.Game) {
    
            super(game, null, "display");

            this.referee = null;
            this.pauseAnimation = null;

            this.y = -170;

            this.scale.set(1.125);
          
            this.currentAnimation = null;
            this.currentAnimation = null;

            // debido a que es necesario cambiar el punto de anclaje cuando la bomba explota
            this.rotationContainer = new Phaser.Group(this.game);
            this.add(this.rotationContainer);

            const frame = new Phaser.Image(this.game, 0, 0, "texture_atlas_4", "board-frame.png");
            frame.anchor.set(.5);
            this.rotationContainer.add(frame);

            const background = this.create(0, 0, this.game.cache.getBitmapData(GameConstants.GRAY_SQUARE));
            background.scale.set(300 / GameConstants.BITMAP_SIZE, 200 / GameConstants.BITMAP_SIZE);
            background.anchor.set(.5);
            this.rotationContainer.add(background);

            this.contentContainer = new Phaser.Group(this.game);
            this.rotationContainer.add(this.contentContainer);

            this.boardMask = new Phaser.Graphics(this.game, -300 / 2, -200 / 2);
            this.boardMask.beginFill(0xFFFFFF);
            this.boardMask.drawRect(0, 0, 300, 200);
            this.rotationContainer.add(this.boardMask);

            this.upperDarkeningLayer = new Phaser.Image(this.game, -300 / 2, -200 / 2 - 400, "texture_atlas_1", "darkening-layer.png");
            this.upperDarkeningLayer.scale.set(10, 2);
            this.upperDarkeningLayer.mask = this.boardMask;
            this.rotationContainer.add(this.upperDarkeningLayer);

            this.lowerDarkeningLayer = new Phaser.Image(this.game, -300 / 2, -200 / 2, "texture_atlas_1", "darkening-layer.png");
            this.lowerDarkeningLayer.scale.set(10, 2);
            this.lowerDarkeningLayer.mask = this.boardMask;
            this.rotationContainer.add(this.lowerDarkeningLayer);

            const grid = new Phaser.Graphics(this.game);
            this.rotationContainer.add(grid);

            // las lineas verticales
            const deltaLine = 5;

            grid.lineStyle(.75, 0x000000);

            for (let i = 0; i < Display.NUM_VERT_LINES; i++) {
                grid.moveTo(i * deltaLine - Display.NUM_VERT_LINES / 2 * deltaLine, -100);
                grid.lineTo(i * deltaLine - Display.NUM_VERT_LINES / 2 * deltaLine, 100);
            }

            for (let i = 0; i < Display.NUM_HOR_LINES; i++) {
                grid.moveTo(-150, i * deltaLine - Display.NUM_HOR_LINES / 2 * deltaLine);
                grid.lineTo(150, i * deltaLine - Display.NUM_HOR_LINES / 2 * deltaLine);
            }
        }

        public update(): void {

            super.update();

            this.upperDarkeningLayer.y += 1;
            this.lowerDarkeningLayer.y += 1;

            if (this.lowerDarkeningLayer.y > 400) {
                this.lowerDarkeningLayer.y = this.upperDarkeningLayer.y - 400;
                const tmpImage = this.lowerDarkeningLayer;
                this.lowerDarkeningLayer = this.upperDarkeningLayer;
                this.upperDarkeningLayer = tmpImage;
            }
        }

        public pause(): void {

            this.currentAnimation.pause();

            if (this.disappearingAnimation){
                this.disappearingAnimation.pause();
            }

            this.pauseAnimation = new Pause(this.game);
            this.contentContainer.add(this.pauseAnimation);
        }

        public resume(): void {

            this.currentAnimation.resume();

            if (this.disappearingAnimation) {
                this.disappearingAnimation.resume();
            }

            this.pauseAnimation.destroy();
        }

        public onAdShwon(): void {

            if (this.referee !== null) {
                this.referee.destroy();
                this.referee = null;
            }
        }

        public addReferee(): void {

            let referee_py = 60;
            let aspectRatio = this.game.scale.aspectRatio;

            if (aspectRatio >= .745) {
                referee_py = 125;
            } else if ( aspectRatio >= .65) {
                referee_py = 105;
            }

            this.referee = new Phaser.Sprite(this.game, -this.x - 135, -300, "texture_atlas_1", "newRecord_01.png");
            this.referee.anchor.set(.48, .915); 
            this.referee.animations.add("fly", Phaser.Animation.generateFrameNames("newRecord_", 1, 7, ".png", 2));
            this.referee.animations.play("fly", 18, true);
            this.add(this.referee);

            this.game.add.tween(this.referee)
                .to ({y: referee_py}, 1250, Phaser.Easing.Cubic.Out, true, 650);

            this.game.add.tween(this.referee.anchor)
                .to ({x: .52}, 5000, Phaser.Easing.Linear.None, true, 0, -1, true);

            this.game.add.tween(this.referee.anchor)
                .to ({y: 1}, 8500, Phaser.Easing.Cubic.Out, true, 0, -1, true);
        }

        public extraBall(): void {

            if(GameVars.gameOver) {
                return;
            }

            DisplayManager.blockAnimations();

            // encontar la coordenada del hada
            const referee_px = Referee.currentInstance.referee.x;
            const referee_py = Referee.currentInstance.referee.y;

            const ball_px = referee_px;
            const ball_py = referee_py + 30;

            const extraBallIcon = new Phaser.Image(this.game, ball_px, ball_py, "texture_atlas_1", "icon_ball_fairy.png");
            extraBallIcon.anchor.set(.5);
            extraBallIcon.angle = -30;
            this.add(extraBallIcon);

            // darle un tween hacia la correspondiente bola
            let px: number;
            let py = 60;

            if (GameVars.matchData.missedBalls === 0) {
                px = -90;
            } else if (GameVars.matchData.missedBalls === 1) {
                px = 0;
            }

            this.game.add.tween(extraBallIcon)
                .to ({x: px, y: py, angle: 0}, 350, Phaser.Easing.Cubic.Out, true, 400) 
                .onComplete.add(function(): void {
                    
                    if(GameVars.gameOver) {

                        extraBallIcon.destroy();

                    } else {
                        
                        const scoreAndBalls = <ScoreAndBalls> this.currentAnimation;
                        scoreAndBalls.addExtraBall();
    
                        this.game.add.tween(extraBallIcon)
                            .to ({alpha: 0}, 200, Phaser.Easing.Cubic.Out, true)
                            .onComplete.add(function(): void {
                                extraBallIcon.destroy();
                            }, this);
                    }

                }, this);
        }

        public addAnimation(animation: DisplayAnimation, transition: string): void {

            if (this.currentAnimation !== null) {
                this.currentAnimation.disappear(transition);    
                this.disappearingAnimation = this.currentAnimation;
            }

            this.currentAnimation = animation;

            this.currentAnimation.appear(transition, this.contentContainer);
        }

        public explosion(): void {

            if (this.angle !== 0) {
                return;
            }

            let i = this.rotationContainer.length;

            let rnd = Math.floor(Math.random() * 4) + 1;

            const missingPixels = new Phaser.Image(this.game, 0, 0, "texture_atlas_2", "broken_display_0" + rnd + ".png");
            missingPixels.anchor.set(.5);
            missingPixels.scale.set(5);
            missingPixels.smoothed = false;
            missingPixels.visible = false;
            this.rotationContainer.addAt(missingPixels, i - 1);

            this.game.time.events.add(1200, function(): void {
                missingPixels.visible = true;
            }, this);

            const brokenGlass = new Phaser.Image(this.game, 0, 0, "texture_atlas_1", "broken-glass.png");
            brokenGlass.anchor.set(.5);
            brokenGlass.scale.set(2);
            this.rotationContainer.add(brokenGlass);

            rnd = Math.random();

            if (rnd > .5) {
                brokenGlass.scale.x = -2;
            }

            rnd = Math.random();

            if (rnd > .5) {
                brokenGlass.scale.y = -2;
            }

            // lo giramos y le cambiamos el punto de giro para que parezca q se desuelga
            let direction = Math.random() > .5 ? 1 : -1;
            
            this.rotationContainer.x += direction * 100;
            this.x -= direction * 100;

            this.rotationContainer.y += direction * 50;
            this.y -= direction * 50;

            let angle = direction * 8 + 4 * Math.random();

            this.game.add.tween(this.rotationContainer)
                .to ({angle: angle}, 750, Phaser.Easing.Bounce.Out, true, 1550);
        }
    }
}
