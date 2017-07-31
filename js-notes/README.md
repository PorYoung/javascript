# js-notes
It is used to record my notes while learning javascript

#Is there a way for properties refer to other properties of the same object whice is still being declared?
By using constructing function;
var o = new(function(){
		this.x = 1;
		this.y = this.x + 1;
		this.z = this.y + 1;
	})()
，，，OR，，，
function constructor(){
	this.x = 1;
	this.y = this.x + 1;
	this.z = this.y + 1;
}
var o = new constructor();