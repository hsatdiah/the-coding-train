function _Image(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  this.display = function() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, 24, 24);
  };

  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  };
}
