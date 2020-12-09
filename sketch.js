var Charlie, backgroundImage, background1;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5;
var arrow;
var CharlieImg, form;
var gameState = 0;
var arrowGroup, enemyGroup;

function preload(){
  backgroundImage = loadImage("forest.png");
  enemy1 = loadImage("monster2.jpg");
  enemy2 = loadImage("monster2.jpg");
  enemy3 = loadImage("monster2.jpg");
  enemy4 = loadImage("monster2.jpg");
  enemy5 = loadImage("monster2.jpg");
  CharlieImg = loadImage("charlie.png");
  background2Image = loadImage("lab.jpg");
}

function setup() {
 //create the canvas
 createCanvas(displayWidth-60,displayHeight-60);
  
 //creating background
 background1 = createSprite(0, 0, 1200, 400);
 background1.addImage(backgroundImage);
 background1.scale = 7.0;
 background1.x = background1.width/2;
 background1.visible = false;
 background2 = createSprite(0, 0, 1200, 400);
 background2.addImage(background2Image);
 background2.scale = 7.0;
 background2.x = background2.width/2;
 background2.visible = false;

 
 // creating bow to shoot arrow
 Charlie = createSprite(displayWidth/2, (displayHeight/2)-50, 50, 50);
 Charlie.addImage(CharlieImg); 
 Charlie.scale = 0.5;
  form = new Form();
  enemyGroup = new Group();
  arrowGroup = new Group();
}

function draw() {
  Charlie_action();
  if(gameState === 0){
    background(255);
    form.display();
  }
  else if(gameState === 1){
    background1.visible = true;
    background1.velocityX = -1;
    if(background1.x < 0){
      background1.x = background1.width/2;
    }
    spawnEnemies();
    
    if (arrowGroup.isTouching(enemyGroup))
    {
      arrowGroup.destroyEach();
      enemyGroup.destroyEach();
      gameState = 2;

    }
    
  }
  else if(gameState === 2)
  {
    background1.visible = false;
    background2.visible = true;
    if(background2.x < 0){
      background2.x = background2.width/2;
    }
  }
}

function spawnEnemies(){
  if(frameCount%120 === 0){
    enemy = createSprite(displayWidth,displayHeight-40,50,50);
    enemy.velocityX = -4;
    enemy.y = Math.round(random(0, displayHeight));
    var rand = Math.round(random(2,3));
    switch(rand){
      case 1: enemy.addImage("enemy", enemy1);
      break;
      case 2: enemy.addImage("enemy", enemy2);
      break;
      case 3: enemy.addImage("enemy", enemy3);
      break;
      case 4: enemy.addImage("enemy", enemy4);
      break;
      case 5: enemy.addImage("enemy", enemy5);
      break;
      default: break;
    }
    enemy.scale = 0.2;
    enemy.lifetime = displayWidth/4;
    enemyGroup.add(enemy);
  }
}
function createArrow(){
  arrow = createSprite(Charlie.x,Charlie.y,60,10);
  arrow.velocityX = 4;
  arrow.lifetime = (displayWidth-60)/4;

  arrowGroup.add(arrow);


}

function Charlie_action(){
  if(keyDown("SPACE")){
    createArrow();
  }
  else if(keyDown(LEFT_ARROW)){
    Charlie.velocityX = -3;
  } 
  else if(keyDown(RIGHT_ARROW)){
    Charlie.velocityX = 3;
  } 
  else if(keyDown(UP_ARROW)){
    Charlie.velocityY = -3;
  }
  else if(keyDown(DOWN_ARROW)){
    Charlie.velocityY = 3;
  }
  drawSprites();
}
