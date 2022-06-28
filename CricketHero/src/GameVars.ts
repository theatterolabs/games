namespace CricketHero {

    export class GameVars {

        public static scaleY: number;
        public static gameData: GameData;
        public static language: string;
        public static achievementsData: AchievementsData;
        public static matchData: MatchData;
        public static enterGameDirectly: boolean;
        public static paused: boolean;
        public static avatarsLoaded: boolean;
        public static randomGenerator: Phaser.RandomDataGenerator;
        public static showZeppelinOrAeroplane: boolean;
        public static zeppelinOrAeroplaneShown: boolean;
        public static isZeppelin: boolean;
        public static activatedCircleSide: string;
        public static currentBall: Ball;
        public static explosion: boolean;
        public static gameOver: boolean;
        public static ballsStreak: number;
        public static isPlayerOnFire: boolean;
        public static justSetOnFire: boolean;
        public static replayed: boolean;
        public static stopAction: boolean;
        public static thrownItemsToShowFairy: number;
        public static editingLevels: boolean;
        public static justHadStrike: boolean;
        public static showReferee: boolean;
        public static refereeJustHit: boolean;
        public static homeRunType: string;
        public static twoCirclesTutorialJustShown: boolean;
        public static homerunMode: boolean;
        public static homerun: boolean;
        public static homerunShown: boolean;
        public static coinsFrenzy: boolean;
        public static justHadCoinsFrenzy: boolean;
        public static coinsFrenzyShown: boolean;
        public static newRecord: boolean;
        public static relevantRecord: boolean;
        public static gameDistributionPreRollAdShown: boolean;
        public static playing = false;

        public static areValidDomains(domains: string[]): boolean {

            let isValid = false;

            for (let i = 0; i < domains.length; i++) {
                if (window.location.hostname.indexOf(domains[i]) !== -1) {
                    isValid = true;
                    break;
                }
            }

            return isValid;
        }
    }
}
