var bgImg,bg;
var tile,tilesImg;
var gameOverImg,gameOver;
var soundingTilesImg,soundingTiles;
var resetButtonImg,resetButton;
var obstacleImg,obstacle;
var tile2,tile4,tile6,tile8,tile10,tile12,tile14;


score = 0;

var PLAY = 1;
var END = 0; 
gameState = PLAY;          


function preload(){

  bgImg = loadImage("bg.PNG")
  tilesImg = loadImage("tiles.PNG")
  gameOverImg = loadImage("gameOver.png")
  soundingTilesImg = loadImage("soundingTiles.png")
  resetButtonImg = loadImage("resetButton.png")
  obstacleImg = loadImage("obstacle.png")
  
  
}

function setup() {
  createCanvas(1200,567);

  bg = createSprite(600,400,1,1);
  bg.addImage(bgImg);
  bg.scale = 2

  gameOver = createSprite(600,150,1,1);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 2
 

  resetButton = createSprite(1000,500);
  resetButton.addImage(resetButtonImg);
  resetButton.scale = 0.3

  soundingTiles = createSprite(600,50)
  soundingTiles.addImage(soundingTilesImg);

  

  //score = 0;
  
}

function draw() {
 
  background("white");  
  
 
  obstacles()
 
 


if(gameState === PLAY){

  gameOver.visible = false;
  resetButton.visible = false;

  tiles();
  tile1()
  tile3()
  tile5()
  tile7()
  tile9()
  tile11()
  tile13()

  
  if(mousePressedOver(tile)) {
    score = score + 1;
    tile.visible = false;
    
   
   }

   if(mousePressedOver(tile2)) {
    score = score + 1;
    tile2.visible = false;
   
   }

   if(mousePressedOver(tile4)) {
    score = score + 1;
    tile4.visible = false;
   
   }
  
   if(mousePressedOver(tile6)) {
    score = score + 1;
    tile6.visible = false;
   
   }
  
   if(mousePressedOver(tile8)) {
    score = score + 1;
    tile8.visible = false;
   
   }

   if(mousePressedOver(tile10)) {
    score = score + 1;
    tile10.visible = false;
   
   }

   if(mousePressedOver(tile12)) {
    score = score + 1;
    tile12.visible = false;
   
   }
  
   if(mousePressedOver(tile14)) {
    score = score + 1;
    tile14.visible = false;
   
   }

  

  if(mousePressedOver(obstacle)){
    gameState = END;
  }
  
  
  
 

 
}


if(gameState === END){

  tile.velocityY = 0;
  obstacle.velocityY = 0;

  gameOver.visible = true;
  resetButton.visible = true;

  obstacle.visible = false;
  tile.visible = false;

  if(mousePressedOver(resetButton)){

    reset();
  }

}

  drawSprites();

  textSize(28)
  stroke("red")
  fill("black")
  strokeWeight(2)
  text("Score: "+ score, 900,130);
}




function tiles(){
  if (frameCount % 100 === 0){
    
    tile = createSprite(random(1000,200),0,40,40)
    tile.addImage(tilesImg)
    tile.velocityY = 7
    tile.scale = 1.2;


    }

  
   
   
  }

  function tile1(){

    if (frameCount % 110 === 0){
    
      tile2 = createSprite(random(1000,200),0,40,40)
      tile2.addImage(tilesImg)
      tile2.velocityY = 7
      tile2.scale = 1.2;
  
    
      }

  }

  function tile3(){

    if (frameCount % 120 === 0){
    
      tile4 = createSprite(random(1000,200),0,40,40)
      tile4.addImage(tilesImg)
      tile4.velocityY = 7
      tile4.scale = 1.2;
  
      
      }

  }

  function tile5(){
    if (frameCount % 130 === 0){
      
      tile6 = createSprite(random(1000,200),0,40,40)
      tile6.addImage(tilesImg)
      tile6.velocityY = 7
      tile6.scale = 1.2;
  
      
      }
  
     
     
     
    }
  
    function tile7(){
      if (frameCount % 140 === 0){
        
        tile8 = createSprite(random(1000,200),0,40,40)
        tile8.addImage(tilesImg)
        tile8.velocityY = 7
        tile8.scale = 1.2;
    
        }
    
       
       
       
      }
    
      function tile9(){
    
        if (frameCount % 150 === 0){
        
          tile10 = createSprite(random(1000,200),0,40,40)
          tile10.addImage(tilesImg)
          tile10.velocityY = 7
          tile10.scale = 1.2;
      
         
          }
    
      }
    
      function tile11(){
    
        if (frameCount % 160 === 0){
        
          tile12 = createSprite(random(1000,200),0,40,40)
          tile12.addImage(tilesImg)
          tile12.velocityY = 7
          tile12.scale = 1.2;
        
          
          }
    
      }
    
      function tile13(){
        if (frameCount % 170 === 0){
          
          tile14 = createSprite(random(1000,200),0,40,40)
          tile14.addImage(tilesImg)
          tile14.velocityY = 7
          tile14.scale = 1.2;
      
          
          }
      
         
         
         
        }
      
    
    




  function obstacles(){

    if (frameCount % 170 === 0){

      obstacle = createSprite(random(1000,200),0,40,40) 
      obstacle.addImage(obstacleImg)
      obstacle.velocityY = 7
      obstacle.scale = 0.7

    }
  }

  function reset(){

  gameState = PLAY;

  tile.velocityY = 5;
  obstacle.velocityY = 5;

  gameOver.visible = false;
  resetButton.visible = false;

  obstacle.visible = true;
  tile.visible = true;

  score = 0;

  

  }


