canvas.addEventListener("click",function(e){
	// Get the coordinates of the click
	var pos = getPosition(this);
  	var x = e.pageX - pos.x;
  	var y = e.pageY - pos.y;
	
	// Get the data of the pixel according to the location generate by the getEventLocation function
	var context = this.getContext('webgl2');
	
	// where we'll store our pixels info
	var pixels = new Uint8Array(4);
	
	requestAnimationFrame(function() {
		context.readPixels(x, y, 1, 1, context.RGBA, context.UNSIGNED_BYTE, pixels);
		console.log(pixels);
		});
		
    //var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

    // If transparency on the pixel , array = [0,0,0,0]
    //if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
        // Do something if the pixel is transparent
    //}

   //var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
		
});
