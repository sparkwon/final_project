function playButton(){
  pButton = createButton("Play");
  pButton.position (195,715); 
  pButton.mousePressed(togglePlaying); 
}

function togglePlaying(){
  
  if (!downwardSpiral.isPlaying()){
  	downwardSpiral.play();
    pButton.html("Pause");
  } else {
    downwardSpiral.pause();
    pButton.html("Play");
  }
}

