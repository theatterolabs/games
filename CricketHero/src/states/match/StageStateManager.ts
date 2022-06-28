namespace CricketHero {

    export class StageStateManager {

        public static SMALL_TARGET_CIRCLE = "small_target_circle";
        public static NORMAL_TARGET_CIRCLE = "normal_target_circle";
        public static SAME_AS_BEFORE = "same_as_before";
        public static ACTIVATE_TWO_CIRCLES = "activate_2_circles";
        public static ACTIVATE_ONE_CIRCLE = "activate_one_circle";
        public static SCALE_UP = "scale_up";
        public static SCALE_DOWN = "scale_down";
        public static ACTIVATE_HOME_RUN = "activate_home_run";
        public static DEACTIVATE_HOME_RUN = "deactivate_home_run";

        private static game: Phaser.Game;

        public static init(game: Phaser.Game): void {

            StageStateManager.game = game;

            if (!GameVars.enterGameDirectly) {

                const stageStateSquences: StageStateSquence[] = StageStateManager.game.cache.getJSON("stage-state-data");
                let i = Math.floor(Math.random() * stageStateSquences.length);

                // TODO: ESTO PARA ENTRAR EN UNA SECUENCIA DETERMINADA
                // i = 6;        
    
                GameVars.matchData.eventsData.eventsSet = stageStateSquences[i].events;
    
                GameVars.matchData.eventsData.i = 0;
                GameVars.matchData.eventsData.deltaItems = 0;
                GameVars.matchData.eventsData.rounds = 1;
            }
        }   

        public static getNextState(): string {

            let pendingToAssignState = GameVars.matchData.eventsData.eventsSet [GameVars.matchData.eventsData.i];
            
            if (pendingToAssignState.ball_number === GameVars.matchData.itemsThrown - GameVars.matchData.eventsData.deltaItems) {

                if (GameVars.matchData.eventsData.i === GameVars.matchData.eventsData.eventsSet.length  - 1) {
                    GameVars.matchData.eventsData.i = 0;
                    GameVars.matchData.eventsData.deltaItems = pendingToAssignState.ball_number * GameVars.matchData.eventsData.rounds;
                    GameVars.matchData.eventsData.rounds ++;
                } else {
                    GameVars.matchData.eventsData.i = GameVars.matchData.eventsData.i + 1;
                }
                
                return pendingToAssignState.state;

            } else {
                
                return StageStateManager.SAME_AS_BEFORE;
            }
        }
    }
}
