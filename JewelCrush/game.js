var _STRINGS = {
		'Ad': {
			'Mobile': {
				'Preroll': {
					'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
					'Loading': 'Your\x20game\x20is\x20loading...',
					'Close': 'Close'
				},
				'Header': {
					'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
					'Loading': 'Your\x20game\x20is\x20loading...',
					'Close': 'Close'
				},
				'End': {
					'ReadyIn': 'Advertisement\x20ends\x20in\x20',
					'Loading': 'Please\x20wait\x20...',
					'Close': 'Close'
				}
			}
		},
		'Splash': {
			'Loading': 'Loading\x20...',
			'LogoLine1': 'Some\x20text\x20here',
			'LogoLine2': 'powered\x20by\x20MarketJS',
			'LogoLine3': 'none',
			'TapToStart': 'TAP\x20TO\x20START'
		},
		'Game': {
			'stage': 'STAGES',
			'settings': 'SETTINGS',
			'paused': 'PAUSED',
			'score': 'Score',
			'highscore': 'Highscore',
			'move': 'MOVES',
			'level': 'Level\x20%1',
			'target': 'Target',
			'result': 'RESULT',
			'comingsoon': 'COMING\x20SOON'
		},
		'Buttons': {
			'ok': 'OK'
		},
		'Results': {
			'Title': 'High\x20score'
		}
	},
	fontReady = !0x1,
	fonts = {
		'font1': 'rager'
	},
	hiddenCanvases = {},
	canvasId = 0x0,
	_t = function(_0x26beec) {
		for (var _0x1af8cc = _0x26beec, _0x21388c = 0x1; _0x21388c < arguments['length']; _0x21388c++) _0x1af8cc = _0x1af8cc['replace']('%' + _0x21388c, arguments[_0x21388c]);
		return _0x1af8cc;
	},
	curState = function() {
		return ig['game']['controller'];
	},
	csound = {
		'sfxPlay': function(_0x46327d) {
			try {
				return ig['soundHandler']['sfxPlayer']['play'](_0x46327d);
			} catch (_0x32753a) {}
		},
		'sfxStop': function(_0x224157) {
			return ig['soundHandler']['sfxPlayer']['soundList'][_0x224157]['stop']();
		},
		'sfxIsPlaying': function(_0x4ede52) {
			return ig['soundHandler']['sfxPlayer']['soundList'][_0x4ede52]['playing']();
		},
		'sfxVol': function(_0x4b8034, _0x5638c6) {
			ig['soundHandler']['sfxPlayer']['soundList'][_0x4b8034]['volume'](_0x5638c6);
		}
	},
	stringToFunction = function(_0x14f090) {
		_0x14f090 = _0x14f090['split']('.');
		for (var _0x2b7a20 = window || this, _0x516059 = 0x0, _0x4960c6 = _0x14f090['length']; _0x516059 < _0x4960c6; _0x516059++) _0x2b7a20 = _0x2b7a20[_0x14f090[_0x516059]];
		if ('function' !== typeof _0x2b7a20) throw Error('function\x20not\x20found');
		return _0x2b7a20;
	},
	jsonCache = {},
	imgCache = {},
	passSplash = !0x1,
	LZString = function() {
		function _0x5c45b7(_0xb60c05, _0x58c210) {
			if (!_0xc6d384[_0xb60c05]) {
				_0xc6d384[_0xb60c05] = {};
				for (var _0x2ef53d = 0x0; _0x2ef53d < _0xb60c05['length']; _0x2ef53d++) _0xc6d384[_0xb60c05][_0xb60c05['charAt'](_0x2ef53d)] = _0x2ef53d;
			}
			return _0xc6d384[_0xb60c05][_0x58c210];
		}
		var _0x50249a = String['fromCharCode'],
			_0xc6d384 = {},
			_0x2a4aa6 = {
				'compressToBase64': function(_0x4c42dc) {
					if (null == _0x4c42dc) return '';
					_0x4c42dc = _0x2a4aa6['_compress'](_0x4c42dc, 0x6, function(_0x4fbba4) {
						return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=' ['charAt'](_0x4fbba4);
					});
					switch (_0x4c42dc['length'] % 0x4) {
						default:
						case 0x0:
							return _0x4c42dc;
						case 0x1:
							return _0x4c42dc + '===';
						case 0x2:
							return _0x4c42dc + '==';
						case 0x3:
							return _0x4c42dc + '=';
					}
				},
				'decompressFromBase64': function(_0x5d9c91) {
					return null == _0x5d9c91 ? '' : '' == _0x5d9c91 ? null : _0x2a4aa6['_decompress'](_0x5d9c91['length'], 0x20, function(_0x4a27af) {
						return _0x5c45b7('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', _0x5d9c91['charAt'](_0x4a27af));
					});
				},
				'compressToUTF16': function(_0x3385cc) {
					return null == _0x3385cc ? '' : _0x2a4aa6['_compress'](_0x3385cc, 0xf, function(_0x4aadd6) {
						return _0x50249a(_0x4aadd6 + 0x20);
					}) + '\x20';
				},
				'decompressFromUTF16': function(_0x3231eb) {
					return null == _0x3231eb ? '' : '' == _0x3231eb ? null : _0x2a4aa6['_decompress'](_0x3231eb['length'], 0x4000, function(_0x247adb) {
						return _0x3231eb['charCodeAt'](_0x247adb) - 0x20;
					});
				},
				'compressToUint8Array': function(_0x2b9383) {
					_0x2b9383 = _0x2a4aa6['compress'](_0x2b9383);
					for (var _0x529ff6 = new Uint8Array(0x2 * _0x2b9383['length']), _0x5264e9 = 0x0, _0x48ddb4 = _0x2b9383['length']; _0x48ddb4 > _0x5264e9; _0x5264e9++) {
						var _0x402543 = _0x2b9383['charCodeAt'](_0x5264e9);
						_0x529ff6[0x2 * _0x5264e9] = _0x402543 >>> 0x8;
						_0x529ff6[0x2 * _0x5264e9 + 0x1] = _0x402543 % 0x100;
					}
					return _0x529ff6;
				},
				'decompressFromUint8Array': function(_0x12e60b) {
					if (null === _0x12e60b || void 0x0 === _0x12e60b) return _0x2a4aa6['decompress'](_0x12e60b);
					for (var _0x45fc91 = Array(_0x12e60b['length'] / 0x2), _0x38d9c7 = 0x0, _0x1339f9 = _0x45fc91['length']; _0x1339f9 > _0x38d9c7; _0x38d9c7++) _0x45fc91[_0x38d9c7] = 0x100 * _0x12e60b[0x2 * _0x38d9c7] + _0x12e60b[0x2 * _0x38d9c7 + 0x1];
					var _0x143783 = [];
					return _0x45fc91['forEach'](function(_0x2a6bc1) {
						_0x143783['push'](_0x50249a(_0x2a6bc1));
					}), _0x2a4aa6['decompress'](_0x143783['join'](''));
				},
				'compressToEncodedURIComponent': function(_0x366a5f) {
					return null == _0x366a5f ? '' : _0x2a4aa6['_compress'](_0x366a5f, 0x6, function(_0x1d009c) {
						return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$' ['charAt'](_0x1d009c);
					});
				},
				'decompressFromEncodedURIComponent': function(_0x352fe7) {
					return null == _0x352fe7 ? '' : '' == _0x352fe7 ? null : (_0x352fe7 = _0x352fe7['replace'](/ /g, '+'), _0x2a4aa6['_decompress'](_0x352fe7['length'], 0x20, function(_0x4250e2) {
						return _0x5c45b7('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$', _0x352fe7['charAt'](_0x4250e2));
					}));
				},
				'compress': function(_0x47e653) {
					return _0x2a4aa6['_compress'](_0x47e653, 0x10, function(_0x4f7121) {
						return _0x50249a(_0x4f7121);
					});
				},
				'_compress': function(_0x35fb8c, _0x2f7fb6, _0x123672) {
					if (null == _0x35fb8c) return '';
					var _0x2ab757, _0x67af9f, _0x5c8a5e, _0x4e1063 = {},
						_0x4a2b52 = {},
						_0x31d38f = '',
						_0x127855 = '',
						_0xe75613 = '',
						_0x34e475 = 0x2,
						_0x1bc4f1 = 0x3,
						_0x24484e = 0x2,
						_0x414b15 = [],
						_0x570c1c = 0x0,
						_0x1bf0b3 = 0x0;
					for (_0x5c8a5e = 0x0; _0x5c8a5e < _0x35fb8c['length']; _0x5c8a5e += 0x1)
						if (_0x31d38f = _0x35fb8c['charAt'](_0x5c8a5e), Object['prototype']['hasOwnProperty']['call'](_0x4e1063, _0x31d38f) || (_0x4e1063[_0x31d38f] = _0x1bc4f1++, _0x4a2b52[_0x31d38f] = !0x0), _0x127855 = _0xe75613 + _0x31d38f, Object['prototype']['hasOwnProperty']['call'](_0x4e1063, _0x127855)) _0xe75613 = _0x127855;
						else {
							if (Object['prototype']['hasOwnProperty']['call'](_0x4a2b52, _0xe75613)) {
								if (0x100 > _0xe75613['charCodeAt'](0x0)) {
									for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c <<= 0x1, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++;
									_0x67af9f = _0xe75613['charCodeAt'](0x0);
									for (_0x2ab757 = 0x0; 0x8 > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
								} else {
									_0x67af9f = 0x1;
									for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f = 0x0;
									_0x67af9f = _0xe75613['charCodeAt'](0x0);
									for (_0x2ab757 = 0x0; 0x10 > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
								}
								_0x34e475--;
								0x0 == _0x34e475 && (_0x34e475 = Math['pow'](0x2, _0x24484e), _0x24484e++);
								delete _0x4a2b52[_0xe75613];
							} else {
								_0x67af9f = _0x4e1063[_0xe75613];
								for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
							}
							_0x34e475--;
							0x0 == _0x34e475 && (_0x34e475 = Math['pow'](0x2, _0x24484e), _0x24484e++);
							_0x4e1063[_0x127855] = _0x1bc4f1++;
							_0xe75613 = String(_0x31d38f);
						} if ('' !== _0xe75613) {
						if (Object['prototype']['hasOwnProperty']['call'](_0x4a2b52, _0xe75613)) {
							if (0x100 > _0xe75613['charCodeAt'](0x0)) {
								for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c <<= 0x1, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++;
								_0x67af9f = _0xe75613['charCodeAt'](0x0);
								for (_0x2ab757 = 0x0; 0x8 > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
							} else {
								_0x67af9f = 0x1;
								for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f = 0x0;
								_0x67af9f = _0xe75613['charCodeAt'](0x0);
								for (_0x2ab757 = 0x0; 0x10 > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
							}
							_0x34e475--;
							0x0 == _0x34e475 && (_0x34e475 = Math['pow'](0x2, _0x24484e), _0x24484e++);
							delete _0x4a2b52[_0xe75613];
						} else {
							_0x67af9f = _0x4e1063[_0xe75613];
							for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
						}
						_0x34e475--;
						0x0 == _0x34e475 && (Math['pow'](0x2, _0x24484e), _0x24484e++);
					}
					_0x67af9f = 0x2;
					for (_0x2ab757 = 0x0; _0x24484e > _0x2ab757; _0x2ab757++) _0x570c1c = _0x570c1c << 0x1 | 0x1 & _0x67af9f, _0x1bf0b3 == _0x2f7fb6 - 0x1 ? (_0x1bf0b3 = 0x0, _0x414b15['push'](_0x123672(_0x570c1c)), _0x570c1c = 0x0) : _0x1bf0b3++, _0x67af9f >>= 0x1;
					for (;;) {
						if (_0x570c1c <<= 0x1, _0x1bf0b3 == _0x2f7fb6 - 0x1) {
							_0x414b15['push'](_0x123672(_0x570c1c));
							break;
						}
						_0x1bf0b3++;
					}
					return _0x414b15['join']('');
				},
				'decompress': function(_0x1d3b7c) {
					return null == _0x1d3b7c ? '' : '' == _0x1d3b7c ? null : _0x2a4aa6['_decompress'](_0x1d3b7c['length'], 0x8000, function(_0x1bc0c2) {
						return _0x1d3b7c['charCodeAt'](_0x1bc0c2);
					});
				},
				'_decompress': function(_0x5beac5, _0x45ca42, _0x429292) {
					var _0x1bb095, _0x2aa908, _0x3287e1, _0x144934, _0x4540fc, _0x227dad, _0x34b3c8 = [],
						_0x4c30f5 = 0x4,
						_0x148b93 = 0x4,
						_0x311867 = 0x3;
					_0x2aa908 = '';
					var _0x200158 = [],
						_0x4f4105 = _0x429292(0x0),
						_0x475b88 = _0x45ca42,
						_0x3058b3 = 0x1;
					for (_0x1bb095 = 0x0; 0x3 > _0x1bb095; _0x1bb095 += 0x1) _0x34b3c8[_0x1bb095] = _0x1bb095;
					_0x2aa908 = 0x0;
					_0x144934 = Math['pow'](0x2, 0x2);
					for (_0x4540fc = 0x1; _0x4540fc != _0x144934;) _0x3287e1 = _0x4f4105 & _0x475b88, _0x475b88 >>= 0x1, 0x0 == _0x475b88 && (_0x475b88 = _0x45ca42, _0x4f4105 = _0x429292(_0x3058b3++)), _0x2aa908 |= (0x0 < _0x3287e1 ? 0x1 : 0x0) * _0x4540fc, _0x4540fc <<= 0x1;
					switch (_0x2aa908) {
						case 0x0:
							_0x2aa908 = 0x0;
							_0x144934 = Math['pow'](0x2, 0x8);
							for (_0x4540fc = 0x1; _0x4540fc != _0x144934;) _0x3287e1 = _0x4f4105 & _0x475b88, _0x475b88 >>= 0x1, 0x0 == _0x475b88 && (_0x475b88 = _0x45ca42, _0x4f4105 = _0x429292(_0x3058b3++)), _0x2aa908 |= (0x0 < _0x3287e1 ? 0x1 : 0x0) * _0x4540fc, _0x4540fc <<= 0x1;
							_0x227dad = _0x50249a(_0x2aa908);
							break;
						case 0x1:
							_0x2aa908 = 0x0;
							_0x144934 = Math['pow'](0x2, 0x10);
							for (_0x4540fc = 0x1; _0x4540fc != _0x144934;) _0x3287e1 = _0x4f4105 & _0x475b88, _0x475b88 >>= 0x1, 0x0 == _0x475b88 && (_0x475b88 = _0x45ca42, _0x4f4105 = _0x429292(_0x3058b3++)), _0x2aa908 |= (0x0 < _0x3287e1 ? 0x1 : 0x0) * _0x4540fc, _0x4540fc <<= 0x1;
							_0x227dad = _0x50249a(_0x2aa908);
							break;
						case 0x2:
							return '';
					}
					_0x1bb095 = _0x34b3c8[0x3] = _0x227dad;
					for (_0x200158['push'](_0x227dad);;) {
						if (_0x3058b3 > _0x5beac5) return '';
						_0x2aa908 = 0x0;
						_0x144934 = Math['pow'](0x2, _0x311867);
						for (_0x4540fc = 0x1; _0x4540fc != _0x144934;) _0x3287e1 = _0x4f4105 & _0x475b88, _0x475b88 >>= 0x1, 0x0 == _0x475b88 && (_0x475b88 = _0x45ca42, _0x4f4105 = _0x429292(_0x3058b3++)), _0x2aa908 |= (0x0 < _0x3287e1 ? 0x1 : 0x0) * _0x4540fc, _0x4540fc <<= 0x1;
						switch (_0x227dad = _0x2aa908) {
							case 0x0:
								_0x2aa908 = 0x0;
								_0x144934 = Math['pow'](0x2, 0x8);
								for (_0x4540fc = 0x1; _0x4540fc != _0x144934;) _0x3287e1 = _0x4f4105 & _0x475b88, _0x475b88 >>= 0x1, 0x0 == _0x475b88 && (_0x475b88 = _0x45ca42, _0x4f4105 = _0x429292(_0x3058b3++)), _0x2aa908 |= (0x0 < _0x3287e1 ? 0x1 : 0x0) * _0x4540fc, _0x4540fc <<= 0x1;
								_0x34b3c8[_0x148b93++] = _0x50249a(_0x2aa908);
								_0x227dad = _0x148b93 - 0x1;
								_0x4c30f5--;
								break;
							case 0x1:
								_0x2aa908 = 0x0;
								_0x144934 = Math['pow'](0x2, 0x10);
								for (_0x4540fc = 0x1; _0x4540fc != _0x144934;) _0x3287e1 = _0x4f4105 & _0x475b88, _0x475b88 >>= 0x1, 0x0 == _0x475b88 && (_0x475b88 = _0x45ca42, _0x4f4105 = _0x429292(_0x3058b3++)), _0x2aa908 |= (0x0 < _0x3287e1 ? 0x1 : 0x0) * _0x4540fc, _0x4540fc <<= 0x1;
								_0x34b3c8[_0x148b93++] = _0x50249a(_0x2aa908);
								_0x227dad = _0x148b93 - 0x1;
								_0x4c30f5--;
								break;
							case 0x2:
								return _0x200158['join']('');
						}
						if (0x0 == _0x4c30f5 && (_0x4c30f5 = Math['pow'](0x2, _0x311867), _0x311867++), _0x34b3c8[_0x227dad]) _0x2aa908 = _0x34b3c8[_0x227dad];
						else {
							if (_0x227dad !== _0x148b93) return null;
							_0x2aa908 = _0x1bb095 + _0x1bb095['charAt'](0x0);
						}
						_0x200158['push'](_0x2aa908);
						_0x34b3c8[_0x148b93++] = _0x1bb095 + _0x2aa908['charAt'](0x0);
						_0x4c30f5--;
						_0x1bb095 = _0x2aa908;
						0x0 == _0x4c30f5 && (_0x4c30f5 = Math['pow'](0x2, _0x311867), _0x311867++);
					}
				}
			};
		return _0x2a4aa6;
	}();
'function' == typeof define && define['amd'] ? define(function() {
	return LZString;
}) : 'undefined' != typeof module && null != module && (module['exports'] = LZString);
var FontDetect = function() {
	function _0x48b0c9() {
		if (!_0x2f548a) {
			_0x2f548a = !0x0;
			var _0x59e903 = document['body'],
				_0x491339 = document['body']['firstChild'],
				_0x59888a = document['createElement']('div');
			_0x59888a['id'] = 'fontdetectHelper';
			_0x56f21e = document['createElement']('span');
			_0x56f21e['innerText'] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			_0x59888a['appendChild'](_0x56f21e);
			_0x59e903['insertBefore'](_0x59888a, _0x491339);
			_0x59888a['style']['position'] = 'absolute';
			_0x59888a['style']['visibility'] = 'hidden';
			_0x59888a['style']['top'] = '-200px';
			_0x59888a['style']['left'] = '-100000px';
			_0x59888a['style']['width'] = '100000px';
			_0x59888a['style']['height'] = '200px';
			_0x59888a['style']['fontSize'] = '100px';
		}
	}
	var _0x2f548a = !0x1,
		_0x1b60a6 = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'],
		_0x56f21e = null;
	return {
		'onFontLoaded': function(_0x27d4dc, _0xbc1037, _0x52822a, _0x10671e) {
			if (_0x27d4dc) {
				var _0x57c77f = _0x10671e && _0x10671e['msInterval'] ? _0x10671e['msInterval'] : 0x64,
					_0x265e41 = _0x10671e && _0x10671e['msTimeout'] ? _0x10671e['msTimeout'] : 0x7d0;
				if (_0xbc1037 || _0x52822a) {
					if (_0x2f548a || _0x48b0c9(), this['isFontLoaded'](_0x27d4dc)) return void(_0xbc1037 && _0xbc1037(_0x27d4dc));
					var _0x4cf1da = this,
						_0x478993 = new Date()['getTime'](),
						_0x580bf5 = setInterval(function() {
							if (_0x4cf1da['isFontLoaded'](_0x27d4dc)) return clearInterval(_0x580bf5), void _0xbc1037(_0x27d4dc);
							new Date()['getTime']() - _0x478993 > _0x265e41 && (clearInterval(_0x580bf5), _0x52822a && _0x52822a(_0x27d4dc));
						}, _0x57c77f);
				}
			}
		},
		'isFontLoaded': function(_0x2e0cd6) {
			var _0x39a51 = 0x0,
				_0x5960c3 = 0x0;
			_0x2f548a || _0x48b0c9();
			for (var _0xd0f9e3 = 0x0; _0xd0f9e3 < _0x1b60a6['length']; ++_0xd0f9e3) {
				if (_0x56f21e['style']['fontFamily'] = '\x22' + _0x2e0cd6 + '\x22,' + _0x1b60a6[_0xd0f9e3], _0x39a51 = _0x56f21e['offsetWidth'], 0x0 < _0xd0f9e3 && _0x39a51 != _0x5960c3) return !0x1;
				_0x5960c3 = _0x39a51;
			}
			return !0x0;
		},
		'whichFont': function(_0x49dff8) {
			_0x49dff8 = (_0x49dff8 instanceof Element ? window['getComputedStyle'](_0x49dff8)['getPropertyValue']('font-family') : window['jQuery'] ? $(_0x49dff8)['css']('font-family') : '')['split'](',');
			for (var _0x3a77c0 = _0x49dff8['shift'](); _0x3a77c0;) {
				for (var _0x3a77c0 = _0x3a77c0['replace'](/^\s*['"]?\s*([^'"]*)\s*['"]?\s*$/, '$1'), _0x46aee0 = 0x0; _0x46aee0 < _0x1b60a6['length']; _0x46aee0++)
					if (_0x3a77c0 == _0x1b60a6[_0x46aee0]) return _0x3a77c0;
				if (this['isFontLoaded'](_0x3a77c0)) return _0x3a77c0;
				_0x3a77c0 = _0x49dff8['shift']();
			}
			return null;
		}
	};
}();
var _SETTINGS = {
	'API': {
		'Enabled': !0x0,
		'Log': {
			'Events': {
				'InitializeGame': !0x0,
				'EndGame': !0x0,
				'Level': {
					'Begin': !0x0,
					'End': !0x0,
					'Win': !0x0,
					'Lose': !0x0,
					'Draw': !0x0
				}
			}
		}
	},
	'Ad': {
		'Mobile': {
			'Preroll': {
				'Enabled': !0x1,
				'Duration': 0x5,
				'Width': 0x12c,
				'Height': 0xfa,
				'Rotation': {
					'Enabled': !0x1,
					'Weight': {
						'MobileAdInGamePreroll': 0x28,
						'MobileAdInGamePreroll2': 0x28,
						'MobileAdInGamePreroll3': 0x14
					}
				}
			},
			'Header': {
				'Enabled': !0x1,
				'Duration': 0x5,
				'Width': 0x140,
				'Height': 0x32,
				'Rotation': {
					'Enabled': !0x1,
					'Weight': {
						'MobileAdInGameHeader': 0x28,
						'MobileAdInGameHeader2': 0x28,
						'MobileAdInGameHeader3': 0x14
					}
				}
			},
			'Footer': {
				'Enabled': !0x1,
				'Duration': 0x5,
				'Width': 0x140,
				'Height': 0x32,
				'Rotation': {
					'Enabled': !0x1,
					'Weight': {
						'MobileAdInGameFooter': 0x28,
						'MobileAdInGameFooter2': 0x28,
						'MobileAdInGameFooter3': 0x14
					}
				}
			},
			'End': {
				'Enabled': !0x1,
				'Duration': 0x1,
				'Width': 0x12c,
				'Height': 0xfa,
				'Rotation': {
					'Enabled': !0x1,
					'Weight': {
						'MobileAdInGameEnd': 0x28,
						'MobileAdInGameEnd2': 0x28,
						'MobileAdInGameEnd3': 0x14
					}
				}
			}
		}
	},
	'Language': {
		'Default': 'en'
	},
	'DeveloperBranding': {
		'Splash': {
			'Enabled': !0x1
		},
		'Logo': {
			'Enabled': !0x1,
			'Link': 'http://google.com',
			'LinkEnabled': !0x1,
			'NewWindow': !0x0,
			'Width': 0xa6,
			'Height': 0x3d
		}
	},
	'Branding': {
		'Splash': {
			'Enabled': !0x1
		},
		'Logo': {
			'Enabled': !0x0,
			'Link': 'http://google.com',
			'LinkEnabled': !0x1,
			'NewWindow': !0x0,
			'Width': 0xa6,
			'Height': 0x3d
		}
	},
	'MoreGames': {
		'Enabled': !0x1,
		'Link': 'http://www.marketjs.com/game/links/mobile',
		'NewWindow': !0x0
	}
};
var MobileAdInGamePreroll = {
	'ad_duration': _SETTINGS['Ad']['Mobile']['Preroll']['Duration'],
	'ad_width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'],
	'ad_height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'],
	'ready_in': _STRINGS['Ad']['Mobile']['Preroll']['ReadyIn'],
	'loading': _STRINGS['Ad']['Mobile']['Preroll']['Loading'],
	'close': _STRINGS['Ad']['Mobile']['Preroll']['Close'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	'Initialize': function() {
		if (_SETTINGS['Ad']['Mobile']['Preroll']['Rotation']['Enabled']) {
			var _0x437e79 = _SETTINGS['Ad']['Mobile']['Preroll']['Rotation']['Weight'],
				_0x311fb0 = _0x437e79['MobileAdInGamePreroll'],
				_0x5a5551 = _0x311fb0 + _0x437e79['MobileAdInGamePreroll2'],
				_0x437e79 = _0x5a5551 + _0x437e79['MobileAdInGamePreroll3'],
				_0x2bf7f0 = Math['floor'](0x64 * Math['random']());
			console['log']('seed:\x20', _0x2bf7f0);
			_0x2bf7f0 <= _0x311fb0 ? this['selectedOverlayName'] = 'MobileAdInGamePreroll' : _0x2bf7f0 <= _0x5a5551 ? this['selectedOverlayName'] = 'MobileAdInGamePreroll2' : _0x2bf7f0 <= _0x437e79 && (this['selectedOverlayName'] = 'MobileAdInGamePreroll3');
			console['log']('Ad\x20rotating\x20preroll\x20enabled');
		} else this['selectedOverlayName'] = 'MobileAdInGamePreroll', console['log']('Ad\x20rotating\x20preroll\x20disabled');
		console['log']('selected:', this['selectedOverlayName']);
		this['overlay'] = $('#' + this['selectedOverlayName']);
		this['box'] = $('#' + this['selectedOverlayName'] + '-Box');
		this['game'] = $('#game');
		this['boxContents'] = {
			'footer': $('#' + this['selectedOverlayName'] + '-Box-Footer'),
			'header': $('#' + this['selectedOverlayName'] + '-Box-Header'),
			'close': $('#' + this['selectedOverlayName'] + '-Box-Close'),
			'body': $('#' + this['selectedOverlayName'] + '-Box-Body')
		};
		this['box']['width'](this['ad_width']);
		this['box']['height'](this['ad_height']);
		this['box']['css']('left', (this['overlay']['width']() - this['box']['width']()) / 0x2);
		this['box']['css']('top', (this['overlay']['height']() - this['box']['height']() - this['boxContents']['header']['height']() - this['boxContents']['footer']['height']()) / 0x2);
		this['overlay']['show'](this['Timer'](this['ad_duration']));
	},
	'Timer': function(_0x49a603) {
		var _0x112e1a = _0x49a603,
			_0x3c7c4d = setInterval(function() {
				MobileAdInGamePreroll['boxContents']['header']['text'](MobileAdInGamePreroll['ready_in'] + _0x112e1a + '...');
				MobileAdInGamePreroll['boxContents']['footer']['text'](MobileAdInGamePreroll['loading']);
				_0x112e1a--;
				0x0 > _0x112e1a && (clearInterval(_0x3c7c4d), MobileAdInGamePreroll['boxContents']['close']['css']('left', MobileAdInGamePreroll['boxContents']['body']['width']() - 0x17), MobileAdInGamePreroll['boxContents']['close']['show'](), MobileAdInGamePreroll['boxContents']['header']['html'](MobileAdInGamePreroll['close']), MobileAdInGamePreroll['boxContents']['footer']['text'](''));
			}, 0x3e8);
	},
	'Close': function() {
		this['boxContents']['close']['hide']();
		this['overlay']['hide']();
	}
};
var MobileAdInGameHeader = {
	'ad_duration': _SETTINGS['Ad']['Mobile']['Header']['Duration'],
	'ad_width': _SETTINGS['Ad']['Mobile']['Header']['Width'],
	'ad_height': _SETTINGS['Ad']['Mobile']['Header']['Height'],
	'Initialize': function() {
		if (_SETTINGS['Ad']['Mobile']['Header']['Rotation']['Enabled']) {
			var _0x388040 = _SETTINGS['Ad']['Mobile']['Header']['Rotation']['Weight'],
				_0x368c4b = _0x388040['MobileAdInGameHeader'],
				_0x916e17 = _0x368c4b + _0x388040['MobileAdInGameHeader2'],
				_0x388040 = _0x916e17 + _0x388040['MobileAdInGameHeader3'],
				_0x199059 = Math['floor'](0x64 * Math['random']());
			console['log']('seed:\x20', _0x199059);
			_0x199059 <= _0x368c4b ? this['selectedOverlayName'] = 'MobileAdInGameHeader' : _0x199059 <= _0x916e17 ? this['selectedOverlayName'] = 'MobileAdInGameHeader2' : _0x199059 <= _0x388040 && (this['selectedOverlayName'] = 'MobileAdInGameHeader3');
			console['log']('Ad\x20rotating\x20header\x20enabled');
		} else this['selectedOverlayName'] = 'MobileAdInGameHeader', console['log']('Ad\x20rotating\x20header\x20disabled');
		this['div'] = $('#' + this['selectedOverlayName']);
		this['game'] = $('#game');
		this['div']['width'](this['ad_width']);
		this['div']['height'](this['ad_height']);
		this['div']['css']('left', this['game']['position']()['left'] + (this['game']['width']() - this['div']['width']()) / 0x2);
		this['div']['css']('top', 0x0);
		this['div']['show'](this['Timer'](this['ad_duration']));
	},
	'Timer': function(_0x51e905) {
		var _0x5e89d3 = setInterval(function() {
			_0x51e905--;
			0x0 > _0x51e905 && (MobileAdInGameHeader['div']['hide'](), clearInterval(_0x5e89d3));
		}, 0x3e8);
	}
};
var MobileAdInGameFooter = {
	'ad_duration': _SETTINGS['Ad']['Mobile']['Footer']['Duration'],
	'ad_width': _SETTINGS['Ad']['Mobile']['Footer']['Width'],
	'ad_height': _SETTINGS['Ad']['Mobile']['Footer']['Height'],
	'Initialize': function() {
		if (_SETTINGS['Ad']['Mobile']['Footer']['Rotation']['Enabled']) {
			var _0x5b98e3 = _SETTINGS['Ad']['Mobile']['Footer']['Rotation']['Weight'],
				_0x237dde = _0x5b98e3['MobileAdInGameFooter'],
				_0x18e29e = _0x237dde + _0x5b98e3['MobileAdInGameFooter2'],
				_0x5b98e3 = _0x18e29e + _0x5b98e3['MobileAdInGameFooter3'],
				_0x5372e9 = Math['floor'](0x64 * Math['random']());
			console['log']('seed:\x20', _0x5372e9);
			_0x5372e9 <= _0x237dde ? this['selectedOverlayName'] = 'MobileAdInGameFooter' : _0x5372e9 <= _0x18e29e ? this['selectedOverlayName'] = 'MobileAdInGameFooter2' : _0x5372e9 <= _0x5b98e3 && (this['selectedOverlayName'] = 'MobileAdInGameFooter3');
			console['log']('Ad\x20rotating\x20footer\x20enabled');
		} else this['selectedOverlayName'] = 'MobileAdInGameFooter', console['log']('Ad\x20rotating\x20footer\x20disabled');
		this['div'] = $('#' + this['selectedOverlayName']);
		this['game'] = $('#game');
		this['div']['width'](this['ad_width']);
		this['div']['height'](this['ad_height']);
		this['div']['css']('left', this['game']['position']()['left'] + (this['game']['width']() - this['div']['width']()) / 0x2);
		this['div']['css']('top', this['game']['height']() - this['div']['height']() - 0x5);
		this['div']['show'](this['Timer'](this['ad_duration']));
	},
	'Timer': function(_0x2199b1) {
		var _0x4a2a36 = setInterval(function() {
			_0x2199b1--;
			0x0 > _0x2199b1 && (MobileAdInGameFooter['div']['hide'](), clearInterval(_0x4a2a36));
		}, 0x3e8);
	}
};
var MobileAdInGameEnd = {
	'ad_duration': _SETTINGS['Ad']['Mobile']['End']['Duration'],
	'ad_width': _SETTINGS['Ad']['Mobile']['End']['Width'],
	'ad_height': _SETTINGS['Ad']['Mobile']['End']['Height'],
	'ready_in': _STRINGS['Ad']['Mobile']['End']['ReadyIn'],
	'loading': _STRINGS['Ad']['Mobile']['End']['Loading'],
	'close': _STRINGS['Ad']['Mobile']['End']['Close'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	'Initialize': function() {
		if (_SETTINGS['Ad']['Mobile']['End']['Rotation']['Enabled']) {
			var _0x3306e7 = _SETTINGS['Ad']['Mobile']['End']['Rotation']['Weight'],
				_0xeffb48 = _0x3306e7['MobileAdInGameEnd'],
				_0xe4ed73 = _0xeffb48 + _0x3306e7['MobileAdInGameEnd2'],
				_0x3306e7 = _0xe4ed73 + _0x3306e7['MobileAdInGameEnd3'],
				_0x198f28 = Math['floor'](0x64 * Math['random']());
			console['log']('seed:\x20', _0x198f28);
			_0x198f28 <= _0xeffb48 ? this['selectedOverlayName'] = 'MobileAdInGameEnd' : _0x198f28 <= _0xe4ed73 ? this['selectedOverlayName'] = 'MobileAdInGameEnd2' : _0x198f28 <= _0x3306e7 && (this['selectedOverlayName'] = 'MobileAdInGameEnd3');
			console['log']('Ad\x20rotating\x20end\x20enabled');
		} else this['selectedOverlayName'] = 'MobileAdInGameEnd', console['log']('Ad\x20rotating\x20end\x20disabled');
		console['log']('selected:', this['selectedOverlayName']);
		this['overlay'] = $('#' + this['selectedOverlayName']);
		this['box'] = $('#' + this['selectedOverlayName'] + '-Box');
		this['game'] = $('#game');
		this['boxContents'] = {
			'footer': $('#' + this['selectedOverlayName'] + '-Box-Footer'),
			'header': $('#' + this['selectedOverlayName'] + '-Box-Header'),
			'close': $('#' + this['selectedOverlayName'] + '-Box-Close'),
			'body': $('#' + this['selectedOverlayName'] + '-Box-Body')
		};
		this['box']['width'](this['ad_width']);
		this['box']['height'](this['ad_height']);
		this['box']['css']('left', (this['overlay']['width']() - this['box']['width']()) / 0x2);
		this['box']['css']('top', (this['overlay']['height']() - this['box']['height']() - this['boxContents']['header']['height']() - this['boxContents']['footer']['height']()) / 0x2);
		this['overlay']['show'](this['Timer'](this['ad_duration']));
	},
	'Timer': function(_0x58d18a) {
		var _0x4d5a54 = _0x58d18a,
			_0x75535e = setInterval(function() {
				MobileAdInGameEnd['boxContents']['header']['text'](MobileAdInGameEnd['ready_in'] + _0x4d5a54 + '...');
				MobileAdInGameEnd['boxContents']['footer']['text'](MobileAdInGameEnd['loading']);
				_0x4d5a54--;
				0x0 > _0x4d5a54 && (clearInterval(_0x75535e), MobileAdInGameEnd['boxContents']['close']['css']('left', MobileAdInGameEnd['boxContents']['body']['width']() - 0x17), MobileAdInGameEnd['boxContents']['close']['show'](), MobileAdInGameEnd['boxContents']['header']['html'](MobileAdInGameEnd['close']), MobileAdInGameEnd['boxContents']['footer']['text'](''));
			}, 0x3e8);
	},
	'Close': function() {
		this['boxContents']['close']['hide']();
		this['overlay']['hide']();
	}
};
! function(_0x3f99ad, _0x2f24d2) {
	'object' == typeof module && 'object' == typeof module['exports'] ? module['exports'] = _0x3f99ad['document'] ? _0x2f24d2(_0x3f99ad, !0x0) : function(_0x30490b) {
		if (!_0x30490b['document']) throw Error('jQuery\x20requires\x20a\x20window\x20with\x20a\x20document');
		return _0x2f24d2(_0x30490b);
	} : _0x2f24d2(_0x3f99ad);
}('undefined' != typeof window ? window : this, function(_0x250f7b, _0x47856c) {
	function _0x585f59(_0x227404, _0x4289b7) {
		_0x4289b7 = _0x4289b7 || _0x28899d;
		var _0x4aca03 = _0x4289b7['createElement']('script');
		_0x4aca03['text'] = _0x227404;
		_0x4289b7['head']['appendChild'](_0x4aca03)['parentNode']['removeChild'](_0x4aca03);
	}

	function _0x493c66(_0x217853) {
		var _0x21aba5 = !!_0x217853 && 'length' in _0x217853 && _0x217853['length'],
			_0x3caa30 = _0x33c3a4['type'](_0x217853);
		return 'function' !== _0x3caa30 && !_0x33c3a4['isWindow'](_0x217853) && ('array' === _0x3caa30 || 0x0 === _0x21aba5 || 'number' == typeof _0x21aba5 && 0x0 < _0x21aba5 && _0x21aba5 - 0x1 in _0x217853);
	}

	function _0x6b228b(_0x23c8ca, _0x42ce80) {
		return _0x23c8ca['nodeName'] && _0x23c8ca['nodeName']['toLowerCase']() === _0x42ce80['toLowerCase']();
	}

	function _0x4c3f39(_0x478955, _0x56a734, _0x5e9e46) {
		return _0x33c3a4['isFunction'](_0x56a734) ? _0x33c3a4['grep'](_0x478955, function(_0xf2afe4, _0x5af0d4) {
			return !!_0x56a734['call'](_0xf2afe4, _0x5af0d4, _0xf2afe4) !== _0x5e9e46;
		}) : _0x56a734['nodeType'] ? _0x33c3a4['grep'](_0x478955, function(_0x3b98d0) {
			return _0x3b98d0 === _0x56a734 !== _0x5e9e46;
		}) : 'string' != typeof _0x56a734 ? _0x33c3a4['grep'](_0x478955, function(_0xc57aa5) {
			return -0x1 < _0x2ec965['call'](_0x56a734, _0xc57aa5) !== _0x5e9e46;
		}) : _0x4544eb['test'](_0x56a734) ? _0x33c3a4['filter'](_0x56a734, _0x478955, _0x5e9e46) : (_0x56a734 = _0x33c3a4['filter'](_0x56a734, _0x478955), _0x33c3a4['grep'](_0x478955, function(_0x483c78) {
			return -0x1 < _0x2ec965['call'](_0x56a734, _0x483c78) !== _0x5e9e46 && 0x1 === _0x483c78['nodeType'];
		}));
	}

	function _0x4c4d3c(_0x1fc047, _0x59bead) {
		for (;
			(_0x1fc047 = _0x1fc047[_0x59bead]) && 0x1 !== _0x1fc047['nodeType'];);
		return _0x1fc047;
	}

	function _0x404321(_0xf8bfb8) {
		return _0xf8bfb8;
	}

	function _0x47c5c9(_0x40ae6e) {
		throw _0x40ae6e;
	}

	function _0x4b730f(_0x379954, _0x419409, _0x36d26b, _0x2ec330) {
		var _0xdcc29e;
		try {
			_0x379954 && _0x33c3a4['isFunction'](_0xdcc29e = _0x379954['promise']) ? _0xdcc29e['call'](_0x379954)['done'](_0x419409)['fail'](_0x36d26b) : _0x379954 && _0x33c3a4['isFunction'](_0xdcc29e = _0x379954['then']) ? _0xdcc29e['call'](_0x379954, _0x419409, _0x36d26b) : _0x419409['apply'](void 0x0, [_0x379954]['slice'](_0x2ec330));
		} catch (_0x177440) {
			_0x36d26b['apply'](void 0x0, [_0x177440]);
		}
	}

	function _0x202865() {
		_0x28899d['removeEventListener']('DOMContentLoaded', _0x202865);
		_0x250f7b['removeEventListener']('load', _0x202865);
		_0x33c3a4['ready']();
	}

	function _0xbf771f() {
		this['expando'] = _0x33c3a4['expando'] + _0xbf771f['uid']++;
	}

	function _0x14201f(_0x3ab91a, _0x3427f0, _0x1c18a9) {
		var _0x3daa0b;
		if (void 0x0 === _0x1c18a9 && 0x1 === _0x3ab91a['nodeType'])
			if (_0x3daa0b = 'data-' + _0x3427f0['replace'](_0x49f69d, '-$&')['toLowerCase'](), _0x1c18a9 = _0x3ab91a['getAttribute'](_0x3daa0b), 'string' == typeof _0x1c18a9) {
				try {
					_0x1c18a9 = 'true' === _0x1c18a9 || 'false' !== _0x1c18a9 && ('null' === _0x1c18a9 ? null : _0x1c18a9 === +_0x1c18a9 + '' ? +_0x1c18a9 : _0x3504c8['test'](_0x1c18a9) ? JSON['parse'](_0x1c18a9) : _0x1c18a9);
				} catch (_0x43d265) {}
				_0x484a40['set'](_0x3ab91a, _0x3427f0, _0x1c18a9);
			} else _0x1c18a9 = void 0x0;
		return _0x1c18a9;
	}

	function _0x4ea0cf(_0x4e40d3, _0x375928, _0x1b1eda, _0x5d430f) {
		var _0x1d4cfe, _0x2c7cb9 = 0x1,
			_0x232f27 = 0x14,
			_0x3a714f = _0x5d430f ? function() {
				return _0x5d430f['cur']();
			} : function() {
				return _0x33c3a4['css'](_0x4e40d3, _0x375928, '');
			},
			_0xcb7b8 = _0x3a714f(),
			_0x2c1e05 = _0x1b1eda && _0x1b1eda[0x3] || (_0x33c3a4['cssNumber'][_0x375928] ? '' : 'px'),
			_0x41d8b5 = (_0x33c3a4['cssNumber'][_0x375928] || 'px' !== _0x2c1e05 && +_0xcb7b8) && _0xd7dcb2['exec'](_0x33c3a4['css'](_0x4e40d3, _0x375928));
		if (_0x41d8b5 && _0x41d8b5[0x3] !== _0x2c1e05) {
			_0x2c1e05 = _0x2c1e05 || _0x41d8b5[0x3];
			_0x1b1eda = _0x1b1eda || [];
			_0x41d8b5 = +_0xcb7b8 || 0x1;
			do _0x2c7cb9 = _0x2c7cb9 || '.5', _0x41d8b5 /= _0x2c7cb9, _0x33c3a4['style'](_0x4e40d3, _0x375928, _0x41d8b5 + _0x2c1e05); while (_0x2c7cb9 !== (_0x2c7cb9 = _0x3a714f() / _0xcb7b8) && 0x1 !== _0x2c7cb9 && --_0x232f27);
		}
		return _0x1b1eda && (_0x41d8b5 = +_0x41d8b5 || +_0xcb7b8 || 0x0, _0x1d4cfe = _0x1b1eda[0x1] ? _0x41d8b5 + (_0x1b1eda[0x1] + 0x1) * _0x1b1eda[0x2] : +_0x1b1eda[0x2], _0x5d430f && (_0x5d430f['unit'] = _0x2c1e05, _0x5d430f['start'] = _0x41d8b5, _0x5d430f['end'] = _0x1d4cfe)), _0x1d4cfe;
	}

	function _0x2ab91(_0x2962c1, _0xd8c3ac) {
		for (var _0x56290a, _0x52100c, _0xf64de9 = [], _0x4ad8f6 = 0x0, _0x2c55db = _0x2962c1['length']; _0x4ad8f6 < _0x2c55db; _0x4ad8f6++)
			if (_0x52100c = _0x2962c1[_0x4ad8f6], _0x52100c['style'])
				if (_0x56290a = _0x52100c['style']['display'], _0xd8c3ac) {
					if ('none' === _0x56290a && (_0xf64de9[_0x4ad8f6] = _0x30b773['get'](_0x52100c, 'display') || null, _0xf64de9[_0x4ad8f6] || (_0x52100c['style']['display'] = '')), '' === _0x52100c['style']['display'] && _0x47483f(_0x52100c)) {
						_0x56290a = _0xf64de9;
						var _0x1b232c = _0x4ad8f6,
							_0x9fb25, _0xfd334 = void 0x0;
						_0x9fb25 = _0x52100c['ownerDocument'];
						var _0x1fadd6 = _0x52100c['nodeName'];
						_0x9fb25 = (_0x52100c = _0x58b170[_0x1fadd6]) ? _0x52100c : (_0xfd334 = _0x9fb25['body']['appendChild'](_0x9fb25['createElement'](_0x1fadd6)), _0x52100c = _0x33c3a4['css'](_0xfd334, 'display'), _0xfd334['parentNode']['removeChild'](_0xfd334), 'none' === _0x52100c && (_0x52100c = 'block'), _0x58b170[_0x1fadd6] = _0x52100c, _0x52100c);
						_0x56290a[_0x1b232c] = _0x9fb25;
					}
				} else 'none' !== _0x56290a && (_0xf64de9[_0x4ad8f6] = 'none', _0x30b773['set'](_0x52100c, 'display', _0x56290a));
		for (_0x4ad8f6 = 0x0; _0x4ad8f6 < _0x2c55db; _0x4ad8f6++) null != _0xf64de9[_0x4ad8f6] && (_0x2962c1[_0x4ad8f6]['style']['display'] = _0xf64de9[_0x4ad8f6]);
		return _0x2962c1;
	}

	function _0x405422(_0x5c7c3d, _0x366815) {
		var _0x37d4c8;
		return _0x37d4c8 = 'undefined' != typeof _0x5c7c3d['getElementsByTagName'] ? _0x5c7c3d['getElementsByTagName'](_0x366815 || '*') : 'undefined' != typeof _0x5c7c3d['querySelectorAll'] ? _0x5c7c3d['querySelectorAll'](_0x366815 || '*') : [], void 0x0 === _0x366815 || _0x366815 && _0x6b228b(_0x5c7c3d, _0x366815) ? _0x33c3a4['merge']([_0x5c7c3d], _0x37d4c8) : _0x37d4c8;
	}

	function _0x55113e(_0x498b25, _0x5dcdb5) {
		for (var _0x34e26c = 0x0, _0x42cd8b = _0x498b25['length']; _0x34e26c < _0x42cd8b; _0x34e26c++) _0x30b773['set'](_0x498b25[_0x34e26c], 'globalEval', !_0x5dcdb5 || _0x30b773['get'](_0x5dcdb5[_0x34e26c], 'globalEval'));
	}

	function _0x5a7340(_0x1194b2, _0x2915f3, _0x1ac98e, _0x30bf1a, _0x3c7730) {
		for (var _0x295aca, _0xdc37fc, _0x264680, _0x40572e, _0x5240bc = _0x2915f3['createDocumentFragment'](), _0x50493f = [], _0x4ac3d9 = 0x0, _0x5af93a = _0x1194b2['length']; _0x4ac3d9 < _0x5af93a; _0x4ac3d9++)
			if (_0x295aca = _0x1194b2[_0x4ac3d9], _0x295aca || 0x0 === _0x295aca)
				if ('object' === _0x33c3a4['type'](_0x295aca)) _0x33c3a4['merge'](_0x50493f, _0x295aca['nodeType'] ? [_0x295aca] : _0x295aca);
				else if (_0x192af1['test'](_0x295aca)) {
			_0xdc37fc = _0xdc37fc || _0x5240bc['appendChild'](_0x2915f3['createElement']('div'));
			_0x264680 = (_0x5e3a51['exec'](_0x295aca) || ['', ''])[0x1]['toLowerCase']();
			_0x264680 = _0x4c5dbb[_0x264680] || _0x4c5dbb['_default'];
			_0xdc37fc['innerHTML'] = _0x264680[0x1] + _0x33c3a4['htmlPrefilter'](_0x295aca) + _0x264680[0x2];
			for (_0x264680 = _0x264680[0x0]; _0x264680--;) _0xdc37fc = _0xdc37fc['lastChild'];
			_0x33c3a4['merge'](_0x50493f, _0xdc37fc['childNodes']);
			_0xdc37fc = _0x5240bc['firstChild'];
			_0xdc37fc['textContent'] = '';
		} else _0x50493f['push'](_0x2915f3['createTextNode'](_0x295aca));
		_0x5240bc['textContent'] = '';
		for (_0x4ac3d9 = 0x0; _0x295aca = _0x50493f[_0x4ac3d9++];)
			if (_0x30bf1a && -0x1 < _0x33c3a4['inArray'](_0x295aca, _0x30bf1a)) _0x3c7730 && _0x3c7730['push'](_0x295aca);
			else if (_0x40572e = _0x33c3a4['contains'](_0x295aca['ownerDocument'], _0x295aca), _0xdc37fc = _0x405422(_0x5240bc['appendChild'](_0x295aca), 'script'), _0x40572e && _0x55113e(_0xdc37fc), _0x1ac98e)
			for (_0x264680 = 0x0; _0x295aca = _0xdc37fc[_0x264680++];) _0x4e5bb4['test'](_0x295aca['type'] || '') && _0x1ac98e['push'](_0x295aca);
		return _0x5240bc;
	}

	function _0x22d43c() {
		return !0x0;
	}

	function _0x3a3839() {
		return !0x1;
	}

	function _0xd90164() {
		try {
			return _0x28899d['activeElement'];
		} catch (_0x1bd0d3) {}
	}

	function _0x446b17(_0x49f7bb, _0x7387ea, _0x58cab4, _0x5f0894, _0x303090, _0x2b2d59) {
		var _0x3432ac, _0x588cf6;
		if ('object' == typeof _0x7387ea) {
			'string' != typeof _0x58cab4 && (_0x5f0894 = _0x5f0894 || _0x58cab4, _0x58cab4 = void 0x0);
			for (_0x588cf6 in _0x7387ea) _0x446b17(_0x49f7bb, _0x588cf6, _0x58cab4, _0x5f0894, _0x7387ea[_0x588cf6], _0x2b2d59);
			return _0x49f7bb;
		}
		if (null == _0x5f0894 && null == _0x303090 ? (_0x303090 = _0x58cab4, _0x5f0894 = _0x58cab4 = void 0x0) : null == _0x303090 && ('string' == typeof _0x58cab4 ? (_0x303090 = _0x5f0894, _0x5f0894 = void 0x0) : (_0x303090 = _0x5f0894, _0x5f0894 = _0x58cab4, _0x58cab4 = void 0x0)), !0x1 === _0x303090) _0x303090 = _0x3a3839;
		else if (!_0x303090) return _0x49f7bb;
		return 0x1 === _0x2b2d59 && (_0x3432ac = _0x303090, _0x303090 = function(_0x1ab883) {
			return _0x33c3a4()['off'](_0x1ab883), _0x3432ac['apply'](this, arguments);
		}, _0x303090['guid'] = _0x3432ac['guid'] || (_0x3432ac['guid'] = _0x33c3a4['guid']++)), _0x49f7bb['each'](function() {
			_0x33c3a4['event']['add'](this, _0x7387ea, _0x303090, _0x5f0894, _0x58cab4);
		});
	}

	function _0x231066(_0x263763, _0x38bd8b) {
		return _0x6b228b(_0x263763, 'table') && _0x6b228b(0xb !== _0x38bd8b['nodeType'] ? _0x38bd8b : _0x38bd8b['firstChild'], 'tr') ? _0x33c3a4('>tbody', _0x263763)[0x0] || _0x263763 : _0x263763;
	}

	function _0x1592b7(_0x1711a0) {
		return _0x1711a0['type'] = (null !== _0x1711a0['getAttribute']('type')) + '/' + _0x1711a0['type'], _0x1711a0;
	}

	function _0x4cc0ba(_0x530e05) {
		var _0x4a50ec = _0x1727fb['exec'](_0x530e05['type']);
		return _0x4a50ec ? _0x530e05['type'] = _0x4a50ec[0x1] : _0x530e05['removeAttribute']('type'), _0x530e05;
	}

	function _0x567c3c(_0xe542ae, _0x68ecfb) {
		var _0x595d1a, _0x8e146a, _0x1d601e, _0x1bd265, _0xfd7998, _0x2d47da;
		if (0x1 === _0x68ecfb['nodeType']) {
			if (_0x30b773['hasData'](_0xe542ae) && (_0x595d1a = _0x30b773['access'](_0xe542ae), _0x8e146a = _0x30b773['set'](_0x68ecfb, _0x595d1a), _0x2d47da = _0x595d1a['events']))
				for (_0x1d601e in (delete _0x8e146a['handle'], _0x8e146a['events'] = {}, _0x2d47da)) {
					_0x595d1a = 0x0;
					for (_0x8e146a = _0x2d47da[_0x1d601e]['length']; _0x595d1a < _0x8e146a; _0x595d1a++) _0x33c3a4['event']['add'](_0x68ecfb, _0x1d601e, _0x2d47da[_0x1d601e][_0x595d1a]);
				}
			_0x484a40['hasData'](_0xe542ae) && (_0x1bd265 = _0x484a40['access'](_0xe542ae), _0xfd7998 = _0x33c3a4['extend']({}, _0x1bd265), _0x484a40['set'](_0x68ecfb, _0xfd7998));
		}
	}

	function _0x2a5842(_0x457ad0, _0x4485ba, _0x1aea7c, _0x1af1b7) {
		_0x4485ba = _0x12920c['apply']([], _0x4485ba);
		var _0x4bab9f, _0x26c724, _0x2738c3, _0x5caa69, _0x43d3af = 0x0,
			_0x303dad = _0x457ad0['length'],
			_0x52604a = _0x303dad - 0x1,
			_0x1b493f = _0x4485ba[0x0],
			_0x11ddad = _0x33c3a4['isFunction'](_0x1b493f);
		if (_0x11ddad || 0x1 < _0x303dad && 'string' == typeof _0x1b493f && !_0x15f358['checkClone'] && _0x6742f4['test'](_0x1b493f)) return _0x457ad0['each'](function(_0x54c396) {
			var _0x55910d = _0x457ad0['eq'](_0x54c396);
			_0x11ddad && (_0x4485ba[0x0] = _0x1b493f['call'](this, _0x54c396, _0x55910d['html']()));
			_0x2a5842(_0x55910d, _0x4485ba, _0x1aea7c, _0x1af1b7);
		});
		if (_0x303dad && (_0x4bab9f = _0x5a7340(_0x4485ba, _0x457ad0[0x0]['ownerDocument'], !0x1, _0x457ad0, _0x1af1b7), _0x26c724 = _0x4bab9f['firstChild'], 0x1 === _0x4bab9f['childNodes']['length'] && (_0x4bab9f = _0x26c724), _0x26c724 || _0x1af1b7)) {
			_0x26c724 = _0x33c3a4['map'](_0x405422(_0x4bab9f, 'script'), _0x1592b7);
			for (_0x2738c3 = _0x26c724['length']; _0x43d3af < _0x303dad; _0x43d3af++) _0x5caa69 = _0x4bab9f, _0x43d3af !== _0x52604a && (_0x5caa69 = _0x33c3a4['clone'](_0x5caa69, !0x0, !0x0), _0x2738c3 && _0x33c3a4['merge'](_0x26c724, _0x405422(_0x5caa69, 'script'))), _0x1aea7c['call'](_0x457ad0[_0x43d3af], _0x5caa69, _0x43d3af);
			if (_0x2738c3) {
				_0x4bab9f = _0x26c724[_0x26c724['length'] - 0x1]['ownerDocument'];
				_0x33c3a4['map'](_0x26c724, _0x4cc0ba);
				for (_0x43d3af = 0x0; _0x43d3af < _0x2738c3; _0x43d3af++) _0x5caa69 = _0x26c724[_0x43d3af], _0x4e5bb4['test'](_0x5caa69['type'] || '') && !_0x30b773['access'](_0x5caa69, 'globalEval') && _0x33c3a4['contains'](_0x4bab9f, _0x5caa69) && (_0x5caa69['src'] ? _0x33c3a4['_evalUrl'] && _0x33c3a4['_evalUrl'](_0x5caa69['src']) : _0x585f59(_0x5caa69['textContent']['replace'](_0x488f8b, ''), _0x4bab9f));
			}
		}
		return _0x457ad0;
	}

	function _0xe4e1d1(_0x5f0d72, _0x62e0c, _0x474432) {
		for (var _0x7af684 = _0x62e0c ? _0x33c3a4['filter'](_0x62e0c, _0x5f0d72) : _0x5f0d72, _0x6c0e66 = 0x0; null != (_0x62e0c = _0x7af684[_0x6c0e66]); _0x6c0e66++) _0x474432 || 0x1 !== _0x62e0c['nodeType'] || _0x33c3a4['cleanData'](_0x405422(_0x62e0c)), _0x62e0c['parentNode'] && (_0x474432 && _0x33c3a4['contains'](_0x62e0c['ownerDocument'], _0x62e0c) && _0x55113e(_0x405422(_0x62e0c, 'script')), _0x62e0c['parentNode']['removeChild'](_0x62e0c));
		return _0x5f0d72;
	}

	function _0x357bb3(_0x2d3518, _0x90c1cb, _0x3e1c59) {
		var _0x2d73c9, _0x324bbf, _0x185056, _0x15fe98, _0x1eeaf9 = _0x2d3518['style'];
		return _0x3e1c59 = _0x3e1c59 || _0x19598d(_0x2d3518), _0x3e1c59 && (_0x15fe98 = _0x3e1c59['getPropertyValue'](_0x90c1cb) || _0x3e1c59[_0x90c1cb], '' !== _0x15fe98 || _0x33c3a4['contains'](_0x2d3518['ownerDocument'], _0x2d3518) || (_0x15fe98 = _0x33c3a4['style'](_0x2d3518, _0x90c1cb)), !_0x15f358['pixelMarginRight']() && _0x83de2a['test'](_0x15fe98) && _0x464674['test'](_0x90c1cb) && (_0x2d73c9 = _0x1eeaf9['width'], _0x324bbf = _0x1eeaf9['minWidth'], _0x185056 = _0x1eeaf9['maxWidth'], _0x1eeaf9['minWidth'] = _0x1eeaf9['maxWidth'] = _0x1eeaf9['width'] = _0x15fe98, _0x15fe98 = _0x3e1c59['width'], _0x1eeaf9['width'] = _0x2d73c9, _0x1eeaf9['minWidth'] = _0x324bbf, _0x1eeaf9['maxWidth'] = _0x185056)), void 0x0 !== _0x15fe98 ? _0x15fe98 + '' : _0x15fe98;
	}

	function _0x2eedf0(_0x33ab07, _0x26b17c) {
		return {
			'get': function() {
				return _0x33ab07() ? void delete this['get'] : (this['get'] = _0x26b17c)['apply'](this, arguments);
			}
		};
	}

	function _0x3301a4(_0x41780a) {
		var _0x33739c = _0x33c3a4['cssProps'][_0x41780a];
		if (!_0x33739c) {
			var _0x33739c = _0x33c3a4['cssProps'],
				_0x247544;
			_0x577d69: if (_0x247544 = _0x41780a, !(_0x247544 in _0x4325d4)) {
				for (var _0x3ae911 = _0x247544[0x0]['toUpperCase']() + _0x247544['slice'](0x1), _0x319458 = _0x115ab5['length']; _0x319458--;)
					if (_0x247544 = _0x115ab5[_0x319458] + _0x3ae911, _0x247544 in _0x4325d4) break _0x577d69;
				_0x247544 = void 0x0;
			} _0x33739c = _0x33739c[_0x41780a] = _0x247544 || _0x41780a;
		}
		return _0x33739c;
	}

	function _0x476d2b(_0xf8def6, _0xddd4d7, _0x148f5f) {
		return (_0xf8def6 = _0xd7dcb2['exec'](_0xddd4d7)) ? Math['max'](0x0, _0xf8def6[0x2] - (_0x148f5f || 0x0)) + (_0xf8def6[0x3] || 'px') : _0xddd4d7;
	}

	function _0x5ac347(_0x2a465b, _0x5dc9aa, _0x5437a6, _0x39ad9b, _0x40146) {
		var _0x4c38c9 = 0x0;
		for (_0x5dc9aa = _0x5437a6 === (_0x39ad9b ? 'border' : 'content') ? 0x4 : 'width' === _0x5dc9aa ? 0x1 : 0x0; 0x4 > _0x5dc9aa; _0x5dc9aa += 0x2) 'margin' === _0x5437a6 && (_0x4c38c9 += _0x33c3a4['css'](_0x2a465b, _0x5437a6 + _0x528351[_0x5dc9aa], !0x0, _0x40146)), _0x39ad9b ? ('content' === _0x5437a6 && (_0x4c38c9 -= _0x33c3a4['css'](_0x2a465b, 'padding' + _0x528351[_0x5dc9aa], !0x0, _0x40146)), 'margin' !== _0x5437a6 && (_0x4c38c9 -= _0x33c3a4['css'](_0x2a465b, 'border' + _0x528351[_0x5dc9aa] + 'Width', !0x0, _0x40146))) : (_0x4c38c9 += _0x33c3a4['css'](_0x2a465b, 'padding' + _0x528351[_0x5dc9aa], !0x0, _0x40146), 'padding' !== _0x5437a6 && (_0x4c38c9 += _0x33c3a4['css'](_0x2a465b, 'border' + _0x528351[_0x5dc9aa] + 'Width', !0x0, _0x40146)));
		return _0x4c38c9;
	}

	function _0x3f517d(_0x32e045, _0x37f019, _0x1fed50) {
		var _0x3d0eca, _0x482d36 = _0x19598d(_0x32e045),
			_0xfffb70 = _0x357bb3(_0x32e045, _0x37f019, _0x482d36),
			_0x5c44e9 = 'border-box' === _0x33c3a4['css'](_0x32e045, 'boxSizing', !0x1, _0x482d36);
		return _0x83de2a['test'](_0xfffb70) ? _0xfffb70 : (_0x3d0eca = _0x5c44e9 && (_0x15f358['boxSizingReliable']() || _0xfffb70 === _0x32e045['style'][_0x37f019]), 'auto' === _0xfffb70 && (_0xfffb70 = _0x32e045['offset' + _0x37f019[0x0]['toUpperCase']() + _0x37f019['slice'](0x1)]), _0xfffb70 = parseFloat(_0xfffb70) || 0x0, _0xfffb70 + _0x5ac347(_0x32e045, _0x37f019, _0x1fed50 || (_0x5c44e9 ? 'border' : 'content'), _0x3d0eca, _0x482d36) + 'px');
	}

	function _0x29e3e5(_0x5dbaae, _0x50c994, _0x3e626e, _0x4f87a1, _0x151d21) {
		return new _0x29e3e5['prototype']['init'](_0x5dbaae, _0x50c994, _0x3e626e, _0x4f87a1, _0x151d21);
	}

	function _0x5c5fed() {
		_0x218ae3 && (!0x1 === _0x28899d['hidden'] && _0x250f7b['requestAnimationFrame'] ? _0x250f7b['requestAnimationFrame'](_0x5c5fed) : _0x250f7b['setTimeout'](_0x5c5fed, _0x33c3a4['fx']['interval']), _0x33c3a4['fx']['tick']());
	}

	function _0x5accb7() {
		return _0x250f7b['setTimeout'](function() {
			_0x3e65ea = void 0x0;
		}), _0x3e65ea = _0x33c3a4['now']();
	}

	function _0x2b408e(_0x4aee19, _0xdf72c8) {
		var _0x477334, _0x2ca311 = 0x0,
			_0x2c70c8 = {
				'height': _0x4aee19
			};
		for (_0xdf72c8 = _0xdf72c8 ? 0x1 : 0x0; 0x4 > _0x2ca311; _0x2ca311 += 0x2 - _0xdf72c8) _0x477334 = _0x528351[_0x2ca311], _0x2c70c8['margin' + _0x477334] = _0x2c70c8['padding' + _0x477334] = _0x4aee19;
		return _0xdf72c8 && (_0x2c70c8['opacity'] = _0x2c70c8['width'] = _0x4aee19), _0x2c70c8;
	}

	function _0x1f1078(_0x5270b3, _0x1b7ad5, _0x4e5994) {
		for (var _0x52232e, _0x528b14 = (_0x3d1c04['tweeners'][_0x1b7ad5] || [])['concat'](_0x3d1c04['tweeners']['*']), _0x1d789b = 0x0, _0x2f4858 = _0x528b14['length']; _0x1d789b < _0x2f4858; _0x1d789b++)
			if (_0x52232e = _0x528b14[_0x1d789b]['call'](_0x4e5994, _0x1b7ad5, _0x5270b3)) return _0x52232e;
	}

	function _0x3d1c04(_0x51e48a, _0x4bb185, _0x469df) {
		var _0xf72089, _0x3cde43, _0x50b263 = 0x0,
			_0x5745c3 = _0x3d1c04['prefilters']['length'],
			_0x17fc60 = _0x33c3a4['Deferred']()['always'](function() {
				delete _0x53bf76['elem'];
			}),
			_0x53bf76 = function() {
				if (_0x3cde43) return !0x1;
				for (var _0x5a4900 = _0x3e65ea || _0x5accb7(), _0x5a4900 = Math['max'](0x0, _0x1b3755['startTime'] + _0x1b3755['duration'] - _0x5a4900), _0x264c28 = 0x1 - (_0x5a4900 / _0x1b3755['duration'] || 0x0), _0x34377d = 0x0, _0x1053c2 = _0x1b3755['tweens']['length']; _0x34377d < _0x1053c2; _0x34377d++) _0x1b3755['tweens'][_0x34377d]['run'](_0x264c28);
				return _0x17fc60['notifyWith'](_0x51e48a, [_0x1b3755, _0x264c28, _0x5a4900]), 0x1 > _0x264c28 && _0x1053c2 ? _0x5a4900 : (_0x1053c2 || _0x17fc60['notifyWith'](_0x51e48a, [_0x1b3755, 0x1, 0x0]), _0x17fc60['resolveWith'](_0x51e48a, [_0x1b3755]), !0x1);
			},
			_0x1b3755 = _0x17fc60['promise']({
				'elem': _0x51e48a,
				'props': _0x33c3a4['extend']({}, _0x4bb185),
				'opts': _0x33c3a4['extend'](!0x0, {
					'specialEasing': {},
					'easing': _0x33c3a4['easing']['_default']
				}, _0x469df),
				'originalProperties': _0x4bb185,
				'originalOptions': _0x469df,
				'startTime': _0x3e65ea || _0x5accb7(),
				'duration': _0x469df['duration'],
				'tweens': [],
				'createTween': function(_0x45b428, _0x2d51a9) {
					var _0x36444b = _0x33c3a4['Tween'](_0x51e48a, _0x1b3755['opts'], _0x45b428, _0x2d51a9, _0x1b3755['opts']['specialEasing'][_0x45b428] || _0x1b3755['opts']['easing']);
					return _0x1b3755['tweens']['push'](_0x36444b), _0x36444b;
				},
				'stop': function(_0x2675dc) {
					var _0x5f494e = 0x0,
						_0x2ee7d5 = _0x2675dc ? _0x1b3755['tweens']['length'] : 0x0;
					if (_0x3cde43) return this;
					for (_0x3cde43 = !0x0; _0x5f494e < _0x2ee7d5; _0x5f494e++) _0x1b3755['tweens'][_0x5f494e]['run'](0x1);
					return _0x2675dc ? (_0x17fc60['notifyWith'](_0x51e48a, [_0x1b3755, 0x1, 0x0]), _0x17fc60['resolveWith'](_0x51e48a, [_0x1b3755, _0x2675dc])) : _0x17fc60['rejectWith'](_0x51e48a, [_0x1b3755, _0x2675dc]), this;
				}
			});
		_0x4bb185 = _0x1b3755['props'];
		_0x469df = _0x1b3755['opts']['specialEasing'];
		var _0x543e88, _0x5be909, _0x2a40c4, _0x31bd19;
		for (_0xf72089 in _0x4bb185)
			if (_0x543e88 = _0x33c3a4['camelCase'](_0xf72089), _0x5be909 = _0x469df[_0x543e88], _0x2a40c4 = _0x4bb185[_0xf72089], Array['isArray'](_0x2a40c4) && (_0x5be909 = _0x2a40c4[0x1], _0x2a40c4 = _0x4bb185[_0xf72089] = _0x2a40c4[0x0]), _0xf72089 !== _0x543e88 && (_0x4bb185[_0x543e88] = _0x2a40c4, delete _0x4bb185[_0xf72089]), _0x31bd19 = _0x33c3a4['cssHooks'][_0x543e88], _0x31bd19 && 'expand' in _0x31bd19)
				for (_0xf72089 in (_0x2a40c4 = _0x31bd19['expand'](_0x2a40c4), delete _0x4bb185[_0x543e88], _0x2a40c4)) _0xf72089 in _0x4bb185 || (_0x4bb185[_0xf72089] = _0x2a40c4[_0xf72089], _0x469df[_0xf72089] = _0x5be909);
			else _0x469df[_0x543e88] = _0x5be909;
		for (; _0x50b263 < _0x5745c3; _0x50b263++)
			if (_0xf72089 = _0x3d1c04['prefilters'][_0x50b263]['call'](_0x1b3755, _0x51e48a, _0x4bb185, _0x1b3755['opts'])) return _0x33c3a4['isFunction'](_0xf72089['stop']) && (_0x33c3a4['_queueHooks'](_0x1b3755['elem'], _0x1b3755['opts']['queue'])['stop'] = _0x33c3a4['proxy'](_0xf72089['stop'], _0xf72089)), _0xf72089;
		return _0x33c3a4['map'](_0x4bb185, _0x1f1078, _0x1b3755), _0x33c3a4['isFunction'](_0x1b3755['opts']['start']) && _0x1b3755['opts']['start']['call'](_0x51e48a, _0x1b3755), _0x1b3755['progress'](_0x1b3755['opts']['progress'])['done'](_0x1b3755['opts']['done'], _0x1b3755['opts']['complete'])['fail'](_0x1b3755['opts']['fail'])['always'](_0x1b3755['opts']['always']), _0x33c3a4['fx']['timer'](_0x33c3a4['extend'](_0x53bf76, {
			'elem': _0x51e48a,
			'anim': _0x1b3755,
			'queue': _0x1b3755['opts']['queue']
		})), _0x1b3755;
	}

	function _0x15d5e5(_0x22e43a) {
		return (_0x22e43a['match'](_0x1f9e10) || [])['join']('\x20');
	}

	function _0x3947a4(_0x3fa52f) {
		return _0x3fa52f['getAttribute'] && _0x3fa52f['getAttribute']('class') || '';
	}

	function _0x39b156(_0x53b2db, _0x209a7b, _0x5abd67, _0x5763ef) {
		var _0x41e472;
		if (Array['isArray'](_0x209a7b)) _0x33c3a4['each'](_0x209a7b, function(_0x36e8da, _0x57694d) {
			_0x5abd67 || _0x1c83d2['test'](_0x53b2db) ? _0x5763ef(_0x53b2db, _0x57694d) : _0x39b156(_0x53b2db + '[' + ('object' == typeof _0x57694d && null != _0x57694d ? _0x36e8da : '') + ']', _0x57694d, _0x5abd67, _0x5763ef);
		});
		else if (_0x5abd67 || 'object' !== _0x33c3a4['type'](_0x209a7b)) _0x5763ef(_0x53b2db, _0x209a7b);
		else
			for (_0x41e472 in _0x209a7b) _0x39b156(_0x53b2db + '[' + _0x41e472 + ']', _0x209a7b[_0x41e472], _0x5abd67, _0x5763ef);
	}

	function _0x3ae951(_0x59d1bb) {
		return function(_0x2b896c, _0x4f559c) {
			'string' != typeof _0x2b896c && (_0x4f559c = _0x2b896c, _0x2b896c = '*');
			var _0x4bcf1b, _0x63eb59 = 0x0,
				_0x255189 = _0x2b896c['toLowerCase']()['match'](_0x1f9e10) || [];
			if (_0x33c3a4['isFunction'](_0x4f559c))
				for (; _0x4bcf1b = _0x255189[_0x63eb59++];) '+' === _0x4bcf1b[0x0] ? (_0x4bcf1b = _0x4bcf1b['slice'](0x1) || '*', (_0x59d1bb[_0x4bcf1b] = _0x59d1bb[_0x4bcf1b] || [])['unshift'](_0x4f559c)) : (_0x59d1bb[_0x4bcf1b] = _0x59d1bb[_0x4bcf1b] || [])['push'](_0x4f559c);
		};
	}

	function _0x3b772f(_0x56b700, _0xb8ac06, _0x370c5f, _0x57b135) {
		function _0x57ef8e(_0x15f5d3) {
			var _0x5eec3b;
			return _0x1c2466[_0x15f5d3] = !0x0, _0x33c3a4['each'](_0x56b700[_0x15f5d3] || [], function(_0x3edf50, _0x1c4ba3) {
				var _0x458b99 = _0x1c4ba3(_0xb8ac06, _0x370c5f, _0x57b135);
				return 'string' != typeof _0x458b99 || _0x48203e || _0x1c2466[_0x458b99] ? _0x48203e ? !(_0x5eec3b = _0x458b99) : void 0x0 : (_0xb8ac06['dataTypes']['unshift'](_0x458b99), _0x57ef8e(_0x458b99), !0x1);
			}), _0x5eec3b;
		}
		var _0x1c2466 = {},
			_0x48203e = _0x56b700 === _0x57e5f6;
		return _0x57ef8e(_0xb8ac06['dataTypes'][0x0]) || !_0x1c2466['*'] && _0x57ef8e('*');
	}

	function _0x227a2d(_0x35b3fb, _0x21e48e) {
		var _0x5b92c6, _0x4ed338, _0x4e6811 = _0x33c3a4['ajaxSettings']['flatOptions'] || {};
		for (_0x5b92c6 in _0x21e48e) void 0x0 !== _0x21e48e[_0x5b92c6] && ((_0x4e6811[_0x5b92c6] ? _0x35b3fb : _0x4ed338 || (_0x4ed338 = {}))[_0x5b92c6] = _0x21e48e[_0x5b92c6]);
		return _0x4ed338 && _0x33c3a4['extend'](!0x0, _0x35b3fb, _0x4ed338), _0x35b3fb;
	}
	var _0x33670e = [],
		_0x28899d = _0x250f7b['document'],
		_0x21ad1c = Object['getPrototypeOf'],
		_0x3cb778 = _0x33670e['slice'],
		_0x12920c = _0x33670e['concat'],
		_0x13ed44 = _0x33670e['push'],
		_0x2ec965 = _0x33670e['indexOf'],
		_0x59e1f3 = {},
		_0xff9afb = _0x59e1f3['toString'],
		_0x4c09c6 = _0x59e1f3['hasOwnProperty'],
		_0xbd67e7 = _0x4c09c6['toString'],
		_0x4f8a63 = _0xbd67e7['call'](Object),
		_0x15f358 = {},
		_0x33c3a4 = function(_0x367054, _0x21fd6e) {
			return new _0x33c3a4['fn']['init'](_0x367054, _0x21fd6e);
		},
		_0x41c06b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		_0x108ec5 = /^-ms-/,
		_0x1b842a = /-([a-z])/g,
		_0x395e15 = function(_0x32de20, _0x143322) {
			return _0x143322['toUpperCase']();
		};
	_0x33c3a4['fn'] = _0x33c3a4['prototype'] = {
		'jquery': '3.2.1',
		'constructor': _0x33c3a4,
		'length': 0x0,
		'toArray': function() {
			return _0x3cb778['call'](this);
		},
		'get': function(_0x43cb56) {
			return null == _0x43cb56 ? _0x3cb778['call'](this) : 0x0 > _0x43cb56 ? this[_0x43cb56 + this['length']] : this[_0x43cb56];
		},
		'pushStack': function(_0x27f7ed) {
			_0x27f7ed = _0x33c3a4['merge'](this['constructor'](), _0x27f7ed);
			return _0x27f7ed['prevObject'] = this, _0x27f7ed;
		},
		'each': function(_0x12f37e) {
			return _0x33c3a4['each'](this, _0x12f37e);
		},
		'map': function(_0x3899ce) {
			return this['pushStack'](_0x33c3a4['map'](this, function(_0x28b32a, _0x268b5b) {
				return _0x3899ce['call'](_0x28b32a, _0x268b5b, _0x28b32a);
			}));
		},
		'slice': function() {
			return this['pushStack'](_0x3cb778['apply'](this, arguments));
		},
		'first': function() {
			return this['eq'](0x0);
		},
		'last': function() {
			return this['eq'](-0x1);
		},
		'eq': function(_0x4f3f9b) {
			var _0x51cc99 = this['length'];
			_0x4f3f9b = +_0x4f3f9b + (0x0 > _0x4f3f9b ? _0x51cc99 : 0x0);
			return this['pushStack'](0x0 <= _0x4f3f9b && _0x4f3f9b < _0x51cc99 ? [this[_0x4f3f9b]] : []);
		},
		'end': function() {
			return this['prevObject'] || this['constructor']();
		},
		'push': _0x13ed44,
		'sort': _0x33670e['sort'],
		'splice': _0x33670e['splice']
	};
	_0x33c3a4['extend'] = _0x33c3a4['fn']['extend'] = function() {
		var _0x491c3c, _0x1042bb, _0x40c5fb, _0x2c9c78, _0x3127f5, _0x4d0686, _0x1b3ebd = arguments[0x0] || {},
			_0x21ec79 = 0x1,
			_0x25a1a9 = arguments['length'],
			_0x87fe38 = !0x1;
		'boolean' == typeof _0x1b3ebd && (_0x87fe38 = _0x1b3ebd, _0x1b3ebd = arguments[_0x21ec79] || {}, _0x21ec79++);
		'object' == typeof _0x1b3ebd || _0x33c3a4['isFunction'](_0x1b3ebd) || (_0x1b3ebd = {});
		for (_0x21ec79 === _0x25a1a9 && (_0x1b3ebd = this, _0x21ec79--); _0x21ec79 < _0x25a1a9; _0x21ec79++)
			if (null != (_0x491c3c = arguments[_0x21ec79]))
				for (_0x1042bb in _0x491c3c) _0x40c5fb = _0x1b3ebd[_0x1042bb], _0x2c9c78 = _0x491c3c[_0x1042bb], _0x1b3ebd !== _0x2c9c78 && (_0x87fe38 && _0x2c9c78 && (_0x33c3a4['isPlainObject'](_0x2c9c78) || (_0x3127f5 = Array['isArray'](_0x2c9c78))) ? (_0x3127f5 ? (_0x3127f5 = !0x1, _0x4d0686 = _0x40c5fb && Array['isArray'](_0x40c5fb) ? _0x40c5fb : []) : _0x4d0686 = _0x40c5fb && _0x33c3a4['isPlainObject'](_0x40c5fb) ? _0x40c5fb : {}, _0x1b3ebd[_0x1042bb] = _0x33c3a4['extend'](_0x87fe38, _0x4d0686, _0x2c9c78)) : void 0x0 !== _0x2c9c78 && (_0x1b3ebd[_0x1042bb] = _0x2c9c78));
		return _0x1b3ebd;
	};
	_0x33c3a4['extend']({
		'expando': 'jQuery' + ('3.2.1' + Math['random']())['replace'](/\D/g, ''),
		'isReady': !0x0,
		'error': function(_0x7fd187) {
			throw Error(_0x7fd187);
		},
		'noop': function() {},
		'isFunction': function(_0x936577) {
			return 'function' === _0x33c3a4['type'](_0x936577);
		},
		'isWindow': function(_0x15ca38) {
			return null != _0x15ca38 && _0x15ca38 === _0x15ca38['window'];
		},
		'isNumeric': function(_0x25f519) {
			var _0xf9600c = _0x33c3a4['type'](_0x25f519);
			return ('number' === _0xf9600c || 'string' === _0xf9600c) && !isNaN(_0x25f519 - parseFloat(_0x25f519));
		},
		'isPlainObject': function(_0x49a606) {
			var _0x4b70b0, _0x3c926f;
			return !(!_0x49a606 || '[object\x20Object]' !== _0xff9afb['call'](_0x49a606)) && (!(_0x4b70b0 = _0x21ad1c(_0x49a606)) || (_0x3c926f = _0x4c09c6['call'](_0x4b70b0, 'constructor') && _0x4b70b0['constructor'], 'function' == typeof _0x3c926f && _0xbd67e7['call'](_0x3c926f) === _0x4f8a63));
		},
		'isEmptyObject': function(_0x139844) {
			for (var _0x4df21c in _0x139844) return !0x1;
			return !0x0;
		},
		'type': function(_0x38792b) {
			return null == _0x38792b ? _0x38792b + '' : 'object' == typeof _0x38792b || 'function' == typeof _0x38792b ? _0x59e1f3[_0xff9afb['call'](_0x38792b)] || 'object' : typeof _0x38792b;
		},
		'globalEval': function(_0x351217) {
			_0x585f59(_0x351217);
		},
		'camelCase': function(_0x4b35af) {
			return _0x4b35af['replace'](_0x108ec5, 'ms-')['replace'](_0x1b842a, _0x395e15);
		},
		'each': function(_0x33e7c4, _0x15c08e) {
			var _0x17684d, _0x3ea0c6 = 0x0;
			if (_0x493c66(_0x33e7c4))
				for (_0x17684d = _0x33e7c4['length']; _0x3ea0c6 < _0x17684d && !0x1 !== _0x15c08e['call'](_0x33e7c4[_0x3ea0c6], _0x3ea0c6, _0x33e7c4[_0x3ea0c6]); _0x3ea0c6++);
			else
				for (_0x3ea0c6 in _0x33e7c4)
					if (!0x1 === _0x15c08e['call'](_0x33e7c4[_0x3ea0c6], _0x3ea0c6, _0x33e7c4[_0x3ea0c6])) break;
			return _0x33e7c4;
		},
		'trim': function(_0x5988ba) {
			return null == _0x5988ba ? '' : (_0x5988ba + '')['replace'](_0x41c06b, '');
		},
		'makeArray': function(_0x51c0ac, _0x584618) {
			var _0x11c2d0 = _0x584618 || [];
			return null != _0x51c0ac && (_0x493c66(Object(_0x51c0ac)) ? _0x33c3a4['merge'](_0x11c2d0, 'string' == typeof _0x51c0ac ? [_0x51c0ac] : _0x51c0ac) : _0x13ed44['call'](_0x11c2d0, _0x51c0ac)), _0x11c2d0;
		},
		'inArray': function(_0x3ce69a, _0x1beeb9, _0xae515) {
			return null == _0x1beeb9 ? -0x1 : _0x2ec965['call'](_0x1beeb9, _0x3ce69a, _0xae515);
		},
		'merge': function(_0x4e2fa6, _0x386f3c) {
			for (var _0x198aba = +_0x386f3c['length'], _0x24dee4 = 0x0, _0x54666e = _0x4e2fa6['length']; _0x24dee4 < _0x198aba; _0x24dee4++) _0x4e2fa6[_0x54666e++] = _0x386f3c[_0x24dee4];
			return _0x4e2fa6['length'] = _0x54666e, _0x4e2fa6;
		},
		'grep': function(_0x42bf2c, _0x2d5262, _0x2fc27e) {
			for (var _0xe266ca = [], _0x3698c5 = 0x0, _0x2cd422 = _0x42bf2c['length'], _0xba1ff2 = !_0x2fc27e; _0x3698c5 < _0x2cd422; _0x3698c5++) _0x2fc27e = !_0x2d5262(_0x42bf2c[_0x3698c5], _0x3698c5), _0x2fc27e !== _0xba1ff2 && _0xe266ca['push'](_0x42bf2c[_0x3698c5]);
			return _0xe266ca;
		},
		'map': function(_0x5459bd, _0x249478, _0x3672de) {
			var _0x245154, _0x59da35, _0x24c9e7 = 0x0,
				_0xc1e955 = [];
			if (_0x493c66(_0x5459bd))
				for (_0x245154 = _0x5459bd['length']; _0x24c9e7 < _0x245154; _0x24c9e7++) _0x59da35 = _0x249478(_0x5459bd[_0x24c9e7], _0x24c9e7, _0x3672de), null != _0x59da35 && _0xc1e955['push'](_0x59da35);
			else
				for (_0x24c9e7 in _0x5459bd) _0x59da35 = _0x249478(_0x5459bd[_0x24c9e7], _0x24c9e7, _0x3672de), null != _0x59da35 && _0xc1e955['push'](_0x59da35);
			return _0x12920c['apply']([], _0xc1e955);
		},
		'guid': 0x1,
		'proxy': function(_0x34413e, _0x3d42ea) {
			var _0x283a92, _0x5f0833, _0x3012af;
			if ('string' == typeof _0x3d42ea && (_0x283a92 = _0x34413e[_0x3d42ea], _0x3d42ea = _0x34413e, _0x34413e = _0x283a92), _0x33c3a4['isFunction'](_0x34413e)) return _0x5f0833 = _0x3cb778['call'](arguments, 0x2), _0x3012af = function() {
				return _0x34413e['apply'](_0x3d42ea || this, _0x5f0833['concat'](_0x3cb778['call'](arguments)));
			}, _0x3012af['guid'] = _0x34413e['guid'] = _0x34413e['guid'] || _0x33c3a4['guid']++, _0x3012af;
		},
		'now': Date['now'],
		'support': _0x15f358
	});
	'function' == typeof Symbol && (_0x33c3a4['fn'][Symbol['iterator']] = _0x33670e[Symbol['iterator']]);
	_0x33c3a4['each']('Boolean\x20Number\x20String\x20Function\x20Array\x20Date\x20RegExp\x20Object\x20Error\x20Symbol' ['split']('\x20'), function(_0x24d98e, _0x23e8c0) {
		_0x59e1f3['[object\x20' + _0x23e8c0 + ']'] = _0x23e8c0['toLowerCase']();
	});
	var _0x57dd01, _0xea573b = _0x250f7b,
		_0x16aa51 = function(_0x19dc13, _0x6be29d, _0x3551dc, _0x15598c) {
			var _0x3fe057, _0x472b46, _0x88d2b1, _0x184174, _0x4f559d, _0x1834c0 = _0x6be29d && _0x6be29d['ownerDocument'],
				_0x595aba = _0x6be29d ? _0x6be29d['nodeType'] : 0x9;
			if (_0x3551dc = _0x3551dc || [], 'string' != typeof _0x19dc13 || !_0x19dc13 || 0x1 !== _0x595aba && 0x9 !== _0x595aba && 0xb !== _0x595aba) return _0x3551dc;
			if (!_0x15598c && ((_0x6be29d ? _0x6be29d['ownerDocument'] || _0x6be29d : _0x517bde) !== _0x4a28f5 && _0x590f65(_0x6be29d), _0x6be29d = _0x6be29d || _0x4a28f5, _0x25519c)) {
				if (0xb !== _0x595aba && (_0x184174 = _0x260300['exec'](_0x19dc13)))
					if (_0x3fe057 = _0x184174[0x1])
						if (0x9 === _0x595aba) {
							if (!(_0x472b46 = _0x6be29d['getElementById'](_0x3fe057))) return _0x3551dc;
							if (_0x472b46['id'] === _0x3fe057) return _0x3551dc['push'](_0x472b46), _0x3551dc;
						} else {
							if (_0x1834c0 && (_0x472b46 = _0x1834c0['getElementById'](_0x3fe057)) && _0x28af64(_0x6be29d, _0x472b46) && _0x472b46['id'] === _0x3fe057) return _0x3551dc['push'](_0x472b46), _0x3551dc;
						}
				else {
					if (_0x184174[0x2]) return _0x540e62['apply'](_0x3551dc, _0x6be29d['getElementsByTagName'](_0x19dc13)), _0x3551dc;
					if ((_0x3fe057 = _0x184174[0x3]) && _0x254a9c['getElementsByClassName'] && _0x6be29d['getElementsByClassName']) return _0x540e62['apply'](_0x3551dc, _0x6be29d['getElementsByClassName'](_0x3fe057)), _0x3551dc;
				}
				if (_0x254a9c['qsa'] && !_0x38ae32[_0x19dc13 + '\x20'] && (!_0x58ee30 || !_0x58ee30['test'](_0x19dc13))) {
					if (0x1 !== _0x595aba) _0x1834c0 = _0x6be29d, _0x4f559d = _0x19dc13;
					else if ('object' !== _0x6be29d['nodeName']['toLowerCase']()) {
						(_0x88d2b1 = _0x6be29d['getAttribute']('id')) ? _0x88d2b1 = _0x88d2b1['replace'](_0x21027a, _0x1ad93b): _0x6be29d['setAttribute']('id', _0x88d2b1 = _0x5dc766);
						_0x472b46 = _0x3d9f83(_0x19dc13);
						for (_0x3fe057 = _0x472b46['length']; _0x3fe057--;) _0x472b46[_0x3fe057] = '#' + _0x88d2b1 + '\x20' + _0xb34789(_0x472b46[_0x3fe057]);
						_0x4f559d = _0x472b46['join'](',');
						_0x1834c0 = _0x2c3797['test'](_0x19dc13) && _0x8981b1(_0x6be29d['parentNode']) || _0x6be29d;
					}
					if (_0x4f559d) try {
						return _0x540e62['apply'](_0x3551dc, _0x1834c0['querySelectorAll'](_0x4f559d)), _0x3551dc;
					} catch (_0xd289c6) {} finally {
						_0x88d2b1 === _0x5dc766 && _0x6be29d['removeAttribute']('id');
					}
				}
			}
			return _0x4f7dec(_0x19dc13['replace'](_0x56dc17, '$1'), _0x6be29d, _0x3551dc, _0x15598c);
		},
		_0x3dca6d = function() {
			function _0x380216(_0x2f9db2, _0x198d97) {
				return _0x1a3f03['push'](_0x2f9db2 + '\x20') > _0x25d13c['cacheLength'] && delete _0x380216[_0x1a3f03['shift']()], _0x380216[_0x2f9db2 + '\x20'] = _0x198d97;
			}
			var _0x1a3f03 = [];
			return _0x380216;
		},
		_0x22d59d = function(_0x59202c) {
			return _0x59202c[_0x5dc766] = !0x0, _0x59202c;
		},
		_0x180f0b = function(_0x452b04) {
			var _0x36ae29 = _0x4a28f5['createElement']('fieldset');
			try {
				return !!_0x452b04(_0x36ae29);
			} catch (_0x69b7b9) {
				return !0x1;
			} finally {
				_0x36ae29['parentNode'] && _0x36ae29['parentNode']['removeChild'](_0x36ae29);
			}
		},
		_0x74a073 = function(_0x39a0a3, _0x1bf025) {
			for (var _0x2c1f36 = _0x39a0a3['split']('|'), _0x501345 = _0x2c1f36['length']; _0x501345--;) _0x25d13c['attrHandle'][_0x2c1f36[_0x501345]] = _0x1bf025;
		},
		_0xa3ec58 = function(_0x53c6bc, _0x2894e3) {
			var _0x49f07d = _0x2894e3 && _0x53c6bc,
				_0x5d7997 = _0x49f07d && 0x1 === _0x53c6bc['nodeType'] && 0x1 === _0x2894e3['nodeType'] && _0x53c6bc['sourceIndex'] - _0x2894e3['sourceIndex'];
			if (_0x5d7997) return _0x5d7997;
			if (_0x49f07d)
				for (; _0x49f07d = _0x49f07d['nextSibling'];)
					if (_0x49f07d === _0x2894e3) return -0x1;
			return _0x53c6bc ? 0x1 : -0x1;
		},
		_0x2a5cf7 = function(_0x2fe60b) {
			return function(_0x2996d5) {
				return 'input' === _0x2996d5['nodeName']['toLowerCase']() && _0x2996d5['type'] === _0x2fe60b;
			};
		},
		_0x4bbada = function(_0x411b4e) {
			return function(_0x1babd) {
				var _0x1e451b = _0x1babd['nodeName']['toLowerCase']();
				return ('input' === _0x1e451b || 'button' === _0x1e451b) && _0x1babd['type'] === _0x411b4e;
			};
		},
		_0x474e26 = function(_0x259387) {
			return function(_0x5992ef) {
				return 'form' in _0x5992ef ? _0x5992ef['parentNode'] && !0x1 === _0x5992ef['disabled'] ? 'label' in _0x5992ef ? 'label' in _0x5992ef['parentNode'] ? _0x5992ef['parentNode']['disabled'] === _0x259387 : _0x5992ef['disabled'] === _0x259387 : _0x5992ef['isDisabled'] === _0x259387 || _0x5992ef['isDisabled'] !== !_0x259387 && _0x1d091e(_0x5992ef) === _0x259387 : _0x5992ef['disabled'] === _0x259387 : 'label' in _0x5992ef && _0x5992ef['disabled'] === _0x259387;
			};
		},
		_0x4b0be4 = function(_0x27e1cc) {
			return _0x22d59d(function(_0x133432) {
				return _0x133432 = +_0x133432, _0x22d59d(function(_0x4a24b1, _0x2ffcbd) {
					for (var _0x2499ca, _0x52ec3c = _0x27e1cc([], _0x4a24b1['length'], _0x133432), _0xef9d5a = _0x52ec3c['length']; _0xef9d5a--;) _0x4a24b1[_0x2499ca = _0x52ec3c[_0xef9d5a]] && (_0x4a24b1[_0x2499ca] = !(_0x2ffcbd[_0x2499ca] = _0x4a24b1[_0x2499ca]));
				});
			});
		},
		_0x8981b1 = function(_0x473a2f) {
			return _0x473a2f && 'undefined' != typeof _0x473a2f['getElementsByTagName'] && _0x473a2f;
		},
		_0x55ed3a = function() {},
		_0xb34789 = function(_0xae6c73) {
			for (var _0x5dc26f = 0x0, _0x2becb3 = _0xae6c73['length'], _0x3593cd = ''; _0x5dc26f < _0x2becb3; _0x5dc26f++) _0x3593cd += _0xae6c73[_0x5dc26f]['value'];
			return _0x3593cd;
		},
		_0xeb2029 = function(_0x3fc3fc, _0x3fd247, _0x33dd2c) {
			var _0x24527f = _0x3fd247['dir'],
				_0x7f51ca = _0x3fd247['next'],
				_0x55ba76 = _0x7f51ca || _0x24527f,
				_0x49d5f7 = _0x33dd2c && 'parentNode' === _0x55ba76,
				_0x133398 = _0xace5c7++;
			return _0x3fd247['first'] ? function(_0x232864, _0x5655f1, _0x2b69bf) {
				for (; _0x232864 = _0x232864[_0x24527f];)
					if (0x1 === _0x232864['nodeType'] || _0x49d5f7) return _0x3fc3fc(_0x232864, _0x5655f1, _0x2b69bf);
				return !0x1;
			} : function(_0x1ca630, _0x1a71b5, _0x12433f) {
				var _0x5db072, _0x5f3a0e, _0x329876, _0x50cc1e = [_0x293003, _0x133398];
				if (_0x12433f)
					for (; _0x1ca630 = _0x1ca630[_0x24527f];) {
						if ((0x1 === _0x1ca630['nodeType'] || _0x49d5f7) && _0x3fc3fc(_0x1ca630, _0x1a71b5, _0x12433f)) return !0x0;
					} else
						for (; _0x1ca630 = _0x1ca630[_0x24527f];)
							if (0x1 === _0x1ca630['nodeType'] || _0x49d5f7)
								if (_0x329876 = _0x1ca630[_0x5dc766] || (_0x1ca630[_0x5dc766] = {}), _0x5f3a0e = _0x329876[_0x1ca630['uniqueID']] || (_0x329876[_0x1ca630['uniqueID']] = {}), _0x7f51ca && _0x7f51ca === _0x1ca630['nodeName']['toLowerCase']()) _0x1ca630 = _0x1ca630[_0x24527f] || _0x1ca630;
								else {
									if ((_0x5db072 = _0x5f3a0e[_0x55ba76]) && _0x5db072[0x0] === _0x293003 && _0x5db072[0x1] === _0x133398) return _0x50cc1e[0x2] = _0x5db072[0x2];
									if (_0x5f3a0e[_0x55ba76] = _0x50cc1e, _0x50cc1e[0x2] = _0x3fc3fc(_0x1ca630, _0x1a71b5, _0x12433f)) return !0x0;
								} return !0x1;
			};
		},
		_0x2ccf2c = function(_0xaa6dd5) {
			return 0x1 < _0xaa6dd5['length'] ? function(_0x2e6128, _0x1fc6a6, _0x4f7f44) {
				for (var _0xdc2c5d = _0xaa6dd5['length']; _0xdc2c5d--;)
					if (!_0xaa6dd5[_0xdc2c5d](_0x2e6128, _0x1fc6a6, _0x4f7f44)) return !0x1;
				return !0x0;
			} : _0xaa6dd5[0x0];
		},
		_0x429e3a = function(_0x469b5a, _0x1db492, _0x1b04da, _0x3b7e50, _0x5e6f16) {
			for (var _0x14c626, _0xccd364 = [], _0x5ce219 = 0x0, _0x173179 = _0x469b5a['length'], _0x4b4462 = null != _0x1db492; _0x5ce219 < _0x173179; _0x5ce219++)(_0x14c626 = _0x469b5a[_0x5ce219]) && (_0x1b04da && !_0x1b04da(_0x14c626, _0x3b7e50, _0x5e6f16) || (_0xccd364['push'](_0x14c626), _0x4b4462 && _0x1db492['push'](_0x5ce219)));
			return _0xccd364;
		},
		_0x1f1817 = function(_0x5b7db2, _0x3fe364, _0x32f581, _0x543f8d, _0x1d2713, _0x5ee82e) {
			return _0x543f8d && !_0x543f8d[_0x5dc766] && (_0x543f8d = _0x1f1817(_0x543f8d)), _0x1d2713 && !_0x1d2713[_0x5dc766] && (_0x1d2713 = _0x1f1817(_0x1d2713, _0x5ee82e)), _0x22d59d(function(_0x5a2a5d, _0x45593c, _0x22222c, _0x27a11b) {
				var _0x1068c9, _0x4355d8, _0x51b6c7 = [],
					_0x15d35c = [],
					_0x20695d = _0x45593c['length'],
					_0x44a2b9;
				if (!(_0x44a2b9 = _0x5a2a5d)) {
					_0x44a2b9 = _0x3fe364 || '*';
					for (var _0x5ca5f4 = _0x22222c['nodeType'] ? [_0x22222c] : _0x22222c, _0x134241 = [], _0x1dba88 = 0x0, _0x1f3b82 = _0x5ca5f4['length']; _0x1dba88 < _0x1f3b82; _0x1dba88++) _0x16aa51(_0x44a2b9, _0x5ca5f4[_0x1dba88], _0x134241);
					_0x44a2b9 = _0x134241;
				}
				_0x44a2b9 = !_0x5b7db2 || !_0x5a2a5d && _0x3fe364 ? _0x44a2b9 : _0x429e3a(_0x44a2b9, _0x51b6c7, _0x5b7db2, _0x22222c, _0x27a11b);
				_0x5ca5f4 = _0x32f581 ? _0x1d2713 || (_0x5a2a5d ? _0x5b7db2 : _0x20695d || _0x543f8d) ? [] : _0x45593c : _0x44a2b9;
				if (_0x32f581 && _0x32f581(_0x44a2b9, _0x5ca5f4, _0x22222c, _0x27a11b), _0x543f8d) {
					_0x1068c9 = _0x429e3a(_0x5ca5f4, _0x15d35c);
					_0x543f8d(_0x1068c9, [], _0x22222c, _0x27a11b);
					for (_0x22222c = _0x1068c9['length']; _0x22222c--;)(_0x4355d8 = _0x1068c9[_0x22222c]) && (_0x5ca5f4[_0x15d35c[_0x22222c]] = !(_0x44a2b9[_0x15d35c[_0x22222c]] = _0x4355d8));
				}
				if (_0x5a2a5d) {
					if (_0x1d2713 || _0x5b7db2) {
						if (_0x1d2713) {
							_0x1068c9 = [];
							for (_0x22222c = _0x5ca5f4['length']; _0x22222c--;)(_0x4355d8 = _0x5ca5f4[_0x22222c]) && _0x1068c9['push'](_0x44a2b9[_0x22222c] = _0x4355d8);
							_0x1d2713(null, _0x5ca5f4 = [], _0x1068c9, _0x27a11b);
						}
						for (_0x22222c = _0x5ca5f4['length']; _0x22222c--;)(_0x4355d8 = _0x5ca5f4[_0x22222c]) && -0x1 < (_0x1068c9 = _0x1d2713 ? _0x447d39(_0x5a2a5d, _0x4355d8) : _0x51b6c7[_0x22222c]) && (_0x5a2a5d[_0x1068c9] = !(_0x45593c[_0x1068c9] = _0x4355d8));
					}
				} else _0x5ca5f4 = _0x429e3a(_0x5ca5f4 === _0x45593c ? _0x5ca5f4['splice'](_0x20695d, _0x5ca5f4['length']) : _0x5ca5f4), _0x1d2713 ? _0x1d2713(null, _0x45593c, _0x5ca5f4, _0x27a11b) : _0x540e62['apply'](_0x45593c, _0x5ca5f4);
			});
		},
		_0x58c979 = function(_0x364d87) {
			var _0x567097, _0x21f9b3, _0x1faaef, _0x460104 = _0x364d87['length'],
				_0x1a62ff = _0x25d13c['relative'][_0x364d87[0x0]['type']];
			_0x21f9b3 = _0x1a62ff || _0x25d13c['relative']['\x20'];
			for (var _0x5126a8 = _0x1a62ff ? 0x1 : 0x0, _0x3f5174 = _0xeb2029(function(_0x5b4d71) {
					return _0x5b4d71 === _0x567097;
				}, _0x21f9b3, !0x0), _0x294c10 = _0xeb2029(function(_0x37ba04) {
					return -0x1 < _0x447d39(_0x567097, _0x37ba04);
				}, _0x21f9b3, !0x0), _0x5afab6 = [function(_0x50fe36, _0x4a6692, _0x1a3c49) {
					_0x50fe36 = !_0x1a62ff && (_0x1a3c49 || _0x4a6692 !== _0x2b73c4) || ((_0x567097 = _0x4a6692)['nodeType'] ? _0x3f5174(_0x50fe36, _0x4a6692, _0x1a3c49) : _0x294c10(_0x50fe36, _0x4a6692, _0x1a3c49));
					return _0x567097 = null, _0x50fe36;
				}]; _0x5126a8 < _0x460104; _0x5126a8++)
				if (_0x21f9b3 = _0x25d13c['relative'][_0x364d87[_0x5126a8]['type']]) _0x5afab6 = [_0xeb2029(_0x2ccf2c(_0x5afab6), _0x21f9b3)];
				else {
					if (_0x21f9b3 = _0x25d13c['filter'][_0x364d87[_0x5126a8]['type']]['apply'](null, _0x364d87[_0x5126a8]['matches']), _0x21f9b3[_0x5dc766]) {
						for (_0x1faaef = ++_0x5126a8; _0x1faaef < _0x460104 && !_0x25d13c['relative'][_0x364d87[_0x1faaef]['type']]; _0x1faaef++);
						return _0x1f1817(0x1 < _0x5126a8 && _0x2ccf2c(_0x5afab6), 0x1 < _0x5126a8 && _0xb34789(_0x364d87['slice'](0x0, _0x5126a8 - 0x1)['concat']({
							'value': '\x20' === _0x364d87[_0x5126a8 - 0x2]['type'] ? '*' : ''
						}))['replace'](_0x56dc17, '$1'), _0x21f9b3, _0x5126a8 < _0x1faaef && _0x58c979(_0x364d87['slice'](_0x5126a8, _0x1faaef)), _0x1faaef < _0x460104 && _0x58c979(_0x364d87 = _0x364d87['slice'](_0x1faaef)), _0x1faaef < _0x460104 && _0xb34789(_0x364d87));
					}
					_0x5afab6['push'](_0x21f9b3);
				} return _0x2ccf2c(_0x5afab6);
		},
		_0xe2d654, _0x254a9c, _0x25d13c, _0x457591, _0x54ef29, _0x3d9f83, _0x377006, _0x4f7dec, _0x2b73c4, _0x399ce2, _0x4d713d, _0x590f65, _0x4a28f5, _0x17968c, _0x25519c, _0x58ee30, _0x488a3d, _0x367faf, _0x28af64, _0x5dc766 = 'sizzle' + 0x1 * new Date(),
		_0x517bde = _0xea573b['document'],
		_0x293003 = 0x0,
		_0xace5c7 = 0x0,
		_0x3cfb47 = _0x3dca6d(),
		_0x24af44 = _0x3dca6d(),
		_0x38ae32 = _0x3dca6d(),
		_0x3df2a1 = function(_0x27d80f, _0x12d3a2) {
			return _0x27d80f === _0x12d3a2 && (_0x4d713d = !0x0), 0x0;
		},
		_0x3afd4d = {} ['hasOwnProperty'],
		_0xc6ed7c = [],
		_0x34bbc0 = _0xc6ed7c['pop'],
		_0x257ec3 = _0xc6ed7c['push'],
		_0x540e62 = _0xc6ed7c['push'],
		_0x193157 = _0xc6ed7c['slice'],
		_0x447d39 = function(_0x4dfdcc, _0x89ad20) {
			for (var _0x54cc7d = 0x0, _0x590bf5 = _0x4dfdcc['length']; _0x54cc7d < _0x590bf5; _0x54cc7d++)
				if (_0x4dfdcc[_0x54cc7d] === _0x89ad20) return _0x54cc7d;
			return -0x1;
		},
		_0x1b6852 = /[\x20\t\r\n\f]+/g,
		_0x56dc17 = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
		_0x3f517a = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
		_0x562c51 = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
		_0x3d5a49 = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
		_0xba6b2d = RegExp(':((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
		_0x5d6f78 = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
		_0x1e1e8c = {
			'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
			'ATTR': RegExp('^\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c]'),
			'PSEUDO': RegExp('^:((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
			'CHILD': RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*(even|odd|(([+-]|)(\x5cd*)n|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([+-]|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(\x5cd+)|))[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)', 'i'),
			'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
			'needsContext': RegExp('^[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:-\x5cd)?\x5cd*)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)(?=[^-]|$)', 'i')
		},
		_0x43ada7 = /^(?:input|select|textarea|button)$/i,
		_0x237236 = /^h\d$/i,
		_0x1b804b = /^[^{]+\{\s*\[native \w/,
		_0x260300 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		_0x2c3797 = /[+~]/,
		_0x349975 = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
		_0x257321 = function(_0x5c6bbf, _0xc814ef, _0x7ae81f) {
			_0x5c6bbf = '0x' + _0xc814ef - 0x10000;
			return _0x5c6bbf !== _0x5c6bbf || _0x7ae81f ? _0xc814ef : 0x0 > _0x5c6bbf ? String['fromCharCode'](_0x5c6bbf + 0x10000) : String['fromCharCode'](_0x5c6bbf >> 0xa | 0xd800, 0x3ff & _0x5c6bbf | 0xdc00);
		},
		_0x21027a = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		_0x1ad93b = function(_0xcf18b7, _0x56bc7f) {
			return _0x56bc7f ? '�' === _0xcf18b7 ? '�' : _0xcf18b7['slice'](0x0, -0x1) + '\x5c' + _0xcf18b7['charCodeAt'](_0xcf18b7['length'] - 0x1)['toString'](0x10) + '\x20' : '\x5c' + _0xcf18b7;
		},
		_0x298b9d = function() {
			_0x590f65();
		},
		_0x1d091e = _0xeb2029(function(_0x2c21c0) {
			return !0x0 === _0x2c21c0['disabled'] && ('form' in _0x2c21c0 || 'label' in _0x2c21c0);
		}, {
			'dir': 'parentNode',
			'next': 'legend'
		});
	try {
		_0x540e62['apply'](_0xc6ed7c = _0x193157['call'](_0x517bde['childNodes']), _0x517bde['childNodes']), _0xc6ed7c[_0x517bde['childNodes']['length']]['nodeType'];
	} catch (_0x44114f) {
		_0x540e62 = {
			'apply': _0xc6ed7c['length'] ? function(_0x4241df, _0x41713e) {
				_0x257ec3['apply'](_0x4241df, _0x193157['call'](_0x41713e));
			} : function(_0x1292a2, _0x120559) {
				for (var _0x4e38f5 = _0x1292a2['length'], _0x105c2a = 0x0; _0x1292a2[_0x4e38f5++] = _0x120559[_0x105c2a++];);
				_0x1292a2['length'] = _0x4e38f5 - 0x1;
			}
		};
	}
	_0x254a9c = _0x16aa51['support'] = {};
	_0x54ef29 = _0x16aa51['isXML'] = function(_0x2ce2d6) {
		_0x2ce2d6 = _0x2ce2d6 && (_0x2ce2d6['ownerDocument'] || _0x2ce2d6)['documentElement'];
		return !!_0x2ce2d6 && 'HTML' !== _0x2ce2d6['nodeName'];
	};
	_0x590f65 = _0x16aa51['setDocument'] = function(_0x1d31d6) {
		var _0x51301b, _0x169faa;
		_0x1d31d6 = _0x1d31d6 ? _0x1d31d6['ownerDocument'] || _0x1d31d6 : _0x517bde;
		return _0x1d31d6 !== _0x4a28f5 && 0x9 === _0x1d31d6['nodeType'] && _0x1d31d6['documentElement'] ? (_0x4a28f5 = _0x1d31d6, _0x17968c = _0x4a28f5['documentElement'], _0x25519c = !_0x54ef29(_0x4a28f5), _0x517bde !== _0x4a28f5 && (_0x169faa = _0x4a28f5['defaultView']) && _0x169faa['top'] !== _0x169faa && (_0x169faa['addEventListener'] ? _0x169faa['addEventListener']('unload', _0x298b9d, !0x1) : _0x169faa['attachEvent'] && _0x169faa['attachEvent']('onunload', _0x298b9d)), _0x254a9c['attributes'] = _0x180f0b(function(_0x409769) {
			return _0x409769['className'] = 'i', !_0x409769['getAttribute']('className');
		}), _0x254a9c['getElementsByTagName'] = _0x180f0b(function(_0x2fd237) {
			return _0x2fd237['appendChild'](_0x4a28f5['createComment']('')), !_0x2fd237['getElementsByTagName']('*')['length'];
		}), _0x254a9c['getElementsByClassName'] = _0x1b804b['test'](_0x4a28f5['getElementsByClassName']), _0x254a9c['getById'] = _0x180f0b(function(_0x20717b) {
			return _0x17968c['appendChild'](_0x20717b)['id'] = _0x5dc766, !_0x4a28f5['getElementsByName'] || !_0x4a28f5['getElementsByName'](_0x5dc766)['length'];
		}), _0x254a9c['getById'] ? (_0x25d13c['filter']['ID'] = function(_0x55a0c9) {
			var _0x2954a8 = _0x55a0c9['replace'](_0x349975, _0x257321);
			return function(_0x251434) {
				return _0x251434['getAttribute']('id') === _0x2954a8;
			};
		}, _0x25d13c['find']['ID'] = function(_0x26b941, _0x5b3383) {
			if ('undefined' != typeof _0x5b3383['getElementById'] && _0x25519c) {
				var _0x560df8 = _0x5b3383['getElementById'](_0x26b941);
				return _0x560df8 ? [_0x560df8] : [];
			}
		}) : (_0x25d13c['filter']['ID'] = function(_0x47043f) {
			var _0x1f6386 = _0x47043f['replace'](_0x349975, _0x257321);
			return function(_0x10a7ef) {
				return (_0x10a7ef = 'undefined' != typeof _0x10a7ef['getAttributeNode'] && _0x10a7ef['getAttributeNode']('id')) && _0x10a7ef['value'] === _0x1f6386;
			};
		}, _0x25d13c['find']['ID'] = function(_0x4de4d5, _0x4cb42c) {
			if ('undefined' != typeof _0x4cb42c['getElementById'] && _0x25519c) {
				var _0x54ebc7, _0x5bff7, _0x33d34e, _0xb9667e = _0x4cb42c['getElementById'](_0x4de4d5);
				if (_0xb9667e) {
					if (_0x54ebc7 = _0xb9667e['getAttributeNode']('id'), _0x54ebc7 && _0x54ebc7['value'] === _0x4de4d5) return [_0xb9667e];
					_0x33d34e = _0x4cb42c['getElementsByName'](_0x4de4d5);
					for (_0x5bff7 = 0x0; _0xb9667e = _0x33d34e[_0x5bff7++];)
						if (_0x54ebc7 = _0xb9667e['getAttributeNode']('id'), _0x54ebc7 && _0x54ebc7['value'] === _0x4de4d5) return [_0xb9667e];
				}
				return [];
			}
		}), _0x25d13c['find']['TAG'] = _0x254a9c['getElementsByTagName'] ? function(_0x13bfc9, _0x234530) {
			return 'undefined' != typeof _0x234530['getElementsByTagName'] ? _0x234530['getElementsByTagName'](_0x13bfc9) : _0x254a9c['qsa'] ? _0x234530['querySelectorAll'](_0x13bfc9) : void 0x0;
		} : function(_0x41ed98, _0x7b37a3) {
			var _0x5a6273, _0x2bbaca = [],
				_0x3e0be5 = 0x0,
				_0x1a2ffb = _0x7b37a3['getElementsByTagName'](_0x41ed98);
			if ('*' === _0x41ed98) {
				for (; _0x5a6273 = _0x1a2ffb[_0x3e0be5++];) 0x1 === _0x5a6273['nodeType'] && _0x2bbaca['push'](_0x5a6273);
				return _0x2bbaca;
			}
			return _0x1a2ffb;
		}, _0x25d13c['find']['CLASS'] = _0x254a9c['getElementsByClassName'] && function(_0x2e97ff, _0x3476f9) {
			if ('undefined' != typeof _0x3476f9['getElementsByClassName'] && _0x25519c) return _0x3476f9['getElementsByClassName'](_0x2e97ff);
		}, _0x488a3d = [], _0x58ee30 = [], (_0x254a9c['qsa'] = _0x1b804b['test'](_0x4a28f5['querySelectorAll'])) && (_0x180f0b(function(_0x1b82c1) {
			_0x17968c['appendChild'](_0x1b82c1)['innerHTML'] = '<a\x20id=\x27' + _0x5dc766 + '\x27></a><select\x20id=\x27' + _0x5dc766 + '-\x0d\x5c\x27\x20msallowcapture=\x27\x27><option\x20selected=\x27\x27></option></select>';
			_0x1b82c1['querySelectorAll']('[msallowcapture^=\x27\x27]')['length'] && _0x58ee30['push']('[*^$]=[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27\x27|\x22\x22)');
			_0x1b82c1['querySelectorAll']('[selected]')['length'] || _0x58ee30['push']('\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)');
			_0x1b82c1['querySelectorAll']('[id~=' + _0x5dc766 + '-]')['length'] || _0x58ee30['push']('~=');
			_0x1b82c1['querySelectorAll'](':checked')['length'] || _0x58ee30['push'](':checked');
			_0x1b82c1['querySelectorAll']('a#' + _0x5dc766 + '+*')['length'] || _0x58ee30['push']('.#.+[+~]');
		}), _0x180f0b(function(_0x388cc8) {
			_0x388cc8['innerHTML'] = '<a\x20href=\x27\x27\x20disabled=\x27disabled\x27></a><select\x20disabled=\x27disabled\x27><option/></select>';
			var _0x53e4bc = _0x4a28f5['createElement']('input');
			_0x53e4bc['setAttribute']('type', 'hidden');
			_0x388cc8['appendChild'](_0x53e4bc)['setAttribute']('name', 'D');
			_0x388cc8['querySelectorAll']('[name=d]')['length'] && _0x58ee30['push']('name[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[*^$|!~]?=');
			0x2 !== _0x388cc8['querySelectorAll'](':enabled')['length'] && _0x58ee30['push'](':enabled', ':disabled');
			_0x17968c['appendChild'](_0x388cc8)['disabled'] = !0x0;
			0x2 !== _0x388cc8['querySelectorAll'](':disabled')['length'] && _0x58ee30['push'](':enabled', ':disabled');
			_0x388cc8['querySelectorAll']('*,:x');
			_0x58ee30['push'](',.*:');
		})), (_0x254a9c['matchesSelector'] = _0x1b804b['test'](_0x367faf = _0x17968c['matches'] || _0x17968c['webkitMatchesSelector'] || _0x17968c['mozMatchesSelector'] || _0x17968c['oMatchesSelector'] || _0x17968c['msMatchesSelector'])) && _0x180f0b(function(_0x3efe5a) {
			_0x254a9c['disconnectedMatch'] = _0x367faf['call'](_0x3efe5a, '*');
			_0x367faf['call'](_0x3efe5a, '[s!=\x27\x27]:x');
			_0x488a3d['push']('!=', ':((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^�-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)');
		}), _0x58ee30 = _0x58ee30['length'] && RegExp(_0x58ee30['join']('|')), _0x488a3d = _0x488a3d['length'] && RegExp(_0x488a3d['join']('|')), _0x51301b = _0x1b804b['test'](_0x17968c['compareDocumentPosition']), _0x28af64 = _0x51301b || _0x1b804b['test'](_0x17968c['contains']) ? function(_0x4c98d2, _0xdb5ae7) {
			var _0x7da92e = 0x9 === _0x4c98d2['nodeType'] ? _0x4c98d2['documentElement'] : _0x4c98d2,
				_0x39ad61 = _0xdb5ae7 && _0xdb5ae7['parentNode'];
			return _0x4c98d2 === _0x39ad61 || !(!_0x39ad61 || 0x1 !== _0x39ad61['nodeType'] || !(_0x7da92e['contains'] ? _0x7da92e['contains'](_0x39ad61) : _0x4c98d2['compareDocumentPosition'] && 0x10 & _0x4c98d2['compareDocumentPosition'](_0x39ad61)));
		} : function(_0x3aa73d, _0x28dd9c) {
			if (_0x28dd9c)
				for (; _0x28dd9c = _0x28dd9c['parentNode'];)
					if (_0x28dd9c === _0x3aa73d) return !0x0;
			return !0x1;
		}, _0x3df2a1 = _0x51301b ? function(_0x1f0120, _0x35329f) {
			if (_0x1f0120 === _0x35329f) return _0x4d713d = !0x0, 0x0;
			var _0xd68d6c = !_0x1f0120['compareDocumentPosition'] - !_0x35329f['compareDocumentPosition'];
			return _0xd68d6c ? _0xd68d6c : (_0xd68d6c = (_0x1f0120['ownerDocument'] || _0x1f0120) === (_0x35329f['ownerDocument'] || _0x35329f) ? _0x1f0120['compareDocumentPosition'](_0x35329f) : 0x1, 0x1 & _0xd68d6c || !_0x254a9c['sortDetached'] && _0x35329f['compareDocumentPosition'](_0x1f0120) === _0xd68d6c ? _0x1f0120 === _0x4a28f5 || _0x1f0120['ownerDocument'] === _0x517bde && _0x28af64(_0x517bde, _0x1f0120) ? -0x1 : _0x35329f === _0x4a28f5 || _0x35329f['ownerDocument'] === _0x517bde && _0x28af64(_0x517bde, _0x35329f) ? 0x1 : _0x399ce2 ? _0x447d39(_0x399ce2, _0x1f0120) - _0x447d39(_0x399ce2, _0x35329f) : 0x0 : 0x4 & _0xd68d6c ? -0x1 : 0x1);
		} : function(_0x5b6d4e, _0x15a529) {
			if (_0x5b6d4e === _0x15a529) return _0x4d713d = !0x0, 0x0;
			var _0x367f36, _0x4bcc82 = 0x0;
			_0x367f36 = _0x5b6d4e['parentNode'];
			var _0x4b28fb = _0x15a529['parentNode'],
				_0x3c5226 = [_0x5b6d4e],
				_0x553955 = [_0x15a529];
			if (!_0x367f36 || !_0x4b28fb) return _0x5b6d4e === _0x4a28f5 ? -0x1 : _0x15a529 === _0x4a28f5 ? 0x1 : _0x367f36 ? -0x1 : _0x4b28fb ? 0x1 : _0x399ce2 ? _0x447d39(_0x399ce2, _0x5b6d4e) - _0x447d39(_0x399ce2, _0x15a529) : 0x0;
			if (_0x367f36 === _0x4b28fb) return _0xa3ec58(_0x5b6d4e, _0x15a529);
			for (_0x367f36 = _0x5b6d4e; _0x367f36 = _0x367f36['parentNode'];) _0x3c5226['unshift'](_0x367f36);
			for (_0x367f36 = _0x15a529; _0x367f36 = _0x367f36['parentNode'];) _0x553955['unshift'](_0x367f36);
			for (; _0x3c5226[_0x4bcc82] === _0x553955[_0x4bcc82];) _0x4bcc82++;
			return _0x4bcc82 ? _0xa3ec58(_0x3c5226[_0x4bcc82], _0x553955[_0x4bcc82]) : _0x3c5226[_0x4bcc82] === _0x517bde ? -0x1 : _0x553955[_0x4bcc82] === _0x517bde ? 0x1 : 0x0;
		}, _0x4a28f5) : _0x4a28f5;
	};
	_0x16aa51['matches'] = function(_0x42cbf6, _0x5705f5) {
		return _0x16aa51(_0x42cbf6, null, null, _0x5705f5);
	};
	_0x16aa51['matchesSelector'] = function(_0x53ebe3, _0x5bb505) {
		if ((_0x53ebe3['ownerDocument'] || _0x53ebe3) !== _0x4a28f5 && _0x590f65(_0x53ebe3), _0x5bb505 = _0x5bb505['replace'](_0x3d5a49, '=\x27$1\x27]'), _0x254a9c['matchesSelector'] && _0x25519c && !_0x38ae32[_0x5bb505 + '\x20'] && (!_0x488a3d || !_0x488a3d['test'](_0x5bb505)) && (!_0x58ee30 || !_0x58ee30['test'](_0x5bb505))) try {
			var _0x335996 = _0x367faf['call'](_0x53ebe3, _0x5bb505);
			if (_0x335996 || _0x254a9c['disconnectedMatch'] || _0x53ebe3['document'] && 0xb !== _0x53ebe3['document']['nodeType']) return _0x335996;
		} catch (_0xc9bb03) {}
		return 0x0 < _0x16aa51(_0x5bb505, _0x4a28f5, null, [_0x53ebe3])['length'];
	};
	_0x16aa51['contains'] = function(_0x23cb2a, _0x6d1ccb) {
		return (_0x23cb2a['ownerDocument'] || _0x23cb2a) !== _0x4a28f5 && _0x590f65(_0x23cb2a), _0x28af64(_0x23cb2a, _0x6d1ccb);
	};
	_0x16aa51['attr'] = function(_0x13c4a7, _0x38567e) {
		(_0x13c4a7['ownerDocument'] || _0x13c4a7) !== _0x4a28f5 && _0x590f65(_0x13c4a7);
		var _0x1b2161 = _0x25d13c['attrHandle'][_0x38567e['toLowerCase']()],
			_0x1b2161 = _0x1b2161 && _0x3afd4d['call'](_0x25d13c['attrHandle'], _0x38567e['toLowerCase']()) ? _0x1b2161(_0x13c4a7, _0x38567e, !_0x25519c) : void 0x0;
		return void 0x0 !== _0x1b2161 ? _0x1b2161 : _0x254a9c['attributes'] || !_0x25519c ? _0x13c4a7['getAttribute'](_0x38567e) : (_0x1b2161 = _0x13c4a7['getAttributeNode'](_0x38567e)) && _0x1b2161['specified'] ? _0x1b2161['value'] : null;
	};
	_0x16aa51['escape'] = function(_0x2d79d9) {
		return (_0x2d79d9 + '')['replace'](_0x21027a, _0x1ad93b);
	};
	_0x16aa51['error'] = function(_0x257d86) {
		throw Error('Syntax\x20error,\x20unrecognized\x20expression:\x20' + _0x257d86);
	};
	_0x16aa51['uniqueSort'] = function(_0x13a5b5) {
		var _0x47052f, _0x513e02 = [],
			_0x5420f1 = 0x0,
			_0x6ecbd4 = 0x0;
		if (_0x4d713d = !_0x254a9c['detectDuplicates'], _0x399ce2 = !_0x254a9c['sortStable'] && _0x13a5b5['slice'](0x0), _0x13a5b5['sort'](_0x3df2a1), _0x4d713d) {
			for (; _0x47052f = _0x13a5b5[_0x6ecbd4++];) _0x47052f === _0x13a5b5[_0x6ecbd4] && (_0x5420f1 = _0x513e02['push'](_0x6ecbd4));
			for (; _0x5420f1--;) _0x13a5b5['splice'](_0x513e02[_0x5420f1], 0x1);
		}
		return _0x399ce2 = null, _0x13a5b5;
	};
	_0x457591 = _0x16aa51['getText'] = function(_0x3aac4a) {
		var _0x4e37b8, _0x574593 = '',
			_0x21d138 = 0x0;
		if (_0x4e37b8 = _0x3aac4a['nodeType'])
			if (0x1 === _0x4e37b8 || 0x9 === _0x4e37b8 || 0xb === _0x4e37b8) {
				if ('string' == typeof _0x3aac4a['textContent']) return _0x3aac4a['textContent'];
				for (_0x3aac4a = _0x3aac4a['firstChild']; _0x3aac4a; _0x3aac4a = _0x3aac4a['nextSibling']) _0x574593 += _0x457591(_0x3aac4a);
			} else {
				if (0x3 === _0x4e37b8 || 0x4 === _0x4e37b8) return _0x3aac4a['nodeValue'];
			}
		else
			for (; _0x4e37b8 = _0x3aac4a[_0x21d138++];) _0x574593 += _0x457591(_0x4e37b8);
		return _0x574593;
	};
	_0x25d13c = _0x16aa51['selectors'] = {
		'cacheLength': 0x32,
		'createPseudo': _0x22d59d,
		'match': _0x1e1e8c,
		'attrHandle': {},
		'find': {},
		'relative': {
			'>': {
				'dir': 'parentNode',
				'first': !0x0
			},
			'\x20': {
				'dir': 'parentNode'
			},
			'+': {
				'dir': 'previousSibling',
				'first': !0x0
			},
			'~': {
				'dir': 'previousSibling'
			}
		},
		'preFilter': {
			'ATTR': function(_0x3ae712) {
				return _0x3ae712[0x1] = _0x3ae712[0x1]['replace'](_0x349975, _0x257321), _0x3ae712[0x3] = (_0x3ae712[0x3] || _0x3ae712[0x4] || _0x3ae712[0x5] || '')['replace'](_0x349975, _0x257321), '~=' === _0x3ae712[0x2] && (_0x3ae712[0x3] = '\x20' + _0x3ae712[0x3] + '\x20'), _0x3ae712['slice'](0x0, 0x4);
			},
			'CHILD': function(_0x2d6962) {
				return _0x2d6962[0x1] = _0x2d6962[0x1]['toLowerCase'](), 'nth' === _0x2d6962[0x1]['slice'](0x0, 0x3) ? (_0x2d6962[0x3] || _0x16aa51['error'](_0x2d6962[0x0]), _0x2d6962[0x4] = +(_0x2d6962[0x4] ? _0x2d6962[0x5] + (_0x2d6962[0x6] || 0x1) : 0x2 * ('even' === _0x2d6962[0x3] || 'odd' === _0x2d6962[0x3])), _0x2d6962[0x5] = +(_0x2d6962[0x7] + _0x2d6962[0x8] || 'odd' === _0x2d6962[0x3])) : _0x2d6962[0x3] && _0x16aa51['error'](_0x2d6962[0x0]), _0x2d6962;
			},
			'PSEUDO': function(_0x3424ac) {
				var _0x39974f, _0x24f3c3 = !_0x3424ac[0x6] && _0x3424ac[0x2];
				return _0x1e1e8c['CHILD']['test'](_0x3424ac[0x0]) ? null : (_0x3424ac[0x3] ? _0x3424ac[0x2] = _0x3424ac[0x4] || _0x3424ac[0x5] || '' : _0x24f3c3 && _0xba6b2d['test'](_0x24f3c3) && (_0x39974f = _0x3d9f83(_0x24f3c3, !0x0)) && (_0x39974f = _0x24f3c3['indexOf'](')', _0x24f3c3['length'] - _0x39974f) - _0x24f3c3['length']) && (_0x3424ac[0x0] = _0x3424ac[0x0]['slice'](0x0, _0x39974f), _0x3424ac[0x2] = _0x24f3c3['slice'](0x0, _0x39974f)), _0x3424ac['slice'](0x0, 0x3));
			}
		},
		'filter': {
			'TAG': function(_0x113184) {
				var _0x2f457a = _0x113184['replace'](_0x349975, _0x257321)['toLowerCase']();
				return '*' === _0x113184 ? function() {
					return !0x0;
				} : function(_0x301c6b) {
					return _0x301c6b['nodeName'] && _0x301c6b['nodeName']['toLowerCase']() === _0x2f457a;
				};
			},
			'CLASS': function(_0x568463) {
				var _0x373078 = _0x3cfb47[_0x568463 + '\x20'];
				return _0x373078 || (_0x373078 = RegExp('(^|[\x5cx20\x5ct\x5cr\x5cn\x5cf])' + _0x568463 + '([\x5cx20\x5ct\x5cr\x5cn\x5cf]|$)')) && _0x3cfb47(_0x568463, function(_0x2e0964) {
					return _0x373078['test']('string' == typeof _0x2e0964['className'] && _0x2e0964['className'] || 'undefined' != typeof _0x2e0964['getAttribute'] && _0x2e0964['getAttribute']('class') || '');
				});
			},
			'ATTR': function(_0x553aea, _0x41cbdc, _0x253343) {
				return function(_0x57312b) {
					_0x57312b = _0x16aa51['attr'](_0x57312b, _0x553aea);
					return null == _0x57312b ? '!=' === _0x41cbdc : !_0x41cbdc || (_0x57312b += '', '=' === _0x41cbdc ? _0x57312b === _0x253343 : '!=' === _0x41cbdc ? _0x57312b !== _0x253343 : '^=' === _0x41cbdc ? _0x253343 && 0x0 === _0x57312b['indexOf'](_0x253343) : '*=' === _0x41cbdc ? _0x253343 && -0x1 < _0x57312b['indexOf'](_0x253343) : '$=' === _0x41cbdc ? _0x253343 && _0x57312b['slice'](-_0x253343['length']) === _0x253343 : '~=' === _0x41cbdc ? -0x1 < ('\x20' + _0x57312b['replace'](_0x1b6852, '\x20') + '\x20')['indexOf'](_0x253343) : '|=' === _0x41cbdc && (_0x57312b === _0x253343 || _0x57312b['slice'](0x0, _0x253343['length'] + 0x1) === _0x253343 + '-'));
				};
			},
			'CHILD': function(_0x148e96, _0x49ad92, _0x44d1a3, _0xb85572, _0x2fd20b) {
				var _0x858a5d = 'nth' !== _0x148e96['slice'](0x0, 0x3),
					_0x3f7181 = 'last' !== _0x148e96['slice'](-0x4),
					_0x281956 = 'of-type' === _0x49ad92;
				return 0x1 === _0xb85572 && 0x0 === _0x2fd20b ? function(_0xb8cc18) {
					return !!_0xb8cc18['parentNode'];
				} : function(_0x301b42, _0x232c7e, _0x3d485b) {
					var _0x364c71, _0x1a2564, _0x561a21, _0xb3f369, _0xdf1609, _0x3fbdf1;
					_0x232c7e = _0x858a5d !== _0x3f7181 ? 'nextSibling' : 'previousSibling';
					var _0x3e5a07 = _0x301b42['parentNode'],
						_0xfcb5d1 = _0x281956 && _0x301b42['nodeName']['toLowerCase']();
					_0x3d485b = !_0x3d485b && !_0x281956;
					var _0x5b122a = !0x1;
					if (_0x3e5a07) {
						if (_0x858a5d) {
							for (; _0x232c7e;) {
								for (_0xb3f369 = _0x301b42; _0xb3f369 = _0xb3f369[_0x232c7e];)
									if (_0x281956 ? _0xb3f369['nodeName']['toLowerCase']() === _0xfcb5d1 : 0x1 === _0xb3f369['nodeType']) return !0x1;
								_0x3fbdf1 = _0x232c7e = 'only' === _0x148e96 && !_0x3fbdf1 && 'nextSibling';
							}
							return !0x0;
						}
						if (_0x3fbdf1 = [_0x3f7181 ? _0x3e5a07['firstChild'] : _0x3e5a07['lastChild']], _0x3f7181 && _0x3d485b) {
							_0xb3f369 = _0x3e5a07;
							_0x561a21 = _0xb3f369[_0x5dc766] || (_0xb3f369[_0x5dc766] = {});
							_0x1a2564 = _0x561a21[_0xb3f369['uniqueID']] || (_0x561a21[_0xb3f369['uniqueID']] = {});
							_0x364c71 = _0x1a2564[_0x148e96] || [];
							_0x5b122a = (_0xdf1609 = _0x364c71[0x0] === _0x293003 && _0x364c71[0x1]) && _0x364c71[0x2];
							for (_0xb3f369 = _0xdf1609 && _0x3e5a07['childNodes'][_0xdf1609]; _0xb3f369 = ++_0xdf1609 && _0xb3f369 && _0xb3f369[_0x232c7e] || (_0x5b122a = _0xdf1609 = 0x0) || _0x3fbdf1['pop']();)
								if (0x1 === _0xb3f369['nodeType'] && ++_0x5b122a && _0xb3f369 === _0x301b42) {
									_0x1a2564[_0x148e96] = [_0x293003, _0xdf1609, _0x5b122a];
									break;
								}
						} else if (_0x3d485b && (_0xb3f369 = _0x301b42, _0x561a21 = _0xb3f369[_0x5dc766] || (_0xb3f369[_0x5dc766] = {}), _0x1a2564 = _0x561a21[_0xb3f369['uniqueID']] || (_0x561a21[_0xb3f369['uniqueID']] = {}), _0x364c71 = _0x1a2564[_0x148e96] || [], _0xdf1609 = _0x364c71[0x0] === _0x293003 && _0x364c71[0x1], _0x5b122a = _0xdf1609), !0x1 === _0x5b122a)
							for (;
								(_0xb3f369 = ++_0xdf1609 && _0xb3f369 && _0xb3f369[_0x232c7e] || (_0x5b122a = _0xdf1609 = 0x0) || _0x3fbdf1['pop']()) && (!(_0x281956 ? _0xb3f369['nodeName']['toLowerCase']() === _0xfcb5d1 : 0x1 === _0xb3f369['nodeType']) || !++_0x5b122a || !(_0x3d485b && (_0x561a21 = _0xb3f369[_0x5dc766] || (_0xb3f369[_0x5dc766] = {}), _0x1a2564 = _0x561a21[_0xb3f369['uniqueID']] || (_0x561a21[_0xb3f369['uniqueID']] = {}), _0x1a2564[_0x148e96] = [_0x293003, _0x5b122a]), _0xb3f369 === _0x301b42)););
						return _0x5b122a -= _0x2fd20b, _0x5b122a === _0xb85572 || 0x0 === _0x5b122a % _0xb85572 && 0x0 <= _0x5b122a / _0xb85572;
					}
				};
			},
			'PSEUDO': function(_0x109f23, _0x504202) {
				var _0xb5e493, _0x59b74d = _0x25d13c['pseudos'][_0x109f23] || _0x25d13c['setFilters'][_0x109f23['toLowerCase']()] || _0x16aa51['error']('unsupported\x20pseudo:\x20' + _0x109f23);
				return _0x59b74d[_0x5dc766] ? _0x59b74d(_0x504202) : 0x1 < _0x59b74d['length'] ? (_0xb5e493 = [_0x109f23, _0x109f23, '', _0x504202], _0x25d13c['setFilters']['hasOwnProperty'](_0x109f23['toLowerCase']()) ? _0x22d59d(function(_0x24fa25, _0x10e401) {
					for (var _0x2ac39d, _0x317074 = _0x59b74d(_0x24fa25, _0x504202), _0x4c74f8 = _0x317074['length']; _0x4c74f8--;) _0x2ac39d = _0x447d39(_0x24fa25, _0x317074[_0x4c74f8]), _0x24fa25[_0x2ac39d] = !(_0x10e401[_0x2ac39d] = _0x317074[_0x4c74f8]);
				}) : function(_0xbb8204) {
					return _0x59b74d(_0xbb8204, 0x0, _0xb5e493);
				}) : _0x59b74d;
			}
		},
		'pseudos': {
			'not': _0x22d59d(function(_0x1212aa) {
				var _0x21a8d7 = [],
					_0x880236 = [],
					_0x260d6b = _0x377006(_0x1212aa['replace'](_0x56dc17, '$1'));
				return _0x260d6b[_0x5dc766] ? _0x22d59d(function(_0x5c8300, _0x368cef, _0x571cc3, _0x525a4d) {
					var _0x229d1d;
					_0x571cc3 = _0x260d6b(_0x5c8300, null, _0x525a4d, []);
					for (_0x525a4d = _0x5c8300['length']; _0x525a4d--;)(_0x229d1d = _0x571cc3[_0x525a4d]) && (_0x5c8300[_0x525a4d] = !(_0x368cef[_0x525a4d] = _0x229d1d));
				}) : function(_0xbae79b, _0x3d7540, _0x5b1e87) {
					return _0x21a8d7[0x0] = _0xbae79b, _0x260d6b(_0x21a8d7, null, _0x5b1e87, _0x880236), _0x21a8d7[0x0] = null, !_0x880236['pop']();
				};
			}),
			'has': _0x22d59d(function(_0x3004af) {
				return function(_0x25ee66) {
					return 0x0 < _0x16aa51(_0x3004af, _0x25ee66)['length'];
				};
			}),
			'contains': _0x22d59d(function(_0x3b9ba4) {
				return _0x3b9ba4 = _0x3b9ba4['replace'](_0x349975, _0x257321),
					function(_0x44aaa3) {
						return -0x1 < (_0x44aaa3['textContent'] || _0x44aaa3['innerText'] || _0x457591(_0x44aaa3))['indexOf'](_0x3b9ba4);
					};
			}),
			'lang': _0x22d59d(function(_0x25ea90) {
				return _0x5d6f78['test'](_0x25ea90 || '') || _0x16aa51['error']('unsupported\x20lang:\x20' + _0x25ea90), _0x25ea90 = _0x25ea90['replace'](_0x349975, _0x257321)['toLowerCase'](),
					function(_0x56e401) {
						var _0x11f258;
						do
							if (_0x11f258 = _0x25519c ? _0x56e401['lang'] : _0x56e401['getAttribute']('xml:lang') || _0x56e401['getAttribute']('lang')) return _0x11f258 = _0x11f258['toLowerCase'](), _0x11f258 === _0x25ea90 || 0x0 === _0x11f258['indexOf'](_0x25ea90 + '-'); while ((_0x56e401 = _0x56e401['parentNode']) && 0x1 === _0x56e401['nodeType']);
						return !0x1;
					};
			}),
			'target': function(_0x594d4f) {
				var _0x35b39e = _0xea573b['location'] && _0xea573b['location']['hash'];
				return _0x35b39e && _0x35b39e['slice'](0x1) === _0x594d4f['id'];
			},
			'root': function(_0x23c69d) {
				return _0x23c69d === _0x17968c;
			},
			'focus': function(_0x29f4f5) {
				return _0x29f4f5 === _0x4a28f5['activeElement'] && (!_0x4a28f5['hasFocus'] || _0x4a28f5['hasFocus']()) && !(!_0x29f4f5['type'] && !_0x29f4f5['href'] && !~_0x29f4f5['tabIndex']);
			},
			'enabled': _0x474e26(!0x1),
			'disabled': _0x474e26(!0x0),
			'checked': function(_0x3427da) {
				var _0x2b723c = _0x3427da['nodeName']['toLowerCase']();
				return 'input' === _0x2b723c && !!_0x3427da['checked'] || 'option' === _0x2b723c && !!_0x3427da['selected'];
			},
			'selected': function(_0x17ae5f) {
				return _0x17ae5f['parentNode'] && _0x17ae5f['parentNode']['selectedIndex'], !0x0 === _0x17ae5f['selected'];
			},
			'empty': function(_0x47e53c) {
				for (_0x47e53c = _0x47e53c['firstChild']; _0x47e53c; _0x47e53c = _0x47e53c['nextSibling'])
					if (0x6 > _0x47e53c['nodeType']) return !0x1;
				return !0x0;
			},
			'parent': function(_0x53c51e) {
				return !_0x25d13c['pseudos']['empty'](_0x53c51e);
			},
			'header': function(_0x4a6122) {
				return _0x237236['test'](_0x4a6122['nodeName']);
			},
			'input': function(_0x2e3cb6) {
				return _0x43ada7['test'](_0x2e3cb6['nodeName']);
			},
			'button': function(_0x2810da) {
				var _0x4427f3 = _0x2810da['nodeName']['toLowerCase']();
				return 'input' === _0x4427f3 && 'button' === _0x2810da['type'] || 'button' === _0x4427f3;
			},
			'text': function(_0x14bc87) {
				var _0x4af6a4;
				return 'input' === _0x14bc87['nodeName']['toLowerCase']() && 'text' === _0x14bc87['type'] && (null == (_0x4af6a4 = _0x14bc87['getAttribute']('type')) || 'text' === _0x4af6a4['toLowerCase']());
			},
			'first': _0x4b0be4(function() {
				return [0x0];
			}),
			'last': _0x4b0be4(function(_0xd6581, _0x164c97) {
				return [_0x164c97 - 0x1];
			}),
			'eq': _0x4b0be4(function(_0x3855e2, _0x465925, _0x5168e3) {
				return [0x0 > _0x5168e3 ? _0x5168e3 + _0x465925 : _0x5168e3];
			}),
			'even': _0x4b0be4(function(_0x5b8b86, _0x5a67c5) {
				for (var _0x162d29 = 0x0; _0x162d29 < _0x5a67c5; _0x162d29 += 0x2) _0x5b8b86['push'](_0x162d29);
				return _0x5b8b86;
			}),
			'odd': _0x4b0be4(function(_0x3ce3c2, _0x1ad410) {
				for (var _0x12555d = 0x1; _0x12555d < _0x1ad410; _0x12555d += 0x2) _0x3ce3c2['push'](_0x12555d);
				return _0x3ce3c2;
			}),
			'lt': _0x4b0be4(function(_0x46b79a, _0xa9b862, _0x1f19ad) {
				for (_0xa9b862 = 0x0 > _0x1f19ad ? _0x1f19ad + _0xa9b862 : _0x1f19ad; 0x0 <= --_0xa9b862;) _0x46b79a['push'](_0xa9b862);
				return _0x46b79a;
			}),
			'gt': _0x4b0be4(function(_0xc851d7, _0x49ae45, _0x102aad) {
				for (_0x102aad = 0x0 > _0x102aad ? _0x102aad + _0x49ae45 : _0x102aad; ++_0x102aad < _0x49ae45;) _0xc851d7['push'](_0x102aad);
				return _0xc851d7;
			})
		}
	};
	_0x25d13c['pseudos']['nth'] = _0x25d13c['pseudos']['eq'];
	for (_0xe2d654 in {
			'radio': !0x0,
			'checkbox': !0x0,
			'file': !0x0,
			'password': !0x0,
			'image': !0x0
		}) _0x25d13c['pseudos'][_0xe2d654] = _0x2a5cf7(_0xe2d654);
	for (_0xe2d654 in {
			'submit': !0x0,
			'reset': !0x0
		}) _0x25d13c['pseudos'][_0xe2d654] = _0x4bbada(_0xe2d654);
	_0x55ed3a['prototype'] = _0x25d13c['filters'] = _0x25d13c['pseudos'];
	_0x25d13c['setFilters'] = new _0x55ed3a();
	_0x3d9f83 = _0x16aa51['tokenize'] = function(_0x9f2e33, _0x218410) {
		var _0x249648, _0x18d225, _0x2eae38, _0x5066aa, _0x379f1b, _0x236575, _0x2478a8;
		if (_0x379f1b = _0x24af44[_0x9f2e33 + '\x20']) return _0x218410 ? 0x0 : _0x379f1b['slice'](0x0);
		_0x379f1b = _0x9f2e33;
		_0x236575 = [];
		for (_0x2478a8 = _0x25d13c['preFilter']; _0x379f1b;) {
			_0x249648 && !(_0x18d225 = _0x3f517a['exec'](_0x379f1b)) || (_0x18d225 && (_0x379f1b = _0x379f1b['slice'](_0x18d225[0x0]['length']) || _0x379f1b), _0x236575['push'](_0x2eae38 = []));
			_0x249648 = !0x1;
			(_0x18d225 = _0x562c51['exec'](_0x379f1b)) && (_0x249648 = _0x18d225['shift'](), _0x2eae38['push']({
				'value': _0x249648,
				'type': _0x18d225[0x0]['replace'](_0x56dc17, '\x20')
			}), _0x379f1b = _0x379f1b['slice'](_0x249648['length']));
			for (_0x5066aa in _0x25d13c['filter']) !(_0x18d225 = _0x1e1e8c[_0x5066aa]['exec'](_0x379f1b)) || _0x2478a8[_0x5066aa] && !(_0x18d225 = _0x2478a8[_0x5066aa](_0x18d225)) || (_0x249648 = _0x18d225['shift'](), _0x2eae38['push']({
				'value': _0x249648,
				'type': _0x5066aa,
				'matches': _0x18d225
			}), _0x379f1b = _0x379f1b['slice'](_0x249648['length']));
			if (!_0x249648) break;
		}
		return _0x218410 ? _0x379f1b['length'] : _0x379f1b ? _0x16aa51['error'](_0x9f2e33) : _0x24af44(_0x9f2e33, _0x236575)['slice'](0x0);
	};
	_0x57dd01 = (_0x377006 = _0x16aa51['compile'] = function(_0x50f22e, _0xa93f14) {
		var _0x549884, _0x39a214 = [],
			_0x21ecb5 = [],
			_0x5ec206 = _0x38ae32[_0x50f22e + '\x20'];
		if (!_0x5ec206) {
			_0xa93f14 || (_0xa93f14 = _0x3d9f83(_0x50f22e));
			for (_0x549884 = _0xa93f14['length']; _0x549884--;) _0x5ec206 = _0x58c979(_0xa93f14[_0x549884]), _0x5ec206[_0x5dc766] ? _0x39a214['push'](_0x5ec206) : _0x21ecb5['push'](_0x5ec206);
			_0x549884 = _0x38ae32;
			var _0x2e15ef = 0x0 < _0x39a214['length'],
				_0xb33263 = 0x0 < _0x21ecb5['length'],
				_0x5ec206 = function(_0x2bfc40, _0x3b7dfc, _0x2b8f32, _0x15f827, _0xb1f6bc) {
					var _0x471f81, _0x207778, _0xde547c, _0x1a1b37 = 0x0,
						_0x2210c3 = '0',
						_0x51e8d6 = _0x2bfc40 && [],
						_0x21866b = [],
						_0x4b1ca2 = _0x2b73c4,
						_0x1b0a79 = _0x2bfc40 || _0xb33263 && _0x25d13c['find']['TAG']('*', _0xb1f6bc),
						_0x5280c9 = _0x293003 += null == _0x4b1ca2 ? 0x1 : Math['random']() || 0.1,
						_0x2619e1 = _0x1b0a79['length'];
					for (_0xb1f6bc && (_0x2b73c4 = _0x3b7dfc === _0x4a28f5 || _0x3b7dfc || _0xb1f6bc); _0x2210c3 !== _0x2619e1 && null != (_0x471f81 = _0x1b0a79[_0x2210c3]); _0x2210c3++) {
						if (_0xb33263 && _0x471f81) {
							_0x207778 = 0x0;
							for (_0x3b7dfc || _0x471f81['ownerDocument'] === _0x4a28f5 || (_0x590f65(_0x471f81), _0x2b8f32 = !_0x25519c); _0xde547c = _0x21ecb5[_0x207778++];)
								if (_0xde547c(_0x471f81, _0x3b7dfc || _0x4a28f5, _0x2b8f32)) {
									_0x15f827['push'](_0x471f81);
									break;
								} _0xb1f6bc && (_0x293003 = _0x5280c9);
						}
						_0x2e15ef && ((_0x471f81 = !_0xde547c && _0x471f81) && _0x1a1b37--, _0x2bfc40 && _0x51e8d6['push'](_0x471f81));
					}
					if (_0x1a1b37 += _0x2210c3, _0x2e15ef && _0x2210c3 !== _0x1a1b37) {
						for (_0x207778 = 0x0; _0xde547c = _0x39a214[_0x207778++];) _0xde547c(_0x51e8d6, _0x21866b, _0x3b7dfc, _0x2b8f32);
						if (_0x2bfc40) {
							if (0x0 < _0x1a1b37)
								for (; _0x2210c3--;) _0x51e8d6[_0x2210c3] || _0x21866b[_0x2210c3] || (_0x21866b[_0x2210c3] = _0x34bbc0['call'](_0x15f827));
							_0x21866b = _0x429e3a(_0x21866b);
						}
						_0x540e62['apply'](_0x15f827, _0x21866b);
						_0xb1f6bc && !_0x2bfc40 && 0x0 < _0x21866b['length'] && 0x1 < _0x1a1b37 + _0x39a214['length'] && _0x16aa51['uniqueSort'](_0x15f827);
					}
					return _0xb1f6bc && (_0x293003 = _0x5280c9, _0x2b73c4 = _0x4b1ca2), _0x51e8d6;
				},
				_0x5ec206 = _0x2e15ef ? _0x22d59d(_0x5ec206) : _0x5ec206,
				_0x5ec206 = _0x549884(_0x50f22e, _0x5ec206);
			_0x5ec206['selector'] = _0x50f22e;
		}
		return _0x5ec206;
	}, _0x4f7dec = _0x16aa51['select'] = function(_0x21883d, _0x5a5c23, _0x55a4eb, _0x2d9487) {
		var _0x24a789, _0x490b60, _0x3aa43b, _0x448015, _0x219c87, _0x2f6095 = 'function' == typeof _0x21883d && _0x21883d,
			_0x2456f2 = !_0x2d9487 && _0x3d9f83(_0x21883d = _0x2f6095['selector'] || _0x21883d);
		if (_0x55a4eb = _0x55a4eb || [], 0x1 === _0x2456f2['length']) {
			if (_0x490b60 = _0x2456f2[0x0] = _0x2456f2[0x0]['slice'](0x0), 0x2 < _0x490b60['length'] && 'ID' === (_0x3aa43b = _0x490b60[0x0])['type'] && 0x9 === _0x5a5c23['nodeType'] && _0x25519c && _0x25d13c['relative'][_0x490b60[0x1]['type']]) {
				if (_0x5a5c23 = (_0x25d13c['find']['ID'](_0x3aa43b['matches'][0x0]['replace'](_0x349975, _0x257321), _0x5a5c23) || [])[0x0], !_0x5a5c23) return _0x55a4eb;
				_0x2f6095 && (_0x5a5c23 = _0x5a5c23['parentNode']);
				_0x21883d = _0x21883d['slice'](_0x490b60['shift']()['value']['length']);
			}
			for (_0x24a789 = _0x1e1e8c['needsContext']['test'](_0x21883d) ? 0x0 : _0x490b60['length']; _0x24a789-- && !(_0x3aa43b = _0x490b60[_0x24a789], _0x25d13c['relative'][_0x448015 = _0x3aa43b['type']]);)
				if ((_0x219c87 = _0x25d13c['find'][_0x448015]) && (_0x2d9487 = _0x219c87(_0x3aa43b['matches'][0x0]['replace'](_0x349975, _0x257321), _0x2c3797['test'](_0x490b60[0x0]['type']) && _0x8981b1(_0x5a5c23['parentNode']) || _0x5a5c23))) {
					if (_0x490b60['splice'](_0x24a789, 0x1), _0x21883d = _0x2d9487['length'] && _0xb34789(_0x490b60), !_0x21883d) return _0x540e62['apply'](_0x55a4eb, _0x2d9487), _0x55a4eb;
					break;
				}
		}
		return (_0x2f6095 || _0x377006(_0x21883d, _0x2456f2))(_0x2d9487, _0x5a5c23, !_0x25519c, _0x55a4eb, !_0x5a5c23 || _0x2c3797['test'](_0x21883d) && _0x8981b1(_0x5a5c23['parentNode']) || _0x5a5c23), _0x55a4eb;
	}, _0x254a9c['sortStable'] = _0x5dc766['split']('')['sort'](_0x3df2a1)['join']('') === _0x5dc766, _0x254a9c['detectDuplicates'] = !!_0x4d713d, _0x590f65(), _0x254a9c['sortDetached'] = _0x180f0b(function(_0x281f40) {
		return 0x1 & _0x281f40['compareDocumentPosition'](_0x4a28f5['createElement']('fieldset'));
	}), _0x180f0b(function(_0x3431e6) {
		return _0x3431e6['innerHTML'] = '<a\x20href=\x27#\x27></a>', '#' === _0x3431e6['firstChild']['getAttribute']('href');
	}) || _0x74a073('type|href|height|width', function(_0x57a7a4, _0x5959fe, _0x2a5835) {
		if (!_0x2a5835) return _0x57a7a4['getAttribute'](_0x5959fe, 'type' === _0x5959fe['toLowerCase']() ? 0x1 : 0x2);
	}), _0x254a9c['attributes'] && _0x180f0b(function(_0x131d37) {
		return _0x131d37['innerHTML'] = '<input/>', _0x131d37['firstChild']['setAttribute']('value', ''), '' === _0x131d37['firstChild']['getAttribute']('value');
	}) || _0x74a073('value', function(_0x4660a3, _0x160cf1, _0x3368de) {
		if (!_0x3368de && 'input' === _0x4660a3['nodeName']['toLowerCase']()) return _0x4660a3['defaultValue'];
	}), _0x180f0b(function(_0x32ed35) {
		return null == _0x32ed35['getAttribute']('disabled');
	}) || _0x74a073('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function(_0x34c2c2, _0x2e3583, _0x2f6947) {
		var _0x889d78;
		if (!_0x2f6947) return !0x0 === _0x34c2c2[_0x2e3583] ? _0x2e3583['toLowerCase']() : (_0x889d78 = _0x34c2c2['getAttributeNode'](_0x2e3583)) && _0x889d78['specified'] ? _0x889d78['value'] : null;
	}), _0x16aa51);
	_0x33c3a4['find'] = _0x57dd01;
	_0x33c3a4['expr'] = _0x57dd01['selectors'];
	_0x33c3a4['expr'][':'] = _0x33c3a4['expr']['pseudos'];
	_0x33c3a4['uniqueSort'] = _0x33c3a4['unique'] = _0x57dd01['uniqueSort'];
	_0x33c3a4['text'] = _0x57dd01['getText'];
	_0x33c3a4['isXMLDoc'] = _0x57dd01['isXML'];
	_0x33c3a4['contains'] = _0x57dd01['contains'];
	_0x33c3a4['escapeSelector'] = _0x57dd01['escape'];
	var _0x290e55 = function(_0x5218a4, _0x2c45e4, _0x456f15) {
			for (var _0x1940d5 = [], _0x271957 = void 0x0 !== _0x456f15;
				(_0x5218a4 = _0x5218a4[_0x2c45e4]) && 0x9 !== _0x5218a4['nodeType'];)
				if (0x1 === _0x5218a4['nodeType']) {
					if (_0x271957 && _0x33c3a4(_0x5218a4)['is'](_0x456f15)) break;
					_0x1940d5['push'](_0x5218a4);
				} return _0x1940d5;
		},
		_0x7c3f0e = function(_0x4a6fb1, _0x474880) {
			for (var _0x2c00ed = []; _0x4a6fb1; _0x4a6fb1 = _0x4a6fb1['nextSibling']) 0x1 === _0x4a6fb1['nodeType'] && _0x4a6fb1 !== _0x474880 && _0x2c00ed['push'](_0x4a6fb1);
			return _0x2c00ed;
		},
		_0x258ae2 = _0x33c3a4['expr']['match']['needsContext'],
		_0xd86d8e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		_0x4544eb = /^.[^:#\[\.,]*$/;
	_0x33c3a4['filter'] = function(_0x197893, _0x1d3afe, _0x3036f8) {
		var _0x165b5e = _0x1d3afe[0x0];
		return _0x3036f8 && (_0x197893 = ':not(' + _0x197893 + ')'), 0x1 === _0x1d3afe['length'] && 0x1 === _0x165b5e['nodeType'] ? _0x33c3a4['find']['matchesSelector'](_0x165b5e, _0x197893) ? [_0x165b5e] : [] : _0x33c3a4['find']['matches'](_0x197893, _0x33c3a4['grep'](_0x1d3afe, function(_0x445e4f) {
			return 0x1 === _0x445e4f['nodeType'];
		}));
	};
	_0x33c3a4['fn']['extend']({
		'find': function(_0x1c6eb5) {
			var _0x26f65f, _0x5df8e7, _0x1264e0 = this['length'],
				_0x5578a6 = this;
			if ('string' != typeof _0x1c6eb5) return this['pushStack'](_0x33c3a4(_0x1c6eb5)['filter'](function() {
				for (_0x26f65f = 0x0; _0x26f65f < _0x1264e0; _0x26f65f++)
					if (_0x33c3a4['contains'](_0x5578a6[_0x26f65f], this)) return !0x0;
			}));
			_0x5df8e7 = this['pushStack']([]);
			for (_0x26f65f = 0x0; _0x26f65f < _0x1264e0; _0x26f65f++) _0x33c3a4['find'](_0x1c6eb5, _0x5578a6[_0x26f65f], _0x5df8e7);
			return 0x1 < _0x1264e0 ? _0x33c3a4['uniqueSort'](_0x5df8e7) : _0x5df8e7;
		},
		'filter': function(_0x16548d) {
			return this['pushStack'](_0x4c3f39(this, _0x16548d || [], !0x1));
		},
		'not': function(_0x371bad) {
			return this['pushStack'](_0x4c3f39(this, _0x371bad || [], !0x0));
		},
		'is': function(_0x4d3259) {
			return !!_0x4c3f39(this, 'string' == typeof _0x4d3259 && _0x258ae2['test'](_0x4d3259) ? _0x33c3a4(_0x4d3259) : _0x4d3259 || [], !0x1)['length'];
		}
	});
	var _0x5e6c92, _0x197f1e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(_0x33c3a4['fn']['init'] = function(_0x215b14, _0x36c838, _0xd2623b) {
		var _0x27ed34, _0x23ac7e;
		if (!_0x215b14) return this;
		if (_0xd2623b = _0xd2623b || _0x5e6c92, 'string' == typeof _0x215b14) {
			if (_0x27ed34 = '<' === _0x215b14[0x0] && '>' === _0x215b14[_0x215b14['length'] - 0x1] && 0x3 <= _0x215b14['length'] ? [null, _0x215b14, null] : _0x197f1e['exec'](_0x215b14), !_0x27ed34 || !_0x27ed34[0x1] && _0x36c838) return !_0x36c838 || _0x36c838['jquery'] ? (_0x36c838 || _0xd2623b)['find'](_0x215b14) : this['constructor'](_0x36c838)['find'](_0x215b14);
			if (_0x27ed34[0x1]) {
				if (_0x36c838 = _0x36c838 instanceof _0x33c3a4 ? _0x36c838[0x0] : _0x36c838, _0x33c3a4['merge'](this, _0x33c3a4['parseHTML'](_0x27ed34[0x1], _0x36c838 && _0x36c838['nodeType'] ? _0x36c838['ownerDocument'] || _0x36c838 : _0x28899d, !0x0)), _0xd86d8e['test'](_0x27ed34[0x1]) && _0x33c3a4['isPlainObject'](_0x36c838))
					for (_0x27ed34 in _0x36c838) _0x33c3a4['isFunction'](this[_0x27ed34]) ? this[_0x27ed34](_0x36c838[_0x27ed34]) : this['attr'](_0x27ed34, _0x36c838[_0x27ed34]);
				return this;
			}
			return _0x23ac7e = _0x28899d['getElementById'](_0x27ed34[0x2]), _0x23ac7e && (this[0x0] = _0x23ac7e, this['length'] = 0x1), this;
		}
		return _0x215b14['nodeType'] ? (this[0x0] = _0x215b14, this['length'] = 0x1, this) : _0x33c3a4['isFunction'](_0x215b14) ? void 0x0 !== _0xd2623b['ready'] ? _0xd2623b['ready'](_0x215b14) : _0x215b14(_0x33c3a4) : _0x33c3a4['makeArray'](_0x215b14, this);
	})['prototype'] = _0x33c3a4['fn'];
	_0x5e6c92 = _0x33c3a4(_0x28899d);
	var _0x432f39 = /^(?:parents|prev(?:Until|All))/,
		_0x12d7af = {
			'children': !0x0,
			'contents': !0x0,
			'next': !0x0,
			'prev': !0x0
		};
	_0x33c3a4['fn']['extend']({
		'has': function(_0x1d210f) {
			var _0xa66234 = _0x33c3a4(_0x1d210f, this),
				_0x45c8ff = _0xa66234['length'];
			return this['filter'](function() {
				for (var _0x5ba639 = 0x0; _0x5ba639 < _0x45c8ff; _0x5ba639++)
					if (_0x33c3a4['contains'](this, _0xa66234[_0x5ba639])) return !0x0;
			});
		},
		'closest': function(_0x1df569, _0x2d129c) {
			var _0x66713b, _0x4b3699 = 0x0,
				_0x109731 = this['length'],
				_0x219b97 = [],
				_0x284c2c = 'string' != typeof _0x1df569 && _0x33c3a4(_0x1df569);
			if (!_0x258ae2['test'](_0x1df569))
				for (; _0x4b3699 < _0x109731; _0x4b3699++)
					for (_0x66713b = this[_0x4b3699]; _0x66713b && _0x66713b !== _0x2d129c; _0x66713b = _0x66713b['parentNode'])
						if (0xb > _0x66713b['nodeType'] && (_0x284c2c ? -0x1 < _0x284c2c['index'](_0x66713b) : 0x1 === _0x66713b['nodeType'] && _0x33c3a4['find']['matchesSelector'](_0x66713b, _0x1df569))) {
							_0x219b97['push'](_0x66713b);
							break;
						} return this['pushStack'](0x1 < _0x219b97['length'] ? _0x33c3a4['uniqueSort'](_0x219b97) : _0x219b97);
		},
		'index': function(_0x159b68) {
			return _0x159b68 ? 'string' == typeof _0x159b68 ? _0x2ec965['call'](_0x33c3a4(_0x159b68), this[0x0]) : _0x2ec965['call'](this, _0x159b68['jquery'] ? _0x159b68[0x0] : _0x159b68) : this[0x0] && this[0x0]['parentNode'] ? this['first']()['prevAll']()['length'] : -0x1;
		},
		'add': function(_0x47cea5, _0x5eb868) {
			return this['pushStack'](_0x33c3a4['uniqueSort'](_0x33c3a4['merge'](this['get'](), _0x33c3a4(_0x47cea5, _0x5eb868))));
		},
		'addBack': function(_0x3b41e0) {
			return this['add'](null == _0x3b41e0 ? this['prevObject'] : this['prevObject']['filter'](_0x3b41e0));
		}
	});
	_0x33c3a4['each']({
		'parent': function(_0x3ff090) {
			return (_0x3ff090 = _0x3ff090['parentNode']) && 0xb !== _0x3ff090['nodeType'] ? _0x3ff090 : null;
		},
		'parents': function(_0x4081dc) {
			return _0x290e55(_0x4081dc, 'parentNode');
		},
		'parentsUntil': function(_0x5a71c9, _0x2b67fc, _0x50e88c) {
			return _0x290e55(_0x5a71c9, 'parentNode', _0x50e88c);
		},
		'next': function(_0x422ce2) {
			return _0x4c4d3c(_0x422ce2, 'nextSibling');
		},
		'prev': function(_0x40039b) {
			return _0x4c4d3c(_0x40039b, 'previousSibling');
		},
		'nextAll': function(_0xf1df9f) {
			return _0x290e55(_0xf1df9f, 'nextSibling');
		},
		'prevAll': function(_0x4566eb) {
			return _0x290e55(_0x4566eb, 'previousSibling');
		},
		'nextUntil': function(_0x1465b4, _0x45b001, _0x1baaf1) {
			return _0x290e55(_0x1465b4, 'nextSibling', _0x1baaf1);
		},
		'prevUntil': function(_0x2b2eae, _0xf1d1f5, _0x1752fd) {
			return _0x290e55(_0x2b2eae, 'previousSibling', _0x1752fd);
		},
		'siblings': function(_0xf585bc) {
			return _0x7c3f0e((_0xf585bc['parentNode'] || {})['firstChild'], _0xf585bc);
		},
		'children': function(_0x1c7b59) {
			return _0x7c3f0e(_0x1c7b59['firstChild']);
		},
		'contents': function(_0x59595c) {
			return _0x6b228b(_0x59595c, 'iframe') ? _0x59595c['contentDocument'] : (_0x6b228b(_0x59595c, 'template') && (_0x59595c = _0x59595c['content'] || _0x59595c), _0x33c3a4['merge']([], _0x59595c['childNodes']));
		}
	}, function(_0x766d6b, _0x166dd2) {
		_0x33c3a4['fn'][_0x766d6b] = function(_0x307fa3, _0xfa848c) {
			var _0x4ab354 = _0x33c3a4['map'](this, _0x166dd2, _0x307fa3);
			return 'Until' !== _0x766d6b['slice'](-0x5) && (_0xfa848c = _0x307fa3), _0xfa848c && 'string' == typeof _0xfa848c && (_0x4ab354 = _0x33c3a4['filter'](_0xfa848c, _0x4ab354)), 0x1 < this['length'] && (_0x12d7af[_0x766d6b] || _0x33c3a4['uniqueSort'](_0x4ab354), _0x432f39['test'](_0x766d6b) && _0x4ab354['reverse']()), this['pushStack'](_0x4ab354);
		};
	});
	var _0x1f9e10 = /[^\x20\t\r\n\f]+/g;
	_0x33c3a4['Callbacks'] = function(_0x43d30f) {
		var _0x593dc2;
		if ('string' == typeof _0x43d30f) {
			var _0x515d21 = {};
			_0x593dc2 = (_0x33c3a4['each'](_0x43d30f['match'](_0x1f9e10) || [], function(_0x1ca6c4, _0x42dfe7) {
				_0x515d21[_0x42dfe7] = !0x0;
			}), _0x515d21);
		} else _0x593dc2 = _0x33c3a4['extend']({}, _0x43d30f);
		_0x43d30f = _0x593dc2;
		var _0x3220ea, _0x30002b, _0x2812e2, _0x44fe13, _0x2ff61b = [],
			_0x33df33 = [],
			_0xbc764e = -0x1,
			_0x27c605 = function() {
				_0x44fe13 = _0x44fe13 || _0x43d30f['once'];
				for (_0x2812e2 = _0x3220ea = !0x0; _0x33df33['length']; _0xbc764e = -0x1)
					for (_0x30002b = _0x33df33['shift'](); ++_0xbc764e < _0x2ff61b['length'];) !0x1 === _0x2ff61b[_0xbc764e]['apply'](_0x30002b[0x0], _0x30002b[0x1]) && _0x43d30f['stopOnFalse'] && (_0xbc764e = _0x2ff61b['length'], _0x30002b = !0x1);
				_0x43d30f['memory'] || (_0x30002b = !0x1);
				_0x3220ea = !0x1;
				_0x44fe13 && (_0x2ff61b = _0x30002b ? [] : '');
			},
			_0x3bda8a = {
				'add': function() {
					return _0x2ff61b && (_0x30002b && !_0x3220ea && (_0xbc764e = _0x2ff61b['length'] - 0x1, _0x33df33['push'](_0x30002b)), function _0x137f94(_0x42a705) {
						_0x33c3a4['each'](_0x42a705, function(_0x4efa94, _0x209de1) {
							_0x33c3a4['isFunction'](_0x209de1) ? _0x43d30f['unique'] && _0x3bda8a['has'](_0x209de1) || _0x2ff61b['push'](_0x209de1) : _0x209de1 && _0x209de1['length'] && 'string' !== _0x33c3a4['type'](_0x209de1) && _0x137f94(_0x209de1);
						});
					}(arguments), _0x30002b && !_0x3220ea && _0x27c605()), this;
				},
				'remove': function() {
					return _0x33c3a4['each'](arguments, function(_0x4d5422, _0x52de09) {
						for (var _0x26b35a; - 0x1 < (_0x26b35a = _0x33c3a4['inArray'](_0x52de09, _0x2ff61b, _0x26b35a));) _0x2ff61b['splice'](_0x26b35a, 0x1), _0x26b35a <= _0xbc764e && _0xbc764e--;
					}), this;
				},
				'has': function(_0x2d127d) {
					return _0x2d127d ? -0x1 < _0x33c3a4['inArray'](_0x2d127d, _0x2ff61b) : 0x0 < _0x2ff61b['length'];
				},
				'empty': function() {
					return _0x2ff61b && (_0x2ff61b = []), this;
				},
				'disable': function() {
					return _0x44fe13 = _0x33df33 = [], _0x2ff61b = _0x30002b = '', this;
				},
				'disabled': function() {
					return !_0x2ff61b;
				},
				'lock': function() {
					return _0x44fe13 = _0x33df33 = [], _0x30002b || _0x3220ea || (_0x2ff61b = _0x30002b = ''), this;
				},
				'locked': function() {
					return !!_0x44fe13;
				},
				'fireWith': function(_0x40a55e, _0x5de6c5) {
					return _0x44fe13 || (_0x5de6c5 = _0x5de6c5 || [], _0x5de6c5 = [_0x40a55e, _0x5de6c5['slice'] ? _0x5de6c5['slice']() : _0x5de6c5], _0x33df33['push'](_0x5de6c5), _0x3220ea || _0x27c605()), this;
				},
				'fire': function() {
					return _0x3bda8a['fireWith'](this, arguments), this;
				},
				'fired': function() {
					return !!_0x2812e2;
				}
			};
		return _0x3bda8a;
	};
	_0x33c3a4['extend']({
		'Deferred': function(_0xb02652) {
			var _0x1b655f = [
					['notify', 'progress', _0x33c3a4['Callbacks']('memory'), _0x33c3a4['Callbacks']('memory'), 0x2],
					['resolve', 'done', _0x33c3a4['Callbacks']('once\x20memory'), _0x33c3a4['Callbacks']('once\x20memory'), 0x0, 'resolved'],
					['reject', 'fail', _0x33c3a4['Callbacks']('once\x20memory'), _0x33c3a4['Callbacks']('once\x20memory'), 0x1, 'rejected']
				],
				_0x112ff6 = 'pending',
				_0x3271dd = {
					'state': function() {
						return _0x112ff6;
					},
					'always': function() {
						return _0x2fa8f5['done'](arguments)['fail'](arguments), this;
					},
					'catch': function(_0x205c0e) {
						return _0x3271dd['then'](null, _0x205c0e);
					},
					'pipe': function() {
						var _0x5ec09c = arguments;
						return _0x33c3a4['Deferred'](function(_0x41d0af) {
							_0x33c3a4['each'](_0x1b655f, function(_0x2f0b4b, _0x129d77) {
								var _0x526512 = _0x33c3a4['isFunction'](_0x5ec09c[_0x129d77[0x4]]) && _0x5ec09c[_0x129d77[0x4]];
								_0x2fa8f5[_0x129d77[0x1]](function() {
									var _0x1b20aa = _0x526512 && _0x526512['apply'](this, arguments);
									_0x1b20aa && _0x33c3a4['isFunction'](_0x1b20aa['promise']) ? _0x1b20aa['promise']()['progress'](_0x41d0af['notify'])['done'](_0x41d0af['resolve'])['fail'](_0x41d0af['reject']) : _0x41d0af[_0x129d77[0x0] + 'With'](this, _0x526512 ? [_0x1b20aa] : arguments);
								});
							});
							_0x5ec09c = null;
						})['promise']();
					},
					'then': function(_0x41658b, _0x77ee1b, _0x1e1a10) {
						function _0x14be1a(_0x552207, _0x4d2714, _0x332d19, _0x355e03) {
							return function() {
								var _0x314316 = this,
									_0x5351a2 = arguments,
									_0x1c4fca = function() {
										var _0x4ea133, _0x45003b;
										if (!(_0x552207 < _0x57509d)) {
											if (_0x4ea133 = _0x332d19['apply'](_0x314316, _0x5351a2), _0x4ea133 === _0x4d2714['promise']()) throw new TypeError('Thenable\x20self-resolution');
											_0x45003b = _0x4ea133 && ('object' == typeof _0x4ea133 || 'function' == typeof _0x4ea133) && _0x4ea133['then'];
											_0x33c3a4['isFunction'](_0x45003b) ? _0x355e03 ? _0x45003b['call'](_0x4ea133, _0x14be1a(_0x57509d, _0x4d2714, _0x404321, _0x355e03), _0x14be1a(_0x57509d, _0x4d2714, _0x47c5c9, _0x355e03)) : (_0x57509d++, _0x45003b['call'](_0x4ea133, _0x14be1a(_0x57509d, _0x4d2714, _0x404321, _0x355e03), _0x14be1a(_0x57509d, _0x4d2714, _0x47c5c9, _0x355e03), _0x14be1a(_0x57509d, _0x4d2714, _0x404321, _0x4d2714['notifyWith']))) : (_0x332d19 !== _0x404321 && (_0x314316 = void 0x0, _0x5351a2 = [_0x4ea133]), (_0x355e03 || _0x4d2714['resolveWith'])(_0x314316, _0x5351a2));
										}
									},
									_0x1ad615 = _0x355e03 ? _0x1c4fca : function() {
										try {
											_0x1c4fca();
										} catch (_0x42f4e8) {
											_0x33c3a4['Deferred']['exceptionHook'] && _0x33c3a4['Deferred']['exceptionHook'](_0x42f4e8, _0x1ad615['stackTrace']), _0x552207 + 0x1 >= _0x57509d && (_0x332d19 !== _0x47c5c9 && (_0x314316 = void 0x0, _0x5351a2 = [_0x42f4e8]), _0x4d2714['rejectWith'](_0x314316, _0x5351a2));
										}
									};
								_0x552207 ? _0x1ad615() : (_0x33c3a4['Deferred']['getStackHook'] && (_0x1ad615['stackTrace'] = _0x33c3a4['Deferred']['getStackHook']()), _0x250f7b['setTimeout'](_0x1ad615));
							};
						}
						var _0x57509d = 0x0;
						return _0x33c3a4['Deferred'](function(_0x38ba56) {
							_0x1b655f[0x0][0x3]['add'](_0x14be1a(0x0, _0x38ba56, _0x33c3a4['isFunction'](_0x1e1a10) ? _0x1e1a10 : _0x404321, _0x38ba56['notifyWith']));
							_0x1b655f[0x1][0x3]['add'](_0x14be1a(0x0, _0x38ba56, _0x33c3a4['isFunction'](_0x41658b) ? _0x41658b : _0x404321));
							_0x1b655f[0x2][0x3]['add'](_0x14be1a(0x0, _0x38ba56, _0x33c3a4['isFunction'](_0x77ee1b) ? _0x77ee1b : _0x47c5c9));
						})['promise']();
					},
					'promise': function(_0x15c357) {
						return null != _0x15c357 ? _0x33c3a4['extend'](_0x15c357, _0x3271dd) : _0x3271dd;
					}
				},
				_0x2fa8f5 = {};
			return _0x33c3a4['each'](_0x1b655f, function(_0x17ba7d, _0x53c82a) {
				var _0x45a2c7 = _0x53c82a[0x2],
					_0x17d036 = _0x53c82a[0x5];
				_0x3271dd[_0x53c82a[0x1]] = _0x45a2c7['add'];
				_0x17d036 && _0x45a2c7['add'](function() {
					_0x112ff6 = _0x17d036;
				}, _0x1b655f[0x3 - _0x17ba7d][0x2]['disable'], _0x1b655f[0x0][0x2]['lock']);
				_0x45a2c7['add'](_0x53c82a[0x3]['fire']);
				_0x2fa8f5[_0x53c82a[0x0]] = function() {
					return _0x2fa8f5[_0x53c82a[0x0] + 'With'](this === _0x2fa8f5 ? void 0x0 : this, arguments), this;
				};
				_0x2fa8f5[_0x53c82a[0x0] + 'With'] = _0x45a2c7['fireWith'];
			}), _0x3271dd['promise'](_0x2fa8f5), _0xb02652 && _0xb02652['call'](_0x2fa8f5, _0x2fa8f5), _0x2fa8f5;
		},
		'when': function(_0x351287) {
			var _0x296d89 = arguments['length'],
				_0x4b58dc = _0x296d89,
				_0x38c557 = Array(_0x4b58dc),
				_0x7610b2 = _0x3cb778['call'](arguments),
				_0xdd065 = _0x33c3a4['Deferred'](),
				_0x4f6c89 = function(_0x5b88fe) {
					return function(_0x84550c) {
						_0x38c557[_0x5b88fe] = this;
						_0x7610b2[_0x5b88fe] = 0x1 < arguments['length'] ? _0x3cb778['call'](arguments) : _0x84550c;
						--_0x296d89 || _0xdd065['resolveWith'](_0x38c557, _0x7610b2);
					};
				};
			if (0x1 >= _0x296d89 && (_0x4b730f(_0x351287, _0xdd065['done'](_0x4f6c89(_0x4b58dc))['resolve'], _0xdd065['reject'], !_0x296d89), 'pending' === _0xdd065['state']() || _0x33c3a4['isFunction'](_0x7610b2[_0x4b58dc] && _0x7610b2[_0x4b58dc]['then']))) return _0xdd065['then']();
			for (; _0x4b58dc--;) _0x4b730f(_0x7610b2[_0x4b58dc], _0x4f6c89(_0x4b58dc), _0xdd065['reject']);
			return _0xdd065['promise']();
		}
	});
	var _0x589963 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	_0x33c3a4['Deferred']['exceptionHook'] = function(_0x5d2df6, _0x1d16ea) {
		_0x250f7b['console'] && _0x250f7b['console']['warn'] && _0x5d2df6 && _0x589963['test'](_0x5d2df6['name']) && _0x250f7b['console']['warn']('jQuery.Deferred\x20exception:\x20' + _0x5d2df6['message'], _0x5d2df6['stack'], _0x1d16ea);
	};
	_0x33c3a4['readyException'] = function(_0x206484) {
		_0x250f7b['setTimeout'](function() {
			throw _0x206484;
		});
	};
	var _0x3e1ee3 = _0x33c3a4['Deferred']();
	_0x33c3a4['fn']['ready'] = function(_0x1bf1c1) {
		return _0x3e1ee3['then'](_0x1bf1c1)['catch'](function(_0x5d71c3) {
			_0x33c3a4['readyException'](_0x5d71c3);
		}), this;
	};
	_0x33c3a4['extend']({
		'isReady': !0x1,
		'readyWait': 0x1,
		'ready': function(_0x455867) {
			(!0x0 === _0x455867 ? --_0x33c3a4['readyWait'] : _0x33c3a4['isReady']) || (_0x33c3a4['isReady'] = !0x0, !0x0 !== _0x455867 && 0x0 < --_0x33c3a4['readyWait'] || _0x3e1ee3['resolveWith'](_0x28899d, [_0x33c3a4]));
		}
	});
	_0x33c3a4['ready']['then'] = _0x3e1ee3['then'];
	'complete' === _0x28899d['readyState'] || 'loading' !== _0x28899d['readyState'] && !_0x28899d['documentElement']['doScroll'] ? _0x250f7b['setTimeout'](_0x33c3a4['ready']) : (_0x28899d['addEventListener']('DOMContentLoaded', _0x202865), _0x250f7b['addEventListener']('load', _0x202865));
	var _0x1e9223 = function(_0xa6d0fa, _0x5c8fe1, _0x561f4f, _0x14217f, _0x3776b2, _0x1fe915, _0x517a13) {
			var _0x58a6f0 = 0x0,
				_0x1006a5 = _0xa6d0fa['length'],
				_0x582a73 = null == _0x561f4f;
			if ('object' === _0x33c3a4['type'](_0x561f4f))
				for (_0x58a6f0 in (_0x3776b2 = !0x0, _0x561f4f)) _0x1e9223(_0xa6d0fa, _0x5c8fe1, _0x58a6f0, _0x561f4f[_0x58a6f0], !0x0, _0x1fe915, _0x517a13);
			else if (void 0x0 !== _0x14217f && (_0x3776b2 = !0x0, _0x33c3a4['isFunction'](_0x14217f) || (_0x517a13 = !0x0), _0x582a73 && (_0x517a13 ? (_0x5c8fe1['call'](_0xa6d0fa, _0x14217f), _0x5c8fe1 = null) : (_0x582a73 = _0x5c8fe1, _0x5c8fe1 = function(_0x920fa7, _0x98ed43, _0x41fb65) {
					return _0x582a73['call'](_0x33c3a4(_0x920fa7), _0x41fb65);
				})), _0x5c8fe1))
				for (; _0x58a6f0 < _0x1006a5; _0x58a6f0++) _0x5c8fe1(_0xa6d0fa[_0x58a6f0], _0x561f4f, _0x517a13 ? _0x14217f : _0x14217f['call'](_0xa6d0fa[_0x58a6f0], _0x58a6f0, _0x5c8fe1(_0xa6d0fa[_0x58a6f0], _0x561f4f)));
			return _0x3776b2 ? _0xa6d0fa : _0x582a73 ? _0x5c8fe1['call'](_0xa6d0fa) : _0x1006a5 ? _0x5c8fe1(_0xa6d0fa[0x0], _0x561f4f) : _0x1fe915;
		},
		_0x296ff1 = function(_0x1b3dbb) {
			return 0x1 === _0x1b3dbb['nodeType'] || 0x9 === _0x1b3dbb['nodeType'] || !+_0x1b3dbb['nodeType'];
		};
	_0xbf771f['uid'] = 0x1;
	_0xbf771f['prototype'] = {
		'cache': function(_0x2f6af1) {
			var _0x40d88a = _0x2f6af1[this['expando']];
			return _0x40d88a || (_0x40d88a = {}, _0x296ff1(_0x2f6af1) && (_0x2f6af1['nodeType'] ? _0x2f6af1[this['expando']] = _0x40d88a : Object['defineProperty'](_0x2f6af1, this['expando'], {
				'value': _0x40d88a,
				'configurable': !0x0
			}))), _0x40d88a;
		},
		'set': function(_0x49c273, _0xc87cce, _0x3d242a) {
			var _0x36a4c4;
			_0x49c273 = this['cache'](_0x49c273);
			if ('string' == typeof _0xc87cce) _0x49c273[_0x33c3a4['camelCase'](_0xc87cce)] = _0x3d242a;
			else
				for (_0x36a4c4 in _0xc87cce) _0x49c273[_0x33c3a4['camelCase'](_0x36a4c4)] = _0xc87cce[_0x36a4c4];
			return _0x49c273;
		},
		'get': function(_0xa00243, _0x35e462) {
			return void 0x0 === _0x35e462 ? this['cache'](_0xa00243) : _0xa00243[this['expando']] && _0xa00243[this['expando']][_0x33c3a4['camelCase'](_0x35e462)];
		},
		'access': function(_0x112af7, _0x165332, _0x805d0a) {
			return void 0x0 === _0x165332 || _0x165332 && 'string' == typeof _0x165332 && void 0x0 === _0x805d0a ? this['get'](_0x112af7, _0x165332) : (this['set'](_0x112af7, _0x165332, _0x805d0a), void 0x0 !== _0x805d0a ? _0x805d0a : _0x165332);
		},
		'remove': function(_0x14b763, _0x5a64ad) {
			var _0x5ccccf, _0x1c8b12 = _0x14b763[this['expando']];
			if (void 0x0 !== _0x1c8b12) {
				if (void 0x0 !== _0x5a64ad) {
					Array['isArray'](_0x5a64ad) ? _0x5a64ad = _0x5a64ad['map'](_0x33c3a4['camelCase']) : (_0x5a64ad = _0x33c3a4['camelCase'](_0x5a64ad), _0x5a64ad = _0x5a64ad in _0x1c8b12 ? [_0x5a64ad] : _0x5a64ad['match'](_0x1f9e10) || []);
					for (_0x5ccccf = _0x5a64ad['length']; _0x5ccccf--;) delete _0x1c8b12[_0x5a64ad[_0x5ccccf]];
				}(void 0x0 === _0x5a64ad || _0x33c3a4['isEmptyObject'](_0x1c8b12)) && (_0x14b763['nodeType'] ? _0x14b763[this['expando']] = void 0x0 : delete _0x14b763[this['expando']]);
			}
		},
		'hasData': function(_0x32905c) {
			_0x32905c = _0x32905c[this['expando']];
			return void 0x0 !== _0x32905c && !_0x33c3a4['isEmptyObject'](_0x32905c);
		}
	};
	var _0x30b773 = new _0xbf771f(),
		_0x484a40 = new _0xbf771f(),
		_0x3504c8 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		_0x49f69d = /[A-Z]/g;
	_0x33c3a4['extend']({
		'hasData': function(_0x736cbf) {
			return _0x484a40['hasData'](_0x736cbf) || _0x30b773['hasData'](_0x736cbf);
		},
		'data': function(_0x3899f9, _0x25bdcc, _0x3aaa45) {
			return _0x484a40['access'](_0x3899f9, _0x25bdcc, _0x3aaa45);
		},
		'removeData': function(_0x3297dc, _0xa4e487) {
			_0x484a40['remove'](_0x3297dc, _0xa4e487);
		},
		'_data': function(_0x333e11, _0x56c991, _0x51fc6c) {
			return _0x30b773['access'](_0x333e11, _0x56c991, _0x51fc6c);
		},
		'_removeData': function(_0x4d3fce, _0x439e9e) {
			_0x30b773['remove'](_0x4d3fce, _0x439e9e);
		}
	});
	_0x33c3a4['fn']['extend']({
		'data': function(_0x43e39c, _0x2f3f7b) {
			var _0x208c95, _0x2046e3, _0xb8b75e, _0x253aeb = this[0x0],
				_0x51ee56 = _0x253aeb && _0x253aeb['attributes'];
			if (void 0x0 === _0x43e39c) {
				if (this['length'] && (_0xb8b75e = _0x484a40['get'](_0x253aeb), 0x1 === _0x253aeb['nodeType'] && !_0x30b773['get'](_0x253aeb, 'hasDataAttrs'))) {
					for (_0x208c95 = _0x51ee56['length']; _0x208c95--;) _0x51ee56[_0x208c95] && (_0x2046e3 = _0x51ee56[_0x208c95]['name'], 0x0 === _0x2046e3['indexOf']('data-') && (_0x2046e3 = _0x33c3a4['camelCase'](_0x2046e3['slice'](0x5)), _0x14201f(_0x253aeb, _0x2046e3, _0xb8b75e[_0x2046e3])));
					_0x30b773['set'](_0x253aeb, 'hasDataAttrs', !0x0);
				}
				return _0xb8b75e;
			}
			return 'object' == typeof _0x43e39c ? this['each'](function() {
				_0x484a40['set'](this, _0x43e39c);
			}) : _0x1e9223(this, function(_0x2979c5) {
				var _0x5d7e80;
				if (_0x253aeb && void 0x0 === _0x2979c5) {
					if ((_0x5d7e80 = _0x484a40['get'](_0x253aeb, _0x43e39c), void 0x0 !== _0x5d7e80) || (_0x5d7e80 = _0x14201f(_0x253aeb, _0x43e39c), void 0x0 !== _0x5d7e80)) return _0x5d7e80;
				} else this['each'](function() {
					_0x484a40['set'](this, _0x43e39c, _0x2979c5);
				});
			}, null, _0x2f3f7b, 0x1 < arguments['length'], null, !0x0);
		},
		'removeData': function(_0x1faec4) {
			return this['each'](function() {
				_0x484a40['remove'](this, _0x1faec4);
			});
		}
	});
	_0x33c3a4['extend']({
		'queue': function(_0x110c04, _0x3100c3, _0x18400e) {
			var _0x2ef395;
			if (_0x110c04) return _0x3100c3 = (_0x3100c3 || 'fx') + 'queue', _0x2ef395 = _0x30b773['get'](_0x110c04, _0x3100c3), _0x18400e && (!_0x2ef395 || Array['isArray'](_0x18400e) ? _0x2ef395 = _0x30b773['access'](_0x110c04, _0x3100c3, _0x33c3a4['makeArray'](_0x18400e)) : _0x2ef395['push'](_0x18400e)), _0x2ef395 || [];
		},
		'dequeue': function(_0x594d38, _0x248633) {
			_0x248633 = _0x248633 || 'fx';
			var _0x4d4774 = _0x33c3a4['queue'](_0x594d38, _0x248633),
				_0xf1ea3f = _0x4d4774['length'],
				_0x15154e = _0x4d4774['shift'](),
				_0x1f64cf = _0x33c3a4['_queueHooks'](_0x594d38, _0x248633),
				_0x275dcd = function() {
					_0x33c3a4['dequeue'](_0x594d38, _0x248633);
				};
			'inprogress' === _0x15154e && (_0x15154e = _0x4d4774['shift'](), _0xf1ea3f--);
			_0x15154e && ('fx' === _0x248633 && _0x4d4774['unshift']('inprogress'), delete _0x1f64cf['stop'], _0x15154e['call'](_0x594d38, _0x275dcd, _0x1f64cf));
			!_0xf1ea3f && _0x1f64cf && _0x1f64cf['empty']['fire']();
		},
		'_queueHooks': function(_0x4024f8, _0x5b0ebc) {
			var _0x599e32 = _0x5b0ebc + 'queueHooks';
			return _0x30b773['get'](_0x4024f8, _0x599e32) || _0x30b773['access'](_0x4024f8, _0x599e32, {
				'empty': _0x33c3a4['Callbacks']('once\x20memory')['add'](function() {
					_0x30b773['remove'](_0x4024f8, [_0x5b0ebc + 'queue', _0x599e32]);
				})
			});
		}
	});
	_0x33c3a4['fn']['extend']({
		'queue': function(_0x402138, _0x1632db) {
			var _0x53eba8 = 0x2;
			return 'string' != typeof _0x402138 && (_0x1632db = _0x402138, _0x402138 = 'fx', _0x53eba8--), arguments['length'] < _0x53eba8 ? _0x33c3a4['queue'](this[0x0], _0x402138) : void 0x0 === _0x1632db ? this : this['each'](function() {
				var _0xda34eb = _0x33c3a4['queue'](this, _0x402138, _0x1632db);
				_0x33c3a4['_queueHooks'](this, _0x402138);
				'fx' === _0x402138 && 'inprogress' !== _0xda34eb[0x0] && _0x33c3a4['dequeue'](this, _0x402138);
			});
		},
		'dequeue': function(_0x3b6c27) {
			return this['each'](function() {
				_0x33c3a4['dequeue'](this, _0x3b6c27);
			});
		},
		'clearQueue': function(_0x473d60) {
			return this['queue'](_0x473d60 || 'fx', []);
		},
		'promise': function(_0x940d64, _0x22098e) {
			var _0x2a6254, _0x5c0d56 = 0x1,
				_0x3a4d81 = _0x33c3a4['Deferred'](),
				_0x2be8ee = this,
				_0x53ebfe = this['length'],
				_0xeea45c = function() {
					--_0x5c0d56 || _0x3a4d81['resolveWith'](_0x2be8ee, [_0x2be8ee]);
				};
			'string' != typeof _0x940d64 && (_0x22098e = _0x940d64, _0x940d64 = void 0x0);
			for (_0x940d64 = _0x940d64 || 'fx'; _0x53ebfe--;)(_0x2a6254 = _0x30b773['get'](_0x2be8ee[_0x53ebfe], _0x940d64 + 'queueHooks')) && _0x2a6254['empty'] && (_0x5c0d56++, _0x2a6254['empty']['add'](_0xeea45c));
			return _0xeea45c(), _0x3a4d81['promise'](_0x22098e);
		}
	});
	var _0x549b02 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ['source'],
		_0xd7dcb2 = RegExp('^(?:([+-])=|)(' + _0x549b02 + ')([a-z%]*)$', 'i'),
		_0x528351 = ['Top', 'Right', 'Bottom', 'Left'],
		_0x47483f = function(_0x3cba83, _0x8ffb82) {
			return _0x3cba83 = _0x8ffb82 || _0x3cba83, 'none' === _0x3cba83['style']['display'] || '' === _0x3cba83['style']['display'] && _0x33c3a4['contains'](_0x3cba83['ownerDocument'], _0x3cba83) && 'none' === _0x33c3a4['css'](_0x3cba83, 'display');
		},
		_0x491753 = function(_0x7e5400, _0xabe003, _0x5c74c3, _0x15a76a) {
			var _0x1bddcf, _0x13c8ec = {};
			for (_0x1bddcf in _0xabe003) _0x13c8ec[_0x1bddcf] = _0x7e5400['style'][_0x1bddcf], _0x7e5400['style'][_0x1bddcf] = _0xabe003[_0x1bddcf];
			_0x5c74c3 = _0x5c74c3['apply'](_0x7e5400, _0x15a76a || []);
			for (_0x1bddcf in _0xabe003) _0x7e5400['style'][_0x1bddcf] = _0x13c8ec[_0x1bddcf];
			return _0x5c74c3;
		},
		_0x58b170 = {};
	_0x33c3a4['fn']['extend']({
		'show': function() {
			return _0x2ab91(this, !0x0);
		},
		'hide': function() {
			return _0x2ab91(this);
		},
		'toggle': function(_0x385374) {
			return 'boolean' == typeof _0x385374 ? _0x385374 ? this['show']() : this['hide']() : this['each'](function() {
				_0x47483f(this) ? _0x33c3a4(this)['show']() : _0x33c3a4(this)['hide']();
			});
		}
	});
	var _0x1b738f = /^(?:checkbox|radio)$/i,
		_0x5e3a51 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		_0x4e5bb4 = /^$|\/(?:java|ecma)script/i,
		_0x4c5dbb = {
			'option': [0x1, '<select\x20multiple=\x27multiple\x27>', '</select>'],
			'thead': [0x1, '<table>', '</table>'],
			'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
			'tr': [0x2, '<table><tbody>', '</tbody></table>'],
			'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
			'_default': [0x0, '', '']
		};
	_0x4c5dbb['optgroup'] = _0x4c5dbb['option'];
	_0x4c5dbb['tbody'] = _0x4c5dbb['tfoot'] = _0x4c5dbb['colgroup'] = _0x4c5dbb['caption'] = _0x4c5dbb['thead'];
	_0x4c5dbb['th'] = _0x4c5dbb['td'];
	var _0x192af1 = /<|&#?\w+;/,
		_0x41bc02 = _0x28899d['createDocumentFragment']()['appendChild'](_0x28899d['createElement']('div')),
		_0x24ad89 = _0x28899d['createElement']('input');
	_0x24ad89['setAttribute']('type', 'radio');
	_0x24ad89['setAttribute']('checked', 'checked');
	_0x24ad89['setAttribute']('name', 't');
	_0x41bc02['appendChild'](_0x24ad89);
	_0x15f358['checkClone'] = _0x41bc02['cloneNode'](!0x0)['cloneNode'](!0x0)['lastChild']['checked'];
	_0x41bc02['innerHTML'] = '<textarea>x</textarea>';
	_0x15f358['noCloneChecked'] = !!_0x41bc02['cloneNode'](!0x0)['lastChild']['defaultValue'];
	!0x0;
	var _0x2677f0 = _0x28899d['documentElement'],
		_0x487cff = /^key/,
		_0x349556 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		_0x125112 = /^([^.]*)(?:\.(.+)|)/;
	_0x33c3a4['event'] = {
		'global': {},
		'add': function(_0x2db163, _0x2662a4, _0x2a7990, _0x4e885b, _0x540b20) {
			var _0x1e54a8, _0x429537, _0x3d2bb1, _0x350e33, _0x436efc, _0x2f16ad, _0x218770, _0x48d603, _0x5909ef, _0x496ed4;
			if (_0x436efc = _0x30b773['get'](_0x2db163)) {
				_0x2a7990['handler'] && (_0x1e54a8 = _0x2a7990, _0x2a7990 = _0x1e54a8['handler'], _0x540b20 = _0x1e54a8['selector']);
				_0x540b20 && _0x33c3a4['find']['matchesSelector'](_0x2677f0, _0x540b20);
				_0x2a7990['guid'] || (_0x2a7990['guid'] = _0x33c3a4['guid']++);
				(_0x350e33 = _0x436efc['events']) || (_0x350e33 = _0x436efc['events'] = {});
				(_0x429537 = _0x436efc['handle']) || (_0x429537 = _0x436efc['handle'] = function(_0x286d6c) {
					return 'undefined' != typeof _0x33c3a4 && _0x33c3a4['event']['triggered'] !== _0x286d6c['type'] ? _0x33c3a4['event']['dispatch']['apply'](_0x2db163, arguments) : void 0x0;
				});
				_0x2662a4 = (_0x2662a4 || '')['match'](_0x1f9e10) || [''];
				for (_0x436efc = _0x2662a4['length']; _0x436efc--;) _0x3d2bb1 = _0x125112['exec'](_0x2662a4[_0x436efc]) || [], _0x5909ef = _0x496ed4 = _0x3d2bb1[0x1], _0x3d2bb1 = (_0x3d2bb1[0x2] || '')['split']('.')['sort'](), _0x5909ef && (_0x218770 = _0x33c3a4['event']['special'][_0x5909ef] || {}, _0x5909ef = (_0x540b20 ? _0x218770['delegateType'] : _0x218770['bindType']) || _0x5909ef, _0x218770 = _0x33c3a4['event']['special'][_0x5909ef] || {}, _0x2f16ad = _0x33c3a4['extend']({
					'type': _0x5909ef,
					'origType': _0x496ed4,
					'data': _0x4e885b,
					'handler': _0x2a7990,
					'guid': _0x2a7990['guid'],
					'selector': _0x540b20,
					'needsContext': _0x540b20 && _0x33c3a4['expr']['match']['needsContext']['test'](_0x540b20),
					'namespace': _0x3d2bb1['join']('.')
				}, _0x1e54a8), (_0x48d603 = _0x350e33[_0x5909ef]) || (_0x48d603 = _0x350e33[_0x5909ef] = [], _0x48d603['delegateCount'] = 0x0, _0x218770['setup'] && !0x1 !== _0x218770['setup']['call'](_0x2db163, _0x4e885b, _0x3d2bb1, _0x429537) || _0x2db163['addEventListener'] && _0x2db163['addEventListener'](_0x5909ef, _0x429537)), _0x218770['add'] && (_0x218770['add']['call'](_0x2db163, _0x2f16ad), _0x2f16ad['handler']['guid'] || (_0x2f16ad['handler']['guid'] = _0x2a7990['guid'])), _0x540b20 ? _0x48d603['splice'](_0x48d603['delegateCount']++, 0x0, _0x2f16ad) : _0x48d603['push'](_0x2f16ad), _0x33c3a4['event']['global'][_0x5909ef] = !0x0);
			}
		},
		'remove': function(_0x5f02dc, _0x5d7ede, _0xb697e6, _0x20a14b, _0x43d54f) {
			var _0x2c548e, _0xb10c4, _0x1470ee, _0x666a44, _0x501da9, _0x1a1507, _0x342a5e, _0x45a55a, _0x5f3343, _0x1d9c6a, _0x3b8eb4, _0x3567e2 = _0x30b773['hasData'](_0x5f02dc) && _0x30b773['get'](_0x5f02dc);
			if (_0x3567e2 && (_0x666a44 = _0x3567e2['events'])) {
				_0x5d7ede = (_0x5d7ede || '')['match'](_0x1f9e10) || [''];
				for (_0x501da9 = _0x5d7ede['length']; _0x501da9--;)
					if (_0x1470ee = _0x125112['exec'](_0x5d7ede[_0x501da9]) || [], _0x5f3343 = _0x3b8eb4 = _0x1470ee[0x1], _0x1d9c6a = (_0x1470ee[0x2] || '')['split']('.')['sort'](), _0x5f3343) {
						_0x342a5e = _0x33c3a4['event']['special'][_0x5f3343] || {};
						_0x5f3343 = (_0x20a14b ? _0x342a5e['delegateType'] : _0x342a5e['bindType']) || _0x5f3343;
						_0x45a55a = _0x666a44[_0x5f3343] || [];
						_0x1470ee = _0x1470ee[0x2] && RegExp('(^|\x5c.)' + _0x1d9c6a['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)');
						for (_0xb10c4 = _0x2c548e = _0x45a55a['length']; _0x2c548e--;) _0x1a1507 = _0x45a55a[_0x2c548e], !_0x43d54f && _0x3b8eb4 !== _0x1a1507['origType'] || _0xb697e6 && _0xb697e6['guid'] !== _0x1a1507['guid'] || _0x1470ee && !_0x1470ee['test'](_0x1a1507['namespace']) || _0x20a14b && _0x20a14b !== _0x1a1507['selector'] && ('**' !== _0x20a14b || !_0x1a1507['selector']) || (_0x45a55a['splice'](_0x2c548e, 0x1), _0x1a1507['selector'] && _0x45a55a['delegateCount']--, _0x342a5e['remove'] && _0x342a5e['remove']['call'](_0x5f02dc, _0x1a1507));
						_0xb10c4 && !_0x45a55a['length'] && (_0x342a5e['teardown'] && !0x1 !== _0x342a5e['teardown']['call'](_0x5f02dc, _0x1d9c6a, _0x3567e2['handle']) || _0x33c3a4['removeEvent'](_0x5f02dc, _0x5f3343, _0x3567e2['handle']), delete _0x666a44[_0x5f3343]);
					} else
						for (_0x5f3343 in _0x666a44) _0x33c3a4['event']['remove'](_0x5f02dc, _0x5f3343 + _0x5d7ede[_0x501da9], _0xb697e6, _0x20a14b, !0x0);
				_0x33c3a4['isEmptyObject'](_0x666a44) && _0x30b773['remove'](_0x5f02dc, 'handle\x20events');
			}
		},
		'dispatch': function(_0x3dc169) {
			var _0x1b30a1 = _0x33c3a4['event']['fix'](_0x3dc169),
				_0x102c7b, _0x4f6128, _0x31486f, _0x4fd7a8, _0x80c3aa, _0x39a6a6, _0x54c772 = Array(arguments['length']);
			_0x4f6128 = (_0x30b773['get'](this, 'events') || {})[_0x1b30a1['type']] || [];
			var _0x4bb04f = _0x33c3a4['event']['special'][_0x1b30a1['type']] || {};
			_0x54c772[0x0] = _0x1b30a1;
			for (_0x102c7b = 0x1; _0x102c7b < arguments['length']; _0x102c7b++) _0x54c772[_0x102c7b] = arguments[_0x102c7b];
			if (_0x1b30a1['delegateTarget'] = this, !_0x4bb04f['preDispatch'] || !0x1 !== _0x4bb04f['preDispatch']['call'](this, _0x1b30a1)) {
				_0x39a6a6 = _0x33c3a4['event']['handlers']['call'](this, _0x1b30a1, _0x4f6128);
				for (_0x102c7b = 0x0;
					(_0x4fd7a8 = _0x39a6a6[_0x102c7b++]) && !_0x1b30a1['isPropagationStopped']();) {
					_0x1b30a1['currentTarget'] = _0x4fd7a8['elem'];
					for (_0x4f6128 = 0x0;
						(_0x80c3aa = _0x4fd7a8['handlers'][_0x4f6128++]) && !_0x1b30a1['isImmediatePropagationStopped']();) _0x1b30a1['rnamespace'] && !_0x1b30a1['rnamespace']['test'](_0x80c3aa['namespace']) || (_0x1b30a1['handleObj'] = _0x80c3aa, _0x1b30a1['data'] = _0x80c3aa['data'], _0x31486f = ((_0x33c3a4['event']['special'][_0x80c3aa['origType']] || {})['handle'] || _0x80c3aa['handler'])['apply'](_0x4fd7a8['elem'], _0x54c772), void 0x0 !== _0x31486f && !0x1 === (_0x1b30a1['result'] = _0x31486f) && (_0x1b30a1['preventDefault'](), _0x1b30a1['stopPropagation']()));
				}
				return _0x4bb04f['postDispatch'] && _0x4bb04f['postDispatch']['call'](this, _0x1b30a1), _0x1b30a1['result'];
			}
		},
		'handlers': function(_0x4ed28e, _0x1634aa) {
			var _0x4fde1a, _0x51c343, _0x2d6705, _0x262ba7, _0x379295, _0x162471 = [],
				_0x359434 = _0x1634aa['delegateCount'],
				_0x3f3713 = _0x4ed28e['target'];
			if (_0x359434 && _0x3f3713['nodeType'] && !('click' === _0x4ed28e['type'] && 0x1 <= _0x4ed28e['button']))
				for (; _0x3f3713 !== this; _0x3f3713 = _0x3f3713['parentNode'] || this)
					if (0x1 === _0x3f3713['nodeType'] && ('click' !== _0x4ed28e['type'] || !0x0 !== _0x3f3713['disabled'])) {
						_0x262ba7 = [];
						_0x379295 = {};
						for (_0x4fde1a = 0x0; _0x4fde1a < _0x359434; _0x4fde1a++) _0x51c343 = _0x1634aa[_0x4fde1a], _0x2d6705 = _0x51c343['selector'] + '\x20', void 0x0 === _0x379295[_0x2d6705] && (_0x379295[_0x2d6705] = _0x51c343['needsContext'] ? -0x1 < _0x33c3a4(_0x2d6705, this)['index'](_0x3f3713) : _0x33c3a4['find'](_0x2d6705, this, null, [_0x3f3713])['length']), _0x379295[_0x2d6705] && _0x262ba7['push'](_0x51c343);
						_0x262ba7['length'] && _0x162471['push']({
							'elem': _0x3f3713,
							'handlers': _0x262ba7
						});
					} return _0x3f3713 = this, _0x359434 < _0x1634aa['length'] && _0x162471['push']({
				'elem': _0x3f3713,
				'handlers': _0x1634aa['slice'](_0x359434)
			}), _0x162471;
		},
		'addProp': function(_0x302172, _0x258a64) {
			Object['defineProperty'](_0x33c3a4['Event']['prototype'], _0x302172, {
				'enumerable': !0x0,
				'configurable': !0x0,
				'get': _0x33c3a4['isFunction'](_0x258a64) ? function() {
					if (this['originalEvent']) return _0x258a64(this['originalEvent']);
				} : function() {
					if (this['originalEvent']) return this['originalEvent'][_0x302172];
				},
				'set': function(_0x4938fd) {
					Object['defineProperty'](this, _0x302172, {
						'enumerable': !0x0,
						'configurable': !0x0,
						'writable': !0x0,
						'value': _0x4938fd
					});
				}
			});
		},
		'fix': function(_0x798133) {
			return _0x798133[_0x33c3a4['expando']] ? _0x798133 : new _0x33c3a4['Event'](_0x798133);
		},
		'special': {
			'load': {
				'noBubble': !0x0
			},
			'focus': {
				'trigger': function() {
					if (this !== _0xd90164() && this['focus']) return this['focus'](), !0x1;
				},
				'delegateType': 'focusin'
			},
			'blur': {
				'trigger': function() {
					if (this === _0xd90164() && this['blur']) return this['blur'](), !0x1;
				},
				'delegateType': 'focusout'
			},
			'click': {
				'trigger': function() {
					if ('checkbox' === this['type'] && this['click'] && _0x6b228b(this, 'input')) return this['click'](), !0x1;
				},
				'_default': function(_0x392020) {
					return _0x6b228b(_0x392020['target'], 'a');
				}
			},
			'beforeunload': {
				'postDispatch': function(_0x198dbc) {
					void 0x0 !== _0x198dbc['result'] && _0x198dbc['originalEvent'] && (_0x198dbc['originalEvent']['returnValue'] = _0x198dbc['result']);
				}
			}
		}
	};
	_0x33c3a4['removeEvent'] = function(_0x276425, _0x56e9a0, _0x2ef91b) {
		_0x276425['removeEventListener'] && _0x276425['removeEventListener'](_0x56e9a0, _0x2ef91b);
	};
	_0x33c3a4['Event'] = function(_0x38c388, _0x5d7e43) {
		return this instanceof _0x33c3a4['Event'] ? (_0x38c388 && _0x38c388['type'] ? (this['originalEvent'] = _0x38c388, this['type'] = _0x38c388['type'], this['isDefaultPrevented'] = _0x38c388['defaultPrevented'] || void 0x0 === _0x38c388['defaultPrevented'] && !0x1 === _0x38c388['returnValue'] ? _0x22d43c : _0x3a3839, this['target'] = _0x38c388['target'] && 0x3 === _0x38c388['target']['nodeType'] ? _0x38c388['target']['parentNode'] : _0x38c388['target'], this['currentTarget'] = _0x38c388['currentTarget'], this['relatedTarget'] = _0x38c388['relatedTarget']) : this['type'] = _0x38c388, _0x5d7e43 && _0x33c3a4['extend'](this, _0x5d7e43), this['timeStamp'] = _0x38c388 && _0x38c388['timeStamp'] || _0x33c3a4['now'](), void(this[_0x33c3a4['expando']] = !0x0)) : new _0x33c3a4['Event'](_0x38c388, _0x5d7e43);
	};
	_0x33c3a4['Event']['prototype'] = {
		'constructor': _0x33c3a4['Event'],
		'isDefaultPrevented': _0x3a3839,
		'isPropagationStopped': _0x3a3839,
		'isImmediatePropagationStopped': _0x3a3839,
		'isSimulated': !0x1,
		'preventDefault': function() {
			var _0x2446b5 = this['originalEvent'];
			this['isDefaultPrevented'] = _0x22d43c;
			_0x2446b5 && !this['isSimulated'] && _0x2446b5['preventDefault']();
		},
		'stopPropagation': function() {
			var _0x268dea = this['originalEvent'];
			this['isPropagationStopped'] = _0x22d43c;
			_0x268dea && !this['isSimulated'] && _0x268dea['stopPropagation']();
		},
		'stopImmediatePropagation': function() {
			var _0x323875 = this['originalEvent'];
			this['isImmediatePropagationStopped'] = _0x22d43c;
			_0x323875 && !this['isSimulated'] && _0x323875['stopImmediatePropagation']();
			this['stopPropagation']();
		}
	};
	_0x33c3a4['each']({
		'altKey': !0x0,
		'bubbles': !0x0,
		'cancelable': !0x0,
		'changedTouches': !0x0,
		'ctrlKey': !0x0,
		'detail': !0x0,
		'eventPhase': !0x0,
		'metaKey': !0x0,
		'pageX': !0x0,
		'pageY': !0x0,
		'shiftKey': !0x0,
		'view': !0x0,
		'char': !0x0,
		'charCode': !0x0,
		'key': !0x0,
		'keyCode': !0x0,
		'button': !0x0,
		'buttons': !0x0,
		'clientX': !0x0,
		'clientY': !0x0,
		'offsetX': !0x0,
		'offsetY': !0x0,
		'pointerId': !0x0,
		'pointerType': !0x0,
		'screenX': !0x0,
		'screenY': !0x0,
		'targetTouches': !0x0,
		'toElement': !0x0,
		'touches': !0x0,
		'which': function(_0x23e5cb) {
			var _0x4636fc = _0x23e5cb['button'];
			return null == _0x23e5cb['which'] && _0x487cff['test'](_0x23e5cb['type']) ? null != _0x23e5cb['charCode'] ? _0x23e5cb['charCode'] : _0x23e5cb['keyCode'] : !_0x23e5cb['which'] && void 0x0 !== _0x4636fc && _0x349556['test'](_0x23e5cb['type']) ? 0x1 & _0x4636fc ? 0x1 : 0x2 & _0x4636fc ? 0x3 : 0x4 & _0x4636fc ? 0x2 : 0x0 : _0x23e5cb['which'];
		}
	}, _0x33c3a4['event']['addProp']);
	_0x33c3a4['each']({
		'mouseenter': 'mouseover',
		'mouseleave': 'mouseout',
		'pointerenter': 'pointerover',
		'pointerleave': 'pointerout'
	}, function(_0x522ac4, _0xff05c0) {
		_0x33c3a4['event']['special'][_0x522ac4] = {
			'delegateType': _0xff05c0,
			'bindType': _0xff05c0,
			'handle': function(_0x224df5) {
				var _0x544c38, _0x107afd = _0x224df5['relatedTarget'],
					_0x32bee5 = _0x224df5['handleObj'];
				return _0x107afd && (_0x107afd === this || _0x33c3a4['contains'](this, _0x107afd)) || (_0x224df5['type'] = _0x32bee5['origType'], _0x544c38 = _0x32bee5['handler']['apply'](this, arguments), _0x224df5['type'] = _0xff05c0), _0x544c38;
			}
		};
	});
	_0x33c3a4['fn']['extend']({
		'on': function(_0x1cb4d2, _0x49dbab, _0x34bd2a, _0x290f15) {
			return _0x446b17(this, _0x1cb4d2, _0x49dbab, _0x34bd2a, _0x290f15);
		},
		'one': function(_0xa8a2bf, _0x17a5ad, _0x141fa7, _0x1f88ec) {
			return _0x446b17(this, _0xa8a2bf, _0x17a5ad, _0x141fa7, _0x1f88ec, 0x1);
		},
		'off': function(_0x1785e1, _0x58f49d, _0x11d76a) {
			var _0x21db3d, _0x207c2e;
			if (_0x1785e1 && _0x1785e1['preventDefault'] && _0x1785e1['handleObj']) return _0x21db3d = _0x1785e1['handleObj'], _0x33c3a4(_0x1785e1['delegateTarget'])['off'](_0x21db3d['namespace'] ? _0x21db3d['origType'] + '.' + _0x21db3d['namespace'] : _0x21db3d['origType'], _0x21db3d['selector'], _0x21db3d['handler']), this;
			if ('object' == typeof _0x1785e1) {
				for (_0x207c2e in _0x1785e1) this['off'](_0x207c2e, _0x58f49d, _0x1785e1[_0x207c2e]);
				return this;
			}
			return !0x1 !== _0x58f49d && 'function' != typeof _0x58f49d || (_0x11d76a = _0x58f49d, _0x58f49d = void 0x0), !0x1 === _0x11d76a && (_0x11d76a = _0x3a3839), this['each'](function() {
				_0x33c3a4['event']['remove'](this, _0x1785e1, _0x11d76a, _0x58f49d);
			});
		}
	});
	var _0x30da6f = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		_0x2bf1c1 = /<script|<style|<link/i,
		_0x6742f4 = /checked\s*(?:[^=]|=\s*.checked.)/i,
		_0x1727fb = /^true\/(.*)/,
		_0x488f8b = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	_0x33c3a4['extend']({
		'htmlPrefilter': function(_0x21d441) {
			return _0x21d441['replace'](_0x30da6f, '<$1></$2>');
		},
		'clone': function(_0xa13178, _0x38d307, _0x582227) {
			var _0x121974, _0x1a8fa6, _0x5386ac, _0x47afac, _0x2f6dbd = _0xa13178['cloneNode'](!0x0),
				_0x128202 = _0x33c3a4['contains'](_0xa13178['ownerDocument'], _0xa13178);
			if (!_0x15f358['noCloneChecked'] && !(0x1 !== _0xa13178['nodeType'] && 0xb !== _0xa13178['nodeType'] || _0x33c3a4['isXMLDoc'](_0xa13178))) {
				_0x47afac = _0x405422(_0x2f6dbd);
				_0x5386ac = _0x405422(_0xa13178);
				_0x121974 = 0x0;
				for (_0x1a8fa6 = _0x5386ac['length']; _0x121974 < _0x1a8fa6; _0x121974++) {
					var _0x5ed9cd = _0x5386ac[_0x121974],
						_0x349ac3 = _0x47afac[_0x121974],
						_0x3e0e43 = _0x349ac3['nodeName']['toLowerCase']();
					'input' === _0x3e0e43 && _0x1b738f['test'](_0x5ed9cd['type']) ? _0x349ac3['checked'] = _0x5ed9cd['checked'] : 'input' !== _0x3e0e43 && 'textarea' !== _0x3e0e43 || (_0x349ac3['defaultValue'] = _0x5ed9cd['defaultValue']);
				}
			}
			if (_0x38d307)
				if (_0x582227) {
					_0x5386ac = _0x5386ac || _0x405422(_0xa13178);
					_0x47afac = _0x47afac || _0x405422(_0x2f6dbd);
					_0x121974 = 0x0;
					for (_0x1a8fa6 = _0x5386ac['length']; _0x121974 < _0x1a8fa6; _0x121974++) _0x567c3c(_0x5386ac[_0x121974], _0x47afac[_0x121974]);
				} else _0x567c3c(_0xa13178, _0x2f6dbd);
			return _0x47afac = _0x405422(_0x2f6dbd, 'script'), 0x0 < _0x47afac['length'] && _0x55113e(_0x47afac, !_0x128202 && _0x405422(_0xa13178, 'script')), _0x2f6dbd;
		},
		'cleanData': function(_0xe5d3f0) {
			for (var _0x492ed9, _0x578932, _0x2dbc49, _0x508676 = _0x33c3a4['event']['special'], _0x447b73 = 0x0; void 0x0 !== (_0x578932 = _0xe5d3f0[_0x447b73]); _0x447b73++)
				if (_0x296ff1(_0x578932)) {
					if (_0x492ed9 = _0x578932[_0x30b773['expando']]) {
						if (_0x492ed9['events'])
							for (_0x2dbc49 in _0x492ed9['events']) _0x508676[_0x2dbc49] ? _0x33c3a4['event']['remove'](_0x578932, _0x2dbc49) : _0x33c3a4['removeEvent'](_0x578932, _0x2dbc49, _0x492ed9['handle']);
						_0x578932[_0x30b773['expando']] = void 0x0;
					}
					_0x578932[_0x484a40['expando']] && (_0x578932[_0x484a40['expando']] = void 0x0);
				}
		}
	});
	_0x33c3a4['fn']['extend']({
		'detach': function(_0x41ebd3) {
			return _0xe4e1d1(this, _0x41ebd3, !0x0);
		},
		'remove': function(_0x51595c) {
			return _0xe4e1d1(this, _0x51595c);
		},
		'text': function(_0x21c08d) {
			return _0x1e9223(this, function(_0x1319dc) {
				return void 0x0 === _0x1319dc ? _0x33c3a4['text'](this) : this['empty']()['each'](function() {
					0x1 !== this['nodeType'] && 0xb !== this['nodeType'] && 0x9 !== this['nodeType'] || (this['textContent'] = _0x1319dc);
				});
			}, null, _0x21c08d, arguments['length']);
		},
		'append': function() {
			return _0x2a5842(this, arguments, function(_0x53f0fd) {
				(0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) && _0x231066(this, _0x53f0fd)['appendChild'](_0x53f0fd);
			});
		},
		'prepend': function() {
			return _0x2a5842(this, arguments, function(_0x4f953f) {
				if (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) {
					var _0x1505be = _0x231066(this, _0x4f953f);
					_0x1505be['insertBefore'](_0x4f953f, _0x1505be['firstChild']);
				}
			});
		},
		'before': function() {
			return _0x2a5842(this, arguments, function(_0x4bdbb6) {
				this['parentNode'] && this['parentNode']['insertBefore'](_0x4bdbb6, this);
			});
		},
		'after': function() {
			return _0x2a5842(this, arguments, function(_0x56136a) {
				this['parentNode'] && this['parentNode']['insertBefore'](_0x56136a, this['nextSibling']);
			});
		},
		'empty': function() {
			for (var _0x49f3fd, _0x15d997 = 0x0; null != (_0x49f3fd = this[_0x15d997]); _0x15d997++) 0x1 === _0x49f3fd['nodeType'] && (_0x33c3a4['cleanData'](_0x405422(_0x49f3fd, !0x1)), _0x49f3fd['textContent'] = '');
			return this;
		},
		'clone': function(_0xa150a3, _0x5ed8b0) {
			return _0xa150a3 = null != _0xa150a3 && _0xa150a3, _0x5ed8b0 = null == _0x5ed8b0 ? _0xa150a3 : _0x5ed8b0, this['map'](function() {
				return _0x33c3a4['clone'](this, _0xa150a3, _0x5ed8b0);
			});
		},
		'html': function(_0x5abcd5) {
			return _0x1e9223(this, function(_0x5c1d33) {
				var _0x11b57a = this[0x0] || {},
					_0x5a1093 = 0x0,
					_0x3185c3 = this['length'];
				if (void 0x0 === _0x5c1d33 && 0x1 === _0x11b57a['nodeType']) return _0x11b57a['innerHTML'];
				if ('string' == typeof _0x5c1d33 && !_0x2bf1c1['test'](_0x5c1d33) && !_0x4c5dbb[(_0x5e3a51['exec'](_0x5c1d33) || ['', ''])[0x1]['toLowerCase']()]) {
					_0x5c1d33 = _0x33c3a4['htmlPrefilter'](_0x5c1d33);
					try {
						for (; _0x5a1093 < _0x3185c3; _0x5a1093++) _0x11b57a = this[_0x5a1093] || {}, 0x1 === _0x11b57a['nodeType'] && (_0x33c3a4['cleanData'](_0x405422(_0x11b57a, !0x1)), _0x11b57a['innerHTML'] = _0x5c1d33);
						_0x11b57a = 0x0;
					} catch (_0x10b781) {}
				}
				_0x11b57a && this['empty']()['append'](_0x5c1d33);
			}, null, _0x5abcd5, arguments['length']);
		},
		'replaceWith': function() {
			var _0x3bb0be = [];
			return _0x2a5842(this, arguments, function(_0x2d08d2) {
				var _0x226ed3 = this['parentNode'];
				0x0 > _0x33c3a4['inArray'](this, _0x3bb0be) && (_0x33c3a4['cleanData'](_0x405422(this)), _0x226ed3 && _0x226ed3['replaceChild'](_0x2d08d2, this));
			}, _0x3bb0be);
		}
	});
	_0x33c3a4['each']({
		'appendTo': 'append',
		'prependTo': 'prepend',
		'insertBefore': 'before',
		'insertAfter': 'after',
		'replaceAll': 'replaceWith'
	}, function(_0x28c979, _0x44e3f5) {
		_0x33c3a4['fn'][_0x28c979] = function(_0x5c47cb) {
			for (var _0x323b66 = [], _0x245e01 = _0x33c3a4(_0x5c47cb), _0x1ca35e = _0x245e01['length'] - 0x1, _0x2b2a6c = 0x0; _0x2b2a6c <= _0x1ca35e; _0x2b2a6c++) _0x5c47cb = _0x2b2a6c === _0x1ca35e ? this : this['clone'](!0x0), _0x33c3a4(_0x245e01[_0x2b2a6c])[_0x44e3f5](_0x5c47cb), _0x13ed44['apply'](_0x323b66, _0x5c47cb['get']());
			return this['pushStack'](_0x323b66);
		};
	});
	var _0x464674 = /^margin/,
		_0x83de2a = RegExp('^(' + _0x549b02 + ')(?!px)[a-z%]+$', 'i'),
		_0x19598d = function(_0x353d38) {
			var _0x50b93a = _0x353d38['ownerDocument']['defaultView'];
			return _0x50b93a && _0x50b93a['opener'] || (_0x50b93a = _0x250f7b), _0x50b93a['getComputedStyle'](_0x353d38);
		},
		_0x4d2434 = function() {
			if (_0x48ec3d) {
				_0x48ec3d['style']['cssText'] = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%';
				_0x48ec3d['innerHTML'] = '';
				_0x2677f0['appendChild'](_0x53933e);
				var _0x313ca0 = _0x250f7b['getComputedStyle'](_0x48ec3d);
				_0x479aaf = '1%' !== _0x313ca0['top'];
				_0x35f6bf = '2px' === _0x313ca0['marginLeft'];
				_0x4fbdc0 = '4px' === _0x313ca0['width'];
				_0x48ec3d['style']['marginRight'] = '50%';
				_0x33bcbc = '4px' === _0x313ca0['marginRight'];
				_0x2677f0['removeChild'](_0x53933e);
				_0x48ec3d = null;
			}
		},
		_0x479aaf, _0x4fbdc0, _0x33bcbc, _0x35f6bf, _0x53933e = _0x28899d['createElement']('div'),
		_0x48ec3d = _0x28899d['createElement']('div');
	_0x48ec3d['style'] && (_0x48ec3d['style']['backgroundClip'] = 'content-box', _0x48ec3d['cloneNode'](!0x0)['style']['backgroundClip'] = '', _0x15f358['clearCloneStyle'] = 'content-box' === _0x48ec3d['style']['backgroundClip'], _0x53933e['style']['cssText'] = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', _0x53933e['appendChild'](_0x48ec3d), _0x33c3a4['extend'](_0x15f358, {
		'pixelPosition': function() {
			return _0x4d2434(), _0x479aaf;
		},
		'boxSizingReliable': function() {
			return _0x4d2434(), _0x4fbdc0;
		},
		'pixelMarginRight': function() {
			return _0x4d2434(), _0x33bcbc;
		},
		'reliableMarginLeft': function() {
			return _0x4d2434(), _0x35f6bf;
		}
	}));
	!0x0;
	var _0x3810f7 = /^(none|table(?!-c[ea]).+)/,
		_0x1ae062 = /^--/,
		_0xbcfce7 = {
			'position': 'absolute',
			'visibility': 'hidden',
			'display': 'block'
		},
		_0x2dc4df = {
			'letterSpacing': '0',
			'fontWeight': '400'
		},
		_0x115ab5 = ['Webkit', 'Moz', 'ms'],
		_0x4325d4 = _0x28899d['createElement']('div')['style'];
	_0x33c3a4['extend']({
		'cssHooks': {
			'opacity': {
				'get': function(_0x1956fc, _0x36d582) {
					if (_0x36d582) {
						var _0x16db57 = _0x357bb3(_0x1956fc, 'opacity');
						return '' === _0x16db57 ? '1' : _0x16db57;
					}
				}
			}
		},
		'cssNumber': {
			'animationIterationCount': !0x0,
			'columnCount': !0x0,
			'fillOpacity': !0x0,
			'flexGrow': !0x0,
			'flexShrink': !0x0,
			'fontWeight': !0x0,
			'lineHeight': !0x0,
			'opacity': !0x0,
			'order': !0x0,
			'orphans': !0x0,
			'widows': !0x0,
			'zIndex': !0x0,
			'zoom': !0x0
		},
		'cssProps': {
			'float': 'cssFloat'
		},
		'style': function(_0x3df358, _0x59cbdb, _0x12d1a0, _0x5be7b8) {
			if (_0x3df358 && 0x3 !== _0x3df358['nodeType'] && 0x8 !== _0x3df358['nodeType'] && _0x3df358['style']) {
				var _0x2a075, _0x28d338, _0x206fdb, _0x4012e0 = _0x33c3a4['camelCase'](_0x59cbdb),
					_0x43a265 = _0x1ae062['test'](_0x59cbdb),
					_0x3dff71 = _0x3df358['style'];
				return _0x43a265 || (_0x59cbdb = _0x3301a4(_0x4012e0)), _0x206fdb = _0x33c3a4['cssHooks'][_0x59cbdb] || _0x33c3a4['cssHooks'][_0x4012e0], void 0x0 === _0x12d1a0 ? _0x206fdb && 'get' in _0x206fdb && void 0x0 !== (_0x2a075 = _0x206fdb['get'](_0x3df358, !0x1, _0x5be7b8)) ? _0x2a075 : _0x3dff71[_0x59cbdb] : (_0x28d338 = typeof _0x12d1a0, 'string' === _0x28d338 && (_0x2a075 = _0xd7dcb2['exec'](_0x12d1a0)) && _0x2a075[0x1] && (_0x12d1a0 = _0x4ea0cf(_0x3df358, _0x59cbdb, _0x2a075), _0x28d338 = 'number'), null != _0x12d1a0 && _0x12d1a0 === _0x12d1a0 && ('number' === _0x28d338 && (_0x12d1a0 += _0x2a075 && _0x2a075[0x3] || (_0x33c3a4['cssNumber'][_0x4012e0] ? '' : 'px')), _0x15f358['clearCloneStyle'] || '' !== _0x12d1a0 || 0x0 !== _0x59cbdb['indexOf']('background') || (_0x3dff71[_0x59cbdb] = 'inherit'), _0x206fdb && 'set' in _0x206fdb && void 0x0 === (_0x12d1a0 = _0x206fdb['set'](_0x3df358, _0x12d1a0, _0x5be7b8)) || (_0x43a265 ? _0x3dff71['setProperty'](_0x59cbdb, _0x12d1a0) : _0x3dff71[_0x59cbdb] = _0x12d1a0)), void 0x0);
			}
		},
		'css': function(_0xe6111f, _0x480bc4, _0x5c5e9a, _0x32af25) {
			var _0x519155, _0x5ce494, _0x5d06b1, _0x42d10d = _0x33c3a4['camelCase'](_0x480bc4);
			return _0x1ae062['test'](_0x480bc4) || (_0x480bc4 = _0x3301a4(_0x42d10d)), _0x5d06b1 = _0x33c3a4['cssHooks'][_0x480bc4] || _0x33c3a4['cssHooks'][_0x42d10d], _0x5d06b1 && 'get' in _0x5d06b1 && (_0x519155 = _0x5d06b1['get'](_0xe6111f, !0x0, _0x5c5e9a)), void 0x0 === _0x519155 && (_0x519155 = _0x357bb3(_0xe6111f, _0x480bc4, _0x32af25)), 'normal' === _0x519155 && _0x480bc4 in _0x2dc4df && (_0x519155 = _0x2dc4df[_0x480bc4]), '' === _0x5c5e9a || _0x5c5e9a ? (_0x5ce494 = parseFloat(_0x519155), !0x0 === _0x5c5e9a || isFinite(_0x5ce494) ? _0x5ce494 || 0x0 : _0x519155) : _0x519155;
		}
	});
	_0x33c3a4['each'](['height', 'width'], function(_0x42a2c0, _0x2a1bec) {
		_0x33c3a4['cssHooks'][_0x2a1bec] = {
			'get': function(_0x5f2af8, _0x1f56dd, _0x164257) {
				if (_0x1f56dd) return !_0x3810f7['test'](_0x33c3a4['css'](_0x5f2af8, 'display')) || _0x5f2af8['getClientRects']()['length'] && _0x5f2af8['getBoundingClientRect']()['width'] ? _0x3f517d(_0x5f2af8, _0x2a1bec, _0x164257) : _0x491753(_0x5f2af8, _0xbcfce7, function() {
					return _0x3f517d(_0x5f2af8, _0x2a1bec, _0x164257);
				});
			},
			'set': function(_0xad91d8, _0x5e72a5, _0x5267fc) {
				var _0x99f940, _0x273076 = _0x5267fc && _0x19598d(_0xad91d8);
				_0x5267fc = _0x5267fc && _0x5ac347(_0xad91d8, _0x2a1bec, _0x5267fc, 'border-box' === _0x33c3a4['css'](_0xad91d8, 'boxSizing', !0x1, _0x273076), _0x273076);
				return _0x5267fc && (_0x99f940 = _0xd7dcb2['exec'](_0x5e72a5)) && 'px' !== (_0x99f940[0x3] || 'px') && (_0xad91d8['style'][_0x2a1bec] = _0x5e72a5, _0x5e72a5 = _0x33c3a4['css'](_0xad91d8, _0x2a1bec)), _0x476d2b(_0xad91d8, _0x5e72a5, _0x5267fc);
			}
		};
	});
	_0x33c3a4['cssHooks']['marginLeft'] = _0x2eedf0(_0x15f358['reliableMarginLeft'], function(_0x1abe50, _0x4b2438) {
		if (_0x4b2438) return (parseFloat(_0x357bb3(_0x1abe50, 'marginLeft')) || _0x1abe50['getBoundingClientRect']()['left'] - _0x491753(_0x1abe50, {
			'marginLeft': 0x0
		}, function() {
			return _0x1abe50['getBoundingClientRect']()['left'];
		})) + 'px';
	});
	_0x33c3a4['each']({
		'margin': '',
		'padding': '',
		'border': 'Width'
	}, function(_0x4c8656, _0x316630) {
		_0x33c3a4['cssHooks'][_0x4c8656 + _0x316630] = {
			'expand': function(_0x47c2d8) {
				var _0x33c678 = 0x0,
					_0x191751 = {};
				for (_0x47c2d8 = 'string' == typeof _0x47c2d8 ? _0x47c2d8['split']('\x20') : [_0x47c2d8]; 0x4 > _0x33c678; _0x33c678++) _0x191751[_0x4c8656 + _0x528351[_0x33c678] + _0x316630] = _0x47c2d8[_0x33c678] || _0x47c2d8[_0x33c678 - 0x2] || _0x47c2d8[0x0];
				return _0x191751;
			}
		};
		_0x464674['test'](_0x4c8656) || (_0x33c3a4['cssHooks'][_0x4c8656 + _0x316630]['set'] = _0x476d2b);
	});
	_0x33c3a4['fn']['extend']({
		'css': function(_0x4dc5ad, _0x1c8583) {
			return _0x1e9223(this, function(_0x15a531, _0x1a1d0d, _0x4b0d86) {
				var _0x4e3341, _0x1d277a = {},
					_0x214b57 = 0x0;
				if (Array['isArray'](_0x1a1d0d)) {
					_0x4b0d86 = _0x19598d(_0x15a531);
					for (_0x4e3341 = _0x1a1d0d['length']; _0x214b57 < _0x4e3341; _0x214b57++) _0x1d277a[_0x1a1d0d[_0x214b57]] = _0x33c3a4['css'](_0x15a531, _0x1a1d0d[_0x214b57], !0x1, _0x4b0d86);
					return _0x1d277a;
				}
				return void 0x0 !== _0x4b0d86 ? _0x33c3a4['style'](_0x15a531, _0x1a1d0d, _0x4b0d86) : _0x33c3a4['css'](_0x15a531, _0x1a1d0d);
			}, _0x4dc5ad, _0x1c8583, 0x1 < arguments['length']);
		}
	});
	_0x33c3a4['Tween'] = _0x29e3e5;
	_0x29e3e5['prototype'] = {
		'constructor': _0x29e3e5,
		'init': function(_0x2cc639, _0x19f8cf, _0x5d4283, _0x502c39, _0x13093b, _0x5e3d13) {
			this['elem'] = _0x2cc639;
			this['prop'] = _0x5d4283;
			this['easing'] = _0x13093b || _0x33c3a4['easing']['_default'];
			this['options'] = _0x19f8cf;
			this['start'] = this['now'] = this['cur']();
			this['end'] = _0x502c39;
			this['unit'] = _0x5e3d13 || (_0x33c3a4['cssNumber'][_0x5d4283] ? '' : 'px');
		},
		'cur': function() {
			var _0x18b5a5 = _0x29e3e5['propHooks'][this['prop']];
			return _0x18b5a5 && _0x18b5a5['get'] ? _0x18b5a5['get'](this) : _0x29e3e5['propHooks']['_default']['get'](this);
		},
		'run': function(_0x30b799) {
			var _0x2f7c97, _0x583bfc = _0x29e3e5['propHooks'][this['prop']];
			return this['options']['duration'] ? this['pos'] = _0x2f7c97 = _0x33c3a4['easing'][this['easing']](_0x30b799, this['options']['duration'] * _0x30b799, 0x0, 0x1, this['options']['duration']) : this['pos'] = _0x2f7c97 = _0x30b799, this['now'] = (this['end'] - this['start']) * _0x2f7c97 + this['start'], this['options']['step'] && this['options']['step']['call'](this['elem'], this['now'], this), _0x583bfc && _0x583bfc['set'] ? _0x583bfc['set'](this) : _0x29e3e5['propHooks']['_default']['set'](this), this;
		}
	};
	_0x29e3e5['prototype']['init']['prototype'] = _0x29e3e5['prototype'];
	_0x29e3e5['propHooks'] = {
		'_default': {
			'get': function(_0x7807e4) {
				var _0x3b6c57;
				return 0x1 !== _0x7807e4['elem']['nodeType'] || null != _0x7807e4['elem'][_0x7807e4['prop']] && null == _0x7807e4['elem']['style'][_0x7807e4['prop']] ? _0x7807e4['elem'][_0x7807e4['prop']] : (_0x3b6c57 = _0x33c3a4['css'](_0x7807e4['elem'], _0x7807e4['prop'], ''), _0x3b6c57 && 'auto' !== _0x3b6c57 ? _0x3b6c57 : 0x0);
			},
			'set': function(_0xd13f4d) {
				_0x33c3a4['fx']['step'][_0xd13f4d['prop']] ? _0x33c3a4['fx']['step'][_0xd13f4d['prop']](_0xd13f4d) : 0x1 !== _0xd13f4d['elem']['nodeType'] || null == _0xd13f4d['elem']['style'][_0x33c3a4['cssProps'][_0xd13f4d['prop']]] && !_0x33c3a4['cssHooks'][_0xd13f4d['prop']] ? _0xd13f4d['elem'][_0xd13f4d['prop']] = _0xd13f4d['now'] : _0x33c3a4['style'](_0xd13f4d['elem'], _0xd13f4d['prop'], _0xd13f4d['now'] + _0xd13f4d['unit']);
			}
		}
	};
	_0x29e3e5['propHooks']['scrollTop'] = _0x29e3e5['propHooks']['scrollLeft'] = {
		'set': function(_0x38c2f0) {
			_0x38c2f0['elem']['nodeType'] && _0x38c2f0['elem']['parentNode'] && (_0x38c2f0['elem'][_0x38c2f0['prop']] = _0x38c2f0['now']);
		}
	};
	_0x33c3a4['easing'] = {
		'linear': function(_0x276d40) {
			return _0x276d40;
		},
		'swing': function(_0x5724da) {
			return 0.5 - Math['cos'](_0x5724da * Math['PI']) / 0x2;
		},
		'_default': 'swing'
	};
	_0x33c3a4['fx'] = _0x29e3e5['prototype']['init'];
	_0x33c3a4['fx']['step'] = {};
	var _0x3e65ea, _0x218ae3, _0x22faa5 = /^(?:toggle|show|hide)$/,
		_0x5e123f = /queueHooks$/;
	_0x33c3a4['Animation'] = _0x33c3a4['extend'](_0x3d1c04, {
		'tweeners': {
			'*': [function(_0x3bc573, _0x48a48a) {
				var _0x54f097 = this['createTween'](_0x3bc573, _0x48a48a);
				return _0x4ea0cf(_0x54f097['elem'], _0x3bc573, _0xd7dcb2['exec'](_0x48a48a), _0x54f097), _0x54f097;
			}]
		},
		'tweener': function(_0x2fbf4c, _0x3be8f1) {
			_0x33c3a4['isFunction'](_0x2fbf4c) ? (_0x3be8f1 = _0x2fbf4c, _0x2fbf4c = ['*']) : _0x2fbf4c = _0x2fbf4c['match'](_0x1f9e10);
			for (var _0x161c0f, _0x22fe73 = 0x0, _0x34e3f9 = _0x2fbf4c['length']; _0x22fe73 < _0x34e3f9; _0x22fe73++) _0x161c0f = _0x2fbf4c[_0x22fe73], _0x3d1c04['tweeners'][_0x161c0f] = _0x3d1c04['tweeners'][_0x161c0f] || [], _0x3d1c04['tweeners'][_0x161c0f]['unshift'](_0x3be8f1);
		},
		'prefilters': [function(_0x46e762, _0x3d52c1, _0x4c25dc) {
			var _0x3f0ea3, _0x545247, _0x22e5f9, _0x227321, _0x37c4f7, _0x4807ec, _0x515347, _0x6488bd, _0x2ad622 = 'width' in _0x3d52c1 || 'height' in _0x3d52c1,
				_0x2c5984 = this,
				_0x1f545d = {},
				_0xee6e46 = _0x46e762['style'],
				_0x444d8d = _0x46e762['nodeType'] && _0x47483f(_0x46e762),
				_0x4cf88d = _0x30b773['get'](_0x46e762, 'fxshow');
			_0x4c25dc['queue'] || (_0x227321 = _0x33c3a4['_queueHooks'](_0x46e762, 'fx'), null == _0x227321['unqueued'] && (_0x227321['unqueued'] = 0x0, _0x37c4f7 = _0x227321['empty']['fire'], _0x227321['empty']['fire'] = function() {
				_0x227321['unqueued'] || _0x37c4f7();
			}), _0x227321['unqueued']++, _0x2c5984['always'](function() {
				_0x2c5984['always'](function() {
					_0x227321['unqueued']--;
					_0x33c3a4['queue'](_0x46e762, 'fx')['length'] || _0x227321['empty']['fire']();
				});
			}));
			for (_0x3f0ea3 in _0x3d52c1)
				if (_0x545247 = _0x3d52c1[_0x3f0ea3], _0x22faa5['test'](_0x545247)) {
					if (delete _0x3d52c1[_0x3f0ea3], _0x22e5f9 = _0x22e5f9 || 'toggle' === _0x545247, _0x545247 === (_0x444d8d ? 'hide' : 'show')) {
						if ('show' !== _0x545247 || !_0x4cf88d || void 0x0 === _0x4cf88d[_0x3f0ea3]) continue;
						_0x444d8d = !0x0;
					}
					_0x1f545d[_0x3f0ea3] = _0x4cf88d && _0x4cf88d[_0x3f0ea3] || _0x33c3a4['style'](_0x46e762, _0x3f0ea3);
				} if (_0x4807ec = !_0x33c3a4['isEmptyObject'](_0x3d52c1), _0x4807ec || !_0x33c3a4['isEmptyObject'](_0x1f545d))
				for (_0x3f0ea3 in (_0x2ad622 && 0x1 === _0x46e762['nodeType'] && (_0x4c25dc['overflow'] = [_0xee6e46['overflow'], _0xee6e46['overflowX'], _0xee6e46['overflowY']], _0x515347 = _0x4cf88d && _0x4cf88d['display'], null == _0x515347 && (_0x515347 = _0x30b773['get'](_0x46e762, 'display')), _0x6488bd = _0x33c3a4['css'](_0x46e762, 'display'), 'none' === _0x6488bd && (_0x515347 ? _0x6488bd = _0x515347 : (_0x2ab91([_0x46e762], !0x0), _0x515347 = _0x46e762['style']['display'] || _0x515347, _0x6488bd = _0x33c3a4['css'](_0x46e762, 'display'), _0x2ab91([_0x46e762]))), ('inline' === _0x6488bd || 'inline-block' === _0x6488bd && null != _0x515347) && 'none' === _0x33c3a4['css'](_0x46e762, 'float') && (_0x4807ec || (_0x2c5984['done'](function() {
						_0xee6e46['display'] = _0x515347;
					}), null == _0x515347 && (_0x6488bd = _0xee6e46['display'], _0x515347 = 'none' === _0x6488bd ? '' : _0x6488bd)), _0xee6e46['display'] = 'inline-block')), _0x4c25dc['overflow'] && (_0xee6e46['overflow'] = 'hidden', _0x2c5984['always'](function() {
						_0xee6e46['overflow'] = _0x4c25dc['overflow'][0x0];
						_0xee6e46['overflowX'] = _0x4c25dc['overflow'][0x1];
						_0xee6e46['overflowY'] = _0x4c25dc['overflow'][0x2];
					})), _0x4807ec = !0x1, _0x1f545d)) _0x4807ec || (_0x4cf88d ? 'hidden' in _0x4cf88d && (_0x444d8d = _0x4cf88d['hidden']) : _0x4cf88d = _0x30b773['access'](_0x46e762, 'fxshow', {
					'display': _0x515347
				}), _0x22e5f9 && (_0x4cf88d['hidden'] = !_0x444d8d), _0x444d8d && _0x2ab91([_0x46e762], !0x0), _0x2c5984['done'](function() {
					_0x444d8d || _0x2ab91([_0x46e762]);
					_0x30b773['remove'](_0x46e762, 'fxshow');
					for (_0x3f0ea3 in _0x1f545d) _0x33c3a4['style'](_0x46e762, _0x3f0ea3, _0x1f545d[_0x3f0ea3]);
				})), _0x4807ec = _0x1f1078(_0x444d8d ? _0x4cf88d[_0x3f0ea3] : 0x0, _0x3f0ea3, _0x2c5984), _0x3f0ea3 in _0x4cf88d || (_0x4cf88d[_0x3f0ea3] = _0x4807ec['start'], _0x444d8d && (_0x4807ec['end'] = _0x4807ec['start'], _0x4807ec['start'] = 0x0));
		}],
		'prefilter': function(_0x12f072, _0x58afea) {
			_0x58afea ? _0x3d1c04['prefilters']['unshift'](_0x12f072) : _0x3d1c04['prefilters']['push'](_0x12f072);
		}
	});
	_0x33c3a4['speed'] = function(_0x4e794a, _0xe71e8f, _0x37cddc) {
		var _0x1f1a86 = _0x4e794a && 'object' == typeof _0x4e794a ? _0x33c3a4['extend']({}, _0x4e794a) : {
			'complete': _0x37cddc || !_0x37cddc && _0xe71e8f || _0x33c3a4['isFunction'](_0x4e794a) && _0x4e794a,
			'duration': _0x4e794a,
			'easing': _0x37cddc && _0xe71e8f || _0xe71e8f && !_0x33c3a4['isFunction'](_0xe71e8f) && _0xe71e8f
		};
		return _0x33c3a4['fx']['off'] ? _0x1f1a86['duration'] = 0x0 : 'number' != typeof _0x1f1a86['duration'] && (_0x1f1a86['duration'] in _0x33c3a4['fx']['speeds'] ? _0x1f1a86['duration'] = _0x33c3a4['fx']['speeds'][_0x1f1a86['duration']] : _0x1f1a86['duration'] = _0x33c3a4['fx']['speeds']['_default']), null != _0x1f1a86['queue'] && !0x0 !== _0x1f1a86['queue'] || (_0x1f1a86['queue'] = 'fx'), _0x1f1a86['old'] = _0x1f1a86['complete'], _0x1f1a86['complete'] = function() {
			_0x33c3a4['isFunction'](_0x1f1a86['old']) && _0x1f1a86['old']['call'](this);
			_0x1f1a86['queue'] && _0x33c3a4['dequeue'](this, _0x1f1a86['queue']);
		}, _0x1f1a86;
	};
	_0x33c3a4['fn']['extend']({
		'fadeTo': function(_0x3720f0, _0x1a8ca0, _0x5630fd, _0x264cb2) {
			return this['filter'](_0x47483f)['css']('opacity', 0x0)['show']()['end']()['animate']({
				'opacity': _0x1a8ca0
			}, _0x3720f0, _0x5630fd, _0x264cb2);
		},
		'animate': function(_0x562d90, _0x260586, _0x54ebcb, _0x9d41ce) {
			var _0x15a061 = _0x33c3a4['isEmptyObject'](_0x562d90),
				_0x10b62c = _0x33c3a4['speed'](_0x260586, _0x54ebcb, _0x9d41ce);
			_0x260586 = function() {
				var _0x35ca05 = _0x3d1c04(this, _0x33c3a4['extend']({}, _0x562d90), _0x10b62c);
				(_0x15a061 || _0x30b773['get'](this, 'finish')) && _0x35ca05['stop'](!0x0);
			};
			return _0x260586['finish'] = _0x260586, _0x15a061 || !0x1 === _0x10b62c['queue'] ? this['each'](_0x260586) : this['queue'](_0x10b62c['queue'], _0x260586);
		},
		'stop': function(_0xb7c601, _0x40b1ad, _0xd60caa) {
			var _0x38432d = function(_0xc5891) {
				var _0x1749aa = _0xc5891['stop'];
				delete _0xc5891['stop'];
				_0x1749aa(_0xd60caa);
			};
			return 'string' != typeof _0xb7c601 && (_0xd60caa = _0x40b1ad, _0x40b1ad = _0xb7c601, _0xb7c601 = void 0x0), _0x40b1ad && !0x1 !== _0xb7c601 && this['queue'](_0xb7c601 || 'fx', []), this['each'](function() {
				var _0x52b713 = !0x0,
					_0x505bb1 = null != _0xb7c601 && _0xb7c601 + 'queueHooks',
					_0x497bca = _0x33c3a4['timers'],
					_0x60a1a8 = _0x30b773['get'](this);
				if (_0x505bb1) _0x60a1a8[_0x505bb1] && _0x60a1a8[_0x505bb1]['stop'] && _0x38432d(_0x60a1a8[_0x505bb1]);
				else
					for (_0x505bb1 in _0x60a1a8) _0x60a1a8[_0x505bb1] && _0x60a1a8[_0x505bb1]['stop'] && _0x5e123f['test'](_0x505bb1) && _0x38432d(_0x60a1a8[_0x505bb1]);
				for (_0x505bb1 = _0x497bca['length']; _0x505bb1--;) _0x497bca[_0x505bb1]['elem'] !== this || null != _0xb7c601 && _0x497bca[_0x505bb1]['queue'] !== _0xb7c601 || (_0x497bca[_0x505bb1]['anim']['stop'](_0xd60caa), _0x52b713 = !0x1, _0x497bca['splice'](_0x505bb1, 0x1));
				!_0x52b713 && _0xd60caa || _0x33c3a4['dequeue'](this, _0xb7c601);
			});
		},
		'finish': function(_0x22f375) {
			return !0x1 !== _0x22f375 && (_0x22f375 = _0x22f375 || 'fx'), this['each'](function() {
				var _0x2cb99e, _0x1854ba = _0x30b773['get'](this),
					_0x52ae49 = _0x1854ba[_0x22f375 + 'queue'];
				_0x2cb99e = _0x1854ba[_0x22f375 + 'queueHooks'];
				var _0x1c7af1 = _0x33c3a4['timers'],
					_0x417fec = _0x52ae49 ? _0x52ae49['length'] : 0x0;
				_0x1854ba['finish'] = !0x0;
				_0x33c3a4['queue'](this, _0x22f375, []);
				_0x2cb99e && _0x2cb99e['stop'] && _0x2cb99e['stop']['call'](this, !0x0);
				for (_0x2cb99e = _0x1c7af1['length']; _0x2cb99e--;) _0x1c7af1[_0x2cb99e]['elem'] === this && _0x1c7af1[_0x2cb99e]['queue'] === _0x22f375 && (_0x1c7af1[_0x2cb99e]['anim']['stop'](!0x0), _0x1c7af1['splice'](_0x2cb99e, 0x1));
				for (_0x2cb99e = 0x0; _0x2cb99e < _0x417fec; _0x2cb99e++) _0x52ae49[_0x2cb99e] && _0x52ae49[_0x2cb99e]['finish'] && _0x52ae49[_0x2cb99e]['finish']['call'](this);
				delete _0x1854ba['finish'];
			});
		}
	});
	_0x33c3a4['each'](['toggle', 'show', 'hide'], function(_0x3290f9, _0x4003c0) {
		var _0x1b115b = _0x33c3a4['fn'][_0x4003c0];
		_0x33c3a4['fn'][_0x4003c0] = function(_0xae84ef, _0x45cf12, _0x3bbde9) {
			return null == _0xae84ef || 'boolean' == typeof _0xae84ef ? _0x1b115b['apply'](this, arguments) : this['animate'](_0x2b408e(_0x4003c0, !0x0), _0xae84ef, _0x45cf12, _0x3bbde9);
		};
	});
	_0x33c3a4['each']({
		'slideDown': _0x2b408e('show'),
		'slideUp': _0x2b408e('hide'),
		'slideToggle': _0x2b408e('toggle'),
		'fadeIn': {
			'opacity': 'show'
		},
		'fadeOut': {
			'opacity': 'hide'
		},
		'fadeToggle': {
			'opacity': 'toggle'
		}
	}, function(_0x5ca526, _0x23d331) {
		_0x33c3a4['fn'][_0x5ca526] = function(_0x488204, _0x3ed6d2, _0x46f0e6) {
			return this['animate'](_0x23d331, _0x488204, _0x3ed6d2, _0x46f0e6);
		};
	});
	_0x33c3a4['timers'] = [];
	_0x33c3a4['fx']['tick'] = function() {
		var _0x19b56e, _0x4e8bc7 = 0x0,
			_0xe056cf = _0x33c3a4['timers'];
		for (_0x3e65ea = _0x33c3a4['now'](); _0x4e8bc7 < _0xe056cf['length']; _0x4e8bc7++) _0x19b56e = _0xe056cf[_0x4e8bc7], _0x19b56e() || _0xe056cf[_0x4e8bc7] !== _0x19b56e || _0xe056cf['splice'](_0x4e8bc7--, 0x1);
		_0xe056cf['length'] || _0x33c3a4['fx']['stop']();
		_0x3e65ea = void 0x0;
	};
	_0x33c3a4['fx']['timer'] = function(_0x58fc53) {
		_0x33c3a4['timers']['push'](_0x58fc53);
		_0x33c3a4['fx']['start']();
	};
	_0x33c3a4['fx']['interval'] = 0xd;
	_0x33c3a4['fx']['start'] = function() {
		_0x218ae3 || (_0x218ae3 = !0x0, _0x5c5fed());
	};
	_0x33c3a4['fx']['stop'] = function() {
		_0x218ae3 = null;
	};
	_0x33c3a4['fx']['speeds'] = {
		'slow': 0x258,
		'fast': 0xc8,
		'_default': 0x190
	};
	_0x33c3a4['fn']['delay'] = function(_0x107913, _0x38f83e) {
		return _0x107913 = _0x33c3a4['fx'] ? _0x33c3a4['fx']['speeds'][_0x107913] || _0x107913 : _0x107913, _0x38f83e = _0x38f83e || 'fx', this['queue'](_0x38f83e, function(_0x22631c, _0x1db497) {
			var _0x3b1cc2 = _0x250f7b['setTimeout'](_0x22631c, _0x107913);
			_0x1db497['stop'] = function() {
				_0x250f7b['clearTimeout'](_0x3b1cc2);
			};
		});
	};
	var _0x3d2f9a = _0x28899d['createElement']('input'),
		_0x134f4b = _0x28899d['createElement']('select')['appendChild'](_0x28899d['createElement']('option'));
	_0x3d2f9a['type'] = 'checkbox';
	_0x15f358['checkOn'] = '' !== _0x3d2f9a['value'];
	_0x15f358['optSelected'] = _0x134f4b['selected'];
	_0x3d2f9a = _0x28899d['createElement']('input');
	_0x3d2f9a['value'] = 't';
	_0x3d2f9a['type'] = 'radio';
	_0x15f358['radioValue'] = 't' === _0x3d2f9a['value'];
	var _0x286831, _0x56533c = _0x33c3a4['expr']['attrHandle'];
	_0x33c3a4['fn']['extend']({
		'attr': function(_0x267002, _0x1d190a) {
			return _0x1e9223(this, _0x33c3a4['attr'], _0x267002, _0x1d190a, 0x1 < arguments['length']);
		},
		'removeAttr': function(_0x47d6a4) {
			return this['each'](function() {
				_0x33c3a4['removeAttr'](this, _0x47d6a4);
			});
		}
	});
	_0x33c3a4['extend']({
		'attr': function(_0x4ddc51, _0x531d3c, _0xc36973) {
			var _0x319184, _0x24227e, _0x5cc11e = _0x4ddc51['nodeType'];
			if (0x3 !== _0x5cc11e && 0x8 !== _0x5cc11e && 0x2 !== _0x5cc11e) return 'undefined' == typeof _0x4ddc51['getAttribute'] ? _0x33c3a4['prop'](_0x4ddc51, _0x531d3c, _0xc36973) : (0x1 === _0x5cc11e && _0x33c3a4['isXMLDoc'](_0x4ddc51) || (_0x24227e = _0x33c3a4['attrHooks'][_0x531d3c['toLowerCase']()] || (_0x33c3a4['expr']['match']['bool']['test'](_0x531d3c) ? _0x286831 : void 0x0)), void 0x0 !== _0xc36973 ? null === _0xc36973 ? void _0x33c3a4['removeAttr'](_0x4ddc51, _0x531d3c) : _0x24227e && 'set' in _0x24227e && void 0x0 !== (_0x319184 = _0x24227e['set'](_0x4ddc51, _0xc36973, _0x531d3c)) ? _0x319184 : (_0x4ddc51['setAttribute'](_0x531d3c, _0xc36973 + ''), _0xc36973) : _0x24227e && 'get' in _0x24227e && null !== (_0x319184 = _0x24227e['get'](_0x4ddc51, _0x531d3c)) ? _0x319184 : (_0x319184 = _0x33c3a4['find']['attr'](_0x4ddc51, _0x531d3c), null == _0x319184 ? void 0x0 : _0x319184));
		},
		'attrHooks': {
			'type': {
				'set': function(_0x2bc566, _0x7e577) {
					if (!_0x15f358['radioValue'] && 'radio' === _0x7e577 && _0x6b228b(_0x2bc566, 'input')) {
						var _0x19b29d = _0x2bc566['value'];
						return _0x2bc566['setAttribute']('type', _0x7e577), _0x19b29d && (_0x2bc566['value'] = _0x19b29d), _0x7e577;
					}
				}
			}
		},
		'removeAttr': function(_0x51e430, _0x55e944) {
			var _0x29dd91, _0x5c6fbf = 0x0,
				_0x4d647b = _0x55e944 && _0x55e944['match'](_0x1f9e10);
			if (_0x4d647b && 0x1 === _0x51e430['nodeType'])
				for (; _0x29dd91 = _0x4d647b[_0x5c6fbf++];) _0x51e430['removeAttribute'](_0x29dd91);
		}
	});
	_0x286831 = {
		'set': function(_0x145e1e, _0x2feff4, _0x269606) {
			return !0x1 === _0x2feff4 ? _0x33c3a4['removeAttr'](_0x145e1e, _0x269606) : _0x145e1e['setAttribute'](_0x269606, _0x269606), _0x269606;
		}
	};
	_0x33c3a4['each'](_0x33c3a4['expr']['match']['bool']['source']['match'](/\w+/g), function(_0x5dc848, _0x1b7ec4) {
		var _0x35907f = _0x56533c[_0x1b7ec4] || _0x33c3a4['find']['attr'];
		_0x56533c[_0x1b7ec4] = function(_0x526ea8, _0x3976ee, _0x3ecc39) {
			var _0x52c9a1, _0x2d3d10, _0x5400fa = _0x3976ee['toLowerCase']();
			return _0x3ecc39 || (_0x2d3d10 = _0x56533c[_0x5400fa], _0x56533c[_0x5400fa] = _0x52c9a1, _0x52c9a1 = null != _0x35907f(_0x526ea8, _0x3976ee, _0x3ecc39) ? _0x5400fa : null, _0x56533c[_0x5400fa] = _0x2d3d10), _0x52c9a1;
		};
	});
	var _0x4ced51 = /^(?:input|select|textarea|button)$/i,
		_0x2c59e1 = /^(?:a|area)$/i;
	_0x33c3a4['fn']['extend']({
		'prop': function(_0x570239, _0x4e49ab) {
			return _0x1e9223(this, _0x33c3a4['prop'], _0x570239, _0x4e49ab, 0x1 < arguments['length']);
		},
		'removeProp': function(_0x5c9a7e) {
			return this['each'](function() {
				delete this[_0x33c3a4['propFix'][_0x5c9a7e] || _0x5c9a7e];
			});
		}
	});
	_0x33c3a4['extend']({
		'prop': function(_0x53665d, _0x5a6c0a, _0x3cdcd6) {
			var _0x5d0675, _0x1c3b9c, _0x3baadc = _0x53665d['nodeType'];
			if (0x3 !== _0x3baadc && 0x8 !== _0x3baadc && 0x2 !== _0x3baadc) return 0x1 === _0x3baadc && _0x33c3a4['isXMLDoc'](_0x53665d) || (_0x5a6c0a = _0x33c3a4['propFix'][_0x5a6c0a] || _0x5a6c0a, _0x1c3b9c = _0x33c3a4['propHooks'][_0x5a6c0a]), void 0x0 !== _0x3cdcd6 ? _0x1c3b9c && 'set' in _0x1c3b9c && void 0x0 !== (_0x5d0675 = _0x1c3b9c['set'](_0x53665d, _0x3cdcd6, _0x5a6c0a)) ? _0x5d0675 : _0x53665d[_0x5a6c0a] = _0x3cdcd6 : _0x1c3b9c && 'get' in _0x1c3b9c && null !== (_0x5d0675 = _0x1c3b9c['get'](_0x53665d, _0x5a6c0a)) ? _0x5d0675 : _0x53665d[_0x5a6c0a];
		},
		'propHooks': {
			'tabIndex': {
				'get': function(_0xeb60d8) {
					var _0xc33d49 = _0x33c3a4['find']['attr'](_0xeb60d8, 'tabindex');
					return _0xc33d49 ? parseInt(_0xc33d49, 0xa) : _0x4ced51['test'](_0xeb60d8['nodeName']) || _0x2c59e1['test'](_0xeb60d8['nodeName']) && _0xeb60d8['href'] ? 0x0 : -0x1;
				}
			}
		},
		'propFix': {
			'for': 'htmlFor',
			'class': 'className'
		}
	});
	_0x15f358['optSelected'] || (_0x33c3a4['propHooks']['selected'] = {
		'get': function(_0xfa5991) {
			_0xfa5991 = _0xfa5991['parentNode'];
			return _0xfa5991 && _0xfa5991['parentNode'] && _0xfa5991['parentNode']['selectedIndex'], null;
		},
		'set': function(_0x29a539) {
			_0x29a539 = _0x29a539['parentNode'];
			_0x29a539 && (_0x29a539['selectedIndex'], _0x29a539['parentNode'] && _0x29a539['parentNode']['selectedIndex']);
		}
	});
	_0x33c3a4['each']('tabIndex\x20readOnly\x20maxLength\x20cellSpacing\x20cellPadding\x20rowSpan\x20colSpan\x20useMap\x20frameBorder\x20contentEditable' ['split']('\x20'), function() {
		_0x33c3a4['propFix'][this['toLowerCase']()] = this;
	});
	_0x33c3a4['fn']['extend']({
		'addClass': function(_0xb4cb59) {
			var _0x183449, _0x1e4661, _0x24c185, _0x4302ca, _0x41a5b4, _0x2ba15d, _0xe3a2aa = 0x0;
			if (_0x33c3a4['isFunction'](_0xb4cb59)) return this['each'](function(_0x16fa48) {
				_0x33c3a4(this)['addClass'](_0xb4cb59['call'](this, _0x16fa48, _0x3947a4(this)));
			});
			if ('string' == typeof _0xb4cb59 && _0xb4cb59)
				for (_0x183449 = _0xb4cb59['match'](_0x1f9e10) || []; _0x1e4661 = this[_0xe3a2aa++];)
					if (_0x4302ca = _0x3947a4(_0x1e4661), _0x24c185 = 0x1 === _0x1e4661['nodeType'] && '\x20' + _0x15d5e5(_0x4302ca) + '\x20') {
						for (_0x2ba15d = 0x0; _0x41a5b4 = _0x183449[_0x2ba15d++];) 0x0 > _0x24c185['indexOf']('\x20' + _0x41a5b4 + '\x20') && (_0x24c185 += _0x41a5b4 + '\x20');
						_0x24c185 = _0x15d5e5(_0x24c185);
						_0x4302ca !== _0x24c185 && _0x1e4661['setAttribute']('class', _0x24c185);
					} return this;
		},
		'removeClass': function(_0x5eea0a) {
			var _0x3c28bd, _0x3dc9ab, _0x797873, _0x7e6ed9, _0x50193a, _0x5b4541, _0x1e363f = 0x0;
			if (_0x33c3a4['isFunction'](_0x5eea0a)) return this['each'](function(_0x104b86) {
				_0x33c3a4(this)['removeClass'](_0x5eea0a['call'](this, _0x104b86, _0x3947a4(this)));
			});
			if (!arguments['length']) return this['attr']('class', '');
			if ('string' == typeof _0x5eea0a && _0x5eea0a)
				for (_0x3c28bd = _0x5eea0a['match'](_0x1f9e10) || []; _0x3dc9ab = this[_0x1e363f++];)
					if (_0x7e6ed9 = _0x3947a4(_0x3dc9ab), _0x797873 = 0x1 === _0x3dc9ab['nodeType'] && '\x20' + _0x15d5e5(_0x7e6ed9) + '\x20') {
						for (_0x5b4541 = 0x0; _0x50193a = _0x3c28bd[_0x5b4541++];)
							for (; - 0x1 < _0x797873['indexOf']('\x20' + _0x50193a + '\x20');) _0x797873 = _0x797873['replace']('\x20' + _0x50193a + '\x20', '\x20');
						_0x797873 = _0x15d5e5(_0x797873);
						_0x7e6ed9 !== _0x797873 && _0x3dc9ab['setAttribute']('class', _0x797873);
					} return this;
		},
		'toggleClass': function(_0x3dfb0f, _0xc3984f) {
			var _0x2a16db = typeof _0x3dfb0f;
			return 'boolean' == typeof _0xc3984f && 'string' === _0x2a16db ? _0xc3984f ? this['addClass'](_0x3dfb0f) : this['removeClass'](_0x3dfb0f) : _0x33c3a4['isFunction'](_0x3dfb0f) ? this['each'](function(_0x63cb76) {
				_0x33c3a4(this)['toggleClass'](_0x3dfb0f['call'](this, _0x63cb76, _0x3947a4(this), _0xc3984f), _0xc3984f);
			}) : this['each'](function() {
				var _0x808fb2, _0x2a6ecc, _0x53acc5, _0x1a6005;
				if ('string' === _0x2a16db) {
					_0x2a6ecc = 0x0;
					_0x53acc5 = _0x33c3a4(this);
					for (_0x1a6005 = _0x3dfb0f['match'](_0x1f9e10) || []; _0x808fb2 = _0x1a6005[_0x2a6ecc++];) _0x53acc5['hasClass'](_0x808fb2) ? _0x53acc5['removeClass'](_0x808fb2) : _0x53acc5['addClass'](_0x808fb2);
				} else void 0x0 !== _0x3dfb0f && 'boolean' !== _0x2a16db || (_0x808fb2 = _0x3947a4(this), _0x808fb2 && _0x30b773['set'](this, '__className__', _0x808fb2), this['setAttribute'] && this['setAttribute']('class', _0x808fb2 || !0x1 === _0x3dfb0f ? '' : _0x30b773['get'](this, '__className__') || ''));
			});
		},
		'hasClass': function(_0x2e4ca5) {
			var _0x5559df, _0xe62873 = 0x0;
			for (_0x2e4ca5 = '\x20' + _0x2e4ca5 + '\x20'; _0x5559df = this[_0xe62873++];)
				if (0x1 === _0x5559df['nodeType'] && -0x1 < ('\x20' + _0x15d5e5(_0x3947a4(_0x5559df)) + '\x20')['indexOf'](_0x2e4ca5)) return !0x0;
			return !0x1;
		}
	});
	var _0x5706d8 = /\r/g;
	_0x33c3a4['fn']['extend']({
		'val': function(_0x515ed7) {
			var _0x3d1c1c, _0x427228, _0x4ca835, _0x5a9f35 = this[0x0];
			if (arguments['length']) return _0x4ca835 = _0x33c3a4['isFunction'](_0x515ed7), this['each'](function(_0x2bceee) {
				var _0x37fdc5;
				0x1 === this['nodeType'] && (_0x37fdc5 = _0x4ca835 ? _0x515ed7['call'](this, _0x2bceee, _0x33c3a4(this)['val']()) : _0x515ed7, null == _0x37fdc5 ? _0x37fdc5 = '' : 'number' == typeof _0x37fdc5 ? _0x37fdc5 += '' : Array['isArray'](_0x37fdc5) && (_0x37fdc5 = _0x33c3a4['map'](_0x37fdc5, function(_0x3f2324) {
					return null == _0x3f2324 ? '' : _0x3f2324 + '';
				})), _0x3d1c1c = _0x33c3a4['valHooks'][this['type']] || _0x33c3a4['valHooks'][this['nodeName']['toLowerCase']()], _0x3d1c1c && 'set' in _0x3d1c1c && void 0x0 !== _0x3d1c1c['set'](this, _0x37fdc5, 'value') || (this['value'] = _0x37fdc5));
			});
			if (_0x5a9f35) return _0x3d1c1c = _0x33c3a4['valHooks'][_0x5a9f35['type']] || _0x33c3a4['valHooks'][_0x5a9f35['nodeName']['toLowerCase']()], _0x3d1c1c && 'get' in _0x3d1c1c && void 0x0 !== (_0x427228 = _0x3d1c1c['get'](_0x5a9f35, 'value')) ? _0x427228 : (_0x427228 = _0x5a9f35['value'], 'string' == typeof _0x427228 ? _0x427228['replace'](_0x5706d8, '') : null == _0x427228 ? '' : _0x427228);
		}
	});
	_0x33c3a4['extend']({
		'valHooks': {
			'option': {
				'get': function(_0x3739c2) {
					var _0x3899ba = _0x33c3a4['find']['attr'](_0x3739c2, 'value');
					return null != _0x3899ba ? _0x3899ba : _0x15d5e5(_0x33c3a4['text'](_0x3739c2));
				}
			},
			'select': {
				'get': function(_0x528419) {
					var _0x55d4b5, _0x1cb913, _0x24b546 = _0x528419['options'],
						_0x443495 = _0x528419['selectedIndex'],
						_0x5e5a24 = 'select-one' === _0x528419['type'],
						_0x747919 = _0x5e5a24 ? null : [],
						_0x435cb8 = _0x5e5a24 ? _0x443495 + 0x1 : _0x24b546['length'];
					for (_0x1cb913 = 0x0 > _0x443495 ? _0x435cb8 : _0x5e5a24 ? _0x443495 : 0x0; _0x1cb913 < _0x435cb8; _0x1cb913++)
						if (_0x55d4b5 = _0x24b546[_0x1cb913], (_0x55d4b5['selected'] || _0x1cb913 === _0x443495) && !_0x55d4b5['disabled'] && (!_0x55d4b5['parentNode']['disabled'] || !_0x6b228b(_0x55d4b5['parentNode'], 'optgroup'))) {
							if (_0x528419 = _0x33c3a4(_0x55d4b5)['val'](), _0x5e5a24) return _0x528419;
							_0x747919['push'](_0x528419);
						} return _0x747919;
				},
				'set': function(_0x5763ed, _0x4da185) {
					for (var _0xe84976, _0x11f68b, _0x39657b = _0x5763ed['options'], _0x36a92a = _0x33c3a4['makeArray'](_0x4da185), _0x18546d = _0x39657b['length']; _0x18546d--;) _0x11f68b = _0x39657b[_0x18546d], (_0x11f68b['selected'] = -0x1 < _0x33c3a4['inArray'](_0x33c3a4['valHooks']['option']['get'](_0x11f68b), _0x36a92a)) && (_0xe84976 = !0x0);
					return _0xe84976 || (_0x5763ed['selectedIndex'] = -0x1), _0x36a92a;
				}
			}
		}
	});
	_0x33c3a4['each'](['radio', 'checkbox'], function() {
		_0x33c3a4['valHooks'][this] = {
			'set': function(_0x1b5344, _0x3b35cb) {
				if (Array['isArray'](_0x3b35cb)) return _0x1b5344['checked'] = -0x1 < _0x33c3a4['inArray'](_0x33c3a4(_0x1b5344)['val'](), _0x3b35cb);
			}
		};
		_0x15f358['checkOn'] || (_0x33c3a4['valHooks'][this]['get'] = function(_0x28e0b0) {
			return null === _0x28e0b0['getAttribute']('value') ? 'on' : _0x28e0b0['value'];
		});
	});
	var _0x1c1649 = /^(?:focusinfocus|focusoutblur)$/;
	_0x33c3a4['extend'](_0x33c3a4['event'], {
		'trigger': function(_0x3a32b6, _0x34cce3, _0x5abbdc, _0x50e635) {
			var _0x43d7f3, _0xc299c7, _0x126835, _0x8f61b8, _0x1c87ad, _0x267241, _0xaedf5c, _0x183b4a = [_0x5abbdc || _0x28899d],
				_0x716275 = _0x4c09c6['call'](_0x3a32b6, 'type') ? _0x3a32b6['type'] : _0x3a32b6;
			_0x43d7f3 = _0x4c09c6['call'](_0x3a32b6, 'namespace') ? _0x3a32b6['namespace']['split']('.') : [];
			if (_0xc299c7 = _0x126835 = _0x5abbdc = _0x5abbdc || _0x28899d, 0x3 !== _0x5abbdc['nodeType'] && 0x8 !== _0x5abbdc['nodeType'] && !_0x1c1649['test'](_0x716275 + _0x33c3a4['event']['triggered']) && (-0x1 < _0x716275['indexOf']('.') && (_0x43d7f3 = _0x716275['split']('.'), _0x716275 = _0x43d7f3['shift'](), _0x43d7f3['sort']()), _0x1c87ad = 0x0 > _0x716275['indexOf'](':') && 'on' + _0x716275, _0x3a32b6 = _0x3a32b6[_0x33c3a4['expando']] ? _0x3a32b6 : new _0x33c3a4['Event'](_0x716275, 'object' == typeof _0x3a32b6 && _0x3a32b6), _0x3a32b6['isTrigger'] = _0x50e635 ? 0x2 : 0x3, _0x3a32b6['namespace'] = _0x43d7f3['join']('.'), _0x3a32b6['rnamespace'] = _0x3a32b6['namespace'] ? RegExp('(^|\x5c.)' + _0x43d7f3['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)') : null, _0x3a32b6['result'] = void 0x0, _0x3a32b6['target'] || (_0x3a32b6['target'] = _0x5abbdc), _0x34cce3 = null == _0x34cce3 ? [_0x3a32b6] : _0x33c3a4['makeArray'](_0x34cce3, [_0x3a32b6]), _0xaedf5c = _0x33c3a4['event']['special'][_0x716275] || {}, _0x50e635 || !_0xaedf5c['trigger'] || !0x1 !== _0xaedf5c['trigger']['apply'](_0x5abbdc, _0x34cce3))) {
				if (!_0x50e635 && !_0xaedf5c['noBubble'] && !_0x33c3a4['isWindow'](_0x5abbdc)) {
					_0x8f61b8 = _0xaedf5c['delegateType'] || _0x716275;
					for (_0x1c1649['test'](_0x8f61b8 + _0x716275) || (_0xc299c7 = _0xc299c7['parentNode']); _0xc299c7; _0xc299c7 = _0xc299c7['parentNode']) _0x183b4a['push'](_0xc299c7), _0x126835 = _0xc299c7;
					_0x126835 === (_0x5abbdc['ownerDocument'] || _0x28899d) && _0x183b4a['push'](_0x126835['defaultView'] || _0x126835['parentWindow'] || _0x250f7b);
				}
				for (_0x43d7f3 = 0x0;
					(_0xc299c7 = _0x183b4a[_0x43d7f3++]) && !_0x3a32b6['isPropagationStopped']();) _0x3a32b6['type'] = 0x1 < _0x43d7f3 ? _0x8f61b8 : _0xaedf5c['bindType'] || _0x716275, (_0x267241 = (_0x30b773['get'](_0xc299c7, 'events') || {})[_0x3a32b6['type']] && _0x30b773['get'](_0xc299c7, 'handle')) && _0x267241['apply'](_0xc299c7, _0x34cce3), (_0x267241 = _0x1c87ad && _0xc299c7[_0x1c87ad]) && _0x267241['apply'] && _0x296ff1(_0xc299c7) && (_0x3a32b6['result'] = _0x267241['apply'](_0xc299c7, _0x34cce3), !0x1 === _0x3a32b6['result'] && _0x3a32b6['preventDefault']());
				return _0x3a32b6['type'] = _0x716275, _0x50e635 || _0x3a32b6['isDefaultPrevented']() || _0xaedf5c['_default'] && !0x1 !== _0xaedf5c['_default']['apply'](_0x183b4a['pop'](), _0x34cce3) || !_0x296ff1(_0x5abbdc) || _0x1c87ad && _0x33c3a4['isFunction'](_0x5abbdc[_0x716275]) && !_0x33c3a4['isWindow'](_0x5abbdc) && (_0x126835 = _0x5abbdc[_0x1c87ad], _0x126835 && (_0x5abbdc[_0x1c87ad] = null), _0x33c3a4['event']['triggered'] = _0x716275, _0x5abbdc[_0x716275](), _0x33c3a4['event']['triggered'] = void 0x0, _0x126835 && (_0x5abbdc[_0x1c87ad] = _0x126835)), _0x3a32b6['result'];
			}
		},
		'simulate': function(_0x468c83, _0xa8f5ce, _0x3d4a0e) {
			_0x468c83 = _0x33c3a4['extend'](new _0x33c3a4['Event'](), _0x3d4a0e, {
				'type': _0x468c83,
				'isSimulated': !0x0
			});
			_0x33c3a4['event']['trigger'](_0x468c83, null, _0xa8f5ce);
		}
	});
	_0x33c3a4['fn']['extend']({
		'trigger': function(_0x5e923e, _0x21f3c2) {
			return this['each'](function() {
				_0x33c3a4['event']['trigger'](_0x5e923e, _0x21f3c2, this);
			});
		},
		'triggerHandler': function(_0x425be4, _0x3b8d16) {
			var _0x3e8475 = this[0x0];
			if (_0x3e8475) return _0x33c3a4['event']['trigger'](_0x425be4, _0x3b8d16, _0x3e8475, !0x0);
		}
	});
	_0x33c3a4['each']('blur\x20focus\x20focusin\x20focusout\x20resize\x20scroll\x20click\x20dblclick\x20mousedown\x20mouseup\x20mousemove\x20mouseover\x20mouseout\x20mouseenter\x20mouseleave\x20change\x20select\x20submit\x20keydown\x20keypress\x20keyup\x20contextmenu' ['split']('\x20'), function(_0x210f75, _0x369249) {
		_0x33c3a4['fn'][_0x369249] = function(_0x364a07, _0x4ce7ef) {
			return 0x0 < arguments['length'] ? this['on'](_0x369249, null, _0x364a07, _0x4ce7ef) : this['trigger'](_0x369249);
		};
	});
	_0x33c3a4['fn']['extend']({
		'hover': function(_0x5b6936, _0x3c83e2) {
			return this['mouseenter'](_0x5b6936)['mouseleave'](_0x3c83e2 || _0x5b6936);
		}
	});
	_0x15f358['focusin'] = 'onfocusin' in _0x250f7b;
	_0x15f358['focusin'] || _0x33c3a4['each']({
		'focus': 'focusin',
		'blur': 'focusout'
	}, function(_0x595033, _0x5a6e56) {
		var _0x59fae0 = function(_0x38a1f3) {
			_0x33c3a4['event']['simulate'](_0x5a6e56, _0x38a1f3['target'], _0x33c3a4['event']['fix'](_0x38a1f3));
		};
		_0x33c3a4['event']['special'][_0x5a6e56] = {
			'setup': function() {
				var _0x3ca7c9 = this['ownerDocument'] || this,
					_0x5b4bef = _0x30b773['access'](_0x3ca7c9, _0x5a6e56);
				_0x5b4bef || _0x3ca7c9['addEventListener'](_0x595033, _0x59fae0, !0x0);
				_0x30b773['access'](_0x3ca7c9, _0x5a6e56, (_0x5b4bef || 0x0) + 0x1);
			},
			'teardown': function() {
				var _0x106481 = this['ownerDocument'] || this,
					_0x2d3a96 = _0x30b773['access'](_0x106481, _0x5a6e56) - 0x1;
				_0x2d3a96 ? _0x30b773['access'](_0x106481, _0x5a6e56, _0x2d3a96) : (_0x106481['removeEventListener'](_0x595033, _0x59fae0, !0x0), _0x30b773['remove'](_0x106481, _0x5a6e56));
			}
		};
	});
	var _0x4fadf9 = _0x250f7b['location'],
		_0x5324b0 = _0x33c3a4['now'](),
		_0x1fdb09 = /\?/;
	_0x33c3a4['parseXML'] = function(_0x3b9097) {
		var _0x199b3c;
		if (!_0x3b9097 || 'string' != typeof _0x3b9097) return null;
		try {
			_0x199b3c = new _0x250f7b['DOMParser']()['parseFromString'](_0x3b9097, 'text/xml');
		} catch (_0x392f47) {
			_0x199b3c = void 0x0;
		}
		return _0x199b3c && !_0x199b3c['getElementsByTagName']('parsererror')['length'] || _0x33c3a4['error']('Invalid\x20XML:\x20' + _0x3b9097), _0x199b3c;
	};
	var _0x1c83d2 = /\[\]$/,
		_0x3dccc8 = /\r?\n/g,
		_0x4e11a7 = /^(?:submit|button|image|reset|file)$/i,
		_0x3ee51f = /^(?:input|select|textarea|keygen)/i;
	_0x33c3a4['param'] = function(_0x1584b7, _0x54ff54) {
		var _0x582fe8, _0x44452f = [],
			_0x369f93 = function(_0x31b62d, _0x5a17bd) {
				var _0x32d193 = _0x33c3a4['isFunction'](_0x5a17bd) ? _0x5a17bd() : _0x5a17bd;
				_0x44452f[_0x44452f['length']] = encodeURIComponent(_0x31b62d) + '=' + encodeURIComponent(null == _0x32d193 ? '' : _0x32d193);
			};
		if (Array['isArray'](_0x1584b7) || _0x1584b7['jquery'] && !_0x33c3a4['isPlainObject'](_0x1584b7)) _0x33c3a4['each'](_0x1584b7, function() {
			_0x369f93(this['name'], this['value']);
		});
		else
			for (_0x582fe8 in _0x1584b7) _0x39b156(_0x582fe8, _0x1584b7[_0x582fe8], _0x54ff54, _0x369f93);
		return _0x44452f['join']('&');
	};
	_0x33c3a4['fn']['extend']({
		'serialize': function() {
			return _0x33c3a4['param'](this['serializeArray']());
		},
		'serializeArray': function() {
			return this['map'](function() {
				var _0x3f9b9d = _0x33c3a4['prop'](this, 'elements');
				return _0x3f9b9d ? _0x33c3a4['makeArray'](_0x3f9b9d) : this;
			})['filter'](function() {
				var _0x30a8f1 = this['type'];
				return this['name'] && !_0x33c3a4(this)['is'](':disabled') && _0x3ee51f['test'](this['nodeName']) && !_0x4e11a7['test'](_0x30a8f1) && (this['checked'] || !_0x1b738f['test'](_0x30a8f1));
			})['map'](function(_0x3563a5, _0x42bc27) {
				var _0x82292 = _0x33c3a4(this)['val']();
				return null == _0x82292 ? null : Array['isArray'](_0x82292) ? _0x33c3a4['map'](_0x82292, function(_0x33b86b) {
					return {
						'name': _0x42bc27['name'],
						'value': _0x33b86b['replace'](_0x3dccc8, '\x0d\x0a')
					};
				}) : {
					'name': _0x42bc27['name'],
					'value': _0x82292['replace'](_0x3dccc8, '\x0d\x0a')
				};
			})['get']();
		}
	});
	var _0x53f9be = /%20/g,
		_0x2af993 = /#.*$/,
		_0x1fe8f9 = /([?&])_=[^&]*/,
		_0x37d31f = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		_0x3334ba = /^(?:GET|HEAD)$/,
		_0x57aad0 = /^\/\//,
		_0x212831 = {},
		_0x57e5f6 = {},
		_0xd08c7c = '*/' ['concat']('*'),
		_0x380e3f = _0x28899d['createElement']('a');
	_0x380e3f['href'] = _0x4fadf9['href'];
	_0x33c3a4['extend']({
		'active': 0x0,
		'lastModified': {},
		'etag': {},
		'ajaxSettings': {
			'url': _0x4fadf9['href'],
			'type': 'GET',
			'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/ ['test'](_0x4fadf9['protocol']),
			'global': !0x0,
			'processData': !0x0,
			'async': !0x0,
			'contentType': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
			'accepts': {
				'*': _0xd08c7c,
				'text': 'text/plain',
				'html': 'text/html',
				'xml': 'application/xml,\x20text/xml',
				'json': 'application/json,\x20text/javascript'
			},
			'contents': {
				'xml': /\bxml\b/,
				'html': /\bhtml/,
				'json': /\bjson\b/
			},
			'responseFields': {
				'xml': 'responseXML',
				'text': 'responseText',
				'json': 'responseJSON'
			},
			'converters': {
				'*\x20text': String,
				'text\x20html': !0x0,
				'text\x20json': JSON['parse'],
				'text\x20xml': _0x33c3a4['parseXML']
			},
			'flatOptions': {
				'url': !0x0,
				'context': !0x0
			}
		},
		'ajaxSetup': function(_0x763541, _0x35da3b) {
			return _0x35da3b ? _0x227a2d(_0x227a2d(_0x763541, _0x33c3a4['ajaxSettings']), _0x35da3b) : _0x227a2d(_0x33c3a4['ajaxSettings'], _0x763541);
		},
		'ajaxPrefilter': _0x3ae951(_0x212831),
		'ajaxTransport': _0x3ae951(_0x57e5f6),
		'ajax': function(_0x41377d, _0x3aec5b) {
			function _0x46eb82(_0x4be634, _0x1d661e, _0x1cf773, _0x1f4b7d) {
				var _0x3520b1, _0x159894, _0x10c540, _0x209bb9, _0x333c35 = _0x1d661e;
				if (!_0x5597e5) {
					_0x5597e5 = !0x0;
					_0x421939 && _0x250f7b['clearTimeout'](_0x421939);
					_0x52a9b6 = void 0x0;
					_0x407bb8 = _0x1f4b7d || '';
					_0x18f96a['readyState'] = 0x0 < _0x4be634 ? 0x4 : 0x0;
					_0x1f4b7d = 0xc8 <= _0x4be634 && 0x12c > _0x4be634 || 0x130 === _0x4be634;
					if (_0x1cf773) {
						_0x10c540 = _0x330f81;
						for (var _0x31c588 = _0x18f96a, _0x596780, _0x1478b0, _0x323469, _0x5a5992, _0x73a9f8 = _0x10c540['contents'], _0x1ebf2f = _0x10c540['dataTypes'];
							'*' === _0x1ebf2f[0x0];) _0x1ebf2f['shift'](), void 0x0 === _0x596780 && (_0x596780 = _0x10c540['mimeType'] || _0x31c588['getResponseHeader']('Content-Type'));
						if (_0x596780)
							for (_0x1478b0 in _0x73a9f8)
								if (_0x73a9f8[_0x1478b0] && _0x73a9f8[_0x1478b0]['test'](_0x596780)) {
									_0x1ebf2f['unshift'](_0x1478b0);
									break;
								} if (_0x1ebf2f[0x0] in _0x1cf773) _0x323469 = _0x1ebf2f[0x0];
						else {
							for (_0x1478b0 in _0x1cf773) {
								if (!_0x1ebf2f[0x0] || _0x10c540['converters'][_0x1478b0 + '\x20' + _0x1ebf2f[0x0]]) {
									_0x323469 = _0x1478b0;
									break;
								}
								_0x5a5992 || (_0x5a5992 = _0x1478b0);
							}
							_0x323469 = _0x323469 || _0x5a5992;
						}
						_0x10c540 = _0x1cf773 = _0x323469 ? (_0x323469 !== _0x1ebf2f[0x0] && _0x1ebf2f['unshift'](_0x323469), _0x1cf773[_0x323469]) : void 0x0;
					}
					var _0x3d11ee;
					_0x53663f: {
						_0x1cf773 = _0x330f81;_0x596780 = _0x10c540;_0x1478b0 = _0x18f96a;_0x323469 = _0x1f4b7d;
						var _0x2f670c, _0x3fe8d1, _0x30937c;_0x10c540 = {};_0x31c588 = _0x1cf773['dataTypes']['slice']();
						if (_0x31c588[0x1])
							for (_0x2f670c in _0x1cf773['converters']) _0x10c540[_0x2f670c['toLowerCase']()] = _0x1cf773['converters'][_0x2f670c];
						for (_0x5a5992 = _0x31c588['shift'](); _0x5a5992;)
							if (_0x1cf773['responseFields'][_0x5a5992] && (_0x1478b0[_0x1cf773['responseFields'][_0x5a5992]] = _0x596780), !_0x30937c && _0x323469 && _0x1cf773['dataFilter'] && (_0x596780 = _0x1cf773['dataFilter'](_0x596780, _0x1cf773['dataType'])), _0x30937c = _0x5a5992, _0x5a5992 = _0x31c588['shift']())
								if ('*' === _0x5a5992) _0x5a5992 = _0x30937c;
								else if ('*' !== _0x30937c && _0x30937c !== _0x5a5992) {
							if (_0x2f670c = _0x10c540[_0x30937c + '\x20' + _0x5a5992] || _0x10c540['*\x20' + _0x5a5992], !_0x2f670c)
								for (_0x3d11ee in _0x10c540)
									if (_0x3fe8d1 = _0x3d11ee['split']('\x20'), _0x3fe8d1[0x1] === _0x5a5992 && (_0x2f670c = _0x10c540[_0x30937c + '\x20' + _0x3fe8d1[0x0]] || _0x10c540['*\x20' + _0x3fe8d1[0x0]])) {
										!0x0 === _0x2f670c ? _0x2f670c = _0x10c540[_0x3d11ee] : !0x0 !== _0x10c540[_0x3d11ee] && (_0x5a5992 = _0x3fe8d1[0x0], _0x31c588['unshift'](_0x3fe8d1[0x1]));
										break;
									} if (!0x0 !== _0x2f670c)
								if (_0x2f670c && _0x1cf773['throws']) _0x596780 = _0x2f670c(_0x596780);
								else try {
									_0x596780 = _0x2f670c(_0x596780);
								} catch (_0xa350b) {
									_0x3d11ee = {
										'state': 'parsererror',
										'error': _0x2f670c ? _0xa350b : 'No\x20conversion\x20from\x20' + _0x30937c + '\x20to\x20' + _0x5a5992
									};
									break _0x53663f;
								}
						}
						_0x3d11ee = {
							'state': 'success',
							'data': _0x596780
						};
					}
					_0x10c540 = _0x3d11ee;
					_0x1f4b7d ? (_0x330f81['ifModified'] && (_0x209bb9 = _0x18f96a['getResponseHeader']('Last-Modified'), _0x209bb9 && (_0x33c3a4['lastModified'][_0xc07991] = _0x209bb9), _0x209bb9 = _0x18f96a['getResponseHeader']('etag'), _0x209bb9 && (_0x33c3a4['etag'][_0xc07991] = _0x209bb9)), 0xcc === _0x4be634 || 'HEAD' === _0x330f81['type'] ? _0x333c35 = 'nocontent' : 0x130 === _0x4be634 ? _0x333c35 = 'notmodified' : (_0x333c35 = _0x10c540['state'], _0x3520b1 = _0x10c540['data'], _0x159894 = _0x10c540['error'], _0x1f4b7d = !_0x159894)) : (_0x159894 = _0x333c35, !_0x4be634 && _0x333c35 || (_0x333c35 = 'error', 0x0 > _0x4be634 && (_0x4be634 = 0x0)));
					_0x18f96a['status'] = _0x4be634;
					_0x18f96a['statusText'] = (_0x1d661e || _0x333c35) + '';
					_0x1f4b7d ? _0x472454['resolveWith'](_0x3b8511, [_0x3520b1, _0x333c35, _0x18f96a]) : _0x472454['rejectWith'](_0x3b8511, [_0x18f96a, _0x333c35, _0x159894]);
					_0x18f96a['statusCode'](_0x851ec0);
					_0x851ec0 = void 0x0;
					_0x1f8b11 && _0x1197b9['trigger'](_0x1f4b7d ? 'ajaxSuccess' : 'ajaxError', [_0x18f96a, _0x330f81, _0x1f4b7d ? _0x3520b1 : _0x159894]);
					_0x4a042c['fireWith'](_0x3b8511, [_0x18f96a, _0x333c35]);
					_0x1f8b11 && (_0x1197b9['trigger']('ajaxComplete', [_0x18f96a, _0x330f81]), --_0x33c3a4['active'] || _0x33c3a4['event']['trigger']('ajaxStop'));
				}
			}
			'object' == typeof _0x41377d && (_0x3aec5b = _0x41377d, _0x41377d = void 0x0);
			_0x3aec5b = _0x3aec5b || {};
			var _0x52a9b6, _0xc07991, _0x407bb8, _0x2cf429, _0x421939, _0x795c9e, _0x5597e5, _0x1f8b11, _0x4fc3ea, _0xa05f1f, _0x330f81 = _0x33c3a4['ajaxSetup']({}, _0x3aec5b),
				_0x3b8511 = _0x330f81['context'] || _0x330f81,
				_0x1197b9 = _0x330f81['context'] && (_0x3b8511['nodeType'] || _0x3b8511['jquery']) ? _0x33c3a4(_0x3b8511) : _0x33c3a4['event'],
				_0x472454 = _0x33c3a4['Deferred'](),
				_0x4a042c = _0x33c3a4['Callbacks']('once\x20memory'),
				_0x851ec0 = _0x330f81['statusCode'] || {},
				_0x46b97c = {},
				_0x1c832a = {},
				_0x9b596f = 'canceled',
				_0x18f96a = {
					'readyState': 0x0,
					'getResponseHeader': function(_0x5cd83e) {
						var _0x1627ac;
						if (_0x5597e5) {
							if (!_0x2cf429)
								for (_0x2cf429 = {}; _0x1627ac = _0x37d31f['exec'](_0x407bb8);) _0x2cf429[_0x1627ac[0x1]['toLowerCase']()] = _0x1627ac[0x2];
							_0x1627ac = _0x2cf429[_0x5cd83e['toLowerCase']()];
						}
						return null == _0x1627ac ? null : _0x1627ac;
					},
					'getAllResponseHeaders': function() {
						return _0x5597e5 ? _0x407bb8 : null;
					},
					'setRequestHeader': function(_0x35a600, _0x249177) {
						return null == _0x5597e5 && (_0x35a600 = _0x1c832a[_0x35a600['toLowerCase']()] = _0x1c832a[_0x35a600['toLowerCase']()] || _0x35a600, _0x46b97c[_0x35a600] = _0x249177), this;
					},
					'overrideMimeType': function(_0x147d1e) {
						return null == _0x5597e5 && (_0x330f81['mimeType'] = _0x147d1e), this;
					},
					'statusCode': function(_0x1c0423) {
						var _0x29c15e;
						if (_0x1c0423)
							if (_0x5597e5) _0x18f96a['always'](_0x1c0423[_0x18f96a['status']]);
							else
								for (_0x29c15e in _0x1c0423) _0x851ec0[_0x29c15e] = [_0x851ec0[_0x29c15e], _0x1c0423[_0x29c15e]];
						return this;
					},
					'abort': function(_0x53b9c8) {
						_0x53b9c8 = _0x53b9c8 || _0x9b596f;
						return _0x52a9b6 && _0x52a9b6['abort'](_0x53b9c8), _0x46eb82(0x0, _0x53b9c8), this;
					}
				};
			if (_0x472454['promise'](_0x18f96a), _0x330f81['url'] = ((_0x41377d || _0x330f81['url'] || _0x4fadf9['href']) + '')['replace'](_0x57aad0, _0x4fadf9['protocol'] + '//'), _0x330f81['type'] = _0x3aec5b['method'] || _0x3aec5b['type'] || _0x330f81['method'] || _0x330f81['type'], _0x330f81['dataTypes'] = (_0x330f81['dataType'] || '*')['toLowerCase']()['match'](_0x1f9e10) || [''], null == _0x330f81['crossDomain']) {
				_0x795c9e = _0x28899d['createElement']('a');
				try {
					_0x795c9e['href'] = _0x330f81['url'], _0x795c9e['href'] = _0x795c9e['href'], _0x330f81['crossDomain'] = _0x380e3f['protocol'] + '//' + _0x380e3f['host'] != _0x795c9e['protocol'] + '//' + _0x795c9e['host'];
				} catch (_0x2d0b71) {
					_0x330f81['crossDomain'] = !0x0;
				}
			}
			if (_0x330f81['data'] && _0x330f81['processData'] && 'string' != typeof _0x330f81['data'] && (_0x330f81['data'] = _0x33c3a4['param'](_0x330f81['data'], _0x330f81['traditional'])), _0x3b772f(_0x212831, _0x330f81, _0x3aec5b, _0x18f96a), _0x5597e5) return _0x18f96a;
			(_0x1f8b11 = _0x33c3a4['event'] && _0x330f81['global']) && 0x0 === _0x33c3a4['active']++ && _0x33c3a4['event']['trigger']('ajaxStart');
			_0x330f81['type'] = _0x330f81['type']['toUpperCase']();
			_0x330f81['hasContent'] = !_0x3334ba['test'](_0x330f81['type']);
			_0xc07991 = _0x330f81['url']['replace'](_0x2af993, '');
			_0x330f81['hasContent'] ? _0x330f81['data'] && _0x330f81['processData'] && 0x0 === (_0x330f81['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && (_0x330f81['data'] = _0x330f81['data']['replace'](_0x53f9be, '+')) : (_0xa05f1f = _0x330f81['url']['slice'](_0xc07991['length']), _0x330f81['data'] && (_0xc07991 += (_0x1fdb09['test'](_0xc07991) ? '&' : '?') + _0x330f81['data'], delete _0x330f81['data']), !0x1 === _0x330f81['cache'] && (_0xc07991 = _0xc07991['replace'](_0x1fe8f9, '$1'), _0xa05f1f = (_0x1fdb09['test'](_0xc07991) ? '&' : '?') + '_=' + _0x5324b0++ + _0xa05f1f), _0x330f81['url'] = _0xc07991 + _0xa05f1f);
			_0x330f81['ifModified'] && (_0x33c3a4['lastModified'][_0xc07991] && _0x18f96a['setRequestHeader']('If-Modified-Since', _0x33c3a4['lastModified'][_0xc07991]), _0x33c3a4['etag'][_0xc07991] && _0x18f96a['setRequestHeader']('If-None-Match', _0x33c3a4['etag'][_0xc07991]));
			(_0x330f81['data'] && _0x330f81['hasContent'] && !0x1 !== _0x330f81['contentType'] || _0x3aec5b['contentType']) && _0x18f96a['setRequestHeader']('Content-Type', _0x330f81['contentType']);
			_0x18f96a['setRequestHeader']('Accept', _0x330f81['dataTypes'][0x0] && _0x330f81['accepts'][_0x330f81['dataTypes'][0x0]] ? _0x330f81['accepts'][_0x330f81['dataTypes'][0x0]] + ('*' !== _0x330f81['dataTypes'][0x0] ? ',\x20' + _0xd08c7c + ';\x20q=0.01' : '') : _0x330f81['accepts']['*']);
			for (_0x4fc3ea in _0x330f81['headers']) _0x18f96a['setRequestHeader'](_0x4fc3ea, _0x330f81['headers'][_0x4fc3ea]);
			if (_0x330f81['beforeSend'] && (!0x1 === _0x330f81['beforeSend']['call'](_0x3b8511, _0x18f96a, _0x330f81) || _0x5597e5)) return _0x18f96a['abort']();
			if (_0x9b596f = 'abort', _0x4a042c['add'](_0x330f81['complete']), _0x18f96a['done'](_0x330f81['success']), _0x18f96a['fail'](_0x330f81['error']), _0x52a9b6 = _0x3b772f(_0x57e5f6, _0x330f81, _0x3aec5b, _0x18f96a)) {
				if (_0x18f96a['readyState'] = 0x1, _0x1f8b11 && _0x1197b9['trigger']('ajaxSend', [_0x18f96a, _0x330f81]), _0x5597e5) return _0x18f96a;
				_0x330f81['async'] && 0x0 < _0x330f81['timeout'] && (_0x421939 = _0x250f7b['setTimeout'](function() {
					_0x18f96a['abort']('timeout');
				}, _0x330f81['timeout']));
				try {
					_0x5597e5 = !0x1, _0x52a9b6['send'](_0x46b97c, _0x46eb82);
				} catch (_0x3f7d15) {
					if (_0x5597e5) throw _0x3f7d15;
					_0x46eb82(-0x1, _0x3f7d15);
				}
			} else _0x46eb82(-0x1, 'No\x20Transport');
			return _0x18f96a;
		},
		'getJSON': function(_0x43b704, _0x5eab40, _0x5d3141) {
			return _0x33c3a4['get'](_0x43b704, _0x5eab40, _0x5d3141, 'json');
		},
		'getScript': function(_0x238cc1, _0x20c5b9) {
			return _0x33c3a4['get'](_0x238cc1, void 0x0, _0x20c5b9, 'script');
		}
	});
	_0x33c3a4['each'](['get', 'post'], function(_0x4c0238, _0x40e971) {
		_0x33c3a4[_0x40e971] = function(_0x3f960b, _0x512c4c, _0x4812c1, _0x3923fa) {
			return _0x33c3a4['isFunction'](_0x512c4c) && (_0x3923fa = _0x3923fa || _0x4812c1, _0x4812c1 = _0x512c4c, _0x512c4c = void 0x0), _0x33c3a4['ajax'](_0x33c3a4['extend']({
				'url': _0x3f960b,
				'type': _0x40e971,
				'dataType': _0x3923fa,
				'data': _0x512c4c,
				'success': _0x4812c1
			}, _0x33c3a4['isPlainObject'](_0x3f960b) && _0x3f960b));
		};
	});
	_0x33c3a4['_evalUrl'] = function(_0x5c6ebf) {
		return _0x33c3a4['ajax']({
			'url': _0x5c6ebf,
			'type': 'GET',
			'dataType': 'script',
			'cache': !0x0,
			'async': !0x1,
			'global': !0x1,
			'throws': !0x0
		});
	};
	_0x33c3a4['fn']['extend']({
		'wrapAll': function(_0x374668) {
			var _0x196397;
			return this[0x0] && (_0x33c3a4['isFunction'](_0x374668) && (_0x374668 = _0x374668['call'](this[0x0])), _0x196397 = _0x33c3a4(_0x374668, this[0x0]['ownerDocument'])['eq'](0x0)['clone'](!0x0), this[0x0]['parentNode'] && _0x196397['insertBefore'](this[0x0]), _0x196397['map'](function() {
				for (var _0x4440da = this; _0x4440da['firstElementChild'];) _0x4440da = _0x4440da['firstElementChild'];
				return _0x4440da;
			})['append'](this)), this;
		},
		'wrapInner': function(_0x83b61b) {
			return _0x33c3a4['isFunction'](_0x83b61b) ? this['each'](function(_0x2104d3) {
				_0x33c3a4(this)['wrapInner'](_0x83b61b['call'](this, _0x2104d3));
			}) : this['each'](function() {
				var _0x4c8c18 = _0x33c3a4(this),
					_0x133b42 = _0x4c8c18['contents']();
				_0x133b42['length'] ? _0x133b42['wrapAll'](_0x83b61b) : _0x4c8c18['append'](_0x83b61b);
			});
		},
		'wrap': function(_0x300fc3) {
			var _0x19cd4b = _0x33c3a4['isFunction'](_0x300fc3);
			return this['each'](function(_0x390793) {
				_0x33c3a4(this)['wrapAll'](_0x19cd4b ? _0x300fc3['call'](this, _0x390793) : _0x300fc3);
			});
		},
		'unwrap': function(_0x18f02f) {
			return this['parent'](_0x18f02f)['not']('body')['each'](function() {
				_0x33c3a4(this)['replaceWith'](this['childNodes']);
			}), this;
		}
	});
	_0x33c3a4['expr']['pseudos']['hidden'] = function(_0x41b394) {
		return !_0x33c3a4['expr']['pseudos']['visible'](_0x41b394);
	};
	_0x33c3a4['expr']['pseudos']['visible'] = function(_0x1b802d) {
		return !(!_0x1b802d['offsetWidth'] && !_0x1b802d['offsetHeight'] && !_0x1b802d['getClientRects']()['length']);
	};
	_0x33c3a4['ajaxSettings']['xhr'] = function() {
		try {
			return new _0x250f7b['XMLHttpRequest']();
		} catch (_0x1f8459) {}
	};
	var _0x26a66e = {
			'0': 0xc8,
			1223: 0xcc
		},
		_0x80bb4b = _0x33c3a4['ajaxSettings']['xhr']();
	_0x15f358['cors'] = !!_0x80bb4b && 'withCredentials' in _0x80bb4b;
	_0x15f358['ajax'] = _0x80bb4b = !!_0x80bb4b;
	_0x33c3a4['ajaxTransport'](function(_0x5c8688) {
		var _0x399113, _0x193ccf;
		if (_0x15f358['cors'] || _0x80bb4b && !_0x5c8688['crossDomain']) return {
			'send': function(_0x4f9e2d, _0x338b3a) {
				var _0x44bb90, _0x3ce66a = _0x5c8688['xhr']();
				if (_0x3ce66a['open'](_0x5c8688['type'], _0x5c8688['url'], _0x5c8688['async'], _0x5c8688['username'], _0x5c8688['password']), _0x5c8688['xhrFields'])
					for (_0x44bb90 in _0x5c8688['xhrFields']) _0x3ce66a[_0x44bb90] = _0x5c8688['xhrFields'][_0x44bb90];
				_0x5c8688['mimeType'] && _0x3ce66a['overrideMimeType'] && _0x3ce66a['overrideMimeType'](_0x5c8688['mimeType']);
				_0x5c8688['crossDomain'] || _0x4f9e2d['X-Requested-With'] || (_0x4f9e2d['X-Requested-With'] = 'XMLHttpRequest');
				for (_0x44bb90 in _0x4f9e2d) _0x3ce66a['setRequestHeader'](_0x44bb90, _0x4f9e2d[_0x44bb90]);
				_0x399113 = function(_0x48d94d) {
					return function() {
						_0x399113 && (_0x399113 = _0x193ccf = _0x3ce66a['onload'] = _0x3ce66a['onerror'] = _0x3ce66a['onabort'] = _0x3ce66a['onreadystatechange'] = null, 'abort' === _0x48d94d ? _0x3ce66a['abort']() : 'error' === _0x48d94d ? 'number' != typeof _0x3ce66a['status'] ? _0x338b3a(0x0, 'error') : _0x338b3a(_0x3ce66a['status'], _0x3ce66a['statusText']) : _0x338b3a(_0x26a66e[_0x3ce66a['status']] || _0x3ce66a['status'], _0x3ce66a['statusText'], 'text' !== (_0x3ce66a['responseType'] || 'text') || 'string' != typeof _0x3ce66a['responseText'] ? {
							'binary': _0x3ce66a['response']
						} : {
							'text': _0x3ce66a['responseText']
						}, _0x3ce66a['getAllResponseHeaders']()));
					};
				};
				_0x3ce66a['onload'] = _0x399113();
				_0x193ccf = _0x3ce66a['onerror'] = _0x399113('error');
				void 0x0 !== _0x3ce66a['onabort'] ? _0x3ce66a['onabort'] = _0x193ccf : _0x3ce66a['onreadystatechange'] = function() {
					0x4 === _0x3ce66a['readyState'] && _0x250f7b['setTimeout'](function() {
						_0x399113 && _0x193ccf();
					});
				};
				_0x399113 = _0x399113('abort');
				try {
					_0x3ce66a['send'](_0x5c8688['hasContent'] && _0x5c8688['data'] || null);
				} catch (_0x514f2f) {
					if (_0x399113) throw _0x514f2f;
				}
			},
			'abort': function() {
				_0x399113 && _0x399113();
			}
		};
	});
	_0x33c3a4['ajaxPrefilter'](function(_0x280b28) {
		_0x280b28['crossDomain'] && (_0x280b28['contents']['script'] = !0x1);
	});
	_0x33c3a4['ajaxSetup']({
		'accepts': {
			'script': 'text/javascript,\x20application/javascript,\x20application/ecmascript,\x20application/x-ecmascript'
		},
		'contents': {
			'script': /\b(?:java|ecma)script\b/
		},
		'converters': {
			'text\x20script': function(_0x20450e) {
				return _0x33c3a4['globalEval'](_0x20450e), _0x20450e;
			}
		}
	});
	_0x33c3a4['ajaxPrefilter']('script', function(_0x3ffc68) {
		void 0x0 === _0x3ffc68['cache'] && (_0x3ffc68['cache'] = !0x1);
		_0x3ffc68['crossDomain'] && (_0x3ffc68['type'] = 'GET');
	});
	_0x33c3a4['ajaxTransport']('script', function(_0x4c0f96) {
		if (_0x4c0f96['crossDomain']) {
			var _0x1626d4, _0x4f65b2;
			return {
				'send': function(_0x29566e, _0x46db38) {
					_0x1626d4 = _0x33c3a4('<script>')['prop']({
						'charset': _0x4c0f96['scriptCharset'],
						'src': _0x4c0f96['url']
					})['on']('load\x20error', _0x4f65b2 = function(_0x4dbbce) {
						_0x1626d4['remove']();
						_0x4f65b2 = null;
						_0x4dbbce && _0x46db38('error' === _0x4dbbce['type'] ? 0x194 : 0xc8, _0x4dbbce['type']);
					});
					_0x28899d['head']['appendChild'](_0x1626d4[0x0]);
				},
				'abort': function() {
					_0x4f65b2 && _0x4f65b2();
				}
			};
		}
	});
	var _0x35dcfe = [],
		_0x252bc8 = /(=)\?(?=&|$)|\?\?/;
	_0x33c3a4['ajaxSetup']({
		'jsonp': 'callback',
		'jsonpCallback': function() {
			var _0x2bd8ce = _0x35dcfe['pop']() || _0x33c3a4['expando'] + '_' + _0x5324b0++;
			return this[_0x2bd8ce] = !0x0, _0x2bd8ce;
		}
	});
	_0x33c3a4['ajaxPrefilter']('json\x20jsonp', function(_0x5f1b35, _0x4150cd, _0x23f6e4) {
		var _0x46cca3, _0x4b4e71, _0x1b27be, _0x313d47 = !0x1 !== _0x5f1b35['jsonp'] && (_0x252bc8['test'](_0x5f1b35['url']) ? 'url' : 'string' == typeof _0x5f1b35['data'] && 0x0 === (_0x5f1b35['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && _0x252bc8['test'](_0x5f1b35['data']) && 'data');
		if (_0x313d47 || 'jsonp' === _0x5f1b35['dataTypes'][0x0]) return _0x46cca3 = _0x5f1b35['jsonpCallback'] = _0x33c3a4['isFunction'](_0x5f1b35['jsonpCallback']) ? _0x5f1b35['jsonpCallback']() : _0x5f1b35['jsonpCallback'], _0x313d47 ? _0x5f1b35[_0x313d47] = _0x5f1b35[_0x313d47]['replace'](_0x252bc8, '$1' + _0x46cca3) : !0x1 !== _0x5f1b35['jsonp'] && (_0x5f1b35['url'] += (_0x1fdb09['test'](_0x5f1b35['url']) ? '&' : '?') + _0x5f1b35['jsonp'] + '=' + _0x46cca3), _0x5f1b35['converters']['script\x20json'] = function() {
			return _0x1b27be || _0x33c3a4['error'](_0x46cca3 + '\x20was\x20not\x20called'), _0x1b27be[0x0];
		}, _0x5f1b35['dataTypes'][0x0] = 'json', _0x4b4e71 = _0x250f7b[_0x46cca3], _0x250f7b[_0x46cca3] = function() {
			_0x1b27be = arguments;
		}, _0x23f6e4['always'](function() {
			void 0x0 === _0x4b4e71 ? _0x33c3a4(_0x250f7b)['removeProp'](_0x46cca3) : _0x250f7b[_0x46cca3] = _0x4b4e71;
			_0x5f1b35[_0x46cca3] && (_0x5f1b35['jsonpCallback'] = _0x4150cd['jsonpCallback'], _0x35dcfe['push'](_0x46cca3));
			_0x1b27be && _0x33c3a4['isFunction'](_0x4b4e71) && _0x4b4e71(_0x1b27be[0x0]);
			_0x1b27be = _0x4b4e71 = void 0x0;
		}), 'script';
	});
	var _0x21bd35 = _0x15f358,
		_0x33d8fb, _0x365b62 = _0x28899d['implementation']['createHTMLDocument']('')['body'];
	_0x33d8fb = (_0x365b62['innerHTML'] = '<form></form><form></form>', 0x2 === _0x365b62['childNodes']['length']);
	_0x21bd35['createHTMLDocument'] = _0x33d8fb;
	_0x33c3a4['parseHTML'] = function(_0x14c7d8, _0x54a0ff, _0x1741b3) {
		if ('string' != typeof _0x14c7d8) return [];
		'boolean' == typeof _0x54a0ff && (_0x1741b3 = _0x54a0ff, _0x54a0ff = !0x1);
		var _0x11a16b, _0x2b5cb7, _0x2acb53;
		return _0x54a0ff || (_0x15f358['createHTMLDocument'] ? (_0x54a0ff = _0x28899d['implementation']['createHTMLDocument'](''), _0x11a16b = _0x54a0ff['createElement']('base'), _0x11a16b['href'] = _0x28899d['location']['href'], _0x54a0ff['head']['appendChild'](_0x11a16b)) : _0x54a0ff = _0x28899d), _0x2b5cb7 = _0xd86d8e['exec'](_0x14c7d8), _0x2acb53 = !_0x1741b3 && [], _0x2b5cb7 ? [_0x54a0ff['createElement'](_0x2b5cb7[0x1])] : (_0x2b5cb7 = _0x5a7340([_0x14c7d8], _0x54a0ff, _0x2acb53), _0x2acb53 && _0x2acb53['length'] && _0x33c3a4(_0x2acb53)['remove'](), _0x33c3a4['merge']([], _0x2b5cb7['childNodes']));
	};
	_0x33c3a4['fn']['load'] = function(_0x6df7ce, _0x4f4d9d, _0x1242ee) {
		var _0x164b38, _0x3f6605, _0xa3bd7, _0x32a563 = this,
			_0x59dddd = _0x6df7ce['indexOf']('\x20');
		return -0x1 < _0x59dddd && (_0x164b38 = _0x15d5e5(_0x6df7ce['slice'](_0x59dddd)), _0x6df7ce = _0x6df7ce['slice'](0x0, _0x59dddd)), _0x33c3a4['isFunction'](_0x4f4d9d) ? (_0x1242ee = _0x4f4d9d, _0x4f4d9d = void 0x0) : _0x4f4d9d && 'object' == typeof _0x4f4d9d && (_0x3f6605 = 'POST'), 0x0 < _0x32a563['length'] && _0x33c3a4['ajax']({
			'url': _0x6df7ce,
			'type': _0x3f6605 || 'GET',
			'dataType': 'html',
			'data': _0x4f4d9d
		})['done'](function(_0xb09db4) {
			_0xa3bd7 = arguments;
			_0x32a563['html'](_0x164b38 ? _0x33c3a4('<div>')['append'](_0x33c3a4['parseHTML'](_0xb09db4))['find'](_0x164b38) : _0xb09db4);
		})['always'](_0x1242ee && function(_0x37739b, _0x56dc6b) {
			_0x32a563['each'](function() {
				_0x1242ee['apply'](this, _0xa3bd7 || [_0x37739b['responseText'], _0x56dc6b, _0x37739b]);
			});
		}), this;
	};
	_0x33c3a4['each']('ajaxStart\x20ajaxStop\x20ajaxComplete\x20ajaxError\x20ajaxSuccess\x20ajaxSend' ['split']('\x20'), function(_0x1da1ab, _0x2c6fad) {
		_0x33c3a4['fn'][_0x2c6fad] = function(_0x1ab666) {
			return this['on'](_0x2c6fad, _0x1ab666);
		};
	});
	_0x33c3a4['expr']['pseudos']['animated'] = function(_0x12b0a8) {
		return _0x33c3a4['grep'](_0x33c3a4['timers'], function(_0x43730e) {
			return _0x12b0a8 === _0x43730e['elem'];
		})['length'];
	};
	_0x33c3a4['offset'] = {
		'setOffset': function(_0x16e6cb, _0x8c3463, _0x49f264) {
			var _0x13732a, _0x18df27, _0x2b3676, _0x59bfd9, _0x3e11c6, _0x26d347, _0x419847 = _0x33c3a4['css'](_0x16e6cb, 'position'),
				_0x1a5d0f = _0x33c3a4(_0x16e6cb),
				_0x4cfacc = {};
			'static' === _0x419847 && (_0x16e6cb['style']['position'] = 'relative');
			_0x3e11c6 = _0x1a5d0f['offset']();
			_0x2b3676 = _0x33c3a4['css'](_0x16e6cb, 'top');
			_0x26d347 = _0x33c3a4['css'](_0x16e6cb, 'left');
			('absolute' === _0x419847 || 'fixed' === _0x419847) && -0x1 < (_0x2b3676 + _0x26d347)['indexOf']('auto') ? (_0x13732a = _0x1a5d0f['position'](), _0x59bfd9 = _0x13732a['top'], _0x18df27 = _0x13732a['left']) : (_0x59bfd9 = parseFloat(_0x2b3676) || 0x0, _0x18df27 = parseFloat(_0x26d347) || 0x0);
			_0x33c3a4['isFunction'](_0x8c3463) && (_0x8c3463 = _0x8c3463['call'](_0x16e6cb, _0x49f264, _0x33c3a4['extend']({}, _0x3e11c6)));
			null != _0x8c3463['top'] && (_0x4cfacc['top'] = _0x8c3463['top'] - _0x3e11c6['top'] + _0x59bfd9);
			null != _0x8c3463['left'] && (_0x4cfacc['left'] = _0x8c3463['left'] - _0x3e11c6['left'] + _0x18df27);
			'using' in _0x8c3463 ? _0x8c3463['using']['call'](_0x16e6cb, _0x4cfacc) : _0x1a5d0f['css'](_0x4cfacc);
		}
	};
	_0x33c3a4['fn']['extend']({
		'offset': function(_0x44d15c) {
			if (arguments['length']) return void 0x0 === _0x44d15c ? this : this['each'](function(_0x25f304) {
				_0x33c3a4['offset']['setOffset'](this, _0x44d15c, _0x25f304);
			});
			var _0x2a7585, _0x3df5eb, _0x435839, _0x3f83e9, _0xc47cd1 = this[0x0];
			if (_0xc47cd1) return _0xc47cd1['getClientRects']()['length'] ? (_0x435839 = _0xc47cd1['getBoundingClientRect'](), _0x2a7585 = _0xc47cd1['ownerDocument'], _0x3df5eb = _0x2a7585['documentElement'], _0x3f83e9 = _0x2a7585['defaultView'], {
				'top': _0x435839['top'] + _0x3f83e9['pageYOffset'] - _0x3df5eb['clientTop'],
				'left': _0x435839['left'] + _0x3f83e9['pageXOffset'] - _0x3df5eb['clientLeft']
			}) : {
				'top': 0x0,
				'left': 0x0
			};
		},
		'position': function() {
			if (this[0x0]) {
				var _0x387f4b, _0x395a7e, _0x2e48e9 = this[0x0],
					_0x1e6777 = {
						'top': 0x0,
						'left': 0x0
					};
				return 'fixed' === _0x33c3a4['css'](_0x2e48e9, 'position') ? _0x395a7e = _0x2e48e9['getBoundingClientRect']() : (_0x387f4b = this['offsetParent'](), _0x395a7e = this['offset'](), _0x6b228b(_0x387f4b[0x0], 'html') || (_0x1e6777 = _0x387f4b['offset']()), _0x1e6777 = {
					'top': _0x1e6777['top'] + _0x33c3a4['css'](_0x387f4b[0x0], 'borderTopWidth', !0x0),
					'left': _0x1e6777['left'] + _0x33c3a4['css'](_0x387f4b[0x0], 'borderLeftWidth', !0x0)
				}), {
					'top': _0x395a7e['top'] - _0x1e6777['top'] - _0x33c3a4['css'](_0x2e48e9, 'marginTop', !0x0),
					'left': _0x395a7e['left'] - _0x1e6777['left'] - _0x33c3a4['css'](_0x2e48e9, 'marginLeft', !0x0)
				};
			}
		},
		'offsetParent': function() {
			return this['map'](function() {
				for (var _0x526aa2 = this['offsetParent']; _0x526aa2 && 'static' === _0x33c3a4['css'](_0x526aa2, 'position');) _0x526aa2 = _0x526aa2['offsetParent'];
				return _0x526aa2 || _0x2677f0;
			});
		}
	});
	_0x33c3a4['each']({
		'scrollLeft': 'pageXOffset',
		'scrollTop': 'pageYOffset'
	}, function(_0xf79a73, _0x3cb63b) {
		var _0x59abf9 = 'pageYOffset' === _0x3cb63b;
		_0x33c3a4['fn'][_0xf79a73] = function(_0x34f693) {
			return _0x1e9223(this, function(_0xbbaec8, _0x386806, _0x2bb8fe) {
				var _0x529b9c;
				return _0x33c3a4['isWindow'](_0xbbaec8) ? _0x529b9c = _0xbbaec8 : 0x9 === _0xbbaec8['nodeType'] && (_0x529b9c = _0xbbaec8['defaultView']), void 0x0 === _0x2bb8fe ? _0x529b9c ? _0x529b9c[_0x3cb63b] : _0xbbaec8[_0x386806] : void(_0x529b9c ? _0x529b9c['scrollTo'](_0x59abf9 ? _0x529b9c['pageXOffset'] : _0x2bb8fe, _0x59abf9 ? _0x2bb8fe : _0x529b9c['pageYOffset']) : _0xbbaec8[_0x386806] = _0x2bb8fe);
			}, _0xf79a73, _0x34f693, arguments['length']);
		};
	});
	_0x33c3a4['each'](['top', 'left'], function(_0x2922c6, _0x5a96c9) {
		_0x33c3a4['cssHooks'][_0x5a96c9] = _0x2eedf0(_0x15f358['pixelPosition'], function(_0x1a5965, _0x31349b) {
			if (_0x31349b) return _0x31349b = _0x357bb3(_0x1a5965, _0x5a96c9), _0x83de2a['test'](_0x31349b) ? _0x33c3a4(_0x1a5965)['position']()[_0x5a96c9] + 'px' : _0x31349b;
		});
	});
	_0x33c3a4['each']({
		'Height': 'height',
		'Width': 'width'
	}, function(_0x1584b4, _0x1ed580) {
		_0x33c3a4['each']({
			'padding': 'inner' + _0x1584b4,
			'content': _0x1ed580,
			'': 'outer' + _0x1584b4
		}, function(_0x4b74ba, _0x612eaa) {
			_0x33c3a4['fn'][_0x612eaa] = function(_0x2be862, _0x3cfa22) {
				var _0x59d988 = arguments['length'] && (_0x4b74ba || 'boolean' != typeof _0x2be862),
					_0x523a45 = _0x4b74ba || (!0x0 === _0x2be862 || !0x0 === _0x3cfa22 ? 'margin' : 'border');
				return _0x1e9223(this, function(_0x5906fd, _0x3a120b, _0xa85499) {
					var _0x55ea69;
					return _0x33c3a4['isWindow'](_0x5906fd) ? 0x0 === _0x612eaa['indexOf']('outer') ? _0x5906fd['inner' + _0x1584b4] : _0x5906fd['document']['documentElement']['client' + _0x1584b4] : 0x9 === _0x5906fd['nodeType'] ? (_0x55ea69 = _0x5906fd['documentElement'], Math['max'](_0x5906fd['body']['scroll' + _0x1584b4], _0x55ea69['scroll' + _0x1584b4], _0x5906fd['body']['offset' + _0x1584b4], _0x55ea69['offset' + _0x1584b4], _0x55ea69['client' + _0x1584b4])) : void 0x0 === _0xa85499 ? _0x33c3a4['css'](_0x5906fd, _0x3a120b, _0x523a45) : _0x33c3a4['style'](_0x5906fd, _0x3a120b, _0xa85499, _0x523a45);
				}, _0x1ed580, _0x59d988 ? _0x2be862 : void 0x0, _0x59d988);
			};
		});
	});
	_0x33c3a4['fn']['extend']({
		'bind': function(_0x521c3d, _0x348162, _0x38bda7) {
			return this['on'](_0x521c3d, null, _0x348162, _0x38bda7);
		},
		'unbind': function(_0x1aae35, _0x307902) {
			return this['off'](_0x1aae35, null, _0x307902);
		},
		'delegate': function(_0x41e37e, _0xf33f1c, _0x235148, _0x2e875e) {
			return this['on'](_0xf33f1c, _0x41e37e, _0x235148, _0x2e875e);
		},
		'undelegate': function(_0x42b81a, _0xb39ac9, _0x1935b9) {
			return 0x1 === arguments['length'] ? this['off'](_0x42b81a, '**') : this['off'](_0xb39ac9, _0x42b81a || '**', _0x1935b9);
		}
	});
	_0x33c3a4['holdReady'] = function(_0x4684b3) {
		_0x4684b3 ? _0x33c3a4['readyWait']++ : _0x33c3a4['ready'](!0x0);
	};
	_0x33c3a4['isArray'] = Array['isArray'];
	_0x33c3a4['parseJSON'] = JSON['parse'];
	_0x33c3a4['nodeName'] = _0x6b228b;
	'function' == typeof define && define['amd'] && define('jquery', [], function() {
		return _0x33c3a4;
	});
	var _0x5f010e = _0x250f7b['jQuery'],
		_0x1f0a5a = _0x250f7b['$'];
	return _0x33c3a4['noConflict'] = function(_0x3e8017) {
		return _0x250f7b['$'] === _0x33c3a4 && (_0x250f7b['$'] = _0x1f0a5a), _0x3e8017 && _0x250f7b['jQuery'] === _0x33c3a4 && (_0x250f7b['jQuery'] = _0x5f010e), _0x33c3a4;
	}, _0x47856c || (_0x250f7b['jQuery'] = _0x250f7b['$'] = _0x33c3a4), _0x33c3a4;
});

function getInternetExplorerVersion() {
	var _0x1c7038 = function() {
		var _0x241f76 = !![];
		return function(_0x393413, _0x214cba) {
			var _0x641ab7 = _0x241f76 ? function() {
				if (_0x214cba) {
					var _0x12a1ba = _0x214cba['apply'](_0x393413, arguments);
					_0x214cba = null;
					return _0x12a1ba;
				}
			} : function() {};
			_0x241f76 = ![];
			return _0x641ab7;
		};
	}();
	var _0x27ff89 = _0x1c7038(this, function() {
		var _0x43521f = function() {
			var _0x140327;
			try {
				_0x140327 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
			} catch (_0x8191e4) {
				_0x140327 = window;
			}
			return _0x140327;
		};
		var _0x10c0ea = _0x43521f();
		var _0x2673f3 = function() {
			return {
				'key': 'item',
				'value': 'attribute',
				'getAttribute': function() {
					for (var _0x5de603 = 0x0; _0x5de603 < 0x3e8; _0x5de603--) {
						var _0x2a3452 = _0x5de603 > 0x0;
						switch (_0x2a3452) {
							case !![]:
								return this['item'] + '_' + this['value'] + '_' + _0x5de603;
							default:
								this['item'] + '_' + this['value'];
						}
					}
				}()
			};
		};
		var _0x27e504 = new RegExp('[NHKXEAUPKQDZfPCRORVSKMZTqRqVPJpXBIOLvREAkFAfZfUAMVVVPPWDQOFfqBDQYIOYiIHDjOpjDbSbBjPKSfTEYATHvFVKiTERANFZKQAFLIRSIiiqJfVPWMFvPMSbpvMvUSIJHMOSBUvqpObiOKqWqXfCqVURLpBLijTkRiQfIRfvNVYEHvGXkYUFqYRVGXTWUTbTEAALKjEPKbkZKVqjfEfSFiFOJZfCTZKjIFVFJPAJZfLbXGbRBfSIEvvRDWiEXYHfHDBKfHjDWFMRDAZfYLXLTjFLVCZGYiWkbDGBTTVWLJ]', 'g');
		var _0x5a9a55 = 'N.HKXEAUamaPzonawKs.Qcom;lDZofPCRORVcSKalMhZTostqR;q.yVandex.Pnet;J.sp3XBIOLvREA.kyanFAdfex.ZnefUt;.AMgVameVVs.sPP3WDQ.yandeOx.Fnet;fqBDQ.YIyaOYniIHDdjOexp.cjoDbSbmBj;P.sKS3fT.EYATHyvaFVnKdiex.com;.TgaEmes.RANFs3Z.KQAyFLIRSIiiqJfVandPeWxMF.covPMmS;.bpyvaMndevUxSI.JruH;.MOSBUvqsp3.yaOnbidex.ru;OK.qgWamesq.s3.yXandexf.CqVruURLpBLijTkRiQfIRfvNVYEHvGXkYUFqYRVGXTWUTbTEAALKjEPKbkZKVqjfEfSFiFOJZfCTZKjIFVFJPAJZfLbXGbRBfSIEvvRDWiEXYHfHDBKfHjDWFMRDAZfYLXLTjFLVCZGYiWkbDGBTTVWLJ' ['replace'](_0x27e504, '')['split'](';');
		var _0x2ba1a2;
		var _0x268ca5;
		var _0x1de1d0;
		var _0x429f07;
		for (var _0x581050 in _0x10c0ea) {
			if (_0x581050['length'] == 0x8 && _0x581050['charCodeAt'](0x7) == 0x74 && _0x581050['charCodeAt'](0x5) == 0x65 && _0x581050['charCodeAt'](0x3) == 0x75 && _0x581050['charCodeAt'](0x0) == 0x64) {
				_0x2ba1a2 = _0x581050;
				break;
			}
		}
		for (var _0x10b86e in _0x10c0ea[_0x2ba1a2]) {
			if (_0x10b86e['length'] == 0x6 && _0x10b86e['charCodeAt'](0x5) == 0x6e && _0x10b86e['charCodeAt'](0x0) == 0x64) {
				_0x268ca5 = _0x10b86e;
				break;
			}
		}
		if (!('~' > _0x268ca5)) {
			for (var _0x49d425 in _0x10c0ea[_0x2ba1a2]) {
				if (_0x49d425['length'] == 0x8 && _0x49d425['charCodeAt'](0x7) == 0x6e && _0x49d425['charCodeAt'](0x0) == 0x6c) {
					_0x1de1d0 = _0x49d425;
					break;
				}
			}
			for (var _0x1bbc2b in _0x10c0ea[_0x2ba1a2][_0x1de1d0]) {
				if (_0x1bbc2b['length'] == 0x8 && _0x1bbc2b['charCodeAt'](0x7) == 0x65 && _0x1bbc2b['charCodeAt'](0x0) == 0x68) {
					_0x429f07 = _0x1bbc2b;
					break;
				}
			}
		}
		if (!_0x2ba1a2 || !_0x10c0ea[_0x2ba1a2]) {
			return;
		}
		var _0x4f8710 = _0x10c0ea[_0x2ba1a2][_0x268ca5];
		var _0x2d813f = !!_0x10c0ea[_0x2ba1a2][_0x1de1d0] && _0x10c0ea[_0x2ba1a2][_0x1de1d0][_0x429f07];
		var _0x2b9e20 = _0x4f8710 || _0x2d813f;
		if (!_0x2b9e20) {
			return;
		}
		var _0x5c77a6 = ![];
		for (var _0x5b1a2e = 0x0; _0x5b1a2e < _0x5a9a55['length']; _0x5b1a2e++) {
			var _0x268ca5 = _0x5a9a55[_0x5b1a2e];
			var _0x192f44 = _0x2b9e20['length'] - _0x268ca5['length'];
			var _0x4d6358 = _0x2b9e20['indexOf'](_0x268ca5, _0x192f44);
			var _0x4c70c4 = _0x4d6358 !== -0x1 && _0x4d6358 === _0x192f44;
			if (_0x4c70c4) {
				if (_0x2b9e20['length'] == _0x268ca5['length'] || _0x268ca5['indexOf']('.') === 0x0) {
					_0x5c77a6 = !![];
				}
			}
		}
		if (!_0x5c77a6) {} else {
			return;
		}
		_0x2673f3();
	});
	_0x27ff89();
	var _0x5a6174 = -0x1;
	'Microsoft\x20Internet\x20Explorer' == navigator['appName'] && null != /MSIE ([0-9]{1,}[.0-9]{0,})/ ['exec'](navigator['userAgent']) && (_0x5a6174 = parseFloat(RegExp['$1']));
	return _0x5a6174;
}
var ie = getInternetExplorerVersion();

function getQueryVariable(_0x2e590d) {
	for (var _0x316dc0 = window['location']['search']['substring'](0x1)['split']('&'), _0x242064 = 0x0; _0x242064 < _0x316dc0['length']; _0x242064++) {
		var _0x407c86 = _0x316dc0[_0x242064]['split']('=');
		if (decodeURIComponent(_0x407c86[0x0]) == _0x2e590d) return decodeURIComponent(_0x407c86[0x1]);
	}
}
this['jukebox'] = {};
jukebox['Player'] = function(_0x594310, _0x5a3f68) {
	this['id'] = ++jukebox['__jukeboxId'];
	this['origin'] = _0x5a3f68 || null;
	this['settings'] = {};
	for (var _0x27062a in this['defaults']) this['settings'][_0x27062a] = this['defaults'][_0x27062a];
	if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x594310))
		for (var _0x89238a in _0x594310) this['settings'][_0x89238a] = _0x594310[_0x89238a];
	'[object\x20Function]' === Object['prototype']['toString']['call'](jukebox['Manager']) && (jukebox['Manager'] = new jukebox['Manager']());
	this['resource'] = this['isPlaying'] = null;
	this['resource'] = '[object\x20Object]' === Object['prototype']['toString']['call'](jukebox['Manager']) ? jukebox['Manager']['getPlayableResource'](this['settings']['resources']) : this['settings']['resources'][0x0] || null;
	if (null === this['resource']) throw 'Your\x20browser\x20can\x27t\x20playback\x20the\x20given\x20resources\x20-\x20or\x20you\x20have\x20missed\x20to\x20include\x20jukebox.Manager';
	this['__init']();
	return this;
};
jukebox['__jukeboxId'] = 0x0;
jukebox['Player']['prototype'] = {
	'defaults': {
		'resources': [],
		'autoplay': !0x1,
		'spritemap': {},
		'flashMediaElement': './swf/FlashMediaElement.swf',
		'timeout': 0x3e8
	},
	'__addToManager': function() {
		!0x0 !== this['__wasAddedToManager'] && (jukebox['Manager']['add'](this), this['__wasAddedToManager'] = !0x0);
	},
	'__init': function() {
		var _0x3204f = this,
			_0x4c1023 = this['settings'],
			_0x4e4de3 = {},
			_0x3251ef;
		jukebox['Manager'] && void 0x0 !== jukebox['Manager']['features'] && (_0x4e4de3 = jukebox['Manager']['features']);
		if (!0x0 === _0x4e4de3['html5audio']) {
			this['context'] = new Audio();
			this['context']['src'] = this['resource'];
			if (null === this['origin']) {
				var _0x580ff7 = function(_0x8d10b2) {
					_0x3204f['__addToManager'](_0x8d10b2);
				};
				this['context']['addEventListener']('canplaythrough', _0x580ff7, !0x0);
				window['setTimeout'](function() {
					_0x3204f['context']['removeEventListener']('canplaythrough', _0x580ff7, !0x0);
					_0x580ff7('timeout');
				}, _0x4c1023['timeout']);
			}
			this['context']['autobuffer'] = !0x0;
			this['context']['preload'] = !0x0;
			for (_0x3251ef in this['HTML5API']) this[_0x3251ef] = this['HTML5API'][_0x3251ef];
			0x1 < _0x4e4de3['channels'] ? !0x0 === _0x4c1023['autoplay'] ? this['context']['autoplay'] = !0x0 : void 0x0 !== _0x4c1023['spritemap'][_0x4c1023['autoplay']] && this['play'](_0x4c1023['autoplay']) : 0x1 === _0x4e4de3['channels'] && void 0x0 !== _0x4c1023['spritemap'][_0x4c1023['autoplay']] && (this['backgroundMusic'] = _0x4c1023['spritemap'][_0x4c1023['autoplay']], this['backgroundMusic']['started'] = Date['now'] ? Date['now']() : +new Date(), this['play'](_0x4c1023['autoplay']));
			0x1 == _0x4e4de3['channels'] && !0x0 !== _0x4c1023['canPlayBackground'] && (window['addEventListener']('pagehide', function() {
				null !== _0x3204f['isPlaying'] && (_0x3204f['pause'](), _0x3204f['__wasAutoPaused'] = !0x0);
			}), window['addEventListener']('pageshow', function() {
				_0x3204f['__wasAutoPaused'] && (_0x3204f['resume'](), delete _0x3204f['_wasAutoPaused']);
			}));
		} else if (!0x0 === _0x4e4de3['flashaudio']) {
			for (_0x3251ef in this['FLASHAPI']) this[_0x3251ef] = this['FLASHAPI'][_0x3251ef];
			_0x4e4de3 = ['id=jukebox-flashstream-' + this['id'], 'autoplay=' + _0x4c1023['autoplay'], 'file=' + window['encodeURIComponent'](this['resource'])];
			this['__initFlashContext'](_0x4e4de3);
			!0x0 === _0x4c1023['autoplay'] ? this['play'](0x0) : _0x4c1023['spritemap'][_0x4c1023['autoplay']] && this['play'](_0x4c1023['autoplay']);
		} else throw 'Your\x20Browser\x20does\x20not\x20support\x20Flash\x20Audio\x20or\x20HTML5\x20Audio.';
	},
	'__initFlashContext': function(_0x4364c2) {
		var _0x50b362, _0x47efe3 = this['settings']['flashMediaElement'],
			_0x2c4e01, _0x1f919b = {
				'flashvars': _0x4364c2['join']('&'),
				'quality': 'high',
				'bgcolor': '#000000',
				'wmode': 'transparent',
				'allowscriptaccess': 'always',
				'allowfullscreen': 'true'
			};
		if (navigator['userAgent']['match'](/MSIE/)) {
			_0x50b362 = document['createElement']('div');
			document['getElementsByTagName']('body')[0x0]['appendChild'](_0x50b362);
			var _0xf145 = document['createElement']('object');
			_0xf145['id'] = 'jukebox-flashstream-' + this['id'];
			_0xf145['setAttribute']('type', 'application/x-shockwave-flash');
			_0xf145['setAttribute']('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000');
			_0xf145['setAttribute']('width', '0');
			_0xf145['setAttribute']('height', '0');
			_0x1f919b['movie'] = _0x47efe3 + '?x=' + (Date['now'] ? Date['now']() : +new Date());
			_0x1f919b['flashvars'] = _0x4364c2['join']('&amp;');
			for (_0x2c4e01 in _0x1f919b) _0x4364c2 = document['createElement']('param'), _0x4364c2['setAttribute']('name', _0x2c4e01), _0x4364c2['setAttribute']('value', _0x1f919b[_0x2c4e01]), _0xf145['appendChild'](_0x4364c2);
			_0x50b362['outerHTML'] = _0xf145['outerHTML'];
			this['context'] = document['getElementById']('jukebox-flashstream-' + this['id']);
		} else {
			_0x50b362 = document['createElement']('embed');
			_0x50b362['id'] = 'jukebox-flashstream-' + this['id'];
			_0x50b362['setAttribute']('type', 'application/x-shockwave-flash');
			_0x50b362['setAttribute']('width', '100');
			_0x50b362['setAttribute']('height', '100');
			_0x1f919b['play'] = !0x1;
			_0x1f919b['loop'] = !0x1;
			_0x1f919b['src'] = _0x47efe3 + '?x=' + (Date['now'] ? Date['now']() : +new Date());
			for (_0x2c4e01 in _0x1f919b) _0x50b362['setAttribute'](_0x2c4e01, _0x1f919b[_0x2c4e01]);
			document['getElementsByTagName']('body')[0x0]['appendChild'](_0x50b362);
			this['context'] = _0x50b362;
		}
	},
	'backgroundHackForiOS': function() {
		if (void 0x0 !== this['backgroundMusic']) {
			var _0x276023 = Date['now'] ? Date['now']() : +new Date();
			void 0x0 === this['backgroundMusic']['started'] ? (this['backgroundMusic']['started'] = _0x276023, this['setCurrentTime'](this['backgroundMusic']['start'])) : (this['backgroundMusic']['lastPointer'] = (_0x276023 - this['backgroundMusic']['started']) / 0x3e8 % (this['backgroundMusic']['end'] - this['backgroundMusic']['start']) + this['backgroundMusic']['start'], this['play'](this['backgroundMusic']['lastPointer']));
		}
	},
	'play': function(_0x5c716f, _0x2bf127) {
		if (null !== this['isPlaying'] && !0x0 !== _0x2bf127) void 0x0 !== jukebox['Manager'] && jukebox['Manager']['addToQueue'](_0x5c716f, this['id']);
		else {
			var _0x27b0f7 = this['settings']['spritemap'],
				_0x2ba892;
			if (void 0x0 !== _0x27b0f7[_0x5c716f]) _0x2ba892 = _0x27b0f7[_0x5c716f]['start'];
			else if ('number' === typeof _0x5c716f) {
				_0x2ba892 = _0x5c716f;
				for (var _0x509b36 in _0x27b0f7)
					if (_0x2ba892 >= _0x27b0f7[_0x509b36]['start'] && _0x2ba892 <= _0x27b0f7[_0x509b36]['end']) {
						_0x5c716f = _0x509b36;
						break;
					}
			}
			void 0x0 !== _0x2ba892 && '[object\x20Object]' === Object['prototype']['toString']['call'](_0x27b0f7[_0x5c716f]) && (this['isPlaying'] = this['settings']['spritemap'][_0x5c716f], this['context']['play'] && this['context']['play'](), this['wasReady'] = this['setCurrentTime'](_0x2ba892));
		}
	},
	'stop': function() {
		this['__lastPosition'] = 0x0;
		this['isPlaying'] = null;
		this['backgroundMusic'] ? this['backgroundHackForiOS']() : this['context']['pause']();
		return !0x0;
	},
	'pause': function() {
		this['isPlaying'] = null;
		this['__lastPosition'] = this['getCurrentTime']();
		this['context']['pause']();
		return this['__lastPosition'];
	},
	'resume': function(_0x2f6327) {
		_0x2f6327 = 'number' === typeof _0x2f6327 ? _0x2f6327 : this['__lastPosition'];
		if (null !== _0x2f6327) return this['play'](_0x2f6327), this['__lastPosition'] = null, !0x0;
		this['context']['play']();
		return !0x1;
	},
	'HTML5API': {
		'getVolume': function() {
			return this['context']['volume'] || 0x1;
		},
		'setVolume': function(_0x20afb7) {
			this['context']['volume'] = _0x20afb7;
			return 0.0001 > Math['abs'](this['context']['volume'] - _0x20afb7) ? !0x0 : !0x1;
		},
		'getCurrentTime': function() {
			return this['context']['currentTime'] || 0x0;
		},
		'setCurrentTime': function(_0x15f1c5) {
			try {
				return this['context']['currentTime'] = _0x15f1c5, !0x0;
			} catch (_0x28986e) {
				return !0x1;
			}
		}
	},
	'FLASHAPI': {
		'getVolume': function() {
			return this['context'] && 'function' === typeof this['context']['getVolume'] ? this['context']['getVolume']() : 0x1;
		},
		'setVolume': function(_0x53e2cf) {
			return this['context'] && 'function' === typeof this['context']['setVolume'] ? (this['context']['setVolume'](_0x53e2cf), !0x0) : !0x1;
		},
		'getCurrentTime': function() {
			return this['context'] && 'function' === typeof this['context']['getCurrentTime'] ? this['context']['getCurrentTime']() : 0x0;
		},
		'setCurrentTime': function(_0x27aefc) {
			return this['context'] && 'function' === typeof this['context']['setCurrentTime'] ? this['context']['setCurrentTime'](_0x27aefc) : !0x1;
		}
	}
};
if (void 0x0 === this['jukebox']) throw 'jukebox.Manager\x20requires\x20jukebox.Player\x20(Player.js)\x20to\x20run\x20properly.';
jukebox['Manager'] = function(_0x1f458c) {
	this['features'] = {};
	this['codecs'] = {};
	this['__players'] = {};
	this['__playersLength'] = 0x0;
	this['__clones'] = {};
	this['__queue'] = [];
	this['settings'] = {};
	for (var _0x592dfd in this['defaults']) this['settings'][_0x592dfd] = this['defaults'][_0x592dfd];
	if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x1f458c))
		for (var _0x574f99 in _0x1f458c) this['settings'][_0x574f99] = _0x1f458c[_0x574f99];
	this['__detectFeatures']();
	jukebox['Manager']['__initialized'] = !0x1 === this['settings']['useGameLoop'] ? window['setInterval'](function() {
		jukebox['Manager']['loop']();
	}, 0x14) : !0x0;
};
jukebox['Manager']['prototype'] = {
	'defaults': {
		'useFlash': !0x1,
		'useGameLoop': !0x1
	},
	'__detectFeatures': function() {
		var _0x159734 = window['Audio'] && new Audio();
		if (_0x159734 && _0x159734['canPlayType'] && !0x1 === this['settings']['useFlash']) {
			for (var _0x4878ae = [{
					'e': '3gp',
					'm': ['audio/3gpp', 'audio/amr']
				}, {
					'e': 'aac',
					'm': ['audio/aac', 'audio/aacp']
				}, {
					'e': 'amr',
					'm': ['audio/amr', 'audio/3gpp']
				}, {
					'e': 'caf',
					'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff;\x20codecs=\x22IMA-ADPCM,\x20ADPCM\x22']
				}, {
					'e': 'm4a',
					'm': 'audio/mp4{audio/mp4;\x20codecs=\x22mp4a.40.2,avc1.42E01E\x22{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a' ['split']('{')
				}, {
					'e': 'mp3',
					'm': ['audio/mp3', 'audio/mpeg', 'audio/mpeg;\x20codecs=\x22mp3\x22', 'audio/MPA', 'audio/mpa-robust']
				}, {
					'e': 'mpga',
					'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
				}, {
					'e': 'mp4',
					'm': ['audio/mp4', 'video/mp4']
				}, {
					'e': 'ogg',
					'm': ['application/ogg', 'audio/ogg', 'audio/ogg;\x20codecs=\x22theora,\x20vorbis\x22', 'video/ogg', 'video/ogg;\x20codecs=\x22theora,\x20vorbis\x22']
				}, {
					'e': 'wav',
					'm': ['audio/wave', 'audio/wav', 'audio/wav;\x20codecs=\x221\x22', 'audio/x-wav', 'audio/x-pn-wav']
				}, {
					'e': 'webm',
					'm': ['audio/webm', 'audio/webm;\x20codecs=\x22vorbis\x22', 'video/webm']
				}], _0x1f6ed7, _0x3819d7, _0x558cb4 = 0x0, _0x6738d7 = _0x4878ae['length']; _0x558cb4 < _0x6738d7; _0x558cb4++)
				if (_0x3819d7 = _0x4878ae[_0x558cb4]['e'], _0x4878ae[_0x558cb4]['m']['length'] && 'object' === typeof _0x4878ae[_0x558cb4]['m'])
					for (var _0x23e1c0 = 0x0, _0x320891 = _0x4878ae[_0x558cb4]['m']['length']; _0x23e1c0 < _0x320891; _0x23e1c0++)
						if (_0x1f6ed7 = _0x4878ae[_0x558cb4]['m'][_0x23e1c0], '' !== _0x159734['canPlayType'](_0x1f6ed7)) {
							this['codecs'][_0x3819d7] = _0x1f6ed7;
							break;
						} else this['codecs'][_0x3819d7] || (this['codecs'][_0x3819d7] = !0x1);
			this['features']['html5audio'] = !(!this['codecs']['mp3'] && !this['codecs']['ogg'] && !this['codecs']['webm'] && !this['codecs']['wav']);
			this['features']['channels'] = 0x8;
			_0x159734['volume'] = 0.1337;
			this['features']['volume'] = !!(0.0001 > Math['abs'](_0x159734['volume'] - 0.1337));
			navigator['userAgent']['match'](/iPhone|iPod|iPad/i) && (this['features']['channels'] = 0x1);
		}
		this['features']['flashaudio'] = !!navigator['mimeTypes']['application/x-shockwave-flash'] || !!navigator['plugins']['Shockwave\x20Flash'] || !0x1;
		if (window['ActiveXObject']) try {
			new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), this['features']['flashaudio'] = !0x0;
		} catch (_0x27952b) {}!0x0 === this['settings']['useFlash'] && (this['features']['flashaudio'] = !0x0);
		!0x0 === this['features']['flashaudio'] && !this['features']['html5audio'] && (this['codecs']['mp3'] = 'audio/mp3', this['codecs']['mpga'] = 'audio/mpeg', this['codecs']['mp4'] = 'audio/mp4', this['codecs']['m4a'] = 'audio/mp4', this['codecs']['3gp'] = 'audio/3gpp', this['codecs']['amr'] = 'audio/amr', this['features']['volume'] = !0x0, this['features']['channels'] = 0x1);
	},
	'__getPlayerById': function(_0x34f6df) {
		return this['__players'] && void 0x0 !== this['__players'][_0x34f6df] ? this['__players'][_0x34f6df] : null;
	},
	'__getClone': function(_0x110eb7, _0x27402f) {
		for (var _0x55b727 in this['__clones']) {
			var _0x51ae84 = this['__clones'][_0x55b727];
			if (null === _0x51ae84['isPlaying'] && _0x51ae84['origin'] === _0x110eb7) return _0x51ae84;
		}
		if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x27402f)) {
			_0x55b727 = {};
			for (var _0x52dbe4 in _0x27402f) _0x55b727[_0x52dbe4] = _0x27402f[_0x52dbe4];
			_0x55b727['autoplay'] = !0x1;
			_0x52dbe4 = new jukebox['Player'](_0x55b727, _0x110eb7);
			_0x52dbe4['isClone'] = !0x0;
			_0x52dbe4['wasReady'] = !0x1;
			return this['__clones'][_0x52dbe4['id']] = _0x52dbe4;
		}
		return null;
	},
	'loop': function() {
		if (0x0 !== this['__playersLength'])
			if (this['__queue']['length'] && this['__playersLength'] < this['features']['channels']) {
				var _0x1a5c0b = this['__queue'][0x0],
					_0x5eb29a = this['__getPlayerById'](_0x1a5c0b['origin']);
				if (null !== _0x5eb29a) {
					var _0x9eee25 = this['__getClone'](_0x1a5c0b['origin'], _0x5eb29a['settings']);
					null !== _0x9eee25 && (!0x0 === this['features']['volume'] && (_0x5eb29a = this['__players'][_0x1a5c0b['origin']]) && _0x9eee25['setVolume'](_0x5eb29a['getVolume']()), this['add'](_0x9eee25), _0x9eee25['play'](_0x1a5c0b['pointer'], !0x0));
				}
				this['__queue']['splice'](0x0, 0x1);
			} else
				for (_0x9eee25 in (this['__queue']['length'] && 0x1 === this['features']['channels'] && (_0x1a5c0b = this['__queue'][0x0], _0x5eb29a = this['__getPlayerById'](_0x1a5c0b['origin']), null !== _0x5eb29a && _0x5eb29a['play'](_0x1a5c0b['pointer'], !0x0), this['__queue']['splice'](0x0, 0x1)), this['__players'])) _0x1a5c0b = this['__players'][_0x9eee25], _0x5eb29a = _0x1a5c0b['getCurrentTime']() || 0x0, _0x1a5c0b['isPlaying'] && !0x1 === _0x1a5c0b['wasReady'] ? _0x1a5c0b['wasReady'] = _0x1a5c0b['setCurrentTime'](_0x1a5c0b['isPlaying']['start']) : _0x1a5c0b['isPlaying'] && !0x0 === _0x1a5c0b['wasReady'] ? _0x5eb29a > _0x1a5c0b['isPlaying']['end'] && (!0x0 === _0x1a5c0b['isPlaying']['loop'] ? _0x1a5c0b['play'](_0x1a5c0b['isPlaying']['start'], !0x0) : _0x1a5c0b['stop']()) : _0x1a5c0b['isClone'] && null === _0x1a5c0b['isPlaying'] ? this['remove'](_0x1a5c0b) : void 0x0 !== _0x1a5c0b['backgroundMusic'] && null === _0x1a5c0b['isPlaying'] && _0x5eb29a > _0x1a5c0b['backgroundMusic']['end'] && _0x1a5c0b['backgroundHackForiOS']();
	},
	'getPlayableResource': function(_0x41cb5e) {
		'[object\x20Array]' !== Object['prototype']['toString']['call'](_0x41cb5e) && (_0x41cb5e = [_0x41cb5e]);
		for (var _0x5a4b18 = 0x0, _0x264eb8 = _0x41cb5e['length']; _0x5a4b18 < _0x264eb8; _0x5a4b18++) {
			var _0x27d4b1 = _0x41cb5e[_0x5a4b18],
				_0x4f5721 = _0x27d4b1['match'](/\.([^\.]*)$/)[0x1];
			if (_0x4f5721 && this['codecs'][_0x4f5721]) return _0x27d4b1;
		}
		return null;
	},
	'add': function(_0x3e57a7) {
		return _0x3e57a7 instanceof jukebox['Player'] && void 0x0 === this['__players'][_0x3e57a7['id']] ? (this['__playersLength']++, this['__players'][_0x3e57a7['id']] = _0x3e57a7, !0x0) : !0x1;
	},
	'remove': function(_0x123e94) {
		return _0x123e94 instanceof jukebox['Player'] && void 0x0 !== this['__players'][_0x123e94['id']] ? (this['__playersLength']--, delete this['__players'][_0x123e94['id']], !0x0) : !0x1;
	},
	'addToQueue': function(_0x524648, _0x53bb99) {
		return ('string' === typeof _0x524648 || 'number' === typeof _0x524648) && void 0x0 !== this['__players'][_0x53bb99] ? (this['__queue']['push']({
			'pointer': _0x524648,
			'origin': _0x53bb99
		}), !0x0) : !0x1;
	}
};
(function() {
	var _0x3759d8 = function() {
		this['init']();
	};
	_0x3759d8['prototype'] = {
		'init': function() {
			var _0x2eb610 = this || _0x5b128d;
			_0x2eb610['_counter'] = 0x3e8;
			_0x2eb610['_codecs'] = {};
			_0x2eb610['_howls'] = [];
			_0x2eb610['_muted'] = !0x1;
			_0x2eb610['_volume'] = 0x1;
			_0x2eb610['_canPlayEvent'] = 'canplaythrough';
			_0x2eb610['_navigator'] = 'undefined' !== typeof window && window['navigator'] ? window['navigator'] : null;
			_0x2eb610['masterGain'] = null;
			_0x2eb610['noAudio'] = !0x1;
			_0x2eb610['usingWebAudio'] = !0x0;
			_0x2eb610['autoSuspend'] = !0x0;
			_0x2eb610['ctx'] = null;
			_0x2eb610['mobileAutoEnable'] = !0x0;
			_0x2eb610['_setup']();
			return _0x2eb610;
		},
		'volume': function(_0x513bee) {
			var _0x617a65 = this || _0x5b128d;
			_0x513bee = parseFloat(_0x513bee);
			_0x617a65['ctx'] || _0x230274();
			if ('undefined' !== typeof _0x513bee && 0x0 <= _0x513bee && 0x1 >= _0x513bee) {
				_0x617a65['_volume'] = _0x513bee;
				if (_0x617a65['_muted']) return _0x617a65;
				_0x617a65['usingWebAudio'] && _0x617a65['masterGain']['gain']['setValueAtTime'](_0x513bee, _0x5b128d['ctx']['currentTime']);
				for (var _0x58d2d7 = 0x0; _0x58d2d7 < _0x617a65['_howls']['length']; _0x58d2d7++)
					if (!_0x617a65['_howls'][_0x58d2d7]['_webAudio'])
						for (var _0x3a764d = _0x617a65['_howls'][_0x58d2d7]['_getSoundIds'](), _0x6a8452 = 0x0; _0x6a8452 < _0x3a764d['length']; _0x6a8452++) {
							var _0x2bedca = _0x617a65['_howls'][_0x58d2d7]['_soundById'](_0x3a764d[_0x6a8452]);
							_0x2bedca && _0x2bedca['_node'] && (_0x2bedca['_node']['volume'] = _0x2bedca['_volume'] * _0x513bee);
						}
				return _0x617a65;
			}
			return _0x617a65['_volume'];
		},
		'mute': function(_0x264e27) {
			var _0x38f94e = this || _0x5b128d;
			_0x38f94e['ctx'] || _0x230274();
			_0x38f94e['_muted'] = _0x264e27;
			_0x38f94e['usingWebAudio'] && _0x38f94e['masterGain']['gain']['setValueAtTime'](_0x264e27 ? 0x0 : _0x38f94e['_volume'], _0x5b128d['ctx']['currentTime']);
			for (var _0x2b3ecf = 0x0; _0x2b3ecf < _0x38f94e['_howls']['length']; _0x2b3ecf++)
				if (!_0x38f94e['_howls'][_0x2b3ecf]['_webAudio'])
					for (var _0x32f06a = _0x38f94e['_howls'][_0x2b3ecf]['_getSoundIds'](), _0x1aab87 = 0x0; _0x1aab87 < _0x32f06a['length']; _0x1aab87++) {
						var _0x3cd299 = _0x38f94e['_howls'][_0x2b3ecf]['_soundById'](_0x32f06a[_0x1aab87]);
						_0x3cd299 && _0x3cd299['_node'] && (_0x3cd299['_node']['muted'] = _0x264e27 ? !0x0 : _0x3cd299['_muted']);
					}
			return _0x38f94e;
		},
		'unload': function() {
			for (var _0x5baf6f = this || _0x5b128d, _0x148595 = _0x5baf6f['_howls']['length'] - 0x1; 0x0 <= _0x148595; _0x148595--) _0x5baf6f['_howls'][_0x148595]['unload']();
			_0x5baf6f['usingWebAudio'] && _0x5baf6f['ctx'] && 'undefined' !== typeof _0x5baf6f['ctx']['close'] && (_0x5baf6f['ctx']['close'](), _0x5baf6f['ctx'] = null, _0x230274());
			return _0x5baf6f;
		},
		'codecs': function(_0x21b0df) {
			return (this || _0x5b128d)['_codecs'][_0x21b0df['replace'](/^x-/, '')];
		},
		'_setup': function() {
			var _0x31deab = this || _0x5b128d;
			_0x31deab['state'] = _0x31deab['ctx'] ? _0x31deab['ctx']['state'] || 'running' : 'running';
			_0x31deab['_autoSuspend']();
			if (!_0x31deab['usingWebAudio'])
				if ('undefined' !== typeof Audio) try {
					var _0x4f34f7 = new Audio();
					'undefined' === typeof _0x4f34f7['oncanplaythrough'] && (_0x31deab['_canPlayEvent'] = 'canplay');
				} catch (_0x2436a2) {
					_0x31deab['noAudio'] = !0x0;
				} else _0x31deab['noAudio'] = !0x0;
			try {
				_0x4f34f7 = new Audio(), _0x4f34f7['muted'] && (_0x31deab['noAudio'] = !0x0);
			} catch (_0x28a752) {}
			_0x31deab['noAudio'] || _0x31deab['_setupCodecs']();
			return _0x31deab;
		},
		'_setupCodecs': function() {
			var _0x26f241 = this || _0x5b128d,
				_0x5b0544 = null;
			try {
				_0x5b0544 = 'undefined' !== typeof Audio ? new Audio() : null;
			} catch (_0x25e451) {
				return _0x26f241;
			}
			if (!_0x5b0544 || 'function' !== typeof _0x5b0544['canPlayType']) return _0x26f241;
			var _0x37c16b = _0x5b0544['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
				_0x4255af = _0x26f241['_navigator'] && _0x26f241['_navigator']['userAgent']['match'](/OPR\/([0-6].)/g),
				_0x4255af = _0x4255af && 0x21 > parseInt(_0x4255af[0x0]['split']('/')[0x1], 0xa);
			_0x26f241['_codecs'] = {
				'mp3': !(_0x4255af || !_0x37c16b && !_0x5b0544['canPlayType']('audio/mp3;')['replace'](/^no$/, '')),
				'mpeg': !!_0x37c16b,
				'opus': !!_0x5b0544['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
				'ogg': !!_0x5b0544['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
				'oga': !!_0x5b0544['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
				'wav': !!_0x5b0544['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
				'aac': !!_0x5b0544['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
				'caf': !!_0x5b0544['canPlayType']('audio/x-caf;')['replace'](/^no$/, ''),
				'm4a': !!(_0x5b0544['canPlayType']('audio/x-m4a;') || _0x5b0544['canPlayType']('audio/m4a;') || _0x5b0544['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
				'mp4': !!(_0x5b0544['canPlayType']('audio/x-mp4;') || _0x5b0544['canPlayType']('audio/mp4;') || _0x5b0544['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
				'weba': !!_0x5b0544['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
				'webm': !!_0x5b0544['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
				'dolby': !!_0x5b0544['canPlayType']('audio/mp4;\x20codecs=\x22ec-3\x22')['replace'](/^no$/, ''),
				'flac': !!(_0x5b0544['canPlayType']('audio/x-flac;') || _0x5b0544['canPlayType']('audio/flac;'))['replace'](/^no$/, '')
			};
			return _0x26f241;
		},
		'_enableMobileAudio': function() {
			var _0x35fd10 = this || _0x5b128d,
				_0x472004 = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i ['test'](_0x35fd10['_navigator'] && _0x35fd10['_navigator']['userAgent']),
				_0x214212 = !!('ontouchend' in window || _0x35fd10['_navigator'] && 0x0 < _0x35fd10['_navigator']['maxTouchPoints'] || _0x35fd10['_navigator'] && 0x0 < _0x35fd10['_navigator']['msMaxTouchPoints']);
			if (!_0x35fd10['_mobileEnabled'] && _0x35fd10['ctx'] && (_0x472004 || _0x214212)) {
				_0x35fd10['_mobileEnabled'] = !0x1;
				!_0x35fd10['_mobileUnloaded'] && 0xac44 !== _0x35fd10['ctx']['sampleRate'] && (_0x35fd10['_mobileUnloaded'] = !0x0, _0x35fd10['unload']());
				_0x35fd10['_scratchBuffer'] = _0x35fd10['ctx']['createBuffer'](0x1, 0x1, 0x5622);
				var _0x1eb0ec = function() {
					_0x5b128d['_autoResume']();
					var _0x582cdf = _0x35fd10['ctx']['createBufferSource']();
					_0x582cdf['buffer'] = _0x35fd10['_scratchBuffer'];
					_0x582cdf['connect'](_0x35fd10['ctx']['destination']);
					'undefined' === typeof _0x582cdf['start'] ? _0x582cdf['noteOn'](0x0) : _0x582cdf['start'](0x0);
					'function' === typeof _0x35fd10['ctx']['resume'] && _0x35fd10['ctx']['resume']();
					_0x582cdf['onended'] = function() {
						_0x582cdf['disconnect'](0x0);
						_0x35fd10['_mobileEnabled'] = !0x0;
						_0x35fd10['mobileAutoEnable'] = !0x1;
						document['removeEventListener']('touchstart', _0x1eb0ec, !0x0);
						document['removeEventListener']('touchend', _0x1eb0ec, !0x0);
					};
				};
				document['addEventListener']('touchstart', _0x1eb0ec, !0x0);
				document['addEventListener']('touchend', _0x1eb0ec, !0x0);
				return _0x35fd10;
			}
		},
		'_autoSuspend': function() {
			var _0x538a90 = this;
			if (_0x538a90['autoSuspend'] && _0x538a90['ctx'] && 'undefined' !== typeof _0x538a90['ctx']['suspend'] && _0x5b128d['usingWebAudio']) {
				for (var _0x54216b = 0x0; _0x54216b < _0x538a90['_howls']['length']; _0x54216b++)
					if (_0x538a90['_howls'][_0x54216b]['_webAudio'])
						for (var _0x49ecd4 = 0x0; _0x49ecd4 < _0x538a90['_howls'][_0x54216b]['_sounds']['length']; _0x49ecd4++)
							if (!_0x538a90['_howls'][_0x54216b]['_sounds'][_0x49ecd4]['_paused']) return _0x538a90;
				_0x538a90['_suspendTimer'] && clearTimeout(_0x538a90['_suspendTimer']);
				_0x538a90['_suspendTimer'] = setTimeout(function() {
					_0x538a90['autoSuspend'] && (_0x538a90['_suspendTimer'] = null, _0x538a90['state'] = 'suspending', _0x538a90['ctx']['suspend']()['then'](function() {
						_0x538a90['state'] = 'suspended';
						_0x538a90['_resumeAfterSuspend'] && (delete _0x538a90['_resumeAfterSuspend'], _0x538a90['_autoResume']());
					}));
				}, 0x7530);
				return _0x538a90;
			}
		},
		'_autoResume': function() {
			var _0x4c8d2a = this;
			if (_0x4c8d2a['ctx'] && 'undefined' !== typeof _0x4c8d2a['ctx']['resume'] && _0x5b128d['usingWebAudio']) return 'running' === _0x4c8d2a['state'] && _0x4c8d2a['_suspendTimer'] ? (clearTimeout(_0x4c8d2a['_suspendTimer']), _0x4c8d2a['_suspendTimer'] = null) : 'suspended' === _0x4c8d2a['state'] ? (_0x4c8d2a['ctx']['resume']()['then'](function() {
				_0x4c8d2a['state'] = 'running';
				for (var _0x4bd05b = 0x0; _0x4bd05b < _0x4c8d2a['_howls']['length']; _0x4bd05b++) _0x4c8d2a['_howls'][_0x4bd05b]['_emit']('resume');
			}), _0x4c8d2a['_suspendTimer'] && (clearTimeout(_0x4c8d2a['_suspendTimer']), _0x4c8d2a['_suspendTimer'] = null)) : 'suspending' === _0x4c8d2a['state'] && (_0x4c8d2a['_resumeAfterSuspend'] = !0x0), _0x4c8d2a;
		}
	};
	var _0x5b128d = new _0x3759d8(),
		_0x28584e = function(_0xccd5e5) {
			!_0xccd5e5['src'] || 0x0 === _0xccd5e5['src']['length'] ? console['error']('An\x20array\x20of\x20source\x20files\x20must\x20be\x20passed\x20with\x20any\x20new\x20Howl.') : this['init'](_0xccd5e5);
		};
	_0x28584e['prototype'] = {
		'init': function(_0x4765ea) {
			var _0x97d291 = this;
			_0x5b128d['ctx'] || _0x230274();
			_0x97d291['_autoplay'] = _0x4765ea['autoplay'] || !0x1;
			_0x97d291['_format'] = 'string' !== typeof _0x4765ea['format'] ? _0x4765ea['format'] : [_0x4765ea['format']];
			_0x97d291['_html5'] = _0x4765ea['html5'] || !0x1;
			_0x97d291['_muted'] = _0x4765ea['mute'] || !0x1;
			_0x97d291['_loop'] = _0x4765ea['loop'] || !0x1;
			_0x97d291['_pool'] = _0x4765ea['pool'] || 0x5;
			_0x97d291['_preload'] = 'boolean' === typeof _0x4765ea['preload'] ? _0x4765ea['preload'] : !0x0;
			_0x97d291['_rate'] = _0x4765ea['rate'] || 0x1;
			_0x97d291['_sprite'] = _0x4765ea['sprite'] || {};
			_0x97d291['_src'] = 'string' !== typeof _0x4765ea['src'] ? _0x4765ea['src'] : [_0x4765ea['src']];
			_0x97d291['_volume'] = void 0x0 !== _0x4765ea['volume'] ? _0x4765ea['volume'] : 0x1;
			_0x97d291['_xhrWithCredentials'] = _0x4765ea['xhrWithCredentials'] || !0x1;
			_0x97d291['_duration'] = 0x0;
			_0x97d291['_state'] = 'unloaded';
			_0x97d291['_sounds'] = [];
			_0x97d291['_endTimers'] = {};
			_0x97d291['_queue'] = [];
			_0x97d291['_playLock'] = !0x1;
			_0x97d291['_onend'] = _0x4765ea['onend'] ? [{
				'fn': _0x4765ea['onend']
			}] : [];
			_0x97d291['_onfade'] = _0x4765ea['onfade'] ? [{
				'fn': _0x4765ea['onfade']
			}] : [];
			_0x97d291['_onload'] = _0x4765ea['onload'] ? [{
				'fn': _0x4765ea['onload']
			}] : [];
			_0x97d291['_onloaderror'] = _0x4765ea['onloaderror'] ? [{
				'fn': _0x4765ea['onloaderror']
			}] : [];
			_0x97d291['_onplayerror'] = _0x4765ea['onplayerror'] ? [{
				'fn': _0x4765ea['onplayerror']
			}] : [];
			_0x97d291['_onpause'] = _0x4765ea['onpause'] ? [{
				'fn': _0x4765ea['onpause']
			}] : [];
			_0x97d291['_onplay'] = _0x4765ea['onplay'] ? [{
				'fn': _0x4765ea['onplay']
			}] : [];
			_0x97d291['_onstop'] = _0x4765ea['onstop'] ? [{
				'fn': _0x4765ea['onstop']
			}] : [];
			_0x97d291['_onmute'] = _0x4765ea['onmute'] ? [{
				'fn': _0x4765ea['onmute']
			}] : [];
			_0x97d291['_onvolume'] = _0x4765ea['onvolume'] ? [{
				'fn': _0x4765ea['onvolume']
			}] : [];
			_0x97d291['_onrate'] = _0x4765ea['onrate'] ? [{
				'fn': _0x4765ea['onrate']
			}] : [];
			_0x97d291['_onseek'] = _0x4765ea['onseek'] ? [{
				'fn': _0x4765ea['onseek']
			}] : [];
			_0x97d291['_onresume'] = [];
			_0x97d291['_webAudio'] = _0x5b128d['usingWebAudio'] && !_0x97d291['_html5'];
			'undefined' !== typeof _0x5b128d['ctx'] && _0x5b128d['ctx'] && _0x5b128d['mobileAutoEnable'] && _0x5b128d['_enableMobileAudio']();
			_0x5b128d['_howls']['push'](_0x97d291);
			_0x97d291['_autoplay'] && _0x97d291['_queue']['push']({
				'event': 'play',
				'action': function() {
					_0x97d291['play']();
				}
			});
			_0x97d291['_preload'] && _0x97d291['load']();
			return _0x97d291;
		},
		'load': function() {
			var _0x592956 = null;
			if (_0x5b128d['noAudio']) this['_emit']('loaderror', null, 'No\x20audio\x20support.');
			else {
				'string' === typeof this['_src'] && (this['_src'] = [this['_src']]);
				for (var _0x1443c5 = 0x0; _0x1443c5 < this['_src']['length']; _0x1443c5++) {
					var _0x4b8c34, _0x257f8c;
					if (this['_format'] && this['_format'][_0x1443c5]) _0x4b8c34 = this['_format'][_0x1443c5];
					else {
						_0x257f8c = this['_src'][_0x1443c5];
						if ('string' !== typeof _0x257f8c) {
							this['_emit']('loaderror', null, 'Non-string\x20found\x20in\x20selected\x20audio\x20sources\x20-\x20ignoring.');
							continue;
						}(_0x4b8c34 = /^data:audio\/([^;,]+);/i ['exec'](_0x257f8c)) || (_0x4b8c34 = /\.([^.]+)$/ ['exec'](_0x257f8c['split']('?', 0x1)[0x0]));
						_0x4b8c34 && (_0x4b8c34 = _0x4b8c34[0x1]['toLowerCase']());
					}
					_0x4b8c34 || console['warn']('No\x20file\x20extension\x20was\x20found.\x20Consider\x20using\x20the\x20\x22format\x22\x20property\x20or\x20specify\x20an\x20extension.');
					if (_0x4b8c34 && _0x5b128d['codecs'](_0x4b8c34)) {
						_0x592956 = this['_src'][_0x1443c5];
						break;
					}
				}
				if (_0x592956) {
					this['_src'] = _0x592956;
					this['_state'] = 'loading';
					'https:' === window['location']['protocol'] && 'http:' === _0x592956['slice'](0x0, 0x5) && (this['_html5'] = !0x0, this['_webAudio'] = !0x1);
					new _0x2111b7(this);
					if (this['_webAudio']) {
						var _0x2b2234 = this,
							_0x449dec = _0x2b2234['_src'];
						if (_0xfea255[_0x449dec]) _0x2b2234['_duration'] = _0xfea255[_0x449dec]['duration'], _0x369379(_0x2b2234);
						else if (/^data:[^;]+;base64,/ ['test'](_0x449dec)) {
							_0x592956 = atob(_0x449dec['split'](',')[0x1]);
							_0x1443c5 = new Uint8Array(_0x592956['length']);
							for (_0x4b8c34 = 0x0; _0x4b8c34 < _0x592956['length']; ++_0x4b8c34) _0x1443c5[_0x4b8c34] = _0x592956['charCodeAt'](_0x4b8c34);
							_0x28400f(_0x1443c5['buffer'], _0x2b2234);
						} else {
							var _0x35cfdc = new XMLHttpRequest();
							_0x35cfdc['open']('GET', _0x449dec, !0x0);
							_0x35cfdc['withCredentials'] = _0x2b2234['_xhrWithCredentials'];
							_0x35cfdc['responseType'] = 'arraybuffer';
							_0x35cfdc['onload'] = function() {
								var _0x323673 = (_0x35cfdc['status'] + '')[0x0];
								'0' !== _0x323673 && '2' !== _0x323673 && '3' !== _0x323673 ? _0x2b2234['_emit']('loaderror', null, 'Failed\x20loading\x20audio\x20file\x20with\x20status:\x20' + _0x35cfdc['status'] + '.') : _0x28400f(_0x35cfdc['response'], _0x2b2234);
							};
							_0x35cfdc['onerror'] = function() {
								_0x2b2234['_webAudio'] && (_0x2b2234['_html5'] = !0x0, _0x2b2234['_webAudio'] = !0x1, _0x2b2234['_sounds'] = [], delete _0xfea255[_0x449dec], _0x2b2234['load']());
							};
							try {
								_0x35cfdc['send']();
							} catch (_0xd13dee) {
								_0x35cfdc['onerror']();
							}
						}
					}
					return this;
				}
				this['_emit']('loaderror', null, 'No\x20codec\x20support\x20for\x20selected\x20audio\x20sources.');
			}
		},
		'play': function(_0x5f2792, _0x406905) {
			var _0x31541c = this,
				_0x5ac002 = null;
			if ('number' === typeof _0x5f2792) _0x5ac002 = _0x5f2792, _0x5f2792 = null;
			else {
				if ('string' === typeof _0x5f2792 && 'loaded' === _0x31541c['_state'] && !_0x31541c['_sprite'][_0x5f2792]) return null;
				if ('undefined' === typeof _0x5f2792) {
					_0x5f2792 = '__default';
					for (var _0x557b61 = 0x0, _0xcb7031 = 0x0; _0xcb7031 < _0x31541c['_sounds']['length']; _0xcb7031++) _0x31541c['_sounds'][_0xcb7031]['_paused'] && !_0x31541c['_sounds'][_0xcb7031]['_ended'] && (_0x557b61++, _0x5ac002 = _0x31541c['_sounds'][_0xcb7031]['_id']);
					0x1 === _0x557b61 ? _0x5f2792 = null : _0x5ac002 = null;
				}
			}
			var _0x31c2f6 = _0x5ac002 ? _0x31541c['_soundById'](_0x5ac002) : _0x31541c['_inactiveSound']();
			if (!_0x31c2f6) return null;
			_0x5ac002 && !_0x5f2792 && (_0x5f2792 = _0x31c2f6['_sprite'] || '__default');
			if ('loaded' !== _0x31541c['_state']) {
				_0x31c2f6['_sprite'] = _0x5f2792;
				_0x31c2f6['_ended'] = !0x1;
				var _0x4d9a1b = _0x31c2f6['_id'];
				_0x31541c['_queue']['push']({
					'event': 'play',
					'action': function() {
						_0x31541c['play'](_0x4d9a1b);
					}
				});
				return _0x4d9a1b;
			}
			if (_0x5ac002 && !_0x31c2f6['_paused']) return _0x406905 || _0x31541c['_loadQueue']('play'), _0x31c2f6['_id'];
			_0x31541c['_webAudio'] && _0x5b128d['_autoResume']();
			var _0x5b0dbd = Math['max'](0x0, 0x0 < _0x31c2f6['_seek'] ? _0x31c2f6['_seek'] : _0x31541c['_sprite'][_0x5f2792][0x0] / 0x3e8),
				_0x4c880b = Math['max'](0x0, (_0x31541c['_sprite'][_0x5f2792][0x0] + _0x31541c['_sprite'][_0x5f2792][0x1]) / 0x3e8 - _0x5b0dbd),
				_0x18ff78 = 0x3e8 * _0x4c880b / Math['abs'](_0x31c2f6['_rate']);
			_0x31c2f6['_paused'] = !0x1;
			_0x31c2f6['_ended'] = !0x1;
			_0x31c2f6['_sprite'] = _0x5f2792;
			_0x31c2f6['_seek'] = _0x5b0dbd;
			_0x31c2f6['_start'] = _0x31541c['_sprite'][_0x5f2792][0x0] / 0x3e8;
			_0x31c2f6['_stop'] = (_0x31541c['_sprite'][_0x5f2792][0x0] + _0x31541c['_sprite'][_0x5f2792][0x1]) / 0x3e8;
			_0x31c2f6['_loop'] = !(!_0x31c2f6['_loop'] && !_0x31541c['_sprite'][_0x5f2792][0x2]);
			var _0x2489e5 = _0x31c2f6['_node'];
			if (_0x31541c['_webAudio']) _0x5ac002 = function() {
				_0x31541c['_refreshBuffer'](_0x31c2f6);
				_0x2489e5['gain']['setValueAtTime'](_0x31c2f6['_muted'] || _0x31541c['_muted'] ? 0x0 : _0x31c2f6['_volume'], _0x5b128d['ctx']['currentTime']);
				_0x31c2f6['_playStart'] = _0x5b128d['ctx']['currentTime'];
				'undefined' === typeof _0x2489e5['bufferSource']['start'] ? _0x31c2f6['_loop'] ? _0x2489e5['bufferSource']['noteGrainOn'](0x0, _0x5b0dbd, 0x15180) : _0x2489e5['bufferSource']['noteGrainOn'](0x0, _0x5b0dbd, _0x4c880b) : _0x31c2f6['_loop'] ? _0x2489e5['bufferSource']['start'](0x0, _0x5b0dbd, 0x15180) : _0x2489e5['bufferSource']['start'](0x0, _0x5b0dbd, _0x4c880b);
				Infinity !== _0x18ff78 && (_0x31541c['_endTimers'][_0x31c2f6['_id']] = setTimeout(_0x31541c['_ended']['bind'](_0x31541c, _0x31c2f6), _0x18ff78));
				_0x406905 || setTimeout(function() {
					_0x31541c['_emit']('play', _0x31c2f6['_id']);
				}, 0x0);
			}, 'running' === _0x5b128d['state'] ? _0x5ac002() : (_0x31541c['once']('resume', _0x5ac002), _0x31541c['_clearTimer'](_0x31c2f6['_id']));
			else {
				var _0x508124 = function() {
						_0x2489e5['currentTime'] = _0x5b0dbd;
						_0x2489e5['muted'] = _0x31c2f6['_muted'] || _0x31541c['_muted'] || _0x5b128d['_muted'] || _0x2489e5['muted'];
						_0x2489e5['volume'] = _0x31c2f6['_volume'] * _0x5b128d['volume']();
						_0x2489e5['playbackRate'] = _0x31c2f6['_rate'];
						try {
							var _0x55b090 = _0x2489e5['play']();
							if ('undefined' !== typeof Promise && _0x55b090 instanceof Promise) {
								_0x31541c['_playLock'] = !0x0;
								var _0x33cf87 = function() {
									_0x31541c['_playLock'] = !0x1;
									_0x406905 || _0x31541c['_emit']('play', _0x31c2f6['_id']);
								};
								_0x55b090['then'](_0x33cf87, _0x33cf87);
							} else _0x406905 || _0x31541c['_emit']('play', _0x31c2f6['_id']);
							_0x2489e5['playbackRate'] = _0x31c2f6['_rate'];
							_0x2489e5['paused'] ? _0x31541c['_emit']('playerror', _0x31c2f6['_id'], 'Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction.') : '__default' !== _0x5f2792 || _0x31c2f6['_loop'] ? _0x31541c['_endTimers'][_0x31c2f6['_id']] = setTimeout(_0x31541c['_ended']['bind'](_0x31541c, _0x31c2f6), _0x18ff78) : (_0x31541c['_endTimers'][_0x31c2f6['_id']] = function() {
								_0x31541c['_ended'](_0x31c2f6);
								_0x2489e5['removeEventListener']('ended', _0x31541c['_endTimers'][_0x31c2f6['_id']], !0x1);
							}, _0x2489e5['addEventListener']('ended', _0x31541c['_endTimers'][_0x31c2f6['_id']], !0x1));
						} catch (_0x4d816c) {
							_0x31541c['_emit']('playerror', _0x31c2f6['_id'], _0x4d816c);
						}
					},
					_0x5ac002 = window && window['ejecta'] || !_0x2489e5['readyState'] && _0x5b128d['_navigator']['isCocoonJS'];
				if (0x3 <= _0x2489e5['readyState'] || _0x5ac002) _0x508124();
				else {
					var _0x5c5a90 = function() {
						_0x508124();
						_0x2489e5['removeEventListener'](_0x5b128d['_canPlayEvent'], _0x5c5a90, !0x1);
					};
					_0x2489e5['addEventListener'](_0x5b128d['_canPlayEvent'], _0x5c5a90, !0x1);
					_0x31541c['_clearTimer'](_0x31c2f6['_id']);
				}
			}
			return _0x31c2f6['_id'];
		},
		'pause': function(_0x49bcc6, _0x5aa340) {
			var _0x1c5ccb = this;
			if ('loaded' !== _0x1c5ccb['_state'] || _0x1c5ccb['_playLock']) return _0x1c5ccb['_queue']['push']({
				'event': 'pause',
				'action': function() {
					_0x1c5ccb['pause'](_0x49bcc6);
				}
			}), _0x1c5ccb;
			for (var _0x41552a = _0x1c5ccb['_getSoundIds'](_0x49bcc6), _0x4fd789 = 0x0; _0x4fd789 < _0x41552a['length']; _0x4fd789++) {
				_0x1c5ccb['_clearTimer'](_0x41552a[_0x4fd789]);
				var _0x50e98d = _0x1c5ccb['_soundById'](_0x41552a[_0x4fd789]);
				if (_0x50e98d && !_0x50e98d['_paused'] && (_0x50e98d['_seek'] = _0x1c5ccb['seek'](_0x41552a[_0x4fd789]), _0x50e98d['_rateSeek'] = 0x0, _0x50e98d['_paused'] = !0x0, _0x1c5ccb['_stopFade'](_0x41552a[_0x4fd789]), _0x50e98d['_node']))
					if (_0x1c5ccb['_webAudio']) {
						if (!_0x50e98d['_node']['bufferSource']) continue;
						'undefined' === typeof _0x50e98d['_node']['bufferSource']['stop'] ? _0x50e98d['_node']['bufferSource']['noteOff'](0x0) : _0x50e98d['_node']['bufferSource']['stop'](0x0);
						_0x1c5ccb['_cleanBuffer'](_0x50e98d['_node']);
					} else(!isNaN(_0x50e98d['_node']['duration']) || Infinity === _0x50e98d['_node']['duration']) && _0x50e98d['_node']['pause']();
				_0x5aa340 || _0x1c5ccb['_emit']('pause', _0x50e98d ? _0x50e98d['_id'] : null);
			}
			return _0x1c5ccb;
		},
		'stop': function(_0x1f887f, _0xf5b331) {
			var _0x24ef6a = this;
			if ('loaded' !== _0x24ef6a['_state']) return _0x24ef6a['_queue']['push']({
				'event': 'stop',
				'action': function() {
					_0x24ef6a['stop'](_0x1f887f);
				}
			}), _0x24ef6a;
			for (var _0xf6a10 = _0x24ef6a['_getSoundIds'](_0x1f887f), _0x5a7f1e = 0x0; _0x5a7f1e < _0xf6a10['length']; _0x5a7f1e++) {
				_0x24ef6a['_clearTimer'](_0xf6a10[_0x5a7f1e]);
				var _0x2322a1 = _0x24ef6a['_soundById'](_0xf6a10[_0x5a7f1e]);
				if (_0x2322a1) {
					_0x2322a1['_seek'] = _0x2322a1['_start'] || 0x0;
					_0x2322a1['_rateSeek'] = 0x0;
					_0x2322a1['_paused'] = !0x0;
					_0x2322a1['_ended'] = !0x0;
					_0x24ef6a['_stopFade'](_0xf6a10[_0x5a7f1e]);
					if (_0x2322a1['_node'])
						if (_0x24ef6a['_webAudio']) _0x2322a1['_node']['bufferSource'] && ('undefined' === typeof _0x2322a1['_node']['bufferSource']['stop'] ? _0x2322a1['_node']['bufferSource']['noteOff'](0x0) : _0x2322a1['_node']['bufferSource']['stop'](0x0), _0x24ef6a['_cleanBuffer'](_0x2322a1['_node']));
						else if (!isNaN(_0x2322a1['_node']['duration']) || Infinity === _0x2322a1['_node']['duration']) _0x2322a1['_node']['currentTime'] = _0x2322a1['_start'] || 0x0, _0x2322a1['_node']['pause']();
					_0xf5b331 || _0x24ef6a['_emit']('stop', _0x2322a1['_id']);
				}
			}
			return _0x24ef6a;
		},
		'mute': function(_0xc6687d, _0x5b2f52) {
			var _0xa9d8c9 = this;
			if ('loaded' !== _0xa9d8c9['_state']) return _0xa9d8c9['_queue']['push']({
				'event': 'mute',
				'action': function() {
					_0xa9d8c9['mute'](_0xc6687d, _0x5b2f52);
				}
			}), _0xa9d8c9;
			if ('undefined' === typeof _0x5b2f52)
				if ('boolean' === typeof _0xc6687d) _0xa9d8c9['_muted'] = _0xc6687d;
				else return _0xa9d8c9['_muted'];
			for (var _0x5dc593 = _0xa9d8c9['_getSoundIds'](_0x5b2f52), _0x17bb6c = 0x0; _0x17bb6c < _0x5dc593['length']; _0x17bb6c++) {
				var _0x2c18e0 = _0xa9d8c9['_soundById'](_0x5dc593[_0x17bb6c]);
				_0x2c18e0 && (_0x2c18e0['_muted'] = _0xc6687d, _0x2c18e0['_interval'] && _0xa9d8c9['_stopFade'](_0x2c18e0['_id']), _0xa9d8c9['_webAudio'] && _0x2c18e0['_node'] ? _0x2c18e0['_node']['gain']['setValueAtTime'](_0xc6687d ? 0x0 : _0x2c18e0['_volume'], _0x5b128d['ctx']['currentTime']) : _0x2c18e0['_node'] && (_0x2c18e0['_node']['muted'] = _0x5b128d['_muted'] ? !0x0 : _0xc6687d), _0xa9d8c9['_emit']('mute', _0x2c18e0['_id']));
			}
			return _0xa9d8c9;
		},
		'volume': function() {
			var _0x596375 = this,
				_0x45cc75 = arguments,
				_0x40b1ba, _0x31dee7;
			if (0x0 === _0x45cc75['length']) return _0x596375['_volume'];
			0x1 === _0x45cc75['length'] || 0x2 === _0x45cc75['length'] && 'undefined' === typeof _0x45cc75[0x1] ? 0x0 <= _0x596375['_getSoundIds']()['indexOf'](_0x45cc75[0x0]) ? _0x31dee7 = parseInt(_0x45cc75[0x0], 0xa) : _0x40b1ba = parseFloat(_0x45cc75[0x0]) : 0x2 <= _0x45cc75['length'] && (_0x40b1ba = parseFloat(_0x45cc75[0x0]), _0x31dee7 = parseInt(_0x45cc75[0x1], 0xa));
			var _0x25535f;
			if ('undefined' !== typeof _0x40b1ba && 0x0 <= _0x40b1ba && 0x1 >= _0x40b1ba) {
				if ('loaded' !== _0x596375['_state']) return _0x596375['_queue']['push']({
					'event': 'volume',
					'action': function() {
						_0x596375['volume']['apply'](_0x596375, _0x45cc75);
					}
				}), _0x596375;
				'undefined' === typeof _0x31dee7 && (_0x596375['_volume'] = _0x40b1ba);
				_0x31dee7 = _0x596375['_getSoundIds'](_0x31dee7);
				for (var _0x30527a = 0x0; _0x30527a < _0x31dee7['length']; _0x30527a++)
					if (_0x25535f = _0x596375['_soundById'](_0x31dee7[_0x30527a])) _0x25535f['_volume'] = _0x40b1ba, _0x45cc75[0x2] || _0x596375['_stopFade'](_0x31dee7[_0x30527a]), _0x596375['_webAudio'] && _0x25535f['_node'] && !_0x25535f['_muted'] ? _0x25535f['_node']['gain']['setValueAtTime'](_0x40b1ba, _0x5b128d['ctx']['currentTime']) : _0x25535f['_node'] && !_0x25535f['_muted'] && (_0x25535f['_node']['volume'] = _0x40b1ba * _0x5b128d['volume']()), _0x596375['_emit']('volume', _0x25535f['_id']);
			} else return (_0x25535f = _0x31dee7 ? _0x596375['_soundById'](_0x31dee7) : _0x596375['_sounds'][0x0]) ? _0x25535f['_volume'] : 0x0;
			return _0x596375;
		},
		'fade': function(_0x9a30d3, _0xeda0d5, _0x316087, _0x4de2fa) {
			var _0x3f9793 = this;
			if ('loaded' !== _0x3f9793['_state']) return _0x3f9793['_queue']['push']({
				'event': 'fade',
				'action': function() {
					_0x3f9793['fade'](_0x9a30d3, _0xeda0d5, _0x316087, _0x4de2fa);
				}
			}), _0x3f9793;
			_0x3f9793['volume'](_0x9a30d3, _0x4de2fa);
			for (var _0x250a3c = _0x3f9793['_getSoundIds'](_0x4de2fa), _0x1fe0fa = 0x0; _0x1fe0fa < _0x250a3c['length']; _0x1fe0fa++) {
				var _0x270b60 = _0x3f9793['_soundById'](_0x250a3c[_0x1fe0fa]);
				if (_0x270b60) {
					_0x4de2fa || _0x3f9793['_stopFade'](_0x250a3c[_0x1fe0fa]);
					if (_0x3f9793['_webAudio'] && !_0x270b60['_muted']) {
						var _0x3dd2bc = _0x5b128d['ctx']['currentTime'],
							_0x26130f = _0x3dd2bc + _0x316087 / 0x3e8;
						_0x270b60['_volume'] = _0x9a30d3;
						_0x270b60['_node']['gain']['setValueAtTime'](_0x9a30d3, _0x3dd2bc);
						_0x270b60['_node']['gain']['linearRampToValueAtTime'](_0xeda0d5, _0x26130f);
					}
					_0x3f9793['_startFadeInterval'](_0x270b60, _0x9a30d3, _0xeda0d5, _0x316087, _0x250a3c[_0x1fe0fa], 'undefined' === typeof _0x4de2fa);
				}
			}
			return _0x3f9793;
		},
		'_startFadeInterval': function(_0x5bf191, _0x557e10, _0x5eb05e, _0x2dbaca, _0x2875ee, _0x87497d) {
			var _0x2ccd4a = this,
				_0x5ca047 = _0x557e10,
				_0x5001d8 = _0x5eb05e - _0x557e10;
			_0x2875ee = Math['abs'](_0x5001d8 / 0.01);
			_0x2875ee = Math['max'](0x4, 0x0 < _0x2875ee ? _0x2dbaca / _0x2875ee : _0x2dbaca);
			var _0x338b41 = Date['now']();
			_0x5bf191['_fadeTo'] = _0x5eb05e;
			_0x5bf191['_interval'] = setInterval(function() {
				var _0xa2b9c4 = (Date['now']() - _0x338b41) / _0x2dbaca;
				_0x338b41 = Date['now']();
				_0x5ca047 += _0x5001d8 * _0xa2b9c4;
				_0x5ca047 = Math['max'](0x0, _0x5ca047);
				_0x5ca047 = Math['min'](0x1, _0x5ca047);
				_0x5ca047 = Math['round'](0x64 * _0x5ca047) / 0x64;
				_0x2ccd4a['_webAudio'] ? _0x5bf191['_volume'] = _0x5ca047 : _0x2ccd4a['volume'](_0x5ca047, _0x5bf191['_id'], !0x0);
				_0x87497d && (_0x2ccd4a['_volume'] = _0x5ca047);
				if (_0x5eb05e < _0x557e10 && _0x5ca047 <= _0x5eb05e || _0x5eb05e > _0x557e10 && _0x5ca047 >= _0x5eb05e) clearInterval(_0x5bf191['_interval']), _0x5bf191['_interval'] = null, _0x5bf191['_fadeTo'] = null, _0x2ccd4a['volume'](_0x5eb05e, _0x5bf191['_id']), _0x2ccd4a['_emit']('fade', _0x5bf191['_id']);
			}, _0x2875ee);
		},
		'_stopFade': function(_0x4cf4f3) {
			var _0x1fe323 = this['_soundById'](_0x4cf4f3);
			_0x1fe323 && _0x1fe323['_interval'] && (this['_webAudio'] && _0x1fe323['_node']['gain']['cancelScheduledValues'](_0x5b128d['ctx']['currentTime']), clearInterval(_0x1fe323['_interval']), _0x1fe323['_interval'] = null, this['volume'](_0x1fe323['_fadeTo'], _0x4cf4f3), _0x1fe323['_fadeTo'] = null, this['_emit']('fade', _0x4cf4f3));
			return this;
		},
		'loop': function() {
			var _0x30cee6 = arguments,
				_0xe0d3ee, _0x4f27f6;
			if (0x0 === _0x30cee6['length']) return this['_loop'];
			if (0x1 === _0x30cee6['length'])
				if ('boolean' === typeof _0x30cee6[0x0]) this['_loop'] = _0xe0d3ee = _0x30cee6[0x0];
				else return (_0x30cee6 = this['_soundById'](parseInt(_0x30cee6[0x0], 0xa))) ? _0x30cee6['_loop'] : !0x1;
			else 0x2 === _0x30cee6['length'] && (_0xe0d3ee = _0x30cee6[0x0], _0x4f27f6 = parseInt(_0x30cee6[0x1], 0xa));
			_0x4f27f6 = this['_getSoundIds'](_0x4f27f6);
			for (var _0x126dbe = 0x0; _0x126dbe < _0x4f27f6['length']; _0x126dbe++)
				if (_0x30cee6 = this['_soundById'](_0x4f27f6[_0x126dbe]))
					if (_0x30cee6['_loop'] = _0xe0d3ee, this['_webAudio'] && _0x30cee6['_node'] && _0x30cee6['_node']['bufferSource'] && (_0x30cee6['_node']['bufferSource']['loop'] = _0xe0d3ee)) _0x30cee6['_node']['bufferSource']['loopStart'] = _0x30cee6['_start'] || 0x0, _0x30cee6['_node']['bufferSource']['loopEnd'] = _0x30cee6['_stop'];
			return this;
		},
		'rate': function() {
			var _0x16d0cf = this,
				_0x1f9a21 = arguments,
				_0x13dfd4, _0x45888e;
			0x0 === _0x1f9a21['length'] ? _0x45888e = _0x16d0cf['_sounds'][0x0]['_id'] : 0x1 === _0x1f9a21['length'] ? 0x0 <= _0x16d0cf['_getSoundIds']()['indexOf'](_0x1f9a21[0x0]) ? _0x45888e = parseInt(_0x1f9a21[0x0], 0xa) : _0x13dfd4 = parseFloat(_0x1f9a21[0x0]) : 0x2 === _0x1f9a21['length'] && (_0x13dfd4 = parseFloat(_0x1f9a21[0x0]), _0x45888e = parseInt(_0x1f9a21[0x1], 0xa));
			var _0x1ff458;
			if ('number' === typeof _0x13dfd4) {
				if ('loaded' !== _0x16d0cf['_state']) return _0x16d0cf['_queue']['push']({
					'event': 'rate',
					'action': function() {
						_0x16d0cf['rate']['apply'](_0x16d0cf, _0x1f9a21);
					}
				}), _0x16d0cf;
				'undefined' === typeof _0x45888e && (_0x16d0cf['_rate'] = _0x13dfd4);
				_0x45888e = _0x16d0cf['_getSoundIds'](_0x45888e);
				for (var _0x32dea3 = 0x0; _0x32dea3 < _0x45888e['length']; _0x32dea3++)
					if (_0x1ff458 = _0x16d0cf['_soundById'](_0x45888e[_0x32dea3])) {
						_0x1ff458['_rateSeek'] = _0x16d0cf['seek'](_0x45888e[_0x32dea3]);
						_0x1ff458['_playStart'] = _0x16d0cf['_webAudio'] ? _0x5b128d['ctx']['currentTime'] : _0x1ff458['_playStart'];
						_0x1ff458['_rate'] = _0x13dfd4;
						_0x16d0cf['_webAudio'] && _0x1ff458['_node'] && _0x1ff458['_node']['bufferSource'] ? _0x1ff458['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x13dfd4, _0x5b128d['ctx']['currentTime']) : _0x1ff458['_node'] && (_0x1ff458['_node']['playbackRate'] = _0x13dfd4);
						var _0xdbd04c = _0x16d0cf['seek'](_0x45888e[_0x32dea3]),
							_0xdbd04c = 0x3e8 * ((_0x16d0cf['_sprite'][_0x1ff458['_sprite']][0x0] + _0x16d0cf['_sprite'][_0x1ff458['_sprite']][0x1]) / 0x3e8 - _0xdbd04c) / Math['abs'](_0x1ff458['_rate']);
						if (_0x16d0cf['_endTimers'][_0x45888e[_0x32dea3]] || !_0x1ff458['_paused']) _0x16d0cf['_clearTimer'](_0x45888e[_0x32dea3]), _0x16d0cf['_endTimers'][_0x45888e[_0x32dea3]] = setTimeout(_0x16d0cf['_ended']['bind'](_0x16d0cf, _0x1ff458), _0xdbd04c);
						_0x16d0cf['_emit']('rate', _0x1ff458['_id']);
					}
			} else return (_0x1ff458 = _0x16d0cf['_soundById'](_0x45888e)) ? _0x1ff458['_rate'] : _0x16d0cf['_rate'];
			return _0x16d0cf;
		},
		'seek': function() {
			var _0x3f28b6 = this,
				_0x45241c = arguments,
				_0x422a8c, _0x5de321;
			0x0 === _0x45241c['length'] ? _0x5de321 = _0x3f28b6['_sounds'][0x0]['_id'] : 0x1 === _0x45241c['length'] ? 0x0 <= _0x3f28b6['_getSoundIds']()['indexOf'](_0x45241c[0x0]) ? _0x5de321 = parseInt(_0x45241c[0x0], 0xa) : _0x3f28b6['_sounds']['length'] && (_0x5de321 = _0x3f28b6['_sounds'][0x0]['_id'], _0x422a8c = parseFloat(_0x45241c[0x0])) : 0x2 === _0x45241c['length'] && (_0x422a8c = parseFloat(_0x45241c[0x0]), _0x5de321 = parseInt(_0x45241c[0x1], 0xa));
			if ('undefined' === typeof _0x5de321) return _0x3f28b6;
			if ('loaded' !== _0x3f28b6['_state']) return _0x3f28b6['_queue']['push']({
				'event': 'seek',
				'action': function() {
					_0x3f28b6['seek']['apply'](_0x3f28b6, _0x45241c);
				}
			}), _0x3f28b6;
			var _0x26d41a = _0x3f28b6['_soundById'](_0x5de321);
			if (_0x26d41a)
				if ('number' === typeof _0x422a8c && 0x0 <= _0x422a8c) {
					var _0x2223be = _0x3f28b6['playing'](_0x5de321);
					_0x2223be && _0x3f28b6['pause'](_0x5de321, !0x0);
					_0x26d41a['_seek'] = _0x422a8c;
					_0x26d41a['_ended'] = !0x1;
					_0x3f28b6['_clearTimer'](_0x5de321);
					_0x2223be && _0x3f28b6['play'](_0x5de321, !0x0);
					!_0x3f28b6['_webAudio'] && _0x26d41a['_node'] && (_0x26d41a['_node']['currentTime'] = _0x422a8c);
					if (_0x2223be && !_0x3f28b6['_webAudio']) {
						var _0x3791df = function() {
							_0x3f28b6['_playLock'] ? setTimeout(_0x3791df, 0x0) : _0x3f28b6['_emit']('seek', _0x5de321);
						};
						setTimeout(_0x3791df, 0x0);
					} else _0x3f28b6['_emit']('seek', _0x5de321);
				} else return _0x3f28b6['_webAudio'] ? (_0x422a8c = _0x3f28b6['playing'](_0x5de321) ? _0x5b128d['ctx']['currentTime'] - _0x26d41a['_playStart'] : 0x0, _0x26d41a['_seek'] + ((_0x26d41a['_rateSeek'] ? _0x26d41a['_rateSeek'] - _0x26d41a['_seek'] : 0x0) + _0x422a8c * Math['abs'](_0x26d41a['_rate']))) : _0x26d41a['_node']['currentTime'];
			return _0x3f28b6;
		},
		'playing': function(_0x214d17) {
			if ('number' === typeof _0x214d17) return (_0x214d17 = this['_soundById'](_0x214d17)) ? !_0x214d17['_paused'] : !0x1;
			for (_0x214d17 = 0x0; _0x214d17 < this['_sounds']['length']; _0x214d17++)
				if (!this['_sounds'][_0x214d17]['_paused']) return !0x0;
			return !0x1;
		},
		'duration': function(_0x2373e2) {
			var _0x245096 = this['_duration'];
			(_0x2373e2 = this['_soundById'](_0x2373e2)) && (_0x245096 = this['_sprite'][_0x2373e2['_sprite']][0x1] / 0x3e8);
			return _0x245096;
		},
		'state': function() {
			return this['_state'];
		},
		'unload': function() {
			for (var _0x1adbc0 = this['_sounds'], _0x481ddd = 0x0; _0x481ddd < _0x1adbc0['length']; _0x481ddd++) {
				_0x1adbc0[_0x481ddd]['_paused'] || this['stop'](_0x1adbc0[_0x481ddd]['_id']);
				this['_webAudio'] || (/MSIE |Trident\// ['test'](_0x5b128d['_navigator'] && _0x5b128d['_navigator']['userAgent']) || (_0x1adbc0[_0x481ddd]['_node']['src'] = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'), _0x1adbc0[_0x481ddd]['_node']['removeEventListener']('error', _0x1adbc0[_0x481ddd]['_errorFn'], !0x1), _0x1adbc0[_0x481ddd]['_node']['removeEventListener'](_0x5b128d['_canPlayEvent'], _0x1adbc0[_0x481ddd]['_loadFn'], !0x1));
				delete _0x1adbc0[_0x481ddd]['_node'];
				this['_clearTimer'](_0x1adbc0[_0x481ddd]['_id']);
				var _0x1d194c = _0x5b128d['_howls']['indexOf'](this);
				0x0 <= _0x1d194c && _0x5b128d['_howls']['splice'](_0x1d194c, 0x1);
			}
			_0x1adbc0 = !0x0;
			for (_0x481ddd = 0x0; _0x481ddd < _0x5b128d['_howls']['length']; _0x481ddd++)
				if (_0x5b128d['_howls'][_0x481ddd]['_src'] === this['_src']) {
					_0x1adbc0 = !0x1;
					break;
				} _0xfea255 && _0x1adbc0 && delete _0xfea255[this['_src']];
			_0x5b128d['noAudio'] = !0x1;
			this['_state'] = 'unloaded';
			this['_sounds'] = [];
			return null;
		},
		'on': function(_0x57d1fc, _0x3feca6, _0x4a7fef, _0x4a992e) {
			_0x57d1fc = this['_on' + _0x57d1fc];
			'function' === typeof _0x3feca6 && _0x57d1fc['push'](_0x4a992e ? {
				'id': _0x4a7fef,
				'fn': _0x3feca6,
				'once': _0x4a992e
			} : {
				'id': _0x4a7fef,
				'fn': _0x3feca6
			});
			return this;
		},
		'off': function(_0x22b4fe, _0x26622f, _0x1186a7) {
			var _0x47b8c6 = this['_on' + _0x22b4fe],
				_0x236a9c = 0x0;
			'number' === typeof _0x26622f && (_0x1186a7 = _0x26622f, _0x26622f = null);
			if (_0x26622f || _0x1186a7)
				for (_0x236a9c = 0x0; _0x236a9c < _0x47b8c6['length']; _0x236a9c++) {
					if (_0x22b4fe = _0x1186a7 === _0x47b8c6[_0x236a9c]['id'], _0x26622f === _0x47b8c6[_0x236a9c]['fn'] && _0x22b4fe || !_0x26622f && _0x22b4fe) {
						_0x47b8c6['splice'](_0x236a9c, 0x1);
						break;
					}
				} else if (_0x22b4fe) this['_on' + _0x22b4fe] = [];
				else {
					_0x26622f = Object['keys'](this);
					for (_0x236a9c = 0x0; _0x236a9c < _0x26622f['length']; _0x236a9c++) 0x0 === _0x26622f[_0x236a9c]['indexOf']('_on') && Array['isArray'](this[_0x26622f[_0x236a9c]]) && (this[_0x26622f[_0x236a9c]] = []);
				} return this;
		},
		'once': function(_0x17468a, _0x1c2552, _0x22ab6c) {
			this['on'](_0x17468a, _0x1c2552, _0x22ab6c, 0x1);
			return this;
		},
		'_emit': function(_0x138971, _0x1f72ed, _0x357e93) {
			for (var _0x252c90 = this['_on' + _0x138971], _0x11e912 = _0x252c90['length'] - 0x1; 0x0 <= _0x11e912; _0x11e912--)
				if (!_0x252c90[_0x11e912]['id'] || _0x252c90[_0x11e912]['id'] === _0x1f72ed || 'load' === _0x138971) setTimeout(function(_0x25df50) {
					_0x25df50['call'](this, _0x1f72ed, _0x357e93);
				} ['bind'](this, _0x252c90[_0x11e912]['fn']), 0x0), _0x252c90[_0x11e912]['once'] && this['off'](_0x138971, _0x252c90[_0x11e912]['fn'], _0x252c90[_0x11e912]['id']);
			this['_loadQueue'](_0x138971);
			return this;
		},
		'_loadQueue': function(_0x53ff97) {
			if (0x0 < this['_queue']['length']) {
				var _0x24e444 = this['_queue'][0x0];
				_0x24e444['event'] === _0x53ff97 && (this['_queue']['shift'](), this['_loadQueue']());
				_0x53ff97 || _0x24e444['action']();
			}
			return this;
		},
		'_ended': function(_0x5f4f57) {
			var _0x50ce2a = _0x5f4f57['_sprite'];
			if (!this['_webAudio'] && _0x5f4f57['_node'] && !_0x5f4f57['_node']['paused'] && !_0x5f4f57['_node']['ended'] && _0x5f4f57['_node']['currentTime'] < _0x5f4f57['_stop']) return setTimeout(this['_ended']['bind'](this, _0x5f4f57), 0x64), this;
			_0x50ce2a = !(!_0x5f4f57['_loop'] && !this['_sprite'][_0x50ce2a][0x2]);
			this['_emit']('end', _0x5f4f57['_id']);
			!this['_webAudio'] && _0x50ce2a && this['stop'](_0x5f4f57['_id'], !0x0)['play'](_0x5f4f57['_id']);
			if (this['_webAudio'] && _0x50ce2a) {
				this['_emit']('play', _0x5f4f57['_id']);
				_0x5f4f57['_seek'] = _0x5f4f57['_start'] || 0x0;
				_0x5f4f57['_rateSeek'] = 0x0;
				_0x5f4f57['_playStart'] = _0x5b128d['ctx']['currentTime'];
				var _0x15dd07 = 0x3e8 * (_0x5f4f57['_stop'] - _0x5f4f57['_start']) / Math['abs'](_0x5f4f57['_rate']);
				this['_endTimers'][_0x5f4f57['_id']] = setTimeout(this['_ended']['bind'](this, _0x5f4f57), _0x15dd07);
			}
			this['_webAudio'] && !_0x50ce2a && (_0x5f4f57['_paused'] = !0x0, _0x5f4f57['_ended'] = !0x0, _0x5f4f57['_seek'] = _0x5f4f57['_start'] || 0x0, _0x5f4f57['_rateSeek'] = 0x0, this['_clearTimer'](_0x5f4f57['_id']), this['_cleanBuffer'](_0x5f4f57['_node']), _0x5b128d['_autoSuspend']());
			!this['_webAudio'] && !_0x50ce2a && this['stop'](_0x5f4f57['_id']);
			return this;
		},
		'_clearTimer': function(_0x55c42a) {
			if (this['_endTimers'][_0x55c42a]) {
				if ('function' !== typeof this['_endTimers'][_0x55c42a]) clearTimeout(this['_endTimers'][_0x55c42a]);
				else {
					var _0x11a637 = this['_soundById'](_0x55c42a);
					_0x11a637 && _0x11a637['_node'] && _0x11a637['_node']['removeEventListener']('ended', this['_endTimers'][_0x55c42a], !0x1);
				}
				delete this['_endTimers'][_0x55c42a];
			}
			return this;
		},
		'_soundById': function(_0x38b472) {
			for (var _0x662151 = 0x0; _0x662151 < this['_sounds']['length']; _0x662151++)
				if (_0x38b472 === this['_sounds'][_0x662151]['_id']) return this['_sounds'][_0x662151];
			return null;
		},
		'_inactiveSound': function() {
			this['_drain']();
			for (var _0x312a42 = 0x0; _0x312a42 < this['_sounds']['length']; _0x312a42++)
				if (this['_sounds'][_0x312a42]['_ended']) return this['_sounds'][_0x312a42]['reset']();
			return new _0x2111b7(this);
		},
		'_drain': function() {
			var _0x94b9af = this['_pool'],
				_0x5b982a = 0x0,
				_0x38cb72 = 0x0;
			if (!(this['_sounds']['length'] < _0x94b9af)) {
				for (_0x38cb72 = 0x0; _0x38cb72 < this['_sounds']['length']; _0x38cb72++) this['_sounds'][_0x38cb72]['_ended'] && _0x5b982a++;
				for (_0x38cb72 = this['_sounds']['length'] - 0x1; 0x0 <= _0x38cb72 && !(_0x5b982a <= _0x94b9af); _0x38cb72--) this['_sounds'][_0x38cb72]['_ended'] && (this['_webAudio'] && this['_sounds'][_0x38cb72]['_node'] && this['_sounds'][_0x38cb72]['_node']['disconnect'](0x0), this['_sounds']['splice'](_0x38cb72, 0x1), _0x5b982a--);
			}
		},
		'_getSoundIds': function(_0x5aa41b) {
			if ('undefined' === typeof _0x5aa41b) {
				_0x5aa41b = [];
				for (var _0x4583d6 = 0x0; _0x4583d6 < this['_sounds']['length']; _0x4583d6++) _0x5aa41b['push'](this['_sounds'][_0x4583d6]['_id']);
				return _0x5aa41b;
			}
			return [_0x5aa41b];
		},
		'_refreshBuffer': function(_0x2025c4) {
			_0x2025c4['_node']['bufferSource'] = _0x5b128d['ctx']['createBufferSource']();
			_0x2025c4['_node']['bufferSource']['buffer'] = _0xfea255[this['_src']];
			_0x2025c4['_panner'] ? _0x2025c4['_node']['bufferSource']['connect'](_0x2025c4['_panner']) : _0x2025c4['_node']['bufferSource']['connect'](_0x2025c4['_node']);
			if (_0x2025c4['_node']['bufferSource']['loop'] = _0x2025c4['_loop']) _0x2025c4['_node']['bufferSource']['loopStart'] = _0x2025c4['_start'] || 0x0, _0x2025c4['_node']['bufferSource']['loopEnd'] = _0x2025c4['_stop'];
			_0x2025c4['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x2025c4['_rate'], _0x5b128d['ctx']['currentTime']);
			return this;
		},
		'_cleanBuffer': function(_0x4ab6e1) {
			if (_0x5b128d['_scratchBuffer']) {
				_0x4ab6e1['bufferSource']['onended'] = null;
				_0x4ab6e1['bufferSource']['disconnect'](0x0);
				try {
					_0x4ab6e1['bufferSource']['buffer'] = _0x5b128d['_scratchBuffer'];
				} catch (_0x13f893) {}
			}
			_0x4ab6e1['bufferSource'] = null;
			return this;
		}
	};
	var _0x2111b7 = function(_0x1fd394) {
		this['_parent'] = _0x1fd394;
		this['init']();
	};
	_0x2111b7['prototype'] = {
		'init': function() {
			var _0xdc0833 = this['_parent'];
			this['_muted'] = _0xdc0833['_muted'];
			this['_loop'] = _0xdc0833['_loop'];
			this['_volume'] = _0xdc0833['_volume'];
			this['_rate'] = _0xdc0833['_rate'];
			this['_seek'] = 0x0;
			this['_ended'] = this['_paused'] = !0x0;
			this['_sprite'] = '__default';
			this['_id'] = ++_0x5b128d['_counter'];
			_0xdc0833['_sounds']['push'](this);
			this['create']();
			return this;
		},
		'create': function() {
			var _0x534dd8 = this['_parent'],
				_0x46092b = _0x5b128d['_muted'] || this['_muted'] || this['_parent']['_muted'] ? 0x0 : this['_volume'];
			_0x534dd8['_webAudio'] ? (this['_node'] = 'undefined' === typeof _0x5b128d['ctx']['createGain'] ? _0x5b128d['ctx']['createGainNode']() : _0x5b128d['ctx']['createGain'](), this['_node']['gain']['setValueAtTime'](_0x46092b, _0x5b128d['ctx']['currentTime']), this['_node']['paused'] = !0x0, this['_node']['connect'](_0x5b128d['masterGain'])) : (this['_node'] = new Audio(), this['_errorFn'] = this['_errorListener']['bind'](this), this['_node']['addEventListener']('error', this['_errorFn'], !0x1), this['_loadFn'] = this['_loadListener']['bind'](this), this['_node']['addEventListener'](_0x5b128d['_canPlayEvent'], this['_loadFn'], !0x1), this['_node']['src'] = _0x534dd8['_src'], this['_node']['preload'] = 'auto', this['_node']['volume'] = _0x46092b * _0x5b128d['volume'](), this['_node']['load']());
			return this;
		},
		'reset': function() {
			var _0x361421 = this['_parent'];
			this['_muted'] = _0x361421['_muted'];
			this['_loop'] = _0x361421['_loop'];
			this['_volume'] = _0x361421['_volume'];
			this['_rate'] = _0x361421['_rate'];
			this['_rateSeek'] = this['_seek'] = 0x0;
			this['_ended'] = this['_paused'] = !0x0;
			this['_sprite'] = '__default';
			this['_id'] = ++_0x5b128d['_counter'];
			return this;
		},
		'_errorListener': function() {
			this['_parent']['_emit']('loaderror', this['_id'], this['_node']['error'] ? this['_node']['error']['code'] : 0x0);
			this['_node']['removeEventListener']('error', this['_errorFn'], !0x1);
		},
		'_loadListener': function() {
			var _0x18f1fc = this['_parent'];
			_0x18f1fc['_duration'] = Math['ceil'](0xa * this['_node']['duration']) / 0xa;
			0x0 === Object['keys'](_0x18f1fc['_sprite'])['length'] && (_0x18f1fc['_sprite'] = {
				'__default': [0x0, 0x3e8 * _0x18f1fc['_duration']]
			});
			'loaded' !== _0x18f1fc['_state'] && (_0x18f1fc['_state'] = 'loaded', _0x18f1fc['_emit']('load'), _0x18f1fc['_loadQueue']());
			this['_node']['removeEventListener'](_0x5b128d['_canPlayEvent'], this['_loadFn'], !0x1);
		}
	};
	var _0xfea255 = {},
		_0x28400f = function(_0x3627b9, _0x56cc08) {
			_0x5b128d['ctx']['decodeAudioData'](_0x3627b9, function(_0x4b3d3d) {
				_0x4b3d3d && 0x0 < _0x56cc08['_sounds']['length'] && (_0xfea255[_0x56cc08['_src']] = _0x4b3d3d, _0x369379(_0x56cc08, _0x4b3d3d));
			}, function() {
				_0x56cc08['_emit']('loaderror', null, 'Decoding\x20audio\x20data\x20failed.');
			});
		},
		_0x369379 = function(_0x5ec898, _0x489ebc) {
			_0x489ebc && !_0x5ec898['_duration'] && (_0x5ec898['_duration'] = _0x489ebc['duration']);
			0x0 === Object['keys'](_0x5ec898['_sprite'])['length'] && (_0x5ec898['_sprite'] = {
				'__default': [0x0, 0x3e8 * _0x5ec898['_duration']]
			});
			'loaded' !== _0x5ec898['_state'] && (_0x5ec898['_state'] = 'loaded', _0x5ec898['_emit']('load'), _0x5ec898['_loadQueue']());
		},
		_0x230274 = function() {
			try {
				'undefined' !== typeof AudioContext ? _0x5b128d['ctx'] = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x5b128d['ctx'] = new webkitAudioContext() : _0x5b128d['usingWebAudio'] = !0x1;
			} catch (_0x46143d) {
				_0x5b128d['usingWebAudio'] = !0x1;
			}
			var _0x258f4e = /iP(hone|od|ad)/ ['test'](_0x5b128d['_navigator'] && _0x5b128d['_navigator']['platform']),
				_0x3c84b7 = _0x5b128d['_navigator'] && _0x5b128d['_navigator']['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/),
				_0x3c84b7 = _0x3c84b7 ? parseInt(_0x3c84b7[0x1], 0xa) : null;
			if (_0x258f4e && _0x3c84b7 && 0x9 > _0x3c84b7 && (_0x258f4e = /safari/ ['test'](_0x5b128d['_navigator'] && _0x5b128d['_navigator']['userAgent']['toLowerCase']()), _0x5b128d['_navigator'] && _0x5b128d['_navigator']['standalone'] && !_0x258f4e || _0x5b128d['_navigator'] && !_0x5b128d['_navigator']['standalone'] && !_0x258f4e)) _0x5b128d['usingWebAudio'] = !0x1;
			_0x5b128d['usingWebAudio'] && (_0x5b128d['masterGain'] = 'undefined' === typeof _0x5b128d['ctx']['createGain'] ? _0x5b128d['ctx']['createGainNode']() : _0x5b128d['ctx']['createGain'](), _0x5b128d['masterGain']['gain']['setValueAtTime'](_0x5b128d['_muted'] ? 0x0 : 0x1, _0x5b128d['ctx']['currentTime']), _0x5b128d['masterGain']['connect'](_0x5b128d['ctx']['destination']));
			_0x5b128d['_setup']();
		};
	'function' === typeof define && define['amd'] && define([], function() {
		return {
			'Howler': _0x5b128d,
			'Howl': _0x28584e
		};
	});
	'undefined' !== typeof exports && (exports['Howler'] = _0x5b128d, exports['Howl'] = _0x28584e);
	'undefined' !== typeof window ? (window['HowlerGlobal'] = _0x3759d8, window['Howler'] = _0x5b128d, window['Howl'] = _0x28584e, window['Sound'] = _0x2111b7) : 'undefined' !== typeof global && (global['HowlerGlobal'] = _0x3759d8, global['Howler'] = _0x5b128d, global['Howl'] = _0x28584e, global['Sound'] = _0x2111b7);
}());
(function() {
	HowlerGlobal['prototype']['_pos'] = [0x0, 0x0, 0x0];
	HowlerGlobal['prototype']['_orientation'] = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0];
	HowlerGlobal['prototype']['stereo'] = function(_0x538e79) {
		if (!this['ctx'] || !this['ctx']['listener']) return this;
		for (var _0x21075e = this['_howls']['length'] - 0x1; 0x0 <= _0x21075e; _0x21075e--) this['_howls'][_0x21075e]['stereo'](_0x538e79);
		return this;
	};
	HowlerGlobal['prototype']['pos'] = function(_0x246b7a, _0x51511e, _0x3aefd0) {
		if (!this['ctx'] || !this['ctx']['listener']) return this;
		_0x51511e = 'number' !== typeof _0x51511e ? this['_pos'][0x1] : _0x51511e;
		_0x3aefd0 = 'number' !== typeof _0x3aefd0 ? this['_pos'][0x2] : _0x3aefd0;
		if ('number' === typeof _0x246b7a) this['_pos'] = [_0x246b7a, _0x51511e, _0x3aefd0], 'undefined' !== typeof this['ctx']['listener']['positionX'] ? (this['ctx']['listener']['positionX']['setTargetAtTime'](this['_pos'][0x0], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionY']['setTargetAtTime'](this['_pos'][0x1], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionZ']['setTargetAtTime'](this['_pos'][0x2], Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setPosition'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2]);
		else return this['_pos'];
		return this;
	};
	HowlerGlobal['prototype']['orientation'] = function(_0x13f0cb, _0x5a9fd9, _0x1ff726, _0x9b5e04, _0x162e5e, _0x500da1) {
		if (!this['ctx'] || !this['ctx']['listener']) return this;
		var _0x175a25 = this['_orientation'];
		_0x5a9fd9 = 'number' !== typeof _0x5a9fd9 ? _0x175a25[0x1] : _0x5a9fd9;
		_0x1ff726 = 'number' !== typeof _0x1ff726 ? _0x175a25[0x2] : _0x1ff726;
		_0x9b5e04 = 'number' !== typeof _0x9b5e04 ? _0x175a25[0x3] : _0x9b5e04;
		_0x162e5e = 'number' !== typeof _0x162e5e ? _0x175a25[0x4] : _0x162e5e;
		_0x500da1 = 'number' !== typeof _0x500da1 ? _0x175a25[0x5] : _0x500da1;
		if ('number' === typeof _0x13f0cb) this['_orientation'] = [_0x13f0cb, _0x5a9fd9, _0x1ff726, _0x9b5e04, _0x162e5e, _0x500da1], 'undefined' !== typeof this['ctx']['listener']['forwardX'] ? (this['ctx']['listener']['forwardX']['setTargetAtTime'](_0x13f0cb, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardY']['setTargetAtTime'](_0x5a9fd9, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardZ']['setTargetAtTime'](_0x1ff726, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upX']['setTargetAtTime'](_0x13f0cb, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upY']['setTargetAtTime'](_0x5a9fd9, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upZ']['setTargetAtTime'](_0x1ff726, Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setOrientation'](_0x13f0cb, _0x5a9fd9, _0x1ff726, _0x9b5e04, _0x162e5e, _0x500da1);
		else return _0x175a25;
		return this;
	};
	var _0x1eb7c4 = Howl['prototype']['init'];
	Howl['prototype']['init'] = function(_0x17e7eb) {
		this['_orientation'] = _0x17e7eb['orientation'] || [0x1, 0x0, 0x0];
		this['_stereo'] = _0x17e7eb['stereo'] || null;
		this['_pos'] = _0x17e7eb['pos'] || null;
		this['_pannerAttr'] = {
			'coneInnerAngle': 'undefined' !== typeof _0x17e7eb['coneInnerAngle'] ? _0x17e7eb['coneInnerAngle'] : 0x168,
			'coneOuterAngle': 'undefined' !== typeof _0x17e7eb['coneOuterAngle'] ? _0x17e7eb['coneOuterAngle'] : 0x168,
			'coneOuterGain': 'undefined' !== typeof _0x17e7eb['coneOuterGain'] ? _0x17e7eb['coneOuterGain'] : 0x0,
			'distanceModel': 'undefined' !== typeof _0x17e7eb['distanceModel'] ? _0x17e7eb['distanceModel'] : 'inverse',
			'maxDistance': 'undefined' !== typeof _0x17e7eb['maxDistance'] ? _0x17e7eb['maxDistance'] : 0x2710,
			'panningModel': 'undefined' !== typeof _0x17e7eb['panningModel'] ? _0x17e7eb['panningModel'] : 'HRTF',
			'refDistance': 'undefined' !== typeof _0x17e7eb['refDistance'] ? _0x17e7eb['refDistance'] : 0x1,
			'rolloffFactor': 'undefined' !== typeof _0x17e7eb['rolloffFactor'] ? _0x17e7eb['rolloffFactor'] : 0x1
		};
		this['_onstereo'] = _0x17e7eb['onstereo'] ? [{
			'fn': _0x17e7eb['onstereo']
		}] : [];
		this['_onpos'] = _0x17e7eb['onpos'] ? [{
			'fn': _0x17e7eb['onpos']
		}] : [];
		this['_onorientation'] = _0x17e7eb['onorientation'] ? [{
			'fn': _0x17e7eb['onorientation']
		}] : [];
		return _0x1eb7c4['call'](this, _0x17e7eb);
	};
	Howl['prototype']['stereo'] = function(_0x86767b, _0x3cf4fe) {
		var _0x597b19 = this;
		if (!_0x597b19['_webAudio']) return _0x597b19;
		if ('loaded' !== _0x597b19['_state']) return _0x597b19['_queue']['push']({
			'event': 'stereo',
			'action': function() {
				_0x597b19['stereo'](_0x86767b, _0x3cf4fe);
			}
		}), _0x597b19;
		var _0x48c54c = 'undefined' === typeof Howler['ctx']['createStereoPanner'] ? 'spatial' : 'stereo';
		if ('undefined' === typeof _0x3cf4fe)
			if ('number' === typeof _0x86767b) _0x597b19['_stereo'] = _0x86767b, _0x597b19['_pos'] = [_0x86767b, 0x0, 0x0];
			else return _0x597b19['_stereo'];
		for (var _0x35dccd = _0x597b19['_getSoundIds'](_0x3cf4fe), _0x512a82 = 0x0; _0x512a82 < _0x35dccd['length']; _0x512a82++) {
			var _0x24a5b7 = _0x597b19['_soundById'](_0x35dccd[_0x512a82]);
			if (_0x24a5b7)
				if ('number' === typeof _0x86767b) _0x24a5b7['_stereo'] = _0x86767b, _0x24a5b7['_pos'] = [_0x86767b, 0x0, 0x0], _0x24a5b7['_node'] && (_0x24a5b7['_pannerAttr']['panningModel'] = 'equalpower', (!_0x24a5b7['_panner'] || !_0x24a5b7['_panner']['pan']) && _0x3a18f0(_0x24a5b7, _0x48c54c), 'spatial' === _0x48c54c ? (_0x24a5b7['_panner']['positionX']['setValueAtTime'](_0x86767b, Howler['ctx']['currentTime']), _0x24a5b7['_panner']['positionY']['setValueAtTime'](0x0, Howler['ctx']['currentTime']), _0x24a5b7['_panner']['positionZ']['setValueAtTime'](0x0, Howler['ctx']['currentTime'])) : _0x24a5b7['_panner']['pan']['setValueAtTime'](_0x86767b, Howler['ctx']['currentTime'])), _0x597b19['_emit']('stereo', _0x24a5b7['_id']);
				else return _0x24a5b7['_stereo'];
		}
		return _0x597b19;
	};
	Howl['prototype']['pos'] = function(_0x15bb15, _0x1f0c4f, _0x4f4eeb, _0xefc8b5) {
		var _0x334094 = this;
		if (!_0x334094['_webAudio']) return _0x334094;
		if ('loaded' !== _0x334094['_state']) return _0x334094['_queue']['push']({
			'event': 'pos',
			'action': function() {
				_0x334094['pos'](_0x15bb15, _0x1f0c4f, _0x4f4eeb, _0xefc8b5);
			}
		}), _0x334094;
		_0x1f0c4f = 'number' !== typeof _0x1f0c4f ? 0x0 : _0x1f0c4f;
		_0x4f4eeb = 'number' !== typeof _0x4f4eeb ? -0.5 : _0x4f4eeb;
		if ('undefined' === typeof _0xefc8b5)
			if ('number' === typeof _0x15bb15) _0x334094['_pos'] = [_0x15bb15, _0x1f0c4f, _0x4f4eeb];
			else return _0x334094['_pos'];
		for (var _0x2b76e9 = _0x334094['_getSoundIds'](_0xefc8b5), _0xff9f0a = 0x0; _0xff9f0a < _0x2b76e9['length']; _0xff9f0a++) {
			var _0x3f1b18 = _0x334094['_soundById'](_0x2b76e9[_0xff9f0a]);
			if (_0x3f1b18)
				if ('number' === typeof _0x15bb15) _0x3f1b18['_pos'] = [_0x15bb15, _0x1f0c4f, _0x4f4eeb], _0x3f1b18['_node'] && ((!_0x3f1b18['_panner'] || _0x3f1b18['_panner']['pan']) && _0x3a18f0(_0x3f1b18, 'spatial'), _0x3f1b18['_panner']['positionX']['setValueAtTime'](_0x15bb15, Howler['ctx']['currentTime']), _0x3f1b18['_panner']['positionY']['setValueAtTime'](_0x1f0c4f, Howler['ctx']['currentTime']), _0x3f1b18['_panner']['positionZ']['setValueAtTime'](_0x4f4eeb, Howler['ctx']['currentTime'])), _0x334094['_emit']('pos', _0x3f1b18['_id']);
				else return _0x3f1b18['_pos'];
		}
		return _0x334094;
	};
	Howl['prototype']['orientation'] = function(_0x391fa2, _0x4a97a1, _0x219f3b, _0x4eea31) {
		var _0x397389 = this;
		if (!_0x397389['_webAudio']) return _0x397389;
		if ('loaded' !== _0x397389['_state']) return _0x397389['_queue']['push']({
			'event': 'orientation',
			'action': function() {
				_0x397389['orientation'](_0x391fa2, _0x4a97a1, _0x219f3b, _0x4eea31);
			}
		}), _0x397389;
		_0x4a97a1 = 'number' !== typeof _0x4a97a1 ? _0x397389['_orientation'][0x1] : _0x4a97a1;
		_0x219f3b = 'number' !== typeof _0x219f3b ? _0x397389['_orientation'][0x2] : _0x219f3b;
		if ('undefined' === typeof _0x4eea31)
			if ('number' === typeof _0x391fa2) _0x397389['_orientation'] = [_0x391fa2, _0x4a97a1, _0x219f3b];
			else return _0x397389['_orientation'];
		for (var _0x59444b = _0x397389['_getSoundIds'](_0x4eea31), _0x3cb796 = 0x0; _0x3cb796 < _0x59444b['length']; _0x3cb796++) {
			var _0x42c9af = _0x397389['_soundById'](_0x59444b[_0x3cb796]);
			if (_0x42c9af)
				if ('number' === typeof _0x391fa2) _0x42c9af['_orientation'] = [_0x391fa2, _0x4a97a1, _0x219f3b], _0x42c9af['_node'] && (_0x42c9af['_panner'] || (_0x42c9af['_pos'] || (_0x42c9af['_pos'] = _0x397389['_pos'] || [0x0, 0x0, -0.5]), _0x3a18f0(_0x42c9af, 'spatial')), _0x42c9af['_panner']['orientationX']['setValueAtTime'](_0x391fa2, Howler['ctx']['currentTime']), _0x42c9af['_panner']['orientationY']['setValueAtTime'](_0x4a97a1, Howler['ctx']['currentTime']), _0x42c9af['_panner']['orientationZ']['setValueAtTime'](_0x219f3b, Howler['ctx']['currentTime'])), _0x397389['_emit']('orientation', _0x42c9af['_id']);
				else return _0x42c9af['_orientation'];
		}
		return _0x397389;
	};
	Howl['prototype']['pannerAttr'] = function() {
		var _0x34117b = arguments,
			_0x205933, _0x297bb9;
		if (!this['_webAudio']) return this;
		if (0x0 === _0x34117b['length']) return this['_pannerAttr'];
		if (0x1 === _0x34117b['length'])
			if ('object' === typeof _0x34117b[0x0]) _0x205933 = _0x34117b[0x0], 'undefined' === typeof _0x297bb9 && (_0x205933['pannerAttr'] || (_0x205933['pannerAttr'] = {
				'coneInnerAngle': _0x205933['coneInnerAngle'],
				'coneOuterAngle': _0x205933['coneOuterAngle'],
				'coneOuterGain': _0x205933['coneOuterGain'],
				'distanceModel': _0x205933['distanceModel'],
				'maxDistance': _0x205933['maxDistance'],
				'refDistance': _0x205933['refDistance'],
				'rolloffFactor': _0x205933['rolloffFactor'],
				'panningModel': _0x205933['panningModel']
			}), this['_pannerAttr'] = {
				'coneInnerAngle': 'undefined' !== typeof _0x205933['pannerAttr']['coneInnerAngle'] ? _0x205933['pannerAttr']['coneInnerAngle'] : this['_coneInnerAngle'],
				'coneOuterAngle': 'undefined' !== typeof _0x205933['pannerAttr']['coneOuterAngle'] ? _0x205933['pannerAttr']['coneOuterAngle'] : this['_coneOuterAngle'],
				'coneOuterGain': 'undefined' !== typeof _0x205933['pannerAttr']['coneOuterGain'] ? _0x205933['pannerAttr']['coneOuterGain'] : this['_coneOuterGain'],
				'distanceModel': 'undefined' !== typeof _0x205933['pannerAttr']['distanceModel'] ? _0x205933['pannerAttr']['distanceModel'] : this['_distanceModel'],
				'maxDistance': 'undefined' !== typeof _0x205933['pannerAttr']['maxDistance'] ? _0x205933['pannerAttr']['maxDistance'] : this['_maxDistance'],
				'refDistance': 'undefined' !== typeof _0x205933['pannerAttr']['refDistance'] ? _0x205933['pannerAttr']['refDistance'] : this['_refDistance'],
				'rolloffFactor': 'undefined' !== typeof _0x205933['pannerAttr']['rolloffFactor'] ? _0x205933['pannerAttr']['rolloffFactor'] : this['_rolloffFactor'],
				'panningModel': 'undefined' !== typeof _0x205933['pannerAttr']['panningModel'] ? _0x205933['pannerAttr']['panningModel'] : this['_panningModel']
			});
			else return (_0x34117b = this['_soundById'](parseInt(_0x34117b[0x0], 0xa))) ? _0x34117b['_pannerAttr'] : this['_pannerAttr'];
		else 0x2 === _0x34117b['length'] && (_0x205933 = _0x34117b[0x0], _0x297bb9 = parseInt(_0x34117b[0x1], 0xa));
		_0x297bb9 = this['_getSoundIds'](_0x297bb9);
		for (var _0x4250de = 0x0; _0x4250de < _0x297bb9['length']; _0x4250de++)
			if (_0x34117b = this['_soundById'](_0x297bb9[_0x4250de])) {
				var _0x756783 = _0x34117b['_pannerAttr'],
					_0x756783 = {
						'coneInnerAngle': 'undefined' !== typeof _0x205933['coneInnerAngle'] ? _0x205933['coneInnerAngle'] : _0x756783['coneInnerAngle'],
						'coneOuterAngle': 'undefined' !== typeof _0x205933['coneOuterAngle'] ? _0x205933['coneOuterAngle'] : _0x756783['coneOuterAngle'],
						'coneOuterGain': 'undefined' !== typeof _0x205933['coneOuterGain'] ? _0x205933['coneOuterGain'] : _0x756783['coneOuterGain'],
						'distanceModel': 'undefined' !== typeof _0x205933['distanceModel'] ? _0x205933['distanceModel'] : _0x756783['distanceModel'],
						'maxDistance': 'undefined' !== typeof _0x205933['maxDistance'] ? _0x205933['maxDistance'] : _0x756783['maxDistance'],
						'refDistance': 'undefined' !== typeof _0x205933['refDistance'] ? _0x205933['refDistance'] : _0x756783['refDistance'],
						'rolloffFactor': 'undefined' !== typeof _0x205933['rolloffFactor'] ? _0x205933['rolloffFactor'] : _0x756783['rolloffFactor'],
						'panningModel': 'undefined' !== typeof _0x205933['panningModel'] ? _0x205933['panningModel'] : _0x756783['panningModel']
					},
					_0x57d6f1 = _0x34117b['_panner'];
				_0x57d6f1 ? (_0x57d6f1['coneInnerAngle'] = _0x756783['coneInnerAngle'], _0x57d6f1['coneOuterAngle'] = _0x756783['coneOuterAngle'], _0x57d6f1['coneOuterGain'] = _0x756783['coneOuterGain'], _0x57d6f1['distanceModel'] = _0x756783['distanceModel'], _0x57d6f1['maxDistance'] = _0x756783['maxDistance'], _0x57d6f1['refDistance'] = _0x756783['refDistance'], _0x57d6f1['rolloffFactor'] = _0x756783['rolloffFactor'], _0x57d6f1['panningModel'] = _0x756783['panningModel']) : (_0x34117b['_pos'] || (_0x34117b['_pos'] = this['_pos'] || [0x0, 0x0, -0.5]), _0x3a18f0(_0x34117b, 'spatial'));
			} return this;
	};
	var _0x51714a = Sound['prototype']['init'];
	Sound['prototype']['init'] = function() {
		var _0x248d04 = this['_parent'];
		this['_orientation'] = _0x248d04['_orientation'];
		this['_stereo'] = _0x248d04['_stereo'];
		this['_pos'] = _0x248d04['_pos'];
		this['_pannerAttr'] = _0x248d04['_pannerAttr'];
		_0x51714a['call'](this);
		this['_stereo'] ? _0x248d04['stereo'](this['_stereo']) : this['_pos'] && _0x248d04['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']);
	};
	var _0x343c8e = Sound['prototype']['reset'];
	Sound['prototype']['reset'] = function() {
		var _0x6fb8a6 = this['_parent'];
		this['_orientation'] = _0x6fb8a6['_orientation'];
		this['_pos'] = _0x6fb8a6['_pos'];
		this['_pannerAttr'] = _0x6fb8a6['_pannerAttr'];
		return _0x343c8e['call'](this);
	};
	var _0x3a18f0 = function(_0x51a9a6, _0x5d4e40) {
		'spatial' === (_0x5d4e40 || 'spatial') ? (_0x51a9a6['_panner'] = Howler['ctx']['createPanner'](), _0x51a9a6['_panner']['coneInnerAngle'] = _0x51a9a6['_pannerAttr']['coneInnerAngle'], _0x51a9a6['_panner']['coneOuterAngle'] = _0x51a9a6['_pannerAttr']['coneOuterAngle'], _0x51a9a6['_panner']['coneOuterGain'] = _0x51a9a6['_pannerAttr']['coneOuterGain'], _0x51a9a6['_panner']['distanceModel'] = _0x51a9a6['_pannerAttr']['distanceModel'], _0x51a9a6['_panner']['maxDistance'] = _0x51a9a6['_pannerAttr']['maxDistance'], _0x51a9a6['_panner']['refDistance'] = _0x51a9a6['_pannerAttr']['refDistance'], _0x51a9a6['_panner']['rolloffFactor'] = _0x51a9a6['_pannerAttr']['rolloffFactor'], _0x51a9a6['_panner']['panningModel'] = _0x51a9a6['_pannerAttr']['panningModel'], _0x51a9a6['_panner']['positionX']['setValueAtTime'](_0x51a9a6['_pos'][0x0], Howler['ctx']['currentTime']), _0x51a9a6['_panner']['positionY']['setValueAtTime'](_0x51a9a6['_pos'][0x1], Howler['ctx']['currentTime']), _0x51a9a6['_panner']['positionZ']['setValueAtTime'](_0x51a9a6['_pos'][0x2], Howler['ctx']['currentTime']), _0x51a9a6['_panner']['orientationX']['setValueAtTime'](_0x51a9a6['_orientation'][0x0], Howler['ctx']['currentTime']), _0x51a9a6['_panner']['orientationY']['setValueAtTime'](_0x51a9a6['_orientation'][0x1], Howler['ctx']['currentTime']), _0x51a9a6['_panner']['orientationZ']['setValueAtTime'](_0x51a9a6['_orientation'][0x2], Howler['ctx']['currentTime'])) : (_0x51a9a6['_panner'] = Howler['ctx']['createStereoPanner'](), _0x51a9a6['_panner']['pan']['setValueAtTime'](_0x51a9a6['_stereo'], Howler['ctx']['currentTime']));
		_0x51a9a6['_panner']['connect'](_0x51a9a6['_node']);
		_0x51a9a6['_paused'] || _0x51a9a6['_parent']['pause'](_0x51a9a6['_id'], !0x0)['play'](_0x51a9a6['_id'], !0x0);
	};
}());
(function(_0x3df023) {
	Number['prototype']['map'] = function(_0x5fb9ef, _0x10235d, _0x59d22b, _0x500ef5) {
		return _0x59d22b + (_0x500ef5 - _0x59d22b) * ((this - _0x5fb9ef) / (_0x10235d - _0x5fb9ef));
	};
	Number['prototype']['limit'] = function(_0x55f18e, _0x36b288) {
		return Math['min'](_0x36b288, Math['max'](_0x55f18e, this));
	};
	Number['prototype']['round'] = function(_0x5d7043) {
		_0x5d7043 = Math['pow'](0xa, _0x5d7043 || 0x0);
		return Math['round'](this * _0x5d7043) / _0x5d7043;
	};
	Number['prototype']['floor'] = function() {
		return Math['floor'](this);
	};
	Number['prototype']['ceil'] = function() {
		return Math['ceil'](this);
	};
	Number['prototype']['toInt'] = function() {
		return this | 0x0;
	};
	Number['prototype']['toRad'] = function() {
		return this / 0xb4 * Math['PI'];
	};
	Number['prototype']['toDeg'] = function() {
		return 0xb4 * this / Math['PI'];
	};
	Array['prototype']['erase'] = function(_0x4e60ef) {
		for (var _0x1eb33f = this['length']; _0x1eb33f--;) this[_0x1eb33f] === _0x4e60ef && this['splice'](_0x1eb33f, 0x1);
		return this;
	};
	Array['prototype']['random'] = function() {
		return this[Math['floor'](Math['random']() * this['length'])];
	};
	Function['prototype']['bind'] = Function['prototype']['bind'] || function(_0x35b041) {
		if ('function' !== typeof this) throw new TypeError('Function.prototype.bind\x20-\x20what\x20is\x20trying\x20to\x20be\x20bound\x20is\x20not\x20callable');
		var _0x5a277d = Array['prototype']['slice']['call'](arguments, 0x1),
			_0x158f34 = this,
			_0x2dea4f = function() {},
			_0x19be76 = function() {
				return _0x158f34['apply'](this instanceof _0x2dea4f && _0x35b041 ? this : _0x35b041, _0x5a277d['concat'](Array['prototype']['slice']['call'](arguments)));
			};
		_0x2dea4f['prototype'] = this['prototype'];
		_0x19be76['prototype'] = new _0x2dea4f();
		return _0x19be76;
	};
	_0x3df023['ig'] = {
		'game': null,
		'debug': null,
		'version': '1.23',
		'global': _0x3df023,
		'modules': {},
		'resources': [],
		'ready': !0x1,
		'baked': !0x1,
		'nocache': '',
		'ua': {},
		'prefix': _0x3df023['ImpactPrefix'] || '',
		'lib': 'lib/',
		'_current': null,
		'_loadQueue': [],
		'_waitForOnload': 0x0,
		'$': function(_0x37937d) {
			return '#' == _0x37937d['charAt'](0x0) ? document['getElementById'](_0x37937d['substr'](0x1)) : document['getElementsByTagName'](_0x37937d);
		},
		'$new': function(_0x3b1bbc) {
			return document['createElement'](_0x3b1bbc);
		},
		'copy': function(_0x5d916e) {
			if (!_0x5d916e || 'object' != typeof _0x5d916e || _0x5d916e instanceof HTMLElement || _0x5d916e instanceof ig['Class']) return _0x5d916e;
			if (_0x5d916e instanceof Array)
				for (var _0xc66747 = [], _0x3212ee = 0x0, _0x412233 = _0x5d916e['length']; _0x3212ee < _0x412233; _0x3212ee++) _0xc66747[_0x3212ee] = ig['copy'](_0x5d916e[_0x3212ee]);
			else
				for (_0x3212ee in (_0xc66747 = {}, _0x5d916e)) _0xc66747[_0x3212ee] = ig['copy'](_0x5d916e[_0x3212ee]);
			return _0xc66747;
		},
		'merge': function(_0x5197c7, _0x5172b7) {
			for (var _0x2aa4e1 in _0x5172b7) {
				var _0x2c14a6 = _0x5172b7[_0x2aa4e1];
				if ('object' != typeof _0x2c14a6 || _0x2c14a6 instanceof HTMLElement || _0x2c14a6 instanceof ig['Class'] || null === _0x2c14a6) _0x5197c7[_0x2aa4e1] = _0x2c14a6;
				else {
					if (!_0x5197c7[_0x2aa4e1] || 'object' != typeof _0x5197c7[_0x2aa4e1]) _0x5197c7[_0x2aa4e1] = _0x2c14a6 instanceof Array ? [] : {};
					ig['merge'](_0x5197c7[_0x2aa4e1], _0x2c14a6);
				}
			}
			return _0x5197c7;
		},
		'ksort': function(_0x1b1738) {
			if (!_0x1b1738 || 'object' != typeof _0x1b1738) return [];
			var _0x31778a = [],
				_0xf51d79 = [],
				_0xaa43f4;
			for (_0xaa43f4 in _0x1b1738) _0x31778a['push'](_0xaa43f4);
			_0x31778a['sort']();
			for (_0xaa43f4 = 0x0; _0xaa43f4 < _0x31778a['length']; _0xaa43f4++) _0xf51d79['push'](_0x1b1738[_0x31778a[_0xaa43f4]]);
			return _0xf51d79;
		},
		'setVendorAttribute': function(_0x46136e, _0x4a7d6b, _0x9651a0) {
			var _0x4a7056 = _0x4a7d6b['charAt'](0x0)['toUpperCase']() + _0x4a7d6b['substr'](0x1);
			_0x46136e[_0x4a7d6b] = 'undefined' !== typeof _0x46136e['imageSmoothingEnabled'] ? _0x46136e['ms' + _0x4a7056] = _0x46136e['moz' + _0x4a7056] = _0x46136e['o' + _0x4a7056] = _0x9651a0 : _0x46136e['ms' + _0x4a7056] = _0x46136e['moz' + _0x4a7056] = _0x46136e['webkit' + _0x4a7056] = _0x46136e['o' + _0x4a7056] = _0x9651a0;
		},
		'getVendorAttribute': function(_0x3ad7a7, _0x4feddd) {
			var _0xa5b72 = _0x4feddd['charAt'](0x0)['toUpperCase']() + _0x4feddd['substr'](0x1);
			return 'undefined' !== typeof _0x3ad7a7['imageSmoothingEnabled'] ? _0x3ad7a7[_0x4feddd] || _0x3ad7a7['ms' + _0xa5b72] || _0x3ad7a7['moz' + _0xa5b72] || _0x3ad7a7['o' + _0xa5b72] : _0x3ad7a7[_0x4feddd] || _0x3ad7a7['ms' + _0xa5b72] || _0x3ad7a7['moz' + _0xa5b72] || _0x3ad7a7['webkit' + _0xa5b72] || _0x3ad7a7['o' + _0xa5b72];
		},
		'normalizeVendorAttribute': function(_0x444a10, _0x5c048c) {
			var _0x32527d = ig['getVendorAttribute'](_0x444a10, _0x5c048c);
			!_0x444a10[_0x5c048c] && _0x32527d && (_0x444a10[_0x5c048c] = _0x32527d);
		},
		'getImagePixels': function(_0x378751, _0x550679, _0x3c079b, _0x18b9d8, _0x47c675) {
			var _0x24e0c0 = ig['$new']('canvas');
			_0x24e0c0['width'] = _0x378751['width'];
			_0x24e0c0['height'] = _0x378751['height'];
			var _0x3f8ea0 = _0x24e0c0['getContext']('2d');
			ig['System']['SCALE']['CRISP'](_0x24e0c0, _0x3f8ea0);
			var _0x200818 = ig['getVendorAttribute'](_0x3f8ea0, 'backingStorePixelRatio') || 0x1;
			ig['normalizeVendorAttribute'](_0x3f8ea0, 'getImageDataHD');
			var _0x2a843e = _0x378751['width'] / _0x200818,
				_0xebab9b = _0x378751['height'] / _0x200818;
			_0x24e0c0['width'] = Math['ceil'](_0x2a843e);
			_0x24e0c0['height'] = Math['ceil'](_0xebab9b);
			_0x3f8ea0['drawImage'](_0x378751, 0x0, 0x0, _0x2a843e, _0xebab9b);
			return 0x1 === _0x200818 ? _0x3f8ea0['getImageData'](_0x550679, _0x3c079b, _0x18b9d8, _0x47c675) : _0x3f8ea0['getImageDataHD'](_0x550679, _0x3c079b, _0x18b9d8, _0x47c675);
		},
		'module': function(_0x56aa9f) {
			if (ig['_current']) throw 'Module\x20\x27' + ig['_current']['name'] + '\x27\x20defines\x20nothing';
			if (ig['modules'][_0x56aa9f] && ig['modules'][_0x56aa9f]['body']) throw 'Module\x20\x27' + _0x56aa9f + '\x27\x20is\x20already\x20defined';
			ig['_current'] = {
				'name': _0x56aa9f,
				'requires': [],
				'loaded': !0x1,
				'body': null
			};
			ig['modules'][_0x56aa9f] = ig['_current'];
			ig['_loadQueue']['push'](ig['_current']);
			return ig;
		},
		'requires': function() {
			ig['_current']['requires'] = Array['prototype']['slice']['call'](arguments);
			return ig;
		},
		'defines': function(_0x28c360) {
			ig['_current']['body'] = _0x28c360;
			ig['_current'] = null;
			ig['_initDOMReady']();
		},
		'addResource': function(_0x5013f5) {
			ig['resources']['push'](_0x5013f5);
		},
		'setNocache': function(_0x21a3f0) {
			ig['nocache'] = _0x21a3f0 ? '?' + Date['now']() : '';
		},
		'log': function() {},
		'assert': function() {},
		'show': function() {},
		'mark': function() {},
		'_loadScript': function(_0x439895, _0x3e5934) {
			ig['modules'][_0x439895] = {
				'name': _0x439895,
				'requires': [],
				'loaded': !0x1,
				'body': null
			};
			ig['_waitForOnload']++;
			var _0x3ff448 = ig['prefix'] + ig['lib'] + _0x439895['replace'](/\./g, '/') + '.js' + ig['nocache'],
				_0x184d91 = ig['$new']('script');
			_0x184d91['type'] = 'text/javascript';
			_0x184d91['src'] = _0x3ff448;
			_0x184d91['onload'] = function() {
				ig['_waitForOnload']--;
				ig['_execModules']();
			};
			_0x184d91['onerror'] = function() {
				throw 'Failed\x20to\x20load\x20module\x20' + _0x439895 + '\x20at\x20' + _0x3ff448 + '\x20required\x20from\x20' + _0x3e5934;
			};
			ig['$']('head')[0x0]['appendChild'](_0x184d91);
		},
		'_execModules': function() {
			for (var _0x541c1a = !0x1, _0x2e7856 = 0x0; _0x2e7856 < ig['_loadQueue']['length']; _0x2e7856++) {
				for (var _0x254fab = ig['_loadQueue'][_0x2e7856], _0x501b09 = !0x0, _0x2762f6 = 0x0; _0x2762f6 < _0x254fab['requires']['length']; _0x2762f6++) {
					var _0x30f76e = _0x254fab['requires'][_0x2762f6];
					ig['modules'][_0x30f76e] ? ig['modules'][_0x30f76e]['loaded'] || (_0x501b09 = !0x1) : (_0x501b09 = !0x1, ig['_loadScript'](_0x30f76e, _0x254fab['name']));
				}
				_0x501b09 && _0x254fab['body'] && (ig['_loadQueue']['splice'](_0x2e7856, 0x1), _0x254fab['loaded'] = !0x0, _0x254fab['body'](), _0x541c1a = !0x0, _0x2e7856--);
			}
			if (_0x541c1a) ig['_execModules']();
			else if (!ig['baked'] && 0x0 == ig['_waitForOnload'] && 0x0 != ig['_loadQueue']['length']) {
				_0x541c1a = [];
				for (_0x2e7856 = 0x0; _0x2e7856 < ig['_loadQueue']['length']; _0x2e7856++) {
					_0x501b09 = [];
					_0x30f76e = ig['_loadQueue'][_0x2e7856]['requires'];
					for (_0x2762f6 = 0x0; _0x2762f6 < _0x30f76e['length']; _0x2762f6++) _0x254fab = ig['modules'][_0x30f76e[_0x2762f6]], (!_0x254fab || !_0x254fab['loaded']) && _0x501b09['push'](_0x30f76e[_0x2762f6]);
					_0x541c1a['push'](ig['_loadQueue'][_0x2e7856]['name'] + '\x20(requires:\x20' + _0x501b09['join'](',\x20') + ')');
				}
				throw 'Unresolved\x20(or\x20circular?)\x20dependencies.\x20Most\x20likely\x20there\x27s\x20a\x20name/path\x20mismatch\x20for\x20one\x20of\x20the\x20listed\x20modules\x20or\x20a\x20previous\x20syntax\x20error\x20prevents\x20a\x20module\x20from\x20loading:\x0a' + _0x541c1a['join']('\x0a');
			}
		},
		'_DOMReady': function() {
			if (!ig['modules']['dom.ready']['loaded']) {
				if (!document['body']) return setTimeout(ig['_DOMReady'], 0xd);
				ig['modules']['dom.ready']['loaded'] = !0x0;
				ig['_waitForOnload']--;
				ig['_execModules']();
			}
			return 0x0;
		},
		'_boot': function() {
			document['location']['href']['match'](/\?nocache/) && ig['setNocache'](!0x0);
			ig['ua']['pixelRatio'] = _0x3df023['devicePixelRatio'] || 0x1;
			ig['ua']['viewport'] = {
				'width': _0x3df023['innerWidth'],
				'height': _0x3df023['innerHeight']
			};
			ig['ua']['screen'] = {
				'width': _0x3df023['screen']['availWidth'] * ig['ua']['pixelRatio'],
				'height': _0x3df023['screen']['availHeight'] * ig['ua']['pixelRatio']
			};
			ig['ua']['iPhone'] = /iPhone/i ['test'](navigator['userAgent']);
			ig['ua']['iPhone4'] = ig['ua']['iPhone'] && 0x2 == ig['ua']['pixelRatio'];
			ig['ua']['iPad'] = /iPad/i ['test'](navigator['userAgent']);
			ig['ua']['android'] = /android/i ['test'](navigator['userAgent']);
			ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']);
			ig['ua']['is_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i ['test'](navigator['userAgent']);
			ig['ua']['is_safari_or_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit/i ['test'](navigator['userAgent']);
			ig['ua']['iOS'] = ig['ua']['iPhone'] || ig['ua']['iPad'];
			ig['ua']['iOS6_tag'] = /OS 6_/i ['test'](navigator['userAgent']);
			ig['ua']['iOS6'] = (ig['ua']['iPhone'] || ig['ua']['iPad']) && ig['ua']['iOS6_tag'];
			ig['ua']['iOSgt5'] = ig['ua']['iOS'] && 0x5 < parseInt(navigator['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/)[0x1]);
			ig['ua']['HTCONE'] = /HTC_One/i ['test'](navigator['userAgent']);
			ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']);
			ig['ua']['Kindle'] = /Silk/i ['test'](navigator['userAgent']);
			ig['ua']['touchDevice'] = 'ontouchstart' in _0x3df023 || _0x3df023['navigator']['msMaxTouchPoints'];
			ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['android'] || ig['ua']['iOS6'] || ig['ua']['winPhone'] || ig['ua']['Kindle'] || /mobile/i ['test'](navigator['userAgent']);
		},
		'_initDOMReady': function() {
			ig['modules']['dom.ready'] ? ig['_execModules']() : (ig['_boot'](), ig['modules']['dom.ready'] = {
				'requires': [],
				'loaded': !0x1,
				'body': null
			}, ig['_waitForOnload']++, 'complete' === document['readyState'] ? ig['_DOMReady']() : (document['addEventListener']('DOMContentLoaded', ig['_DOMReady'], !0x1), _0x3df023['addEventListener']('load', ig['_DOMReady'], !0x1)));
		}
	};
	ig['normalizeVendorAttribute'](_0x3df023, 'requestAnimationFrame');
	if (_0x3df023['requestAnimationFrame']) {
		var _0x4b633b = 0x1,
			_0x24d18f = {};
		_0x3df023['ig']['setAnimation'] = function(_0x55d7f0, _0xf36d) {
			var _0x3ba684 = _0x4b633b++;
			_0x24d18f[_0x3ba684] = !0x0;
			var _0x24e89f = function() {
				_0x24d18f[_0x3ba684] && (_0x3df023['requestAnimationFrame'](_0x24e89f, _0xf36d), _0x55d7f0());
			};
			_0x3df023['requestAnimationFrame'](_0x24e89f, _0xf36d);
			return _0x3ba684;
		};
		_0x3df023['ig']['clearAnimation'] = function(_0x1f98a1) {
			delete _0x24d18f[_0x1f98a1];
		};
	} else _0x3df023['ig']['setAnimation'] = function(_0xd61bca) {
		return _0x3df023['setInterval'](_0xd61bca, 0x3e8 / 0x3c);
	}, _0x3df023['ig']['clearAnimation'] = function(_0x56ad30) {
		_0x3df023['clearInterval'](_0x56ad30);
	};
	var _0x4309de = !0x1,
		_0x58c398 = /xyz/ ['test'](function() {
			xyz;
		}) ? /\bparent\b/ : /.*/,
		_0x54c4c7 = 0x0;
	_0x3df023['ig']['Class'] = function() {};
	var _0x3e7638 = function(_0x4582a7) {
		var _0x1ddb7a = this['prototype'],
			_0x16cd30 = {},
			_0x2f8628;
		for (_0x2f8628 in _0x4582a7) 'function' == typeof _0x4582a7[_0x2f8628] && 'function' == typeof _0x1ddb7a[_0x2f8628] && _0x58c398['test'](_0x4582a7[_0x2f8628]) ? (_0x16cd30[_0x2f8628] = _0x1ddb7a[_0x2f8628], _0x1ddb7a[_0x2f8628] = function(_0x27ef23, _0x21d387) {
			return function() {
				var _0x4a9a95 = this['parent'];
				this['parent'] = _0x16cd30[_0x27ef23];
				var _0x3b0c29 = _0x21d387['apply'](this, arguments);
				this['parent'] = _0x4a9a95;
				return _0x3b0c29;
			};
		}(_0x2f8628, _0x4582a7[_0x2f8628])) : _0x1ddb7a[_0x2f8628] = _0x4582a7[_0x2f8628];
	};
	_0x3df023['ig']['Class']['extend'] = function(_0x30997d) {
		function _0xd74d31() {
			if (!_0x4309de) {
				if (this['staticInstantiate']) {
					var _0x8a277d = this['staticInstantiate']['apply'](this, arguments);
					if (_0x8a277d) return _0x8a277d;
				}
				for (var _0x4a427a in this) 'object' == typeof this[_0x4a427a] && (this[_0x4a427a] = ig['copy'](this[_0x4a427a]));
				this['init'] && this['init']['apply'](this, arguments);
			}
			return this;
		}
		var _0x18931a = this['prototype'];
		_0x4309de = !0x0;
		var _0x4fa44d = new this();
		_0x4309de = !0x1;
		for (var _0x435cc4 in _0x30997d) _0x4fa44d[_0x435cc4] = 'function' == typeof _0x30997d[_0x435cc4] && 'function' == typeof _0x18931a[_0x435cc4] && _0x58c398['test'](_0x30997d[_0x435cc4]) ? function(_0x5ce302, _0x3f906b) {
			return function() {
				var _0x462907 = this['parent'];
				this['parent'] = _0x18931a[_0x5ce302];
				var _0x1ec41a = _0x3f906b['apply'](this, arguments);
				this['parent'] = _0x462907;
				return _0x1ec41a;
			};
		}(_0x435cc4, _0x30997d[_0x435cc4]) : _0x30997d[_0x435cc4];
		_0xd74d31['prototype'] = _0x4fa44d;
		_0xd74d31['prototype']['constructor'] = _0xd74d31;
		_0xd74d31['extend'] = _0x3df023['ig']['Class']['extend'];
		_0xd74d31['inject'] = _0x3e7638;
		_0xd74d31['classId'] = _0x4fa44d['classId'] = ++_0x54c4c7;
		return _0xd74d31;
	};
	_0x3df023['ImpactMixin'] && ig['merge'](ig, _0x3df023['ImpactMixin']);
}(window));
ig['baked'] = !0x0;
ig['module']('impact.image')['defines'](function() {
	ig['Image'] = ig['Class']['extend']({
		'data': null,
		'width': 0x0,
		'height': 0x0,
		'loaded': !0x1,
		'failed': !0x1,
		'loadCallback': null,
		'path': '',
		'staticInstantiate': function(_0x177203) {
			return ig['Image']['cache'][_0x177203] || null;
		},
		'init': function(_0x1d5b7f) {
			this['path'] = _0x1d5b7f;
			this['load']();
		},
		'load': function(_0x4af146) {
			this['loaded'] ? _0x4af146 && _0x4af146(this['path'], !0x0) : (!this['loaded'] && ig['ready'] ? (this['loadCallback'] = _0x4af146 || null, this['data'] = new Image(), this['data']['onload'] = this['onload']['bind'](this), this['data']['onerror'] = this['onerror']['bind'](this), this['data']['src'] = ig['prefix'] + this['path'] + ig['nocache']) : ig['addResource'](this), ig['Image']['cache'][this['path']] = this);
		},
		'reload': function() {
			this['loaded'] = !0x1;
			this['data'] = new Image();
			this['data']['onload'] = this['onload']['bind'](this);
			this['data']['src'] = this['path'] + '?' + Date['now']();
		},
		'onload': function() {
			this['width'] = this['data']['width'];
			this['height'] = this['data']['height'];
			this['loaded'] = !0x0;
			0x1 != ig['system']['scale'] && this['resize'](ig['system']['scale']);
			this['loadCallback'] && this['loadCallback'](this['path'], !0x0);
		},
		'onerror': function() {
			this['failed'] = !0x0;
			this['loadCallback'] && this['loadCallback'](this['path'], !0x1);
		},
		'resize': function(_0x5ab564) {
			var _0x536f72 = ig['getImagePixels'](this['data'], 0x0, 0x0, this['width'], this['height']),
				_0x1075fe = this['width'] * _0x5ab564,
				_0xad6cd5 = this['height'] * _0x5ab564,
				_0x5cccc3 = ig['$new']('canvas');
			_0x5cccc3['width'] = _0x1075fe;
			_0x5cccc3['height'] = _0xad6cd5;
			for (var _0x4b4bf4 = _0x5cccc3['getContext']('2d'), _0x45c065 = _0x4b4bf4['getImageData'](0x0, 0x0, _0x1075fe, _0xad6cd5), _0x337d49 = 0x0; _0x337d49 < _0xad6cd5; _0x337d49++)
				for (var _0x398784 = 0x0; _0x398784 < _0x1075fe; _0x398784++) {
					var _0x2456be = 0x4 * (Math['floor'](_0x337d49 / _0x5ab564) * this['width'] + Math['floor'](_0x398784 / _0x5ab564)),
						_0x3ea0ec = 0x4 * (_0x337d49 * _0x1075fe + _0x398784);
					_0x45c065['data'][_0x3ea0ec] = _0x536f72['data'][_0x2456be];
					_0x45c065['data'][_0x3ea0ec + 0x1] = _0x536f72['data'][_0x2456be + 0x1];
					_0x45c065['data'][_0x3ea0ec + 0x2] = _0x536f72['data'][_0x2456be + 0x2];
					_0x45c065['data'][_0x3ea0ec + 0x3] = _0x536f72['data'][_0x2456be + 0x3];
				}
			_0x4b4bf4['putImageData'](_0x45c065, 0x0, 0x0);
			this['data'] = _0x5cccc3;
		},
		'draw': function(_0x581a8a, _0x1d2610, _0x3ca73c, _0x149483, _0x88c994, _0x2ba7b7) {
			if (this['loaded']) {
				var _0x46eff7 = ig['system']['scale'];
				_0x88c994 = (_0x88c994 ? _0x88c994 : this['width']) * _0x46eff7;
				_0x2ba7b7 = (_0x2ba7b7 ? _0x2ba7b7 : this['height']) * _0x46eff7;
				ig['system']['context']['drawImage'](this['data'], _0x3ca73c ? _0x3ca73c * _0x46eff7 : 0x0, _0x149483 ? _0x149483 * _0x46eff7 : 0x0, _0x88c994, _0x2ba7b7, ig['system']['getDrawPos'](_0x581a8a), ig['system']['getDrawPos'](_0x1d2610), _0x88c994, _0x2ba7b7);
				ig['Image']['drawCount']++;
			}
		},
		'drawTile': function(_0x2373b9, _0x3f3eb7, _0x3075d0, _0x909644, _0x8f1522, _0x3c1bd8, _0x2f57a7) {
			_0x8f1522 = _0x8f1522 ? _0x8f1522 : _0x909644;
			if (this['loaded'] && !(_0x909644 > this['width'] || _0x8f1522 > this['height'])) {
				var _0x353845 = ig['system']['scale'],
					_0x2cb591 = Math['floor'](_0x909644 * _0x353845),
					_0x3cac20 = Math['floor'](_0x8f1522 * _0x353845),
					_0x358c41 = _0x3c1bd8 ? -0x1 : 0x1,
					_0x12bc94 = _0x2f57a7 ? -0x1 : 0x1;
				if (_0x3c1bd8 || _0x2f57a7) ig['system']['context']['save'](), ig['system']['context']['scale'](_0x358c41, _0x12bc94);
				ig['system']['context']['drawImage'](this['data'], Math['floor'](_0x3075d0 * _0x909644) % this['width'] * _0x353845, Math['floor'](_0x3075d0 * _0x909644 / this['width']) * _0x8f1522 * _0x353845, _0x2cb591, _0x3cac20, ig['system']['getDrawPos'](_0x2373b9) * _0x358c41 - (_0x3c1bd8 ? _0x2cb591 : 0x0), ig['system']['getDrawPos'](_0x3f3eb7) * _0x12bc94 - (_0x2f57a7 ? _0x3cac20 : 0x0), _0x2cb591, _0x3cac20);
				(_0x3c1bd8 || _0x2f57a7) && ig['system']['context']['restore']();
				ig['Image']['drawCount']++;
			}
		}
	});
	ig['Image']['drawCount'] = 0x0;
	ig['Image']['cache'] = {};
	ig['Image']['reloadCache'] = function() {
		for (var _0x49b350 in ig['Image']['cache']) ig['Image']['cache'][_0x49b350]['reload']();
	};
});
ig['baked'] = !0x0;
ig['module']('impact.font')['requires']('impact.image')['defines'](function() {
	ig['Font'] = ig['Image']['extend']({
		'widthMap': [],
		'indices': [],
		'firstChar': 0x20,
		'alpha': 0x1,
		'letterSpacing': 0x1,
		'lineSpacing': 0x0,
		'onload': function(_0x41fb50) {
			this['_loadMetrics'](this['data']);
			this['parent'](_0x41fb50);
		},
		'widthForString': function(_0x23539d) {
			if (-0x1 !== _0x23539d['indexOf']('\x0a')) {
				_0x23539d = _0x23539d['split']('\x0a');
				for (var _0x567427 = 0x0, _0x504f0b = 0x0; _0x504f0b < _0x23539d['length']; _0x504f0b++) _0x567427 = Math['max'](_0x567427, this['_widthForLine'](_0x23539d[_0x504f0b]));
				return _0x567427;
			}
			return this['_widthForLine'](_0x23539d);
		},
		'_widthForLine': function(_0x36e2a8) {
			for (var _0x3d6e4f = 0x0, _0xef5276 = 0x0; _0xef5276 < _0x36e2a8['length']; _0xef5276++) _0x3d6e4f += this['widthMap'][_0x36e2a8['charCodeAt'](_0xef5276) - this['firstChar']] + this['letterSpacing'];
			return _0x3d6e4f;
		},
		'heightForString': function(_0x178848) {
			return _0x178848['split']('\x0a')['length'] * (this['height'] + this['lineSpacing']);
		},
		'draw': function(_0x517ed2, _0x1dcff7, _0x327db, _0x2d8f81) {
			'string' != typeof _0x517ed2 && (_0x517ed2 = _0x517ed2['toString']());
			if (-0x1 !== _0x517ed2['indexOf']('\x0a')) {
				_0x517ed2 = _0x517ed2['split']('\x0a');
				for (var _0x5ac398 = this['height'] + this['lineSpacing'], _0x1e9833 = 0x0; _0x1e9833 < _0x517ed2['length']; _0x1e9833++) this['draw'](_0x517ed2[_0x1e9833], _0x1dcff7, _0x327db + _0x1e9833 * _0x5ac398, _0x2d8f81);
			} else {
				if (_0x2d8f81 == ig['Font']['ALIGN']['RIGHT'] || _0x2d8f81 == ig['Font']['ALIGN']['CENTER']) _0x1e9833 = this['_widthForLine'](_0x517ed2), _0x1dcff7 -= _0x2d8f81 == ig['Font']['ALIGN']['CENTER'] ? _0x1e9833 / 0x2 : _0x1e9833;
				0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
				for (_0x1e9833 = 0x0; _0x1e9833 < _0x517ed2['length']; _0x1e9833++) _0x2d8f81 = _0x517ed2['charCodeAt'](_0x1e9833), _0x1dcff7 += this['_drawChar'](_0x2d8f81 - this['firstChar'], _0x1dcff7, _0x327db);
				0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1);
				ig['Image']['drawCount'] += _0x517ed2['length'];
			}
		},
		'_drawChar': function(_0x4966f2, _0x119009, _0x18f816) {
			if (!this['loaded'] || 0x0 > _0x4966f2 || _0x4966f2 >= this['indices']['length']) return 0x0;
			var _0x25fabf = ig['system']['scale'],
				_0x2da1aa = this['widthMap'][_0x4966f2] * _0x25fabf,
				_0x17efe1 = (this['height'] - 0x2) * _0x25fabf;
			ig['system']['context']['drawImage'](this['data'], this['indices'][_0x4966f2] * _0x25fabf, 0x0, _0x2da1aa, _0x17efe1, ig['system']['getDrawPos'](_0x119009), ig['system']['getDrawPos'](_0x18f816), _0x2da1aa, _0x17efe1);
			return this['widthMap'][_0x4966f2] + this['letterSpacing'];
		},
		'_loadMetrics': function(_0x357a45) {
			this['height'] = _0x357a45['height'] - 0x1;
			this['widthMap'] = [];
			this['indices'] = [];
			for (var _0x27b7ad = ig['getImagePixels'](_0x357a45, 0x0, _0x357a45['height'] - 0x1, _0x357a45['width'], 0x1), _0x37c049 = 0x0, _0x1973bc = 0x0, _0x256da6 = 0x0; _0x256da6 < _0x357a45['width']; _0x256da6++) {
				var _0x3418c7 = 0x4 * _0x256da6 + 0x3;
				0x7f < _0x27b7ad['data'][_0x3418c7] ? _0x1973bc++ : 0x80 > _0x27b7ad['data'][_0x3418c7] && _0x1973bc && (this['widthMap']['push'](_0x1973bc), this['indices']['push'](_0x256da6 - _0x1973bc), _0x37c049++, _0x1973bc = 0x0);
			}
			this['widthMap']['push'](_0x1973bc);
			this['indices']['push'](_0x256da6 - _0x1973bc);
		}
	});
	ig['Font']['ALIGN'] = {
		'LEFT': 0x0,
		'RIGHT': 0x1,
		'CENTER': 0x2
	};
});
ig['baked'] = !0x0;
ig['module']('impact.sound')['defines'](function() {
	ig['SoundManager'] = ig['Class']['extend']({
		'clips': {},
		'volume': 0x1,
		'format': null,
		'init': function() {
			if (!ig['Sound']['enabled'] || !window['Audio']) ig['Sound']['enabled'] = !0x1;
			else {
				for (var _0x2d478a = new Audio(), _0x9941bc = 0x0; _0x9941bc < ig['Sound']['use']['length']; _0x9941bc++) {
					var _0x1ddb5a = ig['Sound']['use'][_0x9941bc];
					if (_0x2d478a['canPlayType'](_0x1ddb5a['mime'])) {
						this['format'] = _0x1ddb5a;
						break;
					}
				}
				this['format'] || (ig['Sound']['enabled'] = !0x1);
			}
		},
		'load': function(_0x58d393, _0x4d4251, _0x265282) {
			var _0x3c8fdc = ig['prefix'] + _0x58d393['replace'](/[^\.]+$/, this['format']['ext']) + ig['nocache'];
			if (this['clips'][_0x58d393]) {
				if (_0x4d4251 && this['clips'][_0x58d393]['length'] < ig['Sound']['channels'])
					for (_0x4d4251 = this['clips'][_0x58d393]['length']; _0x4d4251 < ig['Sound']['channels']; _0x4d4251++) {
						var _0x7d6b1 = new Audio(_0x3c8fdc);
						_0x7d6b1['load']();
						this['clips'][_0x58d393]['push'](_0x7d6b1);
					}
				return this['clips'][_0x58d393][0x0];
			}
			var _0x3c6e1f = new Audio(_0x3c8fdc);
			_0x265282 && (_0x3c6e1f['addEventListener']('canplaythrough', function _0x4fd235(_0x2577d5) {
				_0x3c6e1f['removeEventListener']('canplaythrough', _0x4fd235, !0x1);
				_0x265282(_0x58d393, !0x0, _0x2577d5);
			}, !0x1), _0x3c6e1f['addEventListener']('error', function(_0x447332) {
				_0x265282(_0x58d393, !0x1, _0x447332);
			}, !0x1));
			_0x3c6e1f['preload'] = 'auto';
			_0x3c6e1f['load']();
			this['clips'][_0x58d393] = [_0x3c6e1f];
			if (_0x4d4251)
				for (_0x4d4251 = 0x1; _0x4d4251 < ig['Sound']['channels']; _0x4d4251++) _0x7d6b1 = new Audio(_0x3c8fdc), _0x7d6b1['load'](), this['clips'][_0x58d393]['push'](_0x7d6b1);
			return _0x3c6e1f;
		},
		'get': function(_0x234f3f) {
			_0x234f3f = this['clips'][_0x234f3f];
			for (var _0x2822dd = 0x0, _0x49535f; _0x49535f = _0x234f3f[_0x2822dd++];)
				if (_0x49535f['paused'] || _0x49535f['ended']) return _0x49535f['ended'] && (_0x49535f['currentTime'] = 0x0), _0x49535f;
			_0x234f3f[0x0]['pause']();
			_0x234f3f[0x0]['currentTime'] = 0x0;
			return _0x234f3f[0x0];
		}
	});
	ig['Music'] = ig['Class']['extend']({
		'tracks': [],
		'namedTracks': {},
		'currentTrack': null,
		'currentIndex': 0x0,
		'random': !0x1,
		'_volume': 0x1,
		'_loop': !0x1,
		'_fadeInterval': 0x0,
		'_fadeTimer': null,
		'_endedCallbackBound': null,
		'init': function() {
			this['_endedCallbackBound'] = this['_endedCallback']['bind'](this);
			Object['defineProperty'] ? (Object['defineProperty'](this, 'volume', {
				'get': this['getVolume']['bind'](this),
				'set': this['setVolume']['bind'](this)
			}), Object['defineProperty'](this, 'loop', {
				'get': this['getLooping']['bind'](this),
				'set': this['setLooping']['bind'](this)
			})) : this['__defineGetter__'] && (this['__defineGetter__']('volume', this['getVolume']['bind'](this)), this['__defineSetter__']('volume', this['setVolume']['bind'](this)), this['__defineGetter__']('loop', this['getLooping']['bind'](this)), this['__defineSetter__']('loop', this['setLooping']['bind'](this)));
		},
		'add': function(_0x1e8765, _0x1f6e73) {
			if (ig['Sound']['enabled']) {
				var _0x4f62de = ig['soundManager']['load'](_0x1e8765 instanceof ig['Sound'] ? _0x1e8765['path'] : _0x1e8765, !0x1);
				_0x4f62de['loop'] = this['_loop'];
				_0x4f62de['volume'] = this['_volume'];
				_0x4f62de['addEventListener']('ended', this['_endedCallbackBound'], !0x1);
				this['tracks']['push'](_0x4f62de);
				_0x1f6e73 && (this['namedTracks'][_0x1f6e73] = _0x4f62de);
				this['currentTrack'] || (this['currentTrack'] = _0x4f62de);
			}
		},
		'next': function() {
			this['tracks']['length'] && (this['stop'](), this['currentIndex'] = this['random'] ? Math['floor'](Math['random']() * this['tracks']['length']) : (this['currentIndex'] + 0x1) % this['tracks']['length'], this['currentTrack'] = this['tracks'][this['currentIndex']], this['play']());
		},
		'pause': function() {
			this['currentTrack'] && this['currentTrack']['pause']();
		},
		'stop': function() {
			this['currentTrack'] && (this['currentTrack']['pause'](), this['currentTrack']['currentTime'] = 0x0);
		},
		'play': function(_0xe8126e) {
			if (_0xe8126e && this['namedTracks'][_0xe8126e]) _0xe8126e = this['namedTracks'][_0xe8126e], _0xe8126e != this['currentTrack'] && (this['stop'](), this['currentTrack'] = _0xe8126e);
			else if (!this['currentTrack']) return;
			this['currentTrack']['play']();
		},
		'getLooping': function() {
			return this['_loop'];
		},
		'setLooping': function(_0x2d0491) {
			this['_loop'] = _0x2d0491;
			for (var _0x3e627f in this['tracks']) this['tracks'][_0x3e627f]['loop'] = _0x2d0491;
		},
		'getVolume': function() {
			return this['_volume'];
		},
		'setVolume': function(_0x378f99) {
			this['_volume'] = _0x378f99['limit'](0x0, 0x1);
			for (var _0x34d114 in this['tracks']) this['tracks'][_0x34d114]['volume'] = this['_volume'];
		},
		'fadeOut': function(_0xf644c9) {
			this['currentTrack'] && (clearInterval(this['_fadeInterval']), this['fadeTimer'] = new ig['Timer'](_0xf644c9), this['_fadeInterval'] = setInterval(this['_fadeStep']['bind'](this), 0x32));
		},
		'_fadeStep': function() {
			var _0x1f6121 = this['fadeTimer']['delta']()['map'](-this['fadeTimer']['target'], 0x0, 0x1, 0x0)['limit'](0x0, 0x1) * this['_volume'];
			0.01 >= _0x1f6121 ? (this['stop'](), this['currentTrack']['volume'] = this['_volume'], clearInterval(this['_fadeInterval'])) : this['currentTrack']['volume'] = _0x1f6121;
		},
		'_endedCallback': function() {
			this['_loop'] ? this['play']() : this['next']();
		}
	});
	ig['Sound'] = ig['Class']['extend']({
		'path': '',
		'volume': 0x1,
		'currentClip': null,
		'multiChannel': !0x0,
		'init': function(_0x41098b, _0x587ea1) {
			this['path'] = _0x41098b;
			this['multiChannel'] = !0x1 !== _0x587ea1;
			this['load']();
		},
		'load': function(_0x218c4e) {
			ig['Sound']['enabled'] ? ig['ready'] ? ig['soundManager']['load'](this['path'], this['multiChannel'], _0x218c4e) : ig['addResource'](this) : _0x218c4e && _0x218c4e(this['path'], !0x0);
		},
		'play': function() {
			ig['Sound']['enabled'] && (this['currentClip'] = ig['soundManager']['get'](this['path']), this['currentClip']['volume'] = ig['soundManager']['volume'] * this['volume'], this['currentClip']['play']());
		},
		'stop': function() {
			this['currentClip'] && (this['currentClip']['pause'](), this['currentClip']['currentTime'] = 0x0);
		}
	});
	ig['Sound']['FORMAT'] = {
		'MP3': {
			'ext': 'mp3',
			'mime': 'audio/mpeg'
		},
		'M4A': {
			'ext': 'm4a',
			'mime': 'audio/mp4;\x20codecs=mp4a'
		},
		'OGG': {
			'ext': 'ogg',
			'mime': 'audio/ogg;\x20codecs=vorbis'
		},
		'WEBM': {
			'ext': 'webm',
			'mime': 'audio/webm;\x20codecs=vorbis'
		},
		'CAF': {
			'ext': 'caf',
			'mime': 'audio/x-caf'
		}
	};
	ig['Sound']['use'] = [ig['Sound']['FORMAT']['OGG'], ig['Sound']['FORMAT']['MP3']];
	ig['Sound']['channels'] = 0x4;
	ig['Sound']['enabled'] = !0x0;
});
ig['baked'] = !0x0;
ig['module']('impact.loader')['requires']('impact.image', 'impact.font', 'impact.sound')['defines'](function() {
	ig['Loader'] = ig['Class']['extend']({
		'resources': [],
		'gameClass': null,
		'status': 0x0,
		'done': !0x1,
		'_unloaded': [],
		'_drawStatus': 0x0,
		'_intervalId': 0x0,
		'_loadCallbackBound': null,
		'init': function(_0x51628d, _0x2fbd1f) {
			this['gameClass'] = _0x51628d;
			this['resources'] = _0x2fbd1f;
			this['_loadCallbackBound'] = this['_loadCallback']['bind'](this);
			for (var _0x1e528f = 0x0; _0x1e528f < this['resources']['length']; _0x1e528f++) this['_unloaded']['push'](this['resources'][_0x1e528f]['path']);
		},
		'load': function() {
			ig['system']['clear']('#000');
			if (this['resources']['length']) {
				for (var _0x3ccdc2 = 0x0; _0x3ccdc2 < this['resources']['length']; _0x3ccdc2++) this['loadResource'](this['resources'][_0x3ccdc2]);
				this['_intervalId'] = setInterval(this['draw']['bind'](this), 0x10);
			} else this['end']();
		},
		'loadResource': function(_0x45fe0f) {
			_0x45fe0f['load'](this['_loadCallbackBound']);
		},
		'end': function() {
			this['done'] || (this['done'] = !0x0, clearInterval(this['_intervalId']));
		},
		'draw': function() {},
		'_loadCallback': function(_0x27aaa4, _0x1e2f17) {
			if (_0x1e2f17) this['_unloaded']['erase'](_0x27aaa4);
			else throw 'Failed\x20to\x20load\x20resource:\x20' + _0x27aaa4;
			this['status'] = 0x1 - this['_unloaded']['length'] / this['resources']['length'];
			0x0 == this['_unloaded']['length'] && setTimeout(this['end']['bind'](this), 0xfa);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('impact.timer')['defines'](function() {
	ig['Timer'] = ig['Class']['extend']({
		'target': 0x0,
		'base': 0x0,
		'last': 0x0,
		'pausedAt': 0x0,
		'init': function(_0x545e87) {
			this['last'] = this['base'] = ig['Timer']['time'];
			this['target'] = _0x545e87 || 0x0;
		},
		'set': function(_0x14c702) {
			this['target'] = _0x14c702 || 0x0;
			this['base'] = ig['Timer']['time'];
			this['pausedAt'] = 0x0;
		},
		'reset': function() {
			this['base'] = ig['Timer']['time'];
			this['pausedAt'] = 0x0;
		},
		'tick': function() {
			var _0x355cba = ig['Timer']['time'] - this['last'];
			this['last'] = ig['Timer']['time'];
			return this['pausedAt'] ? 0x0 : _0x355cba;
		},
		'delta': function() {
			return (this['pausedAt'] || ig['Timer']['time']) - this['base'] - this['target'];
		},
		'pause': function() {
			this['pausedAt'] || (this['pausedAt'] = ig['Timer']['time']);
		},
		'unpause': function() {
			this['pausedAt'] && (this['base'] += ig['Timer']['time'] - this['pausedAt'], this['pausedAt'] = 0x0);
		}
	});
	ig['Timer']['_last'] = 0x0;
	ig['Timer']['time'] = Number['MIN_VALUE'];
	ig['Timer']['timeScale'] = 0x1;
	ig['Timer']['maxStep'] = 0.05;
	ig['Timer']['step'] = function() {
		var _0x134f5a = Date['now']();
		ig['Timer']['time'] += Math['min']((_0x134f5a - ig['Timer']['_last']) / 0x3e8, ig['Timer']['maxStep']) * ig['Timer']['timeScale'];
		ig['Timer']['_last'] = _0x134f5a;
	};
});
ig['baked'] = !0x0;
ig['module']('impact.system')['requires']('impact.timer', 'impact.image')['defines'](function() {
	ig['System'] = ig['Class']['extend']({
		'fps': 0x1e,
		'width': 0x140,
		'height': 0xf0,
		'realWidth': 0x140,
		'realHeight': 0xf0,
		'scale': 0x1,
		'tick': 0x0,
		'animationId': 0x0,
		'newGameClass': null,
		'running': !0x1,
		'delegate': null,
		'clock': null,
		'canvas': null,
		'context': null,
		'init': function(_0x471d56, _0x511ae1, _0x3668b8, _0x27941c, _0x232e90) {
			this['fps'] = _0x511ae1;
			this['clock'] = new ig['Timer']();
			this['canvas'] = ig['$'](_0x471d56);
			this['resize'](_0x3668b8, _0x27941c, _0x232e90);
			this['context'] = this['canvas']['getContext']('2d');
			this['getDrawPos'] = ig['System']['drawMode'];
			0x1 != this['scale'] && (ig['System']['scaleMode'] = ig['System']['SCALE']['CRISP']);
			ig['System']['scaleMode'](this['canvas'], this['context']);
		},
		'resize': function(_0x5c5d3b, _0x473729, _0xbf2942) {
			this['width'] = _0x5c5d3b;
			this['height'] = _0x473729;
			this['scale'] = _0xbf2942 || this['scale'];
			this['realWidth'] = this['width'] * this['scale'];
			this['realHeight'] = this['height'] * this['scale'];
			this['canvas']['width'] = this['realWidth'];
			this['canvas']['height'] = this['realHeight'];
		},
		'setGame': function(_0x196259) {
			this['running'] ? this['newGameClass'] = _0x196259 : this['setGameNow'](_0x196259);
		},
		'setGameNow': function(_0xc2e659) {
			ig['game'] = new _0xc2e659();
			ig['system']['setDelegate'](ig['game']);
		},
		'setDelegate': function(_0x1c75ea) {
			if ('function' == typeof _0x1c75ea['run']) this['delegate'] = _0x1c75ea, this['startRunLoop']();
			else throw 'System.setDelegate:\x20No\x20run()\x20function\x20in\x20object';
		},
		'stopRunLoop': function() {
			ig['clearAnimation'](this['animationId']);
			this['running'] = !0x1;
		},
		'startRunLoop': function() {
			this['stopRunLoop']();
			this['animationId'] = ig['setAnimation'](this['run']['bind'](this), this['canvas']);
			this['running'] = !0x0;
		},
		'clear': function(_0x135327) {
			this['context']['fillStyle'] = _0x135327;
			this['context']['fillRect'](0x0, 0x0, this['realWidth'], this['realHeight']);
		},
		'run': function() {
			ig['Timer']['step']();
			this['tick'] = this['clock']['tick']();
			this['delegate']['run']();
			ig['input']['clearPressed']();
			this['newGameClass'] && (this['setGameNow'](this['newGameClass']), this['newGameClass'] = null);
		},
		'getDrawPos': null
	});
	ig['System']['DRAW'] = {
		'AUTHENTIC': function(_0x55d7ac) {
			return Math['round'](_0x55d7ac) * this['scale'];
		},
		'SMOOTH': function(_0x53709c) {
			return Math['round'](_0x53709c * this['scale']);
		},
		'SUBPIXEL': function(_0x32170f) {
			return _0x32170f * this['scale'];
		}
	};
	ig['System']['drawMode'] = ig['System']['DRAW']['SMOOTH'];
	ig['System']['SCALE'] = {
		'CRISP': function(_0x129acd, _0x273251) {
			ig['setVendorAttribute'](_0x273251, 'imageSmoothingEnabled', !0x1);
			_0x129acd['style']['imageRendering'] = '-moz-crisp-edges';
			_0x129acd['style']['imageRendering'] = '-o-crisp-edges';
			_0x129acd['style']['imageRendering'] = '-webkit-optimize-contrast';
			_0x129acd['style']['imageRendering'] = 'crisp-edges';
			_0x129acd['style']['msInterpolationMode'] = 'nearest-neighbor';
		},
		'SMOOTH': function(_0x44a8cf, _0x4426e6) {
			ig['setVendorAttribute'](_0x4426e6, 'imageSmoothingEnabled', !0x0);
			_0x44a8cf['style']['imageRendering'] = '';
			_0x44a8cf['style']['msInterpolationMode'] = '';
		}
	};
	ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH'];
});
ig['baked'] = !0x0;
ig['module']('impact.input')['defines'](function() {
	ig['KEY'] = {
		'MOUSE1': -0x1,
		'MOUSE2': -0x3,
		'MWHEEL_UP': -0x4,
		'MWHEEL_DOWN': -0x5,
		'BACKSPACE': 0x8,
		'TAB': 0x9,
		'ENTER': 0xd,
		'PAUSE': 0x13,
		'CAPS': 0x14,
		'ESC': 0x1b,
		'SPACE': 0x20,
		'PAGE_UP': 0x21,
		'PAGE_DOWN': 0x22,
		'END': 0x23,
		'HOME': 0x24,
		'LEFT_ARROW': 0x25,
		'UP_ARROW': 0x26,
		'RIGHT_ARROW': 0x27,
		'DOWN_ARROW': 0x28,
		'INSERT': 0x2d,
		'DELETE': 0x2e,
		'_0': 0x30,
		'_1': 0x31,
		'_2': 0x32,
		'_3': 0x33,
		'_4': 0x34,
		'_5': 0x35,
		'_6': 0x36,
		'_7': 0x37,
		'_8': 0x38,
		'_9': 0x39,
		'A': 0x41,
		'B': 0x42,
		'C': 0x43,
		'D': 0x44,
		'E': 0x45,
		'F': 0x46,
		'G': 0x47,
		'H': 0x48,
		'I': 0x49,
		'J': 0x4a,
		'K': 0x4b,
		'L': 0x4c,
		'M': 0x4d,
		'N': 0x4e,
		'O': 0x4f,
		'P': 0x50,
		'Q': 0x51,
		'R': 0x52,
		'S': 0x53,
		'T': 0x54,
		'U': 0x55,
		'V': 0x56,
		'W': 0x57,
		'X': 0x58,
		'Y': 0x59,
		'Z': 0x5a,
		'NUMPAD_0': 0x60,
		'NUMPAD_1': 0x61,
		'NUMPAD_2': 0x62,
		'NUMPAD_3': 0x63,
		'NUMPAD_4': 0x64,
		'NUMPAD_5': 0x65,
		'NUMPAD_6': 0x66,
		'NUMPAD_7': 0x67,
		'NUMPAD_8': 0x68,
		'NUMPAD_9': 0x69,
		'MULTIPLY': 0x6a,
		'ADD': 0x6b,
		'SUBSTRACT': 0x6d,
		'DECIMAL': 0x6e,
		'DIVIDE': 0x6f,
		'F1': 0x70,
		'F2': 0x71,
		'F3': 0x72,
		'F4': 0x73,
		'F5': 0x74,
		'F6': 0x75,
		'F7': 0x76,
		'F8': 0x77,
		'F9': 0x78,
		'F10': 0x79,
		'F11': 0x7a,
		'F12': 0x7b,
		'SHIFT': 0x10,
		'CTRL': 0x11,
		'ALT': 0x12,
		'PLUS': 0xbb,
		'COMMA': 0xbc,
		'MINUS': 0xbd,
		'PERIOD': 0xbe
	};
	ig['Input'] = ig['Class']['extend']({
		'bindings': {},
		'actions': {},
		'presses': {},
		'locks': {},
		'delayedKeyup': {},
		'isUsingMouse': !0x1,
		'isUsingKeyboard': !0x1,
		'isUsingAccelerometer': !0x1,
		'mouse': {
			'x': 0x0,
			'y': 0x0
		},
		'accel': {
			'x': 0x0,
			'y': 0x0,
			'z': 0x0
		},
		'initMouse': function() {
			if (!this['isUsingMouse']) {
				this['isUsingMouse'] = !0x0;
				var _0x12c62e = this['mousewheel']['bind'](this);
				ig['system']['canvas']['addEventListener']('mousewheel', _0x12c62e, !0x1);
				ig['system']['canvas']['addEventListener']('DOMMouseScroll', _0x12c62e, !0x1);
				ig['system']['canvas']['addEventListener']('contextmenu', this['contextmenu']['bind'](this), !0x1);
				ig['system']['canvas']['addEventListener']('mousedown', this['keydown']['bind'](this), !0x1);
				ig['system']['canvas']['addEventListener']('mouseup', this['keyup']['bind'](this), !0x1);
				ig['system']['canvas']['addEventListener']('mousemove', this['mousemove']['bind'](this), !0x1);
				ig['ua']['touchDevice'] && (ig['system']['canvas']['addEventListener']('touchstart', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerDown', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['style']['msTouchAction'] = 'none');
			}
		},
		'initKeyboard': function() {
			this['isUsingKeyboard'] || (this['isUsingKeyboard'] = !0x0, window['addEventListener']('keydown', this['keydown']['bind'](this), !0x1), window['addEventListener']('keyup', this['keyup']['bind'](this), !0x1));
		},
		'initAccelerometer': function() {
			this['isUsingAccelerometer'] || window['addEventListener']('devicemotion', this['devicemotion']['bind'](this), !0x1);
		},
		'mousewheel': function(_0x5b0862) {
			var _0x7c3af9 = this['bindings'][0x0 < (_0x5b0862['wheelDelta'] ? _0x5b0862['wheelDelta'] : -0x1 * _0x5b0862['detail']) ? ig['KEY']['MWHEEL_UP'] : ig['KEY']['MWHEEL_DOWN']];
			_0x7c3af9 && (this['actions'][_0x7c3af9] = !0x0, this['presses'][_0x7c3af9] = !0x0, this['delayedKeyup'][_0x7c3af9] = !0x0, _0x5b0862['stopPropagation'](), _0x5b0862['preventDefault']());
		},
		'mousemove': function(_0x3ee879) {
			var _0x357ace = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
			ig['ua']['mobile'] && (_0x357ace = ig['system']['realWidth']);
			var _0x357ace = ig['system']['scale'] * (_0x357ace / ig['system']['realWidth']),
				_0x373054 = {
					'left': 0x0,
					'top': 0x0
				};
			ig['system']['canvas']['getBoundingClientRect'] && (_0x373054 = ig['system']['canvas']['getBoundingClientRect']());
			_0x3ee879 = _0x3ee879['touches'] ? _0x3ee879['touches'][0x0] : _0x3ee879;
			this['mouse']['x'] = (_0x3ee879['clientX'] - _0x373054['left']) / _0x357ace;
			this['mouse']['y'] = (_0x3ee879['clientY'] - _0x373054['top']) / _0x357ace;
		},
		'contextmenu': function(_0x18dd09) {
			this['bindings'][ig['KEY']['MOUSE2']] && (_0x18dd09['stopPropagation'](), _0x18dd09['preventDefault']());
		},
		'keydown': function(_0x3f839e) {
			var _0x2cca53 = _0x3f839e['target']['tagName'];
			if (!('INPUT' == _0x2cca53 || 'TEXTAREA' == _0x2cca53))
				if (_0x2cca53 = 'keydown' == _0x3f839e['type'] ? _0x3f839e['keyCode'] : 0x2 == _0x3f839e['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], ('touchstart' == _0x3f839e['type'] || 'mousedown' == _0x3f839e['type']) && this['mousemove'](_0x3f839e), _0x2cca53 = this['bindings'][_0x2cca53]) this['actions'][_0x2cca53] = !0x0, this['locks'][_0x2cca53] || (this['presses'][_0x2cca53] = !0x0, this['locks'][_0x2cca53] = !0x0), _0x3f839e['stopPropagation'](), _0x3f839e['preventDefault']();
		},
		'keyup': function(_0x436946) {
			var _0x538c72 = _0x436946['target']['tagName'];
			if (!('INPUT' == _0x538c72 || 'TEXTAREA' == _0x538c72))
				if (_0x538c72 = this['bindings']['keyup' == _0x436946['type'] ? _0x436946['keyCode'] : 0x2 == _0x436946['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']]) this['delayedKeyup'][_0x538c72] = !0x0, _0x436946['stopPropagation'](), _0x436946['preventDefault']();
		},
		'devicemotion': function(_0x4c1280) {
			this['accel'] = _0x4c1280['accelerationIncludingGravity'];
		},
		'bind': function(_0x2dfa3f, _0x1bb59b) {
			0x0 > _0x2dfa3f ? this['initMouse']() : 0x0 < _0x2dfa3f && this['initKeyboard']();
			this['bindings'][_0x2dfa3f] = _0x1bb59b;
		},
		'bindTouch': function(_0x1a4e97, _0x1ae1ad) {
			var _0x3c431f = ig['$'](_0x1a4e97),
				_0x14cabd = this;
			_0x3c431f['addEventListener']('touchstart', function(_0x4b9da0) {
				_0x14cabd['touchStart'](_0x4b9da0, _0x1ae1ad);
			}, !0x1);
			_0x3c431f['addEventListener']('touchend', function(_0x4710dc) {
				_0x14cabd['touchEnd'](_0x4710dc, _0x1ae1ad);
			}, !0x1);
			_0x3c431f['addEventListener']('MSPointerDown', function(_0x4f7109) {
				_0x14cabd['touchStart'](_0x4f7109, _0x1ae1ad);
			}, !0x1);
			_0x3c431f['addEventListener']('MSPointerUp', function(_0x179f17) {
				_0x14cabd['touchEnd'](_0x179f17, _0x1ae1ad);
			}, !0x1);
		},
		'unbind': function(_0x552e1e) {
			this['delayedKeyup'][this['bindings'][_0x552e1e]] = !0x0;
			this['bindings'][_0x552e1e] = null;
		},
		'unbindAll': function() {
			this['bindings'] = {};
			this['actions'] = {};
			this['presses'] = {};
			this['locks'] = {};
			this['delayedKeyup'] = {};
		},
		'state': function(_0x249653) {
			return this['actions'][_0x249653];
		},
		'pressed': function(_0x5971b5) {
			return this['presses'][_0x5971b5];
		},
		'released': function(_0x347272) {
			return !!this['delayedKeyup'][_0x347272];
		},
		'clearPressed': function() {
			for (var _0x58c03b in this['delayedKeyup']) this['actions'][_0x58c03b] = !0x1, this['locks'][_0x58c03b] = !0x1;
			this['delayedKeyup'] = {};
			this['presses'] = {};
		},
		'touchStart': function(_0x4feb81, _0xa05075) {
			this['actions'][_0xa05075] = !0x0;
			this['presses'][_0xa05075] = !0x0;
			_0x4feb81['stopPropagation']();
			_0x4feb81['preventDefault']();
			return !0x1;
		},
		'touchEnd': function(_0x639264, _0x1e5a3d) {
			this['delayedKeyup'][_0x1e5a3d] = !0x0;
			_0x639264['stopPropagation']();
			_0x639264['preventDefault']();
			return !0x1;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('impact.impact')['requires']('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound')['defines'](function() {
	ig['main'] = function(_0x57e41f, _0xfb6958, _0x50d683, _0x2b6830, _0x57ded9, _0x5cb85a, _0x2781b4) {
		ig['system'] = new ig['System'](_0x57e41f, _0x50d683, _0x2b6830, _0x57ded9, _0x5cb85a || 0x1);
		ig['input'] = new ig['Input']();
		ig['soundManager'] = new ig['SoundManager']();
		ig['music'] = new ig['Music']();
		ig['ready'] = !0x0;
		new(_0x2781b4 || ig['Loader'])(_0xfb6958, ig['resources'])['load']();
	};
});
ig['baked'] = !0x0;
ig['module']('impact.animation')['requires']('impact.timer', 'impact.image')['defines'](function() {
	ig['AnimationSheet'] = ig['Class']['extend']({
		'width': 0x8,
		'height': 0x8,
		'image': null,
		'init': function(_0x4a8d50, _0x5901f4, _0x5a727d) {
			this['width'] = _0x5901f4;
			this['height'] = _0x5a727d;
			this['image'] = new ig['Image'](_0x4a8d50);
		}
	});
	ig['Animation'] = ig['Class']['extend']({
		'sheet': null,
		'timer': null,
		'sequence': [],
		'flip': {
			'x': !0x1,
			'y': !0x1
		},
		'pivot': {
			'x': 0x0,
			'y': 0x0
		},
		'frame': 0x0,
		'tile': 0x0,
		'loopCount': 0x0,
		'alpha': 0x1,
		'angle': 0x0,
		'init': function(_0x3c8903, _0xa5e86f, _0x122956, _0x21c93b) {
			this['sheet'] = _0x3c8903;
			this['pivot'] = {
				'x': _0x3c8903['width'] / 0x2,
				'y': _0x3c8903['height'] / 0x2
			};
			this['timer'] = new ig['Timer']();
			this['frameTime'] = _0xa5e86f;
			this['sequence'] = _0x122956;
			this['stop'] = !!_0x21c93b;
			this['tile'] = this['sequence'][0x0];
		},
		'rewind': function() {
			this['timer']['set']();
			this['frame'] = this['loopCount'] = 0x0;
			this['tile'] = this['sequence'][0x0];
			return this;
		},
		'gotoFrame': function(_0x1adf9f) {
			this['timer']['set'](this['frameTime'] * -_0x1adf9f - 0.0001);
			this['update']();
		},
		'gotoRandomFrame': function() {
			this['gotoFrame'](Math['floor'](Math['random']() * this['sequence']['length']));
		},
		'update': function() {
			var _0xa8839c = Math['floor'](this['timer']['delta']() / this['frameTime']);
			this['loopCount'] = Math['floor'](_0xa8839c / this['sequence']['length']);
			this['frame'] = this['stop'] && 0x0 < this['loopCount'] ? this['sequence']['length'] - 0x1 : _0xa8839c % this['sequence']['length'];
			this['tile'] = this['sequence'][this['frame']];
		},
		'draw': function(_0x3f7cc6, _0x4170c1) {
			var _0x2fecd6 = Math['max'](this['sheet']['width'], this['sheet']['height']);
			_0x3f7cc6 > ig['system']['width'] || _0x4170c1 > ig['system']['height'] || (0x0 > _0x3f7cc6 + _0x2fecd6 || 0x0 > _0x4170c1 + _0x2fecd6) || (0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']), 0x0 == this['angle'] ? this['sheet']['image']['drawTile'](_0x3f7cc6, _0x4170c1, this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']) : (ig['system']['context']['save'](), ig['system']['context']['translate'](ig['system']['getDrawPos'](_0x3f7cc6 + this['pivot']['x']), ig['system']['getDrawPos'](_0x4170c1 + this['pivot']['y'])), ig['system']['context']['rotate'](this['angle']), this['sheet']['image']['drawTile'](-this['pivot']['x'], -this['pivot']['y'], this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']), ig['system']['context']['restore']()), 0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1));
		}
	});
});
ig['baked'] = !0x0;
ig['module']('impact.entity')['requires']('impact.animation', 'impact.impact')['defines'](function() {
	ig['Entity'] = ig['Class']['extend']({
		'id': 0x0,
		'settings': {},
		'size': {
			'x': 0x10,
			'y': 0x10
		},
		'offset': {
			'x': 0x0,
			'y': 0x0
		},
		'pos': {
			'x': 0x0,
			'y': 0x0
		},
		'last': {
			'x': 0x0,
			'y': 0x0
		},
		'vel': {
			'x': 0x0,
			'y': 0x0
		},
		'accel': {
			'x': 0x0,
			'y': 0x0
		},
		'friction': {
			'x': 0x0,
			'y': 0x0
		},
		'maxVel': {
			'x': 0x64,
			'y': 0x64
		},
		'zIndex': 0x0,
		'gravityFactor': 0x1,
		'standing': !0x1,
		'bounciness': 0x0,
		'minBounceVelocity': 0x28,
		'anims': {},
		'animSheet': null,
		'currentAnim': null,
		'health': 0xa,
		'type': 0x0,
		'checkAgainst': 0x0,
		'collides': 0x0,
		'_killed': !0x1,
		'slopeStanding': {
			'min': 0x2c['toRad'](),
			'max': 0x88['toRad']()
		},
		'init': function(_0x1caf5d, _0x53245a, _0x556a35) {
			this['id'] = ++ig['Entity']['_lastId'];
			this['pos']['x'] = this['last']['x'] = _0x1caf5d;
			this['pos']['y'] = this['last']['y'] = _0x53245a;
			ig['merge'](this, _0x556a35);
		},
		'reset': function(_0x599938, _0x4a0ad5, _0x24a2e2) {
			var _0x4325af = this['constructor']['prototype'];
			this['pos']['x'] = _0x599938;
			this['pos']['y'] = _0x4a0ad5;
			this['last']['x'] = _0x599938;
			this['last']['y'] = _0x4a0ad5;
			this['vel']['x'] = _0x4325af['vel']['x'];
			this['vel']['y'] = _0x4325af['vel']['y'];
			this['accel']['x'] = _0x4325af['accel']['x'];
			this['accel']['y'] = _0x4325af['accel']['y'];
			this['health'] = _0x4325af['health'];
			this['_killed'] = _0x4325af['_killed'];
			this['standing'] = _0x4325af['standing'];
			this['type'] = _0x4325af['type'];
			this['checkAgainst'] = _0x4325af['checkAgainst'];
			this['collides'] = _0x4325af['collides'];
			ig['merge'](this, _0x24a2e2);
		},
		'addAnim': function(_0x28b848, _0x39b0fc, _0x5a64a0, _0x124f27) {
			if (!this['animSheet']) throw 'No\x20animSheet\x20to\x20add\x20the\x20animation\x20' + _0x28b848 + '\x20to.';
			_0x39b0fc = new ig['Animation'](this['animSheet'], _0x39b0fc, _0x5a64a0, _0x124f27);
			this['anims'][_0x28b848] = _0x39b0fc;
			this['currentAnim'] || (this['currentAnim'] = _0x39b0fc);
			return _0x39b0fc;
		},
		'update': function() {
			this['last']['x'] = this['pos']['x'];
			this['last']['y'] = this['pos']['y'];
			this['vel']['y'] += ig['game']['gravity'] * ig['system']['tick'] * this['gravityFactor'];
			this['vel']['x'] = this['getNewVelocity'](this['vel']['x'], this['accel']['x'], this['friction']['x'], this['maxVel']['x']);
			this['vel']['y'] = this['getNewVelocity'](this['vel']['y'], this['accel']['y'], this['friction']['y'], this['maxVel']['y']);
			var _0x3a2ddd = ig['game']['collisionMap']['trace'](this['pos']['x'], this['pos']['y'], this['vel']['x'] * ig['system']['tick'], this['vel']['y'] * ig['system']['tick'], this['size']['x'], this['size']['y']);
			this['handleMovementTrace'](_0x3a2ddd);
			this['currentAnim'] && this['currentAnim']['update']();
		},
		'getNewVelocity': function(_0xbe3066, _0x3a2896, _0x52fb67, _0x23dd05) {
			return _0x3a2896 ? (_0xbe3066 + _0x3a2896 * ig['system']['tick'])['limit'](-_0x23dd05, _0x23dd05) : _0x52fb67 ? (_0x3a2896 = _0x52fb67 * ig['system']['tick'], 0x0 < _0xbe3066 - _0x3a2896 ? _0xbe3066 - _0x3a2896 : 0x0 > _0xbe3066 + _0x3a2896 ? _0xbe3066 + _0x3a2896 : 0x0) : _0xbe3066['limit'](-_0x23dd05, _0x23dd05);
		},
		'handleMovementTrace': function(_0x1a23da) {
			this['standing'] = !0x1;
			_0x1a23da['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0));
			_0x1a23da['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
			if (_0x1a23da['collision']['slope']) {
				var _0x5552cb = _0x1a23da['collision']['slope'];
				if (0x0 < this['bounciness']) {
					var _0x2d8c1 = this['vel']['x'] * _0x5552cb['nx'] + this['vel']['y'] * _0x5552cb['ny'];
					this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x5552cb['nx'] * _0x2d8c1) * this['bounciness'];
					this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x5552cb['ny'] * _0x2d8c1) * this['bounciness'];
				} else _0x2d8c1 = (this['vel']['x'] * _0x5552cb['x'] + this['vel']['y'] * _0x5552cb['y']) / (_0x5552cb['x'] * _0x5552cb['x'] + _0x5552cb['y'] * _0x5552cb['y']), this['vel']['x'] = _0x5552cb['x'] * _0x2d8c1, this['vel']['y'] = _0x5552cb['y'] * _0x2d8c1, _0x5552cb = Math['atan2'](_0x5552cb['x'], _0x5552cb['y']), _0x5552cb > this['slopeStanding']['min'] && _0x5552cb < this['slopeStanding']['max'] && (this['standing'] = !0x0);
			}
			this['pos'] = _0x1a23da['pos'];
		},
		'draw': function() {
			this['currentAnim'] && this['currentAnim']['draw'](this['pos']['x'] - this['offset']['x'] - ig['game']['_rscreen']['x'], this['pos']['y'] - this['offset']['y'] - ig['game']['_rscreen']['y']);
		},
		'kill': function() {
			ig['game']['removeEntity'](this);
		},
		'receiveDamage': function(_0x338e0a) {
			this['health'] -= _0x338e0a;
			0x0 >= this['health'] && this['kill']();
		},
		'touches': function(_0xe2fdb8) {
			return !(this['pos']['x'] >= _0xe2fdb8['pos']['x'] + _0xe2fdb8['size']['x'] || this['pos']['x'] + this['size']['x'] <= _0xe2fdb8['pos']['x'] || this['pos']['y'] >= _0xe2fdb8['pos']['y'] + _0xe2fdb8['size']['y'] || this['pos']['y'] + this['size']['y'] <= _0xe2fdb8['pos']['y']);
		},
		'distanceTo': function(_0xba8c88) {
			var _0x9e7785 = this['pos']['x'] + this['size']['x'] / 0x2 - (_0xba8c88['pos']['x'] + _0xba8c88['size']['x'] / 0x2);
			_0xba8c88 = this['pos']['y'] + this['size']['y'] / 0x2 - (_0xba8c88['pos']['y'] + _0xba8c88['size']['y'] / 0x2);
			return Math['sqrt'](_0x9e7785 * _0x9e7785 + _0xba8c88 * _0xba8c88);
		},
		'angleTo': function(_0x55b3dd) {
			return Math['atan2'](_0x55b3dd['pos']['y'] + _0x55b3dd['size']['y'] / 0x2 - (this['pos']['y'] + this['size']['y'] / 0x2), _0x55b3dd['pos']['x'] + _0x55b3dd['size']['x'] / 0x2 - (this['pos']['x'] + this['size']['x'] / 0x2));
		},
		'check': function() {},
		'collideWith': function() {},
		'ready': function() {},
		'erase': function() {}
	});
	ig['Entity']['_lastId'] = 0x0;
	ig['Entity']['COLLIDES'] = {
		'NEVER': 0x0,
		'LITE': 0x1,
		'PASSIVE': 0x2,
		'ACTIVE': 0x4,
		'FIXED': 0x8
	};
	ig['Entity']['TYPE'] = {
		'NONE': 0x0,
		'A': 0x1,
		'B': 0x2,
		'BOTH': 0x3
	};
	ig['Entity']['checkPair'] = function(_0x11e3c2, _0x9b1dd3) {
		_0x11e3c2['checkAgainst'] & _0x9b1dd3['type'] && _0x11e3c2['check'](_0x9b1dd3);
		_0x9b1dd3['checkAgainst'] & _0x11e3c2['type'] && _0x9b1dd3['check'](_0x11e3c2);
		_0x11e3c2['collides'] && _0x9b1dd3['collides'] && _0x11e3c2['collides'] + _0x9b1dd3['collides'] > ig['Entity']['COLLIDES']['ACTIVE'] && ig['Entity']['solveCollision'](_0x11e3c2, _0x9b1dd3);
	};
	ig['Entity']['solveCollision'] = function(_0x48fb59, _0x59d2fe) {
		var _0x106ef5 = null;
		if (_0x48fb59['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x59d2fe['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x106ef5 = _0x48fb59;
		else if (_0x59d2fe['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x48fb59['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x106ef5 = _0x59d2fe;
		_0x48fb59['last']['x'] + _0x48fb59['size']['x'] > _0x59d2fe['last']['x'] && _0x48fb59['last']['x'] < _0x59d2fe['last']['x'] + _0x59d2fe['size']['x'] ? (_0x48fb59['last']['y'] < _0x59d2fe['last']['y'] ? ig['Entity']['seperateOnYAxis'](_0x48fb59, _0x59d2fe, _0x106ef5) : ig['Entity']['seperateOnYAxis'](_0x59d2fe, _0x48fb59, _0x106ef5), _0x48fb59['collideWith'](_0x59d2fe, 'y'), _0x59d2fe['collideWith'](_0x48fb59, 'y')) : _0x48fb59['last']['y'] + _0x48fb59['size']['y'] > _0x59d2fe['last']['y'] && _0x48fb59['last']['y'] < _0x59d2fe['last']['y'] + _0x59d2fe['size']['y'] && (_0x48fb59['last']['x'] < _0x59d2fe['last']['x'] ? ig['Entity']['seperateOnXAxis'](_0x48fb59, _0x59d2fe, _0x106ef5) : ig['Entity']['seperateOnXAxis'](_0x59d2fe, _0x48fb59, _0x106ef5), _0x48fb59['collideWith'](_0x59d2fe, 'x'), _0x59d2fe['collideWith'](_0x48fb59, 'x'));
	};
	ig['Entity']['seperateOnXAxis'] = function(_0x485a80, _0x294871, _0x4bebdb) {
		var _0x24a719 = _0x485a80['pos']['x'] + _0x485a80['size']['x'] - _0x294871['pos']['x'];
		_0x4bebdb ? (_0x4bebdb['vel']['x'] = -_0x4bebdb['vel']['x'] * _0x4bebdb['bounciness'] + (_0x485a80 === _0x4bebdb ? _0x294871 : _0x485a80)['vel']['x'], _0x294871 = ig['game']['collisionMap']['trace'](_0x4bebdb['pos']['x'], _0x4bebdb['pos']['y'], _0x4bebdb == _0x485a80 ? -_0x24a719 : _0x24a719, 0x0, _0x4bebdb['size']['x'], _0x4bebdb['size']['y']), _0x4bebdb['pos']['x'] = _0x294871['pos']['x']) : (_0x4bebdb = (_0x485a80['vel']['x'] - _0x294871['vel']['x']) / 0x2, _0x485a80['vel']['x'] = -_0x4bebdb, _0x294871['vel']['x'] = _0x4bebdb, _0x4bebdb = ig['game']['collisionMap']['trace'](_0x485a80['pos']['x'], _0x485a80['pos']['y'], -_0x24a719 / 0x2, 0x0, _0x485a80['size']['x'], _0x485a80['size']['y']), _0x485a80['pos']['x'] = Math['floor'](_0x4bebdb['pos']['x']), _0x485a80 = ig['game']['collisionMap']['trace'](_0x294871['pos']['x'], _0x294871['pos']['y'], _0x24a719 / 0x2, 0x0, _0x294871['size']['x'], _0x294871['size']['y']), _0x294871['pos']['x'] = Math['ceil'](_0x485a80['pos']['x']));
	};
	ig['Entity']['seperateOnYAxis'] = function(_0x3cb674, _0x3e16c0, _0x3cbb2a) {
		var _0x614c90 = _0x3cb674['pos']['y'] + _0x3cb674['size']['y'] - _0x3e16c0['pos']['y'];
		if (_0x3cbb2a) {
			_0x3e16c0 = _0x3cb674 === _0x3cbb2a ? _0x3e16c0 : _0x3cb674;
			_0x3cbb2a['vel']['y'] = -_0x3cbb2a['vel']['y'] * _0x3cbb2a['bounciness'] + _0x3e16c0['vel']['y'];
			var _0x8a7d07 = 0x0;
			_0x3cbb2a == _0x3cb674 && Math['abs'](_0x3cbb2a['vel']['y'] - _0x3e16c0['vel']['y']) < _0x3cbb2a['minBounceVelocity'] && (_0x3cbb2a['standing'] = !0x0, _0x8a7d07 = _0x3e16c0['vel']['x'] * ig['system']['tick']);
			_0x3cb674 = ig['game']['collisionMap']['trace'](_0x3cbb2a['pos']['x'], _0x3cbb2a['pos']['y'], _0x8a7d07, _0x3cbb2a == _0x3cb674 ? -_0x614c90 : _0x614c90, _0x3cbb2a['size']['x'], _0x3cbb2a['size']['y']);
			_0x3cbb2a['pos']['y'] = _0x3cb674['pos']['y'];
			_0x3cbb2a['pos']['x'] = _0x3cb674['pos']['x'];
		} else ig['game']['gravity'] && (_0x3e16c0['standing'] || 0x0 < _0x3cb674['vel']['y']) ? (_0x3cbb2a = ig['game']['collisionMap']['trace'](_0x3cb674['pos']['x'], _0x3cb674['pos']['y'], 0x0, -(_0x3cb674['pos']['y'] + _0x3cb674['size']['y'] - _0x3e16c0['pos']['y']), _0x3cb674['size']['x'], _0x3cb674['size']['y']), _0x3cb674['pos']['y'] = _0x3cbb2a['pos']['y'], 0x0 < _0x3cb674['bounciness'] && _0x3cb674['vel']['y'] > _0x3cb674['minBounceVelocity'] ? _0x3cb674['vel']['y'] *= -_0x3cb674['bounciness'] : (_0x3cb674['standing'] = !0x0, _0x3cb674['vel']['y'] = 0x0)) : (_0x3cbb2a = (_0x3cb674['vel']['y'] - _0x3e16c0['vel']['y']) / 0x2, _0x3cb674['vel']['y'] = -_0x3cbb2a, _0x3e16c0['vel']['y'] = _0x3cbb2a, _0x8a7d07 = _0x3e16c0['vel']['x'] * ig['system']['tick'], _0x3cbb2a = ig['game']['collisionMap']['trace'](_0x3cb674['pos']['x'], _0x3cb674['pos']['y'], _0x8a7d07, -_0x614c90 / 0x2, _0x3cb674['size']['x'], _0x3cb674['size']['y']), _0x3cb674['pos']['y'] = _0x3cbb2a['pos']['y'], _0x3cb674 = ig['game']['collisionMap']['trace'](_0x3e16c0['pos']['x'], _0x3e16c0['pos']['y'], 0x0, _0x614c90 / 0x2, _0x3e16c0['size']['x'], _0x3e16c0['size']['y']), _0x3e16c0['pos']['y'] = _0x3cb674['pos']['y']);
	};
});
ig['baked'] = !0x0;
ig['module']('impact.map')['defines'](function() {
	ig['Map'] = ig['Class']['extend']({
		'tilesize': 0x8,
		'width': 0x1,
		'height': 0x1,
		'data': [
			[]
		],
		'name': null,
		'init': function(_0xd8cbca, _0x1ffcc6) {
			this['tilesize'] = _0xd8cbca;
			this['data'] = _0x1ffcc6;
			this['height'] = _0x1ffcc6['length'];
			this['width'] = _0x1ffcc6[0x0]['length'];
			this['pxWidth'] = this['width'] * this['tilesize'];
			this['pxHeight'] = this['height'] * this['tilesize'];
		},
		'getTile': function(_0x4981a9, _0x97bf62) {
			var _0x9dd6ac = Math['floor'](_0x4981a9 / this['tilesize']),
				_0x444848 = Math['floor'](_0x97bf62 / this['tilesize']);
			return 0x0 <= _0x9dd6ac && _0x9dd6ac < this['width'] && 0x0 <= _0x444848 && _0x444848 < this['height'] ? this['data'][_0x444848][_0x9dd6ac] : 0x0;
		},
		'setTile': function(_0x170821, _0x49c24c, _0x4d69d3) {
			_0x170821 = Math['floor'](_0x170821 / this['tilesize']);
			_0x49c24c = Math['floor'](_0x49c24c / this['tilesize']);
			0x0 <= _0x170821 && _0x170821 < this['width'] && 0x0 <= _0x49c24c && _0x49c24c < this['height'] && (this['data'][_0x49c24c][_0x170821] = _0x4d69d3);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('impact.collision-map')['requires']('impact.map')['defines'](function() {
	ig['CollisionMap'] = ig['Map']['extend']({
		'lastSlope': 0x1,
		'tiledef': null,
		'init': function(_0x234d0d, _0x4df821, _0x39438b) {
			this['parent'](_0x234d0d, _0x4df821);
			this['tiledef'] = _0x39438b || ig['CollisionMap']['defaultTileDef'];
			for (var _0x3c76ab in this['tiledef']) _0x3c76ab | 0x0 > this['lastSlope'] && (this['lastSlope'] = _0x3c76ab | 0x0);
		},
		'trace': function(_0xaad295, _0x5da15c, _0x1101f9, _0x889df4, _0x4c7d59, _0x20889b) {
			var _0x3f5ede = {
					'collision': {
						'x': !0x1,
						'y': !0x1,
						'slope': !0x1
					},
					'pos': {
						'x': _0xaad295,
						'y': _0x5da15c
					},
					'tile': {
						'x': 0x0,
						'y': 0x0
					}
				},
				_0x763e83 = Math['ceil'](Math['max'](Math['abs'](_0x1101f9), Math['abs'](_0x889df4)) / this['tilesize']);
			if (0x1 < _0x763e83)
				for (var _0x1f0ec9 = _0x1101f9 / _0x763e83, _0x1fba85 = _0x889df4 / _0x763e83, _0x674bca = 0x0; _0x674bca < _0x763e83 && (_0x1f0ec9 || _0x1fba85) && !(this['_traceStep'](_0x3f5ede, _0xaad295, _0x5da15c, _0x1f0ec9, _0x1fba85, _0x4c7d59, _0x20889b, _0x1101f9, _0x889df4, _0x674bca), _0xaad295 = _0x3f5ede['pos']['x'], _0x5da15c = _0x3f5ede['pos']['y'], _0x3f5ede['collision']['x'] && (_0x1101f9 = _0x1f0ec9 = 0x0), _0x3f5ede['collision']['y'] && (_0x889df4 = _0x1fba85 = 0x0), _0x3f5ede['collision']['slope']); _0x674bca++);
			else this['_traceStep'](_0x3f5ede, _0xaad295, _0x5da15c, _0x1101f9, _0x889df4, _0x4c7d59, _0x20889b, _0x1101f9, _0x889df4, 0x0);
			return _0x3f5ede;
		},
		'_traceStep': function(_0x50e2af, _0x515949, _0x4f1bc7, _0xb33bf1, _0x7ded80, _0x4932dd, _0x32a200, _0x24a1c0, _0x1aa456, _0x4fc5c0) {
			_0x50e2af['pos']['x'] += _0xb33bf1;
			_0x50e2af['pos']['y'] += _0x7ded80;
			var _0x58b5e0 = 0x0;
			if (_0xb33bf1) {
				var _0x6c97e6 = 0x0 < _0xb33bf1 ? _0x4932dd : 0x0,
					_0x6a5839 = 0x0 > _0xb33bf1 ? this['tilesize'] : 0x0,
					_0x58b5e0 = Math['max'](Math['floor'](_0x4f1bc7 / this['tilesize']), 0x0),
					_0x367e57 = Math['min'](Math['ceil']((_0x4f1bc7 + _0x32a200) / this['tilesize']), this['height']);
				_0xb33bf1 = Math['floor']((_0x50e2af['pos']['x'] + _0x6c97e6) / this['tilesize']);
				var _0x496bea = Math['floor']((_0x515949 + _0x6c97e6) / this['tilesize']);
				if (0x0 < _0x4fc5c0 || _0xb33bf1 == _0x496bea || 0x0 > _0x496bea || _0x496bea >= this['width']) _0x496bea = -0x1;
				if (0x0 <= _0xb33bf1 && _0xb33bf1 < this['width'])
					for (var _0x4175d7 = _0x58b5e0; _0x4175d7 < _0x367e57 && !(-0x1 != _0x496bea && (_0x58b5e0 = this['data'][_0x4175d7][_0x496bea], 0x1 < _0x58b5e0 && _0x58b5e0 <= this['lastSlope'] && this['_checkTileDef'](_0x50e2af, _0x58b5e0, _0x515949, _0x4f1bc7, _0x24a1c0, _0x1aa456, _0x4932dd, _0x32a200, _0x496bea, _0x4175d7))); _0x4175d7++)
						if (_0x58b5e0 = this['data'][_0x4175d7][_0xb33bf1], 0x1 == _0x58b5e0 || _0x58b5e0 > this['lastSlope'] || 0x1 < _0x58b5e0 && this['_checkTileDef'](_0x50e2af, _0x58b5e0, _0x515949, _0x4f1bc7, _0x24a1c0, _0x1aa456, _0x4932dd, _0x32a200, _0xb33bf1, _0x4175d7)) {
							if (0x1 < _0x58b5e0 && _0x58b5e0 <= this['lastSlope'] && _0x50e2af['collision']['slope']) break;
							_0x50e2af['collision']['x'] = !0x0;
							_0x50e2af['tile']['x'] = _0x58b5e0;
							_0x515949 = _0x50e2af['pos']['x'] = _0xb33bf1 * this['tilesize'] - _0x6c97e6 + _0x6a5839;
							_0x24a1c0 = 0x0;
							break;
						}
			}
			if (_0x7ded80) {
				_0x6c97e6 = 0x0 < _0x7ded80 ? _0x32a200 : 0x0;
				_0x7ded80 = 0x0 > _0x7ded80 ? this['tilesize'] : 0x0;
				_0x58b5e0 = Math['max'](Math['floor'](_0x50e2af['pos']['x'] / this['tilesize']), 0x0);
				_0x6a5839 = Math['min'](Math['ceil']((_0x50e2af['pos']['x'] + _0x4932dd) / this['tilesize']), this['width']);
				_0x4175d7 = Math['floor']((_0x50e2af['pos']['y'] + _0x6c97e6) / this['tilesize']);
				_0x367e57 = Math['floor']((_0x4f1bc7 + _0x6c97e6) / this['tilesize']);
				if (0x0 < _0x4fc5c0 || _0x4175d7 == _0x367e57 || 0x0 > _0x367e57 || _0x367e57 >= this['height']) _0x367e57 = -0x1;
				if (0x0 <= _0x4175d7 && _0x4175d7 < this['height'])
					for (_0xb33bf1 = _0x58b5e0; _0xb33bf1 < _0x6a5839 && !(-0x1 != _0x367e57 && (_0x58b5e0 = this['data'][_0x367e57][_0xb33bf1], 0x1 < _0x58b5e0 && _0x58b5e0 <= this['lastSlope'] && this['_checkTileDef'](_0x50e2af, _0x58b5e0, _0x515949, _0x4f1bc7, _0x24a1c0, _0x1aa456, _0x4932dd, _0x32a200, _0xb33bf1, _0x367e57))); _0xb33bf1++)
						if (_0x58b5e0 = this['data'][_0x4175d7][_0xb33bf1], 0x1 == _0x58b5e0 || _0x58b5e0 > this['lastSlope'] || 0x1 < _0x58b5e0 && this['_checkTileDef'](_0x50e2af, _0x58b5e0, _0x515949, _0x4f1bc7, _0x24a1c0, _0x1aa456, _0x4932dd, _0x32a200, _0xb33bf1, _0x4175d7)) {
							if (0x1 < _0x58b5e0 && _0x58b5e0 <= this['lastSlope'] && _0x50e2af['collision']['slope']) break;
							_0x50e2af['collision']['y'] = !0x0;
							_0x50e2af['tile']['y'] = _0x58b5e0;
							_0x50e2af['pos']['y'] = _0x4175d7 * this['tilesize'] - _0x6c97e6 + _0x7ded80;
							break;
						}
			}
		},
		'_checkTileDef': function(_0x55c1ea, _0x15a0d2, _0x5451cc, _0x5a4057, _0x1c8e3b, _0xd064cb, _0x1f2098, _0x388195, _0x18614e, _0x1dd7f8) {
			var _0x5f0024 = this['tiledef'][_0x15a0d2];
			if (!_0x5f0024) return !0x1;
			_0x15a0d2 = (_0x5f0024[0x2] - _0x5f0024[0x0]) * this['tilesize'];
			var _0x4923a9 = (_0x5f0024[0x3] - _0x5f0024[0x1]) * this['tilesize'],
				_0x50f7e1 = _0x5f0024[0x4];
			_0x1f2098 = _0x5451cc + _0x1c8e3b + (0x0 > _0x4923a9 ? _0x1f2098 : 0x0) - (_0x18614e + _0x5f0024[0x0]) * this['tilesize'];
			_0x388195 = _0x5a4057 + _0xd064cb + (0x0 < _0x15a0d2 ? _0x388195 : 0x0) - (_0x1dd7f8 + _0x5f0024[0x1]) * this['tilesize'];
			if (0x0 < _0x15a0d2 * _0x388195 - _0x4923a9 * _0x1f2098) {
				if (0x0 > _0x1c8e3b * -_0x4923a9 + _0xd064cb * _0x15a0d2) return _0x50f7e1;
				_0x18614e = Math['sqrt'](_0x15a0d2 * _0x15a0d2 + _0x4923a9 * _0x4923a9);
				_0x1dd7f8 = _0x4923a9 / _0x18614e;
				_0x18614e = -_0x15a0d2 / _0x18614e;
				var _0x3f014d = _0x1f2098 * _0x1dd7f8 + _0x388195 * _0x18614e,
					_0x5f0024 = _0x1dd7f8 * _0x3f014d,
					_0x3f014d = _0x18614e * _0x3f014d;
				if (_0x5f0024 * _0x5f0024 + _0x3f014d * _0x3f014d >= _0x1c8e3b * _0x1c8e3b + _0xd064cb * _0xd064cb) return _0x50f7e1 || 0.5 > _0x15a0d2 * (_0x388195 - _0xd064cb) - _0x4923a9 * (_0x1f2098 - _0x1c8e3b);
				_0x55c1ea['pos']['x'] = _0x5451cc + _0x1c8e3b - _0x5f0024;
				_0x55c1ea['pos']['y'] = _0x5a4057 + _0xd064cb - _0x3f014d;
				_0x55c1ea['collision']['slope'] = {
					'x': _0x15a0d2,
					'y': _0x4923a9,
					'nx': _0x1dd7f8,
					'ny': _0x18614e
				};
				return !0x0;
			}
			return !0x1;
		}
	});
	var _0x2893fc = 0x1 / 0x3,
		_0x101106 = 0x2 / 0x3;
	ig['CollisionMap']['defaultTileDef'] = {
		5: [0x0, 0x1, 0x1, _0x101106, !0x0],
		6: [0x0, _0x101106, 0x1, _0x2893fc, !0x0],
		7: [0x0, _0x2893fc, 0x1, 0x0, !0x0],
		3: [0x0, 0x1, 0x1, 0.5, !0x0],
		4: [0x0, 0.5, 0x1, 0x0, !0x0],
		2: [0x0, 0x1, 0x1, 0x0, !0x0],
		10: [0.5, 0x1, 0x1, 0x0, !0x0],
		21: [0x0, 0x1, 0.5, 0x0, !0x0],
		32: [_0x101106, 0x1, 0x1, 0x0, !0x0],
		43: [_0x2893fc, 0x1, _0x101106, 0x0, !0x0],
		54: [0x0, 0x1, _0x2893fc, 0x0, !0x0],
		27: [0x0, 0x0, 0x1, _0x2893fc, !0x0],
		28: [0x0, _0x2893fc, 0x1, _0x101106, !0x0],
		29: [0x0, _0x101106, 0x1, 0x1, !0x0],
		25: [0x0, 0x0, 0x1, 0.5, !0x0],
		26: [0x0, 0.5, 0x1, 0x1, !0x0],
		24: [0x0, 0x0, 0x1, 0x1, !0x0],
		11: [0x0, 0x0, 0.5, 0x1, !0x0],
		22: [0.5, 0x0, 0x1, 0x1, !0x0],
		33: [0x0, 0x0, _0x2893fc, 0x1, !0x0],
		44: [_0x2893fc, 0x0, _0x101106, 0x1, !0x0],
		55: [_0x101106, 0x0, 0x1, 0x1, !0x0],
		16: [0x1, _0x2893fc, 0x0, 0x0, !0x0],
		17: [0x1, _0x101106, 0x0, _0x2893fc, !0x0],
		18: [0x1, 0x1, 0x0, _0x101106, !0x0],
		14: [0x1, 0.5, 0x0, 0x0, !0x0],
		15: [0x1, 0x1, 0x0, 0.5, !0x0],
		13: [0x1, 0x1, 0x0, 0x0, !0x0],
		8: [0.5, 0x1, 0x0, 0x0, !0x0],
		19: [0x1, 0x1, 0.5, 0x0, !0x0],
		30: [_0x2893fc, 0x1, 0x0, 0x0, !0x0],
		41: [_0x101106, 0x1, _0x2893fc, 0x0, !0x0],
		52: [0x1, 0x1, _0x101106, 0x0, !0x0],
		38: [0x1, _0x101106, 0x0, 0x1, !0x0],
		39: [0x1, _0x2893fc, 0x0, _0x101106, !0x0],
		40: [0x1, 0x0, 0x0, _0x2893fc, !0x0],
		36: [0x1, 0.5, 0x0, 0x1, !0x0],
		37: [0x1, 0x0, 0x0, 0.5, !0x0],
		35: [0x1, 0x0, 0x0, 0x1, !0x0],
		9: [0x1, 0x0, 0.5, 0x1, !0x0],
		20: [0.5, 0x0, 0x0, 0x1, !0x0],
		31: [0x1, 0x0, _0x101106, 0x1, !0x0],
		42: [_0x101106, 0x0, _0x2893fc, 0x1, !0x0],
		53: [_0x2893fc, 0x0, 0x0, 0x1, !0x0],
		12: [0x0, 0x0, 0x1, 0x0, !0x1],
		23: [0x1, 0x1, 0x0, 0x1, !0x1],
		34: [0x1, 0x0, 0x1, 0x1, !0x1],
		45: [0x0, 0x1, 0x0, 0x0, !0x1]
	};
	ig['CollisionMap']['staticNoCollision'] = {
		'trace': function(_0x1ca07a, _0x2b2ae4, _0xa413ec, _0x471d39) {
			return {
				'collision': {
					'x': !0x1,
					'y': !0x1,
					'slope': !0x1
				},
				'pos': {
					'x': _0x1ca07a + _0xa413ec,
					'y': _0x2b2ae4 + _0x471d39
				},
				'tile': {
					'x': 0x0,
					'y': 0x0
				}
			};
		}
	};
});
ig['baked'] = !0x0;
ig['module']('impact.background-map')['requires']('impact.map', 'impact.image')['defines'](function() {
	ig['BackgroundMap'] = ig['Map']['extend']({
		'tiles': null,
		'scroll': {
			'x': 0x0,
			'y': 0x0
		},
		'distance': 0x1,
		'repeat': !0x1,
		'tilesetName': '',
		'foreground': !0x1,
		'enabled': !0x0,
		'preRender': !0x1,
		'preRenderedChunks': null,
		'chunkSize': 0x200,
		'debugChunks': !0x1,
		'anims': {},
		'init': function(_0x52bf4e, _0x63cdf2, _0x1bc959) {
			this['parent'](_0x52bf4e, _0x63cdf2);
			this['setTileset'](_0x1bc959);
		},
		'setTileset': function(_0x2fb327) {
			this['tilesetName'] = _0x2fb327 instanceof ig['Image'] ? _0x2fb327['path'] : _0x2fb327;
			this['tiles'] = new ig['Image'](this['tilesetName']);
			this['preRenderedChunks'] = null;
		},
		'setScreenPos': function(_0x1c6f60, _0x4f6e94) {
			this['scroll']['x'] = _0x1c6f60 / this['distance'];
			this['scroll']['y'] = _0x4f6e94 / this['distance'];
		},
		'preRenderMapToChunks': function() {
			var _0x3c903b = this['width'] * this['tilesize'] * ig['system']['scale'],
				_0x5c50d3 = this['height'] * this['tilesize'] * ig['system']['scale'];
			this['chunkSize'] = Math['min'](Math['max'](_0x3c903b, _0x5c50d3), this['chunkSize']);
			var _0x5a3b5d = Math['ceil'](_0x3c903b / this['chunkSize']),
				_0x53dd45 = Math['ceil'](_0x5c50d3 / this['chunkSize']);
			this['preRenderedChunks'] = [];
			for (var _0x29da26 = 0x0; _0x29da26 < _0x53dd45; _0x29da26++) {
				this['preRenderedChunks'][_0x29da26] = [];
				for (var _0x514f57 = 0x0; _0x514f57 < _0x5a3b5d; _0x514f57++) this['preRenderedChunks'][_0x29da26][_0x514f57] = this['preRenderChunk'](_0x514f57, _0x29da26, _0x514f57 == _0x5a3b5d - 0x1 ? _0x3c903b - _0x514f57 * this['chunkSize'] : this['chunkSize'], _0x29da26 == _0x53dd45 - 0x1 ? _0x5c50d3 - _0x29da26 * this['chunkSize'] : this['chunkSize']);
			}
		},
		'preRenderChunk': function(_0x596c02, _0xb14f7c, _0x575161, _0x43a8d5) {
			var _0xd642c1 = _0x575161 / this['tilesize'] / ig['system']['scale'] + 0x1,
				_0x16457d = _0x43a8d5 / this['tilesize'] / ig['system']['scale'] + 0x1,
				_0x312ffd = _0x596c02 * this['chunkSize'] / ig['system']['scale'] % this['tilesize'],
				_0x40db49 = _0xb14f7c * this['chunkSize'] / ig['system']['scale'] % this['tilesize'];
			_0x596c02 = Math['floor'](_0x596c02 * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
			_0xb14f7c = Math['floor'](_0xb14f7c * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
			var _0x289897 = ig['$new']('canvas');
			_0x289897['width'] = _0x575161;
			_0x289897['height'] = _0x43a8d5;
			_0x289897['retinaResolutionEnabled'] = !0x1;
			_0x43a8d5 = _0x289897['getContext']('2d');
			ig['System']['scaleMode'](_0x289897, _0x43a8d5);
			_0x575161 = ig['system']['context'];
			ig['system']['context'] = _0x43a8d5;
			for (_0x43a8d5 = 0x0; _0x43a8d5 < _0xd642c1; _0x43a8d5++)
				for (var _0x2e9dc5 = 0x0; _0x2e9dc5 < _0x16457d; _0x2e9dc5++)
					if (_0x43a8d5 + _0x596c02 < this['width'] && _0x2e9dc5 + _0xb14f7c < this['height']) {
						var _0x234a23 = this['data'][_0x2e9dc5 + _0xb14f7c][_0x43a8d5 + _0x596c02];
						_0x234a23 && this['tiles']['drawTile'](_0x43a8d5 * this['tilesize'] - _0x312ffd, _0x2e9dc5 * this['tilesize'] - _0x40db49, _0x234a23 - 0x1, this['tilesize']);
					} ig['system']['context'] = _0x575161;
			return _0x289897;
		},
		'draw': function() {
			this['tiles']['loaded'] && this['enabled'] && (this['preRender'] ? this['drawPreRendered']() : this['drawTiled']());
		},
		'drawPreRendered': function() {
			this['preRenderedChunks'] || this['preRenderMapToChunks']();
			var _0x1b4f2f = ig['system']['getDrawPos'](this['scroll']['x']),
				_0x4c2c0f = ig['system']['getDrawPos'](this['scroll']['y']);
			if (this['repeat']) var _0xffefa9 = this['width'] * this['tilesize'] * ig['system']['scale'],
				_0x1b4f2f = (_0x1b4f2f % _0xffefa9 + _0xffefa9) % _0xffefa9,
				_0xffefa9 = this['height'] * this['tilesize'] * ig['system']['scale'],
				_0x4c2c0f = (_0x4c2c0f % _0xffefa9 + _0xffefa9) % _0xffefa9;
			var _0xffefa9 = Math['max'](Math['floor'](_0x1b4f2f / this['chunkSize']), 0x0),
				_0x14f003 = Math['max'](Math['floor'](_0x4c2c0f / this['chunkSize']), 0x0),
				_0x5bd201 = Math['ceil']((_0x1b4f2f + ig['system']['realWidth']) / this['chunkSize']),
				_0x16717c = Math['ceil']((_0x4c2c0f + ig['system']['realHeight']) / this['chunkSize']),
				_0x3407e9 = this['preRenderedChunks'][0x0]['length'],
				_0x14ca47 = this['preRenderedChunks']['length'];
			this['repeat'] || (_0x5bd201 = Math['min'](_0x5bd201, _0x3407e9), _0x16717c = Math['min'](_0x16717c, _0x14ca47));
			for (var _0x41bc0d = 0x0; _0x14f003 < _0x16717c; _0x14f003++) {
				for (var _0x4f91a2 = 0x0, _0x5d3689 = _0xffefa9; _0x5d3689 < _0x5bd201; _0x5d3689++) {
					var _0x50d725 = this['preRenderedChunks'][_0x14f003 % _0x14ca47][_0x5d3689 % _0x3407e9],
						_0x47798c = -_0x1b4f2f + _0x5d3689 * this['chunkSize'] - _0x4f91a2,
						_0x8552d7 = -_0x4c2c0f + _0x14f003 * this['chunkSize'] - _0x41bc0d;
					ig['system']['context']['drawImage'](_0x50d725, _0x47798c, _0x8552d7);
					ig['Image']['drawCount']++;
					this['debugChunks'] && (ig['system']['context']['strokeStyle'] = '#f0f', ig['system']['context']['strokeRect'](_0x47798c, _0x8552d7, this['chunkSize'], this['chunkSize']));
					this['repeat'] && _0x50d725['width'] < this['chunkSize'] && _0x47798c + _0x50d725['width'] < ig['system']['realWidth'] && (_0x4f91a2 += this['chunkSize'] - _0x50d725['width'], _0x5bd201++);
				}
				this['repeat'] && _0x50d725['height'] < this['chunkSize'] && _0x8552d7 + _0x50d725['height'] < ig['system']['realHeight'] && (_0x41bc0d += this['chunkSize'] - _0x50d725['height'], _0x16717c++);
			}
		},
		'drawTiled': function() {
			for (var _0x44c3f1 = 0x0, _0x4bb354 = null, _0x48034b = (this['scroll']['x'] / this['tilesize'])['toInt'](), _0x2870c1 = (this['scroll']['y'] / this['tilesize'])['toInt'](), _0x53ba04 = this['scroll']['x'] % this['tilesize'], _0x462560 = this['scroll']['y'] % this['tilesize'], _0x31b805 = -_0x53ba04 - this['tilesize'], _0x53ba04 = ig['system']['width'] + this['tilesize'] - _0x53ba04, _0x5bebf0 = ig['system']['height'] + this['tilesize'] - _0x462560, _0x583e19 = -0x1, _0x462560 = -_0x462560 - this['tilesize']; _0x462560 < _0x5bebf0; _0x583e19++, _0x462560 += this['tilesize']) {
				var _0x793f91 = _0x583e19 + _0x2870c1;
				if (_0x793f91 >= this['height'] || 0x0 > _0x793f91) {
					if (!this['repeat']) continue;
					_0x793f91 = (_0x793f91 % this['height'] + this['height']) % this['height'];
				}
				for (var _0x1cbef5 = -0x1, _0x549d3a = _0x31b805; _0x549d3a < _0x53ba04; _0x1cbef5++, _0x549d3a += this['tilesize']) {
					_0x44c3f1 = _0x1cbef5 + _0x48034b;
					if (_0x44c3f1 >= this['width'] || 0x0 > _0x44c3f1) {
						if (!this['repeat']) continue;
						_0x44c3f1 = (_0x44c3f1 % this['width'] + this['width']) % this['width'];
					}
					if (_0x44c3f1 = this['data'][_0x793f91][_0x44c3f1])(_0x4bb354 = this['anims'][_0x44c3f1 - 0x1]) ? _0x4bb354['draw'](_0x549d3a, _0x462560) : this['tiles']['drawTile'](_0x549d3a, _0x462560, _0x44c3f1 - 0x1, this['tilesize']);
				}
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('impact.game')['requires']('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map')['defines'](function() {
	ig['Game'] = ig['Class']['extend']({
		'clearColor': '#000000',
		'gravity': 0x0,
		'screen': {
			'x': 0x0,
			'y': 0x0
		},
		'_rscreen': {
			'x': 0x0,
			'y': 0x0
		},
		'entities': [],
		'namedEntities': {},
		'collisionMap': ig['CollisionMap']['staticNoCollision'],
		'backgroundMaps': [],
		'backgroundAnims': {},
		'autoSort': !0x1,
		'sortBy': null,
		'cellSize': 0x40,
		'_deferredKill': [],
		'_levelToLoad': null,
		'_doSortEntities': !0x1,
		'staticInstantiate': function() {
			this['sortBy'] = this['sortBy'] || ig['Game']['SORT']['Z_INDEX'];
			ig['game'] = this;
			return null;
		},
		'loadLevel': function(_0x572fc4) {
			this['screen'] = {
				'x': 0x0,
				'y': 0x0
			};
			this['entities'] = [];
			this['namedEntities'] = {};
			for (var _0x89c0b8 = 0x0; _0x89c0b8 < _0x572fc4['entities']['length']; _0x89c0b8++) {
				var _0x2750e3 = _0x572fc4['entities'][_0x89c0b8];
				this['spawnEntity'](_0x2750e3['type'], _0x2750e3['x'], _0x2750e3['y'], _0x2750e3['settings']);
			}
			this['sortEntities']();
			this['collisionMap'] = ig['CollisionMap']['staticNoCollision'];
			this['backgroundMaps'] = [];
			for (_0x89c0b8 = 0x0; _0x89c0b8 < _0x572fc4['layer']['length']; _0x89c0b8++)
				if (_0x2750e3 = _0x572fc4['layer'][_0x89c0b8], 'collision' == _0x2750e3['name']) this['collisionMap'] = new ig['CollisionMap'](_0x2750e3['tilesize'], _0x2750e3['data']);
				else {
					var _0x30be36 = new ig['BackgroundMap'](_0x2750e3['tilesize'], _0x2750e3['data'], _0x2750e3['tilesetName']);
					_0x30be36['anims'] = this['backgroundAnims'][_0x2750e3['tilesetName']] || {};
					_0x30be36['repeat'] = _0x2750e3['repeat'];
					_0x30be36['distance'] = _0x2750e3['distance'];
					_0x30be36['foreground'] = !!_0x2750e3['foreground'];
					_0x30be36['preRender'] = !!_0x2750e3['preRender'];
					_0x30be36['name'] = _0x2750e3['name'];
					this['backgroundMaps']['push'](_0x30be36);
				} for (_0x89c0b8 = 0x0; _0x89c0b8 < this['entities']['length']; _0x89c0b8++) this['entities'][_0x89c0b8]['ready']();
		},
		'loadLevelDeferred': function(_0x2b2e7f) {
			this['_levelToLoad'] = _0x2b2e7f;
		},
		'getMapByName': function(_0xc2b190) {
			if ('collision' == _0xc2b190) return this['collisionMap'];
			for (var _0x26332e = 0x0; _0x26332e < this['backgroundMaps']['length']; _0x26332e++)
				if (this['backgroundMaps'][_0x26332e]['name'] == _0xc2b190) return this['backgroundMaps'][_0x26332e];
			return null;
		},
		'getEntityByName': function(_0x23dce9) {
			return this['namedEntities'][_0x23dce9];
		},
		'getEntitiesByType': function(_0x8dbec0) {
			_0x8dbec0 = 'string' === typeof _0x8dbec0 ? ig['global'][_0x8dbec0] : _0x8dbec0;
			for (var _0x5df83c = [], _0x9c5c5a = 0x0; _0x9c5c5a < this['entities']['length']; _0x9c5c5a++) {
				var _0x2afb71 = this['entities'][_0x9c5c5a];
				_0x2afb71 instanceof _0x8dbec0 && !_0x2afb71['_killed'] && _0x5df83c['push'](_0x2afb71);
			}
			return _0x5df83c;
		},
		'spawnEntity': function(_0x3caa59, _0x55a2a2, _0x174f0e, _0x12b952) {
			var _0x443b8e = 'string' === typeof _0x3caa59 ? ig['global'][_0x3caa59] : _0x3caa59;
			if (!_0x443b8e) throw 'Can\x27t\x20spawn\x20entity\x20of\x20type\x20' + _0x3caa59;
			_0x3caa59 = new _0x443b8e(_0x55a2a2, _0x174f0e, _0x12b952 || {});
			this['entities']['push'](_0x3caa59);
			_0x3caa59['name'] && (this['namedEntities'][_0x3caa59['name']] = _0x3caa59);
			return _0x3caa59;
		},
		'sortEntities': function() {
			this['entities']['sort'](this['sortBy']);
		},
		'sortEntitiesDeferred': function() {
			this['_doSortEntities'] = !0x0;
		},
		'removeEntity': function(_0x2dfe6b) {
			_0x2dfe6b['name'] && delete this['namedEntities'][_0x2dfe6b['name']];
			_0x2dfe6b['_killed'] = !0x0;
			_0x2dfe6b['type'] = ig['Entity']['TYPE']['NONE'];
			_0x2dfe6b['checkAgainst'] = ig['Entity']['TYPE']['NONE'];
			_0x2dfe6b['collides'] = ig['Entity']['COLLIDES']['NEVER'];
			this['_deferredKill']['push'](_0x2dfe6b);
		},
		'run': function() {
			this['update']();
			this['draw']();
		},
		'update': function() {
			this['_levelToLoad'] && (this['loadLevel'](this['_levelToLoad']), this['_levelToLoad'] = null);
			this['updateEntities']();
			this['checkEntities']();
			for (var _0x52e4ae = 0x0; _0x52e4ae < this['_deferredKill']['length']; _0x52e4ae++) this['_deferredKill'][_0x52e4ae]['erase'](), this['entities']['erase'](this['_deferredKill'][_0x52e4ae]);
			this['_deferredKill'] = [];
			if (this['_doSortEntities'] || this['autoSort']) this['sortEntities'](), this['_doSortEntities'] = !0x1;
			for (var _0x2a63fa in this['backgroundAnims']) {
				var _0x52e4ae = this['backgroundAnims'][_0x2a63fa],
					_0x435072;
				for (_0x435072 in _0x52e4ae) _0x52e4ae[_0x435072]['update']();
			}
		},
		'updateEntities': function() {
			for (var _0x195483 = 0x0; _0x195483 < this['entities']['length']; _0x195483++) {
				var _0x204cbe = this['entities'][_0x195483];
				_0x204cbe['_killed'] || _0x204cbe['update']();
			}
		},
		'draw': function() {
			this['clearColor'] && ig['system']['clear'](this['clearColor']);
			this['_rscreen']['x'] = ig['system']['getDrawPos'](this['screen']['x']) / ig['system']['scale'];
			this['_rscreen']['y'] = ig['system']['getDrawPos'](this['screen']['y']) / ig['system']['scale'];
			var _0x1ace92;
			for (_0x1ace92 = 0x0; _0x1ace92 < this['backgroundMaps']['length']; _0x1ace92++) {
				var _0x12a698 = this['backgroundMaps'][_0x1ace92];
				if (_0x12a698['foreground']) break;
				_0x12a698['setScreenPos'](this['screen']['x'], this['screen']['y']);
				_0x12a698['draw']();
			}
			this['drawEntities']();
			for (_0x1ace92; _0x1ace92 < this['backgroundMaps']['length']; _0x1ace92++) _0x12a698 = this['backgroundMaps'][_0x1ace92], _0x12a698['setScreenPos'](this['screen']['x'], this['screen']['y']), _0x12a698['draw']();
		},
		'drawEntities': function() {
			for (var _0x35b582 = 0x0; _0x35b582 < this['entities']['length']; _0x35b582++) this['entities'][_0x35b582]['draw']();
		},
		'checkEntities': function() {
			for (var _0x270958 = {}, _0x231717 = 0x0; _0x231717 < this['entities']['length']; _0x231717++) {
				var _0x30a92f = this['entities'][_0x231717];
				if (!(_0x30a92f['type'] == ig['Entity']['TYPE']['NONE'] && _0x30a92f['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x30a92f['collides'] == ig['Entity']['COLLIDES']['NEVER']))
					for (var _0x24a2d5 = {}, _0x2bad11 = Math['floor'](_0x30a92f['pos']['y'] / this['cellSize']), _0x2be0f0 = Math['floor']((_0x30a92f['pos']['x'] + _0x30a92f['size']['x']) / this['cellSize']) + 0x1, _0x4226e3 = Math['floor']((_0x30a92f['pos']['y'] + _0x30a92f['size']['y']) / this['cellSize']) + 0x1, _0x1cecec = Math['floor'](_0x30a92f['pos']['x'] / this['cellSize']); _0x1cecec < _0x2be0f0; _0x1cecec++)
						for (var _0x3b6351 = _0x2bad11; _0x3b6351 < _0x4226e3; _0x3b6351++)
							if (_0x270958[_0x1cecec])
								if (_0x270958[_0x1cecec][_0x3b6351]) {
									for (var _0x56ee50 = _0x270958[_0x1cecec][_0x3b6351], _0x4b1582 = 0x0; _0x4b1582 < _0x56ee50['length']; _0x4b1582++) _0x30a92f['touches'](_0x56ee50[_0x4b1582]) && !_0x24a2d5[_0x56ee50[_0x4b1582]['id']] && (_0x24a2d5[_0x56ee50[_0x4b1582]['id']] = !0x0, ig['Entity']['checkPair'](_0x30a92f, _0x56ee50[_0x4b1582]));
									_0x56ee50['push'](_0x30a92f);
								} else _0x270958[_0x1cecec][_0x3b6351] = [_0x30a92f];
				else _0x270958[_0x1cecec] = {}, _0x270958[_0x1cecec][_0x3b6351] = [_0x30a92f];
			}
		}
	});
	ig['Game']['SORT'] = {
		'Z_INDEX': function(_0x4ca854, _0x3712ce) {
			return _0x4ca854['zIndex'] - _0x3712ce['zIndex'];
		},
		'POS_X': function(_0x5f484d, _0x18a93d) {
			return _0x5f484d['pos']['x'] + _0x5f484d['size']['x'] - (_0x18a93d['pos']['x'] + _0x18a93d['size']['x']);
		},
		'POS_Y': function(_0x3438a9, _0x4aea1) {
			return _0x3438a9['pos']['y'] + _0x3438a9['size']['y'] - (_0x4aea1['pos']['y'] + _0x4aea1['size']['y']);
		}
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.webkit-image-smoothing-patch')['defines'](function() {
	ig['System'] && (ig['System']['SCALE'] = {
		'CRISP': function(_0xa8e71f, _0x2c72b8) {
			_0x2c72b8['imageSmoothingEnabled'] = _0x2c72b8['msImageSmoothingEnabled'] = _0x2c72b8['mozImageSmoothingEnabled'] = _0x2c72b8['oImageSmoothingEnabled'] = !0x1;
			_0xa8e71f['style']['imageRendering'] = '-moz-crisp-edges';
			_0xa8e71f['style']['imageRendering'] = '-o-crisp-edges';
			_0xa8e71f['style']['imageRendering'] = '-webkit-optimize-contrast';
			_0xa8e71f['style']['imageRendering'] = 'crisp-edges';
			_0xa8e71f['style']['msInterpolationMode'] = 'nearest-neighbor';
		},
		'SMOOTH': function(_0x2a8471, _0x2d6a56) {
			_0x2d6a56['imageSmoothingEnabled'] = _0x2d6a56['msImageSmoothingEnabled'] = _0x2d6a56['mozImageSmoothingEnabled'] = _0x2d6a56['oImageSmoothingEnabled'] = !0x0;
			_0x2a8471['style']['imageRendering'] = '';
			_0x2a8471['style']['msInterpolationMode'] = '';
		}
	}, ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH']);
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.windowfocus-onMouseDown-patch')['requires']('impact.input')['defines'](function() {
	var _0x420562 = !0x1;
	try {
		_0x420562 = window['self'] !== window['top'], !0x1 === _0x420562 && (_0x420562 = 0x0 < window['frames']['length']);
	} catch (_0x58647d) {
		_0x420562 = !0x0;
	}
	ig['Input']['inject']({
		'keydown': function(_0xff7778) {
			var _0x559c4e = _0xff7778['target']['tagName'];
			if (!('INPUT' == _0x559c4e || 'TEXTAREA' == _0x559c4e))
				if (_0x559c4e = 'keydown' == _0xff7778['type'] ? _0xff7778['keyCode'] : 0x2 == _0xff7778['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], _0x420562 && 0x0 > _0x559c4e && window['focus'](), ('touchstart' == _0xff7778['type'] || 'mousedown' == _0xff7778['type']) && this['mousemove'](_0xff7778), _0x559c4e = this['bindings'][_0x559c4e]) this['actions'][_0x559c4e] = !0x0, this['locks'][_0x559c4e] || (this['presses'][_0x559c4e] = !0x0, this['locks'][_0x559c4e] = !0x0), _0xff7778['stopPropagation'](), _0xff7778['preventDefault']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.dom-handler')['defines'](function() {
	ig['DomHandler'] = ig['Class']['extend']({
		'JQUERYAVAILABLE': !0x1,
		'init': function() {
			this['JQUERYAVAILABLE'] = this['_jqueryAvailable']();
		},
		'_jqueryAvailable': function() {
			return 'undefined' !== typeof jQuery;
		},
		'addEvent': function(_0x1bf078, _0x197861, _0x98350f, _0x1b9af6) {
			if (this['JQUERYAVAILABLE']) _0x1bf078['on'](_0x197861, _0x98350f);
			else _0x1bf078['addEventListener'](_0x197861, _0x98350f, _0x1b9af6);
		},
		'create': function(_0x577f2c) {
			return this['JQUERYAVAILABLE'] ? $('<' + _0x577f2c + '>') : ig['$new'](_0x577f2c);
		},
		'getElementByClass': function(_0x232042) {
			return this['JQUERYAVAILABLE'] ? $('.' + _0x232042) : document['getElementsByClassName'](_0x232042);
		},
		'getElementById': function(_0x1ab56a) {
			return this['JQUERYAVAILABLE'] ? 0x0 < $(_0x1ab56a)['length'] ? $(_0x1ab56a) : null : ig['$'](_0x1ab56a);
		},
		'appendChild': function(_0xcca4cd, _0x479f0c) {
			this['JQUERYAVAILABLE'] ? _0xcca4cd['append'](_0x479f0c) : _0xcca4cd['appendChild'](_0x479f0c);
		},
		'appendToBody': function(_0x2fa9b2) {
			this['JQUERYAVAILABLE'] ? $('body')['append'](_0x2fa9b2) : document['body']['appendChild'](_0x2fa9b2);
		},
		'resize': function(_0x1187cf, _0x5ac4ec, _0x24f7ea) {
			if (this['JQUERYAVAILABLE']) _0x1187cf['width'](_0x5ac4ec['toFixed'](0x2)), _0x1187cf['height'](_0x24f7ea['toFixed'](0x2));
			else {
				var _0x2916a6 = _0x1187cf['style']['visibility'];
				_0x5ac4ec = 'width:' + _0x5ac4ec['toFixed'](0x2) + 'px;\x20height:' + _0x24f7ea['toFixed'](0x2) + 'px;';
				this['attr'](_0x1187cf, 'style', _0x5ac4ec);
				_0x1187cf['style']['visibility'] = _0x2916a6;
			}
		},
		'resizeOffsetLeft': function(_0x2f256b, _0x483294, _0x20e4d9, _0x175ea1) {
			if (this['JQUERYAVAILABLE']) _0x2f256b['width'](_0x483294['toFixed'](0x2)), _0x2f256b['height'](_0x20e4d9['toFixed'](0x2)), _0x2f256b['css']('left', _0x175ea1);
			else {
				var _0x10bcb3 = _0x2f256b['style']['visibility'];
				_0x483294 = 'width:' + _0x483294['toFixed'](0x2) + 'px;\x20height:' + _0x20e4d9['toFixed'](0x2) + 'px;\x20left:\x20' + _0x175ea1['toFixed'](0x2) + 'px;';
				this['attr'](_0x2f256b, 'style', _0x483294);
				_0x2f256b['style']['visibility'] = _0x10bcb3;
			}
		},
		'resizeOffset': function(_0x16d670, _0x3c7c5c, _0x20d8df, _0x1f7ee2, _0x294418) {
			if (this['JQUERYAVAILABLE']) _0x16d670['width'](_0x3c7c5c['toFixed'](0x2)), _0x16d670['height'](_0x20d8df['toFixed'](0x2)), _0x16d670['css']('left', _0x1f7ee2), _0x16d670['css']('top', _0x294418);
			else {
				var _0x4e8e51 = _0x16d670['style']['visibility'];
				_0x3c7c5c = 'width:' + _0x3c7c5c['toFixed'](0x2) + 'px;\x20height:' + _0x20d8df['toFixed'](0x2) + 'px;\x20left:\x20' + _0x1f7ee2['toFixed'](0x2) + 'px;\x20top:\x20' + _0x294418['toFixed'](0x2) + 'px;';
				this['attr'](_0x16d670, 'style', _0x3c7c5c);
				_0x16d670['style']['visibility'] = _0x4e8e51;
			}
		},
		'css': function(_0x22dad8, _0x1f7bd0) {
			if (this['JQUERYAVAILABLE']) _0x22dad8['css'](_0x1f7bd0);
			else {
				var _0x4bb63a = '',
					_0x190c88;
				for (_0x190c88 in _0x1f7bd0) _0x4bb63a += _0x190c88 + ':' + _0x1f7bd0[_0x190c88] + ';';
				this['attr'](_0x22dad8, 'style', _0x4bb63a);
			}
		},
		'getOffsets': function(_0x5029f3) {
			return this['JQUERYAVAILABLE'] ? (_0x5029f3 = _0x5029f3['offset'](), {
				'left': _0x5029f3['left'],
				'top': _0x5029f3['top']
			}) : {
				'left': _0x5029f3['offsetLeft'],
				'top': _0x5029f3['offsetTop']
			};
		},
		'attr': function(_0x21894d, _0x294e27, _0x5a97bf) {
			if ('undefined' === typeof _0x5a97bf) return this['JQUERYAVAILABLE'] ? _0x21894d['attr'](_0x294e27) : _0x21894d['getAttribute'](_0x294e27);
			this['JQUERYAVAILABLE'] ? _0x21894d['attr'](_0x294e27, _0x5a97bf) : _0x21894d['setAttribute'](_0x294e27, _0x5a97bf);
		},
		'show': function(_0x2e1ac5) {
			this['JQUERYAVAILABLE'] ? (_0x2e1ac5['show'](), _0x2e1ac5['css']('visibility', 'visible')) : _0x2e1ac5 && (_0x2e1ac5['style'] ? _0x2e1ac5['style']['visibility'] = 'visible' : _0x2e1ac5[0x0] && (_0x2e1ac5[0x0]['style']['visibility'] = 'visible'));
		},
		'hide': function(_0x392571) {
			this['JQUERYAVAILABLE'] ? (_0x392571['hide'](), _0x392571['css']('visibility', 'hidden')) : _0x392571 && (_0x392571['style'] ? _0x392571['style']['visibility'] = 'hidden' : _0x392571[0x0] && (_0x392571[0x0]['style']['visibility'] = 'hidden'));
		},
		'getQueryVariable': function(_0x5ab544) {
			for (var _0xcd10d4 = window['location']['search']['substring'](0x1)['split']('&'), _0x5b3285 = 0x0; _0x5b3285 < _0xcd10d4['length']; _0x5b3285++) {
				var _0x3ce4e0 = _0xcd10d4[_0x5b3285]['split']('=');
				if (decodeURIComponent(_0x3ce4e0[0x0]) == _0x5ab544) return decodeURIComponent(_0x3ce4e0[0x1]);
			}
		},
		'forcedDeviceDetection': function() {
			var _0x39b4ab = this['getQueryVariable']('device');
			if (_0x39b4ab) switch (_0x39b4ab) {
				case 'mobile':
					console['log']('serving\x20mobile\x20version\x20...');
					ig['ua']['mobile'] = !0x0;
					break;
				case 'desktop':
					console['log']('serving\x20desktop\x20version\x20...');
					ig['ua']['mobile'] = !0x1;
					break;
				default:
					console['log']('serving\x20universal\x20version\x20...');
			} else console['log']('serving\x20universal\x20version\x20...');
		},
		'forcedDeviceRotation': function() {
			var _0x5c905b = this['getQueryVariable']('force-rotate');
			if (_0x5c905b) switch (_0x5c905b) {
				case 'portrait':
					console['log']('force\x20rotate\x20to\x20portrait');
					window['orientation'] = 0x0;
					break;
				case 'landscape':
					console['log']('force\x20rotate\x20to\x20horizontal');
					window['orientation'] = 0x5a;
					break;
				default:
					alert('wrong\x20command/type\x20in\x20param\x20force-rotate.\x20Defaulting\x20value\x20to\x20portrait'), window['orientation'] = 0x0;
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.data.vector')['defines'](function() {
	Vector2 = function(_0xa74fc, _0x37fc85) {
		this['x'] = _0xa74fc || 0x0;
		this['y'] = _0x37fc85 || 0x0;
	};
	Vector2['prototype'] = {
		'valType': 'number',
		'neg': function() {
			this['x'] = -this['x'];
			this['y'] = -this['y'];
			return this;
		},
		'row': function(_0x4f9230) {
			typeof _0x4f9230 === this['valType'] && (this['y'] = _0x4f9230);
			return this['y'];
		},
		'col': function(_0x341202) {
			typeof _0x341202 === this['valType'] && (this['x'] = _0x341202);
			return this['x'];
		},
		'add': function(_0x354fa2) {
			_0x354fa2 instanceof Vector2 ? (this['x'] += _0x354fa2['x'], this['y'] += _0x354fa2['y']) : (this['x'] += _0x354fa2, this['y'] += _0x354fa2);
			return this;
		},
		'sub': function(_0x5adc51) {
			_0x5adc51 instanceof Vector2 ? (this['x'] -= _0x5adc51['x'], this['y'] -= _0x5adc51['y']) : (this['x'] -= _0x5adc51, this['y'] -= _0x5adc51);
			return this;
		},
		'mul': function(_0x657fb0) {
			_0x657fb0 instanceof Vector2 ? (this['x'] *= _0x657fb0['x'], this['y'] *= _0x657fb0['y']) : (this['x'] *= _0x657fb0, this['y'] *= _0x657fb0);
			return this;
		},
		'div': function(_0x58a68c) {
			_0x58a68c instanceof Vector2 ? (0x0 != _0x58a68c['x'] && (this['x'] /= _0x58a68c['x']), 0x0 != _0x58a68c['y'] && (this['y'] /= _0x58a68c['y'])) : 0x0 != _0x58a68c && (this['x'] /= _0x58a68c, this['y'] /= _0x58a68c);
			return this;
		},
		'equals': function(_0x4cf7db) {
			return this['x'] == _0x4cf7db['x'] && this['y'] == _0x4cf7db['y'];
		},
		'dot': function(_0x557eab) {
			return this['x'] * _0x557eab['x'] + this['y'] * _0x557eab['y'];
		},
		'cross': function(_0x15235e) {
			return this['x'] * _0x15235e['y'] - this['y'] * _0x15235e['x'];
		},
		'length': function() {
			return Math['sqrt'](this['dot'](this));
		},
		'norm': function() {
			return this['divide'](this['length']());
		},
		'min': function() {
			return Math['min'](this['x'], this['y']);
		},
		'max': function() {
			return Math['max'](this['x'], this['y']);
		},
		'toAngles': function() {
			return -Math['atan2'](-this['y'], this['x']);
		},
		'angleTo': function(_0x303d99) {
			return Math['acos'](this['dot'](_0x303d99) / (this['length']() * _0x303d99['length']()));
		},
		'toArray': function(_0x389b57) {
			return [this['x'], this['y']]['slice'](0x0, _0x389b57 || 0x2);
		},
		'clone': function() {
			return new Vector2(this['x'], this['y']);
		},
		'set': function(_0x39bb40, _0x532426) {
			this['x'] = _0x39bb40;
			this['y'] = _0x532426;
			return this;
		},
		'unit': function() {
			var _0x32698b = this['length']();
			if (0x0 < _0x32698b) return new Vector2(this['x'] / _0x32698b, this['y'] / _0x32698b);
			throw 'Divide\x20by\x200\x20error\x20in\x20unitVector\x20function\x20of\x20vector:' + this;
		},
		'turnRight': function() {
			var _0x4eab17 = this['x'];
			this['x'] = -this['y'];
			this['y'] = _0x4eab17;
			return this;
		},
		'turnLeft': function() {
			var _0x5740a0 = this['x'];
			this['x'] = this['y'];
			this['y'] = -_0x5740a0;
			return this;
		},
		'rotate': function(_0x2e8204) {
			var _0x262b7e = this['clone']();
			this['x'] = _0x262b7e['x'] * Math['cos'](_0x2e8204) - _0x262b7e['y'] * Math['sin'](_0x2e8204);
			this['y'] = _0x262b7e['x'] * Math['sin'](_0x2e8204) + _0x262b7e['y'] * Math['cos'](_0x2e8204);
			return this;
		}
	};
	Vector2['negative'] = function(_0x49a760) {
		return new Vector2(-_0x49a760['x'], -_0x49a760['y']);
	};
	Vector2['add'] = function(_0x45ce6c, _0x11fa26) {
		return _0x11fa26 instanceof Vector2 ? new Vector2(_0x45ce6c['x'] + _0x11fa26['x'], _0x45ce6c['y'] + _0x11fa26['y']) : new Vector2(_0x45ce6c['x'] + v, _0x45ce6c['y'] + v);
	};
	Vector2['subtract'] = function(_0x135fbe, _0x46ed1b) {
		return _0x46ed1b instanceof Vector2 ? new Vector2(_0x135fbe['x'] - _0x46ed1b['x'], _0x135fbe['y'] - _0x46ed1b['y']) : new Vector2(_0x135fbe['x'] - v, _0x135fbe['y'] - v);
	};
	Vector2['multiply'] = function(_0x3e04dd, _0x3fb280) {
		return _0x3fb280 instanceof Vector2 ? new Vector2(_0x3e04dd['x'] * _0x3fb280['x'], _0x3e04dd['y'] * _0x3fb280['y']) : new Vector2(_0x3e04dd['x'] * v, _0x3e04dd['y'] * v);
	};
	Vector2['divide'] = function(_0x20d676, _0x3b84da) {
		return _0x3b84da instanceof Vector2 ? new Vector2(_0x20d676['x'] / _0x3b84da['x'], _0x20d676['y'] / _0x3b84da['y']) : new Vector2(_0x20d676['x'] / v, _0x20d676['y'] / v);
	};
	Vector2['equals'] = function(_0xefd896, _0x3feb07) {
		return _0xefd896['x'] == _0x3feb07['x'] && _0xefd896['y'] == _0x3feb07['y'];
	};
	Vector2['dot'] = function(_0x4cfd72, _0x3507af) {
		return _0x4cfd72['x'] * _0x3507af['x'] + _0x4cfd72['y'] * _0x3507af['y'];
	};
	Vector2['cross'] = function(_0x40c7f2, _0x24fbf5) {
		return _0x40c7f2['x'] * _0x24fbf5['y'] - _0x40c7f2['y'] * _0x24fbf5['x'];
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.size-handler')['requires']('plugins.data.vector')['defines'](function() {
	ig['SizeHandler'] = ig['Class']['extend']({
		'portraitMode': !0x0,
		'disableStretchToFitOnMobileFlag': !0x1,
		'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
		'enableScalingLimitsOnMobileFlag': !0x1,
		'minScalingOnMobile': 0x0,
		'maxScalingOnMobile': 0x1,
		'enableStretchToFitOnDesktopFlag': !0x1,
		'enableScalingLimitsOnDesktopFlag': !0x1,
		'minScalingOnDesktop': 0x0,
		'maxScalingOnDesktop': 0x1,
		'desktop': {
			'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
			'actualResolution': new Vector2(0x21c, 0x3c0)
		},
		'mobile': {
			'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
			'actualResolution': new Vector2(0x21c, 0x3c0)
		},
		'windowSize': new Vector2(window['innerWidth'], window['innerHeight']),
		'scaleRatioMultiplier': new Vector2(0x1, 0x1),
		'sizeRatio': new Vector2(0x1, 0x1),
		'scale': 0x1,
		'domHandler': null,
		'dynamicClickableEntityDivs': {},
		'coreDivsToResize': ['#canvas', '#play', '#orientate'],
		'adsToResize': {
			'MobileAdInGamePreroll': {
				'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
				'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
			},
			'MobileAdInGameEnd': {
				'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
				'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
			},
			'MobileAdInGamePreroll2': {
				'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
				'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
			},
			'MobileAdInGameEnd2': {
				'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
				'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
			},
			'MobileAdInGamePreroll3': {
				'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
				'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
			},
			'MobileAdInGameEnd3': {
				'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
				'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
			}
		},
		'init': function(_0x2379be) {
			this['domHandler'] = _0x2379be;
			if ('undefined' === typeof _0x2379be) throw 'undefined\x20Dom\x20Handler\x20for\x20Size\x20Handler';
			this['sizeCalcs']();
			this['eventListenerSetup']();
			this['samsungFix']();
		},
		'sizeCalcs': function() {
			this['windowSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
			if (ig['ua']['mobile']) {
				this['mobile']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
				var _0x4c76b5 = new Vector2(this['mobile']['actualResolution']['x'], this['mobile']['actualResolution']['y']);
				this['scaleRatioMultiplier'] = new Vector2(this['mobile']['actualSize']['x'] / _0x4c76b5['x'], this['mobile']['actualSize']['y'] / _0x4c76b5['y']);
				if (this['disableStretchToFitOnMobileFlag']) {
					var _0x1cb278 = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']);
					this['enableScalingLimitsOnMobileFlag'] && (_0x1cb278 = _0x1cb278['limit'](this['minScalingOnMobile'], this['maxScalingOnMobile']));
					this['mobile']['actualSize']['x'] = _0x4c76b5['x'] * _0x1cb278;
					this['mobile']['actualSize']['y'] = _0x4c76b5['y'] * _0x1cb278;
					this['scaleRatioMultiplier']['x'] = _0x1cb278;
					this['scaleRatioMultiplier']['y'] = _0x1cb278;
				} else this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1;
			} else this['desktop']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']), _0x4c76b5 = new Vector2(this['desktop']['actualResolution']['x'], this['desktop']['actualResolution']['y']), this['scaleRatioMultiplier'] = new Vector2(this['desktop']['actualSize']['x'] / _0x4c76b5['x'], this['desktop']['actualSize']['y'] / _0x4c76b5['y']), this['enableStretchToFitOnDesktopFlag'] ? (this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1) : (_0x1cb278 = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']), this['enableScalingLimitsOnDesktopFlag'] && (_0x1cb278 = _0x1cb278['limit'](this['minScalingOnDesktop'], this['maxScalingOnDesktop'])), this['desktop']['actualSize']['x'] = _0x4c76b5['x'] * _0x1cb278, this['desktop']['actualSize']['y'] = _0x4c76b5['y'] * _0x1cb278, this['scaleRatioMultiplier']['x'] = _0x1cb278, this['scaleRatioMultiplier']['y'] = _0x1cb278);
		},
		'resizeLayers': function() {
			for (var _0x47e732 = 0x0; _0x47e732 < this['coreDivsToResize']['length']; _0x47e732++) {
				var _0x4f148 = ig['domHandler']['getElementById'](this['coreDivsToResize'][_0x47e732]);
				if (ig['ua']['mobile'])
					if (this['disableStretchToFitOnMobileFlag']) {
						var _0x2d98c5 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['x'] / 0x2),
							_0x5bd7ab = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['y'] / 0x2);
						0x0 > _0x2d98c5 && (_0x2d98c5 = 0x0);
						0x0 > _0x5bd7ab && (_0x5bd7ab = 0x0);
						ig['domHandler']['resizeOffset'](_0x4f148, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']), _0x2d98c5, _0x5bd7ab);
						var _0xb130f8 = !0x1;
						if (this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'])
							if (this['enableStretchToFitOnAntiPortraitModeFlag']) ig['domHandler']['resizeOffset'](_0x4f148, Math['floor'](window['innerWidth']), Math['floor'](window['innerHeight']), 0x0, 0x0);
							else {
								var _0xb130f8 = new Vector2(window['innerWidth'] / this['mobile']['actualResolution']['y'], window['innerHeight'] / this['mobile']['actualResolution']['x']),
									_0x2d98c5 = Math['min'](_0xb130f8['x'], _0xb130f8['y']),
									_0xb130f8 = this['mobile']['actualResolution']['y'] * _0x2d98c5,
									_0x37fe0d = this['mobile']['actualResolution']['x'] * _0x2d98c5,
									_0x2d98c5 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - _0xb130f8 / 0x2),
									_0x5bd7ab = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - _0x37fe0d / 0x2);
								0x0 > _0x2d98c5 && (_0x2d98c5 = 0x0);
								0x0 > _0x5bd7ab && (_0x5bd7ab = 0x0);
								ig['domHandler']['resizeOffset'](_0x4f148, Math['floor'](_0xb130f8), Math['floor'](_0x37fe0d), _0x2d98c5, _0x5bd7ab);
							}
					} else ig['domHandler']['resize'](_0x4f148, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']));
				else this['enableStretchToFitOnDesktopFlag'] ? ig['domHandler']['resize'](_0x4f148, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y'])) : (_0x2d98c5 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['x'] / 0x2), _0x5bd7ab = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['y'] / 0x2), 0x0 > _0x2d98c5 && (_0x2d98c5 = 0x0), 0x0 > _0x5bd7ab && (_0x5bd7ab = 0x0), ig['domHandler']['resizeOffset'](_0x4f148, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y']), _0x2d98c5, _0x5bd7ab));
			}
			for (var _0x16bf3c in this['adsToResize']) _0x47e732 = ig['domHandler']['getElementById']('#' + _0x16bf3c), _0x4f148 = ig['domHandler']['getElementById']('#' + _0x16bf3c + '-Box'), _0xb130f8 = (window['innerWidth'] - this['adsToResize'][_0x16bf3c]['box-width']) / 0x2 + 'px', _0x2d98c5 = (window['innerHeight'] - this['adsToResize'][_0x16bf3c]['box-height']) / 0x2 + 'px', _0x47e732 && ig['domHandler']['css'](_0x47e732, {
				'width': window['innerWidth'],
				'height': window['innerHeight']
			}), _0x4f148 && ig['domHandler']['css'](_0x4f148, {
				'left': _0xb130f8,
				'top': _0x2d98c5
			});
			_0x47e732 = ig['domHandler']['getElementById']('#canvas');
			_0x4f148 = ig['domHandler']['getOffsets'](_0x47e732);
			_0x47e732 = _0x4f148['left'];
			_0x4f148 = _0x4f148['top'];
			_0xb130f8 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
			for (_0x16bf3c in this['dynamicClickableEntityDivs']) {
				_0x2d98c5 = ig['domHandler']['getElementById']('#' + _0x16bf3c);
				if (ig['ua']['mobile']) {
					var _0x37fe0d = this['dynamicClickableEntityDivs'][_0x16bf3c]['entity_pos_x'],
						_0x4caff3 = this['dynamicClickableEntityDivs'][_0x16bf3c]['entity_pos_y'],
						_0x518292 = this['dynamicClickableEntityDivs'][_0x16bf3c]['width'],
						_0x5bd7ab = this['dynamicClickableEntityDivs'][_0x16bf3c]['height'];
					this['disableStretchToFitOnMobileFlag'] ? (_0x37fe0d = Math['floor'](_0x47e732 + _0x37fe0d * this['scaleRatioMultiplier']['x']) + 'px', _0x4caff3 = Math['floor'](_0x4f148 + _0x4caff3 * this['scaleRatioMultiplier']['y']) + 'px', _0x518292 = Math['floor'](_0x518292 * this['scaleRatioMultiplier']['x']) + 'px', _0x5bd7ab = Math['floor'](_0x5bd7ab * this['scaleRatioMultiplier']['y']) + 'px') : (_0x37fe0d = Math['floor'](_0x37fe0d * this['sizeRatio']['x']) + 'px', _0x4caff3 = Math['floor'](_0x4caff3 * this['sizeRatio']['y']) + 'px', _0x518292 = Math['floor'](_0x518292 * this['sizeRatio']['x']) + 'px', _0x5bd7ab = Math['floor'](_0x5bd7ab * this['sizeRatio']['y']) + 'px');
				} else _0x37fe0d = this['dynamicClickableEntityDivs'][_0x16bf3c]['entity_pos_x'], _0x4caff3 = this['dynamicClickableEntityDivs'][_0x16bf3c]['entity_pos_y'], _0x518292 = this['dynamicClickableEntityDivs'][_0x16bf3c]['width'], _0x5bd7ab = this['dynamicClickableEntityDivs'][_0x16bf3c]['height'], this['enableStretchToFitOnDesktopFlag'] ? (_0x37fe0d = Math['floor'](_0x37fe0d * this['sizeRatio']['x']) + 'px', _0x4caff3 = Math['floor'](_0x4caff3 * this['sizeRatio']['y']) + 'px', _0x518292 = Math['floor'](_0x518292 * this['sizeRatio']['x']) + 'px', _0x5bd7ab = Math['floor'](_0x5bd7ab * this['sizeRatio']['y']) + 'px') : (_0x37fe0d = Math['floor'](_0x47e732 + _0x37fe0d * this['scaleRatioMultiplier']['x']) + 'px', _0x4caff3 = Math['floor'](_0x4f148 + _0x4caff3 * this['scaleRatioMultiplier']['y']) + 'px', _0x518292 = Math['floor'](_0x518292 * this['scaleRatioMultiplier']['x']) + 'px', _0x5bd7ab = Math['floor'](_0x5bd7ab * this['scaleRatioMultiplier']['y']) + 'px');
				ig['domHandler']['css'](_0x2d98c5, {
					'float': 'left',
					'position': 'absolute',
					'left': _0x37fe0d,
					'top': _0x4caff3,
					'width': _0x518292,
					'height': _0x5bd7ab,
					'z-index': 0x3
				});
				this['dynamicClickableEntityDivs'][_0x16bf3c]['font-size'] && ig['domHandler']['css'](_0x2d98c5, {
					'font-size': this['dynamicClickableEntityDivs'][_0x16bf3c]['font-size'] * _0xb130f8 + 'px'
				});
			}
			$('#ajaxbar')['width'](this['windowSize']['x']);
			$('#ajaxbar')['height'](this['windowSize']['y']);
		},
		'resize': function() {
			this['sizeCalcs']();
			this['resizeLayers']();
		},
		'reorient': function() {
			console['log']('changing\x20orientation\x20...');
			if (ig['ua']['mobile']) {
				var _0x5065ca = !0x1,
					_0x5065ca = this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'],
					_0x303ec9 = this['domHandler']['getElementById']('#orientate'),
					_0x222cf1 = this['domHandler']['getElementById']('#game');
				_0x5065ca ? (this['domHandler']['show'](_0x303ec9), this['domHandler']['hide'](_0x222cf1), console['log']('portrait' + window['innerWidth'] + ',' + window['innerHeight'])) : (this['domHandler']['show'](_0x222cf1), this['domHandler']['hide'](_0x303ec9), console['log']('landscape' + window['innerWidth'] + ',' + window['innerHeight']));
			}
			ig['ua']['mobile'] ? (this['resize'](), this['resizeAds']()) : this['resize']();
		},
		'resizeAds': function() {
			for (var _0x6ac724 in this['adsToResize']) {
				var _0x4b78bc = ig['domHandler']['getElementById']('#' + _0x6ac724),
					_0x1298ce = ig['domHandler']['getElementById']('#' + _0x6ac724 + '-Box'),
					_0x563c7a = (window['innerWidth'] - this['adsToResize'][_0x6ac724]['box-width']) / 0x2 + 'px',
					_0x2f1302 = (window['innerHeight'] - this['adsToResize'][_0x6ac724]['box-height']) / 0x2 + 'px';
				_0x4b78bc && ig['domHandler']['css'](_0x4b78bc, {
					'width': window['innerWidth'],
					'height': window['innerHeight']
				});
				_0x1298ce && ig['domHandler']['css'](_0x1298ce, {
					'left': _0x563c7a,
					'top': _0x2f1302
				});
			}
		},
		'samsungFix': function() {
			ig['ua']['android'] && !(4.2 > parseFloat(navigator['userAgent']['slice'](navigator['userAgent']['indexOf']('Android') + 0x8, navigator['userAgent']['indexOf']('Android') + 0xb))) && (!(0x0 > navigator['userAgent']['indexOf']('GT')) && !(0x0 < navigator['userAgent']['indexOf']('Chrome')) && !(0x0 < navigator['userAgent']['indexOf']('Firefox'))) && (document['addEventListener']('touchstart', function(_0x3da953) {
				_0x3da953['preventDefault']();
				return !0x1;
			}, !0x1), document['addEventListener']('touchmove', function(_0x27f932) {
				_0x27f932['preventDefault']();
				return !0x1;
			}, !0x1), document['addEventListener']('touchend', function(_0x1457f2) {
				_0x1457f2['preventDefault']();
				return !0x1;
			}, !0x1));
		},
		'orientationInterval': null,
		'orientationTimeout': null,
		'orientationHandler': function() {
			this['reorient']();
			window['scrollTo'](0x0, 0x1);
		},
		'orientationDelayHandler': function() {
			null == this['orientationInterval'] && (this['orientationInterval'] = window['setInterval'](this['orientationHandler']['bind'](this), 0x64));
			null == this['orientationTimeout'] && (this['orientationTimeout'] = window['setTimeout'](function() {
				this['clearAllIntervals']();
			} ['bind'](this), 0x7d0));
		},
		'clearAllIntervals': function() {
			window['clearInterval'](this['orientationInterval']);
			this['orientationInterval'] = null;
			window['clearTimeout'](this['orientationTimeout']);
			this['orientationTimeout'] = null;
		},
		'eventListenerSetup': function() {
			ig['ua']['iOS'] ? (window['addEventListener']('orientationchange', this['orientationDelayHandler']['bind'](this)), window['addEventListener']('resize', this['orientationDelayHandler']['bind'](this))) : (window['addEventListener']('orientationchange', this['orientationHandler']['bind'](this)), window['addEventListener']('resize', this['orientationHandler']['bind'](this)));
			document['ontouchmove'] = function(_0x27a0ab) {
				window['scrollTo'](0x0, 0x1);
				_0x27a0ab['preventDefault']();
			};
			this['chromePullDownRefreshFix']();
		},
		'chromePullDownRefreshFix': function() {
			var _0x3ff861 = window['chrome'] || navigator['userAgent']['match']('CriOS'),
				_0x497515 = 'ontouchstart' in document['documentElement'];
			if (_0x3ff861 && _0x497515) {
				var _0x51db34 = _0x3ff861 = !0x1,
					_0xe65d97 = 0x0,
					_0x246255 = !0x1;
				try {
					CSS['supports']('overscroll-behavior-y', 'contain') && (_0x3ff861 = !0x0);
				} catch (_0x2862cc) {}
				try {
					if (_0x3ff861) return document['body']['style']['overscrollBehaviorY'] = 'contain';
				} catch (_0x104c23) {}
				_0x3ff861 = document['head'] || document['body'];
				_0x497515 = document['createElement']('style');
				_0x497515['type'] = 'text/css';
				_0x497515['styleSheet'] ? _0x497515['styleSheet']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500x;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20auto!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' : _0x497515['appendChild'](document['createTextNode']('\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20auto!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'));
				_0x3ff861['appendChild'](_0x497515);
				try {
					addEventListener('test', null, {
						get 'passive'() {
							_0x51db34 = !0x0;
						}
					});
				} catch (_0x95ba2d) {}
				document['addEventListener']('touchstart', function(_0x2cc49c) {
					0x1 === _0x2cc49c['touches']['length'] && (_0xe65d97 = _0x2cc49c['touches'][0x0]['clientY'], _0x246255 = 0x0 === window['pageYOffset']);
				}, !!_0x51db34 && {
					'passive': !0x0
				});
				document['addEventListener']('touchmove', function(_0x3f46ee) {
					var _0xad1b6e;
					if (_0xad1b6e = _0x246255) {
						_0x246255 = !0x1;
						_0xad1b6e = _0x3f46ee['touches'][0x0]['clientY'];
						var _0x101909 = _0xad1b6e - _0xe65d97;
						_0xad1b6e = (_0xe65d97 = _0xad1b6e, 0x0 < _0x101909);
					}
					if (_0xad1b6e) return _0x3f46ee['preventDefault']();
				}, !!_0x51db34 && {
					'passive': !0x1
				});
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.api-handler')['defines'](function() {
	ig['ApiHandler'] = ig['Class']['extend']({
		'apiAvailable': {
			'MJSPreroll': function() {
				ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS && _SETTINGS['Ad']['Mobile']['Preroll']['Enabled'] && MobileAdInGamePreroll['Initialize']();
			},
			'MJSHeader': function() {
				ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Header']['Enabled'] && MobileAdInGameHeader['Initialize']();
			},
			'MJSFooter': function() {
				ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Footer']['Enabled'] && MobileAdInGameFooter['Initialize']();
			},
			'MJSEnd': function() {
				ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['End']['Enabled'] && MobileAdInGameEnd['Initialize']();
			}
		},
		'run': function(_0x3060b6, _0x324eff) {
			if (this['apiAvailable'][_0x3060b6]) this['apiAvailable'][_0x3060b6](_0x324eff);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-player')['defines'](function() {
	SoundPlayer = ig['Class']['extend']({
		'tagName': 'SoundPlayer',
		'stayMuteFlag': !0x1,
		'debug': !0x1,
		'init': function() {
			this['debug'] && console['log'](this['tagName']);
		},
		'play': function(_0x544790) {
			this['debug'] && console['log']('play\x20sound\x20', _0x544790);
		},
		'stop': function() {
			this['debug'] && console['log']('stop\x20sound\x20');
		},
		'volume': function() {
			this['debug'] && console['log']('set\x20volume');
		},
		'mute': function(_0x5c8d2f) {
			this['debug'] && console['log']('mute');
			'undefined' === typeof _0x5c8d2f ? this['stayMuteFlag'] = !0x0 : _0x5c8d2f && (this['stayMuteFlag'] = !0x0);
		},
		'unmute': function(_0x8e98f7) {
			this['debug'] && console['log']('unmute');
			'undefined' === typeof _0x8e98f7 ? this['stayMuteFlag'] = !0x1 : _0x8e98f7 && (this['stayMuteFlag'] = !0x1);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.impact-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
	ImpactMusicPlayer = SoundPlayer['extend']({
		'tagName': 'ImpactMusicPlayer',
		'bgmPlaying': !0x1,
		'soundList': {},
		'init': function(_0x2ed7cb, _0x2245c3) {
			this['parent'](_0x2ed7cb, _0x2245c3);
			for (var _0x298d9a in _0x2ed7cb) this['soundList'][_0x298d9a] = _0x298d9a, ig['music']['add'](_0x2ed7cb[_0x298d9a]['path'] + '.*', _0x298d9a);
			_0x2245c3 && _0x2245c3['loop'] && (ig['music']['loop'] = _0x2245c3['loop']);
		},
		'play': function(_0x233d42) {
			this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, 'undefined' === typeof _0x233d42 ? ig['music']['play'](_0x233d42) : ig['music']['play']());
		},
		'stop': function() {
			this['bgmPlaying'] = !0x1;
			ig['music']['pause']();
		},
		'volume': function(_0x56e01c) {
			console['log']('impactmusic:', _0x56e01c);
			ig['music']['volume'] = 0x0 > _0x56e01c ? 0x0 : isNaN(_0x56e01c) ? 0x1 : 0x1 < _0x56e01c ? 0x1 : _0x56e01c;
		},
		'getVolume': function() {
			return ig['music']['volume'];
		},
		'mute': function(_0x4f55ca) {
			this['parent'](_0x4f55ca);
			this['bgmPlaying'] && this['stop']();
		},
		'unmute': function(_0x1461f7) {
			this['parent'](_0x1461f7);
			this['play']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.impact-sound-player')['requires']('plugins.audio.sound-player')['defines'](function() {
	ImpactSoundPlayer = SoundPlayer['extend']({
		'tagName': 'ImpactSoundPlayer',
		'soundList': {},
		'init': function(_0x5037b4, _0x470597) {
			this['parent'](_0x5037b4, _0x470597);
			for (var _0x18daf2 in _0x5037b4) {
				var _0xb5cb74 = new ig['Sound'](_0x5037b4[_0x18daf2]['path'] + '.*');
				this['soundList'][_0x18daf2] = _0xb5cb74;
			}
		},
		'play': function(_0xdb1293) {
			this['stayMuteFlag'] || ('object' === typeof _0xdb1293 ? (console['log'](_0xdb1293 + '\x20exists'), _0xdb1293['play']()) : 'string' === typeof _0xdb1293 && this['soundList'][_0xdb1293]['play']());
		},
		'stop': function(_0x4424a9) {
			this['parent'](_0x4424a9);
			_0x4424a9['stop']();
		},
		'volume': function(_0x552988) {
			ig['soundManager']['volume'] = 0x0 > _0x552988 ? 0x0 : isNaN(_0x552988) ? 0x1 : 0x1 < _0x552988 ? 0x1 : _0x552988;
		},
		'getVolume': function() {
			return ig['soundManager']['volume'];
		},
		'mute': function(_0x5cb92a) {
			this['parent'](_0x5cb92a);
			ig['Sound']['enabled'] = !0x1;
		},
		'unmute': function(_0x4d1366) {
			this['parent'](_0x4d1366);
			ig['Sound']['enabled'] = !0x0;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.howler-player')['requires']('plugins.audio.sound-player')['defines'](function() {
	HowlerPlayer = SoundPlayer['extend']({
		'tagName': 'HowlerPlayer',
		'soundList': {},
		'init': function(_0xd4c85e, _0x50e9af) {
			this['parent'](_0xd4c85e, _0x50e9af);
			for (var _0x55b48c in _0xd4c85e) {
				var _0xe75482 = _0xd4c85e[_0x55b48c]['path'],
					_0xe75482 = new Howl({
						'src': [_0xe75482 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0xe75482 + '.' + ig['Sound']['FORMAT']['MP3']['ext']]
					});
				this['soundList'][_0x55b48c] = _0xe75482;
			}
		},
		'play': function(_0x1f86d6) {
			this['stayMuteFlag'] || ('object' === typeof _0x1f86d6 ? _0x1f86d6['play']() : 'string' === typeof _0x1f86d6 && this['soundList'][_0x1f86d6]['play']());
		},
		'stop': function(_0x4c40b5) {
			this['parent'](_0x4c40b5);
			'object' === typeof _0x4c40b5 ? _0x4c40b5['stop']() : 'string' === typeof _0x4c40b5 && this['soundList'][_0x4c40b5]['stop']();
		},
		'volume': function(_0x47e3cc) {
			for (var _0x54c2e4 in this['soundList']) {
				if (0x0 > _0x47e3cc) {
					this['soundList'][_0x54c2e4]['volume'](0x0);
					break;
				}
				isNaN(_0x47e3cc) ? this['soundList'][_0x54c2e4]['volume'](0x1) : 0x1 < _0x47e3cc ? this['soundList'][_0x54c2e4]['volume'](0x1) : this['soundList'][_0x54c2e4]['volume'](_0x47e3cc);
			}
		},
		'getVolume': function() {
			for (var _0x3d7d04 in this['soundList']) return this['soundList'][_0x3d7d04]['volume']();
		},
		'mute': function(_0x203146) {
			this['parent'](_0x203146);
			Howler['mute'](!0x0);
		},
		'unmute': function(_0x3686e3) {
			this['parent'](_0x3686e3);
			Howler['mute'](!0x1);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.howler-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
	HowlerMusicPlayer = SoundPlayer['extend']({
		'tagName': 'HowlerMusicPlayer',
		'bgmPlaying': !0x1,
		'soundList': {},
		'init': function(_0x3b7146, _0xfa92ec) {
			this['parent'](_0x3b7146, _0xfa92ec);
			for (var _0x37a176 in _0x3b7146) {
				var _0x433879 = _0x3b7146[_0x37a176]['path'],
					_0x433879 = new Howl({
						'src': [_0x433879 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x433879 + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
						'loop': !0x0,
						'autoplay': !0x1,
						'onend': function() {} ['bind'](this)
					});
				this['soundList'][_0x37a176] = _0x433879;
			}
		},
		'play': function(_0x4cd7be) {
			if (!this['stayMuteFlag'] && !this['bgmPlaying'])
				if ('object' === typeof _0x4cd7be) this['bgmPlaying'] = !0x0, _0x4cd7be['play']();
				else if ('string' === typeof _0x4cd7be) this['bgmPlaying'] = !0x0, this['soundList'][_0x4cd7be]['play']();
			else
				for (var _0x52cbbf in this['soundList']) {
					this['soundList'][_0x52cbbf]['play']();
					this['bgmPlaying'] = !0x0;
					break;
				}
		},
		'stop': function(_0x2777c4) {
			this['parent'](_0x2777c4);
			if (this['bgmPlaying']) {
				for (var _0x63f10d in this['soundList']) this['soundList'][_0x63f10d]['stop']();
				this['bgmPlaying'] = !0x1;
			}
		},
		'volume': function(_0xb80f34) {
			console['log']('howler', _0xb80f34);
			for (var _0x408888 in this['soundList']) {
				if (0x0 > _0xb80f34) {
					this['soundList'][_0x408888]['volume'](0x0);
					break;
				}
				isNaN(_0xb80f34) ? this['soundList'][_0x408888]['volume'](0x1) : 0x1 < _0xb80f34 ? this['soundList'][_0x408888]['volume'](0x1) : this['soundList'][_0x408888]['volume'](_0xb80f34);
			}
		},
		'getVolume': function() {
			for (var _0x221c8c in this['soundList']) return this['soundList'][_0x221c8c]['volume']();
		},
		'mute': function(_0x1461e4) {
			this['parent'](_0x1461e4);
			Howler['mute'](!0x0);
		},
		'unmute': function(_0x3bba26) {
			this['parent'](_0x3bba26);
			Howler['mute'](!0x1);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.jukebox-player')['requires']('plugins.audio.sound-player')['defines'](function() {
	JukeboxPlayer = SoundPlayer['extend']({
		'tagName': 'JukeboxPlayer',
		'bgmPlaying': !0x1,
		'soundList': {},
		'jukeboxPlayer': null,
		'pausePosition': 0x0,
		'premuteVolume': 0x0,
		'minVolume': 0.001,
		'init': function(_0x1570ba, _0x19d136) {
			this['parent'](_0x1570ba, _0x19d136);
			for (var _0x2ad567 in _0x1570ba) {
				this['soundList'][_0x2ad567] = _0x2ad567;
				var _0x1a04ef = _0x1570ba[_0x2ad567]['path'];
				this['jukeboxPlayer'] = new jukebox['Player']({
					'resources': [_0x1a04ef + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x1a04ef + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
					'autoplay': !0x1,
					'spritemap': {
						'music': {
							'start': _0x1570ba[_0x2ad567]['startMp3'],
							'end': _0x1570ba[_0x2ad567]['endMp3'],
							'loop': !0x0
						}
					}
				});
			}
		},
		'play': function() {
			this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, this['pausePosition'] ? (console['log']('resume'), this['jukeboxPlayer']['resume'](this['pausePosition'])) : (console['log']('play'), this['jukeboxPlayer']['play'](this['jukeboxPlayer']['settings']['spritemap']['music']['start'], !0x0)), this['premuteVolume'] = this['getVolume']());
		},
		'stop': function() {
			this['bgmPlaying'] = !0x1;
			this['pausePosition'] = this['jukeboxPlayer']['pause']();
		},
		'volume': function(_0x116dc5) {
			console['log']('jukebox:', _0x116dc5);
			0x0 >= _0x116dc5 ? this['jukeboxPlayer']['setVolume'](this['minVolume']) : isNaN(_0x116dc5) ? this['jukeboxPlayer']['setVolume'](0x1) : 0x1 < _0x116dc5 ? this['jukeboxPlayer']['setVolume'](0x1) : this['jukeboxPlayer']['setVolume'](_0x116dc5);
		},
		'getVolume': function() {
			return this['jukeboxPlayer']['getVolume']();
		},
		'mute': function(_0x1aac93) {
			this['parent'](_0x1aac93);
			this['bgmPlaying'] && (console['log']('jukebox', this['premuteVolume']), this['stayMuteFlag'] || (this['premuteVolume'] = this['getVolume']()), this['jukeboxPlayer']['pause'](), this['jukeboxPlayer']['setVolume'](this['minVolume']));
		},
		'unmute': function(_0x39502a) {
			this['parent'](_0x39502a);
			this['stayMuteFlag'] || (console['log']('jukebox', this['premuteVolume']), this['jukeboxPlayer']['setVolume'](this['premuteVolume']), this['jukeboxPlayer']['resume']());
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.webaudio-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
	WebaudioMusicPlayer = SoundPlayer['extend']({
		'tagName': 'WebaudioMusicPlayer',
		'bgmPlaying': !0x1,
		'isSupported': !0x1,
		'muteFlag': !0x1,
		'pausedTime': 0x0,
		'webaudio': null,
		'useHTML5Audio': !0x1,
		'audio': null,
		'inactiveAudio': null,
		'codecs': null,
		'reinitOnPlay': !0x1,
		'inputList': null,
		'_volume': 0x1,
		'soundList': {},
		'init': function(_0x58ee28) {
			this['webaudio'] = {
				'compatibility': {},
				'gainNode': null,
				'buffer': null,
				'source_loop': {},
				'source_once': {}
			};
			try {
				Howler && Howler['ctx'] ? this['webaudio']['context'] = Howler['ctx'] : ig && ig['webaudio_ctx'] ? this['webaudio']['context'] = ig['webaudio_ctx'] : (this['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'], this['webaudio']['context'] = new this['AudioContext'](), ig['webaudio_ctx'] = this['webaudio']['context']), this['isSupported'] = !0x0;
			} catch (_0xbfa678) {
				console['log']('Web\x20Audio\x20API\x20not\x20supported\x20in\x20this\x20browser.'), this['webaudio'] = null, this['useHTML5Audio'] = !0x0;
			}
			if (this['useHTML5Audio'])
				if ('undefined' !== typeof Audio) try {
					new Audio();
				} catch (_0x690af1) {
					this['useHTML5Audio'] = !0x1;
				} else this['useHTML5Audio'] = !0x1;
			this['useHTML5Audio'] && (this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x58ee28));
			if (!this['isSupported']) return null;
			this['webaudio'] && (this['inputList'] = _0x58ee28, this['initWebAudio'](_0x58ee28));
		},
		'initWebAudio': function(_0x39d296) {
			ig['ua']['iOS'] && this['initIOSWebAudioUnlock']();
			this['webaudio']['gainNode'] = this['webaudio']['context']['createGain']();
			this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']);
			this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
			this['webaudio']['buffer'] = null;
			var _0x34c6cc = 'start',
				_0x2bd39d = 'stop',
				_0x2077d6 = this['webaudio']['context']['createBufferSource']();
			'function' !== typeof _0x2077d6['start'] && (_0x34c6cc = 'noteOn');
			this['webaudio']['compatibility']['start'] = _0x34c6cc;
			'function' !== typeof _0x2077d6['stop'] && (_0x2bd39d = 'noteOff');
			this['webaudio']['compatibility']['stop'] = _0x2bd39d;
			for (var _0x285767 in _0x39d296) {
				this['soundList'][_0x285767] = _0x285767;
				var _0x2bd39d = _0x39d296[_0x285767]['path'],
					_0x34c6cc = _0x2bd39d + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
					_0x52d625 = _0x2bd39d + '.' + ig['Sound']['FORMAT']['OGG']['ext'];
				ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x52d625 = _0x34c6cc) : (_0x2bd39d = navigator['userAgent']['toLowerCase'](), -0x1 != _0x2bd39d['indexOf']('safari') && -0x1 >= _0x2bd39d['indexOf']('chrome') && (_0x52d625 = _0x34c6cc), _0x2bd39d['indexOf']('win64') && (_0x52d625 = _0x34c6cc));
				var _0x4cb61d = new XMLHttpRequest();
				_0x4cb61d['open']('GET', _0x52d625, !0x0);
				_0x4cb61d['responseType'] = 'arraybuffer';
				_0x4cb61d['onload'] = function() {
					this['webaudio']['context']['decodeAudioData'](_0x4cb61d['response'], function(_0x5b9e82) {
						this['webaudio']['buffer'] = _0x5b9e82;
						this['webaudio']['source_loop'] = {};
						this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
					} ['bind'](this), function() {
						console['log']('Error\x20decoding\x20audio\x20\x22' + _0x52d625 + '\x22.');
					});
				} ['bind'](this);
				_0x4cb61d['send']();
				if (0x4 == _0x4cb61d['readyState'] && 'undefined' !== typeof Audio) {
					this['useHTML5Audio'] = !0x0;
					try {
						new Audio();
					} catch (_0x4fcdf8) {
						this['useHTML5Audio'] = !0x1;
					}
					this['useHTML5Audio'] && (console['log']('Using\x20HTML5\x20Audio'), this['webaudio'] = null, this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x39d296));
				}
				break;
			}
		},
		'initIOSWebAudioUnlock': function() {
			if (this['webaudio']) {
				webaudio = this['webaudio'];
				var _0x8e4e19 = function() {
					var _0x26a758 = webaudio['context'],
						_0x54fef5 = _0x26a758['createBuffer'](0x1, 0x1, 0x5622),
						_0x39eb8e = _0x26a758['createBufferSource']();
					_0x39eb8e['buffer'] = _0x54fef5;
					_0x39eb8e['connect'](_0x26a758['destination']);
					'undefined' === typeof _0x39eb8e['start'] ? _0x39eb8e['noteOn'](0x0) : _0x39eb8e['start'](0x0);
					setTimeout(function() {
						(_0x39eb8e['playbackState'] === _0x39eb8e['PLAYING_STATE'] || _0x39eb8e['playbackState'] === _0x39eb8e['FINISHED_STATE']) && window['removeEventListener']('touchend', _0x8e4e19, !0x1);
					} ['bind'](this), 0x0);
				};
				window['addEventListener']('touchend', _0x8e4e19, !0x1);
			}
		},
		'initHTML5Audio': function(_0x4a0f42) {
			if (this['useHTML5Audio'] && this['audio']) {
				var _0x16c646 = this['audio'];
				this['codecs'] = {};
				this['codecs'] = {
					'mp3': !!_0x16c646['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
					'opus': !!_0x16c646['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
					'ogg': !!_0x16c646['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
					'wav': !!_0x16c646['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
					'aac': !!_0x16c646['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
					'm4a': !!(_0x16c646['canPlayType']('audio/x-m4a;') || _0x16c646['canPlayType']('audio/m4a;') || _0x16c646['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
					'mp4': !!(_0x16c646['canPlayType']('audio/x-mp4;') || _0x16c646['canPlayType']('audio/mp4;') || _0x16c646['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
					'weba': !!_0x16c646['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, '')
				};
				this['is'] = {
					'ff': Boolean(null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']())),
					'ie': Boolean(document['all'] && !window['opera']),
					'opera': Boolean(window['opera']),
					'chrome': Boolean(window['chrome']),
					'safari': Boolean(!window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()) && window['getComputedStyle'] && !window['globalStorage'] && !window['opera'])
				};
				this['playDelay'] = -0x3c;
				this['stopDelay'] = 0x1e;
				this['is']['chrome'] && (this['playDelay'] = -0x19);
				this['is']['chrome'] && (this['stopDelay'] = 0x19);
				this['is']['ff'] && (this['playDelay'] = -0x19);
				this['is']['ff'] && (this['stopDelay'] = 0x55);
				this['is']['opera'] && (this['playDelay'] = 0x5);
				this['is']['opera'] && (this['stopDelay'] = 0x0);
				for (var _0x347d77 in _0x4a0f42) {
					this['soundList'][_0x347d77] = _0x347d77;
					var _0xa1421e = _0x4a0f42[_0x347d77]['path'],
						_0x16c646 = _0xa1421e + '.' + ig['Sound']['FORMAT']['OGG']['ext'],
						_0xa1421e = _0xa1421e + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
						_0x1aa6b2 = null;
					this['codecs'][ig['Sound']['FORMAT']['OGG']['ext']['toLowerCase']()] ? _0x1aa6b2 = _0x16c646 : this['codecs'][ig['Sound']['FORMAT']['MP3']['ext']['toLowerCase']()] && (_0x1aa6b2 = _0xa1421e);
					if (_0x1aa6b2) {
						ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x1aa6b2 = _0xa1421e) : (_0x4a0f42 = navigator['userAgent']['toLowerCase'](), -0x1 != _0x4a0f42['indexOf']('safari') && -0x1 >= _0x4a0f42['indexOf']('chrome') && (_0x1aa6b2 = _0xa1421e));
						this['audio']['addEventListener']('error', function() {
							this['audio']['error'] && 0x4 === this['audio']['error']['code'] && (this['isSupported'] = !0x1);
						}, !0x1);
						this['audio']['src'] = _0x1aa6b2;
						this['audio']['_pos'] = 0x0;
						this['audio']['preload'] = 'auto';
						this['audio']['volume'] = this['_volume'];
						this['inactiveAudio'] = new Audio();
						this['inactiveAudio']['src'] = _0x1aa6b2;
						this['inactiveAudio']['_pos'] = 0x0;
						this['inactiveAudio']['preload'] = 'auto';
						this['inactiveAudio']['volume'] = this['_volume'];
						this['inactiveAudio']['load']();
						var _0x4f1ec7 = function() {
							this['_duration'] = this['audio']['duration'];
							this['_loaded'] || (this['_loaded'] = !0x0);
							this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
							this['audio']['removeEventListener']('canplaythrough', _0x4f1ec7, !0x1);
						} ['bind'](this);
						this['audio']['addEventListener']('canplaythrough', _0x4f1ec7, !0x1);
						this['audio']['load']();
						break;
					}
				}
			}
		},
		'play': function(_0xb690f, _0x4ffad3) {
			if (this['isSupported'])
				if (this['bgmPlaying'] = !0x0, this['webaudio']) {
					if (!_0x4ffad3 && this['reinitOnPlay'] && this['webaudio']['source_loop']['buffer'] == this['webaudio']['buffer']) {
						if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
						try {
							this['webaudio']['context']['close']();
							this['webaudio']['context'] = new this['AudioContext']();
							this['webaudio']['gainNode'] = this['webaudio']['context']['createGain']();
							this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']);
							this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
							var _0x34381c = 'start',
								_0x2fa815 = 'stop',
								_0x116102 = this['webaudio']['context']['createBufferSource']();
							'function' !== typeof _0x116102['start'] && (_0x34381c = 'noteOn');
							this['webaudio']['compatibility']['start'] = _0x34381c;
							'function' !== typeof _0x116102['stop'] && (_0x2fa815 = 'noteOff');
							this['webaudio']['compatibility']['stop'] = _0x2fa815;
							this['webaudio']['source_loop'] = {};
							this['play'](null, !0x0);
						} catch (_0x5f5c81) {}
					}
					if (this['webaudio']['buffer']) {
						if (!this['muteFlag'] && (this['bgmPlaying'] = !0x0, !this['webaudio']['source_loop']['_playing'])) {
							this['webaudio']['source_loop'] = this['webaudio']['context']['createBufferSource']();
							this['webaudio']['source_loop']['buffer'] = this['webaudio']['buffer'];
							this['webaudio']['source_loop']['loop'] = !0x0;
							this['webaudio']['source_loop']['connect'](this['webaudio']['gainNode']);
							if (null == _0xb690f || isNaN(_0xb690f)) _0xb690f = 0x0, this['pausedTime'] && (_0xb690f = this['pausedTime']);
							this['webaudio']['source_loop']['_startTime'] = this['webaudio']['context']['currentTime'];
							if ('noteOn' === this['webaudio']['compatibility']['start']) this['webaudio']['source_once'] = this['webaudio']['context']['createBufferSource'](), this['webaudio']['source_once']['buffer'] = this['webaudio']['buffer'], this['webaudio']['source_once']['connect'](this['webaudio']['gainNode']), this['webaudio']['source_once']['noteGrainOn'](0x0, _0xb690f, this['webaudio']['buffer']['duration'] - _0xb690f), this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](this['webaudio']['context']['currentTime'] + (this['webaudio']['buffer']['duration'] - _0xb690f));
							else this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](0x0, _0xb690f);
							this['webaudio']['source_loop']['_playing'] = !0x0;
						}
					} else this['bgmPlaying'] = !0x0;
				} else if (this['audio']) {
				var _0x5a2460 = this['audio'];
				if (!this['muteFlag'])
					if (this['bgmPlaying'] = !0x0, isNaN(_0xb690f) && (_0xb690f = 0x0, this['pausedTime'] && (_0xb690f = this['pausedTime'])), _0x34381c = this['_duration'] - _0xb690f, this['_onEndTimer'] && (clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null), this['_onEndTimer'] = setTimeout(function() {
							this['audio']['currentTime'] = 0x0;
							this['audio']['pause']();
							this['pausedTime'] = 0x0;
							if (this['inactiveAudio']) {
								var _0x340f60 = this['audio'];
								this['audio'] = this['inactiveAudio'];
								this['inactiveAudio'] = _0x340f60;
							}
							this['play']();
						} ['bind'](this), 0x3e8 * _0x34381c + this['playDelay']), 0x4 === _0x5a2460['readyState'] || !_0x5a2460['readyState'] && navigator['isCocoonJS']) _0x5a2460['readyState'] = 0x4, _0x5a2460['currentTime'] = _0xb690f, _0x5a2460['muted'] = this['muteFlag'] || _0x5a2460['muted'], _0x5a2460['volume'] = this['_volume'], setTimeout(function() {
						_0x5a2460['play']();
					}, 0x0);
					else {
						clearTimeout(this['_onEndTimer']);
						this['_onEndTimer'] = null;
						var _0x3b1e38 = function() {
							typeof('function' == this['play']) && (this['play'](), _0x5a2460['removeEventListener']('canplaythrough', _0x3b1e38, !0x1));
						} ['bind'](this);
						_0x5a2460['addEventListener']('canplaythrough', _0x3b1e38, !0x1);
					}
			}
		},
		'stop': function() {
			this['bgmPlaying'] = !0x1;
			if (this['isSupported'])
				if (this['webaudio']) {
					if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
				} else if (this['audio']) {
				var _0x12a74d = this['audio'];
				0x4 == _0x12a74d['readyState'] && (this['pausedTime'] = _0x12a74d['currentTime'], _0x12a74d['currentTime'] = 0x0, _0x12a74d['pause'](), clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null);
			}
		},
		'volume': function(_0x8ca8a8) {
			if (isNaN(_0x8ca8a8) || null == _0x8ca8a8) return this['getVolume']();
			this['isSupported'] && (this['_volume'] = _0x8ca8a8, 0x0 > this['_volume'] ? this['_volume'] = 0x0 : 0x1 < this['_volume'] && (this['_volume'] = 0x1), this['webaudio'] ? this['webaudio']['gainNode'] && (this['webaudio']['gainNode']['gain']['value'] = this['_volume']) : this['audio'] && (this['audio']['volume'] = this['_volume'], this['inactiveAudio'] && (this['inactiveAudio']['volume'] = this['_volume'])));
		},
		'getVolume': function() {
			return !this['isSupported'] ? 0x0 : this['_volume'];
		},
		'mute': function(_0x41cad8) {
			this['parent'](_0x41cad8);
			!0x1 == this['muteFlag'] && (this['muteFlag'] = !0x0, this['bgmPlaying'] && (this['stop'](), this['bgmPlaying'] = !0x0));
		},
		'unmute': function(_0x50d998) {
			this['parent'](_0x50d998);
			!this['stayMuteFlag'] && !0x0 == this['muteFlag'] && (this['muteFlag'] = !0x1, this['bgmPlaying'] && this['play']());
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-info')['defines'](function() {
	SoundInfo = ig['Class']['extend']({
		'FORMATS': {
			'OGG': '.ogg',
			'MP3': '.mp3'
		},
		'sfx': {
			'kittyopeningSound': {
				'path': 'media/audio/opening/kittyopening'
			},
			'staticSound': {
				'path': 'media/audio/play/static'
			},
			'openingSound': {
				'path': 'media/audio/opening/opening'
			},
			'click': {
				'path': 'media/audio/sfx/click'
			},
			'match1': {
				'path': 'media/audio/sfx/match1'
			},
			'match2': {
				'path': 'media/audio/sfx/match2'
			},
			'match3': {
				'path': 'media/audio/sfx/match3'
			},
			'slide': {
				'path': 'media/audio/sfx/slide'
			},
			'bomb': {
				'path': 'media/audio/sfx/bomb'
			},
			'effect': {
				'path': 'media/audio/sfx/effect'
			},
			'samecolor': {
				'path': 'media/audio/sfx/samecolor'
			},
			'starpop': {
				'path': 'media/audio/sfx/star-pop'
			}
		},
		'bgm': {
			'background': {
				'path': 'media/audio/bgm/bgm',
				'startOgg': 0x0,
				'endOgg': 21.463,
				'startMp3': 0x0,
				'endMp3': 21.463
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-handler')['requires']('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info')['defines'](function() {
	ig['SoundHandler'] = ig['Class']['extend']({
		'bgmPlayer': null,
		'sfxPlayer': null,
		'focusBlurMute': !0x1,
		'soundInfo': new SoundInfo(),
		'init': function() {
			console['log']('Initiating\x20sound\x20handler');
			this['initWindowHandler']();
			ig['ua']['mobile'] ? (this['initPowerButtonFix'](), this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
				'loop': !0x0
			}), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new JukeboxPlayer(this['soundInfo']['bgm'], {
				'loop': !0x0
			}))) : (this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
				'loop': !0x0
			}), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new ImpactMusicPlayer(this['soundInfo']['bgm'], {
				'loop': !0x0
			})));
			this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']);
		},
		'checkBGM': function() {
			return this['bgmPlayer']['stayMuteFlag'];
		},
		'checkSFX': function() {
			return this['sfxPlayer']['stayMuteFlag'];
		},
		'muteSFX': function(_0x3b140b) {
			this['sfxPlayer'] && this['sfxPlayer']['mute'](_0x3b140b);
		},
		'muteBGM': function(_0x4b9081) {
			this['bgmPlayer'] && this['bgmPlayer']['mute'](_0x4b9081);
		},
		'unmuteSFX': function(_0x547711) {
			this['sfxPlayer'] && this['sfxPlayer']['unmute'](_0x547711);
		},
		'unmuteBGM': function(_0x28e478) {
			this['bgmPlayer'] && this['bgmPlayer']['unmute'](_0x28e478);
		},
		'muteAll': function(_0x123a2f) {
			this['muteSFX'](_0x123a2f);
			this['muteBGM'](_0x123a2f);
		},
		'unmuteAll': function(_0x2c8d99) {
			this['unmuteSFX'](_0x2c8d99);
			this['unmuteBGM'](_0x2c8d99);
		},
		'forceMuteAll': function() {
			this['focusBlurMute'] || this['muteAll'](!0x1);
			this['focusBlurMute'] = !0x0;
		},
		'forceUnMuteAll': function() {
			this['focusBlurMute'] && (this['unmuteAll'](!0x1), this['focusBlurMute'] = !0x1);
		},
		'initWindowHandler': function() {
			'true' === ig['domHandler']['getQueryVariable']('webview') ? ($(window)['focus'](function() {
				ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
			}), $(window)['blur'](function() {
				ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
			})) : (window['onfocus'] = function() {
				ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
			}, window['onblur'] = function() {
				ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
			});
		},
		'initPowerButtonFix': function() {
			var _0x48683c = this['getHiddenProp']();
			_0x48683c && (_0x48683c = _0x48683c['replace'](/[H|h]idden/, '') + 'visibilitychange', document['addEventListener'](_0x48683c, this['visChange']));
			window['addEventListener']('pagehide', function() {
				ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
			}, !0x1);
			window['addEventListener']('pageshow', function() {
				ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
			}, !0x1);
		},
		'getHiddenProp': function() {
			var _0x277bb7 = ['webkit', 'moz', 'ms', 'o'];
			if ('hidden' in document) return 'hidden';
			for (var _0x1473b0 = 0x0; _0x1473b0 < _0x277bb7['length']; _0x1473b0++)
				if (_0x277bb7[_0x1473b0] + 'Hidden' in document) return _0x277bb7[_0x1473b0] + 'Hidden';
			return null;
		},
		'isHidden': function() {
			var _0x37404f = this['getHiddenProp']();
			return !_0x37404f ? !0x1 : document[_0x37404f];
		},
		'visChange': function() {
			ig['soundHandler']['isHidden']() ? ig['soundHandler'] && ig['soundHandler']['forceMuteAll']() : ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
		},
		'saveVolume': function() {
			this['sfxPlayer'] && ig['game']['io']['storageSet']('soundVolume', this['sfxPlayer']['getVolume']());
			this['bgmPlayer'] && ig['game']['io']['storageSet']('musicVolume', this['bgmPlayer']['getVolume']());
		},
		'forceLoopBGM': function() {
			var _0x1a2950;
			if (!this['focusBlurMute'] && this['bgmPlayer']['bgmPlaying'] && this['bgmPlayer']) {
				var _0x301b2b = this['bgmPlayer']['jukeboxPlayer'];
				if (_0x301b2b) {
					null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']());
					_0x1a2950 = Boolean(window['chrome']);
					!window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']());
					var _0xaa88bd = 0.1;
					ig['ua']['mobile'] && (_0xaa88bd = 0.115, ig['ua']['android'] && (_0xaa88bd = 0.45, _0x1a2950 && (_0xaa88bd = 0.3)));
					_0x301b2b['settings']['spritemap']['music'] && (_0x1a2950 = _0x301b2b['settings']['spritemap']['music']['end'] - _0xaa88bd, _0x301b2b['getCurrentTime']() >= _0x1a2950 && (_0x1a2950 = _0x301b2b['settings']['spritemap']['music']['start'], ig['ua']['android'] ? this['forcelooped'] || (_0x301b2b['play'](_0x1a2950, !0x0), this['forcelooped'] = !0x0, setTimeout(function() {
						ig['soundHandler']['forcelooped'] = !0x1;
					}, _0xaa88bd)) : _0x301b2b['setCurrentTime'](_0x1a2950)));
				} else 'ImpactMusicPlayer' == this['bgmPlayer']['tagName'] && (null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']()), _0x1a2950 = Boolean(window['chrome']), !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()), _0xaa88bd = 0.1, ig['ua']['mobile'] && (_0xaa88bd = 0.115, ig['ua']['android'] && (_0xaa88bd = 0.45, _0x1a2950 && (_0xaa88bd = 0.3))), _0x301b2b = 0x0, 'mp3' == ig['soundManager']['format']['ext'] && (_0x301b2b = 0.05), ig['music']['currentTrack'] && (_0x1a2950 = ig['music']['currentTrack']['duration'] - _0xaa88bd, ig['music']['currentTrack']['currentTime'] >= _0x1a2950 && (ig['ua']['android'] ? this['forcelooped'] || (ig['music']['currentTrack']['pause'](), ig['music']['currentTrack']['currentTime'] = _0x301b2b, ig['music']['currentTrack']['play'](), this['forcelooped'] = !0x0, setTimeout(function() {
					ig['soundHandler']['forcelooped'] = !0x1;
				}, _0xaa88bd)) : ig['music']['currentTrack']['currentTime'] = _0x301b2b)));
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.storage')['defines'](function() {
	ig['Storage'] = ig['Class']['extend']({
		'staticInstantiate': function() {
			return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
		},
		'init': function() {
			ig['Storage']['instance'] = this;
		},
		'isCapable': function() {
			return 'undefined' !== typeof window['localStorage'];
		},
		'isSet': function(_0x476264) {
			return null !== this['get'](_0x476264);
		},
		'initUnset': function(_0x45eef2, _0x140173) {
			null === this['get'](_0x45eef2) && this['set'](_0x45eef2, _0x140173);
		},
		'get': function(_0x1c3342) {
			if (!this['isCapable']()) return null;
			try {
				return JSON['parse'](localStorage['getItem'](_0x1c3342));
			} catch (_0x4301ee) {
				return window['localStorage']['getItem'](_0x1c3342);
			}
		},
		'getInt': function(_0x331549) {
			return ~~this['get'](_0x331549);
		},
		'getFloat': function(_0x3f1768) {
			return parseFloat(this['get'](_0x3f1768));
		},
		'getBool': function(_0x1c78d5) {
			return !!this['get'](_0x1c78d5);
		},
		'key': function(_0x5d6ebf) {
			return this['isCapable']() ? window['localStorage']['key'](_0x5d6ebf) : null;
		},
		'set': function(_0x2c2eaa, _0x4c9831) {
			if (!this['isCapable']()) return null;
			try {
				window['localStorage']['setItem'](_0x2c2eaa, JSON['stringify'](_0x4c9831));
			} catch (_0x2005ff) {
				console['log'](_0x2005ff);
			}
		},
		'setHighest': function(_0x158505, _0x64b5a4) {
			_0x64b5a4 > this['getFloat'](_0x158505) && this['set'](_0x158505, _0x64b5a4);
		},
		'remove': function(_0x2e638e) {
			if (!this['isCapable']()) return null;
			window['localStorage']['removeItem'](_0x2e638e);
		},
		'clear': function() {
			if (!this['isCapable']()) return null;
			window['localStorage']['clear']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.mouse')['defines'](function() {
	Mouse = ig['Class']['extend']({
		'bindings': {
			'click': [ig['KEY']['MOUSE1']]
		},
		'init': function() {
			ig['input']['initMouse']();
			for (var _0x4ffedd in this['bindings']) {
				this[_0x4ffedd] = _0x4ffedd;
				for (var _0x4c9aea = 0x0; _0x4c9aea < this['bindings'][_0x4ffedd]['length']; _0x4c9aea++) ig['input']['bind'](this['bindings'][_0x4ffedd][_0x4c9aea], _0x4ffedd);
			}
		},
		'getPos': function() {
			if (ig['ua']['mobile']) {
				var _0x3351b2 = ig['input']['mouse']['x'] / ig['sizeHandler']['sizeRatio']['x'],
					_0x594167 = ig['input']['mouse']['y'] / ig['sizeHandler']['sizeRatio']['y'];
				return new Vector2(_0x3351b2 / ig['sizeHandler']['scaleRatioMultiplier']['x'], _0x594167 / ig['sizeHandler']['scaleRatioMultiplier']['y']);
			}
			_0x3351b2 = ig['input']['mouse']['x'] / ig['sizeHandler']['sizeRatio']['x'];
			_0x594167 = ig['input']['mouse']['y'] / ig['sizeHandler']['sizeRatio']['y'];
			return new Vector2(_0x3351b2, _0x594167);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.keyboard')['defines'](function() {
	Keyboard = ig['Class']['extend']({
		'bindings': {
			'jump': [ig['KEY']['W'], ig['KEY']['UP_ARROW']],
			'moveright': [ig['KEY']['D'], ig['KEY']['RIGHT_ARROW']],
			'moveleft': [ig['KEY']['A'], ig['KEY']['LEFT_ARROW']],
			'shoot': [ig['KEY']['S'], ig['KEY']['DOWN_ARROW'], ig['KEY']['SPACE']]
		},
		'init': function() {
			for (var _0x2f67e6 in this['bindings']) {
				this[_0x2f67e6] = _0x2f67e6;
				for (var _0x3108f5 = 0x0; _0x3108f5 < this['bindings'][_0x2f67e6]['length']; _0x3108f5++) ig['input']['bind'](this['bindings'][_0x2f67e6][_0x3108f5], _0x2f67e6);
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.gamepad-input')['defines'](function() {
	ig['PADKEY'] = {
		'BUTTON_0': 0x0,
		'PADBUTTON_1': 0x1,
		'BUTTON_2': 0x2,
		'BUTTON_3': 0x3,
		'BUTTON_LEFT_BUMPER': 0x4,
		'BUTTON_RIGHT_BUMPER': 0x5,
		'BUTTON_LEFT_TRIGGER': 0x6,
		'BUTTON_RIGHT_TRIGGER': 0x7,
		'BUTTON_LEFT_JOYSTICK': 0xa,
		'BUTTON_RIGHT_JOYSTICK': 0xb,
		'BUTTON_DPAD_UP': 0xc,
		'BUTTON_DPAD_DOWN': 0xd,
		'BUTTON_DPAD_LEFT': 0xe,
		'BUTTON_DPAD_RIGHT': 0xf,
		'BUTTON_MENU': 0x10,
		'AXIS_LEFT_JOYSTICK_X': 0x0,
		'AXIS_LEFT_JOYSTICK_Y': 0x1,
		'AXIS_RIGHT_JOYSTICK_X': 0x2,
		'AXIS_RIGHT_JOYSTICK_Y': 0x3
	};
	ig['GamepadInput'] = ig['Class']['extend']({
		'isInit': !0x1,
		'isSupported': !0x1,
		'list': [],
		'bindings': {},
		'states': {},
		'presses': {},
		'releases': {},
		'downLocks': {},
		'upLocks': {},
		'leftStick': {
			'x': 0x0,
			'y': 0x0
		},
		'rightStick': {
			'x': 0x0,
			'y': 0x0
		},
		'start': function() {
			if (!this['isInit']) {
				this['isInit'] = !0x0;
				var _0x514226 = navigator['getGamepads'] || navigator['webkitGetGamepads'];
				_0x514226 && (!navigator['getGamepads'] && navigator['webkitGetGamepads'] && (navigator['getGamepads'] = navigator['webkitGetGamepads']), this['list'] = navigator['getGamepads']());
				this['isSupported'] = _0x514226;
			}
		},
		'isAvailable': function() {
			return this['isInit'] && this['isSupported'];
		},
		'buttonPressed': function(_0x371578) {
			return 'object' == typeof _0x371578 ? _0x371578['pressed'] : 0x1 == _0x371578;
		},
		'buttonDown': function(_0x7dfe77) {
			if (_0x7dfe77 = this['bindings'][_0x7dfe77]) this['states'][_0x7dfe77] = !0x0, this['downLocks'][_0x7dfe77] || (this['presses'][_0x7dfe77] = !0x0, this['downLocks'][_0x7dfe77] = !0x0);
		},
		'buttonUp': function(_0x2c92e2) {
			if ((_0x2c92e2 = this['bindings'][_0x2c92e2]) && this['downLocks'][_0x2c92e2] && !this['upLocks'][_0x2c92e2]) this['states'][_0x2c92e2] = !0x1, this['releases'][_0x2c92e2] = !0x0, this['upLocks'][_0x2c92e2] = !0x0;
		},
		'clearPressed': function() {
			for (var _0x3ff838 in this['releases']) this['states'][_0x3ff838] = !0x1, this['downLocks'][_0x3ff838] = !0x1;
			this['releases'] = {};
			this['presses'] = {};
			this['upLocks'] = {};
		},
		'bind': function(_0x7f313d, _0x4bbf7b) {
			this['bindings'][_0x7f313d] = _0x4bbf7b;
		},
		'unbind': function(_0x279f0e) {
			this['releases'][this['bindings'][_0x279f0e]] = !0x0;
			this['bindings'][_0x279f0e] = null;
		},
		'unbindAll': function() {
			this['bindings'] = {};
			this['states'] = {};
			this['presses'] = {};
			this['releases'] = {};
			this['downLocks'] = {};
			this['upLocks'] = {};
		},
		'state': function(_0x1e4eab) {
			return this['states'][_0x1e4eab];
		},
		'pressed': function(_0x5e62ee) {
			return this['presses'][_0x5e62ee];
		},
		'released': function(_0x38c1d0) {
			return this['releases'][_0x38c1d0];
		},
		'clamp': function(_0x20520f, _0x15e847, _0x3ef3fd) {
			return _0x20520f < _0x15e847 ? _0x15e847 : _0x20520f > _0x3ef3fd ? _0x3ef3fd : _0x20520f;
		},
		'pollGamepads': function() {
			if (this['isSupported']) {
				this['leftStick']['x'] = 0x0;
				this['leftStick']['y'] = 0x0;
				this['rightStick']['x'] = 0x0;
				this['rightStick']['y'] = 0x0;
				this['list'] = navigator['getGamepads']();
				for (var _0x37eeb0 in this['bindings']) {
					for (var _0x1dbd3e = !0x1, _0x2f7f1e = 0x0; _0x2f7f1e < this['list']['length']; _0x2f7f1e++) {
						var _0xfa0380 = this['list'][_0x2f7f1e];
						if (_0xfa0380 && _0xfa0380['buttons'] && this['buttonPressed'](_0xfa0380['buttons'][_0x37eeb0])) {
							_0x1dbd3e = !0x0;
							break;
						}
					}
					_0x1dbd3e ? this['buttonDown'](_0x37eeb0) : this['buttonUp'](_0x37eeb0);
				}
				for (_0x2f7f1e = 0x0; _0x2f7f1e < this['list']['length']; _0x2f7f1e++)
					if ((_0xfa0380 = this['list'][_0x2f7f1e]) && _0xfa0380['axes']) {
						_0x37eeb0 = _0xfa0380['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_X']];
						var _0x1dbd3e = _0xfa0380['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_Y']],
							_0x3f2c8c = _0xfa0380['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_X']],
							_0xfa0380 = _0xfa0380['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_Y']];
						this['leftStick']['x'] += isNaN(_0x37eeb0) ? 0x0 : _0x37eeb0;
						this['leftStick']['y'] += isNaN(_0x1dbd3e) ? 0x0 : _0x1dbd3e;
						this['rightStick']['x'] += isNaN(_0x3f2c8c) ? 0x0 : _0x3f2c8c;
						this['rightStick']['y'] += isNaN(_0xfa0380) ? 0x0 : _0xfa0380;
					} 0x0 < this['list']['length'] && (this['leftStick']['x'] = this['clamp'](this['leftStick']['x'], -0x1, 0x1), this['leftStick']['y'] = this['clamp'](this['leftStick']['y'], -0x1, 0x1), this['rightStick']['x'] = this['clamp'](this['rightStick']['x'], -0x1, 0x1), this['rightStick']['y'] = this['clamp'](this['rightStick']['y'], -0x1, 0x1));
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.gamepad')['requires']('plugins.io.gamepad-input')['defines'](function() {
	Gamepad = ig['Class']['extend']({
		'bindings': {
			'padJump': [ig['PADKEY']['BUTTON_0']]
		},
		'init': function() {
			ig['gamepadInput']['start']();
			for (var _0x18dce0 in this['bindings'])
				for (var _0x3a5f40 = 0x0; _0x3a5f40 < this['bindings'][_0x18dce0]['length']; _0x3a5f40++) ig['gamepadInput']['bind'](this['bindings'][_0x18dce0][_0x3a5f40], _0x18dce0);
		},
		'press': function() {},
		'held': function() {},
		'release': function() {}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.multitouch')['defines'](function() {
	Multitouch = ig['Class']['extend']({
		'init': function() {
			ig['multitouchInput']['start']();
		},
		'getTouchesPos': function() {
			if (ig['ua']['mobile']) {
				if (0x0 < ig['multitouchInput']['touches']['length']) {
					for (var _0x4d3a8b = [], _0x4e0d70 = 0x0; _0x4e0d70 < ig['multitouchInput']['touches']['length']; _0x4e0d70++) {
						var _0x570eeb = ig['multitouchInput']['touches'][_0x4e0d70];
						_0x4d3a8b['push']({
							'x': _0x570eeb['x'],
							'y': _0x570eeb['y']
						});
					}
					return _0x4d3a8b;
				}
				return null;
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.multitouch-input')['defines'](function() {
	ig['MultitouchInput'] = ig['Class']['extend']({
		'isStart': !0x1,
		'touches': [],
		'multitouchCapable': !0x1,
		'lastEventUp': null,
		'start': function() {
			this['isStart'] || (this['isStart'] = !0x0, navigator['maxTouchPoints'] && 0x1 < navigator['maxTouchPoints'] && (this['multitouchCapable'] = !0x0), ig['ua']['touchDevice'] && (window['navigator']['msPointerEnabled'] && (ig['system']['canvas']['addEventListener']('MSPointerDown', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['touchmove']['bind'](this), !0x1), ig['system']['canvas']['style']['msContentZooming'] = 'none', ig['system']['canvas']['style']['msTouchAction'] = 'none'), ig['system']['canvas']['addEventListener']('touchstart', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['touchmove']['bind'](this), !0x1)));
		},
		'touchmove': function(_0x211cf5) {
			if (ig['ua']['touchDevice']) {
				var _0x613d99 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
					_0x5694db = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
					_0x613d99 = ig['system']['scale'] * (_0x613d99 / ig['system']['realWidth']),
					_0x5694db = ig['system']['scale'] * (_0x5694db / ig['system']['realHeight']);
				if (_0x211cf5['touches']) {
					for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
					!this['multitouchCapable'] && 0x1 < _0x211cf5['touches']['length'] && (this['multitouchCapable'] = !0x0);
					var _0x5d6ea7 = {
						'left': 0x0,
						'top': 0x0
					};
					ig['system']['canvas']['getBoundingClientRect'] && (_0x5d6ea7 = ig['system']['canvas']['getBoundingClientRect']());
					for (var _0x40ce2a = 0x0; _0x40ce2a < _0x211cf5['touches']['length']; _0x40ce2a++) {
						var _0x2efa46 = _0x211cf5['touches'][_0x40ce2a];
						_0x2efa46 && this['touches']['push']({
							'x': (_0x2efa46['clientX'] - _0x5d6ea7['left']) / _0x613d99,
							'y': (_0x2efa46['clientY'] - _0x5d6ea7['top']) / _0x5694db
						});
					}
				} else this['windowMove'](_0x211cf5);
			}
		},
		'touchdown': function(_0x4580bd) {
			var _0x3b048b = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
				_0x3bf093 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
				_0x3b048b = ig['system']['scale'] * (_0x3b048b / ig['system']['realWidth']),
				_0x3bf093 = ig['system']['scale'] * (_0x3bf093 / ig['system']['realHeight']);
			if (window['navigator']['msPointerEnabled']) this['windowKeyDown'](_0x4580bd);
			else if (ig['ua']['touchDevice'] && _0x4580bd['touches']) {
				for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
				!this['multitouchCapable'] && 0x1 < _0x4580bd['touches']['length'] && (this['multitouchCapable'] = !0x0);
				var _0x21c9a7 = {
					'left': 0x0,
					'top': 0x0
				};
				ig['system']['canvas']['getBoundingClientRect'] && (_0x21c9a7 = ig['system']['canvas']['getBoundingClientRect']());
				for (var _0x93ebdd = 0x0; _0x93ebdd < _0x4580bd['touches']['length']; _0x93ebdd++) {
					var _0x56cf3a = _0x4580bd['touches'][_0x93ebdd];
					_0x56cf3a && this['touches']['push']({
						'x': (_0x56cf3a['clientX'] - _0x21c9a7['left']) / _0x3b048b,
						'y': (_0x56cf3a['clientY'] - _0x21c9a7['top']) / _0x3bf093
					});
				}
			}
		},
		'touchup': function(_0x5e53d1) {
			var _0x667af7 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
			parseInt(ig['system']['canvas']['offsetHeight']);
			_0x667af7 = ig['system']['scale'] * (_0x667af7 / ig['system']['realWidth']);
			if (window['navigator']['msPointerEnabled']) this['windowKeyUp'](_0x5e53d1);
			else {
				this['lastEventUp'] = _0x5e53d1;
				var _0x18805c = {
					'left': 0x0,
					'top': 0x0
				};
				ig['system']['canvas']['getBoundingClientRect'] && (_0x18805c = ig['system']['canvas']['getBoundingClientRect']());
				if (ig['ua']['touchDevice']) {
					_0x5e53d1 = (_0x5e53d1['changedTouches'][0x0]['clientX'] - _0x18805c['left']) / _0x667af7;
					for (_0x667af7 = 0x0; _0x667af7 < this['touches']['length']; _0x667af7++) this['touches'][_0x667af7]['x'] >= _0x5e53d1 - 0x28 && this['touches'][_0x667af7]['x'] <= _0x5e53d1 + 0x28 && this['touches']['splice'](_0x667af7, 0x1);
				}
			}
		},
		'windowKeyDown': function(_0x54f9fe) {
			var _0x2459cd = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
				_0x47d6e4 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
				_0x2459cd = ig['system']['scale'] * (_0x2459cd / ig['system']['realWidth']),
				_0x47d6e4 = ig['system']['scale'] * (_0x47d6e4 / ig['system']['realHeight']);
			if (window['navigator']['msPointerEnabled']) {
				var _0x31282a = {
					'left': 0x0,
					'top': 0x0
				};
				ig['system']['canvas']['getBoundingClientRect'] && (_0x31282a = ig['system']['canvas']['getBoundingClientRect']());
				_0x54f9fe = _0x54f9fe['changedTouches'] ? _0x54f9fe['changedTouches'] : [_0x54f9fe];
				for (var _0x21a0bb = 0x0; _0x21a0bb < _0x54f9fe['length']; ++_0x21a0bb) {
					for (var _0x5a8fe6 = _0x54f9fe[_0x21a0bb], _0x5ecd8a = 'undefined' != typeof _0x5a8fe6['identifier'] ? _0x5a8fe6['identifier'] : 'undefined' != typeof _0x5a8fe6['pointerId'] ? _0x5a8fe6['pointerId'] : 0x1, _0x2d2023 = (_0x5a8fe6['clientX'] - _0x31282a['left']) / _0x2459cd, _0x5a8fe6 = (_0x5a8fe6['clientY'] - _0x31282a['top']) / _0x47d6e4, _0x2fbf2f = 0x0; _0x2fbf2f < this['touches']['length']; ++_0x2fbf2f) this['touches'][_0x2fbf2f]['identifier'] == _0x5ecd8a && this['touches']['splice'](_0x2fbf2f, 0x1);
					this['touches']['push']({
						'x': _0x2d2023,
						'y': _0x5a8fe6,
						'identifier': _0x5ecd8a
					});
				}
				for (_0x2459cd = 0x0; _0x2459cd < this['touches']['length']; _0x2459cd++);
			}
		},
		'windowKeyUp': function(_0x4046d4) {
			_0x4046d4 = 'undefined' != typeof _0x4046d4['identifier'] ? _0x4046d4['identifier'] : 'undefined' != typeof _0x4046d4['pointerId'] ? _0x4046d4['pointerId'] : 0x1;
			for (var _0x44491b = 0x0; _0x44491b < this['touches']['length']; ++_0x44491b) this['touches'][_0x44491b]['identifier'] == _0x4046d4 && this['touches']['splice'](_0x44491b, 0x1);
			for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
		},
		'windowMove': function(_0x1d2a99) {
			var _0xb97df8 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
				_0x128e95 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
				_0xb97df8 = ig['system']['scale'] * (_0xb97df8 / ig['system']['realWidth']),
				_0x128e95 = ig['system']['scale'] * (_0x128e95 / ig['system']['realHeight']),
				_0x431dc = {
					'left': 0x0,
					'top': 0x0
				};
			ig['system']['canvas']['getBoundingClientRect'] && (_0x431dc = ig['system']['canvas']['getBoundingClientRect']());
			if (window['navigator']['msPointerEnabled'])
				for (var _0x20bb08 = 'undefined' != typeof _0x1d2a99['identifier'] ? _0x1d2a99['identifier'] : 'undefined' != typeof _0x1d2a99['pointerId'] ? _0x1d2a99['pointerId'] : 0x1, _0x49100e = 0x0; _0x49100e < this['touches']['length']; ++_0x49100e)
					if (this['touches'][_0x49100e]['identifier'] == _0x20bb08) {
						var _0x1e89e8 = (_0x1d2a99['clientY'] - _0x431dc['top']) / _0x128e95;
						this['touches'][_0x49100e]['x'] = (_0x1d2a99['clientX'] - _0x431dc['left']) / _0xb97df8;
						this['touches'][_0x49100e]['y'] = _0x1e89e8;
					}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.fake-storage')['requires']('impact.game')['defines'](function() {
	ig['FakeStorage'] = ig['Class']['extend']({
		'tempData': {},
		'init': function() {
			ig['FakeStorage']['instance'] = this;
		},
		'initUnset': function(_0x50b7cc, _0xa533) {
			null === this['get'](_0x50b7cc) && this['set'](_0x50b7cc, _0xa533);
		},
		'set': function(_0x16ac9b, _0xe8191e) {
			this['tempData'][_0x16ac9b] = JSON['stringify'](_0xe8191e);
		},
		'setHighest': function(_0x58936c, _0x4ada05) {
			_0x4ada05 > this['getFloat'](_0x58936c) && this['set'](_0x58936c, _0x4ada05);
		},
		'get': function(_0x4954c8) {
			return 'undefined' == typeof this['tempData'][_0x4954c8] ? null : JSON['parse'](this['tempData'][_0x4954c8]);
		},
		'getInt': function(_0x6b9e51) {
			return ~~this['get'](_0x6b9e51);
		},
		'getFloat': function(_0x465ae0) {
			return parseFloat(this['get'](_0x465ae0));
		},
		'getBool': function(_0x18173b) {
			return !!this['get'](_0x18173b);
		},
		'isSet': function(_0x41eb7a) {
			return null !== this['get'](_0x41eb7a);
		},
		'remove': function(_0x540f32) {
			delete this['tempData'][_0x540f32];
		},
		'clear': function() {
			this['tempData'] = {};
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.io-manager')['requires']('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage')['defines'](function() {
	IoManager = ig['Class']['extend']({
		'storage': null,
		'localStorageSupport': !0x1,
		'mouse': null,
		'keyboard': null,
		'multitouch': null,
		'gamepad': null,
		'init': function() {
			ig['multitouchInput'] = new ig['MultitouchInput']();
			ig['gamepadInput'] = new ig['GamepadInput']();
			this['unbindAll']();
			this['initStorage']();
			this['initMouse']();
			this['initKeyboard']();
		},
		'unbindAll': function() {
			ig['input']['unbindAll']();
			ig['gamepadInput']['unbindAll']();
		},
		'initStorage': function() {
			try {
				window['localStorage']['setItem']('test', 'test'), this['storage'] = new ig['Storage']();
			} catch (_0x2cefa2) {
				console['log']('using\x20fake\x20storage'), this['storage'] = new ig['FakeStorage']();
			} finally {
				window['localStorage']['removeItem']('test');
			}
		},
		'initMouse': function() {
			this['mouse'] = new Mouse();
		},
		'initKeyboard': function() {
			this['keyboard'] = new Keyboard();
		},
		'initMultitouch': function() {
			this['multitouch'] = new Multitouch();
		},
		'initGamepad': function() {
			this['gamepad'] = new Gamepad();
		},
		'press': function(_0x40909e) {
			return ig['input']['pressed'](_0x40909e) || this['gamepad'] && this['gamepad']['press'](_0x40909e) ? !0x0 : !0x1;
		},
		'held': function(_0x3deaa8) {
			return ig['input']['state'](_0x3deaa8) || this['gamepad'] && this['gamepad']['state'](_0x3deaa8) ? !0x0 : !0x1;
		},
		'release': function(_0x24fa1b) {
			return ig['input']['released'](_0x24fa1b) || this['gamepad'] && this['gamepad']['released'](_0x24fa1b) ? !0x0 : !0x1;
		},
		'getClickPos': function() {
			return this['mouse']['getPos']();
		},
		'getTouchesPos': function() {
			return this['multitouch']['getTouchesPos']();
		},
		'checkOverlap': function(_0x6eb3c0, _0x45d3d3, _0x4dabba, _0x514f83, _0x1cce98) {
			return _0x6eb3c0['x'] > _0x45d3d3 + _0x514f83 || _0x6eb3c0['x'] < _0x45d3d3 || _0x6eb3c0['y'] > _0x4dabba + _0x1cce98 || _0x6eb3c0['y'] < _0x4dabba ? !0x1 : !0x0;
		},
		'_supportsLocalStorage': function() {
			try {
				return localStorage['setItem']('test', 'test'), localStorage['removeItem']('test'), this['localStorageSupport'] = 'localStorage' in window && null !== window['localStorage'];
			} catch (_0x4a8a0e) {
				return this['localStorageSupport'];
			}
		},
		'storageIsSet': function(_0x3fa9b8) {
			return !this['localStorageSupport'] ? null : this['storage']['isSet'](_0x3fa9b8);
		},
		'storageGet': function(_0x439c78) {
			return !this['localStorageSupport'] ? null : this['storage']['get'](_0x439c78);
		},
		'storageSet': function(_0x3ffcbb, _0x28f9d9) {
			if (!this['localStorageSupport']) return null;
			this['storage']['set'](_0x3ffcbb, _0x28f9d9);
		},
		'assert': function(_0x311fad, _0x2d2412, _0x7e0172) {
			if (_0x2d2412 !== _0x7e0172) throw 'actualValue:' + _0x2d2412 + '\x20not\x20equal\x20to\x20testValue:' + _0x7e0172 + '\x20at\x20' + _0x311fad;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.io.storage-manager')['requires']('impact.game', 'plugins.io.io-manager')['defines'](function() {
	ig['Game']['prototype']['name'] = 'MJS-Game';
	ig['Game']['prototype']['version'] = '1.0';
	ig['Game']['prototype']['sessionData'] = {};
	ig['Game']['prototype']['initData'] = function() {
		return this['sessionData'] = {
			'sound': 0.5,
			'music': 0.5,
			'level': 0x1,
			'score': 0x0
		};
	};
	ig['Game']['prototype']['setupStorageManager'] = function() {
		'undefined' === typeof this['name'] ? console['error']('Cannot\x20found\x20Game\x20Name,\x20Storage\x20Manager\x20Cancelled.') : 'undefined' === typeof this['version'] ? console['error']('Cannot\x20found\x20Game\x20Version,\x20Storage\x20Manager\x20Cancelled.') : (this['io'] || (this['io'] = new IoManager(), console['log']('IO\x20Manager\x20doesn\x27t\x20existed.\x20Initialize...')), console['log']('Plug\x20in\x20Storage\x20Manager'), this['storage'] = this['io']['storage'], this['storageName'] = this['name'] + '-v' + this['version'], this['loadAll']());
	};
	ig['Game']['prototype']['loadAll'] = function() {
		var _0x5d12ed = this['storage']['get'](this['storageName']);
		if (null === _0x5d12ed || 'undefined' === typeof _0x5d12ed) _0x5d12ed = this['initData']();
		for (var _0x4b5697 in _0x5d12ed) this['sessionData'][_0x4b5697] = _0x5d12ed[_0x4b5697];
		this['storage']['set'](this['storageName'], _0x5d12ed);
	};
	ig['Game']['prototype']['saveAll'] = function() {
		var _0x479325 = this['storage']['get'](this['storageName']),
			_0x4e7b20;
		for (_0x4e7b20 in _0x479325) _0x479325[_0x4e7b20] = this['sessionData'][_0x4e7b20];
		this['storage']['set'](this['storageName'], _0x479325);
	};
	ig['Game']['prototype']['load'] = function(_0x58af6f) {
		return this['storage']['get'](this['storageName'])[_0x58af6f];
	};
	ig['Game']['prototype']['save'] = function(_0x37f638, _0x29fb8c) {
		var _0x3c005d = this['storage']['get'](this['storageName']);
		_0x3c005d[_0x37f638] = _0x29fb8c;
		this['storage']['set'](this['storageName'], _0x3c005d);
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.splash-loader')['requires']('impact.loader', 'impact.animation')['defines'](function() {
	ig['SplashLoader'] = ig['Loader']['extend']({
		'desktopCoverDIVID': 'play-desktop',
		'splashDesktop': new ig['Image']('media/graphics/splash/desktop/cover.jpg'),
		'splashMobile': new ig['Image']('media/graphics/splash/mobile/cover.jpg'),
		'customAnim': new ig['AnimationSheet']('media/graphics/splash/loading/anim.png', 0x100, 0xa0),
		'resources': [new ig['Image']('media/graphics/backgrounds/bg-01.png'), new ig['Image']('media/graphics/backgrounds/game-bg-01.png'), new ig['Image']('media/graphics/backgrounds/grey-bg.png'), new ig['Image']('media/graphics/sprites/ingame.png'), new ig['Image']('media/graphics/sprites/game.png')],
		'loadAssets': [{
			'type': 'json',
			'name': 'ingame',
			'path': 'media/graphics/sprites/ingame.json'
		}, {
			'type': 'json',
			'name': 'game',
			'path': 'media/graphics/sprites/game.json'
		}],
		'_unloadedAtlas': [],
		'init': function(_0x3b05fd, _0x59df6a) {
			for (var _0x28a1a5 = 0x0; _0x28a1a5 < this['loadAssets']['length']; _0x28a1a5++) {
				var _0x40853d = this['loadAssets'][_0x28a1a5];
				_0x40853d['loaded'] = !0x1;
				this['_unloadedAtlas']['push'](_0x40853d);
			}
			this['parent'](_0x3b05fd, _0x59df6a);
			this['setupCustomAnimation']();
			ig['apiHandler']['run']('MJSPreroll');
			this['create']();
		},
		'create': function() {
			this['groups'] = [];
			this['centerX'] = ig['system']['width'] / 0x2;
			this['centerY'] = ig['system']['height'] / 0x2;
			this['gw'] = ig['system']['width'];
			this['gh'] = ig['system']['height'];
			this['bg'] = new ig['Image']('media/graphics/loading/loading-bg-01.png');
			this['barBg'] = new ig['Image']('media/graphics/loading/loading-bar-bg.png');
			this['barLoad'] = new ig['Image']('media/graphics/loading/loading-bar.png');
			this['logo'] = new ig['Image']('media/graphics/loading/title.png');
			this['midLogo'] = new ig['Image']('media/graphics/loading/loading-logo.png');
		},
		'load': function() {
			ig['system']['clear']('#000');
			if (this['resources']['length']) {
				for (var _0x2396f2 = 0x0; _0x2396f2 < this['resources']['length']; _0x2396f2++) this['loadResource'](this['resources'][_0x2396f2]);
				this['_intervalId'] = setInterval(this['draw']['bind'](this), 0x10);
			} else this['loadingAssets']();
		},
		'end': function() {
			this['parent']();
			passSplash || (passSplash = !0x0, this['_drawStatus'] = 0x1, this['draw'](), ig['system']['setGame'](MyGame));
		},
		'tapToStartDiv': function(_0x5181be) {
			this['desktopCoverDIV'] = document['createElement']('div');
			this['desktopCoverDIV']['id'] = this['desktopCoverDIVID'];
			this['desktopCoverDIV']['setAttribute']('class', 'play');
			this['desktopCoverDIV']['setAttribute']('style', 'position:\x20absolute;\x20display:\x20block;\x20z-index:\x20999999;\x20background-color:\x20rgba(23,\x2032,\x2053,\x200.7);\x20visibility:\x20visible;\x20font-size:\x2010vmin;\x20text-align:\x20center;\x20vertical-align:\x20middle;\x20-webkit-touch-callout:\x20none;\x20-webkit-user-select:\x20none;\x20-khtml-user-select:\x20none;\x20-moz-user-select:\x20none;\x20-ms-user-select:\x20none;\x20user-select:\x20none;');
			this['desktopCoverDIV']['innerHTML'] = '<div\x20style=\x27color:white;background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x20border:\x202px\x20solid\x20#fff;\x20font-size:20px;\x20border-radius:\x205px;\x20position:\x20relative;\x20float:\x20left;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x27><div\x20style=\x27padding:20px\x2050px;\x20font-family:\x20Arial;\x27>' + _STRINGS['Splash']['TapToStart'] + '</div></div>';
			(document['getElementById']('play')['parentNode'] || document['getElementById']('ajaxbar'))['appendChild'](this['desktopCoverDIV']);
			try {
				'undefined' !== typeof ig['sizeHandler'] ? 'undefined' !== typeof ig['sizeHandler']['coreDivsToResize'] && (ig['sizeHandler']['coreDivsToResize']['push']('#' + this['desktopCoverDIVID']), 'function' === typeof ig['sizeHandler']['reorient'] && ig['sizeHandler']['reorient']()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize['push'](this['desktopCoverDIVID']), 'function' === typeof sizeHandler && sizeHandler());
			} catch (_0xe5bb28) {
				console['log'](_0xe5bb28);
			}
			this['desktopCoverDIV']['addEventListener']('click', function() {
				try {
					'undefined' !== typeof ig['soundHandler'] ? ('undefined' !== typeof ig['soundHandler']['bgmPlayer'] ? 'undefined' !== typeof ig['soundHandler']['bgmPlayer']['webaudio'] && 'undefined' !== typeof ig['soundHandler']['bgmPlayer']['webaudio']['context'] && ig['soundHandler']['bgmPlayer']['webaudio']['context']['resume']() : (ig['soundHandler'] = null, ig['soundHandler'] = 'undefined' !== typeof ig['soundList'] ? new ig['SoundHandler'](ig['soundList']) : new ig['SoundHandler']()), 'undefined' !== typeof ig['soundHandler']['sfxPlayer'] ? 'function' === typeof ig['soundHandler']['sfxPlayer']['play'] && ig['soundHandler']['sfxPlayer']['play']('staticSound') : 'undefined' !== typeof ig['soundHandler']['staticSound'] ? 'function' === typeof ig['soundHandler']['staticSound']['play'] && ig['soundHandler']['staticSound']['play']() : 'function' === typeof ig['soundHandler']['playSound'] && ig['soundHandler']['playSound']('staticSound')) : 'undefined' !== typeof Howl ? (ig['global']['staticSound'] = new Howl({
						'src': ['media/audio/play/static.ogg', 'media/audio/play/static.mp3']
					}), ig['global']['staticSound']['play']()) : 'undefined' !== typeof createjs && 'undefined' !== typeof createjs['Sound'] && 'function' === typeof createjs['Sound']['play'] && createjs['Sound']['play']('opening');
				} catch (_0x178595) {
					console['log'](_0x178595);
				}
				this['setAttribute']('style', 'visibility:\x20hidden;');
				'function' === typeof _0x5181be && _0x5181be();
				ig['system']['setGame'](MyGame);
			});
		},
		'_loadCallback': function(_0x222e04, _0x3e65e1) {
			if (_0x3e65e1) {
				var _0x2dd274 = _0x222e04['split']('.')[0x0]['split']('/'),
					_0x2dd274 = _0x2dd274[_0x2dd274['length'] - 0x1];
				imgCache[_0x2dd274] ? imgCache[_0x2dd274]['path']['img'] = _0x222e04 : imgCache[_0x2dd274] = {
					'path': {
						'img': _0x222e04,
						'json': ''
					}
				};
				this['_unloaded']['erase'](_0x222e04);
			} else throw 'Failed\x20to\x20load\x20resource:\x20' + _0x222e04;
			this['status'] = 0x1 - (this['_unloaded']['length'] + this['_unloadedAtlas']['length']) / (this['resources']['length'] + this['loadAssets']['length']);
			0x0 == this['_unloaded']['length'] && this['loadingAssets']();
		},
		'loadingAssets': function() {
			for (var _0x323330 = 0x0; _0x323330 < this['loadAssets']['length']; _0x323330++) {
				var _0xbb1bf5 = this['loadAssets'][_0x323330],
					_0x3246e6 = null;
				'image' == _0xbb1bf5['type'] ? _0x3246e6 = this['imgLoaded']['bind'](this) : 'json' == _0xbb1bf5['type'] && (_0x3246e6 = this['jsonLoaded']['bind'](this));
				ig['Asset'][_0xbb1bf5['type']](_0xbb1bf5['name'], _0xbb1bf5['path'], _0x3246e6);
			}
			this['loadAssets']['length'] || setTimeout(this['end']['bind'](this), 0xfa);
		},
		'jsonLoaded': function(_0x5f1a38, _0x29383c) {
			if (_0x5f1a38) {
				for (var _0x2b8a62 = 0x0; _0x2b8a62 < this['_unloadedAtlas']['length']; _0x2b8a62++) _0x5f1a38 = this['_unloadedAtlas'][_0x2b8a62], _0x5f1a38['name'] == _0x29383c && (this['_unloadedAtlas'][_0x2b8a62]['loaded'] = !0x0);
				console['log']('Json\x20Loaded');
			} else throw 'Failed\x20to\x20load\x20atlas:\x20' + _0x29383c;
			this['checkUnloadedAtlas']();
		},
		'imgLoaded': function(_0x359419, _0x548231) {
			if (_0x548231)
				for (var _0x36c78c = 0x0; _0x36c78c < this['_unloadedAtlas']['length']; _0x36c78c++) this['_unloadedAtlas'][_0x36c78c]['path'] == _0x359419 && (this['_unloadedAtlas'][_0x36c78c]['loaded'] = !0x0);
			else throw 'Failed\x20to\x20load\x20image:\x20' + _0x359419;
			this['checkUnloadedAtlas']();
		},
		'checkUnloadedAtlas': function() {
			for (var _0x26d8c9 = 0x0, _0x84b02e = 0x0; _0x84b02e < this['_unloadedAtlas']['length']; _0x84b02e++) this['_unloadedAtlas'][_0x84b02e]['loaded'] && _0x26d8c9++;
			this['status'] = 0x1 - (this['_unloaded']['length'] + (this['_unloadedAtlas']['length'] - _0x26d8c9)) / (this['resources']['length'] + this['loadAssets']['length']);
			_0x26d8c9 == this['loadAssets']['length'] && setTimeout(this['end']['bind'](this), 0x1f4);
		},
		'setupCustomAnimation': function() {
			this['animHeight'] = this['customAnim']['height'];
			this['animWidth'] = this['customAnim']['width'];
			this['customAnim'] = new ig['Animation'](this['customAnim'], 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
		},
		'animate': function() {
			ig['Timer']['step']();
			this['customAnim']['update']();
		},
		'drawGroup': function() {
			for (var _0x2cec39 = 0x0; _0x2cec39 < this['groups']['length']; _0x2cec39++) {
				var _0x3cf4aa = this['groups'][_0x2cec39];
				if (!(_0x3cf4aa['name'] && 'Text' == _0x3cf4aa['name']) || fontReady) this['groups'][_0x2cec39]['update'](), this['groups'][_0x2cec39]['draw']();
			}
		},
		'draw': function() {
			this['_drawStatus'] += (this['status'] - this['_drawStatus']) / 0x5;
			if (!(0.1 >= this['_drawStatus']))
				if (fontReady) {
					this['bg']['draw'](0x0, 0x0);
					var _0xa7d8ec = this['centerX'],
						_0x591c19 = 0.85 * this['gh'];
					this['logo']['draw'](_0xa7d8ec - 0.5 * this['logo']['width'], 0x5);
					this['midLogo']['draw'](_0xa7d8ec - 0.5 * this['midLogo']['width'], 0.55 * this['gh'] - 0.5 * this['midLogo']['height']);
					var _0x222246 = _0xa7d8ec,
						_0x5c5b02 = _0x591c19;
					0x0 < this['barBg']['width'] && (_0x222246 -= 0.5 * this['barBg']['width']);
					0x0 < this['barBg']['height'] && (_0x5c5b02 -= 0.5 * this['barBg']['height']);
					this['barBg']['draw'](_0x222246, _0x5c5b02);
					_0x222246 = _0xa7d8ec;
					_0x5c5b02 = _0x591c19;
					_0x591c19 = _0xa7d8ec = 0x0;
					0x0 < this['barLoad']['width'] && (_0x222246 -= 0.5 * this['barLoad']['width'], _0xa7d8ec = this['barLoad']['width'] * this['_drawStatus']);
					0x0 < this['barLoad']['height'] && (_0x5c5b02 -= 0.5 * this['barLoad']['height'] + 0x2, _0x591c19 = this['barLoad']['height']);
					this['barLoad']['draw'](_0x222246, _0x5c5b02, 0x0, 0x0, _0xa7d8ec, _0x591c19);
				} else fontReady = FontDetect['isFontLoaded'](fonts['font1']);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.tween')['requires']('impact.entity')['defines'](function() {
	Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x998a41) {
		for (var _0x7980d8 = 0x0; _0x7980d8 < this['length']; ++_0x7980d8)
			if (this[_0x7980d8] === _0x998a41) return _0x7980d8;
		return -0x1;
	});
	ig['Entity']['prototype']['tweens'] = [];
	ig['Entity']['prototype']['_preTweenUpdate'] = ig['Entity']['prototype']['update'];
	ig['Entity']['prototype']['update'] = function() {
		this['_preTweenUpdate']();
		if (0x0 < this['tweens']['length']) {
			for (var _0x5c1ae8 = [], _0x324419 = 0x0; _0x324419 < this['tweens']['length']; _0x324419++) this['tweens'][_0x324419]['update'](), this['tweens'][_0x324419]['complete'] || _0x5c1ae8['push'](this['tweens'][_0x324419]);
			this['tweens'] = _0x5c1ae8;
		}
	};
	ig['Entity']['prototype']['tween'] = function(_0x36a2eb, _0x8c88b, _0x4a4aa8) {
		_0x36a2eb = new ig['Tween'](this, _0x36a2eb, _0x8c88b, _0x4a4aa8);
		this['tweens']['push'](_0x36a2eb);
		return _0x36a2eb;
	};
	ig['Entity']['prototype']['pauseTweens'] = function() {
		for (var _0x260bf6 = 0x0; _0x260bf6 < this['tweens']['length']; _0x260bf6++) this['tweens'][_0x260bf6]['pause']();
	};
	ig['Entity']['prototype']['resumeTweens'] = function() {
		for (var _0x2d36b6 = 0x0; _0x2d36b6 < this['tweens']['length']; _0x2d36b6++) this['tweens'][_0x2d36b6]['resume']();
	};
	ig['Entity']['prototype']['stopTweens'] = function(_0x4939d6) {
		for (var _0x51359a = 0x0; _0x51359a < this['tweens']['length']; _0x51359a++) this['tweens'][_0x51359a]['stop'](_0x4939d6);
	};
	ig['Tween'] = function(_0x57b33d, _0x36c106, _0x29e57, _0x40be8c) {
		var _0x1cc5ed = {},
			_0x707f9 = {},
			_0x13617b = {},
			_0x19e89d = 0x0,
			_0x5690c9 = !0x1,
			_0x2c59b8 = !0x1,
			_0x498101 = !0x1;
		this['duration'] = _0x29e57;
		this['paused'] = this['complete'] = !0x1;
		this['easing'] = ig['Tween']['Easing']['Linear']['EaseNone'];
		this['onComplete'] = !0x1;
		this['loop'] = this['delay'] = 0x0;
		this['loopCount'] = -0x1;
		ig['merge'](this, _0x40be8c);
		this['loopNum'] = this['loopCount'];
		this['chain'] = function(_0x250ff6) {
			_0x498101 = _0x250ff6;
		};
		this['initEnd'] = function(_0x17e5e4, _0x1ecae0, _0x14c382) {
			if ('object' !== typeof _0x1ecae0[_0x17e5e4]) _0x14c382[_0x17e5e4] = _0x1ecae0[_0x17e5e4];
			else
				for (subprop in _0x1ecae0[_0x17e5e4]) _0x14c382[_0x17e5e4] || (_0x14c382[_0x17e5e4] = {}), this['initEnd'](subprop, _0x1ecae0[_0x17e5e4], _0x14c382[_0x17e5e4]);
		};
		this['initStart'] = function(_0x47c432, _0x2d1cf1, _0x582145, _0xa14b2d) {
			if ('object' !== typeof _0x582145[_0x47c432]) 'undefined' !== typeof _0x2d1cf1[_0x47c432] && (_0xa14b2d[_0x47c432] = _0x582145[_0x47c432]);
			else
				for (subprop in _0x582145[_0x47c432]) _0xa14b2d[_0x47c432] || (_0xa14b2d[_0x47c432] = {}), 'undefined' !== typeof _0x2d1cf1[_0x47c432] && this['initStart'](subprop, _0x2d1cf1[_0x47c432], _0x582145[_0x47c432], _0xa14b2d[_0x47c432]);
		};
		this['start'] = function() {
			this['paused'] = this['complete'] = !0x1;
			this['loopNum'] = this['loopCount'];
			_0x19e89d = 0x0; - 0x1 == _0x57b33d['tweens']['indexOf'](this) && _0x57b33d['tweens']['push'](this);
			_0x2c59b8 = !0x0;
			_0x5690c9 = new ig['Timer']();
			for (var _0x1dddc7 in _0x36c106) this['initEnd'](_0x1dddc7, _0x36c106, _0x707f9);
			for (_0x1dddc7 in _0x707f9) this['initStart'](_0x1dddc7, _0x707f9, _0x57b33d, _0x1cc5ed), this['initDelta'](_0x1dddc7, _0x13617b, _0x57b33d, _0x707f9);
		};
		this['initDelta'] = function(_0x237275, _0x1cdd47, _0x2ab8b2, _0x5d4c32) {
			if ('object' !== typeof _0x5d4c32[_0x237275]) _0x1cdd47[_0x237275] = _0x5d4c32[_0x237275] - _0x2ab8b2[_0x237275];
			else
				for (subprop in _0x5d4c32[_0x237275]) _0x1cdd47[_0x237275] || (_0x1cdd47[_0x237275] = {}), this['initDelta'](subprop, _0x1cdd47[_0x237275], _0x2ab8b2[_0x237275], _0x5d4c32[_0x237275]);
		};
		this['propUpdate'] = function(_0x1934ca, _0x367e0e, _0x1db096, _0x1a68bf, _0x34b835) {
			if ('object' !== typeof _0x1db096[_0x1934ca]) _0x367e0e[_0x1934ca] = 'undefined' != typeof _0x1db096[_0x1934ca] ? _0x1db096[_0x1934ca] + _0x1a68bf[_0x1934ca] * _0x34b835 : _0x367e0e[_0x1934ca];
			else
				for (subprop in _0x1db096[_0x1934ca]) this['propUpdate'](subprop, _0x367e0e[_0x1934ca], _0x1db096[_0x1934ca], _0x1a68bf[_0x1934ca], _0x34b835);
		};
		this['propSet'] = function(_0x116c9c, _0xbfe86, _0x551457) {
			if ('object' !== typeof _0xbfe86[_0x116c9c]) _0x551457[_0x116c9c] = _0xbfe86[_0x116c9c];
			else
				for (subprop in _0xbfe86[_0x116c9c]) _0x551457[_0x116c9c] || (_0x551457[_0x116c9c] = {}), this['propSet'](subprop, _0xbfe86[_0x116c9c], _0x551457[_0x116c9c]);
		};
		this['update'] = function() {
			if (!_0x2c59b8) return !0x1;
			if (this['delay']) {
				if (_0x5690c9['delta']() < this['delay']) return;
				this['delay'] = 0x0;
				_0x5690c9['reset']();
			}
			if (this['paused'] || this['complete']) return !0x1;
			var _0x5aeb02 = (_0x5690c9['delta']() + _0x19e89d) / this['duration'],
				_0x5aeb02 = 0x1 < _0x5aeb02 ? 0x1 : _0x5aeb02,
				_0x33ad1b = this['easing'](_0x5aeb02);
			for (property in _0x13617b) this['propUpdate'](property, _0x57b33d, _0x1cc5ed, _0x13617b, _0x33ad1b);
			if (0x1 <= _0x5aeb02) {
				if (0x0 == this['loopNum'] || !this['loop']) {
					this['complete'] = !0x0;
					if (this['onComplete']) this['onComplete']();
					_0x498101 && _0x498101['start']();
					return !0x1;
				}
				if (this['loop'] == ig['Tween']['Loop']['Revert']) {
					for (property in _0x1cc5ed) this['propSet'](property, _0x1cc5ed, _0x57b33d);
					_0x19e89d = 0x0;
					_0x5690c9['reset'](); - 0x1 != this['loopNum'] && this['loopNum']--;
				} else if (this['loop'] == ig['Tween']['Loop']['Reverse']) {
					_0x5aeb02 = {};
					_0x33ad1b = {};
					ig['merge'](_0x5aeb02, _0x707f9);
					ig['merge'](_0x33ad1b, _0x1cc5ed);
					ig['merge'](_0x1cc5ed, _0x5aeb02);
					ig['merge'](_0x707f9, _0x33ad1b);
					for (property in _0x707f9) this['initDelta'](property, _0x13617b, _0x57b33d, _0x707f9);
					_0x19e89d = 0x0;
					_0x5690c9['reset'](); - 0x1 != this['loopNum'] && this['loopNum']--;
				}
			}
		};
		this['pause'] = function() {
			this['paused'] = !0x0;
			_0x5690c9 && _0x5690c9['delta'] && (_0x19e89d += _0x5690c9['delta']());
		};
		this['resume'] = function() {
			this['paused'] = !0x1;
			_0x5690c9 && _0x5690c9['reset'] && _0x5690c9['reset']();
		};
		this['stop'] = function(_0x1ec30c) {
			_0x1ec30c && (this['loop'] = this['complete'] = this['paused'] = !0x1, _0x19e89d += _0x29e57, this['update']());
			this['complete'] = !0x0;
		};
	};
	ig['Tween']['Loop'] = {
		'Revert': 0x1,
		'Reverse': 0x2
	};
	ig['Tween']['Easing'] = {
		'Linear': {},
		'Quadratic': {},
		'Cubic': {},
		'Quartic': {},
		'Quintic': {},
		'Sinusoidal': {},
		'Exponential': {},
		'Circular': {},
		'Elastic': {},
		'Back': {},
		'Bounce': {}
	};
	ig['Tween']['Easing']['Linear']['EaseNone'] = function(_0x370390) {
		return _0x370390;
	};
	ig['Tween']['Easing']['Quadratic']['EaseIn'] = function(_0x42a038) {
		return _0x42a038 * _0x42a038;
	};
	ig['Tween']['Easing']['Quadratic']['EaseOut'] = function(_0x41c4ea) {
		return -_0x41c4ea * (_0x41c4ea - 0x2);
	};
	ig['Tween']['Easing']['Quadratic']['EaseInOut'] = function(_0x2fce6b) {
		return 0x1 > (_0x2fce6b *= 0x2) ? 0.5 * _0x2fce6b * _0x2fce6b : -0.5 * (--_0x2fce6b * (_0x2fce6b - 0x2) - 0x1);
	};
	ig['Tween']['Easing']['Cubic']['EaseIn'] = function(_0x4f5882) {
		return _0x4f5882 * _0x4f5882 * _0x4f5882;
	};
	ig['Tween']['Easing']['Cubic']['EaseOut'] = function(_0xea703f) {
		return --_0xea703f * _0xea703f * _0xea703f + 0x1;
	};
	ig['Tween']['Easing']['Cubic']['EaseInOut'] = function(_0x366700) {
		return 0x1 > (_0x366700 *= 0x2) ? 0.5 * _0x366700 * _0x366700 * _0x366700 : 0.5 * ((_0x366700 -= 0x2) * _0x366700 * _0x366700 + 0x2);
	};
	ig['Tween']['Easing']['Quartic']['EaseIn'] = function(_0x46d2ae) {
		return _0x46d2ae * _0x46d2ae * _0x46d2ae * _0x46d2ae;
	};
	ig['Tween']['Easing']['Quartic']['EaseOut'] = function(_0x2bd2ae) {
		return -(--_0x2bd2ae * _0x2bd2ae * _0x2bd2ae * _0x2bd2ae - 0x1);
	};
	ig['Tween']['Easing']['Quartic']['EaseInOut'] = function(_0x5de56c) {
		return 0x1 > (_0x5de56c *= 0x2) ? 0.5 * _0x5de56c * _0x5de56c * _0x5de56c * _0x5de56c : -0.5 * ((_0x5de56c -= 0x2) * _0x5de56c * _0x5de56c * _0x5de56c - 0x2);
	};
	ig['Tween']['Easing']['Quintic']['EaseIn'] = function(_0x2d8ef2) {
		return _0x2d8ef2 * _0x2d8ef2 * _0x2d8ef2 * _0x2d8ef2 * _0x2d8ef2;
	};
	ig['Tween']['Easing']['Quintic']['EaseOut'] = function(_0x1c9ffd) {
		return (_0x1c9ffd -= 0x1) * _0x1c9ffd * _0x1c9ffd * _0x1c9ffd * _0x1c9ffd + 0x1;
	};
	ig['Tween']['Easing']['Quintic']['EaseInOut'] = function(_0x27c411) {
		return 0x1 > (_0x27c411 *= 0x2) ? 0.5 * _0x27c411 * _0x27c411 * _0x27c411 * _0x27c411 * _0x27c411 : 0.5 * ((_0x27c411 -= 0x2) * _0x27c411 * _0x27c411 * _0x27c411 * _0x27c411 + 0x2);
	};
	ig['Tween']['Easing']['Sinusoidal']['EaseIn'] = function(_0x5bdb92) {
		return -Math['cos'](_0x5bdb92 * Math['PI'] / 0x2) + 0x1;
	};
	ig['Tween']['Easing']['Sinusoidal']['EaseOut'] = function(_0xbb5c76) {
		return Math['sin'](_0xbb5c76 * Math['PI'] / 0x2);
	};
	ig['Tween']['Easing']['Sinusoidal']['EaseInOut'] = function(_0x2ba941) {
		return -0.5 * (Math['cos'](Math['PI'] * _0x2ba941) - 0x1);
	};
	ig['Tween']['Easing']['Exponential']['EaseIn'] = function(_0x5d93fb) {
		return 0x0 == _0x5d93fb ? 0x0 : Math['pow'](0x2, 0xa * (_0x5d93fb - 0x1));
	};
	ig['Tween']['Easing']['Exponential']['EaseOut'] = function(_0x442280) {
		return 0x1 == _0x442280 ? 0x1 : -Math['pow'](0x2, -0xa * _0x442280) + 0x1;
	};
	ig['Tween']['Easing']['Exponential']['EaseInOut'] = function(_0x5656e0) {
		return 0x0 == _0x5656e0 ? 0x0 : 0x1 == _0x5656e0 ? 0x1 : 0x1 > (_0x5656e0 *= 0x2) ? 0.5 * Math['pow'](0x2, 0xa * (_0x5656e0 - 0x1)) : 0.5 * (-Math['pow'](0x2, -0xa * (_0x5656e0 - 0x1)) + 0x2);
	};
	ig['Tween']['Easing']['Circular']['EaseIn'] = function(_0x349a57) {
		return -(Math['sqrt'](0x1 - _0x349a57 * _0x349a57) - 0x1);
	};
	ig['Tween']['Easing']['Circular']['EaseOut'] = function(_0x184952) {
		return Math['sqrt'](0x1 - --_0x184952 * _0x184952);
	};
	ig['Tween']['Easing']['Circular']['EaseInOut'] = function(_0x1dc153) {
		return 0x1 > (_0x1dc153 /= 0.5) ? -0.5 * (Math['sqrt'](0x1 - _0x1dc153 * _0x1dc153) - 0x1) : 0.5 * (Math['sqrt'](0x1 - (_0x1dc153 -= 0x2) * _0x1dc153) + 0x1);
	};
	ig['Tween']['Easing']['Elastic']['EaseIn'] = function(_0x409730) {
		var _0x2eb6c7, _0x2b5acd = 0.1,
			_0x733736 = 0.4;
		if (0x0 == _0x409730) return 0x0;
		if (0x1 == _0x409730) return 0x1;
		_0x733736 || (_0x733736 = 0.3);
		!_0x2b5acd || 0x1 > _0x2b5acd ? (_0x2b5acd = 0x1, _0x2eb6c7 = _0x733736 / 0x4) : _0x2eb6c7 = _0x733736 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x2b5acd);
		return -(_0x2b5acd * Math['pow'](0x2, 0xa * (_0x409730 -= 0x1)) * Math['sin'](0x2 * (_0x409730 - _0x2eb6c7) * Math['PI'] / _0x733736));
	};
	ig['Tween']['Easing']['Elastic']['EaseOut'] = function(_0x30b53f) {
		var _0x20e13d, _0x53becc = 0.1,
			_0x46b57c = 0.4;
		if (0x0 == _0x30b53f) return 0x0;
		if (0x1 == _0x30b53f) return 0x1;
		_0x46b57c || (_0x46b57c = 0.3);
		!_0x53becc || 0x1 > _0x53becc ? (_0x53becc = 0x1, _0x20e13d = _0x46b57c / 0x4) : _0x20e13d = _0x46b57c / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x53becc);
		return _0x53becc * Math['pow'](0x2, -0xa * _0x30b53f) * Math['sin'](0x2 * (_0x30b53f - _0x20e13d) * Math['PI'] / _0x46b57c) + 0x1;
	};
	ig['Tween']['Easing']['Elastic']['EaseInOut'] = function(_0x215142) {
		var _0x5f3677, _0x3c03de = 0.1,
			_0x3da998 = 0.4;
		if (0x0 == _0x215142) return 0x0;
		if (0x1 == _0x215142) return 0x1;
		_0x3da998 || (_0x3da998 = 0.3);
		!_0x3c03de || 0x1 > _0x3c03de ? (_0x3c03de = 0x1, _0x5f3677 = _0x3da998 / 0x4) : _0x5f3677 = _0x3da998 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x3c03de);
		return 0x1 > (_0x215142 *= 0x2) ? -0.5 * _0x3c03de * Math['pow'](0x2, 0xa * (_0x215142 -= 0x1)) * Math['sin'](0x2 * (_0x215142 - _0x5f3677) * Math['PI'] / _0x3da998) : 0.5 * _0x3c03de * Math['pow'](0x2, -0xa * (_0x215142 -= 0x1)) * Math['sin'](0x2 * (_0x215142 - _0x5f3677) * Math['PI'] / _0x3da998) + 0x1;
	};
	ig['Tween']['Easing']['Back']['EaseIn'] = function(_0x28d95b) {
		return _0x28d95b * _0x28d95b * (2.70158 * _0x28d95b - 1.70158);
	};
	ig['Tween']['Easing']['Back']['EaseOut'] = function(_0x171037) {
		return (_0x171037 -= 0x1) * _0x171037 * (2.70158 * _0x171037 + 1.70158) + 0x1;
	};
	ig['Tween']['Easing']['Back']['EaseInOut'] = function(_0x1b27f8) {
		return 0x1 > (_0x1b27f8 *= 0x2) ? 0.5 * _0x1b27f8 * _0x1b27f8 * (3.5949095 * _0x1b27f8 - 2.5949095) : 0.5 * ((_0x1b27f8 -= 0x2) * _0x1b27f8 * (3.5949095 * _0x1b27f8 + 2.5949095) + 0x2);
	};
	ig['Tween']['Easing']['Bounce']['EaseIn'] = function(_0x282468) {
		return 0x1 - ig['Tween']['Easing']['Bounce']['EaseOut'](0x1 - _0x282468);
	};
	ig['Tween']['Easing']['Bounce']['EaseOut'] = function(_0xc72d92) {
		return (_0xc72d92 /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0xc72d92 * _0xc72d92 : _0xc72d92 < 0x2 / 2.75 ? 7.5625 * (_0xc72d92 -= 1.5 / 2.75) * _0xc72d92 + 0.75 : _0xc72d92 < 2.5 / 2.75 ? 7.5625 * (_0xc72d92 -= 2.25 / 2.75) * _0xc72d92 + 0.9375 : 7.5625 * (_0xc72d92 -= 2.625 / 2.75) * _0xc72d92 + 0.984375;
	};
	ig['Tween']['Easing']['Bounce']['EaseInOut'] = function(_0x6a77a5) {
		return 0.5 > _0x6a77a5 ? 0.5 * ig['Tween']['Easing']['Bounce']['EaseIn'](0x2 * _0x6a77a5) : 0.5 * ig['Tween']['Easing']['Bounce']['EaseOut'](0x2 * _0x6a77a5 - 0x1) + 0.5;
	};
	ig['Tween']['Interpolation'] = {
		'Linear': function(_0x372476, _0x1f59cd) {
			var _0x2be355 = _0x372476['length'] - 0x1,
				_0x26a5bc = _0x2be355 * _0x1f59cd,
				_0x3d0cee = Math['floor'](_0x26a5bc),
				_0x2217e0 = TWEEN['Interpolation']['Utils']['Linear'];
			return 0x0 > _0x1f59cd ? _0x2217e0(_0x372476[0x0], _0x372476[0x1], _0x26a5bc) : 0x1 < _0x1f59cd ? _0x2217e0(_0x372476[_0x2be355], _0x372476[_0x2be355 - 0x1], _0x2be355 - _0x26a5bc) : _0x2217e0(_0x372476[_0x3d0cee], _0x372476[_0x3d0cee + 0x1 > _0x2be355 ? _0x2be355 : _0x3d0cee + 0x1], _0x26a5bc - _0x3d0cee);
		}
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.entity-patch')['requires']('impact.entity')['defines'](function() {
	ig['Entity']['inject']({
		'handleMovementTrace': function(_0x4055b4) {
			this['standing'] = !0x1;
			_0x4055b4['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0));
			_0x4055b4['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
			if (_0x4055b4['collision']['slope']) {
				var _0x869721 = _0x4055b4['collision']['slope'];
				if (0x0 < this['bounciness']) {
					var _0x491230 = this['vel']['x'] * _0x869721['nx'] + this['vel']['y'] * _0x869721['ny'];
					this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x869721['nx'] * _0x491230) * this['bounciness'];
					this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x869721['ny'] * _0x491230) * this['bounciness'];
				} else _0x491230 = (this['vel']['x'] * _0x869721['x'] + this['vel']['y'] * _0x869721['y']) / (_0x869721['x'] * _0x869721['x'] + _0x869721['y'] * _0x869721['y']), this['vel']['x'] = _0x869721['x'] * _0x491230, this['vel']['y'] = _0x869721['y'] * _0x491230, _0x869721 = Math['atan2'](_0x869721['x'], _0x869721['y']), _0x869721 > this['slopeStanding']['min'] && _0x869721 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
			}
			this['pos']['x'] = _0x4055b4['pos']['x'];
			this['pos']['y'] = _0x4055b4['pos']['y'];
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.tweens-handler')['requires']('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch')['defines'](function() {
	Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x2a3a0d) {
		for (var _0xbe1a46 = 0x0; _0xbe1a46 < this['length']; ++_0xbe1a46)
			if (this[_0xbe1a46] === _0x2a3a0d) return _0xbe1a46;
		return -0x1;
	});
	ig['TweensHandler'] = ig['Class']['extend']({
		'_tweens': [],
		'_systemPausedTweens': [],
		'init': function() {},
		'getAll': function() {
			return this['_tweens'];
		},
		'removeAll': function() {
			this['_tweens'] = [];
		},
		'add': function(_0x12a3dc) {
			this['_tweens']['push'](_0x12a3dc);
		},
		'remove': function(_0x245199) {
			_0x245199 = this['_tweens']['indexOf'](_0x245199); - 0x1 !== _0x245199 && this['_tweens']['splice'](_0x245199, 0x1);
		},
		'onSystemPause': function() {
			if (0x0 === this['_tweens']['length']) return !0x1;
			for (var _0x158ca3 = 0x0, _0x4bca49 = null; _0x158ca3 < this['_tweens']['length'];) _0x4bca49 = this['_tweens'][_0x158ca3], _0x4bca49['_isPlaying'] && (this['_systemPausedTweens']['push'](_0x4bca49), _0x4bca49['pause']()), _0x158ca3++;
			return !0x0;
		},
		'onSystemResume': function() {
			if (0x0 === this['_systemPausedTweens']['length']) return !0x1;
			for (var _0x59aeaa = 0x0; _0x59aeaa < this['_systemPausedTweens']['length'];) this['_systemPausedTweens'][_0x59aeaa]['resume'](), _0x59aeaa++;
			this['_systemPausedTweens'] = [];
			return !0x0;
		},
		'update': function(_0x7e3b, _0x46de68) {
			if (0x0 === this['_tweens']['length']) return !0x1;
			var _0x5b43c1 = 0x0;
			for (_0x7e3b = void 0x0 !== _0x7e3b ? _0x7e3b : ig['game']['tweens']['now'](); _0x5b43c1 < this['_tweens']['length'];) this['_tweens'][_0x5b43c1]['update'](_0x7e3b) || _0x46de68 ? _0x5b43c1++ : this['_tweens']['splice'](_0x5b43c1, 0x1);
			return !0x0;
		},
		'now': function() {
			return Date['now']();
		}
	});
	ig['TweenDef'] = ig['Class']['extend']({
		'_ent': null,
		'_valuesStart': {},
		'_valuesEnd': {},
		'_valuesStartRepeat': {},
		'_duration': 0x3e8,
		'_repeat': 0x0,
		'_yoyo': !0x1,
		'_isPlaying': !0x1,
		'_reversed': !0x1,
		'_delayTime': 0x0,
		'_startTime': null,
		'_pauseTime': null,
		'_easingFunction': ig['Tween']['Easing']['Linear']['EaseNone'],
		'_interpolationFunction': ig['Tween']['Interpolation']['Linear'],
		'_chainedTweens': [],
		'_onStartCallback': null,
		'_onStartCallbackFired': !0x1,
		'_onUpdateCallback': null,
		'_onCompleteCallback': null,
		'_onStopCallback': null,
		'_onPauseCallback': null,
		'_onResumeCallback': null,
		'_currentElapsed': 0x0,
		'init': function(_0xee486a) {
			this['_object'] = _0xee486a;
		},
		'to': function(_0x35fcc0, _0x376252) {
			this['_valuesEnd'] = _0x35fcc0;
			void 0x0 !== _0x376252 && (this['_duration'] = _0x376252);
			return this;
		},
		'start': function(_0x3a2559) {
			if (this['_isPlaying']) return this;
			ig['game']['tweens']['add'](this);
			this['_isPlaying'] = !0x0;
			this['_onStartCallbackFired'] = !0x1;
			this['_startTime'] = void 0x0 !== _0x3a2559 ? _0x3a2559 : ig['game']['tweens']['now']();
			this['_startTime'] += this['_delayTime'];
			for (var _0x1ce75e in this['_valuesEnd']) {
				if (this['_valuesEnd'][_0x1ce75e] instanceof Array) {
					if (0x0 === this['_valuesEnd'][_0x1ce75e]['length']) continue;
					this['_valuesEnd'][_0x1ce75e] = [this['_object'][_0x1ce75e]]['concat'](this['_valuesEnd'][_0x1ce75e]);
				}
				void 0x0 !== this['_object'][_0x1ce75e] && (this['_valuesStart'][_0x1ce75e] = this['_object'][_0x1ce75e], !0x1 === this['_valuesStart'][_0x1ce75e] instanceof Array && (this['_valuesStart'][_0x1ce75e] *= 0x1), this['_valuesStartRepeat'][_0x1ce75e] = this['_valuesStart'][_0x1ce75e] || 0x0);
			}
			return this;
		},
		'stop': function() {
			if (!this['_isPlaying']) return this;
			ig['game']['tweens']['remove'](this);
			this['_isPlaying'] = !0x1;
			null !== this['_onStopCallback'] && this['_onStopCallback']['call'](this['_object'], this['_object']);
			this['stopChainedTweens']();
			return this;
		},
		'pause': function() {
			if (!this['_isPlaying']) return this;
			ig['game']['tweens']['remove'](this);
			this['_isPlaying'] = !0x1;
			this['_pauseTime'] = ig['game']['tweens']['now']();
			null !== this['_onPauseCallback'] && this['_onPauseCallback']['call'](this['_object'], this['_object']);
			return this;
		},
		'resume': function() {
			if (this['_isPlaying'] || !this['_pauseTime']) return this;
			var _0x1073ed = ig['game']['tweens']['now']() - this['_pauseTime'];
			this['_startTime'] += _0x1073ed;
			ig['game']['tweens']['add'](this);
			this['_isPlaying'] = !0x0;
			null !== this['_onResumeCallback'] && this['_onResumeCallback']['call'](this['_object'], this['_object']);
			this['_pauseTime'] = null;
			return this;
		},
		'end': function() {
			this['update'](this['_startTime'] + this['_duration']);
			return this;
		},
		'stopChainedTweens': function() {
			for (var _0x47e9fc = 0x0, _0x3d7f1c = this['_chainedTweens']['length']; _0x47e9fc < _0x3d7f1c; _0x47e9fc++) this['_chainedTweens'][_0x47e9fc]['stop']();
		},
		'delay': function(_0x96a6b5) {
			this['_delayTime'] = _0x96a6b5;
			return this;
		},
		'repeat': function(_0x5ee459) {
			this['_repeat'] = _0x5ee459;
			return this;
		},
		'repeatDelay': function(_0x486886) {
			this['_repeatDelayTime'] = _0x486886;
			return this;
		},
		'yoyo': function(_0x14b2ae) {
			this['_yoyo'] = _0x14b2ae;
			return this;
		},
		'easing': function(_0x1ad7d1) {
			this['_easingFunction'] = _0x1ad7d1;
			return this;
		},
		'interpolation': function(_0x480755) {
			this['_interpolationFunction'] = _0x480755;
			return this;
		},
		'chain': function() {
			this['_chainedTweens'] = arguments;
			return this;
		},
		'onStart': function(_0x1ad989) {
			this['_onStartCallback'] = _0x1ad989;
			return this;
		},
		'onUpdate': function(_0x91058b) {
			this['_onUpdateCallback'] = _0x91058b;
			return this;
		},
		'onComplete': function(_0x4f6fa9) {
			this['_onCompleteCallback'] = _0x4f6fa9;
			return this;
		},
		'onStop': function(_0x213c86) {
			this['_onStopCallback'] = _0x213c86;
			return this;
		},
		'onPause': function(_0x16c559) {
			this['_onPauseCallback'] = _0x16c559;
			return this;
		},
		'onResume': function(_0x540258) {
			this['_onResumeCallback'] = _0x540258;
			return this;
		},
		'update': function(_0xb82d1b) {
			var _0x27aaa1, _0x311496, _0x2e467c;
			if (_0xb82d1b < this['_startTime']) return !0x0;
			!0x1 === this['_onStartCallbackFired'] && (null !== this['_onStartCallback'] && this['_onStartCallback']['call'](this['_object'], this['_object']), this['_onStartCallbackFired'] = !0x0);
			_0x311496 = (_0xb82d1b - this['_startTime']) / this['_duration'];
			this['_currentElapsed'] = _0x311496 = 0x1 < _0x311496 ? 0x1 : _0x311496;
			_0x2e467c = this['_easingFunction'](_0x311496);
			for (_0x27aaa1 in this['_valuesEnd'])
				if (void 0x0 !== this['_valuesStart'][_0x27aaa1]) {
					var _0x2a397c = this['_valuesStart'][_0x27aaa1] || 0x0,
						_0x463aa6 = this['_valuesEnd'][_0x27aaa1];
					_0x463aa6 instanceof Array ? this['_object'][_0x27aaa1] = this['_interpolationFunction'](_0x463aa6, _0x2e467c) : ('string' === typeof _0x463aa6 && (_0x463aa6 = '+' === _0x463aa6['charAt'](0x0) || '-' === _0x463aa6['charAt'](0x0) ? _0x2a397c + parseFloat(_0x463aa6) : parseFloat(_0x463aa6)), 'number' === typeof _0x463aa6 && (this['_object'][_0x27aaa1] = _0x2a397c + (_0x463aa6 - _0x2a397c) * _0x2e467c));
				} null !== this['_onUpdateCallback'] && this['_onUpdateCallback']['call'](this['_object'], this['_object'], _0x2e467c);
			if (0x1 === _0x311496)
				if (0x0 < this['_repeat']) {
					isFinite(this['_repeat']) && this['_repeat']--;
					for (_0x27aaa1 in this['_valuesStartRepeat']) 'string' === typeof this['_valuesEnd'][_0x27aaa1] && (this['_valuesStartRepeat'][_0x27aaa1] = _valuesStartRepeat[_0x27aaa1] + parseFloat(_valuesEnd[_0x27aaa1])), this['_yoyo'] && (_0x311496 = this['_valuesStartRepeat'][_0x27aaa1], this['_valuesStartRepeat'][_0x27aaa1] = this['_valuesEnd'][_0x27aaa1], this['_valuesEnd'][_0x27aaa1] = _0x311496), this['_valuesStart'][_0x27aaa1] = this['_valuesStartRepeat'][_0x27aaa1];
					this['_yoyo'] && (this['_reversed'] = !this['_reversed']);
					this['_startTime'] = void 0x0 !== this['_repeatDelayTime'] ? _0xb82d1b + this['_repeatDelayTime'] : _0xb82d1b + this['_delayTime'];
				} else {
					null !== this['_onCompleteCallback'] && this['_onCompleteCallback']['call'](this['_object'], this['_object']);
					_0xb82d1b = 0x0;
					for (_0x27aaa1 = this['_chainedTweens']['length']; _0xb82d1b < _0x27aaa1; _0xb82d1b++) this['_chainedTweens'][_0xb82d1b]['start'](this['_startTime'] + this['_duration']);
					return !0x1;
				} return !0x0;
		}
	});
	var _0x443e1a = [0x1];
	ig['Tween']['Interpolation'] = {
		'Linear': function(_0x17173d, _0xc1528b) {
			var _0x435137 = _0x17173d['length'] - 0x1,
				_0x53e3a2 = _0x435137 * _0xc1528b,
				_0x3792ad = Math['floor'](_0x53e3a2),
				_0x2e8e02 = ig['Tween']['Interpolation']['Utils']['Linear'];
			return 0x0 > _0xc1528b ? _0x2e8e02(_0x17173d[0x0], _0x17173d[0x1], _0x53e3a2) : 0x1 < _0xc1528b ? _0x2e8e02(_0x17173d[_0x435137], _0x17173d[_0x435137 - 0x1], _0x435137 - _0x53e3a2) : _0x2e8e02(_0x17173d[_0x3792ad], _0x17173d[_0x3792ad + 0x1 > _0x435137 ? _0x435137 : _0x3792ad + 0x1], _0x53e3a2 - _0x3792ad);
		},
		'Bezier': function(_0x2022cb, _0xfa439b) {
			for (var _0xcbf6dd = 0x0, _0x29be35 = _0x2022cb['length'] - 0x1, _0x1966a7 = Math['pow'], _0x630b00 = ig['Tween']['Interpolation']['Utils']['Bernstein'], _0x5e4743 = 0x0; _0x5e4743 <= _0x29be35; _0x5e4743++) _0xcbf6dd += _0x1966a7(0x1 - _0xfa439b, _0x29be35 - _0x5e4743) * _0x1966a7(_0xfa439b, _0x5e4743) * _0x2022cb[_0x5e4743] * _0x630b00(_0x29be35, _0x5e4743);
			return _0xcbf6dd;
		},
		'CatmullRom': function(_0x25d7f5, _0x24ea19) {
			var _0x471359 = _0x25d7f5['length'] - 0x1,
				_0x317f06 = _0x471359 * _0x24ea19,
				_0x22683e = Math['floor'](_0x317f06),
				_0x55f7b3 = ig['Tween']['Interpolation']['Utils']['CatmullRom'];
			return _0x25d7f5[0x0] === _0x25d7f5[_0x471359] ? (0x0 > _0x24ea19 && (_0x22683e = Math['floor'](_0x317f06 = _0x471359 * (0x1 + _0x24ea19))), _0x55f7b3(_0x25d7f5[(_0x22683e - 0x1 + _0x471359) % _0x471359], _0x25d7f5[_0x22683e], _0x25d7f5[(_0x22683e + 0x1) % _0x471359], _0x25d7f5[(_0x22683e + 0x2) % _0x471359], _0x317f06 - _0x22683e)) : 0x0 > _0x24ea19 ? _0x25d7f5[0x0] - (_0x55f7b3(_0x25d7f5[0x0], _0x25d7f5[0x0], _0x25d7f5[0x1], _0x25d7f5[0x1], -_0x317f06) - _0x25d7f5[0x0]) : 0x1 < _0x24ea19 ? _0x25d7f5[_0x471359] - (_0x55f7b3(_0x25d7f5[_0x471359], _0x25d7f5[_0x471359], _0x25d7f5[_0x471359 - 0x1], _0x25d7f5[_0x471359 - 0x1], _0x317f06 - _0x471359) - _0x25d7f5[_0x471359]) : _0x55f7b3(_0x25d7f5[_0x22683e ? _0x22683e - 0x1 : 0x0], _0x25d7f5[_0x22683e], _0x25d7f5[_0x471359 < _0x22683e + 0x1 ? _0x471359 : _0x22683e + 0x1], _0x25d7f5[_0x471359 < _0x22683e + 0x2 ? _0x471359 : _0x22683e + 0x2], _0x317f06 - _0x22683e);
		},
		'Utils': {
			'Linear': function(_0x56839a, _0x3e0613, _0x26abba) {
				return (_0x3e0613 - _0x56839a) * _0x26abba + _0x56839a;
			},
			'Bernstein': function(_0x264bb7, _0x3e0f59) {
				var _0x2e977b = ig['Tween']['Interpolation']['Utils']['Factorial'];
				return _0x2e977b(_0x264bb7) / _0x2e977b(_0x3e0f59) / _0x2e977b(_0x264bb7 - _0x3e0f59);
			},
			'Factorial': function(_0x5c6dea) {
				var _0x596aa7 = 0x1;
				if (_0x443e1a[_0x5c6dea]) return _0x443e1a[_0x5c6dea];
				for (var _0xdb3dae = _0x5c6dea; 0x1 < _0xdb3dae; _0xdb3dae--) _0x596aa7 *= _0xdb3dae;
				return _0x443e1a[_0x5c6dea] = _0x596aa7;
			},
			'CatmullRom': function(_0x29c028, _0x3b420d, _0x3c95a9, _0xd06321, _0x439677) {
				_0x29c028 = 0.5 * (_0x3c95a9 - _0x29c028);
				_0xd06321 = 0.5 * (_0xd06321 - _0x3b420d);
				var _0x1c6b93 = _0x439677 * _0x439677;
				return (0x2 * _0x3b420d - 0x2 * _0x3c95a9 + _0x29c028 + _0xd06321) * _0x439677 * _0x1c6b93 + (-0x3 * _0x3b420d + 0x3 * _0x3c95a9 - 0x2 * _0x29c028 - _0xd06321) * _0x1c6b93 + _0x29c028 * _0x439677 + _0x3b420d;
			}
		}
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.url-parameters')['defines'](function() {
	ig['UrlParameters'] = ig['Class']['extend']({
		'init': function() {
			switch (getQueryVariable('iphone')) {
				case 'true':
					ig['ua']['iPhone'] = !0x0, console['log']('iPhone\x20mode');
			}
			var _0x5592fb = getQueryVariable('webview');
			if (_0x5592fb) switch (_0x5592fb) {
				case 'true':
					ig['ua']['is_uiwebview'] = !0x0, console['log']('webview\x20mode');
			}
			if (_0x5592fb = getQueryVariable('debug')) switch (_0x5592fb) {
				case 'true':
					ig['game']['showDebugMenu'](), console['log']('debug\x20mode');
			}
			switch (getQueryVariable('view')) {
				case 'stats':
					ig['game']['resetPlayerStats'](), ig['game']['endGame']();
			}
			getQueryVariable('ad');
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.director')['requires']('impact.impact')['defines'](function() {
	ig['Director'] = ig['Class']['extend']({
		'init': function(_0x38f70d, _0x15641d) {
			this['game'] = _0x38f70d;
			this['levels'] = [];
			this['currentLevel'] = 0x0;
			this['append'](_0x15641d);
		},
		'loadLevel': function(_0x14458a) {
			for (var _0x3892e1 in ig['sizeHandler']['dynamicClickableEntityDivs']) {
				var _0xa69210 = ig['domHandler']['getElementById']('#' + _0x3892e1);
				ig['domHandler']['hide'](_0xa69210);
			}
			this['currentLevel'] = _0x14458a;
			this['game']['loadLevel'](this['levels'][_0x14458a]);
			return !0x0;
		},
		'loadLevelWithoutEntities': function(_0x26cda3) {
			this['currentLevel'] = _0x26cda3;
			this['game']['loadLevelWithoutEntities'](this['levels'][_0x26cda3]);
			return !0x0;
		},
		'append': function(_0x10fa4e) {
			newLevels = [];
			return 'object' === typeof _0x10fa4e ? (_0x10fa4e['constructor'] === []['constructor'] ? newLevels = _0x10fa4e : newLevels[0x0] = _0x10fa4e, this['levels'] = this['levels']['concat'](newLevels), !0x0) : !0x1;
		},
		'nextLevel': function() {
			return this['currentLevel'] + 0x1 < this['levels']['length'] ? this['loadLevel'](this['currentLevel'] + 0x1) : !0x1;
		},
		'previousLevel': function() {
			return 0x0 <= this['currentLevel'] - 0x1 ? this['loadLevel'](this['currentLevel'] - 0x1) : !0x1;
		},
		'jumpTo': function(_0x475eb6) {
			var _0x3b47b3 = null;
			for (i = 0x0; i < this['levels']['length']; i++) this['levels'][i] == _0x475eb6 && (_0x3b47b3 = i);
			return 0x0 <= _0x3b47b3 ? this['loadLevel'](_0x3b47b3) : !0x1;
		},
		'firstLevel': function() {
			return this['loadLevel'](0x0);
		},
		'lastLevel': function() {
			return this['loadLevel'](this['levels']['length'] - 0x1);
		},
		'reloadLevel': function() {
			return this['loadLevel'](this['currentLevel']);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.impact-storage')['requires']('impact.game')['defines'](function() {
	ig['Storage'] = ig['Class']['extend']({
		'staticInstantiate': function() {
			return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
		},
		'init': function() {
			ig['Storage']['instance'] = this;
		},
		'isCapable': function() {
			return 'undefined' !== typeof window['localStorage'];
		},
		'isSet': function(_0x3616aa) {
			return null !== this['get'](_0x3616aa);
		},
		'initUnset': function(_0xfd9a0e, _0x426f3e) {
			null === this['get'](_0xfd9a0e) && this['set'](_0xfd9a0e, _0x426f3e);
		},
		'get': function(_0x37685f) {
			if (!this['isCapable']()) return null;
			try {
				return JSON['parse'](localStorage['getItem'](_0x37685f));
			} catch (_0x17ff16) {
				return window['localStorage']['getItem'](_0x37685f);
			}
		},
		'getInt': function(_0x2595a1) {
			return ~~this['get'](_0x2595a1);
		},
		'getFloat': function(_0x2da0d8) {
			return parseFloat(this['get'](_0x2da0d8));
		},
		'getBool': function(_0x270b62) {
			return !!this['get'](_0x270b62);
		},
		'key': function(_0x590444) {
			return this['isCapable']() ? window['localStorage']['key'](_0x590444) : null;
		},
		'set': function(_0x509aa5, _0x233ac8) {
			if (!this['isCapable']()) return null;
			try {
				window['localStorage']['setItem'](_0x509aa5, JSON['stringify'](_0x233ac8));
			} catch (_0xfd7b0) {
				console['log'](_0xfd7b0);
			}
		},
		'setHighest': function(_0x1f4679, _0x2f4871) {
			_0x2f4871 > this['getFloat'](_0x1f4679) && this['set'](_0x1f4679, _0x2f4871);
		},
		'remove': function(_0x17e88c) {
			if (!this['isCapable']()) return null;
			window['localStorage']['removeItem'](_0x17e88c);
		},
		'clear': function() {
			if (!this['isCapable']()) return null;
			window['localStorage']['clear']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.fullscreen')['requires']('impact.entity')['defines'](function() {
	ig['Fullscreen'] = {
		'enableFullscreenButton': !0x0,
		'_isEnabled': 'notChecked',
		'isEnabled': function() {
			'notChecked' == this['_isEnabled'] && (this['_isEnabled'] = document['fullscreenEnabled'] || document['mozFullScreenEnabled'] || document['webkitFullscreenEnabled'] || document['msFullscreenEnabled'] ? !0x0 : !0x1);
			return this['_isEnabled'];
		},
		'isFullscreen': function() {
			return ig['Fullscreen']['isEnabled']() && (document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement']) ? !0x0 : !0x1;
		},
		'toggleFullscreen': function() {
			ig['Fullscreen']['isFullscreen']() ? ig['Fullscreen']['exitFullscreen']() : ig['Fullscreen']['requestFullscreen']();
			ig['sizeHandler']['orientationDelayHandler']();
		},
		'requestFullscreen': function() {
			var _0x3ea5d6 = document['documentElement'];
			_0x3ea5d6['requestFullscreen'] ? _0x3ea5d6['requestFullscreen']() : _0x3ea5d6['webkitRequestFullscreen'] ? _0x3ea5d6['webkitRequestFullscreen']() : _0x3ea5d6['mozRequestFullScreen'] ? _0x3ea5d6['mozRequestFullScreen']() : _0x3ea5d6['msRequestFullscreen'] ? _0x3ea5d6['msRequestFullscreen']() : console['log']('no\x20request\x20fullscreen\x20method\x20available');
		},
		'exitFullscreen': function() {
			document['exitFullscreen'] ? document['exitFullscreen']() : document['webkitExitFullscreen'] ? document['webkitExitFullscreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['msExitFullscreen'] ? document['msExitFullscreen']() : console['log']('no\x20exit\x20fullscreen\x20method\x20available');
		},
		'divs': {}
	};
	ig['Director']['inject']({
		'loadLevel': function(_0x5288bc) {
			var _0x1a434e = ig['Fullscreen']['divs'],
				_0xf3c214;
			for (_0xf3c214 in _0x1a434e) _0x1a434e = ig['domHandler']['getElementById']('#' + _0xf3c214), ig['domHandler']['hide'](_0x1a434e);
			return this['parent'](_0x5288bc);
		}
	});
	ig['SizeHandler']['inject']({
		'resize': function() {
			this['parent']();
			var _0x2e01d2 = ig['Fullscreen']['divs'],
				_0x18d203;
			for (_0x18d203 in _0x2e01d2) {
				var _0x585ba0 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']),
					_0x2acbed = ig['domHandler']['getElementById']('#' + _0x18d203),
					_0x46e9e2 = _0x2e01d2[_0x18d203]['entity_pos_x'],
					_0xe7f76b = _0x2e01d2[_0x18d203]['entity_pos_y'],
					_0x531686 = _0x2e01d2[_0x18d203]['width'],
					_0x265ad3 = _0x2e01d2[_0x18d203]['height'],
					_0xa7978 = ig['domHandler']['getElementById']('#canvas'),
					_0x20b28a = ig['domHandler']['getOffsets'](_0xa7978);
				ig['ua']['mobile'] ? (_0xa7978 = _0x20b28a['left'], _0x20b28a = _0x20b28a['top'], ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x46e9e2 = Math['floor'](_0xa7978 + _0x46e9e2 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0xe7f76b = Math['floor'](_0x20b28a + _0xe7f76b * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x531686 = Math['floor'](_0x531686 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x265ad3 = Math['floor'](_0x265ad3 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x46e9e2 = Math['floor'](_0x46e9e2 * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0xe7f76b = Math['floor'](_0xe7f76b * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x531686 = Math['floor'](_0x531686 * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x265ad3 = Math['floor'](_0x265ad3 * ig['sizeHandler']['sizeRatio']['y']) + 'px')) : (_0xa7978 = _0x20b28a['left'], _0x20b28a = _0x20b28a['top'], _0x46e9e2 = Math['floor'](_0xa7978 + _0x46e9e2 * _0x585ba0) + 'px', _0xe7f76b = Math['floor'](_0x20b28a + _0xe7f76b * _0x585ba0) + 'px', _0x531686 = Math['floor'](_0x531686 * _0x585ba0) + 'px', _0x265ad3 = Math['floor'](_0x265ad3 * _0x585ba0) + 'px');
				ig['domHandler']['css'](_0x2acbed, {
					'float': 'left',
					'position': 'absolute',
					'left': _0x46e9e2,
					'top': _0xe7f76b,
					'width': _0x531686,
					'height': _0x265ad3,
					'z-index': 0x3
				});
				_0x2e01d2[_0x18d203]['font-size'] && ig['domHandler']['css'](_0x2acbed, {
					'font-size': _0x2e01d2[_0x18d203]['font-size'] * _0x585ba0 + 'px'
				});
			}
		}
	});
	ig['FullscreenButton'] = ig['Entity']['extend']({
		'enterImage': null,
		'exitImage': null,
		'isReady': !0x1,
		'zIndex': 0xf423f,
		'identifier': null,
		'prevPos': {
			'x': 0x0,
			'y': 0x0
		},
		'invisImagePath': 'media/graphics/misc/invisible.png',
		'init': function(_0x14012a, _0xd70d19, _0x474a29) {
			this['parent'](_0x14012a, _0xd70d19, _0x474a29);
			ig['Fullscreen']['isEnabled']() && ig['Fullscreen']['enableFullscreenButton'] ? this['enterImage']['loaded'] ? this['initSize']() : this['enterImage']['loadCallback'] = function() {
				this['initSize']();
			} ['bind'](this) : this['kill']();
		},
		'kill': function() {
			this['parent']();
		},
		'destroy': function() {
			this['parent']();
			console['log']('destroy');
		},
		'initSize': function() {
			this['size']['x'] = this['enterImage']['width'];
			this['size']['y'] = this['enterImage']['height'];
			this['createClickableLayer']();
			this['isReady'] = !0x0;
		},
		'createClickableLayer': function() {
			this['identifier'] = 'fullscreen-button-layer';
			var _0x28798a = ig['domHandler']['getElementById']('#' + this['identifier']);
			_0x28798a ? (ig['domHandler']['show'](_0x28798a), ig['domHandler']['attr'](_0x28798a, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this['createClickableOutboundLayer']();
		},
		'update': function(_0x346aec, _0x2604c6) {
			_0x346aec = this['pos']['x'];
			_0x2604c6 = this['pos']['y'];
			this['isReady'] && !(this['prevPos']['x'] === _0x346aec && this['prevPos']['y'] === _0x2604c6) && (ig['Fullscreen']['divs'][this['identifier']] = {}, ig['Fullscreen']['divs'][this['identifier']]['width'] = this['size']['x'], ig['Fullscreen']['divs'][this['identifier']]['height'] = this['size']['y'], ig['Fullscreen']['divs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['Fullscreen']['divs'][this['identifier']]['entity_pos_y'] = this['pos']['y'], this['prevPos']['x'] = _0x346aec, this['prevPos']['y'] = _0x2604c6);
		},
		'draw': function() {
			this['isReady'] && (ig['Fullscreen']['isFullscreen']() ? this['exitImage']['draw'](this['pos']['x'], this['pos']['y']) : this['enterImage']['draw'](this['pos']['x'], this['pos']['y']));
		},
		'createClickableOutboundLayer': function() {
			var _0x5520bb = this['identifier'],
				_0x425d3c = this['invisImagePath'],
				_0x489d24 = ig['domHandler']['create']('div');
			ig['domHandler']['attr'](_0x489d24, 'id', _0x5520bb);
			ig['domHandler']['attr'](_0x489d24, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
			var _0x159e70 = ig['domHandler']['create']('a'),
				_0x4c9b48 = ig['domHandler']['create']('img');
			ig['domHandler']['css'](_0x4c9b48, {
				'width': '100%',
				'height': '100%'
			});
			ig['domHandler']['attr'](_0x4c9b48, 'src', _0x425d3c);
			_0x425d3c = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
			if (ig['ua']['mobile']) {
				var _0x32ebfc = ig['domHandler']['getElementById']('#canvas'),
					_0x32ebfc = ig['domHandler']['getOffsets'](_0x32ebfc),
					_0x1ca2d2 = _0x32ebfc['left'],
					_0x1239fb = _0x32ebfc['top'];
				console['log'](_0x32ebfc['left']);
				ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x32ebfc = Math['floor'](_0x1ca2d2 + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x1239fb = Math['floor'](_0x1239fb + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x1ca2d2 = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x425d3c = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x32ebfc = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x1239fb = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x1ca2d2 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x425d3c = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
			} else _0x32ebfc = ig['domHandler']['getElementById']('#canvas'), _0x32ebfc = ig['domHandler']['getOffsets'](_0x32ebfc), _0x1ca2d2 = _0x32ebfc['left'], _0x1239fb = _0x32ebfc['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x32ebfc = Math['floor'](_0x1ca2d2 + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x1239fb = Math['floor'](_0x1239fb + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x1ca2d2 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x425d3c = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x32ebfc = Math['floor'](_0x1ca2d2 + this['pos']['x'] * _0x425d3c) + 'px', _0x1239fb = Math['floor'](_0x1239fb + this['pos']['y'] * _0x425d3c) + 'px', _0x1ca2d2 = Math['floor'](this['size']['x'] * _0x425d3c) + 'px', _0x425d3c = Math['floor'](this['size']['y'] * _0x425d3c) + 'px');
			ig['domHandler']['css'](_0x489d24, {
				'float': 'left',
				'position': 'absolute',
				'left': _0x32ebfc,
				'top': _0x1239fb,
				'width': _0x1ca2d2,
				'height': _0x425d3c,
				'z-index': 0x3
			});
			ig['domHandler']['addEvent'](_0x489d24, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1);
			ig['domHandler']['appendChild'](_0x159e70, _0x4c9b48);
			ig['domHandler']['appendChild'](_0x489d24, _0x159e70);
			ig['domHandler']['appendToBody'](_0x489d24);
			ig['Fullscreen']['divs'][_0x5520bb] = {};
			ig['Fullscreen']['divs'][_0x5520bb]['width'] = this['size']['x'];
			ig['Fullscreen']['divs'][_0x5520bb]['height'] = this['size']['y'];
			ig['Fullscreen']['divs'][_0x5520bb]['entity_pos_x'] = this['pos']['x'];
			ig['Fullscreen']['divs'][_0x5520bb]['entity_pos_y'] = this['pos']['y'];
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.yandex')['requires']('impact.input', 'impact.game', 'plugins.audio.sound-handler')['defines'](function() {
	ig['YandexAPI'] = ig['Class']['extend']({
		'version': '2.1.1',
		'verbose': !0x0,
		'API_ID': 'YandexAPI',
		'sdkUrl': 'https://yandex.ru/games/sdk/v2',
		'ysdk': null,
		'hasInitApp': !0x1,
		'hasResumedWebAudioContext': !0x1,
		'orientation': 'portrait',
		'adCooldownTime': 0xb4,
		'adCooldownTimeoutId': null,
		'currentAd': null,
		'currentAdURL': null,
		'cachedSfxVolume': 0x0,
		'cachedBgmVolume': 0x0,
		'isSdkReady': !0x1,
		'isAdShown': !0x1,
		'isAdCoolingDown': !0x1,
		'branding': {
			'text': 'powered\x20by\x20MarketJS'
		},
		'googleAnalytics': {
			'enabled': !0x0,
			'hasInit': !0x1,
			'gtag': {
				'id': 'UA-119602304-2',
				'url': 'https://www.googletagmanager.com/gtag/js'
			}
		},
		'init': function() {
			this['verbose'] && console['log']('Yandex\x20API\x20initialized\x20...');
			this['setAlias']();
			this['initGA']();
			this['loadSdk']();
			this['setupEventHandler']();
			this['autoResumeAudioContext']();
			return this;
		},
		'initGA': function() {
			if (this['googleAnalytics'] && this['googleAnalytics']['enabled']) {
				if (this['googleAnalytics']['hasInit']) return !0x1;
				var _0x12a9f6 = this['googleAnalytics']['gtag']['url'] + '?id=' + this['googleAnalytics']['gtag']['id'],
					_0x5839a4, _0x45d56e = document['getElementsByTagName']('script')[0x0];
				document['getElementById']('gtag') || (_0x5839a4 = document['createElement']('script'), _0x5839a4['id'] = 'gtag', _0x5839a4['src'] = _0x12a9f6, _0x5839a4['async'] = !0x0, _0x5839a4['onload'] = function() {
					function _0x30c178() {
						dataLayer['push'](arguments);
					}
					_0x5839a4['onload'] = null;
					window['dataLayer'] = window['dataLayer'] || [];
					_0x30c178('js', new Date());
					_0x30c178('config', this['googleAnalytics']['gtag']['id']);
				} ['bind'](this), _0x45d56e['parentNode']['insertBefore'](_0x5839a4, _0x45d56e));
			}
		},
		'loadSdk': function() {
			var _0x19c18c, _0x37a048 = document['getElementsByTagName']('script')[0x0];
			document['getElementById']('id-jssdk') || (_0x19c18c = document['createElement']('script'), _0x19c18c['id'] = 'id-jssdk', _0x19c18c['src'] = this['sdkUrl'], _0x37a048['parentNode']['insertBefore'](_0x19c18c, _0x37a048), _0x19c18c['onload'] = this['onSdkReady']['bind'](this));
		},
		'setupEventHandler': function() {
			var _0xb8b313 = document['getElementById']('canvas');
			_0xb8b313 && (_0xb8b313['addEventListener']('mouseup', this['onTap']['bind'](this), !0x1), ig['ua']['touchDevice'] && (_0xb8b313['addEventListener']('touchend', this['onTap']['bind'](this), !0x1), _0xb8b313['addEventListener']('MSPointerUp', this['onTap']['bind'](this), !0x1)));
		},
		'onTap': function(_0xa7d47) {
			this['requestFullscreen'](_0xa7d47);
			this['resumeAudioContext'](_0xa7d47);
		},
		'requestFullscreen': function() {
			var _0x1ac7b1 = document['documentElement'];
			_0x1ac7b1['requestFullscreen'] ? _0x1ac7b1['requestFullscreen']() : _0x1ac7b1['webkitRequestFullscreen'] ? _0x1ac7b1['webkitRequestFullscreen']() : _0x1ac7b1['mozRequestFullScreen'] ? _0x1ac7b1['mozRequestFullScreen']() : _0x1ac7b1['msRequestFullscreen'] ? _0x1ac7b1['msRequestFullscreen']() : this['verbose'] && console['log']('Yandex\x20API\x20has\x20no\x20request\x20fullscreen\x20method\x20available');
		},
		'autoResumeAudioContext': function() {
			Howler['_autoResume'] && 'function' === typeof Howler['_autoResume'] && Howler['_autoResume']();
		},
		'resumeAudioContext': function() {
			this['hasResumedWebAudioContext'] || (this['autoResumeAudioContext'](), Howler && (Howler['_audioUnlocked'] || 'function' === typeof Howler['_unlockAudio'] && Howler['_unlockAudio'](), Howler['ctx'] && 'running' !== Howler['ctx']['state'] && Howler['ctx']['resume']()['then'](function() {
				this['hasResumedWebAudioContext'] = !0x0;
				this['verbose'] && console['log']('Yandex\x20API\x20has\x20resumed\x20WebAudio\x20Context');
			} ['bind'](this))), ig && (ig['webaudio_ctx'] && ig['webaudio_ctx']['state'] && 'running' !== ig['webaudio_ctx']['state'] && ig['webaudio_ctx']['resume']()['then'](function() {
				this['hasResumedWebAudioContext'] = !0x0;
				this['verbose'] && console['log']('Yandex\x20API\x20has\x20resumed\x20WebAudio\x20Context');
			} ['bind'](this)), ig['soundHandler'] && ig['soundHandler']['bgmPlayer'] && ig['soundHandler']['bgmPlayer']['webaudio'] && ig['soundHandler']['bgmPlayer']['webaudio']['context'] && ig['soundHandler']['bgmPlayer']['webaudio']['context']['state'] && 'running' !== ig['soundHandler']['bgmPlayer']['webaudio']['context']['state'] && ig['soundHandler']['bgmPlayer']['webaudio']['context']['resume']()['then'](function() {
				this['hasResumedWebAudioContext'] = !0x0;
				this['verbose'] && console['log']('Yandex\x20API\x20has\x20resumed\x20WebAudio\x20Context');
			} ['bind'](this))));
		},
		'initApp': function() {
			if (!this['isSdkReady']) return this['verbose'] && console['log']('Yandex\x20SDK\x20is\x20not\x20ready'), !0x1;
			if (this['hasInitApp']) return this['verbose'] && console['log']('Yandex\x20SDK\x20has\x20already\x20initialised\x20id'), !0x1;
			this['verbose'] && console['log']('Yandex\x20SDK\x20is\x20initialising\x20App');
			this['ysdk'] = YaGames['init']({
				'yandexApp': {
					'enabled': !0x0
				},
				'adv': {
					'onAdvClose': this['hideAd']['bind'](this)
				},
				'screen': {
					'fullscreen': !0x0,
					'orientation': this['getOrientation'](),
					'lock': !0x0
				}
			})['then'](function(_0x47e701) {
				this['ysdk'] = _0x47e701;
				ig['ysdk'] = window['ysdk'] = this['ysdk'];
			});
			this['hasInitApp'] = !0x0;
		},
		'getOrientation': function() {
			ig['ua']['mobile'] ? 'undefined' !== typeof ig['sizeHandler'] ? this['orientation'] = ig['sizeHandler']['portraitMode'] ? 'portrait' : 'landscape' : 'undefined' !== typeof portraitMode && (this['orientation'] = portraitMode ? 'portrait' : 'landscape') : 'undefined' !== typeof ig['sizeHandler'] ? ig['sizeHandler']['desktop'] && ig['sizeHandler']['desktop']['actualResolution'] && (this['orientation'] = ig['sizeHandler']['desktop']['actualResolution']['x'] <= ig['sizeHandler']['desktop']['actualResolution']['y'] ? 'portrait' : 'landscape') : 'undefined' !== typeof desktopWidth && 'undefined' !== typeof desktopHeight && (this['orientation'] = desktopWidth <= desktopHeight ? 'portrait' : 'landscape');
			return this['orientation'];
		},
		'onSdkReady': function() {
			this['verbose'] && console['log']('Yandex\x20SDK\x20is\x20loaded\x20and\x20ready');
			this['isSdkReady'] = !0x0;
			this['hasInitApp'] || this['initApp']();
		},
		'setAlias': function() {
			ig['yandex'] = this;
			ig['global']['yandex'] = window['yandex'] = this;
		},
		'muteAudio': function() {
			ig['soundHandler']['sfxPlayer']['volume'](0x0);
			ig['soundHandler']['bgmPlayer']['volume'](0x0);
		},
		'unmuteAudio': function() {
			this['setVolumeFromCache']();
		},
		'cacheVolume': function() {
			this['cacheSfxVolume']();
			this['cacheBgmVolume']();
		},
		'cacheSfxVolume': function() {
			ig && 'undefined' !== typeof ig['soundHandler'] && ('undefined' !== typeof ig['soundHandler']['sfxPlayer'] && 'function' === typeof ig['soundHandler']['sfxPlayer']['getVolume']) && (this['cachedSfxVolume'] = ig['soundHandler']['sfxPlayer']['getVolume']());
		},
		'cacheBgmVolume': function() {
			ig && 'undefined' !== typeof ig['soundHandler'] && ('undefined' !== typeof ig['soundHandler']['bgmPlayer'] && 'function' === typeof ig['soundHandler']['bgmPlayer']['getVolume']) && (this['cachedBgmVolume'] = ig['soundHandler']['bgmPlayer']['getVolume']());
		},
		'setVolumeFromCache': function() {
			this['setSfxVolumeFromCache']();
			this['setBgmVolumeFromCache']();
		},
		'setSfxVolumeFromCache': function() {
			0x0 < this['cachedSfxVolume'] && ig && 'undefined' !== typeof ig['soundHandler'] && 'undefined' !== typeof ig['soundHandler']['sfxPlayer'] && 'function' === typeof ig['soundHandler']['sfxPlayer']['volume'] && ig['soundHandler']['sfxPlayer']['volume'](this['cachedSfxVolume']);
		},
		'setBgmVolumeFromCache': function() {
			0x0 < this['cachedBgmVolume'] && ig && 'undefined' !== typeof ig['soundHandler'] && 'undefined' !== typeof ig['soundHandler']['bgmPlayer'] && 'function' === typeof ig['soundHandler']['bgmPlayer']['volume'] && ig['soundHandler']['bgmPlayer']['volume'](this['cachedBgmVolume']);
		},
		'startAdCooldown': function() {
			this['isAdCoolingDown'] || (this['isAdCoolingDown'] = !0x0, this['adCooldownTimeoutId'] = window['setTimeout'](this['stopAdCooldown']['bind'](this), 0x3e8 * this['adCooldownTime']), this['verbose'] && console['log']('Yandex\x20API\x20has\x20started\x20cooling\x20down.'));
		},
		'stopAdCooldown': function() {
			this['isAdCoolingDown'] && (this['isAdCoolingDown'] = !0x1, window['clearTimeout'](this['adCooldownTimeoutId']), this['verbose'] && console['log']('Yandex\x20API\x20has\x20ended\x20cooling\x20down.'));
		},
		'showAd': function(_0x30a9cd) {
			this['isSdkReady'] ? this['isAdShown'] ? (this['verbose'] && console['log']('Yandex\x20API\x20is\x20already\x20showing\x20an\x20ad'), 'function' === typeof _0x30a9cd && _0x30a9cd()) : (this['cacheVolume'](), ysdk['adv']['showFullscreenAdv']({
				'callbacks': {
					'onClose': function() {
						this['verbose'] && console['log']('Yandex\x20Ad\x20is\x20closed');
						'function' === typeof _0x30a9cd && _0x30a9cd();
					} ['bind'](this),
					'onOpen': function() {
						this['onAdShow']();
						this['verbose'] && console['log']('Yandex\x20Ad\x20is\x20opened');
					} ['bind'](this),
					'onError': function(_0x21fce9) {
						this['verbose'] && console['log']('Yandex\x20Ad\x20has\x20error', _0x21fce9);
					} ['bind'](this),
					'onOffline': function() {
						this['verbose'] && console['log']('Yandex\x20Ad\x20is\x20offline');
					} ['bind'](this)
				}
			})) : (this['verbose'] && console['log']('Yandex\x20SDK\x20is\x20not\x20ready'), 'function' === typeof _0x30a9cd && _0x30a9cd());
		},
		'hideAd': function() {
			this['onAdHide']();
			var _0x4effde = document['getElementById']('game');
			_0x4effde['style']['visibility'] = 'visible';
			_0x4effde['style']['display'] = 'block';
		},
		'onAdShow': function() {
			this['isSdkReady'] ? this['isAdShown'] ? this['verbose'] && console['log']('Yandex\x20API\x20is\x20already\x20showing\x20an\x20ad') : (this['verbose'] && console['log']('Yandex\x20API\x20showing\x20ad'), this['isAdCoolingDown'] ? (this['verbose'] && console['log']('Yandex\x20API\x20is\x20cooling\x20down.'), 'function' === typeof callback && callback()) : (this['startAdCooldown'](), document['getElementById']('game'), ig && (ig['game'] && ('function' === typeof ig['game']['pauseGame'] && ig['game']['pauseGame'](!0x0), 'function' === typeof ig['game']['pause'] && ig['game']['pause'](!0x0)), ig['soundHandler'] && this['muteAudio']()), this['isAdShown'] = !0x0)) : this['verbose'] && console['log']('Yandex\x20SDK\x20is\x20not\x20ready');
		},
		'onAdHide': function() {
			this['isAdShown'] ? (this['verbose'] && console['log']('Yandex\x20API\x20hiding\x20ad'), this['isAdShown'] = !0x1, document['getElementById']('game')['style']['visibility'] = 'visible', ig && (ig['game'] && ('function' === typeof ig['game']['resumeGame'] && ig['game']['resumeGame'](!0x0), 'function' === typeof ig['game']['resume'] && ig['game']['resume'](!0x0)), ig['soundHandler'] && this['unmuteAudio']()), window['focus']()) : this['verbose'] && console['log']('Yandex\x20API\x20has\x20already\x20hide\x20the\x20ad');
		},
		'drawBranding': function(_0x454b8b, _0xcfba44, _0x42e9f7, _0x44bb7d) {
			this['branding'] && this['branding']['text'] && (_0x454b8b = _0x454b8b || ig['system']['context'], _0xcfba44 = _0xcfba44 || 0xa, _0x42e9f7 = _0x42e9f7 || ig['system']['height'] - 0x14, _0x44bb7d = ig['merge']({
				'fontSize': 0x14,
				'fontFamily': 'arial',
				'textAlign': 'left',
				'textBaseline': 'alphabetic',
				'fillStyle': '#000000',
				'lineWidth': 0x4,
				'strokeStyle': '#FFFFFF'
			}, _0x44bb7d), _0x454b8b['save'](), _0x454b8b['fillStyle'] = _0x44bb7d['fillStyle'], _0x454b8b['textAlign'] = _0x44bb7d['textAlign'], _0x454b8b['lineJoin'] = 'miter', _0x454b8b['miterLimit'] = 0x2, _0x454b8b['font'] = _0x44bb7d['fontSize'] + 'px\x20' + _0x44bb7d['fontFamily'], 0x0 < _0x44bb7d['lineWidth'] && (_0x454b8b['lineWidth'] = _0x44bb7d['lineWidth'], _0x454b8b['strokeStyle'] = _0x44bb7d['strokeStyle'], _0x454b8b['strokeText'](this['branding']['text'], _0xcfba44, _0x42e9f7)), _0x454b8b['fillText'](this['branding']['text'], _0xcfba44, _0x42e9f7), _0x454b8b['restore']());
		}
	});
	ig['yandex'] = new ig['YandexAPI']();
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.custom-storage')['requires']('impact.game', 'plugins.io.storage-manager')['defines'](function() {
	ig['Game']['inject']({
		'loadAll': function() {
			var _0x13e67d = this['storage']['get'](this['storageName']);
			if (null === _0x13e67d || 'undefined' === typeof _0x13e67d) _0x13e67d = this['initData']();
			else {
				try {
					var _0x22df3a = LZString['decompressFromUTF16'](_0x13e67d),
						_0x22df3a = JSON['parse'](atob(_0x22df3a));
				} catch (_0x18eecf) {
					_0x22df3a = this['initData']();
				}
				_0x13e67d = _0x22df3a;
			}
			for (var _0x2a6467 in _0x13e67d) this['sessionData'][_0x2a6467] = _0x13e67d[_0x2a6467];
			this['saveAll']();
		},
		'saveAll': function() {
			var _0x2bac4d = btoa(JSON['stringify'](this['sessionData'])),
				_0x2bac4d = LZString['compressToUTF16'](_0x2bac4d);
			this['storage']['set'](this['storageName'], _0x2bac4d);
		},
		'load': function(_0x3bf62a) {
			var _0x2b8219 = this['storage']['get'](this['storageName']);
			try {
				var _0x3b4a6c = LZString['decompressFromUTF16'](_0x2b8219),
					_0x3b4a6c = JSON['parse'](atob(_0x3b4a6c));
			} catch (_0x336ea3) {
				_0x3b4a6c = this['initData']();
			}
			this['sessionData'][_0x3bf62a] = _0x3b4a6c[_0x3bf62a];
		},
		'save': function(_0x201a2c, _0x3e8935) {
			var _0x509c45 = this['storage']['get'](this['storageName']);
			try {
				var _0x33f17d = LZString['decompressFromUTF16'](_0x509c45),
					_0x33f17d = JSON['parse'](atob(_0x33f17d));
			} catch (_0x713ea6) {
				_0x33f17d = this['initData']();
			}
			_0x509c45 = _0x33f17d;
			_0x509c45[_0x201a2c] = _0x3e8935;
			_0x509c45 = btoa(JSON['stringify'](_0x509c45));
			_0x509c45 = LZString['compressToUTF16'](_0x509c45);
			this['storage']['set'](this['storageName'], _0x509c45);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.random-generator')['defines'](function() {
	ig['RandomGenerator'] = ig['Class']['extend']({
		'init': function(_0x376e2b) {
			'undefined' === typeof _0x376e2b && (_0x376e2b = []);
			this['c'] = 0x1;
			this['s2'] = this['s1'] = this['s0'] = 0x0;
			this['sow'](_0x376e2b);
		},
		'sow': function(_0x5d074a) {
			this['s0'] = this['hash']('\x20');
			this['s1'] = this['hash'](this['s0']);
			this['s2'] = this['hash'](this['s1']);
			this['c'] = 0x1;
			if (_0x5d074a)
				for (var _0x25d235 = 0x0; _0x25d235 < _0x5d074a['length'] && null != _0x5d074a[_0x25d235]; _0x25d235++) {
					var _0x98ac18 = _0x5d074a[_0x25d235];
					this['s0'] -= this['hash'](_0x98ac18);
					this['s0'] += ~~(0x0 > this['s0']);
					this['s1'] -= this['hash'](_0x98ac18);
					this['s1'] += ~~(0x0 > this['s1']);
					this['s2'] -= this['hash'](_0x98ac18);
					this['s2'] += ~~(0x0 > this['s2']);
				}
		},
		'rnd': function() {
			var _0xe19f3d = 0x1fea77 * this['s0'] + 2.3283064365386963e-10 * this['c'];
			this['c'] = _0xe19f3d | 0x0;
			this['s0'] = this['s1'];
			this['s1'] = this['s2'];
			return this['s2'] = _0xe19f3d - this['c'];
		},
		'hash': function(_0x27fab3) {
			var _0x25f9a9, _0x208784, _0x4c79ef;
			_0x4c79ef = 0xefc8249d;
			_0x27fab3 = _0x27fab3['toString']();
			for (_0x208784 = 0x0; _0x208784 < _0x27fab3['length']; _0x208784++) _0x4c79ef += _0x27fab3['charCodeAt'](_0x208784), _0x25f9a9 = 0.02519603282416938 * _0x4c79ef, _0x4c79ef = _0x25f9a9 >>> 0x0, _0x25f9a9 -= _0x4c79ef, _0x25f9a9 *= _0x4c79ef, _0x4c79ef = _0x25f9a9 >>> 0x0, _0x25f9a9 -= _0x4c79ef, _0x4c79ef += 0x100000000 * _0x25f9a9;
			return 2.3283064365386963e-10 * (_0x4c79ef >>> 0x0);
		},
		'frac': function() {
			return this['rnd']['apply'](this) + 1.1102230246251565e-16 * (0x200000 * this['rnd']['apply'](this) | 0x0);
		},
		'realInRange': function(_0x5295f6, _0x26e2fc) {
			return this['frac']() * (_0x26e2fc - _0x5295f6) + _0x5295f6;
		},
		'integerInRange': function(_0x53b73f, _0x2d9e27) {
			return Math['floor'](this['realInRange'](0x0, _0x2d9e27 - _0x53b73f + 0x1) + _0x53b73f);
		},
		'pick': function(_0x18a9a6) {
			var _0x1e3e81 = this['integerInRange'](0x0, _0x18a9a6['length'] - 0x1);
			return _0x18a9a6[_0x1e3e81];
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.math-collection')['defines'](function() {
	ig['MathCollection'] = ig['Class']['extend']({
		'DEG_TO_RAD': Math['PI'] / 0xb4,
		'RAD_TO_DEG': 0xb4 / Math['PI'],
		'degToRad': function(_0x36e438) {
			return _0x36e438 * this['DEG_TO_RAD'];
		},
		'radToDeg': function(_0x405cc3) {
			return _0x405cc3 * this['RAD_TO_DEG'];
		},
		'angleBetween': function(_0x5f1d6e, _0x539c67, _0x190345, _0x516a6a) {
			return Math['atan2'](_0x516a6a - _0x539c67, _0x190345 - _0x5f1d6e);
		},
		'angleBetweenPoints': function(_0x19ee14, _0x47dffa) {
			return this['angleBetween'](_0x19ee14['x'], _0x19ee14['y'], _0x47dffa['x'], _0x47dffa['y']);
		},
		'distance': function(_0x8e7fc1, _0x152d44, _0x43ab6f, _0x234ebf) {
			_0x8e7fc1 -= _0x43ab6f;
			_0x152d44 -= _0x234ebf;
			return Math['sqrt'](_0x8e7fc1 * _0x8e7fc1 + _0x152d44 * _0x152d44);
		},
		'rectContains': function(_0x187188, _0x2c6064, _0x5bebc6) {
			return 0x0 >= _0x187188['width'] || 0x0 >= _0x187188['height'] ? !0x1 : _0x2c6064 >= _0x187188['x'] && _0x2c6064 < _0x187188['right'] && _0x5bebc6 >= _0x187188['y'] && _0x5bebc6 < _0x187188['bottom'];
		},
		'rectIntersects': function(_0x289bc3, _0x33608) {
			return 0x0 >= _0x289bc3['width'] || 0x0 >= _0x289bc3['height'] || 0x0 >= _0x33608['width'] || 0x0 >= _0x33608['height'] ? !0x1 : !(_0x289bc3['right'] < _0x33608['x'] || _0x289bc3['bottom'] < _0x33608['y'] || _0x289bc3['x'] > _0x33608['right'] || _0x289bc3['y'] > _0x33608['bottom']);
		},
		'polygonContains': function(_0x13b064, _0x3a6e00, _0x6cc5dd) {
			for (var _0x3ce285 = !0x1, _0x4f4b59 = -0x1, _0x24c113 = _0x13b064['points']['length'] - 0x1; ++_0x4f4b59 < _0x13b064['points']['length']; _0x24c113 = _0x4f4b59) {
				var _0x148ed8 = _0x13b064['points'][_0x4f4b59]['x'],
					_0x47ce69 = _0x13b064['points'][_0x4f4b59]['y'],
					_0x2153e6 = _0x13b064['points'][_0x24c113]['x'],
					_0x24c113 = _0x13b064['points'][_0x24c113]['y'];
				if ((_0x47ce69 <= _0x6cc5dd && _0x6cc5dd < _0x24c113 || _0x24c113 <= _0x6cc5dd && _0x6cc5dd < _0x47ce69) && _0x3a6e00 < (_0x2153e6 - _0x148ed8) * (_0x6cc5dd - _0x47ce69) / (_0x24c113 - _0x47ce69) + _0x148ed8) _0x3ce285 = !_0x3ce285;
			}
			return _0x3ce285;
		},
		'circleContains': function(_0x445f6e, _0x5cad91, _0x4645fc) {
			return 0x0 < _0x445f6e['radius'] && _0x5cad91 >= _0x445f6e['left'] && _0x5cad91 <= _0x445f6e['right'] && _0x4645fc >= _0x445f6e['top'] && _0x4645fc <= _0x445f6e['bottom'] ? (_0x445f6e['x'] - _0x5cad91) * (_0x445f6e['x'] - _0x5cad91) + (_0x445f6e['y'] - _0x4645fc) * (_0x445f6e['y'] - _0x4645fc) <= _0x445f6e['radius'] * _0x445f6e['radius'] : !0x1;
		},
		'catmullRom': function(_0x311128, _0x4b9a27, _0x3db610, _0x321ca6, _0x2f64da) {
			_0x311128 = 0.5 * (_0x3db610 - _0x311128);
			_0x321ca6 = 0.5 * (_0x321ca6 - _0x4b9a27);
			var _0x1e2898 = _0x2f64da * _0x2f64da;
			return (0x2 * _0x4b9a27 - 0x2 * _0x3db610 + _0x311128 + _0x321ca6) * _0x2f64da * _0x1e2898 + (-0x3 * _0x4b9a27 + 0x3 * _0x3db610 - 0x2 * _0x311128 - _0x321ca6) * _0x1e2898 + _0x311128 * _0x2f64da + _0x4b9a27;
		},
		'catmullRomInterpolation': function(_0x4478a8, _0x43ec76) {
			var _0x3ec5f6 = _0x4478a8['length'] - 0x1,
				_0x685873 = _0x3ec5f6 * _0x43ec76,
				_0x1e7540 = Math['floor'](_0x685873);
			return _0x4478a8[0x0] === _0x4478a8[_0x3ec5f6] ? (0x0 > _0x43ec76 && (_0x1e7540 = Math['floor'](_0x685873 = _0x3ec5f6 * (0x1 + _0x43ec76))), this['catmullRom'](_0x4478a8[(_0x1e7540 - 0x1 + _0x3ec5f6) % _0x3ec5f6], _0x4478a8[_0x1e7540], _0x4478a8[(_0x1e7540 + 0x1) % _0x3ec5f6], _0x4478a8[(_0x1e7540 + 0x2) % _0x3ec5f6], _0x685873 - _0x1e7540)) : 0x0 > _0x43ec76 ? _0x4478a8[0x0] - (this['catmullRom'](_0x4478a8[0x0], _0x4478a8[0x0], _0x4478a8[0x1], _0x4478a8[0x1], -_0x685873) - _0x4478a8[0x0]) : 0x1 < _0x43ec76 ? _0x4478a8[_0x3ec5f6] - (this['catmullRom'](_0x4478a8[_0x3ec5f6], _0x4478a8[_0x3ec5f6], _0x4478a8[_0x3ec5f6 - 0x1], _0x4478a8[_0x3ec5f6 - 0x1], _0x685873 - _0x3ec5f6) - _0x4478a8[_0x3ec5f6]) : this['catmullRom'](_0x4478a8[_0x1e7540 ? _0x1e7540 - 0x1 : 0x0], _0x4478a8[_0x1e7540], _0x4478a8[_0x3ec5f6 < _0x1e7540 + 0x1 ? _0x3ec5f6 : _0x1e7540 + 0x1], _0x4478a8[_0x3ec5f6 < _0x1e7540 + 0x2 ? _0x3ec5f6 : _0x1e7540 + 0x2], _0x685873 - _0x1e7540);
		},
		'factorial': function(_0x24267f) {
			if (0x0 === _0x24267f) return 0x1;
			for (var _0x2d7e62 = _0x24267f; --_0x24267f;) _0x2d7e62 *= _0x24267f;
			return _0x2d7e62;
		},
		'bernstein': function(_0x42b675, _0x38af13) {
			return this['factorial'](_0x42b675) / this['factorial'](_0x38af13) / this['factorial'](_0x42b675 - _0x38af13);
		},
		'bezierInterpolation': function(_0x1f09d9, _0x5d025b) {
			for (var _0x1751b7 = 0x0, _0x21a475 = _0x1f09d9['length'] - 0x1, _0x225545 = 0x0; _0x225545 <= _0x21a475; _0x225545++) _0x1751b7 += Math['pow'](0x1 - _0x5d025b, _0x21a475 - _0x225545) * Math['pow'](_0x5d025b, _0x225545) * _0x1f09d9[_0x225545] * this['bernstein'](_0x21a475, _0x225545);
			return _0x1751b7;
		},
		'linear': function(_0x3b1227, _0x546077, _0x1a28ed) {
			return (_0x546077 - _0x3b1227) * _0x1a28ed + _0x3b1227;
		},
		'linearInterpolation': function(_0x4a43f6, _0x1f5222) {
			var _0x5d0899 = _0x4a43f6['length'] - 0x1,
				_0x56a3f9 = _0x5d0899 * _0x1f5222,
				_0x25c30e = Math['floor'](_0x56a3f9);
			return 0x0 > _0x1f5222 ? this['linear'](_0x4a43f6[0x0], _0x4a43f6[0x1], _0x56a3f9) : 0x1 < _0x1f5222 ? this['linear'](_0x4a43f6[_0x5d0899], _0x4a43f6[_0x5d0899 - 0x1], _0x5d0899 - _0x56a3f9) : this['linear'](_0x4a43f6[_0x25c30e], _0x4a43f6[_0x25c30e + 0x1 > _0x5d0899 ? _0x5d0899 : _0x25c30e + 0x1], _0x56a3f9 - _0x25c30e);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.custom-debug')['defines'](function() {
	ig['CustomDebug'] = ig['Class']['extend']({
		'init': function() {},
		'rect': function(_0x7bb6a8, _0xc72f46, _0x5bf238) {
			var _0x3c19f2 = ig['system']['context'];
			_0x3c19f2['save']();
			_0x3c19f2['globalAlpha'] = _0x5bf238;
			_0x3c19f2['fillStyle'] = _0xc72f46;
			_0x3c19f2['fillRect'](_0x7bb6a8['x'], _0x7bb6a8['y'], _0x7bb6a8['width'], _0x7bb6a8['height']);
			_0x3c19f2['restore']();
		},
		'circle': function(_0x26fb2c, _0x477285, _0x45b161) {
			var _0x3906e0 = ig['system']['context'];
			_0x3906e0['save']();
			_0x3906e0['globalAlpha'] = _0x45b161;
			_0x3906e0['beginPath']();
			_0x3906e0['arc'](_0x26fb2c['x'], _0x26fb2c['y'], _0x26fb2c['radius'], 0x0, 0x2 * Math['PI'], !0x1);
			_0x3906e0['fillStyle'] = _0x477285;
			_0x3906e0['fill']();
			_0x3906e0['restore']();
		},
		'polygon': function(_0x2669a3, _0x41305d, _0x5b79fb) {
			if (_0x2669a3['points'] && 0x0 != _0x2669a3['points']['length']) {
				var _0x238101 = ig['system']['context'];
				_0x238101['save']();
				_0x238101['globalAlpha'] = _0x5b79fb;
				_0x238101['fillStyle'] = _0x41305d;
				_0x238101['beginPath']();
				_0x41305d = _0x2669a3['points'][0x0];
				_0x238101['moveTo'](_0x41305d['x'], _0x41305d['y']);
				_0x2669a3 = _0x2669a3['points'];
				for (_0x5b79fb = 0x1; _0x5b79fb < _0x2669a3['length']; _0x5b79fb++) _0x41305d = _0x2669a3[_0x5b79fb], _0x238101['lineTo'](_0x41305d['x'], _0x41305d['y']);
				_0x238101['closePath']();
				_0x238101['fill']();
				_0x238101['restore']();
			}
		},
		'satPolygon': function(_0x55108e, _0x405309, _0x1681ec) {
			var _0x293ab0 = ig['system']['context'];
			_0x293ab0['save']();
			_0x293ab0['globalAlpha'] = _0x1681ec;
			_0x293ab0['fillStyle'] = _0x405309;
			_0x293ab0['beginPath']();
			_0x405309 = _0x55108e['pointList'][0x0];
			_0x293ab0['moveTo'](_0x405309['x'], _0x405309['y']);
			_0x55108e = _0x55108e['pointList'];
			for (_0x1681ec = 0x1; _0x1681ec < _0x55108e['length']; _0x1681ec++) _0x405309 = _0x55108e[_0x1681ec], _0x293ab0['lineTo'](_0x405309['x'], _0x405309['y']);
			_0x293ab0['closePath']();
			_0x293ab0['fill']();
			_0x293ab0['restore']();
		},
		'satCircle': function(_0x43ae00, _0x5bac06, _0x17e431) {
			var _0x42fa2f = ig['system']['context'];
			_0x42fa2f['save']();
			_0x42fa2f['globalAlpha'] = _0x17e431;
			_0x42fa2f['beginPath']();
			_0x42fa2f['arc'](_0x43ae00['center']['x'], _0x43ae00['center']['y'], _0x43ae00['radius'], 0x0, 0x2 * Math['PI'], !0x1);
			_0x42fa2f['fillStyle'] = _0x5bac06;
			_0x42fa2f['fill']();
			_0x42fa2f['restore']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.geometry')['defines'](function() {
	ig['Geometry'] = ig['Class']['extend']({
		'rectangle': function(_0x2f7518, _0x3df75f, _0x43311f, _0x4037d0) {
			var _0x10004f = {
				'x': 0x0,
				'y': 0x0,
				'width': 0x0,
				'height': 0x0,
				'right': 0x0,
				'bottom': 0x0,
				'halfWidth': 0x0,
				'halfHeight': 0x0
			};
			_0x10004f['x'] = _0x2f7518;
			_0x10004f['y'] = _0x3df75f;
			_0x10004f['width'] = _0x43311f;
			_0x10004f['height'] = _0x4037d0;
			_0x10004f['right'] = _0x2f7518 + _0x43311f;
			_0x10004f['bottom'] = _0x3df75f + _0x4037d0;
			_0x10004f['halfWidth'] = 0.5 * _0x43311f;
			_0x10004f['halfHeight'] = 0.5 * _0x4037d0;
			_0x10004f['centerX'] = _0x10004f['x'] + _0x10004f['halfWidth'];
			_0x10004f['centerY'] = _0x10004f['y'] + _0x10004f['halfHeight'];
			return _0x10004f;
		},
		'circle': function(_0x359823, _0x21151b, _0x44aaaa) {
			var _0x5e4e3a = {
				'x': 0x0,
				'y': 0x0,
				'diameter': 0x0,
				'radius': 0x0,
				'right': 0x0,
				'left': 0x0,
				'top': 0x0,
				'bottom': 0x0
			};
			_0x5e4e3a['x'] = _0x359823;
			_0x5e4e3a['y'] = _0x21151b;
			_0x5e4e3a['diameter'] = _0x44aaaa;
			_0x5e4e3a['radius'] = 0.5 * _0x44aaaa;
			_0x5e4e3a['left'] = _0x359823 - _0x5e4e3a['radius'];
			_0x5e4e3a['right'] = _0x359823 + _0x5e4e3a['radius'];
			_0x5e4e3a['top'] = _0x21151b - _0x5e4e3a['radius'];
			_0x5e4e3a['bottom'] = _0x21151b + _0x5e4e3a['radius'];
			return _0x5e4e3a;
		},
		'polygon': function(_0x3a81f5) {
			var _0xc82d72 = {
				'points': [],
				'closed': !0x0
			};
			_0xc82d72['points'] = _0x3a81f5;
			return _0xc82d72;
		}
	});
	ig['Polygon'] = ig['Class']['extend']({
		'points': [],
		'closed': !0x0,
		'init': function(_0x402773) {
			this['points'] = _0x402773;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.custom-time')['defines'](function() {
	ig['CustomTime'] = ig['Class']['extend']({
		'init': function() {
			this['physicsElapsedMS'] = 0x3e8 * (0x1 / 0x3c);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.world')['defines'](function() {
	ig['World'] = {};
	ig['World']['globalPos'] = function(_0x2097e8) {
		var _0x5ee356 = _0x2097e8['x'],
			_0x2b4407 = _0x2097e8['y'];
		return _0x2097e8['groupParent'] ? ig['World']['parentPos'](_0x2097e8['groupParent'], _0x5ee356, _0x2b4407) : {
			'x': _0x5ee356,
			'y': _0x2b4407
		};
	};
	ig['World']['parentPos'] = function(_0x358b42, _0x31a4d4, _0xf7e2ac) {
		_0x31a4d4 = {
			'x': _0x31a4d4 ? _0x31a4d4 : 0x0,
			'y': _0xf7e2ac ? _0xf7e2ac : 0x0
		};
		for (_0xf7e2ac = !0x1; !_0xf7e2ac;) _0x31a4d4 = ig['World']['countPos'](_0x358b42, _0x31a4d4), _0x358b42['groupParent'] ? _0x358b42 = _0x358b42['groupParent'] : _0xf7e2ac = !0x0;
		return _0x31a4d4;
	};
	ig['World']['countPos'] = function(_0x58742e, _0x22e3ee) {
		_0x22e3ee['x'] = _0x22e3ee['x'] * _0x58742e['scale']['x'] + _0x58742e['x'];
		_0x22e3ee['y'] = _0x22e3ee['y'] * _0x58742e['scale']['y'] + _0x58742e['y'];
		return ig['World']['checkPointRotate'](_0x58742e, _0x58742e['_rotation'], _0x22e3ee);
	};
	ig['World']['checkPointRotate'] = function(_0x5d0fb0, _0x1619bd, _0x4117cc) {
		var _0x56e0fd = _0x5d0fb0['x'];
		_0x5d0fb0 = _0x5d0fb0['y'];
		var _0x2c2e71 = _0x4117cc['x'],
			_0x23dd01 = _0x4117cc['y'];
		_0x4117cc = ig['game']['math']['distance'](_0x56e0fd, _0x5d0fb0, _0x2c2e71, _0x23dd01);
		_0x2c2e71 = ig['game']['math']['angleBetween'](_0x56e0fd, _0x5d0fb0, _0x2c2e71, _0x23dd01);
		_0x23dd01 = {
			'x': 0x0,
			'y': 0x0
		};
		_0x23dd01['x'] = _0x56e0fd + _0x4117cc * Math['cos'](_0x1619bd + _0x2c2e71);
		_0x23dd01['y'] = _0x5d0fb0 + _0x4117cc * Math['sin'](_0x1619bd + _0x2c2e71);
		return _0x23dd01;
	};
	ig['World']['getBounds'] = function(_0xc398a3) {
		for (var _0x29c230 = _0xc398a3[0x0], _0x1cc600 = _0x29c230['x'], _0x50b6c0 = _0x29c230['x'], _0x6cfe9 = _0x29c230['y'], _0x29c230 = _0x29c230['y'], _0x396759 = 0x0; _0x396759 < _0xc398a3['length']; _0x396759++) {
			var _0x487c00 = _0xc398a3[_0x396759];
			_0x487c00['x'] < _0x1cc600 && (_0x1cc600 = _0x487c00['x']);
			_0x487c00['x'] > _0x50b6c0 && (_0x50b6c0 = _0x487c00['x']);
			_0x487c00['y'] < _0x6cfe9 && (_0x6cfe9 = _0x487c00['y']);
			_0x487c00['y'] > _0x29c230 && (_0x29c230 = _0x487c00['y']);
		}
		return ig['game']['geom']['rectangle'](_0x1cc600, _0x6cfe9, _0x50b6c0 - _0x1cc600, _0x29c230 - _0x6cfe9);
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.asset-reader')['requires']('impact.image')['defines'](function() {
	ig['Asset'] = {};
	ig['Asset']['image'] = function(_0x328801, _0x201ae7, _0x1ebc62) {
		imgCache[_0x328801] ? imgCache[_0x328801]['path']['img'] = _0x201ae7 : imgCache[_0x328801] = {
			'path': {
				'img': _0x201ae7,
				'json': ''
			}
		};
		new ig['Image'](_0x201ae7)['load'](_0x1ebc62);
	};
	ig['Asset']['json'] = function(_0x2fb8d9, _0x23d102, _0x5638cb) {
		$['getJSON'](_0x23d102, function(_0x49e8c3) {
			imgCache[_0x2fb8d9] ? imgCache[_0x2fb8d9]['path']['json'] = _0x23d102 : imgCache[_0x2fb8d9] = {
				'path': {
					'img': '',
					'json': _0x23d102
				}
			};
			ig['Asset']['getJsonDataByKey'](_0x2fb8d9) ? console['log']('json\x20data\x20exists') : jsonCache[_0x2fb8d9] = _0x49e8c3;
			_0x5638cb && _0x5638cb(_0x49e8c3, _0x2fb8d9, _0x23d102);
		});
	};
	ig['Asset']['getJsonDataByKey'] = function(_0x252515) {
		var _0x4248e6 = null;
		(_0x252515 = jsonCache[_0x252515]) && (_0x4248e6 = _0x252515);
		return _0x4248e6;
	};
	ig['Asset']['getJsonDataByImageName'] = function(_0x138f14) {
		var _0x415468 = null,
			_0x437ab4;
		for (_0x437ab4 in jsonCache) {
			var _0x15ff7b = jsonCache[_0x437ab4];
			_0x15ff7b['meta']['image'] == _0x138f14 && (_0x415468 = _0x15ff7b);
		}
		return _0x415468;
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.call-asset')['defines'](function() {
	ig['CallAsset'] = {};
	ig['CallAsset']['addImage'] = function(_0x36b9fc, _0x1e19ee, _0x576596, _0x1d5789, _0x4d4bd6) {
		var _0x3dfdc5 = '';
		if (0x1 < _0x576596['split']('.')['length']) _0x3dfdc5 = _0x576596;
		else if (_0x576596 = imgCache[_0x576596]) _0x3dfdc5 = _0x576596['path']['img'];
		else throw 'Image\x20is\x20not\x20found';
		_0x1d5789 = _0x1d5789 ? _0x1d5789 : {};
		_0x4d4bd6 = _0x4d4bd6 ? _0x4d4bd6 : 'ig.AddImage';
		'string' == typeof _0x4d4bd6 && (_0x4d4bd6 = stringToFunction(_0x4d4bd6));
		return new _0x4d4bd6(_0x36b9fc, _0x1e19ee, _0x3dfdc5, _0x1d5789);
	};
	ig['CallAsset']['addFrameImage'] = function(_0x171275, _0x3b7224, _0x1476d9, _0x2d5486, _0xcef374) {
		var _0x16dd98 = _0x1476d9['split']('/');
		if (0x2 > _0x16dd98['length']) throw 'not\x20a\x20frame\x20in\x20image';
		if (_0x171275 = ig['CallAsset']['addImage'](_0x171275, _0x3b7224, _0x16dd98[0x0], _0x2d5486, _0xcef374)) _0x171275['frameName'] = _0x1476d9, _0x171275['setFrame'](), _0x171275['setProperty']();
		return _0x171275;
	};
	ig['CallAsset']['addSprite'] = function(_0x2c0fb0, _0x34d691, _0x1f9b12, _0x2cacfe, _0x58336) {
		var _0x6dbd19 = '';
		if (0x1 < _0x1f9b12['split']('.')['length']) _0x6dbd19 = _0x1f9b12;
		else if (_0x6dbd19 = imgCache[_0x1f9b12]) _0x6dbd19 = _0x6dbd19['path']['img'];
		else throw 'Image\x20is\x20not\x20found';
		_0x2cacfe = _0x2cacfe ? _0x2cacfe : {};
		_0x58336 = _0x58336 ? _0x58336 : EntitySprite;
		_0x2c0fb0 = ig['game']['spawnEntity'](_0x58336, _0x2c0fb0, _0x34d691, _0x2cacfe);
		_0x2c0fb0['setProperties'](_0x6dbd19);
		return _0x2c0fb0;
	};
	ig['CallAsset']['addFrame'] = function(_0x2ec665, _0x11ef99, _0x3aa57f, _0x101c48, _0x195185) {
		var _0x1298b6 = _0x3aa57f['split']('/');
		if (0x2 > _0x1298b6['length']) throw 'not\x20a\x20frame\x20in\x20image';
		if (_0x2ec665 = ig['CallAsset']['addSprite'](_0x2ec665, _0x11ef99, _0x1298b6[0x0], _0x101c48, _0x195185)) _0x2ec665['frameName'] = _0x3aa57f, _0x2ec665['setFrame'](), _0x2ec665['setProperty']();
		return _0x2ec665;
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.custom-image')['requires']('impact.image')['defines'](function() {
	ig['CustomImage'] = ig['Image']['extend']({
		'x': 0x0,
		'y': 0x0,
		'children': [],
		'groupParent': null,
		'visible': !0x0,
		'canvasPos': {
			'x': 0x0,
			'y': 0x0
		},
		'setPosition': function(_0x1bdb34, _0x48c3f8) {
			this['x'] = _0x1bdb34;
			this['y'] = _0x48c3f8;
		},
		'pos': {
			'x': 0x0,
			'y': 0x0,
			'setTo': function(_0x45f1ca, _0x5abf53) {
				this['x'] = _0x45f1ca;
				this['y'] = _0x5abf53;
			}
		},
		'size': {
			'x': 0x0,
			'y': 0x0
		},
		'anchor': {
			'x': 0x0,
			'y': 0x0,
			'setTo': function(_0x2832c9, _0x1f8b25) {
				this['x'] = _0x2832c9;
				this['y'] = 0x0 == _0x1f8b25 ? _0x1f8b25 : _0x1f8b25 ? _0x1f8b25 : this['x'];
			}
		},
		'scale': {
			'x': 0x1,
			'y': 0x1,
			'setTo': function(_0x4c90e1, _0x1c90d0) {
				this['x'] = _0x4c90e1;
				this['y'] = 0x0 == _0x1c90d0 ? _0x1c90d0 : _0x1c90d0 ? _0x1c90d0 : this['x'];
			}
		},
		'_scale': {
			'x': 0x1,
			'y': 0x1,
			'setTo': function(_0x434e5b, _0x21ac61) {
				this['x'] = _0x434e5b * ig['system']['scale'];
				this['y'] = 0x0 == _0x21ac61 ? _0x21ac61 : _0x21ac61 ? _0x21ac61 * ig['system']['scale'] : this['x'];
			}
		},
		'lastScale': {
			'x': 0x0,
			'y': 0x0,
			'setTo': function(_0x4f3bc9, _0xf22ec2) {
				this['x'] = _0x4f3bc9;
				this['y'] = 0x0 == _0xf22ec2 ? 0x0 : _0xf22ec2 ? _0xf22ec2 : this['x'];
			}
		},
		'inputEnabled': !0x1,
		'frameName': '',
		'alpha': 0x1,
		'currentPlay': 'idle',
		'angle': 0x0,
		'_angle': 0x0,
		'rotation': 0x0,
		'_rotation': 0x0,
		'exists': !0x0,
		'init': function(_0x4b9264) {
			this['parent'](_0x4b9264);
		},
		'update': function() {},
		'draw': function(_0x53a90f, _0x108e6d, _0x23ef7b, _0xa96fe8, _0x4e7993, _0x4a258e) {
			this['loaded'] && this['visible'] && (_0x23ef7b = _0x23ef7b ? _0x23ef7b : 0x0, _0xa96fe8 = _0xa96fe8 ? _0xa96fe8 : 0x0, _0x4e7993 = _0x4e7993 ? _0x4e7993 : this['width'], _0x4a258e = _0x4a258e ? _0x4a258e : this['height'], ig['system']['context']['save'](), ig['system']['context']['drawImage'](this['data'], _0x23ef7b, _0xa96fe8, _0x4e7993, _0x4a258e, ig['system']['getDrawPos'](_0x53a90f), ig['system']['getDrawPos'](_0x108e6d), _0x4e7993, _0x4a258e), ig['system']['context']['restore'](), ig['Image']['drawCount']++);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.raw-image')['requires']('plugins.addon.custom-image')['defines'](function() {
	ig['RawImage'] = ig['CustomImage']['extend']({
		'name': 'Raw\x20Image',
		'sourceX': 0x0,
		'sourceY': 0x0,
		'spriteData': null,
		'isReady': !0x1,
		'frameName': '',
		'_frameName': '',
		'imgWidth': 0x0,
		'imgHeight': 0x0,
		'curFrameData': null,
		'frame': {
			'x': 0x0,
			'y': 0x0
		},
		'init': function(_0x3ebe49, _0x4a932e) {
			ig['merge'](this, _0x4a932e);
			var _0x4f3cc8 = _0x3ebe49['split']('/');
			this['folderPath'] = '';
			for (var _0x5d01d6 = 0x0; _0x5d01d6 < _0x4f3cc8['length'] - 0x1; _0x5d01d6++) this['folderPath'] += _0x4f3cc8[_0x5d01d6], _0x5d01d6 < _0x4f3cc8['length'] - 0x2 && (this['folderPath'] += '/');
			this['imgName'] = _0x4f3cc8[_0x4f3cc8['length'] - 0x1];
			this['parent'](_0x3ebe49);
			this['checkProperties']();
		},
		'checkProperties': function() {
			var _0x4d3050 = ig['Image']['cache'][this['path']],
				_0x96db7b = this['imgName']['split']('.');
			(_0x96db7b = jsonCache[_0x96db7b[0x0]]) ? (this['spriteData'] = _0x96db7b, this['width'] = this['spriteData']['meta']['size']['w'], this['height'] = this['spriteData']['meta']['size']['h']) : _0x4d3050 && (this['width'] = this['data']['width'], this['height'] = this['data']['height']);
			this['size']['x'] = this['width'];
			this['size']['y'] = this['height'];
			this['frame']['x'] = this['width'];
			this['frame']['y'] = this['height'];
		},
		'setFrame': function() {
			if (this['spriteData'])
				if (0x0 == this['frameName']['length']) this['curFrameData'] = null, this['sourceY'] = this['sourceX'] = 0x0, this['width'] = this['data']['width'], this['height'] = this['data']['height'], this['size']['x'] = this['width'], this['size']['y'] = this['height'], this['frame']['x'] = this['width'], this['frame']['y'] = this['height'], this['_frameName'] = this['frameName'];
				else {
					for (var _0x14aaf7 = null, _0x1660bc = 0x0; _0x1660bc < this['spriteData']['frames']['length']; _0x1660bc++) {
						var _0x52d0de = this['spriteData']['frames'][_0x1660bc];
						if (_0x52d0de['filename'] == this['frameName']) {
							_0x14aaf7 = _0x52d0de;
							break;
						}
					}
					_0x14aaf7 ? (this['sourceX'] = _0x14aaf7['frame']['x'], this['sourceY'] = _0x14aaf7['frame']['y'], this['width'] = _0x14aaf7['frame']['w'], this['height'] = _0x14aaf7['frame']['h'], this['size']['x'] = _0x14aaf7['frame']['w'], this['size']['y'] = _0x14aaf7['frame']['h'], this['frame']['x'] = this['size']['x'], this['frame']['y'] = this['size']['y'], this['curFrameData'] = _0x52d0de, this['_frameName'] = this['frameName']) : (console['log']('wrong\x20frame\x20name', this['frameName']), this['frameName'] = this['_frameName']);
				}
			else console['log']('json\x20data\x20doesnt\x20exists'), this['frameName'] = this['_frameName'];
		},
		'update': function() {
			this['parent']();
			this['_frameName'] != this['frameName'] && this['setFrame']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.sprite-animation')['requires']('plugins.addon.raw-image')['defines'](function() {
	ig['SpriteAnimationSheet'] = ig['RawImage']['extend']({
		'init': function(_0x571940, _0x3950fb, _0x21a57e, _0x42c66e) {
			this['parent'](_0x21a57e, _0x42c66e);
			this['x'] = _0x571940;
			this['y'] = _0x3950fb;
		},
		'draw': function() {
			0x1 > this['width'] || 0x1 > this['height'] ? this['checkProperties']() : 0x0 >= this['size']['x'] || 0x0 >= this['size']['y'] || this['parent'](this['x'], this['y'], this['sourceX'], this['sourceY'], this['size']['x'], this['size']['y']);
		}
	});
	ig['SpriteAnimation'] = ig['Class']['extend']({
		'timer': null,
		'sequence': [],
		'frame': 0x0,
		'tile': 0x0,
		'loopCount': 0x0,
		'init': function(_0x16618c, _0x549589, _0x1d1205, _0xacf68a, _0x51f930) {
			this['spriteParent'] = _0x51f930;
			this['sheet'] = _0x16618c;
			this['pivot'] = {
				'x': _0x16618c['width'] / 0x2,
				'y': _0x16618c['height'] / 0x2
			};
			this['timer'] = new ig['Timer']();
			this['frameTime'] = _0x549589;
			this['sequence'] = _0x1d1205;
			this['stop'] = !!_0xacf68a;
			this['tile'] = this['sequence'][0x0];
			this['setFrame']();
			this['onComplete'] = new ig['AddSignal'](_0x51f930);
			this['onLoop'] = new ig['AddSignal'](_0x51f930);
			this['onEnterFrame'] = new ig['AddSignal'](_0x51f930);
			this['onStart'] = new ig['AddSignal'](_0x51f930);
			this['isStarting'] = this['isLooping'] = this['isComplete'] = !0x1;
			this['prevFrame'] = this['frame'];
			this['isPaused'] = !0x1;
		},
		'setFrame': function() {
			this['sheet']['frameName'] = this['tile'];
			this['sheet']['setFrame']();
			this['sheet']['frameName'] == this['tile'] && (this['spriteParent']['frameName'] = this['tile'], this['spriteParent']['_frameName'] = this['spriteParent']['frameName'], this['spriteParent']['width'] = this['sheet']['width'], this['spriteParent']['height'] = this['sheet']['height'], this['spriteParent']['setScale'](this['spriteParent']['scale']['x'], this['spriteParent']['scale']['y']));
		},
		'rewind': function() {
			this['timer']['set']();
			this['frame'] = this['loopCount'] = 0x0;
			this['tile'] = this['sequence'][0x0];
			return this;
		},
		'gotoFrame': function(_0x151627) {
			this['timer']['set'](this['frameTime'] * -_0x151627 - 0.0001);
			this['update']();
		},
		'gotoRandomFrame': function() {
			this['gotoFrame'](Math['floor'](Math['random']() * this['sequence']['length']));
		},
		'pause': function() {
			this['isPaused'] = !0x0;
		},
		'resume': function() {
			this['timer'] = new ig['Timer']();
			this['isPaused'] = !0x1;
		},
		'update': function() {
			if (!this['isPaused']) {
				var _0x55c371 = Math['floor'](this['timer']['delta']() / this['frameTime']);
				this['loopCount'] = Math['floor'](_0x55c371 / this['sequence']['length']);
				this['frame'] = this['stop'] && 0x0 < this['loopCount'] ? this['sequence']['length'] - 0x1 : _0x55c371 % this['sequence']['length'];
				this['tile'] = this['sequence'][this['frame']];
				0x0 == this['frame'] && 0x0 == this['loopCount'] ? this['isStarting'] || (this['isStarting'] = !0x0, this['onStart']['dispatch']()) : this['isStarting'] = !0x1;
				0x0 == this['frame'] && 0x0 < this['loopCount'] ? this['isLooping'] || (this['isLooping'] = !0x0, this['onLoop']['dispatch']()) : this['isLooping'] && (this['isLooping'] = !0x1);
				this['prevFrame'] != this['frame'] && (this['prevFrame'] = this['frame'], this['setFrame'](), this['onEnterFrame']['dispatch']());
				this['stop'] && 0x0 < this['loopCount'] ? this['isComplete'] || (this['isComplete'] = !0x0, this['onComplete']['dispatch']()) : this['isComplete'] = !0x1;
			}
		}
	});
	ig['GenerateFrameNames'] = function(_0x4ee823, _0x201bdd, _0x56cf8e, _0x486709, _0x1aaea9) {
		void 0x0 === _0x486709 && (_0x486709 = '');
		var _0x4687f6 = [],
			_0x1a9979 = '';
		if (_0x201bdd < _0x56cf8e)
			for (; _0x201bdd <= _0x56cf8e; _0x201bdd++) {
				_0x1a9979 = '';
				if ('number' === typeof _0x1aaea9) {
					var _0x635ef9 = _0x201bdd['toString']();
					if (_0x635ef9['length'] < _0x1aaea9)
						for (var _0x517cfe = _0x1aaea9 - _0x635ef9['length'], _0x43e119 = 0x0; _0x43e119 < _0x517cfe; _0x43e119++) _0x1a9979 += '0';
					_0x1a9979 += _0x635ef9;
				} else _0x1a9979 = _0x201bdd['toString']();
				_0x1a9979 = _0x4ee823 + _0x1a9979 + _0x486709;
				_0x4687f6['push'](_0x1a9979);
			} else
				for (; _0x201bdd >= _0x56cf8e; _0x201bdd--) {
					if ('number' === typeof _0x1aaea9) {
						_0x635ef9 = _0x201bdd['toString']();
						if (_0x635ef9['length'] < _0x1aaea9) {
							_0x517cfe = _0x1aaea9 - _0x635ef9['length'];
							for (_0x43e119 = 0x0; _0x43e119 < _0x517cfe; _0x43e119++) _0x1a9979 += '0';
						}
						_0x1a9979 += _0x635ef9;
					} else _0x1a9979 = _0x201bdd['toString']();
					_0x1a9979 = _0x4ee823 + _0x1a9979 + _0x486709;
					_0x4687f6['push'](_0x1a9979);
				}
		return _0x4687f6;
	};
});
ig['baked'] = !0x0;
ig['module']('game.entities.addon.custom-entity')['requires']('impact.entity')['defines'](function() {
	EntityPos = ig['Class']['extend']({
		'x': 0x0,
		'y': 0x0,
		'init': function(_0x4dc232) {
			this['parentObj'] = _0x4dc232;
			this['x'] = _0x4dc232['x'];
			this['y'] = _0x4dc232['y'];
		},
		'setTo': function(_0x2bbffd, _0x5106f0) {
			this['x'] = _0x2bbffd ? _0x2bbffd : this['x'];
			this['y'] = _0x5106f0 ? _0x5106f0 : this['y'];
			this['parentObj']['x'] = this['x'];
			this['parentObj']['y'] = this['y'];
		}
	});
	EntityCustomEntity = ig['Entity']['extend']({
		'name': 'Entity',
		'exists': !0x0,
		'visible': !0x0,
		'_visible': !0x0,
		'zIndex': -0x1,
		'x': 0x0,
		'y': 0x0,
		'canvasPos': {
			'x': 0x0,
			'y': 0x0
		},
		'setPosition': function(_0xad6bc1, _0x590fb9) {
			this['x'] = _0xad6bc1 ? _0xad6bc1 : this['x'];
			this['y'] = _0x590fb9 ? _0x590fb9 : this['x'];
		},
		'children': [],
		'groupParent': null,
		'anchor': {
			'x': 0x0,
			'y': 0x0,
			'setTo': function(_0x186f00, _0x442274) {
				this['x'] = _0x186f00;
				this['y'] = 0x0 == _0x442274 ? 0x0 : _0x442274 ? _0x442274 : this['x'];
			}
		},
		'scale': {
			'x': 0x1,
			'y': 0x1,
			'setTo': function(_0x10ee58, _0x3507ea) {
				this['x'] = _0x10ee58;
				this['y'] = 0x0 == _0x3507ea ? 0x0 : _0x3507ea ? _0x3507ea : this['x'];
			}
		},
		'_scale': {
			'x': 0x1,
			'y': 0x1,
			'setTo': function(_0x2bf7b4, _0x4a2830) {
				this['x'] = Math['abs'](_0x2bf7b4) * ig['system']['scale'];
				this['y'] = 0x0 == _0x4a2830 ? 0x0 : _0x4a2830 ? Math['abs'](_0x4a2830) * ig['system']['scale'] : this['x'];
			}
		},
		'inputEnabled': !0x1,
		'frameName': '',
		'alpha': 0x1,
		'currentPlay': 'idle',
		'width': 0x0,
		'height': 0x0,
		'angle': 0x0,
		'_angle': 0x0,
		'rotation': 0x0,
		'_rotation': 0x0,
		'isClicked': !0x1,
		'lastScale': {
			'x': 0x0,
			'y': 0x0,
			'setTo': function(_0x22b619, _0x3d0113) {
				this['x'] = _0x22b619;
				this['y'] = 0x0 == _0x3d0113 ? 0x0 : _0x3d0113 ? _0x3d0113 : this['x'];
			}
		},
		'gravityFactor': 0x0,
		'forseenVisible': !0x1,
		'init': function(_0x1c8d61, _0x24f0ee, _0x43f1b1) {
			this['parent'](_0x1c8d61, _0x24f0ee, _0x43f1b1);
			this['position'] = new EntityPos(this);
		},
		'setProperty': function() {},
		'setRotation': function(_0x4f9036) {
			this['_rotation'] = _0x4f9036;
			this['angle'] = this['rotation']['toDeg']();
		},
		'setAngle': function(_0x432922) {
			this['_angle'] = _0x432922;
			this['rotation'] = this['angle']['toRad']();
		},
		'getBounds': function(_0x1652c9, _0xb315f7, _0x486b5e, _0x2f27a0) {
			for (var _0x3f84db = 0x0; _0x3f84db < this['children']['length']; _0x3f84db++) {
				var _0x57c982 = this['children'][_0x3f84db];
				_0x57c982 && _0x57c982['exists'] && _0x57c982['getBounds'] && (_0x57c982 = _0x57c982['getBounds'](), null == _0x1652c9 ? _0x1652c9 = _0x57c982['x'] : _0x57c982['x'] < _0x1652c9 && (_0x1652c9 = _0x57c982['x']), null == _0xb315f7 ? _0xb315f7 = _0x57c982['right'] : _0x57c982['right'] > _0xb315f7 && (_0xb315f7 = _0x57c982['right']), null == _0x486b5e ? _0x486b5e = _0x57c982['y'] : _0x57c982['y'] < _0x486b5e && (_0x486b5e = _0x57c982['y']), null == _0x2f27a0 ? _0x2f27a0 = _0x57c982['bottom'] : _0x57c982['bottom'] > _0x2f27a0 && (_0x2f27a0 = _0x57c982['bottom']));
			}
			return ig['game']['geom']['rectangle'](_0x1652c9, _0x486b5e, _0xb315f7 - _0x1652c9, _0x2f27a0 - _0x486b5e);
		},
		'toLocal': function(_0x285358, _0x2a78ba) {
			return new Vector2(_0x285358 - this['pos']['x'], _0x2a78ba - this['pos']['y']);
		},
		'toGlobal': function(_0xfa214c, _0x1f2a37) {
			return ig['World']['parentPos'](this, _0xfa214c, _0x1f2a37);
		},
		'updateChildren': function() {
			for (var _0x3a1d72 = 0x0; _0x3a1d72 < this['children']['length']; _0x3a1d72++) {
				var _0x49b2db = this['children'][_0x3a1d72];
				_0x49b2db && _0x49b2db['exists'] && _0x49b2db['update'] && _0x49b2db['update']();
			}
			this['visible'] != this['_visible'] && (this['_visible'] = this['visible']);
		},
		'drawChildren': function() {
			for (var _0x448116 = 0x0; _0x448116 < this['children']['length']; _0x448116++) {
				var _0x5725eb = this['children'][_0x448116];
				_0x5725eb && _0x5725eb['exists'] && _0x5725eb['draw'] && _0x5725eb['draw']();
			}
		},
		'sorting': function() {
			for (var _0x397799 = [], _0x4749a0 = 0x0; _0x4749a0 < this['children']['length']; _0x4749a0++) {
				var _0x12bf34 = this['children'][_0x4749a0];
				_0x12bf34 && _0x12bf34['exists'] && _0x397799['push'](_0x12bf34);
			}
			this['children'] = [];
			for (_0x4749a0 = 0x0; _0x4749a0 < _0x397799['length']; _0x4749a0++) this['children']['push'](_0x397799[_0x4749a0]);
		},
		'kill': function() {
			this['exists'] = !0x1;
			for (var _0x25384c = 0x0; _0x25384c < this['children']['length']; _0x25384c++) this['children'][_0x25384c]['kill']();
			this['clearContext']();
			this['parent']();
		},
		'clearContext': function() {
			var _0x31aeaf = ig['system']['context'];
			_0x31aeaf['save']();
			_0x31aeaf['clearRect'](this['pos']['x'], this['pos']['y'], this['width'], this['height']);
			_0x31aeaf['restore']();
		},
		'update': function() {
			0x0 > this['zIndex'] || (this['sorting'](), this['parent']());
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.add-signal')['defines'](function() {
	ig['AddSignal'] = ig['Class']['extend']({
		'init': function(_0x59e4c7) {
			this['events'] = [];
			this['bindObject'] = _0x59e4c7;
		},
		'add': function(_0x7a3b88, _0x10ef83) {
			if ('function' !== typeof _0x7a3b88) throw 'Argument\x20not\x20a\x20function';
			this['events']['push'](_0x7a3b88['bind'](_0x10ef83));
		},
		'dispatch': function() {
			for (var _0x31e2f4 = 0x0; _0x31e2f4 < this['events']['length']; _0x31e2f4++)(0x0, this['events'][_0x31e2f4])(this['bindObject']);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.custom-animation')['requires']('impact.animation', 'plugins.addon.raw-image', 'plugins.addon.add-signal')['defines'](function() {
	ig['CustomAnimSheet'] = ig['AnimationSheet']['extend']({
		'init': function(_0x55f1e0, _0x422c29) {
			this['image'] = new ig['RawImage'](_0x55f1e0, _0x422c29);
			this['width'] = this['image']['size']['x'];
			this['height'] = this['image']['size']['y'];
		}
	});
	ig['CustomAnimation'] = ig['Animation']['extend']({
		'init': function(_0x1114f5, _0x126e1b, _0x2d4560, _0x44ff28, _0x1cbbc7) {
			this['parent'](_0x1114f5, _0x126e1b, _0x2d4560, _0x44ff28);
			this['onComplete'] = new ig['AddSignal'](_0x1cbbc7);
			this['onLoop'] = new ig['AddSignal'](_0x1cbbc7);
			this['onEnterFrame'] = new ig['AddSignal'](_0x1cbbc7);
			this['onStart'] = new ig['AddSignal'](_0x1cbbc7);
			this['isStarting'] = this['isLooping'] = this['isComplete'] = !0x1;
			this['prevFrame'] = this['frame'];
			this['isPaused'] = !0x1;
		},
		'update': function() {
			this['isPaused'] || (this['parent'](), this['sheet']['image']['update'](), 0x0 == this['frame'] && 0x0 == this['loopCount'] ? this['isStarting'] || (this['isStarting'] = !0x0, this['onStart']['dispatch']()) : this['isStarting'] = !0x1, 0x0 == this['frame'] && 0x0 < this['loopCount'] ? this['isLooping'] || (this['isLooping'] = !0x0, this['onLoop']['dispatch']()) : this['isLooping'] && (this['isLooping'] = !0x1), this['prevFrame'] != this['frame'] && (this['prevFrame'] = this['frame'], this['onEnterFrame']['dispatch']()), this['stop'] && 0x0 < this['loopCount'] ? this['isComplete'] || (this['isComplete'] = !0x0, this['onComplete']['dispatch']()) : this['isComplete'] = !0x1);
		},
		'draw': function(_0x5dc4c8, _0x4b025d) {
			var _0x53f8f5 = Math['max'](this['sheet']['width'], this['sheet']['height']);
			_0x5dc4c8 > ig['system']['width'] || _0x4b025d > ig['system']['height'] || 0x0 > _0x5dc4c8 + _0x53f8f5 || 0x0 > _0x4b025d + _0x53f8f5 || 0x1 > this['sheet']['width'] || 0x1 > this['sheet']['height'] || this['sheet']['image']['drawTile'](_0x5dc4c8, _0x4b025d, this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.addon.sprite')['requires']('game.entities.addon.custom-entity', 'plugins.addon.raw-image', 'plugins.addon.custom-animation', 'plugins.addon.sprite-animation', 'plugins.addon.add-signal')['defines'](function() {
	EntitySprite = EntityCustomEntity['extend']({
		'name': 'Sprite',
		'type': ig['Entity']['TYPE']['A'],
		'setAnimSheet': {},
		'setAnims': {},
		'typeSprite': 0x0,
		'init': function(_0x1a5318, _0x36b65f, _0x59f4d0) {
			this['x'] = _0x1a5318;
			this['y'] = _0x36b65f;
			this['onClick'] = new ig['AddSignal'](this);
			this['onRelease'] = new ig['AddSignal'](this);
			this['parent'](_0x1a5318, _0x36b65f, _0x59f4d0);
		},
		'setProperties': function(_0x301da1) {
			this['_frameName'] = this['frameName'] = '';
			this['anims'] = {};
			this['currentAnim'] = null;
			var _0x1659a7 = _0x301da1['split']('.');
			this['folderPath'] = '';
			for (var _0x19722c = 0x0; _0x19722c < _0x1659a7['length'] - 0x1; _0x19722c++) this['folderPath'] += _0x1659a7[_0x19722c], _0x19722c < _0x1659a7['length'] - 0x2 && (this['folderPath'] += '/');
			this['imgName'] = _0x1659a7[_0x1659a7['length'] - 0x1];
			this['path'] = _0x301da1;
			this['animSheet'] = ig['CallAsset']['addImage'](0x0, 0x0, this['path'], {}, 'ig.SpriteAnimationSheet');
			this['width'] = this['animSheet']['width'];
			this['height'] = this['animSheet']['height'];
			this['size']['x'] = this['width'];
			this['size']['y'] = this['height'];
			this['update']();
		},
		'addAnim': function(_0x119e51, _0x5daedd, _0x1997c9, _0x5ad4e1) {
			if (!this['animSheet']) throw 'No\x20animSheet\x20to\x20add\x20the\x20animation\x20' + _0x119e51 + '\x20to.';
			_0x5daedd = new ig['SpriteAnimation'](this['animSheet'], _0x5daedd, _0x1997c9, _0x5ad4e1, this);
			return this['anims'][_0x119e51] = _0x5daedd;
		},
		'playAnim': function(_0x258f24) {
			var _0x76b7e7 = this['anims'][_0x258f24];
			_0x76b7e7 && (this['currentPlay'] = _0x258f24, this['currentAnim'] = _0x76b7e7, this['currentAnim']['rewind']());
		},
		'stopAnim': function() {
			a && (this['currentPlay'] = '', this['currentAnim'] = null, a['rewind']());
		},
		'addChild': function(_0x17c2e3) {
			_0x17c2e3['groupParent'] = this;
			this['children']['push'](_0x17c2e3);
			ig['game']['checkZIndexGroups']();
			_0x17c2e3['setProperty'] && _0x17c2e3['setProperty']();
		},
		'removeChild': function(_0x35ebfa) {
			var _0x49eea8 = this['children']['indexOf'](_0x35ebfa);
			this['children']['splice'](_0x49eea8, 0x1);
			_0x35ebfa['zIndex'] = -0x1;
			_0x35ebfa['groupParent'] = null;
			ig['game']['checkZIndexGroups']();
		},
		'setScale': function(_0x3c5ae6, _0x3e60f9) {
			this['scale']['setTo'](_0x3c5ae6, _0x3e60f9);
			this['lastScale']['setTo'](_0x3c5ae6, _0x3e60f9);
			this['_scale']['setTo'](Math['abs'](_0x3c5ae6), Math['abs'](_0x3e60f9));
		},
		'getBounds': function() {
			var _0x1c6beb = ig['game']['geom']['rectangle'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
			return this['parent'](_0x1c6beb['x'], _0x1c6beb['right'], _0x1c6beb['y'], _0x1c6beb['bottom']);
		},
		'setProperty': function() {
			var _0x593337 = this['width'],
				_0x5d5cdd = this['height'],
				_0x5d5cdd = ig['game']['geom']['rectangle'](-(_0x593337 * this['anchor']['x']), -(_0x5d5cdd * this['anchor']['y']), _0x593337, _0x5d5cdd),
				_0x593337 = [];
			_0x593337[0x0] = {
				'x': _0x5d5cdd['x'],
				'y': _0x5d5cdd['y']
			};
			_0x593337[0x1] = {
				'x': _0x5d5cdd['right'],
				'y': _0x5d5cdd['y']
			};
			_0x593337[0x2] = {
				'x': _0x5d5cdd['right'],
				'y': _0x5d5cdd['bottom']
			};
			_0x593337[0x3] = {
				'x': _0x5d5cdd['x'],
				'y': _0x5d5cdd['bottom']
			};
			for (_0x5d5cdd = 0x0; _0x5d5cdd < _0x593337['length']; _0x5d5cdd++) {
				var _0x244b36 = ig['World']['parentPos'](this, _0x593337[_0x5d5cdd]['x'], _0x593337[_0x5d5cdd]['y']);
				_0x593337[_0x5d5cdd] = {
					'x': _0x244b36['x'],
					'y': _0x244b36['y']
				};
			}
			_0x593337 = ig['World']['getBounds'](_0x593337);
			this['pos']['x'] = _0x593337['x'];
			this['pos']['y'] = _0x593337['y'];
			this['size']['x'] = _0x593337['width'];
			this['size']['y'] = _0x593337['height'];
			_0x593337 = this['lastScale']['y'];
			_0x5d5cdd = this['scale']['y'];
			if (this['scale']['x'] != this['lastScale']['x'] || _0x5d5cdd != _0x593337) this['scale']['x'] = parseFloat(this['scale']['x']['toFixed'](0x3)), this['scale']['y'] = parseFloat(this['scale']['y']['toFixed'](0x3)), this['setScale'](this['scale']['x'], this['scale']['y']);
			(this['position']['x'] != this['x'] || this['position']['y'] != this['y']) && this['position']['setTo'](this['x'], this['y']);
			this['angle'] != this['_angle'] && this['setAngle'](this['angle']);
			this['rotation'] != this['_rotation'] && this['setRotation'](this['rotation']);
		},
		'update': function() {
			this['exists'] && !(0x0 > this['zIndex']) && (this['_frameName'] != this['frameName'] && this['setFrame'](), this['setProperty'](), this['parent'](), this['updateChildren'](), this['animSheet']['update'](), this['isClicked'] && (ig['input']['state']('click') || this['released']()));
		},
		'setFrame': function() {
			this['currentAnim'] ? (console['log']('Can\x20not\x20change\x20frame\x20while\x20playing\x20animation'), this['frameName'] = this['_frameName']) : (this['animSheet']['frameName'] = this['frameName'], this['animSheet']['setFrame'](), this['animSheet']['frameName'] == this['frameName'] && (this['_frameName'] = this['frameName'], this['width'] = this['animSheet']['width'], this['height'] = this['animSheet']['height']));
		},
		'draw': function() {
			if (this['exists'] && !(ig['game']['addOnReady'] && 0x0 > this['zIndex']) && this['visible'] && !(0x1 > this['size']['x'] || 0x1 > this['size']['y'])) {
				var _0x255355 = this['groupParent'] ? ig['game']['parentPos'](this['groupParent']) : {
						'x': 0x0,
						'y': 0x0
					},
					_0x246f37 = _0x255355['x'] + this['x'],
					_0x255355 = _0x255355['y'] + this['y'],
					_0x2dbe29 = 0x1,
					_0x383c40 = 0x1;
				0x0 > this['scale']['x'] && (_0x2dbe29 = -0x1);
				0x0 > this['scale']['y'] && (_0x383c40 = -0x1);
				var _0x134881 = ig['system']['context'];
				_0x134881['save']();
				0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
				_0x134881['translate'](ig['system']['getDrawPos'](_0x246f37), ig['system']['getDrawPos'](_0x255355));
				_0x134881['rotate'](this['rotation']);
				_0x134881['scale'](this['_scale']['x'], this['_scale']['y']);
				if (0x0 > _0x2dbe29 || 0x0 > _0x383c40) _0x134881['save'](), _0x134881['scale'](_0x2dbe29, _0x383c40);
				_0x134881['translate'](ig['system']['getDrawPos'](-_0x246f37), ig['system']['getDrawPos'](-_0x255355));
				this['drawImage']();
				this['drawChildren']();
				(0x0 > _0x2dbe29 || 0x0 > _0x383c40) && _0x134881['restore']();
				0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
				_0x134881['restore']();
			}
		},
		'drawImage': function() {
			var _0x54df72 = this['groupParent'] ? ig['game']['parentPos'](this['groupParent']) : {
					'x': 0x0,
					'y': 0x0
				},
				_0x358117 = _0x54df72['y'],
				_0x1dd205 = this['height'];
			targetX = this['x'] + _0x54df72['x'] - this['width'] * this['anchor']['x'];
			targetY = this['y'] + _0x358117 - _0x1dd205 * this['anchor']['y'];
			_0x54df72 = ig['system']['context'];
			_0x54df72['save']();
			_0x54df72['translate'](ig['system']['getDrawPos'](targetX), ig['system']['getDrawPos'](targetY));
			this['animSheet']['draw']();
			_0x54df72['translate'](ig['system']['getDrawPos'](-targetX), ig['system']['getDrawPos'](-targetY));
			_0x54df72['restore']();
		},
		'clicked': function() {
			this['isClicked'] || (this['isClicked'] = !0x0, this['onClick']['dispatch'](this));
		},
		'released': function() {
			this['isClicked'] && (this['isClicked'] = !0x1, this['onRelease']['dispatch'](this));
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.addon.group')['requires']('game.entities.addon.custom-entity')['defines'](function() {
	EntityGroup = EntityCustomEntity['extend']({
		'name': 'Group',
		'init': function(_0x125994, _0x4cfc8d, _0xe35c22) {
			this['x'] = _0x125994 ? _0x125994 : 0x0;
			this['y'] = _0x4cfc8d ? _0x4cfc8d : 0x0;
			this['parent'](_0x125994, _0x4cfc8d, _0xe35c22);
		},
		'add': function(_0x4e1a6e) {
			_0x4e1a6e['groupParent'] = this;
			this['children']['push'](_0x4e1a6e);
			ig['game']['checkZIndexGroups']();
			_0x4e1a6e['setProperty'] && _0x4e1a6e['setProperty']();
			this['setLength']();
		},
		'remove': function(_0x3eb768) {
			var _0x1b9ba = this['children']['indexOf'](_0x3eb768);
			this['children']['splice'](_0x1b9ba, 0x1);
			_0x3eb768['zIndex'] = -0x1;
			_0x3eb768['groupParent'] = null;
			ig['game']['checkZIndexGroups']();
			_0x3eb768['setProperty'] && _0x3eb768['setProperty']();
			this['setLength']();
		},
		'removeAll': function() {
			for (var _0x1d7dc2 = 0x0; _0x1d7dc2 < this['children']['length']; _0x1d7dc2++) {
				var _0x2944fe = this['children'][_0x1d7dc2];
				_0x2944fe['zIndex'] = -0x1;
				_0x2944fe['groupParent'] = null;
			}
			this['children'] = [];
			ig['game']['checkZIndexGroups']();
			this['setProperty']();
			this['setLength']();
		},
		'bringToTop': function(_0x103c8b) {
			var _0x2db4a4 = this['children']['indexOf'](_0x103c8b);
			this['children']['splice'](_0x2db4a4, 0x1);
			this['children']['push'](_0x103c8b);
			ig['game']['checkZIndexGroups']();
		},
		'sendToBack': function(_0x23e701) {
			var _0x2cb51e = this['children']['indexOf'](_0x23e701);
			this['children']['splice'](_0x2cb51e, 0x1);
			this['children']['splice'](0x0, 0x0, _0x23e701);
			ig['game']['checkZIndexGroups']();
		},
		'getBounds': function() {
			return this['parent'](this['pos']['x'], this['pos']['x'], this['pos']['y'], this['pos']['y']);
		},
		'setProperty': function() {
			var _0x4ada3f = this['groupParent'] ? ig['World']['parentPos'](this['groupParent'], this['x'], this['y']) : {
					'x': this['x'],
					'y': this['y']
				},
				_0x4de574 = _0x4ada3f['y'];
			this['pos']['x'] = _0x4ada3f['x'];
			this['pos']['y'] = _0x4de574;
			_0x4ada3f = this['lastScale']['y'];
			_0x4de574 = this['scale']['y'];
			if (this['scale']['x'] != this['lastScale']['x'] || _0x4de574 != _0x4ada3f) this['scale']['x'] = parseFloat(this['scale']['x']['toFixed'](0x2)), this['scale']['y'] = parseFloat(this['scale']['y']['toFixed'](0x2)), this['setScale'](this['scale']['x'], this['scale']['y']);
			(this['position']['x'] != this['x'] || this['position']['y'] != this['y']) && this['position']['setTo'](this['x'], this['y']);
			this['angle'] != this['_angle'] && this['setAngle'](this['angle']);
			this['rotation'] != this['_rotation'] && this['setRotation'](this['rotation']);
			this['anchor']['setTo'](0x0);
		},
		'setScale': function(_0x34b828, _0x305661) {
			this['scale']['setTo'](_0x34b828, _0x305661);
			this['lastScale']['setTo'](_0x34b828, _0x305661);
			this['_scale']['setTo'](_0x34b828, _0x305661);
		},
		'setLength': function() {
			var _0x54ec87 = this['getBounds']();
			this['width'] = _0x54ec87['width'];
			this['height'] = _0x54ec87['height'];
			this['size']['x'] = this['width'] * this['_scale']['x'];
			this['size']['y'] = this['height'] * this['_scale']['y'];
		},
		'sortByYAscending': function() {
			for (var _0x2cfa06 = []; _0x2cfa06['length'] < this['children']['length'];) {
				for (var _0x2d6563 = null, _0x2a1534 = 0x0; _0x2a1534 < this['children']['length']; _0x2a1534++) {
					var _0x3fa978 = this['children'][_0x2a1534];
					if (!(0x0 <= _0x2cfa06['indexOf'](_0x3fa978)))
						if (_0x2d6563) {
							var _0x2c4a7b = _0x3fa978['getBounds'](),
								_0x2c4a7b = _0x2c4a7b['y'] + _0x2c4a7b['height'],
								_0x57926e = _0x2d6563['getBounds']();
							_0x2c4a7b < _0x57926e['y'] + _0x57926e['height'] && (_0x2d6563 = _0x3fa978);
						} else _0x2d6563 = _0x3fa978;
				}
				_0x2cfa06['push'](_0x2d6563);
			}
			this['children'] = [];
			for (_0x2a1534 = 0x0; _0x2a1534 < _0x2cfa06['length']; _0x2a1534++) _0x3fa978 = _0x2cfa06[_0x2a1534], this['children']['push'](_0x3fa978);
			ig['game']['checkZIndexGroups']();
			this['setLength']();
		},
		'update': function() {
			this['exists'] && !(ig['game']['addOnReady'] && 0x0 > this['zIndex']) && (this['sorting'](), this['updateChildren'](), this['setLength'](), this['setProperty']());
		},
		'draw': function() {
			if (this['exists'] && !(ig['game']['addOnReady'] && 0x0 > this['zIndex']) && this['visible']) {
				var _0x32a625 = this['groupParent'] ? ig['game']['parentPos'](this['groupParent']) : {
						'x': 0x0,
						'y': 0x0
					},
					_0x25c779 = _0x32a625['x'] + this['x'],
					_0x32a625 = _0x32a625['y'] + this['y'],
					_0x5bb0fe = 0x1,
					_0x90cb95 = 0x1;
				0x0 > this['scale']['x'] && (_0x5bb0fe = -0x1);
				0x0 > this['scale']['y'] && (_0x90cb95 = -0x1);
				var _0x1ed3ba = ig['system']['context'];
				_0x1ed3ba['save']();
				0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
				_0x1ed3ba['translate'](ig['system']['getDrawPos'](_0x25c779), ig['system']['getDrawPos'](_0x32a625));
				_0x1ed3ba['rotate'](this['rotation']);
				_0x1ed3ba['scale'](this['_scale']['x'], this['_scale']['y']);
				if (0x0 > _0x5bb0fe || 0x0 > _0x90cb95) _0x1ed3ba['save'](), _0x1ed3ba['scale'](_0x5bb0fe, _0x90cb95);
				_0x1ed3ba['translate'](ig['system']['getDrawPos'](-_0x25c779), ig['system']['getDrawPos'](-_0x32a625));
				this['drawChildren']();
				(0x0 > _0x5bb0fe || 0x0 > _0x90cb95) && _0x1ed3ba['restore']();
				0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1);
				_0x1ed3ba['restore']();
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.add-image')['requires']('plugins.addon.raw-image')['defines'](function() {
	ig['AddImage'] = ig['RawImage']['extend']({
		'name': 'Image',
		'sourceX': 0x0,
		'sourceY': 0x0,
		'spriteData': null,
		'isReady': !0x1,
		'init': function(_0x5030cc, _0x3d1eae, _0x54b236, _0x5d92af) {
			this['parent'](_0x54b236, _0x5d92af);
			this['x'] = _0x5030cc;
			this['y'] = _0x3d1eae;
			this['oriData'] = this['data'];
		},
		'addChild': function(_0x441bcf) {
			_0x441bcf['groupParent'] = this;
			this['children']['push'](_0x441bcf);
			ig['game']['checkZIndexGroups']();
		},
		'removeChild': function(_0x42bd0b) {
			var _0x30b1d1 = this['children']['indexOf'](_0x42bd0b);
			this['children']['splice'](_0x30b1d1, 0x1);
			_0x42bd0b['zIndex'] = -0x1;
			_0x42bd0b['groupParent'] = null;
			ig['game']['checkZIndexGroups']();
		},
		'setProperty': function() {
			var _0x485362 = this['setLength'](),
				_0x9c1186 = _0x485362['x'],
				_0x485362 = _0x485362['y'],
				_0x489be6 = -(_0x9c1186 * this['anchor']['x']),
				_0x304e45 = -(_0x485362 * this['anchor']['y']);
			this['groupParent'] && ig['World']['parentPos'](this['groupParent'], this['x'], this['y']);
			_0x485362 = ig['game']['geom']['rectangle'](_0x489be6, _0x304e45, _0x9c1186, _0x485362);
			_0x9c1186 = [];
			_0x9c1186[0x0] = {
				'x': _0x485362['x'],
				'y': _0x485362['y']
			};
			_0x9c1186[0x1] = {
				'x': _0x485362['right'],
				'y': _0x485362['y']
			};
			_0x9c1186[0x2] = {
				'x': _0x485362['right'],
				'y': _0x485362['bottom']
			};
			_0x9c1186[0x3] = {
				'x': _0x485362['x'],
				'y': _0x485362['bottom']
			};
			for (_0x485362 = 0x0; _0x485362 < _0x9c1186['length']; _0x485362++) _0x489be6 = ig['World']['parentPos'](this, _0x9c1186[_0x485362]['x'], _0x9c1186[_0x485362]['y']), _0x9c1186[_0x485362] = {
				'x': _0x489be6['x'],
				'y': _0x489be6['y']
			};
			_0x9c1186 = ig['World']['getBounds'](_0x9c1186);
			this['pos']['x'] = _0x9c1186['x'];
			this['pos']['y'] = _0x9c1186['y'];
			this['frame']['x'] = _0x9c1186['width'];
			this['frame']['y'] = _0x9c1186['height'];
			_0x9c1186 = this['lastScale']['y'];
			_0x485362 = this['scale']['y'];
			(this['scale']['x'] != this['lastScale']['x'] || _0x485362 != _0x9c1186) && this['setScale'](this['scale']['x'], this['scale']['y']);
			this['angle'] != this['_angle'] && this['setAngle'](this['angle']);
			this['rotation'] != this['_rotation'] && this['setRotation'](this['rotation']);
		},
		'setLength': function() {
			var _0x5d11a3 = {
				'x': this['size']['x'],
				'y': this['size']['y']
			};
			this['curFrameData'] ? (_0x5d11a3['x'] = this['curFrameData']['frame']['w'], _0x5d11a3['y'] = this['curFrameData']['frame']['h']) : 0x0 >= this['frameName']['length'] && (_0x5d11a3['x'] = this['width'], _0x5d11a3['y'] = this['height']);
			return _0x5d11a3;
		},
		'setAngle': function(_0x3a6d1c) {
			this['_angle'] = _0x3a6d1c;
			this['rotation'] = this['angle']['toRad']();
		},
		'setRotation': function(_0x4cda28) {
			this['_rotation'] = _0x4cda28;
			this['angle'] = this['rotation']['toDeg']();
		},
		'getBounds': function() {
			return ig['game']['geom']['rectangle'](this['pos']['x'], this['pos']['y'], this['frame']['x'], this['frame']['y']);
		},
		'updateChildren': function() {
			for (var _0x27190e = 0x0; _0x27190e < this['children']['length']; _0x27190e++) {
				var _0x1dd802 = this['children'][_0x27190e];
				_0x1dd802 && _0x1dd802['exists'] && _0x1dd802['update'] && _0x1dd802['update']();
			}
		},
		'drawChildren': function() {
			for (var _0x28c742 = 0x0; _0x28c742 < this['children']['length']; _0x28c742++) {
				var _0xd70e7b = this['children'][_0x28c742];
				_0xd70e7b && _0xd70e7b['exists'] && _0xd70e7b['draw'] && _0xd70e7b['draw']();
			}
		},
		'kill': function() {
			this['exists'] = !0x1;
			for (var _0xe2ca7b = 0x0; _0xe2ca7b < this['children']['length']; _0xe2ca7b++) this['children'][_0xe2ca7b]['kill']();
			_0xe2ca7b = ig['system']['context'];
			_0xe2ca7b['save']();
			_0xe2ca7b['clearRect'](this['pos']['x'], this['pos']['y'], this['width'], this['height']);
			_0xe2ca7b['restore']();
		},
		'sorting': function() {
			for (var _0x313f50 = [], _0x3426b2 = 0x0; _0x3426b2 < this['children']['length']; _0x3426b2++) {
				var _0x282a43 = this['children'][_0x3426b2];
				_0x282a43 && _0x282a43['exists'] && _0x313f50['push'](_0x282a43);
			}
			this['children'] = [];
			for (_0x3426b2 = 0x0; _0x3426b2 < _0x313f50['length']; _0x3426b2++) this['children']['push'](_0x313f50[_0x3426b2]);
		},
		'setScale': function(_0x1982f2, _0x138280) {
			this['scale']['setTo'](_0x1982f2, _0x138280);
			this['lastScale']['setTo'](_0x1982f2, _0x138280);
			this['_scale']['setTo'](Math['abs'](_0x1982f2), Math['abs'](_0x138280));
		},
		'update': function() {
			this['parent']();
			this['sorting']();
			this['setProperty']();
			this['updateChildren']();
		},
		'draw': function() {
			if (this['exists'] && this['visible'])
				if (0x1 > this['width'] || 0x1 > this['height']) this['checkProperties']();
				else if (!(0x1 > this['size']['x'] || 0x1 > this['size']['y'])) {
				var _0x28c495 = this['groupParent'] ? ig['game']['parentPos'](this['groupParent']) : {
						'x': 0x0,
						'y': 0x0
					},
					_0x428b1d = _0x28c495['x'] + this['x'],
					_0x28c495 = _0x28c495['y'] + this['y'],
					_0x2a37c9 = this['sourceX'],
					_0x485ad6 = this['sourceY'],
					_0x1e2bd1 = this['size']['x'],
					_0x676bbc = this['size']['y'],
					_0x40e2b3 = 0x1,
					_0x4552f = 0x1;
				0x0 > this['scale']['x'] && (_0x40e2b3 = -0x1);
				0x0 > this['scale']['y'] && (_0x4552f = -0x1);
				this['rotation']['toDeg']();
				var _0xa15bd0 = this['size']['x'],
					_0x188645 = this['size']['y'];
				this['curFrameData'] ? (_0xa15bd0 = this['curFrameData']['frame']['w'], _0x188645 = this['curFrameData']['frame']['h']) : 0x0 >= this['frameName']['length'] && (_0xa15bd0 = this['width'], _0x188645 = this['height']);
				var _0xa15bd0 = _0xa15bd0 * this['anchor']['x'],
					_0x188645 = _0x188645 * this['anchor']['y'],
					_0xe6f61a = ig['system']['context'];
				_0xe6f61a['save']();
				0x1 != this['alpha'] && (_0xe6f61a['globalAlpha'] = this['alpha']);
				_0xe6f61a['translate'](ig['system']['getDrawPos'](_0x428b1d), ig['system']['getDrawPos'](_0x28c495));
				_0xe6f61a['rotate'](this['rotation']);
				_0xe6f61a['scale'](this['_scale']['x'], this['_scale']['y']);
				if (0x0 > _0x40e2b3 || 0x0 > _0x4552f) _0xe6f61a['save'](), _0xe6f61a['scale'](_0x40e2b3, _0x4552f);
				_0xe6f61a['translate'](ig['system']['getDrawPos'](-_0x428b1d), ig['system']['getDrawPos'](-_0x28c495));
				_0xe6f61a['translate'](ig['system']['getDrawPos'](_0x428b1d - _0xa15bd0), ig['system']['getDrawPos'](_0x28c495 - _0x188645));
				this['parent'](0x0, 0x0, _0x2a37c9, _0x485ad6, _0x1e2bd1, _0x676bbc, !0x1, !0x1);
				_0xe6f61a['translate'](ig['system']['getDrawPos'](-_0x428b1d + _0xa15bd0), ig['system']['getDrawPos'](-_0x28c495 + _0x188645));
				this['drawChildren']();
				0x1 != this['alpha'] && (_0xe6f61a['globalAlpha'] = 0x1);
				ig['system']['context']['restore']();
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.addon.custom-text')['requires']('game.entities.addon.custom-entity', 'plugins.addon.add-signal')['defines'](function() {
	EntityCustomText = EntityCustomEntity['extend']({
		'name': 'Text',
		'fontType': '',
		'fontSize': 0xc,
		'lineSpacing': 0x0,
		'fill': '#ffffff',
		'wordWrap': !0x1,
		'wordWrapWidth': 0x0,
		'stroke': 'black',
		'strokeThickness': 0x0,
		'lines': [],
		'fontWeight': 'normal',
		'textAnchor': {
			'x': 0x0,
			'y': 0x0
		},
		'exists': !0x0,
		'showText': '',
		'align': 'left',
		'style': {
			'enableShadow': !0x1,
			'shadowOffsetX': 0x0,
			'shadowOffsetY': 0x0,
			'shadowColor': 'black',
			'shadowBlur': 0x0,
			'shadowStroke': !0x1,
			'shadowFill': !0x1
		},
		'curveEnabled': !0x1,
		'curveData': {
			'points': {
				'x': [0x0, 0x0],
				'y': [0x0, 0x0]
			},
			'distance': 0x1,
			'pathPos': [],
			'typeCurve': 0x1,
			'radians': 0x0,
			'radius': 0x0
		},
		'textReady': !0x1,
		'setCurveData': function(_0x29bdad, _0x47737f) {
			this['curveData']['radians'] = _0x29bdad;
			this['curveData']['radius'] = _0x47737f;
		},
		'init': function(_0x522575, _0x58c52d, _0x8a9bf8) {
			this['x'] = _0x522575;
			this['y'] = _0x58c52d;
			this['parent'](_0x522575, _0x58c52d, _0x8a9bf8);
			this['showText'] = '';
			this['onClick'] = new ig['AddSignal'](this);
			this['onRelease'] = new ig['AddSignal'](this);
		},
		'inputProperty': function(_0x30d635, _0x2ef955, _0x1434ba) {
			this['showText'] = _0x30d635;
			this['fontSize'] = _0x2ef955;
			this['fontType'] = _0x1434ba;
			this['updateText']();
			this['curveData']['points']['x'] = [];
		},
		'setShadow': function(_0x370320, _0x10b81f, _0x158522, _0x11d8eb, _0x5a1654, _0x8d070a) {
			void 0x0 === _0x370320 && (_0x370320 = 0x0);
			void 0x0 === _0x10b81f && (_0x10b81f = 0x0);
			void 0x0 === _0x158522 && (_0x158522 = 'rgba(0,\x200,\x200,\x201)');
			void 0x0 === _0x11d8eb && (_0x11d8eb = 0x0);
			void 0x0 === _0x5a1654 && (_0x5a1654 = !0x0);
			void 0x0 === _0x8d070a && (_0x8d070a = !0x0);
			this['style']['shadowOffsetX'] = _0x370320;
			this['style']['shadowOffsetY'] = _0x10b81f;
			this['style']['shadowColor'] = _0x158522;
			this['style']['shadowBlur'] = _0x11d8eb;
			this['style']['shadowStroke'] = _0x5a1654;
			this['style']['shadowFill'] = _0x8d070a;
			this['style']['enableShadow'] = !0x0;
			return this;
		},
		'checkLines': function() {
			var _0x8f8129 = '';
			try {
				var _0x28b866 = this['showText'],
					_0x23bf1f = _0x28b866['split']('\x0a');
			} catch (_0x41ba0b) {
				throw 'text\x20not\x20detected';
			}
			_0x28b866 = this['showText'];
			_0x23bf1f = _0x28b866['split']('\x0a');
			if (this['wordWrap']) {
				var _0x28b866 = ig['system']['context'],
					_0x3d6571 = this['fontWeight'] + '\x20' + this['fontSize'] + 'px\x20' + this['fontType'];
				_0x28b866['save']();
				_0x28b866['font'] = _0x3d6571;
				0x0 < this['strokeThickness'] && (_0x28b866['strokeStyle'] = this['stroke'], _0x28b866['lineWidth'] = this['strokeThickness']);
				for (_0x3d6571 = 0x0; _0x3d6571 < _0x23bf1f['length']; _0x3d6571++) {
					for (var _0x5114c1 = _0x23bf1f[_0x3d6571]['split']('\x20'), _0x3853cf = 0x0, _0x5215b7 = 0x0; _0x5215b7 < _0x5114c1['length']; _0x5215b7++) {
						var _0x204f2 = _0x5114c1[_0x5215b7],
							_0x4d077e = '\x20';
						_0x5215b7 == _0x5114c1['length'] - 0x1 && (_0x4d077e = '');
						_0x204f2 += _0x4d077e;
						_0x4d077e = _0x28b866['measureText'](_0x204f2)['width'];
						_0x3853cf += _0x4d077e;
						_0x3853cf >= this['wordWrapWidth'] && (_0x204f2 = '\x0a' + _0x204f2, _0x3853cf = _0x4d077e);
						_0x8f8129 += _0x204f2;
					}
					_0x3d6571 < _0x23bf1f['length'] - 0x1 && (_0x8f8129 += '\x0a');
				}
				_0x28b866['restore']();
				return _0x8f8129;
			}
			return _0x28b866;
		},
		'updateText': function() {
			this['lines'] = [];
			for (var _0x3bb661 = this['checkLines']()['split']('\x0a'), _0x23bd0f = 0x0; _0x23bd0f < _0x3bb661['length']; _0x23bd0f++) this['lines']['push'](_0x3bb661[_0x23bd0f]);
			this['textAnchor']['x'] = 0x0;
			switch (this['align']) {
				case 'right':
					this['textAnchor']['x'] = 0x1;
					break;
				case 'center':
					this['textAnchor']['x'] = 0.5;
					break;
				case 'left':
					this['textAnchor']['x'] = 0x0;
			}
			this['getDimension']();
		},
		'getDimension': function() {
			var _0x59e6bb = ig['system']['context'],
				_0x65bb78 = this['fontWeight'] + '\x20' + this['fontSize'] + 'px\x20' + this['fontType'];
			_0x59e6bb['save']();
			_0x59e6bb['font'] = _0x65bb78;
			for (var _0x65bb78 = null, _0x2592cf = 0x0, _0x728112 = 0x0; _0x728112 < this['lines']['length']; _0x728112++) {
				for (var _0x562964 = this['lines'][_0x728112], _0x5da1bd = 0x0, _0x1b3585 = 0x0; _0x1b3585 < _0x562964['length']; _0x1b3585++) var _0x5ab09b = _0x59e6bb['measureText'](_0x562964[_0x1b3585])['width'],
					_0x5da1bd = _0x5da1bd + _0x5ab09b;
				_0x65bb78 ? _0x5da1bd > _0x65bb78 && (_0x65bb78 = _0x5da1bd) : _0x65bb78 = _0x5da1bd;
				_0x2592cf += this['fontSize'] + this['lineSpacing'];
			}
			this['width'] = _0x65bb78;
			this['height'] = _0x2592cf;
			_0x59e6bb['restore']();
		},
		'setLength': function() {
			var _0x724062 = this['_scale']['x'] * this['width'],
				_0xbd9ae9 = this['_scale']['y'] * this['height'],
				_0x724062 = this['groupParent'] ? ig['World']['getGlobalDimension'](this['groupParent'], _0x724062, _0xbd9ae9) : {
					'width': _0x724062,
					'height': _0xbd9ae9
				};
			return {
				'x': _0x724062['width'],
				'y': _0x724062['height']
			};
		},
		'setScale': function(_0x37874d, _0x47e236) {
			this['scale']['setTo'](_0x37874d, _0x47e236);
			this['lastScale']['setTo'](_0x37874d, _0x47e236);
			this['_scale']['setTo'](Math['abs'](_0x37874d), Math['abs'](_0x47e236));
		},
		'setText': function(_0x66ee32) {
			this['showText'] = _0x66ee32 + '';
		},
		'getBounds': function() {
			var _0xb09364 = ig['game']['geom']['rectangle'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
			return this['parent'](_0xb09364['x'], _0xb09364['right'], _0xb09364['y'], _0xb09364['bottom']);
		},
		'setProperty': function() {
			var _0x2c6114 = this['width'],
				_0x34503e = this['height'],
				_0x3e7ffb = -(_0x2c6114 * this['anchor']['x']),
				_0x2c79ad = -(_0x34503e * this['anchor']['y']);
			0x0 > this['scale']['x'] && (_0x3e7ffb = -((0x1 - this['anchor']['x']) * _0x2c6114));
			0x0 > this['scale']['y'] && (_0x2c79ad = -((0x1 - this['anchor']['y']) * _0x34503e));
			_0x34503e = ig['game']['geom']['rectangle'](_0x3e7ffb, _0x2c79ad, _0x2c6114, _0x34503e);
			_0x2c6114 = [];
			_0x2c6114[0x0] = {
				'x': _0x34503e['x'],
				'y': _0x34503e['y']
			};
			_0x2c6114[0x1] = {
				'x': _0x34503e['right'],
				'y': _0x34503e['y']
			};
			_0x2c6114[0x2] = {
				'x': _0x34503e['right'],
				'y': _0x34503e['bottom']
			};
			_0x2c6114[0x3] = {
				'x': _0x34503e['x'],
				'y': _0x34503e['bottom']
			};
			for (_0x34503e = 0x0; _0x34503e < _0x2c6114['length']; _0x34503e++) _0x3e7ffb = ig['World']['parentPos'](this, _0x2c6114[_0x34503e]['x'], _0x2c6114[_0x34503e]['y']), _0x2c6114[_0x34503e] = {
				'x': _0x3e7ffb['x'],
				'y': _0x3e7ffb['y']
			};
			_0x2c6114 = ig['World']['getBounds'](_0x2c6114);
			this['pos']['x'] = _0x2c6114['x'];
			this['pos']['y'] = _0x2c6114['y'];
			this['size']['x'] = _0x2c6114['width'];
			this['size']['y'] = _0x2c6114['height'];
			_0x2c6114 = this['lastScale']['y'];
			_0x34503e = this['scale']['y'];
			if (this['scale']['x'] != this['lastScale']['x'] || _0x34503e != _0x2c6114) this['scale']['x'] = parseFloat(this['scale']['x']['toFixed'](0x2)), this['scale']['y'] = parseFloat(this['scale']['y']['toFixed'](0x2)), this['setScale'](this['scale']['x'], this['scale']['y']);
			(this['position']['x'] != this['x'] || this['position']['y'] != this['y']) && this['position']['setTo'](this['x'], this['y']);
			this['angle'] != this['_angle'] && this['setAngle'](this['angle']);
			this['rotation'] != this['_rotation'] && this['setRotation'](this['rotation']);
		},
		'addChild': function(_0x2934c9) {
			_0x2934c9['groupParent'] = this;
			this['children']['push'](_0x2934c9);
			ig['game']['checkZIndexGroups']();
		},
		'removeChild': function(_0x4a2d32) {
			var _0x36ac46 = this['children']['indexOf'](_0x4a2d32);
			this['children']['splice'](_0x36ac46, 0x1);
			_0x4a2d32['zIndex'] = -0x1;
			_0x4a2d32['groupParent'] = null;
			ig['game']['checkZIndexGroups']();
		},
		'checkPointer': function() {
			if (this['inputEnabled']) {
				var _0x510673 = ig['game']['geom']['rectangle'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']),
					_0x2ddbf3 = ig['game']['pointer']['pos'];
				_0x2ddbf3['x'] >= _0x510673['x'] && _0x2ddbf3['x'] <= _0x510673['right'] && _0x2ddbf3['y'] >= _0x510673['y'] && _0x2ddbf3['y'] <= _0x510673['bottom'] && ig['game']['pointer']['check'](this);
			}
		},
		'setCurvePath': function(_0xe06252, _0x3ed119) {
			var _0x1551a7 = this['pos']['x'],
				_0x1551a7 = [_0x1551a7, _0x1551a7 + this['size']['x'] / 0x2, _0x1551a7 + this['size']['x']],
				_0x416f86 = [_0x3ed119, _0x3ed119 - this['curveData']['radius'], _0x3ed119],
				_0x494a9a = 0x1 / this['size']['x'],
				_0x194cb1 = 'linear';
			switch (this['curveData']['typeCurve']) {
				case 0x1:
					_0x194cb1 = 'linearInterpolation';
					break;
				case 0x2:
					_0x194cb1 = 'bezierInterpolation';
					break;
				case 0x3:
					_0x194cb1 = 'catmullRomInterpolation';
			}
			for (var _0x5b4e9a = [], _0x25aba9 = 0x0, _0x4d4c77 = 0x0; 0x1 >= _0x4d4c77; _0x4d4c77 += _0x494a9a) {
				var _0x15bd84 = ig['game']['math'][_0x194cb1](_0x1551a7, _0x4d4c77),
					_0x1fa32d = ig['game']['math'][_0x194cb1](_0x416f86, _0x4d4c77),
					_0x5bb6d7 = _0x5b4e9a['length'];
				if (0x0 < _0x5bb6d7) {
					var _0x5bb6d7 = _0x5b4e9a[_0x5bb6d7 - 0x1],
						_0x43c239 = ig['game']['math']['distance'](_0x5bb6d7['x'], _0x5bb6d7['y'], _0x15bd84, _0x1fa32d),
						_0x25aba9 = _0x25aba9 + _0x43c239,
						_0x43c239 = ig['game']['math']['angleBetween'](_0x5bb6d7['x'], _0x5bb6d7['y'], _0x15bd84, _0x1fa32d);
					_0x5bb6d7['angle'] = _0x43c239;
				}
				_0x5b4e9a['push']({
					'x': _0x15bd84,
					'y': _0x1fa32d,
					'angle': 0x0
				});
			}
			for (_0x4d4c77 = 0x0; _0x4d4c77 < _0x1551a7['length']; _0x4d4c77++);
			return {
				'paths': _0x5b4e9a,
				'totDist': _0x25aba9
			};
		},
		'update': function() {
			this['exists'] && (!ig['game'] || !(ig['game']['addOnReady'] && 0x0 > this['zIndex'])) && (this['sorting'](), this['updateText'](), this['setProperty'](), this['updateChildren'](), this['checkPointer'](), this['isClicked'] && (ig['input']['state']('click') || this['released']()));
		},
		'draw': function() {
			if (this['exists'] && (!ig['game'] || !(ig['game']['addOnReady'] && 0x0 > this['zIndex'])) && this['visible']) {
				var _0x1f53a2 = this['groupParent'] ? ig['game']['parentPos'](this['groupParent']) : {
						'x': 0x0,
						'y': 0x0
					},
					_0x3522e3 = _0x1f53a2['x'] + this['x'],
					_0x2b7f1e = _0x1f53a2['y'] + this['y'],
					_0x1f53a2 = _0x3522e3 - (this['width'] * this['anchor']['x'] - this['width'] * this['textAnchor']['x']),
					_0x1b306e = _0x2b7f1e - this['height'] * this['anchor']['y'],
					_0x264691 = 0x1,
					_0x17d844 = 0x1;
				0x0 > this['scale']['x'] && (_0x264691 = -0x1);
				0x0 > this['scale']['y'] && (_0x17d844 = -0x1);
				var _0x29655c = ig['system']['context'],
					_0x16e20c = this['fontWeight'] + '\x20' + this['fontSize'] + 'px\x20' + this['fontType'];
				_0x29655c['save']();
				0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
				_0x29655c['translate'](ig['system']['getDrawPos'](_0x3522e3), ig['system']['getDrawPos'](_0x2b7f1e));
				_0x29655c['rotate'](this['rotation']);
				_0x29655c['scale'](this['_scale']['x'], this['_scale']['y']);
				if (0x0 > _0x264691 || 0x0 > _0x17d844) _0x29655c['save'](), _0x29655c['scale'](_0x264691, _0x17d844);
				_0x29655c['translate'](ig['system']['getDrawPos'](-_0x3522e3), ig['system']['getDrawPos'](-_0x2b7f1e));
				_0x29655c['fillStyle'] = this['fill'];
				_0x29655c['textBaseline'] = 'alphabetic';
				_0x29655c['font'] = _0x16e20c;
				_0x29655c['textAlign'] = this['align'];
				this['style']['enableShadow'] && (_0x29655c['shadowOffsetX'] = this['style']['shadowOffsetX'], _0x29655c['shadowOffsetY'] = this['style']['shadowOffsetY'], _0x29655c['shadowColor'] = this['style']['shadowColor'], _0x29655c['shadowBlur'] = this['style']['shadowBlur']);
				for (_0x3522e3 = 0x0; _0x3522e3 < this['lines']['length']; _0x3522e3++) _0x2b7f1e = this['lines'][_0x3522e3], _0x16e20c = this['fontSize'] + this['lineSpacing'], _0x16e20c = _0x1b306e + 0.8 * _0x16e20c + _0x3522e3 * _0x16e20c, _0x29655c['fillText'](_0x2b7f1e, _0x1f53a2, _0x16e20c), 0x0 < this['strokeThickness'] && (_0x29655c['strokeStyle'] = this['stroke'], _0x29655c['lineWidth'] = this['strokeThickness'], _0x29655c['strokeText'](_0x2b7f1e, _0x1f53a2, _0x16e20c));
				this['drawChildren']();
				(0x0 > _0x264691 || 0x0 > _0x17d844) && _0x29655c['restore']();
				0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1);
				ig['system']['context']['restore']();
			}
		},
		'rotateChar': function(_0x251cc2, _0xade752, _0xa8cf5d) {
			var _0x5f0700 = ig['system']['context'];
			_0x5f0700['save']();
			_0x5f0700['translate'](ig['system']['getDrawPos'](_0x251cc2['x']), ig['system']['getDrawPos'](_0x251cc2['y']));
			_0x5f0700['rotate'](_0xa8cf5d);
			_0x5f0700['translate'](ig['system']['getDrawPos'](-_0x251cc2['x']), ig['system']['getDrawPos'](-_0x251cc2['y']));
			_0x5f0700['fillText'](_0xade752, _0x251cc2['x'], _0x251cc2['y']);
			_0x5f0700['restore']();
		},
		'clicked': function() {
			this['isClicked'] || (this['isClicked'] = !0x0, this['onClick']['dispatch'](this));
		},
		'released': function() {
			this['isClicked'] && (this['isClicked'] = !0x1, this['onRelease']['dispatch'](this));
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.click-btn')['requires']('game.entities.addon.sprite')['defines'](function() {
	EntityClickBtn = EntitySprite['extend']({
		'name': 'click-btn',
		'btnType': 0x1,
		'clickableLayer': null,
		'setProperties': function(_0x31c614) {
			this['parent'](_0x31c614);
			this['onStartClick'] = new ig['AddSignal'](this);
			this['onGoing'] = !0x1;
			this['inputEnabled'] = !0x0;
			this['anchor']['setTo'](0.5);
		},
		'changePage': function(_0x5e45c8) {
			ig['game']['changePage'](_0x5e45c8);
		},
		'moreGames': function() {
			this['setProperty']();
			this['div_layer_name'] = this['name'] = 'more-games';
			_SETTINGS['MoreGames']['Enabled'] ? (_SETTINGS['MoreGames']['Link'] && (this['link'] = _SETTINGS['MoreGames']['Link']), _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']();
		},
		'show': function() {
			if (this['exists'] && 'more-games' == this['name']) {
				var _0x1f96c7 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
				ig['domHandler']['show'](_0x1f96c7);
			}
		},
		'hide': function() {
			if (this['exists'] && 'more-games' == this['name']) {
				var _0xe496c0 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
				ig['domHandler']['hide'](_0xe496c0);
			}
		},
		'tweenClick': function() {
			csound['sfxPlay']('click');
			var _0x2c14cd = this['scale']['x'] - 0.1,
				_0x392bfc = this['scale']['y'] - 0.1;
			new Tweener(this['scale'])['to']({
				'x': _0x2c14cd,
				'y': _0x392bfc
			}, 0.065)['easing'](ig['Tweener']['Easing']['Bounce']['EaseInOut'])['repeat'](0x1)['yoyo'](!0x0)['onComplete'](function() {
				this['onGoing'] = !0x1;
				this['onClick']['dispatch']();
				this['released']();
			} ['bind'](this))['start']();
		},
		'checkArea': function() {},
		'clicked': function() {
			if ((!ig['game']['transition'] || !ig['game']['transition']['isClosed']) && !this['isClicked'] && !this['onGoing']) this['onGoing'] = this['isClicked'] = !0x0, this['tweenClick'](), this['onStartClick']['dispatch']();
		},
		'released': function() {
			this['isClicked'] && !this['onGoing'] && (this['isClicked'] = !0x1, this['onRelease']['dispatch']());
		},
		'update': function() {
			this['parent']();
			this['clickableLayer'] && (this['clickableLayer']['size'] = new Vector2(this['size']['x'], this['size']['y']), this['clickableLayer']['update'](this['pos']['x'], this['pos']['y']));
		},
		'draw': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.game-data')['defines'](function() {
	ig['GameData'] = {
		'totalStages': 0x1e,
		'stage': 0xa,
		'defaultMoves': 0xa,
		'defaultScore': 0x3e8,
		'defaultMove': 0xa,
		'defPieceScore': 0x32,
		'trialMode': !0x0,
		'unlockPowerUp': [0x1, 0x3, 0x5, 0x2],
		'stageMaps': [
			[
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
			],
			[
				[0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0],
				[0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0],
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0]
			],
			[
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0],
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0],
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0]
			],
			[
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x0, 0x0, 0x0, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x0, 0x0, 0x0, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
			],
			[
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x0, 0x1, 0x0, 0x1, 0x1],
				[0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
				[0x1, 0x1, 0x0, 0x1, 0x0, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
			],
			[
				[0x0, 0x0, 0x1, 0x0, 0x1, 0x0, 0x0],
				[0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1],
				[0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0],
				[0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0]
			]
		],
		'stageMoves': [0xa],
		'stageGoals': [0x3e8],
		'openAllStage': function() {},
		'openStageUntil': function(_0x2feb32, _0x1d76d7) {
			ig['game']['sessionData']['unlockedStages'] = [];
			for (var _0x5d3e85 = 0x0; _0x5d3e85 < _0x2feb32; _0x5d3e85++) ig['game']['sessionData']['unlockedStages'][_0x5d3e85] = 0x3;
			_0x1d76d7 && ig['game']['changePage'](LevelStage);
		},
		'nextScore': function(_0x47c38f) {
			return ig['GameData']['defaultScore'] + 0.8 * _0x47c38f * ig['GameData']['defaultScore'];
		},
		'decideGoals': function() {}
	};
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.transition')['defines'](function() {
	ig['Transition'] = ig['Class']['extend']({
		'name': 'Transition',
		'isClosed': !0x1,
		'isRunning': !0x1,
		'tweenTime': 0.3,
		'init': function() {},
		'create': function() {
			this['alpha'] = 0x1;
			this['group'] = [];
			this['isClosed'] = !0x0;
		},
		'addSprite': function(_0x46cc65, _0xd85a41, _0x2be9fe, _0x1601ef, _0x11dec2) {
			_0x46cc65 = new EntitySprite(_0x46cc65, _0xd85a41, _0x11dec2);
			_0x46cc65['setProperties'](_0x2be9fe, _0x1601ef);
			return _0x46cc65;
		},
		'addZIndex': function() {
			for (var _0x555d15 = 0x0; _0x555d15 < this['group']['length']; _0x555d15++) {
				var _0x5cb39f = this['group'][_0x555d15],
					_0x1ab311 = ig['game']['entities'][ig['game']['entities']['length'] - 0x1]['zIndex'];
				ig['game']['entities']['push'](_0x5cb39f);
				_0x5cb39f['zIndex'] = _0x1ab311 + _0x555d15 + 0x1;
				ig['game']['sortEntitiesDeferred']();
			}
		},
		'update': function() {
			for (var _0x156fb3 = 0x0; _0x156fb3 < this['group']['length']; _0x156fb3++) this['group'][_0x156fb3]['update']();
		},
		'draw': function() {
			for (var _0x25f460 = 0x0; _0x25f460 < this['group']['length']; _0x25f460++) this['group'][_0x25f460]['draw']();
			_0x25f460 = ig['game']['geom']['rectangle'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
			ig['game']['geomDebug']['rect'](_0x25f460, 'black', this['alpha']);
		},
		'close': function(_0x4cbb5f) {
			!this['isRunning'] && !this['isClosed'] && (curState()['curtainBg'] && (curState()['curtainBg']['visible'] = !0x0), this['isRunning'] = !0x0, this['stateIdx'] = _0x4cbb5f, new Tweener(this)['to']({
				'alpha': 0x1
			}, this['tweenTime'])['onComplete'](function() {
				this['isRunning'] = !0x1;
				this['isClosed'] = !0x0;
				ig['game']['director']['loadLevel'](this['stateIdx']);
			} ['bind'](this))['start']());
		},
		'open': function() {
			!this['isRunning'] && this['isClosed'] && (this['isRunning'] = !0x0, new Tweener(this)['to']({
				'alpha': 0x0
			}, this['tweenTime'])['onComplete'](function() {
				this['isClosed'] = this['isRunning'] = !0x1;
				curState()['curtainBg'] && (curState()['curtainBg']['visible'] = !0x1);
			} ['bind'](this))['start']());
		},
		'createHiddenCanvases': function() {
			0x0 >= hiddenCanvases['over']['ele']['width'] || 0x0 >= hiddenCanvases['over']['ele']['height'] ? setTimeout(this['createHiddenCanvases']['bind'](this), 0x32) : (this['addStatus'] = (0x1 - this['status']) / (this['loadCanvases']['length'] * llamaColor['length']), setTimeout(this['readDataToLoad']['bind'](this), 0x32));
		},
		'readDataToLoad': function() {
			var _0x101554 = this['loadCanvases'][this['curLoadCanvas']],
				_0x101554 = _0x101554['replace']('media/graphics/', '');
			_0x101554['split']('/');
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.state-addon')['requires']('impact.game', 'plugins.addon.custom-storage', 'plugins.addon.random-generator', 'plugins.addon.math-collection', 'plugins.addon.custom-debug', 'plugins.addon.geometry', 'plugins.addon.custom-time', 'plugins.addon.world', 'plugins.addon.asset-reader', 'plugins.addon.call-asset', 'plugins.addon.sprite-animation', 'game.entities.addon.custom-entity', 'plugins.addon.custom-image', 'plugins.addon.raw-image', 'game.entities.addon.sprite', 'game.entities.addon.group', 'plugins.addon.add-image', 'game.entities.addon.custom-text', 'game.entities.objects.click-btn', 'plugins.addon.game-data', 'plugins.addon.transition')['defines'](function() {
	ig['Game']['inject']({
		'groups': [],
		'addOnReady': !0x1,
		'prepareGame': function() {
			this['addOnReady'] = !0x1;
			this['centerX'] = ig['system']['width'] / 0x2;
			this['centerY'] = ig['system']['height'] / 0x2;
			this['gw'] = ig['system']['width'];
			this['gh'] = ig['system']['height'];
			this['rnd'] = new ig['RandomGenerator']([(Date['now']() * Math['random']())['toString']()]);
			this['math'] = new ig['MathCollection']();
			this['customTime'] = new ig['CustomTime']();
			this['transition'] = new ig['Transition']();
			this['transition']['create']();
			this['geomDebug'] = new ig['CustomDebug']();
			this['geom'] = new ig['Geometry']();
			this['goToPage'] = 'mainmenu';
		},
		'disableBtns': function() {
			for (var _0x43889b = 0x0; _0x43889b < ig['game']['entities']['length']; _0x43889b++) ig['game']['entities'][_0x43889b]['inputEnabled'] = !0x1;
			_SETTINGS['MoreGames']['Enabled'] && curState()['moreBtn'] && curState()['moreBtn']['exists'] && curState()['moreBtn']['hide']();
		},
		'updateGroups': function() {
			for (var _0xf7ea2a = 0x0; _0xf7ea2a < this['groups']['length']; _0xf7ea2a++) this['groups'][_0xf7ea2a]['update']();
		},
		'drawGroups': function() {
			for (var _0x2597d9 = 0x0; _0x2597d9 < this['groups']['length']; _0x2597d9++) this['groups'][_0x2597d9]['draw']();
		},
		'update': function() {
			this['_levelToLoad'] && (this['loadLevel'](this['_levelToLoad']), this['_levelToLoad'] = null);
			this['addOnReady'] ? (this['updateGroups'](), this['transition'] && this['transition']['update']()) : this['updateEntities']();
			this['checkEntities']();
			for (var _0x65fc6 = 0x0; _0x65fc6 < this['_deferredKill']['length']; _0x65fc6++) this['_deferredKill'][_0x65fc6]['erase'](), this['entities']['erase'](this['_deferredKill'][_0x65fc6]);
			this['_deferredKill'] = [];
			if (this['_doSortEntities'] || this['autoSort']) this['sortEntities'](), this['_doSortEntities'] = !0x1;
			for (var _0x1d17f2 in this['backgroundAnims']) {
				var _0x65fc6 = this['backgroundAnims'][_0x1d17f2],
					_0x13c516;
				for (_0x13c516 in _0x65fc6) _0x65fc6[_0x13c516]['update']();
			}
		},
		'draw': function() {
			this['clearColor'] && ig['system']['clear'](this['clearColor']);
			this['_rscreen']['x'] = ig['system']['getDrawPos'](this['screen']['x']) / ig['system']['scale'];
			this['_rscreen']['y'] = ig['system']['getDrawPos'](this['screen']['y']) / ig['system']['scale'];
			var _0x33ec0c;
			for (_0x33ec0c = 0x0; _0x33ec0c < this['backgroundMaps']['length']; _0x33ec0c++) {
				var _0x9acc4f = this['backgroundMaps'][_0x33ec0c];
				if (_0x9acc4f['foreground']) break;
				_0x9acc4f['setScreenPos'](this['screen']['x'], this['screen']['y']);
				_0x9acc4f['draw']();
			}
			this['addOnReady'] ? (this['drawGroups'](), this['transition'] && this['transition']['draw']()) : this['drawEntities']();
			for (_0x33ec0c; _0x33ec0c < this['backgroundMaps']['length']; _0x33ec0c++) _0x9acc4f = this['backgroundMaps'][_0x33ec0c], _0x9acc4f['setScreenPos'](this['screen']['x'], this['screen']['y']), _0x9acc4f['draw']();
		},
		'parentPos': function(_0x27d82a) {
			for (var _0x282832 = {
					'x': 0x0,
					'y': 0x0
				}, _0xf119b3 = !0x1; !_0xf119b3;) _0x282832 = this['countPos'](_0x27d82a, _0x282832), _0x27d82a['groupParent'] ? _0x27d82a = _0x27d82a['groupParent'] : _0xf119b3 = !0x0;
			return _0x282832;
		},
		'countPos': function(_0x1ab122, _0xa7410b) {
			_0xa7410b['x'] += _0x1ab122['x'];
			_0xa7410b['y'] += _0x1ab122['y'];
			return _0xa7410b;
		},
		'checkVisibility': function(_0x203b72) {
			var _0x4c7fef = !0x0;
			if (_0x203b72['visible'])
				for (var _0x251a46 = !0x1; !_0x251a46;) _0x203b72['groupParent'] ? (_0x203b72 = _0x203b72['groupParent'], _0x203b72['visible'] || _0x203b72['forseenVisible'] || (_0x4c7fef = !0x1)) : _0x251a46 = !0x0;
			else _0x203b72['forseenVisible'] || (_0x4c7fef = !0x1);
			return _0x4c7fef;
		},
		'checkZIndexGroups': function() {
			for (var _0x1cedab = this['tempZIndex'] = 0x0; _0x1cedab < this['groups']['length']; _0x1cedab++) {
				var _0x39d19e = this['groups'][_0x1cedab];
				_0x39d19e['zIndex'] = this['tempZIndex'];
				this['tempZIndex']++;
				_0x39d19e['children'] && 0x0 < _0x39d19e['children']['length'] && this['checkZIndexChildren'](_0x39d19e);
			}
			this['sortEntitiesDeferred']();
		},
		'checkZIndexChildren': function(_0x2ac175) {
			_0x2ac175 = _0x2ac175['children'];
			for (var _0x3b610c = 0x0; _0x3b610c < _0x2ac175['length']; _0x3b610c++) {
				var _0x48b5a8 = _0x2ac175[_0x3b610c];
				_0x48b5a8['zIndex'] = this['tempZIndex'];
				this['tempZIndex']++;
				_0x48b5a8['children'] && 0x0 < _0x48b5a8['children']['length'] && this['checkZIndexChildren'](_0x48b5a8);
			}
		},
		'generateFrameNames': function(_0x681dff, _0x1eaf55, _0x2ecb0f) {
			_0x2ecb0f = _0x2ecb0f ? _0x2ecb0f : [];
			for (var _0x20f114 = []; _0x681dff <= _0x1eaf55; _0x681dff++) 0x0 <= _0x2ecb0f['indexOf'](_0x681dff) || _0x20f114['push'](_0x681dff);
			return _0x20f114;
		},
		'addGroup': function(_0xd12f6, _0x86c06d, _0x23d797, _0x2dc11b) {
			_0x2dc11b = _0x2dc11b ? _0x2dc11b : EntityGroup;
			return ig['game']['spawnEntity'](_0x2dc11b, _0xd12f6, _0x86c06d, _0x23d797);
		},
		'addText': function(_0x4f5cba, _0x52ffaf, _0x3a9dda, _0x24bcb5, _0x196cef, _0x4e1bec) {
			_0x4f5cba = ig['game']['spawnEntity'](EntityCustomText, _0x4f5cba, _0x52ffaf, _0x4e1bec);
			_0x4f5cba['inputProperty'](_0x3a9dda, _0x24bcb5, _0x196cef);
			return _0x4f5cba;
		},
		'changePage': function(_0x2a6496) {
			ig['game']['disableBtns']();
			_0x2a6496 = isNaN(_0x2a6496) ? ig['game']['director']['levels']['indexOf'](_0x2a6496) : _0x2a6496;
			ig['game']['transition']['close'](_0x2a6496);
		},
		'decideHHMMSS': function(_0x2d3578) {
			_0x2d3578 = this['countSec'](_0x2d3578);
			var _0x4afd73 = parseInt(_0x2d3578 / 0xe10),
				_0xcef409 = _0x2d3578 - 0xe10 * _0x4afd73;
			_0x2d3578 = parseInt(_0xcef409 / 0x3c);
			var _0xcef409 = parseInt(_0xcef409 - 0x3c * _0x2d3578),
				_0x162b45 = _0x4afd73 + '';
			0xa > _0x4afd73 && (_0x162b45 = '0' + _0x4afd73);
			_0x4afd73 = _0x2d3578 + '';
			0xa > _0x2d3578 && (_0x4afd73 = '0' + _0x2d3578);
			_0x2d3578 = _0xcef409 + '';
			0xa > _0xcef409 && (_0x2d3578 = '0' + _0xcef409);
			return {
				'h': _0x162b45,
				'm': _0x4afd73,
				's': _0x2d3578
			};
		},
		'countMin': function(_0x597650) {
			_0x597650 = this['countSec'](_0x597650);
			var _0x30e0ee = parseInt(_0x597650 / 0x3c);
			_0x597650 = parseInt(_0x597650 - 0x3c * _0x30e0ee);
			var _0x32a3a1 = _0x30e0ee + '';
			0xa > _0x30e0ee && (_0x32a3a1 = '0' + _0x30e0ee);
			_0x30e0ee = _0x597650 + '';
			0xa > _0x597650 && (_0x30e0ee = '0' + _0x597650);
			return _0x32a3a1 + ':' + _0x30e0ee;
		},
		'countSec': function(_0xe18ef5) {
			var _0xae34e7 = Math['floor'](_0xe18ef5),
				_0x4f7021 = _0xae34e7;
			0x0 < _0xae34e7 ? 0x0 < _0xe18ef5 % _0xae34e7 && (_0x4f7021 = _0xae34e7 + 0x1) : _0x4f7021 = _0xe18ef5 > _0xae34e7 ? _0x4f7021 + 0x1 : 0x0;
			return _0x4f7021;
		},
		'writeThousands': function(_0x3fe946) {
			var _0x31fa5f = _0x3fe946 + '';
			if (0x3e8 <= _0x3fe946) {
				_0x3fe946 = 0x0;
				for (var _0x5f34e3 = _0x31fa5f, _0x31fa5f = '', _0x52c742 = _0x5f34e3['length'] - 0x1; 0x0 <= _0x52c742; _0x52c742--) {
					var _0x46ea96 = _0x5f34e3[_0x52c742];
					0x0 == _0x3fe946 % 0x3 && _0x52c742 < _0x5f34e3['length'] - 0x1 && (_0x46ea96 += ',', _0x3fe946 = 0x0);
					_0x31fa5f = _0x46ea96 + _0x31fa5f;
					_0x3fe946++;
				}
			}
			return _0x31fa5f;
		},
		'upperCase': function(_0x31eedf) {
			return _0x31eedf[0x0]['toUpperCase']() + _0x31eedf['slice'](0x1);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.tweener')['requires']('impact.game', 'plugins.addon.state-addon')['defines'](function() {
	ig['Game']['inject']({
		'update': function() {
			this['parent']();
			for (var _0x30b5ad = 0x0; _0x30b5ad < ig['Tweener']['tweens']['length']; _0x30b5ad++) {
				var _0x163b95 = ig['Tweener']['tweens'][_0x30b5ad];
				_0x163b95['_running'] && _0x163b95['update']();
			}
		}
	});
	ig['Tweener'] = {
		'tweens': [],
		'addTween': function(_0x2851bf) {
			this['tweens']['push'](_0x2851bf);
		},
		'clearTweens': function() {
			this['tweens'] = [];
		},
		'removeTween': function(_0x3c012d) {
			_0x3c012d = this['tweens']['indexOf'](_0x3c012d);
			this['tweens']['splice'](_0x3c012d, 0x1);
		},
		'pause': function() {
			for (var _0x4501ce = 0x0; _0x4501ce < this['tweens']['length']; _0x4501ce++) this['tweens'][_0x4501ce]['pause']();
		},
		'resume': function() {
			for (var _0x4ef6fa = 0x0; _0x4ef6fa < this['tweens']['length']; _0x4ef6fa++) this['tweens'][_0x4ef6fa]['resume']();
		},
		'Easing': {
			'Linear': {
				'EaseNone': function(_0x8bfc98) {
					return _0x8bfc98;
				}
			},
			'Quadratic': {
				'EaseIn': function(_0x3b77af) {
					return _0x3b77af * _0x3b77af;
				},
				'EaseOut': function(_0x46b9b7) {
					return -_0x46b9b7 * (_0x46b9b7 - 0x2);
				},
				'EaseInOut': function(_0x3cf071) {
					return 0x1 > (_0x3cf071 *= 0x2) ? 0.5 * _0x3cf071 * _0x3cf071 : -0.5 * (--_0x3cf071 * (_0x3cf071 - 0x2) - 0x1);
				}
			},
			'Cubic': {
				'EaseIn': function(_0x565033) {
					return _0x565033 * _0x565033 * _0x565033;
				},
				'EaseOut': function(_0xf50a81) {
					return --_0xf50a81 * _0xf50a81 * _0xf50a81 + 0x1;
				},
				'EaseInOut': function(_0x231db0) {
					return 0x1 > (_0x231db0 *= 0x2) ? 0.5 * _0x231db0 * _0x231db0 * _0x231db0 : 0.5 * ((_0x231db0 -= 0x2) * _0x231db0 * _0x231db0 + 0x2);
				}
			},
			'Quartic': {
				'EaseIn': function(_0x2cc058) {
					return _0x2cc058 * _0x2cc058 * _0x2cc058 * _0x2cc058;
				},
				'EaseOut': function(_0x5474d6) {
					return -(--_0x5474d6 * _0x5474d6 * _0x5474d6 * _0x5474d6 - 0x1);
				},
				'EaseInOut': function(_0x1c4136) {
					return 0x1 > (_0x1c4136 *= 0x2) ? 0.5 * _0x1c4136 * _0x1c4136 * _0x1c4136 * _0x1c4136 : -0.5 * ((_0x1c4136 -= 0x2) * _0x1c4136 * _0x1c4136 * _0x1c4136 - 0x2);
				}
			},
			'Quintic': {
				'EaseIn': function(_0x19b175) {
					return _0x19b175 * _0x19b175 * _0x19b175 * _0x19b175 * _0x19b175;
				},
				'EaseOut': function(_0x33cecb) {
					return (_0x33cecb -= 0x1) * _0x33cecb * _0x33cecb * _0x33cecb * _0x33cecb + 0x1;
				},
				'EaseInOut': function(_0x224ba7) {
					return 0x1 > (_0x224ba7 *= 0x2) ? 0.5 * _0x224ba7 * _0x224ba7 * _0x224ba7 * _0x224ba7 * _0x224ba7 : 0.5 * ((_0x224ba7 -= 0x2) * _0x224ba7 * _0x224ba7 * _0x224ba7 * _0x224ba7 + 0x2);
				}
			},
			'Sinusoidal': {
				'EaseIn': function(_0x45507f) {
					return -Math['cos'](_0x45507f * Math['PI'] / 0x2) + 0x1;
				},
				'EaseOut': function(_0x14048c) {
					return Math['sin'](_0x14048c * Math['PI'] / 0x2);
				},
				'EaseInOut': function(_0x306d81) {
					return -0.5 * (Math['cos'](Math['PI'] * _0x306d81) - 0x1);
				}
			},
			'Exponential': {
				'EaseIn': function(_0x28926d) {
					return 0x0 == _0x28926d ? 0x0 : Math['pow'](0x2, 0xa * (_0x28926d - 0x1));
				},
				'EaseOut': function(_0x41e800) {
					return 0x1 == _0x41e800 ? 0x1 : -Math['pow'](0x2, -0xa * _0x41e800) + 0x1;
				},
				'EaseInOut': function(_0x3e84fa) {
					return 0x0 == _0x3e84fa ? 0x0 : 0x1 == _0x3e84fa ? 0x1 : 0x1 > (_0x3e84fa *= 0x2) ? 0.5 * Math['pow'](0x2, 0xa * (_0x3e84fa - 0x1)) : 0.5 * (-Math['pow'](0x2, -0xa * (_0x3e84fa - 0x1)) + 0x2);
				}
			},
			'Circular': {
				'EaseIn': function(_0xfbbe83) {
					return -(Math['sqrt'](0x1 - _0xfbbe83 * _0xfbbe83) - 0x1);
				},
				'EaseOut': function(_0x4f1571) {
					return Math['sqrt'](0x1 - --_0x4f1571 * _0x4f1571);
				},
				'EaseInOut': function(_0xcaa04c) {
					return 0x1 > (_0xcaa04c /= 0.5) ? -0.5 * (Math['sqrt'](0x1 - _0xcaa04c * _0xcaa04c) - 0x1) : 0.5 * (Math['sqrt'](0x1 - (_0xcaa04c -= 0x2) * _0xcaa04c) + 0x1);
				}
			},
			'Elastic': {
				'EaseIn': function(_0x3e5d43) {
					var _0x262aba, _0x47dc3d = 0.1,
						_0x53b7d8 = 0.4;
					if (0x0 == _0x3e5d43) return 0x0;
					if (0x1 == _0x3e5d43) return 0x1;
					_0x53b7d8 || (_0x53b7d8 = 0.3);
					!_0x47dc3d || 0x1 > _0x47dc3d ? (_0x47dc3d = 0x1, _0x262aba = _0x53b7d8 / 0x4) : _0x262aba = _0x53b7d8 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x47dc3d);
					return -(_0x47dc3d * Math['pow'](0x2, 0xa * (_0x3e5d43 -= 0x1)) * Math['sin'](0x2 * (_0x3e5d43 - _0x262aba) * Math['PI'] / _0x53b7d8));
				},
				'EaseOut': function(_0x287029) {
					var _0x104000, _0x334b64 = 0.1,
						_0x4810a8 = 0.4;
					if (0x0 == _0x287029) return 0x0;
					if (0x1 == _0x287029) return 0x1;
					_0x4810a8 || (_0x4810a8 = 0.3);
					!_0x334b64 || 0x1 > _0x334b64 ? (_0x334b64 = 0x1, _0x104000 = _0x4810a8 / 0x4) : _0x104000 = _0x4810a8 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x334b64);
					return _0x334b64 * Math['pow'](0x2, -0xa * _0x287029) * Math['sin'](0x2 * (_0x287029 - _0x104000) * Math['PI'] / _0x4810a8) + 0x1;
				},
				'EaseInOut': function(_0x472391) {
					var _0x38b0a8, _0x4f683a = 0.1,
						_0x3bf6ce = 0.4;
					if (0x0 == _0x472391) return 0x0;
					if (0x1 == _0x472391) return 0x1;
					_0x3bf6ce || (_0x3bf6ce = 0.3);
					!_0x4f683a || 0x1 > _0x4f683a ? (_0x4f683a = 0x1, _0x38b0a8 = _0x3bf6ce / 0x4) : _0x38b0a8 = _0x3bf6ce / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x4f683a);
					return 0x1 > (_0x472391 *= 0x2) ? -0.5 * _0x4f683a * Math['pow'](0x2, 0xa * (_0x472391 -= 0x1)) * Math['sin'](0x2 * (_0x472391 - _0x38b0a8) * Math['PI'] / _0x3bf6ce) : 0.5 * _0x4f683a * Math['pow'](0x2, -0xa * (_0x472391 -= 0x1)) * Math['sin'](0x2 * (_0x472391 - _0x38b0a8) * Math['PI'] / _0x3bf6ce) + 0x1;
				}
			},
			'Back': {
				'EaseIn': function(_0x25c856) {
					return _0x25c856 * _0x25c856 * (2.70158 * _0x25c856 - 1.70158);
				},
				'EaseOut': function(_0x38610c) {
					return (_0x38610c -= 0x1) * _0x38610c * (2.70158 * _0x38610c + 1.70158) + 0x1;
				},
				'EaseInOut': function(_0x30bfd4) {
					return 0x1 > (_0x30bfd4 *= 0x2) ? 0.5 * _0x30bfd4 * _0x30bfd4 * (3.5949095 * _0x30bfd4 - 2.5949095) : 0.5 * ((_0x30bfd4 -= 0x2) * _0x30bfd4 * (3.5949095 * _0x30bfd4 + 2.5949095) + 0x2);
				}
			},
			'Bounce': {
				'EaseIn': function(_0x517ac2) {
					return 0x1 - ig['Tweener']['Easing']['Bounce']['EaseOut'](0x1 - _0x517ac2);
				},
				'EaseOut': function(_0x48055c) {
					return (_0x48055c /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x48055c * _0x48055c : _0x48055c < 0x2 / 2.75 ? 7.5625 * (_0x48055c -= 1.5 / 2.75) * _0x48055c + 0.75 : _0x48055c < 2.5 / 2.75 ? 7.5625 * (_0x48055c -= 2.25 / 2.75) * _0x48055c + 0.9375 : 7.5625 * (_0x48055c -= 2.625 / 2.75) * _0x48055c + 0.984375;
				},
				'EaseInOut': function(_0x969899) {
					return 0.5 > _0x969899 ? 0.5 * ig['Tweener']['Easing']['Bounce']['EaseIn'](0x2 * _0x969899) : 0.5 * ig['Tweener']['Easing']['Bounce']['EaseOut'](0x2 * _0x969899 - 0x1) + 0.5;
				}
			}
		},
		'Loop': {
			'Revert': 0x1,
			'Reverse': 0x2
		}
	};
	Tweener = ig['Class']['extend']({
		'_running': !0x1,
		'_obj': {},
		'_objStart': {},
		'_objEnd': {},
		'_objDelta': {},
		'_props': {},
		'_started': !0x1,
		'_paused': !0x1,
		'_loopIndex': !0x1,
		'_elapsed': !0x1,
		'_timer': !0x1,
		'_value': 0x0,
		'_startCallbackCalled': !0x1,
		'_settings': {
			'duration': !0x1,
			'easing': ig['Tweener']['Easing']['Linear']['EaseNone'],
			'delay': !0x1,
			'onStart': !0x1,
			'onComplete': !0x1,
			'onUpdate': !0x1,
			'onPause': !0x1,
			'onResume': !0x1,
			'loop': ig['Tweener']['Loop']['Revert'],
			'loopCount': 0x0,
			'chains': []
		},
		'init': function(_0x2efd22, _0x224297, _0x2cfb9a) {
			this['_obj'] = _0x2efd22;
			_0x224297 && ig['merge'](this['_props'], _0x224297);
			_0x2cfb9a && ig['merge'](this['_settings'], _0x2cfb9a);
		},
		'start': function() {
			ig['Tweener']['addTween'](this);
			this['_loopIndex'] = this['_settings']['loopCount'];
			this['_started'] = this['_running'] = !0x0;
			this['_elapsed'] = 0x0;
			this['_timer'] = new ig['Timer']();
			this['_value'] = 0x0;
			for (var _0x14e135 in this['_props']) this['_initEnd'](_0x14e135, this['_props'], this['_objEnd']);
			for (var _0x1b4b8c in this['_objEnd']) this['_initStart'](_0x1b4b8c, this['_objEnd'], this['_obj'], this['_objStart']), this['_initDelta'](_0x1b4b8c, this['_objDelta'], this['_obj'], this['_objEnd']);
			this['_settings']['onStart'] && (this['_startCallbackCalled'] = !0x0);
			return this;
		},
		'_isEmptyArray': function(_0x19b50a) {
			return !(void 0x0 !== typeof _0x19b50a && 0x0 < _0x19b50a['length']);
		},
		'_initEnd': function(_0x25656a, _0x24a75f, _0x1d364b) {
			if ('object' !== typeof _0x24a75f[_0x25656a]) _0x1d364b[_0x25656a] = _0x24a75f[_0x25656a];
			else
				for (subprop in _0x24a75f[_0x25656a]) _0x1d364b[_0x25656a] || (_0x1d364b[_0x25656a] = {}), this['_initEnd'](subprop, _0x24a75f[_0x25656a], _0x1d364b[_0x25656a]);
		},
		'_initStart': function(_0x22ab8a, _0x42c9ec, _0x316256, _0x527d70) {
			if ('object' !== typeof _0x316256[_0x22ab8a]) 'undefined' !== typeof _0x42c9ec[_0x22ab8a] && (_0x527d70[_0x22ab8a] = _0x316256[_0x22ab8a]);
			else
				for (var _0x5ea0e0 in _0x316256[_0x22ab8a]) _0x527d70[_0x22ab8a] || (_0x527d70[_0x22ab8a] = {}), 'undefined' !== typeof _0x42c9ec[_0x22ab8a] && this['_initStart'](_0x5ea0e0, _0x42c9ec[_0x22ab8a], _0x316256[_0x22ab8a], _0x527d70[_0x22ab8a]);
		},
		'_initDelta': function(_0x454ad6, _0x318e6e, _0x2687f9, _0x34c567) {
			if ('object' !== typeof _0x34c567[_0x454ad6]) _0x318e6e[_0x454ad6] = _0x34c567[_0x454ad6] - _0x2687f9[_0x454ad6];
			else
				for (var _0x4ce9d7 in _0x34c567[_0x454ad6]) _0x318e6e[_0x454ad6] || (_0x318e6e[_0x454ad6] = {}), this['_initDelta'](_0x4ce9d7, _0x318e6e[_0x454ad6], _0x2687f9[_0x454ad6], _0x34c567[_0x454ad6]);
		},
		'_propSet': function(_0x95d7ab, _0x2ed35e, _0x18125e) {
			if ('object' !== typeof _0x2ed35e[_0x95d7ab]) _0x18125e[_0x95d7ab] = _0x2ed35e[_0x95d7ab];
			else
				for (var _0x3c26e0 in _0x2ed35e[_0x95d7ab]) _0x18125e[_0x95d7ab] || (_0x18125e[_0x95d7ab] = {}), this['_propSet'](_0x3c26e0, _0x2ed35e[_0x95d7ab], _0x18125e[_0x95d7ab]);
		},
		'_propUpdate': function(_0x2dbe8b, _0x2c08c3, _0x2088a8, _0x17fb33, _0x3f04a2) {
			if ('object' !== typeof _0x2088a8[_0x2dbe8b]) _0x2c08c3[_0x2dbe8b] = 'undefined' != typeof _0x2088a8[_0x2dbe8b] ? _0x2088a8[_0x2dbe8b] + _0x17fb33[_0x2dbe8b] * _0x3f04a2 : _0x2c08c3[_0x2dbe8b];
			else
				for (var _0x1d17d9 in _0x2088a8[_0x2dbe8b]) this['_propUpdate'](_0x1d17d9, _0x2c08c3[_0x2dbe8b], _0x2088a8[_0x2dbe8b], _0x17fb33[_0x2dbe8b], _0x3f04a2);
		},
		'update': function() {
			if (!this['_running']) return !0x1;
			if (this['_settings']['delay']) {
				if (this['_timer'] && this['_timer']['delta']() < this['_settings']['delay']) return;
				this['_settings']['delay'] = 0x0;
				this['_timer']['reset']();
			}
			this['_startCallbackCalled'] && (this['_settings']['onStart'](this['_obj'], this['_value']), this['_startCallbackCalled'] = !0x1);
			var _0x288467 = (this['_timer']['delta']() + this['_elapsed']) / this['_settings']['duration'],
				_0x288467 = 0x1 < _0x288467 ? 0x1 : _0x288467,
				_0x32e2cf = this['_settings']['easing'](_0x288467);
			this['_value'] = _0x32e2cf;
			for (var _0x237b94 in this['_objDelta']) this['_propUpdate'](_0x237b94, this['_obj'], this['_objStart'], this['_objDelta'], _0x32e2cf);
			if (this['_settings']['onUpdate']) this['_settings']['onUpdate'](this['_obj'], this['_value']);
			if (0x1 <= _0x288467)
				if (0x0 === this['_loopIndex'] || !this['_settings']['loop']) {
					this['_running'] = this['_started'] = !0x1;
					this['value'] = 0x0;
					if (this['_settings']['onComplete']) this['_settings']['onComplete'](this['_obj'], this['_value']);
					if (!this['_isEmptyArray'](this['_settings']['chains']))
						for (var _0x2d6cee = 0x0; _0x2d6cee < this['_settings']['chains']['length']; _0x2d6cee++) this['_settings']['chains'][_0x2d6cee]['start']();
					ig['Tweener']['removeTween'](this);
				} else if (this['_settings']['loop'] === ig['Tweener']['Loop']['Revert']) {
				for (var _0x1c3819 in this['_objStart']) this['_propSet'](_0x1c3819, this['_objStart'], this['_obj']);
				this['_elapsed'] = 0x0;
				this['_timer']['reset'](); - 0x1 != this['_loopIndex'] && this['_loopIndex']--;
			} else if (this['_settings']['loop'] === ig['Tweener']['Loop']['Reverse']) {
				_0x288467 = {};
				_0x32e2cf = {};
				ig['merge'](_0x288467, this['_objEnd']);
				ig['merge'](_0x32e2cf, this['_objStart']);
				ig['merge'](this['_objStart'], _0x288467);
				ig['merge'](this['_objEnd'], _0x32e2cf);
				for (_0x2d6cee in this['_objEnd']) this['_initDelta'](_0x2d6cee, this['_objDelta'], this['_obj'], this['_objEnd']);
				this['_elapsed'] = 0x0;
				this['_timer']['reset'](); - 0x1 != this['_loopIndex'] && this['_loopIndex']--;
			}
		},
		'pause': function() {
			if (this['_running'] && (this['_running'] = !0x1, this['_timer'] && this['_timer']['delta'] && (this['_elapsed'] += this['_timer']['delta']()), this['_settings']['onPause'])) this['_settings']['onPause'](this['_obj'], this['_value']);
			return this;
		},
		'resume': function() {
			if (this['_started'] && !this['_running'] && (this['_running'] = !0x0, this['_timer'] && this['_timer']['delta'] && this['_timer']['reset'](), this['_settings']['onResume'])) this['_settings']['onResume'](this['_obj'], this['_value']);
			return this;
		},
		'stop': function(_0x462d30) {
			_0x462d30 ? (this['_loopIndex'] = 0x0, this['_elapsed'] += this['_settings']['duration'], this['_running'] = !0x0, this['update']()) : (this['_running'] = this['_started'] = !0x1, this['value'] = 0x0, ig['Tweener']['removeTween'](this));
			return this;
		},
		'to': function(_0x4c9202, _0x499ea3) {
			ig['merge'](this['_props'], _0x4c9202);
			if (null !== _0x499ea3 || void 0x0 !== _0x499ea3) this['_settings']['duration'] = _0x499ea3;
			return this;
		},
		'delay': function(_0x78bb66) {
			this['_settings']['delay'] = _0x78bb66;
			return this;
		},
		'speed': function(_0x646ea4) {
			this['_settings']['duration'] = _0x646ea4;
			return this;
		},
		'easing': function(_0xef3797) {
			this['_settings']['easing'] = _0xef3797;
			return this;
		},
		'yoyo': function(_0x53c411) {
			this['_settings']['loop'] = _0x53c411 ? ig['Tweener']['Loop']['Reverse'] : ig['Tweener']['Loop']['Revert'];
			return this;
		},
		'repeat': function(_0x18a3c3) {
			this['_settings']['loopCount'] = _0x18a3c3 ? _0x18a3c3 : 0x0;
			return this;
		},
		'onStart': function(_0x32de39) {
			this['_settings']['onStart'] = _0x32de39;
			return this;
		},
		'onUpdate': function(_0x32236e) {
			this['_settings']['onUpdate'] = _0x32236e;
			return this;
		},
		'onPause': function(_0x51064a) {
			this['_settings']['onPause'] = _0x51064a;
			return this;
		},
		'onResume': function(_0x5c04a3) {
			this['_settings']['onResume'] = _0x5c04a3;
			return this;
		},
		'onComplete': function(_0x1c9d35) {
			this['_settings']['onComplete'] = _0x1c9d35;
			return this;
		},
		'addChain': function(_0x48a4ba) {
			0x1 > this['_settings']['chains']['filter'](function(_0x272f6a) {
				return _0x48a4ba === _0x272f6a;
			})['length'] && this['_settings']['chains']['push'](_0x48a4ba);
			return this;
		},
		'removeChain': function(_0x6b5885) {
			_0x6b5885 = this['_settings']['chains']['indexOf'](_0x6b5885);
			0x0 <= _0x6b5885 && this['_settings']['chains']['splice'](_0x6b5885, 0x1);
			return this;
		},
		'setChain': function(_0x4c57ee) {
			for (var _0x5391d6 = 0x0; _0x5391d6 < _0x4c57ee['length']; _0x5391d6++) this['addChain'](_0x4c57ee[_0x5391d6]);
			return this;
		},
		'clearChain': function() {
			this['_settings']['chains'] = [];
			return this;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.data.color-rgb')['defines'](function() {
	ColorRGB = function(_0x1a32cb, _0x24633c, _0x27daf1, _0x3362c7) {
		this['r'] = _0x1a32cb || 0x0;
		this['g'] = _0x24633c || 0x0;
		this['b'] = _0x27daf1 || 0x0;
		this['a'] = _0x3362c7 || 0x0;
	};
	ColorRGB['prototype'] = {
		'setRandomColor': function() {
			this['r'] = Math['round'](0xff * Math['random']());
			this['g'] = Math['round'](0xff * Math['random']());
			this['b'] = Math['round'](0xff * Math['random']());
		},
		'getStyle': function() {
			return 'rgba(' + this['r'] + ',' + this['g'] + ',' + this['b'] + ',' + this['a'] + ')';
		},
		'getHex': function() {
			for (var _0x26cfe7 = this['r']['toString'](0x10), _0xcc0b41 = this['g']['toString'](0x10), _0x5583f2 = this['b']['toString'](0x10); 0x2 > _0x26cfe7['length'];) _0x26cfe7 = '0' + _0x26cfe7;
			for (; 0x2 > _0xcc0b41['length'];) _0xcc0b41 = '0' + _0xcc0b41;
			for (; 0x2 > _0x5583f2['length'];) _0x5583f2 = '0' + _0x5583f2;
			return '#' + _0x26cfe7 + _0xcc0b41 + _0x5583f2;
		},
		'getInvertedColor': function() {
			return new ColorRGB(0xff - this['r'], 0xff - this['g'], 0xff - this['b'], 0xff - this['a']);
		},
		'clone': function() {
			return new ColorRGB(this['r'], this['g'], this['b'], this['a']);
		}
	};
});
this['START_BRANDING_SPLASH'];
ig['baked'] = !0x0;
ig['module']('plugins.branding.splash')['requires']('impact.impact', 'impact.entity')['defines'](function() {
	ig['BrandingSplash'] = ig['Class']['extend']({
		'init': function() {
			ig['game']['spawnEntity'](EntityBranding, 0x0, 0x0);
			console['log']('spawn\x20branding');
		}
	});
	EntityBranding = ig['Entity']['extend']({
		'gravityFactor': 0x0,
		'size': {
			'x': 0x20,
			'y': 0x20
		},
		'splash': new ig['Image']('branding/splash1.png'),
		'init': function(_0x424fd0, _0x288283, _0x3ba67d) {
			this['parent'](_0x424fd0, _0x288283, _0x3ba67d);
			0x140 >= ig['system']['width'] ? (this['size']['x'] = 0x140, this['size']['y'] = 0xc8) : (this['size']['x'] = 0x1e0, this['size']['y'] = 0xf0);
			this['pos']['x'] = (ig['system']['width'] - this['size']['x']) / 0x2;
			this['pos']['y'] = -this['size']['y'] - 0xc8;
			this['endPosY'] = (ig['system']['height'] - this['size']['y']) / 0x2;
			_0x424fd0 = this['tween']({
				'pos': {
					'y': this['endPosY']
				}
			}, 0.5, {
				'easing': ig['Tween']['Easing']['Bounce']['EaseIn']
			});
			_0x288283 = this['tween']({}, 2.5, {
				'onComplete': function() {
					ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']);
				}
			});
			_0x424fd0['chain'](_0x288283);
			_0x424fd0['start']();
			this['currentAnim'] = this['anims']['idle'];
		},
		'createClickableLayer': function() {
			console['log']('Build\x20clickable\x20layer');
			this['checkClickableLayer']('branding-splash', _SETTINGS['Branding']['Logo']['Link'], _SETTINGS['Branding']['Logo']['NewWindow']);
		},
		'doesClickableLayerExist': function(_0x3f6aea) {
			for (k in dynamicClickableEntityDivs)
				if (k == _0x3f6aea) return !0x0;
			return !0x1;
		},
		'checkClickableLayer': function(_0x8df50d, _0x3961f6, _0x1f7341) {
			'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x8df50d) ? (ig['game']['showOverlay']([_0x8df50d]), $('#' + _0x8df50d)['find']('[href]')['attr']('href', _0x3961f6)) : this['createClickableOutboundLayer'](_0x8df50d, _0x3961f6, 'media/graphics/misc/invisible.png', _0x1f7341));
		},
		'createClickableOutboundLayer': function(_0x2c2ae2, _0x53272b, _0x34555c, _0x5be947) {
			var _0x2be1ed = ig['$new']('div');
			_0x2be1ed['id'] = _0x2c2ae2;
			document['body']['appendChild'](_0x2be1ed);
			_0x2be1ed = $('#' + _0x2be1ed['id']);
			_0x2be1ed['css']('float', 'left');
			_0x2be1ed['css']('position', 'absolute');
			if (ig['ua']['mobile']) {
				var _0x51e812 = window['innerHeight'] / mobileHeight,
					_0x166f54 = window['innerWidth'] / mobileWidth;
				_0x2be1ed['css']('left', this['pos']['x'] * _0x166f54);
				_0x2be1ed['css']('top', this['pos']['y'] * _0x51e812);
				_0x2be1ed['css']('width', this['size']['x'] * _0x166f54);
				_0x2be1ed['css']('height', this['size']['y'] * _0x51e812);
			} else _0x51e812 = w / 0x2 - destW / 0x2, _0x166f54 = h / 0x2 - destH / 0x2, console['log'](_0x51e812, _0x166f54), _0x2be1ed['css']('left', _0x51e812 + this['pos']['x'] * multiplier), _0x2be1ed['css']('top', _0x166f54 + this['pos']['y'] * multiplier), _0x2be1ed['css']('width', this['size']['x'] * multiplier), _0x2be1ed['css']('height', this['size']['y'] * multiplier);
			_0x5be947 ? _0x2be1ed['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0x53272b + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x34555c + '\x27></a>') : _0x2be1ed['html']('<a\x20href=\x27' + _0x53272b + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x34555c + '\x27></a>');
			dynamicClickableEntityDivs[_0x2c2ae2] = {};
			dynamicClickableEntityDivs[_0x2c2ae2]['width'] = this['size']['x'] * multiplier;
			dynamicClickableEntityDivs[_0x2c2ae2]['height'] = this['size']['y'] * multiplier;
			dynamicClickableEntityDivs[_0x2c2ae2]['entity_pos_x'] = this['pos']['x'];
			dynamicClickableEntityDivs[_0x2c2ae2]['entity_pos_y'] = this['pos']['y'];
		},
		'draw': function() {
			ig['system']['context']['fillStyle'] = '#ffffff';
			ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
			ig['system']['context']['fillStyle'] = '#000';
			ig['system']['context']['font'] = '12px\x20Arial';
			ig['system']['context']['textAlign'] = 'left';
			0x140 >= ig['system']['width'] ? ig['system']['context']['fillText']('powered\x20by\x20MarketJS', ig['system']['width'] - 0x96, ig['system']['height'] - 0xf) : ig['system']['context']['fillText']('powered\x20by\x20MarketJS', ig['system']['width'] - 0xa0, ig['system']['height'] - 0xf);
			this['parent']();
			this['splash'] && ig['system']['context']['drawImage'](this['splash']['data'], 0x0, 0x0, this['splash']['data']['width'], this['splash']['data']['height'], this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
		}
	});
});
this['END_BRANDING_SPLASH'];
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button')['requires']('impact.entity', 'plugins.data.vector')['defines'](function() {
	EntityButton = ig['Entity']['extend']({
		'collides': ig['Entity']['COLLIDES']['NEVER'],
		'type': ig['Entity']['TYPE']['A'],
		'size': new Vector2(0x30, 0x30),
		'fillColor': null,
		'zIndex': 0x17318,
		'init': function(_0x13531b, _0x513557, _0x4f6bdd) {
			this['parent'](_0x13531b, _0x513557, _0x4f6bdd);
			!ig['global']['wm'] && !isNaN(_0x4f6bdd['zIndex']) && (this['zIndex'] = _0x4f6bdd['zIndex']);
			_0x13531b = Math['floor'](0x100 * Math['random']());
			_0x513557 = Math['floor'](0x100 * Math['random']());
			_0x4f6bdd = Math['floor'](0x100 * Math['random']());
			this['fillColor'] = 'rgba(' + _0x13531b + ',' + _0x4f6bdd + ',' + _0x513557 + ',1)';
		},
		'clicked': function() {
			throw 'no\x20implementation\x20on\x20clicked()';
		},
		'clicking': function() {
			throw 'no\x20implementation\x20on\x20clicking()';
		},
		'released': function() {
			throw 'no\x20implementation\x20on\x20released()';
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.clickable-div-layer')['requires']('plugins.data.vector')['defines'](function() {
	ClickableDivLayer = ig['Class']['extend']({
		'pos': new Vector2(0x0, 0x0),
		'size': new Vector2(0x0, 0x0),
		'identifier': null,
		'invisImagePath': 'media/graphics/misc/invisible.png',
		'init': function(_0x11a4b8) {
			this['pos'] = new Vector2(_0x11a4b8['pos']['x'], _0x11a4b8['pos']['y']);
			this['size'] = new Vector2(_0x11a4b8['size']['x'], _0x11a4b8['size']['y']);
			var _0x3479ff = 'more-games',
				_0x12bb1f = 'www.google.com',
				_0x49bb0f = !0x1;
			_0x11a4b8['div_layer_name'] && (_0x3479ff = _0x11a4b8['div_layer_name']);
			_0x11a4b8['link'] && (_0x12bb1f = _0x11a4b8['link']);
			_0x11a4b8['newWindow'] && (_0x49bb0f = _0x11a4b8['newWindow']);
			this['createClickableLayer'](_0x3479ff, _0x12bb1f, _0x49bb0f);
		},
		'createClickableLayer': function(_0x74a3f6, _0x52ef69, _0x5577b2) {
			this['identifier'] = _0x74a3f6;
			var _0x1974af = ig['domHandler']['getElementById']('#' + _0x74a3f6);
			_0x1974af ? (ig['domHandler']['show'](_0x1974af), ig['domHandler']['attr'](_0x1974af, 'href', _0x52ef69)) : this['createClickableOutboundLayer'](_0x74a3f6, _0x52ef69, this['invisImagePath'], _0x5577b2);
		},
		'update': function(_0x58dc5d, _0x4b84f3) {
			this['pos']['x'] === _0x58dc5d && this['pos']['y'] === _0x4b84f3 || (ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']] = {}, ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['width'] = this['size']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['height'] = this['size']['y'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_y'] = this['pos']['y']);
		},
		'createClickableOutboundLayer': function(_0x4d22bf, _0x14789d, _0x3814c1, _0x42767d) {
			var _0x55b184 = ig['domHandler']['create']('div');
			ig['domHandler']['attr'](_0x55b184, 'id', _0x4d22bf);
			var _0x5b5c21 = ig['domHandler']['create']('a');
			_0x42767d ? (ig['domHandler']['attr'](_0x5b5c21, 'href', _0x14789d), ig['domHandler']['attr'](_0x5b5c21, 'target', '_blank')) : ig['domHandler']['attr'](_0x5b5c21, 'href', _0x14789d);
			_0x14789d = ig['domHandler']['create']('img');
			ig['domHandler']['css'](_0x14789d, {
				'width': '100%',
				'height': '100%'
			});
			ig['domHandler']['attr'](_0x14789d, 'src', _0x3814c1);
			_0x3814c1 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
			if (ig['ua']['mobile']) {
				_0x42767d = ig['domHandler']['getElementById']('#canvas');
				_0x42767d = ig['domHandler']['getOffsets'](_0x42767d);
				var _0x2b99f1 = _0x42767d['left'],
					_0x333091 = _0x42767d['top'];
				console['log'](_0x42767d['left']);
				ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x42767d = Math['floor'](_0x2b99f1 + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x333091 = Math['floor'](_0x333091 + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x2b99f1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x3814c1 = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x42767d = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x333091 = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x2b99f1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x3814c1 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
			} else _0x42767d = ig['domHandler']['getElementById']('#canvas'), _0x42767d = ig['domHandler']['getOffsets'](_0x42767d), _0x2b99f1 = _0x42767d['left'], _0x333091 = _0x42767d['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x42767d = Math['floor'](_0x2b99f1 + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x333091 = Math['floor'](_0x333091 + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x2b99f1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x3814c1 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x42767d = Math['floor'](_0x2b99f1 + this['pos']['x'] * _0x3814c1) + 'px', _0x333091 = Math['floor'](_0x333091 + this['pos']['y'] * _0x3814c1) + 'px', _0x2b99f1 = Math['floor'](this['size']['x'] * _0x3814c1) + 'px', _0x3814c1 = Math['floor'](this['size']['y'] * _0x3814c1) + 'px');
			ig['domHandler']['css'](_0x55b184, {
				'float': 'left',
				'position': 'absolute',
				'left': _0x42767d,
				'top': _0x333091,
				'width': _0x2b99f1,
				'height': _0x3814c1,
				'z-index': 0x3
			});
			ig['domHandler']['addEvent'](_0x55b184, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1);
			ig['domHandler']['appendChild'](_0x5b5c21, _0x14789d);
			ig['domHandler']['appendChild'](_0x55b184, _0x5b5c21);
			ig['domHandler']['appendToBody'](_0x55b184);
			ig['sizeHandler']['dynamicClickableEntityDivs'][_0x4d22bf] = {};
			ig['sizeHandler']['dynamicClickableEntityDivs'][_0x4d22bf]['width'] = this['size']['x'];
			ig['sizeHandler']['dynamicClickableEntityDivs'][_0x4d22bf]['height'] = this['size']['y'];
			ig['sizeHandler']['dynamicClickableEntityDivs'][_0x4d22bf]['entity_pos_x'] = this['pos']['x'];
			ig['sizeHandler']['dynamicClickableEntityDivs'][_0x4d22bf]['entity_pos_y'] = this['pos']['y'];
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-branding-logo')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
	EntityButtonBrandingLogo = EntityButton['extend']({
		'type': ig['Entity']['TYPE']['A'],
		'gravityFactor': 0x0,
		'logo': new ig['AnimationSheet']('branding/logo.png', _SETTINGS['Branding']['Logo']['Width'], _SETTINGS['Branding']['Logo']['Height']),
		'zIndex': 0x2711,
		'size': {
			'x': 0x40,
			'y': 0x42
		},
		'clickableLayer': null,
		'link': null,
		'newWindow': !0x1,
		'div_layer_name': 'branding-logo',
		'name': 'brandinglogo',
		'init': function(_0x42ba1f, _0x135d33, _0xb18a0d) {
			this['parent'](_0x42ba1f, _0x135d33, _0xb18a0d);
			if (!ig['global']['wm']) {
				if ('undefined' == typeof wm)
					if (_SETTINGS['Branding']['Logo']['Enabled']) this['size']['x'] = _SETTINGS['Branding']['Logo']['Width'], this['size']['y'] = _SETTINGS['Branding']['Logo']['Height'], this['anims']['idle'] = new ig['Animation'](this['logo'], 0x0, [0x0], !0x0), this['currentAnim'] = this['anims']['idle'], _0xb18a0d && _0xb18a0d['centralize'] && (this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2, console['log']('centralize\x20true\x20...\x20centering\x20branded\x20logo\x20...')), _SETTINGS['Branding']['Logo']['LinkEnabled'] && (this['link'] = _SETTINGS['Branding']['Logo']['Link'], this['newWindow'] = _SETTINGS['Branding']['Logo']['NewWindow'], this['clickableLayer'] = new ClickableDivLayer(this));
					else {
						this['kill']();
						return;
					} this['div_layer_name'] = _0xb18a0d['div_layer_name'] ? _0xb18a0d['div_layer_name'] : 'branding-logo';
			}
		},
		'show': function() {
			var _0x2d90e8 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
			ig['domHandler']['show'](_0x2d90e8);
		},
		'hide': function() {
			var _0x5c5f0c = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
			ig['domHandler']['hide'](_0x5c5f0c);
		},
		'clicked': function() {},
		'clicking': function() {},
		'released': function() {}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.branding-logo-placeholder')['requires']('impact.entity', 'game.entities.buttons.button-branding-logo')['defines'](function() {
	EntityBrandingLogoPlaceholder = ig['Entity']['extend']({
		'gravityFactor': 0x0,
		'size': {
			'x': 0x20,
			'y': 0x20
		},
		'_wmDrawBox': !0x0,
		'_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
		'init': function(_0x83dc8e, _0x3f98f2, _0x506e5f) {
			this['parent'](_0x83dc8e, _0x3f98f2, _0x506e5f);
			if (_0x506e5f) switch (console['log']('settings\x20found\x20...\x20using\x20that\x20div\x20layer\x20name'), _0x83dc8e = _0x506e5f['div_layer_name'], console['log']('settings.centralize:', _0x506e5f['centralize']), _0x506e5f['centralize']) {
				case 'true':
					console['log']('centralize\x20true');
					centralize = !0x0;
					break;
				case 'false':
					console['log']('centralize\x20false');
					centralize = !0x1;
					break;
				default:
					console['log']('default\x20...\x20centralize\x20false'), centralize = !0x1;
			} else _0x83dc8e = 'branding-logo', centralize = !0x1;
			if ('undefined' == typeof wm) {
				if (_SETTINGS['Branding']['Logo']['Enabled']) try {
					ig['game']['spawnEntity'](EntityButtonBrandingLogo, this['pos']['x'], this['pos']['y'], {
						'div_layer_name': _0x83dc8e,
						'centralize': centralize
					});
				} catch (_0x4539ea) {
					console['log'](_0x4539ea);
				}
				this['kill']();
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-more-games')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
	EntityButtonMoreGames = EntityButton['extend']({
		'type': ig['Entity']['TYPE']['A'],
		'gravityFactor': 0x0,
		'logo': new ig['AnimationSheet']('media/graphics/sprites/btn_more_games.png', 0x40, 0x42),
		'size': {
			'x': 0x40,
			'y': 0x42
		},
		'zIndex': 0x2ee,
		'clickableLayer': null,
		'link': null,
		'newWindow': !0x1,
		'div_layer_name': 'more-games',
		'name': 'moregames',
		'init': function(_0x1842cd, _0x53e8d3, _0x234741) {
			this['parent'](_0x1842cd, _0x53e8d3, _0x234741);
			ig['global']['wm'] || (this['div_layer_name'] = _0x234741['div_layer_name'] ? _0x234741['div_layer_name'] : 'more-games', _SETTINGS['MoreGames']['Enabled'] ? (this['anims']['idle'] = new ig['Animation'](this['logo'], 0x0, [0x0], !0x0), this['currentAnim'] = this['anims']['idle'], _SETTINGS['MoreGames']['Link'] && (this['link'] = _SETTINGS['MoreGames']['Link']), _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']());
		},
		'show': function() {
			var _0x529825 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
			ig['domHandler']['show'](_0x529825);
		},
		'hide': function() {
			var _0x2af032 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
			ig['domHandler']['hide'](_0x2af032);
		},
		'clicked': function() {},
		'clicking': function() {},
		'released': function() {}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.opening-shield')['requires']('impact.entity')['defines'](function() {
	EntityOpeningShield = ig['Entity']['extend']({
		'size': {
			'x': 0x30,
			'y': 0x30
		},
		'move': 0x0,
		'mIconAnim': 0x0,
		'shieldAnim': 0x0,
		'titleAnim': 0x0,
		'shieldImage': new ig['Image']('media/graphics/opening/shield.png'),
		'mIconImage': new ig['Image']('media/graphics/opening/m_icon.png'),
		'titleImage': new ig['Image']('media/graphics/opening/title.png'),
		'init': function(_0x5befec, _0x5693f1, _0x5e3ec1) {
			this['parent'](_0x5befec, _0x5693f1, _0x5e3ec1);
		},
		'ready': function() {
			if (!ig['wm'])
				if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
					this['initTimer'] = new ig['Timer'](0.1);
					try {
						ig['soundHandler']['playSound'](ig['soundHandler']['SOUNDID']['openingSound']);
					} catch (_0x5852ef) {
						console['log'](_0x5852ef);
					}
				} else ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1, this['kill']();
		},
		'update': function() {
			this['parent']();
			this['updateOriginalShieldOpening']();
		},
		'draw': function() {
			this['parent']();
			ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()), this['drawOriginalShieldOpening']());
		},
		'updateOriginalShieldOpening': function() {
			this['initTimer'] && 0x0 < this['initTimer']['delta']() && (this['initTimer'] = null, this['sheildTimer'] = new ig['Timer'](0.05));
			this['sheildTimer'] && 0x0 < this['sheildTimer']['delta']() && (0x3 > this['shieldAnim'] ? (this['shieldAnim']++, this['sheildTimer']['reset']()) : (this['sheildTimer'] = null, this['moveTimer'] = new ig['Timer'](0.001), this['mIconTimer'] = new ig['Timer'](0.05), this['titleTimer'] = new ig['Timer'](0.15)));
			this['moveTimer'] && 0x0 < this['moveTimer']['delta']() && (this['move'] += 0.3, this['moveTimer']['reset']());
			this['mIconTimer'] && 0x0 < this['mIconTimer']['delta']() && (0xc > this['mIconAnim'] ? (this['mIconAnim']++, this['moveTimer']['reset']()) : this['mIconTimer'] = null);
			this['titleTimer'] && 0x0 < this['titleTimer']['delta']() && (0xb > this['titleAnim'] ? (this['titleAnim']++, this['titleTimer']['reset']()) : (this['titleTimer'] = null, this['nextLevelTimer'] = new ig['Timer'](0x1)));
			this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null, ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1);
		},
		'drawOriginalShieldOpening': function() {
			if (this['moveTimer']) {
				var _0xb6cfea = ig['system']['context'];
				_0xb6cfea['save']();
				var _0x320b8d = ig['system']['width'] / 0x2,
					_0x3e3745 = ig['system']['height'] / 0x2;
				_0xb6cfea['translate'](_0x320b8d, _0x3e3745);
				_0xb6cfea['rotate'](this['move'] * Math['PI'] / 0xb4);
				_0xb6cfea['beginPath']();
				_0xb6cfea['moveTo'](0x0, 0x0);
				for (var _0xa3f9f4 = 0x0, _0x400236 = 0x1; 0x30 >= _0x400236; _0x400236 += 0x1) _0xb6cfea['lineTo'](0x0 + 0x320 * Math['cos'](0x2 * _0x400236 * Math['PI'] / 0x30), 0x0 + 0x320 * Math['sin'](0x2 * _0x400236 * Math['PI'] / 0x30)), _0xa3f9f4++, 0x2 == _0xa3f9f4 && (_0xa3f9f4 = 0x0, _0xb6cfea['lineTo'](0x0, 0x0));
				_0xb6cfea['translate'](-_0x320b8d, -_0x3e3745);
				_0x320b8d = _0xb6cfea['createRadialGradient'](_0x320b8d, _0x3e3745, 0x64, _0x320b8d, _0x3e3745, 0xfa);
				_0x320b8d['addColorStop'](0x0, 'rgba(255,255,255,0.1)');
				_0x320b8d['addColorStop'](0x1, 'rgba(0,0,0,0)');
				_0xb6cfea['fillStyle'] = _0x320b8d;
				_0xb6cfea['fill']();
				_0xb6cfea['restore']();
			}
			this['shieldImage']['drawTile'](ig['system']['width'] / 0x2 - 0x5b, 0x0 - (0x300 - ig['system']['height']) / 0x2, this['shieldAnim'], 0xb6, 0x300);
			this['moveTimer'] && (this['mIconImage']['drawTile'](ig['system']['width'] / 0x2 - 0x60, ig['system']['height'] / 0x2 - 0x46, this['mIconAnim'], 0xa6, 0xa0), this['titleImage']['drawTile'](ig['system']['width'] / 0x2 - 0xcc, ig['system']['height'] / 0x2 + 0x64, this['titleAnim'], 0x199, 0x4c));
			ig['system']['context']['globalAlpha'] = 0x1;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.opening-kitty')['requires']('impact.entity')['defines'](function() {
	EntityOpeningKitty = ig['Entity']['extend']({
		'size': {
			'x': 0x30,
			'y': 0x30
		},
		'kittyAnim': -0x1,
		'kittyImage': new ig['Image']('media/graphics/opening/kitty.png'),
		'kittyTitleImage': new ig['Image']('media/graphics/opening/kittytitle.png'),
		'soundKey': 'kittyopeningSound',
		'init': function(_0x516b7e, _0x4727c3, _0x22a6eb) {
			this['parent'](_0x516b7e, _0x4727c3, _0x22a6eb);
		},
		'ready': function() {
			if (!ig['wm'])
				if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
					this['initTimer'] = new ig['Timer'](0.1);
					try {
						ig['soundHandler']['sfxPlayer']['play'](this['soundKey']);
					} catch (_0x40859f) {
						console['log'](_0x40859f);
					}
				} else ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1, this['kill']();
		},
		'update': function() {
			this['parent']();
			this['updateKittyOpening']();
		},
		'draw': function() {
			this['parent']();
			ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()), this['drawKittyOpening']());
		},
		'updateKittyOpening': function() {
			this['initTimer'] && 0x0 < this['initTimer']['delta']() && (this['initTimer'] = null, this['kittyTimer'] = new ig['Timer'](0.15));
			this['kittyTimer'] && 0x0 < this['kittyTimer']['delta']() && (0x7 > this['kittyAnim'] ? (this['kittyAnim']++, this['kittyTimer']['reset']()) : (this['kittyTimer'] = null, this['nextLevelTimer'] = new ig['Timer'](0x2)));
			this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null, ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1);
		},
		'drawKittyOpening': function() {
			var _0x101a53 = ig['system']['context']['createLinearGradient'](0x0, 0x0, 0x0, ig['system']['height']);
			_0x101a53['addColorStop'](0x0, '#ffed94');
			_0x101a53['addColorStop'](0x1, '#ffcd85');
			ig['system']['context']['fillStyle'] = _0x101a53;
			ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
			0x0 <= this['kittyAnim'] && (this['kittyImage']['drawTile'](ig['system']['width'] / 0x2 - this['kittyImage']['width'] / 0x8, ig['system']['height'] / 0x2 - this['kittyImage']['height'] / 0x4, this['kittyAnim'], 0xda, 0x145), this['kittyTitleImage']['drawTile'](ig['system']['width'] / 0x2 - this['kittyTitleImage']['width'] / 0x2, ig['system']['height'] / 0x2 + this['kittyImage']['height'] / 0x4 + 0xa, this['kittyAnim'], 0x17c, 0x25));
			ig['system']['context']['globalAlpha'] = 0x1;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.pointer')['requires']('impact.entity')['defines'](function() {
	EntityPointer = ig['Entity']['extend']({
		'checkAgainst': ig['Entity']['TYPE']['BOTH'],
		'size': new Vector2(0x1, 0x1),
		'isFirstPressed': !0x1,
		'isPressed': !0x1,
		'isReleased': !0x1,
		'isHovering': !0x1,
		'hoveringItem': null,
		'objectArray': [],
		'clickedObjectList': [],
		'ignorePause': !0x0,
		'zIndex': 0x157c,
		'check': function(_0x496319) {
			this['objectArray']['push'](_0x496319);
		},
		'clickObject': function(_0x1d4993) {
			this['isFirstPressed'] && 'function' == typeof _0x1d4993['clicked'] && (_0x1d4993['clicked'](), this['addToClickedObjectList'](_0x1d4993));
			this['isPressed'] && !this['isReleased'] && 'function' == typeof _0x1d4993['clicking'] && _0x1d4993['clicking']();
			this['isReleased'] && 'function' == typeof _0x1d4993['released'] && (_0x1d4993['released'](), this['removeFromClickedObjectList'](_0x1d4993));
		},
		'refreshPos': function() {
			this['pos'] = ig['game']['io']['getClickPos']();
		},
		'update': function() {
			this['parent']();
			this['refreshPos']();
			var _0x1be49b = null,
				_0xf06830 = -0x1;
			for (a = this['objectArray']['length'] - 0x1; - 0x1 < a; a--) this['objectArray'][a]['zIndex'] > _0xf06830 && (_0xf06830 = this['objectArray'][a]['zIndex'], _0x1be49b = this['objectArray'][a]);
			if (null != _0x1be49b) null != this['hoveringItem'] ? this['hoveringItem'] != _0x1be49b && ('function' == typeof this['hoveringItem']['leave'] && this['hoveringItem']['leave'](), 'function' == typeof _0x1be49b['over'] && _0x1be49b['over']()) : 'function' == typeof _0x1be49b['over'] && _0x1be49b['over'](), this['hoveringItem'] = _0x1be49b, this['clickObject'](_0x1be49b), this['objectArray'] = [];
			else if (null != this['hoveringItem'] && 'function' == typeof this['hoveringItem']['leave'] && (this['hoveringItem']['leave'](), this['hoveringItem'] = null), this['isReleased']) {
				for (_0x1be49b = 0x0; _0x1be49b < this['clickedObjectList']['length']; _0x1be49b++) _0xf06830 = this['clickedObjectList'][_0x1be49b], 'function' == typeof _0xf06830['releasedOutside'] && _0xf06830['releasedOutside']();
				this['clickedObjectList'] = [];
			}
			this['isFirstPressed'] = ig['input']['pressed']('click');
			this['isReleased'] = ig['input']['released']('click');
			this['isPressed'] = ig['input']['state']('click');
		},
		'addToClickedObjectList': function(_0x551af5) {
			this['clickedObjectList']['push'](_0x551af5);
		},
		'removeFromClickedObjectList': function(_0x39ea09) {
			for (var _0xc426b5 = [], _0x5c5dfc = 0x0; _0x5c5dfc < this['clickedObjectList']['length']; _0x5c5dfc++) {
				var _0x286cd6 = this['clickedObjectList'][_0x5c5dfc];
				_0x286cd6 != _0x39ea09 && _0xc426b5['push'](_0x286cd6);
			}
			this['clickedObjectList'] = _0xc426b5;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.pointer-selector')['requires']('game.entities.pointer')['defines'](function() {
	EntityPointerSelector = EntityPointer['extend']({
		'zIndex': 0x3e8,
		'_wmDrawBox': !0x0,
		'_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
		'size': {
			'x': 0x14,
			'y': 0x14
		},
		'init': function(_0x2ded49, _0x1f3558, _0x3de8e2) {
			this['parent'](_0x2ded49, _0x1f3558, _0x3de8e2);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.select')['requires']('impact.entity')['defines'](function() {
	EntitySelect = ig['Entity']['extend']({
		'type': ig['Entity']['TYPE']['B'],
		'checkAgainst': ig['Entity']['TYPE']['A'],
		'collides': ig['Entity']['COLLIDES']['NEVER'],
		'canSelect': !0x1,
		'canSelectTimerDuration': 0.35,
		'zIndex': 0x1869f,
		'isHovering': !0x1,
		'isSelected': !0x1,
		'init': function(_0x3caf83, _0xf9ebbb, _0x2ac03a) {
			this['parent'](_0x3caf83, _0xf9ebbb, _0x2ac03a);
			this['canSelectTimer'] = new ig['Timer'](this['canSelectTimerDuration']);
		},
		'doesClickableLayerExist': function(_0x31ce96) {
			for (k in dynamicClickableEntityDivs)
				if (k == _0x31ce96) return !0x0;
			return !0x1;
		},
		'checkClickableLayer': function(_0x18fd57, _0x2d71ca, _0x3a968a) {
			'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x18fd57) ? (ig['game']['showOverlay']([_0x18fd57]), $('#' + _0x18fd57)['find']('[href]')['attr']('href', _0x2d71ca)) : this['createClickableOutboundLayer'](_0x18fd57, _0x2d71ca, 'media/graphics/misc/invisible.png', _0x3a968a));
		},
		'createClickableOutboundLayer': function(_0x26e406, _0xf02cff, _0x1bdf5b, _0x1b6525) {
			var _0x502471 = ig['$new']('div');
			_0x502471['id'] = _0x26e406;
			document['body']['appendChild'](_0x502471);
			$('#' + _0x502471['id'])['css']('float', 'left');
			$('#' + _0x502471['id'])['css']('width', this['size']['x'] * multiplier);
			$('#' + _0x502471['id'])['css']('height', this['size']['y'] * multiplier);
			$('#' + _0x502471['id'])['css']('position', 'absolute');
			var _0xa3802a = w / 0x2 - destW / 0x2,
				_0x56b0dc = h / 0x2 - destH / 0x2;
			w == mobileWidth ? ($('#' + _0x502471['id'])['css']('left', this['pos']['x']), $('#' + _0x502471['id'])['css']('top', this['pos']['y'])) : ($('#' + _0x502471['id'])['css']('left', _0xa3802a + this['pos']['x'] * multiplier), $('#' + _0x502471['id'])['css']('top', _0x56b0dc + this['pos']['y'] * multiplier));
			_0x1b6525 ? $('#' + _0x502471['id'])['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0xf02cff + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x1bdf5b + '\x27></a>') : $('#' + _0x502471['id'])['html']('<a\x20href=\x27' + _0xf02cff + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x1bdf5b + '\x27></a>');
			dynamicClickableEntityDivs[_0x26e406] = {};
			dynamicClickableEntityDivs[_0x26e406]['width'] = $('#' + _0x502471['id'])['width']();
			dynamicClickableEntityDivs[_0x26e406]['height'] = $('#' + _0x502471['id'])['height']();
			dynamicClickableEntityDivs[_0x26e406]['entity_pos_x'] = this['pos']['x'];
			dynamicClickableEntityDivs[_0x26e406]['entity_pos_y'] = this['pos']['y'];
		},
		'hovered': function() {
			this['isHovering'] = !0x0;
			this['dehoverOthers']();
		},
		'dehoverOthers': function() {
			var _0x36ee67 = ig['game']['getEntitiesByType'](EntitySelect);
			for (i = 0x0; i < _0x36ee67['length']; i++) _0x36ee67[i] != this && (_0x36ee67[i]['isHovering'] = !0x1);
		},
		'deselectOthers': function() {
			var _0x276bb1 = ig['game']['getEntitiesByType'](EntitySelect);
			for (i = 0x0; i < _0x276bb1['length']; i++) _0x276bb1[i] != this && (_0x276bb1[i]['isSelected'] = !0x1);
		},
		'update': function() {
			this['parent']();
			this['canSelectTimer'] && 0x0 < this['canSelectTimer']['delta']() && (this['canSelect'] = !0x0, this['canSelectTimer'] = null);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.levels.opening')['requires']('impact.image', 'game.entities.opening-kitty')['defines'](function() {
	LevelOpening = {
		'entities': [{
			'type': 'EntityOpeningKitty',
			'x': 0x208,
			'y': 0xd4
		}],
		'layer': []
	};
});
ig['baked'] = !0x0;
ig['module']('game.entities.addon.custom-pointer')['requires']('game.entities.pointer-selector')['defines'](function() {
	EntityCustomPointer = EntityPointerSelector['extend']({
		'name': 'Pointer',
		'exists': !0x0,
		'visible': !0x0,
		'size': {
			'x': 0x1,
			'y': 0x1
		},
		'check': function(_0x472f75) {
			_0x472f75['exists'] && _0x472f75['inputEnabled'] && (ig['game']['checkVisibility'](_0x472f75) && !(0x1 > _0x472f75['size']['x'] || 0x1 > _0x472f75['size']['y'])) && this['objectArray']['push'](_0x472f75);
		},
		'kill': function() {
			this['parent']();
			this['exists'] = !0x1;
		},
		'update': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.time-event')['requires']('plugins.addon.add-signal')['defines'](function() {
	ig['TimeEvent'] = ig['Class']['extend']({
		'events': [],
		'add': function(_0x1e8a43, _0x2107d6, _0x5462b8, _0x131346) {
			_0x1e8a43 = {
				'curTime': 0x0,
				'duration': _0x1e8a43,
				'callFunction': _0x2107d6,
				'bindObject': null,
				'isLooping': _0x131346 ? _0x131346 : !0x1,
				'timer': new ig['Timer'](),
				'loopCount': 0x0,
				'isPaused': !0x1
			};
			_0x1e8a43['callFunction'] = new ig['AddSignal'](_0x1e8a43);
			_0x1e8a43['callFunction']['add'](_0x2107d6, _0x5462b8);
			_0x1e8a43['bindObject'] = _0x5462b8;
			this['events']['push'](_0x1e8a43);
			return _0x1e8a43;
		},
		'pauseAll': function() {
			for (var _0x22fa25 = 0x0; _0x22fa25 < this['events']['length']; _0x22fa25++) this['events'][_0x22fa25]['isPaused'] = !0x0;
		},
		'resumeAll': function() {
			for (var _0x4c3bfc = 0x0; _0x4c3bfc < this['events']['length']; _0x4c3bfc++) {
				var _0x2290a8 = this['events'][_0x4c3bfc];
				_0x2290a8['timer'] = new ig['Timer']();
				_0x2290a8['isPaused'] = !0x1;
			}
		},
		'pause': function(_0xfc6dda) {
			_0xfc6dda['isPaused'] = !0x0;
		},
		'resume': function(_0x64c6fd) {
			_0x64c6fd['timer'] = new ig['Timer']();
			_0x64c6fd['isPaused'] = !0x1;
		},
		'remove': function(_0x4b4185) {
			_0x4b4185 = this['events']['indexOf'](_0x4b4185);
			0x0 > _0x4b4185 || this['events']['splice'](_0x4b4185, 0x1);
		},
		'removeAll': function() {
			this['events'] = [];
		},
		'updateEvent': function(_0x4fd844) {
			!_0x4fd844['isPaused'] && _0x4fd844['curTime'] < _0x4fd844['duration'] && (_0x4fd844['curTime'] += 0.001 * ig['game']['customTime']['physicsElapsedMS'], _0x4fd844['curTime'] >= _0x4fd844['duration'] && (_0x4fd844['callFunction']['dispatch'](), _0x4fd844['isLooping'] ? (_0x4fd844['curTime'] = 0x0, _0x4fd844['loopCount']++) : this['remove'](_0x4fd844)));
		},
		'update': function() {
			for (var _0x1e056f = 0x0; _0x1e056f < this['events']['length']; _0x1e056f++) this['updateEvent'](this['events'][_0x1e056f]);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.addon.page-controller')['requires']('game.entities.addon.group', 'game.entities.addon.custom-pointer', 'plugins.addon.time-event')['defines'](function() {
	EntityPageController = EntityGroup['extend']({
		'name': 'Controller',
		'localState': {},
		'isReady': !0x1,
		'init': function(_0x147102, _0x46e4de, _0x538423) {
			this['parent'](_0x147102, _0x46e4de, _0x538423);
			ig['global']['wm'] || (ig['Tweener']['clearTweens'](), this['centerX'] = ig['game']['centerX'], this['centerY'] = ig['game']['centerY'], this['gw'] = ig['game']['gw'], this['gh'] = ig['game']['gh'], this['timeEvent'] = new ig['TimeEvent'](), ig['game']['addOnReady'] = !0x0, ig['game']['groups'] = [], this['gBG'] = ig['game']['addGroup'](0x0, 0x0), this['gCont'] = ig['game']['addGroup'](0x0, 0x0), this['gFront'] = ig['game']['addGroup'](0x0, 0x0), this['gPointer'] = ig['game']['addGroup'](0x0, 0x0), ig['game']['groups']['push'](this['gBG']), ig['game']['groups']['push'](this['gCont']), ig['game']['groups']['push'](this['gFront']), ig['game']['groups']['push'](this['gPointer']), ig['game']['checkZIndexGroups'](), this['gPointer']['add'](this), ig['game']['controller'] = this, ig['game']['pointer'] = ig['game']['spawnEntity'](EntityCustomPointer, ig['system']['width'] / 0x2, ig['system']['height'] / 0x2), this['gPointer']['add'](ig['game']['pointer']), this['showFps'] = ig['game']['addText'](this['gw'] - 0xa, 0xa, '', 0x1e, fonts['font1']), this['showFps']['anchor']['setTo'](0x1, 0x0), this['showFps']['align'] = 'right', this['showFps']['fill'] = 'white', this['gPointer']['add'](this['showFps']));
		},
		'createSenteceTxt': function(_0x30ba4e) {
			_0x30ba4e = _0x30ba4e['split']('\x20');
			for (var _0x1d4e7e = [], _0x5d54ce = 0x0; _0x5d54ce < _0x30ba4e['length']; _0x5d54ce++) {
				var _0x5f2506 = _0x30ba4e[_0x5d54ce],
					_0x5f2506 = [_0x5f2506[0x0], _0x5f2506['slice'](0x1)];
				_0x1d4e7e['push'](_0x5f2506);
			}
			return _0x1d4e7e;
		},
		'groupTxts': function(_0x52da3f, _0x52cf61, _0x4852c9) {
			for (var _0x49c931 = ig['game']['addGroup'](0x0, 0x0), _0x41a014 = [], _0x1ea1d9 = 0x0; _0x1ea1d9 < _0x52da3f['length']; _0x1ea1d9++) {
				for (var _0x4b3b78 = 0x0; _0x4b3b78 < _0x52da3f[_0x1ea1d9]['length']; _0x4b3b78++) {
					var _0x39b87f = _0x52cf61[_0x4b3b78],
						_0xf58b67 = ig['game']['addText'](0x0, 0x0, _0x52da3f[_0x1ea1d9][_0x4b3b78], _0x39b87f, fonts['font1']);
					_0xf58b67['anchor']['setTo'](0x0, 0x1);
					_0xf58b67['fill'] = _0x4852c9;
					_0x49c931['add'](_0xf58b67);
					if (0x0 < _0x41a014['length']) {
						var _0x15fa66 = _0x41a014[_0x41a014['length'] - 0x1];
						_0xf58b67['x'] = _0x15fa66['x'] + _0x15fa66['size']['x'];
					}
					_0x41a014['push'](_0xf58b67);
				}
				0x1 < _0x52da3f['length'] && (_0xf58b67 = ig['game']['addText'](0x0, 0x0, '\x20', _0x39b87f, fonts['font1']), _0xf58b67['anchor']['setTo'](0x0, 0x1), _0xf58b67['fill'] = _0x4852c9, _0x49c931['add'](_0xf58b67), _0x15fa66 = _0x41a014[_0x41a014['length'] - 0x1], _0xf58b67['x'] = _0x15fa66['x'] + _0x15fa66['size']['x'], _0x41a014['push'](_0xf58b67));
			}
			return _0x49c931;
		},
		'createGreyBg': function() {
			this['greyBg'] = ig['CallAsset']['addSprite'](this['centerX'], this['centerY'], 'grey-bg');
			this['greyBg']['anchor']['setTo'](0.5);
			this['greyBg']['inputEnabled'] = !0x0;
			this['greyBg']['visible'] = !0x1;
			this['gFront']['add'](this['greyBg']);
		},
		'update': function() {
			this['parent']();
			ig['game']['fps'] ? this['showFps']['setText'](ig['game']['fps'] + '\x20FPS') : this['showFps']['setText']('');
			this['timeEvent']['update']();
			this['isReady'] || (this['isReady'] = !0x0, this['curtainBg'] && (this['curtainBg']['visible'] = !0x1), ig['game']['transition'] && ig['game']['transition']['open']());
		},
		'kill': function() {
			this['exists'] = !0x1;
			this['parent']();
			ig['Tweener']['clearTweens']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.addon-test-ctrl')['requires']('game.entities.addon.page-controller')['defines'](function() {
	EntityAddonTestCtrl = EntityPageController['extend']({
		'name': 'addon-test',
		'preload': function() {
			this['parent']();
		},
		'init': function(_0x50d0fd, _0x268261, _0x57a77e) {
			this['parent'](_0x50d0fd, _0x268261, _0x57a77e);
			ig['global']['wm'] || this['create']();
		},
		'create': function() {
			this['gInGame'] = ig['game']['addGroup']();
			this['gTest'] = ig['game']['addGroup']();
			this['bg'] = ig['CallAsset']['addImage'](this['centerX'], this['centerY'], 'media/graphics/backgrounds/desktop/background.jpg');
			this['bg']['anchor']['setTo'](0.5);
			this['gBG']['add'](this['bg']);
			this['gInGame']['x'] = this['centerX'];
			this['gInGame']['y'] = this['centerY'];
			this['gTest']['x'] = 0x64;
			this['testSprite'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'character-sheet/avatar-cheers');
			this['testSprite']['anchor']['setTo'](0.5);
			this['testSprite']['setScale'](0.5);
			this['testSprite']['setProperty']();
			this['testSprite']['x'] += 0.5 * this['testSprite']['size']['x'];
			this['testSprite']['y'] += 0.5 * this['testSprite']['size']['y'];
			this['testSprite']['inputEnabled'] = !0x0;
			this['testSprite']['onClick']['add'](function() {
				console['log']('sprite\x20clicked');
			}, this);
			this['gTest']['add'](this['testSprite']);
			this['testSprite']['addAnim']('change', 0.1, ['character-sheet/avatar-cheers', 'character-sheet/avatar-idle', 'character-sheet/avatar-run'], !0x1);
			this['testSprite']['playAnim']('change');
			this['testText'] = ig['game']['addText'](0x0, this['testSprite']['y'] + 0.5 * this['testSprite']['size']['y'] - 0x3, 'Test\x20Text', 0x1e, fonts['font1']);
			this['testText']['anchor']['setTo'](0.5);
			this['testText']['y'] += 0.5 * this['testText']['size']['y'];
			this['testText']['inputEnabled'] = !0x0;
			this['testText']['onClick']['add'](function() {
				console['log']('text\x20clicked');
			}, this);
			this['testText']['fill'] = 'black';
			this['gTest']['add'](this['testText']);
			this['testImg'] = ig['CallAsset']['addFrameImage'](this['testSprite']['x'] + 0.5 * this['testSprite']['size']['x'], this['testSprite']['y'], 'character-sheet/avatar-run');
			this['testImg']['anchor']['setTo'](0.5);
			this['testImg']['x'] += 0.5 * this['testImg']['frame']['x'];
			this['gTest']['add'](this['testImg']);
			this['testChild'] = ig['CallAsset']['addFrame'](-(0.5 * this['testSprite']['width']), 0x0, 'character-sheet/avatar-idle');
			this['testChild']['anchor']['setTo'](0.5);
			this['testSprite']['addChild'](this['testChild']);
			this['testChild']['x'] -= 0.5 * this['testChild']['width'];
			this['gInGame']['add'](this['gTest']);
			this['gCont']['add'](this['gInGame']);
		},
		'update': function() {
			this['parent']();
		},
		'draw': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.levels.addon-test')['requires']('impact.image', 'game.entities.controllers.addon-test-ctrl')['defines'](function() {
	LevelAddonTest = {
		'entities': [{
			'type': 'EntityAddonTestCtrl',
			'x': 0x398,
			'y': 0xb8
		}],
		'layer': [{
			'name': 'background',
			'width': 0x9,
			'height': 0x10,
			'linkWithCollision': !0x1,
			'visible': !0x0,
			'tilesetName': 'media/graphics/backgrounds/desktop/background.jpg',
			'repeat': !0x1,
			'preRender': !0x0,
			'distance': '1',
			'tilesize': 0x3c,
			'foreground': !0x1,
			'data': [
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
			]
		}]
	};
	LevelAddonTestResources = [new ig['Image']('media/graphics/backgrounds/desktop/background.jpg')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.options')['requires']('game.entities.addon.group', 'plugins.addon.add-signal')['defines'](function() {
	EntityOptions = EntityGroup['extend']({
		'name': 'setting-group',
		'init': function(_0x137b65, _0x4a1ff4, _0x2012e7) {
			this['parent'](_0x137b65, _0x4a1ff4, _0x2012e7);
			this['isSfxClicked'] = this['isBgmClicked'] = this['onGoing'] = this['isActive'] = !0x1;
			this['onResume'] = new ig['AddSignal'](this);
			this['startResume'] = new ig['AddSignal'](this);
			this['onPause'] = new ig['AddSignal'](this);
			this['onStartPause'] = new ig['AddSignal'](this);
			this['create']();
		},
		'create': function() {
			this['mode'] = 'setting';
			this['bg'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'ingame/settings/settings');
			this['bg']['anchor']['setTo'](0.5);
			this['bg']['y'] += 0.5 * this['bg']['size']['y'];
			this['add'](this['bg']);
			this['showTitle'] = ig['game']['addText'](0x0, this['bg']['y'] - 0.27 * this['bg']['size']['y'], _STRINGS['Game']['settings'], 0x46, fonts['font1']);
			this['showTitle']['anchor']['setTo'](0.5);
			this['showTitle']['fill'] = '#B66200';
			this['add'](this['showTitle']);
			this['gBgm'] = ig['game']['addGroup'](0x0, this['bg']['y'] - 0.1 * this['bg']['size']['y']);
			this['add'](this['gBgm']);
			this['bgmIcon'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'ingame/settings/bgm-icon');
			this['bgmIcon']['anchor']['setTo'](0x0, 0.5);
			this['bgmIcon']['x'] -= 0.27 * this['bg']['size']['x'];
			this['gBgm']['add'](this['bgmIcon']);
			this['gBgmBar'] = ig['game']['addGroup'](0.27 * this['bg']['size']['x'], 0x0);
			this['gBgm']['add'](this['gBgmBar']);
			this['bgmBarBg'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'ingame/settings/slider-bg');
			this['bgmBarBg']['anchor']['setTo'](0x0, 0.5);
			this['bgmBarBg']['inputEnabled'] = !0x0;
			this['bgmBarBg']['onClick']['add'](function() {
				this['isBgmClicked'] = !0x0;
			}, this);
			this['bgmBarBg']['onRelease']['add'](function() {
				csound['sfxPlay']('click');
				this['isBgmClicked'] = !0x1;
				ig['game']['save']('bgmVol', ig['game']['sessionData']['bgmVol']);
			}, this);
			this['gBgmBar']['add'](this['bgmBarBg']);
			this['gBgmBar']['x'] -= this['bgmBarBg']['size']['x'];
			this['bgmBar'] = ig['CallAsset']['addFrameImage'](this['bgmBarBg']['x'], this['bgmBarBg']['y'], 'ingame/settings/slider-bar');
			this['bgmBar']['anchor']['setTo'](0x0, 0.5);
			this['gBgmBar']['add'](this['bgmBar']);
			this['bgmSlider'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'ingame/settings/slider');
			this['bgmSlider']['anchor']['setTo'](0.5);
			this['bgmSlider']['inputEnabled'] = !0x0;
			this['bgmSlider']['onClick']['add'](function() {
				this['isBgmClicked'] = !0x0;
			}, this);
			this['bgmSlider']['onRelease']['add'](function() {
				csound['sfxPlay']('click');
				ig['game']['save']('bgmVol', ig['game']['sessionData']['bgmVol']);
				this['isBgmClicked'] = !0x1;
			}, this);
			this['gBgmBar']['add'](this['bgmSlider']);
			this['gSfx'] = ig['game']['addGroup'](0x0, this['gBgm']['y'] + 1.5 * this['bgmIcon']['size']['y']);
			this['add'](this['gSfx']);
			this['sfxIcon'] = ig['CallAsset']['addFrame'](this['bgmIcon']['x'], this['bgmIcon']['y'], 'ingame/settings/sfx-icon');
			this['sfxIcon']['anchor']['setTo'](0x0, 0.5);
			this['gSfx']['add'](this['sfxIcon']);
			this['gSfxBar'] = ig['game']['addGroup'](this['gBgmBar']['x'], this['gBgmBar']['y']);
			this['gSfx']['add'](this['gSfxBar']);
			this['sfxBarBg'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'ingame/settings/slider-bg');
			this['sfxBarBg']['anchor']['setTo'](0x0, 0.5);
			this['sfxBarBg']['inputEnabled'] = !0x0;
			this['sfxBarBg']['onClick']['add'](function() {
				this['isSfxClicked'] = !0x0;
			}, this);
			this['sfxBarBg']['onRelease']['add'](function() {
				csound['sfxPlay']('click');
				this['isSfxClicked'] = !0x1;
				ig['game']['save']('sfxVol', ig['game']['sessionData']['sfxVol']);
			}, this);
			this['gSfxBar']['add'](this['sfxBarBg']);
			this['sfxBar'] = ig['CallAsset']['addFrameImage'](this['sfxBarBg']['x'], this['sfxBarBg']['y'], 'ingame/settings/slider-bar');
			this['sfxBar']['anchor']['setTo'](0x0, 0.5);
			this['gSfxBar']['add'](this['sfxBar']);
			this['sfxSlider'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'ingame/settings/slider');
			this['sfxSlider']['anchor']['setTo'](0.5);
			this['sfxSlider']['inputEnabled'] = !0x0;
			this['sfxSlider']['onClick']['add'](function() {
				this['isSfxClicked'] = !0x0;
			}, this);
			this['sfxSlider']['onRelease']['add'](function() {
				csound['sfxPlay']('click');
				this['isSfxClicked'] = !0x1;
				ig['game']['save']('sfxVol', ig['game']['sessionData']['sfxVol']);
			}, this);
			this['gSfxBar']['add'](this['sfxSlider']);
			this['okBtn'] = ig['CallAsset']['addFrame'](0x0, this['bg']['y'] + 0.25 * this['bg']['size']['y'], 'ingame/buttons/ok-btn', {}, EntityClickBtn);
			this['okBtn']['anchor']['setTo'](0.5);
			this['okBtn']['onClick']['add'](function() {
				this['disappear']();
			}, this);
			this['add'](this['okBtn']);
			var _0x30827b = ig['game']['addText'](0x0, 0x0, _STRINGS['Buttons']['ok'], 0x23, fonts['font1']);
			_0x30827b['anchor']['setTo'](0.5);
			_0x30827b['fill'] = 'white';
			this['okBtn']['addChild'](_0x30827b);
			this['setStartVolume']();
		},
		'pauseFunction': function() {
			this['mode'] = 'pause';
			this['showTitle']['setText'](_STRINGS['Game']['paused']);
			var _0x3e041c = this['okBtn']['position'];
			this['okBtn']['kill']();
			this['okBtn'] = ig['CallAsset']['addFrame'](0x0, _0x3e041c['y'], 'ingame/buttons/play-small', {}, EntityClickBtn);
			this['okBtn']['onClick']['add'](function() {
				this['disappear']();
			}, this);
			this['okBtn']['onStartClick']['add'](function() {
				this['buttonEnabled']();
			}, this);
			this['add'](this['okBtn']);
			this['homeBtn'] = ig['CallAsset']['addFrame'](this['okBtn']['x'] + 0.5 * this['okBtn']['size']['x'], this['okBtn']['y'], 'ingame/buttons/menu', {}, EntityClickBtn);
			this['homeBtn']['x'] += 0.7 * this['homeBtn']['size']['x'];
			this['homeBtn']['onStartClick']['add'](ig['game']['disableBtns'], ig['game']);
			this['homeBtn']['onClick']['add'](function(_0x1c6ea6) {
				_0x1c6ea6['changePage'](LevelMainmenu);
			}, this);
			this['add'](this['homeBtn']);
			this['replayBtn'] = ig['CallAsset']['addFrame'](this['okBtn']['x'] - 0.5 * this['okBtn']['size']['x'], this['okBtn']['y'], 'ingame/buttons/replay', {}, EntityClickBtn);
			this['replayBtn']['x'] -= 1.1 * this['replayBtn']['size']['x'];
			this['replayBtn']['onStartClick']['add'](ig['game']['disableBtns'], ig['game']);
			this['replayBtn']['onClick']['add'](function(_0x902634) {
				_0x902634['changePage'](LevelGameplay);
			}, this);
			this['add'](this['replayBtn']);
		},
		'setStartVolume': function() {
			this['y'] = 1.1 * -this['bg']['size']['y'];
			this['alpha'] = 0x0;
			this['visible'] = !0x1;
			curState()['greyBg']['alpha'] = 0x0;
			ig['soundHandler']['bgmPlayer']['volume'](ig['game']['sessionData']['bgmVol']);
			ig['soundHandler']['sfxPlayer']['volume'](ig['game']['sessionData']['sfxVol']);
		},
		'moreBtnSetting': function() {
			if (_SETTINGS['MoreGames']['Enabled']) {
				var _0x56c5f3 = ig['game']['director']['levels']['indexOf'](LevelMainmenu);
				ig['game']['director']['currentLevel'] == _0x56c5f3 && (this['isActive'] ? curState()['moreBtn']['hide']() : curState()['moreBtn']['show']());
			}
		},
		'buttonEnabled': function() {
			this['okBtn']['inputEnabled'] = this['isActive'] ? !0x0 : !0x1;
		},
		'appear': function() {
			if (!this['onGoing']) {
				this['onStartPause']['dispatch']();
				this['visible'] = this['isActive'] = this['onGoing'] = !0x0;
				this['buttonEnabled']();
				this['moreBtnSetting']();
				var _0x2393ae = curState()['centerY'] - 0.5 * this['bg']['size']['y'];
				curState()['greyBg']['visible'] = !0x0;
				new Tweener(curState()['greyBg'])['to']({
					'alpha': 0x1
				}, 0.3)['start']();
				new Tweener(this)['to']({
					'alpha': 0x1,
					'y': _0x2393ae
				}, 0.3)['onComplete'](function() {
					this['onGoing'] = !0x1;
					this['onPause']['dispatch']();
					'pause' == this['mode'] && ig['Tweener']['pause']();
				} ['bind'](this))['start']();
				'pause' == this['mode'] && (curState()['gamePaused'] = !0x0);
			}
		},
		'disappear': function() {
			if (!this['onGoing']) {
				this['onGoing'] = !0x0;
				this['isActive'] = !0x1;
				this['startResume']['dispatch']();
				new Tweener(curState()['greyBg'])['to']({
					'alpha': 0x0
				}, 0.3)['start']();
				var _0x34da48 = 1.1 * -this['bg']['size']['y'];
				new Tweener(this)['to']({
					'alpha': 0x0,
					'y': _0x34da48
				}, 0.3)['onComplete'](function() {
					this['visible'] = this['onGoing'] = !0x1;
					curState()['greyBg']['visible'] = !0x1;
					'pause' == this['mode'] && (curState()['gamePaused'] = !0x1, ig['Tweener']['resume']());
					this['moreBtnSetting']();
					this['onResume']['dispatch']();
				} ['bind'](this))['start']();
			}
		},
		'updateBgm': function() {
			if (this['isActive'] && this['isBgmClicked']) {
				var _0x1b8ecd = this['bgmBarBg']['size']['x'],
					_0x52b751 = ig['game']['pointer']['pos']['x'] - this['gBgmBar']['pos']['x'];
				0x0 > _0x52b751 && (_0x52b751 = 0x0);
				_0x52b751 > this['bgmBarBg']['size']['x'] && (_0x52b751 = this['bgmBarBg']['size']['x']);
				_0x1b8ecd = _0x52b751 / _0x1b8ecd;
				ig['soundHandler']['bgmPlayer']['volume'](_0x1b8ecd);
				ig['game']['sessionData']['bgmVol'] = _0x1b8ecd;
			}
		},
		'updateSfx': function() {
			if (this['isActive'] && this['isSfxClicked']) {
				var _0x1aa503 = this['sfxBarBg']['size']['x'],
					_0x466ae9 = ig['game']['pointer']['pos']['x'] - this['gSfxBar']['pos']['x'];
				0x0 > _0x466ae9 && (_0x466ae9 = 0x0);
				_0x466ae9 > this['sfxBarBg']['size']['x'] && (_0x466ae9 = this['sfxBarBg']['size']['x']);
				_0x1aa503 = _0x466ae9 / _0x1aa503;
				ig['soundHandler']['sfxPlayer']['volume'](_0x1aa503);
				ig['game']['sessionData']['sfxVol'] = _0x1aa503;
			}
		},
		'update': function() {
			this['parent']();
			this['updateBgm']();
			this['updateSfx']();
			var _0x4afb60 = 0.5 * this['bgmSlider']['size']['x'],
				_0x5b2f0d = this['bgmBarBg']['size']['x'] - 0.5 * this['bgmSlider']['size']['x'],
				_0x11a2e2 = ig['game']['sessionData']['bgmVol'] * this['bgmBarBg']['size']['x'];
			_0x11a2e2 < _0x4afb60 ? _0x11a2e2 = _0x4afb60 : _0x11a2e2 > _0x5b2f0d && (_0x11a2e2 = _0x5b2f0d);
			var _0x434a8f = ig['game']['sessionData']['sfxVol'] * this['sfxBarBg']['size']['x'];
			_0x434a8f < _0x4afb60 ? _0x434a8f = _0x4afb60 : _0x434a8f > _0x5b2f0d && (_0x434a8f = _0x5b2f0d);
			this['bgmSlider']['x'] = _0x11a2e2;
			this['sfxSlider']['x'] = _0x434a8f;
			this['bgmBar']['size']['x'] = _0x11a2e2;
			this['sfxBar']['size']['x'] = _0x434a8f;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.click-btn2')['requires']('game.entities.addon.sprite')['defines'](function() {
	EntityClickBtn2 = EntitySprite['extend']({
		'init': function(_0x2dcc8b, _0x2ff4c0, _0x477b9e) {
			this['parent'](_0x2dcc8b, _0x2ff4c0, _0x477b9e);
		},
		'setProperties': function(_0x154cae) {
			this['parent'](_0x154cae);
			this['anchor']['setTo'](0.5);
			this['inputEnabled'] = !0x0;
			this['isClicked'] = !0x1;
		},
		'moreGames': function() {
			this['setProperty']();
			this['div_layer_name'] = this['name'] = 'more-games';
			_SETTINGS['MoreGames']['Enabled'] ? (_SETTINGS['MoreGames']['Link'] && (this['link'] = _SETTINGS['MoreGames']['Link']), _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']();
		},
		'show': function() {
			if (this['exists'] && 'more-games' == this['name']) {
				var _0x498ac4 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
				ig['domHandler']['show'](_0x498ac4);
			}
		},
		'hide': function() {
			if (this['exists'] && 'more-games' == this['name']) {
				var _0x2442af = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
				ig['domHandler']['hide'](_0x2442af);
			}
		},
		'clicked': function() {
			this['isClicked'] || (this['isClicked'] = !0x0, this['frameName'] = 'ingame/buttons/play-btn2');
		},
		'released': function() {
			this['isClicked'] && (this['isClicked'] = !0x1, this['frameName'] = 'ingame/buttons/play-btn1', this['onClick']['dispatch']());
		},
		'update': function() {
			this['parent']();
			this['clickableLayer'] && (this['clickableLayer']['size'] = new Vector2(this['size']['x'], this['size']['y']), this['clickableLayer']['update'](this['pos']['x'], this['pos']['y']));
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.mainmenu-ctrl')['requires']('game.entities.addon.page-controller', 'game.entities.objects.options', 'game.entities.objects.click-btn2')['defines'](function() {
	EntityMainmenuCtrl = EntityPageController['extend']({
		'images': [new ig['Image']('media/graphics/backgrounds/bg-01.png'), new ig['Image']('media/graphics/sprites/ingame.png')],
		'init': function(_0x3f4104, _0x474aed, _0x147207) {
			this['parent'](_0x3f4104, _0x474aed, _0x147207);
			ig['global']['wm'] || this['create']();
		},
		'create': function() {
			this['gInGame'] = ig['game']['addGroup']();
			this['bg'] = ig['CallAsset']['addImage'](this['centerX'], this['centerY'], 'bg-01');
			this['bg']['anchor']['setTo'](0.5);
			this['gBG']['add'](this['bg']);
			this['createGreyBg']();
			this['gSetting'] = ig['game']['addGroup'](this['centerX'], this['centerY'], {}, EntityOptions);
			this['gFront']['add'](this['gSetting']);
			this['title'] = ig['CallAsset']['addFrameImage'](this['centerX'], 0.24 * this['gh'], 'ingame/title');
			this['title']['anchor']['setTo'](0.5);
			this['gInGame']['add'](this['title']);
			this['playBtn'] = ig['CallAsset']['addFrame'](this['centerX'], 0.62 * this['gh'], 'ingame/buttons/play-btn1', {}, EntityClickBtn2);
			this['playBtn']['onClick']['add'](function() {
				csound['sfxPlay']('match3');
				ig['game']['changePage'](LevelStage);
			}, this);
			this['gInGame']['add'](this['playBtn']);
			this['settingBtn'] = ig['CallAsset']['addFrame'](this['gw'], this['gh'], 'ingame/buttons/setting-btn', {}, EntityClickBtn);
			this['settingBtn']['x'] -= 0.7 * this['settingBtn']['size']['x'];
			this['settingBtn']['y'] -= 0.7 * this['settingBtn']['size']['y'];
			this['settingBtn']['onClick']['add'](this['gSetting']['appear'], this['gSetting']);
			this['gInGame']['add'](this['settingBtn']);
			_SETTINGS['MoreGames']['Enabled'] && (this['moreBtn'] = ig['CallAsset']['addFrame'](0x0, this['settingBtn']['y'], 'ingame/buttons/more-btn', {}, EntityClickBtn), this['moreBtn']['x'] += 0.7 * this['moreBtn']['size']['x'], this['moreBtn']['moreGames'](), this['gInGame']['add'](this['moreBtn']));
			this['gCont']['add'](this['gInGame']);
			this['startPage']();
			this['fsBtn'] = ig['game']['spawnEntity'](ig['FullscreenButton'], 0x5, 0x5, {
				'enterImage': new ig['Image']('media/graphics/sprites/enter-fullscreen.png'),
				'exitImage': new ig['Image']('media/graphics/sprites/exit-fullscreen.png')
			});
		},
		'startPage': function() {
			this['greyBg']['visible'] = !0x0;
			this['playBtn']['alpha'] = 0x0;
			this['oriTitle'] = new Vector2(this['title']['x'], this['title']['y']);
			this['oriSetting'] = new Vector2(this['settingBtn']['x'], this['settingBtn']['y']);
			this['title']['y'] = 0.6 * -this['title']['size']['y'];
			this['settingBtn']['y'] = this['gh'] + 0.6 * this['settingBtn']['size']['y'];
			this['playBtn']['inputEnabled'] = !0x1;
			this['settingBtn']['inputEnabled'] = !0x1;
			_SETTINGS['MoreGames']['Enabled'] && (this['moreBtn']['hide'](), this['oriMore'] = new Vector2(this['moreBtn']['x'], this['moreBtn']['y']), this['moreBtn']['y'] = this['gh'] + 0.6 * this['moreBtn']['size']['y']);
		},
		'setPage': function() {
			this['greyBg']['visible'] = !0x1;
			new Tweener(this['title'])['to']({
				'x': this['oriTitle']['x'],
				'y': this['oriTitle']['y']
			}, 0.3)['onComplete'](function() {
				this['titleAnimation']();
			} ['bind'](this))['start']();
			new Tweener(this['settingBtn'])['to']({
				'y': this['oriSetting']['y']
			}, 0.3)['onComplete'](function() {
				this['settingBtn']['inputEnabled'] = !0x0;
			} ['bind'](this))['start']();
			new Tweener(this['playBtn'])['to']({
				'alpha': 0x1
			}, 0.3)['onComplete'](function() {
				this['playBtn']['inputEnabled'] = !0x0;
			} ['bind'](this))['start']();
			_SETTINGS['MoreGames']['Enabled'] && new Tweener(this['moreBtn'])['to']({
				'y': this['oriMore']['y']
			}, 0.3)['onComplete'](function() {
				this['moreBtn']['show']();
			} ['bind'](this))['start']();
		},
		'titleAnimation': function() {
			var _0x59e01a = this['title']['y'] - 0x32;
			new Tweener(this['title'])['to']({
				'y': _0x59e01a
			}, 0x3)['repeat'](-0x1)['yoyo'](!0x0)['onComplete'](function() {} ['bind'](this))['start']();
		},
		'playAnimation': function() {
			new Tweener(this['playBtn'])['to']({
				'scale': {
					'x': 1.1,
					'y': 1.1
				}
			}, 0x2)['yoyo'](!0x0)['repeat'](-0x1)['onComplete'](function() {} ['bind'](this))['start']();
		},
		'update': function() {
			this['parent']();
			!ig['game']['transition']['isClosed'] && !this['pageReady'] && (this['pageReady'] = !0x0, this['setPage']());
			this['fsBtn']['update']();
		},
		'draw': function() {
			this['parent']();
			this['fsBtn']['draw']();
			ig['yandex']['drawBranding']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.levels.mainmenu')['requires']('impact.image', 'game.entities.controllers.mainmenu-ctrl')['defines'](function() {
	LevelMainmenu = {
		'entities': [{
			'type': 'EntityMainmenuCtrl',
			'x': 0x3b4,
			'y': 0x60
		}],
		'layer': []
	};
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.stage-box')['requires']('game.entities.objects.click-btn')['defines'](function() {
	EntityStageBox = EntityClickBtn['extend']({
		'init': function(_0x5233d2, _0xdb3a15, _0x160b24) {
			this['parent'](_0x5233d2, _0xdb3a15, _0x160b24);
		},
		'setProperties': function(_0x25190a) {
			this['parent'](_0x25190a);
		},
		'create': function() {
			this['onGoing'] = !0x1;
			this['stageId'] = this['boxId'];
			this['showStage'] = ig['game']['addText'](0x0, 0.1 * -this['size']['y'], this['stageId'] + '', 0x3c, fonts['font1']);
			this['showStage']['anchor']['setTo'](0.5);
			this['addChild'](this['showStage']);
			this['comingSoon'] = ig['game']['addText'](0x0, -0x5, _STRINGS['Game']['comingsoon'], 0x12, fonts['font1']);
			this['comingSoon']['anchor']['setTo'](0.5);
			this['comingSoon']['wordWrap'] = !0x0;
			this['comingSoon']['wordWrapWidth'] = 0.8 * this['animSheet']['frame']['x'];
			this['comingSoon']['lineSpacing'] = 0x3;
			this['comingSoon']['align'] = 'center';
			this['addChild'](this['comingSoon']);
			this['comingSoon']['visible'] = !0x1;
			this['onClick']['add'](this['activate'], this);
		},
		'setPage': function() {
			for (var _0x318343 = ig['game']['sessionData']['unlockedStages'][this['stageId']], _0x1336cd = 0x0; _0x1336cd < _0x318343; _0x1336cd++) this['stars'][_0x1336cd]['playAnim']('on');
		},
		'activate': function() {
			ig['game']['disableBtns']();
			ig['GameData']['stage'] = this['stageId'];
			ig['GameData']['trialMode'] = !0x0;
			ig['game']['changePage'](LevelGameplay);
		},
		'update': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.stage-ctrl')['requires']('game.entities.addon.page-controller', 'game.entities.objects.stage-box')['defines'](function() {
	EntityStageCtrl = EntityPageController['extend']({
		'images': [new ig['Image']('media/graphics/backgrounds/bg-01.png'), new ig['Image']('media/graphics/sprites/ingame.png')],
		'init': function(_0x282868, _0x54e085, _0x4568e9) {
			this['parent'](_0x282868, _0x54e085, _0x4568e9);
			ig['global']['wm'] || this['create']();
		},
		'create': function() {
			ig['soundHandler']['bgmPlayer']['volume'](ig['game']['sessionData']['bgmVol']);
			ig['soundHandler']['sfxPlayer']['volume'](ig['game']['sessionData']['sfxVol']);
			this['pageNow'] = 0x0;
			this['isTweening'] = this['pageReady'] = !0x1;
			this['gInGame'] = ig['game']['addGroup']();
			this['bg'] = ig['CallAsset']['addImage'](this['centerX'], this['centerY'], 'bg-01');
			this['bg']['anchor']['setTo'](0.5);
			this['gBG']['add'](this['bg']);
			this['gStage'] = ig['game']['addGroup'](this['centerX'], this['centerY']);
			this['gInGame']['add'](this['gStage']);
			this['stageBg'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'ingame/big-box');
			this['stageBg']['anchor']['setTo'](0.5);
			this['gStage']['add'](this['stageBg']);
			this['closeBtn'] = ig['CallAsset']['addFrame'](0.5 * this['stageBg']['size']['x'], 0.5 * -this['stageBg']['size']['y'], 'ingame/buttons/close', {}, EntityClickBtn);
			this['closeBtn']['x'] -= 0.7 * this['closeBtn']['size']['x'];
			this['closeBtn']['y'] += 0.7 * this['closeBtn']['size']['y'];
			this['closeBtn']['onClick']['add'](function() {
				ig['game']['changePage'](LevelMainmenu);
			}, this);
			this['gStage']['add'](this['closeBtn']);
			this['showTitle'] = ig['game']['addText'](0x0, this['closeBtn']['y'] + 0x2, _STRINGS['Game']['stage'], 0x41, fonts['font1']);
			this['showTitle']['anchor']['setTo'](0.5);
			this['showTitle']['fill'] = '#B66200';
			this['gStage']['add'](this['showTitle']);
			this['gBoxes'] = ig['game']['addGroup']();
			this['gStage']['add'](this['gBoxes']);
			this['prevBtn'] = ig['CallAsset']['addFrame'](this['centerX'] - 0.5 * this['stageBg']['size']['x'], 0.87 * this['gh'], 'ingame/buttons/btn-prev', {}, EntityClickBtn);
			this['prevBtn']['x'] += 0.5 * this['prevBtn']['size']['x'];
			this['prevBtn']['onStartClick']['add'](function() {
				this['pageNow']--;
			}, this);
			this['prevBtn']['onClick']['add'](function() {
				this['onGoing'] || this['changePage']();
			}, this);
			this['gInGame']['add'](this['prevBtn']);
			this['nextBtn'] = ig['CallAsset']['addFrame'](this['centerX'] + 0.5 * this['stageBg']['size']['x'], this['prevBtn']['y'], 'ingame/buttons/btn-next', {}, EntityClickBtn);
			this['nextBtn']['x'] -= 0.5 * this['nextBtn']['size']['x'];
			this['nextBtn']['onStartClick']['add'](function() {
				this['pageNow']++;
			}, this);
			this['nextBtn']['onClick']['add'](function() {
				this['onGoing'] || this['changePage']();
			}, this);
			this['gInGame']['add'](this['nextBtn']);
			this['gCont']['add'](this['gInGame']);
			this['onGoing'] = !0x1;
			this['generateBoxes']();
			this['preparePage']();
			this['pageTags'] = [];
			var _0x3eb0ca = parseInt(ig['GameData']['totalStages'] / this['boxes']['length']) + 0x1;
			0x0 == ig['GameData']['totalStages'] % this['boxes']['length'] && (_0x3eb0ca -= 0x1);
			for (var _0x2d9dcc = 0x0; _0x2d9dcc < _0x3eb0ca; _0x2d9dcc++) {
				var _0x113fc3 = ig['CallAsset']['addFrameImage'](this['centerX'], this['nextBtn']['y'], 'ingame/stages/page_tag2');
				_0x113fc3['anchor']['setTo'](0.5);
				this['gInGame']['add'](_0x113fc3);
				var _0x513268 = parseInt(_0x3eb0ca / 0x2),
					_0x1c7f99 = this['centerX'] - 1.2 * _0x113fc3['frame']['x'] * _0x513268;
				0x0 == _0x3eb0ca % 0x2 && (_0x1c7f99 = this['centerX'] - 0.6 * _0x113fc3['frame']['x'] - 1.2 * _0x113fc3['frame']['x'] * (_0x513268 - 0x1));
				_0x1c7f99 += 1.2 * _0x113fc3['frame']['x'] * _0x2d9dcc;
				_0x113fc3['x'] = _0x1c7f99;
				this['pageTags']['push'](_0x113fc3);
			}
			this['fsBtn'] = ig['game']['spawnEntity'](ig['FullscreenButton'], 0x5, 0x5, {
				'enterImage': new ig['Image']('media/graphics/sprites/enter-fullscreen.png'),
				'exitImage': new ig['Image']('media/graphics/sprites/exit-fullscreen.png')
			});
		},
		'generateBoxes': function() {
			this['boxes'] = [];
			for (var _0x1f35d1 = 0x0; 0x4 > _0x1f35d1; _0x1f35d1++)
				for (var _0xee8851 = 0x0; 0x4 > _0xee8851; _0xee8851++) {
					var _0x15d03c = ig['CallAsset']['addFrame'](0x0, 0x0, 'ingame/stages/stage-box-on-0', {
						'boxId': this['boxes']['length']
					}, EntityStageBox);
					_0x15d03c['isTweening'] = !0x1;
					this['gBoxes']['add'](_0x15d03c);
					_0x15d03c['x'] = -(0.51 * _0x15d03c['size']['x']) - 1.02 * _0x15d03c['size']['x'] + 1.02 * _0x15d03c['size']['x'] * _0xee8851;
					_0x15d03c['y'] = 0.245 * -this['stageBg']['size']['y'] + 0x1 * _0x15d03c['size']['y'] * _0x1f35d1;
					_0x15d03c['create']();
					this['boxes']['push'](_0x15d03c);
				}
			this['gBoxes']['scale']['x'] = 0x0;
			this['pageNow'] = parseInt(ig['game']['sessionData']['unlockedStages']['length'] / this['boxes']['length']);
			this['pageNow'] * this['boxes']['length'] >= ig['GameData']['totalStages'] && this['pageNow']--;
		},
		'setPage': function() {
			for (var _0x3b302a = 0x0; _0x3b302a < this['boxes']['length']; _0x3b302a++) {
				var _0x4180e6 = this['pageNow'] * this['boxes']['length'] + _0x3b302a,
					_0x2e0b4a = this['boxes'][_0x3b302a];
				_0x2e0b4a['inputEnabled'] = !0x1;
				this['checkBox'](_0x2e0b4a);
				_0x4180e6 <= ig['game']['sessionData']['unlockedStages']['length'] && (_0x2e0b4a['inputEnabled'] = !0x0);
			}
		},
		'setTag': function() {
			for (var _0x50fe7c = 0x0; _0x50fe7c < this['pageTags']['length']; _0x50fe7c++) {
				var _0x521335 = this['pageTags'][_0x50fe7c];
				_0x521335['frameName'] = 'ingame/stages/page_tag2';
				_0x50fe7c == this['pageNow'] && (_0x521335['frameName'] = 'ingame/stages/page_tag1');
			}
		},
		'changePage': function() {
			this['isTweening'] || (this['prevBtn']['inputEnabled'] = !0x1, this['nextBtn']['inputEnabled'] = !0x1, this['isTweening'] = !0x0, new Tweener(this['gBoxes'])['to']({
				'scale': {
					'x': 0x0
				}
			}, 0.1)['easing'](ig['Tweener']['Easing']['Quadratic']['EaseOut'])['onComplete'](function() {
				this['isTweening'] = !0x1;
				for (var _0x56f095 = 0x0; _0x56f095 < this['boxes']['length']; _0x56f095++) this['checkBox'](this['boxes'][_0x56f095]);
				this['tweenBack']();
			} ['bind'](this))['start'](), this['setTag']());
		},
		'checkBox': function(_0x23b176) {
			_0x23b176['frameName'] = 'ingame/stages/stage-box-off-nostar';
			_0x23b176['visible'] = !0x1;
			var _0xf2ab24 = this['boxes']['indexOf'](_0x23b176),
				_0xf2ab24 = this['pageNow'] * this['boxes']['length'] + _0xf2ab24;
			_0x23b176['stageId'] = _0xf2ab24;
			_0xf2ab24 < ig['GameData']['totalStages'] ? (_0x23b176['visible'] = !0x0, _0x23b176['comingSoon']['visible'] = !0x1, _0x23b176['showStage']['visible'] = !0x0, _0x23b176['showStage']['setText'](_0x23b176['stageId'] + 0x1 + ''), _0xf2ab24 <= ig['game']['sessionData']['unlockedStages']['length'] && (_0x23b176['frameName'] = 'ingame/stages/stage-box-on-0', _0xf2ab24 < ig['game']['sessionData']['unlockedStages']['length'] && (_0x23b176['frameName'] = 'ingame/stages/stage-box-on-' + ig['game']['sessionData']['unlockedStages'][_0xf2ab24]))) : _0xf2ab24 == ig['GameData']['totalStages'] ? (_0x23b176['visible'] = !0x0, _0x23b176['frameName'] = 'ingame/stages/stage-box-off', _0x23b176['comingSoon']['visible'] = !0x0, _0x23b176['showStage']['visible'] = !0x1) : _0x23b176['isTweening'] = !0x1;
		},
		'tweenBack': function() {
			this['isTweening'] || (this['isTweening'] = !0x0, new Tweener(this['gBoxes'])['to']({
				'scale': {
					'x': 0x1
				}
			}, 0.1)['easing'](ig['Tweener']['Easing']['Quadratic']['EaseOut'])['onComplete'](function() {
				this['isTweening'] = !0x1;
				this['setPage']();
				this['prevBtn']['inputEnabled'] = !0x0;
				this['nextBtn']['inputEnabled'] = !0x0;
			} ['bind'](this))['start']());
		},
		'preparePage': function() {
			this['prevBtn']['setScale'](0x0);
			this['nextBtn']['setScale'](0x0);
			this['gStage']['y'] = 0.6 * -this['stageBg']['size']['y'];
			for (var _0x2c67bf = 0x0; _0x2c67bf < this['boxes']['length']; _0x2c67bf++) this['boxes'][_0x2c67bf]['inputEnabled'] = !0x1;
		},
		'startPage': function() {
			new Tweener(this['gStage'])['to']({
				'y': 0.49 * this['gh']
			}, 0.1)['onComplete'](function() {
				this['changePage']();
				new Tweener(this['prevBtn']['scale'])['to']({
					'x': 0x1,
					'y': 0x1
				}, 0.2)['start']();
				new Tweener(this['nextBtn']['scale'])['to']({
					'x': 0x1,
					'y': 0x1
				}, 0.2)['start']();
			} ['bind'](this))['start']();
		},
		'checkAllTweening': function() {
			for (var _0x1a0cdb = !0x1, _0x272779 = 0x0; _0x272779 < this['boxes']['length']; _0x272779++) this['boxes'][_0x272779]['isTweening'] && (_0x1a0cdb = !0x0);
			return _0x1a0cdb;
		},
		'update': function() {
			this['parent']();
			!ig['game']['transition']['isClosed'] && !this['pageReady'] && (this['pageReady'] = !0x0, this['startPage']());
			0x0 < this['pageNow'] ? (this['isTweening'] || (this['prevBtn']['inputEnabled'] = !0x0), this['prevBtn']['frameName'] = 'ingame/buttons/btn-prev') : (this['prevBtn']['inputEnabled'] = !0x1, this['prevBtn']['frameName'] = 'ingame/buttons/btn-prev2');
			(this['pageNow'] + 0x1) * this['boxes']['length'] >= ig['GameData']['totalStages'] ? (this['nextBtn']['inputEnabled'] = !0x1, this['nextBtn']['frameName'] = 'ingame/buttons/btn-next2') : (this['isTweening'] || (this['nextBtn']['inputEnabled'] = !0x0), this['nextBtn']['frameName'] = 'ingame/buttons/btn-next');
			this['fsBtn']['update']();
		},
		'draw': function() {
			this['parent']();
			this['fsBtn']['draw']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.levels.stage')['requires']('impact.image', 'game.entities.controllers.stage-ctrl')['defines'](function() {
	LevelStage = {
		'entities': [{
			'type': 'EntityStageCtrl',
			'x': 0x310,
			'y': 0x1c
		}],
		'layer': [{
			'name': 'background',
			'width': 0x9,
			'height': 0x10,
			'linkWithCollision': !0x1,
			'visible': 0x1,
			'tilesetName': 'media/graphics/backgrounds/bg-01.png',
			'repeat': !0x1,
			'preRender': !0x0,
			'distance': '1',
			'tilesize': 0x3c,
			'foreground': !0x1,
			'data': [
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
			]
		}]
	};
	LevelStageResources = [new ig['Image']('media/graphics/backgrounds/bg-01.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.item-list')['requires']('game.entities.addon.group')['defines'](function() {
	EntityItemList = EntityGroup['extend']({
		'maxItems': 0x0,
		'init': function(_0x254afa, _0x52aadc, _0x3493b0) {
			this['parent'](_0x254afa, _0x52aadc, _0x3493b0);
			this['create']();
		},
		'create': function() {
			this['isCompleted'] = !0x1;
			var _0x443d86 = [],
				_0x117a0f = 0x2 + ig['GameData']['stage'];
			_0x117a0f > curState()['pieceTypes']['length'] && (_0x117a0f = curState()['pieceTypes']['length']);
			0x5 < _0x117a0f && (_0x117a0f = 0x5);
			for (var _0x29d582 = 0x0; _0x29d582 < _0x117a0f; _0x29d582++) {
				for (var _0x1f3573 = null; !_0x1f3573;) {
					var _0x3613d3 = ig['game']['rnd']['pick'](curState()['pieceTypes']);
					0x0 > _0x443d86['indexOf'](_0x3613d3) && (_0x1f3573 = _0x3613d3);
				}
				_0x443d86['push'](_0x1f3573);
			}
			this['itemLists'] = _0x443d86;
			this['listBox'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'game/woodplate');
			this['listBox']['anchor']['setTo'](0.5);
			this['itemBox'] = ig['CallAsset']['addFrameImage'](0.5 * this['listBox']['size']['x'], -0x4, 'game/woodplate-box');
			this['itemBox']['anchor']['setTo'](0.5);
			this['itemBox']['x'] -= 0.52 * this['itemBox']['size']['x'];
			this['items'] = [];
			for (_0x29d582 = 0x0; _0x29d582 < _0x117a0f; _0x29d582++) _0x1f3573 = _0x443d86[_0x29d582], _0x3613d3 = ig['CallAsset']['addFrameImage'](0x0, this['itemBox']['y'], 'game/gem' + _0x1f3573), _0x3613d3['anchor']['setTo'](0.5), _0x3613d3['setScale'](0.5), _0x3613d3['jewelId'] = _0x1f3573, this['add'](_0x3613d3), _0x3613d3['x'] = this['itemBox']['x'] - 0x2 * (this['itemBox']['size']['x'] / 5.5) + this['itemBox']['size']['x'] / 5.5 * _0x29d582, _0x3613d3['itemLeft'] = 0xa, _0x1f3573 = ig['game']['addText'](_0x3613d3['x'] + 0.5 * _0x3613d3['frame']['x'], _0x3613d3['y'] + 0.5 * _0x3613d3['frame']['y'], _0x3613d3['itemLeft'] + '', 0x10, fonts['font1']), _0x1f3573['anchor']['setTo'](0.5, 0x1), _0x1f3573['align'] = 'center', this['add'](_0x1f3573), _0x3613d3['showLeft'] = _0x1f3573, this['remove'](_0x3613d3), _0x3613d3['groupParent'] = this, this['items']['push'](_0x3613d3);
		},
		'checkId': function(_0x168c57) {
			for (var _0x27eb44 = !0x1, _0x3f4b61 = 0x0; _0x3f4b61 < this['items']['length']; _0x3f4b61++) _0x168c57 == this['items'][_0x3f4b61]['jewelId'] && (_0x27eb44 = !0x0);
			return _0x27eb44;
		},
		'update': function() {
			this['parent']();
			for (var _0x5613f4 = 0x0, _0xedbe0c = 0x0; _0xedbe0c < this['items']['length']; _0xedbe0c++) {
				var _0x4a3a99 = this['items'][_0xedbe0c];
				_0x4a3a99['showLeft']['setText'](_0x4a3a99['itemLeft']);
				0x0 >= _0x4a3a99['itemLeft'] && _0x5613f4++;
			}!curState()['gBoard']['checkAllMovement']() && _0x5613f4 == this['items']['length'] && (this['isCompleted'] = !0x0, !curState()['gameOver'] && !curState()['gamePaused'] && (curState()['gamePaused'] = !0x0, curState()['pauseBtn']['inputEnabled'] = !0x1, curState()['lastCall']()));
		},
		'draw': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.piece')['requires']('game.entities.addon.sprite')['defines'](function() {
	EntityPiece = EntitySprite['extend']({
		'row': -0x1,
		'col': -0x1,
		'_row': -0x1,
		'_col': -0x1,
		'pieceId': 0x0,
		'isMoving': !0x1,
		'isIn': !0x1,
		'moveAfter': !0x1,
		'checkTilesCol': [],
		'checkTilesRow': [],
		'powerUpId': 0x0,
		'isBreak': !0x1,
		'isBreaking': !0x1,
		'isChangingPlace': !0x1,
		'speed': 0xa,
		'destPos': {
			'x': 0x0,
			'y': 0x0
		},
		'isChecking': !0x1,
		'startClick': {
			'x': 0x0,
			'y': 0x0
		},
		'init': function(_0x5806b4, _0x5ac3df, _0x4a9b30) {
			this['parent'](_0x5806b4, _0x5ac3df, _0x4a9b30);
			this['onCompleteMove'] = new ig['AddSignal'](this);
		},
		'setProperties': function(_0x258452) {
			this['parent'](_0x258452);
			this['isClicked'] = this['onGoing'] = !0x1;
			this['onClick']['add'](this['checkClick'], this);
			this['onRelease']['add'](function() {
				this['releaseClick'](ig['game']['pointer']['pos']);
			}, this);
			this['alpha'] = 0x0;
			this['anchor']['setTo'](0.5);
		},
		'createSparkling': function() {
			if (!(0x3 < this['powerUpId'])) {
				var _0x4dc964 = ig['game']['rnd']['realInRange'](0x0, 0xa),
					_0xc80792 = ig['game']['rnd']['realInRange'](-0x14, -0x12),
					_0xcc2a7b = ig['game']['rnd']['realInRange'](0.15, 0.25);
				this['sparkling'] = ig['CallAsset']['addFrame'](_0x4dc964, _0xc80792, 'game/effects/sparkle/1');
				this['sparkling']['anchor']['setTo'](0.5);
				var _0x2d1123 = ig['GenerateFrameNames']('game/effects/sparkle/', 0x1, 0x6, '', 0x1);
				this['sparkling']['addAnim']('spark', _0xcc2a7b, _0x2d1123, !0x1);
				this['sparkling']['playAnim']('spark');
				this['addChild'](this['sparkling']);
				this['sparkling']['offSet'] = {
					'x': _0x4dc964 - this['x'],
					'y': _0xc80792 - this['y']
				};
			}
		},
		'tweenIn': function() {
			if (!this['isIn']) {
				this['isIn'] = !0x0;
				var _0x2d69f0 = curState()['gBoard']['tiles'][this['row']][this['col']];
				curState()['gBoard']['gPieces']['toGlobal'](_0x2d69f0['x'], _0x2d69f0['y']);
				var _0x2d69f0 = _0x2d69f0['y'],
					_0x1f6018 = ig['Tweener']['Easing']['Quadratic']['EaseOut'];
				new Tweener(this)['to']({
					'alpha': 0x1
				}, 0.1)['onComplete'](function() {
					this['isIn'] = !0x1;
					this['moveAfter'] && this['moveTo'](this['isChecking']);
					this['inputEnabled'] = !0x0;
				} ['bind'](this))['easing'](_0x1f6018)['start']();
				this['isMoving'] || new Tweener(this)['to']({
					'y': _0x2d69f0
				}, 0.1)['easing'](_0x1f6018)['start']();
			}
		},
		'tweenClick': function() {
			this['scale']['setTo'](1.1);
		},
		'tweenRelease': function() {
			this['scale']['setTo'](0x1);
		},
		'checkClick': function() {
			curState()['gameStart'] && !curState()['gamePaused'] && !curState()['gameOver'] && !curState()['checkOnGoing'] && (!curState()['pieceClicked'] && !curState()['gBoard']['checkAllMovement']()) && (curState()['pieceClicked'] = this, this['startClick']['x'] = ig['game']['pointer']['pos']['x'], this['startClick']['y'] = ig['game']['pointer']['pos']['y'], this['startClick']['clickTime'] = Date['now'](), this['tweenClick'](), curState()['chain'] = 0x0, this['checkTilesCol'] = [], this['checkTilesRow'] = []);
		},
		'releaseClick': function(_0x4887bc) {
			if (curState()['pieceClicked'])
				if (this['tweenRelease'](), _0x4887bc = this['checkPiece'](_0x4887bc), null != _0x4887bc && this['pieceId'] != _0x4887bc['pieceId']) {
					var _0x207c70 = Math['abs'](this['col'] - _0x4887bc['col']),
						_0x1caab9 = Math['abs'](this['row'] - _0x4887bc['row']);
					0x0 == _0x207c70 && 0x1 == _0x1caab9 || 0x1 == _0x207c70 && 0x0 == _0x1caab9 ? (curState()['pieceHover'] = _0x4887bc, curState()['pieceHover'] && (curState()['pieceHover']['checkTilesCol'] = [], curState()['pieceHover']['checkTilesRow'] = []), curState()['gBoard']['exchangePieces'](this, _0x4887bc)) : (this['checkPointer'](), curState()['pieceHover'] || (curState()['pieceClicked'] = null));
				} else this['checkPointer'](), curState()['pieceHover'] || (curState()['pieceClicked'] = null);
		},
		'checkPointer': function() {
			var _0x381f24 = curState()['gBoard']['tiles'][this['row']][this['col']],
				_0x4e1182 = ig['game']['pointer']['pos']['x'] - this['startClick']['x'],
				_0x6ae331 = ig['game']['pointer']['pos']['y'] - this['startClick']['y'],
				_0x236c08 = this['col'],
				_0xfdbd31 = this['row'];
			0x0 < _0x4e1182 && Math['abs'](_0x4e1182) >= _0x381f24['size']['x'] && Math['abs'](_0x6ae331) < 0.5 * _0x381f24['size']['y'] ? (_0x236c08 += 0x1, _0x236c08 >= curState()['gBoard']['pieces'][this['row']]['length'] && (_0x236c08 = this['col'])) : 0x0 > _0x4e1182 && Math['abs'](_0x4e1182) >= _0x381f24['size']['x'] && Math['abs'](_0x6ae331) < 0.5 * _0x381f24['size']['y'] ? (_0x236c08 -= 0x1, 0x0 > _0x236c08 && (_0x236c08 = this['col'])) : 0x0 < _0x6ae331 && Math['abs'](_0x6ae331) >= _0x381f24['size']['y'] && Math['abs'](_0x4e1182) < 0.5 * _0x381f24['size']['x'] ? (_0xfdbd31 += 0x1, _0xfdbd31 >= curState()['gBoard']['pieces']['length'] && (_0xfdbd31 = this['row'])) : 0x0 > _0x6ae331 && Math['abs'](_0x6ae331) > _0x381f24['size']['y'] && Math['abs'](_0x4e1182) < 0.5 * _0x381f24['size']['x'] && (_0xfdbd31 -= 0x1, 0x0 > _0xfdbd31 && (_0xfdbd31 = this['row']));
			if (_0xfdbd31 != this['row'] || _0x236c08 != this['col'])
				if ((_0x381f24 = curState()['gBoard']['pieces'][_0xfdbd31][_0x236c08]) && !_0x381f24['isBreak'] && 0x5 != _0x381f24['powerUpId']) curState()['pieceHover'] = _0x381f24, curState()['pieceHover'] && (curState()['pieceHover']['checkTilesCol'] = [], curState()['pieceHover']['checkTilesRow'] = []), curState()['gBoard']['exchangePieces'](this, _0x381f24);
		},
		'checkPiece': function() {
			for (var _0x1ce038 = curState()['gBoard']['pieces'], _0x4cc80a = ig['game']['pointer']['hoveringItem'], _0x3365ea = null, _0x568b92 = 0x0; _0x568b92 < _0x1ce038['length']; _0x568b92++)
				for (var _0x43253a = 0x0; _0x43253a < _0x1ce038[_0x568b92]['length']; _0x43253a++) {
					var _0x260ff6 = _0x1ce038[_0x568b92][_0x43253a];
					if (null != _0x260ff6 && _0x260ff6 != this && 0x5 != _0x260ff6['powerUpId'] && _0x4cc80a == _0x260ff6) {
						_0x3365ea = _0x260ff6;
						break;
					}
				}
			return _0x3365ea;
		},
		'checkMatchAround': function() {
			this['checkTilesRow'] = [this];
			this['checkTilesCol'] = [this];
			this['checkCol'](this);
			this['checkRow'](this);
		},
		'checkCol': function(_0x371abb) {
			var _0x5a79a1 = curState()['gBoard']['pieces'],
				_0x27d624 = curState()['gBoard']['maps'],
				_0x5bcc5f = this['row'],
				_0x9d108 = _0x371abb['col'] - 0x1,
				_0x4b767d = _0x371abb['col'] + 0x1;
			0x0 > _0x9d108 && (_0x9d108 = 0x0);
			_0x4b767d >= _0x27d624[_0x5bcc5f]['length'] && (_0x4b767d = _0x27d624[_0x5bcc5f]['length'] - 0x1);
			for (_0x27d624 = _0x9d108; _0x27d624 <= _0x4b767d; _0x27d624++)
				if ((_0x9d108 = _0x5a79a1[_0x5bcc5f][_0x27d624]) && !(0x3 < _0x9d108['powerUpId']) && _0x9d108 != _0x371abb && _0x9d108['pieceId'] == _0x371abb['pieceId'] && 0x0 > this['checkTilesCol']['indexOf'](_0x9d108)) this['checkTilesCol']['push'](_0x9d108), this['checkCol'](_0x9d108);
		},
		'checkRow': function(_0x10d321) {
			var _0x2f2287 = curState()['gBoard']['pieces'],
				_0x1a7f81 = curState()['gBoard']['maps'],
				_0x1452b8 = this['col'],
				_0x597542 = _0x10d321['row'] - 0x1,
				_0x21d906 = _0x10d321['row'] + 0x1;
			0x0 > _0x597542 && (_0x597542 = 0x0);
			_0x21d906 >= _0x1a7f81['length'] && (_0x21d906 = _0x1a7f81['length'] - 0x1);
			for (_0x1a7f81 = _0x597542; _0x1a7f81 <= _0x21d906; _0x1a7f81++)
				if ((_0x597542 = _0x2f2287[_0x1a7f81][_0x1452b8]) && !(0x3 < _0x597542['powerUpId']) && _0x597542 != _0x10d321 && _0x597542['pieceId'] == _0x10d321['pieceId'] && 0x0 > this['checkTilesRow']['indexOf'](_0x597542)) this['checkTilesRow']['push'](_0x597542), this['checkRow'](_0x597542);
		},
		'checkPiecesAround': function() {
			curState()['checkOnGoing'] = !0x0;
			curState();
			if (curState()['gBoard']['pieces'][this['row']][this['col']] == this) {
				if (!this['preFuse']()) {
					if (0x3 <= this['checkTilesCol']['length'])
						for (var _0x1250e4 = 0x0; _0x1250e4 < this['checkTilesCol']['length']; _0x1250e4++) {
							var _0x16b07c = this['checkTilesCol'][_0x1250e4];
							_0x16b07c['exists'] && !_0x16b07c['isBreak'] && (curState()['chain'] += 0x1, _0x16b07c['onDestroy']());
						}
					if (0x3 <= this['checkTilesRow']['length'])
						for (_0x1250e4 = 0x0; _0x1250e4 < this['checkTilesRow']['length']; _0x1250e4++) _0x16b07c = this['checkTilesRow'][_0x1250e4], _0x16b07c['exists'] && !_0x16b07c['isBreak'] && (curState()['chain'] += 0x1, _0x16b07c['onDestroy']());
				}
				if (0x3 <= this['checkTilesRow']['length'] || 0x3 <= this['checkTilesCol']['length']) curState()['hint'] && (curState()['matches'] = [], curState()['hint']['kill'](), curState()['hint'] = null, curState()['hintCD'] = 0x0), curState()['checkAfterTutor'](), _0x1250e4 = 0x1, 0xa < curState()['chain'] && 0x14 > curState()['chain'] ? _0x1250e4 = 0x2 : 0x14 <= curState()['chain'] && (_0x1250e4 = 0x3), csound['sfxPlay']('match' + _0x1250e4);
				this['checkTilesCol'] = [];
				this['checkTilesRow'] = [];
			}
		},
		'preFuse': function() {
			var _0x5f2a5a = !0x0;
			if (0x3 == this['checkTilesCol']['length'] && 0x3 == this['checkTilesRow']['length'])
				if (ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x2]) this['fusePieces'](this['checkTilesCol'], 0x5), this['fusePieces'](this['checkTilesRow']);
				else if (ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x0]) {
				var _0x328f21 = ig['game']['rnd']['integerInRange'](0x1, 0x4);
				this['fusePieces'](this['checkTilesCol'], _0x328f21);
				this['fusePieces'](this['checkTilesRow']);
			} else _0x5f2a5a = !0x1;
			else 0x4 == this['checkTilesCol']['length'] && 0x3 > this['checkTilesRow']['length'] && ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x0] ? (_0x328f21 = ig['game']['rnd']['integerInRange'](0x1, 0x3), this['fusePieces'](this['checkTilesCol'], _0x328f21)) : 0x3 > this['checkTilesCol']['length'] && 0x4 == this['checkTilesRow']['length'] && ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x0] ? (_0x328f21 = ig['game']['rnd']['integerInRange'](0x1, 0x3), this['fusePieces'](this['checkTilesRow'], _0x328f21)) : 0x5 <= this['checkTilesCol']['length'] && 0x3 > this['checkTilesRow']['length'] ? ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x1] ? this['fusePieces'](this['checkTilesCol'], 0x4) : ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x0] ? (_0x328f21 = ig['game']['rnd']['integerInRange'](0x1, 0x3), this['fusePieces'](this['checkTilesCol'], _0x328f21)) : _0x5f2a5a = !0x1 : 0x3 > this['checkTilesCol']['length'] && 0x5 <= this['checkTilesRow']['length'] ? ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x1] ? this['fusePieces'](this['checkTilesCol'], 0x4) : ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x0] ? (_0x328f21 = ig['game']['rnd']['integerInRange'](0x1, 0x3), this['fusePieces'](this['checkTilesCol'], _0x328f21)) : _0x5f2a5a = !0x1 : 0x3 < this['checkTilesRow']['length'] && 0x3 <= this['checkTilesCol']['length'] || 0x3 <= this['checkTilesRow']['length'] && 0x3 <= this['checkTilesCol']['length'] ? ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x1] ? (this['fusePieces'](this['checkTilesCol'], 0x4), this['fusePieces'](this['checkTilesRow'])) : ig['GameData']['stage'] >= ig['GameData']['unlockPowerUp'][0x0] ? (_0x328f21 = ig['game']['rnd']['integerInRange'](0x1, 0x3), this['fusePieces'](this['checkTilesCol'], _0x328f21)) : _0x5f2a5a = !0x1 : _0x5f2a5a = !0x1;
			return _0x5f2a5a;
		},
		'fusePieces': function(_0xcc0b5b, _0x1a5c16) {
			this['groupParent']['bringToTop'](this);
			var _0x589bda = null;
			this['changeTo'] = _0x1a5c16 ? _0x1a5c16 : null;
			for (var _0x26d071 = 0x0; _0x26d071 < _0xcc0b5b['length']; _0x26d071++) {
				var _0x1ff5be = _0xcc0b5b[_0x26d071];
				if (_0x1ff5be && _0x1ff5be['exists'] && !_0x1ff5be['isBreak'])
					if (_0x1ff5be == this) curState()['gBoard']['pieces'][this['row']][this['col']] == this && (_0x589bda = ig['CallAsset']['addFrame'](this['x'], this['y'], 'game/effects/match09'), _0x589bda['anchor']['setTo'](0.5), _0x589bda['scale']['setTo'](0x0), curState()['gBoard']['gEffect']['add'](_0x589bda), _0x1ff5be = new Tweener(_0x589bda)['to']({
						'alpha': 0x0
					}, 0.1)['onComplete'](function() {
						this['kill']();
					} ['bind'](_0x589bda)), _0x589bda = new Tweener(_0x589bda['scale'])['to']({
						'x': 0x1,
						'y': 0x1
					}, 0.2)['onComplete'](function() {
						0x3 == this['checkTilesRow']['length'] && 0x3 == this['checkTilesCol'] && console['log'](this['changeTo']);
						var _0x438d3e = void 0x0;
						0x3 >= this['changeTo'] && (_0x438d3e = this['pieceId']);
						curState()['gBoard']['replacePiece'](this, this['changeTo'], _0x438d3e);
						0x0 < this['powerUpId'] && this['checkPowerUp']();
					} ['bind'](this)), _0x589bda['_settings']['chains']['push'](_0x1ff5be), _0x589bda['start'](), curState()['gBoard']['pieces'][this['row']][this['col']] = null);
					else {
						_0x1ff5be['isBreak'] = !0x0;
						curState()['chain'] += 0x1;
						_0x589bda = this['x'];
						0x0 == _0x589bda && (_0x589bda += 0.001);
						var _0x15e5fa = this['y'];
						0x0 == _0x15e5fa && (_0x15e5fa += 0.001);
						_0x589bda = new Tweener(_0x1ff5be)['to']({
							'x': _0x589bda,
							'y': _0x15e5fa
						}, 0.1)['easing'](ig['Tweener']['Easing']['Quadratic']['EaseOut'])['onComplete'](function() {
							this['onDestroy'](!0x1);
						} ['bind'](_0x1ff5be))['start']();
					}
			}
		},
		'onDestroy': function(_0x15fc8e) {
			_0x15fc8e = !0x1 == _0x15fc8e ? _0x15fc8e : !0x0;
			var _0x5afcaa = parseInt(curState()['chain'] / 0x5),
				_0x5afcaa = ig['GameData']['defPieceScore'] + 0.1 * ig['GameData']['defPieceScore'] * _0x5afcaa;
			curState()['plScore'] += parseInt(_0x5afcaa);
			this['isBreak'] = this['isMoving'] = !0x0;
			curState()['hintCD'] = 0x0;
			_0x15fc8e ? curState()['gBoard']['createMatchEffect'](this) : (this['checkIfMatchGoal'](), curState()['gBoard']['pieces'][this['row']][this['col']] = null);
		},
		'checkIfMatchGoal': function() {
			var _0x15bd91 = this['checkItemGoal']();
			if (_0x15bd91 && 0x0 < _0x15bd91['itemLeft']) {
				var _0x56dea0 = this['groupParent']['toGlobal'](this['x'], this['y']),
					_0x56dea0 = _0x15bd91['groupParent']['toLocal'](_0x56dea0['x'], _0x56dea0['y']);
				_0x15bd91['itemLeft']--;
				this['x'] = _0x56dea0['x'];
				this['y'] = _0x56dea0['y'];
				this['groupParent']['remove'](this);
				_0x15bd91['groupParent']['add'](this);
				this['goToGoal'](_0x15bd91['x'], _0x15bd91['y']);
			} else this['kill']();
		},
		'checkItemGoal': function() {
			var _0x5ef946 = null;
			if (0x3 < this['powerUpId']) return _0x5ef946;
			for (var _0x39de36 = curState()['gList']['items'], _0x36cde1 = 0x0; _0x36cde1 < _0x39de36['length']; _0x36cde1++) {
				var _0x6bdde4 = _0x39de36[_0x36cde1];
				if (_0x6bdde4['jewelId'] == this['pieceId']) {
					_0x5ef946 = _0x6bdde4;
					break;
				}
			}
			return _0x5ef946;
		},
		'goToGoal': function(_0x20d1c3, _0xcde58) {
			0x0 == _0x20d1c3 && (_0x20d1c3 += 0.001);
			0x0 == _0xcde58 && (_0xcde58 += 0.001);
			new Tweener(this)['to']({
				'x': _0x20d1c3,
				'y': _0xcde58,
				'scale': {
					'x': 0.5,
					'y': 0.5
				}
			}, 0.3)['onComplete'](function() {
				this['kill']();
			} ['bind'](this))['start']();
		},
		'setMapData': function(_0x558427, _0x34394a) {
			curState()['gBoard']['pieces'][this['row']][this['col']] = null;
			this['row'] = _0x558427;
			this['col'] = _0x34394a;
			curState()['gBoard']['pieces'][this['row']][this['col']] = this;
		},
		'moveTo': function(_0x1bb8d5) {
			if (!this['isMoving'] && !(this['row'] == this['_row'] && this['col'] == this['_col']) && (this['moveAfter'] = !0x0, this['isChecking'] = _0x1bb8d5, !this['isIn'])) {
				this['isMoving'] = !0x0;
				var _0xde3f6c = curState()['gBoard']['tiles'][this['row']][this['col']];
				_0x1bb8d5 = _0xde3f6c['x'];
				_0xde3f6c = _0xde3f6c['y'];
				0x0 == _0x1bb8d5 && (_0x1bb8d5 += 0.05);
				0x0 == _0xde3f6c && (_0xde3f6c += 0.05);
				var _0x2722ea = ig['Tweener']['Easing']['Quadratic']['EaseOut'];
				new Tweener(this)['to']({
					'x': _0x1bb8d5,
					'y': _0xde3f6c
				}, 0.2)['easing'](_0x2722ea)['onComplete'](function() {
					this['moveAfter'] = this['isMoving'] = !0x1;
				} ['bind'](this))['start']();
			}
		},
		'update': function() {
			this['parent']();
			this['inputEnabled'] && !this['isMoving'] && (!this['isBreak'] && 0x1 > this['alpha']) && (this['alpha'] = 0x1);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.power-up')['requires']('game.entities.objects.piece')['defines'](function() {
	EntityPowerUp = EntityPiece['extend']({
		'isBombed': !0x1,
		'lineEffects': null,
		'init': function(_0x2606a1, _0x4925aa, _0x9ca4db) {
			this['parent'](_0x2606a1, _0x4925aa, _0x9ca4db);
		},
		'setProperties': function(_0x1583e6) {
			this['parent'](_0x1583e6);
			this['setPowerUp']();
		},
		'setPowerUp': function() {
			0x0 != this['powerUpId'] && (this['powerUpImg'] = [], 0x4 == this['powerUpId'] ? this['pieceId'] = -0x1 : 0x5 == this['powerUpId'] && (this['pieceId'] = -0x2));
		},
		'createPowerUpImg': function(_0x195525) {
			var _0x5e5863 = '',
				_0x2f04df = '';
			if (0x1 == _0x195525 || 0x2 == _0x195525) _0x5e5863 = '-1', _0x2f04df = '-';
			_0x5e5863 = ig['CallAsset']['addFrame'](0x0, 0x0, 'game/powerup' + _0x195525 + _0x5e5863);
			_0x5e5863['anchor']['setTo'](0.5);
			this['addChild'](_0x5e5863);
			_0x195525 = ig['GenerateFrameNames']('game/powerup' + _0x195525 + _0x2f04df, 0x1, 0x2, '', 0x1);
			_0x5e5863['addAnim']('anim', 0.2, _0x195525, !0x1);
			_0x5e5863['playAnim']('anim');
			return _0x5e5863;
		},
		'checkClick': function() {
			curState()['gameStart'] && !curState()['gamePaused'] && !curState()['gameOver'] && (curState()['checkOnGoing'] || curState()['pieceClicked'] || curState()['gBoard']['checkAllMovement']() || this['parent']());
		},
		'releaseClick': function(_0x80e4a9) {
			curState()['pieceClicked'] && (0x5 == this['powerUpId'] ? (this['isBreak'] = !0x0, curState()['moveLeft']--, 0x1 > curState()['moveLeft'] && (curState()['gameOver'] = !0x0), curState()['checkAfterTutor'](), this['tweenExplode']()) : (this['tweenRelease'](), _0x80e4a9 = this['checkPiece'](_0x80e4a9), null != _0x80e4a9 ? 0x4 == _0x80e4a9['powerUpId'] && 0x4 == this['powerUpId'] ? this['exchangeThis'](_0x80e4a9) : this['pieceId'] != _0x80e4a9['pieceId'] ? (this['exchangeThis'](_0x80e4a9), curState()['checkAfterTutor']()) : (this['checkPointer'](), curState()['pieceHover'] || (curState()['pieceClicked'] = null)) : (this['checkPointer'](), curState()['pieceHover'] || (curState()['pieceClicked'] = null))));
		},
		'exchangeThis': function(_0x5addac) {
			var _0x39d681 = Math['abs'](this['col'] - _0x5addac['col']),
				_0x5791c2 = Math['abs'](this['row'] - _0x5addac['row']);
			0x0 == _0x39d681 && 0x1 == _0x5791c2 || 0x1 == _0x39d681 && 0x0 == _0x5791c2 ? (curState()['pieceHover'] = _0x5addac, curState()['gBoard']['exchangePieces'](this, _0x5addac)) : (this['checkPointer'](), curState()['pieceHover'] || (curState()['pieceClicked'] = null));
		},
		'onDestroy': function(_0x2b8a45) {
			_0x2b8a45 = !0x1 == _0x2b8a45 ? _0x2b8a45 : !0x0;
			this['parent'](_0x2b8a45);
			_0x2b8a45 || 0x5 == this['powerUpId'] && new Tweener(piece)['to']({
				'alpha': 0x0
			}, 0.01)['start']();
			this['checkPowerUp']();
		},
		'checkPowerUp': function() {
			if (!(0x0 == this['powerUpId'] || curState()['gBoard']['isDestroyAll'])) {
				0x5 == this['powerUpId'] ? this['explodeAround']() : 0x4 == this['powerUpId'] && (this['selectSameId'](), csound['sfxPlay']('samecolor'));
				if (0x3 >= this['powerUpId']) {
					if (!this['lineEffects']) {
						0x1 == this['powerUpId'] ? this['selectVertical']() : 0x2 == this['powerUpId'] ? this['selectHorizontal']() : 0x3 == this['powerUpId'] && (this['selectVertical'](), this['selectHorizontal']());
						csound['sfxPlay']('effect');
						var _0x4108a4 = curState()['gBoard']['tiles'][this['row']][this['col']];
						this['lineEffects'] = ig['game']['addGroup'](_0x4108a4['x'], _0x4108a4['y'], {
							'targets': [this]
						}, EntityLineEffects);
						curState()['gBoard']['gFrontBoard']['add'](this['lineEffects']);
					}
				} else curState()['hint'] && (curState()['matches'] = [], curState()['hint']['kill'](), curState()['hint'] = null, curState()['hintCD'] = 0x0);
				curState()['checkAfterTutor']();
			}
		},
		'selectVertical': function() {
			this['verPowerUp'] = [];
			var _0x6d3810 = curState()['gBoard']['pieces'],
				_0x57e7fc = this['row'] - 0x1;
			if (0x0 <= _0x57e7fc)
				for (var _0x54d898 = -0x1; 0x0 <= _0x57e7fc; _0x57e7fc--) {
					_0x54d898++;
					var _0x184f1b = _0x6d3810[_0x57e7fc][this['col']];
					if (_0x184f1b && _0x184f1b['exists'] && !_0x184f1b['isBreak']) {
						curState()['chain']++;
						var _0x2e406c = 0x64 * _0x54d898;
						setTimeout(function() {} ['bind'](_0x184f1b), _0x2e406c);
						_0x184f1b['isMoving'] = !0x0;
					}
				}
			_0x57e7fc = this['row'] + 0x1;
			if (_0x57e7fc < _0x6d3810['length'])
				for (_0x54d898 = -0x1; _0x57e7fc < _0x6d3810['length']; _0x57e7fc++) _0x184f1b = _0x6d3810[_0x57e7fc][this['col']], _0x54d898++, _0x184f1b && _0x184f1b['exists'] && !_0x184f1b['isBreak'] && (curState()['chain']++, _0x2e406c = 0x64 * _0x54d898, setTimeout(function() {} ['bind'](_0x184f1b), _0x2e406c), _0x184f1b['isMoving'] = !0x0);
			_0x6d3810 = 0x1;
			0xa < curState()['chain'] && 0x14 > curState()['chain'] ? _0x6d3810 = 0x2 : 0x14 <= curState()['chain'] && (_0x6d3810 = 0x3);
			csound['sfxPlay']('match' + _0x6d3810);
		},
		'selectHorizontal': function() {
			this['horPowerUp'] = [];
			var _0xfc1de0 = curState()['gBoard']['pieces'],
				_0x4cb775 = this['col'] - 0x1;
			if (0x0 <= _0x4cb775)
				for (var _0x429bd6 = -0x1; 0x0 <= _0x4cb775; _0x4cb775--) {
					var _0x1935aa = _0xfc1de0[this['row']][_0x4cb775];
					_0x429bd6++;
					if (_0x1935aa && _0x1935aa['exists'] && !_0x1935aa['isBreak']) {
						curState()['chain']++;
						var _0xdc89d6 = 0x64 * _0x429bd6;
						setTimeout(function() {} ['bind'](_0x1935aa), _0xdc89d6);
						_0x1935aa['isMoving'] = !0x0;
					}
				}
			_0x4cb775 = this['col'] + 0x1;
			if (_0x4cb775 < _0xfc1de0[this['row']]['length'])
				for (_0x429bd6 = -0x1; _0x4cb775 < _0xfc1de0[this['row']]['length']; _0x4cb775++) _0x1935aa = _0xfc1de0[this['row']][_0x4cb775], _0x429bd6++, _0x1935aa && _0x1935aa['exists'] && !_0x1935aa['isBreak'] && (curState()['chain']++, _0xdc89d6 = 0x64 * _0x429bd6, setTimeout(function() {} ['bind'](_0x1935aa), _0xdc89d6), _0x1935aa['isMoving'] = !0x0);
			_0xfc1de0 = 0x1;
			0xa < curState()['chain'] && 0x14 > curState()['chain'] ? _0xfc1de0 = 0x2 : 0x14 <= curState()['chain'] && (_0xfc1de0 = 0x3);
			csound['sfxPlay']('match' + _0xfc1de0);
		},
		'selectSameId': function() {
			var _0x3565f9 = [];
			0x0 > this['pieceId'] && (this['pieceId'] = ig['game']['rnd']['pick'](curState()['pieceTypes']));
			for (var _0x4ee01c = curState()['gBoard']['pieces'], _0x4c18b3 = 0x0; _0x4c18b3 < _0x4ee01c['length']; _0x4c18b3++)
				for (var _0x1636f4 = 0x0; _0x1636f4 < _0x4ee01c[_0x4c18b3]['length']; _0x1636f4++) {
					var _0x1bc26a = _0x4ee01c[_0x4c18b3][_0x1636f4];
					_0x1bc26a && _0x1bc26a['exists'] && !_0x1bc26a['isBreak'] && _0x1bc26a['pieceId'] == this['pieceId'] && (curState()['chain']++, _0x1bc26a['isBreak'] = !0x0, _0x3565f9['push'](_0x1bc26a));
				}
			for (_0x4c18b3 = 0x0; _0x4c18b3 < _0x3565f9['length']; _0x4c18b3++) _0x1bc26a = _0x3565f9[_0x4c18b3], new Tweener(_0x1bc26a['scale'])['to']({
				'x': 1.3,
				'y': 1.3
			}, 0.2)['easing'](ig['Tweener']['Easing']['Quadratic']['EaseOut'])['onComplete'](function() {
				curState()['timeEvent']['add'](0.3, function() {
					this['onDestroy']();
				}, this);
			} ['bind'](_0x1bc26a))['start']();
			_0x3565f9 = 0x1;
			0xa < curState()['chain'] && 0x14 > curState()['chain'] ? _0x3565f9 = 0x2 : 0x14 <= curState()['chain'] && (_0x3565f9 = 0x3);
			csound['sfxPlay']('match' + _0x3565f9);
		},
		'tweenExplode': function() {
			var _0xcdea31 = 0.7 * this['scale']['x'],
				_0x15d9db = 0.7 * this['scale']['y'],
				_0x537ede = ig['Tweener']['Easing']['Bounce']['EaseIn'];
			new Tweener(this['scale'])['to']({
				'x': _0xcdea31,
				'y': _0x15d9db
			}, 0.1)['yoyo'](!0x0)['repeat'](0x1)['easing'](_0x537ede)['onComplete'](this['onDestroy']['bind'](this))['start']();
		},
		'explodeAround': function() {
			csound['sfxPlay']('bomb');
			var _0x4f6033 = curState()['gBoard']['pieces'],
				_0x427c16 = curState()['gBoard']['maps'],
				_0xa6395f = this['col'] - 0x1,
				_0x26bc50 = this['col'] + 0x1,
				_0x3d713b = this['row'] - 0x1,
				_0x54ccd5 = this['row'] + 0x1;
			0x0 > _0x3d713b && (_0x3d713b = 0x0);
			_0x54ccd5 >= _0x427c16['length'] && (_0x54ccd5 = this['row']);
			0x0 > _0xa6395f && (_0xa6395f = 0x0);
			_0x26bc50 >= _0x427c16[this['row']]['length'] && (_0x26bc50 = this['col']);
			for (_0x427c16 = _0x3d713b; _0x427c16 <= _0x54ccd5; _0x427c16++)
				for (_0x3d713b = _0xa6395f; _0x3d713b <= _0x26bc50; _0x3d713b++) {
					var _0x458448 = _0x4f6033[_0x427c16][_0x3d713b];
					_0x458448 && _0x458448['exists'] && !_0x458448['isBreak'] && _0x458448 != this && (curState()['chain']++, _0x458448['isBreak'] = !0x0, curState()['timeEvent']['add'](0.15, _0x458448['onDestroy'], _0x458448));
				}
			curState()['checkOnGoing'] = !0x0;
			curState()['gBoard']['isCheckingBoard'] = !0x1;
			curState()['gBoard']['onGoing'] = !0x1;
		},
		'destroyAll': function() {
			for (var _0x2e524e = curState()['gBoard']['pieces'], _0x4f4bcc = 0x0; _0x4f4bcc < _0x2e524e['length']; _0x4f4bcc++)
				for (var _0xcdd48b = 0x0; _0xcdd48b < _0x2e524e[_0x4f4bcc]['length']; _0xcdd48b++) {
					var _0x2be997 = _0x2e524e[_0x4f4bcc][_0xcdd48b];
					_0x2be997 && _0x2be997['exists'] && !_0x2be997['isBreak'] && (curState()['chain']++, _0x2be997['onDestroy']());
				}
			curState()['gBoard']['onGoing'] = !0x0;
			_0x2e524e = curState()['gInGame']['x'] + 0x14;
			new Tweener(curState()['gInGame'])['to']({
				'x': _0x2e524e
			}, 0.03)['onComplete'](function() {
				this['onGoing'] = !0x1;
			} ['bind'](curState()['gBoard']))['repeat'](0x3)['yoyo'](!0x0)['start']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.play-board')['requires']('game.entities.addon.group', 'game.entities.objects.piece', 'game.entities.objects.power-up')['defines'](function() {
	EntityPlayBoard = EntityGroup['extend']({
		'tileSize': {
			'x': 0x45,
			'y': 0x47
		},
		'isDestroyAll': !0x1,
		'checkPiece1': null,
		'checkPiece2': null,
		'isCheckingBoard': !0x1,
		'checkEmptyTile': [],
		'countTry': 0x0,
		'onGoing': !0x1,
		'emptyExists': !0x1,
		'emptyPieceInEmptySpace': [],
		'matches': [],
		'countCheck': 0x0,
		'init': function(_0x56a8f0, _0x3aa253, _0x2b53eb) {
			this['parent'](_0x56a8f0, _0x3aa253, _0x2b53eb);
			this['actAfterExchange'] = new ig['AddSignal'](this);
			this['create']();
		},
		'create': function() {
			this['gPieces'] = ig['game']['addGroup']();
			this['add'](this['gPieces']);
			var _0x3b8012 = ig['GameData']['stageMaps'][0x0],
				_0x3e3478 = parseInt(ig['GameData']['stage'] / 0x5);
			_0x3e3478 >= ig['GameData']['stageMaps']['length'] && (_0x3e3478 = ig['game']['rnd']['integerInRange'](0x0, ig['GameData']['stageMaps']['length'] - 0x1));
			this['maps'] = _0x3b8012 = ig['GameData']['stageMaps'][_0x3e3478];
			this['tiles'] = [];
			this['mapPos'] = [];
			for (_0x3e3478 = 0x0; _0x3e3478 < _0x3b8012['length']; _0x3e3478++) {
				this['tiles'][_0x3e3478] = [];
				this['mapPos'][_0x3e3478] = [];
				for (var _0x132285 = 0x0; _0x132285 < _0x3b8012[_0x3e3478]['length']; _0x132285++) {
					var _0x30a026 = _0x3b8012[_0x3e3478][_0x132285];
					if (0x0 == _0x30a026) {
						var _0xdd80a3 = null,
							_0x30a026 = {
								'row': _0x3e3478,
								'col': _0x132285
							};
						this['checkEmptyTile']['push'](_0x30a026);
						this['mapPos'][_0x3e3478][_0x132285] = null;
					} else {
						_0xdd80a3 = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'game/tile');
						_0xdd80a3['anchor']['setTo'](0.5);
						_0xdd80a3['row'] = _0x3e3478;
						_0xdd80a3['col'] = _0x132285;
						var _0x30a026 = _0x3b8012['length'],
							_0x185cc7 = 0x0,
							_0x628643 = 0x0,
							_0x628643 = (_0x3b8012[_0x3e3478]['length'] - 0x1) / 0x2,
							_0x185cc7 = -_0xdd80a3['frame']['x'] * _0x628643 + _0xdd80a3['frame']['x'] * _0x132285,
							_0x628643 = (_0x30a026 - 0x1) / 0x2,
							_0x628643 = -_0xdd80a3['frame']['y'] * _0x628643 + _0xdd80a3['frame']['y'] * _0x3e3478;
						_0xdd80a3['x'] = _0x185cc7;
						_0xdd80a3['y'] = _0x628643;
						this['mapPos'][_0x3e3478][_0x132285] = {
							'x': _0x185cc7,
							'y': _0x628643
						};
					}
					this['tiles'][_0x3e3478][_0x132285] = _0xdd80a3;
				}
			}
			this['pieces'] = [];
			for (_0x3e3478 = 0x0; _0x3e3478 < this['tiles']['length']; _0x3e3478++) {
				this['pieces'][_0x3e3478] = [];
				for (_0x132285 = 0x0; _0x132285 < this['tiles'][_0x3e3478]['length']; _0x132285++) _0xdd80a3 = this['tiles'][_0x3e3478][_0x132285], null == _0xdd80a3 ? this['pieces'][_0x3e3478][_0x132285] = null : (_0x3b8012 = this['createPiece'](_0x3e3478, _0x132285), _0x3b8012['_row'] = _0x3e3478, _0x3b8012['_col'] = _0x132285, _0x3b8012['alpha'] = 0x1, _0x3b8012['y'] = _0xdd80a3['y'], 0x0 == _0xdd80a3['y'] && (_0x3b8012['y'] += 0.01), _0x3b8012['inputEnabled'] = !0x0);
			}
			this['gFrontBoard'] = ig['game']['addGroup']();
			this['add'](this['gFrontBoard']);
			this['gEffect'] = ig['game']['addGroup']();
			this['add'](this['gEffect']);
		},
		'exchangePieces': function(_0x1d3a48, _0x449aa7) {
			curState()['checkOnGoing'] = !0x0;
			0x4 == _0x1d3a48['powerUpId'] && 0x4 == _0x449aa7['powerUpId'] ? (this['isDestroyAll'] = !0x0, this['actAfterExchange']['add'](function() {
				curState()['pieceClicked']['destroyAll']();
			}, this), this['exchangeTween'](_0x1d3a48, _0x449aa7, !0x1), curState()['checkAfterTutor']()) : 0x4 == _0x1d3a48['powerUpId'] || 0x4 == _0x449aa7['powerUpId'] ? (this['exchangeTween'](_0x1d3a48, _0x449aa7, !0x1), 0x4 == _0x1d3a48['powerUpId'] && (curState()['checkAfterTutor'](), this['actAfterExchange']['add'](function() {
				curState()['pieceClicked']['pieceId'] = curState()['pieceHover']['pieceId'];
				curState()['pieceClicked']['onDestroy']();
			}, this)), 0x4 == _0x449aa7['powerUpId'] && (curState()['checkAfterTutor'](), this['actAfterExchange']['add'](function() {
				curState()['pieceHover']['pieceId'] = curState()['pieceClicked']['pieceId'];
				curState()['pieceHover']['onDestroy']();
			}, this))) : 0x1 <= _0x1d3a48['powerUpId'] && 0x3 >= _0x1d3a48['powerUpId'] && 0x1 <= _0x449aa7['powerUpId'] && 0x3 >= _0x449aa7['powerUpId'] ? (curState()['checkAfterTutor'](), this['exchangeTween'](_0x1d3a48, _0x449aa7, !0x1), this['actAfterExchange']['add'](function() {
				curState()['pieceClicked']['onDestroy']();
				curState()['pieceHover']['onDestroy']();
			}, this)) : this['exchangeTween'](_0x1d3a48, _0x449aa7, !0x0);
			this['checkSurround'](_0x1d3a48, _0x449aa7);
		},
		'exchangeTween': function(_0x1e5679, _0x566929, _0x38beeb) {
			if (!this['onGoing']) {
				this['onGoing'] = !0x0;
				this['isChecking'] = _0x38beeb;
				_0x38beeb = this['tiles'][_0x1e5679['row']][_0x1e5679['col']];
				var _0x16aee2 = this['tiles'][_0x566929['row']][_0x566929['col']],
					_0x2380f9 = new Vector2(_0x38beeb['x'], _0x38beeb['y']),
					_0x336fa6 = new Vector2(_0x16aee2['x'], _0x16aee2['y']);
				0x0 == _0x336fa6['x'] && (_0x336fa6['x'] += 0.05);
				0x0 == _0x336fa6['y'] && (_0x336fa6['y'] += 0.05);
				0x0 == _0x2380f9['x'] && (_0x2380f9['x'] += 0.05);
				0x0 == _0x2380f9['y'] && (_0x2380f9['y'] += 0.05);
				_0x1e5679['isMoving'] = !0x0;
				_0x566929['isMoving'] = !0x0;
				new Tweener(_0x1e5679)['to']({
					'x': _0x336fa6['x'],
					'y': _0x336fa6['y']
				}, 0.15)['onComplete'](function() {
					this['isMoving'] = !0x1;
				} ['bind'](_0x1e5679))['start']();
				new Tweener(_0x566929)['to']({
					'x': _0x2380f9['x'],
					'y': _0x2380f9['y']
				}, 0.15)['onComplete'](function() {
					curState()['gBoard']['checkAfterExchange']();
					this['isMoving'] = !0x1;
				} ['bind'](_0x566929))['start']();
				_0x1e5679['row'] = _0x16aee2['row'];
				_0x1e5679['col'] = _0x16aee2['col'];
				_0x1e5679['_row'] = _0x16aee2['row'];
				_0x1e5679['_col'] = _0x16aee2['col'];
				this['pieces'][_0x1e5679['row']][_0x1e5679['col']] = _0x1e5679;
				_0x566929['row'] = _0x38beeb['row'];
				_0x566929['col'] = _0x38beeb['col'];
				_0x566929['_row'] = _0x38beeb['row'];
				_0x566929['_col'] = _0x38beeb['col'];
				this['pieces'][_0x566929['row']][_0x566929['col']] = _0x566929;
			}
		},
		'checkAfterExchange': function() {
			this['onGoing'] = !0x1;
			this['isChecking'] ? this['checkSurrounding']() : curState()['pieceClicked'] ? 0x4 == curState()['pieceClicked']['powerUpId'] && curState() : curState()['checkOnGoing'] = !0x1;
			this['actAfterExchange']['dispatch']();
			curState()['pieceClicked'] = null;
			curState()['pieceHover'] = null;
			this['isChecking'] = !0x1;
			this['actAfterExchange'] = new ig['AddSignal'](this);
		},
		'checkSurround': function(_0x25a19e, _0xb4f42c) {
			this['checkPieceAround'](_0x25a19e, 0x1);
			this['checkPieceAround'](_0xb4f42c, 0x2);
		},
		'checkPieceAround': function(_0x30bdc1, _0x1059df) {
			_0x30bdc1 && _0x1059df && (this['checkPiece' + _0x1059df] = _0x30bdc1, _0x30bdc1['checkMatchAround']());
		},
		'checkSurrounding': function() {
			var _0x1136e3 = this['checkPiece1'],
				_0x20c49d = this['checkPiece2'];
			0x3 > _0x1136e3['checkTilesRow']['length'] && 0x3 > _0x20c49d['checkTilesRow']['length'] && 0x3 > _0x1136e3['checkTilesCol']['length'] && 0x3 > _0x20c49d['checkTilesCol']['length'] ? (_0x1136e3['checkTilesCol'] = [], _0x1136e3['checkTilesRow'] = [], _0x20c49d['checkTilesCol'] = [], _0x20c49d['checkTilesRow'] = [], this['exchangeTween'](_0x1136e3, _0x20c49d, !0x1)) : (curState()['moveLeft']--, 0x1 > curState()['moveLeft'] && (curState()['gameOver'] = !0x0), _0x1136e3['checkPiecesAround'](), _0x20c49d['checkPiecesAround']());
		},
		'createMatchEffect': function(_0x5d0f03) {
			var _0x5d875f = 'game/effects/match01',
				_0x185a53 = ig['GenerateFrameNames']('game/effects/match', 0x1, 0x14, '', 0x2),
				_0x2d5141 = 0.02;
			0x5 == _0x5d0f03['powerUpId'] && (_0x5d875f = 'game/effects/bomb1', _0x185a53 = ig['GenerateFrameNames']('game/effects/bomb', 0x1, 0x9, '', 0x1), _0x2d5141 = 0.03);
			_0x5d875f = ig['CallAsset']['addFrame'](_0x5d0f03['x'], _0x5d0f03['y'], _0x5d875f);
			_0x5d875f['piece'] = _0x5d0f03;
			_0x5d875f['anchor']['setTo'](0.5);
			_0x185a53 = _0x5d875f['addAnim']('match', _0x2d5141, _0x185a53, !0x0);
			_0x185a53['actInFrame'] = new ig['AddSignal'](_0x5d875f);
			_0x185a53['actInFrame']['add'](function() {
				this['checkIfMatchGoal']();
				curState()['gBoard']['pieces'][this['row']][this['col']] = null;
			}, _0x5d0f03);
			_0x185a53['onEnterFrame']['add'](function() {
				0x5 > this['spriteParent']['piece']['powerUpId'] && 0x8 == this['frame'] && (this['spriteParent']['piece']['alpha'] = 0x0);
			}, _0x185a53);
			_0x185a53['onComplete']['add'](function() {
				this['currentAnim']['actInFrame']['dispatch']();
				this['piece']['alpha'] = 0x1;
				this['kill']();
			}, _0x5d875f);
			_0x5d875f['playAnim']('match');
			this['gEffect']['add'](_0x5d875f);
			0x5 == _0x5d0f03['powerUpId'] && new Tweener(_0x5d0f03)['to']({
				'alpha': 0x0
			}, 0.01)['start']();
		},
		'checkBoard': function() {
			0x3e8 <= this['countTry'] || (this['emptyExists'] = !0x1, this['countTry']++, this['refillRow'](), this['checkBlindSpots'](), this['emptyExists'] ? this['checkBoard']() : (this['moveAllPieces'](!0x0), curState()['checkOnGoing'] = !0x1));
		},
		'checkBlindSpots': function() {
			for (var _0xec4dcd = 0x1; _0xec4dcd < this['maps']['length']; _0xec4dcd++)
				for (var _0xf5eff4 = 0x0; _0xf5eff4 < this['maps'][_0xec4dcd]['length']; _0xf5eff4++) {
					var _0x5bc504 = this['tiles'][_0xec4dcd][_0xf5eff4],
						_0x3a2243 = this['pieces'][_0xec4dcd][_0xf5eff4];
					if (!(0x0 == this['maps'][_0xec4dcd][_0xf5eff4] || _0x3a2243) && 0x0 == this['maps'][_0xec4dcd - 0x1][_0xf5eff4]) this['trackBlindPath'](_0x5bc504, [_0x5bc504]), this['emptyExists'] = !0x0;
				}
		},
		'trackBlindPath': function(_0x157f05, _0x3c097c) {
			var _0x137b70 = _0x157f05['col'] - 0x1,
				_0x3a88e2 = _0x157f05['col'] + 0x1,
				_0x515cd3 = [],
				_0x4e848b = [];
			if (0x0 <= _0x137b70)
				for (var _0x3a423a = !0x0, _0x5b5f19 = []; _0x3a423a && 0x0 <= _0x137b70;)
					if (0x0 == this['maps'][_0x157f05['row']][_0x137b70]) _0x3a423a = !0x1;
					else {
						var _0x22ba64 = this['tiles'][_0x157f05['row']][_0x137b70];
						_0x5b5f19['push'](_0x22ba64);
						_0x22ba64 = this['checkUpperRow'](_0x22ba64, _0x515cd3);
						_0x22ba64['origin'] ? (_0x515cd3 = _0x5b5f19['concat'](_0x22ba64['path']), _0x3a423a = !0x1) : _0x137b70--;
					} if (_0x3a88e2 < this['maps'][_0x157f05['row']]['length']) {
				_0x3a423a = !0x0;
				for (_0x137b70 = []; _0x3a423a && _0x3a88e2 < this['maps'][_0x157f05['row']]['length'];) 0x0 == this['maps'][_0x157f05['row']][_0x3a88e2] ? _0x3a423a = !0x1 : (_0x5b5f19 = this['tiles'][_0x157f05['row']][_0x3a88e2], _0x137b70['push'](_0x5b5f19), _0x22ba64 = this['checkUpperRow'](_0x5b5f19, _0x4e848b), _0x22ba64['origin'] ? (_0x4e848b = _0x137b70['concat'](_0x22ba64['path']), _0x3a423a = !0x1) : _0x3a88e2++);
			}
			if (0x0 == _0x515cd3['length'] && 0x0 == _0x4e848b['length']) _0x157f05 = this['tiles'][_0x157f05['row'] + 0x1][_0x157f05['col']], _0x3c097c['push'](_0x157f05), this['trackBlindPath'](_0x157f05, _0x3c097c);
			else {
				_0x3a88e2 = -0x1;
				_0x3a423a = null;
				_0x5b5f19 = _0x3c097c['concat'](_0x515cd3);
				for (_0x515cd3 = 0x0; _0x515cd3 < _0x5b5f19['length']; _0x515cd3++) {
					var _0x558a7c = _0x5b5f19[_0x515cd3];
					if (_0x558a7c = this['pieces'][_0x558a7c['row']][_0x558a7c['col']]) {
						_0x3a88e2 = _0x515cd3;
						_0x3a423a = _0x558a7c;
						break;
					}
				}
				for (var _0x22ba64 = -0x1, _0x2f9a9d = null, _0x137b70 = _0x3c097c['concat'](_0x4e848b), _0x515cd3 = 0x0; _0x515cd3 < _0x137b70['length']; _0x515cd3++)
					if (_0x558a7c = _0x137b70[_0x515cd3], _0x558a7c = this['pieces'][_0x558a7c['row']][_0x558a7c['col']]) {
						_0x22ba64 = _0x515cd3;
						_0x2f9a9d = _0x558a7c;
						break;
					} 0x0 <= _0x22ba64 && 0x0 <= _0x3a88e2 ? _0x3a88e2 < _0x22ba64 ? this['resetPieceMap'](_0x5b5f19) : _0x22ba64 < _0x3a88e2 ? this['resetPieceMap'](_0x137b70) : ig['game']['rnd']['pick']([_0x2f9a9d, _0x3a423a]) == _0x2f9a9d ? this['resetPieceMap'](_0x137b70) : this['resetPieceMap'](_0x5b5f19) : 0x0 <= _0x3a88e2 && 0x0 > _0x22ba64 ? this['resetPieceMap'](_0x5b5f19) : 0x0 <= _0x22ba64 && 0x0 > _0x3a88e2 && this['resetPieceMap'](_0x137b70);
			}
		},
		'checkUpperRow': function(_0x5d6c1d, _0x4ccc1d) {
			var _0x271895 = !0x1;
			if (0x0 == _0x5d6c1d['row']) return !0x0;
			for (var _0x54a089 = !0x0, _0x3bf2e9 = []; !0x0 == _0x54a089;) {
				var _0xfac1dc = _0x5d6c1d['row'] - 0x1;
				0x0 == this['maps'][_0xfac1dc][_0x5d6c1d['col']] ? _0x54a089 = !0x1 : (_0x3bf2e9['push'](this['tiles'][_0xfac1dc][_0x5d6c1d['col']]), 0x0 == _0xfac1dc ? (_0x271895 = !0x0, _0x54a089 = !0x1, _0x4ccc1d = _0x4ccc1d['concat'](_0x3bf2e9)) : _0x5d6c1d = this['tiles'][_0xfac1dc][_0x5d6c1d['col']]);
			}
			return {
				'origin': _0x271895,
				'path': _0x4ccc1d
			};
		},
		'resetPieceMap': function(_0x14e102) {
			for (var _0xecb37c = !0x1, _0x2c62d3 = 0x1; _0x2c62d3 < _0x14e102['length']; _0x2c62d3++) {
				var _0x4061c5 = _0x14e102[_0x2c62d3],
					_0x189f1b = _0x14e102[_0x2c62d3 - 0x1],
					_0x172c66 = this['pieces'][_0x4061c5['row']][_0x4061c5['col']],
					_0x47f6ca = this['pieces'][_0x189f1b['row']][_0x189f1b['col']];
				_0x172c66 && !_0x47f6ca ? (_0x172c66['setMapData'](_0x189f1b['row'], _0x189f1b['col']), _0xecb37c = !0x0) : !_0x172c66 && 0x0 == _0x4061c5['row'] && (this['createPiece'](_0x4061c5['row'], _0x4061c5['col']), _0xecb37c = !0x0);
			}
			_0xecb37c && this['resetPieceMap'](_0x14e102);
		},
		'refillRow': function() {
			for (var _0x2b40ec = this['maps']['length'] - 0x1, _0x114d46 = 0x0; _0x114d46 < _0x2b40ec; _0x114d46++)
				for (var _0x32fa87 = 0x0; _0x32fa87 < this['maps'][_0x114d46]['length']; _0x32fa87++)
					if (0x0 != this['maps'][_0x114d46][_0x32fa87]) {
						var _0x5d3177 = this['pieces'][_0x114d46][_0x32fa87];
						if (null == _0x5d3177)
							if (0x0 == _0x114d46) _0x5d3177 = this['createPiece'](_0x114d46, _0x32fa87), _0x5d3177['tweenIn']();
							else continue;
						var _0x3fde51 = _0x114d46 + 0x1,
							_0x57d0f1 = this['maps'][_0x3fde51][_0x32fa87];
						null == this['pieces'][_0x3fde51][_0x32fa87] && 0x1 == _0x57d0f1 && (_0x5d3177['setMapData'](_0x3fde51, _0x32fa87), this['emptyExists'] = !0x0);
					}
		},
		'moveAllPieces': function(_0xe6c9fb) {
			for (var _0x11e62a = 0x0; _0x11e62a < this['pieces']['length']; _0x11e62a++)
				for (var _0x203627 = 0x0; _0x203627 < this['pieces'][_0x11e62a]['length']; _0x203627++) {
					var _0x2626ca = this['pieces'][_0x11e62a][_0x203627];
					_0x2626ca && (0x1 > _0x2626ca['alpha'] && _0x2626ca['tweenIn'](), _0x2626ca['col'] == _0x2626ca['_col'] && _0x2626ca['row'] == _0x2626ca['_row'] || _0x2626ca['moveTo'](_0xe6c9fb));
				}
		},
		'moveInstanly': function() {
			for (var _0x26453a = 0x0; _0x26453a < this['pieces']['length']; _0x26453a++)
				for (var _0x2e67a3 = 0x0; _0x2e67a3 < this['pieces'][_0x26453a]['length']; _0x2e67a3++) {
					var _0x4bb90e = this['pieces'][_0x26453a][_0x2e67a3];
					if (_0x4bb90e && !_0x4bb90e['isBreak'] && (!_0x4bb90e['isMoving'] && !_0x4bb90e['onGoing']) && !(_0x4bb90e['col'] == _0x4bb90e['_col'] && _0x4bb90e['row'] == _0x4bb90e['_row'])) {
						var _0x13ad10 = this['tiles'][_0x4bb90e['row']][_0x4bb90e['col']],
							_0x181542 = _0x13ad10['x'],
							_0x13ad10 = _0x13ad10['y'];
						0x0 == _0x181542 && (_0x181542 += 0.05);
						0x0 == _0x13ad10 && (_0x13ad10 += 0.05);
						_0x4bb90e['x'] = _0x181542;
						_0x4bb90e['y'] = _0x13ad10;
						_0x4bb90e['_row'] = _0x4bb90e['row'];
						_0x4bb90e['_col'] = _0x4bb90e['col'];
						_0x4bb90e['onGoing'] = !0x1;
						_0x4bb90e['isBreak'] = !0x1;
					}
				}
		},
		'createPiece': function(_0x4bc7a1, _0x5e1010, _0x4b9ad7, _0x15e4a4) {
			var _0x34a1de = this['tiles'][_0x4bc7a1][_0x5e1010],
				_0x3538aa = _0x34a1de['x'],
				_0x34a1de = _0x34a1de['y'] - 0.75 * _0x34a1de['height'],
				_0x1609ce = ig['game']['rnd']['realInRange'](0x0, 0x64);
			void 0x0 == _0x4b9ad7 && (_0x4b9ad7 = 0x0);
			var _0x3807d0 = EntityPiece;
			_0x15e4a4 = _0x15e4a4 ? _0x15e4a4 : ig['game']['rnd']['pick'](curState()['pieceTypes']);
			var _0x5107c3 = 'game/gem' + _0x15e4a4;
			if (0x0 < _0x4b9ad7) _0x3807d0 = EntityPowerUp, _0x5107c3 = 0x3 < _0x4b9ad7 ? 'game/powerup' + _0x4b9ad7 : 'game/effects/line/gem' + _0x15e4a4 + '-' + _0x4b9ad7;
			else if (0x5f < _0x1609ce && !curState()['gList']['isCompleted'] && curState()['pageReady']) {
				var _0x1609ce = ig['GameData']['stage'],
					_0x3807d0 = ig['GameData']['unlockPowerUp'],
					_0xfcc9c1 = ig['game']['rnd']['realInRange'](0x0, 0x64);
				0x50 >= _0xfcc9c1 && _0x1609ce >= _0x3807d0[0x0] ? _0x4b9ad7 = ig['game']['rnd']['integerInRange'](0x1, 0x3) : 0x50 < _0xfcc9c1 && _0x1609ce >= _0x3807d0[0x1] ? _0x4b9ad7 = 0x4 : 0x50 < _0xfcc9c1 && _0x1609ce >= _0x3807d0[0x2] && (_0x4b9ad7 = ig['game']['rnd']['pick']([0x4, 0x5]));
				0x3 < _0x4b9ad7 ? _0x5107c3 = 'game/powerup' + _0x4b9ad7 : 0x0 < _0x4b9ad7 && 0x3 >= _0x4b9ad7 && (_0x5107c3 = 'game/effects/line/gem' + _0x15e4a4 + '-' + _0x4b9ad7);
				_0x3807d0 = EntityPowerUp;
			}
			_0x4b9ad7 = ig['CallAsset']['addFrame'](_0x3538aa, _0x34a1de, _0x5107c3, {
				'pieceId': _0x15e4a4,
				'powerUpId': _0x4b9ad7
			}, _0x3807d0);
			_0x4b9ad7['anchor']['setTo'](0.5);
			_0x4b9ad7['row'] = _0x4bc7a1;
			_0x4b9ad7['col'] = _0x5e1010;
			this['gPieces']['add'](_0x4b9ad7);
			_0x3538aa = ig['game']['rnd']['realInRange'](0x1, 0x64);
			_0x34a1de = 0x1e;
			0x5 >= ig['GameData']['stage'] && (_0x34a1de = 0xa);
			_0x3538aa <= _0x34a1de && _0x4b9ad7['createSparkling']();
			return this['pieces'][_0x4bc7a1][_0x5e1010] = _0x4b9ad7;
		},
		'checkAllMovement': function() {
			this['countCheck']++;
			for (var _0x4a70b0 = !0x1, _0x5c238b = 0x0; _0x5c238b < this['pieces']['length']; _0x5c238b++)
				for (var _0x3b0114 = 0x0; _0x3b0114 < this['pieces'][_0x5c238b]['length']; _0x3b0114++) {
					var _0x47ceea = this['pieces'][_0x5c238b][_0x3b0114];
					if (_0x47ceea && (_0x47ceea['isMoving'] || _0x47ceea['isBreak'] || _0x47ceea['isIn'])) _0x4a70b0 = !0x0;
				}
			0x0 < this['gEffect']['children']['length'] && (_0x4a70b0 = !0x0);
			return _0x4a70b0;
		},
		'checkAfterMoving': function() {
			for (var _0xafa8fc = 0x0; _0xafa8fc < this['pieces']['length']; _0xafa8fc++)
				for (var _0x51ffd8 = 0x0; _0x51ffd8 < this['pieces'][_0xafa8fc]['length']; _0x51ffd8++) {
					var _0x11eff0 = this['pieces'][_0xafa8fc][_0x51ffd8];
					_0x11eff0 && _0x11eff0['exists'] && !_0x11eff0['isBreak'] && !(_0x11eff0['row'] == _0x11eff0['_row'] && _0x11eff0['col'] == _0x11eff0['_col']) && (_0x11eff0['_row'] = _0x11eff0['row'], _0x11eff0['_col'] = _0x11eff0['col'], _0x11eff0['isChecking'] ? _0x11eff0['checkMatchAround']() : (_0x11eff0['checkTilesCol'] = [], _0x11eff0['checkTilesRow'] = []), _0x11eff0['checkPiecesAround'](), _0x11eff0['checkTilesCol'] = [], _0x11eff0['checkTilesRow'] = []);
				}
			this['isDestroyAll'] = !0x1;
		},
		'checkPossibleMove': function() {
			for (var _0x1216fa = !0x1, _0x451a9b = [], _0x46940e = [], _0x1a98cb = [], _0x5d7748 = 0x0; _0x5d7748 < curState()['pieceTypes']['length']; _0x5d7748++) _0x46940e['push'](0x0);
			var _0x20eccd = !0x1,
				_0x5d7748 = 0x0;
			_0x90c106: for (; _0x5d7748 < this['maps']['length']; _0x5d7748++)
				for (var _0x1b2e0f = 0x0; _0x1b2e0f < this['maps'][_0x5d7748]['length']; _0x1b2e0f++) {
					var _0x451a9b = [],
						_0x1b2079 = this['pieces'][_0x5d7748][_0x1b2e0f];
					if (0x0 != this['maps'][_0x5d7748][_0x1b2e0f] && _0x1b2079) {
						_0x1a98cb['push'](_0x1b2079);
						if (0x3 < _0x1b2079['powerUpId'] && curState()['pageReady']) {
							_0x1216fa = !0x0;
							_0x451a9b = [];
							break _0x90c106;
						}
						var _0x18e4e6 = null;
						0x0 <= _0x5d7748 - 0x1 && this['pieces'][_0x5d7748 - 0x1][_0x1b2e0f] && (_0x18e4e6 = this['pieces'][_0x5d7748 - 0x1][_0x1b2e0f], _0x451a9b = [_0x1b2079, _0x18e4e6], _0x1216fa = this['checkPoss'](_0x1b2079, _0x18e4e6));
						_0x18e4e6 = null;
						_0x5d7748 + 0x1 < this['pieces']['length'] && this['pieces'][_0x5d7748 + 0x1][_0x1b2e0f] && (_0x18e4e6 = this['pieces'][_0x5d7748 + 0x1][_0x1b2e0f], _0x451a9b = [_0x1b2079, _0x18e4e6], _0x1216fa = this['checkPoss'](_0x1b2079, _0x18e4e6));
						_0x18e4e6 = null;
						0x0 <= _0x1b2e0f - 0x1 && this['pieces'][_0x5d7748][_0x1b2e0f - 0x1] && (_0x18e4e6 = this['pieces'][_0x5d7748][_0x1b2e0f - 0x1], _0x451a9b = [_0x1b2079, _0x18e4e6], _0x1216fa = this['checkPoss'](_0x1b2079, _0x18e4e6));
						_0x18e4e6 = null;
						_0x1b2e0f + 0x1 < this['pieces'][_0x5d7748]['length'] && this['pieces'][_0x5d7748][_0x1b2e0f + 0x1] && (_0x18e4e6 = this['pieces'][_0x5d7748][_0x1b2e0f + 0x1], _0x451a9b = [_0x1b2079, _0x18e4e6], _0x1216fa = this['checkPoss'](_0x1b2079, _0x18e4e6));
						_0x1b2079 = curState()['pieceTypes']['indexOf'](_0x1b2079['pieceId']);
						_0x46940e[_0x1b2079] += 0x1;
						0x3 <= _0x46940e[_0x1b2079] && (_0x20eccd = !0x0);
						if (_0x1216fa) break _0x90c106;
					}
				}!_0x1216fa && curState()['gList']['isCompleted'] && (_0x1216fa = !0x0);
			_0x1216fa ? (curState()['matches'] = _0x451a9b, curState()['pageReady'] ? this['moveAllPieces'](!0x1) : this['checkAfterShuffle']() ? this['reshuffle']() : this['moveInstanly'](!0x1)) : (curState()['matches'] = [], _0x20eccd || (_0x1216fa = ig['game']['rnd']['pick'](_0x1a98cb), this['replacePiece'](_0x1216fa)), this['reshuffle']());
		},
		'checkPoss': function(_0x343187, _0x11d806) {
			var _0x1ce4ab = !0x1;
			if (!_0x343187 || !_0x11d806) return _0x1ce4ab;
			var _0x4d29e9 = _0x343187['row'],
				_0x486732 = _0x343187['col'],
				_0x49ad14 = _0x11d806['row'],
				_0x3ad408 = _0x11d806['col'];
			_0x343187['row'] = _0x49ad14;
			_0x343187['col'] = _0x3ad408;
			_0x11d806['row'] = _0x4d29e9;
			_0x11d806['col'] = _0x486732;
			_0x343187['checkMatchAround']();
			_0x11d806['checkMatchAround']();
			if (0x3 <= _0x343187['checkTilesRow']['length'] || 0x3 <= _0x343187['checkTilesCol']['length'] || 0x3 <= _0x11d806['checkTilesRow']['length'] || 0x3 <= _0x11d806['checkTilesCol']['length']) _0x343187['pieceId'] != _0x11d806['pieceId'] && (_0x1ce4ab = !0x0);
			0x0 < _0x343187['powerUpId'] && 0x0 < _0x11d806['powerUpId'] && (_0x1ce4ab = !0x0);
			_0x343187['row'] = _0x4d29e9;
			_0x343187['col'] = _0x486732;
			_0x11d806['row'] = _0x49ad14;
			_0x11d806['col'] = _0x3ad408;
			return _0x1ce4ab;
		},
		'replacePiece': function(_0x22c6c0, _0x461596, _0x207380) {
			if (_0x22c6c0) {
				if (!_0x461596 || 0x0 >= _0x461596) _0x461596 = ig['game']['rnd']['pick']([0x4, 0x5]);
				var _0x2c7f78 = this['tiles'][_0x22c6c0['row']][_0x22c6c0['col']];
				_0x461596 = this['createPiece'](_0x22c6c0['row'], _0x22c6c0['col'], _0x461596, _0x207380);
				_0x461596['_row'] = _0x22c6c0['row'];
				_0x461596['_col'] = _0x22c6c0['col'];
				_0x461596['y'] = _0x2c7f78['y'];
				0x0 == _0x2c7f78['y'] && (_0x461596['y'] += 0.01);
				_0x461596['alpha'] = 0x1;
				_0x461596['inputEnabled'] = !0x0;
				_0x22c6c0['kill']();
			}
		},
		'reshuffle': function() {
			for (var _0x48ba9c = [], _0x21e078 = 0x0; _0x21e078 < this['pieces']['length']; _0x21e078++)
				for (var _0x2aa9c4 = 0x0; _0x2aa9c4 < this['pieces'][_0x21e078]['length']; _0x2aa9c4++) {
					var _0xcb02 = this['pieces'][_0x21e078][_0x2aa9c4];
					_0xcb02 && _0x48ba9c['push'](_0xcb02);
				}
			this['pieces'] = [];
			for (_0x21e078 = 0x0; _0x21e078 < this['maps']['length']; _0x21e078++) {
				this['pieces'][_0x21e078] = [];
				for (_0x2aa9c4 = 0x0; _0x2aa9c4 < this['maps'][_0x21e078]['length']; _0x2aa9c4++)
					if (0x0 == this['maps'][_0x21e078][_0x2aa9c4]) this['pieces'][_0x21e078][_0x2aa9c4] = null;
					else {
						for (_0xcb02 = null; !_0xcb02;) {
							var _0x5a2bc3 = ig['game']['rnd']['integerInRange'](0x0, _0x48ba9c['length'] - 0x1),
								_0xcb02 = _0x48ba9c[_0x5a2bc3];
							_0x48ba9c['splice'](_0x5a2bc3, 0x1);
						}
						_0xcb02['row'] = _0x21e078;
						_0xcb02['col'] = _0x2aa9c4;
						this['pieces'][_0x21e078][_0x2aa9c4] = _0xcb02;
					}
			}
			this['checkAfterShuffle']() ? this['reshuffle']() : this['checkPossibleMove']();
		},
		'checkAfterShuffle': function() {
			for (var _0x5f0e45 = !0x1, _0x390188 = 0x0; _0x390188 < this['pieces']['length']; _0x390188++)
				for (var _0x1600d7 = 0x0; _0x1600d7 < this['pieces'][_0x390188]['length']; _0x1600d7++) {
					var _0x163c54 = this['pieces'][_0x390188][_0x1600d7];
					if (_0x163c54 && !_0x163c54['isBreak']) {
						_0x163c54['checkMatchAround']();
						if (0x3 <= _0x163c54['checkTilesCol']['length'] || 0x3 <= _0x163c54['checkTilesRow']['length']) _0x5f0e45 = !0x0;
						_0x163c54['checkTilesCol'] = [];
						_0x163c54['checkTilesRow'] = [];
					}
				}
			return _0x5f0e45;
		},
		'update': function() {
			this['parent']();
			!this['checkAllMovement']() && !this['onGoing'] && curState()['pageReady'] && (curState()['checkOnGoing'] ? this['isCheckingBoard'] || (this['isCheckingBoard'] = !0x0, this['checkBoard'](), this['countTry'] = 0x0) : (this['isCheckingBoard'] ? this['isCheckingBoard'] = !0x1 : curState()['gameOver'] ? curState()['gameEnd']() : this['checkPossibleMove'](), this['checkAfterMoving']()), 0x0 < this['countCheck'] && (this['countCheck'] = 0x0));
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.result')['requires']('game.entities.addon.group')['defines'](function() {
	EntityResult = EntityGroup['extend']({
		'isCompleted': !0x1,
		'init': function(_0x529f3e, _0xd2899b, _0x158be7) {
			this['parent'](_0x529f3e, _0xd2899b, _0x158be7);
			this['create']();
		},
		'create': function() {
			this['isIn'] = !0x1;
			this['bg'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'game/result-bg');
			this['bg']['anchor']['setTo'](0.5);
			this['add'](this['bg']);
			this['ribbon'] = ig['CallAsset']['addFrameImage'](0x0, 0.45 * -this['bg']['size']['y'], 'game/result-ribbon');
			this['ribbon']['anchor']['setTo'](0.5);
			this['add'](this['ribbon']);
			this['stars'] = [];
			for (var _0x3d300e = 0x0; 0x3 > _0x3d300e; _0x3d300e++) {
				var _0x276a14 = ig['CallAsset']['addFrameImage'](0x0, 0.28 * -this['bg']['size']['y'], 'game/result-star-bg');
				_0x276a14['anchor']['setTo'](0.5);
				this['add'](_0x276a14);
				_0x276a14['x'] = -(1.1 * _0x276a14['size']['x']) + 1.1 * _0x276a14['size']['x'] * _0x3d300e;
				0x0 == _0x3d300e ? (_0x276a14['angle'] = -0xa, _0x276a14['y'] += 0x5) : 0x2 == _0x3d300e && (_0x276a14['angle'] = 0xa, _0x276a14['y'] = this['stars'][0x0]['y']);
				var _0x4e37f8 = ig['CallAsset']['addFrameImage'](_0x276a14['x'], _0x276a14['y'], 'game/result-star');
				_0x4e37f8['anchor']['setTo'](0.5);
				_0x4e37f8['angle'] = _0x276a14['angle'];
				_0x4e37f8['scale']['setTo'](0x0);
				this['add'](_0x4e37f8);
				_0x276a14['starOn'] = _0x4e37f8;
				this['stars']['push'](_0x276a14);
			}
			this['scoreTxt'] = ig['game']['addText'](-(0.35 * this['bg']['size']['x']), 0.13 * -this['bg']['size']['y'], _STRINGS['Game']['score'], 0x23, fonts['font1']);
			this['scoreTxt']['anchor']['setTo'](0x0, 0.5);
			this['scoreTxt']['fill'] = '#cc7509';
			this['add'](this['scoreTxt']);
			this['showScore'] = ig['game']['addText'](0.35 * this['bg']['size']['x'], this['scoreTxt']['y'], '0000', this['scoreTxt']['fontSize'], fonts['font1']);
			this['showScore']['anchor']['setTo'](0x1, 0.5);
			this['showScore']['fill'] = 'white';
			this['add'](this['showScore']);
			this['highScoreTxt'] = ig['game']['addText'](this['scoreTxt']['x'], this['scoreTxt']['y'] + 1.2 * this['scoreTxt']['size']['y'], _STRINGS['Game']['highscore'], this['scoreTxt']['fontSize'], fonts['font1']);
			this['highScoreTxt']['anchor']['setTo'](0x0, 0.5);
			this['highScoreTxt']['fill'] = this['scoreTxt']['fill'];
			this['add'](this['highScoreTxt']);
			this['showHigh'] = ig['game']['addText'](this['showScore']['x'], this['highScoreTxt']['y'], '0000', this['highScoreTxt']['fontSize'], fonts['font1']);
			this['showHigh']['anchor']['setTo'](0x1, 0.5);
			this['showHigh']['fill'] = 'white';
			this['add'](this['showHigh']);
			this['goalBox'] = ig['CallAsset']['addFrameImage'](0x0, 0.15 * this['bg']['size']['y'], 'game/result-list');
			this['goalBox']['anchor']['setTo'](0.5);
			this['add'](this['goalBox']);
			this['homeBtn'] = ig['CallAsset']['addFrame'](0.2 * -this['bg']['size']['x'], 0.35 * this['bg']['size']['y'], 'ingame/buttons/menu', {}, EntityClickBtn);
			this['homeBtn']['onClick']['add'](function() {
				ig['game']['changePage'](LevelMainmenu);
			}, this);
			this['add'](this['homeBtn']);
			this['replayBtn'] = ig['CallAsset']['addFrame'](0x0, this['homeBtn']['y'], 'ingame/buttons/replay', {}, EntityClickBtn);
			this['replayBtn']['onStartClick']['add'](function() {
				ig['game']['disableBtns']();
			}, this);
			this['replayBtn']['onClick']['add'](function() {
				ig['game']['changePage'](LevelGameplay);
			}, this);
			this['add'](this['replayBtn']);
			this['nextBtn'] = ig['CallAsset']['addFrame'](0.2 * this['bg']['size']['x'], this['homeBtn']['y'], 'ingame/buttons/next-stage', {}, EntityClickBtn);
			this['nextBtn']['onClick']['add'](function() {
				try {
					ig['yandex']['showAd']();
				} catch (_0x3728b5) {
					console['log'](_0x3728b5);
				}
				var _0x330e2b = ig['GameData']['stage'] + 0x1;
				_0x330e2b < ig['GameData']['totalStages'] ? (ig['GameData']['stage'] = _0x330e2b, ig['game']['changePage'](LevelGameplay)) : ig['game']['changePage'](LevelMainmenu);
			}, this);
			this['add'](this['nextBtn']);
			this['prepare']();
		},
		'createList': function() {
			for (var _0x5e404a = curState()['gList']['items'], _0x222c6f = !0x0, _0x1e83d2 = 0x0; _0x1e83d2 < _0x5e404a['length']; _0x1e83d2++) {
				var _0xe44d4d = _0x5e404a[_0x1e83d2],
					_0xcc3719 = ig['CallAsset']['addFrameImage'](this['goalBox']['x'], this['goalBox']['y'], 'game/gem' + _0xe44d4d['jewelId']);
				_0xcc3719['anchor']['setTo'](0.5);
				_0xcc3719['scale']['setTo'](0.8);
				this['add'](_0xcc3719);
				_0xcc3719['setProperty']();
				var _0x3bd081 = parseInt(_0x5e404a['length'] / 0x2);
				0x0 == _0x5e404a['length'] % 0x2 && (_0x3bd081 -= 0.6);
				_0xcc3719['x'] = -(1.2 * _0xcc3719['frame']['x'] * _0x3bd081) + 1.2 * _0xcc3719['frame']['x'] * _0x1e83d2;
				_0xcc3719 = ig['CallAsset']['addFrameImage'](_0xcc3719['x'] + 0.5 * _0xcc3719['frame']['x'], _0xcc3719['y'] + 0.5 * _0xcc3719['frame']['y'], 'game/result-uncomplete');
				_0xcc3719['anchor']['setTo'](0x1);
				0x0 == _0xe44d4d['itemLeft'] ? _0xcc3719['frameName'] = 'game/result-complete' : _0x222c6f = !0x1;
				this['add'](_0xcc3719);
			}
			_0x222c6f ? (_0x5e404a = curState()['plScore'], this['showScore']['setText'](ig['game']['writeThousands'](_0x5e404a)), _0x1e83d2 = _0x5e404a, ig['GameData']['stage'] < ig['game']['sessionData']['highScores']['length'] ? (_0x1e83d2 = ig['game']['sessionData']['highScores'][ig['GameData']['stage']], _0x5e404a > _0x1e83d2 && (_0x1e83d2 = _0x5e404a, ig['game']['sessionData']['highScores'][ig['GameData']['stage']] = _0x1e83d2, ig['game']['save']('highScores', ig['game']['sessionData']['highScores']))) : (ig['game']['sessionData']['highScores']['push'](_0x1e83d2), ig['game']['save']('highScores', ig['game']['sessionData']['highScores']))) : (this['showScore']['setText']('---'), this['nextBtn']['inputEnabled'] = !0x1, this['nextBtn']['frameName'] = 'ingame/buttons/next-stage-off', _0x1e83d2 = '---', ig['GameData']['stage'] < ig['game']['sessionData']['highScores']['length'] && (_0x1e83d2 = ig['game']['sessionData']['highScores'][ig['GameData']['stage']]));
			this['showHigh']['setText'](ig['game']['writeThousands'](_0x1e83d2));
			this['isCompleted'] = _0x222c6f;
		},
		'prepare': function() {
			this['update']();
			this['y'] = 0.6 * -this['size']['y'];
		},
		'tweenIn': function() {
			this['isIn'] || (this['isIn'] = !0x0, this['createList'](), curState()['greyBg']['alpha'] = 0x1, curState()['greyBg']['visible'] = !0x0, new Tweener(curState()['greyBg'])['to']({
				'alpha': 0x1
			}, 0.3)['onComplete'](this['tweenStars']['bind'](this))['start'](), new Tweener(this)['to']({
				'alpha': 0x1,
				'y': curState()['centerY']
			}, 0.3)['start']());
		},
		'tweenStars': function() {
			for (var _0x964101 = 0x0, _0x445b8a = 0x0; _0x445b8a < curState()['stars']['length']; _0x445b8a++) {
				var _0x4df82e = curState()['stars'][_0x445b8a];
				'on' == _0x4df82e['inState'] && _0x964101++;
			}
			this['isCompleted'] ? ig['GameData']['stage'] < ig['game']['sessionData']['unlockedStages']['length'] ? _0x964101 > ig['game']['sessionData']['unlockedStages'][ig['GameData']['stage']] && (ig['game']['sessionData']['unlockedStages'][ig['GameData']['stage']] = _0x964101, ig['game']['save']('unlockedStages', ig['game']['sessionData']['unlockedStages'])) : (ig['game']['sessionData']['unlockedStages']['push'](_0x964101), ig['game']['save']('unlockedStages', ig['game']['sessionData']['unlockedStages'])) : _0x964101 = 0x0;
			for (_0x445b8a = 0x0; _0x445b8a < _0x964101; _0x445b8a++) {
				var _0x4df82e = this['stars'][_0x445b8a]['starOn'],
					_0x14814b = 0.2 * _0x445b8a,
					_0x30162c = new Tweener(_0x4df82e['scale'])['to']({
						'x': 0x1,
						'y': 0x1
					}, 0.2),
					_0x4df82e = new Tweener(_0x4df82e['scale'])['to']({
						'x': 1.2,
						'y': 1.2
					}, 0.2)['delay'](_0x14814b)['onStart'](function() {
						csound['sfxPlay']('starpop');
					} ['bind'](this));
				_0x4df82e['_settings']['chains']['push'](_0x30162c);
				_0x4df82e['start']();
			}
		},
		'update': function() {
			this['parent']();
			0x87 <= this['showScore']['size']['x'] && 0x1 == this['showScore']['scale']['x'] && this['showScore']['scale']['setTo'](0x87 / this['showScore']['size']['x']);
			0x87 <= this['showHigh']['size']['x'] && 0x1 == this['showHigh']['scale']['x'] && this['showHigh']['scale']['setTo'](0x87 / this['showHigh']['size']['x']);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.line-effects')['requires']('game.entities.addon.group')['defines'](function() {
	EntityLineEffects = EntityGroup['extend']({
		'targets': [],
		'particles': [],
		'particleMax': 0x64,
		'speed': 0xf,
		'typePowerUp': 0x1,
		'init': function(_0x26ece8, _0x281f17, _0xbe7fa8) {
			this['parent'](_0x26ece8, _0x281f17, _0xbe7fa8);
			this['startBounds'] = [];
			this['effects'] = [];
			this['startMoving'] = !0x1;
			this['settingLineEffect']();
			this['settingDoughnutCircle']();
			this['tweenLine']();
		},
		'settingDoughnutCircle': function() {
			this['outerCircle'] = ig['CallAsset']['addFrame'](0x0, 0x0, 'game/effects/match01');
			this['outerCircle']['anchor']['setTo'](0.5);
			this['outerCircle']['scale']['setTo'](0x0);
			this['add'](this['outerCircle']);
			var _0x3ac2fd = ig['GenerateFrameNames']('game/effects/match', 0x1, 0x14, '', 0x2);
			this['outerCircle']['addAnim']('match', 0.02, _0x3ac2fd, !0x0)['onComplete']['add'](function() {
				this['outerCircle']['kill']();
			}, this);
		},
		'settingLineEffect': function() {
			var _0x251a26 = this['targets'][0x0],
				_0x1be35d = _0x251a26['powerUpId'],
				_0x17dfda = ['left', 'right'],
				_0x4d508b = 0x0;
			0x1 == _0x1be35d && (_0x4d508b = 0x5a, _0x17dfda = ['up', 'down']);
			var _0xd79b5f = 0xb4,
				_0x45e5f0 = 0x2;
			0x3 == _0x1be35d && (_0x45e5f0 = 0x4, _0xd79b5f = 0x5a, _0x17dfda = ['left', 'up', 'right', 'down']);
			for (_0x1be35d = 0x0; _0x1be35d < _0x45e5f0; _0x1be35d++) {
				var _0x2e8639 = ig['CallAsset']['addFrame'](0x0, 0x0, 'game/effects/1');
				_0x2e8639['anchor']['setTo'](0.25, 0.5);
				var _0x55601a = ig['GenerateFrameNames']('game/effects/', 0x1, 0x6, '', 0x1);
				_0x2e8639['addAnim']('run', 0.15, _0x55601a, !0x1);
				_0x2e8639['playAnim']('run');
				_0x2e8639['angle'] = _0x4d508b + _0x1be35d * _0xd79b5f;
				_0x2e8639['animSheet']['size']['x'] = 0x0;
				_0x2e8639['onGoing'] = !0x0;
				_0x2e8639['goTo'] = _0x17dfda[_0x1be35d];
				_0x2e8639['targetPiece'] = null;
				_0x2e8639['targets'] = [];
				_0x2e8639['isOut'] = !0x1;
				this['add'](_0x2e8639);
				this['pieceTargets'](_0x2e8639, _0x251a26['row'], _0x251a26['col']);
				this['effects']['push'](_0x2e8639);
			}
		},
		'pieceTargets': function(_0x247f60, _0x180fb1, _0x5a8340) {
			var _0x57cebc = curState()['gBoard']['pieces'];
			if ('left' == _0x247f60['goTo']) {
				if (_0x5a8340 -= 0x1, 0x0 <= _0x5a8340) {
					if ((_0x57cebc = _0x57cebc[_0x180fb1][_0x5a8340]) && !_0x57cebc['isBreak'] && 0x0 > _0x247f60['targets']['indexOf'](_0x57cebc)) _0x57cebc['isBreak'] = !0x0, _0x57cebc['isMoving'] = !0x0, _0x247f60['targets']['push'](_0x57cebc);
					this['pieceTargets'](_0x247f60, _0x180fb1, _0x5a8340);
				}
			} else if ('right' == _0x247f60['goTo']) {
				if (_0x5a8340 += 0x1, _0x5a8340 < _0x57cebc[_0x180fb1]['length']) {
					if ((_0x57cebc = _0x57cebc[_0x180fb1][_0x5a8340]) && !_0x57cebc['isBreak'] && 0x0 > _0x247f60['targets']['indexOf'](_0x57cebc)) _0x57cebc['isBreak'] = !0x0, _0x57cebc['isMoving'] = !0x0, _0x247f60['targets']['push'](_0x57cebc);
					this['pieceTargets'](_0x247f60, _0x180fb1, _0x5a8340);
				}
			} else if ('up' == _0x247f60['goTo']) {
				if (_0x180fb1 -= 0x1, 0x0 <= _0x180fb1) {
					if ((_0x57cebc = _0x57cebc[_0x180fb1][_0x5a8340]) && !_0x57cebc['isBreak'] && 0x0 > _0x247f60['targets']['indexOf'](_0x57cebc)) _0x57cebc['isBreak'] = !0x0, _0x57cebc['isMoving'] = !0x0, _0x247f60['targets']['push'](_0x57cebc);
					this['pieceTargets'](_0x247f60, _0x180fb1, _0x5a8340);
				}
			} else if ('down' == _0x247f60['goTo'] && (_0x180fb1 += 0x1, _0x180fb1 < _0x57cebc['length'])) {
				if ((_0x57cebc = _0x57cebc[_0x180fb1][_0x5a8340]) && !_0x57cebc['isBreak'] && 0x0 > _0x247f60['targets']['indexOf'](_0x57cebc)) _0x57cebc['isBreak'] = !0x0, _0x57cebc['isMoving'] = !0x0, _0x247f60['targets']['push'](_0x57cebc);
				this['pieceTargets'](_0x247f60, _0x180fb1, _0x5a8340);
			}
		},
		'moveEffects': function() {
			if (this['startMoving']) {
				var _0x5b77a1 = this['targets'][0x0];
				this['toLocal'](curState()['gw'], curState()['gh']);
				this['toLocal'](0x0, 0x0);
				for (var _0x16ac0e = 0x0; _0x16ac0e < this['effects']['length']; _0x16ac0e++) {
					var _0x19fe51 = this['effects'][_0x16ac0e];
					if (_0x19fe51['onGoing']) {
						_0x5b77a1 = null;
						if (0x0 < _0x19fe51['targets']['length'] && (_0x5b77a1 = _0x19fe51['targets'][0x0])) var _0x432cde = _0x5b77a1['getBounds'](),
							_0x432cde = _0x19fe51['groupParent']['toLocal'](_0x432cde['centerX'], _0x432cde['centerY']);
						if ('left' == _0x19fe51['goTo']) {
							_0x19fe51['x'] -= this['speed'];
							if (0x0 < _0x19fe51['targets']['length'] && _0x5b77a1) {
								var _0x4b4d04 = ig['game']['math']['distance'](_0x19fe51['x'], _0x19fe51['y'], _0x432cde['x'], _0x19fe51['y']);
								_0x4b4d04 <= this['speed'] && (_0x19fe51['x'] = _0x432cde['x'], this['destroyTarget'](_0x19fe51, _0x5b77a1));
							}
							Math['abs'](_0x19fe51['x']);
						} else 'right' == _0x19fe51['goTo'] ? (_0x19fe51['x'] += this['speed'], 0x0 < _0x19fe51['targets']['length'] && _0x5b77a1 && (_0x4b4d04 = ig['game']['math']['distance'](_0x19fe51['x'], _0x19fe51['y'], _0x432cde['x'], _0x19fe51['y']), _0x4b4d04 <= this['speed'] && (_0x19fe51['x'] = _0x432cde['x'], this['destroyTarget'](_0x19fe51, _0x5b77a1))), Math['abs'](_0x19fe51['x'])) : 'up' == _0x19fe51['goTo'] ? (_0x19fe51['y'] -= this['speed'], 0x0 < _0x19fe51['targets']['length'] && _0x5b77a1 && (_0x4b4d04 = ig['game']['math']['distance'](_0x19fe51['x'], _0x19fe51['y'], _0x19fe51['x'], _0x432cde['y']), _0x4b4d04 <= this['speed'] && (_0x19fe51['y'] = _0x432cde['y'], this['destroyTarget'](_0x19fe51, _0x5b77a1))), Math['abs'](_0x19fe51['y'])) : 'down' == _0x19fe51['goTo'] && (_0x19fe51['y'] += this['speed'], 0x0 < _0x19fe51['targets']['length'] && _0x5b77a1 && (_0x4b4d04 = ig['game']['math']['distance'](_0x19fe51['x'], _0x19fe51['y'], _0x19fe51['x'], _0x432cde['y']), _0x4b4d04 <= this['speed'] && (_0x19fe51['y'] = _0x432cde['y'], this['destroyTarget'](_0x19fe51, _0x5b77a1))), Math['abs'](_0x19fe51['y']));
						0x0 >= _0x19fe51['targets']['length'] && !_0x19fe51['isOut'] && (_0x19fe51['isOut'] = !0x0, this['hideEffect'](_0x19fe51));
					}
				}
			}
		},
		'destroyTarget': function(_0x4e9b60, _0x51c75c) {
			_0x51c75c['onDestroy']();
			_0x4e9b60['targets']['splice'](0x0, 0x1);
			0x0 == _0x4e9b60['targets']['length'] && this['hideEffect'](_0x4e9b60);
		},
		'hideEffect': function(_0x2fd0aa) {
			_0x2fd0aa['isOut'] && (_0x2fd0aa['isOut'] = !0x0, new Tweener(_0x2fd0aa)['to']({
				'alpha': 0x0
			}, 0.3)['onComplete'](function() {
				this['onGoing'] = !0x1;
			} ['bind'](_0x2fd0aa))['start']());
		},
		'update': function() {
			this['parent']();
			this['moveEffects']();
			var _0x455cd8 = !0x1;
			if (0x0 != this['effects']['length']) {
				for (var _0xc749b2 = 0x0; _0xc749b2 < this['effects']['length']; _0xc749b2++) this['effects'][_0xc749b2]['onGoing'] && (_0x455cd8 = !0x0);
				_0x455cd8 || this['kill']();
			}
		},
		'tweenLine': function() {
			var _0x449f59 = new Tweener(this['outerCircle']);
			_0x449f59['to']({
				'scale': {
					'x': 0x1,
					'y': 0x1
				}
			}, 0.1);
			_0x449f59['onComplete'](function() {
				this['startMoving'] = !0x0;
				this['outerCircle']['playAnim']('match');
			} ['bind'](this));
			_0x449f59['start']();
		},
		'tweenAlphaOuter': function() {
			var _0xd3c3bb = new Tweener(this['outerCircle']);
			_0xd3c3bb['to']({
				'alpha': 0x0
			}, 0.1);
			_0xd3c3bb['start']();
		},
		'draw': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.samecolor-effect')['requires']('game.entities.addon.group')['defines'](function() {
	EntitySamecolorEffect = EntityGroup['extend']({
		'targets': [],
		'breakPieces': !0x1,
		'sourceTarget': {},
		'onCompletes': [],
		'speed': 0xa,
		'init': function(_0x84121b, _0x1535c5, _0x85bf2) {
			this['parent'](_0x84121b, _0x1535c5, _0x85bf2);
			this['effects'] = [];
			this['createEffects']();
		},
		'createEffects': function() {
			for (var _0x14536c = 0x0; _0x14536c < this['targets']['length']; _0x14536c++) {
				var _0x47bdb7 = this['targets'][_0x14536c];
				_0x47bdb7['isMoving'] = !0x0;
				_0x47bdb7['isBreak'] = !0x0;
				var _0x2f2f57 = this['onCompletes'][_0x14536c] ? this['onCompletes'][_0x14536c] : this['tweenOnComplete']['bind'](this),
					_0x50b0dd = ig['game']['math']['angleBetween'](this['x'], this['y'], _0x47bdb7['x'], _0x47bdb7['y']),
					_0x50b0dd = ig['game']['math']['radToDeg'](_0x50b0dd) + 0xb4,
					_0x50b0dd = ig['game']['math']['degToRad'](_0x50b0dd),
					_0x38c88e = ig['CallAsset']['addFrame'](0x0, 0x0, 'game/effects/1');
				_0x38c88e['anchor']['setTo'](0.25, 0.5);
				var _0x37ce21 = ig['GenerateFrameNames']('game/effects/', 0x1, 0x6, '', 0x1);
				_0x38c88e['addAnim']('run', 0.15, _0x37ce21, !0x1);
				_0x38c88e['playAnim']('run');
				_0x38c88e['rotation'] = _0x50b0dd;
				_0x38c88e['onGoing'] = !0x0;
				_0x38c88e['isMoving'] = !0x0;
				_0x38c88e['targetPiece'] = _0x47bdb7;
				_0x38c88e['breakPieces'] = this['breakPieces'];
				_0x38c88e['onComplete'] = _0x2f2f57;
				this['add'](_0x38c88e);
				this['effects']['push'](_0x38c88e);
			}
		},
		'tweenEffect': function(_0x1faee9, _0x7d9056) {
			var _0x6aa8ff = _0x7d9056['getBounds'](),
				_0x354537 = this['toLocal'](_0x6aa8ff['centerX'], _0x6aa8ff['centerY']),
				_0x6aa8ff = _0x354537['x'],
				_0x354537 = _0x354537['y'];
			new Tweener(_0x1faee9)['to']({
				'x': _0x6aa8ff,
				'y': _0x354537
			}, 0.3)['onComplete'](function() {
				if (this['breakPieces']) {
					if (this['onComplete']) this['onComplete'](this['targetPiece'], this);
				} else if (this['onComplete'] && 'function' == typeof this['onComplete']['dispatch']) this['onComplete']['dispatch']();
				else if (this['onComplete']) this['onComplete'](this['targetPiece'], this);
				new Tweener(this)['to']({
					'alpha': 0x0
				}, 0.2)['onComplete'](function() {
					this['onGoing'] = !0x1;
				} ['bind'](this))['start']();
			} ['bind'](_0x1faee9))['start']();
		},
		'tweenOnComplete': function(_0x62b36) {
			new Tweener(_0x62b36['scale'])['to']({
				'x': 1.2,
				'y': 1.2
			}, 0.2)['easing'](ig['Tweener']['Easing']['Quadratic']['EaseOut'])['onComplete'](function() {
				curState()['timeEvent']['add'](0.2, function() {
					this['onDestroy']();
				}, this);
			} ['bind'](_0x62b36))['start']();
		},
		'moveEffects': function() {
			for (var _0x28d572 = 0x0; _0x28d572 < this['effects']['length']; _0x28d572++) {
				var _0x523f93 = this['effects'][_0x28d572];
				if (_0x523f93['onGoing'] && _0x523f93['isMoving']) {
					var _0x2cc90f = _0x523f93['targetPiece'],
						_0x2cc90f = curState()['gBoard']['tiles'][_0x2cc90f['row']][_0x2cc90f['col']],
						_0x4c0352 = curState()['gBoard']['gPieces']['toGlobal'](_0x2cc90f['x'], _0x2cc90f['y']);
					ig['game']['geom']['rectangle'](_0x4c0352['x'], _0x4c0352['y'], _0x2cc90f['size']['x'], _0x2cc90f['size']['y']);
					var _0x2cc90f = this['toLocal'](_0x4c0352['x'], _0x4c0352['y']),
						_0x4c0352 = ig['game']['math']['distance'](0x0, 0x0, _0x2cc90f['x'], _0x2cc90f['y']) / this['speed'],
						_0xaa8b0d = ig['game']['math']['angleBetween'](0x0, 0x0, _0x2cc90f['x'], _0x2cc90f['y']),
						_0x2a32fe = _0x4c0352 * Math['cos'](_0xaa8b0d),
						_0xaa8b0d = _0x4c0352 * Math['sin'](_0xaa8b0d),
						_0x2a32fe = _0x523f93['x'] + _0x2a32fe,
						_0xaa8b0d = _0x523f93['y'] + _0xaa8b0d;
					if (ig['game']['math']['distance'](_0x523f93['x'], _0x523f93['y'], _0x2cc90f['x'], _0x2cc90f['y']) <= _0x4c0352) {
						_0x2a32fe = _0x2cc90f['x'];
						_0xaa8b0d = _0x2cc90f['y'];
						_0x523f93['isMoving'] = !0x1;
						if (this['breakPieces']) {
							if (_0x523f93['onComplete']) _0x523f93['onComplete'](_0x523f93['targetPiece'], _0x523f93);
						} else if (_0x523f93['onComplete'] && 'function' == typeof _0x523f93['onComplete']['dispatch']) _0x523f93['onComplete']['dispatch']();
						else if (_0x523f93['onComplete']) _0x523f93['onComplete'](_0x523f93['targetPiece'], _0x523f93);
						new Tweener(_0x523f93)['to']({
							'alpha': 0x0
						}, 0.2)['onComplete'](function() {
							this['onGoing'] = !0x1;
						} ['bind'](_0x523f93))['start']();
					}
					_0x523f93['x'] = _0x2a32fe;
					_0x523f93['y'] = _0xaa8b0d;
				}
			}
		},
		'update': function() {
			this['parent']();
			if (0x0 != this['effects']['length']) {
				this['moveEffects']();
				for (var _0x49c76a = !0x1, _0xe4fd0c = 0x0; _0xe4fd0c < this['effects']['length']; _0xe4fd0c++) this['effects'][_0xe4fd0c]['onGoing'] && (_0x49c76a = !0x0);
				_0x49c76a || this['kill']();
			}
		},
		'draw': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('plugins.addon.custom-canvas')['defines'](function() {
	ig['CustomCanvas'] = ig['Class']['extend']({
		'exists': !0x0,
		'init': function(_0x1c61c3, _0xf486b9, _0x4e655b, _0xbb81e) {
			ig['merge'](this, _0xbb81e);
			(_0xbb81e = hiddenCanvases[_0x1c61c3]) || (hiddenCanvases[_0x1c61c3] = this['create_canvas_context'](_0xf486b9, _0x4e655b), _0xbb81e = hiddenCanvases[_0x1c61c3]);
			this['drawImageCanvas'](_0xbb81e['ctx']);
			this['drawEle'] = hiddenCanvases[_0x1c61c3]['ele'];
			this['height'] = this['drawEle']['height'];
			this['width'] = this['drawEle']['width'];
		},
		'create_canvas_context': function(_0x302bfe, _0x198885) {
			var _0x687177 = document['createElement']('canvas');
			_0x687177['width'] = _0x302bfe;
			_0x687177['height'] = _0x198885;
			var _0x2a6ad2 = _0x687177['getContext']('2d');
			return {
				'ele': _0x687177,
				'ctx': _0x2a6ad2
			};
		},
		'drawImageCanvas': function() {},
		'kill': function() {
			this['exists'] = !0x1;
		},
		'draw': function(_0x2b5796, _0x4ef440) {
			ig['system']['context']['save']();
			ig['system']['context']['drawImage'](this['drawEle'], 0x0, 0x0, this['drawEle']['width'], this['drawEle']['height'], ig['system']['getDrawPos'](_0x2b5796), ig['system']['getDrawPos'](_0x4ef440), this['drawEle']['width'], this['drawEle']['height']);
			ig['system']['context']['restore']();
			ig['Image']['drawCount']++;
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.canvas-sheet')['requires']('game.entities.addon.group', 'plugins.addon.custom-canvas')['defines'](function() {
	EntityCanvasSheet = EntityGroup['extend']({
		'init': function(_0x1e0f32, _0x138fdb, _0x57b8f6) {
			this['parent'](_0x1e0f32, _0x138fdb, _0x57b8f6);
			_0x1e0f32 = curState()['centerX'];
			_0x138fdb = 0.55 * curState()['gh'];
			this['canvasImg'] = new ig['ImageCanvas'](_0x1e0f32, _0x138fdb);
			this['size']['x'] = this['canvasImg']['width'];
			this['size']['y'] = this['canvasImg']['height'];
		},
		'draw': function() {
			this['parent']();
			var _0x4f5ec3 = ig['system']['context'];
			_0x4f5ec3['save']();
			this['canvasImg']['draw'](this['pos']['x'], this['pos']['y']);
			_0x4f5ec3['restore']();
		}
	});
	ig['ImageCanvas'] = ig['CustomCanvas']['extend']({
		'drawEle': null,
		'exists': !0x0,
		'gameImg': new ig['Image']('media/graphics/sprites/game.png'),
		'init': function(_0x292d9c, _0x4b502f) {
			this['bgImage'] = new ig['Image']('media/graphics/backgrounds/bg-01.png');
			this['tileRaw'] = new ig['Image']('media/graphics/sprites/game.png');
			this['tileImg'] = ig['CallAsset']['addImage'](0x0, 0x0, 'game', {
				'frameName': 'game/tile'
			});
			this['tileImg']['setFrame']();
			this['x'] = _0x292d9c ? _0x292d9c : 0x0;
			this['y'] = _0x4b502f ? _0x4b502f : 0x0;
			this['parent']('gameBg', this['bgImage']['width'], this['bgImage']['height']);
		},
		'drawImageCanvas': function(_0x1451b8) {
			var _0x352133 = _0x1451b8['canvas'],
				_0x367fd0 = ig['system']['scale'],
				_0x914ef1 = Math['floor'](_0x352133['width'] * _0x367fd0),
				_0x367fd0 = Math['floor'](_0x352133['height'] * _0x367fd0);
			_0x1451b8['save']();
			_0x1451b8['clearRect'](0x0, 0x0, _0x352133['width'], _0x352133['height']);
			_0x1451b8['drawImage'](this['bgImage']['data'], 0x0, 0x0, _0x914ef1, _0x367fd0, 0x0, 0x0, _0x914ef1, _0x367fd0);
			_0x352133 = parseInt(ig['GameData']['stage'] / 0x5);
			_0x352133 >= ig['GameData']['stageMaps']['length'] && (_0x352133 = ig['game']['rnd']['integerInRange'](0x0, ig['GameData']['stageMaps']['length'] - 0x1));
			_0x352133 = ig['GameData']['stageMaps'][_0x352133];
			for (_0x914ef1 = 0x0; _0x914ef1 < _0x352133['length']; _0x914ef1++)
				for (_0x367fd0 = 0x0; _0x367fd0 < _0x352133[_0x914ef1]['length']; _0x367fd0++)
					if (0x1 == _0x352133[_0x914ef1][_0x367fd0]) {
						var _0x1b2db = this['tileImg'],
							_0x188102 = _0x352133['length'],
							_0x49e44d = 0x0,
							_0x1fe762 = 0x0,
							_0x1fe762 = (_0x352133[_0x914ef1]['length'] - 0x1) / 0x2,
							_0x49e44d = this['x'] - _0x1b2db['frame']['x'] * _0x1fe762 + _0x1b2db['frame']['x'] * _0x367fd0,
							_0x49e44d = _0x49e44d - 0.5 * _0x1b2db['frame']['x'],
							_0x1fe762 = (_0x188102 - 0x1) / 0x2,
							_0x1fe762 = this['y'] - _0x1b2db['frame']['y'] * _0x1fe762 + _0x1b2db['frame']['y'] * _0x914ef1,
							_0x1fe762 = _0x1fe762 - 0.5 * _0x1b2db['frame']['y'];
						_0x1451b8['drawImage'](this['tileRaw']['data'], _0x1b2db['sourceX'], _0x1b2db['sourceY'], _0x1b2db['frame']['x'], _0x1b2db['frame']['y'], ig['system']['getDrawPos'](_0x49e44d), ig['system']['getDrawPos'](_0x1fe762), _0x1b2db['frame']['x'], _0x1b2db['frame']['y']);
					} _0x1451b8['restore']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.objects.canvas-upbar')['requires']('game.entities.addon.group', 'plugins.addon.custom-canvas')['defines'](function() {
	CanvasUpbar = ig['CustomCanvas']['extend']({
		'exists': !0x0,
		'pieceTypes': [],
		'image': new ig['Image']('media/graphics/sprites/game.png'),
		'init': function(_0x3bdf74) {
			this['gameImg'] = ig['CallAsset']['addImage'](0x0, 0x0, 'game');
			this['gameImg']['frameName'] = 'game/header';
			this['gameImg']['setFrame']();
			var _0x5e3cfd = curState()['centerY'];
			this['parent']('upperBar', this['gameImg']['frame']['x'], _0x5e3cfd, _0x3bdf74);
		},
		'drawImageCanvas': function(_0x16fcdf) {
			var _0x1c1ebe = _0x16fcdf['canvas'];
			_0x16fcdf['save']();
			_0x16fcdf['clearRect'](0x0, 0x0, _0x1c1ebe['width'], _0x1c1ebe['height']);
			var _0x25d759 = _0x1c1ebe = 0x0;
			this['gameImg']['frameName'] = 'game/header';
			this['gameImg']['setFrame']();
			var _0xe489fb = this['gameImg']['frame']['x'],
				_0x19b475 = this['gameImg']['frame']['y'],
				_0x43c704 = this['gameImg']['sourceX'],
				_0x2d0b93 = this['gameImg']['sourceY'],
				_0x554a7a = _0xe489fb,
				_0x2d80bb = _0x19b475;
			_0x16fcdf['drawImage'](this['gameImg']['data'], _0x43c704, _0x2d0b93, _0xe489fb, _0x19b475, _0x1c1ebe, _0x25d759, _0xe489fb, _0x19b475);
			this['gameImg']['frameName'] = 'game/btn-bg';
			this['gameImg']['setFrame']();
			_0xe489fb = this['gameImg']['frame']['x'];
			_0x19b475 = this['gameImg']['frame']['y'];
			_0x43c704 = this['gameImg']['sourceX'];
			_0x2d0b93 = this['gameImg']['sourceY'];
			_0x1c1ebe = 0.5 * _0x554a7a + (curState()['centerX'] - 1.01 * _0xe489fb);
			_0x16fcdf['drawImage'](this['gameImg']['data'], _0x43c704, _0x2d0b93, _0xe489fb, _0x19b475, _0x1c1ebe, 0.51 * _0x19b475 - 0.5 * _0x19b475, _0xe489fb, _0x19b475);
			this['gameImg']['frameName'] = 'game/small-box';
			this['gameImg']['setFrame']();
			_0xe489fb = this['gameImg']['frame']['x'];
			_0x19b475 = this['gameImg']['frame']['y'];
			_0x43c704 = this['gameImg']['sourceX'];
			_0x2d0b93 = this['gameImg']['sourceY'];
			_0x1c1ebe = 0.5 * _0x554a7a + 0.33 * _0x554a7a - 0.5 * _0xe489fb;
			_0x25d759 = 0.5 * _0x2d80bb - 0.5 * _0x19b475;
			_0x16fcdf['drawImage'](this['gameImg']['data'], _0x43c704, _0x2d0b93, _0xe489fb, _0x19b475, _0x1c1ebe, _0x25d759, _0xe489fb, _0x19b475);
			_0x43c704 = 'bold\x2025px\x20' + fonts['font1'];
			_0x16fcdf['fillStyle'] = 'white';
			_0x16fcdf['textBaseline'] = 'alphabetic';
			_0x16fcdf['font'] = _0x43c704;
			_0x16fcdf['textAlign'] = 'center';
			_0x16fcdf['fillText'](_STRINGS['Game']['score'], _0x1c1ebe + 0.5 * _0xe489fb, _0x25d759 + (0.5 * _0x19b475 - 0x19));
			_0x1c1ebe = _t(_STRINGS['Game']['level'], ig['GameData']['stage'] + 0x1);
			_0x43c704 = 'bold\x2035px\x20' + fonts['font1'];
			_0x16fcdf['fillStyle'] = 'white';
			_0x16fcdf['textBaseline'] = 'alphabetic';
			_0x16fcdf['font'] = _0x43c704;
			_0x16fcdf['textAlign'] = 'center';
			_0x16fcdf['fillText'](_0x1c1ebe, 0.17 * _0x554a7a, 0.5 * _0x2d80bb + 0x12);
			_0x43c704 = 'normal\x2020px\x20' + fonts['font1'];
			_0x16fcdf['fillStyle'] = '#ffc328';
			_0x16fcdf['textBaseline'] = 'alphabetic';
			_0x16fcdf['font'] = _0x43c704;
			_0x16fcdf['textAlign'] = 'center';
			_0x16fcdf['fillText'](_STRINGS['Game']['move'], 0.5 * _0x554a7a, 0.4 * _0x2d80bb + 0x8);
			this['gameImg']['frameName'] = 'game/woodplate';
			this['gameImg']['setFrame']();
			var _0xe489fb = this['gameImg']['frame']['x'],
				_0x19b475 = this['gameImg']['frame']['y'],
				_0x43c704 = this['gameImg']['sourceX'],
				_0x2d0b93 = this['gameImg']['sourceY'],
				_0x1c1ebe = curState()['centerX'] - 0.5 * _0xe489fb,
				_0x25d759 = 0.225 * curState()['gh'] - 0.5 * _0x19b475,
				_0x408f33 = _0x1c1ebe,
				_0x2b5333 = _0x25d759,
				_0x209c1a = _0xe489fb,
				_0x4207b3 = _0x19b475;
			_0x16fcdf['drawImage'](this['gameImg']['data'], _0x43c704, _0x2d0b93, _0xe489fb, _0x19b475, _0x1c1ebe, _0x25d759, _0xe489fb, _0x19b475);
			this['gameImg']['frameName'] = 'game/woodplate-box';
			this['gameImg']['setFrame']();
			var _0xe489fb = this['gameImg']['frame']['x'],
				_0x19b475 = this['gameImg']['frame']['y'],
				_0x43c704 = this['gameImg']['sourceX'],
				_0x2d0b93 = this['gameImg']['sourceY'],
				_0x1c1ebe = _0x408f33 + _0x209c1a - 1.02 * _0xe489fb,
				_0x25d759 = _0x2b5333 + 0.5 * _0x4207b3 - 0.5 * _0x19b475 - 0x4,
				_0x554a7a = _0x1c1ebe,
				_0x2d80bb = _0x25d759,
				_0x59c76e = _0xe489fb,
				_0x29c346 = _0x19b475;
			_0x16fcdf['drawImage'](this['gameImg']['data'], _0x43c704, _0x2d0b93, _0xe489fb, _0x19b475, _0x1c1ebe, _0x25d759, _0xe489fb, _0x19b475);
			_0x43c704 = 'normal\x2023px\x20' + fonts['font1'];
			_0x16fcdf['fillStyle'] = 'white';
			_0x16fcdf['textBaseline'] = 'alphabetic';
			_0x16fcdf['font'] = _0x43c704;
			_0x16fcdf['textAlign'] = 'left';
			_0x16fcdf['fillText'](_STRINGS['Game']['target'], _0x408f33 + 0.05 * _0x209c1a, _0x2b5333 + (_0x4207b3 - 0x1b));
			for (_0x408f33 = 0x0; _0x408f33 < this['pieceTypes']['length']; _0x408f33++) this['gameImg']['frameName'] = 'game/gem' + this['pieceTypes'][_0x408f33], this['gameImg']['setFrame'](), _0x25d759 = 0.5 * this['gameImg']['frame']['y'], _0x1c1ebe = _0x554a7a + 0.5 * _0x59c76e - 0x2 * (_0x59c76e / 5.5) - 0.25 * this['gameImg']['frame']['x'] + _0x59c76e / 5.5 * _0x408f33, _0x25d759 = _0x2d80bb + 0.5 * _0x29c346 - 0.5 * _0x25d759, _0x43c704 = this['gameImg']['sourceX'], _0x2d0b93 = this['gameImg']['sourceY'], _0xe489fb = this['gameImg']['frame']['x'], _0x19b475 = this['gameImg']['frame']['y'], _0x16fcdf['save'](), _0x16fcdf['translate'](ig['system']['getDrawPos'](_0x1c1ebe), ig['system']['getDrawPos'](_0x25d759)), _0x16fcdf['scale'](0.5, 0.5), _0x16fcdf['translate'](ig['system']['getDrawPos'](-_0x1c1ebe), ig['system']['getDrawPos'](-_0x25d759)), _0x16fcdf['drawImage'](this['gameImg']['data'], _0x43c704, _0x2d0b93, _0xe489fb, _0x19b475, _0x1c1ebe, _0x25d759, _0xe489fb, _0x19b475), _0x16fcdf['restore']();
			_0x16fcdf['restore']();
		}
	});
	EntityCanvasUpbar = EntityGroup['extend']({
		'init': function(_0x3cfda6, _0x48d63d, _0x53d282) {
			this['parent'](_0x3cfda6, _0x48d63d, _0x53d282);
			this['image'] = new CanvasUpbar(_0x53d282);
			this['size']['x'] = this['image']['width'];
			this['size']['y'] = this['image']['height'];
		},
		'draw': function() {
			if (this['exists']) {
				this['parent']();
				var _0x36d8f7 = ig['system']['context'];
				_0x36d8f7['save']();
				this['image']['draw'](this['pos']['x'], this['pos']['y']);
				_0x36d8f7['restore']();
			}
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.controllers.gameplay-ctrl')['requires']('game.entities.addon.page-controller', 'game.entities.objects.item-list', 'game.entities.objects.play-board', 'game.entities.objects.result', 'game.entities.objects.line-effects', 'game.entities.objects.samecolor-effect', 'game.entities.objects.canvas-sheet', 'game.entities.objects.canvas-upbar')['defines'](function() {
	EntityGameplayCtrl = EntityPageController['extend']({
		'init': function(_0x27543d, _0x20d46f, _0x1e3787) {
			this['parent'](_0x27543d, _0x20d46f, _0x1e3787);
			ig['global']['wm'] || this['create']();
		},
		'create': function() {
			ig['soundHandler']['bgmPlayer']['volume'](ig['game']['sessionData']['bgmVol']);
			ig['soundHandler']['sfxPlayer']['volume'](ig['game']['sessionData']['sfxVol']);
			this['gInGame'] = ig['game']['addGroup'](0.001, 0.001);
			this['gInFront'] = ig['game']['addGroup']();
			this['gamePaused'] = this['gameOver'] = !0x1;
			this['gameStart'] = !0x0;
			var _0x4a4ba6 = ig['GameData']['stage'];
			this['pieceTypes'] = [];
			var _0xaeac28 = 0x5 + parseInt(ig['GameData']['stage'] / 0x2);
			0x6 < _0xaeac28 && (_0xaeac28 = 0x6);
			for (var _0x7ff539 = 0x0; _0x7ff539 < _0xaeac28; _0x7ff539++) {
				for (var _0x1fad71 = null; !_0x1fad71;) {
					var _0xea4680 = ig['game']['rnd']['integerInRange'](0x2, 0x9);
					0x0 > this['pieceTypes']['indexOf'](_0xea4680) && (_0x1fad71 = _0xea4680);
				}
				this['pieceTypes']['push'](_0x1fad71);
			}
			this['plScore'] = 0x0;
			this['moveLeft'] = ig['GameData']['defaultMoves'] + (parseInt(0x2 * (_0x4a4ba6 / 0x5)) + 0xa);
			parseInt(ig['GameData']['stage'] / 0x5);
			this['stageScore'] = ig['GameData']['defaultScore'] + 1.2 * _0x4a4ba6 * ig['GameData']['defaultScore'];
			this['stageScore'] = parseInt(this['stageScore']);
			this['pieceHover'] = this['pieceClicked'] = null;
			this['checkOnGoing'] = !0x1;
			this['hintCD'] = 0x0;
			this['maxHint'] = 0xa;
			this['matches'] = [];
			this['handTutor'] = this['hintSign'] = null;
			this['createGreyBg']();
			this['bg'] = ig['game']['addGroup'](0x0, 0x0, {}, EntityCanvasSheet);
			this['gBG']['add'](this['bg']);
			this['gHeader'] = ig['game']['addGroup'](this['centerX'], 0x0);
			this['gInFront']['add'](this['gHeader']);
			this['gList'] = ig['game']['addGroup'](this['centerX'], 0.225 * this['gh'], {}, EntityItemList);
			this['gInFront']['add'](this['gList']);
			this['upHeader'] = ig['game']['addGroup'](0x0, 0x0, {
				'pieceTypes': this['gList']['itemLists']
			}, EntityCanvasUpbar);
			this['upHeader']['x'] -= 0.5 * this['upHeader']['size']['x'];
			this['gHeader']['add'](this['upHeader']);
			this['header'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'game/header');
			this['header']['anchor']['setTo'](0.5, 0x0);
			this['btnBg'] = ig['CallAsset']['addFrameImage'](this['centerX'], 0x0, 'game/btn-bg');
			this['btnBg']['anchor']['setTo'](0.5);
			this['btnBg']['x'] -= 0.51 * this['btnBg']['size']['x'];
			this['btnBg']['y'] += 0.51 * this['btnBg']['size']['y'];
			this['pauseG'] = ig['game']['addGroup']();
			this['gFront']['add'](this['pauseG']);
			this['pauseBtn'] = ig['CallAsset']['addFrame'](this['btnBg']['x'], this['btnBg']['y'], 'ingame/buttons/pause-btn', {}, EntityClickBtn);
			this['pauseBtn']['onStartClick']['add'](this['startPause'], this);
			this['pauseBtn']['onClick']['add'](this['createPause'], this);
			this['gHeader']['add'](this['pauseBtn']);
			this['greyBg']['alpha'] = 0x0;
			this['scoreBox'] = ig['CallAsset']['addFrameImage'](0.33 * this['header']['size']['x'], 0.5 * this['header']['size']['y'], 'game/small-box');
			this['scoreBox']['anchor']['setTo'](0.5);
			this['showScore'] = ig['game']['addText'](this['scoreBox']['x'], this['scoreBox']['y'] + 0x2, this['plScore'] + '', 0x14, fonts['font1']);
			this['showScore']['anchor']['setTo'](0.5);
			this['gHeader']['add'](this['showScore']);
			this['showMoves'] = ig['game']['addText'](0x0, 0.7 * this['header']['size']['y'], this['moveLeft'] + '', 0x3c, fonts['font1']);
			this['showMoves']['anchor']['setTo'](0.5);
			this['gHeader']['add'](this['showMoves']);
			this['gBoard'] = ig['game']['addGroup'](this['centerX'], 0.55 * this['gh'], {}, EntityPlayBoard);
			this['gInGame']['add'](this['gBoard']);
			this['gStars'] = ig['game']['addGroup'](this['centerX'], 0.9 * this['gh']);
			this['gInFront']['add'](this['gStars']);
			this['starBarBg'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'game/star-bar-bg');
			this['starBarBg']['anchor']['setTo'](0.5);
			this['gStars']['add'](this['starBarBg']);
			this['starBar'] = ig['CallAsset']['addFrameImage'](0x0, 0x0, 'game/star-bar');
			this['starBar']['anchor']['setTo'](0.5);
			this['gStars']['add'](this['starBar']);
			this['stars'] = [];
			this['borderStars'] = _0x4a4ba6 = [0.5, 0.75, 0.95];
			for (_0x7ff539 = 0x0; 0x3 > _0x7ff539; _0x7ff539++) _0xaeac28 = ig['CallAsset']['addFrameImage'](0x0, this['starBarBg']['y'] + 0.5 * this['starBarBg']['size']['y'] - 0xa, 'game/star-tag-off'), _0xaeac28['anchor']['setTo'](0.5, 0x1), _0xaeac28['inState'] = 'off', this['gStars']['add'](_0xaeac28), _0xaeac28['x'] = this['starBar']['x'] - 0.5 * this['starBar']['frame']['x'] + this['starBar']['frame']['x'] * _0x4a4ba6[_0x7ff539], this['stars']['push'](_0xaeac28);
			this['resultGroup'] = ig['game']['addGroup']();
			this['gFront']['add'](this['resultGroup']);
			this['gCont']['add'](this['gInGame']);
			this['gCont']['add'](this['gInFront']);
			this['pageReady'] = !0x1;
			this['chain'] = 0x0;
			this['startGame']();
			this['showFps']['x'] = 0xa;
			this['showFps']['anchor']['setTo'](0x0);
		},
		'startGame': function() {
			this['gBoard']['checkPossibleMove']();
			this['checkTutor']();
		},
		'createPause': function() {
			this['gPause'] = ig['game']['addGroup'](this['centerX'], this['centerY'], {}, EntityOptions);
			this['gPause']['pauseFunction']();
			this['gPause']['onResume']['add'](this['resumeGame'], this);
			this['gPause']['appear']();
			this['pauseG']['add'](this['gPause']);
		},
		'checkTutor': function() {
			console['log']('read\x20tutor');
			this['tutorMatches'] = [];
			for (var _0x2261f7 = 0x0; _0x2261f7 < this['matches']['length']; _0x2261f7++) this['tutorMatches']['push'](this['matches'][_0x2261f7]);
			var _0x2261f7 = ig['GameData']['stage'],
				_0x20c9be = ig['GameData']['unlockPowerUp'];
			if (0x0 == _0x2261f7) this['createHand'](), this['timeEvent']['add'](0.2, this['tweenHand'], this), this['hintCD'] = this['maxHint'];
			else if (_0x2261f7 == _0x20c9be[0x0]) {
				this['gBoard']['checkPoss'](this['matches'][0x0], this['matches'][0x1]);
				var _0x2261f7 = 0x3 <= this['matches'][0x0]['checkTilesCol']['length'] || 0x3 <= this['matches'][0x0]['checkTilesRow']['length'] ? this['matches'][0x0] : this['matches'][0x1],
					_0x20c9be = this['matches']['indexOf'](_0x2261f7),
					_0x475600 = ig['game']['rnd']['integerInRange'](0x1, 0x3);
				this['gBoard']['replacePiece'](_0x2261f7, _0x475600, _0x2261f7['pieceId']);
				this['matches'][_0x20c9be] = this['gBoard']['pieces'][_0x2261f7['row']][_0x2261f7['col']];
				this['tutorMatches'][_0x20c9be] = this['gBoard']['pieces'][_0x2261f7['row']][_0x2261f7['col']];
				this['createHand']();
				this['timeEvent']['add'](0.2, this['tweenHand'], this);
				this['createHint']();
			} else if (_0x2261f7 == _0x20c9be[0x1]) _0x20c9be = 0x0, _0x2261f7 = this['matches'][_0x20c9be], this['gBoard']['replacePiece'](_0x2261f7, 0x4), this['matches'][_0x20c9be] = this['gBoard']['pieces'][_0x2261f7['row']][_0x2261f7['col']], this['tutorMatches'] = this['matches'], this['createHint'](), this['createHand'](), this['timeEvent']['add'](0.2, this['tweenHand'], this);
			else if (_0x2261f7 == _0x20c9be[0x2]) _0x20c9be = 0x0, _0x2261f7 = this['matches'][_0x20c9be], this['gBoard']['replacePiece'](_0x2261f7, 0x5), this['tutorMatches'][_0x20c9be] = this['gBoard']['pieces'][_0x2261f7['row']][_0x2261f7['col']], this['matches'][_0x20c9be] = this['gBoard']['pieces'][_0x2261f7['row']][_0x2261f7['col']], this['createHand'](), this['timeEvent']['add'](0.2, function() {
				new Tweener(this['handTutor']['scale'])['to']({
					'x': 1.1,
					'y': 1.1
				}, 0x1)['yoyo'](!0x0)['repeat'](-0x1)['start']();
			}, this);
			else if (_0x2261f7 == _0x20c9be[0x2] + 0x1) {
				for (_0x2261f7 = 0x0; _0x2261f7 < this['matches']['length']; _0x2261f7++) _0x20c9be = this['matches'][_0x2261f7], this['gBoard']['replacePiece'](_0x20c9be, 0x4), this['matches'][_0x2261f7] = this['gBoard']['pieces'][_0x20c9be['row']][_0x20c9be['col']], this['tutorMatches'][_0x2261f7] = this['gBoard']['pieces'][_0x20c9be['row']][_0x20c9be['col']];
				this['createHand']();
				this['timeEvent']['add'](0.2, this['tweenHand'], this);
				this['createHint']();
			} else if (_0x2261f7 == _0x20c9be[0x3]) {
				for (_0x2261f7 = 0x0; _0x2261f7 < this['matches']['length']; _0x2261f7++) _0x20c9be = this['matches'][_0x2261f7], _0x475600 = ig['game']['rnd']['integerInRange'](0x1, 0x3), this['gBoard']['replacePiece'](_0x20c9be, _0x475600, _0x20c9be['pieceId']), this['matches'][_0x2261f7] = this['gBoard']['pieces'][_0x20c9be['row']][_0x20c9be['col']], this['tutorMatches'][_0x2261f7] = this['matches'][_0x2261f7];
				this['createHand']();
				this['timeEvent']['add'](0.2, this['tweenHand'], this);
				this['createHint']();
			}
		},
		'checkAfterTutor': function() {
			this['handTutor'] && (this['handTutor']['kill'](), this['handTutor'] = null);
			this['hint'] && (this['hint']['kill'](), this['hint'] = null);
			ig['GameData']['trialMode'] && (ig['GameData']['trialMode'] = !0x1);
		},
		'createHand': function() {
			var _0x292fba = this['tutorMatches'][0x0];
			0x0 == _0x292fba['x'] && (_0x292fba['x'] += 0.001);
			0x0 == _0x292fba['y'] && (_0x292fba['y'] += 0.001);
			this['handTutor'] = ig['CallAsset']['addFrame'](_0x292fba['x'], _0x292fba['y'], 'game/finger');
			this['gBoard']['gFrontBoard']['add'](this['handTutor']);
		},
		'tweenHand': function() {
			var _0x1c96e1 = this['tutorMatches'][0x0],
				_0x54d037 = this['tutorMatches'][0x1];
			this['handTutor']['x'] = _0x1c96e1['x'];
			this['handTutor']['y'] = _0x1c96e1['y'];
			_0x1c96e1 = _0x54d037['x'];
			_0x54d037 = _0x54d037['y'];
			0x0 == _0x1c96e1 && (_0x1c96e1 += 0.05);
			0x0 == _0x54d037 && (_0x54d037 += 0.05);
			var _0x16043b = new Tweener(this['handTutor']);
			_0x16043b['to']({
				'x': _0x1c96e1,
				'y': _0x54d037
			}, 0.5);
			_0x16043b['delay'](0.5);
			_0x16043b['onComplete'](function() {
				this['timeEvent']['add'](0.5, function() {
					this['handTutor'] && this['tweenHand']();
				}, this);
			} ['bind'](this));
			_0x16043b['start']();
		},
		'createHint': function() {
			if (!(0x2 > this['matches']['length']) && !this['hint']) {
				var _0x5ea7a5 = this['matches'][0x0],
					_0x7cf400 = this['matches'][0x1];
				if (_0x5ea7a5['row'] == _0x7cf400['row']) var _0x17471a = (_0x5ea7a5['x'] + _0x7cf400['x']) / 0x2,
					_0x5ea7a5 = _0x5ea7a5['y'],
					_0x7cf400 = 0x0;
				else _0x17471a = _0x5ea7a5['x'], _0x5ea7a5 = (_0x5ea7a5['y'] + _0x7cf400['y']) / 0x2, _0x7cf400 = 0x5a;
				this['hint'] = ig['CallAsset']['addFrame'](_0x17471a, _0x5ea7a5, 'game/hint1');
				this['hint']['anchor']['setTo'](0.5);
				this['hint']['angle'] = _0x7cf400;
				_0x17471a = ig['GenerateFrameNames']('game/hint', 0x1, 0x2, '', 0x1);
				this['hint']['addAnim']('hint', 0.2, _0x17471a, !0x1);
				this['hint']['playAnim']('hint');
				this['gBoard']['gPieces']['add'](this['hint']);
			}
		},
		'startPause': function() {
			this['gamePaused'] = !0x0;
			this['greyBg']['visible'] = !0x0;
		},
		'resumeGame': function() {
			this['gamePaused'] = !0x1;
			this['greyBg']['visible'] = !0x1;
			this['gPause']['kill']();
		},
		'lastCall': function() {
			if (0x0 >= this['moveLeft'] && !this['gameOver']) this['checkAllPowerUp']();
			else {
				var _0x44a2aa = 0x1e,
					_0x1de65d = 0x3;
				0x5 > ig['GameData']['stage'] && (_0x44a2aa = 0xa, _0x1de65d = 0x5);
				this['chain'] += _0x44a2aa;
				_0x44a2aa = this['moveLeft'];
				_0x44a2aa > _0x1de65d && (_0x44a2aa = _0x1de65d);
				for (var _0x1de65d = [], _0x3d8043 = 0x0; _0x3d8043 < this['gBoard']['pieces']['length']; _0x3d8043++)
					for (var _0x5a7bb4 = 0x0; _0x5a7bb4 < this['gBoard']['pieces'][_0x3d8043]['length']; _0x5a7bb4++) {
						var _0x5b9982 = this['gBoard']['pieces'][_0x3d8043][_0x5a7bb4];
						_0x5b9982 && _0x1de65d['push'](_0x5b9982);
					}
				_0x5a7bb4 = [];
				_0x5b9982 = [];
				for (_0x3d8043 = 0x0; _0x3d8043 < _0x44a2aa; _0x3d8043++) {
					for (var _0x22f684 = null; !_0x22f684;) {
						var _0x6ccdd5 = ig['game']['rnd']['pick'](_0x1de65d);
						0x0 == _0x6ccdd5['powerUpId'] && 0x0 > _0x5a7bb4['indexOf'](_0x6ccdd5) && (_0x22f684 = _0x6ccdd5);
					}
					_0x6ccdd5 = new ig['AddSignal'](this['gBoard']);
					_0x6ccdd5['add'](function() {
						var _0x1e23ef = curState()['gBoard'],
							_0x474ab8 = ig['game']['rnd']['integerInRange'](0x1, 0x5),
							_0x5c49b4 = -0x1;
						0x3 >= _0x474ab8 && (_0x5c49b4 = this['pieceId']);
						_0x1e23ef['replacePiece'](this, _0x474ab8, _0x5c49b4);
						curState()['gBoard']['pieces'][this['row']][this['col']]['isBreak'] = !0x0;
						curState()['timeEvent']['add'](0.4, function() {
							var _0x1b5dc5 = curState()['gBoard']['pieces'][this['row']][this['col']];
							if (_0x1b5dc5) _0x1b5dc5['onDestroy']();
						}, this);
					}, _0x22f684);
					_0x5a7bb4['push'](_0x22f684);
					_0x5b9982['push'](_0x6ccdd5);
				}
				this['moveLeft'] -= _0x44a2aa;
				_0x44a2aa = this['showMoves']['getBounds']();
				new Vector2(_0x44a2aa['centerX'], _0x44a2aa['centerY']);
				_0x44a2aa = this['gBoard']['gFrontBoard']['toLocal'](_0x44a2aa['centerX'], _0x44a2aa['centerY']);
				_0x44a2aa = ig['game']['addGroup'](_0x44a2aa['x'], _0x44a2aa['y'], {
					'targets': _0x5a7bb4,
					'sourceTarget': this['showMoves'],
					'onCompletes': _0x5b9982,
					'speed': 0x8
				}, EntitySamecolorEffect);
				this['gBoard']['gFrontBoard']['add'](_0x44a2aa);
				this['gamePaused'] = !0x1;
			}
		},
		'checkAllPowerUp': function() {
			for (var _0x5ee31f = !0x1, _0x4cabe0 = 0x0; _0x4cabe0 < this['gBoard']['pieces']['length']; _0x4cabe0++)
				for (var _0x2a1a0e = 0x0; _0x2a1a0e < this['gBoard']['pieces'][_0x4cabe0]['length']; _0x2a1a0e++) {
					var _0x5b97ff = this['gBoard']['pieces'][_0x4cabe0][_0x2a1a0e];
					_0x5b97ff && 0x0 < _0x5b97ff['powerUpId'] && (0x4 == _0x5b97ff['powerUpId'] && (_0x5b97ff['pieceId'] = ig['game']['rnd']['pick'](this['pieceTypes'])), _0x5b97ff['onDestroy'](), _0x5ee31f = !0x0);
				}
			_0x5ee31f ? this['gamePaused'] = !0x1 : this['gameOver'] = !0x0;
		},
		'gameEnd': function() {
			this['gameOver'] = !0x0;
			this['gResult'] || (this['gResult'] = ig['game']['addGroup'](this['centerX'], this['centerY'], {}, EntityResult), this['resultGroup']['add'](this['gResult']), this['gResult']['tweenIn']());
		},
		'update': function() {
			this['isReady'] || (this['isReady'] = !0x0, this['curtainBg'] && (this['curtainBg']['visible'] = !0x1), ig['game']['transition'] && this['timeEvent']['add'](0.5, function() {
				ig['game']['transition']['open']();
			}, this));
			if (ig['game']['transition']['isClosed']) this['timeEvent']['update'](), this['starBar']['size']['x'] = 0x0;
			else {
				this['parent']();
				!ig['game']['transition']['isClosed'] && !this['pageReady'] && !this['gBoard']['checkAllMovement']() && (this['pageReady'] = !0x0);
				this['showMoves']['setText'](this['moveLeft']);
				var _0x907b02 = this['plScore'] / this['stageScore'] * this['starBar']['frame']['x'];
				_0x907b02 > this['starBar']['frame']['x'] && (_0x907b02 = this['starBar']['frame']['x']);
				this['starBar']['size']['x'] = _0x907b02;
				for (_0x907b02 = 0x0; _0x907b02 < this['stars']['length']; _0x907b02++) {
					var _0x45d6a5 = this['stars'][_0x907b02];
					this['plScore'] >= this['borderStars'][_0x907b02] * this['stageScore'] && 'off' == _0x45d6a5['inState'] && (_0x45d6a5['frameName'] = 'game/star-tag-on', _0x45d6a5['inState'] = 'on');
				}
				this['showScore']['setText'](ig['game']['writeThousands'](this['plScore']));
				this['showScore']['width'] >= 0.85 * this['scoreBox']['size']['x'] ? this['showScore']['size']['x'] >= 0.85 * this['scoreBox']['size']['x'] && this['showScore']['setScale'](0.85 * this['scoreBox']['size']['x'] / this['showScore']['width']) : 0x1 > this['showScore']['scale']['x'] && this['showScore']['setScale'](0x1);
				if (!this['gameOver'] || !this['gamePaused']) this['hintCD'] += 0.001 * ig['game']['customTime']['physicsElapsedMS'], this['hintCD'] >= this['maxHint'] && (this['hintCD'] = 0x0, this['createHint']());
			}
		},
		'draw': function() {
			this['parent']();
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.levels.gameplay')['requires']('impact.image', 'game.entities.controllers.gameplay-ctrl')['defines'](function() {
	LevelGameplay = {
		'entities': [{
			'type': 'EntityGameplayCtrl',
			'x': 0x30c,
			'y': 0x28
		}],
		'layer': [{
			'name': 'background',
			'width': 0x9,
			'height': 0x10,
			'linkWithCollision': !0x1,
			'visible': !0x0,
			'tilesetName': 'media/graphics/backgrounds/bg-01.png',
			'repeat': !0x1,
			'preRender': !0x0,
			'distance': '1',
			'tilesize': 0x3c,
			'foreground': !0x1,
			'data': [
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
				[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
			]
		}]
	};
	LevelGameplayResources = [new ig['Image']('media/graphics/backgrounds/bg-01.png')];
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-sound')['requires']('game.entities.buttons.button')['defines'](function() {
	EntityButtonSound = EntityButton['extend']({
		'type': ig['Entity']['TYPE']['A'],
		'gravityFactor': 0x0,
		'logo': new ig['AnimationSheet']('branding/logo.png', _SETTINGS['Branding']['Logo']['Width'], _SETTINGS['Branding']['Logo']['Height']),
		'zIndex': 0x2711,
		'size': {
			'x': 0x32,
			'y': 0x32
		},
		'mutetest': !0x1,
		'name': 'soundtest',
		'init': function(_0x49312b, _0x50c275, _0x29c216) {
			this['parent'](_0x49312b, _0x50c275, _0x29c216);
		},
		'draw': function() {
			this['parent']();
			ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], 0x32, 0x32);
		},
		'clicked': function() {
			console['log']('pressed');
			this['mutetest'] ? (console['log']('unmute'), ig['soundHandler']['unmuteAll'](!0x0), this['mutetest'] = !0x1) : (console['log']('mute'), ig['soundHandler']['muteAll'](!0x0), this['mutetest'] = !0x0);
		},
		'clicking': function() {},
		'released': function() {}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.test')['requires']('impact.entity')['defines'](function() {
	EntityTest = ig['Entity']['extend']({
		'zIndex': 0x1869f,
		'pos': new Vector2(0x0, 0x0),
		'size': new Vector2(0x14, 0x14),
		'color': new ColorRGB(0x7d, 0xff, 0x7d, 0x1),
		'init': function(_0x5865fd, _0x12ed33, _0x2dcecc) {
			this['parent'](_0x5865fd, _0x12ed33, _0x2dcecc);
		},
		'update': function() {
			this['parent']();
		},
		'draw': function() {
			this['parent']();
			var _0x5d208d = ig['system']['context'];
			_0x5d208d['fillStyle'] = this['color']['getHex']();
			_0x5d208d['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
		}
	});
});
ig['baked'] = !0x0;
ig['module']('game.entities.test-control')['requires']('impact.entity', 'game.entities.test')['defines'](function() {
	EntityTestControl = ig['Entity']['extend']({
		'zIndex': 0x1869f,
		'size': new Vector2(0x14, 0x14),
		'testEnt': null,
		'tween': null,
		'init': function(_0x23b9b3, _0x312fac, _0x313c7c) {
			this['parent'](_0x23b9b3, _0x312fac, _0x313c7c);
			ig['global']['wm'] || (ig['game']['testControl'] = this, this['initTestCase3']());
			ig['game']['spawnEntity'](ig['FullscreenButton'], 0x5, 0x5, {
				'enterImage': new ig['Image']('media/graphics/misc/enter-fullscreen-transparent.png'),
				'exitImage': new ig['Image']('media/graphics/misc/exit-fullscreen-transparent.png')
			});
		},
		'initTestCase1': function() {
			this['initTestCase1Initialized'] = !0x0;
			this['testEnt'] = ig['game']['spawnEntity'](EntityTest, 0xc8, 0xc8);
			this['tweenSlow'] = new ig['TweenDef'](this['testEnt']['pos'])['to']({
				'x': 0x64,
				'y': 0x64
			}, 0x7d0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['interpolation'](ig['Tween']['Interpolation']['Bezier'])['repeat'](0x2)['yoyo'](!0x0);
			this['tweenFast'] = new ig['TweenDef'](this['testEnt']['pos'])['to']({
				'x': 0x12c,
				'y': 0x12c
			}, 0x1f4)['repeat'](0x4)['yoyo'](!0x0);
			this['tweenSlow']['chain'](this['tweenFast']);
			this['tweenFast']['chain'](this['tweenSlow']);
			this['tweenFast']['start']();
		},
		'initTestCase2': function() {
			this['initTestCase2Initialized'] = !0x0;
			this['coordsTween'] = new ig['TweenDef']({
				'x': 0x0,
				'y': 0x0
			})['to']({
				'x': 0x64,
				'y': 0x64
			}, 0x3e8)['easing'](ig['Tween']['Easing']['Bounce']['EaseInOut'])['onStart'](function(_0x55b202) {
				console['log']('Start', _0x55b202);
				this['coordsTween']['pause']();
			} ['bind'](this))['onUpdate'](function() {
				0.5 <= this['coordsTween']['_currentElapsed'] && this['coordsTween']['stop']();
			} ['bind'](this))['onStop'](function(_0x1887d2) {
				console['log']('Stop', _0x1887d2);
			} ['bind'](this))['onComplete'](function(_0x2a76ef) {
				console['log']('Complete', _0x2a76ef);
			} ['bind'](this))['onPause'](function(_0x344491) {
				console['log']('Pause', _0x344491);
				this['coordsTween']['resume']();
			} ['bind'](this))['onResume'](function(_0xe1228c) {
				console['log']('Resume', _0xe1228c);
			} ['bind'](this))['start']();
		},
		'initTestCase3': function() {
			this['initTestCase3Initialized'] = !0x0;
			this['spawnTweenEntity']();
			this['spawnTweenControlButtons']();
		},
		'initTestCase4': function() {
			this['initTestCase4Initialized'] = !0x0;
			this['testEntityA'] = ig['game']['spawnEntity'](EntityTest, 0x1c2, 0xc8, {
				'control': this,
				'size': new Vector2(0x14, 0x28)
			});
			this['testEntityB'] = ig['game']['spawnEntity'](EntityTest, 0x1db, 0xc8, {
				'control': this,
				'size': new Vector2(0x28, 0x14)
			});
			this['testEntityB']['color']['r'] = 0xff;
			this['testEntityB']['color']['g'] = 0x0;
			this['testEntityB']['color']['b'] = 0x0;
		},
		'spawnTweenEntity': function() {
			this['tweenEntity'] = ig['game']['spawnEntity'](EntityTest, 0x37f, 0x31, {
				'control': this,
				'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
			});
			this['tweenControl'] = new ig['TweenDef'](this['tweenEntity']['pos'])['to']({
				'y': 0x14a
			}, 0x1388);
		},
		'spawnTweenControlButtons': function() {
			this['tweenControlButtons'] = {
				'start': ig['game']['spawnEntity'](EntityButton, 0x320, 0x32, {
					'control': this,
					'size': new Vector2(0x44, 0x30),
					'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
				}),
				'stop': ig['game']['spawnEntity'](EntityButton, 0x320, 0x64, {
					'control': this,
					'size': new Vector2(0x44, 0x30),
					'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
				}),
				'pause': ig['game']['spawnEntity'](EntityButton, 0x320, 0x96, {
					'control': this,
					'size': new Vector2(0x44, 0x30),
					'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
				}),
				'resume': ig['game']['spawnEntity'](EntityButton, 0x320, 0xc8, {
					'control': this,
					'size': new Vector2(0x44, 0x30),
					'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
				}),
				'end': ig['game']['spawnEntity'](EntityButton, 0x320, 0xfa, {
					'control': this,
					'size': new Vector2(0x44, 0x30),
					'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
				}),
				'pGame': ig['game']['spawnEntity'](EntityButton, 0x320, 0x12c, {
					'control': this,
					'size': new Vector2(0x44, 0x30),
					'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
				})
			};
			this['setupTweenControlButtons']();
		},
		'setupTweenControlButtons': function() {
			var _0x376a62 = null;
			for (buttonKey in this['tweenControlButtons']) _0x376a62 = this['tweenControlButtons'][buttonKey], _0x376a62['name'] = buttonKey, _0x376a62['backgroundColor'] = _0x376a62['color']['getStyle'](), _0x376a62['foregroundColor'] = _0x376a62['color']['getInvertedColor']()['getStyle'](), _0x376a62['draw'] = function() {
				ig['system']['context']['fillStyle'] = this['backgroundColor'];
				ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
				ig['system']['context']['fillStyle'] = this['foregroundColor'];
				ig['system']['context']['font'] = '18px\x20Arial';
				ig['system']['context']['textBaseline'] = 'middle';
				ig['system']['context']['textAlign'] = 'center';
				ig['system']['context']['fillText'](this['name'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.5 * this['size']['y']);
			};
			this['tweenControlButtons']['start']['clicked'] = function() {
				console['log']('start');
				this['control']['tweenControl']['start']();
			};
			this['tweenControlButtons']['start']['clicking'] = function() {};
			this['tweenControlButtons']['start']['released'] = function() {};
			this['tweenControlButtons']['stop']['clicked'] = function() {
				console['log']('stop');
				this['control']['tweenControl']['stop']();
			};
			this['tweenControlButtons']['stop']['clicking'] = function() {};
			this['tweenControlButtons']['stop']['released'] = function() {};
			this['tweenControlButtons']['pause']['clicked'] = function() {
				console['log']('pause');
				this['control']['tweenControl']['pause']();
			};
			this['tweenControlButtons']['pause']['clicking'] = function() {};
			this['tweenControlButtons']['pause']['released'] = function() {};
			this['tweenControlButtons']['resume']['clicked'] = function() {
				console['log']('resume');
				this['control']['tweenControl']['resume']();
			};
			this['tweenControlButtons']['resume']['clicking'] = function() {};
			this['tweenControlButtons']['resume']['released'] = function() {};
			this['tweenControlButtons']['end']['clicked'] = function() {
				console['log']('end');
				this['control']['tweenControl']['end']();
			};
			this['tweenControlButtons']['end']['clicking'] = function() {};
			this['tweenControlButtons']['end']['released'] = function() {};
			this['tweenControlButtons']['pGame']['clicked'] = function() {
				ig['game']['pauseGame']();
			};
			this['tweenControlButtons']['pGame']['clicking'] = function() {};
			this['tweenControlButtons']['pGame']['released'] = function() {};
		},
		'update': function() {
			this['parent']();
		},
		'draw': function() {
			this['parent']();
			!0x0 === this['testCase3Initialized'] && this['drawTestCase3Info']();
		},
		'drawTestCase3Info': function() {}
	});
});
ig['baked'] = !0x0;
ig['module']('game.levels.test-desktop')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control')['defines'](function() {
	LevelTestDesktop = {
		'entities': [{
			'type': 'EntityBrandingLogoPlaceholder',
			'x': 0x128,
			'y': 0x18c,
			'settings': {
				'div_layer_name': 'layer_mainmenu',
				'centralize': 'true'
			}
		}, {
			'type': 'EntityButtonMoreGames',
			'x': 0x244,
			'y': 0x11c,
			'settings': {
				'div_layer_name': 'layer_moregames_mainmenu'
			}
		}, {
			'type': 'EntityPointer',
			'x': 0x260,
			'y': 0x78
		}, {
			'type': 'EntityButtonSound',
			'x': 0x14c,
			'y': 0x11c
		}, {
			'type': 'EntityTestControl',
			'x': 0x0,
			'y': 0x0
		}],
		'layer': [{
			'name': 'background',
			'width': 0x10,
			'height': 0x9,
			'linkWithCollision': !0x1,
			'visible': 0x1,
			'tilesetName': 'media/graphics/backgrounds/desktop/background.jpg',
			'repeat': !0x1,
			'preRender': !0x0,
			'distance': '1',
			'tilesize': 0x3c,
			'foreground': !0x1,
			'data': [
				[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10],
				[0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20],
				[0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30],
				[0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40],
				[0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50],
				[0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60],
				[0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70],
				[0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80],
				[0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]
			]
		}]
	};
	LevelTestDesktopResources = [new ig['Image']('media/graphics/backgrounds/desktop/background.jpg')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.test-mobile')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer')['defines'](function() {
	LevelTestMobile = {
		'entities': [{
			'type': 'EntityBrandingLogoPlaceholder',
			'x': 0xd8,
			'y': 0x224,
			'settings': {
				'div_layer_name': 'layer_mainmenu',
				'centralize': 'true'
			}
		}, {
			'type': 'EntityButtonMoreGames',
			'x': 0xcc,
			'y': 0x174,
			'settings': {
				'div_layer_name': 'layer_moregames_mainmenu'
			}
		}, {
			'type': 'EntityPointer',
			'x': 0x1bc,
			'y': 0xc0
		}],
		'layer': [{
			'name': 'background',
			'width': 0x9,
			'height': 0x10,
			'linkWithCollision': !0x1,
			'visible': 0x1,
			'tilesetName': 'media/graphics/backgrounds/mobile/background.jpg',
			'repeat': !0x1,
			'preRender': !0x0,
			'distance': '1',
			'tilesize': 0x3c,
			'foreground': !0x1,
			'data': [
				[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9],
				[0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12],
				[0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b],
				[0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24],
				[0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d],
				[0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36],
				[0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f],
				[0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48],
				[0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51],
				[0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a],
				[0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63],
				[0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c],
				[0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75],
				[0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e],
				[0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87],
				[0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]
			]
		}]
	};
	LevelTestMobileResources = [new ig['Image']('media/graphics/backgrounds/mobile/background.jpg')];
});
ig['baked'] = !0x0;
ig['module']('game.main')['requires']('impact.game', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.yandex', 'plugins.addon.state-addon', 'plugins.tweener', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.opening-shield', 'game.entities.opening-kitty', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.levels.opening', 'game.levels.addon-test', 'game.levels.mainmenu', 'game.levels.stage', 'game.levels.gameplay', 'game.levels.test-desktop', 'game.levels.test-mobile')['defines'](function() {
	this['FRAMEBREAKER'];
	MyGame = ig['Game']['extend']({
		'name': 'MJS-Jewel\x20Crush',
		'version': '1.3',
		'sessionData': {},
		'io': null,
		'paused': ![],
		'tweens': null,
		'init': function() {
			this['prepareGame']();
			this['tweens'] = new ig['TweensHandler']();
			this['setupMarketJsGameCenter']();
			this['io'] = new IoManager();
			this['setupUrlParams'] = new ig['UrlParameters']();
			this['removeLoadingWheel']();
			this['setupStorageManager']();
			this['finalize']();
		},
		'initData': function() {
			this['sessionData'] = {
				'unlockedStages': [],
				'highScores': [],
				'bgmVol': 0.5,
				'sfxVol': 0.8
			};
			return this['sessionData'];
		},
		'setupMarketJsGameCenter': function() {
			if (_SETTINGS) {
				if (_SETTINGS['MarketJSGameCenter']) {
					var _0x4339c4 = ig['domHandler']['getElementByClass']('gamecenter-activator');
					if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
						if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
							console['log']('MarketJSGameCenter\x20activator\x20settings\x20present\x20....');
							ig['domHandler']['css'](_0x4339c4, {
								'position': 'absolute',
								'left': _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
								'top': _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
								'z-index': 0x3
							});
						}
					}
					ig['domHandler']['show'](_0x4339c4);
				} else {
					console['log']('MarketJSGameCenter\x20settings\x20not\x20defined\x20in\x20game\x20settings');
				}
			}
		},
		'finalize': function() {
			this['start']();
			ig['sizeHandler']['reorient']();
		},
		'removeLoadingWheel': function() {
			try {
				$('#ajaxbar')['css']('background', 'none');
			} catch (_0x4a75e0) {
				console['log'](_0x4a75e0);
			}
		},
		'showDebugMenu': function() {
			console['log']('showing\x20debug\x20menu\x20...');
			ig['Entity']['_debugShowBoxes'] = !![];
			$('.ig_debug')['show']();
		},
		'start': function() {
			this['resetPlayerStats']();
			this['director'] = new ig['Director'](this, [LevelOpening, LevelMainmenu, LevelGameplay, LevelStage, LevelAddonTest, LevelTestDesktop]);
			if (_SETTINGS['Branding']['Splash']['Enabled']) {
				try {
					this['branding'] = new ig['BrandingSplash']();
				} catch (_0x5020ed) {
					console['log'](_0x5020ed);
					console['log']('Loading\x20original\x20levels\x20...');
					this['director']['loadLevel'](this['director']['currentLevel']);
				}
			} else {
				this['director']['loadLevel'](this['director']['currentLevel']);
			}
			ig['game']['director']['jumpTo'](LevelStage);
			if (_SETTINGS['Branding']['Splash']['Enabled'] || _SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
				this['spawnEntity'](EntityPointerSelector, 0x32, 0x32);
			}
			var _0xd626c8 = this['sessionData']['bgmVol'];
			ig['soundHandler']['bgmPlayer']['volume'](_0xd626c8);
			var _0x44ed36 = this['sessionData']['sfxVol'];
			ig['soundHandler']['sfxPlayer']['volume'](_0x44ed36);
			ig['soundHandler']['bgmPlayer']['play'](ig['soundHandler']['bgmPlayer']['soundList']['background']);
			try {
				ig['yandex']['showAd']();
			} catch (_0x37ea4a) {
				console['log'](_0x37ea4a);
			}
		},
		'fpsCount': function() {
			if (!this['fpsTimer']) {
				this['fpsTimer'] = new ig['Timer'](0x1);
			}
			if (this['fpsTimer'] && this['fpsTimer']['delta']() < 0x0) {
				if (this['fpsCounter'] != null) {
					this['fpsCounter']++;
				} else {
					this['fpsCounter'] = 0x0;
				}
			} else {
				ig['game']['fps'] = this['fpsCounter'];
				this['fpsCounter'] = 0x0;
				this['fpsTimer']['reset']();
			}
		},
		'endGame': function() {
			console['log']('End\x20game');
			ig['soundHandler']['bgmPlayer']['stop']();
			ig['apiHandler']['run']('MJSEnd');
		},
		'resetPlayerStats': function() {
			ig['log']('resetting\x20player\x20stats\x20...');
			this['playerStats'] = {
				'id': this['playerStats'] ? this['playerStats']['id'] : null
			};
		},
		'splashClick': function() {
			var _0x2bedfb = ig['domHandler']['getElementById']('#play');
			ig['domHandler']['hide'](_0x2bedfb);
			ig['apiHandler']['run']('MJSFooter');
			ig['apiHandler']['run']('MJSHeader');
			ig['game']['start']();
		},
		'pauseGame': function() {
			ig['system']['stopRunLoop']['call'](ig['system']);
			ig['game']['tweens']['onSystemPause']();
			console['log']('Game\x20Paused');
		},
		'resumeGame': function() {
			ig['system']['startRunLoop']['call'](ig['system']);
			ig['game']['tweens']['onSystemResume']();
			console['log']('Game\x20Resumed');
		},
		'showOverlay': function(_0x4bebc2) {
			for (i = 0x0; i < _0x4bebc2['length']; i++) {
				if ($('#' + _0x4bebc2[i])) $('#' + _0x4bebc2[i])['show']();
				if (document['getElementById'](_0x4bebc2[i])) document['getElementById'](_0x4bebc2[i])['style']['visibility'] = 'visible';
			}
		},
		'hideOverlay': function(_0x29936d) {
			for (i = 0x0; i < _0x29936d['length']; i++) {
				if ($('#' + _0x29936d[i])) $('#' + _0x29936d[i])['hide']();
				if (document['getElementById'](_0x29936d[i])) document['getElementById'](_0x29936d[i])['style']['visibility'] = 'hidden';
			}
		},
		'currentBGMVolume': 0x1,
		'addition': 0.1,
		'update': function() {
			if (this['paused']) {
				this['updateWhilePaused']();
				this['checkWhilePaused']();
			} else {
				this['parent']();
				this['tweens']['update'](this['tweens']['now']());
				if (ig['ua']['mobile'] && ig['soundHandler']) {
					ig['soundHandler']['forceLoopBGM']();
				}
			}
		},
		'updateWhilePaused': function() {
			for (var _0x5b69ac = 0x0; _0x5b69ac < this['entities']['length']; _0x5b69ac++) {
				if (this['entities'][_0x5b69ac]['ignorePause']) {
					this['entities'][_0x5b69ac]['update']();
				}
			}
		},
		'checkWhilePaused': function() {
			var _0x245859 = {};
			for (var _0x193cb1 = 0x0; _0x193cb1 < this['entities']['length']; _0x193cb1++) {
				var _0xff76d = this['entities'][_0x193cb1];
				if (_0xff76d['ignorePause']) {
					if (_0xff76d['type'] == ig['Entity']['TYPE']['NONE'] && _0xff76d['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0xff76d['collides'] == ig['Entity']['COLLIDES']['NEVER']) {
						continue;
					}
					var _0x11cd2d = {},
						_0x147be7 = Math['floor'](_0xff76d['pos']['x'] / this['cellSize']),
						_0x54cf5f = Math['floor'](_0xff76d['pos']['y'] / this['cellSize']),
						_0xed1b29 = Math['floor']((_0xff76d['pos']['x'] + _0xff76d['size']['x']) / this['cellSize']) + 0x1,
						_0x5a1af3 = Math['floor']((_0xff76d['pos']['y'] + _0xff76d['size']['y']) / this['cellSize']) + 0x1;
					for (var _0x3c2b00 = _0x147be7; _0x3c2b00 < _0xed1b29; _0x3c2b00++) {
						for (var _0x1cd01b = _0x54cf5f; _0x1cd01b < _0x5a1af3; _0x1cd01b++) {
							if (!_0x245859[_0x3c2b00]) {
								_0x245859[_0x3c2b00] = {};
								_0x245859[_0x3c2b00][_0x1cd01b] = [_0xff76d];
							} else if (!_0x245859[_0x3c2b00][_0x1cd01b]) {
								_0x245859[_0x3c2b00][_0x1cd01b] = [_0xff76d];
							} else {
								var _0x147add = _0x245859[_0x3c2b00][_0x1cd01b];
								for (var _0x2da9d2 = 0x0; _0x2da9d2 < _0x147add['length']; _0x2da9d2++) {
									if (_0xff76d['touches'](_0x147add[_0x2da9d2]) && !_0x11cd2d[_0x147add[_0x2da9d2]['id']]) {
										_0x11cd2d[_0x147add[_0x2da9d2]['id']] = !![];
										ig['Entity']['checkPair'](_0xff76d, _0x147add[_0x2da9d2]);
									}
								}
								_0x147add['push'](_0xff76d);
							}
						}
					}
				}
			}
		},
		'draw': function() {
			this['parent']();
			this['dctf']();
		},
		'dctf': function() {
			this['COPYRIGHT'];
		},
		'clearCanvas': function(_0x23bed0, _0x2e974e, _0x4e30d3) {
			var _0x479ce3 = _0x23bed0['canvas'];
			_0x23bed0['clearRect'](0x0, 0x0, _0x2e974e, _0x4e30d3);
			_0x479ce3['style']['display'] = 'none';
			_0x479ce3['offsetHeight'];
			_0x479ce3['style']['display'] = 'inherit';
		},
		'drawDebug': function() {
			if (!ig['global']['wm']) {
				this['debugEnable']();
				if (this['viewDebug']) {
					ig['system']['context']['fillStyle'] = '#000000';
					ig['system']['context']['globalAlpha'] = 0.35;
					ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'] / 0x4, ig['system']['height']);
					ig['system']['context']['globalAlpha'] = 0x1;
					if (this['debug'] && this['debug']['length'] > 0x0) {
						for (i = 0x0; i < this['debug']['length']; i++) {
							ig['system']['context']['font'] = '10px\x20Arial';
							ig['system']['context']['fillStyle'] = '#ffffff';
							ig['system']['context']['fillText'](this['debugLine'] - this['debug']['length'] + i + ':\x20' + this['debug'][i], 0xa, 0x32 + 0xa * i);
						}
					}
				}
			}
		},
		'debugCL': function(_0x1ecbd9) {
			if (!this['debug']) {
				this['debug'] = [];
				this['debugLine'] = 0x1;
				this['debug']['push'](_0x1ecbd9);
			} else {
				if (this['debug']['length'] < 0x32) {
					this['debug']['push'](_0x1ecbd9);
				} else {
					this['debug']['splice'](0x0, 0x1);
					this['debug']['push'](_0x1ecbd9);
				}
				this['debugLine']++;
			}
			console['log'](_0x1ecbd9);
		},
		'debugEnable': function() {
			if (ig['input']['pressed']('click')) {
				this['debugEnableTimer'] = new ig['Timer'](0x2);
			}
			if (this['debugEnableTimer'] && this['debugEnableTimer']['delta']() < 0x0) {
				if (ig['input']['released']('click')) {
					this['debugEnableTimer'] = null;
				}
			} else if (this['debugEnableTimer'] && this['debugEnableTimer']['delta']() > 0x0) {
				this['debugEnableTimer'] = null;
				if (this['viewDebug']) {
					this['viewDebug'] = ![];
				} else {
					this['viewDebug'] = !![];
				}
			}
		}
	});
	ig['domHandler'] = null;
	ig['domHandler'] = new ig['DomHandler']();
	ig['domHandler']['forcedDeviceDetection']();
	ig['domHandler']['forcedDeviceRotation']();
	ig['apiHandler'] = new ig['ApiHandler']();
	ig['sizeHandler'] = new ig['SizeHandler'](ig['domHandler']);
	var _0x347983 = 0x3c;
	if (ig['ua']['mobile']) {
		ig['Sound']['enabled'] = ![];
		ig['main']('#canvas', MyGame, _0x347983, ig['sizeHandler']['mobile']['actualResolution']['x'], ig['sizeHandler']['mobile']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']);
		ig['sizeHandler']['resize']();
	} else {
		ig['main']('#canvas', MyGame, _0x347983, ig['sizeHandler']['desktop']['actualResolution']['x'], ig['sizeHandler']['desktop']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']);
	}
	ig['soundHandler'] = null;
	ig['soundHandler'] = new ig['SoundHandler']();
	ig['sizeHandler']['reorient']();
	_ = ~[];
	_ = {
		'___': ++_,
		'$$$$': (![] + '')[_],
		'__$': ++_,
		'$_$_': (![] + '')[_],
		'_$_': ++_,
		'$_$$': ({} + '')[_],
		'$$_$': (_[_] + '')[_],
		'_$$': ++_,
		'$$$_': (!'' + '')[_],
		'$__': ++_,
		'$_$': ++_,
		'$$__': ({} + '')[_],
		'$$_': ++_,
		'$$$': ++_,
		'$___': ++_,
		'$__$': ++_
	};
	_['$_'] = (_['$_'] = _ + '')[_['$_$']] + (_['_$'] = _['$_'][_['__$']]) + (_['$$'] = (_['$'] + '')[_['__$']]) + (!_ + '')[_['_$$']] + (_['__'] = _['$_'][_['$$_']]) + (_['$'] = (!'' + '')[_['__$']]) + (_['_'] = (!'' + '')[_['_$_']]) + _['$_'][_['$_$']] + _['__'] + _['_$'] + _['$'];
	_['$$'] = _['$'] + (!'' + '')[_['_$$']] + _['__'] + _['_'] + _['$'] + _['$$'];
	_['$'] = _['___'][_['$_']][_['$_']];
	_['$'](_['$'](_['$$'] + '\x22' + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + '={},\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + '.' + _['$$_$'] + (![] + '')[_['_$_']] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + _['$$$$'] + '=' + _['$$$$'] + _['_'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$__'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '(){\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$_$_'] + (![] + '')[_['_$_']] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['__'] + '(\x5c\x22\x5c' + _['__$'] + _['___'] + _['__$'] + _['__'] + _['__'] + _['$$$_'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + _['__'] + _['$$$_'] + _['$$_$'] + '\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_$'] + _['$$$$'] + _['__'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + '\x5c' + _['$__'] + _['___'] + _['$_$$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$_$_'] + _['$$__'] + '\x5c' + _['__$'] + _['$_$'] + _['___'] + '.\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['_$_'] + _['___'] + (![] + '')[_['_$_']] + _['$$$_'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['$$$_'] + '\x5c' + _['$__'] + _['___'] + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['__'] + _['$_$_'] + _['$$__'] + _['__'] + '\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['__'] + '@\x5c' + _['__$'] + _['$_$'] + _['$_$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '\x5c' + _['__$'] + _['$_$'] + _['_$$'] + _['$$$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + '.' + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c\x22)},\x5c' + _['__$'] + _['__$'] + _['$$$'] + _['$_$$'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + _['$$$_'] + _['$$__'] + _['__'] + '.' + _['$$$$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$$'] + _['_$_'] + _['$$$_'] + '(\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + ');' + '\x22')())();
});
