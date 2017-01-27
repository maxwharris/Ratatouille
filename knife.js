/* Eleanor Davol
1/23/17
Knife Obstacle 
/*This obstacle.js file will hold the functions for the knife. It will
 * intialize obstacle
 * preload image
 * update obstacle
 *File description:
 * This code creates two knives that move across the screen as obstacles for the rat, resetting everytime it moves off screen. 
 */

//This code initializes the variables of the two knives. 
function initializeKnife() {
//The variables below are for the length, width, and height of the two knives and the starting positions.  
//They have different x positions but the same y position on the table so there are two x variables and one y variable.
  kx = 2100;
  kx1 = 1200;
  ky = 450;
  ky1 = 450;
  kw = 435;
  kh = 58;
//This variable is for the downloaded image.
  var knimg;

//This variable is for the external image that is downloaded.  
  preloadKnife();
}


//This function loads an external file which contains the knife image.
function preloadKnife() {  // preload() runs once
  knimg = loadImage('assets/knife.png');
}

//These functions allow the variables for the positions, height, and width of the knife to be transferred over to the background file. 
function getknifeX(){
  return kx;
}

function getknifeX1(){
  return kx1;
}

function getknifeY(){
  return ky;
}

function getknifeY1(){
  return ky1;
}

function getknifeW(){
  return kw;
}

function getknifeH(){
  return kh;
}


//For knife 1: This function updates the position of the knife so that the kx coordinate changes by 6. 
function updateKnife() {
  image(knimg, kx, ky);
  kx = kx - 6;
//This allows the knife to reset to its original position when it goes off the screen.  
  
  if (kx < -500) {
    ky = 450;
  }
  
  if (kx < -600) {
    kx = random(1200, 1400);
    ky = 450 - (random(0,150));
    kw = 435;
    kh = 58;
  }
  
//For knife 2: This function updates the position of the knife so that the kx1 coordinate changes by 6.   
  image(knimg, kx1, ky1);
  kx1 = kx1 - 6;
//This allows the knife to reset to its original position when it goes off the screen.
  
  if (kx1 < -500) {
    ky1 = 450;
  }
  
  if (kx1 < -600) {
    kx1 = kx + random(800, 1000);
    ky1 = 450 - (random(0,150));
    kw = 435;
    kh = 58;
  }
}