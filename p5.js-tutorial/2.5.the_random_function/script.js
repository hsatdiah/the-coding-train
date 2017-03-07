var p = {
  x: 0,
  y: 0,
};
var col = {
  r: 0,
  g: 0,
  b: 0,
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  // ellipse
  col.r = random(100, 255);
  col.g = 0;
  col.g = random(100, 190);
  p.x = random(0, width);
  p.y = random(0, height);
  noStroke();
  fill(col.r, col.b, col.g, 100);
  ellipse(p.x, p.y, 24, 24);
}
