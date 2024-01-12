let position;
let speed;
let radius;
let sound;
let angle;

function preload() {
  sound = loadSound('drop.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(100, 50);
  speed = createVector(6, 6);
  radius = 80;
  angle = random(TWO_PI);
 
}

function draw() {
  background('#bbc4bc');
  noStroke();
  fill('#4e524f');
  circle(position.x, position.y, radius);

  position.add(speed);

  if (position.x > windowWidth - radius || position.x < radius) {
    speed.x = speed.x * -1;
    speed.rotate(angle);
    playSound();
  }

  if (position.y > windowHeight - radius || position.y < radius) {
    speed.y = speed.y * -1;
    speed.rotate(angle);
    playSound();
  }

  position.x = constrain(position.x, radius, windowWidth - radius);
  position.y = constrain(position.y, radius, windowHeight - radius);
}


function playSound() {
  if (sound.isLoaded()) {
    sound.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
