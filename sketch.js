var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("ship.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-2.png","ship-1.png","ship-2.png","ship-2.png");


}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.5;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("ship-1",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  sea.velocityY = -1;
  sea.x = -1;
  sea.velocityX = -5;
  sea.velocityX = -1;
  

  
    
  drawSprites();
}
