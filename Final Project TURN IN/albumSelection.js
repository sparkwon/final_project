var x = 0;

function albumSelection() { //main menu essentially
  background(228, 75, 236);	//temporary background
  imageMode(CENTER);	//centered pictures
	rectMode(CENTER);	//centered squares
  noFill();	//no fill for expanding square animation
  noTint();	//to make sure opacity is 100% returning from songSelection
  
  stroke (255);
  strokeWeight(3);
  textSize (100);
  text ('SAMPLE', 50, 150);
  text ('VIEWER', 350,740);

  if ((mouseX > 300) && (mouseX < 500) && (mouseY > 300) && (mouseY < 500)) { //if mouse is over the album cover....

    strokeWeight(1);
    stroke (255);
    textSize(40);
    text('Atrocity Exhibition',235,265);
    text('Danny Brown',283,555);
    
    strokeWeight(4)
    stroke (255,0,145);	//purple color outlines
    rect(width / 2, height / 2, 200 + x, 200 + x); //for expanding square animation around album cover
    rect(width/2, height/2,50+x,50+x);
    rect(width/2, height/2,100+x,100+x);
    rect(width/2, height/2,150+x,150+x);
    x = x + 20;
    if (x > 800) {
      x = 0;
    }
    
    push(); //so that when mouse is over album cover it increases in size

    scale(1.2, 1.2);
    image(albumArt1, width / 2.4, height / 2.4, 200, 200);

    pop();
  } else {

    image(albumArt1, width / 2, height / 2, 200, 200);	//return to normal size if album cover is not moused over
  }
}
