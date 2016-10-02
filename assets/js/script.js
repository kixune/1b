//    T     R     O     N
//     (2 Player Snake) sans score
//
//  Create a competitive environment without keeping score
//
//   1. Two players submit their names
//   2. Proceed to quick brief on gameplay
// 2.5. Hit any key to continue
//   3. Players attempt to complete objective
// 3.5. (NON-MANDATORY) if players take too long, upon timer counter reaching 00
//    game board to shrink
//   4. Display Game Over and who won upon objective completion
//   5. Depending on 2.5, new game starts with player-who-won's name replacing Game Title

function init () {

  var playerOne = '';
  var playerTwo = '';

  function getName() {
    do {
      playerOne = prompt('Player 1:\nPlease enter your name');
    } while (playerOne === null || playerOne === '');
    do {
      playerTwo = prompt('Player 2:\nPlease enter your name');
    } while (playerTwo === null || playerTwo === '');
    alert(playerOne + ' is Red,\n' + playerTwo + ' is Yellow.\n\nYour directional keys are as displayed at the bottom.\n\nEliminate your opponents by blocking them..\n or laugh as they crash into themselves.\n\nBe careful not to suffer the same fate.');
  }getName();






}




$(document).ready(function() {
  var $container = $('#container');
  var PIXEL_SIZE = 1;
  var CONT_BORDER = 498;


  function SnakePiece(tail) {

    // Position
    this.x = 2;
    this.y = 2;

    // Velocity
    this.vx = 1;
    this.vy = 0;

    this.tail = tail;

    this.snake = $('<h4>');

    this.snake.appendTo($container);
    // this.snake.text = this.head;
  }


    // Snake birth
  SnakePiece.prototype = {


    move: function(x, y) {
      // Move the tail to the next point
      if (this.tail) {
          this.tail.move(this.x, this.y);
      }

      // Sets position of snake
      this.x = x;
      this.y = y;

      // Displays Snake's position
      this.snake.css({
        left: this.x * PIXEL_SIZE,
        top: this.y * PIXEL_SIZE,
      });
    },


    update: function() {
      // Updates position of snake based on it's velocity
      this.x += this.vx;
      this.y += this.vy;

      // Grants permission to pass through walls

      // right
      if ((this.vx === 1) && ((this.x + 35s) == CONT_BORDER)) {
        this.x = 0;
      }

      // left
      else if ((this.vx === -1) && (this.x === 0)) {
        this.x = CONT_BORDER - 35;
      }

      // top
      else if ((this.vy === -1) && (this.y === 0)) {
        this.y = CONT_BORDER - 16;
      }

      // bottom
      else if ((this.vy === 1) && (this.y == CONT_BORDER - 16)) {
        this.y = 0;
      }

      this.move(this.x, this.y);


    },

    // Used in key-mapping to dictate velocity
    direction: function(vx, vy) {
      this.vx = vx;
      this.vy = vy;
    },

    // Snake gains extra unit after the former
    extend: function () {
      var oldTail = this.tail;
      this.tail = new SnakePiece(oldTail);
      this.tail.snake[0].innerText = '•';
      this.tail.snake[0].className = 'white';
    }
  };


    // Create a head
    var red = new SnakePiece();
    var red_snake = red.snake[0];
    red_snake.innerText = '|';
    red_snake.className = 'red flip';

    // for (var i = 0; i < 100; i ++) {
    //   red.extend();
    // }



    var yellow = new SnakePiece();
    yellow.x = 470;
    yellow.y = 475;
    yellow.vx = -1;
    var yellow_snake = yellow.snake[0];
    yellow_snake.innerText = '|';
    yellow_snake.className = 'yellow left';
    // for (var i = 0; i < 7; i ++) {
    //   yellow.extend();
    // }








    setInterval(red.update.bind(red), 3);
    setInterval(yellow.update.bind(yellow), 3);



    function doKeyDown(evt) {
      switch (evt.keyCode) {
        case 87: //up
        red_snake.className = 'red up';
        red.direction(0, -1);
        break;

        case 83: //down
        red_snake.className = 'red down'
        red.direction(0, 1);
        break;

        case 65: //left
        red_snake.className = 'red left'
        red.direction(-1, 0);
        break;

        case 68: //right
        red_snake.className = 'red right'
        red.direction(1, 0);
        break;
      }
    }

    function doKeyDownTwo(evt) {
      switch (evt.keyCode) {
        case 38: //up
        yellow_snake.className = 'yellow up';
        yellow.direction(0, -1);
        break;

        case 40: //down
        yellow_snake.className = 'yellow down';
        yellow.direction(0, 1);
        break;

        case 37: //left
        yellow_snake.className = 'yellow left';
        yellow.direction(-1, 0);
        break;

        case 39: //right

        yellow_snake.className = 'yellow right';
        yellow.direction(1, 0);
        break;
      }
    }

    window.addEventListener('keydown', doKeyDown, true);
    window.addEventListener('keydown', doKeyDownTwo, true);


});
