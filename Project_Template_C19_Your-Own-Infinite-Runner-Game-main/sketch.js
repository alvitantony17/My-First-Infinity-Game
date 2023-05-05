var tom;
var tomImage;
var jerry;
var jerryImage;
var ground;
var groundImage;
var invisibleSky;
var invisibleGround;
var trap;
var trapImage;
var trap2;
var trap2Image;
var over;
var overImage;
var gameOver;
var gameOverImage;
var gameState="play"
var restart;
var restartImage;
var sound;
var score;




function preload(){
  tomImage=loadImage("tom.png")
  groundImage=loadImage("background.jpg")
  jerryImage=loadImage("jerry.png")
  trapImage=loadImage("trap.png")
  trap2Image=loadImage("trap2.png")
  overImage=loadImage("over.png")
  gameOverImage=loadImage("gameover.png")
  restartImage=loadImage("restart.png")
  sound=loadSound("song.mp3")

}

function setup(){
  createCanvas(1100,600)
  background("white")


  ground=createSprite(0,100,1100,600)
  ground.addImage("ground",groundImage)
  ground.scale=3
  ground.velocityX=-3

  invisibleSky=createSprite(200,170,500,330)
  invisibleGround=createSprite(300,610,400,100)
  invisibleSky.visible=false
  invisibleGround.visible=false
  

  
  tom=createSprite(100,500,50,20)
  tom.addImage("tom",tomImage)
  tom.scale=0.5
  
  jerry=createSprite(280,550,50,20)
  jerry.addImage("jerry",jerryImage)
  jerry.scale=0.2
  jerry.debug=false
  jerry.setCollider("circle",0,0,120)
  
  trap=createSprite(800,500,50,20)
  trap.addImage("trap",trapImage)
  trap.scale=0.1
  trap.velocityX=-15

  trap2=createSprite(800,300,50,50)
  trap2.addImage("trap2",trap2Image)
  trap2.scale=0.1
  trap2.velocityX=-15

  over=createSprite(480,350,50,20)
  over.addImage("over",overImage)
  over.scale=0.5
  over.visible=false

  gameOver=createSprite(480,150,50,20)
  gameOver.addImage("gameover",gameOverImage)
  gameOver.scale=0.5
  gameOver.visible=false

  restart=createSprite(680,150,50,20)
  restart.addImage("restart",restartImage)
  restart.scale=0.1
  restart.visible=false

  sound.play();


}

function draw(){
background(500)



if(ground.x<0){
  ground.x=ground.width/1
}


jerry.y= World.mouseY

jerry.collide(invisibleSky)
jerry.collide(invisibleGround)

if(trap.x<0){
  trap.x=Math.round(random(800,900))
  trap.y=Math.round(random(300,600))
}

if(trap2.x<0){
  trap2.x=Math.round(random(800,900))
  trap2.y=Math.round(random(300,600))
}

if(jerry.isTouching(trap)||jerry.isTouching(trap2)){
  
  jerry.visible=false
  over.visible=true
  trap2.velocityX=0
  trap.velocityX=0
  ground.velocityX=0
  tom.visible=false
  trap.visible=false
  trap2.visible=false
  gameOver.visible=true
  

}

  drawSprites();
}



