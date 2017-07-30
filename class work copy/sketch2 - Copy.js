

var osc;

function setup() {
  createCanvas(720, 800)
  osc = new p5.Oscillator();
  osc.setType('square');
  osc.freq(100);
  osc.amp(0.5);
  osc.start();
}

function draw() {
    background (255);
    var oscFrequency = map(mouseX, 0, displayWidt, 1, 400);
    osc.freq(oscFrequency)


}

