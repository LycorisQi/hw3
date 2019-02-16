function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 25;
var y = 25;
var s = 100;
var time = 1;

function draw() 
{
  colorMode(HSB);
  stroke(400);

  // draw circle with random hue
  fill(random(400), s, 100);
  triangle(x, y, x, y - 25, x - 25, y)


  // set up next circle
  x = x + 25;
  y = y + 25;

  // if we hit the right edge, go down a line
  if (x > width-25) 
  {
    time = time + 1;
    x = 25;
    y = y + 25;
  }

  // if we hit the bottom edge, reset to top
  if (y > height-25) 
  {
    s = s - 5;//speed of satuation change
		x = 25 * time;//make it slope
    y = 25;
  }
  
  //reset the satuation
  if(s < 0)
  {
    s = 100;
  }
  if(x > height - 25)
  {
    time = 1;
    x = 0;// back to position, fullfill the canvas.Start again.
  }
}
