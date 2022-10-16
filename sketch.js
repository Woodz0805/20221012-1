function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
}

function draw() {
  background('#3c6e71');
  stroke(mouseX%256,mouseY/3,frameCount%256)
  strokeWeight(2)
  noFill()
  for(var j=-1;j<int(height/(50));j++)
  {
  for(var i=0;i<int(width/50);i++)
  {
    ellipse(25+(i*50),25+(j*50),mouseX/25)
    rect(0+(i*50),0+(j*50),mouseX/25)
    ellipse(50+(i*50),50+(j*50),-20+(mouseX/25))
    triangle(25+(i*50),12.5+(j*50),37.5+(i*50),37.5+(j*50),12.5+(i*50),37.5+(j*50))
  }
}
}
