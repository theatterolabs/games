function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

window.Laya = function(t) {
    "use strict";
    var e = function e() {
        _classCallCheck(this, e);
    };
    e.animationInterval = 50, e.isAntialias = !1, e.isAlpha = !1, e.premultipliedAlpha = !0,
        e.isStencil = !0, e.preserveDrawingBuffer = !1, e.webGL2D_MeshAllocMaxMem = !0,
        e.is2DPixelArtGame = !1, e.useWebGL2 = !0, e.useRetinalCanvas = !1, window.Config = e;
    var i = /* */ function() {
        function i() {
            _classCallCheck(this, i);
        }
        _createClass(i, null, [{
            key: "regClass",
            value: function regClass(t) {
                i.__classMap[t.name] = t;
            }
        }]);
        return i;
    }();
    i.Laya = null, i.Timer = null, i.WorkerLoader = null, i.Dragging = null, i.GraphicsBounds = null,
        i.Sprite = null, i.TextRender = null, i.TextAtlas = null, i.timer = null, i.systemTimer = null,
        i.startTimer = null, i.updateTimer = null, i.lateTimer = null, i.physicsTimer = null,
        i.stage = null, i.Loader = null, i.loader = null, i.TTFLoader = null, i.SoundManager = null,
        i.WebAudioSound = null, i.AudioSound = null, i.ShaderCompile = null, i.ClassUtils = null,
        i.SceneUtils = null, i.Context = null, i.Render = null, i.MouseManager = null, i.Text = null,
        i.Browser = null, i.WebGL = null, i.Pool = null, i.Utils = null, i.Graphics = null,
        i.Submit = null, i.Stage = null, i.Resource = null, i.__classMap = {};
    var s = /* */ function() {
        function s() {
            _classCallCheck(this, s);
        }
        _createClass(s, null, [{
            key: "getPoolBySign",
            value: function getPoolBySign(t) {
                return s._poolDic[t] || (s._poolDic[t] = []);
            }
        }, {
            key: "clearBySign",
            value: function clearBySign(t) {
                s._poolDic[t] && (s._poolDic[t].length = 0);
            }
        }, {
            key: "recover",
            value: function recover(t, e) {
                e[s.POOLSIGN] || (e[s.POOLSIGN] = !0, s.getPoolBySign(t).push(e));
            }
        }, {
            key: "recoverByClass",
            value: function recoverByClass(t) {
                if (t) {
                    var e = t.__className || t.constructor._$gid;
                    e && s.recover(e, t);
                }
            }
        }, {
            key: "_getClassSign",
            value: function _getClassSign(t) {
                var e = t.__className || t._$gid;
                return e || (t._$gid = e = s._CLSID + "", s._CLSID++), e;
            }
        }, {
            key: "createByClass",
            value: function createByClass(t) {
                return s.getItemByClass(s._getClassSign(t), t);
            }
        }, {
            key: "getItemByClass",
            value: function getItemByClass(t, e) {
                if (!s._poolDic[t]) return new e();
                var i = s.getPoolBySign(t);
                if (i.length) {
                    var r = i.pop();
                    r[s.POOLSIGN] = !1;
                } else r = new e();
                return r;
            }
        }, {
            key: "getItemByCreateFun",
            value: function getItemByCreateFun(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = s.getPoolBySign(t),
                    a = r.length ? r.pop() : e.call(i);
                return a[s.POOLSIGN] = !1, a;
            }
        }, {
            key: "getItem",
            value: function getItem(t) {
                var e = s.getPoolBySign(t),
                    i = e.length ? e.pop() : null;
                return i && (i[s.POOLSIGN] = !1), i;
            }
        }]);
        return s;
    }();
    s._CLSID = 0, s.POOLSIGN = "__InPool", s._poolDic = {};
    var r = /* */ function() {
        function r() {
            _classCallCheck(this, r);
        }
        _createClass(r, [{
            key: "recover",
            value: function recover() {
                s.recover("AlphaCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.alpha(this.alpha);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return r.ID;
            }
        }], [{
            key: "create",
            value: function create(t) {
                var e = s.getItemByClass("AlphaCmd", r);
                return e.alpha = t, e;
            }
        }]);
        return r;
    }();
    r.ID = "Alpha";
    var a = /* */ function() {
        function a() {
            _classCallCheck(this, a);
        }
        _createClass(a, [{
            key: "recover",
            value: function recover() {
                this.fillColor = null, this.lineColor = null, s.recover("DrawCircleCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return a.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, n, h, o) {
                var l = s.getItemByClass("DrawCircleCmd", a);
                return l.x = t, l.y = e, l.radius = i, l.fillColor = r, l.lineColor = n, l.lineWidth = h,
                    l.vid = o, l;
            }
        }]);
        return a;
    }();
    a.ID = "DrawCircle";
    var n = /* */ function() {
        function n() {
            _classCallCheck(this, n);
        }
        _createClass(n, [{
            key: "recover",
            value: function recover() {
                this.points = null, this.lineColor = null, s.recover("DrawCurvesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.points && t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return n.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a) {
                var h = s.getItemByClass("DrawCurvesCmd", n);
                return h.x = t, h.y = e, h.points = i, h.lineColor = r, h.lineWidth = a, h;
            }
        }]);
        return n;
    }();
    n.ID = "DrawCurves";
    var h = /* */ function() {
        function h() {
            _classCallCheck(this, h);
        }
        _createClass(h, [{
            key: "recover",
            value: function recover() {
                this.texture && this.texture._removeReference(), this.texture = null, s.recover("DrawImageCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.texture && t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return h.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a) {
                var n = s.getItemByClass("DrawImageCmd", h);
                return n.texture = t, t._addReference(), n.x = e, n.y = i, n.width = r, n.height = a,
                    n;
            }
        }]);
        return h;
    }();
    h.ID = "DrawImage";
    var o = /* */ function() {
        function o() {
            _classCallCheck(this, o);
        }
        _createClass(o, [{
            key: "recover",
            value: function recover() {
                s.recover("DrawLineCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return o.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h) {
                var l = s.getItemByClass("DrawLineCmd", o);
                return l.fromX = t, l.fromY = e, l.toX = i, l.toY = r, l.lineColor = a, l.lineWidth = n,
                    l.vid = h, l;
            }
        }]);
        return o;
    }();
    o.ID = "DrawLine";
    var l = /* */ function() {
        function l() {
            _classCallCheck(this, l);
        }
        _createClass(l, [{
            key: "recover",
            value: function recover() {
                this.points = null, this.lineColor = null, s.recover("DrawLinesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.points && t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return l.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n) {
                var h = s.getItemByClass("DrawLinesCmd", l);
                return h.x = t, h.y = e, h.points = i, h.lineColor = r, h.lineWidth = a, h.vid = n,
                    h;
            }
        }]);
        return l;
    }();
    l.ID = "DrawLines";
    var _ = /* */ function() {
        function _() {
            _classCallCheck(this, _);
        }
        _createClass(_, [{
            key: "recover",
            value: function recover() {
                this.paths = null, this.brush = null, this.pen = null, s.recover("DrawPathCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.paths && t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return _.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a) {
                var n = s.getItemByClass("DrawPathCmd", _);
                return n.x = t, n.y = e, n.paths = i, n.brush = r, n.pen = a, n;
            }
        }]);
        return _;
    }();
    _.ID = "DrawPath";
    var c = /* */ function() {
        function c() {
            _classCallCheck(this, c);
        }
        _createClass(c, [{
            key: "recover",
            value: function recover() {
                this.fillColor = null, this.lineColor = null, s.recover("DrawPieCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return c.ID;
            }
        }, {
            key: "startAngle",
            get: function get() {
                return 180 * this._startAngle / Math.PI;
            },
            set: function set(t) {
                this._startAngle = t * Math.PI / 180;
            }
        }, {
            key: "endAngle",
            get: function get() {
                return 180 * this._endAngle / Math.PI;
            },
            set: function set(t) {
                this._endAngle = t * Math.PI / 180;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l) {
                var _ = s.getItemByClass("DrawPieCmd", c);
                return _.x = t, _.y = e, _.radius = i, _._startAngle = r, _._endAngle = a, _.fillColor = n,
                    _.lineColor = h, _.lineWidth = o, _.vid = l, _;
            }
        }]);
        return c;
    }();
    c.ID = "DrawPie";
    var u = /* */ function() {
        function u() {
            _classCallCheck(this, u);
        }
        _createClass(u, [{
            key: "recover",
            value: function recover() {
                this.points = null, this.fillColor = null, this.lineColor = null, s.recover("DrawPolyCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.points && t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return u.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h, o) {
                var l = s.getItemByClass("DrawPolyCmd", u);
                return l.x = t, l.y = e, l.points = i, l.fillColor = r, l.lineColor = a, l.lineWidth = n,
                    l.isConvexPolygon = h, l.vid = o, l;
            }
        }]);
        return u;
    }();
    u.ID = "DrawPoly";
    var d = /* */ function() {
        function d() {
            _classCallCheck(this, d);
        }
        _createClass(d, [{
            key: "recover",
            value: function recover() {
                this.fillColor = null, this.lineColor = null, s.recover("DrawRectCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return d.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h) {
                var o = s.getItemByClass("DrawRectCmd", d);
                return o.x = t, o.y = e, o.width = i, o.height = r, o.fillColor = a, o.lineColor = n,
                    o.lineWidth = h, o;
            }
        }]);
        return d;
    }();
    d.ID = "DrawRect";
    var p = /* */ function() {
        function p() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            _classCallCheck(this, p);
            if (this._bTransform = !1, null != p._createFun) return p._createFun(t, e, i, s, r, a, n);
            this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = a, this._checkTransform();
        }
        _createClass(p, [{
            key: "identity",
            value: function identity() {
                return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1,
                    this;
            }
        }, {
            key: "_checkTransform",
            value: function _checkTransform() {
                return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
            }
        }, {
            key: "setTranslate",
            value: function setTranslate(t, e) {
                return this.tx = t, this.ty = e, this;
            }
        }, {
            key: "translate",
            value: function translate(t, e) {
                return this.tx += t, this.ty += e, this;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e,
                    this._bTransform = !0, this;
            }
        }, {
            key: "rotate",
            value: function rotate(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    s = this.a,
                    r = this.c,
                    a = this.tx;
                return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = r * e - this.d * i,
                    this.d = r * i + this.d * e, this.tx = a * e - this.ty * i, this.ty = a * i + this.ty * e,
                    this._bTransform = !0, this;
            }
        }, {
            key: "skew",
            value: function skew(t, e) {
                var i = Math.tan(t),
                    s = Math.tan(e),
                    r = this.a,
                    a = this.b;
                return this.a += s * this.c, this.b += s * this.d, this.c += i * r, this.d += i * a,
                    this;
            }
        }, {
            key: "invertTransformPoint",
            value: function invertTransformPoint(t) {
                var e = this.a,
                    i = this.b,
                    s = this.c,
                    r = this.d,
                    a = this.tx,
                    n = e * r - i * s,
                    h = r / n,
                    o = -i / n,
                    l = -s / n,
                    _ = e / n,
                    c = (s * this.ty - r * a) / n,
                    u = -(e * this.ty - i * a) / n;
                return t.setTo(h * t.x + l * t.y + c, o * t.x + _ * t.y + u);
            }
        }, {
            key: "transformPoint",
            value: function transformPoint(t) {
                return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
            }
        }, {
            key: "transformPointN",
            value: function transformPointN(t) {
                return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
            }
        }, {
            key: "getScaleX",
            value: function getScaleX() {
                return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
            }
        }, {
            key: "getScaleY",
            value: function getScaleY() {
                return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
            }
        }, {
            key: "invert",
            value: function invert() {
                var t = this.a,
                    e = this.b,
                    i = this.c,
                    s = this.d,
                    r = this.tx,
                    a = t * s - e * i;
                return this.a = s / a, this.b = -e / a, this.c = -i / a, this.d = t / a, this.tx = (i * this.ty - s * r) / a,
                    this.ty = -(t * this.ty - e * r) / a, this;
            }
        }, {
            key: "setTo",
            value: function setTo(t, e, i, s, r, a) {
                return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = a,
                    this;
            }
        }, {
            key: "concat",
            value: function concat(t) {
                var e = this.a,
                    i = this.c,
                    s = this.tx;
                return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c,
                    this.d = i * t.b + this.d * t.d, this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty,
                    this;
            }
        }, {
            key: "scaleEx",
            value: function scaleEx(t, e) {
                var i = this.a,
                    s = this.b,
                    r = this.c,
                    a = this.d;
                0 !== s || 0 !== r ? (this.a = t * i, this.b = t * s, this.c = e * r, this.d = e * a) : (this.a = t * i,
                    this.b = 0 * a, this.c = 0 * i, this.d = e * a), this._bTransform = !0;
            }
        }, {
            key: "rotateEx",
            value: function rotateEx(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    s = this.a,
                    r = this.b,
                    a = this.c,
                    n = this.d;
                0 !== r || 0 !== a ? (this.a = e * s + i * a, this.b = e * r + i * n, this.c = -i * s + e * a,
                        this.d = -i * r + e * n) : (this.a = e * s, this.b = i * n, this.c = -i * s, this.d = e * n),
                    this._bTransform = !0;
            }
        }, {
            key: "clone",
            value: function clone() {
                var t = p.create();
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty,
                    t._bTransform = this._bTransform, t;
            }
        }, {
            key: "copyTo",
            value: function copyTo(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty,
                    t._bTransform = this._bTransform, t;
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.recover();
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("Matrix", this.identity());
            }
        }], [{
            key: "mul",
            value: function mul(t, e, i) {
                var s = t.a,
                    r = t.b,
                    a = t.c,
                    n = t.d,
                    h = t.tx,
                    o = t.ty,
                    l = e.a,
                    _ = e.b,
                    c = e.c,
                    u = e.d,
                    d = e.tx,
                    p = e.ty;
                return 0 !== _ || 0 !== c ? (i.a = s * l + r * c, i.b = s * _ + r * u, i.c = a * l + n * c,
                    i.d = a * _ + n * u, i.tx = l * h + c * o + d, i.ty = _ * h + u * o + p) : (i.a = s * l,
                    i.b = r * u, i.c = a * l, i.d = n * u, i.tx = l * h + d, i.ty = u * o + p), i;
            }
        }, {
            key: "mul16",
            value: function mul16(t, e, i) {
                var s = t.a,
                    r = t.b,
                    a = t.c,
                    n = t.d,
                    h = t.tx,
                    o = t.ty,
                    l = e.a,
                    _ = e.b,
                    c = e.c,
                    u = e.d,
                    d = e.tx,
                    p = e.ty;
                return 0 !== _ || 0 !== c ? (i[0] = s * l + r * c, i[1] = s * _ + r * u, i[4] = a * l + n * c,
                        i[5] = a * _ + n * u, i[12] = l * h + c * o + d, i[13] = _ * h + u * o + p) : (i[0] = s * l,
                        i[1] = r * u, i[4] = a * l, i[5] = n * u, i[12] = l * h + d, i[13] = u * o + p),
                    i;
            }
        }, {
            key: "create",
            value: function create() {
                return s.getItemByClass("Matrix", p);
            }
        }]);
        return p;
    }();
    p.EMPTY = new p(), p.TEMP = new p(), p._createFun = null;
    var f = /* */ function() {
        function f() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            _classCallCheck(this, f);
            this.x = t, this.y = e;
        }
        _createClass(f, [{
            key: "setTo",
            value: function setTo(t, e) {
                return this.x = t, this.y = e, this;
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.x = this.y = 0, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("Point", this.reset());
            }
        }, {
            key: "distance",
            value: function distance(t, e) {
                return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.x + "," + this.y;
            }
        }, {
            key: "normalize",
            value: function normalize() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y);
                if (t > 0) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e;
                }
            }
        }, {
            key: "copy",
            value: function copy(t) {
                return this.setTo(t.x, t.y);
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("Point", f);
            }
        }]);
        return f;
    }();
    f.TEMP = new f(), f.EMPTY = new f();
    var g = /* */ function() {
        function g() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            _classCallCheck(this, g);
            this.x = t, this.y = e, this.width = i, this.height = s;
        }
        _createClass(g, [{
            key: "setTo",
            value: function setTo(t, e, i, s) {
                return this.x = t, this.y = e, this.width = i, this.height = s, this;
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.x = this.y = this.width = this.height = 0, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this != g.TEMP && this != g.EMPTY ? s.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this);
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height,
                    this;
            }
        }, {
            key: "contains",
            value: function contains(t, e) {
                return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.right && e >= this.y && e < this.bottom;
            }
        }, {
            key: "intersects",
            value: function intersects(t) {
                return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
            }
        }, {
            key: "intersection",
            value: function intersection(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                return this.intersects(t) ? (e || (e = new g()), e.x = Math.max(this.x, t.x), e.y = Math.max(this.y, t.y),
                    e.width = Math.min(this.right, t.right) - e.x, e.height = Math.min(this.bottom, t.bottom) - e.y,
                    e) : null;
            }
        }, {
            key: "union",
            value: function union(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                return e || (e = new g()), this.clone(e), t.width <= 0 || t.height <= 0 ? e : (e.addPoint(t.x, t.y),
                    e.addPoint(t.right, t.bottom), this);
            }
        }, {
            key: "clone",
            value: function clone() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return t || (t = new g()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height,
                    t;
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.x + "," + this.y + "," + this.width + "," + this.height;
            }
        }, {
            key: "equals",
            value: function equals(t) {
                return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height);
            }
        }, {
            key: "addPoint",
            value: function addPoint(t, e) {
                return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e,
                        this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y),
                    this;
            }
        }, {
            key: "_getBoundPoints",
            value: function _getBoundPoints() {
                var t = g._temB;
                return t.length = 0, 0 == this.width || 0 == this.height ? t : (t.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height),
                    t);
            }
        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return this.width <= 0 || this.height <= 0;
            }
        }, {
            key: "right",
            get: function get() {
                return this.x + this.width;
            }
        }, {
            key: "bottom",
            get: function get() {
                return this.y + this.height;
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("Rectangle", g);
            }
        }, {
            key: "_getBoundPointS",
            value: function _getBoundPointS(t, e, i, s) {
                var r = g._temA;
                return r.length = 0, 0 == i || 0 == s ? r : (r.push(t, e, t + i, e, t, e + s, t + i, e + s),
                    r);
            }
        }, {
            key: "_getWrapRec",
            value: function _getWrapRec(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (!t || t.length < 1) return e ? e.setTo(0, 0, 0, 0) : g.TEMP.setTo(0, 0, 0, 0);
                e = e || g.create();
                var i, s, r, a, n, h = t.length,
                    o = f.TEMP;
                for (r = n = -(s = a = 99999), i = 0; i < h; i += 2) {
                    o.x = t[i], o.y = t[i + 1], s = s < o.x ? s : o.x, a = a < o.y ? a : o.y, r = r > o.x ? r : o.x,
                        n = n > o.y ? n : o.y;
                }
                return e.setTo(s, a, r - s, n - a);
            }
        }]);
        return g;
    }();
    g.EMPTY = new g(), g.TEMP = new g(), g._temB = [], g._temA = [];
    var m = function m() {
        _classCallCheck(this, m);
    };
    m.ARRAY_BUFFER_TYPE_DATA = 0, m.ARRAY_BUFFER_TYPE_CMD = 1, m.ARRAY_BUFFER_REF_REFERENCE = 0,
        m.ARRAY_BUFFER_REF_COPY = 1, m.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, m.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1;
    var v = /* */ function() {
        function v() {
            _classCallCheck(this, v);
        }
        _createClass(v, null, [{
            key: "__init__",
            value: function __init__() {
                var t = m.instance;
                v._depthFunc = t.LESS, v._blendEquation = t.FUNC_ADD, v._blendEquationRGB = t.FUNC_ADD,
                    v._blendEquationAlpha = t.FUNC_ADD, v._sFactor = t.ONE, v._dFactor = t.ZERO, v._sFactorAlpha = t.ONE,
                    v._dFactorAlpha = t.ZERO, v._activedTextureID = t.TEXTURE0, v._glTextureIDs = [t.TEXTURE0, t.TEXTURE1, t.TEXTURE2, t.TEXTURE3, t.TEXTURE4, t.TEXTURE5, t.TEXTURE6, t.TEXTURE7];
            }
        }, {
            key: "useProgram",
            value: function useProgram(t, e) {
                return v._useProgram !== e && (t.useProgram(e), v._useProgram = e, !0);
            }
        }, {
            key: "setDepthTest",
            value: function setDepthTest(t, e) {
                e !== v._depthTest && (v._depthTest = e, e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST));
            }
        }, {
            key: "setDepthMask",
            value: function setDepthMask(t, e) {
                e !== v._depthMask && (v._depthMask = e, t.depthMask(e));
            }
        }, {
            key: "setDepthFunc",
            value: function setDepthFunc(t, e) {
                e !== v._depthFunc && (v._depthFunc = e, t.depthFunc(e));
            }
        }, {
            key: "setBlend",
            value: function setBlend(t, e) {
                e !== v._blend && (v._blend = e, e ? t.enable(t.BLEND) : t.disable(t.BLEND));
            }
        }, {
            key: "setBlendEquation",
            value: function setBlendEquation(t, e) {
                e !== v._blendEquation && (v._blendEquation = e, v._blendEquationRGB = v._blendEquationAlpha = null,
                    t.blendEquation(e));
            }
        }, {
            key: "setBlendEquationSeparate",
            value: function setBlendEquationSeparate(t, e, i) {
                e === v._blendEquationRGB && i === v._blendEquationAlpha || (v._blendEquationRGB = e,
                    v._blendEquationAlpha = i, v._blendEquation = null, t.blendEquationSeparate(e, i));
            }
        }, {
            key: "setBlendFunc",
            value: function setBlendFunc(t, e, i) {
                e === v._sFactor && i === v._dFactor || (v._sFactor = e, v._dFactor = i, v._sFactorRGB = null,
                    v._dFactorRGB = null, v._sFactorAlpha = null, v._dFactorAlpha = null, t.blendFunc(e, i));
            }
        }, {
            key: "setBlendFuncSeperate",
            value: function setBlendFuncSeperate(t, e, i, s, r) {
                e === v._sFactorRGB && i === v._dFactorRGB && s === v._sFactorAlpha && r === v._dFactorAlpha || (v._sFactorRGB = e,
                    v._dFactorRGB = i, v._sFactorAlpha = s, v._dFactorAlpha = r, v._sFactor = null,
                    v._dFactor = null, t.blendFuncSeparate(e, i, s, r));
            }
        }, {
            key: "setCullFace",
            value: function setCullFace(t, e) {
                e !== v._cullFace && (v._cullFace = e, e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE));
            }
        }, {
            key: "setFrontFace",
            value: function setFrontFace(t, e) {
                e !== v._frontFace && (v._frontFace = e, t.frontFace(e));
            }
        }, {
            key: "activeTexture",
            value: function activeTexture(t, e) {
                v._activedTextureID !== e && (t.activeTexture(e), v._activedTextureID = e);
            }
        }, {
            key: "bindTexture",
            value: function bindTexture(t, e, i) {
                v._activeTextures[v._activedTextureID - t.TEXTURE0] !== i && (t.bindTexture(e, i),
                    v._activeTextures[v._activedTextureID - t.TEXTURE0] = i);
            }
        }, {
            key: "__init_native",
            value: function __init_native() {
                if (i.Render.supportWebGLPlusRendering) {
                    var t = v;
                    t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative;
                }
            }
        }, {
            key: "useProgramForNative",
            value: function useProgramForNative(t, e) {
                return t.useProgram(e), !0;
            }
        }, {
            key: "setDepthTestForNative",
            value: function setDepthTestForNative(t, e) {
                e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST);
            }
        }, {
            key: "setDepthMaskForNative",
            value: function setDepthMaskForNative(t, e) {
                t.depthMask(e);
            }
        }, {
            key: "setDepthFuncForNative",
            value: function setDepthFuncForNative(t, e) {
                t.depthFunc(e);
            }
        }, {
            key: "setBlendForNative",
            value: function setBlendForNative(t, e) {
                e ? t.enable(t.BLEND) : t.disable(t.BLEND);
            }
        }, {
            key: "setBlendFuncForNative",
            value: function setBlendFuncForNative(t, e, i) {
                t.blendFunc(e, i);
            }
        }, {
            key: "setCullFaceForNative",
            value: function setCullFaceForNative(t, e) {
                e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE);
            }
        }, {
            key: "setFrontFaceForNative",
            value: function setFrontFaceForNative(t, e) {
                t.frontFace(e);
            }
        }, {
            key: "activeTextureForNative",
            value: function activeTextureForNative(t, e) {
                t.activeTexture(e);
            }
        }, {
            key: "bindTextureForNative",
            value: function bindTextureForNative(t, e, i) {
                t.bindTexture(e, i);
            }
        }, {
            key: "bindVertexArrayForNative",
            value: function bindVertexArrayForNative(t, e) {
                t.bindVertexArray(e);
            }
        }, {
            key: "_sFactor",
            get: function get() {
                return v.__sFactor;
            },
            set: function set(t) {
                v.__sFactor = t;
            }
        }, {
            key: "_dFactor",
            get: function get() {
                return v.__dFactor;
            },
            set: function set(t) {
                v.__dFactor = t;
            }
        }]);
        return v;
    }();
    v._activeTextures = new Array(8), v._useProgram = null, v._depthTest = !0, v._depthMask = !0,
        v._blend = !1, v._cullFace = !1, v.mainContext = null;
    var T = /* */ function() {
        function T() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            _classCallCheck(this, T);
            this.once = !1, this._id = 0, this.setTo(t, e, i, s);
        }
        _createClass(T, [{
            key: "setTo",
            value: function setTo(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                return this._id = T._gid++, this.caller = t, this.method = e, this.args = i, this.once = s,
                    this;
            }
        }, {
            key: "run",
            value: function run() {
                if (null == this.method) return null;
                var t = this._id,
                    e = this.method.apply(this.caller, this.args);
                return this._id === t && this.once && this.recover(), e;
            }
        }, {
            key: "runWith",
            value: function runWith(t) {
                if (null == this.method) return null;
                var e = this._id;
                if (null == t) var i = this.method.apply(this.caller, this.args);
                else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
                return this._id === e && this.once && this.recover(), i;
            }
        }, {
            key: "clear",
            value: function clear() {
                return this.caller = null, this.method = null, this.args = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this._id > 0 && (this._id = 0, T._pool.push(this.clear()));
            }
        }], [{
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                return T._pool.length ? T._pool.pop().setTo(t, e, i, s) : new T(t, e, i, s);
            }
        }]);
        return T;
    }();
    T._pool = [], T._gid = 1;
    var x = /* */ function() {
        function x() {
            _classCallCheck(this, x);
        }
        _createClass(x, [{
            key: "hasListener",
            value: function hasListener(t) {
                return !!(this._events && this._events[t]);
            }
        }, {
            key: "event",
            value: function event(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (!this._events || !this._events[t]) return !1;
                var i = this._events[t];
                if (i.run) i.once && delete this._events[t], null != e ? i.runWith(e) : i.run();
                else {
                    for (var s = 0, r = i.length; s < r; s++) {
                        var a = i[s];
                        a && (null != e ? a.runWith(e) : a.run()), a && !a.once || (i.splice(s, 1), s--,
                            r--);
                    }
                    0 === i.length && this._events && delete this._events[t];
                }
                return !0;
            }
        }, {
            key: "on",
            value: function on(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return this._createListener(t, e, i, s, !1);
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return this._createListener(t, e, i, s, !0);
            }
        }, {
            key: "_createListener",
            value: function _createListener(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                a && this.off(t, e, i, r);
                var n = y.create(e || this, i, s, r);
                this._events || (this._events = {});
                var h = this._events;
                return h[t] ? h[t].run ? h[t] = [h[t], n] : h[t].push(n) : h[t] = n, this;
            }
        }, {
            key: "off",
            value: function off(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                if (!this._events || !this._events[t]) return this;
                var r = this._events[t];
                if (null != r)
                    if (r.run) e && r.caller !== e || null != i && r.method !== i || s && !r.once || (delete this._events[t],
                        r.recover());
                    else {
                        for (var a = 0, n = 0, h = r.length; n < h; n++) {
                            var o = r[n];
                            o ? !o || e && o.caller !== e || null != i && o.method !== i || s && !o.once || (a++,
                                r[n] = null, o.recover()) : a++;
                        }
                        a === h && delete this._events[t];
                    }
                return this;
            }
        }, {
            key: "offAll",
            value: function offAll() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = this._events;
                if (!e) return this;
                if (t) this._recoverHandlers(e[t]), delete e[t];
                else {
                    for (var i in e) {
                        this._recoverHandlers(e[i]);
                    }
                    this._events = null;
                }
                return this;
            }
        }, {
            key: "offAllCaller",
            value: function offAllCaller(t) {
                if (t && this._events)
                    for (var e in this._events) {
                        this.off(e, t, null);
                    }
                return this;
            }
        }, {
            key: "_recoverHandlers",
            value: function _recoverHandlers(t) {
                if (t)
                    if (t.run) t.recover();
                    else
                        for (var e = t.length - 1; e > -1; e--) {
                            t[e] && (t[e].recover(), t[e] = null);
                        }
            }
        }, {
            key: "isMouseEvent",
            value: function isMouseEvent(t) {
                return x.MOUSE_EVENTS[t] || !1;
            }
        }]);
        return x;
    }();
    x.MOUSE_EVENTS = {
        rightmousedown: !0,
        rightmouseup: !0,
        rightclick: !0,
        mousedown: !0,
        mouseup: !0,
        mousemove: !0,
        mouseover: !0,
        mouseout: !0,
        click: !0,
        doubleclick: !0
    };
    var y = /* */ function(_T) {
        _inherits(y, _T);

        function y(t, e, i, s) {
            _classCallCheck(this, y);
            return _possibleConstructorReturn(this, _getPrototypeOf(y).call(this, t, e, i, s));
        }
        _createClass(y, [{
            key: "recover",
            value: function recover() {
                this._id > 0 && (this._id = 0, y._pool.push(this.clear()));
            }
        }], [{
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                return y._pool.length ? y._pool.pop().setTo(t, e, i, s) : new y(t, e, i, s);
            }
        }]);
        return y;
    }(T);
    y._pool = [];
    var E = /* */ function() {
        function E(t) {
            _classCallCheck(this, E);
            this._url = E.formatURL(t), this._path = E.getPath(t);
        }
        _createClass(E, [{
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "path",
            get: function get() {
                return this._path;
            }
        }], [{
            key: "formatURL",
            value: function formatURL(t) {
                if (!t) return "null path";
                if (t.indexOf(":") > 0) return t;
                if (null != E.customFormat && (t = E.customFormat(t)), t.indexOf(":") > 0) return t;
                var e = t.charAt(0);
                if ("." === e) return E._formatRelativePath(E._basePath + t);
                if ("~" === e) return E.rootPath + t.substring(1);
                if ("d" === e) {
                    if (0 === t.indexOf("data:image")) return t;
                } else if ("/" === e) return t;
                return E._basePath + t;
            }
        }, {
            key: "_formatRelativePath",
            value: function _formatRelativePath(t) {
                for (var e = t.split("/"), i = 0, s = e.length; i < s; i++) {
                    ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
                }
                return e.join("/");
            }
        }, {
            key: "getPath",
            value: function getPath(t) {
                var e = t.lastIndexOf("/");
                return e > 0 ? t.substr(0, e + 1) : "";
            }
        }, {
            key: "getFileName",
            value: function getFileName(t) {
                var e = t.lastIndexOf("/");
                return e > 0 ? t.substr(e + 1) : t;
            }
        }, {
            key: "getAdptedFilePath",
            value: function getAdptedFilePath(t) {
                if (!E.exportSceneToJson || !t) return t;
                var e, i, s;
                for (i = E._adpteTypeList.length, e = 0; e < i; e++) {
                    s = E._adpteTypeList[e], t = t.replace(s[0], s[1]);
                }
                return t;
            }
        }, {
            key: "basePath",
            set: function set(t) {
                E._basePath = i.Laya._getUrlPath(), E._basePath = E.formatURL(t);
            },
            get: function get() {
                return E._basePath;
            }
        }]);
        return E;
    }();
    E.version = {}, E.exportSceneToJson = !1, E._basePath = "", E.rootPath = "", E.customFormat = function(t) {
        var e = E.version[t];
        return !window.conch && e && (t += "?v=" + e), t;
    }, E._adpteTypeList = [
        [".scene3d", ".json"],
        [".scene", ".json"],
        [".taa", ".json"],
        [".prefab", ".json"]
    ];
    var C = /* */ function(_x) {
        _inherits(C, _x);

        function C() {
            var _this;
            _classCallCheck(this, C);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(C).call(this)), _this._id = 0,
                _this._url = null, _this._cpuMemory = 0, _this._gpuMemory = 0, _this._destroyed = !1,
                _this._referenceCount = 0, _this.lock = !1, _this.name = null, _this._id = ++C._uniqueIDCounter,
                _this._destroyed = !1, _this._referenceCount = 0, C._idResourcesMap[_this.id] = _assertThisInitialized(_this),
                _this.lock = !1;
            return _this;
        }
        _createClass(C, [{
            key: "_setCPUMemory",
            value: function _setCPUMemory(t) {
                var e = t - this._cpuMemory;
                this._cpuMemory = t, C._addCPUMemory(e);
            }
        }, {
            key: "_setGPUMemory",
            value: function _setGPUMemory(t) {
                var e = t - this._gpuMemory;
                this._gpuMemory = t, C._addGPUMemory(e);
            }
        }, {
            key: "_setCreateURL",
            value: function _setCreateURL(t) {
                var e;
                (t = E.formatURL(t), this._url !== t) && (this._url && ((e = C._urlResourcesMap[this._url]).splice(e.indexOf(this), 1),
                    0 === e.length && delete C._urlResourcesMap[this._url]), t && ((e = C._urlResourcesMap[t]) || (C._urlResourcesMap[t] = e = []),
                    e.push(this)), this._url = t);
            }
        }, {
            key: "_addReference",
            value: function _addReference() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                this._referenceCount += t;
            }
        }, {
            key: "_removeReference",
            value: function _removeReference() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                this._referenceCount -= t;
            }
        }, {
            key: "_clearReference",
            value: function _clearReference() {
                this._referenceCount = 0;
            }
        }, {
            key: "_recoverResource",
            value: function _recoverResource() {}
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {}
        }, {
            key: "_activeResource",
            value: function _activeResource() {}
        }, {
            key: "destroy",
            value: function destroy() {
                var t;
                this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(),
                    delete C._idResourcesMap[this.id], this._url && ((t = C._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1),
                        0 === t.length && delete C._urlResourcesMap[this._url]), i.Loader.loadedMap[this._url] == this && delete i.Loader.loadedMap[this._url]));
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "cpuMemory",
            get: function get() {
                return this._cpuMemory;
            }
        }, {
            key: "gpuMemory",
            get: function get() {
                return this._gpuMemory;
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        }, {
            key: "referenceCount",
            get: function get() {
                return this._referenceCount;
            }
        }], [{
            key: "_addCPUMemory",
            value: function _addCPUMemory(t) {
                C._cpuMemory += t;
            }
        }, {
            key: "_addGPUMemory",
            value: function _addGPUMemory(t) {
                C._gpuMemory += t;
            }
        }, {
            key: "_addMemory",
            value: function _addMemory(t, e) {
                C._cpuMemory += t, C._gpuMemory += e;
            }
        }, {
            key: "getResourceByID",
            value: function getResourceByID(t) {
                return C._idResourcesMap[t];
            }
        }, {
            key: "getResourceByURL",
            value: function getResourceByURL(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return C._urlResourcesMap[t][e];
            }
        }, {
            key: "destroyUnusedResources",
            value: function destroyUnusedResources() {
                for (var t in C._idResourcesMap) {
                    var e = C._idResourcesMap[t];
                    e.lock || 0 !== e._referenceCount || e.destroy();
                }
            }
        }, {
            key: "cpuMemory",
            get: function get() {
                return C._cpuMemory;
            }
        }, {
            key: "gpuMemory",
            get: function get() {
                return C._gpuMemory;
            }
        }]);
        return C;
    }(x);
    C._uniqueIDCounter = 0, C._idResourcesMap = {}, C._urlResourcesMap = {}, C._cpuMemory = 0,
        C._gpuMemory = 0;
    var b = /* */ function(_C) {
        _inherits(b, _C);
        _createClass(b, [{
            key: "width",
            get: function get() {
                return this._width;
            },
            set: function set(t) {
                this._width = t;
            }
        }, {
            key: "height",
            get: function get() {
                return this._height;
            },
            set: function set(t) {
                this._height = t;
            }
        }]);

        function b() {
            var _this2;
            _classCallCheck(this, b);
            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(b).call(this)), _this2._width = -1,
                _this2._height = -1;
            return _this2;
        }
        _createClass(b, [{
            key: "_getSource",
            value: function _getSource() {
                throw "Bitmap: must override it.";
            }
        }]);
        return b;
    }(C);
    var A, R, w, S, M;
    (A = t.FilterMode || (t.FilterMode = {}))[A.Point = 0] = "Point", A[A.Bilinear = 1] = "Bilinear",
        A[A.Trilinear = 2] = "Trilinear", (R = t.TextureFormat || (t.TextureFormat = {}))[R.R8G8B8 = 0] = "R8G8B8",
        R[R.R8G8B8A8 = 1] = "R8G8B8A8", R[R.R5G6B5 = 16] = "R5G6B5", R[R.Alpha8 = 2] = "Alpha8",
        R[R.DXT1 = 3] = "DXT1", R[R.DXT5 = 4] = "DXT5", R[R.ETC1RGB = 5] = "ETC1RGB", R[R.PVRTCRGB_2BPPV = 9] = "PVRTCRGB_2BPPV",
        R[R.PVRTCRGBA_2BPPV = 10] = "PVRTCRGBA_2BPPV", R[R.PVRTCRGB_4BPPV = 11] = "PVRTCRGB_4BPPV",
        R[R.PVRTCRGBA_4BPPV = 12] = "PVRTCRGBA_4BPPV", R[R.R32G32B32A32 = 15] = "R32G32B32A32",
        (w = t.WarpMode || (t.WarpMode = {}))[w.Repeat = 0] = "Repeat", w[w.Clamp = 1] = "Clamp";
    var I = /* */ function(_b) {
        _inherits(I, _b);

        function I(e, i) {
            var _this3;
            _classCallCheck(this, I);
            _this3 = _possibleConstructorReturn(this, _getPrototypeOf(I).call(this)), _this3._wrapModeU = t.WarpMode.Repeat,
                _this3._wrapModeV = t.WarpMode.Repeat, _this3._filterMode = t.FilterMode.Bilinear,
                _this3._readyed = !1, _this3._width = -1, _this3._height = -1, _this3._format = e,
                _this3._mipmap = i, _this3._anisoLevel = 1, _this3._glTexture = m.instance.createTexture();
            return _this3;
        }
        _createClass(I, [{
            key: "_getFormatByteCount",
            value: function _getFormatByteCount() {
                switch (this._format) {
                    case t.TextureFormat.R8G8B8:
                        return 3;

                    case t.TextureFormat.R8G8B8A8:
                        return 4;

                    case t.TextureFormat.R5G6B5:
                    case t.TextureFormat.Alpha8:
                        return 1;

                    case t.TextureFormat.R32G32B32A32:
                        return 4;

                    default:
                        throw "Texture2D: unknown format.";
                }
            }
        }, {
            key: "_isPot",
            value: function _isPot(t) {
                return 0 == (t & t - 1);
            }
        }, {
            key: "_getGLFormat",
            value: function _getGLFormat() {
                var e, i = m.instance,
                    s = m.layaGPUInstance;
                switch (this._format) {
                    case t.TextureFormat.R8G8B8:
                    case t.TextureFormat.R5G6B5:
                        e = i.RGB;
                        break;

                    case t.TextureFormat.R8G8B8A8:
                        e = i.RGBA;
                        break;

                    case t.TextureFormat.Alpha8:
                        e = i.ALPHA;
                        break;

                    case t.TextureFormat.R32G32B32A32:
                        e = i.RGBA;
                        break;

                    case t.TextureFormat.DXT1:
                        if (!s._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                        e = s._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        break;

                    case t.TextureFormat.DXT5:
                        if (!s._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                        e = s._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        break;

                    case t.TextureFormat.ETC1RGB:
                        if (!s._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                        e = s._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                        break;

                    case t.TextureFormat.PVRTCRGB_2BPPV:
                        if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                        e = s._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        break;

                    case t.TextureFormat.PVRTCRGBA_2BPPV:
                        if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                        e = s._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                        break;

                    case t.TextureFormat.PVRTCRGB_4BPPV:
                        if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                        e = s._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        break;

                    case t.TextureFormat.PVRTCRGBA_4BPPV:
                        if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                        e = s._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        break;

                    default:
                        throw "BaseTexture: unknown texture format.";
                }
                return e;
            }
        }, {
            key: "_setFilterMode",
            value: function _setFilterMode(e) {
                var i = m.instance;
                switch (v.bindTexture(i, this._glTextureType, this._glTexture), e) {
                    case t.FilterMode.Point:
                        this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.NEAREST_MIPMAP_NEAREST) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.NEAREST),
                            i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.NEAREST);
                        break;

                    case t.FilterMode.Bilinear:
                        this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_NEAREST) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR),
                            i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.LINEAR);
                        break;

                    case t.FilterMode.Trilinear:
                        this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR),
                            i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.LINEAR);
                        break;

                    default:
                        throw new Error("BaseTexture:unknown filterMode value.");
                }
            }
        }, {
            key: "_setWarpMode",
            value: function _setWarpMode(e, i) {
                var s = m.instance;
                if (v.bindTexture(s, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (i) {
                    case t.WarpMode.Repeat:
                        s.texParameteri(this._glTextureType, e, s.REPEAT);
                        break;

                    case t.WarpMode.Clamp:
                        s.texParameteri(this._glTextureType, e, s.CLAMP_TO_EDGE);
                } else s.texParameteri(this._glTextureType, e, s.CLAMP_TO_EDGE);
            }
        }, {
            key: "_setAnisotropy",
            value: function _setAnisotropy(t) {
                var e = m.layaGPUInstance._extTextureFilterAnisotropic;
                if (e) {
                    t = Math.max(t, 1);
                    var i = m.instance;
                    v.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t),
                        i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
                }
            }
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                this._glTexture && (m.instance.deleteTexture(this._glTexture), this._glTexture = null,
                    this._setGPUMemory(0));
            }
        }, {
            key: "_getSource",
            value: function _getSource() {
                return this._readyed ? this._glTexture : null;
            }
        }, {
            key: "generateMipmap",
            value: function generateMipmap() {
                this._isPot(this.width) && this._isPot(this.height) && m.instance.generateMipmap(this._glTextureType);
            }
        }, {
            key: "mipmap",
            get: function get() {
                return this._mipmap;
            }
        }, {
            key: "format",
            get: function get() {
                return this._format;
            }
        }, {
            key: "wrapModeU",
            get: function get() {
                return this._wrapModeU;
            },
            set: function set(t) {
                this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(m.instance.TEXTURE_WRAP_S, t));
            }
        }, {
            key: "wrapModeV",
            get: function get() {
                return this._wrapModeV;
            },
            set: function set(t) {
                this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(m.instance.TEXTURE_WRAP_T, t));
            }
        }, {
            key: "filterMode",
            get: function get() {
                return this._filterMode;
            },
            set: function set(t) {
                t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
            }
        }, {
            key: "anisoLevel",
            get: function get() {
                return this._anisoLevel;
            },
            set: function set(t) {
                t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
            }
        }, {
            key: "mipmapCount",
            get: function get() {
                return this._mipmapCount;
            }
        }, {
            key: "defaulteTexture",
            get: function get() {
                throw "BaseTexture:must override it.";
            }
        }]);
        return I;
    }(b);
    I._rgbmRange = 5, I.FORMAT_R8G8B8 = 0, I.FORMAT_R8G8B8A8 = 1, I.FORMAT_ALPHA8 = 2,
        I.FORMAT_DXT1 = 3, I.FORMAT_DXT5 = 4, I.FORMAT_ETC1RGB = 5, I.FORMAT_PVRTCRGB_2BPPV = 9,
        I.FORMAT_PVRTCRGBA_2BPPV = 10, I.FORMAT_PVRTCRGB_4BPPV = 11, I.FORMAT_PVRTCRGBA_4BPPV = 12,
        I.RENDERTEXTURE_FORMAT_RGBA_HALF_FLOAT = 14, I.FORMAT_R32G32B32A32 = 15, I.FORMAT_DEPTH_16 = 0,
        I.FORMAT_STENCIL_8 = 1, I.FORMAT_DEPTHSTENCIL_16_8 = 2, I.FORMAT_DEPTHSTENCIL_NONE = 3,
        I.FILTERMODE_POINT = 0, I.FILTERMODE_BILINEAR = 1, I.FILTERMODE_TRILINEAR = 2, I.WARPMODE_REPEAT = 0,
        I.WARPMODE_CLAMP = 1;
    var P = /* */ function(_I) {
        _inherits(P, _I);

        function P() {
            var _this4;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.TextureFormat.R8G8B8A8;
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            _classCallCheck(this, P);
            _this4 = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this, s, r));
            var n = m.instance;
            _this4._glTextureType = n.TEXTURE_2D, _this4._width = e, _this4._height = i, _this4._canRead = a,
                _this4._setWarpMode(n.TEXTURE_WRAP_S, _this4._wrapModeU), _this4._setWarpMode(n.TEXTURE_WRAP_T, _this4._wrapModeV),
                _this4._setFilterMode(_this4._filterMode), _this4._setAnisotropy(_this4._anisoLevel);
            var h = _this4._gpuCompressFormat();
            if (r) {
                var o = Math.max(Math.ceil(Math.log2(e)) + 1, Math.ceil(Math.log2(i)) + 1);
                if (!h)
                    for (var l = 0; l < o; l++) {
                        _this4._setPixels(null, l, Math.max(e >> l, 1), Math.max(i >> l, 1));
                    }
                _this4._mipmapCount = o, _this4._setGPUMemory(e * i * 4 * (1 + 1 / 3));
            } else h || _this4._setPixels(null, 0, e, i), _this4._mipmapCount = 1, _this4._setGPUMemory(e * i * 4);
            return _this4;
        }
        _createClass(P, [{
            key: "_gpuCompressFormat",
            value: function _gpuCompressFormat() {
                return this._format == t.TextureFormat.DXT1 || this._format == t.TextureFormat.DXT5 || this._format == t.TextureFormat.ETC1RGB || this._format == t.TextureFormat.PVRTCRGB_2BPPV || this._format == t.TextureFormat.PVRTCRGBA_2BPPV || this._format == t.TextureFormat.PVRTCRGB_4BPPV || this._format == t.TextureFormat.PVRTCRGBA_4BPPV;
            }
        }, {
            key: "_setPixels",
            value: function _setPixels(e, i, s, r) {
                var a = m.instance,
                    n = this._glTextureType,
                    h = this._getGLFormat();
                switch (v.bindTexture(a, n, this._glTexture), this.format) {
                    case t.TextureFormat.R8G8B8:
                        a.pixelStorei(a.UNPACK_ALIGNMENT, 1), a.texImage2D(n, i, h, s, r, 0, h, a.UNSIGNED_BYTE, e),
                            a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
                        break;

                    case t.TextureFormat.R5G6B5:
                        a.pixelStorei(a.UNPACK_ALIGNMENT, 2), a.texImage2D(n, i, h, s, r, 0, h, a.UNSIGNED_SHORT_5_6_5, e),
                            a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
                        break;

                    case t.TextureFormat.R32G32B32A32:
                        m.layaGPUInstance._isWebGL2 ? a.texImage2D(n, i, a.RGBA32F, s, r, 0, h, a.FLOAT, e) : a.texImage2D(n, i, a.RGBA, s, r, 0, h, a.FLOAT, e);
                        break;

                    default:
                        a.texImage2D(n, i, h, s, r, 0, h, a.UNSIGNED_BYTE, e);
                }
            }
        }, {
            key: "_calcualatesCompressedDataSize",
            value: function _calcualatesCompressedDataSize(e, i, s) {
                switch (e) {
                    case t.TextureFormat.DXT1:
                    case t.TextureFormat.ETC1RGB:
                        return (i + 3 >> 2) * (s + 3 >> 2) * 8;

                    case t.TextureFormat.DXT5:
                        return (i + 3 >> 2) * (s + 3 >> 2) * 16;

                    case t.TextureFormat.PVRTCRGB_4BPPV:
                    case t.TextureFormat.PVRTCRGBA_4BPPV:
                        return Math.floor((Math.max(i, 8) * Math.max(s, 8) * 4 + 7) / 8);

                    case t.TextureFormat.PVRTCRGB_2BPPV:
                    case t.TextureFormat.PVRTCRGBA_2BPPV:
                        return Math.floor((Math.max(i, 16) * Math.max(s, 8) * 2 + 7) / 8);

                    default:
                        return 0;
                }
            }
        }, {
            key: "_pharseDDS",
            value: function _pharseDDS(e) {
                var i = new Int32Array(e, 0, 31);
                if (542327876 != i[0]) throw "Invalid magic number in DDS header";
                if (!(4 & i[20])) throw "Unsupported format, must contain a FourCC code";
                var s = i[21];
                switch (this._format) {
                    case t.TextureFormat.DXT1:
                        if (827611204 !== s) throw "the FourCC code is not same with texture format.";
                        break;

                    case t.TextureFormat.DXT5:
                        if (894720068 !== s) throw "the FourCC code is not same with texture format.";
                        break;

                    default:
                        throw "unknown texture format.";
                }
                var r = 1;
                if (131072 & i[2]) {
                    if (r = Math.max(1, i[7]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
                } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
                var a = i[4],
                    n = i[3];
                this._width = a, this._height = n;
                var h = i[1] + 4;
                this._upLoadCompressedTexImage2D(e, a, n, r, h, 0);
            }
        }, {
            key: "_pharseKTX",
            value: function _pharseKTX(e) {
                var i = new Uint8Array(e, 0, 12);
                if (171 != i[0] || 75 != i[1] || 84 != i[2] || 88 != i[3] || 32 != i[4] || 49 != i[5] || 49 != i[6] || 187 != i[7] || 13 != i[8] || 10 != i[9] || 26 != i[10] || 10 != i[11]) throw "Invalid fileIdentifier in KTX header";
                var s = new Int32Array(i.buffer, i.length, 13);
                switch (s[4]) {
                    case m.layaGPUInstance._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                        this._format = t.TextureFormat.ETC1RGB;
                        break;

                    default:
                        throw "unknown texture format.";
                }
                var r = s[11],
                    a = s[6],
                    n = s[7];
                this._width = a, this._height = n;
                var h = 64 + s[12];
                this._upLoadCompressedTexImage2D(e, a, n, r, h, 4);
            }
        }, {
            key: "_pharsePVR",
            value: function _pharsePVR(e) {
                var i = new Int32Array(e, 0, 13);
                if (55727696 != i[0]) throw "Invalid magic number in PVR header";
                switch (i[2]) {
                    case 0:
                        this._format = t.TextureFormat.PVRTCRGB_2BPPV;
                        break;

                    case 2:
                        this._format = t.TextureFormat.PVRTCRGB_4BPPV;
                        break;

                    case 1:
                        this._format = t.TextureFormat.PVRTCRGBA_2BPPV;
                        break;

                    case 3:
                        this._format = t.TextureFormat.PVRTCRGBA_4BPPV;
                        break;

                    default:
                        throw "Texture2D:unknown PVR format.";
                }
                var s = i[11],
                    r = i[7],
                    a = i[6];
                this._width = r, this._height = a;
                var n = i[12] + 52;
                this._upLoadCompressedTexImage2D(e, r, a, s, n, 0);
            }
        }, {
            key: "_upLoadCompressedTexImage2D",
            value: function _upLoadCompressedTexImage2D(t, e, i, s, r, a) {
                var n = m.instance,
                    h = this._glTextureType;
                v.bindTexture(n, h, this._glTexture);
                for (var o = this._getGLFormat(), l = r, _ = 0; _ < s; _++) {
                    l += a;
                    var c = this._calcualatesCompressedDataSize(this._format, e, i),
                        u = new Uint8Array(t, l, c);
                    n.compressedTexImage2D(h, _, o, e, i, 0, u), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1),
                        l += c;
                }
                var d = l;
                this._setGPUMemory(d), this._readyed = !0, this._activeResource();
            }
        }, {
            key: "loadImageSource",
            value: function loadImageSource(e) {
                var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var r = m.instance,
                    a = e.width,
                    n = e.height;
                this._width = a, this._height = n, this._isPot(a) && this._isPot(n) || (this._mipmap = !1),
                    this._setWarpMode(r.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(r.TEXTURE_WRAP_T, this._wrapModeV),
                    this._setFilterMode(this._filterMode), v.bindTexture(r, this._glTextureType, this._glTexture);
                var h = this._getGLFormat();
                i.Render.isConchApp ? (e.setPremultiplyAlpha && e.setPremultiplyAlpha(s), r.texImage2D(this._glTextureType, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e)) : (s && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                        this.format == t.TextureFormat.R5G6B5 ? r.texImage2D(this._glTextureType, 0, r.RGB, r.RGB, r.UNSIGNED_SHORT_5_6_5, e) : r.texImage2D(this._glTextureType, 0, h, h, r.UNSIGNED_BYTE, e),
                        s && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)), this._mipmap ? (r.generateMipmap(this._glTextureType),
                        this._setGPUMemory(a * n * 4 * (1 + 1 / 3))) : this._setGPUMemory(a * n * 4), this._canRead && (i.Render.isConchApp ? this._pixels = new Uint8Array(e._nativeObj.getImageData(0, 0, a, n)) : (i.Browser.canvas.size(a, n),
                        i.Browser.canvas.clear(), i.Browser.context.drawImage(e, 0, 0, a, n), this._pixels = new Uint8Array(i.Browser.context.getImageData(0, 0, a, n).data.buffer))),
                    this._readyed = !0, this._activeResource();
            }
        }, {
            key: "setPixels",
            value: function setPixels(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this._gpuCompressFormat()) throw "Texture2D:the format is GPU compression format.";
                if (!t) throw "Texture2D:pixels can't be null.";
                var i = Math.max(this._width >> e, 1),
                    s = Math.max(this._height >> e, 1),
                    r = i * s * this._getFormatByteCount();
                if (t.length < r) throw "Texture2D:pixels length should at least " + r + ".";
                this._setPixels(t, e, i, s), this._canRead && (this._pixels = t), this._readyed = !0,
                    this._activeResource();
            }
        }, {
            key: "setSubPixels",
            value: function setSubPixels(e, i, s, r, a) {
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                if (this._gpuCompressFormat()) throw "Texture2D:the format is GPU compression format.";
                if (!a) throw "Texture2D:pixels can't be null.";
                var h = m.instance,
                    o = this._glTextureType;
                v.bindTexture(h, o, this._glTexture);
                var l = this._getGLFormat();
                switch (this.format) {
                    case t.TextureFormat.R8G8B8:
                        h.pixelStorei(h.UNPACK_ALIGNMENT, 1), h.texSubImage2D(o, n, e, i, s, r, l, h.UNSIGNED_BYTE, a),
                            h.pixelStorei(h.UNPACK_ALIGNMENT, 4);
                        break;

                    case t.TextureFormat.R5G6B5:
                        h.pixelStorei(h.UNPACK_ALIGNMENT, 2), h.texSubImage2D(o, n, e, i, s, r, l, h.UNSIGNED_SHORT_5_6_5, a),
                            h.pixelStorei(h.UNPACK_ALIGNMENT, 4);
                        break;

                    case t.TextureFormat.R32G32B32A32:
                        h.texSubImage2D(o, n, e, i, s, r, l, h.FLOAT, a);
                        break;

                    default:
                        h.texSubImage2D(o, n, e, i, s, r, l, h.UNSIGNED_BYTE, a);
                }
                this._readyed = !0, this._activeResource();
            }
        }, {
            key: "setCompressData",
            value: function setCompressData(e) {
                switch (this._format) {
                    case t.TextureFormat.DXT1:
                    case t.TextureFormat.DXT5:
                        this._pharseDDS(e);
                        break;

                    case t.TextureFormat.ETC1RGB:
                        this._pharseKTX(e);
                        break;

                    case t.TextureFormat.PVRTCRGB_2BPPV:
                    case t.TextureFormat.PVRTCRGBA_2BPPV:
                    case t.TextureFormat.PVRTCRGB_4BPPV:
                    case t.TextureFormat.PVRTCRGBA_4BPPV:
                        this._pharsePVR(e);
                        break;

                    default:
                        throw "Texture2D:unkonwn format.";
                }
            }
        }, {
            key: "_recoverResource",
            value: function _recoverResource() {}
        }, {
            key: "getPixels",
            value: function getPixels() {
                if (this._canRead) return this._pixels;
                throw new Error("Texture2D: must set texture canRead is true.");
            }
        }, {
            key: "defaulteTexture",
            get: function get() {
                return P.grayTexture;
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                var e = new Uint8Array(3);
                e[0] = 128, e[1] = 128, e[2] = 128, P.grayTexture = new P(1, 1, t.TextureFormat.R8G8B8, !1, !1),
                    P.grayTexture.setPixels(e), P.grayTexture.lock = !0, e[0] = 255, e[1] = 255, e[2] = 255,
                    P.whiteTexture = new P(1, 1, t.TextureFormat.R8G8B8, !1, !1), P.whiteTexture.setPixels(e),
                    P.whiteTexture.lock = !0, e[0] = 0, e[1] = 0, e[2] = 0, P.blackTexture = new P(1, 1, t.TextureFormat.R8G8B8, !1, !1),
                    P.blackTexture.setPixels(e), P.blackTexture.lock = !0;
            }
        }, {
            key: "_parse",
            value: function _parse(e) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = s ? new P(s[0], s[1], s[2], s[3], s[4]) : new P(0, 0);
                switch (i && (r.wrapModeU = i.wrapModeU, r.wrapModeV = i.wrapModeV, r.filterMode = i.filterMode,
                    r.anisoLevel = i.anisoLevel), r._format) {
                    case t.TextureFormat.R8G8B8:
                    case t.TextureFormat.R8G8B8A8:
                        r.loadImageSource(e);
                        break;

                    case t.TextureFormat.DXT1:
                    case t.TextureFormat.DXT5:
                    case t.TextureFormat.ETC1RGB:
                    case t.TextureFormat.PVRTCRGB_2BPPV:
                    case t.TextureFormat.PVRTCRGBA_2BPPV:
                    case t.TextureFormat.PVRTCRGB_4BPPV:
                    case t.TextureFormat.PVRTCRGBA_4BPPV:
                        r.setCompressData(e);
                        break;

                    default:
                        throw "Texture2D:unkonwn format.";
                }
                return r;
            }
        }, {
            key: "load",
            value: function load(t, e) {
                i.loader.create(t, e, null, i.Loader.TEXTURE2D);
            }
        }]);
        return P;
    }(I);
    P.TEXTURE2D = "TEXTURE2D", P.grayTexture = null, P.whiteTexture = null, P.blackTexture = null;
    var L = /* */ function(_C2) {
        _inherits(L, _C2);

        function L() {
            _classCallCheck(this, L);
            return _possibleConstructorReturn(this, _getPrototypeOf(L).call(this));
        }
        return L;
    }(C);
    var D = /* */ function() {
        function D() {
            _classCallCheck(this, D);
        }
        _createClass(D, null, [{
            key: "mat2MatArray",
            value: function mat2MatArray(t, e) {
                var i = t,
                    s = e;
                return s[0] = i.a, s[1] = i.b, s[2] = D.EMPTYMAT4_ARRAY[2], s[3] = D.EMPTYMAT4_ARRAY[3],
                    s[4] = i.c, s[5] = i.d, s[6] = D.EMPTYMAT4_ARRAY[6], s[7] = D.EMPTYMAT4_ARRAY[7],
                    s[8] = D.EMPTYMAT4_ARRAY[8], s[9] = D.EMPTYMAT4_ARRAY[9], s[10] = D.EMPTYMAT4_ARRAY[10],
                    s[11] = D.EMPTYMAT4_ARRAY[11], s[12] = i.tx, s[13] = i.ty, s[14] = D.EMPTYMAT4_ARRAY[14],
                    s[15] = D.EMPTYMAT4_ARRAY[15], e;
            }
        }, {
            key: "restoreTempArray",
            value: function restoreTempArray() {
                D.TEMPMAT4_ARRAY[0] = 1, D.TEMPMAT4_ARRAY[1] = 0, D.TEMPMAT4_ARRAY[4] = 0, D.TEMPMAT4_ARRAY[5] = 1,
                    D.TEMPMAT4_ARRAY[12] = 0, D.TEMPMAT4_ARRAY[13] = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                D.worldScissorTest = !1, D.worldAlpha = 1;
            }
        }]);
        return D;
    }();
    D._MAXSIZE = 99999999, D.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        D.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], D.worldMatrix4 = D.TEMPMAT4_ARRAY,
        D.worldMatrix = new p(), D.matWVP = null, D.worldAlpha = 1, D.worldScissorTest = !1,
        D.width = 0, D.height = 0, (S = t.RenderTextureFormat || (t.RenderTextureFormat = {}))[S.R8G8B8 = 0] = "R8G8B8",
        S[S.R8G8B8A8 = 1] = "R8G8B8A8", S[S.Alpha8 = 2] = "Alpha8", S[S.R16G16B16A16 = 14] = "R16G16B16A16",
        (M = t.RenderTextureDepthFormat || (t.RenderTextureDepthFormat = {}))[M.DEPTH_16 = 0] = "DEPTH_16",
        M[M.STENCIL_8 = 1] = "STENCIL_8", M[M.DEPTHSTENCIL_16_8 = 2] = "DEPTHSTENCIL_16_8",
        M[M.DEPTHSTENCIL_NONE = 3] = "DEPTHSTENCIL_NONE";
    var B = /* */ function(_I2) {
        _inherits(B, _I2);

        function B(e, i) {
            var _this5;
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.RenderTextureFormat.R8G8B8;
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.RenderTextureDepthFormat.DEPTH_16;
            _classCallCheck(this, B);
            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(B).call(this, s, !1)),
                _this5._mgrKey = 0, _this5._glTextureType = m.instance.TEXTURE_2D, _this5._width = e,
                _this5._height = i, _this5._depthStencilFormat = r, _this5._create(e, i), _this5.lock = !0;
            return _this5;
        }
        _createClass(B, [{
            key: "getIsReady",
            value: function getIsReady() {
                return !0;
            }
        }, {
            key: "_create",
            value: function _create(e, i) {
                var s = m.instance;
                this._frameBuffer = s.createFramebuffer(), v.bindTexture(s, this._glTextureType, this._glTexture);
                var r = this._getGLFormat();
                if (s.texImage2D(this._glTextureType, 0, r, e, i, 0, r, s.UNSIGNED_BYTE, null),
                    this._setGPUMemory(e * i * 4), s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffer),
                    s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._glTexture, 0),
                    this._depthStencilFormat !== t.RenderTextureDepthFormat.DEPTHSTENCIL_NONE) switch (this._depthStencilBuffer = s.createRenderbuffer(),
                    s.bindRenderbuffer(s.RENDERBUFFER, this._depthStencilBuffer), this._depthStencilFormat) {
                    case t.RenderTextureDepthFormat.DEPTH_16:
                        s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, e, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, this._depthStencilBuffer);
                        break;

                    case t.RenderTextureDepthFormat.STENCIL_8:
                        s.renderbufferStorage(s.RENDERBUFFER, s.STENCIL_INDEX8, e, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.STENCIL_ATTACHMENT, s.RENDERBUFFER, this._depthStencilBuffer);
                        break;

                    case t.RenderTextureDepthFormat.DEPTHSTENCIL_16_8:
                        s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, e, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, this._depthStencilBuffer);
                }
                s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindRenderbuffer(s.RENDERBUFFER, null),
                    this._setWarpMode(s.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(s.TEXTURE_WRAP_T, this._wrapModeV),
                    this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !0,
                    this._activeResource();
            }
        }, {
            key: "generateMipmap",
            value: function generateMipmap() {
                this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, m.instance.generateMipmap(this._glTextureType),
                    this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1,
                    this._setGPUMemory(this.width * this.height * 4));
            }
        }, {
            key: "start",
            value: function start() {
                var t = m.instance;
                m.instance.bindFramebuffer(t.FRAMEBUFFER, this._frameBuffer), this._lastRT = B._currentActive,
                    B._currentActive = this, this._readyed = !0, t.viewport(0, 0, this._width, this._height),
                    this._lastWidth = D.width, this._lastHeight = D.height, D.width = this._width, D.height = this._height,
                    L.activeShader = null;
            }
        }, {
            key: "end",
            value: function end() {
                var t = m.instance;
                t.bindFramebuffer(t.FRAMEBUFFER, null), B._currentActive = null, this._readyed = !0;
            }
        }, {
            key: "restore",
            value: function restore() {
                var t = m.instance;
                this._lastRT != B._currentActive && (m.instance.bindFramebuffer(t.FRAMEBUFFER, this._lastRT ? this._lastRT._frameBuffer : null),
                        B._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight),
                    D.width = this._lastWidth, D.height = this._lastHeight, L.activeShader = null;
            }
        }, {
            key: "clear",
            value: function clear() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                var r = m.instance;
                r.clearColor(t, e, i, s);
                var a = r.COLOR_BUFFER_BIT;
                switch (this._depthStencilFormat) {
                    case r.DEPTH_COMPONENT16:
                        a |= r.DEPTH_BUFFER_BIT;
                        break;

                    case r.STENCIL_INDEX8:
                        a |= r.STENCIL_BUFFER_BIT;
                        break;

                    case r.DEPTH_STENCIL:
                        a |= r.DEPTH_BUFFER_BIT, a |= r.STENCIL_BUFFER_BIT;
                }
                r.clear(a);
            }
        }, {
            key: "getData",
            value: function getData(t, e, s, r) {
                if (i.Render.isConchApp && 2 == window.conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
                var a = m.instance;
                if (a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), !(a.checkFramebufferStatus(a.FRAMEBUFFER) === a.FRAMEBUFFER_COMPLETE)) return a.bindFramebuffer(a.FRAMEBUFFER, null),
                    null;
                var n = new Uint8Array(this._width * this._height * 4),
                    h = this._getGLFormat();
                return a.readPixels(t, e, s, r, h, a.UNSIGNED_BYTE, n), a.bindFramebuffer(a.FRAMEBUFFER, null),
                    n;
            }
        }, {
            key: "getDataAsync",
            value: function getDataAsync(t, e, i, s, r) {
                var a = m.instance;
                a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), a.readPixelsAsync(t, e, i, s, a.RGBA, a.UNSIGNED_BYTE, function(t) {
                    r(new Uint8Array(t));
                }), a.bindFramebuffer(a.FRAMEBUFFER, null);
            }
        }, {
            key: "recycle",
            value: function recycle() {}
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                if (this._frameBuffer) {
                    var t = m.instance;
                    t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer),
                        this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null,
                        this._setGPUMemory(0);
                }
            }
        }, {
            key: "depthStencilFormat",
            get: function get() {
                return this._depthStencilFormat;
            }
        }, {
            key: "defaulteTexture",
            get: function get() {
                return P.grayTexture;
            }
        }, {
            key: "sourceWidth",
            get: function get() {
                return this._width;
            }
        }, {
            key: "sourceHeight",
            get: function get() {
                return this._height;
            }
        }, {
            key: "offsetX",
            get: function get() {
                return 0;
            }
        }, {
            key: "offsetY",
            get: function get() {
                return 0;
            }
        }], [{
            key: "pushRT",
            value: function pushRT() {
                B.rtStack.push({
                    rt: B._currentActive,
                    w: D.width,
                    h: D.height
                });
            }
        }, {
            key: "popRT",
            value: function popRT() {
                var t = m.instance,
                    e = B.rtStack.pop();
                e && (B._currentActive != e.rt && (m.instance.bindFramebuffer(t.FRAMEBUFFER, e.rt ? e.rt._frameBuffer : null),
                    B._currentActive = e.rt), t.viewport(0, 0, e.w, e.h), D.width = e.w, D.height = e.h);
            }
        }, {
            key: "currentActive",
            get: function get() {
                return B._currentActive;
            }
        }]);
        return B;
    }(I);
    B.rtStack = [], B.defuv = [0, 0, 1, 0, 1, 1, 0, 1], B.flipyuv = [0, 1, 1, 1, 1, 0, 0, 0];
    var F = /* */ function() {
        function F() {
            _classCallCheck(this, F);
        }
        _createClass(F, null, [{
            key: "getRT",
            value: function getRT(e, i) {
                return i |= 0, (e |= 0) >= 1e4 && console.error("getRT error! w too big"), new B(e, i, t.RenderTextureFormat.R8G8B8A8, -1);
            }
        }, {
            key: "releaseRT",
            value: function releaseRT(t) {
                t.destroy();
            }
        }]);
        return F;
    }();
    F.dict = {};
    var O = /* */ function() {
        function O() {
            _classCallCheck(this, O);
        }
        _createClass(O, null, [{
            key: "_init_",
            value: function _init_(t) {
                O.fns = [O.BlendNormal, O.BlendAdd, O.BlendMultiply, O.BlendScreen, O.BlendOverlay, O.BlendLight, O.BlendMask, O.BlendDestinationOut],
                    O.targetFns = [O.BlendNormalTarget, O.BlendAddTarget, O.BlendMultiplyTarget, O.BlendScreenTarget, O.BlendOverlayTarget, O.BlendLightTarget, O.BlendMask, O.BlendDestinationOut];
            }
        }, {
            key: "BlendNormal",
            value: function BlendNormal(t) {
                v.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA);
            }
        }, {
            key: "BlendAdd",
            value: function BlendAdd(t) {
                v.setBlendFunc(t, t.ONE, t.DST_ALPHA);
            }
        }, {
            key: "BlendMultiply",
            value: function BlendMultiply(t) {
                v.setBlendFunc(t, t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA);
            }
        }, {
            key: "BlendScreen",
            value: function BlendScreen(t) {
                v.setBlendFunc(t, t.ONE, t.ONE);
            }
        }, {
            key: "BlendOverlay",
            value: function BlendOverlay(t) {
                v.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_COLOR);
            }
        }, {
            key: "BlendLight",
            value: function BlendLight(t) {
                v.setBlendFunc(t, t.ONE, t.ONE);
            }
        }, {
            key: "BlendNormalTarget",
            value: function BlendNormalTarget(t) {
                v.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA);
            }
        }, {
            key: "BlendAddTarget",
            value: function BlendAddTarget(t) {
                v.setBlendFunc(t, t.ONE, t.DST_ALPHA);
            }
        }, {
            key: "BlendMultiplyTarget",
            value: function BlendMultiplyTarget(t) {
                v.setBlendFunc(t, t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA);
            }
        }, {
            key: "BlendScreenTarget",
            value: function BlendScreenTarget(t) {
                v.setBlendFunc(t, t.ONE, t.ONE);
            }
        }, {
            key: "BlendOverlayTarget",
            value: function BlendOverlayTarget(t) {
                v.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_COLOR);
            }
        }, {
            key: "BlendLightTarget",
            value: function BlendLightTarget(t) {
                v.setBlendFunc(t, t.ONE, t.ONE);
            }
        }, {
            key: "BlendMask",
            value: function BlendMask(t) {
                v.setBlendFunc(t, t.ZERO, t.SRC_ALPHA);
            }
        }, {
            key: "BlendDestinationOut",
            value: function BlendDestinationOut(t) {
                v.setBlendFunc(t, t.ZERO, t.ZERO);
            }
        }]);
        return O;
    }();
    O.activeBlendFunction = null, O.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"],
        O.TOINT = {
            normal: 0,
            add: 1,
            multiply: 2,
            screen: 3,
            overlay: 4,
            light: 5,
            mask: 6,
            "destination-out": 7,
            lighter: 1
        }, O.NORMAL = "normal", O.ADD = "add", O.MULTIPLY = "multiply", O.SCREEN = "screen",
        O.OVERLAY = "overlay", O.LIGHT = "light", O.MASK = "mask", O.DESTINATIONOUT = "destination-out",
        O.LIGHTER = "lighter", O.fns = [], O.targetFns = [];
    var N = /* */ function() {
        function N(t, e, i) {
            _classCallCheck(this, N);
            this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
        }
        _createClass(N, [{
            key: "add",
            value: function add(t) {
                return this._value |= "string" == typeof t ? this._name2int[t] : t, this._value;
            }
        }, {
            key: "addInt",
            value: function addInt(t) {
                return this._value |= t, this._value;
            }
        }, {
            key: "remove",
            value: function remove(t) {
                return this._value &= "string" == typeof t ? ~this._name2int[t] : ~t, this._value;
            }
        }, {
            key: "isDefine",
            value: function isDefine(t) {
                return (this._value & t) === t;
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this._value;
            }
        }, {
            key: "setValue",
            value: function setValue(t) {
                this._value = t;
            }
        }, {
            key: "toNameDic",
            value: function toNameDic() {
                var t = this._int2nameMap[this._value];
                return t || N._toText(this._value, this._int2name, this._int2nameMap);
            }
        }], [{
            key: "_reg",
            value: function _reg(t, e, i, s) {
                i[t] = e, s[e] = t;
            }
        }, {
            key: "_toText",
            value: function _toText(t, e, i) {
                var s = i[t];
                if (s) return s;
                for (var r = {}, a = 1, n = 0; n < 32 && !((a = 1 << n) > t); n++) {
                    if (t & a) {
                        var h = e[a];
                        h && (r[h] = "");
                    }
                }
                return i[t] = r, r;
            }
        }, {
            key: "_toInt",
            value: function _toInt(t, e) {
                for (var i = t.split("."), s = 0, r = 0, a = i.length; r < a; r++) {
                    var n = e[i[r]];
                    if (!n) throw new Error("Defines to int err:" + t + "/" + i[r]);
                    s |= n;
                }
                return s;
            }
        }]);
        return N;
    }();
    var U = /* */ function(_N) {
        _inherits(U, _N);

        function U() {
            _classCallCheck(this, U);
            return _possibleConstructorReturn(this, _getPrototypeOf(U).call(this, U.__name2int, U.__int2name, U.__int2nameMap));
        }
        _createClass(U, null, [{
            key: "__init__",
            value: function __init__() {
                U.reg("TEXTURE2D", U.TEXTURE2D), U.reg("PRIMITIVE", U.PRIMITIVE), U.reg("GLOW_FILTER", U.FILTERGLOW),
                    U.reg("BLUR_FILTER", U.FILTERBLUR), U.reg("COLOR_FILTER", U.FILTERCOLOR), U.reg("COLOR_ADD", U.COLORADD),
                    U.reg("WORLDMAT", U.WORLDMAT), U.reg("FILLTEXTURE", U.FILLTEXTURE), U.reg("MVP3D", U.MVP3D);
            }
        }, {
            key: "reg",
            value: function reg(t, e) {
                this._reg(t, e, U.__name2int, U.__int2name);
            }
        }, {
            key: "toText",
            value: function toText(t, e, i) {
                return this._toText(t, e, i);
            }
        }, {
            key: "toInt",
            value: function toInt(t) {
                return this._toInt(t, U.__name2int);
            }
        }]);
        return U;
    }(N);
    U.TEXTURE2D = 1, U.PRIMITIVE = 4, U.FILTERGLOW = 8, U.FILTERBLUR = 16, U.FILTERCOLOR = 32,
        U.COLORADD = 64, U.WORLDMAT = 128, U.FILLTEXTURE = 256, U.SKINMESH = 512, U.MVP3D = 2048,
        U.NOOPTMASK = U.FILTERGLOW | U.FILTERBLUR | U.FILTERCOLOR | U.FILLTEXTURE, U.__name2int = {},
        U.__int2name = [], U.__int2nameMap = [];
    var G = /* */ function() {
        function G() {
            _classCallCheck(this, G);
        }
        _createClass(G, null, [{
            key: "show",
            value: function show() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                G._StatRender.show(t, e);
            }
        }, {
            key: "enable",
            value: function enable() {
                G._StatRender.enable();
            }
        }, {
            key: "hide",
            value: function hide() {
                G._StatRender.hide();
            }
        }, {
            key: "clear",
            value: function clear() {
                G.trianglesFaces = G.renderBatches = G.savedRenderBatches = G.shaderCall = G.spriteRenderUseCacheCount = G.frustumCulling = G.octreeNodeCulling = G.canvasNormal = G.canvasBitmap = G.canvasReCache = 0;
            }
        }, {
            key: "onclick",
            set: function set(t) {
                G._StatRender.set_onclick(t);
            }
        }]);
        return G;
    }();
    G.FPS = 0, G.loopCount = 0, G.shaderCall = 0, G.renderBatches = 0, G.savedRenderBatches = 0,
        G.trianglesFaces = 0, G.spriteCount = 0, G.spriteRenderUseCacheCount = 0, G.frustumCulling = 0,
        G.octreeNodeCulling = 0, G.canvasNormal = 0, G.canvasBitmap = 0, G.canvasReCache = 0,
        G.renderSlow = !1, G._fpsData = [], G._timer = 0, G._count = 0, G._StatRender = null;
    var k = /* */ function() {
        function k() {
            _classCallCheck(this, k);
            this._strsToID = {}, this._idToStrs = [], this._length = 0;
        }
        _createClass(k, [{
            key: "add",
            value: function add(t) {
                var e = this._strsToID[t];
                return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
            }
        }, {
            key: "getID",
            value: function getID(t) {
                var e = this._strsToID[t];
                return null == e ? -1 : e;
            }
        }, {
            key: "getName",
            value: function getName(t) {
                var e = this._idToStrs[t];
                return null == e ? void 0 : e;
            }
        }]);
        return k;
    }();
    var W = /* */ function(_L) {
        _inherits(W, _L);

        function W(t, e) {
            var _this6;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            _classCallCheck(this, W);
            if (_this6 = _possibleConstructorReturn(this, _getPrototypeOf(W).call(this)), _this6._attribInfo = null,
                _this6.customCompile = !1, _this6._curActTexIndex = 0, _this6.tag = {}, _this6._program = null,
                _this6._params = null, _this6._paramsMap = {}, !t || !e) throw "Shader Error";
            _this6._attribInfo = r, _this6._id = ++W._count, _this6._vs = t, _this6._ps = e,
                _this6._nameMap = s || {}, null != i && (W.sharders[i] = _assertThisInitialized(_this6)),
                _this6.recreateResource(), _this6.lock = !0;
            return _possibleConstructorReturn(_this6);
        }
        _createClass(W, [{
            key: "recreateResource",
            value: function recreateResource() {
                this._compile(), this._setGPUMemory(0);
            }
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                v.mainContext.deleteShader(this._vshader), v.mainContext.deleteShader(this._pshader),
                    v.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null,
                    this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
            }
        }, {
            key: "_compile",
            value: function _compile() {
                if (this._vs && this._ps && !this._params) {
                    var t;
                    this._reCompile = !0, this._params = [], this.customCompile && (t = i.ShaderCompile.preGetParams(this._vs, this._ps));
                    var e, s, r, a = v.mainContext;
                    this._program = a.createProgram(), this._vshader = W._createShader(a, this._vs, a.VERTEX_SHADER),
                        this._pshader = W._createShader(a, this._ps, a.FRAGMENT_SHADER), a.attachShader(this._program, this._vshader),
                        a.attachShader(this._program, this._pshader);
                    var n = this._attribInfo ? this._attribInfo.length : 0;
                    for (s = 0; s < n; s += 2) {
                        a.bindAttribLocation(this._program, this._attribInfo[s + 1], this._attribInfo[s]);
                    }
                    if (a.linkProgram(this._program), !this.customCompile && !a.getProgramParameter(this._program, a.LINK_STATUS)) throw a.getProgramInfoLog(this._program);
                    var h = this.customCompile ? t.uniforms.length : a.getProgramParameter(this._program, a.ACTIVE_UNIFORMS);
                    for (s = 0; s < h; s++) {
                        var o = this.customCompile ? t.uniforms[s] : a.getActiveUniform(this._program, s);
                        (e = {
                            vartype: "uniform",
                            glfun: null,
                            ivartype: 1,
                            location: a.getUniformLocation(this._program, o.name),
                            name: o.name,
                            type: o.type,
                            isArray: !1,
                            isSame: !1,
                            preValue: null,
                            indexOfParams: 0
                        }).name.indexOf("[0]") > 0 && (e.name = e.name.substr(0, e.name.length - 3), e.isArray = !0,
                            e.location = a.getUniformLocation(this._program, e.name)), this._params.push(e);
                    }
                    for (s = 0, r = this._params.length; s < r; s++) {
                        switch ((e = this._params[s]).indexOfParams = s, e.index = 1, e.value = [e.location, null],
                            e.codename = e.name, e.name = this._nameMap[e.codename] ? this._nameMap[e.codename] : e.codename,
                            this._paramsMap[e.name] = e, e._this = this, e.uploadedValue = [], e.type) {
                            case a.INT:
                                e.fun = e.isArray ? this._uniform1iv : this._uniform1i;
                                break;

                            case a.FLOAT:
                                e.fun = e.isArray ? this._uniform1fv : this._uniform1f;
                                break;

                            case a.FLOAT_VEC2:
                                e.fun = e.isArray ? this._uniform_vec2v : this._uniform_vec2;
                                break;

                            case a.FLOAT_VEC3:
                                e.fun = e.isArray ? this._uniform_vec3v : this._uniform_vec3;
                                break;

                            case a.FLOAT_VEC4:
                                e.fun = e.isArray ? this._uniform_vec4v : this._uniform_vec4;
                                break;

                            case a.SAMPLER_2D:
                                e.fun = this._uniform_sampler2D;
                                break;

                            case a.SAMPLER_CUBE:
                                e.fun = this._uniform_samplerCube;
                                break;

                            case a.FLOAT_MAT4:
                                e.glfun = a.uniformMatrix4fv, e.fun = this._uniformMatrix4fv;
                                break;

                            case a.BOOL:
                                e.fun = this._uniform1i;
                                break;

                            case a.FLOAT_MAT2:
                            case a.FLOAT_MAT3:
                            default:
                                throw new Error("compile shader err!");
                        }
                    }
                }
            }
        }, {
            key: "getUniform",
            value: function getUniform(t) {
                return this._paramsMap[t];
            }
        }, {
            key: "_uniform1f",
            value: function _uniform1f(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (v.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
            }
        }, {
            key: "_uniform1fv",
            value: function _uniform1fv(t, e) {
                if (e.length < 4) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (v.mainContext.uniform1fv(t.location, e),
                        i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
                }
                return v.mainContext.uniform1fv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec2",
            value: function _uniform_vec2(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (v.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]),
                    1) : 0;
            }
        }, {
            key: "_uniform_vec2v",
            value: function _uniform_vec2v(t, e) {
                if (e.length < 2) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (v.mainContext.uniform2fv(t.location, e),
                        i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
                }
                return v.mainContext.uniform2fv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec3",
            value: function _uniform_vec3(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (v.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]),
                    1) : 0;
            }
        }, {
            key: "_uniform_vec3v",
            value: function _uniform_vec3v(t, e) {
                return v.mainContext.uniform3fv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec4",
            value: function _uniform_vec4(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (v.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]),
                    1) : 0;
            }
        }, {
            key: "_uniform_vec4v",
            value: function _uniform_vec4v(t, e) {
                return v.mainContext.uniform4fv(t.location, e), 1;
            }
        }, {
            key: "_uniformMatrix2fv",
            value: function _uniformMatrix2fv(t, e) {
                return v.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
            }
        }, {
            key: "_uniformMatrix3fv",
            value: function _uniformMatrix3fv(t, e) {
                return v.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
            }
        }, {
            key: "_uniformMatrix4fv",
            value: function _uniformMatrix4fv(t, e) {
                return v.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
            }
        }, {
            key: "_uniform1i",
            value: function _uniform1i(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (v.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
            }
        }, {
            key: "_uniform1iv",
            value: function _uniform1iv(t, e) {
                return v.mainContext.uniform1iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_ivec2",
            value: function _uniform_ivec2(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (v.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]),
                    1) : 0;
            }
        }, {
            key: "_uniform_ivec2v",
            value: function _uniform_ivec2v(t, e) {
                return v.mainContext.uniform2iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec3i",
            value: function _uniform_vec3i(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (v.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]),
                    1) : 0;
            }
        }, {
            key: "_uniform_vec3vi",
            value: function _uniform_vec3vi(t, e) {
                return v.mainContext.uniform3iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec4i",
            value: function _uniform_vec4i(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (v.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]),
                    1) : 0;
            }
        }, {
            key: "_uniform_vec4vi",
            value: function _uniform_vec4vi(t, e) {
                return v.mainContext.uniform4iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_sampler2D",
            value: function _uniform_sampler2D(t, e) {
                var i = v.mainContext,
                    s = t.uploadedValue;
                return null == s[0] ? (s[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex),
                    v.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), v.bindTexture(i, i.TEXTURE_2D, e),
                    this._curActTexIndex++, 1) : (v.activeTexture(i, i.TEXTURE0 + s[0]), v.bindTexture(i, i.TEXTURE_2D, e),
                    0);
            }
        }, {
            key: "_uniform_samplerCube",
            value: function _uniform_samplerCube(t, e) {
                var i = v.mainContext,
                    s = t.uploadedValue;
                return null == s[0] ? (s[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex),
                    v.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), v.bindTexture(i, i.TEXTURE_CUBE_MAP, e),
                    this._curActTexIndex++, 1) : (v.activeTexture(i, i.TEXTURE0 + s[0]), v.bindTexture(i, i.TEXTURE_CUBE_MAP, e),
                    0);
            }
        }, {
            key: "_noSetValue",
            value: function _noSetValue(t) {
                console.log("no....:" + t.name);
            }
        }, {
            key: "uploadOne",
            value: function uploadOne(t, e) {
                v.useProgram(v.mainContext, this._program);
                var i = this._paramsMap[t];
                i.fun.call(this, i, e);
            }
        }, {
            key: "uploadTexture2D",
            value: function uploadTexture2D(t) {
                var e = v;
                e._activeTextures[0] !== t && (e.bindTexture(v.mainContext, m.instance.TEXTURE_2D, t),
                    e._activeTextures[0] = t);
            }
        }, {
            key: "upload",
            value: function upload(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                L.activeShader = L.bindShader = this;
                var i = v.mainContext;
                v.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
                for (var s, r, a = e.length, n = 0, h = 0; h < a; h++) {
                    null !== (r = t[(s = e[h]).name]) && (n += s.fun.call(this, s, r));
                }
                G.shaderCall += n;
            }
        }, {
            key: "uploadArray",
            value: function uploadArray(t, e, i) {
                L.activeShader = this, L.bindShader = this, v.useProgram(v.mainContext, this._program);
                this._params;
                for (var s, r, a = 0, n = e - 2; n >= 0; n -= 2) {
                    (r = this._paramsMap[t[n]]) && null != (s = t[n + 1]) && (i && i[r.name] && i[r.name].bind(),
                        a += r.fun.call(this, r, s));
                }
                G.shaderCall += a;
            }
        }, {
            key: "getParams",
            value: function getParams() {
                return this._params;
            }
        }, {
            key: "setAttributesLocation",
            value: function setAttributesLocation(t) {
                this._attribInfo = t;
            }
        }], [{
            key: "getShader",
            value: function getShader(t) {
                return W.sharders[t];
            }
        }, {
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return new W(t, e, i, s, r);
            }
        }, {
            key: "withCompile",
            value: function withCompile(t, e, i, s) {
                if (i && W.sharders[i]) return W.sharders[i];
                var r = W._preCompileShader[W.SHADERNAME2ID * t];
                if (!r) throw new Error("withCompile shader err!" + t);
                return r.createShader(e, i, s, null);
            }
        }, {
            key: "withCompile2D",
            value: function withCompile2D(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                if (s && W.sharders[s]) return W.sharders[s];
                var n = W._preCompileShader[W.SHADERNAME2ID * t + e];
                if (!n) throw new Error("withCompile shader err!" + t + " " + e);
                return n.createShader(i, s, r, a);
            }
        }, {
            key: "addInclude",
            value: function addInclude(t, e) {
                i.ShaderCompile.addInclude(t, e);
            }
        }, {
            key: "preCompile",
            value: function preCompile(t, e, s, r) {
                var a = W.SHADERNAME2ID * t;
                W._preCompileShader[a] = new i.ShaderCompile(e, s, r);
            }
        }, {
            key: "preCompile2D",
            value: function preCompile2D(t, e, s, r, a) {
                var n = W.SHADERNAME2ID * t + e;
                W._preCompileShader[n] = new i.ShaderCompile(s, r, a);
            }
        }, {
            key: "_createShader",
            value: function _createShader(t, e, i) {
                var s = t.createShader(i);
                return t.shaderSource(s, e), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (console.log(t.getShaderInfoLog(s)),
                    null);
            }
        }]);
        return W;
    }(L);
    W._count = 0, W._preCompileShader = {}, W.SHADERNAME2ID = 2e-4, W.nameKey = new k(),
        W.sharders = new Array(32);
    var Y = /* */ function(_W) {
        _inherits(Y, _W);

        function Y(t, e) {
            var _this7;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            _classCallCheck(this, Y);
            _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Y).call(this, t, e, i, s, r)),
                _this7._params2dQuick2 = null, _this7._shaderValueWidth = 0, _this7._shaderValueHeight = 0;
            return _this7;
        }
        _createClass(Y, [{
            key: "_disposeResource",
            value: function _disposeResource() {
                _get(_getPrototypeOf(Y.prototype), "_disposeResource", this).call(this), this._params2dQuick2 = null;
            }
        }, {
            key: "upload2dQuick2",
            value: function upload2dQuick2(t) {
                this.upload(t, this._params2dQuick2 || this._make2dQuick2());
            }
        }, {
            key: "_make2dQuick2",
            value: function _make2dQuick2() {
                if (!this._params2dQuick2) {
                    this._params2dQuick2 = [];
                    for (var t, e = this._params, i = 0, s = e.length; i < s; i++) {
                        "size" !== (t = e[i]).name && this._params2dQuick2.push(t);
                    }
                }
                return this._params2dQuick2;
            }
        }], [{
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return new Y(t, e, i, s, r);
            }
        }]);
        return Y;
    }(W);
    var V = /* */ function() {
        function V(t, e) {
            _classCallCheck(this, V);
            this.defines = new U(), this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0,
                this.ref = 1, this._cacheID = 0, this.clipMatDir = [i.Context._MAXSIZE, 0, 0, i.Context._MAXSIZE],
                this.clipMatPos = [0, 0], this.clipOff = [0, 0], this.mainID = t, this.subID = e,
                this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null,
                this.u_mmat2 = null, this._cacheID = t | e, this._inClassCache = V._cache[this._cacheID],
                t > 0 && !this._inClassCache && (this._inClassCache = V._cache[this._cacheID] = [],
                    this._inClassCache._length = 0), this.clear();
        }
        _createClass(V, [{
            key: "setValue",
            value: function setValue(t) {}
        }, {
            key: "_ShaderWithCompile",
            value: function _ShaderWithCompile() {
                return W.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, Y.create, this._attribLocation);
            }
        }, {
            key: "upload",
            value: function upload() {
                var t = D;
                D.worldMatrix4 === D.TEMPMAT4_ARRAY || this.defines.addInt(U.WORLDMAT), this.mmat = t.worldMatrix4,
                    D.matWVP && (this.defines.addInt(U.MVP3D), this.u_MvpMatrix = D.matWVP.elements);
                var e = W.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width,
                    this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height,
                    e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
            }
        }, {
            key: "setFilters",
            value: function setFilters(t) {
                if (this.filters = t, t)
                    for (var e, i = t.length, s = 0; s < i; s++) {
                        (e = t[s]) && (this.defines.add(e.type), e.action.setValue(this));
                    }
            }
        }, {
            key: "clear",
            value: function clear() {
                this.defines._value = this.subID, this.clipOff[0] = 0;
            }
        }, {
            key: "release",
            value: function release() {
                --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this),
                    this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0);
            }
        }], [{
            key: "_initone",
            value: function _initone(t, e) {
                V._typeClass[t] = e, V._cache[t] = [], V._cache[t]._length = 0;
            }
        }, {
            key: "__init__",
            value: function __init__() {}
        }, {
            key: "create",
            value: function create(t, e) {
                var i = V._cache[t | e];
                return i._length ? i[--i._length] : new V._typeClass[t | e](e);
            }
        }]);
        return V;
    }();
    V._cache = [], V._typeClass = [], V.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    var X = /* */ function() {
        function X() {
            _classCallCheck(this, X);
            this.clear();
        }
        _createClass(X, [{
            key: "clear",
            value: function clear() {
                this.submitType = -1, this.blendShader = this.other = 0;
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(t) {
                this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
            }
        }, {
            key: "copyFrom2",
            value: function copyFrom2(t, e, i) {
                this.other = i, this.submitType = e;
            }
        }, {
            key: "equal3_2",
            value: function equal3_2(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
            }
        }, {
            key: "equal4_2",
            value: function equal4_2(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
            }
        }, {
            key: "equal_3",
            value: function equal_3(t) {
                return this.submitType === t.submitType && this.blendShader === t.blendShader;
            }
        }, {
            key: "equal",
            value: function equal(t) {
                return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
            }
        }]);
        return X;
    }();
    var H = /* */ function() {
        function H() {
            _classCallCheck(this, H);
            this._ref = 1, this._key = new X();
        }
        _createClass(H, [{
            key: "renderSubmit",
            value: function renderSubmit() {
                return this.fun.apply(this._this, this.args), 1;
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return 0;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                if (--this._ref < 1) {
                    var t = H.POOL;
                    t[t._length++] = this;
                }
            }
        }], [{
            key: "create",
            value: function create(t, e, i) {
                var s = H.POOL._length ? H.POOL[--H.POOL._length] : new H();
                return s.fun = e, s.args = t, s._this = i, s._ref = 1, s._key.clear(), s;
            }
        }]);
        return H;
    }();
    H.POOL = [], H.POOL._length = 0;
    var z = /* */ function() {
        function z() {
            _classCallCheck(this, z);
        }
        _createClass(z, [{
            key: "type",
            get: function get() {
                return -1;
            }
        }]);
        return z;
    }();
    z.BLUR = 16, z.COLOR = 32, z.GLOW = 8, z._filter = function(t, e, i, s) {
        var r = e,
            a = this._next;
        if (a) {
            var n = t.filters,
                h = n.length;
            if (1 == h && n[0].type == z.COLOR) return e.save(), e.setColorFilter(n[0]), a._fun.call(a, t, e, i, s),
                void e.restore();
            var o, l = V.create(U.TEXTURE2D, 0),
                _ = f.TEMP,
                c = r._curMat,
                u = p.create();
            c.copyTo(u);
            var d = 0,
                m = 0,
                v = null,
                T = t._cacheStyle.filterCache || null;
            if (T && 0 == t.getRepaint()) {
                if ((t._cacheStyle.hasGlowFilter || !1) && (d = 50, m = 25), (o = t.getBounds()).width <= 0 || o.height <= 0) return;
                o.width += d, o.height += d, _.x = o.x * u.a + o.y * u.c, _.y = o.y * u.d + o.x * u.b,
                    o.x = _.x, o.y = _.y, _.x = o.width * u.a + o.height * u.c, _.y = o.height * u.d + o.width * u.b,
                    o.width = _.x, o.height = _.y;
            } else {
                t._isHaveGlowFilter() && (d = 50, m = 25), (o = new g()).copyFrom(t.getSelfBounds()),
                    o.x += t.x, o.y += t.y, o.x -= t.pivotX + 4, o.y -= t.pivotY + 4;
                var x = o.x,
                    y = o.y;
                if (o.width += d + 8, o.height += d + 8, _.x = o.x * u.a + o.y * u.c, _.y = o.y * u.d + o.x * u.b,
                    o.x = _.x, o.y = _.y, _.x = o.width * u.a + o.height * u.c, _.y = o.height * u.d + o.width * u.b,
                    o.width = _.x, o.height = _.y, o.width <= 0 || o.height <= 0) return;
                T && F.releaseRT(T), v = F.getRT(o.width, o.height);
                var E = T = F.getRT(o.width, o.height);
                t._getCacheStyle().filterCache = T, r.pushRT(), r.useRT(v);
                var C = t.x - x + m,
                    b = t.y - y + m;
                a._fun.call(a, t, e, C, b), r.useRT(E);
                for (var A = 0; A < h; A++) {
                    0 != A && (r.useRT(v), r.drawTarget(E, 0, 0, o.width, o.height, p.TEMP.identity(), l, null, O.TOINT.overlay),
                        r.useRT(E));
                    var R = n[A];
                    switch (R.type) {
                        case z.BLUR:
                        case z.GLOW:
                            R._glRender && R._glRender.render(v, e, o.width, o.height, R);
                            break;

                        case z.COLOR:
                            r.setColorFilter(R), r.drawTarget(v, 0, 0, o.width, o.height, p.EMPTY.identity(), V.create(U.TEXTURE2D, 0)),
                                r.setColorFilter(null);
                    }
                }
                r.popRT();
            }
            if (i = i - m - t.x, s = s - m - t.y, _.setTo(i, s), u.transformPoint(_), i = _.x + o.x,
                s = _.y + o.y, r._drawRenderTexture(T, i, s, o.width, o.height, p.TEMP.identity(), 1, B.defuv),
                v) {
                var w = H.create([v], function(t) {
                    t.destroy();
                }, this);
                v = null, e.addRenderObject(w);
            }
            u.destroy();
        }
    };
    var K = /* */ function() {
        function K() {
            _classCallCheck(this, K);
        }
        _createClass(K, null, [{
            key: "toRadian",
            value: function toRadian(t) {
                return t * K._pi2;
            }
        }, {
            key: "toAngle",
            value: function toAngle(t) {
                return t * K._pi;
            }
        }, {
            key: "toHexColor",
            value: function toHexColor(t) {
                if (t < 0 || isNaN(t)) return null;
                for (var e = t.toString(16); e.length < 6;) {
                    e = "0" + e;
                }
                return "#" + e;
            }
        }, {
            key: "getGID",
            value: function getGID() {
                return K._gid++;
            }
        }, {
            key: "concatArray",
            value: function concatArray(t, e) {
                if (!e) return t;
                if (!t) return e;
                var i, s = e.length;
                for (i = 0; i < s; i++) {
                    t.push(e[i]);
                }
                return t;
            }
        }, {
            key: "clearArray",
            value: function clearArray(t) {
                return t ? (t.length = 0, t) : t;
            }
        }, {
            key: "copyArray",
            value: function copyArray(t, e) {
                if (t || (t = []), !e) return t;
                t.length = e.length;
                var i, s = e.length;
                for (i = 0; i < s; i++) {
                    t[i] = e[i];
                }
                return t;
            }
        }, {
            key: "getGlobalRecByPoints",
            value: function getGlobalRecByPoints(t, e, i, s, r) {
                var a, n;
                a = f.create().setTo(e, i), a = t.localToGlobal(a), n = f.create().setTo(s, r),
                    n = t.localToGlobal(n);
                var h = g._getWrapRec([a.x, a.y, n.x, n.y]);
                return a.recover(), n.recover(), h;
            }
        }, {
            key: "getGlobalPosAndScale",
            value: function getGlobalPosAndScale(t) {
                return K.getGlobalRecByPoints(t, 0, 0, 1, 1);
            }
        }, {
            key: "bind",
            value: function bind(t, e) {
                return t.bind(e);
            }
        }, {
            key: "updateOrder",
            value: function updateOrder(t) {
                if (!t || t.length < 2) return !1;
                for (var e, i, s, r = 1, a = t.length; r < a;) {
                    for (s = t[e = r], i = t[e]._zOrder; --e > -1 && t[e]._zOrder > i;) {
                        t[e + 1] = t[e];
                    }
                    t[e + 1] = s, r++;
                }
                return !0;
            }
        }, {
            key: "transPointList",
            value: function transPointList(t, e, i) {
                var s, r = t.length;
                for (s = 0; s < r; s += 2) {
                    t[s] += e, t[s + 1] += i;
                }
            }
        }, {
            key: "parseInt",
            value: function(_parseInt) {
                function parseInt(_x2) {
                    return _parseInt.apply(this, arguments);
                }
                parseInt.toString = function() {
                    return _parseInt.toString();
                };
                return parseInt;
            }(function(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = parseInt(t, e);
                return isNaN(i) ? 0 : i;
            })
        }, {
            key: "getFileExtension",
            value: function getFileExtension(t) {
                K._extReg.lastIndex = t.lastIndexOf(".");
                var e = K._extReg.exec(t);
                return e && e.length > 1 ? e[1].toLowerCase() : null;
            }
        }, {
            key: "getTransformRelativeToWindow",
            value: function getTransformRelativeToWindow(t, e, i) {
                var s = K.gStage,
                    r = K.getGlobalPosAndScale(t),
                    a = s._canvasTransform.clone(),
                    n = a.tx,
                    h = a.ty;
                a.rotate(-Math.PI / 180 * s.canvasDegree), a.scale(s.clientScaleX, s.clientScaleY);
                var o, l, _, c, u = s.canvasDegree % 180 != 0;
                return u ? (o = i + r.y, l = e + r.x, o *= a.d, l *= a.a, 90 == s.canvasDegree ? (o = n - o,
                    l += h) : (o += n, l = h - l)) : (o = e + r.x, l = i + r.y, o *= a.a, l *= a.d,
                    o += n, l += h), l += s._safariOffsetY, u ? (_ = a.d * r.height, c = a.a * r.width) : (_ = a.a * r.width,
                    c = a.d * r.height), {
                    x: o,
                    y: l,
                    scaleX: _,
                    scaleY: c
                };
            }
        }, {
            key: "fitDOMElementInArea",
            value: function fitDOMElementInArea(t, e, i, s, r, a) {
                t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top",
                    t.style.position = "absolute");
                var n = K.getTransformRelativeToWindow(e, i, s);
                t.style.transform = t.style.webkitTransform = "scale(" + n.scaleX + "," + n.scaleY + ") rotate(" + K.gStage.canvasDegree + "deg)",
                    t.style.width = r + "px", t.style.height = a + "px", t.style.left = n.x + "px",
                    t.style.top = n.y + "px";
            }
        }, {
            key: "isOkTextureList",
            value: function isOkTextureList(t) {
                if (!t) return !1;
                var e, i, s = t.length;
                for (e = 0; e < s; e++) {
                    if (!(i = t[e]) || !i._getSource()) return !1;
                }
                return !0;
            }
        }, {
            key: "isOKCmdList",
            value: function isOKCmdList(t) {
                if (!t) return !1;
                var e, i = t.length;
                for (e = 0; e < i; e++) {
                    t[e];
                }
                return !0;
            }
        }, {
            key: "getQueryString",
            value: function getQueryString(t) {
                if (i.Browser.onMiniGame) return null;
                if (!window.location || !window.location.search) return null;
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                    s = window.location.search.substr(1).match(e);
                return null != s ? unescape(s[2]) : null;
            }
        }]);
        return K;
    }();
    K.gStage = null, K._gid = 1, K._pi = 180 / Math.PI, K._pi2 = Math.PI / 180, K._extReg = /\.(\w+)\??/g,
        K.parseXMLFromString = function(t) {
            var e;
            if (t = t.replace(/>\s+</g, "><"), (e = new DOMParser().parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
            return e;
        };
    var j = /* */ function() {
        function j(t) {
            _classCallCheck(this, j);
            if (this.arrColor = [], null == t) return this.strColor = "#00000000", this.numColor = 0,
                void(this.arrColor = [0, 0, 0, 0]);
            var e, i, s;
            if ("string" == typeof t) {
                if (t.indexOf("rgba(") >= 0 || t.indexOf("rgb(") >= 0) {
                    var r, a, n = t;
                    for (r = n.indexOf("("), a = n.indexOf(")"), n = n.substring(r + 1, a), this.arrColor = n.split(","),
                        i = this.arrColor.length, e = 0; e < i; e++) {
                        this.arrColor[e] = parseFloat(this.arrColor[e]), e < 3 && (this.arrColor[e] = Math.round(this.arrColor[e]));
                    }
                    s = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2],
                        this.strColor = t;
                } else {
                    if (this.strColor = t, "#" === t.charAt(0) && (t = t.substr(1)), 3 === (i = t.length) || 4 === i) {
                        var h = "";
                        for (e = 0; e < i; e++) {
                            h += t[e] + t[e];
                        }
                        t = h;
                    }
                    s = parseInt(t, 16);
                }
            } else s = t, this.strColor = K.toHexColor(s);
            this.strColor.indexOf("rgba") >= 0 || 9 === this.strColor.length ? (this.arrColor = [((4278190080 & s) >>> 24) / 255, ((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255],
                    this.numColor = (4278190080 & s) >>> 24 | (16711680 & s) >> 8 | (65280 & s) << 8 | (255 & s) << 24) : (this.arrColor = [((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255, 1],
                    this.numColor = 4278190080 | (16711680 & s) >> 16 | 65280 & s | (255 & s) << 16),
                this.arrColor.__id = ++j._COLODID;
        }
        _createClass(j, null, [{
            key: "_initDefault",
            value: function _initDefault() {
                for (var t in j._DEFAULT = {}, j._COLOR_MAP) {
                    j._SAVE[t] = j._DEFAULT[t] = new j(j._COLOR_MAP[t]);
                }
                return j._DEFAULT;
            }
        }, {
            key: "_initSaveMap",
            value: function _initSaveMap() {
                for (var t in j._SAVE_SIZE = 0, j._SAVE = {}, j._DEFAULT) {
                    j._SAVE[t] = j._DEFAULT[t];
                }
            }
        }, {
            key: "create",
            value: function create(t) {
                var e = t + "",
                    i = j._SAVE[e];
                return null != i ? i : (j._SAVE_SIZE < 1e3 && j._initSaveMap(), j._SAVE[e] = new j(t));
            }
        }]);
        return j;
    }();
    j._SAVE = {}, j._SAVE_SIZE = 0, j._COLOR_MAP = {
        purple: "#800080",
        orange: "#ffa500",
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        black: "#000000",
        yellow: "#FFFF00",
        gray: "#808080"
    }, j._DEFAULT = j._initDefault(), j._COLODID = 1;
    var q = /* */ function(_z) {
        _inherits(q, _z);

        function q() {
            var _this8;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            _classCallCheck(this, q);
            _this8 = _possibleConstructorReturn(this, _getPrototypeOf(q).call(this)), t || (t = _this8._copyMatrix(q.IDENTITY_MATRIX)),
                _this8._mat = new Float32Array(16), _this8._alpha = new Float32Array(4), _this8.setByMatrix(t);
            return _this8;
        }
        _createClass(q, [{
            key: "gray",
            value: function gray() {
                return this.setByMatrix(q.GRAY_MATRIX);
            }
        }, {
            key: "color",
            value: function color() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                return this.setByMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, s]);
            }
        }, {
            key: "setColor",
            value: function setColor(t) {
                var e = j.create(t).arrColor,
                    i = [0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0];
                return this.setByMatrix(i);
            }
        }, {
            key: "setByMatrix",
            value: function setByMatrix(t) {
                this._matrix != t && this._copyMatrix(t);
                for (var e = 0, i = 0, s = 0; s < 20; s++) {
                    s % 5 != 4 ? this._mat[e++] = t[s] : this._alpha[i++] = t[s];
                }
                return this;
            }
        }, {
            key: "adjustColor",
            value: function adjustColor(t, e, i, s) {
                return this.adjustHue(s), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i),
                    this;
            }
        }, {
            key: "adjustBrightness",
            value: function adjustBrightness(t) {
                return 0 == (t = this._clampValue(t, 100)) || isNaN(t) ? this : this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }
        }, {
            key: "adjustContrast",
            value: function adjustContrast(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
                var e, i = (e = t < 0 ? 127 + t / 100 * 127 : 127 * (e = 0 == (e = t % 1) ? q.DELTA_INDEX[t] : q.DELTA_INDEX[t << 0] * (1 - e) + q.DELTA_INDEX[1 + (t << 0)] * e) + 127) / 127,
                    s = .5 * (127 - e);
                return this._multiplyMatrix([i, 0, 0, 0, s, 0, i, 0, 0, s, 0, 0, i, 0, s, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }
        }, {
            key: "adjustSaturation",
            value: function adjustSaturation(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
                var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
                    i = 1 - e,
                    s = .3086 * i,
                    r = .6094 * i,
                    a = .082 * i;
                return this._multiplyMatrix([s + e, r, a, 0, 0, s, r + e, a, 0, 0, s, r, a + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }
        }, {
            key: "adjustHue",
            value: function adjustHue(t) {
                if (0 == (t = this._clampValue(t, 180) / 180 * Math.PI) || isNaN(t)) return this;
                var e = Math.cos(t),
                    i = Math.sin(t),
                    s = .213,
                    r = .715,
                    a = .072;
                return this._multiplyMatrix([s + e * (1 - s) + i * -s, r + e * -r + i * -r, a + e * -a + i * (1 - a), 0, 0, s + e * -s + .143 * i, r + e * (1 - r) + .14 * i, a + e * -a + -.283 * i, 0, 0, s + e * -s + -.787 * i, r + e * -r + i * r, a + e * (1 - a) + i * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.setByMatrix(this._copyMatrix(q.IDENTITY_MATRIX));
            }
        }, {
            key: "_multiplyMatrix",
            value: function _multiplyMatrix(t) {
                var e = [];
                this._matrix = this._fixMatrix(this._matrix);
                for (var i = 0; i < 5; i++) {
                    for (var s = 0; s < 5; s++) {
                        e[s] = this._matrix[s + 5 * i];
                    }
                    for (s = 0; s < 5; s++) {
                        for (var r = 0, a = 0; a < 5; a++) {
                            r += t[s + 5 * a] * e[a];
                        }
                        this._matrix[s + 5 * i] = r;
                    }
                }
                return this.setByMatrix(this._matrix);
            }
        }, {
            key: "_clampValue",
            value: function _clampValue(t, e) {
                return Math.min(e, Math.max(-e, t));
            }
        }, {
            key: "_fixMatrix",
            value: function _fixMatrix() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return null == t ? q.IDENTITY_MATRIX : (t.length < q.LENGTH ? t = t.slice(0, t.length).concat(q.IDENTITY_MATRIX.slice(t.length, q.LENGTH)) : t.length > q.LENGTH && (t = t.slice(0, q.LENGTH)),
                    t);
            }
        }, {
            key: "_copyMatrix",
            value: function _copyMatrix(t) {
                var e = q.LENGTH;
                this._matrix || (this._matrix = []);
                for (var i = 0; i < e; i++) {
                    this._matrix[i] = t[i];
                }
                return this._matrix;
            }
        }, {
            key: "type",
            get: function get() {
                return z.COLOR;
            }
        }]);
        return q;
    }(z);
    q.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10],
        q.GRAY_MATRIX = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0],
        q.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        q.LENGTH = 25;
    var Q = /* */ function() {
        function Q() {
            _classCallCheck(this, Q);
            this.colorFlt = null, this.uv = null;
        }
        _createClass(Q, [{
            key: "recover",
            value: function recover() {
                this.texture && this.texture._removeReference(), this.texture = null, this.matrix = null,
                    s.recover("DrawTextureCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.texture && t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt, this.uv);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return Q.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l, _) {
                var c = s.getItemByClass("DrawTextureCmd", Q);
                return c.texture = t, t._addReference(), c.x = e, c.y = i, c.width = r, c.height = a,
                    c.matrix = n, c.alpha = h, c.color = o, c.blendMode = l, c.uv = null == _ ? null : _,
                    o && (c.colorFlt = new q(), c.colorFlt.setColor(o)), c;
            }
        }]);
        return Q;
    }();
    Q.ID = "DrawTexture";
    var Z = /* */ function() {
        function Z() {
            _classCallCheck(this, Z);
        }
        _createClass(Z, [{
            key: "recover",
            value: function recover() {
                this.texture = null, this.offset = null, this.other = null, s.recover("FillTextureCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return Z.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h, o) {
                var l = s.getItemByClass("FillTextureCmd", Z);
                return l.texture = t, l.x = e, l.y = i, l.width = r, l.height = a, l.type = n, l.offset = h,
                    l.other = o, l;
            }
        }]);
        return Z;
    }();
    Z.ID = "FillTexture";
    var $ = /* */ function() {
        function $() {
            _classCallCheck(this, $);
        }
        _createClass($, [{
            key: "recover",
            value: function recover() {
                s.recover("RestoreCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.restore();
            }
        }, {
            key: "cmdID",
            get: function get() {
                return $.ID;
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("RestoreCmd", $);
            }
        }]);
        return $;
    }();
    $.ID = "Restore";
    var J = /* */ function() {
        function J() {
            _classCallCheck(this, J);
        }
        _createClass(J, [{
            key: "recover",
            value: function recover() {
                s.recover("RotateCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._rotate(this.angle, this.pivotX + e, this.pivotY + i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return J.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i) {
                var r = s.getItemByClass("RotateCmd", J);
                return r.angle = t, r.pivotX = e, r.pivotY = i, r;
            }
        }]);
        return J;
    }();
    J.ID = "Rotate";
    var tt = /* */ function() {
        function tt() {
            _classCallCheck(this, tt);
        }
        _createClass(tt, [{
            key: "recover",
            value: function recover() {
                s.recover("ScaleCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return tt.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r) {
                var a = s.getItemByClass("ScaleCmd", tt);
                return a.scaleX = t, a.scaleY = e, a.pivotX = i, a.pivotY = r, a;
            }
        }]);
        return tt;
    }();
    tt.ID = "Scale";
    var et = /* */ function() {
        function et() {
            _classCallCheck(this, et);
        }
        _createClass(et, [{
            key: "recover",
            value: function recover() {
                this.matrix = null, s.recover("TransformCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._transform(this.matrix, this.pivotX + e, this.pivotY + i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return et.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i) {
                var r = s.getItemByClass("TransformCmd", et);
                return r.matrix = t, r.pivotX = e, r.pivotY = i, r;
            }
        }]);
        return et;
    }();
    et.ID = "Transform";
    var it = /* */ function() {
        function it() {
            _classCallCheck(this, it);
        }
        _createClass(it, [{
            key: "recover",
            value: function recover() {
                s.recover("TranslateCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.translate(this.tx, this.ty);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return it.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e) {
                var i = s.getItemByClass("TranslateCmd", it);
                return i.tx = t, i.ty = e, i;
            }
        }]);
        return it;
    }();
    it.ID = "Translate";
    var st = /* */ function() {
        function st() {
            _classCallCheck(this, st);
            this._controlPoints = [new f(), new f(), new f()], this._calFun = this.getPoint2;
        }
        _createClass(st, [{
            key: "_switchPoint",
            value: function _switchPoint(t, e) {
                var i = this._controlPoints.shift();
                i.setTo(t, e), this._controlPoints.push(i);
            }
        }, {
            key: "getPoint2",
            value: function getPoint2(t, e) {
                var i = this._controlPoints[0],
                    s = this._controlPoints[1],
                    r = this._controlPoints[2],
                    a = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * r.x,
                    n = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * r.y;
                e.push(a, n);
            }
        }, {
            key: "getPoint3",
            value: function getPoint3(t, e) {
                var i = this._controlPoints[0],
                    s = this._controlPoints[1],
                    r = this._controlPoints[2],
                    a = this._controlPoints[3],
                    n = Math.pow(1 - t, 3) * i.x + 3 * s.x * t * (1 - t) * (1 - t) + 3 * r.x * t * t * (1 - t) + a.x * Math.pow(t, 3),
                    h = Math.pow(1 - t, 3) * i.y + 3 * s.y * t * (1 - t) * (1 - t) + 3 * r.y * t * t * (1 - t) + a.y * Math.pow(t, 3);
                e.push(n, h);
            }
        }, {
            key: "insertPoints",
            value: function insertPoints(t, e) {
                var i, s;
                for (s = 1 / (t = t > 0 ? t : 5), i = 0; i <= 1; i += s) {
                    this._calFun(i, e);
                }
            }
        }, {
            key: "getBezierPoints",
            value: function getBezierPoints(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
                var s, r;
                if ((r = t.length) < 2 * (i + 1)) return [];
                var a = [];
                switch (i) {
                    case 2:
                        this._calFun = this.getPoint2;
                        break;

                    case 3:
                        this._calFun = this.getPoint3;
                        break;

                    default:
                        return [];
                }
                for (; this._controlPoints.length <= i;) {
                    this._controlPoints.push(f.create());
                }
                for (s = 0; s < 2 * i; s += 2) {
                    this._switchPoint(t[s], t[s + 1]);
                }
                for (s = 2 * i; s < r; s += 2) {
                    this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, a);
                }
                return a;
            }
        }]);
        return st;
    }();
    st.I = new st();
    var rt = /* */ function() {
        function rt() {
            _classCallCheck(this, rt);
        }
        _createClass(rt, null, [{
            key: "multiply",
            value: function multiply(t, e, i) {
                return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
            }
        }, {
            key: "dis",
            value: function dis(t, e) {
                return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
            }
        }, {
            key: "_getPoints",
            value: function _getPoints(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                for (rt._mPointList || (rt._mPointList = []); rt._mPointList.length < t;) {
                    rt._mPointList.push(new f());
                }
                return i || (i = []), i.length = 0, e ? rt.getFrom(i, rt._mPointList, t) : rt.getFromR(i, rt._mPointList, t),
                    i;
            }
        }, {
            key: "getFrom",
            value: function getFrom(t, e, i) {
                var s;
                for (s = 0; s < i; s++) {
                    t.push(e[s]);
                }
                return t;
            }
        }, {
            key: "getFromR",
            value: function getFromR(t, e, i) {
                var s;
                for (s = 0; s < i; s++) {
                    t.push(e.pop());
                }
                return t;
            }
        }, {
            key: "pListToPointList",
            value: function pListToPointList(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i, s = t.length / 2,
                    r = rt._getPoints(s, e, rt._tempPointList);
                for (i = 0; i < s; i++) {
                    r[i].setTo(t[i + i], t[i + i + 1]);
                }
                return r;
            }
        }, {
            key: "pointListToPlist",
            value: function pointListToPlist(t) {
                var e, i, s = t.length,
                    r = rt._temPList;
                for (r.length = 0, e = 0; e < s; e++) {
                    i = t[e], r.push(i.x, i.y);
                }
                return r;
            }
        }, {
            key: "scanPList",
            value: function scanPList(t) {
                return K.copyArray(t, rt.pointListToPlist(rt.scan(rt.pListToPointList(t, !0))));
            }
        }, {
            key: "scan",
            value: function scan(t) {
                var e, i, s, r, a, n = 0,
                    h = t.length,
                    o = {};
                for ((r = rt._temArr).length = 0, e = (h = t.length) - 1; e >= 0; e--) {
                    (a = (s = t[e]).x + "_" + s.y) in o || (o[a] = !0, r.push(s));
                }
                for (h = r.length, K.copyArray(t, r), e = 1; e < h; e++) {
                    (t[e].y < t[n].y || t[e].y == t[n].y && t[e].x < t[n].x) && (n = e);
                }
                for (s = t[0], t[0] = t[n], t[n] = s, e = 1; e < h - 1; e++) {
                    for (n = e, i = e + 1; i < h; i++) {
                        (rt.multiply(t[i], t[n], t[0]) > 0 || 0 == rt.multiply(t[i], t[n], t[0]) && rt.dis(t[0], t[i]) < rt.dis(t[0], t[n])) && (n = i);
                    }
                    s = t[e], t[e] = t[n], t[n] = s;
                }
                if ((r = rt._temArr).length = 0, t.length < 3) return K.copyArray(r, t);
                for (r.push(t[0], t[1], t[2]), e = 3; e < h; e++) {
                    for (; r.length >= 2 && rt.multiply(t[e], r[r.length - 1], r[r.length - 2]) >= 0;) {
                        r.pop();
                    }
                    t[e] && r.push(t[e]);
                }
                return r;
            }
        }]);
        return rt;
    }();
    rt._tempPointList = [], rt._temPList = [], rt._temArr = [];
    var at = /* */ function() {
        function at(t) {
            _classCallCheck(this, at);
            this.setValue(t);
        }
        _createClass(at, [{
            key: "setValue",
            value: function setValue(t) {
                this._color = t ? t instanceof j ? t : j.create(t) : j.create("#000000");
            }
        }, {
            key: "reset",
            value: function reset() {
                this._color = j.create("#000000");
            }
        }, {
            key: "toInt",
            value: function toInt() {
                return this._color.numColor;
            }
        }, {
            key: "equal",
            value: function equal(t) {
                return "string" == typeof t ? this._color.strColor === t : t instanceof j && this._color.numColor === t.numColor;
            }
        }, {
            key: "toColorStr",
            value: function toColorStr() {
                return this._color.strColor;
            }
        }], [{
            key: "create",
            value: function create(t) {
                if (t) {
                    var e = t instanceof j ? t : j.create(t);
                    return e._drawStyle || (e._drawStyle = new at(t));
                }
                return at.DEFAULT;
            }
        }]);
        return at;
    }();
    at.DEFAULT = new at("#000000");
    var nt = /* */ function() {
        function nt() {
            _classCallCheck(this, nt);
            this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
        }
        _createClass(nt, [{
            key: "beginPath",
            value: function beginPath(t) {
                this.paths.length = 1, this._curPath = this.paths[0] = new ht(), this._curPath.convex = t;
            }
        }, {
            key: "closePath",
            value: function closePath() {
                this._curPath.loop = !0;
            }
        }, {
            key: "newPath",
            value: function newPath() {
                this._curPath = new ht(), this.paths.push(this._curPath);
            }
        }, {
            key: "addPoint",
            value: function addPoint(t, e) {
                this._curPath.path.push(t, e);
            }
        }, {
            key: "push",
            value: function push(t, e) {
                this._curPath ? this._curPath.path.length > 0 && (this._curPath = new ht(), this.paths.push(this._curPath)) : (this._curPath = new ht(),
                    this.paths.push(this._curPath));
                var i = this._curPath;
                i.path = t.slice(), i.convex = e;
            }
        }, {
            key: "reset",
            value: function reset() {
                this.paths.length = 0;
            }
        }]);
        return nt;
    }();
    var ht = function ht() {
        _classCallCheck(this, ht);
        this.path = [], this.loop = !1, this.convex = !1;
    };
    var ot = /* */ function() {
        function ot() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ot.TYPE_2D;
            _classCallCheck(this, ot);
            this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0,
                this._parent = null, this._key = new X(), this._startIdx = 0, this._numEle = 0,
                this._ref = 1, this.shaderValue = null, this._renderType = t, this._id = ++ot.ID;
        }
        _createClass(ot, [{
            key: "getID",
            value: function getID() {
                return this._id;
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return this._renderType;
            }
        }, {
            key: "toString",
            value: function toString() {
                return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
            }
        }, {
            key: "renderSubmit",
            value: function renderSubmit() {
                return 1;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {}
        }], [{
            key: "__init__",
            value: function __init__() {
                var t = ot.RENDERBASE = new ot(-1);
                t.shaderValue = new V(0, 0), t.shaderValue.ALPHA = 1, t._ref = 4294967295;
            }
        }]);
        return ot;
    }();
    ot.TYPE_2D = 1e4, ot.TYPE_CANVAS = 10003, ot.TYPE_CMDSETRT = 10004, ot.TYPE_CUSTOM = 10005,
        ot.TYPE_BLURRT = 10006, ot.TYPE_CMDDESTORYPRERT = 10007, ot.TYPE_DISABLESTENCIL = 10008,
        ot.TYPE_OTHERIBVB = 10009, ot.TYPE_PRIMITIVE = 10010, ot.TYPE_RT = 10011, ot.TYPE_BLUR_RT = 10012,
        ot.TYPE_TARGET = 10013, ot.TYPE_CHANGE_VALUE = 10014, ot.TYPE_SHAPE = 10015, ot.TYPE_TEXTURE = 10016,
        ot.TYPE_FILLTEXTURE = 10017, ot.KEY_ONCE = -1, ot.KEY_FILLRECT = 1, ot.KEY_DRAWTEXTURE = 2,
        ot.KEY_VG = 3, ot.KEY_TRIANGLES = 4, ot.ID = 1, ot.preRender = null;
    var lt = /* */ function() {
        function lt() {
            _classCallCheck(this, lt);
        }
        _createClass(lt, [{
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                this._dataObj[this._valueName] = this._value, lt.POOL[lt.POOL._length++] = this,
                    this._newSubmit && (t._curSubmit = ot.RENDERBASE);
            }
        }], [{
            key: "_createArray",
            value: function _createArray() {
                var t = [];
                return t._length = 0, t;
            }
        }, {
            key: "_init",
            value: function _init() {
                var t = lt._namemap = {};
                return t[lt.TYPE_ALPHA] = "ALPHA", t[lt.TYPE_FILESTYLE] = "fillStyle", t[lt.TYPE_FONT] = "font",
                    t[lt.TYPE_LINEWIDTH] = "lineWidth", t[lt.TYPE_STROKESTYLE] = "strokeStyle", t[lt.TYPE_ENABLEMERGE] = "_mergeID",
                    t[lt.TYPE_MARK] = t[lt.TYPE_TRANSFORM] = t[lt.TYPE_TRANSLATE] = [], t[lt.TYPE_TEXTBASELINE] = "textBaseline",
                    t[lt.TYPE_TEXTALIGN] = "textAlign", t[lt.TYPE_GLOBALCOMPOSITEOPERATION] = "_nBlendType",
                    t[lt.TYPE_SHADER] = "shader", t[lt.TYPE_FILTERS] = "filters", t[lt.TYPE_COLORFILTER] = "_colorFiler",
                    t;
            }
        }, {
            key: "save",
            value: function save(t, e, i, s) {
                if ((t._saveMark._saveuse & e) !== e) {
                    t._saveMark._saveuse |= e;
                    var r = lt.POOL,
                        a = r._length > 0 ? r[--r._length] : new lt();
                    a._value = i[a._valueName = lt._namemap[e]], a._dataObj = i, a._newSubmit = s;
                    var n = t._save;
                    n[n._length++] = a;
                }
            }
        }]);
        return lt;
    }();
    lt.TYPE_ALPHA = 1, lt.TYPE_FILESTYLE = 2, lt.TYPE_FONT = 8, lt.TYPE_LINEWIDTH = 256,
        lt.TYPE_STROKESTYLE = 512, lt.TYPE_MARK = 1024, lt.TYPE_TRANSFORM = 2048, lt.TYPE_TRANSLATE = 4096,
        lt.TYPE_ENABLEMERGE = 8192, lt.TYPE_TEXTBASELINE = 16384, lt.TYPE_TEXTALIGN = 32768,
        lt.TYPE_GLOBALCOMPOSITEOPERATION = 65536, lt.TYPE_CLIPRECT = 131072, lt.TYPE_CLIPRECT_STENCIL = 262144,
        lt.TYPE_IBVB = 524288, lt.TYPE_SHADER = 1048576, lt.TYPE_FILTERS = 2097152, lt.TYPE_FILTERS_TYPE = 4194304,
        lt.TYPE_COLORFILTER = 8388608, lt.POOL = lt._createArray(), lt._namemap = lt._init();
    var _t = /* */ function() {
        function _t() {
            _classCallCheck(this, _t);
            this._globalClipMatrix = new p(), this._clipInfoID = -1, this._clipRect = new g(),
                this.incache = !1;
        }
        _createClass(_t, [{
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                this._globalClipMatrix.copyTo(t._globalClipMatrix), this._clipRect.clone(t._clipRect),
                    t._clipInfoID = this._clipInfoID, _t.POOL[_t.POOL._length++] = this, t._clipInCache = this.incache;
            }
        }], [{
            key: "save",
            value: function save(t) {
                if ((t._saveMark._saveuse & lt.TYPE_CLIPRECT) != lt.TYPE_CLIPRECT) {
                    t._saveMark._saveuse |= lt.TYPE_CLIPRECT;
                    var e = _t.POOL,
                        i = e._length > 0 ? e[--e._length] : new _t();
                    t._globalClipMatrix.copyTo(i._globalClipMatrix), t._clipRect.clone(i._clipRect),
                        i._clipInfoID = t._clipInfoID, i.incache = t._clipInCache;
                    var s = t._save;
                    s[s._length++] = i;
                }
            }
        }]);
        return _t;
    }();
    _t.POOL = lt._createArray();
    var ct = /* */ function() {
        function ct() {
            _classCallCheck(this, ct);
            this._saveuse = 0;
        }
        _createClass(ct, [{
            key: "isSaveMark",
            value: function isSaveMark() {
                return !0;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                t._saveMark = this._preSaveMark, ct.POOL[ct.POOL._length++] = this;
            }
        }], [{
            key: "Create",
            value: function Create(t) {
                var e = ct.POOL,
                    i = e._length > 0 ? e[--e._length] : new ct();
                return i._saveuse = 0, i._preSaveMark = t._saveMark, t._saveMark = i, i;
            }
        }]);
        return ct;
    }();
    ct.POOL = lt._createArray();
    var ut = /* */ function() {
        function ut() {
            _classCallCheck(this, ut);
            this._matrix = new p();
        }
        _createClass(ut, [{
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                t._curMat = this._savematrix, ut.POOL[ut.POOL._length++] = this;
            }
        }], [{
            key: "save",
            value: function save(t) {
                var e = t._saveMark;
                if ((e._saveuse & lt.TYPE_TRANSFORM) !== lt.TYPE_TRANSFORM) {
                    e._saveuse |= lt.TYPE_TRANSFORM;
                    var i = ut.POOL,
                        s = i._length > 0 ? i[--i._length] : new ut();
                    s._savematrix = t._curMat, t._curMat = t._curMat.copyTo(s._matrix);
                    var r = t._save;
                    r[r._length++] = s;
                }
            }
        }]);
        return ut;
    }();
    ut.POOL = lt._createArray();
    var dt = /* */ function() {
        function dt() {
            _classCallCheck(this, dt);
            this._mat = new p();
        }
        _createClass(dt, [{
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                this._mat.copyTo(t._curMat), dt.POOL[dt.POOL._length++] = this;
            }
        }], [{
            key: "save",
            value: function save(t) {
                var e = dt.POOL,
                    i = e._length > 0 ? e[--e._length] : new dt();
                t._curMat.copyTo(i._mat);
                var s = t._save;
                s[s._length++] = i;
            }
        }]);
        return dt;
    }();
    dt.POOL = lt._createArray();
    var pt = /* */ function() {
        function pt() {
            _classCallCheck(this, pt);
            this._nativeVertexArrayObject = m.layaGPUInstance.createVertexArray();
        }
        _createClass(pt, [{
            key: "bind",
            value: function bind() {
                pt._curBindedBufferState !== this && (m.layaGPUInstance.bindVertexArray(this._nativeVertexArrayObject),
                    pt._curBindedBufferState = this);
            }
        }, {
            key: "unBind",
            value: function unBind() {
                if (pt._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
                m.layaGPUInstance.bindVertexArray(null), pt._curBindedBufferState = null;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                m.layaGPUInstance.deleteVertexArray(this._nativeVertexArrayObject);
            }
        }, {
            key: "bindForNative",
            value: function bindForNative() {
                m.instance.bindVertexArray(this._nativeVertexArrayObject), pt._curBindedBufferState = this;
            }
        }, {
            key: "unBindForNative",
            value: function unBindForNative() {
                m.instance.bindVertexArray(null), pt._curBindedBufferState = null;
            }
        }]);
        return pt;
    }();
    var ft = /* */ function(_pt) {
        _inherits(ft, _pt);

        function ft() {
            _classCallCheck(this, ft);
            return _possibleConstructorReturn(this, _getPrototypeOf(ft).call(this));
        }
        return ft;
    }(pt);
    var gt = /* */ function() {
        function gt() {
            _classCallCheck(this, gt);
            this._byteLength = 0, this._glBuffer = m.instance.createBuffer();
        }
        _createClass(gt, [{
            key: "_bindForVAO",
            value: function _bindForVAO() {}
        }, {
            key: "bind",
            value: function bind() {
                return !1;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._glBuffer && (m.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
            }
        }, {
            key: "bufferUsage",
            get: function get() {
                return this._bufferUsage;
            }
        }]);
        return gt;
    }();
    var mt = function mt() {
        _classCallCheck(this, mt);
    };
    mt.loopStTm = 0, mt.loopCount = 0;
    var vt = /* */ function(_gt) {
        _inherits(vt, _gt);

        function vt() {
            var _this9;
            _classCallCheck(this, vt);
            _this9 = _possibleConstructorReturn(this, _getPrototypeOf(vt).call(this)), _this9._maxsize = 0,
                _this9._upload = !0, _this9._uploadSize = 0, _this9._bufferSize = 0, _this9._u8Array = null;
            return _this9;
        }
        _createClass(vt, [{
            key: "setByteLength",
            value: function setByteLength(t) {
                this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0),
                    this._byteLength = t);
            }
        }, {
            key: "needSize",
            value: function needSize(t) {
                var e = this._byteLength;
                if (t) {
                    var i = this._byteLength + t;
                    i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
                }
                return e;
            }
        }, {
            key: "_bufferData",
            value: function _bufferData() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), mt.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64),
                        this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength),
                    this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength,
                        m.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), m.instance.bufferSubData(this._bufferType, 0, new Uint8Array(this._buffer, 0, this._byteLength));
            }
        }, {
            key: "_bufferSubData",
            value: function _bufferSubData() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                if (this._maxsize = Math.max(this._maxsize, this._byteLength), mt.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64),
                        this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength),
                    this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength,
                        m.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), e || i) {
                    var s = this._buffer.slice(e, i);
                    m.instance.bufferSubData(this._bufferType, t, s);
                } else m.instance.bufferSubData(this._bufferType, t, this._buffer);
            }
        }, {
            key: "_checkArrayUse",
            value: function _checkArrayUse() {}
        }, {
            key: "_bind_uploadForVAO",
            value: function _bind_uploadForVAO() {
                return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), !0);
            }
        }, {
            key: "_bind_upload",
            value: function _bind_upload() {
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0);
            }
        }, {
            key: "_bind_subUpload",
            value: function _bind_subUpload() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), !0);
            }
        }, {
            key: "_resizeBuffer",
            value: function _resizeBuffer(t, e) {
                var i = this._buffer;
                if (t <= i.byteLength) return this;
                var s = this._u8Array;
                if (e && i && i.byteLength > 0) {
                    var r = new ArrayBuffer(t),
                        a = s && s.buffer == i ? s : new Uint8Array(i);
                    (s = this._u8Array = new Uint8Array(r)).set(a, 0), i = this._buffer = r;
                } else i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
                return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength,
                    this;
            }
        }, {
            key: "append",
            value: function append(t) {
                var e, i;
                this._upload = !0, e = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + e, !0),
                        i = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + e, !0),
                        i = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + e, !0),
                        i = new Float32Array(this._buffer, this._byteLength)), i.set(t, 0), this._byteLength += e,
                    this._checkArrayUse();
            }
        }, {
            key: "appendU16Array",
            value: function appendU16Array(t, e) {
                this._resizeBuffer(this._byteLength + 2 * e, !0);
                var i = new Uint16Array(this._buffer, this._byteLength, e);
                if (6 == e) i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5];
                else if (e >= 100) i.set(new Uint16Array(t.buffer, 0, e));
                else
                    for (var s = 0; s < e; s++) {
                        i[s] = t[s];
                    }
                this._byteLength += 2 * e, this._checkArrayUse();
            }
        }, {
            key: "appendEx",
            value: function appendEx(t, e) {
                var i;
                this._upload = !0, i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0),
                    new e(this._buffer, this._byteLength).set(t, 0), this._byteLength += i, this._checkArrayUse();
            }
        }, {
            key: "appendEx2",
            value: function appendEx2(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                var r, a, n;
                for (this._upload = !0, r = i * s, this._resizeBuffer(this._byteLength + r, !0),
                    a = new e(this._buffer, this._byteLength), n = 0; n < i; n++) {
                    a[n] = t[n];
                }
                this._byteLength += r, this._checkArrayUse();
            }
        }, {
            key: "getBuffer",
            value: function getBuffer() {
                return this._buffer;
            }
        }, {
            key: "setNeedUpload",
            value: function setNeedUpload() {
                this._upload = !0;
            }
        }, {
            key: "getNeedUpload",
            value: function getNeedUpload() {
                return this._upload;
            }
        }, {
            key: "upload",
            value: function upload() {
                var t = m.instance,
                    e = this._bind_upload();
                return t.bindBuffer(this._bufferType, null), this._bufferType == t.ARRAY_BUFFER && (gt._bindedVertexBuffer = null),
                    this._bufferType == t.ELEMENT_ARRAY_BUFFER && (gt._bindedIndexBuffer = null), L.activeShader = null,
                    e;
            }
        }, {
            key: "subUpload",
            value: function subUpload() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = m.instance,
                    r = this._bind_subUpload();
                return s.bindBuffer(this._bufferType, null), this._bufferType == s.ARRAY_BUFFER && (gt._bindedVertexBuffer = null),
                    this._bufferType == s.ELEMENT_ARRAY_BUFFER && (gt._bindedIndexBuffer = null), L.activeShader = null,
                    r;
            }
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                this._upload = !0, this._uploadSize = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._byteLength = 0, this._upload = !0;
            }
        }, {
            key: "bufferLength",
            get: function get() {
                return this._buffer.byteLength;
            }
        }, {
            key: "byteLength",
            set: function set(t) {
                this.setByteLength(t);
            }
        }], [{
            key: "__int__",
            value: function __int__(t) {}
        }]);
        return vt;
    }(gt);
    vt.FLOAT32 = 4, vt.SHORT = 2;
    var Tt = /* */ function(_vt) {
        _inherits(Tt, _vt);

        function Tt() {
            var _this10;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 35044;
            _classCallCheck(this, Tt);
            _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Tt).call(this)), _this10._bufferUsage = t,
                _this10._bufferType = m.instance.ELEMENT_ARRAY_BUFFER, _this10._buffer = new ArrayBuffer(8);
            return _this10;
        }
        _createClass(Tt, [{
            key: "_checkArrayUse",
            value: function _checkArrayUse() {
                this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
            }
        }, {
            key: "getUint16Array",
            value: function getUint16Array() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
            }
        }, {
            key: "_bindForVAO",
            value: function _bindForVAO() {
                var t = m.instance;
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._glBuffer);
            }
        }, {
            key: "bind",
            value: function bind() {
                if (gt._bindedIndexBuffer !== this._glBuffer) {
                    var t = m.instance;
                    return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._glBuffer), gt._bindedIndexBuffer = this._glBuffer, !0;
                }
                return !1;
            }
        }, {
            key: "destory",
            value: function destory() {
                this._uint16Array = null, this._buffer = null;
            }
        }, {
            key: "disposeResource",
            value: function disposeResource() {
                this._disposeResource();
            }
        }]);
        return Tt;
    }(vt);
    Tt.create = function() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 35044;
        return new Tt(t);
    };
    var xt = /* */ function(_vt2) {
        _inherits(xt, _vt2);

        function xt(t, e) {
            var _this11;
            _classCallCheck(this, xt);
            _this11 = _possibleConstructorReturn(this, _getPrototypeOf(xt).call(this)), _this11._vertexStride = t,
                _this11._bufferUsage = e, _this11._bufferType = m.instance.ARRAY_BUFFER, _this11._buffer = new ArrayBuffer(8),
                _this11._floatArray32 = new Float32Array(_this11._buffer), _this11._uint32Array = new Uint32Array(_this11._buffer);
            return _this11;
        }
        _createClass(xt, [{
            key: "getFloat32Array",
            value: function getFloat32Array() {
                return this._floatArray32;
            }
        }, {
            key: "appendArray",
            value: function appendArray(t) {
                var e = this._byteLength >> 2;
                this.setByteLength(this._byteLength + 4 * t.length), this.getFloat32Array().set(t, e),
                    this._upload = !0;
            }
        }, {
            key: "_checkArrayUse",
            value: function _checkArrayUse() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
            }
        }, {
            key: "deleteBuffer",
            value: function deleteBuffer() {
                _get(_getPrototypeOf(xt.prototype), "_disposeResource", this).call(this);
            }
        }, {
            key: "_bindForVAO",
            value: function _bindForVAO() {
                var t = m.instance;
                t.bindBuffer(t.ARRAY_BUFFER, this._glBuffer);
            }
        }, {
            key: "bind",
            value: function bind() {
                if (gt._bindedVertexBuffer !== this._glBuffer) {
                    var t = m.instance;
                    return t.bindBuffer(t.ARRAY_BUFFER, this._glBuffer), gt._bindedVertexBuffer = this._glBuffer, !0;
                }
                return !1;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(xt.prototype), "destroy", this).call(this), this._byteLength = 0,
                    this._upload = !0, this._buffer = null, this._floatArray32 = null;
            }
        }, {
            key: "vertexStride",
            get: function get() {
                return this._vertexStride;
            }
        }]);
        return xt;
    }(vt);
    xt.create = function(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35048;
        return new xt(t, e);
    };
    var yt = /* */ function() {
        function yt(t, i, s) {
            _classCallCheck(this, yt);
            this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._quadNum = 0,
                this.canReuse = !1, this._stride = t, this._vb = new xt(t, m.instance.DYNAMIC_DRAW),
                i ? this._vb._resizeBuffer(i, !1) : e.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1),
                this._ib = new Tt(), s && this._ib._resizeBuffer(s, !1);
        }
        _createClass(yt, [{
            key: "cloneWithNewVB",
            value: function cloneWithNewVB() {
                var t = new yt(this._stride, 0, 0);
                return t._ib = this._ib, t._quadNum = this._quadNum, t._attribInfo = this._attribInfo,
                    t;
            }
        }, {
            key: "cloneWithNewVBIB",
            value: function cloneWithNewVBIB() {
                var t = new yt(this._stride, 0, 0);
                return t._attribInfo = this._attribInfo, t;
            }
        }, {
            key: "getVBW",
            value: function getVBW() {
                return this._vb.setNeedUpload(), this._vb;
            }
        }, {
            key: "getVBR",
            value: function getVBR() {
                return this._vb;
            }
        }, {
            key: "getIBR",
            value: function getIBR() {
                return this._ib;
            }
        }, {
            key: "getIBW",
            value: function getIBW() {
                return this._ib.setNeedUpload(), this._ib;
            }
        }, {
            key: "createQuadIB",
            value: function createQuadIB(t) {
                this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var e = this._ib.getUint16Array(), i = 0, s = 0, r = 0; r < t; r++) {
                    e[i++] = s, e[i++] = s + 2, e[i++] = s + 1, e[i++] = s, e[i++] = s + 3, e[i++] = s + 2,
                        s += 4;
                }
                this._ib.setNeedUpload();
            }
        }, {
            key: "setAttributes",
            value: function setAttributes(t) {
                if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
            }
        }, {
            key: "configVAO",
            value: function configVAO(t) {
                if (!this._applied) {
                    this._applied = !0, this._vao || (this._vao = new ft()), this._vao.bind(), this._vb._bindForVAO(),
                        this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                    for (var e = this._attribInfo.length / 3, i = 0, s = 0; s < e; s++) {
                        var r = this._attribInfo[i + 1],
                            a = this._attribInfo[i],
                            n = this._attribInfo[i + 2];
                        t.enableVertexAttribArray(s), t.vertexAttribPointer(s, r, a, !1, this._stride, n),
                            i += 3;
                    }
                    this._vao.unBind();
                }
            }
        }, {
            key: "useMesh",
            value: function useMesh(t) {
                this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(),
                    this._vb._bind_upload() || this._vb.bind();
            }
        }, {
            key: "getEleNum",
            value: function getEleNum() {
                return this._ib.getBuffer().byteLength / 2;
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {}
        }, {
            key: "destroy",
            value: function destroy() {}
        }, {
            key: "clearVB",
            value: function clearVB() {
                this._vb.clear();
            }
        }]);
        return yt;
    }();
    yt._gvaoid = 0;
    var Et = /* */ function(_yt) {
        _inherits(Et, _yt);

        function Et() {
            var _this12;
            _classCallCheck(this, Et);
            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Et).call(this, Et.const_stride, 4, 4)),
                _this12.canReuse = !0, _this12.setAttributes(Et._fixattriInfo), Et._fixib ? (_this12._ib = Et._fixib,
                    _this12._quadNum = Et._maxIB) : (_this12.createQuadIB(Et._maxIB), Et._fixib = _this12._ib);
            return _this12;
        }
        _createClass(Et, [{
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, Et._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._vb.destroy(), this._vb.deleteBuffer();
            }
        }, {
            key: "addQuad",
            value: function addQuad(t, e, i, s) {
                var r = this._vb,
                    a = r._byteLength >> 2;
                r.setByteLength(a + Et.const_stride << 2);
                var n = r._floatArray32 || r.getFloat32Array(),
                    h = r._uint32Array,
                    o = a,
                    l = s ? 255 : 0;
                n[o++] = t[0], n[o++] = t[1], n[o++] = e[0], n[o++] = e[1], h[o++] = i, h[o++] = l,
                    n[o++] = t[2], n[o++] = t[3], n[o++] = e[2], n[o++] = e[3], h[o++] = i, h[o++] = l,
                    n[o++] = t[4], n[o++] = t[5], n[o++] = e[4], n[o++] = e[5], h[o++] = i, h[o++] = l,
                    n[o++] = t[6], n[o++] = t[7], n[o++] = e[6], n[o++] = e[7], h[o++] = i, h[o++] = l,
                    r._upload = !0;
            }
        }], [{
            key: "__int__",
            value: function __int__() {
                Et._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                var e = null;
                return e = Et._POOL.length ? Et._POOL.pop() : new Et(), t && e._vb._resizeBuffer(65536 * Et.const_stride, !1),
                    e;
            }
        }]);
        return Et;
    }(yt);
    Et.const_stride = 24, Et._maxIB = 16384, Et._POOL = [];
    var Ct = /* */ function(_yt2) {
        _inherits(Ct, _yt2);

        function Ct() {
            var _this13;
            _classCallCheck(this, Ct);
            _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Ct).call(this, Ct.const_stride, 4, 4)),
                _this13.canReuse = !0, _this13.setAttributes(Ct._fixattriInfo);
            return _this13;
        }
        _createClass(Ct, [{
            key: "addData",
            value: function addData(t, e, i, s, r) {
                var a = this._vb,
                    n = this._ib,
                    h = t.length >> 1,
                    o = a.needSize(h * Ct.const_stride) >> 2,
                    l = a._floatArray32 || a.getFloat32Array(),
                    _ = a._uint32Array,
                    c = 0,
                    u = s.a,
                    d = s.b,
                    p = s.c,
                    f = s.d,
                    g = s.tx,
                    m = s.ty,
                    v = 0;
                for (v = 0; v < h; v++) {
                    var T = t[c],
                        x = t[c + 1];
                    l[o] = T * u + x * p + g, l[o + 1] = T * d + x * f + m, l[o + 2] = e[c], l[o + 3] = e[c + 1],
                        _[o + 4] = r, _[o + 5] = 255, o += 6, c += 2;
                }
                a.setNeedUpload();
                var y = this.vertNum,
                    E = i.length,
                    C = n.needSize(i.byteLength),
                    b = n.getUint16Array(),
                    A = C >> 1;
                if (y > 0) {
                    var R = A + E,
                        w = 0;
                    for (v = A; v < R; v++, w++) {
                        b[v] = i[w] + y;
                    }
                } else b.set(i, A);
                n.setNeedUpload(), this.vertNum += h, this.indexNum += i.length;
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0,
                    Ct._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                Ct._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                var e;
                return e = Ct._POOL.length ? Ct._POOL.pop() : new Ct(), t && e._vb._resizeBuffer(65536 * Ct.const_stride, !1),
                    e;
            }
        }]);
        return Ct;
    }(yt);
    Ct.const_stride = 24, Ct._POOL = [];
    var bt = /* */ function(_yt3) {
        _inherits(bt, _yt3);

        function bt() {
            var _this14;
            _classCallCheck(this, bt);
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(bt).call(this, bt.const_stride, 4, 4)),
                _this14.canReuse = !0, _this14.setAttributes(bt._fixattriInfo);
            return _this14;
        }
        _createClass(bt, [{
            key: "addVertAndIBToMesh",
            value: function addVertAndIBToMesh(t, e, i, s) {
                for (var r = this._vb.needSize(e.length / 2 * bt.const_stride) >> 2, a = this._vb._floatArray32 || this._vb.getFloat32Array(), n = this._vb._uint32Array, h = 0, o = e.length / 2, l = 0; l < o; l++) {
                    a[r++] = e[h], a[r++] = e[h + 1], h += 2, n[r++] = i;
                }
                this._vb.setNeedUpload(), this._ib.append(new Uint16Array(s)), this._ib.setNeedUpload(),
                    this.vertNum += o, this.indexNum += s.length;
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0,
                    bt._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                bt._fixattriInfo = [5126, 2, 0, 5121, 4, 8];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                var e;
                return e = bt._POOL.length ? bt._POOL.pop() : new bt(), t && e._vb._resizeBuffer(65536 * bt.const_stride, !1),
                    e;
            }
        }]);
        return bt;
    }(yt);
    bt.const_stride = 12, bt._POOL = [];
    var At = /* */ function() {
        function At(t, e) {
            _classCallCheck(this, At);
            this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [],
                this.submits = [], this.sprite = null, this.meshlist = [], this.cachedClipInfo = new p(),
                this.oldTx = 0, this.oldTy = 0, this.invMat = new p(), this.context = t, this.sprite = e,
                t._globalClipMatrix.copyTo(this.cachedClipInfo);
        }
        _createClass(At, [{
            key: "startRec",
            value: function startRec() {
                this.context._charSubmitCache._enable && (this.context._charSubmitCache.enable(!1, this.context),
                        this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0,
                    this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo),
                    this.submits.length = 0, this.submitStartPos = this.context._submits._length;
                for (var t = 0, e = this.meshlist.length; t < e; t++) {
                    var i = this.meshlist[t];
                    i.canReuse ? i.releaseMesh() : i.destroy();
                }
                this.meshlist.length = 0, this._mesh = Et.getAMesh(!1), this._pathMesh = bt.getAMesh(!1),
                    this._triangleMesh = Ct.getAMesh(!1), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh),
                    this.meshlist.push(this._triangleMesh), this.context._curSubmit = ot.RENDERBASE,
                    this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh,
                    this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist,
                    this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh,
                    this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty,
                    this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat),
                    this.invMat.invert();
            }
        }, {
            key: "endRec",
            value: function endRec() {
                this.context._charSubmitCache._enable && (this.context._charSubmitCache.enable(!1, this.context),
                    this.context._charSubmitCache.enable(!0, this.context));
                var t = this.context._submits;
                this.submitEndPos = t._length;
                for (var e = this.submitEndPos - this.submitStartPos, i = 0; i < e; i++) {
                    this.submits.push(t[this.submitStartPos + i]);
                }
                t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh,
                    this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList,
                    this.context._curSubmit = ot.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy,
                    this.context.touches = null, this.context._incache = !1;
            }
        }, {
            key: "isCacheValid",
            value: function isCacheValid() {
                var t = this.context._globalClipMatrix;
                return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty;
            }
        }, {
            key: "flushsubmit",
            value: function flushsubmit() {
                var t = ot.RENDERBASE;
                this.submits.forEach(function(e) {
                    e != ot.RENDERBASE && (ot.preRender = t, t = e, e.renderSubmit());
                });
            }
        }, {
            key: "releaseMem",
            value: function releaseMem() {}
        }]);
        return At;
    }();
    At.matI = new p();
    var Rt = "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\nattribute vec4 posuv;\r\nattribute vec4 attribColor;\r\nattribute vec4 attribFlags;\r\n//attribute vec4 clipDir;\r\n//attribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\r\nvarying vec2 cliped;\r\nuniform vec2 size;\r\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\r\n#ifdef WORLDMAT\r\n\tuniform mat4 mmat;\r\n#endif\r\n#ifdef MVP3D\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\n\r\nvoid main() {\r\n\r\n\tvec4 pos = vec4(posuv.xy,0.,1.);\r\n#ifdef WORLDMAT\r\n\tpos=mmat*pos;\r\n#endif\r\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\r\n#ifdef MVP3D\r\n\tgl_Position=u_MvpMatrix*pos1;\r\n#else\r\n\tgl_Position=pos1;\r\n#endif\r\n\tv_texcoordAlpha.xy = posuv.zw;\r\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\r\n\tv_color = attribColor/255.0;\r\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\r\n\t\r\n\tv_useTex = attribFlags.r/255.0;\r\n\tfloat clipw = length(clipMatDir.xy);\r\n\tfloat cliph = length(clipMatDir.zw);\r\n\t\r\n\tvec2 clpos = clipMatPos.xy;\r\n\t#ifdef WORLDMAT\r\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\r\n\t\tif(clipOff[0]>0.0){\r\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\r\n\t\t\tclpos.y+=mmat[3].y;\t//ty\r\n\t\t}\r\n\t#endif\r\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\r\n\tif(clipw>20000. && cliph>20000.)\r\n\t\tcliped = vec2(0.5,0.5);\r\n\telse {\r\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\r\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n\t}\r\n\r\n}",
        wt = "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\n#ifdef GL_FRAGMENT_PRECISION_HIGH\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\nuniform sampler2D texture;\r\nvarying vec2 cliped;\r\n\r\n#ifdef BLUR_FILTER\r\nuniform vec4 strength_sig2_2sig2_gauss1;\r\nuniform vec2 blurInfo;\r\n\r\n#define PI 3.141593\r\n\r\nfloat getGaussian(float x, float y){\r\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\r\n}\r\n\r\nvec4 blur(){\r\n    const float blurw = 9.0;\r\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \r\n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\r\n    vec2 ctexcoord = startpos;\r\n    vec2 step = 1.0/blurInfo;  //每个像素      \r\n    \r\n    for(float y = 0.0;y<=blurw; ++y){\r\n        ctexcoord.x=startpos.x;\r\n        for(float x = 0.0;x<=blurw; ++x){\r\n            //TODO 纹理坐标的固定偏移应该在vs中处理\r\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\r\n            ctexcoord.x+=step.x;\r\n        }\r\n        ctexcoord.y+=step.y;\r\n    }\r\n    return vec4Color;\r\n}\r\n#endif\r\n\r\n#ifdef COLOR_FILTER\r\nuniform vec4 colorAlpha;\r\nuniform mat4 colorMat;\r\n#endif\r\n\r\n#ifdef GLOW_FILTER\r\nuniform vec4 u_color;\r\nuniform vec4 u_blurInfo1;\r\nuniform vec4 u_blurInfo2;\r\n#endif\r\n\r\n#ifdef COLOR_ADD\r\nuniform vec4 colorAdd;\r\n#endif\r\n\r\n#ifdef FILLTEXTURE\t\r\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\r\n#endif\r\nvoid main() {\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n\t\r\n#ifdef FILLTEXTURE\t\r\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\r\n#else\r\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\r\n#endif\r\n\r\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\r\n   color.a*=v_color.w;\r\n   //color.rgb*=v_color.w;\r\n   color.rgb*=v_color.rgb;\r\n   gl_FragColor=color;\r\n   \r\n   #ifdef COLOR_ADD\r\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\r\n\tgl_FragColor.xyz *= colorAdd.a;\r\n   #endif\r\n   \r\n   #ifdef BLUR_FILTER\r\n\tgl_FragColor =   blur();\r\n\tgl_FragColor.w*=v_color.w;   \r\n   #endif\r\n   \r\n   #ifdef COLOR_FILTER\r\n\tmat4 alphaMat =colorMat;\r\n\r\n\talphaMat[0][3] *= gl_FragColor.a;\r\n\talphaMat[1][3] *= gl_FragColor.a;\r\n\talphaMat[2][3] *= gl_FragColor.a;\r\n\r\n\tgl_FragColor = gl_FragColor * alphaMat;\r\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\r\n   #endif\r\n   \r\n   #ifdef GLOW_FILTER\r\n\tconst float c_IterationTime = 10.0;\r\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\r\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\r\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\r\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\r\n\tvec2 vec2Off = vec2(0.0,0.0);\r\n\tfloat floatOff = c_IterationTime/2.0;\r\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\r\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\r\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\r\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\r\n\t\t}\r\n\t}\r\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\r\n\tgl_FragColor.rgb *= gl_FragColor.a;   \r\n   #endif\r\n   \r\n}",
        St = "attribute vec4 position;\r\nattribute vec4 attribColor;\r\n//attribute vec4 clipDir;\r\n//attribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\r\n#ifdef WORLDMAT\r\n\tuniform mat4 mmat;\r\n#endif\r\nuniform mat4 u_mmat2;\r\n//uniform vec2 u_pos;\r\nuniform vec2 size;\r\nvarying vec4 color;\r\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\r\n//vec4 clip=vec4(100.,30.,300.,600.);\r\nvarying vec2 cliped;\r\nvoid main(){\r\n\t\r\n#ifdef WORLDMAT\r\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\r\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\r\n#else\r\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\r\n#endif\t\r\n\tfloat clipw = length(clipMatDir.xy);\r\n\tfloat cliph = length(clipMatDir.zw);\r\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\r\n\tif(clipw>20000. && cliph>20000.)\r\n\t\tcliped = vec2(0.5,0.5);\r\n\telse {\r\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\r\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n\t}\r\n  //pos2d.x = dot(clippos,dirx);\r\n  color=attribColor/255.;\r\n}",
        Mt = "precision mediump float;\r\n//precision mediump float;\r\nvarying vec4 color;\r\n//uniform float alpha;\r\nvarying vec2 cliped;\r\nvoid main(){\r\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\r\n\t//a.a*=alpha;\r\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\r\n\tgl_FragColor.rgb*=color.a;\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n}",
        It = "attribute vec2 position;\r\nattribute vec2 texcoord;\r\nattribute vec4 color;\r\nuniform vec2 size;\r\nuniform float offsetX;\r\nuniform float offsetY;\r\nuniform mat4 mmat;\r\nuniform mat4 u_mmat2;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nvoid main() {\r\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\r\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\r\n  v_color = color;\r\n  v_color.rgb *= v_color.a;\r\n  v_texcoord = texcoord;  \r\n}",
        Pt = "precision mediump float;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nuniform sampler2D texture;\r\nuniform float alpha;\r\nvoid main() {\r\n\tvec4 t_color = texture2D(texture, v_texcoord);\r\n\tgl_FragColor = t_color.rgba * v_color;\r\n\tgl_FragColor *= alpha;\r\n}";
    var Lt = /* */ function() {
        function Lt() {
            _classCallCheck(this, Lt);
            this.ALPHA = 1, this.defines = new U(), this.shaderType = 0, this.fillStyle = at.DEFAULT,
                this.strokeStyle = at.DEFAULT;
        }
        _createClass(Lt, [{
            key: "destroy",
            value: function destroy() {
                this.defines = null, this.filters = null;
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                W.preCompile2D(0, U.TEXTURE2D, Rt, wt, null), W.preCompile2D(0, U.PRIMITIVE, St, Mt, null),
                    W.preCompile2D(0, U.SKINMESH, It, Pt, null);
            }
        }]);
        return Lt;
    }();
    var Dt = /* */ function() {
        function Dt() {
            _classCallCheck(this, Dt);
            var t = m.instance;
            this.ib = Tt.create(t.DYNAMIC_DRAW), this.vb = xt.create(8);
        }
        _createClass(Dt, [{
            key: "addSkinMesh",
            value: function addSkinMesh(t) {
                t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
            }
        }, {
            key: "reset",
            value: function reset() {
                this.vb.clear(), this.ib.clear();
            }
        }], [{
            key: "getInstance",
            value: function getInstance() {
                return Dt.instance = Dt.instance || new Dt();
            }
        }]);
        return Dt;
    }();
    var Bt = /* */ function() {
        function Bt() {
            _classCallCheck(this, Bt);
        }
        _createClass(Bt, null, [{
            key: "createLine2",
            value: function createLine2(t, e, i, s, r, a) {
                if (t.length < 4) return null;
                var n = Bt.tempData.length > t.length + 2 ? Bt.tempData : new Array(t.length + 2);
                n[0] = t[0], n[1] = t[1];
                var h = 2,
                    o = 0,
                    l = t.length;
                for (o = 2; o < l; o += 2) {
                    Math.abs(t[o] - t[o - 2]) + Math.abs(t[o + 1] - t[o - 1]) > .01 && (n[h++] = t[o],
                        n[h++] = t[o + 1]);
                }
                a && Math.abs(t[0] - n[h - 2]) + Math.abs(t[1] - n[h - 1]) > .01 && (n[h++] = t[0],
                    n[h++] = t[1]);
                var _ = r;
                l = h / 2;
                var c, u, d, p, f, g, m, v, T, x, y, E, C, b, A, R, w, S, M, I, P = i / 2;
                for (d = n[0], p = n[1], x = d - (f = n[2]), T = (T = -(p - (g = n[3]))) / (I = Math.sqrt(T * T + x * x)) * P,
                    x = x / I * P, _.push(d - T, p - x, d + T, p + x), o = 1; o < l - 1; o++) {
                    d = n[2 * (o - 1)], p = n[2 * (o - 1) + 1], f = n[2 * o], g = n[2 * o + 1], m = n[2 * (o + 1)],
                        v = n[2 * (o + 1) + 1], x = d - f, E = f - m, A = (-(T = (T = -(p - g)) / (I = Math.sqrt(T * T + x * x)) * P) + d) * (-(x = x / I * P) + g) - (-T + f) * (-x + p),
                        S = (-(y = (y = -(g - v)) / (I = Math.sqrt(y * y + E * E)) * P) + m) * (-(E = E / I * P) + g) - (-y + f) * (-E + v),
                        M = (C = -x + p - (-x + g)) * (w = -y + f - (-y + m)) - (R = -E + v - (-E + g)) * (b = -T + f - (-T + d)),
                        Math.abs(M) < .1 ? (M += 10.1, _.push(f - T, g - x, f + T, g + x)) : (c = (b * S - w * A) / M,
                            u = (R * A - C * S) / M, _.push(c, u, f - (c - f), g - (u - g)));
                }
                for (d = n[h - 4], p = n[h - 3], x = d - (f = n[h - 2]), T = (T = -(p - (g = n[h - 1]))) / (I = Math.sqrt(T * T + x * x)) * P,
                    x = x / I * P, _.push(f - T, g - x, f + T, g + x), o = 1; o < l; o++) {
                    e.push(s + 2 * (o - 1), s + 2 * (o - 1) + 1, s + 2 * o + 1, s + 2 * o + 1, s + 2 * o, s + 2 * (o - 1));
                }
                return _;
            }
        }, {
            key: "createLineTriangle",
            value: function createLineTriangle(t, e, i, s, r, a, n) {
                var h = t.slice(),
                    o = h.length,
                    l = h[0],
                    _ = h[1],
                    c = h[2],
                    u = (h[2], 0),
                    d = 0,
                    p = 0,
                    f = 0,
                    g = o / 2;
                if (!(g <= 1) && 2 != g) {
                    for (var m = new Array(4 * g), v = 0, T = 0, x = 0; x < g - 1; x++) {
                        l = h[T++], _ = h[T++], c = h[T++], f = h[T++] - _, 0 != (p = c - l) && 0 != f && (u = Math.sqrt(p * p + f * f)) > .001 && (m[d = 4 * v] = l,
                            m[d + 1] = _, m[d + 2] = p / u, m[d + 3] = f / u, v++);
                    }
                    for (s ? (l = h[o - 2], _ = h[o - 1], c = h[0], f = h[1] - _, 0 != (p = c - l) && 0 != f && (u = Math.sqrt(p * p + f * f)) > .001 && (m[d = 4 * v] = l,
                            m[d + 1] = _, m[d + 2] = p / u, m[d + 3] = f / u, v++)) : (m[d = 4 * v] = l, m[d + 1] = _,
                            m[d + 2] = p / u, m[d + 3] = f / u, v++), T = 0, x = 0; x < g; x++) {
                        l = h[T], _ = h[T + 1], c = h[T + 2], h[T + 3];
                    }
                }
            }
        }]);
        return Bt;
    }();
    Bt.tempData = new Array(256);
    var Ft = function Ft(t, e, i) {
        _classCallCheck(this, Ft);
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null,
            this.prevZ = null, this.nextZ = null, this.steiner = !1;
    };
    var Ot = /* */ function() {
        function Ot() {
            _classCallCheck(this, Ot);
        }
        _createClass(Ot, null, [{
            key: "earcut",
            value: function earcut(t, e, i) {
                i = i || 2;
                var s, r, a, n, h, o, l, _ = e && e.length,
                    c = _ ? e[0] * i : t.length,
                    u = Ot.linkedList(t, 0, c, i, !0),
                    d = [];
                if (!u) return d;
                if (_ && (u = Ot.eliminateHoles(t, e, u, i)), t.length > 80 * i) {
                    s = a = t[0], r = n = t[1];
                    for (var p = i; p < c; p += i) {
                        (h = t[p]) < s && (s = h), (o = t[p + 1]) < r && (r = o), h > a && (a = h), o > n && (n = o);
                    }
                    l = 0 !== (l = Math.max(a - s, n - r)) ? 1 / l : 0;
                }
                return Ot.earcutLinked(u, d, i, s, r, l), d;
            }
        }, {
            key: "linkedList",
            value: function linkedList(t, e, i, s, r) {
                var a, n;
                if (r === Ot.signedArea(t, e, i, s) > 0)
                    for (a = e; a < i; a += s) {
                        n = Ot.insertNode(a, t[a], t[a + 1], n);
                    } else
                        for (a = i - s; a >= e; a -= s) {
                            n = Ot.insertNode(a, t[a], t[a + 1], n);
                        }
                return n && Ot.equals(n, n.next) && (Ot.removeNode(n), n = n.next), n;
            }
        }, {
            key: "filterPoints",
            value: function filterPoints(t, e) {
                if (!t) return t;
                e || (e = t);
                var i, s = t;
                do {
                    if (i = !1, s.steiner || !Ot.equals(s, s.next) && 0 !== Ot.area(s.prev, s, s.next)) s = s.next;
                    else {
                        if (Ot.removeNode(s), (s = e = s.prev) === s.next) break;
                        i = !0;
                    }
                } while (i || s !== e);
                return e;
            }
        }, {
            key: "earcutLinked",
            value: function earcutLinked(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                if (t) {
                    !n && a && Ot.indexCurve(t, s, r, a);
                    for (var h, o, l = t; t.prev !== t.next;) {
                        if (h = t.prev, o = t.next, a ? Ot.isEarHashed(t, s, r, a) : Ot.isEar(t)) e.push(h.i / i),
                            e.push(t.i / i), e.push(o.i / i), Ot.removeNode(t), t = o.next, l = o.next;
                        else if ((t = o) === l) {
                            n ? 1 === n ? (t = Ot.cureLocalIntersections(t, e, i), Ot.earcutLinked(t, e, i, s, r, a, 2)) : 2 === n && Ot.splitEarcut(t, e, i, s, r, a) : Ot.earcutLinked(Ot.filterPoints(t, null), e, i, s, r, a, 1);
                            break;
                        }
                    }
                }
            }
        }, {
            key: "isEar",
            value: function isEar(t) {
                var e = t.prev,
                    i = t,
                    s = t.next;
                if (Ot.area(e, i, s) >= 0) return !1;
                for (var r = t.next.next; r !== t.prev;) {
                    if (Ot.pointInTriangle(e.x, e.y, i.x, i.y, s.x, s.y, r.x, r.y) && Ot.area(r.prev, r, r.next) >= 0) return !1;
                    r = r.next;
                }
                return !0;
            }
        }, {
            key: "isEarHashed",
            value: function isEarHashed(t, e, i, s) {
                var r = t.prev,
                    a = t,
                    n = t.next;
                if (Ot.area(r, a, n) >= 0) return !1;
                for (var h = r.x < a.x ? r.x < n.x ? r.x : n.x : a.x < n.x ? a.x : n.x, o = r.y < a.y ? r.y < n.y ? r.y : n.y : a.y < n.y ? a.y : n.y, l = r.x > a.x ? r.x > n.x ? r.x : n.x : a.x > n.x ? a.x : n.x, _ = r.y > a.y ? r.y > n.y ? r.y : n.y : a.y > n.y ? a.y : n.y, c = Ot.zOrder(h, o, e, i, s), u = Ot.zOrder(l, _, e, i, s), d = t.nextZ; d && d.z <= u;) {
                    if (d !== t.prev && d !== t.next && Ot.pointInTriangle(r.x, r.y, a.x, a.y, n.x, n.y, d.x, d.y) && Ot.area(d.prev, d, d.next) >= 0) return !1;
                    d = d.nextZ;
                }
                for (d = t.prevZ; d && d.z >= c;) {
                    if (d !== t.prev && d !== t.next && Ot.pointInTriangle(r.x, r.y, a.x, a.y, n.x, n.y, d.x, d.y) && Ot.area(d.prev, d, d.next) >= 0) return !1;
                    d = d.prevZ;
                }
                return !0;
            }
        }, {
            key: "cureLocalIntersections",
            value: function cureLocalIntersections(t, e, i) {
                var s = t;
                do {
                    var r = s.prev,
                        a = s.next.next;
                    !Ot.equals(r, a) && Ot.intersects(r, s, s.next, a) && Ot.locallyInside(r, a) && Ot.locallyInside(a, r) && (e.push(r.i / i),
                            e.push(s.i / i), e.push(a.i / i), Ot.removeNode(s), Ot.removeNode(s.next), s = t = a),
                        s = s.next;
                } while (s !== t);
                return s;
            }
        }, {
            key: "splitEarcut",
            value: function splitEarcut(t, e, i, s, r, a) {
                var n = t;
                do {
                    for (var h = n.next.next; h !== n.prev;) {
                        if (n.i !== h.i && Ot.isValidDiagonal(n, h)) {
                            var o = Ot.splitPolygon(n, h);
                            return n = Ot.filterPoints(n, n.next), o = Ot.filterPoints(o, o.next), Ot.earcutLinked(n, e, i, s, r, a),
                                void Ot.earcutLinked(o, e, i, s, r, a);
                        }
                        h = h.next;
                    }
                    n = n.next;
                } while (n !== t);
            }
        }, {
            key: "eliminateHoles",
            value: function eliminateHoles(t, e, i, s) {
                var r, a, n, h, o, l = [];
                for (r = 0, a = e.length; r < a; r++) {
                    n = e[r] * s, h = r < a - 1 ? e[r + 1] * s : t.length, (o = Ot.linkedList(t, n, h, s, !1)) === o.next && (o.steiner = !0),
                        l.push(Ot.getLeftmost(o));
                }
                for (l.sort(Ot.compareX), r = 0; r < l.length; r++) {
                    Ot.eliminateHole(l[r], i), i = Ot.filterPoints(i, i.next);
                }
                return i;
            }
        }, {
            key: "compareX",
            value: function compareX(t, e) {
                return t.x - e.x;
            }
        }, {
            key: "eliminateHole",
            value: function eliminateHole(t, e) {
                if (e = Ot.findHoleBridge(t, e)) {
                    var i = Ot.splitPolygon(e, t);
                    Ot.filterPoints(i, i.next);
                }
            }
        }, {
            key: "findHoleBridge",
            value: function findHoleBridge(t, e) {
                var i, s = e,
                    r = t.x,
                    a = t.y,
                    n = -1 / 0;
                do {
                    if (a <= s.y && a >= s.next.y && s.next.y !== s.y) {
                        var h = s.x + (a - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
                        if (h <= r && h > n) {
                            if (n = h, h === r) {
                                if (a === s.y) return s;
                                if (a === s.next.y) return s.next;
                            }
                            i = s.x < s.next.x ? s : s.next;
                        }
                    }
                    s = s.next;
                } while (s !== e);
                if (!i) return null;
                if (r === n) return i.prev;
                var o, l = i,
                    _ = i.x,
                    c = i.y,
                    u = 1 / 0;
                for (s = i.next; s !== l;) {
                    r >= s.x && s.x >= _ && r !== s.x && Ot.pointInTriangle(a < c ? r : n, a, _, c, a < c ? n : r, a, s.x, s.y) && ((o = Math.abs(a - s.y) / (r - s.x)) < u || o === u && s.x > i.x) && Ot.locallyInside(s, t) && (i = s,
                        u = o), s = s.next;
                }
                return i;
            }
        }, {
            key: "indexCurve",
            value: function indexCurve(t, e, i, s) {
                var r = t;
                do {
                    null === r.z && (r.z = Ot.zOrder(r.x, r.y, e, i, s)), r.prevZ = r.prev, r.nextZ = r.next,
                        r = r.next;
                } while (r !== t);
                r.prevZ.nextZ = null, r.prevZ = null, Ot.sortLinked(r);
            }
        }, {
            key: "sortLinked",
            value: function sortLinked(t) {
                var e, i, s, r, a, n, h, o, l = 1;
                do {
                    for (i = t, t = null, a = null, n = 0; i;) {
                        for (n++, s = i, h = 0, e = 0; e < l && (h++, s = s.nextZ); e++) {}
                        for (o = l; h > 0 || o > 0 && s;) {
                            0 !== h && (0 === o || !s || i.z <= s.z) ? (r = i, i = i.nextZ, h--) : (r = s, s = s.nextZ,
                                o--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                        }
                        i = s;
                    }
                    a.nextZ = null, l *= 2;
                } while (n > 1);
                return t;
            }
        }, {
            key: "zOrder",
            value: function zOrder(t, e, i, s, r) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - s) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
            }
        }, {
            key: "getLeftmost",
            value: function getLeftmost(t) {
                var e = t,
                    i = t;
                do {
                    e.x < i.x && (i = e), e = e.next;
                } while (e !== t);
                return i;
            }
        }, {
            key: "pointInTriangle",
            value: function pointInTriangle(t, e, i, s, r, a, n, h) {
                return (r - n) * (e - h) - (t - n) * (a - h) >= 0 && (t - n) * (s - h) - (i - n) * (e - h) >= 0 && (i - n) * (a - h) - (r - n) * (s - h) >= 0;
            }
        }, {
            key: "isValidDiagonal",
            value: function isValidDiagonal(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && !Ot.intersectsPolygon(t, e) && Ot.locallyInside(t, e) && Ot.locallyInside(e, t) && Ot.middleInside(t, e);
            }
        }, {
            key: "area",
            value: function area(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
            }
        }, {
            key: "equals",
            value: function equals(t, e) {
                return t.x === e.x && t.y === e.y;
            }
        }, {
            key: "intersects",
            value: function intersects(t, e, i, s) {
                return !!(Ot.equals(t, e) && Ot.equals(i, s) || Ot.equals(t, s) && Ot.equals(i, e)) || Ot.area(t, e, i) > 0 != Ot.area(t, e, s) > 0 && Ot.area(i, s, t) > 0 != Ot.area(i, s, e) > 0;
            }
        }, {
            key: "intersectsPolygon",
            value: function intersectsPolygon(t, e) {
                var i = t;
                do {
                    if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Ot.intersects(i, i.next, t, e)) return !0;
                    i = i.next;
                } while (i !== t);
                return !1;
            }
        }, {
            key: "locallyInside",
            value: function locallyInside(t, e) {
                return Ot.area(t.prev, t, t.next) < 0 ? Ot.area(t, e, t.next) >= 0 && Ot.area(t, t.prev, e) >= 0 : Ot.area(t, e, t.prev) < 0 || Ot.area(t, t.next, e) < 0;
            }
        }, {
            key: "middleInside",
            value: function middleInside(t, e) {
                var i = t,
                    s = !1,
                    r = (t.x + e.x) / 2,
                    a = (t.y + e.y) / 2;
                do {
                    i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (s = !s),
                        i = i.next;
                } while (i !== t);
                return s;
            }
        }, {
            key: "splitPolygon",
            value: function splitPolygon(t, e) {
                var i = new Ft(t.i, t.x, t.y),
                    s = new Ft(e.i, e.x, e.y),
                    r = t.next,
                    a = e.prev;
                return t.next = e, e.prev = t, i.next = r, r.prev = i, s.next = i, i.prev = s, a.next = s,
                    s.prev = a, s;
            }
        }, {
            key: "insertNode",
            value: function insertNode(t, e, i, s) {
                var r = new Ft(t, e, i);
                return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r,
                    r.next = r), r;
            }
        }, {
            key: "removeNode",
            value: function removeNode(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ),
                    t.nextZ && (t.nextZ.prevZ = t.prevZ);
            }
        }, {
            key: "signedArea",
            value: function signedArea(t, e, i, s) {
                for (var r = 0, a = e, n = i - s; a < i; a += s) {
                    r += (t[n] - t[a]) * (t[a + 1] + t[n + 1]), n = a;
                }
                return r;
            }
        }]);
        return Ot;
    }();
    var Nt = function Nt() {
        _classCallCheck(this, Nt);
    };
    Nt.BYTES_PE = 4, Nt.BYTES_PIDX = 2, Nt.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        Nt.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Nt.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        Nt._TMPARRAY = [], Nt._OFFSETX = 0, Nt._OFFSETY = 0;
    var Ut = /* */ function(_ot) {
        _inherits(Ut, _ot);

        function Ut() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ot.TYPE_2D;
            _classCallCheck(this, Ut);
            return _possibleConstructorReturn(this, _getPrototypeOf(Ut).call(this, t));
        }
        _createClass(Ut, [{
            key: "renderSubmit",
            value: function renderSubmit() {
                if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t._getSource();
                    if (!e) return 1;
                    this.shaderValue.texture = e;
                }
                var i = v.mainContext;
                return this._mesh.useMesh(i), this.shaderValue.upload(), O.activeBlendFunction !== this._blendFn && (v.setBlend(i, !0),
                        this._blendFn(i), O.activeBlendFunction = this._blendFn), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx),
                    G.renderBatches++, G.trianglesFaces += this._numEle / 3, 1;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                ot.RENDERBASE != this && --this._ref < 1 && (Ut.POOL[Ut._poolSize++] = this, this.shaderValue.release(),
                    this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(),
                        this._parent = null));
            }
        }], [{
            key: "create",
            value: function create(t, e, i) {
                var s = Ut._poolSize ? Ut.POOL[--Ut._poolSize] : new Ut();
                s._ref = 1, s._mesh = e, s._key.clear(), s._startIdx = e.indexNum * Nt.BYTES_PIDX,
                    s._numEle = 0;
                var r = t._nBlendType;
                s._blendFn = t._targets ? O.targetFns[r] : O.fns[r], s.shaderValue = i, s.shaderValue.setValue(t._shader2D);
                var a = t._shader2D.filters;
                return a && s.shaderValue.setFilters(a), s;
            }
        }, {
            key: "createShape",
            value: function createShape(t, e, i, s) {
                var r = Ut._poolSize ? Ut.POOL[--Ut._poolSize] : new Ut();
                r._mesh = e, r._numEle = i, r._startIdx = 2 * e.indexNum, r._ref = 1, r.shaderValue = s,
                    r.shaderValue.setValue(t._shader2D);
                var a = t._nBlendType;
                return r._key.blendShader = a, r._blendFn = t._targets ? O.targetFns[a] : O.fns[a],
                    r;
            }
        }]);
        return Ut;
    }(ot);
    Ut._poolSize = 0, Ut.POOL = [];
    var Gt = /* */ function(_ot2) {
        _inherits(Gt, _ot2);

        function Gt() {
            var _this15;
            _classCallCheck(this, Gt);
            _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Gt).call(this, ot.TYPE_2D)),
                _this15._matrix = new p(), _this15._matrix4 = Nt.defaultMatrix4.concat(), _this15.shaderValue = new V(0, 0);
            return _this15;
        }
        _createClass(Gt, [{
            key: "renderSubmit",
            value: function renderSubmit() {
                var t = D.worldAlpha,
                    e = D.worldMatrix4,
                    i = D.worldMatrix,
                    s = D.worldFilters,
                    r = D.worldShaderDefines,
                    a = this.shaderValue,
                    n = this._matrix,
                    h = this._matrix4,
                    o = p.TEMP;
                return p.mul(n, i, o), h[0] = o.a, h[1] = o.b, h[4] = o.c, h[5] = o.d, h[12] = o.tx,
                    h[13] = o.ty, D.worldMatrix = o.clone(), D.worldMatrix4 = h, D.worldAlpha = D.worldAlpha * a.alpha,
                    a.filters && a.filters.length && (D.worldFilters = a.filters, D.worldShaderDefines = a.defines),
                    this.canv.flushsubmit(), D.worldAlpha = t, D.worldMatrix4 = e, D.worldMatrix.destroy(),
                    D.worldMatrix = i, D.worldFilters = s, D.worldShaderDefines = r, 1;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                if (--this._ref < 1) {
                    var t = Gt.POOL;
                    this._mesh = null, t[t._length++] = this;
                }
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return ot.TYPE_CANVAS;
            }
        }], [{
            key: "create",
            value: function create(t, e, i) {
                var s = Gt.POOL._length ? Gt.POOL[--Gt.POOL._length] : new Gt();
                s.canv = t, s._ref = 1, s._numEle = 0;
                var r = s.shaderValue;
                return r.alpha = e, r.defines.setValue(0), i && i.length && r.setFilters(i), s;
            }
        }]);
        return Gt;
    }(ot);
    Gt.POOL = [], Gt.POOL._length = 0;
    var kt = /* */ function() {
        function kt() {
            _classCallCheck(this, kt);
            this.blendType = 0, this._ref = 1, this._key = new X();
        }
        _createClass(kt, [{
            key: "renderSubmit",
            value: function renderSubmit() {
                var t = v.mainContext;
                this._mesh.useMesh(t);
                var e = this.srcRT;
                return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(),
                        this.blend(), G.renderBatches++, G.trianglesFaces += this._numEle / 3, t.drawElements(t.TRIANGLES, this._numEle, t.UNSIGNED_SHORT, this._startIdx)),
                    1;
            }
        }, {
            key: "blend",
            value: function blend() {
                if (O.activeBlendFunction !== O.fns[this.blendType]) {
                    var t = v.mainContext;
                    t.enable(t.BLEND), O.fns[this.blendType](t), O.activeBlendFunction = O.fns[this.blendType];
                }
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return 0;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                if (--this._ref < 1) {
                    var t = kt.POOL;
                    t[t._length++] = this;
                }
            }
        }], [{
            key: "create",
            value: function create(t, e, i, s) {
                var r = kt.POOL._length ? kt.POOL[--kt.POOL._length] : new kt();
                if (r._mesh = e, r.srcRT = s, r._startIdx = e.indexNum * Nt.BYTES_PIDX, r._ref = 1,
                    r._key.clear(), r._numEle = 0, r.blendType = t._nBlendType, r._key.blendShader = r.blendType,
                    r.shaderValue = i, r.shaderValue.setValue(t._shader2D), t._colorFiler) {
                    var a = t._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
                }
                return r;
            }
        }]);
        return kt;
    }();
    kt.POOL = [], kt.POOL._length = 0;
    var Wt = /* */ function(_ot3) {
        _inherits(Wt, _ot3);

        function Wt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ot.TYPE_2D;
            _classCallCheck(this, Wt);
            return _possibleConstructorReturn(this, _getPrototypeOf(Wt).call(this, t));
        }
        _createClass(Wt, [{
            key: "releaseRender",
            value: function releaseRender() {
                --this._ref < 1 && (Wt.POOL[Wt._poolSize++] = this, this.shaderValue.release(),
                    this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null));
            }
        }, {
            key: "renderSubmit",
            value: function renderSubmit() {
                if (0 === this._numEle) return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t ? t._getSource() : null;
                    if (!e) return 1;
                }
                var i = v.mainContext;
                this._mesh.useMesh(i);
                var s = ot.preRender,
                    r = ot.preRender._key;
                return 0 === this._key.blendShader && this._key.submitType === r.submitType && this._key.blendShader === r.blendShader && L.activeShader && ot.preRender.clipInfoID == this.clipInfoID && s.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & U.NOOPTMASK) ? L.activeShader.uploadTexture2D(e) : (O.activeBlendFunction !== this._blendFn && (v.setBlend(i, !0),
                            this._blendFn(i), O.activeBlendFunction = this._blendFn), this.shaderValue.texture = e,
                        this.shaderValue.upload()), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx),
                    G.renderBatches++, G.trianglesFaces += this._numEle / 3, 1;
            }
        }], [{
            key: "create",
            value: function create(t, e, i) {
                var s = Wt._poolSize ? Wt.POOL[--Wt._poolSize] : new Wt(ot.TYPE_TEXTURE);
                s._mesh = e, s._key.clear(), s._key.submitType = ot.KEY_DRAWTEXTURE, s._ref = 1,
                    s._startIdx = e.indexNum * Nt.BYTES_PIDX, s._numEle = 0;
                var r = t._nBlendType;
                if (s._key.blendShader = r, s._blendFn = t._targets ? O.targetFns[r] : O.fns[r],
                    s.shaderValue = i, t._colorFiler) {
                    var a = t._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
                }
                return s;
            }
        }]);
        return Wt;
    }(ot);
    Wt._poolSize = 0, Wt.POOL = [];
    var Yt = /* */ function() {
        function Yt() {
            _classCallCheck(this, Yt);
            this._data = [], this._ndata = 0, this._clipid = -1, this._clipMatrix = new p(),
                this._enable = !1;
        }
        _createClass(Yt, [{
            key: "clear",
            value: function clear() {
                this._tex = null, this._imgId = -1, this._ndata = 0, this._enable = !1, this._colorFiler = null;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.clear(), this._data.length = 0, this._data = null;
            }
        }, {
            key: "add",
            value: function add(t, e, i, s, r, a) {
                this._ndata > 0 && (this._tex != e || this._imgId != i || this._clipid >= 0 && this._clipid != t._clipInfoID) && this.submit(t),
                    this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e,
                    this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = s,
                    this._data[this._ndata + 1] = r, this._data[this._ndata + 2] = a, this._ndata += 3;
            }
        }, {
            key: "getPos",
            value: function getPos() {
                return 0 == Yt.__nPosPool ? new Array(8) : Yt.__posPool[--Yt.__nPosPool];
            }
        }, {
            key: "enable",
            value: function enable(t, e) {
                t !== this._enable && (this._enable = t, this._enable || this.submit(e));
            }
        }, {
            key: "submit",
            value: function submit(t) {
                var e = this._ndata;
                if (e) {
                    var i = t._mesh,
                        s = t._colorFiler;
                    t._colorFiler = this._colorFiler;
                    var r = Wt.create(t, i, V.create(U.TEXTURE2D, 0));
                    t._submits[t._submits._length++] = t._curSubmit = r, r.shaderValue.textureHost = this._tex,
                        r._key.other = this._imgId, t._colorFiler = s, t._copyClipInfo(r, this._clipMatrix),
                        r.clipInfoID = this._clipid;
                    for (var a = 0; a < e; a += 3) {
                        i.addQuad(this._data[a], this._data[a + 1], this._data[a + 2], !0), Yt.__posPool[Yt.__nPosPool++] = this._data[a];
                    }
                    e /= 3, r._numEle += 6 * e, i.indexNum += 6 * e, i.vertNum += 4 * e, t._drawCount += e,
                        this._ndata = 0, mt.loopCount % 100 == 0 && (this._data.length = 0);
                }
            }
        }]);
        return Yt;
    }();
    Yt.__posPool = [], Yt.__nPosPool = 0;
    var Vt = /* */ function() {
        function Vt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            _classCallCheck(this, Vt);
            this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null,
                this._cells = null, this._used = 0, this._cells = null, this._rowInfo = null, this.atlasID = i,
                this._init(t, e);
        }
        _createClass(Vt, [{
            key: "addRect",
            value: function addRect(t, e, i, s) {
                return !!this._get(e, i, s) && (this._fill(s.x, s.y, e, i, t), this._texCount++, !0);
            }
        }, {
            key: "_release",
            value: function _release() {
                this._cells = null, this._rowInfo = null;
            }
        }, {
            key: "_init",
            value: function _init(t, e) {
                return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3),
                    this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
            }
        }, {
            key: "_get",
            value: function _get(t, e, i) {
                if (t > this._width || e > this._height) return !1;
                for (var s = -1, r = -1, a = this._width, n = this._height, h = this._cells, o = 0; o < n; o++) {
                    if (!(this._rowInfo[o] < t))
                        for (var l = 0; l < a;) {
                            var _ = 3 * (o * a + l);
                            if (0 != h[_] || h[_ + 1] < t || h[_ + 2] < e) l += h[_ + 1];
                            else {
                                s = l, r = o;
                                for (var c = 0; c < t; c++) {
                                    if (h[3 * c + _ + 2] < e) {
                                        s = -1;
                                        break;
                                    }
                                }
                                if (!(s < 0)) return i.x = s, i.y = r, !0;
                                l += h[_ + 1];
                            }
                        }
                }
                return !1;
            }
        }, {
            key: "_fill",
            value: function _fill(t, e, i, s, r) {
                var a = this._width,
                    n = this._height;
                this._check(t + i <= a && e + s <= n);
                for (var h = e; h < s + e; ++h) {
                    this._check(this._rowInfo[h] >= i), this._rowInfo[h] -= i;
                    for (var o = 0; o < i; o++) {
                        var l = 3 * (t + h * a + o);
                        this._check(0 == this._cells[l]), this._cells[l] = r, this._cells[l + 1] = i, this._cells[l + 2] = s;
                    }
                }
                if (t > 0)
                    for (h = 0; h < s; ++h) {
                        var _ = 0;
                        for (o = t - 1; o >= 0 && 0 == this._cells[3 * ((e + h) * a + o)]; --o, ++_) {}
                        for (o = _; o > 0; --o) {
                            this._cells[3 * ((e + h) * a + t - o) + 1] = o, this._check(o > 0);
                        }
                    }
                if (e > 0)
                    for (o = t; o < t + i; ++o) {
                        for (_ = 0, h = e - 1; h >= 0 && 0 == this._cells[3 * (o + h * a)]; --h, _++) {}
                        for (h = _; h > 0; --h) {
                            this._cells[3 * (o + (e - h) * a) + 2] = h, this._check(h > 0);
                        }
                    }
                this._used += i * s / (this._width * this._height);
            }
        }, {
            key: "_check",
            value: function _check(t) {
                0 == t && console.log("xtexMerger 错误啦");
            }
        }, {
            key: "_clear",
            value: function _clear() {
                this._texCount = 0;
                for (var t = 0; t < this._height; t++) {
                    this._rowInfo[t] = this._width;
                }
                for (var e = 0; e < this._height; e++) {
                    for (var i = 0; i < this._width; i++) {
                        var s = 3 * (e * this._width + i);
                        this._cells[s] = 0, this._cells[s + 1] = this._width - i, this._cells[s + 2] = this._width - e;
                    }
                }
            }
        }]);
        return Vt;
    }();
    var Xt = /* */ function(_C3) {
        _inherits(Xt, _C3);

        function Xt(t, e) {
            var _this16;
            _classCallCheck(this, Xt);
            _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Xt).call(this)), _this16._texW = 0,
                _this16._texH = 0, _this16.__destroyed = !1, _this16._discardTm = 0, _this16.genID = 0,
                _this16.bitmap = {
                    id: 0,
                    _glTexture: null
                }, _this16.curUsedCovRate = 0, _this16.curUsedCovRateAtlas = 0, _this16.lastTouchTm = 0,
                _this16.ri = null, _this16._texW = t || Xt.gTextRender.atlasWidth, _this16._texH = e || Xt.gTextRender.atlasWidth,
                _this16.bitmap.id = _this16.id, _this16.lock = !0;
            return _this16;
        }
        _createClass(Xt, [{
            key: "recreateResource",
            value: function recreateResource() {
                if (!this._source) {
                    var t = m.instance,
                        e = this._source = t.createTexture();
                    this.bitmap._glTexture = e, v.bindTexture(t, t.TEXTURE_2D, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this._texW, this._texH, 0, t.RGBA, t.UNSIGNED_BYTE, null),
                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                        Xt.gTextRender.debugUV && this.fillWhite();
                }
            }
        }, {
            key: "addChar",
            value: function addChar(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                if (Xt.gTextRender.isWan1Wan) return this.addCharCanvas(t, e, s, r);
                !this._source && this.recreateResource();
                var a = m.instance;
                v.bindTexture(a, a.TEXTURE_2D, this._source), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                var n, h, o, l, _ = t.data;
                return t.data instanceof Uint8ClampedArray && (_ = new Uint8Array(_.buffer)), a.texSubImage2D(a.TEXTURE_2D, 0, e, s, t.width, t.height, a.RGBA, a.UNSIGNED_BYTE, _), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), n = e / this._texW,
                    h = s / this._texH, o = (e + t.width) / this._texW, l = (s + t.height) / this._texH,
                    (r = r || new Array(8))[0] = n, r[1] = h, r[2] = o, r[3] = h, r[4] = o, r[5] = l,
                    r[6] = n, r[7] = l, r;
            }
        }, {
            key: "addCharCanvas",
            value: function addCharCanvas(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                !this._source && this.recreateResource();
                var a, n, h, o, l = m.instance;
                return v.bindTexture(l, l.TEXTURE_2D, this._source), !i.Render.isConchApp && l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                    l.texSubImage2D(l.TEXTURE_2D, 0, e, s, l.RGBA, l.UNSIGNED_BYTE, t), !i.Render.isConchApp && l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
                    i.Render.isConchApp ? (a = e / this._texW, n = s / this._texH, h = (e + t.width) / this._texW,
                        o = (s + t.height) / this._texH) : (a = (e + 1) / this._texW, n = (s + 1) / this._texH,
                        h = (e + t.width - 1) / this._texW, o = (s + t.height - 1) / this._texH), (r = r || new Array(8))[0] = a,
                    r[1] = n, r[2] = h, r[3] = n, r[4] = h, r[5] = o, r[6] = a, r[7] = o, r;
            }
        }, {
            key: "fillWhite",
            value: function fillWhite() {
                !this._source && this.recreateResource();
                var t = m.instance,
                    e = new Uint8Array(this._texW * this._texH * 4);
                e.fill(255), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this._texW, this._texH, t.RGBA, t.UNSIGNED_BYTE, e);
            }
        }, {
            key: "discard",
            value: function discard() {
                i.stage.setGlobalRepaint(), this.destroy();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.__destroyed = !0;
                var t = m.instance;
                this._source && t.deleteTexture(this._source), this._source = null;
            }
        }, {
            key: "touchRect",
            value: function touchRect(t, e) {
                this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0,
                    this.lastTouchTm = e);
                var s = Xt.gTextRender.atlasWidth * Xt.gTextRender.atlasWidth,
                    r = i.TextAtlas.atlasGridW * i.TextAtlas.atlasGridW;
                this.curUsedCovRate += t.bmpWidth * t.bmpHeight / s, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / i.TextAtlas.atlasGridW) * Math.ceil(t.bmpHeight / i.TextAtlas.atlasGridW) / (s / r);
            }
        }, {
            key: "_getSource",
            value: function _getSource() {
                return this._source;
            }
        }, {
            key: "drawOnScreen",
            value: function drawOnScreen(t, e) {}
        }, {
            key: "texture",
            get: function get() {
                return this;
            }
        }], [{
            key: "getTextTexture",
            value: function getTextTexture(t, e) {
                return new Xt(t, e);
            }
        }, {
            key: "clean",
            value: function clean() {
                var t = mt.loopStTm;
                if (0 === Xt.cleanTm && (Xt.cleanTm = t), t - Xt.cleanTm >= Xt.gTextRender.checkCleanTextureDt) {
                    for (var e = 0; e < Xt.poolLen; e++) {
                        var i = Xt.pool[e];
                        t - i._discardTm >= Xt.gTextRender.destroyUnusedTextureDt && (i.destroy(), Xt.pool[e] = Xt.pool[Xt.poolLen - 1],
                            Xt.poolLen--, e--);
                    }
                    Xt.cleanTm = t;
                }
            }
        }]);
        return Xt;
    }(C);
    Xt.gTextRender = null, Xt.pool = new Array(10), Xt.poolLen = 0, Xt.cleanTm = 0;
    var Ht = /* */ function() {
        function Ht() {
            _classCallCheck(this, Ht);
            this.texWidth = 1024, this.texHeight = 1024, this.texture = null, this.charMaps = {},
                this.texHeight = this.texWidth = i.TextRender.atlasWidth, this.texture = Xt.getTextTexture(this.texWidth, this.texHeight),
                this.texWidth / Ht.atlasGridW > 256 && (Ht.atlasGridW = Math.ceil(this.texWidth / 256)),
                this.atlasgrid = new Vt(this.texWidth / Ht.atlasGridW, this.texHeight / Ht.atlasGridW, this.texture.id);
        }
        _createClass(Ht, [{
            key: "setProtecteDist",
            value: function setProtecteDist(t) {}
        }, {
            key: "getAEmpty",
            value: function getAEmpty(t, e, i) {
                var s = this.atlasgrid.addRect(1, Math.ceil(t / Ht.atlasGridW), Math.ceil(e / Ht.atlasGridW), i);
                return s && (i.x *= Ht.atlasGridW, i.y *= Ht.atlasGridW), s;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                for (var t in this.charMaps) {
                    this.charMaps[t].deleted = !0;
                }
                this.texture.discard();
            }
        }, {
            key: "printDebugInfo",
            value: function printDebugInfo() {}
        }, {
            key: "usedRate",
            get: function get() {
                return this.atlasgrid._used;
            }
        }]);
        return Ht;
    }();
    Ht.atlasGridW = 16;
    var zt = /* */ function() {
        function zt() {
            _classCallCheck(this, zt);
        }
        _createClass(zt, [{
            key: "setTo",
            value: function setTo(t, e, i) {
                return this.type = t, this.currentTarget = e, this.target = i, this;
            }
        }, {
            key: "stopPropagation",
            value: function stopPropagation() {
                this._stoped = !0;
            }
        }, {
            key: "touches",
            get: function get() {
                if (!this.nativeEvent) return null;
                var t = this.nativeEvent.touches;
                if (t)
                    for (var e = i.stage, s = 0, r = t.length; s < r; s++) {
                        var a = t[s],
                            n = f.TEMP;
                        n.setTo(a.clientX, a.clientY), e._canvasTransform.invertTransformPoint(n), e.transform.invertTransformPoint(n),
                            a.stageX = n.x, a.stageY = n.y;
                    }
                return t;
            }
        }, {
            key: "altKey",
            get: function get() {
                return this.nativeEvent.altKey;
            }
        }, {
            key: "ctrlKey",
            get: function get() {
                return this.nativeEvent.ctrlKey;
            }
        }, {
            key: "shiftKey",
            get: function get() {
                return this.nativeEvent.shiftKey;
            }
        }, {
            key: "charCode",
            get: function get() {
                return this.nativeEvent.charCode;
            }
        }, {
            key: "keyLocation",
            get: function get() {
                return this.nativeEvent.location || this.nativeEvent.keyLocation;
            }
        }, {
            key: "stageX",
            get: function get() {
                return i.stage.mouseX;
            }
        }, {
            key: "stageY",
            get: function get() {
                return i.stage.mouseY;
            }
        }]);
        return zt;
    }();
    zt.EMPTY = new zt(), zt.MOUSE_DOWN = "mousedown", zt.MOUSE_UP = "mouseup", zt.CLICK = "click",
        zt.RIGHT_MOUSE_DOWN = "rightmousedown", zt.RIGHT_MOUSE_UP = "rightmouseup", zt.RIGHT_CLICK = "rightclick",
        zt.MOUSE_MOVE = "mousemove", zt.MOUSE_OVER = "mouseover", zt.MOUSE_OUT = "mouseout",
        zt.MOUSE_WHEEL = "mousewheel", zt.ROLL_OVER = "mouseover", zt.ROLL_OUT = "mouseout",
        zt.DOUBLE_CLICK = "doubleclick", zt.CHANGE = "change", zt.CHANGED = "changed", zt.RESIZE = "resize",
        zt.ADDED = "added", zt.REMOVED = "removed", zt.DISPLAY = "display", zt.UNDISPLAY = "undisplay",
        zt.ERROR = "error", zt.COMPLETE = "complete", zt.LOADED = "loaded", zt.READY = "ready",
        zt.PROGRESS = "progress", zt.INPUT = "input", zt.RENDER = "render", zt.OPEN = "open",
        zt.MESSAGE = "message", zt.CLOSE = "close", zt.KEY_DOWN = "keydown", zt.KEY_PRESS = "keypress",
        zt.KEY_UP = "keyup", zt.FRAME = "enterframe", zt.DRAG_START = "dragstart", zt.DRAG_MOVE = "dragmove",
        zt.DRAG_END = "dragend", zt.ENTER = "enter", zt.SELECT = "select", zt.BLUR = "blur",
        zt.FOCUS = "focus", zt.VISIBILITY_CHANGE = "visibilitychange", zt.FOCUS_CHANGE = "focuschange",
        zt.PLAYED = "played", zt.PAUSED = "paused", zt.STOPPED = "stopped", zt.START = "start",
        zt.END = "end", zt.COMPONENT_ADDED = "componentadded", zt.COMPONENT_REMOVED = "componentremoved",
        zt.RELEASED = "released", zt.LINK = "link", zt.LABEL = "label", zt.FULL_SCREEN_CHANGE = "fullscreenchange",
        zt.DEVICE_LOST = "devicelost", zt.TRANSFORM_CHANGED = "transformchanged", zt.ANIMATION_CHANGED = "animationchanged",
        zt.TRAIL_FILTER_CHANGE = "trailfilterchange", zt.TRIGGER_ENTER = "triggerenter",
        zt.TRIGGER_STAY = "triggerstay", zt.TRIGGER_EXIT = "triggerexit";
    var Kt = /* */ function(_x3) {
        _inherits(Kt, _x3);

        function Kt() {
            var _this17;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            _classCallCheck(this, Kt);
            _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Kt).call(this)), _this17.uvrect = [0, 0, 1, 1],
                _this17._destroyed = !1, _this17._referenceCount = 0, _this17.$_GID = 0, _this17.offsetX = 0,
                _this17.offsetY = 0, _this17._w = 0, _this17._h = 0, _this17.sourceWidth = 0, _this17.sourceHeight = 0,
                _this17.url = null, _this17.scaleRate = 1, _this17.setTo(t, e, i, s);
            return _this17;
        }
        _createClass(Kt, [{
            key: "_addReference",
            value: function _addReference() {
                this._bitmap && this._bitmap._addReference(), this._referenceCount++;
            }
        }, {
            key: "_removeReference",
            value: function _removeReference() {
                this._bitmap && this._bitmap._removeReference(), this._referenceCount--;
            }
        }, {
            key: "_getSource",
            value: function _getSource() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(t), this._bitmap.destroyed ? null : this.bitmap._getSource());
            }
        }, {
            key: "_onLoaded",
            value: function _onLoaded(t, e) {
                if (e) {
                    if (e == this);
                    else if (e instanceof Kt) {
                        var i = e;
                        Kt._create(e, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this);
                    } else this.bitmap = e, this.sourceWidth = this._w = e.width, this.sourceHeight = this._h = e.height;
                } else;
                t && t.run(), this.event(zt.READY, this);
            }
        }, {
            key: "getIsReady",
            value: function getIsReady() {
                return !this._destroyed && !!this._bitmap;
            }
        }, {
            key: "setTo",
            value: function setTo() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                this.bitmap = t, this.sourceWidth = i, this.sourceHeight = s, t && (this._w = t.width,
                        this._h = t.height, this.sourceWidth = this.sourceWidth || t.width, this.sourceHeight = this.sourceHeight || t.height),
                    this.uv = e || Kt.DEF_UV;
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._destroyed || i.loader.load(t, T.create(this, this._onLoaded, [e]), null, "htmlimage", 1, !0);
            }
        }, {
            key: "getTexturePixels",
            value: function getTexturePixels(t, e, s, r) {
                var a, n, h, o = this.bitmap,
                    l = this._w,
                    _ = this._h,
                    c = this.sourceWidth,
                    u = this.sourceHeight,
                    d = o.width,
                    p = o.height,
                    f = this.offsetX,
                    g = this.offsetY;
                var m = s,
                    v = s;
                if (t + s > l + f && (m -= t + s - l - f), t + s > c && (s -= t + s - c), e + r > _ + g && (v -= e + r - _ - g),
                    e + r > u && (r -= e + r - u), s <= 0 || r <= 0) return null;
                var T = f > t ? f - t : 0,
                    x = g > e ? g - e : 0,
                    y = t > f ? t - f : 0,
                    E = e > g ? e - g : 0;
                m -= T, v -= x;
                var C = 4 * s,
                    b = null;
                try {
                    b = o.getPixels();
                } catch (t) {}
                if (b) {
                    if (0 == t && 0 == e && s == d && r == p) return b;
                    var _i2 = this._uv.slice(),
                        _o = Math.round(_i2[0] * d),
                        _l = Math.round(_i2[1] * p);
                    var A = new Uint8Array(s * r * 4);
                    for (a = 4 * _o + 4 * y + (n = (_l + E) * (C = 4 * d)), h = 0; h < v; h++) {
                        A.set(b.slice(a, a + 4 * m), 4 * s * (h + x) + 4 * T), a += C;
                    }
                    return A;
                }
                var R = new i.Context();
                R.size(s, r), R.asBitmap = !0;
                var w = null;
                if (0 != t || 0 != e || s != d || r != p) {
                    var S = (w = this._uv.slice())[0],
                        M = w[1],
                        I = (w[2] - S) / l,
                        P = (w[7] - M) / _;
                    w = [S + y * I, M + E * P, S + (y + m) * I, M + E * P, S + (y + m) * I, M + (E + v) * P, S + y * I, M + (E + v) * P];
                }
                R._drawTextureM(this, T, x, m, v, null, 1, w), R._targets.start(), R.flush(), R._targets.end(),
                    R._targets.restore();
                var L = R._targets.getData(0, 0, s, r);
                for (R.destroy(), A = new Uint8Array(s * r * 4), a = 0, n = (r - 1) * C, h = r - 1; h >= 0; h--) {
                    A.set(L.slice(n, n + C), a), a += C, n -= C;
                }
                return A;
            }
        }, {
            key: "getPixels",
            value: function getPixels(t, e, i, s) {
                return window.conch ? this._nativeObj.getImageData(t, e, i, s) : this.getTexturePixels(t, e, i, s);
            }
        }, {
            key: "recoverBitmap",
            value: function recoverBitmap() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = this._bitmap.url;
                this._destroyed || this._bitmap && !this._bitmap.destroyed || !e || i.loader.load(e, T.create(this, function(e) {
                    this.bitmap = e, t && t();
                }), null, "htmlimage", 1, !0);
            }
        }, {
            key: "disposeBitmap",
            value: function disposeBitmap() {
                !this._destroyed && this._bitmap && this._bitmap.destroy();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (!this._destroyed) {
                    this._destroyed = !0;
                    var e = this._bitmap;
                    e && (e._removeReference(this._referenceCount), (0 === e.referenceCount || t) && e.destroy(),
                        e = null), this.url && this === i.loader.getRes(this.url) && i.Loader.clearRes(this.url);
                }
            }
        }, {
            key: "uv",
            get: function get() {
                return this._uv;
            },
            set: function set(t) {
                this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]),
                    this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1],
                    this._uv = t;
            }
        }, {
            key: "width",
            get: function get() {
                return this._w ? this._w : this.bitmap ? this.uv && this.uv !== Kt.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0;
            },
            set: function set(t) {
                this._w = t, this.sourceWidth || (this.sourceWidth = t);
            }
        }, {
            key: "height",
            get: function get() {
                return this._h ? this._h : this.bitmap ? this.uv && this.uv !== Kt.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0;
            },
            set: function set(t) {
                this._h = t, this.sourceHeight || (this.sourceHeight = t);
            }
        }, {
            key: "bitmap",
            get: function get() {
                return this._bitmap;
            },
            set: function set(t) {
                this._bitmap && this._bitmap._removeReference(this._referenceCount), this._bitmap = t,
                    t && t._addReference(this._referenceCount);
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        }], [{
            key: "moveUV",
            value: function moveUV(t, e, i) {
                for (var s = 0; s < 8; s += 2) {
                    i[s] += t, i[s + 1] += e;
                }
                return i;
            }
        }, {
            key: "create",
            value: function create(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
                return Kt._create(t, e, i, s, r, a, n, h, o);
            }
        }, {
            key: "_create",
            value: function _create(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
                var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _, c = t instanceof Kt,
                    u = c ? t.uv : Kt.DEF_UV,
                    d = c ? t.bitmap : t;
                d.width && e + s > d.width && (s = d.width - e), d.height && i + r > d.height && (r = d.height - i),
                    l ? (_ = l).setTo(d, null, h || s, o || r) : _ = new Kt(d, null, h || s, o || r),
                    _.width = s, _.height = r, _.offsetX = a, _.offsetY = n;
                var p = 1 / d.width,
                    f = 1 / d.height;
                e *= p, i *= f, s *= p, r *= f;
                var g = _.uv[0],
                    m = _.uv[1],
                    v = _.uv[4],
                    T = _.uv[5],
                    x = v - g,
                    y = T - m,
                    E = Kt.moveUV(u[0], u[1], [e, i, e + s, i, e + s, i + r, e, i + r]);
                _.uv = new Float32Array([g + E[0] * x, m + E[1] * y, v - (1 - E[2]) * x, m + E[3] * y, v - (1 - E[4]) * x, T - (1 - E[5]) * y, g + E[6] * x, T - (1 - E[7]) * y]);
                var C = d.scaleRate;
                return C && 1 != C ? (_.sourceWidth /= C, _.sourceHeight /= C, _.width /= C, _.height /= C,
                    _.scaleRate = C) : _.scaleRate = 1, _;
            }
        }, {
            key: "createFromTexture",
            value: function createFromTexture(t, e, i, s, r) {
                var a = t.scaleRate;
                1 != a && (e *= a, i *= a, s *= a, r *= a);
                var n = g.TEMP.setTo(e - t.offsetX, i - t.offsetY, s, r),
                    h = n.intersection(Kt._rect1.setTo(0, 0, t.width, t.height), Kt._rect2);
                return h ? Kt.create(t, h.x, h.y, h.width, h.height, h.x - n.x, h.y - n.y, s, r) : null;
            }
        }]);
        return Kt;
    }(x);
    Kt.DEF_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), Kt.NO_UV = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]),
        Kt.INV_UV = new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), Kt._rect1 = new g(), Kt._rect2 = new g();
    var jt = /* */ function() {
        function jt(t) {
            _classCallCheck(this, jt);
            this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1,
                this._bold = !1, this._id = jt._gfontID++, this.setFont(t || this._font);
        }
        _createClass(jt, [{
            key: "setFont",
            value: function setFont(t) {
                this._font = t;
                var e = t.split(" "),
                    i = e.length;
                if (i < 2) 1 == i && e[0].indexOf("px") > 0 && (this._size = parseInt(e[0]));
                else {
                    for (var s = -1, r = 0; r < i; r++) {
                        if (e[r].indexOf("px") > 0 || e[r].indexOf("pt") > 0) {
                            s = r, this._size = parseInt(e[r]), this._size <= 0 && (console.error("font parse error:" + t),
                                this._size = 14);
                            break;
                        }
                    }
                    var a = s + 1,
                        n = e[a];
                    for (a++; a < i; a++) {
                        n += " " + e[a];
                    }
                    this._family = n.split(",")[0], this._italic = e.indexOf("italic") >= 0, this._bold = e.indexOf("bold") >= 0;
                }
            }
        }], [{
            key: "Parse",
            value: function Parse(t) {
                if (t === jt._lastFont) return jt._lastFontInfo;
                var e = jt._cache[t];
                return e || (e = jt._cache[t] = new jt(t)), jt._lastFont = t, jt._lastFontInfo = e,
                    e;
            }
        }]);
        return jt;
    }();
    jt.EMPTY = new jt(null), jt._cache = {}, jt._gfontID = 0, jt._lastFont = "";
    var qt = /* */ function() {
        function qt() {
            _classCallCheck(this, qt);
            this.save = [], this.toUpperCase = null, this.width = -1, this.pageChars = [], this.startID = 0,
                this.startIDStroke = 0, this.lastGCCnt = 0, this.splitRender = !1, this.scalex = 1,
                this.scaley = 1;
        }
        _createClass(qt, [{
            key: "setText",
            value: function setText(t) {
                this.changed = !0, this._text = t, this.width = -1, this.cleanCache();
            }
        }, {
            key: "toString",
            value: function toString() {
                return this._text;
            }
        }, {
            key: "charCodeAt",
            value: function charCodeAt(t) {
                return this._text ? this._text.charCodeAt(t) : NaN;
            }
        }, {
            key: "charAt",
            value: function charAt(t) {
                return this._text ? this._text.charAt(t) : null;
            }
        }, {
            key: "cleanCache",
            value: function cleanCache() {
                this.pageChars.forEach(function(t) {
                    var e = t.tex;
                    t.words;
                    1 == t.words.length && e && e.ri && e.destroy();
                }), this.pageChars = [], this.startID = 0, this.scalex = 1, this.scaley = 1;
            }
        }, {
            key: "length",
            get: function get() {
                return this._text ? this._text.length : 0;
            }
        }]);
        return qt;
    }();
    var Qt = /* */ function() {
        function Qt() {
            _classCallCheck(this, Qt);
            this["char"] = "", this.deleted = !1, this.uv = new Array(8), this.pos = 0, this.orix = 0,
                this.oriy = 0, this.touchTick = 0, this.isSpace = !1;
        }
        _createClass(Qt, [{
            key: "touch",
            value: function touch() {
                var t = mt.loopCount;
                this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
            }
        }]);
        return Qt;
    }();
    var Zt = /* */ function() {
        function Zt() {
            _classCallCheck(this, Zt);
            this.fontsz = 16;
        }
        _createClass(Zt, [{
            key: "getWidth",
            value: function getWidth(t, e) {
                return 0;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {}
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                return null;
            }
        }, {
            key: "canvasWidth",
            get: function get() {
                return 0;
            },
            set: function set(t) {}
        }]);
        return Zt;
    }();
    var $t = /* */ function() {
        function $t() {
            _classCallCheck(this, $t);
        }
        _createClass($t, null, [{
            key: "__init__",
            value: function __init__() {
                var t = window.Laya || i.Laya;
                if ($t._window) return $t._window;
                var e = $t._window = window,
                    s = $t._document = e.document,
                    r = $t.userAgent = e.navigator.userAgent,
                    a = e.navigator.maxTouchPoints || 0,
                    n = e.navigator.platform;
                r.indexOf("AlipayMiniGame") > -1 && "my" in $t.window && (window.aliPayMiniGame(t, t),
                        t.ALIMiniAdapter ? t.ALIMiniAdapter.enable() : console.error("请先添加阿里小游戏适配库")), -1 == r.indexOf("OPPO") && r.indexOf("MiniGame") > -1 && "wx" in $t.window && ("qq" in $t.window ? (window.qqMiniGame(t, t),
                        t.QQMiniAdapter ? t.QQMiniAdapter.enable() : console.error("请引入手机QQ小游戏的适配库：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")) : (window.wxMiniGame(t, t),
                        t.MiniAdpter ? t.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0"))),
                    r.indexOf("MiniGame") > -1 && "qq" in $t.window && (window.qqMiniGame(t, t), t.QQMiniAdapter ? t.QQMiniAdapter.enable() : console.error("请先添加小游戏适配库,详细教程")),
                    r.indexOf("SwanGame") > -1 && (window.bdMiniGame(t, t), t.BMiniAdapter ? t.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")),
                    r.indexOf("QuickGame") > -1 && (window.miMiniGame(t, t), t.KGMiniAdapter ? t.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")),
                    r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 && (window.qgMiniGame(t, t),
                        t.QGMiniAdapter ? t.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库")), r.indexOf("VVGame") > -1 && (window.vvMiniGame(t, t),
                        t.VVMiniAdapter ? t.VVMiniAdapter.enable() : console.error("请先添加VIVO小游戏适配库")), e.trace = console.log,
                    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                        return e.setTimeout(t, 1e3 / 60);
                    };
                var h = s.body.style;
                h.margin = 0, h.overflow = "hidden", h["-webkit-user-select"] = "none", h["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
                for (var o = s.getElementsByTagName("meta"), l = 0, _ = !1, c = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; l < o.length;) {
                    var u = o[l];
                    if ("viewport" == u.name) {
                        u.content = c, _ = !0;
                        break;
                    }
                    l++;
                }
                return _ || ((u = s.createElement("meta")).name = "viewport", u.content = c, s.getElementsByTagName("head")[0].appendChild(u)),
                    $t.onMobile = !!window.isConchApp || r.indexOf("Mobile") > -1, $t.onIOS = !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    $t.onIPhone = r.indexOf("iPhone") > -1, $t.onMac = r.indexOf("Mac OS X") > -1, $t.onIPad = r.indexOf("iPad") > -1 || "MacIntel" === n && a > 1,
                    $t.onAndroid = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1, $t.onWP = r.indexOf("Windows Phone") > -1,
                    $t.onQQBrowser = r.indexOf("QQBrowser") > -1, $t.onMQQBrowser = r.indexOf("MQQBrowser") > -1 || r.indexOf("Mobile") > -1 && r.indexOf("QQ") > -1,
                    $t.onIE = !!e.ActiveXObject || "ActiveXObject" in e, $t.onWeiXin = r.indexOf("MicroMessenger") > -1,
                    $t.onSafari = r.indexOf("Safari") > -1, $t.onPC = !$t.onMobile, $t.onMiniGame = r.indexOf("MiniGame") > -1,
                    $t.onBDMiniGame = r.indexOf("SwanGame") > -1, $t.onLayaRuntime = !!$t.window.conch,
                    r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 ? ($t.onQGMiniGame = !0, $t.onMiniGame = !1) : "qq" in $t.window && r.indexOf("MiniGame") > -1 && ($t.onQQMiniGame = !0,
                        $t.onMiniGame = !1), $t.onVVMiniGame = r.indexOf("VVGame") > -1, $t.onKGMiniGame = r.indexOf("QuickGame") > -1,
                    r.indexOf("AlipayMiniGame") > -1 && ($t.onAlipayMiniGame = !0, $t.onMiniGame = !1),
                    e;
            }
        }, {
            key: "createElement",
            value: function createElement(t) {
                return $t.__init__(), $t._document.createElement(t);
            }
        }, {
            key: "getElementById",
            value: function getElementById(t) {
                return $t.__init__(), $t._document.getElementById(t);
            }
        }, {
            key: "removeElement",
            value: function removeElement(t) {
                t && t.parentNode && t.parentNode.removeChild(t);
            }
        }, {
            key: "now",
            value: function now() {
                return Date.now();
            }
        }, {
            key: "clientWidth",
            get: function get() {
                return $t.__init__(), $t._window.innerWidth || $t._document.body.clientWidth;
            }
        }, {
            key: "clientHeight",
            get: function get() {
                return $t.__init__(), $t._window.innerHeight || $t._document.body.clientHeight || $t._document.documentElement.clientHeight;
            }
        }, {
            key: "width",
            get: function get() {
                return $t.__init__(), (i.stage && i.stage.canvasRotation ? $t.clientHeight : $t.clientWidth) * $t.pixelRatio;
            }
        }, {
            key: "height",
            get: function get() {
                return $t.__init__(), (i.stage && i.stage.canvasRotation ? $t.clientWidth : $t.clientHeight) * $t.pixelRatio;
            }
        }, {
            key: "pixelRatio",
            get: function get() {
                return $t._pixelRatio < 0 && ($t.__init__(), $t.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? $t._pixelRatio = 2 : ($t._pixelRatio = $t._window.devicePixelRatio || 1,
                    $t._pixelRatio < 1 && ($t._pixelRatio = 1))), $t._pixelRatio;
            }
        }, {
            key: "container",
            get: function get() {
                return $t._container || ($t.__init__(), $t._container = $t.createElement("div"),
                        $t._container.id = "layaContainer", $t._document.body.appendChild($t._container)),
                    $t._container;
            },
            set: function set(t) {
                $t._container = t;
            }
        }, {
            key: "window",
            get: function get() {
                return $t._window || $t.__init__();
            }
        }, {
            key: "document",
            get: function get() {
                return $t.__init__(), $t._document;
            }
        }]);
        return $t;
    }();
    $t._pixelRatio = -1, $t.mainCanvas = null, $t.hanzi = new RegExp("^[一-龥]$"), $t.fontMap = [],
        $t.measureText = function(t, e) {
            var i = $t.hanzi.test(t);
            if (i && $t.fontMap[e]) return $t.fontMap[e];
            var s = $t.context;
            s.font = e;
            var r = s.measureText(t);
            return i && ($t.fontMap[e] = r), r;
        };
    var Jt = /* */ function(_Zt) {
        _inherits(Jt, _Zt);

        function Jt(t, e) {
            var _this18;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            _classCallCheck(this, Jt);
            _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Jt).call(this)), _this18.ctx = null,
                _this18.lastScaleX = 1, _this18.lastScaleY = 1, _this18.maxTexW = 0, _this18.maxTexH = 0,
                _this18.scaleFontSize = !0, _this18.showDbgInfo = !1, _this18.supportImageData = !0,
                _this18.maxTexW = t, _this18.maxTexH = e, _this18.scaleFontSize = i, _this18.supportImageData = s,
                _this18.showDbgInfo = r, Jt.canvas || (Jt.canvas = $t.createElement("canvas"), Jt.canvas.width = 1024,
                    Jt.canvas.height = 512, Jt.canvas.style.left = "-10000px", Jt.canvas.style.position = "absolute",
                    document.body.appendChild(Jt.canvas), _this18.ctx = Jt.canvas.getContext("2d"));
            return _this18;
        }
        _createClass(Jt, [{
            key: "getWidth",
            value: function getWidth(t, e) {
                return this.ctx ? (this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t),
                    this.ctx.measureText(e).width) : 0;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                if (!this.supportImageData) return this.lastScaleX = t, void(this.lastScaleY = e);
                this.lastScaleX == t && this.lastScaleY == e || (this.ctx.setTransform(t, 0, 0, e, 0, 0),
                    this.lastScaleX = t, this.lastScaleY = e);
            }
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                if (!this.supportImageData) return this.getCharCanvas(t, e, i, s, r, a, n, h, o, l);
                var c = this.ctx,
                    u = this.fontsz;
                c.font != e && (c.font = e, c._lastFont = e), a.width = c.measureText(t).width;
                var d = a.width * this.lastScaleX,
                    p = a.height * this.lastScaleY;
                d += (n + o) * this.lastScaleX, p += (h + l) * this.lastScaleY, d = Math.ceil(d),
                    p = Math.ceil(p);
                var f = (d = Math.min(d, Jt.canvas.width)) + 2 * i + 1,
                    g = (p = Math.min(p, Jt.canvas.height)) + 2 * i + 1;
                _ && (f = Math.max(f, _[0] + _[2] + 1), g = Math.max(g, _[1] + _[3] + 1)), c.clearRect(0, 0, f / this.lastScaleX + 1, g / this.lastScaleY + 1),
                    c.save(), c.textBaseline = "middle", i > 0 && (c.strokeStyle = r, c.lineWidth = i,
                        c.strokeText(t, n, h + u / 2)), s && (c.fillStyle = s, c.fillText(t, n, h + u / 2)),
                    this.showDbgInfo && (c.strokeStyle = "#ff0000", c.strokeRect(1, 1, d - 2, p - 2),
                        c.strokeStyle = "#00ff00", c.strokeRect(n, h, a.width, a.height)), _ && -1 == _[2] && (_[2] = Math.ceil((a.width + 2 * i) * this.lastScaleX));
                var m = _ ? c.getImageData(_[0], _[1], _[2], _[3] + 1) : c.getImageData(0, 0, d, p + 1);
                return c.restore(), a.bmpWidth = m.width, a.bmpHeight = m.height, m;
            }
        }, {
            key: "getCharCanvas",
            value: function getCharCanvas(t, e, i, s, r, a, n, h, o, l) {
                var _ = this.ctx;
                _.font != e && (_.font = e, _._lastFont = e), a.width = _.measureText(t).width;
                var c = a.width * this.lastScaleX,
                    u = a.height * this.lastScaleY;
                c += (n + o) * this.lastScaleX, u += (h + l) * this.lastScaleY + 1, c = Math.min(c, this.maxTexW),
                    u = Math.min(u, this.maxTexH), Jt.canvas.width = Math.min(c + 1, this.maxTexW),
                    Jt.canvas.height = Math.min(u + 1, this.maxTexH), _.font = e, _.clearRect(0, 0, c + 1 + i, u + 1 + i),
                    _.setTransform(1, 0, 0, 1, 0, 0), _.save(), this.scaleFontSize && _.scale(this.lastScaleX, this.lastScaleY),
                    _.translate(n, h), _.textAlign = "left";
                var d = this.fontsz;
                return _.textBaseline = "middle", i > 0 ? (_.strokeStyle = r, _.fillStyle = s, _.lineWidth = i,
                        _.fillAndStrokeText ? _.fillAndStrokeText(t, 0, d / 2) : (_.strokeText(t, 0, d / 2),
                            _.fillText(t, 0, d / 2))) : s && (_.fillStyle = s, _.fillText(t, 0, d / 2)), this.showDbgInfo && (_.strokeStyle = "#ff0000",
                        _.strokeRect(0, 0, c, u), _.strokeStyle = "#00ff00", _.strokeRect(0, 0, a.width, a.height)),
                    _.restore(), a.bmpWidth = Jt.canvas.width, a.bmpHeight = Jt.canvas.height, Jt.canvas;
            }
        }, {
            key: "canvasWidth",
            get: function get() {
                return Jt.canvas.width;
            },
            set: function set(t) {
                Jt.canvas.width != t && (Jt.canvas.width = t, t > 2048 && console.warn("画文字设置的宽度太大，超过2048了"),
                    this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY));
            }
        }]);
        return Jt;
    }(Zt);
    Jt.canvas = null;
    var te = /* */ function(_Zt2) {
        _inherits(te, _Zt2);

        function te() {
            var _this19;
            _classCallCheck(this, te);
            _this19 = _possibleConstructorReturn(this, _getPrototypeOf(te).call(this)), _this19.lastFont = "",
                _this19.lastScaleX = 1, _this19.lastScaleY = 1;
            return _this19;
        }
        _createClass(te, [{
            key: "getWidth",
            value: function getWidth(t, e) {
                return window.conchTextCanvas ? (window.conchTextCanvas.font = t, this.lastFont = t,
                    window.conchTextCanvas.measureText(e).width) : 0;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                this.lastScaleX = t, this.lastScaleY = e;
            }
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                if (!window.conchTextCanvas) return null;
                window.conchTextCanvas.font = e, this.lastFont = e;
                a.width = window.conchTextCanvas.measureText(t).width, a.height;
                window.conchTextCanvas.scale && window.conchTextCanvas.scale(this.lastScaleX, this.lastScaleY);
                var c = j.create(r).numColor,
                    u = j.create(s).numColor,
                    d = window.conchTextCanvas.getTextBitmapData(t, u, i > 2 ? 2 : i, c);
                return a.bmpWidth = d.width, a.bmpHeight = d.height, d;
            }
        }]);
        return te;
    }(Zt);
    var ee = /* */ function() {
        function ee() {
            _classCallCheck(this, ee);
            this.fontSizeInfo = {}, this.mapFont = {}, this.fontID = 0, this.mapColor = [],
                this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, this._curStrPos = 0,
                this.textAtlases = [], this.isoTextures = [], this.lastFont = null, this.fontSizeW = 0,
                this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0,
                this.tmpAtlasPos = new f(), this.textureMem = 0, i.TextAtlas = Ht;
            var t = !1,
                e = i.Laya.MiniAdpter;
            e && e.systemInfo && e.systemInfo.system && (t = "ios 10.1.1" === e.systemInfo.system.toLowerCase()),
                i.Browser.onMiniGame && !t && (ee.isWan1Wan = !0), this.charRender = i.Render.isConchApp ? new te() : new Jt(ee.atlasWidth, ee.atlasWidth, ee.scaleFontWithCtx, !ee.isWan1Wan, !1),
                ee.textRenderInst = this, i.Laya.textRender = this, ee.atlasWidth2 = ee.atlasWidth * ee.atlasWidth;
        }
        _createClass(ee, [{
            key: "setFont",
            value: function setFont(t) {
                if (this.lastFont != t) {
                    this.lastFont = t;
                    var e = this.getFontSizeInfo(t._family),
                        i = e >> 24,
                        s = e >> 16 & 255,
                        r = e >> 8 & 255,
                        a = 255 & e,
                        n = t._size / ee.standardFontSize;
                    this.fontSizeOffX = Math.ceil(i * n), this.fontSizeOffY = Math.ceil(s * n), this.fontSizeW = Math.ceil(r * n),
                        this.fontSizeH = Math.ceil(a * n), t._font.indexOf("italic") >= 0 ? this.fontStr = t._font.replace("italic", "") : this.fontStr = t._font;
                }
            }
        }, {
            key: "getNextChar",
            value: function getNextChar(t) {
                var e = t.length,
                    i = this._curStrPos;
                if (i >= e) return null;
                for (var s = i, r = 0; s < e; s++) {
                    var a = t.charCodeAt(s);
                    if (a >>> 11 == 27) {
                        if (1 == r) break;
                        r = 1, s++;
                    } else if (65038 === a || 65039 === a);
                    else if (8205 == a) r = 2;
                    else if (0 == r) r = 1;
                    else if (1 == r) break;
                }
                return this._curStrPos = s, t.substring(i, s);
            }
        }, {
            key: "filltext",
            value: function filltext(t, e, s, r, a, n, h, o, l) {
                var _ = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
                if (!(e.length <= 0)) {
                    var c = jt.Parse(a),
                        u = 0;
                    switch (l) {
                        case "center":
                            u = i.Context.ENUM_TEXTALIGN_CENTER;
                            break;

                        case "right":
                            u = i.Context.ENUM_TEXTALIGN_RIGHT;
                    }
                    this._fast_filltext(t, e, null, s, r, c, n, h, o, u, _);
                }
            }
        }, {
            key: "fillWords",
            value: function fillWords(t, e, i, s, r, a, n, h) {
                if (e && !(e.length <= 0)) {
                    var o = "string" == typeof r ? jt.Parse(r) : r;
                    this._fast_filltext(t, null, e, i, s, o, a, n, h, 0, 0);
                }
            }
        }, {
            key: "_fast_filltext",
            value: function _fast_filltext(t, e, s, r, a, n, h, o, l, _) {
                var c = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
                if (!(e && e.length < 1 || s && s.length < 1)) {
                    if (l < 0 && (l = 0), this.setFont(n), this.fontScaleX = this.fontScaleY = 1, ee.scaleFontWithCtx) {
                        var u = 1,
                            d = 1;
                        if (i.Render.isConchApp && !window.conchTextCanvas.scale || (u = t.getMatScaleX(),
                                d = t.getMatScaleY()), u < 1e-4 || d < .1) return;
                        u > 1 && (this.fontScaleX = u), d > 1 && (this.fontScaleY = d);
                    }
                    n._italic && (t._italicDeg = 13);
                    var p = e,
                        f = !s && e instanceof qt,
                        g = e,
                        m = !!s,
                        v = f ? p.pageChars : [],
                        T = 0;
                    switch (f ? (g = p._text, (T = p.width) < 0 && (T = p.width = this.charRender.getWidth(this.fontStr, g))) : T = g ? this.charRender.getWidth(this.fontStr, g) : 0,
                        _) {
                        case i.Context.ENUM_TEXTALIGN_CENTER:
                            r -= T / 2;
                            break;

                        case i.Context.ENUM_TEXTALIGN_RIGHT:
                            r -= T;
                    }
                    p && v && this.hasFreedText(v) && (v = p.pageChars = []);
                    var x = null,
                        y = this.renderPerChar = !f || ee.forceSplitRender || m || f && p.splitRender;
                    if (!v || v.length < 1)
                        if (f && (p.scalex = this.fontScaleX, p.scaley = this.fontScaleY),
                            y) {
                            var E, C = 0,
                                b = 0;
                            for (this._curStrPos = 0;;) {
                                if (s) {
                                    var A = s[this._curStrPos++];
                                    A ? (E = A["char"], C = A.x, b = A.y) : E = null;
                                } else E = this.getNextChar(g);
                                if (!E) break;
                                if (!(x = this.getCharRenderInfo(E, n, h, o, l, !1))) break;
                                if (x.isSpace);
                                else {
                                    var R = v[x.tex.id];
                                    if (R) R = R.words;
                                    else {
                                        var w = {
                                            texgen: x.tex.genID,
                                            tex: x.tex,
                                            words: []
                                        };
                                        v[x.tex.id] = w, R = w.words;
                                    }
                                    R.push({
                                        ri: x,
                                        x: C,
                                        y: b,
                                        w: x.bmpWidth / this.fontScaleX,
                                        h: x.bmpHeight / this.fontScaleY
                                    }), C += x.width;
                                }
                            }
                        } else {
                            var S = ee.noAtlas || T * this.fontScaleX > ee.atlasWidth;
                            x = this.getCharRenderInfo(g, n, h, o, l, S), v[0] = {
                                texgen: x.tex.genID,
                                tex: x.tex,
                                words: [{
                                    ri: x,
                                    x: 0,
                                    y: 0,
                                    w: x.bmpWidth / this.fontScaleX,
                                    h: x.bmpHeight / this.fontScaleY
                                }]
                            };
                        }
                    this._drawResortedWords(t, r, a, v), t._italicDeg = 0;
                }
            }
        }, {
            key: "_drawResortedWords",
            value: function _drawResortedWords(t, e, s, r) {
                var a = !!t._charSubmitCache && t._charSubmitCache._enable,
                    n = t._curMat;
                r.length;
                for (var h in r) {
                    var o = r[h];
                    if (o) {
                        var l = o.words,
                            _ = l.length;
                        if (!(_ <= 0))
                            for (var c = r[h].tex, u = 0; u < _; u++) {
                                var d = l[u],
                                    p = d.ri;
                                if (!p.isSpace) {
                                    if (p.touch(), t.drawTexAlign = !0, i.Render.isConchApp) t._drawTextureM(c.texture, e + d.x - p.orix, s + d.y - p.oriy, d.w, d.h, null, 1, p.uv);
                                    else {
                                        var _i3 = c;
                                        t._inner_drawTexture(_i3.texture, _i3.id, e + d.x - p.orix, s + d.y - p.oriy, d.w, d.h, n, p.uv, 1, a);
                                    }
                                    t.touches && t.touches.push(p);
                                }
                            }
                    }
                }
            }
        }, {
            key: "hasFreedText",
            value: function hasFreedText(t) {
                for (var e = t.length, i = 0; i < e; i++) {
                    var s = t[i];
                    if (s) {
                        var r = s.tex;
                        if (r.__destroyed || r.genID != s.texgen) return !0;
                    }
                }
                return !1;
            }
        }, {
            key: "getCharRenderInfo",
            value: function getCharRenderInfo(t, e, s, r, a) {
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var h = this.mapFont[e._family];
                null == h && (this.mapFont[e._family] = h = this.fontID++);
                var o = t + "_" + h + "_" + e._size + "_" + s;
                a > 0 && (o += "_" + r + a), e._bold && (o += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
                var l, _, c = 0,
                    u = this.textAtlases.length;
                if (!n)
                    for (c = 0; c < u; c++) {
                        if (l = (_ = this.textAtlases[c]).charMaps[o]) return l.touch(), l;
                    }
                l = new Qt(), this.charRender.scale(this.fontScaleX, this.fontScaleY), l["char"] = t,
                    l.height = e._size;
                var d = i.Render.isConchApp ? 0 : e._size / 3 | 0,
                    p = null;
                a || (a = 0);
                var f = Math.ceil((this.charRender.getWidth(this.fontStr, t) + 2 * a) * this.fontScaleX);
                if (f > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, f + 2 * d)),
                    n) {
                    if (this.charRender.fontsz = e._size, p = this.charRender.getCharBmp(t, this.fontStr, a, s, r, l, d, d, d, d, null)) {
                        var g = Xt.getTextTexture(p.width, p.height);
                        g.addChar(p, 0, 0, l.uv), l.tex = g, l.orix = d, l.oriy = d, g.ri = l, this.isoTextures.push(g);
                    }
                } else {
                    var m = t.length,
                        v = 1 * a,
                        T = Math.ceil((this.fontSizeW + 2 * v) * this.fontScaleX),
                        x = Math.ceil((this.fontSizeH + 2 * v) * this.fontScaleY);
                    ee.imgdtRect[0] = (d - this.fontSizeOffX - v) * this.fontScaleX | 0, ee.imgdtRect[1] = (d - this.fontSizeOffY - v) * this.fontScaleY | 0,
                        this.renderPerChar || 1 == m ? (ee.imgdtRect[2] = Math.max(f, T), ee.imgdtRect[3] = Math.max(f, x)) : (ee.imgdtRect[2] = -1,
                            ee.imgdtRect[3] = x), this.charRender.fontsz = e._size, (p = this.charRender.getCharBmp(t, this.fontStr, a, s, r, l, d, d, d, d, ee.imgdtRect)) && (_ = this.addBmpData(p, l),
                            ee.isWan1Wan ? (l.orix = d, l.oriy = d) : (l.orix = this.fontSizeOffX + v, l.oriy = this.fontSizeOffY + v),
                            _.charMaps[o] = l);
                }
                return l;
            }
        }, {
            key: "addBmpData",
            value: function addBmpData(t, e) {
                for (var i, s = t.width, r = t.height, a = this.textAtlases.length, n = !1, h = 0; h < a && !(n = (i = this.textAtlases[h]).getAEmpty(s, r, this.tmpAtlasPos)); h++) {}
                if (!n) {
                    if (i = new Ht(), this.textAtlases.push(i), !(n = i.getAEmpty(s, r, this.tmpAtlasPos))) throw "err1";
                    this.cleanAtlases();
                }
                return n && (i.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv),
                    e.tex = i.texture), i;
            }
        }, {
            key: "GC",
            value: function GC() {
                for (var t = 0, e = this.textAtlases.length, i = ee.destroyAtlasDt, s = 0, r = mt.loopCount, a = -1, n = 0, h = null, o = null; t < e; t++) {
                    if (h = (o = this.textAtlases[t]).texture) {
                        h.curUsedCovRate, s += h.curUsedCovRateAtlas;
                        var l = o.usedRate - h.curUsedCovRateAtlas;
                        n < l && (n = l, a = t);
                    }
                    r - o.texture.lastTouchTm > i && (ee.showLog && console.log(o.texture.id), o.destroy(),
                        this.textAtlases[t] = this.textAtlases[e - 1], e--, t--, a = -1);
                }
                for (this.textAtlases.length = e, e = this.isoTextures.length, t = 0; t < e; t++) {
                    r - (h = this.isoTextures[t]).lastTouchTm > ee.destroyUnusedTextureDt && (h.ri.deleted = !0,
                        h.ri.tex = null, h.destroy(), this.isoTextures[t] = this.isoTextures[e - 1], e--,
                        t--);
                }
                this.isoTextures.length = e;
                this.textAtlases.length > 1 && this.textAtlases.length;
                (ee.atlasWidth * ee.atlasWidth * 4 * this.textAtlases.length > ee.cleanMem || ee.simClean) && (ee.simClean = !1,
                    ee.showLog && console.log("清理使用率低的贴图。总使用率:", s, ":", this.textAtlases.length, "最差贴图:" + a),
                    a >= 0 && ((o = this.textAtlases[a]).destroy(), this.textAtlases[a] = this.textAtlases[this.textAtlases.length - 1],
                        this.textAtlases.length = this.textAtlases.length - 1)), Xt.clean();
            }
        }, {
            key: "cleanAtlases",
            value: function cleanAtlases() {}
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t) {}
        }, {
            key: "checkBmpLine",
            value: function checkBmpLine(t, e, i, s) {
                this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
                for (var r = t.width * e + i, a = i; a < s; a++) {
                    if (0 != this.bmpData32[r++]) return !0;
                }
                return !1;
            }
        }, {
            key: "updateBbx",
            value: function updateBbx(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = t.width,
                    r = t.height,
                    a = 0,
                    n = e[1],
                    h = 0,
                    o = n;
                if (this.checkBmpLine(t, n, 0, s))
                    for (;;) {
                        if ((o = (n + h) / 2 | 0) + 1 >= n) {
                            e[1] = o;
                            break;
                        }
                        this.checkBmpLine(t, o, 0, s) ? n = o : h = o;
                    }
                if (e[3] > r) e[3] = r;
                else if (o = n = e[3], h = r, this.checkBmpLine(t, n, 0, s))
                    for (;;) {
                        if ((o = (n + h) / 2 | 0) - 1 <= n) {
                            e[3] = o;
                            break;
                        }
                        this.checkBmpLine(t, o, 0, s) ? n = o : h = o;
                    }
                if (!i) {
                    var l = e[0],
                        _ = s * e[1];
                    for (o = e[1]; o < e[3]; o++) {
                        for (a = 0; a < l; a++) {
                            if (0 != this.bmpData32[_ + a]) {
                                l = a;
                                break;
                            }
                        }
                        _ += s;
                    }
                    e[0] = l;
                    var c = e[2];
                    for (_ = s * e[1], o = e[1]; o < e[3]; o++) {
                        for (a = c; a < s; a++) {
                            if (0 != this.bmpData32[_ + a]) {
                                c = a;
                                break;
                            }
                        }
                        _ += s;
                    }
                    e[2] = c;
                }
            }
        }, {
            key: "getFontSizeInfo",
            value: function getFontSizeInfo(t) {
                var e = this.fontSizeInfo[t];
                if (null != e) return e;
                var s = "bold " + ee.standardFontSize + "px " + t;
                if (ee.isWan1Wan) {
                    this.fontSizeW = 1.5 * this.charRender.getWidth(s, "有"), this.fontSizeH = 1.5 * ee.standardFontSize;
                    var r = this.fontSizeW << 8 | this.fontSizeH;
                    return this.fontSizeInfo[t] = r, r;
                }
                ee.pixelBBX[0] = ee.standardFontSize / 2, ee.pixelBBX[1] = ee.standardFontSize / 2,
                    ee.pixelBBX[2] = ee.standardFontSize, ee.pixelBBX[3] = ee.standardFontSize;
                var a = 16,
                    n = 16;
                this.charRender.scale(1, 1), ee.tmpRI.height = ee.standardFontSize, this.charRender.fontsz = ee.standardFontSize;
                var h = this.charRender.getCharBmp("g", s, 0, "red", null, ee.tmpRI, a, n, 16, 16);
                i.Render.isConchApp && (h.data = new Uint8ClampedArray(h.data)), this.bmpData32 = new Uint32Array(h.data.buffer),
                    this.updateBbx(h, ee.pixelBBX, !1), h = this.charRender.getCharBmp("有", s, 0, "red", null, ee.tmpRI, n, n, 16, 16),
                    i.Render.isConchApp && (h.data = new Uint8ClampedArray(h.data)), this.bmpData32 = new Uint32Array(h.data.buffer),
                    ee.pixelBBX[2] < a + ee.tmpRI.width && (ee.pixelBBX[2] = a + ee.tmpRI.width), this.updateBbx(h, ee.pixelBBX, !1),
                    i.Render.isConchApp && (a = 0, n = 0);
                var o = Math.max(a - ee.pixelBBX[0], 0) << 24 | Math.max(n - ee.pixelBBX[1], 0) << 16 | ee.pixelBBX[2] - ee.pixelBBX[0] << 8 | ee.pixelBBX[3] - ee.pixelBBX[1];
                return this.fontSizeInfo[t] = o, o;
            }
        }, {
            key: "printDbgInfo",
            value: function printDbgInfo() {
                for (var t in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + ee.atlasWidth + "x" + ee.atlasWidth, " 用canvas:", ee.isWan1Wan),
                        console.log("图集占用空间:" + ee.atlasWidth * ee.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"),
                        console.log("缓存用到的字体:"), this.mapFont) {
                    var e = this.getFontSizeInfo(t),
                        i = e >> 24,
                        s = e >> 16 & 255,
                        r = e >> 8 & 255,
                        a = 255 & e;
                    console.log("    " + t, " off:", i, s, " size:", r, a);
                }
                var n = 0;
                console.log("缓存数据:");
                var h = 0,
                    o = 0;
                this.textAtlases.forEach(function(t) {
                    var e = t.texture.id,
                        i = mt.loopCount - t.texture.lastTouchTm,
                        s = i > 0 ? i + "帧以前" : "当前帧";
                    for (var r in h += t.texture.curUsedCovRate, o += t.texture.curUsedCovRateAtlas,
                            console.log("--图集(id:" + e + ",当前使用率:" + (1e3 * t.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * t.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * t.usedRate | 0, "%, 使用于:" + s + ")--:"),
                            t.charMaps) {
                        var a = t.charMaps[r];
                        console.log("     off:", a.orix, a.oriy, " bmp宽高:", a.bmpWidth, a.bmpHeight, "无效:", a.deleted, "touchdt:", mt.loopCount - a.touchTick, "位置:", a.uv[0] * ee.atlasWidth | 0, a.uv[1] * ee.atlasWidth | 0, "字符:", a["char"], "key:", r),
                            n++;
                    }
                }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                    console.log("    size:", t._texW, t._texH, "touch间隔:", mt.loopCount - t.lastTouchTm, "char:", t.ri["char"]);
                }), console.log("总缓存:", n, "总使用率:", h, "总当前图集使用率:", o);
            }
        }, {
            key: "showAtlas",
            value: function showAtlas(t, e, s, r, a, n) {
                if (!this.textAtlases[t]) return console.log("没有这个图集"), null;
                var h = new i.Sprite(),
                    o = this.textAtlases[t].texture,
                    l = {
                        width: ee.atlasWidth,
                        height: ee.atlasWidth,
                        sourceWidth: ee.atlasWidth,
                        sourceHeight: ee.atlasWidth,
                        offsetX: 0,
                        offsetY: 0,
                        getIsReady: function getIsReady() {
                            return !0;
                        },
                        _addReference: function _addReference() {},
                        _removeReference: function _removeReference() {},
                        _getSource: function _getSource() {
                            return o._getSource();
                        },
                        bitmap: {
                            id: o.id
                        },
                        _uv: Kt.DEF_UV
                    };
                return h.size = function(t, i) {
                        return this.width = t, this.height = i, h.graphics.clear(), h.graphics.drawRect(0, 0, h.width, h.height, e),
                            h.graphics.drawTexture(l, 0, 0, h.width, h.height), this;
                    }, h.graphics.drawRect(0, 0, a, n, e), h.graphics.drawTexture(l, 0, 0, a, n), h.pos(s, r),
                    i.stage.addChild(h), h;
            }
        }, {
            key: "filltext_native",
            value: function filltext_native(t, e, s, r, a, n, h, o, l, _) {
                var c = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
                if (!(e && e.length <= 0 || s && s.length < 1)) {
                    var u = jt.Parse(n),
                        d = 0;
                    switch (_) {
                        case "center":
                            d = i.Context.ENUM_TEXTALIGN_CENTER;
                            break;

                        case "right":
                            d = i.Context.ENUM_TEXTALIGN_RIGHT;
                    }
                    return this._fast_filltext(t, e, s, r, a, u, h, o, l, d, c);
                }
            }
        }]);
        return ee;
    }();
    ee.useOldCharBook = !1, ee.atlasWidth = 1024, ee.noAtlas = !1, ee.forceSplitRender = !1,
        ee.forceWholeRender = !1, ee.scaleFontWithCtx = !0, ee.standardFontSize = 32, ee.destroyAtlasDt = 10,
        ee.checkCleanTextureDt = 2e3, ee.destroyUnusedTextureDt = 3e3, ee.cleanMem = 104857600,
        ee.isWan1Wan = !1, ee.showLog = !1, ee.debugUV = !1, ee.tmpRI = new Qt(), ee.pixelBBX = [0, 0, 0, 0],
        ee.imgdtRect = [0, 0, 0, 0], ee.simClean = !1, Xt.gTextRender = ee;
    var ie = /* */ function() {
        function ie() {
            _classCallCheck(this, ie);
            if (this._tmpMatrix = new p(), this._drawTexToDrawTri_Vert = new Float32Array(8),
                this._drawTexToDrawTri_Index = new Uint16Array([0, 1, 2, 0, 2, 3]), this._tempUV = new Float32Array(8),
                this._drawTriUseAbsMatrix = !1, this._id = ++ie._COUNT, this._other = null, this._renderNextSubmitIndex = 0,
                this._path = null, this._drawCount = 1, this._width = ie._MAXSIZE, this._height = ie._MAXSIZE,
                this._renderCount = 0, this._submits = null, this._curSubmit = null, this._submitKey = new X(),
                this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [],
                this._transedPoints = new Array(8), this._temp4Points = new Array(8), this._clipRect = ie.MAXCLIPRECT,
                this._globalClipMatrix = new p(ie._MAXSIZE, 0, 0, ie._MAXSIZE, 0, 0), this._clipInCache = !1,
                this._clipInfoID = 0, this._clipID_Gen = 0, this._lastMatScaleX = 1, this._lastMatScaleY = 1,
                this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1,
                this._nBlendType = 0, this._save = null, this._targets = null, this._charSubmitCache = null,
                this._saveMark = null, this._shader2D = new Lt(), this.sprite = null, this._italicDeg = 0,
                this._lastTex = null, this._fillColor = 0, this._flushCnt = 0, this.defTexture = null,
                this._colorFiler = null, this.drawTexAlign = !1, this._incache = !1, this.isMain = !1,
                ie._contextcount++, ie._textRender = ie._textRender || new ee(), !this.defTexture) {
                var t = new P(2, 2);
                t.setPixels(new Uint8Array(16)), t.lock = !0, this.defTexture = new Kt(t);
            }
            this._lastTex = this.defTexture, this.clear();
        }
        _createClass(ie, [{
            key: "drawImage",
            value: function drawImage() {}
        }, {
            key: "getImageData",
            value: function getImageData() {}
        }, {
            key: "measureText",
            value: function measureText(t) {
                return null;
            }
        }, {
            key: "setTransform",
            value: function setTransform() {}
        }, {
            key: "$transform",
            value: function $transform(t, e, i, s, r, a) {}
        }, {
            key: "clearRect",
            value: function clearRect(t, e, i, s) {}
        }, {
            key: "_drawRect",
            value: function _drawRect(t, e, i, s, r) {
                G.renderBatches++, r && (this.fillStyle = r), this.fillRect(t, e, i, s, null);
            }
        }, {
            key: "drawTexture2",
            value: function drawTexture2(t, e, i, s, r, a) {}
        }, {
            key: "transformByMatrix",
            value: function transformByMatrix(t, e, i) {
                this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i);
            }
        }, {
            key: "saveTransform",
            value: function saveTransform(t) {
                this.save();
            }
        }, {
            key: "restoreTransform",
            value: function restoreTransform(t) {
                this.restore();
            }
        }, {
            key: "drawRect",
            value: function drawRect(t, e, i, s, r, a, n) {
                null != r && (this.fillStyle = r, this.fillRect(t, e, i, s)), null != a && (this.strokeStyle = a,
                    this.lineWidth = n, this.strokeRect(t, e, i, s));
            }
        }, {
            key: "alpha",
            value: function alpha(t) {
                this.globalAlpha *= t;
            }
        }, {
            key: "_transform",
            value: function _transform(t, e, i) {
                this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i);
            }
        }, {
            key: "_rotate",
            value: function _rotate(t, e, i) {
                this.translate(e, i), this.rotate(t), this.translate(-e, -i);
            }
        }, {
            key: "_scale",
            value: function _scale(t, e, i, s) {
                this.translate(i, s), this.scale(t, e), this.translate(-i, -s);
            }
        }, {
            key: "_drawLine",
            value: function _drawLine(t, e, i, s, r, a, n, h, o) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = h, this.moveTo(t + i, e + s),
                    this.lineTo(t + r, e + a), this.stroke();
            }
        }, {
            key: "_drawLines",
            value: function _drawLines(t, e, i, s, r, a) {
                this.beginPath(), this.strokeStyle = s, this.lineWidth = r, this.addPath(i.slice(), !1, !1, t, e),
                    this.stroke();
            }
        }, {
            key: "drawCurves",
            value: function drawCurves(t, e, i, s, r) {
                this.beginPath(), this.strokeStyle = s, this.lineWidth = r, this.moveTo(t + i[0], e + i[1]);
                for (var a = 2, n = i.length; a < n;) {
                    this.quadraticCurveTo(t + i[a++], e + i[a++], t + i[a++], e + i[a++]);
                }
                this.stroke();
            }
        }, {
            key: "_fillAndStroke",
            value: function _fillAndStroke(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                null != t && (this.fillStyle = t, this.fill()), null != e && i > 0 && (this.strokeStyle = e,
                    this.lineWidth = i, this.stroke());
            }
        }, {
            key: "_drawCircle",
            value: function _drawCircle(t, e, i, s, r, a, n) {
                G.renderBatches++, this.beginPath(!0), this.arc(t, e, i, 0, ie.PI2), this.closePath(),
                    this._fillAndStroke(s, r, a);
            }
        }, {
            key: "_drawPie",
            value: function _drawPie(t, e, i, s, r, a, n, h, o) {
                this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, s, r), this.closePath(),
                    this._fillAndStroke(a, n, h);
            }
        }, {
            key: "_drawPoly",
            value: function _drawPoly(t, e, i, s, r, a, n, h) {
                this.beginPath(), this.addPath(i.slice(), !0, n, t, e), this.closePath(), this._fillAndStroke(s, r, a, n);
            }
        }, {
            key: "_drawPath",
            value: function _drawPath(t, e, i, s, r) {
                this.beginPath();
                for (var a = 0, n = i.length; a < n; a++) {
                    var h = i[a];
                    switch (h[0]) {
                        case "moveTo":
                            this.moveTo(t + h[1], e + h[2]);
                            break;

                        case "lineTo":
                            this.lineTo(t + h[1], e + h[2]);
                            break;

                        case "arcTo":
                            this.arcTo(t + h[1], e + h[2], t + h[3], e + h[4], h[5]);
                            break;

                        case "closePath":
                            this.closePath();
                    }
                }
                null != s && (this.fillStyle = s.fillStyle, this.fill()), null != r && (this.strokeStyle = r.strokeStyle,
                    this.lineWidth = r.lineWidth || 1, this.lineJoin = r.lineJoin, this.lineCap = r.lineCap,
                    this.miterLimit = r.miterLimit, this.stroke());
            }
        }, {
            key: "clearBG",
            value: function clearBG(t, e, i, s) {
                var r = v.mainContext;
                r.clearColor(t, e, i, s), r.clear(r.COLOR_BUFFER_BIT);
            }
        }, {
            key: "_getSubmits",
            value: function _getSubmits() {
                return this._submits;
            }
        }, {
            key: "_releaseMem",
            value: function _releaseMem() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (this._submits) {
                    this._curMat && this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(),
                        this._shader2D = null, this._charSubmitCache.clear();
                    for (var e = 0, i = this._submits._length; e < i; e++) {
                        this._submits[e].releaseRender();
                    }
                    var s;
                    for (this._submits.length = 0, this._submits._length = 0, this._submits = null,
                        this._curSubmit = null, this._path = null, this._save = null, e = 0, s = this.meshlist.length; e < s; e++) {
                        this.meshlist[e].destroy();
                    }
                    this.meshlist.length = 0, this.sprite = null, t || (this._targets && this._targets.destroy(),
                        this._targets = null);
                }
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                --ie._contextcount, this.sprite = null, this._releaseMem(t), this._charSubmitCache.destroy(),
                    this._mesh.destroy(), t || (this._targets && this._targets.destroy(), this._targets = null);
            }
        }, {
            key: "clear",
            value: function clear() {
                this._submits || (this._other = se.DEFAULT, this._curMat = p.create(), this._charSubmitCache = new Yt(),
                        this._mesh = Et.getAMesh(this.isMain), this.meshlist.push(this._mesh), this._pathMesh = bt.getAMesh(this.isMain),
                        this.meshlist.push(this._pathMesh), this._triangleMesh = Ct.getAMesh(this.isMain),
                        this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [ct.Create(this)],
                        this._save.length = 10, this._shader2D = new Lt()), this._submitKey.clear(), this._mesh.clearVB(),
                    this._drawCount = 1, this._other = se.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1,
                    this._nBlendType = 0, this._clipRect = ie.MAXCLIPRECT, this._curSubmit = ot.RENDERBASE,
                    ot.RENDERBASE._ref = 16777215, ot.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = at.DEFAULT;
                for (var t = 0, e = this._submits._length; t < e; t++) {
                    this._submits[t].releaseRender();
                }
                this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0],
                    this._save._length = 1;
            }
        }, {
            key: "size",
            value: function size(e, i) {
                this._width == e && this._height == i || (this._width = e, this._height = i, this._targets && (this._targets.destroy(),
                    this._targets = new B(e, i, t.RenderTextureFormat.R8G8B8A8, -1)), this.isMain && (v.mainContext.viewport(0, 0, e, i),
                    D.width = e, D.height = i)), 0 === e && 0 === i && this._releaseMem();
            }
        }, {
            key: "getMatScaleX",
            value: function getMatScaleX() {
                return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(),
                    this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX);
            }
        }, {
            key: "getMatScaleY",
            value: function getMatScaleY() {
                return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(),
                    this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY);
            }
        }, {
            key: "setFillColor",
            value: function setFillColor(t) {
                this._fillColor = t;
            }
        }, {
            key: "getFillColor",
            value: function getFillColor() {
                return this._fillColor;
            }
        }, {
            key: "translate",
            value: function translate(t, e) {
                0 === t && 0 === e || (dt.save(this), this._curMat._bTransform ? (ut.save(this),
                    this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t,
                    this._curMat.ty = e));
            }
        }, {
            key: "save",
            value: function save() {
                this._save[this._save._length++] = ct.Create(this);
            }
        }, {
            key: "restore",
            value: function restore() {
                var t = this._save._length,
                    e = this._nBlendType;
                if (!(t < 1)) {
                    for (var i = t - 1; i >= 0; i--) {
                        var s = this._save[i];
                        if (s.restore(this), s.isSaveMark()) return void(this._save._length = i);
                    }
                    e != this._nBlendType && (this._curSubmit = ot.RENDERBASE);
                }
            }
        }, {
            key: "fillText",
            value: function fillText(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
                ie._textRender.filltext(this, t, e, i, s, r, h, n, a);
            }
        }, {
            key: "drawText",
            value: function drawText(t, e, i, s, r, a) {
                ie._textRender.filltext(this, t, e, i, s, r, null, 0, a);
            }
        }, {
            key: "fillWords",
            value: function fillWords(t, e, i, s, r) {
                ie._textRender.fillWords(this, t, e, i, s, r, null, 0);
            }
        }, {
            key: "strokeWord",
            value: function strokeWord(t, e, i, s, r, a, n) {
                ie._textRender.filltext(this, t, e, i, s, null, r, a, n);
            }
        }, {
            key: "fillBorderText",
            value: function fillBorderText(t, e, i, s, r, a, n, h) {
                ie._textRender.filltext(this, t, e, i, s, r, a, n, h);
            }
        }, {
            key: "fillBorderWords",
            value: function fillBorderWords(t, e, i, s, r, a, n) {
                ie._textRender.fillWords(this, t, e, i, s, r, a, n);
            }
        }, {
            key: "_fast_filltext",
            value: function _fast_filltext(t, e, i, s, r, a, n, h) {
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
                ie._textRender._fast_filltext(this, t, null, e, i, s, r, a, n, h, o);
            }
        }, {
            key: "_fillRect",
            value: function _fillRect(t, e, i, s, r) {
                var a = this._curSubmit,
                    n = a && a._key.submitType === ot.KEY_DRAWTEXTURE && a._key.blendShader === this._nBlendType;
                this._mesh.vertNum + 4 > ie._MAXVERTNUM && (this._mesh = Et.getAMesh(this.isMain),
                        this.meshlist.push(this._mesh), n = !1), n && (n = n && this.isSameClipInfo(a)),
                    this.transformQuad(t, e, i, s, 0, this._curMat, this._transedPoints), this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, Kt.NO_UV, r, !1),
                        n || (a = this._curSubmit = Wt.create(this, this._mesh, V.create(U.TEXTURE2D, 0)),
                            this._submits[this._submits._length++] = a, this._copyClipInfo(a, this._globalClipMatrix),
                            a.shaderValue.textureHost = this._lastTex, a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1,
                            a._renderType = ot.TYPE_TEXTURE), this._curSubmit._numEle += 6, this._mesh.indexNum += 6,
                        this._mesh.vertNum += 4);
            }
        }, {
            key: "fillRect",
            value: function fillRect(t, e, i, s, r) {
                var a = r ? at.create(r) : this._shader2D.fillStyle,
                    n = this.mixRGBandAlpha(a.toInt());
                this._fillRect(t, e, i, s, n);
            }
        }, {
            key: "fillTexture",
            value: function fillTexture(t, e, s, r, a, n, h, o) {
                t._getSource() ? this._fillTexture(t, t.width, t.height, t.uvrect, e, s, r, a, n, h.x, h.y) : this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
            }
        }, {
            key: "_fillTexture",
            value: function _fillTexture(t, e, i, s, r, a, n, h, o, l, _) {
                var c = this._curSubmit;
                this._mesh.vertNum + 4 > ie._MAXVERTNUM && (this._mesh = Et.getAMesh(this.isMain),
                    this.meshlist.push(this._mesh));
                var u = !0,
                    d = !0;
                switch (o) {
                    case "repeat":
                        break;

                    case "repeat-x":
                        d = !1;
                        break;

                    case "repeat-y":
                        u = !1;
                        break;

                    case "no-repeat":
                        u = d = !1;
                }
                var p = this._temp4Points,
                    f = 0,
                    g = 0,
                    m = 0,
                    v = 0,
                    T = 0,
                    x = 0;
                if (l < 0 ? (m = r, f = -l % e / e) : m = r + l, _ < 0 ? (v = a, g = -_ % i / i) : v = a + _,
                    T = r + n, x = a + h, !u && (T = Math.min(T, r + l + e)), !d && (x = Math.min(x, a + _ + i)), !(T < r || x < a || m > T || v > x)) {
                    var y = (T - r - l) / e,
                        E = (x - a - _) / i;
                    if (this.transformQuad(m, v, T - m, x - v, 0, this._curMat, this._transedPoints),
                        p[0] = f, p[1] = g, p[2] = y, p[3] = g, p[4] = y, p[5] = E, p[6] = f, p[7] = E, !this.clipedOff(this._transedPoints)) {
                        var C = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                        this._mesh.addQuad(this._transedPoints, p, C, !0);
                        var b = V.create(U.TEXTURE2D, 0);
                        b.defines.add(U.FILLTEXTURE), b.u_TexRange = s.concat(), c = this._curSubmit = Wt.create(this, this._mesh, b),
                            this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix),
                            c.shaderValue.textureHost = t, c._renderType = ot.TYPE_TEXTURE, this._curSubmit._numEle += 6,
                            this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                    }
                    this.breakNextMerge();
                }
            }
        }, {
            key: "setColorFilter",
            value: function setColorFilter(t) {
                lt.save(this, lt.TYPE_COLORFILTER, this, !0), this._colorFiler = t, this._curSubmit = ot.RENDERBASE;
            }
        }, {
            key: "drawTexture",
            value: function drawTexture(t, e, i, s, r) {
                this._drawTextureM(t, e, i, s, r, null, 1, null);
            }
        }, {
            key: "drawTextures",
            value: function drawTextures(t, e, s, r) {
                if (t._getSource())
                    for (var a = e.length / 2, n = 0, h = t.bitmap.id, o = 0; o < a; o++) {
                        this._inner_drawTexture(t, h, e[n++] + s, e[n++] + r, 0, 0, null, null, 1, !1);
                    } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
            }
        }, {
            key: "_drawTextureAddSubmit",
            value: function _drawTextureAddSubmit(t, e) {
                var i = null;
                i = Wt.create(this, this._mesh, V.create(U.TEXTURE2D, 0)), this._submits[this._submits._length++] = i,
                    i.shaderValue.textureHost = e, i._key.other = t, i._renderType = ot.TYPE_TEXTURE,
                    this._curSubmit = i;
            }
        }, {
            key: "_drawTextureM",
            value: function _drawTextureM(t, e, i, s, r, a, n, h) {
                var o = this.sprite;
                return !!t._getSource(function() {
                    o && o.repaint();
                }) && this._inner_drawTexture(t, t.bitmap.id, e, i, s, r, a, h, n, !1);
            }
        }, {
            key: "_drawRenderTexture",
            value: function _drawRenderTexture(t, e, i, s, r, a, n, h) {
                return this._inner_drawTexture(t, -1, e, i, s, r, a, h, 1, !1);
            }
        }, {
            key: "submitDebugger",
            value: function submitDebugger() {
                this._submits[this._submits._length++] = H.create([], function() {}, this);
            }
        }, {
            key: "_copyClipInfo",
            value: function _copyClipInfo(t, e) {
                var i = t.shaderValue.clipMatDir;
                i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
                var s = t.shaderValue.clipMatPos;
                s[0] = e.tx, s[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1);
            }
        }, {
            key: "isSameClipInfo",
            value: function isSameClipInfo(t) {
                return t.clipInfoID === this._clipInfoID;
            }
        }, {
            key: "_useNewTex2DSubmit",
            value: function _useNewTex2DSubmit(t, e) {
                this._mesh.vertNum + e > ie._MAXVERTNUM && (this._mesh = Et.getAMesh(this.isMain),
                    this.meshlist.push(this._mesh));
                var i = Wt.create(this, this._mesh, V.create(U.TEXTURE2D, 0));
                this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t,
                    this._copyClipInfo(i, this._globalClipMatrix);
            }
        }, {
            key: "_drawTexRect",
            value: function _drawTexRect(t, e, i, s, r) {
                this.transformQuad(t, e, i, s, this._italicDeg, this._curMat, this._transedPoints);
                var a = this._transedPoints;
                a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0,
                    a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0,
                    this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, r, this._fillColor, !0),
                        this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
            }
        }, {
            key: "drawCallOptimize",
            value: function drawCallOptimize(t) {
                return this._charSubmitCache.enable(t, this), t;
            }
        }, {
            key: "_inner_drawTexture",
            value: function _inner_drawTexture(t, e, i, s, r, a, n, h, o, l) {
                var _ = this._curSubmit._key;
                if (h = h || t._uv, _.submitType === ot.KEY_TRIANGLES && _.other === e) {
                    var c = this._drawTexToDrawTri_Vert;
                    c[0] = i, c[1] = s, c[2] = i + r, c[3] = s, c[4] = i + r, c[5] = s + a, c[6] = i,
                        c[7] = s + a, this._drawTriUseAbsMatrix = !0;
                    var u = this._tempUV;
                    return u[0] = h[0], u[1] = h[1], u[2] = h[2], u[3] = h[3], u[4] = h[4], u[5] = h[5],
                        u[6] = h[6], u[7] = h[7], this.drawTriangles(t, 0, 0, c, u, this._drawTexToDrawTri_Index, n, o, null, null),
                        this._drawTriUseAbsMatrix = !1, !0;
                }
                var d = this._mesh,
                    p = this._curSubmit,
                    f = l ? this._charSubmitCache.getPos() : this._transedPoints;
                if (this.transformQuad(i, s, r || t.width, a || t.height, this._italicDeg, n || this._curMat, f),
                    this.drawTexAlign) {
                    var g = Math.round;
                    f[0] = g(f[0]), f[1] = g(f[1]), f[2] = g(f[2]), f[3] = g(f[3]), f[4] = g(f[4]),
                        f[5] = g(f[5]), f[6] = g(f[6]), f[7] = g(f[7]), this.drawTexAlign = !1;
                }
                var m = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
                if (l) return this._charSubmitCache.add(this, t, e, f, h, m), !0;
                this._drawCount++;
                var v = e >= 0 && _.submitType === ot.KEY_DRAWTEXTURE && _.other === e;
                return v && (v = v && this.isSameClipInfo(p)), this._lastTex = t, d.vertNum + 4 > ie._MAXVERTNUM && (d = this._mesh = Et.getAMesh(this.isMain),
                        this.meshlist.push(d), v = !1), d.addQuad(f, h, m, !0), v || (this._submits[this._submits._length++] = this._curSubmit = p = Wt.create(this, d, V.create(U.TEXTURE2D, 0)),
                        p.shaderValue.textureHost = t, p._key.other = e, this._copyClipInfo(p, this._globalClipMatrix)),
                    p._numEle += 6, d.indexNum += 6, d.vertNum += 4, !0;
            }
        }, {
            key: "transform4Points",
            value: function transform4Points(t, e, i) {
                var s = e.tx,
                    r = e.ty,
                    a = e.a,
                    n = e.b,
                    h = e.c,
                    o = e.d,
                    l = t[0],
                    _ = t[1],
                    c = t[2],
                    u = t[3],
                    d = t[4],
                    p = t[5],
                    f = t[6],
                    g = t[7];
                e._bTransform ? (i[0] = l * a + _ * h + s, i[1] = l * n + _ * o + r, i[2] = c * a + u * h + s,
                    i[3] = c * n + u * o + r, i[4] = d * a + p * h + s, i[5] = d * n + p * o + r, i[6] = f * a + g * h + s,
                    i[7] = f * n + g * o + r) : (i[0] = l + s, i[1] = _ + r, i[2] = c + s, i[3] = u + r,
                    i[4] = d + s, i[5] = p + r, i[6] = f + s, i[7] = g + r);
            }
        }, {
            key: "clipedOff",
            value: function clipedOff(t) {
                return this._clipRect.width <= 0 || this._clipRect.height <= 0;
            }
        }, {
            key: "transformQuad",
            value: function transformQuad(t, e, i, s, r, a, n) {
                var h = 0;
                0 != r && (h = Math.tan(r * Math.PI / 180) * s);
                var o = t + i,
                    l = e + s,
                    _ = a.tx,
                    c = a.ty,
                    u = a.a,
                    d = a.b,
                    p = a.c,
                    f = a.d,
                    g = t + h,
                    m = e,
                    v = o + h,
                    T = e,
                    x = o,
                    y = l,
                    E = t,
                    C = l;
                a._bTransform ? (n[0] = g * u + m * p + _, n[1] = g * d + m * f + c, n[2] = v * u + T * p + _,
                    n[3] = v * d + T * f + c, n[4] = x * u + y * p + _, n[5] = x * d + y * f + c, n[6] = E * u + C * p + _,
                    n[7] = E * d + C * f + c) : (n[0] = g + _, n[1] = m + c, n[2] = v + _, n[3] = T + c,
                    n[4] = x + _, n[5] = y + c, n[6] = E + _, n[7] = C + c);
            }
        }, {
            key: "pushRT",
            value: function pushRT() {
                this.addRenderObject(H.create(null, B.pushRT, this));
            }
        }, {
            key: "popRT",
            value: function popRT() {
                this.addRenderObject(H.create(null, B.popRT, this)), this.breakNextMerge();
            }
        }, {
            key: "useRT",
            value: function useRT(t) {
                this.addRenderObject(H.create([t], function(t) {
                    if (!t) throw "error useRT";
                    t.start(), t.clear(0, 0, 0, 0);
                }, this)), this.breakNextMerge();
            }
        }, {
            key: "RTRestore",
            value: function RTRestore(t) {
                this.addRenderObject(H.create([t], function(t) {
                    t.restore();
                }, this)), this.breakNextMerge();
            }
        }, {
            key: "breakNextMerge",
            value: function breakNextMerge() {
                this._curSubmit = ot.RENDERBASE;
            }
        }, {
            key: "_repaintSprite",
            value: function _repaintSprite() {
                this.sprite && this.sprite.repaint();
            }
        }, {
            key: "drawTextureWithTransform",
            value: function drawTextureWithTransform(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                var c = arguments.length > 11 ? arguments[11] : undefined;
                var u, d = this._curMat;
                l && (u = this.globalCompositeOperation, this.globalCompositeOperation = l);
                var f = this._colorFiler;
                if (_ && this.setColorFilter(_), !a) return this._drawTextureM(t, e + n, i + h, s, r, d, o, c),
                    l && (this.globalCompositeOperation = u), void(_ && this.setColorFilter(f));
                var g = this._tmpMatrix;
                g.a = a.a, g.b = a.b, g.c = a.c, g.d = a.d, g.tx = a.tx + n, g.ty = a.ty + h, g._bTransform = a._bTransform,
                    a && d._bTransform ? (p.mul(g, d, g), (a = g)._bTransform = !0) : (g.tx += d.tx,
                        g.ty += d.ty, a = g), this._drawTextureM(t, e, i, s, r, a, o, c), l && (this.globalCompositeOperation = u),
                    _ && this.setColorFilter(f);
            }
        }, {
            key: "_flushToTarget",
            value: function _flushToTarget(t, e) {
                D.worldScissorTest = !1;
                var i = m.instance;
                i.disable(i.SCISSOR_TEST);
                var s = D.worldAlpha,
                    r = D.worldMatrix4,
                    a = D.worldMatrix;
                D.worldMatrix = p.EMPTY, D.restoreTempArray(), D.worldMatrix4 = D.TEMPMAT4_ARRAY,
                    D.worldAlpha = 1, L.activeShader = null, e.start(), t._submits._length > 0 && e.clear(0, 0, 0, 0),
                    t._curSubmit = ot.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = ot.RENDERBASE,
                    L.activeShader = null, D.worldAlpha = s, D.worldMatrix4 = r, D.worldMatrix = a;
            }
        }, {
            key: "drawCanvas",
            value: function drawCanvas(t, e, i, s, r) {
                if (t) {
                    var a, n = t.context;
                    if (n._targets) n._submits._length > 0 && (a = H.create([n, n._targets], this._flushToTarget, this),
                            this._submits[this._submits._length++] = a), this._drawRenderTexture(n._targets, e, i, s, r, null, 1, B.flipyuv),
                        this._curSubmit = ot.RENDERBASE;
                    else {
                        var h = t;
                        h.touches && h.touches.forEach(function(t) {
                                t.touch();
                            }), a = Gt.create(t, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = a,
                            a._key.clear();
                        var o = a._matrix;
                        this._curMat.copyTo(o);
                        var l = o.tx,
                            _ = o.ty;
                        o.tx = o.ty = 0, o.transformPoint(f.TEMP.setTo(e, i)), o.translate(f.TEMP.x + l, f.TEMP.y + _),
                            p.mul(h.invMat, o, o), this._curSubmit = ot.RENDERBASE;
                    }
                }
            }
        }, {
            key: "drawTarget",
            value: function drawTarget(t, e, i, s, r, a, n) {
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : -1;
                if (this._drawCount++, this._mesh.vertNum + 4 > ie._MAXVERTNUM && (this._mesh = Et.getAMesh(this.isMain),
                        this.meshlist.push(this._mesh)), this.transformQuad(e, i, s, r, 0, a || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                    this._mesh.addQuad(this._transedPoints, h || Kt.DEF_UV, 4294967295, !0);
                    var l = this._curSubmit = kt.create(this, this._mesh, n, t);
                    return l.blendType = -1 == o ? this._nBlendType : o, this._copyClipInfo(l, this._globalClipMatrix),
                        l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l,
                        this._curSubmit = ot.RENDERBASE, !0;
                }
                return this._curSubmit = ot.RENDERBASE, !1;
            }
        }, {
            key: "drawTriangles",
            value: function drawTriangles(t, e, s, r, a, n, h, o, l, _) {
                var c = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 4294967295;
                if (t._getSource()) {
                    var u = null;
                    _ && (u = this.globalCompositeOperation, this.globalCompositeOperation = _), this._drawCount++;
                    var d = this._tmpMatrix,
                        f = this._triangleMesh,
                        g = null,
                        m = !1;
                    l && (g = this._colorFiler, this._colorFiler = l, this._curSubmit = ot.RENDERBASE,
                        m = g != l);
                    var v = t.bitmap,
                        T = this._curSubmit._key,
                        x = T.submitType === ot.KEY_TRIANGLES && T.other === v.id && T.blendShader == this._nBlendType;
                    if (f.vertNum + r.length / 2 > ie._MAXVERTNUM && (f = this._triangleMesh = Ct.getAMesh(this.isMain),
                            this.meshlist.push(f), x = !1), !x) {
                        var y = this._curSubmit = Wt.create(this, f, V.create(U.TEXTURE2D, 0));
                        y.shaderValue.textureHost = t, y._renderType = ot.TYPE_TEXTURE, y._key.submitType = ot.KEY_TRIANGLES,
                            y._key.other = v.id, this._copyClipInfo(y, this._globalClipMatrix), this._submits[this._submits._length++] = y;
                    }
                    var E = this._mixRGBandAlpha(c, this._shader2D.ALPHA * o);
                    this._drawTriUseAbsMatrix ? f.addData(r, a, n, h, E) : (h ? (d.a = h.a, d.b = h.b,
                            d.c = h.c, d.d = h.d, d.tx = h.tx + e, d.ty = h.ty + s) : (d.a = 1, d.b = 0, d.c = 0,
                            d.d = 1, d.tx = e, d.ty = s), p.mul(d, this._curMat, d), f.addData(r, a, n, d || this._curMat, E)),
                        this._curSubmit._numEle += n.length, m && (this._colorFiler = g, this._curSubmit = ot.RENDERBASE),
                        _ && (this.globalCompositeOperation = u);
                } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
            }
        }, {
            key: "transform",
            value: function transform(t, e, i, s, r, a) {
                ut.save(this), p.mul(p.TEMP.setTo(t, e, i, s, r, a), this._curMat, this._curMat),
                    this._curMat._checkTransform();
            }
        }, {
            key: "_transformByMatrix",
            value: function _transformByMatrix(t, e, i) {
                t.setTranslate(e, i), p.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0),
                    this._curMat._bTransform = !0;
            }
        }, {
            key: "setTransformByMatrix",
            value: function setTransformByMatrix(t) {
                t.copyTo(this._curMat);
            }
        }, {
            key: "rotate",
            value: function rotate(t) {
                ut.save(this), this._curMat.rotateEx(t);
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                ut.save(this), this._curMat.scaleEx(t, e);
            }
        }, {
            key: "clipRect",
            value: function clipRect(t, e, i, s) {
                _t.save(this), this._clipRect == ie.MAXCLIPRECT ? this._clipRect = new g(t, e, i, s) : (this._clipRect.width = i,
                        this._clipRect.height = s, this._clipRect.x = t, this._clipRect.y = e), this._clipID_Gen++,
                    this._clipID_Gen %= 1e4, this._clipInfoID = this._clipID_Gen;
                var r = this._globalClipMatrix,
                    a = r.tx,
                    n = r.ty,
                    h = a + r.a,
                    o = n + r.d;
                if (this._clipRect.width >= ie._MAXSIZE ? (r.a = r.d = ie._MAXSIZE, r.b = r.c = r.tx = r.ty = 0) : (this._curMat._bTransform ? (r.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx,
                        r.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty,
                        r.a = this._clipRect.width * this._curMat.a, r.b = this._clipRect.width * this._curMat.b,
                        r.c = this._clipRect.height * this._curMat.c, r.d = this._clipRect.height * this._curMat.d) : (r.tx = this._clipRect.x + this._curMat.tx,
                        r.ty = this._clipRect.y + this._curMat.ty, r.a = this._clipRect.width, r.b = r.c = 0,
                        r.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), r.a > 0 && r.d > 0) {
                    var l = r.tx + r.a,
                        _ = r.ty + r.d;
                    l <= a || _ <= n || r.tx >= h || r.ty >= o ? (r.a = -.1, r.d = -.1) : (r.tx < a && (r.a -= a - r.tx,
                            r.tx = a), l > h && (r.a -= l - h), r.ty < n && (r.d -= n - r.ty, r.ty = n), _ > o && (r.d -= _ - o),
                        r.a <= 0 && (r.a = -.1), r.d <= 0 && (r.d = -.1));
                }
            }
        }, {
            key: "drawMesh",
            value: function drawMesh(t, e, i, s, r, a, n, h) {
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
            }
        }, {
            key: "addRenderObject",
            value: function addRenderObject(t) {
                this._submits[this._submits._length++] = t;
            }
        }, {
            key: "submitElement",
            value: function submitElement(t, e) {
                this.isMain;
                var i = this._submits,
                    s = i._length;
                e < 0 && (e = i._length);
                for (var r = ot.RENDERBASE; t < e;) {
                    this._renderNextSubmitIndex = t + 1, i[t] !== ot.RENDERBASE ? (ot.preRender = r,
                        t += (r = i[t]).renderSubmit()) : t++;
                }
                return s;
            }
        }, {
            key: "flush",
            value: function flush() {
                this._clipID_Gen = 0;
                var t = this.submitElement(0, this._submits._length);
                this._path && this._path.reset(), Dt.instance && Dt.getInstance().reset(), this._curSubmit = ot.RENDERBASE;
                for (var e = 0, i = this.meshlist.length; e < i; e++) {
                    var s = this.meshlist[e];
                    s.canReuse ? s.releaseMesh() : s.destroy();
                }
                return this.meshlist.length = 0, this._mesh = Et.getAMesh(this.isMain), this._pathMesh = bt.getAMesh(this.isMain),
                    this._triangleMesh = Ct.getAMesh(this.isMain), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh),
                    this._flushCnt++, this._flushCnt % 60 == 0 && this.isMain && ee.textRenderInst && ee.textRenderInst.GC(),
                    t;
            }
        }, {
            key: "beginPath",
            value: function beginPath() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                this._getPath().beginPath(t);
            }
        }, {
            key: "closePath",
            value: function closePath() {
                this._path.closePath();
            }
        }, {
            key: "addPath",
            value: function addPath(t, e, i, s, r) {
                for (var a = 0, n = 0, h = t.length / 2; n < h; n++) {
                    var o = t[a] + s,
                        l = t[a + 1] + r;
                    t[a] = o, t[a + 1] = l, a += 2;
                }
                this._getPath().push(t, i);
            }
        }, {
            key: "fill",
            value: function fill() {
                var t = this._curMat,
                    e = this._getPath(),
                    i = this._curSubmit,
                    s = i._key.submitType === ot.KEY_VG && i._key.blendShader === this._nBlendType;
                s && (s = s && this.isSameClipInfo(i)), s || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var r, a = this.mixRGBandAlpha(this.fillStyle.toInt()), n = 0, h = 0, o = e.paths.length; h < o; h++) {
                    var l = e.paths[h],
                        _ = l.path.length / 2;
                    if (!(_ < 3 || 3 == _ && !l.convex)) {
                        var c, u, d, p, f = l.path.concat(),
                            g = 0;
                        if (t._bTransform)
                            for (g = 0; g < _; g++) {
                                u = (c = g << 1) + 1, d = f[c], p = f[u], f[c] = t.a * d + t.c * p + t.tx, f[u] = t.b * d + t.d * p + t.ty;
                            } else
                                for (g = 0; g < _; g++) {
                                    u = (c = g << 1) + 1, d = f[c], p = f[u], f[c] = d + t.tx, f[u] = p + t.ty;
                                }
                        this._pathMesh.vertNum + _ > ie._MAXVERTNUM && (this._curSubmit._numEle += n, n = 0,
                            this._pathMesh = bt.getAMesh(this.isMain), this._curSubmit = this.addVGSubmit(this._pathMesh));
                        var m = this._pathMesh.vertNum;
                        if (l.convex) {
                            var v = _ - 2;
                            r = new Array(3 * v);
                            for (var T = 0, x = 0; x < v; x++) {
                                r[T++] = m, r[T++] = x + 1 + m, r[T++] = x + 2 + m;
                            }
                        } else if (r = Ot.earcut(f, null, 2), m > 0)
                            for (var y = 0; y < r.length; y++) {
                                r[y] += m;
                            }
                        this._pathMesh.addVertAndIBToMesh(this, f, a, r), n += r.length;
                    }
                }
                this._curSubmit._numEle += n;
            }
        }, {
            key: "addVGSubmit",
            value: function addVGSubmit(t) {
                var e = Ut.createShape(this, t, 0, V.create(U.PRIMITIVE, 0));
                return e._key.submitType = ot.KEY_VG, this._submits[this._submits._length++] = e,
                    this._copyClipInfo(e, this._globalClipMatrix), e;
            }
        }, {
            key: "stroke",
            value: function stroke() {
                if (this.lineWidth > 0) {
                    var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        e = this._getPath(),
                        i = this._curSubmit,
                        s = i._key.submitType === ot.KEY_VG && i._key.blendShader === this._nBlendType;
                    s && (s = s && this.isSameClipInfo(i)), s || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                    for (var r = 0, a = 0, n = e.paths.length; a < n; a++) {
                        var h = e.paths[a];
                        if (!(h.path.length <= 0)) {
                            var o = [],
                                l = [],
                                _ = 2 * h.path.length;
                            if (!(_ < 2)) {
                                this._pathMesh.vertNum + _ > ie._MAXVERTNUM && (this._curSubmit._numEle += r, r = 0,
                                        this._pathMesh = bt.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)),
                                    Bt.createLine2(h.path, o, this.lineWidth, this._pathMesh.vertNum, l, h.loop);
                                var c, u, d, p, f = l.length / 2,
                                    g = this._curMat,
                                    m = 0;
                                if (g._bTransform)
                                    for (m = 0; m < f; m++) {
                                        u = (c = m << 1) + 1, d = l[c], p = l[u], l[c] = g.a * d + g.c * p + g.tx, l[u] = g.b * d + g.d * p + g.ty;
                                    } else
                                        for (m = 0; m < f; m++) {
                                            u = (c = m << 1) + 1, d = l[c], p = l[u], l[c] = d + g.tx, l[u] = p + g.ty;
                                        }
                                this._pathMesh.addVertAndIBToMesh(this, l, t, o), r += o.length;
                            }
                        }
                    }
                    this._curSubmit._numEle += r;
                }
            }
        }, {
            key: "moveTo",
            value: function moveTo(t, e) {
                var i = this._getPath();
                i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
            }
        }, {
            key: "lineTo",
            value: function lineTo(t, e) {
                var i = this._getPath();
                Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t,
                    i._lastOriY = e, i.addPoint(t, e));
            }
        }, {
            key: "arcTo",
            value: function arcTo(t, e, i, s, r) {
                var a = 0,
                    n = 0,
                    h = 0,
                    o = this._path._lastOriX - t,
                    l = this._path._lastOriY - e,
                    _ = Math.sqrt(o * o + l * l);
                if (!(_ <= 1e-6)) {
                    var c = o / _,
                        u = l / _,
                        d = i - t,
                        p = s - e,
                        f = d * d + p * p,
                        g = Math.sqrt(f);
                    if (!(g <= 1e-6)) {
                        var m = d / g,
                            v = p / g,
                            T = c + m,
                            x = u + v,
                            y = Math.sqrt(T * T + x * x);
                        if (!(y <= 1e-6)) {
                            var E = T / y,
                                C = x / y,
                                b = Math.acos(E * c + C * u),
                                A = Math.PI / 2 - b,
                                R = (_ = r / Math.tan(A)) * c + t,
                                w = _ * u + e,
                                S = Math.sqrt(_ * _ + r * r),
                                M = t + E * S,
                                I = e + C * S,
                                P = 0,
                                L = 0;
                            if (c * v - u * m >= 0) {
                                var D = 2 * A / ie.SEGNUM;
                                P = Math.sin(D), L = Math.cos(D);
                            } else D = 2 * -A / ie.SEGNUM, P = Math.sin(D), L = Math.cos(D);
                            var B = this._path._lastOriX,
                                F = this._path._lastOriY,
                                O = R,
                                N = w;
                            (Math.abs(O - this._path._lastOriX) > .1 || Math.abs(N - this._path._lastOriY) > .1) && (n = O,
                                h = N, B = O, F = N, this._path._lastOriX = n, this._path._lastOriY = h, this._path.addPoint(n, h));
                            var U = R - M,
                                G = w - I;
                            for (a = 0; a < ie.SEGNUM; a++) {
                                var k = U * L + G * P,
                                    W = -U * P + G * L;
                                n = k + M, h = W + I, (Math.abs(B - n) > .1 || Math.abs(F - h) > .1) && (this._path._lastOriX = n,
                                    this._path._lastOriY = h, this._path.addPoint(n, h), B = n, F = h), U = k, G = W;
                            }
                        }
                    }
                }
            }
        }, {
            key: "arc",
            value: function arc(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
                var h, o, l = 0,
                    _ = 0,
                    c = 0,
                    u = 0,
                    d = 0;
                if (_ = r - s, a) {
                    if (Math.abs(_) >= 2 * Math.PI) _ = 2 * -Math.PI;
                    else
                        for (; _ > 0;) {
                            _ -= 2 * Math.PI;
                        }
                } else if (Math.abs(_) >= 2 * Math.PI) _ = 2 * Math.PI;
                else
                    for (; _ < 0;) {
                        _ += 2 * Math.PI;
                    }
                var p = this.getMatScaleX(),
                    f = this.getMatScaleY(),
                    g = i * (p > f ? p : f),
                    m = 2 * Math.PI * g;
                o = 0 | Math.max(m / 10, 10);
                var v = this._getPath();
                for (h = 0; h <= o; h++) {
                    l = s + _ * (h / o), c = Math.cos(l), d = e + Math.sin(l) * i, (u = t + c * i) == this._path._lastOriX && d == this._path._lastOriY || v.addPoint(u, d);
                }
                c = Math.cos(r), d = e + Math.sin(r) * i, (u = t + c * i) == this._path._lastOriX && d == this._path._lastOriY || v.addPoint(u, d);
            }
        }, {
            key: "quadraticCurveTo",
            value: function quadraticCurveTo(t, e, i, s) {
                for (var r = st.I.getBezierPoints([this._path._lastOriX, this._path._lastOriY, t, e, i, s], 30, 2), a = 0, n = r.length / 2; a < n; a++) {
                    this.lineTo(r[2 * a], r[2 * a + 1]);
                }
                this.lineTo(i, s);
            }
        }, {
            key: "mixRGBandAlpha",
            value: function mixRGBandAlpha(t) {
                return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
            }
        }, {
            key: "_mixRGBandAlpha",
            value: function _mixRGBandAlpha(t, e) {
                if (e >= 1) return t;
                var i = (4278190080 & t) >>> 24;
                return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
            }
        }, {
            key: "strokeRect",
            value: function strokeRect(t, e, i, s, r) {
                if (this.lineWidth > 0) {
                    var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        n = this.lineWidth / 2;
                    this._fillRect(t - n, e - n, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - n, e - n + s, i + this.lineWidth, this.lineWidth, a),
                        this._fillRect(t - n, e + n, this.lineWidth, s - this.lineWidth, a), this._fillRect(t - n + i, e + n, this.lineWidth, s - this.lineWidth, a);
                }
            }
        }, {
            key: "clip",
            value: function clip() {}
        }, {
            key: "drawParticle",
            value: function drawParticle(t, e, i) {
                i.x = t, i.y = e, this._submits[this._submits._length++] = i;
            }
        }, {
            key: "_getPath",
            value: function _getPath() {
                return this._path || (this._path = new nt());
            }
        }, {
            key: "_fillTexture_h",
            value: function _fillTexture_h(t, e, i, s, r, a, n, h) {
                s <= 0 && console.error("_fillTexture_h error: oriw must>0");
                for (var o = a, l = Math.floor(h / s), _ = h % s, c = 0; c < l; c++) {
                    this._inner_drawTexture(t, e, o, n, s, r, this._curMat, i, 1, !1), o += s;
                }
                if (_ > 0) {
                    var u = i[2] - i[0],
                        d = i[0] + u * (_ / s),
                        p = ie.tmpuv1;
                    p[0] = i[0], p[1] = i[1], p[2] = d, p[3] = i[3], p[4] = d, p[5] = i[5], p[6] = i[6],
                        p[7] = i[7], this._inner_drawTexture(t, e, o, n, _, r, this._curMat, p, 1, !1);
                }
            }
        }, {
            key: "_fillTexture_v",
            value: function _fillTexture_v(t, e, i, s, r, a, n, h) {
                r <= 0 && console.error("_fillTexture_v error: orih must>0");
                for (var o = n, l = Math.floor(h / r), _ = h % r, c = 0; c < l; c++) {
                    this._inner_drawTexture(t, e, a, o, s, r, this._curMat, i, 1, !1), o += r;
                }
                if (_ > 0) {
                    var u = i[7] - i[1],
                        d = i[1] + u * (_ / r),
                        p = ie.tmpuv1;
                    p[0] = i[0], p[1] = i[1], p[2] = i[2], p[3] = i[3], p[4] = i[4], p[5] = d, p[6] = i[6],
                        p[7] = d, this._inner_drawTexture(t, e, a, o, s, _, this._curMat, p, 1, !1);
                }
            }
        }, {
            key: "drawTextureWithSizeGrid",
            value: function drawTextureWithSizeGrid(t, e, i, s, r, a, n, h) {
                if (t._getSource()) {
                    e += n, i += h;
                    var o = t.uv,
                        l = t.bitmap.width,
                        _ = t.bitmap.height,
                        c = a[0],
                        u = a[3],
                        d = a[1],
                        p = a[2],
                        f = a[4],
                        g = !1;
                    s == l && (u = d = 0), r == _ && (c = p = 0);
                    var m = c / _,
                        v = u / l,
                        T = d / l,
                        x = p / _;
                    if (u + d > s) {
                        var y = s;
                        g = !0, s = u + d, this.save(), this.clipRect(0 + e, 0 + i, y, r);
                    }
                    var E = t.bitmap.id,
                        C = this._curMat,
                        b = this._tempUV,
                        A = o[0],
                        R = o[1],
                        w = o[4],
                        S = o[5],
                        M = A,
                        I = R,
                        P = w,
                        L = S;
                    if (u && c && (P = A + v, L = R + m, b[0] = A, b[1] = R, b[2] = P, b[3] = R, b[4] = P,
                            b[5] = L, b[6] = A, b[7] = L, this._inner_drawTexture(t, E, e, i, u, c, C, b, 1, !1)),
                        d && c && (M = w - T, I = R, P = w, L = R + m, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, this._inner_drawTexture(t, E, s - d + e, 0 + i, d, c, C, b, 1, !1)),
                        u && p && (M = A, I = S - x, P = A + v, L = S, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, this._inner_drawTexture(t, E, 0 + e, r - p + i, u, p, C, b, 1, !1)),
                        d && p && (M = w - T, I = S - x, P = w, L = S, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, this._inner_drawTexture(t, E, s - d + e, r - p + i, d, p, C, b, 1, !1)),
                        c && (M = A + v, I = R, P = w - T, L = R + m, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, f ? this._fillTexture_h(t, E, b, t.width - u - d, c, u + e, i, s - u - d) : this._inner_drawTexture(t, E, u + e, i, s - u - d, c, C, b, 1, !1)),
                        p && (M = A + v, I = S - x, P = w - T, L = S, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, f ? this._fillTexture_h(t, E, b, t.width - u - d, p, u + e, r - p + i, s - u - d) : this._inner_drawTexture(t, E, u + e, r - p + i, s - u - d, p, C, b, 1, !1)),
                        u && (M = A, I = R + m, P = A + v, L = S - x, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, f ? this._fillTexture_v(t, E, b, u, t.height - c - p, e, c + i, r - c - p) : this._inner_drawTexture(t, E, e, c + i, u, r - c - p, C, b, 1, !1)),
                        d && (M = w - T, I = R + m, P = w, L = S - x, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                            b[4] = P, b[5] = L, b[6] = M, b[7] = L, f ? this._fillTexture_v(t, E, b, d, t.height - c - p, s - d + e, c + i, r - c - p) : this._inner_drawTexture(t, E, s - d + e, c + i, d, r - c - p, C, b, 1, !1)),
                        M = A + v, I = R + m, P = w - T, L = S - x, b[0] = M, b[1] = I, b[2] = P, b[3] = I,
                        b[4] = P, b[5] = L, b[6] = M, b[7] = L, f) {
                        var D = ie.tmpUVRect;
                        D[0] = M, D[1] = I, D[2] = P - M, D[3] = L - I, this._fillTexture(t, t.width - u - d, t.height - c - p, D, u + e, c + i, s - u - d, r - c - p, "repeat", 0, 0);
                    } else this._inner_drawTexture(t, E, u + e, c + i, s - u - d, r - c - p, C, b, 1, !1);
                    g && this.restore();
                }
            }
        }, {
            key: "lineJoin",
            get: function get() {
                return "";
            },
            set: function set(t) {}
        }, {
            key: "lineCap",
            get: function get() {
                return "";
            },
            set: function set(t) {}
        }, {
            key: "miterLimit",
            get: function get() {
                return "";
            },
            set: function set(t) {}
        }, {
            key: "asBitmap",
            set: function set(e) {
                if (e) {
                    var _e2 = this._targets;
                    if (!this._width || !this._height) throw Error("asBitmap no size!");
                    _e2 && _e2.width == this._width && _e2.height == this._height || (_e2 && _e2.destroy(),
                        this._targets = new B(this._width, this._height, t.RenderTextureFormat.R8G8B8A8, -1));
                } else this._targets && this._targets.destroy(), this._targets = null;
            }
        }, {
            key: "fillStyle",
            set: function set(t) {
                this._shader2D.fillStyle.equal(t) || (lt.save(this, lt.TYPE_FILESTYLE, this._shader2D, !1),
                    this._shader2D.fillStyle = at.create(t), this._submitKey.other = -this._shader2D.fillStyle.toInt());
            },
            get: function get() {
                return this._shader2D.fillStyle;
            }
        }, {
            key: "globalAlpha",
            set: function set(t) {
                (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (lt.save(this, lt.TYPE_ALPHA, this._shader2D, !1),
                    this._shader2D.ALPHA = t);
            },
            get: function get() {
                return this._shader2D.ALPHA;
            }
        }, {
            key: "textAlign",
            set: function set(t) {
                this._other.textAlign === t || (this._other = this._other.make(), lt.save(this, lt.TYPE_TEXTALIGN, this._other, !1),
                    this._other.textAlign = t);
            },
            get: function get() {
                return this._other.textAlign;
            }
        }, {
            key: "textBaseline",
            set: function set(t) {
                this._other.textBaseline === t || (this._other = this._other.make(), lt.save(this, lt.TYPE_TEXTBASELINE, this._other, !1),
                    this._other.textBaseline = t);
            },
            get: function get() {
                return this._other.textBaseline;
            }
        }, {
            key: "globalCompositeOperation",
            set: function set(t) {
                var e = O.TOINT[t];
                null == e || this._nBlendType === e || (lt.save(this, lt.TYPE_GLOBALCOMPOSITEOPERATION, this, !0),
                    this._curSubmit = ot.RENDERBASE, this._nBlendType = e);
            },
            get: function get() {
                return O.NAMES[this._nBlendType];
            }
        }, {
            key: "strokeStyle",
            set: function set(t) {
                this._shader2D.strokeStyle.equal(t) || (lt.save(this, lt.TYPE_STROKESTYLE, this._shader2D, !1),
                    this._shader2D.strokeStyle = at.create(t), this._submitKey.other = -this._shader2D.strokeStyle.toInt());
            },
            get: function get() {
                return this._shader2D.strokeStyle;
            }
        }, {
            key: "lineWidth",
            set: function set(t) {
                this._other.lineWidth === t || (this._other = this._other.make(), lt.save(this, lt.TYPE_LINEWIDTH, this._other, !1),
                    this._other.lineWidth = t);
            },
            get: function get() {
                return this._other.lineWidth;
            }
        }, {
            key: "font",
            set: function set(t) {
                this._other = this._other.make(), lt.save(this, lt.TYPE_FONT, this._other, !1);
            }
        }, {
            key: "canvas",
            get: function get() {
                return this._canvas;
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                ie.MAXCLIPRECT = new g(0, 0, ie._MAXSIZE, ie._MAXSIZE), se.DEFAULT = new se();
            }
        }, {
            key: "set2DRenderConfig",
            value: function set2DRenderConfig() {
                var t = m.instance;
                v.setBlend(t, !0), v.setBlendEquation(t, t.FUNC_ADD), O.activeBlendFunction = null,
                    v.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA), v.setDepthTest(t, !1), v.setCullFace(t, !1),
                    v.setDepthMask(t, !0), v.setFrontFace(t, t.CCW), t.viewport(0, 0, D.width, D.height);
            }
        }]);
        return ie;
    }();
    ie.ENUM_TEXTALIGN_DEFAULT = 0, ie.ENUM_TEXTALIGN_CENTER = 1, ie.ENUM_TEXTALIGN_RIGHT = 2,
        ie._SUBMITVBSIZE = 32e3, ie._MAXSIZE = 99999999, ie._MAXVERTNUM = 65535, ie.MAXCLIPRECT = null,
        ie._COUNT = 0, ie.SEGNUM = 32, ie._contextcount = 0, ie.PI2 = 2 * Math.PI, ie._textRender = null,
        ie.tmpuv1 = [0, 0, 0, 0, 0, 0, 0, 0], ie.tmpUV = [0, 0, 0, 0, 0, 0, 0, 0], ie.tmpUVRect = [0, 0, 0, 0];
    var se = /* */ function() {
        function se() {
            _classCallCheck(this, se);
            this.lineWidth = 1;
        }
        _createClass(se, [{
            key: "clear",
            value: function clear() {
                this.lineWidth = 1, this.textAlign = this.textBaseline = null;
            }
        }, {
            key: "make",
            value: function make() {
                return this === se.DEFAULT ? new se() : this;
            }
        }]);
        return se;
    }();
    var re = /* */ function() {
        function re() {
            _classCallCheck(this, re);
        }
        _createClass(re, null, [{
            key: "_uint8ArraySlice",
            value: function _uint8ArraySlice() {
                for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) {
                    e[i] = this[i];
                }
                return e;
            }
        }, {
            key: "_float32ArraySlice",
            value: function _float32ArraySlice() {
                for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) {
                    e[i] = this[i];
                }
                return e;
            }
        }, {
            key: "_uint16ArraySlice",
            value: function _uint16ArraySlice() {
                var e, i, s;
                if (0 === arguments.length)
                    for (e = this.length, i = new Uint16Array(e), s = 0; s < e; s++) {
                        i[s] = this[s];
                    } else if (2 === arguments.length) {
                        var r = arguments.length <= 0 ? undefined : arguments[0],
                            a = arguments.length <= 1 ? undefined : arguments[1];
                        if (a > r)
                            for (e = a - r, i = new Uint16Array(e), s = r; s < a; s++) {
                                i[s - r] = this[s];
                            } else i = new Uint16Array(0);
                    }
                return i;
            }
        }, {
            key: "_nativeRender_enable",
            value: function _nativeRender_enable() {}
        }, {
            key: "enable",
            value: function enable() {
                return !0;
            }
        }, {
            key: "inner_enable",
            value: function inner_enable() {
                return Float32Array.prototype.slice || (Float32Array.prototype.slice = re._float32ArraySlice),
                    Uint16Array.prototype.slice || (Uint16Array.prototype.slice = re._uint16ArraySlice),
                    Uint8Array.prototype.slice || (Uint8Array.prototype.slice = re._uint8ArraySlice), !0;
            }
        }, {
            key: "onStageResize",
            value: function onStageResize(t, e) {
                null != v.mainContext && (v.mainContext.viewport(0, 0, t, e), D.width = t, D.height = e);
            }
        }]);
        return re;
    }();
    re._isWebGL2 = !1, re.isNativeRender_enable = !1;
    ! function() {
        var t = {};

        function synthesizeGLError(e, i) {
            var s;
            t[e] = !0, void 0 !== i && (s = i, window.console && window.console.error && window.console.error(s));
        }
        var e = function WebGLVertexArrayObjectOES(t) {
            var e = t.gl;
            this.ext = t, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null,
                this.attribs = new Array(t.maxVertexAttribs);
            for (var i = 0; i < this.attribs.length; i++) {
                var s = new WebGLVertexArrayObjectOES.VertexAttrib(e);
                this.attribs[i] = s;
            }
            this.maxAttrib = 0;
        };
        (e.VertexAttrib = function(t) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1,
                this.stride = 16, this.offset = 0, this.cached = "", this.recache();
        }).prototype.recache = function() {
            this.cached = [this.size, this.type, this.normalized, this.stride, this.offset].join(":");
        };
        var i = function i(e) {
            var i = this;
            this.gl = e,
                function(e) {
                    var i = e.getError;
                    e.getError = function() {
                        var s;
                        do {
                            (s = i.apply(e)) != e.NO_ERROR && (t[s] = !0);
                        } while (s != e.NO_ERROR);
                        for (var r in t) {
                            if (t[r]) return delete t[r], parseInt(r);
                        }
                        return e.NO_ERROR;
                    };
                }(e);
            var s = this.original = {
                getParameter: e.getParameter,
                enableVertexAttribArray: e.enableVertexAttribArray,
                disableVertexAttribArray: e.disableVertexAttribArray,
                bindBuffer: e.bindBuffer,
                getVertexAttrib: e.getVertexAttrib,
                vertexAttribPointer: e.vertexAttribPointer
            };
            e.getParameter = function(t) {
                    return t == i.VERTEX_ARRAY_BINDING_OES ? i.currentVertexArrayObject == i.defaultVertexArrayObject ? null : i.currentVertexArrayObject : s.getParameter.apply(this, arguments);
                }, e.enableVertexAttribArray = function(t) {
                    var e = i.currentVertexArrayObject;
                    return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !0, s.enableVertexAttribArray.apply(this, arguments);
                }, e.disableVertexAttribArray = function(t) {
                    var e = i.currentVertexArrayObject;
                    return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !1, s.disableVertexAttribArray.apply(this, arguments);
                }, e.bindBuffer = function(t, r) {
                    switch (t) {
                        case e.ARRAY_BUFFER:
                            i.currentArrayBuffer = r;
                            break;

                        case e.ELEMENT_ARRAY_BUFFER:
                            i.currentVertexArrayObject.elementArrayBuffer = r;
                    }
                    return s.bindBuffer.apply(this, arguments);
                }, e.getVertexAttrib = function(t, r) {
                    var a = i.currentVertexArrayObject.attribs[t];
                    switch (r) {
                        case e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                            return a.buffer;

                        case e.VERTEX_ATTRIB_ARRAY_ENABLED:
                            return a.enabled;

                        case e.VERTEX_ATTRIB_ARRAY_SIZE:
                            return a.size;

                        case e.VERTEX_ATTRIB_ARRAY_STRIDE:
                            return a.stride;

                        case e.VERTEX_ATTRIB_ARRAY_TYPE:
                            return a.type;

                        case e.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                            return a.normalized;

                        default:
                            return s.getVertexAttrib.apply(this, arguments);
                    }
                }, e.vertexAttribPointer = function(t, e, r, a, n, h) {
                    var o = i.currentVertexArrayObject;
                    o.maxAttrib = Math.max(o.maxAttrib, t);
                    var l = o.attribs[t];
                    return l.buffer = i.currentArrayBuffer, l.size = e, l.type = r, l.normalized = a,
                        l.stride = n, l.offset = h, l.recache(), s.vertexAttribPointer.apply(this, arguments);
                }, e.instrumentExtension && e.instrumentExtension(this, "OES_vertex_array_object"),
                e.canvas.addEventListener("webglcontextrestored", function() {
                    var t;
                    t = "OESVertexArrayObject emulation library context restored", window.console && window.console.log && window.console.log(t),
                        i.reset_();
                }, !0), this.reset_();
        };
        i.prototype.VERTEX_ARRAY_BINDING_OES = 34229, i.prototype.reset_ = function() {
            if (void 0 !== this.vertexArrayObjects)
                for (var t = 0; t < this.vertexArrayObjects.length; ++t) {
                    this.vertexArrayObjects.isAlive = !1;
                }
            var i = this.gl;
            this.maxVertexAttribs = i.getParameter(i.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new e(this),
                this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [this.defaultVertexArrayObject],
                this.bindVertexArrayOES(null);
        }, i.prototype.createVertexArrayOES = function() {
            var t = new e(this);
            return this.vertexArrayObjects.push(t), t;
        }, i.prototype.deleteVertexArrayOES = function(t) {
            t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1),
                this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
        }, i.prototype.isVertexArrayOES = function(t) {
            return !!(t && t instanceof e && t.hasBeenBound && t.ext == this);
        }, i.prototype.bindVertexArrayOES = function(t) {
            var e = this.gl;
            if (!t || t.isAlive) {
                var i = this.original,
                    s = this.currentVertexArrayObject;
                this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                var r = this.currentVertexArrayObject;
                if (s != r) {
                    s && r.elementArrayBuffer == s.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, r.elementArrayBuffer);
                    for (var a = this.currentArrayBuffer, n = Math.max(s ? s.maxAttrib : 0, r.maxAttrib), h = 0; h <= n; h++) {
                        var o = r.attribs[h],
                            l = s ? s.attribs[h] : null;
                        if (s && o.enabled == l.enabled || (o.enabled ? i.enableVertexAttribArray.call(e, h) : i.disableVertexAttribArray.call(e, h)),
                            o.enabled) {
                            var _ = !1;
                            s && o.buffer == l.buffer || (a != o.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, o.buffer),
                                a = o.buffer), _ = !0), (_ || o.cached != l.cached) && i.vertexAttribPointer.call(e, h, o.size, o.type, o.normalized, o.stride, o.offset);
                        }
                    }
                    this.currentArrayBuffer != a && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer);
                }
            } else synthesizeGLError(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject");
        }, window._setupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"),
                    t;
            };
            var s = t.getExtension;
            t.getExtension = function(t) {
                var e = s.call(this, t);
                return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"),
                    this.__OESVertexArrayObject = new i(this)), this.__OESVertexArrayObject));
            };
        };
    }();
    var ae = /* */ function() {
        function ae() {
            _classCallCheck(this, ae);
        }
        _createClass(ae, null, [{
            key: "supportTextureFormat",
            value: function supportTextureFormat(e) {
                switch (e) {
                    case t.TextureFormat.R32G32B32A32:
                        return !(!m.layaGPUInstance._isWebGL2 && !m.layaGPUInstance._oesTextureFloat);

                    default:
                        return !0;
                }
            }
        }, {
            key: "supportRenderTextureFormat",
            value: function supportRenderTextureFormat(e) {
                switch (e) {
                    case t.RenderTextureFormat.R16G16B16A16:
                        return !!(m.layaGPUInstance._isWebGL2 || m.layaGPUInstance._oesTextureHalfFloat && m.layaGPUInstance._oesTextureHalfFloatLinear);

                    default:
                        return !0;
                }
            }
        }, {
            key: "maxTextureCount",
            get: function get() {
                return this._maxTextureCount;
            }
        }, {
            key: "maxTextureSize",
            get: function get() {
                return this._maxTextureSize;
            }
        }, {
            key: "shaderCapailityLevel",
            get: function get() {
                return this._shaderCapailityLevel;
            }
        }]);
        return ae;
    }();
    var ne = /* */ function() {
        function ne(t, e) {
            _classCallCheck(this, ne);
            this._gl = null, this._vaoExt = null, this._angleInstancedArrays = null, this._isWebGL2 = !1,
                this._oesTextureHalfFloat = null, this._oes_element_index_uint = null, this._oesTextureHalfFloatLinear = null,
                this._oesTextureFloat = null, this._extShaderTextureLod = null, this._extTextureFilterAnisotropic = null,
                this._compressedTextureS3tc = null, this._compressedTexturePvrtc = null, this._compressedTextureEtc1 = null,
                this._gl = t, this._isWebGL2 = e;
            var s = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                r = t.getParameter(t.MAX_TEXTURE_SIZE);
            e ? (this._getExtension("EXT_color_buffer_float"), ae._shaderCapailityLevel = 35) : (i.Render.isConchApp || window._setupVertexArrayObject && window._setupVertexArrayObject(t),
                    this._vaoExt = this._getExtension("OES_vertex_array_object"), this._angleInstancedArrays = this._getExtension("ANGLE_instanced_arrays"),
                    this._oesTextureHalfFloat = this._getExtension("OES_texture_half_float"), this._oesTextureHalfFloatLinear = this._getExtension("OES_texture_half_float_linear"),
                    this._oesTextureFloat = this._getExtension("OES_texture_float"), this._oes_element_index_uint = this._getExtension("OES_element_index_uint"),
                    this._extShaderTextureLod = this._getExtension("EXT_shader_texture_lod"), ae._shaderCapailityLevel = 30),
                this._extTextureFilterAnisotropic = this._getExtension("EXT_texture_filter_anisotropic"),
                this._compressedTextureS3tc = this._getExtension("WEBGL_compressed_texture_s3tc"),
                this._compressedTexturePvrtc = this._getExtension("WEBGL_compressed_texture_pvrtc"),
                this._compressedTextureEtc1 = this._getExtension("WEBGL_compressed_texture_etc1"),
                ae._maxTextureCount = s, ae._maxTextureSize = r;
        }
        _createClass(ne, [{
            key: "_getExtension",
            value: function _getExtension(t) {
                var e = ne._extentionVendorPrefixes;
                for (var i in e) {
                    var s = this._gl.getExtension(e[i] + t);
                    if (s) return s;
                }
                return null;
            }
        }, {
            key: "createVertexArray",
            value: function createVertexArray() {
                return this._isWebGL2 ? this._gl.createVertexArray() : this._vaoExt.createVertexArrayOES();
            }
        }, {
            key: "bindVertexArray",
            value: function bindVertexArray(t) {
                this._isWebGL2 ? this._gl.bindVertexArray(t) : this._vaoExt.bindVertexArrayOES(t);
            }
        }, {
            key: "deleteVertexArray",
            value: function deleteVertexArray(t) {
                this._isWebGL2 ? this._gl.deleteVertexArray(t) : this._vaoExt.deleteVertexArrayOES(t);
            }
        }, {
            key: "isVertexArray",
            value: function isVertexArray(t) {
                this._isWebGL2 ? this._gl.isVertexArray(t) : this._vaoExt.isVertexArrayOES(t);
            }
        }, {
            key: "drawElementsInstanced",
            value: function drawElementsInstanced(t, e, i, s, r) {
                this._isWebGL2 ? this._gl.drawElementsInstanced(t, e, i, s, r) : this._angleInstancedArrays.drawElementsInstancedANGLE(t, e, i, s, r);
            }
        }, {
            key: "drawArraysInstanced",
            value: function drawArraysInstanced(t, e, i, s) {
                this._isWebGL2 ? this._gl.drawArraysInstanced(t, e, i, s) : this._angleInstancedArrays.drawArraysInstancedANGLE(t, e, i, s);
            }
        }, {
            key: "vertexAttribDivisor",
            value: function vertexAttribDivisor(t, e) {
                this._isWebGL2 ? this._gl.vertexAttribDivisor(t, e) : this._angleInstancedArrays.vertexAttribDivisorANGLE(t, e);
            }
        }, {
            key: "supportInstance",
            value: function supportInstance() {
                return !(!this._isWebGL2 && !this._angleInstancedArrays);
            }
        }, {
            key: "supportElementIndexUint32",
            value: function supportElementIndexUint32() {
                return !(!this._isWebGL2 && !this._oes_element_index_uint);
            }
        }]);
        return ne;
    }();
    ne._extentionVendorPrefixes = ["", "WEBKIT_", "MOZ_"];
    var he = /* */ function() {
        function he(t, e, s) {
            _classCallCheck(this, he);
            this._timeId = 0, he._mainCanvas = s;
            var r = he._mainCanvas.source;
            r.id = "layaCanvas", r.width = t, r.height = e, he.isConchApp && document.body.appendChild(r),
                this.initRender(he._mainCanvas, t, e), window.requestAnimationFrame(function loop(t) {
                    i.stage._loop();
                    window.requestAnimationFrame(loop);
                }), i.stage.on("visibilitychange", this, this._onVisibilitychange);
        }
        _createClass(he, [{
            key: "_onVisibilitychange",
            value: function _onVisibilitychange() {
                i.stage.isVisibility ? 0 != this._timeId && window.clearInterval(this._timeId) : this._timeId = window.setInterval(this._enterFrame, 1e3);
            }
        }, {
            key: "initRender",
            value: function initRender(t, i, s) {
                var r = m.instance = v.mainContext = function(t) {
                    var i, s = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                    e.useWebGL2 && !$t.onBDMiniGame || s.shift();
                    for (var r = 0; r < s.length; r++) {
                        try {
                            i = t.getContext(s[r], {
                                stencil: e.isStencil,
                                alpha: e.isAlpha,
                                antialias: e.isAntialias,
                                premultipliedAlpha: e.premultipliedAlpha,
                                preserveDrawingBuffer: e.preserveDrawingBuffer
                            });
                        } catch (t) {}
                        if (i) return "webgl2" === s[r] && (re._isWebGL2 = !0), i;
                    }
                    return null;
                }(he._mainCanvas.source);
                if (!r) return !1;
                m.instance = r, m.layaGPUInstance = new ne(r, re._isWebGL2), t.size(i, s), ie.__init__(),
                    ot.__init__();
                var a = new ie();
                return a.isMain = !0, he._context = a, t._setContext(a), U.__init__(), V.__init__(),
                    Lt.__init__(), vt.__int__(r), O._init_(r), !0;
            }
        }, {
            key: "_enterFrame",
            value: function _enterFrame() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                i.stage._loop();
            }
        }], [{
            key: "context",
            get: function get() {
                return he._context;
            }
        }, {
            key: "canvas",
            get: function get() {
                return he._mainCanvas.source;
            }
        }]);
        return he;
    }();
    he.supportWebGLPlusCulling = !1, he.supportWebGLPlusAnimation = !1, he.supportWebGLPlusRendering = !1,
        he.isConchApp = !1, he.isConchApp = null != window.conch, he.isConchApp ? (he.supportWebGLPlusCulling = !1,
            he.supportWebGLPlusAnimation = !1, he.supportWebGLPlusRendering = !1) : null != window.qq && null != window.qq.webglPlus && (he.supportWebGLPlusCulling = !1,
            he.supportWebGLPlusAnimation = !1, he.supportWebGLPlusRendering = !1);
    var oe = /* */ function() {
        function oe() {
            _classCallCheck(this, oe);
        }
        _createClass(oe, [{
            key: "recover",
            value: function recover() {
                this.texture = null, this.vertices = null, this.uvs = null, this.indices = null,
                    this.matrix = null, s.recover("DrawTrianglesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode, this.colorNum);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return oe.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l, _, c) {
                var u = s.getItemByClass("DrawTrianglesCmd", oe);
                if (u.texture = t, u.x = e, u.y = i, u.vertices = r, u.uvs = a, u.indices = n, u.matrix = h,
                    u.alpha = o, l) {
                    u.color = new q();
                    var d = j.create(l).arrColor;
                    u.color.color(255 * d[0], 255 * d[1], 255 * d[2], 255 * d[3]);
                }
                return u.blendMode = _, u.colorNum = c, u;
            }
        }]);
        return oe;
    }();
    oe.ID = "DrawTriangles";
    var le = /* */ function() {
        function le() {
            _classCallCheck(this, le);
        }
        _createClass(le, [{
            key: "recover",
            value: function recover() {
                this.texture._removeReference(), s.recover("Draw9GridTexture", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return le.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n) {
                var h = s.getItemByClass("Draw9GridTexture", le);
                return h.texture = t, t._addReference(), h.x = e, h.y = i, h.width = r, h.height = a,
                    h.sizeGrid = n, h;
            }
        }]);
        return le;
    }();
    le.ID = "Draw9GridTexture";
    var _e = /* */ function() {
        function _e() {
            _classCallCheck(this, _e);
            this._cacheBoundsType = !1;
        }
        _createClass(_e, [{
            key: "destroy",
            value: function destroy() {
                this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0),
                    this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(),
                    this._bounds = null, s.recover("GraphicsBounds", this);
            }
        }, {
            key: "reset",
            value: function reset() {
                this._temp && (this._temp.length = 0);
            }
        }, {
            key: "getBounds",
            value: function getBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = g._getWrapRec(this.getBoundPoints(t), this._bounds)),
                    this._cacheBoundsType = t, this._bounds;
            }
        }, {
            key: "getBoundPoints",
            value: function getBoundPoints() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)),
                    this._cacheBoundsType = t, this._rstBoundPoints = K.copyArray(this._rstBoundPoints, this._temp);
            }
        }, {
            key: "_getCmdPoints",
            value: function _getCmdPoints() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e, i = this._graphics.cmds;
                if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (_e._tempCmds.length = 0,
                        _e._tempCmds.push(this._graphics._one), i = _e._tempCmds), !i) return e;
                var s = _e._tempMatrixArrays;
                s.length = 0;
                var p = _e._initMatrix;
                p.identity();
                for (var f, m, v = _e._tempMatrix, T = 0, x = i.length; T < x; T++) {
                    switch ((f = i[T]).cmdID) {
                        case r.ID:
                            s.push(p), p = p.clone();
                            break;

                        case $.ID:
                            p = s.pop();
                            break;

                        case tt.ID:
                            v.identity(), v.translate(-f.pivotX, -f.pivotY), v.scale(f.scaleX, f.scaleY), v.translate(f.pivotX, f.pivotY),
                                this._switchMatrix(p, v);
                            break;

                        case J.ID:
                            v.identity(), v.translate(-f.pivotX, -f.pivotY), v.rotate(f.angle), v.translate(f.pivotX, f.pivotY),
                                this._switchMatrix(p, v);
                            break;

                        case it.ID:
                            v.identity(), v.translate(f.tx, f.ty), this._switchMatrix(p, v);
                            break;

                        case et.ID:
                            v.identity(), v.translate(-f.pivotX, -f.pivotY), v.concat(f.matrix), v.translate(f.pivotX, f.pivotY),
                                this._switchMatrix(p, v);
                            break;

                        case h.ID:
                        case Z.ID:
                            _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p);
                            break;

                        case Q.ID:
                            p.copyTo(v), f.matrix && v.concat(f.matrix), _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), v);
                            break;

                        case h.ID:
                            if (m = f.texture, t) f.width && f.height ? _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p) : _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, m.width, m.height), p);
                            else {
                                var y = (f.width || m.sourceWidth) / m.width,
                                    E = (f.height || m.sourceHeight) / m.height,
                                    C = y * m.sourceWidth,
                                    b = E * m.sourceHeight,
                                    A = m.offsetX > 0 ? m.offsetX : 0,
                                    R = m.offsetY > 0 ? m.offsetY : 0;
                                A *= y, R *= E, _e._addPointArrToRst(e, g._getBoundPointS(f.x - A, f.y - R, C, b), p);
                            }
                            break;

                        case Z.ID:
                            f.width && f.height ? _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p) : (m = f.texture,
                                _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, m.width, m.height), p));
                            break;

                        case Q.ID:
                            var w;
                            f.matrix ? (p.copyTo(v), v.concat(f.matrix), w = v) : w = p, t ? f.width && f.height ? _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), w) : (m = f.texture,
                                _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, m.width, m.height), w)) : (m = f.texture,
                                y = (f.width || m.sourceWidth) / m.width, E = (f.height || m.sourceHeight) / m.height,
                                C = y * m.sourceWidth, b = E * m.sourceHeight, A = m.offsetX > 0 ? m.offsetX : 0,
                                R = m.offsetY > 0 ? m.offsetY : 0, A *= y, R *= E, _e._addPointArrToRst(e, g._getBoundPointS(f.x - A, f.y - R, C, b), w));
                            break;

                        case d.ID:
                            _e._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p);
                            break;

                        case a.ID:
                            _e._addPointArrToRst(e, g._getBoundPointS(f.x - f.radius, f.y - f.radius, f.radius + f.radius, f.radius + f.radius), p);
                            break;

                        case o.ID:
                            var S;
                            _e._tempPoints.length = 0, S = .5 * f.lineWidth, f.fromX == f.toX ? _e._tempPoints.push(f.fromX + S, f.fromY, f.toX + S, f.toY, f.fromX - S, f.fromY, f.toX - S, f.toY) : f.fromY == f.toY ? _e._tempPoints.push(f.fromX, f.fromY + S, f.toX, f.toY + S, f.fromX, f.fromY - S, f.toX, f.toY - S) : _e._tempPoints.push(f.fromX, f.fromY, f.toX, f.toY),
                                _e._addPointArrToRst(e, _e._tempPoints, p);
                            break;

                        case n.ID:
                            _e._addPointArrToRst(e, st.I.getBezierPoints(f.points), p, f.x, f.y);
                            break;

                        case l.ID:
                        case u.ID:
                            _e._addPointArrToRst(e, f.points, p, f.x, f.y);
                            break;

                        case _.ID:
                            _e._addPointArrToRst(e, this._getPathPoints(f.paths), p, f.x, f.y);
                            break;

                        case c.ID:
                            _e._addPointArrToRst(e, this._getPiePoints(f.x, f.y, f.radius, f.startAngle, f.endAngle), p);
                            break;

                        case oe.ID:
                            _e._addPointArrToRst(e, this._getTriAngBBXPoints(f.vertices), p);
                            break;

                        case le.ID:
                            _e._addPointArrToRst(e, this._getDraw9GridBBXPoints(f), p);
                    }
                }
                return e.length > 200 ? e = K.copyArray(e, g._getWrapRec(e)._getBoundPoints()) : e.length > 8 && (e = rt.scanPList(e)),
                    e;
            }
        }, {
            key: "_switchMatrix",
            value: function _switchMatrix(t, e) {
                e.concat(t), e.copyTo(t);
            }
        }, {
            key: "_getPiePoints",
            value: function _getPiePoints(t, e, i, s, r) {
                var a = _e._tempPoints;
                _e._tempPoints.length = 0;
                var n = Math.PI / 180,
                    h = r - s;
                if (h >= 360 || h <= -360) return a.push(t - i, e - i), a.push(t + i, e - i), a.push(t + i, e + i),
                    a.push(t - i, e + i), a;
                a.push(t, e);
                var o = h % 360;
                o < 0 && (o += 360);
                var l = s + o,
                    _ = s * n,
                    c = l * n;
                a.push(t + i * Math.cos(_), e + i * Math.sin(_)), a.push(t + i * Math.cos(c), e + i * Math.sin(c));
                for (var u = 90 * Math.ceil(s / 90), d = 90 * Math.floor(l / 90), p = u; p <= d; p += 90) {
                    var f = p * n;
                    a.push(t + i * Math.cos(f), e + i * Math.sin(f));
                }
                return a;
            }
        }, {
            key: "_getTriAngBBXPoints",
            value: function _getTriAngBBXPoints(t) {
                var e = t.length;
                if (e < 2) return [];
                for (var i = t[0], s = t[1], r = i, a = s, n = 2; n < e;) {
                    var h = t[n++],
                        o = t[n++];
                    i > h && (i = h), s > o && (s = o), r < h && (r = h), a < o && (a = o);
                }
                return [i, s, r, s, r, a, i, a];
            }
        }, {
            key: "_getDraw9GridBBXPoints",
            value: function _getDraw9GridBBXPoints(t) {
                var e = t.width,
                    i = t.height;
                return [0, 0, e, 0, e, i, 0, i];
            }
        }, {
            key: "_getPathPoints",
            value: function _getPathPoints(t) {
                var e, i, s, r = _e._tempPoints;
                for (r.length = 0, i = t.length, e = 0; e < i; e++) {
                    (s = t[e]).length > 1 && (r.push(s[1], s[2]), s.length > 3 && r.push(s[3], s[4]));
                }
                return r;
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("GraphicsBounds", _e);
            }
        }, {
            key: "_addPointArrToRst",
            value: function _addPointArrToRst(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a, n;
                for (n = e.length, a = 0; a < n; a += 2) {
                    _e._addPointToRst(t, e[a] + s, e[a + 1] + r, i);
                }
            }
        }, {
            key: "_addPointToRst",
            value: function _addPointToRst(t, e, i, s) {
                var r = f.TEMP;
                r.setTo(e || 0, i || 0), s.transformPoint(r), t.push(r.x, r.y);
            }
        }]);
        return _e;
    }();
    _e._tempMatrix = new p(), _e._initMatrix = new p(), _e._tempPoints = [], _e._tempMatrixArrays = [],
        _e._tempCmds = [];
    var ce = function ce() {
        _classCallCheck(this, ce);
    };
    ce.ALPHA = 1, ce.TRANSFORM = 2, ce.BLEND = 4, ce.CANVAS = 8, ce.FILTERS = 16, ce.MASK = 32,
        ce.CLIP = 64, ce.STYLE = 128, ce.TEXTURE = 256, ce.GRAPHICS = 512, ce.LAYAGL3D = 1024,
        ce.CUSTOM = 2048, ce.ONECHILD = 4096, ce.CHILDS = 8192, ce.REPAINT_NONE = 0, ce.REPAINT_NODE = 1,
        ce.REPAINT_CACHE = 2, ce.REPAINT_ALL = 3;
    var ue = /* */ function() {
        function ue() {
            _classCallCheck(this, ue);
        }
        _createClass(ue, [{
            key: "recover",
            value: function recover() {
                s.recover("ClipRectCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.clipRect(this.x + e, this.y + i, this.width, this.height);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return ue.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r) {
                var a = s.getItemByClass("ClipRectCmd", ue);
                return a.x = t, a.y = e, a.width = i, a.height = r, a;
            }
        }]);
        return ue;
    }();
    ue.ID = "ClipRect";
    var de = /* */ function() {
        function de() {
            _classCallCheck(this, de);
        }
        _createClass(de, [{
            key: "recover",
            value: function recover() {
                this.texture._removeReference(), this.texture = null, this.pos = null, s.recover("DrawTexturesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawTextures(this.texture, this.pos, e, i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return de.ID;
            }
        }], [{
            key: "create",
            value: function create(t, e) {
                var i = s.getItemByClass("DrawTexturesCmd", de);
                return i.texture = t, t._addReference(), i.pos = e, i;
            }
        }]);
        return de;
    }();
    de.ID = "DrawTextures";
    var pe = /* */ function() {
        function pe() {
            _classCallCheck(this, pe);
            this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0,
                this._fontObj = pe._defFontObj, this._nTexAlign = 0;
        }
        _createClass(pe, [{
            key: "recover",
            value: function recover() {
                s.recover("FillTextCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, s) {
                i.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._words ? ie._textRender.fillWords(t, this._words, this.x + e, this.y + s, this._fontObj, this._color, this._borderColor, this._lineWidth) : this._textIsWorldText ? t._fast_filltext(this._text, this.x + e, this.y + s, this._fontObj, this._color, this._borderColor, this._lineWidth, this._nTexAlign, 0) : ie._textRender.filltext(t, this._text, this.x + e, this.y + s, this.font, this.color, this._borderColor, this._lineWidth, this._textAlign);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return pe.ID;
            }
        }, {
            key: "text",
            get: function get() {
                return this._text;
            },
            set: function set(t) {
                this._text = t, this._textIsWorldText = t instanceof qt, this._textIsWorldText && this._text.cleanCache();
            }
        }, {
            key: "font",
            get: function get() {
                return this._font;
            },
            set: function set(t) {
                this._font = t, this._fontObj = jt.Parse(t), this._textIsWorldText && this._text.cleanCache();
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                this._color = t, this._fontColor = j.create(t).numColor, this._textIsWorldText && this._text.cleanCache();
            }
        }, {
            key: "textAlign",
            get: function get() {
                return this._textAlign;
            },
            set: function set(t) {
                switch (this._textAlign = t, t) {
                    case "center":
                        this._nTexAlign = i.Context.ENUM_TEXTALIGN_CENTER;
                        break;

                    case "right":
                        this._nTexAlign = i.Context.ENUM_TEXTALIGN_RIGHT;
                        break;

                    default:
                        this._nTexAlign = i.Context.ENUM_TEXTALIGN_DEFAULT;
                }
                this._textIsWorldText && this._text.cleanCache();
            }
        }], [{
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l) {
                var _ = s.getItemByClass("FillTextCmd", pe);
                return _.text = t, _._textIsWorldText = t instanceof qt, _._words = e, _.x = i,
                    _.y = r, _.font = a, _.color = n, _.textAlign = h, _._lineWidth = o, _._borderColor = l,
                    _;
            }
        }]);
        return pe;
    }();
    pe.ID = "FillText", pe._defFontObj = new jt(null);
    var fe = /* */ function() {
        function fe() {
            _classCallCheck(this, fe);
        }
        _createClass(fe, [{
            key: "recover",
            value: function recover() {
                s.recover("SaveCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.save();
            }
        }, {
            key: "cmdID",
            get: function get() {
                return fe.ID;
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("SaveCmd", fe);
            }
        }]);
        return fe;
    }();
    fe.ID = "Save";
    var ge = /* */ function() {
        function ge() {
            _classCallCheck(this, ge);
        }
        _createClass(ge, null, [{
            key: "regCacheByFunction",
            value: function regCacheByFunction(t, e) {
                var i;
                ge.unRegCacheByFunction(t, e), i = {
                    tryDispose: t,
                    getCacheList: e
                }, ge._cacheList.push(i);
            }
        }, {
            key: "unRegCacheByFunction",
            value: function unRegCacheByFunction(t, e) {
                var i, s;
                for (s = ge._cacheList.length, i = 0; i < s; i++) {
                    if (ge._cacheList[i].tryDispose == t && ge._cacheList[i].getCacheList == e) return void ge._cacheList.splice(i, 1);
                }
            }
        }, {
            key: "forceDispose",
            value: function forceDispose() {
                var t, e = ge._cacheList.length;
                for (t = 0; t < e; t++) {
                    ge._cacheList[t].tryDispose(!0);
                }
            }
        }, {
            key: "beginCheck",
            value: function beginCheck() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15e3;
                i.systemTimer.loop(t, null, ge._checkLoop);
            }
        }, {
            key: "stopCheck",
            value: function stopCheck() {
                i.systemTimer.clear(null, ge._checkLoop);
            }
        }, {
            key: "_checkLoop",
            value: function _checkLoop() {
                var t = ge._cacheList;
                if (!(t.length < 1)) {
                    var e, s, r = i.Browser.now();
                    for (s = e = t.length; e > 0 && (ge._index++, ge._index = ge._index % s, t[ge._index].tryDispose(!1), !(i.Browser.now() - r > ge.loopTimeLimit));) {
                        e--;
                    }
                }
            }
        }]);
        return ge;
    }();
    ge.loopTimeLimit = 2, ge._cacheList = [], ge._index = 0;
    var me = /* */ function() {
        function me() {
            _classCallCheck(this, me);
            this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1,
                this._freeIdArray = [], ge.regCacheByFunction(this.startDispose.bind(this), this.getCacheList.bind(this));
        }
        _createClass(me, [{
            key: "getId",
            value: function getId() {
                return this._id++;
            }
        }, {
            key: "addShape",
            value: function addShape(t, e) {
                this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
            }
        }, {
            key: "addLine",
            value: function addLine(t, e) {
                this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
            }
        }, {
            key: "getShape",
            value: function getShape(t) {
                this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
            }
        }, {
            key: "deleteShape",
            value: function deleteShape(t) {
                this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null,
                    delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
            }
        }, {
            key: "getCacheList",
            value: function getCacheList() {
                var t, e = [];
                for (t in this.shapeDic) {
                    e.push(this.shapeDic[t]);
                }
                for (t in this.shapeLineDic) {
                    e.push(this.shapeLineDic[t]);
                }
                return e;
            }
        }, {
            key: "startDispose",
            value: function startDispose(t) {
                var e;
                for (e in this.useDic) {
                    this.useDic[e] = !1;
                }
                this._checkKey = !0;
            }
        }, {
            key: "endDispose",
            value: function endDispose() {
                if (this._checkKey) {
                    var t;
                    for (t in this.useDic) {
                        this.useDic[t] || this.deleteShape(t);
                    }
                    this._checkKey = !1;
                }
            }
        }], [{
            key: "getInstance",
            value: function getInstance() {
                return me.instance = me.instance || new me();
            }
        }]);
        return me;
    }();
    var ve = /* */ function() {
        function ve() {
            _classCallCheck(this, ve);
            this._sp = null, this._one = null, this._render = this._renderEmpty, this._cmds = null,
                this._vectorgraphArray = null, this._graphicBounds = null, this.autoDestroy = !1,
                this._createData();
        }
        _createClass(ve, [{
            key: "_createData",
            value: function _createData() {}
        }, {
            key: "_clearData",
            value: function _clearData() {}
        }, {
            key: "_destroyData",
            value: function _destroyData() {}
        }, {
            key: "destroy",
            value: function destroy() {
                this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null,
                    this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0),
                        this._sp = null), this._destroyData();
            }
        }, {
            key: "clear",
            value: function clear() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (t) {
                    var e = this._one;
                    if (this._cmds) {
                        var i, s = this._cmds.length;
                        for (i = 0; i < s; i++) {
                            (e = this._cmds[i]).recover();
                        }
                        this._cmds.length = 0;
                    } else e && e.recover();
                } else this._cmds = null;
                if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= ~ce.GRAPHICS,
                        this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                    for (i = 0, s = this._vectorgraphArray.length; i < s; i++) {
                        me.getInstance().deleteShape(this._vectorgraphArray[i]);
                    }
                    this._vectorgraphArray.length = 0;
                }
            }
        }, {
            key: "_clearBoundsCache",
            value: function _clearBoundsCache() {
                this._graphicBounds && this._graphicBounds.reset();
            }
        }, {
            key: "_initGraphicBounds",
            value: function _initGraphicBounds() {
                this._graphicBounds || (this._graphicBounds = _e.create(), this._graphicBounds._graphics = this);
            }
        }, {
            key: "_repaint",
            value: function _repaint() {
                this._clearBoundsCache(), this._sp && this._sp.repaint();
            }
        }, {
            key: "_isOnlyOne",
            value: function _isOnlyOne() {
                return !this._cmds || 0 === this._cmds.length;
            }
        }, {
            key: "getBounds",
            value: function getBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return this._initGraphicBounds(), this._graphicBounds.getBounds(t);
            }
        }, {
            key: "getBoundPoints",
            value: function getBoundPoints() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
            }
        }, {
            key: "drawImage",
            value: function drawImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                if (!t) return null;
                if (s || (s = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                    var a = s / t.sourceWidth,
                        n = r / t.sourceHeight;
                    if (s = t.width * a, r = t.height * n, s <= 0 || r <= 0) return null;
                    e += t.offsetX * a, i += t.offsetY * n;
                }
                this._sp && (this._sp._renderType |= ce.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
                var o = h.create.call(this, t, e, i, s, r);
                return null == this._one ? (this._one = o, this._render = this._renderOneImg) : this._saveToCmd(null, o),
                    this._repaint(), o;
            }
        }, {
            key: "drawTexture",
            value: function drawTexture(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                var l = arguments.length > 9 ? arguments[9] : undefined;
                if (!t || n < .01) return null;
                if (!t.getIsReady()) return null;
                if (s || (s = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                    var _ = s / t.sourceWidth,
                        c = r / t.sourceHeight;
                    if (s = t.width * _, r = t.height * c, s <= 0 || r <= 0) return null;
                    e += t.offsetX * _, i += t.offsetY * c;
                }
                this._sp && (this._sp._renderType |= ce.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
                var u = Q.create.call(this, t, e, i, s, r, a, n, h, o, l);
                return this._repaint(), this._saveToCmd(null, u);
            }
        }, {
            key: "drawTextures",
            value: function drawTextures(t, e) {
                return t ? this._saveToCmd(he._context.drawTextures, de.create.call(this, t, e)) : null;
            }
        }, {
            key: "drawTriangles",
            value: function drawTriangles(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = arguments.length > 10 ? arguments[10] : undefined;
                return this._saveToCmd(he._context.drawTriangles, oe.create.call(this, t, e, i, s, r, a, n, h, o, l, _));
            }
        }, {
            key: "fillTexture",
            value: function fillTexture(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "repeat";
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                return t && t.getIsReady() ? this._saveToCmd(he._context._fillTexture, Z.create.call(this, t, e, i, s, r, a, n || f.EMPTY, {})) : null;
            }
        }, {
            key: "_saveToCmd",
            value: function _saveToCmd(t, e) {
                return this._sp && (this._sp._renderType |= ce.GRAPHICS, this._sp._setRenderType(this._sp._renderType)),
                    null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll,
                        0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)),
                    this._repaint(), e;
            }
        }, {
            key: "clipRect",
            value: function clipRect(t, e, i, s) {
                return this._saveToCmd(he._context.clipRect, ue.create.call(this, t, e, i, s));
            }
        }, {
            key: "fillText",
            value: function fillText(t, e, s, r, a, n) {
                return this._saveToCmd(he._context.fillText, pe.create.call(this, t, null, e, s, r || i.Text.defaultFontStr(), a, n, 0, ""));
            }
        }, {
            key: "fillBorderText",
            value: function fillBorderText(t, e, s, r, a, n, h, o) {
                return this._saveToCmd(he._context.fillText, pe.create.call(this, t, null, e, s, r || i.Text.defaultFontStr(), a, o, h, n));
            }
        }, {
            key: "fillWords",
            value: function fillWords(t, e, s, r, a) {
                return this._saveToCmd(he._context.fillText, pe.create.call(this, null, t, e, s, r || i.Text.defaultFontStr(), a));
            }
        }, {
            key: "fillBorderWords",
            value: function fillBorderWords(t, e, s, r, a, n, h) {
                return this._saveToCmd(he._context.fillText, pe.create.call(this, null, t, e, s, r || i.Text.defaultFontStr(), a, "", h, n));
            }
        }, {
            key: "strokeText",
            value: function strokeText(t, e, s, r, a, n, h) {
                return this._saveToCmd(he._context.fillText, pe.create.call(this, t, null, e, s, r || i.Text.defaultFontStr(), null, h, n, a));
            }
        }, {
            key: "alpha",
            value: function alpha(t) {
                return this._saveToCmd(he._context.alpha, r.create.call(this, t));
            }
        }, {
            key: "transform",
            value: function transform(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return this._saveToCmd(he._context._transform, et.create.call(this, t, e, i));
            }
        }, {
            key: "rotate",
            value: function rotate(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return this._saveToCmd(he._context._rotate, J.create.call(this, t, e, i));
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                return this._saveToCmd(he._context._scale, tt.create.call(this, t, e, i, s));
            }
        }, {
            key: "translate",
            value: function translate(t, e) {
                return this._saveToCmd(he._context.translate, it.create.call(this, t, e));
            }
        }, {
            key: "save",
            value: function save() {
                return this._saveToCmd(he._context._save, fe.create.call(this));
            }
        }, {
            key: "restore",
            value: function restore() {
                return this._saveToCmd(he._context.restore, $.create.call(this));
            }
        }, {
            key: "replaceText",
            value: function replaceText(t) {
                this._repaint();
                var e = this._cmds;
                if (e) {
                    for (var i = e.length - 1; i > -1; i--) {
                        if (this._isTextCmd(e[i])) return e[i].text = t, !0;
                    }
                } else if (this._one && this._isTextCmd(this._one)) return this._one.text = t, !0;
                return !1;
            }
        }, {
            key: "_isTextCmd",
            value: function _isTextCmd(t) {
                return t.cmdID == pe.ID;
            }
        }, {
            key: "replaceTextColor",
            value: function replaceTextColor(t) {
                this._repaint();
                var e = this._cmds;
                if (e)
                    for (var i = e.length - 1; i > -1; i--) {
                        this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t);
                    } else this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t);
            }
        }, {
            key: "_setTextCmdColor",
            value: function _setTextCmdColor(t, e) {
                switch (t.cmdID) {
                    case pe.ID:
                        t.color = e;
                }
            }
        }, {
            key: "loadImage",
            value: function loadImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var h = i.Loader.getRes(t);
                h ? h.getIsReady() ? this.drawImage(h, e, s, r, a) : h.once(zt.READY, this, this.drawImage, [h, e, s, r, a]) : ((h = new Kt()).load(t),
                        i.Loader.cacheTexture(t, h), h.once(zt.READY, this, this.drawImage, [h, e, s, r, a])),
                    null != n && (h.getIsReady() ? n.call(this._sp) : h.on(zt.READY, this._sp, n));
            }
        }, {
            key: "_renderEmpty",
            value: function _renderEmpty(t, e, i, s) {}
        }, {
            key: "_renderAll",
            value: function _renderAll(t, e, i, s) {
                for (var r = this._cmds, a = 0, n = r.length; a < n; a++) {
                    r[a].run(e, i, s);
                }
            }
        }, {
            key: "_renderOne",
            value: function _renderOne(t, e, i, s) {
                e.sprite = t, this._one.run(e, i, s);
            }
        }, {
            key: "_renderOneImg",
            value: function _renderOneImg(t, e, i, s) {
                e.sprite = t, this._one.run(e, i, s);
            }
        }, {
            key: "drawLine",
            value: function drawLine(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                var n = a < 1 || a % 2 == 0 ? 0 : .5;
                return this._saveToCmd(he._context._drawLine, o.create.call(this, t + n, e + n, i + n, s + n, r, a, 0));
            }
        }, {
            key: "drawLines",
            value: function drawLines(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                if (!i || i.length < 4) return null;
                var a = r < 1 || r % 2 == 0 ? 0 : .5;
                return this._saveToCmd(he._context._drawLines, l.create.call(this, t + a, e + a, i, s, r, 0));
            }
        }, {
            key: "drawCurves",
            value: function drawCurves(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                return this._saveToCmd(he._context.drawCurves, n.create.call(this, t, e, i, s, r));
            }
        }, {
            key: "drawRect",
            value: function drawRect(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var h = n >= 1 && a ? n / 2 : 0,
                    o = a ? n : 0;
                return this._saveToCmd(he._context.drawRect, d.create.call(this, t + h, e + h, i - o, s - o, r, a, n));
            }
        }, {
            key: "drawCircle",
            value: function drawCircle(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                var h = n >= 1 && r ? n / 2 : 0;
                return this._saveToCmd(he._context._drawCircle, a.create.call(this, t, e, i - h, s, r, n, 0));
            }
        }, {
            key: "drawPie",
            value: function drawPie(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var o = h >= 1 && n ? h / 2 : 0,
                    l = n ? h : 0;
                return this._saveToCmd(he._context._drawPie, c.create.call(this, t + o, e + o, i - l, K.toRadian(s), K.toRadian(r), a, n, h, 0));
            }
        }, {
            key: "drawPoly",
            value: function drawPoly(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                var n = !1;
                n = !(i.length > 6);
                var h = a >= 1 && r ? a % 2 == 0 ? 0 : .5 : 0;
                return this._saveToCmd(he._context._drawPoly, u.create.call(this, t + h, e + h, i, s, r, a, n, 0));
            }
        }, {
            key: "drawPath",
            value: function drawPath(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return this._saveToCmd(he._context._drawPath, _.create.call(this, t, e, i, s, r));
            }
        }, {
            key: "draw9Grid",
            value: function draw9Grid(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                this._saveToCmd(null, le.create(t, e, i, s, r, a));
            }
        }, {
            key: "cmds",
            get: function get() {
                return this._cmds;
            },
            set: function set(t) {
                this._sp && (this._sp._renderType |= ce.GRAPHICS, this._sp._setRenderType(this._sp._renderType)),
                    this._cmds = t, this._render = this._renderAll, this._repaint();
            }
        }]);
        return ve;
    }();
    var Te = function Te() {
        _classCallCheck(this, Te);
    };
    Te.NOT_ACTIVE = 1, Te.ACTIVE_INHIERARCHY = 2, Te.AWAKED = 4, Te.NOT_READY = 8, Te.DISPLAY = 16,
        Te.HAS_ZORDER = 32, Te.HAS_MOUSE = 64, Te.DISPLAYED_INSTAGE = 128, Te.DRAWCALL_OPTIMIZE = 256;
    var xe = /* */ function() {
        function xe() {
            _classCallCheck(this, xe);
        }
        _createClass(xe, null, [{
            key: "__init__",
            value: function __init__() {
                xe.map[ce.ALPHA | ce.TRANSFORM | ce.GRAPHICS] = xe.alpha_transform_drawLayaGL, xe.map[ce.ALPHA | ce.GRAPHICS] = xe.alpha_drawLayaGL,
                    xe.map[ce.TRANSFORM | ce.GRAPHICS] = xe.transform_drawLayaGL, xe.map[ce.TRANSFORM | ce.CHILDS] = xe.transform_drawNodes,
                    xe.map[ce.ALPHA | ce.TRANSFORM | ce.TEXTURE] = xe.alpha_transform_drawTexture, xe.map[ce.ALPHA | ce.TEXTURE] = xe.alpha_drawTexture,
                    xe.map[ce.TRANSFORM | ce.TEXTURE] = xe.transform_drawTexture, xe.map[ce.GRAPHICS | ce.CHILDS] = xe.drawLayaGL_drawNodes;
            }
        }, {
            key: "transform_drawTexture",
            value: function transform_drawTexture(t, e, i, s) {
                t._style;
                var r = t.texture;
                e.saveTransform(xe.curMat), e.transformByMatrix(t.transform, i, s), e.drawTexture(r, -t.pivotX, -t.pivotY, t._width || r.width, t._height || r.height),
                    e.restoreTransform(xe.curMat);
            }
        }, {
            key: "alpha_drawTexture",
            value: function alpha_drawTexture(t, e, i, s) {
                var r, a = t._style,
                    n = t.texture;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var h = e.globalAlpha;
                    e.globalAlpha *= r, e.drawTexture(n, i - a.pivotX + n.offsetX, s - a.pivotY + n.offsetY, t._width || n.width, t._height || n.height),
                        e.globalAlpha = h;
                }
            }
        }, {
            key: "alpha_transform_drawTexture",
            value: function alpha_transform_drawTexture(t, e, i, s) {
                var r, a = t._style,
                    n = t.texture;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var h = e.globalAlpha;
                    e.globalAlpha *= r, e.saveTransform(xe.curMat), e.transformByMatrix(t.transform, i, s),
                        e.drawTexture(n, -a.pivotX + n.offsetX, -a.pivotY + n.offsetY, t._width || n.width, t._height || n.height),
                        e.restoreTransform(xe.curMat), e.globalAlpha = h;
                }
            }
        }, {
            key: "alpha_transform_drawLayaGL",
            value: function alpha_transform_drawLayaGL(t, e, i, s) {
                var r, a = t._style;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var n = e.globalAlpha;
                    e.globalAlpha *= r, e.saveTransform(xe.curMat), e.transformByMatrix(t.transform, i, s),
                        t._graphics && t._graphics._render(t, e, -a.pivotX, -a.pivotY), e.restoreTransform(xe.curMat),
                        e.globalAlpha = n;
                }
            }
        }, {
            key: "alpha_drawLayaGL",
            value: function alpha_drawLayaGL(t, e, i, s) {
                var r, a = t._style;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var n = e.globalAlpha;
                    e.globalAlpha *= r, t._graphics && t._graphics._render(t, e, i - a.pivotX, s - a.pivotY),
                        e.globalAlpha = n;
                }
            }
        }, {
            key: "transform_drawLayaGL",
            value: function transform_drawLayaGL(t, e, i, s) {
                var r = t._style;
                e.saveTransform(xe.curMat), e.transformByMatrix(t.transform, i, s), t._graphics && t._graphics._render(t, e, -r.pivotX, -r.pivotY),
                    e.restoreTransform(xe.curMat);
            }
        }, {
            key: "transform_drawNodes",
            value: function transform_drawNodes(t, e, i, s) {
                var r = t._getBit(Te.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0),
                    a = t._style;
                e.saveTransform(xe.curMat), e.transformByMatrix(t.transform, i, s), i = -a.pivotX,
                    s = -a.pivotY;
                var n, h = t._children,
                    o = h.length;
                if (a.viewport) {
                    var l, _, c = a.viewport,
                        u = c.x,
                        d = c.y,
                        p = c.right,
                        f = c.bottom;
                    for (g = 0; g < o; ++g) {
                        (n = h[g])._visible && (l = n._x) < p && l + n.width > u && (_ = n._y) < f && _ + n.height > d && n.render(e, i, s);
                    }
                } else
                    for (var g = 0; g < o; ++g) {
                        (n = h[g])._visible && n.render(e, i, s);
                    }
                e.restoreTransform(xe.curMat), r && e.drawCallOptimize(!1);
            }
        }, {
            key: "drawLayaGL_drawNodes",
            value: function drawLayaGL_drawNodes(t, e, i, s) {
                var r = t._getBit(Te.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0),
                    a = t._style;
                i -= a.pivotX, s -= a.pivotY, t._graphics && t._graphics._render(t, e, i, s);
                var n, h = t._children,
                    o = h.length;
                if (a.viewport) {
                    var l, _, c = a.viewport,
                        u = c.x,
                        d = c.y,
                        p = c.right,
                        f = c.bottom;
                    for (g = 0; g < o; ++g) {
                        (n = h[g])._visible && (l = n._x) < p && l + n.width > u && (_ = n._y) < f && _ + n.height > d && n.render(e, i, s);
                    }
                } else
                    for (var g = 0; g < o; ++g) {
                        (n = h[g])._visible && n.render(e, i, s);
                    }
                r && e.drawCallOptimize(!1);
            }
        }]);
        return xe;
    }();
    xe.map = {}, xe.curMat = new p();
    var ye = /* */ function() {
        function ye(t, e) {
            _classCallCheck(this, ye);
            if (xe.map[t]) return this._fun = xe.map[t], void(this._next = ye.NORENDER);
            switch (this._next = e || ye.NORENDER, t) {
                case 0:
                    return void(this._fun = this._no);

                case ce.ALPHA:
                    return void(this._fun = this._alpha);

                case ce.TRANSFORM:
                    return void(this._fun = this._transform);

                case ce.BLEND:
                    return void(this._fun = this._blend);

                case ce.CANVAS:
                    return void(this._fun = this._canvas);

                case ce.MASK:
                    return void(this._fun = this._mask);

                case ce.CLIP:
                    return void(this._fun = this._clip);

                case ce.STYLE:
                    return void(this._fun = this._style);

                case ce.GRAPHICS:
                    return void(this._fun = this._graphics);

                case ce.CHILDS:
                    return void(this._fun = this._children);

                case ce.CUSTOM:
                    return void(this._fun = this._custom);

                case ce.TEXTURE:
                    return void(this._fun = this._texture);

                case ce.FILTERS:
                    return void(this._fun = z._filter);

                case ye.INIT:
                    return void(this._fun = ye._initRenderFun);
            }
            this.onCreate(t);
        }
        _createClass(ye, [{
            key: "onCreate",
            value: function onCreate(t) {}
        }, {
            key: "_style",
            value: function _style(t, e, i, s) {
                var r = t._style;
                null != r.render && r.render(t, e, i, s);
                var a = this._next;
                a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_no",
            value: function _no(t, e, i, s) {}
        }, {
            key: "_custom",
            value: function _custom(t, e, i, s) {
                t.customRender(e, i, s), this._next._fun.call(this._next, t, e, i - t.pivotX, s - t.pivotY);
            }
        }, {
            key: "_clip",
            value: function _clip(t, e, i, s) {
                var r = this._next;
                if (r != ye.NORENDER) {
                    var a = t._style.scrollRect,
                        n = a.width,
                        h = a.height;
                    0 !== n && 0 !== h && (e.save(), e.clipRect(i, s, n, h), r._fun.call(r, t, e, i - a.x, s - a.y),
                        e.restore());
                }
            }
        }, {
            key: "_texture",
            value: function _texture(t, e, i, s) {
                var r = t.texture;
                r._getSource() && e.drawTexture(r, i - t.pivotX + r.offsetX, s - t.pivotY + r.offsetY, t._width || r.width, t._height || r.height);
                var a = this._next;
                a != ye.NORENDER && a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_graphics",
            value: function _graphics(t, e, i, s) {
                var r = t._style,
                    a = t._graphics;
                a && a._render(t, e, i - r.pivotX, s - r.pivotY);
                var n = this._next;
                n != ye.NORENDER && n._fun.call(n, t, e, i, s);
            }
        }, {
            key: "_image",
            value: function _image(t, e, i, s) {
                var r = t._style;
                e.drawTexture2(i, s, r.pivotX, r.pivotY, t.transform, t._graphics._one);
            }
        }, {
            key: "_image2",
            value: function _image2(t, e, i, s) {
                var r = t._style;
                e.drawTexture2(i, s, r.pivotX, r.pivotY, t.transform, t._graphics._one);
            }
        }, {
            key: "_alpha",
            value: function _alpha(t, e, i, s) {
                var r;
                if ((r = t._style.alpha) > .01 || t._needRepaint()) {
                    var a = e.globalAlpha;
                    e.globalAlpha *= r;
                    var n = this._next;
                    n._fun.call(n, t, e, i, s), e.globalAlpha = a;
                }
            }
        }, {
            key: "_transform",
            value: function _transform(t, e, i, s) {
                var r = t.transform,
                    a = this._next;
                t._style;
                r && a != ye.NORENDER ? (e.save(), e.transform(r.a, r.b, r.c, r.d, r.tx + i, r.ty + s),
                    a._fun.call(a, t, e, 0, 0), e.restore()) : a != ye.NORENDER && a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_children",
            value: function _children(t, e, i, s) {
                var r, a = t._style,
                    n = t._children,
                    h = n.length;
                i -= t.pivotX, s -= t.pivotY;
                var o = t._getBit(Te.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0);
                if (a.viewport) {
                    var l, _, c = a.viewport,
                        u = c.x,
                        d = c.y,
                        p = c.right,
                        f = c.bottom;
                    for (g = 0; g < h; ++g) {
                        (r = n[g])._visible && (l = r._x) < p && l + r.width > u && (_ = r._y) < f && _ + r.height > d && r.render(e, i, s);
                    }
                } else
                    for (var g = 0; g < h; ++g) {
                        (r = n[g])._visible && r.render(e, i, s);
                    }
                o && e.drawCallOptimize(!1);
            }
        }, {
            key: "_canvas",
            value: function _canvas(t, e, s, r) {
                var a = t._cacheStyle,
                    n = this._next;
                if (a.enableCanvasRender) {
                    "bitmap" === a.cacheAs ? G.canvasBitmap++ : G.canvasNormal++;
                    var h = !1,
                        o = !1;
                    if (a.canvas) {
                        var l = a.canvas,
                            _ = (l.context, l.touches);
                        if (_)
                            for (var c = 0; c < _.length; c++) {
                                if (_[c].deleted) {
                                    o = !0;
                                    break;
                                }
                            }
                        h = l.isCacheValid && !l.isCacheValid();
                    }
                    if (t._needRepaint() || !a.canvas || o || h || i.stage.isGlobalRepaint())
                        if ("normal" === a.cacheAs) {
                            if (e._targets) return void n._fun.call(n, t, e, s, r);
                            this._canvas_webgl_normal_repaint(t, e);
                        } else this._canvas_repaint(t, e, s, r);
                    var u = a.cacheRect;
                    e.drawCanvas(a.canvas, s + u.x, r + u.y, u.width, u.height);
                } else n._fun.call(n, t, e, s, r);
            }
        }, {
            key: "_canvas_repaint",
            value: function _canvas_repaint(t, e, i, s) {
                var r, a, n, h, o, l, _, c, u, d = t._cacheStyle,
                    p = this._next,
                    f = d.canvas,
                    g = d.cacheAs;
                if (_ = (u = d._calculateCacheRect(t, g, i, s)).x, c = u.y, o = (h = d.cacheRect).width * _,
                    l = h.height * c, a = h.x, n = h.y, "bitmap" === g && (o > 2048 || l > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"),
                    d.releaseContext(), void p._fun.call(p, t, e, i, s);
                if (f || (d.createContext(), f = d.canvas), (r = f.context).sprite = t, (f.width != o || f.height != l) && f.size(o, l),
                    "bitmap" === g ? r.asBitmap = !0 : "normal" === g && (r.asBitmap = !1), r.clear(),
                    1 != _ || 1 != c) {
                    var m = r;
                    m.save(), m.scale(_, c), p._fun.call(p, t, r, -a, -n), m.restore(), t._applyFilters();
                } else m = r, p._fun.call(p, t, r, -a, -n), t._applyFilters();
                d.staticCache && (d.reCache = !1), G.canvasReCache++;
            }
        }, {
            key: "_canvas_webgl_normal_repaint",
            value: function _canvas_webgl_normal_repaint(t, e) {
                var i = t._cacheStyle,
                    s = this._next,
                    r = i.canvas,
                    a = i.cacheAs;
                i._calculateCacheRect(t, a, 0, 0), r || (r = i.canvas = new At(e, t));
                var n = r.context;
                r.startRec(), s._fun.call(s, t, n, t.pivotX, t.pivotY), t._applyFilters(), G.canvasReCache++,
                    r.endRec();
            }
        }, {
            key: "_blend",
            value: function _blend(t, e, i, s) {
                var r = t._style,
                    a = this._next;
                r.blendMode ? (e.save(), e.globalCompositeOperation = r.blendMode, a._fun.call(a, t, e, i, s),
                    e.restore()) : a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_mask",
            value: function _mask(t, e, i, s) {
                var r = this._next,
                    a = t.mask,
                    n = e;
                if (a) {
                    n.save();
                    var h = n.globalCompositeOperation,
                        o = new g();
                    if (o.copyFrom(a.getBounds()), o.width = Math.round(o.width), o.height = Math.round(o.height),
                        o.x = Math.round(o.x), o.y = Math.round(o.y), o.width > 0 && o.height > 0) {
                        var l = o.width,
                            _ = o.height,
                            c = F.getRT(l, _);
                        n.breakNextMerge(), n.pushRT(), n.addRenderObject(H.create([n, c, l, _], ye.tmpTarget, this)),
                            a.render(n, -o.x, -o.y), n.breakNextMerge(), n.popRT(), n.save(), n.clipRect(i + o.x - t.getStyle().pivotX, s + o.y - t.getStyle().pivotY, l, _),
                            r._fun.call(r, t, n, i, s), n.restore(), h = n.globalCompositeOperation, n.addRenderObject(H.create(["mask"], ye.setBlendMode, this));
                        var u = V.create(U.TEXTURE2D, 0),
                            d = Kt.INV_UV;
                        n.drawTarget(c, i + o.x - t.getStyle().pivotX, s + o.y - t.getStyle().pivotY, l, _, p.TEMP.identity(), u, d, 6),
                            n.addRenderObject(H.create([c], ye.recycleTarget, this)), n.addRenderObject(H.create([h], ye.setBlendMode, this));
                    }
                    n.restore();
                } else r._fun.call(r, t, e, i, s);
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                var t, e, i;
                for (xe.__init__(), i = new ye(ye.INIT, null), e = ye.renders.length = 2 * ce.CHILDS,
                    t = 0; t < e; t++) {
                    ye.renders[t] = i;
                }
                ye.renders[0] = new ye(0, null);
            }
        }, {
            key: "_initRenderFun",
            value: function _initRenderFun(t, e, i, s) {
                var r = t._renderType;
                (ye.renders[r] = ye._getTypeRender(r))._fun(t, e, i, s);
            }
        }, {
            key: "_getTypeRender",
            value: function _getTypeRender(t) {
                if (xe.map[t]) return new ye(t, null);
                for (var e = null, i = ce.CHILDS; i > 0;) {
                    i & t && (e = new ye(i, e)), i >>= 1;
                }
                return e;
            }
        }, {
            key: "tmpTarget",
            value: function tmpTarget(t, e, i, s) {
                e.start(), e.clear(0, 0, 0, 0);
            }
        }, {
            key: "recycleTarget",
            value: function recycleTarget(t) {
                F.releaseRT(t);
            }
        }, {
            key: "setBlendMode",
            value: function setBlendMode(t) {
                var e = v.mainContext;
                O.targetFns[O.TOINT[t]](e);
            }
        }]);
        return ye;
    }();
    ye.INIT = 69905, ye.renders = [], ye.NORENDER = new ye(0, null), ye.tempUV = new Array(8);
    var Ee = /* */ function(_b2) {
        _inherits(Ee, _b2);
        _createClass(Ee, [{
            key: "_getSource",
            value: function _getSource() {
                return this._source;
            }
        }, {
            key: "source",
            get: function get() {
                return this._source;
            }
        }]);

        function Ee() {
            var _this20;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            _classCallCheck(this, Ee);
            _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Ee).call(this)), _this20._source = t ? $t.createElement("canvas") : _assertThisInitialized(_this20),
                _this20.lock = !0;
            return _this20;
        }
        _createClass(Ee, [{
            key: "clear",
            value: function clear() {
                this._ctx && (this._ctx.clear ? this._ctx.clear() : this._ctx.clearRect(0, 0, this._width, this._height)),
                    this._texture && (this._texture.destroy(), this._texture = null);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(Ee.prototype), "destroy", this).call(this), this._setCPUMemory(0),
                    this._ctx && this._ctx.destroy && this._ctx.destroy(), this._ctx = null;
            }
        }, {
            key: "release",
            value: function release() {}
        }, {
            key: "_setContext",
            value: function _setContext(t) {
                this._ctx = t;
            }
        }, {
            key: "getContext",
            value: function getContext(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                return this.context;
            }
        }, {
            key: "getMemSize",
            value: function getMemSize() {
                return 0;
            }
        }, {
            key: "size",
            value: function size(t, e) {
                (this._width != t || this._height != e || this._source && (this._source.width != t || this._source.height != e)) && (this._width = t,
                    this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e),
                    this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(),
                        this._texture = null));
            }
        }, {
            key: "getTexture",
            value: function getTexture() {
                if (!this._texture) {
                    var t = new P();
                    t.loadImageSource(this.source), this._texture = new Kt(t);
                }
                return this._texture;
            }
        }, {
            key: "toBase64",
            value: function toBase64(t, e) {
                if (this._source) {
                    if (i.Render.isConchApp) {
                        var s = window;
                        if (2 == s.conchConfig.threadMode) throw "native 2 thread mode use toBase64Async";
                        var r = this._ctx._targets.sourceWidth,
                            a = this._ctx._targets.sourceHeight,
                            n = this._ctx._targets.getData(0, 0, r, a);
                        return s.conchToBase64FlipY ? s.conchToBase64FlipY(t, e, n.buffer, r, a) : s.conchToBase64(t, e, n.buffer, r, a);
                    }
                    return this._source.toDataURL(t, e);
                }
                return null;
            }
        }, {
            key: "toBase64Async",
            value: function toBase64Async(t, e, i) {
                var s = this._ctx._targets.sourceWidth,
                    r = this._ctx._targets.sourceHeight;
                this._ctx._targets.getDataAsync(0, 0, s, r, function(a) {
                    var n = window;
                    var h = n.conchToBase64FlipY ? n.conchToBase64FlipY(t, e, a.buffer, s, r) : n.conchToBase64(t, e, a.buffer, s, r);
                    i(h);
                });
            }
        }, {
            key: "context",
            get: function get() {
                return this._ctx ? this._ctx : (this._source == this ? this._ctx = new i.Context() : this._ctx = this._source.getContext(i.Render.isConchApp ? "layagl" : "2d"),
                    this._ctx._canvas = this, this._ctx);
            }
        }]);
        return Ee;
    }(b);
    var Ce = /* */ function() {
        function Ce() {
            _classCallCheck(this, Ce);
        }
        _createClass(Ce, [{
            key: "contains",
            value: function contains(t, e) {
                return !!Ce._isHitGraphic(t, e, this.hit) && !Ce._isHitGraphic(t, e, this.unHit);
            }
        }, {
            key: "hit",
            get: function get() {
                return this._hit || (this._hit = new i.Graphics()), this._hit;
            },
            set: function set(t) {
                this._hit = t;
            }
        }, {
            key: "unHit",
            get: function get() {
                return this._unHit || (this._unHit = new i.Graphics()), this._unHit;
            },
            set: function set(t) {
                this._unHit = t;
            }
        }], [{
            key: "_isHitGraphic",
            value: function _isHitGraphic(t, e, i) {
                if (!i) return !1;
                var s, r, a, n = i.cmds;
                if (!n && i._one && ((n = Ce._cmds).length = 1, n[0] = i._one), !n) return !1;
                for (r = n.length, s = 0; s < r; s++) {
                    if (a = n[s]) {
                        switch (a.cmdID) {
                            case "Translate":
                                t -= a.tx, e -= a.ty;
                        }
                        if (Ce._isHitCmd(t, e, a)) return !0;
                    }
                }
                return !1;
            }
        }, {
            key: "_isHitCmd",
            value: function _isHitCmd(t, e, i) {
                if (!i) return !1;
                var s = !1;
                switch (i.cmdID) {
                    case "DrawRect":
                        Ce._rect.setTo(i.x, i.y, i.width, i.height), s = Ce._rect.contains(t, e);
                        break;

                    case "DrawCircle":
                        s = (t -= i.x) * t + (e -= i.y) * e < i.radius * i.radius;
                        break;

                    case "DrawPoly":
                        t -= i.x, e -= i.y, s = Ce._ptInPolygon(t, e, i.points);
                }
                return s;
            }
        }, {
            key: "_ptInPolygon",
            value: function _ptInPolygon(t, e, i) {
                var s = Ce._ptPoint;
                s.setTo(t, e);
                var r, a, n, h, o, l = 0;
                o = i.length;
                for (var _ = 0; _ < o; _ += 2) {
                    if (r = i[_], a = i[_ + 1], n = i[(_ + 2) % o], a != (h = i[(_ + 3) % o]))
                        if (!(s.y < Math.min(a, h)))
                            if (!(s.y >= Math.max(a, h)))(s.y - a) * (n - r) / (h - a) + r > s.x && l++;
                }
                return l % 2 == 1;
            }
        }]);
        return Ce;
    }();
    Ce._cmds = [], Ce._rect = new g(), Ce._ptPoint = new f();
    var be = /* */ function() {
        function be() {
            _classCallCheck(this, be);
        }
        _createClass(be, null, [{
            key: "regClass",
            value: function regClass(t, e) {
                be._classMap[t] = e;
            }
        }, {
            key: "regShortClassName",
            value: function regShortClassName(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        s = i.name;
                    be._classMap[s] = i;
                }
            }
        }, {
            key: "getRegClass",
            value: function getRegClass(t) {
                return be._classMap[t];
            }
        }, {
            key: "getClass",
            value: function getClass(t) {
                var e = be._classMap[t] || be._classMap["Laya." + t] || t,
                    s = i.Laya;
                return "string" == typeof e ? i.__classMap[e] || s[t] : e;
            }
        }, {
            key: "getInstance",
            value: function getInstance(t) {
                var e = be.getClass(t);
                return e ? new e() : (console.warn("[error] Undefined class:", t), null);
            }
        }, {
            key: "createByJson",
            value: function createByJson(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                "string" == typeof t && (t = JSON.parse(t));
                var a = t.props;
                if (!e && !(e = r ? r.runWith(t) : be.getInstance(a.runtime || t.type))) return null;
                var n = t.child;
                if (n)
                    for (var h = 0, o = n.length; h < o; h++) {
                        var l = n[h];
                        if ("render" !== l.props.name && "render" !== l.props.renderType || !e._$set_itemRender) {
                            if ("Graphic" == l.type) be._addGraphicsToSprite(l, e);
                            else if (be._isDrawType(l.type)) be._addGraphicToSprite(l, e, !0);
                            else {
                                var _ = be.createByJson(l, null, i, s, r);
                                "Script" === l.type ? "owner" in _ ? _.owner = e : "target" in _ && (_.target = e) : "mask" == l.props.renderType ? e.mask = _ : e.addChild(_);
                            }
                        } else e.itemRender = l;
                    }
                if (a)
                    for (var c in a) {
                        var u = a[c];
                        "var" === c && i ? i[u] = e : u instanceof Array && e[c] instanceof Function ? e[c].apply(e, u) : e[c] = u;
                    }
                return s && t.customProps && s.runWith([e, t]), e.created && e.created(), e;
            }
        }, {
            key: "_addGraphicsToSprite",
            value: function _addGraphicsToSprite(t, e) {
                var i = t.child;
                if (i && !(i.length < 1)) {
                    var s, r, a = be._getGraphicsFromSprite(t, e),
                        n = 0,
                        h = 0;
                    for (t.props && (n = be._getObjVar(t.props, "x", 0), h = be._getObjVar(t.props, "y", 0)),
                        0 != n && 0 != h && a.translate(n, h), r = i.length, s = 0; s < r; s++) {
                        be._addGraphicToGraphics(i[s], a);
                    }
                    0 != n && 0 != h && a.translate(-n, -h);
                }
            }
        }, {
            key: "_addGraphicToSprite",
            value: function _addGraphicToSprite(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = i ? be._getGraphicsFromSprite(t, e) : e.graphics;
                be._addGraphicToGraphics(t, s);
            }
        }, {
            key: "_getGraphicsFromSprite",
            value: function _getGraphicsFromSprite(t, e) {
                if (!t || !t.props) return e.graphics;
                var i = t.props.renderType;
                if ("hit" === i || "unHit" === i) {
                    var s = e._style.hitArea || (e.hitArea = new Ce());
                    s[i] || (s[i] = new ve());
                    var r = s[i];
                }
                return r || (r = e.graphics), r;
            }
        }, {
            key: "_getTransformData",
            value: function _getTransformData(t) {
                var e;
                ("pivotX" in t || "pivotY" in t) && (e = e || new p()).translate(-be._getObjVar(t, "pivotX", 0), -be._getObjVar(t, "pivotY", 0));
                var i = be._getObjVar(t, "scaleX", 1),
                    s = be._getObjVar(t, "scaleY", 1),
                    r = be._getObjVar(t, "rotation", 0);
                be._getObjVar(t, "skewX", 0), be._getObjVar(t, "skewY", 0);
                return 1 == i && 1 == s && 0 == r || ((e = e || new p()).scale(i, s), e.rotate(.0174532922222222 * r)),
                    e;
            }
        }, {
            key: "_addGraphicToGraphics",
            value: function _addGraphicToGraphics(t, e) {
                var i, s;
                if ((i = t.props) && (s = be.DrawTypeDic[t.type])) {
                    var r = e,
                        a = be._getParams(i, s[1], s[2], s[3]),
                        n = be._tM;
                    (n || 1 != be._alpha) && (r.save(), n && r.transform(n), 1 != be._alpha && r.alpha(be._alpha)),
                    r[s[0]].apply(r, a), (n || 1 != be._alpha) && r.restore();
                }
            }
        }, {
            key: "_adptLineData",
            value: function _adptLineData(t) {
                return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]),
                    t;
            }
        }, {
            key: "_adptTextureData",
            value: function _adptTextureData(t) {
                return t[0] = i.Loader.getRes(t[0]), t;
            }
        }, {
            key: "_adptLinesData",
            value: function _adptLinesData(t) {
                return t[2] = be._getPointListByStr(t[2]), t;
            }
        }, {
            key: "_isDrawType",
            value: function _isDrawType(t) {
                return "Image" !== t && t in be.DrawTypeDic;
            }
        }, {
            key: "_getParams",
            value: function _getParams(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r, a, n, h = be._temParam;
                for (h.length = e.length, a = e.length, r = 0; r < a; r++) {
                    h[r] = be._getObjVar(t, e[r][0], e[r][1]);
                }
                return be._alpha = be._getObjVar(t, "alpha", 1), (n = be._getTransformData(t)) ? (i || (i = 0),
                        n.translate(h[i], h[i + 1]), h[i] = h[i + 1] = 0, be._tM = n) : be._tM = null, s && be[s] && (h = be[s](h)),
                    h;
            }
        }, {
            key: "_getPointListByStr",
            value: function _getPointListByStr(t) {
                var e, i, s = t.split(",");
                for (i = s.length, e = 0; e < i; e++) {
                    s[e] = parseFloat(s[e]);
                }
                return s;
            }
        }, {
            key: "_getObjVar",
            value: function _getObjVar(t, e, i) {
                return e in t ? t[e] : i;
            }
        }]);
        return be;
    }();
    be.DrawTypeDic = {
        Rect: ["drawRect", [
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ]],
        Circle: ["drawCircle", [
            ["x", 0],
            ["y", 0],
            ["radius", 0],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ]],
        Pie: ["drawPie", [
            ["x", 0],
            ["y", 0],
            ["radius", 0],
            ["startAngle", 0],
            ["endAngle", 0],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ]],
        Image: ["drawTexture", [
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0]
        ]],
        Texture: ["drawTexture", [
            ["skin", null],
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0]
        ], 1, "_adptTextureData"],
        FillTexture: ["fillTexture", [
            ["skin", null],
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0],
            ["repeat", null]
        ], 1, "_adptTextureData"],
        FillText: ["fillText", [
            ["text", ""],
            ["x", 0],
            ["y", 0],
            ["font", null],
            ["color", null],
            ["textAlign", null]
        ], 1],
        Line: ["drawLine", [
            ["x", 0],
            ["y", 0],
            ["toX", 0],
            ["toY", 0],
            ["lineColor", null],
            ["lineWidth", 0]
        ], 0, "_adptLineData"],
        Lines: ["drawLines", [
            ["x", 0],
            ["y", 0],
            ["points", ""],
            ["lineColor", null],
            ["lineWidth", 0]
        ], 0, "_adptLinesData"],
        Curves: ["drawCurves", [
            ["x", 0],
            ["y", 0],
            ["points", ""],
            ["lineColor", null],
            ["lineWidth", 0]
        ], 0, "_adptLinesData"],
        Poly: ["drawPoly", [
            ["x", 0],
            ["y", 0],
            ["points", ""],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ], 0, "_adptLinesData"]
    }, be._temParam = [], be._classMap = {};
    var Ae = /* */ function() {
        function Ae() {
            _classCallCheck(this, Ae);
        }
        _createClass(Ae, [{
            key: "reset",
            value: function reset() {
                return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(),
                    this.bounds = null, this.userBounds = null, this.temBM = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("BoundsStyle", this.reset());
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("BoundsStyle", Ae);
            }
        }]);
        return Ae;
    }();
    var Re = /* */ function() {
        function Re() {
            _classCallCheck(this, Re);
            this.reset();
        }
        _createClass(Re, [{
            key: "needBitmapCache",
            value: function needBitmapCache() {
                return this.cacheForFilters || !!this.mask;
            }
        }, {
            key: "needEnableCanvasRender",
            value: function needEnableCanvasRender() {
                return "none" != this.userSetCache || this.cacheForFilters || !!this.mask;
            }
        }, {
            key: "releaseContext",
            value: function releaseContext() {
                if (this.canvas && this.canvas.size) {
                    s.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0);
                    try {
                        this.canvas.width = 0, this.canvas.height = 0;
                    } catch (t) {}
                }
                this.canvas = null;
            }
        }, {
            key: "createContext",
            value: function createContext() {
                if (!this.canvas) {
                    this.canvas = s.getItem("CacheCanvas") || new Ee(!1);
                    var t = this.canvas.context;
                    t || (t = this.canvas.getContext("2d"));
                }
            }
        }, {
            key: "releaseFilterCache",
            value: function releaseFilterCache() {
                var t = this.filterCache;
                t && (t.destroy(), t.recycle(), this.filterCache = null);
            }
        }, {
            key: "recover",
            value: function recover() {
                this !== Re.EMPTY && s.recover("SpriteCache", this.reset());
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none",
                    this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1,
                    this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null,
                    this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(),
                    this.cacheRect = null, this;
            }
        }, {
            key: "_calculateCacheRect",
            value: function _calculateCacheRect(t, e, i, s) {
                var r, a = t._cacheStyle;
                if (a.cacheRect || (a.cacheRect = g.create()), "bitmap" === e ? ((r = t.getSelfBounds()).width = r.width + 2 * Re.CANVAS_EXTEND_EDGE,
                        r.height = r.height + 2 * Re.CANVAS_EXTEND_EDGE, r.x = r.x - t.pivotX, r.y = r.y - t.pivotY,
                        r.x = r.x - Re.CANVAS_EXTEND_EDGE, r.y = r.y - Re.CANVAS_EXTEND_EDGE, r.x = Math.floor(r.x + i) - i,
                        r.y = Math.floor(r.y + s) - s, r.width = Math.floor(r.width), r.height = Math.floor(r.height),
                        a.cacheRect.copyFrom(r)) : a.cacheRect.setTo(-t._style.pivotX, -t._style.pivotY, 1, 1),
                    r = a.cacheRect, t._style.scrollRect) {
                    var n = t._style.scrollRect;
                    r.x -= n.x, r.y -= n.y;
                }
                return Re._scaleInfo.setTo(1, 1), Re._scaleInfo;
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("SpriteCache", Re);
            }
        }]);
        return Re;
    }();
    Re.EMPTY = new Re(), Re._scaleInfo = new f(), Re.CANVAS_EXTEND_EDGE = 16;
    var we = /* */ function() {
        function we() {
            _classCallCheck(this, we);
            this.reset();
        }
        _createClass(we, [{
            key: "reset",
            value: function reset() {
                return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0,
                    this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null,
                    this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null,
                    this.dragging = null, this.blendMode = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this !== we.EMPTY && s.recover("SpriteStyle", this.reset());
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("SpriteStyle", we);
            }
        }]);
        return we;
    }();
    we.EMPTY = new we();
    var Se = /* */ function(_x4) {
        _inherits(Se, _x4);

        function Se() {
            var _this21;
            _classCallCheck(this, Se);
            _this21 = _possibleConstructorReturn(this, _getPrototypeOf(Se).call(this)), _this21._bits = 0,
                _this21._children = Se.ARRAY_EMPTY, _this21._extUIChild = Se.ARRAY_EMPTY, _this21._parent = null,
                _this21.name = "", _this21.destroyed = !1, _this21.createGLBuffer();
            return _this21;
        }
        _createClass(Se, [{
            key: "createGLBuffer",
            value: function createGLBuffer() {}
        }, {
            key: "_setBit",
            value: function _setBit(t, e) {
                t === Te.DISPLAY && this._getBit(t) != e && this._updateDisplayedInstage();
                e ? this._bits |= t : this._bits &= ~t;
            }
        }, {
            key: "_getBit",
            value: function _getBit(t) {
                return 0 != (this._bits & t);
            }
        }, {
            key: "_setUpNoticeChain",
            value: function _setUpNoticeChain() {
                this._getBit(Te.DISPLAY) && this._setBitUp(Te.DISPLAY);
            }
        }, {
            key: "_setBitUp",
            value: function _setBitUp(t) {
                var e = this;
                for (e._setBit(t, !0), e = e._parent; e;) {
                    if (e._getBit(t)) return;
                    e._setBit(t, !0), e = e._parent;
                }
            }
        }, {
            key: "on",
            value: function on(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return t !== zt.DISPLAY && t !== zt.UNDISPLAY || this._getBit(Te.DISPLAY) || this._setBitUp(Te.DISPLAY),
                    this._createListener(t, e, i, s, !1);
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return t !== zt.DISPLAY && t !== zt.UNDISPLAY || this._getBit(Te.DISPLAY) || this._setBitUp(Te.DISPLAY),
                    this._createListener(t, e, i, s, !0);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this),
                    this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(),
                    this._children = null, this.offAll();
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {}
        }, {
            key: "destroyChildren",
            value: function destroyChildren() {
                if (this._children)
                    for (var t = 0, e = this._children.length; t < e; t++) {
                        this._children[0].destroy(!0);
                    }
            }
        }, {
            key: "addChild",
            value: function addChild(t) {
                if (!t || this.destroyed || t === this) return t;
                if (t._zOrder && this._setBit(Te.HAS_ZORDER, !0), t._parent === this) {
                    var e = this.getChildIndex(t);
                    e !== this._children.length - 1 && (this._children.splice(e, 1), this._children.push(t),
                        this._childChanged());
                } else t._parent && t._parent.removeChild(t), this._children === Se.ARRAY_EMPTY && (this._children = []),
                    this._children.push(t), t._setParent(this), this._childChanged();
                return t;
            }
        }, {
            key: "addInputChild",
            value: function addInputChild(t) {
                if (this._extUIChild == Se.ARRAY_EMPTY) this._extUIChild = [t];
                else {
                    if (this._extUIChild.indexOf(t) >= 0) return null;
                    this._extUIChild.push(t);
                }
                return null;
            }
        }, {
            key: "removeInputChild",
            value: function removeInputChild(t) {
                var e = this._extUIChild.indexOf(t);
                e >= 0 && this._extUIChild.splice(e, 1);
            }
        }, {
            key: "addChildren",
            value: function addChildren() {
                for (var e = 0, i = arguments.length; e < i;) {
                    var _ref;
                    this.addChild((_ref = e++, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]));
                }
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(t, e) {
                if (!t || this.destroyed || t === this) return t;
                if (t._zOrder && this._setBit(Te.HAS_ZORDER, !0), e >= 0 && e <= this._children.length) {
                    if (t._parent === this) {
                        var i = this.getChildIndex(t);
                        this._children.splice(i, 1), this._children.splice(e, 0, t), this._childChanged();
                    } else t._parent && t._parent.removeChild(t), this._children === Se.ARRAY_EMPTY && (this._children = []),
                        this._children.splice(e, 0, t), t._setParent(this);
                    return t;
                }
                throw new Error("appendChildAt:The index is out of bounds");
            }
        }, {
            key: "getChildIndex",
            value: function getChildIndex(t) {
                return this._children.indexOf(t);
            }
        }, {
            key: "getChildByName",
            value: function getChildByName(t) {
                var e = this._children;
                if (e)
                    for (var i = 0, s = e.length; i < s; i++) {
                        var r = e[i];
                        if (r.name === t) return r;
                    }
                return null;
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(t) {
                return this._children[t] || null;
            }
        }, {
            key: "setChildIndex",
            value: function setChildIndex(t, e) {
                var i = this._children;
                if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
                var s = this.getChildIndex(t);
                if (s < 0) throw new Error("setChildIndex:node is must child of this object.");
                return i.splice(s, 1), i.splice(e, 0, t), this._childChanged(), t;
            }
        }, {
            key: "_childChanged",
            value: function _childChanged() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            }
        }, {
            key: "removeChild",
            value: function removeChild(t) {
                if (!this._children) return t;
                var e = this._children.indexOf(t);
                return this.removeChildAt(e);
            }
        }, {
            key: "removeSelf",
            value: function removeSelf() {
                return this._parent && this._parent.removeChild(this), this;
            }
        }, {
            key: "removeChildByName",
            value: function removeChildByName(t) {
                var e = this.getChildByName(t);
                return e && this.removeChild(e), e;
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(t) {
                var e = this.getChildAt(t);
                return e && (this._children.splice(t, 1), e._setParent(null)), e;
            }
        }, {
            key: "removeChildren",
            value: function removeChildren() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2147483647;
                if (this._children && this._children.length > 0) {
                    var i = this._children;
                    if (0 === t && e >= i.length - 1) {
                        var s = i;
                        this._children = Se.ARRAY_EMPTY;
                    } else s = i.splice(t, e - t);
                    for (var r = 0, a = s.length; r < a; r++) {
                        s[r]._setParent(null);
                    }
                }
                return this;
            }
        }, {
            key: "replaceChild",
            value: function replaceChild(t, e) {
                var i = this._children.indexOf(e);
                return i > -1 ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this),
                    t) : null;
            }
        }, {
            key: "_setParent",
            value: function _setParent(t) {
                this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event(zt.ADDED),
                    this._getBit(Te.DISPLAY) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)),
                    t._childChanged(this)) : (this._onRemoved(), this.event(zt.REMOVED), this._parent._childChanged(),
                    this._getBit(Te.DISPLAY) && this._displayChild(this, !1), this._parent = t));
            }
        }, {
            key: "_updateDisplayedInstage",
            value: function _updateDisplayedInstage() {
                var t;
                t = this;
                for (var e = i.stage, s = !1; t;) {
                    if (t._getBit(Te.DISPLAY)) {
                        s = t._getBit(Te.DISPLAYED_INSTAGE);
                        break;
                    }
                    if (t === e || t._getBit(Te.DISPLAYED_INSTAGE)) {
                        s = !0;
                        break;
                    }
                    t = t._parent;
                }
                this._setBit(Te.DISPLAYED_INSTAGE, s);
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                this._getBit(Te.DISPLAYED_INSTAGE) !== t && (this._setBit(Te.DISPLAYED_INSTAGE, t),
                    t ? this.event(zt.DISPLAY) : this.event(zt.UNDISPLAY));
            }
        }, {
            key: "_displayChild",
            value: function _displayChild(t, e) {
                var i = t._children;
                if (i)
                    for (var s = 0, r = i.length; s < r; s++) {
                        var a = i[s];
                        a._getBit(Te.DISPLAY) && (a._children.length > 0 ? this._displayChild(a, e) : a._setDisplay(e));
                    }
                t._setDisplay(e);
            }
        }, {
            key: "contains",
            value: function contains(t) {
                if (t === this) return !0;
                for (; t;) {
                    if (t._parent === this) return !0;
                    t = t._parent;
                }
                return !1;
            }
        }, {
            key: "timerLoop",
            value: function timerLoop(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                (this.scene ? this.scene.timer : i.timer).loop(t, e, s, r, a, n);
            }
        }, {
            key: "timerOnce",
            value: function timerOnce(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                (this.scene ? this.scene.timer : i.timer)._create(!1, !1, t, e, s, r, a);
            }
        }, {
            key: "frameLoop",
            value: function frameLoop(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                (this.scene ? this.scene.timer : i.timer)._create(!0, !0, t, e, s, r, a);
            }
        }, {
            key: "frameOnce",
            value: function frameOnce(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                (this.scene ? this.scene.timer : i.timer)._create(!0, !1, t, e, s, r, a);
            }
        }, {
            key: "clearTimer",
            value: function clearTimer(t, e) {
                (this.scene ? this.scene.timer : i.timer).clear(t, e);
            }
        }, {
            key: "callLater",
            value: function callLater(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                (this.scene ? this.scene.timer : i.timer).callLater(this, t, e);
            }
        }, {
            key: "runCallLater",
            value: function runCallLater(t) {
                (this.scene ? this.scene.timer : i.timer).runCallLater(this, t);
            }
        }, {
            key: "_onActive",
            value: function _onActive() {
                G.spriteCount++;
            }
        }, {
            key: "_onInActive",
            value: function _onInActive() {
                G.spriteCount--;
            }
        }, {
            key: "_onActiveInScene",
            value: function _onActiveInScene() {}
        }, {
            key: "_onInActiveInScene",
            value: function _onInActiveInScene() {}
        }, {
            key: "_parse",
            value: function _parse(t, e) {}
        }, {
            key: "_setBelongScene",
            value: function _setBelongScene(t) {
                if (!this._scene) {
                    this._scene = t, this._onActiveInScene();
                    for (var e = 0, i = this._children.length; e < i; e++) {
                        this._children[e]._setBelongScene(t);
                    }
                }
            }
        }, {
            key: "_setUnBelongScene",
            value: function _setUnBelongScene() {
                if (this._scene !== this) {
                    this._onInActiveInScene(), this._scene = null;
                    for (var t = 0, e = this._children.length; t < e; t++) {
                        this._children[t]._setUnBelongScene();
                    }
                }
            }
        }, {
            key: "onAwake",
            value: function onAwake() {}
        }, {
            key: "onEnable",
            value: function onEnable() {}
        }, {
            key: "_processActive",
            value: function _processActive() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts),
                    this._activeScripts();
            }
        }, {
            key: "_activeHierarchy",
            value: function _activeHierarchy(t) {
                if (this._setBit(Te.ACTIVE_INHIERARCHY, !0), this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var s = this._components[e];
                        s._isScript() ? s._enabled && t.push(s) : s._setActive(!0);
                    }
                for (this._onActive(), e = 0, i = this._children.length; e < i; e++) {
                    var r = this._children[e];
                    !r._getBit(Te.NOT_ACTIVE) && r._activeHierarchy(t);
                }
                this._getBit(Te.AWAKED) || (this._setBit(Te.AWAKED, !0), this.onAwake()), this.onEnable();
            }
        }, {
            key: "_activeScripts",
            value: function _activeScripts() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) {
                    var i = this._activeChangeScripts[t];
                    i._awaked || (i._awaked = !0, i._onAwake()), i._onEnable();
                }
                this._activeChangeScripts.length = 0;
            }
        }, {
            key: "_processInActive",
            value: function _processInActive() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts),
                    this._inActiveScripts();
            }
        }, {
            key: "_inActiveHierarchy",
            value: function _inActiveHierarchy(t) {
                if (this._onInActive(), this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var s = this._components[e];
                        s._setActive(!1), s._isScript() && s._enabled && t.push(s);
                    }
                for (this._setBit(Te.ACTIVE_INHIERARCHY, !1), e = 0, i = this._children.length; e < i; e++) {
                    var r = this._children[e];
                    r && !r._getBit(Te.NOT_ACTIVE) && r._inActiveHierarchy(t);
                }
                this.onDisable();
            }
        }, {
            key: "_inActiveScripts",
            value: function _inActiveScripts() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) {
                    this._activeChangeScripts[t].onDisable();
                }
                this._activeChangeScripts.length = 0;
            }
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "_onAdded",
            value: function _onAdded() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
                var t = this._parent.scene;
                t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive();
            }
        }, {
            key: "_onRemoved",
            value: function _onRemoved() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene();
            }
        }, {
            key: "_addComponentInstance",
            value: function _addComponentInstance(t) {
                this._components = this._components || [], this._components.push(t), t.owner = this,
                    t._onAdded(), this.activeInHierarchy && t._setActive(!0);
            }
        }, {
            key: "_destroyComponent",
            value: function _destroyComponent(t) {
                if (this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var s = this._components[e];
                        if (s === t) {
                            s._destroy(), this._components.splice(e, 1);
                            break;
                        }
                    }
            }
        }, {
            key: "_destroyAllComponent",
            value: function _destroyAllComponent() {
                if (this._components) {
                    for (var t = 0, e = this._components.length; t < e; t++) {
                        this._components[t]._destroy();
                    }
                    this._components.length = 0;
                }
            }
        }, {
            key: "_cloneTo",
            value: function _cloneTo(t, e, i) {
                var s = t;
                if (this._components)
                    for (var r = 0, a = this._components.length; r < a; r++) {
                        var n = s.addComponent(this._components[r].constructor);
                        this._components[r]._cloneTo(n);
                    }
            }
        }, {
            key: "addComponentIntance",
            value: function addComponentIntance(t) {
                if (t.owner) throw "Node:the component has belong to other node.";
                if (t.isSingleton && this.getComponent(t.constructor)) throw "Node:the component is singleton,can't add the second one.";
                return this._addComponentInstance(t), t;
            }
        }, {
            key: "addComponent",
            value: function addComponent(t) {
                var e = s.createByClass(t);
                if (e._destroyed = !1, e.isSingleton && this.getComponent(t)) throw "无法实例" + t + "组件，" + t + "组件已存在！";
                return this._addComponentInstance(e), e;
            }
        }, {
            key: "getComponent",
            value: function getComponent(t) {
                if (this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var s = this._components[e];
                        if (s instanceof t) return s;
                    }
                return null;
            }
        }, {
            key: "getComponents",
            value: function getComponents(t) {
                var e;
                if (this._components)
                    for (var i = 0, s = this._components.length; i < s; i++) {
                        var r = this._components[i];
                        r instanceof t && (e = e || []).push(r);
                    }
                return e;
            }
        }, {
            key: "numChildren",
            get: function get() {
                return this._children.length;
            }
        }, {
            key: "parent",
            get: function get() {
                return this._parent;
            }
        }, {
            key: "displayedInStage",
            get: function get() {
                return this._getBit(Te.DISPLAY) ? this._getBit(Te.DISPLAYED_INSTAGE) : (this._setBitUp(Te.DISPLAY),
                    this._getBit(Te.DISPLAYED_INSTAGE));
            }
        }, {
            key: "scene",
            get: function get() {
                return this._scene;
            }
        }, {
            key: "active",
            get: function get() {
                return !this._getBit(Te.NOT_READY) && !this._getBit(Te.NOT_ACTIVE);
            },
            set: function set(t) {
                if (t = !!t, !this._getBit(Te.NOT_ACTIVE) !== t) {
                    if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                    this._setBit(Te.NOT_ACTIVE, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive());
                }
            }
        }, {
            key: "activeInHierarchy",
            get: function get() {
                return this._getBit(Te.ACTIVE_INHIERARCHY);
            }
        }, {
            key: "timer",
            get: function get() {
                return this.scene ? this.scene.timer : i.timer;
            }
        }]);
        return Se;
    }(x);
    Se.ARRAY_EMPTY = [], be.regClass("laya.display.Node", Se), be.regClass("Laya.Node", Se);
    var Me = /* */ function(_Se) {
        _inherits(Me, _Se);

        function Me() {
            var _this22;
            _classCallCheck(this, Me);
            _this22 = _possibleConstructorReturn(this, _getPrototypeOf(Me).call(this)), _this22._x = 0,
                _this22._y = 0, _this22._width = 0, _this22._height = 0, _this22._visible = !0,
                _this22._mouseState = 0, _this22._zOrder = 0, _this22._renderType = 0, _this22._transform = null,
                _this22._tfChanged = !1, _this22._repaint = ce.REPAINT_NONE, _this22._texture = null,
                _this22._style = we.EMPTY, _this22._cacheStyle = Re.EMPTY, _this22._boundStyle = null,
                _this22._graphics = null, _this22.mouseThrough = !1, _this22.autoSize = !1, _this22.hitTestPrior = !1;
            return _this22;
        }
        _createClass(Me, [{
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                _get(_getPrototypeOf(Me.prototype), "destroy", this).call(this, t), this._style && this._style.recover(),
                    this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(),
                    this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null,
                    this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null,
                    this.texture = null;
            }
        }, {
            key: "updateZOrder",
            value: function updateZOrder() {
                K.updateOrder(this._children) && this.repaint();
            }
        }, {
            key: "_getBoundsStyle",
            value: function _getBoundsStyle() {
                return this._boundStyle || (this._boundStyle = Ae.create()), this._boundStyle;
            }
        }, {
            key: "_setCustomRender",
            value: function _setCustomRender() {}
        }, {
            key: "_setCacheAs",
            value: function _setCacheAs(t) {}
        }, {
            key: "_checkCanvasEnable",
            value: function _checkCanvasEnable() {
                var t = this._cacheStyle.needEnableCanvasRender();
                this._getCacheStyle().enableCanvasRender = t, t ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache,
                        this._cacheStyle.reCache = !0, this._renderType |= ce.CANVAS) : (this._cacheStyle.cacheAs = "none",
                        this._cacheStyle.releaseContext(), this._renderType &= ~ce.CANVAS), this._setCacheAs(this._cacheStyle.cacheAs),
                    this._setRenderType(this._renderType);
            }
        }, {
            key: "reCache",
            value: function reCache() {
                this._cacheStyle.reCache = !0, this._repaint |= ce.REPAINT_CACHE;
            }
        }, {
            key: "getRepaint",
            value: function getRepaint() {
                return this._repaint;
            }
        }, {
            key: "_setX",
            value: function _setX(t) {
                this._x = t;
            }
        }, {
            key: "_setY",
            value: function _setY(t) {
                this._y = t;
            }
        }, {
            key: "_setWidth",
            value: function _setWidth(t, e) {}
        }, {
            key: "_setHeight",
            value: function _setHeight(t, e) {}
        }, {
            key: "set_width",
            value: function set_width(t) {
                this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange());
            }
        }, {
            key: "get_width",
            value: function get_width() {
                return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0);
            }
        }, {
            key: "set_height",
            value: function set_height(t) {
                this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange());
            }
        }, {
            key: "get_height",
            value: function get_height() {
                return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0);
            }
        }, {
            key: "setSelfBounds",
            value: function setSelfBounds(t) {
                this._getBoundsStyle().userBounds = t;
            }
        }, {
            key: "getBounds",
            value: function getBounds() {
                return this._getBoundsStyle().bounds = g._getWrapRec(this._boundPointsToParent());
            }
        }, {
            key: "getSelfBounds",
            value: function getSelfBounds() {
                return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = g._getWrapRec(this._getBoundPointsM(!1)) : g.TEMP.setTo(0, 0, this.width, this.height);
            }
        }, {
            key: "_boundPointsToParent",
            value: function _boundPointsToParent() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e = 0,
                    i = 0;
                this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation,
                    this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
                var s = this._getBoundPointsM(t);
                if (!s || s.length < 1) return s;
                if (8 != s.length && (s = t ? rt.scanPList(s) : g._getWrapRec(s, g.TEMP)._getBoundPoints()), !this.transform) return K.transPointList(s, this._x - e, this._y - i), s;
                var r, a = f.TEMP,
                    n = s.length;
                for (r = 0; r < n; r += 2) {
                    a.x = s[r], a.y = s[r + 1], this.toParentPoint(a), s[r] = a.x, s[r + 1] = a.y;
                }
                return s;
            }
        }, {
            key: "getGraphicBounds",
            value: function getGraphicBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return this._graphics ? this._graphics.getBounds(t) : g.TEMP.setTo(0, 0, 0, 0);
            }
        }, {
            key: "_getBoundPointsM",
            value: function _getBoundPointsM() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (this._boundStyle && this._boundStyle.userBounds) return this._boundStyle.userBounds._getBoundPoints();
                if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []),
                    this._style.scrollRect) {
                    var e = K.clearArray(this._boundStyle.temBM),
                        i = g.TEMP;
                    return i.copyFrom(this._style.scrollRect), K.concatArray(e, i._getBoundPoints()),
                        e;
                }
                var s, r, a, n;
                this._graphics ? s = this._graphics.getBoundPoints() : (s = K.clearArray(this._boundStyle.temBM),
                    this._texture && ((i = g.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height),
                        K.concatArray(s, i._getBoundPoints())));
                for (var h = 0, o = (n = this._children).length; h < o; h++) {
                    (r = n[h]) instanceof Me && !0 === r._visible && (a = r._boundPointsToParent(t)) && (s = s ? K.concatArray(s, a) : a);
                }
                return s;
            }
        }, {
            key: "_getCacheStyle",
            value: function _getCacheStyle() {
                return this._cacheStyle === Re.EMPTY && (this._cacheStyle = Re.create()), this._cacheStyle;
            }
        }, {
            key: "getStyle",
            value: function getStyle() {
                return this._style === we.EMPTY && (this._style = we.create()), this._style;
            }
        }, {
            key: "setStyle",
            value: function setStyle(t) {
                this._style = t;
            }
        }, {
            key: "_setScaleX",
            value: function _setScaleX(t) {
                this._style.scaleX = t;
            }
        }, {
            key: "_setScaleY",
            value: function _setScaleY(t) {
                this._style.scaleY = t;
            }
        }, {
            key: "set_scaleX",
            value: function set_scaleX(t) {
                this.getStyle().scaleX !== t && (this._setScaleX(t), this._setTranformChange());
            }
        }, {
            key: "get_scaleX",
            value: function get_scaleX() {
                return this._style.scaleX;
            }
        }, {
            key: "set_scaleY",
            value: function set_scaleY(t) {
                this.getStyle().scaleY !== t && (this._setScaleY(t), this._setTranformChange());
            }
        }, {
            key: "get_scaleY",
            value: function get_scaleY() {
                return this._style.scaleY;
            }
        }, {
            key: "_setRotation",
            value: function _setRotation(t) {
                this._style.rotation = t;
            }
        }, {
            key: "_setSkewX",
            value: function _setSkewX(t) {
                this._style.skewX = t;
            }
        }, {
            key: "_setSkewY",
            value: function _setSkewY(t) {
                this._style.skewY = t;
            }
        }, {
            key: "_createTransform",
            value: function _createTransform() {
                return p.create();
            }
        }, {
            key: "_adjustTransform",
            value: function _adjustTransform() {
                this._tfChanged = !1;
                var t = this._style,
                    e = t.scaleX,
                    i = t.scaleY,
                    s = t.skewX,
                    r = t.skewY,
                    a = t.rotation,
                    n = this._transform || (this._transform = this._createTransform());
                if (a || 1 !== e || 1 !== i || 0 !== s || 0 !== r) {
                    n._bTransform = !0;
                    var h = .0174532922222222 * (a - s),
                        o = .0174532922222222 * (a + r),
                        l = Math.cos(o),
                        _ = Math.sin(o),
                        c = Math.sin(h),
                        u = Math.cos(h);
                    n.a = e * l, n.b = e * _, n.c = -i * c, n.d = i * u, n.tx = n.ty = 0;
                } else n.identity(), this._renderType &= ~ce.TRANSFORM, this._setRenderType(this._renderType);
                return n;
            }
        }, {
            key: "_setTransform",
            value: function _setTransform(t) {}
        }, {
            key: "get_transform",
            value: function get_transform() {
                return this._tfChanged ? this._adjustTransform() : this._transform;
            }
        }, {
            key: "set_transform",
            value: function set_transform(t) {
                this._tfChanged = !1;
                var e = this._transform || (this._transform = this._createTransform());
                t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0),
                    t ? this._renderType |= ce.TRANSFORM : this._renderType &= ~ce.TRANSFORM, this._setRenderType(this._renderType),
                    this.parentRepaint();
            }
        }, {
            key: "_setPivotX",
            value: function _setPivotX(t) {
                this.getStyle().pivotX = t;
            }
        }, {
            key: "_getPivotX",
            value: function _getPivotX() {
                return this._style.pivotX;
            }
        }, {
            key: "_setPivotY",
            value: function _setPivotY(t) {
                this.getStyle().pivotY = t;
            }
        }, {
            key: "_getPivotY",
            value: function _getPivotY() {
                return this._style.pivotY;
            }
        }, {
            key: "_setAlpha",
            value: function _setAlpha(t) {
                this._style.alpha !== t && (this.getStyle().alpha = t, 1 !== t ? this._renderType |= ce.ALPHA : this._renderType &= ~ce.ALPHA,
                    this._setRenderType(this._renderType), this.parentRepaint());
            }
        }, {
            key: "_getAlpha",
            value: function _getAlpha() {
                return this._style.alpha;
            }
        }, {
            key: "get_visible",
            value: function get_visible() {
                return this._visible;
            }
        }, {
            key: "set_visible",
            value: function set_visible(t) {
                this._visible !== t && (this._visible = t, this.parentRepaint(ce.REPAINT_ALL));
            }
        }, {
            key: "_setBlendMode",
            value: function _setBlendMode(t) {}
        }, {
            key: "_setGraphics",
            value: function _setGraphics(t) {}
        }, {
            key: "_setGraphicsCallBack",
            value: function _setGraphicsCallBack() {}
        }, {
            key: "_setScrollRect",
            value: function _setScrollRect(t) {}
        }, {
            key: "pos",
            value: function pos(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                if (this._x !== t || this._y !== e) {
                    if (this.destroyed) return this;
                    if (i) {
                        this._setX(t), this._setY(e), this.parentRepaint(ce.REPAINT_CACHE);
                        var s = this._cacheStyle.maskParent;
                        s && s.repaint(ce.REPAINT_CACHE);
                    } else this.x = t, this.y = e;
                }
                return this;
            }
        }, {
            key: "pivot",
            value: function pivot(t, e) {
                return this.pivotX = t, this.pivotY = e, this;
            }
        }, {
            key: "size",
            value: function size(t, e) {
                return this.width = t, this.height = e, this;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = this.getStyle();
                if (s.scaleX != t || s.scaleY != e) {
                    if (this.destroyed) return this;
                    i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t,
                        this.scaleY = e);
                }
                return this;
            }
        }, {
            key: "skew",
            value: function skew(t, e) {
                return this.skewX = t, this.skewY = e, this;
            }
        }, {
            key: "render",
            value: function render(t, e, i) {
                ye.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
            }
        }, {
            key: "drawToCanvas",
            value: function drawToCanvas(t, e, i, s) {
                return Me.drawToCanvas(this, this._renderType, t, e, i, s);
            }
        }, {
            key: "drawToTexture",
            value: function drawToTexture(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return Me.drawToTexture(this, this._renderType, t, e, i, s, r);
            }
        }, {
            key: "drawToTexture3D",
            value: function drawToTexture3D(t, e, i) {
                throw "not implement";
            }
        }, {
            key: "customRender",
            value: function customRender(t, e, i) {
                this._repaint = ce.REPAINT_ALL;
            }
        }, {
            key: "_applyFilters",
            value: function _applyFilters() {}
        }, {
            key: "_setColorFilter",
            value: function _setColorFilter(t) {}
        }, {
            key: "_isHaveGlowFilter",
            value: function _isHaveGlowFilter() {
                var t, e;
                if (this.filters)
                    for (t = 0; t < this.filters.length; t++) {
                        if (this.filters[t].type == z.GLOW) return !0;
                    }
                for (t = 0, e = this._children.length; t < e; t++) {
                    if (this._children[t]._isHaveGlowFilter()) return !0;
                }
                return !1;
            }
        }, {
            key: "localToGlobal",
            value: function localToGlobal(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                !0 === e && (t = new f(t.x, t.y));
                var r = this;
                for (s = s || i.stage; r && !r.destroyed && r != s;) {
                    t = r.toParentPoint(t), r = r.parent;
                }
                return t;
            }
        }, {
            key: "globalToLocal",
            value: function globalToLocal(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                e && (t = new f(t.x, t.y));
                var r = this,
                    a = [];
                for (s = s || i.stage; r && !r.destroyed && r != s;) {
                    a.push(r), r = r.parent;
                }
                for (var n = a.length - 1; n >= 0;) {
                    t = (r = a[n]).fromParentPoint(t), n--;
                }
                return t;
            }
        }, {
            key: "toParentPoint",
            value: function toParentPoint(t) {
                if (!t) return t;
                t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t),
                    t.x += this._x, t.y += this._y;
                var e = this._style.scrollRect;
                return e && (t.x -= e.x, t.y -= e.y), t;
            }
        }, {
            key: "fromParentPoint",
            value: function fromParentPoint(t) {
                if (!t) return t;
                t.x -= this._x, t.y -= this._y;
                var e = this._style.scrollRect;
                return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t),
                    t.x += this.pivotX, t.y += this.pivotY, t;
            }
        }, {
            key: "fromStagePoint",
            value: function fromStagePoint(t) {
                return t;
            }
        }, {
            key: "on",
            value: function on(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0,
                    this._setBit(Te.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(t, e, i, s, !1)) : _get(_getPrototypeOf(Me.prototype), "on", this).call(this, t, e, i, s);
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0,
                    this._setBit(Te.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(t, e, i, s, !0)) : _get(_getPrototypeOf(Me.prototype), "once", this).call(this, t, e, i, s);
            }
        }, {
            key: "_onDisplay",
            value: function _onDisplay(t) {
                if (1 !== this._mouseState) {
                    var e = this;
                    for (e = e.parent; e && 1 !== e._mouseState && !e._getBit(Te.HAS_MOUSE);) {
                        e.mouseEnabled = !0, e._setBit(Te.HAS_MOUSE, !0), e = e.parent;
                    }
                }
            }
        }, {
            key: "_setParent",
            value: function _setParent(t) {
                _get(_getPrototypeOf(Me.prototype), "_setParent", this).call(this, t), t && this._getBit(Te.HAS_MOUSE) && this._onDisplay();
            }
        }, {
            key: "loadImage",
            value: function loadImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (t) {
                    var s = i.Loader.textureMap[E.formatURL(t)];
                    s || ((s = new Kt()).load(t), i.Loader.cacheTexture(t, s)), this.texture = s, s.getIsReady() ? loaded.call(this) : s.once(zt.READY, this, loaded);
                } else this.texture = null, loaded.call(this);

                function loaded() {
                    this.repaint(ce.REPAINT_ALL), e && e.run();
                }
                return this;
            }
        }, {
            key: "repaint",
            value: function repaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ce.REPAINT_CACHE;
                this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t);
            }
        }, {
            key: "_needRepaint",
            value: function _needRepaint() {
                return this._repaint & ce.REPAINT_CACHE && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache;
            }
        }, {
            key: "_childChanged",
            value: function _childChanged() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this._children.length ? this._renderType |= ce.CHILDS : this._renderType &= ~ce.CHILDS,
                    this._setRenderType(this._renderType), t && this._getBit(Te.HAS_ZORDER) && i.systemTimer.callLater(this, this.updateZOrder),
                    this.repaint(ce.REPAINT_ALL);
            }
        }, {
            key: "parentRepaint",
            value: function parentRepaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ce.REPAINT_CACHE;
                var e = this._parent;
                !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t));
            }
        }, {
            key: "_setMask",
            value: function _setMask(t) {}
        }, {
            key: "startDrag",
            value: function startDrag() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 300;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : .92;
                this._style.dragging || (this.getStyle().dragging = new i.Dragging()), this._style.dragging.start(this, t, e, s, r, a, n, h);
            }
        }, {
            key: "stopDrag",
            value: function stopDrag() {
                this._style.dragging && this._style.dragging.stop();
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                t || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(),
                    this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), _get(_getPrototypeOf(Me.prototype), "_setDisplay", this).call(this, t);
            }
        }, {
            key: "hitTestPoint",
            value: function hitTestPoint(t, e) {
                var i = this.globalToLocal(f.TEMP.setTo(t, e));
                return t = i.x, e = i.y, (this._style.hitArea ? this._style.hitArea : this._width > 0 && this._height > 0 ? g.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e);
            }
        }, {
            key: "getMousePoint",
            value: function getMousePoint() {
                return this.globalToLocal(f.TEMP.setTo(i.stage.mouseX, i.stage.mouseY));
            }
        }, {
            key: "_setTexture",
            value: function _setTexture(t) {}
        }, {
            key: "_setRenderType",
            value: function _setRenderType(t) {}
        }, {
            key: "_setTranformChange",
            value: function _setTranformChange() {
                this._tfChanged = !0, this._renderType |= ce.TRANSFORM, this.parentRepaint(ce.REPAINT_CACHE);
            }
        }, {
            key: "_setBgStyleColor",
            value: function _setBgStyleColor(t, e, i, s, r) {}
        }, {
            key: "_setBorderStyleColor",
            value: function _setBorderStyleColor(t, e, i, s, r, a) {}
        }, {
            key: "captureMouseEvent",
            value: function captureMouseEvent(t) {
                i.MouseManager.instance.setCapture(this, t);
            }
        }, {
            key: "releaseMouseEvent",
            value: function releaseMouseEvent() {
                i.MouseManager.instance.releaseCapture();
            }
        }, {
            key: "customRenderEnable",
            set: function set(t) {
                t && (this._renderType |= ce.CUSTOM, this._setRenderType(this._renderType), this._setCustomRender());
            }
        }, {
            key: "cacheAs",
            get: function get() {
                return this._cacheStyle.cacheAs;
            },
            set: function set(t) {
                t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t),
                    this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()));
            }
        }, {
            key: "staticCache",
            get: function get() {
                return this._cacheStyle.staticCache;
            },
            set: function set(t) {
                this._getCacheStyle().staticCache = t, t || this.reCache();
            }
        }, {
            key: "x",
            get: function get() {
                return this._x;
            },
            set: function set(t) {
                if (!this.destroyed && this._x !== t) {
                    this._setX(t), this.parentRepaint(ce.REPAINT_CACHE);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(ce.REPAINT_CACHE);
                }
            }
        }, {
            key: "y",
            get: function get() {
                return this._y;
            },
            set: function set(t) {
                if (!this.destroyed && this._y !== t) {
                    this._setY(t), this.parentRepaint(ce.REPAINT_CACHE);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(ce.REPAINT_CACHE);
                }
            }
        }, {
            key: "width",
            get: function get() {
                return this.get_width();
            },
            set: function set(t) {
                this.set_width(t);
            }
        }, {
            key: "height",
            get: function get() {
                return this.get_height();
            },
            set: function set(t) {
                this.set_height(t);
            }
        }, {
            key: "displayWidth",
            get: function get() {
                return this.width * this.scaleX;
            }
        }, {
            key: "displayHeight",
            get: function get() {
                return this.height * this.scaleY;
            }
        }, {
            key: "scaleX",
            get: function get() {
                return this._style.scaleX;
            },
            set: function set(t) {
                this.set_scaleX(t);
            }
        }, {
            key: "scaleY",
            get: function get() {
                return this._style.scaleY;
            },
            set: function set(t) {
                this.set_scaleY(t);
            }
        }, {
            key: "rotation",
            get: function get() {
                return this._style.rotation;
            },
            set: function set(t) {
                this.getStyle().rotation !== t && (this._setRotation(t), this._setTranformChange());
            }
        }, {
            key: "skewX",
            get: function get() {
                return this._style.skewX;
            },
            set: function set(t) {
                this.getStyle().skewX !== t && (this._setSkewX(t), this._setTranformChange());
            }
        }, {
            key: "skewY",
            get: function get() {
                return this._style.skewY;
            },
            set: function set(t) {
                this.getStyle().skewY !== t && (this._setSkewY(t), this._setTranformChange());
            }
        }, {
            key: "transform",
            get: function get() {
                return this._tfChanged ? this._adjustTransform() : this._transform;
            },
            set: function set(t) {
                this.set_transform(t);
            }
        }, {
            key: "pivotX",
            get: function get() {
                return this._getPivotX();
            },
            set: function set(t) {
                this._setPivotX(t), this.repaint();
            }
        }, {
            key: "pivotY",
            get: function get() {
                return this._getPivotY();
            },
            set: function set(t) {
                this._setPivotY(t), this.repaint();
            }
        }, {
            key: "alpha",
            get: function get() {
                return this._getAlpha();
            },
            set: function set(t) {
                t = t < 0 ? 0 : t > 1 ? 1 : t, this._setAlpha(t);
            }
        }, {
            key: "visible",
            get: function get() {
                return this.get_visible();
            },
            set: function set(t) {
                this.set_visible(t);
            }
        }, {
            key: "blendMode",
            get: function get() {
                return this._style.blendMode;
            },
            set: function set(t) {
                this._setBlendMode(t), this.getStyle().blendMode = t, t && "source-over" != t ? this._renderType |= ce.BLEND : this._renderType &= ~ce.BLEND,
                    this._setRenderType(this._renderType), this.parentRepaint();
            }
        }, {
            key: "graphics",
            get: function get() {
                return this._graphics || (this.graphics = new ve(), this._graphics.autoDestroy = !0),
                    this._graphics;
            },
            set: function set(t) {
                this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._setGraphics(t),
                        this._renderType |= ce.GRAPHICS, t._sp = this) : this._renderType &= ~ce.GRAPHICS,
                    this._setRenderType(this._renderType), this.repaint();
            }
        }, {
            key: "scrollRect",
            get: function get() {
                return this._style.scrollRect;
            },
            set: function set(t) {
                this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= ce.CLIP : this._renderType &= ~ce.CLIP,
                    this._setRenderType(this._renderType);
            }
        }, {
            key: "filters",
            get: function get() {
                return this._cacheStyle.filters;
            },
            set: function set(t) {
                t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null,
                    t && t.length ? (this._setColorFilter(t[0]), this._renderType |= ce.FILTERS) : (this._setColorFilter(null),
                        this._renderType &= ~ce.FILTERS), this._setRenderType(this._renderType), t && t.length > 0 ? (this._getBit(Te.DISPLAY) || this._setBitUp(Te.DISPLAY),
                        1 == t.length && t[0] instanceof q || (this._getCacheStyle().cacheForFilters = !0,
                            this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1,
                        this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(),
                    this.repaint());
            }
        }, {
            key: "stage",
            get: function get() {
                return i.stage;
            }
        }, {
            key: "hitArea",
            get: function get() {
                return this._style.hitArea;
            },
            set: function set(t) {
                this.getStyle().hitArea = t;
            }
        }, {
            key: "mask",
            get: function get() {
                return this._cacheStyle.mask;
            },
            set: function set(t) {
                t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t,
                    this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null),
                    this._renderType |= ce.MASK, this._setRenderType(this._renderType), this.parentRepaint(ce.REPAINT_ALL));
            }
        }, {
            key: "mouseEnabled",
            get: function get() {
                return this._mouseState > 1;
            },
            set: function set(t) {
                this._mouseState = t ? 2 : 1;
            }
        }, {
            key: "globalScaleX",
            get: function get() {
                for (var t = 1, e = this; e && e !== i.stage;) {
                    t *= e.scaleX, e = e.parent;
                }
                return t;
            }
        }, {
            key: "globalRotation",
            get: function get() {
                for (var t = 0, e = this; e && e !== i.stage;) {
                    t += e.rotation, e = e.parent;
                }
                return t;
            }
        }, {
            key: "globalScaleY",
            get: function get() {
                for (var t = 1, e = this; e && e !== i.stage;) {
                    t *= e.scaleY, e = e.parent;
                }
                return t;
            }
        }, {
            key: "mouseX",
            get: function get() {
                return this.getMousePoint().x;
            }
        }, {
            key: "mouseY",
            get: function get() {
                return this.getMousePoint().y;
            }
        }, {
            key: "zOrder",
            get: function get() {
                return this._zOrder;
            },
            set: function set(t) {
                this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(Te.HAS_ZORDER, !0),
                    i.systemTimer.callLater(this._parent, this.updateZOrder)));
            }
        }, {
            key: "texture",
            get: function get() {
                return this._texture;
            },
            set: function set(t) {
                "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(),
                    this._texture = t, t && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width),
                    this._setHeight(this._texture, this.height), t ? this._renderType |= ce.TEXTURE : this._renderType &= ~ce.TEXTURE,
                    this._setRenderType(this._renderType), this.repaint());
            }
        }, {
            key: "viewport",
            get: function get() {
                return this._style.viewport;
            },
            set: function set(t) {
                var e;
                "string" == typeof t && (e = t.split(",")).length > 3 && (t = new g(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])));
                this.getStyle().viewport = t;
            }
        }, {
            key: "drawCallOptimize",
            set: function set(t) {
                this._setBit(Te.DRAWCALL_OPTIMIZE, t);
            },
            get: function get() {
                return this._getBit(Te.DRAWCALL_OPTIMIZE);
            }
        }], [{
            key: "drawToCanvas",
            value: function drawToCanvas(t, e, i, s, r, a) {
                r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
                var n = new ie();
                n.size(i, s), n.asBitmap = !0, n._targets.start(), n._targets.clear(0, 0, 0, 0),
                    ye.renders[e]._fun(t, n, r, a), n.flush(), n._targets.end(), n._targets.restore();
                var h = n._targets.getData(0, 0, i, s);
                n.destroy();
                for (var o = new ImageData(i, s), l = 4 * i, _ = o.data, c = s - 1, u = c * l, d = 0; c >= 0; c--) {
                    _.set(h.subarray(d, d + l), u), u -= l, d += l;
                }
                var p = new Ee(!0);
                return p.size(i, s), p.getContext("2d").putImageData(o, 0, 0), p;
            }
        }, {
            key: "drawToTexture",
            value: function drawToTexture(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                Me.drawtocanvCtx || (Me.drawtocanvCtx = new ie()), r -= t.x, a -= t.y, r |= 0, a |= 0,
                    i |= 0, s |= 0;
                var h = n ? Me.drawtocanvCtx : new ie();
                if (h.clear(), h.size(i, s), n ? h._targets = n : h.asBitmap = !0, h._targets.start(),
                    h._targets.clear(0, 0, 0, 0), ye.renders[e]._fun(t, h, r, a), h.flush(), h._targets.end(),
                    h._targets.restore(), !n) {
                    var o = new Kt(h._targets, Kt.INV_UV);
                    return h.destroy(!0), o;
                }
                return t._repaint = 0, n;
            }
        }, {
            key: "fromImage",
            value: function fromImage(t) {
                return new Me().loadImage(t);
            }
        }]);
        return Me;
    }(Se);
    be.regClass("laya.display.Sprite", Me), be.regClass("Laya.Sprite", Me);
    var Ie = /* */ function(_we) {
        _inherits(Ie, _we);

        function Ie() {
            var _this23;
            _classCallCheck(this, Ie);
            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(Ie).apply(this, arguments)),
                _this23.italic = !1;
            return _this23;
        }
        _createClass(Ie, [{
            key: "reset",
            value: function reset() {
                return _get(_getPrototypeOf(Ie.prototype), "reset", this).call(this), this.italic = !1,
                    this.align = "left", this.wordWrap = !1, this.leading = 0, this.padding = [0, 0, 0, 0],
                    this.bgColor = null, this.borderColor = null, this.asPassword = !1, this.stroke = 0,
                    this.strokeColor = "#000000", this.bold = !1, this.underline = !1, this.underlineColor = null,
                    this.currBitmapFont = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this !== Ie.EMPTY && s.recover("TextStyle", this.reset());
            }
        }, {
            key: "render",
            value: function render(t, e, i, s) {
                (this.bgColor || this.borderColor) && e.drawRect(i, s, t.width, t.height, this.bgColor, this.borderColor, 1);
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("TextStyle", Ie);
            }
        }]);
        return Ie;
    }(we);
    Ie.EMPTY = new Ie();
    var Pe = /* */ function(_Me) {
        _inherits(Pe, _Me);

        function Pe() {
            var _this24;
            _classCallCheck(this, Pe);
            _this24 = _possibleConstructorReturn(this, _getPrototypeOf(Pe).call(this)), _this24._textWidth = 0,
                _this24._textHeight = 0, _this24._lines = [], _this24._lineWidths = [], _this24._startX = 0,
                _this24._startY = 0, _this24._charSize = {}, _this24._valign = "top", _this24._fontSize = Pe.defaultFontSize,
                _this24._font = Pe.defaultFont, _this24._color = "#000000", _this24._singleCharRender = !1,
                _this24.overflow = Pe.VISIBLE, _this24._style = Ie.EMPTY;
            return _this24;
        }
        _createClass(Pe, [{
            key: "getStyle",
            value: function getStyle() {
                return this._style === Ie.EMPTY && (this._style = Ie.create()), this._style;
            }
        }, {
            key: "_getTextStyle",
            value: function _getTextStyle() {
                return this._style === Ie.EMPTY && (this._style = Ie.create()), this._style;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                _get(_getPrototypeOf(Pe.prototype), "destroy", this).call(this, t), this._clipPoint = null,
                    this._lines = null, this._lineWidths = null, this._words && this._words.forEach(function(t) {
                        t.cleanCache();
                    }), this._words = null, this._charSize = null;
            }
        }, {
            key: "_getBoundPointsM",
            value: function _getBoundPointsM() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e = g.TEMP;
                return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
            }
        }, {
            key: "getGraphicBounds",
            value: function getGraphicBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e = g.TEMP;
                return e.setTo(0, 0, this.width, this.height), e;
            }
        }, {
            key: "_getCSSStyle",
            value: function _getCSSStyle() {
                return this._style;
            }
        }, {
            key: "get_text",
            value: function get_text() {
                return this._text || "";
            }
        }, {
            key: "set_text",
            value: function set_text(t) {
                this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event(zt.CHANGE),
                    this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }
        }, {
            key: "lang",
            value: function lang(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                if (t = Pe.langPacks && Pe.langPacks[t] ? Pe.langPacks[t] : t, arguments.length < 2) this._text = t;
                else {
                    for (var c = 0, u = arguments.length; c < u; c++) {
                        t = t.replace("{" + c + "}", arguments[c + 1]);
                    }
                    this._text = t;
                }
            }
        }, {
            key: "get_color",
            value: function get_color() {
                return this._color;
            }
        }, {
            key: "set_color",
            value: function set_color(t) {
                this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
            }
        }, {
            key: "set_bgColor",
            value: function set_bgColor(t) {
                this._getTextStyle().bgColor = t, this._renderType |= ce.STYLE, this._setBgStyleColor(0, 0, this.width, this.height, t),
                    this._setRenderType(this._renderType), this.isChanged = !0;
            }
        }, {
            key: "get_bgColor",
            value: function get_bgColor() {
                return this._style.bgColor;
            }
        }, {
            key: "_getContextFont",
            value: function _getContextFont() {
                return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (i.Browser.onIPhone && Pe.fontFamilyMap[this.font] || this.font);
            }
        }, {
            key: "_isPassWordMode",
            value: function _isPassWordMode() {
                var t = this._style.asPassword;
                return "prompt" in this && this.prompt == this._text && (t = !1), t;
            }
        }, {
            key: "_getPassWordTxt",
            value: function _getPassWordTxt(t) {
                var e;
                e = "";
                for (var i = t.length; i > 0; i--) {
                    e += "●";
                }
                return e;
            }
        }, {
            key: "_renderText",
            value: function _renderText() {
                var t = this.padding,
                    e = this._lines.length;
                this.overflow != Pe.VISIBLE && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
                var s = this.scrollY / (this._charSize.height + this.leading) | 0,
                    r = this.graphics;
                r.clear(!0);
                var a = this._getContextFont();
                i.Browser.context.font = a;
                var n = t[3],
                    h = "left",
                    o = this._lines,
                    l = this.leading + this._charSize.height,
                    _ = this._style.currBitmapFont;
                _ && (l = this.leading + _.getMaxHeight());
                var c = t[0];
                if (!_ && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (h = "right",
                        n = this._width - t[1]) : "center" == this.align && (h = "center", n = .5 * this._width + t[3] - t[1])),
                    this._height > 0) {
                    var u = this._textHeight > this._height ? "top" : this.valign;
                    "middle" === u ? c = .5 * (this._height - e * l) + t[0] - t[2] : "bottom" === u && (c = this._height - e * l - t[2]);
                }
                var d = this._style;
                if (_ && _.autoScaleSize) var p = _.fontSize / this.fontSize;
                if (this._clipPoint) {
                    var f, g;
                    if (r.save(), _ && _.autoScaleSize) f = this._width ? this._width - t[3] - t[1] : this._textWidth,
                        g = this._height ? this._height - t[0] - t[2] : this._textHeight, f *= p, g *= p,
                        r.clipRect(t[3], t[0], f, g);
                    else r.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                    this.repaint();
                }
                var m = d.asPassword;
                "prompt" in this && this.prompt == this._text && (m = !1);
                for (var v = 0, T = 0, x = Math.min(this._lines.length, e + s) || 1, y = s; y < x; y++) {
                    var E, C = o[y];
                    if (m) {
                        var b = C.length;
                        C = "";
                        for (var A = b; A > 0; A--) {
                            C += "●";
                        }
                    }
                    if (null == C && (C = ""), v = n - (this._clipPoint ? this._clipPoint.x : 0), T = c + l * y - (this._clipPoint ? this._clipPoint.y : 0),
                        this.underline && this._drawUnderline(h, v, T, y), _) {
                        var R = this.width;
                        _.autoScaleSize && (R = this.width * p), _._drawText(C, this, v, T, this.align, R);
                    } else this._words || (this._words = []), this._words.length > y - s ? E = this._words[y - s] : (E = new qt(),
                        this._words.push(E)), E.setText(C), E.splitRender = this._singleCharRender, d.stroke ? r.fillBorderText(E, v, T, a, this.color, d.strokeColor, d.stroke, h) : r.fillText(E, v, T, a, this.color, h);
                }
                if (_ && _.autoScaleSize) {
                    var w = 1 / p;
                    this.scale(w, w);
                }
                this._clipPoint && r.restore(), this._startX = n, this._startY = c;
            }
        }, {
            key: "_drawUnderline",
            value: function _drawUnderline(t, e, i, s) {
                var r = this._lineWidths[s];
                switch (t) {
                    case "center":
                        e -= r / 2;
                        break;

                    case "right":
                        e -= r;
                }
                i += this._charSize.height, this._graphics.drawLine(e, i, e + r, i, this.underlineColor || this.color, 1);
            }
        }, {
            key: "typeset",
            value: function typeset() {
                if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0,
                    void this.graphics.clear(!0);
                i.Render.isConchApp ? window.conchTextCanvas.font = this._getContextFont() : i.Browser.context.font = this._getContextFont(),
                    this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text),
                    this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new f(0, 0)) : this._clipPoint = null,
                    this._renderText();
            }
        }, {
            key: "_evalTextSize",
            value: function _evalTextSize() {
                var t, e;
                t = Math.max.apply(this, this._lineWidths), e = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2],
                    t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e);
            }
        }, {
            key: "_checkEnabledViewportOrNot",
            value: function _checkEnabledViewportOrNot() {
                return this.overflow == Pe.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height);
            }
        }, {
            key: "changeText",
            value: function changeText(t) {
                this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
            }
        }, {
            key: "_parseLines",
            value: function _parseLines(t) {
                var e = this.wordWrap || this.overflow == Pe.HIDDEN;
                if (e) var s = this._getWordWrapWidth();
                var r = this._style.currBitmapFont;
                if (r) this._charSize.width = r.getMaxWidth(), this._charSize.height = r.getMaxHeight();
                else {
                    var a = null;
                    (a = i.Render.isConchApp ? window.conchTextCanvas.measureText(Pe._testWord) : i.Browser.context.measureText(Pe._testWord)) || (a = {
                        width: 100
                    }), this._charSize.width = a.width, this._charSize.height = a.height || this.fontSize;
                }
                for (var n = t.replace(/\r\n/g, "\n").split("\n"), h = 0, o = n.length; h < o; h++) {
                    var l = n[h];
                    e ? this._parseLine(l, s) : (this._lineWidths.push(this._getTextWidth(l)), this._lines.push(l));
                }
            }
        }, {
            key: "_parseLine",
            value: function _parseLine(t, e) {
                var i = this._lines,
                    s = 0,
                    r = 0,
                    a = 0,
                    n = 0;
                if ((r = this._getTextWidth(t)) <= e) return i.push(t), void this._lineWidths.push(r);
                r = this._charSize.width, 0 == (s = Math.floor(e / r)) && (s = 1), a = r = this._getTextWidth(t.substring(0, s));
                for (var h = s, o = t.length; h < o; h++) {
                    if ((a += r = this._getTextWidth(t.charAt(h))) > e)
                        if (this.wordWrap) {
                            var l = t.substring(n, h);
                            if (l.charCodeAt(l.length - 1) < 255) {
                                var _ = /(?:\w|-)+$/.exec(l);
                                _ && (h = _.index + n, 0 == _.index ? h += l.length : l = t.substring(n, h));
                            }
                            if (i.push(l), this._lineWidths.push(a - r), n = h, !(h + s < o)) {
                                i.push(t.substring(n, o)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])),
                                    n = -1;
                                break;
                            }
                            h += s, a = r = this._getTextWidth(t.substring(n, h)), h--;
                        } else if (this.overflow == Pe.HIDDEN) return i.push(t.substring(0, h)), void this._lineWidths.push(this._getTextWidth(i[i.length - 1]));
                }
                this.wordWrap && -1 != n && (i.push(t.substring(n, o)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])));
            }
        }, {
            key: "_getTextWidth",
            value: function _getTextWidth(t) {
                var e = this._style.currBitmapFont;
                if (e) return e.getTextWidth(t);
                if (i.Render.isConchApp) return window.conchTextCanvas.measureText(t).width;
                return (i.Browser.context.measureText(t) || {
                    width: 100
                }).width;
            }
        }, {
            key: "_getWordWrapWidth",
            value: function _getWordWrapWidth() {
                var t, e = this.padding,
                    s = this._style.currBitmapFont;
                return (t = s && s.autoScaleSize ? this._width * (s.fontSize / this.fontSize) : this._width) <= 0 && (t = this.wordWrap ? 100 : i.Browser.width),
                    t <= 0 && (t = 100), t - e[3] - e[1];
            }
        }, {
            key: "getCharPoint",
            value: function getCharPoint(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._isChanged && i.systemTimer.runCallLater(this, this.typeset);
                for (var s = 0, r = this._lines, a = 0, n = 0, h = r.length; n < h; n++) {
                    if (t < (s += r[n].length)) {
                        var o = n;
                        break;
                    }
                    a = s;
                }
                var l = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
                i.Browser.context.font = l;
                var _ = this._getTextWidth(this._text.substring(a, t));
                return (e || new f()).setTo(this._startX + _ - (this._clipPoint ? this._clipPoint.x : 0), this._startY + o * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
            }
        }, {
            key: "width",
            get: function get() {
                return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
            },
            set: function set(t) {
                t != this._width && (_get(_getPrototypeOf(Pe.prototype), "set_width", this).call(this, t),
                    this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }
        }, {
            key: "height",
            get: function get() {
                return this._height ? this._height : this.textHeight;
            },
            set: function set(t) {
                t != this._height && (_get(_getPrototypeOf(Pe.prototype), "set_height", this).call(this, t),
                    this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }
        }, {
            key: "textWidth",
            get: function get() {
                return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textWidth;
            }
        }, {
            key: "textHeight",
            get: function get() {
                return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textHeight;
            }
        }, {
            key: "text",
            get: function get() {
                return this._text || "";
            },
            set: function set(t) {
                this.set_text(t);
            }
        }, {
            key: "font",
            get: function get() {
                return this._font;
            },
            set: function set(t) {
                this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)),
                    Pe._bitmapFonts && Pe._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = Pe._bitmapFonts[t]),
                    this._font = t, this.isChanged = !0;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._fontSize;
            },
            set: function set(t) {
                this._fontSize != t && (this._fontSize = t, this.isChanged = !0);
            }
        }, {
            key: "bold",
            get: function get() {
                return this._style.bold;
            },
            set: function set(t) {
                this._getTextStyle().bold = t, this.isChanged = !0;
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                this.set_color(t);
            }
        }, {
            key: "italic",
            get: function get() {
                return this._style.italic;
            },
            set: function set(t) {
                this._getTextStyle().italic = t, this.isChanged = !0;
            }
        }, {
            key: "align",
            get: function get() {
                return this._style.align;
            },
            set: function set(t) {
                this._getTextStyle().align = t, this.isChanged = !0;
            }
        }, {
            key: "valign",
            get: function get() {
                return this._valign;
            },
            set: function set(t) {
                this._valign = t, this.isChanged = !0;
            }
        }, {
            key: "wordWrap",
            get: function get() {
                return this._style.wordWrap;
            },
            set: function set(t) {
                this._getTextStyle().wordWrap = t, this.isChanged = !0;
            }
        }, {
            key: "leading",
            get: function get() {
                return this._style.leading;
            },
            set: function set(t) {
                this._getTextStyle().leading = t, this.isChanged = !0;
            }
        }, {
            key: "padding",
            get: function get() {
                return this._style.padding;
            },
            set: function set(t) {
                if ("string" == typeof t) {
                    var e, i, s;
                    for (s = (e = t.split(",")).length; e.length < 4;) {
                        e.push(0);
                    }
                    for (i = 0; i < s; i++) {
                        e[i] = parseFloat(e[i]) || 0;
                    }
                    t = e;
                }
                this._getTextStyle().padding = t, this.isChanged = !0;
            }
        }, {
            key: "bgColor",
            get: function get() {
                return this._style.bgColor;
            },
            set: function set(t) {
                this.set_bgColor(t);
            }
        }, {
            key: "borderColor",
            get: function get() {
                return this._style.borderColor;
            },
            set: function set(t) {
                this._getTextStyle().borderColor = t, this._renderType |= ce.STYLE, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1),
                    this._setRenderType(this._renderType), this.isChanged = !0;
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._style.stroke;
            },
            set: function set(t) {
                this._getTextStyle().stroke = t, this.isChanged = !0;
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._style.strokeColor;
            },
            set: function set(t) {
                this._getTextStyle().strokeColor = t, this.isChanged = !0;
            }
        }, {
            key: "isChanged",
            set: function set(t) {
                this._isChanged !== t && (this._isChanged = t, t && i.systemTimer.callLater(this, this.typeset));
            }
        }, {
            key: "scrollX",
            set: function set(t) {
                if (!(this.overflow != Pe.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                    t = t < this.padding[3] ? this.padding[3] : t;
                    var e = this._textWidth - this._width;
                    t = t > e ? e : t, this._clipPoint.x = t, this._renderText();
                }
            },
            get: function get() {
                return this._clipPoint ? this._clipPoint.x : 0;
            }
        }, {
            key: "scrollY",
            set: function set(t) {
                if (!(this.overflow != Pe.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                    t = t < this.padding[0] ? this.padding[0] : t;
                    var e = this._textHeight - this._height;
                    t = t > e ? e : t, this._clipPoint.y = t, this._renderText();
                }
            },
            get: function get() {
                return this._clipPoint ? this._clipPoint.y : 0;
            }
        }, {
            key: "maxScrollX",
            get: function get() {
                return this.textWidth < this._width ? 0 : this._textWidth - this._width;
            }
        }, {
            key: "maxScrollY",
            get: function get() {
                return this.textHeight < this._height ? 0 : this._textHeight - this._height;
            }
        }, {
            key: "lines",
            get: function get() {
                return this._isChanged && this.typeset(), this._lines;
            }
        }, {
            key: "underlineColor",
            get: function get() {
                return this._style.underlineColor;
            },
            set: function set(t) {
                this._getTextStyle().underlineColor = t, this._isChanged || this._renderText();
            }
        }, {
            key: "underline",
            get: function get() {
                return this._style.underline;
            },
            set: function set(t) {
                this._getTextStyle().underline = t;
            }
        }, {
            key: "singleCharRender",
            set: function set(t) {
                this._singleCharRender = t;
            },
            get: function get() {
                return this._singleCharRender;
            }
        }], [{
            key: "defaultFontStr",
            value: function defaultFontStr() {
                return Pe.defaultFontSize + "px " + Pe.defaultFont;
            }
        }, {
            key: "registerBitmapFont",
            value: function registerBitmapFont(t, e) {
                Pe._bitmapFonts || (Pe._bitmapFonts = {}), Pe._bitmapFonts[t] = e;
            }
        }, {
            key: "unregisterBitmapFont",
            value: function unregisterBitmapFont(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                if (Pe._bitmapFonts && Pe._bitmapFonts[t]) {
                    var i = Pe._bitmapFonts[t];
                    e && i.destroy(), delete Pe._bitmapFonts[t];
                }
            }
        }]);
        return Pe;
    }(Me);
    Pe.VISIBLE = "visible", Pe.SCROLL = "scroll", Pe.HIDDEN = "hidden", Pe.defaultFontSize = 12,
        Pe.defaultFont = "Arial", Pe.isComplexText = !1, Pe.fontFamilyMap = {
            "报隶": "报隶-简",
            "黑体": "黑体-简",
            "楷体": "楷体-简",
            "兰亭黑": "兰亭黑-简",
            "隶变": "隶变-简",
            "凌慧体": "凌慧体-简",
            "翩翩体": "翩翩体-简",
            "苹方": "苹方-简",
            "手札体": "手札体-简",
            "宋体": "宋体-简",
            "娃娃体": "娃娃体-简",
            "魏碑": "魏碑-简",
            "行楷": "行楷-简",
            "雅痞": "雅痞-简",
            "圆体": "圆体-简"
        }, Pe._testWord = "游", Pe.CharacterCache = !0, Pe.RightToLeft = !1, i.regClass(Pe),
        be.regClass("laya.display.Text", Pe), be.regClass("Laya.Text", Pe);
    var Le = /* */ function(_Pe) {
        _inherits(Le, _Pe);

        function Le() {
            var _this25;
            _classCallCheck(this, Le);
            _this25 = _possibleConstructorReturn(this, _getPrototypeOf(Le).call(this)), _this25._multiline = !1,
                _this25._editable = !0, _this25._maxChars = 1e5, _this25._type = "text", _this25._prompt = "",
                _this25._promptColor = "#A9A9A9", _this25._originColor = "#000000", _this25._content = "",
                Le.IOS_IFRAME = i.Browser.onIOS && i.Browser.window.top != i.Browser.window.self,
                _this25._width = 100, _this25._height = 20, _this25.multiline = !1, _this25.overflow = Pe.SCROLL,
                _this25.on(zt.MOUSE_DOWN, _assertThisInitialized(_this25), _this25._onMouseDown),
                _this25.on(zt.UNDISPLAY, _assertThisInitialized(_this25), _this25._onUnDisplay);
            return _this25;
        }
        _createClass(Le, [{
            key: "setSelection",
            value: function setSelection(t, e) {
                this.focus = !0, Le.inputElement.selectionStart = t, Le.inputElement.selectionEnd = e;
            }
        }, {
            key: "_onUnDisplay",
            value: function _onUnDisplay() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.focus = !1;
            }
        }, {
            key: "_onMouseDown",
            value: function _onMouseDown(t) {
                this.focus = !0;
            }
        }, {
            key: "_syncInputTransform",
            value: function _syncInputTransform() {
                var t = this.nativeInput,
                    e = K.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
                    s = this._width - this.padding[1] - this.padding[3],
                    r = this._height - this.padding[0] - this.padding[2];
                i.Render.isConchApp ? (t.setScale(e.scaleX, e.scaleY), t.setSize(s, r), t.setPos(e.x, e.y)) : (Le.inputContainer.style.transform = Le.inputContainer.style.webkitTransform = "scale(" + e.scaleX + "," + e.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)",
                    t.style.width = s + "px", t.style.height = r + "px", Le.inputContainer.style.left = e.x + "px",
                    Le.inputContainer.style.top = e.y + "px");
            }
        }, {
            key: "select",
            value: function select() {
                this.nativeInput.select();
            }
        }, {
            key: "_setInputMethod",
            value: function _setInputMethod() {
                Le.input.parentElement && Le.inputContainer.removeChild(Le.input), Le.area.parentElement && Le.inputContainer.removeChild(Le.area),
                    Le.inputElement = this._multiline ? Le.area : Le.input, Le.inputContainer.appendChild(Le.inputElement),
                    Pe.RightToLeft && (Le.inputElement.style.direction = "rtl");
            }
        }, {
            key: "_focusIn",
            value: function _focusIn() {
                Le.isInputting = !0;
                var t = this.nativeInput;
                this._focus = !0;
                var e = t.style;
                e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable,
                    i.Render.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)),
                    t.maxLength = this._maxChars;
                this.padding;
                if (t.value = this._content, t.placeholder = this._prompt, i.stage.off(zt.KEY_DOWN, this, this._onKeyDown),
                    i.stage.on(zt.KEY_DOWN, this, this._onKeyDown), i.stage.focus = this, this.event(zt.FOCUS),
                    i.Browser.onPC && t.focus(), !(i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame)) {
                    this._text;
                    this._text = null;
                }
                this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(i.Browser.onIPhone && Pe.fontFamilyMap[this.font] || this.font),
                    i.Render.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px",
                    e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal",
                    e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !i.Render.isConchApp && i.Browser.onPC && i.systemTimer.frameLoop(1, this, this._syncInputTransform);
            }
        }, {
            key: "_setPromptColor",
            value: function _setPromptColor() {
                Le.promptStyleDOM = i.Browser.getElementById("promptStyle"), Le.promptStyleDOM || (Le.promptStyleDOM = i.Browser.createElement("style"),
                        Le.promptStyleDOM.setAttribute("id", "promptStyle"), i.Browser.document.head.appendChild(Le.promptStyleDOM)),
                    Le.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
            }
        }, {
            key: "_focusOut",
            value: function _focusOut() {
                Le.isInputting && (Le.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value,
                    this._content ? (_get(_getPrototypeOf(Le.prototype), "set_text", this).call(this, this._content),
                        _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, this._originColor)) : (_get(_getPrototypeOf(Le.prototype), "set_text", this).call(this, this._prompt),
                        _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, this._promptColor)),
                    i.stage.off(zt.KEY_DOWN, this, this._onKeyDown), i.stage.focus = null, this.event(zt.BLUR),
                    this.event(zt.CHANGE), i.Render.isConchApp && this.nativeInput.blur(), i.Browser.onPC && i.systemTimer.clear(this, this._syncInputTransform));
            }
        }, {
            key: "_onKeyDown",
            value: function _onKeyDown(t) {
                13 === t.keyCode && (i.Browser.onMobile && !this._multiline && (this.focus = !1),
                    this.event(zt.ENTER));
            }
        }, {
            key: "changeText",
            value: function changeText(t) {
                this._content = t, this._focus ? (this.nativeInput.value = t || "", this.event(zt.CHANGE)) : _get(_getPrototypeOf(Le.prototype), "changeText", this).call(this, t);
            }
        }, {
            key: "multiline",
            get: function get() {
                return this._multiline;
            },
            set: function set(t) {
                this._multiline = t, this.valign = t ? "top" : "middle";
            }
        }, {
            key: "nativeInput",
            get: function get() {
                return this._multiline ? Le.area : Le.input;
            }
        }, {
            key: "focus",
            get: function get() {
                return this._focus;
            },
            set: function set(t) {
                var e = this.nativeInput;
                this._focus !== t && (t ? (e.target ? e.target._focusOut() : this._setInputMethod(),
                    e.target = this, this._focusIn()) : (e.target = null, this._focusOut(), i.Browser.document.body.scrollTop = 0,
                    e.blur(), i.Render.isConchApp ? e.setPos(-1e4, -1e4) : Le.inputContainer.contains(e) && Le.inputContainer.removeChild(e)));
            }
        }, {
            key: "text",
            set: function set(t) {
                _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, this._originColor),
                    t += "", this._focus ? (this.nativeInput.value = t || "", this.event(zt.CHANGE)) : (this._multiline || (t = t.replace(/\r?\n/g, "")),
                        this._content = t, t ? _get(_getPrototypeOf(Le.prototype), "set_text", this).call(this, t) : (_get(_getPrototypeOf(Le.prototype), "set_text", this).call(this, this._prompt),
                            _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, this.promptColor)));
            },
            get: function get() {
                return this._focus ? this.nativeInput.value : this._content || "";
            }
        }, {
            key: "color",
            set: function set(t) {
                this._focus && this.nativeInput.setColor(t), _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, this._content ? t : this._promptColor),
                    this._originColor = t;
            },
            get: function get() {
                return _get(_getPrototypeOf(Le.prototype), "color", this);
            }
        }, {
            key: "bgColor",
            set: function set(t) {
                _get(_getPrototypeOf(Le.prototype), "set_bgColor", this).call(this, t), i.Render.isConchApp && this.nativeInput.setBgColor(t);
            },
            get: function get() {
                return _get(_getPrototypeOf(Le.prototype), "bgColor", this);
            }
        }, {
            key: "restrict",
            get: function get() {
                return this._restrictPattern ? this._restrictPattern.source : "";
            },
            set: function set(t) {
                t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null;
            }
        }, {
            key: "editable",
            set: function set(t) {
                this._editable = t, i.Render.isConchApp && Le.input.setForbidEdit(!t);
            },
            get: function get() {
                return this._editable;
            }
        }, {
            key: "maxChars",
            get: function get() {
                return this._maxChars;
            },
            set: function set(t) {
                t <= 0 && (t = 1e5), this._maxChars = t;
            }
        }, {
            key: "prompt",
            get: function get() {
                return this._prompt;
            },
            set: function set(t) {
                !this._text && t && _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, this._promptColor),
                    this.promptColor = this._promptColor, this._text ? _get(_getPrototypeOf(Le.prototype), "set_text", this).call(this, this._text == this._prompt ? t : this._text) : _get(_getPrototypeOf(Le.prototype), "set_text", this).call(this, t),
                    this._prompt = Pe.langPacks && Pe.langPacks[t] ? Pe.langPacks[t] : t;
            }
        }, {
            key: "promptColor",
            get: function get() {
                return this._promptColor;
            },
            set: function set(t) {
                this._promptColor = t, this._content || _get(_getPrototypeOf(Le.prototype), "set_color", this).call(this, t);
            }
        }, {
            key: "type",
            get: function get() {
                return this._type;
            },
            set: function set(t) {
                this._getTextStyle().asPassword = "password" === t, this._type = t;
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                if (Le._createInputElement(), i.Browser.onMobile) {
                    var t = !1;
                    (i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame) && (t = !0),
                    i.Render.canvas.addEventListener(Le.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", Le._popupInputMethod);
                }
            }
        }, {
            key: "_popupInputMethod",
            value: function _popupInputMethod(t) {
                Le.isInputting && Le.inputElement.focus();
            }
        }, {
            key: "_createInputElement",
            value: function _createInputElement() {
                Le._initInput(Le.area = i.Browser.createElement("textarea")), Le._initInput(Le.input = i.Browser.createElement("input")),
                    Le.inputContainer = i.Browser.createElement("div"), Le.inputContainer.style.position = "absolute",
                    Le.inputContainer.style.zIndex = 1e5, i.Browser.container.appendChild(Le.inputContainer),
                    Le.inputContainer.setPos = function(t, e) {
                        Le.inputContainer.style.left = t + "px", Le.inputContainer.style.top = e + "px";
                    };
            }
        }, {
            key: "_initInput",
            value: function _initInput(t) {
                var e = t.style;
                e.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;",
                    e.resize = "none", e.backgroundColor = "transparent", e.border = "none", e.outline = "none",
                    e.zIndex = 1, t.addEventListener("input", Le._processInputting), t.addEventListener("mousemove", Le._stopEvent),
                    t.addEventListener("mousedown", Le._stopEvent), t.addEventListener("touchmove", Le._stopEvent),
                    t.setFontFace = function(e) {
                        t.style.fontFamily = e;
                    }, i.Render.isConchApp || (t.setColor = function(e) {
                        t.style.color = e;
                    }, t.setFontSize = function(e) {
                        t.style.fontSize = e + "px";
                    });
            }
        }, {
            key: "_processInputting",
            value: function _processInputting(t) {
                var e = Le.inputElement.target;
                if (e) {
                    var i = Le.inputElement.value;
                    e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""),
                        Le.inputElement.value = i)), e._text = i, e.event(zt.INPUT);
                }
            }
        }, {
            key: "_stopEvent",
            value: function _stopEvent(t) {
                "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
            }
        }]);
        return Le;
    }(Pe);
    Le.TYPE_TEXT = "text", Le.TYPE_PASSWORD = "password", Le.TYPE_EMAIL = "email", Le.TYPE_URL = "url",
        Le.TYPE_NUMBER = "number", Le.TYPE_RANGE = "range", Le.TYPE_DATE = "date", Le.TYPE_MONTH = "month",
        Le.TYPE_WEEK = "week", Le.TYPE_TIME = "time", Le.TYPE_DATE_TIME = "datetime", Le.TYPE_DATE_TIME_LOCAL = "datetime-local",
        Le.TYPE_SEARCH = "search", Le.IOS_IFRAME = !1, Le.inputHeight = 45, Le.isInputting = !1,
        be.regClass("laya.display.Input", Le), be.regClass("Laya.Input", Le);
    var De = /* */ function() {
        function De() {
            _classCallCheck(this, De);
            this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0,
                this._event = new zt(), this._lastClickTime = 0;
        }
        _createClass(De, [{
            key: "_clearTempArrs",
            value: function _clearTempArrs() {
                De._oldArr.length = 0, De._newArr.length = 0, De._tEleArr.length = 0;
            }
        }, {
            key: "getTouchFromArr",
            value: function getTouchFromArr(t, e) {
                var i, s, r;
                for (s = e.length, i = 0; i < s; i++) {
                    if ((r = e[i]).id == t) return r;
                }
                return null;
            }
        }, {
            key: "removeTouchFromArr",
            value: function removeTouchFromArr(t, e) {
                var i;
                for (i = e.length - 1; i >= 0; i--) {
                    e[i].id == t && e.splice(i, 1);
                }
            }
        }, {
            key: "createTouchO",
            value: function createTouchO(t, e) {
                var i;
                return (i = s.getItem("TouchData") || {}).id = e, i.tar = t, i;
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s, r, a, n;
                this.enable && (s = this.getTouchFromArr(e, this.preOvers), a = this.getEles(t, null, De._tEleArr),
                    s ? s.tar = t : (r = this.createTouchO(t, e), this.preOvers.push(r)), $t.onMobile && this.sendEvents(a, zt.MOUSE_OVER),
                    n = i ? this.preDowns : this.preRightDowns, (s = this.getTouchFromArr(e, n)) ? s.tar = t : (r = this.createTouchO(t, e),
                        n.push(r)), this.sendEvents(a, i ? zt.MOUSE_DOWN : zt.RIGHT_MOUSE_DOWN), this._clearTempArrs());
            }
        }, {
            key: "sendEvents",
            value: function sendEvents(t, e) {
                var i, s, r;
                for (s = t.length, this._event._stoped = !1, r = t[0], i = 0; i < s; i++) {
                    var a = t[i];
                    if (a.destroyed) return;
                    if (a.event(e, this._event.setTo(e, a, r)), this._event._stoped) break;
                }
            }
        }, {
            key: "getEles",
            value: function getEles(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                for (i ? i.length = 0 : i = []; t && t != e;) {
                    i.push(t), t = t.parent;
                }
                return i;
            }
        }, {
            key: "checkMouseOutAndOverOfMove",
            value: function checkMouseOutAndOverOfMove(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s, r, a, n;
                if (e != t)
                    if (e.contains(t)) r = this.getEles(t, e, De._tEleArr), this.sendEvents(r, zt.MOUSE_OVER);
                    else if (t.contains(e)) r = this.getEles(e, t, De._tEleArr),
                    this.sendEvents(r, zt.MOUSE_OUT);
                else {
                    var h, o, l;
                    for ((r = De._tEleArr).length = 0, h = this.getEles(e, null, De._oldArr), o = this.getEles(t, null, De._newArr),
                        n = h.length, a = 0; a < n; a++) {
                        if (s = h[a], (l = o.indexOf(s)) >= 0) {
                            o.splice(l, o.length - l);
                            break;
                        }
                        r.push(s);
                    }
                    r.length > 0 && this.sendEvents(r, zt.MOUSE_OUT), o.length > 0 && this.sendEvents(o, zt.MOUSE_OVER);
                }
            }
        }, {
            key: "onMouseMove",
            value: function onMouseMove(t, e) {
                var i, s;
                this.enable && ((i = this.getTouchFromArr(e, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(t, i.tar),
                        i.tar = t, s = this.getEles(t, null, De._tEleArr)) : (s = this.getEles(t, null, De._tEleArr),
                        this.sendEvents(s, zt.MOUSE_OVER), this.preOvers.push(this.createTouchO(t, e))),
                    this.sendEvents(s, zt.MOUSE_MOVE), this._clearTempArrs());
            }
        }, {
            key: "getLastOvers",
            value: function getLastOvers() {
                return De._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, De._tEleArr) : (De._tEleArr.push(i.stage),
                    De._tEleArr);
            }
        }, {
            key: "stageMouseOut",
            value: function stageMouseOut() {
                var t;
                t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, zt.MOUSE_OUT);
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                if (this.enable) {
                    var r, a, n, h, o, l, _, c, u = $t.onMobile;
                    if (a = this.getEles(t, null, De._tEleArr), this.sendEvents(a, i ? zt.MOUSE_UP : zt.RIGHT_MOUSE_UP),
                        c = i ? this.preDowns : this.preRightDowns, r = this.getTouchFromArr(e, c)) {
                        var d, p = $t.now();
                        if (d = p - this._lastClickTime < 300, this._lastClickTime = p, t == r.tar) _ = a;
                        else
                            for (n = this.getEles(r.tar, null, De._oldArr),
                                (_ = De._newArr).length = 0, o = n.length, h = 0; h < o; h++) {
                                l = n[h], a.indexOf(l) >= 0 && _.push(l);
                            }
                        _.length > 0 && this.sendEvents(_, i ? zt.CLICK : zt.RIGHT_CLICK), i && d && this.sendEvents(_, zt.DOUBLE_CLICK),
                            this.removeTouchFromArr(e, c), r.tar = null, s.recover("TouchData", r);
                    } else;
                    (r = this.getTouchFromArr(e, this.preOvers)) && u && ((_ = this.getEles(r.tar, null, _)) && _.length > 0 && this.sendEvents(_, zt.MOUSE_OUT),
                            this.removeTouchFromArr(e, this.preOvers), r.tar = null, s.recover("TouchData", r)),
                        this._clearTempArrs();
                }
            }
        }]);
        return De;
    }();
    De.I = new De(), De._oldArr = [], De._newArr = [], De._tEleArr = [];
    var Be = /* */ function() {
        function Be() {
            _classCallCheck(this, Be);
            this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0,
                this.mouseMoveAccuracy = 2, this._event = new zt(), this._captureSp = null, this._captureChain = [],
                this._captureExlusiveMode = !1, this._hitCaputreSp = !1, this._point = new f(),
                this._rect = new g(), this._lastMoveTimer = 0, this._prePoint = new f(), this._touchIDs = {},
                this._curTouchID = NaN, this._id = 1;
        }
        _createClass(Be, [{
            key: "__init__",
            value: function __init__(t, e) {
                this._stage = t;
                var i = this;
                e.oncontextmenu = function(t) {
                    if (Be.enabled) return !1;
                }, e.addEventListener("mousedown", function(t) {
                    Be.enabled && ($t.onIE || t.cancelable && t.preventDefault(), i.mouseDownTime = $t.now(),
                        i.runEvent(t));
                }), e.addEventListener("mouseup", function(t) {
                    Be.enabled && (t.cancelable && t.preventDefault(), i.mouseDownTime = -$t.now(),
                        i.runEvent(t));
                }, !0), e.addEventListener("mousemove", function(t) {
                    if (Be.enabled) {
                        t.cancelable && t.preventDefault();
                        var e = $t.now();
                        if (e - i._lastMoveTimer < 10) return;
                        i._lastMoveTimer = e, i.runEvent(t);
                    }
                }, !0), e.addEventListener("mouseout", function(t) {
                    Be.enabled && i.runEvent(t);
                }), e.addEventListener("mouseover", function(t) {
                    Be.enabled && i.runEvent(t);
                }), e.addEventListener("touchstart", function(t) {
                    Be.enabled && (Be._isFirstTouch || Le.isInputting || t.cancelable && t.preventDefault(),
                        i.mouseDownTime = $t.now(), i.runEvent(t));
                }), e.addEventListener("touchend", function(t) {
                    Be.enabled ? (Be._isFirstTouch || Le.isInputting || t.cancelable && t.preventDefault(),
                        Be._isFirstTouch = !1, i.mouseDownTime = -$t.now(), i.runEvent(t)) : i._curTouchID = NaN;
                }, !0), e.addEventListener("touchmove", function(t) {
                    Be.enabled && (t.cancelable && t.preventDefault(), i.runEvent(t));
                }, !0), e.addEventListener("touchcancel", function(t) {
                    Be.enabled ? (t.cancelable && t.preventDefault(), i.runEvent(t)) : i._curTouchID = NaN;
                }, !0), e.addEventListener("mousewheel", function(t) {
                    Be.enabled && i.runEvent(t);
                }), e.addEventListener("DOMMouseScroll", function(t) {
                    Be.enabled && i.runEvent(t);
                });
            }
        }, {
            key: "initEvent",
            value: function initEvent(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i;
                this._event._stoped = !1, this._event.nativeEvent = e || t, this._target = null,
                    this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point),
                        this.mouseX = this._point.x, this.mouseY = this._point.y), this._event.touchId = t.identifier || 0,
                    this._tTouchID = this._event.touchId, (i = De.I._event)._stoped = !1, i.nativeEvent = this._event.nativeEvent,
                    i.touchId = this._event.touchId;
            }
        }, {
            key: "checkMouseWheel",
            value: function checkMouseWheel(t) {
                this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
                for (var e = De.I.getLastOvers(), i = 0, s = e.length; i < s; i++) {
                    var r = e[i];
                    r.event(zt.MOUSE_WHEEL, this._event.setTo(zt.MOUSE_WHEEL, r, this._target));
                }
            }
        }, {
            key: "onMouseMove",
            value: function onMouseMove(t) {
                De.I.onMouseMove(t, this._tTouchID);
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(t) {
                if (Le.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                    var e = i.stage.focus._tf || i.stage.focus,
                        s = t._tf || t;
                    s instanceof Le && s.multiline == e.multiline ? e._focusOut() : e.focus = !1;
                }
                De.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(t) {
                De.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
            }
        }, {
            key: "check",
            value: function check(t, e, i, s) {
                this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
                var r = t._style.scrollRect;
                if (r && (this._rect.setTo(r.x, r.y, r.width, r.height), !this._rect.contains(e, i))) return !1;
                if (!this.disableMouseEvent) {
                    if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                    for (var a = t._children.length - 1; a > -1; a--) {
                        var n = t._children[a];
                        if (!n.destroyed && n._mouseState > 1 && n._visible && this.check(n, e, i, s)) return !0;
                    }
                    for (a = t._extUIChild.length - 1; a >= 0; a--) {
                        var h = t._extUIChild[a];
                        if (!h.destroyed && h._mouseState > 1 && h._visible && this.check(h, e, i, s)) return !0;
                    }
                }
                var o = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
                return o ? (this._target = t, s.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : s === this.onMouseUp && t === this._stage && (this._target = this._stage,
                    s.call(this, this._target)), o;
            }
        }, {
            key: "hitTest",
            value: function hitTest(t, e, i) {
                var s = !1;
                t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
                var r = t._style.hitArea;
                return r && r._hit ? r.contains(e, i) : ((t.width > 0 && t.height > 0 || t.mouseThrough || r) && (s = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (r || this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)),
                    s);
            }
        }, {
            key: "_checkAllBaseUI",
            value: function _checkAllBaseUI(t, e, i) {
                var s = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
                return !!s || (s = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || s);
            }
        }, {
            key: "check3DUI",
            value: function check3DUI(t, e, i) {
                for (var s = this._stage._3dUI, r = 0, a = !1; r < s.length; r++) {
                    var n = s[r];
                    this._stage._curUIBase = n, !n.destroyed && n._mouseState > 1 && n._visible && (a = a || this.check(n, this.mouseX, this.mouseY, i));
                }
                return this._stage._curUIBase = this._stage, a;
            }
        }, {
            key: "handleExclusiveCapture",
            value: function handleExclusiveCapture(t, e, i) {
                if (this._captureExlusiveMode && this._captureSp && this._captureChain.length > 0) {
                    var s;
                    this._point.setTo(t, e);
                    for (var r = 0; r < this._captureChain.length; r++) {
                        (s = this._captureChain[r]).fromParentPoint(this._point);
                    }
                    return this._target = s, i.call(this, s), !0;
                }
                return !1;
            }
        }, {
            key: "handleCapture",
            value: function handleCapture(t, e, i) {
                if (!this._hitCaputreSp && this._captureSp && this._captureChain.length > 0) {
                    var s;
                    this._point.setTo(t, e);
                    for (var r = 0; r < this._captureChain.length; r++) {
                        (s = this._captureChain[r]).fromParentPoint(this._point);
                    }
                    return this._target = s, i.call(this, s), !0;
                }
                return !1;
            }
        }, {
            key: "runEvent",
            value: function runEvent(t) {
                var e, i, s;
                switch ("mousemove" !== t.type && (this._prePoint.x = this._prePoint.y = -1e6),
                    t.type) {
                    case "mousedown":
                        this._touchIDs[0] = this._id++, Be._isTouchRespond ? Be._isTouchRespond = !1 : (this._isLeftMouse = 0 === t.button,
                            this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;

                    case "mouseup":
                        this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                        break;

                    case "mousemove":
                        Math.abs(this._prePoint.x - t.clientX) + Math.abs(this._prePoint.y - t.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = t.clientX,
                            this._prePoint.y = t.clientY, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;

                    case "touchstart":
                        Be._isTouchRespond = !0, this._isLeftMouse = !0;
                        var r = t.changedTouches;
                        for (e = 0, i = r.length; e < i; e++) {
                            s = r[e], (Be.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = s.identifier,
                                this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[s.identifier] = this._id++,
                                this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        }
                        break;

                    case "touchend":
                    case "touchcancel":
                        Be._isTouchRespond = !0, this._isLeftMouse = !0;
                        var a = t.changedTouches;
                        for (e = 0, i = a.length; e < i; e++) {
                            if (s = a[e], Be.multiTouchEnabled || s.identifier == this._curTouchID) this._curTouchID = NaN,
                                this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null);
                        }
                        break;

                    case "touchmove":
                        var n = t.changedTouches;
                        for (e = 0, i = n.length; e < i; e++) {
                            s = n[e], (Be.multiTouchEnabled || s.identifier == this._curTouchID) && (this.initEvent(s, t),
                                this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        }
                        break;

                    case "wheel":
                    case "mousewheel":
                    case "DOMMouseScroll":
                        this.checkMouseWheel(t);
                        break;

                    case "mouseout":
                        De.I.stageMouseOut();
                        break;

                    case "mouseover":
                        this._stage.event(zt.MOUSE_OVER, this._event.setTo(zt.MOUSE_OVER, this._stage, this._stage));
                }
            }
        }, {
            key: "setCapture",
            value: function setCapture(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0,
                    this._captureChain.push(t);
                for (var s = t; s != i.stage && s != i.stage._curUIBase && (s = s.parent);) {
                    this._captureChain.splice(0, 0, s);
                }
            }
        }, {
            key: "releaseCapture",
            value: function releaseCapture() {
                console.log("release capture"), this._captureSp = null;
            }
        }]);
        return Be;
    }();
    Be.instance = new Be(), Be.enabled = !0, Be.multiTouchEnabled = !0, Be._isFirstTouch = !0;
    var Fe = /* */ function() {
        function Fe() {
            _classCallCheck(this, Fe);
            this._pool = [], this._map = {}, this._laters = [];
        }
        _createClass(Fe, [{
            key: "_update",
            value: function _update() {
                var t = this._laters,
                    e = t.length;
                if (e > 0) {
                    for (var _i4 = 0, _s2 = e - 1; _i4 <= _s2; _i4++) {
                        var _e3 = t[_i4];
                        this._map[_e3.key] = null, null !== _e3.method && (_e3.run(), _e3.clear()), this._pool.push(_e3),
                            _i4 === _s2 && (_s2 = t.length - 1);
                    }
                    t.length = 0;
                }
            }
        }, {
            key: "_getHandler",
            value: function _getHandler(t, e) {
                var s = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0,
                    r = e.$_TID || (e.$_TID = i.Timer._mid++);
                return this._map[s + "." + r];
            }
        }, {
            key: "callLater",
            value: function callLater(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (null == this._getHandler(t, e)) {
                    var _a;
                    (_a = this._pool.length ? this._pool.pop() : new Oe()).caller = t, _a.method = e,
                        _a.args = i;
                    var s = t ? t.$_GID : 0,
                        r = e.$_TID;
                    _a.key = s + "." + r, this._map[_a.key] = _a, this._laters.push(_a);
                }
            }
        }, {
            key: "runCallLater",
            value: function runCallLater(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(), i.clear());
            }
        }]);
        return Fe;
    }();
    Fe.I = new Fe();
    var Oe = /* */ function() {
        function Oe() {
            _classCallCheck(this, Oe);
        }
        _createClass(Oe, [{
            key: "clear",
            value: function clear() {
                this.caller = null, this.method = null, this.args = null;
            }
        }, {
            key: "run",
            value: function run() {
                var t = this.caller;
                if (t && t.destroyed) return this.clear();
                var e = this.method,
                    i = this.args;
                null != e && (i ? e.apply(t, i) : e.call(t));
            }
        }]);
        return Oe;
    }();
    var Ne = function Ne() {
        _classCallCheck(this, Ne);
    };
    Ne.createShaderCondition = function(t) {
        var e = "(function() {return " + t + ";})";
        return window.Laya._runScript(e);
    }, Ne.changeWebGLSize = function(t, e) {
        re.onStageResize(t, e);
    };
    var Ue = /* */ function(_Me2) {
        _inherits(Ue, _Me2);

        function Ue() {
            var _this26;
            _classCallCheck(this, Ue);
            _this26 = _possibleConstructorReturn(this, _getPrototypeOf(Ue).call(this)), _this26.offset = new f(),
                _this26._frameRate = "fast", _this26.designWidth = 0, _this26.designHeight = 0,
                _this26.canvasRotation = !1, _this26.canvasDegree = 0, _this26.renderingEnabled = !0,
                _this26.screenAdaptationEnabled = !0, _this26._canvasTransform = new p(), _this26._screenMode = "none",
                _this26._scaleMode = "noscale", _this26._alignV = "top", _this26._alignH = "left",
                _this26._bgColor = "black", _this26._mouseMoveTime = 0, _this26._renderCount = 0,
                _this26._safariOffsetY = 0, _this26._frameStartTime = 0, _this26._previousOrientation = $t.window.orientation,
                _this26._wgColor = [0, 0, 0, 1], _this26._scene3Ds = [], _this26._globalRepaintSet = !1,
                _this26._globalRepaintGet = !1, _this26._3dUI = [], _this26._curUIBase = null, _this26.useRetinalCanvas = !1,
                _get(_getPrototypeOf(Ue.prototype), "set_transform", _assertThisInitialized(_this26)).call(_assertThisInitialized(_this26), _this26._createTransform()),
                _this26.mouseEnabled = !0, _this26.hitTestPrior = !0, _this26.autoSize = !1, _this26._setBit(Te.DISPLAYED_INSTAGE, !0),
                _this26._setBit(Te.ACTIVE_INHIERARCHY, !0), _this26._isFocused = !0, _this26._isVisibility = !0,
                _this26.useRetinalCanvas = e.useRetinalCanvas;
            var t = $t.window;
            t.addEventListener("focus", function() {
                _this26._isFocused = !0, _this26.event(zt.FOCUS), _this26.event(zt.FOCUS_CHANGE);
            }), t.addEventListener("blur", function() {
                _this26._isFocused = !1, _this26.event(zt.BLUR), _this26.event(zt.FOCUS_CHANGE),
                    _this26._isInputting() && (Le.inputElement.target.focus = !1);
            });
            var i = "visibilityState",
                s = "visibilitychange",
                r = t.document;
            void 0 !== r.hidden ? (s = "visibilitychange", i = "visibilityState") : void 0 !== r.mozHidden ? (s = "mozvisibilitychange",
                    i = "mozVisibilityState") : void 0 !== r.msHidden ? (s = "msvisibilitychange", i = "msVisibilityState") : void 0 !== r.webkitHidden && (s = "webkitvisibilitychange",
                    i = "webkitVisibilityState"), t.document.addEventListener(s, function() {
                    "hidden" == $t.document[i] ? (_this26._isVisibility = !1, _this26._isInputting() && (Le.inputElement.target.focus = !1)) : _this26._isVisibility = !0,
                        _this26.renderingEnabled = _this26._isVisibility, _this26.event(zt.VISIBILITY_CHANGE);
                }), t.addEventListener("resize", function() {
                    var t = $t.window.orientation;
                    null != t && t != _this26._previousOrientation && _this26._isInputting() && (Le.inputElement.target.focus = !1),
                        _this26._previousOrientation = t, _this26._isInputting() || ($t.onSafari && (_this26._safariOffsetY = ($t.window.__innerHeight || $t.document.body.clientHeight || $t.document.documentElement.clientHeight) - $t.window.innerHeight),
                            _this26._resetCanvas());
                }), t.addEventListener("orientationchange", function(t) {
                    _this26._resetCanvas();
                }), _this26.on(zt.MOUSE_MOVE, _assertThisInitialized(_this26), _this26._onmouseMove),
                $t.onMobile && _this26.on(zt.MOUSE_DOWN, _assertThisInitialized(_this26), _this26._onmouseMove);
            return _this26;
        }
        _createClass(Ue, [{
            key: "_isInputting",
            value: function _isInputting() {
                return $t.onMobile && Le.isInputting;
            }
        }, {
            key: "_changeCanvasSize",
            value: function _changeCanvasSize() {
                this.setScreenSize($t.clientWidth * $t.pixelRatio, $t.clientHeight * $t.pixelRatio);
            }
        }, {
            key: "_resetCanvas",
            value: function _resetCanvas() {
                this.screenAdaptationEnabled && this._changeCanvasSize();
            }
        }, {
            key: "setScreenSize",
            value: function setScreenSize(t, e) {
                var i = !1;
                if (this._screenMode !== Ue.SCREEN_NONE && (i = (t / e < 1 ? Ue.SCREEN_VERTICAL : Ue.SCREEN_HORIZONTAL) !== this._screenMode)) {
                    var s = e;
                    e = t, t = s;
                }
                this.canvasRotation = i;
                var r = he._mainCanvas,
                    a = r.source.style,
                    n = this._canvasTransform.identity(),
                    h = this._scaleMode,
                    o = t / this.designWidth,
                    l = e / this.designHeight,
                    _ = this.useRetinalCanvas ? t : this.designWidth,
                    c = this.useRetinalCanvas ? e : this.designHeight,
                    u = t,
                    d = e,
                    p = $t.pixelRatio;
                switch (this._width = this.designWidth, this._height = this.designHeight, h) {
                    case Ue.SCALE_NOSCALE:
                        o = l = 1, u = this.designWidth, d = this.designHeight;
                        break;

                    case Ue.SCALE_SHOWALL:
                        o = l = Math.min(o, l), _ = u = Math.round(this.designWidth * o), c = d = Math.round(this.designHeight * l);
                        break;

                    case Ue.SCALE_NOBORDER:
                        o = l = Math.max(o, l), u = Math.round(this.designWidth * o), d = Math.round(this.designHeight * l);
                        break;

                    case Ue.SCALE_FULL:
                        o = l = 1, this._width = _ = t, this._height = c = e;
                        break;

                    case Ue.SCALE_FIXED_WIDTH:
                        l = o, this._height = c = Math.round(e / o);
                        break;

                    case Ue.SCALE_FIXED_HEIGHT:
                        o = l, this._width = _ = Math.round(t / l);
                        break;

                    case Ue.SCALE_FIXED_AUTO:
                        t / e < this.designWidth / this.designHeight ? (l = o, this._height = c = Math.round(e / o)) : (o = l,
                            this._width = _ = Math.round(t / l));
                }
                this.useRetinalCanvas && (u = _ = t, d = c = e), o *= this.scaleX, l *= this.scaleY,
                    1 === o && 1 === l ? this.transform.identity() : (this.transform.a = this._formatData(o / (u / _)),
                        this.transform.d = this._formatData(l / (d / c))), r.size(_, c), Ne.changeWebGLSize(_, c),
                    n.scale(u / _ / p, d / c / p), this._alignH === Ue.ALIGN_LEFT ? this.offset.x = 0 : this._alignH === Ue.ALIGN_RIGHT ? this.offset.x = t - u : this.offset.x = .5 * (t - u) / p,
                    this._alignV === Ue.ALIGN_TOP ? this.offset.y = 0 : this._alignV === Ue.ALIGN_BOTTOM ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / p,
                    this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y),
                    n.translate(this.offset.x, this.offset.y), this._safariOffsetY && n.translate(0, this._safariOffsetY),
                    this.canvasDegree = 0, i && (this._screenMode === Ue.SCREEN_HORIZONTAL ? (n.rotate(Math.PI / 2),
                        n.translate(e / p, 0), this.canvasDegree = 90) : (n.rotate(-Math.PI / 2), n.translate(0, t / p),
                        this.canvasDegree = -90)), n.a = this._formatData(n.a), n.d = this._formatData(n.d),
                    n.tx = this._formatData(n.tx), n.ty = this._formatData(n.ty), _get(_getPrototypeOf(Ue.prototype), "set_transform", this).call(this, this.transform),
                    a.transformOrigin = a.webkitTransformOrigin = a.msTransformOrigin = a.mozTransformOrigin = a.oTransformOrigin = "0px 0px 0px",
                    a.transform = a.webkitTransform = a.msTransform = a.mozTransform = a.oTransform = "matrix(" + n.toString() + ")",
                    this._safariOffsetY && n.translate(0, -this._safariOffsetY), n.translate(parseInt(a.left) || 0, parseInt(a.top) || 0),
                    this.visible = !0, this._repaint |= ce.REPAINT_CACHE, this.event(zt.RESIZE);
            }
        }, {
            key: "_formatData",
            value: function _formatData(t) {
                return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t;
            }
        }, {
            key: "getMousePoint",
            value: function getMousePoint() {
                return f.TEMP.setTo(this.mouseX, this.mouseY);
            }
        }, {
            key: "repaint",
            value: function repaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ce.REPAINT_CACHE;
                this._repaint |= t;
            }
        }, {
            key: "parentRepaint",
            value: function parentRepaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ce.REPAINT_CACHE;
            }
        }, {
            key: "_loop",
            value: function _loop() {
                return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1,
                    this.render(he._context, 0, 0), !0;
            }
        }, {
            key: "getFrameTm",
            value: function getFrameTm() {
                return this._frameStartTime;
            }
        }, {
            key: "_onmouseMove",
            value: function _onmouseMove(t) {
                this._mouseMoveTime = $t.now();
            }
        }, {
            key: "getTimeFromFrameStart",
            value: function getTimeFromFrameStart() {
                return $t.now() - this._frameStartTime;
            }
        }, {
            key: "render",
            value: function render(t, e, i) {
                if (window.conch) this.renderToNative(t, e, i);
                else {
                    if (this._frameRate === Ue.FRAME_SLEEP) {
                        var s = $t.now();
                        if (!(s - this._frameStartTime >= 1e3)) return;
                        this._frameStartTime = s;
                    } else {
                        if (!this._visible) return this._renderCount++, void(this._renderCount % 5 == 0 && (Fe.I._update(),
                            G.loopCount++, mt.loopCount = G.loopCount, this._updateTimers()));
                        this._frameStartTime = $t.now(), mt.loopStTm = this._frameStartTime;
                    }
                    this._renderCount++;
                    var r = (this._frameRate === Ue.FRAME_MOUSE ? this._frameStartTime - this._mouseMoveTime < 2e3 ? Ue.FRAME_FAST : Ue.FRAME_SLOW : this._frameRate) !== Ue.FRAME_SLOW,
                        a = this._renderCount % 2 == 0;
                    if (G.renderSlow = !r, r || a) {
                        if (Fe.I._update(), G.loopCount++, mt.loopCount = G.loopCount, this.renderingEnabled) {
                            for (var n = 0, h = this._scene3Ds.length; n < h; n++) {
                                this._scene3Ds[n]._update();
                            }
                            t.clear(), _get(_getPrototypeOf(Ue.prototype), "render", this).call(this, t, e, i),
                                G._StatRender.renderNotCanvas(t, e, i);
                        }
                        this.renderingEnabled && (Ue.clear(this._bgColor), t.flush(), me.instance && me.getInstance().endDispose()),
                            this._updateTimers();
                    }
                }
            }
        }, {
            key: "renderToNative",
            value: function renderToNative(t, e, i) {
                if (this._renderCount++, this._visible) {
                    if (Fe.I._update(), G.loopCount++, mt.loopCount = G.loopCount, this.renderingEnabled) {
                        for (var s = 0, r = this._scene3Ds.length; s < r; s++) {
                            this._scene3Ds[s]._update();
                        }
                        t.clear(), _get(_getPrototypeOf(Ue.prototype), "render", this).call(this, t, e, i),
                            G._StatRender.renderNotCanvas(t, e, i);
                    }
                    this.renderingEnabled && (Ue.clear(this._bgColor), t.flush(), me.instance && me.getInstance().endDispose()),
                        this._updateTimers();
                } else this._renderCount % 5 == 0 && (Fe.I._update(), G.loopCount++, mt.loopCount = G.loopCount,
                    this._updateTimers());
            }
        }, {
            key: "_updateTimers",
            value: function _updateTimers() {
                i.systemTimer._update(), i.startTimer._update(), i.physicsTimer._update(), i.updateTimer._update(),
                    i.lateTimer._update(), i.timer._update();
            }
        }, {
            key: "_requestFullscreen",
            value: function _requestFullscreen() {
                var t = $t.document.documentElement;
                t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
            }
        }, {
            key: "_fullScreenChanged",
            value: function _fullScreenChanged() {
                i.stage.event(zt.FULL_SCREEN_CHANGE);
            }
        }, {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                var t = $t.document;
                t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
            }
        }, {
            key: "isGlobalRepaint",
            value: function isGlobalRepaint() {
                return this._globalRepaintGet;
            }
        }, {
            key: "setGlobalRepaint",
            value: function setGlobalRepaint() {
                this._globalRepaintSet = !0;
            }
        }, {
            key: "add3DUI",
            value: function add3DUI(t) {
                var e = t.rootView;
                this._3dUI.indexOf(e) >= 0 || this._3dUI.push(e);
            }
        }, {
            key: "remove3DUI",
            value: function remove3DUI(t) {
                var e = t.rootView,
                    i = this._3dUI.indexOf(e);
                return i >= 0 && (this._3dUI.splice(i, 1), !0);
            }
        }, {
            key: "width",
            set: function set(t) {
                this.designWidth = t, _get(_getPrototypeOf(Ue.prototype), "set_width", this).call(this, t),
                    i.systemTimer.callLater(this, this._changeCanvasSize);
            },
            get: function get() {
                return _get(_getPrototypeOf(Ue.prototype), "get_width", this).call(this);
            }
        }, {
            key: "height",
            set: function set(t) {
                this.designHeight = t, _get(_getPrototypeOf(Ue.prototype), "set_height", this).call(this, t),
                    i.systemTimer.callLater(this, this._changeCanvasSize);
            },
            get: function get() {
                return _get(_getPrototypeOf(Ue.prototype), "get_height", this).call(this);
            }
        }, {
            key: "transform",
            set: function set(t) {
                _get(_getPrototypeOf(Ue.prototype), "set_transform", this).call(this, t);
            },
            get: function get() {
                return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform();
            }
        }, {
            key: "isFocused",
            get: function get() {
                return this._isFocused;
            }
        }, {
            key: "isVisibility",
            get: function get() {
                return this._isVisibility;
            }
        }, {
            key: "scaleMode",
            get: function get() {
                return this._scaleMode;
            },
            set: function set(t) {
                this._scaleMode = t, i.systemTimer.callLater(this, this._changeCanvasSize);
            }
        }, {
            key: "alignH",
            get: function get() {
                return this._alignH;
            },
            set: function set(t) {
                this._alignH = t, i.systemTimer.callLater(this, this._changeCanvasSize);
            }
        }, {
            key: "alignV",
            get: function get() {
                return this._alignV;
            },
            set: function set(t) {
                this._alignV = t, i.systemTimer.callLater(this, this._changeCanvasSize);
            }
        }, {
            key: "bgColor",
            get: function get() {
                return this._bgColor;
            },
            set: function set(t) {
                this._bgColor = t, this._wgColor = t ? j.create(t).arrColor : null, he.canvas.style.background = t || "none";
            }
        }, {
            key: "mouseX",
            get: function get() {
                return Math.round(Be.instance.mouseX / this.clientScaleX);
            }
        }, {
            key: "mouseY",
            get: function get() {
                return Math.round(Be.instance.mouseY / this.clientScaleY);
            }
        }, {
            key: "clientScaleX",
            get: function get() {
                return this._transform ? this._transform.getScaleX() : 1;
            }
        }, {
            key: "clientScaleY",
            get: function get() {
                return this._transform ? this._transform.getScaleY() : 1;
            }
        }, {
            key: "screenMode",
            get: function get() {
                return this._screenMode;
            },
            set: function set(t) {
                this._screenMode = t;
            }
        }, {
            key: "visible",
            set: function set(t) {
                this.visible !== t && (_get(_getPrototypeOf(Ue.prototype), "set_visible", this).call(this, t),
                    he._mainCanvas.source.style.visibility = t ? "visible" : "hidden");
            },
            get: function get() {
                return _get(_getPrototypeOf(Ue.prototype), "visible", this);
            }
        }, {
            key: "fullScreenEnabled",
            set: function set(t) {
                var e = $t.document,
                    i = he.canvas;
                t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen),
                    e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged),
                    e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen),
                    i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged),
                    e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged),
                    e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
            }
        }, {
            key: "frameRate",
            get: function get() {
                return i.Render.isConchApp ? this._frameRateNative : this._frameRate;
            },
            set: function set(t) {
                if (i.Render.isConchApp) {
                    var e = window.conch;
                    switch (t) {
                        case Ue.FRAME_FAST:
                            e.config.setLimitFPS(60);
                            break;

                        case Ue.FRAME_MOUSE:
                            e.config.setMouseFrame(2e3);
                            break;

                        case Ue.FRAME_SLOW:
                            e.config.setSlowFrame(!0);
                            break;

                        case Ue.FRAME_SLEEP:
                            e.config.setLimitFPS(1);
                    }
                    this._frameRateNative = t;
                } else this._frameRate = t;
            }
        }]);
        return Ue;
    }(Me);
    Ue.SCALE_NOSCALE = "noscale", Ue.SCALE_EXACTFIT = "exactfit", Ue.SCALE_SHOWALL = "showall",
        Ue.SCALE_NOBORDER = "noborder", Ue.SCALE_FULL = "full", Ue.SCALE_FIXED_WIDTH = "fixedwidth",
        Ue.SCALE_FIXED_HEIGHT = "fixedheight", Ue.SCALE_FIXED_AUTO = "fixedauto", Ue.ALIGN_LEFT = "left",
        Ue.ALIGN_RIGHT = "right", Ue.ALIGN_CENTER = "center", Ue.ALIGN_TOP = "top", Ue.ALIGN_MIDDLE = "middle",
        Ue.ALIGN_BOTTOM = "bottom", Ue.SCREEN_NONE = "none", Ue.SCREEN_HORIZONTAL = "horizontal",
        Ue.SCREEN_VERTICAL = "vertical", Ue.FRAME_FAST = "fast", Ue.FRAME_SLOW = "slow",
        Ue.FRAME_MOUSE = "mouse", Ue.FRAME_SLEEP = "sleep", Ue.clear = function(t) {
            ie.set2DRenderConfig();
            var s = m.instance;
            D.worldScissorTest && s.disable(s.SCISSOR_TEST);
            var r = he.context,
                a = 0 == r._submits._length || e.preserveDrawingBuffer ? j.create(t).arrColor : i.stage._wgColor;
            a ? r.clearBG(a[0], a[1], a[2], a[3]) : r.clearBG(0, 0, 0, 0), D.clear();
        }, be.regClass("laya.display.Stage", Ue), be.regClass("Laya.Stage", Ue);
    var Ge = /* */ function() {
        function Ge() {
            _classCallCheck(this, Ge);
        }
        _createClass(Ge, null, [{
            key: "__init__",
            value: function __init__() {
                Ge._addEvent("keydown"), Ge._addEvent("keypress"), Ge._addEvent("keyup");
            }
        }, {
            key: "_addEvent",
            value: function _addEvent(t) {
                i.Browser.document.addEventListener(t, function(e) {
                    Ge._dispatch(e, t);
                }, !0);
            }
        }, {
            key: "_dispatch",
            value: function _dispatch(t, e) {
                if (Ge.enabled) {
                    Ge._event._stoped = !1, Ge._event.nativeEvent = t, Ge._event.keyCode = t.keyCode || t.which || t.charCode,
                        "keydown" === e ? Ge._pressKeys[Ge._event.keyCode] = !0 : "keyup" === e && (Ge._pressKeys[Ge._event.keyCode] = null);
                    for (var s = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = s; r;) {
                        r.event(e, Ge._event.setTo(e, r, s)), r = r.parent;
                    }
                }
            }
        }, {
            key: "hasKeyDown",
            value: function hasKeyDown(t) {
                return Ge._pressKeys[t];
            }
        }]);
        return Ge;
    }();
    Ge._pressKeys = {}, Ge.enabled = !0, Ge._event = new zt();
    var ke = /* */ function(_x5) {
        _inherits(ke, _x5);

        function ke() {
            var _this27;
            _classCallCheck(this, ke);
            _this27 = _possibleConstructorReturn(this, _getPrototypeOf(ke).apply(this, arguments)),
                _this27.isStopped = !1;
            return _this27;
        }
        _createClass(ke, [{
            key: "play",
            value: function play() {}
        }, {
            key: "stop",
            value: function stop() {
                this.completeHandler && this.completeHandler.run();
            }
        }, {
            key: "pause",
            value: function pause() {}
        }, {
            key: "resume",
            value: function resume() {}
        }, {
            key: "__runComplete",
            value: function __runComplete(t) {
                t && t.run();
            }
        }, {
            key: "volume",
            set: function set(t) {},
            get: function get() {
                return 1;
            }
        }, {
            key: "position",
            get: function get() {
                return 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return 0;
            }
        }]);
        return ke;
    }(x);
    var We = /* */ function(_ke) {
        _inherits(We, _ke);

        function We(t) {
            var _this28;
            _classCallCheck(this, We);
            _this28 = _possibleConstructorReturn(this, _getPrototypeOf(We).call(this)), _this28._audio = null,
                _this28._onEnd = _this28.__onEnd.bind(_assertThisInitialized(_this28)), _this28._resumePlay = _this28.__resumePlay.bind(_assertThisInitialized(_this28)),
                t.addEventListener("ended", _this28._onEnd), _this28._audio = t;
            return _this28;
        }
        _createClass(We, [{
            key: "__onEnd",
            value: function __onEnd(t) {
                if (1 == this.loops) return this.completeHandler && (i.systemTimer.once(10, this, this.__runComplete, [this.completeHandler], !1),
                    this.completeHandler = null), this.stop(), void this.event(zt.COMPLETE);
                this.loops > 0 && this.loops--, this.startTime = 0, this.play();
            }
        }, {
            key: "__resumePlay",
            value: function __resumePlay() {
                if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), !this.isStopped) try {
                    this._audio.currentTime = this.startTime, $t.container.appendChild(this._audio),
                        this._audio.play();
                } catch (t) {
                    this.event(zt.ERROR);
                }
            }
        }, {
            key: "play",
            value: function play() {
                this.isStopped = !1;
                try {
                    this._audio.playbackRate = i.SoundManager.playbackRate, this._audio.currentTime = this.startTime;
                } catch (t) {
                    return void this._audio.addEventListener("canplay", this._resumePlay);
                }
                i.SoundManager.addChannel(this), $t.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
            }
        }, {
            key: "stop",
            value: function stop() {
                _get(_getPrototypeOf(We.prototype), "stop", this).call(this), this.isStopped = !0,
                    i.SoundManager.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && i.Render.isConchApp && this._audio.stop(),
                        this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay),
                        i.Browser.onIE || this._audio != i.AudioSound._musicAudio && i.Pool.recover("audio:" + this.url, this._audio),
                        $t.removeElement(this._audio), this._audio = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url));
            }
        }, {
            key: "pause",
            value: function pause() {
                this.isStopped = !0, i.SoundManager.removeChannel(this), "pause" in this._audio && this._audio.pause(),
                    i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
            }
        }, {
            key: "resume",
            value: function resume() {
                var t = this._audio;
                t && (this.isStopped = !1, 0 == t.readyState && (t.src = this.url, t.addEventListener("canplay", this._resumePlay),
                    t.load()), i.SoundManager.addChannel(this), "play" in t && t.play());
            }
        }, {
            key: "position",
            get: function get() {
                return this._audio ? this._audio.currentTime : 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return this._audio ? this._audio.duration : 0;
            }
        }, {
            key: "volume",
            set: function set(t) {
                this._audio && (this._audio.volume = t);
            },
            get: function get() {
                return this._audio ? this._audio.volume : 1;
            }
        }]);
        return We;
    }(ke);
    var Ye = /* */ function(_x6) {
        _inherits(Ye, _x6);

        function Ye() {
            var _this29;
            _classCallCheck(this, Ye);
            _this29 = _possibleConstructorReturn(this, _getPrototypeOf(Ye).apply(this, arguments)),
                _this29.loaded = !1;
            return _this29;
        }
        _createClass(Ye, [{
            key: "dispose",
            value: function dispose() {
                var t = Ye._audioCache[this.url];
                s.clearBySign("audio:" + this.url), t && (he.isConchApp || (t.src = ""), delete Ye._audioCache[this.url]);
            }
        }, {
            key: "load",
            value: function load(t) {
                var e;
                if (t = E.formatURL(t), this.url = t, t == i.SoundManager._bgMusic ? (Ye._initMusicAudio(),
                        (e = Ye._musicAudio).src != t && (Ye._audioCache[e.src] = null, e = null)) : e = Ye._audioCache[t],
                    e && e.readyState >= 2) this.event(zt.COMPLETE);
                else {
                    e || (t == i.SoundManager._bgMusic ? (Ye._initMusicAudio(), e = Ye._musicAudio) : e = $t.createElement("audio"),
                            Ye._audioCache[t] = e, e.src = t), e.addEventListener("canplaythrough", onLoaded),
                        e.addEventListener("error", onErr);
                    var s = this;
                    this.audio = e, e.load ? e.load() : onErr();
                }

                function onLoaded() {
                    offs(), s.loaded = !0, s.event(zt.COMPLETE);
                }

                function onErr() {
                    e.load = null, offs(), s.event(zt.ERROR);
                }

                function offs() {
                    e.removeEventListener("canplaythrough", onLoaded), e.removeEventListener("error", onErr);
                }
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (!this.url) return null;
                var r, a;
                if (!(r = this.url == i.SoundManager._bgMusic ? Ye._musicAudio : Ye._audioCache[this.url])) return null;
                a = s.getItem("audio:" + this.url), he.isConchApp ? a || ((a = $t.createElement("audio")).src = this.url) : this.url == i.SoundManager._bgMusic ? (Ye._initMusicAudio(),
                    (a = Ye._musicAudio).src = this.url) : a = a || r.cloneNode(!0);
                var n = new We(a);
                return n.url = this.url, n.loops = e, n.startTime = t, n.play(), i.SoundManager.addChannel(n),
                    n;
            }
        }, {
            key: "duration",
            get: function get() {
                var t;
                return (t = Ye._audioCache[this.url]) ? t.duration : 0;
            }
        }], [{
            key: "_initMusicAudio",
            value: function _initMusicAudio() {
                Ye._musicAudio || (Ye._musicAudio || (Ye._musicAudio = $t.createElement("audio")),
                    he.isConchApp || $t.document.addEventListener("mousedown", Ye._makeMusicOK));
            }
        }, {
            key: "_makeMusicOK",
            value: function _makeMusicOK() {
                $t.document.removeEventListener("mousedown", Ye._makeMusicOK), Ye._musicAudio.src ? Ye._musicAudio.play() : (Ye._musicAudio.src = "",
                    Ye._musicAudio.load());
            }
        }]);
        return Ye;
    }(x);
    Ye._audioCache = {};
    var Ve = /* */ function(_ke2) {
        _inherits(Ve, _ke2);

        function Ve() {
            var _this30;
            _classCallCheck(this, Ve);
            _this30 = _possibleConstructorReturn(this, _getPrototypeOf(Ve).call(this)), _this30.bufferSource = null,
                _this30._currentTime = 0, _this30._volume = 1, _this30._startTime = 0, _this30._pauseTime = 0,
                _this30.context = i.WebAudioSound.ctx, _this30._onPlayEnd = K.bind(_this30.__onPlayEnd, _assertThisInitialized(_this30)),
                _this30.context.createGain ? _this30.gain = _this30.context.createGain() : _this30.gain = _this30.context.createGainNode();
            return _this30;
        }
        _createClass(Ve, [{
            key: "play",
            value: function play() {
                if (i.SoundManager.addChannel(this), this.isStopped = !1, this._clearBufferSource(),
                    this.audioBuffer) {
                    if (this.startTime >= this.duration) return stop();
                    var t = this.context,
                        e = this.gain,
                        s = t.createBufferSource();
                    this.bufferSource = s, s.buffer = this.audioBuffer, s.connect(e), e && e.disconnect(),
                        e.connect(t.destination), s.onended = this._onPlayEnd, this._startTime = $t.now(),
                        this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, Ve.SetTargetDelay) : this.gain.gain.value = this._volume,
                        0 == this.loops && (s.loop = !0), s.playbackRate.setTargetAtTime ? s.playbackRate.setTargetAtTime(i.SoundManager.playbackRate, this.context.currentTime, Ve.SetTargetDelay) : s.playbackRate.value = i.SoundManager.playbackRate,
                        s.start(0, this.startTime), this._currentTime = 0;
                }
            }
        }, {
            key: "__onPlayEnd",
            value: function __onPlayEnd() {
                if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1),
                    this.completeHandler = null), this.stop(), void this.event(zt.COMPLETE);
                this.loops > 0 && this.loops--, this.startTime = 0, this.play();
            }
        }, {
            key: "_clearBufferSource",
            value: function _clearBufferSource() {
                if (this.bufferSource) {
                    var t = this.bufferSource;
                    t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, Ve._tryCleanFailed || this._tryClearBuffer(t),
                        this.bufferSource = null;
                }
            }
        }, {
            key: "_tryClearBuffer",
            value: function _tryClearBuffer(t) {
                if ($t.onMac) try {
                    t.buffer = i.WebAudioSound._miniBuffer;
                } catch (t) {
                    Ve._tryCleanFailed = !0;
                } else try {
                    t.buffer = null;
                } catch (t) {
                    Ve._tryCleanFailed = !0;
                }
            }
        }, {
            key: "stop",
            value: function stop() {
                _get(_getPrototypeOf(Ve.prototype), "stop", this).call(this), this._clearBufferSource(),
                    this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0,
                    i.SoundManager.removeChannel(this), this.completeHandler = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
            }
        }, {
            key: "pause",
            value: function pause() {
                this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(),
                    this.gain && this.gain.disconnect(), this.isStopped = !0, i.SoundManager.removeChannel(this),
                    i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
            }
        }, {
            key: "resume",
            value: function resume() {
                this.startTime = this._pauseTime, this.play();
            }
        }, {
            key: "position",
            get: function get() {
                return this.bufferSource ? ($t.now() - this._startTime) / 1e3 + this.startTime : 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return this.audioBuffer ? this.audioBuffer.duration : 0;
            }
        }, {
            key: "volume",
            set: function set(t) {
                this._volume = t, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, Ve.SetTargetDelay) : this.gain.gain.value = t);
            },
            get: function get() {
                return this._volume;
            }
        }]);
        return Ve;
    }(ke);
    Ve._tryCleanFailed = !1, Ve.SetTargetDelay = .001;
    var Xe = /* */ function(_x7) {
        _inherits(Xe, _x7);

        function Xe() {
            var _this31;
            _classCallCheck(this, Xe);
            _this31 = _possibleConstructorReturn(this, _getPrototypeOf(Xe).apply(this, arguments)),
                _this31.loaded = !1, _this31._disposed = !1;
            return _this31;
        }
        _createClass(Xe, [{
            key: "load",
            value: function load(t) {
                var e = this;
                if (t = E.formatURL(t), this.url = t, this.audioBuffer = Xe._dataCache[t], this.audioBuffer) this._loaded(this.audioBuffer);
                else if (Xe.e.on("loaded:" + t, this, this._loaded),
                    Xe.e.on("err:" + t, this, this._err), !Xe.__loadingSound[t]) {
                    Xe.__loadingSound[t] = !0;
                    var i = new XMLHttpRequest();
                    i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        e._disposed ? e._removeLoadEvents() : (e.data = i.response, Xe.buffs.push({
                            buffer: e.data,
                            url: e.url
                        }), Xe.decode());
                    }, i.onerror = function(t) {
                        e._err();
                    }, i.send();
                }
            }
        }, {
            key: "_err",
            value: function _err() {
                this._removeLoadEvents(), Xe.__loadingSound[this.url] = !1, this.event(zt.ERROR);
            }
        }, {
            key: "_loaded",
            value: function _loaded(t) {
                this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, Xe._dataCache[this.url] = this.audioBuffer,
                    this.loaded = !0, this.event(zt.COMPLETE));
            }
        }, {
            key: "_removeLoadEvents",
            value: function _removeLoadEvents() {
                Xe.e.off("loaded:" + this.url, this, this._loaded), Xe.e.off("err:" + this.url, this, this._err);
            }
        }, {
            key: "__playAfterLoaded",
            value: function __playAfterLoaded() {
                if (this.__toPlays) {
                    var t, e, i, s;
                    for (e = (i = this.__toPlays).length, t = 0; t < e; t++) {
                        (s = i[t])[2] && !s[2].isStopped && this.play(s[0], s[1], s[2]);
                    }
                    this.__toPlays.length = 0;
                }
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                return s = s || new Ve(), this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []),
                        this.__toPlays.push([t, e, s]), this.once(zt.COMPLETE, this, this.__playAfterLoaded),
                        this.load(this.url)), s.url = this.url, s.loops = e, s.audioBuffer = this.audioBuffer,
                    s.startTime = t, s.play(), i.SoundManager.addChannel(s), s;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this._disposed = !0, delete Xe._dataCache[this.url], delete Xe.__loadingSound[this.url],
                    this.audioBuffer = null, this.data = null, this.__toPlays = [];
            }
        }, {
            key: "duration",
            get: function get() {
                return this.audioBuffer ? this.audioBuffer.duration : 0;
            }
        }], [{
            key: "decode",
            value: function decode() {
                Xe.buffs.length <= 0 || Xe.isDecoding || (Xe.isDecoding = !0, Xe.tInfo = Xe.buffs.shift(),
                    Xe.ctx.decodeAudioData(Xe.tInfo.buffer, Xe._done, Xe._fail));
            }
        }, {
            key: "_done",
            value: function _done(t) {
                Xe.e.event("loaded:" + Xe.tInfo.url, t), Xe.isDecoding = !1, Xe.decode();
            }
        }, {
            key: "_fail",
            value: function _fail() {
                Xe.e.event("err:" + Xe.tInfo.url, null), Xe.isDecoding = !1, Xe.decode();
            }
        }, {
            key: "_playEmptySound",
            value: function _playEmptySound() {
                if (null != Xe.ctx) {
                    var t = Xe.ctx.createBufferSource();
                    t.buffer = Xe._miniBuffer, t.connect(Xe.ctx.destination), t.start(0, 0, 0);
                }
            }
        }, {
            key: "_unlock",
            value: function _unlock() {
                Xe._unlocked || (Xe._playEmptySound(), "running" == Xe.ctx.state && (window.document.removeEventListener("mousedown", Xe._unlock, !0),
                    window.document.removeEventListener("touchend", Xe._unlock, !0), window.document.removeEventListener("touchstart", Xe._unlock, !0),
                    Xe._unlocked = !0));
            }
        }, {
            key: "initWebAudio",
            value: function initWebAudio() {
                "running" != Xe.ctx.state && (Xe._unlock(), window.document.addEventListener("mousedown", Xe._unlock, !0),
                    window.document.addEventListener("touchend", Xe._unlock, !0), window.document.addEventListener("touchstart", Xe._unlock, !0));
            }
        }]);
        return Xe;
    }(x);
    Xe._dataCache = {}, Xe.webAudioEnabled = window.AudioContext || window.webkitAudioContext || window.mozAudioContext,
        Xe.ctx = Xe.webAudioEnabled ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext)() : void 0,
        Xe.buffs = [], Xe.isDecoding = !1, Xe._miniBuffer = Xe.ctx ? Xe.ctx.createBuffer(1, 1, 22050) : void 0,
        Xe.e = new x(), Xe._unlocked = !1, Xe.__loadingSound = {};
    var He = /* */ function() {
        function He() {
            _classCallCheck(this, He);
        }
        _createClass(He, null, [{
            key: "__init__",
            value: function __init__() {
                var t = i.Browser.window,
                    e = !!(t.AudioContext || t.webkitAudioContext || t.mozAudioContext);
                return e && Xe.initWebAudio(), He._soundClass = e ? Xe : Ye, Ye._initMusicAudio(),
                    He._musicClass = Ye, e;
            }
        }, {
            key: "addChannel",
            value: function addChannel(t) {
                He._channels.indexOf(t) >= 0 || He._channels.push(t);
            }
        }, {
            key: "removeChannel",
            value: function removeChannel(t) {
                var e;
                for (e = He._channels.length - 1; e >= 0; e--) {
                    He._channels[e] == t && He._channels.splice(e, 1);
                }
            }
        }, {
            key: "disposeSoundLater",
            value: function disposeSoundLater(t) {
                He._lastSoundUsedTimeDic[t] = i.Browser.now(), He._isCheckingDispose || (He._isCheckingDispose = !0,
                    i.timer.loop(5e3, null, He._checkDisposeSound));
            }
        }, {
            key: "_checkDisposeSound",
            value: function _checkDisposeSound() {
                var t, e = i.Browser.now(),
                    s = !1;
                for (t in He._lastSoundUsedTimeDic) {
                    e - He._lastSoundUsedTimeDic[t] > 3e4 ? (delete He._lastSoundUsedTimeDic[t], He.disposeSoundIfNotUsed(t)) : s = !0;
                }
                s || (He._isCheckingDispose = !1, i.timer.clear(null, He._checkDisposeSound));
            }
        }, {
            key: "disposeSoundIfNotUsed",
            value: function disposeSoundIfNotUsed(t) {
                var e;
                for (e = He._channels.length - 1; e >= 0; e--) {
                    if (He._channels[e].url == t) return;
                }
                He.destroySound(t);
            }
        }, {
            key: "_visibilityChange",
            value: function _visibilityChange() {
                i.stage.isVisibility ? He._stageOnFocus() : He._stageOnBlur();
            }
        }, {
            key: "_stageOnBlur",
            value: function _stageOnBlur() {
                He._isActive = !1, He._musicChannel && (He._musicChannel.isStopped || (He._blurPaused = !0,
                    He._musicChannel.pause())), He.stopAllSound(), i.stage.once(zt.MOUSE_DOWN, null, He._stageOnFocus);
            }
        }, {
            key: "_recoverWebAudio",
            value: function _recoverWebAudio() {
                Xe.ctx && "running" != Xe.ctx.state && Xe.ctx.resume && Xe.ctx.resume();
            }
        }, {
            key: "_stageOnFocus",
            value: function _stageOnFocus() {
                He._isActive = !0, He._recoverWebAudio(), i.stage.off(zt.MOUSE_DOWN, null, He._stageOnFocus),
                    He._blurPaused && He._musicChannel && He._musicChannel.isStopped && (He._blurPaused = !1,
                        He._musicChannel.resume());
            }
        }, {
            key: "playSound",
            value: function playSound(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                if (!He._isActive || !t) return null;
                if (He._muted) return null;
                if (He._recoverWebAudio(), (t = E.formatURL(t)) == He._bgMusic) {
                    if (He._musicMuted) return null;
                } else {
                    if (i.Render.isConchApp) {
                        var n = K.getFileExtension(t);
                        if ("wav" != n && "ogg" != n) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."),
                            null;
                    }
                    if (He._soundMuted) return null;
                }
                var h, o;
                return i.Browser.onBDMiniGame || i.Browser.onMiniGame || i.Browser.onKGMiniGame || i.Browser.onQGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || (h = i.loader.getRes(t)),
                    r || (r = He._soundClass), h || ((h = new r()).load(t), i.Browser.onBDMiniGame || i.Browser.onMiniGame || i.Browser.onKGMiniGame || i.Browser.onQGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Loader.cacheRes(t, h)),
                    (o = h.play(a, e)) ? (o.url = t, o.volume = t == He._bgMusic ? He.musicVolume : He.soundVolume,
                        o.completeHandler = s, o) : null;
            }
        }, {
            key: "destroySound",
            value: function destroySound(t) {
                var e = i.loader.getRes(t);
                e && (i.Loader.clearRes(t), e.dispose());
            }
        }, {
            key: "playMusic",
            value: function playMusic(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                return t = E.formatURL(t), He._bgMusic = t, He._musicChannel && He._musicChannel.stop(),
                    He._musicChannel = He.playSound(t, e, i, He._musicClass, s);
            }
        }, {
            key: "stopSound",
            value: function stopSound(t) {
                var e, i;
                for (t = E.formatURL(t), e = He._channels.length - 1; e >= 0; e--) {
                    (i = He._channels[e]).url == t && i.stop();
                }
            }
        }, {
            key: "stopAll",
            value: function stopAll() {
                var t;
                for (He._bgMusic = null, t = He._channels.length - 1; t >= 0; t--) {
                    He._channels[t].stop();
                }
            }
        }, {
            key: "stopAllSound",
            value: function stopAllSound() {
                var t, e;
                for (t = He._channels.length - 1; t >= 0; t--) {
                    (e = He._channels[t]).url != He._bgMusic && e.stop();
                }
            }
        }, {
            key: "stopMusic",
            value: function stopMusic() {
                He._musicChannel && He._musicChannel.stop(), He._bgMusic = null;
            }
        }, {
            key: "setSoundVolume",
            value: function setSoundVolume(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i, s;
                if (e) e = E.formatURL(e), He._setVolume(e, t);
                else
                    for (He.soundVolume = t, i = He._channels.length - 1; i >= 0; i--) {
                        (s = He._channels[i]).url != He._bgMusic && (s.volume = t);
                    }
            }
        }, {
            key: "setMusicVolume",
            value: function setMusicVolume(t) {
                He.musicVolume = t, He._setVolume(He._bgMusic, t);
            }
        }, {
            key: "_setVolume",
            value: function _setVolume(t, e) {
                var i, s;
                for (t = E.formatURL(t), i = He._channels.length - 1; i >= 0; i--) {
                    (s = He._channels[i]).url == t && (s.volume = e);
                }
            }
        }, {
            key: "autoStopMusic",
            set: function set(t) {
                i.stage.off(zt.BLUR, null, He._stageOnBlur), i.stage.off(zt.FOCUS, null, He._stageOnFocus),
                    i.stage.off(zt.VISIBILITY_CHANGE, null, He._visibilityChange), He._autoStopMusic = t,
                    t && (i.stage.on(zt.BLUR, null, He._stageOnBlur), i.stage.on(zt.FOCUS, null, He._stageOnFocus),
                        i.stage.on(zt.VISIBILITY_CHANGE, null, He._visibilityChange));
            },
            get: function get() {
                return He._autoStopMusic;
            }
        }, {
            key: "muted",
            set: function set(t) {
                t != He._muted && (t && He.stopAllSound(), He.musicMuted = t, He._muted = t);
            },
            get: function get() {
                return He._muted;
            }
        }, {
            key: "soundMuted",
            set: function set(t) {
                He._soundMuted = t;
            },
            get: function get() {
                return He._soundMuted;
            }
        }, {
            key: "musicMuted",
            set: function set(t) {
                t != He._musicMuted && (t ? (He._bgMusic && He._musicChannel && !He._musicChannel.isStopped ? i.Render.isConchApp ? He._musicChannel._audio && (He._musicChannel._audio.muted = !0) : He._musicChannel.pause() : He._musicChannel = null,
                    He._musicMuted = t) : (He._musicMuted = t, He._bgMusic && He._musicChannel && (i.Render.isConchApp ? He._musicChannel._audio && (He._musicChannel._audio.muted = !1) : He._musicChannel.resume())));
            },
            get: function get() {
                return He._musicMuted;
            }
        }, {
            key: "useAudioMusic",
            get: function get() {
                return He._useAudioMusic;
            },
            set: function set(t) {
                He._useAudioMusic = t, He._musicClass = t ? Ye : null;
            }
        }]);
        return He;
    }();
    He.musicVolume = 1, He.soundVolume = 1, He.playbackRate = 1, He._useAudioMusic = !0,
        He._muted = !1, He._soundMuted = !1, He._musicMuted = !1, He._bgMusic = null, He._musicChannel = null,
        He._channels = [], He._blurPaused = !1, He._isActive = !0, He._lastSoundUsedTimeDic = {},
        He._isCheckingDispose = !1, He.autoReleaseSound = !0;
    var ze = /* */ function() {
        function ze() {
            _classCallCheck(this, ze);
        }
        _createClass(ze, [{
            key: "create",
            value: function create() {
                return this.json ? i.SceneUtils.createByData(null, this.json) : null;
            }
        }]);
        return ze;
    }();
    var Ke = /* */ function() {
        function Ke() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            _classCallCheck(this, Ke);
            this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t),
                this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_);
        }
        _createClass(Ke, [{
            key: "_resizeBuffer",
            value: function _resizeBuffer(t) {
                try {
                    var e = new Uint8Array(t);
                    null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))),
                        this._u8d_ = e, this._d_ = new DataView(e.buffer);
                } catch (e) {
                    throw "Invalid typed array length:" + t;
                }
            }
        }, {
            key: "getString",
            value: function getString() {
                return this.readString();
            }
        }, {
            key: "readString",
            value: function readString() {
                return this._rUTF(this.getUint16());
            }
        }, {
            key: "getFloat32Array",
            value: function getFloat32Array(t, e) {
                return this.readFloat32Array(t, e);
            }
        }, {
            key: "readFloat32Array",
            value: function readFloat32Array(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var s = new Float32Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, s;
            }
        }, {
            key: "getUint8Array",
            value: function getUint8Array(t, e) {
                return this.readUint8Array(t, e);
            }
        }, {
            key: "readUint8Array",
            value: function readUint8Array(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var s = new Uint8Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, s;
            }
        }, {
            key: "getInt16Array",
            value: function getInt16Array(t, e) {
                return this.readInt16Array(t, e);
            }
        }, {
            key: "readInt16Array",
            value: function readInt16Array(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var s = new Int16Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, s;
            }
        }, {
            key: "getFloat32",
            value: function getFloat32() {
                return this.readFloat32();
            }
        }, {
            key: "readFloat32",
            value: function readFloat32() {
                if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
                var t = this._d_.getFloat32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }
        }, {
            key: "getFloat64",
            value: function getFloat64() {
                return this.readFloat64();
            }
        }, {
            key: "readFloat64",
            value: function readFloat64() {
                if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
                var t = this._d_.getFloat64(this._pos_, this._xd_);
                return this._pos_ += 8, t;
            }
        }, {
            key: "writeFloat32",
            value: function writeFloat32(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_),
                    this._pos_ += 4;
            }
        }, {
            key: "writeFloat64",
            value: function writeFloat64(t) {
                this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_),
                    this._pos_ += 8;
            }
        }, {
            key: "getInt32",
            value: function getInt32() {
                return this.readInt32();
            }
        }, {
            key: "readInt32",
            value: function readInt32() {
                if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
                var t = this._d_.getInt32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }
        }, {
            key: "getUint32",
            value: function getUint32() {
                return this.readUint32();
            }
        }, {
            key: "readUint32",
            value: function readUint32() {
                if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
                var t = this._d_.getUint32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }
        }, {
            key: "writeInt32",
            value: function writeInt32(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_),
                    this._pos_ += 4;
            }
        }, {
            key: "writeUint32",
            value: function writeUint32(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_),
                    this._pos_ += 4;
            }
        }, {
            key: "getInt16",
            value: function getInt16() {
                return this.readInt16();
            }
        }, {
            key: "readInt16",
            value: function readInt16() {
                if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
                var t = this._d_.getInt16(this._pos_, this._xd_);
                return this._pos_ += 2, t;
            }
        }, {
            key: "getUint16",
            value: function getUint16() {
                return this.readUint16();
            }
        }, {
            key: "readUint16",
            value: function readUint16() {
                if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
                var t = this._d_.getUint16(this._pos_, this._xd_);
                return this._pos_ += 2, t;
            }
        }, {
            key: "writeUint16",
            value: function writeUint16(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_),
                    this._pos_ += 2;
            }
        }, {
            key: "writeInt16",
            value: function writeInt16(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_),
                    this._pos_ += 2;
            }
        }, {
            key: "getUint8",
            value: function getUint8() {
                return this.readUint8();
            }
        }, {
            key: "readUint8",
            value: function readUint8() {
                if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
                return this._u8d_[this._pos_++];
            }
        }, {
            key: "writeUint8",
            value: function writeUint8(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
            }
        }, {
            key: "_getUInt8",
            value: function _getUInt8(t) {
                return this._readUInt8(t);
            }
        }, {
            key: "_readUInt8",
            value: function _readUInt8(t) {
                return this._d_.getUint8(t);
            }
        }, {
            key: "_getUint16",
            value: function _getUint16(t) {
                return this._readUint16(t);
            }
        }, {
            key: "_readUint16",
            value: function _readUint16(t) {
                return this._d_.getUint16(t, this._xd_);
            }
        }, {
            key: "_getMatrix",
            value: function _getMatrix() {
                return this._readMatrix();
            }
        }, {
            key: "_readMatrix",
            value: function _readMatrix() {
                return new p(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
            }
        }, {
            key: "_rUTF",
            value: function _rUTF(t) {
                var e, i, s = this._pos_ + t,
                    r = String.fromCharCode,
                    a = this._u8d_,
                    n = [],
                    h = 0;
                for (n.length = 1e3; this._pos_ < s;) {
                    if ((e = a[this._pos_++]) < 128) 0 != e && (n[h++] = r(e));
                    else if (e < 224) n[h++] = r((63 & e) << 6 | 127 & a[this._pos_++]);
                    else if (e < 240) i = a[this._pos_++],
                        n[h++] = r((31 & e) << 12 | (127 & i) << 6 | 127 & a[this._pos_++]);
                    else {
                        var _t2 = (15 & e) << 18 | (127 & (i = a[this._pos_++])) << 12 | (127 & a[this._pos_++]) << 6 | 127 & a[this._pos_++];
                        if (_t2 >= 65536) {
                            var _e4 = _t2 - 65536,
                                _i5 = 55296 | _e4 >> 10,
                                _s3 = 56320 | 1023 & _e4;
                            n[h++] = r(_i5), n[h++] = r(_s3);
                        } else n[h++] = r(_t2);
                    }
                }
                return n.length = h, n.join("");
            }
        }, {
            key: "getCustomString",
            value: function getCustomString(t) {
                return this.readCustomString(t);
            }
        }, {
            key: "readCustomString",
            value: function readCustomString(t) {
                for (var e, i = "", s = 0, r = String.fromCharCode, a = this._u8d_; t > 0;) {
                    if ((e = a[this._pos_]) < 128) i += r(e), this._pos_++, t--;
                    else
                        for (s = e - 128,
                            this._pos_++, t -= s; s > 0;) {
                            e = a[this._pos_++], i += r(a[this._pos_++] << 8 | e), s--;
                        }
                }
                return i;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._pos_ = 0, this.length = 0;
            }
        }, {
            key: "__getBuffer",
            value: function __getBuffer() {
                return this._d_.buffer;
            }
        }, {
            key: "writeUTFBytes",
            value: function writeUTFBytes(t) {
                for (var e = 0, i = (t += "").length; e < i; e++) {
                    var s = t.charCodeAt(e);
                    if (s <= 127) this.writeByte(s);
                    else if (s <= 2047) this._ensureWrite(this._pos_ + 2),
                        this._u8d_.set([192 | s >> 6, 128 | 63 & s], this._pos_), this._pos_ += 2;
                    else if (s >= 55296 && s <= 56319) {
                        e++;
                        var _i6 = t.charCodeAt(e);
                        if (!Number.isNaN(_i6) && _i6 >= 56320 && _i6 <= 57343) {
                            var _t3 = 64 + (1023 & s),
                                _e5 = 1023 & _i6,
                                _r = 240 | _t3 >> 8 & 63,
                                _a2 = 128 | _t3 >> 2 & 63,
                                _n = 128 | (3 & _t3) << 4 | _e5 >> 6 & 15,
                                _h = 128 | 63 & _e5;
                            this._ensureWrite(this._pos_ + 4), this._u8d_.set([_r, _a2, _n, _h], this._pos_),
                                this._pos_ += 4;
                        }
                    } else s <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([224 | s >> 12, 128 | s >> 6 & 63, 128 | 63 & s], this._pos_),
                        this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([240 | s >> 18, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s], this._pos_),
                        this._pos_ += 4);
                }
            }
        }, {
            key: "writeUTFString",
            value: function writeUTFString(t) {
                var e = this.pos;
                this.writeUint16(1), this.writeUTFBytes(t);
                var i = this.pos - e - 2;
                this._d_.setUint16(e, i, this._xd_);
            }
        }, {
            key: "readUTFString",
            value: function readUTFString() {
                return this.readUTFBytes(this.getUint16());
            }
        }, {
            key: "getUTFString",
            value: function getUTFString() {
                return this.readUTFString();
            }
        }, {
            key: "readUTFBytes",
            value: function readUTFBytes() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                if (0 === t) return "";
                var e = this.bytesAvailable;
                if (t > e) throw "readUTFBytes error - Out of bounds";
                return t = t > 0 ? t : e, this._rUTF(t);
            }
        }, {
            key: "getUTFBytes",
            value: function getUTFBytes() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                return this.readUTFBytes(t);
            }
        }, {
            key: "writeByte",
            value: function writeByte(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
            }
        }, {
            key: "readByte",
            value: function readByte() {
                if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
                return this._d_.getInt8(this._pos_++);
            }
        }, {
            key: "getByte",
            value: function getByte() {
                return this.readByte();
            }
        }, {
            key: "_ensureWrite",
            value: function _ensureWrite(t) {
                this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
            }
        }, {
            key: "writeArrayBuffer",
            value: function writeArrayBuffer(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                if (e < 0 || i < 0) throw "writeArrayBuffer error - Out of bounds";
                0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
                var s = new Uint8Array(t);
                this._u8d_.set(s.subarray(e, e + i), this._pos_), this._pos_ += i;
            }
        }, {
            key: "readArrayBuffer",
            value: function readArrayBuffer(t) {
                var e;
                return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t,
                    e;
            }
        }, {
            key: "buffer",
            get: function get() {
                var t = this._d_.buffer;
                return t.byteLength === this._length ? t : t.slice(0, this._length);
            }
        }, {
            key: "endian",
            get: function get() {
                return this._xd_ ? Ke.LITTLE_ENDIAN : Ke.BIG_ENDIAN;
            },
            set: function set(t) {
                this._xd_ = t === Ke.LITTLE_ENDIAN;
            }
        }, {
            key: "length",
            set: function set(t) {
                this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t),
                    this._length = t;
            },
            get: function get() {
                return this._length;
            }
        }, {
            key: "pos",
            get: function get() {
                return this._pos_;
            },
            set: function set(t) {
                this._pos_ = t;
            }
        }, {
            key: "bytesAvailable",
            get: function get() {
                return this._length - this._pos_;
            }
        }], [{
            key: "getSystemEndian",
            value: function getSystemEndian() {
                if (!Ke._sysEndian) {
                    var t = new ArrayBuffer(2);
                    new DataView(t).setInt16(0, 256, !0), Ke._sysEndian = 256 === new Int16Array(t)[0] ? Ke.LITTLE_ENDIAN : Ke.BIG_ENDIAN;
                }
                return Ke._sysEndian;
            }
        }]);
        return Ke;
    }();
    Ke.BIG_ENDIAN = "bigEndian", Ke.LITTLE_ENDIAN = "littleEndian", Ke._sysEndian = null;
    var je = /* */ function() {
        function je() {
            _classCallCheck(this, je);
            this._fontCharDic = {}, this._fontWidthMap = {}, this._maxWidth = 0, this._spaceWidth = 10,
                this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
        }
        _createClass(je, [{
            key: "loadFont",
            value: function loadFont(t, e) {
                this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? i.loader.load([{
                    url: t,
                    type: i.Loader.XML
                }, {
                    url: t.replace(".fnt", ".png"),
                    type: i.Loader.IMAGE
                }], T.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file');
            }
        }, {
            key: "_onLoaded",
            value: function _onLoaded() {
                this.parseFont(i.Loader.getRes(this._path), i.Loader.getRes(this._path.replace(".fnt", ".png"))),
                    this._complete && this._complete.run();
            }
        }, {
            key: "parseFont",
            value: function parseFont(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    if (!i[0].getAttributeNode) return this.parseFont2(t, e);
                    this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                    var s = i[0].getAttributeNode("padding").nodeValue.split(",");
                    this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                    var r = t.getElementsByTagName("char"),
                        a = 0;
                    for (a = 0; a < r.length; a++) {
                        var n = r[a],
                            h = parseInt(n.getAttributeNode("id").nodeValue),
                            o = parseInt(n.getAttributeNode("xoffset").nodeValue) / 1,
                            l = parseInt(n.getAttributeNode("yoffset").nodeValue) / 1,
                            _ = parseInt(n.getAttributeNode("xadvance").nodeValue) / 1,
                            c = new g();
                        c.x = parseInt(n.getAttributeNode("x").nodeValue), c.y = parseInt(n.getAttributeNode("y").nodeValue),
                            c.width = parseInt(n.getAttributeNode("width").nodeValue), c.height = parseInt(n.getAttributeNode("height").nodeValue);
                        var u = Kt.create(e, c.x, c.y, c.width, c.height, o, l);
                        this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[h] = u,
                            this._fontWidthMap[h] = _;
                    }
                }
            }
        }, {
            key: "parseFont2",
            value: function parseFont2(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                    var s = i[0].attributes.padding.nodeValue.split(",");
                    this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                    var r = t.getElementsByTagName("char"),
                        a = 0;
                    for (a = 0; a < r.length; a++) {
                        var n = r[a].attributes,
                            h = parseInt(n.id.nodeValue),
                            o = parseInt(n.xoffset.nodeValue) / 1,
                            l = parseInt(n.yoffset.nodeValue) / 1,
                            _ = parseInt(n.xadvance.nodeValue) / 1,
                            c = new g();
                        c.x = parseInt(n.x.nodeValue), c.y = parseInt(n.y.nodeValue), c.width = parseInt(n.width.nodeValue),
                            c.height = parseInt(n.height.nodeValue);
                        var u = Kt.create(e, c.x, c.y, c.width, c.height, o, l);
                        this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[h] = u,
                            this._fontWidthMap[h] = _;
                    }
                }
            }
        }, {
            key: "getCharTexture",
            value: function getCharTexture(t) {
                return this._fontCharDic[t.charCodeAt(0)];
            }
        }, {
            key: "destroy",
            value: function destroy() {
                if (this._texture) {
                    for (var t in this._fontCharDic) {
                        var e = this._fontCharDic[t];
                        e && e.destroy();
                    }
                    this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null,
                        this._complete = null, this._padding = null;
                }
            }
        }, {
            key: "setSpaceWidth",
            value: function setSpaceWidth(t) {
                this._spaceWidth = t;
            }
        }, {
            key: "getCharWidth",
            value: function getCharWidth(t) {
                var e = t.charCodeAt(0);
                return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0;
            }
        }, {
            key: "getTextWidth",
            value: function getTextWidth(t) {
                for (var e = 0, i = 0, s = t.length; i < s; i++) {
                    e += this.getCharWidth(t.charAt(i));
                }
                return e;
            }
        }, {
            key: "getMaxWidth",
            value: function getMaxWidth() {
                return this._maxWidth;
            }
        }, {
            key: "getMaxHeight",
            value: function getMaxHeight() {
                return this.fontSize;
            }
        }, {
            key: "_drawText",
            value: function _drawText(t, e, i, s, r, a) {
                var n, h = this.getTextWidth(t),
                    o = 0;
                "center" === r && (o = (a - h) / 2), "right" === r && (o = a - h);
                for (var l = 0, _ = 0, c = t.length; _ < c; _++) {
                    (n = this.getCharTexture(t.charAt(_))) && (e.graphics.drawImage(n, i + l + o, s),
                        l += this.getCharWidth(t.charAt(_)));
                }
            }
        }]);
        return je;
    }();
    be.regClass("laya.display.BitmapFont", je), be.regClass("Laya.BitmapFont", je);
    var qe = /* */ function(_x8) {
        _inherits(qe, _x8);

        function qe() {
            var _this32;
            _classCallCheck(this, qe);
            _this32 = _possibleConstructorReturn(this, _getPrototypeOf(qe).apply(this, arguments)),
                _this32._http = new XMLHttpRequest();
            return _this32;
        }
        _createClass(qe, [{
            key: "send",
            value: function send(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "get";
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                this._responseType = s, this._data = null, ($t.onVVMiniGame || $t.onQGMiniGame || $t.onQQMiniGame || $t.onAlipayMiniGame) && (t = encodeURI(t)),
                    this._url = t;
                var a = this,
                    n = this._http;
                t = E.getAdptedFilePath(t), n.open(i, t, !0);
                var h = !1;
                if (r)
                    for (var o = 0; o < r.length; o++) {
                        n.setRequestHeader(r[o++], r[o]);
                    } else window.conch || (e && "string" != typeof e ? (n.setRequestHeader("Content-Type", "application/json"),
                        h = !0) : n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                var l = "arraybuffer" !== s ? "text" : "arraybuffer";
                n.responseType = l, n.dataType && (n.dataType = l), n.onerror = function(t) {
                    a._onError(t);
                }, n.onabort = function(t) {
                    a._onAbort(t);
                }, n.onprogress = function(t) {
                    a._onProgress(t);
                }, n.onload = function(t) {
                    a._onLoad(t);
                }, n.send(h ? JSON.stringify(e) : e);
            }
        }, {
            key: "_onProgress",
            value: function _onProgress(t) {
                t && t.lengthComputable && this.event(zt.PROGRESS, t.loaded / t.total);
            }
        }, {
            key: "_onAbort",
            value: function _onAbort(t) {
                this.error("Request was aborted by user");
            }
        }, {
            key: "_onError",
            value: function _onError(t) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
            }
        }, {
            key: "_onLoad",
            value: function _onLoad(t) {
                var e = this._http,
                    i = void 0 !== e.status ? e.status : 200;
                200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
            }
        }, {
            key: "error",
            value: function error(t) {
                this.clear(), console.warn(this.url, t), this.event(zt.ERROR, t);
            }
        }, {
            key: "complete",
            value: function complete() {
                this.clear();
                var t = !0;
                try {
                    "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = K.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText;
                } catch (e) {
                    t = !1, this.error(e.message);
                }
                t && this.event(zt.COMPLETE, this._data instanceof Array ? [this._data] : this._data);
            }
        }, {
            key: "clear",
            value: function clear() {
                var t = this._http;
                t.onerror = t.onabort = t.onprogress = t.onload = null;
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "data",
            get: function get() {
                return this._data;
            }
        }, {
            key: "http",
            get: function get() {
                return this._http;
            }
        }]);
        return qe;
    }(x);
    var Qe = /* */ function(_x9) {
        _inherits(Qe, _x9);

        function Qe() {
            var _this33;
            _classCallCheck(this, Qe);
            _this33 = _possibleConstructorReturn(this, _getPrototypeOf(Qe).apply(this, arguments)),
                _this33._customParse = !1;
            return _this33;
        }
        _createClass(Qe, [{
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : i.WorkerLoader.enable;
                if (t) {
                    var h;
                    if (Qe.setGroup(t, "666"), this._url = t, 0 === t.indexOf("data:image") ? e = Qe.IMAGE : t = E.formatURL(t),
                        this._type = e || (e = Qe.getTypeFromUrl(this._url)), this._cache = s, this._useWorkerLoader = n,
                        this._data = null, n && i.WorkerLoader.enableWorkerLoader(), h = e == Qe.IMAGE ? Qe.textureMap[t] : Qe.loadedMap[t], !a && h) return this._data = h, this.event(zt.PROGRESS, 1), void this.event(zt.COMPLETE, this._data);
                    if (r && Qe.setGroup(t, r), null != Qe.parserMap[e]) return this._customParse = !0,
                        void(Qe.parserMap[e] instanceof T ? Qe.parserMap[e].runWith(this) : Qe.parserMap[e].call(null, this));
                    this._loadResourceFilter(e, t);
                } else this.onLoaded(null);
            }
        }, {
            key: "_loadResourceFilter",
            value: function _loadResourceFilter(t, e) {
                this._loadResource(t, e);
            }
        }, {
            key: "_loadResource",
            value: function _loadResource(t, e) {
                switch (t) {
                    case Qe.IMAGE:
                    case "htmlimage":
                    case "nativeimage":
                        this._loadImage(e);
                        break;

                    case Qe.SOUND:
                        this._loadSound(e);
                        break;

                    case Qe.TTF:
                        this._loadTTF(e);
                        break;

                    case Qe.ATLAS:
                    case Qe.PREFAB:
                    case Qe.PLF:
                        this._loadHttpRequestWhat(e, Qe.JSON);
                        break;

                    case Qe.FONT:
                        this._loadHttpRequestWhat(e, Qe.XML);
                        break;

                    case Qe.PLFB:
                        this._loadHttpRequestWhat(e, Qe.BUFFER);
                        break;

                    default:
                        this._loadHttpRequestWhat(e, t);
                }
            }
        }, {
            key: "_loadHttpRequest",
            value: function _loadHttpRequest(t, e, i, s, r, a, n, h) {
                $t.onVVMiniGame ? this._http = new qe() : this._http || (this._http = new qe()),
                    a && this._http.on(zt.PROGRESS, r, a), s && this._http.on(zt.COMPLETE, i, s), this._http.on(zt.ERROR, n, h),
                    this._http.send(t, null, "get", e);
            }
        }, {
            key: "_loadHtmlImage",
            value: function _loadHtmlImage(t, e, i, s, r) {
                var a;

                function clear() {
                    var e = a;
                    e.onload = null, e.onerror = null, delete Qe._imgCache[t];
                }
                (a = new $t.window.Image()).crossOrigin = "", a.onload = function() {
                    clear(), i.call(e, a);
                }, a.onerror = function() {
                    clear(), r.call(s);
                }, a.src = t, Qe._imgCache[t] = a;
            }
        }, {
            key: "_loadHttpRequestWhat",
            value: function _loadHttpRequestWhat(t, e) {
                Qe.preLoadedMap[t] ? this.onLoaded(Qe.preLoadedMap[t]) : this._loadHttpRequest(t, e, this, this.onLoaded, this, this.onProgress, this, this.onError);
            }
        }, {
            key: "_loadTTF",
            value: function _loadTTF(t) {
                t = E.formatURL(t);
                var e = new i.TTFLoader();
                e.complete = T.create(this, this.onLoaded), e.load(t);
            }
        }, {
            key: "_loadImage",
            value: function _loadImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = this;
                e && (t = E.formatURL(t));
                var s = function s() {
                    i.event(zt.ERROR, "Load image failed");
                };
                if ("nativeimage" === this._type) this._loadHtmlImage(t, this, this.onLoaded, this, s);
                else {
                    var r = K.getFileExtension(t);
                    "ktx" === r || "pvr" === r ? this._loadHttpRequest(t, Qe.BUFFER, this, this.onLoaded, this, this.onProgress, this, this.onError) : this._loadHtmlImage(t, this, this.onLoaded, this, s);
                }
            }
        }, {
            key: "_loadSound",
            value: function _loadSound(t) {
                var e = new He._soundClass(),
                    i = this;

                function clear() {
                    e.offAll();
                }
                e.on(zt.COMPLETE, this, function() {
                    clear(), i.onLoaded(e);
                }), e.on(zt.ERROR, this, function() {
                    clear(), e.dispose(), i.event(zt.ERROR, "Load sound failed");
                }), e.load(t);
            }
        }, {
            key: "onProgress",
            value: function onProgress(t) {
                this._type === Qe.ATLAS ? this.event(zt.PROGRESS, .3 * t) : this.event(zt.PROGRESS, t);
            }
        }, {
            key: "onError",
            value: function onError(t) {
                this.event(zt.ERROR, t);
            }
        }, {
            key: "onLoaded",
            value: function onLoaded() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var i = this._type;
                if (i == Qe.PLFB) this.parsePLFBData(e), this.complete(e);
                else if (i == Qe.PLF) this.parsePLFData(e),
                    this.complete(e);
                else if (i === Qe.IMAGE) {
                    if (e instanceof ArrayBuffer) {
                        var s = K.getFileExtension(this._url);
                        var _i7;
                        switch (s) {
                            case "ktx":
                                _i7 = t.TextureFormat.ETC1RGB;
                                break;

                            case "pvr":
                                _i7 = t.TextureFormat.PVRTCRGBA_4BPPV;
                                break;

                            default:
                                return void console.error("unknown format", s);
                        }
                        (u = new P(0, 0, _i7, !1, !1)).wrapModeU = t.WarpMode.Clamp, u.wrapModeV = t.WarpMode.Clamp,
                            u.setCompressData(e), u._setCreateURL(this.url);
                    } else if (!(e instanceof P)) {
                        (u = new P(e.width, e.height, 1, !1, !1)).wrapModeU = t.WarpMode.Clamp, u.wrapModeV = t.WarpMode.Clamp,
                            u.loadImageSource(e, !0), u._setCreateURL(e.src);
                    }
                    var r = new Kt(u);
                    r.url = this._url, this.complete(r);
                } else if (i === Qe.SOUND || "nativeimage" === i) this.complete(e);
                else if ("htmlimage" === i) {
                    (u = new P(e.width, e.height, 1, !1, !1)).wrapModeU = t.WarpMode.Clamp, u.wrapModeV = t.WarpMode.Clamp,
                        u.loadImageSource(e, !0), u._setCreateURL(e.src), this.complete(u);
                } else if (i === Qe.ATLAS) {
                    if (e.frames) {
                        var a = [];
                        if (!this._data) {
                            if (this._data = e, e.meta && e.meta.image) {
                                a = e.meta.image.split(",");
                                var n = this._url.indexOf("/") >= 0 ? "/" : "\\",
                                    h = this._url.lastIndexOf(n),
                                    o = h >= 0 ? this._url.substr(0, h + 1) : "",
                                    l = null;
                                $t.onAndroid && e.meta.compressTextureAndroid && (l = ".ktx"), $t.onIOS && e.meta.compressTextureIOS && (l = ".pvr");
                                for (var _ = 0, c = a.length; _ < c; _++) {
                                    a[_] = l ? o + a[_].replace(".png", l) : o + a[_];
                                }
                            } else a = [this._url.replace(".json", ".png")];
                            a.reverse(), e.toLoads = a, e.pics = [];
                        }
                        return this.event(zt.PROGRESS, .3 + 1 / a.length * .6), this._loadResourceFilter(Qe.IMAGE, a.pop());
                    }
                    var u;
                    if (e instanceof P || ((u = new P(e.width, e.height, 1, !1, !1)).wrapModeU = I.WARPMODE_CLAMP,
                            u.wrapModeV = I.WARPMODE_CLAMP, u.loadImageSource(e, !0), u._setCreateURL(e.src),
                            e = u), this._data.pics.push(e), this._data.toLoads.length > 0) return this.event(zt.PROGRESS, .3 + 1 / this._data.toLoads.length * .6),
                        this._loadResourceFilter(Qe.IMAGE, this._data.toLoads.pop());
                    var d = this._data.frames,
                        p = this._url.split("?")[0],
                        f = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : p.substring(0, p.lastIndexOf(".")) + "/",
                        g = this._data.pics,
                        m = E.formatURL(this._url),
                        v = Qe.atlasMap[m] || (Qe.atlasMap[m] = []);
                    v.dir = f;
                    var T = 1;
                    if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale)
                        for (var x in T = parseFloat(this._data.meta.scale),
                                d) {
                            var y, C = d[x],
                                b = g[C.frame.idx ? C.frame.idx : 0],
                                A = E.formatURL(f + x);
                            b.scaleRate = T, y = Kt._create(b, C.frame.x, C.frame.y, C.frame.w, C.frame.h, C.spriteSourceSize.x, C.spriteSourceSize.y, C.sourceSize.w, C.sourceSize.h, Qe.getRes(A)),
                                Qe.cacheTexture(A, y), y.url = A, v.push(A);
                        } else
                            for (x in d) {
                                b = g[(C = d[x]).frame.idx ? C.frame.idx : 0], A = E.formatURL(f + x), y = Kt._create(b, C.frame.x, C.frame.y, C.frame.w, C.frame.h, C.spriteSourceSize.x, C.spriteSourceSize.y, C.sourceSize.w, C.sourceSize.h, Qe.getRes(A)),
                                    Qe.cacheTexture(A, y), y.url = A, v.push(A);
                            }
                    delete this._data.pics, this.complete(this._data);
                } else if (i === Qe.FONT) {
                    if (!e._source) return this._data = e, this.event(zt.PROGRESS, .5), this._loadResourceFilter(Qe.IMAGE, this._url.replace(".fnt", ".png"));
                    var R = new je();
                    R.parseFont(this._data, new Kt(e));
                    var w = this._url.split(".fnt")[0].split("/"),
                        S = w[w.length - 1];
                    Pe.registerBitmapFont(S, R), this._data = R, this.complete(this._data);
                } else if (i === Qe.PREFAB) {
                    var M = new ze();
                    M.json = e, this.complete(M);
                } else this.complete(e);
            }
        }, {
            key: "parsePLFData",
            value: function parsePLFData(t) {
                var e, i, s;
                for (e in t) {
                    switch (s = t[e], e) {
                        case "json":
                        case "text":
                            for (i in s) {
                                Qe.preLoadedMap[E.formatURL(i)] = s[i];
                            }
                            break;

                        default:
                            for (i in s) {
                                Qe.preLoadedMap[E.formatURL(i)] = s[i];
                            }
                    }
                }
            }
        }, {
            key: "parsePLFBData",
            value: function parsePLFBData(t) {
                var e, i, s;
                for (s = (e = new Ke(t)).getInt32(), i = 0; i < s; i++) {
                    this.parseOnePLFBFile(e);
                }
            }
        }, {
            key: "parseOnePLFBFile",
            value: function parseOnePLFBFile(t) {
                var e, i, s;
                i = t.getUTFString(), e = t.getInt32(), s = t.readArrayBuffer(e), Qe.preLoadedMap[E.formatURL(i)] = s;
            }
        }, {
            key: "complete",
            value: function complete(t) {
                this._data = t, this._customParse ? this.event(zt.LOADED, t instanceof Array ? [t] : t) : (Qe._loaders.push(this),
                    Qe._isWorking || Qe.checkNext());
            }
        }, {
            key: "endLoad",
            value: function endLoad() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                t && (this._data = t), this._cache && Qe.cacheRes(this._url, this._data), this.event(zt.PROGRESS, 1),
                    this.event(zt.COMPLETE, this.data instanceof Array ? [this.data] : this.data);
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "type",
            get: function get() {
                return this._type;
            }
        }, {
            key: "cache",
            get: function get() {
                return this._cache;
            }
        }, {
            key: "data",
            get: function get() {
                return this._data;
            }
        }], [{
            key: "getTypeFromUrl",
            value: function getTypeFromUrl(t) {
                var e = K.getFileExtension(t);
                return e ? Qe.typeMap[e] : (console.warn("Not recognize the resources suffix", t),
                    "text");
            }
        }, {
            key: "checkNext",
            value: function checkNext() {
                Qe._isWorking = !0;
                for (var t = $t.now(); Qe._startIndex < Qe._loaders.length;) {
                    if (Qe._loaders[Qe._startIndex].endLoad(), Qe._startIndex++, $t.now() - t > Qe.maxTimeOut) return console.warn("loader callback cost a long time:" + ($t.now() - t) + " url=" + Qe._loaders[Qe._startIndex - 1].url),
                        void i.systemTimer.frameOnce(1, null, Qe.checkNext);
                }
                Qe._loaders.length = 0, Qe._startIndex = 0, Qe._isWorking = !1;
            }
        }, {
            key: "clearRes",
            value: function clearRes(t) {
                t = E.formatURL(t);
                var e = Qe.getAtlas(t);
                if (e) {
                    for (var i = 0, s = e.length; i < s; i++) {
                        var r = e[i],
                            a = Qe.getRes(r);
                        delete Qe.textureMap[r], a && a.destroy();
                    }
                    e.length = 0, delete Qe.atlasMap[t];
                }
                var n = Qe.textureMap[t];
                n && (n.destroy(), delete Qe.textureMap[t]), Qe.loadedMap[t] && delete Qe.loadedMap[t];
            }
        }, {
            key: "clearTextureRes",
            value: function clearTextureRes(t) {
                t = E.formatURL(t);
                var e = Qe.getAtlas(t);
                if (e && e.length > 0) e.forEach(function(t) {
                    var e = Qe.getRes(t);
                    e instanceof Kt && e.disposeBitmap();
                });
                else {
                    var i = Qe.getRes(t);
                    i instanceof Kt && i.disposeBitmap();
                }
            }
        }, {
            key: "getRes",
            value: function getRes(t) {
                var e = Qe.textureMap[E.formatURL(t)];
                return e || Qe.loadedMap[E.formatURL(t)];
            }
        }, {
            key: "getAtlas",
            value: function getAtlas(t) {
                return Qe.atlasMap[E.formatURL(t)];
            }
        }, {
            key: "cacheRes",
            value: function cacheRes(t, e) {
                t = E.formatURL(t), null != Qe.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : e instanceof Kt ? (Qe.loadedMap[t] = e.bitmap,
                    Qe.textureMap[t] = e) : Qe.loadedMap[t] = e;
            }
        }, {
            key: "cacheTexture",
            value: function cacheTexture(t, e) {
                t = E.formatURL(t), null != Qe.textureMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : Qe.textureMap[t] = e;
            }
        }, {
            key: "setGroup",
            value: function setGroup(t, e) {
                Qe.groupMap[e] || (Qe.groupMap[e] = []), Qe.groupMap[e].push(t);
            }
        }, {
            key: "clearResByGroup",
            value: function clearResByGroup(t) {
                if (Qe.groupMap[t]) {
                    var e, i = Qe.groupMap[t],
                        s = i.length;
                    for (e = 0; e < s; e++) {
                        Qe.clearRes(i[e]);
                    }
                    i.length = 0;
                }
            }
        }]);
        return Qe;
    }(x);
    Qe.TEXT = "text", Qe.JSON = "json", Qe.PREFAB = "prefab", Qe.XML = "xml", Qe.BUFFER = "arraybuffer",
        Qe.IMAGE = "image", Qe.SOUND = "sound", Qe.ATLAS = "atlas", Qe.FONT = "font", Qe.TTF = "ttf",
        Qe.PLF = "plf", Qe.PLFB = "plfb", Qe.HIERARCHY = "HIERARCHY", Qe.MESH = "MESH",
        Qe.MATERIAL = "MATERIAL", Qe.TEXTURE2D = "TEXTURE2D", Qe.TEXTURECUBE = "TEXTURECUBE",
        Qe.ANIMATIONCLIP = "ANIMATIONCLIP", Qe.AVATAR = "AVATAR", Qe.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA",
        Qe.TERRAINRES = "TERRAIN", Qe.typeMap = {
            ttf: "ttf",
            png: "image",
            jpg: "image",
            jpeg: "image",
            ktx: "image",
            pvr: "image",
            txt: "text",
            json: "json",
            prefab: "prefab",
            xml: "xml",
            als: "atlas",
            atlas: "atlas",
            mp3: "sound",
            ogg: "sound",
            wav: "sound",
            part: "json",
            fnt: "font",
            plf: "plf",
            plfb: "plfb",
            scene: "json",
            ani: "json",
            sk: "arraybuffer"
        }, Qe.parserMap = {}, Qe.maxTimeOut = 100, Qe.groupMap = {}, Qe.loadedMap = {},
        Qe.atlasMap = {}, Qe.textureMap = {}, Qe.preLoadedMap = {}, Qe._imgCache = {}, Qe._loaders = [],
        Qe._isWorking = !1, Qe._startIndex = 0;
    var Ze = /* */ function() {
        function Ze() {
            _classCallCheck(this, Ze);
        }
        _createClass(Ze, null, [{
            key: "enable",
            value: function enable(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                i.loader.load(t, T.create(null, Ze._onInfoLoaded, [e]), null, Qe.JSON);
            }
        }, {
            key: "_onInfoLoaded",
            value: function _onInfoLoaded(t, e) {
                var i, s, r, a, n;
                for (i in e) {
                    for (s = (r = e[i])[0], n = (r = r[1]).length, a = 0; a < n; a++) {
                        Ze._fileLoadDic[s + r[a]] = i;
                    }
                }
                t && t.run();
            }
        }, {
            key: "getFileLoadPath",
            value: function getFileLoadPath(t) {
                return Ze._fileLoadDic[t] || t;
            }
        }]);
        return Ze;
    }();
    Ze._fileLoadDic = {};
    var $e = /* */ function(_x10) {
        _inherits($e, _x10);

        function $e() {
            var _this34;
            _classCallCheck(this, $e);
            _this34 = _possibleConstructorReturn(this, _getPrototypeOf($e).call(this)), _this34.retryNum = 1,
                _this34.retryDelay = 0, _this34.maxLoader = 5, _this34._loaders = [], _this34._loaderCount = 0,
                _this34._resInfos = [], _this34._infoPool = [], _this34._maxPriority = 5, _this34._failRes = {},
                _this34._statInfo = {
                    count: 1,
                    loaded: 1
                };
            for (var t = 0; t < _this34._maxPriority; t++) {
                _this34._resInfos[t] = [];
            }
            return _this34;
        }
        _createClass($e, [{
            key: "getProgress",
            value: function getProgress() {
                return this._statInfo.loaded / this._statInfo.count;
            }
        }, {
            key: "resetProgress",
            value: function resetProgress() {
                this._statInfo.count = this._statInfo.loaded = 1;
            }
        }, {
            key: "create",
            value: function create(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                this._create(t, !0, e, i, s, r, a, n, h);
            }
        }, {
            key: "_create",
            value: function _create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !0;
                if (t instanceof Array) {
                    var l = !0,
                        _ = t,
                        c = _.length,
                        u = 0;
                    if (s) var d = T.create(s.caller, s ? s.method : null, s.args, !1);
                    for (var p = 0; p < c; p++) {
                        var f = _[p];
                        "string" == typeof f && (f = _[p] = {
                            url: f
                        }), f.progress = 0;
                    }
                    for (p = 0; p < c; p++) {
                        f = _[p];
                        var g = s ? T.create(null, function(t, e) {
                                t.progress = e;
                                for (var i = 0, s = 0; s < c; s++) {
                                    i += _[s].progress;
                                }
                                var r = i / c;
                                d.runWith(r);
                            }, [f], !1) : null,
                            m = s || i ? T.create(null, function(t) {
                                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                                u++, t.progress = 1, e || (l = !1), u === c && i && i.runWith(l);
                            }, [f]) : null;
                        this._createOne(f.url, e, m, g, f.type || r, f.constructParams || a, f.propertyParams || n, f.priority || h, o);
                    }
                } else this._createOne(t, e, i, s, r, a, n, h, o);
            }
        }, {
            key: "_createOne",
            value: function _createOne(t, e) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !0;
                var _ = this.getRes(t);
                if (_) !e && _ instanceof C && _._addReference(), r && r.runWith(1), s && s.runWith(_);
                else {
                    var c = K.getFileExtension(t);
                    if (a || (a = $e.createMap[c] ? $e.createMap[c][0] : null), !a) return void this.load(t, s, r, a, o, l);
                    if (!Qe.parserMap[a]) return void this.load(t, s, r, a, o, l);
                    this._createLoad(t, T.create(null, function(r) {
                        r && (!e && r instanceof C && r._addReference(), r._setCreateURL(t)), s && s.runWith(r),
                            i.loader.event(t);
                    }), r, a, n, h, o, l, !0);
                }
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
                var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : i.WorkerLoader.enable;
                if (t instanceof Array) return this._loadAssets(t, e, s, r, a, n, h);
                var _;
                if (_ = r === Qe.IMAGE ? Qe.textureMap[E.formatURL(t)] : Qe.loadedMap[E.formatURL(t)],
                    o || null == _) {
                    var c;
                    c = t, (t = Ze.getFileLoadPath(t)) != c && "nativeimage" !== r ? r = Qe.ATLAS : c = null;
                    var u = $e._resMap[t];
                    u ? (e && (c ? e && u._createListener(zt.COMPLETE, this, this._resInfoLoaded, [c, e], !1, !1) : e && u._createListener(zt.COMPLETE, e.caller, e.method, e.args, !1, !1)),
                        s && u._createListener(zt.PROGRESS, s.caller, s.method, s.args, !1, !1)) : ((u = this._infoPool.length ? this._infoPool.pop() : new Je()).url = t,
                        u.type = r, u.cache = n, u.group = h, u.ignoreCache = o, u.useWorkerLoader = l,
                        u.originalUrl = c, e && u.on(zt.COMPLETE, e.caller, e.method, e.args), s && u.on(zt.PROGRESS, s.caller, s.method, s.args),
                        $e._resMap[t] = u, a = a < this._maxPriority ? a : this._maxPriority - 1, this._resInfos[a].push(u),
                        this._statInfo.count++, this.event(zt.PROGRESS, this.getProgress()), this._next());
                } else i.systemTimer.frameOnce(1, this, function() {
                    s && s.runWith(1), e && e.runWith(_ instanceof Array ? [_] : _), this._loaderCount || this.event(zt.COMPLETE);
                });
                return this;
            }
        }, {
            key: "_resInfoLoaded",
            value: function _resInfoLoaded(t, e) {
                e.runWith(Qe.getRes(t));
            }
        }, {
            key: "_createLoad",
            value: function _createLoad(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
                if (t instanceof Array) return this._loadAssets(t, e, s, r, h, o);
                var _ = Qe.getRes(t);
                if (null != _) i.systemTimer.frameOnce(1, this, function() {
                    s && s.runWith(1), e && e.runWith(_), this._loaderCount || this.event(zt.COMPLETE);
                });
                else {
                    var c = $e._resMap[t];
                    c ? (e && c._createListener(zt.COMPLETE, e.caller, e.method, e.args, !1, !1), s && c._createListener(zt.PROGRESS, s.caller, s.method, s.args, !1, !1)) : ((c = this._infoPool.length ? this._infoPool.pop() : new Je()).url = t,
                        c.type = r, c.cache = !1, c.ignoreCache = l, c.originalUrl = null, c.group = null,
                        c.createCache = o, c.createConstructParams = a, c.createPropertyParams = n, e && c.on(zt.COMPLETE, e.caller, e.method, e.args),
                        s && c.on(zt.PROGRESS, s.caller, s.method, s.args), $e._resMap[t] = c, h = h < this._maxPriority ? h : this._maxPriority - 1,
                        this._resInfos[h].push(c), this._statInfo.count++, this.event(zt.PROGRESS, this.getProgress()),
                        this._next());
                }
                return this;
            }
        }, {
            key: "_next",
            value: function _next() {
                if (!(this._loaderCount >= this.maxLoader)) {
                    for (var t = 0; t < this._maxPriority; t++) {
                        for (var e = this._resInfos[t]; e.length > 0;) {
                            var i = e.shift();
                            if (i) return this._doLoad(i);
                        }
                    }
                    this._loaderCount || this.event(zt.COMPLETE);
                }
            }
        }, {
            key: "_doLoad",
            value: function _doLoad(t) {
                this._loaderCount++;
                var e = this._loaders.length ? this._loaders.pop() : new Qe();
                e.on(zt.COMPLETE, null, onLoaded), e.on(zt.PROGRESS, null, function(e) {
                    t.event(zt.PROGRESS, e);
                }), e.on(zt.ERROR, null, function(t) {
                    onLoaded(null);
                });
                var i = this;

                function onLoaded() {
                    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    e.offAll(), e._data = null, e._customParse = !1, i._loaders.push(e), i._endLoad(t, s instanceof Array ? [s] : s),
                        i._loaderCount--, i._next();
                }
                e._constructParams = t.createConstructParams, e._propertyParams = t.createPropertyParams,
                    e._createCache = t.createCache, e.load(t.url, t.type, t.cache, t.group, t.ignoreCache, t.useWorkerLoader);
            }
        }, {
            key: "_endLoad",
            value: function _endLoad(t, e) {
                var s = t.url;
                if (null == e) {
                    var r = this._failRes[s] || 0;
                    if (r < this.retryNum) return console.warn("[warn]Retry to load:", s), this._failRes[s] = r + 1,
                        void i.systemTimer.once(this.retryDelay, this, this._addReTry, [t], !1);
                    Qe.clearRes(s), console.warn("[error]Failed to load:", s), this.event(zt.ERROR, s);
                }
                this._failRes[s] && (this._failRes[s] = 0), delete $e._resMap[s], t.originalUrl && (e = Qe.getRes(t.originalUrl)),
                    t.event(zt.COMPLETE, e), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++,
                    this.event(zt.PROGRESS, this.getProgress());
            }
        }, {
            key: "_addReTry",
            value: function _addReTry(t) {
                this._resInfos[this._maxPriority - 1].push(t), this._next();
            }
        }, {
            key: "clearRes",
            value: function clearRes(t) {
                Qe.clearRes(t);
            }
        }, {
            key: "clearTextureRes",
            value: function clearTextureRes(t) {
                Qe.clearTextureRes(t);
            }
        }, {
            key: "getRes",
            value: function getRes(t) {
                return Qe.getRes(t);
            }
        }, {
            key: "cacheRes",
            value: function cacheRes(t, e) {
                Qe.cacheRes(t, e);
            }
        }, {
            key: "setGroup",
            value: function setGroup(t, e) {
                Qe.setGroup(t, e);
            }
        }, {
            key: "clearResByGroup",
            value: function clearResByGroup(t) {
                Qe.clearResByGroup(t);
            }
        }, {
            key: "clearUnLoaded",
            value: function clearUnLoaded() {
                for (var t = 0; t < this._maxPriority; t++) {
                    for (var e = this._resInfos[t], i = e.length - 1; i > -1; i--) {
                        var s = e[i];
                        s && (s.offAll(), this._infoPool.push(s));
                    }
                    e.length = 0;
                }
                this._loaderCount = 0, $e._resMap = {};
            }
        }, {
            key: "cancelLoadByUrls",
            value: function cancelLoadByUrls(t) {
                if (t)
                    for (var e = 0, i = t.length; e < i; e++) {
                        this.cancelLoadByUrl(t[e]);
                    }
            }
        }, {
            key: "cancelLoadByUrl",
            value: function cancelLoadByUrl(t) {
                for (var e = 0; e < this._maxPriority; e++) {
                    for (var i = this._resInfos[e], s = i.length - 1; s > -1; s--) {
                        var r = i[s];
                        r && r.url === t && (i[s] = null, r.offAll(), this._infoPool.push(r));
                    }
                }
                $e._resMap[t] && delete $e._resMap[t];
            }
        }, {
            key: "_loadAssets",
            value: function _loadAssets(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                for (var h = t.length, o = 0, l = 0, _ = [], c = !0, u = 0; u < h; u++) {
                    var _h2 = void 0,
                        _o2 = t[u];
                    (_h2 = "string" == typeof _o2 ? {
                        url: _o2,
                        type: s,
                        size: 1,
                        priority: r
                    } : _o2).size || (_h2.size = 1), _h2.progress = 0, l += _h2.size, _.push(_h2);
                    var d = i ? T.create(null, loadProgress, [_h2], !1) : null,
                        p = e || i ? T.create(null, loadComplete, [_h2]) : null;
                    this.load(_h2.url, p, d, _h2.type, _h2.priority || 1, a, _h2.group || n, !1, _h2.useWorkerLoader);
                }

                function loadComplete(t) {
                    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    o++, t.progress = 1, i || (c = !1), o === h && e && e.runWith(c);
                }

                function loadProgress(t, e) {
                    if (null != i) {
                        t.progress = e;
                        for (var s = 0, r = 0; r < _.length; r++) {
                            var a = _[r];
                            if (a) {
                                var _t4 = null == a.progress ? 0 : a.progress;
                                s += null == a.size ? 0 : a.size * _t4;
                            }
                        }
                        var n = s / l;
                        i.runWith(n);
                    }
                }
                return this;
            }
        }, {
            key: "decodeBitmaps",
            value: function decodeBitmaps(t) {
                var e, s, r = t.length;
                for (s = i.Render._context, e = 0; e < r; e++) {
                    var a, n;
                    if (a = Qe.getAtlas(t[e])) this._decodeTexture(a[0], s);
                    else(n = this.getRes(t[e])) && n instanceof Kt && this._decodeTexture(n, s);
                }
            }
        }, {
            key: "_decodeTexture",
            value: function _decodeTexture(t, e) {
                var i = t.bitmap;
                if (t && i) {
                    var s = i.source || i.image;
                    if (s && s instanceof HTMLImageElement) {
                        e.drawImage(s, 0, 0, 1, 1);
                        e.getImageData(0, 0, 1, 1);
                    }
                }
            }
        }], [{
            key: "cacheRes",
            value: function cacheRes(t, e) {
                Qe.cacheRes(t, e);
            }
        }]);
        return $e;
    }(x);
    $e._resMap = {}, $e.createMap = {
        atlas: [null, Qe.ATLAS]
    };
    var Je = /* */ function(_x11) {
        _inherits(Je, _x11);

        function Je() {
            _classCallCheck(this, Je);
            return _possibleConstructorReturn(this, _getPrototypeOf(Je).apply(this, arguments));
        }
        return Je;
    }(x);
    var ti = /* */ function() {
        function ti() {
            _classCallCheck(this, ti);
        }
        _createClass(ti, null, [{
            key: "__init__",
            value: function __init__() {
                return ti._baseClass || (ti._baseClass = ei, ei.init()), ti.items = ti._baseClass.items,
                    ti.support = ti._baseClass.support, ti.support;
            }
        }, {
            key: "setItem",
            value: function setItem(t, e) {
                ti._baseClass.setItem(t, e);
            }
        }, {
            key: "getItem",
            value: function getItem(t) {
                return ti._baseClass.getItem(t);
            }
        }, {
            key: "setJSON",
            value: function setJSON(t, e) {
                ti._baseClass.setJSON(t, e);
            }
        }, {
            key: "getJSON",
            value: function getJSON(t) {
                return ti._baseClass.getJSON(t);
            }
        }, {
            key: "removeItem",
            value: function removeItem(t) {
                ti._baseClass.removeItem(t);
            }
        }, {
            key: "clear",
            value: function clear() {
                ti._baseClass.clear();
            }
        }]);
        return ti;
    }();
    ti.support = !1;
    var ei = /* */ function() {
        function ei() {
            _classCallCheck(this, ei);
        }
        _createClass(ei, null, [{
            key: "init",
            value: function init() {
                try {
                    ei.support = !0, ei.items = window.localStorage, ei.setItem("laya", "1"), ei.removeItem("laya");
                } catch (t) {
                    ei.support = !1;
                }
                ei.support || console.log("LocalStorage is not supprot or browser is private mode.");
            }
        }, {
            key: "setItem",
            value: function setItem(t, e) {
                try {
                    ei.support && ei.items.setItem(t, e);
                } catch (t) {
                    console.warn("set localStorage failed", t);
                }
            }
        }, {
            key: "getItem",
            value: function getItem(t) {
                return ei.support ? ei.items.getItem(t) : null;
            }
        }, {
            key: "setJSON",
            value: function setJSON(t, e) {
                try {
                    ei.support && ei.items.setItem(t, JSON.stringify(e));
                } catch (t) {
                    console.warn("set localStorage failed", t);
                }
            }
        }, {
            key: "getJSON",
            value: function getJSON(t) {
                try {
                    return JSON.parse(ei.support ? ei.items.getItem(t) : null);
                } catch (e) {
                    return ei.items.getItem(t);
                }
            }
        }, {
            key: "removeItem",
            value: function removeItem(t) {
                ei.support && ei.items.removeItem(t);
            }
        }, {
            key: "clear",
            value: function clear() {
                ei.support && ei.items.clear();
            }
        }]);
        return ei;
    }();
    ei.support = !1;
    var ii = /* */ function() {
        function ii() {
            _classCallCheck(this, ii);
        }
        _createClass(ii, [{
            key: "load",
            value: function load(t) {
                this._url = t;
                var e = t.split(".ttf")[0].split("/");
                this.fontName = e[e.length - 1], i.Render.isConchApp ? this._loadConch() : window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
            }
        }, {
            key: "_loadConch",
            value: function _loadConch() {
                this._http = new qe(), this._http.on(zt.ERROR, this, this._onErr), this._http.on(zt.COMPLETE, this, this._onHttpLoaded),
                    this._http.send(this._url, null, "get", Qe.BUFFER);
            }
        }, {
            key: "_onHttpLoaded",
            value: function _onHttpLoaded() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(),
                    this._complete();
            }
        }, {
            key: "_clearHttp",
            value: function _clearHttp() {
                this._http && (this._http.off(zt.ERROR, this, this._onErr), this._http.off(zt.COMPLETE, this, this._onHttpLoaded),
                    this._http = null);
            }
        }, {
            key: "_onErr",
            value: function _onErr() {
                this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
            }
        }, {
            key: "_complete",
            value: function _complete() {
                i.systemTimer.clear(this, this._complete), i.systemTimer.clear(this, this._checkComplete),
                    this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div),
                        this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
            }
        }, {
            key: "_checkComplete",
            value: function _checkComplete() {
                i.Browser.measureText(ii._testString, this._fontTxt).width != this._txtWidth && this._complete();
            }
        }, {
            key: "_loadWithFontFace",
            value: function _loadWithFontFace() {
                var t = new window.FontFace(this.fontName, "url('" + this._url + "')");
                document.fonts.add(t);
                var e = this;
                t.loaded.then(function() {
                    e._complete();
                }), t.load();
            }
        }, {
            key: "_createDiv",
            value: function _createDiv() {
                this._div = $t.createElement("div"), this._div.innerHTML = "laya";
                var t = this._div.style;
                t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px",
                    document.body.appendChild(this._div);
            }
        }, {
            key: "_loadWithCSS",
            value: function _loadWithCSS() {
                var t = $t.createElement("style");
                t.type = "text/css", document.body.appendChild(t), t.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}",
                    this._fontTxt = "40px " + this.fontName, this._txtWidth = $t.measureText(ii._testString, this._fontTxt).width;
                var e = this;
                t.onload = function() {
                    i.systemTimer.once(1e4, e, this._complete);
                }, i.systemTimer.loop(20, this, this._checkComplete), this._createDiv();
            }
        }]);
        return ii;
    }();
    ii._testString = "LayaTTFFont";
    var si = /* */ function() {
        function si() {
            _classCallCheck(this, si);
        }
        _createClass(si, null, [{
            key: "linearNone",
            value: function linearNone(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "linearIn",
            value: function linearIn(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "linearInOut",
            value: function linearInOut(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "linearOut",
            value: function linearOut(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "bounceIn",
            value: function bounceIn(t, e, i, s) {
                return i - si.bounceOut(s - t, 0, i, s) + e;
            }
        }, {
            key: "bounceInOut",
            value: function bounceInOut(t, e, i, s) {
                return t < .5 * s ? .5 * si.bounceIn(2 * t, 0, i, s) + e : .5 * si.bounceOut(2 * t - s, 0, i, s) + .5 * i + e;
            }
        }, {
            key: "bounceOut",
            value: function bounceOut(t, e, i, s) {
                return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
            }
        }, {
            key: "backIn",
            value: function backIn(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
                return i * (t /= s) * t * ((r + 1) * t - r) + e;
            }
        }, {
            key: "backInOut",
            value: function backInOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
                return (t /= .5 * s) < 1 ? .5 * i * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e;
            }
        }, {
            key: "backOut",
            value: function backOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
                return i * ((t = t / s - 1) * t * ((r + 1) * t + r) + 1) + e;
            }
        }, {
            key: "elasticIn",
            value: function elasticIn(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n;
                return 0 == t ? e : 1 == (t /= s) ? e + i : (a || (a = .3 * s), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i,
                    n = a / 4) : n = a / si.PI2 * Math.asin(i / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - n) * si.PI2 / a) + e);
            }
        }, {
            key: "elasticInOut",
            value: function elasticInOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n;
                return 0 == t ? e : 2 == (t /= .5 * s) ? e + i : (a || (a = s * (.3 * 1.5)), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i,
                    n = a / 4) : n = a / si.PI2 * Math.asin(i / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - n) * si.PI2 / a) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - n) * si.PI2 / a) * .5 + i + e);
            }
        }, {
            key: "elasticOut",
            value: function elasticOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n;
                return 0 == t ? e : 1 == (t /= s) ? e + i : (a || (a = .3 * s), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i,
                    n = a / 4) : n = a / si.PI2 * Math.asin(i / r), r * Math.pow(2, -10 * t) * Math.sin((t * s - n) * si.PI2 / a) + i + e);
            }
        }, {
            key: "strongIn",
            value: function strongIn(t, e, i, s) {
                return i * (t /= s) * t * t * t * t + e;
            }
        }, {
            key: "strongInOut",
            value: function strongInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
            }
        }, {
            key: "strongOut",
            value: function strongOut(t, e, i, s) {
                return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
            }
        }, {
            key: "sineInOut",
            value: function sineInOut(t, e, i, s) {
                return .5 * -i * (Math.cos(Math.PI * t / s) - 1) + e;
            }
        }, {
            key: "sineIn",
            value: function sineIn(t, e, i, s) {
                return -i * Math.cos(t / s * si.HALF_PI) + i + e;
            }
        }, {
            key: "sineOut",
            value: function sineOut(t, e, i, s) {
                return i * Math.sin(t / s * si.HALF_PI) + e;
            }
        }, {
            key: "quintIn",
            value: function quintIn(t, e, i, s) {
                return i * (t /= s) * t * t * t * t + e;
            }
        }, {
            key: "quintInOut",
            value: function quintInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
            }
        }, {
            key: "quintOut",
            value: function quintOut(t, e, i, s) {
                return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
            }
        }, {
            key: "quartIn",
            value: function quartIn(t, e, i, s) {
                return i * (t /= s) * t * t * t + e;
            }
        }, {
            key: "quartInOut",
            value: function quartInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
            }
        }, {
            key: "quartOut",
            value: function quartOut(t, e, i, s) {
                return -i * ((t = t / s - 1) * t * t * t - 1) + e;
            }
        }, {
            key: "cubicIn",
            value: function cubicIn(t, e, i, s) {
                return i * (t /= s) * t * t + e;
            }
        }, {
            key: "cubicInOut",
            value: function cubicInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
            }
        }, {
            key: "cubicOut",
            value: function cubicOut(t, e, i, s) {
                return i * ((t = t / s - 1) * t * t + 1) + e;
            }
        }, {
            key: "quadIn",
            value: function quadIn(t, e, i, s) {
                return i * (t /= s) * t + e;
            }
        }, {
            key: "quadInOut",
            value: function quadInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
            }
        }, {
            key: "quadOut",
            value: function quadOut(t, e, i, s) {
                return -i * (t /= s) * (t - 2) + e;
            }
        }, {
            key: "expoIn",
            value: function expoIn(t, e, i, s) {
                return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i;
            }
        }, {
            key: "expoInOut",
            value: function expoInOut(t, e, i, s) {
                return 0 == t ? e : t == s ? e + i : (t /= .5 * s) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e;
            }
        }, {
            key: "expoOut",
            value: function expoOut(t, e, i, s) {
                return t == s ? e + i : i * (1 - Math.pow(2, -10 * t / s)) + e;
            }
        }, {
            key: "circIn",
            value: function circIn(t, e, i, s) {
                return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e;
            }
        }, {
            key: "circInOut",
            value: function circInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            }
        }, {
            key: "circOut",
            value: function circOut(t, e, i, s) {
                return i * Math.sqrt(1 - (t = t / s - 1) * t) + e;
            }
        }]);
        return si;
    }();
    si.HALF_PI = .5 * Math.PI, si.PI2 = 2 * Math.PI;
    var ri = /* */ function() {
        function ri() {
            _classCallCheck(this, ri);
            this.gid = 0, this.repeat = 1, this._count = 0;
        }
        _createClass(ri, [{
            key: "to",
            value: function to(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                return this._create(t, e, i, s, r, a, n, !0, !1, !0);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                return this._create(t, e, i, s, r, a, n, !1, !1, !0);
            }
        }, {
            key: "_create",
            value: function _create(t, e, s, r, a, n, h, o, l, _) {
                if (!t) throw new Error("Tween:target is null");
                this._target = t, this._duration = s, this._ease = r || e.ease || ri.easeNone, this._complete = a || e.complete,
                    this._delay = n, this._props = [], this._usedTimer = 0, this._startTimer = $t.now(),
                    this._usedPool = l, this._delayParam = null, this.update = e.update;
                var c = t.$_GID || (t.$_GID = K.getGID());
                return ri.tweenMap[c] ? (h && ri.clearTween(t), ri.tweenMap[c].push(this)) : ri.tweenMap[c] = [this],
                    _ ? n <= 0 ? this.firstStart(t, e, o) : (this._delayParam = [t, e, o], i.timer.once(n, this, this.firstStart, this._delayParam)) : this._initProps(t, e, o),
                    this;
            }
        }, {
            key: "firstStart",
            value: function firstStart(t, e, i) {
                this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i),
                    this._beginLoop());
            }
        }, {
            key: "_initProps",
            value: function _initProps(t, e, i) {
                for (var s in e) {
                    if ("number" == typeof t[s]) {
                        var r = i ? t[s] : e[s],
                            a = i ? e[s] : t[s];
                        this._props.push([s, r, a - r]), i || (t[s] = r);
                    }
                }
            }
        }, {
            key: "_beginLoop",
            value: function _beginLoop() {
                i.timer.frameLoop(1, this, this._doEase);
            }
        }, {
            key: "_doEase",
            value: function _doEase() {
                this._updateEase($t.now());
            }
        }, {
            key: "_updateEase",
            value: function _updateEase(t) {
                var e = this._target;
                if (e) {
                    if (e.destroyed) return ri.clearTween(e);
                    var i = this._usedTimer = t - this._startTimer - this._delay;
                    if (!(i < 0)) {
                        if (i >= this._duration) return this.complete();
                        for (var s = i > 0 ? this._ease(i, 0, 1, this._duration) : 0, r = this._props, a = 0, n = r.length; a < n; a++) {
                            var h = r[a];
                            e[h[0]] = h[1] + s * h[2];
                        }
                        this.update && this.update.run();
                    }
                }
            }
        }, {
            key: "complete",
            value: function complete() {
                if (this._target) {
                    i.timer.runTimer(this, this.firstStart);
                    for (var t = this._target, e = this._props, s = this._complete, r = 0, a = e.length; r < a; r++) {
                        var n = e[r];
                        t[n[0]] = n[1] + n[2];
                    }
                    this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(),
                        s && s.run()) : this.restart();
                }
            }
        }, {
            key: "pause",
            value: function pause() {
                var t;
                i.timer.clear(this, this._beginLoop), i.timer.clear(this, this._doEase), i.timer.clear(this, this.firstStart),
                    (t = $t.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t);
            }
        }, {
            key: "setStartTime",
            value: function setStartTime(t) {
                this._startTimer = t;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._target && (this._remove(), this._clear());
            }
        }, {
            key: "_clear",
            value: function _clear() {
                this.pause(), i.timer.clear(this, this.firstStart), this._complete = null, this._target = null,
                    this._ease = null, this._props = null, this._delayParam = null, this.repeat = 1,
                    this._usedPool && (this.update = null, s.recover("tween", this));
            }
        }, {
            key: "recover",
            value: function recover() {
                this._usedPool = !0, this._clear();
            }
        }, {
            key: "_remove",
            value: function _remove() {
                var t = ri.tweenMap[this._target.$_GID];
                if (t)
                    for (var e = 0, i = t.length; e < i; e++) {
                        if (t[e] === this) {
                            t.splice(e, 1);
                            break;
                        }
                    }
            }
        }, {
            key: "restart",
            value: function restart() {
                if (this.pause(), this._usedTimer = 0, this._startTimer = $t.now(), this._delayParam) i.timer.once(this._delay, this, this.firstStart, this._delayParam);
                else {
                    for (var t = this._props, e = 0, s = t.length; e < s; e++) {
                        var r = t[e];
                        this._target[r[0]] = r[1];
                    }
                    i.timer.once(this._delay, this, this._beginLoop);
                }
            }
        }, {
            key: "resume",
            value: function resume() {
                this._usedTimer >= this._duration || (this._startTimer = $t.now() - this._usedTimer - this._delay,
                    this._delayParam ? this._usedTimer < 0 ? i.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
            }
        }, {
            key: "progress",
            set: function set(t) {
                var e = t * this._duration;
                this._startTimer = $t.now() - this._delay - e;
            }
        }], [{
            key: "to",
            value: function to(t, e, i) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                return s.getItemByClass("tween", ri)._create(t, e, i, r, a, n, h, !0, o, !0);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                return s.getItemByClass("tween", ri)._create(t, e, i, r, a, n, h, !1, o, !0);
            }
        }, {
            key: "clearAll",
            value: function clearAll(t) {
                if (t && t.$_GID) {
                    var e = ri.tweenMap[t.$_GID];
                    if (e) {
                        for (var i = 0, s = e.length; i < s; i++) {
                            e[i]._clear();
                        }
                        e.length = 0;
                    }
                }
            }
        }, {
            key: "clear",
            value: function clear(t) {
                t.clear();
            }
        }, {
            key: "clearTween",
            value: function clearTween(t) {
                ri.clearAll(t);
            }
        }, {
            key: "easeNone",
            value: function easeNone(t, e, i, s) {
                return i * t / s + e;
            }
        }]);
        return ri;
    }();
    ri.tweenMap = [];
    var ai = /* */ function() {
        function ai() {
            _classCallCheck(this, ai);
            this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
        }
        _createClass(ai, [{
            key: "start",
            value: function start(t, e, s, r, a, n, h) {
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : .92;
                this.clearTimer(), this.target = t, this.area = e, this.hasInertia = s, this.elasticDistance = e ? r : 0,
                    this.elasticBackTime = a, this.data = n, this._disableMouseEvent = h, this.ratio = o,
                    this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1,
                    this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, i.stage.on(zt.MOUSE_UP, this, this.onStageMouseUp),
                    i.stage.on(zt.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.frameLoop(1, this, this.loop);
            }
        }, {
            key: "clearTimer",
            value: function clearTimer() {
                i.systemTimer.clear(this, this.loop), i.systemTimer.clear(this, this.tweenMove),
                    this._tween && (this._tween.recover(), this._tween = null);
            }
        }, {
            key: "stop",
            value: function stop() {
                this._dragging && (Be.instance.disableMouseEvent = !1, i.stage.off(zt.MOUSE_UP, this, this.onStageMouseUp),
                    i.stage.off(zt.MOUSE_OUT, this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(),
                    this.clear());
            }
        }, {
            key: "loop",
            value: function loop() {
                var t = this._parent.getMousePoint(),
                    e = t.x,
                    s = t.y,
                    r = e - this._lastX,
                    a = s - this._lastY;
                if (this._clickOnly) {
                    if (!(Math.abs(r * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(a * i.stage._canvasTransform.getScaleY()) > 1)) return;
                    this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0,
                        this.target.event(zt.DRAG_START, this.data), Be.instance.disableMouseEvent = this._disableMouseEvent;
                } else this._offsets.push(r, a);
                0 === r && 0 === a || (this._lastX = e, this._lastY = s, this.target.x += r * this._elasticRateX,
                    this.target.y += a * this._elasticRateY, this.area && this.checkArea(), this.target.event(zt.DRAG_MOVE, this.data));
            }
        }, {
            key: "checkArea",
            value: function checkArea() {
                if (this.elasticDistance <= 0) this.backToArea();
                else {
                    if (this.target._x < this.area.x) var t = this.area.x - this.target._x;
                    else t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                    if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y) var e = this.area.y - this.target.y;
                    else e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                    this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
                }
            }
        }, {
            key: "backToArea",
            value: function backToArea() {
                this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width),
                    this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height);
            }
        }, {
            key: "onStageMouseUp",
            value: function onStageMouseUp(t) {
                if (Be.instance.disableMouseEvent = !1, i.stage.off(zt.MOUSE_UP, this, this.onStageMouseUp),
                    i.stage.off(zt.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.clear(this, this.loop), !this._clickOnly && this.target)
                    if (this.hasInertia) {
                        this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY),
                            this._offsetX = this._offsetY = 0;
                        for (var e = this._offsets.length, s = Math.min(e, 6), r = this._offsets.length - s, a = e - 1; a > r; a--) {
                            this._offsetY += this._offsets[a--], this._offsetX += this._offsets[a];
                        }
                        this._offsetX = this._offsetX / s * 2, this._offsetY = this._offsetY / s * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset),
                            Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset),
                            i.systemTimer.frameLoop(1, this, this.tweenMove);
                    } else this.elasticDistance > 0 ? this.checkElastic() : this.clear();
            }
        }, {
            key: "checkElastic",
            value: function checkElastic() {
                var t = NaN,
                    e = NaN;
                if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width),
                    this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height),
                    isNaN(t) && isNaN(e)) this.clear();
                else {
                    var i = {};
                    isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = ri.to(this.target, i, this.elasticBackTime, si.sineOut, T.create(this, this.clear), 0, !1, !1);
                }
            }
        }, {
            key: "tweenMove",
            value: function tweenMove() {
                this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY,
                    this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(),
                    this.target.event(zt.DRAG_MOVE, this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.systemTimer.clear(this, this.tweenMove),
                        this.elasticDistance > 0 ? this.checkElastic() : this.clear());
            }
        }, {
            key: "clear",
            value: function clear() {
                if (this.target) {
                    this.clearTimer();
                    var t = this.target;
                    this.target = null, this._parent = null, t.event(zt.DRAG_END, this.data);
                }
            }
        }]);
        return ai;
    }();
    var ni = /* */ function() {
        function ni() {
            _classCallCheck(this, ni);
            this._id = K.getGID(), this._resetComp();
        }
        _createClass(ni, [{
            key: "_isScript",
            value: function _isScript() {
                return !1;
            }
        }, {
            key: "_resetComp",
            value: function _resetComp() {
                this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null;
            }
        }, {
            key: "_getIndexInList",
            value: function _getIndexInList() {
                return this._indexInList;
            }
        }, {
            key: "_setIndexInList",
            value: function _setIndexInList(t) {
                this._indexInList = t;
            }
        }, {
            key: "_onAdded",
            value: function _onAdded() {}
        }, {
            key: "_onAwake",
            value: function _onAwake() {}
        }, {
            key: "_onEnable",
            value: function _onEnable() {}
        }, {
            key: "_onDisable",
            value: function _onDisable() {}
        }, {
            key: "_onDestroy",
            value: function _onDestroy() {}
        }, {
            key: "onReset",
            value: function onReset() {}
        }, {
            key: "_parse",
            value: function _parse(t) {}
        }, {
            key: "_cloneTo",
            value: function _cloneTo(t) {}
        }, {
            key: "_setActive",
            value: function _setActive(t) {
                t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.owner && this.owner._destroyComponent(this);
            }
        }, {
            key: "_destroy",
            value: function _destroy() {
                this.owner.activeInHierarchy && this._enabled && this._setActive(!1), this._onDestroy(),
                    this._destroyed = !0, this.onReset !== ni.prototype.onReset ? (this.onReset(), this._resetComp(),
                        s.recoverByClass(this)) : this._resetComp();
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "enabled",
            get: function get() {
                return this._enabled;
            },
            set: function set(t) {
                this._enabled != t && (this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable()));
            }
        }, {
            key: "isSingleton",
            get: function get() {
                return !0;
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        }]);
        return ni;
    }();
    var hi = /* */ function(_Me3) {
        _inherits(hi, _Me3);

        function hi() {
            var _this35;
            _classCallCheck(this, hi);
            _this35 = _possibleConstructorReturn(this, _getPrototypeOf(hi).call(this)), _this35.wrapMode = 0,
                _this35._interval = e.animationInterval, _this35._isReverse = !1, _this35._frameRateChanged = !1,
                _this35._setBitUp(Te.DISPLAY);
            return _this35;
        }
        _createClass(hi, [{
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                this._isPlaying = !0, this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t,
                    this.loop = e, this._isReverse = this.wrapMode === hi.WRAP_REVERSE, 0 == this.index && this._isReverse && (this.index = this.count - 1),
                    this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
            }
        }, {
            key: "_getFrameByLabel",
            value: function _getFrameByLabel(t) {
                for (var e = 0; e < this._count; e++) {
                    var i = this._labels[e];
                    if (i && i.indexOf(t) > -1) return e;
                }
                return 0;
            }
        }, {
            key: "_frameLoop",
            value: function _frameLoop() {
                if (this._isReverse) {
                    if (this._index--, this._index < 0) {
                        if (!this.loop) return this._index = 0, this.stop(), void this.event(zt.COMPLETE);
                        this.wrapMode == hi.WRAP_PINGPONG ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1,
                            this.event(zt.COMPLETE);
                    }
                } else if (this._index++, this._index >= this._count) {
                    if (!this.loop) return this._index--, this.stop(), void this.event(zt.COMPLETE);
                    this.wrapMode == hi.WRAP_PINGPONG ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0,
                        this._isReverse = !0) : this._index = 0, this.event(zt.COMPLETE);
                }
                this.index = this._index;
            }
        }, {
            key: "_setControlNode",
            value: function _setControlNode(t) {
                this._controlNode && (this._controlNode.off(zt.DISPLAY, this, this._resumePlay),
                        this._controlNode.off(zt.UNDISPLAY, this, this._resumePlay)), this._controlNode = t,
                    t && t != this && (t.on(zt.DISPLAY, this, this._resumePlay), t.on(zt.UNDISPLAY, this, this._resumePlay));
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                _get(_getPrototypeOf(hi.prototype), "_setDisplay", this).call(this, t), this._resumePlay();
            }
        }, {
            key: "_resumePlay",
            value: function _resumePlay() {
                this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
            }
        }, {
            key: "stop",
            value: function stop() {
                this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
            }
        }, {
            key: "addLabel",
            value: function addLabel(t, e) {
                this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []),
                    this._labels[e].push(t);
            }
        }, {
            key: "removeLabel",
            value: function removeLabel(t) {
                if (t) {
                    if (this._labels)
                        for (var e in this._labels) {
                            this._removeLabelFromList(this._labels[e], t);
                        }
                } else this._labels = null;
            }
        }, {
            key: "_removeLabelFromList",
            value: function _removeLabelFromList(t, e) {
                if (t)
                    for (var i = t.length - 1; i >= 0; i--) {
                        t[i] == e && t.splice(i, 1);
                    }
            }
        }, {
            key: "gotoAndStop",
            value: function gotoAndStop(t) {
                this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {}
        }, {
            key: "clear",
            value: function clear() {
                return this.stop(), this._labels = null, this;
            }
        }, {
            key: "interval",
            get: function get() {
                return this._interval;
            },
            set: function set(t) {
                this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
            }
        }, {
            key: "isPlaying",
            get: function get() {
                return this._isPlaying;
            }
        }, {
            key: "index",
            get: function get() {
                return this._index;
            },
            set: function set(t) {
                if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t])
                    for (var e = this._labels[t], i = 0, s = e.length; i < s; i++) {
                        this.event(zt.LABEL, e[i]);
                    }
            }
        }, {
            key: "count",
            get: function get() {
                return this._count;
            }
        }]);
        return hi;
    }(Me);
    hi.WRAP_POSITIVE = 0, hi.WRAP_REVERSE = 1, hi.WRAP_PINGPONG = 2, be.regClass("laya.display.AnimationBase", hi),
        be.regClass("Laya.AnimationBase", hi);
    var oi = /* */ function() {
        function oi() {
            _classCallCheck(this, oi);
        }
        _createClass(oi, null, [{
            key: "subtractVector3",
            value: function subtractVector3(t, e, i) {
                i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
            }
        }, {
            key: "lerp",
            value: function lerp(t, e, i) {
                return t * (1 - i) + e * i;
            }
        }, {
            key: "scaleVector3",
            value: function scaleVector3(t, e, i) {
                i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
            }
        }, {
            key: "lerpVector3",
            value: function lerpVector3(t, e, i, s) {
                var r = t[0],
                    a = t[1],
                    n = t[2];
                s[0] = r + i * (e[0] - r), s[1] = a + i * (e[1] - a), s[2] = n + i * (e[2] - n);
            }
        }, {
            key: "lerpVector4",
            value: function lerpVector4(t, e, i, s) {
                var r = t[0],
                    a = t[1],
                    n = t[2],
                    h = t[3];
                s[0] = r + i * (e[0] - r), s[1] = a + i * (e[1] - a), s[2] = n + i * (e[2] - n),
                    s[3] = h + i * (e[3] - h);
            }
        }, {
            key: "slerpQuaternionArray",
            value: function slerpQuaternionArray(t, e, i, s, r, a, n) {
                var h, o, l, _, c, u = t[e + 0],
                    d = t[e + 1],
                    p = t[e + 2],
                    f = t[e + 3],
                    g = i[s + 0],
                    m = i[s + 1],
                    v = i[s + 2],
                    T = i[s + 3];
                return (o = u * g + d * m + p * v + f * T) < 0 && (o = -o, g = -g, m = -m, v = -v,
                        T = -T), 1 - o > 1e-6 ? (h = Math.acos(o), l = Math.sin(h), _ = Math.sin((1 - r) * h) / l,
                        c = Math.sin(r * h) / l) : (_ = 1 - r, c = r), a[n + 0] = _ * u + c * g, a[n + 1] = _ * d + c * m,
                    a[n + 2] = _ * p + c * v, a[n + 3] = _ * f + c * T, a;
            }
        }, {
            key: "getRotation",
            value: function getRotation(t, e, i, s) {
                return Math.atan2(s - e, i - t) / Math.PI * 180;
            }
        }, {
            key: "sortBigFirst",
            value: function sortBigFirst(t, e) {
                return t == e ? 0 : e > t ? 1 : -1;
            }
        }, {
            key: "sortSmallFirst",
            value: function sortSmallFirst(t, e) {
                return t == e ? 0 : e > t ? -1 : 1;
            }
        }, {
            key: "sortNumBigFirst",
            value: function sortNumBigFirst(t, e) {
                return parseFloat(e) - parseFloat(t);
            }
        }, {
            key: "sortNumSmallFirst",
            value: function sortNumSmallFirst(t, e) {
                return parseFloat(t) - parseFloat(e);
            }
        }, {
            key: "sortByKey",
            value: function sortByKey(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var s;
                return s = e ? i ? oi.sortNumBigFirst : oi.sortBigFirst : i ? oi.sortNumSmallFirst : oi.sortSmallFirst,
                    function(e, i) {
                        return s(e[t], i[t]);
                    };
            }
        }]);
        return oi;
    }();
    var li = /* */ function(_hi) {
        _inherits(li, _hi);
        _createClass(li, null, [{
            key: "_sortIndexFun",
            value: function _sortIndexFun(t, e) {
                return t.index - e.index;
            }
        }]);

        function li() {
            var _this36;
            _classCallCheck(this, li);
            _this36 = _possibleConstructorReturn(this, _getPrototypeOf(li).call(this)), void 0 === li._sortIndexFun && (li._sortIndexFun = oi.sortByKey("index", !1, !0));
            return _this36;
        }
        _createClass(li, [{
            key: "_setUp",
            value: function _setUp(t, e) {
                this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate,
                    e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [],
                        this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count,
                        e.animationNewFrames = this._usedFrames);
            }
        }, {
            key: "clear",
            value: function clear() {
                return _get(_getPrototypeOf(li.prototype), "clear", this).call(this), this._targetDic = null,
                    this._animationData = null, this;
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {
                if (this._animationData) {
                    t < 0 && (t = 0), t > this._count && (t = this._count);
                    var e, i = this._animationData.nodes,
                        s = i.length;
                    for (e = 0; e < s; e++) {
                        this._displayNodeToFrame(i[e], t);
                    }
                }
            }
        }, {
            key: "_displayNodeToFrame",
            value: function _displayNodeToFrame(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                i || (i = this._targetDic);
                var s = i[t.target];
                if (s) {
                    var r, a, n, h, o = t.frames,
                        l = t.keys,
                        _ = l.length;
                    for (h = 0; h < _; h++) {
                        n = (a = o[r = l[h]]).length > e ? a[e] : a[a.length - 1], s[r] = n;
                    }
                    var c, u = t.funkeys;
                    if (0 != (_ = u.length))
                        for (h = 0; h < _; h++) {
                            void 0 !== (c = o[r = u[h]])[e] && s[r] && s[r].apply(s, c[e]);
                        }
                }
            }
        }, {
            key: "_calculateDatas",
            value: function _calculateDatas() {
                if (this._animationData) {
                    var t, e, i = this._animationData.nodes,
                        s = i.length;
                    for (this._count = 0, t = 0; t < s; t++) {
                        e = i[t], this._calculateKeyFrames(e);
                    }
                    this._count += 1;
                }
            }
        }, {
            key: "_calculateKeyFrames",
            value: function _calculateKeyFrames(t) {
                var e, i, s = t.keyframes,
                    r = t.target;
                for (e in t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [],
                    t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], t.initValues || (t.initValues = {}),
                    s) {
                    var a = -1 != e.indexOf("()");
                    if (i = s[e], a && (e = e.substr(0, e.length - 2)), t.frames[e] || (t.frames[e] = []),
                        a) {
                        t.funkeys.push(e);
                        for (var n = t.frames[e], h = 0; h < i.length; h++) {
                            var o = i[h];
                            n[o.index] = o.value, o.index > this._count && (this._count = o.index);
                        }
                    } else this._targetDic && this._targetDic[r] && (t.initValues[e] = this._targetDic[r][e]),
                        i.sort(li._sortIndexFun), t.keys.push(e), this._calculateNodePropFrames(i, t.frames[e], e, r);
                }
            }
        }, {
            key: "resetNodes",
            value: function resetNodes() {
                if (this._targetDic && this._animationData) {
                    var t, e, i, s = this._animationData.nodes,
                        r = s.length;
                    for (t = 0; t < r; t++) {
                        if (i = (e = s[t]).initValues) {
                            var a, n = this._targetDic[e.target];
                            if (n)
                                for (a in i) {
                                    n[a] = i[a];
                                }
                        }
                    }
                }
            }
        }, {
            key: "_calculateNodePropFrames",
            value: function _calculateNodePropFrames(t, e, i, s) {
                var r, a = t.length - 1;
                for (e.length = t[a].index + 1, r = 0; r < a; r++) {
                    this._dealKeyFrame(t[r]), this._calculateFrameValues(t[r], t[r + 1], e);
                }
                0 == a && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)),
                    this._dealKeyFrame(t[r]);
            }
        }, {
            key: "_dealKeyFrame",
            value: function _dealKeyFrame(t) {
                t.label && "" != t.label && this.addLabel(t.label, t.index);
            }
        }, {
            key: "_calculateFrameValues",
            value: function _calculateFrameValues(t, e, i) {
                var s, r, a = t.index,
                    n = e.index,
                    h = t.value,
                    o = e.value - t.value,
                    l = n - a,
                    _ = this._usedFrames;
                if (n > this._count && (this._count = n), t.tween)
                    for (null == (r = si[t.tweenMethod]) && (r = si.linearNone),
                        s = a; s < n; s++) {
                        i[s] = r(s - a, h, o, l), _ && (_[s] = !0);
                    } else
                        for (s = a; s < n; s++) {
                            i[s] = h;
                        }
                _ && (_[t.index] = !0, _[e.index] = !0), i[e.index] = e.value;
            }
        }]);
        return li;
    }(hi);
    be.regClass("laya.display.FrameAnimation", li), be.regClass("Laya.FrameAnimation", li);
    var _i = /* */ function() {
        function _i() {
            _classCallCheck(this, _i);
            this._obj = {}, _i._maps.push(this);
        }
        _createClass(_i, [{
            key: "set",
            value: function set(t, e) {
                null != t && (_i.supportWeakMap || ("string" == typeof t || "number" == typeof t ? this._obj[t] = e : (t.$_GID || (t.$_GID = K.getGID()),
                    this._obj[t.$_GID] = e)));
            }
        }, {
            key: "get",
            value: function get(t) {
                return null == t ? null : _i.supportWeakMap ? void 0 : "string" == typeof t || "number" == typeof t ? this._obj[t] : this._obj[t.$_GID];
            }
        }, {
            key: "del",
            value: function del(t) {
                null != t && (_i.supportWeakMap || ("string" == typeof t || "number" == typeof t ? delete this._obj[t] : delete this._obj[this._obj.$_GID]));
            }
        }, {
            key: "has",
            value: function has(t) {
                return null != t && (_i.supportWeakMap ? void 0 : "string" == typeof t || "number" == typeof t ? null != this._obj[t] : null != this._obj[this._obj.$_GID]);
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                _i.I = new _i(), _i.supportWeakMap || i.systemTimer.loop(_i.delInterval, null, _i.clearCache);
            }
        }, {
            key: "clearCache",
            value: function clearCache() {
                for (var t = 0, e = _i._maps.length; t < e; t++) {
                    _i._maps[t]._obj = {};
                }
            }
        }]);
        return _i;
    }();
    _i.supportWeakMap = !1, _i.delInterval = 6e5, _i._maps = [];
    var ci = /* */ function() {
        function ci() {
            _classCallCheck(this, ci);
        }
        _createClass(ci, null, [{
            key: "__init",
            value: function __init() {
                ci._funMap = new _i();
            }
        }, {
            key: "getBindFun",
            value: function getBindFun(t) {
                var e = ci._funMap.get(t);
                if (null == e) {
                    var i = '"' + t + '"',
                        s = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    e = window.Laya._runScript(s), ci._funMap.set(t, e);
                }
                return e;
            }
        }, {
            key: "createByData",
            value: function createByData(t, e) {
                var i = di.create();
                if ((t = ci.createComp(e, t, t, null, i))._setBit(Te.NOT_READY, !0), "_idMap" in t && (t._idMap = i._idMap),
                    e.animations) {
                    var s, r, a, n = [],
                        h = e.animations,
                        o = h.length;
                    for (s = 0; s < o; s++) {
                        switch (r = new li(), a = h[s], r._setUp(i._idMap, a), t[a.name] = r, r._setControlNode(t),
                            a.action) {
                            case 1:
                                r.play(0, !1);
                                break;

                            case 2:
                                r.play(0, !0);
                        }
                        n.push(r);
                    }
                    t._aniList = n;
                }
                return "Scene" === t._$componentType && t._width > 0 && null == e.props.hitTestPrior && !t.mouseThrough && (t.hitTestPrior = !0),
                    i.beginLoad(t), t;
            }
        }, {
            key: "createInitTool",
            value: function createInitTool() {
                return di.create();
            }
        }, {
            key: "createComp",
            value: function createComp(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                if ("Scene3D" == t.type || "Sprite3D" == t.type) {
                    var n = [],
                        h = i.Laya.Utils3D._createSceneByJsonForMaker(t, n, a);
                    return "Sprite3D" == t.type ? i.Laya.StaticBatchManager.combine(h, n) : i.Laya.StaticBatchManager.combine(null, n),
                        h;
                }
                if (!(e = e || ci.getCompInstance(t))) return t.props && t.props.runtime ? console.warn("runtime not found:" + t.props.runtime) : console.warn("can not create:" + t.type),
                    null;
                var o = t.child;
                if (o)
                    for (var l = "List" == e._$componentType, _ = 0, c = o.length; _ < c; _++) {
                        var u = o[_];
                        if ("itemRender" in e && ("render" == u.props.name || "render" === u.props.renderType)) e.itemRender = u;
                        else if ("Graphic" == u.type) i.ClassUtils._addGraphicsToSprite(u, e);
                        else if (i.ClassUtils._isDrawType(u.type)) i.ClassUtils._addGraphicToSprite(u, e, !0);
                        else {
                            if (l) {
                                var d = [],
                                    p = ci.createComp(u, null, s, d, a);
                                d.length && (p._$bindData = d);
                            } else p = ci.createComp(u, null, s, r, a);
                            "Script" == u.type ? p instanceof ni ? e._addComponentInstance(p) : "owner" in p ? p.owner = e : "target" in p && (p.target = e) : "mask" == u.props.renderType || "mask" == u.props.name ? e.mask = p : p instanceof Se && e.addChild(p);
                        }
                    }
                var f = t.props;
                for (var g in f) {
                    var m = f[g];
                    "string" == typeof m && (m.indexOf("@node:") >= 0 || m.indexOf("@Prefab:") >= 0) ? a && a.addNodeRef(e, g, m) : ci.setCompValue(e, g, m, s, r);
                }
                return e._afterInited && e._afterInited(), t.compId && a && a._idMap && (a._idMap[t.compId] = e),
                    e;
            }
        }, {
            key: "setCompValue",
            value: function setCompValue(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                if ("string" == typeof s && s.indexOf("${") > -1) {
                    if (ci._sheet || (ci._sheet = i.ClassUtils.getClass("laya.data.Table")), !ci._sheet) return void console.warn("Can not find class Sheet");
                    if (a) a.push(t, e, s);
                    else if (r) {
                        -1 == s.indexOf("].") && (s = s.replace(".", "[0]."));
                        var n, h, o = new ui(t, e, s);
                        o.exe(r);
                        for (var l = s.replace(/\[.*?\]\./g, "."); null != (n = ci._parseWatchData.exec(l));) {
                            for (var _ = n[1]; null != (h = ci._parseKeyWord.exec(_));) {
                                var c = h[0],
                                    u = r._watchMap[c] || (r._watchMap[c] = []);
                                u.push(o), ci._sheet.I.notifer.on(c, r, r.changeData, [c]);
                            }
                            (u = r._watchMap[_] || (r._watchMap[_] = [])).push(o), ci._sheet.I.notifer.on(_, r, r.changeData, [_]);
                        }
                    }
                } else "var" === e && r ? r[s] = t : t[e] = "true" === s || "false" !== s && s;
            }
        }, {
            key: "getCompInstance",
            value: function getCompInstance(t) {
                if ("UIView" == t.type && t.props && t.props.pageData) return ci.createByData(null, t.props.pageData);
                var e = t.props && t.props.runtime || t.type,
                    r = i.ClassUtils.getClass(e);
                if (!r) throw "Can not find class " + e;
                if ("Script" === t.type && r.prototype._doAwake) {
                    var a = s.createByClass(r);
                    return a._destroyed = !1, a;
                }
                return t.props && "renderType" in t.props && "instance" == t.props.renderType ? (r.instance || (r.instance = new r()),
                    r.instance) : new r();
            }
        }]);
        return ci;
    }();
    ci._parseWatchData = /\${(.*?)}/g, ci._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
    var ui = /* */ function() {
        function ui(t, e, i) {
            _classCallCheck(this, ui);
            this.comp = t, this.prop = e, this.value = i;
        }
        _createClass(ui, [{
            key: "exe",
            value: function exe(t) {
                var e = ci.getBindFun(this.value);
                this.comp[this.prop] = e.call(this, t);
            }
        }]);
        return ui;
    }();
    var di = /* */ function() {
        function di() {
            _classCallCheck(this, di);
        }
        _createClass(di, [{
            key: "reset",
            value: function reset() {
                this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null,
                    this._scene = null;
            }
        }, {
            key: "recover",
            value: function recover() {
                this.reset(), s.recover("InitTool", this);
            }
        }, {
            key: "addLoadRes",
            value: function addLoadRes(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._loadList || (this._loadList = []), e ? this._loadList.push({
                    url: t,
                    type: e
                }) : this._loadList.push(t);
            }
        }, {
            key: "addNodeRef",
            value: function addNodeRef(t, e, i) {
                this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([t, e, i]),
                    i.indexOf("@Prefab:") >= 0 && this.addLoadRes(i.replace("@Prefab:", ""), Qe.PREFAB);
            }
        }, {
            key: "setNodeRef",
            value: function setNodeRef() {
                if (this._nodeRefList)
                    if (this._idMap) {
                        var t, e, i;
                        for (e = this._nodeRefList.length, t = 0; t < e; t++) {
                            (i = this._nodeRefList[t])[0][i[1]] = this.getReferData(i[2]);
                        }
                        this._nodeRefList = null;
                    } else this._nodeRefList = null;
            }
        }, {
            key: "getReferData",
            value: function getReferData(t) {
                if (t.indexOf("@Prefab:") >= 0) return Qe.getRes(t.replace("@Prefab:", ""));
                if (t.indexOf("@arr:") >= 0) {
                    var e, i, s, r;
                    for (s = (e = (t = t.replace("@arr:", "")).split(",")).length, i = 0; i < s; i++) {
                        r = e[i], e[i] = r ? this._idMap[r.replace("@node:", "")] : null;
                    }
                    return e;
                }
                return this._idMap[t.replace("@node:", "")];
            }
        }, {
            key: "addInitItem",
            value: function addInitItem(t) {
                this._initList || (this._initList = []), this._initList.push(t);
            }
        }, {
            key: "doInits",
            value: function doInits() {
                this._initList && (this._initList = null);
            }
        }, {
            key: "finish",
            value: function finish() {
                this.setNodeRef(), this.doInits(), this._scene._setBit(Te.NOT_READY, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(),
                    this._scene.event("onViewCreated"), this.recover();
            }
        }, {
            key: "beginLoad",
            value: function beginLoad(t) {
                this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : i.loader.load(this._loadList, T.create(this, this.finish));
            }
        }], [{
            key: "create",
            value: function create() {
                var t = s.getItemByClass("InitTool", di);
                return t._idMap = [], t;
            }
        }]);
        return di;
    }();
    var pi = /* */ function() {
        function pi() {
            _classCallCheck(this, pi);
        }
        _createClass(pi, [{
            key: "show",
            value: function show() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            }
        }, {
            key: "enable",
            value: function enable() {}
        }, {
            key: "hide",
            value: function hide() {}
        }, {
            key: "set_onclick",
            value: function set_onclick(t) {}
        }, {
            key: "isCanvasRender",
            value: function isCanvasRender() {
                return !0;
            }
        }, {
            key: "renderNotCanvas",
            value: function renderNotCanvas(t, e, i) {}
        }]);
        return pi;
    }();
    var fi = /* */ function(_pi) {
        _inherits(fi, _pi);

        function fi() {
            var _this37;
            _classCallCheck(this, fi);
            _this37 = _possibleConstructorReturn(this, _getPrototypeOf(fi).apply(this, arguments)),
                _this37._show = !1, _this37._useCanvas = !1, _this37._height = 100, _this37._view = [];
            return _this37;
        }
        _createClass(fi, [{
            key: "show",
            value: function show() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                $t.onMiniGame || i.Render.isConchApp || $t.onBDMiniGame || $t.onKGMiniGame || $t.onQGMiniGame || $t.onQQMiniGame || $t.onAlipayMiniGame || (this._useCanvas = !0),
                    this._show = !0, G._fpsData.length = 60, this._view[0] = {
                        title: "FPS(WebGL)",
                        value: "_fpsStr",
                        color: "yellow",
                        units: "int"
                    }, this._view[1] = {
                        title: "Sprite",
                        value: "_spriteStr",
                        color: "white",
                        units: "int"
                    }, this._view[2] = {
                        title: "RenderBatches",
                        value: "renderBatches",
                        color: "white",
                        units: "int"
                    }, this._view[3] = {
                        title: "SavedRenderBatches",
                        value: "savedRenderBatches",
                        color: "white",
                        units: "int"
                    }, this._view[4] = {
                        title: "CPUMemory",
                        value: "cpuMemory",
                        color: "yellow",
                        units: "M"
                    }, this._view[5] = {
                        title: "GPUMemory",
                        value: "gpuMemory",
                        color: "yellow",
                        units: "M"
                    }, this._view[6] = {
                        title: "Shader",
                        value: "shaderCall",
                        color: "white",
                        units: "int"
                    }, this._view[7] = {
                        title: "Canvas",
                        value: "_canvasStr",
                        color: "white",
                        units: "int"
                    }, he.is3DMode && (this._view[0].title = "FPS(3D)", this._view[8] = {
                        title: "TriFaces",
                        value: "trianglesFaces",
                        color: "white",
                        units: "int"
                    }, this._view[9] = {
                        title: "FrustumCulling",
                        value: "frustumCulling",
                        color: "white",
                        units: "int"
                    }, this._view[10] = {
                        title: "OctreeNodeCulling",
                        value: "octreeNodeCulling",
                        color: "white",
                        units: "int"
                    }), this._useCanvas ? this.createUIPre(t, e) : this.createUI(t, e), this.enable();
            }
        }, {
            key: "createUIPre",
            value: function createUIPre(t, e) {
                var i = $t.pixelRatio;
                this._width = 180 * i, this._vx = 120 * i, this._height = i * (12 * this._view.length + 3 * i) + 4,
                    fi._fontSize = 12 * i;
                for (var s = 0; s < this._view.length; s++) {
                    this._view[s].x = 4, this._view[s].y = s * fi._fontSize + 2 * i;
                }
                this._canvas || (this._canvas = new Ee(!0), this._canvas.size(this._width, this._height),
                        this._ctx = this._canvas.getContext("2d"), this._ctx.textBaseline = "top", this._ctx.font = fi._fontSize + "px Arial",
                        this._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + t + "px;top:" + e + "px;width:" + this._width / i + "px;height:" + this._height / i + "px;"),
                    $t.onKGMiniGame || $t.container.appendChild(this._canvas.source), this._first = !0,
                    this.loop(), this._first = !1;
            }
        }, {
            key: "createUI",
            value: function createUI(t, e) {
                var i = this._sp,
                    s = $t.pixelRatio;
                i || (i = new Me(), this._leftText = new Pe(), this._leftText.pos(5, 5), this._leftText.color = "#ffffff",
                    i.addChild(this._leftText), this._txt = new Pe(), this._txt.pos(130 * s, 5), this._txt.color = "#ffffff",
                    i.addChild(this._txt), this._sp = i), i.pos(t, e);
                for (var r = "", a = 0; a < this._view.length; a++) {
                    r += this._view[a].title + "\n";
                }
                this._leftText.text = r;
                var n = 138 * s,
                    h = s * (12 * this._view.length + 3 * s) + 4;
                this._txt.fontSize = fi._fontSize * s, this._leftText.fontSize = fi._fontSize * s,
                    i.size(n, h), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, n + 110, h + 30, "#999999"),
                    i.graphics.alpha(2), this.loop();
            }
        }, {
            key: "enable",
            value: function enable() {
                i.systemTimer.frameLoop(1, this, this.loop);
            }
        }, {
            key: "hide",
            value: function hide() {
                this._show = !1, i.systemTimer.clear(this, this.loop), this._canvas && $t.removeElement(this._canvas.source);
            }
        }, {
            key: "set_onclick",
            value: function set_onclick(t) {
                this._sp && this._sp.on("click", this._sp, t), this._canvas && (this._canvas.source.onclick = t,
                    this._canvas.source.style.pointerEvents = "");
            }
        }, {
            key: "loop",
            value: function loop() {
                G._count++;
                var t = $t.now();
                if (!(t - G._timer < 1e3)) {
                    var e = G._count;
                    if (G.FPS = Math.round(1e3 * e / (t - G._timer)), this._show) {
                        G.trianglesFaces = Math.round(G.trianglesFaces / e), this._useCanvas ? G.renderBatches = Math.round(G.renderBatches / e) : G.renderBatches = Math.round(G.renderBatches / e) - 1,
                            G.savedRenderBatches = Math.round(G.savedRenderBatches / e), G.shaderCall = Math.round(G.shaderCall / e),
                            G.spriteRenderUseCacheCount = Math.round(G.spriteRenderUseCacheCount / e), G.canvasNormal = Math.round(G.canvasNormal / e),
                            G.canvasBitmap = Math.round(G.canvasBitmap / e), G.canvasReCache = Math.ceil(G.canvasReCache / e),
                            G.frustumCulling = Math.round(G.frustumCulling / e), G.octreeNodeCulling = Math.round(G.octreeNodeCulling / e);
                        var i = G.FPS > 0 ? Math.floor(1e3 / G.FPS).toString() : " ";
                        G._fpsStr = G.FPS + (G.renderSlow ? " slow" : "") + " " + i, G._spriteStr = G.spriteCount + (G.spriteRenderUseCacheCount ? "/" + G.spriteRenderUseCacheCount : ""),
                            G._canvasStr = G.canvasReCache + "/" + G.canvasNormal + "/" + G.canvasBitmap, G.cpuMemory = C.cpuMemory,
                            G.gpuMemory = C.gpuMemory, this._useCanvas ? this.renderInfoPre() : this.renderInfo(),
                            G.clear();
                    }
                    G._count = 0, G._timer = t;
                }
            }
        }, {
            key: "renderInfoPre",
            value: function renderInfoPre() {
                var t, e, i = 0;
                if (this._canvas) {
                    var s = this._ctx;
                    for (s.clearRect(this._first ? 0 : this._vx, 0, this._width, this._height), i = 0; i < this._view.length; i++) {
                        t = this._view[i], this._first && (s.fillStyle = "white", s.fillText(t.title, t.x, t.y)),
                            s.fillStyle = t.color, e = G[t.value], "M" == t.units && (e = Math.floor(e / 1048576 * 100) / 100 + " M"),
                            s.fillText(e + "", t.x + this._vx, t.y);
                    }
                }
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                for (var t = "", e = 0; e < this._view.length; e++) {
                    var i = this._view[e],
                        s = G[i.value];
                    "M" == i.units && (s = Math.floor(s / 1048576 * 100) / 100 + " M"), "K" == i.units && (s = Math.floor(s / 1024 * 100) / 100 + " K"),
                        t += s + "\n";
                }
                this._txt.text = t;
            }
        }, {
            key: "isCanvasRender",
            value: function isCanvasRender() {
                return this._useCanvas;
            }
        }, {
            key: "renderNotCanvas",
            value: function renderNotCanvas(t, e, i) {
                this._show && this._sp && this._sp.render(t, 0, 0);
            }
        }]);
        return fi;
    }(pi);
    fi._fontSize = 12;
    var gi = /* */ function() {
        function gi() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            _classCallCheck(this, gi);
            this.scale = 1, this.currTimer = Date.now(), this.currFrame = 0, this._delta = 0,
                this._lastTimer = Date.now(), this._map = [], this._handlers = [], this._temp = [],
                this._count = 0, t && gi.gSysTimer && gi.gSysTimer.frameLoop(1, this, this._update);
        }
        _createClass(gi, [{
            key: "_update",
            value: function _update() {
                if (this.scale <= 0) return this._lastTimer = Date.now(), void(this._delta = 0);
                var t = this.currFrame = this.currFrame + this.scale,
                    e = Date.now(),
                    i = e - this._lastTimer > 3e4;
                this._delta = (e - this._lastTimer) * this.scale;
                var s = this.currTimer = this.currTimer + this._delta;
                this._lastTimer = e;
                var r = this._handlers;
                this._count = 0;
                for (var a = 0, n = r.length; a < n; a++) {
                    var h = r[a];
                    if (null !== h.method) {
                        var o = h.userFrame ? t : s;
                        if (o >= h.exeTime)
                            if (h.repeat) {
                                if (!h.jumpFrame || i) h.exeTime += h.delay, h.run(!1), o > h.exeTime && (h.exeTime += Math.ceil((o - h.exeTime) / h.delay) * h.delay);
                                else
                                    for (; o >= h.exeTime;) {
                                        h.exeTime += h.delay, h.run(!1);
                                    }
                            } else h.run(!0);
                    } else this._count++;
                }
                (this._count > 30 || t % 200 == 0) && this._clearHandlers();
            }
        }, {
            key: "_clearHandlers",
            value: function _clearHandlers() {
                for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                    var s = t[e];
                    null !== s.method ? this._temp.push(s) : this._recoverHandler(s);
                }
                this._handlers = this._temp, t.length = 0, this._temp = t;
            }
        }, {
            key: "_recoverHandler",
            value: function _recoverHandler(t) {
                this._map[t.key] == t && (this._map[t.key] = null), t.clear(), gi._pool.push(t);
            }
        }, {
            key: "_create",
            value: function _create(t, e, i, s, r, a, n) {
                if (!i) return r.apply(s, a), null;
                if (n) {
                    var h = this._getHandler(s, r);
                    if (h) return h.repeat = e, h.userFrame = t, h.delay = i, h.caller = s, h.method = r,
                        h.args = a, h.exeTime = i + (t ? this.currFrame : this.currTimer + Date.now() - this._lastTimer),
                        h;
                }
                return (h = gi._pool.length > 0 ? gi._pool.pop() : new mi()).repeat = e, h.userFrame = t,
                    h.delay = i, h.caller = s, h.method = r, h.args = a, h.exeTime = i + (t ? this.currFrame : this.currTimer + Date.now() - this._lastTimer),
                    this._indexHandler(h), this._handlers.push(h), h;
            }
        }, {
            key: "_indexHandler",
            value: function _indexHandler(t) {
                var e = t.caller,
                    s = t.method,
                    r = e ? e.$_GID || (e.$_GID = i.Utils.getGID()) : 0,
                    a = s.$_TID || (s.$_TID = 1e5 * gi._mid++);
                t.key = r + a, this._map[t.key] = t;
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                this._create(!1, !1, t, e, i, s, r);
            }
        }, {
            key: "loop",
            value: function loop(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var n = this._create(!1, !0, t, e, i, s, r);
                n && (n.jumpFrame = a);
            }
        }, {
            key: "frameOnce",
            value: function frameOnce(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                this._create(!0, !1, t, e, i, s, r);
            }
        }, {
            key: "frameLoop",
            value: function frameLoop(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                this._create(!0, !0, t, e, i, s, r);
            }
        }, {
            key: "toString",
            value: function toString() {
                return " handlers:" + this._handlers.length + " pool:" + gi._pool.length;
            }
        }, {
            key: "clear",
            value: function clear(t, e) {
                var i = this._getHandler(t, e);
                i && (this._map[i.key] = null, i.key = 0, i.clear());
            }
        }, {
            key: "clearAll",
            value: function clearAll(t) {
                if (t)
                    for (var e = 0, i = this._handlers.length; e < i; e++) {
                        var s = this._handlers[e];
                        s.caller === t && (this._map[s.key] = null, s.key = 0, s.clear());
                    }
            }
        }, {
            key: "_getHandler",
            value: function _getHandler(t, e) {
                var s = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0,
                    r = e.$_TID || (e.$_TID = 1e5 * gi._mid++);
                return this._map[s + r];
            }
        }, {
            key: "callLater",
            value: function callLater(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                Fe.I.callLater(t, e, i);
            }
        }, {
            key: "runCallLater",
            value: function runCallLater(t, e) {
                Fe.I.runCallLater(t, e);
            }
        }, {
            key: "runTimer",
            value: function runTimer(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(!0));
            }
        }, {
            key: "pause",
            value: function pause() {
                this.scale = 0;
            }
        }, {
            key: "resume",
            value: function resume() {
                this.scale = 1;
            }
        }, {
            key: "delta",
            get: function get() {
                return this._delta;
            }
        }]);
        return gi;
    }();
    gi.gSysTimer = null, gi._pool = [], gi._mid = 1;
    var mi = /* */ function() {
        function mi() {
            _classCallCheck(this, mi);
        }
        _createClass(mi, [{
            key: "clear",
            value: function clear() {
                this.caller = null, this.method = null, this.args = null;
            }
        }, {
            key: "run",
            value: function run(t) {
                var e = this.caller;
                if (e && e.destroyed) return this.clear();
                var i = this.method,
                    s = this.args;
                t && this.clear(), null != i && (s ? i.apply(e, s) : i.call(e));
            }
        }]);
        return mi;
    }();
    var vi = /* */ function(_V) {
        _inherits(vi, _V);

        function vi(t) {
            var _this38;
            _classCallCheck(this, vi);
            _this38 = _possibleConstructorReturn(this, _getPrototypeOf(vi).call(this, U.SKINMESH, 0)),
                _this38.offsetX = 300, _this38.offsetY = 0;
            var e = v.mainContext,
                i = 8 * Nt.BYTES_PE;
            _this38.position = [2, e.FLOAT, !1, i, 0], _this38.texcoord = [2, e.FLOAT, !1, i, 2 * Nt.BYTES_PE],
                _this38.color = [4, e.FLOAT, !1, i, 4 * Nt.BYTES_PE];
            return _this38;
        }
        return vi;
    }(V);
    var Ti = /* */ function(_V2) {
        _inherits(Ti, _V2);

        function Ti(t) {
            var _this39;
            _classCallCheck(this, Ti);
            _this39 = _possibleConstructorReturn(this, _getPrototypeOf(Ti).call(this, U.PRIMITIVE, 0)),
                _this39._attribLocation = ["position", 0, "attribColor", 1];
            return _this39;
        }
        return Ti;
    }(V);
    var xi = /* */ function(_V3) {
        _inherits(xi, _V3);

        function xi() {
            var _this40;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            _classCallCheck(this, xi);
            _this40 = _possibleConstructorReturn(this, _getPrototypeOf(xi).call(this, U.TEXTURE2D, t)),
                _this40.strength = 0, _this40.blurInfo = null, _this40.colorMat = null, _this40.colorAlpha = null,
                _this40._attribLocation = ["posuv", 0, "attribColor", 1, "attribFlags", 2];
            return _this40;
        }
        _createClass(xi, [{
            key: "clear",
            value: function clear() {
                this.texture = null, this.shader = null, this.defines._value = this.subID;
            }
        }]);
        return xi;
    }(V);
    var yi = /* */ function() {
        function yi(t) {
            _classCallCheck(this, yi);
            this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = t;
            for (var e, s, r = 0; !((r = t.indexOf("#begin", r)) < 0);) {
                for (s = r + 5; !((s = t.indexOf("#end", s)) < 0) && "i" === t.charAt(s + 4);) {
                    s += 5;
                }
                if (s < 0) throw "add include err,no #end:" + t;
                e = t.indexOf("\n", r);
                var a = i.ShaderCompile.splitToWords(t.substr(r, e - r), null);
                "code" == a[1] ? this.codes[a[2]] = t.substr(e + 1, s - e - 1) : "function" == a[1] && (e = t.indexOf("function", r),
                        e += "function".length, this.funs[a[3]] = t.substr(e + 1, s - e - 1), this.funnames += a[3] + ";"),
                    r = s + 1;
            }
        }
        _createClass(yi, [{
            key: "getWith",
            value: function getWith() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = t ? this.codes[t] : this.script;
                if (!e) throw "get with error:" + t;
                return e;
            }
        }, {
            key: "getFunsScript",
            value: function getFunsScript(t) {
                var e = "";
                for (var i in this.funs) {
                    t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
                }
                return e;
            }
        }]);
        return yi;
    }();
    var Ei = /* */ function() {
        function Ei(t) {
            _classCallCheck(this, Ei);
            this.childs = [], this.text = "", this.useFuns = "", this.z = 0, this.includefiles = t;
        }
        _createClass(Ei, [{
            key: "setParent",
            value: function setParent(t) {
                t.childs.push(this), this.z = t.z + 1, this.parent = t;
            }
        }, {
            key: "setCondition",
            value: function setCondition(t, e) {
                t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                    return this[t];
                }, this.condition.__condition = t);
            }
        }, {
            key: "toscript",
            value: function toscript(t, e) {
                return this._toscript(t, e, ++Ei.__id);
            }
        }, {
            key: "_toscript",
            value: function _toscript(t, e, s) {
                if (this.childs.length < 1 && !this.text) return e;
                e.length;
                if (this.condition) {
                    var r = !!this.condition.call(t);
                    if (this.conditionType === i.ShaderCompile.IFDEF_ELSE && (r = !r), !r) return e;
                }
                if (this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(i, r, a) {
                        i._toscript(t, e, s);
                    }), this.includefiles.length > 0 && this.useFuns.length > 0)
                    for (var a, n = 0, h = this.includefiles.length; n < h; n++) {
                        this.includefiles[n].curUseID != s && (a = this.includefiles[n].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[n].curUseID = s,
                            e[0] = a + e[0]);
                    }
                return e;
            }
        }]);
        return Ei;
    }();
    Ei.__id = 1;
    var Ci = /* */ function() {
        function Ci(t, e, i) {
            _classCallCheck(this, Ci);
            this.defs = {};
            var s = this;

            function _compile(t) {
                t = t.replace(Ci._clearCR, "");
                var e = [],
                    i = new Ei(e);
                return s._compileToTree(i, t.split("\n"), 0, e, s.defs), i;
            }
            var r = Date.now();
            this._VS = _compile(t), this._PS = _compile(e), this._nameMap = i, Date.now() - r > 2 && console.log("ShaderCompile use time:" + (Date.now() - r) + "  size:" + t.length + "/" + e.length);
        }
        _createClass(Ci, [{
            key: "_compileToTree",
            value: function _compileToTree(t, e, i, s, r) {
                var a, n, h, o, l, _, c, u, d, p, f;
                for (d = i; d < e.length; d++) {
                    if (!((h = e[d]).length < 1) && 0 !== (_ = h.indexOf("//"))) {
                        if (_ >= 0 && (h = h.substr(0, _)), a = u || new Ei(s), u = null, a.text = h, a.noCompile = !0,
                            (_ = h.indexOf("#")) >= 0) {
                            for (o = "#", f = _ + 1, p = h.length; f < p; f++) {
                                var g = h.charAt(f);
                                if (" " === g || "\t" === g || "?" === g) break;
                                o += g;
                            }
                            switch (a.name = o, o) {
                                case "#ifdef":
                                case "#ifndef":
                                    if (a.src = h, a.noCompile = null != h.match(/[!&|()=<>]/), a.noCompile ? console.log("function():Boolean{return " + h.substr(_ + a.name.length) + "}") : (c = h.replace(/^\s*/, "").split(/\s+/),
                                            a.setCondition(c[1], "#ifdef" === o ? Ci.IFDEF_YES : Ci.IFDEF_ELSE), a.text = "//" + a.text),
                                        a.setParent(t), t = a, r)
                                        for (c = h.substr(f).split(Ci._splitToWordExps3), f = 0; f < c.length; f++) {
                                            (h = c[f]).length && (r[h] = !0);
                                        }
                                    continue;

                                case "#if":
                                    if (a.src = h, a.noCompile = !0, a.setParent(t), t = a, r)
                                        for (c = h.substr(f).split(Ci._splitToWordExps3),
                                            f = 0; f < c.length; f++) {
                                            (h = c[f]).length && "defined" != h && (r[h] = !0);
                                        }
                                    continue;

                                case "#else":
                                    a.src = h, n = (t = t.parent).childs[t.childs.length - 1], a.noCompile = n.noCompile,
                                        a.noCompile || (a.condition = n.condition, a.conditionType = n.conditionType == Ci.IFDEF_YES ? Ci.IFDEF_ELSE : Ci.IFDEF_YES,
                                            a.text = "//" + a.text + " " + n.text + " " + a.conditionType), a.setParent(t),
                                        t = a;
                                    continue;

                                case "#endif":
                                    n = (t = t.parent).childs[t.childs.length - 1], a.noCompile = n.noCompile, a.noCompile || (a.text = "//" + a.text),
                                        a.setParent(t);
                                    continue;

                                case "#include":
                                    c = Ci.splitToWords(h, null);
                                    var m = Ci.includes[c[1]];
                                    if (!m) throw "ShaderCompile error no this include file:" + c[1];
                                    if ((_ = c[0].indexOf("?")) < 0) {
                                        a.setParent(t), h = m.getWith("with" == c[2] ? c[3] : null), this._compileToTree(a, h.split("\n"), 0, s, r),
                                            a.text = "";
                                        continue;
                                    }
                                    a.setCondition(c[0].substr(_ + 1), Ci.IFDEF_YES), a.text = m.getWith("with" == c[2] ? c[3] : null);
                                    break;

                                case "#import":
                                    l = (c = Ci.splitToWords(h, null))[1], s.push({
                                        node: a,
                                        file: Ci.includes[l],
                                        ofs: a.text.length
                                    });
                                    continue;
                            }
                        } else {
                            if ((n = t.childs[t.childs.length - 1]) && !n.name) {
                                s.length > 0 && Ci.splitToWords(h, n), u = a, n.text += "\n" + h;
                                continue;
                            }
                            s.length > 0 && Ci.splitToWords(h, a);
                        }
                        a.setParent(t);
                    }
                }
            }
        }, {
            key: "createShader",
            value: function createShader(t, e, i, s) {
                var r = {},
                    a = "";
                if (t)
                    for (var n in t) {
                        a += "#define " + n + "\n", r[n] = !0;
                    }
                var h = this._VS.toscript(r, []),
                    o = this._PS.toscript(r, []);
                return (i || W.create)(a + h.join("\n"), a + o.join("\n"), e, this._nameMap, s);
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                var t = m.instance;
                Ci.shaderParamsMap = {
                    float: t.FLOAT,
                    int: t.INT,
                    bool: t.BOOL,
                    vec2: t.FLOAT_VEC2,
                    vec3: t.FLOAT_VEC3,
                    vec4: t.FLOAT_VEC4,
                    ivec2: t.INT_VEC2,
                    ivec3: t.INT_VEC3,
                    ivec4: t.INT_VEC4,
                    bvec2: t.BOOL_VEC2,
                    bvec3: t.BOOL_VEC3,
                    bvec4: t.BOOL_VEC4,
                    mat2: t.FLOAT_MAT2,
                    mat3: t.FLOAT_MAT3,
                    mat4: t.FLOAT_MAT4,
                    sampler2D: t.SAMPLER_2D,
                    samplerCube: t.SAMPLER_CUBE
                };
            }
        }, {
            key: "_parseOne",
            value: function _parseOne(t, e, i, s, r, a) {
                var n = {
                    type: Ci.shaderParamsMap[i[s + 1]],
                    name: i[s + 2],
                    size: isNaN(parseInt(i[s + 3])) ? 1 : parseInt(i[s + 3])
                };
                return a && ("attribute" == r ? t.push(n) : e.push(n)), ":" == i[s + 3] && (n.type = i[s + 4],
                    s += 2), s += 2;
            }
        }, {
            key: "addInclude",
            value: function addInclude(t, e) {
                if (!e || 0 === e.length) throw new Error("add shader include file err:" + t);
                if (Ci.includes[t]) throw new Error("add shader include file err, has add:" + t);
                Ci.includes[t] = new yi(e);
            }
        }, {
            key: "preGetParams",
            value: function preGetParams(t, e) {
                var i, s, r = [t, e],
                    a = {},
                    n = [],
                    h = [],
                    o = {},
                    l = [];
                a.attributes = n, a.uniforms = h, a.defines = o;
                for (var _ = 0; _ < 2; _++) {
                    r[_] = r[_].replace(Ci._removeAnnotation, "");
                    var c, u = r[_].match(Ci._reg);
                    for (i = 0, s = u.length; i < s; i++) {
                        var d = u[i];
                        if ("attribute" == d || "uniform" == d) i = Ci._parseOne(n, h, u, i, d, !0);
                        else {
                            if ("#define" == d) {
                                l[d = u[++i]] = 1;
                                continue;
                            }
                            if ("#ifdef" == d) {
                                o[c = u[++i]] = o[c] || [];
                                for (i++; i < s; i++) {
                                    if ("attribute" == (d = u[i]) || "uniform" == d) i = Ci._parseOne(n, h, u, i, d, l[c]);
                                    else if ("#else" == d)
                                        for (i++; i < s; i++) {
                                            if ("attribute" == (d = u[i]) || "uniform" == d) i = Ci._parseOne(n, h, u, i, d, !l[c]);
                                            else if ("#endif" == d) break;
                                        }
                                }
                            }
                        }
                    }
                }
                return a;
            }
        }, {
            key: "splitToWords",
            value: function splitToWords(t, e) {
                for (var i, s, r = [], a = -1, n = 0, h = t.length; n < h; n++) {
                    if (i = t.charAt(n), " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                        if (a >= 0 && n - a > 1 && (s = t.substr(a, n - a), r.push(s)), '"' == i || "'" == i) {
                            var o = t.indexOf(i, n + 1);
                            if (o < 0) throw "Sharder err:" + t;
                            r.push(t.substr(n + 1, o - n - 1)), n = o, a = -1;
                            continue;
                        }
                        "(" == i && e && r.length > 0 && (s = r[r.length - 1] + ";", "vec4;main;".indexOf(s) < 0 && (e.useFuns += s)),
                            a = -1;
                    } else a < 0 && (a = n);
                }
                return a < h && h - a > 1 && (s = t.substr(a, h - a), r.push(s)), r;
            }
        }]);
        return Ci;
    }();
    Ci.IFDEF_NO = 0, Ci.IFDEF_YES = 1, Ci.IFDEF_ELSE = 2, Ci.IFDEF_PARENT = 3, Ci._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"),
        Ci._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"),
        Ci._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"),
        Ci.includes = {}, Ci._clearCR = new RegExp("\r", "g"), Ci._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
    var bi = /* */ function(_x12) {
        _inherits(bi, _x12);

        function bi() {
            var _this41;
            _classCallCheck(this, bi);
            _this41 = _possibleConstructorReturn(this, _getPrototypeOf(bi).call(this)), _this41.worker = new Worker(bi.workerPath);
            var t = _assertThisInitialized(_this41);
            _this41.worker.onmessage = function(e) {
                t.workerMessage(e.data);
            };
            return _this41;
        }
        _createClass(bi, [{
            key: "workerMessage",
            value: function workerMessage(t) {
                if (t) switch (t.type) {
                    case "Image":
                        this.imageLoaded(t);
                        break;

                    case "Disable":
                        bi.enable = !1;
                }
            }
        }, {
            key: "imageLoaded",
            value: function imageLoaded(t) {
                if (t.dataType && "imageBitmap" == t.dataType) {
                    var e = t.imageBitmap;
                    console.log("load:", t.url), this.event(t.url, e);
                } else this.event(t.url, null);
            }
        }, {
            key: "loadImage",
            value: function loadImage(t) {
                this.worker.postMessage(t);
            }
        }, {
            key: "_loadImage",
            value: function _loadImage(t) {
                var e = this;
                var i = e.type;
                if (this._useWorkerLoader && bi._enable) {
                    t = E.formatURL(t);
                    var s = function s(r) {
                        if (bi.I.off(t, e, s), r) {
                            var a = r;
                            "nativeimage" !== i && (a = new P()).loadImageSource(r), e.onLoaded(a);
                        } else bi._preLoadFun.call(e, t);
                    };
                    bi.I.on(t, e, s), bi.I.loadImage(t);
                } else bi._preLoadFun.call(e, t);
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                return null == bi._preLoadFun && !!Worker && (bi._preLoadFun = Qe.prototype._loadImage,
                    Qe.prototype._loadImage = bi.prototype._loadImage, bi.I || (bi.I = new bi()), !0);
            }
        }, {
            key: "workerSupported",
            value: function workerSupported() {
                return !!Worker;
            }
        }, {
            key: "enableWorkerLoader",
            value: function enableWorkerLoader() {
                bi._tryEnabled || (bi.enable = !0, bi._tryEnabled = !0);
            }
        }, {
            key: "enable",
            set: function set(t) {
                bi._enable != t && (bi._enable = t, t && null == bi._preLoadFun && (bi._enable = bi.__init__()));
            },
            get: function get() {
                return bi._enable;
            }
        }]);
        return bi;
    }(x);
    bi.workerPath = "libs/workerloader.js", bi._enable = !1, bi._tryEnabled = !1;
    var Ai = /* */ function() {
        function Ai() {
            _classCallCheck(this, Ai);
        }
        _createClass(Ai, null, [{
            key: "__init__",
            value: function __init__() {}
        }, {
            key: "hide",
            value: function hide() {
                "none" != Ai.cursor && (Ai._preCursor = Ai.cursor, Ai.cursor = "none");
            }
        }, {
            key: "show",
            value: function show() {
                "none" == Ai.cursor && (Ai._preCursor ? Ai.cursor = Ai._preCursor : Ai.cursor = "auto");
            }
        }, {
            key: "cursor",
            set: function set(t) {
                Ai._style.cursor = t;
            },
            get: function get() {
                return Ai._style.cursor;
            }
        }]);
        return Ai;
    }();
    var Ri = /* */ function(_yt4) {
        _inherits(Ri, _yt4);

        function Ri(t) {
            var _this42;
            _classCallCheck(this, Ri);
            _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Ri).call(this, Ri.const_stride, 4 * t * Ri.const_stride, 4)),
                _this42.canReuse = !0, _this42.setAttributes(Ri._fixattriInfo), _this42.createQuadIB(t),
                _this42._quadNum = t;
            return _this42;
        }
        _createClass(Ri, [{
            key: "setMaxParticleNum",
            value: function setMaxParticleNum(t) {
                this._vb._resizeBuffer(4 * t * Ri.const_stride, !1), this.createQuadIB(t);
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, Ri._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
            }
        }], [{
            key: "__init__",
            value: function __init__() {
                var t = m.instance;
                Ri._fixattriInfo = [t.FLOAT, 4, 0, t.FLOAT, 3, 16, t.FLOAT, 3, 28, t.FLOAT, 4, 40, t.FLOAT, 4, 56, t.FLOAT, 3, 72, t.FLOAT, 2, 84, t.FLOAT, 4, 92, t.FLOAT, 1, 108, t.FLOAT, 1, 112];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                if (Ri._POOL.length) {
                    var e = Ri._POOL.pop();
                    return e.setMaxParticleNum(t), e;
                }
                return new Ri(t);
            }
        }]);
        return Ri;
    }(yt);
    Ri.const_stride = 116, Ri._POOL = [];
    var wi = /* */ function(_b3) {
        _inherits(wi, _b3);

        function wi() {
            _classCallCheck(this, wi);
            return _possibleConstructorReturn(this, _getPrototypeOf(wi).apply(this, arguments));
        }
        return wi;
    }(b);
    wi.create = function(e, i, s) {
        var r = new P(e, i, s, !1, !1);
        return r.wrapModeU = t.WarpMode.Clamp, r.wrapModeV = t.WarpMode.Clamp, r;
    };
    var Si = /* */ function() {
        function Si() {
            _classCallCheck(this, Si);
        }
        _createClass(Si, null, [{
            key: "__init",
            value: function __init(t) {
                t.forEach(function(t) {
                    t.__init$ && t.__init$();
                });
            }
        }, {
            key: "init",
            value: function init(e, s) {
                if (!Si._isinit) {
                    Si._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = Si._arrayBufferSlice),
                        $t.__init__();
                    var a = $t.mainCanvas = new Ee(!0),
                        n = a.source.style;
                    for (var _len = arguments.length, r = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                        r[_key - 2] = arguments[_key];
                    }
                    if (n.position = "absolute", n.top = n.left = "0px", n.background = "#000000", $t.onKGMiniGame || $t.onAlipayMiniGame || $t.container.appendChild(a.source),
                        $t.canvas = new Ee(!0), $t.context = $t.canvas.getContext("2d"), $t.supportWebAudio = He.__init__(),
                        $t.supportLocalStorage = ti.__init__(), Si.systemTimer = new gi(!1), t.systemTimer = gi.gSysTimer = Si.systemTimer,
                        Si.startTimer = new gi(!1), Si.physicsTimer = new gi(!1), Si.updateTimer = new gi(!1),
                        Si.lateTimer = new gi(!1), Si.timer = new gi(!1), t.startTimer = i.startTimer = Si.startTimer,
                        t.lateTimer = i.lateTimer = Si.lateTimer, t.updateTimer = i.updateTimer = Si.updateTimer,
                        i.systemTimer = Si.systemTimer, t.timer = i.timer = Si.timer, t.physicsTimer = i.physicsTimer = Si.physicsTimer,
                        Si.loader = new $e(), i.Laya = Si, t.loader = i.loader = Si.loader, _i.__init__(),
                        ci.__init(), Ai.__init__(), re.inner_enable(), r)
                        for (var h = 0, o = r.length; h < o; h++) {
                            r[h] && r[h].enable && r[h].enable();
                        }
                    return i.Render.isConchApp && Si.enableNative(), Si.enableWebGLPlus(), ge.beginCheck(),
                        t.stage = Si.stage = new Ue(), i.stage = Si.stage, K.gStage = Si.stage, E.rootPath = E._basePath = Si._getUrlPath(),
                        Et.__int__(), bt.__init__(), Ct.__init__(), Si.render = new he(0, 0, $t.mainCanvas),
                        t.render = Si.render, Si.stage.size(e, s), window.stage = Si.stage, v.__init__(),
                        Ri.__init__(), Ci.__init__(), ye.__init__(), Ge.__init__(), Be.instance.__init__(Si.stage, he.canvas),
                        Le.__init__(), He.autoStopMusic = !0, G._StatRender = new fi(), V._initone(U.TEXTURE2D, xi),
                        V._initone(U.TEXTURE2D | U.FILTERGLOW, xi), V._initone(U.PRIMITIVE, Ti), V._initone(U.SKINMESH, vi),
                        he.canvas;
                }
            }
        }, {
            key: "_getUrlPath",
            value: function _getUrlPath() {
                var t = $t.window.location,
                    e = t.pathname;
                return e = ":" == e.charAt(2) ? e.substring(1) : e, E.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname);
            }
        }, {
            key: "_arrayBufferSlice",
            value: function _arrayBufferSlice(t, e) {
                var i = new Uint8Array(this, t, e - t),
                    s = new Uint8Array(i.length);
                return s.set(i), s.buffer;
            }
        }, {
            key: "_runScript",
            value: function _runScript(t) {
                return $t.window[Si._evcode](t);
            }
        }, {
            key: "enableDebugPanel",
            value: function enableDebugPanel() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "libs/laya.debugtool.js";
                if (window.Laya.DebugPanel) window.Laya.DebugPanel.enable();
                else {
                    var e = $t.createElement("script");
                    e.onload = function() {
                        window.Laya.DebugPanel.enable();
                    }, e.src = t, $t.document.body.appendChild(e);
                }
            }
        }, {
            key: "enableWebGLPlus",
            value: function enableWebGLPlus() {
                v.__init_native();
            }
        }, {
            key: "enableNative",
            value: function enableNative() {
                Si.isNativeRender_enable || (Si.isNativeRender_enable = !0, he.supportWebGLPlusRendering && (W.prototype.uploadTexture2D = function(t) {
                    var e = m.instance;
                    e.bindTexture(e.TEXTURE_2D, t);
                }), D.width = $t.window.innerWidth, D.height = $t.window.innerHeight, $t.measureText = function(t, e) {
                    return window.conchTextCanvas.font = e, window.conchTextCanvas.measureText(t);
                }, Ue.clear = function(t) {
                    ie.set2DRenderConfig();
                    var e = j.create(t).arrColor,
                        i = m.instance;
                    e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT),
                        D.clear();
                }, Me.drawToCanvas = Me.drawToTexture = function(t, e, i, s, r, a) {
                    r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
                    var n = new Ee(!1),
                        h = n.getContext("2d");
                    return n.size(i, s), h.asBitmap = !0, h._targets.start(), ye.renders[e]._fun(t, h, r, a),
                        h.flush(), h._targets.end(), h._targets.restore(), n;
                }, Object.defineProperty(B.prototype, "uv", {
                    get: function get() {
                        return this._uv;
                    },
                    set: function set(t) {
                        this._uv = t;
                    }
                }), Ee.prototype.getTexture = function() {
                    return this._texture || (this._texture = this.context._targets, this._texture.uv = B.flipyuv,
                        this._texture.bitmap = this._texture), this._texture;
                });
            }
        }, {
            key: "alertGlobalError",
            set: function set(t) {
                var e = 0;
                $t.window.onerror = t ? function(t, i, s, r, a) {
                    e++ < 5 && a && this.alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + a.stack);
                } : null;
            }
        }]);
        return Si;
    }();
    Si.stage = null, Si.systemTimer = null, Si.startTimer = null, Si.physicsTimer = null,
        Si.updateTimer = null, Si.lateTimer = null, Si.timer = null, Si.loader = null, Si.version = "2.5.0",
        Si._isinit = !1, Si.isWXOpenDataContext = !1, Si.isWXPosMsg = !1, Si.__classmap = null,
        Si.Config = e, Si.TextRender = ee, Si.EventDispatcher = x, Si.SoundChannel = ke,
        Si.Stage = Ue, Si.Render = he, Si.Browser = $t, Si.Sprite = Me, Si.Node = Se, Si.Context = ie,
        Si.WebGL = re, Si.Handler = T, Si.RunDriver = Ne, Si.Utils = K, Si.Input = Le, Si.Loader = Qe,
        Si.LocalStorage = ti, Si.SoundManager = He, Si.URL = E, Si.Event = zt, Si.Matrix = p,
        Si.HTMLImage = wi, Si.Laya = Si, Si._evcode = "eval", Si.isNativeRender_enable = !1,
        Si.__classmap = i.__classMap, i.Timer = gi, i.Dragging = ai, i.GraphicsBounds = _e,
        i.Sprite = Me, i.TextRender = ee, i.Loader = Qe, i.TTFLoader = ii, i.WebAudioSound = Xe,
        i.SoundManager = He, i.ShaderCompile = Ci, i.ClassUtils = be, i.SceneUtils = ci,
        i.Context = ie, i.Render = he, i.MouseManager = Be, i.Text = Pe, i.Browser = $t,
        i.WebGL = re, i.AudioSound = Ye, i.Pool = s, i.Utils = K, i.Graphics = ve, i.Submit = Ut,
        i.Stage = Ue, i.Resource = C, i.WorkerLoader = bi;
    var Mi = window._layalibs;
    if (Mi) {
        Mi.sort(function(t, e) {
            return t.i - e.i;
        });
        for (var Ii = 0; Ii < Mi.length; Ii++) {
            Mi[Ii].f(window, window.document, Si);
        }
    }
    var Pi = window;
    Pi.Laya ? (Pi.Laya.Laya = Si, Object.assign(Pi.Laya, Si)) : Pi.Laya = Si;
    var Li, Di = Si.__init,
        Bi = Si.init,
        Fi = Si.version,
        Oi = Si.alertGlobalError,
        Ni = Si.enableDebugPanel;

    function _static(t, e) {
        for (var i = 0, s = e.length; i < s; i += 2) {
            if ("length" == e[i]) t.length = e[i + 1].call(t);
            else {
                var tmp = function tmp() {
                    var s = e[i],
                        r = e[i + 1];
                    Object.defineProperty(t, s, {
                        get: function get() {
                            return delete this[s], this[s] = r.call(this);
                        },
                        set: function set(t) {
                            delete this[s], this[s] = t;
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                };
                tmp();
            }
        }
    }
    var Ui = /* */ function(_ni) {
        _inherits(Ui, _ni);

        function Ui() {
            _classCallCheck(this, Ui);
            return _possibleConstructorReturn(this, _getPrototypeOf(Ui).apply(this, arguments));
        }
        _createClass(Ui, [{
            key: "_onAwake",
            value: function _onAwake() {
                this.onAwake(), this.onStart !== Ui.prototype.onStart && i.startTimer.callLater(this, this.onStart);
            }
        }, {
            key: "_onEnable",
            value: function _onEnable() {
                var t = Ui.prototype;
                this.onTriggerEnter !== t.onTriggerEnter && this.owner.on(zt.TRIGGER_ENTER, this, this.onTriggerEnter),
                    this.onTriggerStay !== t.onTriggerStay && this.owner.on(zt.TRIGGER_STAY, this, this.onTriggerStay),
                    this.onTriggerExit !== t.onTriggerExit && this.owner.on(zt.TRIGGER_EXIT, this, this.onTriggerExit),
                    this.onMouseDown !== t.onMouseDown && this.owner.on(zt.MOUSE_DOWN, this, this.onMouseDown),
                    this.onMouseUp !== t.onMouseUp && this.owner.on(zt.MOUSE_UP, this, this.onMouseUp),
                    this.onClick !== t.onClick && this.owner.on(zt.CLICK, this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && i.stage.on(zt.MOUSE_DOWN, this, this.onStageMouseDown),
                    this.onStageMouseUp !== t.onStageMouseUp && i.stage.on(zt.MOUSE_UP, this, this.onStageMouseUp),
                    this.onStageClick !== t.onStageClick && i.stage.on(zt.CLICK, this, this.onStageClick),
                    this.onStageMouseMove !== t.onStageMouseMove && i.stage.on(zt.MOUSE_MOVE, this, this.onStageMouseMove),
                    this.onDoubleClick !== t.onDoubleClick && this.owner.on(zt.DOUBLE_CLICK, this, this.onDoubleClick),
                    this.onRightClick !== t.onRightClick && this.owner.on(zt.RIGHT_CLICK, this, this.onRightClick),
                    this.onMouseMove !== t.onMouseMove && this.owner.on(zt.MOUSE_MOVE, this, this.onMouseMove),
                    this.onMouseOver !== t.onMouseOver && this.owner.on(zt.MOUSE_OVER, this, this.onMouseOver),
                    this.onMouseOut !== t.onMouseOut && this.owner.on(zt.MOUSE_OUT, this, this.onMouseOut),
                    this.onKeyDown !== t.onKeyDown && i.stage.on(zt.KEY_DOWN, this, this.onKeyDown),
                    this.onKeyPress !== t.onKeyPress && i.stage.on(zt.KEY_PRESS, this, this.onKeyPress),
                    this.onKeyUp !== t.onKeyUp && i.stage.on(zt.KEY_UP, this, this.onKeyUp), this.onUpdate !== t.onUpdate && i.updateTimer.frameLoop(1, this, this.onUpdate),
                    this.onLateUpdate !== t.onLateUpdate && i.lateTimer.frameLoop(1, this, this.onLateUpdate),
                    this.onPreRender !== t.onPreRender && i.lateTimer.frameLoop(1, this, this.onPreRender),
                    this.onEnable();
            }
        }, {
            key: "_onDisable",
            value: function _onDisable() {
                this.owner.offAllCaller(this), i.stage.offAllCaller(this), i.startTimer.clearAll(this),
                    i.updateTimer.clearAll(this), i.lateTimer.clearAll(this);
            }
        }, {
            key: "_isScript",
            value: function _isScript() {
                return !0;
            }
        }, {
            key: "_onDestroy",
            value: function _onDestroy() {
                this.onDestroy();
            }
        }, {
            key: "onAwake",
            value: function onAwake() {}
        }, {
            key: "onEnable",
            value: function onEnable() {}
        }, {
            key: "onStart",
            value: function onStart() {}
        }, {
            key: "onTriggerEnter",
            value: function onTriggerEnter(t, e, i) {}
        }, {
            key: "onTriggerStay",
            value: function onTriggerStay(t, e, i) {}
        }, {
            key: "onTriggerExit",
            value: function onTriggerExit(t, e, i) {}
        }, {
            key: "onMouseDown",
            value: function onMouseDown(t) {}
        }, {
            key: "onMouseUp",
            value: function onMouseUp(t) {}
        }, {
            key: "onClick",
            value: function onClick(t) {}
        }, {
            key: "onStageMouseDown",
            value: function onStageMouseDown(t) {}
        }, {
            key: "onStageMouseUp",
            value: function onStageMouseUp(t) {}
        }, {
            key: "onStageClick",
            value: function onStageClick(t) {}
        }, {
            key: "onStageMouseMove",
            value: function onStageMouseMove(t) {}
        }, {
            key: "onDoubleClick",
            value: function onDoubleClick(t) {}
        }, {
            key: "onRightClick",
            value: function onRightClick(t) {}
        }, {
            key: "onMouseMove",
            value: function onMouseMove(t) {}
        }, {
            key: "onMouseOver",
            value: function onMouseOver(t) {}
        }, {
            key: "onMouseOut",
            value: function onMouseOut(t) {}
        }, {
            key: "onKeyDown",
            value: function onKeyDown(t) {}
        }, {
            key: "onKeyPress",
            value: function onKeyPress(t) {}
        }, {
            key: "onKeyUp",
            value: function onKeyUp(t) {}
        }, {
            key: "onUpdate",
            value: function onUpdate() {}
        }, {
            key: "onLateUpdate",
            value: function onLateUpdate() {}
        }, {
            key: "onPreRender",
            value: function onPreRender() {}
        }, {
            key: "onPostRender",
            value: function onPostRender() {}
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "onDestroy",
            value: function onDestroy() {}
        }, {
            key: "isSingleton",
            get: function get() {
                return !1;
            }
        }]);
        return Ui;
    }(ni);
    var Gi = /* */ function(_li) {
        _inherits(Gi, _li);

        function Gi() {
            var _this43;
            _classCallCheck(this, Gi);
            _this43 = _possibleConstructorReturn(this, _getPrototypeOf(Gi).apply(this, arguments)),
                _this43._nodeIDAniDic = {};
            return _this43;
        }
        _createClass(Gi, [{
            key: "_parseNodeList",
            value: function _parseNodeList(t) {
                this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props,
                    t.compId && this._nodeList.push(t.compId);
                var e = t.child;
                if (e) {
                    var i, s = e.length;
                    for (i = 0; i < s; i++) {
                        this._parseNodeList(e[i]);
                    }
                }
            }
        }, {
            key: "_calGraphicData",
            value: function _calGraphicData(t) {
                var e;
                if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic)
                    for (e in this._nodeIDAniDic) {
                        this._nodeIDAniDic[e] = null;
                    }
            }
        }, {
            key: "_createGraphicData",
            value: function _createGraphicData() {
                var t, e, i = [],
                    s = this.count,
                    r = this._usedFrames;
                for (r || (r = []), t = 0; t < s; t++) {
                    !r[t] && e || (e = this._createFrameGraphic(t)), i.push(e);
                }
                this._gList = i;
            }
        }, {
            key: "_createFrameGraphic",
            value: function _createFrameGraphic(t) {
                var e = new ve();
                return Gi._rootMatrix || (Gi._rootMatrix = new p()), this._updateNodeGraphic(this._rootNode, t, Gi._rootMatrix, e),
                    e;
            }
        }, {
            key: "_updateNodeGraphic",
            value: function _updateNodeGraphic(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var a, n, h;
                (a = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).resultTransform || (a.resultTransform = new p()),
                    n = a.resultTransform, p.mul(a.transform, i, n);
                var o = a.alpha * r;
                if (!(o < .01)) {
                    a.skin && (h = this._getTextureByUrl(a.skin)) && (n._checkTransform() ? (s.drawTexture(h, 0, 0, a.width, a.height, n, o),
                        a.resultTransform = null) : s.drawTexture(h, n.tx, n.ty, a.width, a.height, null, o));
                    var l, _, c = t.child;
                    if (c)
                        for (_ = c.length, l = 0; l < _; l++) {
                            this._updateNodeGraphic(c[l], e, n, s, o);
                        }
                }
            }
        }, {
            key: "_updateNoChilds",
            value: function _updateNoChilds(t, e) {
                if (t.skin) {
                    var i = this._getTextureByUrl(t.skin);
                    if (i) {
                        var s = t.transform;
                        s._checkTransform(), !s._bTransform ? e.drawTexture(i, s.tx, s.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, s.clone(), t.alpha);
                    }
                }
            }
        }, {
            key: "_updateNodeGraphic2",
            value: function _updateNodeGraphic2(t, e, i) {
                var s;
                if (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]),
                    t.child) {
                    var r, a, n, h = s.transform;
                    h._checkTransform(), a = (r = !h._bTransform) && (0 != h.tx || 0 != h.ty), (n = h._bTransform || 1 != s.alpha) && i.save(),
                        1 != s.alpha && i.alpha(s.alpha), r ? a && i.translate(h.tx, h.ty) : i.transform(h.clone());
                    var o, l, _, c = t.child;
                    if (s.skin && (o = this._getTextureByUrl(s.skin)) && i.drawImage(o, 0, 0, s.width, s.height),
                        c)
                        for (_ = c.length, l = 0; l < _; l++) {
                            this._updateNodeGraphic2(c[l], e, i);
                        }
                    n ? i.restore() : r ? a && i.translate(-h.tx, -h.ty) : i.transform(h.clone().invert());
                } else this._updateNoChilds(s, i);
            }
        }, {
            key: "_calculateKeyFrames",
            value: function _calculateKeyFrames(t) {
                _get(_getPrototypeOf(Gi.prototype), "_calculateKeyFrames", this).call(this, t),
                    this._nodeIDAniDic[t.target] = t;
            }
        }, {
            key: "getNodeDataByID",
            value: function getNodeDataByID(t) {
                return this._nodeIDAniDic[t];
            }
        }, {
            key: "_getParams",
            value: function _getParams(t, e, i, s) {
                var r = Gi._temParam;
                r.length = e.length;
                var a, n = e.length;
                for (a = 0; a < n; a++) {
                    r[a] = this._getObjVar(t, e[a][0], i, e[a][1], s);
                }
                return r;
            }
        }, {
            key: "_getObjVar",
            value: function _getObjVar(t, e, i, s, r) {
                if (e in t) {
                    var a = t[e];
                    return i >= a.length && (i = a.length - 1), t[e][i];
                }
                return e in r ? r[e] : s;
            }
        }, {
            key: "_getNodeGraphicData",
            value: function _getNodeGraphicData(t, e, i) {
                i || (i = new ki()), i.transform ? i.transform.identity() : i.transform = new p();
                var s = this.getNodeDataByID(t);
                if (!s) return i;
                var r, a, n, h = s.frames,
                    o = this._getParams(h, Gi._drawTextureCmd, e, this._nodeDefaultProps[t]),
                    l = o[0],
                    _ = o[5],
                    c = o[6],
                    u = o[13],
                    d = o[14],
                    f = o[7],
                    g = o[8],
                    m = o[9],
                    v = o[11],
                    T = o[12];
                r = o[3], a = o[4], 0 != r && 0 != a || (l = null), -1 == r && (r = 0), -1 == a && (a = 0),
                    i.skin = l, i.width = r, i.height = a, l && ((n = this._getTextureByUrl(l)) ? (r || (r = n.sourceWidth),
                        a || (a = n.sourceHeight)) : console.warn("lost skin:", l, ",you may load pics first")),
                    i.alpha = o[10];
                var x = i.transform;
                0 != u && (_ = u * r), 0 != d && (c = d * a), 0 == _ && 0 == c || x.translate(-_, -c);
                var y = null;
                if (m || 1 !== f || 1 !== g || v || T) {
                    (y = Gi._tempMt).identity(), y._bTransform = !0;
                    var E = .0174532922222222 * (m - v),
                        C = .0174532922222222 * (m + T),
                        b = Math.cos(C),
                        A = Math.sin(C),
                        R = Math.sin(E),
                        w = Math.cos(E);
                    y.a = f * b, y.b = f * A, y.c = -g * R, y.d = g * w, y.tx = y.ty = 0;
                }
                return y && (x = p.mul(x, y, x)), x.translate(o[1], o[2]), i;
            }
        }, {
            key: "_getTextureByUrl",
            value: function _getTextureByUrl(t) {
                return Qe.getRes(t);
            }
        }, {
            key: "setAniData",
            value: function setAniData(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (t.animations) {
                    this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0),
                        this._rootNode = t, this._parseNodeList(t);
                    var i, s, r = {},
                        a = [],
                        n = t.animations,
                        h = n.length;
                    for (i = 0; i < h; i++) {
                        if (s = n[i], this._labels = null, (!e || e == s.name) && s) {
                            try {
                                this._calGraphicData(s);
                            } catch (t) {
                                console.warn("parse animation fail:" + s.name + ",empty animation created"), this._gList = [];
                            }
                            var o = {};
                            o.interval = 1e3 / s.frameRate, o.frames = this._gList, o.labels = this._labels,
                                o.name = s.name, a.push(o), r[s.name] = o;
                        }
                    }
                    this.animationList = a, this.animationDic = r;
                }
                Gi._temParam.length = 0;
            }
        }, {
            key: "parseByData",
            value: function parseByData(t) {
                var e, i;
                e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {},
                    this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e,
                    this._parseNodeList(e), this._labels = null;
                try {
                    this._calGraphicData(i);
                } catch (t) {
                    console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
                }
                var s = t;
                return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels,
                    s.name = i.name, s;
            }
        }, {
            key: "setUpAniData",
            value: function setUpAniData(t) {
                if (t.animations) {
                    var e, i, s = {},
                        r = [],
                        a = t.animations,
                        n = a.length;
                    for (e = 0; e < n; e++) {
                        if (i = a[e]) {
                            var h = {};
                            h.name = i.name, h.aniO = i, h.nodeRoot = t, r.push(h), s[i.name] = h;
                        }
                    }
                    this.animationList = r, this.animationDic = s;
                }
            }
        }, {
            key: "_clear",
            value: function _clear() {
                this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null;
            }
        }], [{
            key: "parseAnimationByData",
            value: function parseAnimationByData(t) {
                var e;
                return Gi._I || (Gi._I = new Gi()), e = Gi._I.parseByData(t), Gi._I._clear(), e;
            }
        }, {
            key: "parseAnimationData",
            value: function parseAnimationData(t) {
                var e;
                return Gi._I || (Gi._I = new Gi()), Gi._I.setUpAniData(t), (e = {}).animationList = Gi._I.animationList,
                    e.animationDic = Gi._I.animationDic, Gi._I._clear(), e;
            }
        }]);
        return Gi;
    }(li);
    Gi._drawTextureCmd = [
            ["skin", null],
            ["x", 0],
            ["y", 0],
            ["width", -1],
            ["height", -1],
            ["pivotX", 0],
            ["pivotY", 0],
            ["scaleX", 1],
            ["scaleY", 1],
            ["rotation", 0],
            ["alpha", 1],
            ["skewX", 0],
            ["skewY", 0],
            ["anchorX", 0],
            ["anchorY", 0]
        ],
        Gi._temParam = [], Gi._tempMt = new p();
    var ki = function ki() {
        _classCallCheck(this, ki);
        this.alpha = 1;
    };
    var Wi = /* */ function(_hi2) {
        _inherits(Wi, _hi2);

        function Wi() {
            var _this44;
            _classCallCheck(this, Wi);
            _this44 = _possibleConstructorReturn(this, _getPrototypeOf(Wi).call(this)), _this44._setControlNode(_assertThisInitialized(_this44));
            return _this44;
        }
        _createClass(Wi, [{
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this.stop(), _get(_getPrototypeOf(Wi.prototype), "destroy", this).call(this, t),
                    this._frames = null, this._labels = null;
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                i && this._setFramesFromCache(i, !0), _get(_getPrototypeOf(Wi.prototype), "play", this).call(this, t, e, i);
            }
        }, {
            key: "_setFramesFromCache",
            value: function _setFramesFromCache(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (this._url && (t = this._url + "#" + t), t && Wi.framesMap[t]) {
                    var i = Wi.framesMap[t];
                    return i instanceof Array ? (this._frames = Wi.framesMap[t], this._count = this._frames.length) : (i.nodeRoot && (Wi.framesMap[t] = Gi.parseAnimationByData(i),
                            i = Wi.framesMap[t]), this._frames = i.frames, this._count = this._frames.length,
                        this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), !0;
                }
                return e && console.log("ani not found:", t), !1;
            }
        }, {
            key: "_copyLabels",
            value: function _copyLabels(t) {
                if (!t) return null;
                var e, i;
                for (i in e = {}, t) {
                    e[i] = K.copyArray([], t[i]);
                }
                return e;
            }
        }, {
            key: "_frameLoop",
            value: function _frameLoop() {
                this._visible && this._style.alpha > .01 && this._frames && _get(_getPrototypeOf(Wi.prototype), "_frameLoop", this).call(this);
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {
                this._frames && (this.graphics = this._frames[t]);
            }
        }, {
            key: "clear",
            value: function clear() {
                return _get(_getPrototypeOf(Wi.prototype), "clear", this).call(this), this.stop(),
                    this.graphics = null, this._frames = null, this._labels = null, this;
            }
        }, {
            key: "loadImages",
            value: function loadImages(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                return this._url = "", this._setFramesFromCache(e) || (this.frames = Wi.framesMap[e] ? Wi.framesMap[e] : Wi.createFrames(t, e)),
                    this;
            }
        }, {
            key: "loadAtlas",
            value: function loadAtlas(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                this._url = "";
                var r = this;
                if (!r._setFramesFromCache(s)) {
                    var onLoaded = function onLoaded(i) {
                        t === i && (r.frames = Wi.framesMap[s] ? Wi.framesMap[s] : Wi.createFrames(t, s),
                            e && e.run());
                    };
                    Qe.getAtlas(t) ? onLoaded(t) : i.loader.load(t, T.create(null, onLoaded, [t]), null, Qe.ATLAS);
                }
                return this;
            }
        }, {
            key: "loadAnimation",
            value: function loadAnimation(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                this._url = t;
                return this._actionName || (this._actionName = ""), this._setFramesFromCache(this._actionName) ? (this._setFramesFromCache(this._actionName, !0),
                        this.index = 0, e && e.run()) : !s || Qe.getAtlas(s) ? this._loadAnimationData(t, e, s) : i.loader.load(s, T.create(this, this._loadAnimationData, [t, e, s]), null, Qe.ATLAS),
                    this;
            }
        }, {
            key: "_loadAnimationData",
            value: function _loadAnimationData(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (!s || Qe.getAtlas(s)) {
                    var r = this;
                    Qe.getRes(t) ? onLoaded(t) : i.loader.load(t, T.create(null, onLoaded, [t]), null, Qe.JSON);
                } else console.warn("atlas load fail:" + s);

                function onLoaded(i) {
                    if (Qe.getRes(i)) {
                        if (t === i) {
                            var s;
                            if (Wi.framesMap[t + "#"]) r._setFramesFromCache(r._actionName, !0), r.index = 0,
                                r._resumePlay();
                            else {
                                var a = Gi.parseAnimationData(Qe.getRes(t));
                                if (!a) return;
                                var n, h, o = a.animationList,
                                    l = o.length;
                                for (n = 0; n < l; n++) {
                                    s = o[n], Wi.framesMap[t + "#" + s.name] = s, h || (h = s);
                                }
                                h && (Wi.framesMap[t + "#"] = h, r._setFramesFromCache(r._actionName, !0), r.index = 0),
                                    r._resumePlay();
                            }
                            e && e.run();
                        }
                        Qe.clearRes(t);
                    } else Wi.framesMap[t + "#"] && (r._setFramesFromCache(r._actionName, !0), r.index = 0,
                        r._resumePlay(), e && e.run());
                }
            }
        }, {
            key: "frames",
            get: function get() {
                return this._frames;
            },
            set: function set(t) {
                this._frames = t, t && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0),
                    this.index = this._index);
            }
        }, {
            key: "source",
            set: function set(t) {
                t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","));
            }
        }, {
            key: "autoAnimation",
            set: function set(t) {
                this.play(0, !0, t);
            }
        }, {
            key: "autoPlay",
            set: function set(t) {
                t ? this.play() : this.stop();
            }
        }], [{
            key: "createFrames",
            value: function createFrames(t, e) {
                var i;
                if ("string" == typeof t) {
                    var s = Qe.getAtlas(t);
                    if (s && s.length) {
                        i = [];
                        for (var r = 0, a = s.length; r < a; r++) {
                            var n = new ve();
                            n.drawImage(Qe.getRes(s[r]), 0, 0), i.push(n);
                        }
                    }
                } else if (t instanceof Array)
                    for (i = [], r = 0, a = t.length; r < a; r++) {
                        (n = new ve()).loadImage(t[r], 0, 0), i.push(n);
                    }
                return e && (Wi.framesMap[e] = i), i;
            }
        }, {
            key: "clearCache",
            value: function clearCache(t) {
                var e, i = Wi.framesMap,
                    s = t + "#";
                for (e in i) {
                    e !== t && 0 !== e.indexOf(s) || delete Wi.framesMap[e];
                }
            }
        }]);
        return Wi;
    }(hi);
    Wi.framesMap = {}, i.regClass(Wi), be.regClass("laya.display.Animation", Wi), be.regClass("Laya.Animation", Wi);
    var Yi = /* */ function(_li2) {
        _inherits(Yi, _li2);

        function Yi() {
            var _this45;
            _classCallCheck(this, Yi);
            _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Yi).apply(this, arguments)),
                _this45._initData = {};
            return _this45;
        }
        _createClass(Yi, [{
            key: "_onOtherBegin",
            value: function _onOtherBegin(t) {
                t !== this && this.stop();
            }
        }, {
            key: "_addEvent",
            value: function _addEvent() {
                this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction));
            }
        }, {
            key: "_onPlayAction",
            value: function _onPlayAction() {
                this.play(0, !1);
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                this._target && (this._target.event(Yi.EFFECT_BEGIN, [this]), this._recordInitData(),
                    _get(_getPrototypeOf(Yi.prototype), "play", this).call(this, t, e, i));
            }
        }, {
            key: "_recordInitData",
            value: function _recordInitData() {
                var t, e, i;
                if (this._aniKeys)
                    for (e = this._aniKeys.length, t = 0; t < e; t++) {
                        i = this._aniKeys[t], this._initData[i] = this._target[i];
                    }
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {
                if (this._animationData) {
                    t < 0 && (t = 0), t > this._count && (t = this._count);
                    var e, i = this._animationData.nodes,
                        s = i.length;
                    for (s = s > 1 ? 1 : s, e = 0; e < s; e++) {
                        this._displayNodeToFrame(i[e], t);
                    }
                }
            }
        }, {
            key: "_displayNodeToFrame",
            value: function _displayNodeToFrame(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (this._target) {
                    var s, r, a, n, h, o, l, _, c, u = this._target,
                        d = t.frames,
                        p = t.keys,
                        f = p.length,
                        g = t.secondFrames;
                    for (n = 0; n < f; n++) {
                        r = d[s = p[n]], -1 == (h = g[s]) ? a = this._initData[s] : e < h ? (_ = (l = t.keyframes[s])[0]).tween ? (null == (o = si[_.tweenMethod]) && (o = si.linearNone),
                                c = l[1], a = o(e, this._initData[s], c.value - this._initData[s], c.index)) : a = this._initData[s] : a = r.length > e ? r[e] : r[r.length - 1],
                            u[s] = a;
                    }
                }
            }
        }, {
            key: "_calculateKeyFrames",
            value: function _calculateKeyFrames(t) {
                _get(_getPrototypeOf(Yi.prototype), "_calculateKeyFrames", this).call(this, t);
                var e, i, s = t.keyframes,
                    r = (t.target, {});
                for (e in t.secondFrames = r, s) {
                    (i = s[e]).length <= 1 ? r[e] = -1 : r[e] = i[1].index;
                }
            }
        }, {
            key: "target",
            set: function set(t) {
                this._target && this._target.off(Yi.EFFECT_BEGIN, this, this._onOtherBegin), this._target = t,
                    this._target && this._target.on(Yi.EFFECT_BEGIN, this, this._onOtherBegin), this._addEvent();
            },
            get: function get() {
                return this._target;
            }
        }, {
            key: "playEvent",
            set: function set(t) {
                this._playEvent = t, t && this._addEvent();
            }
        }, {
            key: "effectClass",
            set: function set(t) {
                if (this._effectClass = be.getClass(t), this._effectClass) {
                    var e = this._effectClass.uiView;
                    if (e) {
                        var i = e.animations;
                        if (i && i[0]) {
                            var s = i[0];
                            this._setUp({}, s), s.nodes && s.nodes[0] && (this._aniKeys = s.nodes[0].keys);
                        }
                    }
                }
            }
        }, {
            key: "effectData",
            set: function set(t) {
                if (t) {
                    var e = t.animations;
                    if (e && e[0]) {
                        var i = e[0];
                        this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys);
                    }
                }
            }
        }]);
        return Yi;
    }(li);
    Yi.EFFECT_BEGIN = "effectbegin", be.regClass("laya.display.EffectAnimation", Yi),
        be.regClass("Laya.EffectAnimation", Yi);
    var Vi = /* */ function(_x13) {
        _inherits(Vi, _x13);

        function Vi() {
            var _this46;
            _classCallCheck(this, Vi);
            _this46 = _possibleConstructorReturn(this, _getPrototypeOf(Vi).call(this)), _this46._completeHandler = new T(_assertThisInitialized(_this46), _this46.onOneLoadComplete),
                _this46.reset();
            return _this46;
        }
        _createClass(Vi, [{
            key: "reset",
            value: function reset() {
                this._toLoadList = [], this._isLoading = !1, this.totalCount = 0;
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var s, r;
                if (t instanceof Array)
                    for (r = t.length, s = 0; s < r; s++) {
                        this._addToLoadList(t[s], e);
                    } else this._addToLoadList(t, e);
                i && this._checkNext();
            }
        }, {
            key: "_addToLoadList",
            value: function _addToLoadList(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                this._toLoadList.indexOf(t) >= 0 || Qe.getRes(t) || (e ? this._toLoadList.push({
                    url: t
                }) : this._toLoadList.push(t), this.totalCount++);
            }
        }, {
            key: "_checkNext",
            value: function _checkNext() {
                if (!this._isLoading) {
                    if (0 == this._toLoadList.length) return void this.event(zt.COMPLETE);
                    var t;
                    "string" == typeof(t = this._toLoadList.pop()) ? this.loadOne(t): this.loadOne(t.url, !0);
                }
            }
        }, {
            key: "loadOne",
            value: function loadOne(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                this._curUrl = t;
                var s = K.getFileExtension(this._curUrl);
                e ? i.loader.create(t, this._completeHandler) : Vi.LoadableExtensions[s] ? i.loader.load(t, this._completeHandler, null, Vi.LoadableExtensions[s]) : t != Ze.getFileLoadPath(t) || Vi.No3dLoadTypes[s] || !$e.createMap[s] ? i.loader.load(t, this._completeHandler) : i.loader.create(t, this._completeHandler);
            }
        }, {
            key: "onOneLoadComplete",
            value: function onOneLoadComplete() {
                this._isLoading = !1, Qe.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
                var t, e = K.getFileExtension(this._curUrl);
                Vi.LoadableExtensions[e] && ((t = Qe.getRes(this._curUrl)) && t instanceof ze && (t = t.json),
                    t && (t.loadList && this.load(t.loadList, !1, !1), t.loadList3D && this.load(t.loadList3D, !0, !1)));
                "sk" == e && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event(zt.PROGRESS, this.getProgress()),
                    this._checkNext();
            }
        }, {
            key: "getProgress",
            value: function getProgress() {
                return this.loadedCount / this.totalCount;
            }
        }, {
            key: "leftCount",
            get: function get() {
                return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length;
            }
        }, {
            key: "loadedCount",
            get: function get() {
                return this.totalCount - this.leftCount;
            }
        }]);
        return Vi;
    }(x);
    Vi.LoadableExtensions = {
        scene: Qe.JSON,
        scene3d: Qe.JSON,
        ani: Qe.JSON,
        ui: Qe.JSON,
        prefab: Qe.PREFAB
    }, Vi.No3dLoadTypes = {
        png: !0,
        jpg: !0,
        txt: !0
    };
    var Xi = /* */ function(_Me4) {
        _inherits(Xi, _Me4);

        function Xi() {
            var _this47;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            _classCallCheck(this, Xi);
            _this47 = _possibleConstructorReturn(this, _getPrototypeOf(Xi).call(this)), _this47.autoDestroyAtClosed = !1,
                _this47.url = null, _this47._viewCreated = !1, _this47._$componentType = "Scene",
                _this47._setBit(Te.NOT_READY, !0), Xi.unDestroyedScenes.push(_assertThisInitialized(_this47)),
                _this47._scene = _assertThisInitialized(_this47), t && _this47.createChildren();
            return _this47;
        }
        _createClass(Xi, [{
            key: "createChildren",
            value: function createChildren() {}
        }, {
            key: "loadScene",
            value: function loadScene(t) {
                var e = t.indexOf(".") > -1 ? t : t + ".scene",
                    s = i.loader.getRes(e);
                if (s) this.createView(s);
                else {
                    i.loader.resetProgress();
                    var r = new Vi();
                    r.on(zt.COMPLETE, this, this._onSceneLoaded, [e]), r.load(e);
                }
            }
        }, {
            key: "_onSceneLoaded",
            value: function _onSceneLoaded(t) {
                this.createView(i.Loader.getRes(t));
            }
        }, {
            key: "createView",
            value: function createView(t) {
                t && !this._viewCreated && (this._viewCreated = !0, ci.createByData(this, t));
            }
        }, {
            key: "getNodeByID",
            value: function getNodeByID(t) {
                return this._idMap ? this._idMap[t] : null;
            }
        }, {
            key: "open",
            value: function open() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                t && Xi.closeAll(), Xi.root.addChild(this), this.onOpened(e);
            }
        }, {
            key: "onOpened",
            value: function onOpened(t) {}
        }, {
            key: "close",
            value: function close() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf();
            }
        }, {
            key: "onClosed",
            value: function onClosed() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this._idMap = null, _get(_getPrototypeOf(Xi.prototype), "destroy", this).call(this, t);
                for (var e = Xi.unDestroyedScenes, i = e.length - 1; i > -1; i--) {
                    if (e[i] === this) return void e.splice(i, 1);
                }
            }
        }, {
            key: "_sizeChanged",
            value: function _sizeChanged() {
                this.event(zt.RESIZE);
            }
        }, {
            key: "scaleX",
            set: function set(t) {
                _get(_getPrototypeOf(Xi.prototype), "get_scaleX", this).call(this) != t && (_get(_getPrototypeOf(Xi.prototype), "set_scaleX", this).call(this, t),
                    this.event(zt.RESIZE));
            },
            get: function get() {
                return _get(_getPrototypeOf(Xi.prototype), "scaleX", this);
            }
        }, {
            key: "scaleY",
            set: function set(t) {
                _get(_getPrototypeOf(Xi.prototype), "get_scaleY", this).call(this) != t && (_get(_getPrototypeOf(Xi.prototype), "set_scaleY", this).call(this, t),
                    this.event(zt.RESIZE));
            },
            get: function get() {
                return _get(_getPrototypeOf(Xi.prototype), "scaleY", this);
            }
        }, {
            key: "width",
            get: function get() {
                if (this._width) return this._width;
                for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._x + i.width * i.scaleX, t));
                }
                return t;
            },
            set: function set(t) {
                _get(_getPrototypeOf(Xi.prototype), "get_width", this).call(this) != t && (_get(_getPrototypeOf(Xi.prototype), "set_width", this).call(this, t),
                    this.callLater(this._sizeChanged));
            }
        }, {
            key: "height",
            get: function get() {
                if (this._height) return this._height;
                for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._y + i.height * i.scaleY, t));
                }
                return t;
            },
            set: function set(t) {
                _get(_getPrototypeOf(Xi.prototype), "get_height", this).call(this) != t && (_get(_getPrototypeOf(Xi.prototype), "set_height", this).call(this, t),
                    this.callLater(this._sizeChanged));
            }
        }, {
            key: "timer",
            get: function get() {
                return this._timer || i.timer;
            },
            set: function set(t) {
                this._timer = t;
            }
        }], [{
            key: "setUIMap",
            value: function setUIMap(t) {
                var e = i.loader.getRes(t);
                if (!e) throw "请提前加载uimap的json，再使用该接口设置！";
                for (var _t5 in e) {
                    i.Loader.loadedMap[E.formatURL(_t5 + ".scene")] = e[_t5];
                }
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                i.loader.resetProgress();
                var r = new Vi();

                function onProgress(t) {
                    Xi._loadPage && Xi._loadPage.event("progress", t), s && s.runWith(t);
                }
                r.on(zt.PROGRESS, null, onProgress), r.once(zt.COMPLETE, null, function() {
                    r.off(zt.PROGRESS, null, onProgress);
                    var s = i.Loader.getRes(t);
                    if (!s) throw "Can not find scene:" + t;
                    if (!s.props) throw "Scene data is error:" + t;
                    var a = s.props.runtime ? s.props.runtime : s.type,
                        n = i.ClassUtils.getClass(a);
                    if ("instance" == s.props.renderType) var h = n.instance || (n.instance = new n());
                    else h = new n();
                    if (!(h && h instanceof Se)) throw "Can not find scene:" + a;
                    h.url = t, h._getBit(Te.NOT_READY) ? (h.on("onViewCreated", null, function() {
                        e && e.runWith(h);
                    }), h.createView(s)) : e && e.runWith(h), Xi.hideLoadingPage();
                }), r.load(t);
            }
        }, {
            key: "open",
            value: function open(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                if (i instanceof T) {
                    var a = s;
                    s = i, i = a;
                }
                Xi.showLoadingPage(), Xi.load(t, T.create(null, this._onSceneLoaded, [e, s, i]), r);
            }
        }, {
            key: "_onSceneLoaded",
            value: function _onSceneLoaded(t, e, i, s) {
                s.open(t, i), e && e.runWith(s);
            }
        }, {
            key: "close",
            value: function close(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                for (var i = !1, s = Xi.unDestroyedScenes, r = 0, a = s.length; r < a; r++) {
                    var n = s[r];
                    n && n.parent && n.url === t && n.name == e && (n.close(), i = !0);
                }
                return i;
            }
        }, {
            key: "closeAll",
            value: function closeAll() {
                for (var t = Xi.root, e = 0, i = t.numChildren; e < i; e++) {
                    var s = t.getChildAt(0);
                    s instanceof Xi ? s.close() : s.removeSelf();
                }
            }
        }, {
            key: "destroy",
            value: function destroy(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                for (var i = !1, s = [].concat(Xi.unDestroyedScenes), r = 0, a = s.length; r < a; r++) {
                    var n = s[r];
                    n.url !== t || n.name != e || n.destroyed || (n.destroy(), i = !0);
                }
                return i;
            }
        }, {
            key: "gc",
            value: function gc() {
                C.destroyUnusedResources();
            }
        }, {
            key: "setLoadingPage",
            value: function setLoadingPage(t) {
                Xi._loadPage != t && (Xi._loadPage = t);
            }
        }, {
            key: "showLoadingPage",
            value: function showLoadingPage() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
                Xi._loadPage && (i.systemTimer.clear(null, Xi._showLoading), i.systemTimer.clear(null, Xi._hideLoading),
                    i.systemTimer.once(e, null, Xi._showLoading, [t], !1));
            }
        }, {
            key: "_showLoading",
            value: function _showLoading(t) {
                i.stage.addChild(Xi._loadPage), Xi._loadPage.onOpened(t);
            }
        }, {
            key: "_hideLoading",
            value: function _hideLoading() {
                Xi._loadPage.close();
            }
        }, {
            key: "hideLoadingPage",
            value: function hideLoadingPage() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
                Xi._loadPage && (i.systemTimer.clear(null, Xi._showLoading), i.systemTimer.clear(null, Xi._hideLoading),
                    i.systemTimer.once(t, null, Xi._hideLoading));
            }
        }, {
            key: "root",
            get: function get() {
                return Xi._root || (Xi._root = i.stage.addChild(new Me()), Xi._root.name = "root",
                    i.stage.on("resize", null, function() {
                        Xi._root.size(i.stage.width, i.stage.height), Xi._root.event(zt.RESIZE);
                    }), Xi._root.size(i.stage.width, i.stage.height), Xi._root.event(zt.RESIZE)), Xi._root;
            }
        }]);
        return Xi;
    }(Me);
    Xi.unDestroyedScenes = [], i.regClass(Xi), be.regClass("laya.display.Scene", Xi),
        be.regClass("Laya.Scene", Xi);
    var Hi = /* */ function() {
        function Hi() {
            _classCallCheck(this, Hi);
        }
        _createClass(Hi, [{
            key: "recover",
            value: function recover() {
                this._templ = null, s.recover("DrawParticleCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawParticle(e, i, this._templ);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return Hi.ID;
            }
        }], [{
            key: "create",
            value: function create(t) {
                var e = s.getItemByClass("DrawParticleCmd", Hi);
                return e._templ = t, e;
            }
        }]);
        return Hi;
    }();
    Hi.ID = "DrawParticleCmd";
    var zi = /* */ function() {
        function zi() {
            _classCallCheck(this, zi);
        }
        _createClass(zi, [{
            key: "paramChanged",
            value: function paramChanged() {
                Si.systemTimer.callLater(this, this.buildFilter);
            }
        }, {
            key: "buildFilter",
            value: function buildFilter() {
                this._target && this.addFilter(this._target);
            }
        }, {
            key: "addFilter",
            value: function addFilter(t) {
                var e;
                t && (t.filters ? (e = t.filters).indexOf(this._filter) < 0 && (e.push(this._filter),
                    t.filters = K.copyArray([], e)) : t.filters = [this._filter]);
            }
        }, {
            key: "removeFilter",
            value: function removeFilter(t) {
                t && (t.filters = null);
            }
        }, {
            key: "target",
            set: function set(t) {
                this._target != t && (this._target = t, this.paramChanged());
            }
        }]);
        return zi;
    }();
    var Ki = /* */ function() {
        function Ki() {
            _classCallCheck(this, Ki);
        }
        _createClass(Ki, [{
            key: "render",
            value: function render(t, e, i, s, r) {
                var a = V.create(U.TEXTURE2D, 0);
                this.setShaderInfo(a, r, t.width, t.height), e.drawTarget(t, 0, 0, i, s, p.EMPTY.identity(), a);
            }
        }, {
            key: "setShaderInfo",
            value: function setShaderInfo(t, e, i, s) {
                t.defines.add(z.BLUR);
                var r = t;
                Ki.blurinfo[0] = i, Ki.blurinfo[1] = s, r.blurInfo = Ki.blurinfo;
                var a = e.strength / 3,
                    n = a * a;
                e.strength_sig2_2sig2_gauss1[0] = e.strength, e.strength_sig2_2sig2_gauss1[1] = n,
                    e.strength_sig2_2sig2_gauss1[2] = 2 * n, e.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * n),
                    r.strength_sig2_2sig2_gauss1 = e.strength_sig2_2sig2_gauss1;
            }
        }]);
        return Ki;
    }();
    Ki.blurinfo = new Array(2);
    var ji = /* */ function(_z2) {
        _inherits(ji, _z2);

        function ji() {
            var _this48;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
            _classCallCheck(this, ji);
            _this48 = _possibleConstructorReturn(this, _getPrototypeOf(ji).call(this)), _this48.strength_sig2_2sig2_gauss1 = [],
                _this48.strength = t, _this48._glRender = new Ki();
            return _this48;
        }
        _createClass(ji, [{
            key: "getStrenth_sig2_2sig2_native",
            value: function getStrenth_sig2_2sig2_native() {
                this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
                var t = this.strength / 3,
                    e = t * t;
                return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = e,
                    this.strength_sig2_native[2] = 2 * e, this.strength_sig2_native[3] = 1 / (2 * Math.PI * e),
                    this.strength_sig2_native;
            }
        }, {
            key: "type",
            get: function get() {
                return z.BLUR;
            }
        }]);
        return ji;
    }(z);
    var qi = /* */ function(_ni2) {
        _inherits(qi, _ni2);

        function qi() {
            var _this49;
            _classCallCheck(this, qi);
            _this49 = _possibleConstructorReturn(this, _getPrototypeOf(qi).apply(this, arguments)),
                _this49.duration = 1e3, _this49.delay = 0, _this49.repeat = 0, _this49.autoDestroyAtComplete = !0;
            return _this49;
        }
        _createClass(qi, [{
            key: "_onAwake",
            value: function _onAwake() {
                this.target = this.target || this.owner, this.autoDestroyAtComplete && (this._comlete = T.create(this.target, this.target.destroy, null, !1)),
                    this.eventName ? this.owner.on(this.eventName, this, this._exeTween) : this._exeTween();
            }
        }, {
            key: "_exeTween",
            value: function _exeTween() {
                this._tween = this._doTween(), this._tween.repeat = this.repeat;
            }
        }, {
            key: "_doTween",
            value: function _doTween() {
                return null;
            }
        }, {
            key: "onReset",
            value: function onReset() {
                this.duration = 1e3, this.delay = 0, this.repeat = 0, this.ease = null, this.target = null,
                    this.eventName && (this.owner.off(this.eventName, this, this._exeTween), this.eventName = null),
                    this._comlete && (this._comlete.recover(), this._comlete = null), this._tween && (this._tween.clear(),
                        this._tween = null);
            }
        }]);
        return qi;
    }(ni);
    var Qi = /* */ function() {
        function Qi() {
            _classCallCheck(this, Qi);
        }
        _createClass(Qi, [{
            key: "setShaderInfo",
            value: function setShaderInfo(t, e, i, s) {
                t.defines.add(s.type);
                var r = t;
                r.u_blurInfo1 = s._sv_blurInfo1;
                var a = s._sv_blurInfo2;
                a[0] = e, a[1] = i, r.u_blurInfo2 = a, r.u_color = s.getColor();
            }
        }, {
            key: "render",
            value: function render(t, e, i, s, r) {
                var a = i,
                    n = s,
                    h = V.create(U.TEXTURE2D, 0);
                this.setShaderInfo(h, a, n, r);
                var o = V.create(U.TEXTURE2D, 0),
                    l = p.TEMP.identity();
                e.drawTarget(t, 0, 0, a, n, l, h), e.drawTarget(t, 0, 0, a, n, l, o);
            }
        }]);
        return Qi;
    }();
    var Zi = /* */ function(_z3) {
        _inherits(Zi, _z3);

        function Zi(t) {
            var _this50;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;
            _classCallCheck(this, Zi);
            _this50 = _possibleConstructorReturn(this, _getPrototypeOf(Zi).call(this)), _this50._elements = new Float32Array(9),
                _this50._sv_blurInfo1 = new Array(4), _this50._sv_blurInfo2 = [0, 0, 1, 0], _this50._color = new j(t),
                _this50.blur = Math.min(e, 20), _this50.offX = i, _this50.offY = s, _this50._sv_blurInfo1[0] = _this50._sv_blurInfo1[1] = _this50.blur,
                _this50._sv_blurInfo1[2] = i, _this50._sv_blurInfo1[3] = -s, _this50._glRender = new Qi();
            return _this50;
        }
        _createClass(Zi, [{
            key: "getColor",
            value: function getColor() {
                return this._color.arrColor;
            }
        }, {
            key: "getColorNative",
            value: function getColorNative() {
                this._color_native || (this._color_native = new Float32Array(4));
                var t = this.getColor();
                return this._color_native[0] = t[0], this._color_native[1] = t[1], this._color_native[2] = t[2],
                    this._color_native[3] = t[3], this._color_native;
            }
        }, {
            key: "getBlurInfo1Native",
            value: function getBlurInfo1Native() {
                return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)),
                    this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX,
                    this._blurInof1_native[3] = this.offY, this._blurInof1_native;
            }
        }, {
            key: "getBlurInfo2Native",
            value: function getBlurInfo2Native() {
                return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)),
                    this._blurInof2_native[2] = 1, this._blurInof2_native;
            }
        }, {
            key: "type",
            get: function get() {
                return ji.GLOW;
            }
        }, {
            key: "offY",
            get: function get() {
                return this._elements[6];
            },
            set: function set(t) {
                this._elements[6] = t, this._sv_blurInfo1[3] = -t;
            }
        }, {
            key: "offX",
            get: function get() {
                return this._elements[5];
            },
            set: function set(t) {
                this._elements[5] = t, this._sv_blurInfo1[2] = t;
            }
        }, {
            key: "blur",
            get: function get() {
                return this._elements[4];
            },
            set: function set(t) {
                this._elements[4] = t, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = t;
            }
        }]);
        return Zi;
    }(z);
    var $i = function $i() {
        _classCallCheck(this, $i);
    };
    $i.STANDARD = 0, $i.LEFT = 1, $i.RIGHT = 2, $i.NUM_PAD = 3;
    var Ji = function Ji() {
        _classCallCheck(this, Ji);
    };
    Ji.NUMBER_0 = 48, Ji.NUMBER_1 = 49, Ji.NUMBER_2 = 50, Ji.NUMBER_3 = 51, Ji.NUMBER_4 = 52,
        Ji.NUMBER_5 = 53, Ji.NUMBER_6 = 54, Ji.NUMBER_7 = 55, Ji.NUMBER_8 = 56, Ji.NUMBER_9 = 57,
        Ji.A = 65, Ji.B = 66, Ji.C = 67, Ji.D = 68, Ji.E = 69, Ji.F = 70, Ji.G = 71, Ji.H = 72,
        Ji.I = 73, Ji.J = 74, Ji.K = 75, Ji.L = 76, Ji.M = 77, Ji.N = 78, Ji.O = 79, Ji.P = 80,
        Ji.Q = 81, Ji.R = 82, Ji.S = 83, Ji.T = 84, Ji.U = 85, Ji.V = 86, Ji.W = 87, Ji.X = 88,
        Ji.Y = 89, Ji.Z = 90, Ji.F1 = 112, Ji.F2 = 113, Ji.F3 = 114, Ji.F4 = 115, Ji.F5 = 116,
        Ji.F6 = 117, Ji.F7 = 118, Ji.F8 = 119, Ji.F9 = 120, Ji.F10 = 121, Ji.F11 = 122,
        Ji.F12 = 123, Ji.F13 = 124, Ji.F14 = 125, Ji.F15 = 126, Ji.NUMPAD = 21, Ji.NUMPAD_0 = 96,
        Ji.NUMPAD_1 = 97, Ji.NUMPAD_2 = 98, Ji.NUMPAD_3 = 99, Ji.NUMPAD_4 = 100, Ji.NUMPAD_5 = 101,
        Ji.NUMPAD_6 = 102, Ji.NUMPAD_7 = 103, Ji.NUMPAD_8 = 104, Ji.NUMPAD_9 = 105, Ji.NUMPAD_ADD = 107,
        Ji.NUMPAD_DECIMAL = 110, Ji.NUMPAD_DIVIDE = 111, Ji.NUMPAD_ENTER = 108, Ji.NUMPAD_MULTIPLY = 106,
        Ji.NUMPAD_SUBTRACT = 109, Ji.SEMICOLON = 186, Ji.EQUAL = 187, Ji.COMMA = 188, Ji.MINUS = 189,
        Ji.PERIOD = 190, Ji.SLASH = 191, Ji.BACKQUOTE = 192, Ji.LEFTBRACKET = 219, Ji.BACKSLASH = 220,
        Ji.RIGHTBRACKET = 221, Ji.QUOTE = 222, Ji.ALTERNATE = 18, Ji.BACKSPACE = 8, Ji.CAPS_LOCK = 20,
        Ji.COMMAND = 15, Ji.CONTROL = 17, Ji.DELETE = 46, Ji.ENTER = 13, Ji.ESCAPE = 27,
        Ji.PAGE_UP = 33, Ji.PAGE_DOWN = 34, Ji.END = 35, Ji.HOME = 36, Ji.LEFT = 37, Ji.UP = 38,
        Ji.RIGHT = 39, Ji.DOWN = 40, Ji.SHIFT = 16, Ji.SPACE = 32, Ji.TAB = 9, Ji.INSERT = 45;
    var ts = /* */ function() {
        function ts() {
            _classCallCheck(this, ts);
        }
        _createClass(ts, [{
            key: "render",
            value: function render(t, e, i) {
                ts._addType(this._renderType), ts.showRenderTypeInfo(this._renderType), ye.renders[this._renderType]._fun(this, t, e + this._x, i + this._y),
                    this._repaint = 0;
            }
        }, {
            key: "_stageRender",
            value: function _stageRender(t, e, s) {
                ts._countStart(), ts._PreStageRender.call(i.stage, t, e, s), ts._countEnd();
            }
        }], [{
            key: "getMCDName",
            value: function getMCDName(t) {
                return ts._typeToNameDic[t];
            }
        }, {
            key: "showRenderTypeInfo",
            value: function showRenderTypeInfo(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (e || !ts.showedDic[t]) {
                    if (ts.showedDic[t] = !0, !ts._rendertypeToStrDic[t]) {
                        var i, s = [];
                        for (i = 1; i <= t;) {
                            i & t && s.push(ts.getMCDName(i & t)), i <<= 1;
                        }
                        ts._rendertypeToStrDic[t] = s.join(",");
                    }
                    console.log("cmd:", ts._rendertypeToStrDic[t]);
                }
            }
        }, {
            key: "__init__",
            value: function __init__() {
                ts._typeToNameDic[ce.ALPHA] = "ALPHA", ts._typeToNameDic[ce.TRANSFORM] = "TRANSFORM",
                    ts._typeToNameDic[ce.TEXTURE] = "TEXTURE", ts._typeToNameDic[ce.GRAPHICS] = "GRAPHICS",
                    ts._typeToNameDic[ce.ONECHILD] = "ONECHILD", ts._typeToNameDic[ce.CHILDS] = "CHILDS",
                    ts._typeToNameDic[ce.TRANSFORM | ce.ALPHA] = "TRANSFORM|ALPHA", ts._typeToNameDic[ce.CANVAS] = "CANVAS",
                    ts._typeToNameDic[ce.BLEND] = "BLEND", ts._typeToNameDic[ce.FILTERS] = "FILTERS",
                    ts._typeToNameDic[ce.MASK] = "MASK", ts._typeToNameDic[ce.CLIP] = "CLIP", ts._typeToNameDic[ce.LAYAGL3D] = "LAYAGL3D";
            }
        }, {
            key: "_countStart",
            value: function _countStart() {
                var t;
                for (t in ts._countDic) {
                    ts._countDic[t] = 0;
                }
            }
        }, {
            key: "_countEnd",
            value: function _countEnd() {
                ts._i++, ts._i > 60 && (ts.showCountInfo(), ts._i = 0);
            }
        }, {
            key: "_addType",
            value: function _addType(t) {
                ts._countDic[t] ? ts._countDic[t] += 1 : ts._countDic[t] = 1;
            }
        }, {
            key: "showCountInfo",
            value: function showCountInfo() {
                var t;
                for (t in console.log("==================="), ts._countDic) {
                    console.log("count:" + ts._countDic[t]), ts.showRenderTypeInfo(t, !0);
                }
            }
        }, {
            key: "enableQuickTest",
            value: function enableQuickTest() {
                ts.__init__(), Me.prototype.render = ts.prototype.render, ts._PreStageRender = Ue.prototype.render,
                    Ue.prototype.render = ts.prototype._stageRender;
            }
        }]);
        return ts;
    }();
    ts.showedDic = {}, ts._rendertypeToStrDic = {}, ts._typeToNameDic = {}, ts._countDic = {},
        ts._i = 0;
    var es = /* */ function() {
        function es() {
            _classCallCheck(this, es);
        }
        _createClass(es, null, [{
            key: "enable",
            value: function enable(t, e) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
                es.type = s, i.loader.load(t, T.create(null, es.onManifestLoaded, [e]), null, Qe.JSON);
            }
        }, {
            key: "onManifestLoaded",
            value: function onManifestLoaded(t, e) {
                es.manifest = e, E.customFormat = es.addVersionPrefix, t.run(), e || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
            }
        }, {
            key: "addVersionPrefix",
            value: function addVersionPrefix(t) {
                return t = E.getAdptedFilePath(t), es.manifest && es.manifest[t] ? es.type == es.FILENAME_VERSION ? es.manifest[t] : es.manifest[t] + "/" + t : t;
            }
        }]);
        return es;
    }();
    es.FOLDER_VERSION = 1, es.FILENAME_VERSION = 2, es.type = es.FOLDER_VERSION;
    var is = /* */ function(_x14) {
        _inherits(is, _x14);

        function is() {
            var _this51;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            _classCallCheck(this, is);
            _this51 = _possibleConstructorReturn(this, _getPrototypeOf(is).call(this)), _this51.disableInput = !1,
                _this51.protocols = [], _this51._byteClass = i || Ke, _this51.protocols = s, _this51.endian = is.BIG_ENDIAN,
                t && e > 0 && e < 65535 && _this51.connect(t, e);
            return _this51;
        }
        _createClass(is, [{
            key: "connect",
            value: function connect(t, e) {
                var i = "ws://" + t + ":" + e;
                this.connectByUrl(i);
            }
        }, {
            key: "connectByUrl",
            value: function connectByUrl(t) {
                var _this52 = this;
                null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new $t.window.WebSocket(t, this.protocols) : this._socket = new $t.window.WebSocket(t),
                    this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian,
                    this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0,
                    this._socket.onopen = function(t) {
                        _this52._onOpen(t);
                    }, this._socket.onmessage = function(t) {
                        _this52._onMessage(t);
                    }, this._socket.onclose = function(t) {
                        _this52._onClose(t);
                    }, this._socket.onerror = function(t) {
                        _this52._onError(t);
                    };
            }
        }, {
            key: "cleanSocket",
            value: function cleanSocket() {
                this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null,
                    this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
            }
        }, {
            key: "close",
            value: function close() {
                if (null != this._socket) try {
                    this._socket.close();
                } catch (t) {}
            }
        }, {
            key: "_onOpen",
            value: function _onOpen(t) {
                this._connected = !0, this.event(zt.OPEN, t);
            }
        }, {
            key: "_onMessage",
            value: function _onMessage(t) {
                if (t && t.data) {
                    var e = t.data;
                    if (this.disableInput && e) this.event(zt.MESSAGE, e);
                    else {
                        this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(),
                            this._addInputPosition = 0);
                        var i = this._input.pos;
                        !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition,
                            e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e),
                                this._addInputPosition = this._input.pos, this._input.pos = i), this.event(zt.MESSAGE, e);
                    }
                }
            }
        }, {
            key: "_onClose",
            value: function _onClose(t) {
                this._connected = !1, this.event(zt.CLOSE, t);
            }
        }, {
            key: "_onError",
            value: function _onError(t) {
                this.event(zt.ERROR, t);
            }
        }, {
            key: "send",
            value: function send(t) {
                this._socket.send(t);
            }
        }, {
            key: "flush",
            value: function flush() {
                if (this._output && this._output.length > 0) {
                    var t;
                    try {
                        this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                    } catch (e) {
                        t = e;
                    }
                    this._output.endian = this.endian, this._output.clear(), t && this.event(zt.ERROR, t);
                }
            }
        }, {
            key: "input",
            get: function get() {
                return this._input;
            }
        }, {
            key: "output",
            get: function get() {
                return this._output;
            }
        }, {
            key: "connected",
            get: function get() {
                return this._connected;
            }
        }, {
            key: "endian",
            get: function get() {
                return this._endian;
            },
            set: function set(t) {
                this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
            }
        }]);
        return is;
    }(x);
    is.LITTLE_ENDIAN = "littleEndian", is.BIG_ENDIAN = "bigEndian", (Li = t.TextureDecodeFormat || (t.TextureDecodeFormat = {}))[Li.Normal = 0] = "Normal",
        Li[Li.RGBM = 1] = "RGBM";
    var ss = /* */ function() {
        function ss() {
            _classCallCheck(this, ss);
            this.reset();
        }
        _createClass(ss, [{
            key: "setData",
            value: function setData(t, e, i, s) {
                return this["char"] = t, this.charNum = t.charCodeAt(0), this.x = this.y = 0, this.width = e,
                    this.height = i, this.style = s, this.isWord = !ss._isWordRegExp.test(t), this;
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this["char"] = null,
                    this.charNum = 0, this.style = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("HTMLChar", this.reset());
            }
        }, {
            key: "_isChar",
            value: function _isChar() {
                return !0;
            }
        }, {
            key: "_getCSSStyle",
            value: function _getCSSStyle() {
                return this.style;
            }
        }], [{
            key: "create",
            value: function create() {
                return s.getItemByClass("HTMLChar", ss);
            }
        }]);
        return ss;
    }();
    ss._isWordRegExp = new RegExp("[\\w.]", "");
    var rs = /* */ function() {
        function rs() {
            _classCallCheck(this, rs);
        }
        _createClass(rs, null, [{
            key: "enable",
            value: function enable() {
                rs._logdiv || (rs._logdiv = $t.createElement("div"), rs._logdiv.style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;",
                    $t.document.body.appendChild(rs._logdiv), rs._btn = $t.createElement("button"),
                    rs._btn.innerText = "Hide", rs._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;",
                    rs._btn.onclick = rs.toggle, $t.document.body.appendChild(rs._btn));
            }
        }, {
            key: "toggle",
            value: function toggle() {
                var t = rs._logdiv.style;
                "" === t.display ? (rs._btn.innerText = "Show", t.display = "none") : (rs._btn.innerText = "Hide",
                    t.display = "");
            }
        }, {
            key: "print",
            value: function print(t) {
                rs._logdiv && (rs._count >= rs.maxCount && rs.clear(), rs._count++, rs._logdiv.innerText += t + "\n",
                    rs.autoScrollToBottom && rs._logdiv.scrollHeight - rs._logdiv.scrollTop - rs._logdiv.clientHeight < 50 && (rs._logdiv.scrollTop = rs._logdiv.scrollHeight));
            }
        }, {
            key: "clear",
            value: function clear() {
                rs._logdiv.innerText = "", rs._count = 0;
            }
        }]);
        return rs;
    }();
    rs._count = 0, rs.maxCount = 50, rs.autoScrollToBottom = !0;
    var as = 300;
    var ns = /* */ function() {
        function ns(t, e, i, s) {
            _classCallCheck(this, ns);
            this.scale = 1, this.datas = new Array(as), this.datapos = 0, this.id = t, this.color = e,
                this.name = i, this.scale = s;
        }
        _createClass(ns, [{
            key: "addData",
            value: function addData(t) {
                this.datas[this.datapos] = t, this.datapos++, this.datapos %= as;
            }
        }]);
        return ns;
    }();
    var hs = /* */ function(_Me5) {
        _inherits(hs, _Me5);

        function hs() {
            var _this53;
            _classCallCheck(this, hs);
            _this53 = _possibleConstructorReturn(this, _getPrototypeOf(hs).call(this)), _this53.datas = [],
                _this53.xdata = new Array(hs.DATANUM), _this53.ydata = new Array(hs.DATANUM), _this53.hud_width = 800,
                _this53.hud_height = 200, _this53.gMinV = 0, _this53.gMaxV = 100, _this53.textSpace = 40,
                _this53.sttm = 0, hs.inst = _assertThisInitialized(_this53), _this53._renderType |= ce.CUSTOM,
                _this53._setRenderType(_this53._renderType), _this53._setCustomRender(), _this53.addDataDef(0, 16777215, "frame", 1),
                _this53.addDataDef(1, 65280, "update", 1), _this53.addDataDef(2, 16711680, "flush", 1),
                hs._now = performance ? performance.now.bind(performance) : Date.now;
            return _this53;
        }
        _createClass(hs, [{
            key: "now",
            value: function now() {
                return hs._now();
            }
        }, {
            key: "start",
            value: function start() {
                this.sttm = hs._now();
            }
        }, {
            key: "end",
            value: function end(t) {
                var e = hs._now() - this.sttm;
                this.updateValue(t, e);
            }
        }, {
            key: "config",
            value: function config(t, e) {
                this.hud_width = t, this.hud_height = e;
            }
        }, {
            key: "addDataDef",
            value: function addDataDef(t, e, i, s) {
                this.datas[t] = new ns(t, e, i, s);
            }
        }, {
            key: "updateValue",
            value: function updateValue(t, e) {
                this.datas[t].addData(e);
            }
        }, {
            key: "v2y",
            value: function v2y(t) {
                this._y, this.hud_height, this.gMinV, this.gMaxV;
                return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
            }
        }, {
            key: "drawHLine",
            value: function drawHLine(t, e, i, s) {
                var r = this._x,
                    a = (this._x, this.hud_width, this.v2y(e));
                t.fillText(s, r, a - 6, null, "green", null), r += this.textSpace, t.fillStyle = i,
                    t.fillRect(r, a, this._x + this.hud_width, 1, null);
            }
        }, {
            key: "customRender",
            value: function customRender(t, e, i) {
                var s = performance.now();
                hs._lastTm <= 0 && (hs._lastTm = s), this.updateValue(0, s - hs._lastTm), hs._lastTm = s,
                    t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"),
                    t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"),
                    this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"),
                    this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""),
                    this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"),
                    this.drawHLine(t, 100, "green", "10|100");
                for (var r = 0, a = this.datas.length; r < a; r++) {
                    var n = this.datas[r];
                    if (n) {
                        var h = n.datas.length,
                            o = (this.hud_width - this.textSpace) / h,
                            l = n.datapos,
                            _ = this._x + this.textSpace;
                        t.fillStyle = n.color;
                        for (var c = h; l < c; l++) {
                            var u = this.v2y(n.datas[l] * n.scale);
                            t.fillRect(_, u, o, this.hud_height + this._y - u, null), _ += o;
                        }
                        for (l = 0; l < n.datapos; l++) {
                            u = this.v2y(n.datas[l] * n.scale), t.fillRect(_, u, o, this.hud_height + this._y - u, null),
                                _ += o;
                        }
                    }
                }
                t.restore();
            }
        }]);
        return hs;
    }(Me);
    hs._lastTm = 0, hs._now = null, hs.DATANUM = 300, hs.drawTexTm = 0;
    var os = /* */ function() {
        function os() {
            _classCallCheck(this, os);
            this.maxCount = 1e3;
        }
        _createClass(os, [{
            key: "getCacheList",
            value: function getCacheList() {
                return s.getPoolBySign(this.sign);
            }
        }, {
            key: "tryDispose",
            value: function tryDispose(t) {
                var e;
                (e = s.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount);
            }
        }], [{
            key: "addPoolCacheManager",
            value: function addPoolCacheManager(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                var i;
                (i = new os()).sign = t, i.maxCount = e, ge.regCacheByFunction(K.bind(i.tryDispose, i), K.bind(i.getCacheList, i));
            }
        }]);
        return os;
    }();
    var ls = /* */ function(_x15) {
        _inherits(ls, _x15);

        function ls() {
            var _this54;
            _classCallCheck(this, ls);
            _this54 = _possibleConstructorReturn(this, _getPrototypeOf(ls).apply(this, arguments)),
                _this54._tweenDic = {}, _this54._tweenDataList = [], _this54._currTime = 0, _this54._lastTime = 0,
                _this54._startTime = 0, _this54._index = 0, _this54._gidIndex = 0, _this54._firstTweenDic = {},
                _this54._startTimeSort = !1, _this54._endTimeSort = !1, _this54._loopKey = !1, _this54.scale = 1,
                _this54._frameRate = 60, _this54._frameIndex = 0, _this54._total = 0;
            return _this54;
        }
        _createClass(ls, [{
            key: "to",
            value: function to(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return this._create(t, e, i, s, r, !0);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return this._create(t, e, i, s, r, !1);
            }
        }, {
            key: "_create",
            value: function _create(t, e, i, r, a, n) {
                var h = s.getItemByClass("tweenData", _s);
                return h.isTo = n, h.type = 0, h.target = t, h.duration = i, h.data = e, h.startTime = this._startTime + a,
                    h.endTime = h.startTime + h.duration, h.ease = r, this._startTime = Math.max(h.endTime, this._startTime),
                    this._tweenDataList.push(h), this._startTimeSort = !0, this._endTimeSort = !0, this;
            }
        }, {
            key: "addLabel",
            value: function addLabel(t, e) {
                var i = s.getItemByClass("tweenData", _s);
                return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}),
                    this._labelDic[t] = i, this._tweenDataList.push(i), this;
            }
        }, {
            key: "removeLabel",
            value: function removeLabel(t) {
                if (this._labelDic && this._labelDic[t]) {
                    var e = this._labelDic[t];
                    if (e) {
                        var i = this._tweenDataList.indexOf(e);
                        i > -1 && this._tweenDataList.splice(i, 1);
                    }
                    delete this._labelDic[t];
                }
            }
        }, {
            key: "gotoTime",
            value: function gotoTime(t) {
                if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                    var e, i, r, a;
                    for (var n in this._firstTweenDic) {
                        if (i = this._firstTweenDic[n])
                            for (var h in i) {
                                h in i.diyTarget && (i.diyTarget[h] = i[h]);
                            }
                    }
                    for (n in this._tweenDic) {
                        (e = this._tweenDic[n]).clear(), delete this._tweenDic[n];
                    }
                    if (this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = $t.now(),
                        null == this._endTweenDataList || this._endTimeSort) {
                        this._endTimeSort = !1, this._endTweenDataList = r = this._tweenDataList.concat(),
                            r.sort(function(t, e) {
                                return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
                            });
                    } else r = this._endTweenDataList;
                    for (var o = 0, l = r.length; o < l; o++) {
                        if (0 == (a = r[o]).type) {
                            if (!(t >= a.endTime)) break;
                            this._index = Math.max(this._index, o + 1);
                            var _ = a.data;
                            if (a.isTo)
                                for (var c in _) {
                                    a.target[c] = _[c];
                                }
                        }
                    }
                    for (o = 0, l = this._tweenDataList.length; o < l; o++) {
                        0 == (a = this._tweenDataList[o]).type && t >= a.startTime && t < a.endTime && (this._index = Math.max(this._index, o + 1),
                            this._gidIndex++, (e = s.getItemByClass("tween", ri))._create(a.target, a.data, a.duration, a.ease, T.create(this, this._animComplete, [this._gidIndex]), 0, !1, a.isTo, !0, !1),
                            e.setStartTime(this._currTime - (t - a.startTime)), e._updateEase(this._currTime),
                            e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e);
                    }
                }
            }
        }, {
            key: "gotoLabel",
            value: function gotoLabel(t) {
                if (null != this._labelDic) {
                    var e = this._labelDic[t];
                    e && this.gotoTime(e.startTime);
                }
            }
        }, {
            key: "pause",
            value: function pause() {
                i.timer.clear(this, this._update);
            }
        }, {
            key: "resume",
            value: function resume() {
                this.play(this._currTime, this._loopKey);
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (this._tweenDataList) {
                    if (this._startTimeSort) {
                        this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                            return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
                        });
                        for (var s = 0, r = this._tweenDataList.length; s < r; s++) {
                            var a = this._tweenDataList[s];
                            if (null != a && 0 == a.type) {
                                var n = a.target,
                                    h = n.$_GID || (n.$_GID = K.getGID()),
                                    o = null;
                                for (var l in null == this._firstTweenDic[h] ? ((o = {}).diyTarget = n, this._firstTweenDic[h] = o) : o = this._firstTweenDic[h],
                                        a.data) {
                                    null == o[l] && (o[l] = n[l]);
                                }
                            }
                        }
                    }
                    "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e,
                        this._lastTime = $t.now(), i.timer.frameLoop(1, this, this._update);
                }
            }
        }, {
            key: "_update",
            value: function _update() {
                if (this._currTime >= this._startTime) {
                    if (!this._loopKey) {
                        for (var t in this._tweenDic) {
                            (e = this._tweenDic[t]).complete();
                        }
                        return this.pause(), void this._complete();
                    }
                    if (this._complete(), !this._tweenDataList) return;
                    this.gotoTime(0);
                }
                var e, i = $t.now(),
                    r = i - this._lastTime,
                    a = this._currTime += r * this.scale;
                for (t in this._lastTime = i, this._tweenDic) {
                    (e = this._tweenDic[t])._updateEase(a);
                }
                if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                    var n = this._tweenDataList[this._index];
                    a >= n.startTime && (this._index++, 0 == n.type ? (this._gidIndex++, (e = s.getItemByClass("tween", ri))._create(n.target, n.data, n.duration, n.ease, T.create(this, this._animComplete, [this._gidIndex]), 0, !1, n.isTo, !0, !1),
                        e.setStartTime(a), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e, e._updateEase(a)) : this.event(zt.LABEL, n.data));
                }
            }
        }, {
            key: "_animComplete",
            value: function _animComplete(t) {
                this._tweenDic[t] && delete this._tweenDic[t];
            }
        }, {
            key: "_complete",
            value: function _complete() {
                this.event(zt.COMPLETE);
            }
        }, {
            key: "reset",
            value: function reset() {
                var t, e, s;
                if (this._labelDic)
                    for (t in this._labelDic) {
                        delete this._labelDic[t];
                    }
                for (t in this._tweenDic) {
                    this._tweenDic[t].clear(), delete this._tweenDic[t];
                }
                for (t in this._firstTweenDic) {
                    delete this._firstTweenDic[t];
                }
                if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length)
                    for (s = this._tweenDataList.length,
                        e = 0; e < s; e++) {
                        this._tweenDataList[e] && this._tweenDataList[e].destroy();
                    }
                this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0,
                    this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null,
                    this._firstTweenDic = null;
            }
        }, {
            key: "index",
            get: function get() {
                return this._frameIndex;
            },
            set: function set(t) {
                this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
            }
        }, {
            key: "total",
            get: function get() {
                return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
            }
        }], [{
            key: "to",
            value: function to(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return new ls().to(t, e, i, s, r);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return new ls().from(t, e, i, s, r);
            }
        }]);
        return ls;
    }(x);
    var _s = /* */ function() {
        function _s() {
            _classCallCheck(this, _s);
            this.type = 0, this.isTo = !0;
        }
        _createClass(_s, [{
            key: "destroy",
            value: function destroy() {
                this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0,
                    s.recover("tweenData", this);
            }
        }]);
        return _s;
    }();
    var cs = /* */ function() {
        function cs() {
            _classCallCheck(this, cs);
        }
        _createClass(cs, [{
            key: "characterMapContains",
            value: function characterMapContains(t) {
                for (var e = 0; e < cs.charsMap.length; ++e) {
                    if (cs.charsMap[e][0] === t) return !0;
                }
                return !1;
            }
        }, {
            key: "getCharRep",
            value: function getCharRep(t) {
                for (var e = 0; e < cs.charsMap.length; ++e) {
                    if (cs.charsMap[e][0] === t) return cs.charsMap[e];
                }
                return !1;
            }
        }, {
            key: "getCombCharRep",
            value: function getCombCharRep(t, e) {
                for (var i = 0; i < cs.combCharsMap.length; ++i) {
                    if (cs.combCharsMap[i][0][0] === t && cs.combCharsMap[i][0][1] === e) return cs.combCharsMap[i];
                }
                return !1;
            }
        }, {
            key: "isTransparent",
            value: function isTransparent(t) {
                for (var e = 0; e < cs.transChars.length; ++e) {
                    if (cs.transChars[e] === t) return !0;
                }
                return !1;
            }
        }, {
            key: "getOriginalCharsFromCode",
            value: function getOriginalCharsFromCode(t) {
                var e;
                for (e = 0; e < cs.charsMap.length; ++e) {
                    if (cs.charsMap[e].indexOf(t) > -1) return String.fromCharCode(cs.charsMap[e][0]);
                }
                for (e = 0; e < cs.combCharsMap.length; ++e) {
                    if (cs.combCharsMap[e].indexOf(t) > -1) return String.fromCharCode(cs.combCharsMap[e][0][0]) + String.fromCharCode(cs.combCharsMap[e][0][1]);
                }
                return String.fromCharCode(t);
            }
        }, {
            key: "convertArabic",
            value: function convertArabic(t) {
                for (var e, i, s = "", r = 0; r < t.length; ++r) {
                    var a = t.charCodeAt(r);
                    if (this.characterMapContains(a)) {
                        for (var n = null, h = null, o = r - 1, l = r + 1; o >= 0 && this.isTransparent(t.charCodeAt(o)); --o) {}
                        for ((!(e = !!(n = o >= 0 ? t.charCodeAt(o) : null) && this.getCharRep(n)) || null == e[2] && null == e[3]) && (n = null); l < t.length && this.isTransparent(t.charCodeAt(l)); ++l) {}
                        if ((!(e = !!(h = l < t.length ? t.charCodeAt(l) : null) && this.getCharRep(h)) || null == e[3] && null == e[4]) && (h = null),
                            1604 === a && null != h && (1570 === h || 1571 === h || 1573 === h || 1575 === h)) {
                            i = this.getCombCharRep(a, h), s += null != n ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]),
                                ++r;
                            continue;
                        }
                        if (e = this.getCharRep(a), null != n && null != h && null != e[3]) {
                            s += String.fromCharCode(e[3]);
                            continue;
                        }
                        if (null != n && null != e[4]) {
                            s += String.fromCharCode(e[4]);
                            continue;
                        }
                        if (null != h && null != e[2]) {
                            s += String.fromCharCode(e[2]);
                            continue;
                        }
                        s += String.fromCharCode(e[1]);
                    } else s += String.fromCharCode(a);
                }
                return s;
            }
        }, {
            key: "convertArabicBack",
            value: function convertArabicBack(t) {
                var e, i, s = "";
                for (i = 0; i < t.length; ++i) {
                    e = t.charCodeAt(i), s += this.getOriginalCharsFromCode(e);
                }
                return s;
            }
        }]);
        return cs;
    }();
    cs.charsMap = [
            [1569, 65152, null, null, null],
            [1570, 65153, null, null, 65154],
            [1571, 65155, null, null, 65156],
            [1572, 65157, null, null, 65158],
            [1573, 65159, null, null, 65160],
            [1574, 65161, 65163, 65164, 65162],
            [1575, 65165, null, null, 65166],
            [1576, 65167, 65169, 65170, 65168],
            [1577, 65171, null, null, 65172],
            [1578, 65173, 65175, 65176, 65174],
            [1579, 65177, 65179, 65180, 65178],
            [1580, 65181, 65183, 65184, 65182],
            [1581, 65185, 65187, 65188, 65186],
            [1582, 65189, 65191, 65192, 65190],
            [1583, 65193, null, null, 65194],
            [1584, 65195, null, null, 65196],
            [1585, 65197, null, null, 65198],
            [1586, 65199, null, null, 65200],
            [1587, 65201, 65203, 65204, 65202],
            [1588, 65205, 65207, 65208, 65206],
            [1589, 65209, 65211, 65212, 65210],
            [1590, 65213, 65215, 65216, 65214],
            [1591, 65217, 65219, 65220, 65218],
            [1592, 65221, 65223, 65224, 65222],
            [1593, 65225, 65227, 65228, 65226],
            [1594, 65229, 65231, 65232, 65230],
            [1600, 1600, 1600, 1600, 1600],
            [1601, 65233, 65235, 65236, 65234],
            [1602, 65237, 65239, 65240, 65238],
            [1603, 65241, 65243, 65244, 65242],
            [1604, 65245, 65247, 65248, 65246],
            [1605, 65249, 65251, 65252, 65250],
            [1606, 65253, 65255, 65256, 65254],
            [1607, 65257, 65259, 65260, 65258],
            [1608, 65261, null, null, 65262],
            [1609, 65263, null, null, 65264],
            [1610, 65265, 65267, 65268, 65266],
            [1662, 64342, 64344, 64345, 64343],
            [1740, 64508, 64510, 64511, 64509],
            [1670, 64378, 64380, 64381, 64379],
            [1705, 64398, 64400, 64401, 64399],
            [1711, 64402, 64404, 64405, 64403],
            [1688, 64394, null, null, 64395]
        ],
        cs.combCharsMap = [
            [
                [1604, 1570], 65269, null, null, 65270
            ],
            [
                [1604, 1571], 65271, null, null, 65272
            ],
            [
                [1604, 1573], 65273, null, null, 65274
            ],
            [
                [1604, 1575], 65275, null, null, 65276
            ]
        ],
        cs.transChars = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773];
    var us = /* */ function() {
        function us() {
            _classCallCheck(this, us);
        }
        _createClass(us, null, [{
            key: "ArrayMul",
            value: function ArrayMul(t, e, i) {
                if (t) {
                    if (e)
                        for (var s, r, a, n, h = 0; h < 4; h++) {
                            s = t[h], r = t[h + 4], a = t[h + 8], n = t[h + 12], i[h] = s * e[0] + r * e[1] + a * e[2] + n * e[3],
                                i[h + 4] = s * e[4] + r * e[5] + a * e[6] + n * e[7], i[h + 8] = s * e[8] + r * e[9] + a * e[10] + n * e[11],
                                i[h + 12] = s * e[12] + r * e[13] + a * e[14] + n * e[15];
                        } else us.copyArray(t, i);
                } else us.copyArray(e, i);
            }
        }, {
            key: "copyArray",
            value: function copyArray(t, e) {
                if (t && e)
                    for (var i = 0; i < t.length; i++) {
                        e[i] = t[i];
                    }
            }
        }]);
        return us;
    }();
    return t.AlphaCmd = r, t.Animation = Wi, t.AnimationBase = hi, t.ArabicReshaper = cs,
        t.AtlasGrid = Vt, t.AtlasInfoManager = Ze, t.AudioSound = Ye, t.AudioSoundChannel = We,
        t.BasePoly = Bt, t.BaseShader = L, t.BaseTexture = I, t.Bezier = st, t.Bitmap = b,
        t.BitmapFont = je, t.BlendMode = O, t.BlurFilter = ji, t.BlurFilterGLRender = Ki,
        t.BlurFilterSetter = /* */ function(_zi) {
            _inherits(_class, _zi);

            function _class() {
                var _this55;
                _classCallCheck(this, _class);
                _this55 = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this)),
                    _this55._strength = 4, _this55._filter = new ji(_this55.strength);
                return _this55;
            }
            _createClass(_class, [{
                key: "buildFilter",
                value: function buildFilter() {
                    this._filter = new ji(this.strength), _get(_getPrototypeOf(_class.prototype), "buildFilter", this).call(this);
                }
            }, {
                key: "strength",
                get: function get() {
                    return this._strength;
                },
                set: function set(t) {
                    this._strength = t;
                }
            }]);
            return _class;
        }(zi), t.BoundsStyle = Ae, t.Browser = $t, t.Buffer = gt, t.Buffer2D = vt, t.BufferState2D = ft,
        t.BufferStateBase = pt, t.ButtonEffect = /* */ function() {
            function _class2() {
                _classCallCheck(this, _class2);
                this._curState = 0, this.effectScale = 1.5, this.tweenTime = 300;
            }
            _createClass(_class2, [{
                key: "toChangedState",
                value: function toChangedState() {
                    this._curState = 1, this._curTween && ri.clear(this._curTween), this._curTween = ri.to(this._tar, {
                        scaleX: this.effectScale,
                        scaleY: this.effectScale
                    }, this.tweenTime, si[this.effectEase], T.create(this, this.tweenComplete));
                }
            }, {
                key: "toInitState",
                value: function toInitState() {
                    2 != this._curState && (this._curTween && ri.clear(this._curTween), this._curState = 2,
                        this._curTween = ri.to(this._tar, {
                            scaleX: 1,
                            scaleY: 1
                        }, this.tweenTime, si[this.backEase], T.create(this, this.tweenComplete)));
                }
            }, {
                key: "tweenComplete",
                value: function tweenComplete() {
                    this._curState = 0, this._curTween = null;
                }
            }, {
                key: "target",
                set: function set(t) {
                    this._tar = t, t.on(zt.MOUSE_DOWN, this, this.toChangedState), t.on(zt.MOUSE_UP, this, this.toInitState),
                        t.on(zt.MOUSE_OUT, this, this.toInitState);
                }
            }]);
            return _class2;
        }(), t.Byte = Ke, t.CONST3D2D = Nt, t.CacheManger = ge, t.CacheStyle = Re, t.CallLater = Fe,
        t.CharRenderInfo = Qt, t.CharRender_Canvas = Jt, t.CharRender_Native = te, t.CharSubmitCache = Yt,
        t.ClassUtils = be, t.ClipRectCmd = ue, t.ColorFilter = q, t.ColorFilterSetter = /* */ function(_zi2) {
            _inherits(_class3, _zi2);

            function _class3() {
                var _this56;
                _classCallCheck(this, _class3);
                _this56 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this)),
                    _this56._brightness = 0, _this56._contrast = 0, _this56._saturation = 0, _this56._hue = 0,
                    _this56._red = 0, _this56._green = 0, _this56._blue = 0, _this56._alpha = 0, _this56._filter = new q();
                return _this56;
            }
            _createClass(_class3, [{
                key: "buildFilter",
                value: function buildFilter() {
                    this._filter.reset(), this._filter.color(this.red, this.green, this.blue, this.alpha),
                        this._filter.adjustHue(this.hue), this._filter.adjustContrast(this.contrast), this._filter.adjustBrightness(this.brightness),
                        this._filter.adjustSaturation(this.saturation), _get(_getPrototypeOf(_class3.prototype), "buildFilter", this).call(this);
                }
            }, {
                key: "brightness",
                get: function get() {
                    return this._brightness;
                },
                set: function set(t) {
                    this._brightness = t, this.paramChanged();
                }
            }, {
                key: "contrast",
                get: function get() {
                    return this._contrast;
                },
                set: function set(t) {
                    this._contrast = t, this.paramChanged();
                }
            }, {
                key: "saturation",
                get: function get() {
                    return this._saturation;
                },
                set: function set(t) {
                    this._saturation = t, this.paramChanged();
                }
            }, {
                key: "hue",
                get: function get() {
                    return this._hue;
                },
                set: function set(t) {
                    this._hue = t, this.paramChanged();
                }
            }, {
                key: "red",
                get: function get() {
                    return this._red;
                },
                set: function set(t) {
                    this._red = t, this.paramChanged();
                }
            }, {
                key: "green",
                get: function get() {
                    return this._green;
                },
                set: function set(t) {
                    this._green = t, this.paramChanged();
                }
            }, {
                key: "blue",
                get: function get() {
                    return this._blue;
                },
                set: function set(t) {
                    this._blue = t, this.paramChanged();
                }
            }, {
                key: "color",
                get: function get() {
                    return this._color;
                },
                set: function set(t) {
                    var e;
                    this._color = t, e = j.create(t), this._red = 255 * e.arrColor[0], this._green = 255 * e.arrColor[1],
                        this._blue = 255 * e.arrColor[2], this.paramChanged();
                }
            }, {
                key: "alpha",
                get: function get() {
                    return this._alpha;
                },
                set: function set(t) {
                    this._alpha = t, this.paramChanged();
                }
            }]);
            return _class3;
        }(zi), t.ColorUtils = j, t.CommandEncoder = /* */ function() {
            function _class4(t, e, i, s) {
                _classCallCheck(this, _class4);
                this._idata = [];
            }
            _createClass(_class4, [{
                key: "getArrayData",
                value: function getArrayData() {
                    return this._idata;
                }
            }, {
                key: "getPtrID",
                value: function getPtrID() {
                    return 0;
                }
            }, {
                key: "beginEncoding",
                value: function beginEncoding() {}
            }, {
                key: "endEncoding",
                value: function endEncoding() {}
            }, {
                key: "clearEncoding",
                value: function clearEncoding() {
                    this._idata.length = 0;
                }
            }, {
                key: "getCount",
                value: function getCount() {
                    return this._idata.length;
                }
            }, {
                key: "add_ShaderValue",
                value: function add_ShaderValue(t) {
                    this._idata.push(t);
                }
            }, {
                key: "addShaderUniform",
                value: function addShaderUniform(t) {
                    this.add_ShaderValue(t);
                }
            }]);
            return _class4;
        }(), t.CommonScript = /* */ function(_ni3) {
            _inherits(_class5, _ni3);
            _createClass(_class5, [{
                key: "isSingleton",
                get: function get() {
                    return !1;
                }
            }]);

            function _class5() {
                _classCallCheck(this, _class5);
                return _possibleConstructorReturn(this, _getPrototypeOf(_class5).call(this));
            }
            _createClass(_class5, [{
                key: "onAwake",
                value: function onAwake() {}
            }, {
                key: "onEnable",
                value: function onEnable() {}
            }, {
                key: "onStart",
                value: function onStart() {}
            }, {
                key: "onUpdate",
                value: function onUpdate() {}
            }, {
                key: "onLateUpdate",
                value: function onLateUpdate() {}
            }, {
                key: "onDisable",
                value: function onDisable() {}
            }, {
                key: "onDestroy",
                value: function onDestroy() {}
            }]);
            return _class5;
        }(ni), t.Component = ni, t.Config = e, t.Const = Te, t.Context = ie, t.Dragging = ai,
        t.Draw9GridTexture = le, t.DrawCircleCmd = a, t.DrawCurvesCmd = n, t.DrawImageCmd = h,
        t.DrawLineCmd = o, t.DrawLinesCmd = l, t.DrawParticleCmd = Hi, t.DrawPathCmd = _,
        t.DrawPieCmd = c, t.DrawPolyCmd = u, t.DrawRectCmd = d, t.DrawStyle = at, t.DrawTextureCmd = Q,
        t.DrawTexturesCmd = de, t.DrawTrianglesCmd = oe, t.Earcut = Ot, t.EarcutNode = Ft,
        t.Ease = si, t.EffectAnimation = Yi, t.EffectBase = qi, t.Event = zt, t.EventDispatcher = x,
        t.FadeIn = /* */ function(_qi) {
            _inherits(_class6, _qi);

            function _class6() {
                _classCallCheck(this, _class6);
                return _possibleConstructorReturn(this, _getPrototypeOf(_class6).apply(this, arguments));
            }
            _createClass(_class6, [{
                key: "_doTween",
                value: function _doTween() {
                    return this.target.alpha = 0, ri.to(this.target, {
                        alpha: 1
                    }, this.duration, si[this.ease], this._comlete, this.delay);
                }
            }]);
            return _class6;
        }(qi), t.FadeOut = /* */ function(_qi2) {
            _inherits(_class7, _qi2);

            function _class7() {
                _classCallCheck(this, _class7);
                return _possibleConstructorReturn(this, _getPrototypeOf(_class7).apply(this, arguments));
            }
            _createClass(_class7, [{
                key: "_doTween",
                value: function _doTween() {
                    return this.target.alpha = 1, ri.to(this.target, {
                        alpha: 0
                    }, this.duration, si[this.ease], this._comlete, this.delay);
                }
            }]);
            return _class7;
        }(qi), t.FillTextCmd = pe, t.FillTextureCmd = Z, t.Filter = z, t.FilterSetterBase = zi,
        t.FontInfo = jt, t.FrameAnimation = li, t.GlowFilter = Zi, t.GlowFilterGLRender = Qi,
        t.GlowFilterSetter = /* */ function(_zi3) {
            _inherits(_class8, _zi3);

            function _class8() {
                var _this57;
                _classCallCheck(this, _class8);
                _this57 = _possibleConstructorReturn(this, _getPrototypeOf(_class8).call(this)),
                    _this57._color = "#ff0000", _this57._blur = 4, _this57._offX = 6, _this57._offY = 6,
                    _this57._filter = new Zi(_this57._color);
                return _this57;
            }
            _createClass(_class8, [{
                key: "buildFilter",
                value: function buildFilter() {
                    this._filter = new Zi(this.color, this.blur, this.offX, this.offY), _get(_getPrototypeOf(_class8.prototype), "buildFilter", this).call(this);
                }
            }, {
                key: "color",
                get: function get() {
                    return this._color;
                },
                set: function set(t) {
                    this._color = t, this.paramChanged();
                }
            }, {
                key: "blur",
                get: function get() {
                    return this._blur;
                },
                set: function set(t) {
                    this._blur = t, this.paramChanged();
                }
            }, {
                key: "offX",
                get: function get() {
                    return this._offX;
                },
                set: function set(t) {
                    this._offX = t, this.paramChanged();
                }
            }, {
                key: "offY",
                get: function get() {
                    return this._offY;
                },
                set: function set(t) {
                    this._offY = t, this.paramChanged();
                }
            }]);
            return _class8;
        }(zi), t.GrahamScan = rt, t.GraphicAnimation = Gi, t.Graphics = ve, t.GraphicsBounds = _e,
        t.HTMLCanvas = Ee, t.HTMLChar = ss, t.HTMLImage = wi, t.Handler = T, t.HitArea = Ce,
        t.HttpRequest = qe, t.ICharRender = Zt, t.ILaya = i, t.IStatRender = pi, t.IndexBuffer2D = Tt,
        t.InlcudeFile = yi, t.Input = Le, t.KeyBoardManager = Ge, t.KeyLocation = $i, t.Keyboard = Ji,
        t.Laya = Si, t.LayaGL = m, t.LayaGLQuickRunner = xe, t.LayaGLRunner = /* */ function() {
            function _class9() {
                _classCallCheck(this, _class9);
            }
            _createClass(_class9, null, [{
                key: "uploadShaderUniforms",
                value: function uploadShaderUniforms(t, e, i, s) {
                    for (var r = i._data, a = e.getArrayData(), n = 0, h = 0, o = a.length; h < o; h++) {
                        var l = a[h];
                        if (s || -1 !== l.textureID) {
                            var _ = r[l.dataOffset];
                            null != _ && (n += l.fun.call(l.caller, l, _));
                        }
                    }
                    return n;
                }
            }, {
                key: "uploadCustomUniform",
                value: function uploadCustomUniform(t, e, i, s) {
                    var r = 0,
                        a = e[i];
                    return a && null != s && (r += a.fun.call(a.caller, a, s)), r;
                }
            }, {
                key: "uploadShaderUniformsForNative",
                value: function uploadShaderUniformsForNative(t, e, i) {
                    var s = m.UPLOAD_SHADER_UNIFORM_TYPE_ID;
                    i._runtimeCopyValues.length > 0 && (s = m.UPLOAD_SHADER_UNIFORM_TYPE_DATA);
                    var r = i._data;
                    return m.instance.uploadShaderUniforms(e, r, s);
                }
            }]);
            return _class9;
        }(), t.LayaGPU = ne, t.Loader = Qe, t.LoaderManager = $e, t.LocalStorage = ti, t.Log = rs,
        t.MathUtil = oi, t.MatirxArray = us, t.Matrix = p, t.Mesh2D = yt, t.MeshParticle2D = Ri,
        t.MeshQuadTexture = Et, t.MeshTexture = Ct, t.MeshVG = bt, t.Mouse = Ai, t.MouseManager = Be,
        t.Node = Se, t.Path = nt, t.PerfData = ns, t.PerfHUD = hs, t.Point = f, t.Pool = s,
        t.PoolCache = os, t.Prefab = ze, t.PrimitiveSV = Ti, t.QuickTestTool = ts, t.Rectangle = g,
        t.Render = he, t.RenderInfo = mt, t.RenderSprite = ye, t.RenderState2D = D, t.RenderTexture2D = B,
        t.Resource = C, t.ResourceVersion = es, t.RestoreCmd = $, t.RotateCmd = J, t.RunDriver = Ne,
        t.SaveBase = lt, t.SaveClipRect = _t, t.SaveCmd = fe, t.SaveMark = ct, t.SaveTransform = ut,
        t.SaveTranslate = dt, t.ScaleCmd = tt, t.Scene = Xi, t.SceneLoader = Vi, t.SceneUtils = ci,
        t.Script = Ui, t.Shader = W, t.Shader2D = Lt, t.Shader2X = Y, t.ShaderCompile = Ci,
        t.ShaderDefines2D = U, t.ShaderDefinesBase = N, t.ShaderNode = Ei, t.ShaderValue = /* */ function() {
            function _class10() {
                _classCallCheck(this, _class10);
            }
            return _class10;
        }(), t.SkinMeshBuffer = Dt, t.SkinSV = vi, t.Socket = is, t.Sound = /* */ function(_x16) {
            _inherits(_class11, _x16);

            function _class11() {
                _classCallCheck(this, _class11);
                return _possibleConstructorReturn(this, _getPrototypeOf(_class11).apply(this, arguments));
            }
            _createClass(_class11, [{
                key: "load",
                value: function load(t) {}
            }, {
                key: "play",
                value: function play() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    return null;
                }
            }, {
                key: "dispose",
                value: function dispose() {}
            }, {
                key: "duration",
                get: function get() {
                    return 0;
                }
            }]);
            return _class11;
        }(x), t.SoundChannel = ke, t.SoundManager = He, t.SoundNode = /* */ function(_Me6) {
            _inherits(_class12, _Me6);

            function _class12() {
                var _this58;
                _classCallCheck(this, _class12);
                _this58 = _possibleConstructorReturn(this, _getPrototypeOf(_class12).call(this)),
                    _this58.visible = !1, _this58.on(zt.ADDED, _assertThisInitialized(_this58), _this58._onParentChange),
                    _this58.on(zt.REMOVED, _assertThisInitialized(_this58), _this58._onParentChange);
                return _this58;
            }
            _createClass(_class12, [{
                key: "_onParentChange",
                value: function _onParentChange() {
                    this.target = this.parent;
                }
            }, {
                key: "play",
                value: function play() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = He.playSound(this.url, t, e));
                }
            }, {
                key: "stop",
                value: function stop() {
                    this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
                }
            }, {
                key: "_setPlayAction",
                value: function _setPlayAction(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                    this[i] && t && (s ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
                }
            }, {
                key: "_setPlayActions",
                value: function _setPlayActions(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                    if (t && e) {
                        var r, a, n = e.split(",");
                        for (a = n.length, r = 0; r < a; r++) {
                            this._setPlayAction(t, n[r], i, s);
                        }
                    }
                }
            }, {
                key: "playEvent",
                set: function set(t) {
                    this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play");
                }
            }, {
                key: "target",
                set: function set(t) {
                    this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)),
                        this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0),
                            this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
                }
            }, {
                key: "stopEvent",
                set: function set(t) {
                    this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop");
                }
            }]);
            return _class12;
        }(Me), t.Sprite = Me, t.SpriteConst = ce, t.SpriteStyle = we, t.Stage = Ue, t.Stat = G,
        t.StatUI = fi, t.StringKey = k, t.Submit = Ut, t.SubmitBase = ot, t.SubmitCMD = H,
        t.SubmitCanvas = Gt, t.SubmitKey = X, t.SubmitTarget = kt, t.SubmitTexture = Wt,
        t.System = /* */ function() {
            function _class13() {
                _classCallCheck(this, _class13);
            }
            _createClass(_class13, null, [{
                key: "changeDefinition",
                value: function changeDefinition(t, e) {
                    window.Laya[t] = e;
                    var i = t + "=classObj";
                    window.eval(i);
                }
            }]);
            return _class13;
        }(), t.SystemUtils = ae, t.TTFLoader = ii, t.Text = Pe, t.TextAtlas = Ht, t.TextRender = ee,
        t.TextStyle = Ie, t.TextTexture = Xt, t.Texture = Kt, t.Texture2D = P, t.TextureSV = xi,
        t.TimeLine = ls, t.Timer = gi, t.TouchManager = De, t.TransformCmd = et, t.TranslateCmd = it,
        t.Tween = ri, t.URL = E, t.Utils = K, t.Value2D = V, t.VectorGraphManager = me,
        t.VertexArrayObject = /* */ function() {
            function _class14() {
                _classCallCheck(this, _class14);
            }
            return _class14;
        }(), t.VertexBuffer2D = xt, t.WeakObject = _i, t.WebAudioSound = Xe, t.WebAudioSoundChannel = Ve,
        t.WebGL = re, t.WebGLCacheAsNormalCanvas = At, t.WebGLContext = v, t.WebGLRTMgr = F,
        t.WordText = qt, t.WorkerLoader = bi, t.__init = Di, t._static = _static, t.alertGlobalError = Oi,
        t.enableDebugPanel = Ni, t.init = Bi, t.isWXOpenDataContext = void 0, t.isWXPosMsg = void 0,
        t.version = Fi, t["static"] = _static, t;
}({});