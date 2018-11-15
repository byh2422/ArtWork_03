var rains = new Array();

function setup() {
  createCanvas(350,300);
  noStroke();
}

function draw(){
  background(210,235,245);
  
  //1st People
  for(var j=0;j<4;j++){
    for(var i=0;i<13;i++){
      fill(0,0,0);
      ellipse(10+i*24,10+j*40,3,3);
      rect(8.5+i*24,11.5+j*40,3,6);
      ellipse(10+i*24,18+j*40,2,2);
    }
  }
  for(var j=0;j<4;j++){
    for(var i=0;i<13;i++){
      fill(0,0,0);
      ellipse(22+i*24,30+j*40,3,3);
      rect(20.5+i*24,31.5+j*40,3,6);
      ellipse(22+i*24,38+j*40,2,2);
    }
  }
  
  //brown wall
  fill(240,225,190);
  rect(0,height-120,width-50,height);
  
  //gray wall
  fill(160,160,160);
  rect(0,height-115,15,30);
  rect(15,height-135,95,40);
  rect(110,height-115,60,30);
  rect(170,height-135,130,40);
  
  //red ceilling
  fill(150,10,10);
  rect(0,height-120,15,30);
  rect(15,height-140,95,40);
  rect(110,height-120,60,30);
  rect(170,height-140,130,40);
  
  //triangle part
  fill(160,160,160);
  triangle(35,height-100, 62,height-115,90,height-100);
  fill(240,225,190);
  triangle(35,height-95, 62,height-110,90,height-95);
  fill(170,170,170);
  ellipse(63,height-100,10,10);
  fill(225,225,225);
  ellipse(64,height-98,8,8);
  
  //Chimney
  fill(240,225,190);
  rect(15,height-160,10,30);
  rect(100,height-150,10,40);
  fill(140,125,90);
  rect(20,height-160,5,30);
  rect(105,height-150,5,40);
  
  //windows
  for(var i=0;i<2;i++){
    fill(150,150,150);
    rect(0,height-75+i*50,5,30);
    fill(165,220,185);
    rect(0,height-73+i*50,3,30);
    fill(255,255,255);
    rect(0,height-45+i*50,5,5);
    rect(0,height-65+i*50,4,2);
  }
  
  for(var j=0;j<2;j++){
    for(var i=0;i<3;i++){
      fill(150,150,150);
      rect(25+i*30,height-85+j*50,15,30);
      fill(165,220,185);
      rect(27+i*30,height-83+j*50,13,30);
      fill(255,255,255);
      rect(25+i*30,height-55+j*50,15,5);
      rect(31+i*30,height-85+j*50,2,30);
      rect(26+i*30,height-75+j*50,14,2);
    }
  }
  for(var j=0;j<2;j++){
    for(var i=0;i<2;i++){
      fill(150,150,150);
      rect(120+i*35,height-75+j*50,15,30);
      fill(165,220,185);
      rect(122+i*35,height-73+j*50,13,30);
      fill(255,255,255);
      rect(120+i*35,height-45+j*50,15,5);
      rect(126+i*35,height-75+j*50,2,30);
      rect(121+i*35,height-65+j*50,14,2);
    }
  }
  
  for(var j=0;j<2;j++){
    for(var i=0;i<4;i++){
      fill(150,150,150);
      rect(195+i*33,height-85+j*50,15,30);
      fill(165,220,185);
      rect(197+i*33,height-83+j*50,13,30);
      fill(255,255,255);
      rect(195+i*33,height-55+j*50,15,5);
      rect(201+i*33,height-85+j*50,2,30);
      rect(196+i*33,height-75+j*50,14,2);
    }
  }
  
  //2nd People
  for(var j=0;j<4;j++){
    for(var i=0;i<7;i++){
      fill(230,195,175);
      ellipse(5+i*45,64+j*75,5,5);
      fill(0,0,0);
      ellipse(5+i*45,63+j*75,5,2);
      rect(3.7+i*45,65.5+j*75,3.5,16);
      rect(3.5+i*45,65.5+j*75,5,10);
    }
  }
  for(var j=0;j<4;j++){
    for(var i=0;i<7;i++){
      fill(230,195,175);
      ellipse(28+i*45,27+j*75,5,5);
      fill(0,0,0);
      ellipse(28+i*45,26+j*75,5,2);
      rect(26.7+i*45,28.5+j*75,3.5,16);
      rect(26.5+i*45,28.5+j*75,5,10);
    }
  }
  
  //right wall
  fill(255,240,205);
  rect(300,0,50,height);
  fill(225,205,160);
  rect(width-20,0,50,30);
  rect(width-20,80,50,110);
  rect(width-20,240,50,60);
  fill(255,255,255);
  rect(width-10,0,50,20);
  rect(width-10,80,50,100);
  rect(width-10,240,50,60);
  fill(0,0,0);
  rect(width-22,30,50,5);
  rect(width-20,80,50,5);
  rect(width-22,190,50,5);
  rect(width-20,240,50,5);
  
  for(var i=0;i<rains.length;i++){
    rains[i].display();
    rains[i].move();
  }
}

function mousePressed(){
  rains.push(new rain(mouseX,mouseY));
}

function rain(x,y){
  this.xPos=x;
  this.yPos=y;
  this.vel = 0;
  
  this.display = function(){
      fill(230,195,175);
      ellipse(this.xPos,this.yPos,12,12);
      fill(0,0,0);
      ellipse(this.xPos,this.yPos-5,10,10);
      ellipse(this.xPos,this.yPos-2,18,5);
      rect(this.xPos-3,this.yPos+5,6,40);
      rect(this.xPos-4,this.yPos+4,8,35);
      rect(this.xPos-5,this.yPos+3,10,20);
      rect(this.xPos-5,this.yPos+45,10,3);
  }
  
  this.move = function(){
    this.vel+=0.2;
    this.yPos+= this.vel;
  }
}
