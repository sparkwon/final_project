var x = 0;

function albumSelection() { //main menu essentially
  background(255, 50, 150);	//temporary background
  imageMode(CENTER);
	rectMode(CENTER);
  noFill();
  stroke (158,73,255);
  strokeWeight(3);
  noTint();

  if ((mouseX > 300) && (mouseX < 500) && (mouseY > 300) && (mouseY < 500)) { //if mouse is over the album cover....

    rect(width / 2, height / 2, 200 + x, 200 + x);	//for expanding square animation around album cover
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
