function songSelection() {
  imageMode(CORNER);	//so I don't have to push and pop background image
  noFill();
  strokeWeight (1);
  textSize(30);
  //background(255);
  
  tint(158,73,255, 127);	//purple transparency
  stroke (255);	
  background(albumArt1);	//album cover becomes the background
  
  //song titles
  text("1. Downward Spiral", 120, 145);
  text("2. Tell Me What I Don't Know", 120, 175);
  text("3. Rolling Stone (feat. Petite Noir)", 120, 205);
  text("4. Really Doe (feat. Kdot, Earl Sweatshirt, and Ab-Soul)", 120, 235);
  text("5. Lost", 120, 265);
  text("6. Ain't It Funny", 120, 295);
  text("7. Golddust", 120, 325);
  text("8. White Lines", 120, 355);
  text("9. Pneumonia", 120, 385);
  text("10. Dance In The Water", 120, 415);
  text("11. From The Ground (feat. Kelela)", 120, 445);
  text("12. When It Rain", 120, 475);
  text("13. Today", 120, 505);
  text("14. Get Hi (feat. B-Real)", 120, 535);
  text("15. Hell For It", 120, 565);
  
}