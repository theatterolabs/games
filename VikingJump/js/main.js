(function() {
	var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		b = "undefined" !== typeof module && module.exports,
		d = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		c = function() {
			for (var b, d = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
					"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
				], c = 0, h = d.length, f = {}; c < h; c++)
				if ((b = d[c]) && b[1] in a) {
					for (c = 0; c < b.length; c++) f[d[0][c]] =
						b[c];
					return f
				} return !1
		}(),
		f = {
			change: c.fullscreenchange,
			error: c.fullscreenerror
		},
		g = {
			request: function(b) {
				var e = c.requestFullscreen;
				b = b || a.documentElement;
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[e]();
				else b[e](d && Element.ALLOW_KEYBOARD_INPUT)
			},
			exit: function() {
				a[c.exitFullscreen]()
			},
			toggle: function(a) {
				this.isFullscreen ? this.exit() : this.request(a)
			},
			onchange: function(a) {
				this.on("change", a)
			},
			onerror: function(a) {
				this.on("error", a)
			},
			on: function(b, c) {
				var d = f[b];
				d && a.addEventListener(d, c, !1)
			},
			off: function(b,
				d) {
				var c = f[b];
				c && a.removeEventListener(c, d, !1)
			},
			raw: c
		};
	c ? (Object.defineProperties(g, {
		isFullscreen: {
			get: function() {
				return !!a[c.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return a[c.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function() {
				return !!a[c.fullscreenEnabled]
			}
		}
	}), b ? module.exports = g : window.screenfull = g) : b ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
	s_bIsIphone = !1,
	s_iOffsetX, s_iOffsetY;
(function(a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
		4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
	sizeHandler()
});

function trace(a) {
	console.log(a)
}

function calculateIntersection(a, b, d, c) {
	var f, g, l;
	d = a.x + (d || 0) + (f = a.width / 2);
	a = a.y + (c || 0) + (c = a.height / 2);
	var e = b.x + (g = b.width / 2);
	b = b.y + (l = b.height / 2);
	d = Math.abs(d - e) - (f + g);
	f = Math.abs(a - b) - (c + l);
	return 0 > d && 0 > f ? {
		width: -d,
		height: -f
	} : null
}

function calculateObj2ObjCollision(a, b, d, c) {
	c = c || {
		x: 0,
		y: 0
	};
	"x" != b && "y" != b && (b = "x");
	for (var f = "x" == b ? "width" : "height", g = "x" == b ? "y" : "x", l = "x" == b ? "height" : "width", e = null; !e;)
		if (d.isVisible && (e = calculateIntersection(d, a, c.x, c.y)), !e && d.isVisible) {
			var k = d[b] > a[b] && d[b] + c[b] < a[b],
				h = !(d[g] + d[l] < a[g]) && !(d[g] > a[g] + a[l]);
			(d[b] < a[b] && d[b] + c[b] > a[b] || k) && h ? c[b] = a[b] - d[b] : cc++
		} e && (c[b] -= Math.abs(c[b]) / c[b] * e[f]);
	return e
}

function calculateObj2ArrCollision(a, b, d, c) {
	c = c || {
		x: 0,
		y: 0
	};
	"x" != b && "y" != b && (b = "x");
	for (var f = "x" == b ? "width" : "height", g = "x" == b ? "y" : "x", l = "x" == b ? "height" : "width", e, k = null, h = 0; !k && h < d.length;)
		if (e = createRect(d[h].x - OBST_WIDTH / 2, d[h].y - OBST_HEIGHT / 2, OBST_WIDTH, OBST_HEIGHT), d[h].isVisible && (k = calculateIntersection(a, e, c.x, c.y)), !k && d[h].isVisible) {
			var m = a[b] > e[b] && a[b] + c[b] < e[b],
				p = !(a[g] + a[l] < e[g]) && !(a[g] > e[g] + e[l]);
			(a[b] < e[b] && a[b] + c[b] > e[b] || m) && p ? c[b] = e[b] - a[b] : h++
		} k && (c[b] -= Math.abs(c[b]) / c[b] * k[f]);
	return k
}

function isChrome() {
	return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
	var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
	for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
		if (navigator.platform === a.pop()) return !0;
	return s_bIsIphone = !1
}

function isRetina() {
	s_bIsRetina = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches ? !0 : !1
}

function createRect(a, b, d, c) {
	var f = new createjs.Rectangle;
	f.setValues(a, b, d, c);
	return f
}

function getBounds(a) {
	var b = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (a instanceof createjs.Bitmap) {
		var d = a.localToGlobal(0, 0);
		var c = {
			width: a.image.width,
			height: a.image.height
		}
	} else if (a instanceof createjs.BitmapAnimation) d = a.localToGlobal(0, 0), c = a.spriteSheet._frames[a.currentFrame];
	else return b;
	b.width = c.width * Math.abs(a.scaleX);
	b.x = 0 <= a.scaleX ? d.x : d.x - b.width;
	b.height = c.height * Math.abs(a.scaleY);
	b.y = 0 <= a.scaleX ? d.y : d.y - b.height;
	return b
}

function getSize(a) {
	var b = a.toLowerCase(),
		d = window.document,
		c = d.documentElement;
	if (void 0 === window["inner" + a]) a = c["client" + a];
	else if (window["inner" + a] != c["client" + a]) {
		var f = d.createElement("body");
		f.id = "vpw-test-b";
		f.style.cssText = "overflow:scroll";
		var g = d.createElement("div");
		g.id = "vpw-test-d";
		g.style.cssText = "position:absolute;top:-1000px";
		g.innerHTML = "<style>@media(" + b + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
		f.appendChild(g);
		c.insertBefore(f, d.head);
		a = 7 == g["offset" + a] ? c["client" + a] : window["inner" + a];
		c.removeChild(f)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	sizeHandler()
}

function getIOSWindowHeight() {
	return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
	var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
	return 1 < a ? a : 0
}

function sizeHandler() {
	window.scrollTo(0, 1);
	if ($("#canvas")) {
		var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
		var b = getSize("Width");
		_checkOrientation(b, a);
		var d = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
			c = CANVAS_WIDTH * d;
		d *= CANVAS_HEIGHT;
		if (d < a) {
			var f = a - d;
			d += f;
			c += CANVAS_WIDTH / CANVAS_HEIGHT * f
		} else c < b && (f = b - c, c += f, d += CANVAS_HEIGHT / CANVAS_WIDTH * f);
		f = a / 2 - d / 2;
		var g = b / 2 - c / 2,
			l = CANVAS_WIDTH / c;
		if (g * l < -EDGEBOARD_X || f * l < -EDGEBOARD_Y) d = Math.min(a / (CANVAS_HEIGHT - 2 *
			EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * d, d *= CANVAS_HEIGHT, f = (a - d) / 2, g = (b - c) / 2, l = CANVAS_WIDTH / c;
		s_iOffsetX = -1 * g * l;
		s_iOffsetY = -1 * f * l;
		0 <= f && (s_iOffsetY = 0);
		0 <= g && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * d, canvas.style.width = c + "px", canvas.style.height = d + "px", s_iScaleFactor =
			2 * Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = d, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
		$("#canvas").css("left", g + "px");
		fullscreenHandler()
	}
}

function _checkOrientation(a, b) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function createBitmap(a, b, d) {
	var c = new createjs.Bitmap(a),
		f = new createjs.Shape;
	b && d ? f.graphics.beginFill("#fff").drawRect(0, 0, b, d) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	c.hitArea = f;
	return c
}

function createSprite(a, b, d, c, f, g) {
	a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
	b = new createjs.Shape;
	b.graphics.beginFill("#000000").drawRect(-d, -c, f, g);
	a.hitArea = b;
	return a
}

function randomFloatBetween(a, b, d) {
	"undefined" === typeof d && (d = 2);
	return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(d))
}

function formatTime(a) {
	a /= 1E3;
	var b = Math.floor(a / 60);
	a = Math.floor(a - 60 * b);
	var d = "";
	d = 10 > b ? d + ("0" + b + ":") : d + (b + ":");
	return 10 > a ? d + ("0" + a) : d + a
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
	for (var b = a.length, d, c; 0 < b;) c = Math.floor(Math.random() * b), b--, d = a[b], a[b] = a[c], a[c] = d;
	return a
}
NoClickDelay.prototype = {
	handleEvent: function(a) {
		switch (a.type) {
			case "touchstart":
				this.onTouchStart(a);
				break;
			case "touchmove":
				this.onTouchMove(a);
				break;
			case "touchend":
				this.onTouchEnd(a)
		}
	},
	onTouchStart: function(a) {
		a.preventDefault();
		this.moved = !1;
		this.element.addEventListener("touchmove", this, !1);
		this.element.addEventListener("touchend", this, !1)
	},
	onTouchMove: function(a) {
		this.moved = !0
	},
	onTouchEnd: function(a) {
		this.element.removeEventListener("touchmove", this, !1);
		this.element.removeEventListener("touchend",
			this, !1);
		if (!this.moved) {
			a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
			3 == a.nodeType && (a = a.parentNode);
			var b = document.createEvent("MouseEvents");
			b.initEvent("click", !0, !0);
			a.dispatchEvent(b)
		}
	}
};

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var b = window.location.search.substring(1).split("&"), d = 0; d < b.length; d++) {
		var c = b[d].split("=");
		if (c[0] == a) return c[1]
	}
}

function playSound(a, b, d) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(b), s_aSounds[a].loop(d), s_aSounds[a]) : null
}

function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, b) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(b)
}

function setMute(a, b) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(b)
}

function easeLinear(a, b, d, c) {
	return d * a / c + b
}

function collisionWithCircle(a, b, d) {
	var c = a.getX() - b.getX(),
		f = a.getY() - b.getY();
	return Math.sqrt(c * c + f * f) < a.getCollision() * d + b.getCollision() * d ? !0 : !1
}
(function() {
	function a(a) {
		var c = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		a = a || window.event;
		a.type in c ? document.body.className = c[a.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var b = "hidden";
	b in document ? document.addEventListener("visibilitychange", a) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (b = "webkitHidden") in
		document ? document.addEventListener("webkitvisibilitychange", a) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function saveItem(a, b) {
	s_bStorageAvailable && localStorage.setItem(a, b)
}

function getItem(a) {
	return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function fullscreenHandler() {
	ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function extractHostname(a) {
	a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
	a = a.split(":")[0];
	return a = a.split("?")[0]
}

function extractRootDomain(a) {
	a = extractHostname(a);
	var b = a.split("."),
		d = b.length;
	2 < d && (a = b[d - 2] + "." + b[d - 1]);
	return a
}
var getClosestTop = function() {
		var a = window,
			b = !1;
		try {
			for (; a.parent.document !== a.document;)
				if (a.parent.document) a = a.parent;
				else {
					b = !0;
					break
				}
		} catch (d) {
			b = !0
		}
		return {
			topFrame: a,
			err: b
		}
	},
	getBestPageUrl = function(a) {
		var b = a.topFrame,
			d = "";
		if (a.err) try {
			try {
				d = window.top.location.href
			} catch (f) {
				var c = window.location.ancestorOrigins;
				d = c[c.length - 1]
			}
		} catch (f) {
			d = b.document.referrer
		} else d = b.location.href;
		return d
	},
	TOPFRAMEOBJ = getClosestTop(),
	PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
	for (var a = extractRootDomain(PAGE_URL), b = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], d = 0; d < b.length; d++)
		if (b[d] === a) return !0;
	return !0
}

function CSpriteLibrary() {
	var a, b, d, c, f, g;
	this.init = function(l, e, k) {
		d = b = 0;
		c = l;
		f = e;
		g = k;
		a = {}
	};
	this.addSprite = function(c, d) {
		a.hasOwnProperty(c) || (a[c] = {
			szPath: d,
			oSprite: new Image
		}, b++)
	};
	this.getSprite = function(b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function() {
		f.call(g)
	};
	this._onSpriteLoaded = function() {
		c.call(g);
		++d === b && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
				this.oSpriteLibrary._onSpriteLoaded()
			},
			a[b].oSprite.src = a[b].szPath
	};
	this.getNumSprites = function() {
		return b
	}
}
var CANVAS_WIDTH = 768,
	CANVAS_HEIGHT = 1400,
	EDGEBOARD_X = 40,
	EDGEBOARD_Y = 260,
	FPS = 30,
	FPS_TIME = 1E3 / FPS,
	DISABLE_SOUND_MOBILE = !1,
	PRIMARY_FONT = "gomarice_rocks-webfont",
	SCORE_ITEM_NAME = "olaf_the_viking_bestscore",
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	ON_COLLISION = 6,
	STARTX = 153,
	STARTY = 1120,
	GRAVITY = .98,
	OBST_WIDTH, OBST_HEIGHT, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_SCORE = "SCORE",
	TEXT_CREDITS_DEVELOPED =
	"DEVELOPED BY",
	TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.",
	TEXT_HELP = "CLICK AND HOLD TO INCREASE THE JUMP STRENGTH, RELEASE TO BOUNCE",
	TEXT_BEST_SCORE = "BEST SCORE",
	TEXT_YOUR_SCORE = "FINAL SCORE",
	TEXT_SHARE_IMAGE = "200x200.jpg",
	TEXT_SHARE_TITLE = "Congratulations!",
	TEXT_SHARE_MSG1 = "You collected <strong>",
	TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
	TEXT_SHARE_SHARE1 = "My score is ",
	TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
	var a, b, d, c, f, g, l;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.loadSprites();
		l = new createjs.Container;
		s_oStage.addChild(l)
	};
	this.unload = function() {
		l.removeAllChildren()
	};
	this.hide = function() {
		var a = this;
		setTimeout(function() {
			createjs.Tween.get(g).to({
				alpha: 1
			}, 500).call(function() {
				a.unload();
				s_oMain.gotoMenu()
			})
		}, 1E3)
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var e = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
		l.addChild(e);
		e = s_oSpriteLibrary.getSprite("progress_bar");
		c = createBitmap(e);
		c.x = CANVAS_WIDTH / 2 - e.width / 2;
		c.y = CANVAS_HEIGHT - 340;
		l.addChild(c);
		a = e.width;
		b = e.height;
		f = new createjs.Shape;
		f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, 1, b);
		l.addChild(f);
		c.mask = f;
		d = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
		d.x = CANVAS_WIDTH / 2;
		d.y = CANVAS_HEIGHT - 350;
		d.shadow = new createjs.Shadow("#000", 2, 2, 2);
		d.textBaseline = "alphabetic";
		d.textAlign = "center";
		l.addChild(d);
		g = new createjs.Shape;
		g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		g.alpha = 0;
		l.addChild(g)
	};
	this.refreshLoader = function(e) {
		d.text = e + "%";
		f.graphics.clear();
		e = Math.floor(e * a / 100);
		f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, e, b)
	};
	this._init()
}

function CMain(a) {
	var b, d = 0,
		c = 0,
		f = STATE_LOADING,
		g, l;
	this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = !1;
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.setFPS(FPS);
		navigator.userAgent.match(/Windows Phone/i) &&
			(DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		seekAndDestroy() ? g = new CPreloader : window.location.href = "https://www.atterolabs.com"
	};
	this.preloaderReady = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		this._loadImages();
		b = !0
	};
	this.soundLoaded = function() {
		d++;
		g.refreshLoader(Math.floor(d / c * 100));
		d === c && s_oMain._onRemovePreloader()
	};
	this._initSounds = function() {
		var a = [];
		a.push({
			path: "./sounds/",
			filename: "footstep",
			loop: !1,
			volume: 1,
			ingamename: "footstep"
		});
		a.push({
			path: "./sounds/",
			filename: "click",
			loop: !1,
			volume: 1,
			ingamename: "click"
		});
		a.push({
			path: "./sounds/",
			filename: "hero_falling",
			loop: !1,
			volume: 1,
			ingamename: "hero_falling"
		});
		a.push({
			path: "./sounds/",
			filename: "jump",
			loop: !1,
			volume: 1,
			ingamename: "jump"
		});
		a.push({
			path: "./sounds/",
			filename: "splash",
			loop: !1,
			volume: 1,
			ingamename: "splash"
		});
		a.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		c += a.length;
		s_aSounds = [];
		for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] =
			new Howl({
				src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
				autoplay: !1,
				preload: !0,
				loop: a[b].loop,
				volume: a[b].volume,
				onload: s_oMain.soundLoaded
			})
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
		s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		s_oSpriteLibrary.addSprite("bg_end_panel",
			"./sprites/bg_end_panel.png");
		s_oSpriteLibrary.addSprite("bg_help_panel", "./sprites/bg_help_panel.png");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game_0.jpg");
		s_oSpriteLibrary.addSprite("bg_game_1", "./sprites/bg_game_1.jpg");
		s_oSpriteLibrary.addSprite("bg_game_2", "./sprites/bg_game_2.jpg");
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
		s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
		s_oSpriteLibrary.addSprite("but_restart_small", "./sprites/but_restart_small.png");
		s_oSpriteLibrary.addSprite("obstacle_0", "./sprites/obstacle_0.png");
		s_oSpriteLibrary.addSprite("obstacle_1", "./sprites/obstacle_1.png");
		s_oSpriteLibrary.addSprite("obstacle_2", "./sprites/obstacle_2.png");
		s_oSpriteLibrary.addSprite("hero", "./sprites/hero.png");
		s_oSpriteLibrary.addSprite("1_parallax_0", "./sprites/parallax_0.png");
		s_oSpriteLibrary.addSprite("2_parallax_0", "./sprites/parallax_1.png");
		s_oSpriteLibrary.addSprite("3_parallax_0", "./sprites/parallax_2.png");
		s_oSpriteLibrary.addSprite("3_parallax_1",
			"./sprites/parallax_3.png");
		c += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		d++;
		g.refreshLoader(Math.floor(d / c * 100));
		d === c && this._onRemovePreloader()
	};
	this._onAllImagesLoaded = function() {};
	this._onRemovePreloader = function() {
		try {
			saveItem("ls_available", "ok")
		} catch (k) {
			s_bStorageAvailable = !1
		}
		g.unload();
		isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
		this.gotoMenu()
	};
	this.gotoMenu = function() {
		new CMenu;
		f = STATE_MENU
	};
	this.gotoGame = function(a) {
		l = new CGame(e,
			a);
		f = STATE_GAME;
		$(s_oMain).trigger("start_session")
	};
	this.stopUpdate = function() {
		b = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		b = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function(a) {
		if (!1 !== b) {
			var c = (new Date).getTime();
			s_iTimeElaps = c - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = c;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			f === STATE_GAME && l.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	var e = a;
	ENABLE_FULLSCREEN = a.fullscreen;
	ENABLE_CHECK_ORIENTATION = a.check_orientation;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_bFullscreen = !1,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_iLevelReached = 1,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
	s_oCanvas, s_iBestScore = 0,
	s_bStorageAvailable = !0,
	s_aSounds;

function CTextButton(a, b, d, c, f, g, l) {
	var e, k, h, m, p;
	this._init = function(a, b, c, d, f, g, l) {
		e = [];
		k = [];
		f = createBitmap(c);
		var n = Math.ceil(l / 20);
		p = new createjs.Text(d, "bold " + l + "px " + PRIMARY_FONT, "#000000");
		p.textAlign = "center";
		p.textBaseline = "alphabetic";
		var t = p.getBounds();
		p.x = c.width / 2 + n;
		p.y = Math.floor(c.height / 2) + t.height / 3 + n;
		m = new createjs.Text(d, "bold " + l + "px " + PRIMARY_FONT, g);
		m.textAlign = "center";
		m.textBaseline = "alphabetic";
		t = m.getBounds();
		m.x = c.width / 2;
		m.y = Math.floor(c.height / 2) + t.height / 3;
		h = new createjs.Container;
		h.x = a;
		h.y = b;
		h.regX = c.width / 2;
		h.regY = c.height / 2;
		h.addChild(f, p, m);
		s_oStage.addChild(h);
		s_bMobile || (h.cursor = "pointer");
		this._initListener()
	};
	this.unload = function() {
		h.off("mousedown");
		h.off("pressup");
		s_oStage.removeChild(h)
	};
	this.setVisible = function(a) {
		h.visible = a
	};
	this._initListener = function() {
		oParent = this;
		h.on("mousedown", this.buttonDown);
		h.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		e[a] = b;
		k[a] = c
	};
	this.buttonRelease = function() {
		h.scaleX = 1;
		h.scaleY = 1;
		playSound("click",
			1, !1);
		e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		h.scaleX = .9;
		h.scaleY = .9;
		e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
	};
	this.setTextPosition = function(a) {
		m.y = a;
		p.y = a + 2
	};
	this.setPosition = function(a, b) {
		h.x = a;
		h.y = b
	};
	this.setX = function(a) {
		h.x = a
	};
	this.setY = function(a) {
		h.y = a
	};
	this.getButtonImage = function() {
		return h
	};
	this.getX = function() {
		return h.x
	};
	this.getY = function() {
		return h.y
	};
	this._init(a, b, d, c, f, g, l);
	return this
}

function CToggle(a, b, d, c, f) {
	var g, l, e, k, h;
	this._init = function(a, b, c, d, f) {
		h = void 0 !== f ? f : s_oStage;
		l = [];
		e = [];
		f = new createjs.SpriteSheet({
			images: [c],
			frames: {
				width: c.width / 2,
				height: c.height,
				regX: c.width / 2 / 2,
				regY: c.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		g = d;
		k = createSprite(f, "state_" + g, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
		k.x = a;
		k.y = b;
		k.stop();
		s_bMobile || (k.cursor = "pointer");
		h.addChild(k);
		this._initListener()
	};
	this.unload = function() {
		k.off("mousedown", this.buttonDown);
		k.off("pressup",
			this.buttonRelease);
		h.removeChild(k)
	};
	this._initListener = function() {
		k.on("mousedown", this.buttonDown);
		k.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		l[a] = b;
		e[a] = c
	};
	this.setCursorType = function(a) {
		k.cursor = a
	};
	this.setActive = function(a) {
		g = a;
		k.gotoAndStop("state_" + g)
	};
	this.buttonRelease = function() {
		k.scaleX = 1;
		k.scaleY = 1;
		playSound("click", 1, !1);
		g = !g;
		k.gotoAndStop("state_" + g);
		l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(e[ON_MOUSE_UP], g)
	};
	this.buttonDown = function() {
		k.scaleX = .9;
		k.scaleY =
			.9;
		l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN])
	};
	this.setPosition = function(a, b) {
		k.x = a;
		k.y = b
	};
	this._init(a, b, d, c, f)
}

function CGfxButton(a, b, d, c) {
	var f, g, l, e, k, h, m, p, n;
	this._init = function(a, b, c) {
		f = !1;
		g = [];
		l = [];
		k = [];
		e = createBitmap(c);
		e.x = a;
		e.y = b;
		m = h = 1;
		e.regX = c.width / 2;
		e.regY = c.height / 2;
		s_bMobile || (e.cursor = "pointer");
		r.addChild(e);
		this._initListener()
	};
	this.unload = function() {
		e.off("mousedown", p);
		e.off("pressup", n);
		r.removeChild(e)
	};
	this.setVisible = function(a) {
		e.visible = a
	};
	this.setCursorType = function(a) {
		e.cursor = a
	};
	this._initListener = function() {
		p = e.on("mousedown", this.buttonDown);
		n = e.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		g[a] = b;
		l[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		g[a] = b;
		l[a] = c;
		k[a] = d
	};
	this.enable = function() {
		f = !1
	};
	this.disable = function() {
		f = !0
	};
	this.buttonRelease = function() {
		f || (e.scaleX = 0 < h ? 1 : -1, e.scaleY = 1, playSound("click", 1, !1), g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(l[ON_MOUSE_UP], k[ON_MOUSE_UP]))
	};
	this.buttonDown = function() {
		f || (e.scaleX = 0 < h ? .9 : -.9, e.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], k[ON_MOUSE_DOWN]))
	};
	this.rotation = function(a) {
		e.rotation =
			a
	};
	this.getButton = function() {
		return e
	};
	this.setPosition = function(a, b) {
		e.x = a;
		e.y = b
	};
	this.setX = function(a) {
		e.x = a
	};
	this.setY = function(a) {
		e.y = a
	};
	this.getButtonImage = function() {
		return e
	};
	this.setScaleX = function(a) {
		h = e.scaleX = a
	};
	this.getX = function() {
		return e.x
	};
	this.getY = function() {
		return e.y
	};
	this.pulseAnimation = function() {
		createjs.Tween.get(e).to({
			scaleX: .9 * h,
			scaleY: .9 * m
		}, 850, createjs.Ease.quadOut).to({
			scaleX: h,
			scaleY: m
		}, 650, createjs.Ease.quadIn).call(function() {
			q.pulseAnimation()
		})
	};
	this.trebleAnimation =
		function() {
			createjs.Tween.get(e).to({
				rotation: 5
			}, 75, createjs.Ease.quadOut).to({
				rotation: -5
			}, 140, createjs.Ease.quadIn).to({
				rotation: 0
			}, 75, createjs.Ease.quadIn).wait(750).call(function() {
				q.trebleAnimation()
			})
		};
	this.removeAllTweens = function() {
		createjs.Tween.removeTweens(e)
	};
	var r = void 0 !== c ? c : s_oStage;
	this._init(a, b, d);
	var q = this;
	return this
}

function CMenu() {
	var a, b, d, c, f, g, l, e, k, h, m, p, n = null,
		r = null;
	this._init = function() {
		l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(l);
		var q = s_oSpriteLibrary.getSprite("but_play");
		e = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 350, q);
		e.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		q = s_oSpriteLibrary.getSprite("but_credits");
		d = 20 + q.width / 2;
		c = q.height / 2 + 20;
		m = new CGfxButton(d, c, q);
		m.addEventListener(ON_MOUSE_UP, this._onCredits, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 ===
			s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - q.width / 4 - 20, g = q.height / 2 + 20, h = new CToggle(f, g, q, s_bAudioActive, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		q = window.document;
		var t = q.documentElement;
		n = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen;
		r = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (n = !1);
		n && screenfull.enabled && (q = s_oSpriteLibrary.getSprite("but_fullscreen"),
			a = d + q.width / 2 + 10, b = c, p = new CToggle(a, b, q, s_bFullscreen, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		k = new createjs.Shape;
		k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(k);
		createjs.Tween.get(k).to({
			alpha: 0
		}, 1E3).call(function() {
			s_oStage.removeChild(k)
		});
		s_bStorageAvailable ? (q = getItem("best_score"), null !== q && (s_iBestScore = q)) : new CMsgBox(TEXT_ERR_LS, s_oStage);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		e.unload();
		e = null;
		m.unload();
		s_oStage.removeChild(l);
		l = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) h.unload(), h = null;
		n && screenfull.enabled && p.unload();
		s_oMenu = null
	};
	this.refreshButtonPos = function(e, k) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(f - e, g + k);
		n && screenfull.enabled && p.setPosition(a + e, b + k);
		m.setPosition(d + e, c + k)
	};
	this.exitFromCredits = function() {};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onCredits = function() {
		new CCreditsPanel
	};
	this._onButPlayRelease = function() {
		this.unload();
		isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, !0));
		s_oMain.gotoGame()
	};
	this.resetFullscreenBut = function() {
		n && screenfull.enabled && p.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? r.call(window.document) : n.call(window.document.documentElement);
		sizeHandler()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame() {
	var a, b, d, c, f, g, l, e, k, h, m, p, n;
	this._init = function() {
		b = e = !1;
		var r = ["bg_game", "bg_game_1", "bg_game_2"],
			q = ["1_parallax_", "2_parallax_", "3_parallax_"];
		n = Math.floor(randomFloatBetween(0, r.length));
		setVolume("soundtrack", .4);
		g = new CParallax(r[n], 2, !0, !0, 0);
		0 === n ? l = new CParallax(q[n] + "0", 2, !0, !1, 1100) : 1 === n ? l = new CParallax(q[n] + "0", 2, !0, !1, CANVAS_HEIGHT) : 2 === n && (l = new CParallax(q[n], 2, !1, !1, CANVAS_HEIGHT));
		p = null !== getItem(SCORE_ITEM_NAME) ? getItem(SCORE_ITEM_NAME) : 0;
		h = 0;
		c = new CObstacle(s_oSpriteLibrary.getSprite("obstacle_" +
			n.toString()));
		f = new CCharacter(STARTX, STARTY, s_oSpriteLibrary.getSprite("hero"));
		d = new CInterface(p);
		c.update(0);
		k = 0;
		m = a = !0
	};
	this.unload = function() {
		d.unload();
		s_oStage.removeAllChildren();
		s_oGame = null
	};
	this.restart = function() {
		d.unload();
		s_oStage.removeAllChildren();
		this._init()
	};
	this.gameOver = function() {
		0 === n ? playSound("splash", 1, !1) : playSound("hero_falling", 1, !1);
		m = !1;
		d.gameOver();
		h > getItem(SCORE_ITEM_NAME) && saveItem(SCORE_ITEM_NAME, h)
	};
	this.increaseScore = function() {
		h++;
		d.refreshScore(h);
		b = !1
	};
	this.getScore = function() {
		return h
	};
	this.onExit = function() {
		setVolume("soundtrack", 1);
		s_oGame.unload();
		s_oMain.gotoMenu();
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("save_score", h);
		$(s_oMain).trigger("show_interlevel_ad")
	};
	this.getNextXPos = function() {
		return c.getNextXPos()
	};
	this.updateCollidables = function() {
		return c.getArray()
	};
	this.tapScreen = function() {
		b || (e = !0, f.setCharge(!0))
	};
	this.releaseScreen = function() {
		b || (e = !1, b = !0, f.updateGraphics(0), f.setCharge(!1), 25 < k && (k = 25), 10 > k && (k = 10), f.jump(k),
			f.isColliding() ? (c.setMoltiplier(0), g.setMoltiplier(0), l.setMoltiplier(0)) : (c.setMoltiplier(k), g.setMoltiplier(.2 * k), l.setMoltiplier(.6 * k)), k = 0)
	};
	this.setUpdObst = function(a) {
		m = a
	};
	this.update = function() {
		!1 !== a && (e && (k += 1, f.updateGraphics(k)), f.update(), !f.onGround() && m && (c.update(), g.update(), l.update()), b = !f.onGround())
	};
	s_oGame = this;
	this._init()
}
var s_oGame;

function CInterface(a) {
	var b, d, c, f, g, l, e, k, h, m, p, n = null,
		r = null,
		q, t, w, v, z;
	this._init = function(a) {
		var x = s_oSpriteLibrary.getSprite("but_exit");
		h = a;
		c = CANVAS_WIDTH - x.width / 2 - 10;
		f = x.height / 2 + 10;
		t = new createjs.Shape;
		t.graphics.beginFill("red").drawRect(0, 10, CANVAS_WIDTH, CANVAS_HEIGHT);
		t.alpha = .01;
		s_oStage.addChild(t);
		q = new CGfxButton(10, f, x);
		q.addEventListener(ON_MOUSE_UP, this._onExit, this);
		t.on("mousedown", function() {
			s_oGame.tapScreen()
		});
		t.on("pressup", function() {
			s_oGame.releaseScreen()
		});
		if (!1 === DISABLE_SOUND_MOBILE ||
			!1 === s_bMobile) {
			var y = s_oSpriteLibrary.getSprite("audio_icon");
			g = c - x.width / 2 - y.width / 4 - 10;
			l = f;
			e = new CToggle(g, l, y, s_bAudioActive, s_oStage);
			e.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
			b = g - y.width / 2 - 10;
			d = l
		} else b = c - x.width - 10, d = f;
		x = window.document;
		y = x.documentElement;
		n = y.requestFullscreen || y.mozRequestFullScreen || y.webkitRequestFullScreen || y.msRequestFullscreen;
		r = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (n = !1);
		n && screenfull.enabled &&
			(y = s_oSpriteLibrary.getSprite("but_fullscreen"), p = new CToggle(b, d, y, s_bFullscreen, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		v = new createjs.Text("Score: 0", "42px " + PRIMARY_FONT, "#000");
		v.x = CANVAS_WIDTH / 2 - 350;
		v.y = 40;
		v.outline = 2;
		k = new createjs.Text("Score: 0", "42px " + PRIMARY_FONT, "#d99b01");
		k.x = CANVAS_WIDTH / 2 - 350;
		k.y = 40;
		m = new createjs.Text("Best Score: " + a, "42px " + PRIMARY_FONT, "#d99b01");
		m.x = CANVAS_WIDTH / 2 - 150;
		m.y = 80;
		z = new createjs.Text("Best Score: " + a, "42px " + PRIMARY_FONT,
			"#000");
		z.x = CANVAS_WIDTH / 2 - 150;
		z.y = 35;
		z.outline = 2;
		s_oStage.addChild(z);
		s_oStage.addChild(m);
		s_oStage.addChild(v);
		s_oStage.addChild(k);
		w = new CEndPanel;
		s_bFirstPlay && (s_bFirstPlay = !1, new CHelpPanel);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshButtonPos = function(a, h) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || e.setPosition(g - a, l + h);
		n && screenfull.enabled && p.setPosition(b - a, d + h);
		k.y = 20 + h;
		v.y = 20 + h;
		m.y = 20 + h;
		z.y = 20 + h;
		q.setPosition(c - a, f + h)
	};
	this.refreshScore = function(a) {
		k.text = "Score: " + a;
		v.text =
			"Score: " + a;
		h < a && (m.text = "Best Score: " + a, z.text = "Best Score: " + a)
	};
	this.unload = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e.unload(), e = null;
		n && screenfull.enabled && p.unload();
		q.unload();
		s_oInterface = null
	};
	this._onExit = function() {
		s_oGame.unload();
		s_oMain.gotoMenu()
	};
	this.gameOver = function() {
		w.show()
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function() {
		n && screenfull.enabled && p.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease =
		function() {
			s_bFullscreen ? r.call(window.document) : n.call(window.document.documentElement);
			sizeHandler()
		};
	s_oInterface = this;
	this._init(a);
	return this
}
var s_oInterface = null,
	s_bFirstPlay = !0;

function CParallax(a, b, d, c, f) {
	var g, l, e, k, h, m, p, n;
	this.init = function(a, b, c, d, f) {
		m = .1;
		p = 0;
		n = d;
		var r = 0,
			t = Math.floor(randomFloatBetween(200, 600));
		f = Math.floor(randomFloatBetween(f, f + 100));
		var q = new createjs.Container;
		s_oStage.addChild(q);
		g = [];
		l = [];
		for (var v = 0; 2 > v; v++)
			for (var w = 0; w < b; w++) {
				var u = Math.floor(randomFloatBetween(0, 1)),
					A = !1 === c ? s_oSpriteLibrary.getSprite(a + w.toString()) : s_oSpriteLibrary.getSprite(a);
				h = A.height;
				k = A.width;
				l.push(k);
				null === d || !1 === d ? (1 === u ? (u = createBitmap(A), u.x = r, u.regY = h, u.y =
					f, u.scaleX = -1) : (u = createBitmap(A), u.x = r, u.regY = h, u.y = f), r += k + t) : (u = createBitmap(A), u.x = r, u.y = 0, r += k);
				q.addChild(u);
				g.push(u)
			}
		e = g.length - 1
	};
	this.setMoltiplier = function(a) {
		p = a
	};
	this.update = function() {
		var a = Math.floor(randomFloatBetween(200, 600)),
			b = Math.floor(randomFloatBetween(f, f + 100));
		if (!1 === n)
			for (var c = 0; c < g.length; c++) g[c].x <= -l[c] && (g[c].x = g[e].x + a), g[c].x -= m * p, e = c;
		else
			for (c = 0; c < g.length; c++) g[c].x <= -l[c] && (g[c].x = g[e].x + l[c], g[c].y = b), g[c].x -= m * p, e = c
	};
	this.init(a, b, d, c, f)
}

function CCharacter(a, b, d) {
	var c, f, g, l, e, k, h, m, p, n, r, q, t, w, v;
	this.init = function(a, b, d) {
		r = 0;
		v = w = !1;
		p = {
			images: [d],
			frames: {
				width: 120,
				height: 122,
				count: 32,
				regX: 60,
				regY: 61,
				spacing: 0,
				margin: 0
			},
			animations: {
				idle: [0, 14],
				jump: [15, 20],
				air: [18, 23],
				land: [24, 31],
				charge: [27]
			}
		};
		q = new createjs.SpriteSheet(p);
		e = new createjs.Sprite(q, "air");
		g = p.frames.height;
		l = p.frames.width;
		f = .5 * g;
		t = !1;
		e.x = a;
		e.y = b - b / 1.8;
		h = createRect(e.x - l / 2, e.y - f, l, g);
		s_oStage.addChild(e);
		n = new createjs.Shape;
		n.graphics.beginFill("rgba(255,0,0,1)").drawRect(0,
			0, 100, 5);
		n.regX = 50;
		n.x = e.x;
		n.y = e.y - g / 2;
		n.scaleX = 0;
		s_oStage.addChild(n);
		c = GRAVITY;
		m = !1
	};
	this.reset = function() {
		c = GRAVITY;
		k = !1
	};
	this.getSprite = function() {
		return e
	};
	this.getY = function() {
		return e.y
	};
	this.getX = function() {
		return e.x
	};
	this.getHeight = function() {
		return g
	};
	this.getWidth = function() {
		return l
	};
	this.setCharge = function(a) {
		t = a
	};
	this.onGround = function() {
		return k
	};
	this.isColliding = function() {
		return m
	};
	this.update = function() {
		c += 1;
		var a = {
				x: 0,
				y: c
			},
			b = {
				x: -s_oGame.getNextXPos(),
				y: 0
			},
			d = {
				x: s_oGame.getNextXPos(),
				y: 0
			},
			l = s_oGame.updateCollidables();
		h = createRect(e.x - 32, e.y - f, 64, g);
		var m = calculateObj2ArrCollision(h, "y", l, a);
		b = calculateObj2ArrCollision(h, "x", l, b);
		calculateObj2ArrCollision(h, "x", l, d);
		e.y += a.y;
		null !== b ? (s_oGame.setUpdObst(!1), m = null) : m ? (s_oGame.setUpdObst(!0), 0 === a.y && (!1 === w && (playSound("footstep", 1, !1), w = !0), k = !0, s_oGame.setUpdObst(!0)), c = 0) : !0 === k && (k = !1);
		null === m || k || s_oGame.increaseScore();
		n.x = e.x;
		n.y = e.y - g / 2;
		this.updateAnim();
		e.y > CANVAS_HEIGHT && !1 === v && (s_oGame.gameOver(), v = !0)
	};
	this.updateGraphics =
		function(a) {
			r = a;
			25 <= a && (r = 25);
			a = r / 25;
			n.alpha = 1;
			createjs.Tween.get(n).to({
				scaleX: a
			}, 100).call(function() {
				n.alpha = .001
			})
		};
	this.updateAnim = function() {
		k && "idle" !== e.currentAnimation && (e.gotoAndStop("air"), e.gotoAndPlay("idle"));
		k || "charge" !== e.currentAnimation || (e.gotoAndStop("charge"), e.gotoAndPlay("air"));
		k && "idle" === e.currentAnimation && !0 === t && (e.gotoAndStop("idle"), e.gotoAndPlay("charge"))
	};
	this.jump = function(a) {
		k && (playSound("jump", 1, !1), c += -a, w = !1)
	};
	this.init(a, b, d)
}

function CObstacle(a, b, d) {
	var c, f, g, l, e, k, h, m, p, n;
	this._init = function(a, b, d) {
		n = 1;
		p = -.5;
		c = Math.floor(a.height / 10);
		f = Math.floor(a.height / 5);
		g = Math.floor(2 * a.width);
		l = Math.floor(8 * a.width);
		e = a.width / 2;
		OBST_HEIGHT = a.height - 15;
		OBST_WIDTH = a.width - 25;
		this._initLevel()
	};
	this._initLevel = function() {
		var b = STARTX,
			d = STARTY,
			e = 0,
			n = 0;
		for (m = []; b < 2 * CANVAS_WIDTH + a.width;) {
			var p = createBitmap(a);
			p.regX = a.width / 2;
			p.regY = a.height / 2;
			p.x = b + e;
			p.y = d + n;
			s_oStage.addChild(p);
			b += e;
			e = Math.floor(randomFloatBetween(g, l));
			n = Math.floor(randomFloatBetween(c,
				f));
			m.push(p)
		}
		k = m.length - 1;
		h = -1
	};
	this.getArray = function() {
		return m
	};
	this.setMoltiplier = function(a) {
		n = a
	};
	this.getNextXPos = function() {
		return p * n
	};
	this.update = function() {
		for (var a = 0; a < m.length; a++) {
			if (m[a].x < -e) {
				var b = Math.floor(randomFloatBetween(g, l)),
					d = Math.floor(randomFloatBetween(c, f));
				m[a].x = b + m[k].x;
				m[a].y = d + STARTY;
				k = a
			}
			m[a].x += p * n;
			h !== a && m[a].x < STARTX && (h = a)
		}
	};
	this._init(a, b, d)
}

function CCreditsPanel() {
	var a, b, d, c, f, g, l, e, k, h;
	this._init = function() {
		g = new createjs.Shape;
		g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		g.alpha = 0;
		s_oStage.addChild(g);
		(new createjs.Tween.get(g)).to({
			alpha: .7
		}, 500);
		var m = s_oSpriteLibrary.getSprite("msg_box");
		h = new createjs.Container;
		h.y = CANVAS_HEIGHT + m.height / 2;
		s_oStage.addChild(h);
		a = createBitmap(m);
		a.regX = m.width / 2;
		a.regY = m.height / 2;
		a.x = CANVAS_WIDTH / 2;
		a.y = CANVAS_HEIGHT / 2;
		h.addChild(a);
		l = new createjs.Shape;
		l.graphics.beginFill("#0f0f0f").drawRect(0,
			0, CANVAS_WIDTH, CANVAS_HEIGHT);
		l.alpha = .01;
		l.on("click", this._onLogoButRelease);
		h.addChild(l);
		m = s_oSpriteLibrary.getSprite("but_exit");
		d = new CGfxButton(660, 550, m, h);
		d.addEventListener(ON_MOUSE_UP, this.unload, this);
		c = new createjs.Text(TEXT_CREDITS_DEVELOPED, "44px " + PRIMARY_FONT, "#d99b01");
		c.textAlign = "center";
		c.textBaseline = "alphabetic";
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2 - 80;
		f = new createjs.Text(TEXT_CREDITS_DEVELOPED, "44px " + PRIMARY_FONT, "#000");
		f.textAlign = "center";
		f.textBaseline = "alphabetic";
		f.x =
			CANVAS_WIDTH / 2;
		f.y = CANVAS_HEIGHT / 2 - 80;
		f.outline = 3;
		h.addChild(f);
		h.addChild(c);
		m = s_oSpriteLibrary.getSprite("logo_ctl");
		b = createBitmap(m);
		b.regX = m.width / 2;
		b.regY = m.height / 2;
		b.x = CANVAS_WIDTH / 2;
		b.y = CANVAS_HEIGHT / 2;
		h.addChild(b);
		e = new createjs.Text("www.atterolabs.com", "38px " + PRIMARY_FONT, "#d99b01");
		e.textAlign = "center";
		e.textBaseline = "alphabetic";
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2 + 120;
		k = new createjs.Text("www.atterolabs.com", "38px " + PRIMARY_FONT, "#000");
		k.textAlign = "center";
		k.textBaseline = "alphabetic";
		k.x = CANVAS_WIDTH / 2;
		k.y = CANVAS_HEIGHT / 2 + 120;
		k.outline = 3;
		h.addChild(k);
		h.addChild(e);
		(new createjs.Tween.get(h)).to({
			y: 0
		}, 1E3, createjs.Ease.backOut)
	};
	this.unload = function() {
		l.off("click", this._onLogoButRelease);
		d.unload();
		d = null;
		s_oStage.removeChild(g);
		s_oStage.removeChild(h);
		s_oMenu.exitFromCredits()
	};
	this._onLogoButRelease = function() {
		window.open("https://www.atterolabs.com", "_blank")
	};
	this._init()
}

function CEndPanel(a) {
	var b, d, c, f, g, l, e, k, h, m;
	this._init = function() {
		h = new createjs.Container;
		m = new createjs.Container;
		s_oStage.addChild(m);
		s_oStage.addChild(h);
		d = new createjs.Shape;
		d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		d.alpha = .01;
		b = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
		m.addChild(d);
		h.addChild(b);
		g = new createjs.Text(TEXT_YOUR_SCORE + ": " + s_oGame.getScore(), "54px " + PRIMARY_FONT, "#d99b01");
		l = new createjs.Text(TEXT_YOUR_SCORE + ": " + s_oGame.getScore(),
			"54px " + PRIMARY_FONT, "#000");
		null !== getItem(SCORE_ITEM_NAME) ? getItem(SCORE_ITEM_NAME) > s_oGame.getScore() ? (e = new createjs.Text(TEXT_BEST_SCORE + ": " + getItem(SCORE_ITEM_NAME), "58px " + PRIMARY_FONT, "#d99b01"), k = new createjs.Text(TEXT_BEST_SCORE + ": " + getItem(SCORE_ITEM_NAME), "58px " + PRIMARY_FONT, "#000000")) : (e = new createjs.Text(TEXT_BEST_SCORE + ": " + s_oGame.getScore(), "58px " + PRIMARY_FONT, "#d99b01"), k = new createjs.Text(TEXT_BEST_SCORE + ": " + s_oGame.getScore(), "58px " + PRIMARY_FONT, "#000000")) : (e = new createjs.Text(TEXT_BEST_SCORE +
			": 0", "58px " + PRIMARY_FONT, "#d99b01"), k = new createjs.Text(TEXT_BEST_SCORE + ": 0", "58px " + PRIMARY_FONT, "#000"));
		g.textAlign = "center";
		g.textBaseline = "alphabetic";
		g.x = h.getBounds().width / 2;
		g.y = 100;
		l.textAlign = "center";
		l.textBaseline = "alphabetic";
		l.x = h.getBounds().width / 2;
		l.y = 100;
		l.outline = 3;
		e.textAlign = "center";
		e.textBaseline = "alphabetic";
		e.x = h.getBounds().width / 2;
		e.y = 170;
		k.textAlign = "center";
		k.textBaseline = "alphabetic";
		k.x = h.getBounds().width / 2;
		k.y = 170;
		k.outline = 3;
		h.addChild(k);
		h.addChild(e);
		h.addChild(l);
		h.addChild(g);
		c = new CGfxButton(h.getBounds().width / 2 - 180, 250, s_oSpriteLibrary.getSprite("but_home"), h);
		c.addEventListener(ON_MOUSE_UP, this._onExit, this);
		f = new CGfxButton(h.getBounds().width / 2 + 180, 250, s_oSpriteLibrary.getSprite("but_restart"), h);
		f.addEventListener(ON_MOUSE_UP, this._onRestart, this);
		h.x = CANVAS_WIDTH / 2 - h.getBounds().width / 2;
		h.y = -h.getBounds().height
	};
	this.unload = function() {
		c.unload();
		c = null;
		f.unload();
		f = null;
		s_oStage.removeChild(h);
		s_oStage.removeChild(m)
	};
	this.show = function() {
		(new createjs.Tween.get(d)).to({
				alpha: .8
			},
			1E3);
		(new createjs.Tween.get(h)).to({
			y: 500
		}, 1E3, createjs.Ease.bounceOut);
		g.text = TEXT_YOUR_SCORE + " :" + s_oGame.getScore();
		l.text = TEXT_YOUR_SCORE + " :" + s_oGame.getScore();
		null !== getItem(SCORE_ITEM_NAME) && (getItem(SCORE_ITEM_NAME) < s_oGame.getScore() ? (e.text = TEXT_BEST_SCORE + " :" + s_oGame.getScore(), k.text = TEXT_BEST_SCORE + " :" + s_oGame.getScore()) : (e.text = TEXT_BEST_SCORE + " :" + getItem(SCORE_ITEM_NAME), k.text = TEXT_BEST_SCORE + " :" + getItem(SCORE_ITEM_NAME)))
	};
	this._onExit = function() {
		p.unload();
		s_oGame.onExit()
	};
	this._onRestart = function() {
		p.unload();
		s_oGame.restart()
	};
	var p = this;
	this._init(a)
}

function CHelpPanel() {
	var a, b, d, c;
	this._init = function() {
		c = new createjs.Container;
		s_oStage.addChild(c);
		a = createBitmap(s_oSpriteLibrary.getSprite("bg_help_panel"));
		c.addChild(a);
		b = new createjs.Text(TEXT_HELP, "52px " + PRIMARY_FONT, "#d99b01");
		d = new createjs.Text(TEXT_HELP, "52px " + PRIMARY_FONT, "#000");
		b.textAlign = "right";
		b.x = c.getBounds().width / 2 + 250;
		b.y = 60;
		b.lineWidth = 500;
		d.textAlign = "right";
		d.x = c.getBounds().width / 2 + 250;
		d.y = 60;
		d.lineWidth = 500;
		d.outline = 2;
		c.addChild(d);
		c.addChild(b);
		c.x = CANVAS_WIDTH / 2 -
			c.getBounds().width / 2;
		c.y = -c.getBounds().height;
		this.show();
		var f = new createjs.Shape;
		f.graphics.beginFill("white").drawRect(0, 10, CANVAS_WIDTH, CANVAS_HEIGHT);
		f.alpha = .01;
		s_oStage.addChild(f);
		f.on("pressup", function() {
			(new createjs.Tween.get(c)).to({
				y: -c.getBounds().height
			}, 1E3, createjs.Ease.cubicOut);
			s_oStage.removeChild(f)
		})
	};
	this.unload = function() {};
	this.show = function() {
		(new createjs.Tween.get(c)).to({
			y: 500
		}, 500, createjs.Ease.cubicOut)
	};
	this._init()
}

function CMsgBox(a, b) {
	var d, c, f;
	this._init = function(a) {
		f = new createjs.Container;
		l.addChild(f);
		var b = new createjs.Shape;
		b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		b.alpha = .5;
		b.on("click", function() {});
		f.addChild(b);
		b = s_oSpriteLibrary.getSprite("msg_box");
		var e = createBitmap(b);
		e.x = .5 * CANVAS_WIDTH;
		e.y = .5 * CANVAS_HEIGHT;
		e.regX = .5 * b.width;
		e.regY = .5 * b.height;
		f.addChild(e);
		d = new createjs.Text(a, "28px " + PRIMARY_FONT, "#fff");
		a = new createjs.Text(a, "28px " + PRIMARY_FONT, "#000000");
		a.outline = 3;
		d.x = CANVAS_WIDTH / 2 + 260;
		d.y = 630;
		d.textAlign = "right";
		d.textBaseline = "middle";
		d.lineWidth = 500;
		a.x = CANVAS_WIDTH / 2 + 260;
		a.y = 630;
		a.textAlign = "right";
		a.textBaseline = "middle";
		a.lineWidth = 500;
		f.addChild(a);
		f.addChild(d);
		c = new CGfxButton(CANVAS_WIDTH / 2, 1030, s_oSpriteLibrary.getSprite("but_yes"), f);
		c.addEventListener(ON_MOUSE_UP, this._onButOk, this)
	};
	this._onButOk = function() {
		g.unload()
	};
	this.unload = function() {
		c.unload();
		l.removeChild(f)
	};
	var g = this;
	var l = b;
	this._init(a)
};
