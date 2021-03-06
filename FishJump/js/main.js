(function() {
	var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		l = "undefined" !== typeof module && module.exports,
		e = function() {
			for (var h, m = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
					"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
				], b = 0, g = m.length, c = {}; b < g; b++)
				if ((h = m[b]) && h[1] in a) {
					for (b = 0; b < h.length; b++) c[m[0][b]] = h[b];
					return c
				} return !1
		}(),
		n = {
			change: e.fullscreenchange,
			error: e.fullscreenerror
		},
		k = {
			request: function(h) {
				return new Promise(function(m, b) {
					var g = function() {
						this.off("change",
							g);
						m()
					}.bind(this);
					this.on("change", g);
					h = h || a.documentElement;
					Promise.resolve(h[e.requestFullscreen]())["catch"](b)
				}.bind(this))
			},
			exit: function() {
				return new Promise(function(h, m) {
					if (this.isFullscreen) {
						var b = function() {
							this.off("change", b);
							h()
						}.bind(this);
						this.on("change", b);
						Promise.resolve(a[e.exitFullscreen]())["catch"](m)
					} else h()
				}.bind(this))
			},
			toggle: function(h) {
				return this.isFullscreen ? this.exit() : this.request(h)
			},
			onchange: function(h) {
				this.on("change", h)
			},
			onerror: function(h) {
				this.on("error", h)
			},
			on: function(h, m) {
				var b = n[h];
				b && a.addEventListener(b, m, !1)
			},
			off: function(h, m) {
				var b = n[h];
				b && a.removeEventListener(b, m, !1)
			},
			raw: e
		};
	e ? (Object.defineProperties(k, {
		isFullscreen: {
			get: function() {
				return !!a[e.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return a[e.fullscreenElement]
			}
		},
		isEnabled: {
			enumerable: !0,
			get: function() {
				return !!a[e.fullscreenEnabled]
			}
		}
	}), l ? module.exports = k : window.screenfull = k) : l ? module.exports = {
		isEnabled: !1
	} : window.screenfull = {
		isEnabled: !1
	}
})();
(function() {
	function a(t) {
		t = String(t);
		return t.charAt(0).toUpperCase() + t.slice(1)
	}

	function l(t, C) {
		var I = -1,
			G = t ? t.length : 0;
		if ("number" == typeof G && -1 < G && G <= p)
			for (; ++I < G;) C(t[I], I, t);
		else n(t, C)
	}

	function e(t) {
		t = String(t).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(t) ? t : a(t)
	}

	function n(t, C) {
		for (var I in t) w.call(t, I) && C(t[I], I, t)
	}

	function k(t) {
		return null == t ? a(t) : x.call(t).slice(8, -1)
	}

	function h(t, C) {
		var I = null != t ? typeof t[C] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(I) &&
			("object" == I ? !!t[C] : !0)
	}

	function m(t) {
		return String(t).replace(/([ -])(?!$)/g, "$1?")
	}

	function b(t, C) {
		var I = null;
		l(t, function(G, F) {
			I = C(I, G, F, t)
		});
		return I
	}

	function g(t) {
		function C(T) {
			return b(T, function(P, N) {
				var X = N.pattern || m(N);
				!P && (P = RegExp("\\b" + X + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + X + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + X + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((P = String(N.label && !RegExp(X, "i").test(N.label) ? N.label : P).split("/"))[1] && !/[\d.]+/.test(P[0]) && (P[0] +=
					" " + P[1]), N = N.label || N, P = e(P[0].replace(RegExp(X, "i"), N).replace(RegExp("; *(?:" + N + "[_-])?", "i"), " ").replace(RegExp("(" + N + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return P
			})
		}

		function I(T) {
			return b(T, function(P, N) {
				return P || (RegExp(N + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
			})
		}
		var G = d,
			F = t && "object" == typeof t && "String" != k(t);
		F && (G = t, t = null);
		var Q = G.navigator || {},
			D = Q.userAgent || "";
		t || (t = D);
		var y = F ? !!Q.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(x.toString()),
			O = F ? "Object" : "ScriptBridgingProxyObject",
			z = F ? "Object" : "Environment",
			K = F && G.java ? "JavaPackage" : k(G.java),
			L = F ? "Object" : "RuntimeObject";
		z = (K = /\bJava/.test(K) && G.java) && k(G.environment) == z;
		var U = K ? "a" : "\u03b1",
			Z = K ? "b" : "\u03b2",
			W = G.document || {},
			V = G.operamini || G.opera,
			v = u.test(v = F && V ? V["[[Class]]"] : k(V)) ? v : V = null,
			q, H = t;
		F = [];
		var S = null,
			R = t == D;
		D = R && V && "function" == typeof V.version && V.version();
		var J = function(T) {
				return b(T, function(P, N) {
					return P || RegExp("\\b" + (N.pattern || m(N)) + "\\b", "i").exec(t) && (N.label ||
						N)
				})
			}([{
				label: "EdgeHTML",
				pattern: "Edge"
			}, "Trident", {
				label: "WebKit",
				pattern: "AppleWebKit"
			}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			A = function(T) {
				return b(T, function(P, N) {
					return P || RegExp("\\b" + (N.pattern || m(N)) + "\\b", "i").exec(t) && (N.label || N)
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
			M = C([{
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
			Y = function(T) {
				return b(T, function(P, N, X) {
					return P || (N[M] || N[/^[a-z]+(?: +[a-z]+\b)*/i.exec(M)] || RegExp("\\b" + m(X) + "(?:\\b|\\w*\\d)", "i").exec(t)) && X
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
			E = function(T) {
				return b(T, function(P, N) {
					var X = N.pattern || m(N);
					if (!P && (P = RegExp("\\b" + X + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))) {
						var aa = P,
							ba = N.label || N,
							ca = {
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
						X && ba && /^Win/i.test(aa) && !/^Windows Phone /i.test(aa) && (ca = ca[/[\d.]+$/.exec(aa)]) && (aa = "Windows " + ca);
						aa = String(aa);
						X && ba && (aa = aa.replace(RegExp(X, "i"), ba));
						P = aa = e(aa.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
							"$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return P
				})
			}(["Windows Phone", "Android", "CentOS", {
					label: "Chrome OS",
					pattern: "CrOS"
				}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
				"Macintosh", "Mac", "Windows 98;", "Windows "
			]);
		J && (J = [J]);
		Y && !M && (M = C([Y]));
		if (q = /\bGoogle TV\b/.exec(M)) M = q[0];
		/\bSimulator\b/i.test(t) && (M = (M ? M + " " : "") + "Simulator");
		"Opera Mini" == A && /\bOPiOS\b/.test(t) && F.push("running in Turbo/Uncompressed mode");
		"IE" == A && /\blike iPhone OS\b/.test(t) ? (q = g(t.replace(/like iPhone OS/, "")), Y = q.manufacturer, M = q.product) : /^iP/.test(M) ? (A || (A = "Safari"), E = "iOS" + ((q = / OS ([\d_]+)/i.exec(t)) ? " " + q[1].replace(/_/g, ".") : "")) : "Konqueror" != A || /buntu/i.test(E) ? Y && "Google" != Y &&
			(/Chrome/.test(A) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(M)) || /\bAndroid\b/.test(E) && /^Chrome/.test(A) && /\bVersion\//i.test(t) ? (A = "Android Browser", E = /\bAndroid\b/.test(E) ? E : "Android") : "Silk" == A ? (/\bMobi/i.test(t) || (E = "Android", F.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && F.unshift("accelerated")) : "PaleMoon" == A && (q = /\bFirefox\/([\d.]+)\b/.exec(t)) ? F.push("identifying as Firefox " + q[1]) : "Firefox" == A && (q = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (E || (E = "Firefox OS"), M || (M = q[1])) : !A ||
			(q = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(A)) ? (A && !M && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(q + "/") + 8)) && (A = null), (q = M || Y || E) && (M || Y || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(E)) && (A = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(E) ? E : q) + " Browser")) : "Electron" == A && (q = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && F.push("Chromium " + q) : E = "Kubuntu";
		D || (D = I(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", m(A),
			"(?:Firefox|Minefield|NetFront)"
		]));
		if (q = "iCab" == J && 3 < parseFloat(D) && "WebKit" || /\bOpera\b/.test(A) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(J) && "WebKit" || !J && /\bMSIE\b/i.test(t) && ("Mac OS" == E ? "Tasman" : "Trident") || "WebKit" == J && /\bPlayStation\b(?! Vita\b)/i.test(A) && "NetFront") J = [q];
		"IE" == A && (q = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (A += " Mobile", E = "Windows Phone " + (/\+$/.test(q) ? q : q + ".x"), F.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ?
			(A = "IE Mobile", E = "Windows Phone 8.x", F.unshift("desktop mode"), D || (D = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != A && "Trident" == J && (q = /\brv:([\d.]+)/.exec(t)) && (A && F.push("identifying as " + A + (D ? " " + D : "")), A = "IE", D = q[1]);
		if (R) {
			if (h(G, "global"))
				if (K && (q = K.lang.System, H = q.getProperty("os.arch"), E = E || q.getProperty("os.name") + " " + q.getProperty("os.version")), z) {
					try {
						D = G.require("ringo/engine").version.join("."), A = "RingoJS"
					} catch (T) {
						(q = G.system) && q.global.system == G.system && (A = "Narwhal", E || (E = q[0].os || null))
					}
					A ||
						(A = "Rhino")
				} else "object" == typeof G.process && !G.process.browser && (q = G.process) && ("object" == typeof q.versions && ("string" == typeof q.versions.electron ? (F.push("Node " + q.versions.node), A = "Electron", D = q.versions.electron) : "string" == typeof q.versions.nw && (F.push("Chromium " + D, "Node " + q.versions.node), A = "NW.js", D = q.versions.nw)), A || (A = "Node.js", H = q.arch, E = q.platform, D = (D = /[\d.]+/.exec(q.version)) ? D[0] : null));
			else k(q = G.runtime) == O ? (A = "Adobe AIR", E = q.flash.system.Capabilities.os) : k(q = G.phantom) == L ? (A = "PhantomJS",
				D = (q = q.version || null) && q.major + "." + q.minor + "." + q.patch) : "number" == typeof W.documentMode && (q = /\bTrident\/(\d+)/i.exec(t)) ? (D = [D, W.documentMode], (q = +q[1] + 4) != D[1] && (F.push("IE " + D[1] + " mode"), J && (J[1] = ""), D[1] = q), D = "IE" == A ? String(D[1].toFixed(1)) : D[0]) : "number" == typeof W.documentMode && /^(?:Chrome|Firefox)\b/.test(A) && (F.push("masking as " + A + " " + D), A = "IE", D = "11.0", J = ["Trident"], E = "Windows");
			E = E && e(E)
		}
		D && (q = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (R && Q.appMinorVersion)) ||
			/\bMinefield\b/i.test(t) && "a") && (S = /b/i.test(q) ? "beta" : "alpha", D = D.replace(RegExp(q + "\\+?$"), "") + ("beta" == S ? Z : U) + (/\d+\+?/.exec(q) || ""));
		if ("Fennec" == A || "Firefox" == A && /\b(?:Android|Firefox OS)\b/.test(E)) A = "Firefox Mobile";
		else if ("Maxthon" == A && D) D = D.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(M)) "Xbox 360" == M && (E = null), "Xbox 360" == M && /\bIEMobile\b/.test(t) && F.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(A) && (!A || M || /Browser|Mobi/.test(A)) || "Windows CE" != E && !/Mobi/i.test(t))
			if ("IE" ==
				A && R) try {
				null === G.external && F.unshift("platform preview")
			} catch (T) {
				F.unshift("embedded")
			} else(/\bBlackBerry\b/.test(M) || /\bBB10\b/.test(t)) && (q = (RegExp(M.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || D) ? (q = [q, /BB10/.test(t)], E = (q[1] ? (M = null, Y = "BlackBerry") : "Device Software") + " " + q[0], D = null) : this != n && "Wii" != M && (R && V || /Opera/.test(A) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == A && /\bOS X (?:\d+\.){2,}/.test(E) || "IE" == A && (E && !/^Win/.test(E) && 5.5 < D || /\bWindows XP\b/.test(E) && 8 < D || 8 == D && !/\bTrident\b/.test(t))) &&
				!u.test(q = g.call(n, t.replace(u, "") + ";")) && q.name && (q = "ing as " + q.name + ((q = q.version) ? " " + q : ""), u.test(A) ? (/\bIE\b/.test(q) && "Mac OS" == E && (E = null), q = "identify" + q) : (q = "mask" + q, A = v ? e(v.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(q) && (E = null), R || (D = null)), J = ["Presto"], F.push(q));
			else A += " Mobile";
		if (q = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) {
			q = [parseFloat(q.replace(/\.(\d)$/, ".0$1")), q];
			if ("Safari" == A && "+" == q[1].slice(-1)) A = "WebKit Nightly", S = "alpha", D = q[1].slice(0, -1);
			else if (D ==
				q[1] || D == (q[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) D = null;
			q[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1];
			537.36 == q[0] && 537.36 == q[2] && 28 <= parseFloat(q[1]) && "WebKit" == J && (J = ["Blink"]);
			R && (y || q[1]) ? (J && (J[1] = "like Chrome"), q = q[1] || (q = q[0], 530 > q ? 1 : 532 > q ? 2 : 532.05 > q ? 3 : 533 > q ? 4 : 534.03 > q ? 5 : 534.07 > q ? 6 : 534.1 > q ? 7 : 534.13 > q ? 8 : 534.16 > q ? 9 : 534.24 > q ? 10 : 534.3 > q ? 11 : 535.01 > q ? 12 : 535.02 > q ? "13+" : 535.07 > q ? 15 : 535.11 > q ? 16 : 535.19 > q ? 17 : 536.05 > q ? 18 : 536.1 > q ? 19 : 537.01 > q ? 20 : 537.11 > q ? "21+" : 537.13 > q ? 23 : 537.18 > q ? 24 : 537.24 > q ? 25 : 537.36 >
				q ? 26 : "Blink" != J ? "27" : "28")) : (J && (J[1] = "like Safari"), q = (q = q[0], 400 > q ? 1 : 500 > q ? 2 : 526 > q ? 3 : 533 > q ? 4 : 534 > q ? "4+" : 535 > q ? 5 : 537 > q ? 6 : 538 > q ? 7 : 601 > q ? 8 : "8"));
			J && (J[1] += " " + (q += "number" == typeof q ? ".x" : /[.+]/.test(q) ? "" : "+"));
			"Safari" == A && (!D || 45 < parseInt(D)) && (D = q)
		}
		"Opera" == A && (q = /\bzbov|zvav$/.exec(E)) ? (A += " ", F.unshift("desktop mode"), "zvav" == q ? (A += "Mini", D = null) : A += "Mobile", E = E.replace(RegExp(" *" + q + "$"), "")) : "Safari" == A && /\bChrome\b/.exec(J && J[1]) && (F.unshift("desktop mode"), A = "Chrome Mobile", D = null, /\bOS X\b/.test(E) ?
			(Y = "Apple", E = "iOS 4.3+") : E = null);
		D && 0 == D.indexOf(q = /[\d.]+$/.exec(E)) && -1 < t.indexOf("/" + q + "-") && (E = String(E.replace(q, "")).replace(/^ +| +$/g, ""));
		J && !/\b(?:Avant|Nook)\b/.test(A) && (/Browser|Lunascape|Maxthon/.test(A) || "Safari" != A && /^iOS/.test(E) && /\bSafari\b/.test(J[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(A) && J[1]) && (q = J[J.length - 1]) && F.push(q);
		F.length && (F = ["(" + F.join("; ") + ")"]);
		Y && M && 0 > M.indexOf(Y) && F.push("on " + Y);
		M && F.push((/^on /.test(F[F.length -
			1]) ? "" : "on ") + M);
		if (E) {
			var da = (q = / ([\d.+]+)$/.exec(E)) && "/" == E.charAt(E.length - q[0].length - 1);
			E = {
				architecture: 32,
				family: q && !da ? E.replace(q[0], "") : E,
				version: q ? q[1] : null,
				toString: function() {
					var T = this.version;
					return this.family + (T && !da ? " " + T : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		}(q = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(H)) && !/\bi686\b/i.test(H) ? (E && (E.architecture = 64, E.family = E.family.replace(RegExp(" *" + q), "")), A && (/\bWOW64\b/i.test(t) || R && /\w(?:86|32)$/.test(Q.cpuClass || Q.platform) && !/\bWin64; x64\b/i.test(t)) &&
			F.unshift("32-bit")) : E && /^OS X/.test(E.family) && "Chrome" == A && 39 <= parseFloat(D) && (E.architecture = 64);
		t || (t = null);
		G = {};
		G.description = t;
		G.layout = J && J[0];
		G.manufacturer = Y;
		G.name = A;
		G.prerelease = S;
		G.product = M;
		G.ua = t;
		G.version = A && D;
		G.os = E || {
			architecture: null,
			family: null,
			version: null,
			toString: function() {
				return "null"
			}
		};
		G.parse = g;
		G.toString = function() {
			return this.description || ""
		};
		G.version && F.unshift(D);
		G.name && F.unshift(A);
		E && A && (E != String(E).split(" ")[0] || E != A.split(" ")[0] && !M) && F.push(M ? "(" + E + ")" : "on " +
			E);
		F.length && (G.description = F.join(" "));
		return G
	}
	var c = {
			"function": !0,
			object: !0
		},
		d = c[typeof window] && window || this,
		r = c[typeof exports] && exports;
	c = c[typeof module] && module && !module.nodeType && module;
	var f = r && c && "object" == typeof global && global;
	!f || f.global !== f && f.window !== f && f.self !== f || (d = f);
	var p = Math.pow(2, 53) - 1,
		u = /\bOpera/;
	f = Object.prototype;
	var w = f.hasOwnProperty,
		x = f.toString,
		B = g();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (d.platform = B, define(function() {
			return B
		})) : r &&
		c ? n(B, function(t, C) {
			r[C] = t
		}) : d.platform = B
}).call(this);
! function() {
	function a(k) {
		var h = k;
		if (n[h]) h = n[h];
		else {
			for (var m = h, b, g = [], c = 0; m;) {
				if (null !== (b = e.text.exec(m))) g.push(b[0]);
				else if (null !== (b = e.modulo.exec(m))) g.push("%");
				else if (null !== (b = e.placeholder.exec(m))) {
					if (b[2]) {
						c |= 1;
						var d = [],
							r = b[2],
							f;
						if (null !== (f = e.key.exec(r)))
							for (d.push(f[1]);
								"" !== (r = r.substring(f[0].length));)
								if (null !== (f = e.key_access.exec(r))) d.push(f[1]);
								else if (null !== (f = e.index_access.exec(r))) d.push(f[1]);
						else throw new SyntaxError("[sprintf] failed to parse named argument key");
						else throw new SyntaxError("[sprintf] failed to parse named argument key");
						b[2] = d
					} else c |= 2;
					if (3 === c) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
					g.push({
						placeholder: b[0],
						param_no: b[1],
						keys: b[2],
						sign: b[3],
						pad_char: b[4],
						align: b[5],
						width: b[6],
						precision: b[7],
						type: b[8]
					})
				} else throw new SyntaxError("[sprintf] unexpected placeholder");
				m = m.substring(b[0].length)
			}
			h = n[h] = g
		}
		m = arguments;
		b = 1;
		g = h.length;
		d = "";
		var p, u;
		for (r = 0; r < g; r++)
			if ("string" === typeof h[r]) d += h[r];
			else if ("object" === typeof h[r]) {
			f = h[r];
			if (f.keys)
				for (c = m[b], p = 0; p < f.keys.length; p++) {
					if (void 0 ==
						c) throw Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', f.keys[p], f.keys[p - 1]));
					c = c[f.keys[p]]
				} else c = f.param_no ? m[f.param_no] : m[b++];
			e.not_type.test(f.type) && e.not_primitive.test(f.type) && c instanceof Function && (c = c());
			if (e.numeric_arg.test(f.type) && "number" !== typeof c && isNaN(c)) throw new TypeError(a("[sprintf] expecting number but found %T", c));
			e.number.test(f.type) && (u = 0 <= c);
			switch (f.type) {
				case "b":
					c = parseInt(c, 10).toString(2);
					break;
				case "c":
					c = String.fromCharCode(parseInt(c,
						10));
					break;
				case "d":
				case "i":
					c = parseInt(c, 10);
					break;
				case "j":
					c = JSON.stringify(c, null, f.width ? parseInt(f.width) : 0);
					break;
				case "e":
					c = f.precision ? parseFloat(c).toExponential(f.precision) : parseFloat(c).toExponential();
					break;
				case "f":
					c = f.precision ? parseFloat(c).toFixed(f.precision) : parseFloat(c);
					break;
				case "g":
					c = f.precision ? String(Number(c.toPrecision(f.precision))) : parseFloat(c);
					break;
				case "o":
					c = (parseInt(c, 10) >>> 0).toString(8);
					break;
				case "s":
					c = String(c);
					c = f.precision ? c.substring(0, f.precision) : c;
					break;
				case "t":
					c = String(!!c);
					c = f.precision ? c.substring(0, f.precision) : c;
					break;
				case "T":
					c = Object.prototype.toString.call(c).slice(8, -1).toLowerCase();
					c = f.precision ? c.substring(0, f.precision) : c;
					break;
				case "u":
					c = parseInt(c, 10) >>> 0;
					break;
				case "v":
					c = c.valueOf();
					c = f.precision ? c.substring(0, f.precision) : c;
					break;
				case "x":
					c = (parseInt(c, 10) >>> 0).toString(16);
					break;
				case "X":
					c = (parseInt(c, 10) >>> 0).toString(16).toUpperCase()
			}
			if (e.json.test(f.type)) d += c;
			else {
				if (!e.number.test(f.type) || u && !f.sign) var w = "";
				else w = u ? "+" :
					"-", c = c.toString().replace(e.sign, "");
				p = f.pad_char ? "0" === f.pad_char ? "0" : f.pad_char.charAt(1) : " ";
				var x = f.width - (w + c).length;
				x = f.width ? 0 < x ? p.repeat(x) : "" : "";
				d += f.align ? w + c + x : "0" === p ? w + x + c : x + w + c
			}
		}
		return d
	}

	function l(k, h) {
		return a.apply(null, [k].concat(h || []))
	}
	var e = {
			not_string: /[^s]/,
			not_bool: /[^t]/,
			not_type: /[^T]/,
			not_primitive: /[^v]/,
			number: /[diefg]/,
			numeric_arg: /[bcdiefguxX]/,
			json: /[j]/,
			not_json: /[^j]/,
			text: /^[^\x25]+/,
			modulo: /^\x25{2}/,
			placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
			key: /^([a-z_][a-z_\d]*)/i,
			key_access: /^\.([a-z_][a-z_\d]*)/i,
			index_access: /^\[(\d+)\]/,
			sign: /^[+-]/
		},
		n = Object.create(null);
	"undefined" !== typeof exports && (exports.sprintf = a, exports.vsprintf = l);
	"undefined" !== typeof window && (window.sprintf = a, window.vsprintf = l, "function" === typeof define && define.amd && define(function() {
		return {
			sprintf: a,
			vsprintf: l
		}
	}))
}();
var s_iScaleFactor = 1,
	s_bIsIphone = !1,
	s_iOffsetX = 0,
	s_iOffsetY = 0,
	s_bFocus = !0;
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

function isIOS() {
	var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
	if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone")) return s_bIsIphone = !0;
	for (; a.length;)
		if (navigator.platform === a.pop()) return s_bIsIphone = !0;
	return s_bIsIphone = !1
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
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
	var l = a.toLowerCase(),
		e = window.document,
		n = e.documentElement;
	if (void 0 === window["inner" + a]) a = n["client" + a];
	else if (window["inner" + a] != n["client" + a]) {
		var k = e.createElement("body");
		k.id = "vpw-test-b";
		k.style.cssText = "overflow:scroll";
		var h = e.createElement("div");
		h.id = "vpw-test-d";
		h.style.cssText = "position:absolute;top:-1000px";
		h.innerHTML = "<style>@media(" + l + ":" + n["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + l + ":7px!important}}</style>";
		k.appendChild(h);
		n.insertBefore(k, e.head);
		a = 7 == h["offset" + a] ? n["client" + a] : window["inner" + a];
		n.removeChild(k)
	} else a = window["inner" + a];
	return a
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
		var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
		var l = getSize("Width");
		s_bFocus && _checkOrientation(l, a);
		s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, l / CANVAS_WIDTH);
		var e = Math.round(CANVAS_WIDTH * s_iScaleFactor),
			n = Math.round(CANVAS_HEIGHT * s_iScaleFactor);
		if (n < a) {
			var k = a - n;
			n += k;
			e += CANVAS_WIDTH / CANVAS_HEIGHT * k
		} else e < l && (k = l - e, e += k, n += CANVAS_HEIGHT / CANVAS_WIDTH * k);
		k = a / 2 - n / 2;
		var h = l / 2 - e / 2,
			m = CANVAS_WIDTH / e;
		if (h * m < -EDGEBOARD_X || k * m < -EDGEBOARD_Y) s_iScaleFactor = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), l / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), e = Math.round(CANVAS_WIDTH * s_iScaleFactor), n = Math.round(CANVAS_HEIGHT * s_iScaleFactor), k = (a - n) / 2, h = (l - e) / 2, m = CANVAS_WIDTH / e;
		s_iOffsetX = -1 * h * m;
		s_iOffsetY = -1 * k * m;
		0 <= k && (s_iOffsetY = 0);
		0 <= h && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oLevelMenu &&
			s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oHelp && s_oHelp.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bIsIphone && s_oStage ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * e, s_oStage.canvas.height = 2 * n, canvas.style.width = e + "px", canvas.style.height = n + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(e / CANVAS_WIDTH, n / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", e + "px"), $("#canvas").css("height", n + "px")) : s_oStage && (s_oStage.canvas.width = e, s_oStage.canvas.height =
			n, s_iScaleFactor = Math.min(e / CANVAS_WIDTH, n / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > k ? ($("#canvas").css("top", k + "px"), s_iCanvasOffsetHeight = k) : (k = (a - n) / 2, $("#canvas").css("top", k + "px"), s_iCanvasOffsetHeight = 0);
		$("#canvas").css("left", h + "px");
		resizeCanvas3D();
		s_iCanvasResizeWidth = e;
		s_iCanvasResizeHeight = n;
		s_iCanvasOffsetWidth = h;
		fullscreenHandler()
	}
}

function _checkOrientation(a, l) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > l ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function createBitmap(a, l, e) {
	var n = new createjs.Bitmap(a),
		k = new createjs.Shape;
	l && e ? k.graphics.beginFill("#fff").drawRect(-l / 2, -e / 2, l, e) : k.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	n.hitArea = k;
	return n
}

function createSprite(a, l, e, n, k, h) {
	a = null !== l ? new createjs.Sprite(a, l) : new createjs.Sprite(a);
	l = new createjs.Shape;
	l.graphics.beginFill("#000000").drawRect(-e, -n, k, h);
	a.hitArea = l;
	return a
}

function randomFloatBetween(a, l, e) {
	"undefined" === typeof e && (e = 2);
	return parseFloat(Math.min(a + Math.random() * (l - a), l).toFixed(e))
}

function shuffle(a) {
	for (var l = a.length, e, n; 0 !== l;) n = Math.floor(Math.random() * l), --l, e = a[l], a[l] = a[n], a[n] = e;
	return a
}

function formatTime(a) {
	a /= 1E3;
	var l = Math.floor(a / 60);
	a = parseFloat(a - 60 * l).toFixed(1);
	var e = "";
	e = 10 > l ? e + ("0" + l + ":") : e + (l + ":");
	return 10 > a ? e + ("0" + a) : e + a
}

function degreesToRadians(a) {
	return a * Math.PI / 180
}

function checkRectCollision(a, l) {
	var e = getBounds(a, .9);
	var n = getBounds(l, .98);
	return calculateIntersection(e, n)
}

function calculateIntersection(a, l) {
	var e, n, k, h;
	var m = a.x + (e = a.width / 2);
	var b = a.y + (n = a.height / 2);
	var g = l.x + (k = l.width / 2);
	var c = l.y + (h = l.height / 2);
	m = Math.abs(m - g) - (e + k);
	b = Math.abs(b - c) - (n + h);
	return 0 > m && 0 > b ? (m = Math.min(Math.min(a.width, l.width), -m), b = Math.min(Math.min(a.height, l.height), -b), {
		x: Math.max(a.x, l.x),
		y: Math.max(a.y, l.y),
		width: m,
		height: b,
		rect1: a,
		rect2: l
	}) : null
}

function getBounds(a, l) {
	var e = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (a instanceof createjs.Container) {
		e.x2 = -Infinity;
		e.y2 = -Infinity;
		var n = a.children,
			k = n.length,
			h;
		for (h = 0; h < k; h++) {
			var m = getBounds(n[h], 1);
			m.x < e.x && (e.x = m.x);
			m.y < e.y && (e.y = m.y);
			m.x + m.width > e.x2 && (e.x2 = m.x + m.width);
			m.y + m.height > e.y2 && (e.y2 = m.y + m.height)
		}
		Infinity == e.x && (e.x = 0);
		Infinity == e.y && (e.y = 0);
		Infinity == e.x2 && (e.x2 = 0);
		Infinity == e.y2 && (e.y2 = 0);
		e.width = e.x2 - e.x;
		e.height = e.y2 - e.y;
		delete e.x2;
		delete e.y2
	} else {
		if (a instanceof createjs.Bitmap) {
			k =
				a.sourceRect || a.image;
			h = k.width * l;
			var b = k.height * l
		} else if (a instanceof createjs.Sprite)
			if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
				k = a.spriteSheet.getFrame(a.currentFrame);
				h = k.rect.width;
				b = k.rect.height;
				n = k.regX;
				var g = k.regY
			} else e.x = a.x || 0, e.y = a.y || 0;
		else e.x = a.x || 0, e.y = a.y || 0;
		n = n || 0;
		h = h || 0;
		g = g || 0;
		b = b || 0;
		e.regX = n;
		e.regY = g;
		k = a.localToGlobal(0 - n, 0 - g);
		m = a.localToGlobal(h - n, b - g);
		h = a.localToGlobal(h - n, 0 - g);
		n = a.localToGlobal(0 - n, b - g);
		e.x =
			Math.min(Math.min(Math.min(k.x, m.x), h.x), n.x);
		e.y = Math.min(Math.min(Math.min(k.y, m.y), h.y), n.y);
		e.width = Math.max(Math.max(Math.max(k.x, m.x), h.x), n.x) - e.x;
		e.height = Math.max(Math.max(Math.max(k.y, m.y), h.y), n.y) - e.y
	}
	return e
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
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
			var l = document.createEvent("MouseEvents");
			l.initEvent("click", !0, !0);
			a.dispatchEvent(l)
		}
	}
};
(function() {
	function a(e) {
		var n = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		e = e || window.event;
		e.type in n ? document.body.className = n[e.type] : (document.body.className = this[l] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
	}
	var l = "hidden";
	l in document ? document.addEventListener("visibilitychange", a) : (l = "mozHidden") in document ? document.addEventListener("mozvisibilitychange",
		a) : (l = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (l = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function playSound(a, l, e) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(l), s_aSounds[a].loop(e), s_aSounds[a]) : null
}

function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, l) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(l)
}

function setMute(a, l) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(l)
}

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var l = window.location.search.substring(1).split("&"), e = 0; e < l.length; e++) {
		var n = l[e].split("=");
		if (n[0] == a) return n[1]
	}
}

function rotateVector2D(a, l) {
	return {
		x: l.x * Math.cos(a) + l.y * Math.sin(a),
		y: l.x * -Math.sin(a) + l.y * Math.cos(a)
	}
}

function normalize(a, l) {
	0 < l && (a.x /= l, a.y /= l);
	return a
}

function length(a) {
	return Math.sqrt(a.x * a.x + a.y * a.y)
}

function findNearestIntersectingObject(a, l, e, n) {
	var k = CANVAS_RESIZE_WIDTH + 2 * OFFSET_WIDTH,
		h = CANVAS_RESIZE_HEIGHT + 2 * OFFSET_HEIGHT,
		m = new THREE.Raycaster,
		b = new THREE.Vector3;
	b.x = a / k * 2 - 1;
	b.y = 2 * -(l / h) + 1;
	b.z = .5;
	m.setFromCamera(b, e);
	a = m.intersectObjects(n, !0);
	l = !1;
	0 < a.length && (l = a[0]);
	return l
}

function distance(a, l, e, n) {
	a -= e;
	l -= n;
	return Math.sqrt(a * a + l * l)
}

function distance2(a, l, e, n) {
	a -= e;
	l -= n;
	return a * a + l * l
}

function resizeCanvas3D() {
	$("canvas").each(function() {
		"#canvas" != $(this).attr("id") && ($(this).css("width", $("#canvas").css("width")), $(this).css("height", $("#canvas").css("height")), $(this).css("position", $("#canvas").css("position")), $(this).css("left", $("#canvas").css("left")), $(this).css("top", $("#canvas").css("top")))
	})
}

function createOrthoGraphicCamera() {
	var a = new THREE.PerspectiveCamera(FOV, CANVAS_WIDTH / CANVAS_HEIGHT, NEAR, FAR);
	a.rotation.x = Math.PI / 180 * 90;
	a.position.set(0, 0, 0);
	a.updateProjectionMatrix();
	a.updateMatrixWorld();
	return a
}

function rotateVector2D(a, l) {
	return {
		x: l.x * Math.cos(a) + l.y * Math.sin(a),
		y: l.x * -Math.sin(a) + l.y * Math.cos(a),
		z: 0
	}
}
Math.radians = function(a) {
	return a * Math.PI / 180
};
Math.degrees = function(a) {
	return 180 * a / Math.PI
};

function distanceV3(a, l, e, n, k, h) {
	a -= n;
	l -= k;
	e -= h;
	return Math.sqrt(a * a + l * l + e * e)
}

function distanceV2(a, l) {
	var e = a.x - l.x,
		n = a.y - l.y;
	return Math.sqrt(e * e + n * n)
}

function saveItem(a, l) {
	s_bStorageAvailable && localStorage.setItem(a, l)
}

function getItem(a) {
	return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function clearAllItem() {
	localStorage.clear()
}

function fullscreenHandler() {
	ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut();
	null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
	var a = {},
		l, e, n, k, h, m;
	this.init = function(b, g, c) {
		l = {};
		n = e = 0;
		k = b;
		h = g;
		m = c
	};
	this.addSprite = function(b, g) {
		if (!a.hasOwnProperty(b)) {
			var c = new Image;
			a[b] = l[b] = {
				szPath: g,
				oSprite: c,
				bLoaded: !1
			};
			e++
		}
	};
	this.getSprite = function(b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function() {
		e = 0;
		h.call(m)
	};
	this._onSpriteLoaded = function() {
		k.call(m);
		++n === e && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var b in l) l[b].oSprite.oSpriteLibrary = this, l[b].oSprite.szKey =
			b, l[b].oSprite.onload = function() {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, l[b].oSprite.onerror = function(g) {
				var c = g.currentTarget;
				setTimeout(function() {
					l[c.szKey].oSprite.src = l[c.szKey].szPath
				}, 500)
			}, l[b].oSprite.src = l[b].szPath
	};
	this.setLoaded = function(b) {
		a[b].bLoaded = !0
	};
	this.isLoaded = function(b) {
		return a[b].bLoaded
	};
	this.getNumSprites = function() {
		return e
	}
}
var CANVAS_WIDTH = 840,
	CANVAS_HEIGHT = 1024,
	CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH,
	CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT,
	EDGEBOARD_X = 100,
	EDGEBOARD_Y = 90,
	DISABLE_SOUND_MOBILE = !1,
	FONT_GAME = "wayoshiregular",
	TEXT_COLOR = "#2e618a",
	TEXT_COLOR_1 = "#b7e5f8",
	FPS = 30,
	FPS_TIME = 1 / FPS,
	SOUNDTRACK_VOLUME_IN_GAME = 1,
	TIME_STEP_BOX2D = 1 / 60,
	ITINERATION_BOX2D = 4,
	POSITION_ITINERATION_BOX2D = 7,
	FISHES_ANGULAR_IMPULSE = -8.5,
	FORCE_CRABS_Y = -11,
	FORCE_CRABS_X_MULTIPLIER = -3.5,
	FISHES_TYPE = 2,
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
	ON_BUT_NO_DOWN = 6,
	ON_BUT_YES_DOWN = 7,
	MAX_BONUS_INSTANCES = 1,
	TIME_INTERVAL_SPAWN_FISH = .7,
	TWEEN_END_MACTH_Y = .5 * CANVAS_HEIGHT,
	MAX_ASSIGNED_STAR = 3,
	LEVEL_DIAGRAM, WALL = 0,
	ANEMONE = 1,
	CRABS = 2,
	OBSTACLE = 3,
	FLOOR = 4,
	FISH = [5, 9],
	BONUS_HEART = 6,
	LEFT_WALL = 7,
	RIGHT_WALL = 8,
	FISH_IN_ANEMONE_ANIM_POS = {
		x: 400,
		y: 565
	},
	CRABS_START_POSITION = {
		x: 415,
		y: 840
	},
	CRABS_REG_OFFSET = {
		x: 10,
		y: 30
	},
	BUBBLE_RANGE_X = {
		min: 5,
		max: 25
	},
	BUBBLE_SPEED = {
		min: .5,
		max: 3
	},
	BUBBLE_TIME = {
		min: 3E3,
		max: 2E4
	},
	BUBBLE_SCALE = {
		min: .5,
		max: 1
	},
	BUBBLE_INSTANCE = 20,
	CRABS_X_LIMIT = {
		min: 100 + CRABS_REG_OFFSET.x,
		max: 720 + CRABS_REG_OFFSET.x
	},
	FISH_CATEGORY_COLLISION = 1,
	FIELD_CATEGORY_COLLISION = 2,
	CRABS_CATEGORY_COLLISION = 3,
	BONUS_CATEGORY_COLLISION = 4,
	FISH_DAMPING = [.3],
	FISH_ANGULAR_DAMPING = [.5],
	WALL_DENSITY = 1,
	WALL_FRICTION = 1,
	WALL_RESTITUTION = .7,
	WORLD_SCALE = 30,
	STATE_INIT = 0,
	STATE_PLAY = 1,
	STATE_FINISH = 2,
	STATE_PAUSE = 3,
	TEST = !1,
	FIELD_DIAGRAM = [
		[{
			x: 0,
			y: CANVAS_HEIGHT - EDGEBOARD_Y
		}, {
			x: 0,
			y: -EDGEBOARD_Y
		}, LEFT_WALL],
		[{
			x: 0,
			y: -EDGEBOARD_Y
		}, {
			x: CANVAS_WIDTH,
			y: -EDGEBOARD_Y
		}, WALL],
		[{
			x: CANVAS_WIDTH,
			y: -EDGEBOARD_Y
		}, {
			x: CANVAS_WIDTH,
			y: CANVAS_HEIGHT - EDGEBOARD_Y
		}, RIGHT_WALL],
		[{
			x: CANVAS_WIDTH,
			y: CANVAS_HEIGHT - EDGEBOARD_Y
		}, {
			x: 0,
			y: CANVAS_HEIGHT - EDGEBOARD_Y
		}, FLOOR]
	],
	SPAWN_FISHES_RANGE_X = {
		min: 1.5 * EDGEBOARD_X,
		max: CANVAS_WIDTH - 1.5 * EDGEBOARD_X
	},
	COLLISION_CRABS = {
		x: CRABS_START_POSITION.x,
		y: CRABS_START_POSITION.y,
		width: 70,
		height: 1,
		density: 1,
		friction: .5,
		restitution: 0,
		sensor: !1,
		info: {
			type: CRABS
		},
		angle: 0,
		catBits: CRABS_CATEGORY_COLLISION,
		maskBits: FISH_CATEGORY_COLLISION,
		groupId: 1
	},
	COLLISION_ANEMONE = {
		x: 403,
		y: 481,
		width: 80,
		height: 30,
		density: 0,
		friction: 0,
		restitution: 0,
		sensor: !0,
		info: {
			type: ANEMONE
		},
		angle: 0,
		catBits: CRABS_CATEGORY_COLLISION,
		maskBits: FISH_CATEGORY_COLLISION,
		groupId: 1
	},
	COLLISION_FISH = [{
		x: 0,
		y: 0,
		width: 20,
		density: .3,
		friction: .1,
		restitution: .7,
		info: {
			type: FISH[0]
		},
		linearDamping: FISH_DAMPING[0],
		angularDamping: FISH_ANGULAR_DAMPING[0],
		catBits: FISH_CATEGORY_COLLISION,
		maskBits: CRABS_CATEGORY_COLLISION,
		groupId: -1
	}, {
		x: 0,
		y: 0,
		width: 20,
		density: .3,
		friction: .1,
		restitution: .7,
		info: {
			type: FISH[1]
		},
		linearDamping: FISH_DAMPING[0],
		angularDamping: FISH_ANGULAR_DAMPING[0],
		catBits: FISH_CATEGORY_COLLISION,
		maskBits: CRABS_CATEGORY_COLLISION,
		groupId: -1
	}],
	OBSTACLES_COLLISION = [{
		x: 13,
		y: 25,
		width: 90,
		height: 22,
		density: 1,
		friction: .5,
		restitution: .3,
		sensor: !1,
		info: {
			type: OBSTACLE
		},
		angle: 45,
		catBits: CRABS_CATEGORY_COLLISION,
		maskBits: FISH_CATEGORY_COLLISION,
		groupId: 1
	}, {
		x: 15,
		y: 28,
		width: 174,
		height: 22,
		density: 1,
		friction: .5,
		restitution: .4,
		sensor: !1,
		info: {
			type: OBSTACLE
		},
		angle: 0,
		catBits: CRABS_CATEGORY_COLLISION,
		maskBits: FISH_CATEGORY_COLLISION,
		groupId: 1
	}],
	COLLISION_BONUS = [{
		x: 0,
		y: 0,
		width: 20,
		density: .3,
		friction: .5,
		restitution: .7,
		info: {
			type: BONUS_HEART
		},
		linearDamping: FISH_DAMPING[0],
		angularDamping: FISH_ANGULAR_DAMPING[0],
		catBits: CRABS_CATEGORY_COLLISION,
		maskBits: BONUS_CATEGORY_COLLISION,
		groupId: 1
	}],
	ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, LEVEL_SETTINGS = [{
			level: 1,
			fish_instance_level: 3,
			saved_fishes_target: 1,
			fish_spawn: [{
				time: {
					min: 6,
					max: 12
				},
				occurance: 90
			}, {
				time: {
					min: 6,
					max: 12
				},
				occurance: 10
			}],
			object: [],
			bonus_spawn_time: {
				min: 20,
				max: 30
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 2,
			fish_instance_level: 3,
			saved_fishes_target: 10,
			fish_spawn: [{
				time: {
					min: 5,
					max: 10
				},
				occurance: 1
			}],
			object: [{
				type: 0,
				x: 580,
				y: 200,
				angle: 35
			}],
			bonus_spawn_time: {
				min: 20,
				max: 40
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 3,
			fish_instance_level: 4,
			saved_fishes_target: 10,
			fish_spawn: [{
				type: 0,
				time: {
					min: 3,
					max: 7
				},
				occurance: 75
			}, {
				time: {
					min: 3,
					max: 7
				},
				occurance: 25
			}],
			object: [{
				type: 1,
				x: 240,
				y: 100,
				angle: 25
			}],
			bonus_spawn_time: {
				min: 40,
				max: 50
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		},
		{
			level: 4,
			fish_instance_level: 4,
			saved_fishes_target: 12,
			fish_spawn: [{
				type: 0,
				time: {
					min: 2,
					max: 5
				},
				occurance: 70
			}, {
				time: {
					min: 2,
					max: 5
				},
				occurance: 30
			}],
			object: [{
				type: 1,
				x: 160,
				y: 680,
				angle: 25
			}],
			bonus_spawn_time: {
				min: 50,
				max: 70
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 5,
			fish_instance_level: 4,
			saved_fishes_target: 13,
			fish_spawn: [{
				type: 0,
				time: {
					min: 1.5,
					max: 3
				},
				occurance: 50
			}, {
				time: {
					min: 2,
					max: 4
				},
				occurance: 50
			}],
			object: [],
			bonus_spawn_time: {
				min: 30,
				max: 60
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 6,
			fish_instance_level: 8,
			saved_fishes_target: 9,
			fish_spawn: [{
				type: 0,
				time: {
					min: 1.5,
					max: 3.5
				},
				occurance: 75
			}, {
				time: {
					min: 1.5,
					max: 3.5
				},
				occurance: 25
			}],
			object: [{
				type: 1,
				x: 230,
				y: 140,
				angle: 25
			}, {
				type: 1,
				x: 610,
				y: 140,
				angle: -25
			}],
			bonus_spawn_time: {
				min: 50,
				max: 80
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 7,
			fish_instance_level: 7,
			saved_fishes_target: 16,
			fish_spawn: [{
				type: 0,
				time: {
					min: 1,
					max: 2.5
				},
				occurance: 35
			}, {
				type: 1,
				time: {
					min: 1,
					max: 2.5
				},
				occurance: 65
			}],
			object: [{
				type: 0,
				x: 260,
				y: 300,
				angle: 25
			}, {
				type: 0,
				x: 540,
				y: 300,
				angle: -25
			}],
			bonus_spawn_time: {
				min: 50,
				max: 80
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 8,
			fish_instance_level: 6,
			saved_fishes_target: 13,
			fish_spawn: [{
				type: 0,
				time: {
					min: 2,
					max: 3
				},
				occurance: 50
			}, {
				type: 1,
				time: {
					min: 2,
					max: 4
				},
				occurance: 50
			}],
			object: [{
				type: 0,
				x: 290,
				y: 460,
				angle: 60
			}, {
				type: 0,
				x: 500,
				y: 460,
				angle: -50
			}],
			bonus_spawn_time: {
				min: 50,
				max: 80
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 9,
			fish_instance_level: 6,
			saved_fishes_target: 13,
			fish_spawn: [{
				type: 0,
				time: {
					min: 2,
					max: 3
				},
				occurance: 30
			}, {
				type: 1,
				time: {
					min: 1.5,
					max: 4
				},
				occurance: 70
			}],
			object: [{
				type: 0,
				x: 230,
				y: 480,
				angle: 80
			}, {
				type: 0,
				x: 610,
				y: 480,
				angle: -80
			}],
			bonus_spawn_time: {
				min: 50,
				max: 80
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}, {
			level: 10,
			fish_instance_level: 8,
			saved_fishes_target: 18,
			fish_spawn: [{
				type: 0,
				time: {
					min: 1,
					max: 2
				},
				occurance: 25
			}, {
				type: 1,
				time: {
					min: 1.5,
					max: 2.5
				},
				occurance: 75
			}],
			object: [{
				type: 1,
				x: 250,
				y: 200,
				angle: 30
			}, {
				type: 0,
				x: 580,
				y: 250,
				angle: -30
			}],
			bonus_spawn_time: {
				min: 20,
				max: 40
			},
			bonus_spawn: [{
				type: 0,
				occurance: 50
			}]
		}
	];

function CPreloader() {
	var a, l, e, n, k, h, m;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.loadSprites();
		m = new createjs.Container;
		s_oStage.addChild(m)
	};
	this.unload = function() {
		m.removeAllChildren()
	};
	this.hide = function() {
		var b = this;
		setTimeout(function() {
			createjs.Tween.get(h).to({
				alpha: 1
			}, 500).call(function() {
				b.unload();
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
		var b = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		m.addChild(b);
		b = s_oSpriteLibrary.getSprite("progress_bar");
		n = createBitmap(b);
		n.x = CANVAS_WIDTH / 2 - b.width / 2;
		n.y = CANVAS_HEIGHT - 200;
		m.addChild(n);
		a = b.width;
		l = b.height;
		k = new createjs.Shape;
		k.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(n.x, n.y, 1, l);
		m.addChild(k);
		n.mask =
			k;
		e = new createjs.Text("", "30px " + FONT_GAME, "#fff");
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT - 200;
		e.shadow = new createjs.Shadow("#000", 2, 2, 2);
		e.textBaseline = "alphabetic";
		e.textAlign = "center";
		m.addChild(e);
		h = new createjs.Shape;
		h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.alpha = 0;
		m.addChild(h)
	};
	this.refreshLoader = function(b) {
		e.text = b + "%";
		100 === b && (s_oMain._onRemovePreloader(), e.visible = !1, n.visible = !1);
		k.graphics.clear();
		b = Math.floor(b * a / 100);
		k.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(n.x,
			n.y, b, l)
	};
	this._init()
}

function CMain(a) {
	var l, e = 0,
		n = 0,
		k = STATE_LOADING,
		h, m;
	this.initContainer = function() {
		var g = document.getElementById("canvas");
		s_oStage = new createjs.Stage(g);
		createjs.Touch.enable(s_oStage, !0);
		s_oStage.preventSelection = !1;
		g.opacity = .5;
		s_bMobile = isMobile();
		!1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(c) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.framerate = FPS;
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		seekAndDestroy() ? h = new CPreloader : window.location.href = "https://www.atterolabs.com";
		l = !0
	};
	this.soundLoaded = function() {
		e++;
		h.refreshLoader(Math.floor(e / n * 100))
	};
	this._initSounds = function() {
		Howler.mute(!s_bAudioActive);
		s_aSoundsInfo = [];
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "win",
			loop: !1,
			volume: 1,
			ingamename: "win"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "click",
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
			filename: "basket",
			loop: !1,
			volume: 1,
			ingamename: "basket"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "bounce",
			loop: !1,
			volume: 1,
			ingamename: "bounce"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "lose_life",
			loop: !1,
			volume: 1,
			ingamename: "lose_life"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		n += s_aSoundsInfo.length;
		s_aSounds = [];
		for (var g = 0; g <
			s_aSoundsInfo.length; g++) this.tryToLoadSound(s_aSoundsInfo[g], !1)
	};
	this.tryToLoadSound = function(g, c) {
		setTimeout(function() {
			s_aSounds[g.ingamename] = new Howl({
				src: [g.path + g.filename + ".mp3"],
				autoplay: !1,
				preload: !0,
				loop: g.loop,
				volume: g.volume,
				onload: s_oMain.soundLoaded,
				onloaderror: function(d, r) {
					for (var f = 0; f < s_aSoundsInfo.length; f++)
						if (d === s_aSounds[s_aSoundsInfo[f].ingamename]._sounds[0]._id) {
							s_oMain.tryToLoadSound(s_aSoundsInfo[f], !0);
							break
						}
				},
				onplayerror: function(d) {
					for (var r = 0; r < s_aSoundsInfo.length; r++)
						if (d ===
							s_aSounds[s_aSoundsInfo[r].ingamename]._sounds[0]._id) {
							s_aSounds[s_aSoundsInfo[r].ingamename].once("unlock", function() {
								s_aSounds[s_aSoundsInfo[r].ingamename].play();
								"soundtrack" === s_aSoundsInfo[r].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
							});
							break
						}
				}
			})
		}, c ? 200 : 0)
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("but_info",
			"./sprites/but_info.png");
		s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
		s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("audio_icon",
			"./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
		s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
		s_oSpriteLibrary.addSprite("but_continue_big", "./sprites/but_continue_big.png");
		s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
		s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
		s_oSpriteLibrary.addSprite("keyboard", "./sprites/keyboard.png");
		s_oSpriteLibrary.addSprite("score_board", "./sprites/score_board.png");
		s_oSpriteLibrary.addSprite("crabs", "./sprites/crabs.png");
		s_oSpriteLibrary.addSprite("energy_bar", "./sprites/energy_bar.png");
		s_oSpriteLibrary.addSprite("fishes_bar", "./sprites/fishes_bar.png");
		s_oSpriteLibrary.addSprite("obstacle_0", "./sprites/obstacle_0.png");
		s_oSpriteLibrary.addSprite("obstacle_1", "./sprites/obstacle_1.png");
		s_oSpriteLibrary.addSprite("logo_ctl",
			"./sprites/logo_ctl.png");
		s_oSpriteLibrary.addSprite("anemone_back", "./sprites/anemone_back.png");
		s_oSpriteLibrary.addSprite("anemone_front", "./sprites/anemone_front.png");
		s_oSpriteLibrary.addSprite("bonus_0", "./sprites/bonus_0.png");
		s_oSpriteLibrary.addSprite("heart", "./sprites/heart.png");
		s_oSpriteLibrary.addSprite("edge", "./sprites/edge.png");
		s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
		s_oSpriteLibrary.addSprite("fade_help_0", "./sprites/fade_help_0.png");
		s_oSpriteLibrary.addSprite("fade_help_1",
			"./sprites/fade_help_1.png");
		s_oSpriteLibrary.addSprite("bubble_anemone", "./sprites/bubble_anemone.png");
		s_oSpriteLibrary.addSprite("bubble", "./sprites/bubble.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		for (var g = 0; g < FISHES_TYPE; g++) s_oSpriteLibrary.addSprite("fish_" + g, "./sprites/fish_" + g + ".png");
		s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
		n += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		e++;
		h.refreshLoader(Math.floor(e / n * 100))
	};
	this._onAllImagesLoaded = function() {};
	this._onRemovePreloader = function() {
		try {
			saveItem("ls_available", "ok")
		} catch (g) {
			s_bStorageAvailable = !1
		}
		h.unload();
		s_oSoundTrack = playSound("soundtrack", 1, !0);
		this.gotoMenu()
	};
	this.preloaderReady = function() {
		this._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		s_aLevelsDiagram = LEVEL_SETTINGS;
		l = !0
	};
	this.gotoMenu = function() {
		new CMenu;
		k = STATE_MENU
	};
	this.gotoLevelMenu = function() {
		new CLevelMenu(s_aLevelsDiagram.length);
		k = STATE_MENU
	};
	this.gotoGame = function(g) {
		m = new CGame(b, g);
		k = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		k = STATE_HELP
	};
	this.stopUpdate = function() {
		l = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		l = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function(g) {
		if (!1 !==
			l) {
			var c = (new Date).getTime();
			s_iTimeElaps = c - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = c;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			k === STATE_GAME && m.update();
			s_oStage.update(g)
		}
	};
	s_oMain = this;
	var b = a;
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
	s_oPhysicsController, s_iAdsLevel = 1,
	s_aLevelsDiagram, s_iLastLevel = 1,
	s_aScores;
s_aScores = [];
var s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
	s_bFullscreen = !1,
	s_bStorageAvailable = !0,
	s_aSounds, s_aSoundsInfo;

function CTextButton(a, l, e, n, k, h, m) {
	var b, g, c;
	this._init = function(d, r, f, p, u, w, x) {
		b = [];
		g = [];
		var B = createBitmap(f),
			t = Math.ceil(x / 20),
			C = new createjs.Text(p, "bold " + x + "px " + u, "#000000");
		C.textAlign = "center";
		C.textBaseline = "alphabetic";
		var I = C.getBounds();
		C.x = f.width / 2 + t;
		C.y = Math.floor(f.height / 2) + I.height / 3 + t;
		p = new createjs.Text(p, "bold " + x + "px " + u, w);
		p.textAlign = "center";
		p.textBaseline = "alphabetic";
		I = p.getBounds();
		p.x = f.width / 2;
		p.y = Math.floor(f.height / 2) + I.height / 3;
		c = new createjs.Container;
		c.x = d;
		c.y =
			r;
		c.regX = f.width / 2;
		c.regY = f.height / 2;
		c.addChild(B, C, p);
		s_bMobile || (c.cursor = "pointer");
		s_oStage.addChild(c);
		this._initListener()
	};
	this.unload = function() {
		c.removeAllEventListeners();
		s_oStage.removeChild(c)
	};
	this.setVisible = function(d) {
		c.visible = d
	};
	this._initListener = function() {
		oParent = this;
		c.on("mousedown", this.buttonDown);
		c.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(d, r, f) {
		b[d] = r;
		g[d] = f
	};
	this.buttonRelease = function() {
		c.scaleX = 1;
		c.scaleY = 1;
		playSound("click", 1, !1);
		b[ON_MOUSE_UP] &&
			b[ON_MOUSE_UP].call(g[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		c.scaleX = .9;
		c.scaleY = .9;
		b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
	};
	this.setPosition = function(d, r) {
		c.x = d;
		c.y = r
	};
	this.setX = function(d) {
		c.x = d
	};
	this.setY = function(d) {
		c.y = d
	};
	this.getButtonImage = function() {
		return c
	};
	this.getX = function() {
		return c.x
	};
	this.getY = function() {
		return c.y
	};
	this._init(a, l, e, n, k, h, m);
	return this
}

function CToggle(a, l, e, n, k) {
	var h, m, b, g, c;
	this._init = function(d, r, f, p, u) {
		c = void 0 !== u ? u : s_oStage;
		m = [];
		b = [];
		u = new createjs.SpriteSheet({
			images: [f],
			frames: {
				width: f.width / 2,
				height: f.height,
				regX: f.width / 2 / 2,
				regY: f.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		h = p;
		g = createSprite(u, "state_" + h, f.width / 2 / 2, f.height / 2, f.width / 2, f.height);
		g.x = d;
		g.y = r;
		g.stop();
		s_bMobile || (g.cursor = "pointer");
		c.addChild(g);
		this._initListener()
	};
	this.unload = function() {
		g.removeAllEventListeners();
		c.removeChild(g)
	};
	this._initListener =
		function() {
			g.on("mousedown", this.buttonDown);
			g.on("pressup", this.buttonRelease)
		};
	this.addEventListener = function(d, r, f) {
		m[d] = r;
		b[d] = f
	};
	this.setCursorType = function(d) {
		g.cursor = d
	};
	this.setActive = function(d) {
		h = d;
		g.gotoAndStop("state_" + h)
	};
	this.buttonRelease = function() {
		g.scaleX = 1;
		g.scaleY = 1;
		playSound("click", 1, !1);
		h = !h;
		g.gotoAndStop("state_" + h);
		m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(b[ON_MOUSE_UP], h)
	};
	this.buttonDown = function() {
		g.scaleX = .9;
		g.scaleY = .9;
		m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(b[ON_MOUSE_DOWN])
	};
	this.setPosition = function(d, r) {
		g.x = d;
		g.y = r
	};
	this.getButtonImage = function() {
		return g
	};
	this._init(a, l, e, n, k)
}

function CGfxButton(a, l, e, n) {
	var k, h, m, b, g, c, d = !1;
	this._init = function(f, p, u) {
		k = [];
		h = [];
		m = createBitmap(u);
		m.x = f;
		m.y = p;
		c = g = 1;
		m.regX = u.width / 2;
		m.regY = u.height / 2;
		s_bMobile || (m.cursor = "pointer");
		r.addChild(m);
		this._initListener()
	};
	this.unload = function() {
		m.removeAllEventListeners();
		createjs.Tween.removeTweens(m);
		r.removeChild(m)
	};
	this.setVisible = function(f) {
		m.visible = f
	};
	this.setCursorType = function(f) {
		m.cursor = f
	};
	this._initListener = function() {
		m.on("mousedown", this.buttonDown);
		m.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(f, p, u) {
		k[f] = p;
		h[f] = u
	};
	this.addEventListenerWithParams = function(f, p, u, w) {
		k[f] = p;
		h[f] = u;
		b = w
	};
	this.buttonRelease = function() {
		d || (m.scaleX = g, m.scaleY = c, playSound("click", 1, !1), k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(h[ON_MOUSE_UP], b))
	};
	this.buttonDown = function() {
		d || (m.scaleX = .9 * g, m.scaleY = .9 * c, k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], b))
	};
	this.rotation = function(f) {
		m.rotation = f
	};
	this.getButton = function() {
		return m
	};
	this.setPosition = function(f, p) {
		m.x = f;
		m.y = p
	};
	this.setX =
		function(f) {
			m.x = f
		};
	this.setY = function(f) {
		m.y = f
	};
	this.getButtonImage = function() {
		return m
	};
	this.block = function(f) {
		d = f;
		m.scaleX = g;
		m.scaleY = c
	};
	this.setScaleX = function(f) {
		g = m.scaleX = f
	};
	this.setScale = function(f) {
		m.scaleX = f;
		c = g = m.scaleY = f
	};
	this.getX = function() {
		return m.x
	};
	this.getY = function() {
		return m.y
	};
	this.pulseAnimation = function() {
		createjs.Tween.get(m, {
			loop: -1
		}).to({
			scaleX: .9 * g,
			scaleY: .9 * c
		}, 850, createjs.Ease.quadOut).to({
			scaleX: g,
			scaleY: c
		}, 650, createjs.Ease.quadIn)
	};
	this.removeAllTweens = function() {
		createjs.Tween.removeTweens(m)
	};
	var r = n;
	this._init(a, l, e);
	return this
}

function CMenu() {
	var a, l, e, n, k, h, m, b, g, c, d, r, f, p, u = null,
		w, x = null,
		B = null;
	this._init = function() {
		g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(g);
		var t = s_oSpriteLibrary.getSprite("but_play");
		k = CANVAS_WIDTH / 2;
		h = CANVAS_HEIGHT - 300;
		c = new CGfxButton(k, h, t, s_oStage);
		c.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		s_bStorageAvailable && null !== getItem("LevelReachedFish") ? (s_iLastLevel = getItem("LevelReachedFish"), s_aScores = JSON.parse(getItem("ScoresFish")), c.setPosition(CANVAS_WIDTH /
			2 - 200, CANVAS_HEIGHT - 300), t = s_oSpriteLibrary.getSprite("but_continue_big"), r = new CGfxButton(CANVAS_WIDTH / 2 + 200, CANVAS_HEIGHT - 300, t, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this), r.pulseAnimation()) : (c.setPosition(CANVAS_WIDTH / 2, 584), c.pulseAnimation(), this.resetArrayScores());
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), m = CANVAS_WIDTH - t.width / 4 - 8, b = t.height / 2 + 10, p = new CToggle(m, b, t, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP,
			this._onAudioToggle, this);
		t = s_oSpriteLibrary.getSprite("but_info");
		e = t.height / 2 + 10;
		n = t.height / 2 + 10;
		d = new CGfxButton(e, n, t, s_oStage);
		d.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
		t = window.document;
		var C = t.documentElement;
		x = C.requestFullscreen || C.mozRequestFullScreen || C.webkitRequestFullScreen || C.msRequestFullscreen;
		B = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (x = !1);
		x && screenfull.isEnabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"),
			a = e + t.width / 2 + 10, l = n, w = new CToggle(a, l, t, s_bFullscreen, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		f = new createjs.Shape;
		f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(f);
		createjs.Tween.get(f).to({
			alpha: 0
		}, 1E3).call(function() {
			f.visible = !1
		});
		s_bStorageAvailable || new CMsgBox(TEXT_ERR_LS, s_oStage);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshButtonPos = function(t, C) {
		d.setPosition(e + t, n + C);
		!1 !== DISABLE_SOUND_MOBILE && !1 !==
			s_bMobile || p.setPosition(m - t, C + b);
		x && screenfull.isEnabled && w.setPosition(a + s_iOffsetX, l + s_iOffsetY)
	};
	this.unload = function() {
		c.unload();
		c = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
		x && screenfull.isEnabled && w.unload();
		s_oStage.removeAllChildren();
		s_oMenu = null
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onButInfoRelease = function() {
		new CCreditsPanel
	};
	this._onButPlayRelease = function() {
		s_bStorageAvailable && null !== getItem("LevelReachedFish") ?
			null === u && (u = new CConfirmPanel(TEXT_RESET, 0), u.addEventListener(ON_BUT_NO_DOWN, this._onButNo, this), u.addEventListener(ON_BUT_YES_DOWN, this._onButYes, this)) : (this.unload(), s_oMain.gotoLevelMenu())
	};
	this._onButContinueRelease = function() {
		this.unload();
		s_oMain.gotoLevelMenu()
	};
	this._onButNo = function() {
		u.unload();
		u = null
	};
	this._onButYes = function() {
		clearAllItem();
		this.unload();
		s_iLastLevel = 1;
		this.resetArrayScores();
		s_oMain.gotoLevelMenu()
	};
	this.resetFullscreenBut = function() {
		x && screenfull.isEnabled && w.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? B.call(window.document) : x.call(window.document.documentElement);
		sizeHandler()
	};
	this.resetArrayScores = function() {
		s_aScores = [];
		for (var t = 0; t < s_aLevelsDiagram.length; t++) s_aScores[t] = 0
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a, l) {
	var e, n, k = !0,
		h, m, b, g, c, d, r, f, p, u, w, x, B, t = null,
		C, I, G, F, Q, D, y, O, z, K = null,
		L, U, Z, W, V;
	this._init = function() {
		$(s_oMain).trigger("start_session");
		e = CRABS_X_LIMIT.min;
		n = CRABS_X_LIMIT.max;
		k = !0;
		f = STATE_PLAY;
		p = r = d = g = m = h = 0;
		c = LIVES;
		b = l;
		y = [];
		D = [];
		z = [];
		for (var v = 0; v < b; v++) h += s_aScores[v];
		w = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		s_oStage.addChild(w);
		I = new createjs.Container;
		s_oStage.addChild(I);
		s_oPhysicsController = new CPhysicsController;
		x = new CPhysicsObject;
		x.createAContactListener();
		this._createAnemone();
		this._createBubbleAnemone();
		this._createBubbleInstance();
		this._createCrabs();
		this.createField();
		this.createLevel();
		u = new CInterface(l);
		u.refreshLives(c);
		u.refreshTarget(d, r);
		u.refreshLevel(b + 1);
		u.refreshScore(h);
		0 === b ? (u.createInteractiveHelp(), k = !1, f = STATE_HELP) : this.activeEventListeners()
	};
	this._createCrabs = function() {
		var v = s_oSpriteLibrary.getSprite("crabs");
		C = new CCrabs(CRABS_START_POSITION.x, CRABS_START_POSITION.y, v, x.addRectangle(COLLISION_CRABS), I)
	};
	this._createBubbleAnemone =
		function() {
			Q = new CAnimBubble(410, 280, s_oSpriteLibrary.getSprite("bubble_anemone"), I)
		};
	this._createAnemone = function() {
		B = new CAnemone(422, 635, x.addRectangle(COLLISION_ANEMONE), I)
	};
	this._createBubbleInstance = function() {
		Z = [];
		for (var v = s_oSpriteLibrary.getSprite("bubble"), q = 0; q < BUBBLE_INSTANCE; q++) Z.push(new CBubble(v, I));
		Z[0].reset(!0)
	};
	this._createRandomOpponentTeamOrder = function() {
		for (var v = [], q = 0, H = 0; H < TOT_TEAM; H++) void 0 !== H && (v[q] = H, q++);
		return v = shuffle(v)
	};
	this.createField = function() {
		for (var v =
				FIELD_DIAGRAM, q = s_oSpriteLibrary.getSprite("edge"), H = 0; H < v.length; H++) {
			var S = v[H][0],
				R = v[H][1],
				J = v[H][2];
			D[H] = x.addLine(0, 0, S, R, 0, WALL_DENSITY, WALL_FRICTION, WALL_RESTITUTION, J);
			J === RIGHT_WALL ? G = new CSideWall(S.x, 0, q, J, H, D[H], -q.width, s_oStage) : J === LEFT_WALL && (F = new CSideWall(R.x, 0, q, J, H, D[H], q.width, s_oStage), F.setScaleX(-1))
		}
	};
	this.refreshPositionSidesWalls = function(v) {
		var q = G.getStartPos(),
			H = F.getStartPos();
		G.setPosition(q.x - v, q.y);
		G.setPositionPhysics(-v, q.y);
		F.setPosition(H.x + v, H.y);
		F.setPositionPhysics(v,
			H.y)
	};
	this.refreshLimitCrabsX = function(v) {
		e = CRABS_X_LIMIT.min + v;
		n = CRABS_X_LIMIT.max - v
	};
	this.createLevel = function() {
		O = [];
		for (var v = s_aLevelsDiagram[b].fish_instance_level, q = s_aLevelsDiagram[b].fish_spawn.length, H = 0, S = 0; S < q; S++) {
			var R = s_oSpriteLibrary.getSprite("fish_" + S);
			z[S] = .5 * -R.width;
			for (var J = 0; J < v; J++) y[H] = new CFish(-R.width, J * R.height, R, S, H, x.addCircle(COLLISION_FISH[S], H), I), H++;
			for (R = 0; R < s_aLevelsDiagram[b].fish_spawn[S].occurance; R++) O.push(S)
		}
		W = TIME_INTERVAL_SPAWN_FISH;
		r = s_aLevelsDiagram[b].saved_fishes_target;
		0 < s_aLevelsDiagram[b].object.length && this.createObstacle(s_aLevelsDiagram[b].object.length);
		this.createBonus()
	};
	this.createObstacle = function(v) {
		K = [];
		for (var q = 0; q < v; q++) {
			var H = s_aLevelsDiagram[b].object[q],
				S = s_oSpriteLibrary.getSprite("obstacle_" + H.type);
			K.push(new CObstacle(H.x, H.y, S, H.type, q, H.angle, x.addObstacle(H.x, H.y, H.angle, OBSTACLES_COLLISION[H.type]), I))
		}
	};
	this.createBonus = function() {
		L = [];
		U = [];
		for (var v = s_aLevelsDiagram[b].bonus_spawn, q = 0; q < v.length; q++) {
			var H = s_oSpriteLibrary.getSprite("bonus_" +
				v[q].type);
			L.push(new CBonus(-H.width, q * H.height, H, v[q].type, q, x.addCircle(COLLISION_BONUS[v[q].type], q), I));
			for (H = 0; H < v[q].occurance; H++) U.push(q)
		}
		V = this.timeSpawn(s_aLevelsDiagram[b].bonus_spawn_time)
	};
	this.unload = function() {
		k = !1;
		u.unload();
		this.destroyPhysicsEngine();
		s_oStage.removeAllChildren();
		createjs.Tween.removeAllTweens();
		!1 === s_bMobile && (document.onkeydown = null, document.onkeyup = null)
	};
	this.destroyPhysicsEngine = function() {
		s_oPhysicsController.destroyAllBody();
		s_oPhysicsController.destroyWorld();
		s_oPhysicsController = null
	};
	this.onExit = function() {
		this.unload();
		this.deactiveEventListeners();
		$(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("end_session");
		setVolume("soundtrack", 1);
		s_oMain.gotoMenu()
	};
	this._onExitHelp = function() {
		u.unloadHelp();
		this.unpause(!0);
		f = STATE_PLAY;
		this.activeEventListeners()
	};
	this.unpause = function(v) {
		k = v;
		!0 === v ? this.activeEventListeners() : this.deactiveEventListeners()
	};
	this.nextLevel = function() {
		b++;
		this.unloadLevel();
		this.createLevel();
		this.resetBubble();
		u.refreshLevel(b +
			1);
		$(s_oMain).trigger("start_level", b)
	};
	this.resetBubble = function() {
		for (var v = 0; v < Z.length; v++) Z[v].reset()
	};
	this.unloadLevel = function() {
		for (var v = 0; v < y.length; v++) s_oPhysicsController.destroyBody(y[v].getPhysics()), y[v].unload();
		if (null !== K)
			for (v = 0; v < K.length; v++) s_oPhysicsController.destroyBody(K[v].getPhysics()), K[v].unload();
		for (v = 0; v < L.length; v++) s_oPhysicsController.destroyBody(L[v].getPhysics()), L[v].unload();
		y = [];
		L = [];
		K = null
	};
	this.crabsTouchFish = function(v, q, H) {
		y[H].setTouchCrabs(!0);
		this.applyImpulseToFish(v,
			q);
		playSound("bounce", 1, !1)
	};
	this.applyImpulseToFish = function(v, q) {
		0 < q.y || (s_oPhysicsController.setElementLinearVelocity(v, {
			x: 0,
			y: 0
		}), s_oPhysicsController.setElementAngularVelocity(v, q.x * FISHES_ANGULAR_IMPULSE), s_oPhysicsController.applyImpulse(v, {
			x: q.x * FORCE_CRABS_X_MULTIPLIER,
			y: FORCE_CRABS_Y
		}))
	};
	this.fishOnFloor = function(v) {
		this.addLife(-1);
		s_oPhysicsController.setElementLinearVelocity(y[v].getPhysics(), {
			x: 0,
			y: 0
		});
		y[v].animOnFloor();
		2 > g && (W = TIME_INTERVAL_SPAWN_FISH);
		playSound("lose_life", 1, !1)
	};
	this.bonusDisapper = function(v) {
		L[v].animDisappear()
	};
	this.bonusHeart = function() {
		this.addLife(1)
	};
	this.addLife = function(v) {
		c += v;
		1 > c && this.lose();
		var q = !1;
		0 > v && (q = !0);
		u.refreshLives(c, q)
	};
	this.lose = function() {
		u.createLosePanel(d, r);
		f = STATE_FINISH;
		this.deactiveEventListeners();
		playSound("game_over", 1, !1);
		$(s_oMain).trigger("end_level", b)
	};
	this.onContinue = function() {
		this.nextLevel();
		this.resetValues();
		this.activeEventListeners();
		f = STATE_PLAY
	};
	this.won = function() {
		var v = !1;
		b >= s_aLevelsDiagram.length - 1 &&
			(v = !0);
		h += m;
		u.createWinPanel(d, r, h, v);
		this.saveProgress();
		f = STATE_FINISH;
		this.deactiveEventListeners();
		playSound("win", 1, !1);
		$(s_oMain).trigger("end_level", b)
	};
	this.saveProgress = function() {
		s_iLastLevel < b + 2 && (s_iLastLevel = b + 2);
		m > s_aScores[b] && (s_aScores[b] = m);
		saveItem("LevelReachedFish", s_iLastLevel);
		saveItem("ScoresFish", JSON.stringify(s_aScores))
	};
	this.fishInAnemone = function(v) {
		if (y[v].getTouchCrabs() && !(0 > s_oPhysicsController.getElementVelocity(y[v].getPhysics()).y)) {
			playSound("basket", 1, !1);
			B.animAnemone();
			Q.startAnimation();
			this.addScore(FISH_SCORE[y[v].getType()]);
			y[v].setTouchCrabs(!1);
			var q = B.getChildIndexFront();
			y[v].spriteFollowPhysics(!1);
			y[v].setChildIndex(q);
			y[v].animInAnemone();
			2 > g && (W = TIME_INTERVAL_SPAWN_FISH);
			d++;
			d === r && this.won();
			playSound("basket", 1, !1);
			u.refreshTarget(d, r)
		}
	};
	this.cachedFish = function(v) {
		y[v].setCache(!0);
		y[v].resetPos();
		y[v].setAlpha(1);
		y[v].setTouchCrabs(!1);
		g--
	};
	this.cachedBonus = function(v) {
		L[v].setCache(!0);
		L[v].resetPos();
		L[v].setAlpha(1);
		p--
	};
	this.activeEventListeners =
		function() {
			null === t && (t = s_oStage.on("stagemousemove", this.onCrabsMove))
		};
	this.deactiveEventListeners = function() {
		s_oStage.off("stagemousemove", t);
		t = null
	};
	this.addScore = function(v) {
		var q = h;
		m += v;
		q += m;
		u.refreshScore(q)
	};
	this.cachedAllFish = function() {
		for (var v = 0; v < y.length; v++) this.cachedFish(v)
	};
	this.cachedAllBonus = function() {
		for (var v = 0; v < L.length; v++) this.cachedBonus(v)
	};
	this.restartLevel = function() {
		this.resetScene();
		this.resetBubble();
		this.activeEventListeners();
		c = LIVES;
		u.refreshLives(c);
		$(s_oMain).trigger("restart_level",
			b);
		f = STATE_PLAY
	};
	this.resetScene = function() {
		this.cachedAllFish();
		this.cachedAllBonus();
		this.resetValues()
	};
	this.resetValues = function() {
		p = g = d = 0;
		W = TIME_INTERVAL_SPAWN_FISH;
		m = 0;
		u.refreshScore(h);
		u.refreshTarget(d, r)
	};
	this._onEnd = function() {
		this.onExit()
	};
	this.onCrabsMove = function() {
		if (s_oStage.mouseX <= e) C.x = e;
		else if (s_oStage.mouseX >= n) C.x = n;
		else {
			var v = C.getX();
			C.setPosition(s_oStage.mouseX, C.getY());
			v = Math.abs(v - C.getX());
			C.moveAnimation(v)
		}
	};
	this.moveFishes = function() {
		for (var v = 0; v < y.length; v++) y[v].isCached() ||
			y[v].update()
	};
	this.moveBonus = function() {
		for (var v = 0; v < L.length; v++) L[v].isCached() || L[v].update()
	};
	this.getRandomType = function(v) {
		return v[Math.floor(Math.random() * v.length)]
	};
	this.spawnFishes = function() {
		if (!(g >= s_aLevelsDiagram[b].fish_instance_level || d >= s_aLevelsDiagram[b].saved_fishes_target))
			if (0 < W) W -= FPS_TIME;
			else
				for (var v = this.getRandomType(O), q = 0; q < y.length; q++)
					if (y[q].getType() === v && y[q].isCached() && null === y[q].isAnim()) {
						this.spawnFishInstance(q);
						W = this.timeSpawn(s_aLevelsDiagram[b].fish_spawn[v].time);
						g++;
						break
					}
	};
	this.spawnFishInstance = function(v) {
		var q = Math.random() * (SPAWN_FISHES_RANGE_X.max - SPAWN_FISHES_RANGE_X.min) + SPAWN_FISHES_RANGE_X.min,
			H = C.getChildIndex() + 1;
		y[v].setChildIndex(H);
		y[v].setPosition(q, z[0]);
		y[v].setCache(!1)
	};
	this.timeSpawn = function(v) {
		return Math.random() * (v.max - v.min) + v.min
	};
	this.spawnBonus = function() {
		if (!(p >= MAX_BONUS_INSTANCES))
			if (0 < V) V -= FPS_TIME;
			else
				for (var v = this.getRandomType(U), q = 0; q < L.length; q++)
					if (L[q].getType() === v && L[q].isCached()) {
						this.spawnBonusInstance(q);
						V =
							this.timeSpawn(s_aLevelsDiagram[b].bonus_spawn_time);
						p++;
						break
					}
	};
	this.spawnBonusInstance = function(v) {
		L[v].setPosition(Math.random() * (SPAWN_FISHES_RANGE_X.max - SPAWN_FISHES_RANGE_X.min) + SPAWN_FISHES_RANGE_X.min, z[0]);
		L[v].setCache(!1)
	};
	this.manageBubble = function() {
		for (var v = 0; v < Z.length; v++) Z[v].update()
	};
	this._updatePlay = function() {
		k && (this.moveFishes(), this.moveBonus(), this.spawnFishes(), this.spawnBonus(), this.manageBubble(), s_oPhysicsController.update())
	};
	this.update = function() {
		switch (f) {
			case STATE_PLAY:
				this._updatePlay()
		}
	};
	s_oGame = this;
	FISH_SCORE = a.fish_score;
	LIVES = a.lives;
	BONUS_SCORE = a.bonus_scores;
	NUM_LEVEL_FOR_ADS = a.num_levels_for_ads;
	this._init()
}
var s_oGame;

function CInterface(a) {
	var l, e, n, k, h, m, b, g, c, d, r, f, p, u, w, x, B, t, C = null,
		I, G, F, Q = null,
		D = null;
	this._init = function() {
		var y = s_oSpriteLibrary.getSprite("score_board"),
			O = .5 * y.width + 10;
		w = new CScoreBoard(y, O, .5 * y.height + 11, y.width, TEXT_SCORE + ": 0", 0);
		var z = s_oSpriteLibrary.getSprite("energy_bar");
		O = O + O + .5 * z.width;
		x = new CLifeBoard(z, O, .5 * z.height + 11);
		z = s_oSpriteLibrary.getSprite("fishes_bar");
		B = new CScoreBoard(z, O + z.width, .5 * z.height + 11, y.width / 2 - 10, "10/10", 18);
		y = CANVAS_HEIGHT - 20;
		t = new CTLText(s_oStage, CANVAS_WIDTH /
			2 - 200, y - 30, 400, 60, 50, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, sprintf(TEXT_LEVEL, 0), !0, !0, !1, !1);
		b = y;
		y = s_oSpriteLibrary.getSprite("but_exit");
		n = CANVAS_WIDTH - y.width / 2 - 10;
		k = y.height / 2 + 10;
		d = new CGfxButton(n, k, y, s_oStage);
		d.addEventListener(ON_MOUSE_UP, this._onExit, this);
		y = s_oSpriteLibrary.getSprite("but_pause");
		l = n - y.width - 3;
		e = k;
		r = new CGfxButton(l, e, y, s_oStage);
		r.addEventListener(ON_MOUSE_UP, this._onPause, this);
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (y = s_oSpriteLibrary.getSprite("audio_icon"), g = l - y.width /
			2 - 3, c = k, f = new CToggle(g, c, y, s_bAudioActive, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), y = s_oSpriteLibrary.getSprite("but_fullscreen"), h = g - y.width / 2 - 3) : (y = s_oSpriteLibrary.getSprite("but_fullscreen"), h = l - y.width / 2 - 3);
		m = k;
		y = window.document;
		z = y.documentElement;
		Q = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullScreen || z.msRequestFullscreen;
		D = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (Q = !1);
		Q && screenfull.isEnabled &&
			(y = s_oSpriteLibrary.getSprite("but_fullscreen"), G = new CToggle(h, m, y, s_bFullscreen, s_oStage), G.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		y = s_oSpriteLibrary.getSprite("but_settings");
		F = new CGUIExpandible(n, k, y, s_oStage);
		F.addButton(d);
		F.addButton(r);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || F.addButton(f);
		Q && screenfull.isEnabled && F.addButton(G);
		s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshButtonPos = function(y, O) {
		F.refreshPos(y, O);
		var z = w.getStartPosition();
		w.setPosition(z.x + y, z.y + O);
		z = x.getStartPosition();
		x.setPosition(z.x + y, z.y + O);
		z = B.getStartPosition();
		B.setPosition(z.x + y, z.y + O);
		t.setY(b - s_iOffsetY);
		s_oGame.refreshPositionSidesWalls(y);
		s_oGame.refreshLimitCrabsX(y)
	};
	this.createInteractiveHelp = function() {
		C = new CHelp(s_oStage)
	};
	this.unload = function() {
		d.unload();
		d = null;
		C && C.unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), f = null;
		Q && screenfull.isEnabled && G.unload();
		s_oInterface = null
	};
	this.createLosePanel = function(y, O) {
		p = new CLosePanel(s_oSpriteLibrary.getSprite("msg_box"));
		p.show(y, O)
	};
	this.createWinPanel = function(y, O, z, K) {
		u = new CWinPanel(s_oSpriteLibrary.getSprite("msg_box"), K);
		u.show(y, O, z)
	};
	this.blockAllButton = function(y) {
		d.block(y);
		r.block(y)
	};
	this.getScoreBoardResult = function() {
		return w.getResult()
	};
	this.unloadHelp = function() {
		C && (C.unload(), C = null)
	};
	this.createPauseInterface = function() {
		I = new CPause
	};
	this.unloadPause = function() {
		I.unload();
		I = null
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.refreshScore = function(y) {
		w.refresh(TEXT_SCORE +
			": " + y)
	};
	this.refreshLives = function(y, O) {
		x.refresh("x " + y, O)
	};
	this.refreshTarget = function(y, O) {
		B.refresh(y + "/" + O)
	};
	this.refreshLevel = function(y) {
		t.refreshText(sprintf(TEXT_LEVEL, y));
		t.setY(b - s_iOffsetY)
	};
	this._onExit = function() {
		(new CAreYouSurePanel(s_oStage)).show()
	};
	this._onPause = function() {
		s_oGame.unpause(!1);
		this.createPauseInterface()
	};
	this.resetFullscreenBut = function() {
		Q && screenfull.isEnabled && G.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? D.call(window.document) :
			Q.call(window.document.documentElement);
		sizeHandler()
	};
	s_oInterface = this;
	this._init(a);
	return this
}
var s_oInterface = null;

function CLosePanel(a) {
	var l, e, n, k, h = null,
		m, b, g = !1;
	this._init = function(c) {
		b = new createjs.Shape;
		b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		b.alpha = 0;
		s_oStage.addChild(b);
		k = new createjs.Container;
		k.alpha = 1;
		k.visible = !1;
		k.y = CANVAS_HEIGHT;
		l = createBitmap(c);
		l.x = CANVAS_WIDTH_HALF;
		l.y = CANVAS_HEIGHT_HALF;
		l.regX = .5 * c.width;
		l.regY = .5 * c.height;
		k.addChild(l);
		var d = c.width - 80,
			r = 100,
			f = .5 * CANVAS_WIDTH,
			p = .5 * CANVAS_HEIGHT - 70;
		n = new CTLText(k, f - d / 2, p - r / 2, d, r, 80, "center", TEXT_COLOR, FONT_GAME,
			1, 2, 2, " ", !0, !0, !0, !1);
		d = c.width - 80;
		r = 40;
		f = .5 * CANVAS_WIDTH;
		p = .5 * CANVAS_HEIGHT + 10;
		e = new CTLText(k, f - d / 2, p - r / 2, d, r, 36, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, " ", !0, !0, !0, !1);
		s_oStage.addChild(k);
		c = s_oSpriteLibrary.getSprite("but_home");
		h = new CGfxButton(.5 * CANVAS_WIDTH - 210, .5 * CANVAS_HEIGHT + 100, c, k);
		h.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
		c = s_oSpriteLibrary.getSprite("but_restart");
		m = new CGfxButton(.5 * CANVAS_WIDTH + 210, .5 * CANVAS_HEIGHT + 100, c, k);
		m.addEventListener(ON_MOUSE_DOWN, this._onRestart,
			this);
		m.pulseAnimation()
	};
	this.unload = function() {
		createjs.Tween.get(k).to({
			alpha: 0
		}, 500, createjs.Ease.cubicOut).call(function() {
			s_oStage.removeChild(k);
			null !== h && (h.unload(), h = null);
			b.removeAllEventListeners();
			m.unload();
			m = null
		})
	};
	this.show = function(c, d) {
		e.refreshText(sprintf(TEXT_LOSE_RESULT, c, d));
		n.refreshText(TEXT_LOST);
		k.visible = !0;
		createjs.Tween.get(b).to({
			alpha: .5
		}, 500, createjs.Ease.cubicOut);
		b.on("click", function() {});
		createjs.Tween.get(k).wait(250).to({
			y: 0
		}, 1250, createjs.Ease.elasticOut).call(function() {
			s_iAdsLevel ===
				NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_iAdsLevel = 1) : s_iAdsLevel++
		})
	};
	this._onRestart = function() {
		g || (g = !0, this.unload(), createjs.Tween.get(b).to({
			alpha: 0
		}, 400, createjs.Ease.cubicOut).call(function() {
			s_oStage.removeChild(b)
		}), s_oGame.restartLevel())
	};
	this._onExit = function() {
		g || (g = !0, this.unload(), s_oGame.onExit())
	};
	this._init(a);
	return this
}

function CWinPanel(a, l) {
	var e, n, k, h, m, b, g, c;
	this._init = function(d, r) {
		c = new createjs.Shape;
		c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.alpha = 0;
		s_oStage.addChild(c);
		m = new createjs.Container;
		m.alpha = 1;
		m.visible = !1;
		m.y = CANVAS_HEIGHT;
		e = createBitmap(d);
		e.x = CANVAS_WIDTH_HALF;
		e.y = CANVAS_HEIGHT_HALF;
		e.regX = .5 * d.width;
		e.regY = .5 * d.height;
		m.addChild(e);
		var f = d.width - 80,
			p = 100,
			u = .5 * CANVAS_WIDTH,
			w = .5 * CANVAS_HEIGHT - 70;
		k = new CTLText(m, u - f / 2, w - p / 2, f, p, 80, "center", TEXT_COLOR, FONT_GAME, 1,
			2, 2, " ", !0, !0, !0, !1);
		f = d.width - 80;
		p = 40;
		u = .5 * CANVAS_WIDTH;
		w = .5 * CANVAS_HEIGHT + 10;
		n = new CTLText(m, u - f / 2, w - p / 2, f, p, 36, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, " ", !0, !0, !0, !1);
		f = d.width - 260;
		p = 40;
		u = .5 * CANVAS_WIDTH;
		w = .5 * CANVAS_HEIGHT + 80;
		h = new CTLText(m, u - f / 2, w - p / 2, f, p, 36, "center", TEXT_COLOR_1, FONT_GAME, 1, 2, 2, " ", !0, !0, !0, !1);
		f = s_oSpriteLibrary.getSprite("but_continue");
		g = new CGfxButton(.5 * CANVAS_WIDTH + 210, .5 * CANVAS_HEIGHT + 100, f, m);
		g.pulseAnimation();
		!1 === r ? (f = s_oSpriteLibrary.getSprite("but_home"), b = new CGfxButton(.5 *
			CANVAS_WIDTH - 210, .5 * CANVAS_HEIGHT + 100, f, m), b.addEventListener(ON_MOUSE_DOWN, this._onExit, this), g.addEventListener(ON_MOUSE_DOWN, this._onContinue, this)) : g.addEventListener(ON_MOUSE_DOWN, this._onEnd, this);
		s_oStage.addChild(m)
	};
	this.unload = function() {
		s_oStage.removeChild(m);
		b && (b.unload(), b = null);
		g && (g.unload(), g = null)
	};
	this.show = function(d, r, f) {
		k.refreshText(TEXT_WIN);
		n.refreshText(sprintf(TEXT_WIN_RESULT, d, r));
		h.refreshText(sprintf(TEXT_TOTAL_SCORE, f));
		m.visible = !0;
		c.on("click", function() {});
		createjs.Tween.get(c).to({
				alpha: .5
			},
			500, createjs.Ease.cubicOut);
		createjs.Tween.get(m).wait(250).to({
			y: 0
		}, 1250, createjs.Ease.bounceOut).call(function() {
			s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_iAdsLevel = 1) : s_iAdsLevel++
		});
		$(s_oMain).trigger("save_score", f);
		$(s_oMain).trigger("share_event", f)
	};
	this._onContinue = function() {
		var d = this;
		createjs.Tween.get(m).to({
			y: CANVAS_HEIGHT
		}, 750, createjs.Ease.quartIn).call(function() {
			d.unload()
		});
		createjs.Tween.get(c).to({
			alpha: 0
		}, 400, createjs.Ease.cubicOut).call(function() {
			s_oStage.removeChild(c);
			c.removeAllEventListeners()
		});
		s_oGame.onContinue()
	};
	this._onEnd = function() {
		this.unload();
		s_oGame._onEnd()
	};
	this._onExit = function() {
		this.unload();
		c.removeAllEventListeners();
		s_oGame.onExit()
	};
	this._init(a, l);
	return this
}

function CPhysicsController() {
	var a = Box2D.Common.Math.b2Vec2,
		l = Box2D.Dynamics.b2World,
		e = Box2D.Dynamics.b2DebugDraw,
		n, k, h = this,
		m = document.getElementById("canvas").getContext("2d");
	this.init = function() {
		n = new a(0, 9.81);
		k = new l(n, !0);
		k.Step(TIME_STEP_BOX2D, ITINERATION_BOX2D, POSITION_ITINERATION_BOX2D);
		var b = new e;
		b.SetSprite(m);
		b.SetDrawScale(30);
		b.SetFillAlpha(.5);
		b.SetLineThickness(1);
		b.SetFlags(e.e_shapeBit | e.e_jointBit);
		k.SetDebugDraw(b)
	};
	this.startComputing = function(b) {
		b.GetBody().SetActive(!0)
	};
	this.applyImpulse = function(b, g) {
		b.GetBody().ApplyImpulse(g, b.GetBody().GetWorldCenter())
	};
	this.applyForce = function(b, g) {
		b.GetBody().ApplyForce(g, b.GetBody().GetWorldCenter())
	};
	this.decreaseSpeedRotation = function(b) {
		var g = .99 * b.GetBody().GetAngularVelocity();
		b.GetBody().SetAngularVelocity(g)
	};
	this.activeBody = function(b, g) {
		b.GetBody().SetActive(g);
		b.GetBody().SetAwake(g)
	};
	this.destroyAllBody = function() {
		for (var b = k.GetBodyList(); b.GetNext();) {
			var g = b.GetNext();
			k.DestroyBody(g)
		}
	};
	this.destroyAllJoint =
		function() {
			for (var b = k.GetJointList(); b.GetNext();) {
				var g = b.GetNext();
				k.DestroyJoint(g)
			}
		};
	this.destroyWorld = function() {
		k = null
	};
	this.getSpeedRotation = function(b) {
		return b.GetBody().GetAngularVelocity()
	};
	this.moveObject = function(b, g, c) {
		g = {
			x: g / WORLD_SCALE,
			y: c / WORLD_SCALE
		};
		b.GetBody().SetPosition(g)
	};
	this.moveObjectX = function(b, g) {
		var c = {
			x: g / WORLD_SCALE,
			y: b.GetBody.GetPosition().y
		};
		b.GetBody().SetPosition(c)
	};
	this.destroyBody = function(b) {
		k.DestroyBody(b.GetBody())
	};
	this.destroyJoint = function(b) {
		k.DestroyJoint(b)
	};
	this.getJointAngle = function(b) {
		return b.GetJointAngle() * (180 / Math.PI)
	};
	this.getInstance = function() {
		null === h && (h = new CPhysicsController);
		return h
	};
	this.getJointTranslation = function(b) {
		return b.GetJointTranslation()
	};
	this.update = function() {
		k.Step(.05, 3, 3);
		k.ClearForces()
	};
	this.upadteDrawDebug = function() {
		k.DrawDebugData()
	};
	this.getWorld = function() {
		return k
	};
	this.setElementLinearDamping = function(b, g) {
		b.GetBody().SetLinearDamping(g)
	};
	this.setElementAngularVelocity = function(b, g) {
		b.GetBody().SetAngularVelocity(g)
	};
	this.setElementPosition = function(b, g) {
		var c = {
			x: g.x / WORLD_SCALE,
			y: g.y / WORLD_SCALE
		};
		b.GetBody().SetPosition(c)
	};
	this.getElementPosition = function(b) {
		var g = b.GetBody().GetPosition();
		return {
			x: g.x * WORLD_SCALE,
			y: g.y * WORLD_SCALE,
			angle: 180 * b.GetBody().GetAngle() / Math.PI
		}
	};
	this.setElementAngle = function(b, g) {
		b.GetBody().SetAngle(g * Math.PI / 180)
	};
	this.getElementAngle = function(b) {
		return 180 * b.GetBody().GetAngle() / Math.PI
	};
	this.getElementVelocity = function(b) {
		return b.GetBody().GetLinearVelocity()
	};
	this.setElementLinearVelocity =
		function(b, g) {
			return b.GetBody().SetLinearVelocity(g)
		};
	this.init()
}

function CPhysicsObject() {
	var a = Box2D.Common.Math.b2Vec2,
		l = Box2D.Dynamics.b2BodyDef,
		e = Box2D.Dynamics.b2Body,
		n = Box2D.Dynamics.b2FixtureDef,
		k = Box2D.Collision.Shapes.b2PolygonShape,
		h = Box2D.Collision.Shapes.b2CircleShape,
		m = Box2D.Dynamics.Joints.b2RevoluteJointDef,
		b = Box2D.Collision.b2WorldManifold,
		g, c;
	this.init = function() {
		c = s_oPhysicsController.getInstance();
		g = c.getWorld()
	};
	this.addWall = function(d, r, f, p, u, w, x, B) {
		var t = new n;
		t.density = w;
		t.friction = x;
		t.restitution = B;
		w = new l;
		w.type = e.b2_staticBody;
		t.shape =
			new k;
		t.shape.SetAsBox(d / WORLD_SCALE, r / WORLD_SCALE);
		w.position.Set(f / WORLD_SCALE, p / WORLD_SCALE);
		w.angle = u * Math.PI / 180;
		g.CreateBody(w).CreateFixture(t)
	};
	this.addLine = function(d, r, f, p, u, w, x, B, t) {
		var C = new n;
		C.density = w;
		C.friction = x;
		C.restitution = B;
		C.filter.categoryBits = FIELD_CATEGORY_COLLISION;
		C.filter.maskBits = -1;
		C.filter.groupIndex = 1;
		w = new l;
		w.type = e.b2_staticBody;
		w.position.Set(d / WORLD_SCALE, r / WORLD_SCALE);
		w.angle = u * Math.PI / 180;
		w.userData = {
			type: t
		};
		C.shape = new k;
		d = [];
		r = new a;
		r.Set(f.x / WORLD_SCALE,
			f.y / WORLD_SCALE);
		d.push(r);
		f = new a;
		f.Set(p.x / WORLD_SCALE, p.y / WORLD_SCALE);
		d.push(f);
		C.shape.SetAsBox(200, .3);
		C.shape.SetAsArray(d, d.length);
		return g.CreateBody(w).CreateFixture(C)
	};
	this.addPolygon = function(d) {
		var r = new n;
		r.density = d.density;
		r.friction = d.friction;
		r.restitution = d.restitution;
		r.isSensor = d.sensor;
		r.filter.categoryBits = 3;
		r.filter.maskBits = 1;
		r.filter.groupIndex = 1;
		var f = new l;
		f.type = e.b2_staticBody;
		f.position.Set(d.x / WORLD_SCALE, d.y / WORLD_SCALE);
		f.angle = d.angle * Math.PI / 180;
		f.userData = d.info;
		r.shape = new k;
		d = d.vertex;
		for (var p = [], u = 0; u < d.length; u++) {
			var w = new a;
			w.Set(d[u].x / WORLD_SCALE, d[u].y / WORLD_SCALE);
			p.push(w)
		}
		r.shape.SetAsArray(p, p.length);
		return g.CreateBody(f).CreateFixture(r)
	};
	this.addCollisionPolygon = function(d) {
		var r = new n;
		r.density = d.density;
		r.friction = d.friction;
		r.restitution = d.restitution;
		d.info.type === PLAYER ? (r.filter.categoryBits = FIELD_CATEGORY_COLLISION, r.filter.maskBits = BALL_CATEGORY_COLLISION, r.filter.groupIndex = 1) : d.info.type === OPPONENT && (r.filter.categoryBits = OPPONENT_CATEGORY_COLLISION,
			r.filter.maskBits = BALL_CATEGORY_COLLISION, r.filter.groupIndex = 1);
		var f = new l;
		f.type = e.b2_kinematicBody;
		f.position.Set(d.x / WORLD_SCALE, d.y / WORLD_SCALE);
		f.angle = d.angle * Math.PI / 180;
		f.userData = d.info;
		r.shape = new k;
		for (var p = d.vertex, u = [], w = 0; w < p.length; w++) {
			for (var x = [], B = 0; B < p[w].length; B++) {
				var t = new a;
				d.info.type === OPPONENT ? t.Set(p[w][B].x / WORLD_SCALE, (p[w][B].y + 11) / WORLD_SCALE) : t.Set(p[w][B].x / WORLD_SCALE, p[w][B].y / WORLD_SCALE);
				x.push(t)
			}
			r.shape.SetAsArray(x, x.length);
			u[w] = g.CreateBody(f).CreateFixture(r)
		}
		return u
	};
	this.addCollisionShape = function(d) {
		var r = new n;
		r.density = d.density;
		r.friction = d.friction;
		r.restitution = d.restitution;
		r.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
		r.filter.maskBits = BALL_CATEGORY_COLLISION;
		r.filter.groupIndex = 1;
		var f = new l;
		f.type = e.b2_dynamicBody;
		r.shape = new k;
		r.shape.SetAsBox(d.recWidth / WORLD_SCALE, d.recHeight / WORLD_SCALE);
		f.position.Set((d.x + d.rec_offset.x) / WORLD_SCALE, (d.y + d.rec_offset.y) / WORLD_SCALE);
		f.fixedRotation = !0;
		var p = g.CreateBody(f),
			u = p.CreateFixture(r);
		f = new l;
		var w =
			new n;
		w.density = d.density;
		w.friction = d.friction;
		w.restitution = d.restitution;
		w.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
		w.filter.maskBits = -1;
		w.filter.groupIndex = 1;
		f.type = e.b2_dynamicBody;
		w.shape = new h(d.radius / WORLD_SCALE);
		f.position.x = (d.x + d.sph_offset.x) / WORLD_SCALE;
		f.position.y = (d.y + d.sph_offset.y) / WORLD_SCALE;
		f.fixedRotation = !0;
		f.allowSleep = !1;
		f.bullet = !0;
		var x = g.CreateBody(f);
		w = x.CreateFixture(w);
		f = new l;
		f.type = e.b2_dynamicBody;
		r.shape = new k;
		r.shape.SetAsBox(d.rec_neck.width / WORLD_SCALE,
			d.rec_neck.height / WORLD_SCALE);
		f.position.Set((d.x + d.rec_neck.x) / WORLD_SCALE, (d.y + d.rec_neck.y) / WORLD_SCALE);
		f.angle = Math.PI / 180 * d.rec_neck.angle;
		f.fixedRotation = !0;
		d = g.CreateBody(f);
		r = d.CreateFixture(r);
		f = new m;
		f.Initialize(p, x, x.GetWorldCenter());
		x = g.CreateJoint(f);
		f = new m;
		f.Initialize(p, d, d.GetWorldCenter());
		p = g.CreateJoint(f);
		return {
			fixture1: u,
			fixture2: w,
			fixture3: r,
			jointA: x,
			jointB: p
		}
	};
	this.createAContactListener = function() {
		var d = new Box2D.Dynamics.b2ContactListener;
		d.BeginContact = function(r) {
			var f =
				r.GetFixtureA().GetBody().GetUserData(),
				p = r.GetFixtureB().GetBody().GetUserData();
			if (null !== f && null !== p)
				if (f.type === CRABS && p.type === BONUS_HEART) s_oGame.bonusHeart(), s_oGame.bonusDisapper(p.id), s_oGame.addScore(BONUS_SCORE[p.id]);
				else if (f.type === FLOOR && p.type === BONUS_HEART) s_oGame.bonusDisapper(p.id);
			else
				for (var u = 0; u < FISH.length; u++)
					if (f.type === CRABS && p.type === FISH[u]) {
						f = new a;
						u = new b;
						r.GetWorldManifold(u);
						f.Set(u.m_points[0].x, u.m_points[0].y);
						f = r.GetFixtureA().GetBody().GetLocalPoint(f);
						s_oGame.crabsTouchFish(r.GetFixtureB(),
							f, p.id);
						break
					} else if (f.type === FLOOR && p.type === FISH[u]) {
				s_oGame.fishOnFloor(p.id);
				break
			} else if (f.type === ANEMONE && p.type === FISH[u]) {
				s_oGame.fishInAnemone(p.id);
				break
			}
		};
		g.SetContactListener(d)
	};
	this.addPolygon = function(d) {
		var r = new n;
		r.density = d.density;
		r.friction = d.friction;
		r.restitution = d.restitution;
		r.isSensor = d.sensor;
		var f = new l;
		f.type = e.b2_staticBody;
		f.position.Set(d.x / WORLD_SCALE, d.y / WORLD_SCALE);
		f.angle = d.angle * Math.PI / 180;
		f.userData = d.info;
		r.shape = new k;
		d = d.vertex;
		for (var p = [], u = 0; u < d.length; u++) {
			var w =
				new a;
			w.Set(d[u].x / WORLD_SCALE, d[u].y / WORLD_SCALE);
			p.push(w)
		}
		r.shape.SetAsArray(p, p.length);
		return g.CreateBody(f).CreateFixture(r)
	};
	this.addCircle = function(d, r) {
		var f = new n;
		f.density = d.density;
		f.friction = d.friction;
		f.restitution = d.restitution;
		f.filter.categoryBits = d.catBits;
		f.filter.maskBits = d.maskBits;
		f.filter.groupIndex = d.groupId;
		var p = new l,
			u = {
				type: d.info.type,
				id: r
			};
		p.type = e.b2_dynamicBody;
		f.shape = new h(d.width / WORLD_SCALE);
		p.position.x = d.x / WORLD_SCALE;
		p.position.y = d.y / WORLD_SCALE;
		p.userData =
			u;
		p.linearDamping = d.linearDamping;
		p.angularDamping = d.angularDamping;
		p.bullet = !0;
		return g.CreateBody(p).CreateFixture(f)
	};
	this.addStaticCircle = function(d, r, f, p, u, w) {
		var x = new n;
		x.density = p;
		x.friction = u;
		x.restitution = w;
		p = new l;
		p.type = e.b2_staticBody;
		x.shape = new h(d / WORLD_SCALE);
		p.position.x = r / WORLD_SCALE;
		p.position.y = f / WORLD_SCALE;
		return g.CreateBody(p).CreateFixture(x)
	};
	this.addRectangle = function(d) {
		var r = new n;
		r.density = d.density;
		r.friction = d.friction;
		r.restitution = d.restitution;
		r.isSensor = d.sensor;
		r.filter.categoryBits = d.catBits;
		r.filter.maskBits = d.maskBits;
		r.filter.groupIndex = d.groupId;
		var f = new l;
		f.type = e.b2_staticBody;
		r.shape = new k;
		r.shape.SetAsBox(d.width / WORLD_SCALE, d.height / WORLD_SCALE);
		f.userData = d.info;
		f.position.Set(d.x / WORLD_SCALE, d.y / WORLD_SCALE);
		f.angle = d.angle * Math.PI / 180;
		return g.CreateBody(f).CreateFixture(r)
	};
	this.addObstacle = function(d, r, f, p) {
		var u = new n;
		u.density = p.density;
		u.friction = p.friction;
		u.restitution = p.restitution;
		u.isSensor = p.sensor;
		u.filter.categoryBits = p.catBits;
		u.filter.maskBits = p.maskBits;
		u.filter.groupIndex = p.groupId;
		var w = new l;
		w.type = e.b2_staticBody;
		u.shape = new k;
		u.shape.SetAsBox(p.width / WORLD_SCALE, p.height / WORLD_SCALE);
		w.userData = p.info;
		w.position.Set(d / WORLD_SCALE, r / WORLD_SCALE);
		w.angle = f * Math.PI / 180;
		return g.CreateBody(w).CreateFixture(u)
	};
	this.setRotation = function(d) {
		this.rotation = d
	};
	this._update = function(d) {};
	this.init()
}

function CAnemone(a, l, e, n) {
	var k, h, m = !1;
	this._init = function(b, g) {
		var c = s_oSpriteLibrary.getSprite("anemone_back"),
			d = s_oSpriteLibrary.getSprite("anemone_front");
		k = createBitmap(c);
		k.regX = .5 * c.width;
		k.regY = c.height;
		k.x = b;
		k.y = g + .5 * c.height;
		n.addChild(k);
		h = createBitmap(d);
		h.regX = .5 * d.width;
		h.regY = d.height;
		h.x = b - 1;
		h.y = g + 8 + .5 * d.height;
		n.addChild(h)
	};
	this.unload = function() {
		n.removeChild(k)
	};
	this.setVisible = function(b) {
		k.visible = b;
		h.visible = b
	};
	this.getX = function() {
		return k.x
	};
	this.getY = function() {
		return k.y
	};
	this.getPhysics = function() {
		return e
	};
	this.getChildIndexFront = function() {
		return n.getChildIndex(h)
	};
	this.childIndexFront = function(b) {
		n.setChildIndex(h, b)
	};
	this.animAnemone = function() {
		m && (createjs.Tween.removeTweens(k), createjs.Tween.removeTweens(h), m = !1);
		m = !0;
		createjs.Tween.get(k).to({
			scaleY: 1.1
		}, 800, createjs.Ease.elasticOut);
		createjs.Tween.get(h).to({
			scaleY: 1.1
		}, 800, createjs.Ease.elasticOut).call(function() {
			createjs.Tween.get(k).to({
				scaleY: 1
			}, 500, createjs.Ease.cubicOut);
			createjs.Tween.get(h).to({
					scaleY: 1
				},
				500, createjs.Ease.cubicOut);
			m = !1
		})
	};
	this._init(a, l);
	return this
}

function CCrabs(a, l, e, n, k) {
	var h, m = 0,
		b = 0;
	this._init = function(g, c, d) {
		var r = new createjs.SpriteSheet({
			images: [d],
			frames: {
				width: d.width / 2,
				height: d.height / 2,
				regX: d.width / 2 / 2 + CRABS_REG_OFFSET.x,
				regY: d.height / 2 / 2 + CRABS_REG_OFFSET.y
			}
		});
		h = createSprite(r, 0, d.width / 2 / 2 + CRABS_REG_OFFSET.x, d.height / 2 / 2 + CRABS_REG_OFFSET.y, d.width / 2, d.height / 2);
		h.x = g;
		h.y = c;
		h.stop();
		k.addChild(h)
	};
	this.unload = function() {
		k.removeChild(h)
	};
	this.setVisible = function(g) {
		h.visible = g
	};
	this.setPosition = function(g, c) {
		h.x = g;
		h.y = c;
		this.move()
	};
	this.moveAnimation = function(g) {
		4.5 < g ? this._goToNextFrame() : 1.5 < g ? (b++, 3 < b && (this._goToNextFrame(), b = 0)) : 2 < g ? (b++, 3 < b && (this._goToNextFrame(), b = 0)) : 1 < g && (b++, 4 < b && (this._goToNextFrame(), b = 0))
	};
	this._goToNextFrame = function() {
		4 === m ? m = 0 : m++;
		h.gotoAndStop(m)
	};
	this.setAngle = function(g) {
		h.rotation = g
	};
	this.getX = function() {
		return h.x
	};
	this.getY = function() {
		return h.y
	};
	this.scale = function(g) {
		h.scaleX = g;
		h.scaleY = g
	};
	this.getScale = function() {
		return h.scaleX
	};
	this.getPhysics = function() {
		return n
	};
	this.childIndex =
		function(g) {
			k.setChildIndex(h, g)
		};
	this.getChildIndex = function() {
		return k.getChildIndex(h)
	};
	this.move = function() {
		s_oPhysicsController.moveObject(n, h.x, h.y)
	};
	this._init(a, l, e);
	return this
}

function CFish(a, l, e, n, k, h, m) {
	var b, g, c, d = null,
		r, f, p, u = !0,
		w = !1;
	this._init = function(x, B, t, C, I) {
		r = new createjs.Container;
		r.x = x;
		r.y = B;
		c = createBitmap(t);
		c.x = 0;
		c.y = 0;
		c.regX = .5 * t.width;
		c.regY = .5 * t.height;
		r.addChild(c);
		f = C;
		p = I;
		b = x;
		g = B;
		s_oPhysicsController.activeBody(h, !1);
		TEST && (x = new createjs.Text(I, "36px " + FONT_GAME, "#000"), x.x = 0, x.y = 0, x.textAlign = "center", x.textBaseline = "middle", r.addChild(x));
		m.addChild(r)
	};
	this.unload = function() {
		m.removeChild(r)
	};
	this.setVisible = function(x) {
		r.visible = x
	};
	this.setPosition =
		function(x, B) {
			r.x = x;
			r.y = B;
			s_oPhysicsController.setElementPosition(h, {
				x: x,
				y: B
			})
		};
	this.resetPos = function() {
		this.setPosition(b, g)
	};
	this.setAngle = function(x) {
		c.rotation = x
	};
	this.getID = function() {
		return p
	};
	this.getType = function() {
		return f
	};
	this.isCached = function() {
		return u
	};
	this.setCache = function(x) {
		u = x;
		this.activeBody(!x);
		r.visible = !x;
		this.setAngle(0)
	};
	this.getTouchCrabs = function() {
		return w
	};
	this.setTouchCrabs = function(x) {
		w = x
	};
	this.activeBody = function(x) {
		s_oPhysicsController.activeBody(h, x)
	};
	this.getX =
		function() {
			return r.x
		};
	this.getY = function() {
		return r.y
	};
	this.scale = function(x) {
		c.scaleX = x;
		c.scaleY = x
	};
	this.getScale = function() {
		return c.scaleX
	};
	this.getPhysics = function() {
		return h
	};
	this.setChildIndex = function(x) {
		m.setChildIndex(r, x)
	};
	this.move = function() {
		var x = s_oPhysicsController.getElementPosition(h);
		r.x = x.x;
		r.y = x.y;
		c.rotation = s_oPhysicsController.getElementAngle(h)
	};
	this.spriteFollowPhysics = function(x) {
		u = !x
	};
	this.setAlpha = function(x) {
		c.alpha = x
	};
	this.isAnim = function() {
		return d
	};
	this.animInAnemone =
		function() {
			null === d && (d = createjs.Tween.get(r).to({
				x: FISH_IN_ANEMONE_ANIM_POS.x,
				y: FISH_IN_ANEMONE_ANIM_POS.y
			}, 400, createjs.Ease.cubicOut).call(function() {
				s_oGame.cachedFish(p);
				w = !1;
				d = null
			}))
		};
	this.animOnFloor = function() {
		null === d && (d = createjs.Tween.get(c).to({
			alpha: 0
		}, 500, createjs.Ease.cubicIn).call(function() {
			s_oGame.cachedFish(p);
			w = !1;
			d = null
		}))
	};
	this.update = function() {
		this.move()
	};
	this._init(a, l, e, n, k);
	return this
}

function CScoreBoard(a, l, e, n, k, h) {
	var m, b, g, c;
	this._init = function(d, r, f, p, u, w) {
		m = {
			x: r,
			y: f
		};
		b = new createjs.Container;
		b.x = m.x;
		b.y = m.y;
		g = createBitmap(d);
		g.x = 0;
		g.y = 0;
		g.regX = .5 * d.width;
		g.regY = .5 * d.height;
		b.addChild(g);
		d = d.height;
		c = new CTLText(b, w - p / 2, 2 - d / 2, p, d, 28, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, u, !0, !0, !1, !1);
		s_oStage.addChild(b)
	};
	this.getStartPosition = function() {
		return m
	};
	this.setPosition = function(d, r) {
		b.x = d;
		b.y = r
	};
	this.unload = function() {
		s_oStage.removeChild(b)
	};
	this.refresh = function(d) {
		c.refreshText(d)
	};
	this._init(a, l, e, n, k, h);
	return this
}

function CConfirmPanel(a) {
	var l = this,
		e = [],
		n = [],
		k = [],
		h, m, b = CANVAS_WIDTH / 2,
		g = CANVAS_HEIGHT / 2 + 50,
		c, d, r;
	this._init = function() {
		var f = s_oSpriteLibrary.getSprite("msg_box");
		m = new createjs.Container;
		m.x = b;
		m.y = CANVAS_HEIGHT + .5 * f.width;
		c = new createjs.Shape;
		c.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.alpha = 0;
		c.on("mousedown", this._onClick);
		s_oStage.addChild(c);
		h = createBitmap(f);
		h.regX = f.width / 2;
		h.regY = f.height / 2;
		m.addChild(h);
		f = f.width - 80;
		new CTLText(m, -(f / 2), -125, f, 100, 35, "center",
			TEXT_COLOR, FONT_GAME, 1, 2, 2, a, !0, !0, !0, !1);
		d = new CGfxButton(-180, 70, s_oSpriteLibrary.getSprite("but_no"), m);
		d.pulseAnimation();
		r = new CGfxButton(180, 70, s_oSpriteLibrary.getSprite("but_yes"), m);
		s_oStage.addChild(m);
		this.show()
	};
	this._initListener = function() {
		d.addEventListener(ON_MOUSE_DOWN, this.buttonNoDown, this);
		r.addEventListener(ON_MOUSE_DOWN, this.buttonYesDown, this)
	};
	this.addEventListener = function(f, p, u) {
		e[f] = p;
		n[f] = u
	};
	this.buttonNoDown = function() {
		e[ON_BUT_NO_DOWN] && e[ON_BUT_NO_DOWN].call(n[ON_BUT_NO_DOWN],
			k)
	};
	this.buttonYesDown = function() {
		e[ON_BUT_YES_DOWN] && e[ON_BUT_YES_DOWN].call(n[ON_BUT_YES_DOWN], k)
	};
	this._onClick = function() {};
	this.show = function() {
		createjs.Tween.get(c).to({
			alpha: .9
		}, 500, createjs.Ease.quadOut);
		createjs.Tween.get(m).to({
			y: g
		}, 500, createjs.Ease.quadOut).call(function() {
			l._initListener()
		})
	};
	this.unload = function() {
		createjs.Tween.get(m).to({
			y: 1.5 * CANVAS_HEIGHT
		}, 500).call(function() {
			s_oStage.removeChild(m)
		});
		createjs.Tween.get(c).to({
			alpha: 0
		}, 500, createjs.Ease.quadIn).call(function() {
			s_oStage.removeChild(c)
		})
	};
	this._init();
	s_oVariousHelp = this;
	return this
}
var s_oVariousHelp = null;

function CLifeBoard(a, l, e) {
	var n, k, h, m, b;
	this._init = function(g, c, d) {
		n = {
			x: c,
			y: d
		};
		k = new createjs.Container;
		k.x = n.x;
		k.y = n.y;
		m = createBitmap(g);
		m.x = 0;
		m.y = 0;
		m.regX = .5 * g.width;
		m.regY = .5 * g.height;
		k.addChild(m);
		c = g.width / 2 + 5;
		g = g.height;
		b = new CTLText(k, 20 - c / 2, 1 - g / 2, c, g, 28, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, "x0", !0, !0, !0, !1);
		g = s_oSpriteLibrary.getSprite("heart");
		h = createBitmap(g);
		h.x = -g.width + 10;
		h.y = 0;
		h.regX = .5 * g.width;
		h.regY = .5 * g.height;
		k.addChild(h);
		s_oStage.addChild(k)
	};
	this.getStartPosition = function() {
		return n
	};
	this.setPosition = function(g, c) {
		k.x = g;
		k.y = c
	};
	this.unload = function() {
		s_oStage.removeChild(k)
	};
	this.heartAnimation = function() {
		createjs.Tween.get(h).to({
			scaleX: .8,
			scaleY: .8
		}, 250, createjs.Ease.cubicOut).call(function() {
			createjs.Tween.get(h).to({
				scaleX: 1,
				scaleY: 1
			}, 250, createjs.Ease.cubicOut)
		})
	};
	this.refresh = function(g, c) {
		b.refreshText(g);
		c && this.heartAnimation()
	};
	this._init(a, l, e);
	return this
}

function CCreditsPanel() {
	var a, l, e, n, k, h;
	this._init = function() {
		h = new createjs.Container;
		s_oStage.addChild(h);
		var m = s_oSpriteLibrary.getSprite("msg_box");
		k = new createjs.Shape;
		k.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		k.alpha = .5;
		k.on("click", this._onLogoButRelease);
		k.cursor = "pointer";
		h.addChild(k);
		l = createBitmap(m);
		l.x = CANVAS_WIDTH_HALF;
		l.y = CANVAS_HEIGHT_HALF;
		l.regX = .5 * m.width;
		l.regY = .5 * m.height;
		h.addChild(l);
		var b = s_oSpriteLibrary.getSprite("but_exit");
		a = .5 * CANVAS_WIDTH +
			230;
		n = new CGfxButton(a, 410, b, h);
		n.addEventListener(ON_MOUSE_UP, this.unload, this);
		b = m.width - 200;
		var g = 40,
			c = CANVAS_WIDTH / 2;
		new CTLText(h, c - b / 2, 450 - g / 2, b, g, 32, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, TEXT_CREDITS_DEVELOPED, !0, !0, !1, !1);
		b = s_oSpriteLibrary.getSprite("logo_ctl");
		e = createBitmap(b);
		e.regX = b.width / 2;
		e.regY = b.height / 2;
		e.x = CANVAS_WIDTH / 2;
		e.y = 520;
		h.addChild(e);
		b = m.width - 200;
		g = 50;
		c = CANVAS_WIDTH / 2;
		new CTLText(h, c - b / 2, 600 - g / 2, b, g, 42, "center", TEXT_COLOR_1, FONT_GAME, 1, 2, 2, "www.atterolabs.com", !0, !0, !1,
			!1)
	};
	this.unload = function() {
		k.removeAllEventListeners();
		n.unload();
		n = null;
		s_oStage.removeChild(h)
	};
	this._onLogoButRelease = function() {
		window.open("https://www.atterolabs.com", "_blank")
	};
	this._init()
}

function CPause() {
	var a, l;
	this._init = function() {
		var e = new createjs.Container;
		e.alpha = 0;
		a = new createjs.Shape;
		a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		a.alpha = .5;
		var n = new createjs.Shape;
		n.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		a.hitArea = n;
		a.on("click", function() {});
		e.addChild(a);
		n = s_oSpriteLibrary.getSprite("msg_box");
		var k = createBitmap(n);
		k.x = CANVAS_WIDTH_HALF;
		k.y = CANVAS_HEIGHT_HALF;
		k.regX = .5 * n.width;
		k.regY = .5 * n.height;
		e.addChild(k);
		n =
			n.width - 80;
		new CTLText(e, .5 * CANVAS_WIDTH - n / 2, .5 * CANVAS_HEIGHT - 70 - 50, n, 100, 80, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, TEXT_PAUSE, !0, !0, !0, !1);
		n = s_oSpriteLibrary.getSprite("but_continue_big");
		l = new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 70, n, e);
		l.addEventListenerWithParams(ON_MOUSE_UP, this._onLeavePause, this, e);
		l.setScale(.6);
		l.pulseAnimation();
		s_oStage.addChild(e);
		createjs.Tween.get(e).to({
			alpha: 1
		}, 300, createjs.quartOut)
	};
	this.unload = function() {
		a.removeAllEventListeners();
		l.unload();
		l = null;
		s_oStage.removeChild(void 0)
	};
	this._onLeavePause = function(e) {
		createjs.Tween.get(e).to({
			alpha: 0
		}, 300, createjs.quartIn).call(function() {
			s_oInterface.unloadPause();
			s_oGame.unpause(!0)
		})
	};
	this._init();
	return this
}

function CAreYouSurePanel(a) {
	var l, e, n, k, h;
	this._init = function() {
		k = new createjs.Container;
		k.alpha = 0;
		m.addChild(k);
		h = new createjs.Shape;
		h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.alpha = .5;
		h.on("click", function() {});
		k.addChild(h);
		var b = s_oSpriteLibrary.getSprite("msg_box");
		l = createBitmap(b);
		l.x = CANVAS_WIDTH_HALF;
		l.y = CANVAS_HEIGHT_HALF + 50;
		l.regX = .5 * b.width;
		l.regY = .5 * b.height;
		k.addChild(l);
		b = b.width - 100;
		new CTLText(k, CANVAS_WIDTH / 2 - b / 2, CANVAS_HEIGHT_HALF - 40 - 35, b, 70, 60, "center",
			TEXT_COLOR, FONT_GAME, 1, 2, 2, TEXT_ARE_SURE, !0, !0, !1, !1);
		e = new CGfxButton(CANVAS_WIDTH / 2 + 180, .5 * CANVAS_HEIGHT + 120, s_oSpriteLibrary.getSprite("but_yes"), k);
		e.addEventListener(ON_MOUSE_UP, this._onButYes, this);
		n = new CGfxButton(CANVAS_WIDTH / 2 - 180, .5 * CANVAS_HEIGHT + 120, s_oSpriteLibrary.getSprite("but_no"), k);
		n.addEventListener(ON_MOUSE_UP, this._onButNo, this)
	};
	this.show = function() {
		s_oGame.unpause(!1);
		createjs.Tween.get(k).to({
			alpha: 1
		}, 150, createjs.quartOut).call(function() {})
	};
	this.unload = function() {
		createjs.Tween.get(k).to({
				alpha: 0
			},
			150, createjs.quartOut).call(function() {
			m.removeChild(k, h)
		})
	};
	this._onButYes = function() {
		this.unload();
		s_oGame.onExit();
		h.removeAllEventListeners()
	};
	this._onButNo = function() {
		s_oGame.unpause(!0);
		this.unload();
		h.removeAllEventListeners()
	};
	var m = a;
	this._init()
}
var NUM_ROWS_PAGE_LEVEL = 4,
	NUM_COLS_PAGE_LEVEL = 5;

function CLevelMenu(a) {
	var l, e, n, k, h, m, b, g, c, d, r, f, p, u, w, x, B, t, C, I = null,
		G = null,
		F, Q, D, y = null,
		O = null;
	this._init = function() {
		p = 0;
		F = new createjs.Container;
		s_oStage.addChild(F);
		var z = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		F.addChild(z);
		r = CANVAS_WIDTH / 2;
		f = CANVAS_HEIGHT_HALF - 240;
		z = 500;
		new CTLText(F, r - z / 2, f - 35, z, 70, 60, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, TEXT_SELECT_A_LEVEL, !0, !0, !0, !1);
		z = s_oSpriteLibrary.getSprite("but_exit");
		c = CANVAS_WIDTH - z.height / 2 - 10;
		d = z.height / 2 + 10;
		t = new CGfxButton(c, d, z,
			s_oStage);
		t.addEventListener(ON_MOUSE_UP, this._onExit, this);
		u = z.height;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = t.getX() - z.width - 10, g = z.height / 2 + 10, C = new CToggle(b, g, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), C.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		z = window.document;
		var K = z.documentElement;
		y = K.requestFullscreen || K.mozRequestFullScreen || K.webkitRequestFullScreen || K.msRequestFullscreen;
		O = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (y = !1);
		y && screenfull.isEnabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), l = z.width / 4 + 10, e = z.height / 2 + 10, D = new CToggle(l, e, z, s_bFullscreen, s_oStage), D.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		this._checkBoundLimits();
		x = [];
		z = CANVAS_WIDTH + EDGEBOARD_X;
		z = Math.floor(z / NUM_COLS_PAGE_LEVEL) / 2;
		K = .5 * -EDGEBOARD_X;
		for (var L = 0; L < NUM_COLS_PAGE_LEVEL; L++) x.push(K), K += z;
		B = [];
		this._createNewLevelPage(0, a);
		if (1 < B.length) {
			for (z = 1; z < B.length; z++) B[z].visible = !1;
			h = CANVAS_WIDTH -
				80;
			m = CANVAS_HEIGHT - 80;
			I = new CGfxButton(h, m, s_oSpriteLibrary.getSprite("arrow_right"), s_oStage);
			I.addEventListener(ON_MOUSE_UP, this._onRight, this);
			n = 80;
			k = CANVAS_HEIGHT - 80;
			G = new CGfxButton(n, k, s_oSpriteLibrary.getSprite("arrow_left"), s_oStage);
			G.addEventListener(ON_MOUSE_UP, this._onLeft, this)
		}
		Q = new createjs.Shape;
		Q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(Q);
		createjs.Tween.get(Q).to({
			alpha: 0
		}, 1E3).call(function() {
			s_oStage.removeChild(Q);
			Q = null
		});
		this.refreshButtonPos(s_iOffsetX,
			s_iOffsetY)
	};
	this.unload = function() {
		for (var z = 0; z < w.length; z++) w[z].unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) C.unload(), C = null;
		y && screenfull.isEnabled && D.unload();
		t.unload();
		t = null;
		null !== G && (G.unload(), I.unload());
		s_oLevelMenu = null;
		s_oStage.removeAllChildren()
	};
	this.refreshButtonPos = function(z, K) {
		t.setPosition(c - z, d + K);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || C.setPosition(b - z, K + g);
		null !== G && (I.setPosition(h - z, m - K), G.setPosition(n + z, k - K));
		y && screenfull.isEnabled && D.setPosition(l + s_iOffsetX,
			e + s_iOffsetY)
	};
	this._checkBoundLimits = function() {
		for (var z = s_oSpriteLibrary.getSprite("but_level"), K = 0, L = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * u, U = 0; K < L;) K += z.height + 20, U++;
		NUM_ROWS_PAGE_LEVEL > U && (NUM_ROWS_PAGE_LEVEL = U);
		L = K = 0;
		U = CANVAS_WIDTH - 2 * EDGEBOARD_X;
		for (z = s_oSpriteLibrary.getSprite("but_level"); L < U;) L += z.width / 2 + 5, K++;
		NUM_COLS_PAGE_LEVEL > K && (NUM_COLS_PAGE_LEVEL = K)
	};
	this._createNewLevelPage = function(z, K) {
		var L = new createjs.Container;
		F.addChild(L);
		B.push(L);
		w = [];
		for (var U = 0, Z = -190, W = 1, V = !1, v = s_oSpriteLibrary.getSprite("but_level"),
				q = z; q < K; q++) {
			var H = new CLevelBut(x[U] + v.width / 2, Z + v.height / 2, q + 1 > s_iLastLevel ? " " : q + 1, v, q + 1 > s_iLastLevel ? !1 : !0, L);
			H.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, q);
			w.push(H);
			U++;
			if (U === x.length && (U = 0, Z += v.height + 20, W++, W > NUM_ROWS_PAGE_LEVEL && q < K - 1)) {
				V = !0;
				break
			}
		}
		L.x = CANVAS_WIDTH / 2;
		L.y = 520;
		L.regX = L.getBounds().width / 2;
		V && this._createNewLevelPage(q + 1, K)
	};
	this._onRight = function() {
		B[p].visible = !1;
		p++;
		p >= B.length && (p = 0);
		B[p].visible = !0
	};
	this._onLeft = function() {
		B[p].visible = !1;
		p--;
		0 > p && (p = B.length - 1);
		B[p].visible = !0
	};
	this._onButLevelRelease = function(z) {
		playSound("click", 1, !1);
		this.unload();
		s_oMain.gotoGame(z)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function() {
		y && screenfull.isEnabled && D.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? O.call(window.document) : y.call(window.document.documentElement);
		sizeHandler()
	};
	this._onExit = function() {
		this.unload();
		s_oMain.gotoMenu()
	};
	s_oLevelMenu =
		this;
	this._init()
}
var s_oLevelMenu = null;

function CLevelBut(a, l, e, n, k, h) {
	var m, b, g, c = [],
		d = [],
		r, f, p;
	this._init = function(w, x, B, t, C) {
		b = [];
		g = [];
		p = new createjs.Container;
		u.addChild(p);
		var I = new createjs.SpriteSheet({
			images: [t],
			frames: {
				width: t.width / 2,
				height: t.height,
				regX: t.width / 2 / 2,
				regY: t.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		m = C;
		f = createSprite(I, "state_" + m, t.width / 2 / 2, t.height / 2, t.width / 2, t.height);
		f.mouseEnabled = C;
		f.x = w;
		f.y = x;
		f.stop();
		!s_bMobile && C && (p.cursor = "pointer");
		p.addChild(f);
		c.push(f);
		I = t.width / 2 - 20;
		t = t.height;
		r =
			new CTLText(p, w - I / 2, x + 10 - t / 2, I, t, 50, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, B, !0, !0, !1, !1);
		C || r.setColor("#888888");
		this._initListener()
	};
	this.unload = function() {
		p.removeAllEventListeners();
		p.removeChild(f)
	};
	this._initListener = function() {
		p.on("mousedown", this.buttonDown);
		p.on("pressup", this.buttonRelease)
	};
	this.viewBut = function(w) {
		p.addChild(w)
	};
	this.addEventListener = function(w, x, B) {
		b[w] = x;
		g[w] = B
	};
	this.addEventListenerWithParams = function(w, x, B, t) {
		b[w] = x;
		g[w] = B;
		d = t
	};
	this.ifClickable = function() {
		return !0 ===
			p.mouseEnabled ? 1 : 0
	};
	this.setActive = function(w, x) {
		m = x;
		c[w].gotoAndStop("state_" + m);
		c[w].mouseEnabled = !0;
		m ? r.setColor("#69b8d5") : r.setColor("#b4b4b4")
	};
	this.buttonRelease = function() {
		m && b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(g[ON_MOUSE_UP], d)
	};
	this.buttonDown = function() {
		b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], d)
	};
	this.setPosition = function(w, x) {
		p.x = w;
		p.y = x
	};
	this.setVisible = function(w) {
		p.visible = w
	};
	var u = h;
	this._init(a, l, e, n, k, h)
}

function CObstacle(a, l, e, n, k, h, m, b) {
	var g, c, d, r, f;
	this._init = function(p, u, w, x, B, t) {
		d = createBitmap(w);
		d.x = p;
		d.y = u;
		d.regX = .5 * w.width;
		d.regY = .5 * w.height;
		this.setAngle(t);
		r = x;
		f = B;
		g = p;
		c = u;
		b.addChild(d)
	};
	this.unload = function() {
		b.removeChild(d)
	};
	this.setVisible = function(p) {
		d.visible = p
	};
	this.setPosition = function(p, u) {
		d.x = p;
		d.y = u;
		s_oPhysicsController.setElementPosition(m, {
			x: p,
			y: u
		})
	};
	this.resetPos = function() {
		this.setPosition(g, c)
	};
	this.setAngle = function(p) {
		d.rotation = p
	};
	this.getID = function() {
		return f
	};
	this.getType =
		function() {
			return r
		};
	this.getX = function() {
		return d.x
	};
	this.getY = function() {
		return d.y
	};
	this.scale = function(p) {
		d.scaleX = p;
		d.scaleY = p
	};
	this.getScale = function() {
		return d.scaleX
	};
	this.getPhysics = function() {
		return m
	};
	this.setChildIndex = function(p) {
		b.setChildIndex(d, p)
	};
	this.setAlpha = function(p) {
		d.alpha = p
	};
	this._init(a, l, e, n, k, h);
	return this
}

function CBonus(a, l, e, n, k, h, m) {
	var b, g, c, d = null,
		r, f, p = !0;
	this._init = function(u, w, x, B, t) {
		c = createBitmap(x);
		c.x = u;
		c.y = w;
		c.regX = .5 * x.width;
		c.regY = .5 * x.height;
		r = B;
		f = t;
		b = u;
		g = w;
		s_oPhysicsController.activeBody(h, !1);
		m.addChild(c)
	};
	this.unload = function() {
		m.removeChild(c)
	};
	this.setVisible = function(u) {
		c.visible = u
	};
	this.setPosition = function(u, w) {
		c.x = u;
		c.y = w;
		s_oPhysicsController.setElementPosition(h, {
			x: u,
			y: w
		})
	};
	this.resetPos = function() {
		this.setPosition(b, g)
	};
	this.setAngle = function(u) {
		c.rotation = u
	};
	this.getID =
		function() {
			return f
		};
	this.getType = function() {
		return r
	};
	this.isCached = function() {
		return p
	};
	this.setCache = function(u) {
		p = u;
		this.activeBody(!u);
		c.visible = !u;
		this.setAngle(0)
	};
	this.activeBody = function(u) {
		s_oPhysicsController.activeBody(h, u)
	};
	this.getX = function() {
		return c.x
	};
	this.getY = function() {
		return c.y
	};
	this.scale = function(u) {
		c.scaleX = u;
		c.scaleY = u
	};
	this.getScale = function() {
		return c.scaleX
	};
	this.getPhysics = function() {
		return h
	};
	this.setChildIndex = function(u) {
		m.setChildIndex(c, u)
	};
	this.move = function() {
		var u =
			s_oPhysicsController.getElementPosition(h);
		c.x = u.x;
		c.y = u.y;
		c.rotation = s_oPhysicsController.getElementAngle(h)
	};
	this.spriteFollowPhysics = function(u) {
		p = !u
	};
	this.setAlpha = function(u) {
		c.alpha = u
	};
	this.animDisappear = function() {
		null === d && (d = createjs.Tween.get(c).to({
			alpha: 0
		}, 250, createjs.Ease.cubicIn).call(function() {
			s_oGame.cachedBonus(f);
			d = null
		}))
	};
	this.update = function() {
		this.move()
	};
	this._init(a, l, e, n, k);
	return this
}

function CSideWall(a, l, e, n, k, h, m, b) {
	var g, c, d, r;
	this._init = function(f, p, u, w, x, B) {
		c = createBitmap(u);
		c.x = f + B;
		c.y = p;
		d = w;
		r = x;
		g = {
			x: c.x,
			y: p
		};
		b.addChild(c)
	};
	this.unload = function() {
		b.removeChild(c)
	};
	this.setVisible = function(f) {
		c.visible = f
	};
	this.setPosition = function(f, p) {
		c.x = f;
		c.y = p
	};
	this.setPositionPhysics = function(f, p) {
		s_oPhysicsController.setElementPosition(h, {
			x: f + m,
			y: p
		})
	};
	this.getPosPhysics = function() {
		return s_oPhysicsController.getElementPosition(h)
	};
	this.getStartPos = function() {
		return g
	};
	this.setAngle =
		function(f) {
			c.rotation = f
		};
	this.getID = function() {
		return r
	};
	this.getType = function() {
		return d
	};
	this.getX = function() {
		return c.x
	};
	this.getY = function() {
		return c.y
	};
	this.scale = function(f) {
		c.scaleX = f;
		c.scaleY = f
	};
	this.setScaleX = function(f) {
		c.scaleX = f
	};
	this.getPhysics = function() {
		return h
	};
	this.setChildIndex = function(f) {
		b.setChildIndex(c, f)
	};
	this.setAlpha = function(f) {
		c.alpha = f
	};
	this._init(a, l, e, n, k, m);
	return this
}

function CArrow(a, l, e, n) {
	var k, h, m, b, g;
	this._init = function(d, r, f) {
		g = createBitmap(f);
		g.x = d;
		g.y = r;
		g.regY = .5 * f.height;
		g.regX = .5 * f.width;
		c.addChild(g)
	};
	this.unload = function() {
		c.removeChild(g)
	};
	this.setVisible = function(d) {
		g.visible = d
	};
	this.setAngle = function(d) {
		g.rotation = d
	};
	this.setPosition = function(d, r) {
		g.x = d;
		g.y = r
	};
	this.setX = function(d) {
		g.x = d
	};
	this.setY = function(d) {
		g.y = d
	};
	this.getX = function() {
		return g.x
	};
	this.getY = function() {
		return g.y
	};
	this.unload = function() {
		c.removeChild(g)
	};
	this.setStartPosTween =
		function(d, r) {
			m = d;
			b = r
		};
	this.setEndPosTween = function(d, r) {
		k = d;
		h = r
	};
	this.animatePos = function(d) {
		var r = this;
		createjs.Tween.get(g).to({
			x: k,
			y: h
		}, d, createjs.Ease.cubicInOut).call(function() {
			createjs.Tween.get(g).to({
				x: m,
				y: b
			}, d, createjs.Ease.cubicInOut).call(function() {
				r.animatePos(d)
			})
		})
	};
	this.removeTween = function() {
		createjs.Tween.removeTweens(g)
	};
	var c = n;
	this._init(a, l, e);
	return this
}

function CHelp(a) {
	var l, e, n, k, h, m, b, g = null,
		c = null,
		d, r, f, p, u, w;
	this._init = function() {
		h = new createjs.Container;
		h.alpha = 1;
		x.addChild(h);
		f = new createjs.Shape;
		f.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		f.alpha = .01;
		f.on("click", function() {});
		f.cursor = "pointer";
		h.addChild(f);
		d = createBitmap(s_oSpriteLibrary.getSprite("fade_help_0"));
		d.alpha = 0;
		d.visible = !1;
		h.addChild(d);
		r = createBitmap(s_oSpriteLibrary.getSprite("fade_help_1"));
		r.alpha = 0;
		r.visible = !1;
		h.addChild(r);
		n = .5 * CANVAS_WIDTH +
			340;
		k = .5 * CANVAS_HEIGHT + 440;
		var B = s_oSpriteLibrary.getSprite("but_continue_big");
		p = new CGfxButton(n, k, B, h);
		p.addEventListenerWithParams(ON_MOUSE_DOWN, this.onPressButton, this, !0);
		p.setScale(.7);
		p.pulseAnimation();
		l = .5 * CANVAS_WIDTH - 340;
		e = .5 * CANVAS_HEIGHT + 440;
		u = new CGfxButton(l, e, B, h);
		u.addEventListenerWithParams(ON_MOUSE_DOWN, this.onPressButton, this, !1);
		u.setScale(.7);
		u.setScaleX(-.7);
		this.showHelp1();
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.showHelp1 = function() {
		w = 1;
		if (null === g) {
			g = new createjs.Container;
			g.alpha = 0;
			h.addChild(g);
			var B = TEXT_HELP1_DESKTOP;
			s_bMobile && (B = TEXT_HELP1_MOBILE);
			new CTLText(g, CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 + 110 - 35, 400, 70, 32, "center", TEXT_COLOR_1, FONT_GAME, 1, 2, 2, B, !0, !0, !0, !1);
			B = s_oSpriteLibrary.getSprite("arrow");
			m = new CArrow(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 190, B, g);
			m.setAngle(90)
		}
		u.setVisible(!1);
		this.leavePage2();
		createjs.Tween.get(g).wait(300).to({
			alpha: 1
		}, 500, createjs.Ease.cubicIn);
		d.visible = !0;
		createjs.Tween.get(d).to({
			alpha: 1
		}, 500, createjs.Ease.cubicIn).call(function() {
			m.setStartPosTween(CANVAS_WIDTH_HALF,
				CANVAS_HEIGHT_HALF + 190);
			m.setEndPosTween(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 240);
			m.animatePos(1E3)
		})
	};
	this.showHelp2 = function() {
		w = 2;
		this.leavePage1();
		if (null === c) {
			c = new createjs.Container;
			c.alpha = 0;
			h.addChild(c);
			new CTLText(c, CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 - 230 - 35, 400, 70, 32, "center", TEXT_COLOR, FONT_GAME, 1, 2, 2, TEXT_HELP2, !0, !0, !0, !1);
			var B = s_oSpriteLibrary.getSprite("arrow");
			b = new CArrow(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 170, B, c);
			b.setAngle(90)
		}
		u.setVisible(!0);
		createjs.Tween.get(c).wait(300).to({
				alpha: 1
			},
			500, createjs.Ease.cubicIn);
		r.visible = !0;
		createjs.Tween.get(r).to({
			alpha: 1
		}, 500, createjs.Ease.cubicIn).call(function() {
			b.setStartPosTween(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 170);
			b.setEndPosTween(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 130);
			b.animatePos(1E3)
		})
	};
	this.leavePage1 = function() {
		createjs.Tween.get(g).to({
			alpha: 0
		}, 500, createjs.Ease.cubicIn).call(function() {
			m.removeTween()
		});
		createjs.Tween.get(d).to({
			alpha: 0
		}, 500, createjs.Ease.cubicIn).call(function() {
			d.visible = !1
		})
	};
	this.leavePage2 = function() {
		null !==
			c && (createjs.Tween.get(c).to({
				alpha: 0
			}, 500, createjs.Ease.cubicIn).call(function() {
				b.removeTween()
			}), createjs.Tween.get(r).to({
				alpha: 0
			}, 500, createjs.Ease.cubicIn).call(function() {
				r.visible = !1
			}))
	};
	this.refreshButtonPos = function(B, t) {
		p.setPosition(n - B, k - t);
		u.setPosition(l + B, e - t)
	};
	this.unload = function() {
		createjs.Tween.get(h).to({
			alpha: 0
		}, 150, createjs.quartOut).call(function() {
			x.removeChild(h);
			p.unload();
			u.unload();
			u = p = null;
			f.removeAllEventListeners()
		});
		s_oHelp = null
	};
	this.onPressButton = function(B) {
		switch (w) {
			case 1:
				this.showHelp2();
				break;
			case 2:
				B ? this._onExit() : this.showHelp1()
		}
	};
	this._onExit = function() {
		s_oGame._onExitHelp()
	};
	var x = a;
	this._init();
	return s_oHelp = this
}
var s_oHelp = null;

function CBubble(a, l) {
	var e, n, k, h, m, b, g = !1;
	this._init = function(c) {
		e = createBitmap(c);
		e.regX = .5 * c.width;
		e.regY = .5 * c.height;
		l.addChild(e);
		n = -e.regY - EDGEBOARD_Y;
		this.reset()
	};
	this.unload = function() {
		l.removeChild(e)
	};
	this.setVisible = function(c) {
		e.visible = c
	};
	this.getX = function() {
		return e.x
	};
	this.getY = function() {
		return e.y
	};
	this.reset = function(c) {
		g = !1;
		var d = Math.floor(Math.random() * (BUBBLE_TIME.max - BUBBLE_TIME.min) + BUBBLE_TIME.min);
		!0 === c && (d = 0);
		m = Math.random() * CANVAS_WIDTH - (EDGEBOARD_X - e.regX) + (EDGEBOARD_X +
			e.regX);
		e.x = m;
		e.y = CANVAS_HEIGHT - EDGEBOARD_Y - e.regY;
		k = e.scaleX = e.scaleY = 0;
		b = Math.floor(Math.random() * (BUBBLE_RANGE_X.max - BUBBLE_RANGE_X.min) + BUBBLE_RANGE_X.min);
		h = Math.random() * (BUBBLE_SPEED.max - BUBBLE_SPEED.min) + BUBBLE_SPEED.min;
		createjs.Tween.get(this).wait(d).call(function() {
			this.setVisible(!0);
			this.bubbleAnim();
			g = !0
		})
	};
	this.bubbleAnim = function() {
		var c = Math.random() * (BUBBLE_SCALE.max - BUBBLE_SCALE.min) + BUBBLE_SCALE.min;
		createjs.Tween.get(e).to({
			scaleX: c,
			scaleY: c
		}, 500)
	};
	this.getChildIndexFront = function() {
		return l.getChildIndex(e)
	};
	this.childIndexFront = function(c) {
		l.setChildIndex(e, c)
	};
	this.update = function() {
		if (g)
			if (e.y > n) {
				var c = Math.sin(k) * b;
				e.y -= h;
				e.x = m + c;
				k += .1
			} else g = !1, this.reset()
	};
	this._init(a);
	return this
}

function CAnimBubble(a, l, e, n) {
	var k;
	this._init = function(h, m, b) {
		var g = new createjs.SpriteSheet({
			images: [b],
			frames: {
				width: b.width / 6,
				height: b.height / 4,
				regX: b.width / 6 / 2,
				regY: b.height / 4 / 2
			},
			animations: {
				explosion: [0, 23, .1]
			}
		});
		k = createSprite(g, 0, b.width / 6 / 2, b.height / 4 / 2, b.width / 6, b.height / 4);
		k.x = h;
		k.y = m;
		k.stop();
		k.visible = !1;
		n.addChild(k)
	};
	this.unload = function() {
		n.removeChild(k)
	};
	this.setVisible = function(h) {
		k.visible = h
	};
	this.startAnimation = function() {
		k.visible || (k.visible = !0, k.gotoAndPlay("explosion"), k.on("animationend",
			function() {
				k.visible = !1;
				k.stop()
			}))
	};
	this.getX = function() {
		return k.x
	};
	this.getY = function() {
		return k.y
	};
	this._init(a, l, e);
	return this
}

function CMsgBox(a, l) {
	var e, n;
	this._init = function(m) {
		n = new createjs.Container;
		h.addChild(n);
		var b = new createjs.Shape;
		b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		b.alpha = .5;
		b.on("click", function() {});
		n.addChild(b);
		b = s_oSpriteLibrary.getSprite("msg_box");
		var g = createBitmap(b);
		g.x = .5 * CANVAS_WIDTH;
		g.y = .5 * CANVAS_HEIGHT;
		g.regX = .5 * b.width;
		g.regY = .5 * b.height;
		n.addChild(g);
		g = b.width - 80;
		b = b.height - 100;
		new CTLText(n, CANVAS_WIDTH / 2 - g / 2, 525 - b / 2, g, b, 40, "center", "#fff", FONT_GAME, 1, 2, 2,
			m, !0, !0, !0, !1);
		e = new CGfxButton(CANVAS_WIDTH / 2, 760, s_oSpriteLibrary.getSprite("but_yes"), n);
		e.addEventListener(ON_MOUSE_UP, this._onButOk, this)
	};
	this._onButOk = function() {
		k.unload()
	};
	this.unload = function() {
		e.unload();
		h.removeChild(n)
	};
	var k = this;
	var h = l;
	this._init(a)
}

function CGUIExpandible(a, l, e, n) {
	var k, h, m, b, g, c, d, r;
	this._init = function(p, u, w, x) {
		b = [];
		c = new createjs.Container;
		c.x = p;
		c.y = u;
		x.addChild(c);
		d = new createjs.Container;
		c.addChild(d);
		r = new createjs.Container;
		c.addChild(r);
		m = !1;
		g = new CGfxButton(0, 0, w, r);
		g.addEventListener(ON_MOUSE_UP, this._onMenu, this);
		h = k = 66
	};
	this.unload = function() {
		g.unload();
		n.removeChild(c)
	};
	this.refreshPos = function(p, u) {
		c.x = a - p;
		c.y = l + u
	};
	this.addButton = function(p) {
		p = p.getButtonImage();
		p.x = 0;
		p.y = 0;
		p.visible = 0;
		d.addChildAt(p, 0);
		b.push(p)
	};
	this._onMenu = function() {
		(m = !m) ? f._expand(): f._collapse()
	};
	this._expand = function() {
		for (var p = 0; p < b.length; p++) b[p].visible = !0, createjs.Tween.get(b[p], {
			override: !0
		}).wait(300 * p / 2).to({
			y: k + p * h
		}, 300, createjs.Ease.cubicOut)
	};
	this._collapse = function() {
		for (var p = 0; p < b.length; p++) {
			var u = b[b.length - 1 - p];
			createjs.Tween.get(u, {
				override: !0
			}).wait(300 * p / 2).to({
				y: 0
			}, 300, createjs.Ease.cubicOut).call(function(w) {
				w.visible = !1
			}, [u])
		}
	};
	var f = this;
	this._init(a, l, e, n)
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
	setShadow: function(a, l, e, n) {
		null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, l, e, n))
	},
	setColor: function(a) {
		this._oText && (this._oText.color = a)
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

function CTLText(a, l, e, n, k, h, m, b, g, c, d, r, f, p, u, w, x) {
	this._oContainer = a;
	this._x = l;
	this._y = e;
	this._iWidth = n;
	this._iHeight = k;
	this._bMultiline = w;
	this._iFontSize = h;
	this._szAlign = m;
	this._szColor = b;
	this._szFont = g;
	this._iPaddingH = d;
	this._iPaddingV = r;
	this._bVerticalAlign = u;
	this._bFitText = p;
	this._bDebug = x;
	this._oDebugShape = null;
	this._fLineHeightFactor = c;
	this._oText = null;
	f && this.__createText(f)
}

function extractHostname(a) {
	a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
	a = a.split(":")[0];
	return a = a.split("?")[0]
}

function extractRootDomain(a) {
	a = extractHostname(a);
	var l = a.split("."),
		e = l.length;
	2 < e && (a = l[e - 2] + "." + l[e - 1]);
	return a
}
var getClosestTop = function() {
		var a = window,
			l = !1;
		try {
			for (; a.parent.document !== a.document;)
				if (a.parent.document) a = a.parent;
				else {
					l = !0;
					break
				}
		} catch (e) {
			l = !0
		}
		return {
			topFrame: a,
			err: l
		}
	},
	getBestPageUrl = function(a) {
		var l = a.topFrame,
			e = "";
		if (a.err) try {
			try {
				e = window.top.location.href
			} catch (k) {
				var n = window.location.ancestorOrigins;
				e = n[n.length - 1]
			}
		} catch (k) {
			e = l.document.referrer
		} else e = l.location.href;
		return e
	},
	TOPFRAMEOBJ = getClosestTop(),
	PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
	for (var a = extractRootDomain(PAGE_URL), l = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], e = 0; e < l.length; e++)
		if (l[e] === a) return !0;
	return !0
};
