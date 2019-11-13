let x, y, x1, y1;
let u = 5; //interval unit. Even numbers (?)
let i=0, o=0, r=0, cur=0;
let arra = [];
let selisih = 5;
let fr = 29.97;
let mod_width;
let song;
let button;

function preload(){
  song = loadSound('gymnopedie.mp3');
}

function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  stroke("#fff");
  reset();
  document.getElementsByTagName('head')[0].appendChild(document.createElement('title')).innerHTML = "sketch_1";
  background("#eaeaea");
  //
  button = createButton('♫');
    button.position(width/2-15, height/2-10);
    button.mousePressed(function(){
      //var gym = document.createElement('script');
      //    gym.src = "libraries/gymnopedie.js";
      //document.head.appendChild(gym);
      
      if (song.isPlaying()) {
        song.stop()
      } else {
        song.play();
      }
    });
}

function reset(){
  background("#eaeaea");
  i=0, o=0, r=0, cur=0;
  arra = [];
  x = 0;  y = 0;
  x1 = x;  y1 = y;
  mod_width = width;
  arra.push([x, y, x1, y1]);
}

function draw() {
  i = i+(u);
  cur = arra.length-1;
  if (mod_width==0){ reset(); }
  else {
    if (i%mod_width==0){
      o = 0;
      i = 0;
      if (r<4-1) { r++; } else { r=0; }
      mod_width = mod_width-u;
    } else {
      let mod_u = u*cur;
      switch (r){
        case 0: 
          arra[cur][2] = arra[cur][2] + (u);
          break;
        case 1:
          arra[cur][3] = arra[cur][3] + (u);
          break;
        case 2:       
          arra[cur][2] = arra[cur][2] - (u);
          break;
        case 3:       
          arra[cur][3] = arra[cur][3] - (u);
          break;
      }
      yupDraw(cur);
      o++;
    }
  }
  arra[cur+1] = [arra[cur][2], arra[cur][3], arra[cur][2], arra[cur][3]];
}

let i_ = 0;
let stat_b = false;
function yupDraw(cur){
  //if (song.isPlaying()){
    var r = floor(arra[cur][0]/255 * 100);
    var g = floor(arra[cur][1]/255 * 100);    
    if (cur%255==0){
      if (!stat_b) stat_b = true;
        else stat_b = false;
    }    
    if (stat_b) i_++; else i_--;    
    var b = i_;
    
    background(r,g,b);
  //};
  for (var l=0; l<arra.length; l++){
    line(arra[l][0], arra[l][1], arra[l][2], arra[l][3]); 
  }
}