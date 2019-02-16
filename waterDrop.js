var x = 230;
var y = 220;
var z = 0;
var place = x;

function setup() {
    createCanvas(400, 400);
    background(220);
    // HSB with H range 0-400, S range 0-400, B range 0-100:
    colorMode(HSB, 400, 0, 100);
	
}

function draw() 
{
  background(0);
	noStroke(0);
	
	//draw pipe
	rect(0, 200, place, 20);
	// strokeWeight(20);
	// stroke(50,0,100);
	// line(0,200,x,200);
	
	//drip
	ellipse(x,y,10);
	
	z = z + 1;
	//free falling body
	y =y + 0.98 * z;
	x = x + 2;
	
	//time setting
	if(y > height*2)
	{
		//reset the drip back to position
		z = 0;
		y =220;
		x = 230;
	}

}
