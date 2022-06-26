function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;

    var _oMenu;
    var _oGame;
    var _oTeamChoose;
    var _totalSound = 0;
    var _aTeamLoadedBowler = new Array();

    this.initContainer = function () {
        var canvas = s_oCanvas = document.getElementById("gameCanvas");
        $(canvas).attr("width", CANVAS_WIDTH);
        $(canvas).attr("height", CANVAS_HEIGHT);
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);

        s_bMobile = jQuery.browser.mobile;
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
            $('body').on('contextmenu', '#gameCanvas', function (e) {
                return false;
            });
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();

        this.setLoadedArray();

        this.preloaderReady();
    };

    this.preloaderReady = function () {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            this._initSounds();
        }

        this._loadImages();
        _bUpdate = true;
        APIDelegate.loadStart();
    };

    this.soundLoaded = function (evt) {
        _iCurResource++;
        _totalSound--;
        if (_totalSound == 0) {
            soundLoaded = true;
        }
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        APIDelegate.loadProgress(iPerc);
        if (_iCurResource === RESOURCE_TO_LOAD) {
            APIDelegate.loadComplete();
        }

    };

    this._initSounds = function () {
        if (!createjs.Sound.initializeDefaultPlugins()) {
            return;
        }

        if (navigator.userAgent.indexOf("Opera") > 0 || navigator.userAgent.indexOf("OPR") > 0) {
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

            createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack");
            createjs.Sound.registerSound("./sounds/buzzer.ogg", "buzzer");

            createjs.Sound.registerSound("./sounds/drop_bounce_grass.ogg", "drop_bounce_grass");
            createjs.Sound.registerSound("./sounds/hit_ball.ogg", "hit_ball");

            createjs.Sound.registerSound("./sounds/crowd_cheering.ogg", "crowd_cheering");
            createjs.Sound.registerSound("./sounds/applauses.ogg", "applauses");

            createjs.Sound.registerSound("./sounds/crowd_ohhh.ogg", "crowd_ohhh");
            createjs.Sound.registerSound("./sounds/click.ogg", "click");

        } else {
            createjs.Sound.alternateExtensions = ["ogg"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

            createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack");
            createjs.Sound.registerSound("./sounds/buzzer.mp3", "buzzer");

            createjs.Sound.registerSound("./sounds/drop_bounce_grass.mp3", "drop_bounce_grass");
            createjs.Sound.registerSound("./sounds/hit_ball.mp3", "hit_ball");

            createjs.Sound.registerSound("./sounds/crowd_cheering.mp3", "crowd_cheering");
            createjs.Sound.registerSound("./sounds/applauses.mp3", "applauses");

            createjs.Sound.registerSound("./sounds/crowd_ohhh.mp3", "crowd_ohhh");
            createjs.Sound.registerSound("./sounds/click.mp3", "click");
        }

        _totalSound = 8;
        RESOURCE_TO_LOAD += _totalSound;
    };

    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("logo", APIDelegate.LogoUrl);
        s_oSpriteLibrary.addSprite("credits", "./sprites/credits.png");
        s_oSpriteLibrary.addSprite("fullscreen", "./sprites/fullscreen.png");
        s_oSpriteLibrary.addSprite("more", "./sprites/more.png");

        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");

        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");

        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("preloader_anim", "./sprites/preloader_anim.png");

        s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");

        s_oSpriteLibrary.addSprite("1", "./sprites/1.png");
        s_oSpriteLibrary.addSprite("2", "./sprites/2.png");
        s_oSpriteLibrary.addSprite("3", "./sprites/3.png");

        s_oSpriteLibrary.addSprite("bg_select_team", "./sprites/bg_select_team.jpg");
        s_oSpriteLibrary.addSprite("bg_select_mode", "./sprites/bg_select_mode.jpg");
        s_oSpriteLibrary.addSprite("flag_selection", "./sprites/flag_selection.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");

        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");

        s_oSpriteLibrary.addSprite("bg_text", "./sprites/bg_text.png");
        s_oSpriteLibrary.addSprite("bowler_mode", "./sprites/bowler_mode.png");

        s_oSpriteLibrary.addSprite("bg_game_bowler", "./sprites/bg_game_bowler.jpg");
        s_oSpriteLibrary.addSprite("ball_game", "./sprites/ball_game.png");
        s_oSpriteLibrary.addSprite("ball_shadow", "./sprites/ball_shadow.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");

        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("help_mouse", "./sprites/help_mouse.png");
        s_oSpriteLibrary.addSprite("help_touch", "./sprites/help_touch.png");

        for (var j = 0; j < TOT_TEAMS; j++) {
            s_oSpriteLibrary.addSprite("glove_" + j, "./sprites/glove_" + j + ".png");
            s_oSpriteLibrary.addSprite("flag_" + j, "./sprites/flag_" + j + ".png");
        }
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        APIDelegate.loadProgress(iPerc);
        if (_iCurResource === RESOURCE_TO_LOAD) {
            APIDelegate.loadComplete();
        }
    };
    this.enterGame = function () {
        isEnterGamed = true;
        this.playSound();
        this.gotoMenu();
    };

    this.playSound = function () {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            s_oSoundTrack = createjs.Sound.play("soundtrack", {loop: -1});
        }
    };
    this._onAllImagesLoaded = function () {

    };

    this._loadChoosedTeam = function (iPlayerTeam, iOpponentTeam) {
        s_iPlayerTeam = iPlayerTeam;
        s_iOpponentTeam = iOpponentTeam;
        _iCurResource = 0;
        RESOURCE_TO_LOAD = 0;

        if (_aTeamLoadedBowler[iOpponentTeam]) {
            this.gotoGame(s_iPlayerTeam, s_iOpponentTeam);
            return;
        }

        s_oSpriteLibrary.init(this._onTeamsLoaded, this._onAllImagesLoaded, this);

        for (var i = 0; i < NUM_SPRITE_BATTER_BOWLER_MODE; i++) {
            if (_aTeamLoadedBowler[iOpponentTeam] === false) {
                s_oSpriteLibrary.addSprite("batter_" + iOpponentTeam + "_" + i, "./sprites/batter_" + iOpponentTeam + "/batter_" + iOpponentTeam + "_" + i + ".png");
            }
        }
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onTeamsLoaded = function () {
        _iCurResource++;
        if (_iCurResource === RESOURCE_TO_LOAD) {
            this.gotoGame(s_iPlayerTeam, s_iOpponentTeam);
        }
    };

    this.setLoadedArray = function () {
        for (var i = 0; i < TOT_TEAMS; i++) {
            _aTeamLoadedBowler[i] = false;
        }
    };

    this.gotoMenu = function () {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoGame = function (iPlayerTeam, iOpponentTeam) {
        _oTeamChoose.unload();

        _aTeamLoadedBowler[s_iOpponentTeam] = true;
        _oGame = new CGame(_oData, iPlayerTeam, iOpponentTeam);

        _iState = STATE_GAME;
    };

    this.gotoTeamChoose = function () {
        _oTeamChoose = new CTeamChoose();
        _iState = STATE_MENU;
    };

    this.stopUpdate = function () {
        _bUpdate = false;
    };

    this.startUpdate = function () {
        _bUpdate = true;
    };

    this._update = function (event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);
    };

    s_oMain = this;

    _oData = oData;

    this.initContainer();
}
var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;
var s_iPlayerTeam;
var s_iOpponentTeam;
var s_iAdsLevel = 1;

var s_oStage;
var s_oMain;
var s_oBall;
var s_oSpriteLibrary;
var s_oSoundTrack;
var s_oBgSound;
var s_oCanvas;
var s_iCanvasResizeHeight;
var s_iCanvasResizeWidth;
var s_iCanvasOffsetHeight;
var s_iCanvasOffsetWidth;

APIDelegate.startup(function () {
    var oMain = new CMain({
        lives: 3, //THIS PARAM SET THE NUMBER OF LIVES
        score_ball_caught: 100, //ADD SCORE WHEN BALL IS CAUGHT, SCORE IS SUBTRACTED BY PRECISION OF CAUGHT
        ball_force_left_right_start: 0.1, //START FORCE DIRECTION LEFT RIGHT
        ball_force_left_right_step: 0.07, //ADD FORCE TO DIRECTION LEFT RIGHT
        ball_force_left_right_max: 0.55, //MAX FORCE TO BALL DIRECTION
        ball_force_up_start: 2, //START FORCE DIRECTION UP
        ball_force_up_step: 0.1, //ADD FORCE TO FORCE UP
        ball_force_up_max: 2.3, //MAX FORCE TO BALL DIRECTION UP
        ball_start_velocity: 20, //START FORCE APPLY TO BALL
        ball_step_velocity: 0.5, //STEP FORCE APPLY TO BALL
        ball_max_velocity: 23, //MAX FORCE APPLY TO BALL
        score_perfect_ball_saved: 10, //ADD SCRORE WHEN THE GUANTES SAVE BALL LOCKED
        perfect_ball_saved_point: {x: 1.1, z: 1.2}, //POINT COLLISION FOR LOCKED BALL IN HANDS
        num_levels_for_ads: 2//NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
        //////// THIS FEATURE  IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN.///////////////////////////
        /////////////////// YOU CAN GET IT AT: /////////////////////////////////////////////////////////
        // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421 ///////////
    });


    $(oMain).on("start_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartSession();
        }
    });

    $(oMain).on("end_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndSession();
        }
    });

    $(oMain).on("start_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartLevel({level: iLevel});
        }
    });

    $(oMain).on("restart_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeRestartLevel({level: iLevel});
        }
    });

    $(oMain).on("end_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndLevel({level: iLevel});
        }
    });

    $(oMain).on("save_score", function (evt, iScore, szMode) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeSaveScore({score: iScore, mode: szMode});
        }
    });

    $(oMain).on("show_interlevel_ad", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShowInterlevelAD();
        }
    });

    $(oMain).on("share_event", function (evt, iScore) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShareEvent({
                img: TEXT_SHARE_IMAGE,
                title: TEXT_SHARE_TITLE,
                msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1
            });
        }
    });

    if (isIOS()) {
        setTimeout(function () {
            sizeHandler();
        }, 200);
    } else {
        sizeHandler();
    }
    APIDelegate.enterGame(s_oMain.enterGame, oMain);
});