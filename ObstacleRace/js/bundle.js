// var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault");

// var _typeof3 = _interopRequireDefault(require("../@babel/runtime/helpers/typeof"));

function _typeof2(o) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    })(o);
}

var _typeof3 = {};

_typeof3.default = function(o) {
    return "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? _typeof = function(o) {
        return _typeof2(o);
    } : _typeof = function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : _typeof2(o);
    }, _typeof(o);
}

function _typeof(obj) {
    if (typeof Symbol === "function" && (0, _typeof3.default)(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
            return (0, _typeof3.default)(obj);
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0,
                _typeof3.default)(obj);
        };
    }
    return _typeof(obj);
}

function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

! function() {
    "use strict";
    var t =
        /* */
        function() {
            function t() {
                _classCallCheck(this, t);
            }
            _createClass(t, [{
                key: "t",
                value: function t() {
                    var _t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    var s = new Date(),
                        i = s.getFullYear(),
                        h = s.getMonth() + 1,
                        e = s.getDate(),
                        a = i + "-";
                    if (h < 10 && (a += "0"), a += h + "-", e < 10 && (a += "0"), a += e, _t) {
                        a += " ";
                        var p = s.getHours(),
                            n = s.getMinutes(),
                            l = s.getSeconds();
                        p < 10 && (a += "0"), a += p + ":", n < 10 && (a += "0"), a += n + ":", l < 10 && (a += "0"),
                            a += l;
                    }
                    return a;
                }
            }, {
                key: "i",
                value: function i(t) {
                    var s = this.o(t / 3600);
                    t %= 3600;
                    var i = this.o(t / 60),
                        h = t % 60,
                        e = "";
                    return s < 10 && (e += "0"), e += s + ":", i < 10 && (e += "0"), e += i + ":", h < 10 && (e += "0"),
                        e += h;
                }
            }, {
                key: "_",
                value: function _(t) {
                    return t + .5 << 0;
                }
            }, {
                key: "o",
                value: function o(t) {
                    return t << 0;
                }
            }, {
                key: "u",
                value: function u(t) {
                    var s = this.o(t);
                    return t > s ? s + 1 : s;
                }
            }, {
                key: "L",
                value: function L(t) {
                    t.sort(function(t, s) {
                        return Math.random() > .5 ? -1 : 1;
                    });
                }
            }, {
                key: "g",
                value: function g(t, s) {
                    t = t.split("."), s = s.split(".");
                    for (var i = Math.max(t.length, s.length); t.length < i;) {
                        t.push("0");
                    }
                    for (; s.length < i;) {
                        s.push("0");
                    }
                    for (var h = 0; h < i; h++) {
                        var e = parseInt(t[h]),
                            a = parseInt(s[h]);
                        if (e > a) return 1;
                        if (e < a) return -1;
                    }
                    return 0;
                }
            }, {
                key: "m",
                value: function m(t, s, i) {
                    return [
                        ["moveTo", i, 0],
                        ["lineTo", t - i, 0],
                        ["arcTo", t, 0, t, i, i],
                        ["lineTo", t, s - i],
                        ["arcTo", t, s, t - i, s, i],
                        ["lineTo", i, s],
                        ["arcTo", 0, s, 0, s - i, i],
                        ["lineTo", 0, i],
                        ["arcTo", 0, 0, i, 0, i],
                        ["closePath"]
                    ];
                }
            }, {
                key: "S",
                value: function S(t, s, i, h) {
                    var e = [];
                    return 1 == h[0] ? e.push(["moveTo", i, 0]) : e.push(["moveTo", 0, 0]), 1 == h[1] ? (e.push(["lineTo", t - i, 0]),
                            e.push(["arcTo", t, 0, t, i, i])) : e.push(["lineTo", t, 0]), 1 == h[2] ? (e.push(["lineTo", t, s - i]),
                            e.push(["arcTo", t, s, t - i, s, i])) : e.push(["lineTo", t, s]), 1 == h[3] ? (e.push(["lineTo", i, s]),
                            e.push(["arcTo", 0, s, 0, s - i, i])) : e.push(["lineTo", 0, s]), 1 == h[0] ? (e.push(["lineTo", 0, i]),
                            e.push(["arcTo", 0, 0, i, 0, i])) : e.push(["lineTo", 0, 0]), e.push(["closePath"]),
                        e;
                }
            }, {
                key: "F",
                value: function F(t, s) {
                    this.M(s);
                    var i = new Laya.Text();
                    i.wordWrap = true;
                    return i.text = t, i.color = s.fill, i.font = s.fontFamily, i.fontSize = s.fontSize,
                        s.align && (i.align = s.align), s.valign && (i.valign = s.valign), s.w ? i.width = s.w : i.width = 2 * i.textWidth,
                        s.h ? i.height = s.h : i.height = 2 * i.textHeight, i.overflow = Laya.Text.VISIBLE,
                        i;
                }
            }, {
                key: "M",
                value: function M(t) {}
            }, {
                key: "k",
                value: function k(t, s) {
                    var i = Math.sqrt(t * t + s * s);
                    return 0 == i && (i = .001), i;
                }
            }, {
                key: "D",
                value: function D(t, s) {
                    var i = this.k(t, s),
                        h = Math.acos(t / i);
                    return s < 0 && (h = 2 * Math.PI - h), h;
                }
            }, {
                key: "j",
                value: function j(s) {
                    return Math.atan2(s.x, s.y) * t.A;
                }
            }, {
                key: "B",
                value: function B(t, s, i) {
                    if (Math.abs(s - t) <= i) return s; {
                        var _h = 1;
                        return s < t && (_h = -1), t + _h * i;
                    }
                }
            }, {
                key: "T",
                value: function T(t, s, i) {
                    var h = s.x - t.x,
                        e = s.y - t.y,
                        a = s.z - t.z,
                        p = Math.max(Math.abs(h), Math.abs(e), Math.abs(a)),
                        n = this.o(p / i) + 1;
                    return [new Laya.Vector3(t.x + h / n, t.y + e / n, t.z + a / n), n];
                }
            }, {
                key: "C",
                value: function C(t, s, i) {
                    return t + (s - t) * this.R(i);
                }
            }, {
                key: "N",
                value: function N(t, s, i) {
                    (s %= 360) > 180 ? s -= 360 : s < -180 && (s += 360), (t %= 360) > 180 ? t -= 360 : t < -180 && (t += 360),
                        Math.abs(s) > 90 && (t < 0 && s > 0 && (s -= 360), t > 0 && s < 0 && (s += 360));
                    var h = s - t;
                    return h > 180 ? h -= 360 : h < -180 && (h += 360), t + h * this.R(i);
                }
            }, {
                key: "I",
                value: function I(t, s) {
                    return t - this.o(t / s) * s;
                }
            }, {
                key: "R",
                value: function R(t) {
                    return t < 0 ? t = 0 : t > 1 && (t = 1), t;
                }
            }]);
            return t;
        }();
    t.A = 57.325, t.P = .01745;
    var s = new t();
    var i =
        /* */
        function() {
            function i() {
                _classCallCheck(this, i);
            }
            _createClass(i, null, [{
                key: "W",
                value: function W(t) {}
            }, {
                key: "G",
                value: function G() {
                    if (null != i.U && i.O < .98) {
                        i.O += .01;
                        var _t2 = i.O,
                            _h2 = i.V;
                        _h2.graphics.clear(), _h2.graphics.drawPath(0, 0, s.m(500, 50, 20), {
                            fillStyle: "#DBDBDB"
                        }, {
                            strokeStyle: "#ffffff",
                            lineWidth: 3
                        }), _h2.graphics.drawPath(3, 3, s.m(500 * _t2, 44, 20), {
                            fillStyle: "#33D927"
                        }), i.Y.text = "LOADING.." + s.o(100 * _t2) + "%";
                    } else {
                        Laya.timer.clear(null, i.G);
                    }
                }
            }]);
            return i;
        }();
    i.H = 0, i.K = 0, i.J = null, i.U = null, i.V = null, i.Y = null, i.O = .01, i.X = null;
    var h = new t();
    var e =
        /* */
        function(_Laya$Script3D) {
            _inherits(e, _Laya$Script3D);

            function e() {
                var _this;
                _classCallCheck(this, e);
                _this = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)), _this.q = -1,
                    _this.Z = "YOU", _this.$ = !1, _this.tt = "", _this.st = !1, _this.it = 1, _this.ht = 1,
                    _this.et = 0, _this.at = !0, _this.pt = -1, _this.nt = !1, _this.lt = !1, _this.ot = 0,
                    _this.rt = 0, _this._t = 0, _this.ft = 0, _this.yt = 0, _this.ut = 0, _this.ct = 0,
                    _this.Lt = 0, _this.gt = !0, _this.wt = 0, _this.dt = 7, _this.St = !1, _this.Ft = 0,
                    _this.Mt = 0, _this.kt = 0, _this.xt = !1, _this.vt = new Laya.Vector3(0, 0, 0),
                    _this.bt = new Laya.Vector3(0, 0, 0), _this.Dt = new Laya.Vector3(0, 0, 0), _this.jt = "Normal",
                    _this.At = "Idle", _this.Et = "Run", _this.Bt = "Dance1", _this.Tt = !1, _this.Ct = 0,
                    _this.Rt = 0;
                return _this;
            }
            _createClass(e, [{
                key: "onAwake",
                value: function onAwake() {
                    var t = this.owner,
                        s = t.getChildAt(0).getComponent(Laya.Animator),
                        i = new Laya.Vector3(.5, 1.8, .5),
                        h = t.addComponent(Laya.Rigidbody3D),
                        e = new Laya.BoxColliderShape(i.x, i.y, i.z);
                    e.localOffset = new Laya.Vector3(0, .5 * i.y, 0), h.colliderShape = e, h.friction = 0,
                        h.isKinematic = !0, h.isTrigger = !0, this.Nt = h, this.It = t, this.Pt = s;
                }
            }, {
                key: "onTriggerEnter",
                value: function onTriggerEnter(t) {
                    "Box" != t.owner.name && "Box_BanDealSpeed" != t.owner.name || this.st || (this.zt(),
                        A.instance.Gt.Wt && i.J.Ot.Ut([{
                            e: 2
                        }]));
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    var t = Laya.timer.delta,
                        s = t / 1e3,
                        e = this.It,
                        a = A.instance.Vt;
                    if (A.instance.Yt && e.active && !this.xt) {
                        if (this.Ct += t, this.lt)
                            if (this.ot > 0) this.ot -= t;
                            else {
                                var _t3 = this.Ht(this.It.transform.position, this.It.transform.localRotationEulerY),
                                    _s2 = this.Kt(_t3);
                                null != _s2 ? this.pt != _s2.id ? (this.pt = _s2.id, this.nt = !1, this.Jt = !1, -1 == _s2.name.indexOf("NoWait") && 100 * Math.random() < this.rt && (this.ot = this._t + h._(Math.random() * this.ft)),
                                    100 * Math.random() < this.yt && (this.nt = !0)) : (_s2.active || (this.nt = !0),
                                    this.nt && (this.Jt = !0)) : this.Jt = !0;
                            }
                        if ((this.$ || this.Tt) && this.gt && !A.instance.Gt.Xt) {
                            this.wt += s * this.dt;
                            var _t4 = this.wt / a.qt * 560;
                            if (this.lt || this.st) A.instance.Gt.Qt || (A.instance.Zt[this.q + 1].x = _t4);
                            else {
                                A.instance.Zt[0].x = _t4;
                                var _s3 = h.o(this.Ct / 400);
                                this.Rt != _s3 && "Run" == this.Et && (this.Rt = _s3, i.J.$t());
                            }
                        }
                        if (A.instance.Gt.Qt && (this.at != this.$ ? (this.at = this.$, this.et = this.Ct) : this.Ct > this.et + 500 && (this.et = this.Ct,
                                    this.$ && this.ht > 1 && this.ht--, !this.$ && this.ht < 5 && this.ht++), this.Dt.x = e.transform.position.x,
                                this.Dt.y = e.transform.position.y + 2.2, this.Dt.z = e.transform.position.z, A.instance.ts.viewport.project(this.Dt, A.instance.ts.projectionViewMatrix, this.Dt),
                                this.Dt.x = this.Dt.x / Laya.stage.clientScaleX, this.Dt.y = this.Dt.y / Laya.stage.clientScaleY,
                                this.Dt.x > 0 && this.Dt.x < Laya.stage.width && this.Dt.y > 0 && this.Dt.y < Laya.stage.height ? (A.instance.ss[this.q + 1].visible = !0,
                                    A.instance.ss[this.q + 1].pos(this.Dt.x, this.Dt.y, !0), -1 == this.q ? A.instance.ss[this.q + 1].getChildByName("text").changeText("YOU " + (this.it + this.ht)) : A.instance.ss[this.q + 1].getChildByName("text").changeText(this.it + this.ht)) : A.instance.ss[this.q + 1].visible = !1),
                            this.gt) {
                            if (this.wt < a.qt) {
                                if (this.$ || this.Tt) {
                                    var _t5 = this.hs(this.wt);
                                    if (_t5 != this.Mt) {
                                        this.Mt = _t5;
                                        var _s5 = a.es[_t5];
                                        if (_s5 && _s5.indexOf("_") > -1) {
                                            var _t6 = _s5.split("_");
                                            this.as(_t6[1]);
                                        }
                                        var _i = a.ps[this.Mt];
                                        _i != this.kt && (this.kt = _i, this.yt = this.ct, A.instance.ns(_i));
                                    }
                                    var _s4 = this.ls(this.wt, this.Mt, this.Lt);
                                    e.transform.position = _s4[0], e.transform.localRotationEulerY = -(_s4[1] - 90);
                                }
                            } else this.xt || (this.xt = !0, this.st || A.instance.Gt.os.push(this), this.lt && A.instance.rs(),
                                this._s(this.Bt, .1));
                        } else {
                            !this.lt && e.transform.localPositionY <= -14 && !this.St && (this.St = !0, A.instance.fs.addChild(A.instance.ys),
                                A.instance.ys.transform.position = e.transform.position, i.J.us("FallWater"));
                            var _t7 = new Date().getTime(),
                                _s6 = 2e3;
                            this.st && (_s6 = 1500), _t7 - this.Ft >= _s6 && this.cs();
                        }
                    }
                }
            }, {
                key: "Ls",
                value: function Ls() {
                    this.as("Normal"), this.wt = 0, this.Mt = 0, this.kt = 0, this.tt = "", this.Ct = 0,
                        this.Rt = 0, this.gs();
                    var t = this.It;
                    t.transform.position = A.instance.Vt.ms[0], t.transform.localPositionX = this.Lt,
                        t.transform.localRotation = this.vt;
                }
            }, {
                key: "zt",
                value: function zt() {
                    this.Nt.isKinematic = !1, this.Nt.isTrigger = !1, this.yt -= this.ut, this._s("Dead", .1),
                        this.$ = !1, this.gt = !1, this.Ft = new Date().getTime(), this.lt || this.st || (i.J.us("Hited"),
                            i.J.ws());
                }
            }, {
                key: "gs",
                value: function gs() {
                    this.Nt.isKinematic = !0, this.Nt.isTrigger = !0, this.gt = !0, this.St && A.instance.fs.removeChild(A.instance.ys),
                        this.St = !1, this.xt = !1, this.Jt = !1, this.pt = -1, this.nt = !1;
                }
            }, {
                key: "cs",
                value: function cs() {
                    this.gs();
                    var t = A.instance.Vt;
                    for (var _s7 = 1; _s7 < t.ds.length; _s7++) {
                        if (this.wt < t.ds[_s7]) {
                            this.wt = t.ds[_s7 - 1] + .1;
                            break;
                        }
                    }
                    var s = this.ls(this.wt, this.hs(this.wt), this.Lt);
                    this.It.transform.position = s[0], this.It.transform.localRotationEulerX = 0, this.It.transform.localRotationEulerZ = 0,
                        this.It.transform.localRotationEulerY = -(s[1] - 90);
                }
            }, {
                key: "_s",
                value: function _s(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .1;
                    this.tt != t && (this.tt = t, this.Pt.crossFade(t, s));
                }
            }, {
                key: "hs",
                value: function hs(t) {
                    var s = 0,
                        i = A.instance.Vt;
                    for (var _h3 = 0; _h3 < i.Ss.length; _h3++) {
                        if (t < i.Ss[_h3]) {
                            s = _h3 - 1;
                            break;
                        }
                    }
                    return s;
                }
            }, {
                key: "ls",
                value: function ls(s, i) {
                    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var a = A.instance.Vt,
                        p = a.ms[i];
                    if (i >= a.ms.length - 1) return [p, a.Fs[i]];
                    var n = a.ms[i + 1],
                        l = (s - a.Ss[i]) / (a.Ss[i + 1] - a.Ss[i]);
                    Laya.Vector3.lerp(p, n, l, this.bt);
                    var o = h.N(a.Fs[i], a.Fs[i + 1], l),
                        r = A.instance.Ms[this.kt];
                    if (0 != e && "Level31" != r.name && "Level32" != r.name) {
                        var _s8 = (o - 90) * t.P;
                        this.Dt.y = 0, this.Dt.x = Math.cos(_s8), this.Dt.z = Math.sin(_s8), Laya.Vector3.scale(this.Dt, e, this.Dt),
                            Laya.Vector3.add(this.bt, this.Dt, this.bt);
                    }
                    return [this.bt, o];
                }
            }, {
                key: "Ht",
                value: function Ht(s, i) {
                    if ("Up" == this.jt) return this.ks(s);
                    i = (90 - i) * t.P;
                    return this.bt.y = s.y, this.bt.x = s.x + 1 * Math.cos(i), this.bt.z = s.z + 1 * Math.sin(i),
                        this.bt;
                }
            }, {
                key: "ks",
                value: function ks(t) {
                    return this.bt.y = t.y + 2.2, this.bt.x = t.x, this.bt.z = t.z, this.bt;
                }
            }, {
                key: "Kt",
                value: function Kt(s) {
                    var i = A.instance.Vt.xs[this.kt];
                    for (var _e = 0; _e < i.length; _e++) {
                        var _a = i[_e];
                        if (null == _a.transform || null == _a.transform) continue;
                        var _p = -_a.transform.rotationEuler.y * t.P,
                            _n = h.D(s.x - _a.transform.position.x, s.z - _a.transform.position.z),
                            _l = h.k(s.x - _a.transform.position.x, s.z - _a.transform.position.z),
                            _o = _n - _p,
                            _r = _l * Math.cos(_o),
                            _2 = _l * Math.sin(_o),
                            _f = s.y - _a.transform.position.y,
                            _y = .5;
                        if ("Level30" == _a.parent.parent.parent.name && (_y = .3), Math.abs(_r) <= _a.transform.localScaleX * _y && Math.abs(_2) <= _a.transform.localScaleZ * _y && Math.abs(_f) <= _a.transform.localScaleY * _y) return _a;
                    }
                    return null;
                }
            }, {
                key: "as",
                value: function as(t) {
                    if (this.jt != t) {
                        var _s9 = this.owner;
                        "Normal" == t ? (this.At = "Idle", this.Et = "Run", this.dt = 7) : "Climb" == t ? (this.At = "ClimbIdle",
                                this.Et = "Climb", this.dt = 3) : "Up" == t ? (this.At = "UpIdle", this.Et = "Up",
                                this.dt = 3) : "Rope" == t ? (this.At = "Rope", this.Et = "Rope", this.dt = 10) : "RopeEnd" == t ? (this.At = "Land",
                                this.Et = "Land", this.dt = 10) : "Slide" == t ? (this.At = "Slide", this.Et = "Slide",
                                this.dt = 15) : "Fall" == t ? (this.At = "Fall", this.Et = "Fall", this.dt = 20) : "FallEnd" == t && (this.At = "Land",
                                this.Et = "Land", this.dt = 10), _s9.getChildAt(0).transform.localRotationEulerY = "Climb" == t ? 90 : 0,
                            this.Tt = "Rope" == t || "RopeEnd" == t || "Slide" == t || "Fall" == t || "FallEnd" == t,
                            this.jt = t, this.Jt ? this._s(this.Et, .1) : this._s(this.At, .1);
                    }
                }
            }, {
                key: "Jt",
                get: function get() {
                    return this.$;
                },
                set: function set(t) {
                    this.gt && (t ? this._s(this.Et, .1) : this._s(this.At, .1), this.$ = t);
                }
            }]);
            return e;
        }(Laya.Script3D);
    var a = new t();
    var p =
        /* */
        function(_Laya$Script) {
            _inherits(p, _Laya$Script);

            function p() {
                var _this2;
                _classCallCheck(this, p);
                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this2.vs = 1;
                return _this2;
            }
            _createClass(p, [{
                key: "onEnable",
                value: function onEnable() {
                    var t = ["#FF49A1", "#F74AFF", "#FFE54E", "#8CFF53", "#50E9FF", "#BD48FE"],
                        s = this.owner;
                    s.rotation = 0;
                    var i = a.o(20 * Math.random()) + 20,
                        h = a.o(20 * Math.random()) + 20;
                    s.graphics.clear(), s.graphics.drawRect(.5 * -i, .5 * -h, i, h, t[a.o(Math.random() * t.length)]),
                        this.bs = 3500 * -this.vs, this.Ds = 1500, this.js = -600 - 700 * Math.random(),
                        this.As = (1e3 + 1400 * Math.random()) * this.vs, this.Es = 100 + 400 * Math.random(),
                        this.Bs = 200 + 500 * Math.random();
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    var t = this.owner;
                    if (t.visible) {
                        var _s10 = Laya.timer.delta / 1e3;
                        t.x += this.As * _s10, t.y += this.js * _s10, Math.abs(this.As) > 150 && (this.As += this.bs * _s10),
                            this.js += this.Ds * _s10, this.js > this.Es && (this.js = this.Es), t.rotation += this.Bs * _s10,
                            (t.y > 1400 || t.x > 800 || t.x < -50) && (t.visible = !1, t.removeSelf(), this.Cs.Ts = 0);
                    }
                }
            }]);
            return p;
        }(Laya.Script);
    var n =
        /* */
        function(_Laya$Script2) {
            _inherits(n, _Laya$Script2);

            function n() {
                var _this3;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                _classCallCheck(this, n);
                _this3 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this)), _this3.Rs = t,
                    _this3.Ns = s, _this3.Is = i;
                return _this3;
            }
            _createClass(n, [{
                key: "onAwake",
                value: function onAwake() {
                    if (this.Ns <= this.Rs) return;
                    var t, s = this.owner,
                        i = this;
                    t = 1 == this.Is ? s : s.scrollRect, s.on(Laya.Event.MOUSE_DOWN, null, function(s) {
                        this.Ps = !0, this.zs = s.stageY, this.Ws = t.y, this.Gs = Date.now();
                    }), s.on(Laya.Event.MOUSE_MOVE, null, function(s) {
                        if (this.Ps) {
                            var _h4 = s.stageY - this.zs;
                            1 == i.Is && (_h4 = 0 - _h4), t.y = this.Ws - .8 * _h4;
                        }
                    });
                    var h = function h(s) {
                        if (this.Ps = !1, t.y < i.Rs) Laya.Tween.to(t, {
                            y: i.Rs
                        }, 200);
                        else if (t.y > i.Ns) Laya.Tween.to(t, {
                            y: i.Ns
                        }, 200);
                        else {
                            var _h5 = Date.now() - this.Gs,
                                _e2 = (s.stageY - this.zs) / _h5 * 150;
                            1 == i.Is && (_e2 = 0 - _e2);
                            var _a2 = t.y - _e2;
                            _a2 < i.Rs ? _a2 = i.Rs : _a2 > i.Ns && (_a2 = i.Ns), _a2 && Laya.Tween.to(t, {
                                y: _a2
                            }, 500, Laya.Ease.sineOut);
                        }
                    };
                    s.on(Laya.Event.MOUSE_UP, null, h), s.on(Laya.Event.MOUSE_OUT, null, h);
                }
            }]);
            return n;
        }(Laya.Script);
    var l = new t();
    var o =
        /* */
        function(_Laya$Scene) {
            _inherits(o, _Laya$Scene);

            function o() {
                var _this4;
                _classCallCheck(this, o);
                _this4 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this)), o.instance = _assertThisInitialized(_this4);
                return _this4;
            }
            _createClass(o, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this5 = this;
                    this.y = i.H, this.height = Laya.stage.height, this.Us = [this.skin1], this.Os = [this.btn1, this.btn2],
                        this.Vs = this.carea, this.Ys = this.coin, this.Hs = this.price, this.Ks = this.vodtimes,
                        this.Js = this.goldbtn, this.Xs = this.vodbtn, this.qs = this.tipsk, this.Qs = this.tips,
                        this.Zs = {}, this.Zs.skin = [{
                            $s: "img/s_1.png",
                            ti: "1.jpg",
                            Is: 1,
                            si: 0
                        }, {
                            $s: "img/s_2.png",
                            ti: "2.jpg",
                            Is: 1,
                            si: 1
                        }, {
                            $s: "img/s_3.png",
                            ti: "3.jpg",
                            Is: 1,
                            si: 3
                        }, {
                            $s: "img/s_4.png",
                            ti: "4.jpg",
                            Is: 1,
                            si: 6
                        }, {
                            $s: "img/s_5.png",
                            ti: "5.jpg",
                            Is: 1,
                            si: 10
                        }, {
                            $s: "img/s_6.png",
                            ti: "6.jpg",
                            Is: 1,
                            si: 15
                        }, {
                            $s: "img/s_7.png",
                            ti: "7.jpg",
                            Is: 1,
                            si: 22
                        }, {
                            $s: "img/s_8.png",
                            ti: "8.jpg",
                            Is: 1,
                            si: 30
                        }, {
                            $s: "img/s_9.png",
                            ti: "9.jpg",
                            Is: 3,
                            si: 300
                        }, {
                            $s: "img/s_10.png",
                            ti: "10.jpg",
                            Is: 3,
                            si: 300
                        }, {
                            $s: "img/s_11.png",
                            ti: "11.jpg",
                            Is: 3,
                            si: 300
                        }, {
                            $s: "img/s_12.png",
                            ti: "12.jpg",
                            Is: 3,
                            si: 300
                        }, {
                            $s: "img/s_13.png",
                            ti: "13.jpg",
                            Is: 3,
                            si: 500
                        }, {
                            $s: "img/s_14.png",
                            ti: "14.jpg",
                            Is: 3,
                            si: 500
                        }, {
                            $s: "img/s_15.png",
                            ti: "15.jpg",
                            Is: 3,
                            si: 500
                        }, {
                            $s: "img/s_16.png",
                            ti: "16.jpg",
                            Is: 3,
                            si: 500
                        }, {
                            $s: "img/s_17.png",
                            ti: "17.jpg",
                            Is: 3,
                            si: 800
                        }, {
                            $s: "img/s_18.png",
                            ti: "18.jpg",
                            Is: 3,
                            si: 800
                        }, {
                            $s: "img/s_19.png",
                            ti: "19.jpg",
                            Is: 3,
                            si: 800
                        }, {
                            $s: "img/s_20.png",
                            ti: "20.jpg",
                            Is: 3,
                            si: 800
                        }, {
                            $s: "img/s_21.png",
                            ti: "21.jpg",
                            Is: 4,
                            si: 2
                        }, {
                            $s: "img/s_22.png",
                            ti: "22.jpg",
                            Is: 4,
                            si: 2
                        }, {
                            $s: "img/s_23.png",
                            ti: "23.jpg",
                            Is: 4,
                            si: 2
                        }, {
                            $s: "img/s_24.png",
                            ti: "24.jpg",
                            Is: 4,
                            si: 2
                        }, {
                            $s: "img/s_25.png",
                            ti: "25.jpg",
                            Is: 4,
                            si: 3
                        }, {
                            $s: "img/s_26.png",
                            ti: "26.jpg",
                            Is: 4,
                            si: 3
                        }, {
                            $s: "img/s_27.png",
                            ti: "27.jpg",
                            Is: 4,
                            si: 3
                        }, {
                            $s: "img/s_28.png",
                            ti: "28.jpg",
                            Is: 4,
                            si: 3
                        }], this.Zs.dance = [{
                            $s: "img/s_d01.png",
                            ti: "Dance1",
                            Is: 1,
                            si: 0
                        }, {
                            $s: "img/s_d02.png",
                            ti: "Dance9",
                            Is: 3,
                            si: 150
                        }, {
                            $s: "img/s_d03.png",
                            ti: "Dance12",
                            Is: 3,
                            si: 250
                        }, {
                            $s: "img/s_d04.png",
                            ti: "Dance5",
                            Is: 3,
                            si: 250
                        }, {
                            $s: "img/s_d05.png",
                            ti: "Dance3",
                            Is: 3,
                            si: 350
                        }, {
                            $s: "img/s_d06.png",
                            ti: "Dance2",
                            Is: 3,
                            si: 350
                        }, {
                            $s: "img/s_d07.png",
                            ti: "Dance4",
                            Is: 3,
                            si: 350
                        }, {
                            $s: "img/s_d08.png",
                            ti: "Dance6",
                            Is: 3,
                            si: 350
                        }, {
                            $s: "img/s_d09.png",
                            ti: "Dance7",
                            Is: 4,
                            si: 3
                        }, {
                            $s: "img/s_d10.png",
                            ti: "Dance8",
                            Is: 4,
                            si: 3
                        }, {
                            $s: "img/s_d11.png",
                            ti: "Dance10",
                            Is: 4,
                            si: 3
                        }, {
                            $s: "img/s_d12.png",
                            ti: "Dance11",
                            Is: 4,
                            si: 3
                        }], this.ii = {};
                    if(window.YandexPromo){
                        for(var kk=0;kk<this.Zs.skin.length;kk++){
                            var skin = this.Zs.skin[kk];
                            skin.Is = 1;skin.si = 0;
                        }
                    }
                    var t = new Laya.Sprite();
                    t.y = this.Us[0].y, this.addChild(t), this.Us.push(t), this.hi(this.Zs.skin, "skin", this.Us[0]);
                    var s = Laya.stage.height - this.Us[0].y - i.H,
                        h = 1260;
                    this.Us[0].scrollRect = new Laya.Rectangle(0, 0, 750, s), this.Us[0].size(750, s),
                        this.Us[0].addComponentIntance(new n(0, h - s, 2)), this.hi(this.Zs.dance, "dance", this.Us[1]),
                        s = Laya.stage.height - this.Us[1].y - i.H, h = 540, this.Us[1].scrollRect = new Laya.Rectangle(0, 0, 750, s),
                        this.Us[1].size(750, s), this.Us[1].addComponentIntance(new n(0, h - s, 2)), this.Os[0].on(Laya.Event.CLICK, this, function() {
                            _this5.ei(0);
                        }), this.Os[1].on(Laya.Event.CLICK, this, function() {
                            _this5.ei(1);
                        }), this.Ys.singleCharRender = !0, this.Ys.text = A.instance.Gt.Ys, this.Hs.singleCharRender = !0,
                        this.Ks.singleCharRender = !0, this.Qs.singleCharRender = !0, this.back.on(Laya.Event.CLICK, this, function() {
                            A.instance.ai();
                        }), this.Vs.on(Laya.Event.MOUSE_DOWN, null, function(t) {
                            this.Ps = !0, this.pi = t.stageX, this.ni = A.instance.It.transform.localRotationEulerY;
                        }), this.Vs.on(Laya.Event.MOUSE_MOVE, null, function(t) {
                            if (this.Ps) {
                                var _s11 = t.stageX - this.pi;
                                A.instance.It.transform.localRotationEulerY = this.ni + _s11;
                            }
                        }), this.Vs.on(Laya.Event.MOUSE_UP, null, function(t) {
                            this.Ps = !1;
                        }), this.Vs.on(Laya.Event.MOUSE_OUT, null, function(t) {
                            this.Ps = !1;
                        }), this.ei(0), this.li = "", this.oi = 0, this.ri = 0, this.Js.on(Laya.Event.CLICK, this, function() {
                            A.instance.Gt.Ys >= _this5.Zs[_this5.li][_this5.oi].si ? (A.instance.Gt.Ys -= _this5.Zs[_this5.li][_this5.oi].si,
                                "skin" == _this5.li ? (A.instance.Gt._i[0].push(_this5.Zs[_this5.li][_this5.oi].ti),
                                    A.instance.Gt.fi = Number(_this5.Zs[_this5.li][_this5.oi].ti.replace(".jpg", ""))) : (A.instance.Gt._i[1].push(_this5.Zs[_this5.li][_this5.oi].ti),
                                    A.instance.Gt.yi = _this5.Zs[_this5.li][_this5.oi].ti), _this5.ii[_this5.li][_this5.oi].ui.visible = !1,
                                _this5.Ys.text = A.instance.Gt.Ys, _this5.Js.visible = !1, _this5.qs.visible = !1) : A.instance.ci("Your coins are not enough.");
                        }), this.Xs.on(Laya.Event.CLICK, this, function() {
                            platform.getInstance().showReward(() => {
                                i.J.Li();
                            })
                        });
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(o.prototype), "onDestroy", this).call(this), o.instance = null;
                }
            }, {
                key: "ei",
                value: function ei(t) {
                    for (var _s12 = 0; _s12 < this.Os.length; _s12++) {
                        var _i2 = void 0;
                        _s12 == t ? (_i2 = "rgba(0,0,0,0.8)", this.Us[_s12].visible = !0, this.Us[_s12].scrollRect.y = 0) : (_i2 = "rgba(0,0,0,0.3)",
                            this.Us[_s12].visible = !1), this.Os[_s12].graphics.clear(), this.Os[_s12].graphics.drawPath(0, 0, l.S(this.Os[_s12].width, this.Os[_s12].height, 8, [1, 1, 0, 0]), {
                            fillStyle: _i2
                        });
                    }
                }
            }, {
                key: "hi",
                value: function hi(t, s, i) {
                    var h = this;
                    this.ii[s] = [];
                    var e, a = -180;
                    e = "skin" == s ? A.instance.Gt._i[0] : A.instance.Gt._i[1];
                    for (var _p2 = 0; _p2 < t.length; _p2++) {
                        _p2 % 4 == 0 && (a += 180);
                        var _n2 = new Laya.Sprite();
                        this.ii[s][_p2] = _n2, _n2.graphics.drawPath(0, 0, l.m(150, 150, 8), {
                                fillStyle: "rgba(255,255,255,0.3)"
                            }), i.addChild(_n2.pos(_p2 % 4 * 180 + 30, a)), _n2.size(150, 150), _n2.gi = s,
                            _n2.mi = _p2, _n2.on(Laya.Event.MOUSE_DOWN, null, function(t) {
                                this.pi = t.stageX, this.zs = t.stageY;
                            }), _n2.on(Laya.Event.MOUSE_UP, null, function(s) {
                                if (Math.abs(s.stageX - this.pi) > 10 || Math.abs(s.stageY - this.zs) > 10) return;
                                var i = this.gi,
                                    a = this.mi;
                                h.li = i, h.oi = a;
                                var p = !1;
                                if (e.indexOf(t[a].ti) > -1 && (p = !0), "skin" == i ? (Laya.Texture2D.load("res/skin/" + h.Zs[i][a].ti, Laya.Handler.create(null, function(t) {
                                        A.instance.It.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                                    })), p && (A.instance.Gt.fi = Number(h.Zs[i][a].ti.replace(".jpg", "")))) : (A.instance.wi._s(h.Zs[i][a].ti),
                                        p && (A.instance.Gt.yi = h.Zs[i][a].ti)), h.qs.visible = !1, h.Xs.visible = !1,
                                    h.Js.visible = !1, !p) switch (h.qs.visible = !0, t[a].Is) {
                                    case 1:
                                        h.Qs.text = "Unlock when you pass the level " + t[a].si;
                                        break;

                                    case 3:
                                        h.Js.visible = !0, h.Hs.text = t[a].si, h.Qs.text = t[a].si + " coins to unlock.";
                                        break;

                                    case 4:
                                        h.Xs.visible = !0, h.ri = this.ri, h.Ks.text = "x" + h.ri, h.Qs.text = "Watch " + h.ri + " times ads to unlock.";
                                }
                            });
                        var _o2 = Laya.Sprite.fromImage(t[_p2].$s);
                        "skin" == s ? _p2 < 5 ? (_o2.size(110, 110), _n2.addChild(_o2.pos(20, 20))) : (_o2.size(84, 112),
                            _n2.addChild(_o2.pos(20, 15))) : (_o2.size(110, 110), _n2.addChild(_o2.pos(20, 20)));
                        var _r2 = new Laya.Sprite();
                        if (_n2.ui = _r2, -1 == e.indexOf(t[_p2].ti)) {
                            var _s13 = !1;
                            if (1 == t[_p2].Is && A.instance.Gt.di >= t[_p2].si && (e.push(t[_p2].ti), _s13 = !0), !_s13) {
                                _r2.graphics.drawRect(0, 0, 50, 50, "rgba(0,0,0,0.3)"), _n2.addChild(_r2.pos(100, 100));
                                var _s14 = Laya.Sprite.fromImage("img/lock.png");
                                _r2.addChild(_s14.size(30, 30).pos(10, 10)), 4 == t[_p2].Is && (_n2.ri = t[_p2].si);
                            }
                        }
                    }
                }
            }, {
                key: "Si",
                value: function Si() { //..................................................................
                    this.ri--, this.ri <= 0 ? ("skin" == this.li ? (A.instance.Gt._i[0].push(this.Zs[this.li][this.oi].ti),
                                A.instance.Gt.fi = Number(this.Zs[this.li][this.oi].ti.replace(".jpg", ""))) : (A.instance.Gt._i[1].push(this.Zs[this.li][this.oi].ti),
                                A.instance.Gt.yi = this.Zs[this.li][this.oi].ti), this.ii[this.li][this.oi].ui.visible = !1,
                            this.Xs.visible = !1, this.qs.visible = !1) :
                        (this.ii[this.li][this.oi].ri = this.ri, this.Ks.text = "x" + this.ri, this.Qs.text = "Watch " + this.ri + " times ads to unlock.");
                }
            }]);
            return o;
        }(Laya.Scene);
    var r =
        /* */
        function(_Laya$Scene2) {
            _inherits(r, _Laya$Scene2);

            function r() {
                var _this6;
                _classCallCheck(this, r);
                _this6 = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this)), r.instance = _assertThisInitialized(_this6);
                return _this6;
            }
            _createClass(r, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this7 = this;
                    _get(_getPrototypeOf(r.prototype), "onEnable", this).call(this), this.y = i.H, this.Vs = this.carea,
                        this.Fi = this.btn, this.Mi = this.confbtn, this.ki = this.title, this.Fi.on(Laya.Event.CLICK, this, function(t) {
                            _this7.chbox.selected ?
                                platform.getInstance().showReward(() => { //zs
                                    i.J.xi();
                                }) : A.instance.Gt.vi < 10 ? A.instance.bi() : (11 == A.instance.Gt.vi && Laya.Texture2D.load("res/skin/" + A.instance.Gt.fi + ".jpg", Laya.Handler.create(_this7, function(t) {
                                    A.instance.It.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                                })), A.instance.Di(!1), A.instance.ji());
                        }), this.Fi.y += i.K, this.Mi.on(Laya.Event.CLICK, this, function(t) {
                            A.instance.ai();
                        }), this.Mi.y += i.K, 1 == A.instance.Gt.vi ? this.ki.text = "You can unlock a new skin." : 2 == A.instance.Gt.vi ? this.ki.text = "You can unlock a new dance." :
                        11 == A.instance.Gt.vi ? this.ki.text = "Skin trail" : 12 == A.instance.Gt.vi && (this.ki.text = "Dance trail"),
                        this.Vs.on(Laya.Event.MOUSE_DOWN, null, function(t) {
                            this.Ps = !0, this.pi = t.stageX, this.ni = A.instance.It.transform.localRotationEulerY;
                        }), this.Vs.on(Laya.Event.MOUSE_MOVE, null, function(t) {
                            if (this.Ps) {
                                var _s15 = t.stageX - this.pi;
                                A.instance.It.transform.localRotationEulerY = this.ni + _s15;
                            }
                        }), this.Vs.on(Laya.Event.MOUSE_UP, null, function(t) {
                            this.Ps = !1;
                        }), this.Vs.on(Laya.Event.MOUSE_OUT, null, function(t) {
                            this.Ps = !1;
                        }), i.J.Ai(0), i.J.Ei();
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    i.J.Bi(), i.J.Ti();
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(r.prototype), "onDestroy", this).call(this), r.instance = null;
                }
            }]);
            return r;
        }(Laya.Scene);
    var _ =
        /* */
        function(_Laya$Script3) {
            _inherits(_, _Laya$Script3);

            function _() {
                var _this8;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .95;
                var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.05;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .003;
                _classCallCheck(this, _);
                _this8 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this)), _this8.Ci = 1,
                    _this8.step = i, _this8.min = t, _this8.max = s;
                return _this8;
            }
            _createClass(_, [{
                key: "onEnable",
                value: function onEnable() {}
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (this.owner.visible) {
                        var _t8 = Laya.timer.delta;
                        _t8 > 500 && (_t8 = 500);
                        var _s16 = this.owner.scaleX + this.Ci * this.step * _t8 * .04;
                        _s16 >= this.max ? this.Ci = -1 : _s16 <= this.min && (this.Ci = 1), this.owner.scale(_s16, _s16, !0);
                    }
                }
            }]);
            return _;
        }(Laya.Script);
    var f = new t();
    var y =
        /* */
        function(_Laya$Scene3) {
            _inherits(y, _Laya$Scene3);

            function y() {
                _classCallCheck(this, y);
                return _possibleConstructorReturn(this, _getPrototypeOf(y).call(this));
            }
            _createClass(y, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this9 = this;
                    y.instance = this, _get(_getPrototypeOf(y.prototype), "onEnable", this).call(this),
                        this.y = i.H, A.instance.Ri.visible = !0;
                    var t = this.kk;
                    t.graphics.drawPath(0, 0, f.m(t.width, t.height, 40), {
                        fillStyle: "#7FAEFF"
                    }, {
                        strokeStyle: "#000000",
                        lineWidth: 2
                    });
                    var s = A.instance.Ni(10);
                    this.Ii = A.instance.wi.it + A.instance.wi.ht - 1, this.Ii < 10 ? this.Ys = 380 - 10 * this.Ii : this.Ii < 30 ? this.Ys = 280 - 5 * (this.Ii - 10) : this.Ys = 180 - 2 * (this.Ii - 30);
                    for (var _i3 = 0; _i3 < 11; _i3++) {
                        var _h6 = void 0,
                            _e3 = void 0,
                            _a3 = void 0,
                            _p3 = new Laya.Sprite();
                        _p3.pos(40, 80 + 70 * _i3), 10 == _i3 || _i3 == this.Ii ? (_h6 = "YOU", _e3 = this.Ys,
                            _a3 = this.Ii + 1, _p3.graphics.drawPath(0, 0, f.m(520, 60, 8), {
                                fillStyle: "#87DE3C"
                            })) : (_h6 = s[_i3], _e3 = 380 - 10 * _i3, _a3 = _i3 + 1, _p3.graphics.drawPath(0, 0, f.m(520, 60, 8), {
                            fillStyle: "#ffffff"
                        })), t.addChild(_p3);
                        var _n3 = f.F(_a3, {
                            fontFamily: "serif",
                            fontSize: 40,
                            fill: "#000000",
                            align: "center",
                            valign: "middle",
                            w: 80,
                            h: 60
                        });
                        _n3.singleCharRender = !0, _p3.addChild(_n3), (_n3 = f.F(_h6, {
                            fontFamily: "Arial",
                            fontSize: 32,
                            fill: "#000000",
                            valign: "middle",
                            h: 60
                        })).singleCharRender = !0, _p3.addChild(_n3.pos(100, 0));
                        var _l2 = new Laya.Sprite();
                        _l2.graphics.drawPath(0, 0, f.m(100, 40, 12), {
                                fillStyle: "#7D7D7D"
                            }), _p3.addChild(_l2.pos(400, 10)), (_n3 = f.F(_e3, {
                                fontFamily: "Arial",
                                fontSize: 28,
                                fill: "#000000",
                                align: "center",
                                valign: "middle",
                                w: 70,
                                h: 40
                            })).singleCharRender = !0, _p3.addChild(_n3.pos(400, 10)), (_l2 = Laya.Sprite.fromImage("img/coin.png")).size(30, 30),
                            _p3.addChild(_l2.pos(465, 15));
                    }
                    this.btn1.addComponent(_), this.btn1.y += i.K, this.btn2.graphics.drawPath(0, 0, f.m(this.btn2.width, this.btn2.height, 40), {
                        fillStyle: "#0082FF"
                    }), this.btn2.y += i.K, this.btn1.on(Laya.Event.CLICK, this, function(t) {
                        t.stopPropagation(),
                            platform.getInstance().showReward(() => { //zs
                                i.J.Pi();
                            })
                    }), this.btn2.on(Laya.Event.CLICK, this, function(t) {
                        t.stopPropagation(), _this9.zi(1);
                    }), i.J.Ai(1);
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    _get(_getPrototypeOf(y.prototype), "onDisable", this).call(this), A.instance.Ri.visible = !1,
                        i.J.Ti(), y.instance = null;
                }
            }, {
                key: "zi",
                value: function zi() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    A.instance.Gt.Qt = !1, A.instance.Gt.Ys += this.Ys * t, A.instance.Wi(), A.instance.Gi();
                    var s = Date.now() - A.instance.Gt.Ui;
                    s < A.instance.Gt.Oi && A.instance.ci("The next marathon will start in " + f.u((A.instance.Gt.Oi - s) / 6e4) + " minutes");
                }
            }]);
            return y;
        }(Laya.Scene);
    var u = new t();
    var c =
        /* */
        function(_Laya$Dialog) {
            _inherits(c, _Laya$Dialog);

            function c() {
                var _this10;
                _classCallCheck(this, c);
                _this10 = _possibleConstructorReturn(this, _getPrototypeOf(c).call(this)), c.instance = _assertThisInitialized(_this10),
                    _this10.qs = new Laya.Sprite(), _this10.qs.graphics.drawPath(0, 0, u.m(700, 100, 12), {
                        fillStyle: "rgba(0,0,0,0.6)"
                    }), _this10.Qs = u.F("0", {
                        fontFamily: "Arial",
                        fontSize: 40,
                        fill: "#ffffff",
                        align: "center",
                        valign: "middle",
                        w: 700,
                        h: 100
                    }), _this10.Qs.singleCharRender = !0, _this10.qs.addChild(_this10.Qs), _this10.qs.pos(0, 500);
                return _this10;
            }
            _createClass(c, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this11 = this;
                    _get(_getPrototypeOf(c.prototype), "onEnable", this).call(this), this.popupEffect = Laya.Handler.create(this, function(t) {
                        t.scale(1, 1), t._effectTween = Laya.Tween.from(t, {
                            x: 50,
                            y: 700 + i.H + i.H,
                            scaleX: 0,
                            scaleY: 0
                        }, 300, Laya.Ease.backOut, Laya.Handler.create(_this11, _this11.doOpen, [t]), 0, !1, !1);
                    }), this.closeEffect = Laya.Handler.create(this, function(t) {
                        t._effectTween = Laya.Tween.to(t, {
                            x: 50,
                            y: 700 + i.H + i.H,
                            scaleX: 0,
                            scaleY: 0
                        }, 300, Laya.Ease.strongOut, Laya.Handler.create(_this11, _this11.doClose, [t]), 0, !1, !1);
                    });
                    var t = this;
                    t.graphics.drawPath(0, 35, u.m(t.width, t.height - 35, 40), {
                        fillStyle: "#558ef1"
                    }, {
                        strokeStyle: "#ffffff",
                        lineWidth: 6
                    });
                    var s = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    this.Vi = [];
                    for (var _i4 = 0; _i4 < 9; _i4++) {
                        var _h7 = new Laya.Sprite();
                        var _texth7 = new Laya.Text();
                        _texth7.color = "#ffffff";
                        _texth7.fontSize = 35;
                        _texth7.text = "RECEIVED";
                        _texth7.rotation = -35;
                        _texth7.zOrder = 50;
                        _texth7.pos(10, 140);
                        _i4 < A.instance.Gt.Yi ? (_h7.graphics.drawPath(0, 0, u.m(180, 200, 12), {
                            fillStyle: "#69d011"
                        }), _h7.addChild(_texth7)) : _h7.graphics.drawPath(0, 0, u.m(180, 200, 12), {
                            fillStyle: "#4e5a47"
                        }), _h7.pos(45 + _i4 % 3 * 210, 105 + 230 * u.o(_i4 / 3)), t.addChild(_h7), this.Vi.push(_h7);
                        var _e4 = u.F("Day " + s[_i4], {
                            fontFamily: "Arial",
                            fontSize: 32,
                            fill: "#ffffff",
                            align: "center",
                            valign: "middle",
                            w: 180,
                            h: 40
                        });
                        _e4.singleCharRender = !0, _e4.y = 15, _h7.addChild(_e4);
                        var _a4 = Laya.Sprite.fromImage("img/coin.png");
                        _a4.size(80, 80), _h7.addChild(_a4.pos(50, 65)), (_e4 = u.F("x" + (50 + 10 * _i4), {
                            fontFamily: "Arial",
                            fontSize: 32,
                            fill: "#ffffff",
                            align: "center",
                            valign: "middle",
                            w: 180,
                            h: 40
                        })).singleCharRender = !0, _e4.y = 155, _h7.addChild(_e4);
                    }
                    this.y = 60 + i.H, this.btn1.addComponent(_), this.btn1.visible = u.t(!1) != A.instance.Gt.Hi,
                        this.btn1.on(Laya.Event.CLICK, this, function() {
                            platform.getInstance().showReward(() => { //zs
                                i.J.Ki();                               
                                //u.t(!1) != A.instance.Gt.Hi ? (i.J.Ki(), k.instance && (k.instance.Ri.visible = !1), _this11.close(), window.wx && wx.gameJump.showExhibitionView()) :
                                //    _this11.ci(" You have signed in today, please come back tomorrow.", 2e3);
                            })
                        }), this.btn2.on(Laya.Event.CLICK, this, function() {
                            _this11.Ji(1);
                        }), this.back.on(Laya.Event.CLICK, this, function() {
                            k.instance && (k.instance.Ri.visible = !1), _this11.close(), window.wx && wx.gameJump.showExhibitionView();
                        });
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    _get(_getPrototypeOf(c.prototype), "onDisable", this).call(this), Laya.timer.clearAll(this);
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(c.prototype), "onDestroy", this).call(this);
                }
            }, {
                key: "Ji",
                value: function Ji() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    var s = u.t(!1);
                    if (s != A.instance.Gt.Hi) {
                        this.Vi[A.instance.Gt.Yi].graphics.clear(), this.Vi[A.instance.Gt.Yi].graphics.drawPath(0, 0, u.m(180, 200, 12), {
                            fillStyle: "#69d011"
                        }), A.instance.Gt.Hi = s, A.instance.Gt.Yi++;
                        var _i5 = 50 + 10 * (A.instance.Gt.Yi - 1);
                        A.instance.Gt.Ys += _i5 * t, this.ci("You got  " + _i5 * t + " coins.", 2e3), A.instance.Gt.Yi = A.instance.Gt.Yi % 9,
                            A.instance.Wi(), k.instance && (k.instance.coin.text = A.instance.Gt.Ys);
                        k.instance && (k.instance.Ri.visible = !1), this.close(), window.wx && wx.gameJump.showExhibitionView();
                    } else this.ci("You have signed in today, please come back tomorrow.", 2e3);
                }
            }, {
                key: "ci",
                value: function ci(t) {
                    var _this12 = this;
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2e3;
                    this.Qs.text = t, this.addChild(this.qs), Laya.timer.once(s, this, function() {
                        _this12.qs.removeSelf();
                    });
                }
            }]);
            return c;
        }(Laya.Dialog);
    var L =
        /* */
        function() {
            function L() {
                _classCallCheck(this, L);
                this.Xi = !0, this.Qs = !1, this.qi = 0, this.Qi = 0, this.Zi = !1;
            }
            _createClass(L, [{
                key: "$i",
                value: function $i(t) {
                    t.run();
                }
            }, {
                key: "th",
                value: function th(t) {}
            }, {
                key: "sh",
                value: function sh() {
                    return Laya.LocalStorage.getJSON("frace_data");
                }
            }, {
                key: "ih",
                value: function ih(t) {
                    Laya.LocalStorage.setJSON("frace_data", t);
                }
            }, {
                key: "hh",
                value: function hh() {
                    return Laya.LocalStorage.getJSON("frace_skin");
                }
            }, {
                key: "eh",
                value: function eh() {
                    var t = A.instance.Gt._i;
                    Laya.LocalStorage.setJSON("frace_skin", t);
                }
            }, {
                key: "us",
                value: function us(t) {
                    Laya.SoundManager.playSound("res/audio/" + t + ".mp3");
                    if(t.includes("win")){
                        setTimeout(function(){
                            ShowInter();
                        }, 2000);
                    }else if(t.includes("loose")){
                        setTimeout(function(){
                            ShowInter();
                        }, 1000);
                    }
                }
            }, {
                key: "ws",
                value: function ws() {}
            }, {
                key: "$t",
                value: function $t() {}
            }, {
                key: "ah",
                value: function ah() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                }
            }, {
                key: "ph",
                value: function ph() {}
            }, {
                key: "nh",
                value: function nh() {}
            }, {
                key: "lh",
                value: function lh() {
                    return null;
                }
            }, {
                key: "oh",
                value: function oh() {}
            }, {
                key: "rh",
                value: function rh() {}
            }, {
                key: "_h",
                value: function _h() {}
            }, {
                key: "fh",
                value: function fh() {}
            }, {
                key: "yh",
                value: function yh() {}
            }, {
                key: "uh",
                value: function uh() {}
            }, {
                key: "Lh",
                value: function Lh() {}
            }, {
                key: "gh",
                value: function gh() {}
            }, {
                key: "mh",
                value: function mh() {}
            }, {
                key: "wh",
                value: function wh() {}
            }, {
                key: "dh",
                value: function dh(t, s, i) {}
            }, {
                key: "Sh",
                value: function Sh() {}
            }, {
                key: "Fh",
                value: function Fh() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                }
            }, {
                key: "Mh",
                value: function Mh() {}
            }, {
                key: "Ai",
                value: function Ai() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                }
            }, {
                key: "Ti",
                value: function Ti() {}
            }, {
                key: "kh",
                value: function kh() {
                    A.instance.Gt.Ys += 2 * A.instance.Gt.xh, A.instance.Wi(), A.instance.vh();
                }
            }, {
                key: "Li",
                value: function Li() {
                    o.instance && o.instance.Si();
                }
            }, {
                key: "bh",
                value: function bh() {
                    A.instance.Gt.Dh += 5, A.instance.Wi(), A.instance.ji();
                }
            }, {
                key: "xi",
                value: function xi() {
                    if (1 == A.instance.Gt.vi ? (A.instance.Gt._i[0].push(A.instance.Gt.jh), A.instance.Gt.fi = Number(A.instance.Gt.jh.replace(".jpg", ""))) : 2 == A.instance.Gt.vi ? (A.instance.Gt._i[1].push(A.instance.Gt.jh),
                            A.instance.Gt.yi = A.instance.Gt.jh) : 12 == A.instance.Gt.vi && (A.instance.wi.Bt = A.instance.Gt.jh),
                        A.instance.Gt.vi < 10) r.instance && (r.instance.Fi.visible = !1, r.instance.chbox.visible = !1,
                            r.instance.Mi.visible = !0, 1 == A.instance.Gt.vi ? r.instance.ki.text = "Congratulations, you got a new skin." : 2 == A.instance.Gt.vi && (r.instance.ki.text = "Congratulations, you got a new dance.")),
                        Laya.timer.once(300, this, function() {
                            A.instance.Ah(0, 1);
                        }), Laya.timer.once(600, this, function() {
                            A.instance.Ah(750, -1);
                        });
                    else {
                        if (11 == A.instance.Gt.vi) {
                            var _t9 = Number(A.instance.Gt.jh.replace(".jpg", ""));
                            A.instance.Zt[0].graphics.clear(), A.instance.Zt[0].graphics.drawCircle(0, 0, 20, A.instance.Gt.Eh[_t9 - 1]);
                        }
                        A.instance.Di(!1), A.instance.ji();
                    }
                }
            }, {
                key: "Bh",
                value: function Bh() {
                    Laya.Scene.open("scenes/marathonbegin.scene");
                }
            }, {
                key: "Pi",
                value: function Pi() {
                    y.instance && y.instance.zi(2);
                }
            }, {
                key: "Ki",
                value: function Ki() {
                    c.instance && c.instance.Ji(2);
                }
            }, {
                key: "Th",
                value: function Th(t) {}
            }, {
                key: "Ch",
                value: function Ch() {}
            }, {
                key: "Rh",
                value: function Rh() {}
            }, {
                key: "Nh",
                value: function Nh() {}
            }, {
                key: "Ei",
                value: function Ei(t) {}
            }, {
                key: "Bi",
                value: function Bi() {}
            }, {
                key: "Ih",
                value: function Ih(t) {}
            }, {
                key: "Ph",
                value: function Ph() {}
            }, {
                key: "zh",
                value: function zh(t) {}
            }, {
                key: "Wh",
                value: function Wh() {}
            }, {
                key: "Gh",
                value: function Gh(t, s) {}
            }, {
                key: "Uh",
                value: function Uh(t) {
                    t();
                }
            }, {
                key: "Oh",
                value: function Oh() {}
            }]);
            return L;
        }();
    var g = new t();
    var m =
        /* */
        function(_Laya$Scene4) {
            _inherits(m, _Laya$Scene4);

            function m() {
                var _this13;
                _classCallCheck(this, m);
                _this13 = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this)), m.instance = _assertThisInitialized(_this13);
                return _this13;
            }
            _createClass(m, [{
                key: "onEnable",
                value: function onEnable() {
                    this.y = i.H, this.back.on(Laya.Event.CLICK, this, function() {
                            A.instance.Vh();
                        }), this.Yh = [this.name1, this.name2, this.name3, this.name4, this.name5, this.name6],
                        this.Hh = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6],
                        this.Kh = this.btn2, this.Qs = this.tips, this.Jh = this.userinfo, this.Xh = this.owner;
                    for (var _t10 = 0; _t10 < this.Yh.length; _t10++) {
                        this.Yh[_t10].singleCharRender = !0;
                    }
                    this.Kh.graphics.drawPath(0, 0, g.m(this.Kh.width, this.Kh.height, 12), {
                        fillStyle: "#5EAFBB"
                    }, {
                        strokeStyle: "#ffffff",
                        lineWidth: 2
                    }), this.share.graphics.drawPath(0, 0, g.m(this.share.width, this.share.height, 36), {
                        fillStyle: "#5EAFBB"
                    }, {
                        strokeStyle: "#ffffff",
                        lineWidth: 2
                    }), this.qh(!1);
                    this.share.on(Laya.Event.CLICK, this, function() {
                        i.J.fh();
                    }), this.Kh.on(Laya.Event.CLICK, this, function() {
                        i.J.uh();
                    }), this.Jh.on(Laya.Event.CLICK, this, function(t) {
                        t.stopPropagation();
                    });
                    for (var _t11 = 0; _t11 < A.instance.Gt.Qh.length; _t11++) {
                        A.instance.Gt.Qh[_t11].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, .7),
                            A.instance.Gt.Qh[_t11].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
                    }
                    i.J.Zi ? (i.J.rh(), i.J.oh()) : this.Qs.text = "", i.J.Ai(0), i.J.Th(!0);
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(m.prototype), "onDestroy", this).call(this), i.J.Ti(), i.J.Th(!1),
                        A.instance.Gt.Zh = !1, m.instance = null;
                }
            }, {
                key: "qh",
                value: function qh(t) {
                    this.Kh.visible = !1, this.Qs.visible = !t;
                }
            }]);
            return m;
        }(Laya.Scene);
    var w = new t();
    var d =
        /* */
        function() {
            function d() {
                _classCallCheck(this, d);
                wx.getGameServerManager ? (this.Ot = wx.getGameServerManager(), this.$h = {}, this.te = {},
                    this.se = !1, this.ie = 0, this.he = {}, this.ee(), this.ae()) : wx.showToast({
                    title: "",
                    icon: "none",
                    duration: 2e3
                });
            }
            _createClass(d, [{
                key: "ee",
                value: function ee() {
                    this.pe = !1, this.ne = 0, this.le = !1, this.oe = !1, this.re = [];
                }
            }, {
                key: "ae",
                value: function ae() {
                    var _this14 = this;
                    var t = this._e.bind(this),
                        s = this.fe.bind(this),
                        i = this.ye.bind(this),
                        h = this.ue.bind(this);
                    this.Ot.onSyncFrame(t), this.Ot.onRoomInfoChange(s), this.Ot.onGameStart(i), this.Ot.onGameEnd(h);
                    var e = function e() {
                        _this14.ce && _this14.Le ? _this14.Ot.login().then(function(t) {
                            _this14.ce = !1, _this14.Ot.reconnect({
                                accessInfo: _this14.ge
                            }).then(function(t) {
                                _this14.Le = !1, _this14.ye();
                            });
                        }) : (_this14.ce && _this14.Ot.login().then(function(t) {
                            _this14.ce = !1;
                        }), _this14.Le && _this14.Ot.reconnect({
                            accessInfo: _this14.ge
                        }).then(function(t) {
                            _this14.Le = !1, _this14.ye();
                        }));
                    };
                    wx.onNetworkStatusChange(function(t) {
                        t.isConnected && _this14.Ot && e();
                    }), this.Ot.onLogout(function() {
                        _this14.ce = !0, wx.getNetworkType({
                            success: function success(t) {
                                !("none" === t.networkType) && e();
                            }
                        });
                    }), this.Ot.onDisconnect(function(t) {
                        _this14.Le = !0, wx.getNetworkType({
                            success: function success(t) {
                                !("none" === t.networkType) && e();
                            }
                        });
                    }), wx.onShow(function() {
                        e();
                    });
                }
            }, {
                key: "me",
                value: function me(t) {
                    this.Ot.login().then(function() {
                        t && t();
                    });
                }
            }, {
                key: "we",
                value: function we() {
                    var _this15 = this;
                    this.Ot.createRoom({
                        maxMemberNum: 6,
                        startPercent: 0,
                        needUserInfo: !0
                    }).then(function(t) {
                        var s = t.data || {};
                        _this15.ge = s.accessInfo || "", _this15.de = s.clientId, _this15.se = !0, _this15.Se(),
                            m.instance && m.instance.qh(!0);
                    });
                }
            }, {
                key: "Fe",
                value: function Fe(t) {
                    var _this16 = this;
                    this.Ot.joinRoom({
                        accessInfo: t
                    }).then(function(s) {
                        _this16.ge = t;
                        var i = s.data || {};
                        _this16.de = i.clientId, _this16.se = !0, _this16.Se();
                    })["catch"](function(t) {
                        var s;
                        console.error(t), A.instance.Vh(),
                            wx.showToast({
                                title: s,
                                icon: "none",
                                duration: 2500
                            });
                    });
                }
            }, {
                key: "Me",
                value: function Me() {
                    var _this17 = this;
                    this.$h.memberList.length < 2 || (this.oe ? (wx.aldSendEvent(""), this.Ot.startGame(),
                        Laya.timer.once(2e3, this, function() {
                            _this17.pe || _this17.Ot.reconnect({
                                accessInfo: _this17.ge
                            }).then(function(t) {
                                _this17.ye();
                            });
                        })) : wx.showToast({
                        title: "",
                        icon: "none",
                        duration: 2e3
                    }));
                }
            }, {
                key: "ke",
                value: function ke(t) {
                    this.Ot.memberLeaveRoom().then(function(s) {
                        t && t();
                    });
                }
            }, {
                key: "xe",
                value: function xe(t) {
                    this.Ot.ownerLeaveRoom({
                        assignToMinPosNum: !0
                    }).then(function(s) {
                        t && t();
                    });
                }
            }, {
                key: "ve",
                value: function ve() {
                    var _this18 = this;
                    this.ee(), null != this.Ot && this.Ot.updateReadyStatus({
                        isReady: !1
                    }).then(function() {
                        var t = function t() {
                            _this18.$h = {}, _this18.te = {
                                role: 1
                            }, _this18.se = !1, _this18.Ot.logout();
                        };
                        1 == _this18.te.role ? _this18.xe(t) : _this18.ke(t);
                    });
                }
            }, {
                key: "Se",
                value: function Se() {
                    this.le || (this.Ot.updateReadyStatus({
                        isReady: !0
                    }), this.le = !0);
                }
            }, {
                key: "fe",
                value: function fe(t) {
                    var _this19 = this;
                    this.$h = t;
                    var s = t.memberList || [];
                    if (this.oe = !s.find(function(t) {
                            return !t.isReady;
                        }), s.length < 2 && m.instance && (m.instance.Kh.visible = !1), this.ie = s.length,
                        s.forEach(function(t, i) {
                            if (_this19.de === t.clientId && (_this19.te = t, 1 == _this19.te.role && m.instance && (m.instance.qh(!0),
                                    s.length >= 2 && (m.instance.Kh.visible = !0)), !t.isReady && _this19.le && _this19.Ot.updateReadyStatus({
                                    isReady: !0
                                })), i < 6 && m.instance) {
                                m.instance.Yh[i].visible = !0, m.instance.Yh[i].text = t.nickname;
                                var _s17 = t.headimg;
                                _s17 && m.instance.Hh[i].loadImage(_s17), 1 == t.role && m.instance.Hh[i].addChild(m.instance.Xh);
                            }
                        }), m.instance)
                        for (var _t12 = this.ie; _t12 < m.instance.Yh.length; _t12++) {
                            m.instance.Yh[_t12].visible = !1, m.instance.Hh[_t12].loadImage("img/touxiangkk.png");
                        }
                }
            }, {
                key: "ye",
                value: function ye() {}
            }, {
                key: "ue",
                value: function ue() {}
            }, {
                key: "be",
                value: function be() {
                    if (1 == this.te.role) {
                        var _t13 = 4,
                            _s18 = 0,
                            _i6 = [];
                        for (var _h9 = 0; _h9 < _t13; _h9++) {
                            var _t14 = w.u(Math.random() * A.instance.Gt.De);
                            33 == _t14 ? _s18 += 12 : 34 != _t14 && 35 != _t14 || (_s18 <= -12 ? _t14 = w.u(32 * Math.random()) : _s18 -= 12),
                                _i6.push(_t14);
                        }
                        var _h8 = [];
                        for (var _t15 = 0; _t15 < this.ie; _t15++) {
                            _h8.push(this.$h.memberList[_t15].clientId);
                        }
                        w.L(_h8), this.Ut([{
                            e: 3,
                            l: _i6,
                            p: 1,
                            s: _h8
                        }]);
                    }
                }
            }, {
                key: "_e",
                value: function _e(t) {
                    var _this20 = this;
                    this.ne = t.frameId, t.frameId > 1 && !this.pe && (this.pe = !0, this.be()), (t.actionList || []).forEach(function(t) {
                        var s = JSON.parse(t),
                            i = A.instance;
                        if (_this20.de != s.id) {
                            var _t16 = _this20.he["p" + s.id];
                            1 === s.e ? (_t16.Jt = s.v, _t16.wt = s.d) : 2 === s.e ? _t16.zt() : 5 === s.e && (i.Gt.os.push(_t16),
                                i.je.visible = !0, i.Gt.os.length >= _this20.ie ? i.Ae() : 0 == i.Gt.Ee && (i.Gt.Ee = 9e3));
                        }
                        if (3 === s.e) {
                            i.Be(_this20.ie);
                            var _t17 = {},
                                _h10 = 0;
                            for (var _s19 = 0; _s19 < _this20.ie; _s19++) {
                                _this20.de != _this20.$h.memberList[_s19].clientId && (i.Gt.Te[_h10].Z = _this20.$h.memberList[_s19].nickname,
                                    _t17["p" + _this20.$h.memberList[_s19].clientId] = i.Gt.Te[_h10], _h10++, i.Zt[_h10].y = _h10 % 2 == 0 ? 20 : 60);
                            }
                            i.Zt[0].y = 40;
                            for (var _t18 = 0; _t18 < i.Zt.length; _t18++) {
                                _t18 >= _this20.ie ? i.Zt[_t18].visible = !1 : i.Zt[_t18].visible = !0;
                            }
                            _this20.he = _t17;
                            var _e5 = s.s;
                            for (var _t19 = 0; _t19 < _this20.ie; _t19++) {
                                var _s20 = void 0;
                                _s20 = _t19 % 3 == 0 ? -1 : _t19 % 3 == 1 ? 1 : 0, _e5[_t19] == _this20.de ? i.wi.Lt = _s20 : _this20.he["p" + _e5[_t19]].Lt = _s20;
                            }
                            i.Gt.Ce = _this20.ie;
                            var _a5 = s.l;
                            i.Gi(_a5);
                        } else if (4 === s.e && (-1 == _this20.re.indexOf(s.id) && _this20.re.push(s.id),
                                _this20.re.length >= _this20.ie)) {
                            A.instance.Re.active = !1, A.instance.Re.getChildByName("Platform").active = !0,
                                A.instance.fs.removeChild(A.instance.Re), A.instance.It.active = !0;
                            var _t20 = A.instance.Ms;
                            for (var _s21 = 0; _s21 < _t20.length; _s21++) {
                                _t20[_s21].active = !0;
                                var _i7 = _t20[_s21].getChildAt(1).getComponent(Laya.Animator);
                                _i7 && _i7.play(null, 0, 0);
                            }
                            A.instance.Ls(), _this20.le = !1;
                        }
                    });
                }
            }, {
                key: "Ne",
                value: function Ne() {
                    var _this21 = this;
                    1 == this.te.role ? this.Ot.endGame().then(function() {
                        _this21.ee(), _this21.Ot.restart();
                    }) : this.ee();
                }
            }, {
                key: "Ut",
                value: function Ut(t) {
                    for (var _s22 = 0; _s22 < t.length; _s22++) {
                        var _i8 = t[_s22];
                        _i8.id = this.de, t[_s22] = JSON.stringify(_i8);
                    }
                    this.Ot.uploadFrame({
                        actionList: t
                    });
                }
            }]);
            return d;
        }();
    var S = new t();
    var F =
        /* */
        function(_L) {
            _inherits(F, _L);

            function F() {
                var _this22;
                _classCallCheck(this, F);
                _this22 = _possibleConstructorReturn(this, _getPrototypeOf(F).call(this)), _this22.Ie = wx.getOpenDataContext(),
                    _this22.Pe = _this22.Ie.canvas, _this22.ze = "Catch me!", _this22.We = "res/images/shareimg.jpg",
                    wx.showShareMenu({
                        withShareTicket: !0
                    }), _this22.Xi = !1, _this22.Qs = !1, _this22.Ge = "", _this22.Ue = "", _this22.Oe = {},
                    _this22.Ve = ["adunit-b3cf0e07b88f6f02"], _this22.Ye = !1;
                for (var _t21 = 0; _t21 < _this22.Ve.length; _t21++) {
                    _this22.He(_t21);
                }
                _this22.Ke = 0, _this22.Je = wx.createRewardedVideoAd({
                        adUnitId: "adunit-303a651d75a1829c"
                    }), _this22.Xe(), _this22.qe = null, _this22.Qe = 0, _this22.Ze(), _this22.$e = [],
                    _this22.ta = -1, _this22.sa = !1, _this22.ia = !1, _this22.ha = -1, _this22.ea = null,
                    _this22.aa(), wx.getGameServerManager && (_this22.Zi = !0), _this22.pa = !0;
                return _this22;
            }
            _createClass(F, [{
                key: "$i",
                value: function $i(t) {
                    var _this23 = this;
                    var s = 0,
                        i = function i() {
                            if (++s >= 2) {
                                wx.aldOnShareAppMessage(function() {
                                    return {
                                        title: _this23.ze,
                                        imageUrl: _this23.We
                                    };
                                }), wx.onShow(function(t) {
                                    _this23.th(t);
                                }), t.run();
                                try {
                                    wx.gameJump.login(function(t) {
                                        if (t && t.openid) {
                                            if (_this23.na = t.openid, _this23.la = t.token, _this23.oa = t.uid, _this23.ra = t.gamecfg,
                                                _this23._a = t.yztime, t.gamecfg && (_this23.qi = Number(t.gamecfg.wuchugailv),
                                                    _this23.Qi = Number(t.gamecfg.banneryanshi)), t.shipinjiesuo) {
                                                var _s23 = Number(t.shipinjiesuo);
                                                A.instance.Gt.di <= _s23 && (A.instance.Gt.Dh = _s23);
                                            }
                                            wx.gameJump.init(null, function() {
                                                _this23.Xi = !0;
                                            });
                                        }
                                    });
                                } catch (t) {
                                    console.error(t);
                                }
                            }
                        };
                    wx.loadSubpackage({
                        name: "res",
                        success: function success(t) {
                            i();
                        },
                        fail: function fail(t) {}
                    }), wx.loadSubpackage({
                        name: "utils",
                        success: function success(t) {
                            i();
                        },
                        fail: function fail(t) {}
                    });
                }
            }, {
                key: "th",
                value: function th(t) {
                    if (null == t && (t = wx.getLaunchOptionsSync()), t.query.pkroomid && (this.Ge = t.query.pkroomid,
                            A.instance)) {
                        if (wx.aldSendEvent(""), this.Ot && this.Ot.se) return;
                        A.instance.Gt.fa = !1, A.instance.Ri.visible = !1;
                        for (var _t22 = 0; _t22 < A.instance.Zt.length; _t22++) {
                            A.instance.Zt[_t22].removeSelf();
                        }
                        A.instance.ya(), A.instance.Gt.Zh ? (this.rh(), m.instance && this.oh()) : (Laya.Scene.open("scenes/room.scene"),
                            A.instance.Gt.Zh = !0);
                    }
                    t.query.shareMessageToFriendScene && wx.aldSendEvent("");
                }
            }, {
                key: "ws",
                value: function ws() {
                    wx.vibrateLong();
                }
            }, {
                key: "$t",
                value: function $t() {
                    wx.vibrateShort();
                }
            }, {
                key: "ah",
                value: function ah() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var h = {
                        title: this.ze,
                        imageUrl: this.We
                    };
                    t && (h.title = t), s && (h.imageUrl = s), i && (h.query = i), wx.aldShareAppMessage(h);
                }
            }, {
                key: "ph",
                value: function ph() {}
            }, {
                key: "nh",
                value: function nh() {}
            }, {
                key: "lh",
                value: function lh() {
                    return this.Pe;
                }
            }, {
                key: "rh",
                value: function rh() {
                    var _this24 = this;
                    wx.getSetting({
                        success: function success(t) {
                            var s = t.authSetting;
                            !0 === s["scope.userInfo"] ? _this24.ua() : (s["scope.userInfo"], _this24.ca());
                        }
                    });
                }
            }, {
                key: "ca",
                value: function ca() {
                    var _this25 = this;
                    var t = wx.createUserInfoButton({
                        type: "image",
                        image: "res/images/start.png",
                        style: {
                            left: window.innerWidth / 2 - 60,
                            top: window.innerHeight / 2 - 25,
                            width: 120,
                            height: 50
                        },
                        lang: "zh_CN"
                    });
                    this.La = t, t.onTap(function(s) {
                        if (s.errMsg.indexOf(":ok") > -1) {
                            t.destroy(), _this25.La = null, _this25.ua();
                            var _i9 = {
                                iv: s.iv,
                                encryptedData: s.encryptedData
                            };
                            LQSDK.gameauth(_i9);
                        } else wx.showToast({
                            title: "",
                            icon: "none",
                            duration: 1500
                        });
                    }), m.instance && (m.instance.Jh.visible = !0);
                }
            }, {
                key: "ua",
                value: function ua() {
                    var _this26 = this;
                    A.instance.Gt.Wt = !0, null == this.Ot && (this.Ot = new d()), "" != this.Ge ? this.Ot.me(function() {
                        _this26.Ot.Fe(_this26.Ge), _this26.Ge = "";
                    }) : this.Ot.se ? this.Ot.Se() : this.Ot.me(function() {
                        _this26.Ot.we();
                    }), m.instance && (m.instance.Jh.visible = !1);
                }
            }, {
                key: "_h",
                value: function _h() {
                    this.Ot && this.Ot.ve(), this.La && this.La.destroy();
                }
            }, {
                key: "oh",
                value: function oh() {
                    if (this.Ot && this.Ot.$h.memberList) {
                        for (var _t23 = 0; _t23 < this.Ot.$h.memberList.length; _t23++) {
                            var _s24 = this.Ot.$h.memberList[_t23];
                            m.instance.Yh[_t23].visible = !0, m.instance.Yh[_t23].text = _s24.nickname;
                            var _i10 = _s24.headimg;
                            _i10 && m.instance.Hh[_t23].loadImage(_i10), 1 == _s24.role && m.instance.Hh[_t23].addChild(m.instance.Xh);
                        }
                        1 == this.Ot.te.role && (m.instance.qh(!0), this.Ot.$h.memberList.length >= 2 && (m.instance.Kh.visible = !0));
                    }
                }
            }, {
                key: "fh",
                value: function fh() {
                    this.Ot && this.Ot.ge && this.ah("", null, "pkroomid=" + this.Ot.ge);
                }
            }, {
                key: "yh",
                value: function yh() {
                    this.Ot.Se();
                }
            }, {
                key: "uh",
                value: function uh() {
                    this.Ot.Me();
                }
            }, {
                key: "Lh",
                value: function Lh() {
                    this.Ot.Ne();
                }
            }, {
                key: "gh",
                value: function gh() {
                    A.instance.Gt.Wt || A.instance.Gt.Qt || (this.ga = A.instance.Gt.di + "." + A.instance.Gt.ma,
                        this.wa = "Level " + A.instance.Gt.di + "-" + A.instance.Gt.ma, wx.aldStage.onStart({
                            stageId: this.ga,
                            stageName: this.wa
                        }));
                }
            }, {
                key: "mh",
                value: function mh() {
                    if (A.instance.Gt.Wt || A.instance.Gt.Qt) return;
                    wx.aldStage.onEnd({
                        stageId: this.ga,
                        stageName: this.wa,
                        event: "fail"
                    });
                    var t = S.u(A.instance.Gt.da / 1e3);
                    wx.aldSendEvent("" + A.instance.Gt.di, {
                        "": t + ""
                    });
                }
            }, {
                key: "wh",
                value: function wh() {
                    if (A.instance.Gt.Wt || A.instance.Gt.Qt) return;
                    wx.aldStage.onEnd({
                        stageId: this.ga,
                        stageName: this.wa,
                        event: "complete"
                    });
                    var t = S.u(A.instance.Gt.da / 1e3);
                    wx.aldSendEvent("" + A.instance.Gt.di, {
                        "": t + ""
                    });
                }
            }, {
                key: "dh",
                value: function dh(t, s, i) {
                    wx.setUserCloudStorage({
                        KVDataList: [{
                            key: t,
                            value: JSON.stringify({
                                wxgame: {
                                    score: s,
                                    update_time: i
                                }
                            })
                        }]
                    });
                }
            }, {
                key: "Sh",
                value: function Sh() {
                    this.Pe.width = 600, this.Pe.height = 1500, this.Ie.postMessage({
                        event: "paihang",
                        shareTicket: ""
                    });
                }
            }, {
                key: "aa",
                value: function aa() {}
            }, {
                key: "Fh",
                value: function Fh() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                }
            }, {
                key: "Mh",
                value: function Mh() {}
            }, {
                key: "Ze",
                value: function Ze() {}
            }, {
                key: "He",
                value: function He(t) {}
            }, {
                key: "Ai",
                value: function Ai() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                    try {
                        wx.gameJump.showBanner(s);
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Ti",
                value: function Ti() {
                    try {
                        wx.gameJump.hideBanner();
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Xe",
                value: function Xe() {
                    var _this27 = this;
                    this.Je.onError(function(t) {
                        _this27.ah(), A.instance.Gt.Sa = !1, Laya.timer.once(1e3, _this27, function() {
                            1 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "kh", _this27).call(_this27) : 2 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "Li", _this27).call(_this27) : 3 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "bh", _this27).call(_this27) : 4 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "xi", _this27).call(_this27) : 5 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "Bh", _this27).call(_this27) : 6 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "Pi", _this27).call(_this27) : 7 == _this27.Ke && _get(_getPrototypeOf(F.prototype), "Ki", _this27).call(_this27);
                        });
                    }), this.Je.onClose(function(t) {
                        (t && t.isEnded || void 0 === t) && (1 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "kh", _this27).call(_this27) : 2 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "Li", _this27).call(_this27) : 3 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "bh", _this27).call(_this27) : 4 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "xi", _this27).call(_this27) : 5 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "Bh", _this27).call(_this27) : 6 == _this27.Ke ? _get(_getPrototypeOf(F.prototype), "Pi", _this27).call(_this27) : 7 == _this27.Ke && _get(_getPrototypeOf(F.prototype), "Ki", _this27).call(_this27)),
                        A.instance.Gt.Sa = !1, 1 == _this27.Ke && _this27.Ai();
                    });
                }
            }, {
                key: "Fa",
                value: function Fa(t) {
                    var _this28 = this;
                    this.Ke = t, A.instance.Gt.Sa = !0, this.Ti(), this.Je.show()["catch"](function(t) {
                        _this28.Je.load().then(function() {
                            return _this28.Je.show();
                        });
                    });
                }
            }, {
                key: "kh",
                value: function kh() {
                    this.Fa(1);
                }
            }, {
                key: "Li",
                value: function Li() {
                    this.Fa(2);
                }
            }, {
                key: "bh",
                value: function bh() {
                    this.Fa(3);
                }
            }, {
                key: "xi",
                value: function xi() {
                    this.Fa(4);
                }
            }, {
                key: "Bh",
                value: function Bh() {
                    this.Fa(5);
                }
            }, {
                key: "Pi",
                value: function Pi() {
                    this.Fa(6);
                }
            }, {
                key: "Ki",
                value: function Ki() {
                    this.Fa(7);
                }
            }, {
                key: "Th",
                value: function Th(t) {
                    wx.setKeepScreenOn({
                        keepScreenOn: t
                    });
                }
            }, {
                key: "Ch",
                value: function Ch() {}
            }, {
                key: "Rh",
                value: function Rh() {
                    wx.triggerGC(), this.Ma = !0, this.ka();
                }
            }, {
                key: "ka",
                value: function ka() {
                    this.Xi ? this.Ma && (this.Ih(), this.zh(), this.pa ? this.pa = !1 : wx.gameJump.showExhibitionView()) : Laya.timer.once(100, this, this.ka);
                }
            }, {
                key: "Nh",
                value: function Nh() {
                    this.Ma = !1, this.Xi && (this.Ph(), this.Wh());
                }
            }, {
                key: "Ei",
                value: function Ei(t) {
                    try {
                        this.Xi && wx.gameJump.showTopGame(t);
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Bi",
                value: function Bi() {
                    try {
                        wx.gameJump.hideTopGame();
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Ih",
                value: function Ih(t) {
                    try {
                        this.Xi && wx.gameJump.showDownGame(t);
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Ph",
                value: function Ph() {
                    try {
                        wx.gameJump.hideDownGame();
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "zh",
                value: function zh(t) {
                    try {
                        this.Xi && wx.gameJump.cblShow(t);
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Wh",
                value: function Wh() {
                    try {
                        wx.gameJump.cblHide();
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Gh",
                value: function Gh(t, s) {
                    try {
                        this.Xi && wx.gameJump.showSettlementView(t, s);
                    } catch (t) {
                        console.error(t);
                    }
                }
            }, {
                key: "Uh",
                value: function Uh(t) {
                    if (this.Xi) {
                        this.Ph();
                        try {
                            wx.gameJump.showImitationView(null, t);
                        } catch (t) {
                            console.error(t);
                        }
                    }
                }
            }, {
                key: "Oh",
                value: function Oh() {
                    try {
                        this.Xi && wx.gameJump.showGameListView(!1);
                    } catch (t) {
                        console.error(t);
                    }
                }
            }]);
            return F;
        }(L);
    var M = new t();
    var k =
        /* */
        function(_Laya$Scene5) {
            _inherits(k, _Laya$Scene5);

            function k() {
                var _this29;
                _classCallCheck(this, k);
                _this29 = _possibleConstructorReturn(this, _getPrototypeOf(k).call(this)), k.instance = _assertThisInitialized(_this29);
                return _this29;
            }
            _createClass(k, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this30 = this;
                    this.y = i.H, this.btn.on(Laya.Event.CLICK, this, function(t) {
                            platform.getInstance().showInterstitial(() => { //zs
                                t.stopPropagation(), _this30.xa(Laya.Handler.create(_this30, function() {
                                    A.instance.Gt.Dh <= A.instance.Gt.di ? Laya.Scene.open("scenes/lockms.scene") : A.instance.Gt.va > 0 && A.instance.Gt.di >= 3 && A.instance.Gt.di % 3 == 1 && A.instance.ba() ? (A.instance.Gt.vi += 10,
                                        A.instance.Da()) : A.instance.ji();
                                }));
                            })
                        }), this.skin.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), _this30.xa(Laya.Handler.create(_this30, function() {
                                A.instance.Gt.ja = !1, A.instance.bi();
                            }));
                        }), this.sort.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), _this30.xa(Laya.Handler.create(_this30, function() {
                                A.instance.Sh();
                            }));
                        }), this.fight.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), _this30.xa(Laya.Handler.create(_this30, function() {
                                A.instance.Gt.Aa = !1, A.instance.Ea();
                            }));
                        }), this.marathon.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), _this30.xa(Laya.Handler.create(_this30, function() {
                                var t = Date.now() - A.instance.Gt.Ui;
                                t < A.instance.Gt.Oi ? A.instance.ci("The next marathon will start in " + M.u((A.instance.Gt.Oi - t) / 6e4) + "minutes.") : i.J.Bh();
                            }));
                        }), this.Ri = new Laya.Sprite(), this.addChild(this.Ri), this.Ri.visible = !1, this.Ri.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "rgba(0,0,0,0.6)"),
                        this.Ri.size(Laya.stage.width, Laya.stage.height), this.Ri.y = -this.y, this.Ri.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), c.instance && c.instance.close(), _this30.Ri.visible = !1,
                                window.wx && wx.gameJump.showExhibitionView();
                        }), this.rili.on(Laya.Event.CLICK, this, function(t) {
                            _this30.xa(Laya.Handler.create(_this30, function() {
                                _this30.visible = !0, _this30.Ri.visible = !0, Laya.Dialog.open("scenes/signin.scene");
                            }));
                        }), null == i.U && (this.rili.visible = !0), this.btn.y += i.H, this.fight.y += i.H,
                        this.sort.y += i.H, this.skin.y += i.H, this.marathon.y += i.H, this.rili.y += i.H,
                        this.coin.singleCharRender = !0, this.btn.graphics.drawPath(0, 0, M.m(this.btn.width, this.btn.height, 12), {
                            fillStyle: "rgba(0,0,0,0.5)"
                        }, {
                            strokeStyle: "#ffffff",
                            lineWidth: 2
                        }), this.btn.addComponent(_), this.coink.graphics.drawPath(0, 0, M.m(this.coink.width, this.coink.height, 12), {
                            fillStyle: "#505050"
                        }), this.coink.y -= i.H;
                    var t = new Laya.Sprite();
                    t.graphics.drawPath(0, 0, M.m(this.marathon.width, this.marathon.height, 12), {
                            fillStyle: "#00EBF3"
                        }, {
                            strokeStyle: "#000000",
                            lineWidth: 4
                        }), this.marathon.addChildAt(t, 0), this.timetxt.singleCharRender = !0, A.instance.Gt.ja || (this.skin.getChildByName("reddot").visible = !1),
                        A.instance.Gt.Aa || (this.fight.getChildByName("reddot").visible = !1), Laya.timer.loop(1e3, this, this.G),
                        Laya.timer.frameLoop(1, this, this.Ba), Laya.stage.frameRate = Laya.Stage.FRAME_SLOW,
                        Laya.timer.once(5, this, function() {
                            null == i.J ? (window.wx ? i.J = new F() : i.J = new L(), A.instance.Ta(), A.instance.Ca(1),
                                _this30.coin.text = A.instance.Gt.Ys, i.J.$i(Laya.Handler.create(_this30, _this30.Ra))) : (A.instance.Ca(1),
                                _this30.coin.text = A.instance.Gt.Ys), _this30.cachesp.cacheAs = "bitmap", i.J.Rh();
                        });
                }
            }, {
                key: "Ra",
                value: function Ra() {
                    var _this31 = this;
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, function() {
                        window.wx ? (i.numfont = wx.loadFont("res/font/numfont.ttf"), _this31.Na()) : Laya.loader.load(["res/font/numfont.ttf"], Laya.Handler.create(_this31, _this31.Na), null, Laya.Loader.TTF);
                    }));
                }
            }, {
                key: "Na",
                value: function Na() {
                    A.instance.$i();
                }
            }, {
                key: "onDisable",
                value: function onDisable() {}
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    Laya.timer.clear(this, this.G), Laya.timer.clear(this, this.Ba), Laya.stage.frameRate = Laya.Stage.FRAME_FAST,
                        i.J.Nh(), A.instance.Ia(), k.instance = null, A.instance.Pa && (A.instance.Pa.destroy(),
                            A.instance.Pa = null, A.instance.It && (A.instance.It.active = !0, A.instance.wi.tt = "",
                                A.instance.wi._s("Idle"), A.instance.za.active = !0));
                }
            }, {
                key: "xa",
                value: function xa(t) {
                    i.U ? (i.O = .01, i.X = t, Laya.timer.loop(60, null, i.G), Laya.stage.addChild(i.U),
                        A.instance.fs.active = !1, this.visible = !1, A.instance.Ia(), A.instance.Pa.active = !1) : t.run();
                }
            }, {
                key: "G",
                value: function G() {
                    if (A.instance.Gt) {
                        var _t24 = Date.now() - A.instance.Gt.Ui;
                        _t24 < A.instance.Gt.Oi ? (this.ticket.visible = !1, this.timekk.visible = !0, this.timetxt.text = M.i(M._((A.instance.Gt.Oi - _t24) / 1e3))) : (this.ticket.visible = !0,
                            this.timekk.visible = !1), this.rili.visible || null != i.U || (this.rili.visible = !0);
                    }
                }
            }, {
                key: "Ba",
                value: function Ba() {
                    A.instance.Gt;
                }
            }]);
            return k;
        }(Laya.Scene);
    var x = new t();

    function v() {
        this.fa = !1, this.Xt = !1, this.da = 0, this.pa = !0, this.Sa = !1, this.vt = new Laya.Vector3(0, 0, 0),
            this.Wa = new Laya.Vector3(1, 1, 1), this.di = 1, this.Ga = 1, this.Ua = [], this.Dh = 10,
            this.Ys = 0, this.xh = 0, this.va = 0, this.Qh = [null, null], this.Oa = [null, null, null],
            this.Te = [null, null, null, null, null], this.ma = 0, this.Va = [], this.Ya = 0,
            this.os = [], this.Qt = !1, this.Ha = 0, this.Ka = 0, this.Oi = 3e5, this.Ja = 0,
            this.Ui = 0, this.ja = !0, this.Aa = !0, this.Ce = 0, this.Wt = !1, this.Zh = !1,
            this.Ee = 0, this.Xa = [], this.qa = [], this.Qa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
            this.fi = 1, this.yi = "Dance1", this.Eh = ["#F9BF04", "#FD55CF", "#0495FE", "#1BE203", "#FD3747", "#58FB1E", "#79809A", "#FD6889", "#4FA3C6", "#F27F25", "#FDB718", "#FBBC63", "#FFB621", "#37CAFD", "#0091F4", "#EF2221", "#212021", "#FF2B29", "#EF2221", "#C30376", "#ffffff", "#fd7199", "#1e2eff", "#c50f76", "#787878", "#ffffff", "#ffa21e", "#5a34ff"],
            this._i = [
                [],
                []
            ], this.vi = 0, this.jh = "", this.Za = [
                [7, 6],
                [9, 10],
                [3, 4],
                [5, 33],
                [31, 31],
                [8, 8],
                [9, 34, 19],
                [27, 16],
                [21, 35, 20],
                [22, 10],
                [25, 34, 12]
            ],
            this.De = 35, this.$a = [
                [1e3, 60, 1e3, 9e3, 60, 10],
                [1e3, 30, 5e3, 5e3, 50, 10],
                [0, 50, 2e3, 5e3, 40, 10],
                [500, 40, 1e3, 4e3, 40, 10],
                [500, 30, 1e3, 3e3, 30, 10],
                [0, 0, 0, 0, 0, 0]
            ],
            this.Hi = "", this.Yi = 0;
    }

    function b(t) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var h = arguments.length > 3 ? arguments[3] : undefined;
        var e = arguments.length > 4 ? arguments[4] : undefined;
        var a;
        return t instanceof Laya.Sprite ? a = t : "" == t ? a = new Laya.Sprite() : (a = Laya.Sprite.fromImage(t),
            h && a.size(h, e)), a.pos(s, i), a;
    }

    function D(t) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        this.tp = new b(t, s, i);
    }
    var j = new function() {
        var t = {},
            s = this;
        this.ip = function() {
            console.log(t);
        }, this.Xi = function(t, s) {
            return t.Ts = 1, t.tp.visible = !0, null != s && s.addChild(t.tp), t;
        }, this.hp = function(t) {
            return t.Ts = 0, t.tp.visible = !1, null != t.tp.parent && t.tp.removeSelf(), t;
        }, this.ep = function(i, h) {
            null == t[i] && (t[i] = []);
            for (var e = t[i], a = 0; a < e.length; a++) {
                if ((p = e[a]).Ts <= 0) return s.Xi(p, h);
            }
            var p;
            return (p = function(t) {
                return new D({
                    sp: ""
                }[t]);
            }(i)).ap = i, e.push(p), s.Xi(p, h);
        };
    }();
    var A =
        /* */
        function() {
            function A() {
                _classCallCheck(this, A);
                A.instance = this, this.Gt = new v(), Laya.loader.create("initres/start.lh", Laya.Handler.create(this, this.pp));
            }
            _createClass(A, [{
                key: "pp",
                value: function pp() {
                    Laya.stage.height > 1334 && (i.H = .5 * (Laya.stage.height - 1334),
                            i.K = i.H - x._(750 / window.innerWidth * 50), i.K < 0 && (i.K = 0));
                    var t = Laya.stage.addChildAt(new Laya.Scene3D(), 0);
                    this.fs = t, t.ambientColor = new Laya.Vector3(.6544118, .6544118, .6544118), t.enableFog = !0,
                        t.fogStart = 150, t.fogRange = 50, t.fogColor = new Laya.Vector3(.6627451, .9294118, 1);
                    var s = t.addChild(new Laya.Sprite3D()),
                        h = s.addChild(new Laya.Sprite3D()),
                        e = h.addChild(new Laya.Camera(0, .3, 1e3));
                    e.clearColor = new Laya.Vector4(.6627451, .9294118, 1, 1), e.transform.localRotationEulerY = 180,
                        s.transform.position = new Laya.Vector3(0, 0, 1.22), s.transform.localRotationEulerX = 25,
                        h.transform.position = new Laya.Vector3(0, 8.569, -9.348), this.np = s, this.lp = h,
                        this.ts = e;
                    var a = t.addChild(new Laya.DirectionLight());
                    a.color = new Laya.Vector3(.6764706, .6764706, .6764706), a.transform.rotation = new Laya.Quaternion(-.1587274, .7798937, .6023679, .06102809),
                        a.intensity = .6, this.op = a, this.Pa = t.addChild(Laya.Loader.getRes("initres/start.lh")),
                        this.Pa && (this.Pa.getChildByName("sea").meshFilter.sharedMesh = Laya.PrimitiveMesh.createPlane(1, 1, 1, 1),
                            this.Pa.getChildByName("Player").getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(.98, .75, 0, 1));
                        platform.getInstance().startup("Fun-Race-3d", "", () => { //zs
                            Laya.Scene.open("scenes/menu.scene");
                            i.U && (Laya.timer.clear(null, i.G), i.U.removeSelf());
                        });

                }
            }, {
                key: "Ta",
                value: function Ta() {
                    this.tp = new Laya.Sprite(), Laya.stage.addChildAt(this.tp, 1), this.rp(), this._p = new Laya.Sprite(),
                        this._p.graphics.drawPath(0, 0, x.m(100, 100, 8), {
                            fillStyle: "#FB9738"
                        }, {
                            strokeStyle: "#ffffff",
                            lineWidth: 6
                        }), this.fp = x.F(this.Gt.di, {
                            fontFamily: "Arial",
                            fontSize: 50,
                            fill: "#000000",
                            align: "center",
                            valign: "middle",
                            w: 100,
                            h: 100
                        }), this.fp.bold = !0, this.fp.singleCharRender = !0, this._p.addChild(this.fp),
                        this.tp.addChild(this._p.pos(175, 600)), this.yp = new Laya.Sprite(), this.yp.graphics.drawPath(0, 0, x.m(100, 100, 8), {
                            fillStyle: "#A2BFCF"
                        }, {
                            strokeStyle: "#ffffff",
                            lineWidth: 6
                        }), this.up = x.F(this.Gt.di + 1, {
                            fontFamily: "Arial",
                            fontSize: 50,
                            fill: "#000000",
                            align: "center",
                            valign: "middle",
                            w: 100,
                            h: 100
                        }), this.up.bold = !0, this.up.singleCharRender = !0, this.yp.addChild(this.up),
                        this.tp.addChild(this.yp.pos(475, 600)), this.cp = new Laya.Sprite(), this.tp.addChild(this.cp.pos(275, 615));
                }
            }, {
                key: "$i",
                value: function $i() {
                    var _this32 = this;
                    Laya.Texture2D.load("res/skin/" + this.Gt.fi + ".jpg", Laya.Handler.create(null, function(t) {
                            _this32.Pa && (_this32.Pa.getChildByName("Player").getChildByName("Man").skinnedMeshRenderer.material.albedoColor = _this32.Gt.Wa,
                                _this32.Pa.getChildByName("Player").getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t);
                        })), this.Ri = new Laya.Sprite(), this.tp.addChildAt(this.Ri, 0), this.Ri.visible = !1,
                        this.Ri.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "rgba(0,0,0,0.6)"),
                        this.Ri.size(Laya.stage.width, Laya.stage.height), this.Ri.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation();
                        }), this.Lp = new Laya.Sprite(), this.gp = [];
                    var t, s = Laya.Sprite.fromImage("img/n1.png");
                    s.pivotX = 20, this.gp.push(s), (s = Laya.Sprite.fromImage("img/n2.png")).pivotX = 33,
                        this.gp.push(s), (s = Laya.Sprite.fromImage("img/n3.png")).pivotX = 28, this.gp.push(s),
                        (s = Laya.Sprite.fromImage("img/go.png")).pivotX = 65.5, this.gp.push(s);
                    for (var _t25 = 0; _t25 < this.gp.length; _t25++) {
                        this.gp[_t25].pos(375, 300 + i.H), this.gp[_t25].scale(1.5, 1.5, !0), this.gp[_t25].visible = !1,
                            this.tp.addChild(this.gp[_t25]);
                    }
                    t = window.wx ? i.numfont : "numfont", this.mp = x.F("0", {
                            fontFamily: t,
                            fontSize: 48,
                            fill: "#ffffff",
                            align: "center",
                            w: 200
                        }), this.mp.visible = !1, this.mp.singleCharRender = !0, this.tp.addChild(this.mp.pos(275, 150)),
                        this.je = x.F("0", {
                            fontFamily: t,
                            fontSize: 100,
                            fill: "#FFDE02",
                            align: "center",
                            valign: "middle",
                            w: 200,
                            h: 160
                        }), this.je.visible = !1, this.je.singleCharRender = !0, this.tp.addChild(this.je.pivot(100, 80).pos(375, 500)),
                        this.Zt = [];
                    for (var _t26 = 0; _t26 < 6; _t26++) {
                        var _s25 = new Laya.Sprite(),
                            _i11 = Laya.Sprite.fromImage("img/eye.png");
                        _s25.addChild(_i11.pos(-20, -20)), 0 == _t26 ? _s25.graphics.drawCircle(0, 0, 20, this.Gt.Eh[this.Gt.fi - 1]) : _s25.scale(.75, .75),
                            _s25.cacheAs = "bitmap", _t26 > 2 && (_s25.visible = !1), this.Zt[_t26] = _s25;
                    }
                    this.wp = [];
                    for (var _t27 = 0; _t27 < 3; _t27++) {
                        var _s26 = x.F("YOU", {
                            fontFamily: "Arial",
                            fontSize: 40,
                            fill: "#000000",
                            align: "center",
                            w: 230
                        });
                        _s26.singleCharRender = !0, _s26.y = 300 + i.H, _s26.visible = !1, this.tp.addChild(_s26),
                            this.wp[_t27] = _s26;
                    }
                    this.qs = new Laya.Sprite(), this.qs.graphics.drawPath(0, 0, x.m(700, 100, 12), {
                            fillStyle: "rgba(0,0,0,0.6)"
                        }), this.Qs = x.F("0", {
                            fontFamily: "Arial",
                            fontSize: 40,
                            fill: "#ffffff",
                            align: "center",
                            valign: "middle",
                            wordWrap: true,
                            w: 700,
                            h: 100
                        }), this.Qs.singleCharRender = !0, this.qs.addChild(this.Qs), this.qs.pos(25, 620 + i.H),
                        this.dp = 0, this.ss = [], this.Sp = new Laya.Vector3(0, 0, -.02), this.bt = new Laya.Vector3(0, 0, 0),
                        this.Fp = -1e3, this.Mp = -1;
                    var h = [];
                    h.push("res/Assets/kp/Materials/Sea.lmat"), h.push("res/Assets/kp/Animation/Sea-Sea.lani"),
                        h.push("res/start.lh"), h.push("res/end.lh"), h.push("res/player.lh"), h.push("res/platform.lh"),
                        h.push("res/skin.lh"), h.push("res/fallwater.lh"), Laya.loader.create(h, Laya.Handler.create(this, this.Xi), Laya.Handler.create(this, function(t) {
                            i.W(.5 + .3 * t);
                        }));
                }
            }, {
                key: "Xi",
                value: function Xi() {
                    var _this33 = this;
                    var t = this.fs,
                        s = this.op;
                    s.shadow = !0, s.shadowDistance = 30, s.shadowPCFType = 0, s.shadowPSSMCount = 1,
                        s.shadowResolution = 1024;
                    var h = t.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(1, 1, 1, 1)));
                    h.transform.setWorldLossyScale(new Laya.Vector3(800, 800, 800)), h.transform.translate(new Laya.Vector3(0, -14, 0));
                    var a = Laya.Loader.getRes("res/Assets/kp/Materials/Sea.lmat");
                    h.meshRenderer.material = a;
                    var p = Laya.Loader.getRes("res/Assets/kp/Animation/Sea-Sea.lani"),
                        n = new Laya.AnimatorState();
                    n.name = "sea", n.clip = p;
                    var l = h.addComponent(Laya.Animator),
                        o = new Laya.AnimatorControllerLayer("BaseLayer");
                    l.addControllerLayer(o), o.addState(n), l.play("sea"), h.active = !1, this.za = h;
                    var r = t.addChild(new Laya.Sprite3D());
                    r.transform.localPositionZ = -10, r.addChild(Laya.Loader.getRes("res/player.lh")),
                        r.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.castShadow = !0, this.Gt.Qh[0] = t.addChild(r.clone()),
                        this.Gt.Qh[1] = t.addChild(r.clone()), this.wi = r.addComponent(e), this.wi.Bt = this.Gt.yi,
                        this.Gt.Qh[0].addComponent(e), this.Gt.Qh[1].addComponent(e);
                    for (var _t28 = 0; _t28 < this.Gt.Qh.length; _t28++) {
                        var _s27 = this.Gt.Qh[_t28].getComponent(e);
                        _s27.q = _t28, _s27.Z = "ai_" + _t28, this.Gt.Te[_t28] = _s27;
                    }
                    Laya.Texture2D.load("res/skin/" + this.Gt.fi + ".jpg", Laya.Handler.create(null, function(t) {
                            r.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                        })), Laya.Texture2D.load("res/skin/4.jpg", Laya.Handler.create(null, function(t) {
                            _this33.Gt.Qh[0].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t,
                                _this33.Gt.Qh[1].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                        })), this.It = r, this.kp = Laya.Loader.getRes("res/start.lh"), this.xp = Laya.Loader.getRes("res/end.lh"),
                        this.vp = Laya.Loader.getRes("res/platform.lh"), this.vp.getChildByName("Bg").meshFilter.sharedMesh = Laya.PrimitiveMesh.createPlane(1, 1, 1, 1),
                        this.vp.getChildByName("Bg").transform.localRotationEulerX = -90, this.Re = Laya.Loader.getRes("res/skin.lh"),
                        this.Re.getChildByName("Bg").meshFilter.sharedMesh = Laya.PrimitiveMesh.createPlane(1, 1, 1, 1),
                        this.Re.getChildByName("Bg").transform.localRotationEulerX = -90, this.ys = Laya.Loader.getRes("res/fallwater.lh"),
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, function() {
                            _this33.Gt.fa && _this33.Yt && (_this33.wi.Jt = !1, _this33.Gt.Wt && i.J.Ot.Ut([{
                                e: 1,
                                v: !1,
                                d: x._(1e3 * _this33.wi.wt) / 1e3
                            }]));
                        }), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function() {
                            _this33.Gt.fa && _this33.Yt && (_this33.wi.Jt = !0, _this33.Gt.Wt && i.J.Ot.Ut([{
                                e: 1,
                                v: !0,
                                d: x._(1e3 * _this33.wi.wt) / 1e3
                            }]));
                        }), Laya.timer.frameLoop(1, this, this.G), this.Gi();
                }
            }, {
                key: "Gi",
                value: function Gi() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    if (this.Yt = !1, this.Ms && this.Ms.length > 0)
                        for (var _t29 = 1; _t29 < this.Ms.length - 1; _t29++) {
                            this.Ms[_t29].destroy();
                        }
                    var s = this.Gt.Za,
                        h = [];
                    if (t)
                        for (var _s28 = 0; _s28 < t.length; _s28++) {
                            h.push("res/Level" + t[_s28] + ".lh");
                        } else if (this.Gt.Ga > s.length)
                            for (var _t30 = 0; _t30 < this.Gt.Ua.length; _t30++) {
                                h.push("res/Level" + this.Gt.Ua[_t30] + ".lh");
                            } else
                                for (var _t31 = 0; _t31 < s[this.Gt.Ga - 1].length; _t31++) {
                                    h.push("res/Level" + s[this.Gt.Ga - 1][_t31] + ".lh");
                                }
                    this.bp = h, Laya.loader.create(h, Laya.Handler.create(this, this.Dp), Laya.Handler.create(this, function(t) {
                        i.W(.8 + .2 * t);
                    }));
                }
            }, {
                key: "Dp",
                value: function Dp() {
                    var _this34 = this;
                    var s = this.fs;
                    this.Gt.qa = [];
                    var h = [],
                        a = {
                            qt: 0,
                            Ss: [],
                            ms: [],
                            Fs: [],
                            es: [],
                            ps: [],
                            ds: [0],
                            xs: []
                        },
                        p = this.bp.length + 2,
                        n = [];
                    for (var _i12 = 0; _i12 < p; _i12++) {
                        var _e6 = void 0;
                        this.Gt.qa[_i12] = 0, 0 == _i12 ? _e6 = this.kp : _i12 == p - 1 ? _e6 = this.xp : n.indexOf(this.bp[_i12 - 1].url) > -1 ? _e6 = Laya.Loader.getRes(this.bp[_i12 - 1].url).clone() : (_e6 = Laya.Loader.getRes(this.bp[_i12 - 1].url),
                            n.push(this.bp[_i12 - 1].url)), _e6.active = !0, s.addChild(_e6), _i12 > 0 && (_e6.transform.position = a.ms[a.ms.length - 1],
                            _e6.transform.localRotationEulerY = -(a.Fs[a.Fs.length - 1] - 90), _e6.transform.translate(this.Sp));
                        var _l3 = _e6.getChildByName("Line"),
                            _o3 = _l3.numChildren;
                        _i12 == p - 1 && (_o3 = 2);
                        for (var _s29 = 0; _s29 < _o3; _s29++) {
                            if (_s29 > 0 || 0 == _i12) {
                                a.ms.push(_l3.getChildAt(_s29).transform.position), a.Fs.push(0), a.Ss.push(0),
                                    a.es.push(_l3.getChildAt(_s29).name), a.ps.push(_i12);
                                var _h11 = a.Fs.length;
                                if (_h11 > 1) {
                                    var _s30 = a.ms[_h11 - 1].x - a.ms[_h11 - 2].x,
                                        _i13 = a.ms[_h11 - 1].z - a.ms[_h11 - 2].z,
                                        _e7 = x.k(_s30, _i13);
                                    0 == _e7 && (_e7 = .001);
                                    var _p4 = Math.acos(_s30 / _e7);
                                    _i13 < 0 && (_p4 = 2 * Math.PI - _p4), _e7 = x.k(_e7, a.ms[_h11 - 1].y - a.ms[_h11 - 2].y),
                                        _p4 *= t.A, a.Fs[_h11 - 2] = a.Fs[_h11 - 1] = _p4, a.qt += _e7, a.Ss[_h11 - 1] = a.qt;
                                }
                                1 == _s29 && _i12 > 0 && (a.ps[_h11 - 2] = _i12);
                            } else a.es[a.es.length - 1] = _l3.getChildAt(_s29).name;
                        }
                        h[_i12] = _e6, a.ds.push(a.qt), _e6.getChildByName("Stage").getChildByName("Road").meshRenderer.receiveShadow = !0,
                            a.xs[_i12] = [];
                        var _r3 = _e6.getChildByName("Stage");
                        for (var _t32 = 0; _t32 < _r3.numChildren; _t32++) {
                            var _s31 = _r3.getChildAt(_t32);
                            if (_s31.name.startsWith("B") && (_s31.meshRenderer.castShadow = !0), "Danger" == _s31.name) {
                                var _t33 = _s31.numChildren;
                                for (var _h12 = 0; _h12 < _t33; _h12++) {
                                    var _t34 = _s31.getChildAt(_h12);
                                    a.xs[_i12].push(_t34);
                                }
                            }
                        }
                        _i12 < 2 && this.jp(_e6);
                    }
                    if (this.Ms = h, this.Vt = a, 0 == this.Gt.ma ? this.Gt.di < 3 ? this.Gt.ma = 1 : this.Gt.ma = 2 : this.Gt.ma > 2 && (this.Gt.ma = 2),
                        this.Gt.Wt) this.Gt.ma = 1;
                    else {
                        var _t35 = this.Ni();
                        x.L(this.Gt.Qa);
                        var _s32 = 0;
                        var _loop = function _loop(_i14) {
                            _this34.Gt.Qa[_i14] == _this34.Gt.fi && (_s32 = 1);
                            var h = _this34.Gt.Qa[_i14 + _s32];
                            Laya.Texture2D.load("res/skin/" + h + ".jpg", Laya.Handler.create(null, function(t) {
                                _this34.Gt.Qh[_i14].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                            }));
                            var a = _this34.Gt.Qh[_i14].getComponent(e);
                            a.Z = _t35[_i14], a.Bt = "Dance" + x.u(12 * Math.random()), _this34.Zt[_i14 + 1].graphics.clear(),
                                _this34.Zt[_i14 + 1].graphics.drawCircle(0, 0, 20, _this34.Gt.Eh[h - 1]);
                        };
                        for (var _i14 = 0; _i14 < this.Gt.ma; _i14++) {
                            _loop(_i14);
                        }
                    }
                    this.Gt.Va = [0, 1], this.Ap(), i.U && (Laya.timer.clear(null, i.G), i.U.removeSelf(),
                        i.U.destroy(), i.U = null, this.fs.active = !0), i.X ? (i.X.run(), i.X = null, this.Gt.pa = !1) : this.Gt.Wt ? i.J.Ot.Ut([{
                        e: 4
                    }]) : k.instance ? this.Gt.pa && (this.Gt.pa = !1, i.J.th(), Laya.timer.once(100, this, function() {
                        x.t(!1) != _this34.Gt.Hi && k.instance && (k.instance.Ri.visible = !0, Laya.Dialog.open("scenes/signin.scene"));
                    })) : Laya.Scene.open("scenes/menu.scene");
                }
            }, {
                key: "jp",
                value: function jp(t) {
                    var s = t.getChildByName("Stage");
                    if (s)
                        for (var _t36 = 0; _t36 < s.numChildren; _t36++) {
                            var _i15 = s.getChildAt(_t36);
                            if ("Ground" == _i15.name || _i15.name.startsWith("B")) {
                                var _t37 = _i15.numChildren;
                                for (var _s33 = 0; _s33 < _t37; _s33++) {
                                    var _t38 = _i15.getChildAt(_s33),
                                        _h13 = _t38.getComponent(Laya.Rigidbody3D);
                                    if (null == _h13) {
                                        _h13 = _t38.addComponent(Laya.Rigidbody3D);
                                        var _s34 = new Laya.BoxColliderShape(1, 1, 1);
                                        _h13.colliderShape = _s34, _h13.friction = 0, _h13.isKinematic = !0;
                                    }
                                }
                            }
                        }
                }
            }, {
                key: "ns",
                value: function ns(t) {
                    t > 0 && (this.Gt.qa[t - 1]++, t >= 2 && this.Gt.qa[t - 2] >= this.Gt.ma + 1 && this.Gt.qa[t - 1] >= this.Gt.ma + 1 && this.Ms[t - 2] && (this.Ms[t - 2].active = !1)),
                        ++t < this.Ms.length - 1 && -1 == this.Gt.Xa.indexOf(t) && (this.Gt.Xa.push(t),
                            this.jp(this.Ms[t]));
                }
            }, {
                key: "Ap",
                value: function Ap() {
                    if (this.Gt.Qh[0].active = !1, this.Gt.Qh[1].active = !1, this.kt = 0, this.Ep(),
                        this.Mt = 0, this.Bp = !1, this.Yt = !1, this.Gt.os = [], this.Gt.Ya = this.Gt.ma + 1,
                        this.Pa)
                        for (var _t39 = 0; _t39 < this.Ms.length; _t39++) {
                            this.Ms[_t39].active = !1;
                        } else this.Gt.Wt || (this.wi.Lt = 0), this.wi.Ls(), this.Tp(1e3);
                    this.Gt.Wt || (1 == this.Gt.ma ? (this.Zt[0].y = 20, this.Zt[1].y = 60, this.Zt[this.Gt.Va[1] + 1].visible = !1) : (this.Zt[0].y = 40,
                        this.Zt[1].y = 20, this.Zt[2].y = 60, this.Zt[1].visible = !0, this.Zt[2].visible = !0));
                    for (var _t40 = 0; _t40 < this.Zt.length; _t40++) {
                        this.Zt[_t40].x = 0;
                    }
                    this.Gt.Xa = [0, 1];
                }
            }, {
                key: "ji",
                value: function ji() {
                    this.Ia(), Laya.Scene.open("scenes/platform.scene");
                    for (var _t41 = 0; _t41 < this.Ms.length; _t41++) {
                        this.Ms[_t41].active = !1;
                    }
                    this.vp.active = !0, this.fs.addChild(this.vp), this.wp[0].visible = !0, this.Gt.ma < 2 ? (this.vp.getChildByName("Platform2").active = !1,
                            this.vp.getChildByName("Cam").transform.localPositionX = .75, this.wp[0].x = 145) : (this.vp.getChildByName("Platform2").active = !0,
                            this.vp.getChildByName("Cam").transform.localPositionX = 0, this.wp[0].x = 30),
                        this.It.transform.position = this.Gt.vt, this.It.transform.localRotationEuler = this.Gt.vt,
                        this.It.transform.localRotationEulerY = 180, this.It.transform.localPositionX = 1.5;
                }
            }, {
                key: "Cp",
                value: function Cp(t) {
                    var s = this.Gt.Va[t];
                    if (this.Gt.Qh[s]) {
                        this.Gt.Qh[s].active = !0;
                        var _i16 = this.Gt.Qh[s].getComponent(e);
                        _i16.Ls(), this.Gt.Qh[s].transform.position = this.Gt.vt, this.Gt.Qh[s].transform.localRotationEuler = this.Gt.vt,
                            this.Gt.Qh[s].transform.localRotationEulerY = 180, this.Gt.Qh[s].transform.localPositionX = 0 - 1.5 * t,
                            this.wp[t + 1].visible = !0, this.wp[t + 1].text = _i16.Z, 1 == this.Gt.ma ? this.wp[t + 1].x = 375 : this.wp[t + 1].x = 30 + 230 * (t + 1);
                    }
                }
            }, {
                key: "Ls",
                value: function Ls() {
                    this.Ri.visible = !1, this.Gt.Zh = !1, this.Gt.va++, Laya.Scene.open("scenes/Game.scene");
                    for (var _t42 = 0; _t42 < this.Ms.length; _t42++) {
                        this.Ms[_t42].active = !0;
                    }
                    if (this.vp.active = !1, this.fs.removeChild(this.vp), this.Gt.Wt) {
                        this.wi.Ls();
                        for (var _t43 = 0; _t43 < this.Gt.Ce - 1; _t43++) {
                            _t43 < 2 ? this.Gt.Qh[_t43].active = !0 : this.Gt.Oa[_t43 - 2].active = !0, this.Gt.Te[_t43].lt = !1,
                                this.Gt.Te[_t43].st = !0, this.Gt.Te[_t43].Ls();
                        }
                    } else {
                        var _t44;
                        _t44 = 2 == this.Gt.ma ? [-1, 0, 1] : [-1, 1], x.L(_t44), this.wi.Lt = _t44[0],
                            this.wi.Ls();
                        for (var _s35 = 0; _s35 < this.Gt.ma; _s35++) {
                            if (!this.Gt.Qh[this.Gt.Va[_s35]]) continue;
                            this.Gt.Qh[this.Gt.Va[_s35]].active = !0;
                            var _i17 = void 0,
                                _h14 = this.Gt.Qh[this.Gt.Va[_s35]].getComponent(e);
                            _h14.lt = !0, _h14.st = !1, null == (_i17 = this.Gt.di < 8 ? this.Gt.$a[0] : this.Gt.di < 20 ? this.Gt.$a[x.o(4 * Math.random()) + 1] : this.Gt.di < 30 ? this.Gt.$a[x.o(3 * Math.random()) + 2] : this.Gt.di < 40 ? this.Gt.$a[x.o(2 * Math.random()) + 3] : this.Gt.di < 50 ? this.Gt.$a[x.o(2 * Math.random()) + 4] : this.Gt.$a[5]) && (_i17 = this.Gt.$a[5]),
                                _h14.ot = _i17[0], _h14.rt = _i17[1], _h14._t = _i17[2], _h14.ft = _i17[3], _h14.ct = _i17[4],
                                _h14.ut = _i17[5], _h14.Lt = _t44[_s35 + 1], _h14.Ls();
                        }
                    }
                    for (var _t45 = 0; _t45 < this.wp.length; _t45++) {
                        this.wp[_t45].visible = !1;
                    }
                    this.Tp(1e3), this.Gt.fa = !0, this.Gt.Ee = 2e4 * (this.Ms.length - 2), this.Gt.Wt && (this.Gt.Ee = 0),
                        this.Mp = 2, this.gp[this.Mp].visible = !0, this.Fp = 3e3, this.gp[this.Mp].scale(1.5, 1.5, !0),
                        i.J.us("dao");
                }
            }, {
                key: "Rp",
                value: function Rp() {
                    this.Gt.Ja++, this.Gt.Ui = Date.now(), this.Wi(), this.Be(12), this.Gt.Ha = this.Gt.ma,
                        this.Gt.ma = 11, this.Gt.Qt = !0, this.Gt.va++, Laya.Scene.open("scenes/Game.scene");
                    for (var _t46 = 0; _t46 < this.Ms.length; _t46++) {
                        this.Ms[_t46].active = !0;
                    }
                    var t = [-1, 0, 1];
                    x.L(t), this.wi.Lt = t[0], this.wi.Ls();
                    for (var _s36 = 0; _s36 < this.Gt.ma; _s36++) {
                        var _i18 = void 0;
                        _s36 < 2 ? ((_i18 = this.Gt.Qh[_s36]).getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, .7),
                                _i18.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT) : _i18 = this.Gt.Oa[_s36 - 2],
                            _i18.active = !0;
                        var _h15 = void 0,
                            _e8 = this.Gt.Te[_s36];
                        _e8.lt = !0, _e8.st = !1, _h15 = _s36 < 2 ? this.Gt.$a[5] : _s36 < 4 ? this.Gt.$a[4] : _s36 < 6 ? this.Gt.$a[3] : _s36 < 8 ? this.Gt.$a[2] : _s36 < 10 ? this.Gt.$a[1] : this.Gt.$a[0],
                            _e8.ot = _h15[0], _e8.rt = _h15[1], _e8._t = _h15[2], _e8.ft = _h15[3], _e8.ct = _h15[4],
                            _e8.ut = _h15[5], _e8.Lt = t[(_s36 + 1) % 3], _e8.Ls();
                    }
                    this.Zt[0].y = 40;
                    for (var _t47 = 1; _t47 < this.Zt.length; _t47++) {
                        this.Zt[_t47].visible = !1;
                    }
                    this.Tp(1e3), this.Gt.fa = !0, this.Gt.Ee = 0, this.Mp = 2, this.gp[this.Mp].visible = !0,
                        this.Fp = 3e3, this.gp[this.Mp].scale(1.5, 1.5, !0), i.J.us("dao");
                }
            }, {
                key: "Ep",
                value: function Ep() {
                    this.Np = this.Ms[this.kt].getChildAt(2).name.split("_");
                    for (var _t48 = 1; _t48 < this.Np; _t48++) {
                        this.Np[_t48] = Number(this.Np[_t48]);
                    }
                }
            }, {
                key: "Ip",
                value: function Ip() {
                    var _this35 = this;
                    if (i.J.us("win"), i.J.wh(), this.Gt.fa = !1, this.mp.visible = !1, this.je.visible = !1,
                        this.Bp = !0, this.Ah(0, 1), Laya.timer.once(300, this, function() {
                            _this35.Ah(750, -1);
                        }), this.Gt.Qt) Laya.timer.once(3e3, this, function() {
                        for (var _t49 = 0; _t49 < _this35.Gt.ma; _t49++) {
                            var _s37 = void 0;
                            _t49 < 2 ? ((_s37 = _this35.Gt.Qh[_t49]).getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 1),
                                    _s37.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE) : _s37 = _this35.Gt.Oa[_t49 - 2],
                                _s37.active = !1;
                        }
                        _this35.Gt.ma = _this35.Gt.Ha;
                        for (var _t50 = 0; _t50 < _this35.ss.length; _t50++) {
                            _this35.ss[_t50].visible = !1;
                        }
                        Laya.Scene.open("scenes/marathonend.scene");
                    });
                    else {
                        if (this.Gt.ma--, -1 == this.Gt.os[0].q && (this.Gt.ma = 0), this.Gt.ma > 0 || this.Gt.Wt);
                        else {
                            if (this.Gt.di++, this.Gt.Ga <= this.Gt.Za.length && this.Gt.Ga++, this.Gt.Ga > this.Gt.Za.length) {
                                var _t51 = 3;
                                _t51 = this.Gt.di <= 20 ? 3 : this.Gt.di <= 30 ? 4 : this.Gt.di <= 50 ? 5 : 6, this.Gt.Ua = [];
                                var _s38 = 0;
                                for (var _i19 = 0; _i19 < _t51; _i19++) {
                                    var _h16 = x.u(Math.random() * this.Gt.De);
                                    _i19 == x.o(_t51 / 2) && Math.random() < .4 && (_h16 = 34 + x._(Math.random())),
                                        33 == _h16 ? _s38 += 12 : 34 != _h16 && 35 != _h16 || (_s38 <= -12 ? _h16 = x.u(32 * Math.random()) : _s38 -= 12),
                                        this.Gt.Ua.push(_h16);
                                }
                            }
                            i.J.dh("score", this.Gt.di, x._(Date.now() / 1e3));
                        }
                        this.Gt.Wt ? i.J.Ot.Ut([{
                            e: 5
                        }]) : (0 == this.Gt.ma ? this.Gt.xh = 50 : this.Gt.xh = 30, this.Gt.Ys += this.Gt.xh,
                            this.Wi()), this.Gt.Wt ? (this.je.visible = !0, 0 == this.Gt.Ee && (this.Gt.Ee = 9e3)) : Laya.timer.once(3e3, this, function() {
                            if (_this35.Gt.ma > 0) {
                                var _t52 = _this35.Gt.Qh[0].getComponent(e),
                                    _s39 = _this35.Gt.Qh[1].getComponent(e);
                                1 == _this35.Gt.os.length ? _s39.wt > _t52.wt ? (_this35.Gt.os.push(_s39), _this35.Gt.os.push(_t52)) : (_this35.Gt.os.push(_t52),
                                    _this35.Gt.os.push(_s39)) : 2 == _this35.Gt.os.length && (_t52.xt || _this35.Gt.os.push(_t52),
                                    _s39.xt || _this35.Gt.os.push(_s39));
                                var _i20 = [];
                                for (var _t53 = 0; _t53 < _this35.Gt.os.length; _t53++) {
                                    var _s40 = _this35.Gt.os[_t53];
                                    _s40.lt && _i20.push(_s40.q);
                                }
                                _this35.Gt.Va = _i20;
                            } else if (_this35.Gt.os.length < 2) {
                                var _t54 = _this35.Gt.Qh[_this35.Gt.Va[0]].getComponent(e);
                                _this35.Gt.os.push(_t54);
                            }
                            _this35.Ri.visible = !0;
                            for (var _t55 = 0; _t55 < _this35.Zt.length; _t55++) {
                                _this35.Zt[_t55].removeSelf();
                            }
                            i.J.Uh(function() {
                                0 == _this35.Gt.ma ? Laya.Scene.open("scenes/success.scene") : Laya.Scene.open("scenes/win_wd.scene");
                            });
                        });
                    }
                }
            }, {
                key: "Ae",
                value: function Ae() {
                    var _this36 = this;
                    for (var _t56 = 0; _t56 < this.Gt.Ce - 1; _t56++) {
                        this.Gt.Te[_t56].xt || -1 == this.Gt.os.indexOf(this.Gt.Te[_t56]) && this.Gt.os.push(this.Gt.Te[_t56]);
                    }
                    i.J.Lh(), this.Gt.Ee = 0, this.je.visible = !1, Laya.timer.once(1e3, this, function() {
                        _this36.Ri.visible = !0;
                        for (var _t57 = 0; _t57 < _this36.Zt.length; _t57++) {
                            _this36.Zt[_t57].removeSelf();
                        }
                        Laya.Scene.open("scenes/win_wd.scene");
                    });
                }
            }, {
                key: "rs",
                value: function rs() {
                    if (!this.Gt.Qt && this.Gt.fa && !this.wi.xt && this.Gt.os.length >= this.Gt.Ya - 1) {
                        i.J.us("loose"), this.wi.Jt = !1, this.Gt.fa = !1, this.Gt.os.push(this.wi), this.mp.visible = !1,
                            this.je.visible = !1, this.Ri.visible = !0;
                        for (var _t58 = 0; _t58 < this.Zt.length; _t58++) {
                            this.Zt[_t58].removeSelf();
                        }
                        i.J.Uh(function() {
                            Laya.Scene.open("scenes/win_wd.scene");
                        }), i.J.mh(), this.Gt.Wt && i.J.Lh();
                    }
                }
            }, {
                key: "vh",
                value: function vh() {
                    var _this37 = this;
                    this.Ri.visible = !1, this.Gt.Wt ? this.Ea() : this.Gt.ma > 0 ? (i.X = Laya.Handler.create(this, function() {
                        _this37.ji();
                    }), this.Gi()) : this.Gi();
                }
            }, {
                key: "G",
                value: function G() {
                    var t = Laya.timer.delta;
                    if (this.Yt && this.Pp(t), this.Gt.fa && !this.Gt.Xt && this.Fp <= 0 && (this.Gt.da += t),
                        this.Gt.fa && !this.Gt.Xt && this.Fp <= 0 && !this.Gt.Wt && !this.Gt.Qt) {
                        this.Gt.Ee -= t;
                        var _s41 = x.u(this.Gt.Ee / 1e3);
                        if (this.Gt.Ee < 0) {
                            for (var _t59 = 0; _t59 < this.Gt.ma; _t59++) {
                                var _s42 = this.Gt.Qh[this.Gt.Va[_t59]].getComponent(e);
                                _s42.xt || this.Gt.os.push(_s42);
                            }
                            this.rs();
                        } else this.Gt.Ee < 9e3 ? this.Mp != _s41 ? (this.Mp = _s41, this.mp.visible = !1,
                            this.je.visible = !0, this.je.text = _s41, this.je.pivotY = 80, i.J.us("dao")) : this.je.pivotY < 100 && (this.je.pivotY += 1) : this.mp.text = _s41;
                    }
                    if (this.Gt.Wt && this.Gt.Ee > 0)
                        if (this.Gt.Ee -= t, this.Gt.Ee <= 0) this.Bp ? this.Ae() : this.rs();
                        else {
                            var _t60 = x.u(this.Gt.Ee / 1e3);
                            this.Mp != _t60 ? (this.Mp = _t60, this.je.text = _t60, this.je.pivotY = 80, i.J.us("dao")) : this.je.pivotY < 100 && (this.je.pivotY += 1);
                        }
                    if (this.Gt.Qt && this.Gt.da > this.Gt.Ka + 500) {
                        this.Gt.Ka = this.Gt.da;
                        var _t61 = [];
                        this.wi.xt || _t61.push(this.wi);
                        for (var _s44 = 0; _s44 < this.Gt.Te.length; _s44++) {
                            this.Gt.Te[_s44].xt || _t61.push(this.Gt.Te[_s44]);
                        }
                        _t61.sort(function(t, s) {
                            return s.wt - t.wt;
                        });
                        var _s43 = this.Gt.os.length;
                        for (var _i21 = 0; _i21 < _t61.length; _i21++) {
                            _t61[_i21].it = 7 * (_s43 + _i21);
                        }
                    }
                    if (this.Fp > -1e3) {
                        if (this.Fp -= t, this.Fp <= -1e3) this.gp[3].visible = !1;
                        else if (this.Fp <= 0) this.gp[3].visible || (this.Yt = !0,
                            this.Gt.Wt || this.Gt.Qt || (this.mp.visible = !0), this.gp[this.Mp] && (this.gp[this.Mp].visible = !1),
                            this.gp[3].visible = !0, this.Mp = 3, this.gp[this.Mp].scale(1.5, 1.5, !0), i.J.us("go"),
                            this.Gt.da = 0, this.Gt.Ka = 0, i.J.gh());
                        else {
                            var _t62 = x.o(this.Fp / 1e3);
                            this.Mp != _t62 && (this.gp[this.Mp] && (this.gp[this.Mp].visible = !1), this.Mp = _t62,
                                this.gp[this.Mp] && (this.gp[this.Mp].visible = !0, this.gp[this.Mp].scale(1.5, 1.5, !0)),
                                i.J.us("dao"));
                        }
                        this.gp[this.Mp] && this.gp[this.Mp].scaleX < 2 && this.gp[this.Mp].scale(this.gp[this.Mp].scaleX + .02, this.gp[this.Mp].scaleX + .02, !0);
                    } else this.Gt.fa && !this.Yt && (this.Yt = !0, this.Gt.Wt || (this.mp.visible = !0),
                        this.gp[this.Mp] && (this.gp[this.Mp].visible = !1), i.J.gh(), this.Gt.da = 0, this.Gt.Ka = 0);
                    this.dp > 0 && (this.dp -= t, this.dp <= 0 && Laya.stage.removeChild(this.qs));
                }
            }, {
                key: "Pp",
                value: function Pp(t) {
                    var s = t / 1e3,
                        i = this.Vt,
                        h = this.np,
                        e = this.lp,
                        a = this.It;
                    if (0 == this.wi.wt && this.Gt.fa || B.instance && (B.instance.zp.visible = !1),
                        this.wi.xt) this.Bp || this.Ip(), h.transform.localPositionX = x.C(h.transform.localPositionX, a.transform.localPositionX, 3 * s),
                        h.transform.localPositionY = x.C(h.transform.localPositionY, a.transform.localPositionY, 3 * s),
                        h.transform.localPositionZ = x.C(h.transform.localPositionZ, a.transform.localPositionZ, 3 * s),
                        h.transform.localRotationEulerX = x.N(h.transform.localRotationEulerX, a.transform.localRotationEulerX + 15, 2 * s),
                        h.transform.localRotationEulerY = x.N(h.transform.localRotationEulerY, a.transform.localRotationEulerY - 180, 2 * s),
                        h.transform.localRotationEulerZ = x.N(h.transform.localRotationEulerZ, 0, 2 * s),
                        e.transform.localPositionX = x.C(e.transform.localPositionX, -0, 2 * s), e.transform.localPositionY = x.C(e.transform.localPositionY, 1.24, 2 * s),
                        e.transform.localPositionZ = x.C(e.transform.localPositionZ, -5.9, 2 * s);
                    else {
                        var _s45 = this.wi.Mt;
                        if (_s45 != this.Mt) {
                            this.Mt = _s45;
                            var _t63 = i.ps[this.Mt];
                            _t63 != this.kt && (this.kt = _t63, this.Ep());
                        }
                        this.Tp(t);
                    }
                }
            }, {
                key: "Tp",
                value: function Tp(t) {
                    var s = this.np,
                        i = this.lp,
                        h = this.It,
                        e = t / 1e3;
                    if (this.Np) {
                        var _t64 = this.Np;
                        s.transform.localPositionX = x.C(s.transform.localPositionX, h.transform.localPositionX, 3 * e),
                            s.transform.localPositionY = x.C(s.transform.localPositionY, h.transform.localPositionY, 3 * e),
                            s.transform.localPositionZ = x.C(s.transform.localPositionZ, h.transform.localPositionZ, 3 * e),
                            this.wi.gt && (s.transform.localRotationEulerX = x.N(s.transform.localRotationEulerX, _t64[4], 2 * e),
                                s.transform.localRotationEulerY = x.N(s.transform.localRotationEulerY, h.transform.localRotationEulerY - _t64[5], 2 * e),
                                s.transform.localRotationEulerZ = x.N(s.transform.localRotationEulerZ, _t64[6], 2 * e)),
                            i.transform.localPositionX = x.C(i.transform.localPositionX, -_t64[1], 2 * e), i.transform.localPositionY = x.C(i.transform.localPositionY, _t64[2], 2 * e),
                            i.transform.localPositionZ = x.C(i.transform.localPositionZ, _t64[7], 2 * e);
                    }
                }
            }, {
                key: "Wp",
                value: function Wp() {
                    var t = {};
                    return t.slevel = this.Gt.di, t.rlevel = this.Gt.Ga, t.nstage = this.Gt.Ua, t.nums = this.Gt.ma,
                        t.coin = this.Gt.Ys, t.skin = this.Gt.fi, t.dance = this.Gt.yi, t.lock = this.Gt.Dh,
                        t.marathon_times = this.Gt.Ja, t.marathon_day = this.Gt.Ui, t.sign_day = this.Gt.Hi,
                        t.sign_times = this.Gt.Yi, t;
                }
            }, {
                key: "rp",
                value: function rp() {
                    var t = i.J.sh();
                    t && (this.Gt.di = t.slevel, this.Gt.Ga = t.rlevel, this.Gt.Ua = t.nstage, t.nums && (this.Gt.ma = t.nums),
                            t.coin && (this.Gt.Ys = t.coin), t.skin && (this.Gt.fi = t.skin), t.dance && (this.Gt.yi = t.dance),
                            t.marathon_times && (this.Gt.Ja = t.marathon_times), t.marathon_day && (this.Gt.Ui = t.marathon_day),
                            t.sign_day && (this.Gt.Hi = t.sign_day), t.sign_times && (this.Gt.Yi = t.sign_times),
                            t.lock ? this.Gt.Dh = t.lock : this.Gt.di < 10 ? this.Gt.Dh = 10 : this.Gt.Dh = this.Gt.di + 1),
                        (t = i.J.hh()) && (this.Gt._i = t);
                }
            }, {
                key: "Wi",
                value: function Wi() {
                    var t = this.Wp();
                    i.J.ih(t);
                }
            }, {
                key: "Gp",
                value: function Gp() {
                    return this.Gt;
                }
            }, {
                key: "Ni",
                value: function Ni() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
                    var s = ["Rex", "IHax", "Asaurus", "Uber", "Dragon", "OMG", "LOL", "LMAO", "lam", "Milk", "MindOf", "Gamer",
                            "The Gamer", "Dr", "Popper", "Big", "LoveSong", "Ltls Ye", "Person",
                            "Captain", "Total", "The Dude", "The Gaming", "Gamer", "Mr Game", "Ms Game",
                            "Hero", "Unkonwn", "The Wise", "Alien", "Zombie",
                            "Deadbot", "Bodymind", "UItraland", "Farwatch", "Halelith", "Eoweraron", "Nydareven",
                             "Zerrac", "Acisien", "Kaigoch", "Peadon","Demon", "Chihiro", "Samon", "trammels",
                              "Tender", "starry", "Stormy", "Fairy", "Red skirt"],
                        i = [];
                    for (var _h17 = 0; _h17 < t; _h17++) {
                        i.push(s[x.o(s.length * Math.random())]);
                    }
                    return i;
                }
            }, {
                key: "Ah",
                value: function Ah(t, s) {
                    for (var _i22 = 0; _i22 < 30; _i22++) {
                        var _i23 = j.ep("sp", null);
                        _i23.tp.x = t, _i23.tp.y = 650, null == _i23.Up && (_i23.Up = _i23.tp.addComponent(p),
                            _i23.Up.Cs = _i23), _i23.Up.vs = s, this.tp.addChild(_i23.tp);
                    }
                    i.J.us("Paper");
                }
            }, {
                key: "Ca",
                value: function Ca(t) {
                    if (this._p.visible = !0, this.yp.visible = !0, this.cp.visible = !0, 1 == t ? (this._p.y = 400 + i.H,
                            this.yp.y = 400 + i.H, this.cp.y = 415 + i.H, this.fp.text = this.Gp().di, this.up.text = this.Gp().di + 1) : (this._p.y = 630 + i.H,
                            this.yp.y = 630 + i.H, this.cp.y = 645 + i.H), this.cp.graphics.clear(), this.cp.graphics.drawRect(0, 0, 200, 70, "#ffffff"),
                        1 == t) this.Gt.di < 3 ? this.cp.graphics.drawRect(10, 10, 180, 50, "#A2BFCF") : 1 == this.Gt.ma ? (this.cp.graphics.drawRect(10, 10, 85, 50, "#FB9738"),
                        this.cp.graphics.drawRect(110, 10, 85, 50, "#A2BFCF")) : (this.cp.graphics.drawRect(10, 10, 85, 50, "#A2BFCF"),
                        this.cp.graphics.drawRect(110, 10, 85, 50, "#A2BFCF"));
                    else {
                        var _t65 = this.Gt.di;
                        this.Bp && 0 == this.Gt.ma && _t65--, _t65 < 3 ? this.Bp ? this.cp.graphics.drawRect(10, 10, 180, 50, "#FB9738") : this.cp.graphics.drawRect(10, 10, 180, 50, "#A2BFCF") : 0 == this.Gt.ma ? (this.cp.graphics.drawRect(10, 10, 85, 50, "#FB9738"),
                            this.cp.graphics.drawRect(110, 10, 85, 50, "#FB9738")) : 1 == this.Gt.ma ? (this.cp.graphics.drawRect(10, 10, 85, 50, "#FB9738"),
                            this.cp.graphics.drawRect(110, 10, 85, 50, "#A2BFCF")) : (this.cp.graphics.drawRect(10, 10, 85, 50, "#A2BFCF"),
                            this.cp.graphics.drawRect(110, 10, 85, 50, "#A2BFCF"));
                    }
                }
            }, {
                key: "Ia",
                value: function Ia() {
                    this._p && (this._p.visible = !1, this.yp.visible = !1, this.cp.visible = !1);
                }
            }, {
                key: "bi",
                value: function bi() {
                    this.ya(), Laya.Scene.open("scenes/skin.scene"), this.Re.getChildByName("Platform").active = !0,
                        this.It.active = !0, this.wi.Ls(), this.It.transform.position = this.Gt.vt, this.It.transform.localRotationEuler = this.Gt.vt,
                        this.It.transform.localRotationEulerY = 180;
                }
            }, {
                key: "ai",
                value: function ai() {
                    i.J.eh(), this.Wi(), this.wi.Bt = this.Gt.yi, Laya.Texture2D.load("res/skin/" + this.Gt.fi + ".jpg", Laya.Handler.create(this, function(t) {
                            this.It.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                        })), this.Zt[0].graphics.clear(), this.Zt[0].graphics.drawCircle(0, 0, 20, this.Gt.Eh[this.Gt.fi - 1]),
                        this.Di();
                }
            }, {
                key: "Di",
                value: function Di() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    t && Laya.Scene.open("scenes/menu.scene"), this.Re.active = !1, this.Re.getChildByName("Platform").active = !0,
                        this.fs.removeChild(this.Re);
                    for (var _t66 = 0; _t66 < this.Ms.length; _t66++) {
                        this.Ms[_t66].active = !0;
                    }
                    this.It.active = !0, this.wi.Ls();
                }
            }, {
                key: "ya",
                value: function ya() {
                    this.Re.active = !0, this.Re.getChildByName("Platform").active = !1, this.fs.addChild(this.Re);
                    for (var _t67 = 0; _t67 < this.Ms.length; _t67++) {
                        this.Ms[_t67].active = !1;
                    }
                    this.It.active = !1;
                }
            }, {
                key: "Op",
                value: function Op() {
                    this.Gt.Xt = !0, this.Ri.visible = !0;
                    var t = this.Ms;
                    for (var _s46 = 1; _s46 < t.length - 1; _s46++) {
                        var _i24 = t[_s46].getChildAt(1).getComponent(Laya.Animator);
                        _i24 && (_i24.speed = 0);
                    }
                }
            }, {
                key: "Vp",
                value: function Vp() {
                    if (this.Yt && !this.Gt.Wt) {
                        this.Ap(), this.Gt.Ee = 0;
                        for (var _t68 = 0; _t68 < this.Zt.length; _t68++) {
                            this.Zt[_t68].removeSelf();
                        }
                        if (Laya.Scene.open("scenes/menu.scene"), i.J.mh(), this.Gt.fa = !1, this.mp.visible = !1,
                            this.je.visible = !1, this.Gt.Qt) {
                            for (var _t69 = 0; _t69 < this.Gt.ma; _t69++) {
                                var _s47 = void 0;
                                _t69 < 2 ? ((_s47 = this.Gt.Qh[_t69]).getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 1),
                                        _s47.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE) : _s47 = this.Gt.Oa[_t69 - 2],
                                    _s47.active = !1;
                            }
                            this.Gt.ma = this.Gt.Ha;
                            for (var _t70 = 0; _t70 < this.ss.length; _t70++) {
                                this.ss[_t70].visible = !1;
                            }
                            this.Gt.Qt = !1;
                        }
                        this.Gi();
                    }
                }
            }, {
                key: "Sh",
                value: function Sh() {
                    this.ya(), i.J.Sh(), Laya.Scene.open("scenes/paihang.scene");
                }
            }, {
                key: "Yp",
                value: function Yp() {
                    this.Di();
                }
            }, {
                key: "Ea",
                value: function Ea() {
                    for (var _t71 = 0; _t71 < this.Gt.Ce - 1; _t71++) {
                        _t71 < 2 ? this.Gt.Qh[_t71].active = !1 : this.Gt.Oa[_t71 - 2].active = !1;
                    }
                    this.ya(), this.Gt.Zh || (Laya.Scene.open("scenes/room.scene"), this.Gt.Zh = !0);
                }
            }, {
                key: "Vh",
                value: function Vh() {
                    i.J._h(), this.Gt.Zh = !1, this.Gt.Wt = !1, this.Re.active = !1, this.Re.getChildByName("Platform").active = !0,
                        this.fs.removeChild(this.Re);
                    for (var _t72 = 0; _t72 < this.Ms.length; _t72++) {
                        this.Ms[_t72].active = !0;
                    }
                    this.It.active = !0;
                    for (var _t73 = 0; _t73 < this.Gt.Qh.length; _t73++) {
                        this.Gt.Qh[_t73].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 1),
                            this.Gt.Qh[_t73].getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE;
                    }
                    this.Gi();
                }
            }, {
                key: "ci",
                value: function ci(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2e3;
                    this.dp = s, this.Qs.text = t, Laya.stage.addChild(this.qs);
                }
            }, {
                key: "Be",
                value: function Be(t) {
                    var _this38 = this;
                    if (t > 3) {
                        x.L(this.Gt.Qa);
                        for (var _s48 = 0; _s48 < t - 3; _s48++) {
                            if (null == this.Gt.Oa[_s48]) {
                                (function() {
                                    var t = _this38.fs.addChild(new Laya.Sprite3D());
                                    t.transform.localPositionZ = -10, t.addChild(Laya.Loader.getRes("res/player.lh").clone()),
                                        t.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.castShadow = !0, _this38.Gt.Oa[_s48] = t,
                                        _this38.Gt.Te[_s48 + 2] = t.addComponent(e), _this38.Gt.Te[_s48 + 2].Bt = "Dance" + x.u(12 * Math.random()),
                                        _this38.Gt.Te[_s48 + 2].q = _s48 + 2, t.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, .7),
                                        t.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
                                    var i = _this38.Gt.Qa[_s48];
                                    Laya.Texture2D.load("res/skin/" + i + ".jpg", Laya.Handler.create(null, function(s) {
                                        t.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = s;
                                    })), _s48 < 3 && (_this38.Zt[_s48 + 3].graphics.clear(), _this38.Zt[_s48 + 3].graphics.drawCircle(0, 0, 20, _this38.Gt.Eh[i - 1]));
                                })();
                            }
                        }
                    }
                }
            }, {
                key: "ba",
                value: function ba() {
                    var t = this.Gt._i[0].length,
                        s = this.Gt._i[1].length;
                    if (t >= 28 && s >= 12) return !1; {
                        var _i25;
                        if (_i25 = t >= 28 ? 2 : s >= 12 ? 1 : Math.random() < .7 ? 1 : 2, this.Gt.vi = _i25,
                            1 == _i25) {
                            var _t74 = [];
                            for (var _s49 = 1; _s49 < 29; _s49++) {
                                _t74.push(_s49 + ".jpg");
                            }
                            x.L(_t74);
                            for (var _s50 = 0; _s50 < _t74.length; _s50++) {
                                if (this.Gt._i[0].indexOf(_t74[_s50]) < 0) {
                                    this.Gt.jh = _t74[_s50];
                                    break;
                                }
                            }
                        } else {
                            var _t75 = [];
                            for (var _s51 = 1; _s51 < 13; _s51++) {
                                _t75.push("Dance" + _s51);
                            }
                            x.L(_t75);
                            for (var _s52 = 0; _s52 < _t75.length; _s52++) {
                                if (this.Gt._i[1].indexOf(_t75[_s52]) < 0) {
                                    this.Gt.jh = _t75[_s52];
                                    break;
                                }
                            }
                        }
                        return !0;
                    }
                }
            }, {
                key: "Da",
                value: function Da() {
                    this.ya(), this.Re.getChildByName("Platform").active = !0, this.It.active = !0,
                        this.wi.Ls(), this.It.transform.position = this.Gt.vt, this.It.transform.localRotationEuler = this.Gt.vt,
                        this.It.transform.localRotationEulerY = 180, 1 == this.Gt.vi % 10 ? (Laya.Texture2D.load("res/skin/" + this.Gt.jh, Laya.Handler.create(this, function(t) {
                            this.It.getChildAt(0).getChildByName("Man").skinnedMeshRenderer.material.albedoTexture = t;
                        })), this.wi._s(this.Gt.yi)) : this.wi._s(this.Gt.jh), Laya.Scene.open("scenes/tryskin.scene");
                }
            }, {
                key: "Hp",
                value: function Hp() {
                    if (0 == this.ss.length)
                        for (var _t76 = 0; _t76 < 12; _t76++) {
                            var _s53 = new Laya.Sprite(),
                                _i26 = Laya.Sprite.fromImage("img/coink.png");
                            _i26.size(100, 60), _i26.pivotX = 50, _i26.rotation = 180, _s53.visible = !1, _s53.addChild(_i26),
                                this.tp.addChildAt(_s53, 0);
                            var _h18 = "#ffffff";
                            0 == _t76 && (_h18 = "#00ffff");
                            var _e9 = x.F("1", {
                                fontFamily: "Arial",
                                fontSize: 32,
                                fill: _h18,
                                align: "center",
                                valign: "middle",
                                w: 100,
                                h: 60
                            });
                            _e9.singleCharRender = !0, _e9.name = "text", _s53.addChild(_e9.pos(-50, -64)),
                                this.ss.push(_s53);
                        }
                }
            }]);
            return A;
        }();
    var E = new t();
    var B =
        /* */
        function(_Laya$Scene6) {
            _inherits(B, _Laya$Scene6);

            function B() {
                var _this39;
                _classCallCheck(this, B);
                _this39 = _possibleConstructorReturn(this, _getPrototypeOf(B).call(this)), B.instance = _assertThisInitialized(_this39);
                return _this39;
            }
            _createClass(B, [{
                key: "onEnable",
                value: function onEnable() {
                    _get(_getPrototypeOf(B.prototype), "onEnable", this).call(this), this.zp = this.runtips,
                        this.W = this.progress, A.instance.Gt.Wt ? this.pause.visible = !1 : this.pause.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), A.instance.Vp();
                        }), this.zp.y += i.H, this.zp.graphics.drawPath(0, 0, E.m(400, 80, 10), {
                            fillStyle: "rgba(0,0,0,0.6)"
                        });
                    for (var _t77 = 0; _t77 < A.instance.Zt.length; _t77++) {
                        this.W.addChildAt(A.instance.Zt[_t77], 0);
                    }
                    i.J.Th(!0), i.J.Ih(), i.J.Ti();
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    _get(_getPrototypeOf(B.prototype), "onDisable", this).call(this);
                    for (var _t78 = 0; _t78 < A.instance.Zt.length; _t78++) {
                        A.instance.Zt[_t78].removeSelf();
                    }
                    i.J.Ph();
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(B.prototype), "onDestroy", this).call(this), B.instance = null,
                        i.J.Th(!1);
                }
            }]);
            return B;
        }(Laya.Scene);
    var T =
        /* */
        function(_Laya$Scene7) {
            _inherits(T, _Laya$Scene7);

            function T() {
                _classCallCheck(this, T);
                return _possibleConstructorReturn(this, _getPrototypeOf(T).call(this));
            }
            _createClass(T, [{
                key: "onEnable",
                value: function onEnable() {
                    _get(_getPrototypeOf(T.prototype), "onEnable", this).call(this), this.y = i.H, this.btn.on(Laya.Event.CLICK, this, function(t) {
                        t.stopPropagation(),
                            platform.getInstance().showReward(() => { //zs
                                i.J.bh();
                            })
                    }), this.notxt.on(Laya.Event.CLICK, this, function(t) {
                        t.stopPropagation(), A.instance.Ri.visible = !1, Laya.Scene.open("scenes/menu.scene");
                    });
                    for (var _t79 = 0; _t79 < A.instance.Ms.length; _t79++) {
                        A.instance.Ms[_t79].active = !0;
                    }
                    A.instance.It.transform.localPositionZ = 1.22, A.instance.Ri.visible = !0, i.J.Ai(0);
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(T.prototype), "onDestroy", this).call(this), A.instance.Ri.visible = !1,
                        i.J.Ti();
                }
            }]);
            return T;
        }(Laya.Scene);
    var C = new t();
    var R =
        /* */
        function(_Laya$Scene8) {
            _inherits(R, _Laya$Scene8);

            function R() {
                _classCallCheck(this, R);
                return _possibleConstructorReturn(this, _getPrototypeOf(R).call(this));
            }
            _createClass(R, [{
                key: "onEnable",
                value: function onEnable() {
                    _get(_getPrototypeOf(R.prototype), "onEnable", this).call(this), this.y = i.H, A.instance.Ri.visible = !0,
                        A.instance.Hp();
                    var t = this.kk;
                    t.graphics.drawPath(0, 0, C.m(t.width, t.height, 40), {
                        fillStyle: "#7FAEFF"
                    }, {
                        strokeStyle: "#000000",
                        lineWidth: 2
                    }), this.Vi = [];
                    for (var _s54 = 0; _s54 < 10; _s54++) {
                        var _i27 = new Laya.Sprite();
                        _i27.pos(40, 120 + 70 * _s54), _i27.graphics.drawPath(0, 0, C.m(520, 60, 8), {
                            fillStyle: "#ffffff"
                        }), t.addChild(_i27), this.Vi.push(_i27);
                    }
                    this.Kp = this.num, this.Kp.singleCharRender = !0, this.Ct = 0, this.si = 1, this.Jp = 0,
                        this.Yh = A.instance.Ni(10), Laya.timer.frameOnce(1, this, this.G);
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    _get(_getPrototypeOf(R.prototype), "onDisable", this).call(this), A.instance.Ri.visible = !1;
                }
            }, {
                key: "G",
                value: function G() {
                    var t = Laya.timer.delta;
                    if (t > 1e3 && (t = 1e3), this.Ct += t, this.Ct >= 6e3) {
                        i.X = Laya.Handler.create(this, function() {
                            A.instance.Rp();
                        });
                        var _t80 = [],
                            _s55 = 0,
                            _h19 = 0,
                            _e10 = [1, 3, 7, 9, 11, 14, 16],
                            _a6 = [2, 4, 6, 10, 12, 13, 15];
                        for (var _i28 = 0; _i28 < 12; _i28++) {
                            var _i29 = C.u(Math.random() * A.instance.Gt.De);
                            33 == _i29 ? _s55 += 12 : 34 != _i29 && 35 != _i29 || (_s55 <= -12 ? _i29 = C.u(15 * Math.random()) + 17 : _s55 -= 12);
                            var _p5 = 0;
                            _e10.indexOf(_i29) > -1 && (_p5 = -90), _a6.indexOf(_i29) > -1 && (_p5 = 90), Math.abs(_h19 + _p5) > 90 ? _i29 = C.u(15 * Math.random()) + 17 : _h19 += _p5,
                                _t80.push(_i29);
                        }
                        A.instance.Gi(_t80);
                    } else {
                        var _t81 = C.u(this.Ct / 60);
                        if (this.si != _t81 && (this.si = _t81, this.Kp.text = "Number of people:(" + _t81 + "/100)"),
                            _t81 = C.u(this.Ct / 600), this.Jp != _t81) {
                            for (var _s56 = this.Jp; _s56 < _t81; _s56++) {
                                var _t82 = this.Vi[_s56],
                                    _i30 = C.F(this.Yh[_s56], {
                                        fontFamily: "Arial",
                                        fontSize: 32,
                                        fill: "#000000",
                                        valign: "middle",
                                        h: 60
                                    });
                                _i30.singleCharRender = !0, _t82.addChild(_i30.pos(40, 0));
                                var _h20 = Laya.Sprite.fromImage("img/gou.png");
                                _h20.pos(440, 0), _t82.addChild(_h20);
                            }
                            this.Jp = _t81;
                        }
                        Laya.timer.frameOnce(1, this, this.G);
                    }
                }
            }]);
            return R;
        }(Laya.Scene);
    new t();
    var N =
        /* */
        function(_Laya$Scene9) {
            _inherits(N, _Laya$Scene9);

            function N() {
                _classCallCheck(this, N);
                return _possibleConstructorReturn(this, _getPrototypeOf(N).call(this));
            }
            _createClass(N, [{
                key: "onEnable",
                value: function onEnable() {
                    this.y = i.H, this.back.on(Laya.Event.CLICK, this, function() {
                        A.instance.Yp();
                    }), this.U = this.loading, this.Xp = this.conview, this.Xp.height += i.K, this.Xp.texture = new Laya.Texture(new Laya.Texture2D());
                    var t = this.Xp.height;
                    this.Xp.height = 1500, this.Xp.scrollRect = new Laya.Rectangle(0, 0, 600, t), this.Xp.addComponentIntance(new n(0, 1500 - t, 2)),
                        Laya.timer.loop(1e3, this, this.G), this.Ct = 0, Laya.timer.frameLoop(2, this, this.Ba),
                        i.J.Ai(0);
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    Laya.timer.clear(this, this.G), i.J.Ti();
                }
            }, {
                key: "Ba",
                value: function Ba() {
                    this.Ct += Laya.timer.delta, this.Ct < 1e3 ? this.U.rotation += 5 : (this.U.visible = !1,
                        this.Xp.visible = !0, Laya.timer.clear(this, this.Ba));
                }
            }, {
                key: "G",
                value: function G() {
                    var t = i.J.lh();
                    t && this.Xp.texture.bitmap.loadImageSource(t, !0);
                }
            }]);
            return N;
        }(Laya.Scene);
    var I = new t();
    var P =
        /* */
        function(_Laya$Scene10) {
            _inherits(P, _Laya$Scene10);

            function P() {
                var _this40;
                _classCallCheck(this, P);
                _this40 = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this)), _this40.loadScene("scenes/platform"),
                    _this40.y = i.H;
                var t = _this40.tips;
                _this40.U = _this40.loading, _this40.Ct = 0, _this40.qp = 1500 * A.instance.Gt.ma + 1e3,
                    _this40.Qp = 0, t.graphics.drawPath(0, 0, I.m(500, 80, 20), {
                        fillStyle: "#FC1B52"
                    }, {
                        strokeStyle: "#ffffff",
                        lineWidth: 4
                    }), _this40.G();
                return _this40;
            }
            _createClass(P, [{
                key: "onEnable",
                value: function onEnable() {
                    _get(_getPrototypeOf(P.prototype), "onEnable", this).call(this), i.J.Oh();
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(P.prototype), "onDestroy", this).call(this);
                }
            }, {
                key: "G",
                value: function G() {
                    var t = Laya.timer.delta;
                    if (this.Ct += t, this.Ct >= this.qp) A.instance.Ls();
                    else {
                        var _t83 = I.o(this.Ct / 1500);
                        _t83 != this.Qp && (this.Qp = _t83, A.instance.Cp(_t83 - 1));
                        var _s57 = this.Ct / this.qp;
                        this.U.graphics.clear(), this.U.graphics.drawPath(0, 0, I.m(500, 50, 20), {
                            fillStyle: "#DBDBDB"
                        }, {
                            strokeStyle: "#ffffff",
                            lineWidth: 3
                        }), this.U.graphics.drawPath(3, 3, I.m(500 * _s57, 44, 20), {
                            fillStyle: "#33D927"
                        }), Laya.timer.frameOnce(1, this, this.G);
                    }
                }
            }]);
            return P;
        }(Laya.Scene);
    var z = new t();
    var W =
        /* */
        function(_Laya$Scene11) {
            _inherits(W, _Laya$Scene11);

            function W() {
                _classCallCheck(this, W);
                return _possibleConstructorReturn(this, _getPrototypeOf(W).call(this));
            }
            _createClass(W, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this41 = this;
                    _get(_getPrototypeOf(W.prototype), "onEnable", this).call(this), this.y = i.H, this.btn.on(Laya.Event.CLICK, this, function(t) {
                        t.stopPropagation(), A.instance.Gt.di >= 3 && A.instance.Gt.di % 3 == 0 && A.instance.ba() && (i.X = Laya.Handler.create(_this41, function() {
                            A.instance.Da();
                        })), A.instance.vh();
                    }), this.btn.y += i.H, this.content.graphics.drawPath(0, 0, z.S(this.content.width, 130, 20, [1, 1, 0, 0]), {
                        fillStyle: "#6D1DF6"
                    }), this.content.graphics.drawPath(0, 140, z.S(this.content.width, this.content.height - 130, 20, [0, 0, 1, 1]), {
                        fillStyle: "#000000"
                    }), this.content.graphics.drawPath(0, 130, z.S(this.content.width, this.content.height - 130, 20, [0, 0, 1, 1]), {
                        fillStyle: "#2E2E2E"
                    });
                    platform.getInstance().initList(this.list_ad)
                    var t, s, h = A.instance.Gt.di - 1;
                    t = h < 10 ? 80 : h < 100 ? 160 : 240, s = window.wx ? i.numfont : "numfont";
                    var e = z.F(h, {
                        fontFamily: s,
                        fontSize: 100,
                        fill: "#ffffff",
                        align: "center",
                        valign: "middle",
                        w: t,
                        h: 130
                    });
                    e.singleCharRender = !0, this.content.addChild(e);
                    var a = this.txt1.width + this.txt2.width + t,
                        p = (this.content.width - a) / 2;
                    this.txt1.x = p, e.x = this.txt1.x + this.txt1.width, this.txt2.x = e.x + t, 100 * Math.random() <= i.J.qi ? (this.btn.y += 200,
                        Laya.timer.once(i.J.Qi, this, function() {
                            i.J.Ai(0, !0), _this41.btn.y -= 200;
                        })) : i.J.Ai(0), i.J.Gh(A.instance.Lp, 0), this.addChild(A.instance.Lp), A.instance.Lp.y = this.content.y + 385;
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    SetGamePromoVisible(false);
                    _get(_getPrototypeOf(W.prototype), "onDisable", this).call(this), A.instance.Lp.removeSelf();
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(W.prototype), "onDestroy", this).call(this), i.J.Ti();
                }
            }]);
            return W;
        }(Laya.Scene);
    var G = new t();
    var U =
        /* */
        function(_Laya$Scene12) {
            _inherits(U, _Laya$Scene12);

            function U() {
                var _this42;
                _classCallCheck(this, U);
                _this42 = _possibleConstructorReturn(this, _getPrototypeOf(U).call(this)), U.instance = _assertThisInitialized(_this42),
                    _this42.loadScene("scenes/win_wd"), _this42.y = i.H, _this42.btn.on(Laya.Event.CLICK, _assertThisInitialized(_this42), function(t) {
                        t.stopPropagation(), A.instance.vh();
                    }), _this42.btn.y += i.H, _this42.Zp = _this42.sortk, _this42.$p = [_this42.k1, _this42.k2, _this42.k3],
                    _this42.Z = [_this42.n1, _this42.n2, _this42.n3], _this42.Ys = _this42.coin, _this42.Ys.singleCharRender = !0,
                    _this42.tn = _this42.totalcoink, _this42.sn = _this42.totalcoin;
                return _this42;
            }
            _createClass(U, [{
                key: "onEnable",
                value: function onEnable() {
                    var _this43 = this;
                    var t, s = A.instance.Gt.Ya;
                    A.instance.Gt.Wt && (s = A.instance.Gt.os.length) > 3 && (s = 3), 2 == s ? (this.$p[2].visible = !1,
                        this.Zp.graphics.drawPath(0, 0, G.m(560, 310, 12), {
                            fillStyle: "rgba(255,255,255,0.4)"
                        }, {
                            strokeStyle: "#fff",
                            lineWidth: 2
                        }), t = "NEXT LEVEL") : (this.Zp.graphics.drawPath(0, 0, G.m(560, 400, 12), {
                        fillStyle: "rgba(255,255,255,0.4)"
                    }, {
                        strokeStyle: "#fff",
                        lineWidth: 2
                    }), t = "Next round"), A.instance.Gt.Wt ? t = "" : A.instance.Bp ? (this.btn.visible = !1,
                        this.chbox.visible = !0, this.nextbtn.visible = !0, this.nextbtn.on(Laya.Event.CLICK, this, function(t) {
                            t.stopPropagation(), _this43.chbox.selected ?
                                platform.getInstance().showReward(() => { //zs
                                    i.J.kh();
                                }) : A.instance.vh();
                        }), this.tn.visible = !0, this.sn.text = A.instance.Gt.Ys, this.Ys.text = A.instance.Gt.xh,
                        this.coink.visible = !0) : t = "Restart", this.btn.text = t;
                    for (var _t84 = 0; _t84 < s; _t84++) {
                        var _i31 = void 0,
                            _h21 = A.instance.Gt.os[_t84],
                            _e11 = "";
                        _h21 && (_e11 = _h21.Z), _t84 == s - 1 ? (_i31 = "#4F5050", this["in"] = new Laya.Sprite(),
                            this.$p[_t84].addChild(this["in"])) : _i31 = "YOU" == _e11 ? "#87DE3C" : "#fff", this.$p[_t84].graphics.drawPath(0, 0, G.m(500, 80, 8), {
                            fillStyle: _i31
                        }), this.Z[_t84].text = _e11;
                    }
                    A.instance.Gt.Wt ? i.J.Ai(0) : (A.instance.Bp ? (A.instance.Ca(2), i.J.Ai(0)) : (100 * Math.random() <= i.J.qi ? (this.btn.y += 200,
                            Laya.timer.once(i.J.Qi, this, function() {
                                i.J.Ai(0, !0), _this43.btn.y -= 200;
                            })) : i.J.Ai(0), i.J.Gh(A.instance.Lp, 0), this.addChild(A.instance.Lp), A.instance.Lp.y = 750),
                        this.Ct = 0, Laya.timer.frameOnce(1, this, this.G));
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    _get(_getPrototypeOf(U.prototype), "onDisable", this).call(this), A.instance.Lp.removeSelf();
                }
            }, {
                key: "onDestroy",
                value: function onDestroy() {
                    _get(_getPrototypeOf(U.prototype), "onDestroy", this).call(this), i.J.Ti(), U.instance = null;
                }
            }, {
                key: "G",
                value: function G() {
                    if (this.Ct += Laya.timer.delta, this.Ct < 1e3) {
                        var _t85 = this.Ct / 1e3;
                        this["in"].graphics.clear(), this["in"].graphics.drawRect(100, 35, 350 * _t85, 10, "#ff0000"),
                            Laya.timer.frameOnce(1, this, this.G);
                    }
                }
            }]);
            return U;
        }(Laya.Scene);
    var O =
        /* */
        function() {
            function O() {
                _classCallCheck(this, O);
            }
            _createClass(O, null, [{
                key: "init",
                value: function init() {
                    var t = Laya.ClassUtils.regClass;
                    t("script/Gamescene.js", B), t("script/Lockms.js", T), t("script/Marathonbegin.js", R),
                        t("script/Marathonend.js", y), t("script/Menu.js", k), t("script/paihang.js", N),
                        t("script/platform.js", P), t("script/Room.js", m), t("script/Signin.js", c), t("script/Skin.js", o),
                        t("script/Success.js", W), t("script/Tryskin.js", r), t("script/Winwd.js", U);
                }
            }]);
            return O;
        }();
    O.width = 750, O.height = 1334, O.scaleMode = "showall", O.screenMode = "none",
        O.alignV = "middle", O.alignH = "center", O.startScene = "scenes/menu.scene", O.sceneRoot = "",
        O.debug = !1, O.stat = !1, O.physicsDebug = !1, O.exportSceneToJson = !0, O.init();
    var V = new t();
    new(
        /* */
        function() {
            function _class() {
                _classCallCheck(this, _class);
                window.Laya3D ? Laya3D.init(O.width, O.height) : Laya.init(O.width, O.height, Laya.WebGL),
                    Laya.stage.scaleMode = O.scaleMode, Laya.stage.screenMode = O.screenMode, Laya.stage.alignV = O.alignV,
                    Laya.stage.alignH = O.alignH, Laya.URL.exportSceneToJson = O.exportSceneToJson,
                    O.stat && Laya.Stat.show(), Laya.stage.bgColor = "#2d99c3", Laya.TextRender.destroyAtlasDt = 18e3,
                    Laya.MouseManager.multiTouchEnabled = !1;

                if(mobileAndTabletCheck()){
                    Laya.stage.scaleMode = "exactFit";
                    if(window.innerHeight / window.innerWidth > 1334 / 750)
                        Laya.stage.scaleMode = "fixedwidth"; 
                }
                Laya.SoundManager.useAudioMusic = false;
                var t = new Laya.Sprite(),
                    s = V.F("LOADING...", {
                        fontFamily: "Arial",
                        fontSize: 40,
                        fill: "#ffffff",
                        align: "center",
                        w: 750
                    });
                s.singleCharRender = !0, s.pos(0, 600), t.addChild(s);
                var h = new Laya.Sprite();
                t.addChild(h.pos(125, 700));
                var e = V.F("", {
                    fontFamily: "Arial",
                    fontSize: 30,
                    fill: "#ffffff",
                    valign: "bottom",
                    h: 40
                });
                e.centerX = 0;
                e.pos(10, 980), t.addChild(e), Laya.stage.addChild(t), i.U = t, i.V = h, i.Y = s,
                    Laya.timer.loop(60, null, i.G), new A();
            }
            return _class;
        }())();
}();