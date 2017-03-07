function Bubble(x, y, diameter) {
  this.col = color(255, 255, 255, 200);
  this.diameter = diameter;
  this.r = diameter / 2;
  this.x = x;
  this.y = y;

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255), random(100, 200));
  };

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < diameter) {
      this.col = color(random(190, 255), 0, random(50, 190), 200);
    }
  };

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, diameter);
  };

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return d < (this.r + other.r);
  };

  // some trivial bounce function. it makes bubbles bounce from each other
  this.bounce = function(other) {
    var speedX = 3;
    var speedY = 3;
    if (this.x - other.x < 0) {
      speedX = -speedX;
    }
    if (this.y - other.y < 0) {
      speedY = -speedY;
    }
    this.x += speedX;
    this.y += speedY;
    other.x -= speedX;
    other.y -= speedY;
  };

  // I made them faster a bit
  this.move = function() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  };
}
