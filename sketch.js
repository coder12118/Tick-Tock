var hr, min, sec;

function setup() {
  createCanvas(1000,500);

  angleMode(DEGREES);
}

function draw() {
  background("black");

  translate(500, 250);
  rotate(-90) 
  
  hr = hour();
  min = minute();
  sec = second();

  scAngle = map(sec, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  minAngle = map(min, 0, 60, 0, 360);
  push();
  rotate(minAngle);
  stroke(0, 255, 0)
  strokeWeight(7);
  line(0, 0, 85, 0);
  pop();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  push();
  rotate(hrAngle);
  stroke(0, 0, 255)
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();

  noFill();
  stroke(255, 0, 0)
  strokeWeight(5);
  arc(0, 0, 300, 300, 0, scAngle)

  noFill();
  stroke(0, 255, 0)
  strokeWeight(5);
  arc(0, 0, 289, 289, 0, minAngle)

  noFill();
  stroke(0, 0, 255)
  strokeWeight(5);
  arc(0, 0, 278, 278, 0, hrAngle)
  

  drawSprites();
}