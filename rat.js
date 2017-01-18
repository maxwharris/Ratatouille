var xRat, yRat, JUMP, JUMPING,yVel,yAccel,dir,img;



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

function checkRatCol(x,y,w,h) {
	if (x >= xRat && x <= xRat+150) { // 150 is rat width
		if (y >= yRat && y <= yRat+83)
			print("HITTING");
	}
}

function keyPressed() {
  if (keyCode === 32 && !JUMPING) {
    print("JUMP");
    JUMP = true;
  }
}