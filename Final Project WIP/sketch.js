var albumArt1;
var albumArt2;
var albumMenu;
var albumButton;
var albumPlayer;
var slider;
var downwardSpiral;
var x = 0;


function preload() {
  albumArt1 = loadImage('https://upload.wikimedia.org/wikipedia/en/b/ba/AtrocityExhibition.jpg'); //album cover

  downwardSpiral = loadSound('https://archive.org/download/atrocityexhibition/01 Downward Spiral.mp3'); //1st song of album
}

function setup() {
  createCanvas(800, 800);

  albumMenu = true; //so that home screen is albumSelection
  albumButton = false;	// so that once album is clicked you can goto songSelection
  albumPlayer = false;	//so that once song is clicked you can goto songPlayer

  slider = createSlider(0, 1, 0.5, 0.01);	//slider for volume

}

function draw() {
  background(255, 50, 150);	//temporary background
  
  if (albumMenu == true) { //launches true so albumSelection function screen is boots on startup 
    albumSelection();
  }

  if (albumButton == true) { //
    songSelection(); //song selection screen
  }


  print("My mouse x is: ");
  print(mouseX);
  print("My mouse y is: ");
  print(mouseY);
}

function mouseClicked() { 
  if ((mouseX > 300) && (mouseX < 500) && (mouseY > 300) && (mouseY < 500)) {
    albumButton = true;
  } else {
    albumButton = false;
  }

  /*if (albumButton == true){	// I need it so that once the album is picked, you can pick a song and see it in the media player
    if ((mouseX > 120) && (mouseX < 340) && (mouseY > 120) && (mouseY < 145)){
      albumPlayer = true;
    } else {
      albumPlayer = false;
    }
  }*/

}

function albumSelection() { //main menu essentially
  imageMode(CENTER);
	rectMode(CENTER);
  noFill();
  stroke (158,73,255);
  strokeWeight(3);
  noTint();

  if ((mouseX > 300) && (mouseX < 500) && (mouseY > 300) && (mouseY < 500)) { //if mouse is over the album cover....

    rect(width / 2, height / 2, 200 + x, 200 + x);	//for expanding square animation around album cover
    x = x + 20;
    if (x > 800) {
      x = 0;
    }
    
    push(); //so that when mouse is over album cover it increases in size

    scale(1.2, 1.2);
    image(albumArt1, width / 2.4, height / 2.4, 200, 200);

    pop();
  } else {

    image(albumArt1, width / 2, height / 2, 200, 200);	//return to normal size if album cover is not moused over
  }
}

function songSelection() {
  imageMode(CORNER);	//so I don't have to push and pop background image
  noFill();
  textSize(25);
  background(255);
  
  tint(158,73,255, 127);	//purple transparency
  stroke (255);	
  background(albumArt1);	//album cover becomes the background
  
  //song titles
  text("1. Downward Spiral", 120, 145);
  text("2. Tell Me What I Don't Know", 120, 175);
  text("3. Rolling Stone (feat. Petite Noir)", 120, 205);
  text("4. Really Doe (feat. Kdot, Earl Sweatshirt, and Ab-Soul)", 120, 235);
  text("5. Lost", 120, 265);
  text("6. Ain't It Funny", 120, 295);
  text("7. Golddust", 120, 325);
  text("8. White Lines", 120, 355);
  text("9. Pneumonia", 120, 385);
  text("10. Dance In The Water", 120, 415);
  text("11. From The Ground (feat. Kelela)", 120, 445);
  text("12. When It Rain", 120, 475);
  text("13. Today", 120, 505);
  text("14. Get Hi (feat. B-Real)", 120, 535);
  text("15. Hell For It", 120, 565);
  
}

function songPlayer() {	//WIP of media player 
  background(255);
  downwardSpiral.setVolume(slider.value());

}