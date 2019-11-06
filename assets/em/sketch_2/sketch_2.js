let i = 0;
let fr = 15;
let arra = [];
let img1, img2;
let button;
let id_arr = 0;
let scenes;

function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  
  var xmlhttp = new XMLHttpRequest();  
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        scenes = JSON.parse(this.responseText).s;
        //console.log(scenes);
        
        guideline();
  
        button = createButton('write');
        button.position(100, 25);
        button.mousePressed(yupDraw);
        reset();
    }
  };
  xmlhttp.open("GET", "./record.json", true);
  xmlhttp.send();  
  document.getElementsByTagName('head')[0].appendChild(document.createElement('title')).innerHTML = "better choice";
}

function reset(){
  i=0;
  arra = [];
}

let drawing = false;
let i_ = 0;
function draw (){
  if (!drawing){
    i_ = 0;
  } else {  
    i++;
    i_++;
    if (scenes[i_]) line(scenes[i_].x1, scenes[i_].y1, scenes[i_].x2, scenes[i_].y2)
  }
}

function guideline(){
  let img1 = loadImage('./3058183665_178ac3b404_b.jpg', img1 => {
    //https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjC8pqjwNDlAhWM6XMBHTJkANcQjhx6BAgBEAI&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fdawgbyte77%2F3058183665&psig=AOvVaw0igpoxnQq3Wwp5oHs0OBwF&ust=1572955032388546
    image(img1, 0, 0);
    loadImage('./teachr.png', img2 => {
      image(img2, 40, 95);
    });
  });
}


function mousePressed(){
  //console.log(mouseX, mouseY, pmouseX,pmouseY);
  strokeWeight(1.5);
  line(mouseX,mouseY, pmouseX,pmouseY);
  if (!arra[id_arr]) arra[id_arr] = {}; 
  arra[id_arr] = {
    x1:mouseX
    ,y1:mouseY
    ,x2:pmouseX
    ,y2:pmouseY
  };
  id_arr++;
}

function mouseDragged(){
  //console.log(mouseX, mouseY, pmouseX,pmouseY);
  strokeWeight(1.5);
  line(mouseX,mouseY, pmouseX,pmouseY);
  if (!arra[id_arr]) arra[id_arr] = {};
  arra[id_arr] = {
    x1:mouseX
    ,y1:mouseY
    ,x2:pmouseX
    ,y2:pmouseY
  };
  id_arr++;
}

function yupDraw(){
   if (drawing) drawing = false;
     else drawing = true;
}