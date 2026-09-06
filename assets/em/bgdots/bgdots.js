let all = [];
function setup() {
  createCanvas(400,400);
  frameRate(15);
  
  for (let i=0; i<20; i++){
    all.push(new Dots(i));
  }
}

class Dots{
  constructor(i){
    var u = 25;
    this.y = i*u;
    this.n = 0;
    this.w = 5;
    this.x = 0;
    this.x_ = function(i){
      this.x = i*u +this.n  -u*this.x3;
      return this.x;
    }
    this.x3 = 0;
    this.a = 1;
    this.g = 0;
  }
  
  drawn(){
    fill("white");
    noStroke();
    
    var u = 25;
    this.n+=this.a;
    //this.g = sin(this.n);
    for (let i=-1; i<1+width/u; i++){
      //fill(random(["gray", "white", "#FFE92B"]));
      ellipse(this.x_(i), this.y, this.w,this.w);
    }
    
    if (this.n%u==0){
      this.x3++;
      //this.x2 -= u;
    } else {
    
    }
  }
}


function draw() {
  background("#FFE92B");
  
  all.forEach(function(d){
    d.drawn();
  });
}

function mousePressed(){
  //all.forEach(function(d){
  //  d.a++;
  //});
}