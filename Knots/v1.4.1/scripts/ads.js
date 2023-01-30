var adsManager;
var adsLoader;
var adDisplayContainer;
var playButton;
var videoContent;
var mainContainer = document.getElementById('mainContainer');
var footerAD = document.getElementById('gamescreen-footer');
var myTimer = setInterval(footerInterval, 20000);	

function closeAds() {
		myTimer = setInterval(footerInterval, 20000);	
		mainContainer.src= 'about:blank';
		footerAD.style.display = 'block';
		mainContainer.style.display = 'none';
		mixpanel.track('Skip Ad', {
  			'Game Name': "Knots",
			'Ad Media Type': "Interstitial"
  		
		});
	
}
	
	
function closeEmptyInterstitialAds() {
	footerAD.style.display = 'block';
	myTimer = setInterval(footerInterval, 20000);
	mainContainer.style.display = 'none';
	mainContainer.src= 'about:blank';
	
}
	


		
function footerInterval() {
   refreshfooterSlot();
 }



export default function requestAds() {
	mainContainer.src= './interstitial.html';
	footerAD.style.display = 'none';
   	clearInterval(myTimer);
	myTimer = 0;
	mainContainer.style.display = 'block';
	
}
