# Snake game
**Name:** Maria Cristina Di Termine

**Editted by:** Qaddafi Sezili (2018)

**Category:** Canvas HTML5 and Javascript

**Date:** February 2015
----------------------------------------------------------------------

**This is a simple classic 8 bit snake game created using the canvases of HTML5 and javascript.**

The important thing to know before start is that our snake is formed by a chain of elements (squares) and that the movement is allowed by moving the last square of the snake body to the front of it. 
This project is also builded using the module patterns for code structure.

## Instructions:
1. Create the canvas element in our html.
2. Draw the body of the snake and the food using canvases.
3. Create the structure of the snake and of the food.
4. Create a _checkCollision_ function to detect if the snake has touched itself.
5. Create the main function which has to run everything we need to play.
6. Use the _keyCode_ event to move the snake using the keyboard.


## The Snake

### How draw the snake with canvas:

```js
var bodySnake = function(x, y) {
        //This is the single square
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //This is the border of the square
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }
```

### The structure of the snake:

```js
var drawSnake = function() {
        //Initially the body of the snake will be formed by 5 squares.
        var length = 4;
        snake = [];
        
        //Using a for loop we push the 5 elements inside the array(squares).
        //Every element will have x = 0 and the y will take the value of the index.
        for (var i = length; i>=0; i--) {
        snake.push({x:i, y:0});
          }  
        }
```
### The movement of the snake:

```js
var snakeX = snake[0].x;
var snakeY = snake[0].y;

    if(direction == 'right') { 
      snakeX++; 
    } else if (direction == 'left') { 
      snakeX--; 
    } else if (direction == 'up') { 
      snakeY--; 
    } else if (direction == 'down') { 
      snakeY++; }
```

![Snake](https://raw.githubusercontent.com/Mariacristina88/Snake-game/master/img/snake.png)

### Additional notes by Qaddafi
```js

  Issue 1 (resolved)
  Yang ni saya edit part call food. 
  I create another same function but different name to call different type of food.
  However, I have an issue where the sysyem won't start when I create the same function.
  That is the problem so far.
  I also hereby the original source of code of the game named Backup file.

  Issue 2 (02/12/2018) *resolved.
  The system is display the score as normal. 
  It display the value of the eaten food (eg. 1 or 2)
  I have issue where I want to display the score as array (eg. Score: 1 , 1 , 2 , 1)
  I have not yet found the solution, I already apply the push() function but still haven't display the score as above.
  
  Issue 3 (05/12/18)
  I cannot reset the game after 4th counter.

```
