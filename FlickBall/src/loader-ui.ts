// == Code below from Spinner.js
/* tslint:disable */
var __assign = (this && (this as any).__assign) || Object.assign || function(t: any) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts: any) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign({}, defaults, opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target: any) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());
export { Spinner };
/**
 * Sets multiple style properties at once.
 */
function css(el: any, props: any) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color: any, idx: any) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el: any, opts: any) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow: any) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows: any, degrees: any) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x: any, y: any, degrees: any) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}

/* tslint: enable */

const spinnerStyle = `
@keyframes spinner-line-fade-more {
    0%, 100% {
      opacity: 0; /* minimum opacity */
    }
    1% {
      opacity: 1;
    }
  }

  @keyframes spinner-line-fade-quick {
    0%, 39%, 100% {
      opacity: 0.25; /* minimum opacity */
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes spinner-line-fade-default {
    0%, 100% {
      opacity: 0.22; /* minimum opacity */
    }
    1% {
      opacity: 1;
    }
  }

`;
//==
const head = document.head || document.getElementsByTagName("head")[0];
const style = document.createElement("style");

style.type = "text/css";

if ((style as any).styleSheet) { // TIE8 and below.
  (style as any).styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(spinnerStyle));
}

head.appendChild(style);

const spinner = new (Spinner as any)({color: "#fff", lines: 12});

let isShowing = false;
export function showLoadingUi() {
    if (isShowing) {
        return false;
    }

    isShowing = true;
    spinner.spin(document.body);
    return true;
}

export function showLoadingCoundown(countdown: number) {
    if (!isShowing) {
        return 0;
    }

    if (!spinner.countdownDiv) {
        spinner.countdownDiv = css(document.createElement('div'), {
            top: 0,
            color: "white",
            "margin-left": "-5px",
            "margin-top": "25px",
            "font-size": "15px",
        }) as HTMLDivElement;
        spinner.el.appendChild(spinner.countdownDiv); 
    }

    spinner.countdown = countdown;
    spinner.countdownDiv.innerHTML = "" + countdown;
    
    if (!spinner.countdownIntervalId) {
        const update = () => {
            spinner.countdown--;
            spinner.countdownDiv.innerHTML = "" + spinner.countdown;

            if (spinner.countdown === 0) {
                hideLoadingCoundown();
            }
        };

        spinner.countdownIntervalId = setInterval(update, 300);
    }

    return Date.now() + countdown * 300;
}

export function hideLoadingCoundown() {
    if (spinner.countdownIntervalId) {
        clearInterval(spinner.countdownIntervalId);
        delete spinner.countdownIntervalId;
    }

    if (spinner.countdownDiv) {
        spinner.el.removeChild(spinner.countdownDiv);
        delete spinner.countdownDiv;
    }
}

export function hideLoadingUi() {
    if (!isShowing) {
        return;
    }

    hideLoadingCoundown();
    spinner.stop();
    isShowing = false;
}
