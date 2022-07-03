// var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault");

// var _typeof3 = _interopRequireDefault(require("../@babel/runtime/helpers/typeof"))
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

function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
        set = Reflect.set;
    } else {
        set = function set(target, property, value, receiver) {
            var base = _superPropBase(target, property);
            var desc;
            if (base) {
                desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.set) {
                    desc.set.call(receiver, value);
                    return true;
                } else if (!desc.writable) {
                    return false;
                }
            }
            desc = Object.getOwnPropertyDescriptor(receiver, property);
            if (desc) {
                if (!desc.writable) {
                    return false;
                }
                desc.value = value;
                Object.defineProperty(receiver, property, desc);
            } else {
                _defineProperty(receiver, property, value);
            }
            return true;
        };
    }
    return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
        throw new Error("failed to set property");
    }
    return value;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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

! function(t, e) {
    "use strict";
    var s = function s() {
        _classCallCheck(this, s);
    };
    s.touchScrollEnable = !0, s.mouseWheelEnable = !0, s.showButtons = !0, s.popupBgColor = "#000000",
        s.popupBgAlpha = .5, s.closeDialogOnSide = !0, window.UIConfig = s;
    var i = function i() {
        _classCallCheck(this, i);
    };
    i.defaultSizeGrid = [4, 4, 4, 4, 0], i.labelColor = "#000000", i.labelPadding = [2, 2, 2, 2],
        i.inputLabelPadding = [1, 1, 1, 3], i.buttonStateNum = 3, i.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000", "#C0C0C0"],
        i.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"],
        i.scrollBarMinNum = 15, i.scrollBarDelayTime = 500;
    var h =
        /* */
        function(_e$Graphics) {
            _inherits(h, _e$Graphics);

            function h() {
                var _this;
                _classCallCheck(this, h);
                _this = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)),
                    _this.autoCacheCmd = !0, _this._width = 0, _this._height = 0, _this.uv = null;
                return _this;
            }
            _createClass(h, [{
                key: "destroy",
                value: function destroy() {
                    _get(_getPrototypeOf(h.prototype), "destroy", this).call(this), this._source = null,
                        this._sizeGrid = null, this._offset = null;
                }
            }, {
                key: "_setChanged",
                value: function _setChanged() {
                    this._isChanged || (this._isChanged = !0, e.ILaya.timer.callLater(this, this.changeSource));
                }
            }, {
                key: "changeSource",
                value: function changeSource() {
                    this._isChanged = !1;
                    var t = this._source;
                    if (t && t.bitmap) {
                        var e = this.width,
                            s = this.height,
                            i = this._sizeGrid,
                            h = t.sourceWidth,
                            a = t.sourceHeight;
                        if (i && (h !== e || a !== s)) return this.clear(), this.draw9Grid(t, 0, 0, e, s, i),
                            void this._repaint();
                        this.clear(), this.drawTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, e, s, null, 1, null, null, this.uv),
                            this._repaint();
                    }
                }
            }, {
                key: "drawBitmap",
                value: function drawBitmap(t, e, s, i) {
                    var h = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                    var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                    h < .1 || a < .1 || (!t || e.width == h && e.height == a ? this.drawImage(e, s, i, h, a) : this.fillTexture(e, s, i, h, a));
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._sizeGrid;
                },
                set: function set(t) {
                    this._sizeGrid = t.map(function(t) {
                        return +t;
                    }), this._setChanged();
                }
            }, {
                key: "width",
                get: function get() {
                    return this._width ? this._width : this._source ? this._source.sourceWidth : 0;
                },
                set: function set(t) {
                    this._width != t && (this._width = t, this._setChanged());
                }
            }, {
                key: "height",
                get: function get() {
                    return this._height ? this._height : this._source ? this._source.sourceHeight : 0;
                },
                set: function set(t) {
                    this._height != t && (this._height = t, this._setChanged());
                }
            }, {
                key: "source",
                get: function get() {
                    return this._source;
                },
                set: function set(t) {
                    t ? (this._source = t, this._setChanged()) : (this._source = null, this.clear());
                }
            }], [{
                key: "getTexture",
                value: function getTexture(t, s, i, h, a) {
                    var r;
                    return h <= 0 && (h = 1), a <= 0 && (a = 1), t.$_GID || (t.$_GID = e.Utils.getGID()),
                        r && r._getSource() || (r = e.Texture.createFromTexture(t, s, i, h, a)), r;
                }
            }]);
            return h;
        }(e.Graphics);
    e.ClassUtils.regClass("laya.ui.AutoBitmap", h), e.ClassUtils.regClass("Laya.AutoBitmap", h);
    var a =
        /* */
        function(_e$Component) {
            _inherits(a, _e$Component);

            function a() {
                var _this2;
                _classCallCheck(this, a);
                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments)),
                    _this2._top = NaN, _this2._bottom = NaN, _this2._left = NaN, _this2._right = NaN,
                    _this2._centerX = NaN, _this2._centerY = NaN;
                return _this2;
            }
            _createClass(a, [{
                key: "onReset",
                value: function onReset() {
                    this._top = this._bottom = this._left = this._right = this._centerX = this._centerY = NaN;
                }
            }, {
                key: "_onEnable",
                value: function _onEnable() {
                    this.owner.parent ? this._onAdded() : this.owner.once(e.Event.ADDED, this, this._onAdded);
                }
            }, {
                key: "_onDisable",
                value: function _onDisable() {
                    this.owner.off(e.Event.ADDED, this, this._onAdded), this.owner.parent && this.owner.parent.off(e.Event.RESIZE, this, this._onParentResize);
                }
            }, {
                key: "_onAdded",
                value: function _onAdded() {
                    this.owner.parent && this.owner.parent.on(e.Event.RESIZE, this, this._onParentResize),
                        this.resetLayoutX(), this.resetLayoutY();
                }
            }, {
                key: "_onParentResize",
                value: function _onParentResize() {
                    var t = this.resetLayoutX(),
                        s = this.resetLayoutY();
                    (t || s) && this.owner.event(e.Event.RESIZE);
                }
            }, {
                key: "resetLayoutX",
                value: function resetLayoutX() {
                    var t = this.owner;
                    if (!t) return !1;
                    var e = t.parent;
                    if (e)
                        if (isNaN(this.centerX)) {
                            if (isNaN(this.left)) isNaN(this.right) || (t.x = Math.round(e.width - t.displayWidth - this.right + t.pivotX * t.scaleX));
                            else if (t.x = Math.round(this.left + t.pivotX * t.scaleX), !isNaN(this.right)) {
                                var s = (e._width - this.left - this.right) / (t.scaleX || .01);
                                if (s != t.width) return t.width = s, !0;
                            }
                        } else t.x = Math.round(.5 * (e.width - t.displayWidth) + this.centerX + t.pivotX * t.scaleX);
                    return !1;
                }
            }, {
                key: "resetLayoutY",
                value: function resetLayoutY() {
                    var t = this.owner;
                    if (!t) return !1;
                    var e = t.parent;
                    if (e)
                        if (isNaN(this.centerY)) {
                            if (isNaN(this.top)) isNaN(this.bottom) || (t.y = Math.round(e.height - t.displayHeight - this.bottom + t.pivotY * t.scaleY));
                            else if (t.y = Math.round(this.top + t.pivotY * t.scaleY), !isNaN(this.bottom)) {
                                var s = (e._height - this.top - this.bottom) / (t.scaleY || .01);
                                if (s != t.height) return t.height = s, !0;
                            }
                        } else t.y = Math.round(.5 * (e.height - t.displayHeight) + this.centerY + t.pivotY * t.scaleY);
                    return !1;
                }
            }, {
                key: "resetLayout",
                value: function resetLayout() {
                    this.owner && (this.resetLayoutX(), this.resetLayoutY());
                }
            }, {
                key: "top",
                get: function get() {
                    return this._top;
                },
                set: function set(t) {
                    this._top != t && (this._top = t, this.resetLayoutY());
                }
            }, {
                key: "bottom",
                get: function get() {
                    return this._bottom;
                },
                set: function set(t) {
                    this._bottom != t && (this._bottom = t, this.resetLayoutY());
                }
            }, {
                key: "left",
                get: function get() {
                    return this._left;
                },
                set: function set(t) {
                    this._left != t && (this._left = t, this.resetLayoutX());
                }
            }, {
                key: "right",
                get: function get() {
                    return this._right;
                },
                set: function set(t) {
                    this._right != t && (this._right = t, this.resetLayoutX());
                }
            }, {
                key: "centerX",
                get: function get() {
                    return this._centerX;
                },
                set: function set(t) {
                    this._centerX != t && (this._centerX = t, this.resetLayoutX());
                }
            }, {
                key: "centerY",
                get: function get() {
                    return this._centerY;
                },
                set: function set(t) {
                    this._centerY != t && (this._centerY = t, this.resetLayoutY());
                }
            }]);
            return a;
        }(e.Component);
    a.EMPTY = null, e.ILaya.regClass(a), a.EMPTY = new a(), e.ClassUtils.regClass("laya.ui.Widget", a),
        e.ClassUtils.regClass("Laya.Widget", a);
    var r =
        /* */
        function(_e$Event) {
            _inherits(r, _e$Event);

            function r() {
                _classCallCheck(this, r);
                return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
            }
            return r;
        }(e.Event);
    r.SHOW_TIP = "showtip", r.HIDE_TIP = "hidetip", e.ILaya.regClass(r), e.ClassUtils.regClass("laya.ui.UIEvent", r),
        e.ClassUtils.regClass("Laya.UIEvent", r);
    var l =
        /* */
        function() {
            function l() {
                _classCallCheck(this, l);
            }
            _createClass(l, null, [{
                key: "fillArray",
                value: function fillArray(t, e) {
                    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var i = t.concat();
                    if (e)
                        for (var h = e.split(","), a = 0, r = Math.min(i.length, h.length); a < r; a++) {
                            var l = h[a];
                            i[a] = "true" == l || "false" != l && l, null != s && (i[a] = s(l));
                        }
                    return i;
                }
            }, {
                key: "toColor",
                value: function toColor(t) {
                    return e.Utils.toHexColor(t);
                }
            }, {
                key: "gray",
                value: function gray(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    s ? l.addFilter(t, l.grayFilter) : l.clearFilter(t, e.ColorFilter);
                }
            }, {
                key: "addFilter",
                value: function addFilter(t, e) {
                    var s = t.filters || [];
                    s.push(e), t.filters = s;
                }
            }, {
                key: "clearFilter",
                value: function clearFilter(t, e) {
                    var s = t.filters;
                    if (null != s && s.length > 0) {
                        for (var i = s.length - 1; i > -1; i--) {
                            s[i] instanceof e && s.splice(i, 1);
                        }
                        t.filters = s;
                    }
                }
            }, {
                key: "_getReplaceStr",
                value: function _getReplaceStr(t) {
                    return l.escapeSequence[t];
                }
            }, {
                key: "adptString",
                value: function adptString(t) {
                    return t.replace(/\\(\w)/g, l._getReplaceStr);
                }
            }, {
                key: "getBindFun",
                value: function getBindFun(t) {
                    l._funMap || (l._funMap = new e.WeakObject());
                    var s = l._funMap.get(t);
                    if (null == s) {
                        var i = '"' + t + '"',
                            h = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                        s = window.Laya._runScript(h), l._funMap.set(t, s);
                    }
                    return s;
                }
            }]);
            return l;
        }();
    l.grayFilter = new e.ColorFilter([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]),
        l.escapeSequence = {
            "\\n": "\n",
            "\\t": "\t"
        }, l._funMap = null, e.ClassUtils.regClass("laya.ui.UIUtils", l), e.ClassUtils.regClass("Laya.UIUtils", l);
    var n =
        /* */
        function(_e$Sprite) {
            _inherits(n, _e$Sprite);

            function n() {
                var _this3;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                _classCallCheck(this, n);
                _this3 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this)), _this3._anchorX = NaN,
                    _this3._anchorY = NaN, _this3._widget = a.EMPTY, t && (_this3.preinitialize(), _this3.createChildren(),
                        _this3.initialize());
                return _this3;
            }
            _createClass(n, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(n.prototype), "destroy", this).call(this, t), this._dataSource = null,
                        this._tag = null, this._toolTip = null;
                }
            }, {
                key: "preinitialize",
                value: function preinitialize() {}
            }, {
                key: "createChildren",
                value: function createChildren() {}
            }, {
                key: "initialize",
                value: function initialize() {}
            }, {
                key: "get_width",
                value: function get_width() {
                    return this._width ? this._width : this.measureWidth();
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    var t = 0;
                    this.commitMeasure();
                    for (var e = this.numChildren - 1; e > -1; e--) {
                        var s = this.getChildAt(e);
                        s._visible && (t = Math.max(s._x + s.width * s.scaleX, t));
                    }
                    return t;
                }
            }, {
                key: "commitMeasure",
                value: function commitMeasure() {}
            }, {
                key: "get_height",
                value: function get_height() {
                    return this._height ? this._height : this.measureHeight();
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    var t = 0;
                    this.commitMeasure();
                    for (var e = this.numChildren - 1; e > -1; e--) {
                        var s = this.getChildAt(e);
                        s._visible && (t = Math.max(s._y + s.height * s.scaleY, t));
                    }
                    return t;
                }
            }, {
                key: "get_dataSource",
                value: function get_dataSource() {
                    return this._dataSource;
                }
            }, {
                key: "set_dataSource",
                value: function set_dataSource(t) {
                    for (var e in this._dataSource = t, this._dataSource) {
                        e in this && "function" != typeof this[e] && (this[e] = this._dataSource[e]);
                    }
                }
            }, {
                key: "get_top",
                value: function get_top() {
                    return this._widget.top;
                }
            }, {
                key: "set_top",
                value: function set_top(t) {
                    t != this._widget.top && (this._getWidget().top = t);
                }
            }, {
                key: "get_bottom",
                value: function get_bottom() {
                    return this._widget.bottom;
                }
            }, {
                key: "set_bottom",
                value: function set_bottom(t) {
                    t != this._widget.bottom && (this._getWidget().bottom = t);
                }
            }, {
                key: "_sizeChanged",
                value: function _sizeChanged() {
                    isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height),
                        this.event(e.Event.RESIZE), this._widget !== a.EMPTY && this._widget.resetLayout();
                }
            }, {
                key: "onMouseOver",
                value: function onMouseOver(t) {
                    e.ILaya.stage.event(r.SHOW_TIP, this._toolTip);
                }
            }, {
                key: "onMouseOut",
                value: function onMouseOut(t) {
                    e.ILaya.stage.event(r.HIDE_TIP, this._toolTip);
                }
            }, {
                key: "_getWidget",
                value: function _getWidget() {
                    return this._widget === a.EMPTY && (this._widget = this.addComponent(a)), this._widget;
                }
            }, {
                key: "set_scaleX",
                value: function set_scaleX(t) {
                    _get(_getPrototypeOf(n.prototype), "get_scaleX", this).call(this) != t && (_get(_getPrototypeOf(n.prototype), "set_scaleX", this).call(this, t),
                        this.event(e.Event.RESIZE));
                }
            }, {
                key: "set_scaleY",
                value: function set_scaleY(t) {
                    _get(_getPrototypeOf(n.prototype), "get_scaleY", this).call(this) != t && (_get(_getPrototypeOf(n.prototype), "set_scaleY", this).call(this, t),
                        this.event(e.Event.RESIZE));
                }
            }, {
                key: "onCompResize",
                value: function onCompResize() {
                    this._sizeChanged();
                }
            }, {
                key: "set_width",
                value: function set_width(t) {
                    _get(_getPrototypeOf(n.prototype), "get_width", this).call(this) != t && (_get(_getPrototypeOf(n.prototype), "set_width", this).call(this, t),
                        this.callLater(this._sizeChanged));
                }
            }, {
                key: "set_height",
                value: function set_height(t) {
                    _get(_getPrototypeOf(n.prototype), "get_height", this).call(this) != t && (_get(_getPrototypeOf(n.prototype), "set_height", this).call(this, t),
                        this.callLater(this._sizeChanged));
                }
            }, {
                key: "get_anchorX",
                value: function get_anchorX() {
                    return this._anchorX;
                }
            }, {
                key: "set_anchorX",
                value: function set_anchorX(t) {
                    this._anchorX != t && (this._anchorX = t, this.callLater(this._sizeChanged));
                }
            }, {
                key: "get_anchorY",
                value: function get_anchorY() {
                    return this._anchorY;
                }
            }, {
                key: "set_anchorY",
                value: function set_anchorY(t) {
                    this._anchorY != t && (this._anchorY = t, this.callLater(this._sizeChanged));
                }
            }, {
                key: "_childChanged",
                value: function _childChanged() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.callLater(this._sizeChanged), _get(_getPrototypeOf(n.prototype), "_childChanged", this).call(this, t);
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
                key: "dataSource",
                get: function get() {
                    return this.get_dataSource();
                },
                set: function set(t) {
                    this.set_dataSource(t);
                }
            }, {
                key: "top",
                get: function get() {
                    return this.get_top();
                },
                set: function set(t) {
                    this.set_top(t);
                }
            }, {
                key: "bottom",
                get: function get() {
                    return this.get_bottom();
                },
                set: function set(t) {
                    this.set_bottom(t);
                }
            }, {
                key: "left",
                get: function get() {
                    return this._widget.left;
                },
                set: function set(t) {
                    t != this._widget.left && (this._getWidget().left = t);
                }
            }, {
                key: "right",
                get: function get() {
                    return this._widget.right;
                },
                set: function set(t) {
                    t != this._widget.right && (this._getWidget().right = t);
                }
            }, {
                key: "centerX",
                get: function get() {
                    return this._widget.centerX;
                },
                set: function set(t) {
                    t != this._widget.centerX && (this._getWidget().centerX = t);
                }
            }, {
                key: "centerY",
                get: function get() {
                    return this._widget.centerY;
                },
                set: function set(t) {
                    t != this._widget.centerY && (this._getWidget().centerY = t);
                }
            }, {
                key: "tag",
                get: function get() {
                    return this._tag;
                },
                set: function set(t) {
                    this._tag = t;
                }
            }, {
                key: "toolTip",
                get: function get() {
                    return this._toolTip;
                },
                set: function set(t) {
                    this._toolTip != t && (this._toolTip = t, null != t ? (this.on(e.Event.MOUSE_OVER, this, this.onMouseOver),
                        this.on(e.Event.MOUSE_OUT, this, this.onMouseOut)) : (this.off(e.Event.MOUSE_OVER, this, this.onMouseOver),
                        this.off(e.Event.MOUSE_OUT, this, this.onMouseOut)));
                }
            }, {
                key: "gray",
                get: function get() {
                    return this._gray;
                },
                set: function set(t) {
                    t !== this._gray && (this._gray = t, l.gray(this, t));
                }
            }, {
                key: "disabled",
                get: function get() {
                    return this._disabled;
                },
                set: function set(t) {
                    t !== this._disabled && (this.gray = this._disabled = t, this.mouseEnabled = !t);
                }
            }, {
                key: "scaleX",
                set: function set(t) {
                    this.set_scaleX(t);
                },
                get: function get() {
                    return _get(_getPrototypeOf(n.prototype), "scaleX", this);
                }
            }, {
                key: "scaleY",
                set: function set(t) {
                    this.set_scaleY(t);
                },
                get: function get() {
                    return _get(_getPrototypeOf(n.prototype), "scaleY", this);
                }
            }, {
                key: "anchorX",
                get: function get() {
                    return this.get_anchorX();
                },
                set: function set(t) {
                    this.set_anchorX(t);
                }
            }, {
                key: "anchorY",
                get: function get() {
                    return this.get_anchorY();
                },
                set: function set(t) {
                    this.set_anchorY(t);
                }
            }]);
            return n;
        }(e.Sprite);
    e.ILaya.regClass(n), e.ClassUtils.regClass("laya.ui.UIComponent", n), e.ClassUtils.regClass("Laya.UIComponent", n);
    var o =
        /* */
        function(_n) {
            _inherits(o, _n);

            function o() {
                var _this4;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _classCallCheck(this, o);
                _this4 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this)), _this4.skin = t;
                return _this4;
            }
            _createClass(o, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(o.prototype), "destroy", this).call(this, !0), this._bitmap && this._bitmap.destroy(),
                        this._bitmap = null;
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.destroy(!0), e.ILaya.loader.clearRes(this._skin);
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.graphics = this._bitmap = new h(), this._bitmap.autoCacheCmd = !1;
                }
            }, {
                key: "setSource",
                value: function setSource(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    t === this._skin && e && (this.source = e, this.onCompResize());
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this._bitmap.width;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this._bitmap.height;
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    if (this._skin != t)
                        if (this._skin = t, t) {
                            var s = e.Loader.getRes(t);
                            s ? (this.source = s, this.onCompResize()) : e.ILaya.loader.load(this._skin, e.Handler.create(this, this.setSource, [this._skin]), null, e.Loader.IMAGE, 1, !0, this._group);
                        } else this.source = null;
                }
            }, {
                key: "source",
                get: function get() {
                    return this._bitmap.source;
                },
                set: function set(t) {
                    this._bitmap && (this._bitmap.source = t, this.event(e.Event.LOADED), this.repaint());
                }
            }, {
                key: "group",
                get: function get() {
                    return this._group;
                },
                set: function set(t) {
                    t && this._skin && e.Loader.setGroup(this._skin, t), this._group = t;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(o.prototype), "width", t, this, true), this._bitmap.width = 0 == t ? 1e-7 : t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(o.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(o.prototype), "height", t, this, true), this._bitmap.height = 0 == t ? 1e-7 : t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(o.prototype), "height", this);
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
                },
                set: function set(t) {
                    this._bitmap.sizeGrid = l.fillArray(i.defaultSizeGrid, t, Number);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "string" == typeof t ? this.skin = t : _set(_getPrototypeOf(o.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(o.prototype), "dataSource", this);
                }
            }]);
            return o;
        }(n);
    e.ILaya.regClass(o), e.ClassUtils.regClass("laya.ui.Image", o), e.ClassUtils.regClass("Laya.Image", o);
    var _ =
        /* */
        function(_o) {
            _inherits(_, _o);

            function _() {
                var _this5;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _classCallCheck(this, _);
                _this5 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this)), _this5.advsListArr = [],
                    _this5.resUrl = "https://unioncdn.layabox.com/config/iconlist.json", _this5._http = new e.Browser.window.XMLHttpRequest(),
                    _this5._data = [], _this5._resquestTime = 36e4, _this5._playIndex = 0, _this5._lunboTime = 5e3,
                    _this5.skin = t, _this5.setLoadUrl(), _this5.init(), _this5.size(120, 120);
                return _this5;
            }
            _createClass(_, [{
                key: "setLoadUrl",
                value: function setLoadUrl() {}
            }, {
                key: "init",
                value: function init() {
                    this.isSupportJump() ? ((e.Browser.onMiniGame || e.Browser.onBDMiniGame) && e.ILaya.timer.loop(this._resquestTime, this, this.onGetAdvsListData),
                        this.onGetAdvsListData(), this.initEvent()) : this.visible = !1;
                }
            }, {
                key: "initEvent",
                value: function initEvent() {
                    this.on(e.Event.CLICK, this, this.onAdvsImgClick);
                }
            }, {
                key: "onAdvsImgClick",
                value: function onAdvsImgClick() {
                    this.getCurrentAppidObj() && this.jumptoGame();
                }
            }, {
                key: "revertAdvsData",
                value: function revertAdvsData() {
                    this.advsListArr[this._playIndex] && (this.visible = !0, this.skin = this.advsListArr[this._playIndex]);
                }
            }, {
                key: "isSupportJump",
                value: function isSupportJump() {
                    return e.Browser.onMiniGame ? window.wx.navigateToMiniProgram instanceof Function : !!e.Browser.onBDMiniGame;
                }
            }, {
                key: "jumptoGame",
                value: function jumptoGame() {
                    var t = this.advsListArr[this._playIndex];
                    parseInt(t.gameid), t.extendInfo, t.path;
                    e.Browser.onMiniGame ? this.isSupportJump() && window.wx.navigateToMiniProgram({
                        appId: this._appid,
                        path: "",
                        extraData: "",
                        envVersion: "release",
                        success: function success() {
                            console.log("-------------跳转成功--------------");
                        },
                        fail: function fail() {
                            console.log("-------------跳转失败--------------");
                        },
                        complete: function() {
                            console.log("-------------跳转接口调用成功--------------"), this.updateAdvsInfo();
                        }.bind(this)
                    }) : e.Browser.onBDMiniGame || (this.visible = !1);
                }
            }, {
                key: "updateAdvsInfo",
                value: function updateAdvsInfo() {
                    this.visible = !1, this.onLunbo(), e.ILaya.timer.loop(this._lunboTime, this, this.onLunbo);
                }
            }, {
                key: "onLunbo",
                value: function onLunbo() {
                    this._playIndex >= this.advsListArr.length - 1 ? this._playIndex = 0 : this._playIndex += 1,
                        this.visible = !0, this.revertAdvsData();
                }
            }, {
                key: "getCurrentAppidObj",
                value: function getCurrentAppidObj() {
                    return this.advsListArr[this._playIndex];
                }
            }, {
                key: "onGetAdvsListData",
                value: function onGetAdvsListData() {
                    var t = this,
                        e = _.randRange(1e4, 1e6),
                        s = this.resUrl + "?" + e;
                    this._http.open("get", s, !0), this._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        this._http.responseType = "text", this._http.onerror = function(e) {
                            t._onError(e);
                        }, this._http.onload = function(e) {
                            t._onLoad(e);
                        }, this._http.send(null);
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
                        s = void 0 !== e.status ? e.status : 200;
                    200 === s || 204 === s || 0 === s ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
                }
            }, {
                key: "error",
                value: function error(t) {
                    this.event(e.Event.ERROR, t);
                }
            }, {
                key: "complete",
                value: function complete() {
                    try {
                        this._data = this._http.response || this._http.responseText, this._data = JSON.parse(this._data),
                            this.advsListArr = this._data.list, this._appid = this._data.appid, this.updateAdvsInfo(),
                            this.revertAdvsData();
                    } catch (t) {
                        this.error(t.message);
                    }
                }
            }, {
                key: "getAdvsQArr",
                value: function getAdvsQArr(t) {
                    var s = [],
                        i = e.LocalStorage.getJSON("gameObj");
                    for (var h in t) {
                        var a = t[h];
                        i && i[a.gameid] && !a.isQiangZhi || s.push(a);
                    }
                    return s;
                }
            }, {
                key: "clear",
                value: function clear() {
                    var t = this._http;
                    t.onerror = t.onabort = t.onprogress = t.onload = null;
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    e.ILaya.timer.clear(this, this.onLunbo), _get(_getPrototypeOf(_.prototype), "destroy", this).call(this, !0),
                        this.clear(), e.ILaya.timer.clear(this, this.onGetAdvsListData);
                }
            }], [{
                key: "randRange",
                value: function randRange(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t;
                }
            }]);
            return _;
        }(o);
    e.ClassUtils.regClass("laya.ui.AdvImage", _), e.ClassUtils.regClass("Laya.AdvImage", _);
    var c =
        /* */
        function(_n2) {
            _inherits(c, _n2);

            function c() {
                _classCallCheck(this, c);
                return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
            }
            _createClass(c, [{
                key: "_onResize",
                value: function _onResize(t) {
                    this.graphics.clear(), this.graphics.drawRect(0, 0, this.width, this.height, this._bgColor);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    for (var e in this._dataSource = t, t) {
                        var s = this.getChildByName(e);
                        s ? s.dataSource = t[e] : e in this && !(this[e] instanceof Function) && (this[e] = t[e]);
                    }
                },
                get: function get() {
                    return _get(_getPrototypeOf(c.prototype), "dataSource", this);
                }
            }, {
                key: "bgColor",
                get: function get() {
                    return this._bgColor;
                },
                set: function set(t) {
                    this._bgColor = t, t ? (this._onResize(null), this.on(e.Event.RESIZE, this, this._onResize)) : (this.graphics.clear(),
                        this.off(e.Event.RESIZE, this, this._onResize));
                }
            }]);
            return c;
        }(n);
    e.ILaya.regClass(c), e.ClassUtils.regClass("laya.ui.Box", c), e.ClassUtils.regClass("Laya.Box", c);
    var d =
        /* */
        function(_n3) {
            _inherits(d, _n3);

            function d() {
                var _this6;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                _classCallCheck(this, d);
                _this6 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this)), _this6._labelColors = i.buttonLabelColors,
                    _this6._state = 0, _this6._autoSize = !0, _this6._stateNum = i.buttonStateNum, _this6._stateChanged = !1,
                    _this6.skin = t, _this6.label = e;
                return _this6;
            }
            _createClass(d, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(d.prototype), "destroy", this).call(this, t), this._bitmap && this._bitmap.destroy(),
                        this._text && this._text.destroy(t), this._bitmap = null, this._text = null, this._clickHandler = null,
                        this._labelColors = this._sources = this._strokeColors = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.graphics = this._bitmap = new h();
                }
            }, {
                key: "createText",
                value: function createText() {
                    this._text || (this._text = new e.Text(), this._text.overflow = e.Text.HIDDEN, this._text.align = "center",
                        this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height);
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    1 !== this._mouseState && (this.mouseEnabled = !0, this._setBit(e.Const.HAS_MOUSE, !0)),
                        this._createListener(e.Event.MOUSE_OVER, this, this.onMouse, null, !1, !1), this._createListener(e.Event.MOUSE_OUT, this, this.onMouse, null, !1, !1),
                        this._createListener(e.Event.MOUSE_DOWN, this, this.onMouse, null, !1, !1), this._createListener(e.Event.MOUSE_UP, this, this.onMouse, null, !1, !1),
                        this._createListener(e.Event.CLICK, this, this.onMouse, null, !1, !1);
                }
            }, {
                key: "onMouse",
                value: function onMouse(t) {
                    if (!1 !== this.toggle || !this._selected) return t.type === e.Event.CLICK ? (this.toggle && (this.selected = !this._selected),
                        void(this._clickHandler && this._clickHandler.run())) : void(!this._selected && (this.state = d.stateMap[t.type]));
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this.callLater(this.changeClips), this._setStateChanged(), this._sizeChanged(),
                        this.event(e.Event.LOADED);
                }
            }, {
                key: "changeClips",
                value: function changeClips() {
                    var t = e.Loader.getRes(this._skin);
                    if (t) {
                        var s = t.sourceWidth,
                            i = t.sourceHeight / this._stateNum;
                        t.$_GID || (t.$_GID = e.Utils.getGID());
                        var h = t.$_GID + "-" + this._stateNum,
                            a = e.WeakObject.I.get(h);
                        if (e.Utils.isOkTextureList(a) || (a = null), a) this._sources = a;
                        else {
                            if (this._sources = [], 1 === this._stateNum) this._sources.push(t);
                            else
                                for (var r = 0; r < this._stateNum; r++) {
                                    this._sources.push(e.Texture.createFromTexture(t, 0, i * r, s, i));
                                }
                            e.WeakObject.I.set(h, this._sources);
                        }
                        this._autoSize ? (this._bitmap.width = this._width || s, this._bitmap.height = this._height || i,
                            this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = s);
                    } else console.log("lose skin", this._skin);
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState),
                        this._bitmap.width + (this._text ? this._text.width : 0));
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height;
                }
            }, {
                key: "changeState",
                value: function changeState() {
                    this._stateChanged = !1, this.runCallLater(this.changeClips);
                    var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
                    this._sources && (this._bitmap.source = this._sources[t]), this.label && (this._text.color = this._labelColors[t],
                        this._strokeColors && (this._text.strokeColor = this._strokeColors[t]));
                }
            }, {
                key: "_setStateChanged",
                value: function _setStateChanged() {
                    this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState));
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    this._skin != t && (this._skin = t, t ? e.Loader.getRes(t) ? this._skinLoaded() : e.ILaya.loader.load(this._skin, e.Handler.create(this, this._skinLoaded), null, e.Loader.IMAGE, 1) : this._skinLoaded());
                }
            }, {
                key: "stateNum",
                get: function get() {
                    return this._stateNum;
                },
                set: function set(t) {
                    "string" == typeof t && (t = parseInt(t)), this._stateNum != t && (this._stateNum = t < 1 ? 1 : t > 3 ? 3 : t,
                        this.callLater(this.changeClips));
                }
            }, {
                key: "label",
                get: function get() {
                    return this._text ? this._text.text : null;
                },
                set: function set(t) {
                    (this._text || t) && (this.createText(), this._text.text != t && (t && !this._text.parent && this.addChild(this._text),
                        this._text.text = (t + "").replace(/\\n/g, "\n"), this._setStateChanged()));
                }
            }, {
                key: "selected",
                get: function get() {
                    return this._selected;
                },
                set: function set(t) {
                    this._selected != t && (this._selected = t, this.state = this._selected ? 2 : 0,
                        this.event(e.Event.CHANGE));
                }
            }, {
                key: "state",
                get: function get() {
                    return this._state;
                },
                set: function set(t) {
                    this._state != t && (this._state = t, this._setStateChanged());
                }
            }, {
                key: "labelColors",
                get: function get() {
                    return this._labelColors.join(",");
                },
                set: function set(t) {
                    this._labelColors = l.fillArray(i.buttonLabelColors, t, String), this._setStateChanged();
                }
            }, {
                key: "strokeColors",
                get: function get() {
                    return this._strokeColors ? this._strokeColors.join(",") : "";
                },
                set: function set(t) {
                    this._strokeColors = l.fillArray(i.buttonLabelColors, t, String), this._setStateChanged();
                }
            }, {
                key: "labelPadding",
                get: function get() {
                    return this.createText(), this._text.padding.join(",");
                },
                set: function set(t) {
                    this.createText(), this._text.padding = l.fillArray(i.labelPadding, t, Number);
                }
            }, {
                key: "labelSize",
                get: function get() {
                    return this.createText(), this._text.fontSize;
                },
                set: function set(t) {
                    this.createText(), this._text.fontSize = t;
                }
            }, {
                key: "labelStroke",
                get: function get() {
                    return this.createText(), this._text.stroke;
                },
                set: function set(t) {
                    this.createText(), this._text.stroke = t;
                }
            }, {
                key: "labelStrokeColor",
                get: function get() {
                    return this.createText(), this._text.strokeColor;
                },
                set: function set(t) {
                    this.createText(), this._text.strokeColor = t;
                }
            }, {
                key: "labelBold",
                get: function get() {
                    return this.createText(), this._text.bold;
                },
                set: function set(t) {
                    this.createText(), this._text.bold = t;
                }
            }, {
                key: "labelFont",
                get: function get() {
                    return this.createText(), this._text.font;
                },
                set: function set(t) {
                    this.createText(), this._text.font = t;
                }
            }, {
                key: "labelAlign",
                get: function get() {
                    return this.createText(), this._text.align;
                },
                set: function set(t) {
                    this.createText(), this._text.align = t;
                }
            }, {
                key: "clickHandler",
                get: function get() {
                    return this._clickHandler;
                },
                set: function set(t) {
                    this._clickHandler = t;
                }
            }, {
                key: "text",
                get: function get() {
                    return this.createText(), this._text;
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
                },
                set: function set(t) {
                    this._bitmap.sizeGrid = l.fillArray(i.defaultSizeGrid, t, Number);
                }
            }, {
                key: "width",
                set: function set(t) {
                    _get(_getPrototypeOf(d.prototype), "set_width", this).call(this, t), this._autoSize && (this._bitmap.width = t,
                        this._text && (this._text.width = t));
                },
                get: function get() {
                    return _get(_getPrototypeOf(d.prototype), "get_width", this).call(this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _get(_getPrototypeOf(d.prototype), "set_height", this).call(this, t), this._autoSize && (this._bitmap.height = t,
                        this._text && (this._text.height = t));
                },
                get: function get() {
                    return _get(_getPrototypeOf(d.prototype), "get_height", this).call(this);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.label = t + "" : _get(_getPrototypeOf(d.prototype), "set_dataSource", this).call(this, t);
                },
                get: function get() {
                    return _get(_getPrototypeOf(d.prototype), "get_dataSource", this).call(this);
                }
            }, {
                key: "iconOffset",
                get: function get() {
                    return this._bitmap._offset ? this._bitmap._offset.join(",") : null;
                },
                set: function set(t) {
                    this._bitmap._offset = t ? l.fillArray([1, 1], t, Number) : [];
                }
            }]);
            return d;
        }(n);
    d.stateMap = {
        mouseup: 0,
        mouseover: 1,
        mousedown: 2,
        mouseout: 0
    }, e.ILaya.regClass(d), e.ClassUtils.regClass("laya.ui.Button", d), e.ClassUtils.regClass("Laya.Button", d);
    var u =
        /* */
        function(_d) {
            _inherits(u, _d);

            function u() {
                var _this7;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                _classCallCheck(this, u);
                _this7 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, t, e)),
                    _this7.toggle = !0, _this7._autoSize = !1;
                return _this7;
            }
            _createClass(u, [{
                key: "preinitialize",
                value: function preinitialize() {
                    _get(_getPrototypeOf(u.prototype), "preinitialize", this).call(this), this.toggle = !0,
                        this._autoSize = !1;
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    _get(_getPrototypeOf(u.prototype), "initialize", this).call(this), this.createText(),
                        this._text.align = "left", this._text.valign = "top", this._text.width = 0;
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, t instanceof Boolean ? this.selected = t : "string" == typeof t ? this.selected = "true" === t : _set(_getPrototypeOf(u.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(u.prototype), "dataSource", this);
                }
            }]);
            return u;
        }(d);
    e.ILaya.regClass(u), e.ClassUtils.regClass("laya.ui.CheckBox", u), e.ClassUtils.regClass("Laya.CheckBox", u);
    var g =
        /* */
        function(_n4) {
            _inherits(g, _n4);

            function g() {
                var _this8;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                _classCallCheck(this, g);
                _this8 = _possibleConstructorReturn(this, _getPrototypeOf(g).call(this)), _this8._clipX = 1,
                    _this8._clipY = 1, _this8._clipWidth = 0, _this8._clipHeight = 0, _this8._interval = 50,
                    _this8._index = 0, _this8._toIndex = -1, _this8._clipX = e, _this8._clipY = s, _this8.skin = t;
                return _this8;
            }
            _createClass(g, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(g.prototype), "destroy", this).call(this, !0), this._bitmap && this._bitmap.destroy(),
                        this._bitmap = null, this._sources = null;
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.destroy(!0), e.ILaya.loader.clearRes(this._skin);
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.graphics = this._bitmap = new h();
                }
            }, {
                key: "_onDisplay",
                value: function _onDisplay(t) {
                    this._isPlaying ? this._getBit(e.Const.DISPLAYED_INSTAGE) ? this.play() : this.stop() : this._autoPlay && this.play();
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this._setClipChanged(), this._sizeChanged(), this.event(e.Event.LOADED);
                }
            }, {
                key: "changeClip",
                value: function changeClip() {
                    if (this._clipChanged = !1, this._skin) {
                        var t = e.Loader.getRes(this._skin);
                        t ? this.loadComplete(this._skin, t) : e.ILaya.loader.load(this._skin, e.Handler.create(this, this.loadComplete, [this._skin]));
                    }
                }
            }, {
                key: "loadComplete",
                value: function loadComplete(t, s) {
                    if (t === this._skin && s) {
                        var i = this._clipWidth || Math.ceil(s.sourceWidth / this._clipX),
                            h = this._clipHeight || Math.ceil(s.sourceHeight / this._clipY),
                            a = this._skin + i + h,
                            r = e.WeakObject.I.get(a);
                        if (e.Utils.isOkTextureList(r) || (r = null), r) this._sources = r;
                        else {
                            this._sources = [];
                            for (var l = 0; l < this._clipY; l++) {
                                for (var n = 0; n < this._clipX; n++) {
                                    this._sources.push(e.Texture.createFromTexture(s, i * n, h * l, i, h));
                                }
                            }
                            e.WeakObject.I.set(a, this._sources);
                        }
                        this.index = this._index, this.event(e.Event.LOADED), this.onCompResize();
                    }
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this.runCallLater(this.changeClip), this._bitmap.width;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this.runCallLater(this.changeClip), this._bitmap.height;
                }
            }, {
                key: "play",
                value: function play() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                    this._isPlaying = !0, this.index = t, this._toIndex = s, this._index++, e.ILaya.timer.loop(this.interval, this, this._loop),
                        this.on(e.Event.DISPLAY, this, this._onDisplay), this.on(e.Event.UNDISPLAY, this, this._onDisplay);
                }
            }, {
                key: "_loop",
                value: function _loop() {
                    this._visible && this._sources && (this._index++, this._toIndex > -1 && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0),
                        this.index = this._index);
                }
            }, {
                key: "stop",
                value: function stop() {
                    this._isPlaying = !1, e.ILaya.timer.clear(this, this._loop), this.event(e.Event.COMPLETE);
                }
            }, {
                key: "_setClipChanged",
                value: function _setClipChanged() {
                    this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip));
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    this._skin != t && (this._skin = t, t ? e.Loader.getRes(t) ? this._skinLoaded() : e.ILaya.loader.load(this._skin, e.Handler.create(this, this._skinLoaded), null, e.Loader.IMAGE, 1) : this._bitmap.source = null);
                }
            }, {
                key: "clipX",
                get: function get() {
                    return this._clipX;
                },
                set: function set(t) {
                    this._clipX = t || 1, this._setClipChanged();
                }
            }, {
                key: "clipY",
                get: function get() {
                    return this._clipY;
                },
                set: function set(t) {
                    this._clipY = t || 1, this._setClipChanged();
                }
            }, {
                key: "clipWidth",
                get: function get() {
                    return this._clipWidth;
                },
                set: function set(t) {
                    this._clipWidth = t, this._setClipChanged();
                }
            }, {
                key: "clipHeight",
                get: function get() {
                    return this._clipHeight;
                },
                set: function set(t) {
                    this._clipHeight = t, this._setClipChanged();
                }
            }, {
                key: "sources",
                get: function get() {
                    return this._sources;
                },
                set: function set(t) {
                    this._sources = t, this.index = this._index, this.event(e.Event.LOADED);
                }
            }, {
                key: "group",
                get: function get() {
                    return this._group;
                },
                set: function set(t) {
                    t && this._skin && e.Loader.setGroup(this._skin, t), this._group = t;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(g.prototype), "width", t, this, true), this._bitmap.width = t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(g.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(g.prototype), "height", t, this, true), this._bitmap.height = t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(g.prototype), "height", this);
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
                },
                set: function set(t) {
                    this._bitmap.sizeGrid = l.fillArray(i.defaultSizeGrid, t, Number);
                }
            }, {
                key: "index",
                get: function get() {
                    return this._index;
                },
                set: function set(t) {
                    this._index = t, this._bitmap && this._sources && (this._bitmap.source = this._sources[t]),
                        this.event(e.Event.CHANGE);
                }
            }, {
                key: "total",
                get: function get() {
                    return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0;
                }
            }, {
                key: "autoPlay",
                get: function get() {
                    return this._autoPlay;
                },
                set: function set(t) {
                    this._autoPlay != t && (this._autoPlay = t, t ? this.play() : this.stop());
                }
            }, {
                key: "interval",
                get: function get() {
                    return this._interval;
                },
                set: function set(t) {
                    this._interval != t && (this._interval = t, this._isPlaying && this.play());
                }
            }, {
                key: "isPlaying",
                get: function get() {
                    return this._isPlaying;
                },
                set: function set(t) {
                    this._isPlaying = t;
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.index = parseInt(t) : _set(_getPrototypeOf(g.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(g.prototype), "dataSource", this);
                }
            }, {
                key: "bitmap",
                get: function get() {
                    return this._bitmap;
                }
            }]);
            return g;
        }(n);
    e.ILaya.regClass(g), e.ClassUtils.regClass("laya.ui.Clip", g), e.ClassUtils.regClass("Laya.Clip", g);
    var p =
        /* */
        function(_n5) {
            _inherits(p, _n5);

            function p() {
                var _this9;
                _classCallCheck(this, p);
                _this9 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)),
                    _this9._gridSize = 11, _this9._bgColor = "#ffffff", _this9._borderColor = "#000000",
                    _this9._inputColor = "#000000", _this9._inputBgColor = "#efefef", _this9._colors = [],
                    _this9._selectedColor = "#000000";
                return _this9;
            }
            _createClass(p, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(p.prototype), "destroy", this).call(this, t), this._colorPanel && this._colorPanel.destroy(t),
                        this._colorButton && this._colorButton.destroy(t), this._colorPanel = null, this._colorTiles = null,
                        this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null,
                        this.changeHandler = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._colorButton = new d()), this._colorPanel = new c(), this._colorPanel.size(230, 166),
                        this._colorPanel.addChild(this._colorTiles = new e.Sprite()), this._colorPanel.addChild(this._colorBlock = new e.Sprite()),
                        this._colorPanel.addChild(this._colorInput = new e.Input());
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    this._colorButton.on(e.Event.CLICK, this, this.onColorButtonClick), this._colorBlock.pos(5, 5),
                        this._colorInput.pos(60, 5), this._colorInput.size(60, 20), this._colorInput.on(e.Event.CHANGE, this, this.onColorInputChange),
                        this._colorInput.on(e.Event.KEY_DOWN, this, this.onColorFieldKeyDown), this._colorTiles.pos(5, 30),
                        this._colorTiles.on(e.Event.MOUSE_MOVE, this, this.onColorTilesMouseMove), this._colorTiles.on(e.Event.CLICK, this, this.onColorTilesClick),
                        this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize), this._colorPanel.on(e.Event.MOUSE_DOWN, this, this.onPanelMouseDown),
                        this.bgColor = this._bgColor;
                }
            }, {
                key: "onPanelMouseDown",
                value: function onPanelMouseDown(t) {
                    t.stopPropagation();
                }
            }, {
                key: "changePanel",
                value: function changePanel() {
                    this._panelChanged = !1;
                    var t = this._colorPanel.graphics;
                    t.clear(!0), t.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor), this.drawBlock(this._selectedColor),
                        this._colorInput.borderColor = this._borderColor, this._colorInput.bgColor = this._inputBgColor,
                        this._colorInput.color = this._inputColor, (t = this._colorTiles.graphics).clear(!0);
                    for (var e = [0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935], s = 0; s < 12; s++) {
                        for (var i = 0; i < 20; i++) {
                            var h;
                            h = 0 === i ? e[s] : 1 === i ? 0 : 51 * (((3 * s + i / 6) % 3 << 0) + 3 * (s / 6 << 0)) << 16 | i % 6 * 51 << 8 | (s << 0) % 6 * 51;
                            var a = l.toColor(h);
                            this._colors.push(a);
                            var r = i * this._gridSize,
                                n = s * this._gridSize;
                            t.drawRect(r, n, this._gridSize, this._gridSize, a, "#000000");
                        }
                    }
                }
            }, {
                key: "onColorButtonClick",
                value: function onColorButtonClick(t) {
                    this._colorPanel.parent ? this.close() : this.open();
                }
            }, {
                key: "open",
                value: function open() {
                    var t = e.ILaya.stage;
                    var s = this.localToGlobal(new e.Point()),
                        i = s.x + this._colorPanel.width <= t.width ? s.x : t.width - this._colorPanel.width,
                        h = s.y + this._colorButton.height;
                    h = h + this._colorPanel.height <= t.height ? h : s.y - this._colorPanel.height,
                        this._colorPanel.pos(i, h), this._colorPanel.zOrder = 1001, t.addChild(this._colorPanel),
                        t.on(e.Event.MOUSE_DOWN, this, this.removeColorBox);
                }
            }, {
                key: "close",
                value: function close() {
                    e.ILaya.stage.off(e.Event.MOUSE_DOWN, this, this.removeColorBox), this._colorPanel.removeSelf();
                }
            }, {
                key: "removeColorBox",
                value: function removeColorBox() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.close();
                }
            }, {
                key: "onColorFieldKeyDown",
                value: function onColorFieldKeyDown(t) {
                    13 == t.keyCode && (this._colorInput.text ? this.selectedColor = this._colorInput.text : this.selectedColor = null,
                        this.close(), t.stopPropagation());
                }
            }, {
                key: "onColorInputChange",
                value: function onColorInputChange() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this._colorInput.text ? this.drawBlock(this._colorInput.text) : this.drawBlock("#FFFFFF");
                }
            }, {
                key: "onColorTilesClick",
                value: function onColorTilesClick(t) {
                    this.selectedColor = this.getColorByMouse(), this.close();
                }
            }, {
                key: "onColorTilesMouseMove",
                value: function onColorTilesMouseMove(t) {
                    this._colorInput.focus = !1;
                    var e = this.getColorByMouse();
                    this._colorInput.text = e, this.drawBlock(e);
                }
            }, {
                key: "getColorByMouse",
                value: function getColorByMouse() {
                    var t = this._colorTiles.getMousePoint(),
                        e = Math.floor(t.x / this._gridSize),
                        s = Math.floor(t.y / this._gridSize);
                    return this._colors[20 * s + e];
                }
            }, {
                key: "drawBlock",
                value: function drawBlock(t) {
                    var e = this._colorBlock.graphics;
                    e.clear(!0);
                    var s = t || "#ffffff";
                    e.drawRect(0, 0, 50, 20, s, this._borderColor), t || e.drawLine(0, 0, 50, 20, "#ff0000");
                }
            }, {
                key: "changeColor",
                value: function changeColor() {
                    var t = this.graphics;
                    t.clear(!0);
                    var e = this._selectedColor || "#000000";
                    t.drawRect(0, 0, this._colorButton.width, this._colorButton.height, e);
                }
            }, {
                key: "_setPanelChanged",
                value: function _setPanelChanged() {
                    this._panelChanged || (this._panelChanged = !0, this.callLater(this.changePanel));
                }
            }, {
                key: "selectedColor",
                get: function get() {
                    return this._selectedColor;
                },
                set: function set(t) {
                    this._selectedColor != t && (this._selectedColor = this._colorInput.text = t, this.drawBlock(t),
                        this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor),
                        this.event(e.Event.CHANGE, e.Event.EMPTY.setTo(e.Event.CHANGE, this, this)));
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._colorButton.skin;
                },
                set: function set(t) {
                    this._colorButton.once(e.Event.LOADED, this, this.changeColor), this._colorButton.skin = t;
                }
            }, {
                key: "bgColor",
                get: function get() {
                    return this._bgColor;
                },
                set: function set(t) {
                    this._bgColor = t, this._setPanelChanged();
                }
            }, {
                key: "borderColor",
                get: function get() {
                    return this._borderColor;
                },
                set: function set(t) {
                    this._borderColor = t, this._setPanelChanged();
                }
            }, {
                key: "inputColor",
                get: function get() {
                    return this._inputColor;
                },
                set: function set(t) {
                    this._inputColor = t, this._setPanelChanged();
                }
            }, {
                key: "inputBgColor",
                get: function get() {
                    return this._inputBgColor;
                },
                set: function set(t) {
                    this._inputBgColor = t, this._setPanelChanged();
                }
            }]);
            return p;
        }(n);
    e.ILaya.regClass(p), e.ClassUtils.regClass("laya.ui.ColorPicker", p), e.ClassUtils.regClass("Laya.ColorPicker", p);
    var C =
        /* */
        function(_n6) {
            _inherits(C, _n6);

            function C() {
                var _this10;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                _classCallCheck(this, C);
                _this10 = _possibleConstructorReturn(this, _getPrototypeOf(C).call(this)), _this10.text = t;
                return _this10;
            }
            _createClass(C, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(C.prototype), "destroy", this).call(this, t), this._tf = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._tf = new e.Text());
                }
            }, {
                key: "changeText",
                value: function changeText(t) {
                    this._tf.changeText(t);
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this._tf.width;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this._tf.height;
                }
            }, {
                key: "text",
                get: function get() {
                    return this._tf.text;
                },
                set: function set(t) {
                    this._tf.text != t && (t && (t = l.adptString(t + "")), this._tf.text = t, this.event(e.Event.CHANGE),
                        this._width && this._height || this.onCompResize());
                }
            }, {
                key: "wordWrap",
                get: function get() {
                    return this._tf.wordWrap;
                },
                set: function set(t) {
                    this._tf.wordWrap = t;
                }
            }, {
                key: "color",
                get: function get() {
                    return this._tf.color;
                },
                set: function set(t) {
                    this._tf.color = t;
                }
            }, {
                key: "font",
                get: function get() {
                    return this._tf.font;
                },
                set: function set(t) {
                    this._tf.font = t;
                }
            }, {
                key: "align",
                get: function get() {
                    return this._tf.align;
                },
                set: function set(t) {
                    this._tf.align = t;
                }
            }, {
                key: "valign",
                get: function get() {
                    return this._tf.valign;
                },
                set: function set(t) {
                    this._tf.valign = t;
                }
            }, {
                key: "bold",
                get: function get() {
                    return this._tf.bold;
                },
                set: function set(t) {
                    this._tf.bold = t;
                }
            }, {
                key: "italic",
                get: function get() {
                    return this._tf.italic;
                },
                set: function set(t) {
                    this._tf.italic = t;
                }
            }, {
                key: "leading",
                get: function get() {
                    return this._tf.leading;
                },
                set: function set(t) {
                    this._tf.leading = t;
                }
            }, {
                key: "fontSize",
                get: function get() {
                    return this._tf.fontSize;
                },
                set: function set(t) {
                    this._tf.fontSize = t;
                }
            }, {
                key: "padding",
                get: function get() {
                    return this._tf.padding.join(",");
                },
                set: function set(t) {
                    this._tf.padding = l.fillArray(i.labelPadding, t, Number);
                }
            }, {
                key: "bgColor",
                get: function get() {
                    return this._tf.bgColor;
                },
                set: function set(t) {
                    this._tf.bgColor = t;
                }
            }, {
                key: "borderColor",
                get: function get() {
                    return this._tf.borderColor;
                },
                set: function set(t) {
                    this._tf.borderColor = t;
                }
            }, {
                key: "stroke",
                get: function get() {
                    return this._tf.stroke;
                },
                set: function set(t) {
                    this._tf.stroke = t;
                }
            }, {
                key: "strokeColor",
                get: function get() {
                    return this._tf.strokeColor;
                },
                set: function set(t) {
                    this._tf.strokeColor = t;
                }
            }, {
                key: "textField",
                get: function get() {
                    return this._tf;
                }
            }, {
                key: "width",
                get: function get() {
                    return this._width || this._tf.text ? _get(_getPrototypeOf(C.prototype), "width", this) : 0;
                },
                set: function set(t) {
                    _set(_getPrototypeOf(C.prototype), "width", t, this, true), this._tf.width = t;
                }
            }, {
                key: "height",
                get: function get() {
                    return this._height || this._tf.text ? _get(_getPrototypeOf(C.prototype), "height", this) : 0;
                },
                set: function set(t) {
                    _set(_getPrototypeOf(C.prototype), "height", t, this, true), this._tf.height = t;
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.text = t + "" : _set(_getPrototypeOf(C.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(C.prototype), "dataSource", this);
                }
            }, {
                key: "overflow",
                get: function get() {
                    return this._tf.overflow;
                },
                set: function set(t) {
                    this._tf.overflow = t;
                }
            }, {
                key: "underline",
                get: function get() {
                    return this._tf.underline;
                },
                set: function set(t) {
                    this._tf.underline = t;
                }
            }, {
                key: "underlineColor",
                get: function get() {
                    return this._tf.underlineColor;
                },
                set: function set(t) {
                    this._tf.underlineColor = t;
                }
            }]);
            return C;
        }(n);
    e.ILaya.regClass(C), e.ClassUtils.regClass("laya.ui.Label", C), e.ClassUtils.regClass("Laya.Label", C);
    var v =
        /* */
        function(_n7) {
            _inherits(v, _n7);

            function v() {
                var _this11;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _classCallCheck(this, v);
                _this11 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this)), _this11.isVertical = !0,
                    _this11.showLabel = !0, _this11._max = 100, _this11._min = 0, _this11._tick = 1,
                    _this11._value = 0, v.label || (v.label = new C()), _this11.skin = t;
                return _this11;
            }
            _createClass(v, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(v.prototype), "destroy", this).call(this, t), this._bg && this._bg.destroy(t),
                        this._bar && this._bar.destroy(t), this._progress && this._progress.destroy(t),
                        this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._bg = new o()), this.addChild(this._bar = new d());
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    this._bar.on(e.Event.MOUSE_DOWN, this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0",
                        this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0;
                }
            }, {
                key: "onBarMouseDown",
                value: function onBarMouseDown(t) {
                    var s = e.ILaya;
                    this._globalSacle || (this._globalSacle = new e.Point()), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01),
                        this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width,
                        this._tx = s.stage.mouseX, this._ty = s.stage.mouseY, s.stage.on(e.Event.MOUSE_MOVE, this, this.mouseMove),
                        s.stage.once(e.Event.MOUSE_UP, this, this.mouseUp), s.stage.once(e.Event.MOUSE_OUT, this, this.mouseUp),
                        this.showValueText();
                }
            }, {
                key: "showValueText",
                value: function showValueText() {
                    if (this.showLabel) {
                        var t = v.label;
                        this.addChild(t), t.textField.changeText(this._value + ""), this.isVertical ? (t.x = this._bar._x + 20,
                            t.y = .5 * (this._bar.height - t.height) + this._bar._y) : (t.y = this._bar._y - 20,
                            t.x = .5 * (this._bar.width - t.width) + this._bar._x);
                    }
                }
            }, {
                key: "hideValueText",
                value: function hideValueText() {
                    v.label && v.label.removeSelf();
                }
            }, {
                key: "mouseUp",
                value: function mouseUp(t) {
                    var s = e.ILaya.stage;
                    s.off(e.Event.MOUSE_MOVE, this, this.mouseMove), s.off(e.Event.MOUSE_UP, this, this.mouseUp),
                        s.off(e.Event.MOUSE_OUT, this, this.mouseUp), this.sendChangeEvent(e.Event.CHANGED),
                        this.hideValueText();
                }
            }, {
                key: "mouseMove",
                value: function mouseMove(t) {
                    var s = e.ILaya.stage;
                    var i = this._value;
                    if (this.isVertical ? (this._bar.y += (s.mouseY - this._ty) / this._globalSacle.y,
                            this._bar._y > this._maxMove ? this._bar.y = this._maxMove : this._bar._y < 0 && (this._bar.y = 0),
                            this._value = this._bar._y / this._maxMove * (this._max - this._min) + this._min,
                            this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x += (s.mouseX - this._tx) / this._globalSacle.x,
                            this._bar._x > this._maxMove ? this._bar.x = this._maxMove : this._bar._x < 0 && (this._bar.x = 0),
                            this._value = this._bar._x / this._maxMove * (this._max - this._min) + this._min,
                            this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width)),
                        this._tx = s.mouseX, this._ty = s.mouseY, 0 != this._tick) {
                        var h = Math.pow(10, (this._tick + "").length - 1);
                        this._value = Math.round(Math.round(this._value / this._tick) * this._tick * h) / h;
                    }
                    this._value != i && this.sendChangeEvent(), this.showValueText();
                }
            }, {
                key: "sendChangeEvent",
                value: function sendChangeEvent() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.Event.CHANGE;
                    this.event(t), this.changeHandler && this.changeHandler.runWith(this._value);
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
                    var t = this._skin.replace(".png", "$progress.png");
                    e.Loader.getRes(t) && (this._progress || (this.addChild(this._progress = new o()),
                                this._progress.sizeGrid = this._bar.sizeGrid, this.setChildIndex(this._progress, 1)),
                            this._progress.skin = t), this.setBarPoint(), this.callLater(this.changeValue),
                        this._sizeChanged(), this.event(e.Event.LOADED);
                }
            }, {
                key: "setBarPoint",
                value: function setBarPoint() {
                    this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height));
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return Math.max(this._bg.width, this._bar.width);
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return Math.max(this._bg.height, this._bar.height);
                }
            }, {
                key: "_sizeChanged",
                value: function _sizeChanged() {
                    _get(_getPrototypeOf(v.prototype), "_sizeChanged", this).call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width,
                        this.setBarPoint(), this.changeValue();
                }
            }, {
                key: "setSlider",
                value: function setSlider(t, e, s) {
                    this._value = -1, this._min = t, this._max = e > t ? e : t, this.value = s < t ? t : s > e ? e : s;
                }
            }, {
                key: "changeValue",
                value: function changeValue() {
                    if (0 != this.tick) {
                        var t = Math.pow(10, (this._tick + "").length - 1);
                        this._value = Math.round(Math.round(this._value / this._tick) * this._tick * t) / t;
                    }
                    this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
                    var e = this._max - this._min;
                    0 === e && (e = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / e * (this.height - this._bar.height),
                        this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / e * (this.width - this._bar.width),
                        this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width));
                }
            }, {
                key: "onBgMouseDown",
                value: function onBgMouseDown(t) {
                    var e = this._bg.getMousePoint();
                    this.isVertical ? this.value = e.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = e.x / (this.width - this._bar.width) * (this._max - this._min) + this._min;
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    this._skin != t && (this._skin = t, this._skin && !e.Loader.getRes(this._skin) ? e.ILaya.loader.load([this._skin, this._skin.replace(".png", "$bar.png")], e.Handler.create(this, this._skinLoaded)) : this._skinLoaded());
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._bg.sizeGrid;
                },
                set: function set(t) {
                    this._bg.sizeGrid = t, this._bar.sizeGrid = t, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid);
                }
            }, {
                key: "tick",
                get: function get() {
                    return this._tick;
                },
                set: function set(t) {
                    this._tick != t && (this._tick = t, this.callLater(this.changeValue));
                }
            }, {
                key: "max",
                get: function get() {
                    return this._max;
                },
                set: function set(t) {
                    this._max != t && (this._max = t, this.callLater(this.changeValue));
                }
            }, {
                key: "min",
                get: function get() {
                    return this._min;
                },
                set: function set(t) {
                    this._min != t && (this._min = t, this.callLater(this.changeValue));
                }
            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(t) {
                    if (this._value != t) {
                        var e = this._value;
                        this._value = t, this.changeValue(), this._value != e && this.sendChangeEvent();
                    }
                }
            }, {
                key: "allowClickBack",
                get: function get() {
                    return this._allowClickBack;
                },
                set: function set(t) {
                    this._allowClickBack != t && (this._allowClickBack = t, t ? this._bg.on(e.Event.MOUSE_DOWN, this, this.onBgMouseDown) : this._bg.off(e.Event.MOUSE_DOWN, this, this.onBgMouseDown));
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : _set(_getPrototypeOf(v.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(v.prototype), "dataSource", this);
                }
            }, {
                key: "bar",
                get: function get() {
                    return this._bar;
                }
            }]);
            return v;
        }(n);
    v.label = null, e.ILaya.regClass(v), e.ClassUtils.regClass("laya.ui.Slider", v),
        e.ClassUtils.regClass("Laya.Slider", v);
    var m =
        /* */
        function(_n8) {
            _inherits(m, _n8);

            function m() {
                var _this12;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _classCallCheck(this, m);
                _this12 = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this)), _this12.rollRatio = .97,
                    _this12.scaleBar = !0, _this12.autoHide = !1, _this12.elasticDistance = 0, _this12.elasticBackTime = 500,
                    _this12._showButtons = s.showButtons, _this12._scrollSize = 1, _this12._thumbPercent = 1,
                    _this12._lastOffset = 0, _this12._checkElastic = !1, _this12._isElastic = !1, _this12._hide = !1,
                    _this12._clickOnly = !0, _this12._touchScrollEnable = s.touchScrollEnable, _this12._mouseWheelEnable = s.mouseWheelEnable,
                    _this12.skin = t, _this12.max = 1;
                return _this12;
            }
            _createClass(m, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    this.stopScroll(), this.target = null, _get(_getPrototypeOf(m.prototype), "destroy", this).call(this, t),
                        this.upButton && this.upButton.destroy(t), this.downButton && this.downButton.destroy(t),
                        this.slider && this.slider.destroy(t), this.upButton = this.downButton = null, this.slider = null,
                        this.changeHandler = null, this._offsets = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this.slider = new v()), this.addChild(this.upButton = new d()), this.addChild(this.downButton = new d());
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    this.slider.showLabel = !1, this.slider.tick = 0, this.slider.on(e.Event.CHANGE, this, this.onSliderChange),
                        this.slider.setSlider(0, 0, 0), this.upButton.on(e.Event.MOUSE_DOWN, this, this.onButtonMouseDown),
                        this.downButton.on(e.Event.MOUSE_DOWN, this, this.onButtonMouseDown);
                }
            }, {
                key: "onSliderChange",
                value: function onSliderChange() {
                    this._value != this.slider.value && (this.value = this.slider.value);
                }
            }, {
                key: "onButtonMouseDown",
                value: function onButtonMouseDown(t) {
                    var s = t.currentTarget === this.upButton;
                    this.slide(s), e.ILaya.timer.once(i.scrollBarDelayTime, this, this.startLoop, [s]),
                        e.ILaya.stage.once(e.Event.MOUSE_UP, this, this.onStageMouseUp);
                }
            }, {
                key: "startLoop",
                value: function startLoop(t) {
                    e.ILaya.timer.frameLoop(1, this, this.slide, [t]);
                }
            }, {
                key: "slide",
                value: function slide(t) {
                    t ? this.value -= this._scrollSize : this.value += this._scrollSize;
                }
            }, {
                key: "onStageMouseUp",
                value: function onStageMouseUp(t) {
                    e.ILaya.timer.clear(this, this.startLoop), e.ILaya.timer.clear(this, this.slide);
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this.slider.skin = this._skin, this.callLater(this.changeScrollBar), this._sizeChanged(),
                        this.event(e.Event.LOADED);
                }
            }, {
                key: "changeScrollBar",
                value: function changeScrollBar() {
                    this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons,
                        this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"),
                            this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0,
                        this.resetPositions(), this.repaint();
                }
            }, {
                key: "_sizeChanged",
                value: function _sizeChanged() {
                    _get(_getPrototypeOf(m.prototype), "_sizeChanged", this).call(this), this.repaint(),
                        this.resetPositions(), this.event(e.Event.CHANGE), this.changeHandler && this.changeHandler.runWith(this.value);
                }
            }, {
                key: "resetPositions",
                value: function resetPositions() {
                    this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0),
                        this.resetButtonPosition();
                }
            }, {
                key: "resetButtonPosition",
                value: function resetButtonPosition() {
                    this.slider.isVertical ? this.downButton.y = this.slider._y + this.slider.height : this.downButton.x = this.slider._x + this.slider.width;
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this.slider.isVertical ? this.slider.width : 100;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this.slider.isVertical ? 100 : this.slider.height;
                }
            }, {
                key: "setScroll",
                value: function setScroll(t, e, s) {
                    this.runCallLater(this._sizeChanged), this.slider.setSlider(t, e, s), this.slider.bar.visible = e > 0, !this._hide && this.autoHide && (this.visible = !1);
                }
            }, {
                key: "onTargetMouseWheel",
                value: function onTargetMouseWheel(t) {
                    this.value -= t.delta * this._scrollSize, this.target = this._target;
                }
            }, {
                key: "onTargetMouseDown",
                value: function onTargetMouseDown(t) {
                    this.isLockedFun && !this.isLockedFun(t) || (this.event(e.Event.END), this._clickOnly = !0,
                        this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new e.Point()),
                        this._lastPoint.setTo(e.ILaya.stage.mouseX, e.ILaya.stage.mouseY), e.ILaya.timer.clear(this, this.tweenMove),
                        e.Tween.clearTween(this), e.ILaya.stage.once(e.Event.MOUSE_UP, this, this.onStageMouseUp2),
                        e.ILaya.stage.once(e.Event.MOUSE_OUT, this, this.onStageMouseUp2), e.ILaya.timer.frameLoop(1, this, this.loop));
                }
            }, {
                key: "startDragForce",
                value: function startDragForce() {
                    this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new e.Point()),
                        this._lastPoint.setTo(e.ILaya.stage.mouseX, e.ILaya.stage.mouseY), e.ILaya.timer.clear(this, this.tweenMove),
                        e.Tween.clearTween(this), e.ILaya.stage.once(e.Event.MOUSE_UP, this, this.onStageMouseUp2),
                        e.ILaya.stage.once(e.Event.MOUSE_OUT, this, this.onStageMouseUp2), e.ILaya.timer.frameLoop(1, this, this.loop);
                }
            }, {
                key: "cancelDragOp",
                value: function cancelDragOp() {
                    e.ILaya.stage.off(e.Event.MOUSE_UP, this, this.onStageMouseUp2), e.ILaya.stage.off(e.Event.MOUSE_OUT, this, this.onStageMouseUp2),
                        e.ILaya.timer.clear(this, this.tweenMove), e.ILaya.timer.clear(this, this.loop),
                        this._target.mouseEnabled = !0;
                }
            }, {
                key: "checkTriggers",
                value: function checkTriggers() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                    return this.value >= 0 && this.value - this._lastOffset <= 0 && this.triggerDownDragLimit && this.triggerDownDragLimit(t) ? (this.cancelDragOp(),
                        this.value = 0, !0) : !!(this.value <= this.max && this.value - this._lastOffset >= this.max && this.triggerUpDragLimit && this.triggerUpDragLimit(t)) && (this.cancelDragOp(),
                        this.value = this.max, !0);
                }
            }, {
                key: "startTweenMoveForce",
                value: function startTweenMoveForce(t) {
                    this._lastOffset = t, e.ILaya.timer.frameLoop(1, this, this.tweenMove, [200]);
                }
            }, {
                key: "loop",
                value: function loop() {
                    var t = e.ILaya.stage.mouseY,
                        s = e.ILaya.stage.mouseX;
                    if (this._lastOffset = this.isVertical ? t - this._lastPoint.y : s - this._lastPoint.x,
                        this._clickOnly) {
                        if (!(Math.abs(this._lastOffset * (this.isVertical ? e.ILaya.stage._canvasTransform.getScaleY() : e.ILaya.stage._canvasTransform.getScaleX())) > 1)) return;
                        if (this._clickOnly = !1, this.checkTriggers()) return;
                        this._offsets || (this._offsets = []), this._offsets.length = 0, this._target.mouseEnabled = !1, !this.hide && this.autoHide && (this.alpha = 1, this.visible = !0), this.event(e.Event.START);
                    } else if (this.checkTriggers()) return;
                    this._offsets.push(this._lastOffset), this._lastPoint.x = s, this._lastPoint.y = t,
                        0 !== this._lastOffset && (this._checkElastic || (this.elasticDistance > 0 ? this._checkElastic || 0 == this._lastOffset || (this._lastOffset > 0 && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0,
                            this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? this._lastOffset > 0 ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : (this.value -= .5 * this._lastOffset,
                            this._value >= this.min && (this._checkElastic = !1)) : this._value >= this.max && (this._lastOffset < 0 ? this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance) : (this.value -= .5 * this._lastOffset,
                            this._value <= this.max && (this._checkElastic = !1))) : this.value -= this._lastOffset);
                }
            }, {
                key: "onStageMouseUp2",
                value: function onStageMouseUp2(t) {
                    if (e.ILaya.stage.off(e.Event.MOUSE_UP, this, this.onStageMouseUp2), e.ILaya.stage.off(e.Event.MOUSE_OUT, this, this.onStageMouseUp2),
                        e.ILaya.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max))
                        if (this._target.mouseEnabled = !0,
                            this._isElastic) this._value < this.min ? e.Tween.to(this, {
                            value: this.min
                        }, this.elasticBackTime, e.Ease.sineOut, e.Handler.create(this, this.elasticOver)) : this._value > this.max && e.Tween.to(this, {
                            value: this.max
                        }, this.elasticBackTime, e.Ease.sineOut, e.Handler.create(this, this.elasticOver));
                        else {
                            if (!this._offsets) return;
                            this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? e.ILaya.stage.mouseY - this._lastPoint.y : e.ILaya.stage.mouseX - this._lastPoint.x);
                            for (var s = 0, i = Math.min(this._offsets.length, 3), h = 0; h < i; h++) {
                                s += this._offsets[this._offsets.length - 1 - h];
                            }
                            if (this._lastOffset = s / i, (s = Math.abs(this._lastOffset)) < 2) return void this.event(e.Event.END);
                            s > 250 && (this._lastOffset = this._lastOffset > 0 ? 250 : -250);
                            var a = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 150)));
                            e.ILaya.timer.frameLoop(1, this, this.tweenMove, [a]);
                        }
                }
            }, {
                key: "elasticOver",
                value: function elasticOver() {
                    this._isElastic = !1, !this.hide && this.autoHide && e.Tween.to(this, {
                        alpha: 0
                    }, 500), this.event(e.Event.END);
                }
            }, {
                key: "tweenMove",
                value: function tweenMove(t) {
                    var s;
                    if ((this._lastOffset *= this.rollRatio, !this.checkTriggers(!0)) && (t > 0 && (this._lastOffset > 0 && this.value <= this.min ? (this._isElastic = !0,
                                s = .5 * -(this.min - t - this.value), this._lastOffset > s && (this._lastOffset = s)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0,
                                s = .5 * -(this.max + t - this.value), this._lastOffset < s && (this._lastOffset = s))),
                            this.value -= this._lastOffset, Math.abs(this._lastOffset) < .1)) {
                        if (e.ILaya.timer.clear(this, this.tweenMove), this._isElastic) return void(this._value < this.min ? e.Tween.to(this, {
                            value: this.min
                        }, this.elasticBackTime, e.Ease.sineOut, e.Handler.create(this, this.elasticOver)) : this._value > this.max ? e.Tween.to(this, {
                            value: this.max
                        }, this.elasticBackTime, e.Ease.sineOut, e.Handler.create(this, this.elasticOver)) : this.elasticOver());
                        this.event(e.Event.END), !this.hide && this.autoHide && e.Tween.to(this, {
                            alpha: 0
                        }, 500);
                    }
                }
            }, {
                key: "stopScroll",
                value: function stopScroll() {
                    this.onStageMouseUp2(null), e.ILaya.timer.clear(this, this.tweenMove), e.Tween.clearTween(this);
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    " " != t && this._skin != t && (this._skin = t, this._skin && !e.Loader.getRes(this._skin) ? e.ILaya.loader.load([this._skin, this._skin.replace(".png", "$up.png"), this._skin.replace(".png", "$down.png"), this._skin.replace(".png", "$bar.png")], e.Handler.create(this, this._skinLoaded)) : this._skinLoaded());
                }
            }, {
                key: "max",
                get: function get() {
                    return this.slider.max;
                },
                set: function set(t) {
                    this.slider.max = t;
                }
            }, {
                key: "min",
                get: function get() {
                    return this.slider.min;
                },
                set: function set(t) {
                    this.slider.min = t;
                }
            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(t) {
                    t !== this._value && (this._value = t, this._isElastic || (this.slider._value != t && (this.slider._value = t,
                            this.slider.changeValue()), this._value = this.slider._value), this.event(e.Event.CHANGE),
                        this.changeHandler && this.changeHandler.runWith(this._value));
                }
            }, {
                key: "isVertical",
                get: function get() {
                    return this.slider.isVertical;
                },
                set: function set(t) {
                    this.slider.isVertical = t;
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this.slider.sizeGrid;
                },
                set: function set(t) {
                    this.slider.sizeGrid = t;
                }
            }, {
                key: "scrollSize",
                get: function get() {
                    return this._scrollSize;
                },
                set: function set(t) {
                    this._scrollSize = t;
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : _set(_getPrototypeOf(m.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(m.prototype), "dataSource", this);
                }
            }, {
                key: "thumbPercent",
                get: function get() {
                    return this._thumbPercent;
                },
                set: function set(t) {
                    this.runCallLater(this.changeScrollBar), this.runCallLater(this._sizeChanged), t = t >= 1 ? .99 : t,
                        this._thumbPercent = t, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * t, i.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * t, i.scrollBarMinNum));
                }
            }, {
                key: "target",
                get: function get() {
                    return this._target;
                },
                set: function set(t) {
                    this._target && (this._target.off(e.Event.MOUSE_WHEEL, this, this.onTargetMouseWheel),
                            this._target.off(e.Event.MOUSE_DOWN, this, this.onTargetMouseDown)), this._target = t,
                        t && (this._mouseWheelEnable && this._target.on(e.Event.MOUSE_WHEEL, this, this.onTargetMouseWheel),
                            this._touchScrollEnable && this._target.on(e.Event.MOUSE_DOWN, this, this.onTargetMouseDown));
                }
            }, {
                key: "hide",
                get: function get() {
                    return this._hide;
                },
                set: function set(t) {
                    this._hide = t, this.visible = !t;
                }
            }, {
                key: "showButtons",
                get: function get() {
                    return this._showButtons;
                },
                set: function set(t) {
                    this._showButtons = t, this.callLater(this.changeScrollBar);
                }
            }, {
                key: "touchScrollEnable",
                get: function get() {
                    return this._touchScrollEnable;
                },
                set: function set(t) {
                    this._touchScrollEnable = t, this.target = this._target;
                }
            }, {
                key: "mouseWheelEnable",
                get: function get() {
                    return this._mouseWheelEnable;
                },
                set: function set(t) {
                    this._mouseWheelEnable = t, this.target = this._target;
                }
            }, {
                key: "lastOffset",
                get: function get() {
                    return this._lastOffset;
                }
            }, {
                key: "tick",
                get: function get() {
                    return this.slider.tick;
                },
                set: function set(t) {
                    this.slider.tick = t;
                }
            }]);
            return m;
        }(n);
    e.ILaya.regClass(m), e.ClassUtils.regClass("laya.ui.ScrollBar", m), e.ClassUtils.regClass("Laya.ScrollBar", m);
    var f =
        /* */
        function(_m) {
            _inherits(f, _m);

            function f() {
                _classCallCheck(this, f);
                return _possibleConstructorReturn(this, _getPrototypeOf(f).apply(this, arguments));
            }
            return f;
        }(m);
    e.ILaya.regClass(f), e.ClassUtils.regClass("laya.ui.VScrollBar", f), e.ClassUtils.regClass("Laya.VScrollBar", f);
    var S =
        /* */
        function(_m2) {
            _inherits(S, _m2);

            function S() {
                _classCallCheck(this, S);
                return _possibleConstructorReturn(this, _getPrototypeOf(S).apply(this, arguments));
            }
            _createClass(S, [{
                key: "initialize",
                value: function initialize() {
                    _get(_getPrototypeOf(S.prototype), "initialize", this).call(this), this.slider.isVertical = !1;
                }
            }]);
            return S;
        }(m);
    e.ILaya.regClass(S), e.ClassUtils.regClass("laya.ui.HScrollBar", S), e.ClassUtils.regClass("Laya.HScrollBar", S);
    var b =
        /* */
        function(_c) {
            _inherits(b, _c);

            function b() {
                var _this13;
                _classCallCheck(this, b);
                _this13 = _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments)),
                    _this13.selectEnable = !1, _this13.totalPage = 0, _this13._$componentType = "List",
                    _this13._repeatX = 0, _this13._repeatY = 0, _this13._repeatX2 = 0, _this13._repeatY2 = 0,
                    _this13._spaceX = 0, _this13._spaceY = 0, _this13._cells = [], _this13._startIndex = 0,
                    _this13._selectedIndex = -1, _this13._page = 0, _this13._isVertical = !0, _this13._cellSize = 20,
                    _this13._cellOffset = 0, _this13._createdLine = 0, _this13._offset = new e.Point(),
                    _this13._usedCache = null, _this13._elasticEnabled = !1, _this13._preLen = 0;
                return _this13;
            }
            _createClass(b, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    this._content && this._content.destroy(t), this._scrollBar && this._scrollBar.destroy(t),
                        _get(_getPrototypeOf(b.prototype), "destroy", this).call(this, t), this._content = null,
                        this._scrollBar = null, this._itemRender = null, this._cells = null, this._array = null,
                        this.selectHandler = this.renderHandler = this.mouseHandler = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._content = new c());
                }
            }, {
                key: "onScrollStart",
                value: function onScrollStart() {
                    this._usedCache || (this._usedCache = _get(_getPrototypeOf(b.prototype), "cacheAs", this)),
                        _set(_getPrototypeOf(b.prototype), "cacheAs", "none", this, true), this._scrollBar.once(e.Event.END, this, this.onScrollEnd);
                }
            }, {
                key: "onScrollEnd",
                value: function onScrollEnd() {
                    _set(_getPrototypeOf(b.prototype), "cacheAs", this._usedCache, this, true);
                }
            }, {
                key: "_removePreScrollBar",
                value: function _removePreScrollBar() {
                    var t = this.removeChildByName("scrollBar");
                    t && t.destroy(!0);
                }
            }, {
                key: "changeCells",
                value: function changeCells() {
                    if (this._cellChanged = !1, this._itemRender) {
                        this.scrollBar = this.getChildByName("scrollBar");
                        var t = this._getOneCell(),
                            e = t.width + this._spaceX || 1,
                            s = t.height + this._spaceY || 1;
                        this._width > 0 && (this._repeatX2 = this._isVertical ? Math.round(this._width / e) : Math.ceil(this._width / e)),
                            this._height > 0 && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / s) : Math.round(this._height / s));
                        var i = this._width ? this._width : e * this.repeatX - this._spaceX,
                            h = this._height ? this._height : s * this.repeatY - this._spaceY;
                        this._cellSize = this._isVertical ? s : e, this._cellOffset = this._isVertical ? s * Math.max(this._repeatY2, this._repeatY) - h - this._spaceY : e * Math.max(this._repeatX2, this._repeatX) - i - this._spaceX,
                            this._isVertical && this.vScrollBarSkin ? this._scrollBar.height = h : !this._isVertical && this.hScrollBarSkin && (this._scrollBar.width = i),
                            this.setContentSize(i, h);
                        var a = this._isVertical ? this.repeatX : this.repeatY,
                            r = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                        this._createItems(0, a, r), this._createdLine = r, this._array && (this.array = this._array,
                            this.runCallLater(this.renderItems));
                    }
                }
            }, {
                key: "_getOneCell",
                value: function _getOneCell() {
                    if (0 === this._cells.length) {
                        var t = this.createItem();
                        if (this._offset.setTo(t._x, t._y), this.cacheContent) return t;
                        this._cells.push(t);
                    }
                    return this._cells[0];
                }
            }, {
                key: "_createItems",
                value: function _createItems(t, e, s) {
                    var i = this._content,
                        h = this._getOneCell(),
                        a = h.width + this._spaceX,
                        r = h.height + this._spaceY;
                    if (this.cacheContent) {
                        var l = new c();
                        l.cacheAs = "normal", l.pos((this._isVertical ? 0 : t) * a, (this._isVertical ? t : 0) * r),
                            this._content.addChild(l), i = l;
                    } else {
                        for (var n = [], o = this._cells.length - 1; o > -1; o--) {
                            var _ = this._cells[o];
                            _.removeSelf(), n.push(_);
                        }
                        this._cells.length = 0;
                    }
                    for (var d = t; d < s; d++) {
                        for (var u = 0; u < e; u++) {
                            (h = n && n.length ? n.pop() : this.createItem()).x = (this._isVertical ? u : d) * a - i._x,
                                h.y = (this._isVertical ? d : u) * r - i._y, h.name = "item" + (d * e + u), i.addChild(h),
                                this.addCell(h);
                        }
                    }
                }
            }, {
                key: "createItem",
                value: function createItem() {
                    var t = [];
                    if ("function" == typeof this._itemRender) var s = new this._itemRender();
                    else s = e.SceneUtils.createComp(this._itemRender, null, null, t);
                    if (0 == t.length && s._watchMap) {
                        var i = s._watchMap;
                        for (var h in i) {
                            for (var a = i[h], r = 0; r < a.length; r++) {
                                var l = a[r];
                                t.push(l.comp, l.prop, l.value);
                            }
                        }
                    }
                    return t.length && (s._$bindData = t), s;
                }
            }, {
                key: "addCell",
                value: function addCell(t) {
                    t.on(e.Event.CLICK, this, this.onCellMouse), t.on(e.Event.RIGHT_CLICK, this, this.onCellMouse),
                        t.on(e.Event.MOUSE_OVER, this, this.onCellMouse), t.on(e.Event.MOUSE_OUT, this, this.onCellMouse),
                        t.on(e.Event.MOUSE_DOWN, this, this.onCellMouse), t.on(e.Event.MOUSE_UP, this, this.onCellMouse),
                        this._cells.push(t);
                }
            }, {
                key: "_afterInited",
                value: function _afterInited() {
                    this.initItems();
                }
            }, {
                key: "initItems",
                value: function initItems() {
                    if (!this._itemRender && null != this.getChildByName("item0")) {
                        var t;
                        this.repeatX = 1, t = 0;
                        for (var e = 0; e < 1e4; e++) {
                            var s = this.getChildByName("item" + e);
                            if (!s) break;
                            this.addCell(s), t++;
                        }
                        this.repeatY = t;
                    }
                }
            }, {
                key: "setContentSize",
                value: function setContentSize(t, s) {
                    this._content.width = t, this._content.height = s, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content._style.scrollRect || (this._content.scrollRect = e.Rectangle.create()),
                            this._content._style.scrollRect.setTo(-this._offset.x, -this._offset.y, t, s), this._content.scrollRect = this._content.scrollRect),
                        this.event(e.Event.RESIZE);
                }
            }, {
                key: "onCellMouse",
                value: function onCellMouse(t) {
                    t.type === e.Event.MOUSE_DOWN && (this._isMoved = !1);
                    var s = t.currentTarget,
                        i = this._startIndex + this._cells.indexOf(s);
                    i < 0 || (t.type === e.Event.CLICK || t.type === e.Event.RIGHT_CLICK ? this.selectEnable && !this._isMoved ? this.selectedIndex = i : this.changeCellState(s, !0, 0) : t.type !== e.Event.MOUSE_OVER && t.type !== e.Event.MOUSE_OUT || this._selectedIndex === i || this.changeCellState(s, t.type === e.Event.MOUSE_OVER, 0),
                        this.mouseHandler && this.mouseHandler.runWith([t, i]));
                }
            }, {
                key: "changeCellState",
                value: function changeCellState(t, e, s) {
                    var i = t.getChildByName("selectBox");
                    i && (this.selectEnable = !0, i.visible = e, i.index = s);
                }
            }, {
                key: "_sizeChanged",
                value: function _sizeChanged() {
                    _get(_getPrototypeOf(b.prototype), "_sizeChanged", this).call(this), this.setContentSize(this.width, this.height),
                        this._scrollBar && this.callLater(this.onScrollBarChange);
                }
            }, {
                key: "onScrollBarChange",
                value: function onScrollBarChange() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.runCallLater(this.changeCells);
                    var e = this._scrollBar.value,
                        s = this._isVertical ? this.repeatX : this.repeatY,
                        i = this._isVertical ? this.repeatY : this.repeatX,
                        h = Math.floor(e / this._cellSize);
                    if (this.cacheContent) r = i + 1, this._createdLine - h < r && (this._createItems(this._createdLine, s, this._createdLine + r),
                        this.renderItems(this._createdLine * s, 0), this._createdLine += r);
                    else {
                        var a = h * s,
                            r = 0;
                        if (a > this._startIndex) {
                            r = a - this._startIndex;
                            var l = !0,
                                n = this._startIndex + s * (i + 1);
                            this._isMoved = !0;
                        } else a < this._startIndex && (r = this._startIndex - a, l = !1, n = this._startIndex - 1,
                            this._isMoved = !0);
                        for (var o = 0; o < r; o++) {
                            if (l) {
                                var _ = this._cells.shift();
                                this._cells[this._cells.length] = _;
                                var c = n + o;
                            } else _ = this._cells.pop(), this._cells.unshift(_), c = n - o;
                            var d = Math.floor(c / s) * this._cellSize;
                            this._isVertical ? _.y = d : _.x = d, this.renderItem(_, c);
                        }
                        this._startIndex = a, this.changeSelectStatus();
                    }
                    var u = this._content._style.scrollRect;
                    this._isVertical ? (u.y = e - this._offset.y, u.x = -this._offset.x) : (u.y = -this._offset.y,
                        u.x = e - this._offset.x), this._content.scrollRect = u;
                }
            }, {
                key: "posCell",
                value: function posCell(t, e) {
                    if (this._scrollBar) {
                        var s = this._isVertical ? this.repeatX : this.repeatY,
                            i = (this._isVertical ? this.repeatY : this.repeatX,
                                Math.floor(e / s) * this._cellSize);
                        this._isVertical ? t._y = i : t.x = i;
                    }
                }
            }, {
                key: "changeSelectStatus",
                value: function changeSelectStatus() {
                    for (var t = 0, e = this._cells.length; t < e; t++) {
                        this.changeCellState(this._cells[t], this._selectedIndex === this._startIndex + t, 1);
                    }
                }
            }, {
                key: "renderItems",
                value: function renderItems() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    for (var s = t, i = e || this._cells.length; s < i; s++) {
                        this.renderItem(this._cells[s], this._startIndex + s);
                    }
                    this.changeSelectStatus();
                }
            }, {
                key: "renderItem",
                value: function renderItem(t, s) {
                    this._array && s >= 0 && s < this._array.length ? (t.visible = !0, t._$bindData ? (t._dataSource = this._array[s],
                            this._bindData(t, this._array[s])) : t.dataSource = this._array[s], this.cacheContent || this.posCell(t, s),
                        this.hasListener(e.Event.RENDER) && this.event(e.Event.RENDER, [t, s]), this.renderHandler && this.renderHandler.runWith([t, s])) : (t.visible = !1,
                        t.dataSource = null);
                }
            }, {
                key: "_bindData",
                value: function _bindData(t, e) {
                    for (var s = t._$bindData, i = 0, h = s.length; i < h; i++) {
                        var a = s[i++],
                            r = s[i++],
                            n = s[i],
                            o = l.getBindFun(n);
                        a[r] = o.call(this, e);
                    }
                }
            }, {
                key: "updateArray",
                value: function updateArray(t) {
                    var e;
                    if (this._array = t, this._array && ((e = this._preLen - this._startIndex) >= 0 && this.renderItems(e),
                            this._preLen = this._array.length), this._scrollBar) {
                        var s = t.length,
                            i = this._isVertical ? this.repeatX : this.repeatY,
                            h = this._isVertical ? this.repeatY : this.repeatX,
                            a = Math.ceil(s / i);
                        a >= h && (this._scrollBar.thumbPercent = h / a, this._scrollBar.slider._max = (a - h) * this._cellSize + this._cellOffset);
                    }
                }
            }, {
                key: "refresh",
                value: function refresh() {
                    this.array = this._array;
                }
            }, {
                key: "getItem",
                value: function getItem(t) {
                    return t > -1 && t < this._array.length ? this._array[t] : null;
                }
            }, {
                key: "changeItem",
                value: function changeItem(t, e) {
                    t > -1 && t < this._array.length && (this._array[t] = e, t >= this._startIndex && t < this._startIndex + this._cells.length && this.renderItem(this.getCell(t), t));
                }
            }, {
                key: "setItem",
                value: function setItem(t, e) {
                    this.changeItem(t, e);
                }
            }, {
                key: "addItem",
                value: function addItem(t) {
                    this._array.push(t), this.array = this._array;
                }
            }, {
                key: "addItemAt",
                value: function addItemAt(t, e) {
                    this._array.splice(e, 0, t), this.array = this._array;
                }
            }, {
                key: "deleteItem",
                value: function deleteItem(t) {
                    this._array.splice(t, 1), this.array = this._array;
                }
            }, {
                key: "getCell",
                value: function getCell(t) {
                    return this.runCallLater(this.changeCells), t > -1 && this._cells ? this._cells[(t - this._startIndex) % this._cells.length] : null;
                }
            }, {
                key: "scrollTo",
                value: function scrollTo(t) {
                    if (this._scrollBar) {
                        var e = this._isVertical ? this.repeatX : this.repeatY;
                        this._scrollBar.value = Math.floor(t / e) * this._cellSize;
                    } else this.startIndex = t;
                }
            }, {
                key: "tweenTo",
                value: function tweenTo(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    if (this._scrollBar) {
                        this._scrollBar.stopScroll();
                        var h = this._isVertical ? this.repeatX : this.repeatY;
                        e.Tween.to(this._scrollBar, {
                            value: Math.floor(t / h) * this._cellSize
                        }, s, null, i, 0, !0);
                    } else this.startIndex = t, i && i.run();
                }
            }, {
                key: "_setCellChanged",
                value: function _setCellChanged() {
                    this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells));
                }
            }, {
                key: "commitMeasure",
                value: function commitMeasure() {
                    this.runCallLater(this.changeCells);
                }
            }, {
                key: "cacheAs",
                set: function set(t) {
                    _set(_getPrototypeOf(b.prototype), "cacheAs", t, this, true), this._scrollBar && (this._usedCache = null,
                        "none" !== t ? this._scrollBar.on(e.Event.START, this, this.onScrollStart) : this._scrollBar.off(e.Event.START, this, this.onScrollStart));
                },
                get: function get() {
                    return _get(_getPrototypeOf(b.prototype), "cacheAs", this);
                }
            }, {
                key: "content",
                get: function get() {
                    return this._content;
                }
            }, {
                key: "vScrollBarSkin",
                get: function get() {
                    return this._scrollBar ? this._scrollBar.skin : null;
                },
                set: function set(t) {
                    this._removePreScrollBar();
                    var e = new f();
                    e.name = "scrollBar", e.right = 0, e.skin = t, e.elasticDistance = this._elasticEnabled ? 200 : 0,
                        this.scrollBar = e, this.addChild(e), this._setCellChanged();
                }
            }, {
                key: "hScrollBarSkin",
                get: function get() {
                    return this._scrollBar ? this._scrollBar.skin : null;
                },
                set: function set(t) {
                    this._removePreScrollBar();
                    var e = new S();
                    e.name = "scrollBar", e.bottom = 0, e.skin = t, e.elasticDistance = this._elasticEnabled ? 200 : 0,
                        this.scrollBar = e, this.addChild(e), this._setCellChanged();
                }
            }, {
                key: "scrollBar",
                get: function get() {
                    return this._scrollBar;
                },
                set: function set(t) {
                    this._scrollBar != t && (this._scrollBar = t, t && (this._isVertical = this._scrollBar.isVertical,
                        this.addChild(this._scrollBar), this._scrollBar.on(e.Event.CHANGE, this, this.onScrollBarChange)));
                }
            }, {
                key: "itemRender",
                get: function get() {
                    return this._itemRender;
                },
                set: function set(t) {
                    if (this._itemRender != t) {
                        this._itemRender = t;
                        for (var e = this._cells.length - 1; e > -1; e--) {
                            this._cells[e].destroy();
                        }
                        this._cells.length = 0, this._setCellChanged();
                    }
                }
            }, {
                key: "width",
                set: function set(t) {
                    t != this._width && (_set(_getPrototypeOf(b.prototype), "width", t, this, true),
                        this._setCellChanged());
                },
                get: function get() {
                    return _get(_getPrototypeOf(b.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    t != this._height && (_set(_getPrototypeOf(b.prototype), "height", t, this, true),
                        this._setCellChanged());
                },
                get: function get() {
                    return _get(_getPrototypeOf(b.prototype), "height", this);
                }
            }, {
                key: "repeatX",
                get: function get() {
                    return this._repeatX > 0 ? this._repeatX : this._repeatX2 > 0 ? this._repeatX2 : 1;
                },
                set: function set(t) {
                    this._repeatX = t, this._setCellChanged();
                }
            }, {
                key: "repeatY",
                get: function get() {
                    return this._repeatY > 0 ? this._repeatY : this._repeatY2 > 0 ? this._repeatY2 : 1;
                },
                set: function set(t) {
                    this._repeatY = t, this._setCellChanged();
                }
            }, {
                key: "spaceX",
                get: function get() {
                    return this._spaceX;
                },
                set: function set(t) {
                    this._spaceX = t, this._setCellChanged();
                }
            }, {
                key: "spaceY",
                get: function get() {
                    return this._spaceY;
                },
                set: function set(t) {
                    this._spaceY = t, this._setCellChanged();
                }
            }, {
                key: "selectedIndex",
                get: function get() {
                    return this._selectedIndex;
                },
                set: function set(t) {
                    this._selectedIndex != t && (this._selectedIndex = t, this.changeSelectStatus(),
                        this.event(e.Event.CHANGE), this.selectHandler && this.selectHandler.runWith(t),
                        this.startIndex = this._startIndex);
                }
            }, {
                key: "selectedItem",
                get: function get() {
                    return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null;
                },
                set: function set(t) {
                    this.selectedIndex = this._array.indexOf(t);
                }
            }, {
                key: "selection",
                get: function get() {
                    return this.getCell(this._selectedIndex);
                },
                set: function set(t) {
                    this.selectedIndex = this._startIndex + this._cells.indexOf(t);
                }
            }, {
                key: "startIndex",
                get: function get() {
                    return this._startIndex;
                },
                set: function set(t) {
                    this._startIndex = t > 0 ? t : 0, this.callLater(this.renderItems);
                }
            }, {
                key: "array",
                get: function get() {
                    return this._array;
                },
                set: function set(t) {
                    this.runCallLater(this.changeCells), this._array = t || [], this._preLen = this._array.length;
                    var e = this._array.length;
                    if (this.totalPage = Math.ceil(e / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < e ? this._selectedIndex : e - 1,
                        this.startIndex = this._startIndex, this._scrollBar) {
                        this._scrollBar.stopScroll();
                        var s = this._isVertical ? this.repeatX : this.repeatY,
                            i = this._isVertical ? this.repeatY : this.repeatX,
                            h = Math.ceil(e / s);
                        (this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage) > 1 && h >= i ? (this._scrollBar.scrollSize = this._cellSize,
                            this._scrollBar.thumbPercent = i / h, this._scrollBar.setScroll(0, (h - i) * this._cellSize + this._cellOffset, this._scrollBar.value),
                            this._scrollBar.target = this._content) : (this._scrollBar.setScroll(0, 0, 0), this._scrollBar.target = this._content);
                    }
                }
            }, {
                key: "page",
                get: function get() {
                    return this._page;
                },
                set: function set(t) {
                    this._page = t, this._array && (this._page = t > 0 ? t : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1,
                        this.startIndex = this._page * this.repeatX * this.repeatY);
                }
            }, {
                key: "length",
                get: function get() {
                    return this._array ? this._array.length : 0;
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.array = t : _set(_getPrototypeOf(b.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(b.prototype), "dataSource", this);
                }
            }, {
                key: "cells",
                get: function get() {
                    return this.runCallLater(this.changeCells), this._cells;
                }
            }, {
                key: "elasticEnabled",
                get: function get() {
                    return this._elasticEnabled;
                },
                set: function set(t) {
                    this._elasticEnabled = t, this._scrollBar && (this._scrollBar.elasticDistance = t ? 200 : 0);
                }
            }]);
            return b;
        }(c);
    e.ILaya.regClass(b), e.ClassUtils.regClass("laya.ui.List", b), e.ClassUtils.regClass("Laya.List", b);
    var y =
        /* */
        function(_n9) {
            _inherits(y, _n9);

            function y() {
                var _this14;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                _classCallCheck(this, y);
                _this14 = _possibleConstructorReturn(this, _getPrototypeOf(y).call(this)), _this14._visibleNum = 6,
                    _this14._itemColors = i.comboBoxItemColors, _this14._itemSize = 12, _this14._labels = [],
                    _this14._selectedIndex = -1, _this14.itemRender = null, _this14.skin = t, _this14.labels = e;
                return _this14;
            }
            _createClass(y, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(y.prototype), "destroy", this).call(this, t), this._button && this._button.destroy(t),
                        this._list && this._list.destroy(t), this._button = null, this._list = null, this._itemColors = null,
                        this._labels = null, this._selectHandler = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._button = new d()), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5",
                        this._button.on(e.Event.MOUSE_DOWN, this, this.onButtonMouseDown);
                }
            }, {
                key: "_createList",
                value: function _createList() {
                    this._list = new b(), this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin),
                        this._setListEvent(this._list);
                }
            }, {
                key: "_setListEvent",
                value: function _setListEvent(t) {
                    this._list.selectEnable = !0, this._list.on(e.Event.MOUSE_DOWN, this, this.onListDown),
                        this._list.mouseHandler = e.Handler.create(this, this.onlistItemMouse, null, !1),
                        this._list.scrollBar && this._list.scrollBar.on(e.Event.MOUSE_DOWN, this, this.onScrollBarDown);
                }
            }, {
                key: "onListDown",
                value: function onListDown(t) {
                    t.stopPropagation();
                }
            }, {
                key: "onScrollBarDown",
                value: function onScrollBarDown(t) {
                    t.stopPropagation();
                }
            }, {
                key: "onButtonMouseDown",
                value: function onButtonMouseDown(t) {
                    this.callLater(this.switchTo, [!this._isOpen]);
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this._button.width;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this._button.height;
                }
            }, {
                key: "changeList",
                value: function changeList() {
                    this._listChanged = !1;
                    var t = this.width - 2,
                        e = this._itemColors[2];
                    this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
                        type: "Box",
                        child: [{
                            type: "Label",
                            props: {
                                name: "label",
                                x: 1,
                                padding: "3,3,3,3",
                                width: t,
                                height: this._itemHeight,
                                fontSize: this._itemSize,
                                color: e
                            }
                        }]
                    }, this._list.repeatY = this._visibleNum, this._list.refresh();
                }
            }, {
                key: "onlistItemMouse",
                value: function onlistItemMouse(t, s) {
                    var i = t.type;
                    if (i === e.Event.MOUSE_OVER || i === e.Event.MOUSE_OUT) {
                        if (this._isCustomList) return;
                        var h = this._list.getCell(s);
                        if (!h) return;
                        var a = h.getChildByName("label");
                        a && (i === e.Event.ROLL_OVER ? (a.bgColor = this._itemColors[0], a.color = this._itemColors[1]) : (a.bgColor = null,
                            a.color = this._itemColors[2]));
                    } else i === e.Event.CLICK && (this.selectedIndex = s, this.isOpen = !1);
                }
            }, {
                key: "switchTo",
                value: function switchTo(t) {
                    this.isOpen = t;
                }
            }, {
                key: "changeOpen",
                value: function changeOpen() {
                    this.isOpen = !this._isOpen;
                }
            }, {
                key: "changeItem",
                value: function changeItem() {
                    if (this._itemChanged = !1, this._listHeight = this._labels.length > 0 ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, !this._isCustomList) {
                        var t = this._list.graphics;
                        t.clear(!0), t.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3]);
                    }
                    var e = this._list.array || [];
                    e.length = 0;
                    for (var s = 0, i = this._labels.length; s < i; s++) {
                        e.push({
                            label: this._labels[s]
                        });
                    }
                    this._list.height = this._listHeight, this._list.array = e;
                }
            }, {
                key: "changeSelected",
                value: function changeSelected() {
                    this._button.label = this.selectedLabel;
                }
            }, {
                key: "_onStageMouseWheel",
                value: function _onStageMouseWheel(t) {
                    this._list && !this._list.contains(t.target) && this.removeList(null);
                }
            }, {
                key: "removeList",
                value: function removeList(t) {
                    e.ILaya.stage.off(e.Event.MOUSE_DOWN, this, this.removeList), e.ILaya.stage.off(e.Event.MOUSE_WHEEL, this, this._onStageMouseWheel),
                        this.isOpen = !1;
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._button.skin;
                },
                set: function set(t) {
                    this._button.skin != t && (this._button.skin = t, this._listChanged = !0);
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(y.prototype), "width", t, this, true), this._button.width = this._width,
                        this._itemChanged = !0, this._listChanged = !0;
                },
                get: function get() {
                    return _get(_getPrototypeOf(y.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(y.prototype), "height", t, this, true), this._button.height = this._height;
                },
                get: function get() {
                    return _get(_getPrototypeOf(y.prototype), "height", this);
                }
            }, {
                key: "labels",
                get: function get() {
                    return this._labels.join(",");
                },
                set: function set(t) {
                    this._labels.length > 0 && (this.selectedIndex = -1), t ? this._labels = t.split(",") : this._labels.length = 0,
                        this._itemChanged = !0;
                }
            }, {
                key: "selectedIndex",
                get: function get() {
                    return this._selectedIndex;
                },
                set: function set(t) {
                    this._selectedIndex != t && (this._selectedIndex = t, this._labels.length > 0 ? this.changeSelected() : this.callLater(this.changeSelected),
                        this.event(e.Event.CHANGE, [e.Event.EMPTY.setTo(e.Event.CHANGE, this, this)]),
                        this._selectHandler && this._selectHandler.runWith(this._selectedIndex));
                }
            }, {
                key: "selectHandler",
                get: function get() {
                    return this._selectHandler;
                },
                set: function set(t) {
                    this._selectHandler = t;
                }
            }, {
                key: "selectedLabel",
                get: function get() {
                    return this._selectedIndex > -1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null;
                },
                set: function set(t) {
                    this.selectedIndex = this._labels.indexOf(t);
                }
            }, {
                key: "visibleNum",
                get: function get() {
                    return this._visibleNum;
                },
                set: function set(t) {
                    this._visibleNum = t, this._listChanged = !0;
                }
            }, {
                key: "itemColors",
                get: function get() {
                    return String(this._itemColors);
                },
                set: function set(t) {
                    this._itemColors = l.fillArray(this._itemColors, t, String), this._listChanged = !0;
                }
            }, {
                key: "itemSize",
                get: function get() {
                    return this._itemSize;
                },
                set: function set(t) {
                    this._itemSize = t, this._listChanged = !0;
                }
            }, {
                key: "isOpen",
                get: function get() {
                    return this._isOpen;
                },
                set: function set(t) {
                    if (this._isOpen != t)
                        if (this._isOpen = t, this._button.selected = this._isOpen,
                            this._isOpen) {
                            this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(),
                                this._itemChanged && this.changeItem();
                            var s = this.localToGlobal(e.Point.TEMP.setTo(0, 0)),
                                i = s.y + this._button.height;
                            i = i + this._listHeight <= e.ILaya.stage.height ? i : s.y - this._listHeight, this._list.pos(s.x, i),
                                this._list.zOrder = 1001, e.ILaya.stage.addChild(this._list), e.ILaya.stage.once(e.Event.MOUSE_DOWN, this, this.removeList),
                                e.ILaya.stage.on(e.Event.MOUSE_WHEEL, this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex;
                        } else this._list && this._list.removeSelf();
                }
            }, {
                key: "scrollBarSkin",
                get: function get() {
                    return this._scrollBarSkin;
                },
                set: function set(t) {
                    this._scrollBarSkin = t;
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._button.sizeGrid;
                },
                set: function set(t) {
                    this._button.sizeGrid = t;
                }
            }, {
                key: "scrollBar",
                get: function get() {
                    return this.list.scrollBar;
                }
            }, {
                key: "button",
                get: function get() {
                    return this._button;
                }
            }, {
                key: "list",
                get: function get() {
                    return this._list || this._createList(), this._list;
                },
                set: function set(t) {
                    t && (t.removeSelf(), this._isCustomList = !0, this._list = t, this._setListEvent(t),
                        this._itemHeight = t.getCell(0).height + t.spaceY);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : _set(_getPrototypeOf(y.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(y.prototype), "dataSource", this);
                }
            }, {
                key: "labelColors",
                get: function get() {
                    return this._button.labelColors;
                },
                set: function set(t) {
                    this._button.labelColors != t && (this._button.labelColors = t);
                }
            }, {
                key: "labelPadding",
                get: function get() {
                    return this._button.text.padding.join(",");
                },
                set: function set(t) {
                    this._button.text.padding = l.fillArray(i.labelPadding, t, Number);
                }
            }, {
                key: "labelSize",
                get: function get() {
                    return this._button.text.fontSize;
                },
                set: function set(t) {
                    this._button.text.fontSize = t;
                }
            }, {
                key: "labelBold",
                get: function get() {
                    return this._button.text.bold;
                },
                set: function set(t) {
                    this._button.text.bold = t;
                }
            }, {
                key: "labelFont",
                get: function get() {
                    return this._button.text.font;
                },
                set: function set(t) {
                    this._button.text.font = t;
                }
            }, {
                key: "stateNum",
                get: function get() {
                    return this._button.stateNum;
                },
                set: function set(t) {
                    this._button.stateNum = t;
                }
            }]);
            return y;
        }(n);
    e.ILaya.regClass(y), e.ClassUtils.regClass("laya.ui.ComboBox", y), e.ClassUtils.regClass("Laya.ComboBox", y);
    var w =
        /* */
        function(_n10) {
            _inherits(w, _n10);

            function w() {
                var _this15;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _classCallCheck(this, w);
                _this15 = _possibleConstructorReturn(this, _getPrototypeOf(w).call(this)), _this15._value = .5,
                    _this15.skin = t;
                return _this15;
            }
            _createClass(w, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(w.prototype), "destroy", this).call(this, t), this._bg && this._bg.destroy(t),
                        this._bar && this._bar.destroy(t), this._bg = this._bar = null, this.changeHandler = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._bg = new o()), this.addChild(this._bar = new o()), this._bar._bitmap.autoCacheCmd = !1;
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"),
                        this.callLater(this.changeValue), this._sizeChanged(), this.event(e.Event.LOADED);
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this._bg.width;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this._bg.height;
                }
            }, {
                key: "changeValue",
                value: function changeValue() {
                    if (this.sizeGrid) {
                        var t = this.sizeGrid.split(","),
                            e = Number(t[3]),
                            s = Number(t[1]),
                            i = (this.width - e - s) * this._value;
                        this._bar.width = e + s + i, this._bar.visible = this._bar.width > e + s;
                    } else this._bar.width = this.width * this._value;
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    this._skin != t && (this._skin = t, this._skin && !e.Loader.getRes(this._skin) ? e.ILaya.loader.load(this._skin, e.Handler.create(this, this._skinLoaded), null, e.Loader.IMAGE, 1) : this._skinLoaded());
                }
            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(t) {
                    this._value != t && (t = t > 1 ? 1 : t < 0 ? 0 : t, this._value = t, this.callLater(this.changeValue),
                        this.event(e.Event.CHANGE), this.changeHandler && this.changeHandler.runWith(t));
                }
            }, {
                key: "bar",
                get: function get() {
                    return this._bar;
                }
            }, {
                key: "bg",
                get: function get() {
                    return this._bg;
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._bg.sizeGrid;
                },
                set: function set(t) {
                    this._bg.sizeGrid = this._bar.sizeGrid = t;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(w.prototype), "width", t, this, true), this._bg.width = this._width,
                        this.callLater(this.changeValue);
                },
                get: function get() {
                    return _get(_getPrototypeOf(w.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(w.prototype), "height", t, this, true), this._bg.height = this._height,
                        this._bar.height = this._height;
                },
                get: function get() {
                    return _get(_getPrototypeOf(w.prototype), "height", this);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : _set(_getPrototypeOf(w.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(w.prototype), "dataSource", this);
                }
            }]);
            return w;
        }(n);
    e.ILaya.regClass(w), e.ClassUtils.regClass("laya.ui.ProgressBar", w), e.ClassUtils.regClass("Laya.ProgressBar", w);
    var x =
        /* */
        function(_d2) {
            _inherits(x, _d2);

            function x() {
                var _this16;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                _classCallCheck(this, x);
                _this16 = _possibleConstructorReturn(this, _getPrototypeOf(x).call(this, t, e)),
                    _this16.toggle = !1, _this16._autoSize = !1;
                return _this16;
            }
            _createClass(x, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(x.prototype), "destroy", this).call(this, t), this._value = null;
                }
            }, {
                key: "preinitialize",
                value: function preinitialize() {
                    _get(_getPrototypeOf(x.prototype), "preinitialize", this).call(this), this.toggle = !1,
                        this._autoSize = !1;
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    _get(_getPrototypeOf(x.prototype), "initialize", this).call(this), this.createText(),
                        this._text.align = "left", this._text.valign = "top", this._text.width = 0, this.on(e.Event.CLICK, this, this.onClick);
                }
            }, {
                key: "onClick",
                value: function onClick(t) {
                    this.selected = !0;
                }
            }, {
                key: "value",
                get: function get() {
                    return null != this._value ? this._value : this.label;
                },
                set: function set(t) {
                    this._value = t;
                }
            }]);
            return x;
        }(d);
    e.ILaya.regClass(x), e.ClassUtils.regClass("laya.ui.Radio", x), e.ClassUtils.regClass("Laya.Radio", x);
    var L =
        /* */
        function(_c2) {
            _inherits(L, _c2);

            function L() {
                var _this17;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                _classCallCheck(this, L);
                _this17 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this)), _this17._selectedIndex = -1,
                    _this17._direction = "horizontal", _this17._space = 0, _this17.skin = e, _this17.labels = t;
                return _this17;
            }
            _createClass(L, [{
                key: "preinitialize",
                value: function preinitialize() {
                    this.mouseEnabled = !0;
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(L.prototype), "destroy", this).call(this, t), this._items && (this._items.length = 0),
                        this._items = null, this.selectHandler = null;
                }
            }, {
                key: "addItem",
                value: function addItem(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    var s = t,
                        i = this._items.length;
                    if (s.name = "item" + i, this.addChild(s), this.initItems(), e && i > 0) {
                        var h = this._items[i - 1];
                        "horizontal" == this._direction ? s.x = h._x + h.width + this._space : s.y = h._y + h.height + this._space;
                    } else e && (s.x = 0, s.y = 0);
                    return i;
                }
            }, {
                key: "delItem",
                value: function delItem(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    var s = this._items.indexOf(t);
                    if (-1 != s) {
                        var i, h = t;
                        this.removeChild(h);
                        for (var a = s + 1, r = this._items.length; a < r; a++) {
                            var l = this._items[a];
                            l.name = "item" + (a - 1), e && ("horizontal" == this._direction ? l.x -= h.width + this._space : l.y -= h.height + this._space);
                        }
                        if (this.initItems(), this._selectedIndex > -1) i = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1,
                            this._selectedIndex = -1, this.selectedIndex = i;
                    }
                }
            }, {
                key: "_afterInited",
                value: function _afterInited() {
                    this.initItems();
                }
            }, {
                key: "initItems",
                value: function initItems() {
                    this._items || (this._items = []), this._items.length = 0;
                    for (var t = 0; t < 1e4; t++) {
                        var s = this.getChildByName("item" + t);
                        if (null == s) break;
                        this._items.push(s), s.selected = t === this._selectedIndex, s.clickHandler = e.Handler.create(this, this.itemClick, [t], !1);
                    }
                }
            }, {
                key: "itemClick",
                value: function itemClick(t) {
                    this.selectedIndex = t;
                }
            }, {
                key: "setSelect",
                value: function setSelect(t, e) {
                    this._items && t > -1 && t < this._items.length && (this._items[t].selected = e);
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this._setLabelChanged(), this.event(e.Event.LOADED);
                }
            }, {
                key: "createItem",
                value: function createItem(t, e) {
                    return null;
                }
            }, {
                key: "changeLabels",
                value: function changeLabels() {
                    if (this._labelChanged = !1, this._items)
                        for (var t = 0, e = 0, s = this._items.length; e < s; e++) {
                            var i = this._items[e];
                            this._skin && (i.skin = this._skin), this._labelColors && (i.labelColors = this._labelColors),
                                this._labelSize && (i.labelSize = this._labelSize), this._labelStroke && (i.labelStroke = this._labelStroke),
                                this._labelStrokeColor && (i.labelStrokeColor = this._labelStrokeColor), this._strokeColors && (i.strokeColors = this._strokeColors),
                                this._labelBold && (i.labelBold = this._labelBold), this._labelPadding && (i.labelPadding = this._labelPadding),
                                this._labelAlign && (i.labelAlign = this._labelAlign), this._stateNum && (i.stateNum = this._stateNum),
                                this._labelFont && (i.labelFont = this._labelFont), "horizontal" === this._direction ? (i.y = 0,
                                    i.x = t, t += i.width + this._space) : (i.x = 0, i.y = t, t += i.height + this._space);
                        }
                    this._sizeChanged();
                }
            }, {
                key: "commitMeasure",
                value: function commitMeasure() {
                    this.runCallLater(this.changeLabels);
                }
            }, {
                key: "_setLabelChanged",
                value: function _setLabelChanged() {
                    this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels));
                }
            }, {
                key: "selectedIndex",
                get: function get() {
                    return this._selectedIndex;
                },
                set: function set(t) {
                    this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t,
                        this.setSelect(t, !0), this.event(e.Event.CHANGE), this.selectHandler && this.selectHandler.runWith(this._selectedIndex));
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    this._skin != t && (this._skin = t, this._skin && !e.Loader.getRes(this._skin) ? e.ILaya.loader.load(this._skin, e.Handler.create(this, this._skinLoaded), null, e.Loader.IMAGE, 1) : this._skinLoaded());
                }
            }, {
                key: "labels",
                get: function get() {
                    return this._labels;
                },
                set: function set(t) {
                    if (this._labels != t) {
                        if (this._labels = t, this.removeChildren(), this._setLabelChanged(), this._labels)
                            for (var e = this._labels.split(","), s = 0, i = e.length; s < i; s++) {
                                var h = this.createItem(this._skin, e[s]);
                                h.name = "item" + s, this.addChild(h);
                            }
                        this.initItems();
                    }
                }
            }, {
                key: "labelColors",
                get: function get() {
                    return this._labelColors;
                },
                set: function set(t) {
                    this._labelColors != t && (this._labelColors = t, this._setLabelChanged());
                }
            }, {
                key: "labelStroke",
                get: function get() {
                    return this._labelStroke;
                },
                set: function set(t) {
                    this._labelStroke != t && (this._labelStroke = t, this._setLabelChanged());
                }
            }, {
                key: "labelStrokeColor",
                get: function get() {
                    return this._labelStrokeColor;
                },
                set: function set(t) {
                    this._labelStrokeColor != t && (this._labelStrokeColor = t, this._setLabelChanged());
                }
            }, {
                key: "strokeColors",
                get: function get() {
                    return this._strokeColors;
                },
                set: function set(t) {
                    this._strokeColors != t && (this._strokeColors = t, this._setLabelChanged());
                }
            }, {
                key: "labelSize",
                get: function get() {
                    return this._labelSize;
                },
                set: function set(t) {
                    this._labelSize != t && (this._labelSize = t, this._setLabelChanged());
                }
            }, {
                key: "stateNum",
                get: function get() {
                    return this._stateNum;
                },
                set: function set(t) {
                    this._stateNum != t && (this._stateNum = t, this._setLabelChanged());
                }
            }, {
                key: "labelBold",
                get: function get() {
                    return this._labelBold;
                },
                set: function set(t) {
                    this._labelBold != t && (this._labelBold = t, this._setLabelChanged());
                }
            }, {
                key: "labelFont",
                get: function get() {
                    return this._labelFont;
                },
                set: function set(t) {
                    this._labelFont != t && (this._labelFont = t, this._setLabelChanged());
                }
            }, {
                key: "labelPadding",
                get: function get() {
                    return this._labelPadding;
                },
                set: function set(t) {
                    this._labelPadding != t && (this._labelPadding = t, this._setLabelChanged());
                }
            }, {
                key: "direction",
                get: function get() {
                    return this._direction;
                },
                set: function set(t) {
                    this._direction = t, this._setLabelChanged();
                }
            }, {
                key: "space",
                get: function get() {
                    return this._space;
                },
                set: function set(t) {
                    this._space = t, this._setLabelChanged();
                }
            }, {
                key: "items",
                get: function get() {
                    return this._items;
                }
            }, {
                key: "selection",
                get: function get() {
                    return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
                },
                set: function set(t) {
                    this.selectedIndex = this._items.indexOf(t);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : _set(_getPrototypeOf(L.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(L.prototype), "dataSource", this);
                }
            }]);
            return L;
        }(c);
    e.ILaya.regClass(L), e.ClassUtils.regClass("laya.ui.UIGroup", L), e.ClassUtils.regClass("Laya.UIGroup", L);
    var E =
        /* */
        function(_L) {
            _inherits(E, _L);

            function E() {
                _classCallCheck(this, E);
                return _possibleConstructorReturn(this, _getPrototypeOf(E).apply(this, arguments));
            }
            _createClass(E, [{
                key: "createItem",
                value: function createItem(t, e) {
                    return new x(t, e);
                }
            }]);
            return E;
        }(L);
    e.ILaya.regClass(E), e.ClassUtils.regClass("laya.ui.RadioGroup", E), e.ClassUtils.regClass("Laya.RadioGroup", E);
    var I =
        /* */
        function(_L2) {
            _inherits(I, _L2);

            function I() {
                _classCallCheck(this, I);
                return _possibleConstructorReturn(this, _getPrototypeOf(I).apply(this, arguments));
            }
            _createClass(I, [{
                key: "createItem",
                value: function createItem(t, e) {
                    return new d(t, e);
                }
            }]);
            return I;
        }(L);
    e.ILaya.regClass(I), e.ClassUtils.regClass("laya.ui.Tab", I), e.ClassUtils.regClass("Laya.Tab", I);
    var B =
        /* */
        function(_c3) {
            _inherits(B, _c3);

            function B() {
                var _this18;
                _classCallCheck(this, B);
                _this18 = _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments)),
                    _this18._setIndexHandler = e.Handler.create(_assertThisInitialized(_this18), _this18.setIndex, null, !1);
                return _this18;
            }
            _createClass(B, [{
                key: "setItems",
                value: function setItems(t) {
                    this.removeChildren();
                    for (var e = 0, s = 0, i = t.length; s < i; s++) {
                        var h = t[s];
                        h && (h.name = "item" + e, this.addChild(h), e++);
                    }
                    this.initItems();
                }
            }, {
                key: "addItem",
                value: function addItem(t) {
                    t.name = "item" + this._items.length, this.addChild(t), this.initItems();
                }
            }, {
                key: "_afterInited",
                value: function _afterInited() {
                    this.initItems();
                }
            }, {
                key: "initItems",
                value: function initItems() {
                    this._items = [];
                    for (var t = 0; t < 1e4; t++) {
                        var e = this.getChildByName("item" + t);
                        if (null == e) break;
                        this._items.push(e), e.visible = t == this._selectedIndex;
                    }
                }
            }, {
                key: "setSelect",
                value: function setSelect(t, e) {
                    this._items && t > -1 && t < this._items.length && (this._items[t].visible = e);
                }
            }, {
                key: "setIndex",
                value: function setIndex(t) {
                    this.selectedIndex = t;
                }
            }, {
                key: "selectedIndex",
                get: function get() {
                    return this._selectedIndex;
                },
                set: function set(t) {
                    this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t,
                        this.setSelect(this._selectedIndex, !0));
                }
            }, {
                key: "selection",
                get: function get() {
                    return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
                },
                set: function set(t) {
                    this.selectedIndex = this._items.indexOf(t);
                }
            }, {
                key: "setIndexHandler",
                get: function get() {
                    return this._setIndexHandler;
                },
                set: function set(t) {
                    this._setIndexHandler = t;
                }
            }, {
                key: "items",
                get: function get() {
                    return this._items;
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    if (this._dataSource = t, "number" == typeof t || "string" == typeof t) this.selectedIndex = parseInt(t);
                    else
                        for (var e in this._dataSource) {
                            e in this && (this[e] = this._dataSource[e]);
                        }
                },
                get: function get() {
                    return _get(_getPrototypeOf(B.prototype), "dataSource", this);
                }
            }]);
            return B;
        }(c);
    e.ILaya.regClass(B), e.ClassUtils.regClass("laya.ui.ViewStack", B), e.ClassUtils.regClass("Laya.ViewStack", B);
    var k =
        /* */
        function(_C) {
            _inherits(k, _C);

            function k() {
                var _this19;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                _classCallCheck(this, k);
                _this19 = _possibleConstructorReturn(this, _getPrototypeOf(k).call(this)), _this19.text = t,
                    _this19.skin = _this19.skin;
                return _this19;
            }
            _createClass(k, [{
                key: "preinitialize",
                value: function preinitialize() {
                    this.mouseEnabled = !0;
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(k.prototype), "destroy", this).call(this, t), this._bg && this._bg.destroy(),
                        this._bg = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._tf = new e.Input()), this._tf.padding = i.inputLabelPadding,
                        this._tf.on(e.Event.INPUT, this, this._onInput), this._tf.on(e.Event.ENTER, this, this._onEnter),
                        this._tf.on(e.Event.BLUR, this, this._onBlur), this._tf.on(e.Event.FOCUS, this, this._onFocus);
                }
            }, {
                key: "_onFocus",
                value: function _onFocus() {
                    this.event(e.Event.FOCUS, this);
                }
            }, {
                key: "_onBlur",
                value: function _onBlur() {
                    this.event(e.Event.BLUR, this);
                }
            }, {
                key: "_onInput",
                value: function _onInput() {
                    this.event(e.Event.INPUT, this);
                }
            }, {
                key: "_onEnter",
                value: function _onEnter() {
                    this.event(e.Event.ENTER, this);
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    this.width = 128, this.height = 22;
                }
            }, {
                key: "_skinLoaded",
                value: function _skinLoaded() {
                    this._bg || (this.graphics = this._bg = new h()), this._bg.source = e.Loader.getRes(this._skin),
                        this._width && (this._bg.width = this._width), this._height && (this._bg.height = this._height),
                        this._sizeChanged(), this.event(e.Event.LOADED);
                }
            }, {
                key: "select",
                value: function select() {
                    this._tf.select();
                }
            }, {
                key: "setSelection",
                value: function setSelection(t, e) {
                    this._tf.setSelection(t, e);
                }
            }, {
                key: "bg",
                get: function get() {
                    return this._bg;
                },
                set: function set(t) {
                    this.graphics = this._bg = t;
                }
            }, {
                key: "skin",
                get: function get() {
                    return this._skin;
                },
                set: function set(t) {
                    this._skin != t && (this._skin = t, this._skin && !e.Loader.getRes(this._skin) ? e.ILaya.loader.load(this._skin, e.Handler.create(this, this._skinLoaded), null, e.Loader.IMAGE, 1) : this._skinLoaded());
                }
            }, {
                key: "sizeGrid",
                get: function get() {
                    return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null;
                },
                set: function set(t) {
                    this._bg || (this.graphics = this._bg = new h()), this._bg.sizeGrid = l.fillArray(i.defaultSizeGrid, t, Number);
                }
            }, {
                key: "text",
                set: function set(t) {
                    this._tf.text != t && (t += "", this._tf.text = t, this.event(e.Event.CHANGE));
                },
                get: function get() {
                    return _get(_getPrototypeOf(k.prototype), "text", this);
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(k.prototype), "width", t, this, true), this._bg && (this._bg.width = t);
                },
                get: function get() {
                    return _get(_getPrototypeOf(k.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(k.prototype), "height", t, this, true), this._bg && (this._bg.height = t);
                },
                get: function get() {
                    return _get(_getPrototypeOf(k.prototype), "height", this);
                }
            }, {
                key: "multiline",
                get: function get() {
                    return this._tf.multiline;
                },
                set: function set(t) {
                    this._tf.multiline = t;
                }
            }, {
                key: "editable",
                set: function set(t) {
                    this._tf.editable = t;
                },
                get: function get() {
                    return this._tf.editable;
                }
            }, {
                key: "restrict",
                get: function get() {
                    return this._tf.restrict;
                },
                set: function set(t) {
                    this._tf.restrict = t;
                }
            }, {
                key: "prompt",
                get: function get() {
                    return this._tf.prompt;
                },
                set: function set(t) {
                    this._tf.prompt = t;
                }
            }, {
                key: "promptColor",
                get: function get() {
                    return this._tf.promptColor;
                },
                set: function set(t) {
                    this._tf.promptColor = t;
                }
            }, {
                key: "maxChars",
                get: function get() {
                    return this._tf.maxChars;
                },
                set: function set(t) {
                    this._tf.maxChars = t;
                }
            }, {
                key: "focus",
                get: function get() {
                    return this._tf.focus;
                },
                set: function set(t) {
                    this._tf.focus = t;
                }
            }, {
                key: "type",
                get: function get() {
                    return this._tf.type;
                },
                set: function set(t) {
                    this._tf.type = t;
                }
            }]);
            return k;
        }(C);
    e.ILaya.regClass(k), e.ClassUtils.regClass("laya.ui.TextInput", k), e.ClassUtils.regClass("Laya.TextInput", k);
    var M =
        /* */
        function(_k) {
            _inherits(M, _k);

            function M() {
                var _this20;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                _classCallCheck(this, M);
                _this20 = _possibleConstructorReturn(this, _getPrototypeOf(M).call(this, t)), _this20.on(e.Event.CHANGE, _assertThisInitialized(_this20), _this20._onTextChange);
                return _this20;
            }
            _createClass(M, [{
                key: "_onTextChange",
                value: function _onTextChange() {
                    this.callLater(this.changeScroll);
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    this._vScrollBar && this._vScrollBar.destroy(), this._hScrollBar && this._hScrollBar.destroy(),
                        this._vScrollBar = null, this._hScrollBar = null, _get(_getPrototypeOf(M.prototype), "destroy", this).call(this, t);
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0;
                }
            }, {
                key: "onVBarChanged",
                value: function onVBarChanged(t) {
                    this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value);
                }
            }, {
                key: "onHBarChanged",
                value: function onHBarChanged(t) {
                    this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value);
                }
            }, {
                key: "changeScroll",
                value: function changeScroll() {
                    var t = this._vScrollBar && this._tf.maxScrollY > 0,
                        e = this._hScrollBar && this._tf.maxScrollX > 0,
                        s = t ? this._width - this._vScrollBar.width : this._width,
                        h = e ? this._height - this._hScrollBar.height : this._height,
                        a = this._tf.padding || i.labelPadding;
                    this._tf.width = s, this._tf.height = h, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - a[2],
                            this._vScrollBar.y = a[1], this._vScrollBar.height = this._height - (e ? this._hScrollBar.height : 0) - a[1] - a[3],
                            this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = h / Math.max(this._tf.textHeight, h),
                            this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = t),
                        this._hScrollBar && (this._hScrollBar.x = a[0], this._hScrollBar.y = this._height - this._hScrollBar.height - a[3],
                            this._hScrollBar.width = this._width - (t ? this._vScrollBar.width : 0) - a[0] - a[2],
                            this._hScrollBar.scrollSize = Math.max(.033 * s, 1), this._hScrollBar.thumbPercent = s / Math.max(this._tf.textWidth, s),
                            this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = e);
                }
            }, {
                key: "scrollTo",
                value: function scrollTo(t) {
                    this.commitMeasure(), this._tf.scrollY = t;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(M.prototype), "width", t, this, true), this.callLater(this.changeScroll);
                },
                get: function get() {
                    return _get(_getPrototypeOf(M.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(M.prototype), "height", t, this, true), this.callLater(this.changeScroll);
                },
                get: function get() {
                    return _get(_getPrototypeOf(M.prototype), "height", this);
                }
            }, {
                key: "vScrollBarSkin",
                get: function get() {
                    return this._vScrollBar ? this._vScrollBar.skin : null;
                },
                set: function set(t) {
                    null == this._vScrollBar && (this.addChild(this._vScrollBar = new f()), this._vScrollBar.on(e.Event.CHANGE, this, this.onVBarChanged),
                        this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = t;
                }
            }, {
                key: "hScrollBarSkin",
                get: function get() {
                    return this._hScrollBar ? this._hScrollBar.skin : null;
                },
                set: function set(t) {
                    null == this._hScrollBar && (this.addChild(this._hScrollBar = new S()), this._hScrollBar.on(e.Event.CHANGE, this, this.onHBarChanged),
                            this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)),
                        this._hScrollBar.skin = t;
                }
            }, {
                key: "vScrollBar",
                get: function get() {
                    return this._vScrollBar;
                }
            }, {
                key: "hScrollBar",
                get: function get() {
                    return this._hScrollBar;
                }
            }, {
                key: "maxScrollY",
                get: function get() {
                    return this._tf.maxScrollY;
                }
            }, {
                key: "scrollY",
                get: function get() {
                    return this._tf.scrollY;
                }
            }, {
                key: "maxScrollX",
                get: function get() {
                    return this._tf.maxScrollX;
                }
            }, {
                key: "scrollX",
                get: function get() {
                    return this._tf.scrollX;
                }
            }]);
            return M;
        }(k);
    e.ILaya.regClass(M), e.ClassUtils.regClass("laya.ui.TextArea", M), e.ClassUtils.regClass("Laya.TextArea", M);
    var O =
        /* */
        function(_c4) {
            _inherits(O, _c4);

            function O() {
                var _this21;
                _classCallCheck(this, O);
                _this21 = _possibleConstructorReturn(this, _getPrototypeOf(O).apply(this, arguments)),
                    _this21._oldW = 0, _this21._oldH = 0;
                return _this21;
            }
            _createClass(O, [{
                key: "onEnable",
                value: function onEnable() {
                    e.ILaya.stage.on("resize", this, this.onResize), this.onResize();
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    e.ILaya.stage.off("resize", this, this.onResize);
                }
            }, {
                key: "onResize",
                value: function onResize() {
                    var t = e.ILaya.stage;
                    if (this.width > 0 && this.height > 0) {
                        var s = Math.min(t.width / this._oldW, t.height / this._oldH);
                        _set(_getPrototypeOf(O.prototype), "width", t.width, this, true), _set(_getPrototypeOf(O.prototype), "height", t.height, this, true),
                            this.scale(s, s);
                    }
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(O.prototype), "width", t, this, true), this._oldW = t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(O.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(O.prototype), "height", t, this, true), this._oldH = t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(O.prototype), "height", this);
                }
            }]);
            return O;
        }(c);
    e.ILaya.regClass(O), e.ClassUtils.regClass("laya.ui.ScaleBox", O), e.ClassUtils.regClass("Laya.ScaleBox", O);
    var T =
        /* */
        function(_v) {
            _inherits(T, _v);

            function T() {
                var _this22;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _classCallCheck(this, T);
                _this22 = _possibleConstructorReturn(this, _getPrototypeOf(T).call(this, t)), _this22.isVertical = !1;
                return _this22;
            }
            return T;
        }(v);
    e.ILaya.regClass(T), e.ClassUtils.regClass("laya.ui.HSlider", T), e.ClassUtils.regClass("Laya.HSlider", T);
    var z =
        /* */
        function(_c5) {
            _inherits(z, _c5);

            function z() {
                var _this23;
                _classCallCheck(this, z);
                _this23 = _possibleConstructorReturn(this, _getPrototypeOf(z).call(this)), _this23._usedCache = null,
                    _this23._elasticEnabled = !1, _this23.width = _this23.height = 100;
                return _this23;
            }
            _createClass(z, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(z.prototype), "destroy", this).call(this, t), this._content && this._content.destroy(t),
                        this._vScrollBar && this._vScrollBar.destroy(t), this._hScrollBar && this._hScrollBar.destroy(t),
                        this._vScrollBar = null, this._hScrollBar = null, this._content = null;
                }
            }, {
                key: "destroyChildren",
                value: function destroyChildren() {
                    this._content.destroyChildren();
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    _get(_getPrototypeOf(z.prototype), "addChild", this).call(this, this._content = new c());
                }
            }, {
                key: "addChild",
                value: function addChild(t) {
                    return t.on(e.Event.RESIZE, this, this.onResize), this._setScrollChanged(), this._content.addChild(t);
                }
            }, {
                key: "onResize",
                value: function onResize() {
                    this._setScrollChanged();
                }
            }, {
                key: "addChildAt",
                value: function addChildAt(t, s) {
                    return t.on(e.Event.RESIZE, this, this.onResize), this._setScrollChanged(), this._content.addChildAt(t, s);
                }
            }, {
                key: "removeChild",
                value: function removeChild(t) {
                    return t.off(e.Event.RESIZE, this, this.onResize), this._setScrollChanged(), this._content.removeChild(t);
                }
            }, {
                key: "removeChildAt",
                value: function removeChildAt(t) {
                    return this.getChildAt(t).off(e.Event.RESIZE, this, this.onResize), this._setScrollChanged(),
                        this._content.removeChildAt(t);
                }
            }, {
                key: "removeChildren",
                value: function removeChildren() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2147483647;
                    return this._content.removeChildren(t, e), this._setScrollChanged(), this;
                }
            }, {
                key: "getChildAt",
                value: function getChildAt(t) {
                    return this._content.getChildAt(t);
                }
            }, {
                key: "getChildByName",
                value: function getChildByName(t) {
                    return this._content.getChildByName(t);
                }
            }, {
                key: "getChildIndex",
                value: function getChildIndex(t) {
                    return this._content.getChildIndex(t);
                }
            }, {
                key: "changeScroll",
                value: function changeScroll() {
                    this._scrollChanged = !1;
                    var t = this.contentWidth || 1,
                        e = this.contentHeight || 1,
                        s = this._vScrollBar,
                        i = this._hScrollBar,
                        h = s && e > this._height,
                        a = i && t > this._width,
                        r = h ? this._width - s.width : this._width,
                        l = a ? this._height - i.height : this._height;
                    s && (s.x = this._width - s.width, s.y = 0, s.height = this._height - (a ? i.height : 0),
                            s.scrollSize = Math.max(.033 * this._height, 1), s.thumbPercent = l / e, s.setScroll(0, e - l, s.value)),
                        i && (i.x = 0, i.y = this._height - i.height, i.width = this._width - (h ? s.width : 0),
                            i.scrollSize = Math.max(.033 * this._width, 1), i.thumbPercent = r / t, i.setScroll(0, t - r, i.value));
                }
            }, {
                key: "_sizeChanged",
                value: function _sizeChanged() {
                    _get(_getPrototypeOf(z.prototype), "_sizeChanged", this).call(this), this.setContentSize(this._width, this._height);
                }
            }, {
                key: "setContentSize",
                value: function setContentSize(t, s) {
                    var i = this._content;
                    i.width = t, i.height = s, i._style.scrollRect || (i.scrollRect = e.Rectangle.create()),
                        i._style.scrollRect.setTo(0, 0, t, s), i.scrollRect = i.scrollRect;
                }
            }, {
                key: "onScrollBarChange",
                value: function onScrollBarChange(t) {
                    var e = this._content._style.scrollRect;
                    if (e) {
                        var s = Math.round(t.value);
                        t.isVertical ? e.y = s : e.x = s, this._content.scrollRect = e;
                    }
                }
            }, {
                key: "scrollTo",
                value: function scrollTo() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    this.vScrollBar && (this.vScrollBar.value = e), this.hScrollBar && (this.hScrollBar.value = t);
                }
            }, {
                key: "refresh",
                value: function refresh() {
                    this.changeScroll();
                }
            }, {
                key: "onScrollStart",
                value: function onScrollStart() {
                    this._usedCache || (this._usedCache = _get(_getPrototypeOf(z.prototype), "cacheAs", this)),
                        _set(_getPrototypeOf(z.prototype), "cacheAs", "none", this, true), this._hScrollBar && this._hScrollBar.once(e.Event.END, this, this.onScrollEnd),
                        this._vScrollBar && this._vScrollBar.once(e.Event.END, this, this.onScrollEnd);
                }
            }, {
                key: "onScrollEnd",
                value: function onScrollEnd() {
                    _set(_getPrototypeOf(z.prototype), "cacheAs", this._usedCache, this, true);
                }
            }, {
                key: "_setScrollChanged",
                value: function _setScrollChanged() {
                    this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll));
                }
            }, {
                key: "numChildren",
                get: function get() {
                    return this._content.numChildren;
                }
            }, {
                key: "contentWidth",
                get: function get() {
                    for (var t = 0, e = this._content.numChildren - 1; e > -1; e--) {
                        var s = this._content.getChildAt(e);
                        t = Math.max(s._x + s.width * s.scaleX - s.pivotX, t);
                    }
                    return t;
                }
            }, {
                key: "contentHeight",
                get: function get() {
                    for (var t = 0, e = this._content.numChildren - 1; e > -1; e--) {
                        var s = this._content.getChildAt(e);
                        t = Math.max(s._y + s.height * s.scaleY - s.pivotY, t);
                    }
                    return t;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(z.prototype), "width", t, this, true), this._setScrollChanged();
                },
                get: function get() {
                    return _get(_getPrototypeOf(z.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(z.prototype), "height", t, this, true), this._setScrollChanged();
                },
                get: function get() {
                    return _get(_getPrototypeOf(z.prototype), "height", this);
                }
            }, {
                key: "vScrollBarSkin",
                get: function get() {
                    return this._vScrollBar ? this._vScrollBar.skin : null;
                },
                set: function set(t) {
                    null == this._vScrollBar && (_get(_getPrototypeOf(z.prototype), "addChild", this).call(this, this._vScrollBar = new f()),
                        this._vScrollBar.on(e.Event.CHANGE, this, this.onScrollBarChange, [this._vScrollBar]),
                        this._vScrollBar.target = this._content, this._vScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0,
                        this._setScrollChanged()), this._vScrollBar.skin = t;
                }
            }, {
                key: "hScrollBarSkin",
                get: function get() {
                    return this._hScrollBar ? this._hScrollBar.skin : null;
                },
                set: function set(t) {
                    null == this._hScrollBar && (_get(_getPrototypeOf(z.prototype), "addChild", this).call(this, this._hScrollBar = new S()),
                        this._hScrollBar.on(e.Event.CHANGE, this, this.onScrollBarChange, [this._hScrollBar]),
                        this._hScrollBar.target = this._content, this._hScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0,
                        this._setScrollChanged()), this._hScrollBar.skin = t;
                }
            }, {
                key: "vScrollBar",
                get: function get() {
                    return this._vScrollBar;
                }
            }, {
                key: "hScrollBar",
                get: function get() {
                    return this._hScrollBar;
                }
            }, {
                key: "content",
                get: function get() {
                    return this._content;
                }
            }, {
                key: "cacheAs",
                set: function set(t) {
                    _set(_getPrototypeOf(z.prototype), "cacheAs", t, this, true), this._usedCache = null,
                        "none" !== t ? (this._hScrollBar && this._hScrollBar.on(e.Event.START, this, this.onScrollStart),
                            this._vScrollBar && this._vScrollBar.on(e.Event.START, this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off(e.Event.START, this, this.onScrollStart),
                            this._vScrollBar && this._vScrollBar.off(e.Event.START, this, this.onScrollStart));
                },
                get: function get() {
                    return _get(_getPrototypeOf(z.prototype), "cacheAs", this);
                }
            }, {
                key: "elasticEnabled",
                get: function get() {
                    return this._elasticEnabled;
                },
                set: function set(t) {
                    this._elasticEnabled = t, this._vScrollBar && (this._vScrollBar.elasticDistance = t ? 200 : 0),
                        this._hScrollBar && (this._hScrollBar.elasticDistance = t ? 200 : 0);
                }
            }]);
            return z;
        }(c);
    e.ILaya.regClass(z), e.ClassUtils.regClass("laya.ui.Panel", z), e.ClassUtils.regClass("Laya.Panel", z);
    var U =
        /* */
        function(_v2) {
            _inherits(U, _v2);

            function U() {
                _classCallCheck(this, U);
                return _possibleConstructorReturn(this, _getPrototypeOf(U).apply(this, arguments));
            }
            return U;
        }(v);
    e.ILaya.regClass(U), e.ClassUtils.regClass("laya.ui.VSlider", U), e.ClassUtils.regClass("Laya.VSlider", U);
    var D =
        /* */
        function(_c6) {
            _inherits(D, _c6);

            function D() {
                var _this24;
                _classCallCheck(this, D);
                _this24 = _possibleConstructorReturn(this, _getPrototypeOf(D).call(this)), _this24._spaceLeft = 10,
                    _this24._spaceBottom = 0, _this24._keepStatus = !0, _this24.width = _this24.height = 200;
                return _this24;
            }
            _createClass(D, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    _get(_getPrototypeOf(D.prototype), "destroy", this).call(this, t), this._list && this._list.destroy(t),
                        this._list = null, this._source = null, this._renderHandler = null;
                }
            }, {
                key: "createChildren",
                value: function createChildren() {
                    this.addChild(this._list = new b()), this._list.renderHandler = e.Handler.create(this, this.renderItem, null, !1),
                        this._list.repeatX = 1, this._list.on(e.Event.CHANGE, this, this.onListChange);
                }
            }, {
                key: "onListChange",
                value: function onListChange() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.event(e.Event.CHANGE);
                }
            }, {
                key: "getArray",
                value: function getArray() {
                    var t = [];
                    for (var _e in this._source) {
                        var _s = this._source[_e];
                        this.getParentOpenStatus(_s) && (_s.x = this._spaceLeft * this.getDepth(_s), t.push(_s));
                    }
                    return t;
                }
            }, {
                key: "getDepth",
                value: function getDepth(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    return null == t.nodeParent ? e : this.getDepth(t.nodeParent, e + 1);
                }
            }, {
                key: "getParentOpenStatus",
                value: function getParentOpenStatus(t) {
                    var e = t.nodeParent;
                    return null == e || !!e.isOpen && (null == e.nodeParent || this.getParentOpenStatus(e));
                }
            }, {
                key: "renderItem",
                value: function renderItem(t, s) {
                    var i = t.dataSource;
                    if (i) {
                        t.left = i.x;
                        var h = t.getChildByName("arrow");
                        h && (i.hasChild ? (h.visible = !0, h.index = i.isOpen ? 1 : 0, h.tag = s, h.off(e.Event.CLICK, this, this.onArrowClick),
                            h.on(e.Event.CLICK, this, this.onArrowClick)) : h.visible = !1);
                        var a = t.getChildByName("folder");
                        a && (2 == a.clipY ? a.index = i.isDirectory ? 0 : 1 : a.index = i.isDirectory ? i.isOpen ? 1 : 0 : 2),
                            this._renderHandler && this._renderHandler.runWith([t, s]);
                    }
                }
            }, {
                key: "onArrowClick",
                value: function onArrowClick(t) {
                    var s = t.currentTarget.tag;
                    this._list.array[s].isOpen = !this._list.array[s].isOpen, this.event(e.Event.OPEN),
                        this._list.array = this.getArray();
                }
            }, {
                key: "setItemState",
                value: function setItemState(t, e) {
                    this._list.array[t] && (this._list.array[t].isOpen = e, this._list.array = this.getArray());
                }
            }, {
                key: "fresh",
                value: function fresh() {
                    this._list.array = this.getArray(), this.repaint();
                }
            }, {
                key: "parseXml",
                value: function parseXml(t, e, s, i) {
                    var h, a = t.childNodes,
                        r = a.length;
                    if (!i) {
                        h = {};
                        var l = t.attributes;
                        for (var _t in l) {
                            var n = l[_t],
                                o = n.nodeName,
                                _ = n.nodeValue;
                            h[o] = "true" == _ || "false" != _ && _;
                        }
                        h.nodeParent = s, r > 0 && (h.isDirectory = !0), h.hasChild = r > 0, e.push(h);
                    }
                    for (var c = 0; c < r; c++) {
                        var d = a[c];
                        this.parseXml(d, e, h, !1);
                    }
                }
            }, {
                key: "parseOpenStatus",
                value: function parseOpenStatus(t, e) {
                    for (var s = 0, i = e.length; s < i; s++) {
                        var h = e[s];
                        if (h.isDirectory)
                            for (var a = 0, r = t.length; a < r; a++) {
                                var l = t[a];
                                if (l.isDirectory && this.isSameParent(l, h) && h.label == l.label) {
                                    h.isOpen = l.isOpen;
                                    break;
                                }
                            }
                    }
                }
            }, {
                key: "isSameParent",
                value: function isSameParent(t, e) {
                    return null == t.nodeParent && null == e.nodeParent || null != t.nodeParent && null != e.nodeParent && t.nodeParent.label == e.nodeParent.label && this.isSameParent(t.nodeParent, e.nodeParent);
                }
            }, {
                key: "filter",
                value: function filter(t) {
                    if (Boolean(t)) {
                        var e = [];
                        this.getFilterSource(this._source, e, t), this._list.array = e;
                    } else this._list.array = this.getArray();
                }
            }, {
                key: "getFilterSource",
                value: function getFilterSource(t, e, s) {
                    s = s.toLocaleLowerCase();
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _i = _step.value;
                            !_i.isDirectory && String(_i.label).toLowerCase().indexOf(s) > -1 && (_i.x = 0,
                                e.push(_i)), _i.child && _i.child.length > 0 && this.getFilterSource(_i.child, e, s);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                _iterator["return"]();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }, {
                key: "keepStatus",
                get: function get() {
                    return this._keepStatus;
                },
                set: function set(t) {
                    this._keepStatus = t;
                }
            }, {
                key: "array",
                get: function get() {
                    return this._list.array;
                },
                set: function set(t) {
                    this._keepStatus && this._list.array && t && this.parseOpenStatus(this._list.array, t),
                        this._source = t, this._list.array = this.getArray();
                }
            }, {
                key: "source",
                get: function get() {
                    return this._source;
                }
            }, {
                key: "list",
                get: function get() {
                    return this._list;
                }
            }, {
                key: "itemRender",
                get: function get() {
                    return this._list.itemRender;
                },
                set: function set(t) {
                    this._list.itemRender = t;
                }
            }, {
                key: "scrollBarSkin",
                get: function get() {
                    return this._list.vScrollBarSkin;
                },
                set: function set(t) {
                    this._list.vScrollBarSkin = t;
                }
            }, {
                key: "scrollBar",
                get: function get() {
                    return this._list.scrollBar;
                }
            }, {
                key: "mouseHandler",
                get: function get() {
                    return this._list.mouseHandler;
                },
                set: function set(t) {
                    this._list.mouseHandler = t;
                }
            }, {
                key: "renderHandler",
                get: function get() {
                    return this._renderHandler;
                },
                set: function set(t) {
                    this._renderHandler = t;
                }
            }, {
                key: "spaceLeft",
                get: function get() {
                    return this._spaceLeft;
                },
                set: function set(t) {
                    this._spaceLeft = t;
                }
            }, {
                key: "spaceBottom",
                get: function get() {
                    return this._list.spaceY;
                },
                set: function set(t) {
                    this._list.spaceY = t;
                }
            }, {
                key: "selectedIndex",
                get: function get() {
                    return this._list.selectedIndex;
                },
                set: function set(t) {
                    this._list.selectedIndex = t;
                }
            }, {
                key: "selectedItem",
                get: function get() {
                    return this._list.selectedItem;
                },
                set: function set(t) {
                    this._list.selectedItem = t;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(D.prototype), "width", t, this, true), this._list.width = t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(D.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(D.prototype), "height", t, this, true), this._list.height = t;
                },
                get: function get() {
                    return _get(_getPrototypeOf(D.prototype), "height", this);
                }
            }, {
                key: "dataSource",
                set: function set(t) {
                    this._dataSource = t, _set(_getPrototypeOf(D.prototype), "dataSource", t, this, true);
                },
                get: function get() {
                    return _get(_getPrototypeOf(D.prototype), "dataSource", this);
                }
            }, {
                key: "xml",
                set: function set(t) {
                    var e = [];
                    this.parseXml(t.childNodes[0], e, null, !0), this.array = e;
                }
            }, {
                key: "selectedPath",
                get: function get() {
                    return this._list.selectedItem ? this._list.selectedItem.path : null;
                }
            }]);
            return D;
        }(c);
    e.ILaya.regClass(D), e.ClassUtils.regClass("laya.ui.Tree", D), e.ClassUtils.regClass("Laya.Tree", D);
    var A =
        /* */
        function(_c7) {
            _inherits(A, _c7);

            function A() {
                var _this25;
                _classCallCheck(this, A);
                _this25 = _possibleConstructorReturn(this, _getPrototypeOf(A).apply(this, arguments)),
                    _this25._space = 0, _this25._align = "none", _this25._itemChanged = !1;
                return _this25;
            }
            _createClass(A, [{
                key: "addChild",
                value: function addChild(t) {
                    return t.on(e.Event.RESIZE, this, this.onResize), this._setItemChanged(), _get(_getPrototypeOf(A.prototype), "addChild", this).call(this, t);
                }
            }, {
                key: "onResize",
                value: function onResize(t) {
                    this._setItemChanged();
                }
            }, {
                key: "addChildAt",
                value: function addChildAt(t, s) {
                    return t.on(e.Event.RESIZE, this, this.onResize), this._setItemChanged(), _get(_getPrototypeOf(A.prototype), "addChildAt", this).call(this, t, s);
                }
            }, {
                key: "removeChildAt",
                value: function removeChildAt(t) {
                    return this.getChildAt(t).off(e.Event.RESIZE, this, this.onResize), this._setItemChanged(),
                        _get(_getPrototypeOf(A.prototype), "removeChildAt", this).call(this, t);
                }
            }, {
                key: "refresh",
                value: function refresh() {
                    this._setItemChanged();
                }
            }, {
                key: "changeItems",
                value: function changeItems() {
                    this._itemChanged = !1;
                }
            }, {
                key: "sortItem",
                value: function sortItem(t) {
                    t && t.sort(function(t, e) {
                        return t.y - e.y;
                    });
                }
            }, {
                key: "_setItemChanged",
                value: function _setItemChanged() {
                    this._itemChanged || (this._itemChanged = !0, this.callLater(this.changeItems));
                }
            }, {
                key: "space",
                get: function get() {
                    return this._space;
                },
                set: function set(t) {
                    this._space = t, this._setItemChanged();
                }
            }, {
                key: "align",
                get: function get() {
                    return this._align;
                },
                set: function set(t) {
                    this._align = t, this._setItemChanged();
                }
            }]);
            return A;
        }(c);
    e.ILaya.regClass(A), e.ClassUtils.regClass("laya.ui.LayoutBox", A), e.ClassUtils.regClass("Laya.LayoutBox", A);
    var H =
        /* */
        function(_A) {
            _inherits(H, _A);

            function H() {
                _classCallCheck(this, H);
                return _possibleConstructorReturn(this, _getPrototypeOf(H).apply(this, arguments));
            }
            _createClass(H, [{
                key: "sortItem",
                value: function sortItem(t) {
                    t && t.sort(function(t, e) {
                        return t.x - e.x;
                    });
                }
            }, {
                key: "changeItems",
                value: function changeItems() {
                    this._itemChanged = !1;
                    for (var t = [], e = 0, s = 0, i = this.numChildren; s < i; s++) {
                        var h = this.getChildAt(s);
                        h && (t.push(h), e = this._height ? this._height : Math.max(e, h.height * h.scaleY));
                    }
                    this.sortItem(t);
                    var a = 0;
                    for (s = 0, i = t.length; s < i; s++) {
                        (h = t[s]).x = a, a += h.width * h.scaleX + this._space, this._align == H.TOP ? h.y = 0 : this._align == H.MIDDLE ? h.y = .5 * (e - h.height * h.scaleY) : this._align == H.BOTTOM && (h.y = e - h.height * h.scaleY);
                    }
                    this._sizeChanged();
                }
            }, {
                key: "height",
                set: function set(t) {
                    this._height != t && (_set(_getPrototypeOf(H.prototype), "height", t, this, true),
                        this.callLater(this.changeItems));
                },
                get: function get() {
                    return _get(_getPrototypeOf(H.prototype), "height", this);
                }
            }]);
            return H;
        }(A);
    H.NONE = "none", H.TOP = "top", H.MIDDLE = "middle", H.BOTTOM = "bottom", e.ILaya.regClass(H),
        e.ClassUtils.regClass("laya.ui.HBox", H), e.ClassUtils.regClass("Laya.HBox", H);
    var N =
        /* */
        function(_A2) {
            _inherits(N, _A2);

            function N() {
                _classCallCheck(this, N);
                return _possibleConstructorReturn(this, _getPrototypeOf(N).apply(this, arguments));
            }
            _createClass(N, [{
                key: "changeItems",
                value: function changeItems() {
                    this._itemChanged = !1;
                    for (var t = [], e = 0, s = 0, i = this.numChildren; s < i; s++) {
                        var h = this.getChildAt(s);
                        h && (t.push(h), e = this._width ? this._width : Math.max(e, h.width * h.scaleX));
                    }
                    this.sortItem(t);
                    var a = 0;
                    for (s = 0, i = t.length; s < i; s++) {
                        (h = t[s]).y = a, a += h.height * h.scaleY + this._space, this._align == N.LEFT ? h.x = 0 : this._align == N.CENTER ? h.x = .5 * (e - h.width * h.scaleX) : this._align == N.RIGHT && (h.x = e - h.width * h.scaleX);
                    }
                    this._sizeChanged();
                }
            }, {
                key: "width",
                set: function set(t) {
                    this._width != t && (_set(_getPrototypeOf(N.prototype), "width", t, this, true),
                        this.callLater(this.changeItems));
                },
                get: function get() {
                    return _get(_getPrototypeOf(N.prototype), "width", this);
                }
            }]);
            return N;
        }(A);
    N.NONE = "none", N.LEFT = "left", N.CENTER = "center", N.RIGHT = "right", e.ILaya.regClass(N),
        e.ClassUtils.regClass("laya.ui.VBox", N), e.ClassUtils.regClass("Laya.VBox", N);
    var P =
        /* */
        function(_g) {
            _inherits(P, _g);

            function P() {
                var _this26;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                _classCallCheck(this, P);
                _this26 = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this)), _this26._valueArr = "",
                    _this26._indexMap = null, _this26._sheet = null, _this26._direction = "horizontal",
                    _this26._spaceX = 0, _this26._spaceY = 0, _this26._align = "left", _this26._wordsW = 0,
                    _this26._wordsH = 0, t && (_this26.skin = t), e && (_this26.sheet = e);
                return _this26;
            }
            _createClass(P, [{
                key: "createChildren",
                value: function createChildren() {
                    this._bitmap = new h(), this.on(e.Event.LOADED, this, this._onClipLoaded);
                }
            }, {
                key: "_onClipLoaded",
                value: function _onClipLoaded() {
                    this.callLater(this.changeValue);
                }
            }, {
                key: "changeValue",
                value: function changeValue() {
                    var t;
                    if (this._sources && this._valueArr && (this.graphics.clear(!0), t = this._sources[0])) {
                        var e = "horizontal" === this._direction;
                        e ? (this._wordsW = this._valueArr.length * (t.sourceWidth + this.spaceX), this._wordsH = t.sourceHeight) : (this._wordsW = t.sourceWidth,
                            this._wordsH = (t.sourceHeight + this.spaceY) * this._valueArr.length);
                        var s = 0;
                        if (this._width) switch (this._align) {
                            case "center":
                                s = .5 * (this._width - this._wordsW);
                                break;

                            case "right":
                                s = this._width - this._wordsW;
                                break;

                            default:
                                s = 0;
                        }
                        for (var i = 0, h = this._valueArr.length; i < h; i++) {
                            var a = this._indexMap[this._valueArr.charAt(i)];
                            this.sources[a] && (t = this.sources[a], e ? this.graphics.drawImage(t, s + i * (t.sourceWidth + this.spaceX), 0, t.sourceWidth, t.sourceHeight) : this.graphics.drawImage(t, 0 + s, i * (t.sourceHeight + this.spaceY), t.sourceWidth, t.sourceHeight));
                        }
                        this._width || (this._widget.resetLayoutX(), this.callLater(this._sizeChanged)),
                            this._height || (this._widget.resetLayoutY(), this.callLater(this._sizeChanged));
                    }
                }
            }, {
                key: "measureWidth",
                value: function measureWidth() {
                    return this._wordsW;
                }
            }, {
                key: "measureHeight",
                value: function measureHeight() {
                    return this._wordsH;
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    this._valueArr = null, this._indexMap = null, this.graphics.clear(!0), this.removeSelf(),
                        this.off(e.Event.LOADED, this, this._onClipLoaded), _get(_getPrototypeOf(P.prototype), "destroy", this).call(this, t);
                }
            }, {
                key: "sheet",
                get: function get() {
                    return this._sheet;
                },
                set: function set(t) {
                    t += "", this._sheet = t;
                    var e = t.split(" ");
                    this._clipX = String(e[0]).length, this.clipY = e.length, this._indexMap = {};
                    for (var s = 0; s < this._clipY; s++) {
                        for (var i = e[s].split(""), h = 0, a = i.length; h < a; h++) {
                            this._indexMap[i[h]] = s * this._clipX + h;
                        }
                    }
                }
            }, {
                key: "value",
                get: function get() {
                    return this._valueArr ? this._valueArr : "";
                },
                set: function set(t) {
                    t += "", this._valueArr = t, this.callLater(this.changeValue);
                }
            }, {
                key: "direction",
                get: function get() {
                    return this._direction;
                },
                set: function set(t) {
                    this._direction = t, this.callLater(this.changeValue);
                }
            }, {
                key: "spaceX",
                get: function get() {
                    return this._spaceX;
                },
                set: function set(t) {
                    this._spaceX = t, "horizontal" === this._direction && this.callLater(this.changeValue);
                }
            }, {
                key: "spaceY",
                get: function get() {
                    return this._spaceY;
                },
                set: function set(t) {
                    this._spaceY = t, "horizontal" !== this._direction && this.callLater(this.changeValue);
                }
            }, {
                key: "align",
                set: function set(t) {
                    this._align = t, this.callLater(this.changeValue);
                },
                get: function get() {
                    return this._align;
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(P.prototype), "width", t, this, true), this.callLater(this.changeValue);
                },
                get: function get() {
                    return _get(_getPrototypeOf(P.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(P.prototype), "height", t, this, true), this.callLater(this.changeValue);
                },
                get: function get() {
                    return _get(_getPrototypeOf(P.prototype), "height", this);
                }
            }]);
            return P;
        }(g);
    e.ILaya.regClass(P), e.ClassUtils.regClass("laya.ui.FontClip", P), e.ClassUtils.regClass("Laya.FontClip", P);
    var Y =
        /* */
        function(_e$Scene) {
            _inherits(Y, _e$Scene);

            function Y() {
                var _this27;
                _classCallCheck(this, Y);
                _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Y).call(this, !1)), _this27._watchMap = {},
                    _this27._anchorX = NaN, _this27._anchorY = NaN, _this27._widget = a.EMPTY, _this27.createChildren();
                return _this27;
            }
            _createClass(Y, [{
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    this._watchMap = null, _get(_getPrototypeOf(Y.prototype), "destroy", this).call(this, t);
                }
            }, {
                key: "changeData",
                value: function changeData(t) {
                    var e = this._watchMap[t];
                    if (e)
                        for (var s = 0, i = e.length; s < i; s++) {
                            e[s].exe(this);
                        }
                }
            }, {
                key: "_sizeChanged",
                value: function _sizeChanged() {
                    isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height),
                        this.event(e.Event.RESIZE);
                }
            }, {
                key: "_getWidget",
                value: function _getWidget() {
                    return this._widget === a.EMPTY && (this._widget = this.addComponent(a)), this._widget;
                }
            }, {
                key: "loadUI",
                value: function loadUI(t) {
                    var e = Y.uiMap[t];
                    Y.uiMap && this.createView(e);
                }
            }, {
                key: "top",
                get: function get() {
                    return this._widget.top;
                },
                set: function set(t) {
                    t != this._widget.top && (this._getWidget().top = t);
                }
            }, {
                key: "bottom",
                get: function get() {
                    return this._widget.bottom;
                },
                set: function set(t) {
                    t != this._widget.bottom && (this._getWidget().bottom = t);
                }
            }, {
                key: "left",
                get: function get() {
                    return this._widget.left;
                },
                set: function set(t) {
                    t != this._widget.left && (this._getWidget().left = t);
                }
            }, {
                key: "right",
                get: function get() {
                    return this._widget.right;
                },
                set: function set(t) {
                    t != this._widget.right && (this._getWidget().right = t);
                }
            }, {
                key: "centerX",
                get: function get() {
                    return this._widget.centerX;
                },
                set: function set(t) {
                    t != this._widget.centerX && (this._getWidget().centerX = t);
                }
            }, {
                key: "centerY",
                get: function get() {
                    return this._widget.centerY;
                },
                set: function set(t) {
                    t != this._widget.centerY && (this._getWidget().centerY = t);
                }
            }, {
                key: "anchorX",
                get: function get() {
                    return this._anchorX;
                },
                set: function set(t) {
                    this._anchorX != t && (this._anchorX = t, this.callLater(this._sizeChanged));
                }
            }, {
                key: "anchorY",
                get: function get() {
                    return this._anchorY;
                },
                set: function set(t) {
                    this._anchorY != t && (this._anchorY = t, this.callLater(this._sizeChanged));
                }
            }, {
                key: "dataSource",
                get: function get() {
                    return this._dataSource;
                },
                set: function set(t) {
                    for (var e in this._dataSource = t, t) {
                        var s = this.getChildByName(e);
                        s instanceof n ? s.dataSource = t[e] : e in this && !(this[e] instanceof Function) && (this[e] = t[e]);
                    }
                }
            }], [{
                key: "__init__",
                value: function __init__() {
                    e.ILaya.ClassUtils.regShortClassName([B, d, M, p, c, O, u, g, y, n, S, T, o, C, b, z, w, x, E, m, v, I, k, Y, f, U, D, H, N, e.Animation, e.Text, P]);
                }
            }, {
                key: "regComponent",
                value: function regComponent(t, s) {
                    e.ILaya.ClassUtils.regClass(t, s);
                }
            }, {
                key: "regViewRuntime",
                value: function regViewRuntime(t, s) {
                    e.ILaya.ClassUtils.regClass(t, s);
                }
            }, {
                key: "regUI",
                value: function regUI(t, s) {
                    e.ILaya.loader.cacheRes(t, s);
                }
            }]);
            return Y;
        }(e.Scene);
    Y.uiMap = {}, e.ILaya.regClass(Y), e.ClassUtils.regClass("laya.ui.View", Y), e.ClassUtils.regClass("Laya.View", Y);
    var R = function R() {
        _classCallCheck(this, R);
    };
    R.Dialog = null;
    var X =
        /* */
        function(_e$Sprite2) {
            _inherits(X, _e$Sprite2);

            function X() {
                var _this28;
                _classCallCheck(this, X);
                _this28 = _possibleConstructorReturn(this, _getPrototypeOf(X).call(this)), _this28.maskLayer = new e.Sprite(),
                    _this28.popupEffect = function(t) {
                        t.scale(1, 1), t._effectTween = e.Tween.from(t, {
                            x: e.ILaya.stage.width / 2,
                            y: e.ILaya.stage.height / 2,
                            scaleX: 0,
                            scaleY: 0
                        }, 300, e.Ease.backOut, e.Handler.create(_assertThisInitialized(_this28), _this28.doOpen, [t]), 0, !1, !1);
                    }, _this28.closeEffect = function(t) {
                        t._effectTween = e.Tween.to(t, {
                            x: e.ILaya.stage.width / 2,
                            y: e.ILaya.stage.height / 2,
                            scaleX: 0,
                            scaleY: 0
                        }, 300, e.Ease.strongOut, e.Handler.create(_assertThisInitialized(_this28), _this28.doClose, [t]), 0, !1, !1);
                    }, _this28.popupEffectHandler = new e.Handler(_assertThisInitialized(_this28), _this28.popupEffect),
                    _this28.closeEffectHandler = new e.Handler(_assertThisInitialized(_this28), _this28.closeEffect),
                    _this28.mouseEnabled = _this28.maskLayer.mouseEnabled = !0, _this28.zOrder = 1e3,
                    e.ILaya.stage.addChild(_assertThisInitialized(_this28)), e.ILaya.stage.on(e.Event.RESIZE, _assertThisInitialized(_this28), _this28._onResize),
                    s.closeDialogOnSide && _this28.maskLayer.on("click", _assertThisInitialized(_this28), _this28._closeOnSide),
                    _this28._onResize(null);
                return _this28;
            }
            _createClass(X, [{
                key: "_closeOnSide",
                value: function _closeOnSide() {
                    var t = this.getChildAt(this.numChildren - 1);
                    t instanceof R.Dialog && t.close();
                }
            }, {
                key: "setLockView",
                value: function setLockView(t) {
                    this.lockLayer || (this.lockLayer = new c(), this.lockLayer.mouseEnabled = !0, this.lockLayer.size(e.ILaya.stage.width, e.ILaya.stage.height)),
                        this.lockLayer.removeChildren(), t && (t.centerX = t.centerY = 0, this.lockLayer.addChild(t));
                }
            }, {
                key: "_onResize",
                value: function _onResize() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var i = this.maskLayer.width = e.ILaya.stage.width,
                        h = this.maskLayer.height = e.ILaya.stage.height;
                    this.lockLayer && this.lockLayer.size(i, h), this.maskLayer.graphics.clear(!0),
                        this.maskLayer.graphics.drawRect(0, 0, i, h, s.popupBgColor), this.maskLayer.alpha = s.popupBgAlpha;
                    for (var a = this.numChildren - 1; a > -1; a--) {
                        var r = this.getChildAt(a);
                        r.isPopupCenter && this._centerDialog(r);
                    }
                }
            }, {
                key: "_centerDialog",
                value: function _centerDialog(t) {
                    t.x = Math.round((e.ILaya.stage.width - t.width >> 1) + t.pivotX), t.y = Math.round((e.ILaya.stage.height - t.height >> 1) + t.pivotY);
                }
            }, {
                key: "open",
                value: function open(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                    s && this._closeAll(), this._clearDialogEffect(t), t.isPopupCenter && this._centerDialog(t),
                        this.addChild(t), (t.isModal || this._getBit(e.Const.HAS_ZORDER)) && e.ILaya.timer.callLater(this, this._checkMask),
                        i && null != t.popupEffect ? t.popupEffect.runWith(t) : this.doOpen(t), this.event(e.Event.OPEN);
                }
            }, {
                key: "_clearDialogEffect",
                value: function _clearDialogEffect(t) {
                    t._effectTween && (e.Tween.clear(t._effectTween), t._effectTween = null);
                }
            }, {
                key: "doOpen",
                value: function doOpen(t) {
                    t.onOpened(t._param);
                }
            }, {
                key: "lock",
                value: function lock(t) {
                    this.lockLayer && (t ? this.addChild(this.lockLayer) : this.lockLayer.removeSelf());
                }
            }, {
                key: "close",
                value: function close(t) {
                    this._clearDialogEffect(t), t.isShowEffect && null != t.closeEffect ? t.closeEffect.runWith([t]) : this.doClose(t),
                        this.event(e.Event.CLOSE);
                }
            }, {
                key: "doClose",
                value: function doClose(t) {
                    t.removeSelf(), t.isModal && this._checkMask(), t.closeHandler && t.closeHandler.runWith(t.closeType),
                        t.onClosed(t.closeType), t.autoDestroyAtClosed && t.destroy();
                }
            }, {
                key: "closeAll",
                value: function closeAll() {
                    this._closeAll(), this.event(e.Event.CLOSE);
                }
            }, {
                key: "_closeAll",
                value: function _closeAll() {
                    for (var t = this.numChildren - 1; t > -1; t--) {
                        var e = this.getChildAt(t);
                        e && null != e.close && this.doClose(e);
                    }
                }
            }, {
                key: "getDialogsByGroup",
                value: function getDialogsByGroup(t) {
                    for (var e = [], s = this.numChildren - 1; s > -1; s--) {
                        var i = this.getChildAt(s);
                        i && i.group === t && e.push(i);
                    }
                    return e;
                }
            }, {
                key: "closeByGroup",
                value: function closeByGroup(t) {
                    for (var e = [], s = this.numChildren - 1; s > -1; s--) {
                        var i = this.getChildAt(s);
                        i && i.group === t && (i.close(), e.push(i));
                    }
                    return e;
                }
            }, {
                key: "_checkMask",
                value: function _checkMask() {
                    this.maskLayer.removeSelf();
                    for (var t = this.numChildren - 1; t > -1; t--) {
                        var e = this.getChildAt(t);
                        if (e && e.isModal) return void this.addChildAt(this.maskLayer, t);
                    }
                }
            }]);
            return X;
        }(e.Sprite);
    e.ClassUtils.regClass("laya.ui.DialogManager", X), e.ClassUtils.regClass("Laya.DialogManager", X);
    var G =
        /* */
        function(_Y) {
            _inherits(G, _Y);

            function G() {
                var _this29;
                _classCallCheck(this, G);
                _this29 = _possibleConstructorReturn(this, _getPrototypeOf(G).call(this)), _this29.isShowEffect = !0,
                    _this29.isPopupCenter = !0, _this29.popupEffect = G.manager.popupEffectHandler,
                    _this29.closeEffect = G.manager.closeEffectHandler, _this29._dealDragArea(), _this29.on(e.Event.CLICK, _assertThisInitialized(_this29), _this29._onClick);
                return _this29;
            }
            _createClass(G, [{
                key: "_dealDragArea",
                value: function _dealDragArea() {
                    var t = this.getChildByName("drag");
                    t && (this.dragArea = t._x + "," + t._y + "," + t.width + "," + t.height, t.removeSelf());
                }
            }, {
                key: "_onMouseDown",
                value: function _onMouseDown(t) {
                    var e = this.getMousePoint();
                    this._dragArea.contains(e.x, e.y) ? this.startDrag() : this.stopDrag();
                }
            }, {
                key: "_onClick",
                value: function _onClick(t) {
                    var e = t.target;
                    if (e) switch (e.name) {
                        case G.CLOSE:
                        case G.CANCEL:
                        case G.SURE:
                        case G.NO:
                        case G.OK:
                        case G.YES:
                            return void this.close(e.name);
                    }
                }
            }, {
                key: "open",
                value: function open() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    this._dealDragArea(), this._param = e, G.manager.open(this, t, this.isShowEffect),
                        G.manager.lock(!1);
                }
            }, {
                key: "close",
                value: function close() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.closeType = t, G.manager.close(this);
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                    this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, this._dragArea = null,
                        _get(_getPrototypeOf(G.prototype), "destroy", this).call(this, t);
                }
            }, {
                key: "show",
                value: function show() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    this._open(!1, t, e);
                }
            }, {
                key: "popup",
                value: function popup() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    this._open(!0, t, e);
                }
            }, {
                key: "_open",
                value: function _open(t, e, s) {
                    this.isModal = t, this.isShowEffect = s, G.manager.lock(!0), this.open(e);
                }
            }, {
                key: "dragArea",
                get: function get() {
                    return this._dragArea ? this._dragArea.toString() : null;
                },
                set: function set(t) {
                    if (t) {
                        var s = l.fillArray([0, 0, 0, 0], t, Number);
                        this._dragArea = new e.Rectangle(s[0], s[1], s[2], s[3]), this.on(e.Event.MOUSE_DOWN, this, this._onMouseDown);
                    } else this._dragArea = null, this.off(e.Event.MOUSE_DOWN, this, this._onMouseDown);
                }
            }, {
                key: "isPopup",
                get: function get() {
                    return null != this.parent;
                }
            }, {
                key: "zOrder",
                set: function set(t) {
                    _set(_getPrototypeOf(G.prototype), "zOrder", t, this, true), G.manager._checkMask();
                },
                get: function get() {
                    return _get(_getPrototypeOf(G.prototype), "zOrder", this);
                }
            }], [{
                key: "setLockView",
                value: function setLockView(t) {
                    G.manager.setLockView(t);
                }
            }, {
                key: "lock",
                value: function lock(t) {
                    G.manager.lock(t);
                }
            }, {
                key: "closeAll",
                value: function closeAll() {
                    G.manager.closeAll();
                }
            }, {
                key: "getDialogsByGroup",
                value: function getDialogsByGroup(t) {
                    return G.manager.getDialogsByGroup(t);
                }
            }, {
                key: "closeByGroup",
                value: function closeByGroup(t) {
                    return G.manager.closeByGroup(t);
                }
            }, {
                key: "manager",
                get: function get() {
                    return G._manager = G._manager || new X();
                },
                set: function set(t) {
                    G._manager = t;
                }
            }]);
            return G;
        }(Y);
    G.CLOSE = "close", G.CANCEL = "cancel", G.SURE = "sure", G.NO = "no", G.YES = "yes",
        G.OK = "ok", R.Dialog = G, e.ILaya.regClass(G), e.ClassUtils.regClass("laya.ui.Dialog", G),
        e.ClassUtils.regClass("Laya.Dialog", G);
    var W =
        /* */
        function(_n11) {
            _inherits(W, _n11);

            function W() {
                var _this30;
                _classCallCheck(this, W);
                _this30 = _possibleConstructorReturn(this, _getPrototypeOf(W).call(this)), _this30._tipBox = new n(),
                    _this30._tipBox.addChild(_this30._tipText = new e.Text()), _this30._tipText.x = _this30._tipText.y = 5,
                    _this30._tipText.color = W.tipTextColor, _this30._defaultTipHandler = _this30._showDefaultTip,
                    e.ILaya.stage.on(r.SHOW_TIP, _assertThisInitialized(_this30), _this30._onStageShowTip),
                    e.ILaya.stage.on(r.HIDE_TIP, _assertThisInitialized(_this30), _this30._onStageHideTip),
                    _this30.zOrder = 1100;
                return _this30;
            }
            _createClass(W, [{
                key: "_onStageHideTip",
                value: function _onStageHideTip(t) {
                    e.ILaya.timer.clear(this, this._showTip), this.closeAll(), this.removeSelf();
                }
            }, {
                key: "_onStageShowTip",
                value: function _onStageShowTip(t) {
                    e.ILaya.timer.once(W.tipDelay, this, this._showTip, [t], !0);
                }
            }, {
                key: "_showTip",
                value: function _showTip(t) {
                    if ("string" == typeof t) {
                        var s = String(t);
                        Boolean(s) && this._defaultTipHandler(s);
                    } else t instanceof e.Handler ? t.run() : t instanceof Function && t.apply();
                    e.ILaya.stage.on(e.Event.MOUSE_MOVE, this, this._onStageMouseMove), e.ILaya.stage.on(e.Event.MOUSE_DOWN, this, this._onStageMouseDown),
                        this._onStageMouseMove(null);
                }
            }, {
                key: "_onStageMouseDown",
                value: function _onStageMouseDown(t) {
                    this.closeAll();
                }
            }, {
                key: "_onStageMouseMove",
                value: function _onStageMouseMove(t) {
                    this._showToStage(this, W.offsetX, W.offsetY);
                }
            }, {
                key: "_showToStage",
                value: function _showToStage(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var h = t.getBounds();
                    t.x = e.ILaya.stage.mouseX + s, t.y = e.ILaya.stage.mouseY + i, t._x + h.width > e.ILaya.stage.width && (t.x -= h.width + s),
                        t._y + h.height > e.ILaya.stage.height && (t.y -= h.height + i);
                }
            }, {
                key: "closeAll",
                value: function closeAll() {
                    e.ILaya.timer.clear(this, this._showTip), e.ILaya.stage.off(e.Event.MOUSE_MOVE, this, this._onStageMouseMove),
                        e.ILaya.stage.off(e.Event.MOUSE_DOWN, this, this._onStageMouseDown), this.removeChildren();
                }
            }, {
                key: "showDislayTip",
                value: function showDislayTip(t) {
                    this.addChild(t), this._showToStage(this), e.ILaya.stage.addChild(this);
                }
            }, {
                key: "_showDefaultTip",
                value: function _showDefaultTip(t) {
                    this._tipText.text = t;
                    var s = this._tipBox.graphics;
                    s.clear(!0), s.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, W.tipBackColor),
                        this.addChild(this._tipBox), this._showToStage(this), e.ILaya.stage.addChild(this);
                }
            }, {
                key: "defaultTipHandler",
                get: function get() {
                    return this._defaultTipHandler;
                },
                set: function set(t) {
                    this._defaultTipHandler = t;
                }
            }]);
            return W;
        }(n);
    W.offsetX = 10, W.offsetY = 15, W.tipTextColor = "#ffffff", W.tipBackColor = "#111111",
        W.tipDelay = 200, e.ILaya.regClass(W), e.ClassUtils.regClass("laya.ui.TipManager", W),
        e.ClassUtils.regClass("Laya.TipManager", W);
    var V =
        /* */
        function(_n12) {
            _inherits(V, _n12);

            function V() {
                var _this31;
                _classCallCheck(this, V);
                _this31 = _possibleConstructorReturn(this, _getPrototypeOf(V).call(this)), _this31._width = _this31._height = 200;
                var t = new e.Texture();
                t.bitmap = new e.Texture2D(), _this31.texture = t;
                return _this31;
            }
            _createClass(V, [{
                key: "onEnable",
                value: function onEnable() {
                    this.postMsg({
                        type: "display",
                        rate: e.Laya.stage.frameRate
                    }), window.wx && window.sharedCanvas && e.Laya.timer.frameLoop(1, this, this._onLoop);
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    this.postMsg({
                        type: "undisplay"
                    }), e.Laya.timer.clear(this, this._onLoop);
                }
            }, {
                key: "_onLoop",
                value: function _onLoop() {
                    this.texture.bitmap.loadImageSource(window.sharedCanvas);
                }
            }, {
                key: "_postMsg",
                value: function _postMsg() {
                    var t = new e.Matrix();
                    t.translate(this.x, this.y);
                    var s = e.Laya.stage;
                    t.scale(s._canvasTransform.getScaleX() * this.globalScaleX * s.transform.getScaleX(), s._canvasTransform.getScaleY() * this.globalScaleY * s.transform.getScaleY()),
                        this.postMsg({
                            type: "changeMatrix",
                            a: t.a,
                            b: t.b,
                            c: t.c,
                            d: t.d,
                            tx: t.tx,
                            ty: t.ty,
                            w: this.width,
                            h: this.height
                        });
                }
            }, {
                key: "postMsg",
                value: function postMsg(t) {
                    window.wx && window.wx.getOpenDataContext && window.wx.getOpenDataContext().postMessage(t);
                }
            }, {
                key: "width",
                set: function set(t) {
                    _set(_getPrototypeOf(V.prototype), "width", t, this, true), window.sharedCanvas && (window.sharedCanvas.width = t),
                        this.callLater(this._postMsg);
                },
                get: function get() {
                    return _get(_getPrototypeOf(V.prototype), "width", this);
                }
            }, {
                key: "height",
                set: function set(t) {
                    _set(_getPrototypeOf(V.prototype), "height", t, this, true), window.sharedCanvas && (window.sharedCanvas.height = t),
                        this.callLater(this._postMsg);
                },
                get: function get() {
                    return _get(_getPrototypeOf(V.prototype), "height", this);
                }
            }, {
                key: "x",
                set: function set(t) {
                    _set(_getPrototypeOf(V.prototype), "x", t, this, true), this.callLater(this._postMsg);
                },
                get: function get() {
                    return _get(_getPrototypeOf(V.prototype), "x", this);
                }
            }, {
                key: "y",
                set: function set(t) {
                    _set(_getPrototypeOf(V.prototype), "y", t, this, true), this.callLater(this._postMsg);
                },
                get: function get() {
                    return _get(_getPrototypeOf(V.prototype), "y", this);
                }
            }]);
            return V;
        }(n);
    e.ILaya.regClass(V), e.ClassUtils.regClass("laya.ui.WXOpenDataViewer", V), e.ClassUtils.regClass("Laya.WXOpenDataViewer", V),
        t.AdvImage = _, t.AutoBitmap = h, t.Box = c, t.Button = d, t.CheckBox = u, t.Clip = g,
        t.ColorPicker = p, t.ComboBox = y, t.Dialog = G, t.DialogManager = X, t.FontClip = P,
        t.HBox = H, t.HScrollBar = S, t.HSlider = T, t.IUI = R, t.Image = o, t.Label = C,
        t.LayoutBox = A, t.List = b, t.Panel = z, t.ProgressBar = w, t.Radio = x, t.RadioGroup = E,
        t.ScaleBox = O, t.ScrollBar = m, t.Slider = v, t.Styles = i, t.Tab = I, t.TextArea = M,
        t.TextInput = k, t.TipManager = W, t.Tree = D, t.UIComponent = n, t.UIConfig = s,
        t.UIEvent = r, t.UIGroup = L, t.UILib =
        /* */
        function() {
            function _class() {
                _classCallCheck(this, _class);
            }
            _createClass(_class, null, [{
                key: "__init__",
                value: function __init__() {}
            }]);
            return _class;
        }(), t.UIUtils = l, t.VBox = N, t.VScrollBar = f, t.VSlider = U, t.View = Y, t.ViewStack = B,
        t.WXOpenDataViewer = V, t.Widget = a;
}(window.Laya = window.Laya || {}, Laya);