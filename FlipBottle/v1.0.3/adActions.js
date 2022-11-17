canvas.addEventListener("click",function(event){
	// Get the coordinates of the click
	var eventLocation = getEventLocation(this,event);
	
	// Get the data of the pixel according to the location generate by the getEventLocation function
	var context = this.getContext("webgl2", {preserveDrawingBuffer: true});
	
	// where we'll store our pixels info
	var pixels = new Uint8Array(4);
	
	requestAnimationFrame(function() {
		context.readPixels(eventLocation.x, eventLocation.y, 1, 1, context.RGBA, context.UNSIGNED_BYTE, pixels);
		alert(pixels);
		});
		
    //var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

    // If transparency on the pixel , array = [0,0,0,0]
    //if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
        // Do something if the pixel is transparent
    //}

   //var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
		
});
