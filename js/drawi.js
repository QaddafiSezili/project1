
var drawModule = (function () { 

  var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }

  var pizza = function(x, y) {
        ctx.fillStyle = 'red'; //stroke 
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }

  var apple = function(x, y) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  } //Additional food at here named apple.

  var scoreText = function() {
    var score_text = "Score: "+score;
    scoreArray.forEach(score => {
      score_text = score_text +" "+ score;
    })
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 145, h-5);
  }

  var drawSnake = function() {
      var length = 4;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }  
  }
  //coding pushData sangkut

  var pushData = function() {
    scoreText.push(score);

    var pval = ", ";
  }
   
  var paint = function(){
      ctx.fillStyle = 'lightgrey';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, w, h);

      btn.setAttribute('disabled', true);
      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

      if (direction == 'right') { 
        snakeX++; }
      else if (direction == 'left') { 
        snakeX--; }
      else if (direction == 'up') { 
        snakeY--; 
      } else if(direction == 'down') { 
        snakeY++; }

      if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
          //restart game
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;          
        }

        // Make alteration at this line.
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //If snake eats/ collide with the food. Create a new head instead of moving the tail.
          pushData(score_food_1);

          createFood(); //Create new food when snake eat food.
        } else if(snakeX == food2.x && snakeY == food2.y) {
          // Put same condition like you eat first food.
          var tail = {x: snakeX, y: snakeY}; //If snake eats/ collide with the food2. Create a new head instead of moving the tail.
          pushData(score_food_2);
          
          createFood2();//Create new food when snake eat food2.
        } else {
          var tail = snake.pop(); //pops out the last cell.
          tail.x = snakeX; 
          tail.y = snakeY;
        }

        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        } 
        
        /* letak coding score tu dekat sini. However this code does not work. 
        var password = function collectScore(scoreText){
          for (var i = 0; i <= 4; i++) {
            score.push(score_text);
          }

        } */
        
        //pushData(); <-- coding yang ni sangkut
        pizza(food.x, food.y); 
        apple(food2.x, food2.y);
        scoreText();
  }

  var createFood = function() {
      food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 30) + 1);
          food.y = Math.floor((Math.random() * 30) + 1);
        }
      }
  }

  var createFood2 = function() {
      food2 = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food2.x === snakeX && food2.y === snakeY || food2.y === snakeY && food2.x===snakeX) {
          food2.x = Math.floor((Math.random() * 30) + 1);
          food2.y = Math.floor((Math.random() * 30) + 1);
        }
      }
  }

  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  }

  var init = function(){
      direction = 'down';
      drawSnake();
      createFood();
      createFood2();
      gameloop = setInterval(paint, 80);
  }


    return {
      init : init
    };

    
}());
