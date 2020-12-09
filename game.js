class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state

        })
    }

    async start(){
        if (gameState === 0)
        {
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        lab.velocityX = -3;
  if (lab.x < 0)
  {
    lab.x = lab.width/2;
  }
  if (keyDown(UP_ARROW)){
    charlie.velocityY = -2;
  }

  if (keyDown(DOWN_ARROW)){
    charlie.velocityY = 2;
  }

  if (keyDown(LEFT_ARROW)){
    charlie.velocityX = -2;
  }

  if (keyDown(RIGHT_ARROW)){
    charlie.velocityX = 2;
  }
  spawnEnemy();
  if (keyDown("space"))
  {
    createArrow();

  }

  if (arrowGroup.isTouching(monsterGroup)){
    monsterGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;


  
  }
  

  drawSprites();
        
    }
}