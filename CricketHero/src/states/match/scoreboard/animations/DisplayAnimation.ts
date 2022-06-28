namespace CricketHero {
    
    export class DisplayAnimation extends Phaser.Group {

        public static currentAnimation: DisplayAnimation;

        private static TWEEN_TIME = 250; // era 250

        protected scrollingTween: Phaser.Tween;
        protected framesCounter: number;
        protected displayMask: Phaser.Graphics;
        protected content: Phaser.Group;
        protected hasAnimationEnded: boolean;
        protected timerEvent: Phaser.TimerEvent;

        constructor(game: Phaser.Game, name: string) {
    
            super(game, null, name);

            this.framesCounter = 0;
            this.timerEvent = null;
            this.scrollingTween = null;
            this.hasAnimationEnded = false;

            this.content = new Phaser.Group(this.game);
            this.add(this.content);

            this.displayMask = new Phaser.Graphics(this.game, -300 / 2, -200 / 2);
            this.displayMask.beginFill(0xFFFFFF);
            this.displayMask.drawRect(0, 0, 300, 200);
            this.add(this.displayMask);

            this.content.mask = this.displayMask;
        }

        public pause(): void {

            if (this.game) {
                this.game.time.events.pause();
            } else {
                return;
            }

            this.visible = false;
            
            if (this.scrollingTween) {
                this.scrollingTween.pause();
            }
        }

        public resume(): void {

            if (this.game) {
                this.game.time.events.resume();
            } else {
                return;
            }

            this.visible = true;

            if (this.scrollingTween) {
                this.scrollingTween.resume();
            }
        }

        public appear(direction: string, contentContainer: Phaser.Group): void {
            
            DisplayAnimation.currentAnimation = this;
            
            contentContainer.add(this);

            switch (direction) {
                case DisplayManager.APPEAR_FROM_THE_BOTTOM:
                    this.content.y = 200;
                    break;
                case DisplayManager.APPEAR_FROM_THE_TOP:
                    this.content.y = -200;
                    break;
                case DisplayManager.APPEAR_FROM_THE_LEFT:
                    this.content.x = -300;
                    break;
                case DisplayManager.APPEAR_FROM_THE_RIGHT:
                    this.content.x = 300;
                    break;
                
                default:
            }

            if (direction === DisplayManager.APPEAR_INSTANTLY) {
                this.animationAppeared();
            } else {

                let t = DisplayAnimation.TWEEN_TIME;

                if (GameVars.matchData.itemsThrown > 30) {
                    t *= .75;
                } else if (GameVars.matchData.itemsThrown > 15) {
                    t *= .85;
                }

                this.scrollingTween = this.game.add.tween(this.content)
                                        .to ({x: 0, y: 0}, t, Phaser.Easing.Linear.None, true);
                this.scrollingTween.onComplete.add(this.animationAppeared, this); 
            }
        }

        public disappear(direction: string): void {

            if (this.timerEvent !== null) {
                this.timerEvent.pendingDelete = true;
                this.timerEvent = null;
            }

            let x: number;
            let y: number;
            
            switch (direction) {
                case DisplayManager.APPEAR_FROM_THE_BOTTOM:
                    x = 0;
                    y = -200;
                    break;
                case DisplayManager.APPEAR_FROM_THE_TOP:
                    x = 0;
                    y = 200;
                    break;
                case DisplayManager.APPEAR_FROM_THE_LEFT:
                    x = 300;
                    y = 0;
                    break;
                case DisplayManager.APPEAR_FROM_THE_RIGHT:
                    x = -300;
                    y = 0;
                    break;
                default:
            }

            if (direction === DisplayManager.APPEAR_INSTANTLY) {
                this.animationDisappeared();
            } else {

                let t = DisplayAnimation.TWEEN_TIME;

                if (GameVars.matchData.itemsThrown > 30) {
                    t *= .75;
                } else if (GameVars.matchData.itemsThrown > 15) {
                    t *= .85;
                }

                this.scrollingTween = this.game.add.tween(this.content)
                                        .to ({x: x, y: y}, t, Phaser.Easing.Linear.None, true);
                this.scrollingTween.onComplete.add(this.animationDisappeared, this);
            }
        }

        protected animationEnded(): void {

            this.timerEvent = null;

            this.hasAnimationEnded = true;
            
            DisplayManager.stateAnimationEnded();
        }

        protected animationAppeared(): void {
            
            this.scrollingTween = null;
        }

        protected animationDisappeared(): void {
            
            this.scrollingTween = null;

            this.destroy();
        }
    }
}
