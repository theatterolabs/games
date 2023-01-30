export default function requestAds() {
	window.footerAD = document.getElementById('gamescreen-footer');
window.mainContainer = document.getElementById('mainContainer');
window.myTimer = setInterval(footerInterval, 20000);
	mainContainer.src= './interstitial.html';
	footerAD.style.display = 'none';
   	clearInterval(myTimer);
	myTimer = 0;
	mainContainer.style.display = 'block';
	
}

 
