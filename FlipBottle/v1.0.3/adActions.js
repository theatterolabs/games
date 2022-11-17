var target = document.querySelector('canvas');
// the canvas we'll use to read the target on
var pixels = new Uint8Array(4);

target.addEventListener("click",function(event){
	var eventLocation = getEventLocation(this,event);
	var c = this.getContext("webgl2", {preserveDrawingBuffer: true});
	
	requestAnimationFrame(function() {
	c.readPixels(eventLocation.x, eventLocation.y, 1, 1, c.RGBA, c.UNSIGNED_BYTE, pixels);
    	console.log(pixels);
		});
		
});
