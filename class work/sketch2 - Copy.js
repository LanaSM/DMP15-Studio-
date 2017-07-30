
var triangle1;

var triangleS= [];

function setup() {
  createCanvas(720, 800)

  for (var i=0; i < 50; i++){
    triangleS.push(new MyTriangle())
  }
  //push method for array
}

function draw() {
	background (255);
  for (var i=0; i<triangleS.length; i++){
    triangleS[i].update();
    triangleS[i].draw();
  }


}

var MyTriangle = function (){

    this.x1a = 30; 
    this.y1a = 50; 
    this.x2a = 40; 
    this.y2a = 55; 
    this.x3a = 60; 
    this.y3a = 80;

    this.x1b = random(50, displayHeight); 
    this.y1b = random(200, displayHeight); 
    this.x2b = random(100, displayHeight); 
    this.y2b = random(300, displayHeight); 
    this.x3b = random(100, displayHeight); 
    this.y3b = random(300, displayHeight);

    this.inc = 0;

    this.myColor = color(random(255), random(255), random(255));

}

MyTriangle.prototype.update = function() {
  if (mouseIsPressed) {
    this.x1b = random(0, displayHeight);
    this.y1b = random(200, displayHeight);
    this.x2b = random(100, displayHeight);
    this.y2b = random(300, displayHeight);
    this.x3b = random(100, displayHeight);
    this.y3b = random( 300, displayHeight); 

    this.inc = 0;
    }


    this.x1a = lerp(this.x1a, this.x1b, this.inc/100);
    this.y1a = lerp(this.y1a, this.y1b, this.inc/100);
    this.x2a = lerp(this.x2a, this.x2b, this.inc/100);
    this.y2a = lerp(this.y2a, this.y2b, this.inc/100);
    this.x3a = lerp(this.x3a, this.x3b, this.inc/100);
    this.y3a = lerp(this.y3a, this.y3b, this.inc/100);

    this.inc = (this.inc = 1)%100;
}

MyTriangle.prototype.draw = function(){
    noStroke()
    fill(this.myColor);
    triangle (this.x1a, this.y1a, this.x2a, this.y2a, this.x3a, this.y3a);
}