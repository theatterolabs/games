
<!--  ********************************************** Begin Google Video Ads  ********************************************** -->		

var adsManager;
var adsLoader;
var adDisplayContainer;
var playButton;
var videoContent;
var splashScreen;
var mainContainer = document.getElementById('mainContainer');
var footerAD = document.getElementById('gamescreen-footer');
var skipBtn = document.getElementById('skip');

function init() {
 
	playButton = document.getElementById('btn-play');
	playButton.addEventListener('click', requestAds);
	splashScreen = document.getElementById('fg-click2play');
	skipBtn.addEventListener('click', closeAds);
	
}
	

	
function skipAds() {
	setTimeout(function(){ skipBtn.style.display = 'block';}, 5000);
}
	
function closeAds() {
	mainContainer.style.display = 'none';
	footerAD.style.display = 'none';
	adsManager.destroy();
	

}

function createAdDisplayContainer() {
  // We assume the adContainer is the DOM id of the element that will house
  // the ads.
  adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById('adContainer'), videoContent);
}

function requestAds() {
	splashScreen.style.display = 'none';
	footerAD.style.display = 'none';
	skipBtn.style.display = 'none';
  	google.ima.settings.setPlayerType('google/codepen-demo-manual-ad-breaks');
  	google.ima.settings.setPlayerVersion('1.0.0');
  	// Create the ad display container.
  	createAdDisplayContainer();
  	// Initialize the container. Must be done via a user action on mobile devices.
  	adDisplayContainer.initialize();
  
  	// Create ads loader.
  	adsLoader = new google.ima.AdsLoader(adDisplayContainer);
 	 adsLoader.getSettings().setAutoPlayAdBreaks(false);
  	// Listen and respond to ads loaded and error events.
  	adsLoader.addEventListener(
      		google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      		onAdsManagerLoaded,
      		false);
  	adsLoader.addEventListener(
      		google.ima.AdErrorEvent.Type.AD_ERROR,
      		onAdError,
      		false);

  // Request video ads.
  var adsRequest = new google.ima.AdsRequest();
  adsRequest.adTagUrl =
    'https://pubads.g.doubleclick.net/gampad/ads?iu=/21665149170/Zee5_Games_RewardedVideo&description_url=[placeholder]&tfcd=0&npa=0&sz=320x480%7C480x320%7C480x640%7C640x480%7C768x1024%7C1024x768&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';

  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = 480;
  adsRequest.linearAdSlotHeight = 640;

  adsRequest.nonLinearAdSlotWidth = 480;
  adsRequest.nonLinearAdSlotHeight = 640;

  adsLoader.requestAds(adsRequest);
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
  // Get the ads manager.
  var adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
  // videoContent should be set to the content video element.
  adsManager = adsManagerLoadedEvent.getAdsManager(
      videoContent, adsRenderingSettings);

  // Add listeners to the required events.
  adsManager.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
      onContentPauseRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      onContentResumeRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
      onAdEvent);

  // Listen to any additional events, if necessary.
  adsManager.addEventListener(
      google.ima.AdEvent.Type.LOADED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.STARTED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.COMPLETE,
      onAdEvent);

  // For non-auto ad breaks, listen for ad break ready
  adsManager.addEventListener(
      google.ima.AdEvent.Type.AD_BREAK_READY,
      adBreakReadyHandler);

  try {
    // Initialize the ads manager. Ad rules playlist will start at this time.
    adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL);
  } catch (adError) {
    // An error may be thrown if there was a problem with the VAST response.
    videoContent.play();
  }
}

function onAdEvent(adEvent) {
	
  	// Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
	// don't have ad object associated.
	var ad = adEvent.getAd();
	switch (adEvent.type) {
		case google.ima.AdEvent.Type.LOADED:
      		// This is the first event sent for an ad - it is possible to
      		// determine whether the ad is a video ad or an overlay.
			skipAds();
			if (!ad.isLinear()) {
        			// Position AdDisplayContainer correctly for overlay.
        			// Use ad.width and ad.height.
				videoContent.play();
			}
		break;
		   
		case google.ima.AdEvent.Type.COMPLETE:
			mainContainer.style.display = 'none';
			skipBtn.style.display = 'none';
		break;
		  
	}
}

function onAdError(adErrorEvent) {
  // Handle the error logging.
  console.log(adErrorEvent.getError());
  adsManager.destroy();
mainContainer.style.display = 'none';
skipBtn.style.display = 'none';
}

function onContentPauseRequested() {
  videoContent.pause();
  // This function is where you should setup UI for showing ads (e.g.
  // display ad timer countdown, disable seeking etc.)
  // setupUIForAds();
}

function onContentResumeRequested() {
  
  // This function is where you should ensure that your UI is ready
  // to play content. It is the responsibility of the Publisher to
  // implement this function when necessary.
  // setupUIForContent();

}

function adBreakReadyHandler(adEvent) {
  // Here we can get any necessary data about the ad.
  console.log(adEvent.getAdData());

  // Once we're ready to play ads. To skip this ad break, simply return
  // from this handler without calling adsManager.start().
  adsManager.start();
}

function contentEnded() {
  // Our content video has ended, notify the AdsLoader so we can play
  // any post-rolls.
  adsLoader.contentComplete();
	
}

// Wire UI element references and UI event listeners.
init();


<!--  ********************************************** End Google Video Ads  ********************************************** -->		
