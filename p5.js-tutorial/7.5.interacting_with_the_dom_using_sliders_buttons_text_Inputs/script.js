var h1, cnv, slider, button;
function setup() {
  h1 = createElement('h1', 'P5 DOM Interactions');
  cnv = createCanvas(200, 200)
    .style('display', 'block')
    .style('margin', '10px');
  
  slider = createSlider(0, width, width / 2)
    .style('width', String(width) + 'px')
    .style('display', 'block')
    .style('margin', '10px');

  button = createButton('add .js')
    .mousePressed(function() {
      h1.html('P5.js DOM Interactions');
    })
    .style('display', 'block')
    .style('margin-left', '10px')
    .style('padding', '10px');
}

function draw() {
  cnv.background(0);
  noStroke(); fill(255,128,171);
  ellipse(width / 2, height / 2, slider.value());
  fill(255);
  text(slider.value(), 3, 13);
}