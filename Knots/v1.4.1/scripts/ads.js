export default function requestAds() {
	let footerAD = document.getElementById('gamescreen-footer');
let mainContainer = document.getElementById('mainContainer');
let  myTimer;
	mainContainer.src= './interstitial.html';
	footerAD.style.display = 'none';
   	clearInterval(myTimer);
	myTimer = 0;
	mainContainer.style.display = 'block';
	
}

 
