var nemo;
var bg;
var obstacle1,obstacle1Img,obstacle2,obstacle2Img,obstacle3,obstacle3Img;
var gameState = "serve";
var life=3;
var heart1,heart1Img,heart2,heart2Img,heart3,heart3Img;

function preload() {
  bgImg = loadImage("bg.png")
  nemoImg = loadImage("nemo.png")
  obstacle1Img = loadImage("obstacle1.png")
  obstacle2Img = loadImage("obstacle2.png")
  obstacle3Img = loadImage("obstacle3.png")
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")
}

function setup() {
  createCanvas(1000,600);
 // background("blue");  

  sea = createSprite(200,200)
  sea.addImage(bgImg);

  nemo = createSprite(50,200,50,50);
  nemo.addImage(nemoImg);
  nemo.scale = 0.2;


}

function draw() {

 
  
 
  
  if(gameState==="serve"){
 //  nemo.visible=false;
    fill("black");
    textSize(25);
    text("Press Space to Play",70,250);

  }  
  
  if(keyDown("space")){
    gameState="play";
  }
  
  if(gameState=="play"){
  spawnobstacle1();
  spawnobstacle2();
  spawnobstacle3();
  handleNemo();

  if(life===3){
    heart3 = createSprite(300,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.2
    
  }
  if(life===2){
   heart2 = createSprite(300,40,20,20)
   heart2.addImage("heart2",heart2Img)
   heart2.scale = 0.2

  }
  if(life===1){
   heart1 = createSprite(300,40,20,20)
   heart1.addImage("heart1",heart1Img)
   heart1.scale = 0.2
  
  }

  //go to gameState "lost" when 0 lives are remaining
  if(life===0){

    gameState = "end";
    
  }

/*  if(nemo.collide(obstacle1) || nemo.collide(obstacle2) || nemo.collide(obstacle3)){
    obstacle1.destroy()

    life = life-1
    } */
  }

  if (gameState=="end") {
    text("GameOver",80,250)
  }
  
  drawSprites()}
  
 function spawnobstacle1() {
  
  if (World.frameCount%70===0) {
  obstacle1 = createSprite(350,random(50,350),50,50);
  obstacle1.addImage(obstacle1Img);
  obstacle1.velocityX=-4;
  obstacle1.scale=0.2;
  }
  }
  
 function spawnobstacle2() {
  
  if (World.frameCount%110===0) {
  obstacle2 = createSprite(350,random(50,350),50,50);
  obstacle2.addImage(obstacle2Img);
  obstacle2.velocityX=-5;
  obstacle2.scale=0.2;
  } 
  } 
  
 function spawnobstacle3() {
  
  if (World.frameCount%150===0) {
  obstacle2 = createSprite(350,random(50,350),50,50);
  obstacle2.addImage(obstacle3Img);
  obstacle2.velocityX=-7;
  obstacle2.scale=0.2;
  }
  } 
  
function handleNemo() {

  if (keyDown("up")) {
   nemo.y=nemo.y-12;
  }
  
  if (keyDown("down")) {
  nemo.y=nemo.y+12;
  }

}