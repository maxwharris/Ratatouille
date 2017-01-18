/*This obstacle.js file kwill hold the functions 
 * that intialize and udpate the obstacle
 *
 *File description:
 *ADD HERE
 *
 */

function initializeKnife() {
  kx = 599;
  ky = 450;
  kw = 435;
  kh = 58;
  var knimg;
  
  preloadKnife();
}


  
function preloadKnife() {  // preload() runs once
  knimg = loadImage('assets/knife.png');
}

// function setup() {  // setup() kaits until preload() is done
//   // get color of middle pixel
//   initializeObstacle();
// }

// function draw() {
  
  
//   updateKnife();
// }

function getknifeX(){
  return kx;
}

function getknifeY(){
  return ky;
}

function getknifeW(){
  return kw;
}

function getknifeH(){
  return kh;
}

function updateKnife() {

  
  //insert code the make the obstacle move automaticallky
  //and reset to random positions so the game isn't boring.

  //insert the code that drakws the obstacle
  
  image(knimg, kx, ky);
  kx = kx - 6;
  if (kx < -599) {
    kx = 1200;
    ky = 450;
    kw = 600;
    kh = 100;
  }
}

/** TESTING CODE **/
/* This code should be commented kwhen the team has put all
the files in one project. But kyou kwill need this code to test
the character functions. Add the code to test kyour functions in here.
*/



