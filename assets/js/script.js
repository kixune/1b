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
  function Hebi(x, y, vx, vy, classname, word) {

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    // this.$nake = "<h4 class=" + classname + ">" + word + "</h4>";

    this.$nake = $("<h4>");
    this.classname = classname;
    this.word = word;
  }

    // var yellow = new Hebi(100, 0, 1, 0, "yellow", "_");


    Hebi.prototype.populate = function() {
      this.$nake.addClass(this.classname);
      this.$nake.html(this.word);
      this.$nake.appendTo($container);
    };


    Hebi.prototype.update = function() {
      console.log('move red');
      this.x += this.vx;
      this.y += this.vy;
      this.$nake.css({
      left: this.x * PIXEL_SIZE,
      top: this.y * PIXEL_SIZE,
      });
      console.log("test2");
      this.passThrough();
    };

    Hebi.prototype.direction = function(_vx, _vy) {
      this.vx = _vx;
      this.vy = _vy;
    };

    Hebi.prototype.passThrough = function() {

      console.log(this.x);
      console.log(this.vx);

      if ((this.vx = 1) && ((this.x + 21) > $container.width())) {
        this.x = 0;
        console.log(this.x);

      }

    };




    var red = new Hebi(-5, 0, 1, 0, "red", "|");
    // var yellow = new Hebi(477, 480, -1, 0, "yellow", "_");

    red.populate();
    // yellow.populate();
    setInterval(red.update.bind(red), 10);
    // setInterval(yellow.update.bind(yellow), 10);

    red.passThrough();

    function doKeyDown(evt) {
      switch (evt.keyCode) {
        case 87: //up
        red.direction(0, -1);
        console.log(red.direction);
        break;

        case 83: //down
        red.direction(0, 1);
        console.log(red.direction);
        break;

        case 65: //left
        red.direction(-1, 0);
        console.log(red.direction);
        break;

        case 68: //right
        red.direction(1, 0);
        console.log(red.direction);
        break;
      }
    }



    window.addEventListener('keydown', doKeyDown, true);
    // window.addEventListener('keydown', doKeyDownTwo, true);


});
