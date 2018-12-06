var drawModule = (function() {
  var bodySnake = function(x, y) {
    ctx.fillStyle = "green";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = "darkgreen";
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  };

  var pizza = function(x, y) {
    ctx.fillStyle = "red"; //stroke
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "yellow";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  };

  var apple = function(x, y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "red";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }; //Additional food at here named apple.

  var scoreText = function() {
    var score_text = "Score: ";
    scoreArray.forEach(score => {
      score_text = score_text + " " + score;
    });
    ctx.fillStyle = "blue";
    ctx.fillText(score_text, 145, h - 5);
  }; // Display score in array here.

  var drawSnake = function() {
    var length = 4;
    snake = [];
    for (var i = length - 1; i >= 0; i--) {
      snake.push({ x: i, y: 0 });
    }
  };

  var paint = function() {
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);

    btn.setAttribute("disabled", true);
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if (direction == "right") {
      snakeX++;
    } else if (direction == "left") {
      snakeX--;
    } else if (direction == "up") {
      snakeY--;
    } else if (direction == "down") {
      snakeY++;
    }

    if (
      snakeX == -1 ||
      snakeX == w / snakeSize ||
      snakeY == -1 ||
      snakeY == h / snakeSize ||
      checkCollision(snakeX, snakeY, snake)
    ) {
      //restart game
      btn.removeAttribute("disabled", true);
      ctx.clearRect(0, 0, w, h);
      gameloop = clearInterval(gameloop);
      //window.alert("Your score is : display arrayScore");  //to display the score after die
      return;
    }

    if (eat < 4) {
      //create condition where snake only need eat 4 times to complete the game

      if (snakeX == food.x && snakeY == food.y) {
        var tail = { x: snakeX, y: snakeY }; //If snake eats/ collide with the food. Create a new head instead of moving the tail.
        scoreArray.push(score_food_1); // push score for food 1
        createFood(); //Create new food
        eat++; //create counter
      } else if (snakeX == food2.x && snakeY == food2.y) {
        var tail = { x: snakeX, y: snakeY }; //If snake eats/ collide with the food2. Create a new head instead of moving the tail.
        scoreArray.push(score_food_2); // push score for food 2
        createFood2(); //Create new food2.
        eat++; //create counter
      } else {
        var tail = snake.pop(); //pops out the last cell.
        tail.x = snakeX;
        tail.y = snakeY;
      }
      //The snake can now eat the food.
      snake.unshift(tail); //puts back the tail as the first cell

      for (var i = 0; i < snake.length; i++) {
        bodySnake(snake[i].x, snake[i].y);
      }

      pizza(food.x, food.y);
      apple(food2.x, food2.y);
      scoreText();
    } else {
      
      // Display the score into html
      /*document.getElementById('theScore').value = scoreString;
      var scoreString = function() {
        return scoreArray.toString();
      };*/

      document.getElementById('theScore').value = scoreString;
      var scoreString = function() {
        var score = new scoreArray();
        score.toString();
      }
      
      window.alert("Your score is : your saved score here.."); // Display arrayScore and end the game
      btn.removeAttribute("disabled", true); //Reset the game
      ctx.clearRect(0, 0, w, h);
      gameloop = clearInterval(gameloop);
    } // close eat loop condition
  }; // close var paint function

  var createFood = function() {
    food = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };

    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (
        (food.x === snakeX && food.y === snakeY) ||
        (food.y === snakeY && food.x === snakeX)
      ) {
        food.x = Math.floor(Math.random() * 30 + 1);
        food.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  };

  var createFood2 = function() {
    food2 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };

    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (
        (food2.x === snakeX && food2.y === snakeY) ||
        (food2.y === snakeY && food2.x === snakeX)
      ) {
        food2.x = Math.floor(Math.random() * 30 + 1);
        food2.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  };

  var checkCollision = function(x, y, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].x === x && array[i].y === y) return true;
    }
    return false;
  };

  var initValues = function() {
    eat = 0;
    scoreArray = [];
  };
  
  var init = function() {
    direction = "down";
    initValues();
    drawSnake();
    createFood();
    createFood2();
    gameloop = setInterval(paint, 80);
  };

  return {
    init: init
  };
})();
