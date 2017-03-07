var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 50; i++){
    bubbles.push(new Bubble(random(12, width - 12), random(12, height - 12), 24));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}
