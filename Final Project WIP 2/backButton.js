var bButton;


function backButton(){
  
bButton = createButton ("Back");
bButton.position (700,100);
bButton.mousePressed(goBack);  

}

function goBack(){
  
  
  if (two == true){
    bButton.remove();
    one = true;
    two = false;
    three = false;
  } else if (three == true){
    two = true;
    one = false;
    three = false;
  }
  
}
  
