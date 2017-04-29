//WIP media player

var slider;
var button;
var downwardSpiral;
var amp;

function setup() { 
  createCanvas(400, 400);
  //background(100);
  downwardSpiral = loadSound('https://archive.org/download/atrocityexhibition/01 Downward Spiral.mp3', loaded);
  
  amp = new p5.Amplitude();
  
  slider = createSlider(0,1,0.5,0.01);
  
  //downwardSpiral.addCue(2,sampleInfo,"Guru Guru's Oxymoron");
}

function draw() { 
  background (100);
  downwardSpiral.setVolume(slider.value());
  downwardSpiral.addCue(2,sampleInfo,"Guru Guru's Oxymoron");
  
  var vol = amp.getLevel();
  var diam = map (vol, 0, 0.5, 10, 200);
  fill (255,0,255);
  ellipse (width/2, height/2, diam, diam);
  
  songTime();
  
  line (100,300,300,300);
  circle ();
  
}

function loaded (){
  console.log('loaded');
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function songTime(){
  console.log(downwardSpiral.currentTime());
}

function togglePlaying(){
  if (!downwardSpiral.isPlaying()){
  	downwardSpiral.play();
    button.html("pause");
  } else {
    downwardSpiral.pause();
    button.html("play");
  }
}

function sampleInfo(info){
  //background(100);
  fill (0);
  textSize(20);
  text (info, 100,100);
  
}

function circle (){
  var songLength = map (downwardSpiral.currentTime(),0,172,100,300); 
  ellipse (songLength, 300, 10,10);
}
