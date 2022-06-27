export enum GamePixConst {
    NONE =                  "",
    GAME_OVER =             "game_over",
    LEVEL_COMPLETED =       "level_completed",
    LEVEL_COMPLETE =        "level_complete",
    TRY_AGAIN =             "try_again",
    PARTIAL_SCORE =         "partial_score",
    OPEN_LEADERBOARD =      "open_leaderboard",
    OPEN_SHOP =             "open_shop",
    START_PLAY =            "start_play",
    START_LEVEL =           "start_level",
    SECOND_CHANCE =         "second_chance",
    SHOW_BUTTON_REWARD =    "show_button_reward",
    SHOW_VIDEO_REWARD =     "show_video_reward",
    SHOW_INTERSTITIAL =     "show_interstitial",
    SHARE =                 "share",
    CHALLENGE_STARTED =     "challenge_started",
    CHALLENGE_WON =         "challenge_won",
    CHALLENGE_FAILED =      "challenge_failed",
    WATCH_VIDEO =           "watch_video",
    MAIN =                  "main",
    CHALLENGE =             "challenge",
    PURCHASE =              "purchase",
    REWARD_COIN =           "COIN",
    REWARD_MONEY =          "MONEY",
    REWARD_GEM =            "GEM",
}

export interface GamePixSdk {
    lang(): string;
    loading(value: number): void;
    loaded(): Promise<void>;

    gameAction(): void;
    gameStop(): void;
    updateScore(score: number): void;
    updateLevel(leven: number): void;

    rewardAd(): Promise<{success: boolean}>;
    happyMoment(): void;

    localStorage: Storage;

    // should set
    pause: () => void;
    resume: () => void;

    // porting communication layer
    ping?: (event: GamePixConst, payload: any) => void;
    hook?: (event: GamePixConst, payload: any, success: () => void, fail: () => void) => void;
}
