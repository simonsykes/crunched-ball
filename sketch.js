
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var dustbinObj,paperObj,groundObj;
var world,engine;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj=new paper(200,450,70);
	groundObj=new ground(800,670,1600,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	
  paperObj.display();
  groundObj.display();
  dustbinObj.display();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});
	}
}



