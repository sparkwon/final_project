var albumArt1;
var sampleArt1;
var sampleArt2;
var sampleArt3
var downwardSpiral;

var one;	
var two;
var three;
var four;

var flag;	// for back button
var flag2;	// for play button and song slider
var flag3;	// for play button and song slider for Pneumonia

var amp;
var vSlider;

function preload() {
  albumArt1 = loadImage('https://upload.wikimedia.org/wikipedia/en/b/ba/AtrocityExhibition.jpg'); //album cover
  sampleArt1= loadImage('guruguru.jpg');	//downward spiral sample art
  sampleArt2= loadImage('unspeakable.jpg');
  sampleArt3= loadImage('cuthands.jpg');
  downwardSpiral = loadSound('https://archive.org/download/atrocityexhibition/01 Downward Spiral.mp3'); //1st song of album 
  pneumonia = loadSound('https://archive.org/download/atrocityexhibition/09%20Pneumonia.mp3');	//9th song of the album
  
  /*songList [0] = loadSound('https://archive.org/download/atrocityexhibition/01 Downward Spiral.mp3');
	songList [1] = loadSound('https://archive.org/download/atrocityexhibition/02%20Tell%20Me%20What%20I%20Don%27t%20Know.mp3');
	songList [2] = loadSound('https://archive.org/download/atrocityexhibition/03%20Rolling%20Stone%20%28feat.%20Petite%20Noir%29.mp3');
	songList [3] = loadSound('https://archive.org/download/atrocityexhibition/04%20Really%20Doe%20%28feat.%20Kendrick%20Lamar.mp3');
	songList [4] = loadSound('https://archive.org/download/atrocityexhibition/05%20Lost.mp3');
	songList [5] = loadSound('https://archive.org/download/atrocityexhibition/06%20Ain%27t%20it%20Funny.mp3');
	songList [6] = loadSound('https://archive.org/download/atrocityexhibition/07%20Golddust.mp3');
	songList [7] = loadSound('https://archive.org/download/atrocityexhibition/08%20White%20Lines.mp3');
	songList [8] = loadSound('https://archive.org/download/atrocityexhibition/09%20Pneumonia.mp3');
	songList [9] = loadSound('https://archive.org/download/atrocityexhibition/10%20Dance%20in%20the%20Water.mp3');
	songList [10] = loadSound('https://archive.org/download/atrocityexhibition/11%20From%20the%20Ground%20%28feat.%20Kelela%29.mp3');
  songList [11] = loadSound('https://archive.org/download/atrocityexhibition/12%20When%20It%20Rain.mp3');
  songList [12] = loadSound('https://archive.org/download/atrocityexhibition/13%20Today.mp3');
  songList [13] = loadSound('https://archive.org/download/atrocityexhibition/14%20Get%20Hi%20%28feat.%20B-Real%29.mp3');
  songList [14] = loadSound('https://archive.org/download/atrocityexhibition/15%20Hell%20for%20It.mp3');*/

	
}

function setup() {
  createCanvas(800, 800);
  
  flag = false;
  flag2= false;
  flag3=false;
  
  one = true; //so that home screen is albumSelection
  two = false;	// so that once album is clicked you can goto songSelection
  three = false;	//so that once Downard Spiral is clicked you can goto songPlayer
  four = false;	//so that once Pneumonia is clicked you can goto songPlayer1
	
  amp = new p5.Amplitude();
}

function draw() {
  
  if (one == true) { //launches true so albumSelection function screen is boots on startup 
    albumSelection();
  }

  if (two == true) { //two become two once album is clicked
    songSelection(); //song selection screen is activated
    if (flag == false){	//starts false so back button appears on song selection screen
      backButton(); //back button
      flag = true;	// so it doesn't infinitely spawn back buttons
    }
    if (flag2 == true){
      vSlider.remove();
      pButton.remove();
    }
    if (flag3 == true){
      vSlider.remove();
      pButton.remove();
    }
  }
  
  if (three == true) {	//songPlayer screen
    songPlayer();	//media player and visualizer
    
    if (flag == false){	//still false on third screen if it hasn't been clicked
      backButton();	//back button
      flag = true; // so it doesn't infinitely spawn back buttons
    }
    if (flag2 == false){ //starts false so it activates with songPlayer
      vSlider = createSlider(0, 1, 0.5, 0.1);   
      playButton ();	//play button
      flag2 = true;	//so it doesn't infinitely spawn back volume slider and play button
    }
    volumeSlider (vSlider, vSlider.value());
  }

  if (four == true){
    songPlayer1();
    
    if (flag == false){	//still false on third screen if it hasn't been clicked
      backButton();	//back button
      flag = true; // so it doesn't infinitely spawn back buttons
    }
    if (flag3 == false){ //starts false so it activates with songPlayer1
      vSlider = createSlider(0, 1, 0.5, 0.1);   
      playButton1 ();	//play button
      flag3 = true;	//so it doesn't infinitely spawn back volume slider and play button
    }
    volumeSlider (vSlider, vSlider.value());
  }

  print("My mouse x is: ");
  print(mouseX);
  print("My mouse y is: ");
  print(mouseY);
}

function mouseClicked() { 
  if ((one == true)&&(mouseX > 300) && (mouseX < 500) && (mouseY > 300) && (mouseY < 500)) {
    two = true;
    one = false;
    three = false;
    flag = false;
  } else if((two ==true) && (mouseX > 120) && (mouseX < 340) && (mouseY > 120) && (mouseY < 145)) {
    three = true;
    two = false;
    one = false;
    flag2 = false;
    
  } else if ((two==true) && (mouseX>110) && (mouseX<300) && (mouseY>360) && (mouseY<385)){
    four = true;
    two = false;
    one = false;
    flag3=false;
  }

}



