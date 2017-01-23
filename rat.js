var xRat, yRat, JUMP, JUMPING, yVel, yAccel, dir, img;
var col;


function initializeRat() {
  preload();
  
  xRat = 100;
  yRat = 450;
  
  yVel=0;
  yAccel = 0;
  dir = 1;
}

function updateRat() {
  
	jump();
  print(col);
	rat();


}

function preload() {
  img = loadImage("assets/rat.png");
}

function rat(){
  //noFill();
	//ellipse(xRat,yRat, 60, 30);
	image(img,xRat,yRat);
	
	yAccel*=dir;
	
	yVel+=yAccel;
	yRat += yVel;

//  fill(0,0,0);
 //rect(xRat+40,yRat,150,66);
}

function jump(){
  if (JUMP) {
    yRat -= 1;
    yVel = -7;
    yAccel = .098;
    JUMPING = true;
    JUMP = false;
  }
  
  if (JUMPING) {
    if (yRat < 450) {
      dir=1;
    } else {
      yRat = 450;
      yVel = 0;
      yAccel = 0;
      JUMPING = false;
    }
  }
  
  
}

function checkRatCol(x,x1,y,w,h) {

  col = false;

  //if (((xRat + 66 <= x + w) && (xRat+150 >= x)) || ((xRat+66 <= x1 + w) && (xRat + 150 >= x1))){
  if (xRat+66 <= x + w  && xRat+150 >= x){
    if((yRat + 66 >= y)) {
      col = true;
      background(255);
      textSize(60);
      text("GAME OVER", 420, 257);
      fill(0);
      noloop();
    } 
  } 
  if (xRat+66 <= x1 + w  && xRat+150 >= x1){
    if((yRat + 66 >= y)) {
      col = true;
      background(255);
      textSize(60);
      text("GAME OVER", 420, 257);
      fill(0);
      noloop();
    } 
  } 
  
  

}

function keyPressed() {
  if (keyCode === 32 && !JUMPING) {
    print("JUMP");
    JUMP = true;
  }
}