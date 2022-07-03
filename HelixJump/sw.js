const VERSION = 'v1.0.19';
const CACHE_PREFIX = 'jumpyball-';
const CACHE_NAME = CACHE_PREFIX + VERSION;

const cacheList = [
 "comp/promo.png",
 "comp/result_best.png",
 "comp/result_best_ar.png",
 "comp/result_best_de.png",
 "comp/result_best_en.png",
 "comp/result_best_es.png",
 "comp/result_best_fr.png",
 "comp/result_best_hi.png",
 "comp/result_best_id.png",
 "comp/result_congrats_ar.png",
 "comp/result_congrats_de.png",
 "comp/result_congrats_en.png",
 "comp/result_congrats_es.png",
 "comp/result_congrats_fr.png",
 "comp/result_congrats_hi.png",
 "comp/result_congrats_id.png",
 "comp/result_congrats_ru.png",
 "comp/result_level.png",
 "comp/result_level_ar.png",
 "comp/result_level_de.png",
 "comp/result_level_en.png",
 "comp/result_level_es.png",
 "comp/result_level_fr.png",
 "comp/result_level_hi.png",
 "comp/result_level_id.png",
 "comp/result_shield.png",
 "favicon.png",
 "fileconfig.json",
 "fx/Assets/circle.lmat",
 "fx/Assets/ellipse3_1.lmat",
 "fx/Assets/particle.lmat",
 "fx/Assets/textures/circle.png",
 "fx/Assets/textures/ellipse3_1.png",
 "fx/Assets/textures/texture.png",
 "fx/scene.ls",
 "index.html",
 "index.js",
 "inkblot.png",
 "js/browser.min.js",
 "js/bundle.js",
 "js/bundle_.js",
 "js/config.js",
 "js/config_.js",
 "js/crypto-js.min.js",
 "js/jquery.loading-indicator.css",
 "js/jquery.loading-indicator.min.js",
 "js/jquery.min.js",
 "js/levels.js",
 "js/okmidroll.js",
 "js/oksdk.js",
 "js/oksdk.js.bak",
 "js/progress-indicator.js",
 "libs/bytebuffer.js",
 "libs/domparserinone.js",
 "libs/laya.ani.js",
 "libs/laya.bdmini.js",
 "libs/laya.core.js",
 "libs/laya.core.min.js",
 "libs/laya.d3.js",
 "libs/laya.d3.min.js",
 "libs/laya.debugtool.js",
 "libs/laya.device.js",
 "libs/laya.device.min.js",
 "libs/laya.html.js",
 "libs/laya.particle.js",
 "libs/laya.physics.js",
 "libs/laya.physics3D.js",
 "libs/laya.physics3D.runtime.js",
 "libs/laya.physics3D.wasm.js",
 "libs/laya.physics3D.wasm.wasm",
 "libs/laya.qqmini.js",
 "libs/laya.quickgamemini.js",
 "libs/laya.tiledmap.js",
 "libs/laya.ui.js",
 "libs/laya.ui.min.js",
 "libs/laya.vvmini.js",
 "libs/laya.webgl.js",
 "libs/laya.webgl.min.js",
 "libs/laya.wxmini.js",
 "libs/laya.xmmini.js",
 "libs/soundjs.min.js",
 "libs/worker.js",
 "libs/workerloader.js",
 "particle.lmat",
 "prefab/progressColor.prefab",
 "racoon_promo.jpg",
 "racoon_promo_old.jpg",
 "res/atlas/comp.atlas",
 "res/atlas/comp.png",
 "res/layabox.png",
 "scenes/BankUI.scene",
 "scenes/BankUIAds.scene",
 "scenes/ChestUI.scene",
 "scenes/FriendDefeatUI.scene",
 "scenes/FriendDefeatUI2.scene",
 "scenes/FriendsUI.scene",
 "scenes/GameResultUI.scene",
 "scenes/GameScene.scene",
 "scenes/GameUI.scene",
 "scenes/MainScene.scene",
 "scenes/MenuUI.scene",
 "scenes/OrderResultUI.scene",
 "scenes/TutorUI.scene",
 "sound/break1.mp3",
 "sound/break2.mp3",
 "sound/break3.mp3",
 "sound/break4.mp3",
 "sound/click.mp3",
 "sound/crack.mp3",
 "sound/death.mp3",
 "sound/jump.mp3",
 "stubAvatars/1.jpg",
 "stubAvatars/2.jpg",
 "stubAvatars/3.jpg",
 "stubAvatars/4.jpg",
 "stubAvatars/5.jpg",
 "stubAvatars/6.jpg",
 "stubAvatars/7.jpg",
 "stubAvatars/8.jpg",
 "texture.png",
 "tsar_800x1170_en.png",
 "tsar_800x1170_ru.png",
 "unpack.json",
 "version.json",
 "vkios.html",
 "yandex-manifest.json",
];


this.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			return cache.addAll(cacheList);
		})
	);
});

this.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(keyList => {
			return Promise.all(keyList.map(key => {
				if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
					return caches.delete(key);
				}
			}));
		})
	);
});

function isNetworkFallbackToCacheRequest(request) {
	return request.url.indexOf('yandex.ru/games/sdk/v') > 0;
}
function isNetworkOnlyRequest(request) {
	return request.method !== 'GET' ||
		request.url.indexOf('http://') === 0 ||
		request.url.indexOf('mc.yandex.ru') > 0 ||
		new URL(request.url).origin !== location.origin;
		//event.request.url.indexOf('an.yandex.ru') > 0 || // Yandex ads stuff
}
function doCache(request, response) {
	let responseClone = response.clone();
	caches.open(CACHE_NAME).then(function(cache) {
		cache.put(request, responseClone);
	});
	return response;
}

this.addEventListener('fetch', function (event) {
	if (isNetworkFallbackToCacheRequest(event.request)) {
		// Strategy: Network falling back to cache
		event.respondWith(
			fetch(event.request).then(function(response) {
				return doCache(event.request, response);
			}).catch(() => {
				return caches.match(event.request);
			})
		);
	}
	else if (isNetworkOnlyRequest(event.request)) {
		// Do nothing: default behaviour
		//
	} else {
		// Strategy: Cache falling back to network
		event.respondWith(
			caches.match(event.request).then(function(response) {
				if (response !== undefined)
					return response;
				return fetch(event.request).then(function(response) {
					return doCache(event.request, response);
				});
			})
		);
	}
});
