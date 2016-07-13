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
    alert(playerOne + " is Red,\n" + playerTwo + " is Yellow.\n\nYour directional buttons are as displayed at the bottom.\n\nEliminate your opponents by blocking them..\n or laugh as they crash into themselves.\n\nBe careful not to suffer the same fate.");
  }getName();

}

init();

$(document).ready(function() {



});
