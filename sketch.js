var canvas;
var block1,block2,block3,block4;
var ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}



function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces
block1 = createSprite(100,500,100,30);
block1.shapeColor ="brown"

block2 = createSprite(250,500,100,30);
block2.shapeColor = "blue"

block3 = createSprite(400,500,100,30);
block3.shapeColor = "red"

block4 = createSprite(525,500,100,30);
block4.shapeColor = "yellow"




    //create box sprite and give velocity


    
 ball = createSprite(random(20,750),100,40,40);
 ball.shapeColor =rgb(250,250,250);
 ball.velocityX = 4;
 ball.velocityY = 10;

}

function draw() {
    background(rgb(169,169,169));
 edges = createEdgeSprites();
 ball.bounceOff(edges);

    //create edgeSprite
 
  if(block1.isTouching(ball) && ball.bounceOff(block1)){
   ball.shapeColor = "brown"
   
  
 }



 if(block2.isTouching(ball) && ball.bounceOff(block2)){
    ball.shapeColor = "blue"
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
    
  }
 


  if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = "red"
   
  }

  if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = "yellow"
    music.play();
  }

//add condition to check if box touching surface and make it box

drawSprites();


}