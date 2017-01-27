/*

This rat.js manages almost everything related to the rat.

This program checks for collision with knife, draws rat, and has a jumping mechanism for the rat.

xRat & yRat are the coordinates.

JUMP and JUMPING are booleans that work towards the jump function.

yVel, yAccel, and dir are for managing jump speed.   

img is the variable for the image file.

run is what determines that the game is done.

counter increases score by '1 point' every frame

col is a boolean that returns whether it's colliding with an object or not.
*/
var xRat, yRat, JUMP, JUMPING, yVel, yAccel, dir, img, run, score, highscore=0; 
var col;


// this declares the rat's position, and basic speed.
function initializeRat() {
  preload();

  run = true;

  score = 0;

  xRat = 100;
  yRat = 450;
  
  yVel=0;
  yAccel = 0;
  dir = 1;
}

// this function is repeatedly called in 'background.js' and checks if it's jumping and continues to draw the rat in its position.
function updateRat() {
  jump();
  rat();
}

// uploads rat image for variable
function preload() {
  img = loadImage("assets/rat.png");
}

// draws image at xRat and yRat. changes vertical speed of rat for jumping.
function rat(){
  rect(xRat,yRat,150,83);
  //image(img,xRat,yRat);
  


  yAccel*=dir;
  yVel+=yAccel;
  yRat += yVel;


// if collided with an object, it will show a gameover screen
  if(!run) {
    background(255);
    textSize(60);
    text("GAME OVER", 420, 257);
    text("'ENTER' to restart", 420, 330);
    fill(0);
  } else {
    score++;
  }

  if(score>highscore){
    highscore = score;
  }
  
  // score display
  textSize(10);
  text("Score: "+ score,1000, 30);
  text("highscore: "+ highscore,1000, 45);
}

// jumping function
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

// checks if it is colliding by seeing if the rat is bounds of the given object
function checkRatCol(x,y,w,h) {

  col = false;

  if (xRat+66 <= x + w  && xRat+150 >= x){
    if((yRat + 83 >= y && y+h >= yRat)) {
      col = true;
      run = false;     
    } 
  } 
} 
 
function keyPressed() {
  // checks if space bar is pressed to run jump function  
  if (keyCode === 32 && !JUMPING) {
    JUMP = true;
  }

  // checks if enter key is pressed and if game is not running to restart game 
  if (keyCode === 13 && !run) {
    initializeRat();

  }
}