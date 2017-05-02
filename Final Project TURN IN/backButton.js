var bButton;

function backButton(){
  
bButton = createButton ("Back");	//button says back
bButton.position (700,100);	//location at top right corner
bButton.mousePressed(goBack);  //goBack function activates when clicked

}

function goBack(){
  
  if (two == true){	//if on the song selection screen and bButton is clicked...
    bButton.remove();	//back button is gone
    one = true;	//and goes back to album selection screen
    two = false;
    three = false;
  } else if (three == true){	//if on the song player screen
    two = true;	//go back to song selection screen
    one = false;	
    three = false;
  } else if (four==true){
    two = true;
    one=false;
    four=false;
  }
  
}
  
