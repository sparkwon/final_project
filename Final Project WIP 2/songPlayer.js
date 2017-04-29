var amp;

function songPlayer() {	//WIP of media player 
  //background (255);
  strokeWeight (2);
  stroke (0);
  
  amp = new p5.Amplitude();
  var vol = amp.getLevel();
  var diam = map (vol, 0, 0.5, 10, 200);
  fill (255,0,255);
  ellipse (width/2, height/2, diam, diam);
  
	line (200,500,600,500);
  circle ();
  
}

function circle (){
	var songLength = map (downwardSpiral.currentTime(),0,172,100,300); 
  ellipse (songLength, 300, 10,10);
}