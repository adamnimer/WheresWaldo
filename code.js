var total_score = 0;
var number_lives = 3;
var total_score2 = 0;
var total_score3 = 0;
var number_lives = 3;
var number_lives2 = 3;
var number_lives3 = 3;

setPosition("waldo1", randomNumber(50,280), randomNumber(50, 350));
setScreen("welcome_screen");
setText("total_score2", total_score);

onEvent("waldo1", "click", function() {
     score1();
});
onEvent("waldo2", "click", function( ) {
  score2();
});
onEvent("waldo3", "click", function( ) {
  score3();
});
onEvent("start_button", "click", function() {
  setScreen("game_screen1");
  var number_lives = 3;
  setNumber("number_lives", number_lives);
});
onEvent("background1", "click", function() {
lifeInput();
});
onEvent("background2", "click", function() {
 lifeInput();
});
onEvent("background3", "click", function() {
  lifeInput();
});
onEvent("playAgain_button", "click", function() {
  resetButton();
});
onEvent("tryAgain_button", "click", function() {
  resetButton();
});
onEvent("gameCredits_button", "click", function( ) {
  setScreen("gameCredits_screen");
});
onEvent("mainMenu_button", "click", function( ) {
  resetButton();
});

//determines amount of lives 
function lifeCounter() {
  number_lives = number_lives - 1;
  setText("number_lives", number_lives);
  number_lives2 = number_lives2 - 1;
  setText("number_lives2", number_lives2);
  number_lives3 = number_lives3 - 1;
  setText("number_lives3", number_lives3);
}

//determines lose/win
function lifeInput() {
  lifeCounter();
  oneLifeLeftWarning();
  if ((number_lives==0), number_lives2==0, number_lives3 == 0) {
    setScreen("lose_screen");
    playSound("The-Price-is-Right-Losing-Horn---Gaming-Sound-Effect-(HD).mp3", false);
  }
}

//warns player when one life remains
function oneLifeLeftWarning() {
  if ((number_lives==1), (number_lives2==1), (number_lives3 == 1)) {
    playSound("assets/Alert---Sound-Effect.mp3", false);
    setText("number_lives", "ONE LIFE REMAINING");
    setText("number_lives2", "ONE LIFE REMAINING");
    setText("number_lives3", "ONE LIFE REMAINING");
  }
}

//sets total score for first part
//positions Waldo/checks win
function score1() {
  total_score = total_score+1;
  setText("total_score", total_score);
  total_score2 = total_score2+1;
  setText("total_score2", total_score2);
  total_score3 = total_score3+1;
  setText("total_score3", total_score3);
  setScreen("game_screen2");
  setPosition("waldo2", randomNumber(50,280), randomNumber(50, 350));
  if (total_score2>=10) {
    setScreen("win_screen");
  }
}

//sets total score for 2nd part
//positions waldo
function score2() {
  total_score = total_score+1;
  setText("total_score", total_score);
  total_score2 = total_score2+1;
  setText("total_score2", total_score2);
  total_score3 = total_score3+1;
  setText("total_score3", total_score3);
  setScreen("game_screen3");
  setPosition("waldo3", randomNumber(50,280), randomNumber(50, 350));
  if (total_score>=10) {
    setScreen("win_screen");
  }
}

function score3() {
  total_score = total_score+1;
  setText("total_score", total_score);
  total_score2 = total_score2+1;
  setText("total_score2", total_score2);
  total_score3 = total_score3+1;
  setText("total_score3", total_score3);
  setScreen("game_screen1");
  setPosition("waldo1", randomNumber(50,280), randomNumber(50, 350));
  if (total_score>=10) {
    setScreen("win_screen");
  }
}

//resets game
function resetButton() {
  setText("total_score", "0");
total_score = 0;
setText("total_score2", "0");
total_score2 = 0;
setText("total_score3", "0");
total_score3 = 0;
setText("number_lives", "3");
number_lives = 3;
setText("number_lives2", "3");
number_lives2 = 3;
setText("number_lives3", "3");
number_lives3 = 3;
  setScreen("welcome_screen");
}
