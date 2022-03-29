var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path")
  boyImg = loadAnimation("Runner-1.png, Runner-2.png")
 
}

function setup(){
  
  createCanvas(400,400);
  
  path = createSprite(400,400,200,200)
  path.setAnimation("pathImg")
  path.x = path.width/2;
  path.scale=1.2;

  boy = createSprite(400,400,200,200)
  boy.setAnimation("boyImg")
  boy.scale=0.08;
  
  //crie um limite à esquerda
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visibility = false

  //crie um limite à direita
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visibility = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouse.x
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
