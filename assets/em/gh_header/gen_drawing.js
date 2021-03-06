/*
* @name Drawing
* @description Generative painting program.
*/

// All the paths
let paths = [];
// Are we painting?
let painting = false;
// How long until the next circle
let next = 0;
// Where are we now and where were we?
let current;
let previous;
let font;

let title = false;
function setup() {
  createCanvas(displayWidth, 318);
  current = createVector(0,0);
  previous = createVector(0,0);
  font = loadFont('MazzardSoftM-Light.otf');
};

function draw() {
  background("#404040");
  
  // If it's time for a new point
  if (millis() > next && painting) {

    // Grab mouse position      
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    let force = p5.Vector.sub(current, previous);
    force.mult(0.05);

    // Add new particle
    paths[paths.length - 1].add(current, force);
    
    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  // Draw all paths
  for( let i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
	
    textFont(font);
    textSize(32);
      textAlign(LEFT, LEFT);
      fill("#81E1B9");
      strokeWeight(1);
      text('Ruang Angkasa #3', 35, 70);
    textSize(24);
      textAlign(LEFT, LEFT);
      fill("#fff");
      noStroke();
      text('Sofa Kontemplasi', 35, 100);
	
	mouseoverr();
}

function mouseoverr(){
	if (mouseY>=50 && mouseY <= 100 && mouseX >= 35 && mouseX <=306){
		cursor('pointer')
	} else {
		cursor('')
	}
}

// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
	
	if (mouseY>=50 && mouseY <= 100 && mouseX >= 35 && mouseX <=306){
		window.open(window.location.origin+"/blog/", '_parent')
	}
}

// Stop
function mouseReleased() {
  painting = false;
}

// A Path is a list of particles
class Path {
  constructor() {
    this.particles = [];
    this.hue = random(100);
  }

  add(position, force) {
    // Add a new particle with a position, force, and hue
    this.particles.push(new Particle(position, force, this.hue));
  }
  
  // Display plath
  update() {  
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }  
  
  // Display plath
  display() {    
    // Loop through backwards
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // If we shold remove it
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      // Otherwise, display it
      } else {
        this.particles[i].display(this.particles[i+1]);
      }
    }
  
  }  
}

// Particles along the path
class Particle {
  constructor(position, force, hue) {
    this.position = createVector(position.x, position.y);
    this.velocity = createVector(force.x, force.y);
    this.drag = 0.95;
    this.lifespan = 255;
  }

  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
    // Fade it out
    this.lifespan--;
  }

  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {
    stroke(150, this.lifespan);
    fill(255, this.lifespan/2);    
    ellipse(this.position.x,this.position.y, 8, 8);    
    // If we need to draw a line
    if (other) {
      line(this.position.x, this.position.y, other.position.x, other.position.y);
    }
  }
}