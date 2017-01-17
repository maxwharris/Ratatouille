/*This Knife.js file will hold the functions 
 * that intialize and udpate the obstacle
 *
 *File description:
 *
 *
 */
var img;
  
function preload() {  // preload() runs once
  img = loadImage('kitchen-knife.png');
}

function initializeObstacle() {
  x = 599;
  y = 450;
  w = 600;
  h = 100;
}

function updateObstacle() {

  
  //insert code the make the obstacle move automatically
  //and reset to random positions so the game isn't boring.
  //insert the code that draws the obstacle
  background(255,255,255);
  image(img,x,y);
  x = x - 3;
  if (x < -599) {
    x = 1200;
    y = 450;
    w = 600;
    h = 100;
  }
}

/** TESTING CODE **/
/* This code should be commented when the team has put all
the files in one project. But you will need this code to test
the character functions. Add the code to test your functions in here.
*/
function setup() {
  createCanvas(1200,800);
  initializeObstacle();

}

function draw() {
  updateObstacle();
}
