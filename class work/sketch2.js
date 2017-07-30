
var x1a, y1a, x2a, y2a, x3a, y3a;
var x1b, y1b, x2b, y2b, x3b, y3b;
var inc = 0;

function setup() {
  createCanvas(720, 800)
  x1a = 30;
  y1a = 50;
  x2a = 40;
  y2a = 55;
  x3a = 60;
  y3a = 80;

  x1b = random(50, displayHeight );
  y1b = random(200, displayHeight );
  x2b = random(100, displayHeight );
  y2b = random(300, displayHeight  );
  x3b = random(100, displayHeight );
  y3b = random( 300, displayHeight ); 
}

function draw() {
	background (255);
		if (mouseIsPressed) {
		x1b = random(0, displayHeight);
		y1b = random(200, displayHeight );
		x2b = random(100, displayHeight );
	  	y2b = random(300, displayHeight  );
	  	x3b = random(100, displayHeight );
	  	y3b = random( 300, displayHeight ); 

	  	inc = 0;
 		}
  	x1a = lerp(x1a, x1b, inc/100);
  	y1a = lerp(y1a, y1b, inc/100);
  	x2a = lerp(x2a, x2b, inc/100);
  	y2a = lerp(y2a, y2b, inc/100);
  	x3a = lerp(x3a, x3b, inc/100);
  	y3a = lerp(y3a, y3b, inc/100);

  	noStroke()
  	fill( 255, 0, 0, 40);
	triangle (x1a, y1a, x2a, y2a, x3a, y3a);
	fill( 0, 0, 255, 40);
	triangle (x1a +200, y1a+500, x2a, y2a, x3a, y3a);
	fill( 0, 255, 0, 50);
	triangle (x1a, y1a, x2a, y2a, x3a+200, y3a+500);
	fill( 0, 0, 255, 50);
	ellipse(x1a+80, y1a+80, x2a, y2a, x3a, y3a);
	fill( 0, 255, 0, 50);
	ellipse(x1a+100, y1a+30, x2a, y2a, x3a, y3a);
	
	inc = (inc = 1)%100;
}