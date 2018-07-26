Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}