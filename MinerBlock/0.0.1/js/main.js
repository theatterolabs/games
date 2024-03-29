/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var b = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        a = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var a, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, e = c.length, g = {}; d < e; d++)
                if ((a = c[d]) && a[1] in b) {
                    for (d = 0; d < a.length; d++) g[c[0][d]] =
                        a[d];
                    return g
                } return !1
        }(),
        e = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        g = {
            request: function(c) {
                var l = d.requestFullscreen;
                c = c || b.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[l]();
                else c[l](a && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                b[d.exitFullscreen]()
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
            on: function(a, c) {
                var d = e[a];
                d && b.addEventListener(d, c, !1)
            },
            off: function(a,
                c) {
                var d = e[a];
                d && b.removeEventListener(d, c, !1)
            },
            raw: d
        };
    d ? (Object.defineProperties(g, {
        isFullscreen: {
            get: function() {
                return !!b[d.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return b[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!b[d.fullscreenEnabled]
            }
        }
    }), c ? module.exports = g : window.screenfull = g) : c ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function b(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function c(a, b) {
        var c = -1,
            e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= v)
            for (; ++c < e;) b(a[c], c, a);
        else d(a, b)
    }

    function a(a) {
        a = String(a).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(a) ? a : b(a)
    }

    function d(a, b) {
        for (var c in a) F.call(a, c) && b(a[c], c, a)
    }

    function e(a) {
        return null == a ? b(a) : B.call(a).slice(8, -1)
    }

    function g(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[b] : !0)
    }

    function l(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function p(a, b) {
        var d = null;
        c(a, function(c, e) {
            d = b(d, c, e, a)
        });
        return d
    }

    function k(b) {
        function c(c) {
            return p(c, function(c, d) {
                var e = d.pattern || l(d);
                !c && (c = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(b) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(b) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(b)) && ((c = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), d = d.label || d, c = a(c[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function v(a) {
            return p(a, function(a, c) {
                return a || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(b) || 0)[1] || null
            })
        }
        var f = n,
            m = b && "object" == typeof b && "String" != e(b);
        m && (f = b, b = null);
        var q = f.navigator || {},
            r = q.userAgent || "";
        b || (b = r);
        var J = m ? !!q.likeChrome : /\bChrome\b/.test(b) && !/internal|\n/i.test(B.toString()),
            F = m ? "Object" : "ScriptBridgingProxyObject",
            x = m ? "Object" : "Environment",
            z = m && f.java ? "JavaPackage" : e(f.java),
            K = m ? "Object" : "RuntimeObject";
        x = (z = /\bJava/.test(z) && f.java) && e(f.environment) == x;
        var W = z ? "a" : "\u03b1",
            I = z ? "b" : "\u03b2",
            T = f.document || {},
            N = f.operamini || f.opera,
            Q = A.test(Q = m && N ? N["[[Class]]"] : e(N)) ? Q : N = null,
            h, R = b;
        m = [];
        var S = null,
            O = b == r;
        r = O && N && "function" == typeof N.version && N.version();
        var D = function(a) {
                return p(a, function(a, c) {
                    return a || RegExp("\\b" + (c.pattern || l(c)) + "\\b", "i").exec(b) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            t = function(a) {
                return p(a, function(a, c) {
                    return a || RegExp("\\b" + (c.pattern || l(c)) + "\\b", "i").exec(b) && (c.label || c)
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
            E = c([{
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
            L = function(a) {
                return p(a, function(a, c, d) {
                    return a || (c[E] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(E)] || RegExp("\\b" + l(d) + "(?:\\b|\\w*\\d)", "i").exec(b)) && d
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
            u = function(c) {
                return p(c, function(c, d) {
                    var e = d.pattern || l(d);
                    if (!c && (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(b))) {
                        var f = c,
                            h = d.label || d,
                            g = {
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
                        e && h && /^Win/i.test(f) && !/^Windows Phone /i.test(f) && (g = g[/[\d.]+$/.exec(f)]) && (f = "Windows " + g);
                        f = String(f);
                        e && h && (f = f.replace(RegExp(e, "i"), h));
                        c = f = a(f.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        D && (D = [D]);
        L && !E && (E = c([L]));
        if (h = /\bGoogle TV\b/.exec(E)) E = h[0];
        /\bSimulator\b/i.test(b) && (E = (E ? E + " " : "") + "Simulator");
        "Opera Mini" == t && /\bOPiOS\b/.test(b) && m.push("running in Turbo/Uncompressed mode");
        "IE" == t && /\blike iPhone OS\b/.test(b) ? (h = k(b.replace(/like iPhone OS/, "")), L = h.manufacturer, E = h.product) : /^iP/.test(E) ? (t || (t = "Safari"), u = "iOS" + ((h = / OS ([\d_]+)/i.exec(b)) ? " " + h[1].replace(/_/g, ".") : "")) : "Konqueror" != t || /buntu/i.test(u) ? L && "Google" != L && (/Chrome/.test(t) &&
            !/\bMobile Safari\b/i.test(b) || /\bVita\b/.test(E)) || /\bAndroid\b/.test(u) && /^Chrome/.test(t) && /\bVersion\//i.test(b) ? (t = "Android Browser", u = /\bAndroid\b/.test(u) ? u : "Android") : "Silk" == t ? (/\bMobi/i.test(b) || (u = "Android", m.unshift("desktop mode")), /Accelerated *= *true/i.test(b) && m.unshift("accelerated")) : "PaleMoon" == t && (h = /\bFirefox\/([\d.]+)\b/.exec(b)) ? m.push("identifying as Firefox " + h[1]) : "Firefox" == t && (h = /\b(Mobile|Tablet|TV)\b/i.exec(b)) ? (u || (u = "Firefox OS"), E || (E = h[1])) : !t || (h = !/\bMinefield\b/i.test(b) &&
            /\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !E && /[\/,]|^[^(]+?\)/.test(b.slice(b.indexOf(h + "/") + 8)) && (t = null), (h = E || L || u) && (E || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(u)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(u) ? u : h) + " Browser")) : "Electron" == t && (h = (/\bChrome\/([\d.]+)\b/.exec(b) || 0)[1]) && m.push("Chromium " + h) : u = "Kubuntu";
        r || (r = v(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", l(t), "(?:Firefox|Minefield|NetFront)"]));
        if (h = "iCab" == D && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(b) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(b) && !/^(?:Trident|EdgeHTML)$/.test(D) && "WebKit" || !D && /\bMSIE\b/i.test(b) && ("Mac OS" == u ? "Tasman" : "Trident") || "WebKit" == D && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront") D = [h];
        "IE" == t && (h = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(b) || 0)[1]) ? (t += " Mobile", u = "Windows Phone " + (/\+$/.test(h) ? h : h + ".x"), m.unshift("desktop mode")) : /\bWPDesktop\b/i.test(b) ? (t = "IE Mobile", u = "Windows Phone 8.x",
            m.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(b) || 0)[1])) : "IE" != t && "Trident" == D && (h = /\brv:([\d.]+)/.exec(b)) && (t && m.push("identifying as " + t + (r ? " " + r : "")), t = "IE", r = h[1]);
        if (O) {
            if (g(f, "global"))
                if (z && (h = z.lang.System, R = h.getProperty("os.arch"), u = u || h.getProperty("os.name") + " " + h.getProperty("os.version")), x) {
                    try {
                        r = f.require("ringo/engine").version.join("."), t = "RingoJS"
                    } catch (V) {
                        (h = f.system) && h.global.system == f.system && (t = "Narwhal", u || (u = h[0].os || null))
                    }
                    t || (t = "Rhino")
                } else "object" == typeof f.process &&
                    !f.process.browser && (h = f.process) && ("object" == typeof h.versions && ("string" == typeof h.versions.electron ? (m.push("Node " + h.versions.node), t = "Electron", r = h.versions.electron) : "string" == typeof h.versions.nw && (m.push("Chromium " + r, "Node " + h.versions.node), t = "NW.js", r = h.versions.nw)), t || (t = "Node.js", R = h.arch, u = h.platform, r = (r = /[\d.]+/.exec(h.version)) ? r[0] : null));
            else e(h = f.runtime) == F ? (t = "Adobe AIR", u = h.flash.system.Capabilities.os) : e(h = f.phantom) == K ? (t = "PhantomJS", r = (h = h.version || null) && h.major + "." + h.minor +
                "." + h.patch) : "number" == typeof T.documentMode && (h = /\bTrident\/(\d+)/i.exec(b)) ? (r = [r, T.documentMode], (h = +h[1] + 4) != r[1] && (m.push("IE " + r[1] + " mode"), D && (D[1] = ""), r[1] = h), r = "IE" == t ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof T.documentMode && /^(?:Chrome|Firefox)\b/.test(t) && (m.push("masking as " + t + " " + r), t = "IE", r = "11.0", D = ["Trident"], u = "Windows");
            u = u && a(u)
        }
        r && (h = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(b + ";" + (O && q.appMinorVersion)) || /\bMinefield\b/i.test(b) &&
            "a") && (S = /b/i.test(h) ? "beta" : "alpha", r = r.replace(RegExp(h + "\\+?$"), "") + ("beta" == S ? I : W) + (/\d+\+?/.exec(h) || ""));
        if ("Fennec" == t || "Firefox" == t && /\b(?:Android|Firefox OS)\b/.test(u)) t = "Firefox Mobile";
        else if ("Maxthon" == t && r) r = r.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(E)) "Xbox 360" == E && (u = null), "Xbox 360" == E && /\bIEMobile\b/.test(b) && m.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(t) && (!t || E || /Browser|Mobi/.test(t)) || "Windows CE" != u && !/Mobi/i.test(b))
            if ("IE" == t && O) try {
                null === f.external &&
                    m.unshift("platform preview")
            } catch (V) {
                m.unshift("embedded")
            } else(/\bBlackBerry\b/.test(E) || /\bBB10\b/.test(b)) && (h = (RegExp(E.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(b) || 0)[1] || r) ? (h = [h, /BB10/.test(b)], u = (h[1] ? (E = null, L = "BlackBerry") : "Device Software") + " " + h[0], r = null) : this != d && "Wii" != E && (O && N || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(b) || "Firefox" == t && /\bOS X (?:\d+\.){2,}/.test(u) || "IE" == t && (u && !/^Win/.test(u) && 5.5 < r || /\bWindows XP\b/.test(u) && 8 < r || 8 == r && !/\bTrident\b/.test(b))) && !A.test(h =
                k.call(d, b.replace(A, "") + ";")) && h.name && (h = "ing as " + h.name + ((h = h.version) ? " " + h : ""), A.test(t) ? (/\bIE\b/.test(h) && "Mac OS" == u && (u = null), h = "identify" + h) : (h = "mask" + h, t = Q ? a(Q.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(h) && (u = null), O || (r = null)), D = ["Presto"], m.push(h));
            else t += " Mobile";
        if (h = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(b) || 0)[1]) {
            h = [parseFloat(h.replace(/\.(\d)$/, ".0$1")), h];
            if ("Safari" == t && "+" == h[1].slice(-1)) t = "WebKit Nightly", S = "alpha", r = h[1].slice(0, -1);
            else if (r == h[1] || r == (h[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(b) || 0)[1])) r = null;
            h[1] = (/\bChrome\/([\d.]+)/i.exec(b) || 0)[1];
            537.36 == h[0] && 537.36 == h[2] && 28 <= parseFloat(h[1]) && "WebKit" == D && (D = ["Blink"]);
            O && (J || h[1]) ? (D && (D[1] = "like Chrome"), h = h[1] || (h = h[0], 530 > h ? 1 : 532 > h ? 2 : 532.05 > h ? 3 : 533 > h ? 4 : 534.03 > h ? 5 : 534.07 > h ? 6 : 534.1 > h ? 7 : 534.13 > h ? 8 : 534.16 > h ? 9 : 534.24 > h ? 10 : 534.3 > h ? 11 : 535.01 > h ? 12 : 535.02 > h ? "13+" : 535.07 > h ? 15 : 535.11 > h ? 16 : 535.19 > h ? 17 : 536.05 > h ? 18 : 536.1 > h ? 19 : 537.01 > h ? 20 : 537.11 > h ? "21+" : 537.13 > h ? 23 : 537.18 > h ? 24 : 537.24 > h ? 25 : 537.36 > h ? 26 : "Blink" !=
                D ? "27" : "28")) : (D && (D[1] = "like Safari"), h = (h = h[0], 400 > h ? 1 : 500 > h ? 2 : 526 > h ? 3 : 533 > h ? 4 : 534 > h ? "4+" : 535 > h ? 5 : 537 > h ? 6 : 538 > h ? 7 : 601 > h ? 8 : "8"));
            D && (D[1] += " " + (h += "number" == typeof h ? ".x" : /[.+]/.test(h) ? "" : "+"));
            "Safari" == t && (!r || 45 < parseInt(r)) && (r = h)
        }
        "Opera" == t && (h = /\bzbov|zvav$/.exec(u)) ? (t += " ", m.unshift("desktop mode"), "zvav" == h ? (t += "Mini", r = null) : t += "Mobile", u = u.replace(RegExp(" *" + h + "$"), "")) : "Safari" == t && /\bChrome\b/.exec(D && D[1]) && (m.unshift("desktop mode"), t = "Chrome Mobile", r = null, /\bOS X\b/.test(u) ? (L =
            "Apple", u = "iOS 4.3+") : u = null);
        r && 0 == r.indexOf(h = /[\d.]+$/.exec(u)) && -1 < b.indexOf("/" + h + "-") && (u = String(u.replace(h, "")).replace(/^ +| +$/g, ""));
        D && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || "Safari" != t && /^iOS/.test(u) && /\bSafari\b/.test(D[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(t) && D[1]) && (h = D[D.length - 1]) && m.push(h);
        m.length && (m = ["(" + m.join("; ") + ")"]);
        L && E && 0 > E.indexOf(L) && m.push("on " + L);
        E && m.push((/^on /.test(m[m.length -
            1]) ? "" : "on ") + E);
        if (u) {
            var U = (h = / ([\d.+]+)$/.exec(u)) && "/" == u.charAt(u.length - h[0].length - 1);
            u = {
                architecture: 32,
                family: h && !U ? u.replace(h[0], "") : u,
                version: h ? h[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !U ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(h = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R)) && !/\bi686\b/i.test(R) ? (u && (u.architecture = 64, u.family = u.family.replace(RegExp(" *" + h), "")), t && (/\bWOW64\b/i.test(b) || O && /\w(?:86|32)$/.test(q.cpuClass || q.platform) && !/\bWin64; x64\b/i.test(b)) &&
            m.unshift("32-bit")) : u && /^OS X/.test(u.family) && "Chrome" == t && 39 <= parseFloat(r) && (u.architecture = 64);
        b || (b = null);
        f = {};
        f.description = b;
        f.layout = D && D[0];
        f.manufacturer = L;
        f.name = t;
        f.prerelease = S;
        f.product = E;
        f.ua = b;
        f.version = t && r;
        f.os = u || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        f.parse = k;
        f.toString = function() {
            return this.description || ""
        };
        f.version && m.unshift(r);
        f.name && m.unshift(t);
        u && t && (u != String(u).split(" ")[0] || u != t.split(" ")[0] && !E) && m.push(E ? "(" + u + ")" : "on " +
            u);
        m.length && (f.description = m.join(" "));
        return f
    }
    var f = {
            "function": !0,
            object: !0
        },
        n = f[typeof window] && window || this,
        q = f[typeof exports] && exports;
    f = f[typeof module] && module && !module.nodeType && module;
    var m = q && f && "object" == typeof global && global;
    !m || m.global !== m && m.window !== m && m.self !== m || (n = m);
    var v = Math.pow(2, 53) - 1,
        A = /\bOpera/;
    m = Object.prototype;
    var F = m.hasOwnProperty,
        B = m.toString,
        I = k();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (n.platform = I, define(function() {
            return I
        })) : q &&
        f ? d(I, function(a, b) {
            q[b] = a
        }) : n.platform = I
}).call(this);

function buildIOSMeta() {
    for (var b = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], c = 0; c < b.length; c++) {
        var a = document.createElement("meta");
        a.name = b[c].name;
        a.content = b[c].content;
        var d = window.document.head.querySelector('meta[name="' + a.name + '"]');
        d && d.parentNode.removeChild(d);
        window.document.head.appendChild(a)
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
    } catch (b) {
        return !0
    }
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(b) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(b.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);

function trace(b) {
    console.log(b)
}
$(window).resize(function() {
    sizeHandler()
});

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var b = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); b.length;)
        if (navigator.platform === b.pop()) return !0;
    return s_bIsIphone = !1
}

function getParamValue(b) {
    for (var c = window.location.search.substring(1).split("&"), a = 0; a < c.length; a++) {
        var d = c[a].split("=");
        if (d[0] == b) return d[1]
    }
}

function getSize(b) {
    var c = b.toLowerCase(),
        a = window.document,
        d = a.documentElement;
    if (void 0 === window["inner" + b]) b = d["client" + b];
    else if (window["inner" + b] != d["client" + b]) {
        var e = a.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var g = a.createElement("div");
        g.id = "vpw-test-d";
        g.style.cssText = "position:absolute;top:-1000px";
        g.innerHTML = "<style>@media(" + c + ":" + d["client" + b] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        e.appendChild(g);
        d.insertBefore(e, a.head);
        b = 7 == g["offset" + b] ? d["client" + b] : window["inner" + b];
        d.removeChild(e)
    } else b = window["inner" + b];
    return b
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
    var b = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < b ? b : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var b = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, b);
        var a = Math.min(b / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            d = CANVAS_WIDTH * a;
        a *= CANVAS_HEIGHT;
        if (a < b) {
            var e = b - a;
            a += e;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * e
        } else d < c && (e = c - d, d += e, a += CANVAS_HEIGHT / CANVAS_WIDTH * e);
        e = b / 2 - a / 2;
        var g = c / 2 - d / 2,
            l = CANVAS_WIDTH / d;
        if (g * l < -EDGEBOARD_X || e * l < -EDGEBOARD_Y) a = Math.min(b / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * a, a *= CANVAS_HEIGHT, e = (b - a) / 2, g = (c - d) / 2, l = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * g * l;
        s_iOffsetY = -1 * e * l;
        0 <= e && (s_iOffsetY = 0);
        0 <= g && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height =
            2 * a, canvas.style.width = d + "px", canvas.style.height = a + "px", s_iScaleFactor = 2 * Math.min(d / CANVAS_WIDTH, a / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", a + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = a, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, a / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > e ? $("#canvas").css("top", e + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", g + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(b, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (b > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(b, c, a) {
    var d = new createjs.Bitmap(b),
        e = new createjs.Shape;
    c && a ? e.graphics.beginFill("#fff").drawRect(0, 0, c, a) : e.graphics.beginFill("#ff0").drawRect(0, 0, b.width, b.height);
    d.hitArea = e;
    return d
}

function createSprite(b, c, a, d, e, g) {
    b = null !== c ? new createjs.Sprite(b, c) : new createjs.Sprite(b);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-a, -d, e, g);
    b.hitArea = c;
    return b
}

function randomFloatBetween(b, c, a) {
    "undefined" === typeof a && (a = 2);
    return parseFloat(Math.min(b + Math.random() * (c - b), c).toFixed(a))
}

function rotateVector2D(b, c) {
    var a = c.getX() * Math.cos(b) + c.getY() * Math.sin(b),
        d = c.getX() * -Math.sin(b) + c.getY() * Math.cos(b);
    c.set(a, d)
}

function tweenVectorsOnX(b, c, a) {
    return b + a * (c - b)
}

function shuffle(b) {
    for (var c = b.length, a, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, a = b[c], b[c] = b[d], b[d] = a;
    return b
}

function bubbleSort(b) {
    do {
        var c = !1;
        for (var a = 0; a < b.length - 1; a++) b[a] > b[a + 1] && (c = b[a], b[a] = b[a + 1], b[a + 1] = c, c = !0)
    } while (c)
}

function compare(b, c) {
    return b.index > c.index ? -1 : b.index < c.index ? 1 : 0
}

function easeLinear(b, c, a, d) {
    return a * b / d + c
}

function easeInQuad(b, c, a, d) {
    return a * (b /= d) * b + c
}

function easeInSine(b, c, a, d) {
    return -a * Math.cos(b / d * (Math.PI / 2)) + a + c
}

function easeInCubic(b, c, a, d) {
    return a * (b /= d) * b * b + c
}

function getTrajectoryPoint(b, c) {
    var a = new createjs.Point,
        d = (1 - b) * (1 - b),
        e = b * b;
    a.x = d * c.start.x + 2 * (1 - b) * b * c.traj.x + e * c.end.x;
    a.y = d * c.start.y + 2 * (1 - b) * b * c.traj.y + e * c.end.y;
    return a
}

function formatTime(b) {
    b /= 1E3;
    var c = Math.floor(b / 60);
    b = Math.floor(b - 60 * c);
    var a = "";
    a = 10 > c ? a + ("0" + c + ":") : a + (c + ":");
    return 10 > b ? a + ("0" + b) : a + b
}

function degreesToRadians(b) {
    return b * Math.PI / 180
}

function checkRectCollision(b, c) {
    var a = getBounds(b, .9);
    var d = getBounds(c, .98);
    return calculateIntersection(a, d)
}

function calculateIntersection(b, c) {
    var a, d, e, g;
    var l = b.x + (a = b.width / 2);
    var p = b.y + (d = b.height / 2);
    var k = c.x + (e = c.width / 2);
    var f = c.y + (g = c.height / 2);
    l = Math.abs(l - k) - (a + e);
    p = Math.abs(p - f) - (d + g);
    return 0 > l && 0 > p ? (l = Math.min(Math.min(b.width, c.width), -l), p = Math.min(Math.min(b.height, c.height), -p), {
        x: Math.max(b.x, c.x),
        y: Math.max(b.y, c.y),
        width: l,
        height: p,
        rect1: b,
        rect2: c
    }) : null
}

function getBounds(b, c) {
    var a = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (b instanceof createjs.Container) {
        a.x2 = -Infinity;
        a.y2 = -Infinity;
        var d = b.children,
            e = d.length,
            g;
        for (g = 0; g < e; g++) {
            var l = getBounds(d[g], 1);
            l.x < a.x && (a.x = l.x);
            l.y < a.y && (a.y = l.y);
            l.x + l.width > a.x2 && (a.x2 = l.x + l.width);
            l.y + l.height > a.y2 && (a.y2 = l.y + l.height)
        }
        Infinity == a.x && (a.x = 0);
        Infinity == a.y && (a.y = 0);
        Infinity == a.x2 && (a.x2 = 0);
        Infinity == a.y2 && (a.y2 = 0);
        a.width = a.x2 - a.x;
        a.height = a.y2 - a.y;
        delete a.x2;
        delete a.y2
    } else {
        if (b instanceof createjs.Bitmap) {
            e =
                b.sourceRect || b.image;
            g = e.width * c;
            var p = e.height * c
        } else if (b instanceof createjs.Sprite)
            if (b.spriteSheet._frames && b.spriteSheet._frames[b.currentFrame] && b.spriteSheet._frames[b.currentFrame].image) {
                e = b.spriteSheet.getFrame(b.currentFrame);
                g = e.rect.width;
                p = e.rect.height;
                d = e.regX;
                var k = e.regY
            } else a.x = b.x || 0, a.y = b.y || 0;
        else a.x = b.x || 0, a.y = b.y || 0;
        d = d || 0;
        g = g || 0;
        k = k || 0;
        p = p || 0;
        a.regX = d;
        a.regY = k;
        e = b.localToGlobal(0 - d, 0 - k);
        l = b.localToGlobal(g - d, p - k);
        g = b.localToGlobal(g - d, 0 - k);
        d = b.localToGlobal(0 - d, p - k);
        a.x =
            Math.min(Math.min(Math.min(e.x, l.x), g.x), d.x);
        a.y = Math.min(Math.min(Math.min(e.y, l.y), g.y), d.y);
        a.width = Math.max(Math.max(Math.max(e.x, l.x), g.x), d.x) - a.x;
        a.height = Math.max(Math.max(Math.max(e.y, l.y), g.y), d.y) - a.y
    }
    return a
}

function NoClickDelay(b) {
    this.element = b;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(b) {
    for (var c = b.length, a, d; 0 < c;) d = Math.floor(Math.random() * c), c--, a = b[c], b[c] = b[d], b[d] = a;
    return b
}
NoClickDelay.prototype = {
    handleEvent: function(b) {
        switch (b.type) {
            case "touchstart":
                this.onTouchStart(b);
                break;
            case "touchmove":
                this.onTouchMove(b);
                break;
            case "touchend":
                this.onTouchEnd(b)
        }
    },
    onTouchStart: function(b) {
        b.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(b) {
        this.moved = !0
    },
    onTouchEnd: function(b) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            b = document.elementFromPoint(b.changedTouches[0].clientX, b.changedTouches[0].clientY);
            3 == b.nodeType && (b = b.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            b.dispatchEvent(c)
        }
    }
};
(function() {
    function b(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", b) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", b) : (c = "webkitHidden") in
    document ? document.addEventListener("webkitvisibilitychange", b) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", b) : "onfocusin" in document ? document.onfocusin = document.onfocusout = b : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = b
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});

function playSound(b, c, a) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[b].play(), s_aSounds[b].volume(c), s_aSounds[b].loop(a), s_aSounds[b]) : null
}

function stopSound(b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].stop()
}

function setVolume(b, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].volume(c)
}

function setMute(b, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].mute(c)
}

function fadeSound(b, c, a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].fade(c, a, d)
}

function CSpriteLibrary() {
    var b, c, a, d, e, g;
    this.init = function(l, p, k) {
        a = c = 0;
        d = l;
        e = p;
        g = k;
        b = {}
    };
    this.addSprite = function(a, d) {
        b.hasOwnProperty(a) || (b[a] = {
            szPath: d,
            oSprite: new Image
        }, c++)
    };
    this.getSprite = function(a) {
        return b.hasOwnProperty(a) ? b[a].oSprite : null
    };
    this._onSpritesLoaded = function() {
        e.call(g)
    };
    this._onSpriteLoaded = function() {
        d.call(g);
        ++a == c && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var a in b) b[a].oSprite.oSpriteLibrary = this, b[a].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            b[a].oSprite.src = b[a].szPath
    };
    this.getNumSprites = function() {
        return c
    }
}
var CANVAS_WIDTH = 1920,
    CANVAS_HEIGHT = 1920,
    EDGEBOARD_X = 500,
    EDGEBOARD_Y = 200,
    FONT = "comfortaa",
    FONT2 = "suplexmentary_comic_ncregular",
    GAME_NAME = "parking_block",
    NUM_LEVELS, FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    NUM_ROWS_PAGE_LEVEL = 3,
    NUM_COLS_PAGE_LEVEL = 5,
    START_X_GRID = 0,
    START_Y_GRID = 0,
    CELL_WIDTH = 146,
    CELL_HEIGHT = 146,
    STAR_WIDTH = 80,
    STAR_HEIGHT = 80,
    NUM_ROWS = 6,
    NUM_COLS = 6,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    SCORE_PER_STARS, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_PRELOADER_CONTINUE = "START",
    TEXT_GAMEOVER = "CONGRATULATIONS! YOU HAVE COMPLETED ALL THE LEVELS!\nYOUR TOTAL SCORE IS: ",
    TEXT_MOVES = "Moves",
    TEXT_NEXT_LEVEL = "CONGRATULATIONS!\nYOU MOVE TO THE NEXT LEVEL!",
    TEXT_SELECT_LEVEL = "SELECT LEVEL",
    TEXT_SCORE = "Score",
    TEXT_TOTAL_SCORE = "TOTAL SCORE",
    TEXT_LEVEL = "Lvl",
    TEXT_YOUR_SCORE = "YOUR SCORE IS",
    TEXT_MOVES_OUT = "MOVES OUT OF",
    TEXT_HELP = "Get your car out of this crowded parking area by sliding the others out of the way!",
    TEXT_ARE_YOU_SURE = "ARE YOU SURE?",
    TEXT_CONFIRM_DELETE = "THIS WILL REMOVE ALL YOUR PROGRESS! ARE YOU SURE?",
    TEXT_IOS_PRIVATE = 'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some info may not save or some features may not work properly',
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
    var b, c, a, d, e, g, l, p, k, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren();
        k.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(n);
        n = s_oSpriteLibrary.getSprite("200x200");
        l = createBitmap(n);
        l.regX = .5 * n.width;
        l.regY = .5 * n.height;
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2 - 180;
        f.addChild(l);
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(l.x - 100, l.y - 100, 200, 200, 10);
        f.addChild(p);
        l.mask = p;
        n = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(n);
        d.x = CANVAS_WIDTH / 2 - n.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 50;
        f.addChild(d);
        b = n.width;
        c = n.height;
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
        f.addChild(e);
        d.mask = e;
        a = new createjs.Text("", "30px " + FONT, "#fff");
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 + 100;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        f.addChild(a);
        n = s_oSpriteLibrary.getSprite("but_start");
        k = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, n, TEXT_PRELOADER_CONTINUE,
            "Arial", "#000", 50, f);
        k.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        k.setVisible(!1);
        k.removeStroke();
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(g);
        createjs.Tween.get(g).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(g);
            f.removeChild(g)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(f) {
        a.text = f + "%";
        100 === f && (k.setVisible(!0), a.visible = !1, d.visible = !1);
        e.graphics.clear();
        f = Math.floor(f * b / 100);
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, f, c)
    };
    this._init()
}

function CMain(b) {
    var c, a = 0,
        d = 0,
        e = STATE_LOADING,
        g, l;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.ticker = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oLevelSettings = new CLevelSettings;
        s_oLocalStorage = new CLocalStorage(GAME_NAME);
        g = new CPreloader
    };
    this.preloaderReady = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        c = !0
    };
    this.soundLoaded = function() {
        a++;
        g.refreshLoader(Math.floor(a / d * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "car_exit",
            loop: !0,
            volume: 1,
            ingamename: "car_exit"
        });
        a.push({
            path: "./sounds/",
            filename: "stage_clear",
            loop: !1,
            volume: 1,
            ingamename: "stage_clear"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        d += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded,
            this);
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_play_small", "./sprites/but_play_small.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("level_sprite", "./sprites/LevelSprite.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon",
            "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("star_filled", "./sprites/star_filled.png");
        s_oSpriteLibrary.addSprite("star_empty", "./sprites/star_empty.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_right", "./sprites/but_right.png");
        s_oSpriteLibrary.addSprite("but_left", "./sprites/but_left.png");
        s_oSpriteLibrary.addSprite("level_display", "./sprites/level_display.png");
        s_oSpriteLibrary.addSprite("moves_display", "./sprites/moves_display.png");
        s_oSpriteLibrary.addSprite("score_display", "./sprites/score_display.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_delete", "./sprites/but_delete.png");
        s_oSpriteLibrary.addSprite("car_highlight",
            "./sprites/car_highlight.png");
        s_oSpriteLibrary.addSprite("car_player", "./sprites/car_player.png");
        for (var a = 0; 8 > a; a++) s_oSpriteLibrary.addSprite("car_" + a, "./sprites/car_" + a + ".png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        a++;
        g.refreshLoader(Math.floor(a / d * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() {
        g.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        e = STATE_MENU
    };
    this.gotoLevelMenu = function() {
        new CLevelMenu;
        e = STATE_MENU
    };
    this.gotoGame = function(a) {
        l = new CGame(p, a);
        e = STATE_GAME;
        $(s_oMain).trigger("game_start")
    };
    this.gotoHelp = function() {
        new CHelpPanel(s_oSpriteLibrary.getSprite("msg_box"));
        e = STATE_HELP
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            e === STATE_GAME && l.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var p = b;
    ENABLE_CHECK_ORIENTATION = b.check_orientation;
    ENABLE_FULLSCREEN = b.fullscreen;
    SCORE_PER_STARS = b.score_per_stars;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_bFullscreen = !1,
    s_aSounds, s_oLevelSettings, s_oLocalStorage;

function CTextButton(b, c, a, d, e, g, l, p) {
    var k, f, n, q, m, v, A;
    this._init = function(a, b, c, d, e, g, l, v) {
        k = [];
        f = [];
        var p = createBitmap(c),
            A = Math.ceil(l / 20);
        m = new createjs.Text(d, "bold " + l + "px " + e, "#000000");
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        var J = m.getBounds();
        m.x = c.width / 2 + A;
        m.y = Math.floor(c.height / 2) + J.height / 3 + A;
        q = new createjs.Text(d, "bold " + l + "px " + e, g);
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        J = q.getBounds();
        q.x = c.width / 2;
        q.y = Math.floor(c.height / 2) + J.height / 3;
        n = new createjs.Container;
        n.x = a;
        n.y = b;
        n.regX = c.width / 2;
        n.regY = c.height / 2;
        n.addChild(p, m, q);
        s_bMobile || (n.cursor = "pointer");
        v.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        n.off("mousedown", v);
        n.off("pressup", A);
        p.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this._initListener = function() {
        oParent = this;
        v = n.on("mousedown", this.buttonDown);
        A = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        f[a] = c
    };
    this.buttonRelease = function() {
        n.scaleX = 1;
        n.scaleY = 1;
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        n.scaleX = .9;
        n.scaleY = .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function(a) {
        q.y = a;
        m.y = a + 2
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function(a) {
        n.x = a
    };
    this.setY = function(a) {
        n.y = a
    };
    this.getButtonImage = function() {
        return n
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    this.removeStroke = function() {
        m.visible = !1
    };
    this._init(b, c, a, d, e, g, l, p);
    return this
}

function CToggle(b, c, a, d, e) {
    var g, l, p, k = [],
        f, n, q;
    this._init = function(a, b, c, d) {
        l = [];
        p = [];
        var v = new createjs.SpriteSheet({
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
        f = createSprite(v, "state_" + g, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        f.x = a;
        f.y = b;
        f.stop();
        s_bMobile || (f.cursor = "pointer");
        e.addChild(f);
        this._initListener()
    };
    this.unload = function() {
        f.off("mousedown", n);
        f.off("pressup", q);
        e.removeChild(f)
    };
    this._initListener =
        function() {
            n = f.on("mousedown", this.buttonDown);
            q = f.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        p[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        l[a] = b;
        p[a] = c;
        k = d
    };
    this.setActive = function(a) {
        g = a;
        f.gotoAndStop("state_" + g)
    };
    this.buttonRelease = function() {
        f.scaleX = 1;
        f.scaleY = 1;
        playSound("click", 1, !1);
        g = !g;
        f.gotoAndStop("state_" + g);
        l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(p[ON_MOUSE_UP], k)
    };
    this.buttonDown = function() {
        f.scaleX = .9;
        f.scaleY = .9;
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN],
            k)
    };
    this.setPosition = function(a, b) {
        f.x = a;
        f.y = b
    };
    this.setVisible = function(a) {
        f.visible = a
    };
    this.getButtonImage = function() {
        return f
    };
    this._init(b, c, a, d)
}

function CGfxButton(b, c, a, d) {
    var e, g, l, p = [],
        k, f, n, q;
    this._init = function(a, b, c, d) {
        e = 1;
        g = [];
        l = [];
        k = createBitmap(c);
        k.x = a;
        k.y = b;
        k.regX = c.width / 2;
        k.regY = c.height / 2;
        s_bMobile || (k.cursor = "pointer");
        d.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", f);
        k.off("pressup", n);
        d.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this._initListener = function() {
        f = k.on("mousedown", this.buttonDown);
        n = k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        g[a] = b;
        l[a] =
            c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        g[a] = b;
        l[a] = c;
        p = d
    };
    this.buttonRelease = function() {
        q && (k.scaleX = e, k.scaleY = e);
        playSound("click", 1, !1);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(l[ON_MOUSE_UP], p)
    };
    this.buttonDown = function() {
        q && (k.scaleX = .9 * e, k.scaleY = .9 * e);
        g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], p)
    };
    this.setScale = function(a) {
        e = a;
        k.scaleX = a;
        k.scaleY = a
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.setX = function(a) {
        k.x = a
    };
    this.setY = function(a) {
        k.y = a
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this.getButtonImage = function() {
        return k
    };
    this.pulseAnimation = function() {
        q = createjs.Tween.get(k).to({
            scaleX: .9 * e,
            scaleY: .9 * e
        }, 850, createjs.Ease.quadOut).to({
            scaleX: e,
            scaleY: e
        }, 650, createjs.Ease.quadIn).call(function() {
            m.pulseAnimation()
        })
    };
    this._init(b, c, a, d);
    var m = this;
    return this
}

function CMenu() {
    var b, c, a, d, e, g, l, p, k, f, n, q, m, v, A, F, B, I = null,
        K = null;
    this._init = function() {
        k = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(k);
        var y = s_oSpriteLibrary.getSprite("but_play");
        f = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 725, y, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        f.pulseAnimation();
        y = s_oSpriteLibrary.getSprite("logo_menu");
        var G = createBitmap(y);
        G.regX = y.width / 2;
        G.regY = y.height / 2;
        G.x = CANVAS_WIDTH / 2;
        G.y = 700;
        s_oStage.addChild(G);
        if (!1 ===
            DISABLE_SOUND_MOBILE || !1 === s_bMobile) y = s_oSpriteLibrary.getSprite("audio_icon"), l = CANVAS_WIDTH - y.height / 2 - 10, p = y.height / 2 + 16, q = new CToggle(l, p, y, s_bAudioActive, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        y = s_oSpriteLibrary.getSprite("but_credits");
        e = y.height / 2 + 10;
        g = y.height / 2 + 16;
        m = new CGfxButton(e, g, y, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
        y = s_oSpriteLibrary.getSprite("but_delete");
        b = CANVAS_WIDTH - y.height / 2 - 10;
        c = CANVAS_HEIGHT - y.height / 2 - 10;
        A = new CGfxButton(e,
            g, y, s_oStage);
        A.addEventListener(ON_MOUSE_UP, this._onButDelete, this);
        s_oLocalStorage.isDirty() || A.setVisible(!1);
        y = window.document;
        G = y.documentElement;
        I = G.requestFullscreen || G.mozRequestFullScreen || G.webkitRequestFullScreen || G.msRequestFullscreen;
        K = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (I = !1);
        I && screenfull.enabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), a = e + y.width / 2 + 10, d = y.height / 2 + 16, v = new CToggle(a, d, y, s_bFullscreen,
            s_oStage), v.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(n);
        F = new CAreYouSurePanel(this._onConfirmDelete);
        F.setMessage(TEXT_CONFIRM_DELETE);
        s_oLocalStorage.isUsed() || (B = new CMsgBox(TEXT_IOS_PRIVATE));
        createjs.Tween.get(n).to({
            alpha: 0
        }, 1E3).call(function() {
            n.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        f.unload();
        f = null;
        n.visible = !1;
        A.unload();
        A = null;
        F.unload();
        F = null;
        s_oLocalStorage.isUsed() || B.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
        I && screenfull.enabled && v.unload();
        m.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.refreshButtonPos = function(f, k) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(l - f, k + p);
        I && screenfull.enabled && v.setPosition(a + f, d + k);
        m.setPosition(e + f, g + k);
        A.setPosition(b - f, c - k)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease =
        function() {
            this.unload();
            s_oMain.gotoLevelMenu();
            $(s_oMain).trigger("start_session")
        };
    this._onButInfoRelease = function() {
        new CCreditsPanel
    };
    this._onButDelete = function() {
        F.show()
    };
    this._onConfirmDelete = function() {
        s_oLocalStorage.deleteData();
        s_oLocalStorage.saveData();
        F.hide()
    };
    this.resetFullscreenBut = function() {
        I && screenfull.enabled && v.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? K.call(window.document) : I.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu =
        this;
    this._init()
}
var s_oMenu = null;

function CGame(b, c) {
    var a, d, e, g, l, p, k = 0,
        f, n, q = null,
        m, v = !1,
        A = !1,
        F = !1,
        B = !1,
        I = !1,
        K = !1,
        y, G, H, w = [],
        C = [],
        r = 0;
    this._init = function() {
        $(s_oMain).trigger("start_level", c);
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        y = new CLevelSettings;
        H = y.getLevel(c);
        f = y.getGoalInLevel(c);
        w = [];
        for (a = 0; a < NUM_ROWS; a++) {
            w[a] = [];
            for (var b = 0; b < NUM_COLS; b++) w[a][b] = 0
        }
        G = new createjs.Container;
        G.x = CANVAS_WIDTH / 2;
        G.y = CANVAS_HEIGHT / 2;
        G.regX = NUM_COLS * CELL_WIDTH / 2;
        G.regY = NUM_ROWS * CELL_HEIGHT / 2;
        s_oStage.addChild(G);
        for (r = 0; r < H.length; r++) a = new CBlocks(H[r].obj_x, H[r].obj_y, H[r].obj_type, r, G), C.push(a), this._updateGrid(H[r].obj_x, H[r].obj_y, H[r].obj_type), H[r].obj_type === OBJ_TYPE_PLAYER && (m = a);
        n = new CInterface(f, c + 1, s_oLocalStorage.getPartialScore(c))
    };
    this._updateGrid = function(a, b, c) {
        switch (c) {
            case OBJ_TYPE_PLAYER:
            case OBJ_HORIZONTAL_2:
                w[a][b] = 1;
                w[a + 1][b] = 1;
                break;
            case OBJ_HORIZONTAL_3:
                w[a][b] = 1;
                w[a + 1][b] = 1;
                w[a + 2][b] = 1;
                break;
            case OBJ_VERTICAL_2:
                w[a][b] = 1;
                w[a][b + 1] = 1;
                break;
            case OBJ_VERTICAL_3:
                w[a][b] = 1, w[a][b +
                    1
                ] = 1, w[a][b + 2] = 1
        }
    };
    this._unloadFromGrid = function(a, b, c) {
        switch (C[c].getType()) {
            case OBJ_TYPE_PLAYER:
            case OBJ_HORIZONTAL_2:
                w[a][b] = 0;
                w[a + 1][b] = 0;
                break;
            case OBJ_HORIZONTAL_3:
                w[a][b] = 0;
                w[a + 1][b] = 0;
                w[a + 2][b] = 0;
                break;
            case OBJ_VERTICAL_2:
                w[a][b] = 0;
                w[a][b + 1] = 0;
                break;
            case OBJ_VERTICAL_3:
                w[a][b] = 0, w[a][b + 1] = 0, w[a][b + 2] = 0
        }
    };
    this.onFormContainerClick = function(b, c, f) {
        e = c.x;
        g = c.y;
        var k = Math.round((c.x - START_X_GRID) / CELL_WIDTH),
            m = Math.round((c.y - START_Y_GRID) / CELL_HEIGHT);
        l = c.x;
        p = c.y;
        a = b.stageX / s_iScaleFactor -
            e;
        d = b.stageY / s_iScaleFactor - g;
        this._unloadFromGrid(k, m, f)
    };
    this.dragForm = function(b, c, e) {
        c === OBJ_TYPE_PLAYER && m.showHighlight(!1);
        var f = b.stageX / s_iScaleFactor;
        b = b.stageY / s_iScaleFactor;
        var g = Math.round((f - a - START_X_GRID) / CELL_WIDTH),
            k = Math.round((b - d - START_Y_GRID) / CELL_HEIGHT);
        0 > g && (g = 0);
        g >= NUM_COLS && (g = NUM_COLS - 1);
        0 > k && (k = 0);
        k >= NUM_ROWS && (g = NUM_ROWS - 1);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || K || (K = !0);
        switch (c) {
            case OBJ_TYPE_PLAYER:
            case OBJ_HORIZONTAL_2:
                f - a > START_X_GRID && f - a < START_X_GRID + (4 *
                    CELL_WIDTH + 10) && (l <= f - a ? 0 === w[g + 1][k] && !1 === v ? C[e].setPos(f - a, C[e].getPosY()) : (v = !0, A = !1) : 0 === w[g][k] && !1 === A ? C[e].setPos(f - a, C[e].getPosY()) : (A = !0, v = !1));
                break;
            case OBJ_HORIZONTAL_3:
                f - a > START_X_GRID && f - a < START_X_GRID + (3 * CELL_WIDTH + 10) && (l <= f - a ? 0 === w[g + 2][k] && !1 === v ? C[e].setPos(f - a, C[e].getPosY()) : (v = !0, A = !1) : 0 === w[g][k] && !1 === A ? C[e].setPos(f - a, C[e].getPosY()) : (A = !0, v = !1));
                break;
            case OBJ_VERTICAL_2:
                b - d > START_Y_GRID && b - d < START_Y_GRID + (4 * CELL_HEIGHT + 10) && (p <= b - d ? 0 === w[g][k + 1] && !1 === F ? C[e].setPos(C[e].getPosX(),
                    b - d) : (F = !0, B = !1) : 0 === w[g][k] && !1 === B ? C[e].setPos(C[e].getPosX(), b - d) : (B = !0, F = !1));
                break;
            case OBJ_VERTICAL_3:
                b - d > START_Y_GRID && b - d < START_Y_GRID + (3 * CELL_HEIGHT + 10) && (p <= b - d ? 0 === w[g][k + 2] && !1 === F ? C[e].setPos(C[e].getPosX(), b - d) : (F = !0, B = !1) : 0 === w[g][k] && !1 === B ? C[e].setPos(C[e].getPosX(), b - d) : (B = !0, F = !1))
        }
    };
    this.releaseForm = function(a, b, c, d) {
        B = F = A = v = !1;
        var e = C[d].getPosX(),
            f = C[d].getPosY(),
            g = 0,
            m = 0;
        a = Math.round((e - START_X_GRID) / CELL_WIDTH);
        b = Math.round((f - START_Y_GRID) / CELL_HEIGHT);
        switch (c) {
            case OBJ_TYPE_PLAYER:
            case OBJ_HORIZONTAL_2:
                g =
                    2;
                break;
            case OBJ_HORIZONTAL_3:
                g = 3;
                break;
            case OBJ_VERTICAL_2:
                m = 2;
                break;
            case OBJ_VERTICAL_3:
                m = 3
        }
        if (!0 === this.checkPieceIfFitInPos(a, b, g, m)) {
            if (e = c === OBJ_VERTICAL_2 || c === OBJ_VERTICAL_3 ? START_X_GRID + CELL_WIDTH * a - 12 : START_X_GRID + CELL_WIDTH * a - 5, f = START_Y_GRID + CELL_HEIGHT * b - 5, C[d].placeInGrid(e, f), e = Math.round((p - START_Y_GRID) / CELL_HEIGHT), Math.round((l - START_X_GRID) / CELL_WIDTH) !== a || e !== b) k++, this._refreshMoves()
        } else e = C[d].getOldX(), f = C[d].getOldY(), a = Math.round((e - START_X_GRID) / CELL_WIDTH), b = Math.round((f -
            START_Y_GRID) / CELL_HEIGHT), C[d].goBack(e, f);
        this._updateGrid(a, b, c);
        c === OBJ_TYPE_PLAYER && (e = C[d].getOldX(), a = Math.round((e - START_X_GRID) / CELL_WIDTH), 4 === a && (C[d].moveOut(), playSound("car_exit", 1, !1)))
    };
    this.checkPieceIfFitInPos = function(a, b, c, d) {
        var e = !0;
        if (0 < c)
            for (var f = 0; f < c; f++) {
                if (0 !== w[f + a][b]) {
                    e = !1;
                    break
                }
            } else if (0 < d)
                for (f = 0; f < d; f++)
                    if (0 !== w[a][f + b]) {
                        e = !1;
                        break
                    } return e
    };
    this._refreshMoves = function() {
        n.refreshMoves(k, f)
    };
    this.unload = function() {
        n.unload();
        null !== q && q.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        c < NUM_LEVELS - 1 && $(s_oMain).trigger("end_level", c);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("save_score", s_oLocalStorage.getTotalScore(c));
        setVolume("soundtrack", 1)
    };
    this.onExitEndPanel = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("save_score", s_oLocalStorage.getTotalScore(c));
        setVolume("soundtrack", 1)
    };
    this.onRestart = function() {
        m.showHighlight(!0);
        for (var a = 0; a < NUM_ROWS; a++)
            for (var b = 0; b < NUM_COLS; b++) w[a][b] = 0;
        for (var d = 0; d < r; d++) a = H[d].obj_type === OBJ_VERTICAL_2 || H[d].obj_type === OBJ_VERTICAL_3 ? START_X_GRID + CELL_WIDTH * H[d].obj_x - 12 : START_X_GRID + CELL_WIDTH * H[d].obj_x - 5, b = START_Y_GRID + CELL_HEIGHT * H[d].obj_y - 5, C[d].placeInGrid(a, b), this._updateGrid(H[d].obj_x, H[d].obj_y, H[d].obj_type);
        k = 0;
        this._refreshMoves();
        $(s_oMain).trigger("restart_level", c);
        $(s_oMain).trigger("show_interlevel_ad")
    };
    this.onNextLevel = function() {
        c + 1 === NUM_LEVELS ? (I = !0, this.gameOver()) : (this.unload(), s_oMain.gotoGame(c + 1));
        setVolume("soundtrack", 1)
    };
    this.gameOver = function() {
        if (I) $(s_oMain).trigger("end_level", c), q = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box")), q.show(c + 1, s_oLocalStorage.getTotalScore());
        else {
            c + 2 > s_iLastLevel && (s_iLastLevel = c + 2);
            var a;
            k >= f + 5 ? a = 1 : k >= f + 2 ? a = 2 : k < f + 2 && (a = 3);
            a > s_aStars[c] && (s_aStars[c] = a);
            a *= SCORE_PER_STARS;
            a > s_aScore[c] && (s_aScore[c] = a);
            s_oLocalStorage.saveData();
            $(s_oMain).trigger("end_level",
                c);
            q = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
            q.nextLevel(k, c + 1, f, a)
        }
        $(s_oMain).trigger("save_score", s_oLocalStorage.getTotalScore(c))
    };
    this.update = function() {};
    s_oGame = this;
    this._init()
}
var s_oGame;

function CInterface(b, c, a) {
    var d, e, g, l, p, k, f, n, q, m, v, A, F, B = null,
        I = null,
        K, y, G = CANVAS_WIDTH / 2 + 340,
        H, w, C = CANVAS_WIDTH / 2,
        r, J, P = CANVAS_WIDTH / 2 - 350;
    this._init = function(a, b, c) {
        var x = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - x.height / 2 - 10;
        n = x.height / 2 + 16;
        m = new CGfxButton(f, n, x, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        x = s_oSpriteLibrary.getSprite("but_restart");
        d = f - x.width - 10;
        e = x.height / 2 + 16;
        v = new CGfxButton(d, e, x, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (x = s_oSpriteLibrary.getSprite("audio_icon"), p = d - x.width / 2 - 10, k = x.height / 2 + 16, q = new CToggle(p, k, x, s_bAudioActive, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), g = p - x.width / 2 - 10) : g = d - x.width / 2 - 10;
        l = x.height / 2 + 16;
        var z = window.document;
        x = z.documentElement;
        B = x.requestFullscreen || x.mozRequestFullScreen || x.webkitRequestFullScreen || x.msRequestFullscreen;
        I = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 ===
            ENABLE_FULLSCREEN && (B = !1);
        B && screenfull.enabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"), A = new CToggle(g, l, x, s_bFullscreen, s_oStage), A.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        x = s_oSpriteLibrary.getSprite("level_display");
        z = createBitmap(x);
        z.x = 500;
        z.y = 420;
        s_oStage.addChild(z);
        x = s_oSpriteLibrary.getSprite("score_display");
        var M = createBitmap(x);
        M.regX = x.width / 2;
        M.x = CANVAS_WIDTH / 2;
        M.y = z.y;
        s_oStage.addChild(M);
        x = s_oSpriteLibrary.getSprite("moves_display");
        x = createBitmap(x);
        x.x = 1190;
        x.y = z.y;
        s_oStage.addChild(x);
        y = new createjs.Text(TEXT_MOVES + ": 0/" + a, " 28px " + FONT, "#0075b8");
        y.x = G;
        y.y = 460;
        y.textAlign = "center";
        y.textBaseline = "alphabetic";
        y.lineWidth = 650;
        y.outline = 8;
        s_oStage.addChild(y);
        K = new createjs.Text(TEXT_MOVES + ": 0/" + a, " 28px " + FONT, "#FFFFFF");
        K.x = G;
        K.y = 460;
        K.textAlign = "center";
        K.textBaseline = "alphabetic";
        K.lineWidth = 650;
        s_oStage.addChild(K);
        w = new createjs.Text(TEXT_SCORE + ": " + c, " 28px " + FONT, "#0075b8");
        w.x = C;
        w.y = 460;
        w.textAlign = "center";
        w.textBaseline = "alphabetic";
        w.lineWidth = 650;
        w.outline = 8;
        s_oStage.addChild(w);
        H = new createjs.Text(TEXT_SCORE + ": " + c, " 28px " + FONT, "#FFFFFF");
        H.x = C;
        H.y = 460;
        H.textAlign = "center";
        H.textBaseline = "alphabetic";
        H.lineWidth = 650;
        s_oStage.addChild(H);
        r = new createjs.Text(TEXT_LEVEL + ": " + b, " 28px " + FONT, "#0075b8");
        r.x = P;
        r.y = 460;
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        r.lineWidth = 650;
        r.outline = 8;
        s_oStage.addChild(r);
        J = new createjs.Text(TEXT_LEVEL + ": " + b, " 28px " + FONT, "#FFFFFF");
        J.x = P;
        J.y = 460;
        J.textAlign = "center";
        J.textBaseline = "alphabetic";
        J.lineWidth = 650;
        s_oStage.addChild(J);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        F = new CAreYouSurePanel(this._onConfirmExit)
    };
    this.refreshMoves = function(a, b) {
        y.text = TEXT_MOVES + ": " + a + "/" + b;
        K.text = TEXT_MOVES + ": " + a + "/" + b
    };
    this.refreshScore = function(a) {
        w.text = TEXT_SCORE + ": " + a;
        H.text = TEXT_SCORE + ": " + a
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
        B && screenfull.enabled && A.unload();
        m.unload();
        v.unload();
        F.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a,
        b) {
        m.setPosition(f - a, b + n);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(p - a, b + k);
        B && screenfull.enabled && A.setPosition(g - a, l + b);
        v.setPosition(d - a, b + e)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        F.show()
    };
    this._onConfirmExit = function() {
        s_oGame.onExit()
    };
    this._onRestart = function() {
        s_oGame.onRestart()
    };
    this.resetFullscreenBut = function() {
        B && screenfull.enabled && A.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ?
            I.call(window.document) : B.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(b, c, a);
    return this
}
var s_oInterface = null;

function CEndPanel(b) {
    var c, a, d, e, g, l, p, k, f = CANVAS_WIDTH / 2,
        n = CANVAS_HEIGHT / 2 - 220,
        q, m;
    this._init = function(b) {
        q = new createjs.Shape;
        q.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m = q.on("mousedown", function() {});
        s_oStage.addChild(q);
        c = createBitmap(b);
        c.regX = b.width / 2;
        c.regY = b.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        a = new createjs.Container;
        a.alpha = 0;
        a.visible = !1;
        b = new createjs.Container;
        b.y = -90;
        e = createBitmap(s_oSpriteLibrary.getSprite("star_filled"));
        e.x = CANVAS_WIDTH /
            2;
        e.y = CANVAS_HEIGHT / 2 - 60;
        e.regX = STAR_WIDTH / 2;
        e.regY = STAR_HEIGHT / 2;
        e.scaleX = .1;
        e.scaleY = .1;
        e.visible = !1;
        b.addChild(e);
        g = createBitmap(s_oSpriteLibrary.getSprite("star_filled"));
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 - 60;
        g.regX = STAR_WIDTH / 2;
        g.regY = STAR_HEIGHT / 2;
        g.scaleX = .1;
        g.scaleY = .1;
        g.visible = !1;
        b.addChild(g);
        l = createBitmap(s_oSpriteLibrary.getSprite("star_filled"));
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2 - 60;
        l.regX = STAR_WIDTH / 2;
        l.regY = STAR_HEIGHT / 2;
        l.scaleX = .1;
        l.scaleY = .1;
        l.visible = !1;
        b.addChild(l);
        a.addChild(c, d, void 0, b);
        s_oStage.addChild(a)
    };
    this.unload = function() {};
    this.show = function(b, c) {
        playSound("stage_clear", 1, !1);
        setVolume("soundtrack", 0);
        var d = TEXT_GAMEOVER + s_oLocalStorage.getTotalScore();
        (new CFormatText(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 300, d, "#FFFFFF", a, "#0075b8", 50)).setWidth(780);
        a.visible = !0;
        d = s_oSpriteLibrary.getSprite("but_restart");
        p = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 150, d, a);
        var e = this;
        createjs.Tween.get(a).to({
            alpha: 1
        }, 500).call(function() {
            p.addEventListener(ON_MOUSE_DOWN,
                e._onExit, this)
        });
        $(s_oMain).trigger("share_event", c);
        $(s_oMain).trigger("save_score", c)
    };
    this.nextLevel = function(b, c, m, q) {
        k = new createjs.Text(TEXT_YOUR_SCORE + ": " + q, " 50px " + FONT, "#0075b8");
        k.x = f;
        k.y = n;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineWidth = 650;
        k.outline = 4;
        a.addChild(k);
        d = new createjs.Text(TEXT_YOUR_SCORE + ": " + q, " 50px " + FONT, "#ffffff");
        d.x = f;
        d.y = n;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.lineWidth = 650;
        a.addChild(d);
        playSound("stage_clear", 1, !1);
        setVolume("soundtrack",
            0);
        c = TEXT_NEXT_LEVEL + " " + TEXT_SCORE.toUpperCase() + " " + b + " " + TEXT_MOVES_OUT + " " + m;
        (new CFormatText(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40, c, "#FFFFFF", a, "#0075b8", 50)).setWidth(730);
        c = s_oSpriteLibrary.getSprite("but_play_small");
        p = new CGfxButton(CANVAS_WIDTH / 2 + 334, CANVAS_HEIGHT - 500, c, a);
        p.addEventListener(ON_MOUSE_DOWN, this._onNextLevel, this);
        b >= m + 5 ? (e.visible = !0, createjs.Tween.get(e).wait(500).to({
            scaleX: 1,
            scaleY: 1
        }, 500, createjs.Ease.bounceOut)) : b >= m + 2 ? (e.visible = !0, createjs.Tween.get(e).wait(500).to({
            scaleX: 1,
            scaleY: 1
        }, 500, createjs.Ease.bounceOut).call(function() {
            g.visible = !0;
            createjs.Tween.get(e).to({
                x: CANVAS_WIDTH / 2 - 40,
                y: CANVAS_HEIGHT / 2 - 55,
                rotation: -20
            }, 250, createjs.Ease.linear).call(function() {});
            createjs.Tween.get(g).to({
                scaleX: 1,
                scaleY: 1,
                x: CANVAS_WIDTH / 2 + 40,
                y: CANVAS_HEIGHT / 2 - 55,
                rotation: 20
            }, 500, createjs.Ease.bounceOut)
        })) : b < m + 2 && (e.visible = !0, createjs.Tween.get(e).wait(500).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 0
        }, 500, createjs.Ease.bounceOut).call(function() {
            g.visible = !0;
            createjs.Tween.get(e).to({
                x: CANVAS_WIDTH /
                    2 - 40,
                y: CANVAS_HEIGHT / 2 - 55,
                rotation: -20
            }, 250, createjs.Ease.linear).call(function() {});
            createjs.Tween.get(g).to({
                scaleX: 1,
                scaleY: 1,
                x: CANVAS_WIDTH / 2 + 40,
                y: CANVAS_HEIGHT / 2 - 55,
                rotation: 20
            }, 500, createjs.Ease.bounceOut).call(function() {
                l.visible = !0;
                createjs.Tween.get(e).to({
                    x: CANVAS_WIDTH / 2 - 75,
                    y: CANVAS_HEIGHT / 2 - 50
                }, 250, createjs.Ease.linear).call(function() {});
                createjs.Tween.get(g).to({
                    x: CANVAS_WIDTH / 2 + 75,
                    y: CANVAS_HEIGHT / 2 - 50
                }, 250, createjs.Ease.linear).call(function() {});
                createjs.Tween.get(l).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: CANVAS_WIDTH / 2,
                    y: CANVAS_HEIGHT / 2 - 60
                }, 700, createjs.Ease.bounceOut)
            })
        }));
        a.visible = !0;
        createjs.Tween.get(a).to({
            alpha: 1
        }, 500).call(function() {});
        $(s_oMain).trigger("share_event", q)
    };
    this._onExit = function() {
        s_oStage.removeChild(a);
        p.unload();
        q.off("mousedown", m);
        s_oGame.onExitEndPanel()
    };
    this._onNextLevel = function() {
        s_oStage.removeChild(a);
        s_oGame.onNextLevel()
    };
    this._init(b);
    return this
}
var OBJ_TYPE_PLAYER = "car_player",
    OBJ_VERTICAL_2 = "vertical_2",
    OBJ_VERTICAL_3 = "vertical_3",
    OBJ_HORIZONTAL_2 = "horizontal_2",
    OBJ_HORIZONTAL_3 = "horizontal_3";

function CLevelSettings() {
    var b = [],
        c = [];
    this._init = function() {
        var a = [];
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(5);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(5);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(12);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(5);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(11);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(8);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(9);
        a = [];
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(10);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(11);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(8);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(17);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(19);
        a = [];
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(18);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(15);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(19);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(17);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(15);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(19);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(20);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(19);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(16);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(30);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 1,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 3,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 3,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        a = [];
        a.push({
            obj_x: 0,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 2,
            obj_y: 0,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 5,
            obj_y: 0,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 1,
            obj_y: 1,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 2,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 2,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 3,
            obj_y: 4,
            obj_type: OBJ_VERTICAL_2
        });
        a.push({
            obj_x: 4,
            obj_y: 4,
            obj_type: OBJ_HORIZONTAL_2
        });
        a.push({
            obj_x: 0,
            obj_y: 5,
            obj_type: OBJ_HORIZONTAL_3
        });
        a.push({
            obj_x: 0,
            obj_y: 2,
            obj_type: OBJ_TYPE_PLAYER
        });
        b.push(a);
        c.push(40);
        NUM_LEVELS = b.length
    };
    this.getLevel = function(a) {
        return b[a]
    };
    this.getLevels =
        function() {
            return b
        };
    this.getCellValueInLevel = function(a, c) {
        return (void 0)[parseInt(b[a].charAt(c))]
    };
    this.getGoalInLevel = function(a) {
        return c[a]
    };
    this.getGoalNumberInLevel = function(a) {
        return (void 0)[a].length
    };
    this._init()
}

function CBlocks(b, c, a, d, e) {
    var g, l, p, k, f, n, q, m = {
        x: 0,
        y: 0
    };
    this._init = function(a, b, c, d, e) {
        g = new createjs.Container;
        f = ["car_0", "car_1", "car_2", "car_3", "car_4"];
        n = ["car_5", "car_6", "car_7"];
        this._setCar();
        e.addChild(g);
        createjs.Touch.enable(g);
        l = g.on("mousedown", this._onFormContainerClick, this);
        p = g.on("pressup", this._releaseForm, this);
        k = g.on("pressmove", this._dragForm, this)
    };
    this._setCar = function() {
        var d;
        a === OBJ_VERTICAL_2 || a === OBJ_HORIZONTAL_2 ? d = f[Math.floor(Math.random() * f.length)] : a === OBJ_VERTICAL_3 ||
            a === OBJ_HORIZONTAL_3 ? d = n[Math.floor(Math.random() * n.length)] : a === OBJ_TYPE_PLAYER && (d = "car_player");
        var e = s_oSpriteLibrary.getSprite(d),
            l = d = 0;
        a === OBJ_VERTICAL_2 || a === OBJ_VERTICAL_3 ? (m = {
            x: START_X_GRID + CELL_WIDTH * b - 12,
            y: START_Y_GRID + CELL_HEIGHT * c - 5
        }, d = 90, l = e.height) : m = {
            x: START_X_GRID + CELL_WIDTH * b - 5,
            y: START_Y_GRID + CELL_HEIGHT * c - 5
        };
        a === OBJ_TYPE_PLAYER && this._setCarHighlight(m.x, m.y);
        e = createBitmap(e);
        g.x = m.x;
        g.y = m.y;
        e.regY = l;
        e.rotation = d;
        g.addChild(e)
    };
    this._onFormContainerClick = function(a) {
        s_oGame.onFormContainerClick(a,
            g, d)
    };
    this._dragForm = function(b) {
        s_oGame.dragForm(b, a, d)
    };
    this._releaseForm = function(b) {
        s_oGame.releaseForm(b, m, a, d)
    };
    this.placeInGrid = function(a, b) {
        createjs.Tween.get(g, {
            override: !0
        }).to({
            x: a,
            y: b
        }, 500, createjs.Ease.cubicOut).call(function() {});
        m = {
            x: a,
            y: b
        }
    };
    this.goBack = function(a, b) {
        createjs.Tween.get(g).to({
            x: a,
            y: b
        }, 200, createjs.Ease.cubicOut).call(function() {})
    };
    this.moveOut = function() {
        createjs.Tween.get(g, {
            override: !0
        }).to({
            x: CANVAS_WIDTH
        }, 500, createjs.Ease.cubicIn).call(function() {
            s_oGame.gameOver()
        })
    };
    this.setPos = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.getPosX = function() {
        return g.x
    };
    this.getPosY = function() {
        return g.y
    };
    this.getOldX = function() {
        return m.x
    };
    this.getOldY = function() {
        return m.y
    };
    this.getType = function() {
        return a
    };
    this.deleteForm = function() {
        g.off("mousedown", l);
        g.off("pressmove", p);
        g.off("pressup", k);
        e.removeChild(g)
    };
    this._setCarHighlight = function(a, b) {
        var c = s_oSpriteLibrary.getSprite("car_highlight"),
            d = c.width / 7,
            f = c.height / 3;
        c = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: d,
                height: f,
                regX: d,
                regY: 0
            },
            animations: {
                idle: [0, 19]
            }
        });
        q = createSprite(c, "idle", d, 0, d, f);
        q.rotation = -90;
        q.x = a;
        q.y = b;
        q.regX = -8;
        e.addChild(q)
    };
    this.showHighlight = function(a) {
        q.visible = a
    };
    this._init(b, c, a, d, e)
}

function CLevelBut(b, c, a, d, e, g) {
    var l, p, k, f = [],
        n, q, m, v, A, F;
    this._init = function(a, b, c, d, e, f) {
        q = new createjs.Container;
        q.x = a;
        q.y = b;
        f.addChild(q);
        p = [];
        k = [];
        a = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: d ? c.width / 2 - 5 : c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        l = d;
        m = createSprite(a, "state_" + l, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        q.mouseEnabled = d;
        m.stop();
        s_bMobile || (q.cursor = "pointer");
        q.addChild(m);
        c = new createjs.Text(e, "60px " +
            FONT, "#0075b8");
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 200;
        c.outline = 8;
        q.addChild(c);
        c = new createjs.Text(e, "60px " + FONT, "#FFFFFF");
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 200;
        q.addChild(c);
        n = [];
        c = s_oSpriteLibrary.getSprite("star_empty");
        for (e = 0; 3 > e; e++) n[e] = createBitmap(c), n[e].regX = c.width / 2, n[e].regY = c.height / 2, n[e].scaleX = n[e].scaleY = .5, n[e].x = -30 + 30 * e, n[e].y = -70 - (0 === e % 2 ? 0 : 10), n[e].rotation = -20 + 20 * e, n[e].visible = !1, q.addChild(n[e]);
        this._initListener()
    };
    this.unload =
        function() {
            q.off("mousedown", v);
            q.off("pressup", A);
            g.removeChild(q)
        };
    this._initListener = function() {
        v = q.on("mousedown", this.buttonDown);
        A = q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        p[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        p[a] = b;
        k[a] = c;
        f = d
    };
    this.ifClickable = function() {
        return !0 === q.mouseEnabled ? 1 : 0
    };
    this.setActive = function(a, b) {
        l = b;
        m.gotoAndStop("state_" + l);
        q.mouseEnabled = !0
    };
    this.buttonRelease = function() {
        F && (q.scaleX = 1, q.scaleY = 1);
        playSound("click",
            1, !1);
        l = !l;
        m.gotoAndStop("state_" + l);
        p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(k[ON_MOUSE_UP], f)
    };
    this.buttonDown = function() {
        F && (q.scaleX = .9, q.scaleY = .9);
        p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], f)
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.setVisible = function(a) {
        q.visible = a
    };
    this.setStars = function(a) {
        for (var b = s_oSpriteLibrary.getSprite("star_filled"), c = 0; 3 > c; c++) n[c].visible = !0, c < a && (n[c].image = b)
    };
    this.pulseAnimation = function() {
        var a = this;
        F = createjs.Tween.get(q).to({
            scaleX: .9,
            scaleY: .9
        }, 850, createjs.Ease.quadOut).to({
            scaleX: 1,
            scaleY: 1
        }, 650, createjs.Ease.quadIn).call(function() {
            a.pulseAnimation()
        })
    };
    this._init(b, c, a, d, e, g)
}

function CLevelMenu() {
    var b, c, a, d, e, g, l, p, k, f, n, q, m, v, A = [],
        F, B, I, K, y, G, H, w, C, r, J = null,
        P = null;
    this._init = function() {
        G = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(G);
        r = new createjs.Shape;
        r.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(r);
        var x = s_oSpriteLibrary.getSprite("msg_box");
        G = createBitmap(x);
        G.regX = x.width / 2;
        G.regY = x.height / 2;
        G.x = CANVAS_WIDTH / 2;
        G.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(G);
        v = new createjs.Text(TEXT_SELECT_LEVEL,
            " 80px " + FONT, "#0075b8");
        v.x = CANVAS_WIDTH / 2;
        v.y = 570;
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.lineWidth = 1E3;
        v.outline = 8;
        s_oStage.addChild(v);
        v = new createjs.Text(TEXT_SELECT_LEVEL, " 80px " + FONT, "#FFFFFF");
        v.x = CANVAS_WIDTH / 2;
        v.y = 570;
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.lineWidth = 1E3;
        s_oStage.addChild(v);
        var z = TEXT_TOTAL_SCORE + ": " + s_oLocalStorage.getTotalScore();
        b = 20;
        c = CANVAS_HEIGHT - 60;
        y = new CFormatText(b, c, z, "#FFFFFF", s_oStage, "#0075b8", 50);
        y.setWidth(1E3);
        y.setAlign("left");
        z = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - z.height / 2 - 10;
        n = z.height / 2 + 16;
        H = new CGfxButton(f, n, z, s_oStage);
        H.addEventListener(ON_MOUSE_UP, this._onExit, this);
        p = f - z.width - 10;
        k = z.height / 2 + 16;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"), w = new CToggle(p, k, z, s_bAudioActive, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        z = window.document;
        var M = z.documentElement;
        J = M.requestFullscreen || M.mozRequestFullScreen || M.webkitRequestFullScreen ||
            M.msRequestFullscreen;
        P = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (J = !1);
        J && screenfull.enabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), g = z.width / 4 + 10, l = z.height / 2 + 16, C = new CToggle(g, l, z, s_bFullscreen, s_oStage), C.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = 50;
        m = 0;
        F = [];
        x = Math.floor((x.width - 100) / NUM_COLS_PAGE_LEVEL) / 2;
        for (M = z = 0; M < NUM_COLS_PAGE_LEVEL; M++) F.push(z), z += 2 * x;
        B = [];
        A = [];
        this._createNewLevelPage(0,
            s_oLevelSettings.getLevels().length);
        if (1 < B.length) {
            for (x = 1; x < B.length; x++) B[x].visible = !1;
            d = CANVAS_WIDTH - 620;
            e = CANVAS_HEIGHT - 520;
            I = new CGfxButton(d, e, s_oSpriteLibrary.getSprite("but_right"), s_oStage);
            I.addEventListener(ON_MOUSE_UP, this._onRight, this);
            a = CANVAS_HEIGHT - 520;
            K = new CGfxButton(620, a, s_oSpriteLibrary.getSprite("but_left"), s_oStage);
            K.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        this.setCurPageToLastLevel()
    };
    this.unload = function() {
        for (var a =
                0; a < NUM_LEVELS; a++) A[a].unload();
        J && screenfull.enabled && C.unload();
        1 < B.length && (I.unload(), K.unload());
        s_oLevelMenu = null;
        s_oStage.removeAllChildren()
    };
    this.refreshButtonPos = function(a, d) {
        H.setPosition(f - a, d + n);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || w.setPosition(p - a, d + k);
        J && screenfull.enabled && C.setPosition(g + a, l + d);
        y.setPosition(b + a, c - d)
    };
    this._checkBoundLimits = function() {
        for (var a = s_oSpriteLibrary.getSprite("level_sprite"), b = 0, c = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * q, d = 0; b < c;) b += a.height + 20, d++;
        NUM_ROWS_PAGE_LEVEL >
            d && (NUM_ROWS_PAGE_LEVEL = d);
        c = b = 0;
        d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("level_sprite"); c < d;) c += a.width / 2 + 5, b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    };
    this._createNewLevelPage = function(a, b) {
        var c = new createjs.Container;
        s_oStage.addChild(c);
        B.push(c);
        for (var d = 0, e = 0, f = 1, g = !1, l = s_oSpriteLibrary.getSprite("level_sprite"), h, k = a; k < b; k++)
            if (h = k + 1, h = new CLevelBut(F[d] + l.width / 4, e + l.height / 2, l, h > s_iLastLevel ? !1 : !0, h, c), 0 === k ? h.addEventListenerWithParams(ON_MOUSE_UP, this._onClickHelp,
                    this, k) : h.addEventListenerWithParams(ON_MOUSE_UP, this._onClick, this, k), k < s_iLastLevel - 1 ? h.setStars(s_aStars[k]) : k === s_iLastLevel - 1 && h.pulseAnimation(), A.push(h), d++, d === F.length && (d = 0, e += l.height + 20, f++, f > NUM_ROWS_PAGE_LEVEL)) {
                g = !0;
                break
            } null !== c.getBounds() && (c.x = CANVAS_WIDTH / 2, c.y = 720, c.regX = c.getBounds().width / 2);
        g && A.length < s_oLevelSettings.getLevels().length && this._createNewLevelPage(k + 1, b)
    };
    this._onRight = function() {
        B[m].visible = !1;
        m++;
        m >= B.length && (m = 0);
        B[m].visible = !0
    };
    this._onLeft = function() {
        B[m].visible = !1;
        m--;
        0 > m && (m = B.length - 1);
        B[m].visible = !0
    };
    this.setCurPageToLastLevel = function() {
        for (var a = 0; a < B.length; a++) B[a].visible = !1;
        m = Math.floor(s_iLastLevel / (NUM_ROWS_PAGE_LEVEL * NUM_COLS_PAGE_LEVEL));
        m >= Math.floor(NUM_LEVELS / (NUM_ROWS_PAGE_LEVEL * NUM_COLS_PAGE_LEVEL)) && (m = NUM_LEVELS / (NUM_ROWS_PAGE_LEVEL * NUM_COLS_PAGE_LEVEL) - 1);
        B[m].visible = !0
    };
    this._onNumModeToggle = function(a) {
        a === NUM_ACTIVE ? ((void 0).setActive(!1), (void 0).setActive(!0)) : ((void 0).setActive(!0), (void 0).setActive(!1))
    };
    this._onAudioToggle =
        function() {
            Howler.mute(s_bAudioActive);
            s_bAudioActive = !s_bAudioActive
        };
    this._onClickHelp = function(a) {
        A[a].ifClickable() && (s_oLevelMenu.unload(), s_oMain.gotoHelp(a))
    };
    this._onClick = function(a) {
        A[a].ifClickable() && (s_oLevelMenu.unload(), s_oMain.gotoGame(a))
    };
    this._onModeAdventure = function() {
        _oMode.setActive(!0)
    };
    this._onExit = function() {
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        s_oLevelMenu.unload();
        s_oMain.gotoMenu()
    };
    this.resetFullscreenBut = function() {
        J && screenfull.enabled &&
            C.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? P.call(window.document) : J.call(window.document.documentElement);
        sizeHandler()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CHelpPanel(b) {
    var c, a, d, e;
    this._init = function(b) {
        var g = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c = createBitmap(b);
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.regX = b.width / 2;
        c.regY = b.height / 2;
        a = new createjs.Container;
        a.addChild(g, e, c);
        (new CFormatText(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 280, TEXT_HELP, "#FFFFFF", a, "#0075b8", 50)).setWidth(730);
        s_oStage.addChild(a);
        b = s_oSpriteLibrary.getSprite("but_play_small");
        d = new CGfxButton(CANVAS_WIDTH / 2 + 334, CANVAS_HEIGHT - 500, b, a);
        var k = this;
        createjs.Tween.get(a).to({
            alpha: 1
        }, 500).call(function() {
            d.addEventListener(ON_MOUSE_DOWN, k._onButPlayRelease, this)
        });
        g = new createjs.Container;
        g.x = CANVAS_WIDTH / 2 - 32;
        g.y = CANVAS_HEIGHT / 2 + 220;
        g.scaleX = g.scaleY = .65;
        a.addChild(g);
        b = s_oSpriteLibrary.getSprite("car_player");
        var f = createBitmap(b);
        f.regX = b.width / 2;
        f.regY = b.height / 2;
        f.x = -200;
        g.addChild(f);
        b = s_oSpriteLibrary.getSprite("car_1");
        var l = createBitmap(b);
        l.regX = b.width / 2;
        l.regY =
            b.height;
        l.rotation = 90;
        l.x = -40;
        g.addChild(l);
        this.setAnim(f, l)
    };
    this.setAnim = function(a, b) {
        a.x = -200;
        b.y = 0;
        createjs.Tween.get(b).wait(500).to({
            y: -220
        }, 1E3, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(a).to({
                x: 270
            }, 1E3, createjs.Ease.cubicIn).wait(1E3).call(function() {
                g.setAnim(a, b)
            })
        })
    };
    this._onButPlayRelease = function() {
        d.unload();
        s_oStage.removeChild(a);
        s_oMain.gotoGame(0)
    };
    this._init(b);
    var g = this;
    return this
}

function CFormatText(b, c, a, d, e, g, l) {
    var p, k, f, n, q;
    this._init = function(a, b, c, d, e, g, l) {
        p = c;
        n = new createjs.Container;
        n.x = a;
        n.y = b + 15;
        e.addChild(n);
        a = l + "px";
        k = new createjs.Text;
        k.text = p;
        k.font = a + " " + FONT;
        k.color = g;
        k.textAlign = "center";
        k.lineWidth = 100;
        k.outline = 4;
        n.addChild(k);
        f = new createjs.Text;
        f.text = p;
        f.font = a + " " + FONT;
        f.color = d;
        f.textAlign = "center";
        f.lineWidth = 100;
        n.addChild(f)
    };
    this.unload = function() {
        e.removeChild(n)
    };
    this.disableOutline = function() {
        n.removeChild(k)
    };
    this.setVisible = function(a) {
        n.visible =
            a
    };
    this.isVisible = function() {
        return n.visible
    };
    this.setOutline = function(a) {
        k.outline = a
    };
    this.setShadow = function(a) {
        k.shadow = a ? new createjs.Shadow("#333333", 2, 2, 6) : null
    };
    this.setAlign = function(a) {
        k.textAlign = a;
        f.textAlign = a
    };
    this.setWidth = function(a) {
        k.lineWidth = a;
        f.lineWidth = a
    };
    this.setText = function(a) {
        f.text = a;
        k.text = a
    };
    this.setColor = function(a, b) {
        f.color = a;
        k.color = b
    };
    this.setFont = function(a) {
        var b = l + "px";
        f.font = b + " " + a;
        k.font = b + " " + a
    };
    this.getText = function() {
        return n
    };
    this.setPos = function(a) {
        n.y =
            a
    };
    this.getPos = function() {
        return {
            x: n.x,
            y: n.y
        }
    };
    this.playText = function() {
        q = "";
        this.setText("");
        this._slideText(0)
    };
    this._slideText = function(b) {
        q += a[b];
        this.setText(q);
        b < a.length - 1 && setTimeout(function() {
            m._slideText(b + 1)
        }, 25)
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    var m = this;
    this._init(b, c, a, d, e, g, l)
}

function CCreditsPanel() {
    var b, c, a, d, e, g, l, p, k;
    this._init = function() {
        p = new createjs.Container;
        s_oStage.addChild(p);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.addChild(e);
        var f = s_oSpriteLibrary.getSprite("msg_box");
        c = createBitmap(f);
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.regX = f.width / 2;
        c.regY = f.height / 2;
        p.addChild(c);
        g = new createjs.Shape;
        g.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .01;
        k = g.on("click",
            this._onLogoButRelease);
        p.addChild(g);
        f = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH / 2 + 300;
        a = new CGfxButton(b, 750, f, p);
        a.addEventListener(ON_MOUSE_UP, this.unload, this);
        d = new createjs.Text("DEVELOPED BY", "42px " + FONT, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = 820;
        d.textAlign = "center";
        p.addChild(d);
        f = s_oSpriteLibrary.getSprite("ctl_logo");
        var n = createBitmap(f);
        n.regX = f.width / 2;
        n.regY = f.height / 2;
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2;
        p.addChild(n);
        l = new createjs.Text("atterolabs.com", "42px " + FONT,
            "#ffffff");
        l.x = CANVAS_WIDTH / 2;
        l.y = 1060;
        l.textAlign = "center";
        p.addChild(l)
    };
    this.unload = function() {
        g.off("click", k);
        a.unload();
        a = null;
        s_oStage.removeChild(p)
    };
    this._onLogoButRelease = function() {
        window.open("https://atterolabs.com/")
    };
    this._init()
}
var LOCALSTORAGE_LAST_LEVEL = "last_level",
    LOCALSTORAGE_SCORE = "scores",
    LOCALSTORAGE_STARS = "stars",
    s_iLastLevel = 60,
    s_aScore = [],
    s_aStars = [];

function CLocalStorage(b) {
    var c = !0;
    this._init = function(a) {
        try {
            var b = window.localStorage.getItem(a);
            this.resetAllData();
            null !== b && void 0 !== b && this.loadData()
        } catch (e) {
            this.resetAllData()
        }
    };
    this.isDirty = function() {
        return 1 < s_iLastLevel ? !0 : !1
    };
    this.isUsed = function() {
        try {
            window.localStorage.setItem("ls_available", "ok")
        } catch (a) {
            c = !1
        }
        return c
    };
    this.resetAllData = function() {
        s_iLastLevel = 60;
        s_aScore = [];
        for (var a = 0; a < NUM_LEVELS; a++) s_aScore[a] = 0;
        s_aStars = [];
        for (a = 0; a < NUM_LEVELS; a++) s_aStars[a] = 0
    };
    this.deleteData =
        function() {
            window.localStorage.removeItem(b);
            s_oLocalStorage.resetAllData()
        };
    this.saveData = function() {
        var a = {};
        a[LOCALSTORAGE_LAST_LEVEL] = s_iLastLevel;
        a[LOCALSTORAGE_SCORE] = s_aScore;
        a[LOCALSTORAGE_STARS] = s_aStars;
        window.localStorage.setItem(b, JSON.stringify(a))
    };
    this.loadData = function() {
        var a = JSON.parse(window.localStorage.getItem(b));
        s_iLastLevel = parseInt(a[LOCALSTORAGE_LAST_LEVEL]);
        for (var c = a[LOCALSTORAGE_SCORE], e = 0; e < c.length; e++) s_aScore[e] = parseInt(c[e]);
        c = a[LOCALSTORAGE_STARS];
        for (e = 0; e < c.length; e++) s_aStars[e] =
            parseInt(c[e])
    };
    this.getTotalScore = function() {
        for (var a = 0, b = 0; b < NUM_LEVELS; b++) a += s_aScore[b];
        return a
    };
    this.getPartialScore = function(a) {
        for (var b = 0, c = 0; c < a; c++) b += s_aScore[c];
        return b
    };
    this._init(b)
}

function CAreYouSurePanel(b, c) {
    var a, d, e, g, l, p, k;
    this._init = function(b, c) {
        p = new createjs.Container;
        s_oStage.addChild(p);
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k = l.on("click", function() {});
        p.addChild(l);
        var f = s_oSpriteLibrary.getSprite("msg_box");
        a = createBitmap(f);
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        a.regX = f.width / 2;
        a.regY = f.height / 2;
        p.addChild(a);
        d = new CFormatText(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 250, TEXT_ARE_YOU_SURE, "#FFFFFF", p, "#0075b8",
            60);
        d.setWidth(780);
        f = s_oSpriteLibrary.getSprite("but_yes");
        e = new CGfxButton(CANVAS_WIDTH / 2 - 200, 1100, f, p);
        e.addEventListener(ON_MOUSE_UP, this._onConfirm, this);
        f = s_oSpriteLibrary.getSprite("but_no");
        g = new CGfxButton(CANVAS_WIDTH / 2 + 200, 1100, f, p);
        g.addEventListener(ON_MOUSE_UP, this._onNegate, this);
        g.pulseAnimation();
        this.hide()
    };
    this.unload = function() {
        e.unload();
        e = null;
        g.unload();
        g = null;
        l.off("click", k);
        s_oStage.removeChild(p)
    };
    this.show = function() {
        p.visible = !0
    };
    this.hide = function() {
        p.visible = !1
    };
    this._onConfirm =
        function() {
            b && b()
        };
    this._onNegate = function() {
        f.hide();
        c && c()
    };
    this.setMessage = function(a) {
        d.setText(a)
    };
    this._init(b, c);
    var f = this
}

function CMsgBox(b, c) {
    var a, d, e, g, l, p;
    this._init = function(b, c) {
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = 0;
        p = g.on("mousedown", function() {});
        s_oStage.addChild(g);
        (new createjs.Tween.get(g)).to({
            alpha: .7
        }, 500);
        l = new createjs.Container;
        s_oStage.addChild(l);
        var f = s_oSpriteLibrary.getSprite("msg_box"),
            k = createBitmap(f);
        k.regX = f.width / 2;
        k.regY = f.height / 2;
        l.addChild(k);
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2;
        a = new createjs.Text(b, " 26px " + FONT, "#000000");
        a.y = -f.height / 2 + 60;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 550;
        a.outline = 5;
        l.addChild(a);
        d = new createjs.Text(b, " 26px " + FONT, "#ffffff");
        d.y = a.y;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = 550;
        l.addChild(d);
        e = new CGfxButton(0, 80, s_oSpriteLibrary.getSprite("but_yes"), l);
        e.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        e.pulseAnimation()
    };
    this._onButYes = function() {
        k.unload();
        c && c()
    };
    this.changeMessage = function(b) {
        a.text = b;
        d.text = b
    };
    this.unload = function() {
        e.unload();
        s_oStage.removeChild(g);
        s_oStage.removeChild(l);
        g.off("mousedown", p)
    };
    var k = this;
    this._init(b, c)
};