
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;



function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

BOB1 = new Bob(100,480,25)
BOB2 = new Bob(150,480,25)
BOB3 = new Bob(200,480,25)
BOB4 = new Bob(250,480,25)
BOB5 = new Bob(300,480,25)

ROOF = new Roof(400,200,400,30)
rope1 = new Rope(BOB1.body,ROOF.body,-100)
rope2 = new Rope(BOB1.body,ROOF.body,-50)
rope3 = new Rope(BOB1.body,ROOF.body,-0)
rope4 = new Rope(BOB1.body,ROOF.body,+50)
rope5 = new Rope(BOB1.body,ROOF.body,100)


  Engine.run(engine);
}


function draw() {

  background(0);
  ROOF.display();
  BOB1.display();
  BOB2.display();
  BOB3.display();
  BOB4.display();
  BOB5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(BOB1.body,BOB1.body.position,{x:-55,y:-55})

	}
}


