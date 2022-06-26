/**
 * Created by qixiaowei on 2016/10/9.
 */
/**
 * @version v1.2
 * getPos: custom logoPos(TL, TR, x:y);
 *
 * @param {boolean} isFirst
 * @param {string} align
 * @param {boolean} isHorizontal
 * @param {string} aspect
 * @constructor
 */
function C4JCommon(_isFirstScreen, _logoAlign, _align, _aspect, _isHorizontal, _container) {
    C4JCommon.unload();

    var logoSize = {width: 100, height: 70};
    var btnSize = {width: 65, height: 70};

    var isFirstScreen = typeof _isFirstScreen == "undefined" ? false : _isFirstScreen;
    var logoAlign = typeof _logoAlign == "undefined" ? "TM" : _logoAlign;
    var align = (typeof _align == "undefined") ? "TL" : _align;
    align = align.toUpperCase();
    var toAspect = typeof _aspect == "undefined" ? "R" : _aspect;
    toAspect = toAspect.toUpperCase();
    var isHorizontal = typeof _isHorizontal == "undefined" ? true : _isHorizontal;
    var container = typeof _container == "undefined" ? s_oStage : _container;

    var btnContainer = new createjs.Container();
    container.addChild(btnContainer);

    var TB = "T";
    var LR = "L";
    var cellWidth = 79;
    var logo = null;
    var self = this;
    var btns = [
        {
            "name": "credits",
            "enabled": APIDelegate.CreditsEnabled,
            "callback": APIDelegate.clickCredits,
            "btn": null
        },
        {
            "name": "more",
            "enabled": APIDelegate.MoregamesEnabled,
            "callback": APIDelegate.clickMore,
            "btn": null
        },
        {
            "name": "fullscreen",
            "enabled": APIDelegate.FullscreenEnabled,
            "callback": APIDelegate.clickFullscreen,
            "btn": null
        }
    ];

    function getPos(__align, cellSize, rect) {
        var pos = {x: 0, y: 0};
        if (__align.indexOf(":") != -1) {
            var arr = __align.split(":");
            pos.x = parseInt(arr[0]);
            pos.y = parseInt(arr[1]);
            return pos;
        }

        var arr = __align.split("");
        TB = arr[0];
        LR = arr[1];
        if (TB == "T") {
            pos.y = cellSize.height / 2 + 10 + rect.y;
        } else if (TB == "M") {
            pos.y = CANVAS_HEIGHT / 2;
        } else if (TB == "B") {
            pos.y = CANVAS_HEIGHT - cellSize.height / 2 - 10 - rect.y;
        }

        if (LR == "L") {
            pos.x = cellSize.width / 2 + 10 + rect.x;
        } else if (LR == "M") {
            pos.x = CANVAS_WIDTH / 2;
        } else if (LR == "R") {
            pos.x = CANVAS_WIDTH - cellSize.width / 2 - 10 - rect.x;
        }
        return pos;
    }

    /**
     * init common buttons
     */
    function initCommonBtns() {
        align = align.toUpperCase();
        var _sprite = s_oSpriteLibrary.getSprite('logo');
        var _btn = new CGfxButton(0, 0, _sprite, btnContainer);
        _btn.addEventListener(ON_MOUSE_UP, APIDelegate.clickLogo, APIDelegate);
        logo = _btn;

        for (var i = 0, len = btns.length, index = 0; i < len; i++) {
            index = i + 1 - isFirstScreen;
            if (index >= len) {
                continue;
            }
            var cfg = btns[index];
            if (cfg.enabled) {
                var _sprite = s_oSpriteLibrary.getSprite(cfg.name);
                var pos = {x: 0, y: 0};
                var _btn = new CGfxButton(pos.x, pos.y, _sprite, btnContainer);
                _btn.addEventListener(ON_MOUSE_UP, cfg.callback, APIDelegate);
                btns[index].btn = _btn;
            }
        }
        refreshPosition(s_iOffsetX, s_iOffsetY);
    };

    function refreshPosition(offsetX, offsetY) {
        if (!logo) {
            return;
        }
        var canvas = $("#gameCanvas")[0];
        rect = {
            x: offsetX,
            y: offsetY,
            width: $(canvas).width(),
            height: $(canvas).height()
        };
        _btn = logo;
        var pos = getPos(logoAlign, logoSize, rect);
        _btn.setPosition(pos.x, pos.y);

        var startPos = getPos(align, btnSize, rect);
        for (var i = 0, len = btns.length, index = 0; i < len; i++) {
            index = i + 1 - isFirstScreen;
            if (index >= len) {
                continue;
            }
            var cfg = btns[index];
            if (cfg.enabled) {
                var _sprite = s_oSpriteLibrary.getSprite(cfg.name);
                var pos = {x: startPos.x, y: (TB == "T" && LR == "R") ? startPos.y + 70 : startPos.y};
                if (toAspect == "T") {
                    pos.y = startPos.y - (cellWidth + 10) * i;
                } else if (toAspect == "B") {
                    pos.y = startPos.y + (cellWidth + 10) * i;
                } else if (toAspect == "R") {
                    pos.x = startPos.x + (cellWidth + 10) * i;
                } else if (toAspect == "L") {
                    pos.x = startPos.x - (cellWidth + 10) * i;
                }
                var _btn = btns[index].btn
                _btn.setPosition(pos.x, pos.y);
            }
        }
    };

    this.unload = function () {
        if (logo) {
            logo.unload();
        }
        logo = null;
        for (var i = 0, len = btns.length, index = 0; i < len; i++) {
            var cfg = btns[i];
            if (cfg && cfg.btn) {
                cfg.btn.unload();
                cfg.btn = null;
            }
        }
        if (btnContainer) {
            container.removeChild(btnContainer);
        }
        btnContainer = null;
        C4JCommon.instance = null;
    };

    initCommonBtns(isFirstScreen, align);

    $(window).on("gameResize", function (event, offsetX, offsetY) {
        refreshPosition(offsetX, offsetY);
    });

    C4JCommon.instance = this;
}
C4JCommon.unload = function () {
    if (C4JCommon.instance) {
        C4JCommon.instance.unload();
    }
};
C4JCommon.show = function (_isFirstScreen, _logoAlign, _align, _aspect, _isHorizontal, _container) {
    new C4JCommon(_isFirstScreen, _logoAlign, _align, _aspect, _isHorizontal, _container)
};
C4JCommon.instance = null;