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

  var playerOne = "";
  var playerTwo = "";

  function getName() {
    do {
      playerOne = prompt("Player 1:\nPlease enter your name");
    } while (playerOne === null || playerOne === "");
    do {
      playerTwo = prompt("Player 2:\nPlease enter your name");
    } while (playerTwo === null || playerTwo === "");
    alert(playerOne + " is Red,\n" + playerTwo + " is Yellow.\n\nYour directional keys are as displayed at the bottom.\n\nEliminate your opponents by blocking them..\n or laugh as they crash into themselves.\n\nBe careful not to suffer the same fate.");
  }getName();






}
// init();



$(document).ready(function() {
  var $container = $("#container");
  var PIXEL_SIZE = 1;
  var CONT_BORDER = 498;


  function HebiUnit(x, y, vx, vy, classname, word, tail) {

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;


    this.$nake = $("<h4>");
    this.classname = classname;
    this.word = word;
    this.tail = tail;
  }


    // Snake birth
  HebiUnit.prototype = {
    populate: function() {
      this.$nake.addClass(this.classname);
      this.$nake.html(this.word);
      this.$nake.appendTo($container);

    },

    move: function(x, y) {
      // Move the tail to the next point
      if (this.tail) {
          this.tail.move(this.x, this.y);
      }

      // Sets position of snake
      this.x = x;
      this.y = y;

      // Displays Snake's position
      this.$nake.css({
        left: this.x * PIXEL_SIZE,
        top: this.y * PIXEL_SIZE,
      });
    },


    update: function() {
      // Updates position of snake based on it's velocity
      this.x += this.vx;
      this.y += this.vy;

      // Grants permission to pass through walls
      if ((this.vx === 1) && ((this.x + 16) == CONT_BORDER)) {
        this.x = 0;
      } else if ((this.vx === -1) && (this.x === 0)) {
        this.x = CONT_BORDER - 16;
      } else if ((this.vy === -1) && (this.y === 0)) {
        this.y = CONT_BORDER - 16;
      } else if ((this.vy === 1) && (this.y == CONT_BORDER - 16)) {
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
    restOfSnake: function (i) {
      console.log("rest of snake"+i);
      var oldTail = this.tail;
      this.tail = new HebiUnit(0, 0, 1, 0, "red", "+", oldTail);
    }
  };


    // Create a head
    var red = new HebiUnit(0, 0, 1, 0, "red", "|");
    // Make its tail
    for (var i = 1; i < 7; i++) {
      red.restOfSnake(i);
      red.populate();

    }
    // var yellow = new HebiUnit(477, 480, -1, 0, "yellow", "_");






    red.populate();
    // yellow.populate();

    setInterval(red.update.bind(red), 3);
    // setInterval(yellow.update.bind(yellow), 10);

    console.log(red);

    function doKeyDown(evt) {
      switch (evt.keyCode) {
        case 87: //up
        red.direction(0, -1);
        break;

        case 83: //down
        red.direction(0, 1);
        break;

        case 65: //left
        red.direction(-1, 0);
        break;

        case 68: //right
        red.direction(1, 0);
        break;
      }
    }

    // function doKeyDownTwo(evt) {
    //   switch (evt.keyCode) {
    //     case 38: //up
    //     yellow.direction(0, -1);
    //     break;
    //
    //     case 40: //down
    //     yellow.direction(0, 1);
    //     break;
    //
    //     case 37: //left
    //     yellow.direction(-1, 0);
    //     break;
    //
    //     case 39: //right
    //     yellow.direction(1, 0);
    //     break;
    //   }
    // }

    window.addEventListener('keydown', doKeyDown, true);
    // window.addEventListener('keydown', doKeyDownTwo, true);


});
