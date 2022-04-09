var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
 
}

function setup() {
  createCanvas(600,200);
  
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);

  
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  //set background color
  background("cyan");
  
  //console.log(trex.y)
  
  //jump when the space key is pressed
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8
  
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
}