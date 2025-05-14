let bgColor;
let energy = 0.5;
let rageSound, dreamSound, staticSound;

function preload() {
  soundFormats('mp3');
  rageSound = loadSound('rage.mp3');
  dreamSound = loadSound('dream.mp3');
  staticSound = loadSound('static.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255);

  document.getElementById("submitBtn").addEventListener("click", submitWord);
}

function draw() {
  background(bgColor);
  fill(0, 50);
  noStroke();
  for (let i = 0; i < energy * 100; i++) {
    ellipse(random(width), random(height), random(energy * 20));
  }
}

function submitWord() {
  const word = document.getElementById("wordInput").value.toLowerCase();

  if (word.includes("dream")) {
    bgColor = color(200, 240, 255);
    energy = 0.3;
    if (dreamSound.isLoaded()) dreamSound.play();
  } else if (word.includes("rage")) {
    bgColor = color(255, 50, 50);
    energy = 1.5;
    if (rageSound.isLoaded()) rageSound.play();
  } else if (word.includes("static")) {
    bgColor = color(100);
    energy = 0.8;
    if (staticSound.isLoaded()) staticSound.play();
  } else {
    bgColor = color(230);
    energy = 0.6;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
