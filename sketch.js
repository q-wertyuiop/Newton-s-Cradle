const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var bodies;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var roof1;
var rope2;
var rope3;
var rope4;
var rope5;
var bobDiameter;
function setup() {

	createCanvas(1000,600);

	bobDiameter = 2;
	
	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(500,500);
	bob2 = new Bob(550,500);
	bob3 = new Bob(600,500);
	bob4 = new Bob(650,500);
	bob5 = new Bob(700,500);
	roof1 = new Roof(600,25,600,20);
	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*50,0);
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter*25,0);
	rope3 = new Rope(bob3.body,roof1.body,-bobDiameter*0,0);
	rope4 = new Rope(bob4.body,roof1.body,-bobDiameter*-25,0);
	rope5 = new Rope(bob5.body,roof1.body,-bobDiameter*-50,0);
	
  
}

function draw() {

background("cyan");


  Engine.update(engine);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}


function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-60}); } }