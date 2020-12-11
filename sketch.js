var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var r1Sprite,r2Sprite,r3Sprite
var r1Body,r2Body,r3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	r1Sprite=createSprite(200,680,20,100);
	r1Sprite.shapeColor=color(225);

	r2Sprite=createSprite(300,690,200,20);
	r2Sprite.shapeColor=color(225);

	r3Sprite=createSprite(400,680,20,100);
	r3Sprite.shapeColor=color(225);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	r1Body = Bodies.circle(300, 610 , 5 , {restitution:0, isStatic:true});
	World.add(world, r1Body);
	r2Body = Bodies.circle(400 , 650 , 5 , {restitution:0, isStatic:true});
	World.add(world, r2Body);
	r3Body = Bodies.circle(500 , 610 , 5, {restitution:0, isStatic:true});
	World.add(world, r3Body);
	
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  r1Sprite.x= r1Body.position.x 
  r1Sprite.y= r1Body.position.y 
  r2Sprite.x= r2Body.position.x 
  r2Sprite.y= r2Body.position.y 
  r3Sprite.x= r3Body.position.x 
  r3Sprite.y= r3Body.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
 Matter.Body.setStatic(r1Body,true);
 Matter.Body.setStatic(r2Body,true);
 Matter.Body.setStatic(r3Body,true);

    
  }
}



