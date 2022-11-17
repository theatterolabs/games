var target = document.querySelector('canvas');
// the canvas we'll use to read the target on
var reader = document.createElement('canvas');
var ctx = reader.getContext('2d');

target.addEventListener("click",function(e){
	//var eventLocation = getEventLocation(this,e);
	 var x = e.clientX - target.offsetLeft;
 	 var y = e.clientY - target.offsetTop;
		ctx.flush();
	
	requestAnimationFrame(function() {
	 ctx.drawImage(target, -x, -y); 
    	var pixels = ctx.getImageData(0, 0, 1, 1);
    	console.log(pixels);
		});
		
});
