const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var city;
var hotel;
var school;
var shop;
var coins;
var girl;
var background1;
var schools=[]
var obstacle
var obstaclesgroup

function preload(){
    backgroundImg = loadImage("./assets/city.png")
    schoolImg = loadImage("./assets/building.png")
    hotelImg = loadImage("./assets/hotel.png")
    coinsImg = loadImage ("./assets/goldCoin.png")
    girlImg = loadImage("./assets/girl2.png")
    shopImg = loadImage("./assets/School-building.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  background1.addImage(backgroundImg)
  background1.setVelocity(-0.5,0) 
  background1.scale= 3
engine = Engine.create();
  world = engine.world;
  

school1 = new School(windowWidth-150,windowHeight-15,400,800)
obstaclesgroup = new Group()
girl = createSprite(100,windowHeight-80,120,140)
girl.addImage(girlImg)
girl.scale=0.2

ground = createSprite(windowWidth/2,windowHeight-10,windowWidth,20)

}

function draw(){
    background(backgroundImg)
    drawSprites()
    if(background1.position.x<550){
      background1.position.x =windowWidth/2
    }
    
   
    girl.display()
    
    Engine.update(engine);
    
    spawnobstacles()
    
    if(girl.collide(obstaclesgroup)){
      swal({ title: `Game Over`, 
        text: "Oops you lost the game...!!!", 
        imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png", 
        imageSize: "100x100", 
        confirmButtonText: "Thanks For Playing" }); }
        girl.collide(ground)
      }
      
    
   

function keyPressed(){
     
  if(keyDown(UP_ARROW)){
    girl.setVelocity(0,-4)
    console.log("jumpgirl")
  }


  
}
function keyReleased(){
  if(keyDown(UP_ARROW)){
    girl.setVelocity(0,2)
}

}

    function spawnobstacles(){
    if(frameCount%240===0){
      obstacle= createSprite(windowWidth,windowHeight-70,20,50)
      obstacle.scale=0.5     
      obstacle.lifetime=320 
      rand=Math.round(random(1,6))
      obstaclesgroup.add(obstacle)
      obstacle.setVelocity(-2,0)
      switch(rand){
  
        case 1:
          obstacle.addImage(schoolImg)
          break;
  
        case 2:
        obstacle.addImage(schoolImg)
        break;
  
       case 3:
         obstacle.addImage(shopImg)
        break;
  
        case 4:
        obstacle.addImage(shopImg)
        break;
  
        case 5:
        obstacle.addImage(hotelImg)
        break; 
                  
        case 6:
        obstacle.addImage(hotelImg)
        break;
  
        default:
          break;
            
      }
    }
  }

  function collide(body,sprite,a)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=a)
            {
              
               return true; 
            }
            else{
              return false;
            }
         }
}

