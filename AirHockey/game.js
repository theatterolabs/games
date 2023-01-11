var retryCount = 0;
var _STRINGS = {
    Splash: {
        Loading: "Loading",
        TapToStart: "TAP TO START"
    },
    Menu: {
        ButtonEasy: "EASY",
        ButtonNormal: "NORMAL",
        ButtonDifficult: "DIFFICULT",
        PopUpSettingsTitle: "SETTINGS",
        GameMode: "GAME MODE :",
        GameModeClassic: "CLASSIC",
        GameModeTimed: "TIMED",
        GameModeOptions: "LENGTH OF GAME",
        GameModeOptionsClassic: "(POINTS) :",
        GameModeOptionsTimed: "(MINUTES) :",
        TutorialQuestion: "Play Tutorial ?",
        Yes: "Yes",
        No: "No",
        SetGameMode: "Click this button to setup game mode !"
    },
    Game: {
        PopUpPauseTitle: "PAUSE",
        ResultTitle: "GAME RESULT",
        ResultWin: "YOU WIN",
        ResultLose: "YOU LOSE",
        ResultDraw: "DRAW",
        Goal: "GOAL",
        Tutorial1: "Drag the paddle to move",
        Tutorial2: "Hit the puck with the paddle to shoot or defend",
        Tutorial3: "Are you ready ?",
        ButtonReady: "Ready",
        ButtonNext: "Next"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.atterolabs.com",
        NewWindow: !0
    }
};
! function(b, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return c(b)
    } : c(b)
}("undefined" != typeof window ? window : this, function(b, c) {
    function d(b, c) {
        c = c || z;
        var d = c.createElement("script");
        d.text = b;
        c.head.appendChild(d).parentNode.removeChild(d)
    }

    function e(b) {
        var c = !!b && "length" in b && b.length,
            d = l.type(b);
        return "function" !== d && !l.isWindow(b) && ("array" === d || 0 === c || "number" ==
            typeof c && 0 < c && c - 1 in b)
    }

    function f(b, c) {
        return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
    }

    function j(b, c, d) {
        return l.isFunction(c) ? l.grep(b, function(b, x) {
            return !!c.call(b, x, b) !== d
        }) : c.nodeType ? l.grep(b, function(b) {
            return b === c !== d
        }) : "string" != typeof c ? l.grep(b, function(b) {
            return -1 < Ba.call(c, b) !== d
        }) : Bc.test(c) ? l.filter(c, b, d) : (c = l.filter(c, b), l.grep(b, function(b) {
            return -1 < Ba.call(c, b) !== d && 1 === b.nodeType
        }))
    }

    function m(b, c) {
        for (;
            (b = b[c]) && 1 !== b.nodeType;);
        return b
    }

    function p(b) {
        return b
    }

    function g(b) {
        throw b;
    }

    function n(b, c, d, g) {
        var e;
        try {
            b && l.isFunction(e = b.promise) ? e.call(b).done(c).fail(d) : b && l.isFunction(e = b.then) ? e.call(b, c, d) : c.apply(void 0, [b].slice(g))
        } catch (f) {
            d.apply(void 0, [f])
        }
    }

    function q() {
        z.removeEventListener("DOMContentLoaded", q);
        b.removeEventListener("load", q);
        l.ready()
    }

    function r() {
        this.expando = l.expando + r.uid++
    }

    function s(b, c, d) {
        var g;
        if (void 0 === d && 1 === b.nodeType)
            if (g = "data-" + c.replace(Cc, "-$&").toLowerCase(), d = b.getAttribute(g), "string" == typeof d) {
                try {
                    d = "true" ===
                        d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Dc.test(d) ? JSON.parse(d) : d)
                } catch (e) {}
                O.set(b, c, d)
            } else d = void 0;
        return d
    }

    function u(b, c, d, g) {
        var e, f = 1,
            n = 20,
            j = g ? function() {
                return g.cur()
            } : function() {
                return l.css(b, c, "")
            },
            q = j(),
            m = d && d[3] || (l.cssNumber[c] ? "" : "px"),
            p = (l.cssNumber[c] || "px" !== m && +q) && Ca.exec(l.css(b, c));
        if (p && p[3] !== m) {
            m = m || p[3];
            d = d || [];
            p = +q || 1;
            do f = f || ".5", p /= f, l.style(b, c, p + m); while (f !== (f = j() / q) && 1 !== f && --n)
        }
        return d && (p = +p || +q || 0, e = d[1] ? p + (d[1] + 1) * d[2] : +d[2], g && (g.unit = m, g.start = p, g.end =
            e)), e
    }

    function t(b, c) {
        for (var d, g, e = [], f = 0, n = b.length; f < n; f++)
            if (g = b[f], g.style)
                if (d = g.style.display, c) {
                    if ("none" === d && (e[f] = C.get(g, "display") || null, e[f] || (g.style.display = "")), "" === g.style.display && La(g)) {
                        d = e;
                        var j = f,
                            q, m = void 0;
                        q = g.ownerDocument;
                        var p = g.nodeName;
                        q = (g = zb[p]) ? g : (m = q.body.appendChild(q.createElement(p)), g = l.css(m, "display"), m.parentNode.removeChild(m), "none" === g && (g = "block"), zb[p] = g, g);
                        d[j] = q
                    }
                } else "none" !== d && (e[f] = "none", C.set(g, "display", d));
        for (f = 0; f < n; f++) null != e[f] && (b[f].style.display =
            e[f]);
        return b
    }

    function y(b, c) {
        var d;
        return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? l.merge([b], d) : d
    }

    function L(b, c) {
        for (var d = 0, g = b.length; d < g; d++) C.set(b[d], "globalEval", !c || C.get(c[d], "globalEval"))
    }

    function D(b, c, d, g, e) {
        for (var f, n, j, q, m = c.createDocumentFragment(), p = [], r = 0, s = b.length; r < s; r++)
            if (f = b[r], f || 0 === f)
                if ("object" === l.type(f)) l.merge(p, f.nodeType ? [f] : f);
                else if (Ec.test(f)) {
            n =
                n || m.appendChild(c.createElement("div"));
            j = (Ab.exec(f) || ["", ""])[1].toLowerCase();
            j = R[j] || R._default;
            n.innerHTML = j[1] + l.htmlPrefilter(f) + j[2];
            for (j = j[0]; j--;) n = n.lastChild;
            l.merge(p, n.childNodes);
            n = m.firstChild;
            n.textContent = ""
        } else p.push(c.createTextNode(f));
        m.textContent = "";
        for (r = 0; f = p[r++];)
            if (g && -1 < l.inArray(f, g)) e && e.push(f);
            else if (q = l.contains(f.ownerDocument, f), n = y(m.appendChild(f), "script"), q && L(n), d)
            for (j = 0; f = n[j++];) Bb.test(f.type || "") && d.push(f);
        return m
    }

    function ea() {
        return !0
    }

    function E() {
        return !1
    }

    function Da() {
        try {
            return z.activeElement
        } catch (b) {}
    }

    function ua(b, c, d, g, e, f) {
        var n, j;
        if ("object" == typeof c) {
            "string" != typeof d && (g = g || d, d = void 0);
            for (j in c) ua(b, j, d, g, c[j], f);
            return b
        }
        if (null == g && null == e ? (e = d, g = d = void 0) : null == e && ("string" == typeof d ? (e = g, g = void 0) : (e = g, g = d, d = void 0)), !1 === e) e = E;
        else if (!e) return b;
        return 1 === f && (n = e, e = function(b) {
            return l().off(b), n.apply(this, arguments)
        }, e.guid = n.guid || (n.guid = l.guid++)), b.each(function() {
            l.event.add(this, c, e, g, d)
        })
    }

    function Cb(b, c) {
        return f(b,
            "table") && f(11 !== c.nodeType ? c : c.firstChild, "tr") ? l(">tbody", b)[0] || b : b
    }

    function Fc(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function Gc(b) {
        var c = Hc.exec(b.type);
        return c ? b.type = c[1] : b.removeAttribute("type"), b
    }

    function Db(b, c) {
        var d, g, e, f, n, j;
        if (1 === c.nodeType) {
            if (C.hasData(b) && (d = C.access(b), g = C.set(c, d), j = d.events))
                for (e in delete g.handle, g.events = {}, j) {
                    d = 0;
                    for (g = j[e].length; d < g; d++) l.event.add(c, e, j[e][d])
                }
            O.hasData(b) && (f = O.access(b), n = l.extend({}, f), O.set(c, n))
        }
    }

    function va(b,
        c, g, e) {
        c = Eb.apply([], c);
        var f, n, j, q, m = 0,
            p = b.length,
            r = p - 1,
            s = c[0],
            u = l.isFunction(s);
        if (u || 1 < p && "string" == typeof s && !H.checkClone && Ic.test(s)) return b.each(function(d) {
            var f = b.eq(d);
            u && (c[0] = s.call(this, d, f.html()));
            va(f, c, g, e)
        });
        if (p && (f = D(c, b[0].ownerDocument, !1, b, e), n = f.firstChild, 1 === f.childNodes.length && (f = n), n || e)) {
            n = l.map(y(f, "script"), Fc);
            for (j = n.length; m < p; m++) q = f, m !== r && (q = l.clone(q, !0, !0), j && l.merge(n, y(q, "script"))), g.call(b[m], q, m);
            if (j) {
                f = n[n.length - 1].ownerDocument;
                l.map(n, Gc);
                for (m = 0; m <
                    j; m++) q = n[m], Bb.test(q.type || "") && !C.access(q, "globalEval") && l.contains(f, q) && (q.src ? l._evalUrl && l._evalUrl(q.src) : d(q.textContent.replace(Kc, ""), f))
            }
        }
        return b
    }

    function Fb(b, c, d) {
        for (var g = c ? l.filter(c, b) : b, e = 0; null != (c = g[e]); e++) d || 1 !== c.nodeType || l.cleanData(y(c)), c.parentNode && (d && l.contains(c.ownerDocument, c) && L(y(c, "script")), c.parentNode.removeChild(c));
        return b
    }

    function Ea(b, c, d) {
        var g, e, f, n, j = b.style;
        return d = d || Ma(b), d && (n = d.getPropertyValue(c) || d[c], "" !== n || l.contains(b.ownerDocument, b) ||
            (n = l.style(b, c)), !H.pixelMarginRight() && fb.test(n) && Gb.test(c) && (g = j.width, e = j.minWidth, f = j.maxWidth, j.minWidth = j.maxWidth = j.width = n, n = d.width, j.width = g, j.minWidth = e, j.maxWidth = f)), void 0 !== n ? n + "" : n
    }

    function Hb(b, c) {
        return {
            get: function() {
                return b() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function Ib(b) {
        var c = l.cssProps[b];
        if (!c) {
            var c = l.cssProps,
                d;
            a: if (d = b, !(d in Jb)) {
                for (var g = d[0].toUpperCase() + d.slice(1), e = Kb.length; e--;)
                    if (d = Kb[e] + g, d in Jb) break a;
                d = void 0
            } c = c[b] = d || b
        }
        return c
    }

    function Lb(b, c, d) {
        return (b = Ca.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
    }

    function Mb(b, c, d, g, e) {
        var f = 0;
        for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (f += l.css(b, d + ja[c], !0, e)), g ? ("content" === d && (f -= l.css(b, "padding" + ja[c], !0, e)), "margin" !== d && (f -= l.css(b, "border" + ja[c] + "Width", !0, e))) : (f += l.css(b, "padding" + ja[c], !0, e), "padding" !== d && (f += l.css(b, "border" + ja[c] + "Width", !0, e)));
        return f
    }

    function Nb(b, c, d) {
        var g, e = Ma(b),
            f = Ea(b, c, e),
            n = "border-box" === l.css(b, "boxSizing",
                !1, e);
        return fb.test(f) ? f : (g = n && (H.boxSizingReliable() || f === b.style[c]), "auto" === f && (f = b["offset" + c[0].toUpperCase() + c.slice(1)]), f = parseFloat(f) || 0, f + Mb(b, c, d || (n ? "border" : "content"), g, e) + "px")
    }

    function P(b, c, d, g, e) {
        return new P.prototype.init(b, c, d, g, e)
    }

    function gb() {
        Na && (!1 === z.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(gb) : b.setTimeout(gb, l.fx.interval), l.fx.tick())
    }

    function Ob() {
        return b.setTimeout(function() {
            wa = void 0
        }), wa = l.now()
    }

    function Oa(b, c) {
        var d, g = 0,
            e = {
                height: b
            };
        for (c = c ?
            1 : 0; 4 > g; g += 2 - c) d = ja[g], e["margin" + d] = e["padding" + d] = b;
        return c && (e.opacity = e.width = b), e
    }

    function Pb(b, c, d) {
        for (var g, e = (W.tweeners[c] || []).concat(W.tweeners["*"]), f = 0, l = e.length; f < l; f++)
            if (g = e[f].call(d, c, b)) return g
    }

    function W(b, c, d) {
        var g, e, f = 0,
            n = W.prefilters.length,
            j = l.Deferred().always(function() {
                delete q.elem
            }),
            q = function() {
                if (e) return !1;
                for (var c = wa || Ob(), c = Math.max(0, m.startTime + m.duration - c), d = 1 - (c / m.duration || 0), B = 0, g = m.tweens.length; B < g; B++) m.tweens[B].run(d);
                return j.notifyWith(b, [m, d,
                    c
                ]), 1 > d && g ? c : (g || j.notifyWith(b, [m, 1, 0]), j.resolveWith(b, [m]), !1)
            },
            m = j.promise({
                elem: b,
                props: l.extend({}, c),
                opts: l.extend(!0, {
                    specialEasing: {},
                    easing: l.easing._default
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: wa || Ob(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, d) {
                    var B = l.Tween(b, m.opts, c, d, m.opts.specialEasing[c] || m.opts.easing);
                    return m.tweens.push(B), B
                },
                stop: function(c) {
                    var d = 0,
                        B = c ? m.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d < B; d++) m.tweens[d].run(1);
                    return c ? (j.notifyWith(b,
                        [m, 1, 0]), j.resolveWith(b, [m, c])) : j.rejectWith(b, [m, c]), this
                }
            });
        c = m.props;
        d = m.opts.specialEasing;
        var p, r, s, u;
        for (g in c)
            if (p = l.camelCase(g), r = d[p], s = c[g], Array.isArray(s) && (r = s[1], s = c[g] = s[0]), g !== p && (c[p] = s, delete c[g]), u = l.cssHooks[p], u && "expand" in u)
                for (g in s = u.expand(s), delete c[p], s) g in c || (c[g] = s[g], d[g] = r);
            else d[p] = r;
        for (; f < n; f++)
            if (g = W.prefilters[f].call(m, b, c, m.opts)) return l.isFunction(g.stop) && (l._queueHooks(m.elem, m.opts.queue).stop = l.proxy(g.stop, g)), g;
        return l.map(c, Pb, m), l.isFunction(m.opts.start) &&
            m.opts.start.call(b, m), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always), l.fx.timer(l.extend(q, {
                elem: b,
                anim: m,
                queue: m.opts.queue
            })), m
    }

    function ka(b) {
        return (b.match(S) || []).join(" ")
    }

    function la(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }

    function hb(b, c, d, g) {
        var e;
        if (Array.isArray(c)) l.each(c, function(c, B) {
            d || Lc.test(b) ? g(b, B) : hb(b + "[" + ("object" == typeof B && null != B ? c : "") + "]", B, d, g)
        });
        else if (d || "object" !== l.type(c)) g(b, c);
        else
            for (e in c) hb(b +
                "[" + e + "]", c[e], d, g)
    }

    function Qb(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var g, e = 0,
                f = c.toLowerCase().match(S) || [];
            if (l.isFunction(d))
                for (; g = f[e++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
        }
    }

    function Rb(b, c, d, g) {
        function e(j) {
            var q;
            return f[j] = !0, l.each(b[j] || [], function(b, x) {
                var l = x(c, d, g);
                return "string" != typeof l || n || f[l] ? n ? !(q = l) : void 0 : (c.dataTypes.unshift(l), e(l), !1)
            }), q
        }
        var f = {},
            n = b === ib;
        return e(c.dataTypes[0]) || !f["*"] && e("*")
    }

    function jb(b,
        c) {
        var d, g, e = l.ajaxSettings.flatOptions || {};
        for (d in c) void 0 !== c[d] && ((e[d] ? b : g || (g = {}))[d] = c[d]);
        return g && l.extend(!0, b, g), b
    }
    var ma = [],
        z = b.document,
        Mc = Object.getPrototypeOf,
        na = ma.slice,
        Eb = ma.concat,
        kb = ma.push,
        Ba = ma.indexOf,
        Pa = {},
        Sb = Pa.toString,
        Qa = Pa.hasOwnProperty,
        Tb = Qa.toString,
        Nc = Tb.call(Object),
        H = {},
        l = function(b, c) {
            return new l.fn.init(b, c)
        },
        Oc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Pc = /^-ms-/,
        Qc = /-([a-z])/g,
        Rc = function(b, c) {
            return c.toUpperCase()
        };
    l.fn = l.prototype = {
        jquery: "3.2.1",
        constructor: l,
        length: 0,
        toArray: function() {
            return na.call(this)
        },
        get: function(b) {
            return null == b ? na.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = l.merge(this.constructor(), b);
            return b.prevObject = this, b
        },
        each: function(b) {
            return l.each(this, b)
        },
        map: function(b) {
            return this.pushStack(l.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        slice: function() {
            return this.pushStack(na.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var c = this.length;
            b = +b + (0 > b ? c : 0);
            return this.pushStack(0 <= b && b < c ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: kb,
        sort: ma.sort,
        splice: ma.splice
    };
    l.extend = l.fn.extend = function() {
        var b, c, d, g, e, f, n = arguments[0] || {},
            j = 1,
            q = arguments.length,
            m = !1;
        "boolean" == typeof n && (m = n, n = arguments[j] || {}, j++);
        "object" == typeof n || l.isFunction(n) || (n = {});
        for (j === q && (n = this, j--); j < q; j++)
            if (null != (b = arguments[j]))
                for (c in b) d = n[c], g = b[c], n !== g && (m && g && (l.isPlainObject(g) || (e = Array.isArray(g))) ? (e ? (e = !1, f = d &&
                    Array.isArray(d) ? d : []) : f = d && l.isPlainObject(d) ? d : {}, n[c] = l.extend(m, f, g)) : void 0 !== g && (n[c] = g));
        return n
    };
    l.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === l.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(b) {
            var c = l.type(b);
            return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
        },
        isPlainObject: function(b) {
            var c, d;
            return !(!b || "[object Object]" !==
                Sb.call(b)) && (!(c = Mc(b)) || (d = Qa.call(c, "constructor") && c.constructor, "function" == typeof d && Tb.call(d) === Nc))
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? Pa[Sb.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            d(b)
        },
        camelCase: function(b) {
            return b.replace(Pc, "ms-").replace(Qc, Rc)
        },
        each: function(b, c) {
            var d, g = 0;
            if (e(b))
                for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
            else
                for (g in b)
                    if (!1 === c.call(b[g], g,
                            b[g])) break;
            return b
        },
        trim: function(b) {
            return null == b ? "" : (b + "").replace(Oc, "")
        },
        makeArray: function(b, c) {
            var d = c || [];
            return null != b && (e(Object(b)) ? l.merge(d, "string" == typeof b ? [b] : b) : kb.call(d, b)), d
        },
        inArray: function(b, c, d) {
            return null == c ? -1 : Ba.call(c, b, d)
        },
        merge: function(b, c) {
            for (var d = +c.length, g = 0, e = b.length; g < d; g++) b[e++] = c[g];
            return b.length = e, b
        },
        grep: function(b, c, d) {
            for (var g = [], e = 0, f = b.length, l = !d; e < f; e++) d = !c(b[e], e), d !== l && g.push(b[e]);
            return g
        },
        map: function(b, c, d) {
            var g, f, l = 0,
                n = [];
            if (e(b))
                for (g =
                    b.length; l < g; l++) f = c(b[l], l, d), null != f && n.push(f);
            else
                for (l in b) f = c(b[l], l, d), null != f && n.push(f);
            return Eb.apply([], n)
        },
        guid: 1,
        proxy: function(b, c) {
            var d, g, e;
            if ("string" == typeof c && (d = b[c], c = b, b = d), l.isFunction(b)) return g = na.call(arguments, 2), e = function() {
                return b.apply(c || this, g.concat(na.call(arguments)))
            }, e.guid = b.guid = b.guid || l.guid++, e
        },
        now: Date.now,
        support: H
    });
    "function" == typeof Symbol && (l.fn[Symbol.iterator] = ma[Symbol.iterator]);
    l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(b, c) {
            Pa["[object " + c + "]"] = c.toLowerCase()
        });
    var fa, lb = b,
        F = function(b, c, d, g) {
            var e, f, l, n, j, q = c && c.ownerDocument,
                m = c ? c.nodeType : 9;
            if (d = d || [], "string" != typeof b || !b || 1 !== m && 9 !== m && 11 !== m) return d;
            if (!g && ((c ? c.ownerDocument || c : T) !== G && ga(c), c = c || G, U)) {
                if (11 !== m && (n = Sc.exec(b)))
                    if (e = n[1])
                        if (9 === m) {
                            if (!(f = c.getElementById(e))) return d;
                            if (f.id === e) return d.push(f), d
                        } else {
                            if (q && (f = q.getElementById(e)) && Fa(c, f) && f.id === e) return d.push(f), d
                        }
                else {
                    if (n[2]) return ha.apply(d, c.getElementsByTagName(b)),
                        d;
                    if ((e = n[3]) && J.getElementsByClassName && c.getElementsByClassName) return ha.apply(d, c.getElementsByClassName(e)), d
                }
                if (J.qsa && !Ra[b + " "] && (!N || !N.test(b))) {
                    if (1 !== m) q = c, j = b;
                    else if ("object" !== c.nodeName.toLowerCase()) {
                        (l = c.getAttribute("id")) ? l = l.replace(Ub, Vb): c.setAttribute("id", l = K);
                        f = Ga(b);
                        for (e = f.length; e--;) f[e] = "#" + l + " " + Sa(f[e]);
                        j = f.join(",");
                        q = mb.test(b) && nb(c.parentNode) || c
                    }
                    if (j) try {
                        return ha.apply(d, q.querySelectorAll(j)), d
                    } catch (p) {} finally {
                        l === K && c.removeAttribute("id")
                    }
                }
            }
            return Wb(b.replace(Ta,
                "$1"), c, d, g)
        },
        ob = function() {
            function b(d, g) {
                return c.push(d + " ") > A.cacheLength && delete b[c.shift()], b[d + " "] = g
            }
            var c = [];
            return b
        },
        X = function(b) {
            return b[K] = !0, b
        },
        Z = function(b) {
            var c = G.createElement("fieldset");
            try {
                return !!b(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        },
        pb = function(b, c) {
            for (var d = b.split("|"), g = d.length; g--;) A.attrHandle[d[g]] = c
        },
        Xb = function(b, c) {
            var d = c && b,
                g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (g) return g;
            if (d)
                for (; d = d.nextSibling;)
                    if (d ===
                        c) return -1;
            return b ? 1 : -1
        },
        Tc = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Uc = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        Yb = function(b) {
            return function(c) {
                return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Vc(c) === b : c.disabled === b : "label" in c && c.disabled === b
            }
        },
        oa = function(b) {
            return X(function(c) {
                return c = +c, X(function(d, g) {
                    for (var e, f = b([], d.length, c), l = f.length; l--;) d[e = f[l]] && (d[e] = !(g[e] = d[e]))
                })
            })
        },
        nb = function(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        },
        Zb = function() {},
        Sa = function(b) {
            for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
            return g
        },
        Ua = function(b, c, d) {
            var g = c.dir,
                e = c.next,
                f = e || g,
                l = d && "parentNode" === f,
                n = Wc++;
            return c.first ? function(c, d, e) {
                for (; c = c[g];)
                    if (1 === c.nodeType || l) return b(c, d, e);
                return !1
            } : function(c, d, B) {
                var M, j, q, m = [aa, n];
                if (B)
                    for (; c = c[g];) {
                        if ((1 === c.nodeType ||
                                l) && b(c, d, B)) return !0
                    } else
                        for (; c = c[g];)
                            if (1 === c.nodeType || l)
                                if (q = c[K] || (c[K] = {}), j = q[c.uniqueID] || (q[c.uniqueID] = {}), e && e === c.nodeName.toLowerCase()) c = c[g] || c;
                                else {
                                    if ((M = j[f]) && M[0] === aa && M[1] === n) return m[2] = M[2];
                                    if (j[f] = m, m[2] = b(c, d, B)) return !0
                                } return !1
            }
        },
        qb = function(b) {
            return 1 < b.length ? function(c, d, g) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, g)) return !1;
                return !0
            } : b[0]
        },
        Va = function(b, c, d, g, e) {
            for (var f, l = [], n = 0, j = b.length, q = null != c; n < j; n++)(f = b[n]) && (d && !d(f, g, e) || (l.push(f), q && c.push(n)));
            return l
        },
        rb = function(b, c, d, g, e, f) {
            return g && !g[K] && (g = rb(g)), e && !e[K] && (e = rb(e, f)), X(function(f, l, n, j) {
                var q, m, p = [],
                    sa = [],
                    r = l.length,
                    s;
                if (!(s = f)) {
                    s = c || "*";
                    for (var u = n.nodeType ? [n] : n, t = [], y = 0, C = u.length; y < C; y++) F(s, u[y], t);
                    s = t
                }
                s = !b || !f && c ? s : Va(s, p, b, n, j);
                u = d ? e || (f ? b : r || g) ? [] : l : s;
                if (d && d(s, u, n, j), g) {
                    q = Va(u, sa);
                    g(q, [], n, j);
                    for (n = q.length; n--;)(m = q[n]) && (u[sa[n]] = !(s[sa[n]] = m))
                }
                if (f) {
                    if (e || b) {
                        if (e) {
                            q = [];
                            for (n = u.length; n--;)(m = u[n]) && q.push(s[n] = m);
                            e(null, u = [], q, j)
                        }
                        for (n = u.length; n--;)(m = u[n]) && -1 < (q = e ? pa(f, m) :
                            p[n]) && (f[q] = !(l[q] = m))
                    }
                } else u = Va(u === l ? u.splice(r, u.length) : u), e ? e(null, l, u, j) : ha.apply(l, u)
            })
        },
        sb = function(b) {
            var c, d, g, e = b.length,
                f = A.relative[b[0].type];
            d = f || A.relative[" "];
            for (var l = f ? 1 : 0, n = Ua(function(b) {
                    return b === c
                }, d, !0), j = Ua(function(b) {
                    return -1 < pa(c, b)
                }, d, !0), q = [function(b, d, x) {
                    b = !f && (x || d !== Wa) || ((c = d).nodeType ? n(b, d, x) : j(b, d, x));
                    return c = null, b
                }]; l < e; l++)
                if (d = A.relative[b[l].type]) q = [Ua(qb(q), d)];
                else {
                    if (d = A.filter[b[l].type].apply(null, b[l].matches), d[K]) {
                        for (g = ++l; g < e && !A.relative[b[g].type]; g++);
                        return rb(1 < l && qb(q), 1 < l && Sa(b.slice(0, l - 1).concat({
                            value: " " === b[l - 2].type ? "*" : ""
                        })).replace(Ta, "$1"), d, l < g && sb(b.slice(l, g)), g < e && sb(b = b.slice(g)), g < e && Sa(b))
                    }
                    q.push(d)
                } return qb(q)
        },
        xa, J, A, Xa, $b, Ga, tb, Wb, Wa, ia, ya, ga, G, V, U, N, qa, Ya, Fa, K = "sizzle" + 1 * new Date,
        T = lb.document,
        aa = 0,
        Wc = 0,
        ac = ob(),
        bc = ob(),
        Ra = ob(),
        ub = function(b, c) {
            return b === c && (ya = !0), 0
        },
        Xc = {}.hasOwnProperty,
        ra = [],
        Yc = ra.pop,
        Zc = ra.push,
        ha = ra.push,
        cc = ra.slice,
        pa = function(b, c) {
            for (var d = 0, g = b.length; d < g; d++)
                if (b[d] === c) return d;
            return -1
        },
        $c =
        /[\x20\t\r\n\f]+/g,
        Ta = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        ad = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        bd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        cd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        dd = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        ed = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        Za = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i")
        },
        fd = /^(?:input|select|textarea|button)$/i,
        gd = /^h\d$/i,
        Ha = /^[^{]+\{\s*\[native \w/,
        Sc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        mb = /[+~]/,
        ba = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        ca = function(b, c, d) {
            b = "0x" + c - 65536;
            return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
        },
        Ub = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Vb = function(b, c) {
            return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
        },
        dc = function() {
            ga()
        },
        Vc = Ua(function(b) {
            return !0 === b.disabled && ("form" in b || "label" in b)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        ha.apply(ra = cc.call(T.childNodes), T.childNodes), ra[T.childNodes.length].nodeType
    } catch (Jd) {
        ha = {
            apply: ra.length ? function(b, c) {
                Zc.apply(b, cc.call(c))
            } : function(b, c) {
                for (var d = b.length, g = 0; b[d++] = c[g++];);
                b.length = d - 1
            }
        }
    }
    J = F.support = {};
    $b = F.isXML = function(b) {
        b = b && (b.ownerDocument || b).documentElement;
        return !!b && "HTML" !== b.nodeName
    };
    ga = F.setDocument = function(b) {
        var c, d;
        b = b ? b.ownerDocument || b : T;
        return b !==
            G && 9 === b.nodeType && b.documentElement ? (G = b, V = G.documentElement, U = !$b(G), T !== G && (d = G.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", dc, !1) : d.attachEvent && d.attachEvent("onunload", dc)), J.attributes = Z(function(b) {
                    return b.className = "i", !b.getAttribute("className")
                }), J.getElementsByTagName = Z(function(b) {
                    return b.appendChild(G.createComment("")), !b.getElementsByTagName("*").length
                }), J.getElementsByClassName = Ha.test(G.getElementsByClassName), J.getById = Z(function(b) {
                    return V.appendChild(b).id =
                        K, !G.getElementsByName || !G.getElementsByName(K).length
                }), J.getById ? (A.filter.ID = function(b) {
                    var c = b.replace(ba, ca);
                    return function(b) {
                        return b.getAttribute("id") === c
                    }
                }, A.find.ID = function(b, c) {
                    if ("undefined" != typeof c.getElementById && U) {
                        var d = c.getElementById(b);
                        return d ? [d] : []
                    }
                }) : (A.filter.ID = function(b) {
                    var c = b.replace(ba, ca);
                    return function(b) {
                        return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
                    }
                }, A.find.ID = function(b, c) {
                    if ("undefined" != typeof c.getElementById &&
                        U) {
                        var d, x, g, e = c.getElementById(b);
                        if (e) {
                            if (d = e.getAttributeNode("id"), d && d.value === b) return [e];
                            g = c.getElementsByName(b);
                            for (x = 0; e = g[x++];)
                                if (d = e.getAttributeNode("id"), d && d.value === b) return [e]
                        }
                        return []
                    }
                }), A.find.TAG = J.getElementsByTagName ? function(b, c) {
                    return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : J.qsa ? c.querySelectorAll(b) : void 0
                } : function(b, c) {
                    var d, x = [],
                        g = 0,
                        e = c.getElementsByTagName(b);
                    if ("*" === b) {
                        for (; d = e[g++];) 1 === d.nodeType && x.push(d);
                        return x
                    }
                    return e
                }, A.find.CLASS =
                J.getElementsByClassName && function(b, c) {
                    if ("undefined" != typeof c.getElementsByClassName && U) return c.getElementsByClassName(b)
                }, qa = [], N = [], (J.qsa = Ha.test(G.querySelectorAll)) && (Z(function(b) {
                    V.appendChild(b).innerHTML = "<a id='" + K + "'></a><select id='" + K + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    b.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    b.querySelectorAll("[selected]").length || N.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    b.querySelectorAll("[id~=" + K + "-]").length || N.push("~=");
                    b.querySelectorAll(":checked").length || N.push(":checked");
                    b.querySelectorAll("a#" + K + "+*").length || N.push(".#.+[+~]")
                }), Z(function(b) {
                    b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var c = G.createElement("input");
                    c.setAttribute("type", "hidden");
                    b.appendChild(c).setAttribute("name", "D");
                    b.querySelectorAll("[name=d]").length && N.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    2 !== b.querySelectorAll(":enabled").length &&
                        N.push(":enabled", ":disabled");
                    V.appendChild(b).disabled = !0;
                    2 !== b.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled");
                    b.querySelectorAll("*,:x");
                    N.push(",.*:")
                })), (J.matchesSelector = Ha.test(Ya = V.matches || V.webkitMatchesSelector || V.mozMatchesSelector || V.oMatchesSelector || V.msMatchesSelector)) && Z(function(b) {
                    J.disconnectedMatch = Ya.call(b, "*");
                    Ya.call(b, "[s!='']:x");
                    qa.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }),
                N = N.length && RegExp(N.join("|")), qa = qa.length && RegExp(qa.join("|")), c = Ha.test(V.compareDocumentPosition), Fa = c || Ha.test(V.contains) ? function(b, c) {
                    var d = 9 === b.nodeType ? b.documentElement : b,
                        x = c && c.parentNode;
                    return b === x || !(!x || 1 !== x.nodeType || !(d.contains ? d.contains(x) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(x)))
                } : function(b, c) {
                    if (c)
                        for (; c = c.parentNode;)
                            if (c === b) return !0;
                    return !1
                }, ub = c ? function(b, c) {
                    if (b === c) return ya = !0, 0;
                    var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
                    return d ?
                        d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !J.sortDetached && c.compareDocumentPosition(b) === d ? b === G || b.ownerDocument === T && Fa(T, b) ? -1 : c === G || c.ownerDocument === T && Fa(T, c) ? 1 : ia ? pa(ia, b) - pa(ia, c) : 0 : 4 & d ? -1 : 1)
                } : function(b, c) {
                    if (b === c) return ya = !0, 0;
                    var d, x = 0;
                    d = b.parentNode;
                    var g = c.parentNode,
                        e = [b],
                        B = [c];
                    if (!d || !g) return b === G ? -1 : c === G ? 1 : d ? -1 : g ? 1 : ia ? pa(ia, b) - pa(ia, c) : 0;
                    if (d === g) return Xb(b, c);
                    for (d = b; d = d.parentNode;) e.unshift(d);
                    for (d = c; d = d.parentNode;) B.unshift(d);
                    for (; e[x] === B[x];) x++;
                    return x ? Xb(e[x], B[x]) : e[x] === T ? -1 : B[x] === T ? 1 : 0
                }, G) : G
    };
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        if ((b.ownerDocument || b) !== G && ga(b), c = c.replace(cd, "='$1']"), J.matchesSelector && U && !Ra[c + " "] && (!qa || !qa.test(c)) && (!N || !N.test(c))) try {
            var d = Ya.call(b, c);
            if (d || J.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
        } catch (g) {}
        return 0 < F(c, G, null, [b]).length
    };
    F.contains = function(b, c) {
        return (b.ownerDocument || b) !== G && ga(b), Fa(b, c)
    };
    F.attr =
        function(b, c) {
            (b.ownerDocument || b) !== G && ga(b);
            var d = A.attrHandle[c.toLowerCase()],
                d = d && Xc.call(A.attrHandle, c.toLowerCase()) ? d(b, c, !U) : void 0;
            return void 0 !== d ? d : J.attributes || !U ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
        };
    F.escape = function(b) {
        return (b + "").replace(Ub, Vb)
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    F.uniqueSort = function(b) {
        var c, d = [],
            g = 0,
            e = 0;
        if (ya = !J.detectDuplicates, ia = !J.sortStable && b.slice(0), b.sort(ub), ya) {
            for (; c = b[e++];) c ===
                b[e] && (g = d.push(e));
            for (; g--;) b.splice(d[g], 1)
        }
        return ia = null, b
    };
    Xa = F.getText = function(b) {
        var c, d = "",
            g = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Xa(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            }
        else
            for (; c = b[g++];) d += Xa(c);
        return d
    };
    A = F.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Za,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ba, ca), b[3] = (b[3] || b[4] || b[5] || "").replace(ba, ca), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || F.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d = !b[6] && b[2];
                return Za.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && dd.test(d) &&
                    (c = Ga(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
            }
        },
        filter: {
            TAG: function(b) {
                var c = b.replace(ba, ca).toLowerCase();
                return "*" === b ? function() {
                    return !0
                } : function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === c
                }
            },
            CLASS: function(b) {
                var c = ac[b + " "];
                return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && ac(b, function(b) {
                    return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") ||
                        "")
                })
            },
            ATTR: function(b, c, d) {
                return function(g) {
                    g = F.attr(g, b);
                    return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace($c, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
                }
            },
            CHILD: function(b, c, d, g, e) {
                var f = "nth" !== b.slice(0, 3),
                    l = "last" !== b.slice(-4),
                    n = "of-type" === c;
                return 1 === g && 0 === e ? function(b) {
                    return !!b.parentNode
                } : function(c, d, B) {
                    var M, j, q, m, p, r;
                    d = f !==
                        l ? "nextSibling" : "previousSibling";
                    var s = c.parentNode,
                        u = n && c.nodeName.toLowerCase();
                    B = !B && !n;
                    var t = !1;
                    if (s) {
                        if (f) {
                            for (; d;) {
                                for (m = c; m = m[d];)
                                    if (n ? m.nodeName.toLowerCase() === u : 1 === m.nodeType) return !1;
                                r = d = "only" === b && !r && "nextSibling"
                            }
                            return !0
                        }
                        if (r = [l ? s.firstChild : s.lastChild], l && B) {
                            m = s;
                            q = m[K] || (m[K] = {});
                            j = q[m.uniqueID] || (q[m.uniqueID] = {});
                            M = j[b] || [];
                            t = (p = M[0] === aa && M[1]) && M[2];
                            for (m = p && s.childNodes[p]; m = ++p && m && m[d] || (t = p = 0) || r.pop();)
                                if (1 === m.nodeType && ++t && m === c) {
                                    j[b] = [aa, p, t];
                                    break
                                }
                        } else if (B && (m =
                                c, q = m[K] || (m[K] = {}), j = q[m.uniqueID] || (q[m.uniqueID] = {}), M = j[b] || [], p = M[0] === aa && M[1], t = p), !1 === t)
                            for (;
                                (m = ++p && m && m[d] || (t = p = 0) || r.pop()) && (!(n ? m.nodeName.toLowerCase() === u : 1 === m.nodeType) || !++t || !(B && (q = m[K] || (m[K] = {}), j = q[m.uniqueID] || (q[m.uniqueID] = {}), j[b] = [aa, t]), m === c)););
                        return t -= e, t === g || 0 === t % g && 0 <= t / g
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, g = A.pseudos[b] || A.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return g[K] ? g(c) : 1 < g.length ? (d = [b, b, "", c], A.setFilters.hasOwnProperty(b.toLowerCase()) ?
                    X(function(b, d) {
                        for (var x, e = g(b, c), f = e.length; f--;) x = pa(b, e[f]), b[x] = !(d[x] = e[f])
                    }) : function(b) {
                        return g(b, 0, d)
                    }) : g
            }
        },
        pseudos: {
            not: X(function(b) {
                var c = [],
                    d = [],
                    g = tb(b.replace(Ta, "$1"));
                return g[K] ? X(function(b, c, d, x) {
                    var e;
                    d = g(b, null, x, []);
                    for (x = b.length; x--;)(e = d[x]) && (b[x] = !(c[x] = e))
                }) : function(b, x, e) {
                    return c[0] = b, g(c, null, e, d), c[0] = null, !d.pop()
                }
            }),
            has: X(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: X(function(b) {
                return b = b.replace(ba, ca),
                    function(c) {
                        return -1 < (c.textContent ||
                            c.innerText || Xa(c)).indexOf(b)
                    }
            }),
            lang: X(function(b) {
                return ed.test(b || "") || F.error("unsupported lang: " + b), b = b.replace(ba, ca).toLowerCase(),
                    function(c) {
                        var d;
                        do
                            if (d = U ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
            }),
            target: function(b) {
                var c = lb.location && lb.location.hash;
                return c && c.slice(1) === b.id
            },
            root: function(b) {
                return b === V
            },
            focus: function(b) {
                return b === G.activeElement && (!G.hasFocus ||
                    G.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
            },
            enabled: Yb(!1),
            disabled: Yb(!0),
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            empty: function(b) {
                for (b = b.firstChild; b; b = b.nextSibling)
                    if (6 > b.nodeType) return !1;
                return !0
            },
            parent: function(b) {
                return !A.pseudos.empty(b)
            },
            header: function(b) {
                return gd.test(b.nodeName)
            },
            input: function(b) {
                return fd.test(b.nodeName)
            },
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            text: function(b) {
                var c;
                return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
            },
            first: oa(function() {
                return [0]
            }),
            last: oa(function(b, c) {
                return [c - 1]
            }),
            eq: oa(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: oa(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: oa(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: oa(function(b, c,
                d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: oa(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    A.pseudos.nth = A.pseudos.eq;
    for (xa in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) A.pseudos[xa] = Tc(xa);
    for (xa in {
            submit: !0,
            reset: !0
        }) A.pseudos[xa] = Uc(xa);
    Zb.prototype = A.filters = A.pseudos;
    A.setFilters = new Zb;
    Ga = F.tokenize = function(b, c) {
        var d, g, e, f, l, n, j;
        if (l = bc[b + " "]) return c ? 0 : l.slice(0);
        l = b;
        n = [];
        for (j = A.preFilter; l;) {
            d && !(g = ad.exec(l)) || (g && (l = l.slice(g[0].length) || l), n.push(e = []));
            d = !1;
            (g = bd.exec(l)) && (d = g.shift(), e.push({
                value: d,
                type: g[0].replace(Ta, " ")
            }), l = l.slice(d.length));
            for (f in A.filter) !(g = Za[f].exec(l)) || j[f] && !(g = j[f](g)) || (d = g.shift(), e.push({
                value: d,
                type: f,
                matches: g
            }), l = l.slice(d.length));
            if (!d) break
        }
        return c ? l.length : l ? F.error(b) : bc(b, n).slice(0)
    };
    fa = (tb = F.compile = function(b, c) {
        var d, g = [],
            e = [],
            f = Ra[b + " "];
        if (!f) {
            c || (c = Ga(b));
            for (d = c.length; d--;) f = sb(c[d]), f[K] ? g.push(f) : e.push(f);
            d = Ra;
            var l = 0 < g.length,
                n = 0 < e.length,
                f = function(b, c, d, x, f) {
                    var B, j, M, q = 0,
                        m = "0",
                        p = b && [],
                        r = [],
                        s = Wa,
                        sa = b || n && A.find.TAG("*", f),
                        u = aa += null == s ? 1 : Math.random() || 0.1,
                        t = sa.length;
                    for (f && (Wa = c === G || c || f); m !== t && null != (B = sa[m]); m++) {
                        if (n && B) {
                            j = 0;
                            for (c || B.ownerDocument === G || (ga(B), d = !U); M = e[j++];)
                                if (M(B, c || G, d)) {
                                    x.push(B);
                                    break
                                } f && (aa = u)
                        }
                        l && ((B = !M && B) && q--, b && p.push(B))
                    }
                    if (q += m, l && m !== q) {
                        for (j = 0; M = g[j++];) M(p, r, c, d);
                        if (b) {
                            if (0 < q)
                                for (; m--;) p[m] || r[m] || (r[m] = Yc.call(x));
                            r = Va(r)
                        }
                        ha.apply(x, r);
                        f && !b && 0 < r.length && 1 < q + g.length && F.uniqueSort(x)
                    }
                    return f && (aa = u, Wa = s), p
                },
                f = l ? X(f) : f,
                f = d(b, f);
            f.selector =
                b
        }
        return f
    }, Wb = F.select = function(b, c, d, g) {
        var e, f, l, n, j, q = "function" == typeof b && b,
            m = !g && Ga(b = q.selector || b);
        if (d = d || [], 1 === m.length) {
            if (f = m[0] = m[0].slice(0), 2 < f.length && "ID" === (l = f[0]).type && 9 === c.nodeType && U && A.relative[f[1].type]) {
                if (c = (A.find.ID(l.matches[0].replace(ba, ca), c) || [])[0], !c) return d;
                q && (c = c.parentNode);
                b = b.slice(f.shift().value.length)
            }
            for (e = Za.needsContext.test(b) ? 0 : f.length; e-- && !(l = f[e], A.relative[n = l.type]);)
                if ((j = A.find[n]) && (g = j(l.matches[0].replace(ba, ca), mb.test(f[0].type) &&
                        nb(c.parentNode) || c))) {
                    if (f.splice(e, 1), b = g.length && Sa(f), !b) return ha.apply(d, g), d;
                    break
                }
        }
        return (q || tb(b, m))(g, c, !U, d, !c || mb.test(b) && nb(c.parentNode) || c), d
    }, J.sortStable = K.split("").sort(ub).join("") === K, J.detectDuplicates = !!ya, ga(), J.sortDetached = Z(function(b) {
        return 1 & b.compareDocumentPosition(G.createElement("fieldset"))
    }), Z(function(b) {
        return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
    }) || pb("type|href|height|width", function(b, c, d) {
        if (!d) return b.getAttribute(c, "type" ===
            c.toLowerCase() ? 1 : 2)
    }), J.attributes && Z(function(b) {
        return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
    }) || pb("value", function(b, c, d) {
        if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
    }), Z(function(b) {
        return null == b.getAttribute("disabled")
    }) || pb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, c, d) {
        var g;
        if (!d) return !0 === b[c] ? c.toLowerCase() : (g =
            b.getAttributeNode(c)) && g.specified ? g.value : null
    }), F);
    l.find = fa;
    l.expr = fa.selectors;
    l.expr[":"] = l.expr.pseudos;
    l.uniqueSort = l.unique = fa.uniqueSort;
    l.text = fa.getText;
    l.isXMLDoc = fa.isXML;
    l.contains = fa.contains;
    l.escapeSelector = fa.escape;
    var za = function(b, c, d) {
            for (var g = [], e = void 0 !== d;
                (b = b[c]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (e && l(b).is(d)) break;
                    g.push(b)
                } return g
        },
        ec = function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        },
        fc = l.expr.match.needsContext,
        gc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Bc = /^.[^:#\[\.,]*$/;
    l.filter = function(b, c, d) {
        var g = c[0];
        return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? l.find.matchesSelector(g, b) ? [g] : [] : l.find.matches(b, l.grep(c, function(b) {
            return 1 === b.nodeType
        }))
    };
    l.fn.extend({
        find: function(b) {
            var c, d, g = this.length,
                e = this;
            if ("string" != typeof b) return this.pushStack(l(b).filter(function() {
                for (c = 0; c < g; c++)
                    if (l.contains(e[c], this)) return !0
            }));
            d = this.pushStack([]);
            for (c = 0; c < g; c++) l.find(b, e[c], d);
            return 1 < g ? l.uniqueSort(d) : d
        },
        filter: function(b) {
            return this.pushStack(j(this,
                b || [], !1))
        },
        not: function(b) {
            return this.pushStack(j(this, b || [], !0))
        },
        is: function(b) {
            return !!j(this, "string" == typeof b && fc.test(b) ? l(b) : b || [], !1).length
        }
    });
    var hc, hd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (l.fn.init = function(b, c, d) {
        var g, e;
        if (!b) return this;
        if (d = d || hc, "string" == typeof b) {
            if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : hd.exec(b), !g || !g[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
            if (g[1]) {
                if (c = c instanceof l ? c[0] : c, l.merge(this, l.parseHTML(g[1],
                        c && c.nodeType ? c.ownerDocument || c : z, !0)), gc.test(g[1]) && l.isPlainObject(c))
                    for (g in c) l.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
                return this
            }
            return e = z.getElementById(g[2]), e && (this[0] = e, this.length = 1), this
        }
        return b.nodeType ? (this[0] = b, this.length = 1, this) : l.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(l) : l.makeArray(b, this)
    }).prototype = l.fn;
    hc = l(z);
    var id = /^(?:parents|prev(?:Until|All))/,
        jd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    l.fn.extend({
        has: function(b) {
            var c = l(b, this),
                d = c.length;
            return this.filter(function() {
                for (var b = 0; b < d; b++)
                    if (l.contains(this, c[b])) return !0
            })
        },
        closest: function(b, c) {
            var d, g = 0,
                e = this.length,
                f = [],
                n = "string" != typeof b && l(b);
            if (!fc.test(b))
                for (; g < e; g++)
                    for (d = this[g]; d && d !== c; d = d.parentNode)
                        if (11 > d.nodeType && (n ? -1 < n.index(d) : 1 === d.nodeType && l.find.matchesSelector(d, b))) {
                            f.push(d);
                            break
                        } return this.pushStack(1 < f.length ? l.uniqueSort(f) : f)
        },
        index: function(b) {
            return b ? "string" == typeof b ? Ba.call(l(b), this[0]) : Ba.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ?
                this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(l.uniqueSort(l.merge(this.get(), l(b, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    l.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return za(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return za(b, "parentNode", d)
        },
        next: function(b) {
            return m(b, "nextSibling")
        },
        prev: function(b) {
            return m(b, "previousSibling")
        },
        nextAll: function(b) {
            return za(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return za(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return za(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return za(b, "previousSibling", d)
        },
        siblings: function(b) {
            return ec((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return ec(b.firstChild)
        },
        contents: function(b) {
            return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), l.merge([], b.childNodes))
        }
    }, function(b, c) {
        l.fn[b] = function(d, g) {
            var e = l.map(this, c, d);
            return "Until" !== b.slice(-5) &&
                (g = d), g && "string" == typeof g && (e = l.filter(g, e)), 1 < this.length && (jd[b] || l.uniqueSort(e), id.test(b) && e.reverse()), this.pushStack(e)
        }
    });
    var S = /[^\x20\t\r\n\f]+/g;
    l.Callbacks = function(b) {
        var c;
        if ("string" == typeof b) {
            var d = {};
            c = (l.each(b.match(S) || [], function(b, c) {
                d[c] = !0
            }), d)
        } else c = l.extend({}, b);
        b = c;
        var g, e, f, n, j = [],
            q = [],
            m = -1,
            p = function() {
                n = n || b.once;
                for (f = g = !0; q.length; m = -1)
                    for (e = q.shift(); ++m < j.length;) !1 === j[m].apply(e[0], e[1]) && b.stopOnFalse && (m = j.length, e = !1);
                b.memory || (e = !1);
                g = !1;
                n && (j = e ? [] : "")
            },
            r = {
                add: function() {
                    return j && (e && !g && (m = j.length - 1, q.push(e)), function Jc(c) {
                        l.each(c, function(c, d) {
                            l.isFunction(d) ? b.unique && r.has(d) || j.push(d) : d && d.length && "string" !== l.type(d) && Jc(d)
                        })
                    }(arguments), e && !g && p()), this
                },
                remove: function() {
                    return l.each(arguments, function(b, c) {
                        for (var d; - 1 < (d = l.inArray(c, j, d));) j.splice(d, 1), d <= m && m--
                    }), this
                },
                has: function(b) {
                    return b ? -1 < l.inArray(b, j) : 0 < j.length
                },
                empty: function() {
                    return j && (j = []), this
                },
                disable: function() {
                    return n = q = [], j = e = "", this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return n = q = [], e || g || (j = e = ""), this
                },
                locked: function() {
                    return !!n
                },
                fireWith: function(b, c) {
                    return n || (c = c || [], c = [b, c.slice ? c.slice() : c], q.push(c), g || p()), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return r
    };
    l.extend({
        Deferred: function(c) {
            var d = [
                    ["notify", "progress", l.Callbacks("memory"), l.Callbacks("memory"), 2],
                    ["resolve", "done", l.Callbacks("once memory"), l.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", l.Callbacks("once memory"),
                        l.Callbacks("once memory"), 1, "rejected"
                    ]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return n.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return f.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return l.Deferred(function(c) {
                            l.each(d, function(d, g) {
                                var e = l.isFunction(b[g[4]]) && b[g[4]];
                                n[g[1]](function() {
                                    var b = e && e.apply(this, arguments);
                                    b && l.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[g[0] + "With"](this, e ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    then: function(c, e, x) {
                        function f(c, d, e, x) {
                            return function() {
                                var B = this,
                                    j = arguments,
                                    q = function() {
                                        var b, q;
                                        if (!(c < n)) {
                                            if (b = e.apply(B, j), b === d.promise()) throw new TypeError("Thenable self-resolution");
                                            q = b && ("object" == typeof b || "function" == typeof b) && b.then;
                                            l.isFunction(q) ? x ? q.call(b, f(n, d, p, x), f(n, d, g, x)) : (n++, q.call(b, f(n, d, p, x), f(n, d, g, x), f(n, d, p, d.notifyWith))) : (e !== p && (B = void 0, j = [b]), (x || d.resolveWith)(B, j))
                                        }
                                    },
                                    m = x ? q : function() {
                                        try {
                                            q()
                                        } catch (b) {
                                            l.Deferred.exceptionHook && l.Deferred.exceptionHook(b,
                                                m.stackTrace), c + 1 >= n && (e !== g && (B = void 0, j = [b]), d.rejectWith(B, j))
                                        }
                                    };
                                c ? m() : (l.Deferred.getStackHook && (m.stackTrace = l.Deferred.getStackHook()), b.setTimeout(m))
                            }
                        }
                        var n = 0;
                        return l.Deferred(function(b) {
                            d[0][3].add(f(0, b, l.isFunction(x) ? x : p, b.notifyWith));
                            d[1][3].add(f(0, b, l.isFunction(c) ? c : p));
                            d[2][3].add(f(0, b, l.isFunction(e) ? e : g))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? l.extend(b, f) : f
                    }
                },
                n = {};
            return l.each(d, function(b, c) {
                var g = c[2],
                    x = c[5];
                f[c[1]] = g.add;
                x && g.add(function() {
                        e = x
                    }, d[3 - b][2].disable,
                    d[0][2].lock);
                g.add(c[3].fire);
                n[c[0]] = function() {
                    return n[c[0] + "With"](this === n ? void 0 : this, arguments), this
                };
                n[c[0] + "With"] = g.fireWith
            }), f.promise(n), c && c.call(n, n), n
        },
        when: function(b) {
            var c = arguments.length,
                d = c,
                g = Array(d),
                e = na.call(arguments),
                f = l.Deferred(),
                j = function(b) {
                    return function(d) {
                        g[b] = this;
                        e[b] = 1 < arguments.length ? na.call(arguments) : d;
                        --c || f.resolveWith(g, e)
                    }
                };
            if (1 >= c && (n(b, f.done(j(d)).resolve, f.reject, !c), "pending" === f.state() || l.isFunction(e[d] && e[d].then))) return f.then();
            for (; d--;) n(e[d],
                j(d), f.reject);
            return f.promise()
        }
    });
    var kd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    l.Deferred.exceptionHook = function(c, d) {
        b.console && b.console.warn && c && kd.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
    };
    l.readyException = function(c) {
        b.setTimeout(function() {
            throw c;
        })
    };
    var vb = l.Deferred();
    l.fn.ready = function(b) {
        return vb.then(b)["catch"](function(b) {
            l.readyException(b)
        }), this
    };
    l.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 === b ? --l.readyWait :
                l.isReady) || (l.isReady = !0, !0 !== b && 0 < --l.readyWait || vb.resolveWith(z, [l]))
        }
    });
    l.ready.then = vb.then;
    "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? b.setTimeout(l.ready) : (z.addEventListener("DOMContentLoaded", q), b.addEventListener("load", q));
    var da = function(b, c, d, g, e, f, n) {
            var j = 0,
                q = b.length,
                m = null == d;
            if ("object" === l.type(d))
                for (j in e = !0, d) da(b, c, j, d[j], !0, f, n);
            else if (void 0 !== g && (e = !0, l.isFunction(g) || (n = !0), m && (n ? (c.call(b, g), c = null) : (m = c, c = function(b, c, d) {
                    return m.call(l(b),
                        d)
                })), c))
                for (; j < q; j++) c(b[j], d, n ? g : g.call(b[j], j, c(b[j], d)));
            return e ? b : m ? c.call(b) : q ? c(b[0], d) : f
        },
        $a = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };
    r.uid = 1;
    r.prototype = {
        cache: function(b) {
            var c = b[this.expando];
            return c || (c = {}, $a(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(b, c, d) {
            var g;
            b = this.cache(b);
            if ("string" == typeof c) b[l.camelCase(c)] = d;
            else
                for (g in c) b[l.camelCase(g)] = c[g];
            return b
        },
        get: function(b, c) {
            return void 0 ===
                c ? this.cache(b) : b[this.expando] && b[this.expando][l.camelCase(c)]
        },
        access: function(b, c, d) {
            return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
        },
        remove: function(b, c) {
            var d, g = b[this.expando];
            if (void 0 !== g) {
                if (void 0 !== c) {
                    Array.isArray(c) ? c = c.map(l.camelCase) : (c = l.camelCase(c), c = c in g ? [c] : c.match(S) || []);
                    for (d = c.length; d--;) delete g[c[d]]
                }(void 0 === c || l.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
            }
        },
        hasData: function(b) {
            b =
                b[this.expando];
            return void 0 !== b && !l.isEmptyObject(b)
        }
    };
    var C = new r,
        O = new r,
        Dc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Cc = /[A-Z]/g;
    l.extend({
        hasData: function(b) {
            return O.hasData(b) || C.hasData(b)
        },
        data: function(b, c, d) {
            return O.access(b, c, d)
        },
        removeData: function(b, c) {
            O.remove(b, c)
        },
        _data: function(b, c, d) {
            return C.access(b, c, d)
        },
        _removeData: function(b, c) {
            C.remove(b, c)
        }
    });
    l.fn.extend({
        data: function(b, c) {
            var d, g, e, f = this[0],
                n = f && f.attributes;
            if (void 0 === b) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !C.get(f,
                        "hasDataAttrs"))) {
                    for (d = n.length; d--;) n[d] && (g = n[d].name, 0 === g.indexOf("data-") && (g = l.camelCase(g.slice(5)), s(f, g, e[g])));
                    C.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof b ? this.each(function() {
                O.set(this, b)
            }) : da(this, function(c) {
                var d;
                if (f && void 0 === c) {
                    if ((d = O.get(f, b), void 0 !== d) || (d = s(f, b), void 0 !== d)) return d
                } else this.each(function() {
                    O.set(this, b, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                O.remove(this, b)
            })
        }
    });
    l.extend({
        queue: function(b,
            c, d) {
            var g;
            if (b) return c = (c || "fx") + "queue", g = C.get(b, c), d && (!g || Array.isArray(d) ? g = C.access(b, c, l.makeArray(d)) : g.push(d)), g || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = l.queue(b, c),
                g = d.length,
                e = d.shift(),
                f = l._queueHooks(b, c),
                n = function() {
                    l.dequeue(b, c)
                };
            "inprogress" === e && (e = d.shift(), g--);
            e && ("fx" === c && d.unshift("inprogress"), delete f.stop, e.call(b, n, f));
            !g && f && f.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return C.get(b, d) || C.access(b, d, {
                empty: l.Callbacks("once memory").add(function() {
                    C.remove(b,
                        [c + "queue", d])
                })
            })
        }
    });
    l.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? l.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = l.queue(this, b, c);
                l._queueHooks(this, b);
                "fx" === b && "inprogress" !== d[0] && l.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                l.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, c) {
            var d, g = 1,
                e = l.Deferred(),
                f = this,
                n = this.length,
                j = function() {
                    --g || e.resolveWith(f,
                        [f])
                };
            "string" != typeof b && (c = b, b = void 0);
            for (b = b || "fx"; n--;)(d = C.get(f[n], b + "queueHooks")) && d.empty && (g++, d.empty.add(j));
            return j(), e.promise(c)
        }
    });
    var ic = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ca = RegExp("^(?:([+-])=|)(" + ic + ")([a-z%]*)$", "i"),
        ja = ["Top", "Right", "Bottom", "Left"],
        La = function(b, c) {
            return b = c || b, "none" === b.style.display || "" === b.style.display && l.contains(b.ownerDocument, b) && "none" === l.css(b, "display")
        },
        jc = function(b, c, d, g) {
            var e, f = {};
            for (e in c) f[e] = b.style[e], b.style[e] = c[e];
            d =
                d.apply(b, g || []);
            for (e in c) b.style[e] = f[e];
            return d
        },
        zb = {};
    l.fn.extend({
        show: function() {
            return t(this, !0)
        },
        hide: function() {
            return t(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                La(this) ? l(this).show() : l(this).hide()
            })
        }
    });
    var kc = /^(?:checkbox|radio)$/i,
        Ab = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Bb = /^$|\/(?:java|ecma)script/i,
        R = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    R.optgroup = R.option;
    R.tbody = R.tfoot = R.colgroup = R.caption = R.thead;
    R.th = R.td;
    var Ec = /<|&#?\w+;/,
        ab = z.createDocumentFragment().appendChild(z.createElement("div")),
        bb = z.createElement("input");
    bb.setAttribute("type", "radio");
    bb.setAttribute("checked", "checked");
    bb.setAttribute("name", "t");
    ab.appendChild(bb);
    H.checkClone = ab.cloneNode(!0).cloneNode(!0).lastChild.checked;
    ab.innerHTML = "<textarea>x</textarea>";
    H.noCloneChecked = !!ab.cloneNode(!0).lastChild.defaultValue;
    !0;
    var cb = z.documentElement,
        ld = /^key/,
        md = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        lc = /^([^.]*)(?:\.(.+)|)/;
    l.event = {
        global: {},
        add: function(b, c, d, g, e) {
            var f, n, j, q, m, p, r, s, u, t;
            if (m = C.get(b)) {
                d.handler && (f = d, d = f.handler, e = f.selector);
                e && l.find.matchesSelector(cb, e);
                d.guid || (d.guid = l.guid++);
                (q = m.events) || (q = m.events = {});
                (n = m.handle) || (n = m.handle = function(c) {
                    return "undefined" != typeof l && l.event.triggered !== c.type ? l.event.dispatch.apply(b,
                        arguments) : void 0
                });
                c = (c || "").match(S) || [""];
                for (m = c.length; m--;) j = lc.exec(c[m]) || [], u = t = j[1], j = (j[2] || "").split(".").sort(), u && (r = l.event.special[u] || {}, u = (e ? r.delegateType : r.bindType) || u, r = l.event.special[u] || {}, p = l.extend({
                    type: u,
                    origType: t,
                    data: g,
                    handler: d,
                    guid: d.guid,
                    selector: e,
                    needsContext: e && l.expr.match.needsContext.test(e),
                    namespace: j.join(".")
                }, f), (s = q[u]) || (s = q[u] = [], s.delegateCount = 0, r.setup && !1 !== r.setup.call(b, g, j, n) || b.addEventListener && b.addEventListener(u, n)), r.add && (r.add.call(b,
                    p), p.handler.guid || (p.handler.guid = d.guid)), e ? s.splice(s.delegateCount++, 0, p) : s.push(p), l.event.global[u] = !0)
            }
        },
        remove: function(b, c, d, g, e) {
            var f, n, j, q, m, p, r, s, u, t, y, A = C.hasData(b) && C.get(b);
            if (A && (q = A.events)) {
                c = (c || "").match(S) || [""];
                for (m = c.length; m--;)
                    if (j = lc.exec(c[m]) || [], u = y = j[1], t = (j[2] || "").split(".").sort(), u) {
                        r = l.event.special[u] || {};
                        u = (g ? r.delegateType : r.bindType) || u;
                        s = q[u] || [];
                        j = j[2] && RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (n = f = s.length; f--;) p = s[f], !e && y !== p.origType ||
                            d && d.guid !== p.guid || j && !j.test(p.namespace) || g && g !== p.selector && ("**" !== g || !p.selector) || (s.splice(f, 1), p.selector && s.delegateCount--, r.remove && r.remove.call(b, p));
                        n && !s.length && (r.teardown && !1 !== r.teardown.call(b, t, A.handle) || l.removeEvent(b, u, A.handle), delete q[u])
                    } else
                        for (u in q) l.event.remove(b, u + c[m], d, g, !0);
                l.isEmptyObject(q) && C.remove(b, "handle events")
            }
        },
        dispatch: function(b) {
            var c = l.event.fix(b),
                d, g, e, f, n, j, q = Array(arguments.length);
            g = (C.get(this, "events") || {})[c.type] || [];
            var m = l.event.special[c.type] || {};
            q[0] = c;
            for (d = 1; d < arguments.length; d++) q[d] = arguments[d];
            if (c.delegateTarget = this, !m.preDispatch || !1 !== m.preDispatch.call(this, c)) {
                j = l.event.handlers.call(this, c, g);
                for (d = 0;
                    (f = j[d++]) && !c.isPropagationStopped();) {
                    c.currentTarget = f.elem;
                    for (g = 0;
                        (n = f.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(n.namespace) || (c.handleObj = n, c.data = n.data, e = ((l.event.special[n.origType] || {}).handle || n.handler).apply(f.elem, q), void 0 !== e && !1 === (c.result = e) && (c.preventDefault(),
                        c.stopPropagation()))
                }
                return m.postDispatch && m.postDispatch.call(this, c), c.result
            }
        },
        handlers: function(b, c) {
            var d, g, e, f, n, j = [],
                q = c.delegateCount,
                m = b.target;
            if (q && m.nodeType && !("click" === b.type && 1 <= b.button))
                for (; m !== this; m = m.parentNode || this)
                    if (1 === m.nodeType && ("click" !== b.type || !0 !== m.disabled)) {
                        f = [];
                        n = {};
                        for (d = 0; d < q; d++) g = c[d], e = g.selector + " ", void 0 === n[e] && (n[e] = g.needsContext ? -1 < l(e, this).index(m) : l.find(e, this, null, [m]).length), n[e] && f.push(g);
                        f.length && j.push({
                            elem: m,
                            handlers: f
                        })
                    } return m = this,
                q < c.length && j.push({
                    elem: m,
                    handlers: c.slice(q)
                }), j
        },
        addProp: function(b, c) {
            Object.defineProperty(l.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: l.isFunction(c) ? function() {
                    if (this.originalEvent) return c(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[b]
                },
                set: function(c) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                }
            })
        },
        fix: function(b) {
            return b[l.expando] ? b : new l.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !==
                        Da() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Da() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
                },
                _default: function(b) {
                    return f(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    };
    l.removeEvent = function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c,
            d)
    };
    l.Event = function(b, c) {
        return this instanceof l.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? ea : E, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && l.extend(this, c), this.timeStamp = b && b.timeStamp || l.now(), void(this[l.expando] = !0)) : new l.Event(b, c)
    };
    l.Event.prototype = {
        constructor: l.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = ea;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = ea;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = ea;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    l.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(b) {
            var c = b.button;
            return null == b.which && ld.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && md.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 &
                c ? 2 : 0 : b.which
        }
    }, l.event.addProp);
    l.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(b, c) {
        l.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, g = b.relatedTarget,
                    e = b.handleObj;
                return g && (g === this || l.contains(this, g)) || (b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c), d
            }
        }
    });
    l.fn.extend({
        on: function(b, c, d, g) {
            return ua(this, b, c, d, g)
        },
        one: function(b, c, d, g) {
            return ua(this, b, c, d, g, 1)
        },
        off: function(b, c, d) {
            var g,
                e;
            if (b && b.preventDefault && b.handleObj) return g = b.handleObj, l(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof b) {
                for (e in b) this.off(e, c, b[e]);
                return this
            }
            return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = E), this.each(function() {
                l.event.remove(this, b, d, c)
            })
        }
    });
    var nd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        od = /<script|<style|<link/i,
        Ic = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Hc = /^true\/(.*)/,
        Kc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    l.extend({
        htmlPrefilter: function(b) {
            return b.replace(nd, "<$1></$2>")
        },
        clone: function(b, c, d) {
            var g, e, f, n, j = b.cloneNode(!0),
                m = l.contains(b.ownerDocument, b);
            if (!H.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || l.isXMLDoc(b))) {
                n = y(j);
                f = y(b);
                g = 0;
                for (e = f.length; g < e; g++) {
                    var q = f[g],
                        p = n[g],
                        r = p.nodeName.toLowerCase();
                    "input" === r && kc.test(q.type) ? p.checked = q.checked : "input" !== r && "textarea" !== r || (p.defaultValue = q.defaultValue)
                }
            }
            if (c)
                if (d) {
                    f =
                        f || y(b);
                    n = n || y(j);
                    g = 0;
                    for (e = f.length; g < e; g++) Db(f[g], n[g])
                } else Db(b, j);
            return n = y(j, "script"), 0 < n.length && L(n, !m && y(b, "script")), j
        },
        cleanData: function(b) {
            for (var c, d, g, e = l.event.special, f = 0; void 0 !== (d = b[f]); f++)
                if ($a(d)) {
                    if (c = d[C.expando]) {
                        if (c.events)
                            for (g in c.events) e[g] ? l.event.remove(d, g) : l.removeEvent(d, g, c.handle);
                        d[C.expando] = void 0
                    }
                    d[O.expando] && (d[O.expando] = void 0)
                }
        }
    });
    l.fn.extend({
        detach: function(b) {
            return Fb(this, b, !0)
        },
        remove: function(b) {
            return Fb(this, b)
        },
        text: function(b) {
            return da(this,
                function(b) {
                    return void 0 === b ? l.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                    })
                }, null, b, arguments.length)
        },
        append: function() {
            return va(this, arguments, function(b) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Cb(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return va(this, arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = Cb(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function() {
            return va(this,
                arguments,
                function(b) {
                    this.parentNode && this.parentNode.insertBefore(b, this)
                })
        },
        after: function() {
            return va(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (l.cleanData(y(b, !1)), b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = null != b && b, c = null == c ? b : c, this.map(function() {
                return l.clone(this, b, c)
            })
        },
        html: function(b) {
            return da(this, function(b) {
                var c = this[0] || {},
                    d = 0,
                    g = this.length;
                if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof b && !od.test(b) && !R[(Ab.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = l.htmlPrefilter(b);
                    try {
                        for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (l.cleanData(y(c, !1)), c.innerHTML = b);
                        c = 0
                    } catch (e) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return va(this, arguments, function(c) {
                var d = this.parentNode;
                0 > l.inArray(this, b) && (l.cleanData(y(this)), d && d.replaceChild(c, this))
            }, b)
        }
    });
    l.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        l.fn[b] = function(b) {
            for (var d = [], g = l(b), e = g.length - 1, f = 0; f <= e; f++) b = f === e ? this : this.clone(!0), l(g[f])[c](b), kb.apply(d, b.get());
            return this.pushStack(d)
        }
    });
    var Gb = /^margin/,
        fb = RegExp("^(" + ic + ")(?!px)[a-z%]+$", "i"),
        Ma = function(c) {
            var d = c.ownerDocument.defaultView;
            return d && d.opener || (d = b), d.getComputedStyle(c)
        },
        eb = function() {
            if (Y) {
                Y.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                Y.innerHTML = "";
                cb.appendChild(db);
                var c = b.getComputedStyle(Y);
                mc = "1%" !== c.top;
                nc = "2px" === c.marginLeft;
                oc = "4px" === c.width;
                Y.style.marginRight = "50%";
                pc = "4px" === c.marginRight;
                cb.removeChild(db);
                Y = null
            }
        },
        mc, oc, pc, nc, db = z.createElement("div"),
        Y = z.createElement("div");
    Y.style && (Y.style.backgroundClip = "content-box", Y.cloneNode(!0).style.backgroundClip = "", H.clearCloneStyle = "content-box" === Y.style.backgroundClip, db.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        db.appendChild(Y), l.extend(H, {
            pixelPosition: function() {
                return eb(), mc
            },
            boxSizingReliable: function() {
                return eb(), oc
            },
            pixelMarginRight: function() {
                return eb(), pc
            },
            reliableMarginLeft: function() {
                return eb(), nc
            }
        }));
    !0;
    var pd = /^(none|table(?!-c[ea]).+)/,
        qc = /^--/,
        qd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        rc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Kb = ["Webkit", "Moz", "ms"],
        Jb = z.createElement("div").style;
    l.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Ea(b, "opacity");
                        return "" === d ?
                            "1" : d
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(b, c, d, g) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var e, f, n, j = l.camelCase(c),
                    m = qc.test(c),
                    q = b.style;
                return m || (c = Ib(j)), n = l.cssHooks[c] || l.cssHooks[j], void 0 === d ? n && "get" in n && void 0 !== (e = n.get(b, !1, g)) ? e : q[c] : (f = typeof d, "string" === f && (e = Ca.exec(d)) && e[1] &&
                    (d = u(b, c, e), f = "number"), null != d && d === d && ("number" === f && (d += e && e[3] || (l.cssNumber[j] ? "" : "px")), H.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (q[c] = "inherit"), n && "set" in n && void 0 === (d = n.set(b, d, g)) || (m ? q.setProperty(c, d) : q[c] = d)), void 0)
            }
        },
        css: function(b, c, d, g) {
            var e, f, n, j = l.camelCase(c);
            return qc.test(c) || (c = Ib(j)), n = l.cssHooks[c] || l.cssHooks[j], n && "get" in n && (e = n.get(b, !0, d)), void 0 === e && (e = Ea(b, c, g)), "normal" === e && c in rc && (e = rc[c]), "" === d || d ? (f = parseFloat(e), !0 === d || isFinite(f) ? f || 0 :
                e) : e
        }
    });
    l.each(["height", "width"], function(b, c) {
        l.cssHooks[c] = {
            get: function(b, d, g) {
                if (d) return !pd.test(l.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? Nb(b, c, g) : jc(b, qd, function() {
                    return Nb(b, c, g)
                })
            },
            set: function(b, d, g) {
                var e, f = g && Ma(b);
                g = g && Mb(b, c, g, "border-box" === l.css(b, "boxSizing", !1, f), f);
                return g && (e = Ca.exec(d)) && "px" !== (e[3] || "px") && (b.style[c] = d, d = l.css(b, c)), Lb(b, d, g)
            }
        }
    });
    l.cssHooks.marginLeft = Hb(H.reliableMarginLeft, function(b, c) {
        if (c) return (parseFloat(Ea(b,
            "marginLeft")) || b.getBoundingClientRect().left - jc(b, {
            marginLeft: 0
        }, function() {
            return b.getBoundingClientRect().left
        })) + "px"
    });
    l.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        l.cssHooks[b + c] = {
            expand: function(d) {
                var g = 0,
                    e = {};
                for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) e[b + ja[g] + c] = d[g] || d[g - 2] || d[0];
                return e
            }
        };
        Gb.test(b) || (l.cssHooks[b + c].set = Lb)
    });
    l.fn.extend({
        css: function(b, c) {
            return da(this, function(b, c, d) {
                var g, e = {},
                    f = 0;
                if (Array.isArray(c)) {
                    d = Ma(b);
                    for (g = c.length; f < g; f++) e[c[f]] =
                        l.css(b, c[f], !1, d);
                    return e
                }
                return void 0 !== d ? l.style(b, c, d) : l.css(b, c)
            }, b, c, 1 < arguments.length)
        }
    });
    l.Tween = P;
    P.prototype = {
        constructor: P,
        init: function(b, c, d, g, e, f) {
            this.elem = b;
            this.prop = d;
            this.easing = e || l.easing._default;
            this.options = c;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = f || (l.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = P.propHooks[this.prop];
            return b && b.get ? b.get(this) : P.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = P.propHooks[this.prop];
            return this.options.duration ? this.pos =
                c = l.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : P.propHooks._default.set(this), this
        }
    };
    P.prototype.init.prototype = P.prototype;
    P.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = l.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                l.fx.step[b.prop] ?
                    l.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[l.cssProps[b.prop]] && !l.cssHooks[b.prop] ? b.elem[b.prop] = b.now : l.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    l.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    l.fx = P.prototype.init;
    l.fx.step = {};
    var wa, Na, rd = /^(?:toggle|show|hide)$/,
        sd = /queueHooks$/;
    l.Animation = l.extend(W, {
        tweeners: {
            "*": [function(b, c) {
                var d = this.createTween(b, c);
                return u(d.elem, b, Ca.exec(c), d), d
            }]
        },
        tweener: function(b, c) {
            l.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(S);
            for (var d, g = 0, e = b.length; g < e; g++) d = b[g], W.tweeners[d] = W.tweeners[d] || [], W.tweeners[d].unshift(c)
        },
        prefilters: [function(b, c, d) {
            var g, e, f, n, j, m, q, p, r = "width" in c || "height" in c,
                s = this,
                u = {},
                y = b.style,
                A = b.nodeType && La(b),
                z = C.get(b, "fxshow");
            d.queue || (n = l._queueHooks(b, "fx"), null == n.unqueued && (n.unqueued = 0, j = n.empty.fire, n.empty.fire = function() {
                n.unqueued ||
                    j()
            }), n.unqueued++, s.always(function() {
                s.always(function() {
                    n.unqueued--;
                    l.queue(b, "fx").length || n.empty.fire()
                })
            }));
            for (g in c)
                if (e = c[g], rd.test(e)) {
                    if (delete c[g], f = f || "toggle" === e, e === (A ? "hide" : "show")) {
                        if ("show" !== e || !z || void 0 === z[g]) continue;
                        A = !0
                    }
                    u[g] = z && z[g] || l.style(b, g)
                } if (m = !l.isEmptyObject(c), m || !l.isEmptyObject(u))
                for (g in r && 1 === b.nodeType && (d.overflow = [y.overflow, y.overflowX, y.overflowY], q = z && z.display, null == q && (q = C.get(b, "display")), p = l.css(b, "display"), "none" === p && (q ? p = q : (t([b], !0),
                        q = b.style.display || q, p = l.css(b, "display"), t([b]))), ("inline" === p || "inline-block" === p && null != q) && "none" === l.css(b, "float") && (m || (s.done(function() {
                        y.display = q
                    }), null == q && (p = y.display, q = "none" === p ? "" : p)), y.display = "inline-block")), d.overflow && (y.overflow = "hidden", s.always(function() {
                        y.overflow = d.overflow[0];
                        y.overflowX = d.overflow[1];
                        y.overflowY = d.overflow[2]
                    })), m = !1, u) m || (z ? "hidden" in z && (A = z.hidden) : z = C.access(b, "fxshow", {
                    display: q
                }), f && (z.hidden = !A), A && t([b], !0), s.done(function() {
                    A || t([b]);
                    C.remove(b,
                        "fxshow");
                    for (g in u) l.style(b, g, u[g])
                })), m = Pb(A ? z[g] : 0, g, s), g in z || (z[g] = m.start, A && (m.end = m.start, m.start = 0))
        }],
        prefilter: function(b, c) {
            c ? W.prefilters.unshift(b) : W.prefilters.push(b)
        }
    });
    l.speed = function(b, c, d) {
        var g = b && "object" == typeof b ? l.extend({}, b) : {
            complete: d || !d && c || l.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !l.isFunction(c) && c
        };
        return l.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in l.fx.speeds ? g.duration = l.fx.speeds[g.duration] : g.duration = l.fx.speeds._default), null !=
            g.queue && !0 !== g.queue || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
                l.isFunction(g.old) && g.old.call(this);
                g.queue && l.dequeue(this, g.queue)
            }, g
    };
    l.fn.extend({
        fadeTo: function(b, c, d, g) {
            return this.filter(La).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, g)
        },
        animate: function(b, c, d, g) {
            var e = l.isEmptyObject(b),
                f = l.speed(c, d, g);
            c = function() {
                var c = W(this, l.extend({}, b), f);
                (e || C.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c, e || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
        },
        stop: function(b,
            c, d) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(d)
            };
            return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    e = null != b && b + "queueHooks",
                    f = l.timers,
                    n = C.get(this);
                if (e) n[e] && n[e].stop && g(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && sd.test(e) && g(n[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != b && f[e].queue !== b || (f[e].anim.stop(d), c = !1, f.splice(e, 1));
                !c && d || l.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c,
                    d = C.get(this),
                    g = d[b + "queue"];
                c = d[b + "queueHooks"];
                var e = l.timers,
                    f = g ? g.length : 0;
                d.finish = !0;
                l.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; c < f; c++) g[c] && g[c].finish && g[c].finish.call(this);
                delete d.finish
            })
        }
    });
    l.each(["toggle", "show", "hide"], function(b, c) {
        var d = l.fn[c];
        l.fn[c] = function(b, g, e) {
            return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(Oa(c, !0), b, g, e)
        }
    });
    l.each({
        slideDown: Oa("show"),
        slideUp: Oa("hide"),
        slideToggle: Oa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        l.fn[b] = function(b, d, g) {
            return this.animate(c, b, d, g)
        }
    });
    l.timers = [];
    l.fx.tick = function() {
        var b, c = 0,
            d = l.timers;
        for (wa = l.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
        d.length || l.fx.stop();
        wa = void 0
    };
    l.fx.timer = function(b) {
        l.timers.push(b);
        l.fx.start()
    };
    l.fx.interval = 13;
    l.fx.start = function() {
        Na || (Na = !0, gb())
    };
    l.fx.stop = function() {
        Na = null
    };
    l.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    l.fn.delay = function(c, d) {
        return c = l.fx ? l.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
            var e = b.setTimeout(d, c);
            g.stop = function() {
                b.clearTimeout(e)
            }
        })
    };
    var Aa = z.createElement("input"),
        td = z.createElement("select").appendChild(z.createElement("option"));
    Aa.type = "checkbox";
    H.checkOn = "" !== Aa.value;
    H.optSelected = td.selected;
    Aa = z.createElement("input");
    Aa.value = "t";
    Aa.type = "radio";
    H.radioValue = "t" === Aa.value;
    var sc, Ia = l.expr.attrHandle;
    l.fn.extend({
        attr: function(b,
            c) {
            return da(this, l.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                l.removeAttr(this, b)
            })
        }
    });
    l.extend({
        attr: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof b.getAttribute ? l.prop(b, c, d) : (1 === f && l.isXMLDoc(b) || (e = l.attrHooks[c.toLowerCase()] || (l.expr.match.bool.test(c) ? sc : void 0)), void 0 !== d ? null === d ? void l.removeAttr(b, c) : e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : e && "get" in e && null !== (g = e.get(b, c)) ? g :
                (g = l.find.attr(b, c), null == g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!H.radioValue && "radio" === c && f(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        removeAttr: function(b, c) {
            var d, g = 0,
                e = c && c.match(S);
            if (e && 1 === b.nodeType)
                for (; d = e[g++];) b.removeAttribute(d)
        }
    });
    sc = {
        set: function(b, c, d) {
            return !1 === c ? l.removeAttr(b, d) : b.setAttribute(d, d), d
        }
    };
    l.each(l.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var d = Ia[c] || l.find.attr;
        Ia[c] = function(b, c, g) {
            var e, f, n = c.toLowerCase();
            return g || (f = Ia[n], Ia[n] = e, e = null != d(b, c, g) ? n : null, Ia[n] = f), e
        }
    });
    var ud = /^(?:input|select|textarea|button)$/i,
        vd = /^(?:a|area)$/i;
    l.fn.extend({
        prop: function(b, c) {
            return da(this, l.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[l.propFix[b] || b]
            })
        }
    });
    l.extend({
        prop: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && l.isXMLDoc(b) || (c = l.propFix[c] || c, e = l.propHooks[c]), void 0 !== d ? e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : b[c] = d : e && "get" in
                e && null !== (g = e.get(b, c)) ? g : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = l.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : ud.test(b.nodeName) || vd.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    H.optSelected || (l.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    });
    l.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
        function() {
            l.propFix[this.toLowerCase()] = this
        });
    l.fn.extend({
        addClass: function(b) {
            var c, d, g, e, f, n, j = 0;
            if (l.isFunction(b)) return this.each(function(c) {
                l(this).addClass(b.call(this, c, la(this)))
            });
            if ("string" == typeof b && b)
                for (c = b.match(S) || []; d = this[j++];)
                    if (e = la(d), g = 1 === d.nodeType && " " + ka(e) + " ") {
                        for (n = 0; f = c[n++];) 0 > g.indexOf(" " + f + " ") && (g += f + " ");
                        g = ka(g);
                        e !== g && d.setAttribute("class", g)
                    } return this
        },
        removeClass: function(b) {
            var c, d, g, e, f, n, j = 0;
            if (l.isFunction(b)) return this.each(function(c) {
                l(this).removeClass(b.call(this,
                    c, la(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof b && b)
                for (c = b.match(S) || []; d = this[j++];)
                    if (e = la(d), g = 1 === d.nodeType && " " + ka(e) + " ") {
                        for (n = 0; f = c[n++];)
                            for (; - 1 < g.indexOf(" " + f + " ");) g = g.replace(" " + f + " ", " ");
                        g = ka(g);
                        e !== g && d.setAttribute("class", g)
                    } return this
        },
        toggleClass: function(b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : l.isFunction(b) ? this.each(function(d) {
                l(this).toggleClass(b.call(this, d, la(this), c),
                    c)
            }) : this.each(function() {
                var c, g, e, f;
                if ("string" === d) {
                    g = 0;
                    e = l(this);
                    for (f = b.match(S) || []; c = f[g++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c)
                } else void 0 !== b && "boolean" !== d || (c = la(this), c && C.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : C.get(this, "__className__") || ""))
            })
        },
        hasClass: function(b) {
            var c, d = 0;
            for (b = " " + b + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + ka(la(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var wd = /\r/g;
    l.fn.extend({
        val: function(b) {
            var c, d,
                g, e = this[0];
            if (arguments.length) return g = l.isFunction(b), this.each(function(d) {
                var e;
                1 === this.nodeType && (e = g ? b.call(this, d, l(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = l.map(e, function(b) {
                    return null == b ? "" : b + ""
                })), c = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
            });
            if (e) return c = l.valHooks[e.type] || l.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(e, "value")) ? d : (d = e.value,
                "string" == typeof d ? d.replace(wd, "") : null == d ? "" : d)
        }
    });
    l.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = l.find.attr(b, "value");
                    return null != c ? c : ka(l.text(b))
                }
            },
            select: {
                get: function(b) {
                    var c, d, g = b.options,
                        e = b.selectedIndex,
                        n = "select-one" === b.type,
                        j = n ? null : [],
                        q = n ? e + 1 : g.length;
                    for (d = 0 > e ? q : n ? e : 0; d < q; d++)
                        if (c = g[d], (c.selected || d === e) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                            if (b = l(c).val(), n) return b;
                            j.push(b)
                        } return j
                },
                set: function(b, c) {
                    for (var d, g, e = b.options, f = l.makeArray(c),
                            n = e.length; n--;) g = e[n], (g.selected = -1 < l.inArray(l.valHooks.option.get(g), f)) && (d = !0);
                    return d || (b.selectedIndex = -1), f
                }
            }
        }
    });
    l.each(["radio", "checkbox"], function() {
        l.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c)) return b.checked = -1 < l.inArray(l(b).val(), c)
            }
        };
        H.checkOn || (l.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var tc = /^(?:focusinfocus|focusoutblur)$/;
    l.extend(l.event, {
        trigger: function(c, d, g, e) {
            var f, n, j, q, m, p, r, s = [g || z],
                u = Qa.call(c, "type") ? c.type :
                c;
            f = Qa.call(c, "namespace") ? c.namespace.split(".") : [];
            if (n = j = g = g || z, 3 !== g.nodeType && 8 !== g.nodeType && !tc.test(u + l.event.triggered) && (-1 < u.indexOf(".") && (f = u.split("."), u = f.shift(), f.sort()), m = 0 > u.indexOf(":") && "on" + u, c = c[l.expando] ? c : new l.Event(u, "object" == typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = f.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : l.makeArray(d, [c]), r = l.event.special[u] || {}, e || !r.trigger ||
                    !1 !== r.trigger.apply(g, d))) {
                if (!e && !r.noBubble && !l.isWindow(g)) {
                    q = r.delegateType || u;
                    for (tc.test(q + u) || (n = n.parentNode); n; n = n.parentNode) s.push(n), j = n;
                    j === (g.ownerDocument || z) && s.push(j.defaultView || j.parentWindow || b)
                }
                for (f = 0;
                    (n = s[f++]) && !c.isPropagationStopped();) c.type = 1 < f ? q : r.bindType || u, (p = (C.get(n, "events") || {})[c.type] && C.get(n, "handle")) && p.apply(n, d), (p = m && n[m]) && p.apply && $a(n) && (c.result = p.apply(n, d), !1 === c.result && c.preventDefault());
                return c.type = u, e || c.isDefaultPrevented() || r._default &&
                    !1 !== r._default.apply(s.pop(), d) || !$a(g) || m && l.isFunction(g[u]) && !l.isWindow(g) && (j = g[m], j && (g[m] = null), l.event.triggered = u, g[u](), l.event.triggered = void 0, j && (g[m] = j)), c.result
            }
        },
        simulate: function(b, c, d) {
            b = l.extend(new l.Event, d, {
                type: b,
                isSimulated: !0
            });
            l.event.trigger(b, null, c)
        }
    });
    l.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                l.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            var d = this[0];
            if (d) return l.event.trigger(b, c, d, !0)
        }
    });
    l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(b, c) {
            l.fn[c] = function(b, d) {
                return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            }
        });
    l.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    H.focusin = "onfocusin" in b;
    H.focusin || l.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = function(b) {
            l.event.simulate(c, b.target, l.event.fix(b))
        };
        l.event.special[c] = {
            setup: function() {
                var g = this.ownerDocument || this,
                    e = C.access(g, c);
                e || g.addEventListener(b, d, !0);
                C.access(g, c, (e || 0) + 1)
            },
            teardown: function() {
                var g = this.ownerDocument ||
                    this,
                    e = C.access(g, c) - 1;
                e ? C.access(g, c, e) : (g.removeEventListener(b, d, !0), C.remove(g, c))
            }
        }
    });
    var Ja = b.location,
        uc = l.now(),
        wb = /\?/;
    l.parseXML = function(c) {
        var d;
        if (!c || "string" != typeof c) return null;
        try {
            d = (new b.DOMParser).parseFromString(c, "text/xml")
        } catch (g) {
            d = void 0
        }
        return d && !d.getElementsByTagName("parsererror").length || l.error("Invalid XML: " + c), d
    };
    var Lc = /\[\]$/,
        vc = /\r?\n/g,
        xd = /^(?:submit|button|image|reset|file)$/i,
        yd = /^(?:input|select|textarea|keygen)/i;
    l.param = function(b, c) {
        var d, g = [],
            e = function(b,
                c) {
                var d = l.isFunction(c) ? c() : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
            };
        if (Array.isArray(b) || b.jquery && !l.isPlainObject(b)) l.each(b, function() {
            e(this.name, this.value)
        });
        else
            for (d in b) hb(d, b[d], c, e);
        return g.join("&")
    };
    l.fn.extend({
        serialize: function() {
            return l.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = l.prop(this, "elements");
                return b ? l.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !l(this).is(":disabled") &&
                    yd.test(this.nodeName) && !xd.test(b) && (this.checked || !kc.test(b))
            }).map(function(b, c) {
                var d = l(this).val();
                return null == d ? null : Array.isArray(d) ? l.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(vc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(vc, "\r\n")
                }
            }).get()
        }
    });
    var zd = /%20/g,
        Ad = /#.*$/,
        Bd = /([?&])_=[^&]*/,
        Cd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dd = /^(?:GET|HEAD)$/,
        Ed = /^\/\//,
        wc = {},
        ib = {},
        xc = "*/".concat("*"),
        xb = z.createElement("a");
    xb.href = Ja.href;
    l.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ja.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ja.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": l.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? jb(jb(b, l.ajaxSettings), c) : jb(l.ajaxSettings, b)
        },
        ajaxPrefilter: Qb(wc),
        ajaxTransport: Qb(ib),
        ajax: function(c, d) {
            function g(c, d, j, m) {
                var s, u, x, B, M = d;
                if (!p) {
                    p = !0;
                    q && b.clearTimeout(q);
                    e = void 0;
                    n = m || "";
                    I.readyState = 0 < c ? 4 : 0;
                    m = 200 <= c && 300 > c || 304 === c;
                    if (j) {
                        x = t;
                        for (var ta = I, z, E, F, D, K = x.contents, H = x.dataTypes;
                            "*" === H[0];) H.shift(), void 0 === z && (z = x.mimeType || ta.getResponseHeader("Content-Type"));
                        if (z)
                            for (E in K)
                                if (K[E] &&
                                    K[E].test(z)) {
                                    H.unshift(E);
                                    break
                                } if (H[0] in j) F = H[0];
                        else {
                            for (E in j) {
                                if (!H[0] || x.converters[E + " " + H[0]]) {
                                    F = E;
                                    break
                                }
                                D || (D = E)
                            }
                            F = F || D
                        }
                        x = j = F ? (F !== H[0] && H.unshift(F), j[F]) : void 0
                    }
                    var J;
                    a: {
                        j = t;z = x;E = I;F = m;
                        var Q, N, O;x = {};ta = j.dataTypes.slice();
                        if (ta[1])
                            for (Q in j.converters) x[Q.toLowerCase()] = j.converters[Q];
                        for (D = ta.shift(); D;)
                            if (j.responseFields[D] && (E[j.responseFields[D]] = z), !O && F && j.dataFilter && (z = j.dataFilter(z, j.dataType)), O = D, D = ta.shift())
                                if ("*" === D) D = O;
                                else if ("*" !== O && O !== D) {
                            if (Q = x[O + " " + D] || x["* " +
                                    D], !Q)
                                for (J in x)
                                    if (N = J.split(" "), N[1] === D && (Q = x[O + " " + N[0]] || x["* " + N[0]])) {
                                        !0 === Q ? Q = x[J] : !0 !== x[J] && (D = N[0], ta.unshift(N[1]));
                                        break
                                    } if (!0 !== Q)
                                if (Q && j["throws"]) z = Q(z);
                                else try {
                                    z = Q(z)
                                } catch (P) {
                                    J = {
                                        state: "parsererror",
                                        error: Q ? P : "No conversion from " + O + " to " + D
                                    };
                                    break a
                                }
                        }
                        J = {
                            state: "success",
                            data: z
                        }
                    }
                    x = J;
                    m ? (t.ifModified && (B = I.getResponseHeader("Last-Modified"), B && (l.lastModified[f] = B), B = I.getResponseHeader("etag"), B && (l.etag[f] = B)), 204 === c || "HEAD" === t.type ? M = "nocontent" : 304 === c ? M = "notmodified" : (M = x.state,
                        s = x.data, u = x.error, m = !u)) : (u = M, !c && M || (M = "error", 0 > c && (c = 0)));
                    I.status = c;
                    I.statusText = (d || M) + "";
                    m ? C.resolveWith(y, [s, M, I]) : C.rejectWith(y, [I, M, u]);
                    I.statusCode(G);
                    G = void 0;
                    r && A.trigger(m ? "ajaxSuccess" : "ajaxError", [I, t, m ? s : u]);
                    L.fireWith(y, [I, M]);
                    r && (A.trigger("ajaxComplete", [I, t]), --l.active || l.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = void 0);
            d = d || {};
            var e, f, n, j, q, m, p, r, s, u, t = l.ajaxSetup({}, d),
                y = t.context || t,
                A = t.context && (y.nodeType || y.jquery) ? l(y) : l.event,
                C = l.Deferred(),
                L = l.Callbacks("once memory"),
                G = t.statusCode || {},
                E = {},
                F = {},
                D = "canceled",
                I = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var c;
                        if (p) {
                            if (!j)
                                for (j = {}; c = Cd.exec(n);) j[c[1].toLowerCase()] = c[2];
                            c = j[b.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return p ? n : null
                    },
                    setRequestHeader: function(b, c) {
                        return null == p && (b = F[b.toLowerCase()] = F[b.toLowerCase()] || b, E[b] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null == p && (t.mimeType = b), this
                    },
                    statusCode: function(b) {
                        var c;
                        if (b)
                            if (p) I.always(b[I.status]);
                            else
                                for (c in b) G[c] = [G[c], b[c]];
                        return this
                    },
                    abort: function(b) {
                        b = b || D;
                        return e && e.abort(b), g(0, b), this
                    }
                };
            if (C.promise(I), t.url = ((c || t.url || Ja.href) + "").replace(Ed, Ja.protocol + "//"), t.type = d.method || d.type || t.method || t.type, t.dataTypes = (t.dataType || "*").toLowerCase().match(S) || [""], null == t.crossDomain) {
                m = z.createElement("a");
                try {
                    m.href = t.url, m.href = m.href, t.crossDomain = xb.protocol + "//" + xb.host != m.protocol + "//" + m.host
                } catch (H) {
                    t.crossDomain = !0
                }
            }
            if (t.data && t.processData && "string" != typeof t.data && (t.data = l.param(t.data,
                    t.traditional)), Rb(wc, t, d, I), p) return I;
            (r = l.event && t.global) && 0 === l.active++ && l.event.trigger("ajaxStart");
            t.type = t.type.toUpperCase();
            t.hasContent = !Dd.test(t.type);
            f = t.url.replace(Ad, "");
            t.hasContent ? t.data && t.processData && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && (t.data = t.data.replace(zd, "+")) : (u = t.url.slice(f.length), t.data && (f += (wb.test(f) ? "&" : "?") + t.data, delete t.data), !1 === t.cache && (f = f.replace(Bd, "$1"), u = (wb.test(f) ? "&" : "?") + "_=" + uc++ + u), t.url = f + u);
            t.ifModified &&
                (l.lastModified[f] && I.setRequestHeader("If-Modified-Since", l.lastModified[f]), l.etag[f] && I.setRequestHeader("If-None-Match", l.etag[f]));
            (t.data && t.hasContent && !1 !== t.contentType || d.contentType) && I.setRequestHeader("Content-Type", t.contentType);
            I.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + xc + "; q=0.01" : "") : t.accepts["*"]);
            for (s in t.headers) I.setRequestHeader(s, t.headers[s]);
            if (t.beforeSend && (!1 === t.beforeSend.call(y, I, t) ||
                    p)) return I.abort();
            if (D = "abort", L.add(t.complete), I.done(t.success), I.fail(t.error), e = Rb(ib, t, d, I)) {
                if (I.readyState = 1, r && A.trigger("ajaxSend", [I, t]), p) return I;
                t.async && 0 < t.timeout && (q = b.setTimeout(function() {
                    I.abort("timeout")
                }, t.timeout));
                try {
                    p = !1, e.send(E, g)
                } catch (K) {
                    if (p) throw K;
                    g(-1, K)
                }
            } else g(-1, "No Transport");
            return I
        },
        getJSON: function(b, c, d) {
            return l.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return l.get(b, void 0, c, "script")
        }
    });
    l.each(["get", "post"], function(b, c) {
        l[c] = function(b, d, g, e) {
            return l.isFunction(d) &&
                (e = e || g, g = d, d = void 0), l.ajax(l.extend({
                    url: b,
                    type: c,
                    dataType: e,
                    data: d,
                    success: g
                }, l.isPlainObject(b) && b))
        }
    });
    l._evalUrl = function(b) {
        return l.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    l.fn.extend({
        wrapAll: function(b) {
            var c;
            return this[0] && (l.isFunction(b) && (b = b.call(this[0])), c = l(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                    for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                    return b
                }).append(this)),
                this
        },
        wrapInner: function(b) {
            return l.isFunction(b) ? this.each(function(c) {
                l(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = l(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = l.isFunction(b);
            return this.each(function(d) {
                l(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                l(this).replaceWith(this.childNodes)
            }), this
        }
    });
    l.expr.pseudos.hidden = function(b) {
        return !l.expr.pseudos.visible(b)
    };
    l.expr.pseudos.visible =
        function(b) {
            return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
        };
    l.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    };
    var Fd = {
            "0": 200,
            1223: 204
        },
        Ka = l.ajaxSettings.xhr();
    H.cors = !!Ka && "withCredentials" in Ka;
    H.ajax = Ka = !!Ka;
    l.ajaxTransport(function(c) {
        var d, g;
        if (H.cors || Ka && !c.crossDomain) return {
            send: function(e, f) {
                var n, l = c.xhr();
                if (l.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                    for (n in c.xhrFields) l[n] = c.xhrFields[n];
                c.mimeType && l.overrideMimeType &&
                    l.overrideMimeType(c.mimeType);
                c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (n in e) l.setRequestHeader(n, e[n]);
                d = function(b) {
                    return function() {
                        d && (d = g = l.onload = l.onerror = l.onabort = l.onreadystatechange = null, "abort" === b ? l.abort() : "error" === b ? "number" != typeof l.status ? f(0, "error") : f(l.status, l.statusText) : f(Fd[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                            binary: l.response
                        } : {
                            text: l.responseText
                        }, l.getAllResponseHeaders()))
                    }
                };
                l.onload = d();
                g = l.onerror = d("error");
                void 0 !== l.onabort ? l.onabort = g : l.onreadystatechange = function() {
                    4 === l.readyState && b.setTimeout(function() {
                        d && g()
                    })
                };
                d = d("abort");
                try {
                    l.send(c.hasContent && c.data || null)
                } catch (j) {
                    if (d) throw j;
                }
            },
            abort: function() {
                d && d()
            }
        }
    });
    l.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    });
    l.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return l.globalEval(b),
                    b
            }
        }
    });
    l.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    l.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, d;
            return {
                send: function(g, e) {
                    c = l("<script>").prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", d = function(b) {
                        c.remove();
                        d = null;
                        b && e("error" === b.type ? 404 : 200, b.type)
                    });
                    z.head.appendChild(c[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    });
    var yc = [],
        yb = /(=)\?(?=&|$)|\?\?/;
    l.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = yc.pop() || l.expando +
                "_" + uc++;
            return this[b] = !0, b
        }
    });
    l.ajaxPrefilter("json jsonp", function(c, d, g) {
        var e, f, n, j = !1 !== c.jsonp && (yb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && yb.test(c.data) && "data");
        if (j || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = l.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, j ? c[j] = c[j].replace(yb, "$1" + e) : !1 !== c.jsonp && (c.url += (wb.test(c.url) ? "&" : "?") + c.jsonp + "=" + e), c.converters["script json"] = function() {
            return n ||
                l.error(e + " was not called"), n[0]
        }, c.dataTypes[0] = "json", f = b[e], b[e] = function() {
            n = arguments
        }, g.always(function() {
            void 0 === f ? l(b).removeProp(e) : b[e] = f;
            c[e] && (c.jsonpCallback = d.jsonpCallback, yc.push(e));
            n && l.isFunction(f) && f(n[0]);
            n = f = void 0
        }), "script"
    });
    var Gd = H,
        zc, Ac = z.implementation.createHTMLDocument("").body;
    zc = (Ac.innerHTML = "<form></form><form></form>", 2 === Ac.childNodes.length);
    Gd.createHTMLDocument = zc;
    l.parseHTML = function(b, c, d) {
        if ("string" != typeof b) return [];
        "boolean" == typeof c && (d = c, c = !1);
        var g, e, f;
        return c || (H.createHTMLDocument ? (c = z.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = z.location.href, c.head.appendChild(g)) : c = z), e = gc.exec(b), f = !d && [], e ? [c.createElement(e[1])] : (e = D([b], c, f), f && f.length && l(f).remove(), l.merge([], e.childNodes))
    };
    l.fn.load = function(b, c, d) {
        var g, e, f, n = this,
            j = b.indexOf(" ");
        return -1 < j && (g = ka(b.slice(j)), b = b.slice(0, j)), l.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 < n.length && l.ajax({
            url: b,
            type: e || "GET",
            dataType: "html",
            data: c
        }).done(function(b) {
            f = arguments;
            n.html(g ? l("<div>").append(l.parseHTML(b)).find(g) : b)
        }).always(d && function(b, c) {
            n.each(function() {
                d.apply(this, f || [b.responseText, c, b])
            })
        }), this
    };
    l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        l.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    l.expr.pseudos.animated = function(b) {
        return l.grep(l.timers, function(c) {
            return b === c.elem
        }).length
    };
    l.offset = {
        setOffset: function(b, c, d) {
            var g, e, f, n, j, m, q = l.css(b, "position"),
                p = l(b),
                r = {};
            "static" === q && (b.style.position = "relative");
            j = p.offset();
            f = l.css(b, "top");
            m = l.css(b, "left");
            ("absolute" === q || "fixed" === q) && -1 < (f + m).indexOf("auto") ? (g = p.position(), n = g.top, e = g.left) : (n = parseFloat(f) || 0, e = parseFloat(m) || 0);
            l.isFunction(c) && (c = c.call(b, d, l.extend({}, j)));
            null != c.top && (r.top = c.top - j.top + n);
            null != c.left && (r.left = c.left - j.left + e);
            "using" in c ? c.using.call(b, r) : p.css(r)
        }
    };
    l.fn.extend({
        offset: function(b) {
            if (arguments.length) return void 0 === b ? this : this.each(function(c) {
                l.offset.setOffset(this,
                    b, c)
            });
            var c, d, g, e, f = this[0];
            if (f) return f.getClientRects().length ? (g = f.getBoundingClientRect(), c = f.ownerDocument, d = c.documentElement, e = c.defaultView, {
                top: g.top + e.pageYOffset - d.clientTop,
                left: g.left + e.pageXOffset - d.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var b, c, d = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === l.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
                    top: g.top + l.css(b[0], "borderTopWidth", !0),
                    left: g.left +
                        l.css(b[0], "borderLeftWidth", !0)
                }), {
                    top: c.top - g.top - l.css(d, "marginTop", !0),
                    left: c.left - g.left - l.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && "static" === l.css(b, "position");) b = b.offsetParent;
                return b || cb
            })
        }
    });
    l.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        l.fn[b] = function(g) {
            return da(this, function(b, g, e) {
                var f;
                return l.isWindow(b) ? f = b : 9 === b.nodeType && (f = b.defaultView), void 0 === e ? f ? f[c] :
                    b[g] : void(f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : b[g] = e)
            }, b, g, arguments.length)
        }
    });
    l.each(["top", "left"], function(b, c) {
        l.cssHooks[c] = Hb(H.pixelPosition, function(b, d) {
            if (d) return d = Ea(b, c), fb.test(d) ? l(b).position()[c] + "px" : d
        })
    });
    l.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        l.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, g) {
            l.fn[g] = function(e, f) {
                var n = arguments.length && (d || "boolean" != typeof e),
                    j = d || (!0 === e || !0 === f ? "margin" : "border");
                return da(this, function(c, d, e) {
                    var f;
                    return l.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === e ? l.css(c, d, j) : l.style(c, d, e, j)
                }, c, n ? e : void 0, n)
            }
        })
    });
    l.fn.extend({
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        delegate: function(b, c, d, g) {
            return this.on(c, b, d, g)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ?
                this.off(b, "**") : this.off(c, b || "**", d)
        }
    });
    l.holdReady = function(b) {
        b ? l.readyWait++ : l.ready(!0)
    };
    l.isArray = Array.isArray;
    l.parseJSON = JSON.parse;
    l.nodeName = f;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return l
    });
    var Hd = b.jQuery,
        Id = b.$;
    return l.noConflict = function(c) {
        return b.$ === l && (b.$ = Id), c && b.jQuery === l && (b.jQuery = Hd), l
    }, c || (b.jQuery = b.$ = l), l
});

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var f = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", f, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", f, !0);
                    f("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, f = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var j = document.createElement("object");
            j.id = "jukebox-flashstream-" + this.id;
            j.setAttribute("type", "application/x-shockwave-flash");
            j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            j.setAttribute("width", "0");
            j.setAttribute("height", "0");
            f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            f.flashvars = b.join("&amp;");
            for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            f.play = !1;
            f.loop = !1;
            f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in f) c.setAttribute(e, f[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var f in d)
                    if (e >= d[f].start && e <=
                        d[f].end) {
                        b = f;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                            e: "3gp",
                            m: ["audio/3gpp", "audio/amr"]
                        }, {
                            e: "aac",
                            m: ["audio/aac", "audio/aacp"]
                        }, {
                            e: "amr",
                            m: ["audio/amr", "audio/3gpp"]
                        }, {
                            e: "caf",
                            m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                        }, {
                            e: "m4a",
                            m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                        },
                        {
                            e: "mp3",
                            m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                        }, {
                            e: "mpga",
                            m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                        }, {
                            e: "mp4",
                            m: ["audio/mp4", "video/mp4"]
                        }, {
                            e: "ogg",
                            m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                        }, {
                            e: "wav",
                            m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                        }, {
                            e: "webm",
                            m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                        }
                    ],
                    d, e, f = 0, j = c.length; f < j; f++)
                if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m)
                    for (var m = 0, p = c[f].m.length; m < p; m++)
                        if (d = c[f].m[m], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (g) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var f in c) d[f] = c[f];
            d.autoplay = !1;
            f = new jukebox.Player(d, b);
            f.isClone = !0;
            f.wasReady = !1;
            return this.__clones[f.id] = f
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                f = e.match(/\.([^\.]*)$/)[1];
            if (f && this.codecs[f]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._counter = 1E3;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || p();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
                            var m = d._howls[e]._soundById(f[j]);
                            m && m._node && (m._node.volume = m._volume * b)
                        }
                return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || p();
            d._muted = b;
            d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var f = d._howls[e]._getSoundIds(),
                            j = 0; j < f.length; j++) {
                        var m = d._howls[e]._soundById(f[j]);
                        m && m._node && (m._node.muted = b ? !0 : m._muted)
                    }
            return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, p());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d =
                        new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (f) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                j = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                j = j && 33 > parseInt(j[0].split("/")[1],
                    10);
            b._codecs = {
                mp3: !(j || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!f,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") ||
                    d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var f = function() {
                    c._autoResume();
                    var d = b.ctx.createBufferSource();
                    d.buffer = b._scratchBuffer;
                    d.connect(b.ctx.destination);
                    "undefined" === typeof d.start ? d.noteOn(0) : d.start(0);
                    "function" === typeof b.ctx.resume && b.ctx.resume();
                    d.onended = function() {
                        d.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchstart", f, !0);
                        document.removeEventListener("touchend", f, !0)
                    }
                };
                document.addEventListener("touchstart", f, !0);
                document.addEventListener("touchend", f, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !==
                typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b =
                this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") :
                this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || p();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._xhrWithCredentials = b.xhrWithCredentials || !1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._playLock = !1;
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onplayerror = b.onplayerror ? [{
                fn: b.onplayerror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var q, p;
                    if (this._format && this._format[d]) q = this._format[d];
                    else {
                        p = this._src[d];
                        if ("string" !== typeof p) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(q = /^data:audio\/([^;,]+);/i.exec(p)) || (q = /\.([^.]+)$/.exec(p.split("?", 1)[0]));
                        q && (q = q[1].toLowerCase())
                    }
                    q || console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                    if (q && c.codecs(q)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new e(this);
                    if (this._webAudio) {
                        var s = this,
                            u = s._src;
                        if (f[u]) s._duration = f[u].duration, m(s);
                        else if (/^data:[^;]+;base64,/.test(u)) {
                            b = atob(u.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (q = 0; q < b.length; ++q) d[q] = b.charCodeAt(q);
                            j(d.buffer, s)
                        } else {
                            var t = new XMLHttpRequest;
                            t.open("GET", u, !0);
                            t.withCredentials = s._xhrWithCredentials;
                            t.responseType = "arraybuffer";
                            t.onload = function() {
                                var b = (t.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? s._emit("loaderror", null, "Failed loading audio file with status: " +
                                    t.status + ".") : j(t.response, s)
                            };
                            t.onerror = function() {
                                s._webAudio && (s._html5 = !0, s._webAudio = !1, s._sounds = [], delete f[u], s.load())
                            };
                            try {
                                t.send()
                            } catch (y) {
                                t.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                f = null;
            if ("number" === typeof b) f = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var j = 0, m = 0; m < e._sounds.length; m++) e._sounds[m]._paused &&
                        !e._sounds[m]._ended && (j++, f = e._sounds[m]._id);
                    1 === j ? b = null : f = null
                }
            }
            var p = f ? e._soundById(f) : e._inactiveSound();
            if (!p) return null;
            f && !b && (b = p._sprite || "__default");
            if ("loaded" !== e._state) {
                p._sprite = b;
                p._ended = !1;
                var y = p._id;
                e._queue.push({
                    event: "play",
                    action: function() {
                        e.play(y)
                    }
                });
                return y
            }
            if (f && !p._paused) return d || e._loadQueue("play"), p._id;
            e._webAudio && c._autoResume();
            var L = Math.max(0, 0 < p._seek ? p._seek : e._sprite[b][0] / 1E3),
                D = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - L),
                ea = 1E3 * D / Math.abs(p._rate);
            p._paused = !1;
            p._ended = !1;
            p._sprite = b;
            p._seek = L;
            p._start = e._sprite[b][0] / 1E3;
            p._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            p._loop = !(!p._loop && !e._sprite[b][2]);
            var E = p._node;
            if (e._webAudio) f = function() {
                e._refreshBuffer(p);
                E.gain.setValueAtTime(p._muted || e._muted ? 0 : p._volume, c.ctx.currentTime);
                p._playStart = c.ctx.currentTime;
                "undefined" === typeof E.bufferSource.start ? p._loop ? E.bufferSource.noteGrainOn(0, L, 86400) : E.bufferSource.noteGrainOn(0, L, D) : p._loop ? E.bufferSource.start(0, L, 86400) : E.bufferSource.start(0,
                    L, D);
                Infinity !== ea && (e._endTimers[p._id] = setTimeout(e._ended.bind(e, p), ea));
                d || setTimeout(function() {
                    e._emit("play", p._id)
                }, 0)
            }, "running" === c.state ? f() : (e.once("resume", f), e._clearTimer(p._id));
            else {
                var Da = function() {
                        E.currentTime = L;
                        E.muted = p._muted || e._muted || c._muted || E.muted;
                        E.volume = p._volume * c.volume();
                        E.playbackRate = p._rate;
                        try {
                            var f = E.play();
                            if ("undefined" !== typeof Promise && f instanceof Promise) {
                                e._playLock = !0;
                                var j = function() {
                                    e._playLock = !1;
                                    d || e._emit("play", p._id)
                                };
                                f.then(j, j)
                            } else d || e._emit("play",
                                p._id);
                            E.playbackRate = p._rate;
                            E.paused ? e._emit("playerror", p._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.") : "__default" !== b || p._loop ? e._endTimers[p._id] = setTimeout(e._ended.bind(e, p), ea) : (e._endTimers[p._id] = function() {
                                e._ended(p);
                                E.removeEventListener("ended", e._endTimers[p._id], !1)
                            }, E.addEventListener("ended", e._endTimers[p._id], !1))
                        } catch (m) {
                            e._emit("playerror", p._id, m)
                        }
                    },
                    f = window && window.ejecta || !E.readyState &&
                    c._navigator.isCocoonJS;
                if (3 <= E.readyState || f) Da();
                else {
                    var ua = function() {
                        Da();
                        E.removeEventListener(c._canPlayEvent, ua, !1)
                    };
                    E.addEventListener(c._canPlayEvent, ua, !1);
                    e._clearTimer(p._id)
                }
            }
            return p._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state || d._playLock) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var j = d._soundById(e[f]);
                if (j && !j._paused && (j._seek = d.seek(e[f]), j._rateSeek = 0, j._paused = !0, d._stopFade(e[f]),
                        j._node))
                    if (d._webAudio) {
                        if (!j._node.bufferSource) continue;
                        "undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0);
                        d._cleanBuffer(j._node)
                    } else(!isNaN(j._node.duration) || Infinity === j._node.duration) && j._node.pause();
                c || d._emit("pause", j ? j._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var j =
                    d._soundById(e[f]);
                if (j) {
                    j._seek = j._start || 0;
                    j._rateSeek = 0;
                    j._paused = !0;
                    j._ended = !0;
                    d._stopFade(e[f]);
                    if (j._node)
                        if (d._webAudio) j._node.bufferSource && ("undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0), d._cleanBuffer(j._node));
                        else if (!isNaN(j._node.duration) || Infinity === j._node.duration) j._node.currentTime = j._start || 0, j._node.pause();
                    c || d._emit("stop", j._id)
                }
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var f = e._getSoundIds(d), j = 0; j < f.length; j++) {
                var m = e._soundById(f[j]);
                m && (m._muted = b, m._interval && e._stopFade(m._id), e._webAudio && m._node ? m._node.gain.setValueAtTime(b ? 0 : m._volume, c.ctx.currentTime) : m._node && (m._node.muted = c._muted ? !0 : b), e._emit("mute", m._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" ===
                typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var j;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = e);
                f = b._getSoundIds(f);
                for (var m = 0; m < f.length; m++)
                    if (j = b._soundById(f[m])) j._volume = e, d[2] || b._stopFade(f[m]), b._webAudio && j._node && !j._muted ? j._node.gain.setValueAtTime(e, c.ctx.currentTime) :
                        j._node && !j._muted && (j._node.volume = e * c.volume()), b._emit("volume", j._id)
            } else return (j = f ? b._soundById(f) : b._sounds[0]) ? j._volume : 0;
            return b
        },
        fade: function(b, d, e, f) {
            var j = this;
            if ("loaded" !== j._state) return j._queue.push({
                event: "fade",
                action: function() {
                    j.fade(b, d, e, f)
                }
            }), j;
            j.volume(b, f);
            for (var m = j._getSoundIds(f), p = 0; p < m.length; p++) {
                var y = j._soundById(m[p]);
                if (y) {
                    f || j._stopFade(m[p]);
                    if (j._webAudio && !y._muted) {
                        var L = c.ctx.currentTime,
                            D = L + e / 1E3;
                        y._volume = b;
                        y._node.gain.setValueAtTime(b, L);
                        y._node.gain.linearRampToValueAtTime(d,
                            D)
                    }
                    j._startFadeInterval(y, b, d, e, m[p], "undefined" === typeof f)
                }
            }
            return j
        },
        _startFadeInterval: function(b, c, d, e, f, j) {
            var m = this,
                p = c,
                L = d - c;
            f = Math.abs(L / 0.01);
            f = Math.max(4, 0 < f ? e / f : e);
            var D = Date.now();
            b._fadeTo = d;
            b._interval = setInterval(function() {
                var f = (Date.now() - D) / e;
                D = Date.now();
                p += L * f;
                p = Math.max(0, p);
                p = Math.min(1, p);
                p = Math.round(100 * p) / 100;
                m._webAudio ? b._volume = p : m.volume(p, b._id, !0);
                j && (m._volume = p);
                if (d < c && p <= d || d > c && p >= d) clearInterval(b._interval), b._interval = null, b._fadeTo = null, m.volume(d, b._id),
                    m._emit("fade", b._id)
            }, f)
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this.volume(d._fadeTo, b), d._fadeTo = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d =
                parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var j;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = e);
                f = b._getSoundIds(f);
                for (var m = 0; m < f.length; m++)
                    if (j = b._soundById(f[m])) {
                        j._rateSeek = b.seek(f[m]);
                        j._playStart = b._webAudio ? c.ctx.currentTime : j._playStart;
                        j._rate = e;
                        b._webAudio && j._node && j._node.bufferSource ? j._node.bufferSource.playbackRate.setValueAtTime(e, c.ctx.currentTime) : j._node && (j._node.playbackRate = e);
                        var p = b.seek(f[m]),
                            p = 1E3 * ((b._sprite[j._sprite][0] +
                                b._sprite[j._sprite][1]) / 1E3 - p) / Math.abs(j._rate);
                        if (b._endTimers[f[m]] || !j._paused) b._clearTimer(f[m]), b._endTimers[f[m]] = setTimeout(b._ended.bind(b, j), p);
                        b._emit("rate", j._id)
                    }
            } else return (j = b._soundById(f)) ? j._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : b._sounds.length && (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" ===
                typeof f) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var j = b._soundById(f);
            if (j)
                if ("number" === typeof e && 0 <= e) {
                    var m = b.playing(f);
                    m && b.pause(f, !0);
                    j._seek = e;
                    j._ended = !1;
                    b._clearTimer(f);
                    m && b.play(f, !0);
                    !b._webAudio && j._node && (j._node.currentTime = e);
                    if (m && !b._webAudio) {
                        var p = function() {
                            b._playLock ? setTimeout(p, 0) : b._emit("seek", f)
                        };
                        setTimeout(p, 0)
                    } else b._emit("seek", f)
                } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - j._playStart :
                    0, j._seek + ((j._rateSeek ? j._rateSeek - j._seek : 0) + e * Math.abs(j._rate))) : j._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) b[d]._paused || this.stop(b[d]._id),
                this._webAudio || (/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) || (b[d]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1)), delete b[d]._node, this._clearTimer(b[d]._id);
            d = c._howls.indexOf(this);
            0 <= d && c._howls.splice(d, 1);
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                } f && b && delete f[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" + b],
                f = 0;
            "number" === typeof c && (d = c, c = null);
            if (c || d)
                for (f = 0; f < e.length; f++) {
                    if (b = d === e[f].id, c === e[f].fn && b || !c && b) {
                        e.splice(f, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    c = Object.keys(this);
                    for (f = 0; f < c.length; f++) 0 === c[f].indexOf("_on") && Array.isArray(this[c[f]]) && (this[c[f]] = [])
                } return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
                if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
            this._loadQueue(b);
            return this
        },
        _loadQueue: function(b) {
            if (0 < this._queue.length) {
                var c = this._queue[0];
                c.event === b && (this._queue.shift(), this._loadQueue());
                b || c.action()
            }
            return this
        },
        _ended: function(b) {
            var d = b._sprite;
            if (!this._webAudio && b._node &&
                !b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this;
            d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start ||
                0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id, !0);
            return this
        },
        _clearTimer: function(b) {
            if (this._endTimers[b]) {
                if ("function" !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
                else {
                    var c = this._soundById(b);
                    c && c._node && c._node.removeEventListener("ended", this._endTimers[b], !1)
                }
                delete this._endTimers[b]
            }
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new e(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" ===
                typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = f[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime);
            return this
        },
        _cleanBuffer: function(b) {
            if (c._scratchBuffer && b.bufferSource) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = c._scratchBuffer
                } catch (d) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var e = function(b) {
        this._parent = b;
        this.init()
    };
    e.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = ++c._counter;
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent,
                this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = ++c._counter;
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error",
                this._errorFn, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var f = {},
        j = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (f[d._src] = b, m(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        m = function(b, c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        p = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.setValueAtTime(c._muted ? 0 : 1, c.ctx.currentTime), c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], "undefined" !== typeof this.ctx.listener.positionX ?
            (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, e, g, n) {
        if (!this.ctx || !this.ctx.listener) return this;
        var q = this._orientation;
        c = "number" !==
            typeof c ? q[1] : c;
        d = "number" !== typeof d ? q[2] : d;
        e = "number" !== typeof e ? q[3] : e;
        g = "number" !== typeof g ? q[4] : g;
        n = "number" !== typeof n ? q[5] : n;
        if ("number" === typeof b) this._orientation = [b, c, d, e, g, n], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(b, Howler.ctx.currentTime,
            0.1), this.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(b, c, d, e, g, n);
        else return q;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ?
                c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var p = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var g = d._getSoundIds(c), n = 0; n < g.length; n++) {
            var q = d._soundById(g[n]);
            if (q)
                if ("number" === typeof b) q._stereo = b, q._pos = [b, 0, 0], q._node && (q._pannerAttr.panningModel = "equalpower", (!q._panner || !q._panner.pan) && e(q, p), "spatial" === p ? "undefined" !== typeof q._panner.positionX ? (q._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), q._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), q._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : q._panner.setPosition(b, 0, 0) : q._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)), d._emit("stereo", q._id);
                else return q._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, p) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "pos",
            action: function() {
                g.pos(b, c, d, p)
            }
        }), g;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof p)
            if ("number" === typeof b) g._pos = [b, c, d];
            else return g._pos;
        for (var n = g._getSoundIds(p), q = 0; q < n.length; q++) {
            var r = g._soundById(n[q]);
            if (r)
                if ("number" === typeof b) r._pos = [b, c, d], r._node && ((!r._panner || r._panner.pan) && e(r, "spatial"), "undefined" !== typeof r._panner.positionX ?
                    (r._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), r._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime), r._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime)) : r._panner.setOrientation(b, c, d)), g._emit("pos", r._id);
                else return r._pos
        }
        return g
    };
    Howl.prototype.orientation = function(b, c, d, p) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "orientation",
            action: function() {
                g.orientation(b, c, d, p)
            }
        }), g;
        c = "number" !== typeof c ? g._orientation[1] : c;
        d = "number" !== typeof d ? g._orientation[2] : d;
        if ("undefined" === typeof p)
            if ("number" === typeof b) g._orientation = [b, c, d];
            else return g._orientation;
        for (var n = g._getSoundIds(p), q = 0; q < n.length; q++) {
            var r = g._soundById(n[q]);
            if (r)
                if ("number" === typeof b) r._orientation = [b, c, d], r._node && (r._panner || (r._pos || (r._pos = g._pos || [0, 0, -0.5]), e(r, "spatial")), r._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime), r._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime), r._panner.orientationZ.setValueAtTime(d,
                    Howler.ctx.currentTime)), g._emit("orientation", r._id);
                else return r._orientation
        }
        return g
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (c.pannerAttr || (c.pannerAttr = {
                coneInnerAngle: c.coneInnerAngle,
                coneOuterAngle: c.coneOuterAngle,
                coneOuterGain: c.coneOuterGain,
                distanceModel: c.distanceModel,
                maxDistance: c.maxDistance,
                refDistance: c.refDistance,
                rolloffFactor: c.rolloffFactor,
                panningModel: c.panningModel
            }), this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.pannerAttr.coneInnerAngle ? c.pannerAttr.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.pannerAttr.coneOuterAngle ? c.pannerAttr.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.pannerAttr.coneOuterGain ? c.pannerAttr.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ? c.pannerAttr.distanceModel : this._distanceModel,
                maxDistance: "undefined" !==
                    typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance,
                refDistance: "undefined" !== typeof c.pannerAttr.refDistance ? c.pannerAttr.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor : this._rolloffFactor,
                panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d =
            parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var p = 0; p < d.length; p++)
            if (b = this._soundById(d[p])) {
                var g = b._pannerAttr,
                    g = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ?
                            c.maxDistance : g.maxDistance,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel
                    },
                    n = b._panner;
                n ? (n.coneInnerAngle = g.coneInnerAngle, n.coneOuterAngle = g.coneOuterAngle, n.coneOuterGain = g.coneOuterGain, n.distanceModel = g.distanceModel, n.maxDistance = g.maxDistance, n.refDistance = g.refDistance, n.rolloffFactor = g.rolloffFactor,
                    n.panningModel = g.panningModel) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
            } return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        this._stereo ? b.stereo(this._stereo) : this._pos ? b.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, b._refreshBuffer(this));
        return d.call(this)
    };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain,
            b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.panningModel = b._pannerAttr.panningModel, "undefined" !== typeof b._panner.positionX ? (b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime), b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime), b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime)) : b._panner.setPosition(b._pos[0],
                b._pos[1], b._pos[2]), "undefined" !== typeof b._panner.orientationX ? (b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime), b._panner.orientationY.setValueAtTime(b._orientation[1], Howler.ctx.currentTime), b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime)) : b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id, !0)
    }
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            f = function() {
                return d.apply(this instanceof e && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        f.prototype = new e;
        return f
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, f) {
            var j = ig.$new("canvas");
            j.width = b.width;
            j.height = b.height;
            var m = j.getContext("2d");
            ig.System.SCALE.CRISP(j, m);
            var t = ig.getVendorAttribute(m, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(m, "getImageDataHD");
            var y = b.width / t,
                L = b.height / t;
            j.width = Math.ceil(y);
            j.height = Math.ceil(L);
            m.drawImage(b, 0, 0, y, L);
            return 1 === t ? m.getImageData(c, d, e, f) : m.getImageDataHD(c, d, e, f)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c =
                    0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
                    var j = d.requires[f];
                    ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    j = ig._loadQueue[c].requires;
                    for (f = 0; f < j.length; f++) d = ig.modules[j[f]], (!d || !d.loaded) && e.push(j[f]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, f) {
            var j = c++;
            d[j] = !0;
            var m = function() {
                d[j] && (b.requestAnimationFrame(m, f), e())
            };
            b.requestAnimationFrame(m, f);
            return j
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        f = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        j = 0;
    b.ig.Class = function() {};
    var m = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" ==
            typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
                return function() {
                    var e = this.parent;
                    this.parent = d[b];
                    var f = c.apply(this, arguments);
                    this.parent = e;
                    return f
                }
            }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var n = this.prototype;
        e = !0;
        var q = new this;
        e = !1;
        for (var r in c) q[r] = "function" == typeof c[r] && "function" == typeof n[r] && f.test(c[r]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = n[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(r, c[r]) : c[r];
        d.prototype = q;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = m;
        d.classId = q.classId = ++j;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                e = this.height * b,
                f = ig.$new("canvas");
            f.width = d;
            f.height = e;
            for (var j = f.getContext("2d"), m = j.getImageData(0, 0, d, e), p = 0; p < e; p++)
                for (var g = 0; g < d; g++) {
                    var n = 4 * (Math.floor(p / b) * this.width + Math.floor(g / b)),
                        q = 4 * (p * d + g);
                    m.data[q] = c.data[n];
                    m.data[q + 1] = c.data[n + 1];
                    m.data[q + 2] = c.data[n + 2];
                    m.data[q + 3] = c.data[n + 3]
                }
            j.putImageData(m, 0, 0);
            this.data = f
        },
        draw: function(b, c, d, e, f, j) {
            if (this.loaded) {
                var m = ig.system.scale;
                f = (f ? f : this.width) * m;
                j = (j ? j : this.height) * m;
                ig.system.context.drawImage(this.data,
                    d ? d * m : 0, e ? e * m : 0, f, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, j);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, f, j, m) {
            f = f ? f : e;
            if (this.loaded && !(e > this.width || f > this.height)) {
                var p = ig.system.scale,
                    g = Math.floor(e * p),
                    n = Math.floor(f * p),
                    q = j ? -1 : 1,
                    r = m ? -1 : 1;
                if (j || m) ig.system.context.save(), ig.system.context.scale(q, r);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * p, Math.floor(d * e / this.width) * f * p, g, n, ig.system.getDrawPos(b) * q - (j ? g : 0), ig.system.getDrawPos(c) * r - (m ? n : 0), g, n);
                (j ||
                    m) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var f = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * f, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? j / 2 : j;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (j = 0; j < b.length; j++) e = b.charCodeAt(j),
                    c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                f = this.widthMap[b] * e,
                j = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, j);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
                var j = 4 * f + 3;
                127 < c.data[j] ? e++ : 128 > c.data[j] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(f - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var f = new Audio(e);
                        f.load();
                        this.clips[b].push(f)
                    }
                return this.clips[b][0]
            }
            var j = new Audio(e);
            d && (j.addEventListener("canplaythrough", function p(c) {
                j.removeEventListener("canplaythrough", p, !1);
                d(b, !0, c)
            }, !1), j.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            j.preload = "auto";
            j.load();
            this.clips[b] = [j];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
            return j
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                        0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, f) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, f);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                    c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel =
                b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] =
                null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b,
            c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, f, j, m) {
        ig.system = new ig.System(b, d, e, f, j || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(m || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var f = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, f) {
            this.parent(b, c);
            this.tiledef = f || ig.CollisionMap.defaultTileDef;
            for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0)
        },
        trace: function(b, c, f, j, m, p) {
            var g = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                n = Math.ceil(Math.max(Math.abs(f), Math.abs(j)) / this.tilesize);
            if (1 < n)
                for (var q = f / n, r = j / n, s = 0; s < n && (q || r) && !(this._traceStep(g,
                        b, c, q, r, m, p, f, j, s), b = g.pos.x, c = g.pos.y, g.collision.x && (f = q = 0), g.collision.y && (j = r = 0), g.collision.slope); s++);
            else this._traceStep(g, b, c, f, j, m, p, f, j, 0);
            return g
        },
        _traceStep: function(b, c, f, j, m, p, g, n, q, r) {
            b.pos.x += j;
            b.pos.y += m;
            var s = 0;
            if (j) {
                var u = 0 < j ? p : 0,
                    t = 0 > j ? this.tilesize : 0,
                    s = Math.max(Math.floor(f / this.tilesize), 0),
                    y = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + u) / this.tilesize);
                var L = Math.floor((c + u) / this.tilesize);
                if (0 < r || j == L || 0 > L || L >= this.width) L = -1;
                if (0 <= j && j < this.width)
                    for (var D =
                            s; D < y && !(-1 != L && (s = this.data[D][L], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, n, q, p, g, L, D))); D++)
                        if (s = this.data[D][j], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, n, q, p, g, j, D)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = s;
                            c = b.pos.x = j * this.tilesize - u + t;
                            n = 0;
                            break
                        }
            }
            if (m) {
                u = 0 < m ? g : 0;
                m = 0 > m ? this.tilesize : 0;
                s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                t = Math.min(Math.ceil((b.pos.x + p) / this.tilesize), this.width);
                D = Math.floor((b.pos.y + u) / this.tilesize);
                y = Math.floor((f + u) / this.tilesize);
                if (0 < r || D == y || 0 > y || y >= this.height) y = -1;
                if (0 <= D && D < this.height)
                    for (j = s; j < t && !(-1 != y && (s = this.data[y][j], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, n, q, p, g, j, y))); j++)
                        if (s = this.data[D][j], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, n, q, p, g, j, D)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = s;
                            b.pos.y = D * this.tilesize - u + m;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, f, j, m, p, g, n, q, r) {
            var s = this.tiledef[c];
            if (!s) return !1;
            c = (s[2] -
                s[0]) * this.tilesize;
            var u = (s[3] - s[1]) * this.tilesize,
                t = s[4];
            g = f + m + (0 > u ? g : 0) - (q + s[0]) * this.tilesize;
            n = j + p + (0 < c ? n : 0) - (r + s[1]) * this.tilesize;
            if (0 < c * n - u * g) {
                if (0 > m * -u + p * c) return t;
                q = Math.sqrt(c * c + u * u);
                r = u / q;
                q = -c / q;
                var y = g * r + n * q,
                    s = r * y,
                    y = q * y;
                if (s * s + y * y >= m * m + p * p) return t || 0.5 > c * (n - p) - u * (g - m);
                b.pos.x = f + m - s;
                b.pos.y = j + p - y;
                b.collision.slope = {
                    x: c,
                    y: u,
                    nx: r,
                    ny: q
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, f, j) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + f,
                    y: c + j
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var f = 0; f < e; f++) {
                this.preRenderedChunks[f] = [];
                for (var j = 0; j < d; j++) this.preRenderedChunks[f][j] = this.preRenderChunk(j, f, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, f == e - 1 ?
                    c - f * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var f = d / this.tilesize / ig.system.scale + 1,
                j = e / this.tilesize / ig.system.scale + 1,
                m = b * this.chunkSize / ig.system.scale % this.tilesize,
                p = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            g.retinaResolutionEnabled = !1;
            e = g.getContext("2d");
            ig.System.scaleMode(g, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < f; e++)
                for (var n = 0; n < j; n++)
                    if (e + b < this.width && n + c < this.height) {
                        var q = this.data[n + c][e + b];
                        q && this.tiles.drawTile(e * this.tilesize - m, n * this.tilesize - p, q - 1, this.tilesize)
                    } ig.system.context = d;
            return g
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                m = this.preRenderedChunks[0].length,
                p = this.preRenderedChunks.length;
            this.repeat || (f = Math.min(f, m), j = Math.min(j, p));
            for (var g = 0; e < j; e++) {
                for (var n = 0, q = d; q < f; q++) {
                    var r = this.preRenderedChunks[e % p][q % m],
                        s = -b + q * this.chunkSize - n,
                        u = -c + e * this.chunkSize - g;
                    ig.system.context.drawImage(r, s, u);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, u, this.chunkSize, this.chunkSize));
                    this.repeat && r.width < this.chunkSize && s + r.width < ig.system.realWidth && (n += this.chunkSize - r.width, f++)
                }
                this.repeat && r.height < this.chunkSize && u + r.height < ig.system.realHeight && (g += this.chunkSize - r.height, j++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                    e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, m = -f - this.tilesize, f = ig.system.width + this.tilesize - f, p = ig.system.height + this.tilesize - j, g = -1, j = -j - this.tilesize; j < p; g++, j += this.tilesize) {
                var n = g + e;
                if (n >= this.height || 0 > n) {
                    if (!this.repeat) continue;
                    n = (n % this.height + this.height) % this.height
                }
                for (var q = -1, r = m; r < f; q++, r += this.tilesize) {
                    b = q + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[n][b])(c = this.anims[b -
                        1]) ? c.draw(r, j) : this.tiles.drawTile(r, j, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                } for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var f = "string" === typeof b ? ig.global[b] : b;
            if (!f) throw "Can't spawn entity of type " + b;
            b = new f(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, m = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, p = Math.floor(d.pos.x / this.cellSize); p < j; p++)
                        for (var g = f; g < m; g++)
                            if (b[p])
                                if (b[p][g]) {
                                    for (var n = b[p][g], q = 0; q < n.length; q++) d.touches(n[q]) && !e[n[q].id] && (e[n[q].id] = !0, ig.Entity.checkPair(d, n[q]));
                                    n.push(d)
                                } else b[p][g] = [d];
                else b[p] = {}, b[p][g] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
                c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b,
            c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var f = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = f
            }
        },
        resizeOffset: function(b, c, d, e, f) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e), b.css("top", f);
            else {
                var j = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px; top: " +
                    f.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = j
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ?
                (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b =
                this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = function(b, c) {
        this.x = b || 0;
        this.y = c || 0
    };
    Vector2.prototype = {
        valType: "number",
        neg: function() {
            this.x = -this.x;
            this.y = -this.y;
            return this
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        },
        add: function(b) {
            b instanceof Vector2 ? (this.x += b.x, this.y += b.y) : (this.x += b, this.y += b);
            return this
        },
        sub: function(b) {
            b instanceof Vector2 ? (this.x -= b.x, this.y -= b.y) : (this.x -= b, this.y -=
                b);
            return this
        },
        mul: function(b) {
            b instanceof Vector2 ? (this.x *= b.x, this.y *= b.y) : (this.x *= b, this.y *= b);
            return this
        },
        div: function(b) {
            b instanceof Vector2 ? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y)) : 0 != b && (this.x /= b, this.y /= b);
            return this
        },
        equals: function(b) {
            return this.x == b.x && this.y == b.y
        },
        dot: function(b) {
            return this.x * b.x + this.y * b.y
        },
        cross: function(b) {
            return this.x * b.y - this.y * b.x
        },
        length: function() {
            return Math.sqrt(this.dot(this))
        },
        norm: function() {
            return this.divide(this.length())
        },
        min: function() {
            return Math.min(this.x,
                this.y)
        },
        max: function() {
            return Math.max(this.x, this.y)
        },
        toAngles: function() {
            return -Math.atan2(-this.y, this.x)
        },
        angleTo: function(b) {
            return Math.acos(this.dot(b) / (this.length() * b.length()))
        },
        toArray: function(b) {
            return [this.x, this.y].slice(0, b || 2)
        },
        clone: function() {
            return new Vector2(this.x, this.y)
        },
        set: function(b, c) {
            this.x = b;
            this.y = c;
            return this
        },
        unit: function() {
            var b = this.length();
            if (0 < b) return new Vector2(this.x / b, this.y / b);
            throw "Divide by 0 error in unitVector function of vector:" + this;
        },
        turnRight: function() {
            var b =
                this.x;
            this.x = -this.y;
            this.y = b;
            return this
        },
        turnLeft: function() {
            var b = this.x;
            this.x = this.y;
            this.y = -b;
            return this
        },
        rotate: function(b) {
            var c = this.clone();
            this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
            this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
            return this
        }
    };
    Vector2.negative = function(b) {
        return new Vector2(-b.x, -b.y)
    };
    Vector2.add = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x + c.x, b.y + c.y) : new Vector2(b.x + v, b.y + v)
    };
    Vector2.subtract = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x - c.x, b.y - c.y) :
            new Vector2(b.x - v, b.y - v)
    };
    Vector2.multiply = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x * c.x, b.y * c.y) : new Vector2(b.x * v, b.y * v)
    };
    Vector2.divide = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x / c.x, b.y / c.y) : new Vector2(b.x / v, b.y / v)
    };
    Vector2.equals = function(b, c) {
        return b.x == c.x && b.y == c.y
    };
    Vector2.dot = function(b, c) {
        return b.x * c.x + b.y * c.y
    };
    Vector2.cross = function(b, c) {
        return b.x * c.y - b.y * c.x
    }
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        disableStretchToFitOnMobileFlag: !1,
        enableStretchToFitOnAntiPortraitModeFlag: !0,
        enableScalingLimitsOnMobileFlag: !1,
        minScalingOnMobile: 0,
        maxScalingOnMobile: 1,
        enableStretchToFitOnDesktopFlag: !1,
        enableScalingLimitsOnDesktopFlag: !1,
        minScalingOnDesktop: 0,
        maxScalingOnDesktop: 1,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540,
                960)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll2: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd3: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height +
                    20
            }
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y /
                    b.y);
                if (this.disableStretchToFitOnMobileFlag) {
                    var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                    this.enableScalingLimitsOnMobileFlag && (c > this.maxScalingOnMobile && (c = this.maxScalingOnMobile), c < this.maxScalingOnMobile && (c = this.maxScalingOnMobile));
                    this.mobile.actualSize.x = b.x * c;
                    this.mobile.actualSize.y = b.y * c;
                    this.scaleRatioMultiplier.x = c;
                    this.scaleRatioMultiplier.y = c
                } else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x =
                    1, this.scaleRatioMultiplier.y = 1
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x,
                this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (c > this.maxScalingOnDesktop && (c = this.maxScalingOnDesktop), c < this.minScalingOnDesktop && (c = this.minScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c)
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                if (ig.ua.mobile)
                    if (this.disableStretchToFitOnMobileFlag) {
                        var d =
                            Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
                            e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.mobile.actualSize.y / 2);
                        0 > d && (d = 0);
                        0 > e && (e = 0);
                        ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, e);
                        var f = !1;
                        if (this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth)
                            if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c, Math.floor(window.innerWidth),
                                Math.floor(window.innerHeight), 0, 0);
                            else {
                                var f = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
                                    d = Math.min(f.x, f.y),
                                    f = this.mobile.actualResolution.y * d,
                                    j = this.mobile.actualResolution.x * d,
                                    d = Math.floor(ig.sizeHandler.windowSize.x / 2 - f / 2),
                                    e = Math.floor(ig.sizeHandler.windowSize.y / 2 - j / 2);
                                0 > d && (d = 0);
                                0 > e && (e = 0);
                                ig.domHandler.resizeOffset(c, Math.floor(f), Math.floor(j), d, e)
                            }
                    } else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x),
                        Math.floor(ig.sizeHandler.mobile.actualSize.y));
                else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > e && (e = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y),
                    d, e))
            }
            for (var m in this.adsToResize) b = ig.domHandler.getElementById("#" + m), c = ig.domHandler.getElementById("#" + m + "-Box"), f = (window.innerWidth - this.adsToResize[m]["box-width"]) / 2 + "px", d = (window.innerHeight - this.adsToResize[m]["box-height"]) / 2 + "px", b && ig.domHandler.css(b, {
                width: window.innerWidth,
                height: window.innerHeight
            }), c && ig.domHandler.css(c, {
                left: f,
                top: d
            });
            for (m in this.dynamicClickableEntityDivs) {
                b = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                c = ig.domHandler.getElementById("#" +
                    m);
                if (ig.ua.mobile) var p = this.dynamicClickableEntityDivs[m].entity_pos_x,
                    j = this.dynamicClickableEntityDivs[m].entity_pos_y,
                    d = this.dynamicClickableEntityDivs[m].width,
                    f = this.dynamicClickableEntityDivs[m].height,
                    e = Math.floor(p * this.scaleRatioMultiplier.x) + "px",
                    j = Math.floor(j * this.scaleRatioMultiplier.y) + "px",
                    d = Math.floor(d * this.scaleRatioMultiplier.x) + "px",
                    f = Math.floor(f * this.scaleRatioMultiplier.y) + "px";
                else var f = ig.domHandler.getElementById("#canvas"),
                    f = ig.domHandler.getOffsets(f),
                    e = f.left,
                    g = f.top,
                    p = this.dynamicClickableEntityDivs[m].entity_pos_x,
                    j = this.dynamicClickableEntityDivs[m].entity_pos_y,
                    d = this.dynamicClickableEntityDivs[m].width,
                    f = this.dynamicClickableEntityDivs[m].height,
                    e = Math.floor(e + p * b) + "px",
                    j = Math.floor(g + j * b) + "px",
                    d = Math.floor(d * b) + "px",
                    f = Math.floor(f * b) + "px";
                ig.domHandler.css(c, {
                    "float": "left",
                    position: "absolute",
                    left: e,
                    top: j,
                    width: d,
                    height: f,
                    "z-index": 3
                });
                this.dynamicClickableEntityDivs[m]["font-size"] && ig.domHandler.css(c, {
                    "font-size": this.dynamicClickableEntityDivs[m]["font-size"] *
                        b + "px"
                })
            }
            $("#ajaxbar").width(this.windowSize.x);
            $("#ajaxbar").height(this.windowSize.y)
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            console.log("changing orientation ...");
            if (ig.ua.mobile) {
                var b = !1,
                    b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth +
                    "," + window.innerHeight)) : (this.domHandler.show(d), this.domHandler.hide(c), console.log("landscape" + window.innerWidth + "," + window.innerHeight))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    f = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: f
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        orientationInterval: null,
        orientationTimeout: null,
        orientationHandler: function() {
            this.reorient();
            window.scrollTo(0, 1)
        },
        orientationDelayHandler: function() {
            null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
            null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
                this.clearAllIntervals()
            }.bind(this), 2E3))
        },
        clearAllIntervals: function() {
            window.clearInterval(this.orientationInterval);
            this.orientationInterval = null;
            window.clearTimeout(this.orientationTimeout);
            this.orientationTimeout = null
        },
        eventListenerSetup: function() {
            ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
            document.ontouchmove = function(b) {
                window.scrollTo(0,
                    1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug &&
                console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume =
                0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            "object" === typeof b ?
                b.stop() : "string" === typeof b && this.soundList[b].stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            console.log("howler", b);
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.001,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
                1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        reinitOnPlay: !1,
        inputList: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                Howler && Howler.ctx ? this.webaudio.context = Howler.ctx :
                    ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio,
                this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && (this.inputList = b, this.initWebAudio(b))
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            this.webaudio.buffer = null;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var f in b) {
                this.soundList[f] = f;
                var d = b[f].path,
                    c = d + "." + ig.Sound.FORMAT.MP3.ext,
                    j = d + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (j = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (j = c), d.indexOf("win64") && (j = c));
                var m = new XMLHttpRequest;
                m.open("GET", j, !0);
                m.responseType = "arraybuffer";
                m.onload = function() {
                    this.webaudio.context.decodeAudioData(m.response,
                        function(b) {
                            this.webaudio.buffer = b;
                            this.webaudio.source_loop = {};
                            this.bgmPlaying ? this.play(null, !0) : this.stop()
                        }.bind(this),
                        function() {
                            console.log('Error decoding audio "' + j + '".')
                        })
                }.bind(this);
                m.send();
                if (4 == m.readyState && "undefined" !== typeof Audio) {
                    this.useHTML5Audio = !0;
                    try {
                        new Audio
                    } catch (p) {
                        this.useHTML5Audio = !1
                    }
                    this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b))
                }
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio =
                    this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }.bind(this), 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/,
                        ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
                        "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff &&
                    (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        f = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
                    if (f) {
                        ig.ua.mobile ? ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error &&
                                4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = f;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = f;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var j = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play(null, !0) : this.stop();
                            this.audio.removeEventListener("canplaythrough",
                                j, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", j, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b, c) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio) {
                    if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
                        if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %=
                                this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
                        try {
                            this.webaudio.context.close();
                            this.webaudio.context = new this.AudioContext;
                            this.webaudio.gainNode = this.webaudio.context.createGain();
                            this.webaudio.gainNode.connect(this.webaudio.context.destination);
                            this.webaudio.gainNode.gain.value = this._volume;
                            var d = "start",
                                e = "stop",
                                f = this.webaudio.context.createBufferSource();
                            "function" !== typeof f.start && (d = "noteOn");
                            this.webaudio.compatibility.start = d;
                            "function" !== typeof f.stop && (e = "noteOff");
                            this.webaudio.compatibility.stop = e;
                            this.webaudio.source_loop = {};
                            this.play(null, !0)
                        } catch (j) {}
                    }
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            if (null == b || isNaN(b)) b = 0, this.pausedTime && (b = this.pausedTime);
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime +
                                (this.webaudio.buffer.duration - b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0
                } else if (this.audio) {
                var m = this.audio;
                if (!this.muteFlag)
                    if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function() {
                            this.audio.currentTime = 0;
                            this.audio.pause();
                            this.pausedTime = 0;
                            if (this.inactiveAudio) {
                                var b =
                                    this.audio;
                                this.audio = this.inactiveAudio;
                                this.inactiveAudio = b
                            }
                            this.play()
                        }.bind(this), 1E3 * d + this.playDelay), 4 === m.readyState || !m.readyState && navigator.isCocoonJS) m.readyState = 4, m.currentTime = b, m.muted = this.muteFlag || m.muted, m.volume = this._volume, setTimeout(function() {
                        m.play()
                    }, 0);
                    else {
                        clearTimeout(this._onEndTimer);
                        this._onEndTimer = null;
                        var p = function() {
                            typeof("function" == this.play) && (this.play(), m.removeEventListener("canplaythrough", p, !1))
                        }.bind(this);
                        m.addEventListener("canplaythrough", p, !1)
                    }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b =
                    this.audio;
                4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
            }
        },
        volume: function(b) {
            if (isNaN(b) || null == b) return this.getVolume();
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ?
                0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            button: {
                path: "media/audio/air-hockey/button"
            },
            draw: {
                path: "media/audio/air-hockey/draw"
            },
            gameStart: {
                path: "media/audio/air-hockey/game-start"
            },
            goal: {
                path: "media/audio/air-hockey/goal"
            },
            lose: {
                path: "media/audio/air-hockey/lose"
            },
            puckEdge: {
                path: "media/audio/air-hockey/puck-edge"
            },
            puckPaddle: {
                path: "media/audio/air-hockey/puck-paddle"
            },
            win: {
                path: "media/audio/air-hockey/win"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 6.46,
                startMp3: 0,
                endMp3: 6.46
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0
                }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1),
                this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/,
                "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ?
                !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX &&
                        /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" ==
                    this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime =
                        c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                            ig.soundHandler.forcelooped = !1
                        }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) {
                var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                    c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
                return new Vector2(b / ig.sizeHandler.scaleRatioMultiplier.x, c / ig.sizeHandler.scaleRatioMultiplier.y)
            }
            b = ig.input.mouse.x /
                ig.sizeHandler.sizeRatio.x;
            c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed :
                1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            f = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(f) ? 0 : f;
                        this.rightStick.y +=
                            isNaN(e) ? 0 : e
                    } 0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) ||
                    ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var f = 0; f < b.touches.length; f++) {
                        var j = b.touches[f];
                        j && this.touches.push({
                            x: (j.clientX - e.left) / c,
                            y: (j.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var f = 0; f < b.touches.length; f++) {
                    var j = b.touches[f];
                    j && this.touches.push({
                        x: (j.clientX - e.left) / c,
                        y: (j.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var f = 0; f < b.length; ++f) {
                    for (var j = b[f], m = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, p = (j.clientX - e.left) / c, j = (j.clientY - e.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == m && this.touches.splice(g, 1);
                    this.touches.push({
                        x: p,
                        y: j,
                        identifier: m
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var f =
                        "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j)
                    if (this.touches[j].identifier == f) {
                        var m = (b.clientY - e.top) / d;
                        this.touches[j].x = (b.clientX - e.left) / c;
                        this.touches[j].y = m
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.tempData[b] = JSON.stringify(c)
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        get: function(b) {
            return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b])
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        remove: function(b) {
            delete this.tempData[b]
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            try {
                window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
            } catch (b) {
                console.log("using fake storage"), this.storage = new ig.FakeStorage
            } finally {
                window.localStorage.removeItem("test")
            }
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad =
                new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, f) {
            return b.x > c + e || b.x < c || b.y > d + f || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test",
                    "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " +
                b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage-manager").requires("impact.game", "plugins.io.io-manager").defines(function() {
    ig.Game.prototype.name = "MJS-Game";
    ig.Game.prototype.version = "1.0";
    ig.Game.prototype.sessionData = {};
    ig.Game.prototype.initData = function() {
        return this.sessionData = {
            sound: 0.5,
            music: 0.5,
            level: 1,
            score: 0
        }
    };
    ig.Game.prototype.setupStorageManager = function() {
        "undefined" === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : "undefined" === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") :
            (this.io || (this.io = new IoManager, console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + "-v" + this.version, this.loadAll())
    };
    ig.Game.prototype.loadAll = function() {
        var b = this.storage.get(this.storageName);
        if (null === b || "undefined" === typeof b) b = this.initData();
        for (var c in b) this.sessionData[c] = b[c];
        this.storage.set(this.storageName, b)
    };
    ig.Game.prototype.saveAll = function() {
        var b = this.storage.get(this.storageName),
            c;
        for (c in b) b[c] = this.sessionData[c];
        this.storage.set(this.storageName, b)
    };
    ig.Game.prototype.load = function(b) {
        return this.storage.get(this.storageName)[b]
    };
    ig.Game.prototype.save = function(b, c) {
        var d = this.storage.get(this.storageName);
        d[b] = c;
        this.storage.set(this.storageName, d)
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        loading: new ig.Image("media/graphics/splash/loading.png"),
        loadingBg: new ig.Image("media/graphics/splash/loading-bg.png"),
        desktopCoverDIVID: "play-desktop",
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function() {
            this.parent();
            this._drawStatus = 1;
            this.draw();
            ig.system.setGame(MyGame)
        },
        tapToStartDiv: function(b) {
            this.desktopCoverDIV = document.createElement("div");
            this.desktopCoverDIV.id = this.desktopCoverDIVID;
            this.desktopCoverDIV.setAttribute("class", "play");
            this.desktopCoverDIV.setAttribute("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
            this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" + _STRINGS.Splash.TapToStart + "</div></div>";
            (document.getElementById("play").parentNode || document.getElementById("ajaxbar")).appendChild(this.desktopCoverDIV);
            try {
                "undefined" !== typeof ig.sizeHandler ? "undefined" !==
                    typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push("#" + this.desktopCoverDIVID), "function" === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : "undefined" !== typeof coreDivsToResize && (coreDivsToResize.push(this.desktopCoverDIVID), "function" === typeof sizeHandler && sizeHandler())
            } catch (c) {
                console.log(c)
            }
            this.desktopCoverDIV.addEventListener("click", function() {
                try {
                    "undefined" !== typeof ig.soundHandler ? ("undefined" !== typeof ig.soundHandler.bgmPlayer ? "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio &&
                        "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio.context && ig.soundHandler.bgmPlayer.webaudio.context.resume() : (ig.soundHandler = null, ig.soundHandler = "undefined" !== typeof ig.soundList ? new ig.SoundHandler(ig.soundList) : new ig.SoundHandler), "undefined" !== typeof ig.soundHandler.sfxPlayer ? "function" === typeof ig.soundHandler.sfxPlayer.play && ig.soundHandler.sfxPlayer.play("staticSound") : "undefined" !== typeof ig.soundHandler.staticSound ? "function" === typeof ig.soundHandler.staticSound.play && ig.soundHandler.staticSound.play() :
                        "function" === typeof ig.soundHandler.playSound && ig.soundHandler.playSound("staticSound")) : "undefined" !== typeof Howl ? (ig.global.staticSound = new Howl({
                        src: ["media/audio/play/static.ogg", "media/audio/play/static.mp3"]
                    }), ig.global.staticSound.play()) : "undefined" !== typeof createjs && "undefined" !== typeof createjs.Sound && "function" === typeof createjs.Sound.play && createjs.Sound.play("opening")
                } catch (c) {
                    console.log(c)
                }
                this.setAttribute("style", "visibility: hidden;");
                "function" === typeof b && b();
                ig.system.setGame(MyGame)
            })
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            if (!(0.2 > this._drawStatus)) {
                ig.system.context.fillStyle = "#000";
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
                var b, c, d, e;
                ig.ua.mobile ? (b = this.loading.width, c = this.loading.height, d = 0.5 * ig.system.width - b / 2, e = 7 * ig.system.height / 10 - c / 2, this.splashMobile.draw(0, 0)) : (b = this.loading.width, c = this.loading.height, d = 0.5 * ig.system.width - b / 2, e = 7 * ig.system.height / 10 - c / 2, this.splashDesktop.draw(0, 0));
                this.loadingBg.draw(d, e);
                this.loading.draw(d,
                    e, 0, 0, b * this._drawStatus, c);
                b = ig.system.width / 2;
                c = 13 * ig.system.height / 20;
                ig.system.context.font = "40px sf-collegiate-solid";
                ig.system.context.fillStyle = "#CC3366";
                ig.system.context.textAlign = "center";
                ig.system.context.textBaseline = "middle";
                ig.system.context.fillText(_STRINGS.Splash.Loading, b, c)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var f = {},
            j = {},
            m = {},
            p = 0,
            g = !1,
            n = !1,
            q = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            q = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            p = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            n = !0;
            g = new ig.Timer;
            for (var d in c) this.initEnd(d, c, j);
            for (d in j) this.initStart(d, j, b, f), this.initDelta(d, m, b, j)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, f) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * f : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!n) return !1;
            if (this.delay) {
                if (g.delta() < this.delay) return;
                this.delay = 0;
                g.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (g.delta() + p) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in m) this.propUpdate(property, b, f, m, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    q && q.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in f) this.propSet(property, f, b);
                    p = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, f);
                    ig.merge(f, c);
                    ig.merge(j, d);
                    for (property in j) this.initDelta(property, m, b, j);
                    p = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            g && g.delta && (p += g.delta())
        };
        this.resume = function() {
            this.paused = !1;
            g && g.reset && g.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, p += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                e = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            e || (e = 0.3);
            !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    };
    ig.Tween.Interpolation = {
        Linear: function(b, c) {
            var d = b.length - 1,
                e = d * c,
                f = Math.floor(e),
                j = TWEEN.Interpolation.Utils.Linear;
            return 0 > c ? j(b[0], b[1], e) : 1 < c ? j(b[d], b[d - 1], d - e) : j(b[f], b[f + 1 > d ? d : f + 1], e - f)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.entity-patch").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d =
                        this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos.x = b.pos.x;
            this.pos.y = b.pos.y
        }
    })
});
ig.baked = !0;
ig.module("plugins.tweens-handler").requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var d = 0; d < this.length; ++d)
            if (this[d] === b) return d;
        return -1
    });
    ig.TweensHandler = ig.Class.extend({
        _tweens: [],
        _systemPausedTweens: [],
        init: function() {},
        getAll: function() {
            return this._tweens
        },
        removeAll: function() {
            this._tweens = []
        },
        add: function(b) {
            this._tweens.push(b)
        },
        remove: function(b) {
            b = this._tweens.indexOf(b); -
            1 !== b && this._tweens.splice(b, 1)
        },
        onSystemPause: function() {
            if (0 === this._tweens.length) return !1;
            for (var b = 0, d = null; b < this._tweens.length;) d = this._tweens[b], d._isPlaying && (this._systemPausedTweens.push(d), d.pause()), b++;
            return !0
        },
        onSystemResume: function() {
            if (0 === this._systemPausedTweens.length) return !1;
            for (var b = 0; b < this._systemPausedTweens.length;) this._systemPausedTweens[b].resume(), b++;
            this._systemPausedTweens = [];
            return !0
        },
        update: function(b, d) {
            if (0 === this._tweens.length) return !1;
            var e = 0;
            for (b = void 0 !==
                b ? b : ig.game.tweens.now(); e < this._tweens.length;) this._tweens[e].update(b) || d ? e++ : this._tweens.splice(e, 1);
            return !0
        },
        now: function() {
            return Date.now()
        }
    });
    ig.TweenDef = ig.Class.extend({
        _ent: null,
        _valuesStart: {},
        _valuesEnd: {},
        _valuesStartRepeat: {},
        _duration: 1E3,
        _repeat: 0,
        _yoyo: !1,
        _isPlaying: !1,
        _reversed: !1,
        _delayTime: 0,
        _startTime: null,
        _pauseTime: null,
        _easingFunction: ig.Tween.Easing.Linear.EaseNone,
        _interpolationFunction: ig.Tween.Interpolation.Linear,
        _chainedTweens: [],
        _onStartCallback: null,
        _onStartCallbackFired: !1,
        _onUpdateCallback: null,
        _onCompleteCallback: null,
        _onStopCallback: null,
        _onPauseCallback: null,
        _onResumeCallback: null,
        _currentElapsed: 0,
        init: function(b) {
            this._object = b
        },
        to: function(b, d) {
            this._valuesEnd = b;
            void 0 !== d && (this._duration = d);
            return this
        },
        start: function(b) {
            if (this._isPlaying) return this;
            ig.game.tweens.add(this);
            this._isPlaying = !0;
            this._onStartCallbackFired = !1;
            this._startTime = void 0 !== b ? b : ig.game.tweens.now();
            this._startTime += this._delayTime;
            for (var d in this._valuesEnd) {
                if (this._valuesEnd[d] instanceof Array) {
                    if (0 === this._valuesEnd[d].length) continue;
                    this._valuesEnd[d] = [this._object[d]].concat(this._valuesEnd[d])
                }
                void 0 !== this._object[d] && (this._valuesStart[d] = this._object[d], !1 === this._valuesStart[d] instanceof Array && (this._valuesStart[d] *= 1), this._valuesStartRepeat[d] = this._valuesStart[d] || 0)
            }
            return this
        },
        stop: function() {
            if (!this._isPlaying) return this;
            ig.game.tweens.remove(this);
            this._isPlaying = !1;
            null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object);
            this.stopChainedTweens();
            return this
        },
        pause: function() {
            if (!this._isPlaying) return this;
            ig.game.tweens.remove(this);
            this._isPlaying = !1;
            this._pauseTime = ig.game.tweens.now();
            null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object);
            return this
        },
        resume: function() {
            if (this._isPlaying || !this._pauseTime) return this;
            var b = ig.game.tweens.now() - this._pauseTime;
            this._startTime += b;
            ig.game.tweens.add(this);
            this._isPlaying = !0;
            null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object);
            this._pauseTime = null;
            return this
        },
        end: function() {
            this.update(this._startTime + this._duration);
            return this
        },
        stopChainedTweens: function() {
            for (var b = 0, d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].stop()
        },
        delay: function(b) {
            this._delayTime = b;
            return this
        },
        repeat: function(b) {
            this._repeat = b;
            return this
        },
        repeatDelay: function(b) {
            this._repeatDelayTime = b;
            return this
        },
        yoyo: function(b) {
            this._yoyo = b;
            return this
        },
        easing: function(b) {
            this._easingFunction = b;
            return this
        },
        interpolation: function(b) {
            this._interpolationFunction =
                b;
            return this
        },
        chain: function() {
            this._chainedTweens = arguments;
            return this
        },
        onStart: function(b) {
            this._onStartCallback = b;
            return this
        },
        onUpdate: function(b) {
            this._onUpdateCallback = b;
            return this
        },
        onComplete: function(b) {
            this._onCompleteCallback = b;
            return this
        },
        onStop: function(b) {
            this._onStopCallback = b;
            return this
        },
        onPause: function(b) {
            this._onPauseCallback = b;
            return this
        },
        onResume: function(b) {
            this._onResumeCallback = b;
            return this
        },
        update: function(b) {
            var d, e, f;
            if (b < this._startTime) return !0;
            !1 === this._onStartCallbackFired &&
                (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0);
            e = (b - this._startTime) / this._duration;
            this._currentElapsed = e = 1 < e ? 1 : e;
            f = this._easingFunction(e);
            for (d in this._valuesEnd)
                if (void 0 !== this._valuesStart[d]) {
                    var j = this._valuesStart[d] || 0,
                        m = this._valuesEnd[d];
                    m instanceof Array ? this._object[d] = this._interpolationFunction(m, f) : ("string" === typeof m && (m = "+" === m.charAt(0) || "-" === m.charAt(0) ? j + parseFloat(m) : parseFloat(m)), "number" === typeof m &&
                        (this._object[d] = j + (m - j) * f))
                } null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, f);
            if (1 === e)
                if (0 < this._repeat) {
                    isFinite(this._repeat) && this._repeat--;
                    for (d in this._valuesStartRepeat) "string" === typeof this._valuesEnd[d] && (this._valuesStartRepeat[d] = _valuesStartRepeat[d] + parseFloat(_valuesEnd[d])), this._yoyo && (e = this._valuesStartRepeat[d], this._valuesStartRepeat[d] = this._valuesEnd[d], this._valuesEnd[d] = e), this._valuesStart[d] = this._valuesStartRepeat[d];
                    this._yoyo &&
                        (this._reversed = !this._reversed);
                    this._startTime = void 0 !== this._repeatDelayTime ? b + this._repeatDelayTime : b + this._delayTime
                } else {
                    null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object);
                    b = 0;
                    for (d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].start(this._startTime + this._duration);
                    return !1
                } return !0
        }
    });
    var b = [1];
    ig.Tween.Interpolation = {
        Linear: function(b, d) {
            var e = b.length - 1,
                f = e * d,
                j = Math.floor(f),
                m = ig.Tween.Interpolation.Utils.Linear;
            return 0 > d ? m(b[0], b[1], f) :
                1 < d ? m(b[e], b[e - 1], e - f) : m(b[j], b[j + 1 > e ? e : j + 1], f - j)
        },
        Bezier: function(b, d) {
            for (var e = 0, f = b.length - 1, j = Math.pow, m = ig.Tween.Interpolation.Utils.Bernstein, p = 0; p <= f; p++) e += j(1 - d, f - p) * j(d, p) * b[p] * m(f, p);
            return e
        },
        CatmullRom: function(b, d) {
            var e = b.length - 1,
                f = e * d,
                j = Math.floor(f),
                m = ig.Tween.Interpolation.Utils.CatmullRom;
            return b[0] === b[e] ? (0 > d && (j = Math.floor(f = e * (1 + d))), m(b[(j - 1 + e) % e], b[j], b[(j + 1) % e], b[(j + 2) % e], f - j)) : 0 > d ? b[0] - (m(b[0], b[0], b[1], b[1], -f) - b[0]) : 1 < d ? b[e] - (m(b[e], b[e], b[e - 1], b[e - 1], f - e) - b[e]) : m(b[j ?
                j - 1 : 0], b[j], b[e < j + 1 ? e : j + 1], b[e < j + 2 ? e : j + 2], f - j)
        },
        Utils: {
            Linear: function(b, d, e) {
                return (d - b) * e + b
            },
            Bernstein: function(b, d) {
                var e = ig.Tween.Interpolation.Utils.Factorial;
                return e(b) / e(d) / e(b - d)
            },
            Factorial: function(c) {
                var d = 1;
                if (b[c]) return b[c];
                for (var e = c; 1 < e; e--) d *= e;
                return b[c] = d
            },
            CatmullRom: function(b, d, e, f, j) {
                b = 0.5 * (e - b);
                f = 0.5 * (f - d);
                var m = j * j;
                return (2 * d - 2 * e + b + f) * j * m + (-3 * d + 3 * e - 2 * b - f) * m + b * j + d
            }
        }
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame() 
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.math.collision").defines(function() {
    ig.Collision = ig.Class.extend({
        init: function() {},
        polyPoly: function(b, c) {
            for (var d = 0, e = 0; e < b.length; e++) {
                d = e + 1;
                d == b.length && (d = 0);
                var f = b[e],
                    d = b[d];
                if (this.polyLine(c, f.x, f.y, d.x, d.y) || this.polyPoint(b, c[0].x, c[0].y)) return !0
            }
            return !1
        },
        polyLine: function(b, c, d, e, f) {
            for (var j = 0, m = 0; m < b.length; m++)
                if (j = m + 1, j == b.length && (j = 0), this.lineLine(c, d, e, f, b[m].x, b[m].y, b[j].x, b[j].y)) return !0;
            return !1
        },
        lineLine: function(b, c, d, e, f, j, m, p) {
            var g = ((m - f) * (c - j) -
                (p - j) * (b - f)) / ((p - j) * (d - b) - (m - f) * (e - c));
            b = ((d - b) * (c - j) - (e - c) * (b - f)) / ((p - j) * (d - b) - (m - f) * (e - c));
            return 0 <= g && 1 >= g && 0 <= b && 1 >= b ? !0 : !1
        },
        polyPoint: function(b, c, d) {
            for (var e = !1, f = b[0].x, j = b[0].x, m = b[0].y, p = b[0].y, g = 1; g < b.length; g++) var n = b[g],
                f = Math.min(n.x, f),
                j = Math.max(n.x, j),
                m = Math.min(n.y, m),
                p = Math.max(n.y, p);
            if (c < f || c > j || d < m || d > p) return !1;
            f = 0;
            j = b.length - 1;
            f;
            for (j; f < b.length; j = f++) b[f].y > d != b[j].y > d && c < (b[j].x - b[f].x) * (d - b[f].y) / (b[j].y - b[f].y) + b[f].x && (e = !e);
            return e
        },
        circleCircle: function(b, c, d, e, f,
            j) {
            b -= e;
            c -= f;
            return Math.sqrt(b * b + c * c) <= d + j ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c) {
            var d = this.size.x,
                e = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x +=
                (d - this.size.x) / 2;
            this.pos.y += (e - this.size.y) / 2
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.color-rgb").defines(function() {
    ColorRGB = function(b, c, d, e) {
        this.r = b || 0;
        this.g = c || 0;
        this.b = d || 0;
        this.a = e || 0
    };
    ColorRGB.prototype = {
        setRandomColor: function() {
            this.r = Math.round(255 * Math.random());
            this.g = Math.round(255 * Math.random());
            this.b = Math.round(255 * Math.random())
        },
        getStyle: function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
        },
        getHex: function() {
            for (var b = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16); 2 > b.length;) b = "0" + b;
            for (; 2 > c.length;) c = "0" +
                c;
            for (; 2 > d.length;) d = "0" + d;
            return "#" + b + c + d
        },
        getInvertedColor: function() {
            return new ColorRGB(255 - this.r, 255 - this.g, 255 - this.b, 255 - this.a)
        },
        clone: function() {
            return new ColorRGB(this.r, this.g, this.b, this.a)
        }
    }
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            f = $("#" + f.id);
            f.css("float", "left");
            f.css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    m = window.innerWidth /
                    mobileWidth;
                f.css("left", this.pos.x * m);
                f.css("top", this.pos.y * j);
                f.css("width", this.size.x * m);
                f.css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, m = h / 2 - destH / 2, console.log(j, m), f.css("left", j + this.pos.x * multiplier), f.css("top", m + this.pos.y * multiplier), f.css("width", this.size.x * multiplier), f.css("height", this.size.y * multiplier);
            e ? f.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : f.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by Attero Labs", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by Attero Labs", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.others.marketjs-entity").requires("impact.entity").defines(function() {
    EntityMarketjsEntity = ig.Entity.extend({
        oriPos: {
            x: null,
            y: null
        },
        killOutLayer: !1,
        idleSheetInfo: null,
        vertices: [],
        drawShape: !1,
        vertical: null,
        horizontal: null,
        scaling: !1,
        bodyScale: 1,
        radius: 0,
        init: function(b, c, d) {
            null != this.idleSheetInfo && (this.setSpriteSheet("idle"), this.setSize("idle"));
            this.parent(b, c, d);
            this.oriPos.x = this.pos.x;
            this.oriPos.y = this.pos.y
        },
        update: function() {
            this.parent();
            this.killOutOfLayer();
            !0 == this.scaling && this.setScale(this.bodyScale, this.bodyScale)
        },
        draw: function() {
            this.parent();
            this.drawStrokeBody()
        },
        drawStrokeBody: function() {
            if (!0 == this.drawShape || void 0 != ig.game.drawShape && !0 == ig.game.drawShape)
                if (0 < this.vertices.length) {
                    ig.system.context.save();
                    ig.system.context.translate(-ig.game.screen.x, -ig.game.screen.y);
                    ig.system.context.beginPath();
                    ig.system.context.strokeStyle = "rgba(255,0,0,1)";
                    ig.system.context.moveTo(this.pos.x + this.vertices[0].x * this.bodyScale, this.pos.y + this.vertices[0].y *
                        this.bodyScale);
                    for (var b = 1; b < this.vertices.length; b++) ig.system.context.lineTo(this.pos.x + this.vertices[b].x * this.bodyScale, this.pos.y + this.vertices[b].y * this.bodyScale);
                    ig.system.context.lineTo(this.pos.x + this.vertices[0].x * this.bodyScale, this.pos.y + this.vertices[0].y * this.bodyScale);
                    ig.system.context.stroke();
                    ig.system.context.restore()
                } else 0 < this.radius && (ig.system.context.save(), ig.system.context.beginPath(), ig.system.context.arc(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, this.radius *
                    this.bodyScale, 0, 2 * Math.PI, !1), ig.system.context.lineWidth = 2, ig.system.context.strokeStyle = "rgba(255,0,0,1)", ig.system.context.stroke(), ig.system.context.restore())
        },
        rotateVertices: function() {
            for (var b = 0; b < this.vertices.length; b++) this.vertices[b] = this.getPoint(this.size.x / 2, this.size.y / 2, this.vertices[b].x, this.vertices[b].y, -this.toAngle.toRad())
        },
        getPoint: function(b, c, d, e, f) {
            cos = Math.cos(f);
            sin = Math.sin(f);
            nx = cos * (d - b) + sin * (e - c) + b;
            ny = cos * (e - c) - sin * (d - b) + c;
            return {
                x: nx,
                y: ny
            }
        },
        getSAT: function() {
            for (var b = [], c = 0; c < this.vertices.length; c++) b[c] = {
                x: this.pos.x + this.vertices[c].x * this.bodyScale,
                y: this.pos.y + this.vertices[c].y * this.bodyScale
            };
            return new ig.SAT.Shape(b)
        },
        getVertices: function() {
            for (var b = [], c = 0; c < this.vertices.length; c++) b[c] = {
                x: this.pos.x + this.vertices[c].x * this.bodyScale,
                y: this.pos.y + this.vertices[c].y * this.bodyScale
            };
            return b
        },
        killOutOfLayer: function() {
            if (!1 != this.killOutLayer && (this.pos.x < ig.game.screen.x - this.size.x || this.pos.x > ig.game.screen.x + ig.system.width || this.pos.y < ig.game.screen.y -
                    this.size.y || this.pos.y > ig.game.screen.y + ig.system.height)) console.log("kill outside layer"), this.kill()
        },
        setSpriteSheet: function(b) {
            this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
        },
        setSize: function(b) {
            this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
            this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
        },
        setPosition: function() {
            "center" == this.horizontal ? this.pos.x -= this.size.x / 2 : "left" == this.horizontal ? this.pos.x = this.pos.x : "right" == this.horizontal && (this.pos.x -= this.size.x);
            "center" == this.vertical ? this.pos.y -= this.size.y / 2 : "top" == this.vertical ? this.pos.y = this.pos.y : "bottom" == this.vertical && (this.pos.y -= this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityButton = EntityMarketjsEntity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," +
                d + "," + c + ",1)"
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b,
            c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.domHandler.create("div");
            ig.domHandler.attr(f, "id", b);
            var j = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(j, "href", c), ig.domHandler.attr(j, "target", "_blank")) : ig.domHandler.attr(j, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = ig.domHandler.getElementById("#canvas");
                var m = ig.domHandler.getOffsets(e);
                e = m.left;
                m = m.top;
                if (ig.sizeHandler.disableStretchToFitOnMobileFlag) {
                    e = Math.floor(e + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                    var m = Math.floor(m + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                        p = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                    d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
                } else e = Math.floor(this.pos.x *
                    ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), m = ig.domHandler.getOffsets(e), e = m.left, m = m.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (e = Math.floor(e + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (e = Math.floor(e + this.pos.x * d) + "px", m = Math.floor(m + this.pos.y * d) + "px", p = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
            ig.domHandler.css(f, {
                "float": "left",
                position: "absolute",
                left: e,
                top: m,
                width: p,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(f, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(j, c);
            ig.domHandler.appendChild(f, j);
            ig.domHandler.appendToBody(f);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                        new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    } this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        name: "moregames",
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-more-games.png"),
            sheetX: 1,
            sheetY: 1
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0), this.setPosition(), _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this), this.hide(), this.pos.y -= ig.system.height) : this.kill())
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {},
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.hide()
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y + ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.show()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        size: new Vector2(1, 1),
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5500,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased &&
                "function" == typeof b.clicking && b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(),
                "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 1,
            y: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("width", this.size.x * multiplier);
            $("#" + f.id).css("height", this.size.y * multiplier);
            $("#" + f.id).css("position", "absolute");
            var j = w / 2 - destW / 2,
                m = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", j + this.pos.x * multiplier), $("#" + f.id).css("top", m + this.pos.y * multiplier));
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + f.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.controllers.game-controller").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityGameController = EntityMarketjsEntity.extend({
        zIndex: 0,
        arena: new ig.Image("media/graphics/sprites/arena.png"),
        paddlePlayer: null,
        paddleComputer: null,
        puck: null,
        uiGame: null,
        score: {
            player: 0,
            computer: 0
        },
        popUpPause: null,
        popUpResult: null,
        playingGame: !0,
        edgeArena: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
            this.edgeArena = {
                top: 13 * ig.system.height / 24 - this.arena.height / 2,
                bottom: 13 * ig.system.height / 24 + this.arena.height / 2,
                right: ig.system.width / 2 + this.arena.width / 2,
                left: ig.system.width / 2 - this.arena.width / 2,
                center: {
                    x: ig.system.width / 2,
                    y: 13 * ig.system.height / 24
                },
                playerPosY: 13 * ig.system.height / 24 + 1.64 * this.arena.height / 5,
                computerPosY: 13 * ig.system.height / 24 - 1.64 * this.arena.height / 5,
                goalPlayerPosY: 13 * ig.system.height / 24 + 1 * this.arena.height /
                    5,
                goalComputerPosY: 13 * ig.system.height / 24 - 1 * this.arena.height / 5,
                puckPlayer: 13 * ig.system.height / 24 + 0.8 * this.arena.height / 4,
                puckComputer: 13 * ig.system.height / 24 - 0.8 * this.arena.height / 4,
                goalXRight: 2 * ig.system.width / 3,
                goalXLeft: 1 * ig.system.width / 3
            };
            this.paddlePlayer = ig.game.spawnEntity(EntityPaddle, this.edgeArena.center.x, this.edgeArena.playerPosY, {
                player: !0,
                controller: this,
                zIndex: 21
            });
            this.paddleComputer = ig.game.spawnEntity(EntityPaddle, this.edgeArena.center.x, this.edgeArena.computerPosY, {
                player: !1,
                controller: this,
                zIndex: 22
            });
            this.puck = ig.game.spawnEntity(EntityPuck, this.edgeArena.center.x, this.edgeArena.center.y, {
                controller: this
            });
            this.buttonPause = ig.game.spawnEntity(EntityButtonPause, 9 * ig.system.width / 10, 1 * ig.system.height / 20, {
                controller: this
            });
            this.uiGame = ig.game.spawnEntity(EntityUiGame, 0, 0, {
                controller: this
            });
            this.popUpPause = ig.game.spawnEntity(EntityPopUpPause, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                controller: this
            });
            ig.game.playTutorial && (this.buttonPause.enable = !1, this.tutorial = [{
                x: ig.system.width /
                    2,
                y: this.edgeArena.center.y - this.arena.height / 4,
                text: _STRINGS.Game.Tutorial1,
                textSize: 40,
                lastTutorial: !1
            }, {
                x: ig.system.width / 2,
                y: this.edgeArena.center.y + this.arena.height / 4,
                text: _STRINGS.Game.Tutorial2,
                textSize: 28,
                lastTutorial: !1
            }, {
                x: ig.system.width / 2,
                y: this.edgeArena.center.y,
                text: _STRINGS.Game.Tutorial3,
                textSize: 40,
                lastTutorial: !0
            }])
        },
        update: function() {
            this.parent();
            if (null == this.popUpResult) switch (ig.game.gameMode) {
                case 0:
                    if (this.score.player == ig.game.classic[ig.game.gameModeOptions] || this.score.computer ==
                        ig.game.classic[ig.game.gameModeOptions]) this.paddlePlayer.kill(), this.paddleComputer.kill(), this.puck.kill(), this.uiGame.kill(), this.buttonPause.kill(), this.playingGame = !1, this.popUpResult = ig.game.spawnEntity(EntityPopUpResult, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                        controller: this
                    }), this.popUpResult.easeIn();
                    break;
                case 1:
                    0 < this.uiGame.gameTime.delta() && (this.paddlePlayer.kill(), this.paddleComputer.kill(), this.puck.kill(), this.uiGame.kill(), this.buttonPause.kill(), this.playingGame = !1, this.popUpResult =
                        ig.game.spawnEntity(EntityPopUpResult, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                            controller: this
                        }), this.popUpResult.easeIn())
            }
            ig.game.playTutorial && this.tutorialMode()
        },
        tutorialMode: function() {
            for (var b = 0; b < this.tutorial.length; b++)
                if (null != this.tutorial[b] && (null == this.tutorialSteps || !0 == this.tutorialSteps.isKill)) {
                    this.tutorialSteps = ig.game.spawnEntity(EntityTutorialStep, ig.game.screen.x + this.tutorial[b].x, ig.game.screen.y + this.tutorial[b].y, {
                        text: this.tutorial[b].text,
                        textSize: this.tutorial[b].textSize,
                        index: b,
                        lastTutorial: this.tutorial[b].lastTutorial,
                        bodyScale: this.tutorial[b].bodyScale,
                        controller: this
                    });
                    this.tutorial[b] = null;
                    break
                }
        },
        draw: function() {
            this.playingGame && (ig.system.context.save(), ig.system.context.fillStyle = "#3ac6ed", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), this.arena.draw(ig.system.width / 2 - this.arena.width / 2, 13 * ig.system.height / 24 - this.arena.height / 2), ig.system.context.restore());
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.controllers.menu-controller").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityMenuController = EntityMarketjsEntity.extend({
        zIndex: 0,
        arena: new ig.Image("media/graphics/sprites/arena.png"),
        arenaEdge: new ig.Image("media/graphics/sprites/arena-edge.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
            this.menuTitle = ig.game.spawnEntity(EntityMenuTitle,
                1 * ig.system.width / 2, 15 * ig.system.height / 40, {
                    controller: this
                });
            this.puckTitle = ig.game.spawnEntity(EntityPuckTitle, 3 * ig.system.width / 10, 12 * ig.system.height / 40, {
                controller: this
            });
            _SETTINGS.MoreGames.Enabled && (this.buttonMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, 1 * ig.system.width / 10, 1 * ig.system.height / 20, {
                controller: this
            }));
            this.buttonSettings = ig.game.spawnEntity(EntityButtonSettings, 9 * ig.system.width / 10, 1 * ig.system.height / 20, {
                controller: this
            });
            this.buttonTextPlayEasy = ig.game.spawnEntity(EntityButtonTextPlay,
                1 * ig.system.width / 2, 21 * ig.system.height / 40, {
                    controller: this,
                    text: _STRINGS.Menu.ButtonEasy,
                    difficulty: 1
                });
            this.buttonTextPlayNormal = ig.game.spawnEntity(EntityButtonTextPlay, 1 * ig.system.width / 2, 25 * ig.system.height / 40, {
                controller: this,
                text: _STRINGS.Menu.ButtonNormal,
                difficulty: 2
            });
            this.buttonTextPlayDifficult = ig.game.spawnEntity(EntityButtonTextPlay, 1 * ig.system.width / 2, 29 * ig.system.height / 40, {
                controller: this,
                text: _STRINGS.Menu.ButtonDifficult,
                difficulty: 3
            });
            this.popUpSettings = ig.game.spawnEntity(EntityPopUpSettings,
                1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                    controller: this
                });
            this.popUpTutorial = ig.game.spawnEntity(EntityPopUpTutorial, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                controller: this
            });
            ig.game.easing = !0;
            this.menuTitle.easeIn();
            this.puckTitle.easeIn();
            _SETTINGS.MoreGames.Enabled && this.buttonMoreGames.easeIn();
            this.buttonSettings.easeIn();
            this.buttonTextPlayEasy.easeIn();
            this.buttonTextPlayNormal.easeIn();
            this.buttonTextPlayDifficult.easeIn()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.fillStyle = "#3ac6ed";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.arena.draw(ig.system.width / 2 - this.arena.width / 2, 13 * ig.system.height / 24 - this.arena.height / 2);
            this.arenaEdge.draw(ig.system.width / 2 - this.arenaEdge.width / 2, 13 * ig.system.height / 24 - this.arenaEdge.height / 2);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-settings").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSettings = EntityButton.extend({
        zIndex: 2,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-settings.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        hand: new ig.Image("media/graphics/sprites/game/hand.png"),
        handOffsetY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.handPos = {
                x: this.pos.x + this.size.x / 2 - this.hand.width / 2,
                y: this.pos.y + this.size.y + this.hand.height / 5
            };
            this.textPos = {
                x: this.pos.x - this.size.x / 8,
                y: this.pos.y + this.size.y / 6
            };
            this.textSize = 3.7 * this.size.x;
            this.pos.y -= ig.system.height
        },
        draw: function() {
            this.drawPointer && (ig.system.context.save(), ig.system.context.fillStyle = "#000000", ig.system.context.globalAlpha = 0.7, ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1, this.hand.draw(this.handPos.x,
                this.handPos.y + this.handOffsetY), ig.system.context.globalAlpha = 1, ig.system.context.font = "30px sf-collegiate-solid", ig.system.context.textAlign = "right", ig.system.context.textBaseline = "top", ig.system.context.fillStyle = "#ffffff", this.wrapText(ig.system.context, _STRINGS.Menu.SetGameMode, this.textPos.x, this.textPos.y, this.textSize, 30), ig.system.context.restore());
            this.parent()
        },
        wrapText: function(b, c, d, e, f, j) {
            c = c.split("\n");
            for (var m = "", p = 0; p < c.length; p++) m = m + c[p] + " breakLine ";
            c = m.split(" ");
            m = "";
            for (p =
                0; p < c.length; p++)
                if ("breakLine" != c[p]) {
                    var g = m + c[p] + " ";
                    b.measureText(g).width > f && 0 < p ? (b.fillText(m, d, e), m = c[p] + " ", e += j) : m = g
                } else b.fillText(m, d, e), m = "", e += j;
            b.fillText(m, d, e)
        },
        easeOut: function(b) {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    b && this.controller.popUpSettings.easeIn()
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    x: 9 * ig.system.width / 10 - 1 * this.size.x / 2,
                    y: 1 * ig.system.height / 20 - 1 * this.size.y / 2
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.firstPlay && (this.drawPointer = !0, _SETTINGS.MoreGames.Enabled && this.controller.buttonMoreGames.hide(), this.controller.buttonTextPlayEasy.enable = !1, this.controller.buttonTextPlayNormal.enable = !1, this.controller.buttonTextPlayDifficult.enable = !1, this.easeHandOffsetY(50))
                }.bind(this)
            }).start()
        },
        easeHandOffsetY: function(b) {
            this.tween({
                handOffsetY: b
            }, 0.4, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.drawPointer && (0 == b ? this.easeHandOffsetY(50) : this.easeHandOffsetY(0))
                }.bind(this)
            }).start()
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.firstPlay && (this.drawPointer = !1, _SETTINGS.MoreGames.Enabled && this.controller.buttonMoreGames.show(), this.controller.buttonTextPlayEasy.enable = !0, this.controller.buttonTextPlayNormal.enable = !0, this.controller.buttonTextPlayDifficult.enable = !0, ig.game.firstPlay = !1, ig.game.save("firstPlay", !1));
                            this.controller.menuTitle.easeOut();
                            this.controller.puckTitle.easeOut();
                            _SETTINGS.MoreGames.Enabled && this.controller.buttonMoreGames.easeOut();
                            this.controller.buttonSettings.easeOut(!0);
                            this.controller.buttonTextPlayEasy.easeOut();
                            this.controller.buttonTextPlayNormal.easeOut();
                            this.controller.buttonTextPlayDifficult.easeOut()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-pause").requires("game.entities.buttons.button").defines(function() {
    EntityButtonPause = EntityButton.extend({
        zIndex: 40,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-pause.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        enable: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        update: function() {
            this.parent();
            this.currentAnim.alpha = this.enable ?
                1 : 0.5
        },
        clicked: function() {
            !1 == ig.game.easing && !0 == this.enable && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.controller.popUpPause.easeIn();
                            this.enable = !1;
                            ig.game.isPause = !0;
                            footerAD.style.display = 'block';
                            refreshfooterSlot();
                            1 == ig.game.gameMode && this.controller.uiGame.gameTime.pause();
                            1 == ig.game.gameMode && null != this.controller.paddleComputer.cheatTime &&
                                this.controller.paddleComputer.cheatTime.pause()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-home").requires("game.entities.buttons.button").defines(function() {
    EntityButtonHome = EntityButton.extend({
        zIndex: 41,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-home.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                ig.game.isPause = !1;
                                ig.game.director.loadLevel(1);
                                footerAD.style.display = 'block';
                                refreshfooterSlot();
                                }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-resume").requires("game.entities.buttons.button").defines(function() {
    EntityButtonResume = EntityButton.extend({
        zIndex: 41,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-resume.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.controller.popUpPause.easeOut();
                                footerAD.style.display = 'none';
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-restart").requires("game.entities.buttons.button").defines(function() {
    EntityButtonRestart = EntityButton.extend({
        zIndex: 41,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-restart.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                ig.game.isPause = !1;
                                ig.game.director.reloadLevel();
                                footerAD.style.display = 'none';
                                }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text").requires("game.entities.buttons.button", "plugins.data.vector").defines(function() {
    EntityButtonText = EntityButton.extend({
        textColor: "#FFFFFF",
        text: null,
        font: null,
        textSize: 20,
        showText: !0,
        textAlign: "center",
        textBaseline: "middle",
        bodyScale: 1,
        textPos: {
            x: 0.5,
            y: 0.5
        },
        draw: function() {
            this.parent();
            this.showText && this.drawText()
        },
        drawText: function() {
            ig.system.context.save();
            ig.system.context.font = this.textSize * this.bodyScale + "px " + this.font;
            ig.system.context.textAlign =
                this.textAlign;
            ig.system.context.textBaseline = this.textBaseline;
            ig.system.context.fillStyle = this.textColor;
            ig.system.context.fillText(this.text, this.pos.x + this.size.x * this.textPos.x, this.pos.y + this.size.y * this.textPos.y);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text-play").requires("game.entities.buttons.button-text").defines(function() {
    EntityButtonTextPlay = EntityButtonText.extend({
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-big.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 35,
        textPos: {
            x: 0.6,
            y: 0.5
        },
        scaling: !0,
        playIco: new ig.Image("media/graphics/sprites/buttons/play-ico.png"),
        enable: !0,
        init: function(b,
            c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.playIco.data, this.pos.x + 1 * this.size.x / 6 - this.playIco.width * this.bodyScale / 2, this.pos.y + 9 * this.size.y / 20 - this.playIco.height * this.bodyScale / 2, this.playIco.width * this.bodyScale, this.playIco.height * this.bodyScale);
            ig.system.context.restore()
        },
        easeOut: function(b) {
            this.tween({
                pos: {
                    y: this.pos.y +
                        ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    b && ig.game.difficulty == this.difficulty && this.controller.popUpTutorial.easeIn()
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        clicked: function() {
            !1 == ig.game.easing && !0 == this.enable && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                },
                0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                ig.game.difficulty = this.difficulty;
                                this.controller.menuTitle.easeOut();
                                this.controller.puckTitle.easeOut();
                                _SETTINGS.MoreGames.Enabled && this.controller.buttonMoreGames.easeOut();
                                this.controller.buttonSettings.easeOut();
                                this.controller.buttonTextPlayEasy.easeOut(!0);
                                this.controller.buttonTextPlayNormal.easeOut(!0);
                                this.controller.buttonTextPlayDifficult.easeOut(!0)
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.menu.menu-title").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityMenuTitle = EntityMarketjsEntity.extend({
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/menu/menu-title.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.x += ig.system.width
        },
        easeOut: function() {
            this.tween({
                pos: {
                    x: this.pos.x +
                        ig.system.width
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    x: this.pos.x - ig.system.width
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.puck-title").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityPuckTitle = EntityMarketjsEntity.extend({
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/menu/puck-title.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.x -= ig.system.width
        },
        easeOut: function() {
            this.tween({
                pos: {
                    x: this.pos.x -
                        ig.system.width
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    x: this.pos.x + ig.system.width
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.pop-up-settings").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button", "game.entities.buttons.button-text").defines(function() {
    EntityPopUpSettings = EntityMarketjsEntity.extend({
        zIndex: 2,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-big.png"),
            sheetX: 1,
            sheetY: 1
        },
        bgTitle: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-title.png"),
        icoBgm: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        icoSfx: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        buttonClose: null,
        buttonClassic: null,
        buttonTimed: null,
        buttonGameModeoptions: [],
        barBgm: null,
        barSfx: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            this.buttonClose = ig.game.spawnEntity(EntityPUSettingsButtonClose, 0, 0, {
                controller: this.controller
            });
            switch (ig.game.gameMode) {
                case 0:
                    var e = !1,
                        f = !0;
                    break;
                case 1:
                    e = !0, f = !1
            }
            this.buttonClassic =
                ig.game.spawnEntity(EntityPUSettingsButtonClassic, 0, 0, {
                    controller: this.controller,
                    text: _STRINGS.Menu.GameModeClassic,
                    enable: e
                });
            this.buttonTimed = ig.game.spawnEntity(EntityPUSettingsButtonTimed, 0, 0, {
                controller: this.controller,
                text: _STRINGS.Menu.GameModeTimed,
                enable: f
            });
            for (b = 0; 3 > b; b++) this.buttonGameModeoptions[b] = ig.game.spawnEntity(EntityPUSettingsButtonGameModeOptions, 0, 0, {
                controller: this.controller,
                index: b,
                enable: b == ig.game.gameModeOptions ? !1 : !0
            });
            this.barBgm = ig.game.spawnEntity(EntityPUSettingsBarBgm,
                0, 0, {
                    controller: this.controller
                });
            this.barSfx = ig.game.spawnEntity(EntityPUSettingsBarSfx, 0, 0, {
                controller: this.controller
            })
        },
        update: function() {
            this.parent();
            this.buttonClose.pos.x = this.pos.x + this.size.x - 1 * this.buttonClose.size.x / 2;
            this.buttonClose.pos.y = this.pos.y - 1 * this.buttonClose.size.y / 2;
            this.barBgm.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barBgm.size.x;
            this.barBgm.pos.y = this.pos.y + 4.5 * this.size.y / 20 - 1 * this.barBgm.size.y / 2;
            this.barSfx.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barSfx.size.x;
            this.barSfx.pos.y =
                this.pos.y + 6.5 * this.size.y / 20 - 1 * this.barSfx.size.y / 2;
            this.buttonClassic.pos.x = this.pos.x + 3 * this.size.x / 10 - 1 * this.buttonClassic.size.x / 2;
            this.buttonClassic.pos.y = this.pos.y + 11.4 * this.size.y / 20 - 1 * this.buttonClassic.size.y / 2;
            this.buttonTimed.pos.x = this.pos.x + 7 * this.size.x / 10 - 1 * this.buttonTimed.size.x / 2;
            this.buttonTimed.pos.y = this.pos.y + 11.4 * this.size.y / 20 - 1 * this.buttonTimed.size.y / 2;
            for (var b = [1, 2.5, 4], c = 0; 3 > c; c++) this.buttonGameModeoptions[c].pos.x = this.pos.x + this.size.x * b[c] / 5 - 1 * this.buttonGameModeoptions[c].size.x /
                2, this.buttonGameModeoptions[c].pos.y = this.pos.y + 18 * this.size.y / 20 - 1 * this.buttonGameModeoptions[c].size.y / 2
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            var b = this.pos.x + 1 * this.size.x / 2,
                c = this.pos.y + 1 * this.size.y / 20;
            ig.system.context.drawImage(this.bgTitle.data, b - this.bgTitle.width * this.bodyScale / 2, c, this.bgTitle.width * this.bodyScale, this.bgTitle.height * this.bodyScale);
            ig.system.context.font = "40px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Menu.PopUpSettingsTitle, b, c + this.bgTitle.height * this.bodyScale / 2);
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 9 * this.size.y / 20;
            ig.system.context.font = "33px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Menu.GameMode, b, c);
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 14 * this.size.y / 20;
            ig.system.context.font =
                "33px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Menu.GameModeOptions, b, c);
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 15.5 * this.size.y / 20;
            ig.system.context.font = "33px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            switch (ig.game.gameMode) {
                case 0:
                    var d = _STRINGS.Menu.GameModeOptionsClassic;
                    break;
                case 1:
                    d = _STRINGS.Menu.GameModeOptionsTimed
            }
            ig.system.context.fillText(d, b, c);
            ig.system.context.restore()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y + ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        }
    });
    EntityPUSettingsButtonClose = EntityButton.extend({
        zIndex: 3,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-close.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.controller.popUpSettings.easeOut();
                            this.controller.menuTitle.easeIn();
                            this.controller.puckTitle.easeIn();
                            _SETTINGS.MoreGames.Enabled && this.controller.buttonMoreGames.easeIn();
                            this.controller.buttonSettings.easeIn();
                            this.controller.buttonTextPlayEasy.easeIn();
                            this.controller.buttonTextPlayNormal.easeIn();
                            this.controller.buttonTextPlayDifficult.easeIn()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUSettingsBar = EntityButton.extend({
        zIndex: 3,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/sound-bar-bg.png"),
            sheetX: 1,
            sheetY: 1
        },
        bar: new ig.Image("media/graphics/sprites/pop-up/sound-bar.png"),
        volume: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        update: function() {
            this.parent();
            this.move && (cursorX = ig.game.io.getClickPos().x - this.pos.x, 0 > cursorX ? cursorX = 0 : cursorX > this.size.x && (cursorX = this.size.x), this.volume = cursorX / this.size.x, ig.input.released("click") &&
                (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), this.updateTarget(), this.move = !1))
        },
        draw: function() {
            this.parent();
            if (0 < this.volume) {
                ig.system.context.save();
                var b = 100 < this.volume ? 100 : this.volume;
                ig.system.context.drawImage(this.bar.data, 0, 0, this.bar.width * b, this.bar.height, this.pos.x + 1 * this.size.x / 2 - this.bar.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.bar.height * this.bodyScale / 2, this.bar.width * this.bodyScale * b, this.bar.height * this.bodyScale);
                ig.system.context.restore()
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), this.move = !0)
        },
        clicking: function() {},
        released: function() {},
        updateTarget: function() {}
    });
    EntityPUSettingsBarBgm = EntityPUSettingsBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeBgm
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeBgm = this.volume, ig.soundHandler.bgmPlayer.volume(ig.game.volumeBgm))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpSettings.pos.x + 1 * this.controller.popUpSettings.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeBgm", this.volume)
        }
    });
    EntityPUSettingsBarSfx = EntityPUSettingsBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeSfx
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeSfx = this.volume, ig.soundHandler.sfxPlayer.volume(ig.game.volumeSfx))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpSettings.pos.x + 1 * this.controller.popUpSettings.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeSfx", this.volume)
        }
    });
    EntityPUSettingsButtonClassic = EntityButtonText.extend({
        zIndex: 3,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 28,
        textPos: {
            x: 0.48,
            y: 0.5
        },
        scaling: !0,
        enable: null,
        disableSprite: new ig.Image("media/graphics/sprites/buttons/button-small-disable.png"),
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        draw: function() {
            this.parent();
            !1 == this.enable && (ig.system.context.save(), ig.system.context.drawImage(this.disableSprite.data, this.pos.x + 1 * this.size.x / 2 - this.disableSprite.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.disableSprite.height * this.bodyScale / 2, this.disableSprite.width * this.bodyScale, this.disableSprite.height * this.bodyScale), ig.system.context.restore())
        },
        clicked: function() {
            !1 == ig.game.easing && !0 == this.enable &&
                (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                    bodyScale: 0.9
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                ig.game.gameMode = 0;
                                ig.game.save("gameMode", 0);
                                this.enable = !1;
                                this.controller.popUpSettings.buttonTimed.enable = !0;
                                ig.game.easing = !1
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUSettingsButtonTimed = EntityButtonText.extend({
        zIndex: 3,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 28,
        textPos: {
            x: 0.48,
            y: 0.5
        },
        scaling: !0,
        enable: null,
        disableSprite: new ig.Image("media/graphics/sprites/buttons/button-small-disable.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1,
                [0], !0)
        },
        draw: function() {
            this.parent();
            !1 == this.enable && (ig.system.context.save(), ig.system.context.drawImage(this.disableSprite.data, this.pos.x + 1 * this.size.x / 2 - this.disableSprite.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.disableSprite.height * this.bodyScale / 2, this.disableSprite.width * this.bodyScale, this.disableSprite.height * this.bodyScale), ig.system.context.restore())
        },
        clicked: function() {
            !1 == ig.game.easing && !0 == this.enable && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.9
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                ig.game.gameMode = 1;
                                ig.game.save("gameMode", 1);
                                this.enable = !1;
                                this.controller.popUpSettings.buttonClassic.enable = !0;
                                ig.game.easing = !1
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUSettingsButtonGameModeOptions = EntityButtonText.extend({
        zIndex: 3,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-box.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 30,
        textPos: {
            x: 0.5,
            y: 0.5
        },
        scaling: !0,
        enable: null,
        disableSprite: new ig.Image("media/graphics/sprites/buttons/button-box-disable.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        update: function() {
            this.parent();
            switch (ig.game.gameMode) {
                case 0:
                    this.text = ig.game.classic[this.index];
                    break;
                case 1:
                    this.text = ig.game.timed[this.index]
            }
        },
        draw: function() {
            this.parent();
            !1 == this.enable && (ig.system.context.save(), ig.system.context.drawImage(this.disableSprite.data, this.pos.x + 1 * this.size.x / 2 - this.disableSprite.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.disableSprite.height * this.bodyScale / 2, this.disableSprite.width * this.bodyScale, this.disableSprite.height * this.bodyScale), ig.system.context.restore())
        },
        clicked: function() {
            !1 == ig.game.easing && !0 == this.enable && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.9
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                ig.game.gameModeOptions = this.index;
                                ig.game.save("gameModeOptions", this.index);
                                this.enable = !1;
                                for (var b = 0; 3 > b; b++) b != ig.game.gameModeOptions && (this.controller.popUpSettings.buttonGameModeoptions[b].enable = !0);
                                ig.game.easing = !1
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.menu.pop-up-tutorial").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button", "game.entities.buttons.button-text").defines(function() {
    EntityPopUpTutorial = EntityMarketjsEntity.extend({
        zIndex: 2,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-xsmall.png"),
            sheetX: 1,
            sheetY: 1
        },
        buttonClose: null,
        buttonYes: null,
        buttonNo: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle =
                new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            this.buttonClose = ig.game.spawnEntity(EntityPUTutorialButtonClose, 0, 0, {
                controller: this.controller
            });
            this.buttonYes = ig.game.spawnEntity(EntityPUTutorialButtonYes, 0, 0, {
                controller: this.controller,
                text: _STRINGS.Menu.Yes
            });
            this.buttonNo = ig.game.spawnEntity(EntityPUTutorialButtonNo, 0, 0, {
                controller: this.controller,
                text: _STRINGS.Menu.No
            });
            this.buttonPosY = 5 * this.size.y / 6 - 1 * this.buttonNo.size.y / 2
        },
        update: function() {
            this.parent();
            this.buttonClose.pos.x = this.pos.x + this.size.x - 1 * this.buttonClose.size.x / 2;
            this.buttonClose.pos.y = this.pos.y - 1 * this.buttonClose.size.y / 2;
            this.buttonYes.pos.x = this.pos.x + 3 * this.size.x / 10 - 1 * this.buttonYes.size.x / 2;
            this.buttonYes.pos.y = this.pos.y + this.buttonPosY - 1 * this.buttonYes.size.y / 2;
            this.buttonNo.pos.x = this.pos.x + 7 * this.size.x / 10 - 1 * this.buttonNo.size.x / 2;
            this.buttonNo.pos.y = this.pos.y + this.buttonPosY - 1 * this.buttonNo.size.y / 2
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            var b = this.pos.x +
                1 * this.size.x / 2,
                c = this.pos.y + 1 * this.size.y / 4;
            ig.system.context.font = "40px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "top";
            ig.system.context.fillText(_STRINGS.Menu.TutorialQuestion, b, c);
            ig.system.context.restore()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y + ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y -
                        ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        }
    });
    EntityPUTutorialButtonClose = EntityButton.extend({
        zIndex: 3,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-close.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.controller.popUpTutorial.easeOut();
                                this.controller.menuTitle.easeIn();
                                this.controller.puckTitle.easeIn();
                                _SETTINGS.MoreGames.Enabled && this.controller.buttonMoreGames.easeIn();
                                this.controller.buttonSettings.easeIn();
                                this.controller.buttonTextPlayEasy.easeIn();
                                this.controller.buttonTextPlayNormal.easeIn();
                                this.controller.buttonTextPlayDifficult.easeIn()
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUTutorialButtonYes = EntityButtonText.extend({
        zIndex: 3,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 28,
        textPos: {
            x: 0.48,
            y: 0.5
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                bodyScale: 0.9
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.playTutorial = !0;
                            ig.game.director.loadLevel(2)
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUTutorialButtonNo = EntityButtonText.extend({
        zIndex: 3,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 28,
        textPos: {
            x: 0.48,
            y: 0.5
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                bodyScale: 0.9
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.playTutorial = !1;
                            ig.game.director.loadLevel(2)
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.game.puck").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityPuck = EntityMarketjsEntity.extend({
        zIndex: 20,
        bounciness: 1,
        maxVel: {
            x: 1E4,
            y: 1E4
        },
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/puck.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertical: "center",
        horizontal: "center",
        radius: null,
        outOfArena: !1,
        scaleCircle: 0.25,
        scaling: !1,
        readyPlay: !0,
        edgeCollide: null,
        lastCollidePlayer: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [0], !0);
            this.radius = 0.9 * this.size.x / 2 * this.scaleCircle;
            this.setPosition();
            this.puckTutorial || this.puckReady(0)
        },
        update: function() {
            if (!ig.game.isPause || this.puckTutorial) this.parent(), this.setScale(this.scaleCircle, this.scaleCircle)
        },
        puckReady: function(b) {
            ig.game.easing = !0;
            ig.game.playTutorial || ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.gameStart);
            this.currentAnim.alpha = 0.1;
            this.scaleCircle = 1;
            1 == b ? (this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2, this.pos.y = this.controller.edgeArena.puckComputer -
                this.size.y / 2) : 2 == b ? (this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2, this.pos.y = this.controller.edgeArena.puckPlayer - this.size.y / 2) : (this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2, this.pos.y = this.controller.edgeArena.center.y - this.size.y / 2);
            this.readyPlay = !1;
            this.zIndex = 22;
            this.tween({
                currentAnim: {
                    alpha: 1
                },
                scaleCircle: 0.25
            }, 1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.controller.paddleComputer.scaleGoalText = 0;
                    this.controller.paddleComputer.playerGoal =
                        null;
                    1 == b ? (this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2, this.pos.y = this.controller.edgeArena.puckComputer - this.size.y / 2) : 2 == b ? (this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2, this.pos.y = this.controller.edgeArena.puckPlayer - this.size.y / 2) : (this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2, this.pos.y = this.controller.edgeArena.center.y - this.size.y / 2);
                    this.readyPlay = !0;
                    this.zIndex = 20;
                    1 == ig.game.gameMode && !1 == ig.game.playTutorial && this.controller.uiGame.gameTime.unpause();
                    1 == ig.game.gameMode && (this.controller.paddleComputer.cheatTime = null);
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        },
        collideWith: function(b) {
            if (!1 != this.readyPlay && b instanceof EntityPaddle) {
                (b.pos.x != b.last.x || b.pos.y != b.last.y || this.lastCollidePlayer != b.player || this.edgeCollide) && !0 == ig.soundHandler.sfxPlayer.soundList.puckPaddle._sounds[0]._ended && ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.puckPaddle);
                this.lastCollidePlayer = b.player;
                this.edgeCollide = !1;
                var c = this.controller.arena.width -
                    2 * b.radius,
                    d = this.controller.arena.height / 2 - 2 * b.radius,
                    e = this.pos.x + this.size.x / 2,
                    f = this.pos.y + this.size.y / 2,
                    j = b.pos.x + b.size.x / 2,
                    m = b.pos.y + b.size.y / 2,
                    p = b.pos.x - b.last.x,
                    g = b.pos.y - b.last.y,
                    n = Math.abs(Math.abs(this.vel.x) > Math.abs(this.vel.y) ? this.vel.x : this.vel.y),
                    q = this.radius + b.radius,
                    r = this.radiansToDegrees(Math.atan2(f - m, e - j));
                this.pos.x = j + this.polarToCartesian(q, r).x - this.size.x / 2;
                this.pos.y = m + this.polarToCartesian(q, r).y - this.size.y / 2;
                e = Math.round(n * (e - j) / (this.size.x + b.size.x));
                b = Math.round(n *
                    (f - m) / (this.size.y + b.size.y));
                this.vel.x = 0 == p ? e : e + p / c * this.maxVel.x;
                this.vel.y = 0 == g ? b : b + g / d * this.maxVel.y;
                this.friction.x = Math.abs(this.vel.x / 5);
                this.friction.y = Math.abs(this.vel.y / 5)
            }
        },
        edgeCheck: function() {
            var b = this.pos.x + this.size.x / 2,
                c = this.pos.y + this.size.y / 2,
                d = this.controller.edgeArena;
            if (!1 == this.outOfArena) {
                b + this.radius > d.right && (this.pos.x = d.right - this.size.x / 2 - this.radius, 0 != this.vel.x && (this.edgeSfx(), this.edgeCollide = !0, 0 < this.vel.x && (this.vel.x *= -1)));
                b - this.radius < d.left && (this.pos.x =
                    d.left - this.size.x / 2 + this.radius, 0 != this.vel.x && (this.edgeSfx(), this.edgeCollide = !0, 0 > this.vel.x && (this.vel.x *= -1)));
                if (c - this.radius < d.top && (b - this.radius < d.goalXLeft || b + this.radius > d.goalXRight)) this.pos.y = d.top - this.size.y / 2 + this.radius, 0 != this.vel.y && (this.edgeCollide = !0, this.edgeSfx(), 0 > this.vel.y && (this.vel.y *= -1));
                if (c + this.radius > d.bottom && (b - this.radius < d.goalXLeft || b + this.radius > d.goalXRight)) this.pos.y = d.bottom - this.size.y / 2 - this.radius, 0 != this.vel.y && (this.edgeCollide = !0, this.edgeSfx(),
                    0 < this.vel.y && (this.vel.y *= -1))
            } else b - this.radius < d.goalXLeft ? 0 > this.vel.x && (this.edgeCollide = !0, this.vel.x *= -1) : b + this.radius > d.goalXRight && 0 < this.vel.x && (this.edgeCollide = !0, this.vel.x *= -1);
            this.goalCheck()
        },
        edgeSfx: function() {
            this.pos.x != this.last.x && this.pos.y != this.last.y && !0 == ig.soundHandler.sfxPlayer.soundList.puckEdge._sounds[0]._ended && !ig.game.playTutorial && ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.puckEdge)
        },
        goalCheck: function() {
            var b = this.pos.x + this.size.x / 2,
                c = this.pos.y + this.size.y / 2,
                d = this.controller.edgeArena;
            if ((c < d.top || c > d.bottom) && b - this.radius > d.goalXLeft && b + this.radius < d.goalXRight && this.readyPlay) this.outOfArena = !0, c + this.radius < d.top ? (this.controller.score.player++, this.controller.paddleComputer.beginningPos(1), this.controller.paddleComputer.playerGoal = !0, this.vel = {
                x: 0,
                y: 0
            }, this.friction = {
                x: 0,
                y: 0
            }, this.readyPlay = this.outOfArena = !1, this.goalSfx()) : c - this.radius > d.bottom && (this.controller.score.computer++, this.controller.paddleComputer.beginningPos(2),
                this.controller.paddleComputer.playerGoal = !1, this.vel = {
                    x: 0,
                    y: 0
                }, this.friction = {
                    x: 0,
                    y: 0
                }, this.readyPlay = this.outOfArena = !1, this.goalSfx())
        },
        goalSfx: function() {
            switch (ig.game.gameMode) {
                case 0:
                    this.controller.score.player != ig.game.classic[ig.game.gameModeOptions] && this.controller.score.computer != ig.game.classic[ig.game.gameModeOptions] && ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.goal);
                    break;
                case 1:
                    0 >= this.controller.uiGame.gameTime.delta() && ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.goal)
            }
        },
        puckBetweenPaddleCheck: function(b) {
            var c = !0 == b.player ? this.controller.paddleComputer : this.controller.paddlePlayer,
                d = this.pos.x + this.size.x / 2,
                e = this.pos.y + this.size.y / 2,
                f = b.pos.x + b.size.x / 2,
                j = b.pos.y + b.size.y / 2,
                m = c.pos.x + c.size.x / 2,
                p = c.pos.y + c.size.y / 2,
                j = b.edgeCheck(b.moveX, b.moveY),
                f = j.x + b.size.x / 2,
                j = j.y + b.size.y / 2,
                g = this.radius + this.radius,
                e = this.radiansToDegrees(Math.atan2(e - j, d - f)),
                d = f + this.polarToCartesian(g, e).x,
                e = j + this.polarToCartesian(g, e).y;
            b = ig.game.collision.circleCircle(f, j, b.radius * b.bodyScale,
                d, e, this.radius * this.bodyScale);
            j = ig.game.collision.circleCircle(m, p, c.radius * c.bodyScale, d, e, this.radius * this.bodyScale);
            return b && j ? (g = this.radius + c.radius, e = this.radiansToDegrees(Math.atan2(e - p, d - m)), this.pos.x = m + this.polarToCartesian(g, e).x - this.size.x / 2, this.pos.y = p + this.polarToCartesian(g, e).y - this.size.y / 2, this.vel.x = d > f ? this.maxVel.x / 4 : -this.maxVel.x / 4, this.vel.y = 0, this.edgeCheck(), !0) : !1
        },
        polarToCartesian: function(b, c) {
            return {
                x: b * Math.cos(this.degreesToRadians(c)),
                y: b * Math.sin(this.degreesToRadians(c))
            }
        },
        radiansToDegrees: function(b) {
            return 180 * b / Math.PI
        },
        degreesToRadians: function(b) {
            return b * Math.PI / 180
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.paddle").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityPaddle = EntityMarketjsEntity.extend({
        zIndex: 21,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/paddle.png"),
            sheetX: 2,
            sheetY: 1
        },
        vertical: "center",
        horizontal: "center",
        radius: null,
        drag: !1,
        player: null,
        moveX: null,
        moveY: null,
        scaleGoalText: 0,
        playerGoal: null,
        lastPos: null,
        cheatTime: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.playerSprite = new ig.Animation(this.idleSheet,
                1, [1], !0);
            this.computerSprite = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.currentAnim = this.player ? this.playerSprite : this.computerSprite;
            this.radius = 1.9 * this.size.x / 4;
            this.setPosition()
        },
        update: function() {
            var b, c;
            if (!((ig.game.isPause || ig.game.easing && !1 == this.player || ig.game.playTutorial) && !0 != this.paddleTutorial))
                if (this.parent(), !0 != this.paddleTutorial) {
                    if (this.player) this.playerMove();
                    else if (this.computerMove(), 1 == ig.game.gameMode) {
                        var d = this.controller.puck;
                        c = d.pos.y + d.size.y / 2;
                        b = this.controller.edgeArena;
                        c >= b.center.y + d.radius && c <= b.bottom + d.radius ? null == this.cheatTime ? this.cheatTime = new ig.Timer(7) : 0 < this.cheatTime.delta() && (this.cheatTime = null, ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.goal), this.controller.score.computer++, this.controller.paddleComputer.beginningPos(1), this.controller.puck.vel = {
                            x: 0,
                            y: 0
                        }, this.controller.puck.friction = {
                            x: 0,
                            y: 0
                        }, this.controller.puck.outOfArena = !1, this.controller.puck.readyPlay = !1) : this.cheatTime = null
                    }
                    var e = this.pos.x + this.size.x / 2,
                        f = this.pos.y +
                        this.size.y / 2,
                        d = this.controller.puck;
                    b = d.pos.x + d.size.x / 2;
                    c = d.pos.y + d.size.y / 2;
                    ig.game.collision.circleCircle(e, f, this.radius * this.bodyScale, b, c, d.radius * d.bodyScale) && d.collideWith(this, null);
                    d.edgeCheck()
                }
        },
        draw: function() {
            this.parent();
            if (null != this.playerGoal) {
                ig.system.context.save();
                if (this.playerGoal) var b = this.controller.edgeArena.center.x,
                    c = this.controller.edgeArena.goalPlayerPosY;
                else b = this.controller.edgeArena.center.x, c = this.controller.edgeArena.goalComputerPosY;
                ig.system.context.font =
                    60 * this.scaleGoalText + "px sf-collegiate-solid";
                ig.system.context.fillStyle = "#333333";
                ig.system.context.textAlign = "center";
                ig.system.context.textBaseline = "middle";
                ig.system.context.fillText(_STRINGS.Game.Goal, b, c);
                ig.system.context.restore()
            }
            1 == ig.game.gameMode && null != this.cheatTime && -3 < this.cheatTime.delta() && (b = this.controller.edgeArena.center.x, c = this.controller.edgeArena.goalPlayerPosY, ig.system.context.save(), ig.system.context.font = "60px sf-collegiate-solid", ig.system.context.fillStyle = "#FF3366",
                ig.system.context.textAlign = "center", ig.system.context.textBaseline = "middle", ig.system.context.fillText(Math.ceil(Math.abs(this.cheatTime.delta())), b, c), ig.system.context.restore())
        },
        beginningPos: function(b) {
            1 == ig.game.gameMode && this.controller.uiGame.gameTime.pause();
            var c = this.controller.edgeArena.center.x - this.size.x / 2,
                d = this.controller.edgeArena.computerPosY - this.size.y / 2;
            this.tween({
                pos: {
                    x: c,
                    y: d
                },
                scaleGoalText: 1
            }, 0.5, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.pos.x = c;
                    this.pos.y = d;
                    this.controller.puck.puckReady(b)
                }.bind(this)
            }).start()
        },
        playerMove: function() {
            var b, c;
            this.drag ? (ig.ua.mobile ? (b = this.pos.x + this.size.x / 2, c = this.pos.y + this.size.y / 2, this.moveX = ig.game.io.getClickPos().x - b, this.moveY = ig.game.io.getClickPos().y - c - this.size.y) : (b = this.pos.x + this.size.x / 2, c = this.pos.y + this.size.y / 2, this.moveX = ig.game.io.getClickPos().x - b, this.moveY = ig.game.io.getClickPos().y - c), this.paddleMovement(this.moveX, this.moveY), ig.input.released("click") && (this.drag = !1, this.lastPos =
                null)) : (b = this.pos.x + this.size.x / 2, c = this.pos.y + this.size.y / 2, Math.sqrt(Math.pow(b - ig.game.io.getClickPos().x, 2) + Math.pow(c - ig.game.io.getClickPos().y, 2)) < this.radius && ig.input.pressed("click") && (this.drag = !0))
        },
        computerMove: function() {
            switch (ig.game.difficulty) {
                case 1:
                    this.computerEasy();
                    break;
                case 2:
                    this.computerNormal();
                    break;
                case 3:
                    this.computerDifficult()
            }
            this.paddleMovement(this.moveX, this.moveY)
        },
        computerEasy: function() {
            var b = this.controller.puck,
                c = b.pos.x + b.size.x / 2,
                d = b.pos.y + b.size.y / 2,
                e =
                this.pos.x + this.size.x / 2,
                f = this.pos.y + this.size.y / 2,
                j = this.controller.edgeArena;
            d == j.center.y && c == j.center.x && 0 == b.vel.x && 0 == b.vel.y ? (this.moveX = 0, this.moveY = 3) : this.puckComputerArea() ? d > f ? (this.moveX = e > c ? e - 3 < c ? c - e : -3 : e + 3 > c ? c - e : 3, this.controller.paddlePlayer.pos.x + this.controller.paddlePlayer.size.x / 2 == j.center.x && this.controller.paddlePlayer.pos.y + this.controller.paddlePlayer.size.y / 2 == j.playerPosY && (c == j.center.x && 0 == b.vel.x && c) && (this.moveX = c == e ? 3 : 0), this.moveY = f + 3 > d ? 0 : 3) : (this.moveX = f <= j.top +
                this.radius ? 0 == b.vel.y ? c > e ? 3 : -3 : c > e ? Math.abs(c - (e - 3)) < 3 * (b.radius + this.radius) / 2 ? -3 : 0 : Math.abs(c - (e + 3)) < 3 * (b.radius + this.radius) / 2 ? 3 : 0 : c > e ? Math.abs(c - (e + 3)) > b.radius + this.radius ? 3 : 0 : Math.abs(c - (e - 3)) > b.radius + this.radius ? -3 : 0, this.moveY = -3) : this.puckPlayerArea() && (this.moveX = e != c ? f == j.computerPosY - 0 ? e < j.goalXLeft ? 3 : e > j.goalXRight ? -3 : c > j.goalXLeft && c < j.goalXRight ? e > c ? e - 3 < c ? c - e : -3 : e + 3 > c ? c - e : 3 : 0 : e > c ? e - 3 < c ? c - e : -3 : e + 3 > c ? c - e : 3 : 0, this.moveY = f != j.computerPosY - 0 ? f > j.computerPosY - 0 ? f - 3 < j.computerPosY - 0 ? j.computerPosY -
                0 - f : -3 : f + 3 > j.computerPosY - 0 ? j.computerPosY - 0 - f : 3 : 0);
            Math.sqrt(Math.pow(e + this.moveX - c, 2) + Math.pow(f + this.moveY - d, 2)) < this.radius + b.radius && f < d && (this.last.x = this.pos.x + -3 * this.moveX, this.last.y = this.pos.y + -3 * this.moveY)
        },
        computerNormal: function() {
            var b = this.controller.puck,
                c = b.pos.x + b.size.x / 2,
                d = b.pos.y + b.size.y / 2,
                e = this.pos.x + this.size.x / 2,
                f = this.pos.y + this.size.y / 2,
                j = this.controller.edgeArena,
                m = this.getRandomInt(3, 5);
            d == j.center.y && c == j.center.x && 0 == b.vel.x && 0 == b.vel.y ? (this.moveX = 0, this.moveY =
                m) : this.puckComputerArea() ? d > f ? (this.moveX = e > c ? e - m < c ? c - e : -m : e + m > c ? c - e : m, this.controller.paddlePlayer.pos.x + this.controller.paddlePlayer.size.x / 2 == j.center.x && this.controller.paddlePlayer.pos.y + this.controller.paddlePlayer.size.y / 2 == j.playerPosY && (c == j.center.x && 0 == b.vel.x && c) && (this.moveX = c == e ? m : 0), this.moveY = f + m > d ? 0 : m) : (this.moveX = f <= j.top + this.radius ? 0 == b.vel.y ? c > e ? m : -m : c > e ? Math.abs(c - (e - m)) < 3 * (b.radius + this.radius) / 2 ? -m : 0 : Math.abs(c - (e + m)) < 3 * (b.radius + this.radius) / 2 ? m : 0 : c > e ? Math.abs(c - (e + m)) > b.radius +
                this.radius ? m : 0 : Math.abs(c - (e - m)) > b.radius + this.radius ? -m : 0, this.moveY = -m) : this.puckPlayerArea() && (this.moveX = e != c ? f == j.computerPosY - 15 ? e < j.goalXLeft ? m : e > j.goalXRight ? -m : c > j.goalXLeft && c < j.goalXRight ? e > c ? e - m < c ? c - e : -m : e + m > c ? c - e : m : 0 : e > c ? e - m < c ? c - e : -m : e + m > c ? c - e : m : 0, this.moveY = f != j.computerPosY - 15 ? f > j.computerPosY - 15 ? f - m < j.computerPosY - 15 ? j.computerPosY - 15 - f : -m : f + m > j.computerPosY - 15 ? j.computerPosY - 15 - f : m : 0);
            Math.sqrt(Math.pow(e + this.moveX - c, 2) + Math.pow(f + this.moveY - d, 2)) < this.radius + b.radius && f < d && (this.last.x =
                this.pos.x + -4 * this.moveX, this.last.y = this.pos.y + -4 * this.moveY)
        },
        computerDifficult: function() {
            var b = this.controller.puck,
                c = b.pos.x + b.size.x / 2,
                d = b.pos.y + b.size.y / 2,
                e = this.pos.x + this.size.x / 2,
                f = this.pos.y + this.size.y / 2,
                j = this.controller.edgeArena,
                m = this.getRandomInt(5, 8);
            d == j.center.y && c == j.center.x && 0 == b.vel.x && 0 == b.vel.y ? (this.moveX = 0, this.moveY = m) : this.puckComputerArea() ? d > f ? (this.moveX = e > c ? e - m < c ? c - e : -m : e + m > c ? c - e : m, this.controller.paddlePlayer.pos.x + this.controller.paddlePlayer.size.x / 2 == j.center.x &&
                this.controller.paddlePlayer.pos.y + this.controller.paddlePlayer.size.y / 2 == j.playerPosY && (c == j.center.x && 0 == b.vel.x && c) && (this.moveX = c == e ? m : 0), this.moveY = f + m > d ? 0 : m) : (this.moveX = f <= j.top + this.radius ? 0 == b.vel.y ? c > e ? m : -m : c > e ? Math.abs(c - (e - m)) < 3 * (b.radius + this.radius) / 2 ? -m : 0 : Math.abs(c - (e + m)) < 3 * (b.radius + this.radius) / 2 ? m : 0 : c > e ? Math.abs(c - (e + m)) > b.radius + this.radius ? m : 0 : Math.abs(c - (e - m)) > b.radius + this.radius ? -m : 0, this.moveY = -m) : this.puckPlayerArea() && (this.moveX = e != c ? f == j.computerPosY - 30 ? e < j.goalXLeft ?
                m : e > j.goalXRight ? -m : c > j.goalXLeft && c < j.goalXRight ? e > c ? e - m < c ? c - e : -m : e + m > c ? c - e : m : 0 : e > c ? e - m < c ? c - e : -m : e + m > c ? c - e : m : 0, this.moveY = f != j.computerPosY - 30 ? f > j.computerPosY - 30 ? f - m < j.computerPosY - 30 ? j.computerPosY - 30 - f : -m : f + m > j.computerPosY - 30 ? j.computerPosY - 30 - f : m : 0);
            Math.sqrt(Math.pow(e + this.moveX - c, 2) + Math.pow(f + this.moveY - d, 2)) < this.radius + b.radius && f < d && (this.last.x = this.pos.x + -5 * this.moveX, this.last.y = this.pos.y + -5 * this.moveY)
        },
        paddleMovement: function(b, c) {
            var d = this.controller.edgeArena,
                e = this.controller.puck,
                f = e.pos.x + e.size.x / 2,
                j = e.pos.y + e.size.y / 2,
                m = this.pos.x + this.size.x / 2,
                p = this.pos.y + this.size.y / 2,
                g = this.edgeCheck(b, c),
                n = this.radius + e.radius,
                q = this.radiansToDegrees(Math.atan2(j - (g.y + this.size.y / 2), f - (g.x + this.size.x / 2))),
                f = g.x + this.size.x / 2 + this.polarToCartesian(n, q).x,
                j = g.y + this.size.y / 2 + this.polarToCartesian(n, q).y;
            f - e.radius <= d.left && j + e.radius >= d.bottom ? (f = d.left + e.radius, j = d.bottom - e.radius, n = this.radius + e.radius, q = this.radiansToDegrees(Math.atan2(j - (g.y + this.size.y / 2), f - (g.x + this.size.x / 2))),
                d = f + -1 * this.polarToCartesian(n, q).x - m, p = j + -1 * this.polarToCartesian(n, q).y - p, this.pos = this.edgeCheck(d, p)) : f + e.radius >= d.right && j + e.radius >= d.bottom ? (f = d.right - e.radius, j = d.bottom - e.radius, n = this.radius + e.radius, q = this.radiansToDegrees(Math.atan2(j - (g.y + this.size.y / 2), f - (g.x + this.size.x / 2))), d = f + -1 * this.polarToCartesian(n, q).x - m, p = j + -1 * this.polarToCartesian(n, q).y - p, this.pos = this.edgeCheck(d, p)) : f - e.radius <= d.left && j - e.radius <= d.top ? (f = d.left + e.radius, j = d.top + e.radius, n = this.radius + e.radius, q = this.radiansToDegrees(Math.atan2(j -
                (g.y + this.size.y / 2), f - (g.x + this.size.x / 2))), d = f + -1 * this.polarToCartesian(n, q).x - m, p = j + -1 * this.polarToCartesian(n, q).y - p, this.pos = this.edgeCheck(d, p)) : f + e.radius >= d.right && j - e.radius <= d.top ? (f = d.right - e.radius, j = d.top + e.radius, n = this.radius + e.radius, q = this.radiansToDegrees(Math.atan2(j - (g.y + this.size.y / 2), f - (g.x + this.size.x / 2))), d = f + -1 * this.polarToCartesian(n, q).x - m, p = j + -1 * this.polarToCartesian(n, q).y - p, this.pos = this.edgeCheck(d, p)) : f + e.radius >= d.right && j == g.y + this.size.y / 2 ? (d = d.right - 2 * e.radius - this.radius -
                this.size.x / 2 - this.pos.x, this.pos = this.edgeCheck(d, c)) : f - e.radius <= d.left && j == g.y + this.size.y / 2 ? (d = d.left + 2 * e.radius + this.radius - this.size.x / 2 - this.pos.x, this.pos = this.edgeCheck(d, c)) : j - e.radius <= d.top && f == g.x + this.size.x / 2 && (f <= d.goalXLeft || f >= d.goalXRight) ? (p = d.top + 2 * e.radius + this.radius - this.size.y / 2 - this.pos.y, this.pos = this.edgeCheck(b, p)) : j + e.radius >= d.bottom && f == g.x + this.size.x / 2 && (f <= d.goalXLeft || f >= d.goalXRight) ? (p = d.bottom - 2 * e.radius - this.radius - this.size.y / 2 - this.pos.y, this.pos = this.edgeCheck(b,
                p)) : this.controller.puck.puckBetweenPaddleCheck(this) ? (e = this.controller.puck, f = e.pos.x + e.size.x / 2, j = e.pos.y + e.size.y / 2, n = this.radius + e.radius, q = this.radiansToDegrees(Math.atan2(j - p, f - m)), d = f + -1 * this.polarToCartesian(n, q).x - m, p = j + -1 * this.polarToCartesian(n, q).y - p, this.pos = this.edgeCheck(d, p)) : this.pos = this.edgeCheck(b, c)
        },
        edgeCheck: function(b, c) {
            var d = {
                    x: null,
                    y: null
                },
                e = this.pos.x + this.size.x / 2,
                f = this.pos.y + this.size.y / 2;
            d.x = e + this.radius + b > this.controller.edgeArena.right ? this.controller.edgeArena.right -
                this.size.x / 2 - this.radius : e - this.radius + b < this.controller.edgeArena.left ? this.controller.edgeArena.left - this.size.x / 2 + this.radius : this.pos.x + b;
            d.y = this.player ? f + this.radius + c > this.controller.edgeArena.bottom ? this.controller.edgeArena.bottom - this.size.y / 2 - this.radius : f - this.radius + c < this.controller.edgeArena.center.y ? this.controller.edgeArena.center.y - this.size.y / 2 + this.radius : this.pos.y + c : f + this.radius + c > this.controller.edgeArena.center.y ? this.controller.edgeArena.center.y - this.size.y / 2 - this.radius :
                f - this.radius + c < this.controller.edgeArena.top ? this.controller.edgeArena.top - this.size.y / 2 + this.radius : this.pos.y + c;
            return d
        },
        puckComputerArea: function() {
            var b = this.controller.puck,
                c = b.pos.y + b.size.y / 2,
                d = this.controller.edgeArena;
            return c < d.center.y && c >= d.top - b.radius ? !0 : !1
        },
        puckPlayerArea: function() {
            var b = this.controller.puck,
                c = b.pos.y + b.size.y / 2,
                d = this.controller.edgeArena;
            return c > d.center.y && c <= d.bottom + b.radius ? !0 : !1
        },
        polarToCartesian: function(b, c) {
            return {
                x: b * Math.cos(this.degreesToRadians(c)),
                y: b * Math.sin(this.degreesToRadians(c))
            }
        },
        radiansToDegrees: function(b) {
            return 180 * b / Math.PI
        },
        degreesToRadians: function(b) {
            return b * Math.PI / 180
        },
        getRandomInt: function(b, c) {
            return Math.floor(Math.random() * (c - b + 1)) + b
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.ui-game").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityUiGame = EntityMarketjsEntity.extend({
        zIndex: 30,
        arenaEdge: new ig.Image("media/graphics/sprites/arena-edge.png"),
        scoreBg: new ig.Image("media/graphics/sprites/game/score-bg.png"),
        timeBg: new ig.Image("media/graphics/sprites/game/time-bg.png"),
        timeIco: new ig.Image("media/graphics/sprites/game/time-ico.png"),
        endGame: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            switch (ig.game.gameMode) {
                case 0:
                    this.posScoreComputer = {
                        x: ig.system.width - this.controller.buttonPause.pos.x - this.controller.buttonPause.size.x,
                        y: this.controller.buttonPause.pos.y + this.controller.buttonPause.size.y / 2
                    };
                    this.posScorePlayer = {
                        x: 1.5 * this.posScoreComputer.x + this.scoreBg.width,
                        y: this.controller.buttonPause.pos.y + this.controller.buttonPause.size.y / 2
                    };
                    break;
                case 1:
                    this.posTimeIco = {
                            x: ig.system.width - this.controller.buttonPause.pos.x - this.controller.buttonPause.size.x,
                            y: this.controller.buttonPause.pos.y + this.controller.buttonPause.size.y / 2
                        }, this.posTimeBg = {
                            x: 1.5 * this.posTimeIco.x + this.timeIco.width,
                            y: this.controller.buttonPause.pos.y + this.controller.buttonPause.size.y / 2
                        }, this.posScoreComputer = {
                            x: 2 * this.posTimeIco.x + this.timeIco.width + this.timeBg.width,
                            y: this.controller.buttonPause.pos.y + this.controller.buttonPause.size.y / 2
                        }, this.posScorePlayer = {
                            x: 2.5 * this.posTimeIco.x + this.timeIco.width + this.timeBg.width + this.scoreBg.width,
                            y: this.controller.buttonPause.pos.y + this.controller.buttonPause.size.y / 2
                        }, this.gameTime = new ig.Timer(60 * ig.game.timed[ig.game.gameModeOptions]),
                        this.gameTime.pause()
            }
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            ig.system.context.save();
            ig.system.context.fillStyle = "#3ac6ed";
            ig.system.context.fillRect(0, 0, ig.system.width, 140);
            ig.system.context.fillRect(0, 140, 70, ig.system.height - 200);
            ig.system.context.fillRect(0, ig.system.height - 60, ig.system.width, 60);
            ig.system.context.fillRect(ig.system.width - 70, 140, 70, ig.system.height - 200);
            this.arenaEdge.draw(ig.system.width / 2 - this.arenaEdge.width / 2, 13 * ig.system.height / 24 - this.arenaEdge.height / 2);
            this.parent();
            this.scoreBg.draw(this.posScoreComputer.x, this.posScoreComputer.y - this.scoreBg.height / 2);
            ig.system.context.font = "45px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FF3366";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            var b = this.controller.score.computer,
                c = Math.floor(b % 100 / 10),
                d = b % 10;
            ig.system.context.fillText(Math.floor(b % 1E3 / 100), this.posScoreComputer.x + 1.1 * this.scoreBg.width / 4, this.posScoreComputer.y + 5);
            ig.system.context.fillText(c, this.posScoreComputer.x + 2 *
                this.scoreBg.width / 4, this.posScoreComputer.y + 5);
            ig.system.context.fillText(d, this.posScoreComputer.x + 2.9 * this.scoreBg.width / 4, this.posScoreComputer.y + 5);
            this.scoreBg.draw(this.posScorePlayer.x, this.posScorePlayer.y - this.scoreBg.height / 2);
            ig.system.context.font = "45px sf-collegiate-solid";
            ig.system.context.fillStyle = "#33CCCC";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            b = this.controller.score.player;
            c = Math.floor(b % 100 / 10);
            d = b % 10;
            ig.system.context.fillText(Math.floor(b %
                1E3 / 100), this.posScorePlayer.x + 1.1 * this.scoreBg.width / 4, this.posScorePlayer.y + 5);
            ig.system.context.fillText(c, this.posScorePlayer.x + 2 * this.scoreBg.width / 4, this.posScorePlayer.y + 5);
            ig.system.context.fillText(d, this.posScorePlayer.x + 2.9 * this.scoreBg.width / 4, this.posScorePlayer.y + 5);
            if (1 == ig.game.gameMode) {
                this.timeIco.draw(this.posTimeIco.x, this.posTimeIco.y - this.timeIco.height / 2);
                this.timeBg.draw(this.posTimeBg.x, this.posTimeBg.y - this.timeBg.height / 2);
                ig.system.context.font = "38px sf-collegiate-solid";
                ig.system.context.fillStyle = "#333333";
                ig.system.context.textAlign = "center";
                ig.system.context.textBaseline = "middle";
                ig.system.context.fillText(":", this.posTimeBg.x + 1 * this.timeBg.width / 2, this.posTimeBg.y);
                var c = Math.floor(-1 * Math.floor(this.gameTime.delta()) / 60),
                    b = Math.floor(c / 10),
                    c = c % 10,
                    e = -1 * Math.floor(this.gameTime.delta()) % 60,
                    d = Math.floor(e / 10),
                    e = e % 10;
                ig.system.context.fillText(b, this.posTimeBg.x + 0.9 * this.timeBg.width / 4, this.posTimeBg.y + 3);
                ig.system.context.fillText(c, this.posTimeBg.x + 1.5 * this.timeBg.width /
                    4, this.posTimeBg.y + 3);
                ig.system.context.fillText(d, this.posTimeBg.x + 2.5 * this.timeBg.width / 4, this.posTimeBg.y + 3);
                ig.system.context.fillText(e, this.posTimeBg.x + 3.1 * this.timeBg.width / 4, this.posTimeBg.y + 3)
            }
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pop-up-pause").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button", "game.entities.buttons.button-text").defines(function() {
    EntityPopUpPause = EntityMarketjsEntity.extend({
        zIndex: 40,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        bgTitle: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-title.png"),
        icoBgm: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        icoSfx: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        buttonClose: null,
        barBgm: null,
        barSfx: null,
        buttonHome: null,
        buttonResume: null,
        buttonRestart: null,
        buttonGameModeoptions: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            this.barBgm = ig.game.spawnEntity(EntityPUPauseBarBgm, ig.system.width, ig.system.height, {
                controller: this.controller
            });
            this.barSfx = ig.game.spawnEntity(EntityPUPauseBarSfx,
                ig.system.width, ig.system.height, {
                    controller: this.controller
                });
            this.buttonHome = ig.game.spawnEntity(EntityButtonHome, ig.system.width, ig.system.height, {
                controller: this.controller
            });
            this.buttonResume = ig.game.spawnEntity(EntityButtonResume, ig.system.width, ig.system.height, {
                controller: this.controller
            });
            this.buttonRestart = ig.game.spawnEntity(EntityButtonRestart, ig.system.width, ig.system.height, {
                controller: this.controller
            })
        },
        update: function() {
            this.parent();
            this.barBgm.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barBgm.size.x;
            this.barBgm.pos.y = this.pos.y + 8 * this.size.y / 20 - 1 * this.barBgm.size.y / 2;
            this.barSfx.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barSfx.size.x;
            this.barSfx.pos.y = this.pos.y + 11 * this.size.y / 20 - 1 * this.barSfx.size.y / 2;
            this.buttonHome.pos.x = this.pos.x + 1 * this.size.x / 5 - 1 * this.buttonHome.size.x / 2;
            this.buttonHome.pos.y = this.pos.y + 16.8 * this.size.y / 20 - 1 * this.buttonHome.size.y / 2;
            this.buttonResume.pos.x = this.pos.x + 2.5 * this.size.x / 5 - 1 * this.buttonResume.size.x / 2;
            this.buttonResume.pos.y = this.pos.y + 16.8 * this.size.y / 20 - 1 * this.buttonResume.size.y /
                2;
            this.buttonRestart.pos.x = this.pos.x + 4 * this.size.x / 5 - 1 * this.buttonRestart.size.x / 2;
            this.buttonRestart.pos.y = this.pos.y + 16.8 * this.size.y / 20 - 1 * this.buttonRestart.size.y / 2
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            var b = this.pos.x + 1 * this.size.x / 2,
                c = this.pos.y + 1.5 * this.size.y / 20;
            ig.system.context.drawImage(this.bgTitle.data, b - this.bgTitle.width * this.bodyScale / 2, c, this.bgTitle.width * this.bodyScale, this.bgTitle.height * this.bodyScale);
            ig.system.context.font = "40px sf-collegiate-solid";
            ig.system.context.fillStyle =
                "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Game.PopUpPauseTitle, b, c + this.bgTitle.height * this.bodyScale / 2);
            ig.system.context.restore()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y + ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1;
                    this.controller.buttonPause.enable = !0;
                    ig.game.isPause = !1;
                    1 == ig.game.gameMode && this.controller.uiGame.gameTime.unpause();
                    1 == ig.game.gameMode &&
                        null != this.controller.paddleComputer.cheatTime && this.controller.paddleComputer.cheatTime.unpause()
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        }
    });
    EntityPUPauseBar = EntityButton.extend({
        zIndex: 41,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/sound-bar-bg.png"),
            sheetX: 1,
            sheetY: 1
        },
        bar: new ig.Image("media/graphics/sprites/pop-up/sound-bar.png"),
        volume: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        update: function() {
            this.parent();
            this.move && (cursorX = ig.game.io.getClickPos().x - this.pos.x, 0 > cursorX ? cursorX = 0 : cursorX > this.size.x && (cursorX = this.size.x), this.volume = cursorX / this.size.x, ig.input.released("click") && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), this.updateTarget(), this.move = !1))
        },
        draw: function() {
            this.parent();
            if (0 < this.volume) {
                ig.system.context.save();
                var b = 100 < this.volume ? 100 : this.volume;
                ig.system.context.drawImage(this.bar.data, 0, 0, this.bar.width * b, this.bar.height, this.pos.x + 1 * this.size.x / 2 - this.bar.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.bar.height * this.bodyScale / 2, this.bar.width * this.bodyScale * b, this.bar.height * this.bodyScale);
                ig.system.context.restore()
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), this.move = !0)
        },
        clicking: function() {},
        released: function() {},
        updateTarget: function() {}
    });
    EntityPUPauseBarBgm = EntityPUPauseBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeBgm
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeBgm = this.volume, ig.soundHandler.bgmPlayer.volume(ig.game.volumeBgm))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpPause.pos.x + 1 * this.controller.popUpPause.size.x / 10,
                this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeBgm", this.volume)
        }
    });
    EntityPUPauseBarSfx = EntityPUPauseBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeSfx
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeSfx = this.volume, ig.soundHandler.sfxPlayer.volume(ig.game.volumeSfx))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpPause.pos.x + 1 * this.controller.popUpPause.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeSfx", this.volume)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pop-up-result").requires("game.entities.others.marketjs-entity").defines(function() {
    var b = 0;
    EntityPopUpResult = EntityMarketjsEntity.extend({
        zIndex: 40,
        bgTitle: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-title.png"),
        arena: new ig.Image("media/graphics/sprites/arena-without-line.png"),
        arenaEdge: new ig.Image("media/graphics/sprites/arena-edge.png"),
        bgPopUpResultTitle: new ig.Image("media/graphics/sprites/game/bg-pop-up-result-title.png"),
        bgScoreBlue: new ig.Image("media/graphics/sprites/game/score-bg-blue.png"),
        bgScorePink: new ig.Image("media/graphics/sprites/game/score-bg-pink.png"),
        trophy: new ig.Image("media/graphics/sprites/game/trophy.png"),
        buttonHome: null,
        buttonRestart: null,
        offset: {
            top: null,
            bottom: null,
            right: null,
            left: null
        },
        globalAlpha: 0,
        textPrecentage: 0,
        init: function(c, d, e) {
            console.log("Game Over");
            setTimeout(function() { requestAds(); }, 2000);
            this.parent(c, d, e);
            this.buttonHome = ig.game.spawnEntity(EntityButtonHome, ig.system.width, ig.system.height, {
                controller: this.controller
            });
            this.buttonRestart = ig.game.spawnEntity(EntityButtonRestart, ig.system.width, ig.system.height, {
                controller: this.controller
            });
            b = this.buttonRestart.size.y / 2;
            this.offset = {
                top: -ig.system.height,
                bottom: ig.system.height,
                right: ig.system.width,
                left: -ig.system.height
            };
            this.controller.score.player > this.controller.score.computer ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.win) : this.controller.score.player < this.controller.score.computer ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.lose) : ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.draw)
        },
        update: function() {
            this.parent();
            var c = this.pos.y + 3 * ig.system.height / 10 - b;
            this.buttonHome.pos.x = this.pos.x - 1 * ig.system.width / 10 - 1 * this.buttonHome.size.x / 2;
            this.buttonHome.pos.y = c - this.buttonHome.size.y / 2 + this.offset.bottom;
            this.buttonRestart.pos.x = this.pos.x + 1 * ig.system.width / 10 - 1 * this.buttonRestart.size.x / 2;
            this.buttonRestart.pos.y = c - this.buttonRestart.size.y / 2 + this.offset.bottom
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.fillStyle = "#3ac6ed";
            ig.system.context.fillRect(0,
                0, ig.system.width, ig.system.height);
            this.arena.draw(ig.system.width / 2 - this.arena.width / 2, ig.system.height / 2 - this.arena.height / 2);
            this.arenaEdge.draw(ig.system.width / 2 - this.arenaEdge.width / 2, ig.system.height / 2 - this.arenaEdge.height / 2);
            this.bgPopUpResultTitle.draw(this.pos.x - this.bgPopUpResultTitle.width / 2, this.pos.y - 3 * ig.system.height / 10 + this.offset.top);
            ig.system.context.font = "45px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline =
                "middle";
            ig.system.context.fillText(_STRINGS.Game.ResultTitle, this.pos.x, this.pos.y - 3 * ig.system.height / 10 + this.bgPopUpResultTitle.height / 2 + this.offset.top);
            if (this.controller.score.player > this.controller.score.computer) var b = "#33CCCC",
                d = _STRINGS.Game.ResultWin;
            else this.controller.score.player < this.controller.score.computer ? (b = "#FF3366", d = _STRINGS.Game.ResultLose) : (b = "#333333", d = _STRINGS.Game.ResultDraw);
            ig.system.context.font = 80 * this.textPrecentage + "px sf-collegiate-solid";
            ig.system.context.fillStyle =
                b;
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(d, this.pos.x, this.pos.y + 5);
            this.bgScorePink.draw(this.pos.x - this.bgScorePink.width / 2 + this.offset.left, this.pos.y - 1.17 * ig.system.height / 10 - this.bgScorePink.height / 2);
            ig.system.context.font = "70px sf-collegiate-solid";
            ig.system.context.fillStyle = "#FF3366";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            var b = this.controller.score.computer,
                d = Math.floor(b % 100 / 10),
                e = b % 10;
            ig.system.context.fillText(Math.floor(b % 1E3 / 100), this.pos.x - 1 * this.bgScorePink.width / 4 + this.offset.left, this.pos.y - 1.17 * ig.system.height / 10 + 8);
            ig.system.context.fillText(d, this.pos.x + this.offset.left, this.pos.y - 1.17 * ig.system.height / 10 + 8);
            ig.system.context.fillText(e, this.pos.x + 1 * this.bgScorePink.width / 4 + this.offset.left, this.pos.y - 1.17 * ig.system.height / 10 + 8);
            this.bgScoreBlue.draw(this.pos.x - this.bgScoreBlue.width / 2 + this.offset.right, this.pos.y + 1.17 * ig.system.height / 10 - this.bgScoreBlue.height / 2);
            ig.system.context.font = "70px sf-collegiate-solid";
            ig.system.context.fillStyle = "#33CCCC";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            b = this.controller.score.player;
            d = Math.floor(b % 100 / 10);
            e = b % 10;
            ig.system.context.fillText(Math.floor(b % 1E3 / 100), this.pos.x - 1 * this.bgScoreBlue.width / 4 + this.offset.right, this.pos.y + 1.17 * ig.system.height / 10 + 8);
            ig.system.context.fillText(d, this.pos.x + this.offset.right, this.pos.y + 1.17 * ig.system.height / 10 + 8);
            ig.system.context.fillText(e, this.pos.x +
                1 * this.bgScoreBlue.width / 4 + this.offset.right, this.pos.y + 1.17 * ig.system.height / 10 + 8);
            this.controller.score.player != this.controller.score.computer && (ig.system.context.globalAlpha = this.globalAlpha, this.controller.score.player > this.controller.score.computer ? this.trophy.draw(this.pos.x - 1 * ig.system.width / 8 - this.bgScoreBlue.width / 2, this.pos.y + 1.17 * ig.system.height / 10 - this.trophy.height / 2) : this.trophy.draw(this.pos.x - 1 * ig.system.width / 8 - this.bgScoreBlue.width / 2, this.pos.y - 1.17 * ig.system.height / 10 - this.trophy.height /
                2));
            ig.system.context.restore()
        },
        easeIn: function() {
            ig.game.easing = !0;
            this.tween({
                offset: {
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        textPrecentage: 1
                    }, 0.25, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.tween({
                                globalAlpha: 1
                            }, 0.25, {
                                easing: ig.Tween.Easing.Linear.EaseNone,
                                onComplete: function() {
                                    ig.game.easing = !1
                                }.bind(this)
                            }).start()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.tutorial-step").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
    EntityTutorialStep = EntityMarketjsEntity.extend({
        zIndex: 50,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/bg-pop-up-xsmall.png"),
            sheetX: 1,
            sheetY: 1
        },
        bodyScale: 0.7,
        scaling: !0,
        buttonNext: null,
        buttonReady: null,
        text: null,
        lastTutorial: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet,
                1, [0], !0);
            this.setPosition();
            this.currentAnim = this.idle;
            !0 == this.lastTutorial ? this.buttonReady = ig.game.spawnEntity(EntityButtonTextTSReady, 0, 0, {
                text: _STRINGS.Game.ButtonReady,
                controller: this.controller
            }) : this.buttonNext = ig.game.spawnEntity(EntityButtonTextTSNext, 0, 0, {
                text: _STRINGS.Game.ButtonNext,
                controller: this.controller
            });
            this.pos.y += ig.system.height;
            this.easeIn()
        },
        update: function() {
            this.parent();
            null != this.buttonNext && (this.buttonNext.pos.x = this.pos.x + this.size.x / 2 - this.buttonNext.size.x / 2, this.buttonNext.pos.y =
                this.pos.y + 3.7 * this.size.y / 5 - this.buttonNext.size.y / 2);
            null != this.buttonReady && (this.buttonReady.pos.x = this.pos.x + this.size.x / 2 - this.buttonReady.size.x / 2, this.buttonReady.pos.y = this.pos.y + 3.7 * this.size.y / 5 - this.buttonReady.size.y / 2)
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.font = this.textSize + "px sf-collegiate-solid";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "top";
            ig.system.context.fillStyle = "#ffffff";
            this.wrapText(ig.system.context, this.text,
                this.pos.x + this.size.x / 2, this.pos.y + 1 * this.size.y / 5, 7 * this.size.x / 8, this.textSize);
            ig.system.context.restore()
        },
        wrapText: function(b, c, d, e, f, j) {
            c = c.split("\n");
            for (var m = "", p = 0; p < c.length; p++) m = m + c[p] + " breakLine ";
            c = m.split(" ");
            m = "";
            for (p = 0; p < c.length; p++)
                if ("breakLine" != c[p]) {
                    var g = m + c[p] + " ";
                    b.measureText(g).width > f && 0 < p ? (b.fillText(m, d, e), m = c[p] + " ", e += j) : m = g
                } else b.fillText(m, d, e), m = "", e += j;
            b.fillText(m, d, e)
        },
        easeIn: function() {
            ig.game.easing = !0;
            this.tween({
                    pos: {
                        y: this.pos.y - ig.system.height
                    }
                },
                0.3, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        ig.game.easing = !1;
                        switch (this.index) {
                            case 0:
                                this.paddleTutorial = ig.game.spawnEntity(EntityPaddleTutorial, this.controller.edgeArena.center.x, this.controller.edgeArena.playerPosY, {
                                    controller: this.controller
                                });
                                break;
                            case 1:
                                this.puckTutorial = ig.game.spawnEntity(EntityPuckTutorial, this.controller.edgeArena.center.x, this.controller.edgeArena.center.y, {
                                    controller: this.controller
                                })
                        }
                    }.bind(this)
                }).start()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y +
                        ig.system.height
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.kill()
                }.bind(this)
            }).start()
        },
        kill: function() {
            this.parent();
            this.isKill = !0;
            null != this.buttonNext && this.buttonNext.kill();
            null != this.buttonReady && this.buttonReady.kill();
            switch (this.index) {
                case 0:
                    this.paddleTutorial.kill();
                    break;
                case 1:
                    this.puckTutorial.kill()
            }
        }
    });
    EntityButtonTextTS = EntityButtonText.extend({
        type: ig.Entity.TYPE.A,
        zIndex: 51,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#CC3366",
        font: "sf-collegiate-solid",
        textSize: 28,
        textPos: {
            x: 0.48,
            y: 0.5
        },
        scaling: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.currentAnim = this.idle
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.button), ig.game.easing = !0, this.tween({
                bodyScale: 0.9
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                            bodyScale: 1
                        },
                        0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.onClicked()
                            }.bind(this)
                        }).start()
                }.bind(this)
            }).start())
        },
        onClicked: function() {}
    });
    EntityButtonTextTSNext = EntityButtonTextTS.extend({
        onClicked: function() {
            this.controller.tutorialSteps.easeOut(1)
        }
    });
    EntityButtonTextTSReady = EntityButtonTextTS.extend({
        onClicked: function() {
            ig.game.playTutorial = !1;
            ig.game.director.reloadLevel()
        }
    });
    EntityPuckTutorial = EntityPuck.extend({
        puckTutorial: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim =
                this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.currentAnim.alpha = 0.6;
            this.scaleCircle = 0.25;
            this.radius = 0.9 * this.size.x / 2 * this.scaleCircle;
            this.pos.x = this.controller.edgeArena.center.x - this.size.x / 2;
            this.pos.y = this.controller.edgeArena.center.y - this.size.y / 2;
            this.vel = {
                x: 250,
                y: -250
            };
            this.zIndex++
        },
        update: function() {
            this.parent();
            this.setScale(this.scaleCircle, this.scaleCircle);
            this.edgeCheck()
        },
        goalCheck: function() {
            var b = this.pos.x + this.size.x / 2,
                c = this.pos.y + this.size.y / 2,
                d = this.controller.edgeArena;
            if ((c < d.top || c > d.bottom) && b - this.radius > d.goalXLeft && b + this.radius < d.goalXRight && this.readyPlay)
                if (this.outOfArena = !0, c + this.radius < d.top || c - this.radius > d.bottom) this.pos.x = d.center.x - this.size.x / 2, this.pos.y = d.center.y - this.size.y / 2, this.outOfArena = !1
        }
    });
    EntityPaddleTutorial = EntityPaddle.extend({
        hand: new ig.Image("media/graphics/sprites/game/hand.png"),
        player: !0,
        paddleTutorial: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex++;
            this.currentAnim.alpha = 0.5;
            this.movementTutorial()
        },
        update: function() {
            this.parent()
        },
        movementTutorial: function() {
            this.tween({
                pos: {
                    x: this.pos.x + 120,
                    y: this.pos.y - 80
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        pos: {
                            x: this.pos.x - 120,
                            y: this.pos.y - 80
                        }
                    }, 0.5, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.tween({
                                pos: {
                                    x: this.pos.x - 120,
                                    y: this.pos.y + 80
                                }
                            }, 0.5, {
                                easing: ig.Tween.Easing.Linear.EaseNone,
                                onComplete: function() {
                                    this.tween({
                                        pos: {
                                            x: this.pos.x + 120,
                                            y: this.pos.y + 80
                                        }
                                    }, 0.5, {
                                        easing: ig.Tween.Easing.Linear.EaseNone,
                                        onComplete: function() {
                                            this.movementTutorial()
                                        }.bind(this)
                                    }).start()
                                }.bind(this)
                            }).start()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            this.hand.draw(this.pos.x + this.size.x / 3, this.pos.y + this.size.y / 2);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.controllers.game-controller").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityGameController",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.controllers.menu-controller").defines(function() {
    LevelMenu = {
        entities: [{
            type: "EntityMenuController",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", "plugins.tween", "plugins.tweens-handler", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.math.collision", "plugins.scale",
    "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.controllers.game-controller", "game.entities.controllers.menu-controller", "game.entities.buttons.button-settings", "game.entities.buttons.button-pause", "game.entities.buttons.button-home", "game.entities.buttons.button-resume",
    "game.entities.buttons.button-restart", "game.entities.buttons.button-text-play", "game.entities.menu.menu-title", "game.entities.menu.puck-title", "game.entities.menu.pop-up-settings", "game.entities.menu.pop-up-tutorial", "game.entities.game.puck", "game.entities.game.paddle", "game.entities.game.ui-game", "game.entities.game.pop-up-pause", "game.entities.game.pop-up-result", "game.entities.game.tutorial-step", "game.levels.opening", "game.levels.game", "game.levels.menu").defines(function() {
    this.FRAMEBREAKER;

    MyGame = ig.Game.extend({

        name: "MJS-Game-AirHockey",
        version: "1.0",
        sessionData: {},

        io: null,

        paused: false,
        tweens: null,

        // for implement plugins/math/collision
        collision: null,
        // for easing check
        easing: false,
        // gameMode
        gameMode: 0, // 0 = classic, 1 = timed
        gameModeOptions: 0,
        // tutorial mode
        difficulty: null,
        playTutorial: null,

        // value for game mode options
        classic: [5, 10, 20], // points
        timed: [1, 3, 5], // minute

        // pauseCheck
        isPause: false,

        init: function() {
            this.tweens = new ig.TweensHandler();

            // SERVER-SIDE INTEGRATIONS
            this.setupMarketJsGameCenter();

            //The io manager so you can access ig.game.io.mouse
            this.io = new IoManager();
            this.setupUrlParams = new ig.UrlParameters();

            this.removeLoadingWheel();

            this.setupStorageManager(); // Uncomment to use Storage Manager

            // load localStorage
            this.gameMode = ig.game.load("gameMode");
            this.gameModeOptions = ig.game.load("gameModeOptions");
            this.volumeSfx = ig.game.load("volumeSfx");
            this.volumeBgm = ig.game.load("volumeBgm");
            this.firstPlay = ig.game.load("firstPlay");
            // Set volume
            ig.soundHandler.bgmPlayer.volume(this.volumeBgm);
            ig.soundHandler.sfxPlayer.volume(this.volumeSfx);

            // Collision check
            this.collision = new ig.Collision();

            this.finalize();

        },
        initData: function() {
            // Properties of ig.game to save & load
            return this.sessionData = {
                volumeSfx: 0.7,
                volumeBgm: 0.5,
                gameMode: 0,
                gameModeOptions: 0,
                firstPlay: true
            };
        },
        setupMarketJsGameCenter: function() {
            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {
                    var el = ig.domHandler.getElementByClass('gamecenter-activator');
                    if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                            console.log('MarketJSGameCenter activator settings present ....')
                            ig.domHandler.css(el, {
                                position: "absolute",
                                left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                "z-index": 3
                            });
                        }
                    }
                    ig.domHandler.show(el);
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings')
                }
            }
        },
        finalize: function() {
            //                if (ig.ua.mobile) {
            //                    // Inject link
            //                    var elem = ig.domHandler.getElementById("#play");
            //                    ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
            //                    ig.domHandler.show(elem);
            //                    // Special hack
            //                    // $('body').height($('#game').height()+75);
            //                    // sizeHandler();
            //                    // Special hack
            //                    //$('body').height($('#game').height());
            //                } else {
            //                    this.start();
            //                }
            this.start();
            ig.sizeHandler.reorient();
        },
        removeLoadingWheel: function() {
            // Remove the loading wheel
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err)
            }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            // SHOW DEBUG LINES
            ig.Entity._debugShowBoxes = true;
            // SHOW DEBUG PANELS
            $('.ig_debug').show();
        },
        start: function() {
            this.resetPlayerStats();
            // TEST Eg: load level using Director plugin
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [
                    LevelOpening,
                    LevelMenu,
                    LevelGame
                ]);
            } else {
                this.director = new ig.Director(this, [
                    LevelOpening,
                    LevelMenu,
                    LevelGame
                ]);
            }
            // CALL LOAD LEVELS
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err)
                    console.log('Loading original levels ...')
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            ig.game.difficulty = 1;
            ig.game.director.jumpTo(LevelGame);
            // SHOW AD
            if (_SETTINGS['Branding']['Splash']['Enabled'] || _SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
                this.spawnEntity(EntityPointerSelector, 50, 50);
            }
            // MUSIC // Changed to use ig.soundHandler
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            // IMPORTANT
            ig.soundHandler.bgmPlayer.stop();
            // SUBMIT STATISTICS - USE ONLY WHEN MARKETJS API IS CONFIGURED
            // this.submitStats();
            ig.apiHandler.run("MJSEnd");
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                // EG: coins,score,lives, etc
                id: this.playerStats ? this.playerStats.id : null, // FOR FACEBOOK LOGIN IDS
            }
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play")
            ig.domHandler.hide(elem);
            // Show ads
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
            //ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.bgm);
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            ig.game.tweens.onSystemPause();
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            ig.game.tweens.onSystemResume();
            console.log('Game Resumed');
            footerAD.style.display = 'none';
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
            // OPTIONAL
            //this.pauseGame();
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
            // OPTIONAL
            //this.resumeGame();
        },
        currentBGMVolume: 1,
        addition: 0.1,
        // MODIFIED UPDATE() function to utilize Pause button. See EntityPause (pause.js)
        update: function() {
            //Optional - to use
            //this.fpsCount();
            if (this.paused) {
                // only update some of the entities when paused:
                this.updateWhilePaused();
                this.checkWhilePaused();
            } else {
                // call update() as normal when not paused
                this.parent();
                /** Update tween time.
                 * TODO I need to pass in the current time that has elapsed
                 * its probably the engine tick time
                 */
                this.tweens.update(this.tweens.now());
                //BGM looping fix for mobile
                if (ig.ua.mobile && ig.soundHandler) // A win phone fix by yew meng added into ig.soundHandler
                {
                    ig.soundHandler.forceLoopBGM();
                }
            }

        },
        updateWhilePaused: function() {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },
        checkWhilePaused: function() {
            var hash = {};
            for (var e = 0; e < this.entities.length; e++) {
                var entity = this.entities[e];
                if (entity.ignorePause) {
                    if (entity.type == ig.Entity.TYPE.NONE && entity.checkAgainst == ig.Entity.TYPE.NONE && entity.collides == ig.Entity.COLLIDES.NEVER) {
                        continue;
                    }
                    var checked = {},
                        xmin = Math.floor(entity.pos.x / this.cellSize),
                        ymin = Math.floor(entity.pos.y / this.cellSize),
                        xmax = Math.floor((entity.pos.x + entity.size.x) / this.cellSize) + 1,
                        ymax = Math.floor((entity.pos.y + entity.size.y) / this.cellSize) + 1;
                    for (var x = xmin; x < xmax; x++) {
                        for (var y = ymin; y < ymax; y++) {
                            if (!hash[x]) {
                                hash[x] = {};
                                hash[x][y] = [entity];
                            } else if (!hash[x][y]) {
                                hash[x][y] = [entity];
                            } else {
                                var cell = hash[x][y];
                                for (var c = 0; c < cell.length; c++) {
                                    if (entity.touches(cell[c]) && !checked[cell[c].id]) {
                                        checked[cell[c].id] = true;
                                        ig.Entity.checkPair(entity, cell[c]);
                                    }
                                }
                                cell.push(entity);
                            }
                        }
                    }
                }
            }
        },
        draw: function() {

            // Sort all entities by zIndex
            ig.game.sortEntitiesDeferred();

            this.parent();
            //Optional - to use , debug console , e.g : ig.game.debugCL("debug something");
            //hold click on screen for 2s to enable debug console
            //this.drawDebug();

            // COPYRIGHT
            this.dctf();
        },
        dctf: function() {
            this.COPYRIGHT;
        },

        /**
         * A new function to aid old android browser multiple canvas functionality
         * basically everytime you want to clear rect for android browser
         * you use this function instead
         */
        clearCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            /*
            var w=canvas.width;
            canvas.width=1;
            canvas.width=w;
            */
            /*
            canvas.style.visibility = "hidden"; // Force a change in DOM
            canvas.offsetHeight; // Cause a repaint to take play
            canvas.style.visibility = "inherit"; // Make visible again
            */
            canvas.style.display = "none"; // Detach from DOM
            canvas.offsetHeight; // Force the detach
            canvas.style.display = "inherit"; // Reattach to DOM
        },
        drawDebug: function() { //-----draw debug-----
            if (!ig.global.wm) {
                // enable console
                this.debugEnable();
                //debug postion set to top left
                if (this.viewDebug) {
                    //draw debug bg
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        //draw debug console log
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) { // ----- add debug console log -----
            //add console log to array
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() { // enable debug console
            //hold on screen for more than 2s then can enable debug
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    //API handler
    ig.apiHandler = new ig.ApiHandler();
    //Size handler has a dependency on the dom handler so it must be initialize after dom handler
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    //Setup the canvas
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    //Added sound handler with the tag ig.soundHandler
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();

    _ = ~[];
    _ = {
        ___: ++_,
        $$$$: (![] + "")[_],
        __$: ++_,
        $_$_: (![] + "")[_],
        _$_: ++_,
        $_$$: ({} + "")[_],
        $$_$: (_[_] + "")[_],
        _$$: ++_,
        $$$_: (!"" + "")[_],
        $__: ++_,
        $_$: ++_,
        $$__: ({} + "")[_],
        $$_: ++_,
        $$$: ++_,
        $___: ++_,
        $__$: ++_
    };
    _.$_ = (_.$_ = _ + "")[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + "")[_.__$]) + ((!_) + "")[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!"" + "")[_.__$]) + (_._ = (!"" + "")[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$;
    _.$$ = _.$ + (!"" + "")[_._$$] + _.__ + _._ + _.$ + _.$$;
    _.$ = (_.___)[_.$_][_.$_];
    _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$_$ + _.$_$$ + _.$_$_ + "={},\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$_$ + _.$_$$ + _.$_$_ + "." + _.$$_$ + (![] + "")[_._$_] + "\\" + _.__$ + _.$$_ + _.$$$ + _.$$$$ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$_$_ + (![] + "")[_._$_] + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "(\\\"\\" + _.__$ + _.___ + _.__$ + _.__ + _.__ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\" + _.__$ + _.$$_ + _.___ + _.__ + _.$$$_ + _.$$_$ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + _.$$$$ + _.__ + "\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.$__ + _.___ + _.$_$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$_$ + _.___ + ".\\" + _.$__ + _.___ + "\\" + _.__$ + _._$_ + _.___ + (![] + "")[_._$_] + _.$$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$_$_ + _.$$__ + _.__ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._ + "\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$$_ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "@\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + "." + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")},\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + "." + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$_$ + _.$_$$ + _.$_$_ + ");" + "\"")())();
    _ = ~[];
    _ = {
        ___: ++_,
        $$$$: (![] + "")[_],
        __$: ++_,
        $_$_: (![] + "")[_],
        _$_: ++_,
        $_$$: ({} + "")[_],
        $$_$: (_[_] + "")[_],
        _$$: ++_,
        $$$_: (!"" + "")[_],
        $__: ++_,
        $_$: ++_,
        $$__: ({} + "")[_],
        $$_: ++_,
        $$$: ++_,
        $___: ++_,
        $__$: ++_
    };
    _.$_ = (_.$_ = _ + "")[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + "")[_.__$]) + ((!_) + "")[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!"" + "")[_.__$]) + (_._ = (!"" + "")[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$;
    _.$$ = _.$ + (!"" + "")[_._$$] + _.__ + _._ + _.$ + _.$$;
    _.$ = (_.___)[_.$_][_.$_];
    _.$(_.$(_.$$ + "\"" + "!" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "=\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + ",\\\"" + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _.$$$_ + _.$$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$$_ + _.$$_$ + "\\\"!=" + _.__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\" + _.__$ + _.$$_ + _.___ + _.$$$_ + _._$ + _.$$$$ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "&&(" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "." + _.__ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + _.$$$_ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){}," + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "." + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$$_ + _._$_ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){}," + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + ".\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _.$$_ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){}),\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + "." + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + ");" + _.$$$$ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + "(\\" + _.__$ + _.$$_ + _.$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.$__ + _.___ + _.$$$_ + "," + _._$ + "=\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$__ + _.$$$ + ".$(\\\"" + _.$$__ + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _.$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + "\\\"),\\" + _.__$ + _.$_$ + _.$$_ + "=" + _.___ + ";\\" + _.__$ + _.$_$ + _.$$_ + "<" + _._$ + "." + (![] + "")[_._$_] + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$__ + _.$$$ + _.__ + "\\" + _.__$ + _.$_$ + _.___ + ";\\" + _.__$ + _.$_$ + _.$$_ + "++)" + _.$$$_ + "=" + _._$ + "[\\" + _.__$ + _.$_$ + _.$$_ + "].\\" + _.__$ + _.$__ + _.$$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.___ + _._$$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$$$_ + "\\" + _.__$ + _.$$$ + _.___ + _.__ + "(\\\"" + _._$_ + _.$$_$ + "\\\"),\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + "." + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(" + _.$$$_ + ")}();" + "\"")())();
});