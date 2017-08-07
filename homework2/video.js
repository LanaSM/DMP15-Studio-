var video;



function setup() {
  createCanvas(800, 800);
  video = createCapture(VIDEO);
  video.size(800, 800);
  video.loop();
  video.hide();

  // video.hide();

}

function draw() {
background(0);
  noStroke();
  fill(random(100), 100,random(200));
 video.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - video.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      rect(x, y, radius, radius);
    }
  }
}