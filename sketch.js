let texts = [];
let text_size = 50;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(text_size);
  textAlign(CENTER, CENTER);
  fill(250);
  stroke(0); // Set outline color to white
  strokeWeight(2);
}

function draw() {
  // Display and move all text elements
  for (let i = 0; i < texts.length; i++) {
    texts[i][1] -= 1; // Move the text element downwards
    text(texts[i][0], texts[i][2], texts[i][1]); // Display text
  }
}

function mouseMoved() {
  // Add a new text element when the mouse moves
  texts.push(["the fall of artificial architectures", mouseY, mouseX]);
}




function mousePressed() {
  // Clear all text elements when the mouse is pressed
  texts = [];
  
    text_color = color(random(255), random(255), random(255));
  fill(text_color);
}