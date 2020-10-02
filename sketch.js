
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  monkey=createSprite(80,315,20,20) ;
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1



ground = createSprite (400,350,900,10) ;
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground);
}
  


function draw() {
  background("white");
var survivalTime=0;
  
  if(foodGroup.collide(ground)){
    banana.velocityX=-3;
  }
 if(monkey.isTouching(obstaclesGroup)){
    obstacle.velocityX=0;
   banana.velocityX=0;
   banana.velocityY=0;

  }
  else{
  if(monkey.isTouching(foodGroup)){
  foodGroup.destroyEach();
}
   
     
     
  }
  if(keyDown("space") && monkey.y >= 300) {
 monkey.velocityY = -20;
 }
  monkey.velocityY = monkey.velocityY + 0.8;
  if (ground.x < 0){
ground.x = ground.width/2;
}

  
    
 
  
  
 
monkey.collide(ground);

stroke("white");

textSize(20);

fill("white");

text("Score: "+ score, 500,50);

stroke("black");

textSize(20);

fill("black");

survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);
spawnbanana();
spawnobstacle();  
drawSprites();
  
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 130 === 0) {
    banana = createSprite(120,100,50,50);
    banana.x = Math.round(random(120,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityY = 3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
   
    
    foodGroup.add(banana);
  }
}

function spawnobstacle() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(400,315,50,50);
    obstacle.addImage(obstaceImage);
    obstacle.debug = true;
     obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
     
    
    obstaclesGroup.add(obstacle);
    
  
  }
}
    
     



