/*This obstacle.js file kwill hold the functions 
 * that intialize and udpate the obstacle
 *
 *File description:
 *ADD HERE
 *
 */

function initializeKnife() {
  kx = 2100;
  kx1 = 1200;
  ky = 450;
  kw = 435;
  kh = 58;
  var knimg;
  
  preloadKnife();
}


  
function preloadKnife() {  // preload() runs once
  knimg = loadImage('assets/knife.png');
}

function getknifeX(){
  return kx;
}

function getknifeX1(){
  return kx1;
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
  image(knimg, kx, ky);
  kx = kx - 6;
  if (kx < -599) {
    kx = 1200;
    ky = 450;
    kw = 435;
    kh = 58;
  }
  
  image(knimg, kx1, ky);
  kx1 = kx1 - 6;
  if (kx1 < -599) {
    kx1 = 1200;
    ky = 450;
    kw = 435;
    kh = 58;
  }
}




