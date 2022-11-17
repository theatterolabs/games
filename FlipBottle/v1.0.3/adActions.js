var cnvs = document.querySelector('canvas');
	
// where we'll store our pixels info
var pixels = new Uint8Array(4);


cnvs.addEventListener("click",function(e){
	// Get the coordinates of the click
	var x = e.clientX - canvas.offsetLeft;
  	var y = e.clientY - canvas.offsetTop;
	var context = this.getContext("webgl2", {preserveDrawingBuffer: true});
	
	// Get the data of the pixel according to the location generate by the getEventLocation function
	
	requestAnimationFrame(function() {
		
		context.readPixels(x, y, 1, 1, context.RGBA, context.UNSIGNED_BYTE, pixels);
		console.log(pixels);
		});

		
});
