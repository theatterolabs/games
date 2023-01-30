export let mainContainer = document.getElementById('mainContainer');
export let footerAD = document.getElementById('gamescreen-footer');
export let myTimer = setInterval(footerInterval, 20000);

export function requestAds() {
	
	mainContainer.src= './interstitial.html';
	footerAD.style.display = 'none';
   	clearInterval(myTimer);
	myTimer = 0;
	mainContainer.style.display = 'block';
	
}
