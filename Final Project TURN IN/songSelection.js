function songSelection() {
  imageMode(CORNER);	//so I don't have to push and pop background image
  noFill();
  strokeWeight (1);
  textSize(30);
  
  tint(158,73,255, 127);	//purple transparency
  stroke (255);	
  background(albumArt1);	//album cover becomes the background
  
  //song titles
  text("1. Downward Spiral", 110, 145);
  text("2. Tell Me What I Don't Know", 110, 175);
  text("3. Rolling Stone (feat. Petite Noir)", 110, 205);
  text("4. Really Doe (feat. Kdot, Earl Sweatshirt, Ab-Soul)", 110, 235);
  text("5. Lost", 110, 265);
  text("6. Ain't It Funny", 110, 295);
  text("7. Golddust", 110, 325);
  text("8. White Lines", 110, 355);
  text("9. Pneumonia", 110, 385);
  text("10. Dance In The Water", 110, 415);
  text("11. From The Ground (feat. Kelela)", 110, 445);
  text("12. When It Rain", 110, 475);
  text("13. Today", 110, 505);
  text("14. Get Hi (feat. B-Real)", 110, 535);
  text("15. Hell For It", 110, 565);
  
  if((two ==true) && (mouseX > 110) && (mouseX < 370) && (mouseY > 120) && (mouseY < 145)) {
    stroke (255,255,0);
    text("1. Downward Spiral", 110, 145);
  } else {
    stroke (255);
    text("1. Downward Spiral", 110, 145);
  }
  
  if ((two==true) && (mouseX > 110) && (mouseX < 495) && (mouseY > 150) && (mouseY < 176)){
    stroke (255,255,0);
    text("2. Tell Me What I Don't Know", 110, 175);
  }else {
    stroke (255);
    text("2. Tell Me What I Don't Know", 110, 175);
  }
  
  if((two==true) && (mouseX > 110) && (mouseX < 560) && (mouseY > 180) && (mouseY < 205)){
    stroke (255,255,0);
    text("3. Rolling Stone (feat. Petite Noir)", 110, 205);
  }else{
    stroke (255);
    text("3. Rolling Stone (feat. Petite Noir)", 110, 205);
  }
  
  if ((two == true) && (mouseX > 110) && (mouseX < 790) && (mouseY > 210) && (mouseY <235)){
    stroke (255,255,0);
    text("4. Really Doe (feat. Kdot, Earl Sweatshirt, Ab-Soul)", 110, 235);
  }else{
    stroke (255);
    text("4. Really Doe (feat. Kdot, Earl Sweatshirt, Ab-Soul)", 110, 235);
  }
  
  if ((two == true) && (mouseX>110) && (mouseX<200) && (mouseY >240) && (mouseY<265)){
    stroke(255,255,0);
    text("5. Lost", 110, 265);
  }else{
    stroke (255);
    text("5. Lost", 110, 265);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<320) && (mouseY>270) && (mouseY<295)){
    stroke (255,255,0);
    text("6. Ain't It Funny", 110, 295);
  }else{
    stroke (255);
    text("6. Ain't It Funny", 110, 295);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<265) && (mouseY>300) && (mouseY<325)){
    stroke (255,255,0);
    text("7. Golddust", 110, 325);
  }else{
    stroke (255);
    text("7. Golddust", 110, 325);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<300) && (mouseY>330) && (mouseY<355)){
    stroke (255,255,0);
    text("8. White Lines", 110, 355);
  }else{
    stroke (255);
    text("8. White Lines", 110, 355);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<300) && (mouseY>360) && (mouseY<385)){
    stroke (255,255,0);
    text("9. Pneumonia", 110, 385);
  }else{
    stroke (255);
    text("9. Pneumonia", 110, 385);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<430) && (mouseY>390) && (mouseY<415)){
    stroke (255,255,0);
    text("10. Dance In The Water", 110, 415);
  }else{
    stroke (255);
    text("10. Dance In The Water", 110, 415);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<575) && (mouseY>420) && (mouseY<445)){
    stroke (255,255,0);
    text("11. From The Ground (feat. Kelela)", 110, 445);
  }else{
    stroke (255);
    text("11. From The Ground (feat. Kelela)", 110, 445);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<332) && (mouseY>450) && (mouseY<475)){
    stroke (255,255,0);
    text("12. When It Rain", 110, 475);
  }else{
    stroke (255);
    text("12. When It Rain", 110, 475);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<490) && (mouseY>480) && (mouseY<505)){
    stroke (255,255,0);
    text("13. Today", 110, 505);
  }else{
    stroke (255);
    text("13. Today", 110, 505);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<432) && (mouseY>510) && (mouseY<535)){
    stroke (255,255,0);
    text("14. Get Hi (feat. B-Real)", 110, 535);
  }else{
    stroke (255);
    text("14. Get Hi (feat. B-Real)", 110, 535);
  }
  
  if ((two==true) && (mouseX>110) && (mouseX<290) && (mouseY>540) && (mouseY<565)){
    stroke (255,255,0);
    text("15. Hell For It", 110, 565);
  }else{
    stroke (255);
    text("15. Hell For It", 110, 565);
  }
  
  
  
}
