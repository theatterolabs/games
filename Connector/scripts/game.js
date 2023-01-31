var RetryCount = 0;
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var c = 0;
    return function() {
        return c < a.length ? {
            done: !1,
            value: a[c++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.makeIterator = function(a) {
    var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return c ? c.call(a) : $jscomp.arrayIterator(a)
};
$jscomp.arrayFromIterator = function(a) {
    for (var c, l = []; !(c = a.next()).done;) l.push(c.value);
    return l
};
$jscomp.arrayFromIterable = function(a) {
    return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var c = function() {};
    c.prototype = a;
    return new c
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        c = {};
    try {
        return c.__proto__ = a, c.a
    } catch (l) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, c) {
    a.__proto__ = c;
    if (a.__proto__ !== c) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, c) {
    a.prototype = $jscomp.objectCreate(c.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var l = $jscomp.setPrototypeOf;
        l(a, c)
    } else
        for (l in c)
            if ("prototype" != l)
                if (Object.defineProperties) {
                    var u = Object.getOwnPropertyDescriptor(c, l);
                    u && Object.defineProperty(a, l, u)
                } else a[l] = c[l];
    a.superClass_ = c.prototype
};
var game_data = {
        cur_level: 1,
        coin: 0,
        total_level: 200,
        sound: !0,
        hint_cost: 6
    },
    local_data = localStorage.getItem("redfoc_connector");
local_data && (game_data = JSON.parse(local_data));
var first_play = 1,
    Game = function() {
        return Phaser.Scene.call(this, "game") || this
    };
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function() {
    function a() {
        for (var e = v.getLength(), b = v.getChildren(), E = 0; E < e; E++) {
            var f = b[E];
            if (3 != r.array[f.pos.y][f.pos.x][1]) {
                var c = Math.floor(4 * Math.random()),
                    d = 0;
                1 === c ? d = 90 : 2 === c ? d = 180 : 3 === c && (d = 270);
                f.rotate = d;
                p[f.pos.y][f.pos.x].type = l(f.type, f.rotate);
                f.rotation = Math.PI / 180 * f.rotate
            }
        }
        u(0, !0) && a()
    }

    function c(e) {
        if (1 === e) return 0;
        if (2 === e) return 90;
        if (3 === e) return 180;
        if (4 === e) return 270;
        if (5 === e) return 0;
        if (6 === e) return 90;
        if (7 === e || 8 === e) return 0;
        if (9 === e) return 90;
        if (10 ===
            e) return 180;
        if (11 === e) return 270;
        if (12 === e) return 0;
        if (13 === e) return 90;
        if (14 === e) return 180;
        if (15 === e) return 270
    }

    function l(e, b) {
        if (1 === e) {
            if (0 === b) return 1;
            if (90 === b) return 2;
            if (180 === b) return 3;
            if (270 === b) return 4
        } else if (5 === e) {
            if (0 === b) return 5;
            if (90 === b) return 6;
            if (180 === b) return 5;
            if (270 === b) return 6
        } else {
            if (7 === e) return 7;
            if (8 === e) {
                if (0 === b) return 8;
                if (90 === b) return 9;
                if (180 === b) return 10;
                if (270 === b) return 11
            } else if (12 === e) {
                if (0 === b) return 12;
                if (90 === b) return 13;
                if (180 === b) return 14;
                if (270 ===
                    b) return 15
            }
        }
    }

    function u(e, b) {
        for (var a = 0, f = 0; f < B; f++)
            for (var c = 0; c < y; c++)
                if (8 <= p[f][c].type && 11 >= p[f][c].type) {
                    a++;
                    var d = void 0;
                    8 === p[f][c].type ? d = {
                        x: -1,
                        y: 0
                    } : 9 === p[f][c].type ? d = {
                        x: 0,
                        y: -1
                    } : 10 === p[f][c].type ? d = {
                        x: 1,
                        y: 0
                    } : 11 === p[f][c].type && (d = {
                        x: 0,
                        y: 1
                    });
                    H(c, f, d, 0, e)
                } if (a === C) {
            if (C = 0, e || b || J(), b) return !0
        } else C = 0
    }

    function H(e, b, a, c, h) {
        c++;
        var d = !1,
            f = !1;
        if (0 <= e + a.x && e + a.x < y && 0 <= b + a.y && b + a.y < B) {
            var n = p[b + a.y][e + a.x];
            if (0 === a.x && -1 === a.y)
                if (1 === n.type) {
                    var g = {
                        x: 1,
                        y: 0
                    };
                    d = !0
                } else 2 === n.type ? (g = {
                        x: -1,
                        y: 0
                    },
                    d = !0) : 6 === n.type ? (g = {
                    x: 0,
                    y: -1
                }, d = !0) : 7 === n.type ? (g = {
                    x: 0,
                    y: -1
                }, d = !0) : 15 === n.type && (f = !0);
            else 1 === a.x && 0 === a.y ? 2 === n.type ? (g = {
                x: 0,
                y: 1
            }, d = !0) : 3 === n.type ? (g = {
                x: 0,
                y: -1
            }, d = !0) : 5 === n.type ? (g = {
                x: 1,
                y: 0
            }, d = !0) : 7 === n.type ? (g = {
                x: 1,
                y: 0
            }, d = !0) : 12 === n.type && (f = !0) : 0 === a.x && 1 === a.y ? 3 === n.type ? (g = {
                x: -1,
                y: 0
            }, d = !0) : 4 === n.type ? (g = {
                x: 1,
                y: 0
            }, d = !0) : 6 === n.type ? (g = {
                x: 0,
                y: 1
            }, d = !0) : 7 === n.type ? (g = {
                x: 0,
                y: 1
            }, d = !0) : 13 === n.type && (f = !0) : -1 === a.x && 0 === a.y && (1 === n.type ? (g = {
                    x: 0,
                    y: 1
                }, d = !0) : 4 === n.type ? (g = {
                    x: 0,
                    y: -1
                }, d = !0) : 5 === n.type ?
                (g = {
                    x: -1,
                    y: 0
                }, d = !0) : 7 === n.type ? (g = {
                    x: -1,
                    y: 0
                }, d = !0) : 14 === n.type && (f = !0))
        }
        f ? (h && (h.push({
            id: c,
            x: e,
            y: b
        }), h.push({
            id: c + 1,
            x: e + a.x,
            y: b + a.y,
            lamp: !0
        })), C++) : d && (h && h.push({
            id: c,
            x: e,
            y: b
        }), H(e + a.x, b + a.y, g, c, h))
    }

    function J() {
        w = "completed";
        var a = [];
        u(a);
        for (var b = 1, c = 0, f = 0; f < a.length; f++) a[f].id > c && (c = a[f].id);
        var h = setInterval(function() {
            for (var d = 0; d < a.length; d++)
                if (a[d].id === b) {
                    for (var e = a[d], f = v.getLength(), l = v.getChildren(), k = 0; k < f; k++) {
                        var m = l[k];
                        m.pos.x === e.x && m.pos.y === e.y && m.setTexture(m.type + "x")
                    }
                    if (a[d].lamp)
                        for (e =
                            a[d].x, f = a[d].y, l = v.getLength(), k = v.getChildren(), m = 0; m < l; m++) {
                            var p = k[m];
                            12 === p.type && p.pos.x === e && p.pos.y === f && (p.setTexture("lamp"), p.play("lamp"))
                        }
                } b < c && play_sound("fill", g);
            b === c + 8 && (save_game(), play_sound("completed", g), g.add.rectangle(0, 0, 720, 1080, 0, .5).setOrigin(0), g.add.sprite(360, 540, "window_big"), g.add.text(360, 360, "Level " + (game_data.cur_level - 1) + "\ncompleted.", {
                fontFamily: "robotomono",
                fontSize: 50,
                align: "center",
                color: "#fff"
            }).setOrigin(.5), g.add.text(360, 460, "Bonus coin: +" + a.length, {
                fontFamily: "robotomono",
                fontSize: 35,
                align: "center",
                color: "#fff"
            }).setOrigin(.5), draw_button(360, 570, "next", g), draw_button(360, 690, "exit", g), clearInterval(h));
            b++
        }, 200);
        game_data.coin += a.length;
        game_data.cur_level++;
        if (RetryCount < 2) {
        RetryCount++;
        } else {
        RetryCount = 0;
            setTimeout(function() { requestAds(); }, 3500);
            
        }
            
        
    }

    function K() {
        F.clear(!0, !0);
        for (var a = [], b = v.getLength(), h = v.getChildren(), f = 0; f < b; f++) {
            var k = h[f];
            1 === r.array[k.pos.y][k.pos.x][1] && a.push(k)
        }
        0 < a.length && setTimeout(function() {
            play_sound("hint", g);
            w = "play";
            var d = a[Math.floor(Math.random() * a.length)];
            d.rotate = c(Number(r.array[d.pos.y][d.pos.x][0]));
            p[d.pos.y][d.pos.x].type = l(d.type, d.rotate);
            p[d.pos.y][d.pos.x].angle = d.rotate;
            d.rotation = Math.PI / 180 * d.rotate;
            b = G.getLength();
            h = G.getChildren();
            for (var e = 0; e < b; e++) {
                var f = h[e];
                f.pos.x === d.pos.x && f.pos.y === d.pos.y && (r.array[f.pos.y][f.pos.x][1] = 3, f.setTexture("tile2"))
            }
            u()
        }, 400)
    }
    this.add.sprite(360, 540, "bg_game");
    this.add.sprite(0, 0, "header").setOrigin(0);
    this.add.sprite(0, config.height, "footer").setOrigin(0, 1);
    this.add.sprite(230, 50, "coin_bar");
    this.add.sprite(430, 50, "level_bar");
    this.anims.create({
        key: "lamp",
        frames: this.anims.generateFrameNumbers("lamp"),
        frameRate: 8,
        repeat: -1,
        yoyo: !0
    });
    this.anims.create({
        key: "guide",
        frames: this.anims.generateFrameNumbers("guide"),
        frameRate: 8,
        repeat: -1
    });
    var g = this,
        w = "play",
        k = this.add.container(),
        F = this.add.group(),
        I = this.add.group(),
        y = 5,
        B = 5,
        C = 0,
        v = this.add.group(),
        G = this.add.group(),
        r = this.cache.json.get("level-" + game_data.cur_level);
    y = r.width;
    B = r.height;
    k.setPosition(72, 220);
    for (var p = [], q = 0; q < B; q++) {
        for (var D = [], x = 0; x < y; x++) {
            var h = {
                type: 0,
                angle: 0
            };
            if (0 < r.array[q][x][0]) {
                h =
                    Number(r.array[q][x][0]);
                var t = this.add.sprite(144 * x, 144 * q, "tile" + r.array[q][x][1]);
                t.pos = {
                    x: x,
                    y: q
                };
                t.block = !0;
                t.type = h;
                G.add(t);
                k.add(t);
                var z = void 0,
                    m = 0;
                1 <= h && 4 >= h ? (z = "1", 2 === h ? m = 90 : 3 === h ? m = 180 : 4 === h && (m = 270)) : 5 <= h && 6 >= h ? (z = "5", 6 === h && (m = 90)) : 7 === h ? z = "7" : 8 <= h && 11 >= h ? (z = "8", 9 === h ? m = 90 : 10 === h ? m = 180 : 11 === h && (m = 270)) : 12 <= h && 15 >= h && (z = "12", 13 === h ? m = 90 : 14 === h ? m = 180 : 15 === h && (m = 270));
                h = {
                    type: Number(h),
                    angle: m
                };
                var A = this.add.sprite(t.x, t.y, z).setInteractive();
                A.tile = !0;
                A.pos = t.pos;
                A.type = Number(z);
                A.rotation =
                    Math.PI / 180 * m;
                A.rotate = m;
                k.add(A);
                v.add(A)
            } else t = this.add.sprite(144 * x, 144 * q, "tile0"), k.add(t);
            D.push(h)
        }
        p.push(D)
    }
    6 === y ? k.setScale(.8) : 7 === y ? k.setScale(.665) : 8 === y && (k.setScale(.61), k.x -= 20, k.y -= 20);
    draw_button(670, 50, "home", this);
    k = draw_button(570, 50, "sound_on", this);
    k.name = "sound";
    check_audio(k);
    draw_button(50, 50, "hint", this);
    var L = this.add.text(320, 50, String(game_data.coin), {
        fontFamily: "robotomono",
        fontSize: 31,
        align: "right",
        color: "#fff"
    }).setOrigin(1, .5);
    this.add.text(485, 50, "Lv." + game_data.cur_level, {
        fontFamily: "robotomono",
        fontSize: 31,
        align: "right",
        color: "#fff"
    }).setOrigin(1, .5);
    first_play && 1 === game_data.cur_level && (w = "guide", k = g.add.rectangle(0, 0, 720, 1080, 0, .5).setOrigin(0), q = this.add.sprite(360, 540, "guide"), q.play("guide"), q.setScale(2), D = draw_button(480, 270, "close_small", this), I.addMultiple([k, q, D]));
    this.input.on("gameobjectdown", function(a, b) {
        "play" === w && b.tile && 3 != r.array[b.pos.y][b.pos.x][1] && (play_sound("pop", g), b.rotate += 90, 360 <= b.rotate && (b.rotate = 0), p[b.pos.y][b.pos.x].type = l(b.type,
            b.rotate), b.rotation = Math.PI / 180 * b.rotate, u());
        b.button && (play_sound("click", g), g.tweens.add({
            targets: b,
            scaleX: .95,
            scaleY: .95,
            yoyo: !0,
            duration: 100,
            ease: "Linear",
            onComplete: function() {
                if ("play" === w)
                    if ("hint" === b.name) {
                        w = "hint";
                        var a = g.add.rectangle(0, 0, 720, 1080, 0, .5).setOrigin(0),
                            c = g.add.sprite(360, 540, "window_small"),
                            e = g.add.text(360, 380, "Show hint", {
                                fontFamily: "robotomono",
                                fontSize: 50,
                                align: "center",
                                color: "#fff"
                            }).setOrigin(.5),
                            d = draw_button(360, 530, "pay_hint", g),
                            h = draw_button(360, 650, "close", g),
                            k = g.add.text(d.x + 50, d.y, String(game_data.hint_cost), {
                                fontFamily: "robotomono",
                                fontSize: 60,
                                align: "center",
                                color: "#fff"
                            }).setOrigin(.5);
                        F.addMultiple([a, c, e, d, h, k])
                    } else "sound" === b.name ? switch_audio(b) : "home" === b.name && g.scene.start("menu");
                else "pay_hint" === b.name ? game_data.coin >= game_data.hint_cost ? (game_data.coin -= game_data.hint_cost, L.setText(game_data.coin), K()) : alert("No enough coin!") : "close" === b.name ? (w = "play", F.clear(!0, !0)) : "exit" === b.name && g.scene.start("menu");
                "next" === b.name && (game_data.cur_level <=
                    game_data.total_level ? g.scene.start("game") : (alert("Awesome! You've completed all levels. Level will be reset to 1."), game_data.cur_level = 1, g.scene.start("menu")))
            }
        }))
    }, this);
    this.input.on("pointerdown", function() {
        "guide" === w && (I.destroy(!0, !0), w = "play")
    });
    r.shuffle && a()
};

function save_game() {
    localStorage.setItem("redfoc_connector", JSON.stringify(game_data))
}

function play_sound(a, c) {
    game_data.sound && c.sound.play(a)
}

function draw_button(a, c, l, u) {
    a = u.add.sprite(a, c, "btn_" + l).setInteractive();
    a.button = !0;
    a.name = l;
    return a
}
var config = {
        type: Phaser.AUTO,
        width: 720,
        height: 1080,
        scale: {
            mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
            parent: "redfoc",
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [Boot, Load, Menu, Game]
    },
    game = new Phaser.Game(config);
