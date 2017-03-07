var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    bubbles.push(new Bubble(random(24, width - 24), random(24, height - 24), 48));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
    for (var j = i + 1; j < bubbles.length; j++) { // minor optimization
      if (bubbles[i].intersects(bubbles[j])) {
        bubbles[i].bounce(bubbles[j]); // added bouncing from each other
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }      
    }
  }
}