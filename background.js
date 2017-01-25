/*This background.js file will hold the main functionalitby of the program
 *Lucas Folz
 *15.1.2017
 *Program description: This Program hosts the code for the background and initializes and updates the functions within the rat.js (character) and knife.js (obstacle) files. This means 
 *that the background.js file is the main file that combines all the files.
 *Notes: A person responsible for this file should design the background as well as initalize the character and obstalce bby calling those functions and call the update functions for 
 *the character and the obstacle
*/

var bx1, bx2, bimg1, bimg2; //Initialzes the variables for the moving background. bimg1 and bimg2 both refrence the same background image but are neccessary for a smooth background transition.

function updateBackground(){ //This function updates the background meaning that it makes the background travel from right to left to make it seem like it is moving.
  
	image(bimg1, bx1, 0); //This makes the image appear on the screen. This line of code is formated (image, x position, y position).
	image(bimg2, bx2, 0); //This makes the image appear on the screen. This line of code is formated (image, x position, y position).
  
  bx1 -= 3; //This subtracts 3 from the x position (bx1) of the first background image making it seems as if the background is moving from right to left.
  bx2 -= 3; //This subtracts 3 from the x position (bx2) of the second background image making it seems as if the background is moving from right to left.
  
  if (bx1 < -width) { //If the x position of the first background image is completly off of the window then return the image to the right side of the screen
    bx1 = width; //This returns the image when it is off of the window on the left side to the beginning of the right side of the window
  }
  if (bx2 < -width) { //If the x position of the second background image is completly off of the window then return the image to the right side of the screen
    bx2 = width; //This returns the image when it is off of the window on the left side to the beginning of the right side of the window
  }
}

function setup() { //This is the setup function for the entire game. That is why there is function "initializeKnife();" and "initializeRat();"
  createCanvas(1200, 515); //This creates the window size for the entire game. (1200, 515)
  
  bimg1 = loadImage('assets/background.jpeg'); //This loads the background image so that it can be used within the code. The pathway "assets/background.jpeg" is where the image is located within the Ratatouille-master folder.
  bimg2= loadImage('assets/background.jpeg'); //This loads the same image as bimg1 as seen by the pathway. We need to load the image twice for two different variables so that it can be continous.
  
  bx1 = width; //Sets the starting position of bimg1 (the first background image) to the width of the screen
  bx2 = 0; //Sets the starting position of bimg2 (the second background image) to the start of the screen (x = 0)
  
  initializeRat(); //Refrences the function from Rat.js file. This function initalizes the Rat by providing information such as the position and the image
  
  initializeKnife();//Refrences the function from Knife.js file. This function initalizes the knife by providing such as the position and the image
}

function draw() { //This is the main function for the entire game (draw function). This runs all of the updates ("updateRat();") so that the knife and background moves from right to left and the rat is able to jump. 
  updateBackground(); //Updates the background by refrencing the function at the tp of this file (line 12)
  checkRatCol(getknifeX(), getknifeX1(), getknifeY(), getknifeW(), getknifeH()); //Refrences the functions from rat.js and knife.js files. This function determines whether there is a collision between the rat and knife.
  updateRat(); //Refrences the function from Rat.js file. This function allows the rat to jump
  updateKnife(); //Refrences the function from Knife.js file. This function allows the knife to travel right to left
}


