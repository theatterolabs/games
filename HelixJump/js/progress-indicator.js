function ProgressIndicator() {
    var cont = $('body').append('<div style="position: absolute;left: 0px; top: 0px;width: 100%;height: 100%;z-index: 10;">').children().last();
    var canvas = cont.append('<div style="position: absolute;left: 50%;top: 50%;margin: -100px -100px;"><canvas width=200 height=200></canvas></div>').children().children()[0];
    var style = {
        R:100,
        r:50,
        sideA:45,
        inner:"#ffffcf",
        bar:"#9e0039",
        side:"#ffff00",
        text:"black",
        //barBg:"#404040"
    };
    var _showType = false;
    var _progressValue = 0;
    var _progressValueTarget = 0;
    
    this.showProgress = function(value) {
        _progressValueTarget = value;
        cont.show();
        cont.css({'background-color': '#ff5e3a', 'background-image': 'linear-gradient(#ff5e3a, #ff2969)'});
        if (!_showType) fadeIn();
        _showType = 'progress';
    };
    this.show = function() {
        cont.show();
        cont.css({'background-color': 'rgba(128, 128, 128, 0.5)', 'background-image': ""});
        if (!_showType) fadeIn();
        _showType = 'wait';
    }
    this.hide = function() { if (_showType) { fadeOut(); } };
	
	var prvt = {fade:null};
	var fadeIn = function() { if (prvt.fade) prvt.fade.dir = 'in'; else prvt.fade = {dir:'in',val:0}; };
	var fadeOut = function() { if (prvt.fade) prvt.fade.dir = 'out'; else prvt.fade = {dir:'out',val:1}; };
	var fadeUpdate = function() { cont.css('opacity', Math.max(0, Math.min(prvt.fade.val, 1))); }
    var draw = function(value, shift, enableText) {
        value = Math.max(0, Math.min(value, 1));
        shift -= Math.floor(shift);
        //var canvas = $("canvas")[0];
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var R = style.R;
        var r = style.r;
        var cx = R;
        var cy = R;
        var pi2 = 2 * Math.PI;
        drawArcBand = function(ctx, R, r, amount, shift) {
            var astart = pi2 * ((shift||0) - 0.25);
            var sx = cx + R * Math.cos(astart);
            var sy = cy + R * Math.sin(astart);
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(cx, cy, R, astart, astart + pi2 * amount);
            ctx.arc(cx, cy, r, astart + pi2 * amount, astart, true);
            ctx.lineTo(sx, sy);
            ctx.fill();
        };
        // Progress background
        if (style.barBg) {
            ctx.fillStyle = style.barBg;
            drawArcBand(ctx, R, r, 1);
        }
        // Progress background
        ctx.fillStyle = style.bar;
		if (value < 1) {
			drawArcBand(ctx, R, r, value/2, shift);
			drawArcBand(ctx, R, r, value/2, shift + 1 / 2);
		}
        else
			drawArcBand(ctx, R, r, 1, shift);
        // Side arc
        if (style.sideA > 0) {
            ctx.fillStyle = style.side;
            var amnt = style.sideA / 360;
            drawArcBand(ctx, R, r, amnt, shift - amnt);
        }
        // Inner
        ctx.fillStyle = style.inner;
        drawArcBand(ctx, r * 1.01, 0, 1);
        // Text
        if (enableText) {
            var txt = String(Math.round(value * 100));
            var txtH = Math.floor(R * 0.5);
            ctx.font = "bold " + txtH + "px Arial";
            var txtW = ctx.measureText(txt).width;
            ctx.fillStyle = style.text;
            ctx.fillText(txt, cx - txtW * 0.5, cy + txtH * 0.33);
        }
    }
    
    var fps = 20;
    var d_shift = 0.25;
    var shift = 0;
	var fade_step = 1 / (0.4 * fps);
    setInterval(function() {
        shift += d_shift/fps;
        var t = 0.5;
        _progressValue = _progressValueTarget * t + _progressValue * (1 - t);
        if (_showType) {
			var fade = prvt.fade;
			if (fade) {
				if (fade.dir == 'in') { fade.val += fade_step; if (fade.val >= 1) { fadeUpdate(); prvt.fade = null; } else fadeUpdate(); }
				else { // out
					fade.val -= fade_step;
					if (fade.val <= 0) {
						fadeUpdate(); prvt.fade = null;
						_showType = false;
						cont.hide();
						return;
					} else fadeUpdate();
				}
			}
            var enableText = _showType == 'progress';
            draw(enableText ? _progressValue : 0.5, shift, enableText);
        }
    }.bind(this), 1000 / fps);
    this.hide();
}
