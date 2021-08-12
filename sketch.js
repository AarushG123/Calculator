var  input1, input2
var v1, v2
var b1
var answer

function setup() {
  createCanvas(400,400);
  input1 = createInput("Enter the first value")
  input1.position(100,100)
  input2 = createInput().attribute("placeholder","Enter the second value")
  input2.position(100,150)
  b1 = createButton("add")
  b1.position(100,250)
  b1.mousePressed(addition)

  
}

function draw() 
{
  background(30);
  v1 = input1.value()
  v2 = input2.value()
}

function addition(){
  console.log(v1+v2)
}




