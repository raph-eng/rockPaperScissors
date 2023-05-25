const moves = ["rock", "paper", "scissors"];

let computerMove;
let playerMove;

function getComputerMove() {
  return moves[Math.floor(Math.random() * 3)];
}

document.getElementById("rock").addEventListener("click", function(){
  playerMove = "rock";
  computerMove = getComputerMove();
});

document.getElementById("paper").addEventListener("click", function(){
  playerMove = "paper";
  computerMove = getComputerMove();
});

document.getElementById("scissors").addEventListener("click", function(){
  playerMove = "scissors";
  computerMove = getComputerMove();
});

console.log(getComputerMove());