
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,680,width,20);
	paper = new Paper(200,450,70);
	dustbin = new DustBin(1200,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130})
	}
}



