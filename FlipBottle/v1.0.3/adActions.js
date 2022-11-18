var target = document.querySelector('canvas');

target.prototype._getContext = target.prototype.getContext;

target.addEventListener("click",function(){
	target.prototype.getContext = function(contextType, contextAttributes) {
    		console.log('INTERCEPTING: target.prototype.getContext');
    		console.log('PROPERTIES:');
    		console.log('  contextType: ' + contextType);

    		return this._getContext(contextType, contextAttributes);
	}
		
		
});



