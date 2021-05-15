
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.World;

	//Create the Bodies Here.
    paper=new Paper(100,650,5)
	dustbin1=new Dustbin(600,690,20,50)
	dustbin2=new Dustbin(580,690,50,20)
	dustbin3=new Dustbin(620,690,50,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  drawSprites();
 
}



