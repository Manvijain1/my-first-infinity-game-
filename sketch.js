var   uniImg;
var starImg;
var astImg;
var rocImg;
var starO;
var astO;
var score = 0;
var play = 1;
var end = 0;
var gameState = 1;
var rockImg;
var batImg;

function preload(){
  uniImg = loadImage ("space.png");
  starImg = loadImage ("star.png");
  astImg = loadImage("aste.png");
rocImg = loadImage("rocket.png");
gameoverImg = loadImage("gameover.png");
restartImg  = loadImage("restart.png");
rockImg = loadImage("rock.png");
batImg = loadImage ("bat.png");


}



function setup() {
 createCanvas(500,500);

 uni = createSprite(250,250,200,10);
 uni.addImage(uniImg);
 uni.scale = 5;
 gameover = createSprite (250,250);
 gameover.scale = 0.8;
gameover.addImage(gameoverImg);
gameover.visible  = false;

restart = createSprite(240,320);
restart.scale = 0.05;
restart.addImage(restartImg);
restart.visible = false;

rocket = createSprite(250,450);
rocket.addImage(rocImg);
rocket.scale = 0.4; 

  


starO = new Group ();
astO = new Group ();
batO = new Group ();
rockO = new Group ();
}





function draw() {
 background ("white");


 if (gameState === play){
  edges= createEdgeSprites();
   rocket.collide(edges);
   rocket.setCollider("circle",0,0,50);
   //rocket.debug = true;

   if(uni.y > 500 ){
    uni.y = height/2;
  }
  uni.velocityY = 3;
if (keyDown("up")){
rocket.velocityY = -4;
}
if (keyDown("right")){
rocket.velocityX = 4;
}

if (keyDown("down")){
  rocket.velocityY = 4;
}

if (keyDown("left")){
  rocket.velocityX = -4;
}

rocket.velocityY = rocket.velocityY +0.3;
createBat ();
createRock();
  createStar ();
createAst ();

if ( rocket.isTouching(astO) ){
  gameState = end;
}

if (rocket.isTouching(starO)){
  score = score+5;
  starO.destroyEach ();
}

if ( rocket.isTouching(rockO) ){
  gameState = end;
}
if (rocket.isTouching(batO)){
  score = score+10;
  
  batO.destroyEach ();
}


 }

 if (gameState === end ){
   gameover.visible = true;
   restart.visible = true;
   uni.velocityY = 0 ;
   rocket.velocityY = 0;
   rocket.velocityX = 0;
   if (mousePressedOver(restart)){
 reset ();
   }
 }

  

drawSprites();

textSize (20);
stroke("RED")
text("SCORE :"+ score,50,50)


}





function createStar (){
 

    if (frameCount % 150 === 0){
     star = createSprite(200,10);
      star.addImage(starImg);  
      star.x = Math.round(random(50,450));
      star.scale = 0.3;
      star.velocityY = 3;
      star.lifetime = 150;
      rocket.depth = star.depth+1;
      starO.add(star);
    }
  }


  function createAst(){

    if (frameCount % 150 === 0){
     ast= createSprite(200,10);
       ast.addImage(astImg);  
       ast.x = Math.round(random(50,450));
       ast.scale = 0.09;
       ast.velocityY = 3;
       ast.lifetime = 150;
       rocket.depth = ast.depth + 1;
       astO.add(ast);
     }
  }

  function createBat(){
    if (frameCount % 150 === 0){
      bat = createSprite(200,10);
        bat.addImage(batImg);  
        bat.x = Math.round(random(50,450));
        bat.scale = 0.16;
        bat.velocityY = 3;
        bat.lifetime = 150;
        rocket.depth = bat.depth + 1;
        batO.add(bat);
      } 
  }


function createRock (){
  if (frameCount % 150 === 0){
    rock= createSprite(200,10);
      rock.addImage(rockImg);  
      rock.x = Math.round(random(50,450));
      rock.scale = 0.025;
      rock.velocityY = 3;
      rock.lifetime = 150;
      rocket.depth = rock.depth + 1;
      rockO.add(rock);
    }
  }


  function reset(){
    gameState  = play;
    gameover.visible = false;
    restart.visible = false;
   rocket.addImage(rocImg);
  batO.destroyEach();
  rockO.destroyEach ();
   starO.destroyEach ();
   astO.destroyEach ();
    score = 0;
  }