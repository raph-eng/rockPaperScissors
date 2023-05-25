const moves = ["rock", "paper", "scissors"];

let result = document.getElementById('game-result');
let computerMove;
let playerMove;

function getComputerMove() {
  return moves[Math.floor(Math.random() * 3)];
}

function showResult(playerMove, computerMove) {
  if (playerMove === computerMove) {
    result.textContent = `CPU: ${computerMove} - TIE`;
    /* All possible winning outcomes for the Player */
  } else if ((playerMove === "rock" && computerMove === "scissors") ||
            (playerMove === "scissors" && computerMove === "paper") ||
            (playerMove === "paper" && computerMove === "rock")) {
              result.textContent = `CPU: ${computerMove} - YOU WIN!`;
              /* The remaining outcomes are all losses for the Player */
            } else {
              result.textContent = `CPU: ${computerMove} - YOU LOSE!`;
            }
}

/* Add event listeners that'll then call showResult to print the game outcome onto the page */
document.getElementById("rock").addEventListener("click", function(){
  playerMove = "rock";
  computerMove = getComputerMove();
  showResult(playerMove, computerMove);
});

document.getElementById("paper").addEventListener("click", function(){
  playerMove = "paper";
  computerMove = getComputerMove();
  showResult(playerMove, computerMove);
});

document.getElementById("scissors").addEventListener("click", function(){
  playerMove = "scissors";
  computerMove = getComputerMove();
  showResult(playerMove, computerMove);
});