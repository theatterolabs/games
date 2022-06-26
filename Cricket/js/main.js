(function() {
	function p(y) {
		y = String(y);
		return y.charAt(0).toUpperCase() + y.slice(1)
	}

	function e(y, G) {
		var O = -1,
			Q = y ? y.length : 0;
		if ("number" == typeof Q && -1 < Q && Q <= l)
			for (; ++O < Q;) G(y[O], O, y);
		else q(y, G)
	}

	function m(y) {
		y = String(y).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(y) ? y : p(y)
	}

	function q(y, G) {
		for (var O in y) t.call(y, O) && G(y[O], O, y)
	}

	function b(y) {
		return null == y ? p(y) : v.call(y).slice(8, -1)
	}

	function d(y, G) {
		var O = null != y ? typeof y[G] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(O) &&
			("object" == O ? !!y[G] : !0)
	}

	function a(y) {
		return String(y).replace(/([ -])(?!$)/g, "$1?")
	}

	function h(y, G) {
		var O = null;
		e(y, function(Q, V) {
			O = G(O, Q, V, y)
		});
		return O
	}

	function k(y) {
		function G(ma) {
			return h(ma, function(ja, fa) {
				var W = fa.pattern || a(fa);
				!ja && (ja = RegExp("\\b" + W + " *\\d+[.\\w_]*", "i").exec(y) || RegExp("\\b" + W + " *\\w+-[\\w]*", "i").exec(y) || RegExp("\\b" + W + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(y)) && ((ja = String(fa.label && !RegExp(W, "i").test(fa.label) ? fa.label : ja).split("/"))[1] && !/[\d.]+/.test(ja[0]) &&
					(ja[0] += " " + ja[1]), fa = fa.label || fa, ja = m(ja[0].replace(RegExp(W, "i"), fa).replace(RegExp("; *(?:" + fa + "[_-])?", "i"), " ").replace(RegExp("(" + fa + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return ja
			})
		}

		function O(ma) {
			return h(ma, function(ja, fa) {
				return ja || (RegExp(fa + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(y) || 0)[1] || null
			})
		}
		var Q = f,
			V = y && "object" == typeof y && "String" != b(y);
		V && (Q = y, y = null);
		var T = Q.navigator || {},
			K = T.userAgent || "";
		y || (y = K);
		var H = V ? !!T.likeChrome : /\bChrome\b/.test(y) && !/internal|\n/i.test(v.toString()),
			I = V ? "Object" : "ScriptBridgingProxyObject",
			S = V ? "Object" : "Environment",
			J = V && Q.java ? "JavaPackage" : b(Q.java),
			L = V ? "Object" : "RuntimeObject";
		S = (J = /\bJava/.test(J) && Q.java) && b(Q.environment) == S;
		var A = J ? "a" : "\u03b1",
			P = J ? "b" : "\u03b2",
			C = Q.document || {},
			w = Q.operamini || Q.opera,
			B = r.test(B = V && w ? w["[[Class]]"] : b(w)) ? B : w = null,
			u, x = y;
		V = [];
		var F = null,
			E = y == K;
		K = E && w && "function" == typeof w.version && w.version();
		var N = function(ma) {
				return h(ma, function(ja, fa) {
					return ja || RegExp("\\b" + (fa.pattern || a(fa)) + "\\b", "i").exec(y) && (fa.label ||
						fa)
				})
			}([{
				label: "EdgeHTML",
				pattern: "Edge"
			}, "Trident", {
				label: "WebKit",
				pattern: "AppleWebKit"
			}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			D = function(ma) {
				return h(ma, function(ja, fa) {
					return ja || RegExp("\\b" + (fa.pattern || a(fa)) + "\\b", "i").exec(y) && (fa.label || fa)
				})
			}(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
					label: "Microsoft Edge",
					pattern: "Edge"
				}, "Midori",
				"Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
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
				}, {
					label: "IE",
					pattern: "IEMobile"
				}, {
					label: "IE",
					pattern: "MSIE"
				}, "Safari"
			]),
			U = G([{
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
				}, "Google TV",
				"Lumia", "iPad", "iPod", "iPhone", "Kindle", {
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
			aa = function(ma) {
				return h(ma, function(ja, fa, W) {
					return ja || (fa[U] || fa[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] || RegExp("\\b" + a(W) + "(?:\\b|\\w*\\d)", "i").exec(y)) && W
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
			R = function(ma) {
				return h(ma, function(ja, fa) {
					var W = fa.pattern || a(fa);
					if (!ja && (ja = RegExp("\\b" + W + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(y))) {
						var ca = ja,
							da = fa.label || fa,
							oa = {
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
						W && da && /^Win/i.test(ca) && !/^Windows Phone /i.test(ca) && (oa = oa[/[\d.]+$/.exec(ca)]) && (ca = "Windows " + oa);
						ca = String(ca);
						W && da && (ca = ca.replace(RegExp(W, "i"), da));
						ja = ca = m(ca.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i,
							"$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return ja
				})
			}(["Windows Phone", "Android", "CentOS", {
					label: "Chrome OS",
					pattern: "CrOS"
				}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS",
				"Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "
			]);
		N && (N = [N]);
		aa && !U && (U = G([aa]));
		if (u = /\bGoogle TV\b/.exec(U)) U = u[0];
		/\bSimulator\b/i.test(y) && (U = (U ? U + " " : "") + "Simulator");
		"Opera Mini" == D && /\bOPiOS\b/.test(y) && V.push("running in Turbo/Uncompressed mode");
		"IE" == D && /\blike iPhone OS\b/.test(y) ? (u = k(y.replace(/like iPhone OS/, "")), aa = u.manufacturer, U = u.product) : /^iP/.test(U) ? (D || (D = "Safari"), R = "iOS" + ((u = / OS ([\d_]+)/i.exec(y)) ? " " + u[1].replace(/_/g, ".") : "")) : "Konqueror" != D || /buntu/i.test(R) ?
			aa && "Google" != aa && (/Chrome/.test(D) && !/\bMobile Safari\b/i.test(y) || /\bVita\b/.test(U)) || /\bAndroid\b/.test(R) && /^Chrome/.test(D) && /\bVersion\//i.test(y) ? (D = "Android Browser", R = /\bAndroid\b/.test(R) ? R : "Android") : "Silk" == D ? (/\bMobi/i.test(y) || (R = "Android", V.unshift("desktop mode")), /Accelerated *= *true/i.test(y) && V.unshift("accelerated")) : "PaleMoon" == D && (u = /\bFirefox\/([\d.]+)\b/.exec(y)) ? V.push("identifying as Firefox " + u[1]) : "Firefox" == D && (u = /\b(Mobile|Tablet|TV)\b/i.exec(y)) ? (R || (R = "Firefox OS"),
				U || (U = u[1])) : !D || (u = !/\bMinefield\b/i.test(y) && /\b(?:Firefox|Safari)\b/.exec(D)) ? (D && !U && /[\/,]|^[^(]+?\)/.test(y.slice(y.indexOf(u + "/") + 8)) && (D = null), (u = U || aa || R) && (U || aa || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(R)) && (D = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(R) ? R : u) + " Browser")) : "Electron" == D && (u = (/\bChrome\/([\d.]+)\b/.exec(y) || 0)[1]) && V.push("Chromium " + u) : R = "Kubuntu";
		K || (K = O(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
			"Version", a(D), "(?:Firefox|Minefield|NetFront)"
		]));
		if (u = "iCab" == N && 3 < parseFloat(K) && "WebKit" || /\bOpera\b/.test(D) && (/\bOPR\b/.test(y) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(y) && !/^(?:Trident|EdgeHTML)$/.test(N) && "WebKit" || !N && /\bMSIE\b/i.test(y) && ("Mac OS" == R ? "Tasman" : "Trident") || "WebKit" == N && /\bPlayStation\b(?! Vita\b)/i.test(D) && "NetFront") N = [u];
		"IE" == D && (u = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(y) || 0)[1]) ? (D += " Mobile", R = "Windows Phone " + (/\+$/.test(u) ? u : u + ".x"), V.unshift("desktop mode")) :
			/\bWPDesktop\b/i.test(y) ? (D = "IE Mobile", R = "Windows Phone 8.x", V.unshift("desktop mode"), K || (K = (/\brv:([\d.]+)/.exec(y) || 0)[1])) : "IE" != D && "Trident" == N && (u = /\brv:([\d.]+)/.exec(y)) && (D && V.push("identifying as " + D + (K ? " " + K : "")), D = "IE", K = u[1]);
		if (E) {
			if (d(Q, "global"))
				if (J && (u = J.lang.System, x = u.getProperty("os.arch"), R = R || u.getProperty("os.name") + " " + u.getProperty("os.version")), S) {
					try {
						K = Q.require("ringo/engine").version.join("."), D = "RingoJS"
					} catch (ma) {
						(u = Q.system) && u.global.system == Q.system && (D = "Narwhal",
							R || (R = u[0].os || null))
					}
					D || (D = "Rhino")
				} else "object" == typeof Q.process && !Q.process.browser && (u = Q.process) && ("object" == typeof u.versions && ("string" == typeof u.versions.electron ? (V.push("Node " + u.versions.node), D = "Electron", K = u.versions.electron) : "string" == typeof u.versions.nw && (V.push("Chromium " + K, "Node " + u.versions.node), D = "NW.js", K = u.versions.nw)), D || (D = "Node.js", x = u.arch, R = u.platform, K = (K = /[\d.]+/.exec(u.version)) ? K[0] : null));
			else b(u = Q.runtime) == I ? (D = "Adobe AIR", R = u.flash.system.Capabilities.os) :
				b(u = Q.phantom) == L ? (D = "PhantomJS", K = (u = u.version || null) && u.major + "." + u.minor + "." + u.patch) : "number" == typeof C.documentMode && (u = /\bTrident\/(\d+)/i.exec(y)) ? (K = [K, C.documentMode], (u = +u[1] + 4) != K[1] && (V.push("IE " + K[1] + " mode"), N && (N[1] = ""), K[1] = u), K = "IE" == D ? String(K[1].toFixed(1)) : K[0]) : "number" == typeof C.documentMode && /^(?:Chrome|Firefox)\b/.test(D) && (V.push("masking as " + D + " " + K), D = "IE", K = "11.0", N = ["Trident"], R = "Windows");
			R = R && m(R)
		}
		K && (u = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(K) || /(?:alpha|beta)(?: ?\d)?/i.exec(y +
			";" + (E && T.appMinorVersion)) || /\bMinefield\b/i.test(y) && "a") && (F = /b/i.test(u) ? "beta" : "alpha", K = K.replace(RegExp(u + "\\+?$"), "") + ("beta" == F ? P : A) + (/\d+\+?/.exec(u) || ""));
		if ("Fennec" == D || "Firefox" == D && /\b(?:Android|Firefox OS)\b/.test(R)) D = "Firefox Mobile";
		else if ("Maxthon" == D && K) K = K.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(U)) "Xbox 360" == U && (R = null), "Xbox 360" == U && /\bIEMobile\b/.test(y) && V.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(D) && (!D || U || /Browser|Mobi/.test(D)) || "Windows CE" !=
			R && !/Mobi/i.test(y))
			if ("IE" == D && E) try {
				null === Q.external && V.unshift("platform preview")
			} catch (ma) {
				V.unshift("embedded")
			} else(/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(y)) && (u = (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(y) || 0)[1] || K) ? (u = [u, /BB10/.test(y)], R = (u[1] ? (U = null, aa = "BlackBerry") : "Device Software") + " " + u[0], K = null) : this != q && "Wii" != U && (E && w || /Opera/.test(D) && /\b(?:MSIE|Firefox)\b/i.test(y) || "Firefox" == D && /\bOS X (?:\d+\.){2,}/.test(R) || "IE" == D && (R && !/^Win/.test(R) && 5.5 < K || /\bWindows XP\b/.test(R) &&
				8 < K || 8 == K && !/\bTrident\b/.test(y))) && !r.test(u = k.call(q, y.replace(r, "") + ";")) && u.name && (u = "ing as " + u.name + ((u = u.version) ? " " + u : ""), r.test(D) ? (/\bIE\b/.test(u) && "Mac OS" == R && (R = null), u = "identify" + u) : (u = "mask" + u, D = B ? m(B.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(u) && (R = null), E || (K = null)), N = ["Presto"], V.push(u));
			else D += " Mobile";
		if (u = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(y) || 0)[1]) {
			u = [parseFloat(u.replace(/\.(\d)$/, ".0$1")), u];
			if ("Safari" == D && "+" == u[1].slice(-1)) D = "WebKit Nightly", F = "alpha",
				K = u[1].slice(0, -1);
			else if (K == u[1] || K == (u[2] = (/\bSafari\/([\d.]+\+?)/i.exec(y) || 0)[1])) K = null;
			u[1] = (/\bChrome\/([\d.]+)/i.exec(y) || 0)[1];
			537.36 == u[0] && 537.36 == u[2] && 28 <= parseFloat(u[1]) && "WebKit" == N && (N = ["Blink"]);
			E && (H || u[1]) ? (N && (N[1] = "like Chrome"), u = u[1] || (u = u[0], 530 > u ? 1 : 532 > u ? 2 : 532.05 > u ? 3 : 533 > u ? 4 : 534.03 > u ? 5 : 534.07 > u ? 6 : 534.1 > u ? 7 : 534.13 > u ? 8 : 534.16 > u ? 9 : 534.24 > u ? 10 : 534.3 > u ? 11 : 535.01 > u ? 12 : 535.02 > u ? "13+" : 535.07 > u ? 15 : 535.11 > u ? 16 : 535.19 > u ? 17 : 536.05 > u ? 18 : 536.1 > u ? 19 : 537.01 > u ? 20 : 537.11 > u ? "21+" : 537.13 > u ?
				23 : 537.18 > u ? 24 : 537.24 > u ? 25 : 537.36 > u ? 26 : "Blink" != N ? "27" : "28")) : (N && (N[1] = "like Safari"), u = (u = u[0], 400 > u ? 1 : 500 > u ? 2 : 526 > u ? 3 : 533 > u ? 4 : 534 > u ? "4+" : 535 > u ? 5 : 537 > u ? 6 : 538 > u ? 7 : 601 > u ? 8 : "8"));
			N && (N[1] += " " + (u += "number" == typeof u ? ".x" : /[.+]/.test(u) ? "" : "+"));
			"Safari" == D && (!K || 45 < parseInt(K)) && (K = u)
		}
		"Opera" == D && (u = /\bzbov|zvav$/.exec(R)) ? (D += " ", V.unshift("desktop mode"), "zvav" == u ? (D += "Mini", K = null) : D += "Mobile", R = R.replace(RegExp(" *" + u + "$"), "")) : "Safari" == D && /\bChrome\b/.exec(N && N[1]) && (V.unshift("desktop mode"),
			D = "Chrome Mobile", K = null, /\bOS X\b/.test(R) ? (aa = "Apple", R = "iOS 4.3+") : R = null);
		K && 0 == K.indexOf(u = /[\d.]+$/.exec(R)) && -1 < y.indexOf("/" + u + "-") && (R = String(R.replace(u, "")).replace(/^ +| +$/g, ""));
		N && !/\b(?:Avant|Nook)\b/.test(D) && (/Browser|Lunascape|Maxthon/.test(D) || "Safari" != D && /^iOS/.test(R) && /\bSafari\b/.test(N[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(D) && N[1]) && (u = N[N.length - 1]) && V.push(u);
		V.length && (V = ["(" + V.join("; ") + ")"]);
		aa && U && 0 > U.indexOf(aa) &&
			V.push("on " + aa);
		U && V.push((/^on /.test(V[V.length - 1]) ? "" : "on ") + U);
		if (R) {
			var X = (u = / ([\d.+]+)$/.exec(R)) && "/" == R.charAt(R.length - u[0].length - 1);
			R = {
				architecture: 32,
				family: u && !X ? R.replace(u[0], "") : R,
				version: u ? u[1] : null,
				toString: function() {
					var ma = this.version;
					return this.family + (ma && !X ? " " + ma : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		}(u = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(x)) && !/\bi686\b/i.test(x) ? (R && (R.architecture = 64, R.family = R.family.replace(RegExp(" *" + u), "")), D && (/\bWOW64\b/i.test(y) || E &&
			/\w(?:86|32)$/.test(T.cpuClass || T.platform) && !/\bWin64; x64\b/i.test(y)) && V.unshift("32-bit")) : R && /^OS X/.test(R.family) && "Chrome" == D && 39 <= parseFloat(K) && (R.architecture = 64);
		y || (y = null);
		Q = {};
		Q.description = y;
		Q.layout = N && N[0];
		Q.manufacturer = aa;
		Q.name = D;
		Q.prerelease = F;
		Q.product = U;
		Q.ua = y;
		Q.version = D && K;
		Q.os = R || {
			architecture: null,
			family: null,
			version: null,
			toString: function() {
				return "null"
			}
		};
		Q.parse = k;
		Q.toString = function() {
			return this.description || ""
		};
		Q.version && V.unshift(K);
		Q.name && V.unshift(D);
		R && D && (R !=
			String(R).split(" ")[0] || R != D.split(" ")[0] && !U) && V.push(U ? "(" + R + ")" : "on " + R);
		V.length && (Q.description = V.join(" "));
		return Q
	}
	var c = {
			"function": !0,
			object: !0
		},
		f = c[typeof window] && window || this,
		g = c[typeof exports] && exports;
	c = c[typeof module] && module && !module.nodeType && module;
	var n = g && c && "object" == typeof global && global;
	!n || n.global !== n && n.window !== n && n.self !== n || (f = n);
	var l = Math.pow(2, 53) - 1,
		r = /\bOpera/;
	n = Object.prototype;
	var t = n.hasOwnProperty,
		v = n.toString,
		z = k();
	"function" == typeof define && "object" == typeof define.amd &&
		define.amd ? (f.platform = z, define(function() {
			return z
		})) : g && c ? q(z, function(y, G) {
			g[G] = y
		}) : f.platform = z
}).call(this);

function buildIOSMeta() {
	for (var p = [{
			name: "viewport",
			content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
		}, {
			name: "apple-mobile-web-app-capable",
			content: "yes"
		}, {
			name: "apple-mobile-web-app-status-bar-style",
			content: "black"
		}], e = 0; e < p.length; e++) {
		var m = document.createElement("meta");
		m.name = p[e].name;
		m.content = p[e].content;
		var q = window.document.head.querySelector('meta[name="' + m.name + '"]');
		q && q.parentNode.removeChild(q);
		window.document.head.appendChild(m)
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

function iosInIframe() {
	try {
		return window.self !== window.top
	} catch (p) {
		return !0
	}
}
$(document).ready(function() {
	platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
	platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
(function() {
	var p = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		e = "undefined" !== typeof module && module.exports,
		m = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		q = function() {
			for (var a, h = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
					"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
				], k = 0, c = h.length, f = {}; k < c; k++)
				if ((a = h[k]) && a[1] in p) {
					for (k = 0; k < a.length; k++) f[h[0][k]] = a[k];
					return f
				} return !1
		}(),
		b = {
			change: q.fullscreenchange,
			error: q.fullscreenerror
		},
		d = {
			request: function(a) {
				var h = q.requestFullscreen;
				a = a || p.documentElement;
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) a[h]();
				else a[h](m && Element.ALLOW_KEYBOARD_INPUT)
			},
			exit: function() {
				p[q.exitFullscreen]()
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
			on: function(a, h) {
				var k = b[a];
				k && p.addEventListener(k, h, !1)
			},
			off: function(a, h) {
				var k = b[a];
				k && p.removeEventListener(k, h, !1)
			},
			raw: q
		};
	q ? (Object.defineProperties(d, {
		isFullscreen: {
			get: function() {
				return !!p[q.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return p[q.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function() {
				return !!p[q.fullscreenEnabled]
			}
		}
	}), e ? module.exports = d : window.screenfull = d) : e ? module.exports = !1 : window.screenfull = !1
})();
var s_fInverseScaling = 0;
(function(p) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(p) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(p.substr(0,
		4))
})(navigator.userAgent || navigator.vendor || window.opera);

function trace(p) {
	console.log(p)
}

function isChrome() {
	return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
	for (var p = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); p.length;)
		if (navigator.platform === p.pop()) return s_bIsIphone = !0;
	return s_bIsIphone = !1
}
$(window).resize(function() {
	sizeHandler()
});

function getSize(p) {
	var e = p.toLowerCase(),
		m = window.document,
		q = m.documentElement;
	if (void 0 === window["inner" + p]) p = q["client" + p];
	else if (window["inner" + p] != q["client" + p]) {
		var b = m.createElement("body");
		b.id = "vpw-test-b";
		b.style.cssText = "overflow:scroll";
		var d = m.createElement("div");
		d.id = "vpw-test-d";
		d.style.cssText = "position:absolute;top:-1000px";
		d.innerHTML = "<style>@media(" + e + ":" + q["client" + p] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
		b.appendChild(d);
		q.insertBefore(b, m.head);
		p = 7 == d["offset" + p] ? q["client" + p] : window["inner" + p];
		q.removeChild(b)
	} else p = window["inner" + p];
	return p
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
	return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
	var p = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
	return 1 < p ? p : 0
}

function sizeHandler() {
	window.scrollTo(0, 1);
	if ($("#canvas")) {
		var p = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
		var e = getSize("Width");
		_checkOrientation(e, p);
		var m = Math.min(p / CANVAS_HEIGHT, e / CANVAS_WIDTH),
			q = CANVAS_WIDTH * m;
		m *= CANVAS_HEIGHT;
		if (m < p) {
			var b = p - m;
			m += b;
			q += CANVAS_WIDTH / CANVAS_HEIGHT * b
		} else q < e && (b = e - q, q += b, m += CANVAS_HEIGHT / CANVAS_WIDTH * b);
		b = p / 2 - m / 2;
		var d = e / 2 - q / 2,
			a = CANVAS_WIDTH / q;
		if (d * a < -EDGEBOARD_X || b * a < -EDGEBOARD_Y) m = Math.min(p / (CANVAS_HEIGHT - 2 *
			EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), q = CANVAS_WIDTH * m, m *= CANVAS_HEIGHT, b = (p - m) / 2, d = (e - q) / 2, a = CANVAS_WIDTH / q;
		s_fInverseScaling = a;
		s_iOffsetX = -1 * d * a;
		s_iOffsetY = -1 * b * a;
		0 <= b && (s_iOffsetY = 0);
		0 <= d && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oTeamChoose && s_oTeamChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		$("#canvas").css("width", q + "px");
		$("#canvas").css("height", m + "px");
		0 > b ? ($("#canvas").css("top",
			b + "px"), s_iCanvasOffsetHeight = b) : ($("#canvas").css("top", "0px"), s_iCanvasOffsetHeight = 0);
		$("#canvas").css("left", d + "px");
		resizeCanvas3D();
		s_iCanvasResizeWidth = q;
		s_iCanvasResizeHeight = m;
		s_iCanvasOffsetWidth = d;
		fullscreenHandler()
	}
}

function createBitmap(p, e, m) {
	var q = new createjs.Bitmap(p),
		b = new createjs.Shape;
	e && m ? b.graphics.beginFill("#fff").drawRect(0, 0, e, m) : b.graphics.beginFill("#ff0").drawRect(0, 0, p.width, p.height);
	q.hitArea = b;
	return q
}

function createSprite(p, e, m, q, b, d) {
	p = null !== e ? new createjs.Sprite(p, e) : new createjs.Sprite(p);
	e = new createjs.Shape;
	e.graphics.beginFill("#000000").drawRect(-m, -q, b, d);
	p.hitArea = e;
	return p
}

function _checkOrientation(p, e) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (p > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function randomFloatBetween(p, e, m) {
	"undefined" === typeof m && (m = 2);
	return parseFloat(Math.min(p + Math.random() * (e - p), e).toFixed(m))
}

function rotateVector2D(p, e) {
	var m = e.getX() * Math.cos(p) + e.getY() * Math.sin(p),
		q = e.getX() * -Math.sin(p) + e.getY() * Math.cos(p);
	e.set(m, q)
}

function tweenVectorsOnX(p, e, m) {
	return p + m * (e - p)
}

function shuffle(p) {
	for (var e = p.length, m, q; 0 !== e;) q = Math.floor(Math.random() * e), --e, m = p[e], p[e] = p[q], p[q] = m;
	return p
}

function bubbleSort(p) {
	do {
		var e = !1;
		for (var m = 0; m < p.length - 1; m++) p[m] > p[m + 1] && (e = p[m], p[m] = p[m + 1], p[m + 1] = e, e = !0)
	} while (e)
}

function compare(p, e) {
	return p.index > e.index ? -1 : p.index < e.index ? 1 : 0
}

function easeLinear(p, e, m, q) {
	return m * p / q + e
}

function easeInQuad(p, e, m, q) {
	return m * (p /= q) * p + e
}

function easeInSine(p, e, m, q) {
	return -m * Math.cos(p / q * (Math.PI / 2)) + m + e
}

function easeInCubic(p, e, m, q) {
	return m * (p /= q) * p * p + e
}

function easeOutCubic(p, e, m, q) {
	return m * ((p = p / q - 1) * p * p + 1) + e
}

function getTrajectoryPoint(p, e) {
	var m = new createjs.Point,
		q = (1 - p) * (1 - p),
		b = p * p;
	m.x = q * e.start.x + 2 * (1 - p) * p * e.traj.x + b * e.end.x;
	m.y = q * e.start.y + 2 * (1 - p) * p * e.traj.y + b * e.end.y;
	return m
}

function formatTime(p) {
	p /= 1E3;
	var e = Math.floor(p / 60);
	p = Math.floor(p - 60 * e);
	var m = "";
	m = 10 > e ? m + ("0" + e + ":") : m + (e + ":");
	return 10 > p ? m + ("0" + p) : m + p
}

function degreesToRadians(p) {
	return p * Math.PI / 180
}

function checkRectCollision(p, e) {
	var m = getBounds(p, .9);
	var q = getBounds(e, .98);
	return calculateIntersection(m, q)
}

function calculateIntersection(p, e) {
	var m, q, b, d;
	var a = p.x + (m = p.width / 2);
	var h = p.y + (q = p.height / 2);
	var k = e.x + (b = e.width / 2);
	var c = e.y + (d = e.height / 2);
	a = Math.abs(a - k) - (m + b);
	h = Math.abs(h - c) - (q + d);
	return 0 > a && 0 > h ? (a = Math.min(Math.min(p.width, e.width), -a), h = Math.min(Math.min(p.height, e.height), -h), {
		x: Math.max(p.x, e.x),
		y: Math.max(p.y, e.y),
		width: a,
		height: h,
		rect1: p,
		rect2: e
	}) : null
}

function getBounds(p, e) {
	var m = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (p instanceof createjs.Container) {
		m.x2 = -Infinity;
		m.y2 = -Infinity;
		var q = p.children,
			b = q.length,
			d;
		for (d = 0; d < b; d++) {
			var a = getBounds(q[d], 1);
			a.x < m.x && (m.x = a.x);
			a.y < m.y && (m.y = a.y);
			a.x + a.width > m.x2 && (m.x2 = a.x + a.width);
			a.y + a.height > m.y2 && (m.y2 = a.y + a.height)
		}
		Infinity == m.x && (m.x = 0);
		Infinity == m.y && (m.y = 0);
		Infinity == m.x2 && (m.x2 = 0);
		Infinity == m.y2 && (m.y2 = 0);
		m.width = m.x2 - m.x;
		m.height = m.y2 - m.y;
		delete m.x2;
		delete m.y2
	} else {
		if (p instanceof createjs.Bitmap) {
			b =
				p.sourceRect || p.image;
			d = b.width * e;
			var h = b.height * e
		} else if (p instanceof createjs.Sprite)
			if (p.spriteSheet._frames && p.spriteSheet._frames[p.currentFrame] && p.spriteSheet._frames[p.currentFrame].image) {
				b = p.spriteSheet.getFrame(p.currentFrame);
				d = b.rect.width;
				h = b.rect.height;
				q = b.regX;
				var k = b.regY
			} else m.x = p.x || 0, m.y = p.y || 0;
		else m.x = p.x || 0, m.y = p.y || 0;
		q = q || 0;
		d = d || 0;
		k = k || 0;
		h = h || 0;
		m.regX = q;
		m.regY = k;
		b = p.localToGlobal(0 - q, 0 - k);
		a = p.localToGlobal(d - q, h - k);
		d = p.localToGlobal(d - q, 0 - k);
		q = p.localToGlobal(0 - q, h - k);
		m.x =
			Math.min(Math.min(Math.min(b.x, a.x), d.x), q.x);
		m.y = Math.min(Math.min(Math.min(b.y, a.y), d.y), q.y);
		m.width = Math.max(Math.max(Math.max(b.x, a.x), d.x), q.x) - m.x;
		m.height = Math.max(Math.max(Math.max(b.y, a.y), d.y), q.y) - m.y
	}
	return m
}

function NoClickDelay(p) {
	this.element = p;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(p) {
	for (var e = p.length, m, q; 0 < e;) q = Math.floor(Math.random() * e), e--, m = p[e], p[e] = p[q], p[q] = m;
	return p
}
NoClickDelay.prototype = {
	handleEvent: function(p) {
		switch (p.type) {
			case "touchstart":
				this.onTouchStart(p);
				break;
			case "touchmove":
				this.onTouchMove(p);
				break;
			case "touchend":
				this.onTouchEnd(p)
		}
	},
	onTouchStart: function(p) {
		p.preventDefault();
		this.moved = !1;
		this.element.addEventListener("touchmove", this, !1);
		this.element.addEventListener("touchend", this, !1)
	},
	onTouchMove: function(p) {
		this.moved = !0
	},
	onTouchEnd: function(p) {
		this.element.removeEventListener("touchmove", this, !1);
		this.element.removeEventListener("touchend",
			this, !1);
		if (!this.moved) {
			p = document.elementFromPoint(p.changedTouches[0].clientX, p.changedTouches[0].clientY);
			3 == p.nodeType && (p = p.parentNode);
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", !0, !0);
			p.dispatchEvent(e)
		}
	}
};
(function() {
	function p(m) {
		var q = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		m = m || window.event;
		m.type in q ? document.body.className = q[m.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var e = "hidden";
	e in document ? document.addEventListener("visibilitychange", p) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", p) : (e = "webkitHidden") in
		document ? document.addEventListener("webkitvisibilitychange", p) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", p) : "onfocusin" in document ? document.onfocusin = document.onfocusout = p : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = p
})();

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(p) {
	for (var e = window.location.search.substring(1).split("&"), m = 0; m < e.length; m++) {
		var q = e[m].split("=");
		if (q[0] == p) return q[1]
	}
}

function playSound(p, e, m) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[p].play(), s_aSounds[p].volume(e), s_aSounds[p].loop(m), s_aSounds[p]) : null
}

function stopSound(p) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[p].stop()
}

function setVolume(p, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[p].volume(e)
}

function setMute(p, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[p].mute(e)
}

function resizeCanvas3D() {
	$("canvas").each(function() {
		"#canvas" != $(this).attr("id") && ($(this).css("width", $("#canvas").css("width")), $(this).css("height", $("#canvas").css("height")), $(this).css("position", $("#canvas").css("position")), $(this).css("left", $("#canvas").css("left")), $(this).css("top", $("#canvas").css("top")))
	})
}

function createOrthoGraphicCamera() {
	var p = new THREE.PerspectiveCamera(FOV, CANVAS_WIDTH / CANVAS_HEIGHT, NEAR, FAR);
	p.rotation.x = Math.PI / 180 * 90;
	p.position.set(0, 0, 0);
	p.updateProjectionMatrix();
	p.updateMatrixWorld();
	return p
}
Math.radians = function(p) {
	return p * Math.PI / 180
};
Math.degrees = function(p) {
	return 180 * p / Math.PI
};

function fullscreenHandler() {
	ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut();
	null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut()
});

function CSpriteLibrary() {
	var p = {},
		e, m, q, b, d, a;
	this.init = function(h, k, c) {
		e = {};
		q = m = 0;
		b = h;
		d = k;
		a = c
	};
	this.addSprite = function(h, k) {
		p.hasOwnProperty(h) || (p[h] = e[h] = {
			szPath: k,
			oSprite: new Image,
			bLoaded: !1
		}, m++)
	};
	this.getSprite = function(h) {
		return p.hasOwnProperty(h) ? p[h].oSprite : null
	};
	this._onSpritesLoaded = function() {
		m = 0;
		d.call(a)
	};
	this._onSpriteLoaded = function(h) {
		b.call(a, h);
		++q === m && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var h in e) e[h].oSprite.oSpriteLibrary = this, e[h].oSprite.szKey = h,
			e[h].oSprite.onload = function() {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, e[h].oSprite.src = e[h].szPath
	};
	this.setLoaded = function(h) {
		p[h].bLoaded = !0
	};
	this.isLoaded = function(h) {
		return p[h].bLoaded
	};
	this.getNumSprites = function() {
		return m
	}
}
var CANVAS_WIDTH = 790,
	CANVAS_HEIGHT = 960,
	CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH,
	CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT,
	FONT = "pixel_lcd7regular",
	FONT2 = "arialbold",
	EDGEBOARD_X = 150,
	EDGEBOARD_Y = 0,
	FPS = 30,
	FPS_TIME = 1 / FPS,
	ROLL_BALL_RATE = 60 / FPS,
	DISABLE_SOUND_MOBILE = !1,
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	BATTER_MODE = 0,
	BOWLER_MODE = 1,
	TOT_TEAMS = 6,
	POINT_TEXT_EXCELLENT, POINT_TEXT_GREAT = 85,
	TEXT_EXCELLENT_COLOR = ["#fff", "#5d96fe"],
	PLAYER_SELECTION_FLAG_START_POS = {
		x: CANVAS_WIDTH_HALF - 180,
		y: CANVAS_HEIGHT_HALF -
			85
	},
	OPPONENT_SELECTION_FLAG_START_POS = {
		x: CANVAS_WIDTH_HALF + 72,
		y: CANVAS_HEIGHT_HALF - 85
	},
	MAX_COL_FLAG = 2,
	FLAG_OFFSET = {
		x: 110,
		y: 75
	},
	TRAJECTORY_Y_BALL_CAUGHT = -250,
	BATTER_X = CANVAS_WIDTH / 2 - 140,
	BATTER_Y = CANVAS_HEIGHT - 620,
	BOWLER_X = CANVAS_WIDTH / 2 - 50,
	BOWLER_Y = CANVAS_HEIGHT / 2 - 475,
	BALL_X = BOWLER_X + 86,
	BALL_Y = BOWLER_Y + 50,
	BALL_TO_THROW, STEP_SPEED_BALL, BEAT_FORCE = .5,
	STEP_SPEED_STADIUM, TARGET_PREV_LUM_OFFSET = {
		min: -12,
		max: -5
	},
	LAUNCH_DIR_OFFSET_RANGE = [{
		min: -90,
		max: -50
	}, {
		min: -5,
		max: 5
	}, {
		min: 50,
		max: 90
	}],
	POLE_POSITION = {
		x: CANVAS_WIDTH_HALF,
		y: CANVAS_HEIGHT - 200
	},
	OFFSET_FOR_HIT, OFFSET_FOR_PERFECT_HIT, PERFECT_HIT_X = BALL_X - 36,
	PERFECT_HIT_Y = CANVAS_HEIGHT - 410,
	ALMOST_MINUS, ALMOST_PLUS, END_POINT_X_THROWN = PERFECT_HIT_X,
	END_POINT_Y_THROWN = PERFECT_HIT_Y,
	END_POINT_X_MISSED_BALL = POLE_POSITION.x,
	END_POINT_Y_MISSED_BALL = POLE_POSITION.y,
	END_POINT_X_ALMOST_MINUS_LEFT = CANVAS_WIDTH / 2 - 200,
	END_POINT_X_ALMOST_MINUS_RIGHT = CANVAS_WIDTH / 2 + 200,
	END_POINT_Y_ALMOST_MINUS = 50,
	END_POINT_X_ALMOST_PLUS_LEFT = CANVAS_WIDTH / 2 - 300,
	END_POINT_X_ALMOST_PLUS_RIGHT = CANVAS_WIDTH /
	2 + 300,
	END_POINT_Y_ALMOST_PLUS = 50,
	END_POINT_X_PERFECT_LEFT = CANVAS_WIDTH / 2 - 100,
	END_POINT_X_PERFECT_RIGHT = CANVAS_WIDTH / 2 + 100,
	END_POINT_Y_PERFECT = 0,
	MAX_FRAMES_THROWN = 40,
	START_POINT_STADIUM_X = CANVAS_WIDTH / 2,
	START_POINT_STADIUM_Y = CANVAS_HEIGHT / 2 + 250,
	NUM_SPRITE_PLAYERS = 40,
	NUM_SPRITE_BATTING = 36,
	NUM_SPRITE_BOWLER = 56,
	NUM_SPRITE_BATTER_BOWLER_MODE = 81,
	STEP_RATE = 1.5,
	PHYSICS_ACCURACY = 3,
	MOBILE_OFFSET_GLOVES_X = -45,
	MOBILE_OFFSET_GLOVES_Y = -38,
	BALL_VELOCITY_MULTIPLIER = 1,
	PHYSICS_STEP = 1 / FPS,
	BALL_MASS = .16,
	BALL_RADIUS =
	.6,
	BALL_LINEAR_DAMPING = .2,
	OFFSET_BALL_POS_X = 10,
	OBJECT, TEXT_SIZE = [50, 65, 80],
	TIME_TRY_TO_SHOT_BALL_OPPONENT = .7,
	MIN_BALL_VEL_ROTATION = .1,
	TIME_RESET_AFTER_GOAL = 1,
	TIME_RESET_AFTER_KEEPER_SAVED = 2,
	TIME_RESET_AFTER_PERFECT_KEEPER_SAVED = 3,
	TIME_BALL_IN_HAND = 1E3,
	FOV = 35,
	INTERVAL_SHOOT = 1,
	HAND_KEEPER_ANGLE_RATE = .15,
	LIMIT_HAND_RANGE_POS = {
		x: 8.8,
		zMax: 5.1,
		zMin: -8.5
	},
	POSITION_BALL = {
		x: 60,
		y: 220,
		z: 0
	},
	LINE_GOAL_SIZE = {
		width: 17.5,
		depth: 1,
		height: 15.5
	},
	GOAL_LINE_POS = {
		x: 0,
		y: 10,
		z: -2.7
	},
	GLOVE_SIZE = {
		width: 1.4,
		depth: 1,
		height: 1.7
	},
	LEFT_GLOVE_POSITION = {
		x: -1.5,
		y: 40,
		z: 0
	},
	RIGHT_GLOVE_POSITION = {
		x: 1.5,
		y: 40,
		z: 0
	},
	LAUNCH_BALL_IMPULSE = {
		x: -4.47,
		y: 0,
		z: 1
	},
	LEFT_GLOVE = 0,
	RIGHT_GLOVE = 1,
	GLOVE_REG = [{
		x: 3,
		y: -5
	}, {
		x: -3,
		y: -5
	}],
	SHOW_3D_RENDER = !1,
	CAMERA_TEST = !1,
	MOUSE_SENSIBILTY = .03,
	OFFSET_MOUSE_X = -75,
	SCORE_ERROR_MULTIPLIER = 20,
	INTENSITY_DISPLAY_SHOCK = [{
		x: 30,
		y: 20,
		time: 75
	}, {
		x: 50,
		y: 25,
		time: 75
	}, {
		x: 70,
		y: 30,
		time: 75
	}, {
		x: 90,
		y: 40,
		time: 75
	}],
	CAMERA_POSITION = {
		x: 0,
		y: 0,
		z: 100
	},
	NEAR = 10,
	FAR = 2E3,
	STATE_INIT = 0,
	STATE_PLAY = 1,
	STATE_FINISH = 2,
	STATE_PAUSE = 3,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP =
	1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	HIT_LEFT = 0,
	HIT_CENTER = 1,
	HIT_RIGHT = 2,
	ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_TEAM = "Australia;England;India;Pakistan;South Africa;Sri Lanka".split(";");
TEXT_GAMEOVER = "YOU RAN OUT OF BALLS.";
TEXT_SCORE = "FINAL SCORE\n";
TEXT_PAUSE = "PAUSE";
TEXT_MISSED = "MISSED!";
SCORE_TEXT = "PTS: ";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_SELECT_YOUR_TEAM = "SELECT YOUR TEAM";
TEXT_SELECT_OPPONENT_TEAM = "SELECT CPU TEAM";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_CONGRATULATION = ["GOOD!", "GREAT!", "EXCELLENT!!!"];
TEXT_LOADING = "LOADING";
TEXT_HOW_TO_PLAY = "HOW TO PLAY";
TEXT_HELP1_PC_BOWLER = "MOVE THE MOUSE TO CONTROL THE KEEPER'S GLOVES AND DEFEND THE WICKET";
TEXT_HELP1_MOBILE_BOWLER = "MOVE THE FINGER TO CONTROL THE KEEPER'S GLOVES AND DEFEND THE WICKET";
var TEXT_PRELOADER_CONTINUE = "START";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
	var p, e, m, q, b, d, a, h, k, c;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
		s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
		s_oSpriteLibrary.loadSprites();
		c = new createjs.Container;
		s_oStage.addChild(c)
	};
	this.unload = function() {
		c.removeAllChildren();
		k.unload()
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var f = new createjs.Shape;
		f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.addChild(f);
		f = s_oSpriteLibrary.getSprite("200x200");
		a = createBitmap(f);
		a.regX = .5 * f.width;
		a.regY = .5 * f.height;
		a.x = CANVAS_WIDTH / 2;
		a.y = CANVAS_HEIGHT / 2 - 180;
		c.addChild(a);
		h = new createjs.Shape;
		h.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(a.x - 100, a.y - 100, 200, 200, 10);
		c.addChild(h);
		a.mask = h;
		f = s_oSpriteLibrary.getSprite("progress_bar");
		q = createBitmap(f);
		q.x = CANVAS_WIDTH / 2 - f.width / 2;
		q.y = CANVAS_HEIGHT / 2 + 50;
		c.addChild(q);
		p = f.width;
		e = f.height;
		b = new createjs.Shape;
		b.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(q.x, q.y, 1, e);
		c.addChild(b);
		q.mask = b;
		m = new createjs.Text("", "30px " + FONT, "#fff");
		m.x = CANVAS_WIDTH / 2;
		m.y = CANVAS_HEIGHT / 2 + 100;
		m.textBaseline = "alphabetic";
		m.textAlign = "center";
		c.addChild(m);
		f = s_oSpriteLibrary.getSprite("but_start");
		k = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, f, TEXT_PRELOADER_CONTINUE,
			"Arial", "#000", "bold 30", c);
		k.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
		k.setVisible(!1);
		d = new createjs.Shape;
		d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.addChild(d);
		createjs.Tween.get(d).to({
			alpha: 0
		}, 500).call(function() {
			createjs.Tween.removeTweens(d);
			c.removeChild(d)
		})
	};
	this._onButStartRelease = function() {
		s_oMain._onRemovePreloader()
	};
	this.refreshLoader = function(f) {
		m.text = f + "%";
		100 === f && (k.setVisible(!0), m.visible = !1, q.visible = !1);
		b.graphics.clear();
		f = Math.floor(f * p / 100);
		b.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(q.x, q.y, f, e)
	};
	this._init()
}

function CMain(p) {
	var e, m = 0,
		q = 0,
		b = STATE_LOADING,
		d, a, h, k = [];
	this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(f) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.framerate = 30;
		navigator.userAgent.match(/Windows Phone/i) &&
			(DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		this.setLoadedArray();
		seekAndDestroy() ? d = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
	};
	this.preloaderReady = function() {
		this._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		e = !0
	};
	this.soundLoaded = function(f) {
		m++;
		d.refreshLoader(Math.floor(m / q * 100))
	};
	this._initSounds = function() {
		var f = [];
		f.push({
			path: "./sounds/",
			filename: "buzzer",
			loop: !1,
			volume: 1,
			ingamename: "buzzer"
		});
		f.push({
			path: "./sounds/",
			filename: "click",
			loop: !1,
			volume: 1,
			ingamename: "click"
		});
		f.push({
			path: "./sounds/",
			filename: "drop_bounce_grass",
			loop: !1,
			volume: 1,
			ingamename: "drop_bounce_grass"
		});
		f.push({
			path: "./sounds/",
			filename: "hit_ball",
			loop: !1,
			volume: 1,
			ingamename: "hit_ball"
		});
		f.push({
			path: "./sounds/",
			filename: "crowd_cheering",
			loop: !1,
			volume: 1,
			ingamename: "crowd_cheering"
		});
		f.push({
			path: "./sounds/",
			filename: "applauses",
			loop: !1,
			volume: 1,
			ingamename: "applauses"
		});
		f.push({
			path: "./sounds/",
			filename: "crowd_ohhh",
			loop: !1,
			volume: 1,
			ingamename: "crowd_ohhh"
		});
		f.push({
			path: "./sounds/",
			filename: "kick",
			loop: !1,
			volume: 1,
			ingamename: "kick"
		});
		f.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		q += f.length;
		s_aSounds = [];
		for (var g = 0; g < f.length; g++) s_aSounds[f[g].ingamename] = new Howl({
			src: [f[g].path + f[g].filename + ".mp3"],
			autoplay: !1,
			preload: !0,
			loop: f[g].loop,
			volume: f[g].volume,
			onload: s_oMain.soundLoaded
		})
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu",
			"./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("preloader_anim", "./sprites/preloader_anim.png");
		s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
		s_oSpriteLibrary.addSprite("ball",
			"./sprites/ball.png");
		s_oSpriteLibrary.addSprite("1", "./sprites/1.png");
		s_oSpriteLibrary.addSprite("2", "./sprites/2.png");
		s_oSpriteLibrary.addSprite("3", "./sprites/3.png");
		s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
		s_oSpriteLibrary.addSprite("bg_select_team", "./sprites/bg_select_team.jpg");
		s_oSpriteLibrary.addSprite("bg_select_mode", "./sprites/bg_select_mode.jpg");
		s_oSpriteLibrary.addSprite("flag_selection",
			"./sprites/flag_selection.png");
		s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
		s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
		s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
		s_oSpriteLibrary.addSprite("bg_text", "./sprites/bg_text.png");
		s_oSpriteLibrary.addSprite("bowler_mode", "./sprites/bowler_mode.png");
		s_oSpriteLibrary.addSprite("bg_game_bowler", "./sprites/bg_game_bowler.jpg");
		s_oSpriteLibrary.addSprite("ball_game",
			"./sprites/ball_game.png");
		s_oSpriteLibrary.addSprite("ball_shadow", "./sprites/ball_shadow.png");
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
		s_oSpriteLibrary.addSprite("help_mouse", "./sprites/help_mouse.png");
		s_oSpriteLibrary.addSprite("help_touch", "./sprites/help_touch.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		for (var f = 0; f < TOT_TEAMS; f++) s_oSpriteLibrary.addSprite("glove_" + f, "./sprites/glove_" + f + ".png"), s_oSpriteLibrary.addSprite("flag_" + f, "./sprites/flag_" + f + ".png");
		q += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		m++;
		d.refreshLoader(Math.floor(m / q * 100))
	};
	this._loadChoosedTeam = function(f, g) {
		s_iPlayerTeam = f;
		s_iOpponentTeam = g;
		q = m = 0;
		if (k[g]) this.gotoGame(s_iPlayerTeam, s_iOpponentTeam);
		else {
			s_oSpriteLibrary.init(this._onTeamsLoaded, this._onAllImagesLoaded,
				this);
			for (var n = 0; n < NUM_SPRITE_BATTER_BOWLER_MODE; n++) !1 === k[g] && s_oSpriteLibrary.addSprite("batter_" + g + "_" + n, "./sprites/batter_" + g + "/batter_" + g + "_" + n + ".png");
			q += s_oSpriteLibrary.getNumSprites();
			s_oSpriteLibrary.loadSprites()
		}
	};
	this._onTeamsLoaded = function() {
		m++;
		m === q && this.gotoGame(s_iPlayerTeam, s_iOpponentTeam)
	};
	this._onAllImagesLoaded = function() {};
	this._onRemovePreloader = function() {
		d.unload();
		s_oSoundTrack = playSound("soundtrack", 1, !0);
		s_oMain.gotoMenu()
	};
	this.setLoadedArray = function() {
		for (var f =
				0; f < TOT_TEAMS; f++) k[f] = !1
	};
	this.gotoMenu = function() {
		new CMenu;
		b = STATE_MENU
	};
	this.gotoGame = function(f, g) {
		h.unload();
		k[s_iOpponentTeam] = !0;
		a = new CGame(c, f, g);
		b = STATE_GAME
	};
	this.gotoTeamChoose = function() {
		h = new CTeamChoose;
		b = STATE_MENU
	};
	this.stopUpdate = function() {
		e = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		e = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display",
			"none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function(f) {
		if (!1 !== e) {
			var g = (new Date).getTime();
			s_iTimeElaps = g - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = g;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			b === STATE_GAME && a.update();
			s_oStage.update(f)
		}
	};
	s_oMain = this;
	var c = p;
	ENABLE_FULLSCREEN = p.fullscreen;
	ENABLE_CHECK_ORIENTATION = p.check_orientation;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_bFullscreen = !1,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_iPlayerTeam, s_iOpponentTeam, s_iAdsLevel = 1,
	s_oStage, s_oMain, s_oBall, s_oSpriteLibrary, s_oSoundTrack = null,
	s_oCanvas, s_iCanvasResizeHeight, s_iCanvasResizeWidth, s_iCanvasOffsetHeight, s_iCanvasOffsetWidth, s_aSounds;

function CTextButton(p, e, m, q, b, d, a, h) {
	var k, c, f, g, n, l, r, t, v, z, y, G;
	this._init = function(O, Q, V, T, K, H, I, S) {
		k = !1;
		g = [];
		n = [];
		G = createBitmap(V);
		c = V.width;
		f = V.height;
		var J = Math.ceil(I / 20);
		z = new createjs.Text(T, I + "px " + K, "#000000");
		var L = z.getBounds();
		z.textAlign = "center";
		z.lineWidth = .9 * c;
		z.textBaseline = "alphabetic";
		z.x = V.width / 2 + J;
		z.y = Math.floor(V.height / 2) + L.height / 3 + J;
		y = new createjs.Text(T, I + "px " + K, H);
		y.textAlign = "center";
		y.textBaseline = "alphabetic";
		y.lineWidth = .9 * c;
		y.x = V.width / 2;
		y.y = Math.floor(V.height /
			2) + L.height / 3;
		v = new createjs.Container;
		v.x = O;
		v.y = Q;
		v.regX = V.width / 2;
		v.regY = V.height / 2;
		s_bMobile || (v.cursor = "pointer");
		v.addChild(G, z, y);
		!1 !== S && s_oStage.addChild(v);
		this._initListener()
	};
	this.unload = function() {
		v.off("mousedown", l);
		v.off("pressup", r);
		s_oStage.removeChild(v)
	};
	this.setVisible = function(O) {
		v.visible = O
	};
	this.setAlign = function(O) {
		y.textAlign = O;
		z.textAlign = O
	};
	this.enable = function() {
		k = !1;
		G.filters = [];
		G.cache(0, 0, c, f)
	};
	this.disable = function() {
		k = !0;
		var O = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		G.filters = [new createjs.ColorMatrixFilter(O)];
		G.cache(0, 0, c, f)
	};
	this._initListener = function() {
		l = v.on("mousedown", this.buttonDown);
		r = v.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(O, Q, V) {
		g[O] = Q;
		n[O] = V
	};
	this.addEventListenerWithParams = function(O, Q, V, T) {
		g[O] = Q;
		n[O] = V;
		t = T
	};
	this.buttonRelease = function() {
		k || (playSound("click", 1, !1), v.scaleX = 1, v.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(n[ON_MOUSE_UP], t))
	};
	this.buttonDown = function() {
		k || (v.scaleX = .9, v.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(O, Q) {
		v.x = O;
		v.y = Q
	};
	this.changeText = function(O) {
		y.text = O;
		z.text = O
	};
	this.setX = function(O) {
		v.x = O
	};
	this.setY = function(O) {
		v.y = O
	};
	this.getButtonImage = function() {
		return v
	};
	this.getX = function() {
		return v.x
	};
	this.getY = function() {
		return v.y
	};
	this.getSprite = function() {
		return v
	};
	this._init(p, e, m, q, b, d, a, h);
	return this
}

function CToggle(p, e, m, q) {
	var b, d, a, h = [],
		k, c, f;
	this._init = function(g, n, l, r) {
		d = [];
		a = [];
		var t = new createjs.SpriteSheet({
			images: [l],
			frames: {
				width: l.width / 2,
				height: l.height,
				regX: l.width / 2 / 2,
				regY: l.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		b = r;
		f = createSprite(t, "state_" + b, l.width / 2 / 2, l.height / 2, l.width / 2, l.height);
		f.x = g;
		f.y = n;
		f.cursor = "pointer";
		f.stop();
		s_oStage.addChild(f);
		this._initListener()
	};
	this.unload = function() {
		f.off("mousedown", k);
		f.off("pressup", c);
		s_oStage.removeChild(f)
	};
	this._initListener =
		function() {
			k = f.on("mousedown", this.buttonDown);
			c = f.on("pressup", this.buttonRelease)
		};
	this.addEventListener = function(g, n, l) {
		d[g] = n;
		a[g] = l
	};
	this.addEventListenerWithParams = function(g, n, l, r) {
		d[g] = n;
		a[g] = l;
		h = r
	};
	this.setActive = function(g) {
		b = g;
		f.gotoAndStop("state_" + b)
	};
	this.buttonRelease = function() {
		f.scaleX = 1;
		f.scaleY = 1;
		playSound("click", 1, !1);
		b = !b;
		f.gotoAndStop("state_" + b);
		playSound("click", 1, !1);
		d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(a[ON_MOUSE_UP], h)
	};
	this.buttonDown = function() {
		f.scaleX = .9;
		f.scaleY = .9;
		d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(a[ON_MOUSE_DOWN], h)
	};
	this.setPosition = function(g, n) {
		f.x = g;
		f.y = n
	};
	this.setVisible = function(g) {
		f.visible = g
	};
	this._init(p, e, m, q)
}

function CGfxButton(p, e, m, q) {
	var b, d, a, h, k, c, f, g, n = !1;
	this._init = function(t, v, z) {
		b = [];
		d = [];
		k = createBitmap(z);
		k.x = t;
		k.y = v;
		g = f = 1;
		k.regX = z.width / 2;
		k.regY = z.height / 2;
		s_bMobile || (k.cursor = "pointer");
		l.addChild(k);
		this._initListener()
	};
	this.unload = function() {
		k.off("mousedown", a);
		k.off("pressup", h);
		l.removeChild(k)
	};
	this.setVisible = function(t) {
		k.visible = t
	};
	this.setCursorType = function(t) {
		k.cursor = t
	};
	this._initListener = function() {
		a = k.on("mousedown", this.buttonDown);
		h = k.on("pressup", this.buttonRelease)
	};
	this.addEventListener =
		function(t, v, z) {
			b[t] = v;
			d[t] = z
		};
	this.addEventListenerWithParams = function(t, v, z, y) {
		b[t] = v;
		d[t] = z;
		c = y
	};
	this.buttonRelease = function() {
		n || (k.scaleX = 0 < f ? 1 : -1, k.scaleY = 1, playSound("click", 1, !1), b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(d[ON_MOUSE_UP], c))
	};
	this.buttonDown = function() {
		n || (k.scaleX = 0 < f ? .9 : -.9, k.scaleY = .9, b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN], c))
	};
	this.rotation = function(t) {
		k.rotation = t
	};
	this.getButton = function() {
		return k
	};
	this.setPosition = function(t, v) {
		k.x = t;
		k.y = v
	};
	this.setX = function(t) {
		k.x =
			t
	};
	this.setY = function(t) {
		k.y = t
	};
	this.getButtonImage = function() {
		return k
	};
	this.block = function(t) {
		n = t;
		k.scaleX = f;
		k.scaleY = g
	};
	this.setScaleX = function(t) {
		f = k.scaleX = t
	};
	this.getX = function() {
		return k.x
	};
	this.getY = function() {
		return k.y
	};
	this.pulseAnimation = function() {
		createjs.Tween.get(k).to({
			scaleX: .9 * f,
			scaleY: .9 * g
		}, 850, createjs.Ease.quadOut).to({
			scaleX: f,
			scaleY: g
		}, 650, createjs.Ease.quadIn).call(function() {
			r.pulseAnimation()
		})
	};
	this.trebleAnimation = function() {
		createjs.Tween.get(k).to({
			rotation: 5
		}, 75, createjs.Ease.quadOut).to({
				rotation: -5
			},
			140, createjs.Ease.quadIn).to({
			rotation: 0
		}, 75, createjs.Ease.quadIn).wait(750).call(function() {
			r.trebleAnimation()
		})
	};
	this.removeAllTweens = function() {
		createjs.Tween.removeTweens(k)
	};
	var l = void 0 === q ? s_oStage : q;
	this._init(p, e, m);
	var r = this;
	return this
}

function CMenu() {
	var p, e, m, q, b, d, a, h, k, c, f, g, n, l = null,
		r = null;
	this._init = function() {
		a = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(a);
		h = createBitmap(s_oSpriteLibrary.getSprite("logo_menu"));
		h.x = 200;
		h.y = 90;
		s_oStage.addChild(h);
		var t = s_oSpriteLibrary.getSprite("but_play");
		k = new CGfxButton(CANVAS_WIDTH / 2 + 150, CANVAS_HEIGHT - 170, t);
		k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), b =
			CANVAS_WIDTH - t.height / 2 - 10, d = t.height / 2 + 10, f = new CToggle(b, d, t, s_bAudioActive, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		t = s_oSpriteLibrary.getSprite("but_credits");
		m = t.height / 2 + 10;
		q = t.height / 2 + 10;
		g = new CGfxButton(m, q, t, s_oStage);
		g.addEventListener(ON_MOUSE_UP, this._onCredits, this);
		t = window.document;
		var v = t.documentElement;
		l = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
		r = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen ||
			t.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (l = !1);
		l && screenfull.enabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), p = m + t.width / 2 + 10, e = q, n = new CToggle(p, e, t, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		c = new createjs.Shape;
		c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(c);
		createjs.Tween.get(c).to({
			alpha: 0
		}, 1E3).call(function() {
			c.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		k.unload();
		k = null;
		c.visible = !1;
		g.unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), f = null;
		l && screenfull.enabled && n.unload();
		s_oStage.removeAllChildren();
		s_oMenu = null
	};
	this.refreshButtonPos = function(t, v) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || f.setPosition(b - t, v + d);
		l && screenfull.enabled && n.setPosition(p + s_iOffsetX, e + s_iOffsetY);
		g.setPosition(m + t, v + q)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onCredits = function() {
		new CCreditsPanel
	};
	this._onButPlayRelease =
		function() {
			this.unload();
			s_oMain.gotoTeamChoose()
		};
	this.resetFullscreenBut = function() {
		l && screenfull.enabled && n.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? r.call(window.document) : l.call(window.document.documentElement);
		sizeHandler()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CInterface() {
	var p, e, m, q, b, d, a, h, k, c, f, g, n, l, r, t, v, z, y, G, O, Q, V, T, K = null,
		H = null,
		I, S = null,
		J, L = null,
		A = null,
		P;
	this._init = function() {
		var C = s_oSpriteLibrary.getSprite("but_exit");
		a = CANVAS_WIDTH - C.height / 2 - 5;
		h = C.height / 2 + 10;
		v = new CGfxButton(a, h, C);
		v.addEventListener(ON_MOUSE_UP, this._onExit, this);
		C = s_oSpriteLibrary.getSprite("but_pause");
		p = a - C.height - 5;
		e = h;
		z = new CGfxButton(p, e, C);
		z.addEventListener(ON_MOUSE_UP, this.onButPauseRelease, this);
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (C = s_oSpriteLibrary.getSprite("audio_icon"),
			b = p - C.width / 2 - 5, d = h, t = new CToggle(b, d, C, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), C = s_oSpriteLibrary.getSprite("but_fullscreen"), m = b - C.width / 2 - 5, q = d) : (C = s_oSpriteLibrary.getSprite("but_fullscreen"), m = p - C.width / 2 - 5, q = h);
		var w = window.document,
			B = w.documentElement;
		K = B.requestFullscreen || B.mozRequestFullScreen || B.webkitRequestFullScreen || B.msRequestFullscreen;
		H = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN &&
			(K = !1);
		K && screenfull.enabled && (T = new CToggle(m, q, C, s_bFullscreen, s_oStage), T.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		y = s_oSpriteLibrary.getSprite("score_panel");
		l = CANVAS_WIDTH / 2 - 260;
		r = 35;
		I = new CGfxButton(l, r, y, s_oStage);
		f = CANVAS_WIDTH / 2 - 315;
		O = new createjs.Text(SCORE_TEXT, "30px " + FONT, "#ffffff");
		O.x = f;
		O.y = 47;
		O.textAlign = "center";
		O.textBaseline = "alphabetic";
		s_oStage.addChild(O);
		c = CANVAS_WIDTH / 2 - 150;
		Q = new createjs.Text("0", "30px " + FONT, "#ffffff");
		Q.x = c;
		Q.y = 47;
		Q.textAlign = "right";
		Q.textBaseline = "alphabetic";
		s_oStage.addChild(Q);
		G = new CBallStatic(s_oStage);
		g = CANVAS_WIDTH / 2 - 370;
		n = 79;
		G.setPosition(g, n);
		k = CANVAS_WIDTH / 2 - 350;
		V = new createjs.Text("x " + LIVES, "30px " + FONT2, "#143502");
		V.x = k;
		V.y = 88;
		V.textAlign = "left";
		V.textBaseline = "alphabetic";
		s_oStage.addChild(V);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(), t = null;
		K && screenfull.enabled && T.unload();
		v.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function(C,
		w) {
		v.setPosition(a - C, w + h);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(b - C, w + d);
		K && screenfull.enabled && T.setPosition(m - s_iOffsetX, q + s_iOffsetY);
		I.setPosition(l + C, w + r);
		G.setPosition(g + C, w + n);
		z.setPosition(p - C, w + e);
		O.x = f + C;
		Q.x = c + C;
		V.x = k + C;
		if (null !== S) {
			var B = S.getStartPositionControlLeft();
			S.setPositionControlLeft(B.x + C, B.y - w);
			B = S.getStartPositionControlRight();
			S.setPositionControlRight(B.x - C, B.y - w)
		}
	};
	this.createController = function() {
		S = new CController
	};
	this.createHitArea = function() {
		A = new createjs.Shape;
		A.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		A.alpha = .01;
		A.on("click", function() {});
		s_oStage.addChild(A)
	};
	this.setHitAreaVisible = function(C) {
		null !== A && (A.visible = C)
	};
	this.createAnimText = function(C, w, B, u, x, F) {
		var E = new createjs.Container;
		E.scaleX = 0;
		E.scaleY = 0;
		var N = new createjs.Text(C, w + "px " + FONT2, "#000");
		N.x = 0;
		N.y = 0;
		N.textAlign = "center";
		N.textBaseline = "middle";
		N.outline = 4;
		E.addChild(N);
		var D = new createjs.Text(C, w + "px " + FONT2, "#ffffff");
		D.x = 0;
		D.y = 0;
		D.textAlign = "center";
		D.textBaseline = "middle";
		E.addChild(D);
		E.x = CANVAS_WIDTH_HALF;
		E.y = CANVAS_HEIGHT_HALF;
		B && (P = 0, s_oInterface.strobeText(D, u));
		s_oStage.addChild(E);
		createjs.Tween.get(E).to({
			scaleX: 1,
			scaleY: 1
		}, x, createjs.Ease.cubicOut).call(function() {
			createjs.Tween.get(E).wait(300).to({
				scaleX: 0,
				scaleY: 0
			}, x, createjs.Ease.cubicOut).call(function() {
				B && createjs.Tween.removeTweens(D);
				F();
				s_oStage.removeChild(E)
			})
		})
	};
	this.strobeText = function(C, w) {
		createjs.Tween.get(C).wait(30).call(function() {
			P < w.length - 1 ? P++ : P = 0;
			C.color = w[P];
			s_oInterface.strobeText(C, w)
		})
	};
	this.animBallHit = function() {
		var C = s_oSpriteLibrary.getSprite("hit_msg"),
			w = createBitmap(C);
		w.x = CANVAS_WIDTH_HALF;
		w.y = CANVAS_HEIGHT_HALF;
		w.regX = .5 * C.width;
		w.regY = .5 * C.height;
		w.scaleX = 0;
		w.scaleY = 0;
		s_oStage.addChild(w);
		createjs.Tween.get(w).to({
			scaleX: 1,
			scaleY: 1
		}, 500, createjs.Ease.cubicOut).wait(800).call(function() {
			s_oGame.afterBallHit();
			s_oStage.removeChild(w)
		})
	};
	this.viewScore = function(C) {
		Q.text = C
	};
	this.refreshLivesText = function(C) {
		V.text = "x " + C
	};
	this.createHelpPanel =
		function(C) {
			L = new CHelpPanel(0, 0, C, s_oSpriteLibrary.getSprite("bg_help"))
		};
	this._onButRestartRelease = function() {
		s_oGame.restartGame()
	};
	this.onExitFromHelp = function() {
		null !== L && L.unload()
	};
	this.unloadPause = function() {
		J.unload();
		J = null
	};
	this.onButPauseRelease = function() {
		J = new CPause
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onExit = function() {
		(new CAreYouSurePanel(s_oStage)).show()
	};
	this.resetFullscreenBut = function() {
		K && screenfull.enabled && T.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? H.call(window.document) : K.call(window.document.documentElement);
		sizeHandler()
	};
	s_oInterface = this;
	this._init();
	return this
}
var s_oInterface = null;

function CEndPanel(p) {
	var e, m, q, b, d, a;
	this._init = function(h) {
		playSound("buzzer", 1, !1);
		e = createBitmap(h);
		e.on("click", function() {});
		q = new createjs.Text("", " 44px " + FONT2, "#fff");
		q.x = CANVAS_WIDTH / 2;
		q.y = CANVAS_HEIGHT / 2 - 190;
		q.textAlign = "center";
		q.textBaseline = "alphabetic";
		q.lineHeight = 60;
		q.lineWidth = 450;
		b = new createjs.Text("", " 40px " + FONT2, "#fff");
		b.x = CANVAS_WIDTH / 2;
		b.y = CANVAS_HEIGHT / 2;
		b.textAlign = "center";
		b.textBaseline = "alphabetic";
		b.lineHeight = 60;
		b.lineWidth = 470;
		m = new createjs.Container;
		m.alpha = 0;
		m.visible = !1;
		m.addChild(e, b, q);
		h = s_oSpriteLibrary.getSprite("but_restart");
		d = new CGfxButton(CANVAS_WIDTH / 2 + 170, CANVAS_HEIGHT_HALF + 160, h, m);
		h = s_oSpriteLibrary.getSprite("but_home");
		a = new CGfxButton(CANVAS_WIDTH / 2 - 170, CANVAS_HEIGHT_HALF + 160, h, m);
		s_oStage.addChild(m)
	};
	this.unload = function() {
		e.off("click", function() {});
		createjs.Tween.get(m).to({
			alpha: 0
		}, 500).call(function() {
			a.unload();
			d.unload();
			s_oStage.removeChild(m)
		})
	};
	this._initListener = function() {
		a.addEventListener(ON_MOUSE_UP, this._onExit, this);
		d.addEventListener(ON_MOUSE_UP, this._onRestart, this)
	};
	this.show = function(h) {
		q.text = TEXT_GAMEOVER;
		b.text = TEXT_SCORE + h;
		m.visible = !0;
		var k = this;
		createjs.Tween.get(m).to({
			alpha: 1
		}, 500).call(function() {
			k._initListener();
			s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_iAdsLevel = 1) : s_iAdsLevel++
		});
		$(s_oMain).trigger("end_level", 1);
		$(s_oMain).trigger("share_event", h);
		$(s_oMain).trigger("save_score", h)
	};
	this._onRestart = function() {
		this.unload();
		s_oGame.resetGame()
	};
	this._onExit =
		function() {
			this.unload();
			s_oGame.onExit()
		};
	this._init(p);
	return this
}

function CCreditsPanel() {
	var p, e, m, q, b, d, a, h;
	this._init = function() {
		h = new createjs.Container;
		s_oStage.addChild(h);
		var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		h.addChild(k);
		b = new createjs.Shape;
		b.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.addChild(b);
		k = s_oSpriteLibrary.getSprite("msg_box");
		e = createBitmap(k);
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2;
		e.regX = k.width / 2;
		e.regY = k.height / 2;
		h.addChild(e);
		d = new createjs.Shape;
		d.graphics.beginFill("#0f0f0f").drawRect(0,
			0, CANVAS_WIDTH, CANVAS_HEIGHT);
		d.alpha = .01;
		d.cursor = "pointer";
		d.on("click", this._onLogoButRelease);
		h.addChild(d);
		k = s_oSpriteLibrary.getSprite("but_exit");
		p = CANVAS_WIDTH / 2 + 204;
		m = new CGfxButton(p, 264, k, h);
		m.addEventListener(ON_MOUSE_UP, this.unload, this);
		q = new createjs.Text(TEXT_CREDITS_DEVELOPED, "48px " + FONT2, "#ffffff");
		q.x = CANVAS_WIDTH / 2;
		q.y = 350;
		q.textAlign = "center";
		h.addChild(q);
		k = s_oSpriteLibrary.getSprite("logo_credits");
		var c = createBitmap(k);
		c.regX = k.width / 2;
		c.regY = k.height / 2;
		c.x = CANVAS_WIDTH / 2;
		c.y = 470;
		h.addChild(c);
		a = new createjs.Text("www.codethislab.com", "42px " + FONT2, "#ffffff");
		a.x = CANVAS_WIDTH / 2;
		a.y = 530;
		a.textAlign = "center";
		h.addChild(a)
	};
	this.unload = function() {
		d.off("click", this._onLogoButRelease);
		m.unload();
		m = null;
		s_oStage.removeChild(h)
	};
	this._onLogoButRelease = function() {
		window.open("http://www.codethislab.com/index.php?&l=en")
	};
	this._init()
}

function CTeamChoose() {
	var p, e, m, q, b, d, a, h, k, c, f, g, n, l, r, t = null,
		v, z, y, G, O, Q, V, T, K, H, I, S, J = null,
		L = null;
	this._init = function() {
		k = createBitmap(s_oSpriteLibrary.getSprite("bg_select_team"));
		s_oStage.addChild(k);
		O = new createjs.Container;
		H = 0;
		I = TEXT_TEAM.length - 1;
		T = this.createFlagSelection(PLAYER_SELECTION_FLAG_START_POS.x, PLAYER_SELECTION_FLAG_START_POS.y, 1500, this._onButPlayerTeamChoose);
		K = this.createFlagSelection(OPPONENT_SELECTION_FLAG_START_POS.x, OPPONENT_SELECTION_FLAG_START_POS.y, 1500, this._onButOppTeamChoose);
		var A = s_oSpriteLibrary.getSprite("flag_selection");
		y = createBitmap(A);
		y.x = T[0].getX();
		y.y = T[0].getY();
		y.regX = .5 * A.width;
		y.regY = .5 * A.height;
		G = createBitmap(A);
		G.x = K[TEXT_TEAM.length - 1].getX();
		G.y = K[TEXT_TEAM.length - 1].getY();
		G.regX = .5 * A.width;
		G.regY = .5 * A.height;
		s_oStage.addChild(O);
		O.y = 12;
		g = this.createText(TEXT_SELECT_OPPONENT_TEAM, 22, 200).container;
		g.x = CANVAS_WIDTH_HALF + 130;
		g.y = 304;
		s_oStage.addChild(g);
		f = this.createText(TEXT_SELECT_YOUR_TEAM, 22, 200).container;
		f.x = CANVAS_WIDTH_HALF - 120;
		f.y = 304;
		s_oStage.addChild(f);
		A = this.createText(TEXT_TEAM[0], 30, 500);
		n = A.container;
		n.x = CANVAS_WIDTH_HALF - 120;
		n.y = CANVAS_HEIGHT_HALF + 132;
		Q = A.text;
		s_oStage.addChild(n);
		A = this.createText(TEXT_TEAM[TEXT_TEAM.length - 1], 30, 500);
		l = A.container;
		l.x = CANVAS_WIDTH_HALF + 120;
		l.y = CANVAS_HEIGHT_HALF + 132;
		V = A.text;
		s_oStage.addChild(l);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) A = s_oSpriteLibrary.getSprite("audio_icon"), a = CANVAS_WIDTH - A.width / 2 - 60, h = A.height / 2 + 10, v = new CToggle(a, h, A, s_bAudioActive, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
			this);
		A = window.document;
		var P = A.documentElement;
		J = P.requestFullscreen || P.mozRequestFullScreen || P.webkitRequestFullScreen || P.msRequestFullscreen;
		L = A.exitFullscreen || A.mozCancelFullScreen || A.webkitExitFullscreen || A.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (J = !1);
		J && screenfull.enabled && (A = s_oSpriteLibrary.getSprite("but_fullscreen"), p = A.width / 4 + 10, e = A.height / 2 + 10, S = new CToggle(p, e, A, s_bFullscreen, s_oStage), S.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		m = .5 * CANVAS_WIDTH + 300;
		q = .5 * CANVAS_HEIGHT +
			400;
		A = s_oSpriteLibrary.getSprite("but_continue");
		c = new CGfxButton(m, q, A, s_oStage);
		c.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this);
		c.pulseAnimation();
		A = s_oSpriteLibrary.getSprite("but_exit");
		b = CANVAS_WIDTH - A.width / 2 - 15;
		d = A.height / 2 + 10;
		z = new CGfxButton(b, d, A, s_oStage);
		z.addEventListener(ON_MOUSE_UP, this._onExit, this);
		r = new createjs.Shape;
		r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(r);
		createjs.Tween.get(r).to({
			alpha: 0
		}, 1E3).call(function() {
			r.visible = !1;
			O.addChild(y, G)
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this._createFlag = function(A, P, C, w, B, u, x) {
		var F = s_oSpriteLibrary.getSprite("flag_" + A);
		P = new CGfxButton(P, C, F, x);
		P.addEventListenerWithParams(ON_MOUSE_UP, u, this, A);
		A = P.getButton();
		A.scaleX = 0;
		A.scaleY = 0;
		createjs.Tween.get(A).wait(w).to({
			scaleY: 1,
			scaleX: 1
		}, B, createjs.Ease.elasticOut);
		return P
	};
	this.createFlagSelection = function(A, P, C, w) {
		for (var B = [], u = A, x = 0; x < TOT_TEAMS; x++) B[x] = this._createFlag(x, u, P, Math.floor(500 * Math.random()), C, w, O),
			0 === x % MAX_COL_FLAG - 1 ? (u = A, P += FLAG_OFFSET.y) : u += FLAG_OFFSET.x;
		return B
	};
	this.createText = function(A, P, C) {
		var w = new createjs.Container;
		A = new createjs.Text(A, P + "px " + FONT2, "#ffffff");
		A.textAlign = "center";
		A.lineWidth = C;
		A.x = 0;
		A.y = 0;
		w.addChild(A);
		return {
			container: w,
			text: A
		}
	};
	this.refreshButtonPos = function(A, P) {
		z.setPosition(b - A, P + d);
		c.setPosition(m - A, q - P);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.setPosition(a - A, P + h);
		J && screenfull.enabled && S.setPosition(p + s_iOffsetX, e + s_iOffsetY)
	};
	this._onButPlayerTeamChoose =
		function(A) {
			H !== A && I !== A && (y.x = T[A].getX(), y.y = T[A].getY(), Q.text = TEXT_TEAM[A], H = A)
		};
	this._onButOppTeamChoose = function(A) {
		I !== A && H !== A && (G.x = K[A].getX(), G.y = K[A].getY(), V.text = TEXT_TEAM[A], I = A)
	};
	this.unload = function() {
		for (var A = 0; A < T.length; A++) T[A].unload(), T[A] = null;
		for (A = 0; A < K.length; A++) K[A].unload(), K[A] = null;
		z.unload();
		z = null;
		c.unload();
		c = null;
		null !== t && (t.unload(), t = null);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v.unload(), v = null;
		J && screenfull.enabled && S.unload();
		s_oStage.removeAllChildren();
		createjs.Tween.removeAllTweens();
		s_oTeamChoose = null
	};
	this.loadingScreen = function() {
		var A = new createjs.Container;
		A.alpha = 0;
		t = new CLoadingScreen(A, this);
		createjs.Tween.get(A).to({
			alpha: 1
		}, 250, createjs.Ease.cubicOut)
	};
	this._onExit = function() {
		this.unload();
		s_oMain.gotoMenu()
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onButContinueRelease = function() {
		c.block(!0);
		this.loadingScreen();
		s_oMain._loadChoosedTeam(H, I)
	};
	this.resetFullscreenBut = function() {
		J &&
			screenfull.enabled && S.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? L.call(window.document) : J.call(window.document.documentElement);
		sizeHandler()
	};
	s_oTeamChoose = this;
	this._init()
}
var s_oTeamChoose = null;

function CPause() {
	var p, e;
	this._init = function() {
		var m = new createjs.Container;
		m.alpha = 1;
		p = new createjs.Shape;
		p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		p.alpha = .5;
		var q = new createjs.Shape;
		q.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		p.hitArea = q;
		p.on("click", function() {});
		m.addChild(p);
		q = s_oSpriteLibrary.getSprite("msg_box");
		var b = createBitmap(q);
		b.x = CANVAS_WIDTH_HALF;
		b.y = CANVAS_HEIGHT_HALF;
		b.regX = .5 * q.width;
		b.regY = .5 * q.height;
		m.addChild(b);
		q =
			new createjs.Text(TEXT_PAUSE, "80px " + FONT2, "#ffffff");
		q.x = .5 * CANVAS_WIDTH;
		q.y = .5 * CANVAS_HEIGHT - 200;
		q.textAlign = "center";
		q.lineWidth = 600;
		m.addChild(q);
		q = s_oSpriteLibrary.getSprite("but_continue");
		e = new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 70, q, m);
		e.addEventListenerWithParams(ON_MOUSE_UP, this._onLeavePause, this, m);
		e.pulseAnimation();
		s_oStage.addChild(m);
		s_oGame.pause(!0)
	};
	this.unload = function() {
		p.removeAllEventListeners();
		e.unload();
		e = null;
		s_oStage.removeChild(void 0)
	};
	this._onLeavePause = function(m) {
		s_oGame.pause(!1);
		createjs.Tween.get(m).to({
			alpha: 0
		}, 100, createjs.quartIn).call(function() {
			s_oInterface.unloadPause()
		})
	};
	this._init();
	return this
}

function CAreYouSurePanel(p) {
	var e, m, q, b, d, a;
	this._init = function() {
		d = new createjs.Container;
		d.alpha = 0;
		h.addChild(d);
		a = new createjs.Shape;
		a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		a.alpha = .5;
		a.on("click", function() {});
		d.addChild(a);
		var k = s_oSpriteLibrary.getSprite("msg_box");
		e = createBitmap(k);
		e.x = CANVAS_WIDTH_HALF;
		e.y = CANVAS_HEIGHT_HALF;
		e.regX = .5 * k.width;
		e.regY = .5 * k.height;
		d.addChild(e);
		m = new createjs.Text(TEXT_ARE_SURE, "70px " + FONT2, "#ffffff");
		m.x = CANVAS_WIDTH / 2 + 10;
		m.y =
			CANVAS_HEIGHT_HALF - 120;
		m.textAlign = "center";
		m.textBaseline = "middle";
		m.lineWidth = 450;
		d.addChild(m);
		q = new CGfxButton(CANVAS_WIDTH / 2 + 160, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_yes"), d);
		q.addEventListener(ON_MOUSE_UP, this._onButYes, this);
		b = new CGfxButton(CANVAS_WIDTH / 2 - 160, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_no"), d);
		b.addEventListener(ON_MOUSE_UP, this._onButNo, this)
	};
	this.show = function() {
		createjs.Tween.get(d).to({
			alpha: 1
		}, 150, createjs.quartOut).call(function() {
			s_oGame.pause(!0)
		})
	};
	this.unload = function() {
		createjs.Tween.get(d).to({
			alpha: 0
		}, 150, createjs.quartOut).call(function() {
			h.removeChild(d, a)
		})
	};
	this._onButYes = function() {
		createjs.Ticker.paused = !1;
		this.unload();
		s_oGame.onExit();
		a.removeAllEventListeners()
	};
	this._onButNo = function() {
		s_oGame.pause(!1);
		this.unload();
		a.removeAllEventListeners()
	};
	var h = p;
	this._init()
}! function(p) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = p();
	else {
		var e;
		"undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self);
		e.CANNON = p()
	}
}(function() {
	return function b(e, m, q) {
		function d(k, c) {
			if (!m[k]) {
				if (!e[k]) {
					var f = "function" == typeof require && require;
					if (!c && f) return f(k, !0);
					if (a) return a(k, !0);
					throw Error("Cannot find module '" + k + "'");
				}
				f = m[k] = {
					exports: {}
				};
				e[k][0].call(f.exports, function(g) {
					var n = e[k][1][g];
					return d(n ?
						n : g)
				}, f, f.exports, b, e, m, q)
			}
			return m[k].exports
		}
		for (var a = "function" == typeof require && require, h = 0; h < q.length; h++) d(q[h]);
		return d
	}({
		1: [function(e, m, q) {
			m.exports = {
				name: "cannon",
				version: "0.6.2",
				description: "A lightweight 3D physics engine written in JavaScript.",
				homepage: "https://github.com/schteppe/cannon.js",
				author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
				keywords: ["cannon.js", "cannon", "physics", "engine", "3d"],
				main: "./build/cannon.js",
				engines: {
					node: "*"
				},
				repository: {
					type: "git",
					url: "https://github.com/schteppe/cannon.js.git"
				},
				bugs: {
					url: "https://github.com/schteppe/cannon.js/issues"
				},
				licenses: [{
					type: "MIT"
				}],
				devDependencies: {
					jshint: "latest",
					"uglify-js": "latest",
					nodeunit: "^0.9.0",
					grunt: "~0.4.0",
					"grunt-contrib-jshint": "~0.1.1",
					"grunt-contrib-nodeunit": "^0.4.1",
					"grunt-contrib-concat": "~0.1.3",
					"grunt-contrib-uglify": "^0.5.1",
					"grunt-browserify": "^2.1.4",
					"grunt-contrib-yuidoc": "^0.5.2",
					browserify: "*"
				},
				dependencies: {}
			}
		}, {}],
		2: [function(e, m, q) {
			m.exports = {
				version: e("../package.json").version,
				AABB: e("./collision/AABB"),
				ArrayCollisionMatrix: e("./collision/ArrayCollisionMatrix"),
				Body: e("./objects/Body"),
				Box: e("./shapes/Box"),
				Broadphase: e("./collision/Broadphase"),
				Constraint: e("./constraints/Constraint"),
				ContactEquation: e("./equations/ContactEquation"),
				Narrowphase: e("./world/Narrowphase"),
				ConeTwistConstraint: e("./constraints/ConeTwistConstraint"),
				ContactMaterial: e("./material/ContactMaterial"),
				ConvexPolyhedron: e("./shapes/ConvexPolyhedron"),
				Cylinder: e("./shapes/Cylinder"),
				DistanceConstraint: e("./constraints/DistanceConstraint"),
				Equation: e("./equations/Equation"),
				EventTarget: e("./utils/EventTarget"),
				FrictionEquation: e("./equations/FrictionEquation"),
				GSSolver: e("./solver/GSSolver"),
				GridBroadphase: e("./collision/GridBroadphase"),
				Heightfield: e("./shapes/Heightfield"),
				HingeConstraint: e("./constraints/HingeConstraint"),
				LockConstraint: e("./constraints/LockConstraint"),
				Mat3: e("./math/Mat3"),
				Material: e("./material/Material"),
				NaiveBroadphase: e("./collision/NaiveBroadphase"),
				ObjectCollisionMatrix: e("./collision/ObjectCollisionMatrix"),
				Pool: e("./utils/Pool"),
				Particle: e("./shapes/Particle"),
				Plane: e("./shapes/Plane"),
				PointToPointConstraint: e("./constraints/PointToPointConstraint"),
				Quaternion: e("./math/Quaternion"),
				Ray: e("./collision/Ray"),
				RaycastVehicle: e("./objects/RaycastVehicle"),
				RaycastResult: e("./collision/RaycastResult"),
				RigidVehicle: e("./objects/RigidVehicle"),
				RotationalEquation: e("./equations/RotationalEquation"),
				RotationalMotorEquation: e("./equations/RotationalMotorEquation"),
				SAPBroadphase: e("./collision/SAPBroadphase"),
				SPHSystem: e("./objects/SPHSystem"),
				Shape: e("./shapes/Shape"),
				Solver: e("./solver/Solver"),
				Sphere: e("./shapes/Sphere"),
				SplitSolver: e("./solver/SplitSolver"),
				Spring: e("./objects/Spring"),
				Trimesh: e("./shapes/Trimesh"),
				Vec3: e("./math/Vec3"),
				Vec3Pool: e("./utils/Vec3Pool"),
				World: e("./world/World")
			}
		}, {
			"../package.json": 1,
			"./collision/AABB": 3,
			"./collision/ArrayCollisionMatrix": 4,
			"./collision/Broadphase": 5,
			"./collision/GridBroadphase": 6,
			"./collision/NaiveBroadphase": 7,
			"./collision/ObjectCollisionMatrix": 8,
			"./collision/Ray": 9,
			"./collision/RaycastResult": 10,
			"./collision/SAPBroadphase": 11,
			"./constraints/ConeTwistConstraint": 12,
			"./constraints/Constraint": 13,
			"./constraints/DistanceConstraint": 14,
			"./constraints/HingeConstraint": 15,
			"./constraints/LockConstraint": 16,
			"./constraints/PointToPointConstraint": 17,
			"./equations/ContactEquation": 19,
			"./equations/Equation": 20,
			"./equations/FrictionEquation": 21,
			"./equations/RotationalEquation": 22,
			"./equations/RotationalMotorEquation": 23,
			"./material/ContactMaterial": 24,
			"./material/Material": 25,
			"./math/Mat3": 27,
			"./math/Quaternion": 28,
			"./math/Vec3": 30,
			"./objects/Body": 31,
			"./objects/RaycastVehicle": 32,
			"./objects/RigidVehicle": 33,
			"./objects/SPHSystem": 34,
			"./objects/Spring": 35,
			"./shapes/Box": 37,
			"./shapes/ConvexPolyhedron": 38,
			"./shapes/Cylinder": 39,
			"./shapes/Heightfield": 40,
			"./shapes/Particle": 41,
			"./shapes/Plane": 42,
			"./shapes/Shape": 43,
			"./shapes/Sphere": 44,
			"./shapes/Trimesh": 45,
			"./solver/GSSolver": 46,
			"./solver/Solver": 47,
			"./solver/SplitSolver": 48,
			"./utils/EventTarget": 49,
			"./utils/Pool": 51,
			"./utils/Vec3Pool": 54,
			"./world/Narrowphase": 55,
			"./world/World": 56
		}],
		3: [function(e, m, q) {
			function b(k) {
				k = k || {};
				this.lowerBound = new d;
				k.lowerBound && this.lowerBound.copy(k.lowerBound);
				this.upperBound = new d;
				k.upperBound && this.upperBound.copy(k.upperBound)
			}
			var d = e("../math/Vec3");
			e("../utils/Utils");
			m.exports = b;
			var a = new d;
			b.prototype.setFromPoints = function(k, c, f, g) {
				var n = this.lowerBound,
					l = this.upperBound;
				n.copy(k[0]);
				f && f.vmult(n, n);
				l.copy(n);
				for (var r = 1; r < k.length; r++) {
					var t = k[r];
					f && (f.vmult(t, a), t = a);
					t.x > l.x && (l.x = t.x);
					t.x < n.x && (n.x = t.x);
					t.y > l.y && (l.y = t.y);
					t.y < n.y && (n.y = t.y);
					t.z > l.z && (l.z = t.z);
					t.z < n.z && (n.z =
						t.z)
				}
				c && (c.vadd(n, n), c.vadd(l, l));
				g && (n.x -= g, n.y -= g, n.z -= g, l.x += g, l.y += g, l.z += g);
				return this
			};
			b.prototype.copy = function(k) {
				this.lowerBound.copy(k.lowerBound);
				this.upperBound.copy(k.upperBound);
				return this
			};
			b.prototype.clone = function() {
				return (new b).copy(this)
			};
			b.prototype.extend = function(k) {
				var c = k.lowerBound.x;
				this.lowerBound.x > c && (this.lowerBound.x = c);
				c = k.upperBound.x;
				this.upperBound.x < c && (this.upperBound.x = c);
				c = k.lowerBound.y;
				this.lowerBound.y > c && (this.lowerBound.y = c);
				c = k.upperBound.y;
				this.upperBound.y <
					c && (this.upperBound.y = c);
				c = k.lowerBound.z;
				this.lowerBound.z > c && (this.lowerBound.z = c);
				c = k.upperBound.z;
				this.upperBound.z < c && (this.upperBound.z = c)
			};
			b.prototype.overlaps = function(k) {
				var c = this.lowerBound,
					f = this.upperBound,
					g = k.lowerBound;
				k = k.upperBound;
				return (g.x <= f.x && f.x <= k.x || c.x <= k.x && k.x <= f.x) && (g.y <= f.y && f.y <= k.y || c.y <= k.y && k.y <= f.y) && (g.z <= f.z && f.z <= k.z || c.z <= k.z && k.z <= f.z)
			};
			b.prototype.contains = function(k) {
				var c = this.lowerBound,
					f = this.upperBound,
					g = k.lowerBound;
				k = k.upperBound;
				return c.x <= g.x &&
					f.x >= k.x && c.y <= g.y && f.y >= k.y && c.z <= g.z && f.z >= k.z
			};
			b.prototype.getCorners = function(k, c, f, g, n, l, r, t) {
				var v = this.lowerBound,
					z = this.upperBound;
				k.copy(v);
				c.set(z.x, v.y, v.z);
				f.set(z.x, z.y, v.z);
				g.set(v.x, z.y, z.z);
				n.set(z.x, v.y, v.z);
				l.set(v.x, z.y, v.z);
				r.set(v.x, v.y, z.z);
				t.copy(z)
			};
			var h = [new d, new d, new d, new d, new d, new d, new d, new d];
			b.prototype.toLocalFrame = function(k, c) {
				this.getCorners(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
				for (var f = 0; 8 !== f; f++) {
					var g = h[f];
					k.pointToLocal(g, g)
				}
				return c.setFromPoints(h)
			};
			b.prototype.toWorldFrame = function(k, c) {
				this.getCorners(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
				for (var f = 0; 8 !== f; f++) {
					var g = h[f];
					k.pointToWorld(g, g)
				}
				return c.setFromPoints(h)
			}
		}, {
			"../math/Vec3": 30,
			"../utils/Utils": 53
		}],
		4: [function(e, m, q) {
			function b() {
				this.matrix = []
			}
			m.exports = b;
			b.prototype.get = function(d, a) {
				d = d.index;
				a = a.index;
				if (a > d) {
					var h = a;
					a = d;
					d = h
				}
				return this.matrix[(d * (d + 1) >> 1) + a - 1]
			};
			b.prototype.set = function(d, a, h) {
				d = d.index;
				a = a.index;
				if (a > d) {
					var k = a;
					a = d;
					d = k
				}
				this.matrix[(d * (d + 1) >> 1) + a - 1] = h ? 1 : 0
			};
			b.prototype.reset = function() {
				for (var d = 0, a = this.matrix.length; d !== a; d++) this.matrix[d] = 0
			};
			b.prototype.setNumObjects = function(d) {
				this.matrix.length = d * (d - 1) >> 1
			}
		}, {}],
		5: [function(e, m, q) {
			function b() {
				this.world = null;
				this.useBoundingBoxes = !1;
				this.dirty = !0
			}
			var d = e("../objects/Body");
			q = e("../math/Vec3");
			var a = e("../math/Quaternion");
			e("../shapes/Shape");
			e("../shapes/Plane");
			m.exports = b;
			b.prototype.collisionPairs = function(l, r, t) {
				throw Error("collisionPairs not implemented for this BroadPhase class!");
			};
			var h =
				d.STATIC | d.KINEMATIC;
			b.prototype.needBroadphaseCollision = function(l, r) {
				return 0 !== (l.collisionFilterGroup & r.collisionFilterMask) && 0 !== (r.collisionFilterGroup & l.collisionFilterMask) && (0 === (l.type & h) && l.sleepState !== d.SLEEPING || 0 === (r.type & h) && r.sleepState !== d.SLEEPING) ? !0 : !1
			};
			b.prototype.intersectionTest = function(l, r, t, v) {
				this.useBoundingBoxes ? this.doBoundingBoxBroadphase(l, r, t, v) : this.doBoundingSphereBroadphase(l, r, t, v)
			};
			var k = new q;
			new q;
			new a;
			new q;
			b.prototype.doBoundingSphereBroadphase = function(l,
				r, t, v) {
				r.position.vsub(l.position, k);
				var z = Math.pow(l.boundingRadius + r.boundingRadius, 2);
				k.norm2() < z && (t.push(l), v.push(r))
			};
			b.prototype.doBoundingBoxBroadphase = function(l, r, t, v) {
				l.aabbNeedsUpdate && l.computeAABB();
				r.aabbNeedsUpdate && r.computeAABB();
				l.aabb.overlaps(r.aabb) && (t.push(l), v.push(r))
			};
			var c = {
					keys: []
				},
				f = [],
				g = [];
			b.prototype.makePairsUnique = function(l, r) {
				for (var t = l.length, v = 0; v !== t; v++) f[v] = l[v], g[v] = r[v];
				l.length = 0;
				for (v = r.length = 0; v !== t; v++) {
					var z = f[v].id,
						y = g[v].id;
					z = z < y ? z + "," + y : y + "," +
						z;
					c[z] = v;
					c.keys.push(z)
				}
				for (v = 0; v !== c.keys.length; v++) z = c.keys.pop(), t = c[z], l.push(f[t]), r.push(g[t]), delete c[z]
			};
			b.prototype.setWorld = function(l) {};
			var n = new q;
			b.boundingSphereCheck = function(l, r) {
				l.position.vsub(r.position, n);
				return Math.pow(l.shape.boundingSphereRadius + r.shape.boundingSphereRadius, 2) > n.norm2()
			};
			b.prototype.aabbQuery = function(l, r, t) {
				console.warn(".aabbQuery is not implemented in this Broadphase subclass.");
				return []
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"../shapes/Plane": 42,
			"../shapes/Shape": 43
		}],
		6: [function(e, m, q) {
			function b(c, f, g, n, l) {
				d.apply(this);
				this.nx = g || 10;
				this.ny = n || 10;
				this.nz = l || 10;
				this.aabbMin = c || new a(100, 100, 100);
				this.aabbMax = f || new a(-100, -100, -100);
				c = this.nx * this.ny * this.nz;
				if (0 >= c) throw "GridBroadphase: Each dimension's n must be >0";
				this.bins = [];
				this.binLengths = [];
				this.bins.length = c;
				this.binLengths.length = c;
				for (f = 0; f < c; f++) this.bins[f] = [], this.binLengths[f] = 0
			}
			m.exports = b;
			var d = e("./Broadphase"),
				a = e("../math/Vec3"),
				h = e("../shapes/Shape");
			b.prototype = new d;
			b.prototype.constructor = b;
			var k = new a;
			new a;
			b.prototype.collisionPairs = function(c, f, g) {
				function n(W, ca, da, oa, ua, ra, Da) {
					W = (W - K) * S | 0;
					ca = (ca - H) * J | 0;
					da = (da - I) * L | 0;
					oa = x((oa - K) * S);
					ua = x((ua - H) * J);
					ra = x((ra - I) * L);
					0 > W ? W = 0 : W >= v && (W = v - 1);
					0 > ca ? ca = 0 : ca >= z && (ca = z - 1);
					0 > da ? da = 0 : da >= y && (da = y - 1);
					0 > oa ? oa = 0 : oa >= v && (oa = v - 1);
					0 > ua ? ua = 0 : ua >= z && (ua = z - 1);
					0 > ra ? ra = 0 : ra >= y && (ra = y - 1);
					W *= G;
					ca *= O;
					da *= 1;
					oa *= G;
					ua *= O;
					for (ra *= 1; W <= oa; W += G)
						for (var Ra = ca; Ra <= ua; Ra += O)
							for (var Sa = da; Sa <= ra; Sa += 1) {
								var Ua = W + Ra + Sa;
								B[Ua][u[Ua]++] =
									Da
							}
				}
				var l = c.numObjects();
				c = c.bodies;
				var r = this.aabbMax,
					t = this.aabbMin,
					v = this.nx,
					z = this.ny,
					y = this.nz,
					G = z * y,
					O = y,
					Q = r.x,
					V = r.y,
					T = r.z,
					K = t.x,
					H = t.y,
					I = t.z,
					S = v / (Q - K),
					J = z / (V - H),
					L = y / (T - I);
				Q = (Q - K) / v;
				var A = (V - H) / z;
				T = (T - I) / y;
				var P = .5 * Math.sqrt(Q * Q + A * A + T * T);
				V = h.types;
				var C = V.SPHERE,
					w = V.PLANE,
					B = this.bins,
					u = this.binLengths;
				V = this.bins.length;
				for (t = 0; t !== V; t++) u[t] = 0;
				var x = Math.ceil;
				t = Math.min;
				r = Math.max;
				for (t = 0; t !== l; t++) {
					r = c[t];
					var F = r.shape;
					switch (F.type) {
						case C:
							var E = r.position.x,
								N = r.position.y,
								D = r.position.z;
							F =
								F.radius;
							n(E - F, N - F, D - F, E + F, N + F, D + F, r);
							break;
						case w:
							F.worldNormalNeedsUpdate && F.computeWorldNormal(r.quaternion);
							D = F.worldNormal;
							F = H + .5 * A - r.position.y;
							var U = I + .5 * T - r.position.z,
								aa = k;
							aa.set(K + .5 * Q - r.position.x, F, U);
							for (var R = E = 0; E !== v; E++, R += G, aa.y = F, aa.x += Q)
								for (var X = N = 0; N !== z; N++, X += O, aa.z = U, aa.y += A)
									for (var ma = 0, ja = 0; ma !== y; ma++, ja += 1, aa.z += T)
										if (aa.dot(D) < P) {
											var fa = R + X + ja;
											B[fa][u[fa]++] = r
										} break;
						default:
							r.aabbNeedsUpdate && r.computeAABB(), n(r.aabb.lowerBound.x, r.aabb.lowerBound.y, r.aabb.lowerBound.z,
								r.aabb.upperBound.x, r.aabb.upperBound.y, r.aabb.upperBound.z, r)
					}
				}
				for (t = 0; t !== V; t++)
					if (l = u[t], 1 < l)
						for (c = B[t], E = 0; E !== l; E++)
							for (r = c[E], N = 0; N !== E; N++) Q = c[N], this.needBroadphaseCollision(r, Q) && this.intersectionTest(r, Q, f, g);
				this.makePairsUnique(f, g)
			}
		}, {
			"../math/Vec3": 30,
			"../shapes/Shape": 43,
			"./Broadphase": 5
		}],
		7: [function(e, m, q) {
			function b() {
				d.apply(this)
			}
			m.exports = b;
			var d = e("./Broadphase");
			e = e("./AABB");
			b.prototype = new d;
			b.prototype.constructor = b;
			b.prototype.collisionPairs = function(a, h, k) {
				a = a.bodies;
				var c =
					a.length,
					f, g;
				for (f = 0; f !== c; f++)
					for (g = 0; g !== f; g++) {
						var n = a[f];
						var l = a[g];
						this.needBroadphaseCollision(n, l) && this.intersectionTest(n, l, h, k)
					}
			};
			new e;
			b.prototype.aabbQuery = function(a, h, k) {
				k = k || [];
				for (var c = 0; c < a.bodies.length; c++) {
					var f = a.bodies[c];
					f.aabbNeedsUpdate && f.computeAABB();
					f.aabb.overlaps(h) && k.push(f)
				}
				return k
			}
		}, {
			"./AABB": 3,
			"./Broadphase": 5
		}],
		8: [function(e, m, q) {
			function b() {
				this.matrix = {}
			}
			m.exports = b;
			b.prototype.get = function(d, a) {
				d = d.id;
				a = a.id;
				if (a > d) {
					var h = a;
					a = d;
					d = h
				}
				return d + "-" + a in this.matrix
			};
			b.prototype.set = function(d, a, h) {
				d = d.id;
				a = a.id;
				if (a > d) {
					var k = a;
					a = d;
					d = k
				}
				h ? this.matrix[d + "-" + a] = !0 : delete this.matrix[d + "-" + a]
			};
			b.prototype.reset = function() {
				this.matrix = {}
			};
			b.prototype.setNumObjects = function(d) {}
		}, {}],
		9: [function(e, m, q) {
			function b(B, u) {
				this.from = B ? B.clone() : new a;
				this.to = u ? u.clone() : new a;
				this._direction = new a;
				this.precision = 1E-4;
				this.checkCollisionResponse = !0;
				this.skipBackfaces = !1;
				this.collisionFilterGroup = this.collisionFilterMask = -1;
				this.mode = b.ANY;
				this.result = new k;
				this.hasHit = !1;
				this.callback = function(x) {}
			}

			function d(B, u, x, F) {
				F.vsub(u, C);
				x.vsub(u, g);
				B.vsub(u, n);
				B = C.dot(C);
				u = C.dot(g);
				x = C.dot(n);
				F = g.dot(g);
				var E = g.dot(n),
					N, D;
				return 0 <= (N = F * x - u * E) && 0 <= (D = B * E - u * x) && N + D < B * F - u * u
			}
			m.exports = b;
			var a = e("../math/Vec3");
			m = e("../math/Quaternion");
			var h = e("../math/Transform");
			e("../shapes/ConvexPolyhedron");
			e("../shapes/Box");
			var k = e("../collision/RaycastResult");
			q = e("../shapes/Shape");
			e = e("../collision/AABB");
			b.prototype.constructor = b;
			b.CLOSEST = 1;
			b.ANY = 2;
			b.ALL = 4;
			var c = new e,
				f = [];
			b.prototype.intersectWorld =
				function(B, u) {
					this.mode = u.mode || b.ANY;
					this.result = u.result || new k;
					this.skipBackfaces = !!u.skipBackfaces;
					this.collisionFilterMask = "undefined" !== typeof u.collisionFilterMask ? u.collisionFilterMask : -1;
					this.collisionFilterGroup = "undefined" !== typeof u.collisionFilterGroup ? u.collisionFilterGroup : -1;
					u.from && this.from.copy(u.from);
					u.to && this.to.copy(u.to);
					this.callback = u.callback || function() {};
					this.hasHit = !1;
					this.result.reset();
					this._updateDirection();
					this.getAABB(c);
					f.length = 0;
					B.broadphase.aabbQuery(B, c, f);
					this.intersectBodies(f);
					return this.hasHit
				};
			var g = new a,
				n = new a;
			b.pointInTriangle = d;
			var l = new a,
				r = new m;
			b.prototype.intersectBody = function(B, u) {
				u && (this.result = u, this._updateDirection());
				var x = this.checkCollisionResponse;
				if ((!x || B.collisionResponse) && 0 !== (this.collisionFilterGroup & B.collisionFilterMask) && 0 !== (B.collisionFilterGroup & this.collisionFilterMask))
					for (var F = 0, E = B.shapes.length; F < E; F++) {
						var N = B.shapes[F];
						if (!x || N.collisionResponse)
							if (B.quaternion.mult(B.shapeOrientations[F], r), B.quaternion.vmult(B.shapeOffsets[F],
									l), l.vadd(B.position, l), this.intersectShape(N, r, l, B), this.result._shouldStop) break
					}
			};
			b.prototype.intersectBodies = function(B, u) {
				u && (this.result = u, this._updateDirection());
				for (var x = 0, F = B.length; !this.result._shouldStop && x < F; x++) this.intersectBody(B[x])
			};
			b.prototype._updateDirection = function() {
				this.to.vsub(this.from, this._direction);
				this._direction.normalize()
			};
			b.prototype.intersectShape = function(B, u, x, F) {
				var E = this.from,
					N = this._direction;
				x.vsub(E, C);
				var D = C.dot(N);
				N.mult(D, w);
				w.vadd(E, w);
				x.distanceTo(w) >
					B.boundingSphereRadius || (E = this[B.type]) && E.call(this, B, u, x, F)
			};
			new a;
			new a;
			var t = new a,
				v = new a,
				z = new a,
				y = new a;
			new a;
			new k;
			b.prototype.intersectBox = function(B, u, x, F) {
				return this.intersectConvex(B.convexPolyhedronRepresentation, u, x, F)
			};
			b.prototype[q.types.BOX] = b.prototype.intersectBox;
			b.prototype.intersectPlane = function(B, u, x, F) {
				var E = this.from,
					N = this.to,
					D = this._direction,
					U = new a(0, 0, 1);
				u.vmult(U, U);
				var aa = new a;
				E.vsub(x, aa);
				u = aa.dot(U);
				N.vsub(x, aa);
				aa = aa.dot(U);
				if (!(0 < u * aa || E.distanceTo(N) < u || (aa =
						U.dot(D), Math.abs(aa) < this.precision))) {
					var R = new a;
					N = new a;
					u = new a;
					E.vsub(x, R);
					x = -U.dot(R) / aa;
					D.scale(x, N);
					E.vadd(N, u);
					this.reportIntersection(U, u, B, F, -1)
				}
			};
			b.prototype[q.types.PLANE] = b.prototype.intersectPlane;
			b.prototype.getAABB = function(B) {
				var u = this.to,
					x = this.from;
				B.lowerBound.x = Math.min(u.x, x.x);
				B.lowerBound.y = Math.min(u.y, x.y);
				B.lowerBound.z = Math.min(u.z, x.z);
				B.upperBound.x = Math.max(u.x, x.x);
				B.upperBound.y = Math.max(u.y, x.y);
				B.upperBound.z = Math.max(u.z, x.z)
			};
			var G = {
				faceList: [0]
			};
			b.prototype.intersectHeightfield =
				function(B, u, x, F) {
					var E = new a,
						N = new b(this.from, this.to);
					h.pointToLocalFrame(x, u, N.from, N.from);
					h.pointToLocalFrame(x, u, N.to, N.to);
					var D = [],
						U = null,
						aa = null,
						R = null,
						X = null,
						ma = B.getIndexOfPosition(N.from.x, N.from.y, D, !1);
					ma && (U = D[0], aa = D[1], R = D[0], X = D[1]);
					if (ma = B.getIndexOfPosition(N.to.x, N.to.y, D, !1)) {
						if (null === U || D[0] < U) U = D[0];
						if (null === R || D[0] > R) R = D[0];
						if (null === aa || D[1] < aa) aa = D[1];
						if (null === X || D[1] > X) X = D[1]
					}
					if (null !== U)
						for (B.getRectMinMax(U, aa, R, X, []), N = U; N <= R; N++)
							for (D = aa; D <= X; D++) {
								if (this.result._shouldStop) return;
								B.getConvexTrianglePillar(N, D, !1);
								h.pointToWorldFrame(x, u, B.pillarOffset, E);
								this.intersectConvex(B.pillarConvex, u, E, F, G);
								if (this.result._shouldStop) return;
								B.getConvexTrianglePillar(N, D, !0);
								h.pointToWorldFrame(x, u, B.pillarOffset, E);
								this.intersectConvex(B.pillarConvex, u, E, F, G)
							}
				};
			b.prototype[q.types.HEIGHTFIELD] = b.prototype.intersectHeightfield;
			var O = new a,
				Q = new a;
			b.prototype.intersectSphere = function(B, u, x, F) {
				u = this.from;
				var E = this.to,
					N = Math.pow(E.x - u.x, 2) + Math.pow(E.y - u.y, 2) + Math.pow(E.z - u.z, 2),
					D = 2 *
					((E.x - u.x) * (u.x - x.x) + (E.y - u.y) * (u.y - x.y) + (E.z - u.z) * (u.z - x.z)),
					U = Math.pow(D, 2) - 4 * N * (Math.pow(u.x - x.x, 2) + Math.pow(u.y - x.y, 2) + Math.pow(u.z - x.z, 2) - Math.pow(B.radius, 2));
				if (!(0 > U))
					if (0 === U) u.lerp(E, U, O), O.vsub(x, Q), Q.normalize(), this.reportIntersection(Q, O, B, F, -1);
					else {
						var aa = (-D - Math.sqrt(U)) / (2 * N);
						N = (-D + Math.sqrt(U)) / (2 * N);
						0 <= aa && 1 >= aa && (u.lerp(E, aa, O), O.vsub(x, Q), Q.normalize(), this.reportIntersection(Q, O, B, F, -1));
						!this.result._shouldStop && 0 <= N && 1 >= N && (u.lerp(E, N, O), O.vsub(x, Q), Q.normalize(), this.reportIntersection(Q,
							O, B, F, -1))
					}
			};
			b.prototype[q.types.SPHERE] = b.prototype.intersectSphere;
			var V = new a;
			new a;
			new a;
			var T = new a;
			b.prototype.intersectConvex = function(B, u, x, F, E) {
				E = E && E.faceList || null;
				for (var N = B.faces, D = B.vertices, U = B.faceNormals, aa = this._direction, R = this.from, X = R.distanceTo(this.to), ma = E ? E.length : N.length, ja = this.result, fa = 0; !ja._shouldStop && fa < ma; fa++) {
					var W = E ? E[fa] : fa,
						ca = N[W],
						da = U[W],
						oa = u,
						ua = x;
					T.copy(D[ca[0]]);
					oa.vmult(T, T);
					T.vadd(ua, T);
					T.vsub(R, T);
					oa.vmult(da, V);
					da = aa.dot(V);
					if (!(Math.abs(da) < this.precision ||
							(da = V.dot(T) / da, 0 > da)))
						for (aa.mult(da, t), t.vadd(R, t), v.copy(D[ca[0]]), oa.vmult(v, v), ua.vadd(v, v), da = 1; !ja._shouldStop && da < ca.length - 1; da++) {
							z.copy(D[ca[da]]);
							y.copy(D[ca[da + 1]]);
							oa.vmult(z, z);
							oa.vmult(y, y);
							ua.vadd(z, z);
							ua.vadd(y, y);
							var ra = t.distanceTo(R);
							!d(t, v, z, y) && !d(t, z, v, y) || ra > X || this.reportIntersection(V, t, B, F, W)
						}
				}
			};
			b.prototype[q.types.CONVEXPOLYHEDRON] = b.prototype.intersectConvex;
			var K = new a,
				H = new a,
				I = new a,
				S = new a,
				J = new a,
				L = new a;
			new e;
			var A = [],
				P = new h;
			b.prototype.intersectTrimesh = function(B,
				u, x, F, E) {
				E = B.indices;
				var N = this.from,
					D = this.to,
					U = this._direction;
				P.position.copy(x);
				P.quaternion.copy(u);
				h.vectorToLocalFrame(x, u, U, H);
				h.pointToLocalFrame(x, u, N, I);
				h.pointToLocalFrame(x, u, D, S);
				N = I.distanceSquared(S);
				B.tree.rayQuery(this, P, A);
				D = 0;
				for (U = A.length; !this.result._shouldStop && D !== U; D++) {
					var aa = A[D];
					B.getNormal(aa, K);
					B.getVertex(E[3 * aa], v);
					v.vsub(I, T);
					var R = H.dot(K);
					R = K.dot(T) / R;
					0 > R || (H.scale(R, t), t.vadd(I, t), B.getVertex(E[3 * aa + 1], z), B.getVertex(E[3 * aa + 2], y), R = t.distanceSquared(I), !d(t, z,
						v, y) && !d(t, v, z, y) || R > N || (h.vectorToWorldFrame(u, K, J), h.pointToWorldFrame(x, u, t, L), this.reportIntersection(J, L, B, F, aa)))
				}
				A.length = 0
			};
			b.prototype[q.types.TRIMESH] = b.prototype.intersectTrimesh;
			b.prototype.reportIntersection = function(B, u, x, F, E) {
				var N = this.from,
					D = this.to,
					U = N.distanceTo(u),
					aa = this.result;
				if (!(this.skipBackfaces && 0 < B.dot(this._direction))) switch (aa.hitFaceIndex = "undefined" !== typeof E ? E : -1, this.mode) {
					case b.ALL:
						this.hasHit = !0;
						aa.set(N, D, B, u, x, F, U);
						aa.hasHit = !0;
						this.callback(aa);
						break;
					case b.CLOSEST:
						if (U <
							aa.distance || !aa.hasHit) this.hasHit = !0, aa.hasHit = !0, aa.set(N, D, B, u, x, F, U);
						break;
					case b.ANY:
						this.hasHit = !0, aa.hasHit = !0, aa.set(N, D, B, u, x, F, U), aa._shouldStop = !0
				}
			};
			var C = new a,
				w = new a
		}, {
			"../collision/AABB": 3,
			"../collision/RaycastResult": 10,
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../shapes/Box": 37,
			"../shapes/ConvexPolyhedron": 38,
			"../shapes/Shape": 43
		}],
		10: [function(e, m, q) {
			function b() {
				this.rayFromWorld = new d;
				this.rayToWorld = new d;
				this.hitNormalWorld = new d;
				this.hitPointWorld = new d;
				this.hasHit = !1;
				this.body = this.shape = null;
				this.distance = this.hitFaceIndex = -1;
				this._shouldStop = !1
			}
			var d = e("../math/Vec3");
			m.exports = b;
			b.prototype.reset = function() {
				this.rayFromWorld.setZero();
				this.rayToWorld.setZero();
				this.hitNormalWorld.setZero();
				this.hitPointWorld.setZero();
				this.hasHit = !1;
				this.body = this.shape = null;
				this.distance = this.hitFaceIndex = -1;
				this._shouldStop = !1
			};
			b.prototype.abort = function() {
				this._shouldStop = !0
			};
			b.prototype.set = function(a, h, k, c, f, g, n) {
				this.rayFromWorld.copy(a);
				this.rayToWorld.copy(h);
				this.hitNormalWorld.copy(k);
				this.hitPointWorld.copy(c);
				this.shape = f;
				this.body = g;
				this.distance = n
			}
		}, {
			"../math/Vec3": 30
		}],
		11: [function(e, m, q) {
			function b(a) {
				d.apply(this);
				this.axisList = [];
				this.world = null;
				this.axisIndex = 0;
				var h = this.axisList;
				this._addBodyHandler = function(k) {
					h.push(k.body)
				};
				this._removeBodyHandler = function(k) {
					k = h.indexOf(k.body); - 1 !== k && h.splice(k, 1)
				};
				a && this.setWorld(a)
			}
			e("../shapes/Shape");
			var d = e("../collision/Broadphase");
			m.exports = b;
			b.prototype = new d;
			b.prototype.setWorld = function(a) {
				for (var h =
						this.axisList.length = 0; h < a.bodies.length; h++) this.axisList.push(a.bodies[h]);
				a.removeEventListener("addBody", this._addBodyHandler);
				a.removeEventListener("removeBody", this._removeBodyHandler);
				a.addEventListener("addBody", this._addBodyHandler);
				a.addEventListener("removeBody", this._removeBodyHandler);
				this.world = a;
				this.dirty = !0
			};
			b.insertionSortX = function(a) {
				for (var h = 1, k = a.length; h < k; h++) {
					for (var c = a[h], f = h - 1; 0 <= f && !(a[f].aabb.lowerBound.x <= c.aabb.lowerBound.x); f--) a[f + 1] = a[f];
					a[f + 1] = c
				}
				return a
			};
			b.insertionSortY =
				function(a) {
					for (var h = 1, k = a.length; h < k; h++) {
						for (var c = a[h], f = h - 1; 0 <= f && !(a[f].aabb.lowerBound.y <= c.aabb.lowerBound.y); f--) a[f + 1] = a[f];
						a[f + 1] = c
					}
					return a
				};
			b.insertionSortZ = function(a) {
				for (var h = 1, k = a.length; h < k; h++) {
					for (var c = a[h], f = h - 1; 0 <= f && !(a[f].aabb.lowerBound.z <= c.aabb.lowerBound.z); f--) a[f + 1] = a[f];
					a[f + 1] = c
				}
				return a
			};
			b.prototype.collisionPairs = function(a, h, k) {
				a = this.axisList;
				var c = a.length,
					f = this.axisIndex,
					g, n;
				this.dirty && (this.sortList(), this.dirty = !1);
				for (g = 0; g !== c; g++) {
					var l = a[g];
					for (n = g + 1; n <
						c; n++) {
						var r = a[n];
						if (this.needBroadphaseCollision(l, r)) {
							if (!b.checkBounds(l, r, f)) break;
							this.intersectionTest(l, r, h, k)
						}
					}
				}
			};
			b.prototype.sortList = function() {
				for (var a = this.axisList, h = this.axisIndex, k = a.length, c = 0; c !== k; c++) {
					var f = a[c];
					f.aabbNeedsUpdate && f.computeAABB()
				}
				0 === h ? b.insertionSortX(a) : 1 === h ? b.insertionSortY(a) : 2 === h && b.insertionSortZ(a)
			};
			b.checkBounds = function(a, h, k) {
				if (0 === k) {
					var c = a.position.x;
					var f = h.position.x
				} else 1 === k ? (c = a.position.y, f = h.position.y) : 2 === k && (c = a.position.z, f = h.position.z);
				return f - h.boundingRadius < c + a.boundingRadius
			};
			b.prototype.autoDetectAxis = function() {
				for (var a = 0, h = 0, k = 0, c = 0, f = 0, g = 0, n = this.axisList, l = n.length, r = 1 / l, t = 0; t !== l; t++) {
					var v = n[t],
						z = v.position.x;
					a += z;
					h += z * z;
					z = v.position.y;
					k += z;
					c += z * z;
					v = v.position.z;
					f += v;
					g += v * v
				}
				a = h - a * a * r;
				k = c - k * k * r;
				f = g - f * f * r;
				this.axisIndex = a > k ? a > f ? 0 : 2 : k > f ? 1 : 2
			};
			b.prototype.aabbQuery = function(a, h, k) {
				k = k || [];
				this.dirty && (this.sortList(), this.dirty = !1);
				a = this.axisList;
				for (var c = 0; c < a.length; c++) {
					var f = a[c];
					f.aabbNeedsUpdate && f.computeAABB();
					f.aabb.overlaps(h) && k.push(f)
				}
				return k
			}
		}, {
			"../collision/Broadphase": 5,
			"../shapes/Shape": 43
		}],
		12: [function(e, m, q) {
			function b(c, f, g) {
				g = g || {};
				var n = "undefined" !== typeof g.maxForce ? g.maxForce : 1E6,
					l = g.pivotA ? g.pivotA.clone() : new k,
					r = g.pivotB ? g.pivotB.clone() : new k;
				this.axisA = g.axisA ? g.axisA.clone() : new k;
				this.axisB = g.axisB ? g.axisB.clone() : new k;
				d.call(this, c, l, f, r, n);
				this.collideConnected = !!g.collideConnected;
				this.angle = "undefined" !== typeof g.angle ? g.angle : 0;
				l = this.coneEquation = new a(c, f, g);
				c = this.twistEquation =
					new h(c, f, g);
				this.twistAngle = "undefined" !== typeof g.twistAngle ? g.twistAngle : 0;
				l.maxForce = 0;
				l.minForce = -n;
				c.maxForce = 0;
				c.minForce = -n;
				this.equations.push(l, c)
			}
			m.exports = b;
			e("./Constraint");
			var d = e("./PointToPointConstraint"),
				a = e("../equations/ConeEquation"),
				h = e("../equations/RotationalEquation");
			e("../equations/ContactEquation");
			var k = e("../math/Vec3");
			b.prototype = new d;
			b.constructor = b;
			new k;
			new k;
			b.prototype.update = function() {
				var c = this.bodyA,
					f = this.bodyB,
					g = this.coneEquation,
					n = this.twistEquation;
				d.prototype.update.call(this);
				c.vectorToWorldFrame(this.axisA, g.axisA);
				f.vectorToWorldFrame(this.axisB, g.axisB);
				this.axisA.tangents(n.axisA, n.axisA);
				c.vectorToWorldFrame(n.axisA, n.axisA);
				this.axisB.tangents(n.axisB, n.axisB);
				f.vectorToWorldFrame(n.axisB, n.axisB);
				g.angle = this.angle;
				n.maxAngle = this.twistAngle
			}
		}, {
			"../equations/ConeEquation": 18,
			"../equations/ContactEquation": 19,
			"../equations/RotationalEquation": 22,
			"../math/Vec3": 30,
			"./Constraint": 13,
			"./PointToPointConstraint": 17
		}],
		13: [function(e, m, q) {
			function b(a, h, k) {
				k = d.defaults(k, {
					collideConnected: !0,
					wakeUpBodies: !0
				});
				this.equations = [];
				this.bodyA = a;
				this.bodyB = h;
				this.id = b.idCounter++;
				this.collideConnected = k.collideConnected;
				k.wakeUpBodies && (a && a.wakeUp(), h && h.wakeUp())
			}
			m.exports = b;
			var d = e("../utils/Utils");
			b.prototype.update = function() {
				throw Error("method update() not implmemented in this Constraint subclass!");
			};
			b.prototype.enable = function() {
				for (var a = this.equations, h = 0; h < a.length; h++) a[h].enabled = !0
			};
			b.prototype.disable = function() {
				for (var a = this.equations, h = 0; h < a.length; h++) a[h].enabled = !1
			};
			b.idCounter = 0
		}, {
			"../utils/Utils": 53
		}],
		14: [function(e, m, q) {
			function b(h, k, c, f) {
				d.call(this, h, k);
				"undefined" === typeof c && (c = h.position.distanceTo(k.position));
				"undefined" === typeof f && (f = 1E6);
				this.distance = c;
				h = this.distanceEquation = new a(h, k);
				this.equations.push(h);
				h.minForce = -f;
				h.maxForce = f
			}
			m.exports = b;
			var d = e("./Constraint"),
				a = e("../equations/ContactEquation");
			b.prototype = new d;
			b.prototype.update = function() {
				var h = this.distanceEquation,
					k = .5 * this.distance,
					c = h.ni;
				this.bodyB.position.vsub(this.bodyA.position,
					c);
				c.normalize();
				c.mult(k, h.ri);
				c.mult(-k, h.rj)
			}
		}, {
			"../equations/ContactEquation": 19,
			"./Constraint": 13
		}],
		15: [function(e, m, q) {
			function b(g, n, l) {
				l = l || {};
				var r = "undefined" !== typeof l.maxForce ? l.maxForce : 1E6,
					t = l.pivotA ? l.pivotA.clone() : new k,
					v = l.pivotB ? l.pivotB.clone() : new k;
				d.call(this, g, t, n, v, r);
				(this.axisA = l.axisA ? l.axisA.clone() : new k(1, 0, 0)).normalize();
				(this.axisB = l.axisB ? l.axisB.clone() : new k(1, 0, 0)).normalize();
				t = this.rotationalEquation1 = new a(g, n, l);
				l = this.rotationalEquation2 = new a(g, n, l);
				g =
					this.motorEquation = new h(g, n, r);
				g.enabled = !1;
				this.equations.push(t, l, g)
			}
			m.exports = b;
			e("./Constraint");
			var d = e("./PointToPointConstraint"),
				a = e("../equations/RotationalEquation"),
				h = e("../equations/RotationalMotorEquation");
			e("../equations/ContactEquation");
			var k = e("../math/Vec3");
			b.prototype = new d;
			b.constructor = b;
			b.prototype.enableMotor = function() {
				this.motorEquation.enabled = !0
			};
			b.prototype.disableMotor = function() {
				this.motorEquation.enabled = !1
			};
			b.prototype.setMotorSpeed = function(g) {
				this.motorEquation.targetVelocity =
					g
			};
			b.prototype.setMotorMaxForce = function(g) {
				this.motorEquation.maxForce = g;
				this.motorEquation.minForce = -g
			};
			var c = new k,
				f = new k;
			b.prototype.update = function() {
				var g = this.bodyA,
					n = this.bodyB,
					l = this.motorEquation,
					r = this.rotationalEquation1,
					t = this.rotationalEquation2,
					v = this.axisA,
					z = this.axisB;
				d.prototype.update.call(this);
				g.quaternion.vmult(v, c);
				n.quaternion.vmult(z, f);
				c.tangents(r.axisA, t.axisA);
				r.axisB.copy(f);
				t.axisB.copy(f);
				this.motorEquation.enabled && (g.quaternion.vmult(this.axisA, l.axisA), n.quaternion.vmult(this.axisB,
					l.axisB))
			}
		}, {
			"../equations/ContactEquation": 19,
			"../equations/RotationalEquation": 22,
			"../equations/RotationalMotorEquation": 23,
			"../math/Vec3": 30,
			"./Constraint": 13,
			"./PointToPointConstraint": 17
		}],
		16: [function(e, m, q) {
			function b(k, c, f) {
				f = f || {};
				var g = "undefined" !== typeof f.maxForce ? f.maxForce : 1E6,
					n = new h,
					l = new h,
					r = new h;
				k.position.vadd(c.position, r);
				r.scale(.5, r);
				c.pointToLocalFrame(r, l);
				k.pointToLocalFrame(r, n);
				d.call(this, k, n, c, l, g);
				g = this.rotationalEquation1 = new a(k, c, f);
				n = this.rotationalEquation2 =
					new a(k, c, f);
				k = this.rotationalEquation3 = new a(k, c, f);
				this.equations.push(g, n, k)
			}
			m.exports = b;
			e("./Constraint");
			var d = e("./PointToPointConstraint"),
				a = e("../equations/RotationalEquation");
			e("../equations/RotationalMotorEquation");
			e("../equations/ContactEquation");
			var h = e("../math/Vec3");
			b.prototype = new d;
			b.constructor = b;
			new h;
			new h;
			b.prototype.update = function() {
				var k = this.bodyA,
					c = this.bodyB,
					f = this.rotationalEquation1,
					g = this.rotationalEquation2,
					n = this.rotationalEquation3;
				d.prototype.update.call(this);
				k.vectorToWorldFrame(h.UNIT_X, f.axisA);
				c.vectorToWorldFrame(h.UNIT_Y, f.axisB);
				k.vectorToWorldFrame(h.UNIT_Y, g.axisA);
				c.vectorToWorldFrame(h.UNIT_Z, g.axisB);
				k.vectorToWorldFrame(h.UNIT_Z, n.axisA);
				c.vectorToWorldFrame(h.UNIT_X, n.axisB)
			}
		}, {
			"../equations/ContactEquation": 19,
			"../equations/RotationalEquation": 22,
			"../equations/RotationalMotorEquation": 23,
			"../math/Vec3": 30,
			"./Constraint": 13,
			"./PointToPointConstraint": 17
		}],
		17: [function(e, m, q) {
			function b(k, c, f, g, n) {
				d.call(this, k, f);
				n = "undefined" !== typeof n ?
					n : 1E6;
				this.pivotA = c ? c.clone() : new h;
				this.pivotB = g ? g.clone() : new h;
				c = this.equationX = new a(k, f);
				g = this.equationY = new a(k, f);
				k = this.equationZ = new a(k, f);
				this.equations.push(c, g, k);
				c.minForce = g.minForce = k.minForce = -n;
				c.maxForce = g.maxForce = k.maxForce = n;
				c.ni.set(1, 0, 0);
				g.ni.set(0, 1, 0);
				k.ni.set(0, 0, 1)
			}
			m.exports = b;
			var d = e("./Constraint"),
				a = e("../equations/ContactEquation"),
				h = e("../math/Vec3");
			b.prototype = new d;
			b.prototype.update = function() {
				var k = this.bodyB,
					c = this.equationX,
					f = this.equationY,
					g = this.equationZ;
				this.bodyA.quaternion.vmult(this.pivotA, c.ri);
				k.quaternion.vmult(this.pivotB, c.rj);
				f.ri.copy(c.ri);
				f.rj.copy(c.rj);
				g.ri.copy(c.ri);
				g.rj.copy(c.rj)
			}
		}, {
			"../equations/ContactEquation": 19,
			"../math/Vec3": 30,
			"./Constraint": 13
		}],
		18: [function(e, m, q) {
			function b(c, f, g) {
				g = g || {};
				var n = "undefined" !== typeof g.maxForce ? g.maxForce : 1E6;
				a.call(this, c, f, -n, n);
				this.axisA = g.axisA ? g.axisA.clone() : new d(1, 0, 0);
				this.axisB = g.axisB ? g.axisB.clone() : new d(0, 1, 0);
				this.angle = "undefined" !== typeof g.angle ? g.angle : 0
			}
			m.exports = b;
			var d = e("../math/Vec3");
			e("../math/Mat3");
			var a = e("./Equation");
			b.prototype = new a;
			b.prototype.constructor = b;
			var h = new d,
				k = new d;
			b.prototype.computeB = function(c) {
				var f = this.a,
					g = this.b,
					n = this.axisA,
					l = this.axisB,
					r = this.jacobianElementA,
					t = this.jacobianElementB;
				n.cross(l, h);
				l.cross(n, k);
				r.rotational.copy(k);
				t.rotational.copy(h);
				n = Math.cos(this.angle) - n.dot(l);
				l = this.computeGW();
				r = this.computeGiMf();
				return -n * f - l * g - c * r
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		19: [function(e, m, q) {
			function b(t,
				v, z) {
				d.call(this, t, v, 0, "undefined" !== typeof z ? z : 1E6);
				this.restitution = 0;
				this.ri = new a;
				this.rj = new a;
				this.ni = new a
			}
			m.exports = b;
			var d = e("./Equation"),
				a = e("../math/Vec3");
			e("../math/Mat3");
			b.prototype = new d;
			b.prototype.constructor = b;
			var h = new a,
				k = new a,
				c = new a;
			b.prototype.computeB = function(t) {
				var v = this.a,
					z = this.b,
					y = this.bi,
					G = this.bj,
					O = this.ri,
					Q = this.rj,
					V = y.velocity,
					T = y.angularVelocity,
					K = G.velocity,
					H = G.angularVelocity,
					I = this.jacobianElementA,
					S = this.jacobianElementB,
					J = this.ni;
				O.cross(J, h);
				Q.cross(J, k);
				J.negate(I.spatial);
				h.negate(I.rotational);
				S.spatial.copy(J);
				S.rotational.copy(k);
				c.copy(G.position);
				c.vadd(Q, c);
				c.vsub(y.position, c);
				c.vsub(O, c);
				y = J.dot(c);
				G = this.restitution + 1;
				V = G * K.dot(J) - G * V.dot(J) + H.dot(k) - T.dot(h);
				T = this.computeGiMf();
				return -y * v - V * z - t * T
			};
			var f = new a,
				g = new a,
				n = new a,
				l = new a,
				r = new a;
			b.prototype.getImpactVelocityAlongNormal = function() {
				this.bi.position.vadd(this.ri, n);
				this.bj.position.vadd(this.rj, l);
				this.bi.getVelocityAtWorldPoint(n, f);
				this.bj.getVelocityAtWorldPoint(l, g);
				f.vsub(g,
					r);
				return this.ni.dot(r)
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		20: [function(e, m, q) {
			function b(l, r, t, v) {
				this.id = b.id++;
				this.minForce = "undefined" === typeof t ? -1E6 : t;
				this.maxForce = "undefined" === typeof v ? 1E6 : v;
				this.bi = l;
				this.bj = r;
				this.eps = this.b = this.a = 0;
				this.jacobianElementA = new d;
				this.jacobianElementB = new d;
				this.enabled = !0;
				this.setSpookParams(1E7, 4, 1 / 60)
			}
			m.exports = b;
			var d = e("../math/JacobianElement");
			e = e("../math/Vec3");
			b.prototype.constructor = b;
			b.id = 0;
			b.prototype.setSpookParams = function(l,
				r, t) {
				this.a = 4 / (t * (1 + 4 * r));
				this.b = 4 * r / (1 + 4 * r);
				this.eps = 4 / (t * t * l * (1 + 4 * r))
			};
			b.prototype.computeB = function(l, r, t) {
				var v = this.computeGW(),
					z = this.computeGq(),
					y = this.computeGiMf();
				return -z * l - v * r - y * t
			};
			b.prototype.computeGq = function() {
				var l = this.jacobianElementB,
					r = this.bj.position;
				return this.jacobianElementA.spatial.dot(this.bi.position) + l.spatial.dot(r)
			};
			var a = new e;
			b.prototype.computeGW = function() {
				var l = this.jacobianElementB,
					r = this.bi,
					t = this.bj,
					v = t.velocity;
				t = t.angularVelocity || a;
				return this.jacobianElementA.multiplyVectors(r.velocity,
					r.angularVelocity || a) + l.multiplyVectors(v, t)
			};
			b.prototype.computeGWlambda = function() {
				var l = this.jacobianElementB,
					r = this.bi,
					t = this.bj,
					v = t.vlambda;
				t = t.wlambda || a;
				return this.jacobianElementA.multiplyVectors(r.vlambda, r.wlambda || a) + l.multiplyVectors(v, t)
			};
			var h = new e,
				k = new e,
				c = new e,
				f = new e;
			b.prototype.computeGiMf = function() {
				var l = this.jacobianElementA,
					r = this.jacobianElementB,
					t = this.bi,
					v = this.bj,
					z = t.force,
					y = t.torque,
					G = v.force,
					O = v.torque,
					Q = t.invMassSolve,
					V = v.invMassSolve;
				t.invInertiaWorldSolve ? t.invInertiaWorldSolve.vmult(y,
					c) : c.set(0, 0, 0);
				v.invInertiaWorldSolve ? v.invInertiaWorldSolve.vmult(O, f) : f.set(0, 0, 0);
				z.mult(Q, h);
				G.mult(V, k);
				return l.multiplyVectors(h, c) + r.multiplyVectors(k, f)
			};
			var g = new e;
			b.prototype.computeGiMGt = function() {
				var l = this.jacobianElementA,
					r = this.jacobianElementB,
					t = this.bi,
					v = this.bj,
					z = t.invInertiaWorldSolve,
					y = v.invInertiaWorldSolve;
				t = t.invMassSolve + v.invMassSolve;
				z && (z.vmult(l.rotational, g), t += g.dot(l.rotational));
				y && (y.vmult(r.rotational, g), t += g.dot(r.rotational));
				return t
			};
			var n = new e;
			new e;
			new e;
			new e;
			new e;
			new e;
			b.prototype.addToWlambda = function(l) {
				var r = this.jacobianElementA,
					t = this.jacobianElementB,
					v = this.bi,
					z = this.bj;
				r.spatial.mult(v.invMassSolve * l, n);
				v.vlambda.vadd(n, v.vlambda);
				t.spatial.mult(z.invMassSolve * l, n);
				z.vlambda.vadd(n, z.vlambda);
				v.invInertiaWorldSolve && (v.invInertiaWorldSolve.vmult(r.rotational, n), n.mult(l, n), v.wlambda.vadd(n, v.wlambda));
				z.invInertiaWorldSolve && (z.invInertiaWorldSolve.vmult(t.rotational, n), n.mult(l, n), z.wlambda.vadd(n, z.wlambda))
			};
			b.prototype.computeC = function() {
				return this.computeGiMGt() +
					this.eps
			}
		}, {
			"../math/JacobianElement": 26,
			"../math/Vec3": 30
		}],
		21: [function(e, m, q) {
			function b(c, f, g) {
				d.call(this, c, f, -g, g);
				this.ri = new a;
				this.rj = new a;
				this.t = new a
			}
			m.exports = b;
			var d = e("./Equation"),
				a = e("../math/Vec3");
			e("../math/Mat3");
			b.prototype = new d;
			b.prototype.constructor = b;
			var h = new a,
				k = new a;
			b.prototype.computeB = function(c) {
				var f = this.b,
					g = this.rj,
					n = this.t;
				this.ri.cross(n, h);
				g.cross(n, k);
				g = this.jacobianElementA;
				var l = this.jacobianElementB;
				n.negate(g.spatial);
				h.negate(g.rotational);
				l.spatial.copy(n);
				l.rotational.copy(k);
				n = this.computeGW();
				g = this.computeGiMf();
				return -n * f - c * g
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		22: [function(e, m, q) {
			function b(c, f, g) {
				g = g || {};
				var n = "undefined" !== typeof g.maxForce ? g.maxForce : 1E6;
				a.call(this, c, f, -n, n);
				this.axisA = g.axisA ? g.axisA.clone() : new d(1, 0, 0);
				this.axisB = g.axisB ? g.axisB.clone() : new d(0, 1, 0);
				this.maxAngle = Math.PI / 2
			}
			m.exports = b;
			var d = e("../math/Vec3");
			e("../math/Mat3");
			var a = e("./Equation");
			b.prototype = new a;
			b.prototype.constructor = b;
			var h = new d,
				k = new d;
			b.prototype.computeB = function(c) {
				var f = this.a,
					g = this.b,
					n = this.axisA,
					l = this.axisB,
					r = this.jacobianElementA,
					t = this.jacobianElementB;
				n.cross(l, h);
				l.cross(n, k);
				r.rotational.copy(k);
				t.rotational.copy(h);
				n = Math.cos(this.maxAngle) - n.dot(l);
				l = this.computeGW();
				r = this.computeGiMf();
				return -n * f - l * g - c * r
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		23: [function(e, m, q) {
			function b(h, k, c) {
				c = "undefined" !== typeof c ? c : 1E6;
				a.call(this, h, k, -c, c);
				this.axisA = new d;
				this.axisB = new d;
				this.targetVelocity =
					0
			}
			m.exports = b;
			var d = e("../math/Vec3");
			e("../math/Mat3");
			var a = e("./Equation");
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeB = function(h) {
				var k = this.b,
					c = this.axisB,
					f = this.jacobianElementB;
				this.jacobianElementA.rotational.copy(this.axisA);
				c.negate(f.rotational);
				c = this.computeGW() - this.targetVelocity;
				f = this.computeGiMf();
				return -c * k - h * f
			}
		}, {
			"../math/Mat3": 27,
			"../math/Vec3": 30,
			"./Equation": 20
		}],
		24: [function(e, m, q) {
			function b(a, h, k) {
				k = d.defaults(k, {
					friction: .3,
					restitution: .3,
					contactEquationStiffness: 1E7,
					contactEquationRelaxation: 3,
					frictionEquationStiffness: 1E7,
					frictionEquationRelaxation: 3
				});
				this.id = b.idCounter++;
				this.materials = [a, h];
				this.friction = k.friction;
				this.restitution = k.restitution;
				this.contactEquationStiffness = k.contactEquationStiffness;
				this.contactEquationRelaxation = k.contactEquationRelaxation;
				this.frictionEquationStiffness = k.frictionEquationStiffness;
				this.frictionEquationRelaxation = k.frictionEquationRelaxation
			}
			var d = e("../utils/Utils");
			m.exports = b;
			b.idCounter = 0
		}, {
			"../utils/Utils": 53
		}],
		25: [function(e,
			m, q) {
			function b(d) {
				var a = "";
				d = d || {};
				"string" === typeof d ? (a = d, d = {}) : "object" === typeof d && (a = "");
				this.name = a;
				this.id = b.idCounter++;
				this.friction = "undefined" !== typeof d.friction ? d.friction : -1;
				this.restitution = "undefined" !== typeof d.restitution ? d.restitution : -1
			}
			m.exports = b;
			b.idCounter = 0
		}, {}],
		26: [function(e, m, q) {
			function b() {
				this.spatial = new d;
				this.rotational = new d
			}
			m.exports = b;
			var d = e("./Vec3");
			b.prototype.multiplyElement = function(a) {
				return a.spatial.dot(this.spatial) + a.rotational.dot(this.rotational)
			};
			b.prototype.multiplyVectors = function(a, h) {
				return a.dot(this.spatial) + h.dot(this.rotational)
			}
		}, {
			"./Vec3": 30
		}],
		27: [function(e, m, q) {
			function b(a) {
				this.elements = a ? a : [0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
			m.exports = b;
			var d = e("./Vec3");
			b.prototype.identity = function() {
				var a = this.elements;
				a[0] = 1;
				a[1] = 0;
				a[2] = 0;
				a[3] = 0;
				a[4] = 1;
				a[5] = 0;
				a[6] = 0;
				a[7] = 0;
				a[8] = 1
			};
			b.prototype.setZero = function() {
				var a = this.elements;
				a[0] = 0;
				a[1] = 0;
				a[2] = 0;
				a[3] = 0;
				a[4] = 0;
				a[5] = 0;
				a[6] = 0;
				a[7] = 0;
				a[8] = 0
			};
			b.prototype.setTrace = function(a) {
				var h = this.elements;
				h[0] = a.x;
				h[4] = a.y;
				h[8] = a.z
			};
			b.prototype.getTrace = function(a) {
				a = a || new d;
				var h = this.elements;
				a.x = h[0];
				a.y = h[4];
				a.z = h[8]
			};
			b.prototype.vmult = function(a, h) {
				h = h || new d;
				var k = this.elements,
					c = a.x,
					f = a.y,
					g = a.z;
				h.x = k[0] * c + k[1] * f + k[2] * g;
				h.y = k[3] * c + k[4] * f + k[5] * g;
				h.z = k[6] * c + k[7] * f + k[8] * g;
				return h
			};
			b.prototype.smult = function(a) {
				for (var h = 0; h < this.elements.length; h++) this.elements[h] *= a
			};
			b.prototype.mmult = function(a, h) {
				for (var k = h || new b, c = 0; 3 > c; c++)
					for (var f = 0; 3 > f; f++) {
						for (var g = 0, n = 0; 3 > n; n++) g += a.elements[c + 3 * n] * this.elements[n +
							3 * f];
						k.elements[c + 3 * f] = g
					}
				return k
			};
			b.prototype.scale = function(a, h) {
				h = h || new b;
				for (var k = this.elements, c = h.elements, f = 0; 3 !== f; f++) c[3 * f] = a.x * k[3 * f], c[3 * f + 1] = a.y * k[3 * f + 1], c[3 * f + 2] = a.z * k[3 * f + 2];
				return h
			};
			b.prototype.solve = function(a, h) {
				h = h || new d;
				for (var k = [], c = 0; 12 > c; c++) k.push(0);
				var f;
				for (c = 0; 3 > c; c++)
					for (f = 0; 3 > f; f++) k[c + 4 * f] = this.elements[c + 3 * f];
				k[3] = a.x;
				k[7] = a.y;
				k[11] = a.z;
				var g = 3,
					n = g;
				do {
					c = n - g;
					if (0 === k[c + 4 * c])
						for (f = c + 1; f < n; f++)
							if (0 !== k[c + 4 * f]) {
								var l = 4;
								do {
									var r = 4 - l;
									k[r + 4 * c] += k[r + 4 * f]
								} while (--l);
								break
							} if (0 !==
						k[c + 4 * c])
						for (f = c + 1; f < n; f++) {
							var t = k[c + 4 * f] / k[c + 4 * c];
							l = 4;
							do r = 4 - l, k[r + 4 * f] = r <= c ? 0 : k[r + 4 * f] - k[r + 4 * c] * t; while (--l)
						}
				} while (--g);
				h.z = k[11] / k[10];
				h.y = (k[7] - k[6] * h.z) / k[5];
				h.x = (k[3] - k[2] * h.z - k[1] * h.y) / k[0];
				if (isNaN(h.x) || isNaN(h.y) || isNaN(h.z) || Infinity === h.x || Infinity === h.y || Infinity === h.z) throw "Could not solve equation! Got x=[" + h.toString() + "], b=[" + a.toString() + "], A=[" + this.toString() + "]";
				return h
			};
			b.prototype.e = function(a, h, k) {
				if (void 0 === k) return this.elements[h + 3 * a];
				this.elements[h + 3 * a] = k
			};
			b.prototype.copy =
				function(a) {
					for (var h = 0; h < a.elements.length; h++) this.elements[h] = a.elements[h];
					return this
				};
			b.prototype.toString = function() {
				for (var a = "", h = 0; 9 > h; h++) a += this.elements[h] + ",";
				return a
			};
			b.prototype.reverse = function(a) {
				a = a || new b;
				for (var h = [], k = 0; 18 > k; k++) h.push(0);
				var c;
				for (k = 0; 3 > k; k++)
					for (c = 0; 3 > c; c++) h[k + 6 * c] = this.elements[k + 3 * c];
				h[3] = 1;
				h[9] = 0;
				h[15] = 0;
				h[4] = 0;
				h[10] = 1;
				h[16] = 0;
				h[5] = 0;
				h[11] = 0;
				h[17] = 1;
				var f = 3,
					g = f;
				do {
					k = g - f;
					if (0 === h[k + 6 * k])
						for (c = k + 1; c < g; c++)
							if (0 !== h[k + 6 * c]) {
								var n = 6;
								do {
									var l = 6 - n;
									h[l + 6 * k] +=
										h[l + 6 * c]
								} while (--n);
								break
							} if (0 !== h[k + 6 * k])
						for (c = k + 1; c < g; c++) {
							var r = h[k + 6 * c] / h[k + 6 * k];
							n = 6;
							do l = 6 - n, h[l + 6 * c] = l <= k ? 0 : h[l + 6 * c] - h[l + 6 * k] * r; while (--n)
						}
				} while (--f);
				k = 2;
				do {
					c = k - 1;
					do {
						r = h[k + 6 * c] / h[k + 6 * k];
						n = 6;
						do l = 6 - n, h[l + 6 * c] -= h[l + 6 * k] * r; while (--n)
					} while (c--)
				} while (--k);
				k = 2;
				do {
					r = 1 / h[k + 6 * k];
					n = 6;
					do l = 6 - n, h[l + 6 * k] *= r; while (--n)
				} while (k--);
				k = 2;
				do {
					c = 2;
					do {
						l = h[3 + c + 6 * k];
						if (isNaN(l) || Infinity === l) throw "Could not reverse! A=[" + this.toString() + "]";
						a.e(k, c, l)
					} while (c--)
				} while (k--);
				return a
			};
			b.prototype.setRotationFromQuaternion =
				function(a) {
					var h = a.x,
						k = a.y,
						c = a.z,
						f = a.w,
						g = h + h,
						n = k + k,
						l = c + c;
					a = h * g;
					var r = h * n;
					h *= l;
					var t = k * n;
					k *= l;
					c *= l;
					g *= f;
					n *= f;
					f *= l;
					l = this.elements;
					l[0] = 1 - (t + c);
					l[1] = r - f;
					l[2] = h + n;
					l[3] = r + f;
					l[4] = 1 - (a + c);
					l[5] = k - g;
					l[6] = h - n;
					l[7] = k + g;
					l[8] = 1 - (a + t);
					return this
				};
			b.prototype.transpose = function(a) {
				a = a || new b;
				for (var h = a.elements, k = this.elements, c = 0; 3 !== c; c++)
					for (var f = 0; 3 !== f; f++) h[3 * c + f] = k[3 * f + c];
				return a
			}
		}, {
			"./Vec3": 30
		}],
		28: [function(e, m, q) {
			function b(g, n, l, r) {
				this.x = void 0 !== g ? g : 0;
				this.y = void 0 !== n ? n : 0;
				this.z = void 0 !== l ? l :
					0;
				this.w = void 0 !== r ? r : 1
			}
			m.exports = b;
			var d = e("./Vec3");
			b.prototype.set = function(g, n, l, r) {
				this.x = g;
				this.y = n;
				this.z = l;
				this.w = r
			};
			b.prototype.toString = function() {
				return this.x + "," + this.y + "," + this.z + "," + this.w
			};
			b.prototype.toArray = function() {
				return [this.x, this.y, this.z, this.w]
			};
			b.prototype.setFromAxisAngle = function(g, n) {
				var l = Math.sin(.5 * n);
				this.x = g.x * l;
				this.y = g.y * l;
				this.z = g.z * l;
				this.w = Math.cos(.5 * n)
			};
			b.prototype.toAxisAngle = function(g) {
				g = g || new d;
				this.normalize();
				var n = 2 * Math.acos(this.w),
					l = Math.sqrt(1 -
						this.w * this.w);
				.001 > l ? (g.x = this.x, g.y = this.y, g.z = this.z) : (g.x = this.x / l, g.y = this.y / l, g.z = this.z / l);
				return [g, n]
			};
			var a = new d,
				h = new d;
			b.prototype.setFromVectors = function(g, n) {
				if (g.isAntiparallelTo(n)) g.tangents(a, h), this.setFromAxisAngle(a, Math.PI);
				else {
					var l = g.cross(n);
					this.x = l.x;
					this.y = l.y;
					this.z = l.z;
					this.w = Math.sqrt(Math.pow(g.norm(), 2) * Math.pow(n.norm(), 2)) + g.dot(n);
					this.normalize()
				}
			};
			var k = new d,
				c = new d,
				f = new d;
			b.prototype.mult = function(g, n) {
				n = n || new b;
				var l = this.w;
				k.set(this.x, this.y, this.z);
				c.set(g.x,
					g.y, g.z);
				n.w = l * g.w - k.dot(c);
				k.cross(c, f);
				n.x = l * c.x + g.w * k.x + f.x;
				n.y = l * c.y + g.w * k.y + f.y;
				n.z = l * c.z + g.w * k.z + f.z;
				return n
			};
			b.prototype.inverse = function(g) {
				var n = this.x,
					l = this.y,
					r = this.z,
					t = this.w;
				g = g || new b;
				this.conjugate(g);
				n = 1 / (n * n + l * l + r * r + t * t);
				g.x *= n;
				g.y *= n;
				g.z *= n;
				g.w *= n;
				return g
			};
			b.prototype.conjugate = function(g) {
				g = g || new b;
				g.x = -this.x;
				g.y = -this.y;
				g.z = -this.z;
				g.w = this.w;
				return g
			};
			b.prototype.normalize = function() {
				var g = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
				0 === g ? this.w = this.z =
					this.y = this.x = 0 : (g = 1 / g, this.x *= g, this.y *= g, this.z *= g, this.w *= g)
			};
			b.prototype.normalizeFast = function() {
				var g = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
				0 === g ? this.w = this.z = this.y = this.x = 0 : (this.x *= g, this.y *= g, this.z *= g, this.w *= g)
			};
			b.prototype.vmult = function(g, n) {
				n = n || new d;
				var l = g.x,
					r = g.y,
					t = g.z,
					v = this.x,
					z = this.y,
					y = this.z,
					G = this.w,
					O = G * l + z * t - y * r,
					Q = G * r + y * l - v * t,
					V = G * t + v * r - z * l;
				l = -v * l - z * r - y * t;
				n.x = O * G + l * -v + Q * -y - V * -z;
				n.y = Q * G + l * -z + V * -v - O * -y;
				n.z = V * G + l * -y + O * -z - Q * -v;
				return n
			};
			b.prototype.copy =
				function(g) {
					this.x = g.x;
					this.y = g.y;
					this.z = g.z;
					this.w = g.w;
					return this
				};
			b.prototype.toEuler = function(g, n) {
				n = n || "YZX";
				var l = this.x,
					r = this.y,
					t = this.z,
					v = this.w;
				switch (n) {
					case "YZX":
						var z = l * r + t * v;
						if (.499 < z) {
							var y = 2 * Math.atan2(l, v);
							var G = Math.PI / 2;
							var O = 0
						} - .499 > z && (y = -2 * Math.atan2(l, v), G = -Math.PI / 2, O = 0);
						isNaN(y) && (O = t * t, y = Math.atan2(2 * r * v - 2 * l * t, 1 - 2 * r * r - 2 * O), G = Math.asin(2 * z), O = Math.atan2(2 * l * v - 2 * r * t, 1 - 2 * l * l - 2 * O));
						break;
					default:
						throw Error("Euler order " + n + " not supported yet.");
				}
				g.y = y;
				g.z = G;
				g.x = O
			};
			b.prototype.setFromEuler =
				function(g, n, l, r) {
					r = r || "XYZ";
					var t = Math.cos(g / 2),
						v = Math.cos(n / 2),
						z = Math.cos(l / 2);
					g = Math.sin(g / 2);
					n = Math.sin(n / 2);
					l = Math.sin(l / 2);
					"XYZ" === r ? (this.x = g * v * z + t * n * l, this.y = t * n * z - g * v * l, this.z = t * v * l + g * n * z, this.w = t * v * z - g * n * l) : "YXZ" === r ? (this.x = g * v * z + t * n * l, this.y = t * n * z - g * v * l, this.z = t * v * l - g * n * z, this.w = t * v * z + g * n * l) : "ZXY" === r ? (this.x = g * v * z - t * n * l, this.y = t * n * z + g * v * l, this.z = t * v * l + g * n * z, this.w = t * v * z - g * n * l) : "ZYX" === r ? (this.x = g * v * z - t * n * l, this.y = t * n * z + g * v * l, this.z = t * v * l - g * n * z, this.w = t * v * z + g * n * l) : "YZX" === r ? (this.x = g *
						v * z + t * n * l, this.y = t * n * z + g * v * l, this.z = t * v * l - g * n * z, this.w = t * v * z - g * n * l) : "XZY" === r && (this.x = g * v * z - t * n * l, this.y = t * n * z - g * v * l, this.z = t * v * l + g * n * z, this.w = t * v * z + g * n * l);
					return this
				};
			b.prototype.clone = function() {
				return new b(this.x, this.y, this.z, this.w)
			}
		}, {
			"./Vec3": 30
		}],
		29: [function(e, m, q) {
			function b(k) {
				k = k || {};
				this.position = new d;
				k.position && this.position.copy(k.position);
				this.quaternion = new a;
				k.quaternion && this.quaternion.copy(k.quaternion)
			}
			var d = e("./Vec3"),
				a = e("./Quaternion");
			m.exports = b;
			var h = new a;
			b.pointToLocalFrame =
				function(k, c, f, g) {
					g = g || new d;
					f.vsub(k, g);
					c.conjugate(h);
					h.vmult(g, g);
					return g
				};
			b.prototype.pointToLocal = function(k, c) {
				return b.pointToLocalFrame(this.position, this.quaternion, k, c)
			};
			b.pointToWorldFrame = function(k, c, f, g) {
				g = g || new d;
				c.vmult(f, g);
				g.vadd(k, g);
				return g
			};
			b.prototype.pointToWorld = function(k, c) {
				return b.pointToWorldFrame(this.position, this.quaternion, k, c)
			};
			b.prototype.vectorToWorldFrame = function(k, c) {
				c = c || new d;
				this.quaternion.vmult(k, c);
				return c
			};
			b.vectorToWorldFrame = function(k, c, f) {
				k.vmult(c,
					f);
				return f
			};
			b.vectorToLocalFrame = function(k, c, f, g) {
				g = g || new d;
				c.w *= -1;
				c.vmult(f, g);
				c.w *= -1;
				return g
			}
		}, {
			"./Quaternion": 28,
			"./Vec3": 30
		}],
		30: [function(e, m, q) {
			function b(c, f, g) {
				this.x = c || 0;
				this.y = f || 0;
				this.z = g || 0
			}
			m.exports = b;
			var d = e("./Mat3");
			b.ZERO = new b(0, 0, 0);
			b.UNIT_X = new b(1, 0, 0);
			b.UNIT_Y = new b(0, 1, 0);
			b.UNIT_Z = new b(0, 0, 1);
			b.prototype.cross = function(c, f) {
				var g = c.x,
					n = c.y,
					l = c.z,
					r = this.x,
					t = this.y,
					v = this.z;
				f = f || new b;
				f.x = t * l - v * n;
				f.y = v * g - r * l;
				f.z = r * n - t * g;
				return f
			};
			b.prototype.set = function(c, f, g) {
				this.x =
					c;
				this.y = f;
				this.z = g;
				return this
			};
			b.prototype.setZero = function() {
				this.x = this.y = this.z = 0
			};
			b.prototype.vadd = function(c, f) {
				if (f) f.x = c.x + this.x, f.y = c.y + this.y, f.z = c.z + this.z;
				else return new b(this.x + c.x, this.y + c.y, this.z + c.z)
			};
			b.prototype.vsub = function(c, f) {
				if (f) f.x = this.x - c.x, f.y = this.y - c.y, f.z = this.z - c.z;
				else return new b(this.x - c.x, this.y - c.y, this.z - c.z)
			};
			b.prototype.crossmat = function() {
				return new d([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
			};
			b.prototype.normalize = function() {
				var c = this.x,
					f = this.y,
					g = this.z;
				c = Math.sqrt(c * c + f * f + g * g);
				0 < c ? (f = 1 / c, this.x *= f, this.y *= f, this.z *= f) : this.z = this.y = this.x = 0;
				return c
			};
			b.prototype.unit = function(c) {
				c = c || new b;
				var f = this.x,
					g = this.y,
					n = this.z,
					l = Math.sqrt(f * f + g * g + n * n);
				0 < l ? (l = 1 / l, c.x = f * l, c.y = g * l, c.z = n * l) : (c.x = 1, c.y = 0, c.z = 0);
				return c
			};
			b.prototype.norm = function() {
				var c = this.x,
					f = this.y,
					g = this.z;
				return Math.sqrt(c * c + f * f + g * g)
			};
			b.prototype.length = b.prototype.norm;
			b.prototype.norm2 = function() {
				return this.dot(this)
			};
			b.prototype.lengthSquared = b.prototype.norm2;
			b.prototype.distanceTo = function(c) {
				var f = this.x,
					g = this.y,
					n = this.z,
					l = c.x,
					r = c.y;
				c = c.z;
				return Math.sqrt((l - f) * (l - f) + (r - g) * (r - g) + (c - n) * (c - n))
			};
			b.prototype.distanceSquared = function(c) {
				var f = this.x,
					g = this.y,
					n = this.z,
					l = c.x,
					r = c.y;
				c = c.z;
				return (l - f) * (l - f) + (r - g) * (r - g) + (c - n) * (c - n)
			};
			b.prototype.mult = function(c, f) {
				f = f || new b;
				var g = this.y,
					n = this.z;
				f.x = c * this.x;
				f.y = c * g;
				f.z = c * n;
				return f
			};
			b.prototype.scale = b.prototype.mult;
			b.prototype.dot = function(c) {
				return this.x * c.x + this.y * c.y + this.z * c.z
			};
			b.prototype.isZero = function() {
				return 0 ===
					this.x && 0 === this.y && 0 === this.z
			};
			b.prototype.negate = function(c) {
				c = c || new b;
				c.x = -this.x;
				c.y = -this.y;
				c.z = -this.z;
				return c
			};
			var a = new b,
				h = new b;
			b.prototype.tangents = function(c, f) {
				var g = this.norm();
				0 < g ? (g = 1 / g, a.set(this.x * g, this.y * g, this.z * g), .9 > Math.abs(a.x) ? h.set(1, 0, 0) : h.set(0, 1, 0), a.cross(h, c), a.cross(c, f)) : (c.set(1, 0, 0), f.set(0, 1, 0))
			};
			b.prototype.toString = function() {
				return this.x + "," + this.y + "," + this.z
			};
			b.prototype.toArray = function() {
				return [this.x, this.y, this.z]
			};
			b.prototype.copy = function(c) {
				this.x =
					c.x;
				this.y = c.y;
				this.z = c.z;
				return this
			};
			b.prototype.lerp = function(c, f, g) {
				var n = this.x,
					l = this.y,
					r = this.z;
				g.x = n + (c.x - n) * f;
				g.y = l + (c.y - l) * f;
				g.z = r + (c.z - r) * f
			};
			b.prototype.almostEquals = function(c, f) {
				void 0 === f && (f = 1E-6);
				return Math.abs(this.x - c.x) > f || Math.abs(this.y - c.y) > f || Math.abs(this.z - c.z) > f ? !1 : !0
			};
			b.prototype.almostZero = function(c) {
				void 0 === c && (c = 1E-6);
				return Math.abs(this.x) > c || Math.abs(this.y) > c || Math.abs(this.z) > c ? !1 : !0
			};
			var k = new b;
			b.prototype.isAntiparallelTo = function(c, f) {
				this.negate(k);
				return k.almostEquals(c,
					f)
			};
			b.prototype.clone = function() {
				return new b(this.x, this.y, this.z)
			}
		}, {
			"./Mat3": 27
		}],
		31: [function(e, m, q) {
			function b(I) {
				I = I || {};
				d.apply(this);
				this.id = b.idCounter++;
				this.postStep = this.preStep = this.world = null;
				this.vlambda = new a;
				this.collisionFilterGroup = "number" === typeof I.collisionFilterGroup ? I.collisionFilterGroup : 1;
				this.collisionFilterMask = "number" === typeof I.collisionFilterMask ? I.collisionFilterMask : 1;
				this.collisionResponse = !0;
				this.position = new a;
				I.position && this.position.copy(I.position);
				this.previousPosition =
					new a;
				this.initPosition = new a;
				this.velocity = new a;
				I.velocity && this.velocity.copy(I.velocity);
				this.initVelocity = new a;
				this.force = new a;
				var S = "number" === typeof I.mass ? I.mass : 0;
				this.mass = S;
				this.invMass = 0 < S ? 1 / S : 0;
				this.material = I.material || null;
				this.linearDamping = "number" === typeof I.linearDamping ? I.linearDamping : .01;
				this.type = 0 >= S ? b.STATIC : b.DYNAMIC;
				typeof I.type === typeof b.STATIC && (this.type = I.type);
				this.allowSleep = "undefined" !== typeof I.allowSleep ? I.allowSleep : !0;
				this.sleepState = 0;
				this.sleepSpeedLimit =
					"undefined" !== typeof I.sleepSpeedLimit ? I.sleepSpeedLimit : .1;
				this.sleepTimeLimit = "undefined" !== typeof I.sleepTimeLimit ? I.sleepTimeLimit : 1;
				this.timeLastSleepy = 0;
				this._wakeUpAfterNarrowphase = !1;
				this.torque = new a;
				this.quaternion = new k;
				I.quaternion && this.quaternion.copy(I.quaternion);
				this.initQuaternion = new k;
				this.angularVelocity = new a;
				I.angularVelocity && this.angularVelocity.copy(I.angularVelocity);
				this.initAngularVelocity = new a;
				this.interpolatedPosition = new a;
				this.interpolatedQuaternion = new k;
				this.shapes = [];
				this.shapeOffsets = [];
				this.shapeOrientations = [];
				this.inertia = new a;
				this.invInertia = new a;
				this.invInertiaWorld = new h;
				this.invMassSolve = 0;
				this.invInertiaSolve = new a;
				this.invInertiaWorldSolve = new h;
				this.fixedRotation = "undefined" !== typeof I.fixedRotation ? I.fixedRotation : !1;
				this.angularDamping = "undefined" !== typeof I.angularDamping ? I.angularDamping : .01;
				this.aabb = new c;
				this.aabbNeedsUpdate = !0;
				this.wlambda = new a;
				I.shape && this.addShape(I.shape);
				this.updateMassProperties()
			}
			m.exports = b;
			var d = e("../utils/EventTarget");
			e("../shapes/Shape");
			var a = e("../math/Vec3"),
				h = e("../math/Mat3"),
				k = e("../math/Quaternion");
			e("../material/Material");
			var c = e("../collision/AABB"),
				f = e("../shapes/Box");
			b.prototype = new d;
			b.prototype.constructor = b;
			b.DYNAMIC = 1;
			b.STATIC = 2;
			b.KINEMATIC = 4;
			b.AWAKE = 0;
			b.SLEEPY = 1;
			b.SLEEPING = 2;
			b.idCounter = 0;
			b.prototype.wakeUp = function() {
				var I = this.sleepState;
				this.sleepState = 0;
				I === b.SLEEPING && this.dispatchEvent({
					type: "wakeup"
				})
			};
			b.prototype.sleep = function() {
				this.sleepState = b.SLEEPING;
				this.velocity.set(0, 0, 0);
				this.angularVelocity.set(0,
					0, 0)
			};
			b.sleepyEvent = {
				type: "sleepy"
			};
			b.sleepEvent = {
				type: "sleep"
			};
			b.prototype.sleepTick = function(I) {
				if (this.allowSleep) {
					var S = this.sleepState,
						J = this.velocity.norm2() + this.angularVelocity.norm2(),
						L = Math.pow(this.sleepSpeedLimit, 2);
					S === b.AWAKE && J < L ? (this.sleepState = b.SLEEPY, this.timeLastSleepy = I, this.dispatchEvent(b.sleepyEvent)) : S === b.SLEEPY && J > L ? this.wakeUp() : S === b.SLEEPY && I - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(b.sleepEvent))
				}
			};
			b.prototype.updateSolveMassProperties =
				function() {
					this.sleepState === b.SLEEPING || this.type === b.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
				};
			b.prototype.pointToLocalFrame = function(I, S) {
				S = S || new a;
				I.vsub(this.position, S);
				this.quaternion.conjugate().vmult(S, S);
				return S
			};
			b.prototype.vectorToLocalFrame = function(I, S) {
				S = S || new a;
				this.quaternion.conjugate().vmult(I,
					S);
				return S
			};
			b.prototype.pointToWorldFrame = function(I, S) {
				S = S || new a;
				this.quaternion.vmult(I, S);
				S.vadd(this.position, S);
				return S
			};
			b.prototype.vectorToWorldFrame = function(I, S) {
				S = S || new a;
				this.quaternion.vmult(I, S);
				return S
			};
			var g = new a,
				n = new k;
			b.prototype.addShape = function(I, S, J) {
				var L = new a,
					A = new k;
				S && L.copy(S);
				J && A.copy(J);
				this.shapes.push(I);
				this.shapeOffsets.push(L);
				this.shapeOrientations.push(A);
				this.updateMassProperties();
				this.updateBoundingRadius();
				this.aabbNeedsUpdate = !0;
				return this
			};
			b.prototype.updateBoundingRadius =
				function() {
					for (var I = this.shapes, S = this.shapeOffsets, J = I.length, L = 0, A = 0; A !== J; A++) {
						var P = I[A];
						P.updateBoundingSphereRadius();
						var C = S[A].norm();
						P = P.boundingSphereRadius;
						C + P > L && (L = C + P)
					}
					this.boundingRadius = L
				};
			var l = new c;
			b.prototype.computeAABB = function() {
				for (var I = this.shapes, S = this.shapeOffsets, J = this.shapeOrientations, L = I.length, A = this.quaternion, P = this.aabb, C = 0; C !== L; C++) {
					var w = I[C];
					J[C].mult(A, n);
					n.vmult(S[C], g);
					g.vadd(this.position, g);
					w.calculateWorldAABB(g, n, l.lowerBound, l.upperBound);
					0 === C ? P.copy(l) :
						P.extend(l)
				}
				this.aabbNeedsUpdate = !1
			};
			var r = new h,
				t = new h;
			new h;
			b.prototype.updateInertiaWorld = function(I) {
				var S = this.invInertia;
				if (S.x !== S.y || S.y !== S.z || I) r.setRotationFromQuaternion(this.quaternion), r.transpose(t), r.scale(S, r), r.mmult(t, this.invInertiaWorld)
			};
			var v = new a,
				z = new a;
			b.prototype.applyForce = function(I, S) {
				this.type === b.DYNAMIC && (S.vsub(this.position, v), v.cross(I, z), this.force.vadd(I, this.force), this.torque.vadd(z, this.torque))
			};
			var y = new a,
				G = new a;
			b.prototype.applyLocalForce = function(I,
				S) {
				this.type === b.DYNAMIC && (this.vectorToWorldFrame(I, y), this.pointToWorldFrame(S, G), this.applyForce(y, G))
			};
			var O = new a,
				Q = new a,
				V = new a;
			b.prototype.applyImpulse = function(I, S) {
				this.type === b.DYNAMIC && (S.vsub(this.position, O), Q.copy(I), Q.mult(this.invMass, Q), this.velocity.vadd(Q, this.velocity), O.cross(I, V), this.invInertiaWorld.vmult(V, V), this.angularVelocity.vadd(V, this.angularVelocity))
			};
			var T = new a,
				K = new a;
			b.prototype.applyLocalImpulse = function(I, S) {
				this.type === b.DYNAMIC && (this.vectorToWorldFrame(I,
					T), this.pointToWorldFrame(S, K), this.applyImpulse(T, K))
			};
			var H = new a;
			b.prototype.updateMassProperties = function() {
				this.invMass = 0 < this.mass ? 1 / this.mass : 0;
				var I = this.inertia,
					S = this.fixedRotation;
				this.computeAABB();
				H.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2);
				f.calculateInertia(H, this.mass, I);
				this.invInertia.set(0 < I.x && !S ? 1 / I.x : 0, 0 < I.y && !S ? 1 / I.y : 0, 0 < I.z && !S ? 1 / I.z : 0);
				this.updateInertiaWorld(!0)
			};
			b.prototype.getVelocityAtWorldPoint = function(I, S) {
				var J = new a;
				I.vsub(this.position, J);
				this.angularVelocity.cross(J, S);
				this.velocity.vadd(S, S);
				return S
			}
		}, {
			"../collision/AABB": 3,
			"../material/Material": 25,
			"../math/Mat3": 27,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../shapes/Box": 37,
			"../shapes/Shape": 43,
			"../utils/EventTarget": 49
		}],
		32: [function(e, m, q) {
				function b(J) {
					this.chassisBody = J.chassisBody;
					this.wheelInfos = [];
					this.sliding = !1;
					this.world = null;
					this.indexRightAxis = "undefined" !== typeof J.indexRightAxis ?
						J.indexRightAxis : 1;
					this.indexForwardAxis = "undefined" !== typeof J.indexForwardAxis ? J.indexForwardAxis : 0;
					this.indexUpAxis = "undefined" !== typeof J.indexUpAxis ? J.indexUpAxis : 2
				}

				function d(J, L, A) {
					var P = Q,
						C = V,
						w = T,
						B = K;
					L.vsub(J.position, P);
					P.cross(A, C);
					J.invInertiaWorld.vmult(C, B);
					B.cross(P, w);
					return J.invMass + A.dot(w)
				}
				e("./Body");
				var a = e("../math/Vec3"),
					h = e("../math/Quaternion");
				e("../collision/RaycastResult");
				q = e("../collision/Ray");
				var k = e("../objects/WheelInfo");
				m.exports = b;
				new a;
				new a;
				new a;
				var c = new a,
					f = new a,
					g = new a;
				new q;
				b.prototype.addWheel = function(J) {
					J = J || {};
					J = new k(J);
					var L = this.wheelInfos.length;
					this.wheelInfos.push(J);
					return L
				};
				b.prototype.setSteeringValue = function(J, L) {
					this.wheelInfos[L].steering = J
				};
				new a;
				b.prototype.applyEngineForce = function(J, L) {
					this.wheelInfos[L].engineForce = J
				};
				b.prototype.setBrake = function(J, L) {
					this.wheelInfos[L].brake = J
				};
				b.prototype.addToWorld = function(J) {
					J.add(this.chassisBody);
					var L = this;
					this.preStepCallback = function() {
						L.updateVehicle(J.dt)
					};
					J.addEventListener("preStep",
						this.preStepCallback);
					this.world = J
				};
				b.prototype.getVehicleAxisWorld = function(J, L) {
					L.set(0 === J ? 1 : 0, 1 === J ? 1 : 0, 2 === J ? 1 : 0);
					this.chassisBody.vectorToWorldFrame(L, L)
				};
				b.prototype.updateVehicle = function(J) {
					for (var L = this.wheelInfos, A = L.length, P = this.chassisBody, C = 0; C < A; C++) this.updateWheelTransform(C);
					this.currentVehicleSpeedKmHour = 3.6 * P.velocity.norm();
					C = new a;
					this.getVehicleAxisWorld(this.indexForwardAxis, C);
					0 > C.dot(P.velocity) && (this.currentVehicleSpeedKmHour *= -1);
					for (C = 0; C < A; C++) this.castRay(L[C]);
					this.updateSuspension(J);
					var w = new a,
						B = new a;
					for (C = 0; C < A; C++) {
						var u = L[C],
							x = u.suspensionForce;
						x > u.maxSuspensionForce && (x = u.maxSuspensionForce);
						u.raycastResult.hitNormalWorld.scale(x * J, w);
						u.raycastResult.hitPointWorld.vsub(P.position, B);
						P.applyImpulse(w, u.raycastResult.hitPointWorld)
					}
					this.updateFriction(J);
					w = new a;
					B = new a;
					x = new a;
					for (C = 0; C < A; C++) {
						u = L[C];
						P.getVelocityAtWorldPoint(u.chassisConnectionPointWorld, x);
						var F = 1;
						switch (this.indexUpAxis) {
							case 1:
								F = -1
						}
						if (u.isInContact) {
							this.getVehicleAxisWorld(this.indexForwardAxis, B);
							var E = B.dot(u.raycastResult.hitNormalWorld);
							u.raycastResult.hitNormalWorld.scale(E, w);
							B.vsub(w, B);
							E = B.dot(x);
							u.deltaRotation = F * E * J / u.radius
						}!u.sliding && u.isInContact || 0 === u.engineForce || !u.useCustomSlidingRotationalSpeed || (u.deltaRotation = (0 < u.engineForce ? 1 : -1) * u.customSlidingRotationalSpeed * J);
						Math.abs(u.brake) > Math.abs(u.engineForce) && (u.deltaRotation = 0);
						u.rotation += u.deltaRotation;
						u.deltaRotation *= .99
					}
				};
				b.prototype.updateSuspension = function(J) {
					J = this.chassisBody.mass;
					for (var L = this.wheelInfos,
							A = L.length, P = 0; P < A; P++) {
						var C = L[P];
						if (C.isInContact) {
							var w = C.suspensionStiffness * (C.suspensionRestLength - C.suspensionLength) * C.clippedInvContactDotSuspension;
							var B = C.suspensionRelativeVelocity;
							w -= (0 > B ? C.dampingCompression : C.dampingRelaxation) * B;
							C.suspensionForce = w * J;
							0 > C.suspensionForce && (C.suspensionForce = 0)
						} else C.suspensionForce = 0
					}
				};
				b.prototype.removeFromWorld = function(J) {
					J.remove(this.chassisBody);
					J.removeEventListener("preStep", this.preStepCallback);
					this.world = null
				};
				var n = new a,
					l = new a;
				b.prototype.castRay =
					function(J) {
						this.updateWheelTransformWorld(J);
						var L = this.chassisBody,
							A = -1;
						J.directionWorld.scale(J.suspensionRestLength + J.radius, n);
						var P = J.chassisConnectionPointWorld;
						P.vadd(n, l);
						var C = J.raycastResult;
						C.reset();
						var w = L.collisionResponse;
						L.collisionResponse = !1;
						this.world.rayTest(P, l, C);
						L.collisionResponse = w;
						P = C.body;
						J.raycastResult.groundObject = 0;
						P ? (A = C.distance, J.raycastResult.hitNormalWorld = C.hitNormalWorld, J.isInContact = !0, J.suspensionLength = C.distance - J.radius, C = J.suspensionRestLength - J.maxSuspensionTravel,
							P = J.suspensionRestLength + J.maxSuspensionTravel, J.suspensionLength < C && (J.suspensionLength = C), J.suspensionLength > P && (J.suspensionLength = P, J.raycastResult.reset()), C = J.raycastResult.hitNormalWorld.dot(J.directionWorld), P = new a, L.getVelocityAtWorldPoint(J.raycastResult.hitPointWorld, P), L = J.raycastResult.hitNormalWorld.dot(P), -.1 <= C ? (J.suspensionRelativeVelocity = 0, J.clippedInvContactDotSuspension = 10) : (C = -1 / C, J.suspensionRelativeVelocity = L * C, J.clippedInvContactDotSuspension = C)) : (J.suspensionLength = J.suspensionRestLength +
							0 * J.maxSuspensionTravel, J.suspensionRelativeVelocity = 0, J.directionWorld.scale(-1, J.raycastResult.hitNormalWorld), J.clippedInvContactDotSuspension = 1);
						return A
					};
				b.prototype.updateWheelTransformWorld = function(J) {
					J.isInContact = !1;
					var L = this.chassisBody;
					L.pointToWorldFrame(J.chassisConnectionPointLocal, J.chassisConnectionPointWorld);
					L.vectorToWorldFrame(J.directionLocal, J.directionWorld);
					L.vectorToWorldFrame(J.axleLocal, J.axleWorld)
				};
				b.prototype.updateWheelTransform = function(J) {
					J = this.wheelInfos[J];
					this.updateWheelTransformWorld(J);
					J.directionLocal.scale(-1, c);
					f.copy(J.axleLocal);
					c.cross(f, g);
					g.normalize();
					f.normalize();
					var L = J.steering,
						A = new h;
					A.setFromAxisAngle(c, L);
					L = new h;
					L.setFromAxisAngle(f, J.rotation);
					var P = J.worldTransform.quaternion;
					this.chassisBody.quaternion.mult(A, P);
					P.mult(L, P);
					P.normalize();
					A = J.worldTransform.position;
					A.copy(J.directionWorld);
					A.scale(J.suspensionLength, A);
					A.vadd(J.chassisConnectionPointWorld, A)
				};
				var r = [new a(1, 0, 0), new a(0, 1, 0), new a(0, 0, 1)];
				b.prototype.getWheelTransformWorld = function(J) {
					return this.wheelInfos[J].worldTransform
				};
				var t = new a,
					v = [],
					z = [];
				b.prototype.updateFriction = function(J) {
					for (var L = this.wheelInfos, A = L.length, P = this.chassisBody, C = 0, w = 0; w < A; w++) {
						var B = L[w],
							u = B.raycastResult.body;
						u && C++;
						B.sideImpulse = 0;
						B.forwardImpulse = 0;
						z[w] || (z[w] = new a);
						v[w] || (v[w] = new a)
					}
					for (w = 0; w < A; w++)
						if (B = L[w], u = B.raycastResult.body) {
							var x = v[w];
							this.getWheelTransformWorld(w).vectorToWorldFrame(r[this.indexRightAxis], x);
							C = B.raycastResult.hitNormalWorld;
							var F = x.dot(C);
							C.scale(F, t);
							x.vsub(t, x);
							x.normalize();
							C.cross(x, z[w]);
							z[w].normalize();
							C = B;
							F = P;
							var E = B.raycastResult.hitPointWorld,
								N = B.raycastResult.hitPointWorld;
							if (1.1 < x.norm2()) u = 0;
							else {
								var D = H,
									U = I,
									aa = S;
								F.getVelocityAtWorldPoint(E, D);
								u.getVelocityAtWorldPoint(N, U);
								D.vsub(U, aa);
								u = -.2 * x.dot(aa) * (1 / (F.invMass + u.invMass))
							}
							C.sideImpulse = u;
							B.sideImpulse *= 1
						} this.sliding = !1;
					for (w = 0; w < A; w++) {
						B = L[w];
						u = B.raycastResult.body;
						F = 0;
						B.slipInfo = 1;
						if (u) {
							C = B.brake ? B.brake : 0;
							D = P;
							E = u;
							N = B.raycastResult.hitPointWorld;
							x = z[w];
							F = C;
							U = N;
							aa = y;
							var R = G,
								X = O;
							D.getVelocityAtWorldPoint(U, aa);
							E.getVelocityAtWorldPoint(U,
								R);
							aa.vsub(R, X);
							U = x.dot(X);
							D = d(D, N, x);
							E = d(E, N, x);
							E = 1 / (D + E) * -U;
							F < E && (E = F);
							E < -F && (E = -F);
							F = E;
							F += B.engineForce * J;
							C /= F;
							B.slipInfo *= C
						}
						B.forwardImpulse = 0;
						B.skidInfo = 1;
						u && (B.skidInfo = 1, u = B.suspensionForce * J * B.frictionSlip, C = u * u, B.forwardImpulse = F, F = .5 * B.forwardImpulse, E = 1 * B.sideImpulse, F = F * F + E * E, B.sliding = !1, F > C && (this.sliding = !0, B.sliding = !0, C = u / Math.sqrt(F), B.skidInfo *= C))
					}
					if (this.sliding)
						for (w = 0; w < A; w++) B = L[w], 0 !== B.sideImpulse && 1 > B.skidInfo && (B.forwardImpulse *= B.skidInfo, B.sideImpulse *= B.skidInfo);
					for (w =
						0; w < A; w++) B = L[w], J = new a, J.copy(B.raycastResult.hitPointWorld), 0 !== B.forwardImpulse && (u = new a, z[w].scale(B.forwardImpulse, u), P.applyImpulse(u, J)), 0 !== B.sideImpulse && (u = B.raycastResult.body, C = new a, C.copy(B.raycastResult.hitPointWorld), F = new a, v[w].scale(B.sideImpulse, F), P.pointToLocalFrame(J, J), J["xyz" [this.indexUpAxis]] *= B.rollInfluence, P.pointToWorldFrame(J, J), P.applyImpulse(F, J), F.scale(-1, F), u.applyImpulse(F, C))
				};
				var y = new a,
					G = new a,
					O = new a,
					Q = new a,
					V = new a,
					T = new a,
					K = new a,
					H = new a,
					I = new a,
					S = new a
			},
			{
				"../collision/Ray": 9,
				"../collision/RaycastResult": 10,
				"../math/Quaternion": 28,
				"../math/Vec3": 30,
				"../objects/WheelInfo": 36,
				"./Body": 31
			}
		],
		33: [function(e, m, q) {
			function b(n) {
				this.wheelBodies = [];
				this.coordinateSystem = "undefined" === typeof n.coordinateSystem ? new k(1, 2, 3) : n.coordinateSystem.clone();
				this.chassisBody = n.chassisBody;
				this.chassisBody || (n = new h(new k(5, 2, .5)), this.chassisBody = new d(1, n));
				this.constraints = [];
				this.wheelAxes = [];
				this.wheelForces = []
			}
			var d = e("./Body"),
				a = e("../shapes/Sphere"),
				h = e("../shapes/Box"),
				k = e("../math/Vec3"),
				c = e("../constraints/HingeConstraint");
			m.exports = b;
			b.prototype.addWheel = function(n) {
				n = n || {};
				var l = n.body;
				l || (l = new d(1, new a(1.2)));
				this.wheelBodies.push(l);
				this.wheelForces.push(0);
				new k;
				var r = "undefined" !== typeof n.position ? n.position.clone() : new k,
					t = new k;
				this.chassisBody.pointToWorldFrame(r, t);
				l.position.set(t.x, t.y, t.z);
				n = "undefined" !== typeof n.axis ? n.axis.clone() : new k(0, 1, 0);
				this.wheelAxes.push(n);
				l = new c(this.chassisBody, l, {
					pivotA: r,
					axisA: n,
					pivotB: k.ZERO,
					axisB: n,
					collideConnected: !1
				});
				this.constraints.push(l);
				return this.wheelBodies.length - 1
			};
			b.prototype.setSteeringValue = function(n, l) {
				var r = this.wheelAxes[l],
					t = Math.cos(n),
					v = Math.sin(n),
					z = r.x;
				r = r.y;
				this.constraints[l].axisA.set(t * z - v * r, v * z + t * r, 0)
			};
			b.prototype.setMotorSpeed = function(n, l) {
				var r = this.constraints[l];
				r.enableMotor();
				r.motorTargetVelocity = n
			};
			b.prototype.disableMotor = function(n) {
				this.constraints[n].disableMotor()
			};
			var f = new k;
			b.prototype.setWheelForce = function(n, l) {
				this.wheelForces[l] = n
			};
			b.prototype.applyWheelForce = function(n,
				l) {
				var r = this.wheelBodies[l],
					t = r.torque;
				this.wheelAxes[l].scale(n, f);
				r.vectorToWorldFrame(f, f);
				t.vadd(f, t)
			};
			b.prototype.addToWorld = function(n) {
				for (var l = this.constraints, r = this.wheelBodies.concat([this.chassisBody]), t = 0; t < r.length; t++) n.add(r[t]);
				for (t = 0; t < l.length; t++) n.addConstraint(l[t]);
				n.addEventListener("preStep", this._update.bind(this))
			};
			b.prototype._update = function() {
				for (var n = this.wheelForces, l = 0; l < n.length; l++) this.applyWheelForce(n[l], l)
			};
			b.prototype.removeFromWorld = function(n) {
				for (var l =
						this.constraints, r = this.wheelBodies.concat([this.chassisBody]), t = 0; t < r.length; t++) n.remove(r[t]);
				for (t = 0; t < l.length; t++) n.removeConstraint(l[t])
			};
			var g = new k;
			b.prototype.getWheelSpeed = function(n) {
				var l = this.wheelBodies[n].angularVelocity;
				this.chassisBody.vectorToWorldFrame(this.wheelAxes[n], g);
				return l.dot(g)
			}
		}, {
			"../constraints/HingeConstraint": 15,
			"../math/Vec3": 30,
			"../shapes/Box": 37,
			"../shapes/Sphere": 44,
			"./Body": 31
		}],
		34: [function(e, m, q) {
			function b() {
				this.particles = [];
				this.speedOfSound = this.smoothingRadius =
					this.density = 1;
				this.viscosity = .01;
				this.eps = 1E-6;
				this.pressures = [];
				this.densities = [];
				this.neighbors = []
			}
			m.exports = b;
			e("../shapes/Shape");
			m = e("../math/Vec3");
			e("../math/Quaternion");
			e("../shapes/Particle");
			e("../objects/Body");
			e("../material/Material");
			b.prototype.add = function(n) {
				this.particles.push(n);
				this.neighbors.length < this.particles.length && this.neighbors.push([])
			};
			b.prototype.remove = function(n) {
				n = this.particles.indexOf(n); - 1 !== n && (this.particles.splice(n, 1), this.neighbors.length > this.particles.length &&
					this.neighbors.pop())
			};
			var d = new m;
			b.prototype.getNeighbors = function(n, l) {
				for (var r = this.particles.length, t = n.id, v = this.smoothingRadius * this.smoothingRadius, z = 0; z !== r; z++) {
					var y = this.particles[z];
					y.position.vsub(n.position, d);
					t !== y.id && d.norm2() < v && l.push(y)
				}
			};
			var a = new m,
				h = new m,
				k = new m,
				c = new m,
				f = new m,
				g = new m;
			b.prototype.update = function() {
				for (var n = this.particles.length, l = this.speedOfSound, r = this.eps, t = 0; t !== n; t++) {
					var v = this.particles[t],
						z = this.neighbors[t];
					z.length = 0;
					this.getNeighbors(v, z);
					z.push(this.particles[t]);
					for (var y = z.length, G = 0, O = 0; O !== y; O++) {
						v.position.vsub(z[O].position, a);
						var Q = a.norm();
						Q = this.w(Q);
						G += z[O].mass * Q
					}
					this.densities[t] = G;
					this.pressures[t] = l * l * (this.densities[t] - this.density)
				}
				for (t = 0; t !== n; t++) {
					l = this.particles[t];
					h.set(0, 0, 0);
					k.set(0, 0, 0);
					z = this.neighbors[t];
					y = z.length;
					for (O = 0; O !== y; O++) G = z[O], l.position.vsub(G.position, f), Q = f.norm(), v = -G.mass * (this.pressures[t] / (this.densities[t] * this.densities[t] + r) + this.pressures[O] / (this.densities[O] * this.densities[O] + r)), this.gradw(f, c), c.mult(v,
						c), h.vadd(c, h), G.velocity.vsub(l.velocity, g), g.mult(1 / (1E-4 + this.densities[t] * this.densities[O]) * this.viscosity * G.mass, g), v = this.nablaw(Q), g.mult(v, g), k.vadd(g, k);
					k.mult(l.mass, k);
					h.mult(l.mass, h);
					l.force.vadd(k, l.force);
					l.force.vadd(h, l.force)
				}
			};
			b.prototype.w = function(n) {
				var l = this.smoothingRadius;
				return 315 / (64 * Math.PI * Math.pow(l, 9)) * Math.pow(l * l - n * n, 3)
			};
			b.prototype.gradw = function(n, l) {
				var r = n.norm(),
					t = this.smoothingRadius;
				n.mult(945 / (32 * Math.PI * Math.pow(t, 9)) * Math.pow(t * t - r * r, 2), l)
			};
			b.prototype.nablaw =
				function(n) {
					var l = this.smoothingRadius;
					return 945 / (32 * Math.PI * Math.pow(l, 9)) * (l * l - n * n) * (7 * n * n - 3 * l * l)
				}
		}, {
			"../material/Material": 25,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"../shapes/Particle": 41,
			"../shapes/Shape": 43
		}],
		35: [function(e, m, q) {
			function b(z, y, G) {
				G = G || {};
				this.restLength = "number" === typeof G.restLength ? G.restLength : 1;
				this.stiffness = G.stiffness || 100;
				this.damping = G.damping || 1;
				this.bodyA = z;
				this.bodyB = y;
				this.localAnchorA = new d;
				this.localAnchorB = new d;
				G.localAnchorA && this.localAnchorA.copy(G.localAnchorA);
				G.localAnchorB && this.localAnchorB.copy(G.localAnchorB);
				G.worldAnchorA && this.setWorldAnchorA(G.worldAnchorA);
				G.worldAnchorB && this.setWorldAnchorB(G.worldAnchorB)
			}
			var d = e("../math/Vec3");
			m.exports = b;
			b.prototype.setWorldAnchorA = function(z) {
				this.bodyA.pointToLocalFrame(z, this.localAnchorA)
			};
			b.prototype.setWorldAnchorB = function(z) {
				this.bodyB.pointToLocalFrame(z, this.localAnchorB)
			};
			b.prototype.getWorldAnchorA = function(z) {
				this.bodyA.pointToWorldFrame(this.localAnchorA, z)
			};
			b.prototype.getWorldAnchorB = function(z) {
				this.bodyB.pointToWorldFrame(this.localAnchorB,
					z)
			};
			var a = new d,
				h = new d,
				k = new d,
				c = new d,
				f = new d,
				g = new d,
				n = new d,
				l = new d,
				r = new d,
				t = new d,
				v = new d;
			b.prototype.applyForce = function() {
				var z = this.stiffness,
					y = this.damping,
					G = this.restLength,
					O = this.bodyA,
					Q = this.bodyB;
				this.getWorldAnchorA(f);
				this.getWorldAnchorB(g);
				f.vsub(O.position, n);
				g.vsub(Q.position, l);
				g.vsub(f, a);
				var V = a.norm();
				h.copy(a);
				h.normalize();
				Q.velocity.vsub(O.velocity, k);
				Q.angularVelocity.cross(l, v);
				k.vadd(v, k);
				O.angularVelocity.cross(n, v);
				k.vsub(v, k);
				h.mult(-z * (V - G) - y * k.dot(h), c);
				O.force.vsub(c,
					O.force);
				Q.force.vadd(c, Q.force);
				n.cross(c, r);
				l.cross(c, t);
				O.torque.vsub(r, O.torque);
				Q.torque.vadd(t, Q.torque)
			}
		}, {
			"../math/Vec3": 30
		}],
		36: [function(e, m, q) {
			function b(g) {
				g = k.defaults(g, {
					chassisConnectionPointLocal: new d,
					chassisConnectionPointWorld: new d,
					directionLocal: new d,
					directionWorld: new d,
					axleLocal: new d,
					axleWorld: new d,
					suspensionRestLength: 1,
					suspensionMaxLength: 2,
					radius: 1,
					suspensionStiffness: 100,
					dampingCompression: 10,
					dampingRelaxation: 10,
					frictionSlip: 1E4,
					steering: 0,
					rotation: 0,
					deltaRotation: 0,
					rollInfluence: .01,
					maxSuspensionForce: Number.MAX_VALUE,
					isFrontWheel: !0,
					clippedInvContactDotSuspension: 1,
					suspensionRelativeVelocity: 0,
					suspensionForce: 0,
					skidInfo: 0,
					suspensionLength: 0,
					maxSuspensionTravel: 1,
					useCustomSlidingRotationalSpeed: !1,
					customSlidingRotationalSpeed: -.1
				});
				this.maxSuspensionTravel = g.maxSuspensionTravel;
				this.customSlidingRotationalSpeed = g.customSlidingRotationalSpeed;
				this.useCustomSlidingRotationalSpeed = g.useCustomSlidingRotationalSpeed;
				this.sliding = !1;
				this.chassisConnectionPointLocal =
					g.chassisConnectionPointLocal.clone();
				this.chassisConnectionPointWorld = g.chassisConnectionPointWorld.clone();
				this.directionLocal = g.directionLocal.clone();
				this.directionWorld = g.directionWorld.clone();
				this.axleLocal = g.axleLocal.clone();
				this.axleWorld = g.axleWorld.clone();
				this.suspensionRestLength = g.suspensionRestLength;
				this.suspensionMaxLength = g.suspensionMaxLength;
				this.radius = g.radius;
				this.suspensionStiffness = g.suspensionStiffness;
				this.dampingCompression = g.dampingCompression;
				this.dampingRelaxation =
					g.dampingRelaxation;
				this.frictionSlip = g.frictionSlip;
				this.deltaRotation = this.rotation = this.steering = 0;
				this.rollInfluence = g.rollInfluence;
				this.maxSuspensionForce = g.maxSuspensionForce;
				this.brake = this.engineForce = 0;
				this.isFrontWheel = g.isFrontWheel;
				this.clippedInvContactDotSuspension = 1;
				this.forwardImpulse = this.sideImpulse = this.suspensionLength = this.skidInfo = this.suspensionForce = this.suspensionRelativeVelocity = 0;
				this.raycastResult = new h;
				this.worldTransform = new a;
				this.isInContact = !1
			}
			var d = e("../math/Vec3"),
				a = e("../math/Transform"),
				h = e("../collision/RaycastResult"),
				k = e("../utils/Utils");
			m.exports = b;
			var c = new d,
				f = new d;
			c = new d;
			b.prototype.updateWheel = function(g) {
				var n = this.raycastResult;
				if (this.isInContact) {
					var l = n.hitNormalWorld.dot(n.directionWorld);
					n.hitPointWorld.vsub(g.position, f);
					g.getVelocityAtWorldPoint(f, c);
					g = n.hitNormalWorld.dot(c); - .1 <= l ? (this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10) : (l = -1 / l, this.suspensionRelativeVelocity = g * l, this.clippedInvContactDotSuspension =
						l)
				} else n.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, n.directionWorld.scale(-1, n.hitNormalWorld), this.clippedInvContactDotSuspension = 1
			}
		}, {
			"../collision/RaycastResult": 10,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../utils/Utils": 53
		}],
		37: [function(e, m, q) {
			function b(f) {
				d.call(this);
				this.type = d.types.BOX;
				this.halfExtents = f;
				this.convexPolyhedronRepresentation = null;
				this.updateConvexPolyhedronRepresentation();
				this.updateBoundingSphereRadius()
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3"),
				h = e("./ConvexPolyhedron");
			b.prototype = new d;
			b.prototype.constructor = b;
			b.prototype.updateConvexPolyhedronRepresentation = function() {
				var f = this.halfExtents.x,
					g = this.halfExtents.y,
					n = this.halfExtents.z;
				f = [new a(-f, -g, -n), new a(f, -g, -n), new a(f, g, -n), new a(-f, g, -n), new a(-f, -g, n), new a(f, -g, n), new a(f, g, n), new a(-f, g, n)];
				new a(0, 0, 1);
				new a(0, 1, 0);
				new a(1, 0, 0);
				this.convexPolyhedronRepresentation = f = new h(f, [
					[3, 2, 1, 0],
					[4, 5, 6, 7],
					[5, 4, 0, 1],
					[2, 3, 7, 6],
					[0, 4, 7, 3],
					[1, 2, 6, 5]
				]);
				f.material = this.material
			};
			b.prototype.calculateLocalInertia = function(f, g) {
				g = g || new a;
				b.calculateInertia(this.halfExtents, f, g);
				return g
			};
			b.calculateInertia = function(f, g, n) {
				n.x = 1 / 12 * g * (4 * f.y * f.y + 4 * f.z * f.z);
				n.y = 1 / 12 * g * (4 * f.x * f.x + 4 * f.z * f.z);
				n.z = 1 / 12 * g * (4 * f.y * f.y + 4 * f.x * f.x)
			};
			b.prototype.getSideNormals = function(f, g) {
				var n = this.halfExtents;
				f[0].set(n.x, 0, 0);
				f[1].set(0, n.y, 0);
				f[2].set(0, 0, n.z);
				f[3].set(-n.x, 0, 0);
				f[4].set(0, -n.y, 0);
				f[5].set(0, 0, -n.z);
				if (void 0 !== g)
					for (n = 0; n !== f.length; n++) g.vmult(f[n], f[n]);
				return f
			};
			b.prototype.volume =
				function() {
					return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
				};
			b.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = this.halfExtents.norm()
			};
			var k = new a;
			new a;
			b.prototype.forEachWorldCorner = function(f, g, n) {
				var l = this.halfExtents;
				l = [
					[l.x, l.y, l.z],
					[-l.x, l.y, l.z],
					[-l.x, -l.y, l.z],
					[-l.x, -l.y, -l.z],
					[l.x, -l.y, -l.z],
					[l.x, l.y, -l.z],
					[-l.x, l.y, -l.z],
					[l.x, -l.y, l.z]
				];
				for (var r = 0; r < l.length; r++) k.set(l[r][0], l[r][1], l[r][2]), g.vmult(k, k), f.vadd(k, k), n(k.x, k.y, k.z)
			};
			var c = [new a,
				new a, new a, new a, new a, new a, new a, new a
			];
			b.prototype.calculateWorldAABB = function(f, g, n, l) {
				var r = this.halfExtents;
				c[0].set(r.x, r.y, r.z);
				c[1].set(-r.x, r.y, r.z);
				c[2].set(-r.x, -r.y, r.z);
				c[3].set(-r.x, -r.y, -r.z);
				c[4].set(r.x, -r.y, -r.z);
				c[5].set(r.x, r.y, -r.z);
				c[6].set(-r.x, r.y, -r.z);
				c[7].set(r.x, -r.y, r.z);
				var t = c[0];
				g.vmult(t, t);
				f.vadd(t, t);
				l.copy(t);
				n.copy(t);
				for (r = 1; 8 > r; r++) {
					t = c[r];
					g.vmult(t, t);
					f.vadd(t, t);
					var v = t.x,
						z = t.y;
					t = t.z;
					v > l.x && (l.x = v);
					z > l.y && (l.y = z);
					t > l.z && (l.z = t);
					v < n.x && (n.x = v);
					z < n.y && (n.y =
						z);
					t < n.z && (n.z = t)
				}
			}
		}, {
			"../math/Vec3": 30,
			"./ConvexPolyhedron": 38,
			"./Shape": 43
		}],
		38: [function(e, m, q) {
			function b(x, F, E) {
				d.call(this);
				this.type = d.types.CONVEXPOLYHEDRON;
				this.vertices = x || [];
				this.worldVertices = [];
				this.worldVerticesNeedsUpdate = !0;
				this.faces = F || [];
				this.faceNormals = [];
				this.computeNormals();
				this.worldFaceNormalsNeedsUpdate = !0;
				this.worldFaceNormals = [];
				this.uniqueEdges = [];
				this.uniqueAxes = E ? E.slice() : null;
				this.computeEdges();
				this.updateBoundingSphereRadius()
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3");
			e("../math/Quaternion");
			var h = e("../math/Transform");
			b.prototype = new d;
			b.prototype.constructor = b;
			var k = new a;
			b.prototype.computeEdges = function() {
				for (var x = this.faces, F = this.vertices, E = this.uniqueEdges, N = E.length = 0; N !== x.length; N++)
					for (var D = x[N], U = D.length, aa = 0; aa !== U; aa++) {
						F[D[aa]].vsub(F[D[(aa + 1) % U]], k);
						k.normalize();
						for (var R = !1, X = 0; X !== E.length; X++)
							if (E[X].almostEquals(k) || E[X].almostEquals(k)) {
								R = !0;
								break
							} R || E.push(k.clone())
					}
			};
			b.prototype.computeNormals = function() {
				this.faceNormals.length = this.faces.length;
				for (var x = 0; x < this.faces.length; x++) {
					for (var F = 0; F < this.faces[x].length; F++)
						if (!this.vertices[this.faces[x][F]]) throw Error("Vertex " + this.faces[x][F] + " not found!");
					F = this.faceNormals[x] || new a;
					this.getFaceNormal(x, F);
					F.negate(F);
					this.faceNormals[x] = F;
					if (0 > F.dot(this.vertices[this.faces[x][0]]))
						for (console.error(".faceNormals[" + x + "] = Vec3(" + F.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule."), F = 0; F <
							this.faces[x].length; F++) console.warn(".vertices[" + this.faces[x][F] + "] = Vec3(" + this.vertices[this.faces[x][F]].toString() + ")")
				}
			};
			var c = new a,
				f = new a;
			b.computeNormal = function(x, F, E, N) {
				F.vsub(x, f);
				E.vsub(F, c);
				c.cross(f, N);
				N.isZero() || N.normalize()
			};
			b.prototype.getFaceNormal = function(x, F) {
				var E = this.faces[x];
				return b.computeNormal(this.vertices[E[0]], this.vertices[E[1]], this.vertices[E[2]], F)
			};
			var g = new a;
			b.prototype.clipAgainstHull = function(x, F, E, N, D, U, aa, R, X) {
				for (var ma = -1, ja = -Number.MAX_VALUE, fa =
						0; fa < E.faces.length; fa++) {
					g.copy(E.faceNormals[fa]);
					D.vmult(g, g);
					var W = g.dot(U);
					W > ja && (ja = W, ma = fa)
				}
				ja = [];
				fa = E.faces[ma];
				W = fa.length;
				for (var ca = 0; ca < W; ca++) {
					var da = E.vertices[fa[ca]],
						oa = new a;
					oa.copy(da);
					D.vmult(oa, oa);
					N.vadd(oa, oa);
					ja.push(oa)
				}
				0 <= ma && this.clipFaceAgainstHull(U, x, F, ja, aa, R, X)
			};
			var n = new a,
				l = new a,
				r = new a,
				t = new a,
				v = new a,
				z = new a;
			b.prototype.findSeparatingAxis = function(x, F, E, N, D, U, aa, R) {
				var X = Number.MAX_VALUE,
					ma = 0;
				if (this.uniqueAxes)
					for (fa = 0; fa !== this.uniqueAxes.length; fa++) {
						E.vmult(this.uniqueAxes[fa],
							n);
						W = this.testSepAxis(n, x, F, E, N, D);
						if (!1 === W) return !1;
						W < X && (X = W, U.copy(n))
					} else
						for (var ja = aa ? aa.length : this.faces.length, fa = 0; fa < ja; fa++) {
							W = aa ? aa[fa] : fa;
							n.copy(this.faceNormals[W]);
							E.vmult(n, n);
							var W = this.testSepAxis(n, x, F, E, N, D);
							if (!1 === W) return !1;
							W < X && (X = W, U.copy(n))
						}
				if (x.uniqueAxes)
					for (fa = 0; fa !== x.uniqueAxes.length; fa++) {
						D.vmult(x.uniqueAxes[fa], l);
						ma++;
						W = this.testSepAxis(l, x, F, E, N, D);
						if (!1 === W) return !1;
						W < X && (X = W, U.copy(l))
					} else
						for (aa = R ? R.length : x.faces.length, fa = 0; fa < aa; fa++) {
							W = R ? R[fa] : fa;
							l.copy(x.faceNormals[W]);
							D.vmult(l, l);
							ma++;
							W = this.testSepAxis(l, x, F, E, N, D);
							if (!1 === W) return !1;
							W < X && (X = W, U.copy(l))
						}
				for (R = 0; R !== this.uniqueEdges.length; R++)
					for (E.vmult(this.uniqueEdges[R], t), ma = 0; ma !== x.uniqueEdges.length; ma++)
						if (D.vmult(x.uniqueEdges[ma], v), t.cross(v, z), !z.almostZero()) {
							z.normalize();
							fa = this.testSepAxis(z, x, F, E, N, D);
							if (!1 === fa) return !1;
							fa < X && (X = fa, U.copy(z))
						} N.vsub(F, r);
				0 < r.dot(U) && U.negate(U);
				return !0
			};
			var y = [],
				G = [];
			b.prototype.testSepAxis = function(x, F, E, N, D, U) {
				b.project(this, x, E, N, y);
				b.project(F, x, D, U,
					G);
				E = y[0];
				x = y[1];
				F = G[0];
				N = G[1];
				if (E < N || F < x) return !1;
				E -= N;
				x = F - x;
				return E < x ? E : x
			};
			var O = new a,
				Q = new a;
			b.prototype.calculateLocalInertia = function(x, F) {
				this.computeLocalAABB(O, Q);
				var E = Q.x - O.x,
					N = Q.y - O.y,
					D = Q.z - O.z;
				F.x = 1 / 12 * x * (4 * N * N + 4 * D * D);
				F.y = 1 / 12 * x * (4 * E * E + 4 * D * D);
				F.z = 1 / 12 * x * (4 * N * N + 4 * E * E)
			};
			b.prototype.getPlaneConstantOfFace = function(x) {
				return -this.faceNormals[x].dot(this.vertices[this.faces[x][0]])
			};
			var V = new a,
				T = new a,
				K = new a,
				H = new a,
				I = new a,
				S = new a,
				J = new a,
				L = new a;
			b.prototype.clipFaceAgainstHull = function(x,
				F, E, N, D, U, aa) {
				for (var R = [], X = -1, ma = Number.MAX_VALUE, ja = 0; ja < this.faces.length; ja++) {
					V.copy(this.faceNormals[ja]);
					E.vmult(V, V);
					var fa = V.dot(x);
					fa < ma && (ma = fa, X = ja)
				}
				if (!(0 > X)) {
					x = this.faces[X];
					x.connectedFaces = [];
					for (ma = 0; ma < this.faces.length; ma++)
						for (ja = 0; ja < this.faces[ma].length; ja++) - 1 !== x.indexOf(this.faces[ma][ja]) && ma !== X && -1 === x.connectedFaces.indexOf(ma) && x.connectedFaces.push(ma);
					ma = x.length;
					for (ja = 0; ja < ma; ja++) {
						fa = this.vertices[x[ja]];
						fa.vsub(this.vertices[x[(ja + 1) % ma]], T);
						K.copy(T);
						E.vmult(K,
							K);
						F.vadd(K, K);
						H.copy(this.faceNormals[X]);
						E.vmult(H, H);
						F.vadd(H, H);
						K.cross(H, I);
						I.negate(I);
						S.copy(fa);
						E.vmult(S, S);
						F.vadd(S, S);
						S.dot(I);
						fa = x.connectedFaces[ja];
						J.copy(this.faceNormals[fa]);
						fa = this.getPlaneConstantOfFace(fa);
						L.copy(J);
						E.vmult(L, L);
						fa -= L.dot(F);
						for (this.clipFaceAgainstPlane(N, R, L, fa); N.length;) N.shift();
						for (; R.length;) N.push(R.shift())
					}
					J.copy(this.faceNormals[X]);
					fa = this.getPlaneConstantOfFace(X);
					L.copy(J);
					E.vmult(L, L);
					fa -= L.dot(F);
					for (ma = 0; ma < N.length; ma++) F = L.dot(N[ma]) + fa, F <= D &&
						(console.log("clamped: depth=" + F + " to minDist=" + (D + "")), F = D), F <= U && (E = N[ma], 0 >= F && aa.push({
							point: E,
							normal: L,
							depth: F
						}))
				}
			};
			b.prototype.clipFaceAgainstPlane = function(x, F, E, N) {
				var D = x.length;
				if (2 > D) return F;
				var U = x[x.length - 1];
				var aa = E.dot(U) + N;
				for (var R = 0; R < D; R++) {
					var X = x[R];
					var ma = E.dot(X) + N;
					if (0 > aa) {
						if (0 > ma) {
							var ja = new a;
							ja.copy(X)
						} else ja = new a, U.lerp(X, aa / (aa - ma), ja);
						F.push(ja)
					} else 0 > ma && (ja = new a, U.lerp(X, aa / (aa - ma), ja), F.push(ja), F.push(X));
					U = X;
					aa = ma
				}
				return F
			};
			b.prototype.computeWorldVertices =
				function(x, F) {
					for (var E = this.vertices.length; this.worldVertices.length < E;) this.worldVertices.push(new a);
					for (var N = this.vertices, D = this.worldVertices, U = 0; U !== E; U++) F.vmult(N[U], D[U]), x.vadd(D[U], D[U]);
					this.worldVerticesNeedsUpdate = !1
				};
			new a;
			b.prototype.computeLocalAABB = function(x, F) {
				var E = this.vertices.length,
					N = this.vertices;
				x.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
				F.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
				for (var D = 0; D < E; D++) {
					var U = N[D];
					U.x < x.x ? x.x = U.x : U.x > F.x &&
						(F.x = U.x);
					U.y < x.y ? x.y = U.y : U.y > F.y && (F.y = U.y);
					U.z < x.z ? x.z = U.z : U.z > F.z && (F.z = U.z)
				}
			};
			b.prototype.computeWorldFaceNormals = function(x) {
				for (var F = this.faceNormals.length; this.worldFaceNormals.length < F;) this.worldFaceNormals.push(new a);
				for (var E = this.faceNormals, N = this.worldFaceNormals, D = 0; D !== F; D++) x.vmult(E[D], N[D]);
				this.worldFaceNormalsNeedsUpdate = !1
			};
			b.prototype.updateBoundingSphereRadius = function() {
				for (var x = 0, F = this.vertices, E = 0, N = F.length; E !== N; E++) {
					var D = F[E].norm2();
					D > x && (x = D)
				}
				this.boundingSphereRadius =
					Math.sqrt(x)
			};
			var A = new a;
			b.prototype.calculateWorldAABB = function(x, F, E, N) {
				for (var D = this.vertices.length, U = this.vertices, aa, R, X, ma, ja, fa, W = 0; W < D; W++) {
					A.copy(U[W]);
					F.vmult(A, A);
					x.vadd(A, A);
					var ca = A;
					if (ca.x < aa || void 0 === aa) aa = ca.x;
					else if (ca.x > ma || void 0 === ma) ma = ca.x;
					if (ca.y < R || void 0 === R) R = ca.y;
					else if (ca.y > ja || void 0 === ja) ja = ca.y;
					if (ca.z < X || void 0 === X) X = ca.z;
					else if (ca.z > fa || void 0 === fa) fa = ca.z
				}
				E.set(aa, R, X);
				N.set(ma, ja, fa)
			};
			b.prototype.volume = function() {
				return 4 * Math.PI * this.boundingSphereRadius /
					3
			};
			b.prototype.getAveragePointLocal = function(x) {
				x = x || new a;
				for (var F = this.vertices.length, E = this.vertices, N = 0; N < F; N++) x.vadd(E[N], x);
				x.mult(1 / F, x);
				return x
			};
			b.prototype.transformAllPoints = function(x, F) {
				var E = this.vertices.length,
					N = this.vertices;
				if (F) {
					for (var D = 0; D < E; D++) {
						var U = N[D];
						F.vmult(U, U)
					}
					for (D = 0; D < this.faceNormals.length; D++) U = this.faceNormals[D], F.vmult(U, U)
				}
				if (x)
					for (D = 0; D < E; D++) U = N[D], U.vadd(x, U)
			};
			var P = new a,
				C = new a,
				w = new a;
			b.prototype.pointIsInside = function(x) {
				var F = this.vertices,
					E = this.faces,
					N = this.faceNormals,
					D = this.faces.length;
				this.getAveragePointLocal(P);
				for (var U = 0; U < D; U++) {
					var aa = N[U];
					var R = F[E[U][0]],
						X = C;
					x.vsub(R, X);
					X = aa.dot(X);
					var ma = w;
					P.vsub(R, ma);
					aa = aa.dot(ma);
					if (0 > X && 0 < aa || 0 < X && 0 > aa) return !1
				}
				return -1
			};
			new a;
			var B = new a,
				u = new a;
			b.project = function(x, F, E, N, D) {
				var U = x.vertices.length;
				x = x.vertices;
				u.setZero();
				h.vectorToLocalFrame(E, N, F, B);
				h.pointToLocalFrame(E, N, u, u);
				N = u.dot(B);
				E = F = x[0].dot(B);
				for (var aa = 1; aa < U; aa++) {
					var R = x[aa].dot(B);
					R > F && (F = R);
					R < E && (E = R)
				}
				E -= N;
				F -= N;
				E > F && (U = E,
					E = F, F = U);
				D[0] = F;
				D[1] = E
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		39: [function(e, m, q) {
			function b(k, c, f, g) {
				var n = [],
					l = [],
					r = [],
					t = [],
					v = [],
					z = Math.cos,
					y = Math.sin;
				n.push(new a(c * z(0), c * y(0), .5 * -f));
				t.push(0);
				n.push(new a(k * z(0), k * y(0), .5 * f));
				v.push(1);
				for (var G = 0; G < g; G++) {
					var O = 2 * Math.PI / g * (G + 1),
						Q = 2 * Math.PI / g * (G + .5);
					G < g - 1 ? (n.push(new a(c * z(O), c * y(O), .5 * -f)), t.push(2 * G + 2), n.push(new a(k * z(O), k * y(O), .5 * f)), v.push(2 * G + 3), r.push([2 * G + 2, 2 * G + 3, 2 * G + 1, 2 * G])) : r.push([0, 1,
						2 * G + 1, 2 * G
					]);
					(1 === g % 2 || G < g / 2) && l.push(new a(z(Q), y(Q), 0))
				}
				r.push(v);
				l.push(new a(0, 0, 1));
				k = [];
				for (G = 0; G < t.length; G++) k.push(t[t.length - G - 1]);
				r.push(k);
				this.type = d.types.CONVEXPOLYHEDRON;
				h.call(this, n, r, l)
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3");
			e("../math/Quaternion");
			var h = e("./ConvexPolyhedron");
			b.prototype = new h
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"./ConvexPolyhedron": 38,
			"./Shape": 43
		}],
		40: [function(e, m, q) {
			function b(c, f) {
				f = k.defaults(f, {
					maxValue: null,
					minValue: null,
					elementSize: 1
				});
				this.data = c;
				this.maxValue = f.maxValue;
				this.minValue = f.minValue;
				this.elementSize = f.elementSize;
				null === f.minValue && this.updateMinValue();
				null === f.maxValue && this.updateMaxValue();
				this.cacheEnabled = !0;
				d.call(this);
				this.pillarConvex = new a;
				this.pillarOffset = new h;
				this.type = d.types.HEIGHTFIELD;
				this.updateBoundingSphereRadius();
				this._cachedPillars = {}
			}
			var d = e("./Shape"),
				a = e("./ConvexPolyhedron"),
				h = e("../math/Vec3"),
				k = e("../utils/Utils");
			m.exports = b;
			b.prototype = new d;
			b.prototype.update = function() {
				this._cachedPillars = {}
			};
			b.prototype.updateMinValue = function() {
				for (var c = this.data, f = c[0][0], g = 0; g !== c.length; g++)
					for (var n = 0; n !== c[g].length; n++) {
						var l = c[g][n];
						l < f && (f = l)
					}
				this.minValue = f
			};
			b.prototype.updateMaxValue = function() {
				for (var c = this.data, f = c[0][0], g = 0; g !== c.length; g++)
					for (var n = 0; n !== c[g].length; n++) {
						var l = c[g][n];
						l > f && (f = l)
					}
				this.maxValue = f
			};
			b.prototype.setHeightValueAtIndex = function(c, f, g) {
				this.data[c][f] = g;
				this.clearCachedConvexTrianglePillar(c, f, !1);
				0 < c && (this.clearCachedConvexTrianglePillar(c - 1, f, !0), this.clearCachedConvexTrianglePillar(c -
					1, f, !1));
				0 < f && (this.clearCachedConvexTrianglePillar(c, f - 1, !0), this.clearCachedConvexTrianglePillar(c, f - 1, !1));
				0 < f && 0 < c && this.clearCachedConvexTrianglePillar(c - 1, f - 1, !0)
			};
			b.prototype.getRectMinMax = function(c, f, g, n, l) {
				l = l || [];
				for (var r = this.data, t = this.minValue; c <= g; c++)
					for (var v = f; v <= n; v++) {
						var z = r[c][v];
						z > t && (t = z)
					}
				l[0] = this.minValue;
				l[1] = t
			};
			b.prototype.getIndexOfPosition = function(c, f, g, n) {
				var l = this.elementSize,
					r = this.data;
				c = Math.floor(c / l);
				f = Math.floor(f / l);
				g[0] = c;
				g[1] = f;
				n && (0 > c && (c = 0), 0 > f && (f = 0),
					c >= r.length - 1 && (c = r.length - 1), f >= r[0].length - 1 && (f = r[0].length - 1));
				return 0 > c || 0 > f || c >= r.length - 1 || f >= r[0].length - 1 ? !1 : !0
			};
			b.prototype.getHeightAt = function(c, f, g) {
				var n = [];
				this.getIndexOfPosition(c, f, n, g);
				c = [];
				this.getRectMinMax(n[0], n[1] + 1, n[0], n[1] + 1, c);
				return (c[0] + c[1]) / 2
			};
			b.prototype.getCacheConvexTrianglePillarKey = function(c, f, g) {
				return c + "_" + f + "_" + (g ? 1 : 0)
			};
			b.prototype.getCachedConvexTrianglePillar = function(c, f, g) {
				return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c, f, g)]
			};
			b.prototype.setCachedConvexTrianglePillar =
				function(c, f, g, n, l) {
					this._cachedPillars[this.getCacheConvexTrianglePillarKey(c, f, g)] = {
						convex: n,
						offset: l
					}
				};
			b.prototype.clearCachedConvexTrianglePillar = function(c, f, g) {
				delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c, f, g)]
			};
			b.prototype.getConvexTrianglePillar = function(c, f, g) {
				var n = this.pillarConvex,
					l = this.pillarOffset;
				if (this.cacheEnabled) {
					var r = this.getCachedConvexTrianglePillar(c, f, g);
					if (r) {
						this.pillarConvex = r.convex;
						this.pillarOffset = r.offset;
						return
					}
					n = new a;
					l = new h;
					this.pillarConvex =
						n;
					this.pillarOffset = l
				}
				r = this.data;
				var t = this.elementSize,
					v = n.faces;
				n.vertices.length = 6;
				for (var z = 0; 6 > z; z++) n.vertices[z] || (n.vertices[z] = new h);
				v.length = 5;
				for (z = 0; 5 > z; z++) v[z] || (v[z] = []);
				z = n.vertices;
				var y = (Math.min(r[c][f], r[c + 1][f], r[c][f + 1], r[c + 1][f + 1]) - this.minValue) / 2 + this.minValue;
				g ? (l.set((c + .75) * t, (f + .75) * t, y), z[0].set(.25 * t, .25 * t, r[c + 1][f + 1] - y), z[1].set(-.75 * t, .25 * t, r[c][f + 1] - y), z[2].set(.25 * t, -.75 * t, r[c + 1][f] - y), z[3].set(.25 * t, .25 * t, -y - 1), z[4].set(-.75 * t, .25 * t, -y - 1), z[5].set(.25 * t, -.75 *
					t, -y - 1), v[0][0] = 0, v[0][1] = 1, v[0][2] = 2, v[1][0] = 5, v[1][1] = 4, v[1][2] = 3, v[2][0] = 2, v[2][1] = 5, v[2][2] = 3, v[2][3] = 0, v[3][0] = 3, v[3][1] = 4, v[3][2] = 1, v[3][3] = 0, v[4][0] = 1, v[4][1] = 4, v[4][2] = 5, v[4][3] = 2) : (l.set((c + .25) * t, (f + .25) * t, y), z[0].set(-.25 * t, -.25 * t, r[c][f] - y), z[1].set(.75 * t, -.25 * t, r[c + 1][f] - y), z[2].set(-.25 * t, .75 * t, r[c][f + 1] - y), z[3].set(-.25 * t, -.25 * t, -y - 1), z[4].set(.75 * t, -.25 * t, -y - 1), z[5].set(-.25 * t, .75 * t, -y - 1), v[0][0] = 0, v[0][1] = 1, v[0][2] = 2, v[1][0] = 5, v[1][1] = 4, v[1][2] = 3, v[2][0] = 0, v[2][1] = 2, v[2][2] = 5, v[2][3] =
					3, v[3][0] = 1, v[3][1] = 0, v[3][2] = 3, v[3][3] = 4, v[4][0] = 4, v[4][1] = 5, v[4][2] = 2, v[4][3] = 1);
				n.computeNormals();
				n.computeEdges();
				n.updateBoundingSphereRadius();
				this.setCachedConvexTrianglePillar(c, f, g, n, l)
			};
			b.prototype.calculateLocalInertia = function(c, f) {
				f = f || new h;
				f.set(0, 0, 0);
				return f
			};
			b.prototype.volume = function() {
				return Number.MAX_VALUE
			};
			b.prototype.calculateWorldAABB = function(c, f, g, n) {
				g.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
				n.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
			};
			b.prototype.updateBoundingSphereRadius = function() {
				var c = this.data,
					f = this.elementSize;
				this.boundingSphereRadius = (new h(c.length * f, c[0].length * f, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue)))).norm()
			}
		}, {
			"../math/Vec3": 30,
			"../utils/Utils": 53,
			"./ConvexPolyhedron": 38,
			"./Shape": 43
		}],
		41: [function(e, m, q) {
			function b() {
				d.call(this);
				this.type = d.types.PARTICLE
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3");
			b.prototype = new d;
			b.prototype.constructor = b;
			b.prototype.calculateLocalInertia = function(h,
				k) {
				k = k || new a;
				k.set(0, 0, 0);
				return k
			};
			b.prototype.volume = function() {
				return 0
			};
			b.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = 0
			};
			b.prototype.calculateWorldAABB = function(h, k, c, f) {
				c.copy(h);
				f.copy(h)
			}
		}, {
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		42: [function(e, m, q) {
			function b() {
				d.call(this);
				this.type = d.types.PLANE;
				this.worldNormal = new a;
				this.worldNormalNeedsUpdate = !0;
				this.boundingSphereRadius = Number.MAX_VALUE
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3");
			b.prototype = new d;
			b.prototype.constructor =
				b;
			b.prototype.computeWorldNormal = function(k) {
				var c = this.worldNormal;
				c.set(0, 0, 1);
				k.vmult(c, c);
				this.worldNormalNeedsUpdate = !1
			};
			b.prototype.calculateLocalInertia = function(k, c) {
				return c = c || new a
			};
			b.prototype.volume = function() {
				return Number.MAX_VALUE
			};
			var h = new a;
			b.prototype.calculateWorldAABB = function(k, c, f, g) {
				h.set(0, 0, 1);
				c.vmult(h, h);
				c = Number.MAX_VALUE;
				f.set(-c, -c, -c);
				g.set(c, c, c);
				1 === h.x && (g.x = k.x);
				1 === h.y && (g.y = k.y);
				1 === h.z && (g.z = k.z); - 1 === h.x && (f.x = k.x); - 1 === h.y && (f.y = k.y); - 1 === h.z && (f.z = k.z)
			};
			b.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = Number.MAX_VALUE
			}
		}, {
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		43: [function(e, m, q) {
			function b() {
				this.id = b.idCounter++;
				this.boundingSphereRadius = this.type = 0;
				this.collisionResponse = !0;
				this.material = null
			}
			m.exports = b;
			b = e("./Shape");
			e("../math/Vec3");
			e("../math/Quaternion");
			e("../material/Material");
			b.prototype.constructor = b;
			b.prototype.updateBoundingSphereRadius = function() {
				throw "computeBoundingSphereRadius() not implemented for shape type " +
					this.type;
			};
			b.prototype.volume = function() {
				throw "volume() not implemented for shape type " + this.type;
			};
			b.prototype.calculateLocalInertia = function(d, a) {
				throw "calculateLocalInertia() not implemented for shape type " + this.type;
			};
			b.idCounter = 0;
			b.types = {
				SPHERE: 1,
				PLANE: 2,
				BOX: 4,
				COMPOUND: 8,
				CONVEXPOLYHEDRON: 16,
				HEIGHTFIELD: 32,
				PARTICLE: 64,
				CYLINDER: 128,
				TRIMESH: 256
			}
		}, {
			"../material/Material": 25,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		44: [function(e, m, q) {
			function b(h) {
				d.call(this);
				this.radius = void 0 !==
					h ? Number(h) : 1;
				this.type = d.types.SPHERE;
				if (0 > this.radius) throw Error("The sphere radius cannot be negative.");
				this.updateBoundingSphereRadius()
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3");
			b.prototype = new d;
			b.prototype.constructor = b;
			b.prototype.calculateLocalInertia = function(h, k) {
				k = k || new a;
				var c = 2 * h * this.radius * this.radius / 5;
				k.x = c;
				k.y = c;
				k.z = c;
				return k
			};
			b.prototype.volume = function() {
				return 4 * Math.PI * this.radius / 3
			};
			b.prototype.updateBoundingSphereRadius = function() {
				this.boundingSphereRadius = this.radius
			};
			b.prototype.calculateWorldAABB = function(h, k, c, f) {
				k = this.radius;
				for (var g = ["x", "y", "z"], n = 0; n < g.length; n++) {
					var l = g[n];
					c[l] = h[l] - k;
					f[l] = h[l] + k
				}
			}
		}, {
			"../math/Vec3": 30,
			"./Shape": 43
		}],
		45: [function(e, m, q) {
			function b(T, K) {
				d.call(this);
				this.type = d.types.TRIMESH;
				this.vertices = new Float32Array(T);
				this.indices = new Int16Array(K);
				this.normals = new Float32Array(K.length);
				this.aabb = new k;
				this.edges = null;
				this.scale = new a(1, 1, 1);
				this.tree = new c;
				this.updateEdges();
				this.updateNormals();
				this.updateAABB();
				this.updateBoundingSphereRadius();
				this.updateTree()
			}
			m.exports = b;
			var d = e("./Shape"),
				a = e("../math/Vec3");
			e("../math/Quaternion");
			var h = e("../math/Transform"),
				k = e("../collision/AABB"),
				c = e("../utils/Octree");
			b.prototype = new d;
			b.prototype.constructor = b;
			var f = new a;
			b.prototype.updateTree = function() {
				var T = this.tree;
				T.reset();
				T.aabb.copy(this.aabb);
				var K = this.scale;
				T.aabb.lowerBound.x *= 1 / K.x;
				T.aabb.lowerBound.y *= 1 / K.y;
				T.aabb.lowerBound.z *= 1 / K.z;
				T.aabb.upperBound.x *= 1 / K.x;
				T.aabb.upperBound.y *= 1 / K.y;
				T.aabb.upperBound.z *= 1 / K.z;
				K = new k;
				for (var H =
						new a, I = new a, S = new a, J = [H, I, S], L = 0; L < this.indices.length / 3; L++) {
					var A = 3 * L;
					this._getUnscaledVertex(this.indices[A], H);
					this._getUnscaledVertex(this.indices[A + 1], I);
					this._getUnscaledVertex(this.indices[A + 2], S);
					K.setFromPoints(J);
					T.insert(K, L)
				}
				T.removeEmptyNodes()
			};
			var g = new k;
			b.prototype.getTrianglesInAABB = function(T, K) {
				g.copy(T);
				var H = this.scale,
					I = H.x,
					S = H.y;
				H = H.z;
				var J = g.lowerBound,
					L = g.upperBound;
				J.x /= I;
				J.y /= S;
				J.z /= H;
				L.x /= I;
				L.y /= S;
				L.z /= H;
				return this.tree.aabbQuery(g, K)
			};
			b.prototype.setScale = function(T) {
				var K =
					T.x === T.y === T.z;
				this.scale.x === this.scale.y === this.scale.z && K || this.updateNormals();
				this.scale.copy(T);
				this.updateAABB();
				this.updateBoundingSphereRadius()
			};
			b.prototype.updateNormals = function() {
				for (var T = this.normals, K = 0; K < this.indices.length / 3; K++) {
					var H = 3 * K,
						I = this.indices[H + 1],
						S = this.indices[H + 2];
					this.getVertex(this.indices[H], v);
					this.getVertex(I, z);
					this.getVertex(S, y);
					b.computeNormal(z, v, y, f);
					T[H] = f.x;
					T[H + 1] = f.y;
					T[H + 2] = f.z
				}
			};
			b.prototype.updateEdges = function() {
				for (var T = {}, K = function(L, A) {
						T[S < J ?
							S + "_" + J : J + "_" + S] = !0
					}, H = 0; H < this.indices.length / 3; H++) {
					var I = 3 * H,
						S = this.indices[I],
						J = this.indices[I + 1];
					I = this.indices[I + 2];
					K(S, J);
					K(J, I);
					K(I, S)
				}
				K = Object.keys(T);
				this.edges = new Int16Array(2 * K.length);
				for (H = 0; H < K.length; H++) I = K[H].split("_"), this.edges[2 * H] = parseInt(I[0], 10), this.edges[2 * H + 1] = parseInt(I[1], 10)
			};
			b.prototype.getEdgeVertex = function(T, K, H) {
				this.getVertex(this.edges[2 * T + (K ? 1 : 0)], H)
			};
			var n = new a,
				l = new a;
			b.prototype.getEdgeVector = function(T, K) {
				this.getEdgeVertex(T, 0, n);
				this.getEdgeVertex(T,
					1, l);
				l.vsub(n, K)
			};
			var r = new a,
				t = new a;
			b.computeNormal = function(T, K, H, I) {
				K.vsub(T, t);
				H.vsub(K, r);
				r.cross(t, I);
				I.isZero() || I.normalize()
			};
			var v = new a,
				z = new a,
				y = new a;
			b.prototype.getVertex = function(T, K) {
				var H = this.scale;
				this._getUnscaledVertex(T, K);
				K.x *= H.x;
				K.y *= H.y;
				K.z *= H.z;
				return K
			};
			b.prototype._getUnscaledVertex = function(T, K) {
				var H = 3 * T,
					I = this.vertices;
				return K.set(I[H], I[H + 1], I[H + 2])
			};
			b.prototype.getWorldVertex = function(T, K, H, I) {
				this.getVertex(T, I);
				h.pointToWorldFrame(K, H, I, I);
				return I
			};
			b.prototype.getTriangleVertices =
				function(T, K, H, I) {
					T *= 3;
					this.getVertex(this.indices[T], K);
					this.getVertex(this.indices[T + 1], H);
					this.getVertex(this.indices[T + 2], I)
				};
			b.prototype.getNormal = function(T, K) {
				var H = 3 * T;
				return K.set(this.normals[H], this.normals[H + 1], this.normals[H + 2])
			};
			var G = new k;
			b.prototype.calculateLocalInertia = function(T, K) {
				this.computeLocalAABB(G);
				var H = G.upperBound.x - G.lowerBound.x,
					I = G.upperBound.y - G.lowerBound.y,
					S = G.upperBound.z - G.lowerBound.z;
				return K.set(1 / 12 * T * (4 * I * I + 4 * S * S), 1 / 12 * T * (4 * H * H + 4 * S * S), 1 / 12 * T * (4 * I * I + 4 * H *
					H))
			};
			var O = new a;
			b.prototype.computeLocalAABB = function(T) {
				var K = T.lowerBound;
				T = T.upperBound;
				var H = this.vertices.length;
				this.getVertex(0, O);
				K.copy(O);
				T.copy(O);
				for (var I = 0; I !== H; I++) this.getVertex(I, O), O.x < K.x ? K.x = O.x : O.x > T.x && (T.x = O.x), O.y < K.y ? K.y = O.y : O.y > T.y && (T.y = O.y), O.z < K.z ? K.z = O.z : O.z > T.z && (T.z = O.z)
			};
			b.prototype.updateAABB = function() {
				this.computeLocalAABB(this.aabb)
			};
			b.prototype.updateBoundingSphereRadius = function() {
				var T = 0,
					K = this.vertices,
					H = new a,
					I = 0;
				for (K = K.length / 3; I !== K; I++) {
					this.getVertex(I,
						H);
					var S = H.norm2();
					S > T && (T = S)
				}
				this.boundingSphereRadius = Math.sqrt(T)
			};
			new a;
			var Q = new h,
				V = new k;
			b.prototype.calculateWorldAABB = function(T, K, H, I) {
				Q.position = T;
				Q.quaternion = K;
				this.aabb.toWorldFrame(Q, V);
				H.copy(V.lowerBound);
				I.copy(V.upperBound)
			};
			b.prototype.volume = function() {
				return 4 * Math.PI * this.boundingSphereRadius / 3
			};
			b.createTorus = function(T, K, H, I, S) {
				T = T || 1;
				K = K || .5;
				H = H || 8;
				I = I || 6;
				S = S || 2 * Math.PI;
				for (var J = [], L = [], A = 0; A <= H; A++)
					for (var P = 0; P <= I; P++) {
						var C = P / I * S,
							w = A / H * Math.PI * 2;
						J.push((T + K * Math.cos(w)) *
							Math.cos(C), (T + K * Math.cos(w)) * Math.sin(C), K * Math.sin(w))
					}
				for (A = 1; A <= H; A++)
					for (P = 1; P <= I; P++) T = (I + 1) * (A - 1) + P - 1, K = (I + 1) * (A - 1) + P, S = (I + 1) * A + P, L.push((I + 1) * A + P - 1, T, S), L.push(T, K, S);
				return new b(J, L)
			}
		}, {
			"../collision/AABB": 3,
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../utils/Octree": 50,
			"./Shape": 43
		}],
		46: [function(e, m, q) {
			function b() {
				d.call(this);
				this.iterations = 10;
				this.tolerance = 1E-7
			}
			m.exports = b;
			e("../math/Vec3");
			e("../math/Quaternion");
			var d = e("./Solver");
			b.prototype = new d;
			var a = [],
				h = [],
				k = [];
			b.prototype.solve = function(c, f) {
				var g = 0,
					n = this.iterations,
					l = this.tolerance * this.tolerance,
					r = this.equations,
					t = r.length,
					v = f.bodies,
					z = v.length,
					y;
				if (0 !== t)
					for (y = 0; y !== z; y++) v[y].updateSolveMassProperties();
				h.length = t;
				k.length = t;
				a.length = t;
				for (y = 0; y !== t; y++) {
					var G = r[y];
					a[y] = 0;
					k[y] = G.computeB(c);
					h[y] = 1 / G.computeC()
				}
				if (0 !== t) {
					for (y = 0; y !== z; y++) G = v[y], g = G.wlambda, G.vlambda.set(0, 0, 0), g && g.set(0, 0, 0);
					for (g = 0; g !== n; g++) {
						for (var O = y = 0; O !== t; O++) {
							G = r[O];
							var Q = k[O];
							var V = h[O];
							var T = a[O];
							var K = G.computeGWlambda();
							Q = V * (Q - K - G.eps * T);
							T + Q < G.minForce ? Q = G.minForce - T : T + Q > G.maxForce && (Q = G.maxForce - T);
							a[O] += Q;
							y += 0 < Q ? Q : -Q;
							G.addToWlambda(Q)
						}
						if (y * y < l) break
					}
					for (y = 0; y !== z; y++) G = v[y], n = G.velocity, l = G.angularVelocity, n.vadd(G.vlambda, n), l && l.vadd(G.wlambda, l)
				}
				return g
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"./Solver": 47
		}],
		47: [function(e, m, q) {
			function b() {
				this.equations = []
			}
			m.exports = b;
			b.prototype.solve = function(d, a) {
				return 0
			};
			b.prototype.addEquation = function(d) {
				d.enabled && this.equations.push(d)
			};
			b.prototype.removeEquation =
				function(d) {
					var a = this.equations;
					d = a.indexOf(d); - 1 !== d && a.splice(d, 1)
				};
			b.prototype.removeAllEquations = function() {
				this.equations.length = 0
			}
		}, {}],
		48: [function(e, m, q) {
			function b(r) {
				k.call(this);
				this.iterations = 10;
				this.tolerance = 1E-7;
				this.subsolver = r;
				this.nodes = [];
				for (this.nodePool = []; 128 > this.nodePool.length;) this.nodePool.push(this.createNode())
			}

			function d(r) {
				for (var t = r.length, v = 0; v !== t; v++) {
					var z = r[v];
					if (!(z.visited || z.body.type & n)) return z
				}
				return !1
			}

			function a(r, t, v) {
				t.push(r.body);
				t = r.eqs.length;
				for (var z = 0; z !== t; z++) {
					var y = r.eqs[z]; - 1 === v.indexOf(y) && v.push(y)
				}
			}

			function h(r, t) {
				return t.id - r.id
			}
			m.exports = b;
			e("../math/Vec3");
			e("../math/Quaternion");
			var k = e("./Solver");
			e = e("../objects/Body");
			b.prototype = new k;
			var c = [],
				f = [],
				g = {
					bodies: []
				},
				n = e.STATIC,
				l = [];
			b.prototype.createNode = function() {
				return {
					body: null,
					children: [],
					eqs: [],
					visited: !1
				}
			};
			b.prototype.solve = function(r, t) {
				for (var v = this.nodePool, z = t.bodies, y = this.equations, G = y.length, O = z.length, Q = this.subsolver; v.length < O;) v.push(this.createNode());
				c.length = O;
				for (var V = 0; V < O; V++) c[V] = v[V];
				for (V = 0; V !== O; V++) v = c[V], v.body = z[V], v.children.length = 0, v.eqs.length = 0, v.visited = !1;
				for (O = 0; O !== G; O++) {
					v = y[O];
					V = z.indexOf(v.bi);
					var T = z.indexOf(v.bj);
					V = c[V];
					T = c[T];
					V.children.push(T);
					V.eqs.push(v);
					T.children.push(V);
					T.eqs.push(v)
				}
				z = 0;
				y = f;
				Q.tolerance = this.tolerance;
				for (Q.iterations = this.iterations; V = d(c);) {
					y.length = 0;
					g.bodies.length = 0;
					v = V;
					V = a;
					G = g.bodies;
					O = y;
					l.push(v);
					v.visited = !0;
					for (V(v, G, O); l.length;)
						for (v = l.pop(); T = d(v.children);) T.visited = !0, V(T, G, O), l.push(T);
					G = y.length;
					y = y.sort(h);
					for (V = 0; V !== G; V++) Q.addEquation(y[V]);
					Q.solve(r, g);
					Q.removeAllEquations();
					z++
				}
				return z
			}
		}, {
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"./Solver": 47
		}],
		49: [function(e, m, q) {
			e = function() {};
			m.exports = e;
			e.prototype = {
				constructor: e,
				addEventListener: function(b, d) {
					void 0 === this._listeners && (this._listeners = {});
					var a = this._listeners;
					void 0 === a[b] && (a[b] = []); - 1 === a[b].indexOf(d) && a[b].push(d);
					return this
				},
				hasEventListener: function(b, d) {
					if (void 0 === this._listeners) return !1;
					var a = this._listeners;
					return void 0 !== a[b] && -1 !== a[b].indexOf(d) ? !0 : !1
				},
				removeEventListener: function(b, d) {
					if (void 0 === this._listeners) return this;
					var a = this._listeners;
					if (void 0 === a[b]) return this;
					var h = a[b].indexOf(d); - 1 !== h && a[b].splice(h, 1);
					return this
				},
				dispatchEvent: function(b) {
					if (void 0 === this._listeners) return this;
					var d = this._listeners[b.type];
					if (void 0 !== d) {
						b.target = this;
						for (var a = 0, h = d.length; a < h; a++) d[a].call(this, b)
					}
					return this
				}
			}
		}, {}],
		50: [function(e, m, q) {
			function b(f) {
				f = f || {};
				this.root =
					f.root || null;
				this.aabb = f.aabb ? f.aabb.clone() : new a;
				this.data = [];
				this.children = []
			}

			function d(f, g) {
				g = g || {};
				g.root = null;
				g.aabb = f;
				b.call(this, g);
				this.maxDepth = "undefined" !== typeof g.maxDepth ? g.maxDepth : 8
			}
			var a = e("../collision/AABB"),
				h = e("../math/Vec3");
			m.exports = d;
			d.prototype = new b;
			b.prototype.reset = function(f, g) {
				this.children.length = this.data.length = 0
			};
			b.prototype.insert = function(f, g, n) {
				var l = this.data;
				n = n || 0;
				if (!this.aabb.contains(f)) return !1;
				var r = this.children;
				if (n < (this.maxDepth || this.root.maxDepth)) {
					var t = !1;
					r.length || (this.subdivide(), t = !0);
					for (var v = 0; 8 !== v; v++)
						if (r[v].insert(f, g, n + 1)) return !0;
					t && (r.length = 0)
				}
				l.push(g);
				return !0
			};
			var k = new h;
			b.prototype.subdivide = function() {
				var f = this.aabb,
					g = f.lowerBound,
					n = f.upperBound;
				f = this.children;
				f.push(new b({
					aabb: new a({
						lowerBound: new h(0, 0, 0)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(1, 0, 0)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(1, 1, 0)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(1, 1, 1)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(0, 1, 1)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(0,
							0, 1)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(1, 0, 1)
					})
				}), new b({
					aabb: new a({
						lowerBound: new h(0, 1, 0)
					})
				}));
				n.vsub(g, k);
				k.scale(.5, k);
				n = this.root || this;
				for (var l = 0; 8 !== l; l++) {
					var r = f[l];
					r.root = n;
					var t = r.aabb.lowerBound;
					t.x *= k.x;
					t.y *= k.y;
					t.z *= k.z;
					t.vadd(g, t);
					t.vadd(k, r.aabb.upperBound)
				}
			};
			b.prototype.aabbQuery = function(f, g) {
				for (var n = [this]; n.length;) {
					var l = n.pop();
					l.aabb.overlaps(f) && Array.prototype.push.apply(g, l.data);
					Array.prototype.push.apply(n, l.children)
				}
				return g
			};
			var c = new a;
			b.prototype.rayQuery =
				function(f, g, n) {
					f.getAABB(c);
					c.toLocalFrame(g, c);
					this.aabbQuery(c, n);
					return n
				};
			b.prototype.removeEmptyNodes = function() {
				for (var f = [this]; f.length;) {
					for (var g = f.pop(), n = g.children.length - 1; 0 <= n; n--) g.children[n].data.length || g.children.splice(n, 1);
					Array.prototype.push.apply(f, g.children)
				}
			}
		}, {
			"../collision/AABB": 3,
			"../math/Vec3": 30
		}],
		51: [function(e, m, q) {
			function b() {
				this.objects = [];
				this.type = Object
			}
			m.exports = b;
			b.prototype.release = function() {
				for (var d = arguments.length, a = 0; a !== d; a++) this.objects.push(arguments[a])
			};
			b.prototype.get = function() {
				return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
			};
			b.prototype.constructObject = function() {
				throw Error("constructObject() not implemented in this Pool subclass yet!");
			}
		}, {}],
		52: [function(e, m, q) {
			function b() {
				this.data = {
					keys: []
				}
			}
			m.exports = b;
			b.prototype.get = function(d, a) {
				if (d > a) {
					var h = a;
					a = d;
					d = h
				}
				return this.data[d + "-" + a]
			};
			b.prototype.set = function(d, a, h) {
				if (d > a) {
					var k = a;
					a = d;
					d = k
				}
				k = d + "-" + a;
				this.get(d, a) || this.data.keys.push(k);
				this.data[k] = h
			};
			b.prototype.reset =
				function() {
					for (var d = this.data, a = d.keys; 0 < a.length;) {
						var h = a.pop();
						delete d[h]
					}
				}
		}, {}],
		53: [function(e, m, q) {
			function b() {}
			m.exports = b;
			b.defaults = function(d, a) {
				d = d || {};
				for (var h in a) h in d || (d[h] = a[h]);
				return d
			}
		}, {}],
		54: [function(e, m, q) {
			function b() {
				a.call(this);
				this.type = d
			}
			m.exports = b;
			var d = e("../math/Vec3"),
				a = e("./Pool");
			b.prototype = new a;
			b.prototype.constructObject = function() {
				return new d
			}
		}, {
			"../math/Vec3": 30,
			"./Pool": 51
		}],
		55: [function(e, m, q) {
			function b(M) {
				this.contactPointPool = [];
				this.frictionEquationPool = [];
				this.result = [];
				this.frictionResult = [];
				this.v3pool = new c;
				this.world = M;
				this.currentContactMaterial = null;
				this.enableFrictionReduction = !1
			}
			m.exports = b;
			m = e("../collision/AABB");
			q = e("../shapes/Shape");
			var d = e("../collision/Ray"),
				a = e("../math/Vec3"),
				h = e("../math/Transform");
			e("../shapes/ConvexPolyhedron");
			var k = e("../math/Quaternion");
			e("../solver/Solver");
			var c = e("../utils/Vec3Pool"),
				f = e("../equations/ContactEquation"),
				g = e("../equations/FrictionEquation");
			b.prototype.createContactEquation = function(M,
				Y, ha, ka, ba, ea) {
				if (this.contactPointPool.length) {
					var la = this.contactPointPool.pop();
					la.bi = M;
					la.bj = Y
				} else la = new f(M, Y);
				la.enabled = M.collisionResponse && Y.collisionResponse && ha.collisionResponse && ka.collisionResponse;
				var qa = this.currentContactMaterial;
				la.restitution = qa.restitution;
				la.setSpookParams(qa.contactEquationStiffness, qa.contactEquationRelaxation, this.world.dt);
				M = ha.material || M.material;
				Y = ka.material || Y.material;
				M && Y && 0 <= M.restitution && 0 <= Y.restitution && (la.restitution = M.restitution * Y.restitution);
				la.si = ba || ha;
				la.sj = ea || ka;
				return la
			};
			b.prototype.createFrictionEquationsFromContact = function(M, Y) {
				var ha = M.bi,
					ka = M.bj,
					ba = this.world,
					ea = this.currentContactMaterial,
					la = ea.friction,
					qa = M.si.material || ha.material,
					na = M.sj.material || ka.material;
				qa && na && 0 <= qa.friction && 0 <= na.friction && (la = qa.friction * na.friction);
				if (0 < la) {
					la *= ba.gravity.length();
					qa = ha.invMass + ka.invMass;
					0 < qa && (qa = 1 / qa);
					var ia = this.frictionEquationPool;
					na = ia.length ? ia.pop() : new g(ha, ka, la * qa);
					ia = ia.length ? ia.pop() : new g(ha, ka, la * qa);
					na.bi =
						ia.bi = ha;
					na.bj = ia.bj = ka;
					na.minForce = ia.minForce = -la * qa;
					na.maxForce = ia.maxForce = la * qa;
					na.ri.copy(M.ri);
					na.rj.copy(M.rj);
					ia.ri.copy(M.ri);
					ia.rj.copy(M.rj);
					M.ni.tangents(na.t, ia.t);
					na.setSpookParams(ea.frictionEquationStiffness, ea.frictionEquationRelaxation, ba.dt);
					ia.setSpookParams(ea.frictionEquationStiffness, ea.frictionEquationRelaxation, ba.dt);
					na.enabled = ia.enabled = M.enabled;
					Y.push(na, ia);
					return !0
				}
				return !1
			};
			var n = new a,
				l = new a,
				r = new a;
			b.prototype.createFrictionFromAverage = function(M) {
				var Y = this.result[this.result.length -
					1];
				if (this.createFrictionEquationsFromContact(Y, this.frictionResult) && 1 !== M) {
					var ha = this.frictionResult[this.frictionResult.length - 2],
						ka = this.frictionResult[this.frictionResult.length - 1];
					n.setZero();
					l.setZero();
					r.setZero();
					for (var ba = Y.bi, ea = 0; ea !== M; ea++) Y = this.result[this.result.length - 1 - ea], Y.bodyA !== ba ? (n.vadd(Y.ni, n), l.vadd(Y.ri, l), r.vadd(Y.rj, r)) : (n.vsub(Y.ni, n), l.vadd(Y.rj, l), r.vadd(Y.ri, r));
					M = 1 / M;
					l.scale(M, ha.ri);
					r.scale(M, ha.rj);
					ka.ri.copy(ha.ri);
					ka.rj.copy(ha.rj);
					n.normalize();
					n.tangents(ha.t,
						ka.t)
				}
			};
			var t = new a,
				v = new a,
				z = new k,
				y = new k;
			b.prototype.getContacts = function(M, Y, ha, ka, ba, ea, la) {
				this.contactPointPool = ba;
				this.frictionEquationPool = la;
				this.result = ka;
				this.frictionResult = ea;
				ka = 0;
				for (ba = M.length; ka !== ba; ka++) {
					ea = M[ka];
					la = Y[ka];
					var qa = null;
					ea.material && la.material && (qa = ha.getContactMaterial(ea.material, la.material) || null);
					for (var na = 0; na < ea.shapes.length; na++) {
						ea.quaternion.mult(ea.shapeOrientations[na], z);
						ea.quaternion.vmult(ea.shapeOffsets[na], t);
						t.vadd(ea.position, t);
						for (var ia = ea.shapes[na],
								Z = 0; Z < la.shapes.length; Z++) {
							la.quaternion.mult(la.shapeOrientations[Z], y);
							la.quaternion.vmult(la.shapeOffsets[Z], v);
							v.vadd(la.position, v);
							var sa = la.shapes[Z];
							if (!(t.distanceTo(v) > ia.boundingSphereRadius + sa.boundingSphereRadius)) {
								var pa = null;
								ia.material && sa.material && (pa = ha.getContactMaterial(ia.material, sa.material) || null);
								this.currentContactMaterial = pa || qa || ha.defaultContactMaterial;
								(pa = this[ia.type | sa.type]) && (ia.type < sa.type ? pa.call(this, ia, sa, t, v, z, y, ea, la, ia, sa) : pa.call(this, sa, ia, v, t, y, z, la,
									ea, ia, sa))
							}
						}
					}
				}
			};
			b.prototype[q.types.BOX | q.types.BOX] = b.prototype.boxBox = function(M, Y, ha, ka, ba, ea, la, qa) {
				M.convexPolyhedronRepresentation.material = M.material;
				Y.convexPolyhedronRepresentation.material = Y.material;
				M.convexPolyhedronRepresentation.collisionResponse = M.collisionResponse;
				Y.convexPolyhedronRepresentation.collisionResponse = Y.collisionResponse;
				this.convexConvex(M.convexPolyhedronRepresentation, Y.convexPolyhedronRepresentation, ha, ka, ba, ea, la, qa, M, Y)
			};
			b.prototype[q.types.BOX | q.types.CONVEXPOLYHEDRON] =
				b.prototype.boxConvex = function(M, Y, ha, ka, ba, ea, la, qa) {
					M.convexPolyhedronRepresentation.material = M.material;
					M.convexPolyhedronRepresentation.collisionResponse = M.collisionResponse;
					this.convexConvex(M.convexPolyhedronRepresentation, Y, ha, ka, ba, ea, la, qa, M, Y)
				};
			b.prototype[q.types.BOX | q.types.PARTICLE] = b.prototype.boxParticle = function(M, Y, ha, ka, ba, ea, la, qa) {
				M.convexPolyhedronRepresentation.material = M.material;
				M.convexPolyhedronRepresentation.collisionResponse = M.collisionResponse;
				this.convexParticle(M.convexPolyhedronRepresentation,
					Y, ha, ka, ba, ea, la, qa, M, Y)
			};
			b.prototype[q.types.SPHERE] = b.prototype.sphereSphere = function(M, Y, ha, ka, ba, ea, la, qa) {
				ba = this.createContactEquation(la, qa, M, Y);
				ka.vsub(ha, ba.ni);
				ba.ni.normalize();
				ba.ri.copy(ba.ni);
				ba.rj.copy(ba.ni);
				ba.ri.mult(M.radius, ba.ri);
				ba.rj.mult(-Y.radius, ba.rj);
				ba.ri.vadd(ha, ba.ri);
				ba.ri.vsub(la.position, ba.ri);
				ba.rj.vadd(ka, ba.rj);
				ba.rj.vsub(qa.position, ba.rj);
				this.result.push(ba);
				this.createFrictionEquationsFromContact(ba, this.frictionResult)
			};
			var G = new a,
				O = new a,
				Q = new a;
			b.prototype[q.types.PLANE |
				q.types.TRIMESH] = b.prototype.planeTrimesh = function(M, Y, ha, ka, ba, ea, la, qa) {
				var na = new a;
				G.set(0, 0, 1);
				ba.vmult(G, G);
				for (ba = 0; ba < Y.vertices.length / 3; ba++) {
					Y.getVertex(ba, na);
					var ia = new a;
					ia.copy(na);
					h.pointToWorldFrame(ka, ea, ia, na);
					ia = O;
					na.vsub(ha, ia);
					if (0 >= G.dot(ia)) {
						var Z = this.createContactEquation(la, qa, M, Y);
						Z.ni.copy(G);
						var sa = Q;
						G.scale(ia.dot(G), sa);
						na.vsub(sa, sa);
						Z.ri.copy(sa);
						Z.ri.vsub(la.position, Z.ri);
						Z.rj.copy(na);
						Z.rj.vsub(qa.position, Z.rj);
						this.result.push(Z);
						this.createFrictionEquationsFromContact(Z,
							this.frictionResult)
					}
				}
			};
			var V = new a,
				T = new a;
			new a;
			var K = new a,
				H = new a,
				I = new a,
				S = new a,
				J = new a,
				L = new a,
				A = new a,
				P = new a,
				C = new a,
				w = new a,
				B = new a,
				u = new m,
				x = [];
			b.prototype[q.types.SPHERE | q.types.TRIMESH] = b.prototype.sphereTrimesh = function(M, Y, ha, ka, ba, ea, la, qa) {
				h.pointToLocalFrame(ka, ea, ha, A);
				ba = M.radius;
				u.lowerBound.set(A.x - ba, A.y - ba, A.z - ba);
				u.upperBound.set(A.x + ba, A.y + ba, A.z + ba);
				Y.getTrianglesInAABB(u, x);
				var na = M.radius * M.radius;
				for (ba = 0; ba < x.length; ba++)
					for (var ia = 0; 3 > ia; ia++)
						if (Y.getVertex(Y.indices[3 *
								x[ba] + ia], K), K.vsub(A, T), T.norm2() <= na) {
							H.copy(K);
							h.pointToWorldFrame(ka, ea, H, K);
							K.vsub(ha, T);
							var Z = this.createContactEquation(la, qa, M, Y);
							Z.ni.copy(T);
							Z.ni.normalize();
							Z.ri.copy(Z.ni);
							Z.ri.scale(M.radius, Z.ri);
							Z.ri.vadd(ha, Z.ri);
							Z.ri.vsub(la.position, Z.ri);
							Z.rj.copy(K);
							Z.rj.vsub(qa.position, Z.rj);
							this.result.push(Z);
							this.createFrictionEquationsFromContact(Z, this.frictionResult)
						} for (ba = 0; ba < x.length; ba++)
					for (ia = 0; 3 > ia; ia++) Y.getVertex(Y.indices[3 * x[ba] + ia], I), Y.getVertex(Y.indices[3 * x[ba] + (ia + 1) % 3],
						S), S.vsub(I, J), A.vsub(S, P), ha = P.dot(J), A.vsub(I, P), Z = P.dot(J), 0 < Z && 0 > ha && (A.vsub(I, P), L.copy(J), L.normalize(), Z = P.dot(L), L.scale(Z, P), P.vadd(I, P), ha = P.distanceTo(A), ha < M.radius && (Z = this.createContactEquation(la, qa, M, Y), P.vsub(A, Z.ni), Z.ni.normalize(), Z.ni.scale(M.radius, Z.ri), h.pointToWorldFrame(ka, ea, P, P), P.vsub(qa.position, Z.rj), h.vectorToWorldFrame(ea, Z.ni, Z.ni), h.vectorToWorldFrame(ea, Z.ri, Z.ri), this.result.push(Z), this.createFrictionEquationsFromContact(Z, this.frictionResult)));
				ba = 0;
				for (ia = x.length; ba !==
					ia; ba++) Y.getTriangleVertices(x[ba], C, w, B), Y.getNormal(x[ba], V), A.vsub(C, P), ha = P.dot(V), V.scale(ha, P), A.vsub(P, P), ha = P.distanceTo(A), d.pointInTriangle(P, C, w, B) && ha < M.radius && (Z = this.createContactEquation(la, qa, M, Y), P.vsub(A, Z.ni), Z.ni.normalize(), Z.ni.scale(M.radius, Z.ri), h.pointToWorldFrame(ka, ea, P, P), P.vsub(qa.position, Z.rj), h.vectorToWorldFrame(ea, Z.ni, Z.ni), h.vectorToWorldFrame(ea, Z.ri, Z.ri), this.result.push(Z), this.createFrictionEquationsFromContact(Z, this.frictionResult));
				x.length = 0
			};
			var F =
				new a,
				E = new a;
			b.prototype[q.types.SPHERE | q.types.PLANE] = b.prototype.spherePlane = function(M, Y, ha, ka, ba, ea, la, qa) {
				Y = this.createContactEquation(la, qa, M, Y);
				Y.ni.set(0, 0, 1);
				ea.vmult(Y.ni, Y.ni);
				Y.ni.negate(Y.ni);
				Y.ni.normalize();
				Y.ni.mult(M.radius, Y.ri);
				ha.vsub(ka, F);
				Y.ni.mult(Y.ni.dot(F), E);
				F.vsub(E, Y.rj); - F.dot(Y.ni) <= M.radius && (M = Y.ri, ea = Y.rj, M.vadd(ha, M), M.vsub(la.position, M), ea.vadd(ka, ea), ea.vsub(qa.position, ea), this.result.push(Y), this.createFrictionEquationsFromContact(Y, this.frictionResult))
			};
			var N = new a,
				D = new a,
				U = new a,
				aa = new a,
				R = new a,
				X = new a,
				ma = new a,
				ja = [new a, new a, new a, new a, new a, new a],
				fa = new a,
				W = new a,
				ca = new a,
				da = new a;
			b.prototype[q.types.SPHERE | q.types.BOX] = b.prototype.sphereBox = function(M, Y, ha, ka, ba, ea, la, qa) {
				ba = this.v3pool;
				ha.vsub(ka, aa);
				Y.getSideNormals(ja, ea);
				ea = M.radius;
				for (var na = !1, ia = null, Z = 0, sa = 0, pa = 0, va = null, wa = 0, xa = ja.length; wa !== xa && !1 === na; wa++) {
					var ya = R;
					ya.copy(ja[wa]);
					var za = ya.norm();
					ya.normalize();
					var ta = aa.dot(ya);
					if (ta < za + ea && 0 < ta) {
						var Aa = X,
							Ba = ma;
						Aa.copy(ja[(wa +
							1) % 3]);
						Ba.copy(ja[(wa + 2) % 3]);
						var Ca = Aa.norm(),
							Ga = Ba.norm();
						Aa.normalize();
						Ba.normalize();
						var Ea = aa.dot(Aa),
							Fa = aa.dot(Ba);
						Ea < Ca && Ea > -Ca && Fa < Ga && Fa > -Ga && (ta = Math.abs(ta - za - ea), null === va || ta < va) && (va = ta, sa = Ea, pa = Fa, ia = za, W.copy(ya), ca.copy(Aa), da.copy(Ba), Z++)
					}
				}
				Z && (na = !0, Z = this.createContactEquation(la, qa, M, Y), W.mult(-ea, Z.ri), Z.ni.copy(W), Z.ni.negate(Z.ni), W.mult(ia, W), ca.mult(sa, ca), W.vadd(ca, W), da.mult(pa, da), W.vadd(da, Z.rj), Z.ri.vadd(ha, Z.ri), Z.ri.vsub(la.position, Z.ri), Z.rj.vadd(ka, Z.rj), Z.rj.vsub(qa.position,
					Z.rj), this.result.push(Z), this.createFrictionEquationsFromContact(Z, this.frictionResult));
				ta = ba.get();
				for (ia = 0; 2 !== ia && !na; ia++)
					for (sa = 0; 2 !== sa && !na; sa++)
						for (pa = 0; 2 !== pa && !na; pa++) ta.set(0, 0, 0), ia ? ta.vadd(ja[0], ta) : ta.vsub(ja[0], ta), sa ? ta.vadd(ja[1], ta) : ta.vsub(ja[1], ta), pa ? ta.vadd(ja[2], ta) : ta.vsub(ja[2], ta), ka.vadd(ta, fa), fa.vsub(ha, fa), fa.norm2() < ea * ea && (na = !0, Z = this.createContactEquation(la, qa, M, Y), Z.ri.copy(fa), Z.ri.normalize(), Z.ni.copy(Z.ri), Z.ri.mult(ea, Z.ri), Z.rj.copy(ta), Z.ri.vadd(ha, Z.ri),
							Z.ri.vsub(la.position, Z.ri), Z.rj.vadd(ka, Z.rj), Z.rj.vsub(qa.position, Z.rj), this.result.push(Z), this.createFrictionEquationsFromContact(Z, this.frictionResult));
				ba.release(ta);
				va = ba.get();
				wa = ba.get();
				Z = ba.get();
				xa = ba.get();
				ta = ba.get();
				ya = ja.length;
				for (ia = 0; ia !== ya && !na; ia++)
					for (sa = 0; sa !== ya && !na; sa++)
						if (ia % 3 !== sa % 3) {
							ja[sa].cross(ja[ia], va);
							va.normalize();
							ja[ia].vadd(ja[sa], wa);
							Z.copy(ha);
							Z.vsub(wa, Z);
							Z.vsub(ka, Z);
							za = Z.dot(va);
							va.mult(za, xa);
							for (pa = 0; pa === ia % 3 || pa === sa % 3;) pa++;
							ta.copy(ha);
							ta.vsub(xa,
								ta);
							ta.vsub(wa, ta);
							ta.vsub(ka, ta);
							za = Math.abs(za);
							Aa = ta.norm();
							za < ja[pa].norm() && Aa < ea && (na = !0, pa = this.createContactEquation(la, qa, M, Y), wa.vadd(xa, pa.rj), pa.rj.copy(pa.rj), ta.negate(pa.ni), pa.ni.normalize(), pa.ri.copy(pa.rj), pa.ri.vadd(ka, pa.ri), pa.ri.vsub(ha, pa.ri), pa.ri.normalize(), pa.ri.mult(ea, pa.ri), pa.ri.vadd(ha, pa.ri), pa.ri.vsub(la.position, pa.ri), pa.rj.vadd(ka, pa.rj), pa.rj.vsub(qa.position, pa.rj), this.result.push(pa), this.createFrictionEquationsFromContact(pa, this.frictionResult))
						} ba.release(va,
					wa, Z, xa, ta)
			};
			var oa = new a,
				ua = new a,
				ra = new a,
				Da = new a,
				Ra = new a,
				Sa = new a,
				Ua = new a,
				eb = new a,
				fb = new a,
				gb = new a;
			b.prototype[q.types.SPHERE | q.types.CONVEXPOLYHEDRON] = b.prototype.sphereConvex = function(M, Y, ha, ka, ba, ea, la, qa) {
				ba = this.v3pool;
				ha.vsub(ka, oa);
				for (var na = Y.faceNormals, ia = Y.faces, Z = Y.vertices, sa = M.radius, pa = 0; pa !== Z.length; pa++) {
					var va = Ra;
					ea.vmult(Z[pa], va);
					ka.vadd(va, va);
					var wa = Da;
					va.vsub(ha, wa);
					if (wa.norm2() < sa * sa) {
						M = this.createContactEquation(la, qa, M, Y);
						M.ri.copy(wa);
						M.ri.normalize();
						M.ni.copy(M.ri);
						M.ri.mult(sa, M.ri);
						va.vsub(ka, M.rj);
						M.ri.vadd(ha, M.ri);
						M.ri.vsub(la.position, M.ri);
						M.rj.vadd(ka, M.rj);
						M.rj.vsub(qa.position, M.rj);
						this.result.push(M);
						this.createFrictionEquationsFromContact(M, this.frictionResult);
						return
					}
				}
				pa = 0;
				for (va = ia.length; pa !== va; pa++) {
					wa = ia[pa];
					var xa = Sa;
					ea.vmult(na[pa], xa);
					var ya = Ua;
					ea.vmult(Z[wa[0]], ya);
					ya.vadd(ka, ya);
					var za = eb;
					xa.mult(-sa, za);
					ha.vadd(za, za);
					var ta = fb;
					za.vsub(ya, ta);
					za = ta.dot(xa);
					ta = gb;
					ha.vsub(ya, ta);
					if (0 > za && 0 < ta.dot(xa)) {
						ya = [];
						ta = 0;
						for (var Aa = wa.length; ta !==
							Aa; ta++) {
							var Ba = ba.get();
							ea.vmult(Z[wa[ta]], Ba);
							ka.vadd(Ba, Ba);
							ya.push(Ba)
						}
						a: {
							ta = ya;Aa = xa;Ba = ha;
							for (var Ca = null, Ga = ta.length, Ea = 0; Ea !== Ga; Ea++) {
								var Fa = ta[Ea],
									Ta = N;
								ta[(Ea + 1) % Ga].vsub(Fa, Ta);
								var $a = D;
								Ta.cross(Aa, $a);
								Ta = U;
								Ba.vsub(Fa, Ta);
								Fa = $a.dot(Ta);
								if (null === Ca || 0 < Fa && !0 === Ca || 0 >= Fa && !1 === Ca) null === Ca && (Ca = 0 < Fa);
								else {
									ta = !1;
									break a
								}
							}
							ta = !0
						}
						if (ta) {
							M = this.createContactEquation(la, qa, M, Y);
							xa.mult(-sa, M.ri);
							xa.negate(M.ni);
							Y = ba.get();
							xa.mult(-za, Y);
							ea = ba.get();
							xa.mult(-sa, ea);
							ha.vsub(ka, M.rj);
							M.rj.vadd(ea,
								M.rj);
							M.rj.vadd(Y, M.rj);
							M.rj.vadd(ka, M.rj);
							M.rj.vsub(qa.position, M.rj);
							M.ri.vadd(ha, M.ri);
							M.ri.vsub(la.position, M.ri);
							ba.release(Y);
							ba.release(ea);
							this.result.push(M);
							this.createFrictionEquationsFromContact(M, this.frictionResult);
							ta = 0;
							for (wa = ya.length; ta !== wa; ta++) ba.release(ya[ta]);
							break
						} else
							for (ta = 0; ta !== wa.length; ta++) {
								xa = ba.get();
								za = ba.get();
								ea.vmult(Z[wa[(ta + 1) % wa.length]], xa);
								ea.vmult(Z[wa[(ta + 2) % wa.length]], za);
								ka.vadd(xa, xa);
								ka.vadd(za, za);
								Ga = ua;
								za.vsub(xa, Ga);
								Ca = ra;
								Ga.unit(Ca);
								Aa = ba.get();
								Ba = ba.get();
								ha.vsub(xa, Ba);
								Ea = Ba.dot(Ca);
								Ca.mult(Ea, Aa);
								Aa.vadd(xa, Aa);
								Ca = ba.get();
								Aa.vsub(ha, Ca);
								if (0 < Ea && Ea * Ea < Ga.norm2() && Ca.norm2() < sa * sa) {
									M = this.createContactEquation(la, qa, M, Y);
									Aa.vsub(ka, M.rj);
									Aa.vsub(ha, M.ni);
									M.ni.normalize();
									M.ni.mult(sa, M.ri);
									M.rj.vadd(ka, M.rj);
									M.rj.vsub(qa.position, M.rj);
									M.ri.vadd(ha, M.ri);
									M.ri.vsub(la.position, M.ri);
									this.result.push(M);
									this.createFrictionEquationsFromContact(M, this.frictionResult);
									ta = 0;
									for (wa = ya.length; ta !== wa; ta++) ba.release(ya[ta]);
									ba.release(xa);
									ba.release(za);
									ba.release(Aa);
									ba.release(Ca);
									ba.release(Ba);
									return
								}
								ba.release(xa);
								ba.release(za);
								ba.release(Aa);
								ba.release(Ca);
								ba.release(Ba)
							}
						ta = 0;
						for (wa = ya.length; ta !== wa; ta++) ba.release(ya[ta])
					}
				}
			};
			new a;
			new a;
			b.prototype[q.types.PLANE | q.types.BOX] = b.prototype.planeBox = function(M, Y, ha, ka, ba, ea, la, qa) {
				Y.convexPolyhedronRepresentation.material = Y.material;
				Y.convexPolyhedronRepresentation.collisionResponse = Y.collisionResponse;
				this.planeConvex(M, Y.convexPolyhedronRepresentation, ha, ka, ba, ea, la, qa)
			};
			var Ha = new a,
				Ia = new a,
				Xa = new a,
				hb = new a;
			b.prototype[q.types.PLANE | q.types.CONVEXPOLYHEDRON] = b.prototype.planeConvex = function(M, Y, ha, ka, ba, ea, la, qa) {
				Ia.set(0, 0, 1);
				ba.vmult(Ia, Ia);
				for (var na = ba = 0; na !== Y.vertices.length; na++)
					if (Ha.copy(Y.vertices[na]), ea.vmult(Ha, Ha), ka.vadd(Ha, Ha), Ha.vsub(ha, Xa), 0 >= Ia.dot(Xa)) {
						var ia = this.createContactEquation(la, qa, M, Y),
							Z = hb;
						Ia.mult(Ia.dot(Xa), Z);
						Ha.vsub(Z, Z);
						Z.vsub(ha, ia.ri);
						ia.ni.copy(Ia);
						Ha.vsub(ka, ia.rj);
						ia.ri.vadd(ha, ia.ri);
						ia.ri.vsub(la.position, ia.ri);
						ia.rj.vadd(ka, ia.rj);
						ia.rj.vsub(qa.position,
							ia.rj);
						this.result.push(ia);
						ba++;
						this.enableFrictionReduction || this.createFrictionEquationsFromContact(ia, this.frictionResult)
					} this.enableFrictionReduction && ba && this.createFrictionFromAverage(ba)
			};
			var Ya = new a,
				Va = new a;
			b.prototype[q.types.CONVEXPOLYHEDRON] = b.prototype.convexConvex = function(M, Y, ha, ka, ba, ea, la, qa, na, ia, Z, sa) {
				if (!(ha.distanceTo(ka) > M.boundingSphereRadius + Y.boundingSphereRadius) && M.findSeparatingAxis(Y, ha, ba, ka, ea, Ya, Z, sa)) {
					Z = [];
					M.clipAgainstHull(ha, ba, Y, ka, ea, Ya, -100, 100, Z);
					for (ea = ba =
						0; ea !== Z.length; ea++) {
						sa = this.createContactEquation(la, qa, M, Y, na, ia);
						var pa = sa.ri,
							va = sa.rj;
						Ya.negate(sa.ni);
						Z[ea].normal.negate(Va);
						Va.mult(Z[ea].depth, Va);
						Z[ea].point.vadd(Va, pa);
						va.copy(Z[ea].point);
						pa.vsub(ha, pa);
						va.vsub(ka, va);
						pa.vadd(ha, pa);
						pa.vsub(la.position, pa);
						va.vadd(ka, va);
						va.vsub(qa.position, va);
						this.result.push(sa);
						ba++;
						this.enableFrictionReduction || this.createFrictionEquationsFromContact(sa, this.frictionResult)
					}
					this.enableFrictionReduction && ba && this.createFrictionFromAverage(ba)
				}
			};
			var Ja =
				new a,
				ab = new a,
				Wa = new a;
			b.prototype[q.types.PLANE | q.types.PARTICLE] = b.prototype.planeParticle = function(M, Y, ha, ka, ba, ea, la, qa) {
				Ja.set(0, 0, 1);
				la.quaternion.vmult(Ja, Ja);
				ka.vsub(la.position, ab);
				0 >= Ja.dot(ab) && (M = this.createContactEquation(qa, la, Y, M), M.ni.copy(Ja), M.ni.negate(M.ni), M.ri.set(0, 0, 0), Ja.mult(Ja.dot(ka), Wa), ka.vsub(Wa, Wa), M.rj.copy(Wa), this.result.push(M), this.createFrictionEquationsFromContact(M, this.frictionResult))
			};
			var Ma = new a;
			b.prototype[q.types.PARTICLE | q.types.SPHERE] = b.prototype.sphereParticle =
				function(M, Y, ha, ka, ba, ea, la, qa) {
					Ma.set(0, 0, 1);
					ka.vsub(ha, Ma);
					Ma.norm2() <= M.radius * M.radius && (Y = this.createContactEquation(qa, la, Y, M), Ma.normalize(), Y.rj.copy(Ma), Y.rj.mult(M.radius, Y.rj), Y.ni.copy(Ma), Y.ni.negate(Y.ni), Y.ri.set(0, 0, 0), this.result.push(Y), this.createFrictionEquationsFromContact(Y, this.frictionResult))
				};
			var bb = new k,
				Na = new a;
			new a;
			var Za = new a,
				cb = new a,
				Oa = new a;
			b.prototype[q.types.PARTICLE | q.types.CONVEXPOLYHEDRON] = b.prototype.convexParticle = function(M, Y, ha, ka, ba, ea, la, qa) {
				var na = -1;
				ea = null;
				var ia = 0;
				Na.copy(ka);
				Na.vsub(ha, Na);
				ba.conjugate(bb);
				bb.vmult(Na, Na);
				if (M.pointIsInside(Na)) {
					M.worldVerticesNeedsUpdate && M.computeWorldVertices(ha, ba);
					M.worldFaceNormalsNeedsUpdate && M.computeWorldFaceNormals(ba);
					ba = 0;
					for (var Z = M.faces.length; ba !== Z; ba++) {
						var sa = M.worldFaceNormals[ba];
						ka.vsub(M.worldVertices[M.faces[ba][0]], cb);
						var pa = -sa.dot(cb);
						if (null === ea || Math.abs(pa) < Math.abs(ea)) ea = pa, na = ba, Za.copy(sa), ia++
					} - 1 !== na ? (M = this.createContactEquation(qa, la, Y, M), Za.mult(ea, Oa), Oa.vadd(ka, Oa),
						Oa.vsub(ha, Oa), M.rj.copy(Oa), Za.negate(M.ni), M.ri.set(0, 0, 0), Y = M.ri, ea = M.rj, Y.vadd(ka, Y), Y.vsub(qa.position, Y), ea.vadd(ha, ea), ea.vsub(la.position, ea), this.result.push(M), this.createFrictionEquationsFromContact(M, this.frictionResult)) : console.warn("Point found inside convex, but did not find penetrating face!")
				}
			};
			b.prototype[q.types.BOX | q.types.HEIGHTFIELD] = b.prototype.boxHeightfield = function(M, Y, ha, ka, ba, ea, la, qa) {
				M.convexPolyhedronRepresentation.material = M.material;
				M.convexPolyhedronRepresentation.collisionResponse =
					M.collisionResponse;
				this.convexHeightfield(M.convexPolyhedronRepresentation, Y, ha, ka, ba, ea, la, qa)
			};
			var Ka = new a,
				Pa = new a,
				db = [0];
			b.prototype[q.types.CONVEXPOLYHEDRON | q.types.HEIGHTFIELD] = b.prototype.convexHeightfield = function(M, Y, ha, ka, ba, ea, la, qa) {
				var na = Y.data,
					ia = Y.elementSize,
					Z = M.boundingSphereRadius;
				h.pointToLocalFrame(ka, ea, ha, Ka);
				var sa = Math.floor((Ka.x - Z) / ia) - 1,
					pa = Math.ceil((Ka.x + Z) / ia) + 1,
					va = Math.floor((Ka.y - Z) / ia) - 1;
				ia = Math.ceil((Ka.y + Z) / ia) + 1;
				if (!(0 > pa || 0 > ia || sa > na.length || va > na[0].length)) {
					0 >
						sa && (sa = 0);
					0 > pa && (pa = 0);
					0 > va && (va = 0);
					0 > ia && (ia = 0);
					sa >= na.length && (sa = na.length - 1);
					pa >= na.length && (pa = na.length - 1);
					ia >= na[0].length && (ia = na[0].length - 1);
					va >= na[0].length && (va = na[0].length - 1);
					na = [];
					Y.getRectMinMax(sa, va, pa, ia, na);
					var wa = na[0];
					if (!(Ka.z - Z > na[1] || Ka.z + Z < wa))
						for (Z = sa; Z < pa; Z++)
							for (sa = va; sa < ia; sa++) Y.getConvexTrianglePillar(Z, sa, !1), h.pointToWorldFrame(ka, ea, Y.pillarOffset, Pa), ha.distanceTo(Pa) < Y.pillarConvex.boundingSphereRadius + M.boundingSphereRadius && this.convexConvex(M, Y.pillarConvex,
								ha, Pa, ba, ea, la, qa, null, null, db, null), Y.getConvexTrianglePillar(Z, sa, !0), h.pointToWorldFrame(ka, ea, Y.pillarOffset, Pa), ha.distanceTo(Pa) < Y.pillarConvex.boundingSphereRadius + M.boundingSphereRadius && this.convexConvex(M, Y.pillarConvex, ha, Pa, ba, ea, la, qa, null, null, db, null)
				}
			};
			var La = new a,
				Qa = new a;
			b.prototype[q.types.SPHERE | q.types.HEIGHTFIELD] = b.prototype.sphereHeightfield = function(M, Y, ha, ka, ba, ea, la, qa) {
				var na = Y.data,
					ia = M.radius,
					Z = Y.elementSize;
				h.pointToLocalFrame(ka, ea, ha, La);
				var sa = Math.floor((La.x - ia) /
						Z) - 1,
					pa = Math.ceil((La.x + ia) / Z) + 1,
					va = Math.floor((La.y - ia) / Z) - 1;
				Z = Math.ceil((La.y + ia) / Z) + 1;
				if (!(0 > pa || 0 > Z || sa > na.length || Z > na[0].length)) {
					0 > sa && (sa = 0);
					0 > pa && (pa = 0);
					0 > va && (va = 0);
					0 > Z && (Z = 0);
					sa >= na.length && (sa = na.length - 1);
					pa >= na.length && (pa = na.length - 1);
					Z >= na[0].length && (Z = na[0].length - 1);
					va >= na[0].length && (va = na[0].length - 1);
					na = [];
					Y.getRectMinMax(sa, va, pa, Z, na);
					var wa = na[0];
					if (!(La.z - ia > na[1] || La.z + ia < wa))
						for (ia = this.result; sa < pa; sa++)
							for (na = va; na < Z; na++)
								if (wa = ia.length, Y.getConvexTrianglePillar(sa,
										na, !1), h.pointToWorldFrame(ka, ea, Y.pillarOffset, Qa), ha.distanceTo(Qa) < Y.pillarConvex.boundingSphereRadius + M.boundingSphereRadius && this.sphereConvex(M, Y.pillarConvex, ha, Qa, ba, ea, la, qa), Y.getConvexTrianglePillar(sa, na, !0), h.pointToWorldFrame(ka, ea, Y.pillarOffset, Qa), ha.distanceTo(Qa) < Y.pillarConvex.boundingSphereRadius + M.boundingSphereRadius && this.sphereConvex(M, Y.pillarConvex, ha, Qa, ba, ea, la, qa), 2 < ia.length - wa) return
				}
			}
		}, {
			"../collision/AABB": 3,
			"../collision/Ray": 9,
			"../equations/ContactEquation": 19,
			"../equations/FrictionEquation": 21,
			"../math/Quaternion": 28,
			"../math/Transform": 29,
			"../math/Vec3": 30,
			"../shapes/ConvexPolyhedron": 38,
			"../shapes/Shape": 43,
			"../solver/Solver": 47,
			"../utils/Vec3Pool": 54
		}],
		56: [function(e, m, q) {
			function b() {
				k.apply(this);
				this.dt = -1;
				this.allowSleep = !1;
				this.contacts = [];
				this.frictionEquations = [];
				this.quatNormalizeSkip = 0;
				this.quatNormalizeFast = !1;
				this.stepnumber = this.time = 0;
				this.default_dt = 1 / 60;
				this.nextId = 0;
				this.gravity = new d;
				this.broadphase = new v;
				this.bodies = [];
				this.solver = new a;
				this.constraints = [];
				this.narrowphase =
					new h(this);
				this.collisionMatrix = new c;
				this.collisionMatrixPrevious = new c;
				this.materials = [];
				this.contactmaterials = [];
				this.contactMaterialTable = new l;
				this.defaultMaterial = new f("default");
				this.defaultContactMaterial = new g(this.defaultMaterial, this.defaultMaterial, {
					friction: .3,
					restitution: 0
				});
				this.doProfiling = !1;
				this.profile = {
					solve: 0,
					makeContactConstraints: 0,
					broadphase: 0,
					integrate: 0,
					narrowphase: 0
				};
				this.subsystems = [];
				this.addBodyEvent = {
					type: "addBody",
					body: null
				};
				this.removeBodyEvent = {
					type: "removeBody",
					body: null
				}
			}
			m.exports = b;
			e("../shapes/Shape");
			var d = e("../math/Vec3");
			m = e("../math/Quaternion");
			var a = e("../solver/GSSolver");
			e("../utils/Vec3Pool");
			e("../equations/ContactEquation");
			e("../equations/FrictionEquation");
			var h = e("./Narrowphase"),
				k = e("../utils/EventTarget"),
				c = e("../collision/ArrayCollisionMatrix"),
				f = e("../material/Material"),
				g = e("../material/ContactMaterial"),
				n = e("../objects/Body"),
				l = e("../utils/TupleDictionary"),
				r = e("../collision/RaycastResult");
			q = e("../collision/AABB");
			var t = e("../collision/Ray"),
				v = e("../collision/NaiveBroadphase");
			b.prototype = new k;
			new q;
			var z = new t;
			b.prototype.getContactMaterial = function(A, P) {
				return this.contactMaterialTable.get(A.id, P.id)
			};
			b.prototype.numObjects = function() {
				return this.bodies.length
			};
			b.prototype.collisionMatrixTick = function() {
				var A = this.collisionMatrixPrevious;
				this.collisionMatrixPrevious = this.collisionMatrix;
				this.collisionMatrix = A;
				this.collisionMatrix.reset()
			};
			b.prototype.add = b.prototype.addBody = function(A) {
				-1 === this.bodies.indexOf(A) && (A.index = this.bodies.length,
					this.bodies.push(A), A.world = this, A.initPosition.copy(A.position), A.initVelocity.copy(A.velocity), A.timeLastSleepy = this.time, A instanceof n && (A.initAngularVelocity.copy(A.angularVelocity), A.initQuaternion.copy(A.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = A, this.dispatchEvent(this.addBodyEvent))
			};
			b.prototype.addConstraint = function(A) {
				this.constraints.push(A)
			};
			b.prototype.removeConstraint = function(A) {
				A = this.constraints.indexOf(A); - 1 !== A && this.constraints.splice(A,
					1)
			};
			b.prototype.rayTest = function(A, P, C) {
				C instanceof r ? this.raycastClosest(A, P, {
					skipBackfaces: !0
				}, C) : this.raycastAll(A, P, {
					skipBackfaces: !0
				}, C)
			};
			b.prototype.raycastAll = function(A, P, C, w) {
				C.mode = t.ALL;
				C.from = A;
				C.to = P;
				C.callback = w;
				return z.intersectWorld(this, C)
			};
			b.prototype.raycastAny = function(A, P, C, w) {
				C.mode = t.ANY;
				C.from = A;
				C.to = P;
				C.result = w;
				return z.intersectWorld(this, C)
			};
			b.prototype.raycastClosest = function(A, P, C, w) {
				C.mode = t.CLOSEST;
				C.from = A;
				C.to = P;
				C.result = w;
				return z.intersectWorld(this, C)
			};
			b.prototype.remove =
				function(A) {
					A.world = null;
					var P = this.bodies.length - 1,
						C = this.bodies,
						w = C.indexOf(A);
					if (-1 !== w) {
						C.splice(w, 1);
						for (w = 0; w !== C.length; w++) C[w].index = w;
						this.collisionMatrix.setNumObjects(P);
						this.removeBodyEvent.body = A;
						this.dispatchEvent(this.removeBodyEvent)
					}
				};
			b.prototype.removeBody = b.prototype.remove;
			b.prototype.addMaterial = function(A) {
				this.materials.push(A)
			};
			b.prototype.addContactMaterial = function(A) {
				this.contactmaterials.push(A);
				this.contactMaterialTable.set(A.materials[0].id, A.materials[1].id, A)
			};
			"undefined" ===
			typeof performance && (performance = {});
			if (!performance.now) {
				var y = Date.now();
				performance.timing && performance.timing.navigationStart && (y = performance.timing.navigationStart);
				performance.now = function() {
					return Date.now() - y
				}
			}
			var G = new d;
			b.prototype.step = function(A, P, C) {
				C = C || 10;
				P = P || 0;
				if (0 === P) this.internalStep(A), this.time += A;
				else {
					var w = Math.floor((this.time + P) / A) - Math.floor(this.time / A);
					w = Math.min(w, C);
					C = performance.now();
					for (var B = 0; B !== w && !(this.internalStep(A), performance.now() - C > 1E3 * A); B++);
					this.time +=
						P;
					A = this.time % A / A;
					P = this.bodies;
					for (w = 0; w !== P.length; w++) C = P[w], C.type !== n.STATIC && C.sleepState !== n.SLEEPING ? (C.position.vsub(C.previousPosition, G), G.scale(A, G), C.position.vadd(G, C.interpolatedPosition)) : (C.interpolatedPosition.copy(C.position), C.interpolatedQuaternion.copy(C.quaternion))
				}
			};
			var O = {
					type: "postStep"
				},
				Q = {
					type: "preStep"
				},
				V = {
					type: "collide",
					body: null,
					contact: null
				},
				T = [],
				K = [],
				H = [],
				I = [];
			new d;
			new d;
			new d;
			new d;
			new d;
			new d;
			new d;
			new d;
			new d;
			new m;
			var S = new m,
				J = new m,
				L = new d;
			b.prototype.internalStep =
				function(A) {
					this.dt = A;
					var P = this.contacts,
						C = this.numObjects(),
						w = this.bodies,
						B = this.solver,
						u = this.gravity,
						x = this.doProfiling,
						F = this.profile,
						E = n.DYNAMIC,
						N, D = this.constraints;
					u.norm();
					var U = u.x,
						aa = u.y,
						R = u.z;
					x && (N = performance.now());
					for (u = 0; u !== C; u++) {
						var X = w[u];
						if (X.type & E) {
							var ma = X.force;
							X = X.mass;
							ma.x += X * U;
							ma.y += X * aa;
							ma.z += X * R
						}
					}
					u = 0;
					for (X = this.subsystems.length; u !== X; u++) this.subsystems[u].update();
					x && (N = performance.now());
					H.length = 0;
					I.length = 0;
					this.broadphase.collisionPairs(this, H, I);
					x && (F.broadphase =
						performance.now() - N);
					X = D.length;
					for (u = 0; u !== X; u++)
						if (U = D[u], !U.collideConnected)
							for (aa = H.length - 1; 0 <= aa; --aa)
								if (U.bodyA === H[aa] && U.bodyB === I[aa] || U.bodyB === H[aa] && U.bodyA === I[aa]) H.splice(aa, 1), I.splice(aa, 1);
					this.collisionMatrixTick();
					x && (N = performance.now());
					X = P.length;
					for (u = 0; u !== X; u++) T.push(P[u]);
					P.length = 0;
					X = this.frictionEquations.length;
					for (u = 0; u !== X; u++) K.push(this.frictionEquations[u]);
					this.frictionEquations.length = 0;
					this.narrowphase.getContacts(H, I, this, P, T, this.frictionEquations, K);
					x &&
						(F.narrowphase = performance.now() - N);
					x && (N = performance.now());
					for (u = 0; u < this.frictionEquations.length; u++) B.addEquation(this.frictionEquations[u]);
					u = P.length;
					for (aa = 0; aa !== u; aa++) U = P[aa], X = U.bi, R = U.bj, X.material && R.material && this.getContactMaterial(X.material, R.material), X.material && R.material && 0 <= X.material.restitution && 0 <= R.material.restitution && (U.restitution = X.material.restitution * R.material.restitution), B.addEquation(U), X.allowSleep && X.type === n.DYNAMIC && X.sleepState === n.SLEEPING && R.sleepState ===
						n.AWAKE && R.type !== n.STATIC && R.velocity.norm2() + R.angularVelocity.norm2() >= 2 * Math.pow(R.sleepSpeedLimit, 2) && (X._wakeUpAfterNarrowphase = !0), R.allowSleep && R.type === n.DYNAMIC && R.sleepState === n.SLEEPING && X.sleepState === n.AWAKE && X.type !== n.STATIC && X.velocity.norm2() + X.angularVelocity.norm2() >= 2 * Math.pow(X.sleepSpeedLimit, 2) && (R._wakeUpAfterNarrowphase = !0), this.collisionMatrix.set(X, R, !0), this.collisionMatrixPrevious.get(X, R) || (V.body = R, V.contact = U, X.dispatchEvent(V), V.body = X, R.dispatchEvent(V));
					x && (F.makeContactConstraints =
						performance.now() - N, N = performance.now());
					for (u = 0; u !== C; u++) X = w[u], X._wakeUpAfterNarrowphase && (X.wakeUp(), X._wakeUpAfterNarrowphase = !1);
					X = D.length;
					for (u = 0; u !== X; u++)
						for (U = D[u], U.update(), aa = 0, P = U.equations.length; aa !== P; aa++) B.addEquation(U.equations[aa]);
					B.solve(A, this);
					x && (F.solve = performance.now() - N);
					B.removeAllEquations();
					B = Math.pow;
					for (u = 0; u !== C; u++)
						if (X = w[u], X.type & E && (D = B(1 - X.linearDamping, A), P = X.velocity, P.mult(D, P), D = X.angularVelocity)) P = B(1 - X.angularDamping, A), D.mult(P, D);
					this.dispatchEvent(Q);
					for (u = 0; u !== C; u++) X = w[u], X.preStep && X.preStep.call(X);
					x && (N = performance.now());
					E = n.DYNAMIC | n.KINEMATIC;
					B = 0 === this.stepnumber % (this.quatNormalizeSkip + 1);
					D = this.quatNormalizeFast;
					P = .5 * A;
					for (u = 0; u !== C; u++)
						if (X = w[u], U = X.force, aa = X.torque, X.type & E && X.sleepState !== n.SLEEPING) {
							R = X.velocity;
							ma = X.angularVelocity;
							var ja = X.position,
								fa = X.quaternion,
								W = X.invMass,
								ca = X.invInertiaWorld;
							R.x += U.x * W * A;
							R.y += U.y * W * A;
							R.z += U.z * W * A;
							X.angularVelocity && (ca.vmult(aa, L), L.mult(A, L), L.vadd(ma, ma));
							ja.x += R.x * A;
							ja.y += R.y * A;
							ja.z +=
								R.z * A;
							X.angularVelocity && (S.set(ma.x, ma.y, ma.z, 0), S.mult(fa, J), fa.x += P * J.x, fa.y += P * J.y, fa.z += P * J.z, fa.w += P * J.w, B && (D ? fa.normalizeFast() : fa.normalize()));
							X.aabb && (X.aabbNeedsUpdate = !0);
							X.updateInertiaWorld && X.updateInertiaWorld()
						} this.clearForces();
					this.broadphase.dirty = !0;
					x && (F.integrate = performance.now() - N);
					this.time += A;
					this.stepnumber += 1;
					this.dispatchEvent(O);
					for (u = 0; u !== C; u++) X = w[u], (A = X.postStep) && A.call(X);
					if (this.allowSleep)
						for (u = 0; u !== C; u++) w[u].sleepTick(this.time)
				};
			b.prototype.clearForces =
				function() {
					for (var A = this.bodies, P = A.length, C = 0; C !== P; C++) {
						var w = A[C];
						w.force.set(0, 0, 0);
						w.torque.set(0, 0, 0)
					}
				}
		}, {
			"../collision/AABB": 3,
			"../collision/ArrayCollisionMatrix": 4,
			"../collision/NaiveBroadphase": 7,
			"../collision/Ray": 9,
			"../collision/RaycastResult": 10,
			"../equations/ContactEquation": 19,
			"../equations/FrictionEquation": 21,
			"../material/ContactMaterial": 24,
			"../material/Material": 25,
			"../math/Quaternion": 28,
			"../math/Vec3": 30,
			"../objects/Body": 31,
			"../shapes/Shape": 43,
			"../solver/GSSolver": 46,
			"../utils/EventTarget": 49,
			"../utils/TupleDictionary": 52,
			"../utils/Vec3Pool": 54,
			"./Narrowphase": 55
		}]
	}, {}, [2])(2)
});
CANNON = CANNON || {};
var camera, scene, renderer;
CANNON.Demo = function(p) {
	function e() {
		if (G) {
			for (var W in G.__controllers) G.__controllers[W].updateDisplay();
			for (var ca in G.__folders)
				for (W in G.__folders[ca].__controllers) G.__folders[ca].__controllers[W].updateDisplay()
		}
	}

	function m(W) {
		function ca(oa, ua) {
			oa.material && (oa.material = ua);
			for (var ra = 0; ra < oa.children.length; ra++) ca(oa.children[ra], ua)
		}
		if (-1 === F.indexOf(W)) throw Error("Render mode " + W + " not found!");
		switch (W) {
			case "solid":
				n.currentMaterial = K;
				E.intensity = 1;
				N.color.setHex(2236962);
				break;
			case "wireframe":
				n.currentMaterial =
					H, E.intensity = 0, N.color.setHex(16777215)
		}
		for (var da = 0; da < z.length; da++) ca(z[da], n.currentMaterial);
		r.rendermode = W
	}

	function q() {
		for (var W = v.length, ca = 0; ca < W; ca++) {
			var da = v[ca];
			da.position.copy(da.initPosition);
			da.velocity.copy(da.initVelocity);
			da.initAngularVelocity && (da.angularVelocity.copy(da.initAngularVelocity), da.quaternion.copy(da.initQuaternion))
		}
	}

	function b(W) {
		0 === W.x && (W.x = 1E-6);
		0 === W.y && (W.y = 1E-6);
		0 === W.z && (W.z = 1E-6)
	}

	function d() {
		for (var W = v.length, ca = 0; ca < W; ca++) {
			var da = v[ca],
				oa = z[ca];
			oa.position.copy(da.position);
			da.quaternion && oa.quaternion.copy(da.quaternion)
		}
		S.restart();
		if (r.contacts)
			for (ca = 0; ca < x.contacts.length; ca++)
				for (W = 0; 2 > W; W++) {
					oa = S.request();
					var ua = x.contacts[ca];
					da = 0 === W ? ua.bi : ua.bj;
					var ra = 0 === W ? ua.ri : ua.rj;
					oa.position.set(da.position.x + ra.x, da.position.y + ra.y, da.position.z + ra.z)
				}
		S.hideCached();
		J.restart();
		if (r.cm2contact)
			for (ca = 0; ca < x.contacts.length; ca++)
				for (W = 0; 2 > W; W++) oa = J.request(), ua = x.contacts[ca], da = 0 === W ? ua.bi : ua.bj, ra = 0 === W ? ua.ri : ua.rj, oa.scale.set(ra.x, ra.y, ra.z), b(oa.scale), oa.position.copy(da.position);
		J.hideCached();
		C.restart();
		w.restart();
		if (r.constraints) {
			for (ca = 0; ca < x.constraints.length; ca++) ua = x.constraints[ca], ua instanceof CANNON.DistanceConstraint && (da = ua.equations.normal, W = da.bi, da = da.bj, oa = C.request(), da = da.position ? da.position : da, oa.scale.set(da.x - W.position.x, da.y - W.position.y, da.z - W.position.z), b(oa.scale), oa.position.copy(W.position));
			for (ca = 0; ca < x.constraints.length; ca++)
				if (ua = x.constraints[ca], ua instanceof CANNON.PointToPointConstraint) {
					ra = ua.equations.normal;
					W = ra.bi;
					da = ra.bj;
					oa =
						w.request();
					ua = w.request();
					var Da = w.request();
					oa.scale.set(ra.ri.x, ra.ri.y, ra.ri.z);
					ua.scale.set(ra.rj.x, ra.rj.y, ra.rj.z);
					Da.scale.set(-ra.penetrationVec.x, -ra.penetrationVec.y, -ra.penetrationVec.z);
					b(oa.scale);
					b(ua.scale);
					b(Da.scale);
					oa.position.copy(W.position);
					ua.position.copy(da.position);
					ra.bj.position.vadd(ra.rj, Da.position)
				}
		}
		w.hideCached();
		C.hideCached();
		B.restart();
		if (r.normals)
			for (ca = 0; ca < x.contacts.length; ca++) ua = x.contacts[ca], W = ua.bi, oa = B.request(), ra = ua.ni, da = W, oa.scale.set(ra.x, ra.y,
				ra.z), b(oa.scale), oa.position.copy(da.position), ua.ri.vadd(oa.position, oa.position);
		B.hideCached();
		u.restart();
		if (r.axes)
			for (W = 0; W < v.length; W++) da = v[W], oa = u.request(), oa.position.copy(da.position), da.quaternion && oa.quaternion.copy(da.quaternion);
		u.hideCached();
		P.restart();
		if (r.aabbs)
			for (ca = 0; ca < v.length; ca++) da = v[ca], da.computeAABB && (da.aabbNeedsUpdate && da.computeAABB(), isFinite(da.aabb.lowerBound.x) && isFinite(da.aabb.lowerBound.y) && isFinite(da.aabb.lowerBound.z) && isFinite(da.aabb.upperBound.x) &&
				isFinite(da.aabb.upperBound.y) && isFinite(da.aabb.upperBound.z) && 0 != da.aabb.lowerBound.x - da.aabb.upperBound.x && 0 != da.aabb.lowerBound.y - da.aabb.upperBound.y && 0 != da.aabb.lowerBound.z - da.aabb.upperBound.z && (oa = P.request(), oa.scale.set(da.aabb.lowerBound.x - da.aabb.upperBound.x, da.aabb.lowerBound.y - da.aabb.upperBound.y, da.aabb.lowerBound.z - da.aabb.upperBound.z), oa.position.set(.5 * (da.aabb.lowerBound.x + da.aabb.upperBound.x), .5 * (da.aabb.lowerBound.y + da.aabb.upperBound.y), .5 * (da.aabb.lowerBound.z + da.aabb.upperBound.z))));
		P.hideCached()
	}

	function a() {
		requestAnimationFrame(a);
		r.paused || d();
		CAMERA_TEST && X.update();
		renderer.clear();
		renderer.render(n.scene, camera);
		D.update()
	}

	function h(W) {
		mouseX = W.clientX - ja;
		mouseY = W.clientY - fa
	}

	function k(W) {
		aa = s_iCanvasResizeWidth + 2 * s_iCanvasOffsetWidth;
		R = s_iCanvasResizeHeight + 2 * s_iCanvasOffsetHeight;
		CAMERA_TEST && (X.screen.width = aa, X.screen.height = R)
	}

	function c(W) {
		n.dispatchEvent({
			type: "destroy"
		});
		r.paused = !1;
		e();
		f(W)
	}

	function f(W) {
		for (var ca = z.length, da = 0; da < ca; da++) {
			x.remove(v.pop());
			var oa = z.pop();
			n.scene.remove(oa)
		}
		for (; x.constraints.length;) x.removeConstraint(x.constraints[0]);
		y[W]();
		r.iterations = x.solver.iterations;
		r.gx = x.gravity.x + 0;
		r.gy = x.gravity.y + 0;
		r.gz = x.gravity.z + 0;
		r.quatNormalizeSkip = x.quatNormalizeSkip;
		r.quatNormalizeFast = x.quatNormalizeFast;
		e();
		S.restart();
		S.hideCached();
		J.restart();
		J.hideCached();
		C.restart();
		C.hideCached();
		B.restart();
		B.hideCached()
	}

	function g(W) {
		var ca = [],
			da = [];
		this.request = function() {
			geo = ca.length ? ca.pop() : W();
			scene.add(geo);
			da.push(geo);
			return geo
		};
		this.restart = function() {
			for (; da.length;) ca.push(da.pop())
		};
		this.hideCached = function() {
			for (var oa = 0; oa < ca.length; oa++) scene.remove(ca[oa])
		}
	}
	var n = this;
	this.addScene = function(W, ca) {
		if ("string" !== typeof W) throw Error("1st argument of Demo.addScene(title,initfunc) must be a string!");
		if ("function" !== typeof ca) throw Error("2nd argument of Demo.addScene(title,initfunc) must be a function!");
		y.push(ca);
		var da = y.length - 1;
		V[W] = function() {
			c(da)
		};
		l.add(V, W)
	};
	this.restartCurrentScene = q;
	this.changeScene = c;
	this.start =
		function() {
			f(0)
		};
	var l, r = this.settings = {
		stepFrequency: 60,
		quatNormalizeSkip: 2,
		quatNormalizeFast: !0,
		gx: 0,
		gy: 0,
		gz: 0,
		iterations: 20,
		tolerance: 1E-4,
		k: 1E6,
		d: 3,
		scene: 0,
		paused: !1,
		rendermode: "solid",
		constraints: !1,
		contacts: !1,
		cm2contact: !1,
		normals: !1,
		axes: !1,
		particleSize: .1,
		shadows: !1,
		aabbs: !1,
		profiling: !1,
		maxSubSteps: 3
	};
	p = p || {};
	for (var t in p) t in r && (r[t] = p[t]);
	if (0 !== r.stepFrequency % 60) throw Error("stepFrequency must be a multiple of 60.");
	var v = this.bodies = [],
		z = this.visuals = [],
		y = [],
		G = null,
		O = null,
		Q = null,
		V = {},
		T = new THREE.SphereGeometry(.1, 6, 6);
	this.particleGeo = new THREE.SphereGeometry(1, 16, 8);
	var K = new THREE.MeshPhongMaterial({
			color: 11184810,
			specular: 1118481,
			shininess: 100
		}),
		H = new THREE.MeshLambertMaterial({
			color: 16777215,
			wireframe: !0
		});
	this.currentMaterial = K;
	var I = new THREE.MeshPhongMaterial({
		color: 16711680
	});
	this.particleMaterial = new THREE.MeshLambertMaterial({
		color: 16711680
	});
	var S = new g(function() {
			return new THREE.Mesh(T, I)
		}),
		J = new g(function() {
			var W = new THREE.Geometry;
			W.vertices.push(new THREE.Vector3(0,
				0, 0));
			W.vertices.push(new THREE.Vector3(1, 1, 1));
			return new THREE.Line(W, new THREE.LineBasicMaterial({
				color: 16711680
			}))
		}),
		L = new THREE.BoxGeometry(1, 1, 1),
		A = new THREE.MeshBasicMaterial({
			color: 11184810,
			wireframe: !0
		}),
		P = new g(function() {
			return new THREE.Mesh(L, A)
		}),
		C = new g(function() {
			var W = new THREE.Geometry;
			W.vertices.push(new THREE.Vector3(0, 0, 0));
			W.vertices.push(new THREE.Vector3(1, 1, 1));
			return new THREE.Line(W, new THREE.LineBasicMaterial({
				color: 16711680
			}))
		}),
		w = new g(function() {
			var W = new THREE.Geometry;
			W.vertices.push(new THREE.Vector3(0, 0, 0));
			W.vertices.push(new THREE.Vector3(1, 1, 1));
			return new THREE.Line(W, new THREE.LineBasicMaterial({
				color: 16711680
			}))
		}),
		B = new g(function() {
			var W = new THREE.Geometry;
			W.vertices.push(new THREE.Vector3(0, 0, 0));
			W.vertices.push(new THREE.Vector3(1, 1, 1));
			return new THREE.Line(W, new THREE.LineBasicMaterial({
				color: 65280
			}))
		}),
		u = new g(function() {
			var W = new THREE.Object3D,
				ca = new THREE.Vector3(0, 0, 0),
				da = new THREE.Geometry,
				oa = new THREE.Geometry,
				ua = new THREE.Geometry;
			da.vertices.push(ca);
			oa.vertices.push(ca);
			ua.vertices.push(ca);
			da.vertices.push(new THREE.Vector3(1, 0, 0));
			oa.vertices.push(new THREE.Vector3(0, 1, 0));
			ua.vertices.push(new THREE.Vector3(0, 0, 1));
			ca = new THREE.Line(da, new THREE.LineBasicMaterial({
				color: 16711680
			}));
			oa = new THREE.Line(oa, new THREE.LineBasicMaterial({
				color: 65280
			}));
			ua = new THREE.Line(ua, new THREE.LineBasicMaterial({
				color: 255
			}));
			W.add(ca);
			W.add(oa);
			W.add(ua);
			return W
		}),
		x = this.world = new CANNON.World;
	x.broadphase = new CANNON.NaiveBroadphase;
	var F = ["solid", "wireframe"],
		E, N, D, U;
	Detector.webgl || Detector.addGetWebGLMessage();
	var aa = s_iCanvasResizeWidth + s_iCanvasOffsetWidth,
		R = s_iCanvasResizeHeight + s_iCanvasOffsetHeight,
		X, ma, ja = aa / 2,
		fa = R / 2;
	(function() {
		ma = document.createElement("div");
		document.body.appendChild(ma);
		CAMERA_TEST ? (NEAR = 5, camera = new THREE.PerspectiveCamera(45, aa / R, NEAR, FAR), camera.lookAt(new THREE.Vector3(0, 0, 0)), camera.position.set(0, 500, 500), camera.up.set(0, 0, 1)) : camera = createOrthoGraphicCamera();
		scene = n.scene = new THREE.Scene;
		scene.fog = new THREE.Fog(2236962,
			1E3, FAR);
		N = new THREE.AmbientLight(4473924);
		scene.add(N);
		E = new THREE.DirectionalLight(16777164, 1);
		E.position.set(180, 0, 180);
		E.target.position.set(0, 0, 0);
		E.castShadow = !0;
		E.shadow.camera.near = 10;
		E.shadow.camera.far = 100;
		E.shadow.camera.fov = 30;
		E.shadowMapBias = .0139;
		E.shadowMapDarkness = .1;
		E.shadow.mapSize.width = 1024;
		E.shadow.mapSize.height = 1024;
		scene.add(E);
		scene.add(camera);
		renderer = SHOW_3D_RENDER ? new THREE.WebGLRenderer({
			clearColor: 0,
			clearAlpha: .5,
			antialias: !1,
			alpha: !0
		}) : new THREE.CanvasRenderer({
			clearColor: 0,
			clearAlpha: .5,
			antialias: !1,
			alpha: !0
		});
		renderer.setSize(aa, R);
		renderer.domElement.style.position = "relative";
		renderer.domElement.style.top = "0px";
		renderer.domElement.style.opacity = .5;
		ma.appendChild(renderer.domElement);
		U = document.createElement("div");
		U.style.position = "absolute";
		U.style.top = "10px";
		U.style.width = "100%";
		U.style.textAlign = "center";
		U.innerHTML = '<a href="http://github.com/schteppe/cannon.js">cannon.js</a> - javascript 3d physics';
		ma.appendChild(U);
		document.addEventListener("mousemove", h);
		window.addEventListener("resize", k);
		renderer.setClearColor(scene.fog.color, 1);
		renderer.autoClear = !1;
		Q = document.createElement("canvas");
		Q.width = aa;
		Q.height = R;
		Q.style.opacity = .5;
		Q.style.position = "absolute";
		Q.style.top = "0px";
		Q.style.zIndex = 90;
		ma.appendChild(Q);
		O = new SmoothieChart({
			labelOffsetY: 50,
			maxDataSetLength: 100,
			millisPerPixel: 2,
			grid: {
				strokeStyle: "none",
				fillStyle: "none",
				lineWidth: 1,
				millisPerLine: 250,
				verticalSections: 6
			},
			labels: {
				fillStyle: "rgb(180, 180, 180)"
			}
		});
		O.streamTo(Q);
		var W = {},
			ca = [
				[255, 0,
					0
				],
				[0, 255, 0],
				[0, 0, 255],
				[255, 255, 0],
				[255, 0, 255],
				[0, 255, 255]
			],
			da = 0,
			oa;
		for (oa in x.profile) {
			var ua = ca[da % ca.length];
			W[oa] = new TimeSeries({
				label: oa,
				fillStyle: "rgb(" + ua[0] + "," + ua[1] + "," + ua[2] + ")",
				maxDataLength: 500
			});
			da++
		}
		x.addEventListener("postStep", function(ra) {
			for (var Da in x.profile) W[Da].append(1E3 * x.time, x.profile[Da])
		});
		da = 0;
		for (oa in x.profile) ua = ca[da % ca.length], O.addTimeSeries(W[oa], {
			strokeStyle: "rgb(" + ua[0] + "," + ua[1] + "," + ua[2] + ")",
			lineWidth: 2
		}), da++;
		x.doProfiling = !1;
		O.stop();
		Q.style.display =
			"none";
		D = new Stats;
		D.domElement.style.position = "absolute";
		D.domElement.style.top = "0px";
		D.domElement.style.zIndex = 100;
		ma.appendChild(D.domElement);
		void 0 != window.dat && (G = new dat.GUI, G.domElement.parentNode.style.zIndex = 120, ca = G.addFolder("Rendering"), ca.add(r, "rendermode", {
				Solid: "solid",
				Wireframe: "wireframe"
			}).onChange(function(ra) {
				m(ra)
			}), ca.add(r, "contacts"), ca.add(r, "cm2contact"), ca.add(r, "normals"), ca.add(r, "constraints"), ca.add(r, "axes"), ca.add(r, "particleSize").min(0).max(1).onChange(function(ra) {
				for (var Da =
						0; Da < z.length; Da++) v[Da] instanceof CANNON.Particle && z[Da].scale.set(ra, ra, ra)
			}), ca.add(r, "shadows").onChange(function(ra) {
				ra ? renderer.shadowMapAutoUpdate = !0 : (renderer.shadowMapAutoUpdate = !1, renderer.clearTarget(E.shadowMap))
			}), ca.add(r, "aabbs"), ca.add(r, "profiling").onChange(function(ra) {
				ra ? (x.doProfiling = !0, O.start(), Q.style.display = "block") : (x.doProfiling = !1, O.stop(), Q.style.display = "none")
			}), ca = G.addFolder("World"), ca.add(r, "paused").onChange(function(ra) {}), ca.add(r, "stepFrequency", 60, 600).step(60),
			ca.add(r, "gx", -100, 100).onChange(function(ra) {
				isNaN(ra) || x.gravity.set(ra, r.gy, r.gz)
			}), ca.add(r, "gy", -100, 100).onChange(function(ra) {
				isNaN(ra) || x.gravity.set(r.gx, ra, r.gz)
			}), ca.add(r, "gz", -100, 100).onChange(function(ra) {
				isNaN(ra) || x.gravity.set(r.gx, r.gy, ra)
			}), ca.add(r, "quatNormalizeSkip", 0, 50).step(1).onChange(function(ra) {
				isNaN(ra) || (x.quatNormalizeSkip = ra)
			}), ca.add(r, "quatNormalizeFast").onChange(function(ra) {
				x.quatNormalizeFast = !!ra
			}), ca = G.addFolder("Solver"), ca.add(r, "iterations", 1, 50).step(1).onChange(function(ra) {
				x.solver.iterations =
					ra
			}), ca.add(r, "k", 10, 1E7).onChange(function(ra) {
				n.setGlobalSpookParams(r.k, r.d, 1 / r.stepFrequency)
			}), ca.add(r, "d", 0, 20).step(.1).onChange(function(ra) {
				n.setGlobalSpookParams(r.k, r.d, 1 / r.stepFrequency)
			}), ca.add(r, "tolerance", 0, 10).step(.01).onChange(function(ra) {
				x.solver.tolerance = ra
			}), l = G.addFolder("Scenes"), l.open());
		CAMERA_TEST && (X = new THREE.TrackballControls(camera, renderer.domElement), X.rotateSpeed = 1, X.zoomSpeed = 1.2, X.panSpeed = .2, X.noZoom = !1, X.noPan = !1, X.staticMoving = !1, X.dynamicDampingFactor =
			.3, X.minDistance = 0, X.maxDistance = 1E5, X.screen.width = aa, X.screen.height = R)
	})();
	a();
	document.addEventListener("keypress", function(W) {
		if (W.keyCode) switch (W.keyCode) {
			case 32:
				q();
				break;
			case 104:
				"none" == D.domElement.style.display ? (D.domElement.style.display = "block", U.style.display = "block") : (D.domElement.style.display = "none", U.style.display = "none");
				break;
			case 97:
				r.aabbs = !r.aabbs;
				e();
				break;
			case 99:
				r.constraints = !r.constraints;
				e();
				break;
			case 112:
				r.paused = !r.paused;
				e();
				break;
			case 115:
				x.step(1 / r.stepFrequency);
				d();
				break;
			case 109:
				W = F.indexOf(r.rendermode);
				W++;
				W %= F.length;
				m(F[W]);
				e();
				break;
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				y.length > W.keyCode - 49 && !document.activeElement.localName.match(/input/) && c(W.keyCode - 49)
		}
	})
};
CANNON.Demo.prototype = new CANNON.EventTarget;
CANNON.Demo.constructor = CANNON.Demo;
CANNON.Demo.prototype.setGlobalSpookParams = function(p, e, m) {
	for (var q = this.world, b = 0; b < q.constraints.length; b++)
		for (var d = q.constraints[b], a = 0; a < d.equations.length; a++) d.equations[a].setSpookParams(p, e, m);
	for (b = 0; b < q.contactmaterials.length; b++) m = q.contactmaterials[b], m.contactEquationStiffness = p, m.frictionEquationStiffness = p, m.contactEquationRelaxation = e, m.frictionEquationRelaxation = e;
	q.defaultContactMaterial.contactEquationStiffness = p;
	q.defaultContactMaterial.frictionEquationStiffness = p;
	q.defaultContactMaterial.contactEquationRelaxation =
		e;
	q.defaultContactMaterial.frictionEquationRelaxation = e
};
CANNON.Demo.prototype.getWorld = function() {
	return this.world
};
CANNON.Demo.prototype.addVisual = function(p) {
	var e;
	p instanceof CANNON.Body && (e = this.shape2mesh(p));
	e && (this.bodies.push(p), this.visuals.push(e), p.visualref = e, p.visualref.visualId = this.bodies.length - 1, this.scene.add(e));
	return e
};
CANNON.Demo.prototype.addVisuals = function(p) {
	for (var e = 0; e < p.length; e++) this.addVisual(p[e])
};
CANNON.Demo.prototype.removeVisual = function(p) {
	if (p.visualref) {
		for (var e = this.bodies, m = this.visuals, q = [], b = [], d = e.length, a = 0; a < d; a++) q.unshift(e.pop()), b.unshift(m.pop());
		d = p.visualref.visualId;
		for (var h = 0; h < q.length; h++) h !== d && (a = h > d ? h - 1 : h, e[a] = q[h], m[a] = b[h], e[a].visualref = q[h].visualref, e[a].visualref.visualId = a);
		p.visualref.visualId = null;
		this.scene.remove(p.visualref);
		p.visualref = null
	}
};
CANNON.Demo.prototype.removeAllVisuals = function() {
	for (; this.bodies.length;) this.removeVisual(this.bodies[0])
};
CANNON.Demo.prototype.shape2mesh = function(p) {
	for (var e = new THREE.Object3D, m = 0; m < p.shapes.length; m++) {
		var q = p.shapes[m];
		switch (q.type) {
			case CANNON.Shape.types.SPHERE:
				var b = new THREE.SphereGeometry(q.radius, 8, 8);
				q = new THREE.Mesh(b, this.currentMaterial);
				break;
			case CANNON.Shape.types.PARTICLE:
				q = new THREE.Mesh(this.particleGeo, this.particleMaterial);
				b = this.settings;
				q.scale.set(b.particleSize, b.particleSize, b.particleSize);
				break;
			case CANNON.Shape.types.PLANE:
				var d = new THREE.PlaneGeometry(10, 10, 4, 4);
				q = new THREE.Object3D;
				b = new THREE.Object3D;
				d = new THREE.Mesh(d, this.currentMaterial);
				d.scale.set(100, 100, 100);
				b.add(d);
				d.castShadow = !0;
				d.receiveShadow = !0;
				q.add(b);
				break;
			case CANNON.Shape.types.BOX:
				b = new THREE.BoxGeometry(2 * q.halfExtents.x, 2 * q.halfExtents.y, 2 * q.halfExtents.z);
				q = new THREE.Mesh(b, this.currentMaterial);
				break;
			case CANNON.Shape.types.CONVEXPOLYHEDRON:
				d = new THREE.Geometry;
				for (b = 0; b < q.vertices.length; b++) {
					var a = q.vertices[b];
					d.vertices.push(new THREE.Vector3(a.x, a.y, a.z))
				}
				for (b = 0; b < q.faces.length; b++) {
					var h = q.faces[b],
						k = h[0];
					for (a = 1; a < h.length - 1; a++) d.faces.push(new THREE.Face3(k, h[a], h[a + 1]))
				}
				d.computeBoundingSphere();
				d.computeFaceNormals();
				q = new THREE.Mesh(d, this.currentMaterial);
				break;
			case CANNON.Shape.types.HEIGHTFIELD:
				d = new THREE.Geometry;
				h = new CANNON.Vec3;
				k = new CANNON.Vec3;
				var c = new CANNON.Vec3;
				for (a = 0; a < q.data.length - 1; a++)
					for (var f = 0; f < q.data[a].length - 1; f++)
						for (var g = 0; 2 > g; g++) q.getConvexTrianglePillar(a, f, 0 === g), h.copy(q.pillarConvex.vertices[0]), k.copy(q.pillarConvex.vertices[1]), c.copy(q.pillarConvex.vertices[2]),
							h.vadd(q.pillarOffset, h), k.vadd(q.pillarOffset, k), c.vadd(q.pillarOffset, c), d.vertices.push(new THREE.Vector3(h.x, h.y, h.z), new THREE.Vector3(k.x, k.y, k.z), new THREE.Vector3(c.x, c.y, c.z)), b = d.vertices.length - 3, d.faces.push(new THREE.Face3(b, b + 1, b + 2));
				d.computeBoundingSphere();
				d.computeFaceNormals();
				q = new THREE.Mesh(d, this.currentMaterial);
				break;
			case CANNON.Shape.types.TRIMESH:
				d = new THREE.Geometry;
				h = new CANNON.Vec3;
				k = new CANNON.Vec3;
				c = new CANNON.Vec3;
				for (b = 0; b < q.indices.length / 3; b++) q.getTriangleVertices(b,
					h, k, c), d.vertices.push(new THREE.Vector3(h.x, h.y, h.z), new THREE.Vector3(k.x, k.y, k.z), new THREE.Vector3(c.x, c.y, c.z)), a = d.vertices.length - 3, d.faces.push(new THREE.Face3(a, a + 1, a + 2));
				d.computeBoundingSphere();
				d.computeFaceNormals();
				q = new THREE.Mesh(d, this.currentMaterial);
				break;
			default:
				throw "Visual type not recognized: " + q.type;
		}
		q.receiveShadow = !0;
		q.castShadow = !0;
		if (q.children)
			for (b = 0; b < q.children.length; b++)
				if (q.children[b].castShadow = !0, q.children[b].receiveShadow = !0, q.children[b])
					for (a = 0; a < q.children[b].length; a++) q.children[b].children[a].castShadow = !0, q.children[b].children[a].receiveShadow = !0;
		b = p.shapeOffsets[m];
		d = p.shapeOrientations[m];
		q.position.set(b.x, b.y, b.z);
		q.quaternion.set(d.x, d.y, d.z, d.w);
		e.add(q)
	}
	this.camera = function() {
		return camera
	};
	this.getScene = function() {
		return scene
	};
	return e
};

function CBall(p, e, m, q, b) {
	var d, a, h, k = null,
		c = 0,
		f = 0;
	this._init = function(l, r, t) {
		h = new createjs.Container;
		n.addChild(h);
		var v = new createjs.SpriteSheet({
			images: [t],
			frames: {
				width: t.width / 7,
				height: t.height / 3,
				regX: t.width / 2 / 7,
				regY: t.height / 3 / 2
			}
		});
		d = createSprite(v, 0, t.width / 2 / 7, t.height / 3 / 2, t.width / 7, t.height / 3);
		d.stop();
		this.scale(.98);
		t = s_oSpriteLibrary.getSprite("ball_shadow");
		a = createBitmap(t);
		a.x = l;
		a.y = r;
		a.regX = .5 * t.width;
		a.regY = .5 * t.height;
		this.scaleShadow(.98);
		h.addChild(a, d)
	};
	this.rolls = function() {
		d.rotation =
			Math.degrees(Math.sin(.15 * g.velocity.x));
		var l = Math.abs(g.angularVelocity.x),
			r = this._goToPrevFrame;
		0 > g.angularVelocity.x && (r = this._goToNextFrame);
		7 < l ? r() : 3 < l ? (c++, c > 2 / ROLL_BALL_RATE && (r(), c = 0)) : 1 < l ? (c++, c > 3 / ROLL_BALL_RATE && (r(), c = 0)) : l > MIN_BALL_VEL_ROTATION && (c++, c > 4 / ROLL_BALL_RATE && (r(), c = 0))
	};
	this._goToPrevFrame = function() {
		0 === f ? f = 6 : f--;
		d.gotoAndStop(f)
	};
	this._goToNextFrame = function() {
		7 === f ? f = 1 : f++;
		d.gotoAndStop(f)
	};
	this.unload = function() {
		d.removeAllEventListeners();
		n.removeChild(d)
	};
	this.setVisible =
		function(l) {
			h.visible = l
		};
	this.getStartScale = function() {
		return .98
	};
	this.startPosShadowY = function(l) {
		k = l
	};
	this.getStartShadowYPos = function() {
		return k
	};
	this.tweenFade = function(l, r, t) {
		createjs.Tween.get(h).wait(t).to({
			alpha: l
		}, r).call(function() {})
	};
	this.setPositionShadow = function(l, r) {
		a.x = l;
		a.y = r
	};
	this.setPosition = function(l, r) {
		d.x = l;
		d.y = r
	};
	this.getPhysics = function() {
		return g
	};
	this.setAngle = function(l) {
		d.rotation = l
	};
	this.getX = function() {
		return d.x
	};
	this.getY = function() {
		return d.y
	};
	this.getStartScale =
		function() {
			return .98
		};
	this.scale = function(l) {
		d.scaleX = l;
		d.scaleY = l
	};
	this.scaleShadow = function(l) {
		.08 < l ? (a.scaleX = l, a.scaleY = l) : (a.scaleX = .08, a.scaleY = .08)
	};
	this.setAlphaByHeight = function(l) {
		a.alpha = l
	};
	this.getScale = function() {
		return d.scaleX
	};
	this.getObject = function() {
		return d
	};
	this.getDepthPos = function() {
		return g.position.y
	};
	var g = q;
	var n = b;
	this._init(p, e, m);
	return this
}

function CGame(p, e, m) {
	var q, b, d, a, h, k, c, f, g = null,
		n = null,
		l, r = null,
		t = !1,
		v = !1,
		z = !1,
		y, G = 0,
		O = 0,
		Q, V, T, K, H, I, S = STATE_INIT,
		J = null;
	this._init = function() {
		$(s_oMain).trigger("start_session");
		this.pause(!0);
		V = y = 0;
		I = [];
		this.resetForcesValues();
		playSound("crowd_cheering", .7, !0);
		Q = LIVES;
		l = new createjs.Container;
		s_oStage.addChild(l);
		s_bMobile && this.velocityBall();
		a = createBitmap(s_oSpriteLibrary.getSprite("bg_game_bowler"));
		l.addChild(a);
		h = new CScenario;
		J = SHOW_3D_RENDER ? camera : createOrthoGraphicCamera();
		g = new COpponent(CANVAS_WIDTH_HALF -
			55, 420, m, l);
		var L = s_oSpriteLibrary.getSprite("ball_game");
		f = new CBall(0, 0, L, h.ballBody(), l);
		I.push(f);
		this.ballPosition();
		resizeCanvas3D();
		setVolume("soundtrack", .35);
		d = new CInterface;
		L = s_oSpriteLibrary.getSprite("glove_" + e);
		k = new CGlove(-20, LEFT_GLOVE, L, h.getLeftGlovesBody(), l);
		c = new CGlove(20, RIGHT_GLOVE, L, h.getRightGlovesBody(), l);
		c.flip();
		I.push(k);
		I.push(c);
		SHOW_3D_RENDER ? (this.onGlovesMove(window), this._onExitHelpPanel()) : (d.createHelpPanel(e), this.onGlovesMove(s_oStage))
	};
	this.velocityBall =
		function() {};
	this.sortDepth = function(L, A) {
		null !== L && null !== A && (L.getDepthPos() > A.getDepthPos() ? l.getChildIndex(L.getObject()) > l.getChildIndex(A.getObject()) && l.swapChildren(L.getObject(), A.getObject()) : L.getDepthPos() < A.getDepthPos() && l.getChildIndex(A.getObject()) > l.getChildIndex(L.getObject()) && l.swapChildren(A.getObject(), L.getObject()))
	};
	this._onExitHelpPanel = function() {
		d.onExitFromHelp();
		this.activeEventListeners();
		this.pause(!1);
		$(s_oMain).trigger("start_level", 1)
	};
	this.activeEventListeners =
		function() {
			SHOW_3D_RENDER ? (window.addEventListener("mousedown", this.addBatImpulseToBall), window.addEventListener("mousemove", this.onGlovesMove)) : null === n && (n = s_oStage.on("stagemousemove", this.onGlovesMove))
		};
	this.deactiveEventListeners = function() {
		SHOW_3D_RENDER ? (window.removeEventListener("mousedown", this.addBatImpulseToBall), window.removeEventListener("mousemove", this.onGlovesMove)) : (s_oStage.off("stagemousemove", n), n = null)
	};
	this.resetForcesValues = function() {
		K = START_BALL_FORCE_Y;
		H = START_BALL_FORCE_X;
		q = START_BALL_FORCE_Z;
		b = START_BALL_FORCE_Z + STEP_BALL_FORCE_Z
	};
	this.increaseDifficulty = function() {
		var L = K + STEP_BALL_FORCE_Y,
			A = H + STEP_BALL_FORCE_X,
			P = b + STEP_BALL_FORCE_Z;
		H = A > MAX_BALL_FORCE_X ? MAX_BALL_FORCE_X : A;
		K = L > MAX_BALL_FORCE_Y ? MAX_BALL_FORCE_Y : L;
		b = P > MAX_BALL_FORCE_Z ? MAX_BALL_FORCE_Z : P
	};
	this.ballPosition = function() {
		var L = h.ballBody(),
			A = this.convert3dPosTo2dScreen(L.position, J),
			P = f.getStartScale() - A.z;
		this.shadowBall(L, P);
		f.scale(P);
		f.setPosition(A.x, A.y)
	};
	this.shadowBall = function(L, A) {
		var P = h.getFieldBody(),
			C = this.convert3dPosTo2dScreen({
				x: L.position.x,
				y: L.position.y,
				z: P.position.z
			}, J),
			w = L.position.z - P.position.z;
		1 > w && (w = 1);
		f.scaleShadow(A / w);
		f.setAlphaByHeight(.1 * (-L.position.z - .1 * P.position.z));
		f.setPositionShadow(C.x, C.y)
	};
	this.unload = function() {
		s_oStage.removeAllChildren();
		d.unload();
		h.destroyWorld();
		h = null;
		this.deactiveEventListeners()
	};
	this.resetValues = function() {
		Q = LIVES;
		y = 0;
		this.resetForcesValues();
		d.viewScore(y);
		d.refreshLivesText(Q)
	};
	this.ballNotCaught = function() {
		t || (t = !0, T = TIME_RESET_AFTER_GOAL,
			d.createAnimText(TEXT_MISSED, 80, !1, null, 300, function() {}), Q--, d.refreshLivesText(Q), O = 0, playSound("crowd_ohhh", 1, !1))
	};
	this.launchBallImpulse = function() {
		h.setElementVelocity(f.getPhysics(), {
			x: 0,
			y: 0,
			z: 0
		});
		h.addImpulse(f.getPhysics(), LAUNCH_BALL_IMPULSE);
		h.setElementAngularVelocity(f.getPhysics(), {
			x: 0,
			y: 0,
			z: 0
		})
	};
	this.ballCaught = function(L, A) {
		t || v || (L.x > -BALL_SAVED_POINT.x && L.x < BALL_SAVED_POINT.x && L.z > -BALL_SAVED_POINT.z && L.z < BALL_SAVED_POINT.z ? (A === LEFT_GLOVE ? k.changeState("perfect") : c.changeState("perfect"),
			T = TIME_RESET_AFTER_KEEPER_SAVED, createjs.Tween.get(l).wait(100).call(function() {
				t || s_oGame.textSave()
			}), this.calculateScore(L), v = !0, this.resetBallPosition(), f.setVisible(!1), this.increaseDifficulty()) : this.ballNotCaught(), playSound("kick", 1, !1), playSound("applauses", 1, !1))
	};
	this.ballVisible = function(L) {
		f.setVisible(L)
	};
	this.calculateScore = function(L) {
		y += SCORE_BALL_CAUGHT - Math.floor((L.x + L.z) * SCORE_ERROR_MULTIPLIER);
		d.viewScore(y)
	};
	this.addBatImpulseToBall = function() {
		if (!z && S === STATE_PLAY) {
			var L = {
					x: Math.random() *
						(H + H) - H,
					y: -K,
					z: Math.random() * (b - q) + q
				},
				A = h.ballBody();
			A.position.x = 0;
			h.setElementVelocity(A, {
				x: 0,
				y: 0,
				z: 0
			});
			h.addImpulse(A, L);
			h.setElementAngularVelocity(A, {
				x: 0,
				y: 0,
				z: 0
			});
			z = !0;
			playSound("hit_ball", 1, !1)
		}
	};
	this.pause = function(L) {
		L ? (S = STATE_PAUSE, this.deactiveEventListeners()) : (S = STATE_PLAY, this.activeEventListeners());
		createjs.Ticker.paused = L
	};
	this.startOpponentShot = function() {
		g.hideBowler(V);
		V = 0
	};
	this.onExit = function() {
		this.unload();
		stopSound("crowd_cheering");
		$(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("end_session");
		setVolume("soundtrack", 1);
		s_oMain.gotoMenu()
	};
	this.resetGame = function() {
		this.resetValues();
		this.resetScene();
		this.activeEventListeners();
		S = STATE_PLAY;
		this.startOpponentShot();
		$(s_oMain).trigger("restart_level", 1)
	};
	this.resetBallPosition = function() {
		var L = h.ballBody();
		L.position.set(POSITION_BALL.x, POSITION_BALL.y, POSITION_BALL.z);
		h.setElementVelocity(L, {
			x: 0,
			y: 0,
			z: 0
		});
		h.setElementAngularVelocity(L, {
			x: 0,
			y: 0,
			z: 0
		});
		f.setVisible(!0)
	};
	this._updateInit = function() {
		h.update();
		this._updateBall2DPosition();
		S = STATE_PLAY
	};
	this.onGlovesMove = function(L) {
		var A = k.getPhysics(),
			P = c.getPhysics();
		var C = SHOW_3D_RENDER ? {
			x: L.clientX - s_iCanvasOffsetWidth + OFFSET_MOUSE_X,
			y: L.clientY - s_iCanvasOffsetHeight
		} : {
			x: L.stageX / s_fInverseScaling + OFFSET_MOUSE_X,
			y: L.stageY / s_fInverseScaling
		};
		s_bMobile && (C.x += MOBILE_OFFSET_GLOVES_X, C.y += MOBILE_OFFSET_GLOVES_Y);
		L = 2 * RIGHT_GLOVE_POSITION.x;
		C = s_oGame.convert2dScreenPosTo3d(C, A);
		var w = C.x + L;
		w < LIMIT_HAND_RANGE_POS.x && C.x > -LIMIT_HAND_RANGE_POS.x ? (A.position.x =
			C.x, P.position.x = w) : w < LIMIT_HAND_RANGE_POS.x ? (A.position.x = -LIMIT_HAND_RANGE_POS.x, P.position.x = -LIMIT_HAND_RANGE_POS.x + L) : (A.position.x = LIMIT_HAND_RANGE_POS.x - L, P.position.x = LIMIT_HAND_RANGE_POS.x);
		C.z > LIMIT_HAND_RANGE_POS.zMin && C.z < LIMIT_HAND_RANGE_POS.zMax ? (A.position.z = C.z, P.position.z = C.z) : C.z > LIMIT_HAND_RANGE_POS.zMin ? (A.position.z = LIMIT_HAND_RANGE_POS.zMax, P.position.z = LIMIT_HAND_RANGE_POS.zMax) : (A.position.z = LIMIT_HAND_RANGE_POS.zMin, P.position.z = LIMIT_HAND_RANGE_POS.zMin);
		A = s_oGame.convert3dPosTo2dScreen(A.position,
			J);
		P = s_oGame.convert3dPosTo2dScreen(P.position, J);
		k.setPosition(A.x, A.y);
		c.setPosition(P.x, P.y)
	};
	this.convert2dScreenPosTo3d = function(L) {
		L = new THREE.Vector3(L.x / s_iCanvasResizeWidth * 2 - 1, 2 * -(L.y / s_iCanvasResizeHeight) + 1, -1);
		L.unproject(J);
		L.sub(J.position);
		L.normalize();
		L.multiply(new THREE.Vector3(34, 1, 34));
		return L
	};
	this.convert3dPosTo2dScreen = function(L, A) {
		var P = (new THREE.Vector3(L.x, L.y, L.z)).project(A),
			C = .5 * Math.floor(s_iCanvasResizeWidth),
			w = .5 * Math.floor(s_iCanvasResizeHeight);
		P.x = (P.x * C + C) *
			s_fInverseScaling;
		P.y = (-(P.y * w) + w) * s_fInverseScaling;
		return P
	};
	this.timeReset = function() {
		0 < T ? T -= FPS_TIME : (G++, k.changeState("normal"), c.changeState("normal"), 0 < Q ? (this.resetScene(), this.startOpponentShot()) : (this.gameOver(), S = STATE_FINISH, $(s_oMain).trigger("end_level", 1), this.deactiveEventListeners()), z = !1)
	};
	this.textSave = function() {
		if (O < TEXT_CONGRATULATION.length) {
			var L = !1;
			O >= TEXT_CONGRATULATION.length - 1 && (L = !0);
			d.createAnimText(TEXT_CONGRATULATION[O], TEXT_SIZE[O], L, TEXT_EXCELLENT_COLOR, 300, function() {});
			O++
		} else {
			L = !1;
			var A = Math.floor(Math.random() * (TEXT_CONGRATULATION.length - 1)) + 1;
			A >= TEXT_CONGRATULATION.length - 1 && (L = !0);
			d.createAnimText(TEXT_CONGRATULATION[A], TEXT_SIZE[A], L, TEXT_EXCELLENT_COLOR, 300, function() {})
		}
	};
	this.gameOver = function() {
		r = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
		r.show(y)
	};
	this.resetScene = function() {
		v = t = !1;
		this.resetBallPosition()
	};
	this._onEnd = function() {
		this.onExit()
	};
	this.swapChildrenIndex = function() {
		for (var L = 0; L < I.length - 1; L++)
			for (var A = L + 1; A < I.length; A++) this.sortDepth(I[L],
				I[A])
	};
	this.rotateGloves = function() {
		var L = (k.getX() - CANVAS_WIDTH_HALF) * HAND_KEEPER_ANGLE_RATE,
			A = (c.getX() - CANVAS_WIDTH_HALF) * HAND_KEEPER_ANGLE_RATE;
		k.setRotation(L);
		c.setRotation(A)
	};
	this._updatePlay = function() {
		for (var L = 0; L < PHYSICS_ACCURACY; L++) h.update();
		this._updateBall2DPosition();
		(v || t) && this.timeReset();
		this.rotateGloves();
		this.batterAnimation();
		this.swapChildrenIndex()
	};
	this.batterAnimation = function() {
		g.hideBowler(V);
		V + 1 < NUM_SPRITE_BATTER_BOWLER_MODE ? (g.viewBowler(V + 1), V++) : g.viewBowler(V);
		20 === V && (this.resetBallPosition(), this.launchBallImpulse());
		52 === V && this.addBatImpulseToBall()
	};
	this.update = function() {
		switch (S) {
			case STATE_INIT:
				this._updateInit();
				break;
			case STATE_PLAY:
				this._updatePlay()
		}
	};
	this._updateBall2DPosition = function() {
		this.ballPosition();
		f.rolls();
		J.updateProjectionMatrix();
		J.updateMatrixWorld()
	};
	s_oGame = this;
	LIVES = p.lives;
	SCORE_BALL_CAUGHT = p.score_ball_caught;
	START_BALL_FORCE_X = p.ball_force_left_right_start;
	STEP_BALL_FORCE_X = p.ball_force_left_right_step;
	MAX_BALL_FORCE_X =
		p.ball_force_left_right_max;
	START_BALL_FORCE_Z = p.ball_force_up_start;
	STEP_BALL_FORCE_Z = p.ball_force_up_step;
	MAX_BALL_FORCE_Z = p.ball_force_up_max;
	START_BALL_FORCE_Y = p.ball_start_velocity;
	STEP_BALL_FORCE_Y = p.ball_step_velocity;
	MAX_BALL_FORCE_Y = p.ball_max_velocity;
	SCORE_PERFECT_BALL_SAVED = p.score_perfect_ball_saved;
	BALL_SAVED_POINT = p.perfect_ball_saved_point;
	NUM_LEVEL_FOR_ADS = p.num_levels_for_ads;
	this._init()
}
var s_oGame;

function CGlove(p, e, m, q, b) {
	var d, a;
	this._init = function(c, f, g) {
		var n = new createjs.SpriteSheet({
			images: [g],
			frames: {
				width: g.width / 2,
				height: g.height,
				regX: g.width / 2 / 2 + GLOVE_REG[f].x,
				regY: g.height / 2 + GLOVE_REG[f].y
			},
			animations: {
				normal: [0],
				perfect: [1]
			}
		});
		d = createSprite(n, "normal", g.width / 2 / 2 + GLOVE_REG[f].x, g.height / 2 + GLOVE_REG[f].y, g.width / 2, g.height);
		a = f;
		this.setPosition(CANVAS_WIDTH_HALF + c, CANVAS_HEIGHT_HALF);
		k.addChild(d)
	};
	this.unload = function() {
		k.removeChild(d)
	};
	this.setPosition = function(c, f) {
		d.x = c;
		d.y =
			f
	};
	this.getObject = function() {
		return d
	};
	this.getDepthPos = function() {
		return h.position.y
	};
	this.getX = function() {
		return d.x
	};
	this.getY = function() {
		return d.y
	};
	this.changeState = function(c) {
		d.gotoAndStop(c)
	};
	this.getDir = function() {
		return a
	};
	this.getPhysics = function() {
		return h
	};
	this.setScale = function(c) {
		d.scaleX = d.scaleY = c
	};
	this.flip = function() {
		d.scaleX = -d.scaleX
	};
	this.setRotation = function(c) {
		d.rotation = c
	};
	var h = q;
	var k = b;
	this._init(p, e, m);
	return this
}

function CScenario() {
	var p, e, m, q, b, d, a, h, k, c, f, g, n, l;
	if (SHOW_3D_RENDER) var r = new CANNON.Demo;
	this.getDemo = function() {
		return r
	};
	this._init = function() {
		p = SHOW_3D_RENDER ? r.getWorld() : new CANNON.World;
		p.gravity.set(0, 0, -9.81);
		p.broadphase = new CANNON.NaiveBroadphase;
		p.solver.iterations = 25;
		p.solver.tolerance = 1E-5;
		e = new CANNON.Material;
		m = new CANNON.Material;
		q = new CANNON.Material;
		b = new CANNON.Material;
		var t = new CANNON.ContactMaterial(m, q, {
				friction: .1,
				restitution: .5
			}),
			v = new CANNON.ContactMaterial(m, e, {
				friction: .2,
				restitution: .6
			}),
			z = new CANNON.ContactMaterial(m, b, {
				friction: .5,
				restitution: .1
			});
		p.addContactMaterial(t);
		p.addContactMaterial(v);
		p.addContactMaterial(z);
		s_oScenario._createBallBody();
		s_oScenario._createFieldBody();
		s_oScenario.createLineOfGoal();
		n = s_oScenario.createHandGoalKeeper(LEFT_GLOVE_POSITION, LEFT_GLOVE);
		l = s_oScenario.createHandGoalKeeper(RIGHT_GLOVE_POSITION, RIGHT_GLOVE)
	};
	this._createFieldBody = function() {
		k = new CANNON.Plane;
		c = new CANNON.Body({
			mass: 0,
			material: e
		});
		c.addShape(k);
		c.position.z = -10;
		c.addEventListener("collide", function(t) {
			s_oScenario.fieldCollision()
		});
		p.addBody(c);
		SHOW_3D_RENDER && r.addVisual(c)
	};
	this.createLineOfGoal = function() {
		f = new CANNON.Box(new CANNON.Vec3(LINE_GOAL_SIZE.width, LINE_GOAL_SIZE.depth, LINE_GOAL_SIZE.height));
		g = new CANNON.Body({
			mass: 0
		});
		g.addShape(f);
		g.position.set(GOAL_LINE_POS.x, GOAL_LINE_POS.y, GOAL_LINE_POS.z);
		g.addEventListener("collide", function(t) {
			s_oScenario.lineGoalCollision()
		});
		p.addBody(g)
	};
	this.createHandGoalKeeper = function(t, v) {
		var z = new CANNON.Box(new CANNON.Vec3(GLOVE_SIZE.width,
			GLOVE_SIZE.depth, GLOVE_SIZE.height));
		var y = new CANNON.Body({
			mass: 0,
			material: b
		});
		y.addShape(z);
		y.position.set(t.x, t.y, t.z);
		y.addEventListener("collide", function(G) {
			s_oScenario.handCollision(G, v)
		});
		p.addBody(y);
		SHOW_3D_RENDER && r.addVisual(y);
		return y
	};
	this._createBallBody = function() {
		d = new CANNON.Sphere(BALL_RADIUS);
		a = new CANNON.Body({
			mass: BALL_MASS,
			material: m,
			linearDamping: BALL_LINEAR_DAMPING,
			angularDamping: 2 * BALL_LINEAR_DAMPING
		});
		var t = new CANNON.Vec3(POSITION_BALL.x, POSITION_BALL.y, POSITION_BALL.z);
		a.position.copy(t);
		a.addShape(d);
		p.add(a);
		SHOW_3D_RENDER && (h = r.addVisual(a))
	};
	this.addImpulse = function(t, v) {
		var z = new CANNON.Vec3(0, 0, BALL_RADIUS),
			y = new CANNON.Vec3(v.x, v.y, v.z);
		t.applyImpulse(y, z)
	};
	this.addForce = function(t, v) {
		var z = new CANNON.Vec3(0, 0, 0),
			y = new CANNON.Vec3(v.x, v.y, v.z);
		t.applyForce(y, z)
	};
	this.getBodyVelocity = function(t) {
		return t.velocity
	};
	this.ballBody = function() {
		return a
	};
	this.ballMesh = function() {
		return h
	};
	this.getCamera = function() {
		return r.camera()
	};
	this.fieldCollision = function() {};
	this.collisionWithBall = function() {
		s_oGame.lineGoalCollision()
	};
	this.setElementAngularVelocity = function(t, v) {
		t.angularVelocity.set(v.x, v.y, v.z)
	};
	this.setElementVelocity = function(t, v) {
		var z = new CANNON.Vec3(v.x, v.y, v.z);
		t.velocity = z
	};
	this.setElementLinearDamping = function(t, v) {
		t.linearDamping = v
	};
	this.getFieldBody = function() {
		return c
	};
	this.lineGoalCollision = function() {
		s_oGame.resetBallPosition();
		s_oGame.ballVisible(!1);
		s_oGame.ballNotCaught()
	};
	this.handCollision = function(t, v) {
		s_oGame.ballCaught(t.contact.rj,
			v)
	};
	this.update = function() {
		p.step(PHYSICS_STEP)
	};
	this.getLeftGlovesBody = function() {
		return n
	};
	this.getRightGlovesBody = function() {
		return l
	};
	this.poleCollision = function() {
		playSound("kick", 1, 0)
	};
	this.destroyWorld = function() {
		for (var t = p.bodies, v = 0; v < t.length; v++) p.remove(t[v]);
		p = null
	};
	s_oScenario = this;
	SHOW_3D_RENDER ? (r.addScene("Cricket Bowler Mode", this._init), r.start()) : this._init()
}
var s_oScenario, dat = dat || {};
dat.gui = dat.gui || {};
dat.utils = dat.utils || {};
dat.controllers = dat.controllers || {};
dat.dom = dat.dom || {};
dat.color = dat.color || {};
dat.utils.css = function() {
	return {
		load: function(p, e) {
			e = e || document;
			var m = e.createElement("link");
			m.type = "text/css";
			m.rel = "stylesheet";
			m.href = p;
			e.getElementsByTagName("head")[0].appendChild(m)
		},
		inject: function(p, e) {
			e = e || document;
			var m = document.createElement("style");
			m.type = "text/css";
			m.innerHTML = p;
			e.getElementsByTagName("head")[0].appendChild(m)
		}
	}
}();
dat.utils.common = function() {
	var p = Array.prototype.forEach,
		e = Array.prototype.slice;
	return {
		BREAK: {},
		extend: function(m) {
			this.each(e.call(arguments, 1), function(q) {
				for (var b in q) this.isUndefined(q[b]) || (m[b] = q[b])
			}, this);
			return m
		},
		defaults: function(m) {
			this.each(e.call(arguments, 1), function(q) {
				for (var b in q) this.isUndefined(m[b]) && (m[b] = q[b])
			}, this);
			return m
		},
		compose: function() {
			var m = e.call(arguments);
			return function() {
				for (var q = e.call(arguments), b = m.length - 1; 0 <= b; b--) q = [m[b].apply(this, q)];
				return q[0]
			}
		},
		each: function(m, q, b) {
			if (p && m.forEach === p) m.forEach(q, b);
			else if (m.length === m.length + 0)
				for (var d = 0, a = m.length; d < a && !(d in m && q.call(b, m[d], d) === this.BREAK); d++);
			else
				for (d in m)
					if (q.call(b, m[d], d) === this.BREAK) break
		},
		defer: function(m) {
			setTimeout(m, 0)
		},
		toArray: function(m) {
			return m.toArray ? m.toArray() : e.call(m)
		},
		isUndefined: function(m) {
			return void 0 === m
		},
		isNull: function(m) {
			return null === m
		},
		isNaN: function(m) {
			return m !== m
		},
		isArray: Array.isArray || function(m) {
			return m.constructor === Array
		},
		isObject: function(m) {
			return m ===
				Object(m)
		},
		isNumber: function(m) {
			return m === m + 0
		},
		isString: function(m) {
			return m === m + ""
		},
		isBoolean: function(m) {
			return !1 === m || !0 === m
		},
		isFunction: function(m) {
			return "[object Function]" === Object.prototype.toString.call(m)
		}
	}
}();
dat.controllers.Controller = function(p) {
	var e = function(m, q) {
		this.initialValue = m[q];
		this.domElement = document.createElement("div");
		this.object = m;
		this.property = q;
		this.__onFinishChange = this.__onChange = void 0
	};
	p.extend(e.prototype, {
		onChange: function(m) {
			this.__onChange = m;
			return this
		},
		onFinishChange: function(m) {
			this.__onFinishChange = m;
			return this
		},
		setValue: function(m) {
			this.object[this.property] = m;
			this.__onChange && this.__onChange.call(this, m);
			this.updateDisplay();
			return this
		},
		getValue: function() {
			return this.object[this.property]
		},
		updateDisplay: function() {
			return this
		},
		isModified: function() {
			return this.initialValue !== this.getValue()
		}
	});
	return e
}(dat.utils.common);
dat.dom.dom = function(p) {
	function e(d) {
		if ("0" === d || p.isUndefined(d)) return 0;
		d = d.match(q);
		return p.isNull(d) ? 0 : parseFloat(d[1])
	}
	var m = {};
	p.each({
		HTMLEvents: ["change"],
		MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
		KeyboardEvents: ["keydown"]
	}, function(d, a) {
		p.each(d, function(h) {
			m[h] = a
		})
	});
	var q = /(\d+(\.\d+)?)px/,
		b = {
			makeSelectable: function(d, a) {
				void 0 !== d && void 0 !== d.style && (d.onselectstart = a ? function() {
						return !1
					} : function() {}, d.style.MozUserSelect = a ? "auto" : "none", d.style.KhtmlUserSelect =
					a ? "auto" : "none", d.unselectable = a ? "on" : "off")
			},
			makeFullscreen: function(d, a, h) {
				p.isUndefined(a) && (a = !0);
				p.isUndefined(h) && (h = !0);
				d.style.position = "absolute";
				a && (d.style.left = 0, d.style.right = 0);
				h && (d.style.top = 0, d.style.bottom = 0)
			},
			fakeEvent: function(d, a, h, k) {
				h = h || {};
				var c = m[a];
				if (!c) throw Error("Event type " + a + " not supported.");
				var f = document.createEvent(c);
				switch (c) {
					case "MouseEvents":
						f.initMouseEvent(a, h.bubbles || !1, h.cancelable || !0, window, h.clickCount || 1, 0, 0, h.x || h.clientX || 0, h.y || h.clientY || 0, !1,
							!1, !1, !1, 0, null);
						break;
					case "KeyboardEvents":
						c = f.initKeyboardEvent || f.initKeyEvent;
						p.defaults(h, {
							cancelable: !0,
							ctrlKey: !1,
							altKey: !1,
							shiftKey: !1,
							metaKey: !1,
							keyCode: void 0,
							charCode: void 0
						});
						c(a, h.bubbles || !1, h.cancelable, window, h.ctrlKey, h.altKey, h.shiftKey, h.metaKey, h.keyCode, h.charCode);
						break;
					default:
						f.initEvent(a, h.bubbles || !1, h.cancelable || !0)
				}
				p.defaults(f, k);
				d.dispatchEvent(f)
			},
			bind: function(d, a, h, k) {
				d.addEventListener ? d.addEventListener(a, h, k || !1) : d.attachEvent && d.attachEvent("on" + a, h);
				return b
			},
			unbind: function(d, a, h, k) {
				d.removeEventListener ? d.removeEventListener(a, h, k || !1) : d.detachEvent && d.detachEvent("on" + a, h);
				return b
			},
			addClass: function(d, a) {
				if (void 0 === d.className) d.className = a;
				else if (d.className !== a) {
					var h = d.className.split(/ +/); - 1 == h.indexOf(a) && (h.push(a), d.className = h.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
				}
				return b
			},
			removeClass: function(d, a) {
				if (a) {
					if (void 0 !== d.className)
						if (d.className === a) d.removeAttribute("class");
						else {
							var h = d.className.split(/ +/),
								k = h.indexOf(a); - 1 !=
								k && (h.splice(k, 1), d.className = h.join(" "))
						}
				} else d.className = void 0;
				return b
			},
			hasClass: function(d, a) {
				return (new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)")).test(d.className) || !1
			},
			getWidth: function(d) {
				d = getComputedStyle(d);
				return e(d["border-left-width"]) + e(d["border-right-width"]) + e(d["padding-left"]) + e(d["padding-right"]) + e(d.width)
			},
			getHeight: function(d) {
				d = getComputedStyle(d);
				return e(d["border-top-width"]) + e(d["border-bottom-width"]) + e(d["padding-top"]) + e(d["padding-bottom"]) + e(d.height)
			},
			getOffset: function(d) {
				var a = {
					left: 0,
					top: 0
				};
				if (d.offsetParent) {
					do a.left += d.offsetLeft, a.top += d.offsetTop; while (d = d.offsetParent)
				}
				return a
			},
			isActive: function(d) {
				return d === document.activeElement && (d.type || d.href)
			}
		};
	return b
}(dat.utils.common);
dat.controllers.OptionController = function(p, e, m) {
	var q = function(b, d, a) {
		q.superclass.call(this, b, d);
		var h = this;
		this.__select = document.createElement("select");
		if (m.isArray(a)) {
			var k = {};
			m.each(a, function(c) {
				k[c] = c
			});
			a = k
		}
		m.each(a, function(c, f) {
			var g = document.createElement("option");
			g.innerHTML = f;
			g.setAttribute("value", c);
			h.__select.appendChild(g)
		});
		this.updateDisplay();
		e.bind(this.__select, "change", function() {
			h.setValue(this.options[this.selectedIndex].value)
		});
		this.domElement.appendChild(this.__select)
	};
	q.superclass = p;
	m.extend(q.prototype, p.prototype, {
		setValue: function(b) {
			b = q.superclass.prototype.setValue.call(this, b);
			this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
			return b
		},
		updateDisplay: function() {
			this.__select.value = this.getValue();
			return q.superclass.prototype.updateDisplay.call(this)
		}
	});
	return q
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.NumberController = function(p, e) {
	var m = function(q, b, d) {
		m.superclass.call(this, q, b);
		d = d || {};
		this.__min = d.min;
		this.__max = d.max;
		this.__step = d.step;
		e.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step;
		q = this.__impliedStep;
		q = q.toString();
		q = -1 < q.indexOf(".") ? q.length - q.indexOf(".") - 1 : 0;
		this.__precision = q
	};
	m.superclass = p;
	e.extend(m.prototype, p.prototype, {
		setValue: function(q) {
			void 0 !==
				this.__min && q < this.__min ? q = this.__min : void 0 !== this.__max && q > this.__max && (q = this.__max);
			void 0 !== this.__step && 0 != q % this.__step && (q = Math.round(q / this.__step) * this.__step);
			return m.superclass.prototype.setValue.call(this, q)
		},
		min: function(q) {
			this.__min = q;
			return this
		},
		max: function(q) {
			this.__max = q;
			return this
		},
		step: function(q) {
			this.__step = q;
			return this
		}
	});
	return m
}(dat.controllers.Controller, dat.utils.common);
dat.controllers.NumberControllerBox = function(p, e, m) {
	var q = function(b, d, a) {
		function h() {
			var n = parseFloat(f.__input.value);
			m.isNaN(n) || f.setValue(n)
		}

		function k(n) {
			var l = g - n.clientY;
			f.setValue(f.getValue() + l * f.__impliedStep);
			g = n.clientY
		}

		function c() {
			e.unbind(window, "mousemove", k);
			e.unbind(window, "mouseup", c)
		}
		this.__truncationSuspended = !1;
		q.superclass.call(this, b, d, a);
		var f = this,
			g;
		this.__input = document.createElement("input");
		this.__input.setAttribute("type", "text");
		e.bind(this.__input, "change", h);
		e.bind(this.__input,
			"blur",
			function() {
				h();
				f.__onFinishChange && f.__onFinishChange.call(f, f.getValue())
			});
		e.bind(this.__input, "mousedown", function(n) {
			e.bind(window, "mousemove", k);
			e.bind(window, "mouseup", c);
			g = n.clientY
		});
		e.bind(this.__input, "keydown", function(n) {
			13 === n.keyCode && (f.__truncationSuspended = !0, this.blur(), f.__truncationSuspended = !1)
		});
		this.updateDisplay();
		this.domElement.appendChild(this.__input)
	};
	q.superclass = p;
	m.extend(q.prototype, p.prototype, {
		updateDisplay: function() {
			var b = this.__input;
			if (this.__truncationSuspended) var d =
				this.getValue();
			else {
				d = this.getValue();
				var a = Math.pow(10, this.__precision);
				d = Math.round(d * a) / a
			}
			b.value = d;
			return q.superclass.prototype.updateDisplay.call(this)
		}
	});
	return q
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
dat.controllers.NumberControllerSlider = function(p, e, m, q, b) {
	var d = function(a, h, k, c, f) {
		function g(r) {
			r.preventDefault();
			var t = e.getOffset(l.__background),
				v = e.getWidth(l.__background),
				z = l,
				y = t.left,
				G = l.__min;
			z.setValue.call(z, G + (r.clientX - y) / (t.left + v - y) * (l.__max - G));
			return !1
		}

		function n() {
			e.unbind(window, "mousemove", g);
			e.unbind(window, "mouseup", n);
			l.__onFinishChange && l.__onFinishChange.call(l, l.getValue())
		}
		d.superclass.call(this, a, h, {
			min: k,
			max: c,
			step: f
		});
		var l = this;
		this.__background = document.createElement("div");
		this.__foreground = document.createElement("div");
		e.bind(this.__background, "mousedown", function(r) {
			e.bind(window, "mousemove", g);
			e.bind(window, "mouseup", n);
			g(r)
		});
		e.addClass(this.__background, "slider");
		e.addClass(this.__foreground, "slider-fg");
		this.updateDisplay();
		this.__background.appendChild(this.__foreground);
		this.domElement.appendChild(this.__background)
	};
	d.superclass = p;
	d.useDefaultStyles = function() {
		m.inject(b)
	};
	q.extend(d.prototype, p.prototype, {
		updateDisplay: function() {
			var a = (this.getValue() - this.__min) /
				(this.__max - this.__min);
			this.__foreground.style.width = 100 * a + "%";
			return d.superclass.prototype.updateDisplay.call(this)
		}
	});
	return d
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController = function(p, e, m) {
	var q = function(b, d, a) {
		q.superclass.call(this, b, d);
		var h = this;
		this.__button = document.createElement("div");
		this.__button.innerHTML = void 0 === a ? "Fire" : a;
		e.bind(this.__button, "click", function(k) {
			k.preventDefault();
			h.fire();
			return !1
		});
		e.addClass(this.__button, "button");
		this.domElement.appendChild(this.__button)
	};
	q.superclass = p;
	m.extend(q.prototype, p.prototype, {
		fire: function() {
			this.__onChange && this.__onChange.call(this);
			this.__onFinishChange && this.__onFinishChange.call(this,
				this.getValue());
			this.getValue().call(this.object)
		}
	});
	return q
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.BooleanController = function(p, e, m) {
	var q = function(b, d) {
		q.superclass.call(this, b, d);
		var a = this;
		this.__prev = this.getValue();
		this.__checkbox = document.createElement("input");
		this.__checkbox.setAttribute("type", "checkbox");
		e.bind(this.__checkbox, "change", function() {
			a.setValue(!a.__prev)
		}, !1);
		this.domElement.appendChild(this.__checkbox);
		this.updateDisplay()
	};
	q.superclass = p;
	m.extend(q.prototype, p.prototype, {
		setValue: function(b) {
			b = q.superclass.prototype.setValue.call(this, b);
			this.__onFinishChange &&
				this.__onFinishChange.call(this, this.getValue());
			this.__prev = this.getValue();
			return b
		},
		updateDisplay: function() {
			!0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1;
			return q.superclass.prototype.updateDisplay.call(this)
		}
	});
	return q
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.color.toString = function(p) {
	return function(e) {
		if (1 == e.a || p.isUndefined(e.a)) {
			for (e = e.hex.toString(16); 6 > e.length;) e = "0" + e;
			return "#" + e
		}
		return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
	}
}(dat.utils.common);
dat.color.interpret = function(p, e) {
	var m, q, b = [{
		litmus: e.isString,
		conversions: {
			THREE_CHAR_HEX: {
				read: function(d) {
					d = d.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
					return null === d ? !1 : {
						space: "HEX",
						hex: parseInt("0x" + d[1].toString() + d[1].toString() + d[2].toString() + d[2].toString() + d[3].toString() + d[3].toString())
					}
				},
				write: p
			},
			SIX_CHAR_HEX: {
				read: function(d) {
					d = d.match(/^#([A-F0-9]{6})$/i);
					return null === d ? !1 : {
						space: "HEX",
						hex: parseInt("0x" + d[1].toString())
					}
				},
				write: p
			},
			CSS_RGB: {
				read: function(d) {
					d = d.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
					return null === d ? !1 : {
						space: "RGB",
						r: parseFloat(d[1]),
						g: parseFloat(d[2]),
						b: parseFloat(d[3])
					}
				},
				write: p
			},
			CSS_RGBA: {
				read: function(d) {
					d = d.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
					return null === d ? !1 : {
						space: "RGB",
						r: parseFloat(d[1]),
						g: parseFloat(d[2]),
						b: parseFloat(d[3]),
						a: parseFloat(d[4])
					}
				},
				write: p
			}
		}
	}, {
		litmus: e.isNumber,
		conversions: {
			HEX: {
				read: function(d) {
					return {
						space: "HEX",
						hex: d,
						conversionName: "HEX"
					}
				},
				write: function(d) {
					return d.hex
				}
			}
		}
	}, {
		litmus: e.isArray,
		conversions: {
			RGB_ARRAY: {
				read: function(d) {
					return 3 !=
						d.length ? !1 : {
							space: "RGB",
							r: d[0],
							g: d[1],
							b: d[2]
						}
				},
				write: function(d) {
					return [d.r, d.g, d.b]
				}
			},
			RGBA_ARRAY: {
				read: function(d) {
					return 4 != d.length ? !1 : {
						space: "RGB",
						r: d[0],
						g: d[1],
						b: d[2],
						a: d[3]
					}
				},
				write: function(d) {
					return [d.r, d.g, d.b, d.a]
				}
			}
		}
	}, {
		litmus: e.isObject,
		conversions: {
			RGBA_OBJ: {
				read: function(d) {
					return e.isNumber(d.r) && e.isNumber(d.g) && e.isNumber(d.b) && e.isNumber(d.a) ? {
						space: "RGB",
						r: d.r,
						g: d.g,
						b: d.b,
						a: d.a
					} : !1
				},
				write: function(d) {
					return {
						r: d.r,
						g: d.g,
						b: d.b,
						a: d.a
					}
				}
			},
			RGB_OBJ: {
				read: function(d) {
					return e.isNumber(d.r) &&
						e.isNumber(d.g) && e.isNumber(d.b) ? {
							space: "RGB",
							r: d.r,
							g: d.g,
							b: d.b
						} : !1
				},
				write: function(d) {
					return {
						r: d.r,
						g: d.g,
						b: d.b
					}
				}
			},
			HSVA_OBJ: {
				read: function(d) {
					return e.isNumber(d.h) && e.isNumber(d.s) && e.isNumber(d.v) && e.isNumber(d.a) ? {
						space: "HSV",
						h: d.h,
						s: d.s,
						v: d.v,
						a: d.a
					} : !1
				},
				write: function(d) {
					return {
						h: d.h,
						s: d.s,
						v: d.v,
						a: d.a
					}
				}
			},
			HSV_OBJ: {
				read: function(d) {
					return e.isNumber(d.h) && e.isNumber(d.s) && e.isNumber(d.v) ? {
						space: "HSV",
						h: d.h,
						s: d.s,
						v: d.v
					} : !1
				},
				write: function(d) {
					return {
						h: d.h,
						s: d.s,
						v: d.v
					}
				}
			}
		}
	}];
	return function() {
		q = !1;
		var d = 1 < arguments.length ? e.toArray(arguments) : arguments[0];
		e.each(b, function(a) {
			if (a.litmus(d)) return e.each(a.conversions, function(h, k) {
				m = h.read(d);
				if (!1 === q && !1 !== m) return q = m, m.conversionName = k, m.conversion = h, e.BREAK
			}), e.BREAK
		});
		return q
	}
}(dat.color.toString, dat.utils.common);
dat.GUI = dat.gui.GUI = function(p, e, m, q, b, d, a, h, k, c, f, g, n, l, r) {
	function t(w, B, u, x) {
		if (void 0 === B[u]) throw Error("Object " + B + ' has no property "' + u + '"');
		x.color ? B = new f(B, u) : (B = [B, u].concat(x.factoryArgs), B = q.apply(w, B));
		x.before instanceof b && (x.before = x.before.__li);
		y(w, B);
		l.addClass(B.domElement, "c");
		u = document.createElement("span");
		l.addClass(u, "property-name");
		u.innerHTML = B.property;
		var F = document.createElement("div");
		F.appendChild(u);
		F.appendChild(B.domElement);
		x = v(w, F, x.before);
		l.addClass(x, C.CLASS_CONTROLLER_ROW);
		l.addClass(x, typeof B.getValue());
		z(w, x, B);
		w.__controllers.push(B);
		return B
	}

	function v(w, B, u) {
		var x = document.createElement("li");
		B && x.appendChild(B);
		u ? w.__ul.insertBefore(x, params.before) : w.__ul.appendChild(x);
		w.onResize();
		return x
	}

	function z(w, B, u) {
		u.__li = B;
		u.__gui = w;
		r.extend(u, {
			options: function(E) {
				if (1 < arguments.length) return u.remove(), t(w, u.object, u.property, {
					before: u.__li.nextElementSibling,
					factoryArgs: [r.toArray(arguments)]
				});
				if (r.isArray(E) || r.isObject(E)) return u.remove(), t(w, u.object, u.property, {
					before: u.__li.nextElementSibling,
					factoryArgs: [E]
				})
			},
			name: function(E) {
				u.__li.firstElementChild.firstElementChild.innerHTML = E;
				return u
			},
			listen: function() {
				u.__gui.listen(u);
				return u
			},
			remove: function() {
				u.__gui.remove(u);
				return u
			}
		});
		if (u instanceof k) {
			var x = new h(u.object, u.property, {
				min: u.__min,
				max: u.__max,
				step: u.__step
			});
			r.each(["updateDisplay", "onChange", "onFinishChange"], function(E) {
				var N = u[E],
					D = x[E];
				u[E] = x[E] = function() {
					var U = Array.prototype.slice.call(arguments);
					N.apply(u, U);
					return D.apply(x, U)
				}
			});
			l.addClass(B, "has-slider");
			u.domElement.insertBefore(x.domElement, u.domElement.firstElementChild)
		} else if (u instanceof h) {
			var F = function(E) {
				return r.isNumber(u.__min) && r.isNumber(u.__max) ? (u.remove(), t(w, u.object, u.property, {
					before: u.__li.nextElementSibling,
					factoryArgs: [u.__min, u.__max, u.__step]
				})) : E
			};
			u.min = r.compose(F, u.min);
			u.max = r.compose(F, u.max)
		} else u instanceof d ? (l.bind(B, "click", function() {
				l.fakeEvent(u.__checkbox, "click")
			}), l.bind(u.__checkbox, "click", function(E) {
				E.stopPropagation()
			})) :
			u instanceof a ? (l.bind(B, "click", function() {
				l.fakeEvent(u.__button, "click")
			}), l.bind(B, "mouseover", function() {
				l.addClass(u.__button, "hover")
			}), l.bind(B, "mouseout", function() {
				l.removeClass(u.__button, "hover")
			})) : u instanceof f && (l.addClass(B, "color"), u.updateDisplay = r.compose(function(E) {
				B.style.borderLeftColor = u.__color.toString();
				return E
			}, u.updateDisplay), u.updateDisplay());
		u.setValue = r.compose(function(E) {
			w.getRoot().__preset_select && u.isModified() && K(w.getRoot(), !0);
			return E
		}, u.setValue)
	}

	function y(w,
		B) {
		var u = w.getRoot(),
			x = u.__rememberedObjects.indexOf(B.object);
		if (-1 != x) {
			var F = u.__rememberedObjectIndecesToControllers[x];
			void 0 === F && (F = {}, u.__rememberedObjectIndecesToControllers[x] = F);
			F[B.property] = B;
			if (u.load && u.load.remembered) {
				u = u.load.remembered;
				if (u[w.preset]) u = u[w.preset];
				else if (u.Default) u = u.Default;
				else return;
				u[x] && void 0 !== u[x][B.property] && (x = u[x][B.property], B.initialValue = x, B.setValue(x))
			}
		}
	}

	function G(w) {
		var B = w.__save_row = document.createElement("li");
		l.addClass(w.domElement, "has-save");
		w.__ul.insertBefore(B, w.__ul.firstChild);
		l.addClass(B, "save-row");
		var u = document.createElement("span");
		u.innerHTML = "&nbsp;";
		l.addClass(u, "button gears");
		var x = document.createElement("span");
		x.innerHTML = "Save";
		l.addClass(x, "button");
		l.addClass(x, "save");
		var F = document.createElement("span");
		F.innerHTML = "New";
		l.addClass(F, "button");
		l.addClass(F, "save-as");
		var E = document.createElement("span");
		E.innerHTML = "Revert";
		l.addClass(E, "button");
		l.addClass(E, "revert");
		var N = w.__preset_select = document.createElement("select");
		w.load && w.load.remembered ? r.each(w.load.remembered, function(R, X) {
			T(w, X, X == w.preset)
		}) : T(w, "Default", !1);
		l.bind(N, "change", function() {
			for (var R = 0; R < w.__preset_select.length; R++) w.__preset_select[R].innerHTML = w.__preset_select[R].value;
			w.preset = this.value
		});
		B.appendChild(N);
		B.appendChild(u);
		B.appendChild(x);
		B.appendChild(F);
		B.appendChild(E);
		if (I) {
			var D = function() {
				U.style.display = w.useLocalStorage ? "block" : "none"
			};
			B = document.getElementById("dg-save-locally");
			var U = document.getElementById("dg-local-explain");
			B.style.display = "block";
			B = document.getElementById("dg-local-storage");
			"true" === localStorage.getItem(document.location.href + ".isLocal") && B.setAttribute("checked", "checked");
			D();
			l.bind(B, "change", function() {
				w.useLocalStorage = !w.useLocalStorage;
				D()
			})
		}
		var aa = document.getElementById("dg-new-constructor");
		l.bind(aa, "keydown", function(R) {
			!R.metaKey || 67 !== R.which && 67 != R.keyCode || S.hide()
		});
		l.bind(u, "click", function() {
			aa.innerHTML = JSON.stringify(w.getSaveObject(), void 0, 2);
			S.show();
			aa.focus();
			aa.select()
		});
		l.bind(x, "click", function() {
			w.save()
		});
		l.bind(F, "click", function() {
			var R = prompt("Enter a new preset name.");
			R && w.saveAs(R)
		});
		l.bind(E, "click", function() {
			w.revert()
		})
	}

	function O(w) {
		function B(E) {
			E.preventDefault();
			F = E.clientX;
			l.addClass(w.__closeButton, C.CLASS_DRAG);
			l.bind(window, "mousemove", u);
			l.bind(window, "mouseup", x);
			return !1
		}

		function u(E) {
			E.preventDefault();
			w.width += F - E.clientX;
			w.onResize();
			F = E.clientX;
			return !1
		}

		function x() {
			l.removeClass(w.__closeButton, C.CLASS_DRAG);
			l.unbind(window, "mousemove",
				u);
			l.unbind(window, "mouseup", x)
		}
		w.__resize_handle = document.createElement("div");
		r.extend(w.__resize_handle.style, {
			width: "6px",
			marginLeft: "-3px",
			height: "200px",
			cursor: "ew-resize",
			position: "absolute"
		});
		var F;
		l.bind(w.__resize_handle, "mousedown", B);
		l.bind(w.__closeButton, "mousedown", B);
		w.domElement.insertBefore(w.__resize_handle, w.domElement.firstElementChild)
	}

	function Q(w, B) {
		w.domElement.style.width = B + "px";
		w.__save_row && w.autoPlace && (w.__save_row.style.width = B + "px");
		w.__closeButton && (w.__closeButton.style.width =
			B + "px")
	}

	function V(w, B) {
		var u = {};
		r.each(w.__rememberedObjects, function(x, F) {
			var E = {};
			r.each(w.__rememberedObjectIndecesToControllers[F], function(N, D) {
				E[D] = B ? N.initialValue : N.getValue()
			});
			u[F] = E
		});
		return u
	}

	function T(w, B, u) {
		var x = document.createElement("option");
		x.innerHTML = B;
		x.value = B;
		w.__preset_select.appendChild(x);
		u && (w.__preset_select.selectedIndex = w.__preset_select.length - 1)
	}

	function K(w, B) {
		var u = w.__preset_select[w.__preset_select.selectedIndex];
		u.innerHTML = B ? u.value + "*" : u.value
	}

	function H(w) {
		0 !=
			w.length && g(function() {
				H(w)
			});
		r.each(w, function(B) {
			B.updateDisplay()
		})
	}
	p.inject(m);
	try {
		var I = "localStorage" in window && null !== window.localStorage
	} catch (w) {
		I = !1
	}
	var S, J = !0,
		L, A = !1,
		P = [],
		C = function(w) {
			function B() {
				localStorage.setItem(document.location.href + ".gui", JSON.stringify(x.getSaveObject()))
			}

			function u() {
				var D = x.getRoot();
				D.width += 1;
				r.defer(function() {
					--D.width
				})
			}
			var x = this;
			this.domElement = document.createElement("div");
			this.__ul = document.createElement("ul");
			this.domElement.appendChild(this.__ul);
			l.addClass(this.domElement, "dg");
			this.__folders = {};
			this.__controllers = [];
			this.__rememberedObjects = [];
			this.__rememberedObjectIndecesToControllers = [];
			this.__listening = [];
			w = w || {};
			w = r.defaults(w, {
				autoPlace: !0,
				width: C.DEFAULT_WIDTH
			});
			w = r.defaults(w, {
				resizable: w.autoPlace,
				hideable: w.autoPlace
			});
			r.isUndefined(w.load) ? w.load = {
				preset: "Default"
			} : w.preset && (w.load.preset = w.preset);
			r.isUndefined(w.parent) && w.hideable && P.push(this);
			w.resizable = r.isUndefined(w.parent) && w.resizable;
			w.autoPlace && r.isUndefined(w.scrollable) &&
				(w.scrollable = !0);
			var F = I && "true" === localStorage.getItem(document.location.href + ".isLocal");
			Object.defineProperties(this, {
				parent: {
					get: function() {
						return w.parent
					}
				},
				scrollable: {
					get: function() {
						return w.scrollable
					}
				},
				autoPlace: {
					get: function() {
						return w.autoPlace
					}
				},
				preset: {
					get: function() {
						return x.parent ? x.getRoot().preset : w.load.preset
					},
					set: function(D) {
						x.parent ? x.getRoot().preset = D : w.load.preset = D;
						for (D = 0; D < this.__preset_select.length; D++) this.__preset_select[D].value == this.preset && (this.__preset_select.selectedIndex =
							D);
						x.revert()
					}
				},
				width: {
					get: function() {
						return w.width
					},
					set: function(D) {
						w.width = D;
						Q(x, D)
					}
				},
				name: {
					get: function() {
						return w.name
					},
					set: function(D) {
						w.name = D;
						N && (N.innerHTML = w.name)
					}
				},
				closed: {
					get: function() {
						return w.closed
					},
					set: function(D) {
						w.closed = D;
						w.closed ? l.addClass(x.__ul, C.CLASS_CLOSED) : l.removeClass(x.__ul, C.CLASS_CLOSED);
						this.onResize();
						x.__closeButton && (x.__closeButton.innerHTML = D ? C.TEXT_OPEN : C.TEXT_CLOSED)
					}
				},
				load: {
					get: function() {
						return w.load
					}
				},
				useLocalStorage: {
					get: function() {
						return F
					},
					set: function(D) {
						I &&
							((F = D) ? l.bind(window, "unload", B) : l.unbind(window, "unload", B), localStorage.setItem(document.location.href + ".isLocal", D))
					}
				}
			});
			if (r.isUndefined(w.parent)) {
				w.closed = !1;
				l.addClass(this.domElement, C.CLASS_MAIN);
				l.makeSelectable(this.domElement, !1);
				if (I && F) {
					x.useLocalStorage = !0;
					var E = localStorage.getItem(document.location.href + ".gui");
					E && (w.load = JSON.parse(E))
				}
				this.__closeButton = document.createElement("div");
				this.__closeButton.innerHTML = C.TEXT_CLOSED;
				l.addClass(this.__closeButton, C.CLASS_CLOSE_BUTTON);
				this.domElement.appendChild(this.__closeButton);
				l.bind(this.__closeButton, "click", function() {
					x.closed = !x.closed
				})
			} else {
				void 0 === w.closed && (w.closed = !0);
				var N = document.createTextNode(w.name);
				l.addClass(N, "controller-name");
				E = v(x, N);
				l.addClass(this.__ul, C.CLASS_CLOSED);
				l.addClass(E, "title");
				l.bind(E, "click", function(D) {
					D.preventDefault();
					x.closed = !x.closed;
					return !1
				});
				w.closed || (this.closed = !1)
			}
			w.autoPlace && (r.isUndefined(w.parent) && (J && (L = document.createElement("div"), l.addClass(L, "dg"), l.addClass(L, C.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(L),
				J = !1), L.appendChild(this.domElement), l.addClass(this.domElement, C.CLASS_AUTO_PLACE)), this.parent || Q(x, w.width));
			l.bind(window, "resize", function() {
				x.onResize()
			});
			l.bind(this.__ul, "webkitTransitionEnd", function() {
				x.onResize()
			});
			l.bind(this.__ul, "transitionend", function() {
				x.onResize()
			});
			l.bind(this.__ul, "oTransitionEnd", function() {
				x.onResize()
			});
			this.onResize();
			w.resizable && O(this);
			x.getRoot();
			w.parent || u()
		};
	C.toggleHide = function() {
		A = !A;
		r.each(P, function(w) {
			w.domElement.style.zIndex = A ? -999 : 999;
			w.domElement.style.opacity =
				A ? 0 : 1
		})
	};
	C.CLASS_AUTO_PLACE = "a";
	C.CLASS_AUTO_PLACE_CONTAINER = "ac";
	C.CLASS_MAIN = "main";
	C.CLASS_CONTROLLER_ROW = "cr";
	C.CLASS_TOO_TALL = "taller-than-window";
	C.CLASS_CLOSED = "closed";
	C.CLASS_CLOSE_BUTTON = "close-button";
	C.CLASS_DRAG = "drag";
	C.DEFAULT_WIDTH = 245;
	C.TEXT_CLOSED = "Close Controls";
	C.TEXT_OPEN = "Open Controls";
	l.bind(window, "keydown", function(w) {
		"text" === document.activeElement.type || 72 !== w.which && 72 != w.keyCode || C.toggleHide()
	}, !1);
	r.extend(C.prototype, {
		add: function(w, B) {
			return t(this, w, B, {
				factoryArgs: Array.prototype.slice.call(arguments,
					2)
			})
		},
		addColor: function(w, B) {
			return t(this, w, B, {
				color: !0
			})
		},
		remove: function(w) {
			this.__ul.removeChild(w.__li);
			this.__controllers.slice(this.__controllers.indexOf(w), 1);
			var B = this;
			r.defer(function() {
				B.onResize()
			})
		},
		destroy: function() {
			this.autoPlace && L.removeChild(this.domElement)
		},
		addFolder: function(w) {
			if (void 0 !== this.__folders[w]) throw Error('You already have a folder in this GUI by the name "' + w + '"');
			var B = {
				name: w,
				parent: this
			};
			B.autoPlace = this.autoPlace;
			this.load && this.load.folders && this.load.folders[w] &&
				(B.closed = this.load.folders[w].closed, B.load = this.load.folders[w]);
			B = new C(B);
			this.__folders[w] = B;
			w = v(this, B.domElement);
			l.addClass(w, "folder");
			return B
		},
		open: function() {
			this.closed = !1
		},
		close: function() {
			this.closed = !0
		},
		onResize: function() {
			var w = this.getRoot();
			if (w.scrollable) {
				var B = l.getOffset(w.__ul).top,
					u = 0;
				r.each(w.__ul.childNodes, function(x) {
					w.autoPlace && x === w.__save_row || (u += l.getHeight(x))
				});
				window.innerHeight - B - 20 < u ? (l.addClass(w.domElement, C.CLASS_TOO_TALL), w.__ul.style.height = window.innerHeight -
					B - 20 + "px") : (l.removeClass(w.domElement, C.CLASS_TOO_TALL), w.__ul.style.height = "auto")
			}
			w.__resize_handle && r.defer(function() {
				w.__resize_handle.style.height = w.__ul.offsetHeight + "px"
			});
			w.__closeButton && (w.__closeButton.style.width = w.width + "px")
		},
		remember: function() {
			r.isUndefined(S) && (S = new n, S.domElement.innerHTML = e);
			if (this.parent) throw Error("You can only call remember on a top level GUI.");
			var w = this;
			r.each(Array.prototype.slice.call(arguments), function(B) {
				0 == w.__rememberedObjects.length && G(w); - 1 ==
					w.__rememberedObjects.indexOf(B) && w.__rememberedObjects.push(B)
			});
			this.autoPlace && Q(this, this.width)
		},
		getRoot: function() {
			for (var w = this; w.parent;) w = w.parent;
			return w
		},
		getSaveObject: function() {
			var w = this.load;
			w.closed = this.closed;
			0 < this.__rememberedObjects.length && (w.preset = this.preset, w.remembered || (w.remembered = {}), w.remembered[this.preset] = V(this));
			w.folders = {};
			r.each(this.__folders, function(B, u) {
				w.folders[u] = B.getSaveObject()
			});
			return w
		},
		save: function() {
			this.load.remembered || (this.load.remembered = {});
			this.load.remembered[this.preset] = V(this);
			K(this, !1)
		},
		saveAs: function(w) {
			this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = V(this, !0));
			this.load.remembered[w] = V(this);
			this.preset = w;
			T(this, w, !0)
		},
		revert: function(w) {
			r.each(this.__controllers, function(B) {
				this.getRoot().load.remembered ? y(w || this.getRoot(), B) : B.setValue(B.initialValue)
			}, this);
			r.each(this.__folders, function(B) {
				B.revert(B)
			});
			w || K(this.getRoot(), !1)
		},
		listen: function(w) {
			var B = 0 == this.__listening.length;
			this.__listening.push(w);
			B && H(this.__listening)
		}
	});
	return C
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
	".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
	dat.controllers.factory = function(p, e, m, q, b, d, a) {
		return function(h, k, c, f) {
			var g = h[k];
			if (a.isArray(c) || a.isObject(c)) return new p(h, k, c);
			if (a.isNumber(g)) return a.isNumber(c) && a.isNumber(f) ? new m(h, k, c, f) : new e(h, k, {
				min: c,
				max: f
			});
			if (a.isString(g)) return new q(h, k);
			if (a.isFunction(g)) return new b(h, k, "");
			if (a.isBoolean(g)) return new d(h, k)
		}
	}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function(p, e, m) {
		var q =
			function(b, d) {
				function a() {
					h.setValue(h.__input.value)
				}
				q.superclass.call(this, b, d);
				var h = this;
				this.__input = document.createElement("input");
				this.__input.setAttribute("type", "text");
				e.bind(this.__input, "keyup", a);
				e.bind(this.__input, "change", a);
				e.bind(this.__input, "blur", function() {
					h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
				});
				e.bind(this.__input, "keydown", function(k) {
					13 === k.keyCode && this.blur()
				});
				this.updateDisplay();
				this.domElement.appendChild(this.__input)
			};
		q.superclass = p;
		m.extend(q.prototype,
			p.prototype, {
				updateDisplay: function() {
					e.isActive(this.__input) || (this.__input.value = this.getValue());
					return q.superclass.prototype.updateDisplay.call(this)
				}
			});
		return q
	}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController,
	dat.controllers.ColorController = function(p, e, m, q, b) {
		function d(c, f, g, n) {
			c.style.background = "";
			b.each(k, function(l) {
				c.style.cssText += "background: " + l + "linear-gradient(" + f + ", " + g + " 0%, " + n + " 100%); "
			})
		}

		function a(c) {
			c.style.background = "";
			c.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
			c.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
			c.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
			c.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
			c.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
		}
		var h = function(c, f) {
			function g(G) {
				t(G);
				e.bind(window, "mousemove", t);
				e.bind(window,
					"mouseup", n)
			}

			function n() {
				e.unbind(window, "mousemove", t);
				e.unbind(window, "mouseup", n)
			}

			function l() {
				var G = q(this.value);
				!1 !== G ? (z.__color.__state = G, z.setValue(z.__color.toOriginal())) : this.value = z.__color.toString()
			}

			function r() {
				e.unbind(window, "mousemove", v);
				e.unbind(window, "mouseup", r)
			}

			function t(G) {
				G.preventDefault();
				var O = e.getWidth(z.__saturation_field),
					Q = e.getOffset(z.__saturation_field),
					V = (G.clientX - Q.left + document.body.scrollLeft) / O;
				G = 1 - (G.clientY - Q.top + document.body.scrollTop) / O;
				1 < G ? G = 1 : 0 >
					G && (G = 0);
				1 < V ? V = 1 : 0 > V && (V = 0);
				z.__color.v = G;
				z.__color.s = V;
				z.setValue(z.__color.toOriginal());
				return !1
			}

			function v(G) {
				G.preventDefault();
				var O = e.getHeight(z.__hue_field),
					Q = e.getOffset(z.__hue_field);
				G = 1 - (G.clientY - Q.top + document.body.scrollTop) / O;
				1 < G ? G = 1 : 0 > G && (G = 0);
				z.__color.h = 360 * G;
				z.setValue(z.__color.toOriginal());
				return !1
			}
			h.superclass.call(this, c, f);
			this.__color = new m(this.getValue());
			this.__temp = new m(0);
			var z = this;
			this.domElement = document.createElement("div");
			e.makeSelectable(this.domElement, !1);
			this.__selector = document.createElement("div");
			this.__selector.className = "selector";
			this.__saturation_field = document.createElement("div");
			this.__saturation_field.className = "saturation-field";
			this.__field_knob = document.createElement("div");
			this.__field_knob.className = "field-knob";
			this.__field_knob_border = "2px solid ";
			this.__hue_knob = document.createElement("div");
			this.__hue_knob.className = "hue-knob";
			this.__hue_field = document.createElement("div");
			this.__hue_field.className = "hue-field";
			this.__input = document.createElement("input");
			this.__input.type = "text";
			this.__input_textShadow = "0 1px 1px ";
			e.bind(this.__input, "keydown", function(G) {
				13 === G.keyCode && l.call(this)
			});
			e.bind(this.__input, "blur", l);
			e.bind(this.__selector, "mousedown", function(G) {
				e.addClass(this, "drag").bind(window, "mouseup", function(O) {
					e.removeClass(z.__selector, "drag")
				})
			});
			var y = document.createElement("div");
			b.extend(this.__selector.style, {
				width: "122px",
				height: "102px",
				padding: "3px",
				backgroundColor: "#222",
				boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
			});
			b.extend(this.__field_knob.style, {
				position: "absolute",
				width: "12px",
				height: "12px",
				border: this.__field_knob_border + (.5 > this.__color.v ? "#fff" : "#000"),
				boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
				borderRadius: "12px",
				zIndex: 1
			});
			b.extend(this.__hue_knob.style, {
				position: "absolute",
				width: "15px",
				height: "2px",
				borderRight: "4px solid #fff",
				zIndex: 1
			});
			b.extend(this.__saturation_field.style, {
				width: "100px",
				height: "100px",
				border: "1px solid #555",
				marginRight: "3px",
				display: "inline-block",
				cursor: "pointer"
			});
			b.extend(y.style, {
				width: "100%",
				height: "100%",
				background: "none"
			});
			d(y, "top", "rgba(0,0,0,0)", "#000");
			b.extend(this.__hue_field.style, {
				width: "15px",
				height: "100px",
				display: "inline-block",
				border: "1px solid #555",
				cursor: "ns-resize"
			});
			a(this.__hue_field);
			b.extend(this.__input.style, {
				outline: "none",
				textAlign: "center",
				color: "#fff",
				border: 0,
				fontWeight: "bold",
				textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
			});
			e.bind(this.__saturation_field, "mousedown", g);
			e.bind(this.__field_knob, "mousedown", g);
			e.bind(this.__hue_field, "mousedown", function(G) {
				v(G);
				e.bind(window,
					"mousemove", v);
				e.bind(window, "mouseup", r)
			});
			this.__saturation_field.appendChild(y);
			this.__selector.appendChild(this.__field_knob);
			this.__selector.appendChild(this.__saturation_field);
			this.__selector.appendChild(this.__hue_field);
			this.__hue_field.appendChild(this.__hue_knob);
			this.domElement.appendChild(this.__input);
			this.domElement.appendChild(this.__selector);
			this.updateDisplay()
		};
		h.superclass = p;
		b.extend(h.prototype, p.prototype, {
			updateDisplay: function() {
				var c = q(this.getValue());
				if (!1 !== c) {
					var f = !1;
					b.each(m.COMPONENTS, function(l) {
						if (!b.isUndefined(c[l]) && !b.isUndefined(this.__color.__state[l]) && c[l] !== this.__color.__state[l]) return f = !0, {}
					}, this);
					f && b.extend(this.__color.__state, c)
				}
				b.extend(this.__temp.__state, this.__color.__state);
				this.__temp.a = 1;
				var g = .5 > this.__color.v || .5 < this.__color.s ? 255 : 0,
					n = 255 - g;
				b.extend(this.__field_knob.style, {
					marginLeft: 100 * this.__color.s - 7 + "px",
					marginTop: 100 * (1 - this.__color.v) - 7 + "px",
					backgroundColor: this.__temp.toString(),
					border: this.__field_knob_border + "rgb(" + g +
						"," + g + "," + g + ")"
				});
				this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px";
				this.__temp.s = 1;
				this.__temp.v = 1;
				d(this.__saturation_field, "left", "#fff", this.__temp.toString());
				b.extend(this.__input.style, {
					backgroundColor: this.__input.value = this.__color.toString(),
					color: "rgb(" + g + "," + g + "," + g + ")",
					textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)"
				})
			}
		});
		var k = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
		return h
	}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function(p, e, m, q) {
		function b(c,
			f, g) {
			Object.defineProperty(c, f, {
				get: function() {
					if ("RGB" === this.__state.space) return this.__state[f];
					a(this, f, g);
					return this.__state[f]
				},
				set: function(n) {
					"RGB" !== this.__state.space && (a(this, f, g), this.__state.space = "RGB");
					this.__state[f] = n
				}
			})
		}

		function d(c, f) {
			Object.defineProperty(c, f, {
				get: function() {
					if ("HSV" === this.__state.space) return this.__state[f];
					h(this);
					return this.__state[f]
				},
				set: function(g) {
					"HSV" !== this.__state.space && (h(this), this.__state.space = "HSV");
					this.__state[f] = g
				}
			})
		}

		function a(c, f, g) {
			if ("HEX" ===
				c.__state.space) c.__state[f] = e.component_from_hex(c.__state.hex, g);
			else if ("HSV" === c.__state.space) q.extend(c.__state, e.hsv_to_rgb(c.__state.h, c.__state.s, c.__state.v));
			else throw "Corrupted color state";
		}

		function h(c) {
			var f = e.rgb_to_hsv(c.r, c.g, c.b);
			q.extend(c.__state, {
				s: f.s,
				v: f.v
			});
			q.isNaN(f.h) ? q.isUndefined(c.__state.h) && (c.__state.h = 0) : c.__state.h = f.h
		}
		var k = function() {
			this.__state = p.apply(this, arguments);
			if (!1 === this.__state) throw "Failed to interpret color arguments";
			this.__state.a = this.__state.a ||
				1
		};
		k.COMPONENTS = "r g b h s v hex a".split(" ");
		q.extend(k.prototype, {
			toString: function() {
				return m(this)
			},
			toOriginal: function() {
				return this.__state.conversion.write(this)
			}
		});
		b(k.prototype, "r", 2);
		b(k.prototype, "g", 1);
		b(k.prototype, "b", 0);
		d(k.prototype, "h");
		d(k.prototype, "s");
		d(k.prototype, "v");
		Object.defineProperty(k.prototype, "a", {
			get: function() {
				return this.__state.a
			},
			set: function(c) {
				this.__state.a = c
			}
		});
		Object.defineProperty(k.prototype, "hex", {
			get: function() {
				this.__state.hex = e.rgb_to_hex(this.r, this.g,
					this.b);
				return this.__state.hex
			},
			set: function(c) {
				this.__state.space = "HEX";
				this.__state.hex = c
			}
		});
		return k
	}(dat.color.interpret, dat.color.math = function() {
		var p;
		return {
			hsv_to_rgb: function(e, m, q) {
				var b = e / 60 - Math.floor(e / 60),
					d = q * (1 - m),
					a = q * (1 - b * m);
				m = q * (1 - (1 - b) * m);
				e = [
					[q, m, d],
					[a, q, d],
					[d, q, m],
					[d, a, q],
					[m, d, q],
					[q, d, a]
				][Math.floor(e / 60) % 6];
				return {
					r: 255 * e[0],
					g: 255 * e[1],
					b: 255 * e[2]
				}
			},
			rgb_to_hsv: function(e, m, q) {
				var b = Math.max(e, m, q),
					d = b - Math.min(e, m, q);
				if (0 == b) return {
					h: NaN,
					s: 0,
					v: 0
				};
				e = (e == b ? (m - q) / d : m == b ? 2 + (q - e) / d :
					4 + (e - m) / d) / 6;
				0 > e && (e += 1);
				return {
					h: 360 * e,
					s: d / b,
					v: b / 255
				}
			},
			rgb_to_hex: function(e, m, q) {
				e = this.hex_with_component(0, 2, e);
				e = this.hex_with_component(e, 1, m);
				return e = this.hex_with_component(e, 0, q)
			},
			component_from_hex: function(e, m) {
				return e >> 8 * m & 255
			},
			hex_with_component: function(e, m, q) {
				return q << (p = 8 * m) | e & ~(255 << p)
			}
		}
	}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function() {
		return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(p, e) {
				window.setTimeout(p, 1E3 / 60)
			}
	}(), dat.dom.CenteredDiv = function(p, e) {
		var m = function() {
			this.backgroundElement = document.createElement("div");
			e.extend(this.backgroundElement.style, {
				backgroundColor: "rgba(0,0,0,0.8)",
				top: 0,
				left: 0,
				display: "none",
				zIndex: "1000",
				opacity: 0,
				WebkitTransition: "opacity 0.2s linear"
			});
			p.makeFullscreen(this.backgroundElement);
			this.backgroundElement.style.position = "fixed";
			this.domElement = document.createElement("div");
			e.extend(this.domElement.style, {
				position: "fixed",
				display: "none",
				zIndex: "1001",
				opacity: 0,
				WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
			});
			document.body.appendChild(this.backgroundElement);
			document.body.appendChild(this.domElement);
			var q = this;
			p.bind(this.backgroundElement, "click", function() {
				q.hide()
			})
		};
		m.prototype.show = function() {
			var q = this;
			this.backgroundElement.style.display = "block";
			this.domElement.style.display = "block";
			this.domElement.style.opacity = 0;
			this.domElement.style.webkitTransform =
				"scale(1.1)";
			this.layout();
			e.defer(function() {
				q.backgroundElement.style.opacity = 1;
				q.domElement.style.opacity = 1;
				q.domElement.style.webkitTransform = "scale(1)"
			})
		};
		m.prototype.hide = function() {
			var q = this,
				b = function() {
					q.domElement.style.display = "none";
					q.backgroundElement.style.display = "none";
					p.unbind(q.domElement, "webkitTransitionEnd", b);
					p.unbind(q.domElement, "transitionend", b);
					p.unbind(q.domElement, "oTransitionEnd", b)
				};
			p.bind(this.domElement, "webkitTransitionEnd", b);
			p.bind(this.domElement, "transitionend",
				b);
			p.bind(this.domElement, "oTransitionEnd", b);
			this.backgroundElement.style.opacity = 0;
			this.domElement.style.opacity = 0;
			this.domElement.style.webkitTransform = "scale(1.1)"
		};
		m.prototype.layout = function() {
			this.domElement.style.left = window.innerWidth / 2 - p.getWidth(this.domElement) / 2 + "px";
			this.domElement.style.top = window.innerHeight / 2 - p.getHeight(this.domElement) / 2 + "px"
		};
		return m
	}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
Detector = {
	canvas: !!window.CanvasRenderingContext2D,
	webgl: function() {
		try {
			return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
		} catch (p) {
			return !1
		}
	}(),
	workers: !!window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,
	getWebGLErrorMessage: function() {
		var p = document.createElement("div");
		p.id = "webgl-error-message";
		p.style.fontFamily = "monospace";
		p.style.fontSize = "13px";
		p.style.fontWeight = "normal";
		p.style.textAlign = "center";
		p.style.background =
			"#fff";
		p.style.color = "#000";
		p.style.padding = "1.5em";
		p.style.width = "400px";
		p.style.margin = "5em auto 0";
		this.webgl || (p.innerHTML = window.WebGLRenderingContext ? 'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.' : 'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.');
		return p
	},
	addGetWebGLMessage: function(p) {
		p = p || {};
		var e = void 0 !== p.parent ? p.parent : document.body;
		p = void 0 !== p.id ? p.id : "oldie";
		var m = Detector.getWebGLErrorMessage();
		m.id = p;
		e.appendChild(m)
	}
};

function TimeSeries(p) {
	p = p || {};
	p.resetBoundsInterval = p.resetBoundsInterval || 3E3;
	p.resetBounds = void 0 === p.resetBounds ? !0 : p.resetBounds;
	this.options = p;
	this.data = [];
	this.label = p.label || "";
	this.maxDataLength = p.maxDataLength || 1E3;
	this.dataPool = [];
	this.minValue = this.maxValue = Number.NaN;
	p.resetBounds && (this.boundsTimer = setInterval(function(e) {
		return function() {
			e.resetBounds()
		}
	}(this), p.resetBoundsInterval))
}
TimeSeries.prototype.resetBounds = function() {
	this.minValue = this.maxValue = Number.NaN;
	for (var p = 0; p < this.data.length; p++) this.maxValue = isNaN(this.maxValue) ? this.data[p][1] : Math.max(this.maxValue, this.data[p][1]), this.minValue = isNaN(this.minValue) ? this.data[p][1] : Math.min(this.minValue, this.data[p][1])
};
TimeSeries.prototype.append = function(p, e) {
	this.lastTimeStamp = p;
	var m = this.dataPool.length ? this.dataPool.pop() : [p, e];
	m[0] = p;
	m[1] = e;
	this.data.push(m);
	this.maxValue = isNaN(this.maxValue) ? e : Math.max(this.maxValue, e);
	for (this.minValue = isNaN(this.minValue) ? e : Math.min(this.minValue, e); this.data.length > this.maxDataLength;) this.dataPool.push(this.data.shift())
};

function SmoothieChart(p) {
	p = p || {};
	p.grid = p.grid || {
		fillStyle: "#000000",
		strokeStyle: "#777777",
		lineWidth: 1,
		millisPerLine: 1E3,
		verticalSections: 2
	};
	p.millisPerPixel = p.millisPerPixel || 20;
	p.fps = p.fps || 50;
	p.maxValueScale = p.maxValueScale || 1;
	p.minValue = p.minValue;
	p.maxValue = p.maxValue;
	p.labels = p.labels || {
		fillStyle: "#ffffff"
	};
	p.interpolation = p.interpolation || "bezier";
	p.scaleSmoothing = p.scaleSmoothing || .125;
	p.maxDataSetLength = p.maxDataSetLength || 2;
	p.timestampFormatter = p.timestampFormatter || null;
	this.options = p;
	this.seriesSet = [];
	this.currentValueRange = 1;
	this.currentVisMinValue = 0
}
SmoothieChart.prototype.addTimeSeries = function(p, e) {
	this.seriesSet.push({
		timeSeries: p,
		options: e || {}
	})
};
SmoothieChart.prototype.removeTimeSeries = function(p) {
	this.seriesSet.splice(this.seriesSet.indexOf(p), 1)
};
SmoothieChart.prototype.streamTo = function(p, e) {
	var m = this;
	this.render_on_tick = function() {
		m.render(p, m.seriesSet[0].timeSeries.lastTimeStamp)
	};
	this.start()
};
SmoothieChart.prototype.start = function() {
	this.timer || (this.timer = setInterval(this.render_on_tick, 1E3 / this.options.fps))
};
SmoothieChart.prototype.stop = function() {
	this.timer && (clearInterval(this.timer), this.timer = void 0)
};
SmoothieChart.timeFormatter = function(p) {
	function e(m) {
		return (10 > m ? "0" : "") + m
	}
	return e(p.getHours()) + ":" + e(p.getMinutes()) + ":" + e(p.getSeconds())
};
SmoothieChart.prototype.render = function(p, e) {
	var m = p.getContext("2d"),
		q = this.options,
		b = p.clientWidth,
		d = p.clientHeight;
	m.save();
	e -= e % q.millisPerPixel;
	m.translate(0, 0);
	m.beginPath();
	m.rect(0, 0, b, d);
	m.clip();
	m.save();
	m.fillStyle = q.grid.fillStyle;
	m.clearRect(0, 0, b, d);
	m.fillRect(0, 0, b, d);
	m.restore();
	m.save();
	m.lineWidth = q.grid.lineWidth || 1;
	m.strokeStyle = q.grid.strokeStyle || "#ffffff";
	if (0 < q.grid.millisPerLine)
		for (var a = e - e % q.grid.millisPerLine; a >= e - b * q.millisPerPixel; a -= q.grid.millisPerLine) {
			m.beginPath();
			var h = Math.round(b - (e - a) / q.millisPerPixel);
			m.moveTo(h, 0);
			m.lineTo(h, d);
			m.stroke();
			if (q.timestampFormatter) {
				var k = q.timestampFormatter(new Date(a)),
					c = m.measureText(k).width / 2 + m.measureText(y).width + 4;
				h < b - c && (m.fillStyle = q.labels.fillStyle, m.fillText(k, h - m.measureText(k).width / 2, d - 2))
			}
			m.closePath()
		}
	for (y = 1; y < q.grid.verticalSections; y++) a = Math.round(y * d / q.grid.verticalSections), m.beginPath(), m.moveTo(0, a), m.lineTo(b, a), m.stroke(), m.closePath();
	m.beginPath();
	m.strokeRect(0, 0, b, d);
	m.closePath();
	m.restore();
	y = h = Number.NaN;
	for (k = 0; k < this.seriesSet.length; k++) {
		var f = this.seriesSet[k].timeSeries;
		isNaN(f.maxValue) || (h = isNaN(h) ? f.maxValue : Math.max(h, f.maxValue));
		isNaN(f.minValue) || (y = isNaN(y) ? f.minValue : Math.min(y, f.minValue))
	}
	if (!isNaN(h) || !isNaN(y)) {
		h = null != q.maxValue ? q.maxValue : h * q.maxValueScale;
		null != q.minValue && (y = q.minValue);
		this.currentValueRange += q.scaleSmoothing * (h - y - this.currentValueRange);
		this.currentVisMinValue += q.scaleSmoothing * (y - this.currentVisMinValue);
		c = this.currentValueRange;
		var g = this.currentVisMinValue;
		for (k = 0; k < this.seriesSet.length; k++) {
			m.save();
			f = this.seriesSet[k].timeSeries;
			f = f.data;
			for (var n = this.seriesSet[k].options; f.length >= q.maxDataSetLength && f[1][0] < e - b * q.millisPerPixel;) f.splice(0, 1);
			m.lineWidth = n.lineWidth || 1;
			m.fillStyle = n.fillStyle;
			m.strokeStyle = n.strokeStyle || "#ffffff";
			m.beginPath();
			var l = 0,
				r = 0,
				t = 0;
			for (a = 0; a < f.length; a++) {
				var v = Math.round(b - (e - f[a][0]) / q.millisPerPixel),
					z = f[a][1] - g;
				z = Math.max(Math.min(d - (c ? Math.round(z / c * d) : 0), d - 1), 1);
				if (0 == a) l = v, m.moveTo(v, z);
				else switch (q.interpolation) {
					case "line":
						m.lineTo(v,
							z);
						break;
					default:
						m.bezierCurveTo(Math.round((r + v) / 2), t, Math.round(r + v) / 2, z, v, z)
				}
				r = v;
				t = z
			}
			0 < f.length && n.fillStyle && (m.lineTo(b + n.lineWidth + 1, t), m.lineTo(b + n.lineWidth + 1, d + n.lineWidth + 1), m.lineTo(l, d + n.lineWidth), m.fill());
			m.stroke();
			m.closePath();
			m.restore()
		}
		if (!q.labels.disabled) {
			q.labelOffsetY || (q.labelOffsetY = 0);
			m.fillStyle = q.labels.fillStyle;
			a = parseFloat(h).toFixed(2);
			var y = parseFloat(y).toFixed(2);
			m.fillText(a, b - m.measureText(a).width - 2, 10);
			m.fillText(y, b - m.measureText(y).width - 2, d - 2);
			for (a = 0; a <
				this.seriesSet.length; a++) f = this.seriesSet[a].timeSeries, b = f.label, m.fillStyle = f.options.fillStyle || "rgb(255,255,255)", b && m.fillText(b, 2, 10 * (a + 1) + q.labelOffsetY)
		}
	}
	m.restore()
};
var Stats = function() {
	var p = 0,
		e = 0,
		m = Date.now(),
		q = m,
		b = m,
		d = 0,
		a = 1E3,
		h = 0,
		k = [
			[16, 16, 48],
			[0, 255, 255]
		],
		c = 0,
		f = 1E3,
		g = 0,
		n = [
			[16, 48, 16],
			[0, 255, 0]
		];
	var l = document.createElement("div");
	l.style.cursor = "pointer";
	l.style.width = "80px";
	l.style.opacity = "0.9";
	l.style.zIndex = "10001";
	l.addEventListener("mousedown", function(Q) {
		Q.preventDefault();
		p = (p + 1) % 2;
		0 == p ? (r.style.display = "block", y.style.display = "none") : (r.style.display = "none", y.style.display = "block")
	}, !1);
	var r = document.createElement("div");
	r.style.textAlign = "left";
	r.style.lineHeight = "1.2em";
	r.style.backgroundColor = "rgb(" + Math.floor(k[0][0] / 2) + "," + Math.floor(k[0][1] / 2) + "," + Math.floor(k[0][2] / 2) + ")";
	r.style.padding = "0 0 3px 3px";
	l.appendChild(r);
	var t = document.createElement("div");
	t.style.fontFamily = "Helvetica, Arial, sans-serif";
	t.style.fontSize = "9px";
	t.style.color = "rgb(" + k[1][0] + "," + k[1][1] + "," + k[1][2] + ")";
	t.style.fontWeight = "bold";
	t.innerHTML = "FPS";
	r.appendChild(t);
	var v = document.createElement("div");
	v.style.position = "relative";
	v.style.width = "74px";
	v.style.height =
		"30px";
	v.style.backgroundColor = "rgb(" + k[1][0] + "," + k[1][1] + "," + k[1][2] + ")";
	for (r.appendChild(v); 74 > v.children.length;) {
		var z = document.createElement("span");
		z.style.width = "1px";
		z.style.height = "30px";
		z.style.cssFloat = "left";
		z.style.backgroundColor = "rgb(" + k[0][0] + "," + k[0][1] + "," + k[0][2] + ")";
		v.appendChild(z)
	}
	var y = document.createElement("div");
	y.style.textAlign = "left";
	y.style.lineHeight = "1.2em";
	y.style.backgroundColor = "rgb(" + Math.floor(n[0][0] / 2) + "," + Math.floor(n[0][1] / 2) + "," + Math.floor(n[0][2] / 2) + ")";
	y.style.padding = "0 0 3px 3px";
	y.style.display = "none";
	l.appendChild(y);
	var G = document.createElement("div");
	G.style.fontFamily = "Helvetica, Arial, sans-serif";
	G.style.fontSize = "9px";
	G.style.color = "rgb(" + n[1][0] + "," + n[1][1] + "," + n[1][2] + ")";
	G.style.fontWeight = "bold";
	G.innerHTML = "MS";
	y.appendChild(G);
	var O = document.createElement("div");
	O.style.position = "relative";
	O.style.width = "74px";
	O.style.height = "30px";
	O.style.backgroundColor = "rgb(" + n[1][0] + "," + n[1][1] + "," + n[1][2] + ")";
	for (y.appendChild(O); 74 > O.children.length;) z =
		document.createElement("span"), z.style.width = "1px", z.style.height = 30 * Math.random() + "px", z.style.cssFloat = "left", z.style.backgroundColor = "rgb(" + n[0][0] + "," + n[0][1] + "," + n[0][2] + ")", O.appendChild(z);
	return {
		domElement: l,
		update: function() {
			m = Date.now();
			c = m - q;
			f = Math.min(f, c);
			g = Math.max(g, c);
			G.textContent = c + " MS (" + f + "-" + g + ")";
			var Q = Math.min(30, 30 - c / 200 * 30);
			O.appendChild(O.firstChild).style.height = Q + "px";
			q = m;
			e++;
			m > b + 1E3 && (d = Math.round(1E3 * e / (m - b)), a = Math.min(a, d), h = Math.max(h, d), t.textContent = d + " FPS (" +
				a + "-" + h + ")", Q = Math.min(30, 30 - d / 100 * 30), v.appendChild(v.firstChild).style.height = Q + "px", b = m, e = 0)
		}
	}
};
THREE.TrackballControls = function(p, e) {
	function m(H) {
		!1 !== a.enabled && (window.removeEventListener("keydown", m), f = c, c === h.NONE) && (H.keyCode !== a.keys[h.ROTATE] || a.noRotate ? H.keyCode !== a.keys[h.ZOOM] || a.noZoom ? H.keyCode !== a.keys[h.PAN] || a.noPan || (c = h.PAN) : c = h.ZOOM : c = h.ROTATE)
	}

	function q(H) {
		!1 !== a.enabled && (H.preventDefault(), H.stopPropagation(), c !== h.ROTATE || a.noRotate ? c !== h.ZOOM || a.noZoom ? c !== h.PAN || a.noPan || G.copy(T(H.pageX, H.pageY)) : t.copy(T(H.pageX, H.pageY)) : l.copy(K(H.pageX, H.pageY)))
	}

	function b(H) {
		!1 !==
			a.enabled && (H.preventDefault(), H.stopPropagation(), c = h.NONE, document.removeEventListener("mousemove", q), document.removeEventListener("mouseup", b), a.dispatchEvent(V))
	}

	function d(H) {
		if (!1 !== a.enabled) {
			H.preventDefault();
			H.stopPropagation();
			var I = 0;
			H.wheelDelta ? I = H.wheelDelta / 40 : H.detail && (I = -H.detail / 3);
			r.y += .01 * I;
			a.dispatchEvent(Q);
			a.dispatchEvent(V)
		}
	}
	var a = this,
		h = {
			NONE: -1,
			ROTATE: 0,
			ZOOM: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_ZOOM_PAN: 4
		};
	this.object = p;
	this.domElement = void 0 !== e ? e : document;
	this.enabled = !0;
	this.screen = {
		left: 0,
		top: 0,
		width: 0,
		height: 0
	};
	this.rotateSpeed = 1;
	this.zoomSpeed = 1.2;
	this.panSpeed = .3;
	this.staticMoving = this.noRoll = this.noPan = this.noZoom = this.noRotate = !1;
	this.dynamicDampingFactor = .2;
	this.minDistance = 0;
	this.maxDistance = Infinity;
	this.keys = [65, 83, 68];
	this.target = new THREE.Vector3;
	var k = new THREE.Vector3,
		c = h.NONE,
		f = h.NONE,
		g = new THREE.Vector3,
		n = new THREE.Vector3,
		l = new THREE.Vector3,
		r = new THREE.Vector2,
		t = new THREE.Vector2,
		v = 0,
		z = 0,
		y = new THREE.Vector2,
		G = new THREE.Vector2;
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();
	var O = {
			type: "change"
		},
		Q = {
			type: "start"
		},
		V = {
			type: "end"
		};
	this.handleResize = function() {
		if (this.domElement === document) this.screen.left = 0, this.screen.top = 0, this.screen.width = window.innerWidth, this.screen.height = window.innerHeight;
		else {
			var H = this.domElement.getBoundingClientRect(),
				I = this.domElement.ownerDocument.documentElement;
			this.screen.left = H.left + window.pageXOffset - I.clientLeft;
			this.screen.top = H.top + window.pageYOffset - I.clientTop;
			this.screen.width = H.width;
			this.screen.height = H.height
		}
	};
	this.handleEvent = function(H) {
		if ("function" == typeof this[H.type]) this[H.type](H)
	};
	var T = function() {
			var H = new THREE.Vector2;
			return function(I, S) {
				H.set((I - a.screen.left) / a.screen.width, (S - a.screen.top) / a.screen.height);
				return H
			}
		}(),
		K = function() {
			var H = new THREE.Vector3,
				I = new THREE.Vector3,
				S = new THREE.Vector3;
			return function(J, L) {
				S.set((J - .5 * a.screen.width - a.screen.left) / (.5 * a.screen.width), (.5 * a.screen.height + a.screen.top - L) / (.5 * a.screen.height),
					0);
				var A = S.length();
				a.noRoll ? S.z = A < Math.SQRT1_2 ? Math.sqrt(1 - A * A) : .5 / A : 1 < A ? S.normalize() : S.z = Math.sqrt(1 - A * A);
				g.copy(a.object.position).sub(a.target);
				H.copy(a.object.up).setLength(S.y);
				H.add(I.copy(a.object.up).cross(g).setLength(S.x));
				H.add(g.setLength(S.z));
				return H
			}
		}();
	this.rotateCamera = function() {
		var H = new THREE.Vector3,
			I = new THREE.Quaternion;
		return function() {
			var S = Math.acos(n.dot(l) / n.length() / l.length());
			S && (H.crossVectors(n, l).normalize(), S *= a.rotateSpeed, I.setFromAxisAngle(H, -S), g.applyQuaternion(I),
				a.object.up.applyQuaternion(I), l.applyQuaternion(I), a.staticMoving ? n.copy(l) : (I.setFromAxisAngle(H, S * (a.dynamicDampingFactor - 1)), n.applyQuaternion(I)))
		}
	}();
	this.zoomCamera = function() {
		if (c === h.TOUCH_ZOOM_PAN) {
			var H = v / z;
			v = z;
			g.multiplyScalar(H)
		} else H = 1 + (t.y - r.y) * a.zoomSpeed, 1 !== H && 0 < H && (g.multiplyScalar(H), a.staticMoving ? r.copy(t) : r.y += (t.y - r.y) * this.dynamicDampingFactor)
	};
	this.panCamera = function() {
		var H = new THREE.Vector2,
			I = new THREE.Vector3,
			S = new THREE.Vector3;
		return function() {
			H.copy(G).sub(y);
			H.lengthSq() &&
				(H.multiplyScalar(g.length() * a.panSpeed), S.copy(g).cross(a.object.up).setLength(H.x), S.add(I.copy(a.object.up).setLength(H.y)), a.object.position.add(S), a.target.add(S), a.staticMoving ? y.copy(G) : y.add(H.subVectors(G, y).multiplyScalar(a.dynamicDampingFactor)))
		}
	}();
	this.checkDistances = function() {
		a.noZoom && a.noPan || (g.lengthSq() > a.maxDistance * a.maxDistance && a.object.position.addVectors(a.target, g.setLength(a.maxDistance)), g.lengthSq() < a.minDistance * a.minDistance && a.object.position.addVectors(a.target,
			g.setLength(a.minDistance)))
	};
	this.update = function() {
		g.subVectors(a.object.position, a.target);
		a.noRotate || a.rotateCamera();
		a.noZoom || a.zoomCamera();
		a.noPan || a.panCamera();
		a.object.position.addVectors(a.target, g);
		a.checkDistances();
		a.object.lookAt(a.target);
		1E-6 < k.distanceToSquared(a.object.position) && (a.dispatchEvent(O), k.copy(a.object.position))
	};
	this.reset = function() {
		f = c = h.NONE;
		a.target.copy(a.target0);
		a.object.position.copy(a.position0);
		a.object.up.copy(a.up0);
		g.subVectors(a.object.position, a.target);
		a.object.lookAt(a.target);
		a.dispatchEvent(O);
		k.copy(a.object.position)
	};
	this.domElement.addEventListener("contextmenu", function(H) {
		H.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousedown", function(H) {
		!1 !== a.enabled && (H.preventDefault(), H.stopPropagation(), c === h.NONE && (c = H.button), c !== h.ROTATE || a.noRotate ? c !== h.ZOOM || a.noZoom ? c !== h.PAN || a.noPan || (y.copy(T(H.pageX, H.pageY)), G.copy(y)) : (r.copy(T(H.pageX, H.pageY)), t.copy(r)) : (n.copy(K(H.pageX, H.pageY)), l.copy(n)), document.addEventListener("mousemove",
			q, !1), document.addEventListener("mouseup", b, !1), a.dispatchEvent(Q))
	}, !1);
	this.domElement.addEventListener("mousewheel", d, !1);
	this.domElement.addEventListener("DOMMouseScroll", d, !1);
	this.domElement.addEventListener("touchstart", function(H) {
		if (!1 !== a.enabled) {
			switch (H.touches.length) {
				case 1:
					c = h.TOUCH_ROTATE;
					n.copy(K(H.touches[0].pageX, H.touches[0].pageY));
					l.copy(n);
					break;
				case 2:
					c = h.TOUCH_ZOOM_PAN;
					var I = H.touches[0].pageX - H.touches[1].pageX,
						S = H.touches[0].pageY - H.touches[1].pageY;
					z = v = Math.sqrt(I * I + S *
						S);
					y.copy(T((H.touches[0].pageX + H.touches[1].pageX) / 2, (H.touches[0].pageY + H.touches[1].pageY) / 2));
					G.copy(y);
					break;
				default:
					c = h.NONE
			}
			a.dispatchEvent(Q)
		}
	}, !1);
	this.domElement.addEventListener("touchend", function(H) {
		if (!1 !== a.enabled) {
			switch (H.touches.length) {
				case 1:
					l.copy(K(H.touches[0].pageX, H.touches[0].pageY));
					n.copy(l);
					break;
				case 2:
					v = z = 0, G.copy(T((H.touches[0].pageX + H.touches[1].pageX) / 2, (H.touches[0].pageY + H.touches[1].pageY) / 2)), y.copy(G)
			}
			c = h.NONE;
			a.dispatchEvent(V)
		}
	}, !1);
	this.domElement.addEventListener("touchmove",
		function(H) {
			if (!1 !== a.enabled) switch (H.preventDefault(), H.stopPropagation(), H.touches.length) {
				case 1:
					l.copy(K(H.touches[0].pageX, H.touches[0].pageY));
					break;
				case 2:
					var I = H.touches[0].pageX - H.touches[1].pageX,
						S = H.touches[0].pageY - H.touches[1].pageY;
					z = Math.sqrt(I * I + S * S);
					G.copy(T((H.touches[0].pageX + H.touches[1].pageX) / 2, (H.touches[0].pageY + H.touches[1].pageY) / 2));
					break;
				default:
					c = h.NONE
			}
		}, !1);
	window.addEventListener("keydown", m, !1);
	window.addEventListener("keyup", function(H) {
		!1 !== a.enabled && (c = f, window.addEventListener("keydown",
			m, !1))
	}, !1);
	this.handleResize();
	this.update()
};
THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);

function COpponent(p, e, m, q) {
	var b;
	this._init = function(d, a, h, k) {
		b = [];
		for (var c = 0; c < NUM_SPRITE_BATTER_BOWLER_MODE; c++) b.push(createBitmap(s_oSpriteLibrary.getSprite("batter_" + h + "_" + c))), b[c].x = d, b[c].y = a, b[c].rotation = 0, b[c].visible = !1, k.addChild(b[c]);
		b[0].visible = !0
	};
	this.viewBowler = function(d) {
		b[d].visible = !0
	};
	this.hideBowler = function(d) {
		b[d].visible = !1
	};
	this.onFinishAnimation = function() {
		var d = this;
		_oOpponent.on("animationend", function() {
			s_oGame.addImpulseToBall();
			playSound("kick", .3, !1);
			_oOpponent.removeAllEventListeners();
			d.fadeAnimation(0)
		})
	};
	this._init(p, e, m, q);
	return this
}

function CHelpPanel(p, e, m, q) {
	var b, d, a, h, k, c, f, g, n, l = !1,
		r;
	this._init = function(t, v, z, y) {
		k = new createjs.Container;
		k.x = t;
		k.y = v;
		s_oStage.addChild(k);
		h = new createjs.Shape;
		h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.alpha = .5;
		k.addChild(h);
		a = createBitmap(y);
		a.x = CANVAS_WIDTH_HALF;
		a.y = CANVAS_HEIGHT_HALF;
		a.regX = .5 * y.width;
		a.regY = .5 * y.height;
		k.addChild(a);
		b = new createjs.Text(TEXT_HOW_TO_PLAY, "50px " + FONT2, "#ffffff");
		b.textAlign = "center";
		b.lineWidth = 500;
		b.x = .5 * CANVAS_WIDTH;
		b.y = .5 *
			CANVAS_HEIGHT - 240;
		k.addChild(b);
		n = new createjs.Container;
		n.y = -70;
		t = s_oSpriteLibrary.getSprite("glove_" + z);
		f = new CGlove(-50, LEFT_GLOVE, t, null, n);
		g = new CGlove(50, RIGHT_GLOVE, t, null, n);
		f.setScale(.7);
		g.setScale(.7);
		g.flip();
		s_bMobile ? (t = TEXT_HELP1_MOBILE_BOWLER, v = "help_touch") : (t = TEXT_HELP1_PC_BOWLER, v = "help_mouse");
		v = s_oSpriteLibrary.getSprite(v);
		r = createBitmap(v);
		r.x = CANVAS_WIDTH_HALF + 6;
		r.y = 390;
		r.regX = .5 * v.width;
		r.regY = .5 * v.height;
		n.addChild(r);
		k.addChild(n);
		createjs.Ticker.paused = !1;
		this.animGloves();
		d = new createjs.Text(t, "28px " + FONT2, "#ffffff");
		d.textAlign = "center";
		d.lineWidth = 450;
		d.x = .5 * CANVAS_WIDTH;
		d.y = .5 * CANVAS_HEIGHT + 20;
		k.addChild(d);
		t = s_oSpriteLibrary.getSprite("but_continue");
		c = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT_HALF + 180, t, k);
		c.addEventListener(ON_MOUSE_UP, this._onExitHelp, this);
		c.pulseAnimation();
		var G = this;
		k.on("pressup", function() {
			G._onExitHelp()
		})
	};
	this.animGloves = function() {
		var t = this;
		createjs.Tween.get(n).to({
			x: 100
		}, 1E3, createjs.Ease.cubicInOut).call(function() {
			createjs.Tween.get(n).to({
					x: -100
				},
				1E3, createjs.Ease.cubicInOut).call(function() {
				t.animGloves()
			})
		})
	};
	this.unload = function() {
		createjs.Tween.removeTweens(n);
		createjs.Tween.get(k).to({
			alpha: 0
		}, 500, createjs.Ease.cubicIn).call(function() {
			s_oStage.removeChild(k)
		});
		var t = this;
		k.off("pressup", function() {
			t._onExitHelp()
		})
	};
	this._onExitHelp = function() {
		l || (l = !0, this.unload(), s_oGame._onExitHelpPanel())
	};
	this._init(p, e, m, q)
}

function CLoadingScreen(p, e) {
	var m = null,
		q;
	this._init = function() {
		m = new createjs.Shape;
		m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		m.on("click", function() {});
		p.addChild(m);
		var b = e.createText(TEXT_LOADING, 36).container;
		b.x = CANVAS_WIDTH_HALF;
		b.y = CANVAS_HEIGHT_HALF - 30;
		p.addChild(b);
		b = s_oSpriteLibrary.getSprite("preloader_anim");
		q = createBitmap(b);
		q.x = CANVAS_WIDTH_HALF;
		q.y = CANVAS_HEIGHT_HALF + 30;
		q.regX = .5 * b.width;
		q.regY = .5 * b.height;
		p.addChild(q);
		s_oStage.addChild(p);
		this.animLoad()
	};
	this.animLoad = function() {
		var b = this;
		createjs.Tween.get(q).to({
			rotation: q.rotation + 360
		}, 1E3).call(function() {
			b.animLoad()
		})
	};
	this.unload = function() {
		m.removeAllEventListeners();
		s_oStage.removeChild(p)
	};
	this._init();
	return this
}

function CBallStatic(p) {
	var e;
	this._init = function() {
		var m = s_oSpriteLibrary.getSprite("ball");
		e = createBitmap(m);
		e.regX = .5 * m.width;
		e.regY = .5 * m.height;
		p.addChild(e)
	};
	this.setPosition = function(m, q) {
		e.x = m;
		e.y = q
	};
	this._init();
	return this
}

function extractHostname(p) {
	p = -1 < p.indexOf("://") ? p.split("/")[2] : p.split("/")[0];
	p = p.split(":")[0];
	return p = p.split("?")[0]
}

function extractRootDomain(p) {
	p = extractHostname(p);
	var e = p.split("."),
		m = e.length;
	2 < m && (p = e[m - 2] + "." + e[m - 1]);
	return p
}
var getClosestTop = function() {
		var p = window,
			e = !1;
		try {
			for (; p.parent.document !== p.document;)
				if (p.parent.document) p = p.parent;
				else {
					e = !0;
					break
				}
		} catch (m) {
			e = !0
		}
		return {
			topFrame: p,
			err: e
		}
	},
	getBestPageUrl = function(p) {
		var e = p.topFrame,
			m = "";
		if (p.err) try {
			try {
				m = window.top.location.href
			} catch (b) {
				var q = window.location.ancestorOrigins;
				m = q[q.length - 1]
			}
		} catch (b) {
			m = e.document.referrer
		} else m = e.location.href;
		return m
	},
	TOPFRAMEOBJ = getClosestTop(),
	PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
	for (var p = extractRootDomain(PAGE_URL), e = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], m = 0; m < e.length; m++)
		if (e[m] === p) return !0;
	return !0
};
