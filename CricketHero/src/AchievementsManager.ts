namespace CricketHero {

    export class AchievementsManager {

        private static game: Phaser.Game;
        private static eggsSmashed: number;
        private static bombsSmashed: number;
        private static refereesSmashed: number;
        private static onFireTimes: number;

        public static init(game: Phaser.Game): void { 

            AchievementsManager.game = game;

            GameManager.getStorageData(
                
                GameConstants.ACHIEVEMENTS_DATA,
                            
                            function(data: string): void {

                                if (data) {

                                    GameVars.achievementsData = JSON.parse(data);
                                    
                                } else {
                                    
                                    GameVars.achievementsData = {
                                        award_30_bats: false,
                                        award_50_bats: false,
                                        award_75_bats: false,
                                        award_100_bats: false,
                                        award_25_smashedEggs: false,
                                        award_50_smashedEggs: false,
                                        award_25_bombsSmashed: false,
                                        award_50_bombsSmashed: false
                                    };
                                }
                            },
                            function(error: Error): void {
                                GameManager.log("error retriving saved game data.", error);
                            }
            );
        }  

        public static onGameStart(): void {

            AchievementsManager.eggsSmashed = 0;
            AchievementsManager.bombsSmashed = 0;
            AchievementsManager.refereesSmashed = 0;
            AchievementsManager.onFireTimes = 0;
        }

        public static onEggSmashed(): void {

            AchievementsManager.eggsSmashed ++;
        }

        public static onBombSmashed(): void {

            AchievementsManager.bombsSmashed ++;
        }

        public static onRefereeSmashed(): void {

            AchievementsManager.refereesSmashed ++;
        }

        public static onFireSet(): void {

            AchievementsManager.onFireTimes ++;
        }

        public static onGameOver(): void {

            if (GameConstants.SPONSOR === GameConstants.SPONSOR_MINIJUEGOS) {

                miniplaySend2API("plays", 1);
                miniplaySend2API("last", GameVars.matchData.score);
                miniplaySend2API("best", GameVars.gameData.score);
                miniplaySend2API("eggs", AchievementsManager.eggsSmashed);
                miniplaySend2API("bombs", AchievementsManager.bombsSmashed);
                miniplaySend2API("extra", AchievementsManager.refereesSmashed);
                miniplaySend2API("onfire", AchievementsManager.onFireTimes);
                
            } else if (GameConstants.SPONSOR === GameConstants.SPONSOR_LAGGED) {

                const api_awards: any = [];

                if (!GameVars.achievementsData.award_30_bats && GameVars.gameData.score >= 30) {
                    GameVars.achievementsData.award_30_bats = true;
                    api_awards.push("cricket_hero_vja001");
                    GameManager.log("achievement 30 bats");
                }

                if (!GameVars.achievementsData.award_50_bats && GameVars.gameData.score >= 50) {
                    GameVars.achievementsData.award_50_bats = true;
                    api_awards.push("cricket_hero_vja002");
                    GameManager.log("achievement 50 bats");
                }

                if (!GameVars.achievementsData.award_75_bats && GameVars.gameData.score >= 75) {
                    GameVars.achievementsData.award_75_bats = true;
                    api_awards.push("cricket_hero_vja003");
                    GameManager.log("achievement 75 bats");
                }

                if (!GameVars.achievementsData.award_100_bats && GameVars.gameData.score >= 100) {
                    GameVars.achievementsData.award_100_bats = true;
                    api_awards.push("cricket_hero_vja004");
                    GameManager.log("achievement 100 bats");
                }

                if (!GameVars.achievementsData.award_25_smashedEggs && GameVars.gameData.tomatoesSmashed >= 25) {
                    GameVars.achievementsData.award_25_smashedEggs = true;
                    api_awards.push("cricket_hero_vja005");
                    GameManager.log("achievement 25 smashed eggs");
                }

                if (!GameVars.achievementsData.award_50_smashedEggs && GameVars.gameData.tomatoesSmashed >= 50) {
                    GameVars.achievementsData.award_50_smashedEggs = true;
                    GameManager.log("achievement 50 smashed eggs");
                }

                if (!GameVars.achievementsData.award_25_bombsSmashed && GameVars.gameData.bombsSmashed >= 25) {
                    GameVars.achievementsData.award_25_bombsSmashed = true;
                    GameManager.log("achievement 25 explosions");
                }

                if (!GameVars.achievementsData.award_50_bombsSmashed && GameVars.gameData.bombsSmashed >= 50) {
                    GameVars.achievementsData.award_50_bombsSmashed = true;
                    api_awards.push("cricket_hero_vja008");
                    GameManager.log("achievement 50 explosions");
                }

                if (api_awards.length > 0) {

                    LaggedAPI.Achievements.save(api_awards, function(response: any) {
                    
                        if (response.success) {
                            GameManager.log("achievement saved");
                        }  else {          
                            GameManager.log(response.errormsg);
                        }
                    });

                    GameManager.setStorageData(
                        GameConstants.ACHIEVEMENTS_DATA, 
                        GameVars.achievementsData,
                        function(): void {
                            GameManager.log("achievements data successfully saved");
                        },
                        function(error: Error): void {
                            GameManager.log("error saving achievements data", error);
                        }
                    );
                }   
            }
        }
    }
}
