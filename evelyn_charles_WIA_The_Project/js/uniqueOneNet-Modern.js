// Loads the appropriate js file on a case by case basis

Modernizr.load({

	test: Modernizr.canvas,

	yep: "js/uniqueOneNet-Easel.js",

	nope: "",

	complete: function(){
		console.log("the test for HTML5 canvas is complete");
	}
})