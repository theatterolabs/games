namespace CricketHero {

    export class DisplayDevelopmentState extends Phaser.State {

        public static currentInstance: DisplayDevelopmentState;  

        private stageContainer: Phaser.Group;

        public init(): void {
            
            DisplayDevelopmentState.currentInstance = this;

            GameVars.matchData.score = 0;
            GameVars.matchData.missedBalls = 0;

            GameVars.relevantRecord = true;
            GameVars.matchData.score = 45;
        }
        
        public create(): void {
            
            const background = this.add.sprite(0, 0, this.game.cache.getBitmapData("gradient-sky"));
            background.scale.set(GameConstants.GAME_WIDTH / 16, GameConstants.GAME_HEIGHT / 128);

            this.stageContainer = new Phaser.Group(this.game);
            this.stageContainer.position.set(GameConstants.GAME_WIDTH / 2, GameConstants.GAME_HEIGHT / 2);
            this.stageContainer.scale.y = GameVars.scaleY;

            DisplayManager.init(this.game);
            DisplayManager.display.y = -115;
            this.stageContainer.add(DisplayManager.display);

            DisplayManager.setState(DisplayManager.SCROLLING_BOARD_STATE);

            // PRIMERA FILA
            const startButton = this.add.button(50, 360, "texture_atlas_0", this.onStartButtonPressed, this);
            startButton.setFrames("button_start_on.png", "button_start_off.png", "button_start_on.png");
            startButton.anchor.set(.5);

            const ballHitButton = this.add.button(140, 360, "texture_atlas_0", this.onBallHitPressed, this);
            ballHitButton.setFrames("button_ball_hit_on.png", "button_ball_hit_off.png", "button_ball_hit_on.png");
            ballHitButton.anchor.set(.5);

            const strikeButton = this.add.button(230, 360, "texture_atlas_0", this.onStrikePressed, this);
            strikeButton.anchor.set(.5);
            strikeButton.setFrames("button_strike_on.png", "button_strike_off.png", "button_strike_on.png");

            const tomatoButton = this.add.button(320, 360, "texture_atlas_0", this.onTomatoPressed, this);
            tomatoButton.anchor.set(.5);
            tomatoButton.setFrames("button_tomato_on.png", "button_tomato_off.png", "button_tomato_on.png");

            const pauseButton = this.add.button(410, 360, "texture_atlas_0", this.onPausePressed, this);
            pauseButton.anchor.set(.5);
            pauseButton.setFrames("button_pause_on.png", "button_pause_off.png", "button_pause_on.png");

            // SEGUNDA FILA
            const bombButton = this.add.button(50, 410, "texture_atlas_0", this.onBombPressed, this);
            bombButton.anchor.set(.5);
            bombButton.setFrames("button_bomb_on.png", "button_bomb_off.png", "button_bomb_on.png");

            const newRecordButton = this.add.button(230, 410, "texture_atlas_0", this.onNewRecordPressed, this);
            newRecordButton.anchor.set(.5);
            newRecordButton.setFrames("button_new_record_on.png", "button_new_record_off.png", "button_new_record_on.png");

            const adversarydButton = this.add.button(320, 410, "texture_atlas_0", this.onAdversaryAheadPressed, this);
            adversarydButton.anchor.set(.5);
            adversarydButton.setFrames("button_adversary_on.png", "button_adversary_off.png", "button_adversary_on.png");

            const resumeButton = this.add.button(410, 410, "texture_atlas_0", this.onResumePressed, this);
            resumeButton.anchor.set(.5);
            resumeButton.setFrames("button_resume_on.png", "button_resume_off.png", "button_resume_on.png");

            // TERCERA FILA
            const startBreakAnimButton = this.add.button(50, 460, "texture_atlas_0", this.onStartBreakPressed, this);
            startBreakAnimButton.anchor.set(.5);
            startBreakAnimButton.setFrames("button_start_break_seq_on.png", "button_start_break_seq_off.png", "button_start_break_seq_on.png");

            const curvyBallButton = this.add.button(140, 460, "texture_atlas_0", this.onCurvyBallPressed, this);
            curvyBallButton.anchor.set(.5);
            curvyBallButton.setFrames("button_curve_ball_on.png", "button_curve_ball_off.png", "button_curve_ball_on.png");

            const onFireButton = this.add.button(230, 460, "texture_atlas_0", this.onFirePressed, this);
            onFireButton.anchor.set(.5);
            onFireButton.setFrames("button_on_fire_on.png", "button_on_fire_off.png", "button_on_fire_on.png");

            const afterAdButton = this.add.button(320, 460, "texture_atlas_0", this.onAfterAdPressed, this);
            afterAdButton.anchor.set(.5);
            afterAdButton.setFrames("button_after_ad_on.png", "button_after_ad_off.png", "button_after_ad_on.png");

            const goButton = this.add.button(410, 460, "texture_atlas_0", this.onGoPressed, this);
            goButton.anchor.set(.5);
            goButton.setFrames("button_go_on.png", "button_go_off.png", "button_go_on.png");

            // CUARTA FILA
            const twoCirclesButton = this.add.button(50, 510, "texture_atlas_0", this.onTwoCirclesPressed, this);
            twoCirclesButton.anchor.set(.5);
            twoCirclesButton.setFrames("button_two_circles_on.png", "button_two_circles_off.png", "button_two_circles_on.png");

            const oneCircleButton = this.add.button(140, 510, "texture_atlas_0", this.onOneCirclePressed, this);
            oneCircleButton.anchor.set(.5);
            oneCircleButton.setFrames("button_one_circle_on.png", "button_one_circle_off.png", "button_one_circle_on.png");

            const gameoverButton = this.add.button(230, 510, "texture_atlas_0", this.onGameOverPressed, this);
            gameoverButton.anchor.set(.5);
            gameoverButton.setFrames("button_game_over_on.png", "button_game_over_off.png", "button_game_over_on.png");

            const homerunButton = this.add.button(320, 510, "texture_atlas_0", this.onHomerunPressed, this);
            homerunButton.anchor.set(.5);
            homerunButton.setFrames("button_homerun_on.png", "button_homerun_off.png", "button_homerun_on.png");

            const resetButton = this.add.button(410, 510, "texture_atlas_0", this.onResetPressed, this);
            resetButton.anchor.set(.5);
            resetButton.setFrames("button_reset_on.png", "button_reset_off.png", "button_reset_on.png");

            // QUINTA FILA
            const startCoinsFrenzyButton = this.add.button(50, 560, "texture_atlas_0", this.startCoinsFrenzyPressed, this);
            startCoinsFrenzyButton.anchor.set(.5);
            startCoinsFrenzyButton.setFrames("button_coin_frenzy_start_on.png", "button_coin_frenzy_start_off.png", "button_coin_frenzy_start_on.png");

            const stopCoinsFrenzyButton = this.add.button(140, 560, "texture_atlas_0", this.stopCoinsFrenzyPressed, this);
            stopCoinsFrenzyButton.anchor.set(.5);
            stopCoinsFrenzyButton.setFrames("button_coin_frenzy_end_on.png", "button_coin_frenzy_end_off.png", "button_coin_frenzy_end_on.png");
        }

        public shutdown(): void {
            
            DisplayDevelopmentState.currentInstance = null;
            
            super.shutdown();
        }

        public startCoinsFrenzyPressed(): void {

            DisplayManager.coinsFrenzyStarted();
        }

        public stopCoinsFrenzyPressed(): void {

            DisplayManager.coinsFrenzyEnds();
        }
        
        public onHomerunPressed(): void {

            DisplayManager.setState(DisplayManager.HOMERUN_STATE);
        }

        public onPausePressed(): void {
            
            DisplayManager.pause();
        }

        public onResumePressed(): void {
            
            DisplayManager.resume();
        }

        public onDownFairy(): void {

            GameVars.matchData.missedBalls --;

            DisplayManager.fairyPressed();
        }

        public onAfterAdPressed(): void {
            
            DisplayManager.setState(DisplayManager.AFTER_BREAK_STATE);
        }

        public onGoPressed(): void {
            
            DisplayManager.go();
        }

        private onStartBreakPressed(): void {
            
            DisplayManager.startBreak(3000);
        }

        private onTwoCirclesPressed(): void {

            DisplayManager.setState(DisplayManager.TWO_CIRCLES_STATE);
        }

        private onOneCirclePressed(): void {

            DisplayManager.setState(DisplayManager.ONE_CIRCLE_STATE);
        }

        private onGameOverPressed(): void {
            
            DisplayManager.setState(DisplayManager.GAME_OVER_STATE);
        }

        private onStartButtonPressed(): void {

            GameVars.matchData.score = 0;
            GameVars.matchData.missedBalls = 0;

            const fairy = new Referee(this.game);
            this.stageContainer.add(fairy);
            
            DisplayManager.setState(DisplayManager.COUNTDOWN_STATE);
        }

        private onBallHitPressed(): void {
            
            GameVars.matchData.score ++;

            DisplayManager.updateScore();
        }

        private onStrikePressed(): void {
            
            GameVars.matchData.missedBalls ++;
            DisplayManager.setState(DisplayManager.STRIKE_STATE);
        }

        private onCurvyBallPressed(): void {

            DisplayManager.setState(DisplayManager.CURVE_BALL_STATE);
        }

        private onFirePressed(): void {

            DisplayManager.setOnFire();
        }

        private onTomatoPressed(): void {
            
            DisplayManager.setState(DisplayManager.TOMATO_STATE);
        }

        private onBombPressed(): void {

            DisplayManager.setState(DisplayManager.BOMB_STATE);
        }


        private onResetPressed(): void {

            this.game.state.start("DisplayDevelopmentState", true, false);
        }

        private onNewRecordPressed(): void {
            
            DisplayManager.setState(DisplayManager.NEW_RECORD_STATE);
        }

        private onAdversaryAheadPressed(): void {

            DisplayManager.setState(DisplayManager.PLAYER_AHEAD_STATE);
        }

        private onAnim2Pressed(): void {
            //
        }
    }
}
