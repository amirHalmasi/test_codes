"use strict";
////////////////////////////////////////////////////////
//https://stackoverflow.com/questions/55012375/give-the-difference-between-input-value-and-input-textcontent-why-is-one-used-i

//input.value is for form elements to get the value of the form element. input.textContent is for other elements to get the content of the element.
//////////////////////////////////////////////////////////////
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let message = document.querySelector(".message");
let check = document.querySelector(".check");
let again = document.querySelector(".again");
let highscore = 0;
let score = 20;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
check.addEventListener("click", checkNum);
again.addEventListener("click", playAgain);
///////////////////////////////////////////////////////////////
function checkNum() {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no number
  if (!guess) {
    displayMessage("⛔ No number!");

    //when player wins
  } else if (secretNumber === guess) {
    displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when player guess is wrong
  } else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
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
