//I borrowed this code online: http://www.codeseek.co/TWAIN/web-spiral---p5-js-aJEemb
//I edited it so that the size of the circles change from the amplitude/color change 

var x, y, size, theta = 0, num=1000;

function spiral() {
  background(173,131,255);
  noFill();
	
  var x=width/2, y=height/2;
  var angle=0;
  var radius=30;
	
  for (var i=0; i<num; i++) {
    x = width/2 + sin(angle)*radius;
    y = height/2 + cos(angle)*radius;
    var size = map(sin(theta+TWO_PI/num*i*20), -1, 1, 0, 50);
    var scal = 0.5+1.0/num*2*i;
    //my code
    var vol = amp.getLevel();					
		var flux = map (vol, 0, 1, 10, 165);
		//my code
    
		if(i%9===0){
			strokeWeight(3);
			stroke(230,162,255);
		} else {
			strokeWeight(2);
			stroke(157,114,255);
			
		}
	
    ellipse(x, y, size*scal+flux, size*scal+flux);
    angle += radians(5);
    radius += 0.5;
  }
	
  theta -= 0.025;
	
}