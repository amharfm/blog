let fr = 10;
let x0, y0;

let col = {
  "brown" : "#834740",
  "white" : "#FFEDD5",
  "blue" : "#0D2960"
};

function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  arra.push(null);
  document.getElementsByTagName('head')[0].appendChild(document.createElement('title')).innerHTML = "batik_1";
  background(col.brown);  
  x0 = 0+2;  y0 = 0+2;
}

let arra = [];
function reset(){
  background(col.brown);
  i = 0;  j = 0;  k = 0;  d = 0;
  e = 0;
  let jadiapa = "";
  x0 = 0+2;  y0 = 0+2;
  arra = [];
  arra.push(null);
}

let i = 0;  let j = 0;  let k = 0;  let d = 0;
let squara = 100;
let jadiapa = "";
function draw() {
  if (i%6==0){
    k=0;
    jadiapa="";
    d=j/5;
    if (x0>width && y0>height){
      //console.log(j, d, 'draws', i, x0, y0);
      reset();
    }
  } else {
    j++;
    if (k<5){
      switch (k){
        case 0:
          jadiapa = ["ygkecilatas"];
          break;
        case 1:
          jadiapa = ["ygkecilbawah"];
          break;
        case 2:
          jadiapa = ["ovalputih"];
          break;
        case 3:
          jadiapa = ["kupat1"];
          break;
        case 4:
          jadiapa = ["kupat2"];
          break;
      }
      if (!arra[d]) arra[d] = [];
      arra[d][k] = jadiapa;
      bikin(arra[d]);
    }      
    k++;
  }
  i++;
}

let e = 0;
function bikin(apa){
  if (apa) {
    let bikinapa = apa[k][0];
    
    switch(bikinapa){
      case "ygkecilatas" :
        stroke(col.blue);
        strokeWeight(5);
        fill(col.white);
        strokeCap(ROUND);
        let st = 20;
        switch (d%4) {
          case 0:
            y0 = y0 + (squara*d%4);
            if (y0>height) {
              y0 = (0)+2;
              x0 = x0 + ((squara*2)+40);
            }            
            e++;
            if (e%2==0) y0=y0+50;
            triangle(x0,y0, x0+st,y0, x0,y0+st);
            triangle(x0,y0, x0-st,y0, x0,y0-st);
            break;
          case 1:
            x0 = x0 + (squara*2);
            triangle(x0+st,y0, x0+st+st,y0, x0+st+st,y0+st);
            triangle(x0-squara+st,y0-squara-32, x0-squara+st+st,y0-squara-32, x0-squara+st,y0-st-squara-32);
            //fill("#ff0000");
            triangle(x0-squara+st,y0+(squara*4)-28, x0-squara+st+st,y0+(squara*4)-28, x0-squara+st,y0-st+(squara*4)-28);
            break;
          case 2:
            y0 = y0 + (squara);
            x0 = x0 - (squara);
            triangle(x0+st,y0, x0+st,y0+st, x0,y0+st);
            triangle(x0,y0+st, x0+st,y0+st, x0+st,y0+st+st);
            break;
          case 3:
            x0 = x0 - squara;
            y0 = y0 +2 + squara;
            triangle(x0,y0+50, x0,y0+50-st, x0+st,y0+50);
            triangle(x0-squara,y0-squara+18, x0-squara-st,y0+18-squara, x0-st-squara,y0-squara+18+st);
            break;
        }
        break;
      case "ovalputih" :
        let tg = 130;
        let lbrl = 75;
        fill(col.white);
        stroke(col.blue);
        strokeWeight(10);
        strokeCap(ROUND);
        switch (d%4) {
          case 0:
            if (y0>height) {
              x0 = x0 + ((squara*2)+20);
            }
            //console.log(y0);
            translate(3+x0, 27+y0);
            rotate(radians(-45));
            ellipse(18, 63, lbrl, tg);
            break;
          case 1 :
            translate(7+x0, y0);
            rotate(radians(+45));
            ellipse(18, 63, lbrl, tg);
            break;
          case 2 :
            translate(3+x0, 27+y0);
            rotate(radians(+45));
            ellipse(18, 63, lbrl, tg);
            break;
          case 3 :
            translate(27+x0+squara, y0-squara/2);
            rotate(radians(-45));
            ellipse(18, 63, lbrl, tg);
            break;            
        }
        break;
        case "kupat1":
          let lbr = 20;
          stroke(col.blue);
          strokeWeight(5);
          fill(col.brown);
          strokeCap(ROUND);
          switch (d%4) {
            case 0:
              rect(35+x0,35+y0,lbr,lbr);
              break;
            case 1:
              //fill("#ff00ff")
              rect(x0-17,y0+30,lbr,lbr);
              rect(x0-50,y0+65,lbr,lbr);
              break;
            case 2:
              rect(x0-35,y0-35,lbr,lbr);
              break;
            case 3:
              rect(45+x0,y0-10,lbr,lbr);
              rect(50+x0+25,y0-45,lbr,lbr);
              rect(50+x0+squara+5,50+y0-squara+5,lbr,lbr);
              //fill("#ff0000");
              rect(50+x0+squara+35,50+35+y0-squara+5,lbr,lbr);
              break;
          }
          break;
        default :
          //console.log(apa[0]);
          break;
    }
  }
}