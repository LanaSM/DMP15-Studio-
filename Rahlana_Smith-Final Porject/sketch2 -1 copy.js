
var arc1;
var arcS= [];
var img;
var timer= 0;


function setup() {
  createCanvas(800, 800)

  for (var i=0; i < 10; i++){
    arcS.push(new MyTriangle())
    img = loadImage("logo.gif");  

  }
  //push method for array
}

function draw() {
	background (255);
  for (var i=0; i<arcS.length; i++){
    arcS[i].update();
    arcS[i].draw();
     image(img, 0 , 200); 
    tint(255, timer); 
 
  }


}

var MyTriangle = function (){

    this.x1a = 30; 
    this.y1a = 50; 
    this.x2a = 40; 
    this.y2a = 55; 
    this.x3a = 60; 
    this.y3a = 80;

    this.x1b = (50, displayHeight); 
    this.y1b = (150, displayHeight); 
    this.x2b = random(100, displayHeight); 
    this.y2b = random(300, displayHeight); 
    this.x3b = random(100, displayHeight); 
    this.y3b = random(300, displayHeight);

    this.inc = 0;

    this.myColor = color(random(255), random(255), random(255), 40);

}

MyTriangle.prototype.update = function() {
  if (mouseIsPressed) {
    this.x1b = random(0, displayHeight);
    this.y1b = random(200, displayHeight);
    this.x2b = random(100, displayHeight);
    this.y2b = random(300, displayHeight);
    this.x3b = random(100, displayHeight);
    this.y3b = random(300, displayHeight); 

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
   
    arc(this.x1a, this.y1a, 200, 200, this.x3a, this.y3a); 
      timer = timer + 0.01;
    

    for (var i=0; i<10; i=i+1) {
  
      fill(0,40,255,30);
      ellipse(i * 80,random(800),30,12);
      fill(100,150,0,30);
    ellipse(random(800),i * 80,30,12);
    if (timer > 180){

        timer= 130;
      }
  
 
  }
}

