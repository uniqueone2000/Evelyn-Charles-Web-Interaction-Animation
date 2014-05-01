window.onload = function(){

	// Utilization of EaselJs Text properties
	var theCanvas = document.getElementById("logo-canvas");

	var stage = new createjs.Stage(theCanvas);

	var logoText0 = new createjs.Text("U n i q u e O n e", "normal 3.438em bodyFont", "#FFF");
	var logoText1 = new createjs.Text("2  0  0  0", "bold 3.125em bodyFont", "#FCEE21");
	var logoText2 = new createjs.Text(".N  E  T", "bold 3.750em bodyFont", "#FFF");

	logoText0.x = 2;

	logoText0.y = -12;

	logoText1.x = 70;

	logoText1.y = 45;

	logoText2.x = 75;

	logoText2.y = 95;

	stage.addChild(logoText0, logoText1, logoText2);
	stage.update();


}