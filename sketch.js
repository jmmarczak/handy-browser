function setup() {
  createCanvas(windowWidth, windowHeight);
  background(235, 35, 223);
}

function draw() {
  noStroke()
  circle(mouseX, mouseY, mouseY / 3);

}