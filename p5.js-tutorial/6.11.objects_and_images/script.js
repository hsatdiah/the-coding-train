var imgs = [];
var icons = [];

function preload() {
  for (var i = 0; i < 3; i++)
    icons[i] = loadImage('images/icon' + i + '.png');
}

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  var r = floor(random(0, icons.length));
  var im = new _Image(mouseX, mouseY, icons[r]);
  imgs.push(im);
}

function draw() {
  background(0);

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].display();
    imgs[i].move();
  }
}
