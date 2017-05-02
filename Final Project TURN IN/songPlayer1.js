var a = 0;
var r = 50;

function songPlayer1() {	//WIP of media player 
  spiral();
  noTint();
  
  textSize (40);
  strokeWeight (2);
  stroke(255,0,255);
  fill(255);
  text ("SONG:",35,100);
  text ("PRODUCER:",70,175);
  text ("SAMPLES:",105,250);
  
  text ("Pneumonia", 170, 100);
  text ("Evian Christ", 315, 175);
  text ("2", 310, 250);
  
  stroke (0);
  
  if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 0) && (pneumonia.currentTime() < 10)){	//so that the 
    fill (255,248,98);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 0) && (pneumonia.currentTime() < 10)){
    fill (255,248,98);
  }else if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 10) && (pneumonia.currentTime() < 24)){
    fill (255,0,255);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 10) && (pneumonia.currentTime() < 24)){
    fill (255,0,255);
  }else if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 24) && (pneumonia.currentTime() < 40)){
    fill (255,248,98);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 24) && (pneumonia.currentTime() < 40)){
  	fill (255,248,98);
  }else if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 40) && (pneumonia.currentTime() < 201)){
    fill (255,0,255);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 40) && (pneumonia.currentTime() < 201)){
    fill (255,0,255);
  }
    
  line (200,700,600,700);	//song duration time
  stroke (255,255,0);
  line (200,690,220,690);	//sample duration time
  line (250,690,280,690);	//2nd sample duration time
  
  // code below allows for the circle to travel on the song/sample duration line while playing and paused
  if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 0) && (pneumonia.currentTime() < 10)){	
    circle1 (10);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 0) && (pneumonia.currentTime() < 10)){
    circle1 (10);
  }else if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 10) && (pneumonia.currentTime() < 24)){
    circle1 (0);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 10) && (pneumonia.currentTime() < 24)){
    circle1 (0);
  }
  
   if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 24) && (pneumonia.currentTime() < 40)){	
    circle1 (10);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 24) && (pneumonia.currentTime() < 40)){
    circle1 (10);
  }else if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 40) && (pneumonia.currentTime() < 201)){
    circle1 (0);
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 40) && (pneumonia.currentTime() < 201)){
    circle1 (0);
  }
  
  if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 0) && (pneumonia.currentTime() < 10)){	
    sampleBox1();
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 0) && (pneumonia.currentTime() < 10)){
    sampleBox1();
  }
  
  if ((pneumonia.isPlaying()) && (pneumonia.currentTime() > 24) && (pneumonia.currentTime() < 40)){	
    sampleBox2();
  }else if ((!pneumonia.isPlaying()) && (pneumonia.currentTime() > 24) && (pneumonia.currentTime() < 40)){
    sampleBox2();
  }
  

	//console.log (pneumonia.currentTime());
}

function circle1 (s){
  var songLength = map (pneumonia.currentTime(),0,201,200,600);
  ellipse (songLength, 700-s,10,10);
  
}

function sampleBox1(){
  var songLength = map (pneumonia.currentTime(),0,201,200,600);
  noStroke();
  rectMode (CENTER);
  imageMode(CENTER);
  
  fill (255,0,255,100);
  rect (songLength,490, 350,170);
  triangle(songLength/2,575,songLength/0.66,575,songLength,680);
  image (sampleArt2,songLength/1.9 ,480 ,125,125);
  
  fill(255);
  stroke (255,0,255);
  textSize(20);
  text ("Song: White Room", songLength/1.1, 440);
  text ("Album: Unspeakable", songLength/1.1, 465);
  text ("Artist: Raz Mesinai", songLength/1.1, 490);
  text ("Release: 2001", songLength/1.1, 515);

}

function sampleBox2(){
  var songLength = map (pneumonia.currentTime(),0,201,200,600);
  noStroke();
  rectMode (CENTER);
  imageMode(CENTER);
  
  fill (255,0,255,100);
  rect (songLength,490, 350,170);
  triangle(songLength/2,575,songLength/0.66,575,songLength,680);
  image (sampleArt3,songLength/1.7 ,480 ,125,125);
  
  fill(255);
  stroke (255,0,255);
  textSize(20);
  text ("Song: Black Mamba", songLength/1.1, 440);
  text ("Album: Black Mamba", songLength/1.1, 465);
  text ("Artist: Cut Hands", songLength/1.1, 490);
  text ("Release: 2012", songLength/1.1, 515);

}