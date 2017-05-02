function playButton1(){
  pButton = createButton("Play");
  pButton.position (195,715); 
  pButton.mousePressed(togglePlaying1); 
}

function togglePlaying1(){
  
  if (!pneumonia.isPlaying()){
  	pneumonia.play();
    pButton.html("Pause");
  } else {
    pneumonia.pause();
    pButton.html("Play");
  }
}