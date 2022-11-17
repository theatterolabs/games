var cnvs = document.querySelector('canvas');

var context = cnvs.getContext('webgl2');
	
// where we'll store our pixels info
var pixels = new Uint8Array(4);


cnvs.addEventListener("click",function(e){
	// Get the coordinates of the click
	var pos = getPosition(this);
  	var x = e.pageX - pos.x;
  	var y = e.pageY - pos.y;
	
	// Get the data of the pixel according to the location generate by the getEventLocation function
	
	requestAnimationFrame(function() {
		
		context.readPixels(x, y, 1, 1, context.RGBA, context.UNSIGNED_BYTE, pixels);
		console.log(pixels);
		});

		
});
