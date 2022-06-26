(function() {
	var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		d = "undefined" !== typeof module && module.exports,
		c = function() {
			for (var c, g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
					"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
				], b = 0, f = g.length, e = {}; b < f; b++)
				if ((c = g[b]) && c[1] in a) {
					for (b = 0; b < c.length; b++) e[g[0][b]] = c[b];
					return e
				} return !1
		}(),
		b = {
			change: c.fullscreenchange,
			error: c.fullscreenerror
		},
		f = {
			request: function(b) {
				return new Promise(function(g, h) {
					var l = function() {
						this.off("change",
							l);
						g()
					}.bind(this);
					this.on("change", l);
					b = b || a.documentElement;
					Promise.resolve(b[c.requestFullscreen]())["catch"](h)
				}.bind(this))
			},
			exit: function() {
				return new Promise(function(b, g) {
					if (this.isFullscreen) {
						var h = function() {
							this.off("change", h);
							b()
						}.bind(this);
						this.on("change", h);
						Promise.resolve(a[c.exitFullscreen]())["catch"](g)
					} else b()
				}.bind(this))
			},
			toggle: function(a) {
				return this.isFullscreen ? this.exit() : this.request(a)
			},
			onchange: function(a) {
				this.on("change", a)
			},
			onerror: function(a) {
				this.on("error", a)
			},
			on: function(c, g) {
				var l = b[c];
				l && a.addEventListener(l, g, !1)
			},
			off: function(c, g) {
				var l = b[c];
				l && a.removeEventListener(l, g, !1)
			},
			raw: c
		};
	c ? (Object.defineProperties(f, {
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
		isEnabled: {
			enumerable: !0,
			get: function() {
				return !!a[c.fullscreenEnabled]
			}
		}
	}), d ? module.exports = f : window.screenfull = f) : d ? module.exports = {
		isEnabled: !1
	} : window.screenfull = {
		isEnabled: !1
	}
})();
(function() {
	function a(a) {
		a = String(a);
		return a.charAt(0).toUpperCase() + a.slice(1)
	}

	function d(a, e) {
		var c = -1,
			g = a ? a.length : 0;
		if ("number" == typeof g && -1 < g && g <= t)
			for (; ++c < g;) e(a[c], c, a);
		else b(a, e)
	}

	function c(e) {
		e = String(e).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(e) ? e : a(e)
	}

	function b(a, e) {
		for (var c in a) r.call(a, c) && e(a[c], c, a)
	}

	function f(e) {
		return null == e ? a(e) : w.call(e).slice(8, -1)
	}

	function h(a, e) {
		var c = null != a ? typeof a[e] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(c) &&
			("object" == c ? !!a[e] : !0)
	}

	function g(a) {
		return String(a).replace(/([ -])(?!$)/g, "$1?")
	}

	function l(a, e) {
		var c = null;
		d(a, function(g, b) {
			c = e(c, g, b, a)
		});
		return c
	}

	function m(a) {
		function e(e) {
			return l(e, function(e, b) {
				var k = b.pattern || g(b);
				!e && (e = RegExp("\\b" + k + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + k + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + k + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((e = String(b.label && !RegExp(k, "i").test(b.label) ? b.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] +=
					" " + e[1]), b = b.label || b, e = c(e[0].replace(RegExp(k, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return e
			})
		}

		function k(e) {
			return l(e, function(e, c) {
				return e || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
			})
		}
		var d = n,
			p = a && "object" == typeof a && "String" != f(a);
		p && (d = a, a = null);
		var t = d.navigator || {},
			r = t.userAgent || "";
		a || (a = r);
		var y = p ? !!t.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(w.toString()),
			D = p ? "Object" : "ScriptBridgingProxyObject",
			R = p ? "Object" : "Environment",
			L = p && d.java ? "JavaPackage" : f(d.java),
			V = p ? "Object" : "RuntimeObject";
		R = (L = /\bJava/.test(L) && d.java) && f(d.environment) == R;
		var W = L ? "a" : "\u03b1",
			X = L ? "b" : "\u03b2",
			S = d.document || {},
			J = d.operamini || d.opera,
			N = v.test(N = p && J ? J["[[Class]]"] : f(J)) ? N : J = null,
			q, O = a;
		p = [];
		var P = null,
			K = a == r;
		r = K && J && "function" == typeof J.version && J.version();
		var B = function(e) {
				return l(e, function(e, c) {
					return e || RegExp("\\b" + (c.pattern || g(c)) + "\\b", "i").exec(a) && (c.label ||
						c)
				})
			}([{
				label: "EdgeHTML",
				pattern: "Edge"
			}, "Trident", {
				label: "WebKit",
				pattern: "AppleWebKit"
			}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			u = function(e) {
				return l(e, function(e, c) {
					return e || RegExp("\\b" + (c.pattern || g(c)) + "\\b", "i").exec(a) && (c.label || c)
				})
			}(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
					label: "Microsoft Edge",
					pattern: "Edge"
				}, "Midori", "Nook Browser",
				"PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
					label: "Samsung Internet",
					pattern: "SamsungBrowser"
				}, "SeaMonkey", {
					label: "Silk",
					pattern: "(?:Cloud9|Silk-Accelerated)"
				}, "Sleipnir", "SlimBrowser", {
					label: "SRWare Iron",
					pattern: "Iron"
				}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
					label: "Opera Mini",
					pattern: "OPiOS"
				}, "Opera", {
					label: "Opera",
					pattern: "OPR"
				}, "Chrome", {
					label: "Chrome Mobile",
					pattern: "(?:CriOS|CrMo)"
				}, {
					label: "Firefox",
					pattern: "(?:Firefox|Minefield)"
				}, {
					label: "Firefox for iOS",
					pattern: "FxiOS"
				},
				{
					label: "IE",
					pattern: "IEMobile"
				}, {
					label: "IE",
					pattern: "MSIE"
				}, "Safari"
			]),
			C = e([{
					label: "BlackBerry",
					pattern: "BB10"
				}, "BlackBerry", {
					label: "Galaxy S",
					pattern: "GT-I9000"
				}, {
					label: "Galaxy S2",
					pattern: "GT-I9100"
				}, {
					label: "Galaxy S3",
					pattern: "GT-I9300"
				}, {
					label: "Galaxy S4",
					pattern: "GT-I9500"
				}, {
					label: "Galaxy S5",
					pattern: "SM-G900"
				}, {
					label: "Galaxy S6",
					pattern: "SM-G920"
				}, {
					label: "Galaxy S6 Edge",
					pattern: "SM-G925"
				}, {
					label: "Galaxy S7",
					pattern: "SM-G930"
				}, {
					label: "Galaxy S7 Edge",
					pattern: "SM-G935"
				}, "Google TV", "Lumia", "iPad",
				"iPod", "iPhone", "Kindle", {
					label: "Kindle Fire",
					pattern: "(?:Cloud9|Silk-Accelerated)"
				}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
					label: "Wii U",
					pattern: "WiiU"
				}, "Wii", "Xbox One", {
					label: "Xbox 360",
					pattern: "Xbox"
				}, "Xoom"
			]),
			H = function(e) {
				return l(e, function(e, c, b) {
					return e || (c[C] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] || RegExp("\\b" + g(b) + "(?:\\b|\\w*\\d)", "i").exec(a)) && b
				})
			}({
				Apple: {
					iPad: 1,
					iPhone: 1,
					iPod: 1
				},
				Archos: {},
				Amazon: {
					Kindle: 1,
					"Kindle Fire": 1
				},
				Asus: {
					Transformer: 1
				},
				"Barnes & Noble": {
					Nook: 1
				},
				BlackBerry: {
					PlayBook: 1
				},
				Google: {
					"Google TV": 1,
					Nexus: 1
				},
				HP: {
					TouchPad: 1
				},
				HTC: {},
				LG: {},
				Microsoft: {
					Xbox: 1,
					"Xbox One": 1
				},
				Motorola: {
					Xoom: 1
				},
				Nintendo: {
					"Wii U": 1,
					Wii: 1
				},
				Nokia: {
					Lumia: 1
				},
				Samsung: {
					"Galaxy S": 1,
					"Galaxy S2": 1,
					"Galaxy S3": 1,
					"Galaxy S4": 1
				},
				Sony: {
					PlayStation: 1,
					"PlayStation Vita": 1
				}
			}),
			x = function(e) {
				return l(e, function(e, b) {
					var k = b.pattern || g(b);
					if (!e && (e = RegExp("\\b" + k + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
						var n = e,
							d = b.label || b,
							l = {
								"10.0": "10",
								"6.4": "10 Technical Preview",
								"6.3": "8.1",
								"6.2": "8",
								"6.1": "Server 2008 R2 / 7",
								"6.0": "Server 2008 / Vista",
								"5.2": "Server 2003 / XP 64-bit",
								"5.1": "XP",
								"5.01": "2000 SP1",
								"5.0": "2000",
								"4.0": "NT",
								"4.90": "ME"
							};
						k && d && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (l = l[/[\d.]+$/.exec(n)]) && (n = "Windows " + l);
						n = String(n);
						k && d && (n = n.replace(RegExp(k, "i"), d));
						e = n = c(n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
							" $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return e
				})
			}(["Windows Phone", "Android", "CentOS", {
					label: "Chrome OS",
					pattern: "CrOS"
				}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
				"Windows 98;", "Windows "
			]);
		B && (B = [B]);
		H && !C && (C = e([H]));
		if (q = /\bGoogle TV\b/.exec(C)) C = q[0];
		/\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
		"Opera Mini" == u && /\bOPiOS\b/.test(a) && p.push("running in Turbo/Uncompressed mode");
		"IE" == u && /\blike iPhone OS\b/.test(a) ? (q = m(a.replace(/like iPhone OS/, "")), H = q.manufacturer, C = q.product) : /^iP/.test(C) ? (u || (u = "Safari"), x = "iOS" + ((q = / OS ([\d_]+)/i.exec(a)) ? " " + q[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(x) ? H && "Google" != H && (/Chrome/.test(u) &&
			!/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(C)) || /\bAndroid\b/.test(x) && /^Chrome/.test(u) && /\bVersion\//i.test(a) ? (u = "Android Browser", x = /\bAndroid\b/.test(x) ? x : "Android") : "Silk" == u ? (/\bMobi/i.test(a) || (x = "Android", p.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && p.unshift("accelerated")) : "PaleMoon" == u && (q = /\bFirefox\/([\d.]+)\b/.exec(a)) ? p.push("identifying as Firefox " + q[1]) : "Firefox" == u && (q = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (x || (x = "Firefox OS"), C || (C = q[1])) : !u || (q = !/\bMinefield\b/i.test(a) &&
			/\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !C && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(q + "/") + 8)) && (u = null), (q = C || H || x) && (C || H || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(x)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(x) ? x : q) + " Browser")) : "Electron" == u && (q = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && p.push("Chromium " + q) : x = "Kubuntu";
		r || (r = k(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(u), "(?:Firefox|Minefield|NetFront)"]));
		if (q = "iCab" == B && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(a) && ("Mac OS" == x ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") B = [q];
		"IE" == u && (q = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (u += " Mobile", x = "Windows Phone " + (/\+$/.test(q) ? q : q + ".x"), p.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (u = "IE Mobile", x = "Windows Phone 8.x",
			p.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != u && "Trident" == B && (q = /\brv:([\d.]+)/.exec(a)) && (u && p.push("identifying as " + u + (r ? " " + r : "")), u = "IE", r = q[1]);
		if (K) {
			if (h(d, "global"))
				if (L && (q = L.lang.System, O = q.getProperty("os.arch"), x = x || q.getProperty("os.name") + " " + q.getProperty("os.version")), R) {
					try {
						r = d.require("ringo/engine").version.join("."), u = "RingoJS"
					} catch (U) {
						(q = d.system) && q.global.system == d.system && (u = "Narwhal", x || (x = q[0].os || null))
					}
					u || (u = "Rhino")
				} else "object" == typeof d.process &&
					!d.process.browser && (q = d.process) && ("object" == typeof q.versions && ("string" == typeof q.versions.electron ? (p.push("Node " + q.versions.node), u = "Electron", r = q.versions.electron) : "string" == typeof q.versions.nw && (p.push("Chromium " + r, "Node " + q.versions.node), u = "NW.js", r = q.versions.nw)), u || (u = "Node.js", O = q.arch, x = q.platform, r = (r = /[\d.]+/.exec(q.version)) ? r[0] : null));
			else f(q = d.runtime) == D ? (u = "Adobe AIR", x = q.flash.system.Capabilities.os) : f(q = d.phantom) == V ? (u = "PhantomJS", r = (q = q.version || null) && q.major + "." + q.minor +
				"." + q.patch) : "number" == typeof S.documentMode && (q = /\bTrident\/(\d+)/i.exec(a)) ? (r = [r, S.documentMode], (q = +q[1] + 4) != r[1] && (p.push("IE " + r[1] + " mode"), B && (B[1] = ""), r[1] = q), r = "IE" == u ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof S.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (p.push("masking as " + u + " " + r), u = "IE", r = "11.0", B = ["Trident"], x = "Windows");
			x = x && c(x)
		}
		r && (q = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (K && t.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
			"a") && (P = /b/i.test(q) ? "beta" : "alpha", r = r.replace(RegExp(q + "\\+?$"), "") + ("beta" == P ? X : W) + (/\d+\+?/.exec(q) || ""));
		if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(x)) u = "Firefox Mobile";
		else if ("Maxthon" == u && r) r = r.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(C)) "Xbox 360" == C && (x = null), "Xbox 360" == C && /\bIEMobile\b/.test(a) && p.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || C || /Browser|Mobi/.test(u)) || "Windows CE" != x && !/Mobi/i.test(a))
			if ("IE" == u && K) try {
				null === d.external &&
					p.unshift("platform preview")
			} catch (U) {
				p.unshift("embedded")
			} else(/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) && (q = (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (q = [q, /BB10/.test(a)], x = (q[1] ? (C = null, H = "BlackBerry") : "Device Software") + " " + q[0], r = null) : this != b && "Wii" != C && (K && J || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(x) || "IE" == u && (x && !/^Win/.test(x) && 5.5 < r || /\bWindows XP\b/.test(x) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !v.test(q =
				m.call(b, a.replace(v, "") + ";")) && q.name && (q = "ing as " + q.name + ((q = q.version) ? " " + q : ""), v.test(u) ? (/\bIE\b/.test(q) && "Mac OS" == x && (x = null), q = "identify" + q) : (q = "mask" + q, u = N ? c(N.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(q) && (x = null), K || (r = null)), B = ["Presto"], p.push(q));
			else u += " Mobile";
		if (q = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
			q = [parseFloat(q.replace(/\.(\d)$/, ".0$1")), q];
			if ("Safari" == u && "+" == q[1].slice(-1)) u = "WebKit Nightly", P = "alpha", r = q[1].slice(0, -1);
			else if (r == q[1] || r == (q[2] =
					(/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) r = null;
			q[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
			537.36 == q[0] && 537.36 == q[2] && 28 <= parseFloat(q[1]) && "WebKit" == B && (B = ["Blink"]);
			K && (y || q[1]) ? (B && (B[1] = "like Chrome"), q = q[1] || (q = q[0], 530 > q ? 1 : 532 > q ? 2 : 532.05 > q ? 3 : 533 > q ? 4 : 534.03 > q ? 5 : 534.07 > q ? 6 : 534.1 > q ? 7 : 534.13 > q ? 8 : 534.16 > q ? 9 : 534.24 > q ? 10 : 534.3 > q ? 11 : 535.01 > q ? 12 : 535.02 > q ? "13+" : 535.07 > q ? 15 : 535.11 > q ? 16 : 535.19 > q ? 17 : 536.05 > q ? 18 : 536.1 > q ? 19 : 537.01 > q ? 20 : 537.11 > q ? "21+" : 537.13 > q ? 23 : 537.18 > q ? 24 : 537.24 > q ? 25 : 537.36 > q ? 26 : "Blink" !=
				B ? "27" : "28")) : (B && (B[1] = "like Safari"), q = (q = q[0], 400 > q ? 1 : 500 > q ? 2 : 526 > q ? 3 : 533 > q ? 4 : 534 > q ? "4+" : 535 > q ? 5 : 537 > q ? 6 : 538 > q ? 7 : 601 > q ? 8 : "8"));
			B && (B[1] += " " + (q += "number" == typeof q ? ".x" : /[.+]/.test(q) ? "" : "+"));
			"Safari" == u && (!r || 45 < parseInt(r)) && (r = q)
		}
		"Opera" == u && (q = /\bzbov|zvav$/.exec(x)) ? (u += " ", p.unshift("desktop mode"), "zvav" == q ? (u += "Mini", r = null) : u += "Mobile", x = x.replace(RegExp(" *" + q + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(B && B[1]) && (p.unshift("desktop mode"), u = "Chrome Mobile", r = null, /\bOS X\b/.test(x) ? (H =
			"Apple", x = "iOS 4.3+") : x = null);
		r && 0 == r.indexOf(q = /[\d.]+$/.exec(x)) && -1 < a.indexOf("/" + q + "-") && (x = String(x.replace(q, "")).replace(/^ +| +$/g, ""));
		B && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(x) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && B[1]) && (q = B[B.length - 1]) && p.push(q);
		p.length && (p = ["(" + p.join("; ") + ")"]);
		H && C && 0 > C.indexOf(H) && p.push("on " + H);
		C && p.push((/^on /.test(p[p.length -
			1]) ? "" : "on ") + C);
		if (x) {
			var T = (q = / ([\d.+]+)$/.exec(x)) && "/" == x.charAt(x.length - q[0].length - 1);
			x = {
				architecture: 32,
				family: q && !T ? x.replace(q[0], "") : x,
				version: q ? q[1] : null,
				toString: function() {
					var a = this.version;
					return this.family + (a && !T ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		}(q = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O) ? (x && (x.architecture = 64, x.family = x.family.replace(RegExp(" *" + q), "")), u && (/\bWOW64\b/i.test(a) || K && /\w(?:86|32)$/.test(t.cpuClass || t.platform) && !/\bWin64; x64\b/i.test(a)) &&
			p.unshift("32-bit")) : x && /^OS X/.test(x.family) && "Chrome" == u && 39 <= parseFloat(r) && (x.architecture = 64);
		a || (a = null);
		d = {};
		d.description = a;
		d.layout = B && B[0];
		d.manufacturer = H;
		d.name = u;
		d.prerelease = P;
		d.product = C;
		d.ua = a;
		d.version = u && r;
		d.os = x || {
			architecture: null,
			family: null,
			version: null,
			toString: function() {
				return "null"
			}
		};
		d.parse = m;
		d.toString = function() {
			return this.description || ""
		};
		d.version && p.unshift(r);
		d.name && p.unshift(u);
		x && u && (x != String(x).split(" ")[0] || x != u.split(" ")[0] && !C) && p.push(C ? "(" + x + ")" : "on " +
			x);
		p.length && (d.description = p.join(" "));
		return d
	}
	var e = {
			"function": !0,
			object: !0
		},
		n = e[typeof window] && window || this,
		k = e[typeof exports] && exports;
	e = e[typeof module] && module && !module.nodeType && module;
	var p = k && e && "object" == typeof global && global;
	!p || p.global !== p && p.window !== p && p.self !== p || (n = p);
	var t = Math.pow(2, 53) - 1,
		v = /\bOpera/;
	p = Object.prototype;
	var r = p.hasOwnProperty,
		w = p.toString,
		y = m();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (n.platform = y, define(function() {
			return y
		})) : k &&
		e ? b(y, function(a, e) {
			k[e] = a
		}) : n.platform = y
}).call(this);

function buildIOSMeta() {
	for (var a = [{
			name: "viewport",
			content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
		}, {
			name: "apple-mobile-web-app-capable",
			content: "yes"
		}, {
			name: "apple-mobile-web-app-status-bar-style",
			content: "black"
		}], d = 0; d < a.length; d++) {
		var c = document.createElement("meta");
		c.name = a[d].name;
		c.content = a[d].content;
		var b = window.document.head.querySelector('meta[name="' + c.name + '"]');
		b && b.parentNode.removeChild(b);
		window.document.head.appendChild(c)
	}
}

function hideIOSFullscreenPanel() {
	jQuery(".xxx-ios-fullscreen-message").css("display", "none");
	jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
	jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
	jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
	jQuery(".xxx-ios-fullscreen-message").css("display", "block");
	jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
	window.scrollTo(0, 0);
	if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
		case 2:
			switch (window.innerWidth) {
				case 568:
					320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
					break;
				case 667:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				default:
					hideIOSFullscreenPanel()
			}
			break;
		case 3:
			switch (window.innerWidth) {
				case 736:
					414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				case 724:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				default:
					hideIOSFullscreenPanel()
			}
			break;
		default:
			hideIOSFullscreenPanel()
	}
}

function iosResize() {
	__iosResize();
	setTimeout(function() {
		__iosResize()
	}, 500)
}
$(document).ready(function() {
	platform && "iPhone" === platform.product && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
	platform && "iPhone" === platform.product && iosResize()
});
var s_iScaleFactor = 1,
	s_iOffsetX, s_iOffsetY, s_bIsIphone = !1;
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

function getSize(a) {
	var d = a.toLowerCase(),
		c = window.document,
		b = c.documentElement;
	if (void 0 === window["inner" + a]) a = b["client" + a];
	else if (window["inner" + a] != b["client" + a]) {
		var f = c.createElement("body");
		f.id = "vpw-test-b";
		f.style.cssText = "overflow:scroll";
		var h = c.createElement("div");
		h.id = "vpw-test-d";
		h.style.cssText = "position:absolute;top:-1000px";
		h.innerHTML = "<style>@media(" + d + ":" + b["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
		f.appendChild(h);
		b.insertBefore(f, c.head);
		a = 7 == h["offset" + a] ? b["client" + a] : window["inner" + a];
		b.removeChild(f)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
	return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isMobile() {
	return isIpad() ? !0 : jQuery.browser.mobile
}

function isIpad() {
	var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
	return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}

function isIOS() {
	var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
	if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone")) return s_bIsIphone = !0;
	for (; a.length;)
		if (navigator.platform === a.pop()) return s_bIsIphone = !0;
	return s_bIsIphone = !1
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
		var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
		var d = getSize("Width");
		_checkOrientation(d, a);
		var c = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
			b = Math.round(CANVAS_WIDTH * c);
		c = Math.round(CANVAS_HEIGHT * c);
		if (c < a) {
			var f = a - c;
			c += f;
			b += CANVAS_WIDTH / CANVAS_HEIGHT * f
		} else b < d && (f = d - b, b += f, c += CANVAS_HEIGHT / CANVAS_WIDTH * f);
		f = a / 2 - c / 2;
		var h = d / 2 - b / 2,
			g = CANVAS_WIDTH / b;
		if (h * g < -EDGEBOARD_X || f * g < -EDGEBOARD_Y) c = Math.min(a / (CANVAS_HEIGHT -
			2 * EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = Math.round(CANVAS_WIDTH * c), c = Math.round(CANVAS_HEIGHT * c), f = (a - c) / 2, h = (d - b) / 2, g = CANVAS_WIDTH / b;
		s_iOffsetX = -1 * h * g;
		s_iOffsetY = -1 * f * g;
		0 <= f && (s_iOffsetY = 0);
		0 <= h && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * b, s_oStage.canvas.height = 2 * c, canvas.style.width = b + "px", canvas.style.height =
			c + "px", s_iScaleFactor = 2 * Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", c + "px")) : (s_oStage.canvas.width = b, s_oStage.canvas.height = c, s_iScaleFactor = Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > f || (f = (a - c) / 2);
		$("#canvas").css("top", f + "px");
		$("#canvas").css("left", h + "px");
		if (DEBUG_BOX2D) {
			if (s_bMobile || isChrome()) $("#debug").css("width",
				b + "px"), $("#debug").css("height", c + "px");
			0 > f ? $("#debug").css("top", f + "px") : (f = (a - c) / 2, $("#canvas").css("top", f + "px"));
			$("#debug").css("left", h + "px")
		}
		fullscreenHandler()
	}
}

function _checkOrientation(a, d) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function playSound(a, d, c) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(c), s_aSounds[a]) : null
}

function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, d) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(d)
}

function setMute(a, d) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(d)
}

function fadeSound(a, d, c, b) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].fade(d, c, b)
}

function soundPlaying(a) {
	if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) return s_aSounds[a].playing()
}

function createBitmap(a, d, c) {
	var b = new createjs.Bitmap(a),
		f = new createjs.Shape;
	d && c ? f.graphics.beginFill("#fff").drawRect(0, 0, d, c) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	b.hitArea = f;
	return b
}

function createSprite(a, d, c, b, f, h) {
	a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
	d = new createjs.Shape;
	d.graphics.beginFill("#000000").drawRect(-c, -b, f, h);
	a.hitArea = d;
	return a
}

function pad(a, d, c) {
	a += "";
	return a.length >= d ? a : Array(d - a.length + 1).join(c || "0") + a
}

function linearFunction(a, d, c, b, f) {
	return (a - d) * (f - b) / (c - d) + b
}

function randomFloatBetween(a, d, c) {
	"undefined" === typeof c && (c = 2);
	return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(c))
}

function rotateVector2D(a, d) {
	var c = d.getX() * Math.cos(a) + d.getY() * Math.sin(a),
		b = d.getX() * -Math.sin(a) + d.getY() * Math.cos(a);
	d.set(c, b)
}

function tweenVectorsOnX(a, d, c) {
	return a + c * (d - a)
}

function shuffle(a) {
	for (var d = a.length, c, b; 0 !== d;) b = Math.floor(Math.random() * d), --d, c = a[d], a[d] = a[b], a[b] = c;
	return a
}

function bubbleSort(a) {
	do {
		var d = !1;
		for (var c = 0; c < a.length - 1; c++) a[c] > a[c + 1] && (d = a[c], a[c] = a[c + 1], a[c + 1] = d, d = !0)
	} while (d)
}

function compare(a, d) {
	return a.index > d.index ? -1 : a.index < d.index ? 1 : 0
}

function easeLinear(a, d, c, b) {
	return c * a / b + d
}

function easeInQuad(a, d, c, b) {
	return c * (a /= b) * a + d
}

function easeInSine(a, d, c, b) {
	return -c * Math.cos(a / b * (Math.PI / 2)) + c + d
}

function easeInCubic(a, d, c, b) {
	return c * (a /= b) * a * a + d
}

function getTrajectoryPoint(a, d) {
	var c = new createjs.Point,
		b = (1 - a) * (1 - a),
		f = a * a;
	c.x = b * d.start.x + 2 * (1 - a) * a * d.traj.x + f * d.end.x;
	c.y = b * d.start.y + 2 * (1 - a) * a * d.traj.y + f * d.end.y;
	return c
}

function formatTime(a) {
	a /= 1E3;
	var d = Math.floor(a / 60);
	a = parseFloat(a - 60 * d).toFixed(1);
	var c = "";
	c = 10 > d ? c + ("0" + d + ":") : c + (d + ":");
	return 10 > a ? c + ("0" + a) : c + a
}

function degreesToRadians(a) {
	return a * Math.PI / 180
}

function checkRectCollision(a, d) {
	var c = getBounds(a, .9);
	var b = getBounds(d, .98);
	return calculateIntersection(c, b)
}

function calculateIntersection(a, d) {
	var c, b, f, h;
	var g = a.x + (c = a.width / 2);
	var l = a.y + (b = a.height / 2);
	var m = d.x + (f = d.width / 2);
	var e = d.y + (h = d.height / 2);
	g = Math.abs(g - m) - (c + f);
	l = Math.abs(l - e) - (b + h);
	return 0 > g && 0 > l ? (g = Math.min(Math.min(a.width, d.width), -g), l = Math.min(Math.min(a.height, d.height), -l), {
		x: Math.max(a.x, d.x),
		y: Math.max(a.y, d.y),
		width: g,
		height: l,
		rect1: a,
		rect2: d
	}) : null
}

function getBounds(a, d) {
	var c = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (a instanceof createjs.Container) {
		c.x2 = -Infinity;
		c.y2 = -Infinity;
		var b = a.children,
			f = b.length,
			h;
		for (h = 0; h < f; h++) {
			var g = getBounds(b[h], 1);
			g.x < c.x && (c.x = g.x);
			g.y < c.y && (c.y = g.y);
			g.x + g.width > c.x2 && (c.x2 = g.x + g.width);
			g.y + g.height > c.y2 && (c.y2 = g.y + g.height)
		}
		Infinity == c.x && (c.x = 0);
		Infinity == c.y && (c.y = 0);
		Infinity == c.x2 && (c.x2 = 0);
		Infinity == c.y2 && (c.y2 = 0);
		c.width = c.x2 - c.x;
		c.height = c.y2 - c.y;
		delete c.x2;
		delete c.y2
	} else {
		if (a instanceof createjs.Bitmap) {
			f =
				a.sourceRect || a.image;
			h = f.width * d;
			var l = f.height * d
		} else if (a instanceof createjs.Sprite)
			if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
				f = a.spriteSheet.getFrame(a.currentFrame);
				h = f.rect.width;
				l = f.rect.height;
				b = f.regX;
				var m = f.regY
			} else c.x = a.x || 0, c.y = a.y || 0;
		else c.x = a.x || 0, c.y = a.y || 0;
		b = b || 0;
		h = h || 0;
		m = m || 0;
		l = l || 0;
		c.regX = b;
		c.regY = m;
		f = a.localToGlobal(0 - b, 0 - m);
		g = a.localToGlobal(h - b, l - m);
		h = a.localToGlobal(h - b, 0 - m);
		b = a.localToGlobal(0 - b, l - m);
		c.x =
			Math.min(Math.min(Math.min(f.x, g.x), h.x), b.x);
		c.y = Math.min(Math.min(Math.min(f.y, g.y), h.y), b.y);
		c.width = Math.max(Math.max(Math.max(f.x, g.x), h.x), b.x) - c.x;
		c.height = Math.max(Math.max(Math.max(f.y, g.y), h.y), b.y) - c.y
	}
	return c
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
	for (var d = a.length, c, b; 0 < d;) b = Math.floor(Math.random() * d), d--, c = a[d], a[d] = a[b], a[b] = c;
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
			var d = document.createEvent("MouseEvents");
			d.initEvent("click", !0, !0);
			a.dispatchEvent(d)
		}
	}
};
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
		a.type in c ? document.body.className = c[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var d = "hidden";
	d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in
		document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var d = window.location.search.substring(1).split("&"), c = 0; c < d.length; c++) {
		var b = d[c].split("=");
		if (b[0] == a) return b[1]
	}
}
String.prototype.format = function() {
	for (var a = this, d = arguments.length; d--;) a = a.replace(new RegExp("\\{" + d + "\\}", "gm"), arguments[d]);
	return a
};

function fullscreenHandler() {
	ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
	var a = {},
		d, c, b, f, h, g;
	this.init = function(a, m, e) {
		d = {};
		b = c = 0;
		f = a;
		h = m;
		g = e
	};
	this.addSprite = function(b, g) {
		if (!a.hasOwnProperty(b)) {
			var e = new Image;
			a[b] = d[b] = {
				szPath: g,
				oSprite: e,
				bLoaded: !1
			};
			c++
		}
	};
	this.getSprite = function(c) {
		return a.hasOwnProperty(c) ? a[c].oSprite : null
	};
	this._onSpritesLoaded = function() {
		c = 0;
		h.call(g)
	};
	this._onSpriteLoaded = function() {
		f.call(g);
		++b === c && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var a in d) d[a].oSprite.oSpriteLibrary = this, d[a].oSprite.szKey =
			a, d[a].oSprite.onload = function() {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, d[a].oSprite.onerror = function(a) {
				var e = a.currentTarget;
				setTimeout(function() {
					d[e.szKey].oSprite.src = d[e.szKey].szPath
				}, 500)
			}, d[a].oSprite.src = d[a].szPath
	};
	this.setLoaded = function(c) {
		a[c].bLoaded = !0
	};
	this.isLoaded = function(c) {
		return a[c].bLoaded
	};
	this.getNumSprites = function() {
		return c
	}
}
var CANVAS_WIDTH = 768,
	CANVAS_HEIGHT = 1280,
	CANVAS_WIDTH_HALF = CANVAS_WIDTH / 2,
	CANVAS_HEIGHT_HALF = CANVAS_HEIGHT / 2,
	EDGEBOARD_X = 100,
	EDGEBOARD_Y = 140,
	GAME_NAME = "pinball",
	PRIMARY_FONT = "walibi0615bold",
	SECONDARY_FONT = "Digital",
	PRIMARY_FONT_COLOUR = "#fff600",
	SOUNDTRACK_VOLUME_IN_GAME = 1,
	FPS = 60,
	FPS_TIME = 1E3 / FPS,
	DISABLE_SOUND_MOBILE = !1,
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
	ON_INCREASE_JACKPOT = 6,
	ON_INCREASE_SCORE =
	7,
	CONTACT_BEGIN = 0,
	CONTACT_END = 1,
	CONTACT_PRESOLVE = 2,
	CONTACT_POSTSOLVE = 3,
	SETTINGS_HEIGHT = 240,
	TODEGREE_PROPORTION = 180 / Math.PI,
	ZOOM_TABLE_SIZE = {
		w: 1,
		h: 1
	},
	BALL_OUT_SAFE_LIMIT = 40,
	DEBUG_BOX2D = !1,
	DEBUG_BOX2D_ALPHA = .2,
	WORLD_SCALE = 100,
	GRAVITY = 13.6,
	GENERAL_RESTITUTION = .33,
	GENERAL_FRICTION = .7,
	ZOOM = 1,
	ZOOM_PER_WORLDSCALE = ZOOM * WORLD_SCALE,
	BALL_STARTPOS = {
		x: 1092,
		y: 1770
	},
	BALL_RADIUS = 28,
	LERP_SLOW = {
		x: .01,
		y: .01
	},
	LERP_FOLLOW_BALL = {
		x: .05,
		y: .15
	},
	NUM_BALL = 3,
	SHIELD_ACTIVATION_THRESHOLD = 3,
	EXTRABALL_JACKPOT_SCORE_ACTIVATION =
	5E5,
	FLIPPER_STRENGTH = 18,
	SPRING_MAX_STRENGTH = 1,
	iY = 1300,
	LETTERS_POSITION = [{
		x: 300,
		y: iY
	}, {
		x: 360,
		y: iY
	}, {
		x: 440,
		y: iY
	}, {
		x: 530,
		y: iY
	}, {
		x: 630,
		y: iY
	}, {
		x: 720,
		y: iY
	}, {
		x: 810,
		y: iY
	}],
	MAX_MULTIPLIER = 7,
	TIME_ROUTER_SCORE_DECREASE = 2E4,
	SCORE_RATIO_TO_ADD_AT_JACKPOT = 2,
	TIME_LAST_ACTIVE_JACKPOT = 9E4,
	ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_PRELOADER_CONTINUE = "START",
	TEXT_ARE_SURE = "ARE YOU SURE?",
	TEXT_PAUSE = "PAUSE",
	TEXT_HELP1 = "USE KEYS TO MOVE THE FLIPPERS AND LAUNCH THE BALL",
	TEXT_HELP2 = "TRY TO DO AS MANY POINTS AS POSSIBLE!",
	TEXT_HELP1_MOBILE = "CLICK ON THE LEFT OR RIGHT SIDE OF THE SCREEN TO MOVE THE FLIPPERS ACCORDINGLY",
	TEXT_IOS_PRIVATE = 'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some info may not save or some features may not work properly',
	TEXT_DEVELOPED = "DEVELOPED BY",
	TEXT_MULTI = "MULTI",
	TEXT_SHIELD = "SHIELD",
	TEXT_EXTRABALL = "EXTRA BALL",
	TEXT_HOLE_VALUE = "1K 5K 10K 50K 100K 500K 1M".split(" "),
	TEXT_ROUTER_VALUE = "50 100 200 500 1k 2k 5k".split(" "),
	TEXT_SHARE_IMAGE = "200x200.jpg",
	TEXT_SHARE_TITLE = "Congratulations!",
	TEXT_SHARE_MSG1 = "You collected <strong>",
	TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
	TEXT_SHARE_SHARE1 = "My score is ",
	TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
	var a, d, c, b, f, h, g, l, m, e;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
		s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
		s_oSpriteLibrary.loadSprites();
		e = new createjs.Container;
		s_oStage.addChild(e)
	};
	this.unload = function() {
		e.removeAllChildren();
		m.unload()
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var n = new createjs.Shape;
		n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		e.addChild(n);
		n = s_oSpriteLibrary.getSprite("200x200");
		g = createBitmap(n);
		g.regX = .5 * n.width;
		g.regY = .5 * n.height;
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT / 2 - 180;
		e.addChild(g);
		l = new createjs.Shape;
		l.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
		e.addChild(l);
		g.mask = l;
		n = s_oSpriteLibrary.getSprite("progress_bar");
		b = createBitmap(n);
		b.x = CANVAS_WIDTH / 2 - n.width / 2;
		b.y = CANVAS_HEIGHT / 2 + 50;
		e.addChild(b);
		a = n.width;
		d = n.height;
		f = new createjs.Shape;
		f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, 1, d);
		e.addChild(f);
		b.mask = f;
		c = new createjs.Text("", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2 + 100;
		c.textBaseline = "alphabetic";
		c.textAlign = "center";
		e.addChild(c);
		n = s_oSpriteLibrary.getSprite("but_start");
		m = new CTextButton(CANVAS_WIDTH /
			2, CANVAS_HEIGHT / 2, n, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", e);
		m.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
		m.setVisible(!1);
		h = new createjs.Shape;
		h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		e.addChild(h);
		createjs.Tween.get(h).to({
			alpha: 0
		}, 500).call(function() {
			createjs.Tween.removeTweens(h);
			e.removeChild(h)
		})
	};
	this._onButStartRelease = function() {
		s_oMain._onRemovePreloader()
	};
	this.refreshLoader = function(e) {
		c.text = e + "%";
		100 === e && (s_oMain._onRemovePreloader(),
			c.visible = !1, b.visible = !1);
		f.graphics.clear();
		e = Math.floor(e * a / 100);
		f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, e, d)
	};
	this._init()
}

function CMain(a) {
	var d, c = 0,
		b = 0,
		f = STATE_LOADING,
		h, g;
	this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = !1;
		createjs.Touch.enable(s_oStage);
		s_bMobile = isMobile();
		!1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.framerate = FPS;
		navigator.userAgent.match(/Windows Phone/i) &&
			(DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		seekAndDestroy() ? h = new CPreloader : window.location.href = "http://www.atterolabs.com";
		s_oLocalStorage = new CLocalStorage(GAME_NAME)
	};
	this.preloaderReady = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		this._loadImages();
		d = !0
	};
	this.soundLoaded = function() {
		c++;
		h.refreshLoader(Math.floor(c / b * 100))
	};
	this._initSounds = function() {
		Howler.mute(!s_bAudioActive);
		s_aSoundsInfo = [];
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "press_button",
			loop: !1,
			volume: 1,
			ingamename: "click"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "game_over",
			loop: !1,
			volume: 1,
			ingamename: "game_over"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "start_game",
			loop: !1,
			volume: 1,
			ingamename: "start_game"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "launch",
			loop: !1,
			volume: 1,
			ingamename: "launch"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "toggle",
			loop: !1,
			volume: 1,
			ingamename: "toggle"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "gate",
			loop: !1,
			volume: 1,
			ingamename: "gate"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "bumper",
			loop: !1,
			volume: 1,
			ingamename: "bumper"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "jumper",
			loop: !1,
			volume: 1,
			ingamename: "jumper"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "pinball_button_on",
			loop: !1,
			volume: 1,
			ingamename: "pinball_button_on"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "pinball_button_off",
			loop: !1,
			volume: 1,
			ingamename: "pinball_button_off"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "in_hole",
			loop: !1,
			volume: 1,
			ingamename: "in_hole"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "out_hole",
			loop: !1,
			volume: 1,
			ingamename: "out_hole"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "flipper",
			loop: !1,
			volume: 1,
			ingamename: "flipper"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "all_letters_complete",
			loop: !1,
			volume: 1,
			ingamename: "all_letters_complete"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "all_lights_on_1",
			loop: !1,
			volume: 1,
			ingamename: "all_lights_on_1"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "all_lights_on_2",
			loop: !1,
			volume: 1,
			ingamename: "all_lights_on_2"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "letter",
			loop: !1,
			volume: 1,
			ingamename: "letter"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "bonus_win_1",
			loop: !1,
			volume: 1,
			ingamename: "bonus_win_1"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "bonus_win_2",
			loop: !1,
			volume: 1,
			ingamename: "bonus_win_2"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "ball_out",
			loop: !1,
			volume: 1,
			ingamename: "ball_out"
		});
		b += s_aSoundsInfo.length;
		s_aSounds = [];
		for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
	};
	this.tryToLoadSound = function(a, e) {
		setTimeout(function() {
			s_aSounds[a.ingamename] = new Howl({
				src: [a.path + a.filename + ".mp3"],
				autoplay: !1,
				preload: !0,
				loop: a.loop,
				volume: a.volume,
				onload: s_oMain.soundLoaded,
				onloaderror: function(a, e) {
					for (var c = 0; c < s_aSoundsInfo.length; c++)
						if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
							s_oMain.tryToLoadSound(s_aSoundsInfo[c],
								!0);
							break
						}
				},
				onplayerror: function(a) {
					for (var e = 0; e < s_aSoundsInfo.length; e++)
						if (a === s_aSounds[s_aSoundsInfo[e].ingamename]._sounds[0]._id) {
							s_aSounds[s_aSoundsInfo[e].ingamename].once("unlock", function() {
								s_aSounds[s_aSoundsInfo[e].ingamename].play();
								"soundtrack" === s_aSoundsInfo[e].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
							});
							break
						}
				}
			})
		}, e ? 200 : 0)
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("but_play",
			"./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("credits_panel", "./sprites/credits_panel.png");
		s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
		s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
		s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
		s_oSpriteLibrary.addSprite("keys",
			"./sprites/keys.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
		s_oSpriteLibrary.addSprite("hand_anim", "./sprites/hand_anim.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_fullscreen",
			"./sprites/but_fullscreen.png");
		s_oSpriteLibrary.addSprite("bestscore", "./sprites/bestscore.png");
		s_oSpriteLibrary.addSprite("extra_ball", "./sprites/extra_ball.png");
		s_oSpriteLibrary.addSprite("star", "./sprites/star.png");
		s_oSpriteLibrary.addSprite("pinball_bg", "./sprites/pinball_elements/pinball_bg.jpg");
		s_oSpriteLibrary.addSprite("multiplier_light", "./sprites/pinball_elements/multiplier_light.png");
		s_oSpriteLibrary.addSprite("multiplier_toggle_light", "./sprites/pinball_elements/multiplier_toggle_light.png");
		s_oSpriteLibrary.addSprite("bumper", "./sprites/pinball_elements/bumper.png");
		s_oSpriteLibrary.addSprite("bumper_button", "./sprites/pinball_elements/bumper_button.png");
		s_oSpriteLibrary.addSprite("capsule_0", "./sprites/pinball_elements/capsule_0.png");
		s_oSpriteLibrary.addSprite("capsule_1", "./sprites/pinball_elements/capsule_1.png");
		s_oSpriteLibrary.addSprite("capsule_2", "./sprites/pinball_elements/capsule_2.png");
		s_oSpriteLibrary.addSprite("capsule_3", "./sprites/pinball_elements/capsule_3.png");
		for (var a =
				0; 6 > a; a++) s_oSpriteLibrary.addSprite("button_light_" + a, "./sprites/pinball_elements/button_light_" + a + ".png");
		s_oSpriteLibrary.addSprite("curve_light_button", "./sprites/pinball_elements/curve_light_button.png");
		s_oSpriteLibrary.addSprite("light_indicator_0", "./sprites/pinball_elements/light_indicator_0.png");
		s_oSpriteLibrary.addSprite("light_indicator_1", "./sprites/pinball_elements/light_indicator_1.png");
		s_oSpriteLibrary.addSprite("light_indicator_2", "./sprites/pinball_elements/light_indicator_2.png");
		for (a = 0; 7 > a; a++) s_oSpriteLibrary.addSprite("router_light_" + a, "./sprites/pinball_elements/router_light_" + a + ".png");
		s_oSpriteLibrary.addSprite("curve_tunnel", "./sprites/pinball_elements/curve_tunnel.png");
		s_oSpriteLibrary.addSprite("eye", "./sprites/pinball_elements/eye.png");
		s_oSpriteLibrary.addSprite("arrow_light_0", "./sprites/pinball_elements/arrow_light_0.png");
		s_oSpriteLibrary.addSprite("arrow_light_1", "./sprites/pinball_elements/arrow_light_1.png");
		for (a = 0; 7 > a; a++) s_oSpriteLibrary.addSprite("letter_" +
			a, "./sprites/pinball_elements/letter_" + a + ".png");
		s_oSpriteLibrary.addSprite("logo", "./sprites/pinball_elements/logo.png");
		s_oSpriteLibrary.addSprite("jackpot", "./sprites/pinball_elements/jackpot.png");
		s_oSpriteLibrary.addSprite("tunnel_start", "./sprites/pinball_elements/tunnel_start.png");
		s_oSpriteLibrary.addSprite("arrow_start", "./sprites/pinball_elements/arrow_start.png");
		s_oSpriteLibrary.addSprite("start_platform", "./sprites/pinball_elements/start_platform.png");
		s_oSpriteLibrary.addSprite("spring",
			"./sprites/pinball_elements/spring.png");
		s_oSpriteLibrary.addSprite("flipper_bumper", "./sprites/pinball_elements/flipper_bumper.png");
		s_oSpriteLibrary.addSprite("hole", "./sprites/pinball_elements/hole.png");
		s_oSpriteLibrary.addSprite("shield", "./sprites/pinball_elements/shield.png");
		s_oSpriteLibrary.addSprite("jumper", "./sprites/pinball_elements/jumper.png");
		s_oSpriteLibrary.addSprite("safe_pin", "./sprites/pinball_elements/safe_pin.png");
		s_oSpriteLibrary.addSprite("gate", "./sprites/pinball_elements/gate.png");
		s_oSpriteLibrary.addSprite("ball", "./sprites/pinball_elements/ball.png");
		s_oSpriteLibrary.addSprite("flipper", "./sprites/pinball_elements/flipper.png");
		b += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		c++;
		h.refreshLoader(Math.floor(c / b * 100))
	};
	this._onAllImagesLoaded = function() {};
	this._onRemovePreloader = function() {
		h.unload();
		s_oSoundtrack = playSound("soundtrack", 1, !0);
		this.gotoMenu()
	};
	this.gotoMenu = function() {
		new CMenu;
		f = STATE_MENU
	};
	this.gotoGame = function() {
		g =
			new CGame(l);
		f = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		f = STATE_HELP
	};
	this.stopUpdate = function() {
		d = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		d = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		s_bAudioActive && Howler.mute(!1)
	};
	this._update = function(a) {
		if (!1 !== d) {
			var e = (new Date).getTime();
			s_iTimeElaps = e - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = e;
			1E3 <=
				s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			f === STATE_GAME && g.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	var l = a;
	ENABLE_FULLSCREEN = a.fullscreen;
	ENABLE_CHECK_ORIENTATION = a.check_orientation;
	s_bAudioActive = a.audio_enable_on_startup;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_bFullscreen = !1,
	s_aSounds = [],
	s_aSoundsInfo = [],
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack, s_oCanvas, s_oLocalStorage;

function CTextButton(a, d, c, b, f, h, g, l) {
	var m, e, n, k, p, t, v;
	this._init = function(a, c, b, g, d, h, f) {
		m = [];
		e = [];
		n = [];
		var l = createBitmap(b);
		p = new createjs.Text(g, f + "px " + d, h);
		p.textAlign = "center";
		p.textBaseline = "middle";
		p.getBounds();
		p.x = b.width / 2;
		p.y = Math.floor(b.height / 2);
		k = new createjs.Container;
		k.x = a;
		k.y = c;
		k.regX = b.width / 2;
		k.regY = b.height / 2;
		k.addChild(l, p);
		r.addChild(k);
		s_bMobile || (k.cursor = "pointer");
		this._initListener()
	};
	this.unload = function() {
		k.off("mousedown", t);
		k.off("pressup", v);
		r.removeChild(k)
	};
	this.setVisible =
		function(a) {
			k.visible = a
		};
	this._initListener = function() {
		oParent = this;
		t = k.on("mousedown", this.buttonDown);
		v = k.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, c, b) {
		e[a] = c;
		n[a] = b
	};
	this.buttonRelease = function() {
		k.scaleX = 1;
		k.scaleY = 1;
		playSound("click", 1, !1);
		e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(n[ON_MOUSE_UP], m[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		k.scaleX = .9;
		k.scaleY = .9;
		e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], m[ON_MOUSE_DOWN])
	};
	this.addEventListenerWithParams = function(a,
		c, b, g) {
		e[a] = c;
		n[a] = b;
		m[a] = g
	};
	this.setTextPosition = function(a) {
		p.y = a
	};
	this.setPosition = function(a, e) {
		k.x = a;
		k.y = e
	};
	this.setX = function(a) {
		k.x = a
	};
	this.setY = function(a) {
		k.y = a
	};
	this.getButtonImage = function() {
		return k
	};
	this.getX = function() {
		return k.x
	};
	this.getY = function() {
		return k.y
	};
	var r = l;
	this._init(a, d, c, b, f, h, g);
	return this
}

function CToggle(a, d, c, b, f) {
	var h, g, l, m, e, n, k;
	this._init = function(a, c, b, g, d) {
		e = [];
		n = [];
		var f = new createjs.SpriteSheet({
			images: [b],
			frames: {
				width: b.width / 2,
				height: b.height,
				regX: b.width / 2 / 2,
				regY: b.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		h = g;
		k = createSprite(f, "state_" + h, b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
		k.x = a;
		k.y = c;
		k.stop();
		d.addChild(k);
		this._initListener()
	};
	this.unload = function() {
		s_bMobile ? k.off("mousedown", g) : (k.off("mousedown", g), k.off("mouseover", m));
		k.off("pressup", l);
		f.removeChild(k)
	};
	this._initListener = function() {
		s_bMobile ? g = k.on("mousedown", this.buttonDown) : (g = k.on("mousedown", this.buttonDown), m = k.on("mouseover", this.buttonOver));
		l = k.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, c, b) {
		e[a] = c;
		n[a] = b
	};
	this.addText = function() {};
	this.setActive = function(a) {
		h = a;
		k.gotoAndStop("state_" + h)
	};
	this.buttonRelease = function() {
		k.scaleX = 1;
		k.scaleY = 1;
		playSound("click", 1, !1);
		h = !h;
		k.gotoAndStop("state_" + h);
		e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(n[ON_MOUSE_UP], h)
	};
	this.buttonDown =
		function() {
			k.scaleX = .9;
			k.scaleY = .9;
			e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN])
		};
	this.buttonOver = function(a) {
		s_bMobile || (a.target.cursor = "pointer")
	};
	this.setPosition = function(a, e) {
		k.x = a;
		k.y = e
	};
	this.getButtonImage = function() {
		return k
	};
	this._init(a, d, c, b, f)
}

function CGfxButton(a, d, c, b) {
	var f, h, g, l, m, e, n, k = [],
		p;
	this._init = function(a, c, b, g) {
		f = !1;
		h = 1;
		e = [];
		n = [];
		p = createBitmap(b);
		p.x = a;
		p.y = c;
		p.scaleX = p.scaleY = h;
		p.regX = b.width / 2;
		p.regY = b.height / 2;
		g.addChild(p);
		this._initListener()
	};
	this.unload = function() {
		s_bMobile ? p.off("mousedown", g) : (p.off("mousedown", g), p.off("mouseover", m));
		p.off("pressup", l);
		b.removeChild(p)
	};
	this.setVisible = function(a) {
		p.visible = a
	};
	this.setClickable = function(a) {
		f = !a
	};
	this._initListener = function() {
		s_bMobile ? g = p.on("mousedown", this.buttonDown) :
			(g = p.on("mousedown", this.buttonDown), m = p.on("mouseover", this.buttonOver));
		l = p.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, c, b) {
		e[a] = c;
		n[a] = b
	};
	this.addEventListenerWithParams = function(a, c, b, g) {
		e[a] = c;
		n[a] = b;
		k = g
	};
	this.buttonRelease = function() {
		f || (p.scaleX = h, p.scaleY = h, e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(n[ON_MOUSE_UP], k))
	};
	this.buttonDown = function() {
		f || (p.scaleX = .9 * h, p.scaleY = .9 * h, playSound("click", 1, !1), e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], k))
	};
	this.buttonOver =
		function(a) {
			s_bMobile || f || (a.target.cursor = "pointer")
		};
	this.pulseAnimation = function() {
		createjs.Tween.get(p).to({
			scaleX: 1.1 * h,
			scaleY: 1.1 * h
		}, 850, createjs.Ease.quadOut).to({
			scaleX: h,
			scaleY: h
		}, 650, createjs.Ease.quadIn).call(function() {
			t.pulseAnimation()
		})
	};
	this.trembleAnimation = function() {
		createjs.Tween.get(p).to({
			rotation: 5
		}, 75, createjs.Ease.quadOut).to({
			rotation: -5
		}, 140, createjs.Ease.quadIn).to({
			rotation: 0
		}, 75, createjs.Ease.quadIn).wait(750).call(function() {
			t.trebleAnimation()
		})
	};
	this.setPosition = function(a,
		e) {
		p.x = a;
		p.y = e
	};
	this.setX = function(a) {
		p.x = a
	};
	this.setY = function(a) {
		p.y = a
	};
	this.getButtonImage = function() {
		return p
	};
	this.getX = function() {
		return p.x
	};
	this.getY = function() {
		return p.y
	};
	var t = this;
	this._init(a, d, c, b);
	return this
}

function CMenu() {
	var a, d, c, b, f, h, g, l, m, e, n, k, p, t, v = null,
		r = null;
	this._init = function() {
		g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(g);
		var w = s_oSpriteLibrary.getSprite("but_play");
		l = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 300, w, s_oStage);
		l.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		w = s_oSpriteLibrary.getSprite("but_credits");
		f = w.width / 2 + 10;
		h = w.height / 2 + 10;
		n = new CGfxButton(f, h, w, s_oStage);
		n.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
		if (!1 === DISABLE_SOUND_MOBILE ||
			!1 === s_bMobile) w = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - w.width / 4 - 10, b = w.height / 2 + 10, e = new CToggle(c, b, w, s_bAudioActive, s_oStage), e.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		var y = window.document;
		w = y.documentElement;
		v = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
		r = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (v = !1);
		v && screenfull.isEnabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"),
			a = f + w.width / 2 + 10, d = w.height / 2 + 10, k = new CToggle(a, d, w, s_bFullscreen, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		w = s_oSpriteLibrary.getSprite("logo");
		p = new CLightIndicator(w, CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 100, s_oStage);
		t = [];
		for (y = 0; 7 > y; y++) w = s_oSpriteLibrary.getSprite("letter_" + y), w = new CLightIndicator(w, LETTERS_POSITION[y].x + -170, LETTERS_POSITION[y].y + -600, s_oStage), t.push(w);
		this.animLogo();
		m = new createjs.Shape;
		m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH,
			CANVAS_HEIGHT);
		s_oStage.addChild(m);
		createjs.Tween.get(m).to({
			alpha: 0
		}, 1E3).call(function() {
			m.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_oLocalStorage.isUsed() || new CMsgBox(TEXT_IOS_PRIVATE)
	};
	this.unload = function() {
		l.unload();
		l = null;
		m.visible = !1;
		n.unload();
		p.unload();
		for (var a = 0; a < t.length; a++) t[a].unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e.unload(), e = null;
		v && screenfull.isEnabled && k.unload();
		s_oStage.removeAllChildren();
		s_oMenu = g = null
	};
	this.refreshButtonPos = function(g,
		l) {
		n.setPosition(f + g, l + h);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || e.setPosition(c - g, l + b);
		v && screenfull.isEnabled && k.setPosition(a + g, d + l)
	};
	this.animLogo = function() {
		p.slowHighlight(2E3, 0, function() {});
		for (var a = 0; a < t.length; a++) t[a].slowHighlight(2E3, 1500, s_oMenu.animLogo)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onCreditsBut = function() {
		new CCreditsPanel
	};
	this.resetFullscreenBut = function() {
		v && screenfull.isEnabled && k.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? r.call(window.document) : v.call(window.document.documentElement);
		sizeHandler()
	};
	this._onButPlayRelease = function() {
		this.unload();
		$(s_oMain).trigger("start_session");
		s_oMain.gotoGame()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {
	function d(a) {
		a || (a = window.event);
		a.preventDefault();
		switch (a.keyCode) {
			case 37:
				f = !0;
				g || (g = !0, p.shiftElementsToLeft(), playSound("flipper", 1, !1));
				break;
			case 39:
				h = !0;
				g || (g = !0, p.shiftElementsToRight(), playSound("flipper", 1, !1));
				break;
			case 40:
				g || (g = !0, s_oTable.loadSpring())
		}
	}

	function c(a) {
		a || (a = window.event);
		a.preventDefault();
		g = !1;
		switch (a.keyCode) {
			case 37:
				f = !1;
				break;
			case 39:
				h = !1;
				break;
			case 40:
				s_oTable.releaseSpring()
		}
	}
	var b, f, h, g, l, m, e, n, k = null,
		p, t, v, r, w, y, D, E, I, A, z, G, Q, F, M;
	this._init =
		function() {
			m = l = g = h = f = b = !1;
			e = NUM_BALL;
			M = {
				x: LERP_SLOW.x,
				y: LERP_SLOW.y
			};
			new CPhysicsController;
			new CObjectBuilder;
			new CSCoreController;
			t = s_oObjectBuilder.addBall(BALL_RADIUS, BALL_STARTPOS.x, BALL_STARTPOS.y, .1, .7, 0);
			A = new createjs.Container;
			A.scaleX = A.scaleY = ZOOM;
			s_oStage.addChild(A);
			z = new createjs.Container;
			A.addChild(z);
			G = new createjs.Container;
			A.addChild(G);
			w = new createjs.Shape;
			w.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
			s_oStage.addChild(w);
			p = new CTable(z, G);
			F = {
				x: BALL_STARTPOS.x * ZOOM + CANVAS_WIDTH / 2,
				y: BALL_STARTPOS.y * ZOOM + CANVAS_HEIGHT / 2
			};
			var a = s_oSpriteLibrary.getSprite("ball");
			v = createBitmap(a);
			v.regX = a.width / 2;
			v.regY = a.height / 2;
			z.addChild(v);
			Q = new CPausePanel(s_oStage);
			n = new CInterface;
			n.refreshScore(0);
			s_oScoreController.addEventListener(ON_INCREASE_JACKPOT, s_oTable.onJackpotIncreased);
			s_oScoreController.addEventListener(ON_INCREASE_SCORE, n.refreshScore);
			a = s_oSpriteLibrary.getSprite("flipper");
			E = createBitmap(a);
			E.x = 726;
			E.y = 1706;
			E.regX = a.width - 14;
			E.regY =
				28;
			z.addChild(E);
			a = s_oSpriteLibrary.getSprite("flipper");
			I = createBitmap(a);
			I.x = 326;
			I.y = 1706;
			I.regX = a.width - 14;
			I.regY = 28;
			I.scaleX = -1;
			z.addChild(I);
			p.activeShield();
			if (s_bMobile) {
				a = s_oSpriteLibrary.getSprite("hand_anim");
				var c = a.width / 5,
					k = a.height / 2;
				a = new createjs.SpriteSheet({
					images: [a],
					frames: {
						width: c,
						height: k,
						regX: c / 2,
						regY: k / 2
					},
					animations: {
						start: [5, 9, "stop"],
						stop: [9, 9, "back", .02],
						back: [0, 4, "start"]
					}
				});
				r = createSprite(a, "start", c / 2, k / 2, c, k);
				r.x = CANVAS_WIDTH_HALF;
				r.y = CANVAS_HEIGHT_HALF - 200;
				r.visible = !1;
				s_oStage.addChild(r)
			}
			new CHelpPanel;
			this.updateCamera()
		};
	this.moveBall = function(a) {
		a = {
			x: a.localX / WORLD_SCALE,
			y: a.localY / WORLD_SCALE
		};
		t.SetLinearVelocity({
			x: 0,
			y: 0
		});
		t.SetAngularVelocity(0);
		t.SetPosition(a);
		t.SetActive(!1)
	};
	this.releaseBall = function() {
		t.SetActive(!0)
	};
	this._onPressDown = function(a) {
		b && (a.localX > CANVAS_WIDTH_HALF ? m && (h = !0, p.shiftElementsToRight()) : m && (f = !0, p.shiftElementsToLeft()), playSound("flipper", 1, !1), a.localY > SETTINGS_HEIGHT && s_oTable.loadSpring())
	};
	this._onPressUp = function(a) {
		if (b) {
			r.visible = !1;
			if (!1 === h && !0 === f || !0 === h && !1 === f) f = h = !1;
			a.localX > CANVAS_WIDTH_HALF ? h = !1 : f = !1;
			s_oTable.releaseSpring()
		}
	};
	this.resetBallPos = function() {
		var a = {
			x: BALL_STARTPOS.x / WORLD_SCALE,
			y: BALL_STARTPOS.y / WORLD_SCALE
		};
		setTimeout(function() {
			t.SetLinearVelocity({
				x: 0,
				y: 0
			});
			t.SetAngularVelocity(0);
			t.SetPosition(a)
		}, 500)
	};
	this.ballInGame = function(a) {
		m = a
	};
	this.restartGame = function() {
		$(s_oMain).trigger("show_interlevel_ad");
		s_oScoreController.resetScore();
		s_oTable.reset();
		s_oTable.unblockLaunch();
		s_oTable.activeShield();
		b = !0;
		e = NUM_BALL;
		n.resetBallRemaining()
	};
	this.unload = function() {
		b = !1;
		n.unload();
		null !== k && k.unload();
		s_bMobile ? w.removeAllEventListeners() : (document.onkeydown = null, document.onkeyup = null);
		createjs.Tween.removeAllTweens();
		s_oStage.removeAllChildren();
		s_oPhysicsController.unload()
	};
	this.setFlippers = function(a, e) {
		D = a;
		y = e
	};
	this.setNewLaunch = function() {
		s_oGame.resetBallPos();
		p.activeShield();
		0 === e && (b = !1, s_oTable.blockLaunch(), s_oGame.gameOver())
	};
	this.setExtraBall = function() {
		l = !0;
		n.activeExtraBallAnim(e -
			1)
	};
	this.isExtraBall = function() {
		return l
	};
	this.launchBall = function(a) {
		t.SetActive(!0);
		t.ApplyImpulse({
			x: -.001 + .002 * Math.random(),
			y: -a
		}, t.GetPosition());
		M = LERP_FOLLOW_BALL
	};
	this.onBallLaunched = function() {
		l ? (n.disableExtraBallAnim(), l = !1) : e--
	};
	this.onBallOut = function() {
		l ? (n.disableExtraBallAnim(), l = !1, s_oTable.resetOnExtraBall()) : (e--, 0 < e && n.refreshBallRemaining(e - 1), s_oTable.reset());
		s_oGame.ballInGame(!1);
		M = LERP_SLOW;
		s_oTable.unblockLaunch();
		s_oGame.setNewLaunch();
		playSound("ball_out", 1, !1)
	};
	this.getBall =
		function() {
			return t
		};
	this.getBallSprite = function() {
		return v
	};
	this.onExit = function() {
		$(s_oMain).trigger("end_session");
		s_oGame.unload();
		s_oMain.gotoMenu()
	};
	this._onExitHelp = function() {
		b = !0;
		s_bMobile && (r.visible = !0);
		playSound("start_game", 1, !1);
		$(s_oMain).trigger("start_level", 1);
		s_bMobile ? (w.on("mousedown", this._onPressDown), w.on("pressup", this._onPressUp)) : (document.onkeydown = d, document.onkeyup = c)
	};
	this.gameOver = function() {
		k = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
		k.show(s_oScoreController.getScore())
	};
	this.onPause = function() {
		b = !1;
		Q.show()
	};
	this.onResume = function() {
		b = !0;
		Q.hide()
	};
	this.updateCamera = function() {
		var a = -t.GetPosition().x * ZOOM_PER_WORLDSCALE + CANVAS_WIDTH_HALF;
		var e = (-t.GetPosition().y * ZOOM_PER_WORLDSCALE + CANVAS_HEIGHT_HALF - F.y) * M.y;
		F.x += (a - F.x) * M.x;
		F.y += e;
		a = -(ZOOM_TABLE_SIZE.w - CANVAS_WIDTH + s_iOffsetX);
		F.x < a && (F.x = a);
		F.x > s_iOffsetX && (F.x = s_iOffsetX);
		a = -(ZOOM_TABLE_SIZE.h - CANVAS_HEIGHT + s_iOffsetY);
		F.y < a && (F.y = a);
		F.y > s_iOffsetY && (F.y = s_iOffsetY);
		A.x = F.x;
		A.y = F.y
	};
	this.update = function() {
		b &&
			(f ? y.SetMotorSpeed(FLIPPER_STRENGTH) : y.SetMotorSpeed(-FLIPPER_STRENGTH), h ? D.SetMotorSpeed(-FLIPPER_STRENGTH) : D.SetMotorSpeed(FLIPPER_STRENGTH), this.updateCamera(), s_oPhysicsController.update(F), s_oTable.update(), v.x = t.GetPosition().x * WORLD_SCALE, v.y = t.GetPosition().y * WORLD_SCALE, E.rotation = D.GetBodyA().GetAngle() * TODEGREE_PROPORTION, I.rotation = y.GetBodyA().GetAngle() * TODEGREE_PROPORTION, t.GetPosition().y > BALL_OUT_SAFE_LIMIT && (t.SetPosition({
				x: t.GetPosition().x,
				y: t.GetPosition().y - BALL_OUT_SAFE_LIMIT /
					2
			}), s_oGame.onBallOut()))
	};
	s_oGame = this;
	this._init()
}
var s_oGame;

function CInterface() {
	var a, d, c, b, f, h, g, l, m, e, n, k, p, t, v, r, w, y, D, E = null,
		I = null;
	this._init = function() {
		var A, z = s_oSpriteLibrary.getSprite("but_exit");
		g = CANVAS_WIDTH - z.width / 2 - 10;
		l = z.height / 2 + 10;
		p = new CGfxButton(g, l, z, s_oStage);
		p.addEventListener(ON_MOUSE_UP, this._onExit, this);
		f = A = g - z.width - 10;
		h = z.height / 2 + 10;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"), k = new CToggle(f, h, z, s_bAudioActive, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), A = f -
			z.width / 2 - 10;
		z = window.document;
		var G = z.documentElement;
		E = G.requestFullscreen || G.mozRequestFullScreen || G.webkitRequestFullScreen || G.msRequestFullscreen;
		I = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (E = !1);
		E && screenfull.isEnabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), c = A - 10, b = z.height / 2 + 10, t = new CToggle(c, b, z, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		z = s_oSpriteLibrary.getSprite("but_settings");
		D = new CGUIExpandible(g, l, z, s_oStage);
		D.addButton(p);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || D.addButton(k);
		E && screenfull.isEnabled && D.addButton(t);
		z = s_oSpriteLibrary.getSprite("score_panel");
		a = z.width / 2 + 10;
		d = z.height / 2 + 10;
		r = new createjs.Container;
		r.x = a;
		r.y = d;
		s_oStage.addChild(r);
		A = createBitmap(z);
		A.regX = z.width / 2;
		A.regY = z.height / 2;
		r.addChild(A);
		z = s_oSpriteLibrary.getSprite("star");
		A = createBitmap(z);
		A.x = -90;
		A.y = -16;
		A.regX = z.width / 2;
		A.regY = z.height / 2;
		A.scaleX = A.scaleY = .7;
		r.addChild(A);
		w = new createjs.Text(0,
			" 28px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		w.x = A.x + 28;
		w.y = A.y;
		w.textAlign = "left";
		w.textBaseline = "middle";
		w.lineWidth = 200;
		r.addChild(w);
		z = s_oSpriteLibrary.getSprite("ball");
		m = A.x;
		e = A.y + 38;
		n = z.width / 2 + 4;
		v = [];
		for (A = 0; A < NUM_BALL - 1; A++) G = createBitmap(z), G.x = m + n * A, G.y = e, G.regX = z.width / 2, G.regY = z.height / 2, G.scaleX = G.scaleY = .5, r.addChild(G), v.push(G);
		z = s_oSpriteLibrary.getSprite("extra_ball");
		y = createBitmap(z);
		y.regX = z.width / 2;
		y.regY = z.height / 2;
		y.alpha = 0;
		r.addChild(y);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k.unload(), k = null;
		E && screenfull.isEnabled && t.unload();
		D.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function(e, c) {
		D.refreshPos(e, c);
		r.x = a + e;
		r.y = d + c
	};
	this.refreshScore = function(a) {
		w.text = a.toLocaleString()
	};
	this.refreshBallRemaining = function(a) {
		v[a].visible = !1
	};
	this.resetBallRemaining = function() {
		for (var a = 0; a < v.length; a++) v[a].visible = !0
	};
	this.activeExtraBallAnim = function(a) {
		y.x = m + a * n;
		y.y = e;
		y.alpha = 1;
		createjs.Tween.get(y, {
			loop: !0
		}).to({
				alpha: 0
			},
			500).to({
			alpha: 1
		}, 500).wait(1E3)
	};
	this.disableExtraBallAnim = function() {
		createjs.Tween.removeTweens(y);
		y.alpha = 0
	};
	this._onButHelpRelease = function() {
		_oHelpPanel = new CHelpPanel
	};
	this._onButRestartRelease = function() {
		s_oGame.restartGame();
		$(s_oMain).trigger("restart_level", 1)
	};
	this.onExitFromHelp = function() {
		_oHelpPanel.unload()
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onExit = function() {
		new CAreYouSurePanel(s_oGame.onExit)
	};
	this.resetFullscreenBut =
		function() {
			E && screenfull.isEnabled && t.setActive(s_bFullscreen)
		};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? I.call(window.document) : E.call(window.document.documentElement);
		sizeHandler()
	};
	s_oInterface = this;
	this._init();
	return this
}
var s_oInterface = null;

function CHelpPanel() {
	var a, d, c, b;
	this._init = function() {
		c = new createjs.Shape;
		c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.alpha = 1;
		c.on("mousedown", function() {
			f._onExitHelp()
		});
		s_oStage.addChild(c);
		(new createjs.Tween.get(c)).to({
			alpha: .7
		}, 500);
		b = new createjs.Container;
		b.on("mousedown", function() {
			f._onExitHelp()
		});
		s_oStage.addChild(b);
		var d = s_oSpriteLibrary.getSprite("msg_box"),
			g = createBitmap(d);
		g.regX = d.width / 2;
		g.regY = d.height / 2;
		b.addChild(g);
		b.x = CANVAS_WIDTH / 2;
		b.y = CANVAS_HEIGHT +
			d.height / 2;
		a = b.y;
		(new createjs.Tween.get(b)).to({
			y: CANVAS_HEIGHT / 2 - 40
		}, 500, createjs.Ease.cubicOut);
		if (s_bMobile) {
			d = s_oSpriteLibrary.getSprite("flipper");
			g = createBitmap(d);
			g.x = 250;
			g.y = -80;
			g.regX = d.width - 7;
			g.regY = 14;
			g.scaleX = .5;
			g.scaleY = .5;
			b.addChild(g);
			d = s_oSpriteLibrary.getSprite("flipper");
			var l = createBitmap(d);
			l.x = -250;
			l.y = -80;
			l.regX = d.width - 7;
			l.regY = 14;
			l.scaleX = -.5;
			l.scaleY = .5;
			b.addChild(l);
			createjs.Tween.get(l, {
				loop: !0
			}).to({
				rotation: -50
			}, 100, createjs.Ease.cubicIn).wait(500 * Math.random()).to({
					rotation: 0
				},
				500, createjs.Ease.cubicIn);
			createjs.Tween.get(g, {
				loop: !0
			}).to({
				rotation: 50
			}, 100, createjs.Ease.cubicIn).wait(500 * Math.random()).to({
				rotation: 0
			}, 500, createjs.Ease.cubicIn);
			d = 300;
			g = 70;
			new CTLText(b, -(d / 2), -110 - g / 2, d, g, 20, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_HELP1_MOBILE, !0, !0, !0, !1)
		} else g = 80, new CTLText(b, -250, -110 - g / 2, 300, g, 20, "left", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_HELP1, !0, !0, !0, !1), d = s_oSpriteLibrary.getSprite("keys"), g = createBitmap(d), g.x = 130, g.y = -100, g.regX = d.width /
			2, g.regY = d.height / 2, b.addChild(g);
		d = 400;
		g = 80;
		new CTLText(b, -(d / 2), 50 - g / 2, d, g, 20, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_HELP2, !0, !0, !0, !1);
		d = s_oSpriteLibrary.getSprite("star");
		g = createBitmap(d);
		g.regX = d.width / 2;
		g.regY = d.height / 2;
		g.y = 120;
		b.addChild(g)
	};
	this.unload = function() {
		s_oStage.removeChild(c);
		s_oStage.removeChild(b);
		b.off("mousedown", function() {
			f._onExitHelp()
		});
		c.off("mousedown", function() {
			f._onExitHelp()
		})
	};
	this._onExitHelp = function() {
		d || (d = !0, (new createjs.Tween.get(c)).to({
				alpha: 0
			},
			500), (new createjs.Tween.get(b)).to({
			y: a
		}, 400, createjs.Ease.backIn).call(function() {
			f.unload();
			s_oGame._onExitHelp()
		}))
	};
	var f = this;
	this._init()
}

function CCreditsPanel() {
	var a, d, c, b, f, h, g;
	this._init = function() {
		d = new createjs.Shape;
		d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		d.alpha = 0;
		s_oStage.addChild(d);
		createjs.Tween.get(d).to({
			alpha: .7
		}, 500);
		h = new createjs.Shape;
		h.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.alpha = .01;
		g = h.on("click", this._onLogoButRelease);
		s_oStage.addChild(h);
		c = new createjs.Container;
		s_oStage.addChild(c);
		var l = s_oSpriteLibrary.getSprite("msg_box"),
			m = createBitmap(l);
		m.regX = l.width / 2;
		m.regY = l.height / 2;
		c.addChild(m);
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT + l.height / 2;
		a = c.y;
		createjs.Tween.get(c).to({
			y: CANVAS_HEIGHT / 2
		}, 500, createjs.Ease.quartIn);
		l = 400;
		m = 60;
		new CTLText(c, -(l / 2), -90 - m / 2, l, m, 40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_DEVELOPED, !0, !0, !0, !1);
		l = 400;
		m = 60;
		new CTLText(c, -(l / 2), 70 - m / 2, l, m, 40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, "www.codethislab.com", !0, !0, !0, !1);
		l = s_oSpriteLibrary.getSprite("ctl_logo");
		f = createBitmap(l);
		f.regX = l.width /
			2;
		f.regY = l.height / 2;
		c.addChild(f);
		l = s_oSpriteLibrary.getSprite("but_exit");
		b = new CGfxButton(270, -138, l, c);
		b.addEventListener(ON_MOUSE_UP, this.unload, this)
	};
	this.unload = function() {
		h.off("click", g);
		b.setClickable(!1);
		createjs.Tween.get(d).to({
			alpha: 0
		}, 500);
		createjs.Tween.get(c).to({
			y: a
		}, 400, createjs.Ease.backIn).call(function() {
			s_oStage.removeChild(d);
			s_oStage.removeChild(c);
			b.unload()
		})
	};
	this._onLogoButRelease = function() {
		window.open("https://www.atterolabs.com")
	};
	this._onMoreGamesReleased =
		function() {
			window.open("https://www.atterolabs.com")
		};
	this._init()
}

function CAreYouSurePanel(a, d) {
	var c, b, f, h, g, l;
	this._init = function(a, d) {
		h = new createjs.Shape;
		h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.alpha = 0;
		l = h.on("mousedown", function() {});
		s_oStage.addChild(h);
		createjs.Tween.get(h).to({
			alpha: .7
		}, 500);
		g = new createjs.Container;
		s_oStage.addChild(g);
		var e = s_oSpriteLibrary.getSprite("credits_panel"),
			n = createBitmap(e);
		n.regX = e.width / 2;
		n.regY = e.height / 2;
		g.addChild(n);
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT + e.height / 2;
		c = g.y;
		createjs.Tween.get(g).to({
			y: CANVAS_HEIGHT /
				2
		}, 500, createjs.Ease.quartIn);
		n = new createjs.Text(TEXT_ARE_SURE, " 34px " + PRIMARY_FONT, "#000000");
		n.y = -e.height / 2 + 120;
		n.textAlign = "center";
		n.textBaseline = "middle";
		n.lineWidth = 400;
		n.outline = 5;
		g.addChild(n);
		e = new createjs.Text(TEXT_ARE_SURE, " 34px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		e.y = n.y;
		e.textAlign = "center";
		e.textBaseline = "middle";
		e.lineWidth = 400;
		g.addChild(e);
		b = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes"), g);
		b.addEventListener(ON_MOUSE_UP, this._onButYes, this);
		f = new CGfxButton(-110,
			80, s_oSpriteLibrary.getSprite("but_no"), g);
		f.addEventListener(ON_MOUSE_UP, this._onButNo, this);
		f.pulseAnimation()
	};
	this._onButYes = function() {
		f.setClickable(!1);
		b.setClickable(!1);
		createjs.Tween.get(h).to({
			alpha: 0
		}, 500);
		createjs.Tween.get(g).to({
			y: c
		}, 400, createjs.Ease.backIn).call(function() {
			m.unload();
			a && a()
		})
	};
	this._onButNo = function() {
		f.setClickable(!1);
		b.setClickable(!1);
		createjs.Tween.get(h).to({
			alpha: 0
		}, 500);
		createjs.Tween.get(g).to({
			y: c
		}, 400, createjs.Ease.backIn).call(function() {
			m.unload();
			d &&
				d()
		})
	};
	this.unload = function() {
		f.unload();
		b.unload();
		s_oStage.removeChild(h);
		s_oStage.removeChild(g);
		h.off("mousedown", l)
	};
	var m = this;
	this._init(a, d)
}

function CEndPanel(a) {
	var d, c, b, f, h, g, l, m, e, n;
	this._init = function(a) {
		l = new createjs.Shape;
		l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		l.alpha = 0;
		n = l.on("mousedown", function() {});
		s_oStage.addChild(l);
		createjs.Tween.get(l).to({
			alpha: .7
		}, 500);
		g = new createjs.Container;
		s_oStage.addChild(g);
		a = s_oSpriteLibrary.getSprite("msg_box");
		var k = createBitmap(a);
		k.regX = a.width / 2;
		k.regY = a.height / 2;
		g.addChild(k);
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT + a.height / 2;
		d = g.y;
		c = new createjs.Container;
		c.y = -120;
		g.addChild(c);
		a = s_oSpriteLibrary.getSprite("bestscore");
		k = createBitmap(a);
		k.regY = a.height / 2;
		c.addChild(k);
		b = new createjs.Text("0", " 38px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		b.x = k.x + a.width + 4;
		b.y = k.y;
		b.textAlign = "left";
		b.textBaseline = "middle";
		b.lineWidth = 200;
		c.addChild(b);
		f = new createjs.Container;
		f.y = -50;
		g.addChild(f);
		a = s_oSpriteLibrary.getSprite("star");
		k = createBitmap(a);
		k.regY = a.height / 2;
		f.addChild(k);
		h = new createjs.Text("0", " 28px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		h.x = k.x + a.width + 4;
		h.y =
			k.y;
		h.textAlign = "left";
		h.textBaseline = "middle";
		h.lineWidth = 200;
		f.addChild(h);
		e = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_restart"), g);
		e.addEventListener(ON_MOUSE_UP, this._onRestart, this);
		e.pulseAnimation();
		m = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_home"), g);
		m.addEventListener(ON_MOUSE_UP, this._onExit, this)
	};
	this.unload = function() {
		l.off("mousedown", n);
		s_oStage.removeChild(g);
		s_oStage.removeChild(l)
	};
	this.show = function(a) {
		playSound("game_over", 1, !1);
		a > s_iTotalScore && (s_iTotalScore =
			a, s_oLocalStorage.saveData());
		b.text = s_iTotalScore.toLocaleString();
		c.regX = c.getBounds().width / 2;
		h.text = a.toLocaleString();
		f.regX = f.getBounds().width / 2;
		createjs.Tween.get(g).to({
			y: CANVAS_HEIGHT / 2
		}, 500, createjs.Ease.quartIn);
		$(s_oMain).trigger("save_score", a, "DON'T FORGET TO SET THE MODE");
		$(s_oMain).trigger("end_level", 1);
		var e = "You collected <strong>" + a + " points</strong>!<br><br>Share your score with your friends!",
			d = "My score is " + a + " points! Can you do better?";
		$(s_oMain).trigger("share_event",
			a, "200x200.jpg", "Congratulations!", e, d)
	};
	this._onRestart = function() {
		e.setClickable(!1);
		m.setClickable(!1);
		s_oGame.restartGame();
		createjs.Tween.get(l).to({
			alpha: 0
		}, 500);
		createjs.Tween.get(g).to({
			y: d
		}, 400, createjs.Ease.backIn).call(function() {
			s_oStage.removeChild(l);
			s_oStage.removeChild(g)
		})
	};
	this._onExit = function() {
		$(s_oMain).trigger("show_interlevel_ad");
		s_oGame.onExit()
	};
	this._init(a);
	return this
}

function CPhysicsController() {
	var a = Box2D.Common.Math.b2Vec2,
		d = Box2D.Dynamics.b2World,
		c = Box2D.Dynamics.b2DebugDraw,
		b, f, h = this,
		g, l, m;
	this.init = function() {
		b = new a(0, GRAVITY);
		f = new d(b, !0);
		g = [];
		l = [];
		if (DEBUG_BOX2D) {
			var e = document.createElement("canvas");
			e.id = "debug";
			e.width = s_oCanvas.width;
			e.height = s_oCanvas.height;
			e.style.position = "fixed";
			document.body.appendChild(e);
			$("#debug").css("pointer-events", "none");
			m = document.getElementById("debug").getContext("2d");
			e = new c;
			e.SetSprite(m);
			e.SetDrawScale(WORLD_SCALE *
				ZOOM);
			e.SetFillAlpha(DEBUG_BOX2D_ALPHA);
			e.SetLineThickness(1);
			e.SetFlags(c.e_shapeBit);
			f.SetDebugDraw(e);
			sizeHandler()
		}
		this.createAContactListener()
	};
	this.createAContactListener = function() {
		var a = new Box2D.Dynamics.b2ContactListener;
		a.BeginContact = function(a) {
			var e = a.GetFixtureA().GetUserData(),
				c = a.GetFixtureB().GetUserData();
			s_oPhysicsController.processContactEvent(CONTACT_BEGIN, e, a);
			s_oPhysicsController.processContactEvent(CONTACT_BEGIN, c, a)
		};
		a.EndContact = function(a) {
			var e = a.GetFixtureA().GetUserData(),
				c = a.GetFixtureB().GetUserData();
			s_oPhysicsController.processContactEvent(CONTACT_END, e, a);
			s_oPhysicsController.processContactEvent(CONTACT_END, c, a)
		};
		f.SetContactListener(a)
	};
	this.destroyBodyVector = function(a) {
		f.DestroyBody(a)
	};
	this.destroyAllBodies = function() {
		for (var a = f.GetBodyList(); a;) {
			var c = a;
			a = a.GetNext();
			f.DestroyBody(c)
		}
	};
	this.destroyAllJoints = function() {
		for (var a = f.GetJointList(); a;) {
			var c = a;
			a = a.GetNext();
			f.DestroyJoint(c)
		}
	};
	this.destroyAllContacts = function() {
		for (var a = f.GetContactList(); a;) {
			var c =
				a.GetNext();
			f.DestroyJoint(c)
		}
	};
	this.unload = function() {
		s_oPhysicsController.destroyAllJoints();
		s_oPhysicsController.destroyAllBodies();
		s_oPhysicsController.destroyAllContacts();
		DEBUG_BOX2D && document.getElementById("debug").remove();
		f = s_oPhysicsController = null
	};
	this.processContactEvent = function(a, c, b) {
		c && c.contacttype === a && c.callback(c.params, b)
	};
	this.startComputing = function(a) {
		a.GetBody().SetActive(!0)
	};
	this.movePlayer = function(a, c, b) {
		c = {
			x: c / WORLD_SCALE,
			y: b / WORLD_SCALE
		};
		a.GetBody().SetPosition(c)
	};
	this.applyImpulse = function(a) {
		a.GetBody().ApplyImpulse({
			x: .8,
			y: 1
		}, a.GetBody().GetWorldCenter())
	};
	this.decreaseSpeedRotation = function(a) {
		var e = .99 * a.GetBody().GetAngularVelocity();
		a.GetBody().SetAngularVelocity(e)
	};
	this.getSpeedRotation = function(a) {
		return a.GetBody().GetAngularVelocity()
	};
	this.moveObject = function(a, c, b) {
		c = {
			x: c / WORLD_SCALE,
			y: b / WORLD_SCALE
		};
		a.GetBody().SetPosition(c)
	};
	this.destroyBody = function(a) {
		f.DestroyBody(a.GetBody())
	};
	this.getInstance = function() {
		null === h && (h = new CPhysicsController);
		return h
	};
	this.update = function(a) {
		f.Step(1 / FPS, 8, 8);
		DEBUG_BOX2D && (m.save(), m.clearRect(0, 0, s_oCanvas.width, s_oCanvas.height), m.translate(a.x, a.y), f.DrawDebugData(), m.restore());
		f.ClearForces();
		this._deactiveAllBodyInList();
		this._activeAllBodyInList()
	};
	this.getWorld = function() {
		return f
	};
	this.getElementPosition = function(a) {
		var e = a.GetBody().GetPosition();
		return {
			x: e.x * WORLD_SCALE,
			y: e.y * WORLD_SCALE,
			angle: 180 * a.GetBody().GetAngle() / Math.PI
		}
	};
	this.getElementAngle = function(a) {
		return 180 * a.GetBody().GetAngle() /
			Math.PI
	};
	this.enableBody = function(a, c) {
		l.push({
			body: a,
			pos: c
		})
	};
	this.disableBody = function(a, c) {
		g.push({
			body: a,
			pos: c
		})
	};
	this._deactiveAllBodyInList = function() {
		for (var a = 0; a < g.length; a++) g[a].body.SetActive(!1), g[a].pos && g[a].body.SetPosition({
			x: g[a].pos.x / WORLD_SCALE,
			y: g[a].pos.y / WORLD_SCALE
		});
		g = []
	};
	this._activeAllBodyInList = function() {
		for (var a = 0; a < l.length; a++) l[a].body.SetActive(!0), l[a].pos && l[a].body.SetPosition({
			x: l[a].pos.x / WORLD_SCALE,
			y: l[a].pos.y / WORLD_SCALE
		});
		l = []
	};
	this.init();
	s_oPhysicsController =
		this
}
var s_oPhysicsController = null;

function CObjectBuilder() {
	var a = Box2D.Common.Math.b2Vec2,
		d = Box2D.Dynamics.b2BodyDef,
		c = Box2D.Dynamics.b2Body,
		b = Box2D.Dynamics.b2FixtureDef,
		f = Box2D.Collision.Shapes.b2PolygonShape,
		h = Box2D.Collision.Shapes.b2CircleShape,
		g = Box2D.Dynamics.Joints.b2RevoluteJointDef,
		l, m;
	this.init = function() {
		m = s_oPhysicsController.getInstance();
		l = m.getWorld()
	};
	this.addButton = function(a, g, k, h, m, v, r, w, y) {
		var e = new b;
		e.density = v;
		e.friction = r;
		e.restitution = w;
		e.color = 16777215;
		e.userData = y;
		v = new d;
		v.type = c.b2_staticBody;
		e.shape =
			new f;
		e.shape.SetAsBox(a / 2 / WORLD_SCALE, g / 2 / WORLD_SCALE);
		v.position.Set(k / WORLD_SCALE, h / WORLD_SCALE);
		v.angle = m * Math.PI / 180;
		a = l.CreateBody(v);
		a.CreateFixture(e);
		return a
	};
	this.addEdge = function(e, g, k, h, m, v) {
		var n = new b;
		n.density = h;
		n.friction = m;
		n.restitution = v;
		h = new d;
		h.type = c.b2_staticBody;
		n.shape = new f;
		e = new a(e.x / WORLD_SCALE, e.y / WORLD_SCALE);
		g = new a(g.x / WORLD_SCALE, g.y / WORLD_SCALE);
		n.shape.SetAsEdge(e, g);
		h.angle = k * Math.PI / 180;
		k = l.CreateBody(h);
		k.CreateFixture(n);
		return k
	};
	this.addPolygon = function(e,
		g, k, h, m) {
		var n = new b;
		n.density = k;
		n.friction = h;
		n.restitution = m;
		k = new d;
		k.type = c.b2_staticBody;
		n.shape = new f;
		h = [];
		for (m = 0; m < e.length; m++) {
			var p = new a;
			p.Set(e[m].x / WORLD_SCALE, e[m].y / WORLD_SCALE);
			h.push(p)
		}
		n.shape.SetAsArray(h, h.length);
		k.angle = g * Math.PI / 180;
		l.CreateBody(k).CreateFixture(n)
	};
	this.addBall = function(a, g, k, f, m, v) {
		var e = new b;
		e.density = f;
		e.friction = m;
		e.restitution = v;
		e.userData = {
			id: "ball"
		};
		f = new d;
		f.type = c.b2_dynamicBody;
		e.shape = new h(a / WORLD_SCALE);
		f.allowSleep = !1;
		f.bullet = !0;
		f.position.x =
			g / WORLD_SCALE;
		f.position.y = k / WORLD_SCALE;
		a = l.CreateBody(f);
		a.CreateFixture(e);
		return a
	};
	this.addCircle = function(a, g, k, f, m, v) {
		var e = new b;
		e.density = f;
		e.friction = m;
		e.restitution = v;
		f = new d;
		f.type = c.b2_dynamicBody;
		e.shape = new h(a / WORLD_SCALE);
		f.position.x = g / WORLD_SCALE;
		f.position.y = k / WORLD_SCALE;
		return l.CreateBody(f).CreateFixture(e)
	};
	this.addStaticCircle = function(a, g, k, f, m, v, r) {
		var e = new b;
		e.density = f;
		e.friction = m;
		e.restitution = v;
		e.userData = r;
		f = new d;
		f.type = c.b2_staticBody;
		e.shape = new h(a / WORLD_SCALE);
		f.position.x = g / WORLD_SCALE;
		f.position.y = k / WORLD_SCALE;
		return l.CreateBody(f).CreateFixture(e)
	};
	this.addRevoluteRectangle = function(a, n, k, m, t, v, r, w) {
		var e = new b;
		e.density = t;
		e.friction = v;
		e.restitution = r;
		t = new d;
		t.type = c.b2_dynamicBody;
		w && (t.angularVelocity = 3);
		e.shape = new f;
		e.shape.SetAsBox(a / WORLD_SCALE, n / WORLD_SCALE);
		t.position.Set(k / WORLD_SCALE, m / WORLD_SCALE);
		a = l.CreateBody(t);
		e = a.CreateFixture(e);
		n = new b;
		n.density = 3;
		n.friction = 1;
		n.restitution = .1;
		w = new d;
		w.type = c.b2_staticBody;
		n.shape = new h(10 / WORLD_SCALE);
		w.position.Set(k / WORLD_SCALE, m / WORLD_SCALE);
		k = l.CreateBody(w);
		m = k.CreateFixture(n);
		n = new g;
		n.Initialize(a, k, a.GetWorldCenter());
		l.CreateJoint(n);
		return {
			fixture1: e,
			fixture2: m
		}
	};
	this.addLeftFlipper = function(e, n, k, m, t, v) {
		var p = new b;
		p.density = m;
		p.friction = t;
		p.restitution = v;
		var w = new d;
		w.type = c.b2_dynamicBody;
		p.shape = new f;
		for (var y = [], D = 0; D < e.length; D++) {
			var E = new a;
			E.Set(e[D].x / WORLD_SCALE * -1, e[D].y / WORLD_SCALE);
			y.push(E)
		}
		p.shape.SetAsArray(y, y.length);
		w.position.Set(n / WORLD_SCALE, (k + 28) / WORLD_SCALE);
		e = l.CreateBody(w);
		e.CreateFixture(p);
		p = new b;
		p.density = m;
		p.friction = t;
		p.restitution = v;
		m = new d;
		m.type = c.b2_staticBody;
		p.shape = new h(11 / WORLD_SCALE);
		m.position.Set(n / WORLD_SCALE, k / WORLD_SCALE);
		n = l.CreateBody(m);
		n.CreateFixture(p);
		k = new g;
		m = {
			x: n.GetWorldCenter().x,
			y: n.GetWorldCenter().y
		};
		k.Initialize(e, n, m);
		k.lowerAngle = 5 * Math.PI / 180;
		k.upperAngle = 50 * Math.PI / 180;
		k.enableLimit = !0;
		k.maxMotorTorque = 1E3;
		k.enableMotor = !0;
		n = l.CreateJoint(k);
		n.EnableMotor(!0);
		return n
	};
	this.addRightFlipper = function(e, n, k, m,
		t, v) {
		var p = new b;
		p.density = m;
		p.friction = t;
		p.restitution = v;
		var w = new d;
		w.type = c.b2_dynamicBody;
		p.shape = new f;
		for (var y = [], D = 0; D < e.length; D++) {
			var E = new a;
			E.Set(e[D].x / WORLD_SCALE, e[D].y / WORLD_SCALE);
			y.push(E)
		}
		p.shape.SetAsArray(y, y.length);
		w.position.Set(n / WORLD_SCALE, (k + 28) / WORLD_SCALE);
		e = l.CreateBody(w);
		e.CreateFixture(p);
		p = new b;
		p.density = m;
		p.friction = t;
		p.restitution = v;
		m = new d;
		m.type = c.b2_staticBody;
		p.shape = new h(11 / WORLD_SCALE);
		m.position.Set(n / WORLD_SCALE, k / WORLD_SCALE);
		n = l.CreateBody(m);
		n.CreateFixture(p);
		k = new g;
		m = {
			x: n.GetWorldCenter().x,
			y: n.GetWorldCenter().y
		};
		k.Initialize(e, n, m);
		k.lowerAngle = -50 * Math.PI / 180;
		k.upperAngle = -5 * Math.PI / 180;
		k.enableLimit = !0;
		k.maxMotorTorque = 1E3;
		k.enableMotor = !0;
		n = l.CreateJoint(k);
		n.EnableMotor(!0);
		return n
	};
	this.addRectangle = function(a, g, k, h, m, v, r, w) {
		var e = new b;
		e.density = v;
		e.friction = r;
		e.restitution = w;
		v = new d;
		v.type = c.b2_staticBody;
		e.shape = new f;
		e.shape.SetAsBox(a / WORLD_SCALE, g / WORLD_SCALE);
		v.position.Set(k / WORLD_SCALE, h / WORLD_SCALE);
		v.angle = m * Math.PI / 180;
		return l.CreateBody(v).CreateFixture(e)
	};
	this.init();
	s_oObjectBuilder = this
}
var s_oObjectBuilder = null,
	EDGE_FRAME = "edge_frame",
	TOP_CHANNELLERS = "top_channellers",
	LEFT_ROUTER = "left_router",
	BOT_CHANNELLERS = "bot_channellers",
	FLIPPER_BUMPER = "flipper_bumper",
	RIGHT_CHANNELLER = "right_channeller",
	CIRCLE_BUMPER = "circle_bumper",
	PLATFORM = "platforms",
	CENTERSAFE = "centersafe",
	FLIPPER = "flipper";

function CTable(a, d) {
	var c, b, f, h, g, l, m, e, n, k, p, t;
	this._init = function(a, d) {
		var w = s_oSpriteLibrary.getSprite("pinball_bg");
		c = w.width;
		b = w.height;
		f = createBitmap(w);
		f.alpha = 1;
		a.addChild(f);
		ZOOM_TABLE_SIZE = {
			w: c * ZOOM,
			h: b * ZOOM
		};
		t = new CModuleStart(a, d);
		h = new CModuleMultiplier(a, d);
		g = new CModuleBumper(a, d);
		l = new CModuleHole(a, d);
		m = new CModuleRouter(a, d);
		e = new CModuleLetters(a, d);
		n = new CModuleJumper(a, d);
		k = new CModuleJackpot(a, d);
		p = new CModuleShield(a, d);
		this._buildTable();
		this._addCheckPoints()
	};
	this._buildTable =
		function() {
			for (var e = TileMaps.levelsettings.layers, c = GENERAL_RESTITUTION, b = 0; b < e.length; b++)
				if ("objectgroup" === e[b].type) {
					var d = e[b].objects;
					switch (e[b].name) {
						case EDGE_FRAME:
							this._addShapes(d, 0);
							break;
						case CENTERSAFE:
							var k = e[b].objects[0],
								f = this.getAdjustedPoints(0, 0, [{
									x: k.x,
									y: k.y
								}]);
							s_oObjectBuilder.addStaticCircle(k.width / 2, f[0].x + k.width / 2, f[0].y + k.width / 2, 0, 0, .75);
							f = createBitmap(s_oSpriteLibrary.getSprite("safe_pin"));
							f.x = k.x;
							f.y = k.y;
							a.addChild(f);
							break;
						case TOP_CHANNELLERS:
							for (k = 0; k < d.length; k++) this._addPolygons(d[k],
								3 * c / 2);
							break;
						case LEFT_ROUTER:
							this._addShapes(d, 0);
							break;
						case BOT_CHANNELLERS:
							for (k = 0; k < d.length; k++) d[k].ellipse ? (f = this.getAdjustedPoints(0, 0, [{
								x: d[k].x,
								y: d[k].y
							}]), s_oObjectBuilder.addStaticCircle(d[k].width / 2, f[0].x + d[k].width / 2, f[0].y + d[k].width / 2, 0, 0, 0)) : this._addPolygons(d[k], c / 2);
							break;
						case FLIPPER_BUMPER:
							g.buildFlipperBumper(d);
							break;
						case CIRCLE_BUMPER:
							g.buildCircularBumper(d);
							break;
						case RIGHT_CHANNELLER:
							for (k = 0; k < d.length; k++) this._addPolygons(d[k], .7);
							break;
						case FLIPPER:
							d = e[b].objects,
								f = d[0], f = this.getAdjustedPoints(0, 0, f.polygon), k = s_oObjectBuilder.addRightFlipper(f, 726, 1706, 1, 0, c), d = e[b].objects, f = d[0], f = this.getAdjustedPoints(0, 0, f.polygon), f = s_oObjectBuilder.addLeftFlipper(f.reverse(), 326, 1706, 1, 0, c), s_oGame.setFlippers(k, f)
					}
				}
		};
	this._addPolygons = function(a, e) {
		var c = this.getAdjustedPoints(a.x, a.y, a.polygon);
		s_oObjectBuilder.addPolygon(c, 0, 1, GENERAL_FRICTION, e)
	};
	this._addShapes = function(a, e) {
		for (var c = 0; c < a.length; c++)
			for (var b = this.getAdjustedPoints(a[c].x, a[c].y, a[c].polyline),
					g = 0; g < b.length - 1; g++) s_oObjectBuilder.addEdge({
				x: b[g].x,
				y: b[g].y
			}, {
				x: b[g + 1].x,
				y: b[g + 1].y
			}, 0, 1, GENERAL_FRICTION, e)
	};
	this._addCheckPoints = function() {
		var e = 140,
			c = 1460,
			b = s_oSpriteLibrary.getSprite("button_light_0");
		b = new CLightIndicator(b, e, c, a);
		b = {
			contacttype: CONTACT_END,
			callback: this._onCheckPoint,
			params: b
		};
		s_oObjectBuilder.addButton(8, 40, e, c, 0, 0, 0, 0, b).GetFixtureList().SetSensor(!0);
		e = 936;
		c = 1460;
		b = s_oSpriteLibrary.getSprite("button_light_0");
		b = new CLightIndicator(b, e, c, a);
		b = {
			contacttype: CONTACT_END,
			callback: this._onCheckPoint,
			params: b
		};
		s_oObjectBuilder.addButton(8, 40, e, c, 0, 0, 0, 0, b).GetFixtureList().SetSensor(!0);
		e = 56;
		c = 1460;
		b = s_oSpriteLibrary.getSprite("button_light_1");
		b = new CLightIndicator(b, e, c, a);
		b = {
			contacttype: CONTACT_END,
			callback: this._onCheckPoint,
			params: b
		};
		e = s_oObjectBuilder.addButton(8, 40, e, c, 0, 0, 0, 0, b);
		e.GetFixtureList().SetSensor(!0);
		e = 1016;
		c = 1460;
		b = s_oSpriteLibrary.getSprite("button_light_1");
		b = new CLightIndicator(b, e, c, a);
		b = {
			contacttype: CONTACT_END,
			callback: this._onCheckPoint,
			params: b
		};
		s_oObjectBuilder.addButton(8, 40, e, c, 0, 0, 0, 0, b).GetFixtureList().SetSensor(!0);
		b = {
			contacttype: CONTACT_END,
			callback: s_oGame.onBallOut,
			params: "checkpoint"
		};
		e = s_oObjectBuilder.addButton(320, 8, 520, 1900, 0, 0, 0, 0, b);
		e.GetFixtureList().SetSensor(!0)
	};
	this._onCheckPoint = function(a) {
		playSound("toggle", 1, !1);
		s_oScoreController.addButtonScore();
		a.flashing()
	};
	this.resetOnExtraBall = function() {
		k.reset()
	};
	this.reset = function() {
		s_oScoreController.resetJackpot();
		s_oScoreController.resetMultiplier();
		s_oScoreController.resetCircleBumperLevel();
		h.reset();
		g.reset();
		m.reset();
		l.reset();
		e.reset();
		n.reset();
		k.reset();
		p.reset()
	};
	this.stopLogoAnim = function() {
		e.stopAnimLogo()
	};
	this.blockLaunch = function() {
		t.block()
	};
	this.unblockLaunch = function() {
		t.unBlock();
		t.startLighting();
		e.animLogo()
	};
	this.loadSpring = function() {
		t.loadSpring()
	};
	this.releaseSpring = function() {
		t.releaseSpring()
	};
	this.shiftElementsToRight = function() {
		h.shiftElementsToRight();
		n.shiftElementsToRight()
	};
	this.shiftElementsToLeft = function() {
		h.shiftElementsToLeft();
		n.shiftElementsToLeft()
	};
	this.enableShieldBonus = function() {
		l.activeShieldLight()
	};
	this.activeShield = function() {
		p.enableShield()
	};
	this.enableExtraBallBonus = function() {
		l.activeExtraBallLight()
	};
	this.activeExtraBall = function() {
		s_oGame.setExtraBall()
	};
	this.enableJackpot = function() {
		k.enableJackpot()
	};
	this.onJackpotIncreased = function(a) {
		k.setJackpotAmount(a)
	};
	this.getTableSize = function() {
		return {
			w: c,
			h: b
		}
	};
	this.getAdjustedPoints = function(a, e, c) {
		for (var b = [], g = 0; g < c.length; g++) b[g] = {
			x: f.x + a + c[g].x,
			y: f.y + e + c[g].y
		};
		return b
	};
	this.update =
		function() {
			k.update();
			m.update();
			e.update()
		};
	s_oTable = this;
	this._init(a, d)
}
var s_oTable;
(function(a, d) {
	"undefined" === typeof onTileMapLoaded ? ("undefined" === typeof TileMaps && (TileMaps = {}), TileMaps[a] = d) : onTileMapLoaded(a, d);
	"object" === typeof module && module && module.exports && (module.exports = d)
})("levelsettings", {
	height: 1,
	infinite: !1,
	layers: [{
			data: [0],
			height: 1,
			name: "Livello tile 1",
			opacity: 1,
			type: "tilelayer",
			visible: !0,
			width: 1,
			x: 0,
			y: 0
		}, {
			image: "../sprites/pinball_reference(old).jpg",
			name: "Livello immagine 1",
			opacity: .5,
			type: "imagelayer",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "edge_frame",
			objects: [{
				height: 0,
				id: 32,
				name: "outer",
				polyline: [{
						x: 0,
						y: 0
					}, {
						x: -.333334,
						y: -1260.334
					}, {
						x: -4.33334,
						y: -1320.334
					}, {
						x: -10.33334,
						y: -1369.666
					}, {
						x: -20.3334,
						y: -1419.666
					}, {
						x: -33.6666,
						y: -1459
					}, {
						x: -50.3334,
						y: -1496.334
					}, {
						x: -77.6666,
						y: -1549
					}, {
						x: -115,
						y: -1594.334
					}, {
						x: -153.6666,
						y: -1633.666
					}, {
						x: -210.334,
						y: -1685
					}, {
						x: -241.666,
						y: -1709.666
					}, {
						x: -295,
						y: -1735
					}, {
						x: -345,
						y: -1755.666
					}, {
						x: -398.334,
						y: -1768.334
					}, {
						x: -451,
						y: -1776.334
					}, {
						x: -501,
						y: -1779
					}, {
						x: -549,
						y: -1781
					}, {
						x: -605,
						y: -1775
					}, {
						x: -661,
						y: -1767
					}, {
						x: -713,
						y: -1753
					}, {
						x: -757,
						y: -1735
					},
					{
						x: -811,
						y: -1711
					}, {
						x: -857,
						y: -1683
					}, {
						x: -899,
						y: -1651
					}, {
						x: -949,
						y: -1607
					}, {
						x: -989,
						y: -1563
					}, {
						x: -1027,
						y: -1517
					}, {
						x: -1055,
						y: -1465
					}, {
						x: -1075,
						y: -1411
					}, {
						x: -1089,
						y: -1349
					}, {
						x: -1099,
						y: -1281
					}, {
						x: -1098.334,
						y: -613
					}, {
						x: -1025.668,
						y: -541
					}, {
						x: -1025.666,
						y: -511.666
					}, {
						x: -1102.334,
						y: -434.334
					}, {
						x: -1103,
						y: -115
					}, {
						x: -1093,
						y: -96.3334
					}, {
						x: -1082.334,
						y: -87
					}, {
						x: -786.334,
						y: 51
					}, {
						x: -786.334,
						y: 96.3334
					}
				],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 1127,
				y: 1805
			}, {
				height: 0,
				id: 33,
				name: "inner",
				polyline: [{
						x: 53.3334,
						y: 0
					}, {
						x: 0,
						y: 0
					}, {
						x: -1.333334,
						y: -1218.666
					},
					{
						x: -5.33334,
						y: -1308.666
					}, {
						x: -24,
						y: -1405.334
					}, {
						x: -58,
						y: -1486.666
					}, {
						x: -84.6666,
						y: -1529.334
					}, {
						x: -106.6666,
						y: -1552.666
					}, {
						x: -164,
						y: -1606
					}, {
						x: -188,
						y: -1602.666
					}, {
						x: -200,
						y: -1592
					}, {
						x: -198,
						y: -1515.334
					}, {
						x: -188,
						y: -1503.334
					}, {
						x: -124.6666,
						y: -1502.666
					}, {
						x: -37,
						y: -1127.666
					}, {
						x: -48.8334,
						y: -1090.334
					}, {
						x: -106.9166,
						y: -942.25
					}, {
						x: -110.8126,
						y: -931.48
					}, {
						x: -113.7084,
						y: -921.708
					}, {
						x: -116.5,
						y: -911.166
					}, {
						x: -118.9166,
						y: -900.834
					}, {
						x: -121.875,
						y: -889.916
					}, {
						x: -123.8334,
						y: -879
					}, {
						x: -126.2916,
						y: -867.25
					}, {
						x: -128.25,
						y: -856
					}, {
						x: -129.6666,
						y: -842.5
					}, {
						x: -128.6666,
						y: -584
					}, {
						x: -123.3334,
						y: -568.666
					}, {
						x: -11.33334,
						y: -452
					}, {
						x: -11.33334,
						y: -157.3334
					}, {
						x: -22,
						y: -121.3334
					}, {
						x: -36.6666,
						y: -103.3334
					}, {
						x: -360,
						y: 46
					}, {
						x: -359.334,
						y: 95.3334
					}
				],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 1060,
				y: 1805.334
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "left_router",
			objects: [{
				height: 0,
				id: 50,
				name: "router_head",
				polyline: [{
					x: 0,
					y: 0
				}, {
					x: 50,
					y: 14
				}, {
					x: 48,
					y: 88
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 290,
				y: 198
			}, {
				height: 0,
				id: 53,
				name: "router_tail",
				polyline: [{
					x: 181,
					y: 0
				}, {
					x: 131,
					y: 44
				}, {
					x: 91,
					y: 88
				}, {
					x: 53,
					y: 134
				}, {
					x: 25,
					y: 186
				}, {
					x: 5,
					y: 240
				}, {
					x: 0,
					y: 291
				}, {
					x: 9,
					y: 339
				}, {
					x: 34.6666,
					y: 403.666
				}, {
					x: 43.3334,
					y: 380.334
				}, {
					x: 51.3334,
					y: 359
				}, {
					x: 62.6666,
					y: 332.334
				}, {
					x: 78,
					y: 302.334
				}, {
					x: 94,
					y: 274.334
				}, {
					x: 116,
					y: 244.334
				}, {
					x: 148.6666,
					y: 201.666
				}, {
					x: 185.3334,
					y: 156
				}, {
					x: 229.334,
					y: 89.3334
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 108,
				y: 198
			}, {
				height: 0,
				id: 95,
				name: "fork_right",
				polyline: [{
						x: 33,
						y: -37
					}, {
						x: 32,
						y: -18
					}, {
						x: 31,
						y: 2
					}, {
						x: 31,
						y: 32
					}, {
						x: 31,
						y: 56
					}, {
						x: 31,
						y: 86
					}, {
						x: 31,
						y: 111
					}, {
						x: 30,
						y: 145
					},
					{
						x: 30,
						y: 181
					}, {
						x: 31,
						y: 211
					}, {
						x: 42,
						y: 244
					}, {
						x: 63,
						y: 274
					}, {
						x: 103,
						y: 313
					}, {
						x: 123.6666,
						y: 338.334
					}, {
						x: 144,
						y: 368.666
					}, {
						x: 160.6668,
						y: 394.666
					}, {
						x: 172.6668,
						y: 423.666
					}, {
						x: 177.3334,
						y: 449
					}, {
						x: 175.3334,
						y: 473.334
					}, {
						x: 167.6666,
						y: 506.666
					}, {
						x: 161.6668,
						y: 474.334
					}, {
						x: 144.6666,
						y: 437.334
					}, {
						x: 125,
						y: 408.334
					}, {
						x: 102.6666,
						y: 381.666
					}, {
						x: 84,
						y: 362
					}, {
						x: 60,
						y: 339
					}, {
						x: 37,
						y: 317
					}, {
						x: 15,
						y: 295
					}, {
						x: -8,
						y: 267
					}, {
						x: -16,
						y: 242
					}, {
						x: -20,
						y: 208
					}, {
						x: -19,
						y: 182
					}, {
						x: -21,
						y: 146
					}, {
						x: -20,
						y: 118
					}, {
						x: -20,
						y: 89
					}, {
						x: -20,
						y: 58
					}, {
						x: -16,
						y: -39
					}
				],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 419,
				y: 337
			}, {
				height: 0,
				id: 96,
				name: "fork_left",
				polyline: [{
						x: 0,
						y: 0
					}, {
						x: -3,
						y: 18
					}, {
						x: -11,
						y: 30
					}, {
						x: -20,
						y: 40
					}, {
						x: -30,
						y: 61
					}, {
						x: -42,
						y: 80
					}, {
						x: -53,
						y: 99
					}, {
						x: -64,
						y: 113
					}, {
						x: -79,
						y: 130
					}, {
						x: -94,
						y: 150
					}, {
						x: -113,
						y: 176
					}, {
						x: -127,
						y: 197
					}, {
						x: -139,
						y: 219
					}, {
						x: -149,
						y: 236
					}, {
						x: -160,
						y: 256
					}, {
						x: -173,
						y: 280
					}, {
						x: -188,
						y: 308
					}, {
						x: -204.5,
						y: 338.5
					}, {
						x: -218,
						y: 370.334
					}, {
						x: -228.334,
						y: 406.666
					}, {
						x: -227.668,
						y: 435
					}, {
						x: -225,
						y: 456.666
					}, {
						x: -219.334,
						y: 474.5
					}, {
						x: -209.5,
						y: 494.668
					}, {
						x: -181,
						y: 529
					}, {
						x: -186,
						y: 503
					}, {
						x: -185,
						y: 463.332
					}, {
						x: -177,
						y: 434.332
					},
					{
						x: -167.3332,
						y: 408.334
					}, {
						x: -150.3334,
						y: 372
					}, {
						x: -129,
						y: 334.666
					}, {
						x: -111.2552,
						y: 305.252
					}, {
						x: -93,
						y: 279
					}, {
						x: -75,
						y: 251
					}, {
						x: -65,
						y: 231
					}, {
						x: -54,
						y: 201
					}, {
						x: -34,
						y: 173
					}, {
						x: -23,
						y: 149
					}, {
						x: -4,
						y: 126
					}, {
						x: 11,
						y: 110
					}, {
						x: 31,
						y: 84
					}, {
						x: 37,
						y: 71
					}, {
						x: 47,
						y: 44
					}, {
						x: 48,
						y: 20
					}, {
						x: 50,
						y: 4
					}
				],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 401,
				y: 313
			}, {
				height: 0,
				id: 97,
				name: "curve_top",
				polyline: [{
					x: -8,
					y: -5
				}, {
					x: 10,
					y: -33
				}, {
					x: 23,
					y: -45
				}, {
					x: 35,
					y: -52
				}, {
					x: 45,
					y: -55
				}, {
					x: 60,
					y: -58
				}, {
					x: 74,
					y: -56
				}, {
					x: 86,
					y: -49
				}, {
					x: 97,
					y: -41
				}, {
					x: 106,
					y: -30
				}, {
					x: 115,
					y: -20
				}, {
					x: 125,
					y: -6
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 298,
				y: 625
			}, {
				height: 0,
				id: 100,
				name: "curve_bot",
				polyline: [{
					x: 28,
					y: -60
				}, {
					x: 26,
					y: -83
				}, {
					x: 34,
					y: -108
				}, {
					x: 43,
					y: -130
				}, {
					x: 51,
					y: -148
				}, {
					x: 59,
					y: -165
				}, {
					x: 68,
					y: -177
				}, {
					x: 76,
					y: -183
				}, {
					x: 85,
					y: -186
				}, {
					x: 94,
					y: -188
				}, {
					x: 104.75,
					y: -186.25
				}, {
					x: 116,
					y: -181
				}, {
					x: 126,
					y: -173
				}, {
					x: 140,
					y: -158
				}, {
					x: 151,
					y: -146
				}, {
					x: 164,
					y: -134
				}, {
					x: 176,
					y: -119
				}, {
					x: 190,
					y: -102
				}, {
					x: 202,
					y: -87
				}, {
					x: 208.666,
					y: -78.3334
				}, {
					x: 212,
					y: -67
				}, {
					x: 208,
					y: -59
				}, {
					x: 191,
					y: -55
				}, {
					x: 38,
					y: -59
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 269,
				y: 856
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "Livello di oggetti 10",
			objects: [{
				height: 1920,
				id: 120,
				name: "",
				rotation: 0,
				type: "",
				visible: !0,
				width: 1152,
				x: 0,
				y: 0
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "centersafe",
			objects: [{
				ellipse: !0,
				height: 20,
				id: 115,
				name: "center",
				rotation: 0,
				type: "",
				visible: !0,
				width: 20,
				x: 520,
				y: 1862
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "top_channellers",
			objects: [{
				height: 0,
				id: 56,
				name: "4",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: 10,
					y: -2
				}, {
					x: 20,
					y: 0
				}, {
					x: 30,
					y: 6
				}, {
					x: 36,
					y: 16
				}, {
					x: 36,
					y: 90
				}, {
					x: 32,
					y: 98
				}, {
					x: 22,
					y: 106
				}, {
					x: 2,
					y: 106
				}, {
					x: -6,
					y: 102
				}, {
					x: -14,
					y: 90
				}, {
					x: -14,
					y: 18
				}, {
					x: -8,
					y: 8
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 760,
				y: 228
			}, {
				height: 0,
				id: 57,
				name: "3",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: 10,
					y: -2
				}, {
					x: 20,
					y: 0
				}, {
					x: 30,
					y: 6
				}, {
					x: 36,
					y: 16
				}, {
					x: 36,
					y: 90
				}, {
					x: 32,
					y: 98
				}, {
					x: 22,
					y: 106
				}, {
					x: 2,
					y: 106
				}, {
					x: -6,
					y: 102
				}, {
					x: -14,
					y: 90
				}, {
					x: -14,
					y: 18
				}, {
					x: -8,
					y: 8
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 644,
				y: 252
			}, {
				height: 0,
				id: 58,
				name: "2",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: 10,
					y: -2
				}, {
					x: 20,
					y: 0
				}, {
					x: 30,
					y: 6
				}, {
					x: 36,
					y: 16
				}, {
					x: 36,
					y: 90
				}, {
					x: 32,
					y: 98
				}, {
					x: 22,
					y: 106
				}, {
					x: 2,
					y: 106
				}, {
					x: -6,
					y: 102
				}, {
					x: -14,
					y: 90
				}, {
					x: -14,
					y: 18
				}, {
					x: -8,
					y: 8
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 528,
				y: 252
			}, {
				height: 0,
				id: 59,
				name: "1",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: 10,
					y: -2
				}, {
					x: 20,
					y: 0
				}, {
					x: 25,
					y: 3
				}, {
					x: 30,
					y: 6
				}, {
					x: 36,
					y: 16
				}, {
					x: 36,
					y: 90
				}, {
					x: 32,
					y: 98
				}, {
					x: 22,
					y: 106
				}, {
					x: 2,
					y: 106
				}, {
					x: -6,
					y: 102
				}, {
					x: -14,
					y: 90
				}, {
					x: -14,
					y: 18
				}, {
					x: -8,
					y: 8
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 416,
				y: 228
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		},
		{
			draworder: "topdown",
			name: "bot_channellers",
			objects: [{
				height: 0,
				id: 79,
				name: "vertical_right",
				polygon: [{
					x: -2,
					y: 0
				}, {
					x: 8,
					y: 0
				}, {
					x: 10,
					y: 196
				}, {
					x: 6,
					y: 202
				}, {
					x: 0,
					y: 206
				}, {
					x: -4,
					y: 202
				}, {
					x: -6,
					y: 196
				}, {
					x: -6,
					y: 192
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 978,
				y: 1402
			}, {
				height: 0,
				id: 80,
				name: "horizontal_right",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: 8,
					y: 14
				}, {
					x: -224,
					y: 122
				}, {
					x: -236,
					y: 86
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 972,
				y: 1592
			}, {
				height: 0,
				id: 83,
				name: "vertical_left",
				polygon: [{
						x: -2,
						y: 0
					}, {
						x: 8,
						y: 0
					}, {
						x: 10,
						y: 196
					}, {
						x: 6,
						y: 202
					}, {
						x: 0,
						y: 206
					},
					{
						x: -4,
						y: 202
					}, {
						x: -6,
						y: 196
					}, {
						x: -6,
						y: 192
					}
				],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 92,
				y: 1406
			}, {
				height: 0,
				id: 84,
				name: "horizontal_left",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: 222,
					y: 84
				}, {
					x: 204,
					y: 120
				}, {
					x: -4,
					y: 20
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 96,
				y: 1592
			}, {
				ellipse: !0,
				height: 20,
				id: 85,
				name: "head_left",
				rotation: 0,
				type: "",
				visible: !0,
				width: 20,
				x: 86,
				y: 1392
			}, {
				ellipse: !0,
				height: 20,
				id: 87,
				name: "head_right",
				rotation: 0,
				type: "",
				visible: !0,
				width: 20,
				x: 972,
				y: 1386
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "flipper_bumper",
			objects: [{
				height: 0,
				id: 88,
				name: "right",
				polygon: [{
					x: 2.41666,
					y: -9.91666
				}, {
					x: 0,
					y: 200
				}, {
					x: -96,
					y: 236
				}, {
					x: -126,
					y: 216
				}, {
					x: -42.1212,
					y: 12.18184
				}, {
					x: -36.6666,
					y: 2
				}, {
					x: -29.1818,
					y: -7.0227
				}, {
					x: -21.5152,
					y: -14.8636
				}, {
					x: -11.72726,
					y: -23.197
				}, {
					x: 2.14396,
					y: -29.7348
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 904,
				y: 1348
			}, {
				height: 0,
				id: 89,
				name: "left",
				polygon: [{
						x: 0,
						y: 0
					}, {
						x: 90,
						y: 210
					}, {
						x: 68,
						y: 232
					}, {
						x: -36,
						y: 192
					}, {
						x: -33.3334,
						y: -7.33334
					}, {
						x: -32.7272,
						y: -34.0606
					}, {
						x: -23.6666,
						y: -27.697
					}, {
						x: -16.33332,
						y: -20.6666
					},
					{
						x: -7.66666,
						y: -10
					}
				],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 210,
				y: 1354
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "right_channeller",
			objects: [{
				height: 0,
				id: 90,
				name: "channeller",
				polygon: [{
					x: 69.909,
					y: -156.1666
				}, {
					x: 73.5758,
					y: -145.1666
				}, {
					x: 76.7424,
					y: -132.8334
				}, {
					x: 77.2424,
					y: -121.5
				}, {
					x: -38,
					y: 128.8334
				}, {
					x: -44.6666,
					y: 129.5
				}, {
					x: -53.3334,
					y: 128.8334
				}, {
					x: -62.6666,
					y: 124.1666
				}, {
					x: -68.1818,
					y: 115.1364
				}, {
					x: -68.6666,
					y: 105.5
				}, {
					x: -67.2728,
					y: 97.1364
				}, {
					x: 52.909,
					y: -155.1666
				}, {
					x: 62.409,
					y: -173.6666
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 924,
				y: 691.334
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "circle_bumper",
			objects: [{
				ellipse: !0,
				height: 120,
				id: 94,
				name: "3",
				rotation: 0,
				type: "",
				visible: !0,
				width: 120,
				x: 739.334,
				y: 422.666
			}, {
				ellipse: !0,
				height: 120,
				id: 91,
				name: "2",
				rotation: 0,
				type: "",
				visible: !0,
				width: 120,
				x: 678,
				y: 608
			}, {
				ellipse: !0,
				height: 120,
				id: 93,
				name: "1",
				rotation: 0,
				type: "",
				visible: !0,
				width: 120,
				x: 517.334,
				y: 467.334
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}, {
			draworder: "topdown",
			name: "flipper",
			objects: [{
				height: 0,
				id: 113,
				name: "right",
				polygon: [{
					x: 0,
					y: 0
				}, {
					x: -144,
					y: 55.3334
				}, {
					x: -150.6666,
					y: 53.3334
				}, {
					x: -154.5,
					y: 49.5834
				}, {
					x: -156.6666,
					y: 46
				}, {
					x: -158.6666,
					y: 41.3334
				}, {
					x: -159.25,
					y: 35.5
				}, {
					x: -158.0834,
					y: 30.6666
				}, {
					x: -153.5,
					y: 26.4166
				}, {
					x: -20.5834,
					y: -44.5834
				}, {
					x: -13.83334,
					y: -46.1666
				}, {
					x: -8,
					y: -45.3334
				}, {
					x: -2,
					y: -42.6666
				}, {
					x: 2,
					y: -39.3334
				}, {
					x: 5.33334,
					y: -32.6666
				}, {
					x: 8.83334,
					y: -24.5834
				}, {
					x: 9.33334,
					y: -14.66666
				}, {
					x: 6.66666,
					y: -6.66666
				}],
				rotation: 0,
				type: "",
				visible: !0,
				width: 0,
				x: 735.334,
				y: 1730
			}, {
				height: 0,
				id: 114,
				name: "left",
				polygon: [{
					x: 0,
					y: 9.1668
				}, {
					x: -144,
					y: -46.1666
				}, {
					x: -150.6666,
					y: -44.1666
				}, {
					x: -154.5,
					y: -40.4166
				}, {
					x: -156.6666,
					y: -36.8332
				}, {
					x: -158.6666,
					y: -32.1666
				}, {
					x: -159.25,
					y: -26.3332
				}, {
					x: -158.0834,
					y: -21.4998
				}, {
					x: -153.5,
					y: -17.2498
				}, {
					x: -20.5834,
					y: 53.7502
				}, {
					x: -13.83334,
					y: 55.3334
				}, {
					x: -8,
					y: 54.5002
				}, {
					x: -2,
					y: 51.8334
				}, {
					x: 2,
					y: 48.5002
				}, {
					x: 5.33334,
					y: 41.8334
				}, {
					x: 8.83334,
					y: 33.7502
				}, {
					x: 9.33334,
					y: 23.8334
				}, {
					x: 6.66666,
					y: 15.83346
				}],
				rotation: 180,
				type: "",
				visible: !0,
				width: 0,
				x: 315.584,
				y: 1735.666
			}],
			opacity: 1,
			type: "objectgroup",
			visible: !0,
			x: 0,
			y: 0
		}
	],
	nextobjectid: 122,
	orientation: "orthogonal",
	renderorder: "right-down",
	tiledversion: "2018.03.21",
	tileheight: 960,
	tilesets: [],
	tilewidth: 576,
	type: "map",
	version: 1.2,
	width: 1
});

function CButtonSystem() {
	var a, d, c, b, f, h, g, l;
	this._init = function() {
		a = !0;
		c = d = !1;
		f = [];
		b = [];
		h = []
	};
	this.setAutoReset = function(e) {
		a = e
	};
	this.setReturn = function(a) {
		d = a
	};
	this.restart = function() {
		c = !1;
		for (var a = 0; a < b.length; a++) b[a] = !1, f[a].SetActive(!0), h[a].flashing()
	};
	this.reset = function() {
		c = !1;
		for (var a = 0; a < b.length; a++) b[a] = !1, f[a].SetActive(!0), h[a].slowOff(500, 100 * (b.length - a - 1))
	};
	this.addButton = function(a, c, g, d, l, m, r, w, y) {
		f.push(s_oObjectBuilder.addButton(a, c, g, d, l, 0, 1, .8, {
			contacttype: CONTACT_BEGIN,
			callback: this._buttonHit,
			params: f.length
		}));
		b.push(!1);
		a = new CLightIndicator(m, g + r, d + w, y);
		a.rotate(l);
		h.push(a)
	};
	this.flipButtonX = function() {
		for (var a = 0; a < f.length; a++) h[a].flipX()
	};
	this.setResititution = function(a) {
		for (var e = 0; e < f.length; e++) f[e].GetFixtureList().SetRestitution(a)
	};
	this._buttonHit = function(a) {
		b[a] ? playSound("pinball_button_off", 1, !1) : playSound("pinball_button_on", 1, !1);
		b[a] = !0;
		var e = f[a];
		d && s_oPhysicsController.disableBody(e);
		h[a].lit(!0);
		l && l();
		m.checkTriggerEvent()
	};
	this.addSingleButtonListener =
		function(a) {
			l = a
		};
	this.addAllButtonHitListener = function(a) {
		g = a
	};
	this.checkTriggerEvent = function() {
		for (var e = 0; e < b.length; e++)
			if (!b[e] || c) return;
		c = !0;
		if (a) {
			c = !1;
			for (e = 0; e < b.length; e++) h[e].flashing(), b[e] = !1;
			setTimeout(function() {
				for (var a = 0; a < b.length; a++) f[a].SetActive(!0)
			}, 500)
		}
		playSound("all_lights_on_1", 1, !1);
		g && g()
	};
	var m = this;
	this._init()
}

function CToggleSystem() {
	var a, d, c, b, f;
	this._init = function() {
		d = [];
		a = [];
		c = []
	};
	this.restart = function() {
		for (var b = 0; b < a.length; b++) a[b] = !1, c[b].flashing()
	};
	this.reset = function() {
		for (var b = 0; b < a.length; b++) a[b] = !1, c[b].slowOff(500, 100 * (a.length - b - 1))
	};
	this.addButton = function(b, f, h, e, n, k, p, t, v, r) {
		d.push(s_oObjectBuilder.addButton(b, f, h, e, n, 0, 1, 1, {
			contacttype: CONTACT_BEGIN,
			callback: this._buttonHit,
			params: d.length
		}));
		d[d.length - 1].GetFixtureList().SetSensor(!0);
		a.push(!1);
		b = new CLightIndicator(k, h + p, e + t,
			v);
		b.addText(r, 0, 0, 40, "#000000");
		c.push(b)
	};
	this._buttonHit = function(b) {
		a[b] = !0;
		playSound("toggle", 1, !1);
		c[b].lit(a[b]);
		f && f(b);
		h.checkTriggerEvent()
	};
	this.addSingleButtonListener = function(a) {
		f = a
	};
	this.addAllButtonHitListener = function(a) {
		b = a
	};
	this.shiftRight = function() {
		var b = a.pop();
		a.unshift(b);
		for (b = 0; b < c.length; b++) c[b].lit(a[b])
	};
	this.shiftLeft = function() {
		var b = a.shift();
		a.push(b);
		for (b = 0; b < c.length; b++) c[b].lit(a[b])
	};
	this.checkTriggerEvent = function() {
		for (var c = 0; c < a.length; c++)
			if (!a[c]) return;
		h.restart();
		playSound("all_lights_on_2", 1, !1);
		b && b()
	};
	var h = this;
	this._init()
}

function CHoleSystem(a, d, c) {
	var b, f, h;
	this._init = function(a, c, e) {
		f = s_oObjectBuilder.addStaticCircle(1, a, c, 0, 0, 0, {
			contacttype: CONTACT_BEGIN,
			callback: this._holeHit,
			params: "hole_enabled"
		});
		f.GetBody().GetFixtureList().SetSensor(!0)
	};
	this.addHoleEventListener = function(a) {
		b = a
	};
	this.setLaunchImpulse = function(a, c) {
		h = {
			x: a,
			y: c
		}
	};
	this._disableHole = function() {
		f.SetUserData({
			contacttype: CONTACT_BEGIN,
			callback: g._wakeUpHole,
			params: "hole_disabled"
		})
	};
	this._wakeUpHole = function() {
		f.SetUserData({
			contacttype: CONTACT_END,
			callback: g._enableHole,
			params: "hole_wake"
		})
	};
	this._enableHole = function() {
		f.SetUserData({
			contacttype: CONTACT_BEGIN,
			callback: g._holeHit,
			params: "hole_enabled"
		})
	};
	this._releaseBall = function(a) {
		a.SetActive(!0);
		h && (g._enableHole(), a.ApplyImpulse(h, a.GetPosition()))
	};
	this._centerBallInHole = function(b) {
		g._disableHole();
		b.SetLinearVelocity({
			x: 0,
			y: 0
		});
		b.SetAngularVelocity(0);
		s_oPhysicsController.disableBody(b, {
			x: a,
			y: d
		});
		playSound("in_hole", 1, !1);
		setTimeout(function() {
				playSound("out_hole", 1, !1);
				g._releaseBall(b)
			},
			c)
	};
	this._getBall = function(a) {
		var c = a.GetFixtureA().GetUserData(),
			e = a.GetFixtureB().GetUserData(),
			b;
		c.id && "ball" === c.id && (b = a.GetFixtureA().GetBody());
		e.id && "ball" === e.id && (b = a.GetFixtureB().GetBody());
		return b
	};
	this._holeHit = function(a, c) {
		var e = g._getBall(c);
		g._centerBallInHole(e);
		b && b()
	};
	this.getHole = function() {
		return f.GetBody()
	};
	var g = this;
	this._init(a, d, c)
}
var GATE_LISTENER_STATE_CLOSED = 0,
	GATE_LISTENER_STATE_OPEN = 1;

function CGateSystem(a, d) {
	var c, b, f, h;
	this._init = function(a, g) {
		b = c = null
	};
	this.addGate = function(c, b, e) {
		h = s_oObjectBuilder.addButton(c, b, a, d, e, 0, 1, .4)
	};
	this.addSprite = function(c, b, e, g, k) {
		c = createBitmap(c);
		c.x = a;
		c.y = d;
		c.regX = k;
		c.regY = g;
		c.rotation = e;
		b.addChild(c)
	};
	this.addOpener = function(c, b, e, g, k) {
		s_oObjectBuilder.addStaticCircle(e, a + c, d + b, 0, 0, 0, {
			contacttype: CONTACT_BEGIN,
			callback: this._openGate,
			params: {
				openingid: g,
				gateid: k
			}
		}).GetBody().GetFixtureList().SetSensor(!0)
	};
	this.addCloser = function(c, b, e, g,
		k) {
		s_oObjectBuilder.addStaticCircle(e, a + c, d + b, 0, 0, 0, {
			contacttype: CONTACT_BEGIN,
			callback: this._closeGate,
			params: {
				openingid: g,
				gateid: k
			}
		}).GetBody().GetFixtureList().SetSensor(!0)
	};
	this.addPassingGateListener = function(a) {
		f = a
	};
	this.setRestitution = function(a) {
		h.GetFixtureList().SetRestitution(a)
	};
	this._openGate = function(a) {
		c = a.openingid;
		null === b && (b = a.gateid);
		b !== a.gateid && g._gatePassedCorrectly();
		s_oPhysicsController.disableBody(h)
	};
	this._closeGate = function(a) {
		c === a.openingid && g._gatePassedCorrectly();
		b = c = null;
		h.SetActive(!0)
	};
	this._gatePassedCorrectly = function() {
		f && f(b);
		playSound("gate", 1, !1);
		b = c = null
	};
	var g = this;
	this._init(a, d)
}
var SINGLE_BUTTON_SCORE = 50,
	CIRCLE_BUMPER_SCORE = [10, 20, 50, 100, 200, 500, 1E3],
	GATE_SCORE = 100,
	ROUTER_GATE_SCORE = [50, 100, 200, 500, 1E3, 2E3, 5E3],
	MULTIPLIER_TOGGLE_SCORE = 100,
	HOLE_BONUS_SCORE = [1E3, 5E3, 1E4, 5E4, 1E5, 5E5, 1E6],
	HOLE_STANDARD_SCORE = 500,
	SINGLE_LETTERS_LIT_SCORE = 5E4,
	ALL_LETTERS_LIT_SCORE = 5E6,
	JUMPER_SCORE = 500,
	ALL_JUMPER_BUTTONS_SCORE = 5E3;

function CSCoreController() {
	var a, d, c, b, f, h, g, l;
	this._init = function() {
		a = [];
		d = [];
		c = 0;
		b = 1;
		g = h = f = 0;
		l = -1
	};
	this._increaseJackpot = function(c) {
		f += Math.floor(c * SCORE_RATIO_TO_ADD_AT_JACKPOT);
		a[ON_INCREASE_JACKPOT] && a[ON_INCREASE_JACKPOT].call(d[ON_INCREASE_JACKPOT], f)
	};
	this._addScore = function(b) {
		c += b;
		s_oScoreController._increaseJackpot(b);
		a[ON_INCREASE_SCORE] && a[ON_INCREASE_SCORE].call(d[ON_INCREASE_SCORE], c)
	};
	this.resetScore = function() {
		c = 0;
		s_oScoreController._addScore(0)
	};
	this.getScore = function() {
		return c
	};
	this.addEventListener = function(c, b, g) {
		a[c] = b;
		d[c] = g
	};
	this.resetCircleBumperLevel = function() {
		h = 0
	};
	this.resetJackpot = function() {
		f = 0;
		a[ON_INCREASE_JACKPOT] && a[ON_INCREASE_JACKPOT].call(d[ON_INCREASE_JACKPOT], f)
	};
	this.resetMultiplier = function() {
		b = 1
	};
	this.getJackpotAmount = function() {
		return f
	};
	this.addButtonScore = function() {
		s_oScoreController._addScore(SINGLE_BUTTON_SCORE * b)
	};
	this.increaseCircleBumperLevel = function() {
		h++;
		h === CIRCLE_BUMPER_SCORE.length && (h = CIRCLE_BUMPER_SCORE.length - 1)
	};
	this.getBumperValue =
		function() {
			return CIRCLE_BUMPER_SCORE[h]
		};
	this.addCircleBumperScore = function() {
		s_oScoreController._addScore(CIRCLE_BUMPER_SCORE[h] * b)
	};
	this.addGateScore = function() {
		s_oScoreController._addScore(GATE_SCORE * b)
	};
	this.addRouterScore = function() {
		s_oScoreController._addScore(ROUTER_GATE_SCORE[g] * b)
	};
	this.increaseRouterLevel = function() {
		g++;
		g === ROUTER_GATE_SCORE.length && (g = ROUTER_GATE_SCORE.length - 1)
	};
	this.decreaseRouterLevel = function() {
		g--;
		0 > g && (g = 0)
	};
	this.getCurRouterLevel = function() {
		return g
	};
	this.resetRouterLevel =
		function() {
			g = 0
		};
	this.addMultiplierToggleScore = function() {
		s_oScoreController._addScore(MULTIPLIER_TOGGLE_SCORE * b)
	};
	this.addTotalMultiplierToggleScore = function() {
		s_oScoreController._addScore(10 * MULTIPLIER_TOGGLE_SCORE * b)
	};
	this.increaseMultiplier = function() {
		b++;
		b >= MAX_MULTIPLIER && (b = MAX_MULTIPLIER)
	};
	this.getCurMultiplier = function() {
		return b
	};
	this.addTotalHoleButtonScore = function() {
		s_oScoreController._addScore(10 * SINGLE_BUTTON_SCORE * b)
	};
	this.addStandardHoleScore = function() {
		s_oScoreController._addScore(HOLE_STANDARD_SCORE *
			b)
	};
	this.addHoleScoreBonus = function() {
		s_oScoreController._addScore(HOLE_BONUS_SCORE[l] * b)
	};
	this.increaseHoleBonusLevel = function() {
		l++
	};
	this.decreaseHoleBonusLevel = function() {
		l--
	};
	this.resetHoleBonusLevel = function() {
		l = -1
	};
	this.getCurHoleBonusLevel = function() {
		return l
	};
	this.addSingleLettersScore = function() {
		s_oScoreController._addScore(SINGLE_LETTERS_LIT_SCORE * b)
	};
	this.addAllLettersScore = function() {
		s_oScoreController._addScore(ALL_LETTERS_LIT_SCORE * b)
	};
	this.addAllJumperButtonsScore = function() {
		s_oScoreController._addScore(ALL_JUMPER_BUTTONS_SCORE *
			b)
	};
	this.addJumperScore = function() {
		s_oScoreController._addScore(JUMPER_SCORE * b)
	};
	this.addJackpotScore = function() {
		s_oScoreController._addScore(f)
	};
	s_oScoreController = this;
	this._init()
}
var s_oScoreController;

function CLightIndicator(a, d, c, b) {
	var f, h, g, l;
	this._init = function(a, c, b, d) {
		f = new createjs.Container;
		f.x = c;
		f.y = b;
		d.addChild(f);
		c = new createjs.SpriteSheet({
			images: [a],
			frames: {
				width: a.width / 2,
				height: a.height,
				regX: a.width / 2 / 2,
				regY: a.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		g = createSprite(c, "state_false", a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
		f.addChild(g);
		h = createSprite(c, "state_true", a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
		h.alpha = 0;
		f.addChild(h)
	};
	this.unload = function() {
		createjs.Tween.removeTweens(h);
		b.removeChild(h)
	};
	this.lit = function(a) {
		createjs.Tween.removeTweens(h);
		h.alpha = a ? 1 : 0
	};
	this.slowOn = function(a, c) {
		createjs.Tween.get(h, {
			override: !0
		}).wait(c).to({
			alpha: 1
		}, a)
	};
	this.highlight = function(a) {
		h.alpha = 0;
		createjs.Tween.get(h, {
			override: !0,
			loop: !0
		}).to({
			alpha: 1
		}, a / 3).wait(a / 3).to({
			alpha: 0
		}, a / 3)
	};
	this.slowHighlight = function(a, c, b) {
		h.alpha = 0;
		createjs.Tween.get(h, {
			override: !0
		}).wait(c).to({
			alpha: 1
		}, a / 3).wait(a / 3).to({
			alpha: 0
		}, a / 3).call(function() {
			b()
		})
	};
	this.slowOff = function(a, c) {
		createjs.Tween.get(h, {
			override: !0
		}).wait(c).to({
			alpha: 0
		}, a)
	};
	this.flashing = function() {
		createjs.Tween.get(h, {
			override: !0
		}).to({
			alpha: 0
		}, 100).to({
			alpha: 1
		}, 100).to({
			alpha: 0
		}, 100).to({
			alpha: 1
		}, 100).to({
			alpha: 0
		}, 100).to({
			alpha: 1
		}, 100).to({
			alpha: 0
		}, 100)
	};
	this.addPreciseText = function(a, c, b, g, d, h, v) {
		l = (new CTLText(f, c - h / 2, b - v / 2, h, v, g, "center", d, PRIMARY_FONT, 1.3, 2, 2, a, !0, !0, !0, !1)).getText()
	};
	this.addText = function(a, c, b, g, d) {
		l = new createjs.Text(a, g + "px " + PRIMARY_FONT, d);
		l.x = c;
		l.y = b;
		l.textAlign = "center";
		l.textBaseline = "middle";
		l.lineWidth = 200;
		f.addChild(l);
		l.cache(-f.getBounds().width / 2, -f.getBounds().height / 2, f.getBounds().width, f.getBounds().height)
	};
	this.setText = function(a) {
		l.text = a;
		l.updateCache()
	};
	this.textRotate = function(a) {
		l.rotation = a
	};
	this.rotate = function(a) {
		f.rotation = a
	};
	this.scale = function(a) {
		f.scaleX = f.scaleY = a
	};
	this.flipX = function() {
		f.scaleX = -1
	};
	this._init(a, d, c, b)
}

function CModuleMultiplier(a, d) {
	var c, b, f;
	this._init = function(a, c) {
		this._addCapsule();
		this._addToggle();
		this._addMultiplierIndicator()
	};
	this._addCapsule = function() {
		c = [];
		var a = s_oSpriteLibrary.getSprite("capsule_0");
		a = new CLightIndicator(a, 428, 286, d);
		c.push(a);
		a = s_oSpriteLibrary.getSprite("capsule_1");
		a = new CLightIndicator(a, 540, 312, d);
		c.push(a);
		a = s_oSpriteLibrary.getSprite("capsule_2");
		a = new CLightIndicator(a, 656, 312, d);
		c.push(a);
		a = s_oSpriteLibrary.getSprite("capsule_3");
		a = new CLightIndicator(a, 770,
			286, d);
		c.push(a)
	};
	this._addToggle = function() {
		var c = s_oSpriteLibrary.getSprite("multiplier_toggle_light");
		f = new CToggleSystem;
		f.addButton(4, 8, 380, 280, 0, c, 0, -80, a, TEXT_MULTI[0]);
		f.addButton(4, 8, 490, 304, 0, c, 0, -80, a, TEXT_MULTI[1]);
		f.addButton(4, 8, 600, 320, 0, c, 0, -80, a, TEXT_MULTI[2]);
		f.addButton(4, 8, 710, 304, 0, c, 0, -80, a, TEXT_MULTI[3]);
		f.addButton(4, 8, 820, 280, 0, c, 0, -80, a, TEXT_MULTI[4]);
		f.addAllButtonHitListener(this._onAllLightOn);
		f.addSingleButtonListener(this._onToggle)
	};
	this._onToggle = function(a) {
		s_oScoreController.addMultiplierToggleScore();
		h._radialAnim(a)
	};
	this._onAllLightOn = function() {
		s_oScoreController.increaseMultiplier();
		s_oScoreController.addTotalMultiplierToggleScore();
		for (var a = s_oScoreController.getCurMultiplier(), c = 2; c <= MAX_MULTIPLIER; c++) b[c].lit(!1);
		b[a].lit(!0)
	};
	this._addMultiplierIndicator = function() {
		b = [];
		var c = new createjs.Container;
		c.x = 526;
		c.y = 1680;
		a.addChild(c);
		var d = Math.floor((MAX_MULTIPLIER - 1) / 2),
			f = 2,
			e = new createjs.Container;
		e.x = -440;
		c.addChild(e);
		for (var h = 0; h < d; h++) {
			var k = s_oSpriteLibrary.getSprite("multiplier_light");
			k = new CLightIndicator(k, 112 * h, 54 * h, e);
			k.addText("x" + f, 0, 0, 50, "#8416ff");
			k.rotate(25);
			b[f] = k;
			f++
		}
		e = new createjs.Container;
		e.x = 430;
		c.addChild(e);
		for (h = 0; h < d; h++) k = s_oSpriteLibrary.getSprite("multiplier_light"), k = new CLightIndicator(k, 112 * -h, 54 * h, e), k.addText("x" + f, 0, 0, 50, "#8416ff"), k.rotate(-25), b[f] = k, f++;
		f === MAX_MULTIPLIER && (k = s_oSpriteLibrary.getSprite("multiplier_light"), k = new CLightIndicator(k, 0, 160, c), k.addText("x" + f, 0, 0, 50, "#8416ff"), b[f] = k)
	};
	this._radialAnim = function(a) {
		for (var b = 0, d = a; d < c.length; d++) c[d].slowHighlight(500,
			150 * b,
			function() {}), b++;
		if (0 < a)
			for (b = 0, d = a - 1; 0 <= d; d--) c[d].slowHighlight(500, 150 * b, function() {}), b++
	};
	this.reset = function() {
		f.reset();
		b.forEach(function(a) {
			a.lit(!1)
		})
	};
	this.shiftElementsToRight = function() {
		f.shiftRight()
	};
	this.shiftElementsToLeft = function() {
		f.shiftLeft()
	};
	var h = this;
	this._init(a, d)
}

function CModuleBumper(a, d) {
	var c, b, f, h, g, l;
	this._init = function(a, c) {
		this._addLinearBumper();
		this._addCircularBumperSystemButton()
	};
	this.buildFlipperBumper = function(c) {
		for (var b = 0; b < c.length; b++) {
			var d = c[b];
			d = s_oTable.getAdjustedPoints(d.x, d.y, d.polygon);
			s_oObjectBuilder.addPolygon(d, 0, 1, .7, .3)
		}
		b = s_oSpriteLibrary.getSprite("flipper_bumper");
		c = {
			images: [b],
			frames: {
				width: b.width / 2,
				height: b.height,
				regX: b.width / 2 / 2,
				regY: b.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		};
		c = new createjs.SpriteSheet(c);
		g = createSprite(c, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
		g.x = 840;
		g.y = 1460;
		a.addChild(g);
		l = createSprite(c, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
		l.x = 240;
		l.y = 1460;
		l.scaleX = -1;
		a.addChild(l)
	};
	this._addLinearBumper = function() {
		var a = {
			contacttype: CONTACT_BEGIN,
			callback: this._leftFlipperBumperCollision,
			params: "bumper"
		};
		a = s_oObjectBuilder.addButton(220, 12, 252, 1460, 66.7, 0, 0, 0, a);
		a.GetFixtureList().SetSensor(!0);
		a = {
			contacttype: CONTACT_BEGIN,
			callback: this._rightFlipperBumperCollision,
			params: "bumper"
		};
		a = s_oObjectBuilder.addButton(220, 12, 824, 1460, -69, 0, 0, 0, a);
		a.GetFixtureList().SetSensor(!0)
	};
	this._leftFlipperBumperCollision = function(a, c) {
		var b = new Box2D.Common.Math.b2Vec2(-.4, .5),
			e = c.GetFixtureA().GetUserData(),
			d = c.GetFixtureB().GetUserData(),
			g;
		e.id && "ball" === e.id && (g = c.GetFixtureA().GetBody());
		d.id && "ball" === d.id && (g = c.GetFixtureB().GetBody());
		g.SetLinearVelocity({
			x: 0,
			y: 0
		});
		g.SetAngularVelocity(0);
		b.Multiply(20 * -g.GetMass());
		g.ApplyImpulse(b, g.GetPosition());
		l.gotoAndStop("state_true");
		setTimeout(function() {
			l.gotoAndStop("state_false")
		}, 100);
		playSound("bumper", 1, !1);
		s_oScoreController.addButtonScore()
	};
	this._rightFlipperBumperCollision = function(a, c) {
		var b = new Box2D.Common.Math.b2Vec2(.4, .5),
			e = c.GetFixtureA().GetUserData(),
			d = c.GetFixtureB().GetUserData(),
			f;
		e.id && "ball" === e.id && (f = c.GetFixtureA().GetBody());
		d.id && "ball" === d.id && (f = c.GetFixtureB().GetBody());
		f.SetLinearVelocity({
			x: 0,
			y: 0
		});
		f.SetAngularVelocity(0);
		b.Multiply(20 * -f.GetMass());
		f.ApplyImpulse(b, f.GetPosition());
		g.gotoAndStop("state_true");
		setTimeout(function() {
			g.gotoAndStop("state_false")
		}, 100);
		playSound("bumper", 1, !1);
		s_oScoreController.addButtonScore()
	};
	this.buildCircularBumper = function(d) {
		f = new createjs.Text(s_oScoreController.getBumperValue(), "40px " + PRIMARY_FONT, "#c6c6c6");
		f.x = 694;
		f.y = 570;
		f.rotation = -25;
		f.textAlign = "center";
		f.textBaseline = "middle";
		f.lineWidth = 200;
		f.outline = 3;
		a.addChild(f);
		b = new createjs.Text(s_oScoreController.getBumperValue(), "40px " + PRIMARY_FONT, "#88028b");
		b.x = 694;
		b.y = 570;
		b.rotation = -25;
		b.textAlign = "center";
		b.textBaseline = "middle";
		b.lineWidth = 200;
		a.addChild(b);
		c = [];
		for (var e = 0; e < d.length; e++) {
			var g = d[e],
				k = s_oTable.getAdjustedPoints(0, 0, [{
					x: g.x,
					y: g.y
				}]);
			this._addCircularBumper(g.width / 2, k[0].x + g.width / 2, k[0].y + g.width / 2, e)
		}
	};
	this._addCircularBumper = function(a, b, g, f) {
		s_oObjectBuilder.addStaticCircle(a, b, g, 0, 0, 0, {
			contacttype: CONTACT_BEGIN,
			callback: this._circularBumperCollision,
			params: f
		});
		c[f] = new createjs.Container;
		c[f].x = b;
		c[f].y = g;
		d.addChild(c[f]);
		g = s_oSpriteLibrary.getSprite("bumper");
		a = g.width / 7;
		b =
			g.height / 2;
		g = new createjs.SpriteSheet({
			images: [g],
			frames: {
				width: a,
				height: b,
				regX: a / 2,
				regY: b / 2
			},
			animations: {
				idle: [0],
				hit: [0, 13, "idle"]
			}
		});
		a = createSprite(g, "hit", a / 2, b / 2, a, b);
		c[f].addChild(a)
	};
	this._circularBumperCollision = function(a, b) {
		c[a].scaleX = .9;
		c[a].scaleY = .9;
		c[a].children[0].gotoAndPlay("hit");
		createjs.Tween.get(c[a], {
			override: !0
		}).to({
			scaleX: 1,
			scaleY: 1
		}, .1);
		var e = new Box2D.Collision.b2WorldManifold;
		b.GetWorldManifold(e);
		e = e.m_normal;
		var d = b.GetFixtureA().GetUserData(),
			g = b.GetFixtureB().GetUserData(),
			f;
		d.id && "ball" === d.id && (f = b.GetFixtureA().GetBody());
		g.id && "ball" === g.id && (f = b.GetFixtureB().GetBody());
		f.SetLinearVelocity({
			x: 0,
			y: 0
		});
		f.SetAngularVelocity(0);
		e.Multiply(14 * -f.GetMass());
		f.ApplyImpulse(e, f.GetPosition());
		playSound("bumper", 1, !1);
		s_oScoreController.addCircleBumperScore()
	};
	this._addCircularBumperSystemButton = function() {
		h = new CButtonSystem;
		for (var c = s_oSpriteLibrary.getSprite("bumper_button"), b = 0; 3 > b; b++) h.addButton(8, 60, 930 + 18 * b, 340 + 70 * b, -13, c, 0, 0, a);
		h.setReturn(!0);
		h.addAllButtonHitListener(this._onBumperLevelUp);
		h.addSingleButtonListener(s_oScoreController.addButtonScore)
	};
	this._onBumperLevelUp = function() {
		s_oScoreController.increaseCircleBumperLevel();
		b.text = s_oScoreController.getBumperValue();
		f.text = s_oScoreController.getBumperValue();
		for (var a = b.getBounds().width, c = 40; 80 <= a;) c--, b.font = " " + c + "px " + PRIMARY_FONT, f.font = " " + c + "px " + PRIMARY_FONT, a = b.getBounds().width
	};
	this.reset = function() {
		h.reset();
		b.font = " 40px " + PRIMARY_FONT;
		b.text = s_oScoreController.getBumperValue();
		f.font = " 40px " + PRIMARY_FONT;
		f.text =
			s_oScoreController.getBumperValue()
	};
	this._init(a, d)
}

function CModuleHole(a, d) {
	var c, b, f, h, g, l, m;
	this._init = function(a, e) {
		f = b = c = !1;
		this._addHole();
		this._addRightSystemButton();
		this._addLabels()
	};
	this._addHole = function() {
		var a = new CHoleSystem(988, 680, 1E3);
		a.addHoleEventListener(this._onHole);
		a.setLaunchImpulse(0, .8);
		a = s_oSpriteLibrary.getSprite("hole");
		a = createBitmap(a);
		a.x = 932;
		a.y = 600;
		d.addChild(a)
	};
	this._addRightSystemButton = function() {
		m = new CButtonSystem;
		for (var c = 2, b = 0; 4 > b; b++) {
			var e = s_oSpriteLibrary.getSprite("button_light_" + c);
			m.addButton(8, 56,
				924, 980 + 68 * b, 0, e, -52, 0, a);
			e = s_oSpriteLibrary.getSprite("bumper_button");
			new CLightIndicator(e, 918, 980 + 68 * b, a);
			c++
		}
		m.addAllButtonHitListener(this._onAllButtonActive);
		m.addSingleButtonListener(s_oScoreController.addButtonScore)
	};
	this._onAllButtonActive = function() {
		s_oScoreController.addTotalHoleButtonScore();
		if (!c) {
			c = !0;
			s_oScoreController.increaseHoleBonusLevel();
			var a = s_oScoreController.getCurHoleBonusLevel();
			h[a].highlight(2E3)
		}
	};
	this._onHole = function() {
		m.reset();
		if (c) {
			c = !1;
			s_oScoreController.addHoleScoreBonus();
			var a = s_oScoreController.getCurHoleBonusLevel();
			h[a].lit(!0);
			a === HOLE_BONUS_SCORE.length - 1 && e.reset()
		} else s_oScoreController.addStandardHoleScore();
		f && (playSound("bonus_win_1", 1, !1), e._activeExtraBall());
		b && (playSound("bonus_win_1", 1, !1), e._activeShield())
	};
	this._activeShield = function() {
		e.disableShieldLight();
		s_oTable.activeShield()
	};
	this._activeExtraBall = function() {
		e.disableExtraBallLight();
		s_oTable.activeExtraBall()
	};
	this._addLabels = function() {
		h = [];
		var c = 0,
			b = s_oSpriteLibrary.getSprite("light_indicator_0");
		b = new CLightIndicator(b, 1008, 880, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 46, "#f68eff");
		b.textRotate(-20);
		b.scale(.68);
		c++;
		h.push(b);
		b = s_oSpriteLibrary.getSprite("light_indicator_0");
		b = new CLightIndicator(b, 1008, 940, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 46, "#f68eff");
		b.textRotate(-20);
		b.scale(.68);
		c++;
		h.push(b);
		b = s_oSpriteLibrary.getSprite("light_indicator_0");
		b = new CLightIndicator(b, 1008, 1E3, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 36, "#f68eff");
		b.textRotate(-20);
		b.scale(.68);
		c++;
		h.push(b);
		b = s_oSpriteLibrary.getSprite("light_indicator_0");
		b = new CLightIndicator(b, 1008, 1060, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 34, "#f68eff");
		b.textRotate(-20);
		b.scale(.68);
		c++;
		h.push(b);
		b = s_oSpriteLibrary.getSprite("light_indicator_0");
		b = new CLightIndicator(b, 1008, 1120, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 26, "#f68eff");
		b.textRotate(-20);
		b.scale(.68);
		c++;
		h.push(b);
		b = s_oSpriteLibrary.getSprite("light_indicator_0");
		b = new CLightIndicator(b, 1008, 1180, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 26, "#f68eff");
		b.textRotate(-20);
		b.scale(.68);
		c++;
		h.push(b);
		b = s_oSpriteLibrary.getSprite("light_indicator_2");
		b = new CLightIndicator(b, 1008, 1240, a);
		b.addText(TEXT_HOLE_VALUE[c], 0, 0, 50, "#ff4040");
		b.textRotate(-20);
		b.scale(.68);
		h.push(b);
		c = new createjs.Container;
		c.x = 928;
		c.y = 820;
		a.addChild(c);
		b = s_oSpriteLibrary.getSprite("light_indicator_1");
		g = new CLightIndicator(b, 0, 0, c);
		g.addPreciseText(TEXT_SHIELD, 0, 0, 20, "#000000", 90, 70);
		g.scale(.7);
		g.rotate(25);
		b = s_oSpriteLibrary.getSprite("light_indicator_2");
		l = new CLightIndicator(b, -28, 60, c);
		l.addPreciseText(TEXT_EXTRABALL, 0, -2, 20, "#000000", 90, 70);
		l.scale(.7);
		l.rotate(25)
	};
	this.reset = function() {
		c = !1;
		s_oScoreController.resetHoleBonusLevel();
		for (var a = 0; a < h.length; a++) h[a].slowOff(500, 100 * (h.length - a - 1));
		m.reset();
		this.disableShieldLight();
		this.disableExtraBallLight()
	};
	this.disableShieldLight = function() {
		b = !1;
		g.lit(!1)
	};
	this.disableExtraBallLight = function() {
		f = !1;
		l.lit(!1)
	};
	this.activeShieldLight = function() {
		b = !0;
		g.highlight(2E3)
	};
	this.activeExtraBallLight = function() {
		f = !0;
		l.highlight(2E3)
	};
	var e = this;
	this._init(a, d)
}

function CModuleRouter(a, d) {
	var c, b;
	this._init = function(a, d) {
		c = 0;
		this._addRouterGate();
		this._addLabels();
		var g = s_oScoreController.getCurRouterLevel();
		b[g].highlight(2E3);
		this._setIntervalTime()
	};
	this._setIntervalTime = function() {
		c = TIME_ROUTER_SCORE_DECREASE
	};
	this._addRouterGate = function() {
		var a = new CGateSystem(256, 176);
		a.addGate(60, 8, 45);
		var b = s_oSpriteLibrary.getSprite("gate");
		a.addSprite(b, d, 25, b.height / 8, b.width / 2 + 16);
		a.addOpener(-40, 40, 12, !0);
		a.addCloser(56, -32, 12, !0);
		a.addCloser(-148, 176, 12, !1);
		a.addPassingGateListener(this._routerPassed)
	};
	this._routerPassed = function() {
		var a = s_oScoreController.getCurRouterLevel();
		b[a].lit(!0);
		s_oScoreController.addRouterScore();
		s_oScoreController.increaseRouterLevel();
		a = s_oScoreController.getCurRouterLevel();
		b[a].highlight(2E3);
		f._setIntervalTime()
	};
	this._addLabels = function() {
		b = [];
		var c = 0,
			d = s_oSpriteLibrary.getSprite("router_light_0");
		d = new CLightIndicator(d, 72, 624, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0, 26, "#f947ce");
		c++;
		b.push(d);
		d = s_oSpriteLibrary.getSprite("router_light_1");
		d = new CLightIndicator(d, 72, 556, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0, 20, "#55bdf5");
		c++;
		b.push(d);
		d = s_oSpriteLibrary.getSprite("router_light_2");
		d = new CLightIndicator(d, 72, 488, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0, 18, "#73ec34");
		c++;
		b.push(d);
		d = s_oSpriteLibrary.getSprite("router_light_3");
		d = new CLightIndicator(d, 80, 420, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0, 18, "#f2a937");
		c++;
		b.push(d);
		d = s_oSpriteLibrary.getSprite("router_light_4");
		d = new CLightIndicator(d, 104, 360, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0,
			26, "#f22935");
		c++;
		b.push(d);
		d = s_oSpriteLibrary.getSprite("router_light_5");
		d = new CLightIndicator(d, 140, 300, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0, 26, "#f3dc47");
		c++;
		b.push(d);
		d = s_oSpriteLibrary.getSprite("router_light_6");
		d = new CLightIndicator(d, 188, 240, a);
		d.addText(TEXT_ROUTER_VALUE[c], 0, 0, 26, "#9e2bf2");
		b.push(d)
	};
	this._levelDecreased = function() {
		var a = s_oScoreController.getCurRouterLevel();
		0 < a && (b[a].lit(!1), s_oScoreController.decreaseRouterLevel(), a = s_oScoreController.getCurRouterLevel(), b[a].highlight(2E3))
	};
	this.reset = function() {
		s_oScoreController.resetRouterLevel();
		for (var a = 0; a < b.length; a++) b[a].slowOff(500, 100 * (b.length - a - 1));
		a = s_oScoreController.getCurRouterLevel();
		b[a].highlight(2E3)
	};
	this.update = function() {
		c -= s_iTimeElaps;
		0 > c && (f._setIntervalTime(), f._levelDecreased())
	};
	var f = this;
	this._init(a, d)
}
var CURVE_FROM_RIGHT = 0,
	CURVE_FROM_LEFT = 1;

function CModuleLetters(a, d) {
	var c, b, f, h, g = 0,
		l, m, e, n, k, p, t, v;
	this._init = function(a, e) {
		h = f = b = c = !1;
		this._addSprite();
		this._addCurveGate();
		this._addCurveSystemButton();
		this._addArrows();
		this._addLetters();
		this._addLogo()
	};
	this._addSprite = function() {
		var a = new createjs.Container;
		a.x = 382;
		a.y = 560;
		d.addChild(a);
		var b = s_oSpriteLibrary.getSprite("curve_tunnel"),
			c = createBitmap(b);
		c.regX = b.width / 2;
		c.regY = b.height / 2;
		a.addChild(c);
		c = new createjs.Container;
		c.x = -16;
		c.y = -52;
		a.addChild(c);
		b = s_oSpriteLibrary.getSprite("eye");
		n = createBitmap(b);
		n.regX = b.width / 2;
		n.regY = b.height / 2;
		c.addChild(n)
	};
	this._addCurveSystemButton = function() {
		t = new CButtonSystem;
		t.setAutoReset(!1);
		for (var b = s_oSpriteLibrary.getSprite("curve_light_button"), c = 0; 3 > c; c++) t.addButton(40, 8, 324 + 60 * c, 806, 0, b, 0, 20, a);
		t.addAllButtonHitListener(this._onAllButtonPress);
		t.addSingleButtonListener(s_oScoreController.addButtonScore);
		t.setResititution(.33)
	};
	this._onAllButtonPress = function() {
		c || f ? c && !f ? (f = !0, k.highlight(500)) : !c && f && (c = !0, p.highlight(500)) : .5 > Math.random() ?
			(c = !0, p.highlight(500)) : (f = !0, k.highlight(500))
	};
	this._allLettersAreLit = function() {
		for (var a = 0; a < m.length; a++)
			if (!m[a]) return !1;
		return !0
	};
	this._onAllLettersLit = function() {
		playSound("all_letters_complete", 1, !1);
		s_oScoreController.addAllLettersScore();
		r.hardReset();
		s_oTable.enableShieldBonus();
		s_oTable.enableExtraBallBonus()
	};
	this._addCurveGate = function() {
		var a = new CGateSystem(368, 620);
		a.addGate(60, 8, 90);
		a.addOpener(40, 32, 12, 0, CURVE_FROM_RIGHT);
		a.addOpener(-52, 32, 12, 0, CURVE_FROM_LEFT);
		a.addCloser(-116,
			176, 12, 1);
		a.addCloser(152, 176, 12, 1);
		a.addPassingGateListener(this._curvePassed)
	};
	this._curvePassed = function(a) {
		s_oScoreController.addGateScore();
		a === CURVE_FROM_RIGHT && c && !b ? (trace("CURVE FROM RIGHT"), b = !0, p.lit(!0), t.restart(), r._tryToFlashARandomLetter()) : a === CURVE_FROM_LEFT && f && !h && (trace("CURVE FROM LEFT"), h = !0, k.lit(!0), t.restart(), r._tryToFlashARandomLetter());
		b && h && (trace("LETTER LIT"), r.restart(), l[g].lit(!0), m[g] = !0, e[g] = !0, playSound("letter", 1, !1), s_oScoreController.addSingleLettersScore(),
			r._allLettersAreLit() && r._onAllLettersLit())
	};
	this._tryToFlashARandomLetter = function() {
		if (!b && h || b && !h) {
			trace("FLASHING A RANDOM LETTER");
			do g = Math.floor(Math.random() * l.length); while (m[g]);
			l[g].highlight(1E3);
			m[g] = !1
		}
	};
	this._addArrows = function() {
		var b = s_oSpriteLibrary.getSprite("arrow_light_0");
		k = new CLightIndicator(b, 272, 880, a);
		k.rotate(-20);
		b = s_oSpriteLibrary.getSprite("arrow_light_0");
		p = new CLightIndicator(b, 520, 860, a);
		p.rotate(0)
	};
	this._addLetters = function() {
		l = [];
		m = [];
		e = [];
		for (var b = 0; 7 > b; b++) {
			var c =
				s_oSpriteLibrary.getSprite("letter_" + b);
			c = new CLightIndicator(c, LETTERS_POSITION[b].x, LETTERS_POSITION[b].y, a);
			l.push(c);
			m[b] = !1;
			e[b] = !1
		}
		m = [];
		e = [];
		for (b = 0; b < l.length; b++) m[b] = !1, e[b] = !1
	};
	this._addLogo = function() {
		var b = s_oSpriteLibrary.getSprite("logo");
		v = new CLightIndicator(b, 540, 1140, a);
		this.animLogo()
	};
	this.animLogo = function() {
		v.slowHighlight(2E3, 1E3, r.animLogo)
	};
	this.stopAnimLogo = function() {
		v.slowOff(1E3, 0)
	};
	this.restart = function() {
		h = f = b = c = !1;
		p.flashing();
		k.flashing();
		t.restart()
	};
	this.reset = function() {
		r.restart();
		p.slowOff();
		k.slowOff();
		t.reset();
		for (var a = 0; a < l.length; a++) m[a] = !1, e[a] ? l[a].lit(!0) : l[a].lit(!1)
	};
	this.hardReset = function() {
		this.restart();
		for (var a = 0; a < l.length; a++) m[a] = !1, e[a] = !1, l[a].flashing(), v.flashing()
	};
	this.update = function() {
		n.x = s_oGame.getBallSprite().x - n.parent.parent.x;
		n.y = s_oGame.getBallSprite().y - n.parent.parent.y;
		var a = Math.atan2(n.y, n.x);
		Math.pow(n.x, 2) + Math.pow(n.y, 2) > Math.pow(14, 2) && (n.x = 14 * Math.cos(a), n.y = 14 * Math.sin(a))
	};
	var r = this;
	this._init(a, d)
}
var STATE_START = 0,
	STATE_JUMPER = 1,
	STATE_SHIELD = 2,
	STATE_EXTRABALL = 3,
	STATE_DIRECTIONAL_JUMPER = 4,
	DIRECTION_UP = 0,
	DIRECTION_MID = 1,
	DIRECTION_RIGHT = 2;

function CModuleJumper(a, d) {
	var c, b, f, h, g, l;
	this._init = function(a, d) {
		c = STATE_START;
		b = DIRECTION_UP;
		this._addJumper();
		this._addJumperButtons();
		this._addArrows()
	};
	this._addJumper = function() {
		var b = {
			contacttype: CONTACT_BEGIN,
			callback: this._onJumper,
			params: "bumper"
		};
		h = s_oObjectBuilder.addButton(100, 12, 68, 1220, 45, 0, 0, 0, b);
		h.GetFixtureList().SetSensor(!0);
		s_oPhysicsController.disableBody(h);
		b = s_oSpriteLibrary.getSprite("jumper");
		var c = new createjs.SpriteSheet({
			images: [b],
			frames: {
				width: b.width / 2,
				height: b.height,
				regX: b.width / 2 / 2,
				regY: b.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		g = createSprite(c, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
		g.x = 68;
		g.y = 1220;
		g.rotation = 45;
		g.visible = !1;
		a.addChild(g);
		b = {
			contacttype: CONTACT_BEGIN,
			callback: function() {},
			params: "bumper"
		};
		s_oObjectBuilder.addButton(60, 8, 188, 800, 60, 0, 0, 1, b).GetFixtureList().SetSensor(!0)
	};
	this._onJumper = function(a, b) {
		s_oScoreController.addJumperScore();
		var d = b.GetFixtureA().GetUserData(),
			e = b.GetFixtureB().GetUserData(),
			f;
		d.id &&
			"ball" === d.id && (f = b.GetFixtureA().GetBody());
		e.id && "ball" === e.id && (f = b.GetFixtureB().GetBody());
		c >= STATE_DIRECTIONAL_JUMPER ? m._jumperModeDirectional(f) : m._jumperModeWeak(f);
		g.gotoAndStop("state_true");
		setTimeout(function() {
			g.gotoAndStop("state_false")
		}, 100);
		playSound("jumper", 1, !1)
	};
	this._jumperModeWeak = function(a) {
		var b = new Box2D.Common.Math.b2Vec2(a.GetPosition().x * WORLD_SCALE, a.GetPosition().y * WORLD_SCALE),
			c = new Box2D.Common.Math.b2Vec2(960 * Math.random(), 960);
		b.Subtract(c);
		b.Normalize();
		b = new Box2D.Common.Math.b2Vec2(b.x,
			b.y);
		c = 6 + 2 * Math.random();
		a.SetLinearVelocity({
			x: 0,
			y: 0
		});
		a.SetAngularVelocity(0);
		b.Multiply(-a.GetMass() * c);
		a.ApplyImpulse(b, a.GetPosition())
	};
	this._jumperModeDirectional = function(a) {
		var b = new Box2D.Common.Math.b2Vec2(a.GetPosition().x * WORLD_SCALE, a.GetPosition().y * WORLD_SCALE),
			c = m._getDirection();
		b.Subtract(c);
		b.Normalize();
		b = new Box2D.Common.Math.b2Vec2(b.x, b.y);
		a.SetLinearVelocity({
			x: 0,
			y: 0
		});
		a.SetAngularVelocity(0);
		b.Multiply(32 * -a.GetMass());
		a.ApplyImpulse(b, a.GetPosition())
	};
	this._getDirection =
		function() {
			switch (b) {
				case DIRECTION_UP:
					var a = new Box2D.Common.Math.b2Vec2(78, 640);
					break;
				case DIRECTION_MID:
					a = new Box2D.Common.Math.b2Vec2(740, 640);
					break;
				case DIRECTION_RIGHT:
					a = new Box2D.Common.Math.b2Vec2(1408, 600)
			}
			return a
		};
	this._addJumperButtons = function() {
		l = new CButtonSystem;
		for (var b = s_oSpriteLibrary.getSprite("bumper_button"), c = 0; 5 > c; c++) l.addButton(8, 56, 38, 860 + 68 * c, 0, b, 0, 0, a);
		l.addAllButtonHitListener(this._onAllButtonActive);
		l.addSingleButtonListener(s_oScoreController.addButtonScore);
		l.flipButtonX()
	};
	this._onAllButtonActive = function() {
		s_oScoreController.addAllJumperButtonsScore();
		m.changeState()
	};
	this._addArrows = function() {
		f = [];
		var b = s_oSpriteLibrary.getSprite("arrow_light_1");
		b = new CLightIndicator(b, 88, 1060, a);
		b.rotate(-5);
		f.push(b);
		b = s_oSpriteLibrary.getSprite("arrow_light_1");
		b = new CLightIndicator(b, 180, 1100, a);
		b.rotate(40);
		f.push(b);
		b = s_oSpriteLibrary.getSprite("arrow_light_1");
		b = new CLightIndicator(b, 240, 1160, a);
		b.rotate(55);
		f.push(b)
	};
	this.reset = function() {
		l.reset();
		c = STATE_START;
		b = DIRECTION_UP;
		for (var a = 0; a < f.length; a++) f[a].slowOff(1E3, 0);
		s_oPhysicsController.disableBody(h);
		g.visible = !1
	};
	this.shiftElementsToRight = function() {
		if (!(c < STATE_DIRECTIONAL_JUMPER)) {
			b++;
			b === f.length && (b = 0);
			for (var a = 0; a < f.length; a++) f[a].lit(!1);
			f[b].lit(!0)
		}
	};
	this.shiftElementsToLeft = function() {
		if (!(c < STATE_DIRECTIONAL_JUMPER)) {
			b--;
			0 > b && (b = f.length - 1);
			for (var a = 0; a < f.length; a++) f[a].lit(!1);
			f[b].lit(!0)
		}
	};
	this.changeState = function() {
		s_oTable.enableJackpot();
		c++;
		switch (c) {
			case STATE_START:
				break;
			case STATE_JUMPER:
				h.SetActive(!0);
				g.visible = !0;
				break;
			case STATE_SHIELD:
				s_oTable.enableShieldBonus();
				break;
			case STATE_EXTRABALL:
				s_oTable.enableExtraBallBonus();
				break;
			case STATE_DIRECTIONAL_JUMPER:
				f[b].lit(!0);
				break;
			default:
				0 === c % SHIELD_ACTIVATION_THRESHOLD && s_oTable.enableShieldBonus()
		}
	};
	var m = this;
	this._init(a, d)
}

function CModuleJackpot(a, d) {
	var c, b, f, h;
	this._init = function(a, d) {
		c = !1;
		b = 0;
		this._addGate();
		this._addActiveIndicator();
		this._addJackpotAmountIndicator()
	};
	this._addGate = function() {
		var a = new CGateSystem(172, 620);
		a.addGate(60, 8, 35);
		var b = s_oSpriteLibrary.getSprite("gate");
		a.addSprite(b, d, 5, 80, b.width / 2 - 6);
		a.setRestitution(0);
		a.addOpener(24, -60, 12, !0);
		a.addCloser(-40, 56, 12, !0);
		a.addPassingGateListener(this._onJackpot)
	};
	this._onJackpot = function() {
		s_oScoreController.addGateScore();
		c && (playSound("bonus_win_2",
			1, !1), s_oScoreController.addJackpotScore(), s_oScoreController.getJackpotAmount() >= EXTRABALL_JACKPOT_SCORE_ACTIVATION && s_oTable.enableExtraBallBonus(), s_oScoreController.resetJackpot(), c = !1, f.flashing())
	};
	this._addActiveIndicator = function() {
		var b = s_oSpriteLibrary.getSprite("jackpot");
		f = new CLightIndicator(b, 190, 360, a)
	};
	this._addJackpotAmountIndicator = function() {
		h = new createjs.Text((0).toLocaleString(), "28px " + SECONDARY_FONT, "#ff56b0");
		h.x = 220;
		h.y = 388;
		h.textAlign = "center";
		h.textBaseline = "middle";
		h.lineWidth =
			200;
		h.rotation = -55;
		a.addChild(h);
		h.cache(-110, -20, 220, 40)
	};
	this.reset = function() {
		g.disableJackpot()
	};
	this.enableJackpot = function() {
		c = !0;
		f.highlight(1E3);
		b = TIME_LAST_ACTIVE_JACKPOT
	};
	this.disableJackpot = function() {
		c = !1;
		f.slowOff(1E3, 0)
	};
	this.setJackpotAmount = function(a) {
		h.text = a.toLocaleString();
		h.updateCache()
	};
	this.update = function() {
		c && (b -= s_iTimeElaps, 0 > b && g.disableJackpot())
	};
	var g = this;
	this._init(a, d)
}

function CModuleShield(a, d) {
	var c, b, f, h;
	this._init = function(a, b) {
		this._addRightShield();
		this._addLeftShield()
	};
	this._addRightShield = function() {
		b = new CHoleSystem(1016, 1580, 1E3);
		b.addHoleEventListener(this._onRightShieldUsed);
		b.setLaunchImpulse(0, -(.3 + .2 * Math.random()));
		s_oPhysicsController.disableBody(b.getHole());
		var c = s_oSpriteLibrary.getSprite("shield");
		h = new CLightIndicator(c, 1016, 1580, a);
		h.lit(!0)
	};
	this._addLeftShield = function() {
		c = new CHoleSystem(54, 1580, 1E3);
		c.addHoleEventListener(this._onLeftShieldUsed);
		c.setLaunchImpulse(0, -(.3 + .2 * Math.random()));
		var b = s_oSpriteLibrary.getSprite("shield");
		f = new CLightIndicator(b, 54, 1580, a);
		f.lit(!0)
	};
	this._onRightShieldUsed = function() {
		s_oPhysicsController.disableBody(b.getHole());
		h.slowOff(1E3, 500)
	};
	this._onLeftShieldUsed = function() {
		s_oPhysicsController.disableBody(c.getHole());
		f.slowOff(1E3, 500)
	};
	this.reset = function() {
		s_oPhysicsController.disableBody(b.getHole());
		s_oPhysicsController.disableBody(c.getHole());
		h.lit(!1);
		f.lit(!1)
	};
	this.enableShield = function() {
		s_oPhysicsController.enableBody(b.getHole());
		s_oPhysicsController.enableBody(c.getHole());
		h.slowOn(500, 0);
		f.slowOn(500, 0)
	};
	this._init(a, d)
}

function CModuleStart(a, d) {
	var c, b, f, h, g, l, m, e;
	this._init = function(a, d) {
		f = !0;
		h = !1;
		c = 1976;
		b = 1876;
		g = 1E3;
		this._addTunnelSprites();
		this._addStartGate();
		this._addLaunchPlatform();
		this._addLauncher()
	};
	this._addTunnelSprites = function() {
		var b = s_oSpriteLibrary.getSprite("tunnel_start"),
			c = createBitmap(b);
		c.x = 880;
		c.y = 140;
		d.addChild(c);
		l = 0;
		m = [];
		b = s_oSpriteLibrary.getSprite("arrow_start");
		b = new CLightIndicator(b, 994, 252, a);
		b.rotate(-35);
		m.unshift(b);
		b = s_oSpriteLibrary.getSprite("arrow_start");
		b = new CLightIndicator(b,
			1044, 332, a);
		b.rotate(-25);
		m.unshift(b);
		b = s_oSpriteLibrary.getSprite("arrow_start");
		b = new CLightIndicator(b, 1074, 422, a);
		b.rotate(-10);
		m.unshift(b);
		b = s_oSpriteLibrary.getSprite("arrow_start");
		b = new CLightIndicator(b, 1088, 522, a);
		b.rotate(-5);
		m.unshift(b);
		for (c = 0; 11 > c; c++) b = s_oSpriteLibrary.getSprite("arrow_start"), b = new CLightIndicator(b, 1090, 632 + 100 * c, a), m.unshift(b);
		this.startLighting()
	};
	this.startLighting = function() {
		for (var a = l = 0; a < m.length; a++) m[a].slowHighlight(1E3, 100 * a, this.endLighting)
	};
	this.endLighting =
		function() {
			l++;
			l >= m.length && n.startLighting()
		};
	this.stopAnimLighting = function() {
		for (var a = 0; a < m.length; a++) m[a].slowOff(1E3, 0)
	};
	this._addStartGate = function() {
		var a = new CGateSystem(924, 176);
		a.addGate(60, 8, -45);
		var b = s_oSpriteLibrary.getSprite("gate");
		a.addSprite(b, d, -68, b.height / 3, b.width / 2 + 6);
		a.addOpener(60, 60, 12, 0);
		a.addCloser(-56, -32, 12, 0);
		a.addCloser(132, 176, 12, 1);
		a.addPassingGateListener(this._onStartGatePassed)
	};
	this._onStartGatePassed = function() {
		s_oGame.ballInGame(!0);
		s_oScoreController.addGateScore();
		h = !0;
		s_oTable.stopLogoAnim();
		n.stopAnimLighting()
	};
	this._addLaunchPlatform = function() {
		var a = {
			contacttype: CONTACT_BEGIN,
			callback: this._onPlatform,
			params: "platform"
		};
		s_oObjectBuilder.addButton(60, 4, 1092, 1800, 0, 0, .33, .33, a);
		a = {
			contacttype: CONTACT_BEGIN,
			callback: this._onAir,
			params: "platform"
		};
		s_oObjectBuilder.addButton(60, 4, 1092, 1732, 0, 0, .33, .33, a).GetFixtureList().SetSensor(!0)
	};
	this._onPlatform = function() {
		f = !0
	};
	this._onAir = function() {
		f = !1
	};
	this._addLauncher = function() {
		var a = s_oSpriteLibrary.getSprite("spring");
		e = createBitmap(a);
		e.regY = a.height;
		e.x = 1069;
		e.y = 1876;
		d.addChild(e);
		a = s_oSpriteLibrary.getSprite("start_platform");
		var b = createBitmap(a);
		b.regX = a.width;
		b.regY = a.height;
		b.x = s_oTable.getTableSize().w;
		b.y = s_oTable.getTableSize().h;
		d.addChild(b)
	};
	this.block = function() {
		h = !0
	};
	this.unBlock = function() {
		h = !1
	};
	this.loadSpring = function() {
		h || createjs.Tween.get(e, {
			override: !0
		}).to({
			y: c
		}, g)
	};
	this.releaseSpring = function() {
		if (!h) {
			createjs.Tween.get(e, {
				override: !0
			}).to({
				y: b
			}, 300, createjs.Ease.elasticOut);
			var a = linearFunction(e.y,
				b, c, 0, SPRING_MAX_STRENGTH);
			f && (playSound("launch", 1, !1), s_oGame.launchBall(a))
		}
	};
	var n = this;
	this._init(a, d)
}

function CGUIExpandible(a, d, c, b) {
	var f, h, g, l, m, e, n, k;
	this._init = function(a, b, c, d) {
		l = [];
		e = new createjs.Container;
		e.x = a;
		e.y = b;
		d.addChild(e);
		n = new createjs.Container;
		e.addChild(n);
		k = new createjs.Container;
		e.addChild(k);
		g = !1;
		m = new CGfxButton(0, 0, c, k);
		m.addEventListener(ON_MOUSE_UP, this._onMenu, this);
		h = f = 120
	};
	this.unload = function() {
		m.unload();
		b.removeChild(e)
	};
	this.refreshPos = function(b, c) {
		e.x = a - b;
		e.y = d + c
	};
	this.addButton = function(a) {
		a = a.getButtonImage();
		a.x = 0;
		a.y = 0;
		a.visible = 0;
		n.addChildAt(a, 0);
		l.push(a)
	};
	this._onMenu = function() {
		(g = !g) ? (p._expand(), s_oGame.onPause()) : (p._collapse(), s_oGame.onResume())
	};
	this._expand = function() {
		for (var a = 0; a < l.length; a++) l[a].visible = !0, createjs.Tween.get(l[a], {
			override: !0
		}).wait(300 * a / 2).to({
			y: f + a * h
		}, 300, createjs.Ease.cubicOut)
	};
	this._collapse = function() {
		for (var a = 0; a < l.length; a++) {
			var b = l[l.length - 1 - a];
			createjs.Tween.get(b, {
				override: !0
			}).wait(300 * a / 2).to({
				y: 0
			}, 300, createjs.Ease.cubicOut).call(function(a) {
				a.visible = !1
			}, [b])
		}
	};
	var p = this;
	this._init(a, d, c, b)
}

function CPausePanel(a) {
	var d, c;
	this._init = function(a) {
		d = new createjs.Shape;
		d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		d.alpha = 0;
		d.on("mousedown", function() {});
		a.addChild(d);
		c = new createjs.Container;
		a.addChild(c);
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2;
		a = new createjs.Text(TEXT_PAUSE, " 54px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		a.y = 0;
		a.textAlign = "center";
		a.textBaseline = "middle";
		a.lineWidth = 400;
		c.addChild(a);
		d.alpha = 0;
		c.alpha = 0
	};
	this.show = function() {
		createjs.Tween.get(d).to({
				alpha: .7
			},
			500);
		createjs.Tween.get(c).to({
			alpha: 1
		}, 500)
	};
	this.hide = function() {
		createjs.Tween.get(d).to({
			alpha: 0
		}, 500);
		createjs.Tween.get(c).to({
			alpha: 0
		}, 500)
	};
	this._init(a)
}
var LOCALSTORAGE_TOTALSCORE = "totalscore",
	s_iTotalScore = 0;

function CLocalStorage(a) {
	var d = !0;
	this._init = function(a) {
		try {
			var b = window.localStorage.getItem(a);
			this.resetData();
			null !== b && void 0 !== b && this.loadData()
		} catch (f) {
			this.resetData()
		}
	};
	this.isDirty = function() {
		return 0 < s_iTotalScore ? !0 : !1
	};
	this.isUsed = function() {
		try {
			window.localStorage.setItem("ls_available", "ok")
		} catch (c) {
			d = !1
		}
		return d
	};
	this.resetData = function() {
		s_iTotalScore = 0
	};
	this.deleteData = function() {
		window.localStorage.removeItem(a)
	};
	this.saveData = function() {
		var c = {};
		c[LOCALSTORAGE_TOTALSCORE] =
			s_iTotalScore;
		window.localStorage.setItem(a, JSON.stringify(c))
	};
	this.loadData = function() {
		var c = JSON.parse(window.localStorage.getItem(a))[LOCALSTORAGE_TOTALSCORE];
		s_iTotalScore = parseInt(c)
	};
	this._init(a)
}

function CMsgBox(a, d) {
	var c, b, f, h, g, l, m;
	this._init = function(a, d) {
		g = new createjs.Shape;
		g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		g.alpha = 0;
		m = g.on("mousedown", function() {});
		s_oStage.addChild(g);
		(new createjs.Tween.get(g)).to({
			alpha: .7
		}, 500);
		l = new createjs.Container;
		s_oStage.addChild(l);
		var e = s_oSpriteLibrary.getSprite("msg_box"),
			k = createBitmap(e);
		k.regX = e.width / 2;
		k.regY = e.height / 2;
		l.addChild(k);
		l.x = CANVAS_WIDTH / 2;
		l.y = CANVAS_HEIGHT + e.height / 2;
		c = l.y;
		(new createjs.Tween.get(l)).to({
			y: CANVAS_HEIGHT /
				2 - 40
		}, 500, createjs.Ease.quartIn);
		b = new createjs.Text(a, " 20px " + PRIMARY_FONT, "#000000");
		b.y = -e.height / 2 + 60;
		b.textAlign = "center";
		b.textBaseline = "middle";
		b.lineWidth = 550;
		b.outline = 5;
		l.addChild(b);
		f = new createjs.Text(a, " 20px " + PRIMARY_FONT, "#ffffff");
		f.y = b.y;
		f.textAlign = "center";
		f.textBaseline = "middle";
		f.lineWidth = 550;
		l.addChild(f);
		h = new CGfxButton(0, 80, s_oSpriteLibrary.getSprite("but_yes"), l);
		h.addEventListener(ON_MOUSE_UP, this._onButYes, this);
		h.pulseAnimation()
	};
	this._onButYes = function() {
		h.setClickable(!1);
		(new createjs.Tween.get(g)).to({
			alpha: 0
		}, 500);
		(new createjs.Tween.get(l)).to({
			y: c
		}, 400, createjs.Ease.backIn).call(function() {
			e.unload();
			d && d()
		})
	};
	this.changeMessage = function(a) {
		b.text = a;
		f.text = a
	};
	this.unload = function() {
		h.unload();
		s_oStage.removeChild(g);
		s_oStage.removeChild(l);
		g.off("mousedown", m)
	};
	var e = this;
	this._init(a, d)
}
CTLText.prototype = {
	constructor: CTLText,
	__autofit: function() {
		if (this._bFitText) {
			for (var a = this._iFontSize;
				(this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
			this._iFontSize = a
		}
	},
	__verticalAlign: function() {
		if (this._bVerticalAlign) {
			var a = this._oText.getBounds().height;
			this._oText.y -=
				(a - this._iHeight) / 2 + this._iPaddingV
		}
	},
	__updateY: function() {
		this._oText.y = this._y + this._iPaddingV;
		switch (this._oText.textBaseline) {
			case "middle":
				this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
		}
	},
	__createText: function(a) {
		this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
		this._oText = new createjs.Text(a,
			this._iFontSize + "px " + this._szFont, this._szColor);
		this._oText.textBaseline = "middle";
		this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
		this._oText.textAlign = this._szAlign;
		this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
		switch (this._szAlign) {
			case "center":
				this._oText.x = this._x + this._iWidth / 2;
				break;
			case "left":
				this._oText.x = this._x + this._iPaddingH;
				break;
			case "right":
				this._oText.x = this._x + this._iWidth - this._iPaddingH
		}
		this._oContainer.addChild(this._oText);
		this.refreshText(a)
	},
	setVerticalAlign: function(a) {
		this._bVerticalAlign = a
	},
	setOutline: function(a) {
		null !== this._oText && (this._oText.outline = a)
	},
	setShadow: function(a, d, c, b) {
		null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, d, c, b))
	},
	setColor: function(a) {
		this._oText.color = a
	},
	setAlpha: function(a) {
		this._oText.alpha = a
	},
	setY: function(a) {
		this._y = this._oText.y = a
	},
	removeTweens: function() {
		createjs.Tween.removeTweens(this._oText)
	},
	getText: function() {
		return this._oText
	},
	getY: function() {
		return this._y
	},
	getFontSize: function() {
		return this._iFontSize
	},
	refreshText: function(a) {
		"" === a && (a = " ");
		null === this._oText && this.__createText(a);
		this._oText.text = a;
		this._oText.font = this._iFontSize + "px " + this._szFont;
		this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
		this.__autofit();
		this.__updateY();
		this.__verticalAlign()
	}
};

function CTLText(a, d, c, b, f, h, g, l, m, e, n, k, p, t, v, r, w) {
	this._oContainer = a;
	this._x = d;
	this._y = c;
	this._iWidth = b;
	this._iHeight = f;
	this._bMultiline = r;
	this._iFontSize = h;
	this._szAlign = g;
	this._szColor = l;
	this._szFont = m;
	this._iPaddingH = n;
	this._iPaddingV = k;
	this._bVerticalAlign = v;
	this._bFitText = t;
	this._bDebug = w;
	this._oDebugShape = null;
	this._fLineHeightFactor = e;
	this._oText = null;
	p && this.__createText(p)
}

function extractHostname(a) {
	a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
	a = a.split(":")[0];
	return a = a.split("?")[0]
}

function extractRootDomain(a) {
	a = extractHostname(a);
	var d = a.split("."),
		c = d.length;
	2 < c && (a = d[c - 2] + "." + d[c - 1]);
	return a
}
var getClosestTop = function() {
		var a = window,
			d = !1;
		try {
			for (; a.parent.document !== a.document;)
				if (a.parent.document) a = a.parent;
				else {
					d = !0;
					break
				}
		} catch (c) {
			d = !0
		}
		return {
			topFrame: a,
			err: d
		}
	},
	getBestPageUrl = function(a) {
		var d = a.topFrame,
			c = "";
		if (a.err) try {
			try {
				c = window.top.location.href
			} catch (f) {
				var b = window.location.ancestorOrigins;
				c = b[b.length - 1]
			}
		} catch (f) {
			c = d.document.referrer
		} else c = d.location.href;
		return c
	},
	TOPFRAMEOBJ = getClosestTop(),
	PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
	for (var a = extractRootDomain(PAGE_URL), d = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], c = 0; c < d.length; c++)
		if (d[c] === a) return !0;
	return !0
};
