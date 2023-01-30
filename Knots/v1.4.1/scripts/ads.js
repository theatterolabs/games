import { mainContainer } from "./varmain.js";
import { footerAD } from "./varfooter.js";
import { myTimer }  from "./vartimer.js";

export function requestAds() {
	
	mainContainer.src= './interstitial.html';
	footerAD.style.display = 'none';
   	clearInterval(myTimer);
	myTimer = 0;
	mainContainer.style.display = 'block';
	
}
