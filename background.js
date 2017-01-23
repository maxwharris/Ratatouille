/*This background.js file will hold the main functionalitby of the program
 *
 *Program description:
 *ADD HERE
 *
 */

/*NOTES:
A person responsible for this file should
design the background as well as
initalize the character and obstalce bby calling those functions and
call the update functions for the character and the obstacle*/

//Implement

var bx1, bx2, bimg1, bimg2;

function updateBackground(){
  background(210,180,140);
  
	image(bimg1, bx1, 0);
	image(bimg2, bx2, 0);
  
  bx1 -= 3;
  bx2 -= 3;
  
  if (bx1 < -width) {
    bx1 = width;
  }
  if (bx2 < -width) {
    bx2 = width;
  }
}

//Change or implement as needed
function setup() {
  createCanvas(1200, 515);
  
  bimg1 = loadImage('assets/background.jpeg');
  bimg2= loadImage('assets/background.jpeg');
  
  bx1 = width;
  bx2 = 0;
  
  initializeKnife();
  
  initializeRat();
}

//Change or implement as needed
function draw() {
  updateBackground();
<<<<<<< HEAD
 
 
  checkRatCol(getknifeX(), getknifeY(), getknifeW(), getknifeH());
 
 
=======
  checkRatCol(getknifeX(), getknifeX1(), getknifeY(), getknifeW(), getknifeH());
>>>>>>> f757c262b6e26818884b1cbcf5f2b81791554577
  updateRat();
  updateKnife();
}


