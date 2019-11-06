let x, y, x1, y1;
let u = 5; //interval unit. Even numbers (?)
let i=0, o=0, r=0, cur=0;
let arra = [];
let selisih = 5;
let fr = 29.97;
let mod_width;

function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  stroke("#479E70");
  reset();
  document.getElementsByTagName('head')[0].appendChild(document.createElement('title')).innerHTML = "sketch_1";
  background("#eaeaea");
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

function yupDraw(cur){
  //console.log(arra[cur])
  for (var l=0; l<arra.length; l++){
    line(arra[l][0], arra[l][1], arra[l][2], arra[l][3]); 
  }
}