import mainContainer from "./var.js";
import footerAD from "./var.js";
import myTimer from "./var.js";

export function requestAds() {
	
	mainContainer.src= './interstitial.html';
	footerAD.style.display = 'none';
   	clearInterval(myTimer);
	myTimer = 0;
	mainContainer.style.display = 'block';
	
}
