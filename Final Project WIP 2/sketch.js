var albumArt1;
var one;	
var two;
var three;
var flag;	// for back button
var flag2;	// for play button and song slider
var downwardSpiral;

function preload() {
  albumArt1 = loadImage('https://upload.wikimedia.org/wikipedia/en/b/ba/AtrocityExhibition.jpg'); //album cover
  downwardSpiral = loadSound('https://archive.org/download/atrocityexhibition/01 Downward Spiral.mp3'); //1st song of album
}

function setup() {
  createCanvas(800, 800);

  flag = false;
  flag2= false;
  
  one = true; //so that home screen is albumSelection
  two = false;	// so that once album is clicked you can goto songSelection
  three = false;	//so that once song is clicked you can goto songPlayer

}

function draw() {
  
  if (one == true) { //launches true so albumSelection function screen is boots on startup 
    albumSelection();
  }

  if (two == true) { //
    songSelection(); //song selection screen
    if (flag == false){
      backButton();
      flag = true;
    }
    if (flag2 == true){
      vSlider.remove();
      pButton.remove();
    }
  }
  
  if (three == true) {
    background (100);
    songPlayer();
    if (flag == false){
      backButton();
      flag = true;
    }
    if (flag2 == false){
      volumeSlider ();
      playButton ();
      flag2 = true;
    }
  }


  /*print("My mouse x is: ");
  print(mouseX);
  print("My mouse y is: ");
  print(mouseY);*/
}

function mouseClicked() { 
  if ((one ==true)&&(mouseX > 300) && (mouseX < 500) && (mouseY > 300) && (mouseY < 500)) {
    two = true;
    one = false;
    three = false;
    flag = false;
  } else if((two ==true) && (mouseX > 120) && (mouseX < 340) && (mouseY > 120) && (mouseY < 145)) {
    three = true;
    two = false;
    one = false;
  } 

}



