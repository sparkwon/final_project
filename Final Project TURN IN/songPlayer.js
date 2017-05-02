var a = 0;
var r = 50;

function songPlayer() {	//WIP of media player 
  spiral();
  noTint();
  
  textSize (40);
  strokeWeight (2);
  stroke(255,0,255);
  fill(255);
  text ("SONG:",35,100);
  text ("PRODUCER:",70,175);
  text ("SAMPLES:",105,250);
  
  text ("Downard Spiral", 170, 100);
  text ("Paul White", 315, 175);
  text ("1", 310, 250);
  
  stroke (0);
  
  if ((downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 0) && (downwardSpiral.currentTime() < 10)){	//so that the 
    fill (255,248,98);
  }else if ((!downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 0) && (downwardSpiral.currentTime() < 10)){
    fill (255,248,98);
  }else if ((downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 10) && (downwardSpiral.currentTime() < 158)){
    fill (255,0,255);
  }else if ((!downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 10) && (downwardSpiral.currentTime() < 158)){
    fill (255,0,255);
  }
  
  line (200,700,600,700);	//song duration time
  stroke (255,255,0);
  line (200,690,225,690);	//sample duration time
  
  // code below allows for the circle to travel on the song/sample duration line while playing and paused
  if ((downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 0) && (downwardSpiral.currentTime() < 10)){	
    circle (10);
  }else if ((!downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 0) && (downwardSpiral.currentTime() < 10)){
    circle (10);
  }else if ((downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 10) && (downwardSpiral.currentTime() < 158)){
    circle (0);
  }else if ((!downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 10) && (downwardSpiral.currentTime() < 158)){
    circle (0);
  }
  
  if ((downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 0) && (downwardSpiral.currentTime() < 10)){	
    sampleBox();
  }else if ((!downwardSpiral.isPlaying()) && (downwardSpiral.currentTime() > 0) && (downwardSpiral.currentTime() < 10)){
    sampleBox();
  }
  

	console.log (downwardSpiral.currentTime());
}

function circle (s){
  var songLength = map (downwardSpiral.currentTime(),0,158,200,600);
  ellipse (songLength, 700-s,10,10);
  
}

function sampleBox(){
  var songLength = map (downwardSpiral.currentTime(),0,158,200,600);
  noStroke();
  rectMode (CENTER);
  imageMode(CENTER);
  fill (255,0,255,100);
  
  rect (songLength,490, 350,170);
  triangle(songLength/2,575,songLength/0.66,575,songLength,680);
  image (sampleArt1,songLength/1.9 ,480 ,125,125);
  
  fill(255);
  stroke (255,0,255);
  textSize(20);
  text ("Song: Oxymoron", songLength, 440);
  text ("Album: Känguru", songLength, 465);
  text ("Artist: Guru Guru", songLength, 490);
  text ("Release: 1972", songLength, 515);

}

/*function ampShapes (){
  var vol = amp.getLevel();
  var diam = map (vol, 0, 0.5, 10, 100);
  ellipse (width/2, height/2, diam, diam);
}*/

