/*
     Name: Charles Evelyn
     Date: 3 Apr, 2014
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

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
window.onload = function(){
	var cnv1 = document.getElementById("myCanvas1");

	if(cnv1 && cnv1.getContext){
		var ctx = cnv1.getContext("2d");

		if(ctx){
			ctx.strokeSytle = "#000";
			ctx.fillStyle = "blue"
			ctx.lineWidth = 5;

			ctx.strokeRect(0, 0, 50, 100);
			ctx.fillRect(0, 0, 50, 100);
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
	var cnv2 = document.getElementById("myCanvas2");

	if(cnv2 && cnv2.getContext){
		var ctx2 = cnv2.getContext("2d");
		var ctx2b = cnv2.getContext("2d");


		if(ctx2 && ctx2b){
			ctx2.strokeSytle = "#000";
			ctx2.fillStyle = "rgba(255, 0, 0, .5)";
			ctx2.lineWidth = 5;

			ctx2b.strokeSytle = "#000";
			ctx2b.fillStyle = "rgba(255, 0, 0, .5)";
			ctx2b.lineWidth = 5;

			var degrees = 360;
			var radians = (degrees/180 * Math.PI);

			ctx2.beginPath();
			ctx2.arc(50, 50, 20, 0, radians);
			ctx2.fill();
			ctx2.stroke();

			ctx2b.beginPath();
			ctx2b.arc(50, 50, 30, 0, radians);

			ctx2.stroke();
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
	var cnv3 = document.getElementById("myCanvas3");

	if(cnv3 && cnv3.getContext){
		var ctx3 = cnv3.getContext("2d");

		if(ctx3){
			ctx3.strokeSytle = "green";
			ctx3.fillStyle = "#0F0";
			ctx3.lineWidth = 3;

			ctx3.beginPath();
			ctx3.moveTo(100, 100);
			ctx3.lineTo(120, 40);
			ctx3.lineTo(140, 100);
			ctx3.lineTo(190, 100);
			ctx3.lineTo(150, 130);
			ctx3.lineTo(170, 180);
			ctx3.lineTo(120, 140);
			ctx3.lineTo(80, 180);
			ctx3.lineTo(95, 130);
			ctx3.lineTo(60, 100);
			ctx3.closePath();
			ctx3.fill();
			ctx3.stroke();

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
	var cnv4 = document.getElementById("myCanvas4");

	if(cnv4 && cnv4.getContext){
		var ctx4 = cnv4.getContext("2d");
		var	ctx5 = cnv4.getContext("2d");
		var ctx6 = cnv4.getContext("2d");
		var ctx7 = cnv4.getContext("2d");

		if(ctx4 && ctx5 && ctx6 && ctx7){
			ctx4.strokeSytle = "green";
			ctx4.fillStyle = "#228B22";
			ctx4.lineWidth = 3;
			

			ctx5.strokeSytle = "green";
			ctx5.fillStyle = "#228B22";
			ctx5.lineWidth = 3;

			ctx6.strokeSytle = "green";
			ctx6.fillStyle = "#228B22";
			ctx6.lineWidth = 3;

			ctx7.strokeSytle = "green";
			ctx7.fillStyle = "#228B22";
			ctx7.lineWidth = 3;

			ctx4.beginPath();
			ctx4.arc(125, 120, 80, 2 * Math.PI, 1 * Math.PI, true);

			ctx4.stroke();

			ctx5.beginPath();
			ctx5.moveTo(46, 120);
			ctx5.bezierCurveTo(67, 95, 78, 95, 98, 120);

			ctx5.stroke();

			ctx6.beginPath();
			ctx6.moveTo(98, 120);
			ctx6.bezierCurveTo(108, 95, 138, 95, 148, 120);

			ctx6.stroke();

			ctx7.beginPath();
			ctx7.moveTo(148, 120);
			ctx7.bezierCurveTo(165, 95, 198, 95, 205, 120);

			ctx7.stroke();
		
			}
		}


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var cnv5 = document.getElementById("myCanvas5");

		if(cnv5 && cnv5.getContext){
			var ctx8 = cnv5.getContext("2d");
			
			if(ctx8){
				var myString = 
				"Many videos to watch here";

			ctx8.font = "15pt Arial" ;
			ctx8.fillStyle = "#A90329";
			ctx8.fillText(myString, 5, 100);
			
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
	var cnv6 = document.getElementById("myCanvas6");

		if(cnv6 && cnv6.getContext){
			var ctx9 = cnv6.getContext("2d");

			if(ctx9){

				var srcImg = document.getElementById("theImage");
				//console.log(srcImg);

				//ctx9.drawImage(srcImg, 0, 0);

				// ctx9.drawImage(srcImg, 5, 5, 150, 180);

				ctx9.drawImage(srcImg, 200, 200, 10, 20, 100, 100, 50, 50);
			}
		}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	var cnv7 = document.getElementById("myCanvas7");

		if(cnv6 && cnv6.getContext){
			var ctx10 = cnv7.getContext("2d");
			var ctx10b = cnv7.getContext("2d");
			var ctx11 = cnv7.getContext("2d");
			var ctx11b = cnv7.getContext("2d");
			var ctx12 = cnv7.getContext("2d");
			var ctx12b = cnv7.getContext("2d");
			var ctx12c = cnv7.getContext("2d");
			var ctx13 = cnv7.getContext("2d");
			var ctx14 = cnv7.getContext("2d");
			var ctx15 = cnv7.getContext("2d");
			var ctx16 = cnv7.getContext("2d");
		

			if(ctx10 && ctx10b && ctx11 && ctx11b && ctx12 
				&& ctx12b && ctx12c && ctx13 && ctx14 && ctx15 && ctx16){
				
				ctx10.strokeSytle = "#000";
				ctx10.lineWidth = 3;

				ctx10b.strokeSytle = "#000"
				ctx10b.fillStyle = "#228B22";
				ctx10b.lineWidth = 1;

				ctx11.strokeSytle = "green";
				ctx11.fillStyle = "#228B22";
				ctx11.lineWidth = 3;

				ctx11b.strokeSytle = "green";
				ctx11b.fillStyle = "#228B22";
				ctx11b.lineWidth = 1;

				ctx12.strokeSytle = "#000";
				ctx12.fillStyle = "#228B22";
				ctx12.lineWidth = 3;

				ctx12b.strokeSytle = "#000";
				ctx12b.fillStyle = "#228B22";
				ctx12b.lineWidth = 3;

				ctx12c.strokeSytle = "#000";
				ctx12c.fillStyle = "#228B22";
				ctx12c.lineWidth = 3;

				ctx13.strokeSytle = "green";
				ctx13.fillStyle = "#8B7765";
				ctx13.lineWidth = 3;

				// Mountains
				ctx13.beginPath();
				ctx13.moveTo(0, 90);
				ctx13.bezierCurveTo(60, 115, 90, 25, 250, 90);
				ctx13.fill();
				//ctx13.stroke();

				var myString2 = "Wheelie!!!";
				ctx14.font = "15pt Arial" ;
				ctx14.fillStyle = "#A90329";
				ctx14.fillText(myString2, 125, 30);

				var degrees = 360;
				var radians = (degrees/180 * Math.PI);

				// Wheels
				ctx10.beginPath();
				ctx10.arc(50, 170, 20, 0, radians);
				ctx10.stroke();

				ctx10b.beginPath();
				ctx10b.arc(50, 170, 13, 0, radians);
				ctx10b.stroke();
				ctx10b.fill();

				ctx11.beginPath();
				ctx11.arc(137, 110, 20, 0, radians);
				ctx11.stroke();

				ctx11b.beginPath();
				ctx11b.arc(137, 110, 13, 0, radians);
				ctx11b.stroke();
				ctx11b.fill();

				// Frame and forks
				ctx12.beginPath();
				ctx12.moveTo(55, 140);
				ctx12.lineTo(85, 160);
				ctx12.lineTo(113, 137);
				ctx12.lineTo(105, 97);

				ctx12.closePath();
				ctx12.stroke();

				ctx12b.beginPath();
				ctx12b.moveTo(68, 150);
				ctx12b.lineTo(50, 170);
				ctx12b.stroke();

				ctx12c.beginPath();
				ctx12c.moveTo(107, 112);
				ctx12c.lineTo(138, 110);
				ctx12c.stroke();

				/*
				ctx15.strokeSytle = "green";
				ctx15.fillStyle = "#228B22";
				ctx15.lineWidth = 3;

				ctx16.strokeSytle = "green";
				ctx16.fillStyle = "#228B22";
				ctx16.lineWidth = 3;
				*/
				

				

			}

	}




