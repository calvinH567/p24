
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
	world = engine.world;
	Engine.run(engine)
	hammer = new Hammer(20,20,20,20);
	stone = new Stone(200,400,20,20)
	ground = new Ground(400,700,800,100);
	rubber = new Rubber(500,400,20,20)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine)
  //drawSprites();
 stone.display();
 ground.display();
 rubber.display();
 hammer.display();
 

 hammer.body.position.x = mouseX;
 hammer.body.position.y = mouseY;
 
}



