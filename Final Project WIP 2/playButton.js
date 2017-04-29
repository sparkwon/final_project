var pButton;

function playButton(){
  pButton = createButton("play");
  pButton.position (700,width/2); 
  pButton.mousePressed(togglePlaying);

  
}

function togglePlaying(){
  if (!downwardSpiral.isPlaying()){
  	downwardSpiral.play();
    pButton.html("pause");
  } else {
    downwardSpiral.pause();
    pButton.html("play");
  }
}