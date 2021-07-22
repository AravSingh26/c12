var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassImg = loadImage("grass.png")
  orangeImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
  redImg=loadImage("redImage.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=World.mouseX



  edges= createEdgeSprites();
  rabbit.collide(edges);

  SpawnApples()
  Spawnleaves()
  Spawnredleaves()
  
  drawSprites();
}


function SpawnApples(){
  if(frameCount%80===0){
    apples=createSprite(100,10,10,10)
  apples.x=Math.round(random(50,350))
  apples.addImage(appleImg)
  apples.scale=0.05
  apples.velocityY=3
  apples.lifetime=140;
  }
}

function Spawnleaves(){
  if(frameCount%80===0){
    leaves=createSprite(50,80,10,10)
  leaves.x=Math.round(random(10,300))
  leaves.addImage(leafImg)
  leaves.scale=0.05
  leaves.velocityY=3
  leaves.lifetime=140;
  }
}

function Spawnredleaves(){
  if(frameCount%80===0){
    redleaves=createSprite(200,40,10,10)
  redleaves.x=Math.round(random(10,400))
  redleaves.addImage(redImg)
  redleaves.scale=0.05
  redleaves.velocityY=3
  redleaves.lifetime=140;
  }
}