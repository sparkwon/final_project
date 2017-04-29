var vSlider;

function volumeSlider(){
  vSlider = createSlider(0, 1, 0.5, 0.01);	//slider for volume
  downwardSpiral.setVolume(vSlider.value());
  vSlider.position(width/2,500);
}
  