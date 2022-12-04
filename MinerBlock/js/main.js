this.createjs = this.createjs || {};
createjs.extend = function(b, e) {
	function a() {
		this.constructor = b
	}
	a.prototype = e.prototype;
	return b.prototype = new a
};
this.createjs = this.createjs || {};
createjs.promote = function(b, e) {
	var a = b.prototype,
		d = Object.getPrototypeOf && Object.getPrototypeOf(a) || a.__proto__;
	if (d) {
		a[(e += "_") + "constructor"] = d.constructor;
		for (var c in d) a.hasOwnProperty(c) && "function" == typeof d[c] && (a[e + c] = d[c])
	}
	return b
};
this.createjs = this.createjs || {};
createjs.deprecate = function(b, e) {
	return function() {
		var a = "Deprecated property or method '" + e + "'. See docs for info.";
		console && (console.warn ? console.warn(a) : console.log(a));
		return b && b.apply(this, arguments)
	}
};
this.createjs = this.createjs || {};
(function() {
	function b(a, d, c) {
		this.type = a;
		this.currentTarget = this.target = null;
		this.eventPhase = 0;
		this.bubbles = !!d;
		this.cancelable = !!c;
		this.timeStamp = (new Date).getTime();
		this.removed = this.immediatePropagationStopped = this.propagationStopped = this.defaultPrevented = !1
	}
	var e = b.prototype;
	e.preventDefault = function() {
		this.defaultPrevented = this.cancelable && !0
	};
	e.stopPropagation = function() {
		this.propagationStopped = !0
	};
	e.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = !0
	};
	e.remove = function() {
		this.removed = !0
	};
	e.clone = function() {
		return new b(this.type, this.bubbles, this.cancelable)
	};
	e.set = function(a) {
		for (var d in a) this[d] = a[d];
		return this
	};
	e.toString = function() {
		return "[Event (type=" + this.type + ")]"
	};
	createjs.Event = b
})();
this.createjs = this.createjs || {};
(function() {
	function b() {
		this._captureListeners = this._listeners = null
	}
	var e = b.prototype;
	b.initialize = function(a) {
		a.addEventListener = e.addEventListener;
		a.on = e.on;
		a.removeEventListener = a.off = e.removeEventListener;
		a.removeAllEventListeners = e.removeAllEventListeners;
		a.hasEventListener = e.hasEventListener;
		a.dispatchEvent = e.dispatchEvent;
		a._dispatchEvent = e._dispatchEvent;
		a.willTrigger = e.willTrigger
	};
	e.addEventListener = function(a, d, c) {
		var f = c ? this._captureListeners = this._captureListeners || {} : this._listeners =
			this._listeners || {};
		var g = f[a];
		g && this.removeEventListener(a, d, c);
		(g = f[a]) ? g.push(d): f[a] = [d];
		return d
	};
	e.on = function(a, d, c, f, g, h) {
		d.handleEvent && (c = c || d, d = d.handleEvent);
		c = c || this;
		return this.addEventListener(a, function(l) {
			d.call(c, l, g);
			f && l.remove()
		}, h)
	};
	e.removeEventListener = function(a, d, c) {
		if (c = c ? this._captureListeners : this._listeners) {
			var f = c[a];
			if (f)
				for (var g = 0, h = f.length; g < h; g++)
					if (f[g] == d) {
						1 == h ? delete c[a] : f.splice(g, 1);
						break
					}
		}
	};
	e.off = e.removeEventListener;
	e.removeAllEventListeners = function(a) {
		a ?
			(this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
	};
	e.dispatchEvent = function(a, d, c) {
		if ("string" == typeof a) {
			var f = this._listeners;
			if (!(d || f && f[a])) return !0;
			a = new createjs.Event(a, d, c)
		} else a.target && a.clone && (a = a.clone());
		try {
			a.target = this
		} catch (g) {}
		if (a.bubbles && this.parent) {
			c = this;
			for (d = [c]; c.parent;) d.push(c = c.parent);
			f = d.length;
			for (c = f - 1; 0 <= c && !a.propagationStopped; c--) d[c]._dispatchEvent(a, 1 + (0 == c));
			for (c = 1; c < f && !a.propagationStopped; c++) d[c]._dispatchEvent(a, 3)
		} else this._dispatchEvent(a, 2);
		return !a.defaultPrevented
	};
	e.hasEventListener = function(a) {
		var d = this._listeners,
			c = this._captureListeners;
		return !!(d && d[a] || c && c[a])
	};
	e.willTrigger = function(a) {
		for (var d = this; d;) {
			if (d.hasEventListener(a)) return !0;
			d = d.parent
		}
		return !1
	};
	e.toString = function() {
		return "[EventDispatcher]"
	};
	e._dispatchEvent = function(a, d) {
		var c, f, g = 2 >= d ? this._captureListeners : this._listeners;
		if (a && g && (f = g[a.type]) && (c = f.length)) {
			try {
				a.currentTarget =
					this
			} catch (l) {}
			try {
				a.eventPhase = d | 0
			} catch (l) {}
			a.removed = !1;
			f = f.slice();
			for (g = 0; g < c && !a.immediatePropagationStopped; g++) {
				var h = f[g];
				h.handleEvent ? h.handleEvent(a) : h(a);
				a.removed && (this.off(a.type, h, 1 == d), a.removed = !1)
			}
		}
		2 === d && this._dispatchEvent(a, 2.1)
	};
	createjs.EventDispatcher = b
})();
this.createjs = this.createjs || {};
(function() {
	function b() {
		throw "Ticker cannot be instantiated.";
	}
	b.RAF_SYNCHED = "synched";
	b.RAF = "raf";
	b.TIMEOUT = "timeout";
	b.timingMode = null;
	b.maxDelta = 0;
	b.paused = !1;
	b.removeEventListener = null;
	b.removeAllEventListeners = null;
	b.dispatchEvent = null;
	b.hasEventListener = null;
	b._listeners = null;
	createjs.EventDispatcher.initialize(b);
	b._addEventListener = b.addEventListener;
	b.addEventListener = function() {
		!b._inited && b.init();
		return b._addEventListener.apply(b, arguments)
	};
	b._inited = !1;
	b._startTime = 0;
	b._pausedTime =
		0;
	b._ticks = 0;
	b._pausedTicks = 0;
	b._interval = 50;
	b._lastTime = 0;
	b._times = null;
	b._tickTimes = null;
	b._timerId = null;
	b._raf = !0;
	b._setInterval = function(d) {
		b._interval = d;
		b._inited && b._setupTick()
	};
	b.setInterval = createjs.deprecate(b._setInterval, "Ticker.setInterval");
	b._getInterval = function() {
		return b._interval
	};
	b.getInterval = createjs.deprecate(b._getInterval, "Ticker.getInterval");
	b._setFPS = function(d) {
		b._setInterval(1E3 / d)
	};
	b.setFPS = createjs.deprecate(b._setFPS, "Ticker.setFPS");
	b._getFPS = function() {
		return 1E3 /
			b._interval
	};
	b.getFPS = createjs.deprecate(b._getFPS, "Ticker.getFPS");
	try {
		Object.defineProperties(b, {
			interval: {
				get: b._getInterval,
				set: b._setInterval
			},
			framerate: {
				get: b._getFPS,
				set: b._setFPS
			}
		})
	} catch (d) {
		console.log(d)
	}
	b.init = function() {
		b._inited || (b._inited = !0, b._times = [], b._tickTimes = [], b._startTime = b._getTime(), b._times.push(b._lastTime = 0), b.interval = b._interval)
	};
	b.reset = function() {
		if (b._raf) {
			var d = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame;
			d && d(b._timerId)
		} else clearTimeout(b._timerId);
		b.removeAllEventListeners("tick");
		b._timerId = b._times = b._tickTimes = null;
		b._startTime = b._lastTime = b._ticks = b._pausedTime = 0;
		b._inited = !1
	};
	b.getMeasuredTickTime = function(d) {
		var c = 0,
			f = b._tickTimes;
		if (!f || 1 > f.length) return -1;
		d = Math.min(f.length, d || b._getFPS() | 0);
		for (var g = 0; g < d; g++) c += f[g];
		return c / d
	};
	b.getMeasuredFPS = function(d) {
		var c = b._times;
		if (!c || 2 > c.length) return -1;
		d = Math.min(c.length - 1, d || b._getFPS() | 0);
		return 1E3 / ((c[0] -
			c[d]) / d)
	};
	b.getTime = function(d) {
		return b._startTime ? b._getTime() - (d ? b._pausedTime : 0) : -1
	};
	b.getEventTime = function(d) {
		return b._startTime ? (b._lastTime || b._startTime) - (d ? b._pausedTime : 0) : -1
	};
	b.getTicks = function(d) {
		return b._ticks - (d ? b._pausedTicks : 0)
	};
	b._handleSynch = function() {
		b._timerId = null;
		b._setupTick();
		b._getTime() - b._lastTime >= .97 * (b._interval - 1) && b._tick()
	};
	b._handleRAF = function() {
		b._timerId = null;
		b._setupTick();
		b._tick()
	};
	b._handleTimeout = function() {
		b._timerId = null;
		b._setupTick();
		b._tick()
	};
	b._setupTick =
		function() {
			if (null == b._timerId) {
				var d = b.timingMode;
				if (d == b.RAF_SYNCHED || d == b.RAF) {
					var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
					if (c) {
						b._timerId = c(d == b.RAF ? b._handleRAF : b._handleSynch);
						b._raf = !0;
						return
					}
				}
				b._raf = !1;
				b._timerId = setTimeout(b._handleTimeout, b._interval)
			}
		};
	b._tick = function() {
		var d = b.paused,
			c = b._getTime(),
			f = c - b._lastTime;
		b._lastTime = c;
		b._ticks++;
		d && (b._pausedTicks++, b._pausedTime +=
			f);
		if (b.hasEventListener("tick")) {
			var g = new createjs.Event("tick"),
				h = b.maxDelta;
			g.delta = h && f > h ? h : f;
			g.paused = d;
			g.time = c;
			g.runTime = c - b._pausedTime;
			b.dispatchEvent(g)
		}
		for (b._tickTimes.unshift(b._getTime() - c); 100 < b._tickTimes.length;) b._tickTimes.pop();
		for (b._times.unshift(c); 100 < b._times.length;) b._times.pop()
	};
	var e = window,
		a = e.performance.now || e.performance.mozNow || e.performance.msNow || e.performance.oNow || e.performance.webkitNow;
	b._getTime = function() {
		return (a && a.call(e.performance) || (new Date).getTime()) -
			b._startTime
	};
	createjs.Ticker = b
})();
this.createjs = this.createjs || {};
(function() {
	function b(a) {
		this.EventDispatcher_constructor();
		this.ignoreGlobalPause = !1;
		this.loop = 0;
		this.bounce = this.reversed = this.useTicks = !1;
		this.timeScale = 1;
		this.position = this.duration = 0;
		this.rawPosition = -1;
		this._paused = !0;
		this._labelList = this._labels = this._parent = this._prev = this._next = null;
		a && (this.useTicks = !!a.useTicks, this.ignoreGlobalPause = !!a.ignoreGlobalPause, this.loop = !0 === a.loop ? -1 : a.loop || 0, this.reversed = !!a.reversed, this.bounce = !!a.bounce, this.timeScale = a.timeScale || 1, a.onChange && this.addEventListener("change",
			a.onChange), a.onComplete && this.addEventListener("complete", a.onComplete))
	}
	var e = createjs.extend(b, createjs.EventDispatcher);
	e._setPaused = function(a) {
		createjs.Tween._register(this, a);
		return this
	};
	e.setPaused = createjs.deprecate(e._setPaused, "AbstractTween.setPaused");
	e._getPaused = function() {
		return this._paused
	};
	e.getPaused = createjs.deprecate(e._getPaused, "AbstactTween.getPaused");
	e._getCurrentLabel = function(a) {
		var d = this.getLabels();
		null == a && (a = this.position);
		for (var c = 0, f = d.length; c < f && !(a < d[c].position); c++);
		return 0 === c ? null : d[c - 1].label
	};
	e.getCurrentLabel = createjs.deprecate(e._getCurrentLabel, "AbstractTween.getCurrentLabel");
	try {
		Object.defineProperties(e, {
			paused: {
				set: e._setPaused,
				get: e._getPaused
			},
			currentLabel: {
				get: e._getCurrentLabel
			}
		})
	} catch (a) {}
	e.advance = function(a, d) {
		this.setPosition(this.rawPosition + a * this.timeScale, d)
	};
	e.setPosition = function(a, d, c, f) {
		var g = this.duration,
			h = this.loop,
			l = this.rawPosition,
			k = 0;
		0 > a && (a = 0);
		if (0 === g) {
			var m = !0;
			if (-1 !== l) return m
		} else {
			var q = a / g | 0;
			k = a - q * g;
			(m = -1 !== h && a >= h *
				g + g) && (a = (k = g) * (q = h) + g);
			if (a === l) return m;
			!this.reversed !== !(this.bounce && q % 2) && (k = g - k)
		}
		this.position = k;
		this.rawPosition = a;
		this._updatePosition(c, m);
		m && (this.paused = !0);
		f && f(this);
		d || this._runActions(l, a, c, !c && -1 === l);
		this.dispatchEvent("change");
		m && this.dispatchEvent("complete")
	};
	e.calculatePosition = function(a) {
		var d = this.duration,
			c = this.loop,
			f = 0;
		if (0 === d) return 0; - 1 !== c && a >= c * d + d ? (a = d, f = c) : 0 > a ? a = 0 : (f = a / d | 0, a -= f * d);
		return !this.reversed !== !(this.bounce && f % 2) ? d - a : a
	};
	e.getLabels = function() {
		var a = this._labelList;
		if (!a) {
			a = this._labelList = [];
			var d = this._labels,
				c;
			for (c in d) a.push({
				label: c,
				position: d[c]
			});
			a.sort(function(f, g) {
				return f.position - g.position
			})
		}
		return a
	};
	e.setLabels = function(a) {
		this._labels = a;
		this._labelList = null
	};
	e.addLabel = function(a, d) {
		this._labels || (this._labels = {});
		this._labels[a] = d;
		var c = this._labelList;
		if (c) {
			for (var f = 0, g = c.length; f < g && !(d < c[f].position); f++);
			c.splice(f, 0, {
				label: a,
				position: d
			})
		}
	};
	e.gotoAndPlay = function(a) {
		this.paused = !1;
		this._goto(a)
	};
	e.gotoAndStop = function(a) {
		this.paused = !0;
		this._goto(a)
	};
	e.resolve = function(a) {
		var d = Number(a);
		isNaN(d) && (d = this._labels && this._labels[a]);
		return d
	};
	e.toString = function() {
		return "[AbstractTween]"
	};
	e.clone = function() {
		throw "AbstractTween can not be cloned.";
	};
	e._init = function(a) {
		a && a.paused || (this.paused = !1);
		a && null != a.position && this.setPosition(a.position)
	};
	e._updatePosition = function(a, d) {};
	e._goto = function(a) {
		a = this.resolve(a);
		null != a && this.setPosition(a, !1, !0)
	};
	e._runActions = function(a, d, c, f) {
		if (this._actionHead || this.tweens) {
			var g = this.duration,
				h = this.reversed,
				l = this.bounce,
				k = this.loop,
				m, q, n;
			if (0 === g) {
				var p = m = q = n = 0;
				h = l = !1
			} else p = a / g | 0, m = d / g | 0, q = a - p * g, n = d - m * g; - 1 !== k && (m > k && (n = g, m = k), p > k && (q = g, p = k));
			if (c) return this._runActionsRange(n, n, c, f);
			if (p !== m || q !== n || c || f) {
				-1 === p && (p = q = 0);
				a = a <= d;
				d = p;
				do {
					k = d === p ? q : a ? 0 : g;
					var t = d === m ? n : a ? g : 0;
					!h !== !(l && d % 2) && (k = g - k, t = g - t);
					if ((!l || d === p || k !== t) && this._runActionsRange(k, t, c, f || d !== p && !l)) return !0;
					f = !1
				} while (a && ++d <= m || !a && --d >= m)
			}
		}
	};
	e._runActionsRange = function(a, d, c, f) {};
	createjs.AbstractTween = createjs.promote(b,
		"EventDispatcher")
})();
this.createjs = this.createjs || {};
(function() {
	function b(c, f) {
		this.AbstractTween_constructor(f);
		this.pluginData = null;
		this.target = c;
		this.passive = !1;
		this._stepTail = this._stepHead = new e(null, 0, 0, {}, null, !0);
		this._stepPosition = 0;
		this._injected = this._pluginIds = this._plugins = this._actionTail = this._actionHead = null;
		f && (this.pluginData = f.pluginData, f.override && b.removeTweens(c));
		this.pluginData || (this.pluginData = {});
		this._init(f)
	}

	function e(c, f, g, h, l, k) {
		this.next = null;
		this.prev = c;
		this.t = f;
		this.d = g;
		this.props = h;
		this.ease = l;
		this.passive = k;
		this.index =
			c ? c.index + 1 : 0
	}

	function a(c, f, g, h, l) {
		this.next = null;
		this.prev = c;
		this.t = f;
		this.d = 0;
		this.scope = g;
		this.funct = h;
		this.params = l
	}
	var d = createjs.extend(b, createjs.AbstractTween);
	b.IGNORE = {};
	b._tweens = [];
	b._plugins = null;
	b._tweenHead = null;
	b._tweenTail = null;
	b.get = function(c, f) {
		return new b(c, f)
	};
	b.tick = function(c, f) {
		for (var g = b._tweenHead; g;) {
			var h = g._next;
			f && !g.ignoreGlobalPause || g._paused || g.advance(g.useTicks ? 1 : c);
			g = h
		}
	};
	b.handleEvent = function(c) {
		"tick" === c.type && this.tick(c.delta, c.paused)
	};
	b.removeTweens =
		function(c) {
			if (c.tweenjs_count) {
				for (var f = b._tweenHead; f;) {
					var g = f._next;
					f.target === c && b._register(f, !0);
					f = g
				}
				c.tweenjs_count = 0
			}
		};
	b.removeAllTweens = function() {
		for (var c = b._tweenHead; c;) {
			var f = c._next;
			c._paused = !0;
			c.target && (c.target.tweenjs_count = 0);
			c._next = c._prev = null;
			c = f
		}
		b._tweenHead = b._tweenTail = null
	};
	b.hasActiveTweens = function(c) {
		return c ? !!c.tweenjs_count : !!b._tweenHead
	};
	b._installPlugin = function(c) {
		for (var f = c.priority = c.priority || 0, g = b._plugins = b._plugins || [], h = 0, l = g.length; h < l && !(f < g[h].priority); h++);
		g.splice(h, 0, c)
	};
	b._register = function(c, f) {
		var g = c.target;
		if (!f && c._paused) g && (g.tweenjs_count = g.tweenjs_count ? g.tweenjs_count + 1 : 1), (g = b._tweenTail) ? (b._tweenTail = g._next = c, c._prev = g) : b._tweenHead = b._tweenTail = c, !b._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", b), b._inited = !0);
		else if (f && !c._paused) {
			g && g.tweenjs_count--;
			g = c._next;
			var h = c._prev;
			g ? g._prev = h : b._tweenTail = h;
			h ? h._next = g : b._tweenHead = g;
			c._next = c._prev = null
		}
		c._paused = f
	};
	d.wait = function(c, f) {
		0 < c && this._addStep(+c, this._stepTail.props,
			null, f);
		return this
	};
	d.to = function(c, f, g) {
		if (null == f || 0 > f) f = 0;
		f = this._addStep(+f, null, g);
		this._appendProps(c, f);
		return this
	};
	d.label = function(c) {
		this.addLabel(c, this.duration);
		return this
	};
	d.call = function(c, f, g) {
		return this._addAction(g || this.target, c, f || [this])
	};
	d.set = function(c, f) {
		return this._addAction(f || this.target, this._set, [c])
	};
	d.play = function(c) {
		return this._addAction(c || this, this._set, [{
			paused: !1
		}])
	};
	d.pause = function(c) {
		return this._addAction(c || this, this._set, [{
			paused: !0
		}])
	};
	d.w = d.wait;
	d.t = d.to;
	d.c = d.call;
	d.s = d.set;
	d.toString = function() {
		return "[Tween]"
	};
	d.clone = function() {
		throw "Tween can not be cloned.";
	};
	d._addPlugin = function(c) {
		var f = this._pluginIds || (this._pluginIds = {}),
			g = c.ID;
		if (g && !f[g]) {
			f[g] = !0;
			f = this._plugins || (this._plugins = []);
			g = c.priority || 0;
			for (var h = 0, l = f.length; h < l; h++)
				if (g < f[h].priority) {
					f.splice(h, 0, c);
					return
				} f.push(c)
		}
	};
	d._updatePosition = function(c, f) {
		var g = this._stepHead.next,
			h = this.position,
			l = this.duration;
		if (this.target && g) {
			for (var k = g.next; k && k.t <= h;) g = g.next,
				k = g.next;
			this._updateTargetProps(g, f ? 0 === l ? 1 : h / l : (h - g.t) / g.d, f)
		}
		this._stepPosition = g ? h - g.t : 0
	};
	d._updateTargetProps = function(c, f, g) {
		if (!(this.passive = !!c.passive)) {
			var h, l = c.prev.props,
				k = c.props;
			if (h = c.ease) f = h(f, 0, 1, 1);
			h = this._plugins;
			var m;
			a: for (m in l) {
				var q = l[m];
				var n = k[m];
				q = q !== n && "number" === typeof q ? q + (n - q) * f : 1 <= f ? n : q;
				if (h) {
					n = 0;
					for (var p = h.length; n < p; n++) {
						var t = h[n].change(this, c, m, q, f, g);
						if (t === b.IGNORE) continue a;
						void 0 !== t && (q = t)
					}
				}
				this.target[m] = q
			}
		}
	};
	d._runActionsRange = function(c, f, g, h) {
		var l =
			(g = c > f) ? this._actionTail : this._actionHead,
			k = f,
			m = c;
		g && (k = c, m = f);
		for (var q = this.position; l;) {
			var n = l.t;
			if (n === f || n > m && n < k || h && n === c)
				if (l.funct.apply(l.scope, l.params), q !== this.position) return !0;
			l = g ? l.prev : l.next
		}
	};
	d._appendProps = function(c, f, g) {
		var h = this._stepHead.props,
			l = this.target,
			k = b._plugins,
			m, q, n = f.prev,
			p = n.props,
			t = f.props || (f.props = this._cloneProps(p)),
			w = {};
		for (m in c)
			if (c.hasOwnProperty(m) && (w[m] = t[m] = c[m], void 0 === h[m])) {
				var y = void 0;
				if (k)
					for (q = k.length - 1; 0 <= q; q--) {
						var G = k[q].init(this, m,
							y);
						void 0 !== G && (y = G);
						if (y === b.IGNORE) {
							delete t[m];
							delete w[m];
							break
						}
					}
				y !== b.IGNORE && (void 0 === y && (y = l[m]), p[m] = void 0 === y ? null : y)
			} for (m in w) {
			var u;
			for (c = n;
				(u = c) && (c = u.prev);)
				if (c.props !== u.props) {
					if (void 0 !== c.props[m]) break;
					c.props[m] = p[m]
				}
		}
		if (!1 !== g && (k = this._plugins))
			for (q = k.length - 1; 0 <= q; q--) k[q].step(this, f, w);
		if (g = this._injected) this._injected = null, this._appendProps(g, f, !1)
	};
	d._injectProp = function(c, f) {
		(this._injected || (this._injected = {}))[c] = f
	};
	d._addStep = function(c, f, g, h) {
		f = new e(this._stepTail,
			this.duration, c, f, g, h || !1);
		this.duration += c;
		return this._stepTail = this._stepTail.next = f
	};
	d._addAction = function(c, f, g) {
		c = new a(this._actionTail, this.duration, c, f, g);
		this._actionTail ? this._actionTail.next = c : this._actionHead = c;
		this._actionTail = c;
		return this
	};
	d._set = function(c) {
		for (var f in c) this[f] = c[f]
	};
	d._cloneProps = function(c) {
		var f = {},
			g;
		for (g in c) f[g] = c[g];
		return f
	};
	createjs.Tween = createjs.promote(b, "AbstractTween")
})();
this.createjs = this.createjs || {};
(function() {
	function b(a) {
		if (a instanceof Array || null == a && 1 < arguments.length) {
			var d = a;
			var c = arguments[1];
			a = arguments[2]
		} else a && (d = a.tweens, c = a.labels);
		this.AbstractTween_constructor(a);
		this.tweens = [];
		d && this.addTween.apply(this, d);
		this.setLabels(c);
		this._init(a)
	}
	var e = createjs.extend(b, createjs.AbstractTween);
	e.addTween = function(a) {
		a._parent && a._parent.removeTween(a);
		var d = arguments.length;
		if (1 < d) {
			for (var c = 0; c < d; c++) this.addTween(arguments[c]);
			return arguments[d - 1]
		}
		if (0 === d) return null;
		this.tweens.push(a);
		a._parent = this;
		a.paused = !0;
		d = a.duration;
		0 < a.loop && (d *= a.loop + 1);
		d > this.duration && (this.duration = d);
		0 <= this.rawPosition && a.setPosition(this.rawPosition);
		return a
	};
	e.removeTween = function(a) {
		var d = arguments.length;
		if (1 < d) {
			for (var c = !0, f = 0; f < d; f++) c = c && this.removeTween(arguments[f]);
			return c
		}
		if (0 === d) return !0;
		d = this.tweens;
		for (f = d.length; f--;)
			if (d[f] === a) return d.splice(f, 1), a._parent = null, a.duration >= this.duration && this.updateDuration(), !0;
		return !1
	};
	e.updateDuration = function() {
		for (var a = this.duration =
				0, d = this.tweens.length; a < d; a++) {
			var c = this.tweens[a],
				f = c.duration;
			0 < c.loop && (f *= c.loop + 1);
			f > this.duration && (this.duration = f)
		}
	};
	e.toString = function() {
		return "[Timeline]"
	};
	e.clone = function() {
		throw "Timeline can not be cloned.";
	};
	e._updatePosition = function(a, d) {
		for (var c = this.position, f = 0, g = this.tweens.length; f < g; f++) this.tweens[f].setPosition(c, !0, a)
	};
	e._runActionsRange = function(a, d, c, f) {
		for (var g = this.position, h = 0, l = this.tweens.length; h < l; h++)
			if (this.tweens[h]._runActions(a, d, c, f), g !== this.position) return !0
	};
	createjs.Timeline = createjs.promote(b, "AbstractTween")
})();
this.createjs = this.createjs || {};
(function() {
	function b() {
		throw "Ease cannot be instantiated.";
	}
	b.linear = function(e) {
		return e
	};
	b.none = b.linear;
	b.get = function(e) {
		-1 > e ? e = -1 : 1 < e && (e = 1);
		return function(a) {
			return 0 == e ? a : 0 > e ? a * (a * -e + 1 + e) : a * ((2 - a) * e + (1 - e))
		}
	};
	b.getPowIn = function(e) {
		return function(a) {
			return Math.pow(a, e)
		}
	};
	b.getPowOut = function(e) {
		return function(a) {
			return 1 - Math.pow(1 - a, e)
		}
	};
	b.getPowInOut = function(e) {
		return function(a) {
			return 1 > (a *= 2) ? .5 * Math.pow(a, e) : 1 - .5 * Math.abs(Math.pow(2 - a, e))
		}
	};
	b.quadIn = b.getPowIn(2);
	b.quadOut = b.getPowOut(2);
	b.quadInOut = b.getPowInOut(2);
	b.cubicIn = b.getPowIn(3);
	b.cubicOut = b.getPowOut(3);
	b.cubicInOut = b.getPowInOut(3);
	b.quartIn = b.getPowIn(4);
	b.quartOut = b.getPowOut(4);
	b.quartInOut = b.getPowInOut(4);
	b.quintIn = b.getPowIn(5);
	b.quintOut = b.getPowOut(5);
	b.quintInOut = b.getPowInOut(5);
	b.sineIn = function(e) {
		return 1 - Math.cos(e * Math.PI / 2)
	};
	b.sineOut = function(e) {
		return Math.sin(e * Math.PI / 2)
	};
	b.sineInOut = function(e) {
		return -.5 * (Math.cos(Math.PI * e) - 1)
	};
	b.getBackIn = function(e) {
		return function(a) {
			return a * a * ((e + 1) * a - e)
		}
	};
	b.backIn = b.getBackIn(1.7);
	b.getBackOut = function(e) {
		return function(a) {
			return --a * a * ((e + 1) * a + e) + 1
		}
	};
	b.backOut = b.getBackOut(1.7);
	b.getBackInOut = function(e) {
		e *= 1.525;
		return function(a) {
			return 1 > (a *= 2) ? .5 * a * a * ((e + 1) * a - e) : .5 * ((a -= 2) * a * ((e + 1) * a + e) + 2)
		}
	};
	b.backInOut = b.getBackInOut(1.7);
	b.circIn = function(e) {
		return -(Math.sqrt(1 - e * e) - 1)
	};
	b.circOut = function(e) {
		return Math.sqrt(1 - --e * e)
	};
	b.circInOut = function(e) {
		return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
	};
	b.bounceIn = function(e) {
		return 1 -
			b.bounceOut(1 - e)
	};
	b.bounceOut = function(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	};
	b.bounceInOut = function(e) {
		return .5 > e ? .5 * b.bounceIn(2 * e) : .5 * b.bounceOut(2 * e - 1) + .5
	};
	b.getElasticIn = function(e, a) {
		var d = 2 * Math.PI;
		return function(c) {
			if (0 == c || 1 == c) return c;
			var f = a / d * Math.asin(1 / e);
			return -(e * Math.pow(2, 10 * --c) * Math.sin((c - f) * d / a))
		}
	};
	b.elasticIn = b.getElasticIn(1, .3);
	b.getElasticOut = function(e, a) {
		var d = 2 * Math.PI;
		return function(c) {
			return 0 == c || 1 == c ? c : e * Math.pow(2, -10 * c) * Math.sin((c - a / d * Math.asin(1 / e)) * d / a) + 1
		}
	};
	b.elasticOut = b.getElasticOut(1, .3);
	b.getElasticInOut = function(e, a) {
		var d = 2 * Math.PI;
		return function(c) {
			var f = a / d * Math.asin(1 / e);
			return 1 > (c *= 2) ? -.5 * e * Math.pow(2, 10 * --c) * Math.sin((c - f) * d / a) : e * Math.pow(2, -10 * --c) * Math.sin((c - f) * d / a) * .5 + 1
		}
	};
	b.elasticInOut = b.getElasticInOut(1, .3 * 1.5);
	createjs.Ease = b
})();
this.createjs = this.createjs || {};
(function() {
	function b() {
		throw "MotionGuidePlugin cannot be instantiated.";
	}
	b.priority = 0;
	b.ID = "MotionGuide";
	b.install = function() {
		createjs.Tween._installPlugin(b);
		return createjs.Tween.IGNORE
	};
	b.init = function(e, a, d) {
		"guide" == a && e._addPlugin(b)
	};
	b.step = function(e, a, d) {
		for (var c in d)
			if ("guide" === c) {
				var f = a.props.guide,
					g = b._solveGuideData(d.guide, f);
				f.valid = !g;
				var h = f.endData;
				e._injectProp("x", h.x);
				e._injectProp("y", h.y);
				if (g || !f.orient) break;
				f.startOffsetRot = (void 0 === a.prev.props.rotation ? e.target.rotation ||
					0 : a.prev.props.rotation) - f.startData.rotation;
				if ("fixed" == f.orient) f.endAbsRot = h.rotation + f.startOffsetRot, f.deltaRotation = 0;
				else {
					g = void 0 === d.rotation ? e.target.rotation || 0 : d.rotation;
					h = g - f.endData.rotation - f.startOffsetRot;
					var l = h % 360;
					f.endAbsRot = g;
					switch (f.orient) {
						case "auto":
							f.deltaRotation = h;
							break;
						case "cw":
							f.deltaRotation = (l + 360) % 360 + 360 * Math.abs(h / 360 | 0);
							break;
						case "ccw":
							f.deltaRotation = (l - 360) % 360 + -360 * Math.abs(h / 360 | 0)
					}
				}
				e._injectProp("rotation", f.endAbsRot)
			}
	};
	b.change = function(e, a, d, c, f, g) {
		if ((c =
				a.props.guide) && a.props !== a.prev.props && c !== a.prev.props.guide) {
			if ("guide" === d && !c.valid || "x" == d || "y" == d || "rotation" === d && c.orient) return createjs.Tween.IGNORE;
			b._ratioToPositionData(f, c, e.target)
		}
	};
	b.debug = function(e, a, d) {
		e = e.guide || e;
		var c = b._findPathProblems(e);
		c && console.error("MotionGuidePlugin Error found: \n" + c);
		if (!a) return c;
		var f, g = e.path,
			h = g.length;
		a.save();
		a.lineCap = "round";
		a.lineJoin = "miter";
		a.beginPath();
		a.moveTo(g[0], g[1]);
		for (f = 2; f < h; f += 4) a.quadraticCurveTo(g[f], g[f + 1], g[f + 2], g[f +
			3]);
		a.strokeStyle = "black";
		a.lineWidth = 4.5;
		a.stroke();
		a.strokeStyle = "white";
		a.lineWidth = 3;
		a.stroke();
		a.closePath();
		g = d.length;
		if (d && g) {
			h = {};
			var l = {};
			b._solveGuideData(e, h);
			for (f = 0; f < g; f++) h.orient = "fixed", b._ratioToPositionData(d[f], h, l), a.beginPath(), a.moveTo(l.x, l.y), a.lineTo(l.x + 9 * Math.cos(.0174533 * l.rotation), l.y + 9 * Math.sin(.0174533 * l.rotation)), a.strokeStyle = "black", a.lineWidth = 4.5, a.stroke(), a.strokeStyle = "red", a.lineWidth = 3, a.stroke(), a.closePath()
		}
		a.restore();
		return c
	};
	b._solveGuideData = function(e,
		a) {
		var d;
		if (d = b.debug(e)) return d;
		var c = a.path = e.path;
		a.orient = e.orient;
		a.subLines = [];
		a.totalLength = 0;
		a.startOffsetRot = 0;
		a.deltaRotation = 0;
		a.startData = {
			ratio: 0
		};
		a.endData = {
			ratio: 1
		};
		a.animSpan = 1;
		var f = c.length,
			g, h = {};
		var l = c[0];
		var k = c[1];
		for (d = 2; d < f; d += 4) {
			var m = c[d];
			var q = c[d + 1];
			var n = c[d + 2];
			var p = c[d + 3];
			var t = {
					weightings: [],
					estLength: 0,
					portion: 0
				},
				w = l;
			var y = k;
			for (g = 1; 10 >= g; g++) b._getParamsForCurve(l, k, m, q, n, p, g / 10, !1, h), w = h.x - w, y = h.y - y, y = Math.sqrt(w * w + y * y), t.weightings.push(y), t.estLength += y, w = h.x,
				y = h.y;
			a.totalLength += t.estLength;
			for (g = 0; 10 > g; g++) y = t.estLength, t.weightings[g] /= y;
			a.subLines.push(t);
			l = n;
			k = p
		}
		y = a.totalLength;
		c = a.subLines.length;
		for (d = 0; d < c; d++) a.subLines[d].portion = a.subLines[d].estLength / y;
		d = isNaN(e.start) ? 0 : e.start;
		c = isNaN(e.end) ? 1 : e.end;
		b._ratioToPositionData(d, a, a.startData);
		b._ratioToPositionData(c, a, a.endData);
		a.startData.ratio = d;
		a.endData.ratio = c;
		a.animSpan = a.endData.ratio - a.startData.ratio
	};
	b._ratioToPositionData = function(e, a, d) {
		var c = a.subLines,
			f, g = 0,
			h = e * a.animSpan + a.startData.ratio;
		var l = c.length;
		for (f = 0; f < l; f++) {
			var k = c[f].portion;
			if (g + k >= h) {
				var m = f;
				break
			}
			g += k
		}
		void 0 === m && (m = l - 1, g -= k);
		c = c[m].weightings;
		var q = k;
		l = c.length;
		for (f = 0; f < l; f++) {
			k = c[f] * q;
			if (g + k >= h) break;
			g += k
		}
		m = 4 * m + 2;
		l = a.path;
		b._getParamsForCurve(l[m - 2], l[m - 1], l[m], l[m + 1], l[m + 2], l[m + 3], f / 10 + (h - g) / k * .1, a.orient, d);
		a.orient && (d.rotation = .99999 <= e && 1.00001 >= e && void 0 !== a.endAbsRot ? a.endAbsRot : d.rotation + (a.startOffsetRot + e * a.deltaRotation));
		return d
	};
	b._getParamsForCurve = function(e, a, d, c, f, g, h, l, k) {
		var m = 1 - h;
		k.x = m * m * e +
			2 * m * h * d + h * h * f;
		k.y = m * m * a + 2 * m * h * c + h * h * g;
		l && (k.rotation = 57.2957795 * Math.atan2((c - a) * m + (g - c) * h, (d - e) * m + (f - d) * h))
	};
	b._findPathProblems = function(e) {
		var a = e.path,
			d = a && a.length || 0;
		if (6 > d || (d - 2) % 4) return "\tCannot parse 'path' array due to invalid number of entries in path. There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\nOnly [ " + (d + " ] values found. Expected: " + Math.max(4 *
			Math.ceil((d - 2) / 4) + 2, 6));
		for (var c = 0; c < d; c++)
			if (isNaN(a[c])) return "All data in path array must be numeric";
		a = e.start;
		if (isNaN(a) && void 0 !== a) return "'start' out of bounds. Expected 0 to 1, got: " + a;
		a = e.end;
		if (isNaN(a) && void 0 !== a) return "'end' out of bounds. Expected 0 to 1, got: " + a;
		if ((e = e.orient) && "fixed" != e && "auto" != e && "cw" != e && "ccw" != e) return 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + e
	};
	createjs.MotionGuidePlugin = b
})();
this.createjs = this.createjs || {};
(function() {
	var b = createjs.TweenJS = createjs.TweenJS || {};
	b.version = "1.0.0";
	b.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT"
})();
! function() {
	var b = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
		e = "undefined" != typeof module && module.exports,
		a = function() {
			for (var f, g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
					"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
				], h = 0, l = g.length, k = {}; h < l; h++)
				if ((f = g[h]) && f[1] in b) {
					for (h = 0; h < f.length; h++) k[g[0][h]] = f[h];
					return k
				} return !1
		}(),
		d = {
			change: a.fullscreenchange,
			error: a.fullscreenerror
		},
		c = {
			request: function(f) {
				return new Promise(function(g, h) {
					var l = function() {
						this.off("change",
							l);
						g()
					}.bind(this);
					this.on("change", l);
					f = f || b.documentElement;
					Promise.resolve(f[a.requestFullscreen]())["catch"](h)
				}.bind(this))
			},
			exit: function() {
				return new Promise(function(f, g) {
					if (this.isFullscreen) {
						var h = function() {
							this.off("change", h);
							f()
						}.bind(this);
						this.on("change", h);
						Promise.resolve(b[a.exitFullscreen]())["catch"](g)
					} else f()
				}.bind(this))
			},
			toggle: function(f) {
				return this.isFullscreen ? this.exit() : this.request(f)
			},
			onchange: function(f) {
				this.on("change", f)
			},
			onerror: function(f) {
				this.on("error", f)
			},
			on: function(f, g) {
				var h = d[f];
				h && b.addEventListener(h, g, !1)
			},
			off: function(f, g) {
				var h = d[f];
				h && b.removeEventListener(h, g, !1)
			},
			raw: a
		};
	a ? (Object.defineProperties(c, {
		isFullscreen: {
			get: function() {
				return !!b[a.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return b[a.fullscreenElement]
			}
		},
		isEnabled: {
			enumerable: !0,
			get: function() {
				return !!b[a.fullscreenEnabled]
			}
		}
	}), e ? module.exports = c : window.screenfull = c) : e ? module.exports = {
		isEnabled: !1
	} : window.screenfull = {
		isEnabled: !1
	}
}();
! function() {
	function b(c) {
		var f = c;
		if (d[f]) f = d[f];
		else {
			for (var g = f, h, l = [], k = 0; g;) {
				if (null !== (h = a.text.exec(g))) l.push(h[0]);
				else if (null !== (h = a.modulo.exec(g))) l.push("%");
				else if (null !== (h = a.placeholder.exec(g))) {
					if (h[2]) {
						k |= 1;
						var m = [],
							q = h[2],
							n;
						if (null !== (n = a.key.exec(q)))
							for (m.push(n[1]);
								"" !== (q = q.substring(n[0].length));)
								if (null !== (n = a.key_access.exec(q))) m.push(n[1]);
								else if (null !== (n = a.index_access.exec(q))) m.push(n[1]);
						else throw new SyntaxError("[sprintf] failed to parse named argument key");
						else throw new SyntaxError("[sprintf] failed to parse named argument key");
						h[2] = m
					} else k |= 2;
					if (3 === k) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
					l.push({
						placeholder: h[0],
						param_no: h[1],
						keys: h[2],
						sign: h[3],
						pad_char: h[4],
						align: h[5],
						width: h[6],
						precision: h[7],
						type: h[8]
					})
				} else throw new SyntaxError("[sprintf] unexpected placeholder");
				g = g.substring(h[0].length)
			}
			f = d[f] = l
		}
		g = arguments;
		h = 1;
		l = f.length;
		m = "";
		var p, t;
		for (q = 0; q < l; q++)
			if ("string" === typeof f[q]) m += f[q];
			else if ("object" === typeof f[q]) {
			n = f[q];
			if (n.keys)
				for (k = g[h], p = 0; p < n.keys.length; p++) {
					if (void 0 == k) throw Error(b('[sprintf] Cannot access property "%s" of undefined value "%s"', n.keys[p], n.keys[p - 1]));
					k = k[n.keys[p]]
				} else k = n.param_no ? g[n.param_no] : g[h++];
			a.not_type.test(n.type) && a.not_primitive.test(n.type) && k instanceof Function && (k = k());
			if (a.numeric_arg.test(n.type) && "number" !== typeof k && isNaN(k)) throw new TypeError(b("[sprintf] expecting number but found %T", k));
			a.number.test(n.type) && (t = 0 <= k);
			switch (n.type) {
				case "b":
					k = parseInt(k, 10).toString(2);
					break;
				case "c":
					k = String.fromCharCode(parseInt(k, 10));
					break;
				case "d":
				case "i":
					k = parseInt(k, 10);
					break;
				case "j":
					k = JSON.stringify(k, null, n.width ? parseInt(n.width) : 0);
					break;
				case "e":
					k = n.precision ? parseFloat(k).toExponential(n.precision) : parseFloat(k).toExponential();
					break;
				case "f":
					k = n.precision ? parseFloat(k).toFixed(n.precision) : parseFloat(k);
					break;
				case "g":
					k = n.precision ? String(Number(k.toPrecision(n.precision))) : parseFloat(k);
					break;
				case "o":
					k = (parseInt(k,
						10) >>> 0).toString(8);
					break;
				case "s":
					k = String(k);
					k = n.precision ? k.substring(0, n.precision) : k;
					break;
				case "t":
					k = String(!!k);
					k = n.precision ? k.substring(0, n.precision) : k;
					break;
				case "T":
					k = Object.prototype.toString.call(k).slice(8, -1).toLowerCase();
					k = n.precision ? k.substring(0, n.precision) : k;
					break;
				case "u":
					k = parseInt(k, 10) >>> 0;
					break;
				case "v":
					k = k.valueOf();
					k = n.precision ? k.substring(0, n.precision) : k;
					break;
				case "x":
					k = (parseInt(k, 10) >>> 0).toString(16);
					break;
				case "X":
					k = (parseInt(k, 10) >>> 0).toString(16).toUpperCase()
			}
			if (a.json.test(n.type)) m +=
				k;
			else {
				if (!a.number.test(n.type) || t && !n.sign) var w = "";
				else w = t ? "+" : "-", k = k.toString().replace(a.sign, "");
				p = n.pad_char ? "0" === n.pad_char ? "0" : n.pad_char.charAt(1) : " ";
				var y = n.width - (w + k).length;
				y = n.width ? 0 < y ? p.repeat(y) : "" : "";
				m += n.align ? w + k + y : "0" === p ? w + y + k : y + w + k
			}
		}
		return m
	}

	function e(c, f) {
		return b.apply(null, [c].concat(f || []))
	}
	var a = {
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
		d = Object.create(null);
	"undefined" !== typeof exports && (exports.sprintf = b, exports.vsprintf = e);
	"undefined" !== typeof window && (window.sprintf = b, window.vsprintf = e, "function" === typeof define && define.amd && define(function() {
		return {
			sprintf: b,
			vsprintf: e
		}
	}))
}();
(function() {
	function b(u) {
		u = String(u);
		return u.charAt(0).toUpperCase() + u.slice(1)
	}

	function e(u, D) {
		var H = -1,
			B = u ? u.length : 0;
		if ("number" == typeof B && -1 < B && B <= p)
			for (; ++H < B;) D(u[H], H, u);
		else d(u, D)
	}

	function a(u) {
		u = String(u).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(u) ? u : b(u)
	}

	function d(u, D) {
		for (var H in u) w.call(u, H) && D(u[H], H, u)
	}

	function c(u) {
		return null == u ? b(u) : y.call(u).slice(8, -1)
	}

	function f(u, D) {
		var H = null != u ? typeof u[D] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(H) &&
			("object" == H ? !!u[D] : !0)
	}

	function g(u) {
		return String(u).replace(/([ -])(?!$)/g, "$1?")
	}

	function h(u, D) {
		var H = null;
		e(u, function(B, v) {
			H = D(H, B, v, u)
		});
		return H
	}

	function l(u) {
		function D(R) {
			return h(R, function(Q, P) {
				var S = P.pattern || g(P);
				!Q && (Q = RegExp("\\b" + S + " *\\d+[.\\w_]*", "i").exec(u) || RegExp("\\b" + S + " *\\w+-[\\w]*", "i").exec(u) || RegExp("\\b" + S + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(u)) && ((Q = String(P.label && !RegExp(S, "i").test(P.label) ? P.label : Q).split("/"))[1] && !/[\d.]+/.test(Q[0]) && (Q[0] +=
					" " + Q[1]), P = P.label || P, Q = a(Q[0].replace(RegExp(S, "i"), P).replace(RegExp("; *(?:" + P + "[_-])?", "i"), " ").replace(RegExp("(" + P + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return Q
			})
		}

		function H(R) {
			return h(R, function(Q, P) {
				return Q || (RegExp(P + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(u) || 0)[1] || null
			})
		}
		var B = m,
			v = u && "object" == typeof u && "String" != c(u);
		v && (B = u, u = null);
		var J = B.navigator || {},
			z = J.userAgent || "";
		u || (u = z);
		var x = v ? !!J.likeChrome : /\bChrome\b/.test(u) && !/internal|\n/i.test(y.toString()),
			E = v ? "Object" : "ScriptBridgingProxyObject",
			F = v ? "Object" : "Environment",
			L = v && B.java ? "JavaPackage" : c(B.java),
			I = v ? "Object" : "RuntimeObject";
		F = (L = /\bJava/.test(L) && B.java) && c(B.environment) == F;
		var K = L ? "a" : "\u03b1",
			W = L ? "b" : "\u03b2",
			M = B.document || {},
			T = B.operamini || B.opera,
			Y = t.test(Y = v && T ? T["[[Class]]"] : c(T)) ? Y : T = null,
			r, Z = u;
		v = [];
		var aa = null,
			X = u == z;
		z = X && T && "function" == typeof T.version && T.version();
		var N = function(R) {
				return h(R, function(Q, P) {
					return Q || RegExp("\\b" + (P.pattern || g(P)) + "\\b", "i").exec(u) && (P.label ||
						P)
				})
			}([{
				label: "EdgeHTML",
				pattern: "Edge"
			}, "Trident", {
				label: "WebKit",
				pattern: "AppleWebKit"
			}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			A = function(R) {
				return h(R, function(Q, P) {
					return Q || RegExp("\\b" + (P.pattern || g(P)) + "\\b", "i").exec(u) && (P.label || P)
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
			O = D([{
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
			U = function(R) {
				return h(R, function(Q, P, S) {
					return Q || (P[O] || P[/^[a-z]+(?: +[a-z]+\b)*/i.exec(O)] || RegExp("\\b" + g(S) + "(?:\\b|\\w*\\d)", "i").exec(u)) && S
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
			C = function(R) {
				return h(R, function(Q, P) {
					var S = P.pattern || g(P);
					if (!Q && (Q = RegExp("\\b" + S + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(u))) {
						var V = Q,
							ba = P.label || P,
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
						S && ba && /^Win/i.test(V) && !/^Windows Phone /i.test(V) && (ca = ca[/[\d.]+$/.exec(V)]) && (V = "Windows " + ca);
						V = String(V);
						S && ba && (V = V.replace(RegExp(S, "i"), ba));
						Q = V = a(V.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
							"$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return Q
				})
			}(["Windows Phone", "Android", "CentOS", {
					label: "Chrome OS",
					pattern: "CrOS"
				}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
				"Macintosh", "Mac", "Windows 98;", "Windows "
			]);
		N && (N = [N]);
		U && !O && (O = D([U]));
		if (r = /\bGoogle TV\b/.exec(O)) O = r[0];
		/\bSimulator\b/i.test(u) && (O = (O ? O + " " : "") + "Simulator");
		"Opera Mini" == A && /\bOPiOS\b/.test(u) && v.push("running in Turbo/Uncompressed mode");
		"IE" == A && /\blike iPhone OS\b/.test(u) ? (r = l(u.replace(/like iPhone OS/, "")), U = r.manufacturer, O = r.product) : /^iP/.test(O) ? (A || (A = "Safari"), C = "iOS" + ((r = / OS ([\d_]+)/i.exec(u)) ? " " + r[1].replace(/_/g, ".") : "")) : "Konqueror" != A || /buntu/i.test(C) ? U && "Google" != U &&
			(/Chrome/.test(A) && !/\bMobile Safari\b/i.test(u) || /\bVita\b/.test(O)) || /\bAndroid\b/.test(C) && /^Chrome/.test(A) && /\bVersion\//i.test(u) ? (A = "Android Browser", C = /\bAndroid\b/.test(C) ? C : "Android") : "Silk" == A ? (/\bMobi/i.test(u) || (C = "Android", v.unshift("desktop mode")), /Accelerated *= *true/i.test(u) && v.unshift("accelerated")) : "PaleMoon" == A && (r = /\bFirefox\/([\d.]+)\b/.exec(u)) ? v.push("identifying as Firefox " + r[1]) : "Firefox" == A && (r = /\b(Mobile|Tablet|TV)\b/i.exec(u)) ? (C || (C = "Firefox OS"), O || (O = r[1])) : !A ||
			(r = !/\bMinefield\b/i.test(u) && /\b(?:Firefox|Safari)\b/.exec(A)) ? (A && !O && /[\/,]|^[^(]+?\)/.test(u.slice(u.indexOf(r + "/") + 8)) && (A = null), (r = O || U || C) && (O || U || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(C)) && (A = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(C) ? C : r) + " Browser")) : "Electron" == A && (r = (/\bChrome\/([\d.]+)\b/.exec(u) || 0)[1]) && v.push("Chromium " + r) : C = "Kubuntu";
		z || (z = H(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(A),
			"(?:Firefox|Minefield|NetFront)"
		]));
		if (r = "iCab" == N && 3 < parseFloat(z) && "WebKit" || /\bOpera\b/.test(A) && (/\bOPR\b/.test(u) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(u) && !/^(?:Trident|EdgeHTML)$/.test(N) && "WebKit" || !N && /\bMSIE\b/i.test(u) && ("Mac OS" == C ? "Tasman" : "Trident") || "WebKit" == N && /\bPlayStation\b(?! Vita\b)/i.test(A) && "NetFront") N = [r];
		"IE" == A && (r = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(u) || 0)[1]) ? (A += " Mobile", C = "Windows Phone " + (/\+$/.test(r) ? r : r + ".x"), v.unshift("desktop mode")) : /\bWPDesktop\b/i.test(u) ?
			(A = "IE Mobile", C = "Windows Phone 8.x", v.unshift("desktop mode"), z || (z = (/\brv:([\d.]+)/.exec(u) || 0)[1])) : "IE" != A && "Trident" == N && (r = /\brv:([\d.]+)/.exec(u)) && (A && v.push("identifying as " + A + (z ? " " + z : "")), A = "IE", z = r[1]);
		if (X) {
			if (f(B, "global"))
				if (L && (r = L.lang.System, Z = r.getProperty("os.arch"), C = C || r.getProperty("os.name") + " " + r.getProperty("os.version")), F) {
					try {
						z = B.require("ringo/engine").version.join("."), A = "RingoJS"
					} catch (R) {
						(r = B.system) && r.global.system == B.system && (A = "Narwhal", C || (C = r[0].os || null))
					}
					A ||
						(A = "Rhino")
				} else "object" == typeof B.process && !B.process.browser && (r = B.process) && ("object" == typeof r.versions && ("string" == typeof r.versions.electron ? (v.push("Node " + r.versions.node), A = "Electron", z = r.versions.electron) : "string" == typeof r.versions.nw && (v.push("Chromium " + z, "Node " + r.versions.node), A = "NW.js", z = r.versions.nw)), A || (A = "Node.js", Z = r.arch, C = r.platform, z = (z = /[\d.]+/.exec(r.version)) ? z[0] : null));
			else c(r = B.runtime) == E ? (A = "Adobe AIR", C = r.flash.system.Capabilities.os) : c(r = B.phantom) == I ? (A = "PhantomJS",
				z = (r = r.version || null) && r.major + "." + r.minor + "." + r.patch) : "number" == typeof M.documentMode && (r = /\bTrident\/(\d+)/i.exec(u)) ? (z = [z, M.documentMode], (r = +r[1] + 4) != z[1] && (v.push("IE " + z[1] + " mode"), N && (N[1] = ""), z[1] = r), z = "IE" == A ? String(z[1].toFixed(1)) : z[0]) : "number" == typeof M.documentMode && /^(?:Chrome|Firefox)\b/.test(A) && (v.push("masking as " + A + " " + z), A = "IE", z = "11.0", N = ["Trident"], C = "Windows");
			C = C && a(C)
		}
		z && (r = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(z) || /(?:alpha|beta)(?: ?\d)?/i.exec(u + ";" + (X && J.appMinorVersion)) ||
			/\bMinefield\b/i.test(u) && "a") && (aa = /b/i.test(r) ? "beta" : "alpha", z = z.replace(RegExp(r + "\\+?$"), "") + ("beta" == aa ? W : K) + (/\d+\+?/.exec(r) || ""));
		if ("Fennec" == A || "Firefox" == A && /\b(?:Android|Firefox OS)\b/.test(C)) A = "Firefox Mobile";
		else if ("Maxthon" == A && z) z = z.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(O)) "Xbox 360" == O && (C = null), "Xbox 360" == O && /\bIEMobile\b/.test(u) && v.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(A) && (!A || O || /Browser|Mobi/.test(A)) || "Windows CE" != C && !/Mobi/i.test(u))
			if ("IE" ==
				A && X) try {
				null === B.external && v.unshift("platform preview")
			} catch (R) {
				v.unshift("embedded")
			} else(/\bBlackBerry\b/.test(O) || /\bBB10\b/.test(u)) && (r = (RegExp(O.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(u) || 0)[1] || z) ? (r = [r, /BB10/.test(u)], C = (r[1] ? (O = null, U = "BlackBerry") : "Device Software") + " " + r[0], z = null) : this != d && "Wii" != O && (X && T || /Opera/.test(A) && /\b(?:MSIE|Firefox)\b/i.test(u) || "Firefox" == A && /\bOS X (?:\d+\.){2,}/.test(C) || "IE" == A && (C && !/^Win/.test(C) && 5.5 < z || /\bWindows XP\b/.test(C) && 8 < z || 8 == z && !/\bTrident\b/.test(u))) &&
				!t.test(r = l.call(d, u.replace(t, "") + ";")) && r.name && (r = "ing as " + r.name + ((r = r.version) ? " " + r : ""), t.test(A) ? (/\bIE\b/.test(r) && "Mac OS" == C && (C = null), r = "identify" + r) : (r = "mask" + r, A = Y ? a(Y.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(r) && (C = null), X || (z = null)), N = ["Presto"], v.push(r));
			else A += " Mobile";
		if (r = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(u) || 0)[1]) {
			r = [parseFloat(r.replace(/\.(\d)$/, ".0$1")), r];
			if ("Safari" == A && "+" == r[1].slice(-1)) A = "WebKit Nightly", aa = "alpha", z = r[1].slice(0, -1);
			else if (z ==
				r[1] || z == (r[2] = (/\bSafari\/([\d.]+\+?)/i.exec(u) || 0)[1])) z = null;
			r[1] = (/\bChrome\/([\d.]+)/i.exec(u) || 0)[1];
			537.36 == r[0] && 537.36 == r[2] && 28 <= parseFloat(r[1]) && "WebKit" == N && (N = ["Blink"]);
			X && (x || r[1]) ? (N && (N[1] = "like Chrome"), r = r[1] || (r = r[0], 530 > r ? 1 : 532 > r ? 2 : 532.05 > r ? 3 : 533 > r ? 4 : 534.03 > r ? 5 : 534.07 > r ? 6 : 534.1 > r ? 7 : 534.13 > r ? 8 : 534.16 > r ? 9 : 534.24 > r ? 10 : 534.3 > r ? 11 : 535.01 > r ? 12 : 535.02 > r ? "13+" : 535.07 > r ? 15 : 535.11 > r ? 16 : 535.19 > r ? 17 : 536.05 > r ? 18 : 536.1 > r ? 19 : 537.01 > r ? 20 : 537.11 > r ? "21+" : 537.13 > r ? 23 : 537.18 > r ? 24 : 537.24 > r ? 25 : 537.36 >
				r ? 26 : "Blink" != N ? "27" : "28")) : (N && (N[1] = "like Safari"), r = (r = r[0], 400 > r ? 1 : 500 > r ? 2 : 526 > r ? 3 : 533 > r ? 4 : 534 > r ? "4+" : 535 > r ? 5 : 537 > r ? 6 : 538 > r ? 7 : 601 > r ? 8 : "8"));
			N && (N[1] += " " + (r += "number" == typeof r ? ".x" : /[.+]/.test(r) ? "" : "+"));
			"Safari" == A && (!z || 45 < parseInt(z)) && (z = r)
		}
		"Opera" == A && (r = /\bzbov|zvav$/.exec(C)) ? (A += " ", v.unshift("desktop mode"), "zvav" == r ? (A += "Mini", z = null) : A += "Mobile", C = C.replace(RegExp(" *" + r + "$"), "")) : "Safari" == A && /\bChrome\b/.exec(N && N[1]) && (v.unshift("desktop mode"), A = "Chrome Mobile", z = null, /\bOS X\b/.test(C) ?
			(U = "Apple", C = "iOS 4.3+") : C = null);
		z && 0 == z.indexOf(r = /[\d.]+$/.exec(C)) && -1 < u.indexOf("/" + r + "-") && (C = String(C.replace(r, "")).replace(/^ +| +$/g, ""));
		N && !/\b(?:Avant|Nook)\b/.test(A) && (/Browser|Lunascape|Maxthon/.test(A) || "Safari" != A && /^iOS/.test(C) && /\bSafari\b/.test(N[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(A) && N[1]) && (r = N[N.length - 1]) && v.push(r);
		v.length && (v = ["(" + v.join("; ") + ")"]);
		U && O && 0 > O.indexOf(U) && v.push("on " + U);
		O && v.push((/^on /.test(v[v.length -
			1]) ? "" : "on ") + O);
		if (C) {
			var da = (r = / ([\d.+]+)$/.exec(C)) && "/" == C.charAt(C.length - r[0].length - 1);
			C = {
				architecture: 32,
				family: r && !da ? C.replace(r[0], "") : C,
				version: r ? r[1] : null,
				toString: function() {
					var R = this.version;
					return this.family + (R && !da ? " " + R : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		}(r = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Z)) && !/\bi686\b/i.test(Z) ? (C && (C.architecture = 64, C.family = C.family.replace(RegExp(" *" + r), "")), A && (/\bWOW64\b/i.test(u) || X && /\w(?:86|32)$/.test(J.cpuClass || J.platform) && !/\bWin64; x64\b/i.test(u)) &&
			v.unshift("32-bit")) : C && /^OS X/.test(C.family) && "Chrome" == A && 39 <= parseFloat(z) && (C.architecture = 64);
		u || (u = null);
		B = {};
		B.description = u;
		B.layout = N && N[0];
		B.manufacturer = U;
		B.name = A;
		B.prerelease = aa;
		B.product = O;
		B.ua = u;
		B.version = A && z;
		B.os = C || {
			architecture: null,
			family: null,
			version: null,
			toString: function() {
				return "null"
			}
		};
		B.parse = l;
		B.toString = function() {
			return this.description || ""
		};
		B.version && v.unshift(z);
		B.name && v.unshift(A);
		C && A && (C != String(C).split(" ")[0] || C != A.split(" ")[0] && !O) && v.push(O ? "(" + C + ")" : "on " +
			C);
		v.length && (B.description = v.join(" "));
		return B
	}
	var k = {
			"function": !0,
			object: !0
		},
		m = k[typeof window] && window || this,
		q = k[typeof exports] && exports;
	k = k[typeof module] && module && !module.nodeType && module;
	var n = q && k && "object" == typeof global && global;
	!n || n.global !== n && n.window !== n && n.self !== n || (m = n);
	var p = Math.pow(2, 53) - 1,
		t = /\bOpera/;
	n = Object.prototype;
	var w = n.hasOwnProperty,
		y = n.toString,
		G = l();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (m.platform = G, define(function() {
			return G
		})) : q &&
		k ? d(G, function(u, D) {
			q[D] = u
		}) : m.platform = G
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
		}], e = 0; e < b.length; e++) {
		var a = document.createElement("meta");
		a.name = b[e].name;
		a.content = b[e].content;
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
	console.log(window.devicePixelRatio);
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
		case 2:
			switch (window.innerWidth) {
				case 568:
					320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
					break;
				case 667:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				case 808:
					414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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
				case 808:
					414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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

function isIOSLessThen13() {
	var b = platform.os,
		e = b.family.toLowerCase();
	b = parseFloat(b.version);
	return "ios" === e && 13 > b ? !0 : !1
}
$(document).ready(function() {
	platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
	platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
	s_bIsIphone = !1,
	s_iOffsetX, s_iOffsetY, s_bFocus = !0;
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
	if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone")) return s_bIsIphone = !0;
	for (; b.length;)
		if (navigator.platform === b.pop()) return !0;
	return s_bIsIphone = !1
}

function getParamValue(b) {
	for (var e = window.location.search.substring(1).split("&"), a = 0; a < e.length; a++) {
		var d = e[a].split("=");
		if (d[0] == b) return d[1]
	}
}

function isIpad() {
	var b = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
	return !b && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : b
}

function isMobile() {
	return isIpad() ? !0 : jQuery.browser.mobile
}

function getSize(b) {
	var e = b.toLowerCase(),
		a = window.document,
		d = a.documentElement;
	if (void 0 === window["inner" + b]) b = d["client" + b];
	else if (window["inner" + b] != d["client" + b]) {
		var c = a.createElement("body");
		c.id = "vpw-test-b";
		c.style.cssText = "overflow:scroll";
		var f = a.createElement("div");
		f.id = "vpw-test-d";
		f.style.cssText = "position:absolute;top:-1000px";
		f.innerHTML = "<style>@media(" + e + ":" + d["client" + b] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
		c.appendChild(f);
		d.insertBefore(c, a.head);
		b = 7 == f["offset" + b] ? d["client" + b] : window["inner" + b];
		d.removeChild(c)
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
		var b = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
		var e = getSize("Width");
		s_bFocus && _checkOrientation(e, b);
		var a = Math.min(b / CANVAS_HEIGHT, e / CANVAS_WIDTH),
			d = Math.round(CANVAS_WIDTH * a);
		a = Math.round(CANVAS_HEIGHT * a);
		if (a < b) {
			var c = b - a;
			a += c;
			d += CANVAS_WIDTH / CANVAS_HEIGHT * c
		} else d < e && (c = e - d, d += c, a += CANVAS_HEIGHT / CANVAS_WIDTH * c);
		c = b / 2 - a / 2;
		var f = e / 2 - d / 2,
			g = CANVAS_WIDTH / d;
		if (f * g < -EDGEBOARD_X ||
			c * g < -EDGEBOARD_Y) a = Math.min(b / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = Math.round(CANVAS_WIDTH * a), a = Math.round(CANVAS_HEIGHT * a), c = (b - a) / 2, f = (e - d) / 2, g = CANVAS_WIDTH / d;
		s_iOffsetX = -1 * f * g;
		s_iOffsetY = -1 * c * g;
		0 <= c && (s_iOffsetY = 0);
		0 <= f && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bIsIphone && s_oStage ? (canvas =
			document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * a, canvas.style.width = d + "px", canvas.style.height = a + "px", s_iScaleFactor = 2 * Math.min(d / CANVAS_WIDTH, a / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", a + "px")) : s_oStage && (s_oStage.canvas.width = d, s_oStage.canvas.height = a, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, a / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > c || (c = (b - a) / 2);
		$("#canvas").css("top", c + "px");
		$("#canvas").css("left", f + "px");
		fullscreenHandler()
	}
}

function _checkOrientation(b, e) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (b > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function createBitmap(b, e, a) {
	var d = new createjs.Bitmap(b),
		c = new createjs.Shape;
	e && a ? c.graphics.beginFill("#fff").drawRect(0, 0, e, a) : c.graphics.beginFill("#ff0").drawRect(0, 0, b.width, b.height);
	d.hitArea = c;
	return d
}

function createSprite(b, e, a, d, c, f) {
	b = null !== e ? new createjs.Sprite(b, e) : new createjs.Sprite(b);
	e = new createjs.Shape;
	e.graphics.beginFill("#000000").drawRect(-a, -d, c, f);
	b.hitArea = e;
	return b
}

function randomFloatBetween(b, e, a) {
	"undefined" === typeof a && (a = 2);
	return parseFloat(Math.min(b + Math.random() * (e - b), e).toFixed(a))
}

function rotateVector2D(b, e) {
	var a = e.getX() * Math.cos(b) + e.getY() * Math.sin(b),
		d = e.getX() * -Math.sin(b) + e.getY() * Math.cos(b);
	e.set(a, d)
}

function tweenVectorsOnX(b, e, a) {
	return b + a * (e - b)
}

function shuffle(b) {
	for (var e = b.length, a, d; 0 !== e;) d = Math.floor(Math.random() * e), --e, a = b[e], b[e] = b[d], b[d] = a;
	return b
}

function bubbleSort(b) {
	do {
		var e = !1;
		for (var a = 0; a < b.length - 1; a++) b[a] > b[a + 1] && (e = b[a], b[a] = b[a + 1], b[a + 1] = e, e = !0)
	} while (e)
}

function compare(b, e) {
	return b.index > e.index ? -1 : b.index < e.index ? 1 : 0
}

function easeLinear(b, e, a, d) {
	return a * b / d + e
}

function easeInQuad(b, e, a, d) {
	return a * (b /= d) * b + e
}

function easeInSine(b, e, a, d) {
	return -a * Math.cos(b / d * (Math.PI / 2)) + a + e
}

function easeInCubic(b, e, a, d) {
	return a * (b /= d) * b * b + e
}

function getTrajectoryPoint(b, e) {
	var a = new createjs.Point,
		d = (1 - b) * (1 - b),
		c = b * b;
	a.x = d * e.start.x + 2 * (1 - b) * b * e.traj.x + c * e.end.x;
	a.y = d * e.start.y + 2 * (1 - b) * b * e.traj.y + c * e.end.y;
	return a
}

function formatTime(b) {
	b /= 1E3;
	var e = Math.floor(b / 60);
	b = Math.floor(b - 60 * e);
	var a = "";
	a = 10 > e ? a + ("0" + e + ":") : a + (e + ":");
	return 10 > b ? a + ("0" + b) : a + b
}

function degreesToRadians(b) {
	return b * Math.PI / 180
}

function checkRectCollision(b, e) {
	var a = getBounds(b, .9);
	var d = getBounds(e, .98);
	return calculateIntersection(a, d)
}

function calculateIntersection(b, e) {
	var a, d, c, f;
	var g = b.x + (a = b.width / 2);
	var h = b.y + (d = b.height / 2);
	var l = e.x + (c = e.width / 2);
	var k = e.y + (f = e.height / 2);
	g = Math.abs(g - l) - (a + c);
	h = Math.abs(h - k) - (d + f);
	return 0 > g && 0 > h ? (g = Math.min(Math.min(b.width, e.width), -g), h = Math.min(Math.min(b.height, e.height), -h), {
		x: Math.max(b.x, e.x),
		y: Math.max(b.y, e.y),
		width: g,
		height: h,
		rect1: b,
		rect2: e
	}) : null
}

function getBounds(b, e) {
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
			c = d.length,
			f;
		for (f = 0; f < c; f++) {
			var g = getBounds(d[f], 1);
			g.x < a.x && (a.x = g.x);
			g.y < a.y && (a.y = g.y);
			g.x + g.width > a.x2 && (a.x2 = g.x + g.width);
			g.y + g.height > a.y2 && (a.y2 = g.y + g.height)
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
			c =
				b.sourceRect || b.image;
			f = c.width * e;
			var h = c.height * e
		} else if (b instanceof createjs.Sprite)
			if (b.spriteSheet._frames && b.spriteSheet._frames[b.currentFrame] && b.spriteSheet._frames[b.currentFrame].image) {
				c = b.spriteSheet.getFrame(b.currentFrame);
				f = c.rect.width;
				h = c.rect.height;
				d = c.regX;
				var l = c.regY
			} else a.x = b.x || 0, a.y = b.y || 0;
		else a.x = b.x || 0, a.y = b.y || 0;
		d = d || 0;
		f = f || 0;
		l = l || 0;
		h = h || 0;
		a.regX = d;
		a.regY = l;
		c = b.localToGlobal(0 - d, 0 - l);
		g = b.localToGlobal(f - d, h - l);
		f = b.localToGlobal(f - d, 0 - l);
		d = b.localToGlobal(0 - d, h - l);
		a.x =
			Math.min(Math.min(Math.min(c.x, g.x), f.x), d.x);
		a.y = Math.min(Math.min(Math.min(c.y, g.y), f.y), d.y);
		a.width = Math.max(Math.max(Math.max(c.x, g.x), f.x), d.x) - a.x;
		a.height = Math.max(Math.max(Math.max(c.y, g.y), f.y), d.y) - a.y
	}
	return a
}

function NoClickDelay(b) {
	this.element = b;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(b) {
	for (var e = b.length, a, d; 0 < e;) d = Math.floor(Math.random() * e), e--, a = b[e], b[e] = b[d], b[d] = a;
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
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", !0, !0);
			b.dispatchEvent(e)
		}
	}
};
(function() {
	function b(a) {
		var d = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		a = a || window.event;
		a.type in d ? document.body.className = d[a.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
	}
	var e = "hidden";
	e in document ? document.addEventListener("visibilitychange", b) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange",
		b) : (e = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", b) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", b) : "onfocusin" in document ? document.onfocusin = document.onfocusout = b : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = b
})();

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function fullscreenHandler() {
	ENABLE_FULLSCREEN && !1 !== screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut();
	null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});

function playSound(b, e, a) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[b].play(), s_aSounds[b].volume(e), s_aSounds[b].loop(a), s_aSounds[b]) : null
}

function stopSound(b) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].stop()
}

function setVolume(b, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].volume(e)
}

function setMute(b, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].mute(e)
}

function fadeSound(b, e, a, d) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].fade(e, a, d)
}

function CSpriteLibrary() {
	var b = {},
		e, a, d, c, f, g;
	this.init = function(h, l, k) {
		e = {};
		d = a = 0;
		c = h;
		f = l;
		g = k
	};
	this.addSprite = function(h, l) {
		if (!b.hasOwnProperty(h)) {
			var k = new Image;
			b[h] = e[h] = {
				szPath: l,
				oSprite: k,
				bLoaded: !1
			};
			a++
		}
	};
	this.getSprite = function(h) {
		return b.hasOwnProperty(h) ? b[h].oSprite : null
	};
	this._onSpritesLoaded = function() {
		a = 0;
		f.call(g)
	};
	this._onSpriteLoaded = function() {
		c.call(g);
		++d === a && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var h in e) e[h].oSprite.oSpriteLibrary = this, e[h].oSprite.szKey =
			h, e[h].oSprite.onload = function() {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, e[h].oSprite.onerror = function(l) {
				var k = l.currentTarget;
				setTimeout(function() {
					e[k.szKey].oSprite.src = e[k.szKey].szPath
				}, 500)
			}, e[h].oSprite.src = e[h].szPath
	};
	this.setLoaded = function(h) {
		b[h].bLoaded = !0
	};
	this.isLoaded = function(h) {
		return b[h].bLoaded
	};
	this.getNumSprites = function() {
		return a
	}
}
var CANVAS_WIDTH = 640,
	CANVAS_HEIGHT = 960,
	EDGEBOARD_X = 80,
	EDGEBOARD_Y = 80,
	GAME_NAME = "miner_block",
	FONT = "rocks__gregular",
	FONT2 = "suplexmentary_comic_ncregular",
	SOUNDTRACK_VOLUME_IN_GAME = 1,
	NUM_LEVELS = 10,
	FPS_TIME = 1E3 / 24,
	DISABLE_SOUND_MOBILE = !1,
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	START_X_GRID = 100,
	START_Y_GRID = 261,
	CELL_WIDTH = 74,
	CELL_HEIGHT = 74,
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
	ON_REFUSE =
	5,
	ON_CONFIRM = 6,
	EASY_MODE = 0,
	NORMAL_MODE = 1,
	HARD_MODE = 2,
	ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;

function CPreloader() {
	var b, e, a, d, c, f, g, h, l, k;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
		s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
		s_oSpriteLibrary.loadSprites();
		k = new createjs.Container;
		s_oStage.addChild(k)
	};
	this.unload = function() {
		k.removeAllChildren();
		l.unload()
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var m = new createjs.Shape;
		m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		k.addChild(m);
		m = s_oSpriteLibrary.getSprite("200x200");
		g = createBitmap(m);
		g.regX = .5 * m.width;
		g.regY = .5 * m.height;
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT / 2 - 180;
		k.addChild(g);
		h = new createjs.Shape;
		h.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
		k.addChild(h);
		g.mask = h;
		m = s_oSpriteLibrary.getSprite("progress_bar");
		d = createBitmap(m);
		d.x = CANVAS_WIDTH / 2 - m.width / 2;
		d.y = CANVAS_HEIGHT / 2 + 50;
		k.addChild(d);
		b = m.width;
		e = m.height;
		c = new createjs.Shape;
		c.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, e);
		k.addChild(c);
		d.mask = c;
		a = new createjs.Text("", "30px " + FONT, "#fff");
		a.x = CANVAS_WIDTH / 2;
		a.y = CANVAS_HEIGHT / 2 + 100;
		a.textBaseline = "alphabetic";
		a.textAlign = "center";
		k.addChild(a);
		m = s_oSpriteLibrary.getSprite("but_start");
		l = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, m, TEXT_PRELOADER_CONTINUE,
			"Arial", "#000", 50, k);
		l.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
		l.setVisible(!1);
		f = new createjs.Shape;
		f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		k.addChild(f);
		createjs.Tween.get(f).to({
			alpha: 0
		}, 500).call(function() {
			createjs.Tween.removeTweens(f);
			k.removeChild(f)
		})
	};
	this._onButStartRelease = function() {
		s_oMain._onRemovePreloader()
	};
	this.refreshLoader = function(m) {
		a.text = m + "%";
		100 === m && (s_oMain._onRemovePreloader(), a.visible = !1, d.visible = !1);
		c.graphics.clear();
		m = Math.floor(m * b / 100);
		c.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, m, e)
	};
	this._init()
}

function CMain(b) {
	var e, a = 0,
		d = 0,
		c = STATE_LOADING,
		f, g;
	this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		createjs.Touch.enable(s_oStage, !0);
		s_bMobile = isMobile();
		!1 === s_bMobile && s_oStage.enableMouseOver(20);
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.ticker = 30;
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		s_oLocalStorage =
			new CLocalStorage(GAME_NAME);
		seekAndDestroy() ? f = new CPreloader : window.location.href = "https://www.atterolabs.com"
	};
	this.preloaderReady = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		this._loadImages();
		e = !0
	};
	this.soundLoaded = function() {
		a++;
		f.refreshLoader(Math.floor(a / d * 100))
	};
	this._initSounds = function() {
		Howler.mute(!s_bAudioActive);
		s_aSoundsInfo = [];
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "cart",
			loop: !1,
			volume: 1,
			ingamename: "cart"
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
			filename: "cart_exit",
			loop: !0,
			volume: 1,
			ingamename: "cart_exit"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "stage_clear",
			loop: !1,
			volume: 1,
			ingamename: "stage_clear"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		d += s_aSoundsInfo.length;
		s_aSounds = [];
		for (var l = 0; l < s_aSoundsInfo.length; l++) this.tryToLoadSound(s_aSoundsInfo[l], !1)
	};
	this.tryToLoadSound = function(l,
		k) {
		setTimeout(function() {
			s_aSounds[l.ingamename] = new Howl({
				src: [l.path + l.filename + ".mp3"],
				autoplay: !1,
				preload: !0,
				loop: l.loop,
				volume: l.volume,
				onload: s_oMain.soundLoaded,
				onloaderror: function(m, q) {
					for (var n = 0; n < s_aSoundsInfo.length; n++)
						if (m === s_aSounds[s_aSoundsInfo[n].ingamename]._sounds[0]._id) {
							s_oMain.tryToLoadSound(s_aSoundsInfo[n], !0);
							break
						}
				},
				onplayerror: function(m) {
					for (var q = 0; q < s_aSoundsInfo.length; q++)
						if (m === s_aSounds[s_aSoundsInfo[q].ingamename]._sounds[0]._id) {
							s_aSounds[s_aSoundsInfo[q].ingamename].once("unlock",
								function() {
									s_aSounds[s_aSoundsInfo[q].ingamename].play();
									"soundtrack" === s_aSoundsInfo[q].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
								});
							break
						}
				}
			})
		}, k ? 200 : 0)
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("but_play_small", "./sprites/but_play_small.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("msg_box_2",
			"./sprites/msg_box_2.png");
		s_oSpriteLibrary.addSprite("level_sprite", "./sprites/LevelSprite.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
		s_oSpriteLibrary.addSprite("balloon_1", "./sprites/balloon_1.png");
		s_oSpriteLibrary.addSprite("balloon_2", "./sprites/balloon_2.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("but_confirm",
			"./sprites/but_confirm.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("player", "./sprites/player.png");
		s_oSpriteLibrary.addSprite("horizzontal_3", "./sprites/horizzontal_3.png");
		s_oSpriteLibrary.addSprite("vertical_3", "./sprites/vertical_3.png");
		s_oSpriteLibrary.addSprite("horizzontal_2", "./sprites/horizzontal_2.png");
		s_oSpriteLibrary.addSprite("vertical_2", "./sprites/vertical_2.png");
		s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
		s_oSpriteLibrary.addSprite("star_filled", "./sprites/star_filled.png");
		s_oSpriteLibrary.addSprite("star_empty", "./sprites/star_empty.png");
		d += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		a++;
		f.refreshLoader(Math.floor(a / d * 100))
	};
	this._onAllImagesLoaded =
		function() {};
	this._onRemovePreloader = function() {
		f.unload();
		s_oSoundTrack = playSound("soundtrack", 1, !0);
		this.gotoMenu()
	};
	this.gotoMenu = function() {
		new CMenu;
		c = STATE_MENU
	};
	this.gotoLevelMenu = function() {
		new CLevelMenu;
		c = STATE_MENU
	};
	this.gotoGame = function(l, k) {
		g = new CGame(h, l, k);
		c = STATE_GAME;
		$(s_oMain).trigger("game_start")
	};
	this.gotoHelp = function() {
		new CHelpPanel(s_oSpriteLibrary.getSprite("msg_box_2"));
		c = STATE_HELP
	};
	this.stopUpdate = function() {
		e = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display",
			"block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		e = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function(l) {
		if (!1 !== e) {
			var k = (new Date).getTime();
			s_iTimeElaps = k - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = k;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			c === STATE_GAME &&
				g.update();
			s_oStage.update(l)
		}
	};
	s_oMain = this;
	var h = b;
	ENABLE_CHECK_ORIENTATION = b.check_orientation;
	ENABLE_FULLSCREEN = b.fullscreen;
	s_bAudioActive = b.audio_enable_on_startup;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_iLastLevel = 1,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
	s_oCanvas, s_bFullscreen = !1,
	s_aSounds, s_aSoundsInfo;

function CTextButton(b, e, a, d, c, f, g, h) {
	var l, k, m, q, n, p, t;
	this._init = function(w, y, G, u, D, H, B, v) {
		l = [];
		k = [];
		var J = createBitmap(G),
			z = Math.ceil(B / 20);
		n = new createjs.Text(u, "bold " + B + "px " + D, "#000000");
		n.textAlign = "center";
		n.textBaseline = "alphabetic";
		var x = n.getBounds();
		n.x = G.width / 2 + z;
		n.y = Math.floor(G.height / 2) + x.height / 3 + z;
		q = new createjs.Text(u, "bold " + B + "px " + D, H);
		q.textAlign = "center";
		q.textBaseline = "alphabetic";
		x = q.getBounds();
		q.x = G.width / 2;
		q.y = Math.floor(G.height / 2) + x.height / 3;
		m = new createjs.Container;
		m.x = w;
		m.y = y;
		m.regX = G.width / 2;
		m.regY = G.height / 2;
		m.addChild(J, n, q);
		s_bMobile || (m.cursor = "pointer");
		v.addChild(m);
		this._initListener()
	};
	this.unload = function() {
		m.off("mousedown", p);
		m.off("pressup", t);
		h.removeChild(m)
	};
	this.setVisible = function(w) {
		m.visible = w
	};
	this._initListener = function() {
		oParent = this;
		p = m.on("mousedown", this.buttonDown);
		t = m.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(w, y, G) {
		l[w] = y;
		k[w] = G
	};
	this.buttonRelease = function() {
		m.scaleX = 1;
		m.scaleY = 1;
		l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		m.scaleX = .9;
		m.scaleY = .9;
		l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
	};
	this.setTextPosition = function(w) {
		q.y = w;
		n.y = w + 2
	};
	this.setPosition = function(w, y) {
		m.x = w;
		m.y = y
	};
	this.setX = function(w) {
		m.x = w
	};
	this.setY = function(w) {
		m.y = w
	};
	this.getButtonImage = function() {
		return m
	};
	this.getX = function() {
		return m.x
	};
	this.getY = function() {
		return m.y
	};
	this._init(b, e, a, d, c, f, g, h);
	return this
}

function CToggle(b, e, a, d, c) {
	var f, g, h, l = [],
		k, m, q;
	this._init = function(n, p, t, w) {
		g = [];
		h = [];
		var y = new createjs.SpriteSheet({
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
		f = w;
		k = createSprite(y, "state_" + f, t.width / 2 / 2, t.height / 2, t.width / 2, t.height);
		k.x = n;
		k.y = p;
		k.stop();
		s_bMobile || (k.cursor = "pointer");
		c.addChild(k);
		this._initListener()
	};
	this.unload = function() {
		k.off("mousedown", m);
		k.off("pressup", q);
		c.removeChild(k)
	};
	this._initListener =
		function() {
			m = k.on("mousedown", this.buttonDown);
			q = k.on("pressup", this.buttonRelease)
		};
	this.addEventListener = function(n, p, t) {
		g[n] = p;
		h[n] = t
	};
	this.addEventListenerWithParams = function(n, p, t, w) {
		g[n] = p;
		h[n] = t;
		l = w
	};
	this.setActive = function(n) {
		f = n;
		k.gotoAndStop("state_" + f)
	};
	this.buttonRelease = function() {
		k.scaleX = 1;
		k.scaleY = 1;
		playSound("click", 1, !1);
		f = !f;
		k.gotoAndStop("state_" + f);
		g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(h[ON_MOUSE_UP], l)
	};
	this.buttonDown = function() {
		k.scaleX = .9;
		k.scaleY = .9;
		g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN],
			l)
	};
	this.setPosition = function(n, p) {
		k.x = n;
		k.y = p
	};
	this.setVisible = function(n) {
		k.visible = n
	};
	this._init(b, e, a, d)
}

function CGfxButton(b, e, a, d) {
	var c, f, g, h = [],
		l, k, m, q;
	this._init = function(n, p, t, w) {
		c = 1;
		f = [];
		g = [];
		l = createBitmap(t);
		l.x = n;
		l.y = p;
		l.regX = t.width / 2;
		l.regY = t.height / 2;
		s_bMobile || (l.cursor = "pointer");
		w.addChild(l);
		this._initListener()
	};
	this.unload = function() {
		createjs.Tween.removeTweens(l);
		l.off("mousedown", k);
		l.off("pressup", m);
		d.removeChild(l)
	};
	this.setVisible = function(n) {
		l.visible = n
	};
	this._initListener = function() {
		k = l.on("mousedown", this.buttonDown);
		m = l.on("pressup", this.buttonRelease)
	};
	this.addEventListener =
		function(n, p, t) {
			f[n] = p;
			g[n] = t
		};
	this.addEventListenerWithParams = function(n, p, t, w) {
		f[n] = p;
		g[n] = t;
		h = w
	};
	this.buttonRelease = function() {
		q && (l.scaleX = c, l.scaleY = c);
		playSound("click", 1, !1);
		f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(g[ON_MOUSE_UP], h)
	};
	this.buttonDown = function() {
		q && (l.scaleX = .9 * c, l.scaleY = .9 * c);
		f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], h)
	};
	this.setScale = function(n) {
		c = n;
		l.scaleX = n;
		l.scaleY = n
	};
	this.setPosition = function(n, p) {
		l.x = n;
		l.y = p
	};
	this.setX = function(n) {
		l.x = n
	};
	this.setY = function(n) {
		l.y =
			n
	};
	this.getX = function() {
		return l.x
	};
	this.getY = function() {
		return l.y
	};
	this.getButtonImage = function() {
		return l
	};
	this.pulseAnimation = function() {
		q = createjs.Tween.get(l, {
			loop: -1
		}).to({
			scaleX: .9 * c,
			scaleY: .9 * c
		}, 850, createjs.Ease.quadOut).to({
			scaleX: c,
			scaleY: c
		}, 650, createjs.Ease.quadIn)
	};
	this._init(b, e, a, d);
	return this
}

function CMenu() {
	var b, e, a, d, c, f, g, h, l, k, m, q, n = null,
		p = null;
	this._init = function() {
		g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(g);
		var t = s_oSpriteLibrary.getSprite("but_play");
		h = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 225, t, s_oStage);
		h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - t.height / 2 - 10, f = t.height / 2 + 10, k = new CToggle(c, f, t, s_bAudioActive, s_oStage),
			k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		t = s_oSpriteLibrary.getSprite("but_credits");
		a = t.height / 2 + 10;
		d = t.height / 2 + 10;
		m = new CGfxButton(a, d, t, s_oStage);
		m.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
		t = window.document;
		var w = t.documentElement;
		n = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
		p = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (n = !1);
		n && screenfull.isEnabled &&
			(t = s_oSpriteLibrary.getSprite("but_fullscreen"), b = a + t.width / 2 + 10, e = t.height / 2 + 10, q = new CToggle(b, e, t, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		l = new createjs.Shape;
		l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(l);
		createjs.Tween.get(l).to({
			alpha: 0
		}, 1E3).call(function() {
			l.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		h.unload();
		h = null;
		l.visible = !1;
		if (!1 === DISABLE_SOUND_MOBILE ||
			!1 === s_bMobile) k.unload(), k = null;
		n && screenfull.isEnabled && q.unload();
		m.unload();
		s_oStage.removeAllChildren();
		s_oMenu = null
	};
	this.refreshButtonPos = function(t, w) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(c - t, w + f);
		n && screenfull.isEnabled && q.setPosition(b + t, e + w);
		m.setPosition(a + t, d + w)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onButPlayRelease = function() {
		this.unload();
		s_oMain.gotoLevelMenu();
		$(s_oMain).trigger("start_session")
	};
	this._onButInfoRelease =
		function() {
			new CCreditsPanel
		};
	this.resetFullscreenBut = function() {
		n && screenfull.isEnabled && q.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? p.call(window.document) : n.call(window.document.documentElement);
		sizeHandler()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(b, e, a) {
	var d, c, f, g, h, l, k = 0,
		m = 0,
		q, n, p = null,
		t = !1,
		w = !1,
		y = !1,
		G = !1,
		u = !1,
		D = !1,
		H, B, v = [],
		J = [],
		z = 0;
	this._init = function() {
		$(s_oMain).trigger("start_level", e);
		var x = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		s_oStage.addChild(x);
		H = new CLevel;
		B = H.getLevel(e);
		q = H.getGoalInLevel(e);
		v = [];
		for (x = 0; x < NUM_ROWS; x++) {
			v[x] = [];
			for (var E = 0; E < NUM_COLS; E++) v[x][E] = 0
		}
		for (z = 0; z < B.length; z++) J.push(new CBlocks(B[z].obj_x, B[z].obj_y, B[z].obj_type, z)), this._updateGrid(B[z].obj_x, B[z].obj_y, B[z].obj_type);
		n = new CInterface(q, e + 1, m)
	};
	this._updateGrid = function(x, E, F) {
		switch (F) {
			case "player":
			case "horizzontal_2":
				v[x][E] = 1;
				v[x + 1][E] = 1;
				break;
			case "horizzontal_3":
				v[x][E] = 1;
				v[x + 1][E] = 1;
				v[x + 2][E] = 1;
				break;
			case "vertical_2":
				v[x][E] = 1;
				v[x][E + 1] = 1;
				break;
			case "vertical_3":
				v[x][E] = 1, v[x][E + 1] = 1, v[x][E + 2] = 1
		}
	};
	this._unloadFromGrid = function(x, E, F) {
		switch (J[F].getType()) {
			case "player":
			case "horizzontal_2":
				v[x][E] = 0;
				v[x + 1][E] = 0;
				break;
			case "horizzontal_3":
				v[x][E] = 0;
				v[x + 1][E] = 0;
				v[x + 2][E] = 0;
				break;
			case "vertical_2":
				v[x][E] =
					0;
				v[x][E + 1] = 0;
				break;
			case "vertical_3":
				v[x][E] = 0, v[x][E + 1] = 0, v[x][E + 2] = 0
		}
	};
	this.onFormContainerClick = function(x, E, F) {
		f = E.x;
		g = E.y;
		var L = Math.round((E.x - START_X_GRID) / CELL_WIDTH),
			I = Math.round((E.y - START_Y_GRID) / CELL_HEIGHT);
		h = E.x;
		l = E.y;
		d = x.stageX / s_iScaleFactor - f;
		c = x.stageY / s_iScaleFactor - g;
		this._unloadFromGrid(L, I, F)
	};
	this.dragForm = function(x, E, F) {
		var L = x.stageX / s_iScaleFactor;
		x = x.stageY / s_iScaleFactor;
		var I = Math.round((L - d - START_X_GRID) / CELL_WIDTH),
			K = Math.round((x - c - START_Y_GRID) / CELL_HEIGHT);
		!1 !==
			DISABLE_SOUND_MOBILE && !1 !== s_bMobile || D || (playSound("cart", .5, !0), D = !0);
		switch (E) {
			case "player":
			case "horizzontal_2":
				L - d > START_X_GRID && L - d < START_X_GRID + (4 * CELL_WIDTH + 10) && (h <= L - d ? 0 === v[I + 1][K] && !1 === t ? J[F].setPos(L - d, J[F].getPosY()) : (t = !0, w = !1, fadeSound("cart", .5, 0, 100)) : 0 === v[I][K] && !1 === w ? J[F].setPos(L - d, J[F].getPosY()) : (w = !0, t = !1, fadeSound("cart", .5, 0, 100)));
				break;
			case "horizzontal_3":
				L - d > START_X_GRID && L - d < START_X_GRID + (3 * CELL_WIDTH + 10) && (h <= L - d ? 0 === v[I + 2][K] && !1 === t ? J[F].setPos(L - d, J[F].getPosY()) :
					(t = !0, w = !1, fadeSound("cart", .5, 0, 100)) : 0 === v[I][K] && !1 === w ? J[F].setPos(L - d, J[F].getPosY()) : (w = !0, t = !1, fadeSound("cart", .5, 0, 100)));
				break;
			case "vertical_2":
				x - c > START_Y_GRID && x - c < START_Y_GRID + (4 * CELL_HEIGHT + 10) && (l <= x - c ? 0 === v[I][K + 1] && !1 === y ? J[F].setPos(J[F].getPosX(), x - c) : (y = !0, G = !1, fadeSound("cart", .5, 0, 100)) : 0 === v[I][K] && !1 === G ? J[F].setPos(J[F].getPosX(), x - c) : (G = !0, y = !1, fadeSound("cart", .5, 0, 100)));
				break;
			case "vertical_3":
				x - c > START_Y_GRID && x - c < START_Y_GRID + (3 * CELL_HEIGHT + 10) && (l <= x - c ? 0 === v[I][K +
					2
				] && !1 === y ? J[F].setPos(J[F].getPosX(), x - c) : (y = !0, G = !1, fadeSound("cart", .5, 0, 100)) : 0 === v[I][K] && !1 === G ? J[F].setPos(J[F].getPosX(), x - c) : (G = !0, y = !1, fadeSound("cart", .5, 0, 100)))
		}
	};
	this.releaseForm = function(x, E, F, L) {
		G = y = w = t = !1;
		var I = J[L].getPosX(),
			K = J[L].getPosY(),
			W = 0,
			M = 0;
		x = Math.round((I - START_X_GRID) / CELL_WIDTH);
		E = Math.round((K - START_Y_GRID) / CELL_HEIGHT);
		switch (F) {
			case "player":
			case "horizzontal_2":
				W = 2;
				break;
			case "horizzontal_3":
				W = 3;
				break;
			case "vertical_2":
				M = 2;
				break;
			case "vertical_3":
				M = 3
		}
		if (!0 === this.checkPieceIfFitInPos(x,
				E, W, M)) {
			if (I = "vertical_2" === F || "vertical_3" === F ? START_X_GRID + CELL_WIDTH * x - 12 : START_X_GRID + CELL_WIDTH * x - 5, K = START_Y_GRID + CELL_HEIGHT * E - 5, J[L].placeInGrid(I, K), I = Math.round((l - START_Y_GRID) / CELL_HEIGHT), Math.round((h - START_X_GRID) / CELL_WIDTH) !== x || I !== E) k++, m = k <= q ? m + 5 * (e + 1) : m - 6 * e, this._refreshScore()
		} else I = J[L].getOldX(), K = J[L].getOldY(), x = Math.round((I - START_X_GRID) / CELL_WIDTH), E = Math.round((K - START_Y_GRID) / CELL_HEIGHT), J[L].goBack(I, K);
		this._updateGrid(x, E, F);
		"player" === F && (I = J[L].getOldX(), x = Math.round((I -
			START_X_GRID) / CELL_WIDTH), 4 === x && (J[L].moveOut(), playSound("cart_exit", 1, !1)));
		fadeSound("cart", .5, 0, 100)
	};
	this.checkPieceIfFitInPos = function(x, E, F, L) {
		var I = !0;
		if (0 < F)
			for (var K = 0; K < F; K++) {
				if (0 !== v[K + x][E]) {
					I = !1;
					break
				}
			} else if (0 < L)
				for (K = 0; K < L; K++)
					if (0 !== v[x][K + E]) {
						I = !1;
						break
					} return I
	};
	this._refreshScore = function() {
		n.refreshMoves(k, q);
		n.refreshScore(m)
	};
	this.unload = function() {
		n.unload();
		null !== p && p.unload();
		createjs.Tween.removeAllTweens();
		s_oStage.removeAllChildren()
	};
	this.onExit = function() {
		this.unload();
		s_oMain.gotoMenu();
		e < NUM_LEVELS - 1 && $(s_oMain).trigger("end_level", e);
		$(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("save_score", a);
		setVolume("soundtrack", 1)
	};
	this.onExitEndPanel = function() {
		this.unload();
		s_oMain.gotoMenu();
		$(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("save_score", a);
		setVolume("soundtrack", 1)
	};
	this.onRestart = function() {
		for (var x = 0; x < NUM_ROWS; x++)
			for (var E = 0; E < NUM_COLS; E++) v[x][E] = 0;
		for (var F =
				0; F < z; F++) x = "vertical_2" === B[F].obj_type || "vertical_3" === B[F].obj_type ? START_X_GRID + CELL_WIDTH * B[F].obj_x - 12 : START_X_GRID + CELL_WIDTH * B[F].obj_x - 5, E = START_Y_GRID + CELL_HEIGHT * B[F].obj_y - 5, J[F].placeInGrid(x, E), this._updateGrid(B[F].obj_x, B[F].obj_y, B[F].obj_type);
		m = k = 0;
		this._refreshScore();
		$(s_oMain).trigger("restart_level", e);
		$(s_oMain).trigger("show_interlevel_ad")
	};
	this.onNextLevel = function(x) {
		e + 1 === NUM_LEVELS ? (u = !0, this.gameOver()) : (this.unload(), s_oMain.gotoGame(e + 1, x + a));
		setVolume("soundtrack",
			1)
	};
	this.gameOver = function() {
		$(s_oMain).trigger("save_score", m);
		if (u) $(s_oMain).trigger("end_level", e), p = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box_2")), p.show(e + 1, m + a);
		else {
			$(s_oMain).trigger("end_level", e);
			p = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box_2"));
			p.nextLevel(k, e + 1, q, m);
			e + 2 > s_iLastLevel && (s_iLastLevel = e + 2);
			m > s_aScore[e] && (s_aScore[e] = m);
			var x;
			k >= q + 5 ? x = 1 : k >= q + 2 ? x = 2 : k < q + 2 && (x = 3);
			x > s_aStars[e] && (s_aStars[e] = x);
			s_oLocalStorage.saveData()
		}
	};
	this.update = function() {};
	s_oGame = this;
	this._init()
}
var s_oGame;

function CInterface(b, e, a) {
	var d, c, f, g, h, l, k, m, q, n, p, t, w = null,
		y = null,
		G, u, D, H = CANVAS_WIDTH / 2 + 50,
		B = CANVAS_HEIGHT - 100,
		v, J, z = CANVAS_WIDTH / 2 - 290,
		x = CANVAS_HEIGHT - 100,
		E, F, L = CANVAS_WIDTH / 2 - 290;
	this._init = function(I, K, W) {
		var M = s_oSpriteLibrary.getSprite("but_exit");
		k = CANVAS_WIDTH - M.height / 2 - 10;
		m = M.height / 2 + 10;
		n = new CGfxButton(k, m, M, s_oStage);
		n.addEventListener(ON_MOUSE_UP, this._onExit, this);
		M = s_oSpriteLibrary.getSprite("but_restart");
		d = k - M.width;
		c = M.height / 2 + 10;
		p = new CGfxButton(d, c, M, s_oStage);
		p.addEventListener(ON_MOUSE_UP,
			this._onRestart, this);
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (M = s_oSpriteLibrary.getSprite("audio_icon"), h = d - M.width / 2, l = M.height / 2 + 10, q = new CToggle(h, l, M, s_bAudioActive, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), f = h - M.width / 2) : f = d - M.width / 2;
		g = M.height / 2 + 10;
		M = window.document;
		var T = M.documentElement;
		w = T.requestFullscreen || T.mozRequestFullScreen || T.webkitRequestFullScreen || T.msRequestFullscreen;
		y = M.exitFullscreen || M.mozCancelFullScreen || M.webkitExitFullscreen || M.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (w = !1);
		w && screenfull.isEnabled && (M = s_oSpriteLibrary.getSprite("but_fullscreen"), t = new CToggle(f, g, M, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		D = new createjs.Text(TEXT_MOVES + ": 0/" + I, " 40px " + FONT, "#000000");
		D.x = H;
		D.y = B;
		D.textAlign = "left";
		D.textBaseline = "alphabetic";
		D.lineWidth = 650;
		D.outline = 8;
		s_oStage.addChild(D);
		u = new createjs.Text(TEXT_MOVES + ": 0/" + I, " 40px " + FONT, "#ffc600");
		u.x = H;
		u.y = B;
		u.textAlign = "left";
		u.textBaseline = "alphabetic";
		u.lineWidth = 650;
		s_oStage.addChild(u);
		J = new createjs.Text(TEXT_SCORE + ": " + W, " 40px " + FONT, "#000000");
		J.x = z;
		J.y = x;
		J.textAlign = "left";
		J.textBaseline = "alphabetic";
		J.lineWidth = 650;
		J.outline = 8;
		s_oStage.addChild(J);
		v = new createjs.Text(TEXT_SCORE + ": " + W, " 40px " + FONT, "#ffc600");
		v.x = z;
		v.y = x;
		v.textAlign = "left";
		v.textBaseline = "alphabetic";
		v.lineWidth = 650;
		s_oStage.addChild(v);
		E = new createjs.Text(TEXT_LEVEL + ": " + K, " 30px " + FONT, "#000000");
		E.x = L;
		E.y = 40;
		E.textAlign = "left";
		E.textBaseline = "alphabetic";
		E.lineWidth =
			650;
		E.outline = 8;
		s_oStage.addChild(E);
		F = new createjs.Text(TEXT_LEVEL + ": " + K, " 30px " + FONT, "#ffc600");
		F.x = L;
		F.y = 40;
		F.textAlign = "left";
		F.textBaseline = "alphabetic";
		F.lineWidth = 650;
		s_oStage.addChild(F);
		M = s_oSpriteLibrary.getSprite("msg_box");
		G = new CAreYouSurePanel(M, s_oStage);
		G.addEventListener(ON_CONFIRM, this._onConfirmExit, this);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshMoves = function(I, K) {
		D.text = TEXT_MOVES + ": " + I + "/" + K;
		u.text = TEXT_MOVES + ": " + I + "/" + K
	};
	this.refreshScore = function(I) {
		J.text =
			TEXT_SCORE + ": " + I;
		v.text = TEXT_SCORE + ": " + I
	};
	this.unload = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
		w && screenfull.isEnabled && t.unload();
		n.unload();
		p.unload();
		G.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function(I, K) {
		n.setPosition(k - I, K + m);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(h - I, K + l);
		w && screenfull.isEnabled && t.setPosition(f - I, g + K);
		p.setPosition(d - I, K + c);
		D.x = H - I;
		u.x = H - I;
		J.x = z + I;
		v.x = z + I;
		E.x = L + I;
		F.x = L + I;
		E.y = 40 + K;
		F.y = 40 + K
	};
	this._onAudioToggle =
		function() {
			Howler.mute(s_bAudioActive);
			s_bAudioActive = !s_bAudioActive
		};
	this._onExit = function() {
		G.show()
	};
	this._onConfirmExit = function() {
		s_oGame.onExit()
	};
	this._onRestart = function() {
		s_oGame.onRestart()
	};
	this.resetFullscreenBut = function() {
		w && screenfull.isEnabled && t.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? y.call(window.document) : w.call(window.document.documentElement);
		sizeHandler()
	};
	s_oInterface = this;
	this._init(b, e, a);
	return this
}
var s_oInterface = null;

function CEndPanel(b) {
	var e, a, d, c, f, g, h, l;
	this._init = function(k) {
		a = createBitmap(k);
		a.x = 0;
		a.y = 0;
		d = new createjs.Container;
		d.alpha = 0;
		d.visible = !1;
		d.on("mousedown", function() {});
		f = createBitmap(s_oSpriteLibrary.getSprite("star_filled"));
		f.x = CANVAS_WIDTH / 2;
		f.y = CANVAS_HEIGHT / 2 - 60;
		f.regX = STAR_WIDTH / 2;
		f.regY = STAR_HEIGHT / 2;
		f.scaleX = .1;
		f.scaleY = .1;
		f.visible = !1;
		g = createBitmap(s_oSpriteLibrary.getSprite("star_filled"));
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT / 2 - 60;
		g.regX = STAR_WIDTH / 2;
		g.regY = STAR_HEIGHT / 2;
		g.scaleX =
			.1;
		g.scaleY = .1;
		g.visible = !1;
		h = createBitmap(s_oSpriteLibrary.getSprite("star_filled"));
		h.x = CANVAS_WIDTH / 2;
		h.y = CANVAS_HEIGHT / 2 - 60;
		h.regX = STAR_WIDTH / 2;
		h.regY = STAR_HEIGHT / 2;
		h.scaleX = .1;
		h.scaleY = .1;
		h.visible = !1;
		d.addChild(a, c, f, g, h);
		s_oStage.addChild(d)
	};
	this.unload = function() {
		d.removeAllEventListeners()
	};
	this.show = function(k, m) {
		e = m;
		playSound("stage_clear", 1, !1);
		setVolume("soundtrack", 0);
		var q = sprintf(TEXT_GAMEOVER, m);
		c = new CComic(CANVAS_WIDTH / 2 - 10, CANVAS_HEIGHT / 2 - 60, d, q, 2);
		d.visible = !0;
		q = s_oSpriteLibrary.getSprite("but_restart");
		l = new CGfxButton(CANVAS_WIDTH / 2 - 40, CANVAS_HEIGHT / 2 + 110, q, d);
		var n = this;
		createjs.Tween.get(d).to({
			alpha: 1
		}, 500).call(function() {
			l.addEventListener(ON_MOUSE_DOWN, n._onExit, this)
		});
		$(s_oMain).trigger("share_event", m);
		$(s_oMain).trigger("save_score", m)
	};
	this.nextLevel = function(k, m, q, n) {
		e = n;
		var p = 340,
			t = 60,
			w = CANVAS_WIDTH / 2;
		(new CTLText(d, w - p / 2, 354 - t / 2, p, t, 50, "center", "#000000", FONT, 1, 2, 2, TEXT_YOUR_SCORE + ": " + n, !0, !0, !1, !1)).setOutline(8);
		p = 340;
		t = 60;
		w = CANVAS_WIDTH / 2;
		new CTLText(d, w - p / 2, 354 - t / 2, p, t, 50, "center",
			"#ffc600", FONT, 1, 2, 2, TEXT_YOUR_SCORE + ": " + n, !0, !0, !1, !1);
		playSound("stage_clear", 1, !1);
		setVolume("soundtrack", 0);
		p = sprintf(TEXT_NEXT_LEVEL, k, q);
		c = new CComic(CANVAS_WIDTH / 2 - 50, CANVAS_HEIGHT / 2 + 180, d, p, 1);
		p = s_oSpriteLibrary.getSprite("but_play_small");
		l = new CGfxButton(CANVAS_WIDTH / 2 + 160, CANVAS_HEIGHT - 270, p, d);
		k >= q + 5 ? (f.visible = !0, createjs.Tween.get(f).wait(500).to({
			scaleX: 1,
			scaleY: 1
		}, 500, createjs.Ease.bounceOut).call(function() {
			l.addEventListener(ON_MOUSE_DOWN, y._onNextLevel, this)
		})) : k >= q + 2 ? (f.visible = !0, createjs.Tween.get(f).wait(500).to({
			scaleX: 1,
			scaleY: 1
		}, 500, createjs.Ease.bounceOut).call(function() {
			g.visible = !0;
			createjs.Tween.get(f).to({
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
			}, 500, createjs.Ease.bounceOut).call(function() {
				l.addEventListener(ON_MOUSE_DOWN, y._onNextLevel, this)
			})
		})) : k < q + 2 && (f.visible = !0, createjs.Tween.get(f).wait(500).to({
			scaleX: 1,
			scaleY: 1,
			rotation: 0
		}, 500, createjs.Ease.bounceOut).call(function() {
			g.visible = !0;
			createjs.Tween.get(f).to({
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
			}, 500, createjs.Ease.bounceOut).call(function() {
				h.visible = !0;
				createjs.Tween.get(f).to({
					x: CANVAS_WIDTH / 2 - 75,
					y: CANVAS_HEIGHT / 2 - 50
				}, 250, createjs.Ease.linear).call(function() {});
				createjs.Tween.get(g).to({
					x: CANVAS_WIDTH /
						2 + 75,
					y: CANVAS_HEIGHT / 2 - 50
				}, 250, createjs.Ease.linear).call(function() {});
				createjs.Tween.get(h).to({
					scaleX: 1,
					scaleY: 1,
					x: CANVAS_WIDTH / 2,
					y: CANVAS_HEIGHT / 2 - 60
				}, 700, createjs.Ease.bounceOut).call(function() {
					l.addEventListenerWithParams(ON_MOUSE_DOWN, y._onNextLevel, this, m)
				})
			})
		}));
		d.visible = !0;
		var y = this;
		createjs.Tween.get(d).to({
			alpha: 1
		}, 500).call(function() {});
		$(s_oMain).trigger("share_event", n)
	};
	this._onExit = function() {
		d.off("mousedown", this._onExit);
		s_oStage.removeChild(d);
		l.unload();
		s_oGame.onExitEndPanel()
	};
	this._onNextLevel = function(k) {
		d.off("mousedown", this._onNextLevel);
		s_oStage.removeChild(d);
		s_oGame.onNextLevel(e)
	};
	this._init(b);
	return this
}

function CLevel(b) {
	var e = [],
		a = [],
		d = [];
	this._init = function() {
		a[0] = [];
		a[0].push({
			obj_x: 4,
			obj_y: 0,
			obj_type: "vertical_3"
		});
		a[0].push({
			obj_x: 3,
			obj_y: 3,
			obj_type: "vertical_2"
		});
		a[0].push({
			obj_x: 4,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[0].push({
			obj_x: 2,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(5);
		e[0] = a[0];
		a[1] = [];
		a[1].push({
			obj_x: 0,
			obj_y: 0,
			obj_type: "vertical_2"
		});
		a[1].push({
			obj_x: 5,
			obj_y: 0,
			obj_type: "vertical_3"
		});
		a[1].push({
			obj_x: 4,
			obj_y: 3,
			obj_type: "horizzontal_2"
		});
		a[1].push({
			obj_x: 2,
			obj_y: 4,
			obj_type: "vertical_2"
		});
		a[1].push({
			obj_x: 3,
			obj_y: 5,
			obj_type: "horizzontal_3"
		});
		a[1].push({
			obj_x: 0,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(5);
		e[1] = a[1];
		a[2] = [];
		a[2].push({
			obj_x: 2,
			obj_y: 0,
			obj_type: "vertical_3"
		});
		a[2].push({
			obj_x: 5,
			obj_y: 1,
			obj_type: "vertical_2"
		});
		a[2].push({
			obj_x: 1,
			obj_y: 3,
			obj_type: "vertical_2"
		});
		a[2].push({
			obj_x: 2,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[2].push({
			obj_x: 4,
			obj_y: 3,
			obj_type: "vertical_3"
		});
		a[2].push({
			obj_x: 0,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(12);
		e[2] = a[2];
		a[3] = [];
		a[3].push({
			obj_x: 2,
			obj_y: 0,
			obj_type: "horizzontal_3"
		});
		a[3].push({
			obj_x: 2,
			obj_y: 1,
			obj_type: "vertical_2"
		});
		a[3].push({
			obj_x: 5,
			obj_y: 0,
			obj_type: "vertical_3"
		});
		a[3].push({
			obj_x: 2,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[3].push({
			obj_x: 4,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[3].push({
			obj_x: 0,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(5);
		e[3] = a[3];
		a[4] = [];
		a[4].push({
			obj_x: 2,
			obj_y: 0,
			obj_type: "vertical_3"
		});
		a[4].push({
			obj_x: 0,
			obj_y: 4,
			obj_type: "vertical_2"
		});
		a[4].push({
			obj_x: 1,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[4].push({
			obj_x: 4,
			obj_y: 3,
			obj_type: "vertical_3"
		});
		a[4].push({
			obj_x: 0,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(11);
		e[4] = a[4];
		a[5] = [];
		a[5].push({
			obj_x: 2,
			obj_y: 0,
			obj_type: "vertical_2"
		});
		a[5].push({
			obj_x: 2,
			obj_y: 2,
			obj_type: "vertical_3"
		});
		a[5].push({
			obj_x: 0,
			obj_y: 5,
			obj_type: "horizzontal_3"
		});
		a[5].push({
			obj_x: 5,
			obj_y: 3,
			obj_type: "vertical_3"
		});
		a[5].push({
			obj_x: 0,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(8);
		e[5] = a[5];
		a[6] = [];
		a[6].push({
			obj_x: 2,
			obj_y: 1,
			obj_type: "horizzontal_2"
		});
		a[6].push({
			obj_x: 4,
			obj_y: 0,
			obj_type: "vertical_2"
		});
		a[6].push({
			obj_x: 4,
			obj_y: 2,
			obj_type: "vertical_2"
		});
		a[6].push({
			obj_x: 5,
			obj_y: 0,
			obj_type: "vertical_3"
		});
		a[6].push({
			obj_x: 4,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[6].push({
			obj_x: 3,
			obj_y: 4,
			obj_type: "vertical_2"
		});
		a[6].push({
			obj_x: 2,
			obj_y: 3,
			obj_type: "vertical_3"
		});
		a[6].push({
			obj_x: 2,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(9);
		e[6] = a[6];
		a[7] = [];
		a[7].push({
			obj_x: 3,
			obj_y: 0,
			obj_type: "vertical_2"
		});
		a[7].push({
			obj_x: 3,
			obj_y: 2,
			obj_type: "vertical_2"
		});
		a[7].push({
			obj_x: 4,
			obj_y: 2,
			obj_type: "vertical_2"
		});
		a[7].push({
			obj_x: 4,
			obj_y: 0,
			obj_type: "horizzontal_2"
		});
		a[7].push({
			obj_x: 5,
			obj_y: 1,
			obj_type: "vertical_3"
		});
		a[7].push({
			obj_x: 0,
			obj_y: 4,
			obj_type: "vertical_2"
		});
		a[7].push({
			obj_x: 1,
			obj_y: 4,
			obj_type: "horizzontal_3"
		});
		a[7].push({
			obj_x: 4,
			obj_y: 4,
			obj_type: "vertical_2"
		});
		a[7].push({
			obj_x: 0,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(10);
		e[7] = a[7];
		a[8] = [];
		a[8].push({
			obj_x: 1,
			obj_y: 1,
			obj_type: "vertical_2"
		});
		a[8].push({
			obj_x: 1,
			obj_y: 0,
			obj_type: "horizzontal_2"
		});
		a[8].push({
			obj_x: 3,
			obj_y: 0,
			obj_type: "vertical_2"
		});
		a[8].push({
			obj_x: 4,
			obj_y: 0,
			obj_type: "horizzontal_2"
		});
		a[8].push({
			obj_x: 5,
			obj_y: 1,
			obj_type: "vertical_3"
		});
		a[8].push({
			obj_x: 4,
			obj_y: 1,
			obj_type: "vertical_2"
		});
		a[8].push({
			obj_x: 4,
			obj_y: 3,
			obj_type: "vertical_3"
		});
		a[8].push({
			obj_x: 2,
			obj_y: 3,
			obj_type: "vertical_2"
		});
		a[8].push({
			obj_x: 0,
			obj_y: 3,
			obj_type: "horizzontal_2"
		});
		a[8].push({
			obj_x: 2,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(11);
		e[8] = a[8];
		a[9] = [];
		a[9].push({
			obj_x: 0,
			obj_y: 0,
			obj_type: "horizzontal_2"
		});
		a[9].push({
			obj_x: 2,
			obj_y: 0,
			obj_type: "vertical_2"
		});
		a[9].push({
			obj_x: 4,
			obj_y: 0,
			obj_type: "horizzontal_2"
		});
		a[9].push({
			obj_x: 4,
			obj_y: 2,
			obj_type: "vertical_2"
		});
		a[9].push({
			obj_x: 0,
			obj_y: 4,
			obj_type: "horizzontal_2"
		});
		a[9].push({
			obj_x: 2,
			obj_y: 4,
			obj_type: "horizzontal_3"
		});
		a[9].push({
			obj_x: 5,
			obj_y: 4,
			obj_type: "vertical_2"
		});
		a[9].push({
			obj_x: 2,
			obj_y: 2,
			obj_type: "player"
		});
		d.push(8);
		e[9] = a[9]
	};
	this.getLevel = function(c) {
		return e[c]
	};
	this.getCellValueInLevel = function(c, f) {
		return (void 0)[parseInt(e[c].charAt(f))]
	};
	this.getGoalInLevel = function(c) {
		return d[c]
	};
	this.getGoalNumberInLevel = function(c) {
		return (void 0)[c].length
	};
	this._init()
}

function CBlocks(b, e, a, d) {
	var c, f, g, h, l = {
		x: 0,
		y: 0
	};
	this._init = function(k, m, q, n) {
		c = new createjs.Container;
		l = "vertical_2" === q || "vertical_3" === q ? {
			x: START_X_GRID + CELL_WIDTH * k - 12,
			y: START_Y_GRID + CELL_HEIGHT * m - 5
		} : {
			x: START_X_GRID + CELL_WIDTH * k - 5,
			y: START_Y_GRID + CELL_HEIGHT * m - 5
		};
		"player" === q ? (k = {
				images: [s_oSpriteLibrary.getSprite("player")],
				framerate: 9,
				frames: {
					width: 159,
					height: 90,
					regX: 0,
					regY: 0
				},
				animations: {
					idle: [0, 11, "idle"]
				}
			}, k = new createjs.SpriteSheet(k), k = createSprite(k, "idle", 0, 0, 159, 90), c.x = l.x, c.y = l.y,
			s_oStage.addChild(k)) : (k = createBitmap(s_oSpriteLibrary.getSprite(q)), c.x = l.x, c.y = l.y);
		c.addChild(k);
		s_oStage.addChild(c);
		f = c.on("mousedown", this._onFormContainerClick, this);
		g = c.on("pressup", this._releaseForm, this);
		h = c.on("pressmove", this._dragForm, this)
	};
	this._onFormContainerClick = function(k) {
		s_oGame.onFormContainerClick(k, c, d)
	};
	this._dragForm = function(k) {
		s_oGame.dragForm(k, a, d)
	};
	this._releaseForm = function(k) {
		s_oGame.releaseForm(k, l, a, d)
	};
	this.placeInGrid = function(k, m) {
		createjs.Tween.get(c, {
			override: !0
		}).to({
			x: k,
			y: m
		}, 500, createjs.Ease.cubicOut).call(function() {});
		l = {
			x: k,
			y: m
		}
	};
	this.goBack = function(k, m) {
		createjs.Tween.get(c).to({
			x: k,
			y: m
		}, 200, createjs.Ease.cubicOut).call(function() {})
	};
	this.moveOut = function() {
		createjs.Tween.get(c, {
			override: !0
		}).to({
			x: CANVAS_WIDTH
		}, 500, createjs.Ease.cubicIn).call(function() {
			s_oGame.gameOver()
		})
	};
	this.setPos = function(k, m) {
		c.x = k;
		c.y = m
	};
	this.getPosX = function() {
		return c.x
	};
	this.getPosY = function() {
		return c.y
	};
	this.getOldX = function() {
		return l.x
	};
	this.getOldY = function() {
		return l.y
	};
	this.getType = function() {
		return a
	};
	this.deleteForm = function() {
		c.off("mousedown", f);
		c.off("pressmove", g);
		c.off("pressup", h);
		s_oStage.removeChild(c)
	};
	this._init(b, e, a, d)
}

function CLevelBut(b, e, a, d, c) {
	var f, g, h, l = [],
		k = [],
		m, q, n, p, t, w, y;
	this._init = function(G, u, D, H) {
		g = [];
		h = [];
		if (H) var B = D.width / 2 - 5,
			v = "#ffc600";
		else B = D.width / 2, v = "#aaa";
		q = new createjs.Container;
		q.x = G;
		q.y = u;
		q.mouseEnabled = H;
		s_oStage.addChild(q);
		s_bMobile || (q.cursor = "pointer");
		G = new createjs.SpriteSheet({
			images: [D],
			frames: {
				width: B,
				height: D.height,
				regX: D.width / 2 / 2,
				regY: D.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		f = H;
		n = createSprite(G, "state_" + f, D.width / 2 / 2, D.height / 2, D.width / 2, D.height);
		n.stop();
		q.addChild(n);
		l.push(n);
		D = new createjs.Text(c, "30px " + FONT, "#000000");
		D.x = -5;
		D.y = 5;
		D.textAlign = "center";
		D.textBaseline = "alphabetic";
		D.lineWidth = 200;
		D.outline = 8;
		q.addChild(D);
		w = new createjs.Text(c, "30px " + FONT, v);
		w.x = -5;
		w.y = 5;
		w.textAlign = "center";
		w.textBaseline = "alphabetic";
		w.lineWidth = 200;
		q.addChild(w);
		v = new createjs.Container;
		v.y = -30;
		q.addChild(v);
		m = [];
		D = s_oSpriteLibrary.getSprite("star_empty");
		for (H = 0; 3 > H; H++) m[H] = createBitmap(D), m[H].regX = D.width / 2, m[H].regY = D.height / 2, m[H].scaleX = m[H].scaleY =
			.4, m[H].x = -26 + 26 * H, m[H].y = -(0 === H % 2 ? 0 : 10), m[H].rotation = -20 + 20 * H, v.addChild(m[H]);
		this._initListener()
	};
	this.unload = function() {
		createjs.Tween.removeTweens(q);
		q.off("mousedown", p);
		q.off("pressup", t);
		s_oStage.removeChild(q)
	};
	this._initListener = function() {
		p = q.on("mousedown", this.buttonDown);
		t = q.on("pressup", this.buttonRelease)
	};
	this.viewBut = function(G) {
		s_oStage.addChild(G)
	};
	this.addEventListener = function(G, u, D) {
		g[G] = u;
		h[G] = D
	};
	this.addEventListenerWithParams = function(G, u, D, H) {
		g[G] = u;
		h[G] = D;
		k = H
	};
	this.ifClickable =
		function() {
			return !0 === q.mouseEnabled ? 1 : 0
		};
	this.setActive = function(G, u) {
		f = u;
		l[G].gotoAndStop("state_" + f);
		l[G].mouseEnabled = !0;
		w.color = f ? "#ffc600" : "#ccc"
	};
	this.buttonRelease = function() {
		y && (q.scaleX = 1, q.scaleY = 1);
		playSound("click", 1, !1);
		f = !f;
		n.gotoAndStop("state_" + f);
		g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(h[ON_MOUSE_UP], k)
	};
	this.buttonDown = function() {
		y && (q.scaleX = .9, q.scaleY = .9);
		g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], k)
	};
	this.setPosition = function(G, u) {
		q.x = G;
		q.y = u
	};
	this.setVisible = function(G) {
		q.visible =
			G
	};
	this.setStars = function(G) {
		for (var u = s_oSpriteLibrary.getSprite("star_filled"), D = 0; 3 > D; D++) m[D].visible = !0, D < G && (m[D].image = u)
	};
	this.pulseAnimation = function() {
		y = createjs.Tween.get(q).to({
			scaleX: .9,
			scaleY: .9
		}, 850, createjs.Ease.quadOut).to({
			scaleX: 1,
			scaleY: 1
		}, 650, createjs.Ease.quadIn)
	};
	this._init(b, e, a, d)
}

function CLevelMenu() {
	var b, e, a, d, c, f, g = [],
		h, l, k, m, q = null,
		n = null;
	this._init = function() {
		h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(h);
		h = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		s_oStage.addChild(h);
		var p = 340,
			t = 60,
			w = CANVAS_WIDTH / 2;
		(new CTLText(s_oStage, w - p / 2, 354 - t / 2, p, t, 50, "center", "#000000", FONT, 1, 2, 2, TEXT_SELECT_LEVEL, !0, !0, !1, !1)).setOutline(8);
		p = 340;
		t = 60;
		w = CANVAS_WIDTH / 2;
		new CTLText(s_oStage, w - p / 2, 354 - t / 2, p, t, 50, "center", "#ffc600", FONT, 1, 2, 2, TEXT_SELECT_LEVEL,
			!0, !0, !1, !1);
		p = CANVAS_WIDTH / 2 + 70;
		for (var y = w = t = 0; y < NUM_LEVELS; y++, t += 90) 300 < t && (t = 0, w += 90), y < s_iLastLevel ? g.push(new CLevelBut(p - 200 + t, 430 + w, s_oSpriteLibrary.getSprite("level_sprite"), !0, y + 1)) : g.push(new CLevelBut(p - 200 + t, 430 + w, s_oSpriteLibrary.getSprite("level_sprite"), !1, y + 1)), 0 === y ? g[y].addEventListenerWithParams(ON_MOUSE_UP, this._onClickHelp, this, y) : g[y].addEventListenerWithParams(ON_MOUSE_UP, this._onClick, this, y), s_bFirstTime = !0, y < s_iLastLevel - 1 ? g[y].setStars(s_aStars[y]) : y === s_iLastLevel - 1 &&
			g[y].pulseAnimation();
		p = s_oSpriteLibrary.getSprite("but_exit");
		c = CANVAS_WIDTH - p.height / 2 - 10;
		f = p.height / 2 + 10;
		l = new CGfxButton(c, f, p, s_oStage);
		l.addEventListener(ON_MOUSE_UP, this._onExit, this);
		a = CANVAS_WIDTH - p.width / 2 - 110;
		d = p.height / 2 + 10;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), k = new CToggle(a, d, p, s_bAudioActive, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		p = window.document;
		t = p.documentElement;
		q = t.requestFullscreen || t.mozRequestFullScreen ||
			t.webkitRequestFullScreen || t.msRequestFullscreen;
		n = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (q = !1);
		q && screenfull.isEnabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), b = p.width / 4 + 10, e = p.height / 2 + 10, m = new CToggle(b, e, p, s_bFullscreen, s_oStage), m.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		for (var p = 0; p < NUM_LEVELS; p++) g[p].unload();
		q && screenfull.isEnabled &&
			m.unload();
		s_oLevelMenu = null;
		s_oStage.removeAllChildren()
	};
	this.refreshButtonPos = function(p, t) {
		l.setPosition(c - p, t + f);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(a - p, t + d);
		q && screenfull.isEnabled && m.setPosition(b + p, e + t)
	};
	this._onNumModeToggle = function(p) {
		p === NUM_ACTIVE ? ((void 0).setActive(!1), (void 0).setActive(!0)) : ((void 0).setActive(!0), (void 0).setActive(!1))
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onClickHelp = function(p) {
		g[p].ifClickable() &&
			(s_oLevelMenu.unload(), s_oMain.gotoHelp(p))
	};
	this._onClick = function(p) {
		g[p].ifClickable() && (s_oLevelMenu.unload(), s_oMain.gotoGame(p, 0))
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
		q && screenfull.isEnabled && m.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? n.call(window.document) : q.call(window.document.documentElement);
		sizeHandler()
	};
	s_oLevelMenu = this;
	this._init()
}
var s_oLevelMenu = null;

function CHelpPanel(b) {
	var e, a, d, c;
	this._init = function(f) {
		var g = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		e = createBitmap(f);
		d = createBitmap(s_oSpriteLibrary.getSprite("bg_help"));
		d.x = CANVAS_WIDTH / 2 - 180;
		d.y = CANVAS_HEIGHT / 2 - 150;
		a = new createjs.Container;
		a.addChild(g, e, d);
		new CComic(CANVAS_WIDTH / 2 - 50, CANVAS_HEIGHT / 2 + 180, a, TEXT_HELP, 1);
		a.alpha = 0;
		s_oStage.addChild(a);
		f = s_oSpriteLibrary.getSprite("but_play_small");
		c = new CGfxButton(CANVAS_WIDTH / 2 + 160, CANVAS_HEIGHT - 270, f, a);
		var h = this;
		createjs.Tween.get(a).to({
				alpha: 1
			},
			500).call(function() {
			c.addEventListener(ON_MOUSE_DOWN, h._onButPlayRelease, this)
		})
	};
	this._onButPlayRelease = function() {
		c.unload();
		s_oStage.removeChild(a);
		s_oMain.gotoGame(0, 0)
	};
	this._init(b);
	return this
}

function CComic(b, e, a, d, c) {
	var f, g;
	this._init = function(h, l, k, m, q) {
		q = s_oSpriteLibrary.getSprite("balloon_" + q);
		f = createBitmap(q);
		f.regX = q.width / 2;
		f.regY = q.height / 2;
		f.x = h;
		f.y = l;
		k.addChild(f);
		g = new CFormatText(h - 145, l - 85, m, "#000000", k, "#000000", 24);
		g.disableOutline();
		g.setFont(FONT2);
		g.setWidth(250);
		g.setAlign("left");
		g.playText()
	};
	this.unload = function() {
		a.removeChild(f);
		g.unload()
	};
	this.flip = function() {
		f.scaleX = f.scaleY = -1;
		g.setPosition(b - 180, e - 80)
	};
	this._init(b, e, a, d, c)
}

function CFormatText(b, e, a, d, c, f, g) {
	var h, l, k, m, q;
	this._init = function(p, t, w, y, G, u, D) {
		h = w;
		m = new createjs.Container;
		m.x = p;
		m.y = t + 15;
		G.addChild(m);
		p = D + "px";
		l = new createjs.Text;
		l.text = h;
		l.font = p + " " + FONT2;
		l.color = u;
		l.textAlign = "center";
		l.lineWidth = 100;
		l.outline = 4;
		m.addChild(l);
		k = new createjs.Text;
		k.text = h;
		k.font = p + " " + FONT2;
		k.color = y;
		k.textAlign = "center";
		k.lineWidth = 100;
		m.addChild(k)
	};
	this.unload = function() {
		c.removeChild(m)
	};
	this.disableOutline = function() {
		m.removeChild(l)
	};
	this.setVisible = function(p) {
		m.visible =
			p
	};
	this.isVisible = function() {
		return m.visible
	};
	this.setOutline = function(p) {
		l.outline = p
	};
	this.setShadow = function(p) {
		l.shadow = p ? new createjs.Shadow("#333333", 2, 2, 6) : null
	};
	this.setAlign = function(p) {
		l.textAlign = p;
		k.textAlign = p
	};
	this.setWidth = function(p) {
		l.lineWidth = p;
		k.lineWidth = p
	};
	this.setText = function(p) {
		k.text = p;
		l.text = p
	};
	this.setColor = function(p, t) {
		k.color = p;
		l.color = t
	};
	this.setFont = function(p) {
		var t = g + "px";
		k.font = t + " " + p;
		l.font = t + " " + p
	};
	this.getText = function() {
		return m
	};
	this.setPos = function(p) {
		m.y =
			p
	};
	this.getPos = function() {
		return {
			x: m.x,
			y: m.y
		}
	};
	this.playText = function() {
		q = "";
		this.setText("");
		this._slideText(0)
	};
	this._slideText = function(p) {
		q += a[p];
		this.setText(q);
		p < a.length - 1 && setTimeout(function() {
			n._slideText(p + 1)
		}, 25)
	};
	this.setPosition = function(p, t) {
		m.x = p;
		m.y = t
	};
	var n = this;
	this._init(b, e, a, d, c, f, g)
}

function CCreditsPanel() {
	var b, e, a, d, c, f, g;
	this._init = function() {
		f = new createjs.Container;
		s_oStage.addChild(f);
		var h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		f.addChild(h);
		d = new createjs.Shape;
		d.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		f.addChild(d);
		h = s_oSpriteLibrary.getSprite("msg_box");
		e = createBitmap(h);
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2;
		e.regX = h.width / 2;
		e.regY = h.height / 2;
		f.addChild(e);
		c = new createjs.Shape;
		c.graphics.beginFill("#0f0f0f").drawRect(0,
			0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.alpha = .01;
		g = c.on("click", this._onLogoButRelease);
		f.addChild(c);
		h = h.width - 300;
		var l = 60,
			k = CANVAS_WIDTH / 2;
		new CTLText(f, k - h / 2, 400 - l / 2, h, l, 42, "center", "#fff", FONT, 1, 2, 2, TEXT_DEVELOPED, !0, !0, !1, !1);
		h = s_oSpriteLibrary.getSprite("ctl_logo");
		l = createBitmap(h);
		l.regX = h.width / 2;
		l.regY = h.height / 2;
		l.x = CANVAS_WIDTH / 2;
		l.y = CANVAS_HEIGHT / 2;
		f.addChild(l);
		h = h.width;
		l = 60;
		k = CANVAS_WIDTH / 2;
		new CTLText(f, k - h / 2, 550 - l / 2, h, l, 42, "center", "#fff", FONT, 1, 2, 2, "www.atterolabs.com", !0, !0, !1, !1);
		h = s_oSpriteLibrary.getSprite("but_exit");
		b = CANVAS_WIDTH / 2 + 220;
		a = new CGfxButton(b, 270, h, f);
		a.addEventListener(ON_MOUSE_UP, this.unload, this)
	};
	this.unload = function() {
		c.off("click", g);
		a.unload();
		a = null;
		s_oStage.removeChild(f)
	};
	this._onLogoButRelease = function() {
		window.open("https://www.atterolabs.com")
	};
	this._init()
}
CTLText.prototype = {
	constructor: CTLText,
	__autofit: function() {
		if (this._bFitText) {
			for (var b = this._iFontSize;
				(this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(b--, this._oText.font = b + "px " + this._szFont, this._oText.lineHeight = Math.round(b * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > b););
			this._iFontSize = b
		}
	},
	__verticalAlign: function() {
		if (this._bVerticalAlign) {
			var b = this._oText.getBounds().height;
			this._oText.y -=
				(b - this._iHeight) / 2 + this._iPaddingV
		}
	},
	__updateY: function() {
		this._oText.y = this._y + this._iPaddingV;
		switch (this._oText.textBaseline) {
			case "middle":
				this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
		}
	},
	__createText: function(b) {
		this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
		this._oText = new createjs.Text(b,
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
		this.refreshText(b)
	},
	setVerticalAlign: function(b) {
		this._bVerticalAlign = b
	},
	setOutline: function(b) {
		null !== this._oText && (this._oText.outline = b)
	},
	setShadow: function(b, e, a, d) {
		null !== this._oText && (this._oText.shadow = new createjs.Shadow(b, e, a, d))
	},
	setColor: function(b) {
		this._oText.color = b
	},
	setAlpha: function(b) {
		this._oText.alpha = b
	},
	setY: function(b) {
		this._y = this._oText.y = b
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
	refreshText: function(b) {
		"" === b && (b = " ");
		null === this._oText && this.__createText(b);
		this._oText.text = b;
		this._oText.font = this._iFontSize + "px " + this._szFont;
		this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
		this.__autofit();
		this.__updateY();
		this.__verticalAlign()
	}
};

function CTLText(b, e, a, d, c, f, g, h, l, k, m, q, n, p, t, w, y) {
	this._oContainer = b;
	this._x = e;
	this._y = a;
	this._iWidth = d;
	this._iHeight = c;
	this._bMultiline = w;
	this._iFontSize = f;
	this._szAlign = g;
	this._szColor = h;
	this._szFont = l;
	this._iPaddingH = m;
	this._iPaddingV = q;
	this._bVerticalAlign = t;
	this._bFitText = p;
	this._bDebug = y;
	this._oDebugShape = null;
	this._fLineHeightFactor = k;
	this._oText = null;
	n && this.__createText(n)
}

function CAreYouSurePanel(b, e) {
	var a, d, c, f, g, h, l;
	this._init = function(m, q) {
		a = [];
		d = [];
		f = new createjs.Container;
		f.alpha = 0;
		f.visible = !1;
		f.on("mousedown", function() {});
		g = new createjs.Container;
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT / 2;
		f.addChild(g);
		c = createBitmap(m);
		c.regX = m.width / 2;
		c.regY = m.height / 2;
		g.addChild(c);
		var n = 750,
			p = 100;
		(new CTLText(g, -(n / 2), -80 - p / 2, n, p, 40, "center", "#000000", FONT, 1, 2, 2, TEXT_ARE_SURE, !0, !0, !1, !1)).setOutline(8);
		n = 750;
		p = 100;
		new CTLText(g, -(n / 2), -80 - p / 2, n, p, 40, "center", "#ffc600", FONT,
			1, 2, 2, TEXT_ARE_SURE, !0, !0, !0, !1);
		n = s_oSpriteLibrary.getSprite("but_exit");
		h = new CGfxButton(-140, 120, n, g);
		h.addEventListener(ON_MOUSE_DOWN, k._onRefuse, this);
		h.pulseAnimation();
		n = s_oSpriteLibrary.getSprite("but_confirm");
		l = new CGfxButton(140, 120, n, g);
		l.addEventListener(ON_MOUSE_DOWN, k._onYes, this);
		q.addChild(f)
	};
	this.unload = function() {
		f.removeAllEventListeners();
		e.removeChild(f);
		h.unload();
		h = null;
		l.unload();
		l = null
	};
	this.addEventListener = function(m, q, n) {
		a[m] = q;
		d[m] = n
	};
	this.hide = function() {
		f.visible = !1;
		createjs.Tween.get(f).to({
			alpha: 0
		}, 500)
	};
	this.show = function() {
		f.visible = !0;
		createjs.Tween.get(f).to({
			alpha: 1
		}, 500)
	};
	this._onRefuse = function() {
		k.hide();
		var m = ON_REFUSE;
		a[m] && a[m].call(d[m])
	};
	this._onYes = function() {
		k.hide();
		var m = ON_CONFIRM;
		a[m] && a[m].call(d[m])
	};
	var k = this;
	this._init(b, e);
	return this
}
var LOCALSTORAGE_LAST_LEVEL = "last_level",
	LOCALSTORAGE_SCORE = "scores",
	LOCALSTORAGE_STARS = "stars";
s_iLastLevel = 1;
var s_aScore = [],
	s_aStars = [];

function CLocalStorage(b) {
	var e = !0;
	this._init = function(a) {
		a = window.localStorage.getItem(a);
		this.resetAllData();
		null !== a && void 0 !== a && this.loadData()
	};
	this.isDirty = function() {
		return 1 < s_iLastLevel ? !0 : !1
	};
	this.isUsed = function() {
		try {
			window.localStorage.setItem("ls_available", "ok")
		} catch (a) {
			e = !1
		}
		return e
	};
	this.resetAllData = function() {
		s_iLastLevel = 1;
		s_aScore = [];
		for (var a = 0; a < NUM_LEVELS; a++) s_aScore[a] = 0;
		s_aStars = [];
		for (a = 0; a < NUM_LEVELS; a++) s_aStars[a] = 0
	};
	this.deleteData = function() {
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
		for (var d = a[LOCALSTORAGE_SCORE], c = 0; c < d.length; c++) s_aScore[c] = parseInt(d[c]);
		d = a[LOCALSTORAGE_STARS];
		for (c = 0; c < d.length; c++) s_aStars[c] = parseInt(d[c])
	};
	this.getTotalScore =
		function() {
			for (var a = 0, d = 0; d < NUM_LEVELS; d++) a += s_aScore[d];
			return a
		};
	this.getPartialScore = function(a) {
		for (var d = 0, c = 0; c < a; c++) d += s_aScore[c];
		return d
	};
	this._init(b)
}

function extractHostname(b) {
	b = -1 < b.indexOf("://") ? b.split("/")[2] : b.split("/")[0];
	b = b.split(":")[0];
	return b = b.split("?")[0]
}

function extractRootDomain(b) {
	b = extractHostname(b);
	var e = b.split("."),
		a = e.length;
	2 < a && (b = e[a - 2] + "." + e[a - 1]);
	return b
}
var getClosestTop = function() {
		var b = window,
			e = !1;
		try {
			for (; b.parent.document !== b.document;)
				if (b.parent.document) b = b.parent;
				else {
					e = !0;
					break
				}
		} catch (a) {
			e = !0
		}
		return {
			topFrame: b,
			err: e
		}
	},
	getBestPageUrl = function(b) {
		var e = b.topFrame,
			a = "";
		if (b.err) try {
			try {
				a = window.top.location.href
			} catch (c) {
				var d = window.location.ancestorOrigins;
				a = d[d.length - 1]
			}
		} catch (c) {
			a = e.document.referrer
		} else a = e.location.href;
		return a
	},
	TOPFRAMEOBJ = getClosestTop(),
	PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
	for (var b = extractRootDomain(PAGE_URL), e = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], a = 0; a < e.length; a++)
		if (e[a] === b) return !0;
	return !0
};
