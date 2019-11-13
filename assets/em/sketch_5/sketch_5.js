let cnv; 
let linez;

let img,hand,wail,point;
function preload() {
  img = loadImage('head.png');
  hand = loadImage('left.png');
  wail = loadImage('wailord.png');
  point = loadImage('point.png');
}

let point_;
function setup() {
  cnv = createCanvas(313,313);
  bikinBg(width/2,height/2);
  
  stroke("#EEC6B9");
  strokeWeight(70);
  image(hand, width/30, height*3/7);  
  linez = line(width/2,height/2,width/2,height+30);
  image(img, calcW(mouseX), calcH(mouseY));
  image(wail, 0, height-80);
  push();
    scale(0.5,0.5);
    image(point, width*1.5, height*1.5);
  pop();
  bikinLaut();
}

function calcW(x,what){
  var varianX = 0;
  switch (what){
    default:
      var res = width/2;
      if (x){ res = mouseX; }
      res = res - 105;
      return res;
      break;
    case "hand":
      var res = width/9;
        varianX = -mouseX*0.09;
        res = mouseX-130+varianX;
      return res;
      break;
    case "wail":
      var res = mouseX;
      if (mouseX<width/2) res = res-120; else res = res-70;
      return res;
      break;
  }
}

function calcH(y,what){
  var varianY = 0;
  switch (what){
    default:
      var res = height/2;
      if (y){
        res = mouseY;
        res = res-15;
      }
      res = res-110;
      return res;
      break;
    case "hand":
      var res = height*3/7;
        res = mouseY;
        varianY = -mouseY*0.17;
        res = res-50+(varianY);
      return res;
      break;
    case "wail":
      var res = height-80;
      if (mouseY<height/2){
        varianY = mouseY*0.09;
      } else {
        varianY = mouseY*0.14;
      }
      return res +varianY;
      break;
  }
}

let yaha = 250;
let y_ = 80;
let oRadius = 200;
let bulanId = 0;
let langit = ["#23293F", "#A9F1FA"];
function bikinBg(a,b){
  background(langit[bulanId]);
  noStroke();
  ellipseMode(RADIUS);
  fill("#FFF067");
  yaha = yaha+0.25;
  ellipse(a+oRadius*cos(radians(yaha)),200+b+oRadius*sin(radians(yaha)), 50,50);
  //console.log(yaha)
  if (yaha>400){
    yaha = 170;
    bulanId++;    
    harike++;
    if (bulanId>=langit.length) bulanId = 0;
  }

};

function bikinLaut(){
  push();
    stroke('rgba(26,115,223,0.75)');
    strokeWeight(20);
    line(0,height, width,height);
  pop();
}

let harike = 1;
function draw() {
  stroke("#EEC6B9");
  strokeWeight(70);
  
  //stroke("#1A73DF");
}

let counter = -130;
let warnaAwan = ["rgba(40,40,40,0.95)", "rgba(240,240,240,0.8)"];
let warna_id = 0;
function bikinAwan(){
  push();
    fill(warnaAwan[warna_id]);
    translate(counter, 60);
    noStroke();
    ellipse(0,100,30);
    ellipse(-20,120,40);
    ellipse(0,135,70,30);
    ellipse(30,115,30);
    if (counter>width+135){
      counter=-130;
      warna_id++;
      if (warna_id>=warnaAwan.length) warna_id=0;
    }
    counter++;
  pop();
}

let varian;
function mouseDragged(){
  //console.clear();
  bikinBg(width/2,height/2);
  
  stroke("#EEC6B9");
  strokeWeight(70);
  noFill();
  if (mouseX<width/2) varian = mouseY; else varian = -mouseY;
  image(hand, calcW(mouseX, "hand"), calcH(mouseY, "hand"));
  linez = bezier(mouseX,mouseY,mouseX+(varian/2),mouseY, width/2,height,width/2,height+30)  
  image(img, calcW(mouseX), calcH(mouseY));
  
  bikinAwan();
  
  if (mouseX<width/2){
    push();
      scale(1,1);
      image(wail, calcW(mouseX, "wail"), calcH(mouseY, "wail"));
    pop();
  } else {
    push();
      translate(wail.width,0);
      scale(-1,1);
      image(wail, -mouseX,calcH(mouseY, "wail"));
    pop();
  }  
  
  bikinLaut();
  
  bikinHari();
}

function bikinHari(){
  stroke("#eaeaea");
  strokeWeight(1);
  fill('#eaeaea');
  textSize(32);
  text(harike, width-30,30);
}