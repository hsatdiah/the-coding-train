// 3.2: The Bouncing Ball
// https://www.youtube.com/watch?v=LO3Awjn_gyU&index=12&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

var x = 51;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);

  if (x > (width - 51) || x < 51) {
    speed = -speed;
  }
  x += speed;
}