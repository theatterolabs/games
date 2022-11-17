var target = document.querySelector('canvas');
// the canvas we'll use to read the target on
var reader = document.createElement('canvas');
var ctx = reader.getContext('2d');

cnvs.addEventListener("click",function(e){
	// Get the coordinates of the click
	 var x = e.clientX - target.offsetLeft;
  	var y = e.clientY - target.offsetTop;
  // same preserveDrawingBuffer workaround
  	requestAnimationFrame(function() {
    // move the target image in the top left corner of our reader,
    //  because we want only a single pixel
   	 ctx.drawImage(target, -x, -y); 
    	var pixels = ctx.getImageData(0, 0, 1, 1);
    	console.log(pixels);
  });
		
});
