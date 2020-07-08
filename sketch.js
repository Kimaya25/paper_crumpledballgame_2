const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var paper1,ground1;
var box1,box2;

var gameState = "launch";
function setup() {
	createCanvas(400, 400);
    engine = Engine.create();
	world = engine.world;

	
  paper1 = new paper(160,50,20,20);
  ground1 = new ground(200,380,400,20);
 box1 = new box(200,370,100,20);
 box2 = new box(245,340,20,100);
 box3 = new box(155,340,20,100);
 launcher1 = new launcher(paper1.body,{x:160,y:50});


	
  
}


function draw() {
  background("white");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
 box3.display();
 launcher1.display();


  
 
 
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body.paper1.body.position,{x:85,y:-85});
  }
}

function mouseDragged(){
  if (gameState === "launch"){
      Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});

      
  }
}

function mouseReleased(){
  launcher1.fly();
  gameState = "launched";
}



