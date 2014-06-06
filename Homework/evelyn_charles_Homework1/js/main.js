/*
     Name: Charles Evelyn
     Date: 04 June, 2014
     Class & Section:  WIA-0614
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
window.onload = function(){

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
					
	// Modernizr Test for "Canvas1"
	if(Modernizr.canvas){
		
		var myCanvas = document.getElementById("Canvas1");

			if(myCanvas && myCanvas.getContext){

				var ctx = myCanvas.getContext("2d");

					if(ctx){

						ctx.strokeStyle = "black";
						ctx.fillStyle = "blue";
						ctx.lineWidth = 5;
						ctx.strokeRect(0, 0, 50, 100);
						ctx.fillRect(0, 0, 50, 100);

					} else {
					// Insert a polyfill here
					"Your Browser Does Not Support the HTML5 Canvas Element"
					}
			}
			
	}		

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	// Modernizr Test for "Canvas2"
	if(Modernizr.canvas){
		
		var myCanvas2 = document.getElementById("Canvas2");

			if(myCanvas2 && myCanvas2.getContext){

				var ctx2 = myCanvas2.getContext("2d");
				var ctx2b = myCanvas2.getContext("2d");

					if(ctx2 && ctx2b){

						var degrees = 360;
						var radians = (degrees/180 * Math.PI);

						ctx2.fillStyle = "rgba(255, 0, 0, .5)";
						ctx2.arc(50, 50, 20, 0, radians);
						ctx2.fill();

						ctx2b.stokeStyle = "black";
						ctx2b.lineWidth = 5;
						ctx2b.beginPath();
						ctx2b.arc(50, 50, 30, 0, radians);
						ctx2b.stroke();

					} else {
					// Insert a polyfill here
					"Your Browser Does Not Support the HTML5 Canvas Element"
					}
			}
			
	}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
// Modernizr Test for "Canvas3"
	if(Modernizr.canvas){
		
		var myCanvas = document.getElementById("Canvas3");

			if(myCanvas && myCanvas.getContext){

				var ctx3 = myCanvas.getContext("2d");

					if(ctx3){

						ctx3.strokeStyle = "black";
						ctx3.fillStyle = "yellow";
						ctx3.lineWidth = 5;
						ctx3.beginPath();

						ctx3.moveTo(120, 20);
						ctx3.lineTo(150, 90);
						ctx3.lineTo(220, 90);
						ctx3.lineTo(160, 120);
						ctx3.lineTo(190, 180);
						ctx3.lineTo(125, 130);
						ctx3.lineTo(70, 180);
						ctx3.lineTo(90, 120);
						ctx3.lineTo(40, 90);
						ctx3.lineTo(100, 90);

						ctx3.closePath();
						ctx3.fill();
						ctx3.stroke();

					} else {
					// Insert a polyfill here
					"Your Browser Does Not Support the HTML5 Canvas Element"
					}
			}
			
	}
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

// Modernizr Test for "Canvas4"
	if(Modernizr.canvas){
		
		var myCanvas = document.getElementById("Canvas4");

			if(myCanvas && myCanvas.getContext){

				var ctx4 = myCanvas.getContext("2d");
				var ctx4b = myCanvas.getContext("2d");
				var ctx4c = myCanvas.getContext("2d");
				var ctx4d = myCanvas.getContext("2d");

					if(ctx4 && ctx4b && ctx4c && ctx4d){

						ctx4.strokeStyle = "black";
						ctx4.fillStyle = "purple";
						ctx4.lineWidth = 5;
						ctx4.beginPath();
						ctx4.moveTo(50,120);

						
						//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )		
						ctx4.bezierCurveTo(80,50, 170, 50, 200, 120);
						ctx4.stroke();

						ctx4b.strokeStyle = "black";
						ctx4b.lineWidth = 3;
						ctx4b.beginPath();
						ctx4b.moveTo(51,120);
						ctx4b.bezierCurveTo(45,120, 85, 80, 100, 120);
						ctx4b.stroke();	

						ctx4c.strokeStyle = "black";
						ctx4c.lineWidth = 3;
						ctx4c.beginPath();
						ctx4c.moveTo(101,120);
						ctx4c.bezierCurveTo(95,120, 125, 80, 145, 120);
						ctx4c.stroke();	

						ctx4d.strokeStyle = "black";
						ctx4d.lineWidth = 3;
						ctx4d.beginPath();
						ctx4d.moveTo(145,120);
						ctx4d.bezierCurveTo(145,120, 165, 80, 200, 120);
						ctx4d.stroke();


					} else {
					// Insert a polyfill here
					"Your Browser Does Not Support the HTML5 Canvas Element"
					}
			}
			
	}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	// Modernizr Test for "Canvas5"
	if(Modernizr.canvas){
		
		var myCanvas = document.getElementById("Canvas5");

			if(myCanvas && myCanvas.getContext){

				var ctx5 = myCanvas.getContext("2d");

					if(ctx5){

						var textString = "Canvas Text is FUN!!!";
			
						//Style the font
						ctx5.font = "16pt Helvetica";
						ctx5.fillStyle = "green";
						ctx5.lineWidth = .4;
						ctx5.strokeStyle = "rgba(255, 0, 255, 1)";			
						ctx5.fillText(textString, 25, 80);
						ctx5.strokeText(textString, 25, 80);

					} else {
					// Insert a polyfill here
					"Your Browser Does Not Support the HTML5 Canvas Element"
					}
			}
			
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	// Modernizr Test for "Canvas6"
		if(Modernizr.canvas){
			
			function draw_img(){
				var canvas_img = document.getElementById('Canvas6');
				var canvas_img_ctx = canvas_img.getContext('2d');
				var width = canvas_img.width/2;
				var height = 50;

				put_img = new Image();
				put_img.src = 'image/logo.png';
				put_img.onload = function(){
					canvas_img_ctx.drawImage(put_img,0,0,width,height);
				} 
			};
			draw_img();
			

				
				
		}		

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	// Modernizr Test for "Canvas7"
	if(Modernizr.canvas){
		
		var myCanvas = document.getElementById("Canvas7");

			if(myCanvas && myCanvas.getContext){

				var ctx7 = myCanvas.getContext("2d");
				var ctx7b = myCanvas.getContext("2d");
				var ctx7c = myCanvas.getContext("2d");
				var ctx7d = myCanvas.getContext("2d");

					if(ctx7 && ctx7b && ctx7c){

					var radians=(Math.PI/180)*20;
					ctx7.translate(ctx7.canvas.width/4, ctx7.canvas.height/4);

					for(var degrees=0; degrees<=360; degrees+=20){
							ctx7.beginPath();
							ctx7.moveTo(0,0 ); 
							ctx7.lineTo(50, 0);
							ctx7.stroke();
							ctx7.rotate(radians);
							}

					var degrees = 360;
					var radians2 = (degrees/180)*Math.PI;
						
					ctx7b.beginPath();
					ctx7b.arc(1, 0, 30, 0, radians2);
					ctx7b.fillStyle = "yellow";
					ctx7b.fill();
					ctx7b.stroke();

					
					var textString2 = "Life is Grand!";
			
						//Style the font
						ctx7c.font = "16pt Helvetica";
						ctx7c.fillStyle = "red";
						ctx7c.lineWidth = .4;
						ctx7c.strokeStyle = "rgba(255, 255, 0, 1)";			
						ctx7c.fillText(textString2, 25, 80);
						ctx7c.strokeText(textString2, 25, 80);


					} else {
					// Insert a polyfill here
					"Your Browser Does Not Support the HTML5 Canvas Element"
					}
			}
			
	}		

}


				