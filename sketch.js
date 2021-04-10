
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg")
}



function setup() {
  createCanvas(400,400)
  
  
  ground=createSprite(200,200,400,400)
  ground.addImage(jungleImage)
  ground.scale = 2.5
  ground.velocityX = -2
  
  monkey=createSprite(60,340,50,50)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale = 0.1
  

  
}


function draw() {
 background("green")
  
  if(ground.x <0){
    ground.x=200
  }
  
  drawSprites()
}






