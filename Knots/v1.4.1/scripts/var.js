export let mainContainer = document.getElementById('mainContainer');
export let footerAD = document.getElementById('gamescreen-footer');
export let myTimer = setInterval(footerInterval, 20000);

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
