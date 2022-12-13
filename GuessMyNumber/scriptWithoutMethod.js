"use strict";
////////////////////////////////////////////////////////
//https://stackoverflow.com/questions/55012375/give-the-difference-between-input-value-and-input-textcontent-why-is-one-used-i

//input.value is for form elements to get the value of the form element. input.textContent is for other elements to get the content of the element.
//////////////////////////////////////////////////////////////
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = document.querySelector(".highscore");
let message = document.querySelector(".message");
let check = document.querySelector(".check");
let again = document.querySelector(".again");
let score = 20;
check.addEventListener("click", checkNum);
again.addEventListener("click", playAgain);
///////////////////////////////////////////////////////////////
function checkNum() {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no number
  if (!guess) {
    message.textContent = "⛔ No number!";

    //when player wins
  } else if (secretNumber === guess) {
    message.textContent = "🎉 Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when player guess is wrong
  } else if (secretNumber < guess) {
    if (score > 1) {
      message.textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      ocument.querySelector(".score").textContent = 0;
    }
  } else if (secretNumber > guess) {
    if (score > 0) {
      message.textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      ocument.querySelector(".score").textContent = 0;
    }
  }
}
//////////////////////////////////////////////////////

function playAgain() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "rgb(95, 90, 90)";
  document.querySelector(".number").style.width = "15rem";
}
